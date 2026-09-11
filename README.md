# SKTD Homepage

A multilingual corporate homepage for SKTD built with Next.js, TypeScript, Tailwind CSS, and lucide-react.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run check:i18n` — validate translation coverage, product IDs, specifications, and shared resources.

## Locales

- `en`
- `de`
- `es`
- `it`

The default language is English. Chinese (`zh`) content is retained but its routes and language-switcher entry are disabled.

Pages use `/{locale}/home`, `/{locale}/about`, `/{locale}/products`, and `/{locale}/contact`. Product details use `/{locale}/products/{category}/{productId}`.

Translations are maintained in `src/i18n/locales/{locale}/`, with shared types in `src/i18n/types/`. The existing content getters remain the entry points for pages and components. Spanish and Italian use English as the source, with German as a terminology reference.

Deferred work is tracked in [the multilingual TODO list](docs/i18n-todo.md).
