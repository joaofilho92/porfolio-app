import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://www.instagram.com/joaofilho92/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/joaofilho92"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/joao-batista-sviluppatorefrontend/?locale=it_IT"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className='footer__copy'>&#169; 2023 Joao Batista Lopes Filho. All Rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer
