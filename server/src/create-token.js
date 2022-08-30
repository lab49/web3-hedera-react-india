const { PrivateKey, TokenCreateTransaction, TokenType } = require("@hashgraph/sdk");

async function createLab49Token(treasuryAccountId, treasuryKey, client) {

    //CREATE FUNGIBLE TOKEN (Lab 49)
    let tokenCreateTx = await new TokenCreateTransaction()
        .setTokenName("Lab 49")
        .setTokenSymbol("L49")
        .setTokenType(TokenType.FungibleCommon)
        .setInitialSupply(1000)
        .setTreasuryAccountId(treasuryAccountId)
        .freezeWith(client);

    let tokenCreateSign = await tokenCreateTx.sign(PrivateKey.fromString(treasuryKey));
    let tokenCreateSubmit = await tokenCreateSign.execute(client);
    let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);

    //GET THE TOKEN ID AND ADDRESS
    const tokenId = tokenCreateRx.tokenId;

    console.log("The token ID is " + tokenId);

    return tokenId;
}

module.exports = { createLab49Token }