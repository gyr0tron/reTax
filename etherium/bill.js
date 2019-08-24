import web3 from "./web3";
import Bill from "./build/Bill.json";

export default address => {
  return new web3.eth.Contract(Bill.abi, address);
};
