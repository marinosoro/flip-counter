import { openBlock as B, createElementBlock as ce, normalizeStyle as Zt, createElementVNode as De, normalizeClass as at, resolveComponent as Bt, Fragment as Ut, renderList as zs, createBlock as ut, toDisplayString as zt, createCommentVNode as Et, createVNode as Re } from "vue";
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var qt;
function o() {
  return qt.apply(null, arguments);
}
function Es(e) {
  qt = e;
}
function U(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ne(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function St(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function N(e) {
  return e === void 0;
}
function Q(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function xe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function $t(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function te(e, t) {
  for (var s in t)
    S(t, s) && (e[s] = t[s]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function G(e, t, s, r) {
  return ws(e, t, s, r, !0).utc();
}
function Hs() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function m(e) {
  return e._pf == null && (e._pf = Hs()), e._pf;
}
var dt;
Array.prototype.some ? dt = Array.prototype.some : dt = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function pt(e) {
  if (e._isValid == null) {
    var t = m(e), s = dt.call(t.parsedDateParts, function(a) {
      return a != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Ze(e) {
  var t = G(NaN);
  return e != null ? te(m(t), e) : m(t).userInvalidated = !0, t;
}
var Ht = o.momentProperties = [], it = !1;
function wt(e, t) {
  var s, r, a, i = Ht.length;
  if (N(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), N(t._i) || (e._i = t._i), N(t._f) || (e._f = t._f), N(t._l) || (e._l = t._l), N(t._strict) || (e._strict = t._strict), N(t._tzm) || (e._tzm = t._tzm), N(t._isUTC) || (e._isUTC = t._isUTC), N(t._offset) || (e._offset = t._offset), N(t._pf) || (e._pf = m(t)), N(t._locale) || (e._locale = t._locale), i > 0)
    for (s = 0; s < i; s++)
      r = Ht[s], a = t[r], N(a) || (e[r] = a);
  return e;
}
function Ne(e) {
  wt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), it === !1 && (it = !0, o.updateOffset(this), it = !1);
}
function z(e) {
  return e instanceof Ne || e != null && e._isAMomentObject != null;
}
function Jt(e) {
  o.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function C(e, t) {
  var s = !0;
  return te(function() {
    if (o.deprecationHandler != null && o.deprecationHandler(null, e), s) {
      var r = [], a, i, n, u = arguments.length;
      for (i = 0; i < u; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (n in arguments[0])
            S(arguments[0], n) && (a += n + ": " + arguments[0][n] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
        r.push(a);
      }
      Jt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var At = {};
function Qt(e, t) {
  o.deprecationHandler != null && o.deprecationHandler(e, t), At[e] || (Jt(t), At[e] = !0);
}
o.suppressDeprecationWarnings = !1;
o.deprecationHandler = null;
function V(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function As(e) {
  var t, s;
  for (s in e)
    S(e, s) && (t = e[s], V(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ft(e, t) {
  var s = te({}, e), r;
  for (r in t)
    S(t, r) && (ne(e[r]) && ne(t[r]) ? (s[r] = {}, te(s[r], e[r]), te(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    S(e, r) && !S(t, r) && ne(e[r]) && (s[r] = te({}, s[r]));
  return s;
}
function vt(e) {
  e != null && this.set(e);
}
var ht;
Object.keys ? ht = Object.keys : ht = function(e) {
  var t, s = [];
  for (t in e)
    S(e, t) && s.push(t);
  return s;
};
var Gs = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Vs(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return V(r) ? r.call(t, s) : r;
}
function A(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, i = e >= 0;
  return (i ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var gt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ce = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, nt = {}, _e = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (_e[e] = a), t && (_e[t[0]] = function() {
    return A(a.apply(this, arguments), t[1], t[2]);
  }), s && (_e[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function js(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Zs(e) {
  var t = e.match(gt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    _e[t[s]] ? t[s] = _e[t[s]] : t[s] = js(t[s]);
  return function(a) {
    var i = "", n;
    for (n = 0; n < r; n++)
      i += V(t[n]) ? t[n].call(a, e) : t[n];
    return i;
  };
}
function Le(e, t) {
  return e.isValid() ? (t = Xt(t, e.localeData()), nt[t] = nt[t] || Zs(t), nt[t](e)) : e.localeData().invalidDate();
}
function Xt(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ce.lastIndex = 0; s >= 0 && Ce.test(e); )
    e = e.replace(
      Ce,
      r
    ), Ce.lastIndex = 0, s -= 1;
  return e;
}
var Bs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function qs(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(gt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var $s = "Invalid date";
function Js() {
  return this._invalidDate;
}
var Qs = "%d", Xs = /\d{1,2}/;
function Ks(e) {
  return this._ordinal.replace("%d", e);
}
var er = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function tr(e, t, s, r) {
  var a = this._relativeTime[s];
  return V(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function sr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return V(s) ? s(t) : s.replace(/%s/i, t);
}
var Me = {};
function T(e, t) {
  var s = e.toLowerCase();
  Me[s] = Me[s + "s"] = Me[t] = e;
}
function I(e) {
  return typeof e == "string" ? Me[e] || Me[e.toLowerCase()] : void 0;
}
function kt(e) {
  var t = {}, s, r;
  for (r in e)
    S(e, r) && (s = I(r), s && (t[s] = e[r]));
  return t;
}
var Kt = {};
function x(e, t) {
  Kt[e] = t;
}
function rr(e) {
  var t = [], s;
  for (s in e)
    S(e, s) && t.push({ unit: s, priority: Kt[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
function Be(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function R(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = R(t)), s;
}
function pe(e, t) {
  return function(s) {
    return s != null ? (es(this, e, s), o.updateOffset(this, t), this) : Ee(this, e);
  };
}
function Ee(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function es(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && Be(e.year()) && e.month() === 1 && e.date() === 29 ? (s = _(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    Ke(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function ar(e) {
  return e = I(e), V(this[e]) ? this[e]() : this;
}
function ir(e, t) {
  if (typeof e == "object") {
    e = kt(e);
    var s = rr(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = I(e), V(this[e]))
    return this[e](t);
  return this;
}
var ts = /\d/, W = /\d\d/, ss = /\d{3}/, Dt = /\d{4}/, qe = /[+-]?\d{6}/, g = /\d\d?/, rs = /\d\d\d\d?/, as = /\d\d\d\d\d\d?/, $e = /\d{1,3}/, Mt = /\d{1,4}/, Je = /[+-]?\d{1,6}/, we = /\d+/, Qe = /[+-]?\d+/, nr = /Z|[+-]\d\d:?\d\d/gi, Xe = /Z|[+-]\d\d(?::?\d\d)?/gi, lr = /[+-]?\d+(\.\d{1,3})?/, Pe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, He;
He = {};
function d(e, t, s) {
  He[e] = V(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function or(e, t) {
  return S(He, e) ? He[e](t._strict, t._locale) : new RegExp(ur(e));
}
function ur(e) {
  return P(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, i) {
        return s || r || a || i;
      }
    )
  );
}
function P(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ct = {};
function w(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), Q(t) && (r = function(i, n) {
    n[t] = _(i);
  }), a = e.length, s = 0; s < a; s++)
    ct[e[s]] = r;
}
function We(e, t) {
  w(e, function(s, r, a, i) {
    a._w = a._w || {}, t(s, a._w, a, i);
  });
}
function dr(e, t, s) {
  t != null && S(ct, e) && ct[e](t, s._a, s, e);
}
var b = 0, q = 1, H = 2, O = 3, L = 4, $ = 5, ie = 6, fr = 7, hr = 8;
function cr(e, t) {
  return (e % t + t) % t;
}
var Y;
Array.prototype.indexOf ? Y = Array.prototype.indexOf : Y = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ke(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = cr(t, 12);
  return e += (t - s) / 12, s === 1 ? Be(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
T("month", "M");
x("month", 8);
d("M", g);
d("MM", g, W);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
w(["M", "MM"], function(e, t) {
  t[q] = _(e) - 1;
});
w(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[q] = a : m(s).invalidMonth = e;
});
var mr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), is = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ns = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, _r = Pe, yr = Pe;
function Sr(e, t) {
  return e ? U(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ns).test(t) ? "format" : "standalone"][e.month()] : U(this._months) ? this._months : this._months.standalone;
}
function pr(e, t) {
  return e ? U(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ns.test(t) ? "format" : "standalone"][e.month()] : U(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function wr(e, t, s) {
  var r, a, i, n = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = G([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = Y.call(this._shortMonthsParse, n), a !== -1 ? a : null) : (a = Y.call(this._longMonthsParse, n), a !== -1 ? a : null) : t === "MMM" ? (a = Y.call(this._shortMonthsParse, n), a !== -1 ? a : (a = Y.call(this._longMonthsParse, n), a !== -1 ? a : null)) : (a = Y.call(this._longMonthsParse, n), a !== -1 ? a : (a = Y.call(this._shortMonthsParse, n), a !== -1 ? a : null));
}
function vr(e, t, s) {
  var r, a, i;
  if (this._monthsParseExact)
    return wr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = G([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function ls(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !Q(t))
      return e;
  }
  return s = Math.min(e.date(), Ke(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function os(e) {
  return e != null ? (ls(this, e), o.updateOffset(this, !0), this) : Ee(this, "Month");
}
function gr() {
  return Ke(this.year(), this.month());
}
function kr(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || us.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = _r), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Dr(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || us.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = yr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function us() {
  function e(n, u) {
    return u.length - n.length;
  }
  var t = [], s = [], r = [], a, i;
  for (a = 0; a < 12; a++)
    i = G([2e3, a]), t.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
  for (t.sort(e), s.sort(e), r.sort(e), a = 0; a < 12; a++)
    t[a] = P(t[a]), s[a] = P(s[a]);
  for (a = 0; a < 24; a++)
    r[a] = P(r[a]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? A(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
T("year", "y");
x("year", 1);
d("Y", Qe);
d("YY", g, W);
d("YYYY", Mt, Dt);
d("YYYYY", Je, qe);
d("YYYYYY", Je, qe);
w(["YYYYY", "YYYYYY"], b);
w("YYYY", function(e, t) {
  t[b] = e.length === 2 ? o.parseTwoDigitYear(e) : _(e);
});
w("YY", function(e, t) {
  t[b] = o.parseTwoDigitYear(e);
});
w("Y", function(e, t) {
  t[b] = parseInt(e, 10);
});
function Ye(e) {
  return Be(e) ? 366 : 365;
}
o.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var ds = pe("FullYear", !0);
function Mr() {
  return Be(this.year());
}
function Yr(e, t, s, r, a, i, n) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, i, n), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, i, n), u;
}
function Oe(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ae(e, t, s) {
  var r = 7 + t - s, a = (7 + Oe(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function fs(e, t, s, r, a) {
  var i = (7 + s - r) % 7, n = Ae(e, r, a), u = 1 + 7 * (t - 1) + i + n, f, c;
  return u <= 0 ? (f = e - 1, c = Ye(f) + u) : u > Ye(e) ? (f = e + 1, c = u - Ye(e)) : (f = e, c = u), {
    year: f,
    dayOfYear: c
  };
}
function be(e, t, s) {
  var r = Ae(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, n;
  return a < 1 ? (n = e.year() - 1, i = a + J(n, t, s)) : a > J(e.year(), t, s) ? (i = a - J(e.year(), t, s), n = e.year() + 1) : (n = e.year(), i = a), {
    week: i,
    year: n
  };
}
function J(e, t, s) {
  var r = Ae(e, t, s), a = Ae(e + 1, t, s);
  return (Ye(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
T("week", "w");
T("isoWeek", "W");
x("week", 5);
x("isoWeek", 5);
d("w", g);
d("ww", g, W);
d("W", g);
d("WW", g, W);
We(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = _(e);
  }
);
function Or(e) {
  return be(e, this._week.dow, this._week.doy).week;
}
var br = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Tr() {
  return this._week.dow;
}
function xr() {
  return this._week.doy;
}
function Nr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Pr(e) {
  var t = be(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
T("day", "d");
T("weekday", "e");
T("isoWeekday", "E");
x("day", 11);
x("weekday", 11);
x("isoWeekday", 11);
d("d", g);
d("e", g);
d("E", g);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
We(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : m(s).invalidWeekday = e;
});
We(["d", "e", "E"], function(e, t, s, r) {
  t[r] = _(e);
});
function Wr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Fr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Yt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Rr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), hs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Cr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ir = Pe, Lr = Pe, Ur = Pe;
function zr(e, t) {
  var s = U(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Yt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Er(e) {
  return e === !0 ? Yt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Hr(e) {
  return e === !0 ? Yt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ar(e, t, s) {
  var r, a, i, n = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = G([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = Y.call(this._weekdaysParse, n), a !== -1 ? a : null) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, n), a !== -1 ? a : null) : (a = Y.call(this._minWeekdaysParse, n), a !== -1 ? a : null) : t === "dddd" ? (a = Y.call(this._weekdaysParse, n), a !== -1 || (a = Y.call(this._shortWeekdaysParse, n), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, n), a !== -1 || (a = Y.call(this._weekdaysParse, n), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : (a = Y.call(this._minWeekdaysParse, n), a !== -1 || (a = Y.call(this._weekdaysParse, n), a !== -1) ? a : (a = Y.call(this._shortWeekdaysParse, n), a !== -1 ? a : null));
}
function Gr(e, t, s) {
  var r, a, i;
  if (this._weekdaysParseExact)
    return Ar.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = G([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Vr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Wr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function jr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Zr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Fr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Br(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ot.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = Ir), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function qr(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ot.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Lr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function $r(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ot.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ur), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ot() {
  function e(k, M) {
    return M.length - k.length;
  }
  var t = [], s = [], r = [], a = [], i, n, u, f, c;
  for (i = 0; i < 7; i++)
    n = G([2e3, 1]).day(i), u = P(this.weekdaysMin(n, "")), f = P(this.weekdaysShort(n, "")), c = P(this.weekdays(n, "")), t.push(u), s.push(f), r.push(c), a.push(u), a.push(f), a.push(c);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function bt() {
  return this.hours() % 12 || 12;
}
function Jr() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, bt);
h("k", ["kk", 2], 0, Jr);
h("hmm", 0, 0, function() {
  return "" + bt.apply(this) + A(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + bt.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + A(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2);
});
function cs(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
cs("a", !0);
cs("A", !1);
T("hour", "h");
x("hour", 13);
function ms(e, t) {
  return t._meridiemParse;
}
d("a", ms);
d("A", ms);
d("H", g);
d("h", g);
d("k", g);
d("HH", g, W);
d("hh", g, W);
d("kk", g, W);
d("hmm", rs);
d("hmmss", as);
d("Hmm", rs);
d("Hmmss", as);
w(["H", "HH"], O);
w(["k", "kk"], function(e, t, s) {
  var r = _(e);
  t[O] = r === 24 ? 0 : r;
});
w(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
w(["h", "hh"], function(e, t, s) {
  t[O] = _(e), m(s).bigHour = !0;
});
w("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[O] = _(e.substr(0, r)), t[L] = _(e.substr(r)), m(s).bigHour = !0;
});
w("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[O] = _(e.substr(0, r)), t[L] = _(e.substr(r, 2)), t[$] = _(e.substr(a)), m(s).bigHour = !0;
});
w("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[O] = _(e.substr(0, r)), t[L] = _(e.substr(r));
});
w("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[O] = _(e.substr(0, r)), t[L] = _(e.substr(r, 2)), t[$] = _(e.substr(a));
});
function Qr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Xr = /[ap]\.?m?\.?/i, Kr = pe("Hours", !0);
function ea(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var _s = {
  calendar: Gs,
  longDateFormat: Bs,
  invalidDate: $s,
  ordinal: Qs,
  dayOfMonthOrdinalParse: Xs,
  relativeTime: er,
  months: mr,
  monthsShort: is,
  week: br,
  weekdays: Rr,
  weekdaysMin: Cr,
  weekdaysShort: hs,
  meridiemParse: Xr
}, D = {}, ge = {}, Te;
function ta(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function Gt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function sa(e) {
  for (var t = 0, s, r, a, i; t < e.length; ) {
    for (i = Gt(e[t]).split("-"), s = i.length, r = Gt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = et(i.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && ta(i, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Te;
}
function ra(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function et(e) {
  var t = null, s;
  if (D[e] === void 0 && typeof module < "u" && module && module.exports && ra(e))
    try {
      t = Te._abbr, s = require, s("./locale/" + e), re(t);
    } catch {
      D[e] = null;
    }
  return D[e];
}
function re(e, t) {
  var s;
  return e && (N(t) ? s = X(e) : s = Tt(e, t), s ? Te = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Te._abbr;
}
function Tt(e, t) {
  if (t !== null) {
    var s, r = _s;
    if (t.abbr = e, D[e] != null)
      Qt(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = D[e]._config;
    else if (t.parentLocale != null)
      if (D[t.parentLocale] != null)
        r = D[t.parentLocale]._config;
      else if (s = et(t.parentLocale), s != null)
        r = s._config;
      else
        return ge[t.parentLocale] || (ge[t.parentLocale] = []), ge[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return D[e] = new vt(ft(r, t)), ge[e] && ge[e].forEach(function(a) {
      Tt(a.name, a.config);
    }), re(e), D[e];
  } else
    return delete D[e], null;
}
function aa(e, t) {
  if (t != null) {
    var s, r, a = _s;
    D[e] != null && D[e].parentLocale != null ? D[e].set(ft(D[e]._config, t)) : (r = et(e), r != null && (a = r._config), t = ft(a, t), r == null && (t.abbr = e), s = new vt(t), s.parentLocale = D[e], D[e] = s), re(e);
  } else
    D[e] != null && (D[e].parentLocale != null ? (D[e] = D[e].parentLocale, e === re() && re(e)) : D[e] != null && delete D[e]);
  return D[e];
}
function X(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Te;
  if (!U(e)) {
    if (t = et(e), t)
      return t;
    e = [e];
  }
  return sa(e);
}
function ia() {
  return ht(D);
}
function xt(e) {
  var t, s = e._a;
  return s && m(e).overflow === -2 && (t = s[q] < 0 || s[q] > 11 ? q : s[H] < 1 || s[H] > Ke(s[b], s[q]) ? H : s[O] < 0 || s[O] > 24 || s[O] === 24 && (s[L] !== 0 || s[$] !== 0 || s[ie] !== 0) ? O : s[L] < 0 || s[L] > 59 ? L : s[$] < 0 || s[$] > 59 ? $ : s[ie] < 0 || s[ie] > 999 ? ie : -1, m(e)._overflowDayOfYear && (t < b || t > H) && (t = H), m(e)._overflowWeeks && t === -1 && (t = fr), m(e)._overflowWeekday && t === -1 && (t = hr), m(e).overflow = t), e;
}
var na = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, la = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, oa = /Z|[+-]\d\d(?::?\d\d)?/, Ie = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], lt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ua = /^\/?Date\((-?\d+)/i, da = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, fa = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ys(e) {
  var t, s, r = e._i, a = na.exec(r) || la.exec(r), i, n, u, f, c = Ie.length, k = lt.length;
  if (a) {
    for (m(e).iso = !0, t = 0, s = c; t < s; t++)
      if (Ie[t][1].exec(a[1])) {
        n = Ie[t][0], i = Ie[t][2] !== !1;
        break;
      }
    if (n == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = k; t < s; t++)
        if (lt[t][1].exec(a[3])) {
          u = (a[2] || " ") + lt[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (oa.exec(a[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = n + (u || "") + (f || ""), Pt(e);
  } else
    e._isValid = !1;
}
function ha(e, t, s, r, a, i) {
  var n = [
    ca(e),
    is.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return i && n.push(parseInt(i, 10)), n;
}
function ca(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ma(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function _a(e, t, s) {
  if (e) {
    var r = hs.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return m(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function ya(e, t, s) {
  if (e)
    return fa[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, i = (r - a) / 100;
  return i * 60 + a;
}
function Ss(e) {
  var t = da.exec(ma(e._i)), s;
  if (t) {
    if (s = ha(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !_a(t[1], s, e))
      return;
    e._a = s, e._tzm = ya(t[8], t[9], t[10]), e._d = Oe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Sa(e) {
  var t = ua.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ys(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ss(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : o.createFromInputFallback(e);
}
o.createFromInputFallback = C(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function he(e, t, s) {
  return e ?? t ?? s;
}
function pa(e) {
  var t = new Date(o.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Nt(e) {
  var t, s, r = [], a, i, n;
  if (!e._d) {
    for (a = pa(e), e._w && e._a[H] == null && e._a[q] == null && wa(e), e._dayOfYear != null && (n = he(e._a[b], a[b]), (e._dayOfYear > Ye(n) || e._dayOfYear === 0) && (m(e)._overflowDayOfYear = !0), s = Oe(n, 0, e._dayOfYear), e._a[q] = s.getUTCMonth(), e._a[H] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[O] === 24 && e._a[L] === 0 && e._a[$] === 0 && e._a[ie] === 0 && (e._nextDay = !0, e._a[O] = 0), e._d = (e._useUTC ? Oe : Yr).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[O] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (m(e).weekdayMismatch = !0);
  }
}
function wa(e) {
  var t, s, r, a, i, n, u, f, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, n = 4, s = he(
    t.GG,
    e._a[b],
    be(v(), 1, 4).year
  ), r = he(t.W, 1), a = he(t.E, 1), (a < 1 || a > 7) && (f = !0)) : (i = e._locale._week.dow, n = e._locale._week.doy, c = be(v(), i, n), s = he(t.gg, e._a[b], c.year), r = he(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (f = !0)) : a = i), r < 1 || r > J(s, i, n) ? m(e)._overflowWeeks = !0 : f != null ? m(e)._overflowWeekday = !0 : (u = fs(s, r, a, i, n), e._a[b] = u.year, e._dayOfYear = u.dayOfYear);
}
o.ISO_8601 = function() {
};
o.RFC_2822 = function() {
};
function Pt(e) {
  if (e._f === o.ISO_8601) {
    ys(e);
    return;
  }
  if (e._f === o.RFC_2822) {
    Ss(e);
    return;
  }
  e._a = [], m(e).empty = !0;
  var t = "" + e._i, s, r, a, i, n, u = t.length, f = 0, c, k;
  for (a = Xt(e._f, e._locale).match(gt) || [], k = a.length, s = 0; s < k; s++)
    i = a[s], r = (t.match(or(i, e)) || [])[0], r && (n = t.substr(0, t.indexOf(r)), n.length > 0 && m(e).unusedInput.push(n), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), _e[i] ? (r ? m(e).empty = !1 : m(e).unusedTokens.push(i), dr(i, r, e)) : e._strict && !r && m(e).unusedTokens.push(i);
  m(e).charsLeftOver = u - f, t.length > 0 && m(e).unusedInput.push(t), e._a[O] <= 12 && m(e).bigHour === !0 && e._a[O] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[O] = va(
    e._locale,
    e._a[O],
    e._meridiem
  ), c = m(e).era, c !== null && (e._a[b] = e._locale.erasConvertYear(c, e._a[b])), Nt(e), xt(e);
}
function va(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function ga(e) {
  var t, s, r, a, i, n, u = !1, f = e._f.length;
  if (f === 0) {
    m(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < f; a++)
    i = 0, n = !1, t = wt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Pt(t), pt(t) && (n = !0), i += m(t).charsLeftOver, i += m(t).unusedTokens.length * 10, m(t).score = i, u ? i < r && (r = i, s = t) : (r == null || i < r || n) && (r = i, s = t, n && (u = !0));
  te(e, s || t);
}
function ka(e) {
  if (!e._d) {
    var t = kt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = $t(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Nt(e);
  }
}
function Da(e) {
  var t = new Ne(xt(ps(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ps(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || X(e._l), t === null || s === void 0 && t === "" ? Ze({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new Ne(xt(t)) : (xe(t) ? e._d = t : U(s) ? ga(e) : s ? Pt(e) : Ma(e), pt(e) || (e._d = null), e));
}
function Ma(e) {
  var t = e._i;
  N(t) ? e._d = new Date(o.now()) : xe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Sa(e) : U(t) ? (e._a = $t(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Nt(e)) : ne(t) ? ka(e) : Q(t) ? e._d = new Date(t) : o.createFromInputFallback(e);
}
function ws(e, t, s, r, a) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ne(e) && St(e) || U(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = s, i._i = e, i._f = t, i._strict = r, Da(i);
}
function v(e, t, s, r) {
  return ws(e, t, s, r, !1);
}
var Ya = C(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = v.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ze();
  }
), Oa = C(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = v.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ze();
  }
);
function vs(e, t) {
  var s, r;
  if (t.length === 1 && U(t[0]) && (t = t[0]), !t.length)
    return v();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function ba() {
  var e = [].slice.call(arguments, 0);
  return vs("isBefore", e);
}
function Ta() {
  var e = [].slice.call(arguments, 0);
  return vs("isAfter", e);
}
var xa = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ke = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Na(e) {
  var t, s = !1, r, a = ke.length;
  for (t in e)
    if (S(e, t) && !(Y.call(ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[ke[r]]) {
      if (s)
        return !1;
      parseFloat(e[ke[r]]) !== _(e[ke[r]]) && (s = !0);
    }
  return !0;
}
function Pa() {
  return this._isValid;
}
function Wa() {
  return E(NaN);
}
function tt(e) {
  var t = kt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, n = t.day || 0, u = t.hour || 0, f = t.minute || 0, c = t.second || 0, k = t.millisecond || 0;
  this._isValid = Na(t), this._milliseconds = +k + c * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +n + i * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = X(), this._bubble();
}
function Ue(e) {
  return e instanceof tt;
}
function mt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Fa(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, n;
  for (n = 0; n < r; n++)
    (s && e[n] !== t[n] || !s && _(e[n]) !== _(t[n])) && i++;
  return i + a;
}
function gs(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + A(~~(s / 60), 2) + t + A(~~s % 60, 2);
  });
}
gs("Z", ":");
gs("ZZ", "");
d("Z", Xe);
d("ZZ", Xe);
w(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Wt(Xe, e);
});
var Ra = /([\+\-]|\d\d)/gi;
function Wt(e, t) {
  var s = (t || "").match(e), r, a, i;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(Ra) || ["-", 0, 0], i = +(a[1] * 60) + _(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function Ft(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (z(e) || xe(e) ? e.valueOf() : v(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), o.updateOffset(s, !1), s) : v(e).local();
}
function _t(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
o.updateOffset = function() {
};
function Ca(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Wt(Xe, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = _t(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ms(
      this,
      E(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : _t(this);
}
function Ia(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function La(e) {
  return this.utcOffset(0, e);
}
function Ua(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_t(this), "m")), this;
}
function za() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Wt(nr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ea(e) {
  return this.isValid() ? (e = e ? v(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ha() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Aa() {
  if (!N(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return wt(e, this), e = ps(e), e._a ? (t = e._isUTC ? G(e._a) : v(e._a), this._isDSTShifted = this.isValid() && Fa(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Ga() {
  return this.isValid() ? !this._isUTC : !1;
}
function Va() {
  return this.isValid() ? this._isUTC : !1;
}
function ks() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ja = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Za = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function E(e, t) {
  var s = e, r = null, a, i, n;
  return Ue(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Q(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = ja.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: _(r[H]) * a,
    h: _(r[O]) * a,
    m: _(r[L]) * a,
    s: _(r[$]) * a,
    ms: _(mt(r[ie] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Za.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ae(r[2], a),
    M: ae(r[3], a),
    w: ae(r[4], a),
    d: ae(r[5], a),
    h: ae(r[6], a),
    m: ae(r[7], a),
    s: ae(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (n = Ba(
    v(s.from),
    v(s.to)
  ), s = {}, s.ms = n.milliseconds, s.M = n.months), i = new tt(s), Ue(e) && S(e, "_locale") && (i._locale = e._locale), Ue(e) && S(e, "_isValid") && (i._isValid = e._isValid), i;
}
E.fn = tt.prototype;
E.invalid = Wa;
function ae(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Vt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Ba(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ft(t, e), e.isBefore(t) ? s = Vt(e, t) : (s = Vt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Ds(e, t) {
  return function(s, r) {
    var a, i;
    return r !== null && !isNaN(+r) && (Qt(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = s, s = r, r = i), a = E(s, r), Ms(this, a, e), this;
  };
}
function Ms(e, t, s, r) {
  var a = t._milliseconds, i = mt(t._days), n = mt(t._months);
  e.isValid() && (r = r ?? !0, n && ls(e, Ee(e, "Month") + n * s), i && es(e, "Date", Ee(e, "Date") + i * s), a && e._d.setTime(e._d.valueOf() + a * s), r && o.updateOffset(e, i || n));
}
var qa = Ds(1, "add"), $a = Ds(-1, "subtract");
function Ys(e) {
  return typeof e == "string" || e instanceof String;
}
function Ja(e) {
  return z(e) || xe(e) || Ys(e) || Q(e) || Xa(e) || Qa(e) || e === null || e === void 0;
}
function Qa(e) {
  var t = ne(e) && !St(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, i, n = r.length;
  for (a = 0; a < n; a += 1)
    i = r[a], s = s || S(e, i);
  return t && s;
}
function Xa(e) {
  var t = U(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !Q(r) && Ys(e);
  }).length === 0), t && s;
}
function Ka(e) {
  var t = ne(e) && !St(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < r.length; a += 1)
    i = r[a], s = s || S(e, i);
  return t && s;
}
function ei(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function ti(e, t) {
  arguments.length === 1 && (arguments[0] ? Ja(arguments[0]) ? (e = arguments[0], t = void 0) : Ka(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || v(), r = Ft(s, this).startOf("day"), a = o.calendarFormat(this, r) || "sameElse", i = t && (V(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, v(s))
  );
}
function si() {
  return new Ne(this);
}
function ri(e, t) {
  var s = z(e) ? e : v(e);
  return this.isValid() && s.isValid() ? (t = I(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ai(e, t) {
  var s = z(e) ? e : v(e);
  return this.isValid() && s.isValid() ? (t = I(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function ii(e, t, s, r) {
  var a = z(e) ? e : v(e), i = z(t) ? t : v(t);
  return this.isValid() && a.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(i, s) : !this.isAfter(i, s))) : !1;
}
function ni(e, t) {
  var s = z(e) ? e : v(e), r;
  return this.isValid() && s.isValid() ? (t = I(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function li(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function oi(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function ui(e, t, s) {
  var r, a, i;
  if (!this.isValid())
    return NaN;
  if (r = Ft(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = I(t), t) {
    case "year":
      i = ze(this, r) / 12;
      break;
    case "month":
      i = ze(this, r);
      break;
    case "quarter":
      i = ze(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - a) / 864e5;
      break;
    case "week":
      i = (this - r - a) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return s ? i : R(i);
}
function ze(e, t) {
  if (e.date() < t.date())
    return -ze(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, i;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), i = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), i = (t - r) / (a - r)), -(s + i) || 0;
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function di() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function fi(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Le(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : V(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Le(s, "Z")) : Le(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function hi() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(s + r + a + i);
}
function ci(e) {
  e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
  var t = Le(this, e);
  return this.localeData().postformat(t);
}
function mi(e, t) {
  return this.isValid() && (z(e) && e.isValid() || v(e).isValid()) ? E({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function _i(e) {
  return this.from(v(), e);
}
function yi(e, t) {
  return this.isValid() && (z(e) && e.isValid() || v(e).isValid()) ? E({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Si(e) {
  return this.to(v(), e);
}
function Os(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = X(e), t != null && (this._locale = t), this);
}
var bs = C(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ts() {
  return this._locale;
}
var Ge = 1e3, ye = 60 * Ge, Ve = 60 * ye, xs = (365 * 400 + 97) * 24 * Ve;
function Se(e, t) {
  return (e % t + t) % t;
}
function Ns(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - xs : new Date(e, t, s).valueOf();
}
function Ps(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - xs : Date.UTC(e, t, s);
}
function pi(e) {
  var t, s;
  if (e = I(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Ps : Ns, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Se(
        t + (this._isUTC ? 0 : this.utcOffset() * ye),
        Ve
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Se(t, ye);
      break;
    case "second":
      t = this._d.valueOf(), t -= Se(t, Ge);
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function wi(e) {
  var t, s;
  if (e = I(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Ps : Ns, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ve - Se(
        t + (this._isUTC ? 0 : this.utcOffset() * ye),
        Ve
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ye - Se(t, ye) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ge - Se(t, Ge) - 1;
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function vi() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function gi() {
  return Math.floor(this.valueOf() / 1e3);
}
function ki() {
  return new Date(this.valueOf());
}
function Di() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Mi() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Yi() {
  return this.isValid() ? this.toISOString() : null;
}
function Oi() {
  return pt(this);
}
function bi() {
  return te({}, m(this));
}
function Ti() {
  return m(this).overflow;
}
function xi() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
d("N", Rt);
d("NN", Rt);
d("NNN", Rt);
d("NNNN", Ei);
d("NNNNN", Hi);
w(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? m(s).era = a : m(s).invalidEra = e;
  }
);
d("y", we);
d("yy", we);
d("yyy", we);
d("yyyy", we);
d("yo", Ai);
w(["y", "yy", "yyy", "yyyy"], b);
w(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[b] = s._locale.eraYearOrdinalParse(e, a) : t[b] = parseInt(e, 10);
});
function Ni(e, t) {
  var s, r, a, i = this._eras || X("en")._eras;
  for (s = 0, r = i.length; s < r; ++s) {
    switch (typeof i[s].since) {
      case "string":
        a = o(i[s].since).startOf("day"), i[s].since = a.valueOf();
        break;
    }
    switch (typeof i[s].until) {
      case "undefined":
        i[s].until = 1 / 0;
        break;
      case "string":
        a = o(i[s].until).startOf("day").valueOf(), i[s].until = a.valueOf();
        break;
    }
  }
  return i;
}
function Pi(e, t, s) {
  var r, a, i = this.eras(), n, u, f;
  for (e = e.toUpperCase(), r = 0, a = i.length; r < a; ++r)
    if (n = i[r].name.toUpperCase(), u = i[r].abbr.toUpperCase(), f = i[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return i[r];
          break;
        case "NNNN":
          if (n === e)
            return i[r];
          break;
        case "NNNNN":
          if (f === e)
            return i[r];
          break;
      }
    else if ([n, u, f].indexOf(e) >= 0)
      return i[r];
}
function Wi(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? o(e.since).year() : o(e.since).year() + (t - e.offset) * s;
}
function Fi() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Ri() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Ci() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Ii() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - o(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Li(e) {
  return S(this, "_erasNameRegex") || Ct.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Ui(e) {
  return S(this, "_erasAbbrRegex") || Ct.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function zi(e) {
  return S(this, "_erasNarrowRegex") || Ct.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Rt(e, t) {
  return t.erasAbbrRegex(e);
}
function Ei(e, t) {
  return t.erasNameRegex(e);
}
function Hi(e, t) {
  return t.erasNarrowRegex(e);
}
function Ai(e, t) {
  return t._eraYearOrdinalRegex || we;
}
function Ct() {
  var e = [], t = [], s = [], r = [], a, i, n = this.eras();
  for (a = 0, i = n.length; a < i; ++a)
    t.push(P(n[a].name)), e.push(P(n[a].abbr)), s.push(P(n[a].narrow)), r.push(P(n[a].name)), r.push(P(n[a].abbr)), r.push(P(n[a].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function st(e, t) {
  h(0, [e, e.length], 0, t);
}
st("gggg", "weekYear");
st("ggggg", "weekYear");
st("GGGG", "isoWeekYear");
st("GGGGG", "isoWeekYear");
T("weekYear", "gg");
T("isoWeekYear", "GG");
x("weekYear", 1);
x("isoWeekYear", 1);
d("G", Qe);
d("g", Qe);
d("GG", g, W);
d("gg", g, W);
d("GGGG", Mt, Dt);
d("gggg", Mt, Dt);
d("GGGGG", Je, qe);
d("ggggg", Je, qe);
We(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = _(e);
  }
);
We(["gg", "GG"], function(e, t, s, r) {
  t[r] = o.parseTwoDigitYear(e);
});
function Gi(e) {
  return Ws.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Vi(e) {
  return Ws.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ji() {
  return J(this.year(), 1, 4);
}
function Zi() {
  return J(this.isoWeekYear(), 1, 4);
}
function Bi() {
  var e = this.localeData()._week;
  return J(this.year(), e.dow, e.doy);
}
function qi() {
  var e = this.localeData()._week;
  return J(this.weekYear(), e.dow, e.doy);
}
function Ws(e, t, s, r, a) {
  var i;
  return e == null ? be(this, r, a).year : (i = J(e, r, a), t > i && (t = i), $i.call(this, e, t, s, r, a));
}
function $i(e, t, s, r, a) {
  var i = fs(e, t, s, r, a), n = Oe(i.year, 0, i.dayOfYear);
  return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
T("quarter", "Q");
x("quarter", 7);
d("Q", ts);
w("Q", function(e, t) {
  t[q] = (_(e) - 1) * 3;
});
function Ji(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
T("date", "D");
x("date", 9);
d("D", g);
d("DD", g, W);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
w(["D", "DD"], H);
w("Do", function(e, t) {
  t[H] = _(e.match(g)[0]);
});
var Fs = pe("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
T("dayOfYear", "DDD");
x("dayOfYear", 4);
d("DDD", $e);
d("DDDD", ss);
w(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = _(e);
});
function Qi(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
T("minute", "m");
x("minute", 14);
d("m", g);
d("mm", g, W);
w(["m", "mm"], L);
var Xi = pe("Minutes", !1);
h("s", ["ss", 2], 0, "second");
T("second", "s");
x("second", 15);
d("s", g);
d("ss", g, W);
w(["s", "ss"], $);
var Ki = pe("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
T("millisecond", "ms");
x("millisecond", 16);
d("S", $e, ts);
d("SS", $e, W);
d("SSS", $e, ss);
var se, Rs;
for (se = "SSSS"; se.length <= 9; se += "S")
  d(se, we);
function en(e, t) {
  t[ie] = _(("0." + e) * 1e3);
}
for (se = "S"; se.length <= 9; se += "S")
  w(se, en);
Rs = pe("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function tn() {
  return this._isUTC ? "UTC" : "";
}
function sn() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Ne.prototype;
l.add = qa;
l.calendar = ti;
l.clone = si;
l.diff = ui;
l.endOf = wi;
l.format = ci;
l.from = mi;
l.fromNow = _i;
l.to = yi;
l.toNow = Si;
l.get = ar;
l.invalidAt = Ti;
l.isAfter = ri;
l.isBefore = ai;
l.isBetween = ii;
l.isSame = ni;
l.isSameOrAfter = li;
l.isSameOrBefore = oi;
l.isValid = Oi;
l.lang = bs;
l.locale = Os;
l.localeData = Ts;
l.max = Oa;
l.min = Ya;
l.parsingFlags = bi;
l.set = ir;
l.startOf = pi;
l.subtract = $a;
l.toArray = Di;
l.toObject = Mi;
l.toDate = ki;
l.toISOString = fi;
l.inspect = hi;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Yi;
l.toString = di;
l.unix = gi;
l.valueOf = vi;
l.creationData = xi;
l.eraName = Fi;
l.eraNarrow = Ri;
l.eraAbbr = Ci;
l.eraYear = Ii;
l.year = ds;
l.isLeapYear = Mr;
l.weekYear = Gi;
l.isoWeekYear = Vi;
l.quarter = l.quarters = Ji;
l.month = os;
l.daysInMonth = gr;
l.week = l.weeks = Nr;
l.isoWeek = l.isoWeeks = Pr;
l.weeksInYear = Bi;
l.weeksInWeekYear = qi;
l.isoWeeksInYear = ji;
l.isoWeeksInISOWeekYear = Zi;
l.date = Fs;
l.day = l.days = Vr;
l.weekday = jr;
l.isoWeekday = Zr;
l.dayOfYear = Qi;
l.hour = l.hours = Kr;
l.minute = l.minutes = Xi;
l.second = l.seconds = Ki;
l.millisecond = l.milliseconds = Rs;
l.utcOffset = Ca;
l.utc = La;
l.local = Ua;
l.parseZone = za;
l.hasAlignedHourOffset = Ea;
l.isDST = Ha;
l.isLocal = Ga;
l.isUtcOffset = Va;
l.isUtc = ks;
l.isUTC = ks;
l.zoneAbbr = tn;
l.zoneName = sn;
l.dates = C(
  "dates accessor is deprecated. Use date instead.",
  Fs
);
l.months = C(
  "months accessor is deprecated. Use month instead",
  os
);
l.years = C(
  "years accessor is deprecated. Use year instead",
  ds
);
l.zone = C(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ia
);
l.isDSTShifted = C(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Aa
);
function rn(e) {
  return v(e * 1e3);
}
function an() {
  return v.apply(null, arguments).parseZone();
}
function Cs(e) {
  return e;
}
var p = vt.prototype;
p.calendar = Vs;
p.longDateFormat = qs;
p.invalidDate = Js;
p.ordinal = Ks;
p.preparse = Cs;
p.postformat = Cs;
p.relativeTime = tr;
p.pastFuture = sr;
p.set = As;
p.eras = Ni;
p.erasParse = Pi;
p.erasConvertYear = Wi;
p.erasAbbrRegex = Ui;
p.erasNameRegex = Li;
p.erasNarrowRegex = zi;
p.months = Sr;
p.monthsShort = pr;
p.monthsParse = vr;
p.monthsRegex = Dr;
p.monthsShortRegex = kr;
p.week = Or;
p.firstDayOfYear = xr;
p.firstDayOfWeek = Tr;
p.weekdays = zr;
p.weekdaysMin = Hr;
p.weekdaysShort = Er;
p.weekdaysParse = Gr;
p.weekdaysRegex = Br;
p.weekdaysShortRegex = qr;
p.weekdaysMinRegex = $r;
p.isPM = Qr;
p.meridiem = ea;
function je(e, t, s, r) {
  var a = X(), i = G().set(r, t);
  return a[s](i, e);
}
function Is(e, t, s) {
  if (Q(e) && (t = e, e = void 0), e = e || "", t != null)
    return je(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = je(e, r, s, "month");
  return a;
}
function It(e, t, s, r) {
  typeof e == "boolean" ? (Q(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, Q(t) && (s = t, t = void 0), t = t || "");
  var a = X(), i = e ? a._week.dow : 0, n, u = [];
  if (s != null)
    return je(t, (s + i) % 7, r, "day");
  for (n = 0; n < 7; n++)
    u[n] = je(t, (n + i) % 7, r, "day");
  return u;
}
function nn(e, t) {
  return Is(e, t, "months");
}
function ln(e, t) {
  return Is(e, t, "monthsShort");
}
function on(e, t, s) {
  return It(e, t, s, "weekdays");
}
function un(e, t, s) {
  return It(e, t, s, "weekdaysShort");
}
function dn(e, t, s) {
  return It(e, t, s, "weekdaysMin");
}
re("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
o.lang = C(
  "moment.lang is deprecated. Use moment.locale instead.",
  re
);
o.langData = C(
  "moment.langData is deprecated. Use moment.localeData instead.",
  X
);
var j = Math.abs;
function fn() {
  var e = this._data;
  return this._milliseconds = j(this._milliseconds), this._days = j(this._days), this._months = j(this._months), e.milliseconds = j(e.milliseconds), e.seconds = j(e.seconds), e.minutes = j(e.minutes), e.hours = j(e.hours), e.months = j(e.months), e.years = j(e.years), this;
}
function Ls(e, t, s, r) {
  var a = E(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function hn(e, t) {
  return Ls(this, e, t, 1);
}
function cn(e, t) {
  return Ls(this, e, t, -1);
}
function jt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function mn() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, i, n, u, f;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += jt(yt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = R(e / 1e3), r.seconds = a % 60, i = R(a / 60), r.minutes = i % 60, n = R(i / 60), r.hours = n % 24, t += R(n / 24), f = R(Us(t)), s += f, t -= jt(yt(f)), u = R(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function Us(e) {
  return e * 4800 / 146097;
}
function yt(e) {
  return e * 146097 / 4800;
}
function _n(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = I(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Us(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(yt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function yn() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + _(this._months / 12) * 31536e6 : NaN;
}
function K(e) {
  return function() {
    return this.as(e);
  };
}
var Sn = K("ms"), pn = K("s"), wn = K("m"), vn = K("h"), gn = K("d"), kn = K("w"), Dn = K("M"), Mn = K("Q"), Yn = K("y");
function On() {
  return E(this);
}
function bn(e) {
  return e = I(e), this.isValid() ? this[e + "s"]() : NaN;
}
function le(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Tn = le("milliseconds"), xn = le("seconds"), Nn = le("minutes"), Pn = le("hours"), Wn = le("days"), Fn = le("months"), Rn = le("years");
function Cn() {
  return R(this.days() / 7);
}
var Z = Math.round, me = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function In(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Ln(e, t, s, r) {
  var a = E(e).abs(), i = Z(a.as("s")), n = Z(a.as("m")), u = Z(a.as("h")), f = Z(a.as("d")), c = Z(a.as("M")), k = Z(a.as("w")), M = Z(a.as("y")), F = i <= s.ss && ["s", i] || i < s.s && ["ss", i] || n <= 1 && ["m"] || n < s.m && ["mm", n] || u <= 1 && ["h"] || u < s.h && ["hh", u] || f <= 1 && ["d"] || f < s.d && ["dd", f];
  return s.w != null && (F = F || k <= 1 && ["w"] || k < s.w && ["ww", k]), F = F || c <= 1 && ["M"] || c < s.M && ["MM", c] || M <= 1 && ["y"] || ["yy", M], F[2] = t, F[3] = +e > 0, F[4] = r, In.apply(null, F);
}
function Un(e) {
  return e === void 0 ? Z : typeof e == "function" ? (Z = e, !0) : !1;
}
function zn(e, t) {
  return me[e] === void 0 ? !1 : t === void 0 ? me[e] : (me[e] = t, e === "s" && (me.ss = t - 1), !0);
}
function En(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = me, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, me, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), i = Ln(this, !s, r, a), s && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var ot = Math.abs;
function fe(e) {
  return (e > 0) - (e < 0) || +e;
}
function rt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ot(this._milliseconds) / 1e3, t = ot(this._days), s = ot(this._months), r, a, i, n, u = this.asSeconds(), f, c, k, M;
  return u ? (r = R(e / 60), a = R(r / 60), e %= 60, r %= 60, i = R(s / 12), s %= 12, n = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", c = fe(this._months) !== fe(u) ? "-" : "", k = fe(this._days) !== fe(u) ? "-" : "", M = fe(this._milliseconds) !== fe(u) ? "-" : "", f + "P" + (i ? c + i + "Y" : "") + (s ? c + s + "M" : "") + (t ? k + t + "D" : "") + (a || r || e ? "T" : "") + (a ? M + a + "H" : "") + (r ? M + r + "M" : "") + (e ? M + n + "S" : "")) : "P0D";
}
var y = tt.prototype;
y.isValid = Pa;
y.abs = fn;
y.add = hn;
y.subtract = cn;
y.as = _n;
y.asMilliseconds = Sn;
y.asSeconds = pn;
y.asMinutes = wn;
y.asHours = vn;
y.asDays = gn;
y.asWeeks = kn;
y.asMonths = Dn;
y.asQuarters = Mn;
y.asYears = Yn;
y.valueOf = yn;
y._bubble = mn;
y.clone = On;
y.get = bn;
y.milliseconds = Tn;
y.seconds = xn;
y.minutes = Nn;
y.hours = Pn;
y.days = Wn;
y.weeks = Cn;
y.months = Fn;
y.years = Rn;
y.humanize = En;
y.toISOString = rt;
y.toString = rt;
y.toJSON = rt;
y.locale = Os;
y.localeData = Ts;
y.toIsoString = C(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  rt
);
y.lang = bs;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
d("x", Qe);
d("X", lr);
w("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
w("x", function(e, t, s) {
  s._d = new Date(_(e));
});
//! moment.js
o.version = "2.29.4";
Es(v);
o.fn = l;
o.min = ba;
o.max = Ta;
o.now = xa;
o.utc = G;
o.unix = rn;
o.months = nn;
o.isDate = xe;
o.locale = re;
o.invalid = Ze;
o.duration = E;
o.isMoment = z;
o.weekdays = on;
o.parseZone = an;
o.localeData = X;
o.isDuration = Ue;
o.monthsShort = ln;
o.weekdaysMin = dn;
o.defineLocale = Tt;
o.updateLocale = aa;
o.locales = ia;
o.weekdaysShort = un;
o.normalizeUnits = I;
o.relativeTimeRounding = Un;
o.relativeTimeThreshold = zn;
o.calendarFormat = ei;
o.prototype = l;
o.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Hn = (e) => {
  var t = {
    nodiff: "",
    year: "year",
    years: "years",
    month: "month",
    months: "months",
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes",
    second: "second",
    seconds: "seconds",
    delimiter: " "
  };
  function s(i, n) {
    return i + " " + t[n + (i === 1 ? "" : "s")];
  }
  function r(i, n, u, f, c, k) {
    var M = [];
    return i && M.push(s(i, "year")), n && M.push(s(n, "month")), u && M.push(s(u, "day")), f && M.push(s(f, "hour")), c && M.push(s(c, "minute")), k && M.push(s(k, "second")), M.join(t.delimiter);
  }
  function a(i, n, u, f, c, k, M) {
    return {
      years: i,
      months: n,
      days: u,
      hours: f,
      minutes: c,
      seconds: k,
      firstDateWasLater: M
    };
  }
  e.fn.preciseDiff = function(i, n) {
    return e.preciseDiff(this, i, n);
  }, e.preciseDiff = function(i, n, u) {
    var f = e(i), c = e(n), k;
    if (f.add(c.utcOffset() - f.utcOffset(), "minutes"), f.isSame(c))
      return u ? a(0, 0, 0, 0, 0, 0, !1) : t.nodiff;
    if (f.isAfter(c)) {
      var M = f;
      f = c, c = M, k = !0;
    } else
      k = !1;
    var F = c.year() - f.year(), oe = c.month() - f.month(), ee = c.date() - f.date(), ue = c.hour() - f.hour(), de = c.minute() - f.minute(), ve = c.second() - f.second();
    if (ve < 0 && (ve = 60 + ve, de--), de < 0 && (de = 60 + de, ue--), ue < 0 && (ue = 24 + ue, ee--), ee < 0) {
      var Fe = e(c.year() + "-" + (c.month() + 1), "YYYY-MM").subtract(1, "M").daysInMonth();
      Fe < f.date() ? ee = Fe + ee + (f.date() - Fe) : ee = Fe + ee, oe--;
    }
    return oe < 0 && (oe = 12 + oe, F--), u ? a(F, oe, ee, ue, de, ve, k) : r(F, oe, ee, ue, de, ve);
  };
};
const Lt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, a] of t)
    s[r] = a;
  return s;
}, An = {
  name: "FlipNumberItem",
  props: {
    value: {
      type: Number,
      required: !0,
      default: 0
    },
    speed: {
      type: [Number, String],
      default: 600
    },
    perOne: {
      type: Boolean,
      default: !1
    },
    split: {
      type: Boolean,
      default: !1
    },
    fontSize: {
      type: String,
      default: "1rem"
    }
  },
  data() {
    return {
      frontCount: 0,
      backCount: this.value,
      animationClass: "",
      isFlipping: !1
    };
  },
  watch: {
    value(e, t) {
      e < t ? this.flipUp(e, t) : e > t && this.flipDown(e, t);
    }
  },
  methods: {
    async flipDown(e, t) {
      if (this.perOne)
        for (; e > t; )
          await this.flipDownOne(t), t++;
      else
        await this.flipDownFromTo(t, e);
    },
    async flipUp(e, t) {
      if (this.perOne)
        for (; e < t; )
          await this.flipUpOne(t), t--;
      else
        await this.flipUpFromTo(t, e);
    },
    async flipDownFromTo(e, t) {
      if (this.isFlipping)
        return !1;
      this.frontCount = e, this.backCount = t, this.animationClass = "down go", this.isFlipping = !0, await this.resetClass("down");
    },
    async flipDownOne(e) {
      await this.flipDownFromTo(e, e + 1);
    },
    async flipUpFromTo(e, t) {
      if (this.isFlipping)
        return !1;
      this.frontCount = e, this.backCount = t, this.animationClass = "up go", this.isFlipping = !0, await this.resetClass("up");
    },
    async flipUpOne(e) {
      await this.flipUpFromTo(e, e - 1);
    },
    resetClass(e) {
      return new Promise((t, s) => {
        setTimeout(() => {
          this.animationClass = e, this.isFlipping = !1, this.frontCount = this.backCount, setTimeout(() => {
            t();
          }, 0);
        }, this.speed);
      });
    }
  }
};
function Gn(e, t, s, r, a, i) {
  return B(), ce("div", {
    class: "flip-number-item",
    style: Zt({ "--fontSize": s.fontSize })
  }, [
    De("div", {
      class: at(["flip", a.animationClass])
    }, [
      De("div", {
        class: at(["digital front", "number" + a.frontCount])
      }, null, 2),
      De("div", {
        class: at(["digital back", "number" + a.backCount])
      }, null, 2)
    ], 2)
  ], 4);
}
const Vn = /* @__PURE__ */ Lt(An, [["render", Gn], ["__scopeId", "data-v-1eda37ad"]]);
const jn = {
  name: "FlipNumber",
  components: {
    FlipNumberItem: Vn
  },
  props: {
    value: {
      type: String,
      required: !0,
      default: "0"
    },
    speed: {
      type: [Number, String],
      default: 600
    },
    label: {
      type: String,
      default: null
    },
    split: {
      type: Boolean,
      default: !0
    },
    fontSize: {
      type: String,
      default: "1rem"
    },
    labelSize: {
      type: String,
      required: !1
    }
  },
  data() {
    let e = this.speed * 1;
    return isNaN(e) ? (console.error("the prop speed is not a number"), e = 600) : e = e < 600 ? 600 : e, {
      numbersSplitted: [],
      interval: e
    };
  },
  created() {
    this.splitValue();
  },
  watch: {
    value() {
      this.splitValue();
    }
  },
  methods: {
    splitValue() {
      if (this.numbersSplitted = [], !this.split) {
        this.numbersSplitted.push(Number(this.value));
        return;
      }
      if (isNaN(Number(this.value)))
        return console.error("the prop must be a number");
      const e = this.value.toString().split("");
      for (let t = 0; t < e.length; t++) {
        let s = e[t];
        isNaN(Number(s)) ? this.numbersSplitted.push(s) : this.numbersSplitted.push(Number(s));
      }
    }
  }
}, Zn = { class: "flip-section" }, Bn = { class: "label" };
function qn(e, t, s, r, a, i) {
  const n = Bt("flip-number-item");
  return B(), ce("div", {
    class: "flip-number",
    style: Zt({ "--fontSize": s.fontSize, "--labelSize": s.labelSize || s.fontSize })
  }, [
    De("div", Zn, [
      (B(!0), ce(Ut, null, zs(a.numbersSplitted, (u, f) => (B(), ce(Ut, null, [
        typeof u == "number" ? (B(), ut(n, {
          value: u,
          speed: s.speed,
          class: "loop-item",
          key: f,
          split: s.split,
          fontSize: s.fontSize
        }, null, 8, ["value", "speed", "split", "fontSize"])) : (B(), ce("div", {
          class: "loop-item sign",
          key: f
        }, zt(u), 1))
      ], 64))), 256))
    ]),
    De("div", Bn, zt(s.label), 1)
  ], 4);
}
const $n = /* @__PURE__ */ Lt(jn, [["render", qn], ["__scopeId", "data-v-a46fc16a"]]);
Hn(o);
const Jn = {
  props: {
    date: {
      type: String,
      required: !0
    },
    fontSize: {
      type: String,
      default: "1rem"
    },
    labelSize: {
      type: String,
      required: !1
    },
    labels: {
      type: Object,
      default: () => ({
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
      })
    }
  },
  components: {
    FlipNumber: $n
  },
  methods: {
    getDateDiff() {
      const e = o(this.date), t = o(), s = o.preciseDiff(e, t, !0);
      this.years = this.pad(s.years, 2), this.months = this.pad(s.months, 2), this.days = this.pad(s.days, 2), this.hours = this.pad(s.hours, 2), this.minutes = this.pad(s.minutes, 2), this.seconds = this.pad(s.seconds, 2);
    },
    pad(e, t) {
      for (e = e.toString(); e.length < t; )
        e = "0" + e;
      return e;
    }
  },
  mounted() {
    this.getDateDiff(), setInterval(() => {
      this.getDateDiff();
    }, 1e3);
  },
  data() {
    return {
      years: "00",
      months: "00",
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    };
  }
}, Qn = { class: "flip-counter" };
function Xn(e, t, s, r, a, i) {
  const n = Bt("FlipNumber");
  return B(), ce("div", Qn, [
    parseInt(a.years) > 0 ? (B(), ut(n, {
      key: 0,
      value: a.years,
      speed: 600,
      label: s.labels.years || "Years",
      fontSize: s.fontSize,
      labelSize: s.labelSize
    }, null, 8, ["value", "label", "fontSize", "labelSize"])) : Et("", !0),
    parseInt(a.months) > 0 ? (B(), ut(n, {
      key: 1,
      value: a.months,
      speed: 600,
      label: s.labels.months || "Months",
      fontSize: s.fontSize,
      labelSize: s.labelSize
    }, null, 8, ["value", "label", "fontSize", "labelSize"])) : Et("", !0),
    Re(n, {
      value: a.days,
      speed: 600,
      label: s.labels.days || "Days",
      fontSize: s.fontSize,
      labelSize: s.labelSize
    }, null, 8, ["value", "label", "fontSize", "labelSize"]),
    Re(n, {
      value: a.hours,
      speed: 600,
      label: s.labels.hours || "Hours",
      fontSize: s.fontSize,
      labelSize: s.labelSize
    }, null, 8, ["value", "label", "fontSize", "labelSize"]),
    Re(n, {
      value: a.minutes,
      speed: 600,
      label: s.labels.minutes || "Minutes",
      fontSize: s.fontSize,
      labelSize: s.labelSize
    }, null, 8, ["value", "label", "fontSize", "labelSize"]),
    Re(n, {
      value: a.seconds,
      speed: 600,
      label: s.labels.seconds || "Seconds",
      fontSize: s.fontSize,
      labelSize: s.labelSize
    }, null, 8, ["value", "label", "fontSize", "labelSize"])
  ]);
}
const el = /* @__PURE__ */ Lt(Jn, [["render", Xn], ["__scopeId", "data-v-ac902ccf"]]);
export {
  el as FlipCounter
};
