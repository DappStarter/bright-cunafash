require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift random stick slow grid argue sure general'; 
let testAccounts = [
"0xb233f8423efa6b279b5e4dc98d997525749cbcca750d2ba91d8a5e481d7c5c11",
"0xfb7d8cc3599a5c50669553b0719c08b4006aa225ee66c3ea73fc23c2884c3b46",
"0xa19fc9cf38c480ab5bb494963fe8ea731d3ff1f280afafcae4fe9b67dc10a8f2",
"0x89e90d32be5b999f720ae4776347933414e01739a805f7d9172a3d9036534ae7",
"0x01bba0c7baae13326205d7cec93416fda6503ca99b04efed523110b1a91b544c",
"0xf8d97608c815473fedd94e8f035dd24c693f6ccff87b5bb44f3d46698dbe6c36",
"0xe3c773c33c90c929c1aa2fd52aca8d9fe32e74eca11c5c8759c7f2c9ff74a521",
"0x02d6dc7a6630d3aeb77fc75de4422a92c5101e1bbc00d2283eeaad0b42a2c234",
"0x1189222f70939ab53613a9014b95c7b2f27ccf434c1f51466a6a79315bffaf82",
"0x805668b936cf02ccf34b7393d93c7f3eedae3c6f871f59f03d524ad4df760688"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
