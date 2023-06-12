import React from 'react'
import './TechStack.css'

const TechStack = () => {
  return (
    <section className="stack__section" id="techStack">
      <h3 className="section__title">Tech Stack |</h3>
      <div className="stack__content">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          alt="HTML5 Logo"
          className="Logo_img my-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          alt="CSS3 Logo"
          className="Logo_img my-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          alt="JavaScript Logo"
          className="Logo_img my-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          alt="TypeScript Logo"
          className="Logo_img my-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React Logo"
          className="Logo_img my-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="Sass Logo"
          className="Logo_img my-3"
        />
      </div>
    </section>
  );
}

export default TechStack
