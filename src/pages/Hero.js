import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h1 className="hero-title">Plumbing services on Tinos Island.</h1>
        <p className="hero-text">
          Solutions for all
          <br className="break-mobile" /> your house and business needs.
          <br className="break" />
          <br className="break-mobile" />
          <span>
            <span className="brag-text">With 50+ businesses</span> accross the
            island prefering our services.
          </span>
        </p>
        <p className="btn">Get in touch</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/images/hero.jpg");
  background-size: cover;
  background-position: 25% 90%;
  height: 80vh;
  position: relative;

  color: #fff;

  .break-mobile {
    display: none;
  }
  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .hero-title {
    display: block;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .hero-text {
    display: block;
    font-size: 3rem;
    letter-spacing: -0.5px;
    opacity: 0.9;
  }
  .brag-text {
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
    .hero-title {
      font-size: 4rem;
    }

    .hero-text {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 1000px) {
    .hero-title {
      font-size: 3.2rem;
    }

    .hero-text {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 835px) {
    background-size: cover;
    background-position: -1% 90%;
    height: 70vh;

    .hero-container {
      left: 37%;
      top: 30%;
      text-align: left;
    }
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 413px) {
    background-position: 20%;
    .break {
      display: none;
    }
    .break-mobile {
      display: inline-block;
    }
    .btn {
      padding: 1rem 2rem;
      font-size: 2rem;
    }
    .hero-container {
      left: 50%;
      top: 40%;
      width: 90%;
    }

    .hero-title {
      text-align: left;
      font-size: 4rem;
      letter-spacing: 1.2px;
    }
    .hero-text {
      font-size: 3rem;
      letter-spacing: 1px;
    }
  }
`;

export default Hero;
