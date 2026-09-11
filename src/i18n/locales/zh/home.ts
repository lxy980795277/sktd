import type { HomeContent } from "@/i18n/types/home";

const content: HomeContent = {
  seo: {
    title: "SKTD | 自 2014 年起连接亚洲与欧洲",
    description:
      "SKTD 多语言企业官网首页，展示采购、产品开发、质量管理、项目融资与物流等端到端能力。",
  },
  topBar: "自 2014 年起，SKTD 通过完全可控的端到端方案连接亚洲与欧洲。",
  header: {
    navigation: [
      { label: "为什么选择 SKTD", href: "/home" },
      { label: "关于我们", href: "/about" },
      { label: "产品", href: "/products" },
      { label: "联系我们", href: "/contact" },
    ],
  },
  featuredBanner: {
    eyebrow: "SKTD 国际合作伙伴",
    title: "自 2014 年起，SKTD 以可靠执行持续连接亚洲与欧洲。",
    description:
      "我们融合德国工程纪律、意大利设计视角与亚洲供应链优势，提供可落地的端到端商业价值。",
    primaryLabel: "查看服务能力",
    primaryHref: "/about",
    secondaryLabel: "浏览发展历程",
    secondaryHref: "#milestones",
    images: [
      "/images-v5/home/featured-banner/1.jpg",
      "/images-v5/home/featured-banner/2.jpg",
      "/images-v5/home/featured-banner/3.jpg",
      "/images-v5/home/featured-banner/4.jpg",
      "/images-v5/home/featured-banner/5.jpg",
      "/images-v5/home/featured-banner/6.jpg",
    ],
  },
  hero: {
    slides: [
      {
        eyebrow: "值得信赖的跨境增长伙伴",
        title: "以德国工程精度与意大利设计洞察，连接亚洲与欧洲。",
        description:
          "SKTD 将德国工程技术、意大利设计理念与亚洲卓越产品能力融合，为全球客户创造稳定而高效的商业增长动能。",
        primaryLabel: "查看服务能力",
        primaryHref: "#services",
        secondaryLabel: "浏览发展历程",
        secondaryHref: "#milestones",
        note: "德国 · 意大利 · 中国 · 越南",
        image: "/images-v5/home/hero-carousel/1.jpg",
        highlights: ["2014 年于杜塞尔多夫成立", "欧洲与亚洲多地战略办公室", "端到端全流程可控执行"],
      },
      {
        eyebrow: "全球布局，本地语言响应",
        title: "一个真正理解市场、语言与商业习惯的多元文化团队。",
        description:
          "从杜塞尔多夫、米兰到上海和胡志明市，SKTD 以本地语言和区域经验快速响应欧洲、亚洲和北美客户的多样化需求。",
        primaryLabel: "了解全球布局",
        primaryHref: "#about",
        secondaryLabel: "规划合作路径",
        secondaryHref: "#planning",
        note: "欧洲 · 亚洲 · 北美",
        image: "/images-v5/home/hero-carousel/2.jpg",
        highlights: ["多语言商业沟通能力", "深入理解区域商业惯例", "跨时区快速协同响应"],
      },
      {
        eyebrow: "从源头到交付的可靠执行",
        title: "从采购、产品开发到融资与物流，每个阶段都保持可控。",
        description:
          "我们帮助客户把跨境贸易中的复杂环节收束成清晰流程，让团队可以更专注于品牌增长、市场销售与长期伙伴关系。",
        primaryLabel: "查看执行流程",
        primaryHref: "#planning",
        secondaryLabel: "认识 SKTD",
        secondaryHref: "#about",
        note: "可靠 · 高效 · 创新",
        image: "/images-v5/home/hero-carousel/3.jpg",
        highlights: ["采购与产品开发", "质量管理与项目融资", "物流节奏与交付控制"],
      },
    ],
  },
  advantages: {
    eyebrow: "为什么选择 SKTD",
    title: "一个为国际化增长而打磨的高标准协作模型。",
    description: "适合希望获得可靠执行、国际视角以及从概念走到交付全过程协作能力的企业。",
    items: [
      {
        title: "一体化采购网络",
        description: "在亚洲产品生态与欧洲市场需求之间建立清晰、稳定的桥梁。",
        value: "4 个战略办公室",
      },
      {
        title: "质量优先执行",
        description: "通过受控的产品开发与质量管理，降低跨境协作中的不确定性。",
        value: "端到端全链路可控",
      },
      {
        title: "商业韧性更强",
        description: "在采购、融资与物流之间形成可靠协调，保证项目持续推进。",
        value: "自 2014 年持续发展",
      },
    ],
  },
  sectors: {
    eyebrow: "服务行业",
    title: "面向家居、生活方式、零售与 hospitality 等多元 B2B 场景。",
    description:
      "页面结构完整沿用了参考站点的模块节奏，但文案与业务表达已经切换为 SKTD 的企业定位。",
    items: [
      {
        title: "家居与室内",
        description: "家具、软装与设计导向生活方式产品。",
      },
      {
        title: "活动与陈列",
        description: "面向商业活动和空间风格的陈列解决方案。",
      },
      {
        title: "食品与精选品类",
        description: "支持进口商品与精选特色品类的拓展。",
      },
      {
        title: "时尚与配饰",
        description: "为软装和配饰类产品提供趋势型采购支持。",
      },
      {
        title: "企业礼赠",
        description: "礼品、季节性系列与包装方向整合。",
      },
      {
        title: "办公与工作空间",
        description: "兼顾功能、效率与审美表达的产品方案。",
      },
      {
        title: "酒店与餐饮",
        description: "适用于 hospitality 场景的项目型解决方案。",
      },
      {
        title: "母婴与儿童",
        description: "为家庭与儿童相关品牌提供安全导向产品线。",
      },
      {
        title: "花艺与绿色生活",
        description: "支持季节性陈列与视觉营销的延展品类。",
      },
      {
        title: "生活方式零售",
        description: "帮助零售空间持续保持新鲜感与差异化。",
      },
    ],
  },
  planning: {
    eyebrow: "规划合作流程",
    title: "从项目需求到交付执行的五个关键触点。",
    items: [
      {
        title: "战略办公室网络",
        description: "杜塞尔多夫、米兰、上海、胡志明市。",
      },
      {
        title: "产品开发",
        description: "将商业目标转化为可制造、可落地的产品方案。",
      },
      {
        title: "质量管理",
        description: "让标准在每个执行环节中清晰、可衡量、可追踪。",
      },
      {
        title: "项目融资",
        description: "帮助跨境项目维持更健康的现金流与执行节奏。",
      },
      {
        title: "物流控制",
        description: "更高效地协调运输、包装与最终交付。",
      },
    ],
  },
  testimonials: {
    eyebrow: "合作方视角",
    title: "先做出和参考站一致的高级感，再逐步替换为正式客户证言。",
    description: "以下内容是高质量占位文案，未来你可以替换为 SKTD 正式客户评价与已授权客户名称。",
    items: [
      {
        quote: "SKTD 让我们的采购流程更清晰，也让产品开发到交付之间的控制力显著提升。",
        author: "Hannah Becker",
        company: "Northern Habitat · Hamburg",
      },
      {
        quote: "他们的多元文化团队让欧洲和亚洲之间的沟通速度与可靠性都有明显提升。",
        author: "Luca Bianchi",
        company: "Casa Atelier · Milan",
      },
      {
        quote: "最打动我们的是对设计的敏感度、商业现实感以及执行纪律之间的平衡。",
        author: "Mia Chen",
        company: "Forma Collective · Shanghai",
      },
    ],
  },
  about: {
    eyebrow: "关于 SKTD",
    title: "一个由工程严谨性、设计文化与国际贸易经验共同塑造的长期伙伴。",
    description:
      "SKTD 于 2014 年成立于杜塞尔多夫，始终致力于成为连接亚洲与欧洲的可信赖合作伙伴。我们提供覆盖采购、产品开发、质量管理、项目融资与物流的完全可控解决方案，并始终以可靠性、效率和创新为核心。",
    networkLabel: "网络",
    highlights: [
      "连接欧洲市场与亚洲制造优势",
      "为您的品牌和市场量身定制特色产品",
      "从概念到最终交付的全流程端到端把控",
    ],
    officesLabel: "战略办公室",
    offices: ["杜塞尔多夫", "米兰", "上海", "胡志明市"],
    actionLabel: "进一步了解 SKTD",
    actionHref: "#cta",
    tagline: "从采购到交付 / 您的无缝贸易解决方案 / 连接亚洲与欧洲",
    image: "/images-v5/home/about-section/1.jpg",
  },
  services: {
    eyebrow: "服务能力",
    title: "用与参考站相同的快速入口节奏，展示五条核心服务线。",
    items: [
      {
        title: "采购",
        description: "围绕市场匹配度识别供应商与产品机会。",
      },
      {
        title: "产品开发",
        description: "推动规格、质量目标与上市准备度持续收敛。",
      },
      {
        title: "质量管理",
        description: "将检验标准真正嵌入流程，而不是放在最后补救。",
      },
      {
        title: "项目融资",
        description: "支持更稳健的商业灵活性与执行周期。",
      },
      {
        title: "物流",
        description: "让跨区域流转具备更好的计划性与可见性。",
      },
    ],
  },
  milestones: {
    eyebrow: "发展里程碑",
    title: "自 2014 年起，SKTD 以稳健节奏持续成长。",
    items: [
      {
        year: "2014",
        title: "在杜塞尔多夫成立",
        description: "SKTD 在德国成立，开启连接亚洲与欧洲的长期使命。",
      },
      {
        year: "2015",
        title: "年销售额突破 100 万欧元",
        description: "公司迈过第一个关键商业增长节点。",
      },
      {
        year: "2016",
        title: "上海采购中心成立",
        description: "在中国设立战略采购中心，并成为 JYSK 官方供应商。",
      },
      {
        year: "2017",
        title: "米兰设计与销售中心启用",
        description: "年销售额突破 1000 万欧元，欧洲布局进一步强化。",
      },
      {
        year: "2019",
        title: "越南办事处成立",
        description: "与 KUKA HOME 建立战略合作伙伴关系。",
      },
      {
        year: "2022",
        title: "启动低碳环保项目",
        description: "减少塑料使用，推动更可持续的发展方向。",
      },
    ],
  },
  cta: {
    eyebrow: "立即行动",
    title: "准备开启下一次跨境增长机会了吗？",
    subtitle:
      "这版首页已经具备高保真参考站结构，后续你只需要替换图片、正式客户名称和最终跳转目标，不需要重做页面框架。",
    primaryLabel: "开始沟通",
    primaryHref: "/contact",
    secondaryLabel: "查看里程碑",
    secondaryHref: "#milestones",
  },
  footer: {
    blurb:
      "SKTD 通过采购、产品开发、质量控制、融资与物流，在亚洲与欧洲之间建立稳定可信的合作链路。",
    address: "Prinzenallee 7, Düsseldorf, Deutschland",
    links: [
      { label: "为什么选择 SKTD", href: "/home" },
      { label: "产品", href: "/products" },
      { label: "发展里程碑", href: "#milestones" },
      { label: "关于我们", href: "/about" },
    ],
    rights: "SKTD. 保留所有权利。",
    contactInfoLabel: "联系方式",
    quickAccessLabel: "快速导航",
    contactLabel: "联系我们",
    termsLabel: "通用服务条款",
  },
};

export default content;
