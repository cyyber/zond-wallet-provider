var D = (s) => {
  throw TypeError(s);
};
var J = (s, u, r) => u.has(s) || D("Cannot " + r);
var w = (s, u, r) => (J(s, u, "read from private field"), r ? r.call(s) : u.get(s)), E = (s, u, r) => u.has(s) ? D("Cannot add the same private member more than once") : u instanceof WeakSet ? u.add(s) : u.set(s, r), M = (s, u, r, t) => (J(s, u, "write to private field"), t ? t.call(s, r) : u.set(s, r), r), a = (s, u, r) => (J(s, u, "access private method"), r);
import { J as g, e as v, a as N } from "./classes-Cj8AOate.js";
import Y from "./safeEventEmitter.js";
import { i as O, h as T } from "./versions-DCTBsmoI.js";
const B = 4294967295;
let $ = Math.floor(Math.random() * B);
function K() {
  return $ = ($ + 1) % B, $;
}
function _() {
  return (s, u, r, t) => {
    const e = s.id, n = K();
    s.id = n, u.id = n, r((i) => {
      s.id = e, u.id = e, i();
    });
  };
}
const L = "This engine is destroyed and can no longer be used.";
var R, m, l, c, j, H, I, h, F, P, G, A, U;
const p = class p extends Y {
  /**
   * Constructs a {@link JsonRpcEngine} instance.
   *
   * @param options - Options bag.
   * @param options.notificationHandler - A function for handling JSON-RPC
   * notifications. A JSON-RPC notification is defined as a JSON-RPC request
   * without an `id` property. If this option is _not_ provided, notifications
   * will be treated the same as requests. If this option _is_ provided,
   * notifications will be passed to the handler function without touching
   * the engine's middleware stack. This function should not throw or reject.
   */
  constructor({ notificationHandler: r } = {}) {
    super();
    E(this, c);
    /**
     * Indicating whether this engine is destroyed or not.
     */
    E(this, R, !1);
    E(this, m);
    E(this, l);
    M(this, m, []), M(this, l, r);
  }
  /**
   * Calls the `destroy()` function of any middleware with that property, clears
   * the middleware array, and marks this engine as destroyed. A destroyed
   * engine cannot be used.
   */
  destroy() {
    w(this, m).forEach(
      (r) => {
        // `in` walks the prototype chain, which is probably the desired
        // behavior here.
        "destroy" in r && typeof r.destroy == "function" && r.destroy();
      }
    ), M(this, m, []), M(this, R, !0);
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(r) {
    a(this, c, j).call(this), w(this, m).push(r);
  }
  handle(r, t) {
    if (a(this, c, j).call(this), t && typeof t != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(r) ? t ? a(this, c, H).call(this, r, t) : a(this, c, H).call(this, r) : t ? a(this, c, I).call(this, r, t) : this._promiseHandle(r);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return a(this, c, j).call(this), async (r, t, e, n) => {
      var i, d;
      try {
        const [o, f, y] = await a(i = p, h, P).call(i, r, t, w(this, m));
        return f ? (await a(d = p, h, A).call(d, y), n(o)) : e(async (S) => {
          var x;
          try {
            await a(x = p, h, A).call(x, y);
          } catch (X) {
            return S(X);
          }
          return S();
        });
      } catch (o) {
        return n(o);
      }
    };
  }
  /**
   * A promise-wrapped _handle.
   *
   * @param request - The JSON-RPC request.
   * @returns The JSON-RPC response.
   */
  // This function is used in tests, so we cannot easily change it to use the
  // hash syntax.
  // eslint-disable-next-line no-restricted-syntax
  async _promiseHandle(r) {
    return new Promise((t, e) => {
      a(this, c, I).call(this, r, (n, i) => {
        n && i === void 0 ? e(n) : t(i);
      }).catch(e);
    });
  }
};
R = new WeakMap(), m = new WeakMap(), l = new WeakMap(), c = new WeakSet(), /**
 * Throws an error if this engine is destroyed.
 */
j = function() {
  if (w(this, R))
    throw new Error(L);
}, H = async function(r, t) {
  try {
    if (r.length === 0) {
      const n = [
        {
          id: null,
          jsonrpc: "2.0",
          error: new g(
            v.rpc.invalidRequest,
            "Request batch must contain plain objects. Received an empty array"
          )
        }
      ];
      return t ? t(null, n) : n;
    }
    const e = (await Promise.all(
      // 1. Begin executing each request in the order received
      r.map(this._promiseHandle.bind(this))
    )).filter(
      // Filter out any notification responses.
      (n) => n !== void 0
    );
    return t ? t(null, e) : e;
  } catch (e) {
    if (t)
      return t(e);
    throw e;
  }
}, I = async function(r, t) {
  var d;
  if (!r || Array.isArray(r) || typeof r != "object") {
    const o = new g(
      v.rpc.invalidRequest,
      `Requests must be plain objects. Received: ${typeof r}`,
      { request: r }
    );
    return t(o, { id: null, jsonrpc: "2.0", error: o });
  }
  if (typeof r.method != "string") {
    const o = new g(
      v.rpc.invalidRequest,
      `Must specify a string method. Received: ${typeof r.method}`,
      { request: r }
    );
    return w(this, l) && !O(r) ? t(null) : t(o, {
      // Typecast: This could be a notification, but we want to access the
      // `id` even if it doesn't exist.
      id: r.id ?? null,
      jsonrpc: "2.0",
      error: o
    });
  }
  if (w(this, l) && !O(r)) {
    try {
      await w(this, l).call(this, r);
    } catch (o) {
      return t(o);
    }
    return t(null);
  }
  let e = null;
  const n = { ...r }, i = {
    id: n.id,
    jsonrpc: n.jsonrpc
  };
  try {
    await a(d = p, h, F).call(d, n, i, w(this, m));
  } catch (o) {
    e = o;
  }
  return e && (delete i.result, i.error || (i.error = N(e))), t(e, i);
}, h = new WeakSet(), F = async function(r, t, e) {
  var o, f, y;
  const [n, i, d] = await a(o = p, h, P).call(o, r, t, e);
  if (a(f = p, h, U).call(f, r, t, i), await a(y = p, h, A).call(y, d), n)
    throw n;
}, P = async function(r, t, e) {
  var o;
  const n = [];
  let i = null, d = !1;
  for (const f of e)
    if ([i, d] = await a(o = p, h, G).call(o, r, t, f, n), d)
      break;
  return [i, d, n.reverse()];
}, G = async function(r, t, e, n) {
  return new Promise((i) => {
    const d = (f) => {
      const y = f || t.error;
      y && (t.error = N(y)), i([y, !0]);
    }, o = (f) => {
      t.error ? d(t.error) : (f && (typeof f != "function" && d(
        new g(
          v.rpc.internal,
          `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof f}" for request:
${C(
            r
          )}`,
          { request: r }
        )
      ), n.push(f)), i([null, !1]));
    };
    try {
      e(r, t, o, d);
    } catch (f) {
      d(f);
    }
  });
}, A = async function(r) {
  for (const t of r)
    await new Promise((e, n) => {
      t((i) => i ? n(i) : e());
    });
}, U = function(r, t, e) {
  if (!T(t, "result") && !T(t, "error"))
    throw new g(
      v.rpc.internal,
      `JsonRpcEngine: Response has no error or result for request:
${C(
        r
      )}`,
      { request: r }
    );
  if (!e)
    throw new g(
      v.rpc.internal,
      `JsonRpcEngine: Nothing ended request:
${C(r)}`,
      { request: r }
    );
}, E(p, h);
let z = p;
function C(s) {
  return JSON.stringify(s, null, 2);
}
export {
  z as J,
  _ as c,
  K as g
};
