require("dotenv").config();
const { Client } = require("@hashgraph/sdk");
const { uploadContract, deployContract } = require("./src/create-contract");
const { createToken } = require("./src/create-token");

async function main() {
    // Configure accounts and client, and generate needed keys
    const operatorId = process.env.MY_ACCOUNT_ID;
    const operatorKey = process.env.MY_PRIVATE_KEY;
    const client = Client.forTestnet().setOperator(operatorId, operatorKey);

    //Generate Lab49 Fungible Token
    const tokenId = await createToken(operatorId, operatorKey, client)
    const tokenAddressSol = tokenId.toSolidityAddress();

    console.log("The token ID is " + tokenId);
    console.log("The token's solidity address is " + tokenAddressSol);

    //Upload the bytecode to hedera and deploy the contract
    const bytecodeFileId = await uploadContract(client);
    deployContract(client, bytecodeFileId, tokenAddressSol);
}

main()