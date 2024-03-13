import React, { useState } from "react";

import {
  useReadContract,
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

import { reclaimContract } from "./contracts";
import { polygonMumbai } from "wagmi/chains";

interface Props {
  proof: any | null;
}
export const Verify: React.FC<Props> = ({ proof }: Props) => {
  const { isConnected } = useAccount();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const verify = async (e: any) => {
    writeContract({
      ...reclaimContract,
      functionName: "verifyProof",
      chainId: polygonMumbai.id,
      args: [transformProof(proof)],
    });
  };

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  console.log("hash", isPending, hash, error, isLoading, isSuccess);

  if (!isConnected) return null;
  else
    return (
      <>
        {isPending && !error && (
          <span>
            ✅ Proof verified successfully <hr />
          </span>
        )}
        {error && <span> ❌ {error.message.slice(0, 100)}.. </span>}

        {!hash && !error && (
          <button onClick={verify} className="button">
            {isPending ? "pending..." : "Verify proof"} {hash}{" "}
          </button>
        )}
      </>
    );
};

const transformProof = (proof: any) => {
  const claimInfoBuilder = new Map([
    ["context", proof["claimData"]["context"]],
    ["parameters", proof["claimData"]["parameters"]],
    ["provider", proof["claimData"]["provider"]],
  ]);
  const claimInfo = Object.fromEntries(claimInfoBuilder);
  const claimBuilder = new Map([
    ["epoch", proof["claimData"]["epoch"]],
    ["identifier", proof["claimData"]["identifier"]],
    ["owner", proof["claimData"]["owner"]],
    ["timestampS", proof["claimData"]["timestampS"]],
  ]);
  const signedClaim = {
    claim: Object.fromEntries(claimBuilder),
    signatures: proof["signatures"],
  };
  return { claimInfo, signedClaim };
};
