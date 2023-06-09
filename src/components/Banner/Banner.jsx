import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

function Banner() {
  return (
    <Container className="justify-content-center d-flex align-items-center text-center mt-4 block_total">
      <Row className="mt-5">
        <Col xs={12} md={8} className="order-md-1 teste ">
          <h1 className="title_Front mb-3">Front-End React Developer 👋🏻</h1>
          <p className="descrizione mb-4">
            Ciao, sono Joao Batista. Sono un appassionato sviluppatore React
            Front-end con sede a Rieti, in Italia. 📍
          </p>
        </Col>
        <Col xs={12} md={3} className="order-md-2 teste2 ">
          <Image
            src="./Napoli.jpeg"
            alt="Imagem"
            fluid
            className="Profile_img"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
