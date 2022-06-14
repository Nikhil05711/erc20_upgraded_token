// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./proxy/Initializable.sol";

contract BaseContract is Initializable {
    uint256 public y;

    function initialized() public initializer {
        y = 5000;
    }
}

contract Initial is BaseContract {
    uint256 public x;

    function initialize(uint256 _x) public initializer {
        BaseContract.initialized(); //important line to do upgradation i
        x = _x;
    }
}

// dizzy exit medal essence scatter define repair mistake junk park help pilot
