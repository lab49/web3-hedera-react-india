# This project is to showcase hedera dApp in React India Conference 2022.

## Scope:
- Create new token
- Create Smart contract
- Connect UI with Hashpack wallet
- Execute smart contract
- Get user's balance
 
## How to run server:
1. create testnet account from hedera and get account id and pvt key
2. Install packages:
```
    cd server
    npm i
```
3. Update .env file with your account id and private key
4. To compile solidity smart contract:
``` 
    npm run build
```
5. To create new token and deploy smart contract on hedera test network:
```
    npm run start
```

## How to run UI:
1. Install packages:
```
    cd client
    npm i
```
2. Update constant.js file with your contract id and token id.
3. To start the react application:
``` 
    npm run start
```
