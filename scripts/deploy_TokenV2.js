const { ethers, upgrades } = require("hardhat");

const PROXY = "0x070e2ba6E84774BF2E600217E3Bc5120d22D47c0";

async function main() {
  const TokenV2 = await ethers.getContractFactory("TokenV2");

  await upgrades.upgradeProxy(PROXY, TokenV2);
  console.log("Token Upgraded");
}

//   console.log("is admin", await TokenV1Proxy.isAdmin(accounts[0]));

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
