import { NextSeo } from 'next-seo';
import PackagesPage from '@/components/Packages/Packages';
import Head from 'next/head';

const title = 'Offer: Igor Swatowski | Web Designer & Developer';
const description =
  'Explore a variety of web design and development packages offered by Igor Swatowski, an experienced web designer and developer. Find the perfect solution for your business, whether you need a custom website, responsive layouts, or SEO optimization. Benefit from high-quality services and make your online presence stand out.';
const url = 'https://igorswatowski.com/packages';

const Packages = () => {
  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Web Design and Development Packages',
              provider: {
                '@type': 'Person',
                name: 'Igor Swatowski',
                url: 'https://igorswatowski.com',
                image:
                  'https://igorswatowski.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.cf998cdd.png&w=1920&q=75',
                jobTitle: 'Web Designer & Developer',
              },
              description,
              url: 'https://igorswatowski.com/packages',
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
              'web design packages, web development packages, Igor Swatowski, website design, website development, web design, web development, custom website, responsive layouts, SEO optimization',
          },
        ]}
        openGraph={{
          type: 'website',
          url,
          title,
          description,
        }}
      />
      <PackagesPage />
    </>
  );
};

export default Packages;
