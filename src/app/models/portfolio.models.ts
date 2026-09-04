export interface NavItem { readonly label: string; readonly target: string; }
export interface ProofStat { readonly value: string; readonly label: string; }
export interface SkillNode { readonly id: string; readonly label: string; readonly group: string; readonly description: string; readonly x: number; readonly y: number; readonly logo?: string; }
export interface Experience { readonly company: string; readonly role: string; readonly period: string; readonly summary: string; readonly initiatives: readonly string[]; readonly capabilities: readonly string[]; }
export interface Service { readonly id: string; readonly title: string; readonly icon: string; readonly description: string; readonly deliverables: readonly string[]; }
export interface Recognition { readonly title: string; readonly organisation: string; readonly year: string; readonly statement: string; }
export interface ContactPath { readonly audience: string; readonly label: string; readonly subject: string; }
