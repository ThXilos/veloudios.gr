import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h1 className="hero-title">Plumbing services on Tinos Island.</h1>
        <p className="hero-text">
          Solutions for all your house and business needs.
          <br />
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
`;

export default Hero;
