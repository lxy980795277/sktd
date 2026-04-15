import type { Locale } from "@/i18n/config";

export type ContactContent = {
  seo: {
    title: string;
    description: string;
  };
  backToHomeLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
};

const contactContent: Record<Locale, ContactContent> = {
  en: {
    seo: {
      title: "Contact | SKTD",
      description:
        "Contact SKTD for sourcing, product development, quality management and logistics.",
    },
    backToHomeLabel: "Back to homepage",
    eyebrow: "Contact us",
    title: "Let's discuss your project.",
    description:
      "Fill in the form below and our team will get back to you with a structured response as soon as possible.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone",
      phonePlaceholder: "Your phone number",
      emailLabel: "Email",
      emailPlaceholder: "Your email address",
      detailsLabel: "Details",
      detailsPlaceholder: "Please share your requirements and details.",
      submitLabel: "Submit",
      submittingLabel: "Submitting...",
      successMessage: "Your message has been sent successfully. We will contact you soon.",
      errorMessage: "Failed to send contact request. Please try again.",
    },
  },
  de: {
    seo: {
      title: "Kontakt | SKTD",
      description:
        "Kontaktieren Sie SKTD zu Sourcing, Produktentwicklung, Qualitätsmanagement und Logistik.",
    },
    backToHomeLabel: "Zurück zur Startseite",
    eyebrow: "Kontakt",
    title: "Lassen Sie uns über Ihr Projekt sprechen.",
    description:
      "Füllen Sie das Formular aus, und unser Team meldet sich zeitnah mit einer strukturierten Rückmeldung.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      phoneLabel: "Telefon",
      phonePlaceholder: "Ihre Telefonnummer",
      emailLabel: "E-Mail",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      detailsLabel: "Details",
      detailsPlaceholder: "Bitte teilen Sie uns Ihre Anforderungen und Details mit.",
      submitLabel: "Absenden",
      submittingLabel: "Wird gesendet...",
      successMessage: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.",
      errorMessage: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
    },
  },
  zh: {
    seo: {
      title: "联系 | SKTD",
      description: "联系 SKTD，咨询采购、产品开发、质量管理与物流服务。",
    },
    backToHomeLabel: "返回首页",
    eyebrow: "联系我们",
    title: "让我们沟通您的项目需求。",
    description: "请填写下方表单，我们的团队会尽快与您联系并给出结构化回复。",
    form: {
      nameLabel: "姓名",
      namePlaceholder: "请输入您的姓名",
      phoneLabel: "电话",
      phonePlaceholder: "请输入您的联系电话",
      emailLabel: "邮箱",
      emailPlaceholder: "请输入您的邮箱地址",
      detailsLabel: "详情",
      detailsPlaceholder: "请描述您的需求与详细信息。",
      submitLabel: "提交",
      submittingLabel: "提交中...",
      successMessage: "提交成功，我们会尽快与您联系。",
      errorMessage: "提交失败，请稍后重试。",
    },
  },
};

export const getContactContent = (locale: Locale): ContactContent => {
  return contactContent[locale];
};
