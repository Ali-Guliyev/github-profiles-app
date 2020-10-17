import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Profile from "./Profile";

function App() {
  const [state, setState] = useState({
    // name: "Ali Guliyev",
    // bio:
    //   "I am Ali Guliyev and I am a 13 years old programmer. I know html, css and js also i know python, c# and more.",
    // avatar_url: "",
    // followers: 1000,
    // following: 1000,
    // repos_amount: 30,
    // repos: {},
  });
  const [searchedUser, setSearchedUser] = useState("");

  const handleSearch = (e, userInp) => {
    e.preventDefault();
    setSearchedUser(userInp);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchedUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

  return (
    <div className="app">
      <Form handleSearch={handleSearch} />
      <Profile data={state} />
    </div>
  );
}

export default App;
