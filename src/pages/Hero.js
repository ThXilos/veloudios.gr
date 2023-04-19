import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Hero = ({ lang }) => {
  return (
    <Wrapper>
      <div className="hero-container">
        {lang ? (
          <h1 className="hero-title">
            Plumbing installations, water filtration, and heating-cooling
            studies.
          </h1>
        ) : (
          <h1 className="hero-title">
            {" "}
            Υδραυλικές Εγκαταστάσεις
            <br /> Φίλτρα Νερού <br />
            Μελέτες Θέρμανσης-Ψύξης.
          </h1>
        )}

        <div className="sub-heading">
          <p className="hero-text">
            <span className="secondary-subtitle">
              {lang ? "Supportin " : "Υποστηρίζοντας "}
              <br />
              <span className="brag-title">
                {lang ? "50+ businesses " : "50+ επιχειρήσεις "}
              </span>
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
  background-color: #1c1e6c;
  background-image: linear-gradient(160deg, #1c1e6c 0%, #0093e9 100%);
  background-size: cover;
  background-position: 20% 65%;
  padding: 1rem 0 2rem;
  color: #fff;

  .hero-container {
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .hero-title {
    display: block;
    width: 95rem;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .sub-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 17%;
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

  @media (max-width: 600px) {
    .hero-container {
      padding-top: 5%;
    }

    .hero-title {
      font-size: 4rem;
      width: 80%;
      text-align: left;
      line-height: 1.5;
    }

    .sub-heading {
      width: 80%;
      text-align: left;
      margin-top: 5%;
    }

    .secondary-subtitle {
      font-size: 3rem;
    }
  }

  @media (max-width: 375px) {
    .hero-container {
      padding: 0 1rem;
    }

    .hero-title {
      font-size: 2.8rem;
    }

    .sub-heading {
      text-align: ceter;
    }

    .hero-text {
      text-align: center;
    }

    .secondary-subtitle {
      font-size: 2.8rem;
    }

    .btn {
      padding: 1.8rem 2rem;
    }
  }
`;

export default Hero;
