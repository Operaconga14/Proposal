import { expect } from "chai";
import { ContractTransactionResponse } from "ethers";
import { ethers } from "hardhat";
import { ProposalContract } from "../typechain-types";

describe("Proposal", () => {
    let Proposal, proposal: ProposalContract & { deploymentTransaction(): ContractTransactionResponse; }
    before(async () => {
        Proposal = await ethers.getContractFactory('ProposalContract')
        proposal = await Proposal.deploy()

        console.log("contract Address: ", await proposal.getAddress())
    })

    describe("Deployment", () => {
        it("Should get the contract Address", async () => {
            expect(await proposal.getAddress())
        })

        it("Should Create Proposal", async () => {
            expect(await proposal.create('Phone Distribution', 'Proposal to distribute phones to companies', 50000))
        })

        it("Should return the current proposal", async () => {
            expect(await proposal.getCurrentProposal())
            console.log("Current Proposal Title: ", (await proposal.getCurrentProposal()).title)
            console.log("Current Proposal Description: ", (await proposal.getCurrentProposal()).description)
            console.log("Current Proposal: ", (await proposal.getCurrentProposal()).total_vote_to_end)
            console.log("Current Proposal: ", (await proposal.getCurrentProposal()).is_active)
        })

        it("Should Vote", async () => {
            expect(await proposal.vote)
        })

        it("Should return number of vote", async () => {
            expect(await proposal.isVoted("0x70997970C51812dc3A010C7d01b50e0d17dc79C8"))
            console.log("is Voted: ", await proposal.isVoted("0x70997970C51812dc3A010C7d01b50e0d17dc79C8"))
        })
        
    })
})