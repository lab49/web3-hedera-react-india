import {
    AccountId,
    ContractExecuteTransaction,
    ContractFunctionParameters,
} from "@hashgraph/sdk";
import { HashConnect } from "hashconnect";
import { APP_META_DATA, CONTRACT_ID, TOKEN_ID } from "../constants";

//create the hashconnect instance
const hashconnect = new HashConnect();
let topic, accountId;

export const initializeWallet = async (updateWalletDetails) => {
    //register events
    setUpHashConnectEvents(updateWalletDetails);

    //fetch local wallets
    await hashconnect.findLocalWallets();
}

export const setUpHashConnectEvents = (updateWalletDetails) => {
    hashconnect.foundExtensionEvent.once((walletMetadata) => {
        if (walletMetadata) {
            hashconnect.init(APP_META_DATA, "testnet", false)
                .then(({ savedPairings }) => {
                    if (savedPairings.length) {
                        topic = savedPairings[0].topic;
                        accountId = savedPairings[0].accountIds[0]

                        updateWalletDetails(true, true);
                    } else {
                        updateWalletDetails(true)
                    }
                });
        } else {
            updateWalletDetails()
        }
    })

    hashconnect.pairingEvent.on((pairingData) => {
        topic = pairingData.topic;
        accountId = pairingData.accountIds[0];
        updateWalletDetails(true, true);
    })
}

export const connectToWallet = async () => {
    hashconnect.connectToLocalWallet();
}

export const getBalance = async () => {
    const provider = hashconnect.getProvider("testnet", topic, accountId)
    const accountBalance = await provider.getAccountBalance(accountId);
    const tokenBalanceData = accountBalance.toJSON().tokens.find(({ tokenId }) => tokenId === TOKEN_ID);

    return tokenBalanceData?.balance;
}

const getSolidityAddress = (accountId) => {
    return AccountId.fromString(accountId).toSolidityAddress()
}

export const sendTransaction = async (receiver, amount) => {
    const provider = hashconnect.getProvider("testnet", topic, accountId)
    const signer = hashconnect.getSigner(provider);

    //Execute a contract function (transfer)
    const contractExecTx1 = await new ContractExecuteTransaction()
        .setContractId(CONTRACT_ID)
        .setGas(1000000)
        .setFunction(
            "tokenTransfer",
            new ContractFunctionParameters()
                .addAddress(getSolidityAddress(accountId))
                .addAddress(getSolidityAddress(receiver))
                .addInt64(amount)
        )
        .freezeWithSigner(signer);

    const res = await contractExecTx1.executeWithSigner(signer);
    console.log({ res })
}

export const associateUser = async () => {
    const provider = hashconnect.getProvider("testnet", topic, accountId)
    const signer = hashconnect.getSigner(provider);

    //Execute a contract function (transfer)
    const contractExecTx2 = await new ContractExecuteTransaction()
        .setContractId(CONTRACT_ID)
        .setGas(3000000)
        .setFunction(
            "tokenAssociate",
            new ContractFunctionParameters().addAddress(getSolidityAddress(accountId))
        )
        .freezeWithSigner(signer);

    const res = await contractExecTx2.executeWithSigner(signer);
    console.log({ res })
}

export const dissconnectWallet = async () => {
    hashconnect.disconnect(topic);

    topic = "";
    accountId = "";
    localStorage.clear();
}