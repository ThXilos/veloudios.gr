import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TbGridDots, TbArrowsHorizontal } from "react-icons/tb";
const Navigation = ({ language, handleSelection }) => {
  return (
    <Wrapper>
      <nav className="navigation-container">
        <div className="logo-container">
          <p className="logo">logo</p>
        </div>
        <div className="menu-item-container">
          <ul className="menu-item-list">
            <li className="menu-item hide">
              <NavLink className="menu-link" to="/">
                Main
              </NavLink>
            </li>
            <li className="menu-item hide">
              <NavLink className="menu-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="menu-item hide">
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
          <div>
            <TbGridDots className="menu-icon" />
          </div>
          <div className="language-selector" onClick={() => handleSelection()}>
            <p>{language ? "EN" : "GR"}</p>
            <TbArrowsHorizontal className="lang-toggle" />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #1c1e6c;
  color: #fff;
  text-transform: capitalize;

  .menu-icon {
    display: none;
  }

  .navigation-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .logo-container {
    font-size: 3.6rem;
  }

  .logo:hover {
    cursor: pointer;
  }

  .menu-item-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    position: relative;
  }

  .menu-item-list {
    list-style: none;
    display: flex;
    gap: 5rem;
    font-size: 2.2rem;
    align-items: center;
  }

  .language-selector {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    position: absolute;
    top: -15px;
    right: -35px;
  }
  .language-selector:hover {
    cursor: pointer;
  }

  .lang-toggle {
    color: #fff;
  }

  .menu-link {
    color: #fff;
    text-decoration: none;
    opacity: 0.8;
    display: block;

    transition: all 0.3s;
  }
  .ctc {
    font-size: 2rem;
    background-color: #21ceb9;
    padding: 1rem 4rem;
    border-radius: 9px;
  }

  .menu-link:hover {
    opacity: 1;
  }

  .menu-link.active {
    opacity: 1;
  }

  @media (max-width: 1300px) {
    .navigation-container {
      max-width: 900px;
    }
  }

  @media (max-width: 1000px) {
    .navigation-container {
      max-width: 700px;
    }
  }

  @media (max-width: 835px) {
    .navigation-container {
      justify-content: space-around;
    }

    .navigation-container .menu-item-list {
      gap: 2rem;
    }

    .navigation-container .menu-item-list .ctc {
      padding: 1rem 2rem;
    }

    .navigation-container .menu-item-list .language-selector {
      right: -35px;
    }
  }
  @media (max-width: 600px) {
    .hide {
      display: none;
    }

    .menu-item-container {
      padding-right: 2rem;
    }

    .menu-icon {
      display: block;
      font-size: 4rem;
    }

    .language-selector {
      top: -4rem;
      right: -1rem;
    }

    .ctc {
      padding: 1rem 2rem;
    }

    .mobile-menu {
    }
  }

  @media (max-width: 375px) {
    .menu-item-container {
      gap: 1rem;
    }
    .language-selector {
      top: -4rem;
      right: -1rem;
    }

    .ctc {
      font-size: 2rem;

      padding: 1rem 2rem;
    }
  }
`;

export default Navigation;
