import OfferCardList from './OfferCardList';

const PricesSection = () => {
  return (
    <section className="prices">
      <div className="prices-wrapper container-box">
        <h2
          className="prices-wrapper-heading heading-secondary"
          data-aos="fade-down"
          data-aos-delay="50"
        >
          Check the current prices of my services
        </h2>
        <p
          className="prices-wrapper-text paragraph-primary"
          data-aos="fade-down"
          data-aos-delay="50"
        >
          Choose a plan that’s right for you.
        </p>
        <OfferCardList />
      </div>
    </section>
  );
};

export default PricesSection;
