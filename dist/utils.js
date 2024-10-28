import { a as e, b as t, c as o } from "./versions-BzFJWa4R.js";
import { A, E as y, D as N, C as V, z as f, B as x, J as T, I as h, F as B, G as H, H as P, T as _, aR as M, Y as w, Z as k, a5 as j, a6 as z, a3 as F, ao as G, ax as O, an as U, ar as X, ap as W, aq as v, ay as q, aw as K, am as L, aQ as Y, ah as $, K as Q, av as Z, a4 as D, ag as ss, aX as as, aW as es, e as ts, j as rs, aI as ns, aG as is, at as os, au as cs, aC as us, aE as ps, aA as Ss, a$ as gs, a_ as Rs, a9 as ds, d as Is, f as Cs, v as ms, r as bs, p as Es, l as Js, k as ls, n as As, m as ys, o as Ns, aV as Vs, aU as fs, x as xs, V as Ts, W as hs, y as Bs, X as Hs, aL as Ps, U as _s, aK as Ms, af as ws, ab as ks, a1 as js, aJ as zs, ak as Fs, aP as Gs, aj as Os, b1 as Us, b0 as Xs, h as Ws, q as vs, aT as qs, g as Ks, P as Ls, O as Ys, L as $s, M as Qs, N as Zs, _ as Ds, $ as sa, a0 as aa, a7 as ea, aH as ta, aF as ra, as as na, i as ia, aB as oa, aD as ca, aM as ua, aN as pa, aO as Sa, az as ga, aS as Ra, a8 as da, ac as Ia, aa as Ca, ai as ma, aZ as ba, aY as Ea, al as Ja, t as la, ae as Aa, R as ya, Q as Na, ad as Va, b2 as fa, s as xa, u as Ta, S as ha, w as Ba, a2 as Ha } from "./versions-BzFJWa4R.js";
const R = (s) => (e(typeof s == "number", "Value must be a number."), e(s >= 0, "Value must be a non-negative number."), e(
  Number.isSafeInteger(s),
  "Value is not a safe integer. Use `bigIntToHex` instead."
), t(s.toString(16))), d = (s) => (e(typeof s == "bigint", "Value must be a bigint."), e(s >= 0, "Value must be a non-negative bigint."), t(s.toString(16))), I = (s) => {
  o(s);
  const a = parseInt(s, 16);
  return e(
    Number.isSafeInteger(a),
    "Value is not a safe integer. Use `hexToBigInt` instead."
  ), a;
}, C = (s) => (o(s), BigInt(t(s)));
function m({
  suppressUnhandledRejection: s = !1
} = {}) {
  let a, r;
  const n = new Promise(
    (i, u) => {
      a = i, r = u;
    }
  );
  return s && n.catch((i) => {
  }), { promise: n, resolve: a, reject: r };
}
var p = /* @__PURE__ */ ((s) => (s[s.Millisecond = 1] = "Millisecond", s[s.Second = 1e3] = "Second", s[s.Minute = 6e4] = "Minute", s[s.Hour = 36e5] = "Hour", s[s.Day = 864e5] = "Day", s[s.Week = 6048e5] = "Week", s[s.Year = 31536e6] = "Year", s))(p || {});
const S = (s) => Number.isInteger(s) && s >= 0, c = (s, a) => {
  if (!S(s))
    throw new Error(
      `"${a}" must be a non-negative integer. Received: "${s}".`
    );
};
function b(s, a) {
  return c(s, "count"), s * a;
}
function E(s) {
  return c(s, "timestamp"), Date.now() - s;
}
export {
  A as AssertionError,
  y as CAIP_ACCOUNT_ADDRESS_REGEX,
  N as CAIP_ACCOUNT_ID_REGEX,
  V as CAIP_CHAIN_ID_REGEX,
  f as CAIP_NAMESPACE_REGEX,
  x as CAIP_REFERENCE_REGEX,
  T as CaipAccountAddressStruct,
  h as CaipAccountIdStruct,
  B as CaipChainIdStruct,
  H as CaipNamespaceStruct,
  P as CaipReferenceStruct,
  _ as ChecksumStruct,
  p as Duration,
  M as ESCAPE_CHARACTERS_REGEXP,
  w as FrozenMap,
  k as FrozenSet,
  j as HexAddressStruct,
  z as HexChecksumAddressStruct,
  F as HexStruct,
  G as JsonRpcErrorStruct,
  O as JsonRpcFailureStruct,
  U as JsonRpcIdStruct,
  X as JsonRpcNotificationStruct,
  W as JsonRpcParamsStruct,
  v as JsonRpcRequestStruct,
  q as JsonRpcResponseStruct,
  K as JsonRpcSuccessStruct,
  L as JsonRpcVersionStruct,
  Y as JsonSize,
  $ as JsonStruct,
  Q as KnownCaipNamespace,
  Z as PendingJsonRpcResponseStruct,
  D as StrictHexStruct,
  ss as UnsafeJsonStruct,
  as as VersionRangeStruct,
  es as VersionStruct,
  t as add0x,
  e as assert,
  ts as assertExhaustive,
  rs as assertIsBytes,
  o as assertIsHexString,
  ns as assertIsJsonRpcError,
  is as assertIsJsonRpcFailure,
  os as assertIsJsonRpcNotification,
  cs as assertIsJsonRpcRequest,
  us as assertIsJsonRpcResponse,
  ps as assertIsJsonRpcSuccess,
  Ss as assertIsPendingJsonRpcResponse,
  gs as assertIsSemVerRange,
  Rs as assertIsSemVerVersion,
  ds as assertIsStrictHexString,
  Is as assertStruct,
  Cs as base64,
  ms as base64ToBytes,
  bs as bigIntToBytes,
  d as bigIntToHex,
  Es as bytesToBase64,
  Js as bytesToBigInt,
  ls as bytesToHex,
  As as bytesToNumber,
  ys as bytesToSignedBigInt,
  Ns as bytesToString,
  Vs as calculateNumberSize,
  fs as calculateStringSize,
  xs as concatBytes,
  Ts as createBigInt,
  hs as createBytes,
  Bs as createDataView,
  m as createDeferredPromise,
  Hs as createHex,
  Ps as createModuleLogger,
  _s as createNumber,
  Ms as createProjectLogger,
  ws as exactOptional,
  ks as getChecksumAddress,
  js as getErrorMessage,
  zs as getJsonRpcIdValidator,
  Fs as getJsonSize,
  Gs as getKnownPropertyNames,
  Os as getSafeJson,
  Us as gtRange,
  Xs as gtVersion,
  Ws as hasProperty,
  C as hexToBigInt,
  vs as hexToBytes,
  I as hexToNumber,
  b as inMilliseconds,
  qs as isASCII,
  Ks as isBytes,
  Ls as isCaipAccountAddress,
  Ys as isCaipAccountId,
  $s as isCaipChainId,
  Qs as isCaipNamespace,
  Zs as isCaipReference,
  Ds as isErrorWithCode,
  sa as isErrorWithMessage,
  aa as isErrorWithStack,
  ea as isHexString,
  ta as isJsonRpcError,
  ra as isJsonRpcFailure,
  na as isJsonRpcNotification,
  ia as isJsonRpcRequest,
  oa as isJsonRpcResponse,
  ca as isJsonRpcSuccess,
  ua as isNonEmptyArray,
  pa as isNullOrUndefined,
  Sa as isObject,
  ga as isPendingJsonRpcResponse,
  Ra as isPlainObject,
  da as isStrictHexString,
  Ia as isValidChecksumAddress,
  Ca as isValidHexAddress,
  ma as isValidJson,
  ba as isValidSemVerRange,
  Ea as isValidSemVerVersion,
  Ja as jsonrpc2,
  la as numberToBytes,
  R as numberToHex,
  Aa as object,
  ya as parseCaipAccountId,
  Na as parseCaipChainId,
  Va as remove0x,
  fa as satisfiesVersionRange,
  xa as signedBigIntToBytes,
  Ta as stringToBytes,
  E as timeSince,
  ha as toCaipChainId,
  Ba as valueToBytes,
  Ha as wrapError
};
