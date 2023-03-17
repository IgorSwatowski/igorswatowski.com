import { NextSeo } from 'next-seo';
import PackagesPage from '@/components/Packages/Packages';

const title = 'Offer: Igor Swatowski | Web Designer & Developer';
const description =
  'Looking for a professional and reliable web designer and developer? I offering a full range of services including custom website design, responsive layouts, SEO optimization and so on. I have the skills and experience to help your business succeed online.';
const url = 'https://igorswatowski.com/packages';

const Packages = () => {
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
      <PackagesPage />
    </>
  );
};

export default Packages;
