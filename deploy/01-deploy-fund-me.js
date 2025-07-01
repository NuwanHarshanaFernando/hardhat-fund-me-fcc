const { network } = require("hardhat")
// The traditional procedure

// import 
// main function
// calling of main function

// But hardhat-deploy is little bit different

// async function deployFunc(hre) {
//     console.log("Hi")
// }
// module.exports.default = deployFunc

// These syntaxes are identical

 //module.exports.default = async (hre) => {} // hre = hardhat runtime envioronment


// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre

//     hre.getNamedAccounts
//     hre.deployments
// }

const {networkConfig, developmentChains} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")


module.exports = async ({ getNamedAccounts, deployments }) => { 
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // Well, What happens when we want to change chains
    // When going for localhost or hardhat network, we want to use a mock

    // if chainId is X, use address Y
    // if chainId is Z, use address A
    // Like in Aave-v3-core -> They used 'helper-hardhat-config'

   // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)){
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    }else{
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }


    // Mock
    // If the contract doesn't exist, we deploy a minimal version of it
    // for our local testing
    // Deploy mocks is technically deploy script,
    // Therefore create a new file called "00-deploy-mocks.js"
    // 00 means it's pre-deployed, we only do it sometimes, 
    // Only for local testnets.

    log("Deploying FundMe and waiting for confirmations...")
    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args, // constructor arguments, put price feed address
        log: true,
        waitConfirmations: 1, // wait for 1 block confirmation
    })

    //Verification for live blockchains
      if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        // verify
        await verify(fundMe.address, args) // address and list of arguments
      }

    log(`FundMe deployed at ${fundMe.address}`)
    log("-------------------------------------------------------------------")
  
}   

module.exports.tags = ["all", "fundme"]

