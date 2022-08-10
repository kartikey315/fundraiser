const hre = require("hardhat");
const fs = require('fs');

async function main() {
 
  

  const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
  const campaignfactory = await CampaignFactory.deploy();

  await campaignfactory.deployed();

  console.log("Contract deployed to:", campaignfactory.address);

  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${campaignfactory.address}"
  `)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
