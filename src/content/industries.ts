import { industryGrowthPages } from './architecture';
export type Industry = { name: string; need: string; accent: string; pain: string; workflow: readonly string[]; outcome: string; path: string };
export const industries: readonly Industry[] = industryGrowthPages.map(page => ({name: page.label.replace(/ systems$/, ''), need: page.description, accent: '#ff6b22', pain: page.problem, workflow: page.workflow, outcome: page.workflow[page.workflow.length - 1], path: page.path})).sort((a,b) => a.name.localeCompare(b.name));
