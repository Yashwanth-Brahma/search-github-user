import React from "react";
import { useGlobalContext } from "../context/context";
import { ImLink, ImLocation, ImOffice } from "react-icons/im";
import styled from "styled-components";

const UserCard = () => {
  const { gitUser } = useGlobalContext();
  const {
    login,
    company,
    blog,
    location,
    bio,
    html_url,
    avatar_url,
    twitter_username,
  } = gitUser;
  return (
    <div>
      <h4 className="user">User</h4>
      <Wrapper>
        <header>
          <img src={avatar_url} alt="profile_pic" />
          <h4>
            {login} <br />
            <span>@{twitter_username ? twitter_username : login}</span>
          </h4>
          <p>
            <a href={html_url} target="_blank" rel="noreferrer">
              Profile
            </a>
          </p>
        </header>
        <div>
          <h3>{bio ? bio : "dev"}</h3>
          <p>
            <ImOffice /> {company || "Company"}
          </p>
          <p>
            <ImLocation /> {location || "Earth"}
          </p>
          <a href={blog}>
            <span>
              <ImLink />{" "}
            </span>
            {blog || "Blog"}
          </a>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.article`
  background-color: #fff;
  border-radius: 4px;
  border-top-left-radius: 0px;
  padding: 2rem;
  position: relative;
  width: 37vw;
  margin-top: 0;
  @media (max-width: 840px) {
    width: 80vw;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
    h4 {
      font-weight: 600px;
      letter-spacing: 2px;
      span {
        color: gray;
        letter-spacing: 0;
        margin-top: 3px;
      }
    }
    p {
      a {
        border: 1px solid #219ebc;
        color: #219ebc;
        text-decoration: none;
        padding: 1rem;
        letter-spacing: 3px;
        border-radius: 10px;
      }
      @media (max-width: 950px) {
        a {
          padding: 0.5rem;
          letter-spacing: 0;
        }
      }
    }
  }
  div {
    a {
      text-decoration: none;
      color: #219ebc;
      span {
        color: #000;
      }
    }
  }
`;

export default UserCard;
