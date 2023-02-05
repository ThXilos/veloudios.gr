import React from "react";
import styled from "styled-components";

const About = ({ lang }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Giannis Veloudios"
            className="about-image"
          />
        </div>
        <div className="text-container">
          <h1 className="primary-text">
            {lang ? "Meet your plumber" : "Γνωρίστε τον υδραυλικό σάς"}
          </h1>
          <p className="about-text">
            {lang
              ? "Giannis Veloudios is a resident of Tinos Island, with over 20 year of experience and currently provides varius plumbing services to over 50 local business across the island."
              : "Ο Γιαννη Βελουδιος ειναι ενας κατοικος Τηνου, με πανω απο 20 χρονια εμπειρια στον τομεα και προσφερει υδραυλικες υπηρεσιες σε πανω απο 50 επιχειρησεις με βαση το νησι της Τηνου."}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 14rem 0 0;
    align-items: center;
  }

  .about-image {
    width: 35%;
    border-radius: 9px;
  }

  .primary-text {
    font-size: 4.5rem;
    color: #444;
  }
  .text-container {
    height: 500px;
  }
  .about-text {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: 1.2px;
    color: #555;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    position: relative;
  }

  .image-container::before,
  .image-container::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
  }

  .image-container::before {
    background-color: #21ceb9;
    z-index: -1;
    width: 53%;
    padding-bottom: 53%;
  }

  .image-container::after {
    background-color: #90e7dc;
    z-index: -2;
    width: 60%;
    padding-bottom: 60%;
  }
`;

export default About;
