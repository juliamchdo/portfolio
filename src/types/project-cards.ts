import { TagProps } from './v-tags';

export interface ProjectItems {
  title: string;
  legend: string;
  tags: TagProps[];
  site?: string;
  github: string
  image: string;
}
