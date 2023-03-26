import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Hero = ({ lang }) => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h1 className="hero-title">
          {lang
            ? "Plumbing services in Tinos Island."
            : "Υδραυλικές εργασίες στην Τήνο."}
        </h1>
        <div className="sub-heading">
          <p className="hero-text">
            <span className="secondary-subtitle">
              <span className="brag-title">
                {lang
                  ? "Supporting 50+ businesses"
                  : "Υποστηρίζοντας 50+ επιχειρήσεις"}
              </span>{" "}
              {lang ? "around the island." : "στο νησί."}
            </span>
          </p>
          <NavLink className="btn" to="/contact">
            {lang ? "Get in touch" : "Επικοινώνησε μαζί μας"}
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/images/hero.webp");
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
    color: #259cd3;
    opacity: 1;
  }

  .btn {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    background-color: #259cd3;
    padding: 2rem 4rem;
    border-radius: 9px;
    font-size: 2rem;
    transition: all 0.3s;
    text-align: center;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #66bae0;
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
      url("assets/images/hero.webp");

    .hero-container {
      padding-top: 10%;
      gap: 10rem;
    }

    .hero-title {
      font-size: 5rem;
      width: 80%;
      text-align: left;
    }

    .sub-heading {
      width: 80%;
      align-self: center;
    }

    .hero-text {
      text-align: left;
    }

    .secondary-subtitle {
      font-size: 3rem;
    }
  }

  @media (max-width: 375px) {
    .hero-container {
      padding-top: 0;
      gap: 0;
    }

    .hero-title {
      font-size: 4.8rem;
      width: 80%;
      text-align: left;
    }

    .sub-heading {
      width: 80%;
      align-self: center;
    }

    .hero-text {
      text-align: left;
    }

    .secondary-subtitle {
      font-size: 2.8rem;
    }
  }

  @media (orientation: landscape) and (max-width: 1081px) {
  }

  @media (orientation: landscape) and (max-width: 915px) {
  }
`;

export default Hero;
