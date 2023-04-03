import { client, previewClient } from '@/lib/contentful/client';
import { useRouter } from 'next/router';
import { CONTENT_TYPE } from '../../constants/constants';
import PostSingle from '../../components/Blog/PostSingle';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

interface PostProps {
  post?: any;
  preview: boolean;
}

const Post: React.FC<PostProps> = ({ post, preview }) => {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <p>Loading...</p>;
  }

  return (
    <section className='section'>
      {preview && <p>Preview mode enabled!</p>}
      <div className='container'>
        <article className='prose mx-auto'>
          {router.isFallback ? <p>alert</p> : <PostSingle post={post} />}
        </article>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
}) => {
  const cfClient = preview ? previewClient : client;
  const { slug } = params ?? {};

  try {
    const response = await cfClient.getEntries({
      content_type: CONTENT_TYPE.POST,
      'fields.slug': slug,
    });

    if (!response?.items?.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: response.items[0],
        preview,
      },
    };
  } catch (error) {
    console.error('Error fetching post: ', error);

    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {

  try {
    const response = await client.getEntries({ content_type: CONTENT_TYPE.POST });
    const paths = response.items.map((item: any) => ({
      params: { slug: item.fields.slug },
    }));

    return {
      paths,
      fallback: true,
    };  
    
  } catch (error) {
    console.error('Error fetching posts: ', error);

    return {
      paths: [],
      fallback: true,
    };
  }
};

export default Post;
