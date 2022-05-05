/*
* @type import('hardhat/config').HardhatUserConfig
*/
require('@nomiclabs/hardhat-waffle');

// const INFURA_URL = 'https://rinkeby.infura.io/v3/c41bc9a01b4e49a7a4c9de248c24386a';
// const PRIVATE_KEY = 'ab0fbc1f1f891593d1d0ab7415c9c1da7eafdded4ee5381199f4a1b0f89b3469';

// module.exports = {
//   solidity: "0.8.3",
//   networks:{
//     rinkeby:{
//       url:INFURA_URL,
//       accounts:['${PRIVATE_KEY}']
//     }
//   }
// };

const ALCHEMY_API_KEY = "LO95rsLKFdRNqmAmEO85Q2MtOZFbKzl5";
const ROPSTEN_PRIVATE_KEY = "ab0fbc1f1f891593d1d0ab7415c9c1da7eafdded4ee5381199f4a1b0f89b3469";

module.exports = {
  solidity: "0.8.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};