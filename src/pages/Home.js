import React from "react";
import {
  Followers,
  Info,
  Navbar,
  SearchUser,
  UserCard,
  VisualCharts,
} from "../components";
import { useGlobalContext } from "../context/context";
import loadingGif from "../images/preloader.gif";

const Home = () => {
  const { isLoading } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <div className="container section-center">
        <SearchUser />
        {isLoading ? (
          <img src={loadingGif} alt="loading..." />
        ) : (
          <>
            <Info />
            <section className="userInfo">
              <UserCard />
              <Followers />
            </section>
            <VisualCharts />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
