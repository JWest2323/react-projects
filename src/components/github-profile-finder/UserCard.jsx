import React from "react";

const UserCard = ({ user }) => {
  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user-card-container">
      <div>
        <img src={avatar_url} className="user-avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={html_url} target="_blank">
          {name || login}
        </a>
        <p>{`User joined Github on ${createdDate.getDate()} ${createdDate.toLocaleString(
          "en-us",
          { month: "short" }
        )} ${createdDate.getFullYear()}`}</p>
      </div>

      <div className="user-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
