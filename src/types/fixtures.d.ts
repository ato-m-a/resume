export interface Career {
  company: string;
  url: string;
  position: string;
  period: string;
  description: string;
  jobs: (string | string[])[];
}

export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  icon: string;
  level: Level;
  content: string[];
}

export interface Project {
  name: string;
  at: string;
  summary: {
    period: string;
    description: string;
    role: string;
    participants: number;
    content: (string | string[])[];
  };
  details: {

  };
}