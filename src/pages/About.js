import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Giannis Veloudios"
            className="about-image"
          />
        </div>
        <div className="text-container">
          <h1 className="primary-text">Meet your plummer</h1>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium beatae ullam facilis cum voluptatibus error recusandae
            laborum in ab repellat! Aperiam explicabo libero odit magni itaque
            possimus necessitatibus! Mollitia doloribus corrupti dicta
            temporibus veniam soluta illo provident incidunt vitae delectus.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 14rem 0 0;
    align-items: center;
  }

  .about-image {
    width: 35%;
    border-radius: 9px;
  }

  .primary-text {
    font-size: 4.5rem;
    color: #444;
  }

  .about-text {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: 1.2px;
    color: #555;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  .image-container::before,
  .image-container::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
  }

  .image-container::before {
    background-color: #21ceb9;
    z-index: -1;
    width: 53%;
    padding-bottom: 53%;
  }

  .image-container::after {
    background-color: #90e7dc;
    z-index: -2;
    width: 60%;
    padding-bottom: 60%;
  }
`;

export default About;
