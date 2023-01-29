import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';

import PostCard from '../../components/Blog/posts/PostCard';
import { client } from '../../lib/contentful/client';

const Posts = ({ posts }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className='blog-banner'>
        <div className='blog-banner-wrapper container-box'>
          <h1 className='blog-banner-wrapper-heading heading-primary'>
            {t.blogHero}
          </h1>
          <p className='blog-banner-wrapper-text paragraph-primary'>
            {t.blogHeroText}
          </p>
          {/* <span>{t.blogCategories}</span>
        <div className="blog-banner-wrapper-categories">
          <div className="blog-banner-wrapper-categories-item">{t.blogWebDev}</div>
          <div className="blog-banner-wrapper-categories-item">{t.blogWebDesign}</div>
          <div className="blog-banner-wrapper-categories-item">{t.blogEntrepreneurship}</div>
          <div className="blog-banner-wrapper-categories-item">{t.blogToolsAndTechnology}</div>
        </div> */}
          <div className='blog-banner-wrapper-blog'>
            <div className='blog-banner-wrapper-blogs'>
              {posts.map(post => (
                <PostCard key={post.fields.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' });

  return {
    props: {
      posts: response.items,
    },
  };
};

export default Posts;
