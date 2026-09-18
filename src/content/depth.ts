import type { Faq } from '../siteData';
import { generatedDepth } from './generated';

// Long-form depth for money pages. A section renders as an <h2>, its paragraphs, and an optional bullet list,
// for visitors (GrowthPage / ResourceDetail) and in the prerendered HTML that crawlers read.
export type ContentSection = { heading: string; paragraphs: string[]; list?: string[] };

export type PageDepth = { sections?: ContentSection[]; faqs?: Faq[] };

export type NewService = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  builds: string[];
  workflow: string[];
  related: string[];
  seo?: { title?: string; h1?: string };
  evidence?: { summary: string };
};

export type NewIndustry = {
  slug: string;
  name: string;
  description: string;
  problem: string;
  workflow: string[];
  tools: string[];
  seo: { title: string; h1: string };
  playbook: {
    headline: string;
    workflows: { name: string; trigger: string; action: string; handoff: string }[];
    quoteInputs: string[];
    boundary: string;
    metrics: { name: string; definition: string }[];
    related: string[];
  };
};

export type NewGuide = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  steps: string[];
  tradeoffs: string[];
  related: string[];
};

// Keyed by route path, e.g. '/industries/plumbing'. Extra FAQs are placed before a page's existing FAQs.
// Content lives in ./generated (data only) so it can be reviewed and regenerated without touching page code.
export const pageDepth: Record<string, PageDepth> = generatedDepth;
