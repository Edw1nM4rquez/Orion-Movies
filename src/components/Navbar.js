import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import "./Navbar.css";
import { isAuthenticated } from "../core/Authentication";
/**
 * Menu
 * @returns
 */
function Navbar() {
  const usenavigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /**
   * View mobile button
   */
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Orion Movies <i className=" fas fa-film" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            {isAuthenticated() === true && (
              <li className="nav-item">
                <Link
                  to="/admin"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Admin Movies
                </Link>
              </li>
            )}
            {isAuthenticated() !== true && (
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated() === true && (
              <li className="nav-item">
                <Link
                  className="nav-links-mobile"
                  onClick={(e) => {
                    sessionStorage.clear();
                    window.location.reload(false);
                    usenavigate("/");
                  }}
                >
                  Log out <i className="fas fa-right-from-bracket"></i>
                </Link>
              </li>
            )}
          </ul>
          {isAuthenticated() !== true && (
            <div className="buttons-interaction">
              {button && (
                <Button buttonStyle="btn--outline" urlNavigate={"/sign-up"}>
                  Sign Up
                </Button>
              )}
              {button && (
                <Button buttonStyle="btn--outline" urlNavigate={"/login"}>
                  Login
                </Button>
              )}
            </div>
          )}
          {isAuthenticated() === true && (
            <div className="buttons-interaction">
              {button && (
                <Button
                  buttonStyle="btn--outline"
                  onClick={(e) => {
                    sessionStorage.clear();
                    window.location.reload(false);
                    usenavigate("/");
                  }}
                >
                  Log out <i className="fas fa-right-from-bracket"></i>
                </Button>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
