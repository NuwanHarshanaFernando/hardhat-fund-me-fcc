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

const {networkConfig} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => { 
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // Well, What happens when we want to change chains
    // When going for localhost or hardhat network, we want to use a mock

    // if chainId is X, use address Y
    // if chainId is Z, use address A
    // Like in Aave-v3-core -> They used 'helper-hardhat-config'

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    log("Deploying FundMe and waiting for confirmations...")
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [], // constructor arguments, put price feed address
        log: true,
        waitConfirmations: 1, // wait for 1 block confirmation
    })
    log(`FundMe deployed at ${fundMe.address}`)
}    

