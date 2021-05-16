import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt="profile_pic" />}
      {isUser && user.name && <h4>Welcome {user.name.toUpperCase()}</h4>}

      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}>
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin: 0;
  margin-bottom: 4rem;
  background: #fff;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h4 {
    font-weight: 400;
    text-align: center;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    color: #fff;
    background-color: #2ec4b6;
    padding: 0.6rem;
    border: none;
    border-radius: 4px;
    font-weight: bolder;
    letter-spacing: 2px;
  }
  button:hover {
    background-color: #cbf3f0;
    color: #2ec4b6;
    transition: all 300ms linear;
  }
`;
export default Navbar;
