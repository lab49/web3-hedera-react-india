require("dotenv").config();
const {
    AccountId,
    PrivateKey,
    Client,
    TokenCreateTransaction,
    TokenType,
    TokenSupplyType
} = require("@hashgraph/sdk");

const operatorId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);
const treasuryId = AccountId.fromString(process.env.MY_ACCOUNT_ID);
const treasuryKey = PrivateKey.fromString(process.env.MY_PRIVATE_KEY);
const client = Client.forTestnet().setOperator(operatorId, operatorKey);

const supplyKey = PrivateKey.generate();

async function main() {
    let tokenCreateTx = await new TokenCreateTransaction()
        .setTokenName("USDBar")
        .setTokenSymbol("USDB1")
        .setTokenType(TokenType.FungibleCommon)
        .setDecimals(2)
        .setInitialSupply(1000)
        .setTreasuryAccountId(treasuryId)
        .setSupplyType(TokenSupplyType.Infinite)
        .setSupplyKey(supplyKey)
        .freezeWith(client);

    let tokenCreateSign = await tokenCreateTx.sign(treasuryKey);
    let tokenCreateSubmit = await tokenCreateSign.execute(client);
    let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
    let tokenId = tokenCreateRx.tokenId; // "0.0.47823394" ;
    console.log(`- Created token with ID: ${tokenId} \n`);
}
main();