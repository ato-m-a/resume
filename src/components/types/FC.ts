import type { FC, ReactNode } from 'react';

export interface FCProps {
  children: ReactNode;
}

export type ReactFC<T = {}> = FC<T & FCProps>;