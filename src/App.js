import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Profile from "./Profile";

function App() {
  const [state, setState] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [searchedUser, setSearchedUser] = useState(
    "Ali-Guliyev"
  );

  const handleSearch = (e, userInp) => {
    e.preventDefault();
    setSearchedUser(userInp);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchedUser}`)
      .then((res) => res.json())
      .then((data) => {
        setState({
          name: data.login,
          bio: data.bio,
          avatar_url: data.avatar_url,
          followers: data.followers,
          following: data.following,
          repos_amount: data.public_repos,
        });
      });
  }, [searchedUser]);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${searchedUser}/repos`
    )
      .then((res) => res.json())
      .then((data) => {
        var repos = [];
        data.map((repodata) => {
          repos.push(repodata.name);
        });
        repos = repos.slice(repos.length - 7);
        console.log(repos);
        console.log(repos);
        setUserRepos(repos);
      })
      .catch((err) => console.log(err));
  }, [searchedUser]);

  return (
    <div className="app">
      <Form handleSearch={handleSearch} />
      <Profile repos={userRepos} data={state} />
    </div>
  );
}

export default App;
