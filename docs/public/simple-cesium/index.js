import * as Lx from "cesium";
import { SceneMode as d0, GeographicTilingScheme as Pt, Ion as va, LabelStyle as U2, Color as G, HorizontalOrigin as wt, VerticalOrigin as $2, Cartesian2 as $, DefaultProxy as wa, WebMapServiceImageryProvider as Sa, WebMapTileServiceImageryProvider as Ca, CesiumTerrainProvider as Ea, EllipsoidTerrainProvider as H2, Rectangle as Ix, GeoJsonDataSource as Da, PolylineGraphics as Ta, ArcType as Ma, Viewer as Z2, Math as g0, Cartographic as e0, EllipsoidGeodesic as At, Ray as q2, Cartesian3 as g, Plane as X2, IntersectionTests as Pa, defined as W, SceneTransforms as Aa, Entity as ka, ScreenSpaceEventType as k0, KeyboardEventModifier as J2, CzmlDataSource as K2, CustomDataSource as kt, CameraEventType as K0, Camera as Na, Ellipsoid as Fx, JulianDate as a0, ImageryLayer as Oa, UrlTemplateImageryProvider as La, VelocityVectorProperty as Va, Event as Sx, ExtrapolationType as St, Transforms as Wa, Matrix3 as za, Quaternion as Ra, ReferenceFrame as b2, DeveloperError as Q2, GridImageryProvider as Ga, destroyObject as Nt, Material as V, createPropertyDescriptor as w0, Property as l0, PolylineCollection as Fa, LabelCollection as Ya, PrimitiveCollection as xn, SelectionIndicator as en, PolygonHierarchy as Yx, ConstantProperty as gx, ConstantPositionProperty as tn } from "cesium";
import { defineComponent as v0, shallowRef as nn, provide as ja, onMounted as Ba, onBeforeUnmount as ct, openBlock as T0, createElementBlock as ax, renderSlot as Ct, watch as Et, computed as Ot, toValue as dx, unref as Lt, resolveComponent as Vt, createBlock as Wt, reactive as Ua, nextTick as an, h as $a, useCssVars as Ha, ref as yx, onUnmounted as Za, createElementVNode as E0, toDisplayString as zt, createCommentVNode as qa, withModifiers as Xa, withDirectives as Ja, Fragment as rn, renderList as sn, normalizeStyle as Ka, vShow as Qa, normalizeProps as m2, guardReactiveProps as I2, withCtx as g2, createVNode as xr } from "vue";
import er from "cesium-navigation-es6";
import { storeToRefs as tr, defineStore as on } from "pinia";
import { polygon as cn, area as nr, destination as ar, featureCollection as rr, center as sr, point as jx, midpoint as ir, distance as or } from "@turf/turf";
import { area as nc, polygon as ac } from "@turf/turf";
function Bx() {
  const t = ["10010920UCkcEo", "445138IkxMxC", "1373922prxrDa", "/map/terrain/", "28BWKBDr", "/map/globe/{z}/{x}/{y}.jpg", "29790240TqDplr", "30ozPwzP", "cesium-box", "520dksjjv", "SCENE2D", "9noMDCz", "1957992kavcIe", "14296LFhQLB", "1392723eCFioM", "5pXfecn"];
  return Bx = function() {
    return t;
  }, Bx();
}
const Vx = fn;
function fn(t, e) {
  return t = t - 225, Bx()[t];
}
(function(t, e) {
  const x = fn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(237)) / 1 * (-parseInt(x(239)) / 2) + parseInt(x(236)) / 3 + parseInt(x(235)) / 4 * (-parseInt(x(231)) / 5) + -parseInt(x(234)) / 6 * (parseInt(x(226)) / 7) + parseInt(x(238)) / 8 * (-parseInt(x(233)) / 9) + -parseInt(x(229)) / 10 * (parseInt(x(240)) / 11) + parseInt(x(228)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Bx, 756511);
const Z0 = { DEFAULT_VIEWER_NAME: Vx(230), defaultImageryUrl: { url: Vx(227), tilingScheme: new Pt(), minimumLevel: 0, maximumLevel: 19 }, defaultTerrainUrl: Vx(225), viewerConfig: { infoBox: !1, animation: !1, homeButton: !1, geocoder: !1, shouldAnimate: !1, baseLayerPicker: !1, fullscreenButton: !1, timeline: !1, sceneMode: d0[Vx(232)], selectionIndicator: !0, navigationHelpButton: !1, sceneModePicker: !1, terrain: void 0 }, synchronizeConfig: { maxTime: 5, interval: 1e3, minSpeed: 1e-3, cacheSize: 3, defaultStopTime: "9999/12/31 23:59:59" }, eventConfig: { clickAndDbClickInterval: 100, defaultLeftClick: !0, defaultRightClick: !1, defaultClearClick: !1, defaultDoubleClick: !1, defaultMouseMove: !1, defaultLeftUp: !1, defaultLeftDown: !1 }, navigation: { duration: 3, enableCompass: !0, enableDistanceLegend: !0, enableCompassOuterRing: !0, enableZoomControls: !0 } };
(function(t, e) {
  for (var x = un, n = t(); ; )
    try {
      var a = parseInt(x(338)) / 1 + parseInt(x(334)) / 2 * (-parseInt(x(335)) / 3) + parseInt(x(339)) / 4 * (parseInt(x(340)) / 5) + parseInt(x(332)) / 6 * (-parseInt(x(342)) / 7) + -parseInt(x(341)) / 8 * (parseInt(x(333)) / 9) + -parseInt(x(343)) / 10 + parseInt(x(336)) / 11;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ux, 806119);
function un(t, e) {
  t = t - 332;
  var x = Ux(), n = x[t];
  return n;
}
function Ux() {
  var t = ["53274SnQhtr", "1395AxMijS", "104hiwHEW", "55482TjSozI", "45309330NGGeni", "defaultAccessToken", "162095vkfqwn", "704KMgKVI", "3250hNGyNH", "6896aWumOl", "1239TdDlDA", "9225250Phlmxm"];
  return Ux = function() {
    return t;
  }, Ux();
}
function Ii(t) {
  var e = un;
  va[e(337)] = t;
}
const ht = ln;
function $x() {
  const t = ["2876769YDulxP", "14px sans-serif", "13617NHXFsS", "1612120zEWzJC", "80yAnJzC", "926216xuaLYE", "2yQwCdo", "3714522XXcEYo", "959197temXaH", "WHITE", "5536uXzVQq", "15bYuFXx", "CENTER", "2362844gzMGga"];
  return $x = function() {
    return t;
  }, $x();
}
(function(t, e) {
  const x = ln, n = t();
  for (; ; )
    try {
      if (parseInt(x(136)) / 1 * (parseInt(x(134)) / 2) + -parseInt(x(139)) / 3 * (-parseInt(x(133)) / 4) + parseInt(x(131)) / 5 + parseInt(x(135)) / 6 + parseInt(x(142)) / 7 + -parseInt(x(138)) / 8 * (parseInt(x(130)) / 9) + parseInt(x(132)) / 10 * (-parseInt(x(141)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($x, 704017);
function ln(t, e) {
  return t = t - 129, $x()[t];
}
const cr = { font: ht(129), pixelOffset: new $(18, 0), verticalOrigin: $2[ht(140)], horizontalOrigin: wt.LEFT, fillColor: G[ht(137)], style: U2.FILL_AND_OUTLINE };
(function(t, e) {
  const x = fr, n = t();
  for (; ; )
    try {
      if (-parseInt(x(102)) / 1 + -parseInt(x(106)) / 2 + -parseInt(x(103)) / 3 * (parseInt(x(104)) / 4) + -parseInt(x(109)) / 5 + -parseInt(x(107)) / 6 * (-parseInt(x(101)) / 7) + parseInt(x(105)) / 8 + parseInt(x(108)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Hx, 735329);
const gi = { scale: 1 };
function Hx() {
  const t = ["3cNOsPd", "780188xNpxaE", "6229152wKbelT", "594004CKZCHk", "282QzlDDZ", "13007745zlUOAn", "1376680CBJxhU", "56756xDGBEa", "1102311SEqBNv"];
  return Hx = function() {
    return t;
  }, Hx();
}
function fr(t, e) {
  return t = t - 101, Hx()[t];
}
async function yi(t) {
  return t;
}
const dn = pn;
(function(t, e) {
  const x = pn, n = t();
  for (; ; )
    try {
      if (parseInt(x(478)) / 1 + parseInt(x(473)) / 2 * (-parseInt(x(477)) / 3) + parseInt(x(474)) / 4 + parseInt(x(472)) / 5 + -parseInt(x(470)) / 6 + parseInt(x(476)) / 7 + -parseInt(x(469)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zx, 976937);
function Zx() {
  const t = ["1248833QgtPBg", "then", "2425840yUZXyw", "2171832BewwZi", "resolve", "4782255fcqccd", "2CUqvQW", "1658296SkZnXr", "call", "1503040EjVWNp", "3577317gRcIRf"];
  return Zx = function() {
    return t;
  }, Zx();
}
function pn(t, e) {
  return t = t - 468, Zx()[t];
}
const y2 = Promise[dn(471)]();
function Rt(t) {
  const e = dn;
  return t ? y2[e(468)](() => t[e(475)](null, F())) : y2.then(() => F());
}
(function(t, e) {
  for (var x = Cx, n = t(); ; )
    try {
      var a = parseInt(x(262)) / 1 * (parseInt(x(252)) / 2) + -parseInt(x(256)) / 3 + -parseInt(x(266)) / 4 * (-parseInt(x(267)) / 5) + -parseInt(x(259)) / 6 + -parseInt(x(254)) / 7 + -parseInt(x(264)) / 8 + parseInt(x(258)) / 9 * (parseInt(x(253)) / 10);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qx, 212811);
function vi(t) {
  var e = Cx;
  return sx(t, e(260));
}
function wi(t) {
  var e = Cx;
  return sx(t, e(263));
}
function ur(t) {
  return sx(t, "Object");
}
function v2(t) {
  return sx(t, "Array");
}
function Dt(t) {
  var e = Cx;
  return sx(t, e(265));
}
function w2(t) {
  return sx(t, "Number");
}
function lr(t) {
  return t != null;
}
function Cx(t, e) {
  t = t - 252;
  var x = qx(), n = x[t];
  return n;
}
function qx() {
  var t = ["300HGZuMM", "22835cWaSYK", "118fzChfI", "106310OqMRKq", "2281328MZZYvj", "call", "289710oEuQaz", "toString", "369miNYmV", "1317108XoPaHM", "Map", "[object ", "4627uDYnjC", "Set", "1572688wGZSMp", "String"];
  return qx = function() {
    return t;
  }, qx();
}
function sx(t, e) {
  var x = Cx;
  return Object.prototype[x(257)][x(255)](t) === x(261) + e + "]";
}
(function(t, e) {
  const x = f0, n = t();
  for (; ; )
    try {
      if (parseInt(x(162)) / 1 + -parseInt(x(132)) / 2 + parseInt(x(150)) / 3 + parseInt(x(158)) / 4 * (parseInt(x(136)) / 5) + -parseInt(x(161)) / 6 * (-parseInt(x(148)) / 7) + parseInt(x(135)) / 8 * (parseInt(x(153)) / 9) + -parseInt(x(128)) / 10 * (parseInt(x(147)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xx, 688823);
const Tt = /* @__PURE__ */ new Map();
function Xx() {
  const t = ["6454822hxmTmA", "1414luCJZD", "addImageryProvider", "3942156TPZHYY", "image/png", "clear", "14589iTqxJr", "1.3.0", "has", "get", "EPSG:4326:8", "8nzZYjP", "EPSG:4326:14", "EPSG:4326:20", "24156nOtYcF", "132376dcXutX", "/proxy/", "EPSG:4326:4", "delete", "imageLayer", "EPSG:4326:6", "EPSG:4326:11", "30GlSPxP", "show", "EPSG:4326:13", "imageryLayers", "897986zVEsJW", "set", "EPSG:4326:18", "768xwBGBF", "1207315JTtTXG", "scene", "EPSG:4326:21", "EPSG:4326:19", "imageryProvider", "EPSG:4326:9", "EPSG:4326:10", "EPSG:4326", "EPSG:4326:5", "WMS", "EPSG:4326:2"];
  return Xx = function() {
    return t;
  }, Xx();
}
function hn(t, e, x = L()) {
  var a;
  const n = f0;
  !M0(x) && (Tt.set(x, /* @__PURE__ */ new Map()), Mx(() => Tt[n(124)](x), { viewerName: x })), (a = M0(x)) == null || a[n(133)](t, e);
}
function dr(t = L()) {
  var x;
  const e = f0;
  (x = M0(t)) == null || x[e(152)]();
}
function Si(t, e = L()) {
  var n;
  const x = f0;
  (n = M0(e)) == null || n[x(124)](t);
}
function M0(t = L()) {
  return Tt.get(t);
}
function pr(t, e, x = L()) {
  const n = f0, a = F(x);
  if (Gt(t, x)) return _n(t), !1;
  const s = a[n(137)][n(131)][n(149)](e);
  hn(t, { imagery: e, imageLayer: s });
}
function f0(t, e) {
  return t = t - 124, Xx()[t];
}
function Ci(t, e, x = L()) {
  const n = f0, a = F(x);
  if (Gt(t, x)) return !1;
  hr(x);
  const s = a[n(137)][n(131)][n(149)](e);
  hn(t, { imagery: e, imageLayer: s });
}
function hr(t) {
  const e = f0;
  F(t)[e(137)].imageryLayers.removeAll(), dr(t);
}
function Ei(t) {
  const e = f0, x = { proxy: new wa(e(163)), parameters: { service: e(145), version: e(154), transparent: !0, format: e(151) }, ...t };
  return new Sa(x);
}
function _r(t) {
  const e = f0;
  return new Ca({ tileMatrixLabels: ["EPSG:4326:0", "EPSG:4326:1", e(146), "EPSG:4326:3", e(164), e(144), e(126), "EPSG:4326:7", e(157), e(141), e(142), e(127), "EPSG:4326:12", e(130), e(159), "EPSG:4326:15", "EPSG:4326:16", "EPSG:4326:17", e(134), e(139), e(160), e(138)], format: "image/png", tileMatrixSetID: e(143), ...t });
}
function Gt(t, e = L()) {
  var n;
  const x = f0;
  return (n = M0(e)) == null ? void 0 : n[x(155)](t);
}
function Di(t, e = L()) {
  var n;
  const x = f0;
  return (n = M0(e)) == null ? void 0 : n[x(156)](t);
}
const br = bn(!1), _n = bn(!0);
function mr(t, e = L()) {
  var a;
  const x = f0, n = (a = M0(e)) == null ? void 0 : a[x(156)](t);
  return n == null ? void 0 : n[x(125)][x(129)];
}
function bn(t) {
  return function(e, x = L()) {
    var s;
    const n = f0, a = (s = M0(x)) == null ? void 0 : s[n(156)](e);
    a != null && a.imageLayer && (a.imageLayer[n(129)] = t, a[n(125)][n(140)] && (a[n(125)].imageryProvider[n(129)] = t));
  };
}
function Ti(t = L()) {
  return M0(t);
}
function Jx() {
  const t = ["default", "14599897Hvpxuo", "12ueZQTp", "10kNDxxh", "/vector/geoserver/gwc/service/wmts", "1921016FMmBDy", "global_chart", "215zIoKST", "12355981BOYtwN", "_group", "6ZyUZfY", "9ftNYhn", "fromDegrees", "24261QhAUsX", "1618656wupXeQ", "then", "image/png", "9866976hYTdXY", "74AaQrIX", "terrainProvider", "101044hWluuj"];
  return Jx = function() {
    return t;
  }, Jx();
}
(function(t, e) {
  const x = Ex, n = t();
  for (; ; )
    try {
      if (parseInt(x(290)) / 1 + -parseInt(x(294)) / 2 * (parseInt(x(289)) / 3) + parseInt(x(275)) / 4 * (-parseInt(x(283)) / 5) + parseInt(x(286)) / 6 * (-parseInt(x(293)) / 7) + -parseInt(x(281)) / 8 * (parseInt(x(287)) / 9) + parseInt(x(279)) / 10 * (parseInt(x(284)) / 11) + parseInt(x(278)) / 12 * (parseInt(x(277)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Jx, 829859);
function Ex(t, e) {
  return t = t - 275, Jx()[t];
}
function Ir(t, e) {
  const x = Ex;
  Rt()[x(291)](() => {
    const n = F(e);
    n.terrainProvider = new Ea(t);
  });
}
function Mi(t) {
  const e = Ex, x = F(t);
  x[e(295)] = new H2();
}
function Pi(t) {
  const e = Ex;
  return !(F(t)[e(295)] instanceof H2);
}
function Ai(t) {
  Ir({ url: Z0.defaultTerrainUrl }, t);
}
function ki() {
  const t = Ex, e = t(282);
  if (Gt(e)) {
    if (mr(e)) {
      br(e);
      return;
    }
    _n(e);
  }
  const x = [-179.9999971999999, 179.9999971999999, -61.7333333, 78.3666667], n = Ix[t(288)](x[0], x[2], x[1], x[3]), a = _r({ url: t(280), layer: e + t(285), tilingScheme: new Pt(), format: t(292), rectangle: n, style: t(276) });
  pr(e, a);
}
function Kx() {
  const t = ["SCENE3D", "265UGLFoQ", "has", "get", "then", "3903054GxHcVP", "9960636CRYDus", "8534752sntihb", "139446ZRxoza", "mode", "forEach", "add", "COLUMBUS_VIEW", "2byguoI", "966026SuFheb", "750xsXSgv", "scene", "viewerName", "27804awEYiI", "850284OWceAY", "SCENE2D"];
  return Kx = function() {
    return t;
  }, Kx();
}
const ft = Ft;
(function(t, e) {
  const x = Ft, n = t();
  for (; ; )
    try {
      if (parseInt(x(391)) / 1 * (parseInt(x(390)) / 2) + parseInt(x(396)) / 3 + parseInt(x(395)) / 4 * (-parseInt(x(399)) / 5) + parseInt(x(382)) / 6 + parseInt(x(383)) / 7 + -parseInt(x(384)) / 8 + parseInt(x(385)) / 9 * (-parseInt(x(392)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Kx, 725614);
const Rx = /* @__PURE__ */ new WeakMap();
function Ft(t, e) {
  return t = t - 382, Kx()[t];
}
const Ni = Yt(d0[ft(397)]), Oi = Yt(d0[ft(398)]), Li = Yt(d0[ft(389)]);
function Yt(t) {
  return function(e) {
    var a;
    const x = Ft, n = F(e);
    n[x(393)][x(386)] = t, (a = Rx[x(401)](n)) == null || a[x(387)]((s) => {
      s == null || s(t);
    });
  };
}
function Vi(t, e) {
  const x = ft;
  Rt()[x(402)](() => {
    var s;
    const n = x, a = F(e == null ? void 0 : e[n(394)]);
    !Rx[n(400)](a) && Rx.set(a, /* @__PURE__ */ new Set()), (s = Rx[n(401)](a)) == null || s[n(388)](t);
  });
}
(function(t, e) {
  const x = ut, n = t();
  for (; ; )
    try {
      if (parseInt(x(500)) / 1 + -parseInt(x(507)) / 2 + parseInt(x(493)) / 3 * (parseInt(x(491)) / 4) + -parseInt(x(503)) / 5 + -parseInt(x(479)) / 6 * (parseInt(x(514)) / 7) + -parseInt(x(490)) / 8 + -parseInt(x(475)) / 9 * (-parseInt(x(497)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qx, 289149);
function ut(t, e) {
  return t = t - 475, Qx()[t];
}
function Qx() {
  const t = ["TRANSPARENT", "get", "entities", "load", "keys", "106112gSMnwv", "1895684SGUFBq", "1.0.0", "3fetYfl", "catch", "maxFeatures", "removeAll", "10WTghyL", "reject", "reverse", "289340sJbelM", "getValue", "values", "2032945zxEoLI", "navigational_charts", " like '%", "application/json", "360300moTwrF", "forEach", "has", "then", "cql_filter", "set", "features", "275163pSItzA", "/ows?service=WFS", "5732172fIsfTU", "resolve", "polyline", "dataSources", "78zxZxtb", "add", "polygon", "json", "RED", "charts"];
  return Qx = function() {
    return t;
  }, Qx();
}
const px = /* @__PURE__ */ new Map();
function gr(t) {
  const e = ut, { workspace: x, layerName: n, searchField: a, searchValue: s, maxFeatures: r = 50 } = t, i = { version: e(492), request: "GetFeature", outputFormat: e(506), typeName: x + ":" + n };
  r && (i[e(495)] = r), a && (i[e(511)] = encodeURIComponent(a + e(505) + s + "%'"));
  let o = "";
  Object[e(489)](i)[e(508)]((f) => {
    o += "&" + f + "=" + i[f];
  });
  const u = "/vector/geoserver/" + x + e(515) + o;
  return fetch(u).then((f) => f[e(482)]())[e(510)]((f) => Promise[e(476)](f))[e(494)]((f) => Promise[e(498)](f));
}
async function Wi(t, e = L()) {
  const x = ut;
  if (px[x(509)](e)) return;
  const n = await gr({ workspace: x(484), layerName: x(504) });
  n[x(513)] = n[x(513)][x(499)]();
  const { clampToGround: a = !0, color: s = G[x(483)], width: r = 2 } = t ?? {}, i = await Da[x(488)](n, { clampToGround: a, fill: G[x(485)], stroke: s, strokeWidth: r });
  return a && i[x(487)][x(502)][x(508)]((u) => {
    var l;
    const f = x;
    if (u[f(481)]) {
      const h = (l = u[f(481)].hierarchy) == null ? void 0 : l[f(501)](ye()), c = h.positions;
      u[f(477)] = new Ta({ positions: [...c, c[0]], clampToGround: a, material: s, width: r, arcType: Ma.RHUMB });
    }
  }), F(e)[x(478)][x(480)](i), px[x(512)](e, i), i;
}
function zi(t = L()) {
  const e = ut, x = F(t);
  if (px[e(509)](t)) {
    const n = px[e(486)](t);
    n == null || n[e(487)][e(496)](), x[e(478)].remove(n, !0), px.delete(t);
  }
}
const yr = mn;
function xe() {
  const t = ["9dNNEfB", "827622UqeJOY", "scene", "193047hvISEw", "1344582CWPnwI", "4UYiLCS", "924YIXyIS", "422264GLFOjL", "134673dldQyI", "7EzAWYR", "24ucdDgy", "2751530gYVIeh", "317315Xayjwn"];
  return xe = function() {
    return t;
  }, xe();
}
(function(t, e) {
  const x = mn, n = t();
  for (; ; )
    try {
      if (parseInt(x(389)) / 1 * (-parseInt(x(391)) / 2) + -parseInt(x(400)) / 3 + -parseInt(x(396)) / 4 * (-parseInt(x(398)) / 5) + -parseInt(x(390)) / 6 + parseInt(x(395)) / 7 * (parseInt(x(393)) / 8) + parseInt(x(399)) / 9 * (-parseInt(x(397)) / 10) + -parseInt(x(394)) / 11 * (-parseInt(x(392)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xe, 215054);
const lt = Tx(yr(388));
function mn(t, e) {
  return t = t - 388, xe()[t];
}
function Dx(t, e) {
  return t = t - 275, ee()[t];
}
const W0 = Dx;
(function(t, e) {
  const x = Dx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(278)) / 1 + parseInt(x(285)) / 2 * (-parseInt(x(289)) / 3) + parseInt(x(287)) / 4 + parseInt(x(286)) / 5 + -parseInt(x(275)) / 6 * (-parseInt(x(281)) / 7) + -parseInt(x(279)) / 8 * (-parseInt(x(297)) / 9) + -parseInt(x(294)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ee, 772892);
const V0 = /* @__PURE__ */ new Map(), In = Z0.DEFAULT_VIEWER_NAME, { DEFAULT_VIEWER_NAME: gn, viewerConfig: vr } = Z0;
function wr(t, e) {
  const x = Dx;
  if (V0[x(292)](t)) return console[x(299)](x(296) + t + x(288)), V0.get(t);
  V0.set(t, new Z2(t, Vr({}, vr, e ?? {})));
  const n = V0[x(298)](t);
  return Ur(t, n), Er(n), n;
}
function F(t = gn) {
  return yn(t) ? t : V0.get(t);
}
function L(t) {
  return t ?? gn;
}
function Sr(t = In) {
  V0[Dx(276)](t);
}
function Cr(t = In) {
  var n;
  const e = Dx, x = F(t);
  Br(t), (n = F(x)) == null || n[e(284)](), Sr(t);
}
function Ri() {
}
function Gi(t = Z0[W0(290)]) {
  return V0[W0(292)](t);
}
function Fi(t) {
  const e = W0;
  return !t || !yn(t) ? (console[e(299)]("请先创建Viewer"), !1) : !0;
}
function yn(t) {
  return t instanceof Z2;
}
function Tx(t) {
  return function(e) {
    return F(e)[t];
  };
}
function Er(t) {
  const e = W0, x = F(t)[e(282)];
  x[e(295)][e(293)] = e(277);
}
function Yi(t, e, x) {
  const n = W0;
  F(x)[n(283)](t, e);
}
const Dr = Tx(W0(300));
function ee() {
  const t = [" 的视图已经存在", "3322218tJLRMY", "DEFAULT_VIEWER_NAME", "canvas", "has", "display", "13595920ZMtDRx", "style", "名称为", "27711PPhfjd", "get", "warn", "container", "54yWwahd", "delete", "none", "761355WOeolw", "3224BoBmMU", "cursor", "718501YBEktw", "bottomContainer", "flyTo", "destroy", "2atqAMm", "5222035ZfOQXj", "3168856FAaljR"];
  return ee = function() {
    return t;
  }, ee();
}
const Tr = Tx(W0(291));
function b0(t = "", e) {
  const x = W0, n = Tr(e);
  n[x(295)][x(280)] = t;
}
function vn(t) {
  return function(e, x) {
    F(x)[t] = e;
  };
}
(function(t, e) {
  const x = N0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(508)) / 1 + -parseInt(x(515)) / 2 * (parseInt(x(497)) / 3) + parseInt(x(513)) / 4 + -parseInt(x(533)) / 5 + -parseInt(x(524)) / 6 + -parseInt(x(526)) / 7 + parseInt(x(509)) / 8 * (parseInt(x(501)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(te, 859819);
function N0(t, e) {
  return t = t - 490, te()[t];
}
function wn(t, e) {
  const x = N0, n = F(e), a = n[x(499)][x(517)][x(505)], s = a[x(494)](t);
  let r = +g0.toDegrees(s.longitude)[x(529)](6), i = +g0[x(535)](s[x(534)])[x(529)](6), o = +s.height.toFixed(6);
  return Number[x(536)](r) && (r = +r[x(529)](1)), Number[x(536)](i) && (i = +i.toFixed(1)), Number[x(536)](o) && (o = +o[x(529)](1)), { longitude: Number(r), latitude: Number(i), height: Number(o) };
}
function ji(t, e) {
  const x = N0, n = F(e), a = n.scene[x(517)][x(505)], s = a[x(494)](t);
  let r = +g0[x(535)](s[x(528)]), i = +g0.toDegrees(s[x(534)]), o = +s[x(519)];
  return Number[x(536)](r) && (r = +r), Number[x(536)](i) && (i = +i), Number.isInteger(o) && (o = +o), { longitude: Number(r), latitude: Number(i), height: Number(o) };
}
function jt(t, e) {
  const x = N0, n = F(e);
  let a = new $(t.x, t.y);
  return t instanceof MouseEvent && (a = new $(t.offsetX, t[x(539)])), n[x(502)][x(500)](a, n[x(499)].globe[x(505)]);
}
function H0(t, e) {
  const x = F(e), n = jt(t, x);
  if (n) return wn(n, x);
}
const Sn = H0;
function Bi(t, e, x) {
  const n = N0, { longitude: a, latitude: s, height: r } = t, { longitude: i, latitude: o, height: u } = e, f = e0.fromDegrees(a, s, r), l = e0.fromDegrees(i, o, u), h = lt(x);
  return new At(f, l, h[n(517)][n(505)])[n(510)];
}
function Ui(t, e, x) {
  const n = N0, a = e0[n(495)](t), s = e0.fromCartesian(e), r = lt(x), i = new At(a, s, r[n(517)][n(505)]);
  return Math[n(493)](i.surfaceDistance) / 1e3;
}
function $i(t) {
  const e = N0;
  return proj4[e(490)](e(522), e(496)), proj4.defs(e(523), e(537)), proj4(e(522), e(523), [t[e(528)], t.latitude]);
}
const Mr = new q2();
function Hi(t, e) {
  const x = N0;
  if (t[x(514)] && t[x(507)] !== d0[x(516)]) return t[x(527)](e);
  if (!t[x(517)]) return;
  const n = t[x(502)][x(530)](e, Mr), a = t.globe.pick(n, t);
  return a || t.camera.pickEllipsoid(e, t[x(517)].ellipsoid);
}
const Pr = new g(), Ar = new $(), S2 = new g(), kr = new q2(), C2 = new e0();
let Q0 = new g();
function te() {
  const t = ["isInteger", "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", "normalize", "offsetY", "defs", "groundCartesian", "mapProjection", "floor", "cartesianToCartographic", "fromCartesian", "+proj=longlat +datum=WGS84 +no_defs", "580758ZnypLS", "frameState", "scene", "pickEllipsoid", "84591dXfDVZ", "camera", "add", "UNIT_X", "ellipsoid", "rayPlane", "mode", "237448pnXekC", "2920ZagTWx", "surfaceDistance", "project", "cross", "1590944ezpeqH", "pickPositionSupported", "2BshqZA", "SCENE2D", "globe", "cartesian", "height", "COLUMBUS_VIEW", "unproject", "EPSG:4326", "EPSG:4610", "9340674DFKrPe", "cartographicToCartesian", "2447130LJSdSF", "pickPosition", "longitude", "toFixed", "getPickRay", "direction", "fromElements", "3155745gZJazp", "latitude", "toDegrees"];
  return te = function() {
    return t;
  }, te();
}
const Nr = new X2(g.UNIT_X, 0), Or = new g();
function Zi(t, e, x) {
  const n = N0, a = t[n(498)][n(492)][n(505)], s = x[n(491)];
  let r = x[n(518)].clone(), i = Nr, o = Or, u = s, f = o;
  if (t[n(507)] === d0[n(520)]) {
    f = g[n(504)];
    const c = a[n(494)](s, C2);
    u = t[n(492)][n(511)](c, Pr), g[n(532)](u.z, u.x, u.y, u);
  }
  let l = g[n(512)](f, t[n(502)][n(531)], S2);
  l = g[n(512)](f, l, l), l = g[n(538)](l, l), i = X2.fromPointNormal(u, l, i);
  const h = t.camera[n(530)](e, kr);
  if (r = Pa[n(506)](h, i, r), W(r)) {
    if (t[n(507)] === d0.COLUMBUS_VIEW) {
      r = g[n(532)](r.y, r.z, r.x, r);
      const c = t[n(492)][n(521)](r, C2);
      r = a[n(525)](c, r);
    }
    return Aa.wgs84ToWindowCoordinates(t, x[n(491)], Ar).y < e.y && (o = g.negate(o, S2)), Q0 = g.subtract(r, s, Q0), Q0 = g.projectVector(Q0, o, Q0), r = g[n(503)](s, Q0, r), r;
  }
}
(function(t, e) {
  const x = vx, n = t();
  for (; ; )
    try {
      if (parseInt(x(365)) / 1 * (parseInt(x(352)) / 2) + parseInt(x(354)) / 3 * (parseInt(x(364)) / 4) + -parseInt(x(358)) / 5 + -parseInt(x(351)) / 6 * (-parseInt(x(362)) / 7) + parseInt(x(353)) / 8 + -parseInt(x(355)) / 9 + -parseInt(x(363)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ne, 506455);
function ne() {
  const t = ["10375830GBWpKU", "420048ZeCAhG", "16PdXGYk", "floor", "push", "2725218gnzOjP", "36022OwGaVp", "7589360UDvPSI", "9znfxJK", "443655TanRfi", "geometry", "longitude", "2063760QdjoIQ", "latitude", "isArray", "coordinates", "7cnlpFZ"];
  return ne = function() {
    return t;
  }, ne();
}
function ae(t) {
  const e = vx;
  return Array[e(360)](t) ? jx(t) : jx([t[e(357)], t[e(359)]]);
}
function E2(t, e) {
  const x = jx(t), n = jx(e);
  return ir(x, n);
}
function qi(t) {
  return cn(t);
}
function _t(t, e, x) {
  const n = ae(t), a = ae(e);
  return or(n, a, x);
}
function Xi(t) {
  const e = t.map((n) => ae(n)), x = rr(e);
  return sr(x);
}
function Mt(t) {
  const e = vx;
  return t[e(356)][e(361)];
}
function vx(t, e) {
  return t = t - 351, ne()[t];
}
function Ji(t) {
  const e = vx, x = t.map((s) => {
    const r = vx;
    return [s[r(357)], s[r(359)]];
  });
  x[e(367)]([t[0][e(357)], t[0][e(359)]]);
  const n = cn([x]);
  return Math[e(366)](nr(n)) / 1e6 ?? 0;
}
function Ki(t) {
  const { origin: e, distance: x, bearing: n, options: a } = t, s = ae(e), r = ar(s, x, n, a);
  return Mt(r);
}
(function(t, e) {
  const x = Lr, n = t();
  for (; ; )
    try {
      if (parseInt(x(180)) / 1 + parseInt(x(186)) / 2 * (-parseInt(x(184)) / 3) + parseInt(x(185)) / 4 * (-parseInt(x(178)) / 5) + parseInt(x(181)) / 6 + parseInt(x(179)) / 7 * (parseInt(x(188)) / 8) + parseInt(x(182)) / 9 + parseInt(x(183)) / 10 * (parseInt(x(187)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(re, 844143);
function Lr(t, e) {
  return t = t - 178, re()[t];
}
function re() {
  const t = ["60106SQqOyv", "283096gcvMFw", "18712VWQTSa", "5827910XcPmxZ", "1078BbZOxv", "1479911MqWYrx", "2431908RctgPA", "6886539JMVhhw", "230ncVSzT", "159aPccFY", "4QXbDNc"];
  return re = function() {
    return t;
  }, re();
}
const Vr = Object.assign;
function Wr(t, e) {
  return function(x) {
    return t(x)[e];
  };
}
(function(t, e) {
  const x = c0, n = t();
  for (; ; )
    try {
      if (parseInt(x(188)) / 1 * (-parseInt(x(185)) / 2) + parseInt(x(193)) / 3 * (-parseInt(x(189)) / 4) + parseInt(x(182)) / 5 * (-parseInt(x(179)) / 6) + -parseInt(x(205)) / 7 * (parseInt(x(191)) / 8) + parseInt(x(198)) / 9 * (-parseInt(x(174)) / 10) + parseInt(x(175)) / 11 * (parseInt(x(195)) / 12) + parseInt(x(173)) / 13 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(se, 488358);
var zr = ((t) => {
  const e = c0;
  return t[t.entityArea = 0] = e(194), t[t.emptyArea = 1] = e(204), t[t.globalArea = 2] = e(190), t;
})(zr || {});
function se() {
  const t = ["isEmpty", "1731iOBtCO", "entityArea", "12mbsKLf", "get", "delete", "9iowRzc", "areaEventMap", "MOUSE_MOVE", "primitive", "forEach", "position", "emptyArea", "602yOffKF", "screenSpaceEventHandler", "37175047cRnroH", "7575910Duvbfo", "911966KfbcHQ", "from", "set", "viewerName", "120342HksCBo", "add", "pick", "35OXvxIu", "has", "isRegistry", "8714LwnfsI", "scene", "endPosition", "19BuYLkl", "6488GUIPUx", "globalArea", "50000wMlPKO"];
  return se = function() {
    return t;
  }, se();
}
const Bt = /* @__PURE__ */ new Map();
function c0(t, e) {
  return t = t - 173, se()[t];
}
function Rr(t) {
  const e = c0;
  return t.isEntity ? 0 : t[e(192)] ? 1 : 2;
}
function Ut(t, e = L()) {
  const x = c0;
  return !t[x(183)](e) && (t[x(177)](e, /* @__PURE__ */ new Map()), Mx(() => t.delete(e), { viewerName: e })), t.get(e);
}
function $t(t, e, x) {
  const n = c0, a = x ? e + "_" + x : e;
  return !t.has(a) && t.set(a, { areaEventMap: /* @__PURE__ */ new Map(), isRegistry: !1 }), t[n(196)](a);
}
function hx(t, e) {
  const x = c0;
  return !t[x(183)](e) && t[x(177)](e, /* @__PURE__ */ new Set()), t[x(196)](e);
}
function Gr(t, e, x, n) {
  const a = c0, s = Ut(Bt, t), r = $t(s, e, n), i = r[a(199)];
  return hx(i, x);
}
function G0(t, e) {
  return function(x, n) {
    const a = c0, s = Rr(n ?? {});
    return P0((r) => {
      const i = c0, o = L(n == null ? void 0 : n[i(178)]), u = Ut(Bt, o), f = $t(u, t, e), l = f[i(199)];
      hx(l, s)[i(180)](x), !f[i(184)] && Fr(r, o, t, e);
    }, n == null ? void 0 : n[a(178)]), () => {
      const r = a;
      Gr(L(n == null ? void 0 : n.viewerName), t, s, e)[r(197)](x);
    };
  };
}
function Fr(t, e, x, n) {
  const a = c0;
  t[a(206)].setInputAction((s) => {
    const r = a;
    e = L(e);
    const i = Ut(Bt, e), o = $t(i, x, n), u = o[r(199)];
    let f;
    x === k0[r(200)] && (f = D2(s[r(187)], t)), f = D2(s[r(203)], t), f ? hx(u, 0)[r(202)]((c) => c({ entity: f, position: s })) : hx(u, 1)[r(202)]((c) => c({ position: s })), hx(u, 2)[r(202)]((h) => h({ position: s }));
  }, x, n);
}
function D2(t, e) {
  var a;
  const x = c0;
  if (!t) return null;
  const n = (a = e == null ? void 0 : e[x(186)]) == null ? void 0 : a.pick(t, 30, 30);
  return n && Yr(n == null ? void 0 : n.id) && n.id;
}
function Qi(t, e) {
  const x = c0;
  if (!t) return null;
  const n = e[x(186)][x(181)](t);
  return n && n[x(201)];
}
function xo(t, e) {
  const x = c0;
  if (!t) return null;
  const n = e[x(186)][x(181)](t);
  if (n != null && n[x(201)]) return n;
}
function Yr(t) {
  return t instanceof ka;
}
(function(t, e) {
  const x = wx, n = t();
  for (; ; )
    try {
      if (parseInt(x(464)) / 1 * (parseInt(x(463)) / 2) + -parseInt(x(450)) / 3 * (-parseInt(x(453)) / 4) + parseInt(x(454)) / 5 + parseInt(x(452)) / 6 + parseInt(x(462)) / 7 + -parseInt(x(460)) / 8 * (-parseInt(x(448)) / 9) + -parseInt(x(458)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ie, 870602);
function ie() {
  const t = ["1CojAXN", "71163bXeYmv", "clear", "3PIudtY", "add", "4795584HCXNxx", "5913524aLOmOw", "4168040fSlNhP", "viewerName", "delete", "get", "52396080NxkgyD", "forEach", "1720TCScXD", "set", "6987127RIzRYt", "601582BhBCyI"];
  return ie = function() {
    return t;
  }, ie();
}
function wx(t, e) {
  return t = t - 448, ie()[t];
}
const $0 = /* @__PURE__ */ new WeakMap();
function eo(t, e) {
  const x = wx;
  return nextTick().then(() => {
    const n = wx, { viewerName: a } = e ?? {}, s = F(a);
    !$0.has(s) && ($0[n(461)](s, /* @__PURE__ */ new Set()), Mx(() => $0[n(456)](s), { viewerName: L(a) })), $0.get(s)[n(451)](t);
  }), () => {
    var n;
    return (n = $0.get(F(e == null ? void 0 : e[x(455)]))) == null ? void 0 : n.delete(t);
  };
}
function to(t) {
  var n;
  const e = wx, x = F(t);
  (n = $0[e(457)](x)) == null || n[e(459)]((a) => {
    const s = F();
    a(s);
  });
}
function no(t) {
  var x;
  const e = wx;
  (x = $0[e(457)](F(t == null ? void 0 : t[e(455)]))) == null || x[e(449)]();
}
function oe() {
  const t = ["addEventListener", "529168joKelL", "58520HIumqI", "preUpdate", "222450WvXKRT", "155cGLKUq", "11ZJejXp", "36osOfZq", "onTick", "67902vgpejq", "14309076yvpJCe", "385NAtiHa", "1315822gLlKlN", "scene", "3mVAiMM", "40444FqPETu"];
  return oe = function() {
    return t;
  }, oe();
}
(function(t, e) {
  const x = Ht, n = t();
  for (; ; )
    try {
      if (parseInt(x(141)) / 1 + parseInt(x(152)) / 2 * (parseInt(x(154)) / 3) + parseInt(x(155)) / 4 * (-parseInt(x(145)) / 5) + -parseInt(x(149)) / 6 * (-parseInt(x(151)) / 7) + parseInt(x(142)) / 8 + parseInt(x(147)) / 9 * (parseInt(x(144)) / 10) + -parseInt(x(146)) / 11 * (parseInt(x(150)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(oe, 399945);
function Ht(t, e) {
  return t = t - 140, oe()[t];
}
function Cn(t, e) {
  const { viewerName: x } = e ?? {};
  let n;
  return P0((a) => {
    const s = Ht;
    n = a[s(153)][s(143)][s(140)](t);
  }, { viewerName: x }), n;
}
function ao(t, e) {
  const { viewerName: x } = e ?? {}, n = lt(x), a = n.postRender.addEventListener(t);
  return () => a;
}
function ro(t, e) {
  const x = Ht, { viewerName: n } = e ?? {};
  return kx(n)[x(148)][x(140)](t);
}
(function(t, e) {
  const x = Gx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(436)) / 1 + parseInt(x(440)) / 2 + -parseInt(x(441)) / 3 * (parseInt(x(439)) / 4) + parseInt(x(437)) / 5 * (parseInt(x(448)) / 6) + -parseInt(x(444)) / 7 + -parseInt(x(450)) / 8 * (parseInt(x(438)) / 9) + -parseInt(x(442)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ce, 327448);
function ce() {
  const t = ["condition", "88WduGrb", "9497rqCJDL", "30yencUS", "289539BzfcYg", "1172fdDcRP", "954582TuRblD", "309fQiGNR", "420230spGDbt", "setValue", "1591681BwJhME", "clear", "endPosition", "add", "513120DByiqC"];
  return ce = function() {
    return t;
  }, ce();
}
function Gx(t, e) {
  return t = t - 436, ce()[t];
}
function so(t, e) {
  const x = Gx, n = /* @__PURE__ */ new Set(), a = e == null ? void 0 : e[x(449)];
  return P0(() => {
    const s = x, r = X0(({ entity: i }) => {
      const o = Gx;
      if (!(a ? a(i) : !1)) return;
      const f = Xt(({ position: h }) => {
        var p;
        const c = Gx, d = jt(h[c(446)]);
        d && ((p = ms(i)) == null || p[c(443)](d));
      });
      n.add(f);
      const l = Zt(({ position: h }) => {
        f(), t == null || t({ entity: i, position: h }), l();
      });
      n[o(447)](l);
    }, { isEntity: !0 });
    n[s(447)](r);
  }), () => {
    const s = x;
    n.forEach((r) => r == null ? void 0 : r()), n[s(445)]();
  };
}
const z0 = En;
(function(t, e) {
  const x = En, n = t();
  for (; ; )
    try {
      if (parseInt(x(160)) / 1 + parseInt(x(171)) / 2 * (-parseInt(x(167)) / 3) + -parseInt(x(166)) / 4 * (-parseInt(x(156)) / 5) + -parseInt(x(165)) / 6 + -parseInt(x(163)) / 7 * (parseInt(x(157)) / 8) + -parseInt(x(170)) / 9 * (parseInt(x(158)) / 10) + parseInt(x(159)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fe, 211125);
const io = G0(k0.LEFT_CLICK);
function fe() {
  const t = ["1467EAubIO", "96geefJV", "MOUSE_MOVE", "25wsnOuP", "905416AXgUds", "11170imLohs", "6726929HYjtQq", "105531nwffUi", "RIGHT_CLICK", "LEFT_CLICK", "7dpmrgE", "CTRL", "566616mYjiah", "161276ftWLWJ", "19866rupqAg", "LEFT_DOWN", "LEFT_DOUBLE_CLICK"];
  return fe = function() {
    return t;
  }, fe();
}
const oo = G0(k0[z0(162)], J2[z0(164)]), X0 = G0(k0[z0(168)]), co = G0(k0[z0(168)], J2[z0(164)]);
function En(t, e) {
  return t = t - 156, fe()[t];
}
const Zt = G0(k0.LEFT_UP), qt = G0(k0[z0(161)]), jr = G0(k0[z0(169)]), Xt = G0(k0[z0(172)]);
(function(t, e) {
  const x = Jt, n = t();
  for (; ; )
    try {
      if (parseInt(x(135)) / 1 * (parseInt(x(132)) / 2) + parseInt(x(131)) / 3 * (-parseInt(x(127)) / 4) + -parseInt(x(136)) / 5 * (-parseInt(x(141)) / 6) + -parseInt(x(133)) / 7 + parseInt(x(129)) / 8 + -parseInt(x(134)) / 9 * (parseInt(x(139)) / 10) + -parseInt(x(138)) / 11 * (-parseInt(x(126)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ue, 988952);
const _x = /* @__PURE__ */ new Map();
function Jt(t, e) {
  return t = t - 125, ue()[t];
}
function Br(t = L()) {
  var n;
  const e = Jt, x = F(t);
  (n = _x[e(125)](t)) == null || n[e(140)]((a) => a(x)), _x.delete(t);
}
function ue() {
  const t = ["4iBlxsW", "add", "1085824HNHxSv", "set", "3048735WtQVnI", "2rqMlox", "5740308gVgsKu", "8186715AHMhfE", "226103XUNjRQ", "5aToakT", "viewerName", "2402653NnlllY", "10YqRYAn", "forEach", "4511814cmHyqv", "has", "get", "144nqJGYk"];
  return ue = function() {
    return t;
  }, ue();
}
function Mx(t, e) {
  const x = Jt, n = L(e == null ? void 0 : e[x(137)]);
  !_x[x(142)](n) && _x[x(130)](n, /* @__PURE__ */ new Set()), _x[x(125)](n)[x(128)](t);
}
function Kt(t, e) {
  return t = t - 471, le()[t];
}
(function(t, e) {
  const x = Kt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(474)) / 1 + parseInt(x(477)) / 2 * (parseInt(x(476)) / 3) + parseInt(x(480)) / 4 * (-parseInt(x(484)) / 5) + parseInt(x(471)) / 6 * (-parseInt(x(486)) / 7) + -parseInt(x(479)) / 8 + -parseInt(x(482)) / 9 * (parseInt(x(472)) / 10) + parseInt(x(487)) / 11 * (parseInt(x(485)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(le, 251138);
const rx = /* @__PURE__ */ new Map();
function le() {
  const t = ["set", "720762ktkQNa", "2Tcgrxj", "viewerName", "2394376ynGlPu", "1390324ZqVTzd", "get", "306dSCYEW", "forEach", "5PMxvMP", "5429436VisSLF", "2121280Cvnazz", "33CHcUJi", "6xaZkxk", "41270ZTfdYm", "add", "256239CaqnXb"];
  return le = function() {
    return t;
  }, le();
}
function P0(t, e) {
  const x = Kt, n = L(ur(e) ? e[x(478)] : e), a = F(L(n));
  if (a) return t(a);
  !rx.has(n) && rx[x(475)](n, /* @__PURE__ */ new Set()), rx[x(481)](n)[x(473)](t);
}
function Ur(t, e) {
  const x = Kt, n = rx[x(481)](t);
  n && n[x(483)]((a) => a(e)), rx.delete(t);
}
(function(t, e) {
  const x = m0, n = t();
  for (; ; )
    try {
      if (parseInt(x(281)) / 1 * (-parseInt(x(288)) / 2) + -parseInt(x(294)) / 3 + -parseInt(x(286)) / 4 * (parseInt(x(278)) / 5) + -parseInt(x(287)) / 6 + parseInt(x(285)) / 7 * (-parseInt(x(292)) / 8) + -parseInt(x(290)) / 9 * (-parseInt(x(293)) / 10) + parseInt(x(289)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(de, 444969);
const D0 = /* @__PURE__ */ new Map();
function Dn(t, e, x = L()) {
  const n = m0;
  !D0[n(298)](x) && (D0[n(284)](x, /* @__PURE__ */ new Map()), Mx(() => D0[n(282)](x), { viewerName: x })), D0.get(x)[n(284)](t, e);
}
function Tn(t, e = L()) {
  var n;
  const x = m0;
  return (n = D0.get(e)) == null ? void 0 : n[x(298)](t);
}
function de() {
  const t = ["set", "4039OjzpNK", "9572iTEVgu", "4199538DpBqUr", "1150438aPMUjD", "28092284qZbbPl", "14319ZZxiKJ", "forEach", "11728FmeVSE", "4030osAGDX", "1772208cvwPxl", "get", "remove", "请输入datasource 名称", "has", "from", "dataSources", "removeAll", "80yHwMhm", "warn", "add", "1pmvvuR", "delete", "entities"];
  return de = function() {
    return t;
  }, de();
}
function m0(t, e) {
  return t = t - 278, de()[t];
}
function y0(t, e = L()) {
  var n;
  return (n = D0[m0(295)](e)) == null ? void 0 : n.get(t);
}
const fo = y0;
function $r(t, e = L()) {
  const x = m0;
  if (!t) {
    console[x(279)](x(297));
    return;
  }
  const n = new kt(t);
  return Dn(t, n, e), n;
}
function uo(t, e = L()) {
  const x = m0;
  if (!Tn(t, e)) {
    const n = $r(t, e);
    F(e)[x(300)][x(280)](n);
  }
  return y0(t, e);
}
function Hr(t, e = L()) {
  return y0(t, e);
}
function Zr(t, e = L()) {
  var s;
  const x = m0, n = Hr(t, e);
  if (!n) return;
  F(e)[x(300)][x(296)](n), (s = D0[x(295)](e)) == null || s[x(282)](t);
}
function lo(t = L()) {
  const e = m0, x = D0[e(295)](t);
  x && Array[e(299)](x.values())[e(291)]((n) => {
    const a = e;
    n.entities[a(301)]();
  });
}
function po(t) {
  D0[m0(282)](t);
}
function ix(t, e = L()) {
  var n;
  const x = m0;
  (n = y0(t, e)) == null || n[x(283)][x(301)]();
}
function ox(t, e = !1, x) {
  let n;
  y0(t) ? n = y0(t) : n = new kt(t);
  const a = Mn(t, n);
  return e && a(x), { source: n, mount: a };
}
function ho(t, e = !1) {
  let x;
  y0(t) ? x = y0(t) : x = new K2(t);
  const n = Mn(t, x);
  return e && n(), { source: x, mount: n };
}
function Mn(t, e) {
  return function(x = L()) {
    P0((n) => {
      const a = m0;
      Tn(t, x) || (n[a(300)][a(280)](e), Dn(t, e, x));
    }, { viewerName: x });
  };
}
function Qt(t, e) {
  return t = t - 333, pe()[t];
}
const Pn = Qt;
(function(t, e) {
  const x = Qt, n = t();
  for (; ; )
    try {
      if (parseInt(x(348)) / 1 * (parseInt(x(343)) / 2) + parseInt(x(354)) / 3 + -parseInt(x(342)) / 4 * (-parseInt(x(337)) / 5) + parseInt(x(355)) / 6 * (parseInt(x(349)) / 7) + -parseInt(x(339)) / 8 + parseInt(x(359)) / 9 * (-parseInt(x(340)) / 10) + parseInt(x(333)) / 11 * (-parseInt(x(347)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pe, 549756);
const _o = vn(Pn(350)), bo = vn(Pn(341));
let ex;
function mo(t) {
  const e = F();
  ex = Cn(qr(e, t));
}
function pe() {
  const t = ["selectedEntity", "setView", "Matrix3", "heading", "2672361EfwGKU", "3714ggjHCh", "Matrix4", "fromQuaternion", "show", "3296556mWhNNI", "40942sHvEWj", "position", "Math", "camera", "2695yQIXTC", "getValue", "3562480ppYzEg", "30cYTITx", "trackedEntity", "2804YnPXVF", "469078hEvxGJ", "fromRotationTranslation", "orientation", "PI_OVER_TWO", "588Twxmgi", "1rvugvH", "8743LyKEin"];
  return pe = function() {
    return t;
  }, pe();
}
function Io() {
  ex && (ex == null || ex(), ex = void 0);
}
function qr(t, e) {
  return function(x, n) {
    var f, l;
    const a = Qt;
    if (!(e != null && e.orientation) || !e[a(334)]) return;
    const s = (f = e[a(345)]) == null ? void 0 : f[a(338)](n), r = (l = e.position) == null ? void 0 : l[a(338)](n), i = Lx[a(352)][a(357)](s), o = Lx[a(356)][a(344)](i, r), u = Lx.Transforms.fixedFrameToHeadingPitchRoll(o);
    u[a(353)] += Lx[a(335)][a(346)], e[a(358)] = !1, t[a(336)][a(351)]({ destination: r, orientation: u });
  };
}
function he() {
  const t = ["WHEEL", "415085lRUbZn", "screenSpaceCameraController", "PINCH", "32NvAFEP", "173541FahtrI", "4798XzLGbl", "scene", "translateEventTypes", "3779274yfzizg", "rotateEventTypes", "7626290DwFkKs", "196OkpjJJ", "RIGHT_DRAG", "4923040vHoUja", "tiltEventTypes", "246609vieure", "7MQeoaZ"];
  return he = function() {
    return t;
  }, he();
}
(function(t, e) {
  const x = An, n = t();
  for (; ; )
    try {
      if (parseInt(x(276)) / 1 * (parseInt(x(282)) / 2) + parseInt(x(293)) / 3 * (parseInt(x(292)) / 4) + -parseInt(x(289)) / 5 + parseInt(x(279)) / 6 * (-parseInt(x(287)) / 7) + -parseInt(x(284)) / 8 + -parseInt(x(286)) / 9 + parseInt(x(281)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(he, 339932);
function An(t, e) {
  return t = t - 276, he()[t];
}
function Xr(t) {
  const e = An, x = t[e(277)][e(290)];
  x[e(280)] = [K0[e(283)], K0.LEFT_DRAG], x.zoomEventTypes = [K0[e(288)], K0[e(291)]], x[e(278)] = K0[e(283)], x[e(285)] = [], x.tiltEventTypes = [{ eventType: K0[e(283)] }];
}
(function(t, e) {
  const x = dt, n = t();
  for (; ; )
    try {
      if (parseInt(x(203)) / 1 * (-parseInt(x(212)) / 2) + parseInt(x(213)) / 3 * (-parseInt(x(214)) / 4) + -parseInt(x(211)) / 5 * (-parseInt(x(202)) / 6) + parseInt(x(201)) / 7 + -parseInt(x(206)) / 8 + -parseInt(x(208)) / 9 * (parseInt(x(204)) / 10) + parseInt(x(205)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_e, 592744);
function go(t, e) {
  const x = dt, { west: n, south: a, east: s, north: r } = t;
  Rt()[x(210)](() => {
    var o;
    const i = x;
    (o = q0(e)) == null || o[i(207)]({ destination: Ix[i(209)](n, a, s, r) });
  });
}
function dt(t, e) {
  return t = t - 201, _e()[t];
}
function _e() {
  const t = ["1876600CADBIY", "flyTo", "4866309vFpweG", "fromDegrees", "then", "535zpNrlg", "12pbbVDH", "50349fHGVMs", "180nnDJTz", "7799659FcrOyt", "12042OTdrhM", "61230TNdKLS", "10WeLSop", "12778139WsWDhI"];
  return _e = function() {
    return t;
  }, _e();
}
function yo(t, e) {
  const x = dt;
  q0(e)[x(207)](t);
}
const q0 = Tx("camera");
function kn(t) {
  return function(e) {
    return q0(e)[t];
  };
}
function Jr(t) {
  const e = dt, { west: x, south: n, east: a, north: s } = t;
  Na.DEFAULT_VIEW_RECTANGLE = Ix[e(209)](x, n, a, s);
}
const x2 = be;
(function(t, e) {
  const x = be, n = t();
  for (; ; )
    try {
      if (parseInt(x(292)) / 1 + -parseInt(x(291)) / 2 * (-parseInt(x(287)) / 3) + -parseInt(x(283)) / 4 * (-parseInt(x(282)) / 5) + parseInt(x(281)) / 6 * (parseInt(x(278)) / 7) + -parseInt(x(293)) / 8 * (-parseInt(x(290)) / 9) + parseInt(x(289)) / 10 + -parseInt(x(276)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(me, 117592);
function be(t, e) {
  return t = t - 275, me()[t];
}
function me() {
  const t = ["21JohrLH", "SCENE2D", "854210BJumAS", "153lVkevY", "45096pXfdje", "17166bhrKLC", "82096bvGERL", "WGS84", "toDegrees", "latitude", "longitude", "zoomIn", "4417787DJZOwo", "fromDegrees", "1267nvUxjR", "setView", "mode", "1572wEwvSS", "36910etDsTw", "20CnmIzX", "positionCartographic", "removeEventListener", "changed"];
  return me = function() {
    return t;
  }, me();
}
function vo(t, e = L()) {
  return P0(() => {
    const x = be;
    q0(e)[x(286)].addEventListener(t);
  }), () => {
    const x = be;
    q0(e)[x(286)][x(285)](t);
  };
}
const Nn = kn(x2(284)), wo = Wr(Nn, "height");
function So(t, e) {
  const x = x2;
  lt(e)[x(280)] === d0[x(288)] && q0(e)[x(275)](t);
}
const Co = kn("position");
function On(t, e) {
  const x = x2, n = Fx[x(294)].maximumRadius * 10 / t, a = Nn(e), s = g0[x(295)](a[x(297)]), r = g0[x(295)](a[x(296)]);
  q0(e)[x(279)]({ destination: g[x(277)](s, r, n) });
}
var Kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ln = { exports: {} };
(function(t, e) {
  (function(x, n) {
    t.exports = n();
  })(Kr, function() {
    var x = 1e3, n = 6e4, a = 36e5, s = "millisecond", r = "second", i = "minute", o = "hour", u = "day", f = "week", l = "month", h = "quarter", c = "year", d = "date", p = "Invalid Date", E = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(w) {
      var b = ["th", "st", "nd", "rd"], _ = w % 100;
      return "[" + w + (b[(_ - 20) % 10] || b[_] || b[0]) + "]";
    } }, D = function(w, b, _) {
      var C = String(w);
      return !C || C.length >= b ? w : "" + Array(b + 1 - C.length).join(_) + w;
    }, O = { s: D, z: function(w) {
      var b = -w.utcOffset(), _ = Math.abs(b), C = Math.floor(_ / 60), m = _ % 60;
      return (b <= 0 ? "+" : "-") + D(C, 2, "0") + ":" + D(m, 2, "0");
    }, m: function w(b, _) {
      if (b.date() < _.date()) return -w(_, b);
      var C = 12 * (_.year() - b.year()) + (_.month() - b.month()), m = b.clone().add(C, l), k = _ - m < 0, N = b.clone().add(C + (k ? -1 : 1), l);
      return +(-(C + (_ - m) / (k ? m - N : N - m)) || 0);
    }, a: function(w) {
      return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
    }, p: function(w) {
      return { M: l, y: c, w: f, d: u, D: d, h: o, m: i, s: r, ms: s, Q: h }[w] || String(w || "").toLowerCase().replace(/s$/, "");
    }, u: function(w) {
      return w === void 0;
    } }, T = "en", M = {};
    M[T] = y;
    var A = "$isDayjsObject", Y = function(w) {
      return w instanceof j || !(!w || !w[A]);
    }, z = function w(b, _, C) {
      var m;
      if (!b) return T;
      if (typeof b == "string") {
        var k = b.toLowerCase();
        M[k] && (m = k), _ && (M[k] = _, m = k);
        var N = b.split("-");
        if (!m && N.length > 1) return w(N[0]);
      } else {
        var B = b.name;
        M[B] = b, m = B;
      }
      return !C && m && (T = m), m || !C && T;
    }, P = function(w, b) {
      if (Y(w)) return w.clone();
      var _ = typeof b == "object" ? b : {};
      return _.date = w, _.args = arguments, new j(_);
    }, v = O;
    v.l = z, v.i = Y, v.w = function(w, b) {
      return P(w, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var j = function() {
      function w(_) {
        this.$L = z(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[A] = !0;
      }
      var b = w.prototype;
      return b.parse = function(_) {
        this.$d = function(C) {
          var m = C.date, k = C.utc;
          if (m === null) return /* @__PURE__ */ new Date(NaN);
          if (v.u(m)) return /* @__PURE__ */ new Date();
          if (m instanceof Date) return new Date(m);
          if (typeof m == "string" && !/Z$/i.test(m)) {
            var N = m.match(E);
            if (N) {
              var B = N[2] - 1 || 0, K = (N[7] || "0").substring(0, 3);
              return k ? new Date(Date.UTC(N[1], B, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, K)) : new Date(N[1], B, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, K);
            }
          }
          return new Date(m);
        }(_), this.init();
      }, b.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, b.$utils = function() {
        return v;
      }, b.isValid = function() {
        return this.$d.toString() !== p;
      }, b.isSame = function(_, C) {
        var m = P(_);
        return this.startOf(C) <= m && m <= this.endOf(C);
      }, b.isAfter = function(_, C) {
        return P(_) < this.startOf(C);
      }, b.isBefore = function(_, C) {
        return this.endOf(C) < P(_);
      }, b.$g = function(_, C, m) {
        return v.u(_) ? this[C] : this.set(m, _);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(_, C) {
        var m = this, k = !!v.u(C) || C, N = v.p(_), B = function(j0, s0) {
          var O0 = v.w(m.$u ? Date.UTC(m.$y, s0, j0) : new Date(m.$y, s0, j0), m);
          return k ? O0 : O0.endOf(u);
        }, K = function(j0, s0) {
          return v.w(m.toDate()[j0].apply(m.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(s0)), m);
        }, x0 = this.$W, n0 = this.$M, u0 = this.$D, J0 = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case c:
            return k ? B(1, 0) : B(31, 11);
          case l:
            return k ? B(1, n0) : B(0, n0 + 1);
          case f:
            var Y0 = this.$locale().weekStart || 0, cx = (x0 < Y0 ? x0 + 7 : x0) - Y0;
            return B(k ? u0 - cx : u0 + (6 - cx), n0);
          case u:
          case d:
            return K(J0 + "Hours", 0);
          case o:
            return K(J0 + "Minutes", 1);
          case i:
            return K(J0 + "Seconds", 2);
          case r:
            return K(J0 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(_) {
        return this.startOf(_, !1);
      }, b.$set = function(_, C) {
        var m, k = v.p(_), N = "set" + (this.$u ? "UTC" : ""), B = (m = {}, m[u] = N + "Date", m[d] = N + "Date", m[l] = N + "Month", m[c] = N + "FullYear", m[o] = N + "Hours", m[i] = N + "Minutes", m[r] = N + "Seconds", m[s] = N + "Milliseconds", m)[k], K = k === u ? this.$D + (C - this.$W) : C;
        if (k === l || k === c) {
          var x0 = this.clone().set(d, 1);
          x0.$d[B](K), x0.init(), this.$d = x0.set(d, Math.min(this.$D, x0.daysInMonth())).$d;
        } else B && this.$d[B](K);
        return this.init(), this;
      }, b.set = function(_, C) {
        return this.clone().$set(_, C);
      }, b.get = function(_) {
        return this[v.p(_)]();
      }, b.add = function(_, C) {
        var m, k = this;
        _ = Number(_);
        var N = v.p(C), B = function(n0) {
          var u0 = P(k);
          return v.w(u0.date(u0.date() + Math.round(n0 * _)), k);
        };
        if (N === l) return this.set(l, this.$M + _);
        if (N === c) return this.set(c, this.$y + _);
        if (N === u) return B(1);
        if (N === f) return B(7);
        var K = (m = {}, m[i] = n, m[o] = a, m[r] = x, m)[N] || 1, x0 = this.$d.getTime() + _ * K;
        return v.w(x0, this);
      }, b.subtract = function(_, C) {
        return this.add(-1 * _, C);
      }, b.format = function(_) {
        var C = this, m = this.$locale();
        if (!this.isValid()) return m.invalidDate || p;
        var k = _ || "YYYY-MM-DDTHH:mm:ssZ", N = v.z(this), B = this.$H, K = this.$m, x0 = this.$M, n0 = m.weekdays, u0 = m.months, J0 = m.meridiem, Y0 = function(s0, O0, fx, Ox) {
          return s0 && (s0[O0] || s0(C, k)) || fx[O0].slice(0, Ox);
        }, cx = function(s0) {
          return v.s(B % 12 || 12, s0, "0");
        }, j0 = J0 || function(s0, O0, fx) {
          var Ox = s0 < 12 ? "AM" : "PM";
          return fx ? Ox.toLowerCase() : Ox;
        };
        return k.replace(S, function(s0, O0) {
          return O0 || function(fx) {
            switch (fx) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return v.s(C.$y, 4, "0");
              case "M":
                return x0 + 1;
              case "MM":
                return v.s(x0 + 1, 2, "0");
              case "MMM":
                return Y0(m.monthsShort, x0, u0, 3);
              case "MMMM":
                return Y0(u0, x0);
              case "D":
                return C.$D;
              case "DD":
                return v.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return Y0(m.weekdaysMin, C.$W, n0, 2);
              case "ddd":
                return Y0(m.weekdaysShort, C.$W, n0, 3);
              case "dddd":
                return n0[C.$W];
              case "H":
                return String(B);
              case "HH":
                return v.s(B, 2, "0");
              case "h":
                return cx(1);
              case "hh":
                return cx(2);
              case "a":
                return j0(B, K, !0);
              case "A":
                return j0(B, K, !1);
              case "m":
                return String(K);
              case "mm":
                return v.s(K, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return v.s(C.$s, 2, "0");
              case "SSS":
                return v.s(C.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(s0) || N.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(_, C, m) {
        var k, N = this, B = v.p(C), K = P(_), x0 = (K.utcOffset() - this.utcOffset()) * n, n0 = this - K, u0 = function() {
          return v.m(N, K);
        };
        switch (B) {
          case c:
            k = u0() / 12;
            break;
          case l:
            k = u0();
            break;
          case h:
            k = u0() / 3;
            break;
          case f:
            k = (n0 - x0) / 6048e5;
            break;
          case u:
            k = (n0 - x0) / 864e5;
            break;
          case o:
            k = n0 / a;
            break;
          case i:
            k = n0 / n;
            break;
          case r:
            k = n0 / x;
            break;
          default:
            k = n0;
        }
        return m ? k : v.a(k);
      }, b.daysInMonth = function() {
        return this.endOf(l).$D;
      }, b.$locale = function() {
        return M[this.$L];
      }, b.locale = function(_, C) {
        if (!_) return this.$L;
        var m = this.clone(), k = z(_, C, !0);
        return k && (m.$L = k), m;
      }, b.clone = function() {
        return v.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, w;
    }(), t0 = j.prototype;
    return P.prototype = t0, [["$ms", s], ["$s", r], ["$m", i], ["$H", o], ["$W", u], ["$M", l], ["$y", c], ["$D", d]].forEach(function(w) {
      t0[w[1]] = function(b) {
        return this.$g(b, w[0], w[1]);
      };
    }), P.extend = function(w, b) {
      return w.$i || (w(b, j, P), w.$i = !0), P;
    }, P.locale = z, P.isDayjs = Y, P.unix = function(w) {
      return P(1e3 * w);
    }, P.en = M[T], P.Ls = M, P.p = {}, P;
  });
})(Ln);
var xs = Ln.exports;
const Vn = /* @__PURE__ */ Qr(xs);
(function(t, e) {
  const x = Px, n = t();
  for (; ; )
    try {
      if (parseInt(x(284)) / 1 + -parseInt(x(303)) / 2 + parseInt(x(296)) / 3 * (-parseInt(x(286)) / 4) + parseInt(x(288)) / 5 + -parseInt(x(306)) / 6 + -parseInt(x(305)) / 7 + parseInt(x(308)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ie, 986761);
const { synchronizeConfig: ux } = Z0;
var es = ((t) => {
  const e = Px;
  return t[e(301)] = e(301), t.secondStep = e(299), t[e(302)] = e(302), t;
})(es || {});
const bx = /* @__PURE__ */ new Map();
function Eo(t, e = L()) {
  const x = Px;
  nextTick()[x(298)](() => {
    var a;
    const n = x;
    !bx[n(294)](e) && bx[n(297)](e, /* @__PURE__ */ new Set()), (a = bx[n(290)](e)) == null || a[n(292)](t);
  });
}
function ts(t = L()) {
  var x;
  const e = Px;
  (x = bx[e(290)](t)) == null || x.forEach((n) => n == null ? void 0 : n()), bx[e(300)](t);
}
function Px(t, e) {
  return t = t - 283, Ie()[t];
}
function Ie() {
  const t = ["11595072GNoiZq", "logicTime", "34165336TQOMvd", "length", "push", "1574886Mgejyb", "abs", "5860CyoRjj", "maxTime", "3548490nCmxYA", "valueOf", "get", "setInterval", "add", "interval", "has", "cacheSize", "3351JsXKqS", "set", "then", "secondStep", "delete", "firstStep", "thirdStep", "476186AVjnZM", "minSpeed", "12330360oUoWEr"];
  return Ie = function() {
    return t;
  }, Ie();
}
function Do(t = L()) {
  const e = Px;
  let x = e(301);
  const n = [], a = ux[e(304)], s = ux[e(287)];
  let r;
  const i = (c) => c.actualSpeed, o = () => {
    const c = e;
    if (n[c(309)] === 0) return a;
    let d = 1, p;
    if (n[c(309)] === 1) {
      p = n.slice()[0];
      const y = i(p);
      return lr(y) ? d : y / 2;
    }
    p = n.shift(), d = i(p);
    const E = ns()[c(289)]() - Vn(p.logicTime)[c(289)](), S = Math[c(285)](E / 1e3);
    return E > s * 1e3 ? (T2(p[c(307)], t), d = a, d) : E < -s * 1e3 ? (d += S, d) : (d <= 0 && (d = a), d);
  }, u = (c) => {
    n[e(283)](c);
  }, f = () => {
    const c = e;
    r = window[c(291)](() => {
      M2(o(), t);
    }, ux[c(293)]);
  }, l = { firstStep: (c) => {
    const d = e;
    ss(c[d(307)], t), T2(c[d(307)], t), fs(t), u(c), ts(t), x = d(299);
  }, [e(299)]: (c) => {
    const d = e;
    if (u(c), n.length > ux[d(295)]) {
      const p = n.splice(0, 1)[0];
      M2(i(p), t), ls(!0), clearInterval(r), f(), x = "thirdStep";
    }
  }, [e(302)]: (c) => {
    const d = e;
    u(c), !ds() && n[d(309)] > ux[d(295)] && n.shift();
  } };
  return Mx(() => {
    clearInterval(r);
  }, { viewerName: t }), { run: (c) => {
    l[x](c);
  } };
}
const F0 = pt;
(function(t, e) {
  const x = pt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(426)) / 1 + parseInt(x(425)) / 2 + -parseInt(x(420)) / 3 * (-parseInt(x(429)) / 4) + -parseInt(x(412)) / 5 + -parseInt(x(415)) / 6 + parseInt(x(416)) / 7 * (parseInt(x(419)) / 8) + parseInt(x(413)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ge, 762687);
function ge() {
  const t = ["1300670EtcUyI", "12639483YxXabU", "getTime", "8159208ABoZny", "3754261seNHsu", "fromDate", "clockViewModel", "8kSNSLC", "39HRggTx", "getObservable", "startTime", "string", "currentTime", "1210282hdztKY", "239173SbXRQo", "knockout", "9999/12/31 23:59:59", "23388fYCwDs", "stopTime", "toDate"];
  return ge = function() {
    return t;
  }, ge();
}
const ye = Nx("currentTime"), ns = e2(F0(424)), as = t2(F0(424));
function pt(t, e) {
  return t = t - 411, ge()[t];
}
const T2 = as, To = Nx(F0(422)), Mo = e2("startTime"), rs = t2(F0(422)), ss = rs, Po = Nx(F0(430)), Ao = e2(F0(430)), is = t2(F0(430)), os = is;
function cs() {
  return F0(428);
}
function fs(t) {
  os(cs(), t);
}
function e2(t) {
  return function(e) {
    return Vn(a0.toDate(kx(e)[t]));
  };
}
function t2(t) {
  return function(e, x) {
    const n = pt;
    let a;
    typeof e === n(423) || typeof e == "number" ? a = a0.fromDate(new Date(e)) : e instanceof Date ? a = a0[n(417)](e) : a = e, kx(x)[t] = a;
  };
}
function ko(t, e = L()) {
  P0((x) => {
    const n = pt;
    Cesium[n(427)][n(421)](x[n(418)], n(424)).subscribe((a) => {
      const s = n, r = a0[s(411)](a)[s(414)]();
      t == null || t(r, a);
    });
  }, { viewerName: e });
}
function ve() {
  const t = ["219322sfyPeY", "1820796jsxYOx", "8bGxMJu", "100386ZfAmxs", "multiplier", "635190pLGhLK", "257031pfvdLW", "shouldAnimate", "202583etUjpy", "4anUgbw", "clock", "2901178ZJYIXQ"];
  return ve = function() {
    return t;
  }, ve();
}
const Ax = Wn;
(function(t, e) {
  const x = Wn, n = t();
  for (; ; )
    try {
      if (parseInt(x(233)) / 1 + parseInt(x(237)) / 2 + parseInt(x(231)) / 3 * (-parseInt(x(234)) / 4) + -parseInt(x(230)) / 5 + -parseInt(x(238)) / 6 + -parseInt(x(236)) / 7 * (-parseInt(x(239)) / 8) + parseInt(x(240)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ve, 221671);
function Wn(t, e) {
  return t = t - 229, ve()[t];
}
const kx = Tx(Ax(235)), M2 = zn(Ax(229)), us = Nx(Ax(229)), No = us, ls = zn(Ax(232)), ds = Nx(Ax(232));
function Nx(t) {
  return function(e) {
    return kx(e)[t];
  };
}
function zn(t, e) {
  return function(x, n) {
    kx(n)[t] = x ?? e;
  };
}
(function(t, e) {
  const x = R0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(444)) / 1 * (parseInt(x(437)) / 2) + -parseInt(x(440)) / 3 * (-parseInt(x(432)) / 4) + -parseInt(x(434)) / 5 + parseInt(x(435)) / 6 * (parseInt(x(441)) / 7) + -parseInt(x(430)) / 8 + parseInt(x(442)) / 9 * (-parseInt(x(427)) / 10) + parseInt(x(431)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(we, 739762);
function we() {
  const t = ["1371rjeuiE", "9814686PiksAs", "9IZlVla", "add", "322676pgwEnq", "entities", "8284700NlTYWo", "properties", "getById", "607344sQzUDE", "14768501yHpBnO", "6932givIiu", "metaData", "4622460TiBJJc", "6yHkSHR", "error", "6jwXKLv", "sourceName is Required", "position"];
  return we = function() {
    return t;
  }, we();
}
function Oo(t, e) {
  return Dt(e) ? P0((x) => {
    const n = R0;
    return x[n(426)][n(443)](t);
  }, { viewerName: L(e) }) : P0(() => e[R0(443)](t));
}
function ps(t) {
  return t instanceof kt;
}
function hs(t) {
  return t instanceof K2;
}
function Lo(t, e) {
  const x = R0;
  if (!e) return console[x(436)](x(438)), void 0;
  if (ps(e) || hs(e)) return e[x(426)].getById(t);
  const n = y0(e);
  if (n) return n[x(426)][x(429)](t);
}
function _s(t, e) {
  var n;
  return (n = t[R0(428)]) == null ? void 0 : n.getValue(ye(e));
}
function bs(t, e, x) {
  var n;
  return (n = _s(t, x)) == null ? void 0 : n[e];
}
function Vo(t, e) {
  return bs(t, R0(433), e);
}
function R0(t, e) {
  return t = t - 426, we()[t];
}
function Rn(t) {
  return t[R0(439)];
}
function ms(t) {
  return Rn(t);
}
function Wo(t) {
  return Rn(t);
}
function zo(t, e) {
  const x = R0;
  t[x(439)] = e;
}
(function(t, e) {
  for (var x = Gn, n = t(); ; )
    try {
      var a = parseInt(x(373)) / 1 + -parseInt(x(370)) / 2 + parseInt(x(368)) / 3 + parseInt(x(372)) / 4 + -parseInt(x(367)) / 5 + -parseInt(x(369)) / 6 + parseInt(x(366)) / 7;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Se, 502624);
function Gn(t, e) {
  t = t - 366;
  var x = Se(), n = x[t];
  return n;
}
function Se() {
  var t = ["2228564xzLfoZ", "273892trLiKw", "9205623kbnxJc", "2506915fvgrTp", "1488786QsguMZ", "4370814tARuln", "1819816cNxvvn", "log"];
  return Se = function() {
    return t;
  }, Se();
}
function Ro() {
  var t = Gn;
  console[t(371)](V0, rx);
}
const Wx = Fn;
(function(t, e) {
  const x = Fn, n = t();
  for (; ; )
    try {
      if (parseInt(x(368)) / 1 + parseInt(x(354)) / 2 * (-parseInt(x(374)) / 3) + -parseInt(x(359)) / 4 + -parseInt(x(367)) / 5 * (parseInt(x(363)) / 6) + -parseInt(x(357)) / 7 * (-parseInt(x(364)) / 8) + parseInt(x(365)) / 9 + -parseInt(x(371)) / 10 * (parseInt(x(375)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ce, 577020);
function Ce() {
  const t = ["3404030OkhUyi", "CViewer", "eventList", "1077555IYaYfv", "11NqlvfW", "forEach", "defaultImageryUrl", "2MZsKIe", "div", "value", "35BkAqnv", "defaultCamera", "3380824ZPhmZl", "viewer-created", "CViewerVue", "c-viewer", "707514jIbcGM", "1559072BKuhhI", "7470342Bjrjbi", "name", "35BVeuqp", "1142789wKWRFy", "url", "default"];
  return Ce = function() {
    return t;
  }, Ce();
}
function Fn(t, e) {
  return t = t - 354, Ce()[t];
}
const Is = ["id"], gs = v0({ name: Wx(372), __name: Wx(361), props: { name: { type: String, default: "cesium-box" }, eventList: { type: Array, default: () => [] }, defaultViewerConfig: { type: Object, default: () => {
} }, defaultCamera: { type: Object, default: () => ({ west: 90, south: 10, east: 120, north: 40 }) } }, emits: [Wx(360)], setup(t, { emit: e }) {
  const x = Wx, n = e, a = t;
  a[x(358)] && Jr(a[x(358)]);
  const s = nn();
  return ja(a[x(366)], s), Ba(() => {
    var u, f;
    const r = x, i = {};
    (u = Z0[r(377)]) != null && u[r(369)] && (i.baseLayer = new Oa(new La(Z0.defaultImageryUrl)));
    const o = wr(L(a[r(366)]), { ...i, ...a.defaultViewerConfig });
    s[r(356)] = o, Xr(o), (f = a[r(373)]) == null || f[r(376)]((l) => l(o)), n(r(360));
  }), ct(() => {
    const r = x;
    s[r(356)] = null, Cr(a[r(366)]);
  }), (r, i) => {
    const o = x;
    return T0(), ax(o(355), { id: t[o(366)], class: o(362) }, [Ct(r.$slots, o(370))], 8, Is);
  };
} }), n2 = (t, e) => {
  const x = t.__vccOpts || t;
  for (const [n, a] of e)
    x[n] = a;
  return x;
}, Yn = /* @__PURE__ */ n2(gs, [["__scopeId", "data-v-779118e2"]]), P2 = jn;
(function(t, e) {
  const x = jn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(128)) / 1 * (parseInt(x(131)) / 2) + parseInt(x(124)) / 3 + -parseInt(x(132)) / 4 * (parseInt(x(126)) / 5) + parseInt(x(125)) / 6 * (parseInt(x(134)) / 7) + parseInt(x(123)) / 8 * (parseInt(x(130)) / 9) + parseInt(x(127)) / 10 + -parseInt(x(133)) / 11 * (parseInt(x(137)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ee, 192229);
function Ee() {
  const t = ["375823AuAOUs", "CViewer", "component", "3948jccyMj", "1096GzGCwq", "598080SRwsRr", "18wTgYvV", "10ZhoDVj", "1650830qpvqJs", "171403AIihee", "install", "14373MUoqAZ", "2RGWOYk", "500108quirdz", "4367GYCAFk"];
  return Ee = function() {
    return t;
  }, Ee();
}
function jn(t, e) {
  return t = t - 123, Ee()[t];
}
const Bn = Yn;
Bn[P2(129)] = function(t) {
  const e = P2;
  t[e(136)](e(135), Yn);
};
const ys = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vs = Object.prototype.toString, ws = (t) => vs.call(t) === "[object Object]";
function bt(t) {
  return Array.isArray(t) ? t : [t];
}
function Ss(t, e, x) {
  return Et(t, e, {
    ...x,
    immediate: !0
  });
}
const Cs = ys ? window : void 0;
function Es(t) {
  var e;
  const x = dx(t);
  return (e = x == null ? void 0 : x.$el) !== null && e !== void 0 ? e : x;
}
function Ds(...t) {
  const e = (n, a, s, r) => (n.addEventListener(a, s, r), () => n.removeEventListener(a, s, r)), x = Ot(() => {
    const n = bt(dx(t[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return Ss(() => {
    var n, a;
    return [
      (n = (a = x.value) === null || a === void 0 ? void 0 : a.map((s) => Es(s))) !== null && n !== void 0 ? n : [Cs].filter((s) => s != null),
      bt(dx(x.value ? t[1] : t[0])),
      bt(Lt(x.value ? t[2] : t[1])),
      dx(x.value ? t[3] : t[2])
    ];
  }, ([n, a, s, r], i, o) => {
    if (!(n != null && n.length) || !(a != null && a.length) || !(s != null && s.length)) return;
    const u = ws(r) ? { ...r } : r, f = n.flatMap((l) => a.flatMap((h) => s.map((c) => e(l, h, c, u))));
    o(() => {
      f.forEach((l) => l());
    });
  }, { flush: "post" });
}
const mt = Un;
(function(t, e) {
  const x = Un, n = t();
  for (; ; )
    try {
      if (parseInt(x(260)) / 1 + -parseInt(x(265)) / 2 * (parseInt(x(256)) / 3) + -parseInt(x(255)) / 4 + -parseInt(x(263)) / 5 * (-parseInt(x(274)) / 6) + -parseInt(x(267)) / 7 + -parseInt(x(270)) / 8 + parseInt(x(262)) / 9 * (parseInt(x(269)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(De, 586156);
function Un(t, e) {
  return t = t - 254, De()[t];
}
function De() {
  const t = ["9sozzuV", "561235otVnWl", "ratio", "2057032mlzKWU", "n-dropdown", "2445520SZJWbY", "documentElement", "23075330SgcGxl", "6693008tSqiHD", "1:100万", "map", "1:25万", "18ZNsbut", "1:5万", "click", "DistanceSelect", "select", "update:show", "175232hVqwIy", "3PxgpwQ", "show", "options", "1:50万", "200192lGgfJG", "label"];
  return De = function() {
    return t;
  }, De();
}
const Ts = v0({ name: mt(277), __name: "distance-select", props: { show: { type: Boolean, default: !1 }, x: { type: Number, default: 0 }, y: { type: Number, default: 0 } }, emits: ["update:show", mt(278)], setup(t, { emit: e }) {
  const x = mt, n = e, a = [{ ratio: 1, label: "1:1400万", height: 46248.83085151955 }, { ratio: 4, label: x(271), height: 109404.75765483479 }, { ratio: 5, label: x(259) }, { ratio: 13.5, label: x(273) }, { ratio: 60, label: x(275) }, { ratio: 200, label: "1:1万" }], s = (u) => {
    n(x(278), u);
  }, r = a[x(272)]((u) => {
    const f = x;
    return { key: u.ratio, label: u[f(261)], props: { onClick: () => s(u[f(264)]) } };
  }), i = () => {
    n(x(254), !1);
  }, o = Ds(document[x(268)], x(276), i);
  return ct(() => {
    o();
  }), (u, f) => {
    const l = x, h = Vt(l(266));
    return T0(), Wt(h, { options: Lt(r), show: t[l(257)], x: t.x, y: t.y }, null, 8, [l(258), l(257), "x", "y"]);
  };
} }), Te = mx;
function Me() {
  const t = ["showCompass", "56247adOMbL", "703316UpNogN", "component", "enableDistanceLegend", "navigationViewModel", "width", "getBoundingClientRect", "1718330sSPQfM", "addEventListener", "show", "install", ".distance-legend", "value", "error", "1Himpie", "mouseenter", "请先开启navigation 功能", "undefined", "24zuwYIL", "1335330Gwdiey", "distanceLegendViewModel", "890032JVCvQF", "CNavigation", "8604owPoZV", "1673GxnKoB", "querySelector", "viewerName", "5289510JADSja"];
  return Me = function() {
    return t;
  }, Me();
}
(function(t, e) {
  const x = mx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(130)) / 1 * (parseInt(x(117)) / 2) + parseInt(x(116)) / 3 * (parseInt(x(134)) / 4) + -parseInt(x(123)) / 5 + -parseInt(x(139)) / 6 * (-parseInt(x(140)) / 7) + parseInt(x(137)) / 8 + -parseInt(x(135)) / 9 + parseInt(x(114)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Me, 251731);
const $n = v0({ name: Te(138), props: { duration: { type: Number, default: 3 }, enableCompass: { type: Boolean, default: !0 }, enableZoomControls: { type: Boolean, default: !0 }, enableDistanceLegend: { type: Boolean, default: !1 }, enableCompassOuterRing: { type: Boolean, default: !0 }, resetTooltip: { type: String, default: "重置" }, zoomInTooltip: { type: String, default: "放大" }, zoomOutTooltip: { type: String, default: "缩小" }, viewerName: { type: String, default: void 0 }, defaultResetView: { type: Object, default: void 0 }, orientation: { type: Object, default: void 0 } }, setup(t) {
  const e = Te, x = nn(), n = (r) => {
    const i = mx, o = x[i(128)];
    if (!o) {
      console.warn("请先开启navigation 功能");
      return;
    }
    o[i(120)][i(115)] = r;
  };
  Et(() => t.enableCompass, (r) => {
    n(r);
  });
  const a = (r) => {
    const i = mx, o = x[i(128)];
    if (!o) {
      console[i(129)](i(132));
      return;
    }
    o[i(136)][i(119)] = r;
  }, s = Ua({ show: !1, x: 0, y: 0 });
  return Et(() => t.enableDistanceLegend, (r) => {
    a(r);
  }), an().then(() => {
    const r = mx;
    if (typeof document === r(133)) return;
    const i = F(t[r(142)]);
    x[r(128)] = new er(i, t);
    const o = document[r(141)](r(127));
    if (!o) return;
    const u = () => {
      const f = r, l = o[f(122)]();
      s.x = l.x + l[f(121)] / 2, s.y = l.y, s[f(125)] = !0;
    };
    o[r(124)](r(131), u);
  }), () => $a(Ts, { show: s.show, x: s.x, y: s.y, "onUpdate:show": (r) => s[e(125)] = r, onSelect: (r) => {
    s.show = !1, On(r);
  } });
} }), Hn = $n;
function mx(t, e) {
  return t = t - 114, Me()[t];
}
Hn[Te(126)] = function(t) {
  const e = Te;
  t[e(118)](e(138), $n);
};
const a2 = Zn;
(function(t, e) {
  const x = Zn, n = t();
  for (; ; )
    try {
      if (parseInt(x(132)) / 1 * (parseInt(x(118)) / 2) + -parseInt(x(120)) / 3 * (-parseInt(x(130)) / 4) + parseInt(x(103)) / 5 + parseInt(x(128)) / 6 + -parseInt(x(107)) / 7 + -parseInt(x(104)) / 8 * (-parseInt(x(133)) / 9) + -parseInt(x(105)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Pe, 559905);
function Zn(t, e) {
  return t = t - 102, Pe()[t];
}
const Ms = { class: "c-breastplate-header" }, Ps = { class: a2(115) };
function Pe() {
  const t = ["--top-pos", "4551515gobVWW", "54968fSnZjM", "17104800elAkvw", "div", "684194SxPuKp", "getValue", "c-breastplate-close", "span", "getById", "viewerName", "--left-pos", "CBreastplate", "c-breastplate-content", "close", "entities", "4nAyiTP", "reverse", "53391lcqluL", "default", "data", "style", "$slots", "header", "c-breastplate", "position", "1287540SogUnZ", "value", "52hoJfuA", "equals", "378823PUAZjy", "333MdwUwX", "setProperty"];
  return Pe = function() {
    return t;
  }, Pe();
}
const As = v0({ name: a2(114) }), ks = v0({ ...As, props: { data: { type: Object, default: null }, viewerName: { type: String, default: void 0 } }, emits: ["close"], setup(t, { emit: e }) {
  const x = a2;
  Ha((l) => ({ v13e31c5c: i[x(129)] }));
  const n = e, a = t, s = () => {
    n(x(116));
  }, r = yx({ label: "⅀", level: 1400 });
  ["⅀", "⅀", "⅀", "⅀", "⅀"][x(119)]().map((l, h) => ({ label: l, key: l, props: { onClick() {
    r.value = { label: l, level: 1e3 + 100 * h };
  } } }));
  const i = Ot(() => r.value.level), o = yx();
  let u;
  const f = Cn((l, h) => {
    var D, O;
    const c = x;
    if (!a[c(122)]) return;
    const { source: d, id: p } = a[c(122)], E = y0(d, a[c(112)]), S = E == null ? void 0 : E[c(117)][c(111)](p);
    if (!(S != null && S[c(127)])) {
      s();
      return;
    }
    const y = l.cartesianToCanvasCoordinates(S[c(127)][c(108)](h));
    u && $[c(131)](u, y) || (u = y, u != null && u.x && ((D = o[c(129)]) == null || D[c(123)].setProperty(c(113), u.x + "px")), u != null && u.y && ((O = o[c(129)]) == null || O[c(123)][c(134)](c(102), u.y + "px")));
  }, { viewerName: a[x(112)] });
  return Za(() => {
    f == null || f();
  }), (l, h) => {
    const c = x;
    return t[c(122)] ? (T0(), ax(c(106), { key: 0, ref_key: "breastplateRef", ref: o, class: c(126) }, [E0(c(106), Ms, [Ct(l.$slots, c(125), {}, () => [E0(c(110), null, zt(t[c(122)].name), 1), E0(c(110), null, [E0(c(110), { class: c(109), onClick: s }, "✕")])], !0)]), E0(c(106), Ps, [Ct(l[c(124)], c(121), {}, void 0, !0)])], 512)) : qa("", !0);
  };
} }), qn = /* @__PURE__ */ n2(ks, [["__scopeId", "data-v-9f038021"]]), A2 = Xn;
(function(t, e) {
  const x = Xn, n = t();
  for (; ; )
    try {
      if (parseInt(x(141)) / 1 * (-parseInt(x(144)) / 2) + -parseInt(x(134)) / 3 * (-parseInt(x(136)) / 4) + parseInt(x(131)) / 5 * (parseInt(x(145)) / 6) + parseInt(x(139)) / 7 * (parseInt(x(132)) / 8) + -parseInt(x(133)) / 9 + -parseInt(x(138)) / 10 + parseInt(x(143)) / 11 * (parseInt(x(137)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ae, 349249);
function Ae() {
  const t = ["5lZrQuo", "2168soNWcb", "2502711ehcgZU", "1257Ocyvjn", "component", "3256TPVWoz", "60BgJnzh", "4675320SDjyyq", "8813MUcvWo", "CBreastplate", "42344HVHApK", "install", "686928IXXFxe", "20omFLOv", "3142830dWKaEv"];
  return Ae = function() {
    return t;
  }, Ae();
}
function Xn(t, e) {
  return t = t - 131, Ae()[t];
}
const Jn = qn;
Jn[A2(142)] = function(t) {
  const e = A2;
  t[e(135)](e(140), qn);
};
const k2 = Ne;
(function(t, e) {
  const x = Ne, n = t();
  for (; ; )
    try {
      if (parseInt(x(139)) / 1 + -parseInt(x(145)) / 2 * (parseInt(x(129)) / 3) + -parseInt(x(147)) / 4 + -parseInt(x(142)) / 5 * (parseInt(x(133)) / 6) + -parseInt(x(137)) / 7 * (-parseInt(x(146)) / 8) + parseInt(x(134)) / 9 + parseInt(x(132)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ke, 771184);
function ke() {
  const t = ["position", "prevent", "12201760KIwmIi", "5648970YtTTku", "13605165miHGVo", "n-dropdown", "forEach", "7AyVJlc", "getBoundingClientRect", "1038452uJwYYQ", "bottom-start", "show", "5rADxMF", "value", "viewerName", "226imAFFp", "5053416SxjKZs", "6166732pFFkAc", "manual", "c-cesium-rightmenu", "CRightMenu2", "options", "30468RlfFxs"];
  return ke = function() {
    return t;
  }, ke();
}
function Ne(t, e) {
  return t = t - 125, ke()[t];
}
const Kn = v0({ name: k2(127), __name: "right-menu", props: { viewerName: { default: void 0 } }, setup(t) {
  const e = k2, x = t, n = Ys(), { executeFilter: a } = n, { eventList: s, rightClickEvent: r, menuOptions: i, cachePosition: o, posOffset: u, isShow: f } = tr(n), l = Ot(() => {
    const S = Ne;
    return f.value && i.value.some((y) => {
      var D;
      return (D = y == null ? void 0 : y.isShow) == null ? void 0 : D.call(y, { data: y, position: o[S(143)] });
    });
  }), h = yx(0), c = yx(0), d = qt(async (S) => {
    const y = Ne;
    f[y(143)] = !1;
    const D = S[y(130)][y(130)], O = dx(u);
    a(D);
    const T = Dr(x[y(144)]), M = T[y(138)]();
    h[y(143)] = D.x + M.x - O.x, c.value = D.y + M.y - O.y, r[y(143)][y(136)]((A) => A({ position: D })), await an(), f[y(143)] = !0;
  }, { viewerName: x[e(144)] }), p = X0(() => {
    const S = e;
    f[S(143)] = !1;
  }, { viewerName: x[e(144)] }), E = (S, y) => {
    var O, T;
    (T = (O = s[e(143)])[S]) == null || T.call(O, { ...y, position: o }), f.value = !1;
  };
  return ct(() => {
    d(), p();
  }), (S, y) => {
    const D = e, O = Vt(D(135));
    return T0(), Wt(O, { class: D(126), placement: D(140), trigger: D(125), show: l[D(143)], options: Lt(i), x: h.value, y: c.value, onContextmenu: y[0] || (y[0] = Xa(() => {
    }, [D(131)])), onSelect: E }, null, 8, [D(141), D(128), "x", "y"]);
  };
} }), N2 = Qn;
(function(t, e) {
  const x = Qn, n = t();
  for (; ; )
    try {
      if (parseInt(x(285)) / 1 + -parseInt(x(294)) / 2 * (-parseInt(x(289)) / 3) + parseInt(x(295)) / 4 + parseInt(x(292)) / 5 * (-parseInt(x(296)) / 6) + parseInt(x(286)) / 7 + parseInt(x(293)) / 8 * (-parseInt(x(288)) / 9) + -parseInt(x(284)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Oe, 411028);
function Qn(t, e) {
  return t = t - 284, Oe()[t];
}
const xa = Kn;
function Oe() {
  const t = ["225BjmcbF", "CRightMenu", "install", "1489445EgpAmh", "9808pZbNwg", "21650QTpvoL", "2980068vpwGVI", "12ahqhDt", "3267750Parmhg", "259058yFaIYx", "983073iQClwc", "component", "4572vDejnH"];
  return Oe = function() {
    return t;
  }, Oe();
}
xa[N2(291)] = function(t) {
  const e = N2;
  t[e(287)](e(290), Kn);
};
const Le = tx;
(function(t, e) {
  const x = tx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(129)) / 1 + parseInt(x(159)) / 2 * (-parseInt(x(152)) / 3) + -parseInt(x(149)) / 4 * (-parseInt(x(151)) / 5) + -parseInt(x(125)) / 6 + parseInt(x(158)) / 7 + -parseInt(x(140)) / 8 + parseInt(x(155)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ve, 119936);
const Ns = { class: "c-scale" }, Os = { class: Le(141) };
function tx(t, e) {
  return t = t - 124, Ve()[t];
}
function Ve() {
  const t = ["value", "div", "pick", "cartesianToCartographic", "preUpdate", "getPickRay", "20yakSvt", "ellipsoid", "5620Vjcrbb", "41577ARNGYU", "push", "barWidth", "5093055GVqrvz", "setEndPoints", "c-scale__bar", "518385TIPTiq", "30klrYqp", "postUpdate", " km", "603126jbNNkb", "canvas", "camera", "scene", "69582sapOol", "CScale", "change", "addEventListener", "changed", "clientWidth", "length", "globe", "updateType", "surfaceDistance", "label", "1181168jrdzSN", "c-scale__label", "viewerName"];
  return Ve = function() {
    return t;
  }, Ve();
}
const Ls = v0({ name: Le(130) }), Vs = v0({ ...Ls, props: { viewerName: { type: String, default: L() }, count: { type: Number, default: 3 }, updateType: { type: String, default: Le(131) } }, setup(t) {
  const e = Le, x = t, n = [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 3e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 2e7, 3e7, 5e7], a = yx([]), s = new At(), r = (u) => {
    const f = tx, l = u[f(126)][f(134)], h = u[f(126)].clientHeight, c = u[f(127)][f(148)](new $(l / 2 | 0, h - 1)), d = u[f(127)][f(148)](new $(1 + l / 2 | 0, h - 1)), p = u[f(136)], E = p[f(145)](c, u), S = p[f(145)](d, u);
    if (!W(E) || !W(S)) {
      a[f(143)] = [];
      return;
    }
    const y = p[f(150)][f(146)](E), D = p[f(150)][f(146)](S);
    s[f(156)](y, D);
    const O = s[f(138)], T = 100;
    let M;
    for (let A = n[f(135)] - 1; !W(M) && A >= 0; --A)
      if (n[A] / O < T) {
        M = n[A];
        break;
      }
    if (!W(M)) {
      a[f(143)] = [];
      return;
    }
    i(M, O);
  }, i = (u, f) => {
    const l = tx;
    let h = u, c = " m";
    u >= 1e3 && (h = u / 1e3, c = l(124));
    const d = [];
    for (let p = 1; p <= x.count; p++)
      d[l(153)]({ label: h * p + c, barWidth: u / f | 0 });
    a[l(143)] = d;
  };
  let o;
  return P0((u) => {
    const f = tx, l = () => {
      const h = tx;
      r(u.scene), a.value.length ? u.scene[h(160)].removeEventListener(l) : u[h(128)].requestRender();
    };
    if (u[f(128)].postUpdate[f(132)](l), x[f(137)] === "change") {
      o = u.camera[f(133)][f(132)](() => r(u[f(128)]));
      return;
    }
    o = u.scene[f(147)][f(132)](r);
  }, { viewerName: x[e(142)] }), ct(() => {
    o == null || o();
  }), (u, f) => {
    const l = e;
    return Ja((T0(), ax(l(144), Ns, [(T0(!0), ax(rn, null, sn(a[l(143)], (h) => {
      const c = l;
      return T0(), ax(c(144), { key: h[c(139)] }, [E0(c(144), Os, zt(h[c(139)]), 1), E0("div", { class: c(157), style: Ka({ width: h[c(154)] + "px" }) }, null, 4)]);
    }), 128))], 512)), [[Qa, !!a[l(143)][l(135)]]]);
  };
} }), r2 = /* @__PURE__ */ n2(Vs, [["__scopeId", "data-v-951c64fb"]]);
function s2(t, e) {
  return t = t - 221, We()[t];
}
function We() {
  const t = ["1:50万", "1:1万", "$attrs", "1205397JOkLNo", "1:25万", "popover", "label", "7358218bgqXyo", "1:1400万", "div", "73048YXCvHA", "7322661bOFEyf", "23322500VcUaGv", "832914bRRSjG", "ScaleWithSelect", "ratio", "2MkbkNy", "data", "20YcVWXR", "log", "1240655JQgYBg", "30syJjDQ", "el-popover"];
  return We = function() {
    return t;
  }, We();
}
const ea = s2;
(function(t, e) {
  const x = s2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(242)) / 1 * (parseInt(x(232)) / 2) + parseInt(x(229)) / 3 * (-parseInt(x(234)) / 4) + parseInt(x(236)) / 5 * (parseInt(x(237)) / 6) + -parseInt(x(223)) / 7 + -parseInt(x(226)) / 8 + parseInt(x(227)) / 9 + parseInt(x(228)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(We, 732642);
const Ws = ["onClick"], zs = v0({ name: ea(230) }), ta = v0({ ...zs, setup(t) {
  const e = ea, x = (a) => {
    const s = s2;
    On(a.ratio), console[s(235)](s(233), a);
  }, n = [{ ratio: 1, label: e(224) }, { ratio: 4, label: "1:100万" }, { ratio: 5, label: e(239) }, { ratio: 13.5, label: e(243) }, { ratio: 60, label: "1:5万" }, { ratio: 200, label: e(240) }];
  return (a, s) => {
    const r = e, i = Vt(r(238));
    return T0(), Wt(i, m2(I2(a[r(241)][r(221)])), { reference: g2(() => [xr(r2, m2(I2(a[r(241)])), null, 16)]), default: g2(() => [E0(r(225), null, [(T0(), ax(rn, null, sn(n, (o) => {
      const u = r;
      return E0(u(225), { key: o[u(231)], onClick: (f) => x(o) }, zt(o[u(222)]), 9, Ws);
    }), 64))])]), _: 1 }, 16);
  };
} }), ze = na;
(function(t, e) {
  const x = na, n = t();
  for (; ; )
    try {
      if (parseInt(x(310)) / 1 * (parseInt(x(314)) / 2) + parseInt(x(308)) / 3 * (-parseInt(x(307)) / 4) + -parseInt(x(311)) / 5 + parseInt(x(304)) / 6 * (-parseInt(x(318)) / 7) + -parseInt(x(309)) / 8 + -parseInt(x(316)) / 9 + parseInt(x(315)) / 10 * (parseInt(x(306)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Re, 308557);
function na(t, e) {
  return t = t - 304, Re()[t];
}
function Re() {
  const t = ["3366430EIaLpO", "366534YwRvNV", "install", "518mbvhOI", "40488EuWtVK", "component", "55PcUkMo", "1940jFAgGf", "105JLOCxP", "4156672NJsbOm", "3uPksow", "1719935fsPwhx", "CScale", "CScaleSelect", "30644LcfTmc"];
  return Re = function() {
    return t;
  }, Re();
}
const aa = r2;
aa[ze(317)] = function(t) {
  const e = ze;
  t[e(305)](e(312), r2);
};
const ra = ta;
ra[ze(317)] = function(t) {
  const e = ze;
  t[e(305)](e(313), ta);
};
const i0 = i2;
(function(t, e) {
  const x = i2, n = t();
  for (; ; )
    try {
      if (parseInt(x(197)) / 1 + parseInt(x(213)) / 2 * (-parseInt(x(193)) / 3) + parseInt(x(207)) / 4 * (-parseInt(x(203)) / 5) + parseInt(x(210)) / 6 * (-parseInt(x(195)) / 7) + parseInt(x(192)) / 8 * (parseInt(x(206)) / 9) + parseInt(x(204)) / 10 * (parseInt(x(212)) / 11) + parseInt(x(211)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ge, 572323);
function Ge() {
  const t = ["11SZymwm", "6XaUezU", "rotationMatrixFromPositionVelocity", "position", "fromRotationMatrix", "21128gcRQAV", "574239YqiFaI", "getValue", "7EnWIfj", "ellipsoid", "1065749kkFJeN", "_forwardExtrapolationType", "raiseEvent", "forwardExtrapolationType", "isConstant", "_velocityVectorProperty", "20215pEetJx", "5977350LgZueD", "HOLD", "1269wJMjPq", "556uxcWOY", "definitionChanged", "_ellipsoid", "6742968OSOqIy", "9558024tkrSoU"];
  return Ge = function() {
    return t;
  }, Ge();
}
new g();
const O2 = new g(), L2 = new za();
function i2(t, e) {
  return t = t - 189, Ge()[t];
}
class Go {
  constructor(e, x = Fx.WGS84) {
    const n = i2;
    this._velocityVectorProperty = new Va(e, !0), this.definitionChanged = new Sx(), this._forwardExtrapolationType = St[n(205)], this[n(202)].forwardExtrapolationType = this[n(198)], this[n(209)] = x, this[n(202)].definitionChanged.addEventListener(() => {
      const a = n;
      this[a(208)][a(199)](this);
    });
  }
  get [i0(201)]() {
    return this[i0(202)].isConstant;
  }
  get [i0(190)]() {
    return this[i0(202)].position;
  }
  set [i0(190)](e) {
    const x = i0;
    this[x(202)].position = e;
  }
  get [i0(196)]() {
    return this[i0(209)];
  }
  set ellipsoid(e) {
    const x = i0;
    this[x(209)] !== e && (this[x(209)] = e, this[x(208)][x(199)](this));
  }
  get forwardExtrapolationType() {
    return this[i0(198)];
  }
  set [i0(200)](e) {
    const x = i0;
    this[x(198)] = e, this._velocityVectorProperty[x(200)] = this[x(198)];
  }
  [i0(194)](e, x) {
    const n = i0, a = this._velocityVectorProperty[n(194)](e, O2);
    if (W(a))
      return Wa[n(189)](O2, a, this[n(209)], L2), Ra[n(191)](L2, x);
  }
}
const Z = o2;
function Fe() {
  const t = ["10595910BgdLpj", "INERTIAL", "_normalize", "divideByScalar", "3483758BkWEnu", "addEventListener", "25115lJTvlD", "_forwardExtrapolationType", "3BaGgVX", "1402881slOGJj", "getInertialValue", "warn", "32967690WbCnnV", "definitionChanged", "referenceFrame", "HOLD", "clone", "_subscription", "isConstant", "7648LoRPSX", "_currentVelocity", "getValue", "time is required", "raiseEvent", "forwardExtrapolationType", "_getValueFixed", "addSeconds", "632nBvFZS", "11142Pjrcjg", "_position", "_getValueInertial", "subscription", "position", "getOrbitFixedValue", "equals", "normalize", "_definitionChanged", "ZERO", "subtract", "_currentCartesian", "7666176ZxvSdf"];
  return Fe = function() {
    return t;
  }, Fe();
}
(function(t, e) {
  const x = o2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(230)) / 1 + -parseInt(x(225)) / 2 * (-parseInt(x(229)) / 3) + parseInt(x(248)) / 4 * (-parseInt(x(227)) / 5) + -parseInt(x(262)) / 6 + parseInt(x(261)) / 7 + parseInt(x(240)) / 8 * (-parseInt(x(249)) / 9) + parseInt(x(233)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fe, 987788);
const Rs = new g(), V2 = new g(), W2 = new a0();
new g();
new g();
new g();
const Gs = new a0(), B0 = 1 / 60;
function o2(t, e) {
  return t = t - 222, Fe()[t];
}
class sa {
  constructor(e, x = !0) {
    const n = o2;
    this._position = e, this[n(238)] = void 0, this[n(257)] = new Sx(), this[n(223)] = x, this[n(260)] = void 0, this[n(241)] = void 0, this[n(228)] = St.HOLD;
  }
  get [Z(252)]() {
    return this._subscription;
  }
  set [Z(252)](e) {
    const x = Z;
    this[x(238)] = e;
  }
  get [Z(234)]() {
    return this[Z(257)];
  }
  get [Z(253)]() {
    return this[Z(250)];
  }
  set [Z(253)](e) {
    var a;
    const x = Z, n = this[x(250)];
    n !== e && (W(n) && ((a = this._subscription) == null || a.call(this)), this[x(250)] = e, W(e) && (this[x(238)] = e == null ? void 0 : e[x(234)][x(226)](() => {
      const s = x;
      this[s(257)][s(244)](this);
    }, this)), this[x(257)][x(244)](this));
  }
  set [Z(256)](e) {
    const x = Z;
    this._normalize !== e && (this[x(223)] = e, this[x(257)][x(244)](this));
  }
  get [Z(256)]() {
    return this[Z(223)];
  }
  get forwardExtrapolationType() {
    return this[Z(228)];
  }
  set [Z(245)](e) {
    const x = Z;
    this[x(228)] = e;
  }
  [Z(242)](e, x, n) {
    const a = Z, s = this[a(250)];
    if (!s) return;
    if (!W(this[a(228)]) || this[a(228)] !== St[a(236)])
      return s[a(235)] === b2[a(222)] ? (this[a(241)] = this[a(251)](e, x, n), this._currentVelocity) : (this._currentVelocity = this[a(246)](e, x, n), this._currentVelocity);
    let r;
    if (s.referenceFrame === b2[a(222)]) {
      const i = s[a(231)](e), o = s[a(231)](a0[a(247)](e, B0, Gs));
      if (g.equals(i, this[a(260)]) || g[a(255)](i, o)) {
        const u = s[a(242)](e);
        return W(u) && W(n) && u.clone(n), this[a(241)];
      }
      this[a(260)] = i == null ? void 0 : i[a(237)](), r = this[a(251)](e, x, n);
    } else r = this._getValueFixed(e, x, n);
    if (!r) {
      const i = s.getValue(e);
      return W(i) && W(n) && i.clone(n), this._currentVelocity;
    }
    return this[a(241)] = r, this[a(241)];
  }
  [Z(251)](e, x, n) {
    const a = Z;
    if (!W(e)) throw new Q2(a(243));
    !W(x) && (x = new g());
    const s = this[a(250)];
    if (s[a(239)]) return this[a(223)] ? void 0 : g[a(237)](g[a(258)], x);
    let r = s[a(242)](e, Rs), i = s[a(231)](a0.addSeconds(e, B0, W2), V2);
    if (i = s[a(254)](e, i), !W(r) || !W(i) && (i = r, r = s[a(231)](a0[a(247)](e, -B0, W2), V2), r = s.getOrbitFixedValue(e, r), !W(r)))
      return;
    if (g[a(255)](r, i)) return this[a(223)] ? void 0 : g[a(237)](g[a(258)], x);
    W(n) && r.clone(n);
    const o = g[a(259)](i, r, x);
    return this[a(223)] ? g[a(256)](o, x) : g[a(224)](o, B0, x);
  }
  _getValueFixed(e, x, n) {
    const a = Z;
    if (!W(e)) {
      console[a(232)](a(243));
      return;
    }
    !W(x) && (x = new g());
    const s = this[a(250)];
    if (s != null && s[a(239)]) return this[a(223)] ? void 0 : g.clone(g[a(258)], x);
    let r = s[a(242)](e), i = s[a(242)](a0[a(247)](e, B0, new a0()));
    if (!W(r) || !W(i) && (i = r, r = s[a(242)](a0[a(247)](e, -B0, new a0())), !W(r)))
      return;
    if (g[a(255)](r, i)) return this[a(223)] ? void 0 : g[a(237)](g.ZERO, x);
    W(n) && r[a(237)](n);
    const o = g[a(259)](i, r, x);
    return this[a(223)] ? g[a(256)](o, x) : g[a(224)](o, B0, x);
  }
  [Z(255)](e) {
    var n;
    const x = Z;
    return this === e || e instanceof sa && ((n = this[x(250)]) == null ? void 0 : n[x(255)](e._position));
  }
}
const p0 = c2;
(function(t, e) {
  const x = c2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(180)) / 1 * (parseInt(x(174)) / 2) + -parseInt(x(179)) / 3 + -parseInt(x(189)) / 4 * (parseInt(x(177)) / 5) + parseInt(x(181)) / 6 * (-parseInt(x(193)) / 7) + -parseInt(x(184)) / 8 * (-parseInt(x(183)) / 9) + -parseInt(x(191)) / 10 + parseInt(x(194)) / 11 * (parseInt(x(178)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ye, 571981);
function Ye() {
  const t = ["424DLWHsq", "time is required", "4795260OOjHKu", "fromCartesian", "112315xivMXS", "11dPXfmI", "isConstant", "WGS84", "latitude", "equals", "getValue", "70288oUNBZY", "_currentRotation", "_getValue", "39790GaszMF", "28670412XRBVsN", "759222NpkKyX", "1SVXKPt", "366LAmBdc", "_subscription", "1233okkAKk", "45128Opmrll", "longitude", "position", "_position", "definitionChanged"];
  return Ye = function() {
    return t;
  }, Ye();
}
const Fs = new g(), z2 = new g(), It = new e0(), gt = new e0(), R2 = new a0(), G2 = 1 / 60;
function c2(t, e) {
  return t = t - 174, Ye()[t];
}
let F2, zx;
class Fo {
  constructor(e) {
    const x = c2;
    this[x(187)] = e, this[x(188)] = new Sx(), this[x(182)] = void 0, this[x(175)] = void 0;
  }
  get [p0(195)]() {
    var x;
    const e = p0;
    return (x = this[e(187)]) == null ? void 0 : x[e(195)];
  }
  get [p0(186)]() {
    return this[p0(187)];
  }
  set [p0(186)](e) {
    var a;
    const x = p0, n = this._position;
    n !== e && (W(n) && ((a = this[x(182)]) == null || a.call(this)), this[x(187)] = e, W(e) && (this[x(182)] = e[x(188)].addEventListener(() => {
      this[x(188)].raiseEvent(this);
    }, this)), this[x(188)].raiseEvent(this));
  }
  [p0(199)](e) {
    const x = p0, n = this[x(176)](e);
    return n ? (this._currentRotation = n, this._currentRotation) : this[x(175)];
  }
  [p0(198)](e) {
    const x = p0;
    return this === e || this[x(187)][x(198)](e[x(187)]);
  }
  _getValue(e) {
    const x = p0;
    if (!W(e)) throw new Q2(x(190));
    const n = this[x(187)];
    if (n[x(195)]) return;
    let a = n[x(199)](e, Fs), s = n.getValue(a0.addSeconds(e, G2, R2), z2);
    if (W(a) && !(!W(s) && (s = a, a = n[x(199)](a0.addSeconds(e, -G2, R2), z2), !W(a))) && !g[x(198)](a, s))
      return e0[x(192)](a, Fx[x(196)], It), e0.fromCartesian(s, Fx[x(196)], gt), zx = gt[x(185)] - It[x(185)], F2 = (gt[x(197)] - It[x(197)]) / zx, Math.atan(F2) - zx / Math.abs(zx) * Math.PI / 2;
  }
}
const L0 = ia;
(function(t, e) {
  const x = ia, n = t();
  for (; ; )
    try {
      if (parseInt(x(240)) / 1 + parseInt(x(247)) / 2 * (parseInt(x(250)) / 3) + -parseInt(x(254)) / 4 + parseInt(x(249)) / 5 + -parseInt(x(238)) / 6 + -parseInt(x(236)) / 7 * (-parseInt(x(245)) / 8) + parseInt(x(243)) / 9 * (-parseInt(x(237)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(je, 602365);
function je() {
  const t = ["609607NhsgFI", "rightClickCallback", "replace", "9vlvxoa", "values", "1384ycvhgo", "clear", "935358ZhRArC", "situationRightMenu", "2975105fduOhi", "6ANKPaw", "forEach", "右键菜单的key必须是唯一值 ", "key", "1291988xaFLkA", "entityOption", "23387CBwnZR", "12704510zQOEKL", "3132996fapEtt", "emptyOption"];
  return je = function() {
    return t;
  }, je();
}
function ia(t, e) {
  return t = t - 236, je()[t];
}
const Yo = on(L0(248), { state() {
  return { rightMenuSelectData: null, menuShow: !1, menuX: 0, menuY: 0, cartesian2: new $(0, 0), entityOption: {}, emptyOption: {}, rightClickCallback: /* @__PURE__ */ new Set() };
}, getters: { getterEntityMenuOptions: (t) => Object.values(t[L0(255)]), getterEmptyMenuOptions: (t) => {
  const e = L0;
  return Object[e(244)](t[e(239)]);
} }, actions: { pushEntityOption(t, e) {
  const x = L0;
  !v2(t) && (t = [t]);
  const n = this[x(255)];
  t[x(251)]((a) => {
    const s = x;
    if (e != null && e.replace) {
      n[a[s(253)]] = a;
      return;
    }
    if (n[a[s(253)]]) {
      console.warn(s(252) + a[s(253)]);
      return;
    }
    n[a.key] = a;
  });
}, removeEntityOptionByKey(t) {
  const e = L0;
  if (Dt(t)) {
    delete this[e(255)][t];
    return;
  }
  t[e(251)]((x) => {
    delete this.entityOption[x];
  });
}, pushEmptyOption(t, e) {
  const x = L0;
  !v2(t) && (t = [t]);
  const n = this[x(239)];
  t.forEach((a) => {
    const s = x;
    if (e != null && e[s(242)]) {
      n[a[s(253)]] = a;
      return;
    }
    if (n[a.key]) {
      console.warn(s(252) + a.key);
      return;
    }
    n[a[s(253)]] = a;
  });
}, removeEmptyOptionByKey(t) {
  const e = L0;
  if (Dt(t)) {
    delete this.emptyOption[t];
    return;
  }
  t[e(251)]((x) => {
    const n = e;
    delete this[n(239)][x];
  });
}, clearOptions() {
  const t = L0;
  this[t(255)] = {}, this.emptyOption = {}, this[t(241)][t(246)]();
} } }), I0 = oa;
(function(t, e) {
  const x = oa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(189)) / 1 * (-parseInt(x(181)) / 2) + -parseInt(x(192)) / 3 + parseInt(x(198)) / 4 * (parseInt(x(191)) / 5) + -parseInt(x(193)) / 6 * (-parseInt(x(173)) / 7) + parseInt(x(172)) / 8 * (parseInt(x(171)) / 9) + parseInt(x(186)) / 10 * (-parseInt(x(179)) / 11) + -parseInt(x(187)) / 12 * (-parseInt(x(174)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Be, 968631);
function oa(t, e) {
  return t = t - 168, Be()[t];
}
function Be() {
  const t = ["808pndOCI", "3899nyhAvS", "26ntlOAC", "isShow", "key", "setMenu", "forEach", "1480061IDSpTB", "menuMap", "3152zmWmVX", "keys", "add", "$reset", "values", "90IaRVyP", "8231664mdwBZv", "show", "148IluWlQ", "length", "287795cpUyPh", "636108uQEAks", "3732wupNdr", "cesiumRightMenu", "cachePosition", "eventList", "some", "28geouJQ", "group", "push", "divider", "3303MzayAi"];
  return Be = function() {
    return t;
  }, Be();
}
const Ys = on(I0(194), { state() {
  return { isShow: !1, posOffset: { x: 0, y: 0 }, menuMap: { baseGroup: {}, otherGroup: {} }, eventList: {}, rightClickEvent: /* @__PURE__ */ new Set(), cachePosition: null };
}, getters: { menuOptions(t) {
  const e = I0, x = t[e(180)], n = [];
  return Object[e(185)](x)[e(178)]((a, s) => {
    const r = e, i = Object.values(a);
    i[r(190)] && (n[r(169)](...i), s !== Object[r(185)](x).length - 1 && n[r(169)]({ type: r(170), show: i[r(197)]((o) => o[r(188)]) }));
  }), n;
} }, actions: { setMenu(t, e) {
  const x = I0;
  !this[x(180)][t[x(168)]] && (this[x(180)][t[x(168)]] = {}), this[x(180)][t.group][t[x(176)]] = t, e && (this[x(196)][t[x(176)]] = e);
}, setMenus(t) {
  const e = I0;
  t[e(178)]((x) => {
    this[e(177)](x.data, x.event);
  });
}, clearMenu() {
  const t = I0;
  Object[t(182)](this[t(180)])[t(178)]((e) => {
    const x = t;
    this[x(180)][e] = {};
  }), this[t(196)] = {};
}, clearByGroup(t) {
  const e = I0;
  this[e(180)][t] = {};
}, executeFilter(t) {
  const e = I0;
  t && (this[e(195)] = t);
  const x = t ?? this.cachePosition;
  Object[e(185)](this[e(180)])[e(178)]((n) => {
    const a = e;
    Object[a(185)](n)[a(178)]((s) => {
      var i;
      const r = a;
      s.show = ((i = s[r(175)]) == null ? void 0 : i.call(s, { data: s, position: x })) ?? !1;
    });
  });
}, setRightClick(t) {
  const e = I0;
  this.rightClickEvent[e(183)](t);
}, setOffset(t, e) {
  this.posOffset = { x: t, y: e };
}, reset() {
  this[I0(184)]();
}, closeMenu() {
  const t = I0;
  this[t(175)] = !1;
} } });
(function(t, e) {
  const x = ca, n = t();
  for (; ; )
    try {
      if (parseInt(x(463)) / 1 + parseInt(x(464)) / 2 + parseInt(x(468)) / 3 * (-parseInt(x(462)) / 4) + parseInt(x(472)) / 5 * (parseInt(x(470)) / 6) + parseInt(x(469)) / 7 * (parseInt(x(466)) / 8) + -parseInt(x(467)) / 9 * (-parseInt(x(471)) / 10) + -parseInt(x(465)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ue, 497134);
function ca(t, e) {
  return t = t - 461, Ue()[t];
}
const jo = { install(t) {
  const e = ca;
  t[e(461)](Hn), t.use(Bn), t[e(461)](Jn), t[e(461)](xa), t[e(461)](aa), t[e(461)](ra);
} };
function Ue() {
  const t = ["use", "4CiqNZH", "522901UUnaHN", "1226488aomSih", "19532392nmIiSm", "32IDysNB", "1013598UJMZbm", "101625orkMjG", "517195DzNryW", "259926evClQN", "70kaSHvv", "10YtEIlt"];
  return Ue = function() {
    return t;
  }, Ue();
}
const Q = f2;
(function(t, e) {
  const x = f2, n = t();
  for (; ; )
    try {
      if (parseInt(x(125)) / 1 + parseInt(x(134)) / 2 * (-parseInt(x(159)) / 3) + -parseInt(x(141)) / 4 * (parseInt(x(143)) / 5) + parseInt(x(119)) / 6 * (parseInt(x(150)) / 7) + parseInt(x(156)) / 8 * (parseInt(x(144)) / 9) + parseInt(x(152)) / 10 + -parseInt(x(126)) / 11 * (parseInt(x(129)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($e, 679715);
class js {
  constructor(e) {
    const x = f2;
    e = e ?? {};
    const { color: n = G[x(160)], labelColor: a = G[x(160)], tileWidth: s = 256, tileHeight: r = 256 } = e;
    this[x(131)] = new Pt(), this._color = n[x(132)](), this[x(139)] = a.toCssColorString(), this[x(115)] = new Sx(), this[x(130)] = s, this[x(140)] = r, this._readyPromise = Promise[x(116)](!0);
  }
  get [Q(138)]() {
  }
  get [Q(148)]() {
    return this[Q(130)];
  }
  get [Q(146)]() {
    return this[Q(140)];
  }
  get [Q(128)]() {
  }
  get minimumLevel() {
  }
  get [Q(135)]() {
    return this[Q(131)];
  }
  get [Q(118)]() {
    const e = Q;
    return this._tilingScheme[e(118)];
  }
  get [Q(124)]() {
  }
  get errorEvent() {
    return this._errorEvent;
  }
  get [Q(162)]() {
    return !0;
  }
  get [Q(127)]() {
    return this[Q(147)];
  }
  get [Q(133)]() {
  }
  get [Q(122)]() {
    return !0;
  }
  getTileCredits() {
  }
  [Q(161)]() {
  }
  [Q(151)](e, x, n) {
    const a = Q, s = document[a(142)]("canvas");
    s[a(145)] = 256, s[a(136)] = 256;
    const r = s.getContext("2d");
    r[a(158)] = this._color, r[a(123)] = 1, r[a(153)](1, 1, 255, 255), r[a(117)] = a(137), r[a(154)] = a(121), r[a(155)] = this._labelColor;
    const { west: i, north: o } = this[a(131)][a(157)](e, x, n), u = Bs(n, i, o);
    return r.fillText(u, u.length * 45 / 14, 15), Promise.resolve(s);
  }
}
function Bs(t, e, x) {
  const n = Q;
  if (t > 10) {
    const a = (t - 8) / 2, s = e[n(120)](a), r = x[n(120)](a);
    return s + "°, " + r + "°";
  }
  return e[n(120)](1) + n(149) + x[n(120)](1) + "°";
}
function f2(t, e) {
  return t = t - 115, $e()[t];
}
function $e() {
  const t = ["_tilingScheme", "toCssColorString", "credit", "2SUSgKo", "tilingScheme", "height", "bold 12px Arial", "proxy", "_labelColor", "_tileHeight", "4ZcFQqc", "createElement", "2972605NdouQZ", "160254onSCIM", "width", "tileHeight", "_readyPromise", "tileWidth", "°, ", "135331tyrbRu", "requestImage", "8550380BpmclT", "strokeRect", "textAlign", "fillStyle", "464fVbSgq", "tileXYToNativeRectangle", "strokeStyle", "839757sWTitP", "YELLOW", "pickFeatures", "ready", "_errorEvent", "resolve", "font", "rectangle", "294dAvyOa", "toFixed", "center", "hasAlphaChannel", "lineWidth", "tileDiscardPolicy", "668970vJIefQ", "22zsBHAQ", "readyPromise", "maximumLevel", "11699508FNjafE", "_tileWidth"];
  return $e = function() {
    return t;
  }, $e();
}
function fa(t, e) {
  return t = t - 173, He()[t];
}
const _0 = fa;
(function(t, e) {
  const x = fa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(195)) / 1 * (parseInt(x(200)) / 2) + parseInt(x(203)) / 3 + -parseInt(x(182)) / 4 + parseInt(x(194)) / 5 + parseInt(x(179)) / 6 * (parseInt(x(199)) / 7) + parseInt(x(180)) / 8 * (-parseInt(x(186)) / 9) + -parseInt(x(188)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(He, 796051);
const Us = G[_0(190)](_0(192));
function He() {
  const t = ["26102UZDwRC", "grid", "_alpha", "1293816FRPggq", "_show", "remove", "This Viewer is ", "_gridShow", "imageryLayers", "_viewer", "layer", "isDestroyed", "6bKOWsA", "992VSYciZ", "tileGrid", "2923480AosUON", "_labelColor", "show", "warn", "30159volvjB", "_color", "4817870suSiHQ", "TRANSPARENT", "fromCssColorString", "_init", "#8aaec3", "addImageryProvider", "7097015mevhnr", "62jxXvIb", "destroy", "alpha", "_layer", "9679033uKaRnY"];
  return He = function() {
    return t;
  }, He();
}
class Bo {
  constructor(e) {
    const x = _0, { viewer: n, gridShow: a = !0, show: s = !1, color: r = Us, labelColor: i = G.WHITE.withAlpha(0.5) } = e ?? {};
    if (this[x(202)] = 1, this[x(176)] = n, this[x(198)] = { tileGrid: void 0, grid: void 0 }, this._show = s, !W(this[x(176)])) {
      console[x(185)](x(173) + this[x(176)]);
      return;
    }
    this._gridShow = a, this._show = s, this._color = r, this._labelColor = i, this[x(191)]();
  }
  [_0(191)]() {
    const e = _0, x = this[e(176)][e(175)];
    this._layer.tileGrid = x[e(193)](new js({ color: this[e(187)], labelColor: this[e(183)] })), this[e(174)] && (this[e(198)][e(201)] = x[e(193)](new Ga({ color: this._color, backgroundColor: G[e(189)], glowColor: G.TRANSPARENT, cells: 4 }))), this.show = this[e(204)];
  }
  [_0(178)]() {
    return !1;
  }
  set alpha(e) {
    const x = _0;
    this[x(198)][x(201)] && (this._layer[x(201)][x(197)] = e, this._layer.tileGrid[x(197)] = e), this[x(202)] = e;
  }
  [_0(196)]() {
    const e = _0, x = this[e(176)][e(175)];
    return this[e(198)][e(181)] && x[e(205)](this[e(198)][e(181)]), this[e(198)][e(201)] && x[e(205)](this[e(198)][e(201)]), Nt(this);
  }
  set show(e) {
    const x = _0;
    this[x(198)][x(181)] && (this._layer[x(181)][x(184)] = e), this[x(198)][x(201)] && (this[x(198)][x(201)].show = e), this[x(204)] = e;
  }
  get [_0(177)]() {
    return this._layer;
  }
}
(function(t, e) {
  for (var x = ua, n = t(); ; )
    try {
      var a = -parseInt(x(414)) / 1 * (-parseInt(x(423)) / 2) + parseInt(x(411)) / 3 * (parseInt(x(415)) / 4) + -parseInt(x(419)) / 5 * (-parseInt(x(424)) / 6) + -parseInt(x(412)) / 7 * (parseInt(x(413)) / 8) + parseInt(x(416)) / 9 + -parseInt(x(417)) / 10 * (parseInt(x(422)) / 11) + parseInt(x(425)) / 12 * (-parseInt(x(418)) / 13);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ze, 654681);
function Ze() {
  var t = ["214424fGMvDa", "10503027qdzgmD", "50oqnPfm", "216086wMCteR", "885BuSUho", "addMaterial", "_materialCache", "2444662YwVnMV", "224ByWGKI", "37782auPeol", "276kweSuq", "3qArTdW", "7868595AcPkhp", "8vTLWFH", "8367TYcupr"];
  return Ze = function() {
    return t;
  }, Ze();
}
function ua(t, e) {
  t = t - 411;
  var x = Ze(), n = x[t];
  return n;
}
function $s(t, e) {
  return function() {
    var x = ua;
    V[x(421)][x(420)](t, e);
  };
}
function qe() {
  const t = ["3682295lyFxEu", "getValueOrClonedDefault", "addMaterial", "openAngle", "percent", "_number", "8eUoyPy", "_gradient", "isConstant", "_gradientSubscription", "getValue", "EllipseDiffuse", "_minAngle", "rotation", "getValueOrDefault", "defineProperties", "getType", "gradient", "_rotation", "EllipseDiffuseType", "1250049tINeZF", "_colorSubscription", "171otZntn", "2676296KiHUDZ", "2068vIHKvS", "327485hOHGoM", "speed", "923394YwdLvv", "_maxAngleSubscription", "number", "_definitionChanged", "_materialCache", "equals", "_speed", "prototype", "_openAngleSubscription", "121544iqbNme", "color", "_speedSubscription", "_minAngleSubscription", "minAngle", "maxAngle", "_color", "_taperPower", "_glow", "_percent", "_openAngle", "_glowPower", "_rotationSubscription"];
  return qe = function() {
    return t;
  }, qe();
}
const H = da;
(function(t, e) {
  const x = da, n = t();
  for (; ; )
    try {
      if (parseInt(x(181)) / 1 * (parseInt(x(162)) / 2) + -parseInt(x(176)) / 3 + -parseInt(x(180)) / 4 + -parseInt(x(156)) / 5 + -parseInt(x(183)) / 6 + parseInt(x(179)) / 7 + parseInt(x(143)) / 8 * (parseInt(x(178)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qe, 673377);
V[H(175)] = H(167);
const la = `
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
        }`;
function da(t, e) {
  return t = t - 139, qe()[t];
}
V[H(187)][H(158)](V[H(175)], { fabric: { type: V[H(167)], uniforms: { color: new G(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: la }, translucent: function() {
  return !0;
} });
const Hs = $s(V[H(175)], { fabric: { type: V.EllipseDiffuse, uniforms: { color: new G(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: la }, translucent: function() {
  return !0;
} }), Zs = new G(1, 0, 0, 0.7), qs = 2, Xs = 0.03, Js = 0.2, Ks = 5, Qs = 180, xi = -180;
function lx(t) {
  const e = H;
  t = t ?? {}, this[e(186)] = new Sx(), this[e(149)] = void 0, this[e(177)] = void 0, this._speed = void 0, this[e(145)] = void 0, this[e(152)] = void 0, this._percentSubscription = void 0, this._gradient = void 0, this[e(165)] = void 0, this._number = void 0, this._numberSubscription = void 0, this[e(174)] = void 0, this[e(155)] = void 0, this[e(153)] = void 0, this[e(142)] = void 0, this._maxAngle = void 0, this[e(184)] = void 0, this._minAngle = void 0, this[e(146)] = void 0, this[e(144)] = t.color, this.speed = t[e(182)], this[e(160)] = t[e(160)], this[e(173)] = t[e(173)], this[e(185)] = t.number, this[e(169)] = t[e(169)], this[e(159)] = t.openAngle, this[e(148)] = t[e(148)], this[e(147)] = t.minAngle;
}
Object[H(171)](lx[H(141)], { isConstant: { get: function() {
  const t = H;
  return l0[t(164)](this[t(149)]) && l0[t(164)](this[t(151)]);
} }, definitionChanged: { get: function() {
  return this._definitionChanged;
} }, color: w0(H(144)), speed: w0(H(182)), percent: w0(H(160)), gradient: w0("gradient"), number: w0(H(185)), rotation: w0("rotation"), openAngle: w0("openAngle"), maxAngle: w0(H(148)), minAngle: w0("minAngle") }), lx[H(141)][H(172)] = function(t) {
  return "EllipseDiffuse";
}, lx[H(141)][H(166)] = function(t, e) {
  var s, r;
  const x = H;
  !W(e) && (e = {}), e[x(144)] = l0[x(157)](this[x(149)], t, Zs, e[x(144)]), e[x(182)] = l0[x(170)](this[x(140)], t, qs, e.speed), e.percent = l0[x(170)](this[x(152)], t, Xs, e[x(160)]), e[x(173)] = l0[x(170)](this[x(163)], t, Js, e.gradient), e[x(185)] = l0[x(170)](this[x(161)], t, Ks, e[x(185)]);
  let n = (s = this[x(169)]) == null ? void 0 : s.getValue();
  const a = (r = this[x(159)]) == null ? void 0 : r.getValue();
  if (w2(n) && w2(a)) {
    n %= 360;
    const i = a / 2;
    let o = -n + i + 90, u = -n - i + 90;
    n > 270 && (o += 360, u += 360), n < -90 && (o -= 360, u -= 360), e[x(148)] = o, e[x(147)] = u;
  } else {
    const i = l0[x(170)](this._maxAngle, t, Qs, e[x(148)]), o = l0.getValueOrDefault(this[x(168)], t, xi, e[x(147)]);
    e[x(148)] = i > o ? i : o, e[x(147)] = o < i ? o : i;
  }
  return e;
}, lx[H(141)][H(139)] = function(t) {
  const e = H;
  return this === t || t instanceof lx && l0[e(139)](this[e(149)], t[e(149)]) && l0.equals(this[e(154)], t._glowPower) && l0.equals(this[e(150)], t[e(150)]);
};
const R = pa;
(function(t, e) {
  const x = pa, n = t();
  for (; ; )
    try {
      if (parseInt(x(403)) / 1 + -parseInt(x(410)) / 2 * (parseInt(x(399)) / 3) + parseInt(x(389)) / 4 * (-parseInt(x(393)) / 5) + -parseInt(x(398)) / 6 + -parseInt(x(388)) / 7 * (parseInt(x(406)) / 8) + -parseInt(x(390)) / 9 + parseInt(x(413)) / 10 * (parseInt(x(405)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xe, 149491);
function Xe() {
  const t = [`
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
        }`, "BombRadiation", "PolylineTrailType", "478EwEpFt", "DefaultImageId", "PolylineTrail", "2338060aILpNU", "SensorWave", "_materialCache", "CommunicationFlow", "CircleDiffuseType", "16205drgOqD", "4QUYMKu", "349479WXIBkU", "PolylineMilitaryType", "addMaterial", "1468410lwyhAp", `
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
      }`, "SensorWaveType", `
        uniform sampler2D image;
        uniform float speed;
        uniform vec4 color;
        uniform vec2 repeat;

        czm_material czm_getMaterial(czm_materialInput materialInput){
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = repeat * materialInput.st;
            float time = fract(czm_frameNumber * speed / 1000.0);
            vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));
            if(color.a == 0.0){
                material.alpha = colorImage.a;
                material.diffuse = colorImage.rgb;
            }else{
                material.alpha = colorImage.a * color.a;
                material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);
            }
            return material;
        }`, `
    uniform vec4 color;
    uniform sampler2D imageHead;
    uniform sampler2D image;
    uniform vec2 repeat;

    czm_material czm_getMaterial(czm_materialInput materialInput)
    {
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 st = materialInput.st * repeat;
        vec4 colorImageHead = texture2D(imageHead, fract(st));
        vec4 colorImage = texture2D(image, fract(st));
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
    }`, "1688754MMhhCW", "1722yqlKDQ", "PolylineFlowType", `
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
    }`, "CommunicationFlowType", "32560OxczTj", "BombRadiationType", "44NcOWOg", "232albZBB"];
  return Xe = function() {
    return t;
  }, Xe();
}
V[R(404)] = R(408);
const ei = `
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
}`;
V[R(415)][R(392)](V.BombRadiationType, { fabric: { type: V.BombRadiationType, uniforms: { color: new G(1, 0, 0, 0.7), speed: 3, count: 2, gradient: 0.5 }, source: ei }, translucent: function(t) {
  return !0;
} }), V[R(395)] = R(414);
const ti = R(394);
V[R(415)].addMaterial(V[R(395)], { fabric: { type: V[R(395)], uniforms: { color: new G(1, 0, 0, 0.7), speed: 3, count: 4, gradient: 0.2 }, source: ti }, translucent: function(t) {
  return !0;
} }), V[R(387)] = "CircleDiffuse";
const ni = `
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
    }`;
V._materialCache[R(392)](V[R(387)], { fabric: { type: V.CircleDiffuseType, uniforms: { color: new G(1, 0, 0, 0.7), speed: 15 }, source: ni }, translucent: function(t) {
  return !0;
} }), V[R(402)] = R(416);
function pa(t, e) {
  return t = t - 387, Xe()[t];
}
const ai = R(401);
V[R(415)][R(392)](V.CommunicationFlowType, { fabric: { type: V[R(402)], uniforms: { color: new G(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 }, source: ai }, translucent: function(t) {
  return !0;
} }), V[R(400)] = "PolylineFlow";
const ri = R(407);
V._materialCache[R(392)](V[R(400)], { fabric: { type: V[R(400)], uniforms: { color: new G(1, 0, 0, 0.7), speed: 45, percent: 0.03, gradient: 0.2, number: 5 }, source: ri }, translucent: function(t) {
  return !0;
} }), V[R(409)] = R(412);
const si = R(396);
V[R(415)].addMaterial(V.PolylineTrailType, { fabric: { type: V[R(409)], uniforms: { color: new G(1, 0, 0, 0.7), image: V.DefaultImageId, speed: 45, repeat: new $(1, 1) }, source: si }, translucent: function(t) {
  return !0;
} }), V[R(391)] = "PolylineMilitary";
const ii = R(397);
V[R(415)][R(392)](V.PolylineMilitaryType, { fabric: { type: V[R(391)], uniforms: { color: new G(1, 0, 0, 0.7), imageHead: V[R(411)], image: V.DefaultImageId, repeat: new $(1, 1) }, source: ii }, translucent: function(t) {
  return !0;
} });
function oi() {
  Hs();
}
const S0 = ha;
function Je() {
  const t = ["1027380sHorIa", "init", "getLonLat", "_getLonLat", "876930FLAsKD", "23RrLkZb", "parseInt", "_getXY", "282CikaYF", "124792MZdJMy", "33cAcsFO", "string", "3989440omLswN", "floor", "140128dZZOih", "261DiSufV", "63DUySXJ", "getFloorInteger", "getXY", "4095948YZNgrU", "24yCtZBT"];
  return Je = function() {
    return t;
  }, Je();
}
(function(t, e) {
  const x = ha, n = t();
  for (; ; )
    try {
      if (parseInt(x(346)) / 1 * (-parseInt(x(349)) / 2) + parseInt(x(357)) / 3 * (parseInt(x(350)) / 4) + -parseInt(x(345)) / 5 * (parseInt(x(361)) / 6) + parseInt(x(353)) / 7 + -parseInt(x(355)) / 8 * (-parseInt(x(356)) / 9) + parseInt(x(341)) / 10 * (-parseInt(x(351)) / 11) + -parseInt(x(360)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Je, 378712);
const { sqrt: U0, pow: I, sin: h0, cos: o0, tan: Y2, abs: j2 } = Math, ci = { BEIJING54: { a: 6378245, b: 63568630188e-4 }, XIAN80: { a: 6378137, b: 63567523142e-4 }, CGCS2000: { a: 6378137, b: 635675231414e-5 } };
function ha(t, e) {
  return t = t - 341, Je()[t];
}
class _a {
  constructor(e) {
    this.e1 = 0, this.a = 0, this.b = 0, this.f = 0, this.e = 0, this.init(e);
  }
  [S0(342)](e) {
    const { a: x, b: n } = ci[e], a = (x - n) / x, s = U0(2 * a - I(a, 2));
    this.e1 = s / U0(1 - I(s, 2)), this.a = x, this.b = n, this.f = a, this.e = s;
  }
  [S0(358)](e) {
    const x = S0;
    return typeof e === x(352) ? Number[x(347)](e) : Math[x(354)](e);
  }
  [S0(359)](e, x, n = 6, a = 0, s = 5e5, r = 0) {
    const i = S0;
    let o = this[i(358)](j2(e) / n + 1) * n - 3;
    return o = e > 0 ? o : -o, this[i(348)](e, x, o, a, s, r);
  }
  [S0(343)](e, x, n, a = 6, s = 0, r = 5e5, i = 0) {
    const o = S0;
    let u = j2(n) * a - 3;
    return u = n > 0 ? u : -u, this[o(344)](e, x, u, s, r, i);
  }
  [S0(348)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, b: o, e: u, e1: f } = this, l = s, h = r, c = a, d = n, p = (x - c) * Math.PI / 180, E = (e - d) * Math.PI / 180, S = i / U0(1 - I(u * h0(p), 2)), y = I(i, 2) / o, D = 1 - 3 * I(f, 2) / 4 + 45 * I(f, 4) / 64 - 175 * I(f, 6) / 256 + 11025 * I(f, 8) / 16384, O = D - 1, T = 15 / 32 * I(f, 4) - 175 / 384 * I(f, 6) + 3675 / 8192 * I(f, 8), M = 0 - 35 / 96 * I(f, 6) + 735 / 2048 * I(f, 8), A = 315 / 1024 * I(f, 8), Y = y * (D * p + h0(p) * (O * o0(p) + T * I(o0(p), 3) + M * I(o0(p), 5) + A * I(o0(p), 7))), z = Y2(p), P = f * o0(p), v = Y + I(E, 2) / 2 * S * h0(p) * o0(p) + I(E, 4) * S * h0(p) * I(o0(p), 3) / 24 * (5 - I(z, 2) + 9 * I(P, 2) + 4 * I(P, 4)) + I(E, 6) * S * h0(p) * I(o0(p), 5) * (61 - 58 * I(z, 2) + I(z, 4)) / 720;
    return { x: E * S * o0(p) + I(E, 3) * S / 6 * I(o0(p), 3) * (1 - I(z, 2) + I(P, 2)) + I(E, 5) * S / 120 * I(o0(p), 5) * (5 - 18 * I(z, 2) + I(z, 4) + 14 * I(P, 2) - 58 * I(P, 2) * I(z, 2)) + l, y: v + h };
  }
  [S0(344)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, e: o, e1: u } = this, f = 1, l = n, h = s, c = r, d = a, p = (1 - U0(1 - I(o, 2))) / (1 + U0(1 - I(o, 2))), E = (x - c) / f, S = E / (i * (1 - I(o, 2) / 4 - 3 * I(o, 4) / 64 - 5 * I(o, 6) / 256)), y = S + (3 * p / 2 - 27 * I(p, 3) / 32) * h0(2 * S) + (21 * I(p, 2) / 16 - 55 * I(p, 4) / 32) * h0(4 * S) + 151 * I(p, 3) / 96 * h0(6 * S) + 1097 / 512 * I(p, 4) * h0(8 * S), D = i * (1 - I(o, 2)) / U0(I(1 - I(o * h0(y), 2), 3)), O = i / U0(1 - I(o * h0(y), 2)), T = I(Y2(y), 2), M = (e - h) / (f * O), A = I(u, 2) * I(o0(y), 2), Y = y - O * Math.tan(y) / D * (I(M, 2) / 2 - (5 + 3 * T + 10 * A - 9 * T * A - 4 * I(A, 2) - 9 * I(u, 2)) * I(M, 4) / 24 + (61 + 90 * T + 45 * I(T, 2) - 256 * I(u, 2) - 3 * I(A, 2)) * I(M, 6) / 720);
    return { longitude: (l * Math.PI / 180 + 1 / o0(y) * (M - (1 + 2 * T + A) * I(M, 3) / 6 + (5 - 2 * A + 28 * T - 3 * I(A, 2) + 8 * I(u, 2) + 24 * I(T, 2)) * I(M, 5) / 120)) * 180 / Math.PI, latitude: Y * 180 / Math.PI + d };
  }
}
const nx = ma;
(function(t, e) {
  const x = ma, n = t();
  for (; ; )
    try {
      if (parseInt(x(340)) / 1 * (parseInt(x(346)) / 2) + -parseInt(x(345)) / 3 + parseInt(x(333)) / 4 * (parseInt(x(343)) / 5) + -parseInt(x(344)) / 6 + parseInt(x(335)) / 7 * (-parseInt(x(336)) / 8) + -parseInt(x(332)) / 9 * (parseInt(x(337)) / 10) + -parseInt(x(334)) / 11 * (-parseInt(x(330)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xt, 993790);
const J = 2.999999, ba = { font: nx(341), fillColor: G[nx(331)], outlineColor: G[nx(348)], outlineWidth: 4, style: U2[nx(338)], disableDepthTestDistance: Number.POSITIVE_INFINITY };
function Ke(t, e) {
  const x = nx;
  return { positions: t, width: 0.5, material: V.fromType(x(347), { color: e }) };
}
function Qe(t, e, x, n = !0) {
  const a = nx;
  return t._labels[a(339)]({ ...t._labelOptions, position: e, text: x, horizontalOrigin: n ? wt.CENTER : wt[a(342)] });
}
function ma(t, e) {
  return t = t - 330, xt()[t];
}
const xx = [1e5, 5e4, 1e4, 5e3, 1e3, 500, 100, 50, 10, 5, 1];
function Ia(t, e = 0) {
  return !xx[e] || xx[e] === 1 ? 1 : t / xx[e] > 10 ? xx[e] : t / xx[e] > 3 ? xx[e + 1] : Ia(t, e + 2);
}
function fi(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function xt() {
  const t = ["2369379lCpzBp", "34uZbOoW", "Color", "BLACK", "108vwLNAx", "WHITE", "153WnUrvT", "194332WNqjML", "3477463raRhCR", "28xgVjYa", "1374520JdczEm", "255110iGyiZH", "FILL_AND_OUTLINE", "add", "69517jubqkS", "bold 1rem Arial", "CENTER", "20MOiaBd", "7900728sFEfkS"];
  return xt = function() {
    return t;
  }, xt();
}
const r0 = u2;
(function(t, e) {
  const x = u2, n = t();
  for (; ; )
    try {
      if (parseInt(x(483)) / 1 + -parseInt(x(480)) / 2 + parseInt(x(484)) / 3 * (parseInt(x(476)) / 4) + parseInt(x(479)) / 5 + parseInt(x(478)) / 6 * (parseInt(x(472)) / 7) + -parseInt(x(471)) / 8 + -parseInt(x(477)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(et, 399164);
class ga {
  constructor(e) {
    const x = u2;
    this[x(482)] = new Fa(e), this._polylines = [];
  }
  [r0(481)](e) {
    const x = r0, n = this[x(482)][x(481)](e);
    return this._polylines[x(474)](n), n;
  }
  removeAll() {
    const e = r0;
    this[e(482)][e(473)](), this._polylines = [];
  }
  get [r0(475)]() {
    const e = r0;
    return this[e(482)][e(475)];
  }
  set [r0(475)](e) {
    const x = r0;
    this[x(482)][x(475)] = e;
  }
}
function u2(t, e) {
  return t = t - 471, et()[t];
}
class ya {
  constructor() {
    const e = r0;
    this[e(482)] = new Ya(), this[e(485)] = [];
  }
  [r0(481)](e) {
    const x = r0, n = this._collection[x(481)](e);
    return this._labels[x(474)](n), n;
  }
  [r0(473)]() {
    const e = r0;
    this[e(482)].removeAll(), this[e(485)] = [];
  }
  get show() {
    return this[r0(482)].show;
  }
  set [r0(475)](e) {
    const x = r0;
    this[x(482)][x(475)] = e;
  }
}
function et() {
  const t = ["add", "_collection", "37358ixcSuR", "881655VEEYaO", "_labels", "1450440lFIKag", "2338ureqqU", "removeAll", "push", "show", "8gpYUFF", "3034467kZWluk", "78qywlyL", "1484100XuAyUH", "17316ssYDUY"];
  return et = function() {
    return t;
  }, et();
}
const q = l2;
(function(t, e) {
  const x = l2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(418)) / 1 * (parseInt(x(473)) / 2) + -parseInt(x(497)) / 3 * (-parseInt(x(467)) / 4) + parseInt(x(447)) / 5 + -parseInt(x(477)) / 6 * (-parseInt(x(492)) / 7) + parseInt(x(478)) / 8 * (-parseInt(x(460)) / 9) + parseInt(x(427)) / 10 * (-parseInt(x(489)) / 11) + parseInt(x(496)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(tt, 106476);
function tt() {
  const t = ["create", "X: ", "_zoneWide", "labelOptions", "gap", "_labels", "373948YoOHWp", "color2D", "_yRange", "forEach", "clientWidth", "uniforms", "1080GtYvqg", "Y: ", "primitives", "_getXY", "11094sTOIBQ", "5512LWiXTm", "fromDegrees", "destroy", "_gap", "south", "mode", "_getLonLat", "distance", "_color", "SCENE3D", "coordinates", "44SagVrb", "removeAll", "_drawLines", "595eOldFW", "_polylines", "color", "addEventListener", "1445304smJRen", "3FWLpmx", "_center", "_gaussTransform", "_lines", "material", "_color2D", "_getScreenViewRange", "_cameraListener", "127yrAmUl", "init", "globe", "WHITE", "cartesianToCanvasCoordinates", "geometry", "_measuredGraticule", "push", "positions", "209930cyXRTG", "_xRange", "changeSceneMode", "canvas", "camera", "length", "clientHeight", "_rectangle", "east", "_getExtentView", "remove", "longitude", "add", "update", "ellipsoid", "GRAY", "show", "point", "fromCartesian", "scene", "8095yAobbd", "_viewer", "center", "xRange", "_primitives", "destination", "pickEllipsoid", "_labelOffset", "_scale", "_show", "changed", "isDestroyed", "position", "1485wwDcGJ"];
  return tt = function() {
    return t;
  }, tt();
}
function l2(t, e) {
  return t = t - 411, tt()[t];
}
const { abs: B2 } = Math;
class Uo {
  constructor(e) {
    const x = l2;
    e = e ?? {}, this._viewer = e.viewer, this._center = e[x(449)], this[x(455)] = e.scale ?? 1e3, this[x(486)] = e[x(494)] ?? G[x(421)].withAlpha(0.9), this[x(415)] = e[x(468)] ?? G[x(442)].withAlpha(0.8), this._labelOptions = { ...ba, ...e[x(464)] }, this[x(481)] = e[x(465)] ?? 1, this[x(428)] = e[x(450)] ?? 50, this[x(469)] = e[x(450)] ?? 25, this[x(454)] = e.labelOffset ?? 0, this[x(463)] = 6, this[x(412)] = new _a("CGCS2000"), this[x(451)] = this[x(448)][x(446)][x(475)][x(439)](new xn()), this._lines = this[x(451)][x(439)](new ga({ disableDepthTest: !0 })), this[x(466)] = this[x(451)][x(439)](new ya()), this._show = !0, this[x(448)][x(424)] = this, this.init();
  }
  get [q(443)]() {
    return this[q(456)];
  }
  set show(e) {
    const x = q;
    this[x(456)] !== e && (this._show = e, this[x(451)].show = e);
  }
  set [q(449)](e) {
    const x = q;
    W(e) && (fi(this[x(411)], e) || (this[x(411)] = e, this[x(436)](), this[x(461)]()));
  }
  set scale(e) {
    const x = q;
    this[x(455)] !== e && (this[x(455)] = e, this[x(436)](), this[x(461)]());
  }
  [q(429)]() {
    const e = q, x = this._lines[e(493)], n = this[e(448)].scene[e(483)] === d0[e(487)] ? this[e(486)] : this[e(415)];
    x[e(432)] > 0 && x[e(470)]((a) => {
      const s = e;
      a[s(414)][s(472)][s(494)] = n;
    });
  }
  [q(419)]() {
    const e = q, x = this[e(448)][e(446)];
    this[e(417)] = x[e(431)][e(457)][e(495)](() => {
    });
  }
  [q(440)]() {
    const e = q, x = this[e(413)][e(493)];
    if (x[e(432)] === 0) return;
    const n = this[e(448)][e(446)], a = this[e(466)][e(466)];
    let s = n[e(422)](a[0][e(459)]), r = n.cartesianToCanvasCoordinates(a[1].position);
    W(s) && W(r) ? this[e(466)][e(443)] = $.distance(s, r) >= 100 : this._labels[e(443)] = !0, s = n[e(422)](x[0][e(426)][0]), r = n[e(422)](x[0][e(426)][1]), W(s) && W(r) ? this._lines[e(443)] = $[e(485)](s, r) >= 4 : this[e(413)][e(443)] = !0;
  }
  [q(461)]() {
    const e = q;
    this[e(413)][e(490)](), this._labels.removeAll();
    const x = this[e(463)], { west: n, east: a, north: s, south: r } = this._getExtentView();
    let i = parseInt(B2(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let o = parseInt(B2(a) / x + 1) * x - 3;
    switch (o = a > 0 ? o : -o, o - i) {
      case 24:
        this[e(491)](i, n, i + J, s, r), this[e(491)](i + 6, i + 3, i + 6 + J, s, r), this[e(491)](i + 12, i + 9, i + 12 + J, s, r), this[e(491)](i + 18, i + 15, i + 18 + J, s, r), this[e(491)](o, o - 3, a, s, r);
        break;
      case 18:
        this[e(491)](i, n, i + J, s, r), this[e(491)](i + 6, i + 3, i + 6 + J, s, r), this[e(491)](i + 12, i + 9, i + 12 + J, s, r), this[e(491)](o, o - 3, a, s, r);
        break;
      case 12:
        this[e(491)](i, n, i + J, s, r), this[e(491)](i + 6, i + 3, i + 6 + J, s, r), this._drawLines(o, o - 3, a, s, r);
        break;
      case 6:
        this[e(491)](i, n, i + J, s, r), this._drawLines(o, i + 3, a, s, r);
        break;
      case 0:
        this[e(491)](i, n, a, s, r);
        break;
    }
  }
  _drawLines(e, x, n, a, s) {
    const r = q;
    let i = e - 3;
    i = x < i ? i : x;
    let o = e + J;
    o = n > o ? o : n;
    const { x: u, y: f } = this[r(412)][r(476)](i, s, e), { x: l, y: h } = this[r(412)]._getXY(o, a, e), c = this._scale, d = (parseInt(u / c) - 1) * c, p = (parseInt(l / c) + 1) * c, E = (parseInt(f / c) - 1) * c, S = (parseInt(h / c) + 1) * c, y = this._viewer[r(446)][r(483)] === d0[r(487)] ? this._color : this[r(415)], D = this[r(454)];
    let O, T, M, A = 0, Y = 0;
    for (let z = d; z <= p; z += c) {
      T = [], O = [];
      for (let P = E; P <= S; P += c) {
        const { longitude: v, latitude: j } = this[r(412)][r(484)](z, P, e);
        T.push(g.fromDegrees(v, j)), O.push([z, P]);
      }
      this[r(413)][r(439)](Ke(T, y)), A % (this[r(481)] + 1) === 0 && (M = T[r(432)] - 1 - D, O[M] && Qe(this, T[M], r(462) + O[M][0])), A++;
    }
    for (let z = E; z <= S; z += c) {
      T = [], O = [];
      for (let P = d; P <= p; P += c) {
        const { longitude: v, latitude: j } = this._gaussTransform[r(484)](P, z, e);
        T[r(425)](g[r(479)](v, j)), O[r(425)]([P, z]);
      }
      this._lines[r(439)](Ke(T, y)), Y % (this[r(481)] + 1) === 0 && (M = D + 1, O[M] && Qe(this, T[M], r(474) + O[M][1], !1)), Y++;
    }
  }
  [q(436)]() {
    const e = q, [x, n] = this[e(411)], a = turf[e(444)]([x, n]), s = turf.destination(a, this[e(428)] * this[e(455)] / 2e3, -90), r = turf[e(452)](a, this._xRange * this[e(455)] / 2e3, 90), i = turf.destination(a, this[e(469)] * this[e(455)] / 2e3, 0), o = turf[e(452)](a, this[e(469)] * this[e(455)] / 2e3, 180);
    return this[e(434)] = { west: s[e(423)][e(488)][0], north: i.geometry.coordinates[1], east: r[e(423)][e(488)][0], south: o[e(423)][e(488)][1] }, this[e(434)];
  }
  [q(416)]() {
    const e = q, x = this[e(448)][e(446)][e(431)], n = this[e(448)][e(446)][e(430)], a = this[e(448)][e(446)][e(420)][e(441)], s = 40, r = 20, i = { north: x[e(453)](new $(n.clientWidth / 2, r), a), south: x.pickEllipsoid(new $(n[e(471)] / 2, n.clientHeight - r), a), west: x[e(453)](new $(s, n.clientWidth / 2), a), east: x[e(453)](new $(n[e(433)] - s, n[e(471)] / 2), a) };
    return { north: i.north ? e0[e(445)](i.north).latitude : void 0, south: i.south ? e0[e(445)](i[e(482)]).latitude : void 0, west: i.west ? e0.fromCartesian(i.west)[e(438)] : void 0, east: i[e(435)] ? e0.fromCartesian(i[e(435)])[e(438)] : void 0 };
  }
  [q(458)]() {
    return !1;
  }
  [q(480)]() {
    const e = q;
    return this[e(417)](), this[e(448)].scene[e(475)][e(437)](this._primitives), delete this._viewer[e(424)], Nt(this);
  }
}
const U = d2;
(function(t, e) {
  const x = d2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(385)) / 1 * (parseInt(x(369)) / 2) + -parseInt(x(400)) / 3 * (parseInt(x(364)) / 4) + parseInt(x(344)) / 5 + parseInt(x(399)) / 6 * (parseInt(x(393)) / 7) + parseInt(x(363)) / 8 + parseInt(x(406)) / 9 + -parseInt(x(391)) / 10 * (parseInt(x(386)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(nt, 854560);
function nt() {
  const t = ["zoneWide", "_measuredGraticule", "_canvasResizeListener", "_gaussTransform", "_color", "_screenOffsetX", "clientHeight", "length", "CGCS2000", "1058195zdYgJg", "material", "render", "xGap", "_show", "_getXY", "_screenOffsetY", "canvas", "changed", "_labelOffset", "fromCartesian", "_zoneWide", "camera", "west", "_viewer", "color2D", "screenOffsetY", "color", "forEach", "12822464dYfJyU", "270492jIthDf", "scene", "MAX_VALUE", "fromDegrees", "latitude", "954XNjCxY", "_centerZone", "_lines", "add", "resize", "_yGap", "toDegrees", "uniforms", "_labels", "longitude", "show", "removeAll", "fromCartographicArray", "remove", "_getExtentView", "is3DMode", "2533dNKDzb", "3633245oFpTGA", "_color2D", "east", "_polylines", "withAlpha", "10PeiLrn", "changeSceneMode", "77pslKYk", "labelOptions", "round", "_xGap", "cartesianArrayToCartographicArray", "_getScreenViewRange", "641454dHIKLW", "60teKSfF", "_screenCenterPosition", "SCENE3D", "_getLonLat", "north", "init", "6795990EjIXpe", "_primitives", "globe", "south", "addEventListener", "container", "clientWidth", "GRAY", "mode", "_drawLines", "push", "pickEllipsoid"];
  return nt = function() {
    return t;
  }, nt();
}
function d2(t, e) {
  return t = t - 341, nt()[t];
}
const { abs: yt } = Math;
class $o {
  constructor(e) {
    const x = d2;
    e = e ?? {}, this[x(358)] = e.viewer, this[x(422)] = e[x(361)] ?? G.WHITE[x(390)](0.5), this[x(387)] = e[x(359)] ?? G[x(413)].withAlpha(0.8), this[x(355)] = e[x(418)] ?? 6, this[x(396)] = e[x(347)] ?? 1, this[x(374)] = e.xGap ?? 1, this._labelOptions = { ...ba, ...e[x(394)] }, this[x(423)] = e.screenOffsetX ?? 40, this._screenOffsetY = e[x(360)] ?? 20, this[x(353)] = e.labelOffset ?? 3, this[x(421)] = new _a(x(343)), this[x(407)] = this[x(358)][x(365)].primitives.add(new xn()), this[x(371)] = this[x(407)][x(372)](new ga({ disableDepthTest: !0 })), this._labels = this[x(407)][x(372)](new ya()), this[x(348)] = !0, this[x(370)] = void 0, this[x(405)](), this[x(358)][x(419)] = this;
  }
  [U(392)]() {
    const e = U, x = this[e(371)][e(389)], n = this.is3DMode() ? this[e(422)] : this[e(387)];
    x.length > 0 && x[e(362)]((a) => {
      const s = e;
      a[s(345)][s(376)].color = n;
    });
  }
  [U(384)]() {
    const e = U;
    return this[e(358)][e(365)][e(414)] === d0.SCENE3D;
  }
  set [U(361)](e) {
    const x = U;
    this[x(384)]() ? this[x(422)] = e : this[x(387)] = e, this[x(392)]();
  }
  get [U(361)]() {
    const e = U;
    return this[e(384)]() ? this[e(422)] : this[e(387)];
  }
  get [U(379)]() {
    return this[U(348)];
  }
  set [U(379)](e) {
    const x = U;
    this[x(348)] !== e && (this[x(348)] = e, this._primitives.show = e);
  }
  [U(405)]() {
    const e = U, x = this[e(358)][e(365)];
    this._cameraListener = x.camera[e(352)][e(410)](() => {
      const n = e;
      this[n(348)] && this[n(346)]();
    }), this[e(420)] = this[e(358)][e(411)].addEventListener(e(373), () => {
      this[e(348)] && this.render();
    });
  }
  [U(346)]() {
    const e = U;
    this._lines[e(380)](), this[e(377)][e(380)]();
    const x = this[e(355)];
    let { west: n, north: a, east: s, south: r } = this._getExtentView();
    n = g0[e(375)](n), s = g0[e(375)](s), a = g0.toDegrees(a), r = g0[e(375)](r);
    let i = parseInt(yt(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let o = parseInt(yt(s) / x + 1) * x - 3;
    switch (o = s > 0 ? o : -o, o - i) {
      case 24:
        this[e(415)](i, n, i + J, a, r, !0), this[e(415)](i + 6, i + 3, i + 6 + J, a, r, !0), this[e(415)](i + 12, i + 9, i + 12 + J, a, r, !0), this[e(415)](i + 18, i + 15, i + 18 + J, a, r, !0), this[e(415)](o, o - 3, s, a, r);
        break;
      case 18:
        this[e(415)](i, n, i + J, a, r, !0), this[e(415)](i + 6, i + 3, i + 6 + J, a, r, !0), this[e(415)](i + 12, i + 9, i + 12 + J, a, r, !0), this[e(415)](o, o - 3, s, a, r);
        break;
      case 12:
        this[e(415)](i, n, i + J, a, r, !0), this[e(415)](i + 6, i + 3, i + 6 + J, a, r, !0), this[e(415)](o, o - 3, s, a, r);
        break;
      case 6:
        this._drawLines(i, n, i + J, a, r, !0), this[e(415)](o, i + 3, s, a, r);
        break;
      case 0:
        this._drawLines(i, n, s, a, r);
        break;
    }
  }
  isDestroyed() {
    return !1;
  }
  destroy() {
    const e = U;
    return this._cameraListener(), this[e(420)](), this[e(358)][e(365)].primitives[e(382)](this[e(407)]), this._show = !1, Nt(this);
  }
  [U(415)](e, x, n, a, s, r = !1) {
    const i = U;
    let o = e - 3;
    o = x < o ? o : x;
    let u = e + J;
    u = n > u ? u : n;
    let f = yt(parseInt(e / 6)) + 1;
    f = e > 0 ? f : 60 - f + 1;
    const { x: l, y: h } = this[i(421)][i(349)](o, s, e), { x: c, y: d } = this._gaussTransform._getXY(u, a, e), p = Ia(d - h, 0), E = (parseInt(l / p) - 1) * p, S = (parseInt(c / p) + 1) * p, y = (parseInt(h / p) - 1) * p, D = (parseInt(d / p) + 1) * p, O = (S - E) / p, T = (D - y) / p, M = this[i(353)];
    let A, Y, z, P = 0, v = 0;
    const j = this[i(358)][i(365)][i(414)] === d0[i(402)] ? this[i(422)] : this[i(387)];
    for (let t0 = E; t0 <= S; t0 += p) {
      Y = [], A = [];
      for (let w = y; w <= D; w += p) {
        const { longitude: b, latitude: _ } = this._gaussTransform[i(403)](t0, w, e);
        Y[i(416)](g.fromDegrees(b, _)), A.push([t0, w]);
      }
      !(O - P < 2 && r) && (this[i(371)][i(372)](Ke(Y, j)), P % (this[i(396)] + 1) === 0 && (z = Y[i(342)] - 1 - M, A[z] && Qe(this, Y[z], "" + f + A[z][0]))), P++;
    }
    for (let t0 = y; t0 <= D; t0 += p) {
      Y = [], A = [], P = 0;
      for (let w = E; w <= S; w += p) {
        if (!(O - P < 2 && r)) {
          const { longitude: b, latitude: _ } = this[i(421)]._getLonLat(w, t0, e);
          Y[i(416)](g[i(367)](b, _));
        }
        A[i(416)]([w, t0]), P++;
      }
      this[i(371)][i(372)](Ke(Y, j)), (T - v) % (this[i(374)] + 1) === 0 && (z = M, A[z] && Qe(this, Y[z], "" + A[z][1], !1)), v++;
    }
  }
  [U(383)]() {
    const e = U, x = this[e(358)][e(365)][e(356)], n = this._viewer[e(365)][e(351)], a = this._viewer[e(365)].globe.ellipsoid, s = [x[e(417)](new $(0, 0), a), x[e(417)](new $(n[e(412)], 0), a), x[e(417)](new $(0, n.clientHeight), a), x[e(417)](new $(n[e(412)], n[e(341)]), a)];
    for (let r = 0; r < 4; r++)
      if (s[r] === void 0) return Ix[e(366)];
    return Ix[e(381)](a[e(397)](s));
  }
  [U(401)]() {
    const e = U, x = this[e(358)][e(365)].canvas, n = new $(Math.round(x.clientWidth / 2), Math[e(395)](x[e(341)] / 2)), a = this[e(358)][e(365)][e(356)][e(417)](n);
    return a || g[e(367)](0, 0, 0);
  }
  [U(398)]() {
    const e = U, x = this[e(358)].scene[e(356)], n = this[e(358)].scene.canvas, a = this[e(358)][e(365)][e(408)].ellipsoid, s = this[e(423)], r = this[e(350)], i = { north: x.pickEllipsoid(new $(n.clientWidth / 2, r), a), south: x[e(417)](new $(n[e(412)] / 2, n[e(341)] - r), a), west: x[e(417)](new $(s, n[e(341)] / 2), a), east: x[e(417)](new $(n[e(412)] - s, n[e(341)] / 2), a) };
    return { north: i[e(404)] ? e0[e(354)](i[e(404)])[e(368)] : void 0, south: i[e(409)] ? e0[e(354)](i[e(409)]).latitude : void 0, west: i[e(357)] ? e0[e(354)](i[e(357)])[e(378)] : void 0, east: i[e(388)] ? e0[e(354)](i[e(388)]).longitude : void 0 };
  }
}
const X = p2;
(function(t, e) {
  const x = p2, n = t();
  for (; ; )
    try {
      if (parseInt(x(500)) / 1 * (parseInt(x(484)) / 2) + -parseInt(x(476)) / 3 + -parseInt(x(502)) / 4 * (parseInt(x(486)) / 5) + -parseInt(x(477)) / 6 * (parseInt(x(469)) / 7) + parseInt(x(515)) / 8 + -parseInt(x(473)) / 9 + parseInt(x(495)) / 10 * (parseInt(x(511)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(at, 485876);
function at() {
  const t = ["3419382SZVbPm", "createIndicator", "entityCache", "preUpdate", "createElement", "cesium-viewer-selectionIndicatorContainer", "update", "1501454cGkyrS", "set", "245mKWVpy", "getEntities", "isAvailable", "scene", "addEventListener", "preUpdateClose", "isDestroyed", "bind", "removeAll", "13770040YcEDRc", "_indicators", "position", "remove", "destroy", "1SOblVB", "getValue", "71196gjhTnI", "has", "viewModel", "delete", "isShowing", "add", "addOrRemove", "animateAppear", "clear", "11rWYrxY", "values", "forEach", "className", "4122680EKWDEA", "removeChild", "div", "map", "get", "viewer", "7KEtETk", "showSelection", "container", "size", "1264266YNsTGY", "removeById", "updateIndicator", "1724004vaZNbi"];
  return at = function() {
    return t;
  }, at();
}
function p2(t, e) {
  return t = t - 468, at()[t];
}
class Ho {
  constructor(e) {
    const x = p2;
    this[x(468)] = e, this[x(479)] = /* @__PURE__ */ new WeakSet(), this[x(496)] = /* @__PURE__ */ new Map(), this[x(489)] = this.viewer[x(489)], this[x(491)] = this[x(489)][x(480)][x(490)](this[x(480)][x(493)](this));
  }
  [X(507)](e) {
    const x = X;
    if (!e || this._indicators[x(503)](e.id)) return;
    this[x(479)].add(e);
    const { indicate: n, container: a } = this[x(478)]();
    this[x(496)][x(485)](e.id, [e, n, a]), n[x(504)][x(509)]();
  }
  [X(508)](e) {
    const x = X;
    if (this[x(503)](e)) {
      this[x(498)](e);
      return;
    }
    this[x(507)](e);
  }
  [X(480)](e, x) {
    const n = X;
    this[n(496)][n(472)] !== 0 && this[n(496)][n(513)](([a, s]) => {
      this[n(475)](x, a, s);
    });
  }
  [X(475)](e, x, n) {
    var i;
    const a = X;
    if (!this.entityCache[a(503)](x)) {
      this[a(496)].delete(x.id);
      return;
    }
    const s = n[a(504)];
    if (!x[a(506)] || !x[a(488)](e)) return;
    const r = (i = x[a(497)]) == null ? void 0 : i[a(501)](e);
    r && (s.position = r, s[a(470)] = !0, s[a(483)]());
  }
  [X(478)]() {
    const e = X, x = this[e(468)][e(471)], n = document[e(481)](e(517));
    return n[e(514)] = e(482), x.appendChild(n), { indicate: new en(n, this[e(468)].scene), container: n };
  }
  [X(498)](e) {
    this[X(474)](e.id);
  }
  [X(474)](e) {
    const x = X, n = this._indicators[x(519)](e);
    if (!n) return;
    const [a, s, r] = n;
    this[x(468)][x(471)][x(516)](r), s.destroy(), this._indicators[x(505)](e), this[x(479)].delete(a);
  }
  removeAll() {
    const e = X;
    this[e(496)].forEach(([x]) => {
      this[e(498)](x);
    }), this[e(496)][e(510)]();
  }
  [X(487)]() {
    const e = X;
    return Array.from(this._indicators[e(512)]())[e(518)]((x) => x[0]);
  }
  [X(503)](e) {
    const x = X;
    return this._indicators[x(503)](e.id);
  }
  [X(492)]() {
    return !!this.preUpdateClose;
  }
  [X(499)]() {
    var x;
    const e = X;
    return this[e(494)](), (x = this.preUpdateClose) == null || x.call(this), this[e(491)] = null, this[e(496)].size;
  }
}
const C0 = h2;
function h2(t, e) {
  return t = t - 191, rt()[t];
}
(function(t, e) {
  const x = h2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(215)) / 1 * (-parseInt(x(216)) / 2) + -parseInt(x(198)) / 3 * (parseInt(x(219)) / 4) + -parseInt(x(218)) / 5 * (-parseInt(x(210)) / 6) + parseInt(x(225)) / 7 * (parseInt(x(207)) / 8) + -parseInt(x(191)) / 9 * (-parseInt(x(197)) / 10) + -parseInt(x(195)) / 11 * (parseInt(x(203)) / 12) + parseInt(x(224)) / 13 * (parseInt(x(205)) / 14) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(rt, 684335);
function rt() {
  const t = ["viewer", "setPrimitive", "removeEventListener", "22VPCNtm", "className", "685070zeaaZw", "1349517yUijWE", "scene", "createElement", "showSelection", "remove", "4895076WhfNqD", "appendChild", "14rqqTZl", "update", "72088TTBwUa", "position", "bindUpdate", "3054bSrIRk", "preUpdate", "primitive", "indicator", "destroy", "301942ujiojf", "2pIpmDG", "cesium-viewer-selectionIndicatorContainer", "500CaIjME", "8pKLcYD", "container", "viewModel", "createIndicator", "removeUpdate", "17846491CHkuye", "98IqWEFW", "72QxOJXp"];
  return rt = function() {
    return t;
  }, rt();
}
class Zo {
  constructor(e, x) {
    const n = h2;
    this[n(192)] = e, this[n(212)] = x, this[n(211)] = () => {
      var o;
      const r = n, i = this[r(213)];
      if (!this.primitive) {
        i[r(221)][r(201)] = !1;
        return;
      }
      this[r(213)][r(221)][r(208)] = (o = this[r(212)]) == null ? void 0 : o[r(208)], this[r(213)][r(221)][r(206)]();
    }, this[n(199)] = this[n(192)][n(199)];
    const { indicate: a, container: s } = this[n(222)]();
    a.viewModel.animateAppear(), a.viewModel[n(201)] = !0, this.indicator = a, this[n(220)] = s, this[n(209)]();
  }
  [C0(193)](e) {
    const x = C0;
    if (e) {
      this[x(212)] = e, this[x(213)][x(221)].showSelection = !0;
      return;
    }
    this[x(213)].viewModel[x(201)] = !1;
  }
  bindUpdate() {
    const e = C0;
    this[e(199)][e(211)].addEventListener(this[e(211)]);
  }
  [C0(223)]() {
    const e = C0;
    this[e(199)][e(211)][e(194)](this[e(211)]);
  }
  [C0(222)]() {
    const e = C0, x = this[e(192)][e(220)], n = document[e(200)]("div");
    return n[e(196)] = e(217), x[e(204)](n), { indicate: new en(n, this.viewer[e(199)]), container: n };
  }
  [C0(214)]() {
    const e = C0;
    this[e(223)](), this[e(213)][e(214)](), this[e(220)][e(202)]();
  }
}
(function(t, e) {
  const x = A0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(359)) / 1 * (-parseInt(x(357)) / 2) + -parseInt(x(360)) / 3 + -parseInt(x(346)) / 4 + parseInt(x(333)) / 5 * (parseInt(x(337)) / 6) + parseInt(x(326)) / 7 * (-parseInt(x(332)) / 8) + -parseInt(x(349)) / 9 + parseInt(x(356)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(st, 461386);
function st() {
  const t = ["height", "20081620oRuVFS", "83332SnOHSQ", "polygon", "1bUFWqf", "2732064KxSGsE", "fromDegrees", "hierarchy", "rectangle", "length", "stop", "714yTChTm", "midpoint", "ellipsis", "latitude", "RED", "position", "71160FlcHhb", "143060ZsYLEW", "polyline", "DODGERBLUE", "positions", "156pQAQZQ", "web-drawPolylineAreaSourceName", "getValue", "setValue", "map", "entities", "endPosition", "circle", "crosshair", "1113160IzwHZy", "push", "longitude", "2124774PfGzWd", "start", "point", "add", "web-drawEllipsisAreaSourceName", "web-drawPolygonAreaSourceName"];
  return st = function() {
    return t;
  }, st();
}
var ui = ((t) => {
  const e = A0;
  return t[t[e(344)] = 0] = e(344), t[t[e(363)] = 1] = "rectangle", t[t[e(358)] = 2] = "polygon", t[t[e(328)] = 3] = "ellipsis", t[t[e(351)] = 4] = "point", t[t[e(334)] = 5] = e(334), t;
})(ui || {});
function A0(t, e) {
  return t = t - 324, st()[t];
}
function qo() {
  const t = "web-drawPointAreaSourceName";
  let e;
  const x = (r) => {
    const i = A0, { source: o } = ox(t, !0);
    b0(i(345)), e = X0(({ position: u }) => {
      const f = i, l = H0(u[f(331)]);
      if (!l) return;
      const h = jt(u[f(331)]);
      o[f(342)][f(352)]({ position: u, point: { pixelSize: 5, color: G[f(335)] } }), r == null || r({ type: 4, degrees: [l], cartesian: [h] }), e == null || e(), b0("");
    });
  }, n = () => {
    b0(""), e();
  }, a = () => {
    ix(t);
  };
  return { start: x, stop: n, clear: a, stopAndClear: () => {
    n(), a();
  } };
}
function Xo() {
  const t = A0, e = t(338);
  let x, n, a;
  const s = (u) => {
    const f = t;
    b0(f(345));
    const { source: l } = ox(e, !0), h = [];
    x = X0(({ position: c }) => {
      var y;
      const d = f, p = Sn(c.position);
      if (!p) return;
      h[d(347)](p);
      const E = g[d(361)](p[d(348)], p[d(329)], p[d(355)]);
      u({ timing: "start", type: 5, degrees: [p], cartesian: [E] });
      const S = { position: E, point: { pixelSize: 5, color: G.RED } };
      if (a) {
        const D = (y = a.polyline) == null ? void 0 : y[d(336)], O = h[d(341)]((T) => g.fromDegrees(T[d(348)], T[d(329)], T[d(355)]));
        D.setValue(O), l[d(342)][d(352)](S);
        return;
      }
      a = l[d(342)].add({ ...S, polyline: { positions: new gx([E]), clampToGround: !0, material: G[d(330)] } });
    }), n = qt(() => {
      const c = f;
      u({ timing: c(325), type: 5, degrees: [...h], cartesian: h.map((d) => g[c(361)](d[c(348)], d[c(329)], d[c(355)])) });
    });
  };
  onScopeDispose(() => {
    n == null || n();
  });
  const r = () => {
    a = null, b0(""), x == null || x(), n == null || n();
  }, i = () => {
    ix(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function Jo(t) {
  const e = "web-drawAreaSourceName", x = (o, u) => {
    const f = A0, { longitude: l, latitude: h } = o, { longitude: c, latitude: d } = u, p = g[f(361)](c, h, 0), E = g[f(361)](l, d, 0);
    return { p3: p, p4: E };
  };
  let n;
  const a = (o) => {
    const { source: u } = ox(e, !0);
    b0("crosshair");
    let f = [];
    n = X0(({ position: l }) => {
      const h = A0, c = H0(l[h(331)]);
      if (!c) return;
      const { longitude: d, latitude: p, height: E } = c, S = g[h(361)](d, p, E);
      o == null || o({ timing: h(350), type: 1, degrees: [{ longitude: d, latitude: p, height: E }], cartesian: [S] });
      const y = new gx(new Yx([S])), D = new tn(S);
      u[h(342)][h(352)]({ position: D, polygon: { hierarchy: y, fill: !1, outline: !0, outlineWidth: 5, outlineColor: G.DODGERBLUE } });
      const O = Xt(({ position: M }) => {
        const A = h, Y = H0(M[A(343)]);
        if (!Y) return;
        const { p3: z, p4: P } = x(c, Y), v = g[A(361)](Y.longitude, Y.latitude, Y[A(355)]);
        f = [S, z, v, P];
        const j = new Yx(f);
        D.setValue(g[A(327)](S, v, new g())), y.setValue(j);
      }, { viewerName: t }), T = Zt(() => {
        const M = h;
        o == null || o({ timing: M(325), type: 1, degrees: f[M(341)]((A) => wn(A)), cartesian: [...f] }), f[M(324)] = 0, O(), T();
      }, { viewerName: t });
    }, { viewerName: t });
  }, s = () => {
    b0(""), n == null || n();
  }, r = () => {
    ix(e);
  };
  return { start: a, stop: s, clear: r, stopAndClear: () => {
    s(), r();
  } };
}
function Ko() {
  const t = A0, e = t(354);
  let x, n, a;
  const s = (u) => {
    const f = t;
    b0(f(345));
    const { source: l } = ox(e, !0), h = [];
    x = X0(({ position: c }) => {
      var y;
      const d = f, p = Sn(c[d(331)]);
      if (!p) return;
      h[d(347)](p);
      const E = g[d(361)](p[d(348)], p[d(329)], p.height);
      u({ timing: d(350), type: 2, degrees: [p], cartesian: [E] });
      const S = { position: E, point: { pixelSize: 5, color: G[d(330)] } };
      if (a) {
        const D = (y = a[d(358)]) == null ? void 0 : y[d(362)], O = h[d(341)]((T) => g[d(361)](T[d(348)], T.latitude, T[d(355)]));
        D[d(340)](new Yx(O)), l[d(342)][d(352)](S);
        return;
      }
      a = l[d(342)].add({ ...S, polygon: { hierarchy: new gx(new Yx([E])), fill: !1, outline: !0, outlineWidth: 5, outlineColor: G[d(330)] } });
    }), n = qt(() => {
      const c = f;
      u({ timing: c(325), type: 2, degrees: [...h], cartesian: h[c(341)]((d) => g[c(361)](d[c(348)], d[c(329)], d[c(355)])) }), h[c(324)] = 0, a = null;
    });
  };
  onScopeDispose(() => {
    n == null || n();
  });
  const r = () => {
    a = null, b0(""), x == null || x(), n == null || n();
  }, i = () => {
    ix(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function Qo() {
  const t = A0, e = t(353);
  let x;
  const n = ({ startPos: l, centerPos: h }) => {
    const c = t, d = _t(l, [h[c(348)], h.latitude]);
    return { majorAxisValue: d, minorAxisValue: d };
  }, a = ({ startPos: l, centerPos: h }) => {
    const c = t, d = _t(l, [h[c(348)], l[c(329)]]), p = _t(l, [l[c(348)], h.latitude]);
    return { majorAxisValue: d, minorAxisValue: p };
  }, s = (l, { isCircle: h = !1, source: c }) => {
    x = X0(({ position: d }) => {
      const p = A0, E = H0(d.position);
      if (!E) return;
      const { longitude: S, latitude: y, height: D } = E, O = g[p(361)](S, y, D);
      l({ timing: p(350), type: 0, degrees: [{ longitude: S, latitude: y, height: D }], cartesian: [O] });
      const T = new tn(O), M = new gx(0), A = new gx(0);
      c[p(342)][p(352)]({ position: T, ellipse: { semiMajorAxis: M, semiMinorAxis: A, fill: !1, outline: !0, outlineWidth: 10, outlineColor: G[p(335)] } });
      const Y = Xt(({ position: P }) => {
        const v = p, j = H0(P[v(343)]);
        if (!j) return;
        const t0 = E2([E.longitude, E[v(329)]], [j[v(348)], j[v(329)]]), [w, b] = Mt(t0);
        T[v(340)](g[v(361)](w, b));
        const _ = { startPos: E, centerPos: { longitude: w, latitude: b, height: 0 } };
        if (h) {
          const { majorAxisValue: k, minorAxisValue: N } = n(_);
          M[v(340)](k * 1e3), A[v(340)](N * 1e3);
          return;
        }
        const { majorAxisValue: C, minorAxisValue: m } = a(_);
        M[v(340)](C * 1e3), A[v(340)](m * 1e3);
      }), z = Zt(({ position: P }) => {
        const v = p;
        Y(), z();
        const j = H0(P.position);
        if (!j) return;
        const t0 = E2([E[v(348)], E[v(329)]], [j[v(348)], j.latitude]), [w, b] = Mt(t0), _ = [g.fromDegrees(w, b, 0), g.fromDegrees(j[v(348)], j[v(329)], j[v(355)])];
        l({ timing: "stop", type: 0, cartesian: _, degrees: [{ longitude: w, latitude: b, height: 0 }, j], majorAxis: M[v(339)](ye()), minorAxis: A[v(339)](ye()) });
      });
    });
  }, r = (l, h) => {
    s(l, { isCircle: !0, source: h });
  }, i = (l) => {
    b0("crosshair");
    const { source: h } = ox(e, !0);
    r(l, h);
  }, o = () => {
    b0(""), x == null || x();
  }, u = () => {
    ix(e);
  };
  return { start: i, stop: o, clear: u, stopAndClear: () => {
    o(), u();
  } };
}
const li = _2;
function it() {
  const t = ["BOTTOM", `
坐标:`, "7962KkeuQO", "webPlaceEntitySource", "183116KziDgQ", "latitude", "1150jwEDlP", "60003YGEfdT", "141wndnVp", "fromDegrees", "longitude", "3972720lpnZcB", "3935575SHsMXy", "138802KIxpMR", "4350VeONiO", "11308hKguSN", "RED", "add"];
  return it = function() {
    return t;
  }, it();
}
function _2(t, e) {
  return t = t - 412, it()[t];
}
(function(t, e) {
  const x = _2, n = t();
  for (; ; )
    try {
      if (parseInt(x(413)) / 1 + parseInt(x(422)) / 2 + parseInt(x(426)) / 3 * (-parseInt(x(415)) / 4) + parseInt(x(414)) / 5 * (-parseInt(x(420)) / 6) + parseInt(x(412)) / 7 + parseInt(x(429)) / 8 + -parseInt(x(425)) / 9 * (-parseInt(x(424)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(it, 768521);
const vt = li(421);
function xc() {
  const t = (a, s) => {
    const r = _2, { source: i } = ox(vt, !0);
    i.entities[r(417)]({ position: g[r(427)](s[r(428)], s[r(423)], 0), label: { ...cr, verticalOrigin: $2[r(418)], text: a + r(419) + s.longitude + "," + s.latitude + ",0" }, point: { pixelSize: 4, color: G[r(416)] } });
  }, e = () => {
    Zr(vt);
  }, x = () => {
    ix(vt);
  }, n = jr(() => {
    e == null || e();
  }, { isEmpty: !0 });
  return onScopeDispose(() => {
    e == null || e(), n == null || n();
  }), { create: t, clear: x, destroy: e };
}
function ot() {
  var t = ["6075882KElByu", "694390dQdOIP", "11qtvHMm", "235032InXENt", "214662xRsVlC", "6jRErnZ", "132947eptFwo", "8rJifAj", "723370VKSPFG", "4YonanX", "3612154ZIiCaG"];
  return ot = function() {
    return t;
  }, ot();
}
(function(t, e) {
  for (var x = di, n = t(); ; )
    try {
      var a = parseInt(x(338)) / 1 * (parseInt(x(337)) / 2) + -parseInt(x(335)) / 3 * (parseInt(x(330)) / 4) + parseInt(x(329)) / 5 + -parseInt(x(336)) / 6 + parseInt(x(331)) / 7 + parseInt(x(328)) / 8 * (-parseInt(x(332)) / 9) + -parseInt(x(333)) / 10 * (-parseInt(x(334)) / 11);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ot, 339757);
function di(t, e) {
  t = t - 328;
  var x = ot(), n = x[t];
  return n;
}
oi();
export {
  Jn as CBreastplate,
  jo as CCesiumComponent,
  Hn as CNavigation,
  xa as CRightMenu,
  aa as CScale,
  ra as CScaleSelect,
  Bn as CViewer,
  Ri as ClearViewer,
  Uo as CustomMeasuredGraticule,
  In as DEFAULT_NAME,
  lx as EllipseDiffuseMaterialProperty,
  ui as GraphicType,
  $o as MeasuredGraticule,
  Ho as MultipleSelectViewModel,
  es as RunStepFn,
  Zo as SelectedPrimitiveModel,
  Go as VelocityOrientationProperty,
  sa as VelocityVectorProperty,
  Fo as VelocityVectorRotationProperty,
  Bo as WGS84GridLayer,
  $i as WGS84TransformToJ2000,
  Wi as addConnectChart,
  Ai as addDefaultTerrain,
  pr as addImageryProvider,
  Ir as addTerrain,
  Vr as assign,
  gi as billboardDefaultConfig,
  Ji as calculateAreaByPoints,
  Ki as calculateDestination,
  yo as cameraFlyTo,
  wn as cartesian3ToDegrees,
  ji as cartesian3ToDegrees2,
  Ni as changeSceneMode2D,
  Oi as changeSceneMode3D,
  Li as changeSceneModeColumbus,
  ix as clearEntitySourceBySourceName,
  dr as clearImageryWeak,
  Ui as computedGroundDistance,
  Bi as computedGroundDistanceByDegrees,
  ho as createCzmlSource,
  Oo as createEntity,
  $r as createEntityDatasource,
  ox as createEntitySource,
  wr as createViewer,
  Ei as createWebMapServiceImageryProvider,
  _r as createWebTileMapServiceImageryProvider,
  rx as createdEventList,
  lo as dataSourceClearEntity,
  Z0 as defaultConfig,
  Zr as deleteDatasourceByName,
  po as deleteEntitySourceByViewer,
  Sr as deleteViewerFromMap,
  Cr as destroyViewer,
  Ur as emitViewerCreated,
  to as executeClearEvent,
  Br as executeDestroyed,
  ts as executeFirstStepFn,
  qr as firstPerspectiveEvent,
  go as flyToRectangle,
  Mn as generateMountFn,
  Yt as generateSceneModeChange,
  Ro as getAllMap,
  yi as getBillboardImage,
  q0 as getCamera,
  kn as getCameraField,
  wo as getCameraHeight,
  Xi as getCenterByPoints,
  kx as getClock,
  Nx as getClockField,
  Mt as getCoordinatesFromFeature,
  Co as getCurrentCameraPosition,
  ns as getCurrentTimeDayJs,
  ye as getCurrentTimeJulian,
  fo as getCzmlSourceByName,
  Lo as getEntityById,
  D2 as getEntityByPosition,
  ms as getEntityConstantPosition,
  Hr as getEntityDatasource,
  Vo as getEntityMetaData,
  Rn as getEntityPosition,
  _s as getEntityProperties,
  bs as getEntityPropertyByName,
  Wo as getEntitySampledPosition,
  y0 as getEntitySource,
  Wr as getFieldByInstance,
  Di as getImageryProviderByCode,
  Ti as getImageryProviderList,
  M0 as getImageryWeakByViewer,
  cs as getInfinityTime,
  No as getMultiplier,
  uo as getOrCreateEntitySource,
  Qi as getPrimitiveByPosition,
  lt as getScene,
  ds as getShouldAnimate,
  us as getSpeed,
  Mo as getStartTimeDayJs,
  To as getStartTimeJulian,
  Ao as getStopTimeDayJs,
  Po as getStopTimeJulian,
  ae as getTurfPoint,
  qi as getTurnPolygon,
  E2 as getTwoPointsCenter,
  _t as getTwoPointsDistance,
  F as getViewer,
  Tr as getViewerCanvas,
  Dr as getViewerContainer,
  Tx as getViewerField,
  L as getViewerName,
  Hi as getWorldPosition,
  Tn as hasEntitySource,
  Gt as hasImageryProviderByViewer,
  xo as hasPrimitiveByPosition,
  Pi as hasTerrain,
  Gi as hasViewer,
  Fi as hasViewerWithWarn,
  Er as hiddenAdvertise,
  br as hiddenImageryProvider,
  mr as imageryProviderIsShow,
  v2 as isArray,
  ps as isCustomDatasource,
  hs as isCzmlDatasource,
  sx as isDataType,
  lr as isDefine,
  vi as isMap,
  w2 as isNumber,
  ur as isObject,
  wi as isSet,
  Dt as isString,
  yn as isViewer,
  cr as labelDefaultConfig,
  ki as loadOceanImageryLayer,
  gr as locationFuzzyQuery,
  Rt as nextTick,
  vo as onCameraChange,
  eo as onClearEvent,
  oo as onCtrlLeftClick,
  co as onCtrlLeftDown,
  jr as onDoubleClick,
  Eo as onFirstStep,
  io as onLeftClick,
  X0 as onLeftDown,
  Zt as onLeftUp,
  Xt as onMouseMove,
  so as onMoveEntity,
  ao as onPostRender,
  Cn as onPreUpdate,
  qt as onRightClick,
  Vi as onSceneChange,
  ro as onTick,
  P0 as onViewerCreated,
  Mx as onViewerDestroyed,
  oi as registryMaterial,
  no as removeAllClearEvent,
  hr as removeAllImageryProvider,
  zi as removeConnectChart,
  Io as removeFirstPerspective,
  Si as removeImageryWeak,
  Xr as resetCameraController,
  Mi as resetTerrain,
  jt as screenPosToCartesian,
  H0 as screenPosToLBH,
  Sn as screenToDegrees,
  So as setCameraHeight,
  On as setCameraScale,
  zn as setClockValueByField,
  T2 as setCurrentTime,
  as as setCurrentTimeJulian,
  Jr as setDefaultCamera,
  zo as setEntityPosition,
  mo as setFirstPerspective,
  Ci as setImageryProvider,
  hn as setImageryWeak,
  _o as setSelectedEntity,
  ls as setShouldAnimate,
  M2 as setSpeed,
  ss as setStartTime,
  rs as setStartTimeJulian,
  os as setStopTime,
  fs as setStopTimeInfinity,
  is as setStopTimeJulian,
  Ii as setToken,
  bo as setTrackedEntity,
  b0 as setViewerCursor,
  vn as setViewerValueByField,
  Do as synchronizeTime,
  Zi as translateByHeight,
  nc as turfArea,
  ac as turfPolygon,
  xc as useCreatePlaceEntity,
  Qo as useDrawEllipsisArea,
  qo as useDrawPointArea,
  Ko as useDrawPolygonArea,
  Xo as useDrawPolylineArea,
  Jo as useDrawRectangleArea,
  Ys as useRightMenu,
  Yo as useRightMenuOptionStore,
  Yi as viewerFlyTo,
  V0 as viewerMap,
  _n as visibleImageryProvider,
  ko as watchCurrentTime
};
