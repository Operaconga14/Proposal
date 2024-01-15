import { ethers } from "hardhat";

async function main() {
    const Proposal = await ethers.getContractFactory('ProposalContract')
    const proposal = await Proposal.deploy()

    console.log("Contract Address: ", await proposal.getAddress())
    
}

main()
.then(() => process.exit(1))
.catch((err) => {
    console.error(err)
    process.exit(0)
})