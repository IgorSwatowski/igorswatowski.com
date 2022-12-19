export interface Post {
  id?: string;
  title: string;
  slug?: string;
  pageContent: PageContentText;
  createdAt: string;
}

export interface PageContentText {
  text?: string;
}
