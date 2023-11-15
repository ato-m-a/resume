export interface Bullet {
  outer: string;
  inner?: string[];
}

export interface Career {
  company: string;
  url: string;
  position: string;
  period: string;
  description: string;
  bullets: Bullet[];
}

export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  icon: string;
  level: Level;
  bullets: string[];
}

export interface ProjectDetail {
  image: string;
  paragraphs: string[];
}

export interface Project {
  order: number;
  summary: {
    name: string;
    at: string;
    period: string;
    description: string;
    role: string;
    participants: number;
    bullets: Bullet[];
  };
  details: {
    header: {
      image: string;
      tech_stack: string[];
      paragraphs: string[];
    },
    contents: ProjectDetail[];
  }
}