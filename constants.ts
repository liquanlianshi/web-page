import { Feature, NavItem, PortfolioItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '作品', path: '/portfolio' },
  { label: '服务', path: '/services' },
  { label: '联系', path: '/contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "品牌美学",
    description: "打造独特的视觉语言，与您的受众产生共鸣，定义您的市场地位。",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "数字战略",
    description: "基于数据的洞察，在不断演变的数字景观中推动您的业务向前发展。",
    iconName: "TrendingUp",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "交互体验",
    description: "创造直观且沉浸式的用户体验，带来愉悦感并提升转化率。",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "技术构架",
    description: "构建稳健、可扩展且高性能的技术解决方案，面向未来。",
    iconName: "Code",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
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