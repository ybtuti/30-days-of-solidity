require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const POLYGON_API_KEY = process.env.POLYGON_API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks : {
    polygon_amoy : {
      url: POLYGON_API_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
  
};