export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechPartner {
  name: string;
  logo: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
  content?: string;
  author?: Author;
  category?: Category;
  tags?: Tag[];
  featured?: boolean;
  metaDescription?: string;
  ogImage?: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}