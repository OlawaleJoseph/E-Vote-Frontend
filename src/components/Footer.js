import React from 'react';
import Logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer>
      <a href="#!">
        <img className="footer__logo" src={Logo} alt="company logo"/>
      </a>

      <p className="footer__copyright">&#169; copyright, 2020.</p>
      
    </footer>
  )
}
