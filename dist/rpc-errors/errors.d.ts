import { JsonRpcError, EthereumProviderError } from './classes';
import { OptionalDataWithOptionalCause } from './utils';
type EthereumErrorOptions<Data extends OptionalDataWithOptionalCause> = {
    message?: string;
    data?: Data;
};
type ServerErrorOptions<Data extends OptionalDataWithOptionalCause> = {
    code: number;
} & EthereumErrorOptions<Data>;
type CustomErrorArg<Data extends OptionalDataWithOptionalCause> = ServerErrorOptions<Data>;
type JsonRpcErrorsArg<Data extends OptionalDataWithOptionalCause> = EthereumErrorOptions<Data> | string;
export declare const rpcErrors: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly parse: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly invalidRequest: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly invalidParams: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly methodNotFound: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly internal: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     *
     * @param opts - The error options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly server: <Data extends OptionalDataWithOptionalCause>(opts: ServerErrorOptions<Data>) => JsonRpcError<Data>;
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly invalidInput: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly resourceNotFound: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly resourceUnavailable: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly transactionRejected: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly methodNotSupported: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link JsonRpcError} class.
     */
    readonly limitExceeded: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => JsonRpcError<Data>;
};
export declare const providerErrors: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link EthereumProviderError} class.
     */
    readonly userRejectedRequest: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => EthereumProviderError<Data>;
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link EthereumProviderError} class.
     */
    readonly unauthorized: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => EthereumProviderError<Data>;
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link EthereumProviderError} class.
     */
    readonly unsupportedMethod: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => EthereumProviderError<Data>;
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link EthereumProviderError} class.
     */
    readonly disconnected: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => EthereumProviderError<Data>;
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     *
     * @param arg - The error message or options bag.
     * @returns An instance of the {@link EthereumProviderError} class.
     */
    readonly chainDisconnected: <Data extends OptionalDataWithOptionalCause>(arg?: JsonRpcErrorsArg<Data>) => EthereumProviderError<Data>;
    /**
     * Get a custom Ethereum Provider error.
     *
     * @param opts - The error options bag.
     * @returns An instance of the {@link EthereumProviderError} class.
     */
    readonly custom: <Data extends OptionalDataWithOptionalCause>(opts: CustomErrorArg<Data>) => EthereumProviderError<Data>;
};
export {};
