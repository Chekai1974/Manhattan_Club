import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../IMAGES/logo.png";
function Navigation() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          <img src={logo} alt="Logo" onClick={() => navigation("/")} />
          <div className="links">
            <NavLink
              to="/"
              activeClassName={location.pathname === "/" ? "active" : ""}
            >
              Main
            </NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/poster">Poster</NavLink>
            <NavLink to="gallery">Gallery</NavLink>
            <NavLink to="news">News</NavLink>
          </div>
          <button
            className="booking-button"
            onClick={() => navigation("/bookings")}
          >
            Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
