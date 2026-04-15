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
    id: "home-furnishings",
    title: "Home Furnishings",
    summary:
      "Furniture and interior essentials designed for practical comfort and scalable programs.",
    products: [
      {
        id: "corner-storage-rack",
        name: "Corner Storage Rack",
        description:
          "Right-angle rack solution for compact corners and vertical space optimization.",
        image: "/images/goods/1.jpg",
        highlight: "Space-saving storage structure for modern apartments and compact layouts.",
        specs: [
          "Material: Powder-coated steel",
          "Structure: 3-tier corner format",
          "Use Case: Living room / study",
        ],
      },
      {
        id: "two-tone-carpet",
        name: "Two Tone Carpet",
        description: "Lightweight woven carpet with balanced texture for modern living spaces.",
        image: "/images/goods/2.jpg",
        highlight: "Soft-touch woven surface tailored for home and hospitality lounge zones.",
        specs: ["Material: Cotton blend", "Backing: Non-rubber", "Use Case: Bedroom / lounge"],
      },
      {
        id: "exquisite-bed-set",
        name: "Exquisite Bed Set",
        description:
          "Textured bedding set focused on comfort, visual quality, and repeatable supply.",
        image: "/images/goods/3.jpg",
        highlight: "Layered comfort bedding program for lifestyle retail and project channels.",
        specs: [
          "Fabric: Microfiber blend",
          "Set: Quilt cover + pillowcases",
          "Use Case: Home / hotel room",
        ],
      },
      {
        id: "courtyard-furniture-set",
        name: "Courtyard Furniture Set",
        description: "Outdoor furniture group built for weather resistance and daily durability.",
        image: "/images/goods/4.jpg",
        highlight: "Reliable outdoor arrangement with long-cycle usability for open-air spaces.",
        specs: [
          "Frame: Metal tube",
          "Finish: Weather-resistant coating",
          "Use Case: Garden / patio",
        ],
      },
      {
        id: "double-top-sunshade",
        name: "Double-Top Sunshade",
        description:
          "Commercial and residential canopy structure with stable coverage performance.",
        image: "/images/goods/5.jpg",
        highlight: "Dual-roof shading concept for improved airflow and sun protection.",
        specs: [
          "Canopy: UV-resistant fabric",
          "Structure: Dual-top design",
          "Use Case: Terrace / outdoor market",
        ],
      },
      {
        id: "accent-lounge-chair",
        name: "Accent Lounge Chair",
        description:
          "Formal lounge seating with long-cycle usability for premium interior programs.",
        image: "/images/goods/6.jpg",
        highlight: "Statement seating option for reception, lounge, and curated retail displays.",
        specs: [
          "Style: Wingback accent",
          "Support: High back + armrest",
          "Use Case: Lobby / home lounge",
        ],
      },
    ],
  },
  {
    id: "hotel-supplies",
    title: "Hotel Supplies",
    summary: "Hospitality-focused room and public-area supplies with consistent quality standards.",
    products: [
      {
        id: "guest-room-bedding-program",
        name: "Guest Room Bedding Program",
        description: "Standardized bedding combination for reliable hotel room operations.",
        image: "/images/goods/3.jpg",
        highlight: "Stable hospitality bedding solution for consistent guest-room experience.",
        specs: [
          "Type: Commercial-grade set",
          "Wash Cycle: High-frequency ready",
          "Use Case: Hotel chain rooms",
        ],
      },
      {
        id: "lobby-seating-package",
        name: "Lobby Seating Package",
        description: "Reception-ready seating lineup for stable style and wear performance.",
        image: "/images/goods/6.jpg",
        highlight: "Formal seating bundle designed for front-desk and waiting areas.",
        specs: [
          "Frame: Reinforced wood/metal",
          "Upholstery: Easy-maintenance fabric",
          "Use Case: Lobby / front office",
        ],
      },
      {
        id: "terrace-sunshade-system",
        name: "Terrace Sunshade System",
        description: "Outdoor shade setup for patio, pool, and hospitality leisure areas.",
        image: "/images/goods/5.jpg",
        highlight: "All-weather canopy direction for resort and café terrace operations.",
        specs: [
          "Canopy: Waterproof UV layer",
          "Mounting: Freestanding",
          "Use Case: Poolside / terrace",
        ],
      },
      {
        id: "compact-storage-fixture",
        name: "Compact Storage Fixture",
        description: "Space-efficient storage components for room-side organization needs.",
        image: "/images/goods/1.jpg",
        highlight: "Modular room-side storage concept for housekeeping and guest convenience.",
        specs: [
          "Format: Corner-fit vertical",
          "Assembly: Flat-pack compatible",
          "Use Case: Guest room / service area",
        ],
      },
      {
        id: "public-area-floor-carpet",
        name: "Public Area Floor Carpet",
        description: "Durable surface carpet options suited for high-footfall pathways.",
        image: "/images/goods/2.jpg",
        highlight: "Traffic-resilient flooring layer supporting consistent visual quality.",
        specs: [
          "Weave: Dense loop pattern",
          "Care: Easy-clean finish",
          "Use Case: Corridor / lounge",
        ],
      },
      {
        id: "outdoor-lounge-set",
        name: "Outdoor Lounge Set",
        description: "Conversation set for open-air guest zones and hospitality projects.",
        image: "/images/goods/4.jpg",
        highlight: "Comfort-focused furniture bundle for outdoor social and relaxation areas.",
        specs: [
          "Set: Sofa + table combo",
          "Resistance: Moisture-ready",
          "Use Case: Resort / rooftop",
        ],
      },
    ],
  },
  {
    id: "home-appliances",
    title: "Home appliances",
    summary: "Everyday appliance directions from entry-level to premium residential segments.",
    products: [
      {
        id: "smart-kitchen-helper-series",
        name: "Smart Kitchen Helper Series",
        description: "User-friendly kitchen appliance lineup for daily family routines.",
        image: "/images/goods/7.jpg",
        highlight: "Compact kitchen appliance concept for efficient home meal preparation.",
        specs: [
          "Power Class: Household standard",
          "Interface: Simple operation panel",
          "Use Case: Kitchen daily use",
        ],
      },
      {
        id: "efficient-cleaning-unit",
        name: "Efficient Cleaning Unit",
        description: "Cleaning appliance direction focused on energy efficiency and convenience.",
        image: "/images/goods/8.jpg",
        highlight: "Time-saving cleaning format designed for modern urban homes.",
        specs: [
          "Efficiency: Low-energy profile",
          "Noise: Residential-friendly",
          "Use Case: Multi-room cleaning",
        ],
      },
      {
        id: "home-utility-core-line",
        name: "Home Utility Core Line",
        description:
          "Essential appliance grouping with controlled lead-time and stable compliance.",
        image: "/images/goods/6.jpg",
        highlight: "Core household device set for large-scale retail assortment planning.",
        specs: [
          "Compliance: Export-ready baseline",
          "Supply: Stable production cycle",
          "Use Case: Retail core SKU set",
        ],
      },
      {
        id: "compact-living-appliance",
        name: "Compact Living Appliance",
        description: "Small-footprint product option for urban apartments and tight layouts.",
        image: "/images/goods/1.jpg",
        highlight: "Space-aware appliance design for compact home environments.",
        specs: [
          "Size: Compact profile",
          "Placement: Counter/side-unit",
          "Use Case: Studio apartment",
        ],
      },
      {
        id: "comfort-climate-assistant",
        name: "Comfort Climate Assistant",
        description: "Home comfort appliance concept supporting four-season indoor needs.",
        image: "/images/goods/5.jpg",
        highlight: "Balanced indoor comfort module for year-round household routines.",
        specs: [
          "Function: Climate support",
          "Maintenance: Easy access",
          "Use Case: Bedroom / living room",
        ],
      },
      {
        id: "modular-household-device",
        name: "Modular Household Device",
        description: "Flexible modular configuration for multi-channel retail adaptation.",
        image: "/images/goods/4.jpg",
        highlight: "Modular appliance architecture for region-specific product mix planning.",
        specs: [
          "Design: Component modular",
          "Packaging: Channel-adaptive",
          "Use Case: Multi-market launch",
        ],
      },
    ],
  },
  {
    id: "clothes",
    title: "Clothes",
    summary: "Lifestyle apparel programs with material flexibility and seasonal merchandising fit.",
    products: [
      {
        id: "casual-essentials-collection",
        name: "Casual Essentials Collection",
        description: "Daily apparel base line designed for stable replenishment cycles.",
        image: "/images/goods/8.jpg",
        highlight: "Reliable everyday-wear category for high-frequency retail demand.",
        specs: ["Fit: Daily comfort", "Fabric: Blended base", "Use Case: Casual retail assortment"],
      },
      {
        id: "home-comfort-wear",
        name: "Home Comfort Wear",
        description: "Soft-touch homewear direction centered on comfort and clean finishing.",
        image: "/images/goods/2.jpg",
        highlight: "Relaxed-fit apparel direction tailored to home lifestyle segments.",
        specs: ["Texture: Soft-touch", "Care: Easy wash cycle", "Use Case: Homewear category"],
      },
      {
        id: "seasonal-capsule-series",
        name: "Seasonal Capsule Series",
        description: "Fast-response seasonal drop strategy for retail campaign windows.",
        image: "/images/goods/3.jpg",
        highlight: "Short-cycle seasonal apparel drop for focused campaign periods.",
        specs: [
          "Launch: Seasonal cadence",
          "SKU Strategy: Capsule drops",
          "Use Case: Fashion promo windows",
        ],
      },
      {
        id: "urban-light-outerwear",
        name: "Urban Light Outerwear",
        description: "Lightweight outerwear option for transition-season daily use.",
        image: "/images/goods/7.jpg",
        highlight: "Transitional outerwear style for spring and autumn merchandising.",
        specs: ["Weight: Light shell", "Closure: Front zip/buttons", "Use Case: Urban commute"],
      },
      {
        id: "core-knit-program",
        name: "Core Knit Program",
        description: "Foundational knitwear range with adaptable styling across markets.",
        image: "/images/goods/6.jpg",
        highlight: "Cross-market knitwear basics supporting repeatable category planning.",
        specs: ["Category: Knit basics", "Seasonality: Multi-season", "Use Case: Core shelf line"],
      },
      {
        id: "travel-ready-apparel",
        name: "Travel Ready Apparel",
        description: "Wrinkle-conscious apparel selection for mobility-focused lifestyles.",
        image: "/images/goods/4.jpg",
        highlight: "Travel-friendly wardrobe category emphasizing comfort and portability.",
        specs: [
          "Feature: Wrinkle-conscious",
          "Packability: Medium-high",
          "Use Case: Travel retail",
        ],
      },
    ],
  },
  {
    id: "shoes",
    title: "Shoes",
    summary: "Footwear assortments covering casual, indoor, and lifestyle usage scenarios.",
    products: [
      {
        id: "urban-comfort-sneakers",
        name: "Urban Comfort Sneakers",
        description: "Daily sneaker direction balancing comfort, durability, and clean appearance.",
        image: "/images/goods/7.jpg",
        highlight: "All-day comfort sneaker concept for mainstream lifestyle channels.",
        specs: ["Upper: Breathable mix", "Sole: Cushioned profile", "Use Case: City daily wear"],
      },
      {
        id: "indoor-soft-slippers",
        name: "Indoor Soft Slippers",
        description: "Home-focused footwear category with stable quality and gentle fit.",
        image: "/images/goods/1.jpg",
        highlight: "Comfort-first indoor footwear line for household and hospitality usage.",
        specs: ["Lining: Soft-touch", "Outsole: Indoor-safe grip", "Use Case: Home / hotel room"],
      },
      {
        id: "lifestyle-walking-shoes",
        name: "Lifestyle Walking Shoes",
        description: "Flexible walking option for mixed urban and casual applications.",
        image: "/images/goods/4.jpg",
        highlight: "Versatile walking shoe format for broad consumer profiles.",
        specs: ["Flex: Mid-flex sole", "Weight: Lightweight class", "Use Case: Daily walking"],
      },
      {
        id: "lightweight-canvas-series",
        name: "Lightweight Canvas Series",
        description: "Breathable canvas footwear for seasonal and everyday sales programs.",
        image: "/images/goods/2.jpg",
        highlight: "Canvas footwear range aligned with seasonal casual demand.",
        specs: ["Upper: Canvas", "Style: Casual low-cut", "Use Case: Spring/summer retail"],
      },
      {
        id: "hybrid-comfort-loafers",
        name: "Hybrid Comfort Loafers",
        description: "Semi-formal loafer concept for office-to-casual transitions.",
        image: "/images/goods/6.jpg",
        highlight: "Hybrid loafer direction bridging business-casual and lifestyle segments.",
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
        image: "/images/goods/5.jpg",
        highlight: "Open-structure sandal format for warm-weather outdoor routines.",
        specs: ["Design: Open upper", "Traction: Patterned outsole", "Use Case: Outdoor casual"],
      },
    ],
  },
  {
    id: "foods",
    title: "Foods",
    summary: "Food product directions supported by controlled sourcing and logistics planning.",
    products: [
      {
        id: "packaged-snack-range",
        name: "Packaged Snack Range",
        description: "Retail-ready packaged snack concept for broad distribution channels.",
        image: "/images/goods/5.jpg",
        highlight: "Shelf-friendly snack assortment direction for multi-format retail.",
        specs: [
          "Packaging: Retail-ready",
          "Shelf Life: Standard export range",
          "Use Case: Grocery / convenience",
        ],
      },
      {
        id: "functional-pantry-series",
        name: "Functional Pantry Series",
        description: "Daily pantry products designed around quality and repeatability.",
        image: "/images/goods/3.jpg",
        highlight: "Core pantry product matrix for steady household consumption.",
        specs: [
          "Category: Daily pantry",
          "Control: Batch consistency",
          "Use Case: Family supply channels",
        ],
      },
      {
        id: "private-label-food-program",
        name: "Private Label Food Program",
        description: "Customizable private label framework for regional market positioning.",
        image: "/images/goods/6.jpg",
        highlight: "Private label food model for brand expansion and channel adaptation.",
        specs: [
          "Branding: Private label ready",
          "MOQ: Flexible planning",
          "Use Case: Regional retail brand",
        ],
      },
      {
        id: "healthy-ready-meals",
        name: "Healthy Ready Meals",
        description: "Convenience meal format built for modern, time-efficient consumption.",
        image: "/images/goods/8.jpg",
        highlight: "Ready-meal line aligned with fast-paced urban consumption habits.",
        specs: [
          "Format: Ready-to-eat",
          "Focus: Balanced nutrition",
          "Use Case: Convenience channel",
        ],
      },
      {
        id: "family-cooking-ingredients",
        name: "Family Cooking Ingredients",
        description: "Core ingredient portfolio for daily kitchen usage and practical storage.",
        image: "/images/goods/2.jpg",
        highlight: "Ingredient-focused range supporting routine home-cooking workflows.",
        specs: [
          "Type: Cooking ingredients",
          "Storage: Pantry stable",
          "Use Case: Household cooking",
        ],
      },
      {
        id: "cross-border-gift-selection",
        name: "Cross-Border Gift Selection",
        description: "Packaged gift-food direction for seasonal events and premium channels.",
        image: "/images/goods/4.jpg",
        highlight: "Gift-ready food concept for campaign launches and festive demand peaks.",
        specs: [
          "Format: Gift package",
          "Target: Seasonal campaigns",
          "Use Case: Premium gifting channel",
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
