import { t } from 'i18next';
import Image from 'next/image';
import { Post } from '../../types/post';

import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';
import { useState } from 'react';

import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import PostSinglePageCard from '../../components/Blog/posts/PostSinglePageCard';

const BlogPage = ({ posts }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className="blog-banner">
        <div className="blog-banner-wrapper container-box">
          <h1 className="blog-banner-wrapper-heading heading-primary">{t.blogHero}</h1>
          <p className="blog-banner-wrapper-text paragraph-primary">{t.blogHeroText}</p>
          {/* <span>{t.blogCategories}</span>
          <div className="blog-banner-wrapper-categories">
            <div className="blog-banner-wrapper-categories-item">{t.blogWebDev}</div>
            <div className="blog-banner-wrapper-categories-item">{t.blogWebDesign}</div>
            <div className="blog-banner-wrapper-categories-item">{t.blogEntrepreneurship}</div>
            <div className="blog-banner-wrapper-categories-item">{t.blogToolsAndTechnology}</div>
          </div> */}
          <div className="blog-banner-wrapper-blog">
            <div className="blog-banner-wrapper-blogs">
              {posts.map((post) => {
                return (
                  <PostSinglePageCard
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    path={`/blog/${post.uri}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_ALL_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
