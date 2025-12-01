import { Feature, NavItem, PortfolioItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Crafting unique visual languages that resonate with your audience and define your market presence.",
    iconName: "Palette"
  },
  {
    id: 2,
    title: "Digital Strategy",
    description: "Data-driven insights to propel your business forward in an ever-evolving digital landscape.",
    iconName: "TrendingUp"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Creating intuitive and immersive user experiences that delight and convert.",
    iconName: "Layers"
  },
  {
    id: 4,
    title: "Development",
    description: "Robust, scalable, and high-performance technical solutions built for the future.",
    iconName: "Code"
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