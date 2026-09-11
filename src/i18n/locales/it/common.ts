import type { CommonContent } from "@/i18n/types/common";

export const common = {
  contactLabels: { phone: "Tel", fax: "Fax", email: "E-mail", website: "Sito web" },
  navigation: {
    title: "Navigazione",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    selectLanguage: "Seleziona lingua",
  },
  carousel: {
    roleDescription: "carosello",
    slideDescription: "diapositiva",
    goToSlide: "Vai alla diapositiva {number}",
    previousSlide: "Diapositiva precedente",
    nextSlide: "Diapositiva successiva",
  },
  images: {
    viewImage: "Visualizza immagine {number}",
    productImage: "{productName}, immagine {number}",
    productThumbnail: "{productName}, miniatura {number}",
    marketTop: "Presentazione del mercato {number}",
    marketBottom: "Presentazione alternativa del mercato {number}",
    contactBackground: "Sfondo della pagina dei contatti",
    aboutGallery: [
      "Collaborazione in team",
      "Ufficio moderno",
      "Sessione di brainstorming",
      "Presentazione del team",
      "Professionista al lavoro",
      "Team al lavoro",
      "Lavoro condiviso",
      "Lavoro concentrato",
      "Incontro d’affari",
      "Conversazione in ufficio",
      "Spazio di lavoro creativo",
      "Lavoro al portatile",
      "Attività del team",
      "Un momento al lavoro",
      "La vita in SKTD",
    ],
  },
  sections: {
    milestonesTimeline: "Cronologia delle tappe di SKTD",
    marketFilm: "Galleria di immagini del mercato",
    productFilm: "Galleria di presentazione del prodotto",
  },
  milestones: [
    { year: "2014", lines: ["Fondazione a Düsseldorf"] },
    { year: "2015", lines: ["Vendite annue superiori a 1 milione di €"] },
    { year: "2016", lines: ["Apertura del centro acquisti di Shanghai"] },
    { year: "2017", lines: ["Apertura del centro design e vendite di Milano"] },
    {
      year: "2019",
      lines: ["Apertura dell’ufficio in Vietnam", "Partnership strategica con KUKA HOME"],
    },
    { year: "2022", lines: ["Avvio dell’iniziativa per una logistica a basse emissioni"] },
  ],
  notFound: {
    title: "Pagina non trovata",
    description: "La pagina che cerchi non è disponibile. Torna alla pagina iniziale di SKTD.",
    backHome: "Torna alla pagina iniziale",
  },
} satisfies CommonContent;
