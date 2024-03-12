import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CircularProgress from "@mui/material/CircularProgress";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { configz } from "./config";
import { Account } from "./account";
import { WalletOptions } from "./wallet-options";

const queryClient = new QueryClient();

const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

type Proof = {
  identifier: String;
  signatures: String[];
  extractedParameterValues: { CLAIM_DATA: String };
  claimData: {
    identifier: String;
    owner: String;
    parameters: String;
    timestampS: number;
    context: String;
  };
};

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

function App() {
  const [callbackId, setCallbackId] = React.useState<string | null>(null);
  const [reclaimUrl, setReclaimUrl] = React.useState<string | null>(null);

  const [statusUrl, setStatusUrl] = React.useState<string | null>("");

  const [proofStatus, setProofStatus] = React.useState<string | null>(null);
  const [proof, setProof] = React.useState<Proof | null>(null);

  const notify = () => alert("Link copied to clipboard!");

  //polling
  useEffect(() => {
    if (!statusUrl) return;

    const intervalId = setInterval(getStatus, 10000);

    async function getStatus() {
      const response = await axios.get(statusUrl ?? "");

      const status = response?.data?.session?.status;
      const proofs = response?.data?.session?.proofs;

      console.log("proof", proofs, proofs.length);
      setProofStatus(status);

      if (!proofs[0]) return;

      console.log("proof received!");
      setProof(proofs[0]);
      clearInterval(intervalId);
    }
  }, [reclaimUrl]);

  const proveIt = async (e: any) => {
    e.preventDefault();
    console.log("prove it");
    const response = await axios.get(backendBaseUrl + "/request");
    console.log(response);
    setCallbackId(response.data.callbackId);
    //window.location.replace(response.data.url)
    setReclaimUrl(response.data.reclaimUrl);
    setStatusUrl(response.data.statusUrl);
  };

  console.log("proof2", proof);

  return (
    <WagmiProvider config={configz}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <ConnectWallet />
          <header className="App-header">
            {proof && (
              <span>
                {" "}
                ✅ Proof submitted <br />{" "}
                {proof?.extractedParameterValues?.CLAIM_DATA} <hr />
              </span>
            )}

            {!reclaimUrl && (
              <div>
                <h2>DEMO</h2>
                <h3>Prove that you are a real person</h3>
                <p>[This demo uses HttpsProvider and CustomProvider]</p>

                <div className="actions">
                  <button
                    className="button"
                    disabled={!!reclaimUrl}
                    onClick={proveIt}
                  >
                    Prove it!
                  </button>
                </div>
              </div>
            )}
            {reclaimUrl && !proof && (
              <div className="links">
                {proofStatus && (
                  <span>
                    Status {proofStatus}... <CircularProgress />
                  </span>
                )}
                <div>
                  If you don't have our app installed, check the installation
                  steps{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="App-link"
                    href="https://questbook.gitbook.io/reclaim-protocol/installing-reclaim-wallet"
                  >
                    here
                  </a>
                </div>
              </div>
            )}
            {reclaimUrl ? (
              <>
                <h3>On mobile device?</h3>
                <a
                  href={reclaimUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="App-link"
                >
                  Click here to open on Reclaim Wallet App
                </a>
                <h3>On laptop/desktop?</h3>
                <QRCode value={reclaimUrl} />
                <p>or, Copy the link and send to your phone</p>
                <CopyToClipboard text={reclaimUrl}>
                  <button onClick={notify} className="button">
                    Copy
                  </button>
                </CopyToClipboard>
              </>
            ) : null}
          </header>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
