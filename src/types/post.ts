import { LinkProps } from 'next/link';

export interface Post {
  id?: string;
  title: string;
  slug?: string;
  pageContent: PageContentText;
  createdAt: string;
  path: LinkProps['href'];
}

export interface PageContentText {
  text?: string;
}
