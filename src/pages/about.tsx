import { NextSeo } from 'next-seo';
import AboutPage from '@/components/About/About';
import Head from 'next/head';

const title = 'About: Igor Swatowski | Web Designer & Developer';
const description =
  'Discover more about Igor Swatowski, a web designer and developer with a passion for creating stunning, functional websites. Learn about his background, experience, and the unique approach that helps businesses of all sizes improve their online presence and connect with their target audience.';
const url = 'https://igorswatowski.com/about';

const About = () => {
  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: title,
              description,
              url: 'https://igorswatowski.com/about',
              mainEntity: {
                '@type': 'Person',
                name: 'Igor Swatowski',
                url: 'https://igorswatowski.com',
                image:
                  'https://igorswatowski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.cf998cdd.png&w=1920&q=75',
                jobTitle: 'Web Designer & Developer',
              },
            }),
          }}
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'about, Igor Swatowski, web designer, web developer, web design, web development, experience, background, approach',
          },
        ]}
        openGraph={{
          type: 'website',
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
