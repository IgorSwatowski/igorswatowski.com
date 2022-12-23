const PackagesBanner = () => {
  return (
    <section className="packages-banner">
      <div className="packages-banner-wrapper container-box">
        <div className="packages-banner-wrapper-left">
          <h1
            className="packages-banner-wrapper-left-heading heading-primary underline"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Strategic
          </h1>
          <h1
            className="packages-banner-wrapper-left-heading heading-primary underline"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Creative
          </h1>
          <h1
            className="packages-banner-wrapper-left-heading heading-primary underline"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            Confidence
          </h1>
        </div>
        <div className="packages-banner-wrapper-right">
          <h1
            className="packages-banner-wrapper-right-heading heading-secondary"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            My process
          </h1>
          <p
            className="packages-banner-wrapper-right-text paragraph-primary"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            My personalized approach to building empowered brands is to focus on what makes your
            business unique and meaningful. My goal is to guide you every step of the way on this
            your journey to business growth and success. To bring you to a level where you feel
            confident and connected to your brand so that in turn, you'll be able to attract your
            ideal viewer for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesBanner;
