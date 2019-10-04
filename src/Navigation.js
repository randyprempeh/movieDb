import React from "react";
import { NavLink } from "react-router-dom";
import LogSvg from "./LogoSvg";

class Navigation extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="image-cell">
          <img width="80" src="logo.svg" alt="movie icon" />
        </div>
        <nav>
          <NavLink to="/" exact activeStyle={{ color: "lightgreen" }}>
            Search
          </NavLink>
          <NavLink exact activeStyle={{ color: "lightgreen" }} to="/popular">
            Released
          </NavLink>
          <NavLink exact activeStyle={{ color: "lightgreen" }} to="/tvshows">
            Series
          </NavLink>
          <NavLink
            exact
            activeStyle={{ color: "lightgreen" }}
            to="/"
            className="sign-toggler"
          >
            <LogSvg />
            <div className="drpdwn-info">
              <ul>
                <li>Admin</li>
                <li>Create account</li>
              </ul>
            </div>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;
