import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { products } from "../utils/products";
const Filters = ({ lang }) => {
  return (
    <Wrapper>
      <div className="service-heading-container">
        <span className="subheading">{lang ? "Products" : "ΠΡΟΙΟΝΤΑ"}</span>
        <h2 className="heading-secondary">
          {lang
            ? "Our filters cover both business and household needs."
            : "Τα φίλτρα μας καλύπτουν οικιακές και επαγγελματικές ανάγκες."}
        </h2>
      </div>
      <div className="card-container">
        {products.map((filter, index) => {
          return (
            <NavLink to={`/filters/${index}`} key={index}>
              <div
                className="card"
                style={{ backgroundImage: `url(${filter.img})` }}
              >
                <div className="title-container">
                  <p className="product-name">{filter.name}</p>
                  <p className="product-description">{filter.type}</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  .service-heading-container {
    padding: 6rem 0 6rem;
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

  a {
    text-decoration: none;
  }

  .card-container {
    justify-content: center;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .card {
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    width: 250px;
    height: 200px;
    background-color: #259cd3;
  }

  .title-container {
    align-self: flex-end;
    width: 100%;
    background-color: rgba(37, 156, 211, 0.8);
    color: #fff;
    padding: 0 1rem;
  }

  .product-name {
    font-size: 1.6rem;
  }

  .product-description {
    font-size: 1.2rem;
  }
`;

export default Filters;
