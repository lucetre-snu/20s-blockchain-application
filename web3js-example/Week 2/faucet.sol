// in remix, set solidity as 0.4.22
pragma solidity ^0.4.22;

contract Faucet {
    // borrow 'amount' to 'to'
    event Withdrawal(address indexed to, uint amount);
    
    // get 'amount' from 'from'
    event Deposit(address indexed from, uint amount);
    event Deposit1(address indexed from, uint amount, uint indexed a, uint b);
    
    // deployed contracts > faucet > withdraw 100
    function withdraw(uint withdraw_amount) public {
        require(withdraw_amount <= 1000);
        msg.sender.transfer(withdraw_amount);
        
        emit Withdrawal(msg.sender, withdraw_amount);
    }
    
    // call back function
    function () public payable {
    //    emit Deposit(msg.sender, msg.value;
        emit Deposit1(msg.sender, msg.value, 1, 2);
    }
}
