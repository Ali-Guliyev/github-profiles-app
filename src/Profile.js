import React, { useState } from "react";
import "./Profile.css";

function Profile({ repos, data }) {
  const enterAccount = () => {
    window.open(
      `https://github.com/${data.name}`,
      "_blank"
    );
  };

  const enterRepo = (repo) => {
    window.open(
      `https://github.com/${data.name}/${repo}`,
      "_blank"
    );
  };

  const profile = data.name ? (
    <>
      <div className="profile__avatarWrapper">
        <img
          onClick={enterAccount}
          className="profile__avatar"
          src={data.avatar_url}
        />
      </div>
      <div className="profile__about">
        <h2
          onClick={enterAccount}
          className="profile__name"
        >
          {data.name}
        </h2>
        <p className="profile__bio">{data.bio}</p>

        <div className="profile__amount">
          <p>
            {data.followers} <b>followers</b>
          </p>
          <p>
            {data.following} <b>following</b>
          </p>
          <p>
            {data.repos_amount} <b>repos</b>
          </p>
        </div>

        <p>
          <b>Repos:</b>
        </p>

        <div className="profile__repos">
          {repos.map((repo) => (
            <p
              onClick={() => enterRepo(repo)}
              key={Math.random()}
            >
              {repo}
            </p>
          ))}
        </div>
      </div>
    </>
  ) : (
    <h1>The user is not found</h1>
  );

  return <div className="profile">{profile}</div>;
}

export default Profile;
