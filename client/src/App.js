import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getBalance, initializeWallet } from "./utils/hashconnect";
import WalletNotFound from "./components/WalletNotFound";
import Spinner from "./components/Spinner";

const Home = React.lazy(() => import("./components/Home/Home"));
// const Trades = React.lazy(() => import("./components/Trades/Trades"));
// const AddTrade = React.lazy(() => import("./components/AddTrade/AddTrade"));

const App = () => {
  const [isWalletFound, setIsWalletFound] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(null);
  const [balance, setBalance] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const routes = (
    <Routes>
      {/* <Route path="/trade/add" render={() => <AddTrade />} />
      <Route
        path="/trades/:company"
        render={(props) => <Trades {...props} />}
      /> */}
      <Route path="/" element={<Home isWalletConnected={isWalletConnected} balance={balance} setBalance={setBalance} />} />
    </Routes>
  );

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
        {/* <Header /> */}
        <div className="app-content">
          <div className="app-content--inner">
            <div className="app-content--inner__wrapper">
              {isWalletFound ? (
                <Suspense fallback={<p></p>}>{routes}</Suspense>
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
