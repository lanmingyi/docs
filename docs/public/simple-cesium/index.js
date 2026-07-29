import * as Ox from "cesium";
import { SceneMode as p0, GeographicTilingScheme as Pt, Ion as ga, LabelStyle as j2, Color as W, HorizontalOrigin as wt, VerticalOrigin as H2, Cartesian2 as Y, Entity as ya, ScreenSpaceEventType as L0, KeyboardEventModifier as U2, Viewer as Y2, CzmlDataSource as $2, CustomDataSource as kt, DefaultProxy as va, WebMapServiceImageryProvider as wa, WebMapTileServiceImageryProvider as Ca, CesiumTerrainProvider as Sa, EllipsoidTerrainProvider as Z2, Rectangle as vx, GeoJsonDataSource as Ea, PolylineGraphics as Ta, ArcType as Ma, CameraEventType as K0, Camera as Da, Ellipsoid as Wx, Math as y0, Cartesian3 as y, JulianDate as r0, PolygonHierarchy as Fx, ConstantProperty as wx, ConstantPositionProperty as q2, Cartographic as t0, EllipsoidGeodesic as At, Ray as X2, Plane as J2, IntersectionTests as Pa, defined as z, SceneTransforms as ka, VelocityVectorProperty as Aa, Event as Ex, ExtrapolationType as Ct, Transforms as La, Matrix3 as Na, Quaternion as Oa, ReferenceFrame as _2, DeveloperError as Q2, GridImageryProvider as Va, destroyObject as Lt, Material as N, createPropertyDescriptor as E0, Property as f0, PolylineCollection as Ra, LabelCollection as za, PrimitiveCollection as K2, SelectionIndicator as xn, ImageryLayer as Ga, UrlTemplateImageryProvider as Wa } from "cesium";
import { onScopeDispose as Nt, defineComponent as S0, shallowRef as en, provide as Fa, onMounted as Ba, onBeforeUnmount as ot, openBlock as D0, createElementBlock as rx, renderSlot as St, watch as Et, computed as Ot, toValue as bx, unref as Vt, resolveComponent as Rt, createBlock as zt, reactive as ja, h as Ha, nextTick as tn, useCssVars as Ua, ref as Cx, onUnmounted as Ya, createElementVNode as T0, toDisplayString as Gt, createCommentVNode as $a, withModifiers as Za, withDirectives as qa, Fragment as nn, renderList as an, normalizeStyle as Xa, vShow as Ja, normalizeProps as b2, guardReactiveProps as m2, withCtx as I2, createVNode as Qa } from "vue";
import Ka from "cesium-navigation-es6";
import { storeToRefs as xr, defineStore as rn } from "pinia";
import { polygon as sn, area as er, destination as tr, featureCollection as nr, center as ar, point as Bx, midpoint as rr, distance as sr } from "@turf/turf";
import { area as nc, polygon as ac } from "@turf/turf";
function on(t, e) {
  return t = t - 146, jx()[t];
}
const dx = on;
function jx() {
  const t = ["728969Urxema", "/map/globe/{z}/{x}/{y}.jpg", "SCENE2D", "4595RBTXli", "14MePJqu", "3428xxtLPi", "9999/12/31 23:59:59", "3205550BQzxLA", "11700iwDbaF", "13669942rhjHbK", "1965732bhuZSO", "1000030wMEIZK", "cesium-box", "3XOzKdg", "/map/terrain/", "3504CnMTAv"];
  return jx = function() {
    return t;
  }, jx();
}
(function(t, e) {
  const x = on, n = t();
  for (; ; )
    try {
      if (parseInt(x(150)) / 1 + parseInt(x(161)) / 2 * (-parseInt(x(147)) / 3) + -parseInt(x(155)) / 4 * (-parseInt(x(153)) / 5) + parseInt(x(160)) / 6 * (-parseInt(x(154)) / 7) + -parseInt(x(149)) / 8 * (parseInt(x(158)) / 9) + -parseInt(x(157)) / 10 + parseInt(x(159)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(jx, 714060);
const b0 = { DEFAULT_VIEWER_NAME: dx(146), defaultImageryUrl: { url: dx(151), tilingScheme: new Pt(), minimumLevel: 0, maximumLevel: 19 }, defaultTerrainUrl: dx(148), viewerConfig: { infoBox: !1, animation: !1, homeButton: !1, geocoder: !1, shouldAnimate: !1, baseLayerPicker: !1, fullscreenButton: !1, timeline: !1, sceneMode: p0[dx(152)], selectionIndicator: !0, navigationHelpButton: !1, sceneModePicker: !1, terrain: void 0 }, synchronizeConfig: { maxTime: 5, interval: 1e3, minSpeed: 1e-3, cacheSize: 3, defaultStopTime: dx(156) }, eventConfig: { clickAndDbClickInterval: 100, defaultLeftClick: !0, defaultRightClick: !1, defaultClearClick: !1, defaultDoubleClick: !1, defaultMouseMove: !1, defaultLeftUp: !1, defaultLeftDown: !1 }, navigation: { duration: 3, enableCompass: !0, enableDistanceLegend: !0, enableCompassOuterRing: !0, enableZoomControls: !0 } };
function Hx() {
  var t = ["1272Fggffs", "3786960aLedMi", "2378268HxHHGu", "1745168Yvtuhg", "27535MnTrPS", "11576481BeNFns", "1050906SQncsN", "8986992BEWMES"];
  return Hx = function() {
    return t;
  }, Hx();
}
(function(t, e) {
  for (var x = ir, n = t(); ; )
    try {
      var a = parseInt(x(407)) / 1 + parseInt(x(410)) / 2 + parseInt(x(406)) / 3 + -parseInt(x(404)) / 4 * (parseInt(x(408)) / 5) + -parseInt(x(403)) / 6 + parseInt(x(409)) / 7 + -parseInt(x(405)) / 8;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Hx, 994732);
function ir(t, e) {
  t = t - 403;
  var x = Hx(), n = x[t];
  return n;
}
function Ii(t) {
  ga.defaultAccessToken = t;
}
const g2 = cn;
function Ux() {
  const t = ["8999248sXBsIF", "14mBdRfl", "1334960doNihE", "4682450xOqOCw", "LEFT", "12UvMMhL", "1037862SopcFc", "39789LKaiyh", "WHITE", "164918xxlDyc", "6500gHvkec", "724398bICJkj"];
  return Ux = function() {
    return t;
  }, Ux();
}
function cn(t, e) {
  return t = t - 338, Ux()[t];
}
(function(t, e) {
  const x = cn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(348)) / 1 + -parseInt(x(344)) / 2 * (parseInt(x(338)) / 3) + -parseInt(x(341)) / 4 + -parseInt(x(342)) / 5 + parseInt(x(345)) / 6 * (-parseInt(x(340)) / 7) + parseInt(x(339)) / 8 + parseInt(x(346)) / 9 * (parseInt(x(349)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ux, 768658);
const or = { font: "14px sans-serif", pixelOffset: new Y(18, 0), verticalOrigin: H2.CENTER, horizontalOrigin: wt[g2(343)], fillColor: W[g2(347)], style: j2.FILL_AND_OUTLINE };
function Yx() {
  const t = ["36YdeFwl", "7aklTNT", "2455452rgLyGX", "22526830NTvRzF", "3852900sOXktk", "988998zkdECr", "688423stGpCh", "3719880BmdVmk", "25nhQoEq", "11MvbYTd", "49174oNaJDN"];
  return Yx = function() {
    return t;
  }, Yx();
}
function cr(t, e) {
  return t = t - 164, Yx()[t];
}
(function(t, e) {
  const x = cr, n = t();
  for (; ; )
    try {
      if (parseInt(x(168)) / 1 + -parseInt(x(172)) / 2 * (parseInt(x(173)) / 3) + parseInt(x(166)) / 4 + parseInt(x(170)) / 5 * (parseInt(x(167)) / 6) + parseInt(x(174)) / 7 * (parseInt(x(169)) / 8) + parseInt(x(164)) / 9 + parseInt(x(165)) / 10 * (-parseInt(x(171)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Yx, 665899);
const gi = { scale: 1 };
async function yi(t) {
  return t;
}
(function(t, e) {
  const x = h0, n = t();
  for (; ; )
    try {
      if (parseInt(x(230)) / 1 + -parseInt(x(206)) / 2 * (-parseInt(x(231)) / 3) + -parseInt(x(220)) / 4 * (parseInt(x(232)) / 5) + parseInt(x(229)) / 6 * (-parseInt(x(233)) / 7) + -parseInt(x(211)) / 8 * (parseInt(x(217)) / 9) + -parseInt(x(219)) / 10 * (parseInt(x(226)) / 11) + parseInt(x(212)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($x, 647405);
var fr = ((t) => {
  const e = h0;
  return t[t[e(227)] = 0] = "entityArea", t[t[e(223)] = 1] = e(223), t[t[e(234)] = 2] = e(234), t;
})(fr || {});
const Wt = /* @__PURE__ */ new Map();
function h0(t, e) {
  return t = t - 205, $x()[t];
}
function ur(t) {
  const e = h0;
  return t.isEntity ? 0 : t[e(205)] ? 1 : 2;
}
function Ft(t, e = O()) {
  const x = h0;
  return !t[x(209)](e) && (t[x(210)](e, /* @__PURE__ */ new Map()), Mx(() => t.delete(e), { viewerName: e })), t[x(215)](e);
}
function Bt(t, e, x) {
  const n = h0, a = x ? e + "_" + x : e;
  return !t[n(209)](a) && t[n(210)](a, { areaEventMap: /* @__PURE__ */ new Map(), isRegistry: !1 }), t[n(215)](a);
}
function mx(t, e) {
  const x = h0;
  return !t[x(209)](e) && t.set(e, /* @__PURE__ */ new Set()), t[x(215)](e);
}
function lr(t, e, x, n) {
  const a = Ft(Wt, t), s = Bt(a, e, n), r = s.areaEventMap;
  return mx(r, x);
}
function G0(t, e) {
  return function(x, n) {
    const a = h0, s = ur(n ?? {});
    return w0((r) => {
      const i = h0, o = O(n == null ? void 0 : n[i(213)]), c = Ft(Wt, o), l = Bt(c, t, e), u = l[i(214)];
      mx(u, s).add(x), !l[i(221)] && dr(r, o, t, e);
    }, n == null ? void 0 : n[a(213)]), () => {
      const r = a;
      lr(O(n == null ? void 0 : n[r(213)]), t, s, e)[r(225)](x);
    };
  };
}
function dr(t, e, x, n) {
  t.screenSpaceEventHandler.setInputAction((a) => {
    const s = h0;
    e = O(e);
    const r = Ft(Wt, e), i = Bt(r, x, n), o = i[s(214)];
    let c;
    x === L0.MOUSE_MOVE && (c = y2(a[s(218)], t)), c = y2(a.position, t), c ? mx(o, 0).forEach((h) => h({ entity: c, position: a })) : mx(o, 1)[s(216)]((h) => h({ position: a })), mx(o, 2).forEach((u) => u({ position: a }));
  }, x, n);
}
function $x() {
  const t = ["entityArea", "add", "540wbugWB", "923297kYxjLO", "3798201BrCYAr", "127575ZgifzL", "87983fdjYqy", "globalArea", "isEmpty", "2OgCNRi", "primitive", "scene", "has", "set", "8eskXgX", "18602328eegGZb", "viewerName", "areaEventMap", "get", "forEach", "653031ZPnSxo", "endPosition", "278470cnOJMM", "200LkOokp", "isRegistry", "from", "emptyArea", "pick", "delete", "242gkoCCr"];
  return $x = function() {
    return t;
  }, $x();
}
function y2(t, e) {
  var a;
  const x = h0;
  if (!t) return null;
  const n = (a = e == null ? void 0 : e.scene) == null ? void 0 : a[x(224)](t, 30, 30);
  return n && pr(n == null ? void 0 : n.id) && n.id;
}
function vi(t, e) {
  const x = h0;
  if (!t) return null;
  const n = e.scene[x(224)](t);
  return n && n.primitive;
}
function wi(t, e) {
  const x = h0;
  if (!t) return null;
  const n = e[x(208)][x(224)](t);
  if (n != null && n[x(207)]) return n;
}
function pr(t) {
  return t instanceof ya;
}
(function(t, e) {
  const x = ct, n = t();
  for (; ; )
    try {
      if (-parseInt(x(288)) / 1 * (parseInt(x(284)) / 2) + -parseInt(x(275)) / 3 * (parseInt(x(290)) / 4) + parseInt(x(283)) / 5 + -parseInt(x(274)) / 6 + parseInt(x(285)) / 7 + -parseInt(x(278)) / 8 * (-parseInt(x(273)) / 9) + parseInt(x(277)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zx, 751672);
function Zx() {
  const t = ["viewerName", "forEach", "2572000JsrqYf", "2BtXQoc", "6622217tjrrtc", "get", "set", "570302QYqQsw", "has", "15544EWMiYS", "clear", "3371454TZnVdj", "6368820ibLMQB", "1005GubdFV", "delete", "14756110EUQPdw", "16lQTzDm", "then", "add"];
  return Zx = function() {
    return t;
  }, Zx();
}
const H0 = /* @__PURE__ */ new WeakMap();
function ct(t, e) {
  return t = t - 272, Zx()[t];
}
function Ci(t, e) {
  const x = ct;
  return nextTick()[x(279)](() => {
    const n = x, { viewerName: a } = e ?? {}, s = B(a);
    !H0[n(289)](s) && (H0[n(287)](s, /* @__PURE__ */ new Set()), Mx(() => H0[n(276)](s), { viewerName: O(a) })), H0[n(286)](s)[n(280)](t);
  }), () => {
    var n;
    return (n = H0[x(286)](B(e == null ? void 0 : e.viewerName))) == null ? void 0 : n.delete(t);
  };
}
function Si(t) {
  var n;
  const e = ct, x = B(t);
  (n = H0.get(x)) == null || n[e(282)]((a) => {
    const s = B();
    a(s);
  });
}
function Ei(t) {
  var x;
  const e = ct;
  (x = H0[e(286)](B(t == null ? void 0 : t[e(281)]))) == null || x[e(272)]();
}
function ft(t, e) {
  return t = t - 261, qx()[t];
}
function qx() {
  const t = ["2582mtNRSE", "scene", "3teAdef", "24LvknEz", "addEventListener", "36117tCuxpB", "postRender", "930347SKfROD", "preUpdate", "329350NWDqmZ", "506785nwqndd", "98iNzhIm", "277716pdTOjD", "14YGDOuL", "24VDsFec", "366564WRRoAZ"];
  return qx = function() {
    return t;
  }, qx();
}
(function(t, e) {
  const x = ft, n = t();
  for (; ; )
    try {
      if (-parseInt(x(268)) / 1 * (-parseInt(x(263)) / 2) + -parseInt(x(270)) / 3 * (parseInt(x(267)) / 4) + parseInt(x(262)) / 5 + -parseInt(x(264)) / 6 * (-parseInt(x(265)) / 7) + -parseInt(x(266)) / 8 * (-parseInt(x(273)) / 9) + parseInt(x(261)) / 10 + parseInt(x(275)) / 11 * (-parseInt(x(271)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qx, 104626);
function fn(t, e) {
  const { viewerName: x } = e ?? {};
  let n;
  return w0((a) => {
    const s = ft;
    n = a[s(269)][s(276)][s(272)](t);
  }, { viewerName: x }), n;
}
function Ti(t, e) {
  const x = ft, { viewerName: n } = e ?? {}, a = dt(n), s = a[x(274)][x(272)](t);
  return () => s;
}
function Mi(t, e) {
  const x = ft, { viewerName: n } = e ?? {};
  return kx(n).onTick[x(272)](t);
}
function zx(t, e) {
  return t = t - 476, Xx()[t];
}
(function(t, e) {
  const x = zx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(484)) / 1 + parseInt(x(489)) / 2 * (parseInt(x(480)) / 3) + -parseInt(x(492)) / 4 * (parseInt(x(493)) / 5) + -parseInt(x(488)) / 6 * (parseInt(x(479)) / 7) + -parseInt(x(487)) / 8 * (-parseInt(x(485)) / 9) + parseInt(x(491)) / 10 + -parseInt(x(481)) / 11 * (parseInt(x(490)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xx, 224220);
function Xx() {
  const t = ["230hbDZFD", "endPosition", "clear", "forEach", "702233lbxOkh", "57lJdgla", "99TxGMnC", "condition", "add", "14042tnWcUk", "36RuriSp", "setValue", "277976TsqfNC", "18ZgHYgj", "27298AdAQXQ", "130692kZrjHc", "2811930usVDuv", "3676ZgIqdG"];
  return Xx = function() {
    return t;
  }, Xx();
}
function Di(t, e) {
  const x = zx, n = /* @__PURE__ */ new Set(), a = e == null ? void 0 : e[x(482)];
  return w0(() => {
    const s = q0(({ entity: r }) => {
      const i = zx;
      if (!(a ? a(r) : !1)) return;
      const c = Ut(({ position: u }) => {
        var d;
        const h = zx, f = a2(u[h(476)]);
        f && ((d = ss(r)) == null || d[h(486)](f));
      });
      n[i(483)](c);
      const l = jt(({ position: u }) => {
        c(), t == null || t({ entity: r, position: u }), l();
      });
      n[i(483)](l);
    }, { isEntity: !0 });
    n.add(s);
  }), () => {
    const s = x;
    n[s(478)]((r) => r == null ? void 0 : r()), n[s(477)]();
  };
}
const P0 = un;
(function(t, e) {
  const x = un, n = t();
  for (; ; )
    try {
      if (parseInt(x(479)) / 1 + -parseInt(x(476)) / 2 + parseInt(x(486)) / 3 * (-parseInt(x(487)) / 4) + -parseInt(x(473)) / 5 * (parseInt(x(480)) / 6) + -parseInt(x(472)) / 7 * (parseInt(x(484)) / 8) + parseInt(x(482)) / 9 + parseInt(x(475)) / 10 * (parseInt(x(483)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Jx, 815738);
function Jx() {
  const t = ["112FxxYzB", "CTRL", "177798nHaSZs", "76NCYCuF", "RIGHT_CLICK", "85491XMcJgC", "95855SjiBAC", "MOUSE_MOVE", "814990yWVpRT", "2164902ICBMgd", "LEFT_UP", "LEFT_DOWN", "771667DKARvy", "162RSbcAa", "LEFT_CLICK", "2998863AjsecN", "352JeVOiY"];
  return Jx = function() {
    return t;
  }, Jx();
}
function un(t, e) {
  return t = t - 472, Jx()[t];
}
const Pi = G0(L0[P0(481)]), ki = G0(L0[P0(481)], U2[P0(485)]), q0 = G0(L0[P0(478)]), Ai = G0(L0[P0(478)], U2[P0(485)]), jt = G0(L0[P0(477)]), Ht = G0(L0[P0(488)]), hr = G0(L0.LEFT_DOUBLE_CLICK), Ut = G0(L0[P0(474)]), v0 = ut;
(function(t, e) {
  const x = ut, n = t();
  for (; ; )
    try {
      if (-parseInt(x(103)) / 1 * (-parseInt(x(114)) / 2) + -parseInt(x(120)) / 3 + -parseInt(x(124)) / 4 * (-parseInt(x(116)) / 5) + -parseInt(x(111)) / 6 + parseInt(x(121)) / 7 * (parseInt(x(115)) / 8) + -parseInt(x(109)) / 9 + -parseInt(x(117)) / 10 * (-parseInt(x(118)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qx, 969222);
const z0 = /* @__PURE__ */ new Map(), { viewerConfig: _r } = b0;
function br(t, e) {
  const x = ut;
  if (z0.has(t)) return console[x(123)]("名称为" + t + x(110)), z0[x(105)](t);
  z0[x(106)](t, new Y2(t, ys({}, _r, e ?? {})));
  const n = z0.get(t);
  return Cr(t, n), gr(n), n;
}
function B(t) {
  const e = t ?? b0.DEFAULT_VIEWER_NAME;
  return ln(e) ? e : z0.get(e);
}
function O(t) {
  return t ?? b0[ut(102)];
}
function mr(t = b0[v0(102)]) {
  z0[v0(104)](t);
}
function Ir(t = b0[v0(102)]) {
  var n;
  const e = v0, x = B(t);
  wr(t), (n = B(x)) == null || n[e(113)](), mr(t);
}
function Qx() {
  const t = ["warn", "465212AdhAhG", "flyTo", "display", "DEFAULT_VIEWER_NAME", "529biFArO", "delete", "get", "set", "请先创建Viewer", "bottomContainer", "6384339IPRHUV", " 的视图已经存在", "989166fBLWCi", "none", "destroy", "1870LTFLcm", "1054544wLdJzu", "10qHVnvQ", "3281390VauQOP", "11sRbKIO", "style", "2381166uPGcCO", "84VBKqUc", "has"];
  return Qx = function() {
    return t;
  }, Qx();
}
function Li() {
}
function Ni(t = b0[v0(102)]) {
  return z0[v0(122)](t);
}
function Oi(t) {
  const e = v0;
  return !t || !ln(t) ? (console[e(123)](e(107)), !1) : !0;
}
function ln(t) {
  return t instanceof Y2;
}
function Tx(t) {
  return function(e) {
    return B(e)[t];
  };
}
function gr(t) {
  const e = v0, x = B(t)[e(108)];
  x[e(119)][e(126)] = e(112);
}
function Vi(t, e, x) {
  const n = v0;
  B(x)[n(125)](t, e);
}
const yr = Tx("container"), vr = Tx("canvas");
function m0(t = "", e) {
  const x = v0, n = vr(e);
  n[x(119)].cursor = t;
}
function ut(t, e) {
  return t = t - 102, Qx()[t];
}
function dn(t) {
  return function(e, x) {
    B(x)[t] = e;
  };
}
(function(t, e) {
  const x = Yt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(487)) / 1 + parseInt(x(489)) / 2 + parseInt(x(478)) / 3 * (-parseInt(x(485)) / 4) + -parseInt(x(493)) / 5 * (-parseInt(x(488)) / 6) + parseInt(x(484)) / 7 + parseInt(x(490)) / 8 * (parseInt(x(482)) / 9) + -parseInt(x(479)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Kx, 632836);
function Yt(t, e) {
  return t = t - 478, Kx()[t];
}
const Ix = /* @__PURE__ */ new Map();
function wr(t = O()) {
  var n;
  const e = Yt, x = B(t);
  (n = Ix[e(483)](t)) == null || n.forEach((a) => a(x)), Ix[e(492)](t);
}
function Kx() {
  const t = ["add", "825716zemlbr", "558ykxBwm", "787576nytwan", "8CeDsdh", "set", "delete", "41290qEQPZO", "3GmEMll", "15170POmAln", "viewerName", "has", "2448045JYtXAZ", "get", "6638135CBtiPa", "3688092FVUYou"];
  return Kx = function() {
    return t;
  }, Kx();
}
function Mx(t, e) {
  const x = Yt, n = O(e == null ? void 0 : e[x(480)]);
  !Ix[x(481)](n) && Ix[x(491)](n, /* @__PURE__ */ new Set()), Ix[x(483)](n)[x(486)](t);
}
function $t(t, e) {
  return t = t - 188, xe()[t];
}
(function(t, e) {
  const x = $t, n = t();
  for (; ; )
    try {
      if (parseInt(x(198)) / 1 * (parseInt(x(202)) / 2) + -parseInt(x(197)) / 3 * (parseInt(x(192)) / 4) + parseInt(x(190)) / 5 * (-parseInt(x(189)) / 6) + -parseInt(x(191)) / 7 + -parseInt(x(194)) / 8 + parseInt(x(188)) / 9 * (-parseInt(x(195)) / 10) + parseInt(x(200)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xe, 355803);
const sx = /* @__PURE__ */ new Map();
function w0(t, e) {
  const x = $t, n = O(cs(e) ? e[x(203)] : e), a = B(O(n));
  if (a) return t(a);
  !sx[x(193)](n) && sx.set(n, /* @__PURE__ */ new Set()), sx[x(201)](n).add(t);
}
function Cr(t, e) {
  const x = $t, n = sx[x(201)](t);
  n && n[x(199)]((a) => a(e)), sx[x(196)](t);
}
function xe() {
  const t = ["has", "4937264JGYjsb", "125900HgdubP", "delete", "519VCACpU", "20473hhLRKk", "forEach", "20964339yXajJA", "get", "10hXJSKw", "viewerName", "9bDmhFD", "2316ZaCPPg", "95EQEXZs", "3875144NQjIiH", "10676OMlRXJ"];
  return xe = function() {
    return t;
  }, xe();
}
function ee() {
  const t = ["dataSources", "14ECnBQJ", "forEach", "1540814Rqhknv", "412233nBnBWO", "remove", "1863450GYosuA", "2640WNRhqI", "get", "1711408vxhbkL", "removeAll", "delete", "entities", "70cCYEpn", "warn", "has", "248otlcfv", "values", "10353ZOljwh", "2245xeJGoa", "1297872yOGslp", "set", "请输入datasource 名称", "add"];
  return ee = function() {
    return t;
  }, ee();
}
(function(t, e) {
  const x = I0, n = t();
  for (; ; )
    try {
      if (parseInt(x(466)) / 1 + parseInt(x(478)) / 2 * (-parseInt(x(480)) / 3) + -parseInt(x(482)) / 4 + parseInt(x(481)) / 5 * (-parseInt(x(469)) / 6) + -parseInt(x(463)) / 7 * (parseInt(x(471)) / 8) + parseInt(x(468)) / 9 + -parseInt(x(475)) / 10 * (-parseInt(x(465)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ee, 221997);
const M0 = /* @__PURE__ */ new Map();
function pn(t, e, x = O()) {
  const n = I0;
  !M0[n(477)](x) && (M0[n(483)](x, /* @__PURE__ */ new Map()), Mx(() => M0[n(473)](x), { viewerName: x })), M0.get(x)[n(483)](t, e);
}
function hn(t, e = O()) {
  var n;
  const x = I0;
  return (n = M0[x(470)](e)) == null ? void 0 : n[x(477)](t);
}
function C0(t, e = O()) {
  var n;
  const x = I0;
  return (n = M0[x(470)](e)) == null ? void 0 : n[x(470)](t);
}
const Ri = C0;
function Sr(t, e = O()) {
  const x = I0;
  if (!t) {
    console[x(476)](x(484));
    return;
  }
  const n = new kt(t);
  return pn(t, n, e), n;
}
function zi(t, e = O()) {
  const x = I0;
  if (!hn(t, e)) {
    const n = Sr(t, e);
    B(e)[x(462)].add(n);
  }
  return C0(t, e);
}
function Er(t, e = O()) {
  return C0(t, e);
}
function I0(t, e) {
  return t = t - 461, ee()[t];
}
function Tr(t, e = O()) {
  var s;
  const x = I0, n = Er(t, e);
  if (!n) return;
  B(e)[x(462)][x(467)](n), (s = M0.get(e)) == null || s.delete(t);
}
function Gi(t = O()) {
  const e = I0, x = M0[e(470)](t);
  x && Array.from(x[e(479)]())[e(464)]((n) => {
    const a = e;
    n[a(474)][a(472)]();
  });
}
function Wi(t) {
  M0[I0(473)](t);
}
function ix(t, e = O()) {
  var n;
  const x = I0;
  (n = C0(t, e)) == null || n[x(474)][x(472)]();
}
function ox(t, e = !1, x) {
  let n;
  C0(t) ? n = C0(t) : n = new kt(t);
  const a = _n(t, n);
  return e && a(x), { source: n, mount: a };
}
function Fi(t, e = !1) {
  let x;
  C0(t) ? x = C0(t) : x = new $2(t);
  const n = _n(t, x);
  return e && n(), { source: x, mount: n };
}
function _n(t, e) {
  return function(x = O()) {
    w0((n) => {
      const a = I0;
      hn(t, x) || (n.dataSources[a(461)](e), pn(t, e, x));
    }, { viewerName: x });
  };
}
(function(t, e) {
  const x = o0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(443)) / 1 * (-parseInt(x(444)) / 2) + parseInt(x(441)) / 3 + parseInt(x(403)) / 4 * (parseInt(x(413)) / 5) + parseInt(x(402)) / 6 * (parseInt(x(411)) / 7) + parseInt(x(434)) / 8 + parseInt(x(431)) / 9 + parseInt(x(406)) / 10 * (-parseInt(x(432)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(te, 805413);
function te() {
  const t = ["1172388HpimcK", "EPSG:4326:2", "335261ngLYoF", "4csVuIZ", "EPSG:4326", "18uxRhpN", "4080652KBjUIT", "addImageryProvider", "EPSG:4326:17", "70oeGzlC", "imageryProvider", "get", "EPSG:4326:9", "EPSG:4326:15", "529571fMQltp", "imageLayer", "5XtuRvs", "show", "EPSG:4326:0", "EPSG:4326:11", "EPSG:4326:8", "delete", "EPSG:4326:7", "EPSG:4326:14", "EPSG:4326:12", "clear", "scene", "EPSG:4326:3", "EPSG:4326:18", "has", "EPSG:4326:19", "EPSG:4326:21", "EPSG:4326:10", "EPSG:4326:1", "816849xKoUeT", "3827054DQMcTb", "set", "6732880nrYEea", "EPSG:4326:4", "EPSG:4326:5", "EPSG:4326:20", "removeAll", "/proxy/", "EPSG:4326:16"];
  return te = function() {
    return t;
  }, te();
}
const Tt = /* @__PURE__ */ new Map();
function bn(t, e, x = O()) {
  var a;
  const n = o0;
  !k0(x) && (Tt.set(x, /* @__PURE__ */ new Map()), Mx(() => Tt[n(418)](x), { viewerName: x })), (a = k0(x)) == null || a[n(433)](t, e);
}
function Mr(t = O()) {
  var x;
  const e = o0;
  (x = k0(t)) == null || x[e(422)]();
}
function Bi(t, e = O()) {
  var n;
  const x = o0;
  (n = k0(e)) == null || n[x(418)](t);
}
function k0(t = O()) {
  return Tt[o0(408)](t);
}
function Dr(t, e, x = O()) {
  const n = o0, a = B(x);
  if (Zt(t, x)) return mn(t), !1;
  const s = a[n(423)].imageryLayers[n(404)](e);
  bn(t, { imagery: e, imageLayer: s });
}
function ji(t, e, x = O()) {
  const n = o0, a = B(x);
  if (Zt(t, x)) return !1;
  Pr(x);
  const s = a.scene.imageryLayers[n(404)](e);
  bn(t, { imagery: e, imageLayer: s });
}
function Pr(t) {
  const e = o0;
  B(t)[e(423)].imageryLayers[e(438)](), Mr(t);
}
function Hi(t) {
  const e = o0, x = { proxy: new va(e(439)), parameters: { service: "WMS", version: "1.3.0", transparent: !0, format: "image/png" }, ...t };
  return new wa(x);
}
function kr(t) {
  const e = o0;
  return new Ca({ tileMatrixLabels: [e(415), e(430), e(442), e(424), e(435), e(436), "EPSG:4326:6", e(419), e(417), e(409), e(429), e(416), e(421), "EPSG:4326:13", e(420), e(410), e(440), e(405), e(425), e(427), e(437), e(428)], format: "image/png", tileMatrixSetID: e(445), ...t });
}
function Zt(t, e = O()) {
  var n;
  const x = o0;
  return (n = k0(e)) == null ? void 0 : n[x(426)](t);
}
function Ui(t, e = O()) {
  var x;
  return (x = k0(e)) == null ? void 0 : x.get(t);
}
const Ar = In(!1);
function o0(t, e) {
  return t = t - 402, te()[t];
}
const mn = In(!0);
function Lr(t, e = O()) {
  var a;
  const x = o0, n = (a = k0(e)) == null ? void 0 : a[x(408)](t);
  return n == null ? void 0 : n.imageLayer[x(414)];
}
function In(t) {
  return function(e, x = O()) {
    var s;
    const n = o0, a = (s = k0(x)) == null ? void 0 : s[n(408)](e);
    a != null && a[n(412)] && (a[n(412)][n(414)] = t, a[n(412)][n(407)] && (a.imageLayer[n(407)][n(414)] = t));
  };
}
function Yi(t = O()) {
  return k0(t);
}
(function(t, e) {
  const x = cx, n = t();
  for (; ; )
    try {
      if (parseInt(x(444)) / 1 + -parseInt(x(449)) / 2 * (-parseInt(x(441)) / 3) + parseInt(x(440)) / 4 * (parseInt(x(448)) / 5) + -parseInt(x(447)) / 6 + -parseInt(x(446)) / 7 + parseInt(x(452)) / 8 * (parseInt(x(436)) / 9) + parseInt(x(443)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ne, 975400);
function Nr(t, e) {
  const x = cx;
  n2()[x(445)](() => {
    const n = x, a = B(e);
    a[n(442)] = new Sa(t);
  });
}
function cx(t, e) {
  return t = t - 436, ne()[t];
}
function $i(t) {
  const e = cx, x = B(t);
  x[e(442)] = new Z2();
}
function Zi(t) {
  const e = cx;
  return !(B(t)[e(442)] instanceof Z2);
}
function ne() {
  const t = ["defaultTerrainUrl", "_group", "141804Zdlgcv", "186342rGGqZC", "terrainProvider", "314740fIhIMS", "1396086sESXfp", "then", "2502990TYFiuO", "11196684ozAfOE", "45caQXik", "12ARHVDF", "/vector/geoserver/gwc/service/wmts", "default", "184WBpCWG", "global_chart", "422523buOLSW", "fromDegrees"];
  return ne = function() {
    return t;
  }, ne();
}
function qi(t) {
  Nr({ url: b0[cx(438)] }, t);
}
function Xi() {
  const t = cx, e = t(453);
  if (Zt(e)) {
    if (Lr(e)) {
      Ar(e);
      return;
    }
    mn(e);
  }
  const x = [-179.9999971999999, 179.9999971999999, -61.7333333, 78.3666667], n = vx[t(437)](x[0], x[2], x[1], x[3]), a = kr({ url: t(450), layer: e + t(439), tilingScheme: new Pt(), format: "image/png", rectangle: n, style: t(451) });
  Dr(e, a);
}
const qt = Xt;
(function(t, e) {
  const x = Xt, n = t();
  for (; ; )
    try {
      if (parseInt(x(244)) / 1 * (parseInt(x(236)) / 2) + -parseInt(x(232)) / 3 + parseInt(x(228)) / 4 * (parseInt(x(233)) / 5) + parseInt(x(235)) / 6 + parseInt(x(245)) / 7 + -parseInt(x(229)) / 8 + -parseInt(x(241)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ae, 775598);
function Xt(t, e) {
  return t = t - 228, ae()[t];
}
const Gx = /* @__PURE__ */ new WeakMap(), Ji = Jt(p0[qt(238)]), Qi = Jt(p0[qt(242)]);
function ae() {
  const t = ["5AxbBwu", "scene", "6973044IIMRxW", "188fTfzQl", "then", "SCENE2D", "set", "has", "15456645BMQZkM", "SCENE3D", "viewerName", "9977GopZxa", "2847810umaebZ", "1387624KIqVjd", "1691832dvarmD", "add", "get", "447798aednSA"];
  return ae = function() {
    return t;
  }, ae();
}
const Ki = Jt(p0.COLUMBUS_VIEW);
function Jt(t) {
  return function(e) {
    var a;
    const x = Xt, n = B(e);
    n[x(234)].mode = t, (a = Gx[x(231)](n)) == null || a.forEach((s) => {
      s == null || s(t);
    });
  };
}
function xo(t, e) {
  const x = qt;
  n2()[x(237)](() => {
    var s;
    const n = x, a = B(e == null ? void 0 : e[n(243)]);
    !Gx[n(240)](a) && Gx[n(239)](a, /* @__PURE__ */ new Set()), (s = Gx.get(a)) == null || s[n(230)](t);
  });
}
function re() {
  const t = ["1.0.0", "navigational_charts", "1413868qLbxMv", "delete", "getValue", "2999511wyYPnU", "add", "GetFeature", "12rjeZyw", "2844408qsDFCb", "dataSources", "has", "polygon", "2633289vDoejZ", "forEach", "/vector/geoserver/", "2574166sSizfj", "995060yoXOwI", "58856PZQnZX", "reject", "959RKbYvK", "entities", "values", "resolve", "set", "hierarchy", "RED", "/ows?service=WFS", "RHUMB", "features", "TRANSPARENT", "cql_filter", "removeAll", "catch", "then", "maxFeatures", "load", "remove", "keys", "positions", "application/json"];
  return re = function() {
    return t;
  }, re();
}
(function(t, e) {
  const x = lt, n = t();
  for (; ; )
    try {
      if (parseInt(x(264)) / 1 + -parseInt(x(237)) / 2 + parseInt(x(234)) / 3 + -parseInt(x(270)) / 4 * (-parseInt(x(238)) / 5) + parseInt(x(230)) / 6 + parseInt(x(241)) / 7 * (-parseInt(x(239)) / 8) + -parseInt(x(267)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(re, 734464);
function lt(t, e) {
  return t = t - 230, re()[t];
}
const gx = /* @__PURE__ */ new Map();
function Or(t) {
  const e = lt, { workspace: x, layerName: n, searchField: a, searchValue: s, maxFeatures: r = 50 } = t, i = { version: e(262), request: e(269), outputFormat: e(261), typeName: x + ":" + n };
  r && (i[e(256)] = r), a && (i[e(252)] = encodeURIComponent(a + " like '%" + s + "%'"));
  let o = "";
  Object[e(259)](i)[e(235)]((l) => {
    o += "&" + l + "=" + i[l];
  });
  const c = e(236) + x + e(248) + o;
  return fetch(c)[e(255)]((l) => l.json()).then((l) => Promise[e(244)](l))[e(254)]((l) => Promise[e(240)](l));
}
async function eo(t, e = O()) {
  const x = lt;
  if (gx[x(232)](e)) return;
  const n = await Or({ workspace: "charts", layerName: x(263) });
  n[x(250)] = n[x(250)].reverse();
  const { clampToGround: a = !0, color: s = W[x(247)], width: r = 2 } = t ?? {}, i = await Ea[x(257)](n, { clampToGround: a, fill: W[x(251)], stroke: s, strokeWidth: r });
  return a && i.entities[x(243)].forEach((c) => {
    var u;
    const l = x;
    if (c[l(233)]) {
      const h = (u = c[l(233)][l(246)]) == null ? void 0 : u[l(266)](de()), f = h[l(260)];
      c.polyline = new Ta({ positions: [...f, f[0]], clampToGround: a, material: s, width: r, arcType: Ma[l(249)] });
    }
  }), B(e)[x(231)][x(268)](i), gx[x(245)](e, i), i;
}
function to(t = O()) {
  const e = lt, x = B(t);
  if (gx[e(232)](t)) {
    const n = gx.get(t);
    n == null || n[e(242)][e(253)](), x.dataSources[e(258)](n, !0), gx[e(265)](t);
  }
}
const Vr = gn;
function se() {
  const t = ["363vNUAfw", "96192XiJRfl", "2834088hgmYKC", "791615iNTsPV", "4981795HxJrnN", "4925ZeEQWb", "scene", "1914YRefMU", "560985AGxEIm", "577130YpiQYV", "234TTsXZc", "2GHhvcc"];
  return se = function() {
    return t;
  }, se();
}
(function(t, e) {
  const x = gn, n = t();
  for (; ; )
    try {
      if (parseInt(x(457)) / 1 * (parseInt(x(453)) / 2) + -parseInt(x(462)) / 3 + -parseInt(x(456)) / 4 + parseInt(x(459)) / 5 * (-parseInt(x(461)) / 6) + -parseInt(x(458)) / 7 + parseInt(x(455)) / 8 * (-parseInt(x(452)) / 9) + parseInt(x(451)) / 10 * (parseInt(x(454)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(se, 462103);
const dt = Tx(Vr(460));
function gn(t, e) {
  return t = t - 451, se()[t];
}
const yn = Qt;
function Qt(t, e) {
  return t = t - 350, ie()[t];
}
(function(t, e) {
  const x = Qt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(366)) / 1 * (-parseInt(x(369)) / 2) + -parseInt(x(364)) / 3 + -parseInt(x(354)) / 4 + parseInt(x(352)) / 5 + parseInt(x(370)) / 6 + parseInt(x(357)) / 7 * (parseInt(x(367)) / 8) + -parseInt(x(368)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ie, 866785);
const no = dn(yn(371)), ao = dn(yn(359));
let nx;
function ro(t) {
  const e = B();
  nx = fn(Rr(e, t));
}
function so() {
  nx && (nx == null || nx(), nx = void 0);
}
function ie() {
  const t = ["3660535ZcNkGL", "Transforms", "4022440miJxRj", "PI_OVER_TWO", "orientation", "1211SGgpym", "Matrix4", "trackedEntity", "heading", "Math", "fromRotationTranslation", "getValue", "1752375DMSXNT", "position", "1yTxfkJ", "63352dRINNd", "1343682hxPcoR", "297532cRonnd", "2129748NcroEu", "selectedEntity", "Matrix3", "camera"];
  return ie = function() {
    return t;
  }, ie();
}
function Rr(t, e) {
  return function(x, n) {
    var l, u;
    const a = Qt;
    if (!(e != null && e[a(356)]) || !e[a(365)]) return;
    const s = (l = e[a(356)]) == null ? void 0 : l[a(363)](n), r = (u = e[a(365)]) == null ? void 0 : u.getValue(n), i = Ox[a(350)].fromQuaternion(s), o = Ox[a(358)][a(362)](i, r), c = Ox[a(353)].fixedFrameToHeadingPitchRoll(o);
    c[a(360)] += Ox[a(361)][a(355)], e.show = !1, t[a(351)].setView({ destination: r, orientation: c });
  };
}
function oe() {
  const t = ["48oZTFrT", "12817BMtBXY", "translateEventTypes", "460242csIapK", "tiltEventTypes", "RIGHT_DRAG", "7291476RIfdia", "16eAyZcb", "3990rBXOOs", "486675yMbjey", "screenSpaceCameraController", "283603lFFLqm", "PINCH", "rotateEventTypes", "1365608FDhefU"];
  return oe = function() {
    return t;
  }, oe();
}
(function(t, e) {
  const x = vn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(249)) / 1 + parseInt(x(238)) / 2 * (-parseInt(x(246)) / 3) + -parseInt(x(237)) / 4 + parseInt(x(247)) / 5 + -parseInt(x(241)) / 6 + parseInt(x(239)) / 7 * (parseInt(x(245)) / 8) + parseInt(x(244)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(oe, 177529);
function vn(t, e) {
  return t = t - 236, oe()[t];
}
function zr(t) {
  const e = vn, x = t.scene[e(248)];
  x[e(236)] = [K0[e(243)], K0.LEFT_DRAG], x.zoomEventTypes = [K0.WHEEL, K0[e(250)]], x[e(240)] = K0[e(243)], x[e(242)] = [], x.tiltEventTypes = [{ eventType: K0[e(243)] }];
}
const wn = pt;
(function(t, e) {
  const x = pt, n = t();
  for (; ; )
    try {
      if (parseInt(x(253)) / 1 + parseInt(x(262)) / 2 * (-parseInt(x(257)) / 3) + -parseInt(x(248)) / 4 * (parseInt(x(260)) / 5) + -parseInt(x(259)) / 6 + -parseInt(x(252)) / 7 + -parseInt(x(250)) / 8 + -parseInt(x(255)) / 9 * (-parseInt(x(249)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ce, 445785);
function io(t, e) {
  const x = pt, { west: n, south: a, east: s, north: r } = t;
  n2()[x(261)](() => {
    var o;
    const i = x;
    (o = Z0(e)) == null || o[i(258)]({ destination: vx[i(256)](n, a, s, r) });
  });
}
function oo(t, e) {
  const x = pt;
  Z0(e)[x(258)](t);
}
const Z0 = Tx(wn(251));
function Cn(t) {
  return function(e) {
    return Z0(e)[t];
  };
}
function pt(t, e) {
  return t = t - 248, ce()[t];
}
function ce() {
  const t = ["190RbZLoC", "then", "12982NYUXkx", "1628KVlsUY", "246020hsiflT", "5414272WCqSkC", "camera", "1044988QERCng", "254960OeVQYK", "DEFAULT_VIEW_RECTANGLE", "486oZLRIJ", "fromDegrees", "3kjEiwQ", "flyTo", "1737948HJhmIZ"];
  return ce = function() {
    return t;
  }, ce();
}
function Gr(t) {
  const e = wn, { west: x, south: n, east: a, north: s } = t;
  Da[e(254)] = vx[e(256)](x, n, a, s);
}
const ht = ue;
(function(t, e) {
  const x = ue, n = t();
  for (; ; )
    try {
      if (parseInt(x(195)) / 1 + -parseInt(x(191)) / 2 * (parseInt(x(181)) / 3) + -parseInt(x(199)) / 4 * (-parseInt(x(175)) / 5) + -parseInt(x(198)) / 6 * (parseInt(x(183)) / 7) + parseInt(x(178)) / 8 * (parseInt(x(186)) / 9) + -parseInt(x(180)) / 10 * (-parseInt(x(176)) / 11) + parseInt(x(179)) / 12 * (-parseInt(x(187)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fe, 930936);
function fe() {
  const t = ["3467098ZmDGPl", "maximumRadius", "fromDegrees", "position", "161547jHMlVq", "WGS84", "changed", "87486cyNWMm", "5473340EQHdul", "addEventListener", "5yxllgn", "19583531dvanSI", "zoomIn", "104qolVgu", "3854316bMcsqR", "10mANqVb", "3ZDBFvN", "toDegrees", "210pOHLWT", "positionCartographic", "SCENE2D", "78165akTjrF", "13bzeLtF", "longitude", "removeEventListener", "mode"];
  return fe = function() {
    return t;
  }, fe();
}
function ue(t, e) {
  return t = t - 174, fe()[t];
}
function co(t, e = O()) {
  return w0(() => {
    const x = ue;
    Z0(e)[x(197)][x(174)](t);
  }), () => {
    const x = ue;
    Z0(e)[x(197)][x(189)](t);
  };
}
const Sn = Cn(ht(184)), fo = vs(Sn, "height");
function uo(t, e) {
  const x = ht;
  dt(e)[x(190)] === p0[x(185)] && Z0(e)[x(177)](t);
}
const lo = Cn(ht(194));
function En(t, e) {
  const x = ht, n = Wx[x(196)][x(192)] * 10 / t, a = Sn(e), s = y0[x(182)](a[x(188)]), r = y0[x(182)](a.latitude);
  Z0(e).setView({ destination: y[x(193)](s, r, n) });
}
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Tn = { exports: {} };
(function(t, e) {
  (function(x, n) {
    t.exports = n();
  })(Wr, function() {
    var x = 1e3, n = 6e4, a = 36e5, s = "millisecond", r = "second", i = "minute", o = "hour", c = "day", l = "week", u = "month", h = "quarter", f = "year", d = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var b = ["th", "st", "nd", "rd"], _ = C % 100;
      return "[" + C + (b[(_ - 20) % 10] || b[_] || b[0]) + "]";
    } }, k = function(C, b, _) {
      var S = String(C);
      return !S || S.length >= b ? C : "" + Array(b + 1 - S.length).join(_) + C;
    }, G = { s: k, z: function(C) {
      var b = -C.utcOffset(), _ = Math.abs(b), S = Math.floor(_ / 60), I = _ % 60;
      return (b <= 0 ? "+" : "-") + k(S, 2, "0") + ":" + k(I, 2, "0");
    }, m: function C(b, _) {
      if (b.date() < _.date()) return -C(_, b);
      var S = 12 * (_.year() - b.year()) + (_.month() - b.month()), I = b.clone().add(S, u), M = _ - I < 0, D = b.clone().add(S + (M ? -1 : 1), u);
      return +(-(S + (_ - I) / (M ? I - D : D - I)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: u, y: f, w: l, d: c, D: d, h: o, m: i, s: r, ms: s, Q: h }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, V = "en", A = {};
    A[V] = T;
    var F = "$isDayjsObject", R = function(C) {
      return C instanceof j || !(!C || !C[F]);
    }, L = function C(b, _, S) {
      var I;
      if (!b) return V;
      if (typeof b == "string") {
        var M = b.toLowerCase();
        A[M] && (I = M), _ && (A[M] = _, I = M);
        var D = b.split("-");
        if (!I && D.length > 1) return C(D[0]);
      } else {
        var U = b.name;
        A[U] = b, I = U;
      }
      return !S && I && (V = I), I || !S && V;
    }, E = function(C, b) {
      if (R(C)) return C.clone();
      var _ = typeof b == "object" ? b : {};
      return _.date = C, _.args = arguments, new j(_);
    }, w = G;
    w.l = L, w.i = R, w.w = function(C, b) {
      return E(C, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var j = function() {
      function C(_) {
        this.$L = L(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[F] = !0;
      }
      var b = C.prototype;
      return b.parse = function(_) {
        this.$d = function(S) {
          var I = S.date, M = S.utc;
          if (I === null) return /* @__PURE__ */ new Date(NaN);
          if (w.u(I)) return /* @__PURE__ */ new Date();
          if (I instanceof Date) return new Date(I);
          if (typeof I == "string" && !/Z$/i.test(I)) {
            var D = I.match(m);
            if (D) {
              var U = D[2] - 1 || 0, J = (D[7] || "0").substring(0, 3);
              return M ? new Date(Date.UTC(D[1], U, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, J)) : new Date(D[1], U, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, J);
            }
          }
          return new Date(I);
        }(_), this.init();
      }, b.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, b.$utils = function() {
        return w;
      }, b.isValid = function() {
        return this.$d.toString() !== p;
      }, b.isSame = function(_, S) {
        var I = E(_);
        return this.startOf(S) <= I && I <= this.endOf(S);
      }, b.isAfter = function(_, S) {
        return E(_) < this.startOf(S);
      }, b.isBefore = function(_, S) {
        return this.endOf(S) < E(_);
      }, b.$g = function(_, S, I) {
        return w.u(_) ? this[S] : this.set(I, _);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(_, S) {
        var I = this, M = !!w.u(S) || S, D = w.p(_), U = function(F0, s0) {
          var O0 = w.w(I.$u ? Date.UTC(I.$y, s0, F0) : new Date(I.$y, s0, F0), I);
          return M ? O0 : O0.endOf(c);
        }, J = function(F0, s0) {
          return w.w(I.toDate()[F0].apply(I.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(s0)), I);
        }, x0 = this.$W, n0 = this.$M, c0 = this.$D, Q0 = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case f:
            return M ? U(1, 0) : U(31, 11);
          case u:
            return M ? U(1, n0) : U(0, n0 + 1);
          case l:
            var W0 = this.$locale().weekStart || 0, ux = (x0 < W0 ? x0 + 7 : x0) - W0;
            return U(M ? c0 - ux : c0 + (6 - ux), n0);
          case c:
          case d:
            return J(Q0 + "Hours", 0);
          case o:
            return J(Q0 + "Minutes", 1);
          case i:
            return J(Q0 + "Seconds", 2);
          case r:
            return J(Q0 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(_) {
        return this.startOf(_, !1);
      }, b.$set = function(_, S) {
        var I, M = w.p(_), D = "set" + (this.$u ? "UTC" : ""), U = (I = {}, I[c] = D + "Date", I[d] = D + "Date", I[u] = D + "Month", I[f] = D + "FullYear", I[o] = D + "Hours", I[i] = D + "Minutes", I[r] = D + "Seconds", I[s] = D + "Milliseconds", I)[M], J = M === c ? this.$D + (S - this.$W) : S;
        if (M === u || M === f) {
          var x0 = this.clone().set(d, 1);
          x0.$d[U](J), x0.init(), this.$d = x0.set(d, Math.min(this.$D, x0.daysInMonth())).$d;
        } else U && this.$d[U](J);
        return this.init(), this;
      }, b.set = function(_, S) {
        return this.clone().$set(_, S);
      }, b.get = function(_) {
        return this[w.p(_)]();
      }, b.add = function(_, S) {
        var I, M = this;
        _ = Number(_);
        var D = w.p(S), U = function(n0) {
          var c0 = E(M);
          return w.w(c0.date(c0.date() + Math.round(n0 * _)), M);
        };
        if (D === u) return this.set(u, this.$M + _);
        if (D === f) return this.set(f, this.$y + _);
        if (D === c) return U(1);
        if (D === l) return U(7);
        var J = (I = {}, I[i] = n, I[o] = a, I[r] = x, I)[D] || 1, x0 = this.$d.getTime() + _ * J;
        return w.w(x0, this);
      }, b.subtract = function(_, S) {
        return this.add(-1 * _, S);
      }, b.format = function(_) {
        var S = this, I = this.$locale();
        if (!this.isValid()) return I.invalidDate || p;
        var M = _ || "YYYY-MM-DDTHH:mm:ssZ", D = w.z(this), U = this.$H, J = this.$m, x0 = this.$M, n0 = I.weekdays, c0 = I.months, Q0 = I.meridiem, W0 = function(s0, O0, lx, Nx) {
          return s0 && (s0[O0] || s0(S, M)) || lx[O0].slice(0, Nx);
        }, ux = function(s0) {
          return w.s(U % 12 || 12, s0, "0");
        }, F0 = Q0 || function(s0, O0, lx) {
          var Nx = s0 < 12 ? "AM" : "PM";
          return lx ? Nx.toLowerCase() : Nx;
        };
        return M.replace(v, function(s0, O0) {
          return O0 || function(lx) {
            switch (lx) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return w.s(S.$y, 4, "0");
              case "M":
                return x0 + 1;
              case "MM":
                return w.s(x0 + 1, 2, "0");
              case "MMM":
                return W0(I.monthsShort, x0, c0, 3);
              case "MMMM":
                return W0(c0, x0);
              case "D":
                return S.$D;
              case "DD":
                return w.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return W0(I.weekdaysMin, S.$W, n0, 2);
              case "ddd":
                return W0(I.weekdaysShort, S.$W, n0, 3);
              case "dddd":
                return n0[S.$W];
              case "H":
                return String(U);
              case "HH":
                return w.s(U, 2, "0");
              case "h":
                return ux(1);
              case "hh":
                return ux(2);
              case "a":
                return F0(U, J, !0);
              case "A":
                return F0(U, J, !1);
              case "m":
                return String(J);
              case "mm":
                return w.s(J, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return w.s(S.$s, 2, "0");
              case "SSS":
                return w.s(S.$ms, 3, "0");
              case "Z":
                return D;
            }
            return null;
          }(s0) || D.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(_, S, I) {
        var M, D = this, U = w.p(S), J = E(_), x0 = (J.utcOffset() - this.utcOffset()) * n, n0 = this - J, c0 = function() {
          return w.m(D, J);
        };
        switch (U) {
          case f:
            M = c0() / 12;
            break;
          case u:
            M = c0();
            break;
          case h:
            M = c0() / 3;
            break;
          case l:
            M = (n0 - x0) / 6048e5;
            break;
          case c:
            M = (n0 - x0) / 864e5;
            break;
          case o:
            M = n0 / a;
            break;
          case i:
            M = n0 / n;
            break;
          case r:
            M = n0 / x;
            break;
          default:
            M = n0;
        }
        return I ? M : w.a(M);
      }, b.daysInMonth = function() {
        return this.endOf(u).$D;
      }, b.$locale = function() {
        return A[this.$L];
      }, b.locale = function(_, S) {
        if (!_) return this.$L;
        var I = this.clone(), M = L(_, S, !0);
        return M && (I.$L = M), I;
      }, b.clone = function() {
        return w.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), K = j.prototype;
    return E.prototype = K, [["$ms", s], ["$s", r], ["$m", i], ["$H", o], ["$W", c], ["$M", u], ["$y", f], ["$D", d]].forEach(function(C) {
      K[C[1]] = function(b) {
        return this.$g(b, C[0], C[1]);
      };
    }), E.extend = function(C, b) {
      return C.$i || (C(b, j, E), C.$i = !0), E;
    }, E.locale = L, E.isDayjs = R, E.unix = function(C) {
      return E(1e3 * C);
    }, E.en = A[V], E.Ls = A, E.p = {}, E;
  });
})(Tn);
var Br = Tn.exports;
const Mn = /* @__PURE__ */ Fr(Br);
(function(t, e) {
  const x = Dx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(251)) / 1 * (parseInt(x(234)) / 2) + parseInt(x(233)) / 3 + parseInt(x(242)) / 4 * (parseInt(x(258)) / 5) + parseInt(x(245)) / 6 * (parseInt(x(254)) / 7) + parseInt(x(250)) / 8 + parseInt(x(247)) / 9 * (-parseInt(x(259)) / 10) + -parseInt(x(235)) / 11 * (parseInt(x(239)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(le, 707862);
const { synchronizeConfig: px } = b0;
var jr = ((t) => {
  const e = Dx;
  return t[e(236)] = "firstStep", t[e(246)] = e(246), t[e(256)] = "thirdStep", t;
})(jr || {});
function le() {
  const t = ["shift", "401040MWpHko", "get", "interval", "9114vjMxDw", "secondStep", "9tSoDYs", "forEach", "abs", "1726952Xdyzbp", "95SRgUDc", "logicTime", "minSpeed", "5355aEbNPu", "maxTime", "thirdStep", "splice", "65VLaIFR", "10608460dPtaWG", "cacheSize", "length", "then", "set", "actualSpeed", "1406478ZPmJVo", "25538JuDjSM", "11nWSZmI", "firstStep", "delete", "has", "2020164UESrXa", "valueOf"];
  return le = function() {
    return t;
  }, le();
}
const yx = /* @__PURE__ */ new Map();
function Dx(t, e) {
  return t = t - 233, le()[t];
}
function po(t, e = O()) {
  const x = Dx;
  nextTick()[x(262)](() => {
    var a;
    const n = x;
    !yx[n(238)](e) && yx[n(263)](e, /* @__PURE__ */ new Set()), (a = yx[n(243)](e)) == null || a.add(t);
  });
}
function Hr(t = O()) {
  var x;
  const e = Dx;
  (x = yx.get(t)) == null || x[e(248)]((n) => n == null ? void 0 : n()), yx[e(237)](t);
}
function ho(t = O()) {
  const e = Dx;
  let x = e(236);
  const n = [], a = px[e(253)], s = px[e(255)];
  let r;
  const i = (f) => f[e(264)], o = () => {
    const f = e;
    if (n.length === 0) return a;
    let d = 1, p;
    if (n[f(261)] === 1) {
      p = n.slice()[0];
      const T = i(p);
      return fs(T) ? d : T / 2;
    }
    p = n.shift(), d = i(p);
    const m = Ur()[f(240)]() - Mn(p[f(252)])[f(240)](), v = Math[f(249)](m / 1e3);
    return m > s * 1e3 ? (v2(p[f(252)], t), d = a, d) : m < -s * 1e3 ? (d += v, d) : (d <= 0 && (d = a), d);
  }, c = (f) => {
    n.push(f);
  }, l = () => {
    const f = e;
    r = window.setInterval(() => {
      w2(o(), t);
    }, px[f(244)]);
  }, u = { firstStep: (f) => {
    const d = e;
    Zr(f[d(252)], t), v2(f[d(252)], t), Qr(t), c(f), Hr(t), x = d(246);
  }, secondStep: (f) => {
    const d = e;
    if (c(f), n[d(261)] > px[d(260)]) {
      const p = n[d(257)](0, 1)[0];
      w2(i(p), t), xs(!0), clearInterval(r), l(), x = "thirdStep";
    }
  }, [e(256)]: (f) => {
    const d = e;
    c(f), !es() && n[d(261)] > px[d(260)] && n[d(241)]();
  } };
  return Mx(() => {
    clearInterval(r);
  }, { viewerName: t }), { run: (f) => {
    u[x](f);
  } };
}
const X0 = Px;
(function(t, e) {
  const x = Px, n = t();
  for (; ; )
    try {
      if (parseInt(x(374)) / 1 * (-parseInt(x(375)) / 2) + -parseInt(x(373)) / 3 + -parseInt(x(368)) / 4 + parseInt(x(363)) / 5 + parseInt(x(370)) / 6 + -parseInt(x(359)) / 7 * (parseInt(x(371)) / 8) + parseInt(x(377)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pe, 195741);
const de = Ax(X0(360)), Ur = Kt("currentTime"), Yr = x2("currentTime"), v2 = Yr, _o = Ax(X0(364)), bo = Kt(X0(364)), $r = x2(X0(364)), Zr = $r, mo = Ax(X0(366)), Io = Kt(X0(366)), qr = x2("stopTime"), Xr = qr;
function Jr() {
  return X0(378);
}
function Px(t, e) {
  return t = t - 358, pe()[t];
}
function pe() {
  const t = ["number", "5425ULUuTH", "currentTime", "knockout", "fromDate", "1273925traiSW", "startTime", "clockViewModel", "stopTime", "string", "1363712gNGPrn", "toDate", "1023540MZKsxx", "888PCyVmV", "getObservable", "398814MaSJyc", "74QURKpg", "7574KWXGnR", "subscribe", "5494455pzBolk", "9999/12/31 23:59:59"];
  return pe = function() {
    return t;
  }, pe();
}
function Qr(t) {
  Xr(Jr(), t);
}
function Kt(t) {
  return function(e) {
    return Mn(r0[Px(369)](kx(e)[t]));
  };
}
function x2(t) {
  return function(e, x) {
    const n = Px;
    let a;
    typeof e === n(367) || typeof e === n(358) ? a = r0[n(362)](new Date(e)) : e instanceof Date ? a = r0[n(362)](e) : a = e, kx(x)[t] = a;
  };
}
function go(t, e = O()) {
  w0((x) => {
    const n = Px;
    Cesium[n(361)][n(372)](x[n(365)], "currentTime")[n(376)]((a) => {
      const s = n, r = r0[s(369)](a).getTime();
      t == null || t(r, a);
    });
  }, { viewerName: e });
}
const e2 = Dn;
(function(t, e) {
  const x = Dn, n = t();
  for (; ; )
    try {
      if (parseInt(x(421)) / 1 * (-parseInt(x(427)) / 2) + parseInt(x(425)) / 3 + parseInt(x(423)) / 4 * (parseInt(x(426)) / 5) + -parseInt(x(418)) / 6 + parseInt(x(424)) / 7 * (parseInt(x(419)) / 8) + parseInt(x(428)) / 9 * (-parseInt(x(417)) / 10) + -parseInt(x(416)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(he, 946423);
function he() {
  const t = ["2226720lqbJRA", "8kvveoi", "shouldAnimate", "1621CwUfHl", "multiplier", "8EHocTB", "2866885veltGp", "1808757DSCmVm", "4430275NJamEZ", "1052pYROgI", "367623uGaZQQ", "6309028HfkjKL", "10aWrTqo"];
  return he = function() {
    return t;
  }, he();
}
const kx = Tx("clock"), w2 = Pn(e2(422)), Kr = Ax("multiplier");
function Dn(t, e) {
  return t = t - 416, he()[t];
}
const yo = Kr, xs = Pn(e2(420)), es = Ax(e2(420));
function Ax(t) {
  return function(e) {
    return kx(e)[t];
  };
}
function Pn(t, e) {
  return function(x, n) {
    kx(n)[t] = x ?? e;
  };
}
(function(t, e) {
  const x = Lx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(468)) / 1 + -parseInt(x(465)) / 2 * (-parseInt(x(473)) / 3) + -parseInt(x(472)) / 4 * (parseInt(x(464)) / 5) + -parseInt(x(480)) / 6 * (-parseInt(x(467)) / 7) + -parseInt(x(475)) / 8 * (-parseInt(x(476)) / 9) + -parseInt(x(474)) / 10 * (parseInt(x(479)) / 11) + -parseInt(x(466)) / 12 * (-parseInt(x(462)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_e, 921883);
function _e() {
  const t = ["9072fhIteU", "140UOxXuI", "412269UdmHIa", "error", "metaData", "entities", "4357924GJKkXa", "66jtnSqo", "190AKlQID", "40WVHWFI", "2214558vYhBlw", "getById", "add", "990385BGOWxD", "249666THpjQJ", "31291TKlXMu", "getValue", "5nYccrJ", "22916wxmnJt"];
  return _e = function() {
    return t;
  }, _e();
}
function vo(t, e) {
  return Mt(e) ? w0((x) => x.entities.add(t), { viewerName: O(e) }) : w0(() => e[Lx(478)](t));
}
function Lx(t, e) {
  return t = t - 462, _e()[t];
}
function ts(t) {
  return t instanceof kt;
}
function ns(t) {
  return t instanceof $2;
}
function wo(t, e) {
  const x = Lx;
  if (!e) return console[x(469)]("sourceName is Required"), void 0;
  if (ts(e) || ns(e)) return e[x(471)][x(477)](t);
  const n = C0(e);
  if (n) return n[x(471)][x(477)](t);
}
function as(t, e) {
  var n;
  const x = Lx;
  return (n = t.properties) == null ? void 0 : n[x(463)](de(e));
}
function rs(t, e, x) {
  var n;
  return (n = as(t, x)) == null ? void 0 : n[e];
}
function Co(t, e) {
  return rs(t, Lx(470), e);
}
function kn(t) {
  return t.position;
}
function ss(t) {
  return kn(t);
}
function So(t) {
  return kn(t);
}
function Eo(t, e) {
  t.position = e;
}
(function(t, e) {
  for (var x = An, n = t(); ; )
    try {
      var a = -parseInt(x(243)) / 1 + -parseInt(x(242)) / 2 + -parseInt(x(240)) / 3 + parseInt(x(244)) / 4 * (-parseInt(x(245)) / 5) + parseInt(x(239)) / 6 * (-parseInt(x(246)) / 7) + -parseInt(x(247)) / 8 * (parseInt(x(237)) / 9) + parseInt(x(241)) / 10;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(be, 107312);
function be() {
  var t = ["log", "70206JhGCTa", "241143cQmyHQ", "8352250Qfkxlj", "118354qaINsu", "157214TjuHAp", "9816OrLZDc", "245VZkrpg", "84oVkHYs", "8FUgRTH", "1534347oqFLia"];
  return be = function() {
    return t;
  }, be();
}
function An(t, e) {
  t = t - 237;
  var x = be(), n = x[t];
  return n;
}
function To() {
  var t = An;
  console[t(238)](z0, sx);
}
(function(t, e) {
  const x = A0, n = t();
  for (; ; )
    try {
      if (parseInt(x(399)) / 1 * (parseInt(x(390)) / 2) + -parseInt(x(395)) / 3 + -parseInt(x(368)) / 4 * (-parseInt(x(396)) / 5) + -parseInt(x(366)) / 6 * (parseInt(x(394)) / 7) + -parseInt(x(397)) / 8 * (-parseInt(x(365)) / 9) + -parseInt(x(385)) / 10 + parseInt(x(374)) / 11 * (parseInt(x(373)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(me, 652473);
var is = ((t) => {
  const e = A0;
  return t[t.circle = 0] = e(378), t[t.rectangle = 1] = e(393), t[t[e(364)] = 2] = e(364), t[t.ellipsis = 3] = e(379), t[t[e(403)] = 4] = e(403), t[t[e(380)] = 5] = e(380), t;
})(is || {});
function Mo() {
  const t = "web-drawPointAreaSourceName";
  let e;
  const x = (r) => {
    const i = A0, { source: o } = ox(t, !0);
    m0(i(383)), e = q0(({ position: c }) => {
      const l = i, u = $0(c.position);
      if (!u) return;
      const h = a2(c.position);
      o[l(398)][l(381)]({ position: h, point: { pixelSize: 5, color: W[l(386)] } }), r == null || r({ type: 4, degrees: [u], cartesian: [h] }), e == null || e(), m0("");
    });
  }, n = () => {
    m0(""), e == null || e();
  }, a = () => {
    ix(t);
  };
  return { start: x, stop: n, clear: a, stopAndClear: () => {
    n(), a();
  } };
}
function Do() {
  const t = A0, e = t(371);
  let x, n, a;
  const s = (c) => {
    const l = t;
    m0(l(383));
    const { source: u } = ox(e, !0), h = [];
    x = q0(({ position: f }) => {
      var T;
      const d = l, p = Rn(f[d(372)]);
      if (!p) return;
      h[d(367)](p);
      const m = y[d(376)](p.longitude, p[d(402)], p[d(391)]);
      c({ timing: d(392), type: 5, degrees: [p], cartesian: [m] });
      const v = { position: m, point: { pixelSize: 5, color: W[d(370)] } };
      if (a) {
        const k = (T = a[d(380)]) == null ? void 0 : T[d(384)], G = h[d(387)]((V) => y.fromDegrees(V[d(382)], V[d(402)], V[d(391)]));
        k[d(369)](G), u.entities[d(381)](v);
        return;
      }
      a = u[d(398)][d(381)]({ ...v, polyline: { positions: new wx([m]), clampToGround: !0, material: W[d(370)] } });
    }), n = Ht(() => {
      const f = l;
      c({ timing: f(375), type: 5, degrees: [...h], cartesian: h[f(387)]((d) => y[f(376)](d[f(382)], d[f(402)], d[f(391)])) });
    });
  };
  Nt(() => {
    n == null || n();
  });
  const r = () => {
    a = null, m0(""), x == null || x(), n == null || n();
  }, i = () => {
    ix(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function A0(t, e) {
  return t = t - 363, me()[t];
}
function Po(t) {
  const e = A0, x = e(388), n = (c, l) => {
    const u = e, { longitude: h, latitude: f } = c, { longitude: d, latitude: p } = l, m = y[u(376)](d, f, 0), v = y[u(376)](h, p, 0);
    return { p3: m, p4: v };
  };
  let a;
  const s = (c) => {
    const { source: l } = ox(x, !0);
    m0("crosshair");
    let u = [];
    a = q0(({ position: h }) => {
      const f = A0, d = $0(h[f(372)]);
      if (!d) return;
      const { longitude: p, latitude: m, height: v } = d, T = y[f(376)](p, m, v);
      c == null || c({ timing: f(392), type: 1, degrees: [{ longitude: p, latitude: m, height: v }], cartesian: [T] });
      const k = new wx(new Fx([T])), G = new q2(T);
      l[f(398)][f(381)]({ position: G, polygon: { hierarchy: k, fill: !1, outline: !0, outlineWidth: 5, outlineColor: W[f(386)] } });
      const V = Ut(({ position: F }) => {
        const R = f, L = $0(F[R(377)]);
        if (!L) return;
        const { p3: E, p4: w } = n(d, L), j = y[R(376)](L[R(382)], L[R(402)], L[R(391)]);
        u = [T, E, j, w];
        const K = new Fx(u);
        G[R(369)](y[R(389)](T, j, new y())), k.setValue(K);
      }, { viewerName: t }), A = jt(() => {
        const F = f;
        c == null || c({ timing: "stop", type: 1, degrees: u[F(387)]((R) => Vn(R)), cartesian: [...u] }), u.length = 0, V(), A();
      }, { viewerName: t });
    }, { viewerName: t });
  }, r = () => {
    m0(""), a == null || a();
  }, i = () => {
    ix(x);
  };
  return { start: s, stop: r, clear: i, stopAndClear: () => {
    r(), i();
  } };
}
function me() {
  const t = ["1994985wzIjaf", "258iHnWhF", "push", "620DiNatH", "setValue", "RED", "web-drawPolylineAreaSourceName", "position", "21131364xsepCH", "11kNhOxA", "stop", "fromDegrees", "endPosition", "circle", "ellipsis", "polyline", "add", "longitude", "crosshair", "positions", "11719450vczSSt", "DODGERBLUE", "map", "web-drawAreaSourceName", "midpoint", "2310582mRibvu", "height", "start", "rectangle", "160279jiZvNn", "1475457OVCwlY", "5255ilELWs", "8arjDXn", "entities", "1zgsCyA", "hierarchy", "web-drawEllipsisAreaSourceName", "latitude", "point", "getValue", "polygon"];
  return me = function() {
    return t;
  }, me();
}
function ko() {
  const t = "web-drawPolygonAreaSourceName";
  let e, x, n;
  const a = (o) => {
    const c = A0;
    m0(c(383));
    const { source: l } = ox(t, !0), u = [];
    e = q0(({ position: h }) => {
      var v;
      const f = c, d = Rn(h[f(372)]);
      if (!d) return;
      u.push(d);
      const p = y[f(376)](d[f(382)], d[f(402)], d.height);
      o({ timing: f(392), type: 2, degrees: [d], cartesian: [p] });
      const m = { position: p, point: { pixelSize: 5, color: W[f(370)] } };
      if (n) {
        const T = (v = n[f(364)]) == null ? void 0 : v[f(400)], k = u[f(387)]((G) => y[f(376)](G[f(382)], G[f(402)], G[f(391)]));
        T[f(369)](new Fx(k)), l[f(398)][f(381)](m);
        return;
      }
      n = l[f(398)][f(381)]({ ...m, polygon: { hierarchy: new wx(new Fx([p])), fill: !1, outline: !0, outlineWidth: 5, outlineColor: W[f(370)] } });
    }), x = Ht(() => {
      const h = c;
      o({ timing: h(375), type: 2, degrees: [...u], cartesian: u.map((f) => y[h(376)](f[h(382)], f[h(402)], f.height)) }), u.length = 0, n = null;
    });
  };
  Nt(() => {
    x == null || x();
  });
  const s = () => {
    n = null, m0(""), e == null || e(), x == null || x();
  }, r = () => {
    ix(t);
  };
  return { start: a, clear: r, stop: s, stopAndClear: () => {
    s(), r();
  } };
}
function Ao() {
  const t = A0, e = t(401);
  let x;
  const n = ({ startPos: u, centerPos: h }) => {
    const f = t, d = mt(u, [h[f(382)], h[f(402)]]);
    return { majorAxisValue: d, minorAxisValue: d };
  }, a = ({ startPos: u, centerPos: h }) => {
    const f = t, d = mt(u, [h[f(382)], u[f(402)]]), p = mt(u, [u[f(382)], h.latitude]);
    return { majorAxisValue: d, minorAxisValue: p };
  }, s = (u, { isCircle: h = !1, source: f }) => {
    x = q0(({ position: d }) => {
      const p = A0, m = $0(d[p(372)]);
      if (!m) return;
      const { longitude: v, latitude: T, height: k } = m, G = y.fromDegrees(v, T, k);
      u({ timing: p(392), type: 0, degrees: [{ longitude: v, latitude: T, height: k }], cartesian: [G] });
      const V = new q2(G), A = new wx(0), F = new wx(0);
      f[p(398)][p(381)]({ position: V, ellipse: { semiMajorAxis: A, semiMinorAxis: F, fill: !1, outline: !0, outlineWidth: 10, outlineColor: W[p(386)] } });
      const R = Ut(({ position: E }) => {
        const w = p, j = $0(E[w(377)]);
        if (!j) return;
        const K = D2([m[w(382)], m[w(402)]], [j[w(382)], j[w(402)]]), [C, b] = Dt(K);
        V[w(369)](y[w(376)](C, b));
        const _ = { startPos: m, centerPos: { longitude: C, latitude: b, height: 0 } };
        if (h) {
          const { majorAxisValue: M, minorAxisValue: D } = n(_);
          A.setValue(M * 1e3), F.setValue(D * 1e3);
          return;
        }
        const { majorAxisValue: S, minorAxisValue: I } = a(_);
        A[w(369)](S * 1e3), F[w(369)](I * 1e3);
      }), L = jt(({ position: E }) => {
        const w = p;
        R(), L();
        const j = $0(E[w(372)]);
        if (!j) return;
        const K = D2([m[w(382)], m[w(402)]], [j[w(382)], j[w(402)]]), [C, b] = Dt(K), _ = [y.fromDegrees(C, b, 0), y[w(376)](j[w(382)], j.latitude, j.height)];
        u({ timing: w(375), type: 0, cartesian: _, degrees: [{ longitude: C, latitude: b, height: 0 }, j], majorAxis: A[w(363)](de()), minorAxis: F[w(363)](de()) });
      });
    });
  }, r = (u, h) => {
    s(u, { isCircle: !0, source: h });
  }, i = (u) => {
    m0(t(383));
    const { source: f } = ox(e, !0);
    r(u, f);
  }, o = () => {
    m0(""), x == null || x();
  }, c = () => {
    ix(e);
  };
  return { start: i, stop: o, clear: c, stopAndClear: () => {
    o(), c();
  } };
}
const os = t2;
(function(t, e) {
  const x = t2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(140)) / 1 + -parseInt(x(148)) / 2 + parseInt(x(146)) / 3 + -parseInt(x(139)) / 4 + -parseInt(x(143)) / 5 * (-parseInt(x(151)) / 6) + -parseInt(x(147)) / 7 + parseInt(x(136)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ie, 716321);
function Ie() {
  const t = ["latitude", "18249152yIyQTV", `
坐标:`, "add", "2980648qsGNpE", "1431996xmumqB", "BOTTOM", "entities", "355eOnFOX", "longitude", "fromDegrees", "3722586jjAqMc", "4076352KFEUvg", "2744800ALkmmD", "webPlaceEntitySource", "RED", "112074JNgwNy"];
  return Ie = function() {
    return t;
  }, Ie();
}
function t2(t, e) {
  return t = t - 136, Ie()[t];
}
const bt = os(149);
function Lo() {
  const t = (a, s) => {
    const r = t2, { source: i } = ox(bt, !0);
    i[r(142)][r(138)]({ position: y[r(145)](s[r(144)], s[r(152)], 0), label: { ...or, verticalOrigin: H2[r(141)], text: a + r(137) + s[r(144)] + "," + s[r(152)] + ",0" }, point: { pixelSize: 4, color: W[r(150)] } });
  }, e = () => {
    Tr(bt);
  }, x = () => {
    ix(bt);
  }, n = hr(() => {
    e == null || e();
  }, { isEmpty: !0 });
  return Nt(() => {
    e == null || e(), n == null || n();
  }), { create: t, clear: x, destroy: e };
}
(function(t, e) {
  for (var x = J0, n = t(); ; )
    try {
      var a = parseInt(x(468)) / 1 + -parseInt(x(465)) / 2 * (parseInt(x(473)) / 3) + parseInt(x(464)) / 4 + -parseInt(x(474)) / 5 + parseInt(x(470)) / 6 * (-parseInt(x(462)) / 7) + -parseInt(x(469)) / 8 * (-parseInt(x(463)) / 9) + parseInt(x(458)) / 10 * (-parseInt(x(459)) / 11);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ge, 866772);
function No(t) {
  return fx(t, "Map");
}
function Oo(t) {
  var e = J0;
  return fx(t, e(461));
}
function cs(t) {
  var e = J0;
  return fx(t, e(467));
}
function J0(t, e) {
  t = t - 458;
  var x = ge(), n = x[t];
  return n;
}
function C2(t) {
  var e = J0;
  return fx(t, e(476));
}
function Mt(t) {
  var e = J0;
  return fx(t, e(475));
}
function S2(t) {
  var e = J0;
  return fx(t, e(466));
}
function ge() {
  var t = ["Number", "Object", "313377UyunPB", "136eEMreN", "1143186VedUry", "call", "[object ", "33606BnNCeg", "1385IiqODJ", "String", "Array", "10bbPlqe", "2009491thAJOs", "toString", "Set", "14dWSFje", "430119kripHZ", "5342208ONgPcb", "184cvZsWN"];
  return ge = function() {
    return t;
  }, ge();
}
function fs(t) {
  return t != null;
}
function fx(t, e) {
  var x = J0;
  return Object.prototype[x(460)][x(471)](t) === x(472) + e + "]";
}
function ye() {
  const t = ["114BjMiqq", "385464OoiNli", "70441DYiQLm", "2564185NjfloE", "150819uTkxTj", "9ShiXvI", "117FuqQOy", "4gaGeff", "8iYBvzY", "436400isXABe", "5926312vPoVDa", "call", "resolve", "6082175HhcTTa", "10zpeICt", "then"];
  return ye = function() {
    return t;
  }, ye();
}
const Ln = Nn;
(function(t, e) {
  const x = Nn, n = t();
  for (; ; )
    try {
      if (parseInt(x(311)) / 1 + -parseInt(x(310)) / 2 * (-parseInt(x(306)) / 3) + parseInt(x(309)) / 4 * (parseInt(x(305)) / 5) + parseInt(x(302)) / 6 * (-parseInt(x(304)) / 7) + parseInt(x(312)) / 8 * (-parseInt(x(307)) / 9) + -parseInt(x(300)) / 10 * (-parseInt(x(299)) / 11) + parseInt(x(303)) / 12 * (-parseInt(x(308)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ye, 482170);
function Nn(t, e) {
  return t = t - 297, ye()[t];
}
const E2 = Promise[Ln(298)]();
function n2(t) {
  const e = Ln;
  return t ? E2.then(() => t[e(297)](null, B())) : E2[e(301)](() => B());
}
const On = N0;
(function(t, e) {
  const x = N0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(224)) / 1 * (-parseInt(x(191)) / 2) + parseInt(x(219)) / 3 + parseInt(x(199)) / 4 * (-parseInt(x(177)) / 5) + parseInt(x(188)) / 6 * (-parseInt(x(190)) / 7) + -parseInt(x(202)) / 8 + parseInt(x(211)) / 9 + -parseInt(x(198)) / 10 * (-parseInt(x(205)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ve, 783034);
function Vn(t, e) {
  const x = N0, n = B(e), a = n[x(225)][x(206)][x(216)], s = a[x(195)](t);
  let r = +y0[x(196)](s[x(223)])[x(222)](6), i = +y0.toDegrees(s[x(181)])[x(222)](6), o = +s.height.toFixed(6);
  return Number[x(210)](r) && (r = +r[x(222)](1)), Number[x(210)](i) && (i = +i.toFixed(1)), Number[x(210)](o) && (o = +o[x(222)](1)), { longitude: Number(r), latitude: Number(i), height: Number(o) };
}
function Vo(t, e) {
  const x = N0, n = B(e), a = n[x(225)].globe[x(216)], s = a.cartesianToCartographic(t);
  let r = +y0[x(196)](s.longitude), i = +y0[x(196)](s[x(181)]), o = +s[x(226)];
  return Number[x(210)](r) && (r = +r), Number[x(210)](i) && (i = +i), Number[x(210)](o) && (o = +o), { longitude: Number(r), latitude: Number(i), height: Number(o) };
}
function ve() {
  const t = ["add", "EPSG:4326", "frameState", "6192715RVRYVq", "COLUMBUS_VIEW", "projectVector", "wgs84ToWindowCoordinates", "latitude", "+proj=longlat +datum=WGS84 +no_defs", "fromCartesian", "UNIT_X", "negate", "clone", "project", "25098AnZLSf", "defs", "1687FYzuwV", "18hCYXiC", "cross", "groundCartesian", "floor", "cartesianToCartographic", "toDegrees", "subtract", "2810Naqirn", "4cJjOfW", "offsetX", "mode", "1557376OMbULz", "pick", "cartesian", "42603GYIGUI", "globe", "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", "fromPointNormal", "cartographicToCartesian", "isInteger", "4815666Wmdenw", "offsetY", "rayPlane", "fromDegrees", "getPickRay", "ellipsoid", "fromElements", "camera", "3574206qdDZBq", "pickEllipsoid", "mapProjection", "toFixed", "longitude", "45507XUPJeo", "scene", "height", "surfaceDistance", "pickPosition", "unproject", "EPSG:4610"];
  return ve = function() {
    return t;
  }, ve();
}
function a2(t, e) {
  const x = N0, n = B(e);
  let a = new Y(t.x, t.y);
  return t instanceof MouseEvent && (a = new Y(t[x(200)], t[x(212)])), n.camera[x(220)](a, n[x(225)][x(206)].ellipsoid);
}
function $0(t, e) {
  const x = B(e), n = a2(t, x);
  if (n) return Vn(n, x);
}
const Rn = $0;
function N0(t, e) {
  return t = t - 175, ve()[t];
}
function Ro(t, e, x) {
  const n = N0, { longitude: a, latitude: s, height: r } = t, { longitude: i, latitude: o, height: c } = e, l = t0.fromDegrees(a, s, r), u = t0[n(214)](i, o, c), h = dt(x);
  return new At(l, u, h[n(206)][n(216)]).surfaceDistance;
}
function zo(t, e, x) {
  const n = N0, a = t0.fromCartesian(t), s = t0[n(183)](e), r = dt(x), i = new At(a, s, r[n(206)][n(216)]);
  return Math[n(194)](i[n(227)]) / 1e3;
}
function Go(t) {
  const e = N0;
  return proj4[e(189)](e(175), e(182)), proj4[e(189)](e(230), e(207)), proj4("EPSG:4326", e(230), [t.longitude, t.latitude]);
}
const us = new X2();
function Wo(t, e) {
  const x = N0;
  if (t.pickPositionSupported && t[x(201)] !== p0.SCENE2D) return t[x(228)](e);
  if (!t[x(206)]) return;
  const n = t[x(218)][x(215)](e, us), a = t.globe[x(203)](n, t);
  return a || t[x(218)].pickEllipsoid(e, t[x(206)][x(216)]);
}
const ls = new y(), ds = new Y(), T2 = new y(), ps = new X2(), M2 = new t0();
let xx = new y();
const hs = new J2(y[On(184)], 0), _s = new y();
function Fo(t, e, x) {
  const n = On, a = t[n(176)][n(221)][n(216)], s = x[n(193)];
  let r = x[n(204)][n(186)](), i = hs, o = _s, c = s, l = o;
  if (t[n(201)] === p0[n(178)]) {
    l = y[n(184)];
    const f = a.cartesianToCartographic(s, M2);
    c = t[n(221)][n(187)](f, ls), y[n(217)](c.z, c.x, c.y, c);
  }
  let u = y[n(192)](l, t[n(218)].direction, T2);
  u = y[n(192)](l, u, u), u = y.normalize(u, u), i = J2[n(208)](c, u, i);
  const h = t[n(218)][n(215)](e, ps);
  if (r = Pa[n(213)](h, i, r), z(r)) {
    if (t[n(201)] === p0.COLUMBUS_VIEW) {
      r = y[n(217)](r.y, r.z, r.x, r);
      const f = t[n(221)][n(229)](r, M2);
      r = a[n(209)](f, r);
    }
    return ka[n(180)](t, x.groundCartesian, ds).y < e.y && (o = y[n(185)](o, T2)), xx = y[n(197)](r, s, xx), xx = y[n(179)](xx, o, xx), r = y[n(231)](s, xx, r), r;
  }
}
function we() {
  const t = ["isArray", "10929OMCrWJ", "828CDIOGz", "map", "longitude", "244iXawpB", "12UOyhne", "883246wDGEzR", "latitude", "24ZQjKdN", "24046DBXOAW", "geometry", "1447270Wfjanh", "floor", "5813049SqbLHb", "4815PKLugF", "466731nPeiCw"];
  return we = function() {
    return t;
  }, we();
}
(function(t, e) {
  const x = _t, n = t();
  for (; ; )
    try {
      if (parseInt(x(491)) / 1 * (-parseInt(x(487)) / 2) + parseInt(x(499)) / 3 * (-parseInt(x(486)) / 4) + parseInt(x(496)) / 5 * (parseInt(x(500)) / 6) + parseInt(x(488)) / 7 + -parseInt(x(490)) / 8 * (parseInt(x(497)) / 9) + -parseInt(x(493)) / 10 + parseInt(x(495)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(we, 120728);
function Ce(t) {
  const e = _t;
  return Array[e(498)](t) ? Bx(t) : Bx([t.longitude, t[e(489)]]);
}
function D2(t, e) {
  const x = Bx(t), n = Bx(e);
  return rr(x, n);
}
function Bo(t) {
  return sn(t);
}
function mt(t, e, x) {
  const n = Ce(t), a = Ce(e);
  return sr(n, a, x);
}
function jo(t) {
  const e = t.map((n) => Ce(n)), x = nr(e);
  return ar(x);
}
function Dt(t) {
  return t[_t(492)].coordinates;
}
function _t(t, e) {
  return t = t - 486, we()[t];
}
function Ho(t) {
  const e = _t, x = t[e(501)]((s) => {
    const r = e;
    return [s[r(502)], s[r(489)]];
  });
  x.push([t[0][e(502)], t[0].latitude]);
  const n = sn([x]);
  return Math[e(494)](er(n)) / 1e6 ?? 0;
}
function Uo(t) {
  const { origin: e, distance: x, bearing: n, options: a } = t, s = Ce(e), r = tr(s, x, n, a);
  return Dt(r);
}
const u0 = zn;
(function(t, e) {
  const x = zn, n = t();
  for (; ; )
    try {
      if (parseInt(x(221)) / 1 * (parseInt(x(215)) / 2) + parseInt(x(229)) / 3 + -parseInt(x(225)) / 4 * (parseInt(x(231)) / 5) + -parseInt(x(218)) / 6 * (-parseInt(x(214)) / 7) + -parseInt(x(222)) / 8 + parseInt(x(213)) / 9 * (-parseInt(x(224)) / 10) + parseInt(x(234)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Se, 932699);
function Se() {
  const t = ["1556918eKgAqU", "fromRotationMatrix", "_forwardExtrapolationType", "837qHgUTm", "100457WRBJnE", "817242FmFWLJ", "addEventListener", "definitionChanged", "234FfzbKD", "position", "isConstant", "3cdlbwy", "2956536YCuVKn", "_velocityVectorProperty", "113700HrgKVW", "1471828eTclgb", "ellipsoid", "raiseEvent", "WGS84", "3505500QtNIXe", "getValue", "10TkSzHC", "_ellipsoid", "forwardExtrapolationType"];
  return Se = function() {
    return t;
  }, Se();
}
function zn(t, e) {
  return t = t - 212, Se()[t];
}
new y();
const P2 = new y(), k2 = new Na();
class Yo {
  constructor(e, x = Wx[u0(228)]) {
    const n = u0;
    this._velocityVectorProperty = new Aa(e, !0), this[n(217)] = new Ex(), this[n(212)] = Ct.HOLD, this[n(223)].forwardExtrapolationType = this[n(212)], this[n(232)] = x, this._velocityVectorProperty[n(217)][n(216)](() => {
      const a = n;
      this[a(217)][a(227)](this);
    });
  }
  get isConstant() {
    const e = u0;
    return this[e(223)][e(220)];
  }
  get position() {
    const e = u0;
    return this._velocityVectorProperty[e(219)];
  }
  set position(e) {
    const x = u0;
    this._velocityVectorProperty[x(219)] = e;
  }
  get [u0(226)]() {
    return this[u0(232)];
  }
  set [u0(226)](e) {
    const x = u0;
    this._ellipsoid !== e && (this._ellipsoid = e, this[x(217)].raiseEvent(this));
  }
  get forwardExtrapolationType() {
    return this._forwardExtrapolationType;
  }
  set forwardExtrapolationType(e) {
    const x = u0;
    this[x(212)] = e, this[x(223)][x(233)] = this[x(212)];
  }
  [u0(230)](e, x) {
    const n = u0, a = this[n(223)].getValue(e, P2);
    if (z(a))
      return La.rotationMatrixFromPositionVelocity(P2, a, this._ellipsoid, k2), Oa[n(235)](k2, x);
  }
}
const $ = r2;
(function(t, e) {
  const x = r2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(349)) / 1 * (parseInt(x(330)) / 2) + -parseInt(x(334)) / 3 + parseInt(x(315)) / 4 + parseInt(x(326)) / 5 + -parseInt(x(316)) / 6 + -parseInt(x(336)) / 7 * (-parseInt(x(338)) / 8) + -parseInt(x(320)) / 9 * (-parseInt(x(339)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ee, 866457);
function Ee() {
  const t = ["5066520wSGYMI", "isConstant", "18697NtdobK", "forwardExtrapolationType", "1768kccVju", "4430430xgTxyu", "position", "time is required", "_forwardExtrapolationType", "getValue", "INERTIAL", "_normalize", "_currentCartesian", "addSeconds", "_currentVelocity", "70230awQxne", "getInertialValue", "_definitionChanged", "HOLD", "equals", "ZERO", "divideByScalar", "6220816JNWDxs", "6828912CtzeaY", "definitionChanged", "_subscription", "addEventListener", "18YQczjb", "getOrbitFixedValue", "normalize", "clone", "subtract", "_getValueInertial", "6469690uIceXl", "warn", "referenceFrame", "_getValueFixed", "18QDskOj", "subscription", "raiseEvent", "_position"];
  return Ee = function() {
    return t;
  }, Ee();
}
function r2(t, e) {
  return t = t - 314, Ee()[t];
}
const bs = new y(), A2 = new y(), L2 = new r0();
new y();
new y();
new y();
const ms = new r0(), B0 = 1 / 60;
class Gn {
  constructor(e, x = !0) {
    const n = r2;
    this._position = e, this[n(318)] = void 0, this[n(351)] = new Ex(), this[n(345)] = x, this._currentCartesian = void 0, this[n(348)] = void 0, this[n(342)] = Ct[n(352)];
  }
  get [$(331)]() {
    return this[$(318)];
  }
  set [$(331)](e) {
    const x = $;
    this[x(318)] = e;
  }
  get [$(317)]() {
    return this._definitionChanged;
  }
  get [$(340)]() {
    return this[$(333)];
  }
  set [$(340)](e) {
    var a;
    const x = $, n = this[x(333)];
    n !== e && (z(n) && ((a = this[x(318)]) == null || a.call(this)), this[x(333)] = e, z(e) && (this._subscription = e == null ? void 0 : e.definitionChanged[x(319)](() => {
      const s = x;
      this[s(351)][s(332)](this);
    }, this)), this[x(351)][x(332)](this));
  }
  set [$(322)](e) {
    const x = $;
    this._normalize !== e && (this._normalize = e, this._definitionChanged[x(332)](this));
  }
  get [$(322)]() {
    return this[$(345)];
  }
  get [$(337)]() {
    return this[$(342)];
  }
  set [$(337)](e) {
    const x = $;
    this[x(342)] = e;
  }
  [$(343)](e, x, n) {
    const a = $, s = this[a(333)];
    if (!s) return;
    if (!z(this._forwardExtrapolationType) || this._forwardExtrapolationType !== Ct[a(352)])
      return s[a(328)] === _2[a(344)] ? (this[a(348)] = this[a(325)](e, x, n), this[a(348)]) : (this[a(348)] = this[a(329)](e, x, n), this[a(348)]);
    let r;
    if (s.referenceFrame === _2.INERTIAL) {
      const i = s[a(350)](e), o = s[a(350)](r0.addSeconds(e, B0, ms));
      if (y.equals(i, this[a(346)]) || y[a(353)](i, o)) {
        const c = s[a(343)](e);
        return z(c) && z(n) && c[a(323)](n), this._currentVelocity;
      }
      this[a(346)] = i == null ? void 0 : i[a(323)](), r = this[a(325)](e, x, n);
    } else r = this._getValueFixed(e, x, n);
    if (!r) {
      const i = s[a(343)](e);
      return z(i) && z(n) && i[a(323)](n), this._currentVelocity;
    }
    return this[a(348)] = r, this[a(348)];
  }
  [$(325)](e, x, n) {
    const a = $;
    if (!z(e)) throw new Q2(a(341));
    !z(x) && (x = new y());
    const s = this[a(333)];
    if (s[a(335)]) return this[a(345)] ? void 0 : y.clone(y.ZERO, x);
    let r = s[a(343)](e, bs), i = s[a(350)](r0[a(347)](e, B0, L2), A2);
    if (i = s.getOrbitFixedValue(e, i), !z(r) || !z(i) && (i = r, r = s[a(350)](r0[a(347)](e, -B0, L2), A2), r = s[a(321)](e, r), !z(r)))
      return;
    if (y[a(353)](r, i)) return this[a(345)] ? void 0 : y[a(323)](y[a(354)], x);
    z(n) && r[a(323)](n);
    const o = y.subtract(i, r, x);
    return this._normalize ? y.normalize(o, x) : y[a(314)](o, B0, x);
  }
  _getValueFixed(e, x, n) {
    const a = $;
    if (!z(e)) {
      console[a(327)]("time is required");
      return;
    }
    !z(x) && (x = new y());
    const s = this[a(333)];
    if (s != null && s.isConstant) return this[a(345)] ? void 0 : y[a(323)](y[a(354)], x);
    let r = s[a(343)](e), i = s[a(343)](r0[a(347)](e, B0, new r0()));
    if (!z(r) || !z(i) && (i = r, r = s.getValue(r0.addSeconds(e, -B0, new r0())), !z(r)))
      return;
    if (y.equals(r, i)) return this[a(345)] ? void 0 : y.clone(y[a(354)], x);
    z(n) && r[a(323)](n);
    const o = y[a(324)](i, r, x);
    return this[a(345)] ? y[a(322)](o, x) : y.divideByScalar(o, B0, x);
  }
  [$(353)](e) {
    var n;
    const x = $;
    return this === e || e instanceof Gn && ((n = this[x(333)]) == null ? void 0 : n[x(353)](e._position));
  }
}
const l0 = s2;
(function(t, e) {
  const x = s2, n = t();
  for (; ; )
    try {
      if (parseInt(x(133)) / 1 * (parseInt(x(127)) / 2) + parseInt(x(144)) / 3 * (parseInt(x(148)) / 4) + parseInt(x(128)) / 5 * (-parseInt(x(139)) / 6) + parseInt(x(131)) / 7 + -parseInt(x(142)) / 8 * (parseInt(x(153)) / 9) + -parseInt(x(136)) / 10 + parseInt(x(132)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Te, 370433);
const Is = new y(), N2 = new y(), It = new t0(), gt = new t0(), O2 = new r0(), V2 = 1 / 60;
let R2, Vx;
function s2(t, e) {
  return t = t - 127, Te()[t];
}
function Te() {
  const t = ["getValue", "8opdfBg", "equals", "19269mwlAxt", "definitionChanged", "addSeconds", "longitude", "32lopzmX", "latitude", "_position", "_currentRotation", "_getValue", "1754406QqBcsC", "14QAorxp", "1452515HqoFlg", "_subscription", "position", "1053080qnhOOs", "8010508MeorBD", "61441jJqYeL", "time is required", "atan", "5042690ZKHiyr", "fromCartesian", "isConstant", "6eXnDvn", "abs"];
  return Te = function() {
    return t;
  }, Te();
}
class $o {
  constructor(e) {
    const x = s2;
    this._position = e, this[x(145)] = new Ex(), this._subscription = void 0, this[x(151)] = void 0;
  }
  get [l0(138)]() {
    var x;
    const e = l0;
    return (x = this[e(150)]) == null ? void 0 : x[e(138)];
  }
  get [l0(130)]() {
    return this[l0(150)];
  }
  set [l0(130)](e) {
    var a;
    const x = l0, n = this[x(150)];
    n !== e && (z(n) && ((a = this[x(129)]) == null || a.call(this)), this[x(150)] = e, z(e) && (this[x(129)] = e[x(145)].addEventListener(() => {
      this[x(145)].raiseEvent(this);
    }, this)), this[x(145)].raiseEvent(this));
  }
  [l0(141)](e) {
    const x = l0, n = this[x(152)](e);
    return n ? (this[x(151)] = n, this[x(151)]) : this[x(151)];
  }
  [l0(143)](e) {
    const x = l0;
    return this === e || this[x(150)][x(143)](e[x(150)]);
  }
  [l0(152)](e) {
    const x = l0;
    if (!z(e)) throw new Q2(x(134));
    const n = this[x(150)];
    if (n[x(138)]) return;
    let a = n[x(141)](e, Is), s = n[x(141)](r0.addSeconds(e, V2, O2), N2);
    if (z(a) && !(!z(s) && (s = a, a = n.getValue(r0[x(146)](e, -V2, O2), N2), !z(a))) && !y[x(143)](a, s))
      return t0[x(137)](a, Wx.WGS84, It), t0[x(137)](s, Wx.WGS84, gt), Vx = gt[x(147)] - It[x(147)], R2 = (gt[x(149)] - It.latitude) / Vx, Math[x(135)](R2) - Vx / Math[x(140)](Vx) * Math.PI / 2;
  }
}
const gs = Wn;
(function(t, e) {
  const x = Wn, n = t();
  for (; ; )
    try {
      if (parseInt(x(354)) / 1 + -parseInt(x(357)) / 2 + parseInt(x(361)) / 3 * (parseInt(x(351)) / 4) + -parseInt(x(360)) / 5 + -parseInt(x(353)) / 6 * (-parseInt(x(358)) / 7) + parseInt(x(355)) / 8 * (-parseInt(x(359)) / 9) + -parseInt(x(352)) / 10 * (parseInt(x(356)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Me, 656821);
const ys = Object[gs(362)];
function vs(t, e) {
  return function(x) {
    return t(x)[e];
  };
}
function Wn(t, e) {
  return t = t - 351, Me()[t];
}
function Me() {
  const t = ["2232FNkHKs", "11IbRGvC", "2551986NGKpJT", "35BYbtoB", "17370zWkHda", "2590075PJJWgz", "555faCJzg", "assign", "22364UOUsPC", "2423760DXWSXM", "1266558osLnzN", "1141875LyyMow"];
  return Me = function() {
    return t;
  }, Me();
}
const e0 = i2;
function De() {
  const t = ["_color", "3660021kmwgNo", "_readyPromise", "errorEvent", "canvas", "font", "tileXYToNativeRectangle", "°, ", "readyPromise", "requestImage", "minimumLevel", "_labelColor", "bold 12px Arial", "2PllMEq", "rectangle", "maximumLevel", "6846mmotqL", "3845ajwilD", "_tileWidth", "3452mwffji", "1282745aNfPYW", "_errorEvent", "_tilingScheme", "51139120Rddxcj", "6041WAjopm", "textAlign", "getTileCredits", "center", "strokeRect", "hasAlphaChannel", "pickFeatures", "strokeStyle", "height", "tileWidth", "_tileHeight", "lineWidth", "11185296JLsIeH", "toFixed", "1597659PkaxUb", "YELLOW", "resolve", "fillText", "toCssColorString"];
  return De = function() {
    return t;
  }, De();
}
(function(t, e) {
  const x = i2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(521)) / 1 * (parseInt(x(514)) / 2) + parseInt(x(496)) / 3 + parseInt(x(520)) / 4 * (-parseInt(x(518)) / 5) + parseInt(x(517)) / 6 * (-parseInt(x(525)) / 7) + -parseInt(x(494)) / 8 + -parseInt(x(502)) / 9 + parseInt(x(524)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(De, 910559);
function i2(t, e) {
  return t = t - 492, De()[t];
}
class ws {
  constructor(e) {
    const x = i2;
    e = e ?? {};
    const { color: n = W[x(497)], labelColor: a = W[x(497)], tileWidth: s = 256, tileHeight: r = 256 } = e;
    this[x(523)] = new Pt(), this[x(501)] = n[x(500)](), this[x(512)] = a.toCssColorString(), this[x(522)] = new Ex(), this._tileWidth = s, this[x(492)] = r, this._readyPromise = Promise[x(498)](!0);
  }
  get proxy() {
  }
  get [e0(534)]() {
    return this[e0(519)];
  }
  get tileHeight() {
    return this._tileHeight;
  }
  get [e0(516)]() {
  }
  get [e0(511)]() {
  }
  get tilingScheme() {
    return this[e0(523)];
  }
  get [e0(515)]() {
    const e = e0;
    return this._tilingScheme[e(515)];
  }
  get tileDiscardPolicy() {
  }
  get [e0(504)]() {
    return this[e0(522)];
  }
  get ready() {
    return !0;
  }
  get [e0(509)]() {
    return this[e0(503)];
  }
  get credit() {
  }
  get [e0(530)]() {
    return !0;
  }
  [e0(527)]() {
  }
  [e0(531)]() {
  }
  [e0(510)](e, x, n) {
    const a = e0, s = document.createElement(a(505));
    s.width = 256, s[a(533)] = 256;
    const r = s.getContext("2d");
    r[a(532)] = this._color, r[a(493)] = 1, r[a(529)](1, 1, 255, 255), r[a(506)] = a(513), r[a(526)] = a(528), r.fillStyle = this[a(512)];
    const { west: i, north: o } = this[a(523)][a(507)](e, x, n), c = Cs(n, i, o);
    return r[a(499)](c, c.length * 45 / 14, 15), Promise.resolve(s);
  }
}
function Cs(t, e, x) {
  const n = e0;
  if (t > 10) {
    const a = (t - 8) / 2, s = e[n(495)](a), r = x[n(495)](a);
    return s + n(508) + r + "°";
  }
  return e.toFixed(1) + "°, " + x[n(495)](1) + "°";
}
function Fn(t, e) {
  return t = t - 169, Pe()[t];
}
const d0 = Fn;
function Pe() {
  const t = ["show", "_init", "_labelColor", "destroy", "#8aaec3", "tileGrid", "withAlpha", "10MkhJWi", "grid", "589280rOSFEq", "TRANSPARENT", "alpha", "addImageryProvider", "2545140eFkIoc", "_alpha", "435550eGgOzJ", "remove", "WHITE", "28olfYBs", "_viewer", "_layer", "104522IDrJNa", "_gridShow", "_color", "_show", "imageryLayers", "isDestroyed", "33045uQRoyt", "1194MobAzW", "10939986UaVEMh", "warn", "202816KUnLxq", "This Viewer is "];
  return Pe = function() {
    return t;
  }, Pe();
}
(function(t, e) {
  const x = Fn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(182)) / 1 + parseInt(x(176)) / 2 + parseInt(x(174)) / 3 + -parseInt(x(170)) / 4 + -parseInt(x(188)) / 5 * (-parseInt(x(189)) / 6) + parseInt(x(179)) / 7 * (-parseInt(x(192)) / 8) + -parseInt(x(190)) / 9 * (parseInt(x(201)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Pe, 812542);
const Ss = W.fromCssColorString(d0(198));
class Zo {
  constructor(e) {
    const x = d0, { viewer: n, gridShow: a = !0, show: s = !1, color: r = Ss, labelColor: i = W[x(178)][x(200)](0.5) } = e ?? {};
    if (this[x(175)] = 1, this[x(180)] = n, this[x(181)] = { tileGrid: void 0, grid: void 0 }, this._show = s, !z(this[x(180)])) {
      console[x(191)](x(193) + this[x(180)]);
      return;
    }
    this[x(183)] = a, this[x(185)] = s, this[x(184)] = r, this[x(196)] = i, this[x(195)]();
  }
  [d0(195)]() {
    const e = d0, x = this[e(180)].imageryLayers;
    this._layer[e(199)] = x[e(173)](new ws({ color: this[e(184)], labelColor: this[e(196)] })), this[e(183)] && (this[e(181)][e(169)] = x[e(173)](new Va({ color: this[e(184)], backgroundColor: W.TRANSPARENT, glowColor: W[e(171)], cells: 4 }))), this[e(194)] = this[e(185)];
  }
  [d0(187)]() {
    return !1;
  }
  set [d0(172)](e) {
    const x = d0;
    this[x(181)][x(169)] && (this[x(181)][x(169)][x(172)] = e, this._layer[x(199)].alpha = e), this[x(175)] = e;
  }
  [d0(197)]() {
    const e = d0, x = this[e(180)][e(186)];
    return this[e(181)].tileGrid && x[e(177)](this[e(181)].tileGrid), this[e(181)][e(169)] && x[e(177)](this[e(181)][e(169)]), Lt(this);
  }
  set [d0(194)](e) {
    const x = d0;
    this[x(181)][x(199)] && (this[x(181)][x(199)][x(194)] = e), this[x(181)][x(169)] && (this._layer[x(169)].show = e), this._show = e;
  }
  get layer() {
    return this[d0(181)];
  }
}
function Bn(t, e) {
  t = t - 191;
  var x = ke(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = Bn, n = t(); ; )
    try {
      var a = parseInt(x(200)) / 1 + parseInt(x(199)) / 2 + parseInt(x(198)) / 3 + -parseInt(x(197)) / 4 + -parseInt(x(194)) / 5 * (parseInt(x(196)) / 6) + -parseInt(x(195)) / 7 * (parseInt(x(192)) / 8) + -parseInt(x(193)) / 9;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ke, 201855);
function ke() {
  var t = ["569653vXbEYF", "621678yFtyDV", "320088LuOkJs", "1058751Ffwcak", "558634hEYXPn", "254068oZuGHd", "addMaterial", "8mgFWeC", "3774897ZQYhUM", "5PqBWIU"];
  return ke = function() {
    return t;
  }, ke();
}
function Es(t, e) {
  return function() {
    var x = Bn;
    N._materialCache[x(191)](t, e);
  };
}
const H = jn;
(function(t, e) {
  const x = jn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(318)) / 1 * (parseInt(x(304)) / 2) + parseInt(x(307)) / 3 + -parseInt(x(337)) / 4 + parseInt(x(298)) / 5 * (-parseInt(x(305)) / 6) + parseInt(x(301)) / 7 * (-parseInt(x(330)) / 8) + parseInt(x(309)) / 9 * (parseInt(x(297)) / 10) + -parseInt(x(329)) / 11 * (-parseInt(x(342)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ae, 681567);
function jn(t, e) {
  return t = t - 295, Ae()[t];
}
function Ae() {
  const t = ["_speedSubscription", "color", "minAngle", "gradient", "_colorSubscription", "425002IVwJFz", "prototype", "_percentSubscription", "_gradient", "number", "_maxAngleSubscription", "isConstant", "percent", "_minAngleSubscription", "_openAngleSubscription", "equals", "162613NvmxHb", "1800920eOMZxq", "rotation", "speed", "openAngle", "getValueOrDefault", "_percent", "_number", "1633600wIkPgx", "EllipseDiffuse", "_glowPower", "maxAngle", "_gradientSubscription", "1368hRdusb", "getValue", `
        uniform vec4 color;
        uniform float speed;
        uniform float gradient;
        uniform float percent;
        uniform float number;
        uniform float maxAngle;
        uniform float minAngle;
        
        const float PI = czm_twoPi / 2.0;

        // 正反切
        float atan2(float y, float x){
          if(x == 0.0){
            if(y > 0.0){ return PI / 2.0; }
            if(y < 0.0){ return -PI / 2.0; }
            return 0.0;
          }
          
          float angle = atan(y / x);
          
          if(x < 0.0){ angle += PI; }
          
          if(angle > PI){
            angle -= czm_twoPi;
          }else if(angle < -PI){
            angle += czm_twoPi;
          }
          
          return angle;
        }
        
        // 计算角度
        float calculateAngle(vec2 v1, vec2 v2){
          float diffX = v2.x - v1.x;
          float diffY = v2.y - v1.y;
          float angleInRadians = atan2(diffY, diffX);

          return degrees(angleInRadians);
        }
        
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 st = materialInput.st;
          // 底色透明度
          float alpha = color.a / 10.0;
          float alphaDis = 1.0 - alpha;
          // 动态值0 - 0.5
          float t = fract(czm_frameNumber * speed / 100.0) - 0.5;
          // 当前像素与原点的距离
          float dis = distance(st,vec2(0.5,0.5));
          // 线条宽度
          float lineWidth = 0.01;
          
          for(int i = 1;i <= 10; i++){
            // 线条与原点的距离
            float current = (0.5 * float(i) / 10.0) + (t / 10.0);
            if(current > 0.5){
              current -=0.5;
            };
            
            if(dis > current && dis < current + lineWidth){
             // 渐变，透明度百分比(取alpha - 1.0 的值
             float currentDis = (dis - current) / lineWidth;
             alpha = color.a * currentDis;
            };
          };
 
          float currentAngle = calculateAngle(vec2(0.5,0.5),st);
          // float currentAngle = calculateAngle(st, vec2(0.5,0.5));
          
          
          float m_maxAngle = maxAngle;
          float m_minAngle = minAngle;
          
          // 判断当前夹角范围是否在-180 ~ 180之间
          bool flag = true;
          if(m_maxAngle > 180.0){
              m_minAngle = maxAngle - 360.0;
              m_maxAngle = minAngle;
              // m_maxAngle = maxAngle - 360.0;
              // m_minAngle = minAngle;
              flag = false;
          }else if(m_minAngle < -180.0){
              m_maxAngle = minAngle + 360.0;
              m_minAngle = maxAngle;
              flag = false;
          }
          
          bool isShow = currentAngle < m_minAngle || currentAngle > m_maxAngle;
          if(flag){
            if(isShow){
              alpha = 0.0;
            };
          }else{
            if(!isShow){
              alpha = 0.0;
            };
          }
          
          // if(dis > 0.1 && dis < 0.11){
          //   alpha = 1.0;
          // };
         
          material.diffuse = color.rgb;
          material.alpha = alpha;
          return material;
        }`, "_minAngle", "_maxAngle", "280TemRSa", "2890BrXkcN", "_definitionChanged", "EllipseDiffuseType", "7PnTqGI", "_materialCache", "defineProperties", "2lLIfNz", "11646hincFy", "_speed", "1742052EfICUb", "addMaterial", "191583QVttBn", "getType", "_color", "_glow"];
  return Ae = function() {
    return t;
  }, Ae();
}
N[H(300)] = "EllipseDiffuse";
const Hn = H(344);
N[H(302)][H(308)](N[H(300)], { fabric: { type: N[H(338)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: Hn }, translucent: function() {
  return !0;
} });
const Ts = Es(N[H(300)], { fabric: { type: N[H(338)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: Hn }, translucent: function() {
  return !0;
} }), Ms = new W(1, 0, 0, 0.7), Ds = 2, Ps = 0.03, ks = 0.2, As = 5, Ls = 180, Ns = -180;
function hx(t) {
  const e = H;
  t = t ?? {}, this[e(299)] = new Ex(), this[e(311)] = void 0, this[e(317)] = void 0, this[e(306)] = void 0, this[e(313)] = void 0, this[e(335)] = void 0, this[e(320)] = void 0, this[e(321)] = void 0, this[e(341)] = void 0, this[e(336)] = void 0, this._numberSubscription = void 0, this._rotation = void 0, this._rotationSubscription = void 0, this._openAngle = void 0, this[e(327)] = void 0, this[e(296)] = void 0, this[e(323)] = void 0, this._minAngle = void 0, this[e(326)] = void 0, this.color = t[e(314)], this[e(332)] = t[e(332)], this[e(325)] = t[e(325)], this[e(316)] = t[e(316)], this[e(322)] = t[e(322)], this.rotation = t[e(331)], this[e(333)] = t[e(333)], this.maxAngle = t[e(340)], this[e(315)] = t[e(315)];
}
Object[H(303)](hx[H(319)], { isConstant: { get: function() {
  const t = H;
  return f0.isConstant(this[t(311)]) && f0[t(324)](this[t(312)]);
} }, definitionChanged: { get: function() {
  return this[H(299)];
} }, color: E0("color"), speed: E0("speed"), percent: E0(H(325)), gradient: E0(H(316)), number: E0(H(322)), rotation: E0(H(331)), openAngle: E0("openAngle"), maxAngle: E0(H(340)), minAngle: E0(H(315)) }), hx[H(319)][H(310)] = function(t) {
  return H(338);
}, hx[H(319)][H(343)] = function(t, e) {
  var s, r;
  const x = H;
  !z(e) && (e = {}), e[x(314)] = f0.getValueOrClonedDefault(this._color, t, Ms, e[x(314)]), e[x(332)] = f0[x(334)](this[x(306)], t, Ds, e[x(332)]), e[x(325)] = f0[x(334)](this[x(335)], t, Ps, e[x(325)]), e[x(316)] = f0[x(334)](this._gradient, t, ks, e[x(316)]), e.number = f0.getValueOrDefault(this[x(336)], t, As, e[x(322)]);
  let n = (s = this[x(331)]) == null ? void 0 : s[x(343)]();
  const a = (r = this.openAngle) == null ? void 0 : r[x(343)]();
  if (S2(n) && S2(a)) {
    n %= 360;
    const i = a / 2;
    let o = -n + i + 90, c = -n - i + 90;
    n > 270 && (o += 360, c += 360), n < -90 && (o -= 360, c -= 360), e[x(340)] = o, e[x(315)] = c;
  } else {
    const i = f0[x(334)](this._maxAngle, t, Ls, e[x(340)]), o = f0[x(334)](this[x(295)], t, Ns, e[x(315)]);
    e[x(340)] = i > o ? i : o, e[x(315)] = o < i ? o : i;
  }
  return e;
}, hx.prototype[H(328)] = function(t) {
  const e = H;
  return this === t || t instanceof hx && f0[e(328)](this._color, t[e(311)]) && f0[e(328)](this[e(339)], t[e(339)]) && f0[e(328)](this._taperPower, t._taperPower);
};
const P = Un;
function Un(t, e) {
  return t = t - 305, Le()[t];
}
(function(t, e) {
  const x = Un, n = t();
  for (; ; )
    try {
      if (-parseInt(x(305)) / 1 * (-parseInt(x(309)) / 2) + -parseInt(x(321)) / 3 + parseInt(x(333)) / 4 + -parseInt(x(332)) / 5 * (-parseInt(x(318)) / 6) + -parseInt(x(328)) / 7 + parseInt(x(326)) / 8 + -parseInt(x(316)) / 9 * (parseInt(x(306)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Le, 816505);
function Le() {
  const t = ["PolylineTrailType", "SensorWaveType", "CircleDiffuse", "85osJauj", "5386652mNQzng", "PolylineMilitary", "BombRadiationType", "CircleDiffuseType", "16IjfYCY", "3202390EYSyok", "SensorWave", "PolylineTrail", "8496YVfCJU", `
        uniform sampler2D image;
        uniform float speed;
        uniform vec4 color;
        uniform vec2 repeat;

        czm_material czm_getMaterial(czm_materialInput materialInput){
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = repeat * materialInput.st;
            float time = fract(czm_frameNumber * speed / 1000.0);
            vec4 colorImage = texture(image, vec2(fract(st.s - time), st.t));
            if(color.a == 0.0){
                material.alpha = colorImage.a;
                material.diffuse = colorImage.rgb;
            }else{
                material.alpha = colorImage.a * color.a;
                material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);
            }
            return material;
        }`, "CommunicationFlowType", "DefaultImageId", `
    uniform vec4 color;
    uniform float speed;

    vec3 circlePing(float r, float innerTail,  float frontierBorder, float timeResetSeconds,  float radarPingSpeed,  float fadeDistance){
      float t = fract(czm_frameNumber * speed / 1000.0);
      float time = mod(t, timeResetSeconds) * radarPingSpeed;
      float circle;
      circle += smoothstep(time - innerTail, time, r) * smoothstep(time + frontierBorder,time, r);
      circle *= smoothstep(fadeDistance, 0.0, r);
      return vec3(circle);
    }

    czm_material czm_getMaterial(czm_materialInput materialInput){
      czm_material material = czm_getDefaultMaterial(materialInput);
      vec2 st = materialInput.st * 2.0  - 1.0 ;
      vec2 center = vec2(0.);
      float time = fract(czm_frameNumber * speed / 1000.0);
      vec3 flagColor;
      float r = length(st - center) / 4.;
      flagColor += circlePing(r, 0.25, 0.025, 4.0, 0.3, 1.0) * color.rgb;
      // material.alpha = length(flagColor);
      material.alpha = length(flagColor)/2.0;
      material.diffuse = flagColor.rgb;
      return material;
    }`, "PolylineMilitaryType", `
        uniform vec4 color;
        uniform float speed;
        uniform float gradient;
        uniform float percent;
        uniform float number;

        czm_material czm_getMaterial(czm_materialInput materialInput){
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            float t = fract(czm_frameNumber * speed / 1000.0);
            // t *= (1.0 + percent);
            // float alpha = smoothstep(t- percent, t, st.s) * step(-t, -st.s);
            
            float tTemp = t;
            float tAdd = t;
            float tTemp2 = t * (1.0 + percent);
            float tAdd2 = t * (1.0 + percent);
            float alpha = 0.0;
            // 'i' : Loop index cannot be compared with non-constant expression
            for (float i=0.; i < 50.0; i+=1.0){
                if(i >= number){
                    break;
                }
                alpha = smoothstep(tTemp2 - percent, tTemp2, st.s) * step(-tTemp2, -st.s);
                tTemp -= 1.0/number;
                tTemp2 = tTemp * (1.0 + percent);
                // tTemp *= (1.0 - 1.0/number + percent);
                
                if(alpha > 0.0){
                    break;
                }
                alpha = smoothstep(tAdd2 - percent, tAdd2, st.s) * step(-tAdd2, -st.s);
                tAdd += 1.0/number;
                tAdd2 = tAdd * (1.0 + percent);
                // tAdd *= (1.0 + 1.0/number + percent);
                if(alpha > 0.0){
                    break;
                }
            }
            
            alpha += gradient;
            material.diffuse = color.rgb;
            material.alpha = alpha;
            return material;
        }`, "45xBTSkh", `
    uniform vec4 color;
    uniform sampler2D imageHead;
    uniform sampler2D image;
    uniform vec2 repeat;

    czm_material czm_getMaterial(czm_materialInput materialInput)
    {
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 st = materialInput.st * repeat;
        vec4 colorImageHead = texture(imageHead, fract(st));
        vec4 colorImage = texture(image, fract(st));
        // support negative value
        if(repeat.x > 0.0){
          if(abs(st.s) < abs(repeat.x) - 1.0){
              material.alpha = colorImage.a * color.a;
          } else {
              material.alpha = colorImageHead.a * color.a;
          }
        } else {
          if(abs(st.s) > abs(repeat.x) - 1.0){
              material.alpha = colorImage.a * color.a;
          } else {
              material.alpha = colorImageHead.a * color.a;
          }
        }
        material.diffuse = color.rgb * material.alpha;
        return material;
    }`, "119172BBGkPs", `
    uniform vec4 color;
    uniform float repeat;
    uniform float speed;
    uniform float thickness;

    czm_material czm_getMaterial(czm_materialInput materialInput)
    {
        czm_material material = czm_getDefaultMaterial(materialInput);
        float offset = fract(czm_frameNumber * 45.0 / 10000.0);
        offset *= -speed;
        float sp = 1.0 / repeat;
        vec2 st = materialInput.st;
        float dis = distance(st, vec2(0.5));
        float m = mod(dis + offset, sp);
        float a = step(sp*(1.0 - thickness), m);
        material.diffuse = color.rgb;
        material.alpha = a * color.a;
        return material;
    }`, "BombRadiation", "753177bRZPMg", "CommunicationFlow", "addMaterial", "PolylineFlow", "PolylineFlowType", "10915248ceAurS", "_materialCache", "3135524QTUrGR"];
  return Le = function() {
    return t;
  }, Le();
}
N[P(335)] = P(320);
const Os = `
 uniform vec4 color;
 uniform float speed;
 uniform float count;
 uniform float gradient;

 czm_material czm_getMaterial(czm_materialInput materialInput)
 {
   czm_material material = czm_getDefaultMaterial(materialInput);
   material.diffuse = 1.5 * color.rgb;
   vec2 st = materialInput.st;
   float dis = distance(st, vec2(0.5, 0.5));
   float per = fract(czm_frameNumber * speed / 1000.0);
   if(count == 1.0){
     if(dis > per * 0.5) discard;
     material.alpha = color.a * dis / per;
   } else {
     if(dis > 0.5) discard;
     float ringPhase = fract(dis / 0.5 * count - per);
     float bl = 1.0 - ringPhase;
     material.alpha = pow(bl, 1.0 + 10.0 * (1.0 - gradient));
   }
   return material;
 }`;
N[P(327)][P(323)](N[P(335)], { fabric: { type: N[P(335)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 3, count: 2, gradient: 0.5 }, source: Os }, translucent: function(t) {
  return !0;
} }), N[P(330)] = P(307);
const Vs = `
      uniform vec4 color;
      uniform float speed;
      uniform float count;
      uniform float gradient;

      const float uvDis = 1.0;
  
      czm_material czm_getMaterial(czm_materialInput materialInput)
      {
        czm_material material = czm_getDefaultMaterial(materialInput);
        material.diffuse = 1.5 * color.rgb;
        vec2 st = materialInput.st;
        float dis = distance(vec2(0.0,st.y), vec2(0.0, 0.0));
        float per = fract(czm_frameNumber * speed / 1000.0);
        if(count == 1.0){
          if(dis > per * uvDis){
            discard;
          }else {
            material.alpha = color.a  * dis / per / 2.0;
          }
        } else {
          vec3 str = materialInput.str;
          if(abs(str.z)  > 0.001){
            discard;
          }
          if(dis > uvDis){
            discard;
          } else {
            float perDis = uvDis / count;
            float disNum;
            float bl = 0.0;
            for(int i = 0; i <= 999; i++){
              if(float(i) <= count){
                disNum = perDis * float(i) - dis + per / count;
                if(disNum > 0.0){
                  if(disNum < perDis){
                    bl = 1.0 - disNum / perDis;
                  }
                  else if(disNum - perDis < perDis){
                    bl = 1.0 - abs(1.0 - disNum / perDis);
                  }
                  material.alpha = pow(bl,(1.0 + 10.0 * (1.0 - gradient)));
                }
              }
            }
          }
        }
        return material;
      }`;
N[P(327)].addMaterial(N[P(330)], { fabric: { type: N[P(330)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 3, count: 4, gradient: 0.2 }, source: Vs }, translucent: function(t) {
  return !0;
} }), N[P(336)] = P(331);
const Rs = P(313);
N[P(327)][P(323)](N[P(336)], { fabric: { type: N[P(336)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 15 }, source: Rs }, translucent: function(t) {
  return !0;
} }), N[P(311)] = P(322);
const zs = P(319);
N._materialCache[P(323)](N[P(311)], { fabric: { type: N[P(311)], uniforms: { color: new W(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 }, source: zs }, translucent: function(t) {
  return !0;
} }), N[P(325)] = P(324);
const Gs = P(315);
N[P(327)].addMaterial(N.PolylineFlowType, { fabric: { type: N[P(325)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 45, percent: 0.03, gradient: 0.2, number: 5 }, source: Gs }, translucent: function(t) {
  return !0;
} }), N[P(329)] = P(308);
const Ws = P(310);
N[P(327)].addMaterial(N[P(329)], { fabric: { type: N[P(329)], uniforms: { color: new W(1, 0, 0, 0.7), image: N[P(312)], speed: 45, repeat: new Y(1, 1) }, source: Ws }, translucent: function(t) {
  return !0;
} }), N.PolylineMilitaryType = P(334);
const Fs = P(317);
N[P(327)][P(323)](N.PolylineMilitaryType, { fabric: { type: N[P(314)], uniforms: { color: new W(1, 0, 0, 0.7), imageHead: N[P(312)], image: N[P(312)], repeat: new Y(1, 1) }, source: Fs }, translucent: function(t) {
  return !0;
} });
function Bs() {
  Ts();
}
const V0 = o2;
function Ne() {
  const t = ["16JipuuR", "floor", "tan", "280ZQOsqZ", "init", "1DjxgHQ", "_getXY", "14229CdxDmx", "78ynuQCp", "string", "3373412eOwEKa", "4872WUNhda", "getLonLat", "2151302hFJBdv", "6970vzbwXX", "380555AKfNap", "getXY", "271293TreDEr", "5690520VQaFjZ", "_getLonLat"];
  return Ne = function() {
    return t;
  }, Ne();
}
(function(t, e) {
  const x = o2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(116)) / 1 * (parseInt(x(124)) / 2) + -parseInt(x(122)) / 3 * (-parseInt(x(114)) / 4) + parseInt(x(126)) / 5 * (-parseInt(x(119)) / 6) + parseInt(x(121)) / 7 * (parseInt(x(131)) / 8) + -parseInt(x(118)) / 9 * (-parseInt(x(125)) / 10) + parseInt(x(128)) / 11 + parseInt(x(129)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ne, 613248);
const { sqrt: j0, pow: g, sin: _0, cos: i0, tan: z2, abs: G2 } = Math, js = { BEIJING54: { a: 6378245, b: 63568630188e-4 }, XIAN80: { a: 6378137, b: 63567523142e-4 }, CGCS2000: { a: 6378137, b: 635675231414e-5 } };
function o2(t, e) {
  return t = t - 113, Ne()[t];
}
class Yn {
  constructor(e) {
    const x = o2;
    this.e1 = 0, this.a = 0, this.b = 0, this.f = 0, this.e = 0, this[x(115)](e);
  }
  [V0(115)](e) {
    const { a: x, b: n } = js[e], a = (x - n) / x, s = j0(2 * a - g(a, 2));
    this.e1 = s / j0(1 - g(s, 2)), this.a = x, this.b = n, this.f = a, this.e = s;
  }
  getFloorInteger(e) {
    const x = V0;
    return typeof e === x(120) ? Number.parseInt(e) : Math[x(132)](e);
  }
  [V0(127)](e, x, n = 6, a = 0, s = 5e5, r = 0) {
    const i = V0;
    let o = this.getFloorInteger(G2(e) / n + 1) * n - 3;
    return o = e > 0 ? o : -o, this[i(117)](e, x, o, a, s, r);
  }
  [V0(123)](e, x, n, a = 6, s = 0, r = 5e5, i = 0) {
    let o = G2(n) * a - 3;
    return o = n > 0 ? o : -o, this._getLonLat(e, x, o, s, r, i);
  }
  [V0(117)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, b: o, e: c, e1: l } = this, u = s, h = r, f = a, d = n, p = (x - f) * Math.PI / 180, m = (e - d) * Math.PI / 180, v = i / j0(1 - g(c * _0(p), 2)), T = g(i, 2) / o, k = 1 - 3 * g(l, 2) / 4 + 45 * g(l, 4) / 64 - 175 * g(l, 6) / 256 + 11025 * g(l, 8) / 16384, G = k - 1, V = 15 / 32 * g(l, 4) - 175 / 384 * g(l, 6) + 3675 / 8192 * g(l, 8), A = 0 - 35 / 96 * g(l, 6) + 735 / 2048 * g(l, 8), F = 315 / 1024 * g(l, 8), R = T * (k * p + _0(p) * (G * i0(p) + V * g(i0(p), 3) + A * g(i0(p), 5) + F * g(i0(p), 7))), L = z2(p), E = l * i0(p), w = R + g(m, 2) / 2 * v * _0(p) * i0(p) + g(m, 4) * v * _0(p) * g(i0(p), 3) / 24 * (5 - g(L, 2) + 9 * g(E, 2) + 4 * g(E, 4)) + g(m, 6) * v * _0(p) * g(i0(p), 5) * (61 - 58 * g(L, 2) + g(L, 4)) / 720;
    return { x: m * v * i0(p) + g(m, 3) * v / 6 * g(i0(p), 3) * (1 - g(L, 2) + g(E, 2)) + g(m, 5) * v / 120 * g(i0(p), 5) * (5 - 18 * g(L, 2) + g(L, 4) + 14 * g(E, 2) - 58 * g(E, 2) * g(L, 2)) + u, y: w + h };
  }
  [V0(130)](e, x, n, a = 0, s = 5e5, r = 0) {
    const i = V0, { a: o, e: c, e1: l } = this, u = 1, h = n, f = s, d = r, p = a, m = (1 - j0(1 - g(c, 2))) / (1 + j0(1 - g(c, 2))), v = (x - d) / u, T = v / (o * (1 - g(c, 2) / 4 - 3 * g(c, 4) / 64 - 5 * g(c, 6) / 256)), k = T + (3 * m / 2 - 27 * g(m, 3) / 32) * _0(2 * T) + (21 * g(m, 2) / 16 - 55 * g(m, 4) / 32) * _0(4 * T) + 151 * g(m, 3) / 96 * _0(6 * T) + 1097 / 512 * g(m, 4) * _0(8 * T), G = o * (1 - g(c, 2)) / j0(g(1 - g(c * _0(k), 2), 3)), V = o / j0(1 - g(c * _0(k), 2)), A = g(z2(k), 2), F = (e - f) / (u * V), R = g(l, 2) * g(i0(k), 2), L = k - V * Math[i(113)](k) / G * (g(F, 2) / 2 - (5 + 3 * A + 10 * R - 9 * A * R - 4 * g(R, 2) - 9 * g(l, 2)) * g(F, 4) / 24 + (61 + 90 * A + 45 * g(A, 2) - 256 * g(l, 2) - 3 * g(R, 2)) * g(F, 6) / 720);
    return { longitude: (h * Math.PI / 180 + 1 / i0(k) * (F - (1 + 2 * A + R) * g(F, 3) / 6 + (5 - 2 * R + 28 * A - 3 * g(R, 2) + 8 * g(l, 2) + 24 * g(A, 2)) * g(F, 5) / 120)) * 180 / Math.PI, latitude: L * 180 / Math.PI + p };
  }
}
const ax = qn;
(function(t, e) {
  const x = qn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(275)) / 1 * (-parseInt(x(255)) / 2) + -parseInt(x(257)) / 3 + -parseInt(x(262)) / 4 * (-parseInt(x(258)) / 5) + -parseInt(x(272)) / 6 * (-parseInt(x(267)) / 7) + parseInt(x(263)) / 8 * (-parseInt(x(260)) / 9) + parseInt(x(269)) / 10 + parseInt(x(264)) / 11 * (parseInt(x(268)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Re, 115555);
const X = 2.999999, $n = { font: ax(256), fillColor: W.WHITE, outlineColor: W[ax(271)], outlineWidth: 4, style: j2[ax(273)], disableDepthTestDistance: Number[ax(259)] };
function Oe(t, e) {
  const x = ax;
  return { positions: t, width: 0.5, material: N[x(261)](x(266), { color: e }) };
}
function Ve(t, e, x, n = !0) {
  const a = ax;
  return t[a(270)][a(265)]({ ...t._labelOptions, position: e, text: x, horizontalOrigin: n ? wt[a(274)] : wt[a(274)] });
}
const ex = [1e5, 5e4, 1e4, 5e3, 1e3, 500, 100, 50, 10, 5, 1];
function Zn(t, e = 0) {
  return !ex[e] || ex[e] === 1 ? 1 : t / ex[e] > 10 ? ex[e] : t / ex[e] > 3 ? ex[e + 1] : Zn(t, e + 2);
}
function Hs(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function qn(t, e) {
  return t = t - 255, Re()[t];
}
function Re() {
  const t = ["1zDdiAP", "160510fNLvAy", "bold 1rem Arial", "311967WcDNHk", "10iUHREV", "POSITIVE_INFINITY", "48753PnWFxT", "fromType", "11212QRIcBD", "312jXmCmu", "17215okafOv", "add", "Color", "7FaiXTJ", "1212NnrESv", "1663240iTHTIj", "_labels", "BLACK", "123342kBbHHM", "FILL_AND_OUTLINE", "CENTER"];
  return Re = function() {
    return t;
  }, Re();
}
function ze() {
  const t = ["_polylines", "_collection", "17473005MgKcRW", "removeAll", "_labels", "3suQGLG", "53106FsJsmT", "3807788bDNieD", "120457mFUWjg", "3609820tAUAuf", "2OJKhnS", "add", "push", "show", "424grjsUO", "121266XwETSP", "9710630DESakO", "413ISFHxs"];
  return ze = function() {
    return t;
  }, ze();
}
const a0 = c2;
(function(t, e) {
  const x = c2, n = t();
  for (; ; )
    try {
      if (parseInt(x(179)) / 1 * (parseInt(x(163)) / 2) + parseInt(x(176)) / 3 * (-parseInt(x(178)) / 4) + parseInt(x(162)) / 5 + parseInt(x(177)) / 6 * (parseInt(x(170)) / 7) + -parseInt(x(167)) / 8 * (-parseInt(x(168)) / 9) + parseInt(x(169)) / 10 + -parseInt(x(173)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ze, 509413);
function c2(t, e) {
  return t = t - 162, ze()[t];
}
class Xn {
  constructor(e) {
    const x = c2;
    this[x(172)] = new Ra(e), this[x(171)] = [];
  }
  [a0(164)](e) {
    const x = a0, n = this._collection.add(e);
    return this[x(171)][x(165)](n), n;
  }
  [a0(174)]() {
    const e = a0;
    this[e(172)][e(174)](), this[e(171)] = [];
  }
  get [a0(166)]() {
    const e = a0;
    return this[e(172)][e(166)];
  }
  set show(e) {
    const x = a0;
    this[x(172)][x(166)] = e;
  }
}
class Jn {
  constructor() {
    const e = a0;
    this[e(172)] = new za(), this[e(175)] = [];
  }
  [a0(164)](e) {
    const x = a0, n = this[x(172)].add(e);
    return this[x(175)][x(165)](n), n;
  }
  [a0(174)]() {
    const e = a0;
    this[e(172)][e(174)](), this._labels = [];
  }
  get [a0(166)]() {
    return this[a0(172)].show;
  }
  set [a0(166)](e) {
    const x = a0;
    this[x(172)][x(166)] = e;
  }
}
function f2(t, e) {
  return t = t - 450, Ge()[t];
}
const Q = f2;
(function(t, e) {
  const x = f2, n = t();
  for (; ; )
    try {
      if (parseInt(x(485)) / 1 * (-parseInt(x(470)) / 2) + -parseInt(x(516)) / 3 + parseInt(x(459)) / 4 + parseInt(x(498)) / 5 + parseInt(x(526)) / 6 * (-parseInt(x(521)) / 7) + parseInt(x(492)) / 8 * (parseInt(x(495)) / 9) + parseInt(x(486)) / 10 * (parseInt(x(462)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ge, 765011);
const { abs: W2 } = Math;
class qo {
  constructor(e) {
    const x = f2;
    e = e ?? {}, this[x(478)] = e[x(510)], this[x(514)] = e[x(465)], this[x(473)] = e[x(487)] ?? 1e3, this[x(451)] = e.color ?? W[x(532)][x(458)](0.9), this._color2D = e[x(500)] ?? W[x(488)][x(458)](0.8), this._labelOptions = { ...$n, ...e[x(463)] }, this[x(481)] = e[x(453)] ?? 1, this[x(525)] = e[x(502)] ?? 50, this._yRange = e.xRange ?? 25, this[x(519)] = e[x(523)] ?? 0, this[x(505)] = 6, this[x(469)] = new Yn(x(522)), this[x(517)] = this[x(478)].scene[x(483)][x(530)](new K2()), this[x(504)] = this[x(517)].add(new Xn({ disableDepthTest: !0 })), this[x(506)] = this._primitives[x(530)](new Jn()), this[x(497)] = !0, this._viewer[x(529)] = this, this[x(456)]();
  }
  get [Q(482)]() {
    return this[Q(497)];
  }
  set show(e) {
    const x = Q;
    this[x(497)] !== e && (this[x(497)] = e, this[x(517)][x(482)] = e);
  }
  set [Q(465)](e) {
    const x = Q;
    z(e) && (Hs(this._center, e) || (this[x(514)] = e, this[x(501)](), this[x(474)]()));
  }
  set [Q(487)](e) {
    const x = Q;
    this[x(473)] !== e && (this[x(473)] = e, this[x(501)](), this[x(474)]());
  }
  changeSceneMode() {
    const e = Q, x = this[e(504)]._polylines, n = this[e(478)].scene[e(480)] === p0[e(479)] ? this[e(451)] : this[e(489)];
    x[e(512)] > 0 && x.forEach((a) => {
      const s = e;
      a.material[s(491)][s(461)] = n;
    });
  }
  init() {
    const e = Q, x = this._viewer[e(518)];
    this._cameraListener = x.camera[e(477)][e(455)](() => {
    });
  }
  update() {
    const e = Q, x = this[e(504)]._polylines;
    if (x[e(512)] === 0) return;
    const n = this[e(478)][e(518)], a = this[e(506)][e(506)];
    let s = n[e(515)](a[0][e(476)]), r = n[e(515)](a[1].position);
    z(s) && z(r) ? this[e(506)][e(482)] = Y.distance(s, r) >= 100 : this._labels[e(482)] = !0, s = n[e(515)](x[0][e(528)][0]), r = n[e(515)](x[0].positions[1]), z(s) && z(r) ? this[e(504)][e(482)] = Y[e(499)](s, r) >= 4 : this._lines[e(482)] = !0;
  }
  create() {
    const e = Q;
    this[e(504)][e(452)](), this[e(506)][e(452)]();
    const x = this[e(505)], { west: n, east: a, north: s, south: r } = this[e(501)]();
    let i = parseInt(W2(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let o = parseInt(W2(a) / x + 1) * x - 3;
    switch (o = a > 0 ? o : -o, o - i) {
      case 24:
        this[e(472)](i, n, i + X, s, r), this[e(472)](i + 6, i + 3, i + 6 + X, s, r), this._drawLines(i + 12, i + 9, i + 12 + X, s, r), this._drawLines(i + 18, i + 15, i + 18 + X, s, r), this[e(472)](o, o - 3, a, s, r);
        break;
      case 18:
        this[e(472)](i, n, i + X, s, r), this[e(472)](i + 6, i + 3, i + 6 + X, s, r), this[e(472)](i + 12, i + 9, i + 12 + X, s, r), this[e(472)](o, o - 3, a, s, r);
        break;
      case 12:
        this[e(472)](i, n, i + X, s, r), this[e(472)](i + 6, i + 3, i + 6 + X, s, r), this._drawLines(o, o - 3, a, s, r);
        break;
      case 6:
        this[e(472)](i, n, i + X, s, r), this[e(472)](o, i + 3, a, s, r);
        break;
      case 0:
        this[e(472)](i, n, a, s, r);
        break;
    }
  }
  [Q(472)](e, x, n, a, s) {
    const r = Q;
    let i = e - 3;
    i = x < i ? i : x;
    let o = e + X;
    o = n > o ? o : n;
    const { x: c, y: l } = this[r(469)]._getXY(i, s, e), { x: u, y: h } = this[r(469)][r(490)](o, a, e), f = this[r(473)], d = (parseInt(c / f) - 1) * f, p = (parseInt(u / f) + 1) * f, m = (parseInt(l / f) - 1) * f, v = (parseInt(h / f) + 1) * f, T = this[r(478)].scene[r(480)] === p0.SCENE3D ? this[r(451)] : this[r(489)], k = this[r(519)];
    let G, V, A, F = 0, R = 0;
    for (let L = d; L <= p; L += f) {
      V = [], G = [];
      for (let E = m; E <= v; E += f) {
        const { longitude: w, latitude: j } = this._gaussTransform._getLonLat(L, E, e);
        V[r(471)](y[r(531)](w, j)), G[r(471)]([L, E]);
      }
      this[r(504)].add(Oe(V, T)), F % (this._gap + 1) === 0 && (A = V[r(512)] - 1 - k, G[A] && Ve(this, V[A], r(484) + G[A][0])), F++;
    }
    for (let L = m; L <= v; L += f) {
      V = [], G = [];
      for (let E = d; E <= p; E += f) {
        const { longitude: w, latitude: j } = this._gaussTransform._getLonLat(E, L, e);
        V.push(y[r(531)](w, j)), G[r(471)]([E, L]);
      }
      this[r(504)][r(530)](Oe(V, T)), R % (this[r(481)] + 1) === 0 && (A = k + 1, G[A] && Ve(this, V[A], r(513) + G[A][1], !1)), R++;
    }
  }
  [Q(501)]() {
    const e = Q, [x, n] = this[e(514)], a = turf[e(464)]([x, n]), s = turf[e(511)](a, this._xRange * this[e(473)] / 2e3, -90), r = turf.destination(a, this._xRange * this[e(473)] / 2e3, 90), i = turf[e(511)](a, this[e(450)] * this[e(473)] / 2e3, 0), o = turf[e(511)](a, this[e(450)] * this._scale / 2e3, 180);
    return this._rectangle = { west: s[e(527)][e(507)][0], north: i[e(527)].coordinates[1], east: r[e(527)][e(507)][0], south: o[e(527)][e(507)][1] }, this[e(457)];
  }
  [Q(466)]() {
    const e = Q, x = this[e(478)][e(518)].camera, n = this[e(478)][e(518)].canvas, a = this._viewer[e(518)][e(524)].ellipsoid, s = 40, r = 20, i = { north: x[e(467)](new Y(n[e(508)] / 2, r), a), south: x[e(467)](new Y(n.clientWidth / 2, n.clientHeight - r), a), west: x[e(467)](new Y(s, n[e(508)] / 2), a), east: x[e(467)](new Y(n.clientHeight - s, n[e(508)] / 2), a) };
    return { north: i[e(454)] ? t0.fromCartesian(i[e(454)])[e(460)] : void 0, south: i.south ? t0[e(493)](i[e(509)]).latitude : void 0, west: i.west ? t0[e(493)](i[e(496)])[e(520)] : void 0, east: i[e(494)] ? t0[e(493)](i.east)[e(520)] : void 0 };
  }
  [Q(475)]() {
    return !1;
  }
  [Q(503)]() {
    const e = Q;
    return this[e(468)](), this._viewer[e(518)].primitives.remove(this[e(517)]), delete this[e(478)][e(529)], Lt(this);
  }
}
function Ge() {
  const t = ["south", "viewer", "destination", "length", "Y: ", "_center", "cartesianToCanvasCoordinates", "4025073LJMTMM", "_primitives", "scene", "_labelOffset", "longitude", "119eetUdF", "CGCS2000", "labelOffset", "globe", "_xRange", "221226xGsnNo", "geometry", "positions", "_measuredGraticule", "add", "fromDegrees", "WHITE", "_yRange", "_color", "removeAll", "gap", "north", "addEventListener", "init", "_rectangle", "withAlpha", "675332FeJRNw", "latitude", "color", "102751fcKPbj", "labelOptions", "point", "center", "_getScreenViewRange", "pickEllipsoid", "_cameraListener", "_gaussTransform", "14ahMEvN", "push", "_drawLines", "_scale", "create", "isDestroyed", "position", "changed", "_viewer", "SCENE3D", "mode", "_gap", "show", "primitives", "X: ", "411xNfLgv", "870CRGNgU", "scale", "GRAY", "_color2D", "_getXY", "uniforms", "1128viPiHb", "fromCartesian", "east", "76464pCMAKx", "west", "_show", "2784750ZHvvSC", "distance", "color2D", "_getExtentView", "xRange", "destroy", "_lines", "_zoneWide", "_labels", "coordinates", "clientWidth"];
  return Ge = function() {
    return t;
  }, Ge();
}
const Z = u2;
function u2(t, e) {
  return t = t - 295, We()[t];
}
(function(t, e) {
  const x = u2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(310)) / 1 + parseInt(x(352)) / 2 * (-parseInt(x(341)) / 3) + parseInt(x(297)) / 4 + -parseInt(x(339)) / 5 * (parseInt(x(322)) / 6) + -parseInt(x(344)) / 7 * (-parseInt(x(326)) / 8) + parseInt(x(312)) / 9 * (parseInt(x(351)) / 10) + parseInt(x(327)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(We, 671784);
function We() {
  const t = ["render", "forEach", "MAX_VALUE", "_screenOffsetY", "primitives", "remove", "screenOffsetY", "_color2D", "1586832yLQUje", "color2D", "_canvasResizeListener", "_labels", "1920YgKZCu", "4251005xWuyPi", "_getLonLat", "south", "_primitives", "_labelOptions", "WHITE", "_xGap", "_getXY", "screenOffsetX", "withAlpha", "show", "_viewer", "5RqyCzC", "canvas", "9FxQjYB", "pickEllipsoid", "west", "15869JmraVb", "_color", "round", "_drawLines", "container", "_labelOffset", "_lines", "643990cxWDOM", "824674dSVtZa", "destroy", "_show", "_screenOffsetX", "_getScreenViewRange", "changed", "is3DMode", "SCENE3D", "fromCartesian", "_getExtentView", "removeAll", "_zoneWide", "material", "xGap", "_centerZone", "viewer", "fromCartographicArray", "clientHeight", "_yGap", "fromDegrees", "cartesianArrayToCartographicArray", "_measuredGraticule", "labelOptions", "color", "east", "GRAY", "globe", "uniforms", "changeSceneMode", "clientWidth", "labelOffset", "3493248ANzNAi", "_gaussTransform", "push", "length", "zoneWide", "add", "resize", "north", "addEventListener", "CGCS2000", "camera", "longitude", "toDegrees", "81373hMzUNa", "scene", "63fvWnZZ", "_polylines"];
  return We = function() {
    return t;
  }, We();
}
const { abs: yt } = Math;
class Xo {
  constructor(e) {
    const x = u2;
    e = e ?? {}, this[x(338)] = e[x(367)], this[x(345)] = e[x(375)] ?? W[x(332)].withAlpha(0.5), this[x(321)] = e[x(323)] ?? W[x(377)][x(336)](0.8), this[x(363)] = e[x(301)] ?? 6, this._xGap = e[x(365)] ?? 1, this[x(370)] = e[x(365)] ?? 1, this[x(331)] = { ...$n, ...e[x(374)] }, this[x(355)] = e[x(335)] ?? 40, this._screenOffsetY = e[x(320)] ?? 20, this[x(349)] = e[x(296)] ?? 3, this._gaussTransform = new Yn(x(306)), this[x(330)] = this[x(338)][x(311)][x(318)][x(302)](new K2()), this[x(350)] = this._primitives.add(new Xn({ disableDepthTest: !0 })), this[x(325)] = this._primitives[x(302)](new Jn()), this[x(354)] = !0, this[x(366)] = void 0, this.init(), this[x(338)][x(373)] = this;
  }
  [Z(380)]() {
    const e = Z, x = this[e(350)][e(313)], n = this[e(358)]() ? this._color : this[e(321)];
    x[e(300)] > 0 && x[e(315)]((a) => {
      const s = e;
      a[s(364)][s(379)][s(375)] = n;
    });
  }
  [Z(358)]() {
    const e = Z;
    return this[e(338)][e(311)].mode === p0[e(359)];
  }
  set [Z(375)](e) {
    const x = Z;
    this.is3DMode() ? this[x(345)] = e : this._color2D = e, this[x(380)]();
  }
  get [Z(375)]() {
    const e = Z;
    return this[e(358)]() ? this[e(345)] : this[e(321)];
  }
  get [Z(337)]() {
    return this[Z(354)];
  }
  set [Z(337)](e) {
    const x = Z;
    this._show !== e && (this[x(354)] = e, this[x(330)].show = e);
  }
  init() {
    const e = Z, x = this[e(338)][e(311)];
    this._cameraListener = x[e(307)][e(357)][e(305)](() => {
      const n = e;
      this._show && this[n(314)]();
    }), this._canvasResizeListener = this[e(338)][e(348)][e(305)](e(303), () => {
      const n = e;
      this[n(354)] && this[n(314)]();
    });
  }
  [Z(314)]() {
    const e = Z;
    this._lines[e(362)](), this[e(325)].removeAll();
    const x = this[e(363)];
    let { west: n, north: a, east: s, south: r } = this[e(361)]();
    n = y0[e(309)](n), s = y0[e(309)](s), a = y0[e(309)](a), r = y0[e(309)](r);
    let i = parseInt(yt(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let o = parseInt(yt(s) / x + 1) * x - 3;
    switch (o = s > 0 ? o : -o, o - i) {
      case 24:
        this[e(347)](i, n, i + X, a, r, !0), this[e(347)](i + 6, i + 3, i + 6 + X, a, r, !0), this[e(347)](i + 12, i + 9, i + 12 + X, a, r, !0), this[e(347)](i + 18, i + 15, i + 18 + X, a, r, !0), this._drawLines(o, o - 3, s, a, r);
        break;
      case 18:
        this[e(347)](i, n, i + X, a, r, !0), this._drawLines(i + 6, i + 3, i + 6 + X, a, r, !0), this._drawLines(i + 12, i + 9, i + 12 + X, a, r, !0), this._drawLines(o, o - 3, s, a, r);
        break;
      case 12:
        this[e(347)](i, n, i + X, a, r, !0), this._drawLines(i + 6, i + 3, i + 6 + X, a, r, !0), this[e(347)](o, o - 3, s, a, r);
        break;
      case 6:
        this._drawLines(i, n, i + X, a, r, !0), this._drawLines(o, i + 3, s, a, r);
        break;
      case 0:
        this[e(347)](i, n, s, a, r);
        break;
    }
  }
  isDestroyed() {
    return !1;
  }
  [Z(353)]() {
    const e = Z;
    return this._cameraListener(), this[e(324)](), this[e(338)].scene.primitives[e(319)](this[e(330)]), this._show = !1, Lt(this);
  }
  _drawLines(e, x, n, a, s, r = !1) {
    const i = Z;
    let o = e - 3;
    o = x < o ? o : x;
    let c = e + X;
    c = n > c ? c : n;
    let l = yt(parseInt(e / 6)) + 1;
    l = e > 0 ? l : 60 - l + 1;
    const { x: u, y: h } = this[i(298)][i(334)](o, s, e), { x: f, y: d } = this[i(298)]._getXY(c, a, e), p = Zn(d - h, 0), m = (parseInt(u / p) - 1) * p, v = (parseInt(f / p) + 1) * p, T = (parseInt(h / p) - 1) * p, k = (parseInt(d / p) + 1) * p, G = (v - m) / p, V = (k - T) / p, A = this._labelOffset;
    let F, R, L, E = 0, w = 0;
    const j = this[i(338)][i(311)].mode === p0.SCENE3D ? this[i(345)] : this._color2D;
    for (let K = m; K <= v; K += p) {
      R = [], F = [];
      for (let C = T; C <= k; C += p) {
        const { longitude: b, latitude: _ } = this[i(298)][i(328)](K, C, e);
        R[i(299)](y[i(371)](b, _)), F[i(299)]([K, C]);
      }
      !(G - E < 2 && r) && (this._lines[i(302)](Oe(R, j)), E % (this[i(333)] + 1) === 0 && (L = R.length - 1 - A, F[L] && Ve(this, R[L], "" + l + F[L][0]))), E++;
    }
    for (let K = T; K <= k; K += p) {
      R = [], F = [], E = 0;
      for (let C = m; C <= v; C += p) {
        if (!(G - E < 2 && r)) {
          const { longitude: b, latitude: _ } = this._gaussTransform[i(328)](C, K, e);
          R[i(299)](y.fromDegrees(b, _));
        }
        F[i(299)]([C, K]), E++;
      }
      this[i(350)].add(Oe(R, j)), (V - w) % (this._yGap + 1) === 0 && (L = A, F[L] && Ve(this, R[L], "" + F[L][1], !1)), w++;
    }
  }
  _getExtentView() {
    const e = Z, x = this._viewer.scene[e(307)], n = this[e(338)].scene[e(340)], a = this[e(338)].scene[e(378)].ellipsoid, s = [x[e(342)](new Y(0, 0), a), x[e(342)](new Y(n[e(295)], 0), a), x.pickEllipsoid(new Y(0, n[e(369)]), a), x[e(342)](new Y(n[e(295)], n[e(369)]), a)];
    for (let r = 0; r < 4; r++)
      if (s[r] === void 0) return vx[e(316)];
    return vx[e(368)](a[e(372)](s));
  }
  _screenCenterPosition() {
    const e = Z, x = this._viewer[e(311)][e(340)], n = new Y(Math[e(346)](x.clientWidth / 2), Math.round(x[e(369)] / 2)), a = this[e(338)][e(311)][e(307)][e(342)](n);
    return a || y[e(371)](0, 0, 0);
  }
  [Z(356)]() {
    const e = Z, x = this._viewer.scene.camera, n = this[e(338)][e(311)][e(340)], a = this[e(338)][e(311)].globe.ellipsoid, s = this._screenOffsetX, r = this[e(317)], i = { north: x[e(342)](new Y(n[e(295)] / 2, r), a), south: x[e(342)](new Y(n.clientWidth / 2, n[e(369)] - r), a), west: x.pickEllipsoid(new Y(s, n.clientHeight / 2), a), east: x[e(342)](new Y(n[e(295)] - s, n[e(369)] / 2), a) };
    return { north: i[e(304)] ? t0[e(360)](i[e(304)]).latitude : void 0, south: i[e(329)] ? t0.fromCartesian(i[e(329)]).latitude : void 0, west: i[e(343)] ? t0.fromCartesian(i[e(343)])[e(308)] : void 0, east: i[e(376)] ? t0[e(360)](i.east)[e(308)] : void 0 };
  }
}
const q = l2;
(function(t, e) {
  const x = l2, n = t();
  for (; ; )
    try {
      if (parseInt(x(310)) / 1 + parseInt(x(320)) / 2 * (-parseInt(x(314)) / 3) + -parseInt(x(307)) / 4 + parseInt(x(303)) / 5 + -parseInt(x(312)) / 6 * (parseInt(x(311)) / 7) + parseInt(x(330)) / 8 * (-parseInt(x(318)) / 9) + parseInt(x(339)) / 10 * (parseInt(x(336)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fe, 826851);
function l2(t, e) {
  return t = t - 293, Fe()[t];
}
function Fe() {
  const t = ["viewer", "addOrRemove", "showSelection", "11aESXrg", "removeChild", "remove", "15029310wIznbz", "addEventListener", "getValue", "from", "set", "createIndicator", "has", "removeById", "destroy", "animateAppear", "update", "entityCache", "6309645FPtDXm", "updateIndicator", "scene", "delete", "3121308qDiJWJ", "removeAll", "appendChild", "771342NMblTk", "5845eoKbqX", "4710ZLnclB", "createElement", "12hWuRDB", "position", "add", "div", "729lpVKZu", "get", "140528aIJSIh", "isDestroyed", "isShowing", "size", "getEntities", "preUpdate", "bind", "preUpdateClose", "_indicators", "clear", "98024mcUiAc", "cesium-viewer-selectionIndicatorContainer", "viewModel"];
  return Fe = function() {
    return t;
  }, Fe();
}
class Jo {
  constructor(e) {
    const x = l2;
    this[x(333)] = e, this.entityCache = /* @__PURE__ */ new WeakSet(), this[x(328)] = /* @__PURE__ */ new Map(), this[x(305)] = this[x(333)].scene, this.preUpdateClose = this.scene[x(325)][x(340)](this[x(325)][x(326)](this));
  }
  [q(316)](e) {
    const x = q;
    if (!e || this[x(328)][x(297)](e.id)) return;
    this.entityCache[x(316)](e);
    const { indicate: n, container: a } = this[x(296)]();
    this._indicators[x(295)](e.id, [e, n, a]), n.viewModel[x(300)]();
  }
  [q(334)](e) {
    const x = q;
    if (this[x(297)](e)) {
      this[x(338)](e);
      return;
    }
    this[x(316)](e);
  }
  [q(325)](e, x) {
    const n = q;
    this._indicators.size !== 0 && this[n(328)].forEach(([a, s]) => {
      this[n(304)](x, a, s);
    });
  }
  [q(304)](e, x, n) {
    var i;
    const a = q;
    if (!this[a(302)][a(297)](x)) {
      this[a(328)][a(306)](x.id);
      return;
    }
    const s = n[a(332)];
    if (!x[a(322)] || !x.isAvailable(e)) return;
    const r = (i = x[a(315)]) == null ? void 0 : i[a(293)](e);
    r && (s[a(315)] = r, s[a(335)] = !0, s[a(301)]());
  }
  [q(296)]() {
    const e = q, x = this[e(333)].container, n = document[e(313)](e(317));
    return n.className = e(331), x[e(309)](n), { indicate: new xn(n, this[e(333)][e(305)]), container: n };
  }
  remove(e) {
    this[q(298)](e.id);
  }
  [q(298)](e) {
    const x = q, n = this[x(328)][x(319)](e);
    if (!n) return;
    const [a, s, r] = n;
    this[x(333)].container[x(337)](r), s[x(299)](), this._indicators.delete(e), this.entityCache.delete(a);
  }
  [q(308)]() {
    const e = q;
    this[e(328)].forEach(([x]) => {
      this[e(338)](x);
    }), this[e(328)][e(329)]();
  }
  [q(324)]() {
    const e = q;
    return Array[e(294)](this[e(328)].values()).map((x) => x[0]);
  }
  [q(297)](e) {
    const x = q;
    return this[x(328)][x(297)](e.id);
  }
  [q(321)]() {
    return !!this.preUpdateClose;
  }
  [q(299)]() {
    var x;
    const e = q;
    return this[e(308)](), (x = this.preUpdateClose) == null || x.call(this), this[e(327)] = null, this[e(328)][e(323)];
  }
}
function Be(t, e) {
  return t = t - 100, je()[t];
}
const tx = Be;
(function(t, e) {
  const x = Be, n = t();
  for (; ; )
    try {
      if (-parseInt(x(125)) / 1 + -parseInt(x(106)) / 2 + -parseInt(x(116)) / 3 + -parseInt(x(104)) / 4 * (parseInt(x(119)) / 5) + parseInt(x(130)) / 6 * (-parseInt(x(111)) / 7) + -parseInt(x(129)) / 8 * (-parseInt(x(108)) / 9) + parseInt(x(123)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(je, 149601);
function je() {
  const t = ["position", "remove", "destroy", "561632WEzliQ", "30ArDPSY", "indicator", "addEventListener", "viewModel", "scene", "3324HgYmvr", "viewer", "353100nhjmLP", "showSelection", "36rNYAwu", "preUpdate", "update", "21623RWSIbi", "container", "animateAppear", "appendChild", "primitive", "530250hrTIqw", "removeUpdate", "createElement", "635tjnqfi", "className", "removeEventListener", "div", "5293510xklUZe", "bindUpdate", "186284zQXCVV"];
  return je = function() {
    return t;
  }, je();
}
class Qo {
  constructor(e, x) {
    const n = Be;
    this.viewer = e, this[n(115)] = x, this.preUpdate = () => {
      var o;
      const r = n, i = this.indicator;
      if (!this[r(115)]) {
        i[r(102)].showSelection = !1;
        return;
      }
      this[r(100)][r(102)].position = (o = this.primitive) == null ? void 0 : o[r(126)], this[r(100)][r(102)][r(110)]();
    }, this[n(103)] = this[n(105)][n(103)];
    const { indicate: a, container: s } = this.createIndicator();
    a[n(102)][n(113)](), a.viewModel[n(107)] = !0, this[n(100)] = a, this[n(112)] = s, this.bindUpdate();
  }
  setPrimitive(e) {
    const x = Be;
    if (e) {
      this[x(115)] = e, this.indicator[x(102)][x(107)] = !0;
      return;
    }
    this[x(100)][x(102)].showSelection = !1;
  }
  [tx(124)]() {
    const e = tx;
    this.scene[e(109)][e(101)](this.preUpdate);
  }
  [tx(117)]() {
    const e = tx;
    this[e(103)].preUpdate[e(121)](this[e(109)]);
  }
  createIndicator() {
    const e = tx, x = this[e(105)].container, n = document[e(118)](e(122));
    return n[e(120)] = "cesium-viewer-selectionIndicatorContainer", x[e(114)](n), { indicate: new xn(n, this[e(105)][e(103)]), container: n };
  }
  destroy() {
    const e = tx;
    this.removeUpdate(), this[e(100)][e(128)](), this[e(112)][e(127)]();
  }
}
const Rx = Qn;
(function(t, e) {
  const x = Qn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(314)) / 1 * (-parseInt(x(321)) / 2) + -parseInt(x(318)) / 3 + parseInt(x(329)) / 4 * (-parseInt(x(319)) / 5) + parseInt(x(317)) / 6 * (-parseInt(x(313)) / 7) + parseInt(x(324)) / 8 + parseInt(x(323)) / 9 * (-parseInt(x(331)) / 10) + parseInt(x(316)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(He, 326368);
const Us = ["id"];
function He() {
  const t = ["baseLayer", "defaultImageryUrl", "536123smnLEV", "2175MlYDGb", "url", "9571826otEkPR", "6HKPxxk", "902745kzpdbe", "5cZzcdM", "forEach", "558oWBqKP", "div", "99wcJden", "1962240wiIKxm", "viewer-created", "c-viewer", "value", "defaultViewerConfig", "1912888gupzAL", "DEFAULT_VIEWER_NAME", "491070DQYkAk", "$slots", "default", "defaultCamera", "name", "Viewer"];
  return He = function() {
    return t;
  }, He();
}
function Qn(t, e) {
  return t = t - 309, He()[t];
}
const Ys = S0({ name: Rx(310), __name: "Viewer", props: { name: { type: String, default: () => b0[Rx(330)] }, eventList: { type: Array, default: () => [] }, defaultViewerConfig: { type: Object, default: () => {
} }, defaultCamera: { type: Object, default: () => ({ west: 90, south: 10, east: 120, north: 40 }) } }, emits: [Rx(325)], setup(t, { emit: e }) {
  const x = Rx, n = e, a = t;
  a[x(334)] && Gr(a[x(334)]);
  const s = en();
  return Fa(a[x(309)], s), Ba(() => {
    var c, l;
    const r = x, i = {};
    (c = b0.defaultImageryUrl) != null && c[r(315)] && (i[r(311)] = new Ga(new Wa(b0[r(312)])));
    const o = br(O(a.name), { ...i, ...a[r(328)] });
    s[r(327)] = o, zr(o), (l = a.eventList) == null || l[r(320)]((u) => u(o)), n("viewer-created");
  }), ot(() => {
    const r = x;
    s[r(327)] = null, Ir(a[r(309)]);
  }), (r, i) => {
    const o = x;
    return D0(), rx(o(322), { id: t[o(309)], class: o(326) }, [St(r[o(332)], o(333))], 8, Us);
  };
} }), d2 = (t, e) => {
  const x = t.__vccOpts || t;
  for (const [n, a] of e)
    x[n] = a;
  return x;
}, Kn = /* @__PURE__ */ d2(Ys, [["__scopeId", "data-v-876cb9e6"]]);
function Ue() {
  const t = ["component", "27AfSqot", "270BQoPFd", "3445967OAcStG", "33700NaHUeb", "install", "16pAEvVt", "3056rNeESq", "1858960EYpSVi", "71205zFsxSS", "3239929ejlJqw", "3066TVdXuC", "45280992USOhhm", "62DbIhMn"];
  return Ue = function() {
    return t;
  }, Ue();
}
const F2 = xa;
function xa(t, e) {
  return t = t - 284, Ue()[t];
}
(function(t, e) {
  const x = xa, n = t();
  for (; ; )
    try {
      if (parseInt(x(296)) / 1 * (-parseInt(x(291)) / 2) + parseInt(x(289)) / 3 * (-parseInt(x(285)) / 4) + parseInt(x(287)) / 5 * (-parseInt(x(294)) / 6) + -parseInt(x(295)) / 7 * (parseInt(x(284)) / 8) + -parseInt(x(293)) / 9 * (-parseInt(x(286)) / 10) + -parseInt(x(288)) / 11 + parseInt(x(290)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ue, 585650);
const ea = Kn;
ea[F2(297)] = function(t) {
  t[F2(292)]("CViewer", Kn);
};
const $s = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zs = Object.prototype.toString, qs = (t) => Zs.call(t) === "[object Object]";
function vt(t) {
  return Array.isArray(t) ? t : [t];
}
function Xs(t, e, x) {
  return Et(t, e, {
    ...x,
    immediate: !0
  });
}
const Js = $s ? window : void 0;
function Qs(t) {
  var e;
  const x = bx(t);
  return (e = x == null ? void 0 : x.$el) !== null && e !== void 0 ? e : x;
}
function Ks(...t) {
  const e = (n, a, s, r) => (n.addEventListener(a, s, r), () => n.removeEventListener(a, s, r)), x = Ot(() => {
    const n = vt(bx(t[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return Xs(() => {
    var n, a;
    return [
      (n = (a = x.value) === null || a === void 0 ? void 0 : a.map((s) => Qs(s))) !== null && n !== void 0 ? n : [Js].filter((s) => s != null),
      vt(bx(x.value ? t[1] : t[0])),
      vt(Vt(x.value ? t[2] : t[1])),
      bx(x.value ? t[3] : t[2])
    ];
  }, ([n, a, s, r], i, o) => {
    if (!(n != null && n.length) || !(a != null && a.length) || !(s != null && s.length)) return;
    const c = qs(r) ? { ...r } : r, l = n.flatMap((u) => a.flatMap((h) => s.map((f) => e(u, h, f, c))));
    o(() => {
      l.forEach((u) => u());
    });
  }, { flush: "post" });
}
const _x = ta;
(function(t, e) {
  const x = ta, n = t();
  for (; ; )
    try {
      if (-parseInt(x(492)) / 1 + -parseInt(x(486)) / 2 + -parseInt(x(493)) / 3 + parseInt(x(506)) / 4 + -parseInt(x(484)) / 5 + -parseInt(x(504)) / 6 * (-parseInt(x(482)) / 7) + parseInt(x(497)) / 8 * (parseInt(x(485)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ye, 562229);
function Ye() {
  const t = ["692989qgwpvd", "497232wBxZez", "show", "ratio", "click", "84392WTBCdw", "1:25万", "documentElement", "update:show", "distance-select", "DistanceSelect", "options", "1447578LmqChz", "1:100万", "765124YmiZGo", "21emEmOp", "1:50万", "3693170CWzCXd", "1152zcCMzV", "211492DobmNz", "map", "label", "1:5万", "1:1400万", "select"];
  return Ye = function() {
    return t;
  }, Ye();
}
function ta(t, e) {
  return t = t - 482, Ye()[t];
}
const xi = S0({ name: _x(502), __name: _x(501), props: { show: { type: Boolean, default: !1 }, x: { type: Number, default: 0 }, y: { type: Number, default: 0 } }, emits: [_x(500), _x(491)], setup(t, { emit: e }) {
  const x = _x, n = e, a = [{ ratio: 1, label: x(490), height: 46248.83085151955 }, { ratio: 4, label: x(505), height: 109404.75765483479 }, { ratio: 5, label: x(483) }, { ratio: 13.5, label: x(498) }, { ratio: 60, label: x(489) }, { ratio: 200, label: "1:1万" }], s = (c) => {
    n("select", c);
  }, r = a[x(487)]((c) => {
    const l = x;
    return { key: c[l(495)], label: c[l(488)], props: { onClick: () => s(c.ratio) } };
  }), i = () => {
    n(x(500), !1);
  }, o = Ks(document[x(499)], x(496), i);
  return ot(() => {
    o();
  }), (c, l) => {
    const u = x, h = Rt("n-dropdown");
    return D0(), zt(h, { options: Vt(r), show: t[u(494)], x: t.x, y: t.y }, null, 8, [u(503), u(494), "x", "y"]);
  };
} }), $e = qe;
(function(t, e) {
  const x = qe, n = t();
  for (; ; )
    try {
      if (-parseInt(x(178)) / 1 * (-parseInt(x(167)) / 2) + parseInt(x(162)) / 3 + parseInt(x(180)) / 4 * (-parseInt(x(181)) / 5) + parseInt(x(175)) / 6 * (parseInt(x(169)) / 7) + -parseInt(x(161)) / 8 * (-parseInt(x(176)) / 9) + parseInt(x(182)) / 10 * (parseInt(x(170)) / 11) + -parseInt(x(183)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ze, 444911);
function Ze() {
  const t = ["8682kakBpc", "error", "14NTQJGt", "590887mTOxoX", ".distance-legend", "value", "mouseenter", "warn", "1640208LcPggg", "13077whkYSf", "width", "167ZTQArs", "CNavigation", "8owIOFU", "2124310sbtUzr", "110POoPoc", "14841096gzDEdn", "1448UgmMsc", "1217490aGaerl", "请先开启navigation 功能", "enableDistanceLegend", "show", "install"];
  return Ze = function() {
    return t;
  }, Ze();
}
function qe(t, e) {
  return t = t - 161, Ze()[t];
}
const na = S0({ name: $e(179), props: { duration: { type: Number, default: 3 }, enableCompass: { type: Boolean, default: !0 }, enableZoomControls: { type: Boolean, default: !0 }, enableDistanceLegend: { type: Boolean, default: !1 }, enableCompassOuterRing: { type: Boolean, default: !0 }, resetTooltip: { type: String, default: "重置" }, zoomInTooltip: { type: String, default: "放大" }, zoomOutTooltip: { type: String, default: "缩小" }, defaultResetView: { type: Object, default: void 0 }, orientation: { type: Object, default: void 0 } }, setup(t) {
  const e = $e, x = en(), n = (r) => {
    const i = qe, o = x[i(172)];
    if (!o) {
      console[i(174)](i(163));
      return;
    }
    o.navigationViewModel.showCompass = r;
  };
  Et(() => t.enableCompass, (r) => {
    n(r);
  });
  const a = (r) => {
    const i = qe, o = x[i(172)];
    if (!o) {
      console[i(168)](i(163));
      return;
    }
    o.distanceLegendViewModel[i(164)] = r;
  }, s = ja({ show: !1, x: 0, y: 0 });
  return Et(() => t[e(164)], (r) => {
    a(r);
  }), w0((r) => {
    const i = e;
    x[i(172)] = new Ka(r, t), tn(() => {
      const o = i, c = document.querySelector(o(171));
      if (!c) return;
      const l = () => {
        const u = o, h = c.getBoundingClientRect();
        s.x = h.x + h[u(177)] / 2, s.y = h.y, s[u(165)] = !0;
      };
      c.addEventListener(o(173), l);
    });
  }), () => Ha(xi, { show: s[e(165)], x: s.x, y: s.y, "onUpdate:show": (r) => s[e(165)] = r, onSelect: (r) => {
    const i = e;
    s[i(165)] = !1, En(r);
  } });
} }), aa = na;
aa[$e(166)] = function(t) {
  const e = $e;
  t.component(e(179), na);
};
const Sx = ra;
(function(t, e) {
  const x = ra, n = t();
  for (; ; )
    try {
      if (parseInt(x(325)) / 1 * (parseInt(x(319)) / 2) + -parseInt(x(311)) / 3 + parseInt(x(318)) / 4 + parseInt(x(317)) / 5 + parseInt(x(314)) / 6 + parseInt(x(324)) / 7 + -parseInt(x(321)) / 8 * (parseInt(x(306)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xe, 483986);
function Xe() {
  const t = ["value", "c-info-popup-content", "$slots", "--left-pos", "position", "span", "style", "header", "map", "reverse", "default", "--top-pos", "13634505GfEQdq", "InfoPopup", "c-info-popup-header", "getById", "InfoPopupRef", "1529607NflzZj", "close", "getValue", "2329260vBLxLM", "c-info-popup-close", "equals", "4044215IgeRDR", "1060632YhGyoX", "3062yXZOzT", "data", "8wocFnW", "div", "level", "5654271wfeEgT", "156IdwtIH", "setProperty", "cartesianToCanvasCoordinates", "c-info-popup"];
  return Xe = function() {
    return t;
  }, Xe();
}
const ei = { class: Sx(308) }, ti = { class: Sx(295) };
function ra(t, e) {
  return t = t - 295, Xe()[t];
}
const ni = S0({ name: Sx(307) }), ai = S0({ ...ni, props: { data: { type: Object, default: null } }, emits: [Sx(312)], setup(t, { emit: e }) {
  const x = Sx;
  Ua((u) => ({ v0aa32d4e: i[x(329)] }));
  const n = e, a = t, s = () => {
    n(x(312));
  }, r = Cx({ label: "⅀", level: 1400 });
  ["⅀", "⅀", "⅀", "⅀", "⅀"][x(303)]()[x(302)]((u, h) => ({ label: u, key: u, props: { onClick() {
    r.value = { label: u, level: 1e3 + 100 * h };
  } } }));
  const i = Ot(() => r[x(329)][x(323)]), o = Cx();
  let c;
  const l = fn((u, h) => {
    var k, G;
    const f = x;
    if (!a[f(320)]) return;
    const { source: d, id: p } = a.data, m = C0(d), v = m == null ? void 0 : m.entities[f(309)](p);
    if (!(v != null && v.position)) {
      s();
      return;
    }
    const T = u[f(327)](v[f(298)][f(313)](h));
    c && Y[f(316)](c, T) || (c = T, c != null && c.x && ((k = o[f(329)]) == null || k[f(300)][f(326)](f(297), c.x + "px")), c != null && c.y && ((G = o.value) == null || G[f(300)][f(326)](f(305), c.y + "px")));
  });
  return Ya(() => {
    l == null || l();
  }), (u, h) => {
    const f = x;
    return t[f(320)] ? (D0(), rx(f(322), { key: 0, ref_key: f(310), ref: o, class: f(328) }, [T0(f(322), ei, [St(u[f(296)], f(301), {}, () => [T0("span", null, Gt(t[f(320)].name), 1), T0(f(299), null, [T0(f(299), { class: f(315), onClick: s }, "✕")])], !0)]), T0(f(322), ti, [St(u[f(296)], f(304), {}, void 0, !0)])], 512)) : $a("", !0);
  };
} }), sa = /* @__PURE__ */ d2(ai, [["__scopeId", "data-v-1ee4c4c9"]]);
function ia(t, e) {
  return t = t - 370, Je()[t];
}
function Je() {
  const t = ["CInfoPopup", "236269NZWflF", "4bGEQAk", "93772HtJcRj", "3096uBSTAH", "764592GRSGuq", "component", "1024443lcxnWR", "2597675tWlLeX", "4881688FYTFDR", "37260pDrVGV", "6HtuLPH"];
  return Je = function() {
    return t;
  }, Je();
}
(function(t, e) {
  const x = ia, n = t();
  for (; ; )
    try {
      if (parseInt(x(375)) / 1 * (parseInt(x(373)) / 2) + -parseInt(x(381)) / 3 + -parseInt(x(376)) / 4 * (parseInt(x(370)) / 5) + -parseInt(x(379)) / 6 + parseInt(x(377)) / 7 + -parseInt(x(371)) / 8 + -parseInt(x(378)) / 9 * (-parseInt(x(372)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Je, 405288);
const oa = sa;
oa.install = function(t) {
  const e = ia;
  t[e(380)](e(374), sa);
};
const ri = U0;
function Qe() {
  const t = ["590ikciwg", "c-cesium-rightmenu", "bottom-start", "92205aTFXBL", "1njxCEc", "getBoundingClientRect", "6514044mehezU", "2290302vdKVho", "33gmoVMe", "position", "manual", "4142257dGTkoX", "CRightMenu", "25295gEzHjw", "show", "6fHsHKC", "4996896LbsoLO", "value", "1577956rccXZY", "isShow", "prevent", "236WCAbdh", "some", "options"];
  return Qe = function() {
    return t;
  }, Qe();
}
(function(t, e) {
  const x = U0, n = t();
  for (; ; )
    try {
      if (parseInt(x(228)) / 1 * (-parseInt(x(218)) / 2) + -parseInt(x(231)) / 3 + -parseInt(x(221)) / 4 * (parseInt(x(213)) / 5) + parseInt(x(215)) / 6 * (-parseInt(x(211)) / 7) + parseInt(x(216)) / 8 + parseInt(x(227)) / 9 * (parseInt(x(224)) / 10) + -parseInt(x(208)) / 11 * (-parseInt(x(230)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qe, 414934);
function U0(t, e) {
  return t = t - 208, Qe()[t];
}
const ca = S0({ name: ri(212), __name: "right-menu", setup(t) {
  const e = li(), { executeFilter: x } = e, { eventList: n, rightClickEvent: a, menuOptions: s, cachePosition: r, posOffset: i, isShow: o } = xr(e), c = Ot(() => {
    const p = U0;
    return o[p(217)] && s[p(217)][p(222)]((m) => {
      var v;
      return (v = m == null ? void 0 : m[p(219)]) == null ? void 0 : v.call(m, { data: m, position: r[p(217)] });
    });
  }), l = Cx(0), u = Cx(0), h = Ht(async (p) => {
    const m = U0;
    o.value = !1;
    const v = p.position[m(209)], T = bx(i);
    x(v);
    const k = yr(), G = k[m(229)]();
    l[m(217)] = v.x + G.x - T.x, u[m(217)] = v.y + G.y - T.y, a[m(217)].forEach((V) => V({ position: v })), await tn(), o.value = !0;
  }, { isEntity: !0 }), f = q0(() => {
    const p = U0;
    o[p(217)] = !1;
  }), d = (p, m) => {
    var T, k;
    const v = U0;
    (k = (T = n[v(217)])[p]) == null || k.call(T, { ...m, position: r }), o[v(217)] = !1;
  };
  return ot(() => {
    h(), f();
  }), (p, m) => {
    const v = U0, T = Rt("n-dropdown");
    return D0(), zt(T, { class: v(225), placement: v(226), trigger: v(210), show: c[v(217)], options: Vt(s), x: l[v(217)], y: u[v(217)], onContextmenu: m[0] || (m[0] = Za(() => {
    }, [v(220)])), onSelect: d }, null, 8, [v(214), v(223), "x", "y"]);
  };
} }), B2 = fa;
function fa(t, e) {
  return t = t - 110, Ke()[t];
}
(function(t, e) {
  const x = fa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(121)) / 1 + parseInt(x(117)) / 2 * (-parseInt(x(122)) / 3) + parseInt(x(119)) / 4 + parseInt(x(116)) / 5 + -parseInt(x(118)) / 6 + parseInt(x(120)) / 7 * (parseInt(x(112)) / 8) + parseInt(x(113)) / 9 * (parseInt(x(110)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ke, 284523);
function Ke() {
  const t = ["139779pjAHwy", "1690pTLTUg", "install", "592CqafcL", "13032FgHXKq", "CRightMenu", "component", "1129715tdAQZG", "4ZqsGcD", "652698bHueiz", "350028stGYBN", "42756UjihJv", "523662TPVtuW"];
  return Ke = function() {
    return t;
  }, Ke();
}
const ua = ca;
ua[B2(111)] = function(t) {
  const e = B2;
  t[e(115)](e(114), ca);
};
function xt() {
  const t = ["1044rvMrVR", "184TfZClU", "length", "1kHsnBG", "setEndPoints", "cartesianToCartographic", "3029980KEGnFb", "1078855ftpEpo", "clientWidth", "4907UxTHGI", "426JMaJVj", "558364VBeduX", "change", "preUpdate", "ellipsoid", "c-scale__bar", "getPickRay", "value", "3294rUZhDK", "globe", "camera", "clientHeight", "15496eGNvZA", "removeEventListener", "changed", "surfaceDistance", "scene", "11OEEoLt", "pick", "requestRender", "c-scale", "count", "34551tVEpeH", "canvas", "updateType", "div", "label", "barWidth", " km", "204295TTbjhx", "addEventListener", "postUpdate"];
  return xt = function() {
    return t;
  }, xt();
}
const la = Y0;
function Y0(t, e) {
  return t = t - 168, xt()[t];
}
(function(t, e) {
  const x = Y0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(205)) / 1 * (-parseInt(x(171)) / 2) + parseInt(x(170)) / 3 * (-parseInt(x(182)) / 4) + -parseInt(x(209)) / 5 + parseInt(x(178)) / 6 * (-parseInt(x(169)) / 7) + parseInt(x(203)) / 8 * (parseInt(x(192)) / 9) + -parseInt(x(208)) / 10 * (parseInt(x(187)) / 11) + -parseInt(x(202)) / 12 * (-parseInt(x(199)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xt, 280958);
const si = { class: la(190) }, ii = { class: "c-scale__label" }, oi = S0({ name: "CScale" }), ci = S0({ ...oi, props: { count: { type: Number, default: 3 }, updateType: { type: String, default: la(172) } }, setup(t) {
  const e = t, x = [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 3e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 2e7, 3e7, 5e7], n = Cx([]), a = new At(), s = (o) => {
    const c = Y0, l = o[c(193)][c(168)], u = o[c(193)][c(181)], h = o[c(180)][c(176)](new Y(l / 2 | 0, u - 1)), f = o[c(180)][c(176)](new Y(1 + l / 2 | 0, u - 1)), d = o[c(179)], p = d.pick(h, o), m = d[c(188)](f, o);
    if (!z(p) || !z(m)) {
      n[c(177)] = [];
      return;
    }
    const v = d[c(174)][c(207)](p), T = d[c(174)][c(207)](m);
    a[c(206)](v, T);
    const k = a[c(185)], G = 100;
    let V;
    for (let A = x[c(204)] - 1; !z(V) && A >= 0; --A)
      if (x[A] / k < G) {
        V = x[A];
        break;
      }
    if (!z(V)) {
      n[c(177)] = [];
      return;
    }
    r(V, k);
  }, r = (o, c) => {
    const l = Y0;
    let u = o, h = " m";
    o >= 1e3 && (u = o / 1e3, h = l(198));
    const f = [];
    for (let d = 1; d <= e[l(191)]; d++)
      f.push({ label: u * d + h, barWidth: o / c | 0 });
    n[l(177)] = f;
  };
  let i;
  return w0((o) => {
    const c = Y0, l = () => {
      const u = Y0;
      s(o[u(186)]), n[u(177)][u(204)] ? o[u(186)][u(201)][u(183)](l) : o.scene[u(189)]();
    };
    if (o[c(186)][c(201)][c(200)](l), e[c(194)] === c(172)) {
      i = o[c(180)][c(184)][c(200)](() => s(o[c(186)]));
      return;
    }
    i = o[c(186)][c(173)][c(200)](s);
  }), ot(() => {
    i == null || i();
  }), (o, c) => {
    const l = Y0;
    return qa((D0(), rx("div", si, [(D0(!0), rx(nn, null, an(n[l(177)], (u) => {
      const h = l;
      return D0(), rx(h(195), { key: u[h(196)] }, [T0(h(195), ii, Gt(u[h(196)]), 1), T0(h(195), { class: h(175), style: Xa({ width: u[h(197)] + "px" }) }, null, 4)]);
    }), 128))], 512)), [[Ja, !!n[l(177)].length]]);
  };
} }), p2 = /* @__PURE__ */ d2(ci, [["__scopeId", "data-v-9c905d0b"]]), da = h2;
(function(t, e) {
  const x = h2, n = t();
  for (; ; )
    try {
      if (parseInt(x(188)) / 1 + -parseInt(x(182)) / 2 + parseInt(x(193)) / 3 * (-parseInt(x(189)) / 4) + -parseInt(x(181)) / 5 * (parseInt(x(191)) / 6) + parseInt(x(195)) / 7 + -parseInt(x(194)) / 8 + parseInt(x(177)) / 9 * (parseInt(x(192)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(et, 318599);
function h2(t, e) {
  return t = t - 177, et()[t];
}
const fi = [da(178)], ui = S0({ name: "ScaleWithSelect" }), pa = S0({ ...ui, setup(t) {
  const e = da, x = (a) => {
    const s = h2;
    En(a[s(185)]), console[s(180)](s(179), a);
  }, n = [{ ratio: 1, label: e(187) }, { ratio: 4, label: e(186) }, { ratio: 5, label: "1:50万" }, { ratio: 13.5, label: "1:25万" }, { ratio: 60, label: "1:5万" }, { ratio: 200, label: e(190) }];
  return (a, s) => {
    const r = e, i = Rt("el-popover");
    return D0(), zt(i, b2(m2(a[r(183)].popover)), { reference: I2(() => [Qa(p2, b2(m2(a[r(183)])), null, 16)]), default: I2(() => [T0(r(184), null, [(D0(), rx(nn, null, an(n, (o) => {
      const c = r;
      return T0(c(184), { key: o[c(185)], onClick: (l) => x(o) }, Gt(o[c(196)]), 9, fi);
    }), 64))])]), _: 1 }, 16);
  };
} });
function et() {
  const t = ["204MkZFYA", "2389392SpNYhd", "1237271kMcPCl", "label", "7843401NPXzcQ", "onClick", "data", "log", "15nwCAaR", "946112UbfnLz", "$attrs", "div", "ratio", "1:100万", "1:1400万", "422492vchsnq", "12676HFuLHT", "1:1万", "329826fxjjrh", "10gyjqnb"];
  return et = function() {
    return t;
  }, et();
}
const tt = _a;
(function(t, e) {
  const x = _a, n = t();
  for (; ; )
    try {
      if (parseInt(x(492)) / 1 + parseInt(x(486)) / 2 * (parseInt(x(488)) / 3) + -parseInt(x(493)) / 4 * (parseInt(x(494)) / 5) + parseInt(x(487)) / 6 + -parseInt(x(491)) / 7 + -parseInt(x(495)) / 8 * (parseInt(x(496)) / 9) + -parseInt(x(485)) / 10 * (-parseInt(x(498)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(nt, 130415);
const ha = p2;
ha[tt(490)] = function(t) {
  const e = tt;
  t.component(e(497), p2);
};
function _a(t, e) {
  return t = t - 485, nt()[t];
}
const ba = pa;
ba[tt(490)] = function(t) {
  const e = tt;
  t.component(e(489), pa);
};
function nt() {
  const t = ["CScaleSelect", "install", "1086981QqdncY", "223008GUBUmY", "4cQhEMu", "471785zraboe", "11520xdWCEA", "1296ldgaII", "CScale", "160523wsFizh", "40nAjtLQ", "2JMfiNQ", "325632BwdLCl", "755289lrNhAw"];
  return nt = function() {
    return t;
  }, nt();
}
const R0 = ma;
(function(t, e) {
  const x = ma, n = t();
  for (; ; )
    try {
      if (-parseInt(x(372)) / 1 * (parseInt(x(380)) / 2) + parseInt(x(382)) / 3 + parseInt(x(385)) / 4 * (-parseInt(x(371)) / 5) + parseInt(x(374)) / 6 + -parseInt(x(384)) / 7 + parseInt(x(369)) / 8 + parseInt(x(386)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(at, 885943);
function at() {
  const t = ["2996RsZBst", "1963035VMtWNy", "entityOption", "10236816UZHPdg", "key", "10610QISVjD", "87299fOmsHD", "forEach", "7268580yPXhPW", "clear", "replace", "values", "situationRightMenu", "warn", "18kqMrGq", "右键菜单的key必须是唯一值 ", "4154277SyLvky", "emptyOption", "5830258VhfeLK"];
  return at = function() {
    return t;
  }, at();
}
function ma(t, e) {
  return t = t - 368, at()[t];
}
const Ko = rn(R0(378), { state() {
  return { rightMenuSelectData: null, menuShow: !1, menuX: 0, menuY: 0, cartesian2: new Y(0, 0), entityOption: {}, emptyOption: {}, rightClickCallback: /* @__PURE__ */ new Set() };
}, getters: { getterEntityMenuOptions: (t) => Object.values(t[R0(368)]), getterEmptyMenuOptions: (t) => {
  const e = R0;
  return Object[e(377)](t[e(383)]);
} }, actions: { pushEntityOption(t, e) {
  const x = R0;
  !C2(t) && (t = [t]);
  const n = this[x(368)];
  t.forEach((a) => {
    const s = x;
    if (e != null && e[s(376)]) {
      n[a[s(370)]] = a;
      return;
    }
    if (n[a[s(370)]]) {
      console.warn(s(381) + a[s(370)]);
      return;
    }
    n[a[s(370)]] = a;
  });
}, removeEntityOptionByKey(t) {
  const e = R0;
  if (Mt(t)) {
    delete this[e(368)][t];
    return;
  }
  t[e(373)]((x) => {
    const n = e;
    delete this[n(368)][x];
  });
}, pushEmptyOption(t, e) {
  const x = R0;
  !C2(t) && (t = [t]);
  const n = this[x(383)];
  t[x(373)]((a) => {
    const s = x;
    if (e != null && e[s(376)]) {
      n[a[s(370)]] = a;
      return;
    }
    if (n[a[s(370)]]) {
      console[s(379)](s(381) + a[s(370)]);
      return;
    }
    n[a[s(370)]] = a;
  });
}, removeEmptyOptionByKey(t) {
  const e = R0;
  if (Mt(t)) {
    delete this[e(383)][t];
    return;
  }
  t[e(373)]((x) => {
    const n = e;
    delete this[n(383)][x];
  });
}, clearOptions() {
  const t = R0;
  this[t(368)] = {}, this[t(383)] = {}, this.rightClickCallback[t(375)]();
} } });
(function(t, e) {
  const x = g0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(246)) / 1 * (-parseInt(x(268)) / 2) + -parseInt(x(261)) / 3 + parseInt(x(266)) / 4 * (parseInt(x(259)) / 5) + -parseInt(x(262)) / 6 + parseInt(x(248)) / 7 * (-parseInt(x(269)) / 8) + -parseInt(x(254)) / 9 + -parseInt(x(265)) / 10 * (-parseInt(x(245)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(rt, 372251);
function g0(t, e) {
  return t = t - 241, rt()[t];
}
const li = rn("cesiumRightMenu", { state() {
  return { isShow: !1, posOffset: { x: 0, y: 0 }, menuMap: { baseGroup: {}, otherGroup: {} }, eventList: {}, rightClickEvent: /* @__PURE__ */ new Set(), cachePosition: null };
}, getters: { menuOptions(t) {
  const e = g0, x = t[e(247)], n = [];
  return Object.values(x)[e(242)]((a, s) => {
    const r = e, i = Object[r(260)](a);
    i[r(249)] && (n.push(...i), s !== Object[r(260)](x)[r(249)] - 1 && n[r(257)]({ type: r(252), show: i[r(251)]((o) => o.show) }));
  }), n;
} }, actions: { setMenu(t, e) {
  const x = g0;
  !this[x(247)][t[x(256)]] && (this[x(247)][t[x(256)]] = {}), this[x(247)][t.group][t[x(244)]] = t, e && (this.eventList[t[x(244)]] = e);
}, setMenus(t) {
  const e = g0;
  t[e(242)]((x) => {
    const n = e;
    this[n(264)](x[n(250)], x[n(241)]);
  });
}, clearMenu() {
  const t = g0;
  Object[t(253)](this.menuMap)[t(242)]((e) => {
    const x = t;
    this[x(247)][e] = {};
  }), this[t(255)] = {};
}, clearByGroup(t) {
  const e = g0;
  this[e(247)][t] = {};
}, executeFilter(t) {
  const e = g0;
  t && (this.cachePosition = t);
  const x = t ?? this.cachePosition;
  Object.values(this[e(247)])[e(242)]((n) => {
    const a = e;
    Object.values(n)[a(242)]((s) => {
      var i;
      const r = a;
      s[r(267)] = ((i = s[r(263)]) == null ? void 0 : i.call(s, { data: s, position: x })) ?? !1;
    });
  });
}, setRightClick(t) {
  const e = g0;
  this[e(270)][e(243)](t);
}, setOffset(t, e) {
  this.posOffset = { x: t, y: e };
}, reset() {
  this[g0(258)]();
}, closeMenu() {
  const t = g0;
  this[t(263)] = !1;
} } });
function rt() {
  const t = ["data", "some", "divider", "keys", "1897164tSOtdb", "eventList", "group", "push", "$reset", "2445xFbGsE", "values", "153483UVGPED", "1453752hySuqa", "isShow", "setMenu", "350120ukEQKS", "4bvtNyu", "show", "55586smfSbO", "438352HWSYzE", "rightClickEvent", "event", "forEach", "add", "key", "143komOZY", "25RgvzLs", "menuMap", "35mDFfzn", "length"];
  return rt = function() {
    return t;
  }, rt();
}
function st() {
  const t = ["872wZooPM", "8541gyAYvy", "use", "818724GifHdH", "7517hwXIxX", "5XxQhzY", "4700840gpjwQs", "36XJMNzh", "1237705PUruzZ", "463992cbXvFM", "1160178ilvjNE"];
  return st = function() {
    return t;
  }, st();
}
(function(t, e) {
  const x = Ia, n = t();
  for (; ; )
    try {
      if (parseInt(x(252)) / 1 * (parseInt(x(255)) / 2) + parseInt(x(246)) / 3 + parseInt(x(251)) / 4 + -parseInt(x(253)) / 5 * (parseInt(x(247)) / 6) + parseInt(x(256)) / 7 + -parseInt(x(248)) / 8 * (-parseInt(x(249)) / 9) + -parseInt(x(254)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(st, 111460);
const xc = { install(t) {
  const e = Ia;
  t[e(250)](aa), t[e(250)](ea), t[e(250)](oa), t[e(250)](ua), t[e(250)](ha), t[e(250)](ba);
} };
function Ia(t, e) {
  return t = t - 246, st()[t];
}
(function(t, e) {
  for (var x = di, n = t(); ; )
    try {
      var a = -parseInt(x(322)) / 1 * (-parseInt(x(324)) / 2) + parseInt(x(327)) / 3 * (-parseInt(x(317)) / 4) + parseInt(x(319)) / 5 * (parseInt(x(328)) / 6) + -parseInt(x(325)) / 7 * (-parseInt(x(318)) / 8) + parseInt(x(320)) / 9 * (parseInt(x(315)) / 10) + parseInt(x(323)) / 11 * (parseInt(x(326)) / 12) + -parseInt(x(321)) / 13 * (parseInt(x(316)) / 14);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(it, 511284);
function it() {
  var t = ["282GpXKWF", "80cDkTRh", "5768vlTftd", "133264fbAQEa", "3203432XKAJDt", "42815ecKXSy", "952839TAlPxZ", "77831RSsAfZ", "407291wkmZDo", "11XVbyRb", "2pdmODY", "14xatxiW", "6643992VfAEqZ", "3YoNaUN"];
  return it = function() {
    return t;
  }, it();
}
function di(t, e) {
  t = t - 315;
  var x = it(), n = x[t];
  return n;
}
Bs();
export {
  oa as CInfoPopup,
  aa as CNavigation,
  ua as CRightMenu,
  ha as CScale,
  ba as CScaleSelect,
  ea as CViewer,
  Li as ClearViewer,
  qo as CustomMeasuredGraticule,
  hx as EllipseDiffuseMaterialProperty,
  is as GraphicType,
  Xo as MeasuredGraticule,
  Jo as MultipleSelectViewModel,
  jr as RunStepFn,
  Qo as SelectedPrimitiveModel,
  xc as SimpleCesium,
  Yo as VelocityOrientationProperty,
  Gn as VelocityVectorProperty,
  $o as VelocityVectorRotationProperty,
  Zo as WGS84GridLayer,
  Go as WGS84TransformToJ2000,
  eo as addConnectChart,
  qi as addDefaultTerrain,
  Dr as addImageryProvider,
  Nr as addTerrain,
  ys as assign,
  gi as billboardDefaultConfig,
  Ho as calculateAreaByPoints,
  Uo as calculateDestination,
  oo as cameraFlyTo,
  Vn as cartesian3ToDegrees,
  Vo as cartesian3ToDegrees2,
  Ji as changeSceneMode2D,
  Qi as changeSceneMode3D,
  Ki as changeSceneModeColumbus,
  ix as clearEntitySourceBySourceName,
  Mr as clearImageryWeak,
  zo as computedGroundDistance,
  Ro as computedGroundDistanceByDegrees,
  Fi as createCzmlSource,
  vo as createEntity,
  Sr as createEntityDatasource,
  ox as createEntitySource,
  br as createViewer,
  Hi as createWebMapServiceImageryProvider,
  kr as createWebTileMapServiceImageryProvider,
  sx as createdEventList,
  Gi as dataSourceClearEntity,
  b0 as defaultConfig,
  Tr as deleteDatasourceByName,
  Wi as deleteEntitySourceByViewer,
  mr as deleteViewerFromMap,
  Ir as destroyViewer,
  Cr as emitViewerCreated,
  Si as executeClearEvent,
  wr as executeDestroyed,
  Hr as executeFirstStepFn,
  Rr as firstPerspectiveEvent,
  io as flyToRectangle,
  _n as generateMountFn,
  Jt as generateSceneModeChange,
  To as getAllMap,
  yi as getBillboardImage,
  Z0 as getCamera,
  Cn as getCameraField,
  fo as getCameraHeight,
  jo as getCenterByPoints,
  kx as getClock,
  Ax as getClockField,
  Dt as getCoordinatesFromFeature,
  lo as getCurrentCameraPosition,
  Ur as getCurrentTimeDayJs,
  de as getCurrentTimeJulian,
  Ri as getCzmlSourceByName,
  wo as getEntityById,
  y2 as getEntityByPosition,
  ss as getEntityConstantPosition,
  Er as getEntityDatasource,
  Co as getEntityMetaData,
  kn as getEntityPosition,
  as as getEntityProperties,
  rs as getEntityPropertyByName,
  So as getEntitySampledPosition,
  C0 as getEntitySource,
  vs as getFieldByInstance,
  Ui as getImageryProviderByCode,
  Yi as getImageryProviderList,
  k0 as getImageryWeakByViewer,
  Jr as getInfinityTime,
  yo as getMultiplier,
  zi as getOrCreateEntitySource,
  vi as getPrimitiveByPosition,
  dt as getScene,
  es as getShouldAnimate,
  Kr as getSpeed,
  bo as getStartTimeDayJs,
  _o as getStartTimeJulian,
  Io as getStopTimeDayJs,
  mo as getStopTimeJulian,
  Ce as getTurfPoint,
  Bo as getTurnPolygon,
  D2 as getTwoPointsCenter,
  mt as getTwoPointsDistance,
  B as getViewer,
  vr as getViewerCanvas,
  yr as getViewerContainer,
  Tx as getViewerField,
  O as getViewerName,
  Wo as getWorldPosition,
  hn as hasEntitySource,
  Zt as hasImageryProviderByViewer,
  wi as hasPrimitiveByPosition,
  Zi as hasTerrain,
  Ni as hasViewer,
  Oi as hasViewerWithWarn,
  gr as hiddenAdvertise,
  Ar as hiddenImageryProvider,
  Lr as imageryProviderIsShow,
  C2 as isArray,
  ts as isCustomDatasource,
  ns as isCzmlDatasource,
  fx as isDataType,
  fs as isDefine,
  No as isMap,
  S2 as isNumber,
  cs as isObject,
  Oo as isSet,
  Mt as isString,
  ln as isViewer,
  or as labelDefaultConfig,
  Xi as loadOceanImageryLayer,
  Or as locationFuzzyQuery,
  n2 as nextTick,
  co as onCameraChange,
  Ci as onClearEvent,
  ki as onCtrlLeftClick,
  Ai as onCtrlLeftDown,
  hr as onDoubleClick,
  po as onFirstStep,
  Pi as onLeftClick,
  q0 as onLeftDown,
  jt as onLeftUp,
  Ut as onMouseMove,
  Di as onMoveEntity,
  Ti as onPostRender,
  fn as onPreUpdate,
  Ht as onRightClick,
  xo as onSceneChange,
  Mi as onTick,
  w0 as onViewerCreated,
  Mx as onViewerDestroyed,
  Bs as registryMaterial,
  Ei as removeAllClearEvent,
  Pr as removeAllImageryProvider,
  to as removeConnectChart,
  so as removeFirstPerspective,
  Bi as removeImageryWeak,
  zr as resetCameraController,
  $i as resetTerrain,
  a2 as screenPosToCartesian,
  $0 as screenPosToLBH,
  Rn as screenToDegrees,
  uo as setCameraHeight,
  En as setCameraScale,
  Pn as setClockValueByField,
  v2 as setCurrentTime,
  Yr as setCurrentTimeJulian,
  Gr as setDefaultCamera,
  Eo as setEntityPosition,
  ro as setFirstPerspective,
  ji as setImageryProvider,
  bn as setImageryWeak,
  no as setSelectedEntity,
  xs as setShouldAnimate,
  w2 as setSpeed,
  Zr as setStartTime,
  $r as setStartTimeJulian,
  Xr as setStopTime,
  Qr as setStopTimeInfinity,
  qr as setStopTimeJulian,
  Ii as setToken,
  ao as setTrackedEntity,
  m0 as setViewerCursor,
  dn as setViewerValueByField,
  ho as synchronizeTime,
  Fo as translateByHeight,
  nc as turfArea,
  ac as turfPolygon,
  Lo as useCreatePlaceEntity,
  Ao as useDrawEllipsisArea,
  Mo as useDrawPointArea,
  ko as useDrawPolygonArea,
  Do as useDrawPolylineArea,
  Po as useDrawRectangleArea,
  li as useRightMenu,
  Ko as useRightMenuOptionStore,
  Vi as viewerFlyTo,
  z0 as viewerMap,
  mn as visibleImageryProvider,
  go as watchCurrentTime
};
