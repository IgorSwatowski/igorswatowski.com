import { client, previewClient } from '../../lib/contentful/client';
import { useRouter } from 'next/router';

const Post = ({ post, preview }: any) => {
  const router = useRouter();

  return (
    <section className='section'>
      {preview && <p>alert</p>}
      <div className='container'>
        <article className='prose mx-auto'>
          {router.isFallback ? <p>alert</p> : post.title}
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
      redirect: {
        destination: '/posts',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' });
  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Post;
