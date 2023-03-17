import HomePage from '@/components/Home/Home';
import resources from '@/i18n/resources';
import { NextSeo } from 'next-seo';

const title = 'Igor Swatowski | Web Designer & Developer';
const description =
  'Welcome to my portfolio website, showcasing my skills as a web designer and developer. Explore my work and learn more about my process, or get in touch for any inquiries or collaborations.';
const url = 'https://igorswatowski.com';

const Home = () => {
  const { en, pl } = resources;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <HomePage />
    </>
  );
};

export default Home;
