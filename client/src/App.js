import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connectToWallet, getBalance, sendTransaction, associateUser, initializeWallet, dissconnectWallet } from './utils/hashconnect';

function App() {
  const [isWalletFound, setIsWalletFound] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(null);
  const [balance, setBalance] = useState();
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    initializeWallet(updateWalletDetails)
  }, []);

  const updateWalletDetails = async (isWalletFound, WalletConnected) => {
    if (!isWalletFound) {
      setIsWalletFound(false);
    } else if (WalletConnected) {
      setIsWalletConnected(WalletConnected);
      setBalance(await getBalance())
    }
  }
  const updateReceiver = ({ target }) => {
    setReceiver(target.value)
  }
  const updateAmount = ({ target }) => {
    setAmount(target.value)
  }

  const send = () => {
    sendTransaction(receiver, Number(amount))
  }

  const dissconnect = () => {
    dissconnectWallet();
    setIsWalletConnected(false);
  }


  return (
    <div className="App">
      {
        isWalletFound ? (
          <>
            {
              isWalletConnected ? (
                <>
                  {
                    balance ? (
                      <>
                        <Alert variant='info'>
                          Balance : {balance}
                        </Alert>

                        <div className='d-flex justify-content-center'>

                          <Form className='w-50'>
                            <Form.Group className="mb-3">
                              <Form.Control type="text" placeholder='Receiver' value={receiver} onChange={updateReceiver} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Control type="number" placeholder='Amount' value={amount} onChange={updateAmount} />
                            </Form.Group>
                          </Form>
                        </div>
                        <Button onClick={send}>Send</Button>
                      </>
                    ) : (
                      <div>
                        <Alert variant='danger'>
                          Your account is not associated with Token
                        </Alert>
                        <Button onClick={associateUser}>Associate Token</Button>
                      </div>
                    )
                  }
                  <br />
                  <Button className='mt-4' onClick={dissconnect}>Dissconnect</Button>
                </>
              ) : (
                <Button onClick={connectToWallet}>Connect to Wallet</Button>
              )
            }
          </>
        ) : (
          <Alert variant='danger'>
            Wallet Not found, please install HaskPack wallet extension
          </Alert>
        )
      }
    </div >
  );
}

export default App;