const  { FileCreateTransaction,Client } =  require('@hashgraph/sdk');
require("dotenv").config();
let fs = require("fs");

async function main() {
const contractBytecode = fs.readFileSync("contract_sol_Contract.bin");

const fileCreateTx = new FileCreateTransaction().setContents(contractBytecode);

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;
const client = Client.forTestnet();
client.setOperator(myAccountId, myPrivateKey);
const submitTx = await fileCreateTx.execute(client);

const fileReceipt = await submitTx.getReceipt(client);

const bytecodeFileId = fileReceipt.fileId;

//Log the file ID
console.log("The smart contract byte code file ID is " + bytecodeFileId)
}
main();

// 0.0.47844396