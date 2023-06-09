import React from "react";
import "./Stack.css";
import { Container } from "react-bootstrap";

function Stack() {
  return (
    <Container className="justify-content-center d-flex align-items-center text-center mt-4">
      <div className="Tech_stack">
        <div className="d-flex align-items-center">
          <h3 className="my-5 mr-3 Tech_stack ">Tech Stack |</h3>
          <div className="images01 d-flex flex-wrap justify-content-center">
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
        </div>
      </div>
    </Container>
  );
}

export default Stack;
