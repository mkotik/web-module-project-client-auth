import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div>
      <div className="nav navbar-dark bg-dark navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/private" className="navbar-brand m-0 ">
            Friends Central
          </Link>
          <div className="d-flex align-items-center justify-content-center">
            <ul className="nav-nav d-flex align-items-center m-0">
              {localStorage.getItem("token") && location !== "/private" && (
                <li className="nav-item">
                  <Link to="/private" className="nav-link text-light">
                    Friends
                  </Link>
                </li>
              )}
              {localStorage.getItem("token") && (
                <li className="nav-item">
                  <Link to="logout" className="nav-link text-light">
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
