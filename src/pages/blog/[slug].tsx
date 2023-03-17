import { client, previewClient } from '@/lib/contentful/client';
import { useRouter } from 'next/router';
import { CONTENT_TYPE } from '../../constants/constants';
import PostSingle from '../../components/Blog/PostSingle';
import React from 'react';

const Post = ({ post, preview }: any) => {
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

export const getStaticProps = async ({ params, preview = false }: any) => {
  const cfClient = preview ? previewClient : client;

  const { slug } = params;
  const response = await cfClient.getEntries({
    content_type: 'post',
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
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: CONTENT_TYPE.POST });
  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Post;
