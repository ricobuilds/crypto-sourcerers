// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

contract WebThreeSource {

  address public owner;

  constructor() {
    owner = msg.sender;
  };

  modifier onlyOwner{
    require(msg.sender == owner, "[INVALID] Don't try it, cowboy!");
    _;
  }
  // invest those funds
  function depositWebThreeSourceFunds() public onlyOwner{

  }
 
 
  // receive funds
  receive()
}