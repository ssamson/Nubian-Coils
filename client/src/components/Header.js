import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import userIcon from "../images/user-icon.png";

export default function Header({ user, setUser }) {
  const history = useHistory();
  const logout = () => {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
    setUser(null);
    history.push("/");
  };
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top">
      <Link to="/" className="navbar-brand display-1">
        NUBIAN COILS | Salon & Stylist Finder
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            {user ? (
              <div>
                <Link to={`/profile/${user._id}`}>
                  <img
                    src={userIcon}
                    alt="user"
                    width="50"
                    className="img-thumbnail"
                  />
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/sign-in-sign-up" className="nav-link">
                Sign in / Sign up
              </Link>
            )}
          </li>
          {/* <li className="navbar-item">
              <a href="#" className="nav-link">
                SIGN UP
              </a>
            </li> */}
        </ul>
      </div>
    </nav>
  );
}
