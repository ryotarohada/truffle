// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
  uint256 public count = 0;

  function read() public view returns (uint256) {
    return count;
  }

  function increment() public {
    count += 1;
  }

  function decrement() public {
    count -= 1;
  }

  function add(uint256 value) public {
    count += value;
  }
}
