import { NextSeo } from 'next-seo';
import ContactPage from '@/components/Contact/ContactPage';
import Head from 'next/head';

const title = 'Contact: Igor Swatowski | Web Designer & Developer';
const description =
  "Get in touch with Igor Swatowski, a professional web designer and developer, for any inquiries, questions, or concerns. Reach out through the contact form on the website or connect via social media. Let's discuss your project and find the best solution for your business.";
const url = 'https://igorswatowski.com/contact';

const Contact = () => {
  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: title,
              description,
              url: 'https://igorswatowski.com/contact',
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
              'contact, Igor Swatowski, web designer, web developer, web design, web development, inquiries, questions, projects',
          },
        ]}
        openGraph={{
          type: 'website',
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
