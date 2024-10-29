import { b as c } from "./browser-BfYtJpNX.js";
import { c as w } from "./createStreamMiddleware-DZ-jQoSB.js";
function u(e) {
  if (!(e != null && e.engine))
    throw new Error("Missing engine parameter!");
  const { engine: r } = e, n = new c.Duplex({ objectMode: !0, read: () => {
  }, write: o });
  return r.on && r.on("notification", (i) => {
    n.push(i);
  }), n;
  function o(i, d, t) {
    r.handle(i, (f, a) => {
      n.push(a);
    }), t();
  }
}
export {
  u as createEngineStream,
  w as createStreamMiddleware
};
