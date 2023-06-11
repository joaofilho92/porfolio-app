import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/joaofilho92/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/joaofilho92"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/joao-batista-sviluppatorefrontend/?locale=it_IT"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
}

export default Social;
