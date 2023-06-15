import { CategoryFields } from './category';

export type Post = {
  fields: PostFields;
};

export interface FAQ {
  fields: {
    question: string;
    answer: string;
  };
}

export interface PostFields {
  title: string;
  slug: string;
  category: CategoryFields[];
  heroImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  faq: FAQ[];
  excerpt: string;
  content: Document;
  createdAt: string;
  updatedAt: string;
  date: string;
  author: { fields: { name: string } };
}
