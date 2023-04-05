import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import { NavLink } from "react-router-dom";
const Filter = () => {
  const { filterId } = useParams();
  const product = products[filterId];
  return (
    <Wrapper>
      <div>
        <p>{product.name}</p>
        <NavLink to="/">back to products</NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Filter;
