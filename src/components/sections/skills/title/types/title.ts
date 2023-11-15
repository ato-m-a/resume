import type { Skill } from '@/types/fixtures';

export type TitleProps = Omit<Skill, 'content'>;

export type IconProps = Pick<Skill, 'icon'>;