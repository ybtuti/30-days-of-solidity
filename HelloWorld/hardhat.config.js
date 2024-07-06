require("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();

const { PRIVATE_KEY } = process.env;
const { SEPOLIA_API_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
