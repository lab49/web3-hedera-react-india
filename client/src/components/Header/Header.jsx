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
        <div className="header-search-wrapper">
          <div className="search-wrapper">
            <label className="icon-wrapper text-black">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="svg-inline--fa fa-search fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </label>
            <input
              className="form-control"
              id="header-search-input"
              name="header-search-input"
              placeholder="Search terms..."
              type="search"
            />
          </div>
        </div>
        <div className="app-header-widget pb-1">
          <div className="no-gutters row">
            <div className="col-6">
              <div className="d-flex align-items-center pr-4">
                <div className="font-size-lg text-danger mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                    <polyline points="17 18 23 18 23 12"></polyline>
                  </svg>
                </div>
                <div className="px-2">
                  <span className="opacity-6 text-uppercase font-size-sm">
                    <small>Current losses</small>
                  </span>
                  <div className="d-flex align-items-center justify-content-center pt-1">
                    <span className="font-weight-bold font-size-lg line-height-1">
                      <small className="opacity-6 pr-1">$</small>46,362
                    </span>
                    <span className="ml-2 text-danger badge badge-neutral-danger">
                      -8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <div className="font-size-lg text-success mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="px-2">
                  <span className="opacity-6 text-uppercase font-size-sm">
                    <small>Lifetime profits</small>
                  </span>
                  <div className="d-flex align-items-center justify-content-center pt-1">
                    <span className="font-weight-bold font-size-lg line-height-1">
                      <small className="opacity-6 pr-1">$</small>34,546
                    </span>
                    <span className="text-success ml-2 badge badge-neutral-success">
                      +13%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-header--pane">
        <div className="user-box position-relative mr-2 dropdown">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="p-0 text-left d-flex align-items-center btn btn-link"
          >
            <div className="d-block p-0 avatar-icon-wrapper">
              <span className="badge-circle p-top-a badge badge-warning">
                Idle
              </span>
              <div className="avatar-icon rounded">
                <img src="/" alt="..." />
              </div>
            </div>
            <div className="d-none d-xl-block pl-2">
              <span className="text-success">
                <small>Account verified</small>
              </span>
              <div className="font-weight-bold">Satoshi Nakamoto</div>
            </div>
            <span className="pl-1 pl-xl-3">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                className="svg-inline--fa fa-angle-down fa-w-10 opacity-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                ></path>
              </svg>
            </span>
          </button>
          <div
            tabIndex="-1"
            role="menu"
            aria-hidden="true"
            className="dropdown-menu-lg overflow-hidden p-0 dropdown-menu dropdown-menu-right"
          >
            <div className="d-flex p-4">
              <div className="avatar-icon rounded mr-3">
                <img src="/" alt="..." />
              </div>
              <div>
                <h6 className="font-weight-bold mb-1 text-black">
                  Satoshi Nakamoto
                </h6>
                <p className="text-black-50 mb-0">
                  satoshi.nakamoto@example.com
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="bg-secondary d-flex align-items-center flex-column py-4">
              <div className="display-3 mb-0 text-center font-weight-bold">
                <small className="opacity-6">$</small>
                <span className="pl-1">
                  <span>458,695</span>
                  <small>
                    <sup>.65</sup>
                  </small>
                </span>
              </div>
              <small className="text-center font-weight-bold opacity-6 text-uppercase">
                Total balance
              </small>
            </div>
            <div className="divider"></div>
            <ul className="nav-neutral-first nav-pills-rounded flex-column p-3 nav">
              <li className="nav-item">
                <a href="#/" className="nav-link">
                  <div className="nav-link-icon mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <span className="font-size-md">Settings</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#/" className="nav-link">
                  <div className="nav-link-icon mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                  </div>
                  <span className="font-size-md">Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#/" className="nav-link">
                  <div className="nav-link-icon mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <span className="font-size-md">Wallets</span>
                </a>
              </li>
            </ul>
            <div className="divider"></div>
            <ul className="nav-neutral-danger nav-pills-rounded flex-column p-3 nav">
              <li className="nav-item">
                <a href="#/" className="nav-link">
                  <div className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </div>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
