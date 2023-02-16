import { client, previewClient } from '@/lib/contentful/client';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

interface PostProps {
  post: any;
  preview: boolean;
}

const Post = ({ post, preview }: PostProps) => {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <p>Loading...</p>;
  }

  return (
    <section className='section'>
      {preview && <p>Preview mode enabled!</p>}
      <div className='container'>
        <article className='prose mx-auto'>{post.fields.title}</article>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
}: any) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
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
