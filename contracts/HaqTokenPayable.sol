// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./HaqToken.sol";

contract HaqTokenPayable is HaqToken {
    uint256 public pricePerToken;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 decimals_,
        uint256 initialSupply,
        uint256 _pricePerToken
    ) HaqToken(_name, _symbol, decimals_, initialSupply) {
        pricePerToken = _pricePerToken;
    }

    function buyToken() external payable {
        require(msg.value > 0, "Send ETH to buy tokens");
        uint256 amountToMint = (msg.value * (10 ** decimals())) / pricePerToken;
        _mint(msg.sender, amountToMint);
    }
}
