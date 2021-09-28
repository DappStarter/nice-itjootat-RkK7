require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food nuclear cry sad update gesture pave army ghost'; 
let testAccounts = [
"0x8fd6d1a6a47704fe49eef842147856fdac98c8cb739cefe1c8585e39caa7f0f0",
"0x855b951950859275be85da11c97d9dc0d01744f18db6b35fc865a79c41c3191a",
"0x45ef2eb78be873c24a091e2b00b5c2cf9f69e01a973dba93366e9c7cc2b41a5d",
"0x7a22ff468d46eb276cff827c791dbd177db0ba7fe6ed435c5db41c64712059a4",
"0xe103d3b4aa77113c95a83b8fdca9e6480b5a38b3cf9e3bb67fb574879fb72e10",
"0x665213a2914bf78a81407251be6d577ec64f629c1c78173ee72d89490323149e",
"0xcfe08b009ae5b30446d7a2d7a2aa0e22a96626816717726aa02f5b1a396bf0e9",
"0x94600c6a2b74dcb0587ca6f7b7d1e75901538f4ab8ec9cb25ff1df3afd59936f",
"0x12fe7c0bb8334ec7fd90d2af5fc932b22099012dc970c5cdf1f346a31b3538dd",
"0xb73452f489600d382d447fdc7a8f5e6c628ad686aa3c7df55082cb2b70c4b3c0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


