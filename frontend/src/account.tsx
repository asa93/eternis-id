import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  const balance = useBalance({
    address: address,
  });

  return (
    <div>
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <div>balance: {balance.data?.value.toString()}</div>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
