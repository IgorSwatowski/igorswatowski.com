interface OfferCardProps {
  title: string;
  description: string;
  price: string;
}

const OfferCard = ({ title, description, price }: OfferCardProps) => {
  return (
    <div className="prices-wrapper-list-item" data-aos="fade-up" data-aos-delay="50">
      <h3 className="prices-wrapper-list-item-heading heading-third">{title}</h3>
      <p className="prices-wrapper-list-item-text paragraph-primary">{description}</p>
      <h4 className="prices-wrapper-list-item-price heading-third">From {price}</h4>
      <span>(50%) upfront payment</span>
      <a href="contact.html" className="btn-secondary">
        Get started
      </a>
      <div className="small-line"></div>
      <div className="offer-whats-included-list">
        <h5 className="offer-whats-included-list-heading heading-fifth">What&apos;s included?</h5>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Custom mobile phone web design optimization
        </p>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Functional & goal oriented design
        </p>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Up to 6 custom designed web pages
        </p>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Creative + strategic direction
        </p>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Creating a design in Figma
        </p>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Color, font and photo matching
        </p>
        <p className="offer-whats-included-list-item paragraph-primary">
          + Timelime 1 week - 2 weeks
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
