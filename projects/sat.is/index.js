const { sumTokens2 } = require("../helper/unwrapLPs");

const addressDeclaration = {
  "era": {
    ownerAddress: [""],
    tokenAddress: ["0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4"],
  },
  "ethereum": {
    ownerAddress: [""],
    tokens: ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
  }
}

function calcTvl(networkName)  {
  const thisAddress = addressDeclaration[networkName];

  return async function zkSyncTvl(_time, _ethBlock, chainBlock) {
    const chain = networkName;
    const tokens = thisAddress.tokenAddress;
    const owners = thisAddress.ownerAddress;
    const block = chainBlock[networkName];

    const sumObject = {
      chain,
      block,
      tokens,
      owners,
    };

    return sumTokens2(sumObject);
  }
}

module.exports = {
  methodology: "Stable coin in smart contracts",
  ethereum: {
    tvl: calcTvl("ethereum")
  },
  era: {
    tvl: calcTvl("era")
  },
};
