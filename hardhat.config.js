require("@nomicfoundation/hardhat-toolbox")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
  mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/k6g4Pf5EbIzjK5yi8gt9_hdFUGDVdP8n",
    accounts: [privateKey]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}