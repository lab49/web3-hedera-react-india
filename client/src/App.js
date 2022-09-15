import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Spinner from "./components/Spinner";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import WalletNotFound from "./components/WalletNotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isWalletFound, setIsWalletFound] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(null);
  const [balance, setBalance] = useState();

  return (
    <div className="app-wrapper app-sidebar-fixed">
      <Sidebar isWalletConnected={isWalletConnected} balance={balance} setIsWalletConnected={setIsWalletConnected} />
      <div className="app-main">
        <div className="app-content">
          <div className="app-content--inner align-items-center">
            <div className="app-content--inner__wrapper">
              {isWalletFound ? (
                <Home isWalletConnected={isWalletConnected} setIsWalletConnected={setIsWalletConnected} balance={balance} setBalance={setBalance} />
              ) : (
                <WalletNotFound setIsWalletFound={setIsWalletFound} />
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