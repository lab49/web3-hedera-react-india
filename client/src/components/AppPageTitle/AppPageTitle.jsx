import React from "react";
const AppPageTitle = () => {
  return (
    <div className="app-page-title">
      <div>
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
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
                className="display-2 text-primary"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Wallets</h1>
            <div className="app-page-title--description">
              This is your wallets overview last updated today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPageTitle;
