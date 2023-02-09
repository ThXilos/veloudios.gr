// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import styled from "styled-components";
import { TbCheck } from "react-icons/tb";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = ({ lang }) => {
  const [state, handleSubmit] = useForm("mjvdywer");
  if (state.succeeded) {
    return (
      <SuccesMessageWrapper>
        <div className="success-message">
          <TbCheck className="success-message-icon" />
          <p className="sent-text">
            {lang
              ? "Thank you, your message has been sent."
              : "Πήραμε το μήνυμα σου και θα σου απαντήσουμε σύντομα."}
          </p>
        </div>
      </SuccesMessageWrapper>
    );
  }
  return (
    <Wrapper>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={lang ? "Please enter your email" : "Εδώ το email σου."}
          className="email-area"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder={
            lang ? "Your message goes here.." : "Γραψτε το μήνυμα σου.."
          }
          className="text-area"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          {lang ? "Send" : "Στείλτο"}
        </button>
      </form>
    </Wrapper>
  );
};

const SuccesMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .success-message-icon {
    font-size: 5rem;
    color: #21ceb9;
  }
  .sent-text {
    font-size: 2rem;
    color: #555;
  }
`;

const Wrapper = styled.section`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #1c1e6c;
    padding: 1rem;
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
    border-radius: 9px;
    width: 60rem;
  }

  .text-area,
  .email-area {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    border: none;
    border-radius: 9px;
    padding: 1rem;
    outline: none;
  }

  .text-area:focus,
  .email-area:focus {
    box-shadow: inset 0 0 0 3px #4dd8c7;
  }

  .email-area {
    height: 2rem;
  }

  .text-area {
    height: 10rem;
  }
  .btn {
    font-family: "Roboto", sans-serif;
    color: #fff;
    background-color: #21ceb9;
    border-radius: 9px;
    font-size: 2rem;
    transition: all 0.3s;
    align-self: flex-end;
    border-style: none;
    padding: 1rem 2rem;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #4dd8c7;
  }

  @media (max-width: 600px) {
    .form-container {
      width: auto;
    }
  }
`;
export default ContactForm;
