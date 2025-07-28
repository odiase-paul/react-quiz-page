import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import creativeImage from "../img/creativity.png";
const Navbar = () => {
  return (
    <Fragment>
      <div className="landing-page-color">
        <div className="welcome-note">
          <Link to="/" className="logo-text">
            <h1>Quizakh</h1>
          </Link>
          <img className="creative-image" src={creativeImage} alt="" />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
