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

For mock, create a folder called 'test' inside contracts folder.

After creating the MockV3Aggregator inside 'test' folder, compile

```
yarn hardhat compile

```

Then check artifacts, Now we can see the files inside @chainlink/contracts folder

Define developmentChains indide helper-hardhat-config.js

Define constructor parameters of Mock inside helper-hardhat-config file

const DECIMALS = 8
const INITIAL_ANSWER = 200000000000 // 2000 and 8 decimal points

Deploy mock only

```
yarn hardhat deploy --tags mocks
```

Deploy now 

```
yarn hardhat deploy
```

Again run this command

```
yarn hardhat node
```
Now we can see deployments also....

For Verification create 'utils' folder and create 'verify.js' inside it

Now deploy

```
yarn hardhat deploy --network sepolia --tags fundme
```
