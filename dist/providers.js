var $ = Object.defineProperty;
var R = (t) => {
  throw TypeError(t);
};
var F = (t, n, e) => n in t ? $(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var m = (t, n, e) => F(t, typeof n != "symbol" ? n + "" : n, e), x = (t, n, e) => n.has(t) || R("Cannot " + e);
var c = (t, n, e) => (x(t, n, "read from private field"), e ? e.call(t) : n.get(t)), v = (t, n, e) => n.has(t) ? R("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e), l = (t, n, e, i) => (x(t, n, "write to private field"), i ? i.call(t, e) : n.set(t, e), e);
import { g as U } from "./_commonjsHelpers-C6fGbg64.js";
import { c as L, J as V } from "./JsonRpcEngine-CXkhre9K.js";
import { J as k } from "./classes-Cj8AOate.js";
import { rpcErrors as w } from "./rpcErrors.js";
import K from "./safeEventEmitter.js";
import { aO as S } from "./versions-DCTBsmoI.js";
import "./events-D2cUsYK1.js";
import { b as C } from "./browser-BfYtJpNX.js";
import { c as G } from "./createStreamMiddleware-DZ-jQoSB.js";
import { ObjectMultiplex as X } from "./objectMultiplex.js";
var J = function t(n, e) {
  if (n === e) return !0;
  if (n && e && typeof n == "object" && typeof e == "object") {
    if (n.constructor !== e.constructor) return !1;
    var i, r, o;
    if (Array.isArray(n)) {
      if (i = n.length, i != e.length) return !1;
      for (r = i; r-- !== 0; )
        if (!t(n[r], e[r])) return !1;
      return !0;
    }
    if (n.constructor === RegExp) return n.source === e.source && n.flags === e.flags;
    if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === e.valueOf();
    if (n.toString !== Object.prototype.toString) return n.toString() === e.toString();
    if (o = Object.keys(n), i = o.length, i !== Object.keys(e).length) return !1;
    for (r = i; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, o[r])) return !1;
    for (r = i; r-- !== 0; ) {
      var s = o[r];
      if (!t(n[s], e[s])) return !1;
    }
    return !0;
  }
  return n !== n && e !== e;
};
const Q = /* @__PURE__ */ U(J), a = {
  errors: {
    disconnected: () => "ZondWallet: Disconnected from chain. Attempting to connect.",
    permanentlyDisconnected: () => "ZondWallet: Disconnected from ZondWallet background. Page reload required.",
    sendSiteMetadata: () => "ZondWallet: Failed to send site metadata. This is an internal error, please report this bug.",
    unsupportedSync: (t) => `ZondWallet: The ZondWallet Ethereum provider does not support synchronous methods like ${t} without a callback parameter.`,
    invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
    invalidNetworkParams: () => "ZondWallet: Received invalid network parameters. Please report this bug.",
    invalidRequestArgs: () => "Expected a single, non-array, object argument.",
    invalidRequestMethod: () => "'args.method' must be a non-empty string.",
    invalidRequestParams: () => "'args.params' must be an object or array if provided.",
    invalidLoggerObject: () => "'args.logger' must be an object if provided.",
    invalidLoggerMethod: (t) => `'args.logger' must include required method '${t}'.`
  },
  info: {
    connected: (t) => `ZondWallet: Connected to chain with ID "${t}".`
  },
  warnings: {
    // deprecated methods
    enableDeprecation: `ZondWallet: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    sendDeprecation: `ZondWallet: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      close: `ZondWallet: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect`,
      data: `ZondWallet: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
      networkChanged: `ZondWallet: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged`,
      notification: `ZondWallet: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`
    },
    rpc: {
      ethDecryptDeprecation: `ZondWallet: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.
For more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
      ethGetEncryptionPublicKeyDeprecation: `ZondWallet: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.
For more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
      walletWatchAssetNFTExperimental: "ZondWallet: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future."
    },
    // misc
    experimentalMethods: "ZondWallet: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."
  }
}, Y = "ERC721", H = "ERC1155";
function ee(t) {
  const n = {
    ethDecryptDeprecation: !1,
    ethGetEncryptionPublicKeyDeprecation: !1,
    walletWatchAssetNFTExperimental: !1
  };
  return (e, i, r) => {
    var o;
    !n.ethDecryptDeprecation && e.method === "eth_decrypt" ? (t.warn(a.warnings.rpc.ethDecryptDeprecation), n.ethDecryptDeprecation = !0) : !n.ethGetEncryptionPublicKeyDeprecation && e.method === "eth_getEncryptionPublicKey" ? (t.warn(a.warnings.rpc.ethGetEncryptionPublicKeyDeprecation), n.ethGetEncryptionPublicKeyDeprecation = !0) : !n.walletWatchAssetNFTExperimental && e.method === "wallet_watchAsset" && [Y, H].includes(
      ((o = e.params) == null ? void 0 : o.type) || ""
    ) && (t.warn(a.warnings.rpc.walletWatchAssetNFTExperimental), n.walletWatchAssetNFTExperimental = !0), r();
  };
}
const te = Object.freeze([
  "eth_subscription"
  // per eth-json-rpc-filters/subscriptionManager
]), j = (t = console) => [
  L(),
  ne(t),
  ee(t)
];
function ne(t) {
  return (n, e, i) => {
    (typeof n.method != "string" || !n.method) && (e.error = w.invalidRequest({
      message: "The request 'method' must be a non-empty string.",
      data: n
    })), i((r) => {
      const { error: o } = e;
      return o && t.warn(`ZondWallet - RPC Error: ${o.message}`, o), r();
    });
  };
}
const ie = (t, n, e = !0) => (i, r) => {
  i || r.error ? n(i || r.error) : !e || Array.isArray(r) ? t(r) : t(r.result);
}, N = (t) => !!t && typeof t == "string" && t.startsWith("0x"), re = (t) => !!t && typeof t == "string";
var f, p;
const b = class b extends K {
  /**
   * Create a new instance of the provider.
   *
   * @param options - An options bag.
   * @param options.logger - The logging API to use. Default: `console`.
   * @param options.maxEventListeners - The maximum number of event
   * listeners. Default: 100.
   * @param options.rpcMiddleware - The RPC middleware stack. Default: [].
   */
  constructor({
    logger: e = console,
    maxEventListeners: i = 100,
    rpcMiddleware: r = []
  } = {}) {
    super();
    m(this, "_log");
    m(this, "_state");
    m(this, "_rpcEngine");
    /**
     * The chain ID of the currently connected Ethereum chain.
     * See [chainId.network]{@link https://chainid.network} for more information.
     */
    v(this, f);
    /**
     * The user's currently selected Ethereum address.
     * If null, ZondWallet is either locked or the user has not permitted any
     * addresses to be viewed.
     */
    v(this, p);
    this._log = e, this.setMaxListeners(i), this._state = {
      ...b._defaultState
    }, l(this, p, null), l(this, f, null), this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleConnect = this._handleConnect.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), this._handleDisconnect = this._handleDisconnect.bind(this), this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this.request = this.request.bind(this);
    const o = new V();
    r.forEach((s) => o.push(s)), this._rpcEngine = o;
  }
  //====================
  // Public Properties
  //====================
  get chainId() {
    return c(this, f);
  }
  get selectedAddress() {
    return c(this, p);
  }
  //====================
  // Public Methods
  //====================
  /**
   * Returns whether the provider can process RPC requests.
   *
   * @returns Whether the provider can process RPC requests.
   */
  isConnected() {
    return this._state.isConnected;
  }
  /**
   * Submits an RPC request for the given method, with the given params.
   * Resolves with the result of the method call, or rejects on error.
   *
   * @param args - The RPC request arguments.
   * @param args.method - The RPC method name.
   * @param args.params - The parameters for the RPC method.
   * @returns A Promise that resolves with the result of the RPC method,
   * or rejects if an error is encountered.
   */
  async request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw w.invalidRequest({
        message: a.errors.invalidRequestArgs(),
        data: e
      });
    const { method: i, params: r } = e;
    if (typeof i != "string" || i.length === 0)
      throw w.invalidRequest({
        message: a.errors.invalidRequestMethod(),
        data: e
      });
    if (r !== void 0 && !Array.isArray(r) && (typeof r != "object" || r === null))
      throw w.invalidRequest({
        message: a.errors.invalidRequestParams(),
        data: e
      });
    const o = r == null ? {
      method: i
    } : {
      method: i,
      params: r
    };
    return new Promise((s, d) => {
      this._rpcRequest(o, ie(s, d));
    });
  }
  //====================
  // Private Methods
  //====================
  /**
   * MUST be called by child classes.
   *
   * Sets initial state if provided and marks this provider as initialized.
   * Throws if called more than once.
   *
   * Permits the `networkVersion` field in the parameter object for
   * compatibility with child classes that use this value.
   *
   * @param initialState - The provider's initial state.
   * @param initialState.accounts - The user's accounts.
   * @param initialState.chainId - The chain ID.
   * @param initialState.isUnlocked - Whether the user has unlocked ZondWallet.
   * @param initialState.networkVersion - The network version.
   * @fires BaseProvider#_initialized - If `initialState` is defined.
   * @fires BaseProvider#connect - If `initialState` is defined.
   */
  _initializeState(e) {
    if (this._state.initialized)
      throw new Error("Provider already initialized.");
    if (e) {
      const { accounts: i, chainId: r, isUnlocked: o, networkVersion: s } = e;
      this._handleConnect(r), this._handleChainChanged({ chainId: r, networkVersion: s }), this._handleUnlockStateChanged({ accounts: i, isUnlocked: o }), this._handleAccountsChanged(i);
    }
    this._state.initialized = !0, this.emit("_initialized");
  }
  /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound.
   *
   * @param payload - The RPC request object.
   * @param callback - The consumer's callback.
   * @returns The result of the RPC request.
   */
  _rpcRequest(e, i) {
    let r = i;
    return Array.isArray(e) ? this._rpcEngine.handle(e, r) : (e.jsonrpc || (e.jsonrpc = "2.0"), (e.method === "eth_accounts" || e.method === "eth_requestAccounts") && (r = (o, s) => {
      this._handleAccountsChanged(
        s.result ?? [],
        e.method === "eth_accounts"
      ), i(o, s);
    }), this._rpcEngine.handle(e, r));
  }
  /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param chainId - The ID of the newly connected chain.
   * @fires ZondWalletInpageProvider#connect
   */
  _handleConnect(e) {
    this._state.isConnected || (this._state.isConnected = !0, this.emit("connect", { chainId: e }), this._log.debug(a.info.connected(e)));
  }
  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes.
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * @fires BaseProvider#disconnect - If the disconnection is not recoverable.
   */
  _handleDisconnect(e, i) {
    if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
      this._state.isConnected = !1;
      let r;
      e ? (r = new k(
        1013,
        // Try again later
        i ?? a.errors.disconnected()
      ), this._log.debug(r)) : (r = new k(
        1011,
        // Internal error
        i ?? a.errors.permanentlyDisconnected()
      ), this._log.error(r), l(this, f, null), this._state.accounts = null, l(this, p, null), this._state.isUnlocked = !1, this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", r);
    }
  }
  /**
   * Upon receipt of a new `chainId`, emits the corresponding event and sets
   * and sets relevant public state. Does nothing if the given `chainId` is
   * equivalent to the existing value.
   *
   * Permits the `networkVersion` field in the parameter object for
   * compatibility with child classes that use this value.
   *
   * @fires BaseProvider#chainChanged
   * @param networkInfo - An object with network info.
   * @param networkInfo.chainId - The latest chain ID.
   */
  _handleChainChanged({
    chainId: e
  } = {}) {
    if (!N(e)) {
      this._log.error(a.errors.invalidNetworkParams(), { chainId: e });
      return;
    }
    this._handleConnect(e), e !== c(this, f) && (l(this, f, e), this._state.initialized && this.emit("chainChanged", c(this, f)));
  }
  /**
   * Called when accounts may have changed. Diffs the new accounts value with
   * the current one, updates all state as necessary, and emits the
   * accountsChanged event.
   *
   * @param accounts - The new accounts value.
   * @param isEthAccounts - Whether the accounts value was returned by
   * a call to eth_accounts.
   */
  _handleAccountsChanged(e, i = !1) {
    let r = e;
    Array.isArray(e) || (this._log.error(
      "ZondWallet: Received invalid accounts parameter. Please report this bug.",
      e
    ), r = []);
    for (const o of e)
      if (typeof o != "string") {
        this._log.error(
          "ZondWallet: Received non-string account. Please report this bug.",
          e
        ), r = [];
        break;
      }
    if (!Q(this._state.accounts, r) && (i && this._state.accounts !== null && this._log.error(
      "ZondWallet: 'eth_accounts' unexpectedly updated accounts. Please report this bug.",
      r
    ), this._state.accounts = r, c(this, p) !== r[0] && l(this, p, r[0] || null), this._state.initialized)) {
      const o = [...r];
      this.emit("accountsChanged", o);
    }
  }
  /**
   * Upon receipt of a new isUnlocked state, sets relevant public state.
   * Calls the accounts changed handler with the received accounts, or an empty
   * array.
   *
   * Does nothing if the received value is equal to the existing value.
   * There are no lock/unlock events.
   *
   * @param opts - Options bag.
   * @param opts.accounts - The exposed accounts, if any.
   * @param opts.isUnlocked - The latest isUnlocked value.
   */
  _handleUnlockStateChanged({
    accounts: e,
    isUnlocked: i
  } = {}) {
    if (typeof i != "boolean") {
      this._log.error(
        "ZondWallet: Received invalid isUnlocked parameter. Please report this bug."
      );
      return;
    }
    i !== this._state.isUnlocked && (this._state.isUnlocked = i, this._handleAccountsChanged(e ?? []));
  }
};
f = new WeakMap(), p = new WeakMap(), m(b, "_defaultState", {
  accounts: null,
  isConnected: !1,
  isUnlocked: !1,
  initialized: !1,
  isPermanentlyDisconnected: !1
});
let A = b;
const oe = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u, se = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/u;
function Fe(t) {
  window.addEventListener(
    "eip6963:announceProvider",
    (n) => {
      ce(n) || W(
        "Invalid EIP-6963 AnnounceProviderEvent object received from eip6963:announceProvider event."
      ), t(n.detail);
    }
  ), window.dispatchEvent(new Event(
    "eip6963:requestProvider"
    /* Request */
  ));
}
function ae(t) {
  T(t) || W("Invalid EIP-6963 ProviderDetail object.");
  const { info: n, provider: e } = t, i = () => window.dispatchEvent(
    new CustomEvent("eip6963:announceProvider", {
      detail: Object.freeze({ info: { ...n }, provider: e })
    })
  );
  i(), window.addEventListener(
    "eip6963:requestProvider",
    (r) => {
      de(r) || W(
        "Invalid EIP-6963 RequestProviderEvent object received from eip6963:requestProvider event."
      ), i();
    }
  );
}
function de(t) {
  return t instanceof Event && t.type === "eip6963:requestProvider";
}
function ce(t) {
  return t instanceof CustomEvent && t.type === "eip6963:announceProvider" && Object.isFrozen(t.detail) && T(t.detail);
}
function T(t) {
  if (!S(t) || !S(t.info) || !S(t.provider))
    return !1;
  const { info: n } = t;
  return typeof n.uuid == "string" && oe.test(n.uuid) && typeof n.name == "string" && !!n.name && typeof n.icon == "string" && n.icon.startsWith("data:image") && typeof n.rdns == "string" && se.test(n.rdns);
}
function W(t) {
  throw new Error(
    `${t} See https://eips.ethereum.org/EIPS/eip-6963 for requirements.`
  );
}
var D = function(t, n, e) {
  if (e || arguments.length === 2) for (var i = 0, r = n.length, o; i < r; i++)
    (o || !(i in n)) && (o || (o = Array.prototype.slice.call(n, 0, i)), o[i] = n[i]);
  return t.concat(o || Array.prototype.slice.call(n));
}, le = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(n, e, i) {
      this.name = n, this.version = e, this.os = i, this.type = "browser";
    }
    return t;
  }()
), he = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(n) {
      this.version = n, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), ue = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(n, e, i, r) {
      this.name = n, this.version = e, this.os = i, this.bot = r, this.type = "bot-device";
    }
    return t;
  }()
), fe = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), pe = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), me = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, ge = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, O = 3, _e = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", me]
], I = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function ve(t) {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new pe() : typeof navigator < "u" ? be(navigator.userAgent) : Ee();
}
function we(t) {
  return t !== "" && _e.reduce(function(n, e) {
    var i = e[0], r = e[1];
    if (n)
      return n;
    var o = r.exec(t);
    return !!o && [i, o];
  }, !1);
}
function be(t) {
  var n = we(t);
  if (!n)
    return null;
  var e = n[0], i = n[1];
  if (e === "searchbot")
    return new fe();
  var r = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  r ? r.length < O && (r = D(D([], r, !0), Se(O - r.length), !0)) : r = [];
  var o = r.join("."), s = ye(t), d = ge.exec(t);
  return d && d[1] ? new ue(e, o, s, d[1]) : new le(e, o, s);
}
function ye(t) {
  for (var n = 0, e = I.length; n < e; n++) {
    var i = I[n], r = i[0], o = i[1], s = o.exec(t);
    if (s)
      return r;
  }
  return null;
}
function Ee() {
  var t = typeof process < "u" && process.version;
  return t ? new he(process.version.slice(1)) : null;
}
function Se(t) {
  for (var n = [], e = 0; e < t; e++)
    n.push("0");
  return n;
}
var y = {};
Object.defineProperty(y, "__esModule", { value: !0 });
var Z = y.PortDuplexStream = void 0;
const Pe = C;
class B extends Pe.Duplex {
  /**
   * @param port - An instance of WebExtensions Runtime.Port. See:
   * {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port}
   * @param streamOptions - stream options passed on to Duplex stream constructor
   */
  constructor(n, e = {}) {
    super(Object.assign({ objectMode: !0 }, e)), this._port = n, this._port.onMessage.addListener((i) => this._onMessage(i)), this._port.onDisconnect.addListener(() => this._onDisconnect()), this._log = () => null;
  }
  /**
   * Callback triggered when a message is received from
   * the remote Port associated with this Stream.
   *
   * @param msg - Payload from the onMessage listener of the port
   */
  _onMessage(n) {
    if (Buffer.isBuffer(n)) {
      const e = Buffer.from(n);
      this._log(e, !1), this.push(e);
    } else
      this._log(n, !1), this.push(n);
  }
  /**
   * Callback triggered when the remote Port associated with this Stream
   * disconnects.
   */
  _onDisconnect() {
    this.destroy();
  }
  /**
   * Explicitly sets read operations to a no-op.
   */
  _read() {
  }
  /**
   * Called internally when data should be written to this writable stream.
   *
   * @param msg - Arbitrary object to write
   * @param encoding - Encoding to use when writing payload
   * @param cb - Called when writing is complete or an error occurs
   */
  _write(n, e, i) {
    try {
      if (Buffer.isBuffer(n)) {
        const r = n.toJSON();
        r._isBuffer = !0, this._log(r, !0), this._port.postMessage(r);
      } else
        this._log(n, !0), this._port.postMessage(n);
    } catch {
      return i(new Error("PortDuplexStream - disconnected"));
    }
    return i();
  }
  /**
   * Call to set a custom logger for incoming/outgoing messages
   *
   * @param log - the logger function
   */
  _setLogger(n) {
    this._log = n;
  }
}
y.default = B;
Z = y.PortDuplexStream = B;
const u = (t) => t !== null && typeof t == "object" && typeof t.pipe == "function";
u.writable = (t) => u(t) && t.writable !== !1 && typeof t._write == "function" && typeof t._writableState == "object";
u.readable = (t) => u(t) && t.readable !== !1 && typeof t._read == "function" && typeof t._readableState == "object";
u.duplex = (t) => u.writable(t) && u.readable(t);
u.transform = (t) => u.duplex(t) && typeof t._transform == "function";
var Ce = u;
class q extends A {
  /**
   * Creates a new AbstractStreamProvider instance.
   *
   * @param connectionStream - A Node.js duplex stream.
   * @param options - An options bag.
   * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
   * @param options.logger - The logging API to use. Default: `console`.
   * @param options.maxEventListeners - The maximum number of event
   * listeners. Default: 100.
   * @param options.rpcMiddleware - The RPC middleware stack to use.
   */
  constructor(e, {
    jsonRpcStreamName: i,
    logger: r = console,
    maxEventListeners: o = 100,
    rpcMiddleware: s = []
  }) {
    super({ logger: r, maxEventListeners: o, rpcMiddleware: s });
    m(this, "_jsonRpcConnection");
    if (!Ce.duplex(e))
      throw new Error(a.errors.invalidDuplexStream());
    this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
    const d = new X();
    C.pipeline(
      e,
      d,
      e,
      this._handleStreamDisconnect.bind(this, "ZondWallet")
    ), this._jsonRpcConnection = G({
      retryOnMessage: "ZOND_WALLET_EXTENSION_CONNECT_CAN_RETRY"
    }), C.pipeline(
      this._jsonRpcConnection.stream,
      d.createStream(i),
      this._jsonRpcConnection.stream,
      this._handleStreamDisconnect.bind(this, "ZondWallet RpcProvider")
    ), this._rpcEngine.push(this._jsonRpcConnection.middleware), this._jsonRpcConnection.events.on("notification", (E) => {
      const { method: g, params: _ } = E;
      g === "metamask_accountsChanged" ? this._handleAccountsChanged(_) : g === "metamask_unlockStateChanged" ? this._handleUnlockStateChanged(_) : g === "metamask_chainChanged" ? this._handleChainChanged(_) : te.includes(g) ? this.emit("message", {
        type: g,
        data: _
      }) : g === "METAMASK_STREAM_FAILURE" && e.destroy(
        new Error(a.errors.permanentlyDisconnected())
      );
    });
  }
  //====================
  // Private Methods
  //====================
  /**
   * MUST be called by child classes.
   *
   * Calls `zondWallet_getProviderState` and passes the result to
   * {@link BaseProvider._initializeState}. Logs an error if getting initial state
   * fails. Throws if called after initialization has completed.
   */
  async _initializeStateAsync() {
    let e;
    try {
      e = await this.request({
        method: "zondWallet_getProviderState"
      });
    } catch (i) {
      this._log.error(
        "ZondWallet: Failed to get initial state. Please report this bug.",
        i
      );
    }
    this._initializeState(e);
  }
  /**
   * Called when connection is lost to critical streams. Emits an 'error' event
   * from the provider with the error message and stack if present.
   *
   * @param streamName - The name of the stream that disconnected.
   * @param error - The error that caused the disconnection.
   * @fires BaseProvider#disconnect - If the provider is not already
   * disconnected.
   */
  // eslint-disable-next-line no-restricted-syntax
  _handleStreamDisconnect(e, i) {
    let r = `ZondWallet: Lost connection to "${e}".`;
    i != null && i.stack && (r += `
${i.stack}`), this._log.warn(r), this.listenerCount("error") > 0 && this.emit("error", r), this._handleDisconnect(!1, i ? i.message : void 0);
  }
  /**
   * Upon receipt of a new chainId and networkVersion, emits corresponding
   * events and sets relevant public state. This class does not have a
   * `networkVersion` property, but we rely on receiving a `networkVersion`
   * with the value of `loading` to detect when the network is changing and
   * a recoverable `disconnect` even has occurred. Child classes that use the
   * `networkVersion` for other purposes must implement additional handling
   * therefore.
   *
   * @fires BaseProvider#chainChanged
   * @param networkInfo - An object with network info.
   * @param networkInfo.chainId - The latest chain ID.
   * @param networkInfo.networkVersion - The latest network ID.
   */
  _handleChainChanged({
    chainId: e,
    networkVersion: i
  } = {}) {
    if (!N(e) || !re(i)) {
      this._log.error(a.errors.invalidNetworkParams(), {
        chainId: e,
        networkVersion: i
      });
      return;
    }
    i === "loading" ? this._handleDisconnect(!0) : super._handleChainChanged({ chainId: e });
  }
}
class Ae extends q {
  /**
   * MUST be called after instantiation to complete initialization.
   *
   * Calls `zondWallet_getProviderState` and passes the result to
   * {@link BaseProvider._initializeState}. Logs an error if getting initial state
   * fails. Throws if called after initialization has completed.
   */
  async initialize() {
    return this._initializeStateAsync();
  }
}
const We = {
  stable: "nkbihfbeogaeaoehlefnkodbefgpgknn",
  beta: "pbbkamfgmaedccnfkmjcofcecjhfgldn",
  flask: "ljfoeinjpaedjfecbmggjgodbgkmjkjk"
}, Re = {
  stable: "webextension@metamask.io",
  beta: "webextension-beta@metamask.io",
  flask: "webextension-flask@metamask.io"
}, M = {
  chromeIds: We,
  firefoxIds: Re
}, z = "zond-wallet-provider", P = ve(), xe = z;
function Ue(t = "stable") {
  let n;
  try {
    const e = ke(t), i = chrome.runtime.connect(e), r = new Z(i);
    n = new Ae(r, {
      jsonRpcStreamName: xe,
      logger: console,
      rpcMiddleware: j(console)
    }), n.initialize();
  } catch (e) {
    throw console.dir("ZondWallet connect error.", e), e;
  }
  return n;
}
function ke(t) {
  return ((P == null ? void 0 : P.name) === "firefox" ? M.firefoxIds : M.chromeIds)[t] ?? t;
}
var h;
class De extends q {
  /**
   * Creates a new `ZondWalletInpageProvider`.
   *
   * @param connectionStream - A Node.js duplex stream.
   * @param options - An options bag.
   * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
   * Default: `zond-wallet-provider`.
   * @param options.logger - The logging API to use. Default: `console`.
   * @param options.maxEventListeners - The maximum number of event
   * listeners. Default: 100.
   * @param options.shouldSendMetadata - Whether the provider should
   * send page metadata. Default: `true`.
   */
  constructor(e, {
    jsonRpcStreamName: i = z,
    logger: r = console,
    maxEventListeners: o = 100
  } = {}) {
    super(e, {
      jsonRpcStreamName: i,
      logger: r,
      maxEventListeners: o,
      rpcMiddleware: j(r)
    });
    v(this, h);
    /**
     * Indicating that this provider is a ZondWallet provider.
     */
    m(this, "isZondWallet");
    this._initializeStateAsync(), l(this, h, null), this.isZondWallet = !0;
  }
  //====================
  // Read-only Properties
  //====================
  get chainId() {
    return super.chainId;
  }
  get networkVersion() {
    return c(this, h);
  }
  get selectedAddress() {
    return super.selectedAddress;
  }
  //====================
  // Private Methods
  //====================
  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes.
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * @fires BaseProvider#disconnect - If the disconnection is not recoverable.
   */
  _handleDisconnect(e, i) {
    super._handleDisconnect(e, i), c(this, h) && !e && l(this, h, null);
  }
  /**
   * Upon receipt of a new chainId and networkVersion, emits corresponding
   * events and sets relevant public state. Does nothing if neither the chainId
   * nor the networkVersion are different from existing values.
   *
   * @fires ZondWalletInpageProvider#networkChanged
   * @param networkInfo - An object with network info.
   * @param networkInfo.chainId - The latest chain ID.
   * @param networkInfo.networkVersion - The latest network ID.
   */
  _handleChainChanged({
    chainId: e,
    networkVersion: i
  } = {}) {
    super._handleChainChanged({ chainId: e, networkVersion: i }), this._state.isConnected && i !== c(this, h) && (l(this, h, i), this._state.initialized && this.emit("networkChanged", c(this, h)));
  }
}
h = new WeakMap();
function Le({
  connectionStream: t,
  jsonRpcStreamName: n,
  logger: e = console,
  maxEventListeners: i = 100,
  providerInfo: r
}) {
  const o = new De(t, {
    jsonRpcStreamName: n,
    logger: e,
    maxEventListeners: i
  }), s = new Proxy(o, {
    // some common libraries, e.g. web3@1.x, mess with our API
    deleteProperty: () => !0,
    // fix issue with Proxy unable to access private variables from getters
    // https://stackoverflow.com/a/73051482
    get(d, E) {
      return d[E];
    }
  });
  return ae({
    info: r,
    provider: s
  }), s;
}
export {
  A as BaseProvider,
  Ae as StreamProvider,
  De as ZondWalletInpageProvider,
  Ue as createExternalExtensionProvider,
  ae as eip6963AnnounceProvider,
  Fe as eip6963RequestProvider,
  Le as initializeProvider
};
