import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <div className="service-heading-container">
        <span className="subheading">Our Services</span>
        <h2 className="heading-secondary">
          Our services cover both business and household needs.
        </h2>
      </div>
      <div className="service-list-container">
        <div className="service-text-box">
          <h3 className="heading-tertiary">Water filtering installation</h3>
          <p className="service-description">
            Enjoy clean and safe drinking water with our water filter
            installation service. Our experienced technicians will assess your
            water quality and recommend the best solution for your needs.
          </p>
        </div>
        <div className="service-image-container">
          <img
            src="https://via.placeholder.com/700"
            alt="Water filtering installation"
            className="service-image"
          />
        </div>
        {/* add */}
        <div className="service-image-container">
          <img
            src="https://via.placeholder.com/700"
            alt="Water filtering installation"
            className="service-image"
          />
        </div>
        <div className="service-text-box">
          <h3 className="heading-tertiary">Water filtering installation</h3>
          <p className="service-description">
            Enjoy clean and safe drinking water with our water filter
            installation service. Our experienced technicians will assess your
            water quality and recommend the best solution for your needs.
          </p>
        </div>
        {/* add */}
        <div className="service-text-box">
          <h3 className="heading-tertiary">Water filtering installation</h3>
          <p className="service-description">
            Enjoy clean and safe drinking water with our water filter
            installation service. Our experienced technicians will assess your
            water quality and recommend the best solution for your needs.
          </p>
        </div>
        <div className="service-image-container">
          <img
            src="https://via.placeholder.com/700"
            alt="Water filtering installation"
            className="service-image"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  .service-heading-container {
    padding: 6rem 0 10rem;
  }

  .heading-secondary {
    font-size: 3.4rem;
    line-height: 1.2;
    color: #333;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin: 1.2rem 0 2rem;
  }

  .subheading {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    color: #1c1e6c;
    text-transform: uppercase;
    letter-spacing: 0.75px;
  }

  .service-list-container {
    padding: 15rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15rem;
    column-gap: 6.5rem;
  }

  .heading-tertiary {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 3.2rem;
    color: #333;
  }

  .service-description {
    font-size: 1.8rem;
    line-height: 1.6;
    color: #555;
  }

  .service-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .service-image-container::before,
  .service-image-container::after {
    content: "";
    display: block;
    width: 58%;
    padding-bottom: 58%;
    position: absolute;
    border-radius: 50%;
  }

  .service-image-container::before {
    background-color: #21ceb9;
    z-index: -1;
    width: 53%;
    padding-bottom: 53%;
  }
  .service-image-container::after {
    background-color: #90e7dc;
    z-index: -2;
    width: 60%;
    padding-bottom: 60%;
  }

  .service-image {
    width: 35%;
    border-radius: 9px;
  }

  @media (max-width: 413px) {
    .service-heading-container {
      padding: 6rem 0;
    }

    .service-list-container {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 6.5rem;
      padding: 0 0 3rem;
    }

    .service-image-container:nth-child(2) {
      grid-row: 1;
    }

    .service-image-container:nth-child(6) {
      grid-row: 5;
    }

    .service-image-container {
      transform: translateY(5rem);
    }

    .service-image {
      width: 70%;
    }

    .service-image-container::before {
      width: 76%;
      padding-bottom: 76%;
    }
    .service-image-container::after {
      width: 86%;
      padding-bottom: 86%;
    }
  }
`;

export default Services;
