import { accordionState } from '@/store/accordion';
import { useRecoilState } from 'recoil';

export const useAccordion = (key: symbol) => {
  const [activeItem, setActiveItem] = useRecoilState(accordionState);

  const isActivate = activeItem === key;

  const toggleAccordion = () => {
    if (activeItem === key) setActiveItem(null);
    else setActiveItem(key);
  }

  return [isActivate, toggleAccordion] as const;
}