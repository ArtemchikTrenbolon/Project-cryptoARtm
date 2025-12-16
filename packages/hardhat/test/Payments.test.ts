import { expect } from "chai";
import { ethers } from "hardhat";

describe("Payments", function () {
  it("Should accept payments", async function () {
    const Payments = await ethers.getContractFactory("Payments");
    const payments = await Payments.deploy();

    await payments.pay({ value: ethers.parseEther("1") });

    expect(await payments.getBalance()).to.equal(ethers.parseEther("1"));
  });

  it("Owner can withdraw", async function () {
    const [owner] = await ethers.getSigners();
    const Payments = await ethers.getContractFactory("Payments");
    const payments = await Payments.deploy();

    await payments.pay({ value: ethers.parseEther("1") });
    await payments.withdraw();

    expect(await payments.getBalance()).to.equal(0);
  });
});
