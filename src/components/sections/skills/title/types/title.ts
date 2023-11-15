import type { Skill } from '@/types/fixtures';

export type TitleProps = Omit<Skill, 'bullets'>;

export type IconProps = Pick<Skill, 'icon'>;