import { Duplex } from 'readable-stream';
import { EIP6963ProviderInfo } from './EIP6963';
import { ZondWalletInpageProviderOptions, ZondWalletInpageProvider } from './ZondWalletInpageProvider';
type InitializeProviderOptions = {
    /**
     * The stream used to connect to the wallet.
     */
    connectionStream: Duplex;
    /**
     * The EIP-6963 provider info that should be announced if set.
     */
    providerInfo: EIP6963ProviderInfo;
} & ZondWalletInpageProviderOptions;
/**
 * Initializes a ZondWalletInpageProvider.
 *
 * @param options - An options bag.
 * @param options.connectionStream - A Node.js stream.
 * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
 * @param options.logger - The logging API to use. Default: `console`.
 * @param options.maxEventListeners - The maximum number of event listeners.
 * @param options.providerInfo - The EIP-6963 provider info that should be announced if set.
 * @param options.shouldSendMetadata - Whether the provider should send page metadata.
 * @returns The initialized provider (whether set or not).
 */
export declare function initializeProvider({ connectionStream, jsonRpcStreamName, logger, maxEventListeners, providerInfo, }: InitializeProviderOptions): ZondWalletInpageProvider;
export {};
