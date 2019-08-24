import web3 from "./web3";
import compiledGenerator from "./build/GenerateBill.json";
import keys from "../.env";

const abi = compiledGenerator.abi;
const bytecode = compiledGenerator.evm.bytecode.object;

const instance = new web3.eth.Contract(abi, keys.ADDRESS);

export default instance;
