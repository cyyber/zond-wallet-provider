var E = Object.defineProperty;
var W = (t, s, e) => s in t ? E(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var n = (t, s, e) => (W(t, typeof s != "symbol" ? s + "" : s, e), e), M = (t, s, e) => {
  if (!s.has(t))
    throw TypeError("Cannot " + e);
};
var d = (t, s, e) => (M(t, s, "read from private field"), e ? e.call(t) : s.get(t)), c = (t, s, e) => {
  if (s.has(t))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(t) : s.set(t, e);
}, l = (t, s, e, o) => (M(t, s, "write to private field"), o ? o.call(t, e) : s.set(t, e), e);
import { b as D } from "./browser-BLlG2JZa.js";
import { aO as O, a as m } from "./versions-BzFJWa4R.js";
const u = () => {
}, p = "SYN", _ = "ACK";
class i extends D.Duplex {
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
    this._write(p, null, u), this.cork();
  }
  _onData(e) {
    if (this._init)
      try {
        this.push(e), this._log(e, !1);
      } catch (o) {
        this.emit("error", o);
      }
    else
      e === p ? (this._haveSyn = !0, this._write(_, null, u)) : e === _ && (this._init = !0, this._haveSyn || this._write(_, null, u), this.uncork());
  }
  _read() {
  }
  _write(e, o, a) {
    e !== _ && e !== p && this._log(e, !0), this._postMessage(e), a();
  }
  _setLogger(e) {
    this._log = e;
  }
}
const b = "dedicatedWorker";
function r(t) {
  return O(t) && !!t.data && (typeof t.data == "number" || typeof t.data == "object" || typeof t.data == "string");
}
class L extends i {
  constructor(s = {}) {
    if (super(s), typeof globalThis.process.send != "function")
      throw new Error(
        "Parent IPC channel not found. This class should only be instantiated in a Node.js child process."
      );
    this._onMessage = this._onMessage.bind(this), globalThis.process.on("message", this._onMessage), this._handshake();
  }
  _postMessage(s) {
    globalThis.process.send({ data: s });
  }
  _onMessage(s) {
    r(s) && this._onData(s.data);
  }
  _destroy() {
    globalThis.process.removeListener("message", this._onMessage);
  }
}
class R extends i {
  /**
   * Creates a stream for communicating with a Node.js `child_process` process.
   *
   * @param args - Options bag.
   * @param args.process - The process to communicate with.
   */
  constructor({ process: e, ...o }) {
    super(o);
    n(this, "_process");
    this._process = e, this._onMessage = this._onMessage.bind(this), this._process.on("message", this._onMessage), this._handshake();
  }
  _postMessage(e) {
    this._process.send({ data: e });
  }
  _onMessage(e) {
    r(e) && this._onData(e.data);
  }
  _destroy() {
    this._process.removeListener("message", this._onMessage);
  }
}
var h, g;
class j extends i {
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
    target: o,
    ...a
  }) {
    super(a);
    c(this, h, void 0);
    c(this, g, void 0);
    l(this, h, e), l(this, g, o), this._onMessage = this._onMessage.bind(this), this._getRuntime().onMessage.addListener(this._onMessage), this._handshake();
  }
  _postMessage(e) {
    this._getRuntime().sendMessage({
      target: d(this, g),
      data: e
    });
  }
  _onMessage(e) {
    !r(e) || e.target !== d(this, h) || this._onData(e.data);
  }
  _getRuntime() {
    var e, o;
    if ("chrome" in globalThis && typeof ((e = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : e.sendMessage) == "function")
      return chrome.runtime;
    if ("browser" in globalThis && typeof ((o = browser == null ? void 0 : browser.runtime) == null ? void 0 : o.sendMessage) == "function")
      return browser.runtime;
    throw new Error(
      "browser.runtime.sendMessage is not a function. This class should only be instantiated in a web extension."
    );
  }
  _destroy() {
    this._getRuntime().onMessage.removeListener(this._onMessage);
  }
}
h = new WeakMap(), g = new WeakMap();
class A extends i {
  /**
   * Creates a stream for communicating with a dedicated `WebWorker`.
   *
   * @param args - Options bag.
   * @param args.worker - The Web Worker to exchange messages with. The worker
   * must instantiate a `WebWorkerPostMessageStream`.
   */
  constructor({ worker: e, ...o }) {
    super(o);
    n(this, "_target");
    n(this, "_worker");
    this._target = b, this._worker = e, this._worker.onmessage = this._onMessage.bind(this), this._handshake();
  }
  _postMessage(e) {
    this._worker.postMessage({
      target: this._target,
      data: e
    });
  }
  _onMessage(e) {
    const o = e.data;
    r(o) && this._onData(o.data);
  }
  _destroy() {
    this._worker.onmessage = null, this._worker = null;
  }
}
class C extends i {
  constructor(e = {}) {
    if (typeof self > "u" || // @ts-expect-error: No types for WorkerGlobalScope
    typeof WorkerGlobalScope > "u")
      throw new Error(
        "WorkerGlobalScope not found. This class should only be instantiated in a WebWorker."
      );
    super(e);
    n(this, "_name");
    this._name = b, self.addEventListener("message", this._onMessage.bind(this)), this._handshake();
  }
  _postMessage(e) {
    self.postMessage({ data: e });
  }
  _onMessage(e) {
    const o = e.data;
    !r(o) || o.target !== this._name || this._onData(o.data);
  }
  // worker stream lifecycle assumed to be coterminous with global scope
  _destroy() {
  }
}
var f;
const y = (f = Object.getOwnPropertyDescriptor(
  MessageEvent.prototype,
  "source"
)) == null ? void 0 : f.get;
m(y, "MessageEvent.prototype.source getter is not defined.");
var w;
const k = (w = Object.getOwnPropertyDescriptor(
  MessageEvent.prototype,
  "origin"
)) == null ? void 0 : w.get;
m(k, "MessageEvent.prototype.origin getter is not defined.");
class N extends i {
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
    target: o,
    targetOrigin: a = location.origin,
    targetWindow: S = window,
    ...v
  }) {
    super(v);
    n(this, "_name");
    n(this, "_target");
    n(this, "_targetOrigin");
    n(this, "_targetWindow");
    if (typeof window > "u" || typeof window.postMessage != "function")
      throw new Error(
        "window.postMessage is not a function. This class should only be instantiated in a Window."
      );
    this._name = e, this._target = o, this._targetOrigin = a, this._targetWindow = S, this._onMessage = this._onMessage.bind(this), window.addEventListener("message", this._onMessage, !1), this._handshake();
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
    const o = e.data;
    this._targetOrigin !== "*" && k.call(e) !== this._targetOrigin || y.call(e) !== this._targetWindow || !r(o) || o.target !== this._name || this._onData(o.data);
  }
  _destroy() {
    window.removeEventListener("message", this._onMessage, !1);
  }
}
export {
  i as BasePostMessageStream,
  j as BrowserRuntimePostMessageStream,
  L as ProcessMessageStream,
  R as ProcessParentMessageStream,
  A as WebWorkerParentPostMessageStream,
  C as WebWorkerPostMessageStream,
  N as WindowPostMessageStream
};
