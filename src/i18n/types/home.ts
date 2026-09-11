export interface NavigationItem {
  label: string;
  href: string;
  /** 有值时该项渲染为下拉菜单，点击 tab 本身不导航 */
  children?: { label: string; href: string }[];
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  note: string;
  image: string;
  highlights: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
  value: string;
}

export interface GridItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface HomeContent {
  seo: {
    title: string;
    description: string;
  };
  topBar: string;
  header: {
    navigation: NavigationItem[];
  };
  featuredBanner: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    images: string[];
  };
  hero: {
    slides: HeroSlide[];
  };
  advantages: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    description: string;
    items: GridItem[];
  };
  planning: {
    eyebrow: string;
    title: string;
    items: GridItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    networkLabel: string;
    highlights: string[];
    officesLabel: string;
    offices: string[];
    actionLabel: string;
    actionHref: string;
    tagline: string;
    image: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: GridItem[];
  };
  milestones: {
    eyebrow: string;
    title: string;
    items: MilestoneItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  footer: {
    blurb: string;
    address: string;
    links: NavigationItem[];
    rights: string;
    contactInfoLabel: string;
    quickAccessLabel: string;
    contactLabel: string;
    termsLabel: string;
  };
}
