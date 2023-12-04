//https://eth-sepolia.g.alchemy.com/v2/6jPzuENachKbsf4o8EJjvXNAFCJ5jIUJ

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/6jPzuENachKbsf4o8EJjvXNAFCJ5jIUJ',
      accounts:['e0b6d18b61a083a32542ee53f7011cde056202940de9dc8fcedebd13968bf0af']
    }
  }
}