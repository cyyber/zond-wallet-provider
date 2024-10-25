import { Duplex } from 'readable-stream';
import { JsonRpcMiddleware } from '../json-rpc-engine';
import { default as SafeEventEmitter } from '../safe-event-emitter';
import { JsonRpcParams } from '../utils';
type Options = {
    retryOnMessage?: string;
};
/**
 * Creates a JsonRpcEngine middleware with an associated Duplex stream and
 * EventEmitter. The middleware, and by extension stream, assume that middleware
 * parameters are properly formatted. No runtime type checking or validation is
 * performed.
 *
 * @param options - Configuration options for middleware.
 * @returns The event emitter, middleware, and stream.
 */
export default function createStreamMiddleware(options?: Options): {
    events: SafeEventEmitter;
    middleware: JsonRpcMiddleware<JsonRpcParams, JsonRpcParams>;
    stream: Duplex;
};
export {};
