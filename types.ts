import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface AnimatedPageProps {
  children: ReactNode;
}
