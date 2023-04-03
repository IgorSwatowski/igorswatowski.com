export type Post = {
  fields: PostFields;
};

export interface PostFields {
  title: string;
  slug: string;
  category: {
    fields: {
      title: string;
      slug: string;
    };
  };
  heroImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  excerpt: string;
  content: Document;
  createdAt: string;
  date: string;
  author: { fields: { name: string } };
}
