import React from "react";
import styled from "styled-components";

const About = ({ lang }) => {
  return (
    <Wrapper>
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Giannis Veloudios"
            className="about-image"
          />
        </div>
        <div className="about-text-container">
          <h1 className="about-title">
            {lang ? "Meet your plumber" : "Γνωρίστε τον υδραυλικό σάς"}
          </h1>
          <p className="about-text">
            {lang
              ? "Giannis Veloudios is a resident of Tinos Island, with over 20 year of experience and currently provides varius plumbing services to over 50 local business across the island."
              : "Ο Γιαννης Βελουδιος ειναι κατοικος Τηνου με πολλα χρονια εμπειριας στις υδραυλικες εγκαταστασεις,θερμανση-ψυξη και στα συστηματα επεξεργασιας ποσιμου νερου."}
          </p>
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

  .about-image-container {
  }

  .about-image {
    border-radius: 9px;
  }

  .about-text-container {
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
  }
`;

export default About;
