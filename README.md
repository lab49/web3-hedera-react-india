This project is to showcase hedera dApp in React India Conference 2022.

Scope:
Create new token
Create Smart contract
Connect UI to Hashpack wallet
Get contract data 
Update contract data
Get user's balance
 
how to run server:

1- create testnet account from hedera and get account id and pvt key

2- Install packages using npm i

3- Update .env file with your account id and private key

4- To compile solidity smart contract-
    cd src/contract
    solcjs --bin TokenContract.sol

4- Run command "node index" will create new token and deploy smart contract on hedera test network