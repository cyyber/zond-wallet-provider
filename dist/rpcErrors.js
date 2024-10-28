import { e as r, E as a, J as u, g as d } from "./classes-DcssvZ8Z.js";
import { d as l, s as E, a as g } from "./classes-DcssvZ8Z.js";
const m = {
  /**
   * Get a JSON RPC 2.0 Parse (-32700) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  parse: (e) => o(r.rpc.parse, e),
  /**
   * Get a JSON RPC 2.0 Invalid Request (-32600) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidRequest: (e) => o(r.rpc.invalidRequest, e),
  /**
   * Get a JSON RPC 2.0 Invalid Params (-32602) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidParams: (e) => o(r.rpc.invalidParams, e),
  /**
   * Get a JSON RPC 2.0 Method Not Found (-32601) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotFound: (e) => o(r.rpc.methodNotFound, e),
  /**
   * Get a JSON RPC 2.0 Internal (-32603) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  internal: (e) => o(r.rpc.internal, e),
  /**
   * Get a JSON RPC 2.0 Server error.
   * Permits integer error codes in the [ -32099 <= -32005 ] range.
   * Codes -32000 through -32004 are reserved by EIP-1474.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  server: (e) => {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw new Error(
        "Ethereum RPC Server errors must provide single object argument."
      );
    const { code: t } = e;
    if (!Number.isInteger(t) || t > -32005 || t < -32099)
      throw new Error(
        '"code" must be an integer such that: -32099 <= code <= -32005'
      );
    return o(t, e);
  },
  /**
   * Get an Ethereum JSON RPC Invalid Input (-32000) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidInput: (e) => o(r.rpc.invalidInput, e),
  /**
   * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceNotFound: (e) => o(r.rpc.resourceNotFound, e),
  /**
   * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceUnavailable: (e) => o(r.rpc.resourceUnavailable, e),
  /**
   * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  transactionRejected: (e) => o(r.rpc.transactionRejected, e),
  /**
   * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotSupported: (e) => o(r.rpc.methodNotSupported, e),
  /**
   * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  limitExceeded: (e) => o(r.rpc.limitExceeded, e)
}, v = {
  /**
   * Get an Ethereum Provider User Rejected Request (4001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  userRejectedRequest: (e) => i(r.provider.userRejectedRequest, e),
  /**
   * Get an Ethereum Provider Unauthorized (4100) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unauthorized: (e) => i(r.provider.unauthorized, e),
  /**
   * Get an Ethereum Provider Unsupported Method (4200) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unsupportedMethod: (e) => i(r.provider.unsupportedMethod, e),
  /**
   * Get an Ethereum Provider Not Connected (4900) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  disconnected: (e) => i(r.provider.disconnected, e),
  /**
   * Get an Ethereum Provider Chain Not Connected (4901) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  chainDisconnected: (e) => i(r.provider.chainDisconnected, e),
  /**
   * Get a custom Ethereum Provider error.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  custom: (e) => {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw new Error(
        "Ethereum Provider custom errors must provide single object argument."
      );
    const { code: t, message: n, data: s } = e;
    if (!n || typeof n != "string")
      throw new Error('"message" must be a nonempty string');
    return new a(t, n, s);
  }
};
function o(e, t) {
  const [n, s] = c(t);
  return new u(e, n ?? d(e), s);
}
function i(e, t) {
  const [n, s] = c(t);
  return new a(
    e,
    n ?? d(e),
    s
  );
}
function c(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: n } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t ?? void 0, n];
    }
  }
  return [];
}
export {
  a as EthereumProviderError,
  u as JsonRpcError,
  l as dataHasCause,
  r as errorCodes,
  d as getMessageFromCode,
  v as providerErrors,
  m as rpcErrors,
  E as serializeCause,
  g as serializeError
};
