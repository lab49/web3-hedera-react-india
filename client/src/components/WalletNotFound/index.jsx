import "./index.css";

const WalletNotFound = () => {
  return (
    <div style={{ opacity: "1" }}>
      <div className="mb-5 card">
        <div className="d-flex align-items-center justify-content-between card-header-alt p-4 card-header">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1">
              Hash Pack Wallet
            </h6>
          </div>
        </div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="p-2">
          <div className="d-flex align-items-center justify-content-center container lab49-card-body">
            <div className="py-4">
              <div className="text-danger opacity-6 mb-4">
                Wallet Not found, please install HaskPack wallet extension
              </div>
              <div className="d-flex justify-content-center">
                <a
                  href="https://chrome.google.com/webstore/detail/hashpack/gjagmgiddbbciopjhllkdnddhcglnemk"
                  target="_blank"
                  className="btn btn-success btn-lg mx-1"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletNotFound;
