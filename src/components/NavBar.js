import React from "react";
import { NavLink } from "react-router-dom";

import "../style/navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact className="navbar-link" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-link" to="/state">
        State
      </NavLink>
      <NavLink className="navbar-link" to="/props">
        Props
      </NavLink>
      <NavLink className="navbar-link" to="/styling">
        Styling
      </NavLink>
    </div>
  );
}
