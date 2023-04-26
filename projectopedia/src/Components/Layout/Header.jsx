import React from "react";
import logo from "../../images/react.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            style={{ verticalAlign: "top", height: "35px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Project List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/topiccovered">
                  Topics Covered
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
