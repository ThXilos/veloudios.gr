import React from "react";
import styled from "styled-components";

const Services = ({ lang }) => {
  return (
    <Wrapper>
      <div className="service-heading-container">
        <span className="subheading">
          {lang ? "Our Services" : "Υπηρεσιες"}
        </span>
        <h2 className="heading-secondary">
          {lang
            ? "Our services cover both business and household needs."
            : "Οι υπηρεσίες μας καλύπτουν οικιακές και επαγγελματικές ανάγκες."}
        </h2>
      </div>
      <div className="service-list-container">
        <div className="service-text-box">
          <h3 className="heading-tertiary">
            {lang
              ? "Water filtering installation"
              : "Εγκατάσταση Φίλτρων Νερού"}
          </h3>
          <p className="service-description">
            {lang
              ? "Enjoy clean and safe drinking water with our water filter installation service. Our experienced technicians will assess your water quality and recommend the best solution for your needs."
              : "Απολαύστε καθαρό και ασφαλές πόσιμο νερό με την υπηρεσία εγκατάστασης φίλτρου νερού μας. Οι έμπειροι τεχνικοί μας θα αξιολογήσουν την ποιότητα του νερού σας και θα σας προτείνουν την καλύτερη λύση για τις ανάγκες σας."}
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
          <h3 className="heading-tertiary">
            {lang ? "Heat Pump installation" : "Εγκατάσταση Αντλίων Θερμότητας"}
          </h3>
          <p className="service-description">
            {lang
              ? "With our heat pump installation service, you can enjoy a comfortable and warm environment all year round while saving on energy costs."
              : "Με την υπηρεσία εγκατάστασης αντλιών θερμότητας μας, μπορείτε να απολαμβάνετε ένα άνετο και ζεστό περιβάλλον όλο το χρόνο ενώ εξοικονομείτε στο κόστος ενέργειας."}
          </p>
        </div>
        {/* add */}
        <div className="service-text-box">
          <h3 className="heading-tertiary">
            {lang ? "Plumbing Services" : "Υδραυλικές Υπηρεσίες"}
          </h3>
          <p className="service-description">
            {lang
              ? "We take pride in our prompt and courteous service, and our commitment to customer satisfaction means we will go the extra mile to ensure your plumbing needs are met."
              : "Είμαστε υπερήφανοι για την άμεση και ευγενική εξυπηρέτησή μας, και η δέσμευσή μας για την ικανοποίηση του πελάτη σημαίνει ότι θα κάνουμε τα πάντα για να εξασφαλίσουμε την ικανοποίηση των υδραυλικών σας αναγκών. "}
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
    background-color: #259cd3;
    z-index: -1;
    width: 53%;
    padding-bottom: 53%;
  }
  .service-image-container::after {
    background-color: #66bae0;
    z-index: -2;
    width: 60%;
    padding-bottom: 60%;
  }

  .service-image {
    width: 35%;
    border-radius: 9px;
  }

  @media (max-width: 600px) {
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
