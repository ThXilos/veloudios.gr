import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";
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
            <li className="menu-item">
              <a href="tel:30 6937696704" className="menu-link ctc">
                Call us
              </a>
            </li>
            <li>
              <TbGridDots className="menu-icon" />
            </li>
            <li className="language-selector">
              <p onClick={() => handleSelection()}>{language ? "EN" : "GR"}</p>
            </li>
          </ul>
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

    .logo-container {
      font-size: 3.6rem;
    }

    .logo:hover {
      cursor: pointer;
    }

    .menu-item-container {
      position: relative;
    }

    .menu-item-list {
      list-style: none;
      display: flex;
      gap: 5rem;
      font-size: 2.2rem;
      align-items: center;

      .language-selector {
        font-size: 1.6rem;
        position: absolute;
        top: -15px;
        right: -60px;
      }
      .language-selector:hover {
        cursor: pointer;
      }

      .menu-link {
        color: #fff;
        text-decoration: none;
        opacity: 0.8;
        display: block;

        transition: all 0.3s;
      }

      .menu-link:hover {
        opacity: 1;
      }

      .menu-link.active {
        opacity: 1;
      }

      .ctc {
        background-color: #21ceb9;
        padding: 1rem 4rem;
        border-radius: 9px;
      }
    }
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

    @media (max-width: 600px) {
      .menu-icon {
        display: block;
      }
      .hide {
        display: none;
      }
    }

    @media (max-width: 413px) {
      .navigation-container .menu-item-list .language-selector {
        right: -2.5rem;
      }
    }
  }
`;

export default Navigation;
