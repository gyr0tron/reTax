const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledGenerator = require("./build/GenerateBill.json");
const keys = require("../.env");

const provider = new HDWalletProvider(keys.MNEMONIC, keys.INFURA_URL);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  // Read in the compiled contract code and fetch ABI description and the bytecode as objects
  // const compiled = JSON.parse(fs.readFileSync("output/contracts.json"));
  const abi = compiledGenerator.abi;
  const bytecode = compiledGenerator.evm.bytecode.object;

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: "0x" + bytecode, arguments: [800000000000000] })
    .send({ from: accounts[0], gas: "5000000" });

  console.log("Contract deployed to", result.options.address);
};
deploy();
