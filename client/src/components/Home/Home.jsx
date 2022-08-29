import { HashConnect } from "hashconnect";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [hashconnect] = useState(new HashConnect());
  let appMetadata = {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: "",
  };
  const [pairingData, setPairingData] = useState(null);
  const [walletFound, setwalletFound] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      hashconnect.foundExtensionEvent.once((walletMetadata) => {
        if (walletMetadata) {
          setwalletFound(true);
        } else {
          setwalletFound(false);
        }
      });

      hashconnect.pairingEvent.once((data) => {
        setPairingData(data.pairingData);
      });

      hashconnect.findLocalWallets();
    })();
  }, []);

  useEffect(() => {
    if (walletFound) {
      (async () => {
        let initData = await hashconnect.init(appMetadata, "testnet", false);
        if (initData.savedPairings.length === 0) {
          setPairingData(false);
        } else {
          setPairingData(initData.savedPairings[0]);
        }
      })();
    }
  }, [walletFound]);

  useEffect(() => {
    if (pairingData) {
      (async () => {
        await getbal();
      })();
    }
  }, [pairingData]);

  const connect = async () => {
    hashconnect.connectToLocalWallet();
  };

  const getbal = async () => {
    const provider = hashconnect.getProvider(
      "testnet",
      pairingData.topic,
      pairingData.accountIds[0]
    );
    let balance = await provider.getAccountBalance(pairingData.accountIds[0]);
    let tokenBal = balance
      .toJSON()
      .tokens.find((x) => x.tokenId == "0.0.47901145");
    setBalance(tokenBal.balance);
  };

  const disconnect = async () => {
    hashconnect.disconnect(pairingData.topic);
    setPairingData(false);
  };

  return (
    <div style={{ opacity: "1" }}>
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
      <div className="mb-5 card">
        <div class="d-flex align-items-center justify-content-between card-header-alt p-4 card-header">
          <div>
            <h6 class="font-weight-bold font-size-lg mb-1">Account</h6>
            <p class="text-danger opacity-6 mb-0">
              Your account is not associated with Token.
            </p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="divider"></div>
        <div className="p-2">
          <div class="d-flex align-items-center justify-content-center container">
            <div class="py-4">
              <button class="font-weight-bold btn btn-primary btn-lg">
                Associate Token
              </button>
            </div>
          </div>
          <div class="container">
            <div class="py-4">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="" class="font-weight-bold">
                      Receiver
                    </label>
                    <input
                      name=""
                      id=""
                      placeholder="First name..."
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="" class="font-weight-bold">
                      Amount
                    </label>
                    <input
                      name=""
                      id=""
                      placeholder="Last name ..."
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-end container">
            <div class="py-4">
              <button class="font-weight-bold btn btn-success btn-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
