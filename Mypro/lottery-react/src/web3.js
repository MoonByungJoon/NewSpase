import Web3 from 'web3';
const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new HDWalletProvider(
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

const web3 = new Web3(provider);

export default web3;
