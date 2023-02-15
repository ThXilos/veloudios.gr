import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TbGridDots, TbArrowsHorizontal } from "react-icons/tb";
const Navigation = ({ language, handleSelection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  if (menuOpen) {
    document.body.classList.add("no-scroll");
  }
  if (!menuOpen) {
    document.body.classList.remove("no-scroll");
  }

  return (
    <Wrapper>
      <nav className="navigation-container">
        <div className="logo-container">
          <p className="logo">logo</p>
        </div>
        <div className="menu-item-container">
          <ul
            className={
              menuOpen
                ? "menu-item-list mobile-menu-open"
                : "menu-item-list mobile-menu-closed"
            }
          >
            <li
              className="menu-item hide"
              onClick={() => {
                handleToggle();
              }}
            >
              <button className="close-menu-button">x</button>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/">
                Main
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/services">
                Services
              </NavLink>
            </li>
          </ul>
          <div className="ctc-container">
            <a href="tel:30 6937696704" className=" menu-link ctc">
              Call us
            </a>
          </div>
          <div
            className="mobile-menu-icon-container"
            onClick={() => {
              handleToggle();
            }}
          >
            <TbGridDots className="menu-icon" />
          </div>
          <div
            className="language-selector-container"
            onClick={() => handleSelection()}
          >
            <p>{language ? "EN" : "GR"}</p>
            <TbArrowsHorizontal className="lang-toggle" />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  .hide {
    display: none;
  }

  background-color: #1c1e6c;
  color: #fff;
  font-size: 2rem;
  position: relative;

  .navigation-container {
    padding: 2rem 2rem;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .menu-item-list {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  .menu-link {
    text-decoration: none;
    color: #fff;
    opacity: 0.8;
  }

  .menu-link:hover {
    transition: all 0.3s;
    opacity: 1;
  }

  .ctc-container {
    background-color: red;
    padding: 1rem 1.6rem;
    border-radius: 9px;
  }

  .active {
    opacity: 1;
  }

  .mobile-menu-icon-container {
    display: none;
  }

  .language-selector-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    align-self: flex-start;
  }

  .language-selector-container:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .navigation-container {
      max-width: 400px;
    }

    .menu-item-container {
    }

    .mobile-menu-icon-container {
      display: flex;
      align-items: center;
      font-size: 4rem;
      cursor: pointer;
    }

    //Mobile menu

    .close-menu-button {
      font-size: 4rem;
      padding: 1rem;
      background: none;
      border: none;
      color: #fff;
    }

    .hide {
      display: block;
    }

    .mobile-menu-open {
      right: 0;
      transition: all 500ms;
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .mobile-menu-closed {
      right: 0;
      transform: translateX(100%);
      transition: all 500ms;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }

    .menu-item-list {
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 60%;
      height: 100vh;
      top: 0;
      align-items: center;
      background: #1c1e6c;
      z-index: 1;
    }

    li .menu-link {
      text-transform: uppercase;
      font-size: 4rem;
      color: #fff;
    }
  }
`;

export default Navigation;
