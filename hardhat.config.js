require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545", // Your Ganache RPC Server address
      accounts: ["0xf060ce84a9bff9d1a6eddbef6b46dea2bacfcc94e32a621f2b3c74438965b59d"] // Private key of an account provided by Ganache
    }
    // You can add other network configurations here
  },
};
