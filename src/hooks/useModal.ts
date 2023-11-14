import { modalState } from '@/store/modal';
import type { Project } from '@/types/fixtures';
import { useRecoilState } from 'recoil';

export const useModal = () => {
  const [activeItem, setActiveItem] = useRecoilState(modalState);

  const isActivate = activeItem !== null;
  
  const openModal = (item: Project) => {
    setActiveItem(item);
  }

  const closeModal = () => {
    setActiveItem(null);
  }
  
  return { isActivate, activeItem, openModal, closeModal };
}