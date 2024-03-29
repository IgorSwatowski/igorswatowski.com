import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';
import PostCard from '../../components/Blog/PostCard';
import { client, getCategories, getPosts } from '../../lib/contentful/client';
import { CONTENT_TYPE } from '../../constants/constants';
import { Post } from '@/types/post';
import { CategoryFields } from '@/types/category';

interface BlogPostsProps {
  posts: Post[];
  categories: CategoryFields[];
}

const Posts: React.FC<BlogPostsProps> = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(
        posts.filter(
          post =>
            post.fields.category &&
            post.fields.category.some(
              cat => cat.fields.slug === selectedCategory,
            ),
        ),
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

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
            {categories.length < 1 ? (
              <p className='paragraph-primary'>{t.posts}</p>
            ) : (
              categories?.map((category: CategoryFields) => (
                <div
                  className={`blog-banner-wrapper-categories-item ${
                    selectedCategory === category.fields.slug ? 'active' : ''
                  }`}
                  key={category.fields.slug}
                >
                  <button
                    onClick={() => setSelectedCategory(category.fields.slug)}
                    className='category-btn'
                  >
                    {category.fields.title}
                  </button>
                </div>
              ))
            )}
          </div>
          <div className='blog-banner-wrapper-blog'>
            <div className='blog-banner-wrapper-blogs'>
              {filteredPosts.length === 0 ? (
                <p className='paragraph-primary'>{t.posts}</p>
              ) : (
                filteredPosts.map((post: Post) => (
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

export const getStaticProps: GetStaticProps<BlogPostsProps> = async () => {
  try {
    const posts = await getPosts();
    const categories = await getCategories();

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
