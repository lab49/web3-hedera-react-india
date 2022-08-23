import { Hbar, ContractFunctionParameters, ContractCallQuery } from "@hashgraph/sdk";
import React from 'react';

export function ContractGet({ hashconnect, pairingData }) {

    const contractGet = async () => {
        const provider = hashconnect.getProvider("testnet", pairingData.topic, pairingData.accountIds[0]);

        const signer = hashconnect.getSigner(provider);
        let transaction = await new ContractCallQuery()
            .setMaxQueryPayment(new Hbar(1))
            .setContractId("0.0.47901196")
            .setFunction("getMobileNumber", new ContractFunctionParameters().addString("Bob"))
            .setGas(100000);
        const getMessage = await transaction.executeWithSigner(signer);
        const message = getMessage.getUint256(0);
        console.log("The contract message: " + message);

        let receipt = await provider.getTransactionReceipt(getMessage.transactionId);
        console.log("The contract message: " + receipt.status.toString());

    };
    return (
        <button onClick={contractGet}>Call Contract Get</button>
    );
}
