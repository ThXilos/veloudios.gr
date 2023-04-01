import React from "react";
import styled from "styled-components";
import { MailIcon, PhoneIcon, LocationIcon } from "../utils";
const Footer = ({ lang }) => {
  return (
    <Wrapper>
      <div className="footer-info-container">
        <div className="contact-info col-1">
          <p className="footer-column-title">
            {lang
              ? "About Veloudios Plumbing Services"
              : "Σχετικα με τις υδραυλικες υπηρεσιες Veloudios"}
          </p>
          <p className="footer-text">
            {lang
              ? "With years of experience and active clients and installations on theisland of Tinos , Veloudios Plumbing Services insures customer satisfaction. Our business has its base on the island of Tinos and has a wide veriety of services."
              : "Με χρόνια εμπειρίας και ενεργούς πελάτες και εγκαταστάσεις στο νησί της Τήνου, οι Υδραυλικές Υπηρεσίες Βελούδιος εξασφαλίζουν την ικανοποίηση των πελατών. Η επιχείρησή μας έχει τη βάση της στο νησί της Τήνου και προσφέρει μια μεγάλη ποικιλία υπηρεσιών."}
          </p>
        </div>

        <div className="contact-info col-2">
          <p className="footer-column-title">
            {lang ? "Licence to operate" : "Αδεια Παροχης Υπηρεσιων"}
          </p>
          <p className="footer-text">Lic No: xxx-3232-xxx-3233</p>
        </div>
        <div className="contact-info col-3">
          <p className="footer-column-title">
            {lang ? "contact information" : "στοιχεια επικοινωνιας"}
          </p>
          <ul className="footer-contact-list">
            <li className="footer-text">
              <PhoneIcon className="contact-icon" /> +30 693 675 0639
            </li>
            <li className="footer-text">
              <MailIcon className="contact-icon" /> contact@velfilters.gr
            </li>
            <li className="footer-text">
              <LocationIcon className="contact-icon" />
              Falatados, 84200
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-info">
        <p>Created by Th.Xilos (2023) - Powered by ReactJS</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #3d404c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;

  .footer-info-container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }

  .contact-info {
  }

  .footer-column-title {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .footer-contact-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-text {
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 300;
    opacity: 0.6;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact-icon {
    font-size: 2rem;
  }

  .copyright-info {
    align-self: center;
    font-size: 1.2rem;
    opacity: 0.6;
  }

  @media (max-width: 1000px) {
    .footer-info-container {
      max-width: 900px;
    }
  }

  @media (max-width: 835px) {
    .footer-info-container {
      max-width: 700px;
    }

    .footer-text {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) {
    .footer-info-container {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
      padding: 2rem 2rem;
    }
  }

  @media (max-width: 413px) {
    display: flex;
    flex-diretion: column;

    .footer-info-container {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .copyright-info {
      width: 100%;
      text-align: center;
    }
  }
`;

export default Footer;
