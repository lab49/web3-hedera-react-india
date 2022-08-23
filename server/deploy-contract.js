const { ContractCreateTransaction, Client, ContractFunctionParameters } = require('@hashgraph/sdk');
require("dotenv").config();

async function main() {

      const myAccountId = process.env.MY_ACCOUNT_ID;
      const myPrivateKey = process.env.MY_PRIVATE_KEY;
      const client = Client.forTestnet();
      client.setOperator(myAccountId, myPrivateKey);

      const contractTx = await new ContractCreateTransaction()
            .setBytecodeFileId('0.0.47901194')
            .setGas(100000)
            .setConstructorParameters(new ContractFunctionParameters().addString("Hello from Hedera!"));

      const contractResponse = await contractTx.execute(client);
      const contractReceipt = await contractResponse.getReceipt(client);

      const newContractId = contractReceipt.contractId;

      console.log("The smart contract ID is " + newContractId);
}

main();

// 0.0.47844400