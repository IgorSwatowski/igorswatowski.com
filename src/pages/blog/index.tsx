import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';

import PostCard from '../../components/Blog/PostCard';
import { client } from '../../lib/contentful/client';
import { CONTENT_TYPE } from '../../constants/constants';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { Post, PostFields } from '@/types/post';
import { CategoryFields } from '@/types/category';

interface PostsProps {
  posts: Post[];
  categories: CategoryFields[];
}

const Posts: React.FC<PostsProps> = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className='blog-banner'>
        <div className='blog-banner-wrapper container-box'>
          <h1 className='blog-banner-wrapper-heading heading-primary underline'>
            {t.blogHero}
          </h1>
          <p className='blog-banner-wrapper-text paragraph-primary'>
            {t.blogHeroText}
          </p>
          <div className='blog-banner-wrapper-categories'>
            {categories && categories.length < 1 ? (
              <p className='paragraph-primary'>{t.posts}</p>
            ) : (
              categories?.map((category: CategoryFields) => (
                <div
                  className='blog-banner-wrapper-categories-item'
                  key={category.slug}
                >
                  <button onClick={() => setSelectedCategory(category.slug)}>
                    {category.title}
                  </button>
                </div>
              ))
            )}
          </div>
          <div className='blog-banner-wrapper-blog'>
            <div className='blog-banner-wrapper-blogs'>
              {posts && posts.length < 1 ? (
                <p className='paragraph-primary'>{t.posts}</p>
              ) : (
                posts.map((post: Post) => (
                  <PostCard key={post.fields.slug} post={post.fields} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  try {
    const responsePosts = await client.getEntries({
      content_type: CONTENT_TYPE.POST,
    });
    const posts = responsePosts.items;

    const responseCategories = await client.getEntries({
      content_type: CONTENT_TYPE.CATEGORY,
    });
    const categories = responseCategories.items;

    return {
      props: {
        posts,
        categories,
      },
    };
  } catch (error) {
    console.error('Error fetching posts and categories: ', error);
    return {
      notFound: true,
    };
  }
};

export default Posts;
