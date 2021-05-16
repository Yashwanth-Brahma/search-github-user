import React, { useState } from "react";
import styled from "styled-components";
import { GrSearch } from "react-icons/gr";
import { useGlobalContext } from "../context/context";
const SearchUser = () => {
  const { setSearchValue, isError, setIsError, request1 } = useGlobalContext();

  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "") {
      setIsError("no_value");
    } else {
      setSearchValue(user);
    }
  };

  return (
    <>
      <ErrorWrapper className="section-center">
        {isError === "no_data" ? (
          <p>No User Exist</p>
        ) : isError === "no_value" ? (
          <p>Enter the user name</p>
        ) : isError === "limit_exceed" ? (
          <p>You have exceeded the search limit</p>
        ) : null}
      </ErrorWrapper>

      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <GrSearch />
          <input
            type="search"
            name="search"
            id="search"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <h3>Requests:{request1}/60</h3>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  h3 {
    color: gray;
    font-size: 25px;
    margin-top: 0;
  }

  form {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: #fff;
    margin-bottom: 2rem;
    input {
      outline-color: gray;
      border-color: transparent;
      padding: 0.4rem;
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
  }
`;

const ErrorWrapper = styled.div``;

export default SearchUser;
