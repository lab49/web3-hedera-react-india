import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { connectToWallet, getBalance, sendTransaction, associateUser, initializeWallet, dissconnectWallet } from './utils/hashconnect';

function App() {
  const [isWalletFound, setIsWalletFound] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(null);
  const [balance, setBalance] = useState();

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
                        <div> Balance : {balance}</div>
                        <input type="text" placeholder='Receiver' />
                        <input type="number" placeholder='Amount' />
                        <Button onClick={sendTransaction}>Send</Button>
                      </>
                    ) : (
                      <div>
                        Your account is not associated with Token
                        <br />
                        <Button onClick={associateUser}>Associate Token</Button>
                      </div>
                    )
                  }
                  <br />
                  <Button onClick={dissconnect}>Dissconnect</Button>
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