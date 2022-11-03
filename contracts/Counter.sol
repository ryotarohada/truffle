// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// カウンターを作成
contract Counter {
  uint256 public count = 0; // カウンターの値

  // 値を取得
  function read() public view returns (uint256) {
    return count;
  }

  // 値を1増やす
  function increment() public {
    count += 1;
  }

  // 受け取った引数を値から加算して代入
  function add(uint256 value) public {
    count += value;
  }

  // 受け取った引数を値から減算して代入
  function _subtract(uint256 value) private {
    count -= value;
  }
}
