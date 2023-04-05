import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import { NavLink } from "react-router-dom";
const Filter = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { filterId } = useParams();
  const product = products[filterId];
  return (
    <Wrapper>
      <div className="container">
        <div className="image-container">
          <img src={product.img} alt={product.name} className="image" />
        </div>
        <div className="information-container">
          <p className="heading-secondary">{product.name}</p>
          <p className="subheading">{product.type}</p>
          {product.description.map((line, index) => {
            return (
              <p key={index} className="list-item">
                {line}
              </p>
            );
          })}
          <NavLink to="/" className="btn">
            {lang ? "back to products" : "επιστροφη"}
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  height: 60vh;

  .container {
    margin-top: 10rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  .image-container,
  .information-container {
    width: 50%;
  }

  .image {
    width: 30rem;
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
    text-transform: capitalize;
    letter-spacing: 0.75px;
  }

  .list-item {
    font-size: 1.4rem;
    line-height: 2;
  }

  .btn {
    text-decoration: none;
    color: #1c1e6c;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    height: auto;

    .container {
      padding: 0 0 2rem;
      flex-direction: column;
    }
    .image-container {
      width: auto;
    }

    .information-container {
      width: auto;
    }
  }
`;

export default Filter;
