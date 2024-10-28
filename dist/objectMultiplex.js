var b = Object.defineProperty;
var w = (t, r, e) => r in t ? b(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var i = (t, r, e) => (w(t, typeof r != "symbol" ? r + "" : r, e), e);
import { b as l } from "./browser-BLlG2JZa.js";
import { g as y } from "./_commonjsHelpers-C6fGbg64.js";
var p = { exports: {} }, _ = d;
function d(t, r) {
  if (t && r)
    return d(t)(r);
  if (typeof t != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(t).forEach(function(o) {
    e[o] = t[o];
  }), e;
  function e() {
    for (var o = new Array(arguments.length), n = 0; n < o.length; n++)
      o[n] = arguments[n];
    var a = t.apply(this, o), u = o[o.length - 1];
    return typeof a == "function" && a !== u && Object.keys(u).forEach(function(s) {
      a[s] = u[s];
    }), a;
  }
}
var h = _;
p.exports = h(c);
p.exports.strict = h(m);
c.proto = c(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return c(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return m(this);
    },
    configurable: !0
  });
});
function c(t) {
  var r = function() {
    return r.called ? r.value : (r.called = !0, r.value = t.apply(this, arguments));
  };
  return r.called = !1, r;
}
function m(t) {
  var r = function() {
    if (r.called)
      throw new Error(r.onceError);
    return r.called = !0, r.value = t.apply(this, arguments);
  }, e = t.name || "Function wrapped with `once`";
  return r.onceError = e + " shouldn't be called more than once", r.called = !1, r;
}
var x = p.exports;
const E = /* @__PURE__ */ y(x);
class v extends l.Duplex {
  constructor({ parent: e, name: o, ...n }) {
    super({
      objectMode: !0,
      ...n
    });
    i(this, "_parent");
    i(this, "_name");
    this._parent = e, this._name = o;
  }
  /**
   * Explicitly sets read operations to a no-op.
   */
  _read() {
  }
  /**
   * Called when data should be written to this writable stream.
   *
   * @param chunk - Arbitrary object to write
   * @param encoding - Encoding to use when writing payload
   * @param callback - Called when writing is complete or an error occurs
   */
  _write(e, o, n) {
    this._parent.push({
      name: this._name,
      data: e
    }), n();
  }
}
const f = Symbol("IGNORE_SUBSTREAM");
class M extends l.Duplex {
  constructor(e = {}) {
    super({
      objectMode: !0,
      ...e
    });
    i(this, "_substreams");
    this._substreams = {};
  }
  createStream(e, o = {}) {
    if (this.destroyed)
      throw new Error(
        `ObjectMultiplex - parent stream for name "${e}" already destroyed`
      );
    if (this._readableState.ended || this._writableState.ended)
      throw new Error(
        `ObjectMultiplex - parent stream for name "${e}" already ended`
      );
    if (!e)
      throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[e])
      throw new Error(
        `ObjectMultiplex - Substream for name "${e}" already exists`
      );
    const n = new v({
      name: e,
      parent: this,
      ...o
    });
    return this._substreams[e] = n, j(this, (a) => n.destroy(a || void 0)), n;
  }
  // ignore streams (dont display orphaned data warning)
  ignoreStream(e) {
    if (!e)
      throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[e])
      throw new Error(
        `ObjectMultiplex - Substream for name "${e}" already exists`
      );
    this._substreams[e] = f;
  }
  _read() {
  }
  _write(e, o, n) {
    const { name: a, data: u } = e;
    if (!a)
      return console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`), n();
    const s = this._substreams[a];
    return s ? (s !== f && s.push(u), n()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${a}"`), n());
  }
}
function j(t, r) {
  const e = E(r);
  l.finished(t, { readable: !1 }, e), l.finished(t, { writable: !1 }, e);
}
export {
  M as ObjectMultiplex,
  v as Substream
};
