import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import loginImage from "../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container1">
        <img src={loginImage} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Log In /Sign up
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container1 {
    width: 90vw;
    max-width: 600px;
    text-align: center;
    img {
      margin-bottom: 2rem;
      width: 400px;
    }
    h1 {
      margin-bottom: 1.5rem;
      color: #00b4d8;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .btn {
      color: #fff;
      font-weight: bolder;
      font-size: 20px;
      border: 1px solid #00b4d8;
      border-radius: 4px;
      outline: none;
      background-color: #00b4d8;
      padding: 0.5rem 1rem;
    }
  }
`;
export default Login;
