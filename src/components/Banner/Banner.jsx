import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Banner.css'

function Banner() {
  return (
    <Container className="justify-content-center d-flex align-items-center text-center mt-4 block_total">
      <Row className="Cont_01 mt-5 p-1 ">
        <Col sm={7}>
          <h1 className="title_Front mb-3">Front-End React Developer 👋🏻</h1>
          <p className="descrizione mb-4">
            Ciao, sono Joao Batista. Sono un appassionato sviluppatore React
            Front-end con sede a Rieti, in Italia. 📍
          </p>
          <div className="d-flex align-items-center mb-3">
            <a
              href="https://www.linkedin.com/in/joao-batista-sviluppatorefrontend/?locale=it_IT"
              className="svg_1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin linkedin_icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a href="href=https://github.com/joaofilho92" className="svg_1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-github ms-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          <div className="Tech_stack">
            <h3 className="mt-5 mb-4">Tech Stack |</h3>
            <div className="images01">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                alt="React_Logo"
                className="Logo_img"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt="React_Logo"
                className="Logo_img"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                alt="React_Logo"
                className="Logo_img"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                alt="React_Logo"
                className="Logo_img"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React_Logo"
                className="Logo_img"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="React_Logo"
                className="Logo_img"
              />
            </div>
          </div>
        </Col>
        <Col sm={5} >
          <img src="./Napoli.jpeg" alt="Profile_picture" className="Profile_img"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
