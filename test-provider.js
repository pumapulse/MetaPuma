// test-provider.js
const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/bsc_testnet/d7443d0b739684c9d2eec1047f2228fc37340d963962146f9016aead069d5e9c");

async function main() {
    const blockNumber = await provider.getBlockNumber();
    console.log("Current BNB Testnet block:", blockNumber);
}

main();
