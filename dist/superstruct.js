var M = Object.defineProperty;
var T = (e, t, n) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (T(e, typeof t != "symbol" ? t + "" : t, n), n);
class V extends TypeError {
  constructor(n, r) {
    let i;
    const { message: o, explanation: f, ...c } = n, { path: a } = n, s = a.length === 0 ? o : `At path: ${a.join(".")} -- ${o}`;
    super(f ?? s);
    p(this, "value");
    p(this, "key");
    p(this, "type");
    p(this, "refinement");
    p(this, "path");
    p(this, "branch");
    p(this, "failures");
    f != null && (this.cause = s), Object.assign(this, c), this.name = this.constructor.name, this.failures = () => i ?? (i = [n, ...r()]);
  }
}
function I(e) {
  return l(e) && typeof e[Symbol.iterator] == "function";
}
function l(e) {
  return typeof e == "object" && e !== null;
}
function E(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function d(e) {
  return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`;
}
function _(e) {
  const { done: t, value: n } = e.next();
  return t ? void 0 : n;
}
function D(e, t, n, r) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = { message: e });
  const { path: i, branch: o } = t, { type: f } = n, {
    refinement: c,
    message: a = `Expected a value of type \`${f}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${d(r)}\``
  } = e;
  return {
    value: r,
    type: f,
    refinement: c,
    key: i[i.length - 1],
    path: i,
    branch: o,
    ...e,
    message: a
  };
}
function* j(e, t, n, r) {
  I(e) || (e = [e]);
  for (const i of e) {
    const o = D(i, t, n, r);
    o && (yield o);
  }
}
function* x(e, t, n = {}) {
  const { path: r = [], branch: i = [e], coerce: o = !1, mask: f = !1 } = n, c = { path: r, branch: i };
  if (o && (e = t.coercer(e, c), f && t.type !== "type" && l(t.schema) && l(e) && !Array.isArray(e)))
    for (const s in e)
      t.schema[s] === void 0 && delete e[s];
  let a = "valid";
  for (const s of t.validator(e, c))
    s.explanation = n.message, a = "not_valid", yield [s, void 0];
  for (let [s, y, O] of t.entries(
    e,
    c
  )) {
    const N = x(y, O, {
      path: s === void 0 ? r : [...r, s],
      branch: s === void 0 ? i : [...i, y],
      coerce: o,
      mask: f,
      message: n.message
    });
    for (const $ of N)
      $[0] ? (a = $[0].refinement === null || $[0].refinement === void 0 ? "not_valid" : "not_refined", yield [$[0], void 0]) : o && (y = $[1], s === void 0 ? e = y : e instanceof Map ? e.set(s, y) : e instanceof Set ? e.add(y) : l(e) && (y !== void 0 || s in e) && (e[s] = y));
  }
  if (a !== "not_valid")
    for (const s of t.refiner(e, c))
      s.explanation = n.message, a = "not_refined", yield [s, void 0];
  a === "valid" && (yield [void 0, e]);
}
class u {
  constructor(t) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    p(this, "TYPE");
    p(this, "type");
    p(this, "schema");
    p(this, "coercer");
    p(this, "validator");
    p(this, "refiner");
    p(this, "entries");
    const {
      type: n,
      schema: r,
      validator: i,
      refiner: o,
      coercer: f = (a) => a,
      entries: c = function* () {
      }
    } = t;
    this.type = n, this.schema = r, this.entries = c, this.coercer = f, i ? this.validator = (a, s) => {
      const y = i(a, s);
      return j(y, s, this, a);
    } : this.validator = () => [], o ? this.refiner = (a, s) => {
      const y = o(a, s);
      return j(y, s, this, a);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t, n) {
    return P(t, this, n);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t, n) {
    return q(t, this, n);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return k(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t, n) {
    return F(t, this, n);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, n = {}) {
    return m(t, this, n);
  }
}
function P(e, t, n) {
  const r = m(e, t, { message: n });
  if (r[0])
    throw r[0];
}
function q(e, t, n) {
  const r = m(e, t, { coerce: !0, message: n });
  if (r[0])
    throw r[0];
  return r[1];
}
function F(e, t, n) {
  const r = m(e, t, { coerce: !0, mask: !0, message: n });
  if (r[0])
    throw r[0];
  return r[1];
}
function k(e, t) {
  return !m(e, t)[0];
}
function m(e, t, n = {}) {
  const r = x(e, t, n), i = _(r);
  return i[0] ? [new V(i[0], function* () {
    for (const c of r)
      c[0] && (yield c[0]);
  }), void 0] : [void 0, i[1]];
}
function B(...e) {
  var i;
  const t = ((i = e[0]) == null ? void 0 : i.type) === "type", n = e.map(({ schema: o }) => o), r = Object.assign({}, ...n);
  return t ? w(r) : g(r);
}
function b(e, t) {
  return new u({ type: e, schema: null, validator: t });
}
function G(e, t) {
  return new u({
    ...e,
    refiner: (n, r) => n === void 0 || e.refiner(n, r),
    validator(n, r) {
      return n === void 0 ? !0 : (t(n, r), e.validator(n, r));
    }
  });
}
function H(e) {
  return new u({
    type: "dynamic",
    schema: null,
    *entries(t, n) {
      yield* e(t, n).entries(t, n);
    },
    validator(t, n) {
      return e(t, n).validator(t, n);
    },
    coercer(t, n) {
      return e(t, n).coercer(t, n);
    },
    refiner(t, n) {
      return e(t, n).refiner(t, n);
    }
  });
}
function L(e) {
  let t;
  return new u({
    type: "lazy",
    schema: null,
    *entries(n, r) {
      t ?? (t = e()), yield* t.entries(n, r);
    },
    validator(n, r) {
      return t ?? (t = e()), t.validator(n, r);
    },
    coercer(n, r) {
      return t ?? (t = e()), t.coercer(n, r);
    },
    refiner(n, r) {
      return t ?? (t = e()), t.refiner(n, r);
    }
  });
}
function Q(e, t) {
  const { schema: n } = e, r = { ...n };
  for (const i of t)
    delete r[i];
  switch (e.type) {
    case "type":
      return w(r);
    default:
      return g(r);
  }
}
function U(e) {
  const t = e instanceof u, n = t ? { ...e.schema } : { ...e };
  for (const r in n)
    n[r] = K(n[r]);
  return t && e.type === "type" ? w(n) : g(n);
}
function W(e, t) {
  const { schema: n } = e, r = {};
  for (const i of t)
    r[i] = n[i];
  switch (e.type) {
    case "type":
      return w(r);
    default:
      return g(r);
  }
}
function X() {
  return b("any", () => !0);
}
function Z(e) {
  return new u({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [n, r] of t.entries())
          yield [n, r, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array value, but received: ${d(t)}`;
    }
  });
}
function C() {
  return b("bigint", (e) => typeof e == "bigint");
}
function v() {
  return b("boolean", (e) => typeof e == "boolean");
}
function ee() {
  return b("date", (e) => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${d(e)}`);
}
function te(e) {
  const t = {}, n = e.map((r) => d(r)).join();
  for (const r of e)
    t[r] = r;
  return new u({
    type: "enums",
    schema: t,
    validator(r) {
      return e.includes(r) || `Expected one of \`${n}\`, but received: ${d(r)}`;
    }
  });
}
function ne() {
  return b("func", (e) => typeof e == "function" || `Expected a function, but received: ${d(e)}`);
}
function re(e) {
  return b("instance", (t) => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${d(t)}`);
}
function ie() {
  return b("integer", (e) => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${d(e)}`);
}
function oe(e) {
  return new u({
    type: "intersection",
    schema: null,
    *entries(t, n) {
      for (const { entries: r } of e)
        yield* r(t, n);
    },
    *validator(t, n) {
      for (const { validator: r } of e)
        yield* r(t, n);
    },
    *refiner(t, n) {
      for (const { refiner: r } of e)
        yield* r(t, n);
    }
  });
}
function ce(e) {
  const t = d(e), n = typeof e;
  return new u({
    type: "literal",
    schema: n === "string" || n === "number" || n === "boolean" ? e : null,
    validator(r) {
      return r === e || `Expected the literal \`${t}\`, but received: ${d(r)}`;
    }
  });
}
function se(e, t) {
  return new u({
    type: "map",
    schema: null,
    *entries(n) {
      if (e && t && n instanceof Map)
        for (const [r, i] of n.entries())
          yield [r, r, e], yield [r, i, t];
    },
    coercer(n) {
      return n instanceof Map ? new Map(n) : n;
    },
    validator(n) {
      return n instanceof Map || `Expected a \`Map\` object, but received: ${d(n)}`;
    }
  });
}
function z() {
  return b("never", () => !1);
}
function fe(e) {
  return new u({
    ...e,
    validator: (t, n) => t === null || e.validator(t, n),
    refiner: (t, n) => t === null || e.refiner(t, n)
  });
}
function ae() {
  return b("number", (e) => typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${d(e)}`);
}
function g(e) {
  const t = e ? Object.keys(e) : [], n = z();
  return new u({
    type: "object",
    schema: e ?? null,
    *entries(r) {
      if (e && l(r)) {
        const i = new Set(Object.keys(r));
        for (const o of t)
          i.delete(o), yield [o, r[o], e[o]];
        for (const o of i)
          yield [o, r[o], n];
      }
    },
    validator(r) {
      return l(r) || `Expected an object, but received: ${d(r)}`;
    },
    coercer(r) {
      return l(r) ? { ...r } : r;
    }
  });
}
function K(e) {
  return new u({
    ...e,
    validator: (t, n) => t === void 0 || e.validator(t, n),
    refiner: (t, n) => t === void 0 || e.refiner(t, n)
  });
}
function ue(e, t) {
  return new u({
    type: "record",
    schema: null,
    *entries(n) {
      if (l(n))
        for (const r in n) {
          const i = n[r];
          yield [r, r, e], yield [r, i, t];
        }
    },
    validator(n) {
      return l(n) || `Expected an object, but received: ${d(n)}`;
    }
  });
}
function de() {
  return b("regexp", (e) => e instanceof RegExp);
}
function pe(e) {
  return new u({
    type: "set",
    schema: null,
    *entries(t) {
      if (e && t instanceof Set)
        for (const n of t)
          yield [n, n, e];
    },
    coercer(t) {
      return t instanceof Set ? new Set(t) : t;
    },
    validator(t) {
      return t instanceof Set || `Expected a \`Set\` object, but received: ${d(t)}`;
    }
  });
}
function R() {
  return b("string", (e) => typeof e == "string" || `Expected a string, but received: ${d(e)}`);
}
function ye(e) {
  const t = z();
  return new u({
    type: "tuple",
    schema: null,
    *entries(n) {
      if (Array.isArray(n)) {
        const r = Math.max(e.length, n.length);
        for (let i = 0; i < r; i++)
          yield [i, n[i], e[i] || t];
      }
    },
    validator(n) {
      return Array.isArray(n) || `Expected an array, but received: ${d(n)}`;
    }
  });
}
function w(e) {
  const t = Object.keys(e);
  return new u({
    type: "type",
    schema: e,
    *entries(n) {
      if (l(n))
        for (const r of t)
          yield [r, n[r], e[r]];
    },
    validator(n) {
      return l(n) || `Expected an object, but received: ${d(n)}`;
    },
    coercer(n) {
      return l(n) ? { ...n } : n;
    }
  });
}
function le(e) {
  const t = e.map((n) => n.type).join(" | ");
  return new u({
    type: "union",
    schema: null,
    coercer(n) {
      for (const r of e) {
        const [i, o] = r.validate(n, { coerce: !0 });
        if (!i)
          return o;
      }
      return n;
    },
    validator(n, r) {
      const i = [];
      for (const o of e) {
        const [...f] = x(n, o, r), [c] = f;
        if (!(c != null && c[0]))
          return [];
        for (const [a] of f)
          a && i.push(a);
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${d(
          n
        )}`,
        ...i
      ];
    }
  });
}
function J() {
  return b("unknown", () => !0);
}
function S(e, t, n) {
  return new u({
    ...e,
    coercer: (r, i) => k(r, t) ? e.coercer(n(r, i), i) : e.coercer(r, i)
  });
}
function be(e, t, n = {}) {
  return S(e, J(), (r) => {
    const i = typeof t == "function" ? t() : t;
    if (r === void 0)
      return i;
    if (!n.strict && E(r) && E(i)) {
      const o = { ...r };
      let f = !1;
      for (const c in i)
        o[c] === void 0 && (o[c] = i[c], f = !0);
      if (f)
        return o;
    }
    return r;
  });
}
function he(e) {
  return S(e, R(), (t) => t.trim());
}
function $e(e) {
  return h(e, "empty", (t) => {
    const n = A(t);
    return n === 0 || `Expected an empty ${e.type} but received one with a size of \`${n}\``;
  });
}
function A(e) {
  return e instanceof Map || e instanceof Set ? e.size : e.length;
}
function me(e, t, n = {}) {
  const { exclusive: r } = n;
  return h(e, "max", (i) => r ? i < t : i <= t || `Expected a ${e.type} less than ${r ? "" : "or equal to "}${t} but received \`${i}\``);
}
function ge(e, t, n = {}) {
  const { exclusive: r } = n;
  return h(e, "min", (i) => r ? i > t : i >= t || `Expected a ${e.type} greater than ${r ? "" : "or equal to "}${t} but received \`${i}\``);
}
function we(e) {
  return h(e, "nonempty", (t) => A(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`);
}
function je(e, t) {
  return h(e, "pattern", (n) => t.test(n) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${n}"`);
}
function xe(e, t, n = t) {
  const r = `Expected a ${e.type}`, i = t === n ? `of \`${t}\`` : `between \`${t}\` and \`${n}\``;
  return h(e, "size", (o) => {
    if (typeof o == "number" || o instanceof Date)
      return (
        // @ts-ignore
        t <= o && o <= n || // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${r} ${i} but received \`${o}\``
      );
    if (o instanceof Map || o instanceof Set) {
      const { size: c } = o;
      return t <= c && c <= n || `${r} with a size ${i} but received one with a size of \`${c}\``;
    }
    const { length: f } = o;
    return t <= f && f <= n || `${r} with a length ${i} but received one with a length of \`${f}\``;
  });
}
function h(e, t, n) {
  return new u({
    ...e,
    *refiner(r, i) {
      yield* e.refiner(r, i);
      const o = n(r, i), f = j(o, i, e, r);
      for (const c of f)
        yield { ...c, refinement: t };
    }
  });
}
export {
  u as Struct,
  V as StructError,
  X as any,
  Z as array,
  P as assert,
  B as assign,
  C as bigint,
  v as boolean,
  S as coerce,
  q as create,
  ee as date,
  be as defaulted,
  b as define,
  G as deprecated,
  H as dynamic,
  $e as empty,
  te as enums,
  ne as func,
  re as instance,
  ie as integer,
  oe as intersection,
  k as is,
  L as lazy,
  ce as literal,
  se as map,
  F as mask,
  me as max,
  ge as min,
  z as never,
  we as nonempty,
  fe as nullable,
  ae as number,
  g as object,
  Q as omit,
  K as optional,
  U as partial,
  je as pattern,
  W as pick,
  ue as record,
  h as refine,
  de as regexp,
  pe as set,
  xe as size,
  R as string,
  he as trimmed,
  ye as tuple,
  w as type,
  le as union,
  J as unknown,
  m as validate
};
