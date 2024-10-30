import { b as w } from "./browser-BfYtJpNX.js";
import p from "./safeEventEmitter.js";
function g(n = {}) {
  const i = {}, s = new w.Duplex({
    objectMode: !0,
    read: () => {
    },
    write: f
  }), c = new p();
  return { events: c, middleware: (e, t, r, o) => {
    i[e.id] = { req: e, res: t, next: r, end: o }, d(e);
  }, stream: s };
  function d(e) {
    s.push(e);
  }
  function f(e, t, r) {
    let o = null;
    try {
      !e.id ? m(e) : u(e);
    } catch (a) {
      o = a;
    }
    r(o);
  }
  function u(e) {
    const t = e.id, r = i[t];
    if (!r) {
      console.warn(`StreamMiddleware - Unknown response id "${t}"`);
      return;
    }
    delete i[t], Object.assign(r.res, e), setTimeout(r.end);
  }
  function m(e) {
    n != null && n.retryOnMessage && e.method === n.retryOnMessage && l(), c.emit("notification", e);
  }
  function l() {
    Object.values(i).forEach(({ req: e, retryCount: t = 0 }) => {
      if (e.id) {
        if (t >= 3)
          throw new Error(
            `StreamMiddleware - Retry limit exceeded for request id "${e.id}"`
          );
        i[e.id].retryCount = t + 1, d(e);
      }
    });
  }
}
export {
  g as c
};
