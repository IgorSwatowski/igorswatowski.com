import HomePage from '@/components/Home/Home';
import resources from '@/i18n/resources';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

const title = 'Igor Swatowski | Web Designer & Developer';
const description =
  'Igor Swatowski is an experienced web designer and developer, specializing in creating stunning and functional websites for businesses and individuals. Explore his portfolio, learn more about his unique design process, or get in touch for collaborations and inquiries.';

const url = 'https://igorswatowski.com';

const Home = () => {
  const { en, pl } = resources;

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Igor Swatowski',
              url: 'https://igorswatowski.com',
              image:
                'https://igorswatowski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.cf998cdd.png&w=1920&q=75',
              jobTitle: 'Web Designer & Developer',
              description,
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
              'web designer, web developer, portfolio, Igor Swatowski, website design, website development, web design, web development',
          },
        ]}
        openGraph={{
          type: 'website',
          url,
          title,
          description,
          images: [
            {
              url: 'https://igorswatowski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.cf998cdd.png&w=1920&q=75',
              width: 1200,
              height: 630,
              alt: 'Igor Swatowski | Web Designer & Developer',
            },
          ],
          locale: 'en_US',
          site_name: 'Igor Swatowski | Web Designer & Developer',
        }}
      />
      <HomePage />
    </>
  );
};

export default Home;
