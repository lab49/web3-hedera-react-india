pragma solidity >=0.7.0 <0.9.0;
 

contract Contract {
 
mapping (string => uint) public myDirectory;

constructor () public { 
    }

function setMobileNumber(string memory _name, uint _mobileNumber) public {
        myDirectory[_name] = _mobileNumber;
    }

function getMobileNumber(string memory _name) public view returns (uint) {
        return myDirectory[_name];
    }

function getOwner(
    ) public view returns (address) {    
        return owner;
    }
}