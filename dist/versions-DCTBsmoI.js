var Or = Object.defineProperty;
var tt = (e) => {
  throw TypeError(e);
};
var br = (e, t, r) => t in e ? Or(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var rt = (e, t, r) => br(e, typeof t != "symbol" ? t + "" : t, r), nt = (e, t, r) => t.has(e) || tt("Cannot " + r);
var x = (e, t, r) => (nt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), be = (e, t, r) => t.has(e) ? tt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Le = (e, t, r, n) => (nt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
import { assert as Lr, pattern as G, is as b, string as O, size as vr, union as H, coerce as ee, instance as De, number as ge, bigint as kt, create as te, StructError as me, literal as Bt, nullable as Tr, integer as Fr, object as Gt, optional as st, Struct as xr, boolean as Pr, array as Xt, lazy as ot, record as Ht, any as _r, unknown as jr, define as Ur, refine as Mt } from "./superstruct.js";
import { g as Vr } from "./_commonjsHelpers-C6fGbg64.js";
class ke extends Error {
  /**
   * @param {string} message
   * @param {{ cause?: T }} options
   */
  constructor(t, { cause: r } = {}) {
    super(t), this.name = ke.name, r && (this.cause = r), this.message = t;
  }
}
function aa(e) {
  return Array.isArray(e) && e.length > 0;
}
function Dr(e) {
  return e == null;
}
function kr(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
const Br = (e, t) => Object.hasOwnProperty.call(e, t);
function ca(e) {
  return Object.getOwnPropertyNames(e);
}
var Gr = /* @__PURE__ */ ((e) => (e[e.Null = 4] = "Null", e[e.Comma = 1] = "Comma", e[e.Wrapper = 1] = "Wrapper", e[e.True = 4] = "True", e[e.False = 5] = "False", e[e.Quote = 1] = "Quote", e[e.Colon = 1] = "Colon", e[e.Date = 24] = "Date", e))(Gr || {});
const Xr = /"|\\|\n|\r|\t/gu;
function ua(e) {
  if (typeof e != "object" || e === null)
    return !1;
  try {
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  } catch {
    return !1;
  }
}
function Hr(e) {
  return e.charCodeAt(0) <= 127;
}
function la(e) {
  return e.split("").reduce((r, n) => Hr(n) ? r + 1 : r + 2, 0) + (e.match(Xr) ?? []).length;
}
function fa(e) {
  return e.toString().length;
}
function Mr(e) {
  return e instanceof Error || kr(e) && e.constructor.name === "Error";
}
function zr(e) {
  return typeof e == "object" && e !== null && "code" in e;
}
function Jr(e) {
  return typeof e == "object" && e !== null && "message" in e;
}
function ha(e) {
  return typeof e == "object" && e !== null && "stack" in e;
}
function qr(e) {
  return Jr(e) && typeof e.message == "string" ? e.message : Dr(e) ? "" : String(e);
}
function pa(e, t) {
  if (Mr(e)) {
    let r;
    return Error.length === 2 ? r = new Error(t, { cause: e }) : r = new ke(t, { cause: e }), zr(e) && (r.code = e.code), r;
  }
  return t.length > 0 ? new Error(`${String(e)}: ${t}`) : new Error(String(e));
}
function Wr(e) {
  var t, r;
  return typeof ((r = (t = e == null ? void 0 : e.prototype) == null ? void 0 : t.constructor) == null ? void 0 : r.name) == "string";
}
function Yr(e) {
  return qr(e).replace(/\.$/u, "");
}
function zt(e, t) {
  return Wr(e) ? new e({
    message: t
  }) : e({
    message: t
  });
}
class Jt extends Error {
  constructor(r) {
    super(r.message);
    rt(this, "code", "ERR_ASSERTION");
  }
}
function T(e, t = "Assertion failed.", r = Jt) {
  if (!e)
    throw t instanceof Error ? t : zt(r, t);
}
function V(e, t, r = "Assertion failed", n = Jt) {
  try {
    Lr(e, t);
  } catch (s) {
    throw zt(
      n,
      `${r}: ${Yr(s)}.`
    );
  }
}
function da(e) {
  throw new Error(
    "Invalid branch reached. Should be detected during compilation."
  );
}
const Zr = (e, t = {}) => {
  const r = t.paddingRequired ?? !1, n = t.characterSet ?? "base64";
  let s;
  n === "base64" ? s = String.raw`[A-Za-z0-9+\/]` : (T(n === "base64url"), s = String.raw`[-_A-Za-z0-9]`);
  let o;
  return r ? o = new RegExp(
    `^(?:${s}{4})*(?:${s}{3}=|${s}{2}==)?$`,
    "u"
  ) : o = new RegExp(
    `^(?:${s}{4})*(?:${s}{2,3}|${s}{3}=|${s}{2}==)?$`,
    "u"
  ), G(e, o);
};
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Kr(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
// @__NO_SIDE_EFFECTS__
function Qr(...e) {
  const t = (o) => o, r = (o, u) => (h) => o(u(h)), n = e.map((o) => o.encode).reduceRight(r, t), s = e.map((o) => o.decode).reduce(r, t);
  return { encode: n, decode: s };
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return {
    encode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return t.map((r) => {
        if (r < 0 || r >= e.length)
          throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);
        return e[r];
      });
    },
    decode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "string")
        throw new Error("alphabet.decode input should be array of strings");
      return t.map((r) => {
        if (typeof r != "string")
          throw new Error(`alphabet.decode: not string element=${r}`);
        const n = e.indexOf(r);
        if (n === -1)
          throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);
        return n;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tn(e = "") {
  if (typeof e != "string")
    throw new Error("join separator should be string");
  return {
    encode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "string")
        throw new Error("join.encode input should be array of strings");
      for (let r of t)
        if (typeof r != "string")
          throw new Error(`join.encode: non-string input=${r}`);
      return t.join(e);
    },
    decode: (t) => {
      if (typeof t != "string")
        throw new Error("join.decode input should be string");
      return t.split(e);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rn(e, t = "=") {
  if (typeof t != "string")
    throw new Error("padding chr should be string");
  return {
    encode(r) {
      if (!Array.isArray(r) || r.length && typeof r[0] != "string")
        throw new Error("padding.encode input should be array of strings");
      for (let n of r)
        if (typeof n != "string")
          throw new Error(`padding.encode: non-string input=${n}`);
      for (; r.length * e % 8; )
        r.push(t);
      return r;
    },
    decode(r) {
      if (!Array.isArray(r) || r.length && typeof r[0] != "string")
        throw new Error("padding.encode input should be array of strings");
      for (let s of r)
        if (typeof s != "string")
          throw new Error(`padding.decode: non-string input=${s}`);
      let n = r.length;
      if (n * e % 8)
        throw new Error("Invalid padding: string should have whole number of bytes");
      for (; n > 0 && r[n - 1] === t; n--)
        if (!((n - 1) * e % 8))
          throw new Error("Invalid padding: string has too much padding");
      return r.slice(0, n);
    }
  };
}
const qt = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? /* @__PURE__ */ qt(t, e % t) : e, pe = /* @__NO_SIDE_EFFECTS__ */ (e, t) => e + (t - /* @__PURE__ */ qt(e, t));
// @__NO_SIDE_EFFECTS__
function it(e, t, r, n) {
  if (!Array.isArray(e))
    throw new Error("convertRadix2: data should be array");
  if (t <= 0 || t > 32)
    throw new Error(`convertRadix2: wrong from=${t}`);
  if (r <= 0 || r > 32)
    throw new Error(`convertRadix2: wrong to=${r}`);
  if (/* @__PURE__ */ pe(t, r) > 32)
    throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${/* @__PURE__ */ pe(t, r)}`);
  let s = 0, o = 0;
  const u = 2 ** r - 1, h = [];
  for (const i of e) {
    if (i >= 2 ** t)
      throw new Error(`convertRadix2: invalid data word=${i} from=${t}`);
    if (s = s << t | i, o + t > 32)
      throw new Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
    for (o += t; o >= r; o -= r)
      h.push((s >> o - r & u) >>> 0);
    s &= 2 ** o - 1;
  }
  if (s = s << r - o & u, !n && o >= t)
    throw new Error("Excess padding");
  if (!n && s)
    throw new Error(`Non-zero padding: ${s}`);
  return n && o > 0 && h.push(s >>> 0), h;
}
// @__NO_SIDE_EFFECTS__
function nn(e, t = !1) {
  if (e <= 0 || e > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ pe(8, e) > 32 || /* @__PURE__ */ pe(e, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (r) => {
      if (!Kr(r))
        throw new Error("radix2.encode input should be Uint8Array");
      return /* @__PURE__ */ it(Array.from(r), 8, e, !t);
    },
    decode: (r) => {
      if (!Array.isArray(r) || r.length && typeof r[0] != "number")
        throw new Error("radix2.decode input should be array of numbers");
      return Uint8Array.from(/* @__PURE__ */ it(r, e, 8, t));
    }
  };
}
const Wt = /* @__PURE__ */ Qr(/* @__PURE__ */ nn(6), /* @__PURE__ */ en("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ rn(6), /* @__PURE__ */ tn(""));
function at(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function sn(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Be(e, ...t) {
  if (!sn(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function ct(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function on(e, t) {
  Be(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const ce = /* @__PURE__ */ BigInt(2 ** 32 - 1), ut = /* @__PURE__ */ BigInt(32);
function an(e, t = !1) {
  return t ? { h: Number(e & ce), l: Number(e >> ut & ce) } : { h: Number(e >> ut & ce) | 0, l: Number(e & ce) | 0 };
}
function cn(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: u } = an(e[s], t);
    [r[s], n[s]] = [o, u];
  }
  return [r, n];
}
const un = (e, t, r) => e << r | t >>> 32 - r, ln = (e, t, r) => t << r | e >>> 32 - r, fn = (e, t, r) => t << r - 32 | e >>> 64 - r, hn = (e, t, r) => e << r - 32 | t >>> 64 - r;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const pn = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), lt = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, dn = (e) => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function ft(e) {
  for (let t = 0; t < e.length; t++)
    e[t] = dn(e[t]);
}
function En(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Yt(e) {
  return typeof e == "string" && (e = En(e)), Be(e), e;
}
class gn {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function mn(e) {
  const t = (n) => e().update(Yt(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
const Zt = [], Kt = [], Qt = [], $n = /* @__PURE__ */ BigInt(0), K = /* @__PURE__ */ BigInt(1), wn = /* @__PURE__ */ BigInt(2), Rn = /* @__PURE__ */ BigInt(7), In = /* @__PURE__ */ BigInt(256), Cn = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = K, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Zt.push(2 * (5 * n + r)), Kt.push((e + 1) * (e + 2) / 2 % 64);
  let s = $n;
  for (let o = 0; o < 7; o++)
    t = (t << K ^ (t >> Rn) * Cn) % In, t & wn && (s ^= K << (K << /* @__PURE__ */ BigInt(o)) - K);
  Qt.push(s);
}
const [yn, An] = /* @__PURE__ */ cn(Qt, !0), ht = (e, t, r) => r > 32 ? fn(e, t, r) : un(e, t, r), pt = (e, t, r) => r > 32 ? hn(e, t, r) : ln(e, t, r);
function Sn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let u = 0; u < 10; u++)
      r[u] = e[u] ^ e[u + 10] ^ e[u + 20] ^ e[u + 30] ^ e[u + 40];
    for (let u = 0; u < 10; u += 2) {
      const h = (u + 8) % 10, i = (u + 2) % 10, c = r[i], a = r[i + 1], l = ht(c, a, 1) ^ r[h], p = pt(c, a, 1) ^ r[h + 1];
      for (let d = 0; d < 50; d += 10)
        e[u + d] ^= l, e[u + d + 1] ^= p;
    }
    let s = e[2], o = e[3];
    for (let u = 0; u < 24; u++) {
      const h = Kt[u], i = ht(s, o, h), c = pt(s, o, h), a = Zt[u];
      s = e[a], o = e[a + 1], e[a] = i, e[a + 1] = c;
    }
    for (let u = 0; u < 50; u += 10) {
      for (let h = 0; h < 10; h++)
        r[h] = e[u + h];
      for (let h = 0; h < 10; h++)
        e[u + h] ^= ~r[(h + 2) % 10] & r[(h + 4) % 10];
    }
    e[0] ^= yn[n], e[1] ^= An[n];
  }
  r.fill(0);
}
class Ge extends gn {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, s = !1, o = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = s, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, at(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = pn(this.state);
  }
  keccak() {
    lt || ft(this.state32), Sn(this.state32, this.rounds), lt || ft(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    ct(this);
    const { blockLen: r, state: n } = this;
    t = Yt(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const u = Math.min(r - this.pos, s - o);
      for (let h = 0; h < u; h++)
        n[this.pos++] ^= t[o++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: s } = this;
    t[n] ^= r, r & 128 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    ct(this, !1), Be(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= n && this.keccak();
      const u = Math.min(n - this.posOut, o - s);
      t.set(r.subarray(this.posOut, this.posOut + u), s), this.posOut += u, s += u;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return at(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (on(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: s, rounds: o, enableXOF: u } = this;
    return t || (t = new Ge(r, n, s, u, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = s, t.enableXOF = u, t.destroyed = this.destroyed, t;
  }
}
const Nn = (e, t, r) => mn(() => new Ge(t, e, r)), On = /* @__PURE__ */ Nn(1, 136, 256 / 8), bn = G(O(), /^(?:0x)?[0-9a-f]+$/iu), re = G(O(), /^0x[0-9a-f]+$/iu), Ln = G(
  O(),
  /^0x[0-9a-f]{40}$/u
), er = G(
  O(),
  /^0x[0-9a-fA-F]{40}$/u
);
function vn(e) {
  return b(e, bn);
}
function Tn(e) {
  return b(e, re);
}
function Fn(e) {
  T(vn(e), "Value must be a hexadecimal string.");
}
function Ea(e) {
  T(
    Tn(e),
    'Value must be a hexadecimal string, starting with "0x".'
  );
}
function ga(e) {
  return b(e, Ln) || Pn(e);
}
function xn(e) {
  T(b(e, er), "Invalid hex address.");
  const t = je(e.toLowerCase()), r = je(Xe(On(t)));
  return `0x${t.split("").map((n, s) => {
    const o = r[s];
    return T(b(o, O()), "Hash shorter than address."), parseInt(o, 16) > 7 ? n.toUpperCase() : n;
  }).join("")}`;
}
function Pn(e) {
  return b(e, er) ? xn(e) === e : !1;
}
function _n(e) {
  return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x${e.substring(2)}` : `0x${e}`;
}
function je(e) {
  return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e;
}
const dt = 48, Et = 58, gt = 87;
function jn() {
  const e = [];
  return () => {
    if (e.length === 0)
      for (let t = 0; t < 256; t++)
        e.push(t.toString(16).padStart(2, "0"));
    return e;
  };
}
const Un = jn();
function tr(e) {
  return e instanceof Uint8Array;
}
function q(e) {
  T(tr(e), "Value must be a Uint8Array.");
}
function Xe(e) {
  if (q(e), e.length === 0)
    return "0x";
  const t = Un(), r = new Array(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = t[e[n]];
  return _n(r.join(""));
}
function Vn(e) {
  q(e);
  const t = Xe(e);
  return BigInt(t);
}
function ma(e) {
  q(e);
  let t = BigInt(0);
  for (const r of e)
    t = (t << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(e.length * 8, t);
}
function $a(e) {
  q(e);
  const t = Vn(e);
  return T(
    t <= BigInt(Number.MAX_SAFE_INTEGER),
    "Number is not a safe integer. Use `bytesToBigInt` instead."
  ), Number(t);
}
function wa(e) {
  return q(e), new TextDecoder().decode(e);
}
function Ra(e) {
  return q(e), Wt.encode(e);
}
function $e(e) {
  var s;
  if (((s = e == null ? void 0 : e.toLowerCase) == null ? void 0 : s.call(e)) === "0x")
    return new Uint8Array();
  Fn(e);
  const t = je(e).toLowerCase(), r = t.length % 2 === 0 ? t : `0${t}`, n = new Uint8Array(r.length / 2);
  for (let o = 0; o < n.length; o++) {
    const u = r.charCodeAt(o * 2), h = r.charCodeAt(o * 2 + 1), i = u - (u < Et ? dt : gt), c = h - (h < Et ? dt : gt);
    n[o] = i * 16 + c;
  }
  return n;
}
function Dn(e) {
  T(typeof e == "bigint", "Value must be a bigint."), T(e >= BigInt(0), "Value must be a non-negative bigint.");
  const t = e.toString(16);
  return $e(t);
}
function kn(e, t) {
  T(t > 0);
  const r = e >> BigInt(31);
  return !((~e & r) + (e & ~r) >> BigInt(t * 8 + -1));
}
function Ia(e, t) {
  T(typeof e == "bigint", "Value must be a bigint."), T(typeof t == "number", "Byte length must be a number."), T(t > 0, "Byte length must be greater than 0."), T(
    kn(e, t),
    "Byte length is too small to represent the given value."
  );
  let r = e;
  const n = new Uint8Array(t);
  for (let s = 0; s < n.length; s++)
    n[s] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
  return n.reverse();
}
function Bn(e) {
  T(typeof e == "number", "Value must be a number."), T(e >= 0, "Value must be a non-negative number."), T(
    Number.isSafeInteger(e),
    "Value is not a safe integer. Use `bigIntToBytes` instead."
  );
  const t = e.toString(16);
  return $e(t);
}
function Gn(e) {
  return T(typeof e == "string", "Value must be a string."), new TextEncoder().encode(e);
}
function Ca(e) {
  return T(typeof e == "string", "Value must be a string."), Wt.decode(e);
}
function Xn(e) {
  if (typeof e == "bigint")
    return Dn(e);
  if (typeof e == "number")
    return Bn(e);
  if (typeof e == "string")
    return e.startsWith("0x") ? $e(e) : Gn(e);
  if (tr(e))
    return e;
  throw new TypeError(`Unsupported value type: "${typeof e}".`);
}
function ya(e) {
  const t = new Array(e.length);
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    const o = Xn(e[s]);
    t[s] = o, r += o.length;
  }
  const n = new Uint8Array(r);
  for (let s = 0, o = 0; s < t.length; s++)
    n.set(t[s], o), o += t[s].length;
  return n;
}
function Aa(e) {
  if (typeof Buffer < "u" && e instanceof Buffer) {
    const t = e.buffer.slice(
      e.byteOffset,
      e.byteOffset + e.byteLength
    );
    return new DataView(t);
  }
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
const rr = /^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u, nr = /^[-a-z0-9]{3,8}$/u, sr = /^[-_a-zA-Z0-9]{1,32}$/u, or = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u, Hn = /^[-.%a-zA-Z0-9]{1,128}$/u, Mn = G(
  O(),
  rr
), zn = G(O(), nr), Jn = G(O(), sr), qn = G(
  O(),
  or
), Wn = G(
  O(),
  Hn
);
var Yn = /* @__PURE__ */ ((e) => (e.Eip155 = "eip155", e.Wallet = "wallet", e))(Yn || {});
function Sa(e) {
  return b(e, Mn);
}
function Zn(e) {
  return b(e, zn);
}
function Kn(e) {
  return b(e, Jn);
}
function Na(e) {
  return b(e, qn);
}
function Oa(e) {
  return b(e, Wn);
}
function ba(e) {
  const t = rr.exec(e);
  if (!(t != null && t.groups))
    throw new Error("Invalid CAIP chain ID.");
  return {
    namespace: t.groups.namespace,
    reference: t.groups.reference
  };
}
function La(e) {
  const t = or.exec(e);
  if (!(t != null && t.groups))
    throw new Error("Invalid CAIP account ID.");
  return {
    address: t.groups.accountAddress,
    chainId: t.groups.chainId,
    chain: {
      namespace: t.groups.namespace,
      reference: t.groups.reference
    }
  };
}
function va(e, t) {
  if (!Zn(e))
    throw new Error(
      `Invalid "namespace", must match: ${nr.toString()}`
    );
  if (!Kn(t))
    throw new Error(
      `Invalid "reference", must match: ${sr.toString()}`
    );
  return `${e}:${t}`;
}
const Ta = vr(
  Zr(O(), { paddingRequired: !0 }),
  44,
  44
), ir = H([ge(), kt(), O(), re]), Qn = ee(ge(), ir, Number), es = ee(kt(), ir, BigInt);
H([re, De(Uint8Array)]);
const ts = ee(
  De(Uint8Array),
  H([re]),
  $e
), rs = ee(re, De(Uint8Array), Xe);
function Fa(e) {
  try {
    const t = te(e, Qn);
    return T(
      Number.isFinite(t),
      `Expected a number-like value, got "${e}".`
    ), t;
  } catch (t) {
    throw t instanceof me ? new Error(`Expected a number-like value, got "${e}".`) : t;
  }
}
function xa(e) {
  try {
    return te(e, es);
  } catch (t) {
    throw t instanceof me ? new Error(
      `Expected a number-like value, got "${String(t.value)}".`
    ) : t;
  }
}
function Pa(e) {
  if (typeof e == "string" && e.toLowerCase() === "0x")
    return new Uint8Array();
  try {
    return te(e, ts);
  } catch (t) {
    throw t instanceof me ? new Error(
      `Expected a bytes-like value, got "${String(t.value)}".`
    ) : t;
  }
}
function _a(e) {
  if (e instanceof Uint8Array && e.length === 0 || typeof e == "string" && e.toLowerCase() === "0x")
    return "0x";
  try {
    return te(e, rs);
  } catch (t) {
    throw t instanceof me ? new Error(
      `Expected a bytes-like value, got "${String(t.value)}".`
    ) : t;
  }
}
var j;
class ar {
  constructor(t) {
    be(this, j);
    Le(this, j, new Map(t)), Object.freeze(this);
  }
  get size() {
    return x(this, j).size;
  }
  [Symbol.iterator]() {
    return x(this, j)[Symbol.iterator]();
  }
  entries() {
    return x(this, j).entries();
  }
  forEach(t, r) {
    return x(this, j).forEach(
      (n, s, o) => t.call(r, n, s, this)
    );
  }
  get(t) {
    return x(this, j).get(t);
  }
  has(t) {
    return x(this, j).has(t);
  }
  keys() {
    return x(this, j).keys();
  }
  values() {
    return x(this, j).values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([t, r]) => `${String(t)} => ${String(r)}`).join(", ")} ` : ""}}`;
  }
}
j = new WeakMap();
var U;
class cr {
  constructor(t) {
    be(this, U);
    Le(this, U, new Set(t)), Object.freeze(this);
  }
  get size() {
    return x(this, U).size;
  }
  [Symbol.iterator]() {
    return x(this, U)[Symbol.iterator]();
  }
  entries() {
    return x(this, U).entries();
  }
  // @ts-ignore
  forEach(t, r) {
    return x(this, U).forEach(
      (n, s, o) => t.call(r, n, s, this)
    );
  }
  has(t) {
    return x(this, U).has(t);
  }
  keys() {
    return x(this, U).keys();
  }
  values() {
    return x(this, U).values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((t) => String(t)).join(", ")} ` : ""}}`;
  }
}
U = new WeakMap();
Object.freeze(ar);
Object.freeze(ar.prototype);
Object.freeze(cr);
Object.freeze(cr.prototype);
const ne = (e) => (
  // The type is slightly different from a regular object struct, because we
  // want to make properties with `undefined` in their type optional, but not
  // `undefined` itself. This means that we need a type cast.
  Gt(e)
);
function mt({ path: e, branch: t }) {
  const r = e[e.length - 1];
  return Br(t[t.length - 2], r);
}
function de(e) {
  return new xr({
    ...e,
    type: `optional ${e.type}`,
    validator: (t, r) => !mt(r) || e.validator(t, r),
    refiner: (t, r) => !mt(r) || e.refiner(t, r)
  });
}
const ns = () => Ur("finite number", (e) => b(e, ge()) && Number.isFinite(e)), Ee = H([
  Bt(null),
  Pr(),
  ns(),
  O(),
  Xt(ot(() => Ee)),
  Ht(
    O(),
    ot(() => Ee)
  )
]), J = ee(Ee, _r(), (e) => (V(e, Ee), JSON.parse(
  JSON.stringify(e, (t, r) => {
    if (!(t === "__proto__" || t === "constructor"))
      return r;
  })
)));
function ja(e) {
  try {
    return ss(e), !0;
  } catch {
    return !1;
  }
}
function ss(e) {
  return te(e, J);
}
function Ua(e) {
  V(e, J, "Invalid JSON value");
  const t = JSON.stringify(e);
  return new TextEncoder().encode(t).byteLength;
}
const os = "2.0", se = Bt(os), we = Tr(H([ge(), O()])), Re = ne({
  code: Fr(),
  message: O(),
  data: de(J),
  stack: de(O())
}), ur = H([Ht(O(), J), Xt(J)]), lr = ne({
  id: we,
  jsonrpc: se,
  method: O(),
  params: de(ur)
}), fr = ne({
  jsonrpc: se,
  method: O(),
  params: de(ur)
});
function Va(e) {
  return b(e, fr);
}
function Da(e, t) {
  V(
    e,
    fr,
    "Invalid JSON-RPC notification",
    t
  );
}
function ka(e) {
  return b(e, lr);
}
function Ba(e, t) {
  V(
    e,
    lr,
    "Invalid JSON-RPC request",
    t
  );
}
const hr = Gt({
  id: we,
  jsonrpc: se,
  result: st(jr()),
  error: st(Re)
}), He = ne({
  id: we,
  jsonrpc: se,
  result: J
}), Me = ne({
  id: we,
  jsonrpc: se,
  error: Re
}), pr = H([
  He,
  Me
]);
function Ga(e) {
  return b(e, hr);
}
function Xa(e, t) {
  V(
    e,
    hr,
    "Invalid pending JSON-RPC response",
    t
  );
}
function Ha(e) {
  return b(e, pr);
}
function Ma(e, t) {
  V(
    e,
    pr,
    "Invalid JSON-RPC response",
    t
  );
}
function za(e) {
  return b(e, He);
}
function Ja(e, t) {
  V(
    e,
    He,
    "Invalid JSON-RPC success response",
    t
  );
}
function qa(e) {
  return b(e, Me);
}
function Wa(e, t) {
  V(
    e,
    Me,
    "Invalid JSON-RPC failure response",
    t
  );
}
function Ya(e) {
  return b(e, Re);
}
function Za(e, t) {
  V(
    e,
    Re,
    "Invalid JSON-RPC error",
    t
  );
}
function Ka(e) {
  const { permitEmptyString: t, permitFractions: r, permitNull: n } = {
    permitEmptyString: !0,
    permitFractions: !1,
    permitNull: !0,
    ...e
  };
  return (o) => !!(typeof o == "number" && (r || Number.isInteger(o)) || typeof o == "string" && (t || o.length > 0) || n && o === null);
}
var Ue = { exports: {} }, ve, $t;
function is() {
  if ($t) return ve;
  $t = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, s = n * 7, o = n * 365.25;
  ve = function(a, l) {
    l = l || {};
    var p = typeof a;
    if (p === "string" && a.length > 0)
      return u(a);
    if (p === "number" && isFinite(a))
      return l.long ? i(a) : h(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function u(a) {
    if (a = String(a), !(a.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (l) {
        var p = parseFloat(l[1]), d = (l[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * o;
          case "weeks":
          case "week":
          case "w":
            return p * s;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function h(a) {
    var l = Math.abs(a);
    return l >= n ? Math.round(a / n) + "d" : l >= r ? Math.round(a / r) + "h" : l >= t ? Math.round(a / t) + "m" : l >= e ? Math.round(a / e) + "s" : a + "ms";
  }
  function i(a) {
    var l = Math.abs(a);
    return l >= n ? c(a, l, n, "day") : l >= r ? c(a, l, r, "hour") : l >= t ? c(a, l, t, "minute") : l >= e ? c(a, l, e, "second") : a + " ms";
  }
  function c(a, l, p, d) {
    var $ = l >= p * 1.5;
    return Math.round(a / p) + " " + d + ($ ? "s" : "");
  }
  return ve;
}
function as(e) {
  r.debug = r, r.default = r, r.coerce = i, r.disable = o, r.enable = s, r.enabled = u, r.humanize = is(), r.destroy = c, Object.keys(e).forEach((a) => {
    r[a] = e[a];
  }), r.names = [], r.skips = [], r.formatters = {};
  function t(a) {
    let l = 0;
    for (let p = 0; p < a.length; p++)
      l = (l << 5) - l + a.charCodeAt(p), l |= 0;
    return r.colors[Math.abs(l) % r.colors.length];
  }
  r.selectColor = t;
  function r(a) {
    let l, p = null, d, $;
    function L(...A) {
      if (!L.enabled)
        return;
      const F = L, X = Number(/* @__PURE__ */ new Date()), S = X - (l || X);
      F.diff = S, F.prev = l, F.curr = X, l = X, A[0] = r.coerce(A[0]), typeof A[0] != "string" && A.unshift("%O");
      let M = 0;
      A[0] = A[0].replace(/%([a-zA-Z%])/g, (Y, Ne) => {
        if (Y === "%%")
          return "%";
        M++;
        const ae = r.formatters[Ne];
        if (typeof ae == "function") {
          const Oe = A[M];
          Y = ae.call(F, Oe), A.splice(M, 1), M--;
        }
        return Y;
      }), r.formatArgs.call(F, A), (F.log || r.log).apply(F, A);
    }
    return L.namespace = a, L.useColors = r.useColors(), L.color = r.selectColor(a), L.extend = n, L.destroy = r.destroy, Object.defineProperty(L, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (d !== r.namespaces && (d = r.namespaces, $ = r.enabled(a)), $),
      set: (A) => {
        p = A;
      }
    }), typeof r.init == "function" && r.init(L), L;
  }
  function n(a, l) {
    const p = r(this.namespace + (typeof l > "u" ? ":" : l) + a);
    return p.log = this.log, p;
  }
  function s(a) {
    r.save(a), r.namespaces = a, r.names = [], r.skips = [];
    let l;
    const p = (typeof a == "string" ? a : "").split(/[\s,]+/), d = p.length;
    for (l = 0; l < d; l++)
      p[l] && (a = p[l].replace(/\*/g, ".*?"), a[0] === "-" ? r.skips.push(new RegExp("^" + a.slice(1) + "$")) : r.names.push(new RegExp("^" + a + "$")));
  }
  function o() {
    const a = [
      ...r.names.map(h),
      ...r.skips.map(h).map((l) => "-" + l)
    ].join(",");
    return r.enable(""), a;
  }
  function u(a) {
    if (a[a.length - 1] === "*")
      return !0;
    let l, p;
    for (l = 0, p = r.skips.length; l < p; l++)
      if (r.skips[l].test(a))
        return !1;
    for (l = 0, p = r.names.length; l < p; l++)
      if (r.names[l].test(a))
        return !0;
    return !1;
  }
  function h(a) {
    return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function i(a) {
    return a instanceof Error ? a.stack || a.message : a;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var cs = as;
(function(e, t) {
  t.formatArgs = n, t.save = s, t.load = o, t.useColors = r, t.storage = u(), t.destroy = /* @__PURE__ */ (() => {
    let i = !1;
    return () => {
      i || (i = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
      return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
      return !1;
    let i;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (i = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(i[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(i) {
    if (i[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + i[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    i.splice(1, 0, c, "color: inherit");
    let a = 0, l = 0;
    i[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (a++, p === "%c" && (l = a));
    }), i.splice(l, 0, c);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(i) {
    try {
      i ? t.storage.setItem("debug", i) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function o() {
    let i;
    try {
      i = t.storage.getItem("debug");
    } catch {
    }
    return !i && typeof process < "u" && "env" in process && (i = process.env.DEBUG), i;
  }
  function u() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = cs(t);
  const { formatters: h } = e.exports;
  h.j = function(i) {
    try {
      return JSON.stringify(i);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(Ue, Ue.exports);
var us = Ue.exports;
const ls = /* @__PURE__ */ Vr(us), fs = ls("metamask");
function Qa(e) {
  return fs.extend(e);
}
function ec(e, t) {
  return e.extend(t);
}
var Ve = { exports: {} };
const hs = "2.0.0", dr = 256, ps = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, ds = 16, Es = dr - 6, gs = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Ie = {
  MAX_LENGTH: dr,
  MAX_SAFE_COMPONENT_LENGTH: ds,
  MAX_SAFE_BUILD_LENGTH: Es,
  MAX_SAFE_INTEGER: ps,
  RELEASE_TYPES: gs,
  SEMVER_SPEC_VERSION: hs,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const ms = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var Ce = ms;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: s
  } = Ie, o = Ce;
  t = e.exports = {};
  const u = t.re = [], h = t.safeRe = [], i = t.src = [], c = t.t = {};
  let a = 0;
  const l = "[a-zA-Z0-9-]", p = [
    ["\\s", 1],
    ["\\d", s],
    [l, n]
  ], d = (L) => {
    for (const [A, F] of p)
      L = L.split(`${A}*`).join(`${A}{0,${F}}`).split(`${A}+`).join(`${A}{1,${F}}`);
    return L;
  }, $ = (L, A, F) => {
    const X = d(A), S = a++;
    o(L, S, A), c[L] = S, i[S] = A, u[S] = new RegExp(A, F ? "g" : void 0), h[S] = new RegExp(X, F ? "g" : void 0);
  };
  $("NUMERICIDENTIFIER", "0|[1-9]\\d*"), $("NUMERICIDENTIFIERLOOSE", "\\d+"), $("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${l}*`), $("MAINVERSION", `(${i[c.NUMERICIDENTIFIER]})\\.(${i[c.NUMERICIDENTIFIER]})\\.(${i[c.NUMERICIDENTIFIER]})`), $("MAINVERSIONLOOSE", `(${i[c.NUMERICIDENTIFIERLOOSE]})\\.(${i[c.NUMERICIDENTIFIERLOOSE]})\\.(${i[c.NUMERICIDENTIFIERLOOSE]})`), $("PRERELEASEIDENTIFIER", `(?:${i[c.NUMERICIDENTIFIER]}|${i[c.NONNUMERICIDENTIFIER]})`), $("PRERELEASEIDENTIFIERLOOSE", `(?:${i[c.NUMERICIDENTIFIERLOOSE]}|${i[c.NONNUMERICIDENTIFIER]})`), $("PRERELEASE", `(?:-(${i[c.PRERELEASEIDENTIFIER]}(?:\\.${i[c.PRERELEASEIDENTIFIER]})*))`), $("PRERELEASELOOSE", `(?:-?(${i[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[c.PRERELEASEIDENTIFIERLOOSE]})*))`), $("BUILDIDENTIFIER", `${l}+`), $("BUILD", `(?:\\+(${i[c.BUILDIDENTIFIER]}(?:\\.${i[c.BUILDIDENTIFIER]})*))`), $("FULLPLAIN", `v?${i[c.MAINVERSION]}${i[c.PRERELEASE]}?${i[c.BUILD]}?`), $("FULL", `^${i[c.FULLPLAIN]}$`), $("LOOSEPLAIN", `[v=\\s]*${i[c.MAINVERSIONLOOSE]}${i[c.PRERELEASELOOSE]}?${i[c.BUILD]}?`), $("LOOSE", `^${i[c.LOOSEPLAIN]}$`), $("GTLT", "((?:<|>)?=?)"), $("XRANGEIDENTIFIERLOOSE", `${i[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), $("XRANGEIDENTIFIER", `${i[c.NUMERICIDENTIFIER]}|x|X|\\*`), $("XRANGEPLAIN", `[v=\\s]*(${i[c.XRANGEIDENTIFIER]})(?:\\.(${i[c.XRANGEIDENTIFIER]})(?:\\.(${i[c.XRANGEIDENTIFIER]})(?:${i[c.PRERELEASE]})?${i[c.BUILD]}?)?)?`), $("XRANGEPLAINLOOSE", `[v=\\s]*(${i[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[c.XRANGEIDENTIFIERLOOSE]})(?:${i[c.PRERELEASELOOSE]})?${i[c.BUILD]}?)?)?`), $("XRANGE", `^${i[c.GTLT]}\\s*${i[c.XRANGEPLAIN]}$`), $("XRANGELOOSE", `^${i[c.GTLT]}\\s*${i[c.XRANGEPLAINLOOSE]}$`), $("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), $("COERCE", `${i[c.COERCEPLAIN]}(?:$|[^\\d])`), $("COERCEFULL", i[c.COERCEPLAIN] + `(?:${i[c.PRERELEASE]})?(?:${i[c.BUILD]})?(?:$|[^\\d])`), $("COERCERTL", i[c.COERCE], !0), $("COERCERTLFULL", i[c.COERCEFULL], !0), $("LONETILDE", "(?:~>?)"), $("TILDETRIM", `(\\s*)${i[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", $("TILDE", `^${i[c.LONETILDE]}${i[c.XRANGEPLAIN]}$`), $("TILDELOOSE", `^${i[c.LONETILDE]}${i[c.XRANGEPLAINLOOSE]}$`), $("LONECARET", "(?:\\^)"), $("CARETTRIM", `(\\s*)${i[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", $("CARET", `^${i[c.LONECARET]}${i[c.XRANGEPLAIN]}$`), $("CARETLOOSE", `^${i[c.LONECARET]}${i[c.XRANGEPLAINLOOSE]}$`), $("COMPARATORLOOSE", `^${i[c.GTLT]}\\s*(${i[c.LOOSEPLAIN]})$|^$`), $("COMPARATOR", `^${i[c.GTLT]}\\s*(${i[c.FULLPLAIN]})$|^$`), $("COMPARATORTRIM", `(\\s*)${i[c.GTLT]}\\s*(${i[c.LOOSEPLAIN]}|${i[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", $("HYPHENRANGE", `^\\s*(${i[c.XRANGEPLAIN]})\\s+-\\s+(${i[c.XRANGEPLAIN]})\\s*$`), $("HYPHENRANGELOOSE", `^\\s*(${i[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[c.XRANGEPLAINLOOSE]})\\s*$`), $("STAR", "(<|>)?=?\\s*\\*"), $("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), $("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Ve, Ve.exports);
var oe = Ve.exports;
const $s = Object.freeze({ loose: !0 }), ws = Object.freeze({}), Rs = (e) => e ? typeof e != "object" ? $s : e : ws;
var ze = Rs;
const wt = /^[0-9]+$/, Er = (e, t) => {
  const r = wt.test(e), n = wt.test(t);
  return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
}, Is = (e, t) => Er(t, e);
var gr = {
  compareIdentifiers: Er,
  rcompareIdentifiers: Is
};
const ue = Ce, { MAX_LENGTH: Rt, MAX_SAFE_INTEGER: le } = Ie, { safeRe: It, t: Ct } = oe, Cs = ze, { compareIdentifiers: z } = gr;
let ys = class B {
  constructor(t, r) {
    if (r = Cs(r), t instanceof B) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Rt)
      throw new TypeError(
        `version is longer than ${Rt} characters`
      );
    ue("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = t.trim().match(r.loose ? It[Ct.LOOSE] : It[Ct.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > le || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > le || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > le || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const o = +s;
        if (o >= 0 && o < le)
          return o;
      }
      return s;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (ue("SemVer.compare", this.version, this.options, t), !(t instanceof B)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new B(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof B || (t = new B(t, this.options)), z(this.major, t.major) || z(this.minor, t.minor) || z(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof B || (t = new B(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], s = t.prerelease[r];
      if (ue("prerelease compare", r, n, s), n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return z(n, s);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof B || (t = new B(t, this.options));
    let r = 0;
    do {
      const n = this.build[r], s = t.build[r];
      if (ue("build compare", r, n, s), n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return z(n, s);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, r, n) {
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const s = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let o = this.prerelease.length;
          for (; --o >= 0; )
            typeof this.prerelease[o] == "number" && (this.prerelease[o]++, o = -2);
          if (o === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (r) {
          let o = [r, s];
          n === !1 && (o = [r]), z(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = o) : this.prerelease = o;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var P = ys;
const yt = P, As = (e, t, r = !1) => {
  if (e instanceof yt)
    return e;
  try {
    return new yt(e, t);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var W = As;
const Ss = W, Ns = (e, t) => {
  const r = Ss(e, t);
  return r ? r.version : null;
};
var Os = Ns;
const bs = W, Ls = (e, t) => {
  const r = bs(e.trim().replace(/^[=v]+/, ""), t);
  return r ? r.version : null;
};
var vs = Ls;
const At = P, Ts = (e, t, r, n, s) => {
  typeof r == "string" && (s = n, n = r, r = void 0);
  try {
    return new At(
      e instanceof At ? e.version : e,
      r
    ).inc(t, n, s).version;
  } catch {
    return null;
  }
};
var Fs = Ts;
const St = W, xs = (e, t) => {
  const r = St(e, null, !0), n = St(t, null, !0), s = r.compare(n);
  if (s === 0)
    return null;
  const o = s > 0, u = o ? r : n, h = o ? n : r, i = !!u.prerelease.length;
  if (!!h.prerelease.length && !i)
    return !h.patch && !h.minor ? "major" : u.patch ? "patch" : u.minor ? "minor" : "major";
  const a = i ? "pre" : "";
  return r.major !== n.major ? a + "major" : r.minor !== n.minor ? a + "minor" : r.patch !== n.patch ? a + "patch" : "prerelease";
};
var Ps = xs;
const _s = P, js = (e, t) => new _s(e, t).major;
var Us = js;
const Vs = P, Ds = (e, t) => new Vs(e, t).minor;
var ks = Ds;
const Bs = P, Gs = (e, t) => new Bs(e, t).patch;
var Xs = Gs;
const Hs = W, Ms = (e, t) => {
  const r = Hs(e, t);
  return r && r.prerelease.length ? r.prerelease : null;
};
var zs = Ms;
const Nt = P, Js = (e, t, r) => new Nt(e, r).compare(new Nt(t, r));
var D = Js;
const qs = D, Ws = (e, t, r) => qs(t, e, r);
var Ys = Ws;
const Zs = D, Ks = (e, t) => Zs(e, t, !0);
var Qs = Ks;
const Ot = P, eo = (e, t, r) => {
  const n = new Ot(e, r), s = new Ot(t, r);
  return n.compare(s) || n.compareBuild(s);
};
var Je = eo;
const to = Je, ro = (e, t) => e.sort((r, n) => to(r, n, t));
var no = ro;
const so = Je, oo = (e, t) => e.sort((r, n) => so(n, r, t));
var io = oo;
const ao = D, co = (e, t, r) => ao(e, t, r) > 0;
var ye = co;
const uo = D, lo = (e, t, r) => uo(e, t, r) < 0;
var qe = lo;
const fo = D, ho = (e, t, r) => fo(e, t, r) === 0;
var mr = ho;
const po = D, Eo = (e, t, r) => po(e, t, r) !== 0;
var $r = Eo;
const go = D, mo = (e, t, r) => go(e, t, r) >= 0;
var We = mo;
const $o = D, wo = (e, t, r) => $o(e, t, r) <= 0;
var Ye = wo;
const Ro = mr, Io = $r, Co = ye, yo = We, Ao = qe, So = Ye, No = (e, t, r, n) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
    case "":
    case "=":
    case "==":
      return Ro(e, r, n);
    case "!=":
      return Io(e, r, n);
    case ">":
      return Co(e, r, n);
    case ">=":
      return yo(e, r, n);
    case "<":
      return Ao(e, r, n);
    case "<=":
      return So(e, r, n);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var wr = No;
const Oo = P, bo = W, { safeRe: fe, t: he } = oe, Lo = (e, t) => {
  if (e instanceof Oo)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let r = null;
  if (!t.rtl)
    r = e.match(t.includePrerelease ? fe[he.COERCEFULL] : fe[he.COERCE]);
  else {
    const i = t.includePrerelease ? fe[he.COERCERTLFULL] : fe[he.COERCERTL];
    let c;
    for (; (c = i.exec(e)) && (!r || r.index + r[0].length !== e.length); )
      (!r || c.index + c[0].length !== r.index + r[0].length) && (r = c), i.lastIndex = c.index + c[1].length + c[2].length;
    i.lastIndex = -1;
  }
  if (r === null)
    return null;
  const n = r[2], s = r[3] || "0", o = r[4] || "0", u = t.includePrerelease && r[5] ? `-${r[5]}` : "", h = t.includePrerelease && r[6] ? `+${r[6]}` : "";
  return bo(`${n}.${s}.${o}${u}${h}`, t);
};
var vo = Lo;
class To {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const r = this.map.get(t);
    if (r !== void 0)
      return this.map.delete(t), this.map.set(t, r), r;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, r) {
    if (!this.delete(t) && r !== void 0) {
      if (this.map.size >= this.max) {
        const s = this.map.keys().next().value;
        this.delete(s);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var Fo = To, Te, bt;
function k() {
  if (bt) return Te;
  bt = 1;
  const e = /\s+/g;
  class t {
    constructor(f, w) {
      if (w = s(w), f instanceof t)
        return f.loose === !!w.loose && f.includePrerelease === !!w.includePrerelease ? f : new t(f.raw, w);
      if (f instanceof o)
        return this.raw = f.value, this.set = [[f]], this.formatted = void 0, this;
      if (this.options = w, this.loose = !!w.loose, this.includePrerelease = !!w.includePrerelease, this.raw = f.trim().replace(e, " "), this.set = this.raw.split("||").map((g) => this.parseRange(g.trim())).filter((g) => g.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const g = this.set[0];
        if (this.set = this.set.filter((R) => !L(R[0])), this.set.length === 0)
          this.set = [g];
        else if (this.set.length > 1) {
          for (const R of this.set)
            if (R.length === 1 && A(R[0])) {
              this.set = [R];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let f = 0; f < this.set.length; f++) {
          f > 0 && (this.formatted += "||");
          const w = this.set[f];
          for (let g = 0; g < w.length; g++)
            g > 0 && (this.formatted += " "), this.formatted += w[g].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(f) {
      const g = ((this.options.includePrerelease && d) | (this.options.loose && $)) + ":" + f, R = n.get(g);
      if (R)
        return R;
      const m = this.options.loose, I = m ? i[c.HYPHENRANGELOOSE] : i[c.HYPHENRANGE];
      f = f.replace(I, Sr(this.options.includePrerelease)), u("hyphen replace", f), f = f.replace(i[c.COMPARATORTRIM], a), u("comparator trim", f), f = f.replace(i[c.TILDETRIM], l), u("tilde trim", f), f = f.replace(i[c.CARETTRIM], p), u("caret trim", f);
      let y = f.split(" ").map((v) => X(v, this.options)).join(" ").split(/\s+/).map((v) => Ar(v, this.options));
      m && (y = y.filter((v) => (u("loose invalid filter", v, this.options), !!v.match(i[c.COMPARATORLOOSE])))), u("range list", y);
      const C = /* @__PURE__ */ new Map(), N = y.map((v) => new o(v, this.options));
      for (const v of N) {
        if (L(v))
          return [v];
        C.set(v.value, v);
      }
      C.size > 1 && C.has("") && C.delete("");
      const _ = [...C.values()];
      return n.set(g, _), _;
    }
    intersects(f, w) {
      if (!(f instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((g) => F(g, w) && f.set.some((R) => F(R, w) && g.every((m) => R.every((I) => m.intersects(I, w)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(f) {
      if (!f)
        return !1;
      if (typeof f == "string")
        try {
          f = new h(f, this.options);
        } catch {
          return !1;
        }
      for (let w = 0; w < this.set.length; w++)
        if (Nr(this.set[w], f, this.options))
          return !0;
      return !1;
    }
  }
  Te = t;
  const r = Fo, n = new r(), s = ze, o = Ae(), u = Ce, h = P, {
    safeRe: i,
    t: c,
    comparatorTrimReplace: a,
    tildeTrimReplace: l,
    caretTrimReplace: p
  } = oe, { FLAG_INCLUDE_PRERELEASE: d, FLAG_LOOSE: $ } = Ie, L = (E) => E.value === "<0.0.0-0", A = (E) => E.value === "", F = (E, f) => {
    let w = !0;
    const g = E.slice();
    let R = g.pop();
    for (; w && g.length; )
      w = g.every((m) => R.intersects(m, f)), R = g.pop();
    return w;
  }, X = (E, f) => (u("comp", E, f), E = Y(E, f), u("caret", E), E = M(E, f), u("tildes", E), E = ae(E, f), u("xrange", E), E = yr(E, f), u("stars", E), E), S = (E) => !E || E.toLowerCase() === "x" || E === "*", M = (E, f) => E.trim().split(/\s+/).map((w) => et(w, f)).join(" "), et = (E, f) => {
    const w = f.loose ? i[c.TILDELOOSE] : i[c.TILDE];
    return E.replace(w, (g, R, m, I, y) => {
      u("tilde", E, g, R, m, I, y);
      let C;
      return S(R) ? C = "" : S(m) ? C = `>=${R}.0.0 <${+R + 1}.0.0-0` : S(I) ? C = `>=${R}.${m}.0 <${R}.${+m + 1}.0-0` : y ? (u("replaceTilde pr", y), C = `>=${R}.${m}.${I}-${y} <${R}.${+m + 1}.0-0`) : C = `>=${R}.${m}.${I} <${R}.${+m + 1}.0-0`, u("tilde return", C), C;
    });
  }, Y = (E, f) => E.trim().split(/\s+/).map((w) => Ne(w, f)).join(" "), Ne = (E, f) => {
    u("caret", E, f);
    const w = f.loose ? i[c.CARETLOOSE] : i[c.CARET], g = f.includePrerelease ? "-0" : "";
    return E.replace(w, (R, m, I, y, C) => {
      u("caret", E, R, m, I, y, C);
      let N;
      return S(m) ? N = "" : S(I) ? N = `>=${m}.0.0${g} <${+m + 1}.0.0-0` : S(y) ? m === "0" ? N = `>=${m}.${I}.0${g} <${m}.${+I + 1}.0-0` : N = `>=${m}.${I}.0${g} <${+m + 1}.0.0-0` : C ? (u("replaceCaret pr", C), m === "0" ? I === "0" ? N = `>=${m}.${I}.${y}-${C} <${m}.${I}.${+y + 1}-0` : N = `>=${m}.${I}.${y}-${C} <${m}.${+I + 1}.0-0` : N = `>=${m}.${I}.${y}-${C} <${+m + 1}.0.0-0`) : (u("no pr"), m === "0" ? I === "0" ? N = `>=${m}.${I}.${y}${g} <${m}.${I}.${+y + 1}-0` : N = `>=${m}.${I}.${y}${g} <${m}.${+I + 1}.0-0` : N = `>=${m}.${I}.${y} <${+m + 1}.0.0-0`), u("caret return", N), N;
    });
  }, ae = (E, f) => (u("replaceXRanges", E, f), E.split(/\s+/).map((w) => Oe(w, f)).join(" ")), Oe = (E, f) => {
    E = E.trim();
    const w = f.loose ? i[c.XRANGELOOSE] : i[c.XRANGE];
    return E.replace(w, (g, R, m, I, y, C) => {
      u("xRange", E, g, R, m, I, y, C);
      const N = S(m), _ = N || S(I), v = _ || S(y), Z = v;
      return R === "=" && Z && (R = ""), C = f.includePrerelease ? "-0" : "", N ? R === ">" || R === "<" ? g = "<0.0.0-0" : g = "*" : R && Z ? (_ && (I = 0), y = 0, R === ">" ? (R = ">=", _ ? (m = +m + 1, I = 0, y = 0) : (I = +I + 1, y = 0)) : R === "<=" && (R = "<", _ ? m = +m + 1 : I = +I + 1), R === "<" && (C = "-0"), g = `${R + m}.${I}.${y}${C}`) : _ ? g = `>=${m}.0.0${C} <${+m + 1}.0.0-0` : v && (g = `>=${m}.${I}.0${C} <${m}.${+I + 1}.0-0`), u("xRange return", g), g;
    });
  }, yr = (E, f) => (u("replaceStars", E, f), E.trim().replace(i[c.STAR], "")), Ar = (E, f) => (u("replaceGTE0", E, f), E.trim().replace(i[f.includePrerelease ? c.GTE0PRE : c.GTE0], "")), Sr = (E) => (f, w, g, R, m, I, y, C, N, _, v, Z) => (S(g) ? w = "" : S(R) ? w = `>=${g}.0.0${E ? "-0" : ""}` : S(m) ? w = `>=${g}.${R}.0${E ? "-0" : ""}` : I ? w = `>=${w}` : w = `>=${w}${E ? "-0" : ""}`, S(N) ? C = "" : S(_) ? C = `<${+N + 1}.0.0-0` : S(v) ? C = `<${N}.${+_ + 1}.0-0` : Z ? C = `<=${N}.${_}.${v}-${Z}` : E ? C = `<${N}.${_}.${+v + 1}-0` : C = `<=${C}`, `${w} ${C}`.trim()), Nr = (E, f, w) => {
    for (let g = 0; g < E.length; g++)
      if (!E[g].test(f))
        return !1;
    if (f.prerelease.length && !w.includePrerelease) {
      for (let g = 0; g < E.length; g++)
        if (u(E[g].semver), E[g].semver !== o.ANY && E[g].semver.prerelease.length > 0) {
          const R = E[g].semver;
          if (R.major === f.major && R.minor === f.minor && R.patch === f.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Te;
}
var Fe, Lt;
function Ae() {
  if (Lt) return Fe;
  Lt = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(a, l) {
      if (l = r(l), a instanceof t) {
        if (a.loose === !!l.loose)
          return a;
        a = a.value;
      }
      a = a.trim().split(/\s+/).join(" "), u("comparator", a, l), this.options = l, this.loose = !!l.loose, this.parse(a), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, u("comp", this);
    }
    parse(a) {
      const l = this.options.loose ? n[s.COMPARATORLOOSE] : n[s.COMPARATOR], p = a.match(l);
      if (!p)
        throw new TypeError(`Invalid comparator: ${a}`);
      this.operator = p[1] !== void 0 ? p[1] : "", this.operator === "=" && (this.operator = ""), p[2] ? this.semver = new h(p[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(a) {
      if (u("Comparator.test", a, this.options.loose), this.semver === e || a === e)
        return !0;
      if (typeof a == "string")
        try {
          a = new h(a, this.options);
        } catch {
          return !1;
        }
      return o(a, this.operator, this.semver, this.options);
    }
    intersects(a, l) {
      if (!(a instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new i(a.value, l).test(this.value) : a.operator === "" ? a.value === "" ? !0 : new i(this.value, l).test(a.semver) : (l = r(l), l.includePrerelease && (this.value === "<0.0.0-0" || a.value === "<0.0.0-0") || !l.includePrerelease && (this.value.startsWith("<0.0.0") || a.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && a.operator.startsWith(">") || this.operator.startsWith("<") && a.operator.startsWith("<") || this.semver.version === a.semver.version && this.operator.includes("=") && a.operator.includes("=") || o(this.semver, "<", a.semver, l) && this.operator.startsWith(">") && a.operator.startsWith("<") || o(this.semver, ">", a.semver, l) && this.operator.startsWith("<") && a.operator.startsWith(">")));
    }
  }
  Fe = t;
  const r = ze, { safeRe: n, t: s } = oe, o = wr, u = Ce, h = P, i = k();
  return Fe;
}
const xo = k(), Po = (e, t, r) => {
  try {
    t = new xo(t, r);
  } catch {
    return !1;
  }
  return t.test(e);
};
var Se = Po;
const _o = k(), jo = (e, t) => new _o(e, t).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var Uo = jo;
const Vo = P, Do = k(), ko = (e, t, r) => {
  let n = null, s = null, o = null;
  try {
    o = new Do(t, r);
  } catch {
    return null;
  }
  return e.forEach((u) => {
    o.test(u) && (!n || s.compare(u) === -1) && (n = u, s = new Vo(n, r));
  }), n;
};
var Bo = ko;
const Go = P, Xo = k(), Ho = (e, t, r) => {
  let n = null, s = null, o = null;
  try {
    o = new Xo(t, r);
  } catch {
    return null;
  }
  return e.forEach((u) => {
    o.test(u) && (!n || s.compare(u) === 1) && (n = u, s = new Go(n, r));
  }), n;
};
var Mo = Ho;
const xe = P, zo = k(), vt = ye, Jo = (e, t) => {
  e = new zo(e, t);
  let r = new xe("0.0.0");
  if (e.test(r) || (r = new xe("0.0.0-0"), e.test(r)))
    return r;
  r = null;
  for (let n = 0; n < e.set.length; ++n) {
    const s = e.set[n];
    let o = null;
    s.forEach((u) => {
      const h = new xe(u.semver.version);
      switch (u.operator) {
        case ">":
          h.prerelease.length === 0 ? h.patch++ : h.prerelease.push(0), h.raw = h.format();
        case "":
        case ">=":
          (!o || vt(h, o)) && (o = h);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${u.operator}`);
      }
    }), o && (!r || vt(r, o)) && (r = o);
  }
  return r && e.test(r) ? r : null;
};
var qo = Jo;
const Wo = k(), Yo = (e, t) => {
  try {
    return new Wo(e, t).range || "*";
  } catch {
    return null;
  }
};
var Zo = Yo;
const Ko = P, Rr = Ae(), { ANY: Qo } = Rr, ei = k(), ti = Se, Tt = ye, Ft = qe, ri = Ye, ni = We, si = (e, t, r, n) => {
  e = new Ko(e, n), t = new ei(t, n);
  let s, o, u, h, i;
  switch (r) {
    case ">":
      s = Tt, o = ri, u = Ft, h = ">", i = ">=";
      break;
    case "<":
      s = Ft, o = ni, u = Tt, h = "<", i = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (ti(e, t, n))
    return !1;
  for (let c = 0; c < t.set.length; ++c) {
    const a = t.set[c];
    let l = null, p = null;
    if (a.forEach((d) => {
      d.semver === Qo && (d = new Rr(">=0.0.0")), l = l || d, p = p || d, s(d.semver, l.semver, n) ? l = d : u(d.semver, p.semver, n) && (p = d);
    }), l.operator === h || l.operator === i || (!p.operator || p.operator === h) && o(e, p.semver))
      return !1;
    if (p.operator === i && u(e, p.semver))
      return !1;
  }
  return !0;
};
var Ze = si;
const oi = Ze, ii = (e, t, r) => oi(e, t, ">", r);
var ai = ii;
const ci = Ze, ui = (e, t, r) => ci(e, t, "<", r);
var li = ui;
const xt = k(), fi = (e, t, r) => (e = new xt(e, r), t = new xt(t, r), e.intersects(t, r));
var hi = fi;
const pi = Se, di = D;
var Ei = (e, t, r) => {
  const n = [];
  let s = null, o = null;
  const u = e.sort((a, l) => di(a, l, r));
  for (const a of u)
    pi(a, t, r) ? (o = a, s || (s = a)) : (o && n.push([s, o]), o = null, s = null);
  s && n.push([s, null]);
  const h = [];
  for (const [a, l] of n)
    a === l ? h.push(a) : !l && a === u[0] ? h.push("*") : l ? a === u[0] ? h.push(`<=${l}`) : h.push(`${a} - ${l}`) : h.push(`>=${a}`);
  const i = h.join(" || "), c = typeof t.raw == "string" ? t.raw : String(t);
  return i.length < c.length ? i : t;
};
const Pt = k(), Ke = Ae(), { ANY: Pe } = Ke, Q = Se, Qe = D, gi = (e, t, r = {}) => {
  if (e === t)
    return !0;
  e = new Pt(e, r), t = new Pt(t, r);
  let n = !1;
  e: for (const s of e.set) {
    for (const o of t.set) {
      const u = $i(s, o, r);
      if (n = n || u !== null, u)
        continue e;
    }
    if (n)
      return !1;
  }
  return !0;
}, mi = [new Ke(">=0.0.0-0")], _t = [new Ke(">=0.0.0")], $i = (e, t, r) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Pe) {
    if (t.length === 1 && t[0].semver === Pe)
      return !0;
    r.includePrerelease ? e = mi : e = _t;
  }
  if (t.length === 1 && t[0].semver === Pe) {
    if (r.includePrerelease)
      return !0;
    t = _t;
  }
  const n = /* @__PURE__ */ new Set();
  let s, o;
  for (const d of e)
    d.operator === ">" || d.operator === ">=" ? s = jt(s, d, r) : d.operator === "<" || d.operator === "<=" ? o = Ut(o, d, r) : n.add(d.semver);
  if (n.size > 1)
    return null;
  let u;
  if (s && o) {
    if (u = Qe(s.semver, o.semver, r), u > 0)
      return null;
    if (u === 0 && (s.operator !== ">=" || o.operator !== "<="))
      return null;
  }
  for (const d of n) {
    if (s && !Q(d, String(s), r) || o && !Q(d, String(o), r))
      return null;
    for (const $ of t)
      if (!Q(d, String($), r))
        return !1;
    return !0;
  }
  let h, i, c, a, l = o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : !1, p = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
  l && l.prerelease.length === 1 && o.operator === "<" && l.prerelease[0] === 0 && (l = !1);
  for (const d of t) {
    if (a = a || d.operator === ">" || d.operator === ">=", c = c || d.operator === "<" || d.operator === "<=", s) {
      if (p && d.semver.prerelease && d.semver.prerelease.length && d.semver.major === p.major && d.semver.minor === p.minor && d.semver.patch === p.patch && (p = !1), d.operator === ">" || d.operator === ">=") {
        if (h = jt(s, d, r), h === d && h !== s)
          return !1;
      } else if (s.operator === ">=" && !Q(s.semver, String(d), r))
        return !1;
    }
    if (o) {
      if (l && d.semver.prerelease && d.semver.prerelease.length && d.semver.major === l.major && d.semver.minor === l.minor && d.semver.patch === l.patch && (l = !1), d.operator === "<" || d.operator === "<=") {
        if (i = Ut(o, d, r), i === d && i !== o)
          return !1;
      } else if (o.operator === "<=" && !Q(o.semver, String(d), r))
        return !1;
    }
    if (!d.operator && (o || s) && u !== 0)
      return !1;
  }
  return !(s && c && !o && u !== 0 || o && a && !s && u !== 0 || p || l);
}, jt = (e, t, r) => {
  if (!e)
    return t;
  const n = Qe(e.semver, t.semver, r);
  return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, Ut = (e, t, r) => {
  if (!e)
    return t;
  const n = Qe(e.semver, t.semver, r);
  return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var wi = gi;
const _e = oe, Vt = Ie, Ri = P, Dt = gr, Ii = W, Ci = Os, yi = vs, Ai = Fs, Si = Ps, Ni = Us, Oi = ks, bi = Xs, Li = zs, vi = D, Ti = Ys, Fi = Qs, xi = Je, Pi = no, _i = io, ji = ye, Ui = qe, Vi = mr, Di = $r, ki = We, Bi = Ye, Gi = wr, Xi = vo, Hi = Ae(), Mi = k(), zi = Se, Ji = Uo, qi = Bo, Wi = Mo, Yi = qo, Zi = Zo, Ki = Ze, Qi = ai, ea = li, ta = hi, ra = Ei, na = wi;
var ie = {
  parse: Ii,
  valid: Ci,
  clean: yi,
  inc: Ai,
  diff: Si,
  major: Ni,
  minor: Oi,
  patch: bi,
  prerelease: Li,
  compare: vi,
  rcompare: Ti,
  compareLoose: Fi,
  compareBuild: xi,
  sort: Pi,
  rsort: _i,
  gt: ji,
  lt: Ui,
  eq: Vi,
  neq: Di,
  gte: ki,
  lte: Bi,
  cmp: Gi,
  coerce: Xi,
  Comparator: Hi,
  Range: Mi,
  satisfies: zi,
  toComparators: Ji,
  maxSatisfying: qi,
  minSatisfying: Wi,
  minVersion: Yi,
  validRange: Zi,
  outside: Ki,
  gtr: Qi,
  ltr: ea,
  intersects: ta,
  simplifyRange: ra,
  subset: na,
  SemVer: Ri,
  re: _e.re,
  src: _e.src,
  tokens: _e.t,
  SEMVER_SPEC_VERSION: Vt.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Vt.RELEASE_TYPES,
  compareIdentifiers: Dt.compareIdentifiers,
  rcompareIdentifiers: Dt.rcompareIdentifiers
};
const Ir = Mt(
  O(),
  "Version",
  (e) => ie.valid(e) === null ? `Expected SemVer version, got "${e}"` : !0
), Cr = Mt(
  O(),
  "Version range",
  (e) => ie.validRange(e) === null ? `Expected SemVer range, got "${e}"` : !0
);
function tc(e) {
  return b(e, Ir);
}
function rc(e) {
  return b(e, Cr);
}
function nc(e) {
  V(e, Ir);
}
function sc(e) {
  V(e, Cr);
}
function oc(e, t) {
  return ie.gt(e, t);
}
function ic(e, t) {
  return ie.gtr(e, t);
}
function ac(e, t) {
  return ie.satisfies(e, t, {
    includePrerelease: !0
  });
}
export {
  Jr as $,
  Jt as A,
  sr as B,
  rr as C,
  or as D,
  Hn as E,
  Mn as F,
  zn as G,
  Jn as H,
  qn as I,
  Wn as J,
  Yn as K,
  Sa as L,
  Zn as M,
  Kn as N,
  Na as O,
  Oa as P,
  ba as Q,
  La as R,
  va as S,
  Ta as T,
  Fa as U,
  xa as V,
  Pa as W,
  _a as X,
  ar as Y,
  cr as Z,
  zr as _,
  T as a,
  sc as a$,
  ha as a0,
  qr as a1,
  pa as a2,
  bn as a3,
  re as a4,
  Ln as a5,
  er as a6,
  vn as a7,
  Tn as a8,
  Ea as a9,
  Xa as aA,
  Ha as aB,
  Ma as aC,
  za as aD,
  Ja as aE,
  qa as aF,
  Wa as aG,
  Ya as aH,
  Za as aI,
  Ka as aJ,
  Qa as aK,
  ec as aL,
  aa as aM,
  Dr as aN,
  kr as aO,
  ca as aP,
  Gr as aQ,
  Xr as aR,
  ua as aS,
  Hr as aT,
  la as aU,
  fa as aV,
  Ir as aW,
  Cr as aX,
  tc as aY,
  rc as aZ,
  nc as a_,
  ga as aa,
  xn as ab,
  Pn as ac,
  je as ad,
  ne as ae,
  de as af,
  Ee as ag,
  J as ah,
  ja as ai,
  ss as aj,
  Ua as ak,
  os as al,
  se as am,
  we as an,
  Re as ao,
  ur as ap,
  lr as aq,
  fr as ar,
  Va as as,
  Da as at,
  Ba as au,
  hr as av,
  He as aw,
  Me as ax,
  pr as ay,
  Ga as az,
  _n as b,
  oc as b0,
  ic as b1,
  ac as b2,
  Fn as c,
  V as d,
  da as e,
  Zr as f,
  tr as g,
  Br as h,
  ka as i,
  q as j,
  Xe as k,
  Vn as l,
  ma as m,
  $a as n,
  wa as o,
  Ra as p,
  $e as q,
  Dn as r,
  Ia as s,
  Bn as t,
  Gn as u,
  Ca as v,
  Xn as w,
  ya as x,
  Aa as y,
  nr as z
};
