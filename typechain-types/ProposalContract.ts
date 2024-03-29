/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
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
} from "./common";

export declare namespace ProposalContract {
  export type ProposalStruct = {
    title: string;
    description: string;
    approve: BigNumberish;
    reject: BigNumberish;
    pass: BigNumberish;
    total_vote_to_end: BigNumberish;
    current_state: boolean;
    is_active: boolean;
  };

  export type ProposalStructOutput = [
    title: string,
    description: string,
    approve: bigint,
    reject: bigint,
    pass: bigint,
    total_vote_to_end: bigint,
    current_state: boolean,
    is_active: boolean
  ] & {
    title: string;
    description: string;
    approve: bigint;
    reject: bigint;
    pass: bigint;
    total_vote_to_end: bigint;
    current_state: boolean;
    is_active: boolean;
  };
}

export interface ProposalContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "create"
      | "getCurrentProposal"
      | "getProposal"
      | "isVoted"
      | "setOwners"
      | "terminateProposal"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "create",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentProposal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isVoted",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwners",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "terminateProposal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vote", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isVoted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "terminateProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export interface ProposalContract extends BaseContract {
  connect(runner?: ContractRunner | null): ProposalContract;
  waitForDeployment(): Promise<this>;

  interface: ProposalContractInterface;

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

  create: TypedContractMethod<
    [_title: string, _description: string, _total_vote_end: BigNumberish],
    [void],
    "nonpayable"
  >;

  getCurrentProposal: TypedContractMethod<
    [],
    [ProposalContract.ProposalStructOutput],
    "view"
  >;

  getProposal: TypedContractMethod<
    [number: BigNumberish],
    [ProposalContract.ProposalStructOutput],
    "view"
  >;

  isVoted: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  setOwners: TypedContractMethod<
    [new_owner: AddressLike],
    [void],
    "nonpayable"
  >;

  terminateProposal: TypedContractMethod<[], [void], "nonpayable">;

  vote: TypedContractMethod<[choice: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "create"
  ): TypedContractMethod<
    [_title: string, _description: string, _total_vote_end: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getCurrentProposal"
  ): TypedContractMethod<[], [ProposalContract.ProposalStructOutput], "view">;
  getFunction(
    nameOrSignature: "getProposal"
  ): TypedContractMethod<
    [number: BigNumberish],
    [ProposalContract.ProposalStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "isVoted"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setOwners"
  ): TypedContractMethod<[new_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "terminateProposal"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<[choice: BigNumberish], [void], "nonpayable">;

  filters: {};
}
