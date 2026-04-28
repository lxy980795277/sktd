import fs from "fs";
import path from "path";

export type ProductItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
  specs: string[];
};

export type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  products: ProductItem[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "clothes",
    title: "Clothes",
    summary: "Lifestyle apparel programs with material flexibility and seasonal merchandising fit.",
    products: [
      {
        id: "womens-clothing",
        name: "Women's Clothing",
        description:
          "A curated women's apparel range spanning outerwear, tops, dresses, and seasonal essentials.",
        image: "/images/products/clothes/womens-clothing/1.jpg",
        highlight:
          "Fashion-forward women's wear with broad market adaptability and stable supply programs.",
        specs: [
          "Category: Women's Apparel",
          "Range: Tops / Dresses / Outerwear",
          "Use Case: Fashion retail",
        ],
      },
      {
        id: "mens-clothing",
        name: "Men's Clothing",
        description: "Core men's apparel selection from casual basics to functional outerwear.",
        image: "/images/products/clothes/mens-clothing/1.jpg",
        highlight: "Reliable men's wardrobe range for multi-channel retail replenishment.",
        specs: [
          "Category: Men's Apparel",
          "Range: Tops / Jackets / Bottoms",
          "Use Case: Casual & lifestyle retail",
        ],
      },
      {
        id: "activewear",
        name: "Activewear",
        description:
          "Performance and functional sportswear designed for active lifestyles and training use.",
        image: "/images/products/clothes/activewear/1.jpg",
        highlight:
          "Sport-ready apparel with technical fabric and flexible sizing for diverse markets.",
        specs: [
          "Fabric: Performance blend",
          "Range: Training / Outdoor",
          "Use Case: Sports & activewear retail",
        ],
      },
    ],
  },
  {
    id: "foods",
    title: "Foods",
    summary: "Food product directions supported by controlled sourcing and logistics planning.",
    products: [
      {
        id: "nuts",
        name: "Nuts & Dried Fruits",
        description:
          "Premium nut and dried fruit assortment including cashews, peanuts, and mixed varieties.",
        image: "/images/products/foods/nuts/1.jpg",
        highlight:
          "High-demand snack staples with stable sourcing and export-ready packaging.",
        specs: [
          "Category: Nuts / Dried Fruits",
          "Packaging: Retail & bulk",
          "Use Case: Grocery / snack retail",
        ],
      },
      {
        id: "canned-foods",
        name: "Canned Foods",
        description:
          "Shelf-stable canned food range for household and commercial distribution channels.",
        image: "/images/products/foods/canned-foods/1.jpg",
        highlight: "Long-shelf-life food category for reliable supply across global markets.",
        specs: [
          "Format: Canned",
          "Shelf Life: 24+ months",
          "Use Case: Grocery / wholesale",
        ],
      },
      {
        id: "honey",
        name: "Honey & Natural Spreads",
        description:
          "Pure honey and natural spread range sourced for quality consistency and cross-market appeal.",
        image: "/images/products/foods/honey/1.jpg",
        highlight:
          "Natural sweetener category with premium positioning for gift and retail channels.",
        specs: [
          "Type: Pure honey",
          "Packaging: Jar / gift set",
          "Use Case: Premium food retail",
        ],
      },
      {
        id: "noodles",
        name: "Noodles & Pasta",
        description:
          "Versatile noodle range covering dried formats for everyday cooking and retail programs.",
        image: "/images/products/foods/noodles/1.jpg",
        highlight:
          "Staple food category with broad consumer appeal and repeatable supply programs.",
        specs: [
          "Format: Dried noodles",
          "Variety: Multiple cuts",
          "Use Case: Grocery / household",
        ],
      },
    ],
  },
  {
    id: "home-appliances",
    title: "Home Appliances",
    summary:
      "Furniture and interior lifestyle products for home and hospitality segments.",
    products: [
      {
        id: "leisure-armchair",
        name: "Leisure Armchair",
        description:
          "Comfortable accent armchair with modern styling for living room and lounge settings.",
        image: "/images/products/home-appliances/leisure-armchair/1.jpg",
        highlight:
          "Statement seating concept for premium lifestyle and hospitality interior programs.",
        specs: [
          "Style: Leisure / lounge",
          "Upholstery: Fabric / textile",
          "Use Case: Living room / hotel lounge",
        ],
      },
      {
        id: "two-tone-carpet",
        name: "Two-Tone Carpet",
        description:
          "Woven two-tone carpet with layered texture for modern residential and hotel environments.",
        image: "/images/products/home-appliances/two-tone-carpet/1.jpg",
        highlight: "Soft-surface flooring option for home and hospitality interior programs.",
        specs: [
          "Material: Woven textile",
          "Style: Two-tone contrast",
          "Use Case: Bedroom / lounge",
        ],
      },
      {
        id: "bedding-set",
        name: "Bedding Set",
        description:
          "Complete bedding set with quilt cover, pillowcases, and coordinated accessories.",
        image: "/images/products/home-appliances/bedding-set/1.jpg",
        highlight:
          "Layered comfort bedding program for lifestyle retail and hospitality room programs.",
        specs: [
          "Fabric: Microfiber blend",
          "Set: Multi-piece",
          "Use Case: Home / hotel room",
        ],
      },
      {
        id: "outdoor-furniture",
        name: "Outdoor Furniture",
        description:
          "Weather-resistant outdoor furniture set for garden, patio, and leisure spaces.",
        image: "/images/products/home-appliances/outdoor-furniture/1.jpg",
        highlight:
          "Durable outdoor arrangement for residential and hospitality open-air settings.",
        specs: [
          "Frame: Metal / aluminium",
          "Finish: Weather-resistant",
          "Use Case: Garden / terrace",
        ],
      },
      {
        id: "sofa",
        name: "Sofa",
        description:
          "Contemporary sofa range covering single, double, and modular configurations.",
        image: "/images/products/home-appliances/sofa/1.jpg",
        highlight:
          "Core living room seating program for retail, project, and hospitality channels.",
        specs: [
          "Style: Contemporary",
          "Configuration: Multiple sizes",
          "Use Case: Living room / lounge",
        ],
      },
      {
        id: "swing-chair",
        name: "Swing Chair",
        description:
          "Hanging swing chair for indoor and outdoor leisure with modern design appeal.",
        image: "/images/products/home-appliances/swing-chair/1.jpg",
        highlight:
          "Distinctive leisure seating concept for home lifestyle and hospitality décor.",
        specs: [
          "Style: Hanging / swing",
          "Use: Indoor / outdoor",
          "Use Case: Home / resort",
        ],
      },
      {
        id: "corner-storage-cabinet",
        name: "Corner Storage Cabinet",
        description:
          "Space-efficient corner storage solution for compact living and room organization.",
        image: "/images/products/home-appliances/corner-storage-cabinet/1.jpg",
        highlight:
          "Vertical storage format designed for urban apartments and compact layouts.",
        specs: [
          "Structure: Corner-fit",
          "Assembly: Flat-pack",
          "Use Case: Living room / bedroom",
        ],
      },
      {
        id: "patio-umbrella",
        name: "Patio Umbrella",
        description:
          "Large-canopy patio umbrella for garden, pool, and outdoor hospitality areas.",
        image: "/images/products/home-appliances/patio-umbrella/1.jpg",
        highlight:
          "UV-resistant shade solution for residential gardens and commercial terraces.",
        specs: [
          "Canopy: UV-resistant fabric",
          "Structure: Freestanding",
          "Use Case: Garden / poolside",
        ],
      },
    ],
  },
  {
    id: "home-furnishings",
    title: "Home Furnishings",
    summary:
      "Small kitchen and household appliances for everyday home use across global markets.",
    products: [
      {
        id: "health-kettle",
        name: "Health Kettle",
        description:
          "Multi-function health kettle for herbal infusions, stewing, and slow-brew routines.",
        image: "/images/products/home-furnishings/health-kettle/1.jpg",
        highlight: "Wellness-focused kitchen appliance for daily health routines at home.",
        specs: [
          "Power: Household standard",
          "Function: Multi-brew",
          "Use Case: Kitchen daily use",
        ],
      },
      {
        id: "water-purifier",
        name: "Water Purifier",
        description: "Compact countertop water purifier for clean drinking water at home.",
        image: "/images/products/home-furnishings/water-purifier/1.jpg",
        highlight:
          "Essential home water solution with easy filter replacement and compact footprint.",
        specs: [
          "Type: Countertop",
          "Filter: Multi-stage",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "humidifier",
        name: "Humidifier",
        description:
          "Quiet ultrasonic humidifier for maintaining comfortable indoor air moisture.",
        image: "/images/products/home-furnishings/humidifier/1.jpg",
        highlight: "Bedroom-friendly humidifier with low noise and long-running capacity.",
        specs: [
          "Type: Ultrasonic",
          "Noise: Low profile",
          "Use Case: Bedroom / living room",
        ],
      },
      {
        id: "vacuum-cleaner",
        name: "Vacuum Cleaner",
        description:
          "Efficient household vacuum cleaner covering floors, carpets, and upholstery.",
        image: "/images/products/home-furnishings/vacuum-cleaner/1.jpg",
        highlight: "Reliable cleaning appliance for multi-surface home use.",
        specs: [
          "Type: Household vacuum",
          "Surface: Multi-floor",
          "Use Case: Home cleaning",
        ],
      },
      {
        id: "hair-dryer",
        name: "Hair Dryer",
        description:
          "High-speed hair dryer with multiple heat settings for home and travel use.",
        image: "/images/products/home-furnishings/hair-dryer/1.jpg",
        highlight: "Consumer-grade hair dryer for household and export retail channels.",
        specs: [
          "Power: Standard output",
          "Settings: Multi-speed",
          "Use Case: Home / hotel amenity",
        ],
      },
      {
        id: "coffee-maker",
        name: "Coffee Maker",
        description: "Drip coffee maker designed for daily home brewing routines.",
        image: "/images/products/home-furnishings/coffee-maker/1.jpg",
        highlight: "Accessible coffee appliance for mainstream household consumption.",
        specs: [
          "Type: Drip brew",
          "Capacity: Standard",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "desk-fan",
        name: "Desk Fan",
        description: "Compact desk fan with adjustable speed for office and bedroom use.",
        image: "/images/products/home-furnishings/desk-fan/1.jpg",
        highlight: "Energy-efficient personal cooling for home and office environments.",
        specs: [
          "Type: Desk / table",
          "Noise: Quiet operation",
          "Use Case: Bedroom / office",
        ],
      },
      {
        id: "garment-steamer",
        name: "Garment Steamer",
        description:
          "Handheld garment steamer for wrinkle removal on clothing and home textiles.",
        image: "/images/products/home-furnishings/garment-steamer/1.jpg",
        highlight: "Travel and home-use steamer for quick fabric care.",
        specs: [
          "Type: Handheld",
          "Heat-up: Fast",
          "Use Case: Home / travel care",
        ],
      },
      {
        id: "food-processor",
        name: "Food Processor",
        description:
          "Versatile food processor for chopping, blending, and kitchen prep tasks.",
        image: "/images/products/home-furnishings/food-processor/1.jpg",
        highlight: "Multi-function kitchen prep appliance for efficient daily cooking.",
        specs: [
          "Function: Multi-process",
          "Capacity: Family size",
          "Use Case: Kitchen prep",
        ],
      },
      {
        id: "breakfast-maker",
        name: "Breakfast Maker",
        description:
          "All-in-one breakfast station combining toasting, egg cooking, and warming functions.",
        image: "/images/products/home-furnishings/breakfast-maker/1.jpg",
        highlight: "Compact morning routine appliance for urban household kitchens.",
        specs: [
          "Function: Multi-cook",
          "Size: Compact",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "juicer",
        name: "Juicer",
        description:
          "Centrifugal juicer for fresh fruit and vegetable extraction at home.",
        image: "/images/products/home-furnishings/juicer/1.jpg",
        highlight:
          "Accessible juicing appliance for health-conscious household segments.",
        specs: [
          "Type: Centrifugal",
          "Clean: Dishwasher-safe parts",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "cooking-machine",
        name: "Cooking Machine",
        description:
          "Automated cooking machine for stir-frying, steaming, and multi-mode meal preparation.",
        image: "/images/products/home-furnishings/cooking-machine/1.jpg",
        highlight: "Smart cooking format for time-efficient urban home routines.",
        specs: [
          "Modes: Multi-cook",
          "Control: Auto program",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "oven",
        name: "Countertop Oven",
        description: "Compact electric oven for baking, roasting, and grilling at home.",
        image: "/images/products/home-furnishings/oven/1.jpg",
        highlight: "Versatile home baking appliance for everyday cooking programs.",
        specs: [
          "Type: Countertop electric",
          "Capacity: Standard",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "induction-cooker",
        name: "Induction Cooker",
        description:
          "Energy-efficient induction cooker for fast and precise home cooking.",
        image: "/images/products/home-furnishings/induction-cooker/1.jpg",
        highlight: "Safe and efficient cooktop solution for modern urban kitchens.",
        specs: [
          "Type: Induction",
          "Safety: Auto-off",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "air-fryer",
        name: "Air Fryer",
        description:
          "Hot-air circulation fryer for low-oil cooking of fries, meats, and snacks.",
        image: "/images/products/home-furnishings/air-fryer/1.jpg",
        highlight:
          "High-demand healthier cooking appliance for global consumer markets.",
        specs: [
          "Type: Air circulation",
          "Capacity: Family size",
          "Use Case: Home kitchen",
        ],
      },
      {
        id: "mite-remover",
        name: "Mite Remover",
        description:
          "UV handheld mite remover for mattresses, bedding, and upholstered furniture.",
        image: "/images/products/home-furnishings/mite-remover/1.jpg",
        highlight:
          "Specialized home hygiene appliance for health-conscious households.",
        specs: [
          "Type: UV handheld",
          "Surface: Mattress / sofa",
          "Use Case: Home hygiene",
        ],
      },
      {
        id: "electric-fan",
        name: "Electric Fan",
        description:
          "Floor-standing or wall-mounted electric fan for home and commercial cooling.",
        image: "/images/products/home-furnishings/electric-fan/1.jpg",
        highlight:
          "Reliable cooling appliance for warm-climate household and hospitality channels.",
        specs: [
          "Type: Standing / wall",
          "Speed: Multi-setting",
          "Use Case: Home / commercial",
        ],
      },
    ],
  },
  {
    id: "hotel-supplies",
    title: "Hotel Supplies",
    summary:
      "Hospitality-focused room and public-area supplies with consistent quality standards.",
    products: [
      {
        id: "flashlight",
        name: "Flashlight",
        description:
          "Durable handheld flashlight for hotel room emergency kits and utility use.",
        image: "/images/products/hotel-supplies/flashlight/1.jpg",
        highlight:
          "Reliable illumination tool for hospitality safety and emergency preparedness.",
        specs: [
          "Type: Handheld LED",
          "Use: Emergency / utility",
          "Use Case: Hotel room amenity",
        ],
      },
      {
        id: "bathroom-supplies",
        name: "Bathroom Supplies",
        description:
          "Complete bathroom supply set including towels, slippers, disposables, and accessories.",
        image: "/images/products/hotel-supplies/bathroom-supplies/1.jpg",
        highlight:
          "Comprehensive guest bathroom program for hotel chain standardization.",
        specs: [
          "Set: Full bathroom kit",
          "Wash: High-frequency ready",
          "Use Case: Hotel guest room",
        ],
      },
      {
        id: "cleaning-tools",
        name: "Cleaning Tools",
        description:
          "Professional cleaning equipment for hotel room and public area housekeeping.",
        image: "/images/products/hotel-supplies/cleaning-tools/1.jpg",
        highlight:
          "Efficient cleaning tool set for hospitality housekeeping operations.",
        specs: [
          "Set: Multi-tool",
          "Durability: Commercial grade",
          "Use Case: Hotel housekeeping",
        ],
      },
      {
        id: "soap-dispenser",
        name: "Soap Dispenser",
        description:
          "Wall-mounted soap dispenser for hotel bathroom and public washroom installations.",
        image: "/images/products/hotel-supplies/soap-dispenser/1.jpg",
        highlight:
          "Hygienic dispensing fixture for consistent guest bathroom experience.",
        specs: [
          "Type: Wall-mount",
          "Refill: Easy access",
          "Use Case: Hotel bathroom / public area",
        ],
      },
      {
        id: "display-stand",
        name: "Display Stand",
        description:
          "Branded display stands and signage for hotel room services and public area navigation.",
        image: "/images/products/hotel-supplies/display-stand/1.jpg",
        highlight:
          "Professional in-room and public area communication solution for hospitality brands.",
        specs: [
          "Type: Freestanding / table",
          "Material: Acrylic / metal",
          "Use Case: Hotel room / lobby",
        ],
      },
      {
        id: "vanity-mirror",
        name: "Vanity Mirror",
        description:
          "Folding and wall-mounted vanity mirrors for hotel bathroom and dressing areas.",
        image: "/images/products/hotel-supplies/vanity-mirror/1.jpg",
        highlight: "Premium bathroom accessory for upscale hotel room programming.",
        specs: [
          "Type: Foldable / wall-mount",
          "Magnification: 1x / 5x",
          "Use Case: Hotel bathroom",
        ],
      },
      {
        id: "hotel-decor",
        name: "Hotel Décor",
        description:
          "Decorative elements including wall art, door signage, and themed accent pieces.",
        image: "/images/products/hotel-supplies/hotel-decor/1.jpg",
        highlight:
          "Curated décor program for hotel room atmosphere and brand identity.",
        specs: [
          "Type: Wall art / signage",
          "Style: Neutral / branded",
          "Use Case: Hotel room / corridor",
        ],
      },
    ],
  },
  {
    id: "shoes",
    title: "Shoes",
    summary:
      "Footwear assortments covering casual, indoor, and lifestyle usage scenarios.",
    products: [
      {
        id: "urban-comfort-sneakers",
        name: "Urban Comfort Sneakers",
        description:
          "Daily sneaker direction balancing comfort, durability, and clean appearance.",
        image: "/images/products/shoes/urban-comfort-sneakers/1.jpg",
        highlight: "All-day comfort sneaker concept for mainstream lifestyle channels.",
        specs: [
          "Upper: Breathable mix",
          "Sole: Cushioned profile",
          "Use Case: City daily wear",
        ],
      },
      {
        id: "indoor-soft-slippers",
        name: "Indoor Soft Slippers",
        description:
          "Home-focused footwear category with stable quality and gentle fit.",
        image: "/images/products/shoes/indoor-soft-slippers/1.jpg",
        highlight:
          "Comfort-first indoor footwear line for household and hospitality usage.",
        specs: [
          "Lining: Soft-touch",
          "Outsole: Indoor-safe grip",
          "Use Case: Home / hotel room",
        ],
      },
      {
        id: "lifestyle-walking-shoes",
        name: "Lifestyle Walking Shoes",
        description: "Flexible walking option for mixed urban and casual applications.",
        image: "/images/products/shoes/lifestyle-walking-shoes/1.jpg",
        highlight: "Versatile walking shoe format for broad consumer profiles.",
        specs: [
          "Flex: Mid-flex sole",
          "Weight: Lightweight class",
          "Use Case: Daily walking",
        ],
      },
      {
        id: "lightweight-canvas-series",
        name: "Lightweight Canvas Series",
        description:
          "Breathable canvas footwear for seasonal and everyday sales programs.",
        image: "/images/products/shoes/lightweight-canvas-series/1.jpg",
        highlight: "Canvas footwear range aligned with seasonal casual demand.",
        specs: [
          "Upper: Canvas",
          "Style: Casual low-cut",
          "Use Case: Spring/summer retail",
        ],
      },
      {
        id: "hybrid-comfort-loafers",
        name: "Hybrid Comfort Loafers",
        description: "Semi-formal loafer concept for office-to-casual transitions.",
        image: "/images/products/shoes/hybrid-comfort-loafers/1.jpg",
        highlight:
          "Hybrid loafer direction bridging business-casual and lifestyle segments.",
        specs: [
          "Style: Semi-formal",
          "Insole: Comfort cushioning",
          "Use Case: Office / smart casual",
        ],
      },
      {
        id: "outdoor-casual-sandals",
        name: "Outdoor Casual Sandals",
        description: "Casual outdoor sandal option with practical grip and comfort.",
        image: "/images/products/shoes/outdoor-casual-sandals/1.jpg",
        highlight: "Open-structure sandal format for warm-weather outdoor routines.",
        specs: [
          "Design: Open upper",
          "Traction: Patterned outsole",
          "Use Case: Outdoor casual",
        ],
      },
    ],
  },
];

export const getProductCategories = (): ProductCategory[] => {
  return PRODUCT_CATEGORIES;
};

export const getProductCategoryById = (categoryId: string): ProductCategory | undefined => {
  return PRODUCT_CATEGORIES.find((category) => {
    return category.id === categoryId;
  });
};

export const getProductByIds = (
  categoryId: string,
  productId: string,
): { category: ProductCategory; product: ProductItem } | undefined => {
  const category = getProductCategoryById(categoryId);

  if (!category) {
    return undefined;
  }

  const product = category.products.find((item) => {
    return item.id === productId;
  });

  if (!product) {
    return undefined;
  }

  return { category, product };
};

export const getAllProductSlugs = (): Array<{ category: string; productId: string }> => {
  return PRODUCT_CATEGORIES.flatMap((category) => {
    return category.products.map((product) => {
      return { category: category.id, productId: product.id };
    });
  });
};

/**
 * 服务端专用：读取品类目录下所有商品的所有图片路径
 * 用于商品详情页底部品类轮播图（ProductFilmSection）
 */
export const getCategoryProductImages = (categoryId: string): string[] => {
  const categoryDir = path.join(process.cwd(), "public", "images", "products", categoryId);

  try {
    const productDirs = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    return productDirs.flatMap((productId) => {
      const productDir = path.join(categoryDir, productId);
      return fs
        .readdirSync(productDir)
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort()
        .map((f) => `/images/products/${categoryId}/${productId}/${f}`);
    });
  } catch {
    return [];
  }
};
