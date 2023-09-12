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
            <NavLink to="/" className={location.pathname === "/" ? "active" : ""}> Main</NavLink>
            <NavLink to="/menu" className={location.pathname === "/menu" ? "active" : ""}>Menu</NavLink>
            <NavLink to="/posters" className={location.pathname === "/posters" ? "active" : ""}>Posters</NavLink>
            <NavLink to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</NavLink>
            <NavLink to="/news" className={location.pathname === "/news" ? "active" : ""}>Why we</NavLink>
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
