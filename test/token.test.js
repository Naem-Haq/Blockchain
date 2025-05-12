const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HaqToken & HaqTokenPayable", function () {
  let Token, token, owner, addr1;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    Token = await ethers.getContractFactory("HaqTokenPayable");
    token = await Token.deploy(
      "Haq Token",
      "Haq",
      18,
      ethers.utils.parseUnits("1000000", 18),
      ethers.utils.parseUnits("0.01", "ether")
    );
    await token.deployed();
  });

  it("should mint initial supply to deployer", async () => {
    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(ethers.utils.parseUnits("1000000", 18));
  });

  it("should allow transfers", async () => {
    await token.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
    const bal1 = await token.balanceOf(addr1.address);
    expect(bal1).to.equal(ethers.utils.parseUnits("100", 18));
  });

  it("should let you buy tokens with ETH", async () => {
    const price = await token.pricePerToken();
    // send 1 ETH => should mint (1 ETH / pricePerToken) tokens
    const sendValue = ethers.utils.parseEther("1");
    await token.connect(addr1).buyToken({ value: sendValue });
    const decimals = await token.decimals();
    const expectedTokens = sendValue.mul(ethers.BigNumber.from(10).pow(decimals)).div(price);
    const bal = await token.balanceOf(addr1.address);
    expect(bal).to.equal(expectedTokens);
  });
});
