import React from "react";
import { connectToWallet, associateUser } from "../../utils/hashconnect";
import TransferToken from "../TransferToken";

const Home = ({ isWalletConnected, balance, setBalance }) => {
  const getHeading = () => {
    if (isWalletConnected && balance) {
      return "Transfer Token";
    } else if (isWalletConnected) {
      return "Associate Token";
    } else {
      return "Connect Wallet";
    }
  };

  return (
    <div style={{ opacity: "1" }}>
      <div className="mb-5 card">
        <div className="d-flex align-items-center justify-content-between card-header-alt p-4 card-header">
          <div>
            <div className="font-weight-bold fs-2">{getHeading()}</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="p-2">
          <div className="d-flex align-items-center justify-content-center container">
            {isWalletConnected ? (
              !balance && (
                <div className="py-4">
                  <div className="text-danger opacity-8 mb-4">
                    Your account is not associated with Token.
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="font-weight-bold btn btn-primary btn-lg"
                      onClick={associateUser}
                    >
                      Associate Token
                    </button>
                  </div>
                </div>
              )
            ) : (
              <div className="py-4">
                <div className="opacity-8 mb-4">
                  Your account is not connected with Hashpack. Kindly connect.
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="font-weight-bold btn btn-success btn-lg"
                    onClick={connectToWallet}
                  >
                    Connect
                  </button>
                </div>
              </div>
            )}
          </div>
          {isWalletConnected && balance && (
            <TransferToken setBalance={setBalance} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
