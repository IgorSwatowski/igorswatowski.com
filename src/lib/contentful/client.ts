import { CONTENT_TYPE } from '@/constants/constants';
import { PostFields } from '@/types/post';

const contentful = require('contentful');

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export const previewClient = contentful.createClient({
  host: 'preview.contentful.com',
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
});

async function getPosts() {
  const response = await client.getEntries({
    content_type: CONTENT_TYPE.POST,
  });

  return response.items;
}

async function getCategories() {
  const response = await client.getEntries({
    content_type: CONTENT_TYPE.CATEGORY,
  });

  return response.items;
}

export { getPosts, getCategories };
