import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en } from '../i18n/locales/en';
import { pl } from '../i18n/locales/pl';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  return (
    <main>
      <section className="banner container-box">
        <div className="banner-block-left" data-aos="fade-up">
          <h1 className="banner-block-left--title heading-primary">{t.headingPrimaryHome}</h1>
          <p className="banner-block-left--sub paragraph-primary">
            My mission is to make sure that all of my clients achieve their goals with online
            presence they want.
            <br />
            <br />
            Start with how I can help you.
          </p>
          <div className="banner-block-left-buttons">
            <a href="about.html" className="banner-block-left-buttons-first btn-primary">
              <span>How can I help</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
          <div className="banner-block-left-trusted">
            <span className="banner-block-left-trusted--small">Ive been trusted by:</span>
            <div className="banner-block-left-trusted-logos">
              <Image
                loading="lazy"
                src="/assets/trusted/gammasoft.png"
                alt="Gammasoft"
                width={100}
                height={100}
              />
              <Image
                loading="lazy"
                src="/assets/trusted/aionline.png"
                alt="aoinline"
                width={100}
                height={100}
              />
              <Image
                loading="lazy"
                src="/assets/trusted/codema.png"
                alt="Codema"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="banner-block-right" data-aos="fade-up">
          <div className="banner-block-right-img">
            <Image src="/assets/me.png" alt="Personal photo" width={100} height={100} />
            <span className="circle"></span>
          </div>
        </div>
      </section>
      <section className="collaborate container-box">
        <div className="collaborate-wrapper">
          <div className="collaborate-wrapper-lines-img">
            <Image loading="lazy" src="/assets/lines.svg" alt="" width={100} height={100} />
          </div>
          <h2 className="collaborate-wrapper-heading heading-big" data-aos="fade-up">
            I collaborate with brands, entrepreneurs and agencies to create{' '}
            <span className="underline">memorable</span>
            <span className="underline">experiences.</span>
          </h2>
          <p
            className="collaborate-wrapper-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Consider me a creative partner, not just a resource. I bring fresh perspectives and
            insights to our collaboration, and work with you to achieve your goals.
          </p>
          <div className="collaborate-wrapper-arrow-img">
            <Image loading="lazy" src="/assets/arrow.svg" alt="" width={100} height={100} />
          </div>
        </div>
      </section>
      <section className="implementation-process container-box">
        <div className="implementation-process-top">
          <h2 className="implementation-process-top-heading heading-secondary" data-aos="fade-up">
            Heres an overview of my design and implementation process
          </h2>
          <p
            className="implementation-process-top-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Are you curious about what to expect when we work together on a creative project? Here
            are the four stages of our collaboration.
          </p>
        </div>
        <div className="implementation-process-list">
          <div className="implementation-process-list-item" data-aos="fade-up">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image
                  loading="lazy"
                  src="/assets/horse-icon.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">Strategy</h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                I always make sure to ask the right questions and address the right challenges
                before designing. This helps me create a design that meets your needs and stands
                out.
              </p>
            </div>
          </div>
          <div className="implementation-process-list-item" data-aos="fade-up" data-aos-delay="50">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image
                  loading="lazy"
                  src="/assets/design-icon.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">Design</h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                At the end of this phase, you will have a pixel-perfect design for your app or
                website. I create prototypes to simulate the final output before starting the
                project.
              </p>
            </div>
          </div>
          <div className="implementation-process-list-item" data-aos="fade-up" data-aos-delay="100">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image
                  loading="lazy"
                  src="/assets/development-icon.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">
                Development
              </h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                As a designer who can also code, I can easily work closely with developers from
                start to finish. I also do front-end development for web projects.
              </p>
            </div>
          </div>
          <div className="implementation-process-list-item" data-aos="fade-up" data-aos-delay="150">
            <div className="implementation-process-list-item-top">
              <div className="implementation-process-list-item-top-img">
                <Image
                  loading="lazy"
                  src="/assets/quality-icon.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="implementation-process-list-item-top-text heading-third">
                Quality assurance
              </h3>
            </div>
            <div className="implementation-process-list-item-bottom">
              <p className="implementation-process-list-item-bottom-text paragraph-primary">
                Regular meetings provide full insight into my design process. After developing
                initial design versions, I conduct user testing to ensure the best solutions for
                your clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="should-work container-box">
        <h2 className="should-work-heading heading-secondary" data-aos="fade-up">
          We should work together if you are ...
        </h2>
        <div className="should-work-list">
          <div className="should-work-list-item" data-aos="fade-up" data-aos-delay="50">
            <h3 className="should-work-list-item-heading heading-third">An enterpreneur</h3>
            <p className="should-work-list-item-text paragraph-primary">
              You have a great idea, and I can help you understand it, design it, and communicate it
              to your customers.
            </p>
          </div>
          <div className="should-work-list-item" data-aos="fade-up" data-aos-delay="50">
            <h3 className="should-work-list-item-heading heading-third">A company</h3>
            <p className="should-work-list-item-text paragraph-primary">
              As a successful company, you want to improve the usability and looks of your products
              to attract better clients.
            </p>
          </div>
        </div>
        <p className="should-work-end-text" data-aos="fade-up" data-aos-delay="50">
          I understand your products and tailor them to your goals, creating an elegant and
          eye-catching package. Youll be amazed by the results. Lets create something special and
          effective together.
        </p>
        <a
          href="about.html"
          className="should-work-end-link btn-primary"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span>See how I make things</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </section>
      <section className="references container-box">
        <div className="references-wrapper">
          <div className="references-wrapper-left">
            <h3 className="references-wrapper-left-heading heading-references" data-aos="fade-up">
              We have always enjoyed working with Igor – he brings creative ideas, delivers fast
              results, and is a pleasure to collaborate with. Overall, our cooperation has been very
              positive and successful.
            </h3>
            <div className="references-wrapper-left-author" data-aos="fade-up" data-aos-delay="100">
              <div className="references-wrapper-left-author-top">
                <Image loading="lazy" src="/assets//quote.png" alt="" width={100} height={100} />
                <h4 className="heading-fourth">Agnieszka</h4>
              </div>
              <p className="references-wrapper-left-author-company">CEO | Agavaske AS</p>
            </div>
          </div>
          <div className="references-wrapper-right">
            <Image
              loading="lazy"
              src="/assets/colorful-three-lines.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="cta-wrapper container-box">
          <p className="cta-wrapper-text paragraph-primary" data-aos="fade-up">
            You can reach your dream customers online. Lets create a winning website together and
            achieve your goals. Its possible and within your reach.
          </p>
          <p className="cta-wrapper-text paragraph-primary" data-aos="fade-up">
            Lets make it happen!
          </p>
        </div>
      </section>
      <section className="short-personal-info container-box">
        <div className="short-personal-info-left">
          <h2 className="short-personal-info-left-heading heading-secondary" data-aos="fade-up">
            Get to know Igor – The person behind the brand
          </h2>
          <p
            className="short-personal-info-left-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hi, Im Igor Swatowski, a self-taught web designer and programmer who uses the most
            popular technologies and design tools.
          </p>
          <p
            className="short-personal-info-left-text paragraph-primary"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Im passionate about helping creative professionals improve their websites and work
            processes, and increase their value and success.
          </p>
          <a
            href="about.html"
            className="more-about-me-end-link btn-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>More about me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <div className="short-personal-info-right" data-aos="fade-down">
          <Image loading="lazy" src="/assets/me-second.webp" alt="" width={100} height={100} />
        </div>
      </section>
      <section className="cta-second">
        <div className="cta-second-wrapper container-box">
          <p className="cta-second-text paragraph-primary" data-aos="fade-down">
            Share your ideas with me and Ill create a website that is much more efficient and
            effective for you.
            <br />
            <br />
            Less stress, more bookings for your customers.
          </p>
          <h3 className="cta-second-heading heading-third" data-aos="fade-down" data-aos-delay="50">
            Are you in?
          </h3>
          <a
            href="packages.html"
            className="btn-secondary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Yeah!
          </a>
        </div>
      </section>
    </main>
  );
}
