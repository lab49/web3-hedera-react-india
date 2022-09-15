const { PrivateKey, TokenCreateTransaction, TokenType } = require("@hashgraph/sdk");

async function createToken(treasuryAccountId, treasuryKey, client) {

    //CREATE FUNGIBLE TOKEN (Lab 49)
    let tokenCreateTx = await new TokenCreateTransaction()
        .setTokenName("Lab 49")
        .setTokenSymbol("L49")
        .setTokenType(TokenType.FungibleCommon)
        .setInitialSupply(1000)
        .setTreasuryAccountId(treasuryAccountId)
        .setAdminKey(PrivateKey.fromString(treasuryKey))
        .freezeWith(client);

    let tokenCreateSign = await tokenCreateTx.sign(PrivateKey.fromString(treasuryKey));
    let tokenCreateSubmit = await tokenCreateSign.execute(client);
    let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);

    //RETURN THE TOKEN ID  
    return tokenCreateRx.tokenId;
}

module.exports = { createToken }