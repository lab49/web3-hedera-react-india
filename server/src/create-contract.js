const { FileCreateTransaction, ContractCreateTransaction, ContractFunctionParameters } = require('@hashgraph/sdk');
const fs = require("fs");

async function uploadContract(client) {

    //Read contents of file
    const contractBytecode = fs.readFileSync("src/contract/TokenContract_sol_TokenContract.bin");

    //Create a file on Hedera and store the bytecode
    const fileCreateTx = new FileCreateTransaction()
        .setContents(contractBytecode);
    const submitTx = await fileCreateTx.execute(client);
    const fileReceipt = await submitTx.getReceipt(client);
    const bytecodeFileId = fileReceipt.fileId;

    //Log the file ID
    console.log("The smart contract byte code file ID is " + bytecodeFileId);

    return bytecodeFileId;
}


async function deployContract(client, bytecodeFileId, tokenAddressSol) {

    //Create a contract in hedera from fileId
    const contractTx = await new ContractCreateTransaction()
        .setBytecodeFileId(bytecodeFileId)
        .setGas(100000)
        .setConstructorParameters(new ContractFunctionParameters().addAddress(tokenAddressSol));

    const contractResponse = await contractTx.execute(client);
    const contractReceipt = await contractResponse.getReceipt(client);

    const newContractId = contractReceipt.contractId;

    //Log the file ID
    console.log("The smart contract ID is " + newContractId);

    return newContractId;
}

module.exports = { uploadContract, deployContract }