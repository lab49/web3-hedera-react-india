import { ContractExecuteTransaction, ContractFunctionParameters } from "@hashgraph/sdk";
import React, { useState } from 'react';

export function ContractSet({ hashconnect, pairingData }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const callSetMethod = async () => {
        const provider = hashconnect.getProvider("testnet", pairingData.topic, pairingData.accountIds[0]);
        const signer = hashconnect.getSigner(provider);
        const transaction = await new ContractExecuteTransaction().setContractId("0.0.47901196")
            .setFunction("setMobileNumber", new ContractFunctionParameters().addString("Lavi").addUint256(12345))
            .setGas(100000)
            .freezeWithSigner(signer);
        const response = await transaction.executeWithSigner(signer);
        const receipt = await provider.getTransactionReceipt(response.transactionId);
        alert("contract execution: " + receipt.status.toString());
    };
    return (
        <div>
            Enter Name : <input type='text' onChange={(e) => setName(e.currentTarget.value)} value={name} />
            Enter Phone Number: <input type='text' onChange={(e) => setPhone(e.currentTarget.value)} value={phone} />

            <button onClick={callSetMethod}>Contract Set</button>
        </div>
    );
}
