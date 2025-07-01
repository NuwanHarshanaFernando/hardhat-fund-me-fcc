require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks:{
    

  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    //  1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    //  4: 1  // For example, in Rinkeby, deployer is in 1st position
    },
    // user: {
    //   default: 1
    // }
  },

};
