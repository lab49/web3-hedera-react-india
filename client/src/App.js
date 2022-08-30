import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Home = React.lazy(() => import("./components/Home/Home"));
// const Trades = React.lazy(() => import("./components/Trades/Trades"));
// const AddTrade = React.lazy(() => import("./components/AddTrade/AddTrade"));

const App = () => {
  const routes = (
    <Routes>
      {/* <Route path="/trade/add" render={() => <AddTrade />} />
      <Route
        path="/trades/:company"
        render={(props) => <Trades {...props} />}
      /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );

  return (
    <div className="app-wrapper app-sidebar-fixed">
      <Sidebar />
      <div className="app-main">
        {/* <Header /> */}
        <div className="app-content">
          <div className="app-content--inner">
            <div className="app-content--inner__wrapper">
              <Suspense fallback={<p></p>}>{routes}</Suspense>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
