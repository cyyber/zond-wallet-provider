var x = (s, u, r) => {
  if (!u.has(s))
    throw TypeError("Cannot " + r);
};
var y = (s, u, r) => (x(s, u, "read from private field"), r ? r.call(s) : u.get(s)), c = (s, u, r) => {
  if (u.has(s))
    throw TypeError("Cannot add the same private member more than once");
  u instanceof WeakSet ? u.add(s) : u.set(s, r);
}, j = (s, u, r, t) => (x(s, u, "write to private field"), t ? t.call(s, r) : u.set(s, r), r);
var a = (s, u, r) => (x(s, u, "access private method"), r);
import { J as l, e as v, a as F } from "./classes-DcssvZ8Z.js";
import W from "./safeEventEmitter.js";
import { i as G, h as U } from "./versions-BzFJWa4R.js";
const Y = 4294967295;
let D = Math.floor(Math.random() * Y);
function Z() {
  return D = (D + 1) % Y, D;
}
function tr() {
  return (s, u, r, t) => {
    const e = s.id, i = Z();
    s.id = i, u.id = i, r((n) => {
      s.id = e, u.id = e, n();
    });
  };
}
const b = "This engine is destroyed and can no longer be used.";
var g, w, m, E, H, A, O, $, J, P, K, C, T, R, L, M, I, S, Q;
const h = class h extends W {
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
    /**
     * Throws an error if this engine is destroyed.
     */
    c(this, E);
    /**
     * Handles a batch of JSON-RPC requests, either in `async` or callback
     * fashion.
     *
     * @param requests - The request objects to process.
     * @param callback - The completion callback.
     * @returns The array of responses, or nothing if a callback was specified.
     */
    c(this, A);
    /**
     * Ensures that the request / notification object is valid, processes it, and
     * passes any error and response object to the given callback.
     *
     * Does not reject.
     *
     * @param callerReq - The request object from the caller.
     * @param callback - The callback function.
     * @returns Nothing.
     */
    c(this, $);
    /**
     * Indicating whether this engine is destroyed or not.
     */
    c(this, g, !1);
    c(this, w, void 0);
    c(this, m, void 0);
    j(this, w, []), j(this, m, r);
  }
  /**
   * Calls the `destroy()` function of any middleware with that property, clears
   * the middleware array, and marks this engine as destroyed. A destroyed
   * engine cannot be used.
   */
  destroy() {
    y(this, w).forEach(
      (r) => {
        // `in` walks the prototype chain, which is probably the desired
        // behavior here.
        "destroy" in r && typeof r.destroy == "function" && r.destroy();
      }
    ), j(this, w, []), j(this, g, !0);
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(r) {
    a(this, E, H).call(this), y(this, w).push(r);
  }
  handle(r, t) {
    if (a(this, E, H).call(this), t && typeof t != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(r) ? t ? a(this, A, O).call(this, r, t) : a(this, A, O).call(this, r) : t ? a(this, $, J).call(this, r, t) : this._promiseHandle(r);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return a(this, E, H).call(this), async (r, t, e, i) => {
      var n, d;
      try {
        const [o, f, p] = await a(n = h, C, T).call(n, r, t, y(this, w));
        return f ? (await a(d = h, M, I).call(d, p), i(o)) : e(async (z) => {
          var B;
          try {
            await a(B = h, M, I).call(B, p);
          } catch (V) {
            return z(V);
          }
          return z();
        });
      } catch (o) {
        return i(o);
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
      a(this, $, J).call(this, r, (i, n) => {
        i && n === void 0 ? e(i) : t(n);
      }).catch(e);
    });
  }
};
g = new WeakMap(), w = new WeakMap(), m = new WeakMap(), E = new WeakSet(), H = function() {
  if (y(this, g))
    throw new Error(b);
}, A = new WeakSet(), O = async function(r, t) {
  try {
    if (r.length === 0) {
      const i = [
        {
          id: null,
          jsonrpc: "2.0",
          error: new l(
            v.rpc.invalidRequest,
            "Request batch must contain plain objects. Received an empty array"
          )
        }
      ];
      return t ? t(null, i) : i;
    }
    const e = (await Promise.all(
      // 1. Begin executing each request in the order received
      r.map(this._promiseHandle.bind(this))
    )).filter(
      // Filter out any notification responses.
      (i) => i !== void 0
    );
    return t ? t(null, e) : e;
  } catch (e) {
    if (t)
      return t(e);
    throw e;
  }
}, $ = new WeakSet(), J = async function(r, t) {
  var d;
  if (!r || Array.isArray(r) || typeof r != "object") {
    const o = new l(
      v.rpc.invalidRequest,
      `Requests must be plain objects. Received: ${typeof r}`,
      { request: r }
    );
    return t(o, { id: null, jsonrpc: "2.0", error: o });
  }
  if (typeof r.method != "string") {
    const o = new l(
      v.rpc.invalidRequest,
      `Must specify a string method. Received: ${typeof r.method}`,
      { request: r }
    );
    return y(this, m) && !G(r) ? t(null) : t(o, {
      // Typecast: This could be a notification, but we want to access the
      // `id` even if it doesn't exist.
      id: r.id ?? null,
      jsonrpc: "2.0",
      error: o
    });
  }
  if (y(this, m) && !G(r)) {
    try {
      await y(this, m).call(this, r);
    } catch (o) {
      return t(o);
    }
    return t(null);
  }
  let e = null;
  const i = { ...r }, n = {
    id: i.id,
    jsonrpc: i.jsonrpc
  };
  try {
    await a(d = h, P, K).call(d, i, n, y(this, w));
  } catch (o) {
    e = o;
  }
  return e && (delete n.result, n.error || (n.error = F(e))), t(e, n);
}, P = new WeakSet(), K = async function(r, t, e) {
  var o, f, p;
  const [i, n, d] = await a(o = h, C, T).call(o, r, t, e);
  if (a(f = h, S, Q).call(f, r, t, n), await a(p = h, M, I).call(p, d), i)
    throw i;
}, C = new WeakSet(), T = async function(r, t, e) {
  var o;
  const i = [];
  let n = null, d = !1;
  for (const f of e)
    if ([n, d] = await a(o = h, R, L).call(o, r, t, f, i), d)
      break;
  return [n, d, i.reverse()];
}, R = new WeakSet(), L = async function(r, t, e, i) {
  return new Promise((n) => {
    const d = (f) => {
      const p = f || t.error;
      p && (t.error = F(p)), n([p, !0]);
    }, o = (f) => {
      t.error ? d(t.error) : (f && (typeof f != "function" && d(
        new l(
          v.rpc.internal,
          `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof f}" for request:
${N(
            r
          )}`,
          { request: r }
        )
      ), i.push(f)), n([null, !1]));
    };
    try {
      e(r, t, o, d);
    } catch (f) {
      d(f);
    }
  });
}, M = new WeakSet(), I = async function(r) {
  for (const t of r)
    await new Promise((e, i) => {
      t((n) => n ? i(n) : e());
    });
}, S = new WeakSet(), Q = function(r, t, e) {
  if (!U(t, "result") && !U(t, "error"))
    throw new l(
      v.rpc.internal,
      `JsonRpcEngine: Response has no error or result for request:
${N(
        r
      )}`,
      { request: r }
    );
  if (!e)
    throw new l(
      v.rpc.internal,
      `JsonRpcEngine: Nothing ended request:
${N(r)}`,
      { request: r }
    );
}, /**
 * For the given request and response, runs all middleware and their return
 * handlers, if any, and ensures that internal request processing semantics
 * are satisfied.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param middlewares - The stack of middleware functions.
 */
c(h, P), /**
 * Serially executes the given stack of middleware.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param middlewares - The stack of middleware functions to execute.
 * @returns An array of any error encountered during middleware execution,
 * a boolean indicating whether the request was completed, and an array of
 * middleware-defined return handlers.
 */
c(h, C), /**
 * Runs an individual middleware function.
 *
 * @param request - The request object.
 * @param response - The response object.
 * @param middleware - The middleware function to execute.
 * @param returnHandlers - The return handlers array for the current request.
 * @returns An array of any error encountered during middleware exection,
 * and a boolean indicating whether the request should end.
 */
c(h, R), /**
 * Serially executes array of return handlers. The request and response are
 * assumed to be in their scope.
 *
 * @param handlers - The return handlers to execute.
 */
c(h, M), /**
 * Throws an error if the response has neither a result nor an error, or if
 * the "isComplete" flag is falsy.
 *
 * @param request - The request object.
 * @param response - The response object.
 * @param isComplete - Boolean from {@link JsonRpcEngine.#runAllMiddleware}
 * indicating whether a middleware ended the request.
 */
c(h, S);
let X = h;
function N(s) {
  return JSON.stringify(s, null, 2);
}
export {
  X as J,
  tr as c,
  Z as g
};
