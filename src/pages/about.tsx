import React from 'react';
import Image from 'next/image';
import Button from '../components/Button/Button';

const About = () => {
  return (
    <main>
      <section className="banner-text">
        <div className="banner-text-wrapper container-box">
          <h1
            className="banner-text-wrapper-heading heading-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Meet the top-shelf web developer & designer who does it all*
          </h1>
          <Image
            loading="lazy"
            src="/assets/lines.png"
            alt=""
            data-aos="fade-down"
            data-aos-delay="50"
            width={100}
            height={100}
          />
          <p
            className="banner-text-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            *I may not be able to do everything, but I know how to identify good solutions and avoid
            bad ones. That`&:apos;`s what really matters to you, isn`&:apos;`t it?
          </p>
        </div>
      </section>
      <section className="introduce-me">
        <div className="introduce-me-wrapper">
          <h2
            className="introduce-me-wrapper-heading heading-secondary"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            I guess it`&:apos;`s time to introduce myself.
          </h2>
          <p
            className="introduce-me-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Let me introduce myself. I`&:apos;`m Igor Swatowski, and I`&:apos;`m here to help you
            increase your value and success by creating stunning websites and improving your work
            process. I have the skills and experience to help you achieve your goals, no matter
            where you`&:apos;`re starting from. Are you ready to get started?
          </p>
          <h3
            className="introduce-me-wrapper-subheading heading-fourth"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            That said, to best help you I need to know: which of the following sounds the most like
            you…
          </h3>
          <div className="introduce-me-wrapper-list">
            <div
              className="introduce-me-wrapper-list-item"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Image
                loading="lazy"
                src="/assets/number_first.png"
                alt=""
                className="introduce-me-wrapper-list-item-img"
                width={100}
                height={100}
              />
              <p className="introduce-me-wrapper-list-item-text paragraph-primary">
                I need a website for my brand or business but don`&:apos;`t know how to get
                started...
              </p>
            </div>
            <div
              className="introduce-me-wrapper-list-item"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <Image
                loading="lazy"
                src="/assets/number_second.png"
                alt=""
                className="introduce-me-wrapper-list-item-img"
                width={100}
                height={100}
              />
              <p className="introduce-me-wrapper-list-item-text paragraph-primary">
                I want to improve my current website because it doesn`&:apos;`t look very good and
                doesn`&:apos;`t attract customers...
              </p>
            </div>
            <div
              className="introduce-me-wrapper-list-item"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Image
                loading="lazy"
                src="/assets/number_third.png"
                alt=""
                className="introduce-me-wrapper-list-item-img"
                width={100}
                height={100}
              />
              <p className="introduce-me-wrapper-list-item-text paragraph-primary">
                I want my website to look beautiful and bring in customers...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-about-me">
        <div className="cta-about-me-wrapper container-box">
          <div className="cta-about-me-wrapper-lines-img">
            <Image loading="lazy" src="/assets/lines.svg" alt="" width={100} height={100} />
          </div>
          <h2
            className="cta-about-me-wrapper-heading heading-big"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            I`&:apos;`m a big believer in keeping things <span className="underline">simple</span>
          </h2>
          <p
            className="cta-about-me-wrapper-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            I understand how you feel. The thought of updating your website can be daunting,
            especially when you have so much on your plate already. But don`&:apos;`t worry,
            I`&:apos;`m here to help. Let me take the burden off your shoulders and create a
            beautiful, high-converting website for you.
          </p>
          <p
            className="cta-about-me-wrapper-text--second paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            You`&:apos;`ll be amazed at how easy and stress-free the process can be, and how much
            value and success it can bring to your business. Contact me today to learn more and
            schedule a consultation. Simple and easy.
          </p>
        </div>
      </section>
      <section className="trusted-by">
        <div className="trusted-by-wrapper container-box">
          <p className="trusted-by-wrapper-text" data-aos="fade-right">
            Trusted by{' '}
            <Image loading="lazy" src="/assets/trusted-lines.png" alt="" width={100} height={100} />
          </p>
          <div className="trusted-by-wrapper-companies">
            <Image
              loading="lazy"
              src="/assets/trusted/gammasoft.png"
              alt=""
              data-aos="fade-in"
              width={100}
              height={100}
            />
            <Image
              loading="lazy"
              src="/assets/trusted/codema.png"
              alt=""
              data-aos="fade-in"
              width={100}
              height={100}
            />
            <Image
              loading="lazy"
              src="/assets/trusted/aionline.png"
              alt=""
              data-aos="fade-in"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
      <section className="who-i-am container-box">
        <div className="who-i-am-left">
          <h2
            className="who-i-am-left-heading heading-secondary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Who I’am?
          </h2>
          <p
            className="who-i-am-left-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Hello - nice to meet you, and I’m very glad to see you there. I’m Igor and I help people
            to create amazing websites.
          </p>
          <p
            className="who-i-am-left-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            I`&:apos;`m passionate about helping entrepreneurs and small businesses like you create
            a sustainable and ethical marketplace. Let `&:apos;` s work together to create
            beautiful, purposeful, and strategic designs and websites that reflect your values and
            goals, and engage and inspire your customers. I`&:apos;`m committed to helping you grow
            and succeed.
          </p>
          <div className="social-links" data-aos="fade-down" data-aos-delay="70">
            <a href="https://github.com/IgorSwatowski">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 21.9999V18.1299C15.0375 17.6531 14.9731 17.1737 14.811 16.7237C14.6489 16.2737 14.3929 15.8634 14.06 15.5199C17.2 15.1699 20.5 13.9799 20.5 8.51994C20.4997 7.12376 19.9627 5.78114 19 4.76994C19.4559 3.54844 19.4236 2.19829 18.91 0.999938C18.91 0.999938 17.73 0.649938 15 2.47994C12.708 1.85876 10.292 1.85876 8 2.47994C5.27 0.649938 4.09 0.999938 4.09 0.999938C3.57638 2.19829 3.54414 3.54844 4 4.76994C3.03013 5.78864 2.49252 7.1434 2.5 8.54994C2.5 13.9699 5.8 15.1599 8.94 15.5499C8.611 15.8899 8.35726 16.2953 8.19531 16.7399C8.03335 17.1844 7.96681 17.658 8 18.1299V21.9999M8 18.9999C3 20.4999 3 16.4999 1 15.9999L8 18.9999Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="https://instagram.com/igor.websites" target="_blank" rel="noreferrer">
              <Image
                loading="lazy"
                src="/assets/icons/instagram-icon.png"
                alt=""
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="who-i-am-right" data-aos="fade-down" data-aos-delay="50">
          <Image loading="lazy" src="/assets/about-igor.jpg" alt="" width={100} height={100} />
        </div>
      </section>
      <section className="cta-second-about-me">
        <div className="cta-second-about-me-wrapper container-box">
          <div className="cta-second-about-me-wrapper-left">
            <Image
              loading="lazy"
              src="/assets/colorful-three-lines.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="cta-second-about-me-wrapper-right">
            <h2
              className="cta-second-about-me-wrapper-right-heading heading-secondary"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              Interested in working with me?
            </h2>
            <p
              className="cta-second-about-me-wrapper-right-text paragraph-primary"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Amazing! Take some time to explore the packages I offer.
            </p>
            <Button buttonHref="packages">Packages</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
