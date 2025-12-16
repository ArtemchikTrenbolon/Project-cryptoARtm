"use client";

import { useScaffoldWriteContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export default function Home() {
  const { writeContractAsync } = useScaffoldWriteContract("Payments");
  const { data: balance } = useScaffoldReadContract({
    contractName: "Payments",
    functionName: "getBalance",
  });

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">ETH Payments DApp</h1>

      <button
        className="btn btn-primary"
        onClick={() =>
          writeContractAsync({
            functionName: "pay",
            value: BigInt(1e16), // 0.01 ETH
          })
        }
      >
        Pay 0.01 ETH
      </button>

      <p className="mt-4">
        Contract balance: {balance?.toString()} wei
      </p>
    </div>
  );
}
