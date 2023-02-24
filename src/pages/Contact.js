import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "../component/ContactForm";

const Contact = ({ lang }) => {
  const [emailStatus, setEmailStatus] = useState(false);
  const handleClose = () => {
    setEmailStatus(false);
  };
  return (
    <Wrapper>
      <div className="about-container">
        <div className={`module-success ${emailStatus && "show"}`}>
          <p className="module-text">
            {lang ? "We got your message!" : "Το μήνυμα σου έχει σταλθεί! "}
          </p>
          <p className="module-text btn" onClick={handleClose}>
            ok
          </p>
        </div>
        <div className="about-text-container">
          <h1 className="about-title">
            {lang ? "Got Questions?" : "Έχεις ερωτήσεις?"}
          </h1>
          <p className="about-text">
            {lang ? "Please feel free to reach out." : "Επικοινώνησε μαζί μας"}
          </p>
        </div>
        <div className="contact-form-container">
          <ContactForm lang={lang} setEmailStatus={setEmailStatus} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 100px 0 100px;

  .module-success {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 9px;
    height: 50px;
    width: 200px;
    background-color: #198754;
    position: absolute;
    right: 50%;
    top: 120%;
    transform: translate(50%, -50%);
  }

  .show {
    display: flex;
  }

  .module-text {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 1.3rem;
  }

  .module-success .btn {
    border: 1px solid #fff;
    padding: 0 1rem;
    text-transform: uppercase;
  }
  .module-success .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .about-container {
    position: relative;
    display: flex;
    gap: 2rem;
  }

  .contact-form-container {
    width: 100%;
  }

  .about-image {
    border-radius: 9px;
  }

  .about-text-container {
    text-align: center;
    width: 100%;
  }

  .about-title {
    font-size: 4rem;
    letter-spacing: 1.6px;
    color: #444;
  }

  .about-text {
    font-size: 2.8rem;
    line-height: 1.6;
    color: #555;
  }

  @media (max-width: 600px) {
    .about-container {
      flex-direction: column;
      align-items: center;
    }
    .about-text-container {
      display: flex;
      flex-direction: column;
      padding: 0 2rem;
    }

    .about-title {
      font-size: 4rem;
    }
    .about-text {
      font-size: 2.6rem;
    }
    padding: 0;
  }
`;

export default Contact;
