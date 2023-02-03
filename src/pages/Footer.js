import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-info-container">
        <div className="contact-info">
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
        <div className="contact-info">
          <p className="footer-column-title">Licence to operate</p>
          <p className="footer-text">Lic No: xxx-3232-xxx-3233</p>
        </div>
        <div className="contact-info">
          <p className="footer-column-title">Contact Information</p>
          <ul class="footer-contact-list">
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
  padding: 0.2rem 0;

  .footer-info-container {
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    padding: 3rem 0 0;

    .contact-info {
    }

    .footer-column-title {
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    .footer-text {
      font-size: 1.6rem;
      font-weight: 300;
      opacity: 0.5;
      line-height: 2.2rem;
    }

    .footer-contact-list {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
  }
  .copyright-info {
    text-align: center;
    font-size: 1.2rem;
    opacity: 0.5;
  }
`;

export default Footer;
