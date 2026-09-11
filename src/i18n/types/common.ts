type Milestone<Year extends string, Lines extends readonly string[]> = {
  year: Year;
  lines: Lines;
};

/** The timeline has six fixed anchors; its 2019 card has two text lines. */
export type CommonMilestones = readonly [
  Milestone<"2014", readonly [string]>,
  Milestone<"2015", readonly [string]>,
  Milestone<"2016", readonly [string]>,
  Milestone<"2017", readonly [string]>,
  Milestone<"2019", readonly [string, string]>,
  Milestone<"2022", readonly [string]>,
];

export type CommonContent = {
  navigation: {
    title: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  contactLabels: {
    phone: string;
    fax: string;
    email: string;
    website: string;
  };
  carousel: {
    roleDescription: string;
    slideDescription: string;
    goToSlide: string;
    previousSlide: string;
    nextSlide: string;
  };
  images: {
    viewImage: string;
    productImage: string;
    productThumbnail: string;
    marketTop: string;
    marketBottom: string;
    contactBackground: string;
    aboutGallery: readonly [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
  };
  sections: {
    milestonesTimeline: string;
    marketFilm: string;
    productFilm: string;
  };
  milestones: CommonMilestones;
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
};
