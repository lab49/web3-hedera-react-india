import React from "react";
const Sidebar = () => {
  return (
    <div>
      <div className="app-sidebar app-sidebar--light app-sidebar--shadow">
        <div className="app-sidebar--header">
          <div className="app-sidebar-logo">
            <a
              aria-current="page"
              className="app-sidebar-logo active"
              title=""
              href="#"
            >
              <div className="app-sidebar-logo--text">
                <span>Crypto</span>
                <b>LAB49</b>
              </div>
            </a>
          </div>
          <button
            className="btn btn-sm collapse-sidebar-btn"
            id="CollapseSidebarTooltip"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="dot-circle"
              className="svg-inline--fa fa-dot-circle fa-w-16 fa-lg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
              ></path>
            </svg>
          </button>
          <button className="navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <button
            className="expand-sidebar-btn btn btn-sm"
            id="ExpandSidebarTooltip"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrows-alt-h"
              className="svg-inline--fa fa-arrows-alt-h fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="app-sidebar--content">
          <div className="scrollbar-container ps ps--active-y">
            <div className="sidebar-navigation">
              <div className="app-sidebar--widget">
                <div className="sidebar-header align-items-center font-weight-bold d-flex justify-content-between text-primary">
                  <span>Watch list</span>
                </div>
                <div className="app-sidebar-spacer">
                  <div className="d-flex justify-content-between mt-2 mb-1">
                    <div className="d-flex">
                      <div className="fontSize-lg text-danger">
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
                          <line x1="7" y1="7" x2="17" y2="17"></line>
                          <polyline points="17 7 17 17 7 17"></polyline>
                        </svg>
                      </div>
                      <div className="text-left ml-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="font-weight-bold">2.4895 BTC</div>
                          <span className="ml-2 text-danger badge badge-neutral-danger">
                            -8%
                          </span>
                        </div>
                        <div className="text-black opacity-4 fontSize-sm">
                          $16,497
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-3 justify-content-between">
                    {/* <button className="px-4 py-2 text-uppercase btn btn-outline-danger">
                      <small className="font-weight-bold px-1">Deposit</small>
                    </button> */}
                    <button className="px-4 py-2 text-uppercase btn btn-success">
                      <small className="font-weight-bold px-1">Connect</small>
                    </button>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    options="[object Object]"
                    series="[object Object]"
                    type="area"
                    height="80"
                    width="100%"
                    style={{ minHeight: "80px" }}
                  >
                    <div
                      id="apexcharts77a2zopu"
                      className="apexcharts-canvas apexcharts77a2zopu apexcharts-theme-light"
                      style={{ width: "320px", height: "80px" }}
                    >
                      <div className="apexcharts-legend"></div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text"></div>
                      </div>
                    </div>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: "321px", height: "81px" }}></div>
                    </div>
                    <div className="contract-trigger"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-sidebar--footer">
          <ul>
            <li>
              <a
                className="btn btn-sm btn-transition-none px-2 mx-2"
                id="OverviewDashboardTooltip123"
                href="/"
              >
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
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="app-sidebar-overlay"></div>
    </div>
  );
};

export default Sidebar;
