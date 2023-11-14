import type { Project } from '@/types/fixtures';
import { atom } from 'recoil';

export const modalState = atom<Project | null>({
  key: 'modalState',
  default: null,
});