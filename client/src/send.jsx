import { AccountId, TransferTransaction } from "@hashgraph/sdk";
import { useState } from "react";

export default function Send({ hashconnect, pairingData, updateBal }) {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState(0);

    const send = async () => {
        const provider = hashconnect.getProvider("testnet", pairingData.topic, pairingData.accountIds[0]);
        const signer = hashconnect.getSigner(provider);
        const trans = await new TransferTransaction()
            .addTokenTransfer('0.0.47901145', pairingData.accountIds[0], -1 * amount)
            .addTokenTransfer('0.0.47901145', address, amount)
            .freezeWithSigner(signer);
        const result = await trans.executeWithSigner(signer);
        alert(`Transafer success with ${result.transactionId}`);
        updateBal();
    }

    return (
        <div>
            Enter Address: <input type='text' onChange={(e) => setAddress(e.currentTarget.value)} value={address} />
            Enter Amount: <input type='text' onChange={(e) => setAmount(e.currentTarget.value)} value={amount} />

            <button onClick={send}>Send</button>
        </div>
    );
}