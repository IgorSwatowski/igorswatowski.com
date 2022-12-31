const title = 'Igor Swatowski | Web Designer & Developer';
const description =
  'Are you in need of a professional and reliable web designer or developer? Look no further! As a skilled and experienced freelance web designer and developer, I can help you create a stunning and effective website that meets your unique needs. From custom designs and responsive layouts to SEO optimization, I offer a full range of services to help your business succeed online. Contact me today to learn more and discuss your project. My personalized approach and attention to detail will ensure that you get the best possible results.';
const url = 'https://igorswatowski.com/';
const twitterProfile = '@igorfrontend';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en',
    url,
    title,
    description,
  },
  twitter: {
    handle: twitterProfile,
    site: twitterProfile,
    cardType: 'summary_large_image',
  },
};

export default SEO;
