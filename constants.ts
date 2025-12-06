import { Feature, NavItem, PortfolioItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '作品', path: '/portfolio' },
  { label: '介绍', path: '/services' },
  { label: '联系', path: '/contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "设计美学",
    description: "打造独特的视觉语言，与受众审美产生共鸣，定义美学市场地位，深入洞察网页设计核心，构建连贯的数字语言。",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop",
    points: [
      "全域沉浸视觉，打破感官边界",
      "情感共鸣交互，直抵用户人心",
      "灵动流体动效，赋予界面生命"
    ]
  },
  {
    id: 2,
    title: "数字战略",
    description: "基于数据洞察和不断演变的数字观景，在我们的网页设计中连接作品图库服务器，同时为后端连接留出接口。",
    iconName: "TrendingUp",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    points: [
      "动态图库集成，实时内容更新",
      "数据驱动架构，优化用户体验",
      "全栈扩展预备，无缝对接后端"
    ]
  },
  {
    id: 3,
    title: "交互体验",
    description: "创造直观且沉浸式的用户体验，用优秀的页面布局设计和动画设计，为用户带来极具高级感的视觉感受。",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    points: [
      "流畅动态交互，提升操作愉悦",
      "极简美学布局，营造高端氛围",
      "直觉化操作逻辑，零门槛上手"
    ]
  },
  {
    id: 4,
    title: "技术构架",
    description: "构建稳健、可扩展且高性能的前端架构，可为不同场景的网页应用作为模板。",
    iconName: "Code",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    points: [
      "模块化组件体系，灵活拼装",
      "高性能渲染引擎，极速加载",
      "弹性扩展架构，从容应对未来"
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Lumina Workspace",
    category: "Interior Design",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "Apex Finance",
    category: "Fintech App",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "Nebula Stream",
    category: "SaaS Platform",
    imageUrl: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Eos Fashion",
    category: "E-Commerce",
    imageUrl: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 5,
    title: "Terra Architect",
    category: "Branding",
    imageUrl: "https://picsum.photos/800/600?random=5"
  },
  {
    id: 6,
    title: "Chronos Watch",
    category: "Product Design",
    imageUrl: "https://picsum.photos/800/600?random=6"
  }
];