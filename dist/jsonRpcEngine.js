import { J as d } from "./JsonRpcEngine-DYUs88HE.js";
import { c as h, g as x } from "./JsonRpcEngine-DYUs88HE.js";
function m(a) {
  return async (e, t, o, l) => {
    let r;
    const c = new Promise((n) => {
      r = n;
    });
    let i = null, s = !1;
    const u = async () => (s = !0, o((n) => {
      i = n, r();
    }), c);
    try {
      await a(e, t, u), s ? (await c, i(null)) : l(null);
    } catch (n) {
      i ? i(n) : l(n);
    }
  };
}
function w(a) {
  return (e, t, o, l) => {
    const r = a[e.method];
    return r === void 0 ? o() : typeof r == "function" ? r(e, t, o, l) : (t.result = r, l());
  };
}
function p(a) {
  const e = new d();
  return a.forEach((t) => e.push(t)), e.asMiddleware();
}
export {
  d as JsonRpcEngine,
  m as createAsyncMiddleware,
  h as createIdRemapMiddleware,
  w as createScaffoldMiddleware,
  x as getUniqueId,
  p as mergeMiddleware
};
