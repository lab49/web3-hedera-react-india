// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import "./service/HederaTokenService.sol";
import "./service/HederaResponseCodes.sol";

contract TokenContract is HederaTokenService {
    address tokenAddress;

    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }

    function tokenAssociate(address _account) external {
        int256 response = HederaTokenService.associateToken(_account, tokenAddress);

        if (response != HederaResponseCodes.SUCCESS) {
            revert("Associate Failed");
        }
    }

    function tokenTransfer(address _sender, address _receiver, int64 _amount) external {
        int256 response = HederaTokenService.transferToken(
            tokenAddress,
            _sender,
            _receiver,
            _amount
        );

        if (response != HederaResponseCodes.SUCCESS) {
            revert("Transfer Failed");
        }
    }
}
