const CampaignFactory = require("./artifacts/contracts/Campaign.sol/CampaignFactory.json");
const Campaign = require("./artifacts/contracts/Campaign.sol/Campaign.json");
const { ethers } = require("ethers");


const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/k6g4Pf5EbIzjK5yi8gt9_hdFUGDVdP8n"
      );
    
      const contract = new ethers.Contract(
        "0x8D9ebFee3930297482a7CFF641d62A066Bdce5CD",
        CampaignFactory.abi,
        provider
      );

    const getDeployedCampaign = contract.filters.campaignCreated();
    let events = await contract.queryFilter(getDeployedCampaign);
    let event = events.reverse();
    console.log(event);

//   const provider = new ethers.providers.JsonRpcProvider(
//     "https://polygon-mumbai.g.alchemy.com/v2/k6g4Pf5EbIzjK5yi8gt9_hdFUGDVdP8n"
//   );

//   const contract = new ethers.Contract(
//     "0x8D9ebFee3930297482a7CFF641d62A066Bdce5CD",
//     Campaign.abi,
//     provider
//   );

//   const Donations = contract.filters.donated('0xc538779A628a21D7CCA7b1a3E57E92f5226C3E27');
//   const AllDonations = await contract.queryFilter(Donations);

//   const DonationsData =  AllDonations.map((e) => {
//     return {
//       donar: e.args.donar,
//       amount: parseInt(e.args.amount),
//       timestamp : parseInt(e.args.timestamp)
//   }});

//   console.log(DonationsData);

};

main();