import { e as a } from "./events-BBOErkdo.js";
function c(o, n, t) {
  try {
    Reflect.apply(o, n, t);
  } catch (e) {
    setTimeout(() => {
      throw e;
    });
  }
}
function h(o) {
  const n = o.length, t = new Array(n);
  for (let e = 0; e < n; e += 1)
    t[e] = o[e];
  return t;
}
class d extends a.EventEmitter {
  emit(n, ...t) {
    let e = n === "error";
    const f = this._events;
    if (f !== void 0)
      e = e && f.error === void 0;
    else if (!e)
      return !1;
    if (e) {
      let r;
      if (t.length > 0 && ([r] = t), r instanceof Error)
        throw r;
      const i = new Error(`Unhandled error.${r ? ` (${r.message})` : ""}`);
      throw i.context = r, i;
    }
    const s = f[n];
    if (s === void 0)
      return !1;
    if (typeof s == "function")
      c(s, this, t);
    else {
      const r = s.length, i = h(s);
      for (let l = 0; l < r; l += 1)
        c(i[l], this, t);
    }
    return !0;
  }
}
export {
  d as default
};
