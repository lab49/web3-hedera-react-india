import React from "react";
import { dissconnectWallet, getAccountId } from "../../utils/hashconnect";

const Sidebar = ({ isWalletConnected, balance, setIsWalletConnected }) => {
  const accountId = getAccountId();

  const dissconnect = () => {
    dissconnectWallet();
    setIsWalletConnected(false);
  };

  return (
    <div>
      <div className="app-sidebar app-sidebar--light app-sidebar--shadow">
        <div className="app-sidebar--header">
          <div className="app-sidebar-logo">
            <a
              aria-current="page"
              className="app-sidebar-logo active"
              title=""
              href="\"
            >
              <div className="app-sidebar-logo--text">
                <span>Crypto</span>
                <img
                  src="https://www.lab49.com/wp-content/uploads/2020/06/logo.svg"
                  height={20}
                  alt=""
                />
              </div>
            </a>
          </div>
          <i className="fa-regular fa-circle-dot"></i>
          <i className="bi bi-record-circle"></i>
          <button
            className={`btn btn-sm collapse-sidebar-btn ${
              isWalletConnected ? "text-success" : "text-danger"
            }`}
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
        </div>
        {isWalletConnected && (
          <>
            <div className="app-sidebar--content">
              <div className="scrollbar-container ps ps--active-y">
                <div className="sidebar-navigation">
                  <div className="app-sidebar--widget">
                    <div className="sidebar-header align-items-center font-weight-bold d-flex justify-content-between text-primary font-size-md">
                      <span>Account</span>
                    </div>
                    <div className="app-sidebar-spacer">
                      <div className="d-flex justify-content-between mt-2 mb-1">
                        <div className="d-flex">
                          <div className="text-left ml-2">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="font-weight-bold mx-3">{accountId}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {balance && (
                      <>
                        <div className="sidebar-header align-items-center font-weight-bold d-flex justify-content-between text-primary font-size-md">
                          <span>Balance</span>
                        </div>
                        <div className="app-sidebar-spacer">
                          <div className="d-flex justify-content-between mb-1">
                            <div className="text-left">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="font-weight-bold pl-4">
                                  {balance}{" "}
                                  <span style={{ color: "#9e2521" }}>L49</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="sidebar-header align-items-center font-weight-bold d-flex justify-content-between text-primary font-size-md">
                      <span>Transactions</span>
                    </div>
                    <div className="app-sidebar-spacer">
                      <div className="d-flex justify-content-between mt-2 mb-1">
                        <div className="d-flex">
                          <div className="text-left ml-2">
                            <div className="d-flex align-items-center justify-content-between">
                              <a
                                href={`https://hashscan.io/#/testnet/account/${accountId}`}
                                target="_blank"
                                className="nav-link text-primary"
                              >
                                View Transactions
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-sidebar--footer">
              <button
                className="btn btn-sm btn-light font-weight-bold btn-transition-none btn-block"
                onClick={dissconnect}
              >
                Disconnect
              </button>
            </div>
          </>
        )}
      </div>
      <div className="app-sidebar-overlay"></div>
    </div>
  );
};

export default Sidebar;
