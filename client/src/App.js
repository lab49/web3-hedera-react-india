import './App.css';
import { HashConnect } from 'hashconnect';
import { TransferTransaction, AccountId, TransactionReceipt } from "@hashgraph/sdk"
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Send from './send';
import { ContractSet } from './ContractSet';
import { ContractGet } from './ContractGet';


function App() {
  const [hashconnect] = useState(new HashConnect());
  let appMetadata = {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: ""
  }
  const [pairingData, setPairingData] = useState(null);
  const [walletFound, setwalletFound] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      hashconnect.foundExtensionEvent.once((walletMetadata) => {
        if (walletMetadata) {
          setwalletFound(true);
        }
        else {
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
        let initData = await hashconnect.init(appMetadata, "testnet", false)
        if (initData.savedPairings.length === 0) {
          setPairingData(false);
        }
        else {
          setPairingData(initData.savedPairings[0]);
        }
      })();
    }
  }, [walletFound])

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
    const provider = hashconnect.getProvider("testnet", pairingData.topic, pairingData.accountIds[0]);
    let balance = await provider.getAccountBalance(pairingData.accountIds[0]);
    let tokenBal = balance.toJSON().tokens.find(x => x.tokenId == '0.0.47901145');
    setBalance(tokenBal.balance);
  }

  const disconnect = async () => {
    hashconnect.disconnect(pairingData.topic);
    setPairingData(false);
  }

  return (
    <div className="App">
      {
        walletFound === null ?
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
            />
            Checking wallet status...
          </Button> :
          walletFound === false ?
            <Alert variant='danger'>
              Wallet Not found, please install HaskPack wallet extension
            </Alert>
            :
            pairingData ?
              <div>
                Balance : {balance} Coins
                <nav
                  style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                  }}
                >
                  <Link to="">Home</Link>|
                  <Link to="/Send">Send</Link> |
                  <Link to="/ContractGet">ContractGet</Link>|
                  <Link to="/ContractSet">ContractSet</Link>
                </nav>

                <Routes>
                  <Route path="Send" element={<Send hashconnect={hashconnect} pairingData={pairingData} updateBal={getbal} />} />
                  <Route path="ContractGet" element={<ContractGet hashconnect={hashconnect} pairingData={pairingData} />} />
                  <Route path="ContractSet" element={<ContractSet hashconnect={hashconnect} pairingData={pairingData} />} />
                  <Route
                    path="*"
                    element={
                      <main style={{ padding: "1rem" }}>
                        <p>Connected to Wallet</p>
                        <Button variant="primary" onClick={disconnect}>
                          Disconnect
                        </Button>
                      </main>
                    }
                  />
                </Routes>
              </div>
              :
              pairingData === null ?
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                  />
                  Connecting to wallet...
                </Button>
                :
                <Button variant="primary" size="lg" onClick={connect}>
                  Connect to Wallet
                </Button>
      }

    </div>
  );
}

export default App;
