var v = Object.defineProperty;
var f = (t) => {
  throw TypeError(t);
};
var O = (t, s, e) => s in t ? v(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var n = (t, s, e) => O(t, typeof s != "symbol" ? s + "" : s, e), w = (t, s, e) => s.has(t) || f("Cannot " + e);
var d = (t, s, e) => (w(t, s, "read from private field"), e ? e.call(t) : s.get(t)), u = (t, s, e) => s.has(t) ? f("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e), c = (t, s, e, i) => (w(t, s, "write to private field"), i ? i.call(t, e) : s.set(t, e), e);
import { b as D } from "./browser-BfYtJpNX.js";
import { aO as x, a as b } from "./versions-DCTBsmoI.js";
const l = () => {
}, p = "SYN", h = "ACK";
class g extends D.Duplex {
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
    this._write(p, null, l), this.cork();
  }
  _onData(e) {
    if (this._init)
      try {
        this.push(e), this._log(e, !1);
      } catch (i) {
        this.emit("error", i);
      }
    else e === p ? (this._haveSyn = !0, this._write(h, null, l)) : e === h && (this._init = !0, this._haveSyn || this._write(h, null, l), this.uncork());
  }
  _read() {
  }
  _write(e, i, o) {
    e !== h && e !== p && this._log(e, !0), this._postMessage(e), o();
  }
  _setLogger(e) {
    this._log = e;
  }
}
const y = "dedicatedWorker";
function _(t) {
  return x(t) && !!t.data && (typeof t.data == "number" || typeof t.data == "object" || typeof t.data == "string");
}
var r, a;
class T extends g {
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
    u(this, r);
    u(this, a);
    c(this, r, e), c(this, a, i), this._onMessage = this._onMessage.bind(this), this._getRuntime().onMessage.addListener(this._onMessage), this._handshake();
  }
  _postMessage(e) {
    this._getRuntime().sendMessage({
      target: d(this, a),
      data: e
    });
  }
  _onMessage(e) {
    !_(e) || e.target !== d(this, r) || this._onData(e.data);
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
class j extends g {
  /**
   * Creates a stream for communicating with a dedicated `WebWorker`.
   *
   * @param args - Options bag.
   * @param args.worker - The Web Worker to exchange messages with. The worker
   * must instantiate a `WebWorkerPostMessageStream`.
   */
  constructor({ worker: e, ...i }) {
    super(i);
    n(this, "_target");
    n(this, "_worker");
    this._target = y, this._worker = e, this._worker.onmessage = this._onMessage.bind(this), this._handshake();
  }
  _postMessage(e) {
    this._worker.postMessage({
      target: this._target,
      data: e
    });
  }
  _onMessage(e) {
    const i = e.data;
    _(i) && this._onData(i.data);
  }
  _destroy() {
    this._worker.onmessage = null, this._worker = null;
  }
}
class A extends g {
  constructor(e = {}) {
    if (typeof self > "u" || // @ts-expect-error: No types for WorkerGlobalScope
    typeof WorkerGlobalScope > "u")
      throw new Error(
        "WorkerGlobalScope not found. This class should only be instantiated in a WebWorker."
      );
    super(e);
    n(this, "_name");
    this._name = y, self.addEventListener("message", this._onMessage.bind(this)), this._handshake();
  }
  _postMessage(e) {
    self.postMessage({ data: e });
  }
  _onMessage(e) {
    const i = e.data;
    !_(i) || i.target !== this._name || this._onData(i.data);
  }
  // worker stream lifecycle assumed to be coterminous with global scope
  _destroy() {
  }
}
var M;
const k = (M = Object.getOwnPropertyDescriptor(
  MessageEvent.prototype,
  "source"
)) == null ? void 0 : M.get;
b(k, "MessageEvent.prototype.source getter is not defined.");
var m;
const W = (m = Object.getOwnPropertyDescriptor(
  MessageEvent.prototype,
  "origin"
)) == null ? void 0 : m.get;
b(W, "MessageEvent.prototype.origin getter is not defined.");
class B extends g {
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
    targetWindow: E = window,
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
    this._name = e, this._target = i, this._targetOrigin = o, this._targetWindow = E, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage, !1), this._handshake();
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
    this._targetOrigin !== "*" && W.call(e) !== this._targetOrigin || k.call(e) !== this._targetWindow || !_(i) || i.target !== this._name || this._onData(i.data);
  }
  _destroy() {
    window.removeEventListener("message", this._onMessage, !1);
  }
}
export {
  g as BasePostMessageStream,
  T as BrowserRuntimePostMessageStream,
  j as WebWorkerParentPostMessageStream,
  A as WebWorkerPostMessageStream,
  B as WindowPostMessageStream
};
