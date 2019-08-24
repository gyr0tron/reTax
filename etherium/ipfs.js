const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "localhost",
  port: 5001,
  protocol: "http"
});
//run with local daemon
// const ipfsApi = require(‘ipfs-api’);
// const ipfs = new ipfsApi(‘localhost’, ‘5001’, {protocol:‘http’});
export default ipfs;
