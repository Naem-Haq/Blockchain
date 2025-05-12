// Ensure Hardhat is installed locally: npm install --save-dev hardhat
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const Token = await ethers.getContractFactory("HaqTokenPayable");
  const token = await Token.deploy(
    "Andy Token",
    "ANDY",
    18,
    ethers.utils.parseUnits("1000000", 18),
    ethers.utils.parseUnits("0.01", "ether")
  );
  await token.deployed();
  console.log("HaqTokenPayable deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
