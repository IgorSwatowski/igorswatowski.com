import { t } from 'i18next';
import Image from 'next/image';
import { Post } from '../../types/post';

import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';
import PostSinglePageCard from './posts/PostSinglePageCard';
import { useState } from 'react';

import InfoIcon from '../../assets/info-icon.png';

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
          <div className="blog-banner-wrapper-blog">
            {posts.length > 0 ? (
              <div className="blog-banner-wrapper-blogs">
                {posts.map(({ id, title, slug, content, createdAt, createdBy }) => {
                  return (
                    <PostSinglePageCard
                      key={id}
                      title={title}
                      slug={slug}
                      id={id}
                      content={content}
                      createdAt={createdAt}
                      createdBy={createdBy}
                      path={`/blog/${slug}`}
                    />
                  );
                })}
              </div>
            ) : (
              <h4 className="heading-fourth">
                <Image src={InfoIcon} alt="" />
                Unfortunately, there are no posts to display
              </h4>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
