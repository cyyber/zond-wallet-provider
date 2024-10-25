import { Json, JsonRpcNotification, JsonRpcRequest, JsonRpcResponse } from '../../../utils';
/**
 * A mock WebExtension Port for multiplexed JSON-RPC messages, used to
 * represent the connection between an extension and the ZondWallet browser
 * extension.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port})
 */
export declare class MockPort {
    #private;
    /**
     * Construct a mock WebExtension Port.
     *
     * @param onWrite - Called when a message is sent to the port. Messages sent
     * from another extension to the wallet are passed to this function.
     */
    constructor(onWrite?: (name: string, data: JsonRpcRequest) => void);
    disconnect(): void;
    /**
     * Send a message to the port. This is called to send a message from another
     * extension to the wallet.
     *
     * @param message - The message being sent to the port.
     * @param message.name - The name of the substream this message is included
     * in.
     * @param message.data - The JSON-RPC request.
     */
    postMessage(message: {
        name: string;
        data: JsonRpcRequest;
    }): void;
    get onDisconnect(): {
        addListener: (listener: () => void) => void;
    };
    get onMessage(): {
        addListener: (listener: (message: {
            name: string;
            data: JsonRpcRequest;
        }) => void) => void;
    };
    /**
     * Send a reply to the provider from the wallet.
     *
     * @param substream - The substream this reply is included in.
     * @param message - The JSON RPC response.
     */
    reply(substream: string, message: JsonRpcResponse<Json>): void;
    /**
     * Send a notification to the provider from the wallet.
     *
     * @param substream - The substream this notification is included in.
     * @param message - The JSoN RPC notification.
     */
    notify(substream: string, message: JsonRpcNotification): void;
}
