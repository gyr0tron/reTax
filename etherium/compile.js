const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const billPath = path.resolve(__dirname, "contracts", "Bill.sol");
const source = fs.readFileSync(billPath, "utf8");
var input = {
  language: "Solidity",
  sources: {
    "Bill.sol": {
      content: source
    }
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"]
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Bill.sol"
];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract + ".json"),
    output[contract]
  );
}
