import { JsonRpcMiddleware } from '../../json-rpc-engine';
import { Json, JsonRpcParams } from '../../utils';
import { ConsoleLike } from '../utils';
/**
 * Create JSON-RPC middleware that logs warnings for deprecated RPC methods.
 *
 * @param log - The logging API to use.
 * @returns The JSON-RPC middleware.
 */
export declare function createRpcWarningMiddleware(log: ConsoleLike): JsonRpcMiddleware<JsonRpcParams, Json>;
