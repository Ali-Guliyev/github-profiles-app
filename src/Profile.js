import React, { useState } from "react";
import "./Profile.css";

function Profile({ data }) {
  const profile = data.name ? (
    <>
      <div className="profile__avatarWrapper">
        <img
          className="profile__avatar"
          src={data.avatar_url}
        />
      </div>
      <div className="profile__about">
        <h2 className="profile__name">{data.name}</h2>
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
          <p>Repo1</p>
          <p>Repo2</p>
          <p>Repo3</p>
          <p>Repo4</p>
          <p>Repo5</p>
          <p>Repo6</p>
          <p>Repo7</p>
          <p>Repo8</p>
          <p>Repo9</p>
          <p>Repo10</p>
          <p>Repo11</p>
          <p>Repo12</p>
          <p>Repo13</p>
        </div>
      </div>
    </>
  ) : (
    <h1>The user is not found</h1>
  );

  return <div className="profile">{profile}</div>;
}

export default Profile;
