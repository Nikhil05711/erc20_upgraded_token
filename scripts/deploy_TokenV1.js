const { ethers } = require("hardhat");

async function main() {
  const accounts = await ethers.provider.listAccounts();
  console.log("Accounts", accounts[0]);

  const Nikhil = await ethers.getContractFactory("TokenV1");
  const TokenV1Proxy = await upgrades.deployProxy(Nikhil, [accounts[0]], {
    initialize: "initialize",
  });
  await new Promise((res) => setTimeout(res, 10000));

  console.log("TokenV1Proxy", TokenV1Proxy.address);

  //   console.log("is admin", await TokenV1Proxy.isAdmin(accounts[0]));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
