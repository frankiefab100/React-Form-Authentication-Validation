import React from "react";
import { useNavigate } from "react-router";
import { AuthContextConsumer } from "../context/AuthContext";

const UserProfile = () => {
  const { user, signOut } = AuthContextConsumer;

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut();
      navigate("/");
      alert("You are logged out sucessfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="dashboard">
      <div className="image-section">
        <img src={user.img} alt="user profile pic" />
      </div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>{user.email} </p>

      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserProfile;
