/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface AddressesInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ARBITRUM_MAINNET"
      | "BASE_MAINNET"
      | "BNB_MAINNET"
      | "LINEA_TESTNET"
      | "OPTIMISM_GOERLI_TESTNET"
      | "OPTIMISM_MAINNET"
      | "PLOYGON_MUMBAI_TESTNET"
      | "POLYGON_MAINNET"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ARBITRUM_MAINNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_MAINNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BNB_MAINNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LINEA_TESTNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPTIMISM_GOERLI_TESTNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPTIMISM_MAINNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PLOYGON_MUMBAI_TESTNET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POLYGON_MAINNET",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ARBITRUM_MAINNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_MAINNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BNB_MAINNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LINEA_TESTNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPTIMISM_GOERLI_TESTNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPTIMISM_MAINNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PLOYGON_MUMBAI_TESTNET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POLYGON_MAINNET",
    data: BytesLike
  ): Result;
}

export interface Addresses extends BaseContract {
  connect(runner?: ContractRunner | null): Addresses;
  waitForDeployment(): Promise<this>;

  interface: AddressesInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ARBITRUM_MAINNET: TypedContractMethod<[], [string], "view">;

  BASE_MAINNET: TypedContractMethod<[], [string], "view">;

  BNB_MAINNET: TypedContractMethod<[], [string], "view">;

  LINEA_TESTNET: TypedContractMethod<[], [string], "view">;

  OPTIMISM_GOERLI_TESTNET: TypedContractMethod<[], [string], "view">;

  OPTIMISM_MAINNET: TypedContractMethod<[], [string], "view">;

  PLOYGON_MUMBAI_TESTNET: TypedContractMethod<[], [string], "view">;

  POLYGON_MAINNET: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ARBITRUM_MAINNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "BASE_MAINNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "BNB_MAINNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LINEA_TESTNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OPTIMISM_GOERLI_TESTNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OPTIMISM_MAINNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PLOYGON_MUMBAI_TESTNET"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "POLYGON_MAINNET"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
