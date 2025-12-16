// SPDX-License-Identifier: MIT


pragma solidity ^0.8.19;

contract Payments {
    address public owner;

    struct Payment {
        address from;
        uint256 amount;
        uint256 timestamp;
    }

    Payment[] public payments;

    constructor() {
        owner = msg.sender;
    }

    function pay() external payable {
        require(msg.value > 0, "Payment must be greater than 0");

        payments.push(Payment({ from: msg.sender, amount: msg.value, timestamp: block.timestamp }));
    }

    function getPaymentsCount() external view returns (uint256) {
        return payments.length;
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");

        payable(owner).transfer(address(this).balance);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
