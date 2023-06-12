import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contatti</h2>
      <span className="section__subtitle">Get in Touch 👇</span>

      <div className="contact__container container grid">
        <div className="contact__content contact__info">
          <h3 className="contact__title"> Location </h3>
          <p>Rieti - RI Italia</p>
        </div>

        <div className="contact__content contact__info">
          <h3 className="contact__title">Email</h3>
          <p>batistafilho.lopes@gmail.com</p>
        </div>

        <div className="contact__content contact__info">
          <h3 className="contact__title">Telefono</h3>
          <p>+39 376 1155010</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
