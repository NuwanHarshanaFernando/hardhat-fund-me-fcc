Install Hardhat

```
yarn add --dev hardhat
```

Create a hardhat project

```
yarn hardhat

```

Download @chain/contracts npm 

```
yarn add --dev @chainlink/contracts
```

Now you can see it inside node_modules

Then compile

```
yarn hardhat compile
```

Download hardhat-deploy package

```
yarn add --dev hardhat-deploy
```

require("hardhat-deploy") inside hardhat.config 

Run 'yarn hardhat'
We can see under tasks
 compile               Compiles the entire project, building all artifacts

Create a new folder called "deploy"
mkdir deploy

Download hardhat-ethers 
```
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```

In package.json, we can see the package is overridden
"@nomiclabs/hardhat-ethers": "npm:hardhat-deploy-ethers",

To refactor like Aave, create helper-hardhat-config.js file
Define network configs in this file

