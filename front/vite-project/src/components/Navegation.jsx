// components/Navegation.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../components/Navegation.module.css" 

const Navegation = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    const logoutConfirmed = window.confirm("Are you sure you want to log out?");
    if (logoutConfirmed) {
      navigate("/");
    }
  };

  return (
    <>
      <div>
        {!user ? (
          <div className={styles.navigationList}>
            <Link to="#">Home</Link>
            <Link to="/">Login</Link>
            <Link to="/register">Create Account</Link>
          </div>
        ) : (
          <div className={styles.navigationList}>
            <Link to="/home">Home</Link>
            <Link to="/turns">Turns</Link>
            <Link to="/newturn">New Turn</Link>
            <button onClick={handleLogout}>LogOut</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navegation;
