import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployPayments: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Payments", {
    from: deployer,
    args: [],
    log: true,
  });
};

export default deployPayments;
deployPayments.tags = ["Payments"];
