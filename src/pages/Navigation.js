import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  TbGridDots,
  TbArrowsHorizontal,
  TbLayoutSidebarLeftExpand,
} from "../utils";
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
          <NavLink to="/" className="logo">
            Veloudios
          </NavLink>
        </div>
        <div className="menu-item-container">
          <ul
            className={
              menuOpen
                ? "menu-item-list mobile-menu-open"
                : "menu-item-list mobile-menu-closed"
            }
          >
            <li className="menu-item">
              <NavLink className="menu-link" to="/">
                {language ? "Main" : "Αρχική"}
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/about">
                {language ? "About" : "Σχετικά"}
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/services">
                {language ? "Services" : "Υπηρεσίες"}
              </NavLink>
            </li>
            <div className="open-mobile-menu-controll-container">
              <div
                className="language-selector-container"
                onClick={() => handleSelection()}
              >
                <p>{language ? "EN" : "GR"}</p>
                <TbArrowsHorizontal className="lang-toggle" />
              </div>
              <div
                className="close-menu-button"
                onClick={() => {
                  handleToggle();
                }}
              >
                <TbLayoutSidebarLeftExpand className="close-menu-button-icon" />
              </div>
            </div>
          </ul>
          <div className="ctc-container">
            <a href="tel:30 6936750639" className=" menu-link ctc">
              <p>{language ? "Call us" : "Κάλεσε"}</p>
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

  .logo {
    font-size: 3rem;
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
    position: relative;
  }
  .logo::after {
    color: #259cd3;
    content: "filters";
    font-size: 1.6rem;
    position: absolute;
    text-transform: none;
    transform: translateX(20%);
  }

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

  .open-mobile-menu-controll-container {
    display: none;
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
    .logo {
      font-size: 2.6rem;
    }
    .logo::after {
      font-size: 1.2rem;
    }
    .navigation-container {
      max-width: 400px;
    }

    .mobile-menu-icon-container {
      display: flex;
      align-items: center;
      font-size: 4rem;
      cursor: pointer;
    }

    //Mobile menu

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

    .open-mobile-menu-controll-container {
      display: flex;
      gap: 2rem;

      .language-selector-container {
        align-self: center;
        font-size: 2rem;
      }

      .close-menu-button {
        align-self: center;
        cursor: pointer;
      }
      .close-menu-button-icon {
        padding-top: 2px;
        color: #fff;
        align-self: center;
        font-size: 3rem;
      }
    }
  }
`;

export default Navigation;
