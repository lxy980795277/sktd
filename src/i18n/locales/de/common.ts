import type { CommonContent } from "@/i18n/types/common";

export const common = {
  contactLabels: { phone: "Tel", fax: "Fax", email: "E-Mail", website: "Website" },
  navigation: {
    title: "Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    selectLanguage: "Sprache auswählen",
  },
  carousel: {
    roleDescription: "Karussell",
    slideDescription: "Folie",
    goToSlide: "Zu Folie {number} wechseln",
    previousSlide: "Vorherige Folie",
    nextSlide: "Nächste Folie",
  },
  images: {
    viewImage: "Bild {number} ansehen",
    productImage: "{productName} – Bild {number}",
    productThumbnail: "{productName} – Vorschaubild {number}",
    marketTop: "Markteinblick {number}",
    marketBottom: "Weiterer Markteinblick {number}",
    contactBackground: "Hintergrund der Kontaktseite",
    aboutGallery: [
      "Zusammenarbeit im Team",
      "Moderner Büroraum",
      "Brainstorming-Runde",
      "Teampräsentation",
      "Fachkraft im Arbeitsalltag",
      "Team bei der Arbeit",
      "Gemeinsames Arbeiten",
      "Konzentriertes Arbeiten",
      "Geschäftstreffen",
      "Austausch im Büro",
      "Kreativer Arbeitsplatz",
      "Arbeiten am Laptop",
      "Teamaktivität",
      "Moment am Arbeitsplatz",
      "Leben bei SKTD",
    ],
  },
  sections: {
    milestonesTimeline: "Zeitleiste der SKTD-Meilensteine",
    marketFilm: "Bildstreifen mit Markteinblicken",
    productFilm: "Bildstreifen zur Produktpräsentation",
  },
  milestones: [
    { year: "2014", lines: ["Gründung in Düsseldorf"] },
    { year: "2015", lines: ["Jahresumsatz über 1 Mio. €"] },
    { year: "2016", lines: ["Beschaffungszentrum in Shanghai gegründet"] },
    { year: "2017", lines: ["Design- und Vertriebszentrum in Mailand eröffnet"] },
    {
      year: "2019",
      lines: ["Büro in Vietnam gegründet", "Strategische Partnerschaft mit KUKA HOME"],
    },
    { year: "2022", lines: ["Initiative für CO₂-arme Logistik gestartet"] },
  ],
  notFound: {
    title: "Seite nicht gefunden",
    description:
      "Die gesuchte Seite ist nicht verfügbar. Bitte kehren Sie zur SKTD-Startseite zurück.",
    backHome: "Zur Startseite",
  },
} satisfies CommonContent;
