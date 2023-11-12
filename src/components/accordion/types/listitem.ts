import type { ReactNode } from 'react';

export interface ListitemProps {
  children: ReactNode;
  id: string;
  content: string[];
}