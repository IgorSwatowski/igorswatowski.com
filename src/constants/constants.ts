export const GRAPHQL_API = process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_API!;
export const GA_TRACK_ID = process.env.NEXT_PUBLIC_GA_TAG;
export const MAIL_API = process.env.NEXT_PUBLIC_SENDGRID_SECRET;
export const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export enum CONTENT_TYPE {
  POST = 'post',
  CATEGORY = 'category',
}
