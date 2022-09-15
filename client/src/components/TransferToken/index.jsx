import React, { useState } from "react";

const TransferToken = ({ setBalance }) => {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);

  const updateReceiver = ({ target }) => {
    setReceiver(target.value);
  };
  const updateAmount = ({ target }) => {
    setAmount(target.value ? Number(target.value) : "");
  };

  const send = async () => {
    setReceiver("");
    setAmount(0);
  };

  const isFormInvalid = !receiver || !amount;

  return (
    <>
      <div className="container">
        <div className="py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="receiver" className="font-weight-bold">
                  Receiver
                </label>
                <input
                  name="receiver"
                  id="receiver"
                  placeholder="Receiver Address..."
                  type="text"
                  className="form-control"
                  value={receiver}
                  onChange={updateReceiver}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="amount" className="font-weight-bold">
                  Amount
                </label>
                <input
                  name="amount"
                  id="amount"
                  placeholder="Amount ..."
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={updateAmount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end container">
        <div className="py-4">
          <button
            className="font-weight-bold btn btn-success btn-lg"
            onClick={send}
            disabled={isFormInvalid}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default TransferToken;
