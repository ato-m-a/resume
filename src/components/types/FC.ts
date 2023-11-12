import type { FC, ReactNode } from 'react';

export type ReactFC<T = {}> = FC<T & { children: ReactNode }>;