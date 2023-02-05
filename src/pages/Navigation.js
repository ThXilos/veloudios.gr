import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <Wrapper>
      <nav className="navigation-container">
        <div className="logo-container">
          <p className="logo">logo</p>
        </div>
        <div className="menu-item-container">
          <ul className="menu-item-list">
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
            <li className="menu-item">
              <a href="tel:30 6937696704" className="menu-link ctc">
                Call us
              </a>
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

    .menu-item-list {
      list-style: none;
      display: flex;
      gap: 5rem;
      font-size: 2.2rem;
      align-items: center;

      // .menu-link:link,
      // .menu-link:visited {
      //   color: #fff;
      //   text-decoration: none;
      //   opacity: 0.8;
      //   transition: opacity 0.3s;
      //   display: block;
      // }

      // .menu-link:hover,
      // .menu-link:active {
      //   opacity: 1;
      // }

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
`;

export default Navigation;
