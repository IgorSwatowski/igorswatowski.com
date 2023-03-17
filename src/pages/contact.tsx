import { NextSeo } from 'next-seo';
import ContactPage from '@/components/Contact/ContactPage';

const title = 'Contact: Igor Swatowski | Web Designer & Developer';
const description =
  "Need to get in touch with me? No problem! You can reach me through our contact form on our website or social media. I'm always happy to help with any questions or concerns you may have.";
const url = 'https://igorswatowski.com/contact';

const Contact = () => {
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
      <ContactPage />
    </>
  );
};

export default Contact;
