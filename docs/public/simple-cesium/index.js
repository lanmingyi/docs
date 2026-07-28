import * as Lx from "cesium";
import { SceneMode as h0, GeographicTilingScheme as Dt, Ion as Ia, LabelStyle as H2, Color as W, HorizontalOrigin as yt, VerticalOrigin as U2, Cartesian2 as U, DefaultProxy as ga, WebMapServiceImageryProvider as ya, WebMapTileServiceImageryProvider as va, CesiumTerrainProvider as wa, EllipsoidTerrainProvider as $2, Rectangle as Ix, GeoJsonDataSource as Sa, PolylineGraphics as Ca, ArcType as Ea, Viewer as q2, Math as w0, Cartographic as n0, EllipsoidGeodesic as Pt, Ray as Y2, Cartesian3 as g, Plane as X2, IntersectionTests as Ta, defined as G, SceneTransforms as Ma, Entity as Da, ScreenSpaceEventType as A0, KeyboardEventModifier as J2, CzmlDataSource as Z2, CustomDataSource as kt, CameraEventType as Q0, Camera as Pa, Ellipsoid as Fx, JulianDate as r0, ImageryLayer as ka, UrlTemplateImageryProvider as Aa, VelocityVectorProperty as La, Event as Sx, ExtrapolationType as vt, Transforms as Oa, Matrix3 as Na, Quaternion as Va, ReferenceFrame as h2, DeveloperError as Q2, GridImageryProvider as Ra, destroyObject as At, Material as N, createPropertyDescriptor as T0, Property as l0, PolylineCollection as Ga, LabelCollection as Wa, PrimitiveCollection as K2, SelectionIndicator as xn, PolygonHierarchy as zx, ConstantProperty as gx, ConstantPositionProperty as en } from "cesium";
import { defineComponent as E0, shallowRef as tn, provide as Fa, onMounted as za, onBeforeUnmount as rt, openBlock as P0, createElementBlock as ax, renderSlot as wt, watch as St, computed as Lt, toValue as px, unref as Ot, resolveComponent as Nt, createBlock as Vt, reactive as Ba, h as ja, nextTick as nn, useCssVars as Ha, ref as yx, onUnmounted as Ua, createElementVNode as M0, toDisplayString as Rt, createCommentVNode as $a, withModifiers as qa, withDirectives as Ya, Fragment as an, renderList as rn, normalizeStyle as Xa, vShow as Ja, normalizeProps as _2, guardReactiveProps as b2, withCtx as m2, createVNode as Za, onScopeDispose as Gt } from "vue";
import Qa from "cesium-navigation-es6";
import { storeToRefs as Ka, defineStore as sn } from "pinia";
import { polygon as cn, area as xr, destination as er, featureCollection as tr, center as nr, point as Bx, midpoint as ar, distance as rr } from "@turf/turf";
import { area as Qc, polygon as Kc } from "@turf/turf";
function on(t, e) {
  return t = t - 112, jx()[t];
}
function jx() {
  const t = ["2009392ufgNZP", "/map/globe/{z}/{x}/{y}.jpg", "cesium-box", "SCENE2D", "447215dAEhuS", "345234jUZTKq", "723381pXwElp", "2407884wqEQlU", "1196292QVTawQ", "9999/12/31 23:59:59", "7RfqdGn", "1517751fNpxeR", "2ZquqHX"];
  return jx = function() {
    return t;
  }, jx();
}
const Ox = on;
(function(t, e) {
  const x = on, n = t();
  for (; ; )
    try {
      if (parseInt(x(112)) / 1 + -parseInt(x(119)) / 2 * (parseInt(x(113)) / 3) + -parseInt(x(115)) / 4 + parseInt(x(124)) / 5 + parseInt(x(114)) / 6 * (parseInt(x(117)) / 7) + -parseInt(x(120)) / 8 + parseInt(x(118)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(jx, 213256);
const b0 = { DEFAULT_VIEWER_NAME: Ox(122), defaultImageryUrl: { url: Ox(121), tilingScheme: new Dt(), minimumLevel: 0, maximumLevel: 19 }, defaultTerrainUrl: "/map/terrain/", viewerConfig: { infoBox: !1, animation: !1, homeButton: !1, geocoder: !1, shouldAnimate: !1, baseLayerPicker: !1, fullscreenButton: !1, timeline: !1, sceneMode: h0[Ox(123)], selectionIndicator: !0, navigationHelpButton: !1, sceneModePicker: !1, terrain: void 0 }, synchronizeConfig: { maxTime: 5, interval: 1e3, minSpeed: 1e-3, cacheSize: 3, defaultStopTime: Ox(116) }, eventConfig: { clickAndDbClickInterval: 100, defaultLeftClick: !0, defaultRightClick: !1, defaultClearClick: !1, defaultDoubleClick: !1, defaultMouseMove: !1, defaultLeftUp: !1, defaultLeftDown: !1 }, navigation: { duration: 3, enableCompass: !0, enableDistanceLegend: !0, enableCompassOuterRing: !0, enableZoomControls: !0 } };
function Hx() {
  var t = ["1495179FQWGZY", "5nneGyq", "1595727mLTuFO", "defaultAccessToken", "5462312edtaLs", "186480yTTXhu", "303083JszdrM", "1720492CHtloG", "130936YnbxWa"];
  return Hx = function() {
    return t;
  }, Hx();
}
(function(t, e) {
  for (var x = un, n = t(); ; )
    try {
      var a = -parseInt(x(308)) / 1 + parseInt(x(310)) / 2 + parseInt(x(311)) / 3 + -parseInt(x(309)) / 4 * (parseInt(x(303)) / 5) + -parseInt(x(307)) / 6 + -parseInt(x(304)) / 7 + parseInt(x(306)) / 8;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Hx, 254403);
function un(t, e) {
  t = t - 303;
  var x = Hx(), n = x[t];
  return n;
}
function hi(t) {
  var e = un;
  Ia[e(305)] = t;
}
const Nx = fn;
(function(t, e) {
  const x = fn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(359)) / 1 + parseInt(x(365)) / 2 + -parseInt(x(367)) / 3 + -parseInt(x(362)) / 4 * (parseInt(x(366)) / 5) + parseInt(x(363)) / 6 * (-parseInt(x(358)) / 7) + parseInt(x(357)) / 8 + parseInt(x(364)) / 9 * (-parseInt(x(368)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ux, 481552);
function fn(t, e) {
  return t = t - 357, Ux()[t];
}
const sr = { font: "14px sans-serif", pixelOffset: new U(18, 0), verticalOrigin: U2[Nx(369)], horizontalOrigin: yt[Nx(361)], fillColor: W[Nx(370)], style: H2[Nx(360)] };
function Ux() {
  const t = ["FILL_AND_OUTLINE", "LEFT", "150424NFebUs", "71886cWNtmJ", "9XHdnfw", "1027396SCRJcr", "45lJBLJn", "621081VRncdI", "162160wXpmgR", "CENTER", "WHITE", "7071288KPRmHd", "168FuLvlb", "66816SzvDrx"];
  return Ux = function() {
    return t;
  }, Ux();
}
function $x() {
  const t = ["403431eSXKDn", "4117302UANDhz", "2404zqwvaC", "42323PyxsqK", "22FhCJxV", "2638620TpWiyz", "519330bFQAKH", "1758918UljgdF", "906bEgwQv", "16zQosAY"];
  return $x = function() {
    return t;
  }, $x();
}
function ir(t, e) {
  return t = t - 438, $x()[t];
}
(function(t, e) {
  const x = ir, n = t();
  for (; ; )
    try {
      if (-parseInt(x(438)) / 1 * (-parseInt(x(439)) / 2) + -parseInt(x(443)) / 3 * (parseInt(x(447)) / 4) + -parseInt(x(440)) / 5 + parseInt(x(442)) / 6 + -parseInt(x(445)) / 7 * (parseInt(x(444)) / 8) + parseInt(x(446)) / 9 + parseInt(x(441)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($x, 443625);
const _i = { scale: 1 };
async function bi(t) {
  return t;
}
const ln = dn;
function qx() {
  const t = ["174733LjHVqP", "call", "3954006fZWTEA", "86470SjtVYC", "138ISTJoZ", "1885504vWgrTR", "8fEqOtC", "13740IzHeNr", "resolve", "26OdyHKj", "6832026SyDFYx", "14105lLRNWa", "2563sRFEDV", "then"];
  return qx = function() {
    return t;
  }, qx();
}
(function(t, e) {
  const x = dn, n = t();
  for (; ; )
    try {
      if (parseInt(x(114)) / 1 + parseInt(x(123)) / 2 * (parseInt(x(121)) / 3) + -parseInt(x(119)) / 4 + parseInt(x(125)) / 5 * (-parseInt(x(118)) / 6) + parseInt(x(116)) / 7 * (-parseInt(x(120)) / 8) + -parseInt(x(124)) / 9 + parseInt(x(117)) / 10 * (parseInt(x(112)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qx, 388793);
function dn(t, e) {
  return t = t - 112, qx()[t];
}
const I2 = Promise[ln(122)]();
function Wt(t) {
  const e = ln;
  return t ? I2[e(113)](() => t[e(115)](null, F())) : I2.then(() => F());
}
(function(t, e) {
  for (var x = st, n = t(); ; )
    try {
      var a = parseInt(x(402)) / 1 * (parseInt(x(403)) / 2) + -parseInt(x(408)) / 3 + parseInt(x(409)) / 4 * (parseInt(x(412)) / 5) + parseInt(x(410)) / 6 * (-parseInt(x(395)) / 7) + parseInt(x(411)) / 8 * (-parseInt(x(404)) / 9) + parseInt(x(406)) / 10 * (-parseInt(x(405)) / 11) + -parseInt(x(399)) / 12 * (-parseInt(x(394)) / 13);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Yx, 195867);
function mi(t) {
  return sx(t, "Map");
}
function Ii(t) {
  return sx(t, "Set");
}
function Yx() {
  var t = ["42xDMpys", "811368QFBtbB", "1095XWhBng", "1963XNZjAM", "359142qFVwZK", "call", "prototype", "String", "36348CgoKtN", "toString", "Number", "268enXXKE", "1060aZiKBl", "18NCFzag", "50567kWUBcf", "330EvJICL", "[object ", "96492nrjbQy", "6252IyLYwj"];
  return Yx = function() {
    return t;
  }, Yx();
}
function cr(t) {
  return sx(t, "Object");
}
function st(t, e) {
  t = t - 394;
  var x = Yx(), n = x[t];
  return n;
}
function g2(t) {
  return sx(t, "Array");
}
function Ct(t) {
  var e = st;
  return sx(t, e(398));
}
function y2(t) {
  var e = st;
  return sx(t, e(401));
}
function or(t) {
  return t != null;
}
function sx(t, e) {
  var x = st;
  return Object[x(397)][x(400)][x(396)](t) === x(407) + e + "]";
}
(function(t, e) {
  const x = u0, n = t();
  for (; ; )
    try {
      if (parseInt(x(526)) / 1 + -parseInt(x(532)) / 2 + -parseInt(x(530)) / 3 * (-parseInt(x(516)) / 4) + parseInt(x(508)) / 5 + parseInt(x(524)) / 6 + parseInt(x(534)) / 7 + -parseInt(x(515)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xx, 648367);
function u0(t, e) {
  return t = t - 494, Xx()[t];
}
const Et = /* @__PURE__ */ new Map();
function Xx() {
  const t = ["EPSG:4326", "591388sbGEsh", "EPSG:4326:9", "4272996OxkdIx", "EPSG:4326:11", "EPSG:4326:20", "show", "clear", "get", "EPSG:4326:2", "EPSG:4326:8", "EPSG:4326:18", "EPSG:4326:6", "EPSG:4326:4", "/proxy/", "imageryProvider", "EPSG:4326:3", "WMS", "6094460PJzERH", "EPSG:4326:10", "EPSG:4326:16", "EPSG:4326:12", "imageryLayers", "addImageryProvider", "image/png", "22237032QoBlyQ", "572QRRBUI", "EPSG:4326:21", "has", "EPSG:4326:7", "set", "EPSG:4326:14", "EPSG:4326:1", "EPSG:4326:5", "5356344rzYgmm", "scene", "132492FAIOXv", "imageLayer", "removeAll", "delete", "18234KHslIX"];
  return Xx = function() {
    return t;
  }, Xx();
}
function pn(t, e, x = V()) {
  var a;
  const n = u0;
  !k0(x) && (Et[n(520)](x, /* @__PURE__ */ new Map()), Mx(() => Et[n(529)](x), { viewerName: x })), (a = k0(x)) == null || a.set(t, e);
}
function ur(t = V()) {
  var x;
  const e = u0;
  (x = k0(t)) == null || x[e(497)]();
}
function gi(t, e = V()) {
  var n;
  const x = u0;
  (n = k0(e)) == null || n[x(529)](t);
}
function k0(t = V()) {
  return Et[u0(498)](t);
}
function fr(t, e, x = V()) {
  const n = u0, a = F(x);
  if (Ft(t, x)) return hn(t), !1;
  const s = a[n(525)][n(512)][n(513)](e);
  pn(t, { imagery: e, imageLayer: s });
}
function yi(t, e, x = V()) {
  const n = u0, a = F(x);
  if (Ft(t, x)) return !1;
  lr(x);
  const s = a.scene[n(512)].addImageryProvider(e);
  pn(t, { imagery: e, imageLayer: s });
}
function lr(t) {
  const e = u0;
  F(t).scene[e(512)][e(528)](), ur(t);
}
function vi(t) {
  const e = u0, x = { proxy: new ga(e(504)), parameters: { service: e(507), version: "1.3.0", transparent: !0, format: "image/png" }, ...t };
  return new ya(x);
}
function dr(t) {
  const e = u0;
  return new va({ tileMatrixLabels: ["EPSG:4326:0", e(522), e(499), e(506), e(503), e(523), e(502), e(519), e(500), e(533), e(509), e(494), e(511), "EPSG:4326:13", e(521), "EPSG:4326:15", e(510), "EPSG:4326:17", e(501), "EPSG:4326:19", e(495), e(517)], format: e(514), tileMatrixSetID: e(531), ...t });
}
function Ft(t, e = V()) {
  var n;
  const x = u0;
  return (n = k0(e)) == null ? void 0 : n[x(518)](t);
}
function wi(t, e = V()) {
  var x;
  return (x = k0(e)) == null ? void 0 : x.get(t);
}
const pr = _n(!1), hn = _n(!0);
function hr(t, e = V()) {
  var a;
  const x = u0, n = (a = k0(e)) == null ? void 0 : a[x(498)](t);
  return n == null ? void 0 : n.imageLayer[x(496)];
}
function _n(t) {
  return function(e, x = V()) {
    var s;
    const n = u0, a = (s = k0(x)) == null ? void 0 : s.get(e);
    a != null && a[n(527)] && (a[n(527)][n(496)] = t, a[n(527)][n(505)] && (a.imageLayer.imageryProvider[n(496)] = t));
  };
}
function Si(t = V()) {
  return k0(t);
}
(function(t, e) {
  const x = ix, n = t();
  for (; ; )
    try {
      if (-parseInt(x(442)) / 1 + -parseInt(x(435)) / 2 * (-parseInt(x(433)) / 3) + -parseInt(x(437)) / 4 * (-parseInt(x(448)) / 5) + -parseInt(x(436)) / 6 + parseInt(x(441)) / 7 + -parseInt(x(439)) / 8 * (-parseInt(x(447)) / 9) + -parseInt(x(449)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Jx, 966903);
function Jx() {
  const t = ["105905GQTppT", "26599680ZklZSm", "/vector/geoserver/gwc/service/wmts", "3ccjVBs", "global_chart", "2057194ZFHmPD", "2408052HoqxQX", "260McHpnO", "default", "132344mrlkIg", "then", "9190678Ozsoge", "368366xeuGjs", "_group", "image/png", "defaultTerrainUrl", "terrainProvider", "369jnyTJW"];
  return Jx = function() {
    return t;
  }, Jx();
}
function _r(t, e) {
  const x = ix;
  Wt()[x(440)](() => {
    const n = F(e);
    n.terrainProvider = new wa(t);
  });
}
function Ci(t) {
  const e = ix, x = F(t);
  x[e(446)] = new $2();
}
function Ei(t) {
  const e = ix;
  return !(F(t)[e(446)] instanceof $2);
}
function Ti(t) {
  _r({ url: b0[ix(445)] }, t);
}
function ix(t, e) {
  return t = t - 433, Jx()[t];
}
function Mi() {
  const t = ix, e = t(434);
  if (Ft(e)) {
    if (hr(e)) {
      pr(e);
      return;
    }
    hn(e);
  }
  const x = [-179.9999971999999, 179.9999971999999, -61.7333333, 78.3666667], n = Ix.fromDegrees(x[0], x[2], x[1], x[3]), a = dr({ url: t(450), layer: e + t(443), tilingScheme: new Dt(), format: t(444), rectangle: n, style: t(438) });
  fr(e, a);
}
function zt(t, e) {
  return t = t - 230, Zx()[t];
}
const it = zt;
(function(t, e) {
  const x = zt, n = t();
  for (; ; )
    try {
      if (parseInt(x(237)) / 1 * (parseInt(x(236)) / 2) + -parseInt(x(240)) / 3 * (-parseInt(x(250)) / 4) + parseInt(x(246)) / 5 * (-parseInt(x(244)) / 6) + parseInt(x(249)) / 7 + -parseInt(x(232)) / 8 + parseInt(x(230)) / 9 + -parseInt(x(245)) / 10 * (parseInt(x(241)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zx, 807635);
const Rx = /* @__PURE__ */ new WeakMap(), Di = Bt(h0[it(235)]), Pi = Bt(h0[it(242)]), ki = Bt(h0[it(233)]);
function Bt(t) {
  return function(e) {
    var a;
    const x = zt, n = F(e);
    n[x(248)].mode = t, (a = Rx[x(243)](n)) == null || a[x(239)]((s) => {
      s == null || s(t);
    });
  };
}
function Ai(t, e) {
  const x = it;
  Wt()[x(238)](() => {
    var s;
    const n = x, a = F(e == null ? void 0 : e.viewerName);
    !Rx[n(234)](a) && Rx[n(231)](a, /* @__PURE__ */ new Set()), (s = Rx[n(243)](a)) == null || s[n(247)](t);
  });
}
function Zx() {
  const t = ["58062pqHodz", "46kptHpe", "then", "forEach", "213aUjKRo", "14918717aGcwPe", "SCENE3D", "get", "2298612uJbPrH", "20yRraNI", "10qNnymJ", "add", "scene", "1481753AHFfSd", "82444DxXlIb", "13900824YgpaZj", "set", "2149512bLBsmE", "COLUMBUS_VIEW", "has", "SCENE2D"];
  return Zx = function() {
    return t;
  }, Zx();
}
(function(t, e) {
  const x = ct, n = t();
  for (; ; )
    try {
      if (-parseInt(x(475)) / 1 * (parseInt(x(478)) / 2) + parseInt(x(457)) / 3 + parseInt(x(460)) / 4 * (-parseInt(x(444)) / 5) + -parseInt(x(450)) / 6 + -parseInt(x(480)) / 7 + parseInt(x(449)) / 8 * (parseInt(x(446)) / 9) + parseInt(x(464)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qx, 223503);
function ct(t, e) {
  return t = t - 443, Qx()[t];
}
function Qx() {
  const t = ["reject", "1648206DnezEg", "has", "removeAll", "keys", "reverse", "65woHAcj", "application/json", "9EGJUhr", "RHUMB", "load", "3327992DfsWqA", "1816926NudusE", "/vector/geoserver/", "charts", "set", "delete", "navigational_charts", "entities", "99681OkbLLg", "polygon", "get", "4036JKxBxm", "catch", "json", "maxFeatures", "3578250kaXiGF", "GetFeature", "forEach", "polyline", "TRANSPARENT", "getValue", "remove", "then", " like '%", "RED", "features", "8038SgjeGp", "1.0.0", "add", "8ctTukW"];
  return Qx = function() {
    return t;
  }, Qx();
}
const hx = /* @__PURE__ */ new Map();
function br(t) {
  const e = ct, { workspace: x, layerName: n, searchField: a, searchValue: s, maxFeatures: r = 50 } = t, i = { version: e(476), request: e(465), outputFormat: e(445), typeName: x + ":" + n };
  r && (i[e(463)] = r), a && (i.cql_filter = encodeURIComponent(a + e(472) + s + "%'"));
  let c = "";
  Object[e(483)](i)[e(466)]((f) => {
    c += "&" + f + "=" + i[f];
  });
  const o = e(451) + x + "/ows?service=WFS" + c;
  return fetch(o)[e(471)]((f) => f[e(462)]()).then((f) => Promise.resolve(f))[e(461)]((f) => Promise[e(479)](f));
}
async function Li(t, e = V()) {
  const x = ct;
  if (hx[x(481)](e)) return;
  const n = await br({ workspace: x(452), layerName: x(455) });
  n[x(474)] = n.features[x(443)]();
  const { clampToGround: a = !0, color: s = W[x(473)], width: r = 2 } = t ?? {}, i = await Sa[x(448)](n, { clampToGround: a, fill: W[x(468)], stroke: s, strokeWidth: r });
  return a && i[x(456)].values[x(466)]((o) => {
    var l;
    const f = x;
    if (o[f(458)]) {
      const h = (l = o[f(458)].hierarchy) == null ? void 0 : l[f(469)](Ie()), u = h.positions;
      o[f(467)] = new Ca({ positions: [...u, u[0]], clampToGround: a, material: s, width: r, arcType: Ea[f(447)] });
    }
  }), F(e).dataSources[x(477)](i), hx[x(453)](e, i), i;
}
function Oi(t = V()) {
  const e = ct, x = F(t);
  if (hx.has(t)) {
    const n = hx[e(459)](t);
    n == null || n.entities[e(482)](), x.dataSources[e(470)](n, !0), hx[e(454)](t);
  }
}
const mr = bn;
(function(t, e) {
  const x = bn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(211)) / 1 * (-parseInt(x(202)) / 2) + parseInt(x(206)) / 3 + -parseInt(x(204)) / 4 * (-parseInt(x(200)) / 5) + parseInt(x(212)) / 6 + -parseInt(x(209)) / 7 * (parseInt(x(210)) / 8) + parseInt(x(203)) / 9 * (-parseInt(x(205)) / 10) + -parseInt(x(201)) / 11 * (parseInt(x(207)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Kx, 913334);
const ot = Ex(mr(208));
function bn(t, e) {
  return t = t - 200, Kx()[t];
}
function Kx() {
  const t = ["2564xsHoaT", "10iaAPrU", "1842690IEGdbg", "45636SfFcFe", "scene", "45528vfmrqR", "416hCyEtk", "278wlCYwG", "9244356vUfjBt", "13570oenHwH", "8877taqVYx", "8728qDQgkM", "7085331dUXEHn"];
  return Kx = function() {
    return t;
  }, Kx();
}
const V0 = Cx;
(function(t, e) {
  const x = Cx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(377)) / 1 * (parseInt(x(382)) / 2) + -parseInt(x(386)) / 3 + -parseInt(x(363)) / 4 + parseInt(x(366)) / 5 * (-parseInt(x(364)) / 6) + -parseInt(x(370)) / 7 * (-parseInt(x(369)) / 8) + parseInt(x(385)) / 9 * (-parseInt(x(381)) / 10) + parseInt(x(378)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xe, 883890);
const N0 = /* @__PURE__ */ new Map(), { viewerConfig: Ir } = b0;
function gr(t, e) {
  const x = Cx;
  if (N0[x(383)](t)) return console[x(365)](x(374) + t + x(380)), N0[x(375)](t);
  N0[x(376)](t, new q2(t, Lr({}, Ir, e ?? {})));
  const n = N0[x(375)](t);
  return Br(t, n), wr(n), n;
}
function F(t) {
  const e = Cx, x = t ?? b0[e(362)];
  return mn(x) ? x : N0.get(x);
}
function V(t) {
  return t ?? b0[Cx(362)];
}
function Cx(t, e) {
  return t = t - 362, xe()[t];
}
function yr(t = b0.DEFAULT_VIEWER_NAME) {
  N0.delete(t);
}
function vr(t = b0.DEFAULT_VIEWER_NAME) {
  var x;
  const e = F(t);
  zr(t), (x = F(e)) == null || x.destroy(), yr(t);
}
function Ni() {
}
function Vi(t = b0[V0(362)]) {
  return N0[V0(383)](t);
}
function Ri(t) {
  const e = V0;
  return !t || !mn(t) ? (console[e(365)]("请先创建Viewer"), !1) : !0;
}
function mn(t) {
  return t instanceof q2;
}
function xe() {
  const t = ["has", "display", "18jWlCNg", "4131918bSnUsC", "DEFAULT_VIEWER_NAME", "3776184rVcnai", "2634LNaCXt", "warn", "18405pXOJnd", "canvas", "style", "12179864nQNhIB", "7jHZLus", "none", "flyTo", "container", "名称为", "get", "set", "150536fkbFte", "58902140hpjRco", "bottomContainer", " 的视图已经存在", "8022070daiClQ", "6GUisVH"];
  return xe = function() {
    return t;
  }, xe();
}
function Ex(t) {
  return function(e) {
    return F(e)[t];
  };
}
function wr(t) {
  const e = V0, x = F(t)[e(379)];
  x[e(368)][e(384)] = e(371);
}
function Gi(t, e, x) {
  const n = V0;
  F(x)[n(372)](t, e);
}
const Sr = Ex(V0(373)), Cr = Ex(V0(367));
function m0(t = "", e) {
  const x = V0, n = Cr(e);
  n[x(368)].cursor = t;
}
function In(t) {
  return function(e, x) {
    F(x)[t] = e;
  };
}
(function(t, e) {
  const x = L0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(239)) / 1 * (parseInt(x(208)) / 2) + -parseInt(x(204)) / 3 + -parseInt(x(237)) / 4 * (-parseInt(x(212)) / 5) + parseInt(x(183)) / 6 * (-parseInt(x(230)) / 7) + -parseInt(x(213)) / 8 + parseInt(x(201)) / 9 * (-parseInt(x(225)) / 10) + -parseInt(x(185)) / 11 * (-parseInt(x(189)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ee, 749185);
function gn(t, e) {
  const x = L0, n = F(e), a = n[x(214)][x(191)][x(223)], s = a[x(218)](t);
  let r = +w0[x(195)](s[x(221)])[x(206)](6), i = +w0[x(195)](s[x(203)])[x(206)](6), c = +s[x(192)][x(206)](6);
  return Number[x(196)](r) && (r = +r[x(206)](1)), Number.isInteger(i) && (i = +i[x(206)](1)), Number.isInteger(c) && (c = +c[x(206)](1)), { longitude: Number(r), latitude: Number(i), height: Number(c) };
}
function Wi(t, e) {
  const x = L0, n = F(e), a = n[x(214)][x(191)].ellipsoid, s = a[x(218)](t);
  let r = +w0[x(195)](s[x(221)]), i = +w0[x(195)](s[x(203)]), c = +s.height;
  return Number[x(196)](r) && (r = +r), Number[x(196)](i) && (i = +i), Number[x(196)](c) && (c = +c), { longitude: Number(r), latitude: Number(i), height: Number(c) };
}
function jt(t, e) {
  const x = L0, n = F(e);
  let a = new U(t.x, t.y);
  return t instanceof MouseEvent && (a = new U(t[x(188)], t[x(200)])), n[x(228)][x(215)](a, n[x(214)][x(191)][x(223)]);
}
function U0(t, e) {
  const x = F(e), n = jt(t, x);
  if (n) return gn(n, x);
}
const yn = U0;
function Fi(t, e, x) {
  const n = L0, { longitude: a, latitude: s, height: r } = t, { longitude: i, latitude: c, height: o } = e, f = n0[n(240)](a, s, r), l = n0[n(240)](i, c, o), h = ot(x);
  return new Pt(f, l, h[n(191)].ellipsoid)[n(211)];
}
function zi(t, e, x) {
  const n = L0, a = n0.fromCartesian(t), s = n0[n(224)](e), r = ot(x), i = new Pt(a, s, r[n(191)].ellipsoid);
  return Math.floor(i[n(211)]) / 1e3;
}
function Bi(t) {
  const e = L0;
  return proj4.defs(e(202), e(187)), proj4.defs("EPSG:4610", e(233)), proj4(e(202), e(209), [t[e(221)], t[e(203)]]);
}
function ee() {
  const t = ["+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", "UNIT_X", "wgs84ToWindowCoordinates", "unproject", "200KMimZC", "getPickRay", "1192073mEPuSC", "fromDegrees", "607974nmlrJF", "cartesian", "847HnWRFX", "mode", "+proj=longlat +datum=WGS84 +no_defs", "offsetX", "722172iQhAKu", "negate", "globe", "height", "groundCartesian", "pickPosition", "toDegrees", "isInteger", "fromPointNormal", "COLUMBUS_VIEW", "pick", "offsetY", "1413747JtkBNn", "EPSG:4326", "latitude", "3058512VNsDBS", "projectVector", "toFixed", "frameState", "2cMlopK", "EPSG:4610", "direction", "surfaceDistance", "40135TqBDWz", "3990688SnSpRn", "scene", "pickEllipsoid", "subtract", "mapProjection", "cartesianToCartographic", "normalize", "rayPlane", "longitude", "project", "ellipsoid", "fromCartesian", "10fEmrQF", "fromElements", "SCENE2D", "camera", "add", "98AvpAWy", "pickPositionSupported", "cartographicToCartesian"];
  return ee = function() {
    return t;
  }, ee();
}
const Er = new Y2();
function L0(t, e) {
  return t = t - 183, ee()[t];
}
function ji(t, e) {
  const x = L0;
  if (t[x(231)] && t[x(186)] !== h0[x(227)]) return t[x(194)](e);
  if (!t[x(191)]) return;
  const n = t[x(228)][x(238)](e, Er), a = t.globe[x(199)](n, t);
  return a || t[x(228)].pickEllipsoid(e, t[x(191)][x(223)]);
}
const Tr = new g(), Mr = new U(), v2 = new g(), Dr = new Y2(), w2 = new n0();
let K0 = new g();
const Pr = new X2(g.UNIT_X, 0), kr = new g();
function Hi(t, e, x) {
  const n = L0, a = t[n(207)][n(217)][n(223)], s = x.groundCartesian;
  let r = x[n(184)].clone(), i = Pr, c = kr, o = s, f = c;
  if (t.mode === h0[n(198)]) {
    f = g[n(234)];
    const u = a.cartesianToCartographic(s, w2);
    o = t[n(217)][n(222)](u, Tr), g[n(226)](o.z, o.x, o.y, o);
  }
  let l = g.cross(f, t[n(228)][n(210)], v2);
  l = g.cross(f, l, l), l = g[n(219)](l, l), i = X2[n(197)](o, l, i);
  const h = t[n(228)][n(238)](e, Dr);
  if (r = Ta[n(220)](h, i, r), G(r)) {
    if (t[n(186)] === h0.COLUMBUS_VIEW) {
      r = g.fromElements(r.y, r.z, r.x, r);
      const u = t[n(217)][n(236)](r, w2);
      r = a[n(232)](u, r);
    }
    return Ma[n(235)](t, x[n(193)], Mr).y < e.y && (c = g[n(190)](c, v2)), K0 = g[n(216)](r, s, K0), K0 = g[n(205)](K0, c, K0), r = g[n(229)](s, K0, r), r;
  }
}
(function(t, e) {
  const x = Tx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(306)) / 1 + parseInt(x(295)) / 2 * (-parseInt(x(294)) / 3) + -parseInt(x(307)) / 4 * (-parseInt(x(308)) / 5) + -parseInt(x(297)) / 6 + -parseInt(x(302)) / 7 * (parseInt(x(301)) / 8) + -parseInt(x(300)) / 9 + parseInt(x(305)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ne, 331226);
function te(t) {
  const e = Tx;
  return Array[e(293)](t) ? Bx(t) : Bx([t[e(299)], t.latitude]);
}
function S2(t, e) {
  const x = Bx(t), n = Bx(e);
  return ar(x, n);
}
function Ui(t) {
  return cn(t);
}
function pt(t, e, x) {
  const n = te(t), a = te(e);
  return rr(n, a, x);
}
function Tx(t, e) {
  return t = t - 293, ne()[t];
}
function $i(t) {
  const e = Tx, x = t[e(304)]((a) => te(a)), n = tr(x);
  return nr(n);
}
function Tt(t) {
  const e = Tx;
  return t.geometry[e(303)];
}
function qi(t) {
  const e = Tx, x = t[e(304)]((s) => {
    const r = e;
    return [s[r(299)], s[r(296)]];
  });
  x.push([t[0][e(299)], t[0][e(296)]]);
  const n = cn([x]);
  return Math[e(298)](xr(n)) / 1e6 ?? 0;
}
function Yi(t) {
  const { origin: e, distance: x, bearing: n, options: a } = t, s = te(e), r = er(s, x, n, a);
  return Tt(r);
}
function ne() {
  const t = ["1384649mmVyyY", "coordinates", "map", "14819670UFpNTw", "465645lCbcAW", "1395464ZjUtzt", "5EqaWkQ", "isArray", "316617PJqCAU", "4cqQecj", "latitude", "388806ccxhqA", "floor", "longitude", "5042484wExyaQ", "8XkUqIo"];
  return ne = function() {
    return t;
  }, ne();
}
(function(t, e) {
  const x = Ar, n = t();
  for (; ; )
    try {
      if (-parseInt(x(159)) / 1 * (parseInt(x(157)) / 2) + parseInt(x(161)) / 3 * (parseInt(x(158)) / 4) + parseInt(x(165)) / 5 * (-parseInt(x(164)) / 6) + parseInt(x(156)) / 7 * (parseInt(x(166)) / 8) + parseInt(x(167)) / 9 + -parseInt(x(163)) / 10 * (-parseInt(x(162)) / 11) + parseInt(x(168)) / 12 * (parseInt(x(160)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ae, 763189);
function Ar(t, e) {
  return t = t - 156, ae()[t];
}
function ae() {
  const t = ["39578ohqqEu", "84RcVERd", "88EFnbLF", "10223UXwLEK", "676sGHkYt", "62355kOgtsC", "44eTFQHw", "1797610iWWjcZ", "2202QohrKm", "12475IDqqAm", "320zbKTne", "342126hGJtDa", "154092cxpoMN"];
  return ae = function() {
    return t;
  }, ae();
}
const Lr = Object.assign;
function Or(t, e) {
  return function(x) {
    return t(x)[e];
  };
}
(function(t, e) {
  const x = o0, n = t();
  for (; ; )
    try {
      if (parseInt(x(367)) / 1 * (parseInt(x(357)) / 2) + -parseInt(x(359)) / 3 + -parseInt(x(355)) / 4 * (parseInt(x(372)) / 5) + parseInt(x(351)) / 6 + -parseInt(x(373)) / 7 + -parseInt(x(362)) / 8 + parseInt(x(363)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(re, 698780);
var Nr = ((t) => {
  const e = o0;
  return t[t[e(353)] = 0] = "entityArea", t[t[e(356)] = 1] = e(356), t[t[e(365)] = 2] = e(365), t;
})(Nr || {});
const Ht = /* @__PURE__ */ new Map();
function Vr(t) {
  return t[o0(366)] ? 0 : t.isEmpty ? 1 : 2;
}
function Ut(t, e = V()) {
  const x = o0;
  return !t.has(e) && (t[x(352)](e, /* @__PURE__ */ new Map()), Mx(() => t.delete(e), { viewerName: e })), t[x(364)](e);
}
function $t(t, e, x) {
  const n = o0, a = x ? e + "_" + x : e;
  return !t[n(349)](a) && t[n(352)](a, { areaEventMap: /* @__PURE__ */ new Map(), isRegistry: !1 }), t[n(364)](a);
}
function re() {
  const t = ["primitive", "497187GqMMKs", "screenSpaceEventHandler", "from", "10310656svrYsw", "34551486NOZCbO", "get", "globalArea", "isEntity", "69001kGztgj", "drillPick", "viewerName", "MOUSE_MOVE", "forEach", "141005euiygb", "7903980WejGlr", "add", "pick", "scene", "areaEventMap", "endPosition", "has", "position", "1999560KhVtjQ", "set", "entityArea", "isRegistry", "136VSCEjf", "emptyArea", "2udaTCb"];
  return re = function() {
    return t;
  }, re();
}
function _x(t, e) {
  const x = o0;
  return !t.has(e) && t[x(352)](e, /* @__PURE__ */ new Set()), t[x(364)](e);
}
function Rr(t, e, x, n) {
  const a = o0, s = Ut(Ht, t), r = $t(s, e, n), i = r[a(377)];
  return _x(i, x);
}
function R0(t, e) {
  return function(x, n) {
    const a = Vr(n ?? {});
    return S0((s) => {
      const r = o0, i = V(n == null ? void 0 : n[r(369)]), c = Ut(Ht, i), o = $t(c, t, e), f = o.areaEventMap;
      _x(f, a)[r(374)](x), !o[r(354)] && Gr(s, i, t, e);
    }, n == null ? void 0 : n.viewerName), () => {
      const s = o0;
      Rr(V(n == null ? void 0 : n[s(369)]), t, a, e).delete(x);
    };
  };
}
function Gr(t, e, x, n) {
  const a = o0;
  t[a(360)].setInputAction((s) => {
    const r = a;
    e = V(e);
    const i = Ut(Ht, e), c = $t(i, x, n), o = c[r(377)];
    let f;
    x === A0[r(370)] && (f = C2(s[r(378)], t)), f = C2(s[r(350)], t), f ? _x(o, 0)[r(371)]((u) => u({ entity: f, position: s })) : _x(o, 1)[r(371)]((u) => u({ position: s })), _x(o, 2).forEach((h) => h({ position: s }));
  }, x, n);
}
function C2(t, e) {
  var a;
  const x = o0;
  if (!t) return null;
  const n = (a = e == null ? void 0 : e[x(376)]) == null ? void 0 : a.pick(t, 30, 30);
  return n && Wr(n == null ? void 0 : n.id) && n.id;
}
function o0(t, e) {
  return t = t - 349, re()[t];
}
function Xi(t, e) {
  const x = o0;
  if (!t) return null;
  const n = e.scene[x(375)](t);
  return n && n[x(358)];
}
function Ji(t, e) {
  const x = o0;
  if (!t) return null;
  const n = e[x(376)][x(375)](t);
  if (n != null && n[x(358)]) return n;
}
function Wr(t) {
  return t instanceof Da;
}
(function(t, e) {
  const x = vx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(466)) / 1 * (-parseInt(x(461)) / 2) + -parseInt(x(457)) / 3 + -parseInt(x(464)) / 4 * (parseInt(x(458)) / 5) + parseInt(x(471)) / 6 * (parseInt(x(467)) / 7) + -parseInt(x(473)) / 8 + parseInt(x(463)) / 9 + parseInt(x(465)) / 10 * (parseInt(x(459)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(se, 901232);
function se() {
  const t = ["166bHrVuO", "add", "9276165UMgagY", "5212XauTxG", "7062740sFgoPl", "218Biiuxh", "329IHbsFd", "delete", "set", "has", "41856JUulmP", "viewerName", "9358352fIBDja", "get", "1267176FHYWKK", "1135huzibr", "22RKsdkm", "forEach"];
  return se = function() {
    return t;
  }, se();
}
function vx(t, e) {
  return t = t - 456, se()[t];
}
const j0 = /* @__PURE__ */ new WeakMap();
function Zi(t, e) {
  const x = vx;
  return nextTick().then(() => {
    const n = vx, { viewerName: a } = e ?? {}, s = F(a);
    !j0[n(470)](s) && (j0[n(469)](s, /* @__PURE__ */ new Set()), Mx(() => j0[n(468)](s), { viewerName: V(a) })), j0.get(s)[n(462)](t);
  }), () => {
    var n;
    return (n = j0[x(456)](F(e == null ? void 0 : e[x(472)]))) == null ? void 0 : n[x(468)](t);
  };
}
function Qi(t) {
  var n;
  const e = vx, x = F(t);
  (n = j0[e(456)](x)) == null || n[e(460)]((a) => {
    const s = F();
    a(s);
  });
}
function Ki(t) {
  var x;
  const e = vx;
  (x = j0[e(456)](F(t == null ? void 0 : t[e(472)]))) == null || x.clear();
}
function ut(t, e) {
  return t = t - 306, ie()[t];
}
(function(t, e) {
  const x = ut, n = t();
  for (; ; )
    try {
      if (parseInt(x(308)) / 1 * (parseInt(x(315)) / 2) + -parseInt(x(320)) / 3 * (-parseInt(x(312)) / 4) + parseInt(x(311)) / 5 + -parseInt(x(313)) / 6 * (-parseInt(x(310)) / 7) + -parseInt(x(306)) / 8 + parseInt(x(309)) / 9 * (parseInt(x(317)) / 10) + parseInt(x(322)) / 11 * (-parseInt(x(319)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ie, 220834);
function ie() {
  const t = ["6jfTBDG", "addEventListener", "853982MyDeXP", "scene", "80woqvBE", "onTick", "49872OHKErL", "97674hvVceg", "postRender", "2827TEFLut", "2074520ECTVsI", "preUpdate", "1zRUMSq", "430686JBWCcw", "1925735GspmOj", "1990985rthrqT", "8MpMuBS"];
  return ie = function() {
    return t;
  }, ie();
}
function vn(t, e) {
  const { viewerName: x } = e ?? {};
  let n;
  return S0((a) => {
    const s = ut;
    n = a[s(316)][s(307)][s(314)](t);
  }, { viewerName: x }), n;
}
function xc(t, e) {
  const x = ut, { viewerName: n } = e ?? {}, a = ot(n), s = a[x(321)][x(314)](t);
  return () => s;
}
function ec(t, e) {
  const x = ut, { viewerName: n } = e ?? {};
  return Px(n)[x(318)][x(314)](t);
}
(function(t, e) {
  const x = Gx, n = t();
  for (; ; )
    try {
      if (parseInt(x(292)) / 1 * (parseInt(x(300)) / 2) + parseInt(x(289)) / 3 + parseInt(x(297)) / 4 * (-parseInt(x(298)) / 5) + -parseInt(x(290)) / 6 * (parseInt(x(294)) / 7) + -parseInt(x(291)) / 8 + parseInt(x(299)) / 9 + parseInt(x(296)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ce, 224882);
function Gx(t, e) {
  return t = t - 288, ce()[t];
}
function ce() {
  const t = ["forEach", "condition", "995064GmyDJy", "3966mYwiUn", "2687904OSCzqD", "118093nnjLFx", "clear", "2513kyMHic", "setValue", "5396520TNaTcZ", "8ZHkMeh", "553405DHIzAX", "270882UQfMLN", "2LucQXQ", "add"];
  return ce = function() {
    return t;
  }, ce();
}
function tc(t, e) {
  const x = Gx, n = /* @__PURE__ */ new Set(), a = e == null ? void 0 : e[x(288)];
  return S0(() => {
    const s = x, r = Y0(({ entity: i }) => {
      const c = Gx;
      if (!(a ? a(i) : !1)) return;
      const f = Xt(({ position: h }) => {
        var p;
        const u = Gx, d = jt(h.endPosition);
        d && ((p = hs(i)) == null || p[u(295)](d));
      });
      n[c(301)](f);
      const l = qt(({ position: h }) => {
        f(), t == null || t({ entity: i, position: h }), l();
      });
      n[c(301)](l);
    }, { isEntity: !0 });
    n[s(301)](r);
  }), () => {
    const s = x;
    n[s(302)]((r) => r == null ? void 0 : r()), n[s(293)]();
  };
}
const $0 = wn;
function wn(t, e) {
  return t = t - 422, oe()[t];
}
(function(t, e) {
  const x = wn, n = t();
  for (; ; )
    try {
      if (parseInt(x(428)) / 1 + parseInt(x(435)) / 2 + parseInt(x(424)) / 3 * (-parseInt(x(426)) / 4) + -parseInt(x(425)) / 5 + -parseInt(x(431)) / 6 + parseInt(x(430)) / 7 * (parseInt(x(422)) / 8) + parseInt(x(433)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(oe, 250376);
function oe() {
  const t = ["39nAEnMU", "505740OPuyAv", "29024WdJKNS", "LEFT_DOWN", "101694MjvUHg", "CTRL", "7uUjCID", "2052582hibEUi", "LEFT_DOUBLE_CLICK", "3460338MbUvqN", "RIGHT_CLICK", "281668MGWHNC", "1287512YsfcJp", "LEFT_CLICK"];
  return oe = function() {
    return t;
  }, oe();
}
const nc = R0(A0[$0(423)]), ac = R0(A0[$0(423)], J2[$0(429)]), Y0 = R0(A0[$0(427)]), rc = R0(A0.LEFT_DOWN, J2[$0(429)]), qt = R0(A0.LEFT_UP), Yt = R0(A0[$0(434)]), Fr = R0(A0[$0(432)]), Xt = R0(A0.MOUSE_MOVE);
function ue() {
  const t = ["42FUsIli", "12653694jlzuRy", "delete", "2065195GFAFeT", "has", "7354044uvcGHc", "24hvGSKC", "forEach", "371WPIbVg", "add", "set", "get", "106762RVmUlH", "231688wOwUKS", "201976WPFYqz", "5217610lIifAX", "viewerName"];
  return ue = function() {
    return t;
  }, ue();
}
(function(t, e) {
  const x = Jt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(393)) / 1 * (parseInt(x(404)) / 2) + parseInt(x(398)) / 3 * (parseInt(x(394)) / 4) + parseInt(x(401)) / 5 + -parseInt(x(403)) / 6 + -parseInt(x(406)) / 7 * (-parseInt(x(395)) / 8) + parseInt(x(399)) / 9 + -parseInt(x(396)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ue, 939425);
const bx = /* @__PURE__ */ new Map();
function Jt(t, e) {
  return t = t - 393, ue()[t];
}
function zr(t = V()) {
  var n;
  const e = Jt, x = F(t);
  (n = bx[e(409)](t)) == null || n[e(405)]((a) => a(x)), bx[e(400)](t);
}
function Mx(t, e) {
  const x = Jt, n = V(e == null ? void 0 : e[x(397)]);
  !bx[x(402)](n) && bx[x(408)](n, /* @__PURE__ */ new Set()), bx[x(409)](n)[x(407)](t);
}
(function(t, e) {
  const x = Zt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(165)) / 1 * (-parseInt(x(162)) / 2) + parseInt(x(168)) / 3 * (-parseInt(x(161)) / 4) + -parseInt(x(159)) / 5 * (-parseInt(x(163)) / 6) + parseInt(x(158)) / 7 * (parseInt(x(173)) / 8) + -parseInt(x(164)) / 9 + -parseInt(x(171)) / 10 + parseInt(x(174)) / 11 * (-parseInt(x(167)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fe, 674882);
function Zt(t, e) {
  return t = t - 157, fe()[t];
}
const rx = /* @__PURE__ */ new Map();
function fe() {
  const t = ["has", "4056843APHadW", "1630FJoBYA", "viewerName", "12ypMVPe", "3776GWvWkc", "7572WmoBuF", "7648740EwfRPw", "619OhqPBr", "delete", "4811124lxkorN", "129393UqMsuV", "add", "get", "2831930aodFhc", "forEach", "16hbJDzu", "22dPIqnn"];
  return fe = function() {
    return t;
  }, fe();
}
function S0(t, e) {
  const x = Zt, n = V(cr(e) ? e[x(160)] : e), a = F(V(n));
  if (a) return t(a);
  !rx[x(157)](n) && rx.set(n, /* @__PURE__ */ new Set()), rx.get(n)[x(169)](t);
}
function Br(t, e) {
  const x = Zt, n = rx[x(170)](t);
  n && n[x(172)]((a) => a(e)), rx[x(166)](t);
}
(function(t, e) {
  const x = I0, n = t();
  for (; ; )
    try {
      if (parseInt(x(240)) / 1 + parseInt(x(228)) / 2 * (parseInt(x(233)) / 3) + -parseInt(x(239)) / 4 * (parseInt(x(232)) / 5) + -parseInt(x(238)) / 6 + parseInt(x(235)) / 7 * (-parseInt(x(234)) / 8) + parseInt(x(243)) / 9 + -parseInt(x(242)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(le, 322981);
function le() {
  const t = ["541042WXjVrW", "get", "996200TabPMM", "5698728yExSny", "values", "add", "removeAll", "请输入datasource 名称", "entities", "has", "delete", "30676MXZnnW", "set", "warn", "dataSources", "278085OiyNPF", "117gahgyB", "48ixtYGj", "520359ZGCOuS", "forEach", "remove", "2085738aKeQhh", "40iRPLAX"];
  return le = function() {
    return t;
  }, le();
}
const D0 = /* @__PURE__ */ new Map();
function I0(t, e) {
  return t = t - 227, le()[t];
}
function Sn(t, e, x = V()) {
  const n = I0;
  !D0[n(249)](x) && (D0[n(229)](x, /* @__PURE__ */ new Map()), Mx(() => D0[n(227)](x), { viewerName: x })), D0[n(241)](x).set(t, e);
}
function Cn(t, e = V()) {
  var n;
  const x = I0;
  return (n = D0[x(241)](e)) == null ? void 0 : n[x(249)](t);
}
function C0(t, e = V()) {
  var n;
  const x = I0;
  return (n = D0[x(241)](e)) == null ? void 0 : n[x(241)](t);
}
const sc = C0;
function jr(t, e = V()) {
  const x = I0;
  if (!t) {
    console[x(230)](x(247));
    return;
  }
  const n = new kt(t);
  return Sn(t, n, e), n;
}
function ic(t, e = V()) {
  const x = I0;
  if (!Cn(t, e)) {
    const n = jr(t, e);
    F(e)[x(231)][x(245)](n);
  }
  return C0(t, e);
}
function Hr(t, e = V()) {
  return C0(t, e);
}
function Ur(t, e = V()) {
  var s;
  const x = I0, n = Hr(t, e);
  if (!n) return;
  F(e)[x(231)][x(237)](n), (s = D0[x(241)](e)) == null || s[x(227)](t);
}
function cc(t = V()) {
  const e = I0, x = D0.get(t);
  x && Array.from(x[e(244)]())[e(236)]((n) => {
    n[e(248)].removeAll();
  });
}
function oc(t) {
  D0[I0(227)](t);
}
function cx(t, e = V()) {
  var n;
  const x = I0;
  (n = C0(t, e)) == null || n.entities[x(246)]();
}
function ox(t, e = !1, x) {
  let n;
  C0(t) ? n = C0(t) : n = new kt(t);
  const a = En(t, n);
  return e && a(x), { source: n, mount: a };
}
function uc(t, e = !1) {
  let x;
  C0(t) ? x = C0(t) : x = new Z2(t);
  const n = En(t, x);
  return e && n(), { source: x, mount: n };
}
function En(t, e) {
  return function(x = V()) {
    S0((n) => {
      const a = I0;
      Cn(t, x) || (n.dataSources[a(245)](e), Sn(t, e, x));
    }, { viewerName: x });
  };
}
(function(t, e) {
  const x = Tn, n = t();
  for (; ; )
    try {
      if (parseInt(x(432)) / 1 + -parseInt(x(440)) / 2 + parseInt(x(439)) / 3 + -parseInt(x(431)) / 4 + -parseInt(x(433)) / 5 * (-parseInt(x(427)) / 6) + parseInt(x(428)) / 7 * (parseInt(x(434)) / 8) + -parseInt(x(430)) / 9 * (parseInt(x(438)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(de, 973650);
const fc = In("selectedEntity"), lc = In("trackedEntity");
let tx;
function dc(t) {
  const e = F();
  tx = vn($r(e, t));
}
function pc() {
  tx && (tx == null || tx(), tx = void 0);
}
function $r(t, e) {
  return function(x, n) {
    var f, l;
    const a = Tn;
    if (!(e != null && e[a(447)]) || !e.position) return;
    const s = (f = e[a(447)]) == null ? void 0 : f[a(445)](n), r = (l = e[a(429)]) == null ? void 0 : l[a(445)](n), i = Lx[a(444)][a(443)](s), c = Lx.Matrix4[a(441)](i, r), o = Lx[a(442)][a(426)](c);
    o.heading += Lx[a(437)][a(435)], e[a(436)] = !1, t.camera[a(446)]({ destination: r, orientation: o });
  };
}
function Tn(t, e) {
  return t = t - 426, de()[t];
}
function de() {
  const t = ["9868215BkBnLe", "position", "9ltqXGY", "6084200UgqBSf", "1606752NaHksB", "62900MbYTxI", "8dbCodK", "PI_OVER_TWO", "show", "Math", "14748590ufMulh", "989529gWmUMW", "2175322cCKgek", "fromRotationTranslation", "Transforms", "fromQuaternion", "Matrix3", "getValue", "setView", "orientation", "fixedFrameToHeadingPitchRoll", "816UKCSpT"];
  return de = function() {
    return t;
  }, de();
}
function pe() {
  const t = ["419966FnEhZn", "WHEEL", "1296540aDskkC", "screenSpaceCameraController", "RIGHT_DRAG", "translateEventTypes", "1498644lcFpQp", "rotateEventTypes", "tiltEventTypes", "587022HGJGke", "358452dQlYPc", "PINCH", "896635bUbqmL", "LEFT_DRAG", "scene", "84756dVLHXE"];
  return pe = function() {
    return t;
  }, pe();
}
(function(t, e) {
  const x = Mn, n = t();
  for (; ; )
    try {
      if (parseInt(x(234)) / 1 + -parseInt(x(235)) / 2 + parseInt(x(228)) / 3 + -parseInt(x(229)) / 4 + parseInt(x(231)) / 5 + -parseInt(x(221)) / 6 + parseInt(x(225)) / 7 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pe, 158163);
function Mn(t, e) {
  return t = t - 220, pe()[t];
}
function qr(t) {
  const e = Mn, x = t[e(233)][e(222)];
  x[e(226)] = [Q0.RIGHT_DRAG, Q0[e(232)]], x.zoomEventTypes = [Q0[e(220)], Q0[e(230)]], x[e(224)] = Q0[e(223)], x[e(227)] = [], x.tiltEventTypes = [{ eventType: Q0.RIGHT_DRAG }];
}
function Qt(t, e) {
  return t = t - 410, he()[t];
}
const Dn = Qt;
(function(t, e) {
  const x = Qt, n = t();
  for (; ; )
    try {
      if (parseInt(x(416)) / 1 + -parseInt(x(415)) / 2 + parseInt(x(417)) / 3 + parseInt(x(412)) / 4 + -parseInt(x(414)) / 5 + parseInt(x(421)) / 6 + parseInt(x(411)) / 7 * (-parseInt(x(420)) / 8) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(he, 910540);
function he() {
  const t = ["camera", "flyTo", "31325vwNdYq", "2490404JNfOXa", "DEFAULT_VIEW_RECTANGLE", "279800GbNdTE", "2666412FgANmS", "824035sbrQsa", "3981042YkWCXw", "fromDegrees", "then", "3528uKxTSN", "8997186PdvFYu"];
  return he = function() {
    return t;
  }, he();
}
function hc(t, e) {
  const x = Qt, { west: n, south: a, east: s, north: r } = t;
  Wt()[x(419)](() => {
    var c;
    const i = x;
    (c = q0(e)) == null || c[i(410)]({ destination: Ix[i(418)](n, a, s, r) });
  });
}
function _c(t, e) {
  q0(e).flyTo(t);
}
const q0 = Ex(Dn(422));
function Pn(t) {
  return function(e) {
    return q0(e)[t];
  };
}
function Yr(t) {
  const e = Dn, { west: x, south: n, east: a, north: s } = t;
  Pa[e(413)] = Ix[e(418)](x, n, a, s);
}
const ft = be;
(function(t, e) {
  const x = be, n = t();
  for (; ; )
    try {
      if (-parseInt(x(228)) / 1 * (-parseInt(x(223)) / 2) + -parseInt(x(227)) / 3 + parseInt(x(237)) / 4 * (-parseInt(x(222)) / 5) + parseInt(x(233)) / 6 + parseInt(x(236)) / 7 * (-parseInt(x(220)) / 8) + -parseInt(x(226)) / 9 + parseInt(x(219)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_e, 189643);
function bc(t, e = V()) {
  return S0(() => {
    const x = be;
    q0(e)[x(225)][x(234)](t);
  }), () => {
    const x = be;
    q0(e)[x(225)][x(235)](t);
  };
}
const kn = Pn(ft(217)), mc = Or(kn, ft(221));
function Ic(t, e) {
  const x = ft;
  ot(e).mode === h0[x(230)] && q0(e)[x(229)](t);
}
function _e() {
  const t = ["SCENE2D", "setView", "latitude", "1150164EZlwPV", "addEventListener", "removeEventListener", "203MYDCHP", "1135776ebNCCx", "toDegrees", "positionCartographic", "maximumRadius", "10192490etxceQ", "86344jjfsKG", "height", "5ckLQGw", "2HplkyZ", "fromDegrees", "changed", "2509767rpMell", "591795zjwexv", "51769EBaGaz", "zoomIn"];
  return _e = function() {
    return t;
  }, _e();
}
const gc = Pn("position");
function be(t, e) {
  return t = t - 217, _e()[t];
}
function An(t, e) {
  const x = ft, n = Fx.WGS84[x(218)] * 10 / t, a = kn(e), s = w0[x(238)](a.longitude), r = w0.toDegrees(a[x(232)]);
  q0(e)[x(231)]({ destination: g[x(224)](s, r, n) });
}
var Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ln = { exports: {} };
(function(t, e) {
  (function(x, n) {
    t.exports = n();
  })(Xr, function() {
    var x = 1e3, n = 6e4, a = 36e5, s = "millisecond", r = "second", i = "minute", c = "hour", o = "day", f = "week", l = "month", h = "quarter", u = "year", d = "date", p = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(w) {
      var b = ["th", "st", "nd", "rd"], _ = w % 100;
      return "[" + w + (b[(_ - 20) % 10] || b[_] || b[0]) + "]";
    } }, O = function(w, b, _) {
      var C = String(w);
      return !C || C.length >= b ? w : "" + Array(b + 1 - C.length).join(_) + w;
    }, R = { s: O, z: function(w) {
      var b = -w.utcOffset(), _ = Math.abs(b), C = Math.floor(_ / 60), m = _ % 60;
      return (b <= 0 ? "+" : "-") + O(C, 2, "0") + ":" + O(m, 2, "0");
    }, m: function w(b, _) {
      if (b.date() < _.date()) return -w(_, b);
      var C = 12 * (_.year() - b.year()) + (_.month() - b.month()), m = b.clone().add(C, l), P = _ - m < 0, k = b.clone().add(C + (P ? -1 : 1), l);
      return +(-(C + (_ - m) / (P ? m - k : k - m)) || 0);
    }, a: function(w) {
      return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
    }, p: function(w) {
      return { M: l, y: u, w: f, d: o, D: d, h: c, m: i, s: r, ms: s, Q: h }[w] || String(w || "").toLowerCase().replace(/s$/, "");
    }, u: function(w) {
      return w === void 0;
    } }, T = "en", A = {};
    A[T] = M;
    var z = "$isDayjsObject", B = function(w) {
      return w instanceof K || !(!w || !w[z]);
    }, D = function w(b, _, C) {
      var m;
      if (!b) return T;
      if (typeof b == "string") {
        var P = b.toLowerCase();
        A[P] && (m = P), _ && (A[P] = _, m = P);
        var k = b.split("-");
        if (!m && k.length > 1) return w(k[0]);
      } else {
        var H = b.name;
        A[H] = b, m = H;
      }
      return !C && m && (T = m), m || !C && T;
    }, v = function(w, b) {
      if (B(w)) return w.clone();
      var _ = typeof b == "object" ? b : {};
      return _.date = w, _.args = arguments, new K(_);
    }, E = R;
    E.l = D, E.i = B, E.w = function(w, b) {
      return v(w, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var K = function() {
      function w(_) {
        this.$L = D(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[z] = !0;
      }
      var b = w.prototype;
      return b.parse = function(_) {
        this.$d = function(C) {
          var m = C.date, P = C.utc;
          if (m === null) return /* @__PURE__ */ new Date(NaN);
          if (E.u(m)) return /* @__PURE__ */ new Date();
          if (m instanceof Date) return new Date(m);
          if (typeof m == "string" && !/Z$/i.test(m)) {
            var k = m.match(y);
            if (k) {
              var H = k[2] - 1 || 0, J = (k[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(k[1], H, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, J)) : new Date(k[1], H, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, J);
            }
          }
          return new Date(m);
        }(_), this.init();
      }, b.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, b.$utils = function() {
        return E;
      }, b.isValid = function() {
        return this.$d.toString() !== p;
      }, b.isSame = function(_, C) {
        var m = v(_);
        return this.startOf(C) <= m && m <= this.endOf(C);
      }, b.isAfter = function(_, C) {
        return v(_) < this.startOf(C);
      }, b.isBefore = function(_, C) {
        return this.endOf(C) < v(_);
      }, b.$g = function(_, C, m) {
        return E.u(_) ? this[C] : this.set(m, _);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(_, C) {
        var m = this, P = !!E.u(C) || C, k = E.p(_), H = function(W0, i0) {
          var O0 = E.w(m.$u ? Date.UTC(m.$y, i0, W0) : new Date(m.$y, i0, W0), m);
          return P ? O0 : O0.endOf(o);
        }, J = function(W0, i0) {
          return E.w(m.toDate()[W0].apply(m.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(i0)), m);
        }, x0 = this.$W, a0 = this.$M, f0 = this.$D, Z0 = "set" + (this.$u ? "UTC" : "");
        switch (k) {
          case u:
            return P ? H(1, 0) : H(31, 11);
          case l:
            return P ? H(1, a0) : H(0, a0 + 1);
          case f:
            var G0 = this.$locale().weekStart || 0, ux = (x0 < G0 ? x0 + 7 : x0) - G0;
            return H(P ? f0 - ux : f0 + (6 - ux), a0);
          case o:
          case d:
            return J(Z0 + "Hours", 0);
          case c:
            return J(Z0 + "Minutes", 1);
          case i:
            return J(Z0 + "Seconds", 2);
          case r:
            return J(Z0 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(_) {
        return this.startOf(_, !1);
      }, b.$set = function(_, C) {
        var m, P = E.p(_), k = "set" + (this.$u ? "UTC" : ""), H = (m = {}, m[o] = k + "Date", m[d] = k + "Date", m[l] = k + "Month", m[u] = k + "FullYear", m[c] = k + "Hours", m[i] = k + "Minutes", m[r] = k + "Seconds", m[s] = k + "Milliseconds", m)[P], J = P === o ? this.$D + (C - this.$W) : C;
        if (P === l || P === u) {
          var x0 = this.clone().set(d, 1);
          x0.$d[H](J), x0.init(), this.$d = x0.set(d, Math.min(this.$D, x0.daysInMonth())).$d;
        } else H && this.$d[H](J);
        return this.init(), this;
      }, b.set = function(_, C) {
        return this.clone().$set(_, C);
      }, b.get = function(_) {
        return this[E.p(_)]();
      }, b.add = function(_, C) {
        var m, P = this;
        _ = Number(_);
        var k = E.p(C), H = function(a0) {
          var f0 = v(P);
          return E.w(f0.date(f0.date() + Math.round(a0 * _)), P);
        };
        if (k === l) return this.set(l, this.$M + _);
        if (k === u) return this.set(u, this.$y + _);
        if (k === o) return H(1);
        if (k === f) return H(7);
        var J = (m = {}, m[i] = n, m[c] = a, m[r] = x, m)[k] || 1, x0 = this.$d.getTime() + _ * J;
        return E.w(x0, this);
      }, b.subtract = function(_, C) {
        return this.add(-1 * _, C);
      }, b.format = function(_) {
        var C = this, m = this.$locale();
        if (!this.isValid()) return m.invalidDate || p;
        var P = _ || "YYYY-MM-DDTHH:mm:ssZ", k = E.z(this), H = this.$H, J = this.$m, x0 = this.$M, a0 = m.weekdays, f0 = m.months, Z0 = m.meridiem, G0 = function(i0, O0, fx, Ax) {
          return i0 && (i0[O0] || i0(C, P)) || fx[O0].slice(0, Ax);
        }, ux = function(i0) {
          return E.s(H % 12 || 12, i0, "0");
        }, W0 = Z0 || function(i0, O0, fx) {
          var Ax = i0 < 12 ? "AM" : "PM";
          return fx ? Ax.toLowerCase() : Ax;
        };
        return P.replace(S, function(i0, O0) {
          return O0 || function(fx) {
            switch (fx) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return E.s(C.$y, 4, "0");
              case "M":
                return x0 + 1;
              case "MM":
                return E.s(x0 + 1, 2, "0");
              case "MMM":
                return G0(m.monthsShort, x0, f0, 3);
              case "MMMM":
                return G0(f0, x0);
              case "D":
                return C.$D;
              case "DD":
                return E.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return G0(m.weekdaysMin, C.$W, a0, 2);
              case "ddd":
                return G0(m.weekdaysShort, C.$W, a0, 3);
              case "dddd":
                return a0[C.$W];
              case "H":
                return String(H);
              case "HH":
                return E.s(H, 2, "0");
              case "h":
                return ux(1);
              case "hh":
                return ux(2);
              case "a":
                return W0(H, J, !0);
              case "A":
                return W0(H, J, !1);
              case "m":
                return String(J);
              case "mm":
                return E.s(J, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return E.s(C.$s, 2, "0");
              case "SSS":
                return E.s(C.$ms, 3, "0");
              case "Z":
                return k;
            }
            return null;
          }(i0) || k.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(_, C, m) {
        var P, k = this, H = E.p(C), J = v(_), x0 = (J.utcOffset() - this.utcOffset()) * n, a0 = this - J, f0 = function() {
          return E.m(k, J);
        };
        switch (H) {
          case u:
            P = f0() / 12;
            break;
          case l:
            P = f0();
            break;
          case h:
            P = f0() / 3;
            break;
          case f:
            P = (a0 - x0) / 6048e5;
            break;
          case o:
            P = (a0 - x0) / 864e5;
            break;
          case c:
            P = a0 / a;
            break;
          case i:
            P = a0 / n;
            break;
          case r:
            P = a0 / x;
            break;
          default:
            P = a0;
        }
        return m ? P : E.a(P);
      }, b.daysInMonth = function() {
        return this.endOf(l).$D;
      }, b.$locale = function() {
        return A[this.$L];
      }, b.locale = function(_, C) {
        if (!_) return this.$L;
        var m = this.clone(), P = D(_, C, !0);
        return P && (m.$L = P), m;
      }, b.clone = function() {
        return E.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, w;
    }(), X = K.prototype;
    return v.prototype = X, [["$ms", s], ["$s", r], ["$m", i], ["$H", c], ["$W", o], ["$M", l], ["$y", u], ["$D", d]].forEach(function(w) {
      X[w[1]] = function(b) {
        return this.$g(b, w[0], w[1]);
      };
    }), v.extend = function(w, b) {
      return w.$i || (w(b, K, v), w.$i = !0), v;
    }, v.locale = D, v.isDayjs = B, v.unix = function(w) {
      return v(1e3 * w);
    }, v.en = A[T], v.Ls = A, v.p = {}, v;
  });
})(Ln);
var Zr = Ln.exports;
const On = /* @__PURE__ */ Jr(Zr);
function Dx(t, e) {
  return t = t - 313, me()[t];
}
(function(t, e) {
  const x = Dx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(337)) / 1 + parseInt(x(317)) / 2 * (parseInt(x(339)) / 3) + parseInt(x(335)) / 4 * (-parseInt(x(330)) / 5) + -parseInt(x(342)) / 6 + -parseInt(x(316)) / 7 + -parseInt(x(338)) / 8 * (-parseInt(x(336)) / 9) + parseInt(x(323)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(me, 539634);
function me() {
  const t = ["forEach", "valueOf", "add", "172JEjbJZ", "126fAOYkY", "592534OfSddz", "169016ZznPkL", "3gHnsai", "then", "abs", "2460150Qaxhrx", "slice", "shift", "length", "secondStep", "maxTime", "6916119tdxvIc", "356332ryVfGG", "setInterval", "minSpeed", "firstStep", "logicTime", "interval", "30569190PRAusQ", "get", "cacheSize", "thirdStep", "set", "actualSpeed", "splice", "116355MEOlST", "push"];
  return me = function() {
    return t;
  }, me();
}
const { synchronizeConfig: lx } = b0;
var Qr = ((t) => {
  const e = Dx;
  return t[e(320)] = e(320), t[e(314)] = e(314), t.thirdStep = e(326), t;
})(Qr || {});
const mx = /* @__PURE__ */ new Map();
function yc(t, e = V()) {
  const x = Dx;
  nextTick()[x(340)](() => {
    var a;
    const n = x;
    !mx.has(e) && mx[n(327)](e, /* @__PURE__ */ new Set()), (a = mx[n(324)](e)) == null || a[n(334)](t);
  });
}
function Kr(t = V()) {
  var x;
  const e = Dx;
  (x = mx[e(324)](t)) == null || x[e(332)]((n) => n == null ? void 0 : n()), mx.delete(t);
}
function vc(t = V()) {
  const e = Dx;
  let x = e(320);
  const n = [], a = lx[e(319)], s = lx[e(315)];
  let r;
  const i = (u) => u[e(328)], c = () => {
    const u = e;
    if (n[u(313)] === 0) return a;
    let d = 1, p;
    if (n[u(313)] === 1) {
      p = n[u(343)]()[0];
      const M = i(p);
      return or(M) ? d : M / 2;
    }
    p = n[u(344)](), d = i(p);
    const y = xs().valueOf() - On(p[u(321)])[u(333)](), S = Math[u(341)](y / 1e3);
    return y > s * 1e3 ? (E2(p[u(321)], t), d = a, d) : y < -s * 1e3 ? (d += S, d) : (d <= 0 && (d = a), d);
  }, o = (u) => {
    n[e(331)](u);
  }, f = () => {
    const u = e;
    r = window[u(318)](() => {
      T2(c(), t);
    }, lx[u(322)]);
  }, l = { [e(320)]: (u) => {
    const d = e;
    ns(u.logicTime, t), E2(u.logicTime, t), is(t), o(u), Kr(t), x = d(314);
  }, secondStep: (u) => {
    const d = e;
    if (o(u), n[d(313)] > lx[d(325)]) {
      const p = n[d(329)](0, 1)[0];
      T2(i(p), t), os(!0), clearInterval(r), f(), x = d(326);
    }
  }, thirdStep: (u) => {
    const d = e;
    o(u), !us() && n[d(313)] > lx[d(325)] && n.shift();
  } };
  return Mx(() => {
    clearInterval(r);
  }, { viewerName: t }), { run: (u) => {
    l[x](u);
  } };
}
const X0 = lt;
(function(t, e) {
  const x = lt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(256)) / 1 + parseInt(x(270)) / 2 * (parseInt(x(266)) / 3) + -parseInt(x(262)) / 4 * (parseInt(x(268)) / 5) + parseInt(x(259)) / 6 + parseInt(x(269)) / 7 * (-parseInt(x(254)) / 8) + parseInt(x(265)) / 9 + parseInt(x(257)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ge, 260973);
const Ie = kx(X0(263)), xs = Kt(X0(263)), es = x2("currentTime"), E2 = es, wc = kx("startTime"), Sc = Kt("startTime"), ts = x2(X0(253)), ns = ts, Cc = kx(X0(260)), Ec = Kt(X0(260)), as = x2(X0(260));
function lt(t, e) {
  return t = t - 252, ge()[t];
}
const rs = as;
function ss() {
  return X0(267);
}
function is(t) {
  rs(ss(), t);
}
function Kt(t) {
  return function(e) {
    return On(r0.toDate(Px(e)[t]));
  };
}
function x2(t) {
  return function(e, x) {
    const n = lt;
    let a;
    typeof e == "string" || typeof e === n(252) ? a = r0[n(264)](new Date(e)) : e instanceof Date ? a = r0[n(264)](e) : a = e, Px(x)[t] = a;
  };
}
function Tc(t, e = V()) {
  S0((x) => {
    const n = lt;
    Cesium.knockout.getObservable(x[n(261)], "currentTime")[n(255)]((a) => {
      const s = n, r = r0.toDate(a)[s(258)]();
      t == null || t(r, a);
    });
  }, { viewerName: e });
}
function ge() {
  const t = ["clockViewModel", "2083876wDJJXs", "currentTime", "fromDate", "290592ohypEe", "219tayhAQ", "9999/12/31 23:59:59", "5HLCPdx", "32011WURLSv", "13438DmhmRj", "number", "startTime", "608eBZLcm", "subscribe", "114735zOBmjk", "3726630KbWjSf", "getTime", "2092722pCFgTm", "stopTime"];
  return ge = function() {
    return t;
  }, ge();
}
function ye() {
  const t = ["78ibqfVm", "43269ejWSJK", "915064RrISjw", "clock", "2lgPRze", "5088VxvgNn", "1025GqUAOB", "369ibQhmS", "shouldAnimate", "45794zoBunN", "40570gvAEeF", "multiplier", "128961oErMkj", "5331414GfmgdH"];
  return ye = function() {
    return t;
  }, ye();
}
const dt = Nn;
(function(t, e) {
  const x = Nn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(308)) / 1 + parseInt(x(314)) / 2 * (parseInt(x(311)) / 3) + -parseInt(x(315)) / 4 * (parseInt(x(316)) / 5) + -parseInt(x(310)) / 6 * (-parseInt(x(319)) / 7) + parseInt(x(312)) / 8 + -parseInt(x(317)) / 9 * (parseInt(x(320)) / 10) + parseInt(x(309)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ye, 142468);
function Nn(t, e) {
  return t = t - 307, ye()[t];
}
const Px = Ex(dt(313)), T2 = Vn(dt(307)), cs = kx(dt(307)), Mc = cs, os = Vn(dt(318)), us = kx("shouldAnimate");
function kx(t) {
  return function(e) {
    return Px(e)[t];
  };
}
function Vn(t, e) {
  return function(x, n) {
    Px(n)[t] = x ?? e;
  };
}
(function(t, e) {
  const x = J0, n = t();
  for (; ; )
    try {
      if (parseInt(x(304)) / 1 + parseInt(x(290)) / 2 * (parseInt(x(293)) / 3) + parseInt(x(295)) / 4 * (parseInt(x(297)) / 5) + -parseInt(x(306)) / 6 * (-parseInt(x(288)) / 7) + parseInt(x(298)) / 8 * (-parseInt(x(299)) / 9) + -parseInt(x(296)) / 10 + parseInt(x(303)) / 11 * (-parseInt(x(294)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ve, 127597);
function Dc(t, e) {
  return Ct(e) ? S0((x) => {
    const n = J0;
    return x[n(302)][n(287)](t);
  }, { viewerName: V(e) }) : S0(() => e.add(t));
}
function fs(t) {
  return t instanceof kt;
}
function ls(t) {
  return t instanceof Z2;
}
function J0(t, e) {
  return t = t - 287, ve()[t];
}
function Pc(t, e) {
  const x = J0;
  if (!e) return console[x(289)](x(305)), void 0;
  if (fs(e) || ls(e)) return e[x(302)][x(300)](t);
  const n = C0(e);
  if (n) return n.entities[x(300)](t);
}
function ds(t, e) {
  var n;
  const x = J0;
  return (n = t.properties) == null ? void 0 : n[x(291)](Ie(e));
}
function ps(t, e, x) {
  var n;
  return (n = ds(t, x)) == null ? void 0 : n[e];
}
function kc(t, e) {
  return ps(t, J0(301), e);
}
function ve() {
  const t = ["1370376ldVBRm", "381164XBgtKz", "199400IOgcPE", "5sFFTGC", "4224cOTirW", "2619ZAciyM", "getById", "metaData", "entities", "33yKnsMz", "186068XYreLK", "sourceName is Required", "6qOyrOJ", "add", "1356194kZpSKf", "error", "6qedwmO", "getValue", "position", "168678hOwLAg"];
  return ve = function() {
    return t;
  }, ve();
}
function Rn(t) {
  return t[J0(292)];
}
function hs(t) {
  return Rn(t);
}
function Ac(t) {
  return Rn(t);
}
function Lc(t, e) {
  const x = J0;
  t[x(292)] = e;
}
function Gn(t, e) {
  t = t - 220;
  var x = we(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = Gn, n = t(); ; )
    try {
      var a = -parseInt(x(229)) / 1 * (-parseInt(x(226)) / 2) + parseInt(x(223)) / 3 * (-parseInt(x(221)) / 4) + parseInt(x(220)) / 5 + parseInt(x(227)) / 6 + parseInt(x(222)) / 7 * (-parseInt(x(228)) / 8) + -parseInt(x(225)) / 9 + parseInt(x(230)) / 10;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(we, 304558);
function we() {
  var t = ["20302FmKtIf", "2971430ZcwIty", "170840RshZdf", "60sresgZ", "7ALLVET", "70671UfSDLp", "log", "3313989koHzUl", "54DlAInW", "2928300dXWJYP", "2731048DNSvAc"];
  return we = function() {
    return t;
  }, we();
}
function Oc() {
  var t = Gn;
  console[t(224)](N0, rx);
}
const ht = Wn;
(function(t, e) {
  const x = Wn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(312)) / 1 * (-parseInt(x(307)) / 2) + parseInt(x(298)) / 3 + parseInt(x(305)) / 4 + parseInt(x(306)) / 5 * (parseInt(x(296)) / 6) + parseInt(x(293)) / 7 + parseInt(x(291)) / 8 * (parseInt(x(288)) / 9) + -parseInt(x(292)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Se, 700469);
function Wn(t, e) {
  return t = t - 288, Se()[t];
}
const _s = ["id"], bs = E0({ name: "Viewer", __name: ht(294), props: { name: { type: String, default: () => b0[ht(290)] }, eventList: { type: Array, default: () => [] }, defaultViewerConfig: { type: Object, default: () => {
} }, defaultCamera: { type: Object, default: () => ({ west: 90, south: 10, east: 120, north: 40 }) } }, emits: ["viewer-created"], setup(t, { emit: e }) {
  const x = ht, n = e, a = t;
  a[x(310)] && Yr(a[x(310)]);
  const s = tn();
  return Fa(a.name, s), za(() => {
    var o, f;
    const r = x, i = {};
    (o = b0.defaultImageryUrl) != null && o[r(308)] && (i.baseLayer = new ka(new Aa(b0[r(302)])));
    const c = gr(V(a[r(304)]), { ...i, ...a[r(311)] });
    s.value = c, qr(c), (f = a[r(303)]) == null || f[r(301)]((l) => l(c)), n(r(300));
  }), rt(() => {
    const r = x;
    s[r(309)] = null, vr(a.name);
  }), (r, i) => {
    const c = x;
    return P0(), ax(c(289), { id: t[c(304)], class: c(297) }, [wt(r[c(295)], c(299))], 8, _s);
  };
} });
function Se() {
  const t = ["forEach", "defaultImageryUrl", "eventList", "name", "5203300PyOVpA", "5002975GhEpwC", "4KprwgG", "url", "value", "defaultCamera", "defaultViewerConfig", "121046NJhizC", "36XSAjiC", "div", "DEFAULT_VIEWER_NAME", "1923928jDesfm", "43438370DnVlnw", "8794415HGHODu", "Viewer", "$slots", "6pkaMXw", "c-viewer", "847455dDiUVo", "default", "viewer-created"];
  return Se = function() {
    return t;
  }, Se();
}
const e2 = (t, e) => {
  const x = t.__vccOpts || t;
  for (const [n, a] of e)
    x[n] = a;
  return x;
}, Fn = /* @__PURE__ */ e2(bs, [["__scopeId", "data-v-876cb9e6"]]), M2 = Bn;
(function(t, e) {
  const x = Bn, n = t();
  for (; ; )
    try {
      if (parseInt(x(181)) / 1 + parseInt(x(178)) / 2 + parseInt(x(180)) / 3 + parseInt(x(184)) / 4 + parseInt(x(182)) / 5 * (-parseInt(x(177)) / 6) + -parseInt(x(176)) / 7 * (-parseInt(x(179)) / 8) + -parseInt(x(183)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ce, 231732);
const zn = Fn;
zn[M2(185)] = function(t) {
  const e = M2;
  t[e(175)](e(174), Fn);
};
function Bn(t, e) {
  return t = t - 174, Ce()[t];
}
function Ce() {
  const t = ["488cRoQLT", "873384gXpRWY", "454837oSXltW", "35OamxFk", "11747862kVcRVc", "1802544SyaQqA", "install", "CViewer", "component", "34398tyfJmU", "103902DXKSZK", "323828OMuBhd"];
  return Ce = function() {
    return t;
  }, Ce();
}
const ms = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Is = Object.prototype.toString, gs = (t) => Is.call(t) === "[object Object]";
function _t(t) {
  return Array.isArray(t) ? t : [t];
}
function ys(t, e, x) {
  return St(t, e, {
    ...x,
    immediate: !0
  });
}
const vs = ms ? window : void 0;
function ws(t) {
  var e;
  const x = px(t);
  return (e = x == null ? void 0 : x.$el) !== null && e !== void 0 ? e : x;
}
function Ss(...t) {
  const e = (n, a, s, r) => (n.addEventListener(a, s, r), () => n.removeEventListener(a, s, r)), x = Lt(() => {
    const n = _t(px(t[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return ys(() => {
    var n, a;
    return [
      (n = (a = x.value) === null || a === void 0 ? void 0 : a.map((s) => ws(s))) !== null && n !== void 0 ? n : [vs].filter((s) => s != null),
      _t(px(x.value ? t[1] : t[0])),
      _t(Ot(x.value ? t[2] : t[1])),
      px(x.value ? t[3] : t[2])
    ];
  }, ([n, a, s, r], i, c) => {
    if (!(n != null && n.length) || !(a != null && a.length) || !(s != null && s.length)) return;
    const o = gs(r) ? { ...r } : r, f = n.flatMap((l) => a.flatMap((h) => s.map((u) => e(l, h, u, o))));
    c(() => {
      f.forEach((l) => l());
    });
  }, { flush: "post" });
}
const D2 = jn;
(function(t, e) {
  const x = jn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(430)) / 1 + -parseInt(x(415)) / 2 + -parseInt(x(429)) / 3 + -parseInt(x(412)) / 4 + -parseInt(x(420)) / 5 + -parseInt(x(408)) / 6 * (parseInt(x(417)) / 7) + parseInt(x(411)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ee, 453934);
function jn(t, e) {
  return t = t - 408, Ee()[t];
}
function Ee() {
  const t = ["map", "documentElement", "33108984MTgqwy", "3552532ozMIMd", "n-dropdown", "show", "1699848RcftjZ", "1:100万", "2022545Qerlou", "click", "ratio", "1711525KGqmuc", "distance-select", "1:25万", "1:5万", "1:50万", "options", "select", "1:1400万", "update:show", "1808628YIpluf", "134646SbGkAU", "18MnwMES"];
  return Ee = function() {
    return t;
  }, Ee();
}
const Cs = E0({ name: "DistanceSelect", __name: D2(421), props: { show: { type: Boolean, default: !1 }, x: { type: Number, default: 0 }, y: { type: Number, default: 0 } }, emits: ["update:show", "select"], setup(t, { emit: e }) {
  const x = D2, n = e, a = [{ ratio: 1, label: x(427), height: 46248.83085151955 }, { ratio: 4, label: x(416), height: 109404.75765483479 }, { ratio: 5, label: x(424) }, { ratio: 13.5, label: x(422) }, { ratio: 60, label: x(423) }, { ratio: 200, label: "1:1万" }], s = (o) => {
    n(x(426), o);
  }, r = a[x(409)]((o) => {
    const f = x;
    return { key: o[f(419)], label: o.label, props: { onClick: () => s(o[f(419)]) } };
  }), i = () => {
    n(x(428), !1);
  }, c = Ss(document[x(410)], x(418), i);
  return rt(() => {
    c();
  }), (o, f) => {
    const l = x, h = Nt(l(413));
    return P0(), Vt(h, { options: Ot(r), show: t.show, x: t.x, y: t.y }, null, 8, [l(425), l(414), "x", "y"]);
  };
} }), P2 = Me;
(function(t, e) {
  const x = Me, n = t();
  for (; ; )
    try {
      if (-parseInt(x(405)) / 1 + parseInt(x(399)) / 2 + -parseInt(x(390)) / 3 + parseInt(x(401)) / 4 * (-parseInt(x(395)) / 5) + parseInt(x(384)) / 6 + parseInt(x(398)) / 7 * (parseInt(x(382)) / 8) + -parseInt(x(396)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Te, 402802);
function Te() {
  const t = ["2590488GvoixA", "getBoundingClientRect", "7vTZfXU", "841196dTyDzc", "install", "4TxCGTU", ".distance-legend", "error", "width", "134787WMACdx", "enableDistanceLegend", "5773752MtOsCj", "distanceLegendViewModel", "3529806HXNZSL", "enableCompass", "value", "navigationViewModel", "mouseenter", "component", "2251557dvBAUR", "show", "CNavigation", "请先开启navigation 功能", "showCompass", "773390dJgLvE"];
  return Te = function() {
    return t;
  }, Te();
}
function Me(t, e) {
  return t = t - 382, Te()[t];
}
const Hn = E0({ name: "CNavigation", props: { duration: { type: Number, default: 3 }, enableCompass: { type: Boolean, default: !0 }, enableZoomControls: { type: Boolean, default: !0 }, enableDistanceLegend: { type: Boolean, default: !1 }, enableCompassOuterRing: { type: Boolean, default: !0 }, resetTooltip: { type: String, default: "重置" }, zoomInTooltip: { type: String, default: "放大" }, zoomOutTooltip: { type: String, default: "缩小" }, defaultResetView: { type: Object, default: void 0 }, orientation: { type: Object, default: void 0 } }, setup(t) {
  const e = Me, x = tn(), n = (r) => {
    const i = Me, c = x[i(386)];
    if (!c) {
      console.warn("请先开启navigation 功能");
      return;
    }
    c[i(387)][i(394)] = r;
  };
  St(() => t[e(385)], (r) => {
    n(r);
  });
  const a = (r) => {
    const i = e, c = x[i(386)];
    if (!c) {
      console[i(403)](i(393));
      return;
    }
    c[i(383)][i(406)] = r;
  }, s = Ba({ show: !1, x: 0, y: 0 });
  return St(() => t.enableDistanceLegend, (r) => {
    a(r);
  }), S0((r) => {
    const i = e;
    x[i(386)] = new Qa(r, t), nn(() => {
      const c = i, o = document.querySelector(c(402));
      if (!o) return;
      const f = () => {
        const l = c, h = o[l(397)]();
        s.x = h.x + h[l(404)] / 2, s.y = h.y, s.show = !0;
      };
      o.addEventListener(c(388), f);
    });
  }), () => ja(Cs, { show: s.show, x: s.x, y: s.y, "onUpdate:show": (r) => s.show = r, onSelect: (r) => {
    const i = e;
    s[i(391)] = !1, An(r);
  } });
} }), Un = Hn;
Un[P2(400)] = function(t) {
  const e = P2;
  t[e(389)](e(392), Hn);
};
const wx = $n;
(function(t, e) {
  const x = $n, n = t();
  for (; ; )
    try {
      if (-parseInt(x(350)) / 1 + parseInt(x(366)) / 2 * (-parseInt(x(359)) / 3) + parseInt(x(373)) / 4 * (parseInt(x(348)) / 5) + parseInt(x(358)) / 6 + -parseInt(x(349)) / 7 * (-parseInt(x(355)) / 8) + parseInt(x(371)) / 9 + -parseInt(x(374)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(De, 295623);
function $n(t, e) {
  return t = t - 342, De()[t];
}
const Es = { class: wx(369) }, Ts = { class: wx(354) };
function De() {
  const t = ["position", "--left-pos", "data", "close", "style", "reverse", "5BVppiX", "2167718yvskmx", "83621hrZRoW", "header", "--top-pos", "div", "c-info-popup-content", "8XAqqQU", "default", "value", "2671050LCUoog", "885165GscAgY", "c-info-popup", "getById", "span", "InfoPopup", "InfoPopupRef", "name", "2pDJlHl", "c-info-popup-close", "level", "c-info-popup-header", "getValue", "3224682AOINKB", "equals", "1645876QGicgs", "8503170RbrqPA", "map"];
  return De = function() {
    return t;
  }, De();
}
const Ms = E0({ name: wx(363) }), Ds = E0({ ...Ms, props: { data: { type: Object, default: null } }, emits: [wx(345)], setup(t, { emit: e }) {
  const x = wx;
  Ha((l) => ({ v0aa32d4e: i[x(357)] }));
  const n = e, a = t, s = () => {
    n(x(345));
  }, r = yx({ label: "⅀", level: 1400 });
  ["⅀", "⅀", "⅀", "⅀", "⅀"][x(347)]()[x(375)]((l, h) => ({ label: l, key: l, props: { onClick() {
    const u = x;
    r[u(357)] = { label: l, level: 1e3 + 100 * h };
  } } }));
  const i = Lt(() => r[x(357)][x(368)]), c = yx();
  let o;
  const f = vn((l, h) => {
    var O, R;
    const u = x;
    if (!a.data) return;
    const { source: d, id: p } = a[u(344)], y = C0(d), S = y == null ? void 0 : y.entities[u(361)](p);
    if (!(S != null && S[u(342)])) {
      s();
      return;
    }
    const M = l.cartesianToCanvasCoordinates(S.position[u(370)](h));
    o && U[u(372)](o, M) || (o = M, o != null && o.x && ((O = c.value) == null || O.style.setProperty(u(343), o.x + "px")), o != null && o.y && ((R = c.value) == null || R[u(346)].setProperty(u(352), o.y + "px")));
  });
  return Ua(() => {
    f == null || f();
  }), (l, h) => {
    const u = x;
    return t[u(344)] ? (P0(), ax(u(353), { key: 0, ref_key: u(364), ref: c, class: u(360) }, [M0(u(353), Es, [wt(l.$slots, u(351), {}, () => [M0(u(362), null, Rt(t.data[u(365)]), 1), M0(u(362), null, [M0(u(362), { class: u(367), onClick: s }, "✕")])], !0)]), M0(u(353), Ts, [wt(l.$slots, u(356), {}, void 0, !0)])], 512)) : $a("", !0);
  };
} }), qn = /* @__PURE__ */ e2(Ds, [["__scopeId", "data-v-1ee4c4c9"]]), k2 = Yn;
(function(t, e) {
  const x = Yn, n = t();
  for (; ; )
    try {
      if (parseInt(x(413)) / 1 + -parseInt(x(423)) / 2 * (-parseInt(x(418)) / 3) + -parseInt(x(417)) / 4 * (-parseInt(x(412)) / 5) + parseInt(x(416)) / 6 + -parseInt(x(421)) / 7 * (-parseInt(x(419)) / 8) + -parseInt(x(414)) / 9 + -parseInt(x(415)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Pe, 795613);
function Yn(t, e) {
  return t = t - 411, Pe()[t];
}
const Xn = qn;
Xn[k2(411)] = function(t) {
  const e = k2;
  t[e(422)](e(420), qn);
};
function Pe() {
  const t = ["10709019FwbytR", "26742700TWZbxO", "8056968sgQNor", "16TvZCMc", "1301628PlxLLg", "8pBxZJX", "CInfoPopup", "9649738EddzQc", "component", "4AobQJa", "install", "357335OsyQOj", "784792RactYi"];
  return Pe = function() {
    return t;
  }, Pe();
}
(function(t, e) {
  const x = nx, n = t();
  for (; ; )
    try {
      if (parseInt(x(376)) / 1 * (-parseInt(x(367)) / 2) + parseInt(x(361)) / 3 * (parseInt(x(377)) / 4) + -parseInt(x(357)) / 5 * (parseInt(x(371)) / 6) + parseInt(x(360)) / 7 + parseInt(x(374)) / 8 * (parseInt(x(372)) / 9) + -parseInt(x(364)) / 10 * (-parseInt(x(368)) / 11) + parseInt(x(369)) / 12 * (-parseInt(x(358)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ke, 117491);
function ke() {
  const t = ["77xZwOvY", "1701060evzXdP", "bottom-start", "31794lGkYlC", "279ZGYvFg", "value", "56488OiqhcE", "options", "1GvLLbm", "4kUqcXF", "manual", "position", "forEach", "205NGygyl", "13cNmzpK", "show", "355649NxxknD", "304503ZiCGvq", "some", "isShow", "303650DwpEPT", "getBoundingClientRect", "c-cesium-rightmenu", "214498nkxdyQ"];
  return ke = function() {
    return t;
  }, ke();
}
function nx(t, e) {
  return t = t - 357, ke()[t];
}
const Jn = E0({ name: "CRightMenu", __name: "right-menu", setup(t) {
  const e = Ws(), { executeFilter: x } = e, { eventList: n, rightClickEvent: a, menuOptions: s, cachePosition: r, posOffset: i, isShow: c } = Ka(e), o = Lt(() => {
    const p = nx;
    return c.value && s[p(373)][p(362)]((y) => {
      var S;
      return (S = y == null ? void 0 : y[p(363)]) == null ? void 0 : S.call(y, { data: y, position: r[p(373)] });
    });
  }), f = yx(0), l = yx(0), h = Yt(async (p) => {
    const y = nx;
    c[y(373)] = !1;
    const S = p[y(379)][y(379)], M = px(i);
    x(S);
    const O = Sr(), R = O[y(365)]();
    f[y(373)] = S.x + R.x - M.x, l[y(373)] = S.y + R.y - M.y, a[y(373)][y(380)]((T) => T({ position: S })), await nn(), c[y(373)] = !0;
  }, { isEntity: !0 }), u = Y0(() => {
    const p = nx;
    c[p(373)] = !1;
  }), d = (p, y) => {
    var M, O;
    (O = (M = n[nx(373)])[p]) == null || O.call(M, { ...y, position: r }), c.value = !1;
  };
  return rt(() => {
    h(), u();
  }), (p, y) => {
    const S = nx, M = Nt("n-dropdown");
    return P0(), Vt(M, { class: S(366), placement: S(370), trigger: S(378), show: o[S(373)], options: Ot(s), x: f.value, y: l[S(373)], onContextmenu: y[0] || (y[0] = qa(() => {
    }, ["prevent"])), onSelect: d }, null, 8, [S(359), S(375), "x", "y"]);
  };
} }), A2 = Qn;
(function(t, e) {
  const x = Qn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(194)) / 1 * (parseInt(x(201)) / 2) + -parseInt(x(193)) / 3 * (-parseInt(x(199)) / 4) + parseInt(x(196)) / 5 * (-parseInt(x(200)) / 6) + -parseInt(x(203)) / 7 + -parseInt(x(195)) / 8 + parseInt(x(204)) / 9 + -parseInt(x(198)) / 10 * (-parseInt(x(192)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ae, 629742);
function Ae() {
  const t = ["5493600aWCtLh", "8214210rwoFWP", "15587902XBhDrz", "2560515QmzZNT", "54559ZIWwdy", "6359392JxgMNf", "20GrmhfD", "install", "10SliVbX", "4dgNhUC", "1378878EuUlaE", "2eUoyoS", "component"];
  return Ae = function() {
    return t;
  }, Ae();
}
const Zn = Jn;
function Qn(t, e) {
  return t = t - 192, Ae()[t];
}
Zn[A2(197)] = function(t) {
  t[A2(202)]("CRightMenu", Jn);
};
const t2 = H0;
(function(t, e) {
  const x = H0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(244)) / 1 + parseInt(x(230)) / 2 * (parseInt(x(215)) / 3) + parseInt(x(212)) / 4 * (-parseInt(x(237)) / 5) + parseInt(x(222)) / 6 * (parseInt(x(211)) / 7) + -parseInt(x(246)) / 8 * (-parseInt(x(210)) / 9) + parseInt(x(224)) / 10 + -parseInt(x(225)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Le, 906648);
const Ps = { class: "c-scale" }, ks = { class: t2(231) }, As = E0({ name: t2(214) });
function Le() {
  const t = ["556tyJTdl", "c-scale__label", "scene", "pick", "length", " km", "getPickRay", "55910RvLodG", "cartesianToCartographic", "count", "push", "clientHeight", "c-scale__bar", "changed", "1470451wbYURf", "canvas", "5503928lbHACp", "camera", "9cvuGXP", "27699anxVeu", "432TMFtVp", "value", "CScale", "11277xnAQhM", "ellipsoid", "updateType", "addEventListener", "clientWidth", "removeEventListener", "div", "1362YRmgCT", "label", "17311190SdAdcS", "8553556CyStgy", "globe", "change", "setEndPoints", "barWidth"];
  return Le = function() {
    return t;
  }, Le();
}
function H0(t, e) {
  return t = t - 210, Le()[t];
}
const Ls = E0({ ...As, props: { count: { type: Number, default: 3 }, updateType: { type: String, default: t2(227) } }, setup(t) {
  const e = t, x = [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 3e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 2e7, 3e7, 5e7], n = yx([]), a = new Pt(), s = (c) => {
    const o = H0, f = c[o(245)][o(219)], l = c[o(245)][o(241)], h = c[o(247)][o(236)](new U(f / 2 | 0, l - 1)), u = c.camera[o(236)](new U(1 + f / 2 | 0, l - 1)), d = c[o(226)], p = d[o(233)](h, c), y = d[o(233)](u, c);
    if (!G(p) || !G(y)) {
      n[o(213)] = [];
      return;
    }
    const S = d[o(216)][o(238)](p), M = d[o(216)][o(238)](y);
    a[o(228)](S, M);
    const O = a.surfaceDistance, R = 100;
    let T;
    for (let A = x[o(234)] - 1; !G(T) && A >= 0; --A)
      if (x[A] / O < R) {
        T = x[A];
        break;
      }
    if (!G(T)) {
      n[o(213)] = [];
      return;
    }
    r(T, O);
  }, r = (c, o) => {
    const f = H0;
    let l = c, h = " m";
    c >= 1e3 && (l = c / 1e3, h = f(235));
    const u = [];
    for (let d = 1; d <= e[f(239)]; d++)
      u[f(240)]({ label: l * d + h, barWidth: c / o | 0 });
    n[f(213)] = u;
  };
  let i;
  return S0((c) => {
    const o = H0, f = () => {
      const l = H0;
      s(c[l(232)]), n[l(213)][l(234)] ? c[l(232)].postUpdate[l(220)](f) : c[l(232)].requestRender();
    };
    if (c[o(232)].postUpdate[o(218)](f), e[o(217)] === o(227)) {
      i = c.camera[o(243)].addEventListener(() => s(c.scene));
      return;
    }
    i = c[o(232)].preUpdate[o(218)](s);
  }), rt(() => {
    i == null || i();
  }), (c, o) => {
    const f = H0;
    return Ya((P0(), ax("div", Ps, [(P0(!0), ax(an, null, rn(n[f(213)], (l) => {
      const h = f;
      return P0(), ax(h(221), { key: l[h(223)] }, [M0("div", ks, Rt(l[h(223)]), 1), M0(h(221), { class: h(242), style: Xa({ width: l[h(229)] + "px" }) }, null, 4)]);
    }), 128))], 512)), [[Ja, !!n[f(213)].length]]);
  };
} }), n2 = /* @__PURE__ */ e2(Ls, [["__scopeId", "data-v-9c905d0b"]]), a2 = r2;
(function(t, e) {
  const x = r2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(158)) / 1 * (parseInt(x(147)) / 2) + -parseInt(x(146)) / 3 * (parseInt(x(155)) / 4) + parseInt(x(136)) / 5 * (parseInt(x(145)) / 6) + -parseInt(x(141)) / 7 + -parseInt(x(151)) / 8 * (-parseInt(x(134)) / 9) + -parseInt(x(149)) / 10 * (-parseInt(x(153)) / 11) + parseInt(x(157)) / 12 * (parseInt(x(135)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Oe, 869929);
function r2(t, e) {
  return t = t - 133, Oe()[t];
}
const Os = [a2(144)];
function Oe() {
  const t = ["671gwSIAt", "ratio", "2937572TeaILu", "1:25万", "1496652LaNFST", "73xrUbLh", "1:5万", "1:1万", "1475478vamubA", "78jQZKrm", "35zpJNop", "div", "1:1400万", "log", "$attrs", "5345319kdBESU", "el-popover", "data", "onClick", "296478TFqgJl", "3MSGwrD", "25982cXmkMr", "ScaleWithSelect", "256770XCkpNS", "popover", "32NdIVVM", "1:50万"];
  return Oe = function() {
    return t;
  }, Oe();
}
const Ns = E0({ name: a2(148) }), Kn = E0({ ...Ns, setup(t) {
  const e = a2, x = (a) => {
    const s = r2;
    An(a[s(154)]), console[s(139)](s(143), a);
  }, n = [{ ratio: 1, label: e(138) }, { ratio: 4, label: "1:100万" }, { ratio: 5, label: e(152) }, { ratio: 13.5, label: e(156) }, { ratio: 60, label: e(159) }, { ratio: 200, label: e(133) }];
  return (a, s) => {
    const r = e, i = Nt(r(142));
    return P0(), Vt(i, _2(b2(a[r(140)][r(150)])), { reference: m2(() => [Za(n2, _2(b2(a[r(140)])), null, 16)]), default: m2(() => [M0(r(137), null, [(P0(), ax(an, null, rn(n, (c) => M0(r(137), { key: c.ratio, onClick: (f) => x(c) }, Rt(c.label), 9, Os)), 64))])]), _: 1 }, 16);
  };
} });
function xa(t, e) {
  return t = t - 324, Ne()[t];
}
const Mt = xa;
(function(t, e) {
  const x = xa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(331)) / 1 + -parseInt(x(327)) / 2 + -parseInt(x(328)) / 3 + -parseInt(x(332)) / 4 * (parseInt(x(335)) / 5) + -parseInt(x(326)) / 6 * (parseInt(x(336)) / 7) + parseInt(x(333)) / 8 * (parseInt(x(329)) / 9) + parseInt(x(324)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ne, 324925);
function Ne() {
  const t = ["CScaleSelect", "40AgBLXe", "248591PYhJBy", "14259090MbwZRc", "component", "18DiALnC", "537036YajHkh", "1269576NAKBBg", "1838259SKWTKe", "install", "64650vlrFvE", "221168jthLZa", "8BqLTyk"];
  return Ne = function() {
    return t;
  }, Ne();
}
const ea = n2;
ea[Mt(330)] = function(t) {
  t.component("CScale", n2);
};
const ta = Kn;
ta[Mt(330)] = function(t) {
  const e = Mt;
  t[e(325)](e(334), Kn);
};
const s0 = na;
(function(t, e) {
  const x = na, n = t();
  for (; ; )
    try {
      if (parseInt(x(135)) / 1 * (-parseInt(x(136)) / 2) + -parseInt(x(139)) / 3 * (-parseInt(x(127)) / 4) + parseInt(x(134)) / 5 * (-parseInt(x(126)) / 6) + -parseInt(x(129)) / 7 * (parseInt(x(132)) / 8) + parseInt(x(122)) / 9 + parseInt(x(124)) / 10 + -parseInt(x(141)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ve, 318720);
function Ve() {
  const t = ["1332YHdaLO", "WGS84", "fromRotationMatrix", "474900cHILyS", "forwardExtrapolationType", "1370501rIyVSP", "addEventListener", "_forwardExtrapolationType", "position", "isConstant", "HOLD", "2596320tIyKLp", "_ellipsoid", "4101140DdALut", "getValue", "2868882AohvjO", "16uriJey", "raiseEvent", "631841udjSdo", "_velocityVectorProperty", "definitionChanged", "32FMsObp", "ellipsoid", "5PfzSix", "74LqvCve"];
  return Ve = function() {
    return t;
  }, Ve();
}
new g();
const L2 = new g(), O2 = new Na();
function na(t, e) {
  return t = t - 118, Ve()[t];
}
class Nc {
  constructor(e, x = Fx[s0(137)]) {
    const n = s0;
    this[n(130)] = new La(e, !0), this[n(131)] = new Sx(), this._forwardExtrapolationType = vt[n(121)], this[n(130)][n(140)] = this[n(118)], this[n(123)] = x, this[n(130)].definitionChanged[n(142)](() => {
      this.definitionChanged.raiseEvent(this);
    });
  }
  get [s0(120)]() {
    return this._velocityVectorProperty.isConstant;
  }
  get [s0(119)]() {
    const e = s0;
    return this[e(130)][e(119)];
  }
  set [s0(119)](e) {
    const x = s0;
    this[x(130)][x(119)] = e;
  }
  get [s0(133)]() {
    return this[s0(123)];
  }
  set [s0(133)](e) {
    const x = s0;
    this[x(123)] !== e && (this[x(123)] = e, this[x(131)][x(128)](this));
  }
  get forwardExtrapolationType() {
    return this[s0(118)];
  }
  set forwardExtrapolationType(e) {
    const x = s0;
    this._forwardExtrapolationType = e, this[x(130)].forwardExtrapolationType = this[x(118)];
  }
  [s0(125)](e, x) {
    const n = s0, a = this._velocityVectorProperty[n(125)](e, L2);
    if (G(a))
      return Oa.rotationMatrixFromPositionVelocity(L2, a, this[n(123)], O2), Va[n(138)](O2, x);
  }
}
function Re() {
  const t = ["getInertialValue", "divideByScalar", "subtract", "isConstant", "getValue", "_currentCartesian", "25WMmuGR", "2GgSWPA", "267068lxgqHk", "3HJGCAI", "1981264vxZeoF", "position", "6829889qektKn", "clone", "addSeconds", "_getValueFixed", "addEventListener", "getOrbitFixedValue", "normalize", "ZERO", "equals", "forwardExtrapolationType", "INERTIAL", "raiseEvent", "time is required", "_position", "_definitionChanged", "1537081UsOQRK", "199296bJRIxB", "6870VXwEwP", "definitionChanged", "warn", "_getValueInertial", "3141hFKSOL", "subscription", "referenceFrame", "181117CsUEMj", "HOLD", "_currentVelocity", "_subscription", "_forwardExtrapolationType", "_normalize"];
  return Re = function() {
    return t;
  }, Re();
}
const $ = s2;
function s2(t, e) {
  return t = t - 122, Re()[t];
}
(function(t, e) {
  const x = s2, n = t();
  for (; ; )
    try {
      if (parseInt(x(122)) / 1 * (-parseInt(x(135)) / 2) + -parseInt(x(137)) / 3 * (-parseInt(x(136)) / 4) + parseInt(x(134)) / 5 * (-parseInt(x(156)) / 6) + -parseInt(x(155)) / 7 + parseInt(x(138)) / 8 + parseInt(x(161)) / 9 * (-parseInt(x(157)) / 10) + parseInt(x(140)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Re, 128781);
const Vs = new g(), N2 = new g(), V2 = new r0();
new g();
new g();
new g();
const Rs = new r0(), F0 = 1 / 60;
class aa {
  constructor(e, x = !0) {
    const n = s2;
    this[n(153)] = e, this[n(125)] = void 0, this[n(154)] = new Sx(), this[n(127)] = x, this[n(133)] = void 0, this[n(124)] = void 0, this[n(126)] = vt[n(123)];
  }
  get [$(162)]() {
    return this[$(125)];
  }
  set [$(162)](e) {
    const x = $;
    this[x(125)] = e;
  }
  get [$(158)]() {
    return this[$(154)];
  }
  get [$(139)]() {
    return this[$(153)];
  }
  set position(e) {
    var a;
    const x = $, n = this[x(153)];
    n !== e && (G(n) && ((a = this[x(125)]) == null || a.call(this)), this[x(153)] = e, G(e) && (this[x(125)] = e == null ? void 0 : e[x(158)][x(144)](() => {
      this[x(154)].raiseEvent(this);
    }, this)), this[x(154)].raiseEvent(this));
  }
  set [$(146)](e) {
    const x = $;
    this[x(127)] !== e && (this._normalize = e, this[x(154)][x(151)](this));
  }
  get [$(146)]() {
    return this[$(127)];
  }
  get [$(149)]() {
    return this[$(126)];
  }
  set forwardExtrapolationType(e) {
    const x = $;
    this[x(126)] = e;
  }
  [$(132)](e, x, n) {
    const a = $, s = this._position;
    if (!s) return;
    if (!G(this[a(126)]) || this._forwardExtrapolationType !== vt[a(123)])
      return s[a(163)] === h2[a(150)] ? (this[a(124)] = this[a(160)](e, x, n), this[a(124)]) : (this[a(124)] = this[a(143)](e, x, n), this[a(124)]);
    let r;
    if (s[a(163)] === h2.INERTIAL) {
      const i = s.getInertialValue(e), c = s[a(128)](r0.addSeconds(e, F0, Rs));
      if (g[a(148)](i, this._currentCartesian) || g.equals(i, c)) {
        const o = s[a(132)](e);
        return G(o) && G(n) && o.clone(n), this[a(124)];
      }
      this._currentCartesian = i == null ? void 0 : i[a(141)](), r = this[a(160)](e, x, n);
    } else r = this[a(143)](e, x, n);
    if (!r) {
      const i = s.getValue(e);
      return G(i) && G(n) && i[a(141)](n), this[a(124)];
    }
    return this._currentVelocity = r, this._currentVelocity;
  }
  [$(160)](e, x, n) {
    const a = $;
    if (!G(e)) throw new Q2(a(152));
    !G(x) && (x = new g());
    const s = this[a(153)];
    if (s[a(131)]) return this[a(127)] ? void 0 : g[a(141)](g[a(147)], x);
    let r = s[a(132)](e, Vs), i = s[a(128)](r0[a(142)](e, F0, V2), N2);
    if (i = s[a(145)](e, i), !G(r) || !G(i) && (i = r, r = s[a(128)](r0[a(142)](e, -F0, V2), N2), r = s[a(145)](e, r), !G(r)))
      return;
    if (g.equals(r, i)) return this[a(127)] ? void 0 : g[a(141)](g[a(147)], x);
    G(n) && r[a(141)](n);
    const c = g.subtract(i, r, x);
    return this[a(127)] ? g[a(146)](c, x) : g[a(129)](c, F0, x);
  }
  [$(143)](e, x, n) {
    const a = $;
    if (!G(e)) {
      console[a(159)](a(152));
      return;
    }
    !G(x) && (x = new g());
    const s = this[a(153)];
    if (s != null && s[a(131)]) return this[a(127)] ? void 0 : g[a(141)](g[a(147)], x);
    let r = s[a(132)](e), i = s[a(132)](r0.addSeconds(e, F0, new r0()));
    if (!G(r) || !G(i) && (i = r, r = s[a(132)](r0[a(142)](e, -F0, new r0())), !G(r)))
      return;
    if (g[a(148)](r, i)) return this[a(127)] ? void 0 : g[a(141)](g[a(147)], x);
    G(n) && r[a(141)](n);
    const c = g[a(130)](i, r, x);
    return this[a(127)] ? g[a(146)](c, x) : g[a(129)](c, F0, x);
  }
  equals(e) {
    var n;
    const x = $;
    return this === e || e instanceof aa && ((n = this[x(153)]) == null ? void 0 : n[x(148)](e[x(153)]));
  }
}
const g0 = i2;
function i2(t, e) {
  return t = t - 145, Ge()[t];
}
function Ge() {
  const t = ["equals", "time is required", "_currentRotation", "_position", "_getValue", "WGS84", "9526069NtVYSR", "latitude", "abs", "3sphxTZ", "36aGdlZr", "getValue", "3903702GXWtzX", "fromCartesian", "963605GjnmXZ", "position", "isConstant", "522115QalkAG", "10TfzBzp", "7010056yZboAy", "3563394BSGrbT", "atan", "_subscription", "raiseEvent", "addSeconds", "definitionChanged", "longitude", "1453527npYMQf"];
  return Ge = function() {
    return t;
  }, Ge();
}
(function(t, e) {
  const x = i2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(149)) / 1 + parseInt(x(155)) / 2 * (-parseInt(x(172)) / 3) + parseInt(x(145)) / 4 * (parseInt(x(152)) / 5) + parseInt(x(147)) / 6 + parseInt(x(169)) / 7 + parseInt(x(154)) / 8 + -parseInt(x(162)) / 9 * (parseInt(x(153)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ge, 920743);
const Gs = new g(), R2 = new g(), bt = new n0(), mt = new n0(), G2 = new r0(), W2 = 1 / 60;
let F2, Vx;
class Vc {
  constructor(e) {
    const x = i2;
    this[x(166)] = e, this[x(160)] = new Sx(), this._subscription = void 0, this[x(165)] = void 0;
  }
  get [g0(151)]() {
    var x;
    const e = g0;
    return (x = this[e(166)]) == null ? void 0 : x[e(151)];
  }
  get [g0(150)]() {
    return this._position;
  }
  set [g0(150)](e) {
    var a;
    const x = g0, n = this[x(166)];
    n !== e && (G(n) && ((a = this[x(157)]) == null || a.call(this)), this[x(166)] = e, G(e) && (this[x(157)] = e[x(160)].addEventListener(() => {
      const s = x;
      this[s(160)][s(158)](this);
    }, this)), this[x(160)].raiseEvent(this));
  }
  [g0(146)](e) {
    const x = g0, n = this[x(167)](e);
    return n ? (this[x(165)] = n, this[x(165)]) : this._currentRotation;
  }
  [g0(163)](e) {
    const x = g0;
    return this === e || this[x(166)].equals(e[x(166)]);
  }
  _getValue(e) {
    const x = g0;
    if (!G(e)) throw new Q2(x(164));
    const n = this._position;
    if (n[x(151)]) return;
    let a = n.getValue(e, Gs), s = n[x(146)](r0[x(159)](e, W2, G2), R2);
    if (G(a) && !(!G(s) && (s = a, a = n.getValue(r0[x(159)](e, -W2, G2), R2), !G(a))) && !g[x(163)](a, s))
      return n0.fromCartesian(a, Fx.WGS84, bt), n0[x(148)](s, Fx[x(168)], mt), Vx = mt[x(161)] - bt[x(161)], F2 = (mt[x(170)] - bt[x(170)]) / Vx, Math[x(156)](F2) - Vx / Math[x(171)](Vx) * Math.PI / 2;
  }
}
const xx = c2;
function c2(t, e) {
  return t = t - 328, We()[t];
}
function We() {
  const t = ["entityOption", "右键菜单的key必须是唯一值 ", "2693475iTEzJZ", "forEach", "values", "warn", "966jYZyIQ", "situationRightMenu", "285088ZJvaOo", "emptyOption", "replace", "30caCsLf", "8dhHWvN", "1980lwbKfR", "184912SUSlJJ", "5939300CGqfDH", "rightClickCallback", "key", "1657915nlLofj", "50485zQwOwq"];
  return We = function() {
    return t;
  }, We();
}
(function(t, e) {
  const x = c2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(328)) / 1 + parseInt(x(340)) / 2 * (parseInt(x(347)) / 3) + -parseInt(x(342)) / 4 + parseInt(x(333)) / 5 * (parseInt(x(345)) / 6) + -parseInt(x(332)) / 7 + parseInt(x(346)) / 8 * (-parseInt(x(336)) / 9) + parseInt(x(329)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(We, 170891);
const Rc = sn(xx(341), { state() {
  return { rightMenuSelectData: null, menuShow: !1, menuX: 0, menuY: 0, cartesian2: new U(0, 0), entityOption: {}, emptyOption: {}, rightClickCallback: /* @__PURE__ */ new Set() };
}, getters: { getterEntityMenuOptions: (t) => Object.values(t[xx(334)]), getterEmptyMenuOptions: (t) => Object[xx(338)](t.emptyOption) }, actions: { pushEntityOption(t, e) {
  !g2(t) && (t = [t]);
  const x = this.entityOption;
  t.forEach((n) => {
    const a = c2;
    if (e != null && e.replace) {
      x[n[a(331)]] = n;
      return;
    }
    if (x[n[a(331)]]) {
      console.warn(a(335) + n.key);
      return;
    }
    x[n[a(331)]] = n;
  });
}, removeEntityOptionByKey(t) {
  const e = xx;
  if (Ct(t)) {
    delete this.entityOption[t];
    return;
  }
  t[e(337)]((x) => {
    const n = e;
    delete this[n(334)][x];
  });
}, pushEmptyOption(t, e) {
  const x = xx;
  !g2(t) && (t = [t]);
  const n = this[x(343)];
  t[x(337)]((a) => {
    const s = x;
    if (e != null && e[s(344)]) {
      n[a[s(331)]] = a;
      return;
    }
    if (n[a[s(331)]]) {
      console[s(339)](s(335) + a.key);
      return;
    }
    n[a[s(331)]] = a;
  });
}, removeEmptyOptionByKey(t) {
  if (Ct(t)) {
    delete this.emptyOption[t];
    return;
  }
  t.forEach((e) => {
    delete this.emptyOption[e];
  });
}, clearOptions() {
  const t = xx;
  this.entityOption = {}, this[t(343)] = {}, this[t(330)].clear();
} } });
(function(t, e) {
  const x = v0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(418)) / 1 + -parseInt(x(417)) / 2 + parseInt(x(427)) / 3 + parseInt(x(415)) / 4 * (parseInt(x(419)) / 5) + -parseInt(x(433)) / 6 + -parseInt(x(410)) / 7 * (-parseInt(x(425)) / 8) + parseInt(x(422)) / 9 * (-parseInt(x(428)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fe, 356170);
function Fe() {
  const t = ["470234hgclIN", "70294EXefJB", "10055SAQcHT", "some", "length", "246546FxKzGc", "menuMap", "isShow", "482456vXQoTW", "key", "1414119UUgPsz", "40SeUFOB", "values", "eventList", "group", "push", "1880736agyldF", "keys", "rightClickEvent", "35UjPHIK", "cachePosition", "add", "forEach", "$reset", "620DnGPOy", "event"];
  return Fe = function() {
    return t;
  }, Fe();
}
function v0(t, e) {
  return t = t - 408, Fe()[t];
}
const Ws = sn("cesiumRightMenu", { state() {
  return { isShow: !1, posOffset: { x: 0, y: 0 }, menuMap: { baseGroup: {}, otherGroup: {} }, eventList: {}, rightClickEvent: /* @__PURE__ */ new Set(), cachePosition: null };
}, getters: { menuOptions(t) {
  const e = v0, x = t[e(423)], n = [];
  return Object[e(429)](x)[e(413)]((a, s) => {
    const r = e, i = Object[r(429)](a);
    i[r(421)] && (n[r(432)](...i), s !== Object[r(429)](x)[r(421)] - 1 && n[r(432)]({ type: "divider", show: i[r(420)]((c) => c.show) }));
  }), n;
} }, actions: { setMenu(t, e) {
  const x = v0;
  !this[x(423)][t[x(431)]] && (this[x(423)][t[x(431)]] = {}), this[x(423)][t.group][t.key] = t, e && (this.eventList[t[x(426)]] = e);
}, setMenus(t) {
  const e = v0;
  t[e(413)]((x) => {
    const n = e;
    this.setMenu(x.data, x[n(416)]);
  });
}, clearMenu() {
  const t = v0;
  Object[t(408)](this[t(423)])[t(413)]((e) => {
    const x = t;
    this[x(423)][e] = {};
  }), this[t(430)] = {};
}, clearByGroup(t) {
  const e = v0;
  this[e(423)][t] = {};
}, executeFilter(t) {
  const e = v0;
  t && (this[e(411)] = t);
  const x = t ?? this.cachePosition;
  Object[e(429)](this[e(423)])[e(413)]((n) => {
    const a = e;
    Object[a(429)](n)[a(413)]((s) => {
      var i;
      const r = a;
      s.show = ((i = s[r(424)]) == null ? void 0 : i.call(s, { data: s, position: x })) ?? !1;
    });
  });
}, setRightClick(t) {
  const e = v0;
  this[e(409)][e(412)](t);
}, setOffset(t, e) {
  this.posOffset = { x: t, y: e };
}, reset() {
  this[v0(414)]();
}, closeMenu() {
  const t = v0;
  this[t(424)] = !1;
} } });
(function(t, e) {
  const x = ra, n = t();
  for (; ; )
    try {
      if (parseInt(x(141)) / 1 * (parseInt(x(133)) / 2) + -parseInt(x(142)) / 3 + -parseInt(x(135)) / 4 + -parseInt(x(136)) / 5 + parseInt(x(139)) / 6 * (-parseInt(x(137)) / 7) + parseInt(x(143)) / 8 * (-parseInt(x(138)) / 9) + -parseInt(x(134)) / 10 * (-parseInt(x(144)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ze, 803324);
function ra(t, e) {
  return t = t - 133, ze()[t];
}
function ze() {
  const t = ["46027510ekSeTB", "5094348dohXwV", "3618815gTbVfk", "4058313WBaiNI", "167517qSOuRu", "6cIqcXJ", "use", "20521yWMaRD", "3615198YkTFDC", "616Bievgm", "11DYFORN", "138PufVoj"];
  return ze = function() {
    return t;
  }, ze();
}
const Gc = { install(t) {
  const e = ra;
  t[e(140)](Un), t[e(140)](zn), t[e(140)](Xn), t[e(140)](Zn), t[e(140)](ea), t.use(ta);
} }, e0 = o2;
function o2(t, e) {
  return t = t - 421, Be()[t];
}
function Be() {
  const t = ["3lRAQPp", "rectangle", "length", "12fDBDDQ", "center", "tileXYToNativeRectangle", "lineWidth", "tileHeight", "height", "262465ZiNVCi", "toFixed", "_tilingScheme", "font", "maximumLevel", "hasAlphaChannel", "_errorEvent", "YELLOW", "toCssColorString", "_tileWidth", "getTileCredits", "width", "fillText", "getContext", "resolve", "594828AMJwPQ", "pickFeatures", "textAlign", "417474TBygBS", "errorEvent", "_readyPromise", "913660UFjUmP", "minimumLevel", "264CFoVKJ", "bold 12px Arial", "proxy", "_color", "tileDiscardPolicy", "13951qnqBqU", "readyPromise", "tilingScheme", "3280ZhQpmW", "°, ", "3058UYZhEF", "_labelColor", "207115ymKpWI"];
  return Be = function() {
    return t;
  }, Be();
}
(function(t, e) {
  const x = o2, n = t();
  for (; ; )
    try {
      if (parseInt(x(436)) / 1 + parseInt(x(461)) / 2 + parseInt(x(437)) / 3 * (-parseInt(x(422)) / 4) + -parseInt(x(446)) / 5 * (parseInt(x(440)) / 6) + parseInt(x(429)) / 7 * (-parseInt(x(424)) / 8) + -parseInt(x(464)) / 9 + parseInt(x(432)) / 10 * (parseInt(x(434)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Be, 150157);
class Fs {
  constructor(e) {
    const x = o2;
    e = e ?? {};
    const { color: n = W[x(453)], labelColor: a = W[x(453)], tileWidth: s = 256, tileHeight: r = 256 } = e;
    this[x(448)] = new Dt(), this._color = n.toCssColorString(), this[x(435)] = a[x(454)](), this._errorEvent = new Sx(), this[x(455)] = s, this._tileHeight = r, this[x(421)] = Promise[x(460)](!0);
  }
  get [e0(426)]() {
  }
  get tileWidth() {
    return this[e0(455)];
  }
  get [e0(444)]() {
    return this._tileHeight;
  }
  get [e0(450)]() {
  }
  get [e0(423)]() {
  }
  get [e0(431)]() {
    return this._tilingScheme;
  }
  get rectangle() {
    const e = e0;
    return this[e(448)][e(438)];
  }
  get [e0(428)]() {
  }
  get [e0(465)]() {
    return this[e0(452)];
  }
  get ready() {
    return !0;
  }
  get [e0(430)]() {
    return this[e0(421)];
  }
  get credit() {
  }
  get [e0(451)]() {
    return !0;
  }
  [e0(456)]() {
  }
  [e0(462)]() {
  }
  requestImage(e, x, n) {
    const a = e0, s = document.createElement("canvas");
    s[a(457)] = 256, s[a(445)] = 256;
    const r = s[a(459)]("2d");
    r.strokeStyle = this[a(427)], r[a(443)] = 1, r.strokeRect(1, 1, 255, 255), r[a(449)] = a(425), r[a(463)] = a(441), r.fillStyle = this._labelColor;
    const { west: i, north: c } = this[a(448)][a(442)](e, x, n), o = zs(n, i, c);
    return r[a(458)](o, o[a(439)] * 45 / 14, 15), Promise[a(460)](s);
  }
}
function zs(t, e, x) {
  const n = e0;
  if (t > 10) {
    const a = (t - 8) / 2, s = e.toFixed(a), r = x.toFixed(a);
    return s + n(433) + r + "°";
  }
  return e[n(447)](1) + n(433) + x.toFixed(1) + "°";
}
const d0 = sa;
(function(t, e) {
  const x = sa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(131)) / 1 + parseInt(x(147)) / 2 * (parseInt(x(154)) / 3) + -parseInt(x(160)) / 4 + -parseInt(x(148)) / 5 * (-parseInt(x(143)) / 6) + -parseInt(x(135)) / 7 * (-parseInt(x(159)) / 8) + -parseInt(x(155)) / 9 + parseInt(x(136)) / 10 * (-parseInt(x(158)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(je, 920213);
function je() {
  const t = ["8080848CgtCXr", "layer", "show", "845581JXgQoR", "56LFzBOP", "1934928ZdABFc", "863079oqrERb", "fromCssColorString", "_labelColor", "WHITE", "1298164jpVJjy", "40lhwGQf", "_layer", "tileGrid", "isDestroyed", "_gridShow", "_color", "_viewer", "78rQFiwW", "grid", "#8aaec3", "alpha", "1123418ekRIML", "620195SQZQKj", "remove", "_show", "imageryLayers", "withAlpha", "_init", "3ITFyJF"];
  return je = function() {
    return t;
  }, je();
}
const Bs = W[d0(132)](d0(145));
function sa(t, e) {
  return t = t - 131, je()[t];
}
class Wc {
  constructor(e) {
    const x = d0, { viewer: n, gridShow: a = !0, show: s = !1, color: r = Bs, labelColor: i = W[x(134)][x(152)](0.5) } = e ?? {};
    if (this._alpha = 1, this[x(142)] = n, this[x(137)] = { tileGrid: void 0, grid: void 0 }, this[x(150)] = s, !G(this[x(142)])) {
      console.warn("This Viewer is " + this._viewer);
      return;
    }
    this[x(140)] = a, this[x(150)] = s, this[x(141)] = r, this[x(133)] = i, this._init();
  }
  [d0(153)]() {
    const e = d0, x = this[e(142)][e(151)];
    this._layer[e(138)] = x.addImageryProvider(new Fs({ color: this._color, labelColor: this._labelColor })), this[e(140)] && (this[e(137)][e(144)] = x.addImageryProvider(new Ra({ color: this[e(141)], backgroundColor: W.TRANSPARENT, glowColor: W.TRANSPARENT, cells: 4 }))), this[e(157)] = this[e(150)];
  }
  [d0(139)]() {
    return !1;
  }
  set alpha(e) {
    const x = d0;
    this[x(137)][x(144)] && (this[x(137)][x(144)][x(146)] = e, this._layer[x(138)][x(146)] = e), this._alpha = e;
  }
  destroy() {
    const e = d0, x = this._viewer[e(151)];
    return this[e(137)][e(138)] && x[e(149)](this._layer[e(138)]), this._layer[e(144)] && x[e(149)](this[e(137)].grid), At(this);
  }
  set [d0(157)](e) {
    const x = d0;
    this[x(137)].tileGrid && (this[x(137)].tileGrid.show = e), this[x(137)][x(144)] && (this[x(137)][x(144)].show = e), this[x(150)] = e;
  }
  get [d0(156)]() {
    return this[d0(137)];
  }
}
(function(t, e) {
  for (var x = ia, n = t(); ; )
    try {
      var a = -parseInt(x(154)) / 1 + -parseInt(x(155)) / 2 * (parseInt(x(148)) / 3) + parseInt(x(150)) / 4 + parseInt(x(152)) / 5 + -parseInt(x(149)) / 6 + -parseInt(x(151)) / 7 + parseInt(x(153)) / 8;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(He, 321826);
function ia(t, e) {
  t = t - 148;
  var x = He(), n = x[t];
  return n;
}
function js(t, e) {
  return function() {
    var x = ia;
    N[x(156)].addMaterial(t, e);
  };
}
function He() {
  var t = ["2618903RqoDPk", "2182775CNYQzp", "2495608aGsRcJ", "128846oDjbEf", "214Krpixu", "_materialCache", "10029paqvEY", "950640xtJyQl", "2369744DFWSGp"];
  return He = function() {
    return t;
  }, He();
}
const j = oa;
(function(t, e) {
  const x = oa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(466)) / 1 + -parseInt(x(429)) / 2 * (-parseInt(x(454)) / 3) + -parseInt(x(461)) / 4 * (-parseInt(x(426)) / 5) + -parseInt(x(462)) / 6 + -parseInt(x(431)) / 7 * (-parseInt(x(442)) / 8) + parseInt(x(468)) / 9 + -parseInt(x(453)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ue, 840685);
N[j(464)] = j(425);
const ca = j(451);
N[j(428)][j(467)](N[j(464)], { fabric: { type: N.EllipseDiffuse, uniforms: { color: new W(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: ca }, translucent: function() {
  return !0;
} });
function Ue() {
  const t = ["_openAngleSubscription", "color", "_rotationSubscription", "3984wGMjke", "2760696AgQItz", "percent", "EllipseDiffuseType", "getType", "163844ufJIho", "addMaterial", "8577297GXDTeM", "_rotation", "_color", "_speed", "_taperPower", "_minAngleSubscription", "number", "EllipseDiffuse", "4775yvhROy", "_glow", "_materialCache", "410oxxiRk", "gradient", "1477XquyTC", "_glowPower", "rotation", "_number", "_percent", "openAngle", "_maxAngle", "getValue", "_numberSubscription", "_percentSubscription", "_maxAngleSubscription", "20936kQXmRZ", "equals", "minAngle", "prototype", "_gradient", "_gradientSubscription", "speed", "getValueOrDefault", "_speedSubscription", `
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
        }`, "_definitionChanged", "26331900XQRxeg", "24021oBEOOb", "_minAngle", "_openAngle", "maxAngle"];
  return Ue = function() {
    return t;
  }, Ue();
}
const Hs = js(N[j(464)], { fabric: { type: N[j(425)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: ca }, translucent: function() {
  return !0;
} });
function oa(t, e) {
  return t = t - 420, Ue()[t];
}
const Us = new W(1, 0, 0, 0.7), $s = 2, qs = 0.03, Ys = 0.2, Xs = 5, Js = 180, Zs = -180;
function dx(t) {
  const e = j;
  t = t ?? {}, this._definitionChanged = new Sx(), this[e(420)] = void 0, this._colorSubscription = void 0, this._speed = void 0, this[e(450)] = void 0, this[e(435)] = void 0, this[e(440)] = void 0, this[e(446)] = void 0, this[e(447)] = void 0, this[e(434)] = void 0, this[e(439)] = void 0, this[e(469)] = void 0, this[e(460)] = void 0, this[e(456)] = void 0, this[e(458)] = void 0, this._maxAngle = void 0, this[e(441)] = void 0, this[e(455)] = void 0, this[e(423)] = void 0, this[e(459)] = t[e(459)], this[e(448)] = t.speed, this.percent = t[e(463)], this[e(430)] = t.gradient, this[e(424)] = t.number, this[e(433)] = t[e(433)], this[e(436)] = t[e(436)], this.maxAngle = t[e(457)], this[e(444)] = t[e(444)];
}
Object.defineProperties(dx.prototype, { isConstant: { get: function() {
  const t = j;
  return l0.isConstant(this[t(420)]) && l0.isConstant(this[t(427)]);
} }, definitionChanged: { get: function() {
  return this[j(452)];
} }, color: T0(j(459)), speed: T0(j(448)), percent: T0(j(463)), gradient: T0(j(430)), number: T0(j(424)), rotation: T0(j(433)), openAngle: T0(j(436)), maxAngle: T0(j(457)), minAngle: T0(j(444)) }), dx[j(445)][j(465)] = function(t) {
  return j(425);
}, dx[j(445)][j(438)] = function(t, e) {
  var s, r;
  const x = j;
  !G(e) && (e = {}), e[x(459)] = l0.getValueOrClonedDefault(this._color, t, Us, e[x(459)]), e[x(448)] = l0[x(449)](this[x(421)], t, $s, e[x(448)]), e[x(463)] = l0.getValueOrDefault(this._percent, t, qs, e[x(463)]), e[x(430)] = l0.getValueOrDefault(this[x(446)], t, Ys, e.gradient), e[x(424)] = l0[x(449)](this[x(434)], t, Xs, e[x(424)]);
  let n = (s = this[x(433)]) == null ? void 0 : s[x(438)]();
  const a = (r = this[x(436)]) == null ? void 0 : r[x(438)]();
  if (y2(n) && y2(a)) {
    n %= 360;
    const i = a / 2;
    let c = -n + i + 90, o = -n - i + 90;
    n > 270 && (c += 360, o += 360), n < -90 && (c -= 360, o -= 360), e[x(457)] = c, e[x(444)] = o;
  } else {
    const i = l0.getValueOrDefault(this[x(437)], t, Js, e[x(457)]), c = l0.getValueOrDefault(this._minAngle, t, Zs, e[x(444)]);
    e.maxAngle = i > c ? i : c, e[x(444)] = c < i ? c : i;
  }
  return e;
}, dx[j(445)].equals = function(t) {
  const e = j;
  return this === t || t instanceof dx && l0.equals(this._color, t[e(420)]) && l0[e(443)](this[e(432)], t[e(432)]) && l0[e(443)](this[e(422)], t[e(422)]);
};
const L = ua;
(function(t, e) {
  const x = ua, n = t();
  for (; ; )
    try {
      if (-parseInt(x(134)) / 1 * (-parseInt(x(124)) / 2) + parseInt(x(133)) / 3 * (parseInt(x(115)) / 4) + parseInt(x(129)) / 5 * (parseInt(x(131)) / 6) + parseInt(x(117)) / 7 * (-parseInt(x(122)) / 8) + -parseInt(x(118)) / 9 + -parseInt(x(135)) / 10 + parseInt(x(145)) / 11 * (parseInt(x(139)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($e, 858350);
N[L(132)] = L(121);
const Qs = L(126);
N[L(138)][L(127)](N[L(132)], { fabric: { type: N[L(132)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 3, count: 2, gradient: 0.5 }, source: Qs }, translucent: function(t) {
  return !0;
} }), N[L(140)] = L(141);
const Ks = L(144);
N[L(138)].addMaterial(N[L(140)], { fabric: { type: N[L(140)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 3, count: 4, gradient: 0.2 }, source: Ks }, translucent: function(t) {
  return !0;
} }), N.CircleDiffuseType = L(143);
const xi = L(136);
N[L(138)][L(127)](N[L(125)], { fabric: { type: N[L(125)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 15 }, source: xi }, translucent: function(t) {
  return !0;
} }), N[L(146)] = "CommunicationFlow";
const ei = L(130);
N[L(138)].addMaterial(N.CommunicationFlowType, { fabric: { type: N[L(146)], uniforms: { color: new W(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 }, source: ei }, translucent: function(t) {
  return !0;
} }), N.PolylineFlowType = L(119);
const ti = L(137);
N[L(138)][L(127)](N[L(142)], { fabric: { type: N.PolylineFlowType, uniforms: { color: new W(1, 0, 0, 0.7), speed: 45, percent: 0.03, gradient: 0.2, number: 5 }, source: ti }, translucent: function(t) {
  return !0;
} }), N[L(128)] = L(116);
const ni = L(147);
N._materialCache[L(127)](N[L(128)], { fabric: { type: N.PolylineTrailType, uniforms: { color: new W(1, 0, 0, 0.7), image: N[L(120)], speed: 45, repeat: new U(1, 1) }, source: ni }, translucent: function(t) {
  return !0;
} }), N.PolylineMilitaryType = "PolylineMilitary";
function ua(t, e) {
  return t = t - 115, $e()[t];
}
const ai = `
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
    }`;
function $e() {
  const t = ["18WkLOwf", "BombRadiationType", "3MIPvap", "75118axowiu", "2739550fXTWou", `
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
    }`, `
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
        }`, "_materialCache", "132uIbVZV", "SensorWaveType", "SensorWave", "PolylineFlowType", "CircleDiffuse", `
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
      }`, "211486mBdBgp", "CommunicationFlowType", `
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
        }`, "4584460IHBdaD", "PolylineTrail", "7PSMMQa", "12680082qdRpqT", "PolylineFlow", "DefaultImageId", "BombRadiation", "2467736JyrzZI", "PolylineMilitaryType", "20RsXhhl", "CircleDiffuseType", `
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
     if(dis > per * 0.5){
       discard;
     }else {
       material.alpha = color.a  * dis / per ;
     }
   } else {
     vec3 str = materialInput.str;
     if(abs(str.z)  > 0.001){
       discard;
     }
     if(dis > 0.5){
       discard;
     } else {
       float perDis = 0.5 / count;
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
}`, "addMaterial", "PolylineTrailType", "1234815WNCTou", `
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
    }`];
  return $e = function() {
    return t;
  }, $e();
}
N[L(138)][L(127)](N[L(123)], { fabric: { type: N[L(123)], uniforms: { color: new W(1, 0, 0, 0.7), imageHead: N[L(120)], image: N[L(120)], repeat: new U(1, 1) }, source: ai }, translucent: function(t) {
  return !0;
} });
function ri() {
  Hs();
}
const z0 = u2;
(function(t, e) {
  const x = u2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(483)) / 1 + parseInt(x(497)) / 2 + parseInt(x(488)) / 3 * (parseInt(x(495)) / 4) + -parseInt(x(496)) / 5 * (parseInt(x(484)) / 6) + parseInt(x(491)) / 7 + parseInt(x(487)) / 8 * (-parseInt(x(489)) / 9) + parseInt(x(485)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qe, 677981);
const { sqrt: B0, pow: I, sin: _0, cos: c0, tan: z2, abs: B2 } = Math, si = { BEIJING54: { a: 6378245, b: 63568630188e-4 }, XIAN80: { a: 6378137, b: 63567523142e-4 }, CGCS2000: { a: 6378137, b: 635675231414e-5 } };
function qe() {
  const t = ["4SGggCv", "678635oUSjjI", "1966012sIdBPA", "918048rcRIee", "18WsHJUl", "7018930GYEANG", "_getLonLat", "5880BghYyk", "1485369exLeWl", "16569kbAxaq", "getFloorInteger", "8234261zYvpAB", "init", "parseInt", "_getXY"];
  return qe = function() {
    return t;
  }, qe();
}
function u2(t, e) {
  return t = t - 483, qe()[t];
}
class fa {
  constructor(e) {
    const x = u2;
    this.e1 = 0, this.a = 0, this.b = 0, this.f = 0, this.e = 0, this[x(492)](e);
  }
  [z0(492)](e) {
    const { a: x, b: n } = si[e], a = (x - n) / x, s = B0(2 * a - I(a, 2));
    this.e1 = s / B0(1 - I(s, 2)), this.a = x, this.b = n, this.f = a, this.e = s;
  }
  [z0(490)](e) {
    const x = z0;
    return typeof e == "string" ? Number[x(493)](e) : Math.floor(e);
  }
  getXY(e, x, n = 6, a = 0, s = 5e5, r = 0) {
    const i = z0;
    let c = this[i(490)](B2(e) / n + 1) * n - 3;
    return c = e > 0 ? c : -c, this[i(494)](e, x, c, a, s, r);
  }
  getLonLat(e, x, n, a = 6, s = 0, r = 5e5, i = 0) {
    const c = z0;
    let o = B2(n) * a - 3;
    return o = n > 0 ? o : -o, this[c(486)](e, x, o, s, r, i);
  }
  [z0(494)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, b: c, e: o, e1: f } = this, l = s, h = r, u = a, d = n, p = (x - u) * Math.PI / 180, y = (e - d) * Math.PI / 180, S = i / B0(1 - I(o * _0(p), 2)), M = I(i, 2) / c, O = 1 - 3 * I(f, 2) / 4 + 45 * I(f, 4) / 64 - 175 * I(f, 6) / 256 + 11025 * I(f, 8) / 16384, R = O - 1, T = 15 / 32 * I(f, 4) - 175 / 384 * I(f, 6) + 3675 / 8192 * I(f, 8), A = 0 - 35 / 96 * I(f, 6) + 735 / 2048 * I(f, 8), z = 315 / 1024 * I(f, 8), B = M * (O * p + _0(p) * (R * c0(p) + T * I(c0(p), 3) + A * I(c0(p), 5) + z * I(c0(p), 7))), D = z2(p), v = f * c0(p), E = B + I(y, 2) / 2 * S * _0(p) * c0(p) + I(y, 4) * S * _0(p) * I(c0(p), 3) / 24 * (5 - I(D, 2) + 9 * I(v, 2) + 4 * I(v, 4)) + I(y, 6) * S * _0(p) * I(c0(p), 5) * (61 - 58 * I(D, 2) + I(D, 4)) / 720;
    return { x: y * S * c0(p) + I(y, 3) * S / 6 * I(c0(p), 3) * (1 - I(D, 2) + I(v, 2)) + I(y, 5) * S / 120 * I(c0(p), 5) * (5 - 18 * I(D, 2) + I(D, 4) + 14 * I(v, 2) - 58 * I(v, 2) * I(D, 2)) + l, y: E + h };
  }
  [z0(486)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, e: c, e1: o } = this, f = 1, l = n, h = s, u = r, d = a, p = (1 - B0(1 - I(c, 2))) / (1 + B0(1 - I(c, 2))), y = (x - u) / f, S = y / (i * (1 - I(c, 2) / 4 - 3 * I(c, 4) / 64 - 5 * I(c, 6) / 256)), M = S + (3 * p / 2 - 27 * I(p, 3) / 32) * _0(2 * S) + (21 * I(p, 2) / 16 - 55 * I(p, 4) / 32) * _0(4 * S) + 151 * I(p, 3) / 96 * _0(6 * S) + 1097 / 512 * I(p, 4) * _0(8 * S), O = i * (1 - I(c, 2)) / B0(I(1 - I(c * _0(M), 2), 3)), R = i / B0(1 - I(c * _0(M), 2)), T = I(z2(M), 2), A = (e - h) / (f * R), z = I(o, 2) * I(c0(M), 2), B = M - R * Math.tan(M) / O * (I(A, 2) / 2 - (5 + 3 * T + 10 * z - 9 * T * z - 4 * I(z, 2) - 9 * I(o, 2)) * I(A, 4) / 24 + (61 + 90 * T + 45 * I(T, 2) - 256 * I(o, 2) - 3 * I(z, 2)) * I(A, 6) / 720);
    return { longitude: (l * Math.PI / 180 + 1 / c0(M) * (A - (1 + 2 * T + z) * I(A, 3) / 6 + (5 - 2 * z + 28 * T - 3 * I(z, 2) + 8 * I(o, 2) + 24 * I(T, 2)) * I(A, 5) / 120)) * 180 / Math.PI, latitude: B * 180 / Math.PI + d };
  }
}
const Wx = la;
function Ye() {
  const t = ["33MfFwKB", "WHITE", "132TeqneX", "_labelOptions", "1792wEOWJX", "CENTER", "711254LBibDN", "422145rNNcQQ", "add", "1086320FpiuoJ", "FILL_AND_OUTLINE", "67764qUSqzZ", "116964UJOVxc", "6685xgefZX", "POSITIVE_INFINITY", "225zbDgZv", "140QuKeTJ", "_labels", "5401908NgomTM"];
  return Ye = function() {
    return t;
  }, Ye();
}
(function(t, e) {
  const x = la, n = t();
  for (; ; )
    try {
      if (parseInt(x(247)) / 1 + parseInt(x(250)) / 2 + -parseInt(x(252)) / 3 * (parseInt(x(243)) / 4) + parseInt(x(237)) / 5 * (parseInt(x(253)) / 6) + -parseInt(x(254)) / 7 * (parseInt(x(245)) / 8) + -parseInt(x(248)) / 9 * (-parseInt(x(238)) / 10) + -parseInt(x(241)) / 11 * (parseInt(x(240)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ye, 478513);
function la(t, e) {
  return t = t - 236, Ye()[t];
}
const Y = 2.999999, da = { font: "bold 1rem Arial", fillColor: W[Wx(242)], outlineColor: W.BLACK, outlineWidth: 4, style: H2[Wx(251)], disableDepthTestDistance: Number[Wx(236)] };
function Xe(t, e) {
  return { positions: t, width: 0.5, material: N.fromType("Color", { color: e }) };
}
function Je(t, e, x, n = !0) {
  const a = Wx;
  return t[a(239)][a(249)]({ ...t[a(244)], position: e, text: x, horizontalOrigin: n ? yt[a(246)] : yt[a(246)] });
}
const ex = [1e5, 5e4, 1e4, 5e3, 1e3, 500, 100, 50, 10, 5, 1];
function pa(t, e = 0) {
  return !ex[e] || ex[e] === 1 ? 1 : t / ex[e] > 10 ? ex[e] : t / ex[e] > 3 ? ex[e + 1] : pa(t, e + 2);
}
function ii(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
const t0 = ha;
(function(t, e) {
  const x = ha, n = t();
  for (; ; )
    try {
      if (parseInt(x(453)) / 1 + -parseInt(x(460)) / 2 * (parseInt(x(457)) / 3) + -parseInt(x(455)) / 4 * (parseInt(x(464)) / 5) + parseInt(x(458)) / 6 * (-parseInt(x(465)) / 7) + -parseInt(x(452)) / 8 * (-parseInt(x(462)) / 9) + parseInt(x(467)) / 10 * (parseInt(x(466)) / 11) + parseInt(x(463)) / 12 * (parseInt(x(470)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ze, 855113);
function ha(t, e) {
  return t = t - 452, Ze()[t];
}
function Ze() {
  const t = ["removeAll", "7887195ywHBAy", "12vnDeJj", "11350nYOeDZ", "28qDcgll", "89551HLorIF", "1080ZOVEKE", "show", "_collection", "6049121MFlFPL", "add", "8WCnepD", "688483cqmqJZ", "_polylines", "2096oYbBRR", "push", "210726Zvnxaw", "348918PldeBX", "_labels", "18jEicKC"];
  return Ze = function() {
    return t;
  }, Ze();
}
class _a {
  constructor(e) {
    this._collection = new Ga(e), this._polylines = [];
  }
  [t0(471)](e) {
    const x = t0, n = this[x(469)][x(471)](e);
    return this[x(454)][x(456)](n), n;
  }
  [t0(461)]() {
    const e = t0;
    this[e(469)][e(461)](), this[e(454)] = [];
  }
  get [t0(468)]() {
    return this[t0(469)].show;
  }
  set [t0(468)](e) {
    const x = t0;
    this[x(469)][x(468)] = e;
  }
}
class ba {
  constructor() {
    const e = t0;
    this._collection = new Wa(), this[e(459)] = [];
  }
  [t0(471)](e) {
    const x = t0, n = this[x(469)][x(471)](e);
    return this[x(459)][x(456)](n), n;
  }
  [t0(461)]() {
    const e = t0;
    this._collection[e(461)](), this[e(459)] = [];
  }
  get [t0(468)]() {
    return this[t0(469)].show;
  }
  set [t0(468)](e) {
    const x = t0;
    this[x(469)][x(468)] = e;
  }
}
const q = f2;
function Qe() {
  const t = ["gap", "add", "fromCartesian", "mode", "_scale", "_polylines", "changeSceneMode", "_primitives", "_labels", "positions", "labelOptions", "130370csJWNi", "_rectangle", "_yRange", "distance", "north", "_getExtentView", "_lines", "destination", "removeAll", "primitives", "_labelOffset", "south", "position", "withAlpha", "3870gUOQGT", "_center", "_xRange", "_gaussTransform", "654264CMqHSg", "clientWidth", "_getLonLat", "124lzVpUv", "1571256chzjTM", "754039qDrBan", "changed", "_color", "geometry", "7NsLZVU", "clientHeight", "pickEllipsoid", "remove", "_viewer", "init", "_getXY", "material", "addEventListener", "CGCS2000", "WHITE", "coordinates", "latitude", "color", "cartesianToCanvasCoordinates", "point", "push", "1859370kRdami", "isDestroyed", "globe", "xRange", "scene", "forEach", "east", "Y: ", "destroy", "canvas", "_zoneWide", "_gap", "_color2D", "center", "SCENE3D", "1171zipSij", "camera", "length", "uniforms", "create", "36NEOFMm", "show", "_drawLines", "fromDegrees", "longitude", "_cameraListener", "_measuredGraticule", "west", "labelOffset", "5823lGyLSN", "_getScreenViewRange", "_show", "color2D"];
  return Qe = function() {
    return t;
  }, Qe();
}
(function(t, e) {
  const x = f2, n = t();
  for (; ; )
    try {
      if (parseInt(x(378)) / 1 * (parseInt(x(428)) / 2) + parseInt(x(429)) / 3 + parseInt(x(383)) / 4 * (-parseInt(x(407)) / 5) + parseInt(x(363)) / 6 * (parseInt(x(434)) / 7) + -parseInt(x(425)) / 8 + parseInt(x(392)) / 9 * (-parseInt(x(421)) / 10) + -parseInt(x(430)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qe, 270862);
const { abs: j2 } = Math;
function f2(t, e) {
  return t = t - 359, Qe()[t];
}
class Fc {
  constructor(e) {
    const x = f2;
    e = e ?? {}, this._viewer = e.viewer, this[x(422)] = e.center, this[x(400)] = e.scale ?? 1e3, this[x(432)] = e[x(359)] ?? W[x(444)][x(420)](0.9), this[x(375)] = e[x(395)] ?? W.GRAY[x(420)](0.8), this._labelOptions = { ...da, ...e[x(406)] }, this[x(374)] = e[x(396)] ?? 1, this._xRange = e[x(366)] ?? 50, this[x(409)] = e[x(366)] ?? 25, this[x(417)] = e[x(391)] ?? 0, this[x(373)] = 6, this._gaussTransform = new fa(x(443)), this[x(403)] = this._viewer[x(367)][x(416)].add(new K2()), this[x(413)] = this[x(403)][x(397)](new _a({ disableDepthTest: !0 })), this[x(404)] = this._primitives[x(397)](new ba()), this[x(394)] = !0, this[x(438)][x(389)] = this, this[x(439)]();
  }
  get [q(384)]() {
    return this[q(394)];
  }
  set [q(384)](e) {
    const x = q;
    this._show !== e && (this._show = e, this[x(403)].show = e);
  }
  set [q(376)](e) {
    const x = q;
    G(e) && (ii(this[x(422)], e) || (this[x(422)] = e, this[x(412)](), this[x(382)]()));
  }
  set scale(e) {
    const x = q;
    this[x(400)] !== e && (this[x(400)] = e, this[x(412)](), this[x(382)]());
  }
  [q(402)]() {
    const e = q, x = this._lines._polylines, n = this[e(438)][e(367)][e(399)] === h0[e(377)] ? this[e(432)] : this[e(375)];
    x[e(380)] > 0 && x[e(368)]((a) => {
      const s = e;
      a[s(441)][s(381)][s(359)] = n;
    });
  }
  [q(439)]() {
    const e = q, x = this._viewer[e(367)];
    this._cameraListener = x[e(379)][e(431)][e(442)](() => {
    });
  }
  update() {
    const e = q, x = this[e(413)][e(401)];
    if (x[e(380)] === 0) return;
    const n = this[e(438)][e(367)], a = this[e(404)]._labels;
    let s = n[e(360)](a[0][e(419)]), r = n[e(360)](a[1][e(419)]);
    G(s) && G(r) ? this[e(404)][e(384)] = U[e(410)](s, r) >= 100 : this[e(404)][e(384)] = !0, s = n[e(360)](x[0][e(405)][0]), r = n[e(360)](x[0][e(405)][1]), G(s) && G(r) ? this[e(413)][e(384)] = U.distance(s, r) >= 4 : this._lines[e(384)] = !0;
  }
  [q(382)]() {
    const e = q;
    this[e(413)][e(415)](), this[e(404)][e(415)]();
    const x = this[e(373)], { west: n, east: a, north: s, south: r } = this[e(412)]();
    let i = parseInt(j2(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let c = parseInt(j2(a) / x + 1) * x - 3;
    switch (c = a > 0 ? c : -c, c - i) {
      case 24:
        this[e(385)](i, n, i + Y, s, r), this[e(385)](i + 6, i + 3, i + 6 + Y, s, r), this._drawLines(i + 12, i + 9, i + 12 + Y, s, r), this._drawLines(i + 18, i + 15, i + 18 + Y, s, r), this[e(385)](c, c - 3, a, s, r);
        break;
      case 18:
        this[e(385)](i, n, i + Y, s, r), this[e(385)](i + 6, i + 3, i + 6 + Y, s, r), this[e(385)](i + 12, i + 9, i + 12 + Y, s, r), this[e(385)](c, c - 3, a, s, r);
        break;
      case 12:
        this[e(385)](i, n, i + Y, s, r), this[e(385)](i + 6, i + 3, i + 6 + Y, s, r), this[e(385)](c, c - 3, a, s, r);
        break;
      case 6:
        this[e(385)](i, n, i + Y, s, r), this._drawLines(c, i + 3, a, s, r);
        break;
      case 0:
        this._drawLines(i, n, a, s, r);
        break;
    }
  }
  [q(385)](e, x, n, a, s) {
    const r = q;
    let i = e - 3;
    i = x < i ? i : x;
    let c = e + Y;
    c = n > c ? c : n;
    const { x: o, y: f } = this._gaussTransform[r(440)](i, s, e), { x: l, y: h } = this[r(424)]._getXY(c, a, e), u = this[r(400)], d = (parseInt(o / u) - 1) * u, p = (parseInt(l / u) + 1) * u, y = (parseInt(f / u) - 1) * u, S = (parseInt(h / u) + 1) * u, M = this[r(438)].scene[r(399)] === h0[r(377)] ? this[r(432)] : this._color2D, O = this[r(417)];
    let R, T, A, z = 0, B = 0;
    for (let D = d; D <= p; D += u) {
      T = [], R = [];
      for (let v = y; v <= S; v += u) {
        const { longitude: E, latitude: K } = this[r(424)][r(427)](D, v, e);
        T[r(362)](g[r(386)](E, K)), R[r(362)]([D, v]);
      }
      this[r(413)][r(397)](Xe(T, M)), z % (this[r(374)] + 1) === 0 && (A = T.length - 1 - O, R[A] && Je(this, T[A], "X: " + R[A][0])), z++;
    }
    for (let D = y; D <= S; D += u) {
      T = [], R = [];
      for (let v = d; v <= p; v += u) {
        const { longitude: E, latitude: K } = this[r(424)][r(427)](v, D, e);
        T.push(g[r(386)](E, K)), R.push([v, D]);
      }
      this[r(413)][r(397)](Xe(T, M)), B % (this[r(374)] + 1) === 0 && (A = O + 1, R[A] && Je(this, T[A], r(370) + R[A][1], !1)), B++;
    }
  }
  [q(412)]() {
    const e = q, [x, n] = this[e(422)], a = turf[e(361)]([x, n]), s = turf[e(414)](a, this[e(423)] * this._scale / 2e3, -90), r = turf[e(414)](a, this._xRange * this[e(400)] / 2e3, 90), i = turf[e(414)](a, this[e(409)] * this[e(400)] / 2e3, 0), c = turf[e(414)](a, this[e(409)] * this._scale / 2e3, 180);
    return this[e(408)] = { west: s[e(433)][e(445)][0], north: i.geometry[e(445)][1], east: r[e(433)][e(445)][0], south: c[e(433)][e(445)][1] }, this._rectangle;
  }
  [q(393)]() {
    const e = q, x = this[e(438)][e(367)][e(379)], n = this._viewer.scene[e(372)], a = this._viewer[e(367)][e(365)].ellipsoid, s = 40, r = 20, i = { north: x[e(436)](new U(n[e(426)] / 2, r), a), south: x.pickEllipsoid(new U(n.clientWidth / 2, n[e(435)] - r), a), west: x[e(436)](new U(s, n.clientWidth / 2), a), east: x[e(436)](new U(n[e(435)] - s, n[e(426)] / 2), a) };
    return { north: i[e(411)] ? n0.fromCartesian(i[e(411)])[e(446)] : void 0, south: i[e(418)] ? n0[e(398)](i[e(418)])[e(446)] : void 0, west: i.west ? n0.fromCartesian(i[e(390)])[e(387)] : void 0, east: i[e(369)] ? n0[e(398)](i[e(369)])[e(387)] : void 0 };
  }
  [q(364)]() {
    return !1;
  }
  [q(371)]() {
    const e = q;
    return this[e(388)](), this[e(438)].scene[e(416)][e(437)](this[e(403)]), delete this[e(438)]._measuredGraticule, At(this);
  }
}
const Z = l2;
(function(t, e) {
  const x = l2, n = t();
  for (; ; )
    try {
      if (parseInt(x(457)) / 1 * (-parseInt(x(495)) / 2) + -parseInt(x(466)) / 3 + -parseInt(x(437)) / 4 * (parseInt(x(455)) / 5) + parseInt(x(458)) / 6 + -parseInt(x(421)) / 7 * (-parseInt(x(487)) / 8) + parseInt(x(434)) / 9 + -parseInt(x(449)) / 10 * (-parseInt(x(412)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ke, 781695);
function Ke() {
  const t = ["_polylines", "remove", "_screenOffsetX", "zoneWide", "_screenCenterPosition", "SCENE3D", "21142VfpDmh", "color", "container", "is3DMode", "fromCartesian", "_labelOptions", "_lines", "scene", "mode", "217mkSAsU", "color2D", "WHITE", "push", "_drawLines", "_zoneWide", "globe", "_xGap", "changeSceneMode", "_yGap", "isDestroyed", "screenOffsetY", "_getScreenViewRange", "8050023NjZiZz", "_cameraListener", "changed", "6000568CHlpEF", "labelOffset", "viewer", "length", "_getExtentView", "removeAll", "south", "primitives", "material", "_primitives", "east", "fromCartographicArray", "12360CbYPvf", "_labels", "toDegrees", "screenOffsetX", "addEventListener", "canvas", "5HnTIDd", "_color2D", "922595FyKwcH", "1614936wFyYDQ", "_getXY", "_color", "longitude", "_labelOffset", "withAlpha", "latitude", "add", "3210156LZnKuL", "fromDegrees", "MAX_VALUE", "CGCS2000", "cartesianArrayToCartographicArray", "clientHeight", "round", "labelOptions", "init", "ellipsoid", "pickEllipsoid", "north", "camera", "render", "_gaussTransform", "_getLonLat", "GRAY", "_centerZone", "west", "_canvasResizeListener", "xGap", "189752AlqsHe", "resize", "clientWidth", "_show", "_viewer", "_screenOffsetY", "forEach", "show", "2CZYbgw", "_measuredGraticule"];
  return Ke = function() {
    return t;
  }, Ke();
}
const { abs: It } = Math;
function l2(t, e) {
  return t = t - 407, Ke()[t];
}
class zc {
  constructor(e) {
    const x = l2;
    e = e ?? {}, this[x(491)] = e[x(439)], this[x(460)] = e[x(413)] ?? W[x(423)][x(463)](0.5), this[x(456)] = e[x(422)] ?? W[x(482)][x(463)](0.8), this._zoneWide = e[x(409)] ?? 6, this[x(428)] = e[x(486)] ?? 1, this[x(430)] = e[x(486)] ?? 1, this[x(417)] = { ...da, ...e[x(473)] }, this[x(408)] = e[x(452)] ?? 40, this[x(492)] = e[x(432)] ?? 20, this[x(462)] = e[x(438)] ?? 3, this[x(480)] = new fa(x(469)), this[x(446)] = this._viewer.scene[x(444)][x(465)](new K2()), this[x(418)] = this[x(446)][x(465)](new _a({ disableDepthTest: !0 })), this[x(450)] = this._primitives[x(465)](new ba()), this[x(490)] = !0, this[x(483)] = void 0, this[x(474)](), this[x(491)][x(496)] = this;
  }
  [Z(429)]() {
    const e = Z, x = this._lines[e(497)], n = this[e(415)]() ? this[e(460)] : this[e(456)];
    x[e(440)] > 0 && x[e(493)]((a) => {
      const s = e;
      a[s(445)].uniforms[s(413)] = n;
    });
  }
  [Z(415)]() {
    const e = Z;
    return this._viewer[e(419)][e(420)] === h0[e(411)];
  }
  set color(e) {
    const x = Z;
    this[x(415)]() ? this[x(460)] = e : this[x(456)] = e, this[x(429)]();
  }
  get color() {
    const e = Z;
    return this.is3DMode() ? this[e(460)] : this[e(456)];
  }
  get [Z(494)]() {
    return this._show;
  }
  set [Z(494)](e) {
    const x = Z;
    this[x(490)] !== e && (this[x(490)] = e, this._primitives[x(494)] = e);
  }
  [Z(474)]() {
    const e = Z, x = this[e(491)][e(419)];
    this[e(435)] = x.camera[e(436)][e(453)](() => {
      this._show && this.render();
    }), this._canvasResizeListener = this[e(491)][e(414)][e(453)](e(488), () => {
      const n = e;
      this[n(490)] && this[n(479)]();
    });
  }
  render() {
    const e = Z;
    this[e(418)][e(442)](), this[e(450)][e(442)]();
    const x = this[e(426)];
    let { west: n, north: a, east: s, south: r } = this[e(441)]();
    n = w0[e(451)](n), s = w0[e(451)](s), a = w0.toDegrees(a), r = w0[e(451)](r);
    let i = parseInt(It(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let c = parseInt(It(s) / x + 1) * x - 3;
    switch (c = s > 0 ? c : -c, c - i) {
      case 24:
        this[e(425)](i, n, i + Y, a, r, !0), this._drawLines(i + 6, i + 3, i + 6 + Y, a, r, !0), this[e(425)](i + 12, i + 9, i + 12 + Y, a, r, !0), this[e(425)](i + 18, i + 15, i + 18 + Y, a, r, !0), this[e(425)](c, c - 3, s, a, r);
        break;
      case 18:
        this._drawLines(i, n, i + Y, a, r, !0), this[e(425)](i + 6, i + 3, i + 6 + Y, a, r, !0), this[e(425)](i + 12, i + 9, i + 12 + Y, a, r, !0), this._drawLines(c, c - 3, s, a, r);
        break;
      case 12:
        this[e(425)](i, n, i + Y, a, r, !0), this[e(425)](i + 6, i + 3, i + 6 + Y, a, r, !0), this[e(425)](c, c - 3, s, a, r);
        break;
      case 6:
        this[e(425)](i, n, i + Y, a, r, !0), this[e(425)](c, i + 3, s, a, r);
        break;
      case 0:
        this._drawLines(i, n, s, a, r);
        break;
    }
  }
  [Z(431)]() {
    return !1;
  }
  destroy() {
    const e = Z;
    return this[e(435)](), this[e(485)](), this[e(491)][e(419)][e(444)][e(407)](this._primitives), this._show = !1, At(this);
  }
  _drawLines(e, x, n, a, s, r = !1) {
    const i = Z;
    let c = e - 3;
    c = x < c ? c : x;
    let o = e + Y;
    o = n > o ? o : n;
    let f = It(parseInt(e / 6)) + 1;
    f = e > 0 ? f : 60 - f + 1;
    const { x: l, y: h } = this._gaussTransform[i(459)](c, s, e), { x: u, y: d } = this._gaussTransform._getXY(o, a, e), p = pa(d - h, 0), y = (parseInt(l / p) - 1) * p, S = (parseInt(u / p) + 1) * p, M = (parseInt(h / p) - 1) * p, O = (parseInt(d / p) + 1) * p, R = (S - y) / p, T = (O - M) / p, A = this._labelOffset;
    let z, B, D, v = 0, E = 0;
    const K = this[i(491)][i(419)].mode === h0[i(411)] ? this[i(460)] : this._color2D;
    for (let X = y; X <= S; X += p) {
      B = [], z = [];
      for (let w = M; w <= O; w += p) {
        const { longitude: b, latitude: _ } = this[i(480)][i(481)](X, w, e);
        B[i(424)](g[i(467)](b, _)), z[i(424)]([X, w]);
      }
      !(R - v < 2 && r) && (this[i(418)][i(465)](Xe(B, K)), v % (this._xGap + 1) === 0 && (D = B.length - 1 - A, z[D] && Je(this, B[D], "" + f + z[D][0]))), v++;
    }
    for (let X = M; X <= O; X += p) {
      B = [], z = [], v = 0;
      for (let w = y; w <= S; w += p) {
        if (!(R - v < 2 && r)) {
          const { longitude: b, latitude: _ } = this[i(480)][i(481)](w, X, e);
          B[i(424)](g[i(467)](b, _));
        }
        z[i(424)]([w, X]), v++;
      }
      this[i(418)][i(465)](Xe(B, K)), (T - E) % (this[i(430)] + 1) === 0 && (D = A, z[D] && Je(this, B[D], "" + z[D][1], !1)), E++;
    }
  }
  [Z(441)]() {
    const e = Z, x = this[e(491)].scene.camera, n = this._viewer[e(419)].canvas, a = this[e(491)].scene[e(427)].ellipsoid, s = [x.pickEllipsoid(new U(0, 0), a), x[e(476)](new U(n[e(489)], 0), a), x[e(476)](new U(0, n[e(471)]), a), x[e(476)](new U(n[e(489)], n.clientHeight), a)];
    for (let r = 0; r < 4; r++)
      if (s[r] === void 0) return Ix[e(468)];
    return Ix[e(448)](a[e(470)](s));
  }
  [Z(410)]() {
    const e = Z, x = this[e(491)].scene[e(454)], n = new U(Math[e(472)](x[e(489)] / 2), Math.round(x.clientHeight / 2)), a = this[e(491)][e(419)][e(478)].pickEllipsoid(n);
    return a || g.fromDegrees(0, 0, 0);
  }
  [Z(433)]() {
    const e = Z, x = this[e(491)][e(419)][e(478)], n = this[e(491)].scene[e(454)], a = this[e(491)][e(419)][e(427)][e(475)], s = this._screenOffsetX, r = this[e(492)], i = { north: x.pickEllipsoid(new U(n.clientWidth / 2, r), a), south: x[e(476)](new U(n[e(489)] / 2, n.clientHeight - r), a), west: x[e(476)](new U(s, n[e(471)] / 2), a), east: x[e(476)](new U(n[e(489)] - s, n[e(471)] / 2), a) };
    return { north: i[e(477)] ? n0[e(416)](i.north)[e(464)] : void 0, south: i[e(443)] ? n0.fromCartesian(i.south).latitude : void 0, west: i[e(484)] ? n0[e(416)](i[e(484)])[e(461)] : void 0, east: i[e(447)] ? n0[e(416)](i.east)[e(461)] : void 0 };
  }
}
const Q = d2;
(function(t, e) {
  const x = d2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(142)) / 1 + parseInt(x(134)) / 2 * (-parseInt(x(156)) / 3) + parseInt(x(158)) / 4 + -parseInt(x(136)) / 5 * (parseInt(x(139)) / 6) + -parseInt(x(130)) / 7 + parseInt(x(129)) / 8 * (parseInt(x(131)) / 9) + parseInt(x(121)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xt, 388551);
function xt() {
  const t = ["destroy", "animateAppear", "457956dTAJZD", "scene", "167665enCDqh", "_indicators", "has", "126HJoudl", "set", "position", "655043HfkNTX", "viewer", "delete", "removeAll", "isAvailable", "remove", "from", "clear", "removeChild", "addOrRemove", "div", "entityCache", "forEach", "isDestroyed", "3JHlMhM", "get", "2040364fJojEO", "preUpdate", "appendChild", "map", "getValue", "add", "cesium-viewer-selectionIndicatorContainer", "createIndicator", "14511820BDBmJM", "preUpdateClose", "removeById", "size", "updateIndicator", "isShowing", "viewModel", "container", "1096QbsaSl", "1837367VOLgph", "18261fuBAkb"];
  return xt = function() {
    return t;
  }, xt();
}
function d2(t, e) {
  return t = t - 118, xt()[t];
}
class Bc {
  constructor(e) {
    const x = d2;
    this[x(143)] = e, this[x(153)] = /* @__PURE__ */ new WeakSet(), this._indicators = /* @__PURE__ */ new Map(), this[x(135)] = this[x(143)].scene, this[x(122)] = this[x(135)][x(159)].addEventListener(this.preUpdate.bind(this));
  }
  [Q(118)](e) {
    const x = Q;
    if (!e || this[x(137)][x(138)](e.id)) return;
    this.entityCache[x(118)](e);
    const { indicate: n, container: a } = this[x(120)]();
    this[x(137)][x(140)](e.id, [e, n, a]), n[x(127)][x(133)]();
  }
  [Q(151)](e) {
    const x = Q;
    if (this[x(138)](e)) {
      this[x(147)](e);
      return;
    }
    this[x(118)](e);
  }
  [Q(159)](e, x) {
    const n = Q;
    this[n(137)][n(124)] !== 0 && this[n(137)][n(154)](([a, s]) => {
      this[n(125)](x, a, s);
    });
  }
  [Q(125)](e, x, n) {
    var i;
    const a = Q;
    if (!this.entityCache.has(x)) {
      this[a(137)].delete(x.id);
      return;
    }
    const s = n[a(127)];
    if (!x[a(126)] || !x[a(146)](e)) return;
    const r = (i = x[a(141)]) == null ? void 0 : i[a(162)](e);
    r && (s[a(141)] = r, s.showSelection = !0, s.update());
  }
  [Q(120)]() {
    const e = Q, x = this.viewer[e(128)], n = document.createElement(e(152));
    return n.className = e(119), x[e(160)](n), { indicate: new xn(n, this[e(143)][e(135)]), container: n };
  }
  remove(e) {
    this[Q(123)](e.id);
  }
  removeById(e) {
    const x = Q, n = this[x(137)][x(157)](e);
    if (!n) return;
    const [a, s, r] = n;
    this.viewer[x(128)][x(150)](r), s[x(132)](), this._indicators[x(144)](e), this.entityCache[x(144)](a);
  }
  [Q(145)]() {
    const e = Q;
    this._indicators[e(154)](([x]) => {
      this[e(147)](x);
    }), this[e(137)][e(149)]();
  }
  getEntities() {
    const e = Q;
    return Array[e(148)](this._indicators.values())[e(161)]((x) => x[0]);
  }
  [Q(138)](e) {
    const x = Q;
    return this[x(137)][x(138)](e.id);
  }
  [Q(155)]() {
    return !!this[Q(122)];
  }
  [Q(132)]() {
    var x;
    const e = Q;
    return this[e(145)](), (x = this.preUpdateClose) == null || x.call(this), this[e(122)] = null, this[e(137)][e(124)];
  }
}
function p2(t, e) {
  return t = t - 113, et()[t];
}
function et() {
  const t = ["40ZCuSiX", "appendChild", "removeUpdate", "viewer", "1161840VIUEiL", "105978aBcHcD", "removeEventListener", "viewModel", "1634810psyitb", "28obLfny", "position", "className", "createIndicator", "showSelection", "container", "4592268VRIkBX", "bindUpdate", "primitive", "setPrimitive", "destroy", "scene", "animateAppear", "55WdzYBK", "396196yvpRUV", "preUpdate", "2106924zUdogO", "createElement", "234238BkMYBa", "7uAxzcv", "addEventListener", "indicator"];
  return et = function() {
    return t;
  }, et();
}
const y0 = p2;
(function(t, e) {
  const x = p2, n = t();
  for (; ; )
    try {
      if (parseInt(x(139)) / 1 * (-parseInt(x(138)) / 2) + parseInt(x(136)) / 3 + -parseInt(x(134)) / 4 * (-parseInt(x(142)) / 5) + -parseInt(x(116)) / 6 * (parseInt(x(120)) / 7) + parseInt(x(115)) / 8 + parseInt(x(126)) / 9 + parseInt(x(119)) / 10 * (-parseInt(x(133)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(et, 442292);
class jc {
  constructor(e, x) {
    const n = p2;
    this.viewer = e, this.primitive = x, this[n(135)] = () => {
      var c;
      const r = n, i = this[r(141)];
      if (!this[r(128)]) {
        i[r(118)][r(124)] = !1;
        return;
      }
      this[r(141)][r(118)][r(121)] = (c = this[r(128)]) == null ? void 0 : c.position, this[r(141)].viewModel.update();
    }, this.scene = this[n(114)][n(131)];
    const { indicate: a, container: s } = this[n(123)]();
    a[n(118)][n(132)](), a.viewModel[n(124)] = !0, this.indicator = a, this[n(125)] = s, this[n(127)]();
  }
  [y0(129)](e) {
    const x = y0;
    if (e) {
      this[x(128)] = e, this[x(141)].viewModel[x(124)] = !0;
      return;
    }
    this[x(141)][x(118)].showSelection = !1;
  }
  [y0(127)]() {
    const e = y0;
    this[e(131)][e(135)][e(140)](this[e(135)]);
  }
  [y0(113)]() {
    const e = y0;
    this[e(131)][e(135)][e(117)](this.preUpdate);
  }
  [y0(123)]() {
    const e = y0, x = this[e(114)].container, n = document[e(137)]("div");
    return n[e(122)] = "cesium-viewer-selectionIndicatorContainer", x[e(143)](n), { indicate: new xn(n, this[e(114)][e(131)]), container: n };
  }
  [y0(130)]() {
    const e = y0;
    this[e(113)](), this.indicator.destroy(), this[e(125)].remove();
  }
}
(function(t, e) {
  const x = p0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(465)) / 1 + -parseInt(x(446)) / 2 * (-parseInt(x(468)) / 3) + -parseInt(x(471)) / 4 * (parseInt(x(450)) / 5) + parseInt(x(469)) / 6 + -parseInt(x(460)) / 7 * (parseInt(x(472)) / 8) + -parseInt(x(466)) / 9 * (parseInt(x(474)) / 10) + parseInt(x(475)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(tt, 588482);
var ci = ((t) => {
  const e = p0;
  return t[t[e(444)] = 0] = e(444), t[t.rectangle = 1] = e(455), t[t.polygon = 2] = "polygon", t[t[e(454)] = 3] = "ellipsis", t[t[e(481)] = 4] = e(481), t[t.polyline = 5] = e(449), t;
})(ci || {});
function tt() {
  const t = ["start", "add", "6922KuVVVg", "36Mferor", "endPosition", "73449oHmJEW", "4398744SomPoG", "entities", "4giRLEp", "888952PsuWLW", "crosshair", "1979130lYMlOZ", "12681273GsKXjq", "height", "longitude", "length", "position", "web-drawPolylineAreaSourceName", "point", "fromDegrees", "RED", "circle", "DODGERBLUE", "30NRWaqj", "web-drawPolygonAreaSourceName", "push", "polyline", "1552805BSjZFo", "getValue", "web-drawAreaSourceName", "stop", "ellipsis", "rectangle", "polygon", "map", "latitude", "setValue", "35zelCQW", "midpoint", "web-drawPointAreaSourceName"];
  return tt = function() {
    return t;
  }, tt();
}
function Hc() {
  const t = p0, e = t(462);
  let x;
  const n = (i) => {
    const c = t, { source: o } = ox(e, !0);
    m0(c(473)), x = Y0(({ position: f }) => {
      const l = c, h = U0(f.position);
      if (!h) return;
      const u = jt(f[l(479)]);
      o[l(470)][l(464)]({ position: u, point: { pixelSize: 5, color: W[l(445)] } }), i == null || i({ type: 4, degrees: [h], cartesian: [u] }), x == null || x(), m0("");
    });
  }, a = () => {
    m0(""), x == null || x();
  }, s = () => {
    cx(e);
  };
  return { start: n, stop: a, clear: s, stopAndClear: () => {
    a(), s();
  } };
}
function Uc() {
  const t = p0, e = t(480);
  let x, n, a;
  const s = (o) => {
    m0("crosshair");
    const { source: f } = ox(e, !0), l = [];
    x = Y0(({ position: h }) => {
      var S;
      const u = p0, d = yn(h[u(479)]);
      if (!d) return;
      l.push(d);
      const p = g[u(442)](d[u(477)], d[u(458)], d[u(476)]);
      o({ timing: u(463), type: 5, degrees: [d], cartesian: [p] });
      const y = { position: p, point: { pixelSize: 5, color: W[u(443)] } };
      if (a) {
        const M = (S = a[u(449)]) == null ? void 0 : S.positions, O = l[u(457)]((R) => g[u(442)](R[u(477)], R[u(458)], R[u(476)]));
        M.setValue(O), f[u(470)].add(y);
        return;
      }
      a = f.entities[u(464)]({ ...y, polyline: { positions: new gx([p]), clampToGround: !0, material: W[u(443)] } });
    }), n = Yt(() => {
      const h = p0;
      o({ timing: h(453), type: 5, degrees: [...l], cartesian: l.map((u) => g.fromDegrees(u.longitude, u[h(458)], u[h(476)])) });
    });
  };
  Gt(() => {
    n == null || n();
  });
  const r = () => {
    a = null, m0(""), x == null || x(), n == null || n();
  }, i = () => {
    cx(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function $c(t) {
  const e = p0, x = e(452), n = (o, f) => {
    const l = e, { longitude: h, latitude: u } = o, { longitude: d, latitude: p } = f, y = g[l(442)](d, u, 0), S = g.fromDegrees(h, p, 0);
    return { p3: y, p4: S };
  };
  let a;
  const s = (o) => {
    const f = e, { source: l } = ox(x, !0);
    m0(f(473));
    let h = [];
    a = Y0(({ position: u }) => {
      const d = f, p = U0(u[d(479)]);
      if (!p) return;
      const { longitude: y, latitude: S, height: M } = p, O = g.fromDegrees(y, S, M);
      o == null || o({ timing: d(463), type: 1, degrees: [{ longitude: y, latitude: S, height: M }], cartesian: [O] });
      const R = new gx(new zx([O])), T = new en(O);
      l[d(470)][d(464)]({ position: T, polygon: { hierarchy: R, fill: !1, outline: !0, outlineWidth: 5, outlineColor: W.DODGERBLUE } });
      const A = Xt(({ position: B }) => {
        const D = d, v = U0(B[D(467)]);
        if (!v) return;
        const { p3: E, p4: K } = n(p, v), X = g.fromDegrees(v[D(477)], v.latitude, v[D(476)]);
        h = [O, E, X, K];
        const w = new zx(h);
        T[D(459)](g[D(461)](O, X, new g())), R[D(459)](w);
      }, { viewerName: t }), z = qt(() => {
        const B = d;
        o == null || o({ timing: B(453), type: 1, degrees: h[B(457)]((D) => gn(D)), cartesian: [...h] }), h[B(478)] = 0, A(), z();
      }, { viewerName: t });
    }, { viewerName: t });
  }, r = () => {
    m0(""), a == null || a();
  }, i = () => {
    cx(x);
  };
  return { start: s, stop: r, clear: i, stopAndClear: () => {
    r(), i();
  } };
}
function p0(t, e) {
  return t = t - 442, tt()[t];
}
function qc() {
  const t = p0, e = t(447);
  let x, n, a;
  const s = (o) => {
    const f = t;
    m0(f(473));
    const { source: l } = ox(e, !0), h = [];
    x = Y0(({ position: u }) => {
      var M;
      const d = f, p = yn(u[d(479)]);
      if (!p) return;
      h[d(448)](p);
      const y = g.fromDegrees(p[d(477)], p[d(458)], p.height);
      o({ timing: d(463), type: 2, degrees: [p], cartesian: [y] });
      const S = { position: y, point: { pixelSize: 5, color: W[d(443)] } };
      if (a) {
        const O = (M = a[d(456)]) == null ? void 0 : M.hierarchy, R = h.map((T) => g[d(442)](T[d(477)], T[d(458)], T.height));
        O[d(459)](new zx(R)), l[d(470)][d(464)](S);
        return;
      }
      a = l[d(470)][d(464)]({ ...S, polygon: { hierarchy: new gx(new zx([y])), fill: !1, outline: !0, outlineWidth: 5, outlineColor: W[d(443)] } });
    }), n = Yt(() => {
      const u = f;
      o({ timing: u(453), type: 2, degrees: [...h], cartesian: h[u(457)]((d) => g[u(442)](d[u(477)], d[u(458)], d[u(476)])) }), h[u(478)] = 0, a = null;
    });
  };
  Gt(() => {
    n == null || n();
  });
  const r = () => {
    a = null, m0(""), x == null || x(), n == null || n();
  }, i = () => {
    cx(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function Yc() {
  const t = "web-drawEllipsisAreaSourceName";
  let e;
  const x = ({ startPos: f, centerPos: l }) => {
    const h = p0, u = pt(f, [l.longitude, l[h(458)]]);
    return { majorAxisValue: u, minorAxisValue: u };
  }, n = ({ startPos: f, centerPos: l }) => {
    const h = p0, u = pt(f, [l.longitude, f.latitude]), d = pt(f, [f[h(477)], l[h(458)]]);
    return { majorAxisValue: u, minorAxisValue: d };
  }, a = (f, { isCircle: l = !1, source: h }) => {
    e = Y0(({ position: u }) => {
      const d = p0, p = U0(u[d(479)]);
      if (!p) return;
      const { longitude: y, latitude: S, height: M } = p, O = g[d(442)](y, S, M);
      f({ timing: d(463), type: 0, degrees: [{ longitude: y, latitude: S, height: M }], cartesian: [O] });
      const R = new en(O), T = new gx(0), A = new gx(0);
      h[d(470)][d(464)]({ position: R, ellipse: { semiMajorAxis: T, semiMinorAxis: A, fill: !1, outline: !0, outlineWidth: 10, outlineColor: W[d(445)] } });
      const z = Xt(({ position: D }) => {
        const v = d, E = U0(D[v(467)]);
        if (!E) return;
        const K = S2([p.longitude, p[v(458)]], [E.longitude, E[v(458)]]), [X, w] = Tt(K);
        R[v(459)](g[v(442)](X, w));
        const b = { startPos: p, centerPos: { longitude: X, latitude: w, height: 0 } };
        if (l) {
          const { majorAxisValue: m, minorAxisValue: P } = x(b);
          T.setValue(m * 1e3), A[v(459)](P * 1e3);
          return;
        }
        const { majorAxisValue: _, minorAxisValue: C } = n(b);
        T.setValue(_ * 1e3), A[v(459)](C * 1e3);
      }), B = qt(({ position: D }) => {
        const v = d;
        z(), B();
        const E = U0(D[v(479)]);
        if (!E) return;
        const K = S2([p[v(477)], p[v(458)]], [E[v(477)], E[v(458)]]), [X, w] = Tt(K), b = [g[v(442)](X, w, 0), g[v(442)](E.longitude, E[v(458)], E.height)];
        f({ timing: "stop", type: 0, cartesian: b, degrees: [{ longitude: X, latitude: w, height: 0 }, E], majorAxis: T.getValue(Ie()), minorAxis: A[v(451)](Ie()) });
      });
    });
  }, s = (f, l) => {
    a(f, { isCircle: !0, source: l });
  }, r = (f) => {
    m0(p0(473));
    const { source: h } = ox(t, !0);
    s(f, h);
  }, i = () => {
    m0(""), e == null || e();
  }, c = () => {
    cx(t);
  };
  return { start: r, stop: i, clear: c, stopAndClear: () => {
    i(), c();
  } };
}
function ma(t, e) {
  return t = t - 298, nt()[t];
}
(function(t, e) {
  const x = ma, n = t();
  for (; ; )
    try {
      if (-parseInt(x(299)) / 1 + -parseInt(x(302)) / 2 + parseInt(x(306)) / 3 * (parseInt(x(313)) / 4) + -parseInt(x(307)) / 5 + -parseInt(x(314)) / 6 * (parseInt(x(301)) / 7) + -parseInt(x(311)) / 8 * (-parseInt(x(303)) / 9) + parseInt(x(300)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(nt, 643579);
const gt = "webPlaceEntitySource";
function Xc() {
  const t = (a, s) => {
    const r = ma, { source: i } = ox(gt, !0);
    i[r(309)][r(312)]({ position: g[r(308)](s[r(315)], s.latitude, 0), label: { ...sr, verticalOrigin: U2[r(304)], text: a + r(298) + s.longitude + "," + s[r(305)] + ",0" }, point: { pixelSize: 4, color: W[r(310)] } });
  }, e = () => {
    Ur(gt);
  }, x = () => {
    cx(gt);
  }, n = Fr(() => {
    e == null || e();
  }, { isEmpty: !0 });
  return Gt(() => {
    e == null || e(), n == null || n();
  }), { create: t, clear: x, destroy: e };
}
function nt() {
  const t = ["1561qPsoJM", "911060ypPoYv", "9XRnqna", "BOTTOM", "latitude", "3YwCHCQ", "1891185dKYpYH", "fromDegrees", "entities", "RED", "9081832RkHSOW", "add", "1415056FdschR", "25548BGJmmd", "longitude", `
坐标:`, "900001jDrhao", "18378880OPAHgh"];
  return nt = function() {
    return t;
  }, nt();
}
function oi(t, e) {
  t = t - 368;
  var x = at(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = oi, n = t(); ; )
    try {
      var a = -parseInt(x(368)) / 1 + -parseInt(x(375)) / 2 + parseInt(x(377)) / 3 * (-parseInt(x(369)) / 4) + parseInt(x(370)) / 5 + -parseInt(x(376)) / 6 * (parseInt(x(374)) / 7) + parseInt(x(371)) / 8 + -parseInt(x(372)) / 9 * (-parseInt(x(373)) / 10);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(at, 810527);
function at() {
  var t = ["955421IdpwvM", "2251988UWRPQS", "7240215hndlcq", "4592728SSGaLV", "27822348cgdoZS", "10zHogeP", "60109Dtpnyn", "2494976OaFPav", "1074NjJuFd", "3RqynTO"];
  return at = function() {
    return t;
  }, at();
}
ri();
export {
  Xn as CInfoPopup,
  Un as CNavigation,
  Zn as CRightMenu,
  ea as CScale,
  ta as CScaleSelect,
  zn as CViewer,
  Ni as ClearViewer,
  Fc as CustomMeasuredGraticule,
  dx as EllipseDiffuseMaterialProperty,
  ci as GraphicType,
  zc as MeasuredGraticule,
  Bc as MultipleSelectViewModel,
  Qr as RunStepFn,
  jc as SelectedPrimitiveModel,
  Gc as SimpleCesium,
  Nc as VelocityOrientationProperty,
  aa as VelocityVectorProperty,
  Vc as VelocityVectorRotationProperty,
  Wc as WGS84GridLayer,
  Bi as WGS84TransformToJ2000,
  Li as addConnectChart,
  Ti as addDefaultTerrain,
  fr as addImageryProvider,
  _r as addTerrain,
  Lr as assign,
  _i as billboardDefaultConfig,
  qi as calculateAreaByPoints,
  Yi as calculateDestination,
  _c as cameraFlyTo,
  gn as cartesian3ToDegrees,
  Wi as cartesian3ToDegrees2,
  Di as changeSceneMode2D,
  Pi as changeSceneMode3D,
  ki as changeSceneModeColumbus,
  cx as clearEntitySourceBySourceName,
  ur as clearImageryWeak,
  zi as computedGroundDistance,
  Fi as computedGroundDistanceByDegrees,
  uc as createCzmlSource,
  Dc as createEntity,
  jr as createEntityDatasource,
  ox as createEntitySource,
  gr as createViewer,
  vi as createWebMapServiceImageryProvider,
  dr as createWebTileMapServiceImageryProvider,
  rx as createdEventList,
  cc as dataSourceClearEntity,
  b0 as defaultConfig,
  Ur as deleteDatasourceByName,
  oc as deleteEntitySourceByViewer,
  yr as deleteViewerFromMap,
  vr as destroyViewer,
  Br as emitViewerCreated,
  Qi as executeClearEvent,
  zr as executeDestroyed,
  Kr as executeFirstStepFn,
  $r as firstPerspectiveEvent,
  hc as flyToRectangle,
  En as generateMountFn,
  Bt as generateSceneModeChange,
  Oc as getAllMap,
  bi as getBillboardImage,
  q0 as getCamera,
  Pn as getCameraField,
  mc as getCameraHeight,
  $i as getCenterByPoints,
  Px as getClock,
  kx as getClockField,
  Tt as getCoordinatesFromFeature,
  gc as getCurrentCameraPosition,
  xs as getCurrentTimeDayJs,
  Ie as getCurrentTimeJulian,
  sc as getCzmlSourceByName,
  Pc as getEntityById,
  C2 as getEntityByPosition,
  hs as getEntityConstantPosition,
  Hr as getEntityDatasource,
  kc as getEntityMetaData,
  Rn as getEntityPosition,
  ds as getEntityProperties,
  ps as getEntityPropertyByName,
  Ac as getEntitySampledPosition,
  C0 as getEntitySource,
  Or as getFieldByInstance,
  wi as getImageryProviderByCode,
  Si as getImageryProviderList,
  k0 as getImageryWeakByViewer,
  ss as getInfinityTime,
  Mc as getMultiplier,
  ic as getOrCreateEntitySource,
  Xi as getPrimitiveByPosition,
  ot as getScene,
  us as getShouldAnimate,
  cs as getSpeed,
  Sc as getStartTimeDayJs,
  wc as getStartTimeJulian,
  Ec as getStopTimeDayJs,
  Cc as getStopTimeJulian,
  te as getTurfPoint,
  Ui as getTurnPolygon,
  S2 as getTwoPointsCenter,
  pt as getTwoPointsDistance,
  F as getViewer,
  Cr as getViewerCanvas,
  Sr as getViewerContainer,
  Ex as getViewerField,
  V as getViewerName,
  ji as getWorldPosition,
  Cn as hasEntitySource,
  Ft as hasImageryProviderByViewer,
  Ji as hasPrimitiveByPosition,
  Ei as hasTerrain,
  Vi as hasViewer,
  Ri as hasViewerWithWarn,
  wr as hiddenAdvertise,
  pr as hiddenImageryProvider,
  hr as imageryProviderIsShow,
  g2 as isArray,
  fs as isCustomDatasource,
  ls as isCzmlDatasource,
  sx as isDataType,
  or as isDefine,
  mi as isMap,
  y2 as isNumber,
  cr as isObject,
  Ii as isSet,
  Ct as isString,
  mn as isViewer,
  sr as labelDefaultConfig,
  Mi as loadOceanImageryLayer,
  br as locationFuzzyQuery,
  Wt as nextTick,
  bc as onCameraChange,
  Zi as onClearEvent,
  ac as onCtrlLeftClick,
  rc as onCtrlLeftDown,
  Fr as onDoubleClick,
  yc as onFirstStep,
  nc as onLeftClick,
  Y0 as onLeftDown,
  qt as onLeftUp,
  Xt as onMouseMove,
  tc as onMoveEntity,
  xc as onPostRender,
  vn as onPreUpdate,
  Yt as onRightClick,
  Ai as onSceneChange,
  ec as onTick,
  S0 as onViewerCreated,
  Mx as onViewerDestroyed,
  ri as registryMaterial,
  Ki as removeAllClearEvent,
  lr as removeAllImageryProvider,
  Oi as removeConnectChart,
  pc as removeFirstPerspective,
  gi as removeImageryWeak,
  qr as resetCameraController,
  Ci as resetTerrain,
  jt as screenPosToCartesian,
  U0 as screenPosToLBH,
  yn as screenToDegrees,
  Ic as setCameraHeight,
  An as setCameraScale,
  Vn as setClockValueByField,
  E2 as setCurrentTime,
  es as setCurrentTimeJulian,
  Yr as setDefaultCamera,
  Lc as setEntityPosition,
  dc as setFirstPerspective,
  yi as setImageryProvider,
  pn as setImageryWeak,
  fc as setSelectedEntity,
  os as setShouldAnimate,
  T2 as setSpeed,
  ns as setStartTime,
  ts as setStartTimeJulian,
  rs as setStopTime,
  is as setStopTimeInfinity,
  as as setStopTimeJulian,
  hi as setToken,
  lc as setTrackedEntity,
  m0 as setViewerCursor,
  In as setViewerValueByField,
  vc as synchronizeTime,
  Hi as translateByHeight,
  Qc as turfArea,
  Kc as turfPolygon,
  Xc as useCreatePlaceEntity,
  Yc as useDrawEllipsisArea,
  Hc as useDrawPointArea,
  qc as useDrawPolygonArea,
  Uc as useDrawPolylineArea,
  $c as useDrawRectangleArea,
  Ws as useRightMenu,
  Rc as useRightMenuOptionStore,
  Gi as viewerFlyTo,
  N0 as viewerMap,
  hn as visibleImageryProvider,
  Tc as watchCurrentTime
};
