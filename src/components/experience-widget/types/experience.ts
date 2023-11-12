export type JobDetail = string | string[];

export interface Career {
  company: string;
  url: string;
  position: string;
  period: string;
  description: string;
  jobs: JobDetail[];
}

export interface NestedJobItemProps {
  job: JobDetail;
}