import React from "react";
const Header = () => {
  return (
    <div className="app-header app-header--shadow app-header--opacity-bg">
      <div className="app-header--pane">
        <button className="navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="lab49-coin ml-4">LAB49</div>
        <h2 className="app-header-title m-0 pl-3">Innovation on demand</h2>
      </div>
    </div>
  );
};

export default Header;
