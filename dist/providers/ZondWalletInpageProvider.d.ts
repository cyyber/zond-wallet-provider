import { Duplex } from 'readable-stream';
import { JsonRpcRequest } from '../utils';
import { StreamProviderOptions, AbstractStreamProvider } from './StreamProvider';
export type SendSyncJsonRpcRequest = {
    method: "zond_accounts" | "zond_coinbase" | "zond_uninstallFilter" | "net_version";
} & JsonRpcRequest;
export type ZondWalletInpageProviderOptions = {
    /**
     * Whether the provider should send page metadata.
     */
    shouldSendMetadata?: boolean;
    jsonRpcStreamName?: string | undefined;
} & Partial<Omit<StreamProviderOptions, "rpcMiddleware">>;
export declare class ZondWalletInpageProvider extends AbstractStreamProvider {
    #private;
    /**
     * Indicating that this provider is a ZondWallet provider.
     */
    readonly isZondWallet: true;
    /**
     * Creates a new `ZondWalletInpageProvider`.
     *
     * @param connectionStream - A Node.js duplex stream.
     * @param options - An options bag.
     * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
     * Default: `zond-wallet-provider`.
     * @param options.logger - The logging API to use. Default: `console`.
     * @param options.maxEventListeners - The maximum number of event
     * listeners. Default: 100.
     * @param options.shouldSendMetadata - Whether the provider should
     * send page metadata. Default: `true`.
     */
    constructor(connectionStream: Duplex, { jsonRpcStreamName, logger, maxEventListeners, }?: ZondWalletInpageProviderOptions);
    get chainId(): string | null;
    get networkVersion(): string | null;
    get selectedAddress(): string | null;
    /**
     * When the provider becomes disconnected, updates internal state and emits
     * required events. Idempotent with respect to the isRecoverable parameter.
     *
     * Error codes per the CloseEvent status codes as required by EIP-1193:
     * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes.
     *
     * @param isRecoverable - Whether the disconnection is recoverable.
     * @param errorMessage - A custom error message.
     * @fires BaseProvider#disconnect - If the disconnection is not recoverable.
     */
    protected _handleDisconnect(isRecoverable: boolean, errorMessage?: string): void;
    /**
     * Upon receipt of a new chainId and networkVersion, emits corresponding
     * events and sets relevant public state. Does nothing if neither the chainId
     * nor the networkVersion are different from existing values.
     *
     * @fires ZondWalletInpageProvider#networkChanged
     * @param networkInfo - An object with network info.
     * @param networkInfo.chainId - The latest chain ID.
     * @param networkInfo.networkVersion - The latest network ID.
     */
    protected _handleChainChanged({ chainId, networkVersion, }?: {
        chainId?: string;
        networkVersion?: string;
    }): void;
}
