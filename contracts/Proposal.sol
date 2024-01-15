// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

contract ProposalContract {
    uint256 private counter;
    address owner;
    struct Proposal {
        string title;
        string description;
        uint256 approve;
        uint256 reject;
        uint256 pass;
        uint256 total_vote_to_end;
        bool current_state;
        bool is_active;
    }

    mapping (uint256 => Proposal) proposal_history;

    address[] private voted_addresses;

    constructor() {
        owner = msg.sender;
        voted_addresses.push(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner");
        _;
    }

    modifier active() {
        require(proposal_history[counter].is_active == true, "This Proposal is not active");
        _;
    }

    modifier newVoter(address _address) {
        require(!isVoted(_address), "Address has already voted");
        _;
    }

    // function calculatedCurrentState() private view returns (bool) {
    //     Proposal storage proposal = proposal_history[counter];

    //     uint256 approve = proposal.approve;
    //     uint256 reject = proposal.reject;
    //     uint256 pass = proposal.pass;

    //     if (proposal.pass %2 == 1) {
    //         pass += 1;
    //     }

    //     pass = pass / 2;

    //     if (approve > reject + pass) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    function calculatedCurrentState() private view returns (bool) {
        Proposal storage proposal = proposal_history[counter];

        uint256 approve = proposal.approve;
        uint256 reject = proposal.reject;
        uint256 pass = proposal.pass;

        if (proposal.pass %2 == 1) {
            pass +=1;
        }

        if (approve > reject || pass > reject) {
            return true;
        } else {
            return false;
        }
    }

    function create(string calldata _title, string calldata _description, uint256 _total_vote_end) onlyOwner external {
        counter += 1;
        proposal_history[counter] = Proposal(_title, _description, 0, 0, 0, _total_vote_end, false, true);
    }

    function setOwners(address new_owner) external onlyOwner {
        owner = new_owner;
    }

    function vote(uint8 choice) external active newVoter(msg.sender){
        Proposal storage proposal = proposal_history[counter];
        uint256 total_vote = proposal.approve + proposal.reject + proposal.pass;
        voted_addresses.push(msg.sender);

        if (choice == 1) {
            proposal.approve +=1;
            proposal.current_state = calculatedCurrentState();
        } else if (choice == 2) {
            proposal.reject +=1;
            proposal.current_state = calculatedCurrentState();
        } else if (choice == 3) {
            proposal.pass +=1;
            proposal.current_state = calculatedCurrentState();
        }

        if ((proposal.total_vote_to_end - total_vote == 1) && (choice == 1 || choice == 2 || choice == 0)) {
            proposal.is_active = false;
            voted_addresses = [owner];
        }
    }

    function terminateProposal() external onlyOwner active {
        proposal_history[counter].is_active = false;
    }

    function isVoted(address _address) public view returns (bool) {
        for (uint i = 0; i < voted_addresses.length; i++) {
            if (voted_addresses[i] == _address) {
                return true;
            }
        }

        return false;
    }

    function getCurrentProposal() external view returns (Proposal memory) {
        return proposal_history[counter];
    }

    function getProposal(uint256 number) external view returns (Proposal memory) {
        return proposal_history[number];
    }
}