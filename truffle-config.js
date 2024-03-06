module.exports = {
  // Existing configuration...
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  },
  
  // Specify compiler version
  compilers: {
    solc: {
      version: "0.8.19",
      // Additional settings here (e.g., optimization settings)
    }
  }
};
