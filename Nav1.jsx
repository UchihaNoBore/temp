import React, { useContext } from "react";
import "../Style/styles.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../User";

function Nav1() {
  const {user} = useContext(UserContext);
  return (
    <div className="nav1">
      <ul className="top-nav">
        <img alt="Logo" src="/images/logo.png" className="logo"></img>
        <li className="li1"><a href="/">Home</a></li>
        <li className="li1"><a href="/">About Us</a></li>
        <li className="li1"><Link to={'/contact'} target = "_blank">Contact Us</Link></li>
        <li className="li1"><Link to={'/login'} target="_blank">Login {!!user && (<div>{user.name}</div>)}</Link></li>
      </ul>
    </div>
  );
}

export default Nav1;
