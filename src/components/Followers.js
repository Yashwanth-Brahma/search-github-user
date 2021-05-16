import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const Followers = () => {
  const { followers } = useGlobalContext();

  return (
    <div>
      <h4 className="user">Followers</h4>
      <Wrapper>
        <ul>
          {followers.map((item) => {
            const { login, id, html_url, avatar_url } = item;
            return (
              <li key={id}>
                <img src={avatar_url} alt="profile_pic" />
                <p>
                  {login} <br />
                  <a href={html_url}>{html_url}</a>
                </p>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.article`
  width: 39vw;
  height: 265px;
  overflow: scroll;
  background-color: #fff;
  border-radius: 4px;
  border-top-left-radius: 0px;
  padding: 2rem;
  padding-bottom: 0;
  position: relative;
  margin: 0;
  @media (max-width: 840px) {
    width: 80vw;
  }
  ul {
    padding: 1rem;
  }
  ul li {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    margin-bottom: 1rem;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    p {
      padding: 0;
      margin-top: 5px;
      letter-spacing: 1px;
      a {
        text-decoration: none;
        color: gray;
      }
    }
  }
`;

export default Followers;
