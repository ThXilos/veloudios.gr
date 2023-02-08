import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h1 className="hero-title">Plumbing services on Tinos Island.</h1>
        <div className="sub-heading">
          <p className="hero-text">
            <span className="subtitle">
              Solutions for all your house and business needs.
            </span>
            <br />
            <span className="secondary-subtitle">
              <span className="brag-title">With 50+ businesses</span> using our
              services.
            </span>
          </p>
          <p className="btn">Get in touch</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/images/hero.jpg");
  background-size: cover;
  background-position: 20% 65%;
  height: 80vh;
  color: #fff;

  .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 37rem;
  }

  .hero-title {
    display: block;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .sub-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-text {
    font-size: 3rem;
    letter-spacing: -0.5px;
    opacity: 0.9;
    text-align: center;
  }

  .brag-title {
    font-weight: 700;
    color: #21ceb9;
    opacity: 1;
  }

  .btn {
    display: inline-block;
    background-color: #21ceb9;
    padding: 2rem 6rem;
    border-radius: 9px;
    font-size: 2rem;
    transition: all 0.3s;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #4dd8c7;
  }

  @media (max-width: 1300px) {
    .hero-container {
      gap: 34rem;
    }
  }
  @media (max-width: 1000px) {
  }

  @media (max-width: 835px) {
  }

  @media (max-width: 600px) {
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
      url("assets/images/hero.jpg");

    .hero-container {
      gap: 20rem;
    }

    .hero-title {
      width: 70%;
      text-align: center;
    }

    .hero-text {
      width: 60%;
      text-align: left;
    }
  }

  @media (orientation: landscape) and (max-width: 1081px) {
    .hero-container {
      gap: 25rem;
    }
  }

  @media (max-width: 415px) {
    .hero-container {
      gap: 15rem;
    }

    .hero-title {
      width: 90%;
      text-align: center;
    }

    .hero-text {
      width: 85%;
      text-align: left;
    }
  }

  @media (orientation: landscape) and (max-width: 915px) {
    .hero-container {
      gap: 0;
    }
    .hero-text {
      padding: 0;
      margin: 0;
    }
  }
`;

export default Hero;
