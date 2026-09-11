type AboutMilestone = {
  year: string;
  title: string;
  description: string;
};

type AboutStorySection = {
  title: string;
  description: string;
  locations?: string[];
};

export type AboutPageContent = {
  seo: {
    title: string;
    description: string;
  };
  pageTitle: string;
  eyebrow: string;
  title: string;
  storySections: AboutStorySection[];
  milestonesTitle: string;
  milestones: AboutMilestone[];
  galleryTitle: string;
};
