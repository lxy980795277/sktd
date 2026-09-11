import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const languages = ["en", "de", "es", "it", "zh"];
const modules = [
  "home",
  "about",
  "contact",
  "product-categories",
  "product-stories",
  "product-pages",
  "common",
];

// Read literal dictionaries without executing application code. Spreads and imports
// of another language are deliberately rejected so missing translations cannot hide.
function readLiteral(node) {
  if (
    ts.isAsExpression(node) ||
    ts.isSatisfiesExpression(node) ||
    ts.isParenthesizedExpression(node)
  ) {
    return readLiteral(node.expression);
  }
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isNumericLiteral(node)) {
    return Number(node.text);
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword) {
    return node.kind === ts.SyntaxKind.TrueKeyword;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map(readLiteral);
  }
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(
      node.properties.map((property) => {
        assert(ts.isPropertyAssignment(property), "Dictionary entries must be explicit literals");
        assert(
          ts.isIdentifier(property.name) || ts.isStringLiteral(property.name),
          "Dictionary keys must be explicit",
        );
        return [property.name.text, readLiteral(property.initializer)];
      }),
    );
  }
  throw new Error(`Unsupported dictionary value: ${ts.SyntaxKind[node.kind]}`);
}

function readDictionary(locale, moduleName) {
  const filename = path.join(projectRoot, "src/i18n/locales", locale, `${moduleName}.ts`);
  const source = ts.createSourceFile(
    filename,
    readFileSync(filename, "utf8"),
    ts.ScriptTarget.Latest,
    true,
  );
  const values = source.statements.flatMap((statement) => {
    if (!ts.isVariableStatement(statement)) {
      return [];
    }
    return statement.declarationList.declarations
      .filter((declaration) => declaration.initializer)
      .map((declaration) => readLiteral(declaration.initializer));
  });
  assert.equal(values.length, 1, `${filename}: expected one self-contained dictionary`);
  return values[0];
}

function leaves(value, prefix = "") {
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => leaves(child, `${prefix}/${key}`));
  }
  return [[prefix, value]];
}

function checkTranslation(original, translated, label) {
  const source = new Map(leaves(original));
  const target = new Map(leaves(translated));
  assert.deepEqual(
    [...target.keys()].sort(),
    [...source.keys()].sort(),
    `${label}: dictionary shape differs`,
  );

  for (const [key, value] of source) {
    const translatedValue = target.get(key);
    assert.equal(typeof translatedValue, typeof value, `${label}${key}: value type differs`);
    if (typeof value !== "string") {
      assert.equal(translatedValue, value, `${label}${key}: structural value changed`);
      continue;
    }

    assert(translatedValue.trim(), `${label}${key}: empty translation`);
    const immutable =
      /\/(id|year|author|\w*[Hh]ref)$/.test(key) || /\/(image|images)(\/\d+)?$/.test(key);
    if (immutable) {
      assert.equal(translatedValue, value, `${label}${key}: identifier or resource changed`);
    }
    if (key.endsWith("/company")) {
      // Testimonial attribution combines a brand with a localizable city name.
      assert.equal(
        translatedValue.split(" · ")[0],
        value.split(" · ")[0],
        `${label}${key}: company name changed`,
      );
    }
    if (key.endsWith("/address")) {
      // Preserve the postal street and number; country/city names may be localized.
      assert.equal(
        translatedValue.split(",")[0],
        value.split(",")[0],
        `${label}${key}: postal street changed`,
      );
    }
    if (/\/specs\/\d+$/.test(key)) {
      const numbers = (text) => text.match(/\d+(?:[.,]\d+)?\+?/g) ?? [];
      assert.deepEqual(
        numbers(translatedValue),
        numbers(value),
        `${label}${key}: numeric specification changed`,
      );
    }
    const placeholders = (text) => (text.match(/\{\w+\}/g) ?? []).sort();
    assert.deepEqual(
      placeholders(translatedValue),
      placeholders(value),
      `${label}${key}: placeholders differ`,
    );
    if (!immutable && value.split(/\s+/).length >= 8) {
      assert.notEqual(translatedValue, value, `${label}${key}: English paragraph was copied`);
    }
  }
}

const dictionaries = Object.fromEntries(
  languages.map((locale) => [
    locale,
    Object.fromEntries(
      modules.map((moduleName) => [moduleName, readDictionary(locale, moduleName)]),
    ),
  ]),
);

for (const locale of languages) {
  for (const moduleName of modules) {
    for (const [key, value] of leaves(dictionaries[locale][moduleName])) {
      if (typeof value === "string") {
        assert(value.trim(), `${locale}/${moduleName}${key}: empty content`);
      }
    }
  }

  const categories = dictionaries[locale]["product-categories"];
  const original = dictionaries.en["product-categories"];
  const structure = (items) =>
    items.map((category) => ({
      id: category.id,
      products: category.products.map((product) => ({
        id: product.id,
        specs: product.specs.length,
      })),
    }));
  assert.equal(categories.length, 6, `${locale}: expected 6 categories`);
  assert.equal(
    categories.flatMap((category) => category.products).length,
    39,
    `${locale}: expected 39 products`,
  );
  assert.deepEqual(
    structure(categories),
    structure(original),
    `${locale}: product identities/order/spec counts differ`,
  );
}

for (const locale of ["es", "it"]) {
  for (const moduleName of modules) {
    checkTranslation(
      dictionaries.en[moduleName],
      dictionaries[locale][moduleName],
      `${locale}/${moduleName}`,
    );
  }
  for (const key of ["featuredBanner", "about"]) {
    const field = key === "featuredBanner" ? "title" : "tagline";
    assert.equal(
      dictionaries[locale].home[key][field].split("/").length,
      dictionaries.en.home[key][field].split("/").length,
      `${locale}: preserve existing ${key} title line groups`,
    );
  }
}

process.stdout.write(
  "i18n checks passed: 5 complete content languages, ES/IT source parity, 6 categories and 39 products per language.\n",
);
