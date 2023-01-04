import { LinkProps } from 'next/link';

export interface Post {
  id?: string;
  title: string;
  slug?: string;
  content: PageContentText;
  createdAt: string;
  path: LinkProps['href'];
  createdBy: CreatedByName;
}

export interface PageContentText {
  text?: string;
}

export interface CreatedByName {
  name?: string;
}
