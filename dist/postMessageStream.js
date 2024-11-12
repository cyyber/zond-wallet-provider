var E = Object.defineProperty;
var l = (t) => {
  throw TypeError(t);
};
var x = (t, s, e) => s in t ? E(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var n = (t, s, e) => x(t, typeof s != "symbol" ? s + "" : s, e), p = (t, s, e) => s.has(t) || l("Cannot " + e);
var h = (t, s, e) => (p(t, s, "read from private field"), e ? e.call(t) : s.get(t)), _ = (t, s, e) => s.has(t) ? l("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e), d = (t, s, e, i) => (p(t, s, "write to private field"), i ? i.call(t, e) : s.set(t, e), e);
import { b as D } from "./browser-BfYtJpNX.js";
import { aO as W, a as M } from "./versions-DCTBsmoI.js";
const u = () => {
}, c = "SYN", g = "ACK";
class m extends D.Duplex {
  constructor(e) {
    super({
      objectMode: !0,
      ...e
    });
    n(this, "_init");
    n(this, "_haveSyn");
    n(this, "_log");
    this._init = !1, this._haveSyn = !1, this._log = () => null;
  }
  /**
   * Must be called at end of child constructor to initiate
   * communication with other end.
   */
  _handshake() {
    this._write(c, null, u), this.cork();
  }
  _onData(e) {
    if (this._init)
      try {
        this.push(e), this._log(e, !1);
      } catch (i) {
        this.emit("error", i);
      }
    else e === c ? (this._haveSyn = !0, this._write(g, null, u)) : e === g && (this._init = !0, this._haveSyn || this._write(g, null, u), this.uncork());
  }
  _read() {
  }
  _write(e, i, o) {
    e !== g && e !== c && this._log(e, !0), this._postMessage(e), o();
  }
  _setLogger(e) {
    this._log = e;
  }
}
function y(t) {
  return W(t) && !!t.data && (typeof t.data == "number" || typeof t.data == "object" || typeof t.data == "string");
}
var r, a;
class P extends m {
  /**
   * Creates a stream for communicating with other streams across the extension
   * runtime.
   *
   * @param args - Options bag.
   * @param args.name - The name of the stream. Used to differentiate between
   * multiple streams sharing the same runtime.
   * @param args.target - The name of the stream to exchange messages with.
   */
  constructor({
    name: e,
    target: i,
    ...o
  }) {
    super(o);
    _(this, r);
    _(this, a);
    d(this, r, e), d(this, a, i), this._onMessage = this._onMessage.bind(this), this._getRuntime().onMessage.addListener(this._onMessage), this._handshake();
  }
  _postMessage(e) {
    this._getRuntime().sendMessage({
      target: h(this, a),
      data: e
    });
  }
  _onMessage(e) {
    !y(e) || e.target !== h(this, r) || this._onData(e.data);
  }
  _getRuntime() {
    var e, i;
    if ("chrome" in globalThis && typeof ((e = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : e.sendMessage) == "function")
      return chrome.runtime;
    if ("browser" in globalThis && typeof ((i = browser == null ? void 0 : browser.runtime) == null ? void 0 : i.sendMessage) == "function")
      return browser.runtime;
    throw new Error(
      "browser.runtime.sendMessage is not a function. This class should only be instantiated in a web extension."
    );
  }
  _destroy() {
    this._getRuntime().onMessage.removeListener(this._onMessage);
  }
}
r = new WeakMap(), a = new WeakMap();
var w;
const b = (w = Object.getOwnPropertyDescriptor(
  MessageEvent.prototype,
  "source"
)) == null ? void 0 : w.get;
M(b, "MessageEvent.prototype.source getter is not defined.");
var f;
const v = (f = Object.getOwnPropertyDescriptor(
  MessageEvent.prototype,
  "origin"
)) == null ? void 0 : f.get;
M(v, "MessageEvent.prototype.origin getter is not defined.");
class R extends m {
  /**
   * Creates a stream for communicating with other streams across the same or
   * different `window` objects.
   *
   * @param args - Options bag.
   * @param args.name - The name of the stream. Used to differentiate between
   * multiple streams sharing the same window object.
   * @param args.target - The name of the stream to exchange messages with.
   * @param args.targetOrigin - The origin of the target. Defaults to
   * `location.origin`, '*' is permitted.
   * @param args.targetWindow - The window object of the target stream. Defaults
   * to `window`.
   */
  constructor({
    name: e,
    target: i,
    targetOrigin: o = location.origin,
    targetWindow: O = window,
    ...S
  }) {
    super(S);
    n(this, "_name");
    n(this, "_target");
    n(this, "_targetOrigin");
    n(this, "_targetWindow");
    if (typeof window > "u" || typeof window.postMessage != "function")
      throw new Error(
        "window.postMessage is not a function. This class should only be instantiated in a Window."
      );
    this._name = e, this._target = i, this._targetOrigin = o, this._targetWindow = O, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage, !1), this._handshake();
  }
  _postMessage(e) {
    this._targetWindow.postMessage(
      {
        target: this._target,
        data: e
      },
      this._targetOrigin
    );
  }
  _onMessage(e) {
    const i = e.data;
    this._targetOrigin !== "*" && v.call(e) !== this._targetOrigin || b.call(e) !== this._targetWindow || !y(i) || i.target !== this._name || this._onData(i.data);
  }
  _destroy() {
    window.removeEventListener("message", this._onMessage, !1);
  }
}
export {
  m as BasePostMessageStream,
  P as BrowserRuntimePostMessageStream,
  R as WindowPostMessageStream
};
