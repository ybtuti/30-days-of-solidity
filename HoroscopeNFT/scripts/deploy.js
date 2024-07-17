const hre = require("hardhat");
 
async function main() {
  console.log("Deploying contract...");

  const horoscope = await hre.ethers.deployContract("contracts/horoscopeNFT.sol:horoscopeNFT");
  
 
  console.log("Contract deployed to address:", horoscope.target);
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });