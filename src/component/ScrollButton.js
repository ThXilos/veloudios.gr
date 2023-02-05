import React, { useState } from "react";
import styled from "styled-components";
import { TbChevronUp } from "react-icons/tb";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button style={{ display: visible ? "block" : "none" }}>
      <TbChevronUp onClick={scrollToTop} />
    </Button>
  );
};

const Button = styled.button`
  height: 50px;
  background-color: transparent;
  border: none;
  position: fixed;
  right: 5%;
  bottom: 5%;

  font-size: 5rem;
  z-index: 1;
  cursor: pointer;
  color: #90e7dc;
`;

export default ScrollButton;
