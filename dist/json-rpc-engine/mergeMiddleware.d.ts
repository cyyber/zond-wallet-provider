import { Json, JsonRpcParams } from '../utils';
import { JsonRpcMiddleware } from './JsonRpcEngine';
/**
 * Takes a stack of middleware and joins them into a single middleware function.
 *
 * @param middlewareStack - The middleware stack to merge.
 * @returns The merged middleware function.
 */
export declare function mergeMiddleware(middlewareStack: JsonRpcMiddleware<JsonRpcParams, Json>[]): JsonRpcMiddleware<JsonRpcParams, Json>;
