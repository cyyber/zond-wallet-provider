var j = Object.defineProperty;
var z = (e, r, t) => r in e ? j(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var m = (e, r, t) => (z(e, typeof r != "symbol" ? r + "" : r, t), t);
import { g as w } from "./_commonjsHelpers-C6fGbg64.js";
import { h as S, aH as C, ai as O, aO as E, aS as v } from "./versions-BzFJWa4R.js";
var T = g;
g.default = g;
g.stable = J;
g.stableStringify = J;
var y = "[...]", I = "[Circular]", o = [], d = [];
function A() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function g(e, r, t, i) {
  typeof i > "u" && (i = A()), R(e, "", 0, [], void 0, 0, i);
  var s;
  try {
    d.length === 0 ? s = JSON.stringify(e, r, t) : s = JSON.stringify(e, L(r), t);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; o.length !== 0; ) {
      var a = o.pop();
      a.length === 4 ? Object.defineProperty(a[0], a[1], a[3]) : a[0][a[1]] = a[2];
    }
  }
  return s;
}
function c(e, r, t, i) {
  var s = Object.getOwnPropertyDescriptor(i, t);
  s.get !== void 0 ? s.configurable ? (Object.defineProperty(i, t, { value: e }), o.push([i, t, r, s])) : d.push([r, t, e]) : (i[t] = e, o.push([i, t, r]));
}
function R(e, r, t, i, s, a, u) {
  a += 1;
  var n;
  if (typeof e == "object" && e !== null) {
    for (n = 0; n < i.length; n++)
      if (i[n] === e) {
        c(I, e, r, s);
        return;
      }
    if (typeof u.depthLimit < "u" && a > u.depthLimit) {
      c(y, e, r, s);
      return;
    }
    if (typeof u.edgesLimit < "u" && t + 1 > u.edgesLimit) {
      c(y, e, r, s);
      return;
    }
    if (i.push(e), Array.isArray(e))
      for (n = 0; n < e.length; n++)
        R(e[n], n, n, i, e, a, u);
    else {
      var f = Object.keys(e);
      for (n = 0; n < f.length; n++) {
        var h = f[n];
        R(e[h], h, n, i, e, a, u);
      }
    }
    i.pop();
  }
}
function x(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}
function J(e, r, t, i) {
  typeof i > "u" && (i = A());
  var s = b(e, "", 0, [], void 0, 0, i) || e, a;
  try {
    d.length === 0 ? a = JSON.stringify(s, r, t) : a = JSON.stringify(s, L(r), t);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; o.length !== 0; ) {
      var u = o.pop();
      u.length === 4 ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2];
    }
  }
  return a;
}
function b(e, r, t, i, s, a, u) {
  a += 1;
  var n;
  if (typeof e == "object" && e !== null) {
    for (n = 0; n < i.length; n++)
      if (i[n] === e) {
        c(I, e, r, s);
        return;
      }
    try {
      if (typeof e.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof u.depthLimit < "u" && a > u.depthLimit) {
      c(y, e, r, s);
      return;
    }
    if (typeof u.edgesLimit < "u" && t + 1 > u.edgesLimit) {
      c(y, e, r, s);
      return;
    }
    if (i.push(e), Array.isArray(e))
      for (n = 0; n < e.length; n++)
        b(e[n], n, n, i, e, a, u);
    else {
      var f = {}, h = Object.keys(e).sort(x);
      for (n = 0; n < h.length; n++) {
        var l = h[n];
        b(e[l], l, n, i, e, a, u), f[l] = e[l];
      }
      if (typeof s < "u")
        o.push([s, r, e]), s[r] = f;
      else
        return f;
    }
    i.pop();
  }
}
function L(e) {
  return e = typeof e < "u" ? e : function(r, t) {
    return t;
  }, function(r, t) {
    if (d.length > 0)
      for (var i = 0; i < d.length; i++) {
        var s = d[i];
        if (s[1] === r && s[0] === t) {
          t = s[2], d.splice(i, 1);
          break;
        }
      }
    return e.call(this, r, t);
  };
}
const F = /* @__PURE__ */ w(T), M = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
}, p = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
}, N = M.rpc.internal, D = "Unspecified error message. This is a bug, please report it.", q = {
  code: N,
  message: G(N)
}, V = "Unspecified server error.";
function G(e, r = D) {
  if (U(e)) {
    const t = e.toString();
    if (S(p, t))
      return p[t].message;
    if (K(e))
      return V;
  }
  return r;
}
function U(e) {
  return Number.isInteger(e);
}
function ee(e, { fallbackError: r = q, shouldIncludeStack: t = !0 } = {}) {
  if (!C(r))
    throw new Error(
      "Must provide fallback error with integer number code and string message."
    );
  const i = B(e, r);
  return t || delete i.stack, i;
}
function B(e, r) {
  if (e && typeof e == "object" && "serialize" in e && typeof e.serialize == "function")
    return e.serialize();
  if (C(e))
    return e;
  const t = _(e);
  return {
    ...r,
    data: { cause: t }
  };
}
function K(e) {
  return e >= -32099 && e <= -32e3;
}
function _(e) {
  return Array.isArray(e) ? e.map((r) => O(r) ? r : E(r) ? P(r) : null) : E(e) ? P(e) : O(e) ? e : null;
}
function P(e) {
  return Object.getOwnPropertyNames(e).reduce(
    (r, t) => {
      const i = e[t];
      return O(i) && (r[t] = i), r;
    },
    {}
  );
}
function H(e) {
  return E(e) && S(e, "cause") && E(e.cause);
}
class W extends Error {
  constructor(t, i, s) {
    var r = (...ie) => (super(...ie), // The `cause` definition can be removed when tsconfig lib and/or target have changed to >=es2022
    m(this, "cause"), m(this, "code"), m(this, "data"), this);
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!i || typeof i != "string")
      throw new Error('"message" must be a non-empty string.');
    H(s) ? (r(i, { cause: s.cause }), S(this, "cause") || Object.assign(this, { cause: s.cause })) : r(i), s !== void 0 && (this.data = s), this.code = t;
  }
  /**
   * Get the error as JSON-serializable object.
   *
   * @returns A plain object with all public class properties.
   */
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data, v(this.data) && (t.data.cause = _(this.data.cause))), this.stack && (t.stack = this.stack), t;
  }
  /**
   * Get a string representation of the serialized error, omitting any circular
   * references.
   *
   * @returns A string representation of the serialized error.
   */
  toString() {
    return F(this.serialize(), Q, 2);
  }
}
class re extends W {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   *
   * @param code - The JSON-RPC error code. Must be an integer in the
   * `1000 <= n <= 4999` range.
   * @param message - The JSON-RPC error message.
   * @param data - Optional data to include in the error.
   */
  constructor(r, t, i) {
    if (!X(r))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(r, t, i);
  }
}
function X(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function Q(e, r) {
  if (r !== "[Circular]")
    return r;
}
export {
  re as E,
  W as J,
  ee as a,
  H as d,
  M as e,
  G as g,
  _ as s
};
