// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "./ERC20Upgradeable.sol";
import "./utils/OwnableUpgradeable.sol";
import "./proxy/Initializable.sol";

contract TokenV2 is ERC20Upgradeable, OwnableUpgradeable {
    function initialize(uint256 _initialSupply) public initializer {
        __ERC20_init_unchained("Roundpay", "NIKS");
        __Ownable_init();
        _mint(owner(), _initialSupply);
    }

    function transferPrice(
        address from,
        address to,
        uint256 amount
    ) public {
        _transfer(from, to, amount);
    }
}
