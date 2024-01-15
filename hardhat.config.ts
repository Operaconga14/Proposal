import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = "393153c3cccedd239b911a8c897c7e737adf524aa52d3c045e2d9533606488ba"
const ALCHEMY_API = "e04XCVO3hdnexGd5GdKnhe9s30ESYJi3"

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API}`,
      accounts:[PRIVATE_KEY]
    },
    metatestnet: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API}`,
      accounts:[PRIVATE_KEY]
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      accounts: [PRIVATE_KEY]
    }
  }
};

export default config;
