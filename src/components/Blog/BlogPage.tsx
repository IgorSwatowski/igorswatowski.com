import { t } from 'i18next';
import { Post } from '../../types/post';

import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';
import PostSinglePageCard from './posts/PostSinglePageCard';
import { useState } from 'react';

export interface PostsProps {
  posts: Post[];
}

const BlogPage = ({ posts }: PostsProps) => {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className="blog-banner">
        <div className="blog-banner-wrapper container-box">
          <h1 className="blog-banner-wrapper-heading heading-primary">{t.blogHero}</h1>
          <p className="blog-banner-wrapper-text paragraph-primary">{t.blogHeroText}</p>
          <span>{t.blogCategories}</span>
          <div className="blog-banner-wrapper-categories">
            <div className="blog-banner-wrapper-categories-item">{t.blogWebDev}</div>
            <div className="blog-banner-wrapper-categories-item">{t.blogWebDesign}</div>
            <div className="blog-banner-wrapper-categories-item">{t.blogEntrepreneurship}</div>
            <div className="blog-banner-wrapper-categories-item">{t.blogToolsAndTechnology}</div>
          </div>
          <div className="blog-banner-wrapper-blogs">
            {posts.map(({ id, title, slug, pageContent, createdAt }) => {
              return (
                <PostSinglePageCard
                  key={id}
                  title={title}
                  slug={slug}
                  id={id}
                  pageContent={pageContent}
                  createdAt={createdAt}
                  path={`/blog/${id}`}
                />
              );
            })}
          </div>
          <button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>
            Previous page
          </button>
          <button disabled={!page} onClick={() => setPage((prev) => prev + 1)}>
            Next page
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
