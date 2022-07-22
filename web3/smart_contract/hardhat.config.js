require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/aJVQNY-5k9k7ytdMC9NUIFre6lVRgdrn',
      //below is a private key i got from the metamask account which will fund transaction which is Account 1 with 2.6452 eth on 19/07/2022
      accounts: ['c395dd834913ca09bd452c7d72ef1a11e12a0f7605c0656a9af58b74730de952'],
    },
  },
};