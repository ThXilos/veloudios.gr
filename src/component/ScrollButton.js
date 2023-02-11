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
    <Wrapper>
      <button
        className="btn-toTop"
        style={{ opacity: visible ? "1" : "0" }}
        onClick={scrollToTop}
        aria-label="Navigate to top"
      >
        <TbChevronUp />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-toTop {
    display: flex;
    background-color: transparent;
    border: none;
    position: fixed;
    right: 5%;
    bottom: 5%;
    font-size: 5rem;
    z-index: 1;
    cursor: pointer;
    color: #90e7dc;
    height: 90px;
    align-items: center;
    border: 2px solid #90e7dc;
    border-radius: 100px;
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.08);

    transition: all 0.3s;
  }

  .btn-toTop:hover {
    transform: translateY(-1rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.1);
  }
`;

export default ScrollButton;
