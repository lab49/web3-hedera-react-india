import React from "react";

const Footer = () => {
  return (
    <div className="app-footer text-black-50 app-footer--opacity-bg">
      <div className="app-footer--first">
        <ul className="nav">
          <li className="nav-item">
            <a className="rounded-sm nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="rounded-sm nav-link" href="/">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="rounded-sm nav-link" href="/">
              Wallets
            </a>
          </li>
        </ul>
      </div>
      <div className="app-footer--second">
        <span>Lab49 Crypto Application</span>© 2022 - crafted with{" "}
        <span className="text-danger px-1">❤</span> by
        <a href="/" target="_blank" rel="noopener noreferrer" title="LAB49">
          LAB49
        </a>
      </div>
    </div>
  );
};

export default Footer;
