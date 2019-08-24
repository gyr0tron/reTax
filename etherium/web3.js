import Web3 from "web3";
import keys from "./../.env";

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  //on browser is metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //on server or no metamask
  const provider = new Web3.providers.HttpProvider(keys.INFURA_URL);
  web3 = new Web3(provider);
}

export default web3;
