import OfferCard from './OfferCard';

const OfferCardList = () => {
  return (
    <div className="prices-wrapper-list">
      <OfferCard
        title="Web Design"
        description="Tailored graphic design for your industry. Market research, color matching, fonts,
            adaptation to different screens - this is what you can expect from the project."
        price="400$"
      />
      <OfferCard
        title="Web Design & Web Development"
        description="We’ll work together to build a strategic website that attracts your ideal audience.
          Includes SEO & copy assistance."
        price="999$"
      />
      <OfferCard
        title="Web Design"
        description="Tailored graphic design for your industry. Market research, color matching, fonts,
              adaptation to different screens - this is what you can expect from the project."
        price="400$"
      />
      <OfferCard
        title="Web Development"
        description=" Do you have a graphic design but are looking for someone to implement the idea into
          a fully functional website? I will be happy to help you with it."
        price="400$"
      />
    </div>
  );
};

export default OfferCardList;
