import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let url = "https://api.github.com/users/";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);

  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState("true");

  const [searchValue, setSearchValue] = useState("john-smilga");
  const [request1, setRequest1] = useState(0);
  const fetchSearch = async () => {
    const res = await axios(url + searchValue).catch((err) => console.log(err));
    if (res) {
      setGitUser(res.data);
    } else {
      setIsError("no_data");
    }
  };
  const fetchRepos = async () => {
    const res = await axios(url + searchValue + "/repos?per_page=100").catch(
      (err) => console.log(err)
    );
    if (res) {
      setRepos(res.data);
    } else {
      setIsError("no_data");
    }
  };
  const fetchFollowers = async () => {
    const res = await axios(
      url + searchValue + "/followers?per_page=100"
    ).catch((err) => console.log(err));
    if (res) {
      setFollowers(res.data);
    } else {
      setIsError("no_data");
    }
  };

  const checkReq = async () => {
    axios(`https://api.github.com/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequest1(remaining);
        if (remaining === 0) {
          setIsError("limit_exceed");
        }
        // console.log("request", remaining);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchSearch();
      fetchRepos();
      fetchFollowers();
      checkReq();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        gitUser,
        followers,
        isError,
        searchValue,
        isLoading,
        repos,
        setSearchValue,
        setIsError,
        request1,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
