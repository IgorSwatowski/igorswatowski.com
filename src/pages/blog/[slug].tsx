import { client, getPosts, previewClient } from '@/lib/contentful/client';
import { useRouter } from 'next/router';
import { CONTENT_TYPE } from '../../constants/constants';
import PostSingle from '../../components/Blog/PostSingle';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/types/post';
import { Helmet } from 'react-helmet';
import CTASecondSection from '@/components/Home/components/CTASecondSection';
import { NextSeo } from 'next-seo';

interface BlogPostProps {
  post?: Post;
  preview: boolean;
}

const Post: React.FC<BlogPostProps> = ({ post, preview }) => {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <p>Loading...</p>;
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.fields.faq?.map(faq => ({
      '@type': 'Question',
      name: faq.fields.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.fields.answer,
      },
    })),
  };

  return (
    <>
      <NextSeo
        title={post.fields.title}
        description={post.fields.excerpt}
        canonical={`https://igorswatowski.com/blog/${post.fields.slug}`}
        openGraph={{
          url: `https://igorswatowski.com/blog/${post.fields.slug}`,
          title: post.fields.title,
          description: post.fields.excerpt,
          site_name: 'Igor Swatowski | Web Designer & Developer',
        }}
      />
      <Helmet>
        <script type='application/ld+json'>{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <section className='section'>
        {preview && <p>Preview mode enabled!</p>}
        <div className='container'>
          <article className='prose mx-auto'>
            {router.isFallback ? <p>alert</p> : <PostSingle post={post} />}
            <CTASecondSection />
          </article>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
  preview = false,
}) => {
  const { slug } = params ?? {};

  try {
    const posts = await getPosts();
    const post = posts.find((item: Post) => item.fields.slug === slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
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
    const posts = await getPosts();
    const paths = posts.map((item: Post) => ({
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
