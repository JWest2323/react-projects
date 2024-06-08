import { useEffect, useState } from "react";
import "./GithubProfileFinder.css";
import UserCard from "./UserCard";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("JWest2323");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData(); 
    setUserName('');
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (data) {
      setUserData(data);
    }

    setLoading(false);

    console.log(data);
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div>Loading Data... Please wait.</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          placeholder="Search Github Username..."
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserCard user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
