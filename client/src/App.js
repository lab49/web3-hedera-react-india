import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getBalance, initializeWallet } from "./utils/hashconnect";
import Home from "./components/Home/Home";
import WalletNotFound from "./components/WalletNotFound";
import Spinner from "./components/Spinner";

const App = () => {
  const [isWalletFound, setIsWalletFound] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(null);
  const [balance, setBalance] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    initializeWallet(updateWalletDetails);
  }, []);

  const updateWalletDetails = async (isWalletFound, WalletConnected) => {
    if (!isWalletFound) {
      setIsWalletFound(false);
    } else if (WalletConnected) {
      setIsWalletConnected(WalletConnected);
      setBalance(await getBalance());
    }
    setShowSpinner(false);
  };


  return (
    <div className="app-wrapper app-sidebar-fixed">
      {showSpinner && <Spinner />}
      <Sidebar isWalletConnected={isWalletConnected} balance={balance} setIsWalletConnected={setIsWalletConnected} />
      <div className="app-main">
        <div className="app-content">
          <div className="app-content--inner">
            <div className="app-content--inner__wrapper">
              {isWalletFound ? (
                <Home isWalletConnected={isWalletConnected} balance={balance} setBalance={setBalance} />
              ) : (
                <WalletNotFound />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
