import React from 'react';

const FooterContact = () => {
  return (
    <div className="footer-wrapper-contact">
      <h3 className="footer-wrapper-contact-heading heading-fourth">Contact Information</h3>
      <p className="footer-wrapper-contact-text paragraph-primary">
        Feel free to reach out to me any time. I prefer to talk over email, especially since we may
        be a few time zones away.
      </p>
      <p className="paragraph-primary">
        Email: <a href="mailto: hello@igorswatowski.com">hello@igorswatowski.com</a>
      </p>
      <p className="paragraph-primary">
        Phone: <a href="tel: +48511277924">+48 511 277 924</a>
      </p>
      <p className="footer-copy">Copyright © 2022 . Igor Swatowski . All rights reserved.</p>
    </div>
  );
};

export default FooterContact;
