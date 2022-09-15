import React from "react";

const WalletNotFound = ({ setIsWalletFound }) => {
  return (
    <div>
      <div className="card lab49-card-container">
        <div className="card-header">
          <div className="font-weight-bold fs-2">Hash Pack Wallet</div>
        </div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="card-body d-flex align-items-center justify-content-center container">
          <div className="py-4">
            <div className="text-danger opacity-6 mb-4 fs-5">
              Wallet Not found, please install HaskPack wallet extension
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg mx-1"
                onClick={() => setIsWalletFound(true)}
              >
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletNotFound;
