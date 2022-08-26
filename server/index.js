require("dotenv").config();
const { Client } = require("@hashgraph/sdk");
const { uploadContract, deployContract } = require("./src/create-contract");
const { createLab49Token } = require("./src/create-token");

async function main() {
    // Configure accounts and client, and generate needed keys
    const operatorId = process.env.MY_ACCOUNT_ID;
    const operatorKey = process.env.MY_PRIVATE_KEY;
    const client = Client.forTestnet().setOperator(operatorId, operatorKey);

    //Generate Lab49 Fungible Token
    const tokenId = await createLab49Token(operatorId, operatorKey, client)
    const tokenAddressSol = tokenId.toSolidityAddress();

    //Upload the bitecode to hedera and deploy the contract
    const bytecodeFileId = await uploadContract(client);
    deployContract(client, bytecodeFileId, tokenAddressSol);
}

main()