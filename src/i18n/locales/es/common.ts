import type { CommonContent } from "@/i18n/types/common";

export const common = {
  contactLabels: { phone: "Tel", fax: "Fax", email: "Correo electrónico", website: "Sitio web" },
  navigation: {
    title: "Navegación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    selectLanguage: "Seleccionar idioma",
  },
  carousel: {
    roleDescription: "carrusel",
    slideDescription: "diapositiva",
    goToSlide: "Ir a la diapositiva {number}",
    previousSlide: "Diapositiva anterior",
    nextSlide: "Diapositiva siguiente",
  },
  images: {
    viewImage: "Ver imagen {number}",
    productImage: "{productName}, imagen {number}",
    productThumbnail: "{productName}, miniatura {number}",
    marketTop: "Presentación del mercado {number}",
    marketBottom: "Presentación alternativa del mercado {number}",
    contactBackground: "Fondo de la página de contacto",
    aboutGallery: [
      "Colaboración en equipo",
      "Oficina moderna",
      "Sesión de lluvia de ideas",
      "Presentación del equipo",
      "Profesional en su entorno laboral",
      "Equipo trabajando",
      "Trabajo en colaboración",
      "Trabajo con concentración",
      "Reunión de negocios",
      "Conversación en la oficina",
      "Espacio de trabajo creativo",
      "Trabajo con portátil",
      "Actividad del equipo",
      "Un momento en el trabajo",
      "La vida en SKTD",
    ],
  },
  sections: {
    milestonesTimeline: "Cronología de los hitos de SKTD",
    marketFilm: "Galería de imágenes del mercado",
    productFilm: "Galería de presentación del producto",
  },
  milestones: [
    { year: "2014", lines: ["Fundación en Düsseldorf"] },
    { year: "2015", lines: ["Ventas anuales superiores a 1 M€"] },
    { year: "2016", lines: ["Apertura del centro de compras en Shanghái"] },
    { year: "2017", lines: ["Apertura del centro de diseño y ventas en Milán"] },
    {
      year: "2019",
      lines: ["Apertura de la oficina de Vietnam", "Alianza estratégica con KUKA HOME"],
    },
    { year: "2022", lines: ["Lanzamiento de la iniciativa de logística baja en carbono"] },
  ],
  notFound: {
    title: "Página no encontrada",
    description: "La página que busca no está disponible. Vuelva a la página de inicio de SKTD.",
    backHome: "Volver al inicio",
  },
} satisfies CommonContent;
