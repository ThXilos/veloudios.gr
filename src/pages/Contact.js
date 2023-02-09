import React from "react";
import styled from "styled-components";
import ContactForm from "../component/ContactForm";

const Contact = ({ lang }) => {
  return (
    <Wrapper>
      <div className="about-container">
        <div className="about-text-container">
          <h1 className="about-title">
            {lang ? "Got Questions?" : "Έχεις ερωτήσεις?"}
          </h1>
          <p className="about-text">
            {lang ? "Please feel free to reach out." : "Επικοινώνησε μαζί μας"}
          </p>
        </div>
        <div className="contact-form-container">
          <ContactForm lang={lang} />
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

  .about-container {
    display: flex;
    gap: 2rem;
  }

  .contact-form-container {
  }

  .about-image {
    border-radius: 9px;
  }

  .about-text-container {
    text-align: center;
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
