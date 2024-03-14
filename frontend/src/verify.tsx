import React, { useState } from "react";

import {
  useReadContract,
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

import { reclaimContract, verifierContract } from "./contracts";
import { polygonMumbai } from "wagmi/chains";

interface Props {
  proof: any | null;
}
export const Verify: React.FC<Props> = ({ proof }: Props) => {
  const { isConnected } = useAccount();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { data } = useReadContract({
    ...verifierContract,
    functionName: "totalUsers",
  });

  const verify = async (e: any) => {
    console.log("proof2", transformProof(proof));

    writeContract({
      ...verifierContract,
      functionName: "verifyProof",
      chainId: polygonMumbai.id,
      args: [transformProof(proof2)],
    });
  };

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  console.log(data);

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

const proof2 = {
  identifier:
    "0x7ed612f70bb3f6cc961deb3a8e12882859d0310cb5809c3934812f6ebcc73905",
  claimData: {
    provider: "http",
    parameters:
      '{"body":"","geoLocation":null,"method":"GET","responseMatches":[{"type":"contains","value":"num-orders\\">0 orders</span>"}],"responseRedactions":[{"jsonPath":"","regex":"num\\\\-orders\\">(.*)</span>","xPath":"id(\\"a-page\\")/section[@class=\\"your-orders-content-container aok-relative js-yo-container\\"]/div[@class=\\"your-orders-content-container__content js-yo-main-content\\"]/div[@class=\\"a-row a-spacing-base\\"]/form[@class=\\"js-time-filter-form a-spacing-none\\"]/label[@class=\\"a-form-label time-filter__label aok-inline-block a-text-normal\\"]/span[@class=\\"num-orders\\"]"}],"url":"https://www.amazon.in/your-orders/orders?timeFilter=year-2023&ref_=ppx_yo2ov_dt_b_filter_all_y2023"}',
    owner: "0x19bba175815678ad5021e5a835e8e36d688aa1fe",
    timestampS: 1710424339,
    context: '{"contextAddress":"0x0","contextMessage":"0098967F"}',
    identifier:
      "0x7ed612f70bb3f6cc961deb3a8e12882859d0310cb5809c3934812f6ebcc73905",
    epoch: 1,
  },
  signatures: [
    "0xe1febd96e31a4a4b4fcfce0baa661eb9a385bb207496445e58d80247657fd38e718d7ccb3355ada6f0d7b00fbba2a32fd9baba266dc1d8762af4d9d69013313c1b",
  ],
  witnesses: [
    {
      id: "0x244897572368eadf65bfbc5aec98d8e5443a9072",
      url: "https://reclaim-node.questbook.app",
    },
  ],
  extractedParameterValues: {
    CLAIM_DATA: "0 orders",
  },
};
