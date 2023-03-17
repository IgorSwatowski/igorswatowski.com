import { NextSeo } from 'next-seo';
import AboutPage from '@/components/About/About';

const title = 'About: Igor Swatowski | Web Designer & Developer';
const description =
  "Learn more about what I do. I'm web designer and web developer who specialize in creating beautiful, functional websites for businesses of all sizes. My goal is to help my clients increase their online presence and reach their target audience.";
const url = 'https://igorswatowski.com/about';

const About = () => {
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
      <AboutPage />
    </>
  );
};

export default About;
