export const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_API!;
export const GATrackId = process.env.NEXT_PUBLIC_GA_TAG;
export const MailApi = process.env.NEXT_PUBLIC_SENDGRID_SECRET;
export const Wordpress = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export enum CONTENT_TYPE {
  POST = 'post',
  CATEGORY = 'category',
}
