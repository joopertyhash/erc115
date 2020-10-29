/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Ierc1155TokenReceiverInterface extends ethers.utils.Interface {
  functions: {
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, (BigNumberish)[], (BigNumberish)[], BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;

  events: {};
}

export class Ierc1155TokenReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Ierc1155TokenReceiverInterface;

  functions: {
    /**
     * An ERC1155-compliant smart contract MUST call this function on the token recipient contract, at the end of a `safeTransferFrom` after the balance has been updated This function MAY throw to revert and reject the transfer Return of other amount than the magic value MUST result in the transaction being reverted Note: The token contract address is always the message sender
     * Handle the receipt of a single ERC1155 token type
     * @param _amount The amount of tokens being transferred
     * @param _data Additional data with no specified format
     * @param _from The address which previously owned the token
     * @param _id The id of the token being transferred
     * @param _operator The address which called the `safeTransferFrom` function
     */
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * An ERC1155-compliant smart contract MUST call this function on the token recipient contract, at the end of a `safeBatchTransferFrom` after the balances have been updated This function MAY throw to revert and reject the transfer Return of other amount than the magic value WILL result in the transaction being reverted Note: The token contract address is always the message sender
     * Handle the receipt of multiple ERC1155 token types
     * @param _amounts An array containing amounts of each token being transferred
     * @param _data Additional data with no specified format
     * @param _from The address which previously owned the token
     * @param _ids An array containing ids of each token being transferred
     * @param _operator The address which called the `safeBatchTransferFrom` function
     */
    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * An ERC1155-compliant smart contract MUST call this function on the token recipient contract, at the end of a `safeTransferFrom` after the balance has been updated This function MAY throw to revert and reject the transfer Return of other amount than the magic value MUST result in the transaction being reverted Note: The token contract address is always the message sender
   * Handle the receipt of a single ERC1155 token type
   * @param _amount The amount of tokens being transferred
   * @param _data Additional data with no specified format
   * @param _from The address which previously owned the token
   * @param _id The id of the token being transferred
   * @param _operator The address which called the `safeTransferFrom` function
   */
  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * An ERC1155-compliant smart contract MUST call this function on the token recipient contract, at the end of a `safeBatchTransferFrom` after the balances have been updated This function MAY throw to revert and reject the transfer Return of other amount than the magic value WILL result in the transaction being reverted Note: The token contract address is always the message sender
   * Handle the receipt of multiple ERC1155 token types
   * @param _amounts An array containing amounts of each token being transferred
   * @param _data Additional data with no specified format
   * @param _from The address which previously owned the token
   * @param _ids An array containing ids of each token being transferred
   * @param _operator The address which called the `safeBatchTransferFrom` function
   */
  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: (BigNumberish)[],
    _amounts: (BigNumberish)[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    /**
     * An ERC1155-compliant smart contract MUST call this function on the token recipient contract, at the end of a `safeTransferFrom` after the balance has been updated This function MAY throw to revert and reject the transfer Return of other amount than the magic value MUST result in the transaction being reverted Note: The token contract address is always the message sender
     * Handle the receipt of a single ERC1155 token type
     * @param _amount The amount of tokens being transferred
     * @param _data Additional data with no specified format
     * @param _from The address which previously owned the token
     * @param _id The id of the token being transferred
     * @param _operator The address which called the `safeTransferFrom` function
     */
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<string>;

    /**
     * An ERC1155-compliant smart contract MUST call this function on the token recipient contract, at the end of a `safeBatchTransferFrom` after the balances have been updated This function MAY throw to revert and reject the transfer Return of other amount than the magic value WILL result in the transaction being reverted Note: The token contract address is always the message sender
     * Handle the receipt of multiple ERC1155 token types
     * @param _amounts An array containing amounts of each token being transferred
     * @param _data Additional data with no specified format
     * @param _from The address which previously owned the token
     * @param _ids An array containing ids of each token being transferred
     * @param _operator The address which called the `safeBatchTransferFrom` function
     */
    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
  };
}