import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-info-container">
        <div className="contact-info col-1">
          <p className="footer-column-title">
            About Veloudios Plumbing Services
          </p>
          <p className="footer-text">
            With years of experience and active clients and installations on the
            island of Tinos , Veloudios Plumbing Services insures customer
            satisfaction. Our business has its base on the island of Tinos and
            has a wide veriety of services.
          </p>
        </div>

        <div className="contact-info col-2">
          <p className="footer-column-title">Licence to operate</p>
          <p className="footer-text">Lic No: xxx-3232-xxx-3233</p>
        </div>
        <div className="contact-info col-3">
          <p className="footer-column-title">Contact Information</p>
          <ul className="footer-contact-list">
            <li className="footer-text">Mobile: +30 696 85 74 852</li>
            <li className="footer-text">Email: contact@veloudios.gr</li>
            <li className="footer-text">Address: Megaloxarh, 32, TK 84200</li>
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
  }

  .footer-text {
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 300;
    opacity: 0.6;
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
    .justify-content: center;

    .footer-info-container {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .copyright-info {
      max-width: 100%;
    }
  }
`;

export default Footer;
