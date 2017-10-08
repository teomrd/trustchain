pragma solidity ^0.4.11;

contract TrustChain {

////    enum Roles { Business, Reviewer }
//
//    BusinessRegistrar businessRegister;
//
//    function TrustChain (BusinessRegister businessRegister) {
//        businessRegister = businessRegister;
//    }
//
    struct User{
        uint256 endorsements;
        uint256 creationTime;
    }

    struct Business {
        string  companyRegNumber;
        mapping (uint256 => bool) exchanges;
        uint256 endorsements;
        uint256 creationTime;
    }

    struct Exchange {
        address user;
    }

    mapping (address => User) users;
    mapping (address => Business) businesses;


    event Error(
        string message
    );

    event SubmitReview(
        address reviewer,
        string companyRegNumber,
        uint256 endorsements
    );
//
//    event CreateUser(
//    address account, uint256 time, uint endorsements
//    );
//
//    event CreateBusiness(
//    address account, uint256 time, uint endorsements
//    );

//    function createUserAccount(address userAddress) {
//
//        //TODO: validation for existing users
//
//        if (users[msg.sender].createTime == 0) {
//            users[msg.sender].creationTime = now;
//            users[msg.sender].endorsements = 5;
//            CreateUser(msg.sender, now);
//        } else {
//            Error("already created");
//        }
//    }

    function createBusinessAccount(string companyRegNumber) {
        businesses[msg.sender].companyRegNumber = companyRegNumber;
        businesses[msg.sender].endorsements = 0;
        businesses[msg.sender].creationTime = now;
    }

    function getTotalEndorsements() constant returns (uint256 endorsements) {
        endorsements = businesses[msg.sender].endorsements;
    }

//
//    function isRegistered(string companyRegNumber, address business) {
//        return true;
//    }




//    function registerExchange(uint256 exchangeId, address customer, string companyRegNumber) {
//        if(isRegistered(companyRegNumber, msg.sender)) {
//            businesses[companyRegNumber].exchanges[exchangeId] = Exchange({user:customer});
//        } else {
//            Error("This is not a registered company number");
//        }
//    }
//
//    function submitReview(string companyRegNumber, bool endorsement, uint256 exchangeId) {
//        if (businesses[companyRegNumber].exchanges[exchangeId].user == msg.sender) {
//            if(endorsement) {
//                businesses[companyRegNumber].endorsements += 1;
//            } else {
//                businesses[companyRegNumber].endorsements -= 1;
//            }
//            SubmitReview(msg.sender, companyRegNumber, endorsement);
//            businesses[companyRegNumber].exchanges[exchangeId] = 0;
//        } else {
//            Error("Invalid proof of exchange.");
//        }
//    }

//    function endorserUser() {
//
//    }




}