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
      <div className="mb-5 card lab49-card-container">
        <div class="card-header">
          <div className="font-weight-bold fs-2">{getHeading()}</div>
        </div>
        <div className="divider"></div>
        <div className="divider"></div>
        {isWalletConnected && balance ? (
          <div className="card-body">
            <TransferToken setBalance={setBalance} />
          </div>
        ) : (
          <div className="card-body d-flex align-items-center justify-content-center">
            <div className="py-4">
              {isWalletConnected ? (
                <>
                  <div className="text-danger opacity-6 mb-4 fs-5">
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
                </>
              ) : (
                <>
                  <div className="opacity-6 mb-4 fs-5">
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
