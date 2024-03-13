import React, { useState } from "react";

import { useReadContract, useAccount } from "wagmi";

import { writeContract, simulateContract } from "@wagmi/core";

import { attestorAbi, erc20Abi, reclaimAbi } from "./abis";
import { polygonMumbai } from "wagmi/chains";

import { configz } from "./config";

import { Button } from "@mui/material";

const attestorContract = {
  address: "0x69FE941ee6c9aa317aBe776B005E43A332DB2Ffb",
  abi: attestorAbi,
} as const;

const reclaimContract = {
  address: "0xd6534f52CEB3d0139b915bc0C3278a94687fA5C7",
  abi: reclaimAbi,
} as const;

const erc20Contract = {
  address: "0x69FE941ee6c9aa317aBe776B005E43A332DB2Ffb",
  abi: erc20Abi,
} as const;

interface Props {
  proof: any | null;
}
export const Verify: React.FC<Props> = ({ proof }: Props) => {
  const { isConnected } = useAccount();
  const [isVerified, setIsVerified] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const verify = async (e: any) => {
    try {
      const hash = await simulateContract(configz, {
        ...reclaimContract,
        functionName: "verifyProof",
        chainId: polygonMumbai.id,
        args: [transformProof(proof)],
      });

      if (hash) setIsVerified(true);
    } catch (e: any) {
      console.log(e.toString());
      setError(e.toString);
    }
  };

  if (!isConnected) return null;
  else if (isVerified)
    return (
      <span>
        ✅ Proof verified successfully <hr />
      </span>
    );
  else if (error) return <span> ❌ {error} </span>;
  else return <button onClick={verify}>Verify proof</button>;
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
    "0x9fdad87498b0d98d2bd3ff2cb6bac0e8fdb039512f18161b6b7f665c937354fc",
  claimData: {
    provider: "http",
    parameters:
      '{"body":"","geoLocation":null,"method":"GET","responseMatches":[{"type":"contains","value":"num-orders\\">0 orders</span>"}],"responseRedactions":[{"jsonPath":"","regex":"num\\\\-orders\\">(.*)</span>","xPath":"id(\\"a-page\\")/section[@class=\\"your-orders-content-container aok-relative js-yo-container\\"]/div[@class=\\"your-orders-content-container__content js-yo-main-content\\"]/div[@class=\\"a-row a-spacing-base\\"]/form[@class=\\"js-time-filter-form a-spacing-none\\"]/label[@class=\\"a-form-label time-filter__label aok-inline-block a-text-normal\\"]/span[@class=\\"num-orders\\"]"}],"url":"https://www.amazon.in/your-orders/orders?timeFilter=year-2023&ref_=ppx_yo2ov_dt_b_filter_all_y2023"}',
    owner: "0x7c41fb617ade58d9702f5a352961dd8027c87db0",
    timestampS: 1710328552,
    context: '{"contextAddress":"0x0","contextMessage":""}',
    identifier:
      "0x9fdad87498b0d98d2bd3ff2cb6bac0e8fdb039512f18161b6b7f665c937354fc",
    epoch: 1,
  },
  signatures: [
    "0x13b73cfa3c2f538519e9d7717257421c97360357b101a2ef288b0a261ddb3e201fc237ca98de94f0b425e26c195ddf36e086533b5bc99380fb68794c5bdd60961b",
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
