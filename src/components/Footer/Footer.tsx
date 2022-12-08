import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-wrapper container-box">
      <div className="footer-wrapper-contact">
        <h3 className="footer-wrapper-contact-heading heading-fourth">
          Contact Information
        </h3>
        <p className="footer-wrapper-contact-text paragraph-primary">
          Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
        </p>
        <p className="paragraph-primary">Email: <a href="mailto: hello@igorswatowski.com">hello@igorswatowski.com</a></p>
        <p className="paragraph-primary">Phone: <a href="tel: +48511277924">+48 511 277 924</a></p>
        <p className="footer-copy">Copyright © 2022 . Igor Swatowski . All rights reserved.</p>
      </div>
      <div className="footer-wrapper-menu">
        <ul className="footer-wrapper-menu-left">
          <h3 className="heading-fourth">Menu</h3>
          <li><a className="paragraph-primary" href="about.html">About me</a></li>
          <li><a className="paragraph-primary" href="packages.html">Packages</a></li>
          <li><a className="paragraph-primary" href="contact.html">Contact</a></li>
        </ul>
        <ul className="footer-wrapper-menu-right">
          <h3 className="heading-fourth">Follow me on</h3>
          <li><a className="paragraph-primary" href="https://dribbble.com/IgorSwatowski" target="_blank" rel="noreferrer">Dribbble</a></li>
          <li><a className="paragraph-primary" href="https://instagram.com/igor.websites" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a className="paragraph-primary" href="https://www.linkedin.com/in/igorSwatowski" target="_blank" rel="noreferrer">Linkedin</a></li>
          <li><a className="paragraph-primary" href="https://github.com/igorswatowski" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer