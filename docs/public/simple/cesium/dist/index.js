import * as yx from "cesium";
import { SceneMode as h0, GeographicTilingScheme as Xt, Ion as ha, LabelStyle as n2, Color as W, HorizontalOrigin as Bt, VerticalOrigin as a2, Cartesian2 as Y, Entity as ba, ScreenSpaceEventType as D0, KeyboardEventModifier as r2, Viewer as s2, CzmlDataSource as i2, CustomDataSource as Jt, DefaultProxy as ma, WebMapServiceImageryProvider as Ia, WebMapTileServiceImageryProvider as ga, CesiumTerrainProvider as ya, EllipsoidTerrainProvider as o2, Rectangle as Px, GeoJsonDataSource as va, PolylineGraphics as wa, ArcType as Ca, CameraEventType as rx, Camera as Sa, Ellipsoid as Jx, Math as l0, Cartesian3 as g, JulianDate as a0, PolygonHierarchy as qx, ConstantProperty as kx, ConstantPositionProperty as c2, Cartographic as e0, EllipsoidGeodesic as qt, Ray as f2, Plane as u2, IntersectionTests as Ea, defined as R, SceneTransforms as Ma, VelocityVectorProperty as Ta, Event as Nx, ExtrapolationType as Ut, Transforms as Pa, Matrix3 as l2, Quaternion as ka, ReferenceFrame as An, DeveloperError as d2, GridImageryProvider as Da, destroyObject as Qt, Material as V, createPropertyDescriptor as E0, Property as p0, PolylineCollection as Aa, LabelCollection as Na, PrimitiveCollection as p2, SelectionIndicator as _2, ImageryLayer as Oa, UrlTemplateImageryProvider as Va, CesiumWidget as La, HeadingPitchRange as Ra, Model as Ga, Matrix4 as Wa } from "cesium";
import { onScopeDispose as Kt, defineComponent as S0, shallowRef as xn, provide as za, onMounted as h2, onBeforeUnmount as Ox, openBlock as _0, createElementBlock as G0, renderSlot as jt, useCssVars as Fa, ref as Q0, computed as en, onUnmounted as b2, createElementVNode as g0, toDisplayString as tn, createCommentVNode as Ba, toValue as wx, nextTick as nn, resolveComponent as Dx, createBlock as vt, withModifiers as Ua, unref as wt, watch as Ax, reactive as ja, h as Ha, withDirectives as Ya, Fragment as m2, renderList as I2, normalizeStyle as $a, vShow as Za, normalizeProps as Nn, guardReactiveProps as On, withCtx as Qx, createVNode as Ht, mergeProps as Xa, createSlots as Ja } from "vue";
import { storeToRefs as qa, defineStore as g2 } from "pinia";
import Qa from "cesium-navigation-es6";
import { ElMessage as Ka } from "element-plus";
import { polygon as y2, area as xr, destination as er, featureCollection as tr, center as nr, point as Kx, midpoint as ar, distance as rr } from "@turf/turf";
import { area as Sc, polygon as Ec } from "@turf/turf";
const Nt = v2;
(function(t, e) {
  const x = v2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(311)) / 1 + -parseInt(x(312)) / 2 * (-parseInt(x(306)) / 3) + parseInt(x(317)) / 4 * (-parseInt(x(316)) / 5) + -parseInt(x(308)) / 6 + parseInt(x(314)) / 7 * (parseInt(x(318)) / 8) + parseInt(x(310)) / 9 + parseInt(x(309)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xe, 402282);
function v2(t, e) {
  return t = t - 306, xe()[t];
}
function xe() {
  const t = ["SCENE2D", "10MubYva", "294908mtGkZP", "2369672RBaWVX", "103623ekYBfU", "/map/terrain/", "3549552tSzbxu", "10185830RHzknX", "2845161KjgFiS", "593216QeXpBi", "6IiBkng", "9999/12/31 23:59:59", "7wAWQxd"];
  return xe = function() {
    return t;
  }, xe();
}
const y0 = { DEFAULT_VIEWER_NAME: "cesium-box", defaultImageryUrl: { url: "/map/globe/{z}/{x}/{y}.jpg", tilingScheme: new Xt(), minimumLevel: 0, maximumLevel: 19 }, defaultTerrainUrl: Nt(307), viewerConfig: { infoBox: !1, animation: !1, homeButton: !1, geocoder: !1, shouldAnimate: !1, baseLayerPicker: !1, fullscreenButton: !1, timeline: !1, sceneMode: h0[Nt(315)], selectionIndicator: !0, navigationHelpButton: !1, sceneModePicker: !1, terrain: void 0 }, synchronizeConfig: { maxTime: 5, interval: 1e3, minSpeed: 1e-3, cacheSize: 3, defaultStopTime: Nt(313) }, eventConfig: { clickAndDbClickInterval: 100, defaultLeftClick: !0, defaultRightClick: !1, defaultClearClick: !1, defaultDoubleClick: !1, defaultMouseMove: !1, defaultLeftUp: !1, defaultLeftDown: !1 }, navigation: { duration: 3, enableCompass: !0, enableDistanceLegend: !0, enableCompassOuterRing: !0, enableZoomControls: !0 } };
(function(t, e) {
  for (var x = w2, n = t(); ; )
    try {
      var a = -parseInt(x(476)) / 1 * (-parseInt(x(473)) / 2) + -parseInt(x(474)) / 3 + -parseInt(x(480)) / 4 + parseInt(x(481)) / 5 * (parseInt(x(470)) / 6) + -parseInt(x(475)) / 7 + parseInt(x(478)) / 8 * (parseInt(x(472)) / 9) + -parseInt(x(477)) / 10 * (-parseInt(x(471)) / 11);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ee, 932616);
function w2(t, e) {
  t = t - 470;
  var x = ee(), n = x[t];
  return n;
}
function Bi(t) {
  var e = w2;
  ha[e(479)] = t;
}
function ee() {
  var t = ["5916512iwdRtb", "15EHlByM", "2038038sEuEPO", "35646963NdmYWr", "45jfGDfl", "18vpjRQU", "5106576fTRiUn", "8788346xdJQOq", "106563zpOhpa", "10GJnMQS", "241112OUACLt", "defaultAccessToken"];
  return ee = function() {
    return t;
  }, ee();
}
const Hx = C2;
(function(t, e) {
  const x = C2, n = t();
  for (; ; )
    try {
      if (parseInt(x(255)) / 1 * (parseInt(x(260)) / 2) + parseInt(x(253)) / 3 + parseInt(x(259)) / 4 + parseInt(x(252)) / 5 * (parseInt(x(248)) / 6) + -parseInt(x(256)) / 7 * (-parseInt(x(251)) / 8) + parseInt(x(249)) / 9 + -parseInt(x(257)) / 10 * (parseInt(x(258)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(te, 278171);
function te() {
  const t = ["FILL_AND_OUTLINE", "LEFT", "624ZYAxVT", "3648447VToSeH", "CENTER", "1144fqhHoI", "9185OYjsPS", "971628XaojrS", "14px sans-serif", "2Gbtuho", "9219SkhjFO", "14783880JafXdG", "11MpsAdn", "646908sklOva", "486194PGtdPa"];
  return te = function() {
    return t;
  }, te();
}
function C2(t, e) {
  return t = t - 247, te()[t];
}
const sr = { font: Hx(254), pixelOffset: new Y(18, 0), verticalOrigin: a2[Hx(250)], horizontalOrigin: Bt[Hx(247)], fillColor: W.WHITE, style: n2[Hx(261)] };
(function(t, e) {
  const x = ir, n = t();
  for (; ; )
    try {
      if (-parseInt(x(279)) / 1 * (-parseInt(x(278)) / 2) + -parseInt(x(271)) / 3 + -parseInt(x(272)) / 4 + parseInt(x(273)) / 5 + parseInt(x(277)) / 6 + parseInt(x(274)) / 7 * (-parseInt(x(276)) / 8) + -parseInt(x(275)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ne, 658344);
const Ui = { scale: 1 };
function ir(t, e) {
  return t = t - 271, ne()[t];
}
async function ji(t) {
  return t;
}
function ne() {
  const t = ["1640032djYdGZ", "2613005RxVVsU", "3845849EAsrsO", "4421853hOXWZC", "8VWOiGK", "7026834SPfpNg", "4962JRdpIj", "463FcNssd", "2200101dEhNUz"];
  return ne = function() {
    return t;
  }, ne();
}
(function(t, e) {
  const x = b0, n = t();
  for (; ; )
    try {
      if (parseInt(x(448)) / 1 * (-parseInt(x(450)) / 2) + -parseInt(x(441)) / 3 + -parseInt(x(468)) / 4 * (parseInt(x(459)) / 5) + parseInt(x(460)) / 6 + parseInt(x(465)) / 7 + -parseInt(x(458)) / 8 * (-parseInt(x(453)) / 9) + parseInt(x(463)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ae, 213160);
function b0(t, e) {
  return t = t - 441, ae()[t];
}
var or = ((t) => {
  const e = b0;
  return t[t[e(454)] = 0] = e(454), t[t.emptyArea = 1] = e(445), t[t[e(470)] = 2] = e(470), t;
})(or || {});
const an = /* @__PURE__ */ new Map();
function cr(t) {
  return t[b0(446)] ? 0 : t.isEmpty ? 1 : 2;
}
function ae() {
  const t = ["emptyArea", "isEntity", "viewerName", "12ZKDEJi", "from", "37424rEEihF", "endPosition", "forEach", "158832ezaOEz", "entityArea", "isRegistry", "setInputAction", "areaEventMap", "64lZoOID", "163445sjIXRD", "921930OJrCHu", "get", "pick", "1384780GofRGj", "position", "2255652fwWUOF", "set", "add", "12EAXGpx", "scene", "globalArea", "drillPick", "659346tcnVnj", "has", "MOUSE_MOVE", "delete"];
  return ae = function() {
    return t;
  }, ae();
}
function rn(t, e = L()) {
  const x = b0;
  return !t[x(442)](e) && (t[x(466)](e, /* @__PURE__ */ new Map()), Lx(() => t[x(444)](e), { viewerName: e })), t[x(461)](e);
}
function sn(t, e, x) {
  const n = b0, a = x ? e + "_" + x : e;
  return !t[n(442)](a) && t[n(466)](a, { areaEventMap: /* @__PURE__ */ new Map(), isRegistry: !1 }), t.get(a);
}
function Cx(t, e) {
  const x = b0;
  return !t.has(e) && t[x(466)](e, /* @__PURE__ */ new Set()), t[x(461)](e);
}
function fr(t, e, x, n) {
  const a = rn(an, t), s = sn(a, e, n), r = s.areaEventMap;
  return Cx(r, x);
}
function z0(t, e) {
  return function(x, n) {
    const a = b0, s = cr(n ?? {});
    return w0((r) => {
      const i = b0, o = L(n == null ? void 0 : n.viewerName), c = rn(an, o), u = sn(c, t, e), l = u[i(457)];
      Cx(l, s)[i(467)](x), !u[i(455)] && ur(r, o, t, e);
    }, n == null ? void 0 : n[a(447)]), () => {
      const r = a;
      fr(L(n == null ? void 0 : n[r(447)]), t, s, e)[r(444)](x);
    };
  };
}
function ur(t, e, x, n) {
  const a = b0;
  t.screenSpaceEventHandler[a(456)]((s) => {
    const r = a;
    e = L(e);
    const i = rn(an, e), o = sn(i, x, n), c = o[r(457)];
    let u;
    x === D0[r(443)] && (u = Vn(s[r(451)], t)), u = Vn(s[r(464)], t), u ? Cx(c, 0)[r(452)]((f) => f({ entity: u, position: s })) : Cx(c, 1)[r(452)]((f) => f({ position: s })), Cx(c, 2)[r(452)]((_) => _({ position: s }));
  }, x, n);
}
function Vn(t, e) {
  var a;
  const x = b0;
  if (!t) return null;
  const n = (a = e == null ? void 0 : e[x(469)]) == null ? void 0 : a[x(462)](t, 30, 30);
  return n && lr(n == null ? void 0 : n.id) && n.id;
}
function Hi(t, e) {
  const x = b0;
  if (!t) return null;
  const n = e[x(469)].pick(t);
  return n && n.primitive;
}
function Yi(t, e) {
  const x = b0;
  if (!t) return null;
  const n = e.scene[x(462)](t);
  if (n != null && n.primitive) return n;
}
function lr(t) {
  return t instanceof ba;
}
function Ct(t, e) {
  return t = t - 327, re()[t];
}
(function(t, e) {
  const x = Ct, n = t();
  for (; ; )
    try {
      if (parseInt(x(328)) / 1 + -parseInt(x(327)) / 2 + parseInt(x(333)) / 3 * (parseInt(x(337)) / 4) + -parseInt(x(339)) / 5 * (-parseInt(x(331)) / 6) + parseInt(x(340)) / 7 + parseInt(x(335)) / 8 + -parseInt(x(330)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(re, 157465);
const Z0 = /* @__PURE__ */ new WeakMap();
function $i(t, e) {
  const x = Ct;
  return nextTick()[x(338)](() => {
    const n = x, { viewerName: a } = e ?? {}, s = z(a);
    !Z0[n(334)](s) && (Z0.set(s, /* @__PURE__ */ new Set()), Lx(() => Z0[n(341)](s), { viewerName: L(a) })), Z0.get(s).add(t);
  }), () => {
    var n;
    return (n = Z0.get(z(e == null ? void 0 : e[x(332)]))) == null ? void 0 : n[x(341)](t);
  };
}
function re() {
  const t = ["10mYgESf", "917945kNjlaQ", "delete", "get", "131252lGaNop", "533IkqScb", "clear", "4744188RmNdWy", "848712oQKqoI", "viewerName", "7851GKZOzP", "has", "2287424FnrGpa", "forEach", "76ISLBxQ", "then"];
  return re = function() {
    return t;
  }, re();
}
function Zi(t) {
  var n;
  const e = Ct, x = z(t);
  (n = Z0[e(342)](x)) == null || n[e(336)]((a) => {
    const s = z();
    a(s);
  });
}
function Xi(t) {
  var x;
  const e = Ct;
  (x = Z0[e(342)](z(t == null ? void 0 : t.viewerName))) == null || x[e(329)]();
}
(function(t, e) {
  const x = St, n = t();
  for (; ; )
    try {
      if (parseInt(x(300)) / 1 + parseInt(x(297)) / 2 + -parseInt(x(296)) / 3 * (parseInt(x(295)) / 4) + parseInt(x(301)) / 5 + parseInt(x(299)) / 6 + -parseInt(x(304)) / 7 * (-parseInt(x(298)) / 8) + -parseInt(x(294)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(se, 939864);
function S2(t, e) {
  const { viewerName: x } = e ?? {};
  let n;
  return w0((a) => {
    const s = St;
    n = a.scene.preUpdate[s(303)](t);
  }, { viewerName: x }), n;
}
function se() {
  const t = ["465112KmVWmY", "42uiAvug", "2156508ozUGxA", "8shRgLd", "2413710epLlGi", "1213632rBgcTu", "5496590ZyjPmB", "onTick", "addEventListener", "3365215OgwuUS", "15358302UZxfEL"];
  return se = function() {
    return t;
  }, se();
}
function Ji(t, e) {
  const x = St, { viewerName: n } = e ?? {}, a = Pt(n), s = a.postRender[x(303)](t);
  return () => s;
}
function St(t, e) {
  return t = t - 294, se()[t];
}
function qi(t, e) {
  const x = St, { viewerName: n } = e ?? {};
  return zx(n)[x(302)][x(303)](t);
}
(function(t, e) {
  const x = Zx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(342)) / 1 * (parseInt(x(350)) / 2) + parseInt(x(351)) / 3 + parseInt(x(348)) / 4 + -parseInt(x(354)) / 5 * (parseInt(x(353)) / 6) + parseInt(x(345)) / 7 + parseInt(x(357)) / 8 * (parseInt(x(347)) / 9) + -parseInt(x(343)) / 10 * (parseInt(x(356)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ie, 553730);
function Qi(t, e) {
  const x = Zx, n = /* @__PURE__ */ new Set(), a = e == null ? void 0 : e[x(341)];
  return w0(() => {
    const s = x, r = ex(({ entity: i }) => {
      const o = Zx;
      if (!(a ? a(i) : !1)) return;
      const u = fn(({ position: _ }) => {
        var p;
        const f = Zx, d = vn(_[f(346)]);
        d && ((p = rs(i)) == null || p[f(344)](d));
      });
      n[o(352)](u);
      const l = on(({ position: _ }) => {
        u(), t == null || t({ entity: i, position: _ }), l();
      });
      n.add(l);
    }, { isEntity: !0 });
    n[s(352)](r);
  }), () => {
    const s = x;
    n[s(355)]((r) => r == null ? void 0 : r()), n[s(349)]();
  };
}
function Zx(t, e) {
  return t = t - 341, ie()[t];
}
function ie() {
  const t = ["add", "4152768zMASyh", "5OsRKZs", "forEach", "12387727VkONLT", "10992XUNphA", "condition", "101442pGjtcR", "10gxvlNU", "setValue", "4068680zvADpR", "endPosition", "4419SUztgN", "1010112NfTCEB", "clear", "4FgovkI", "3199491DbpIxZ"];
  return ie = function() {
    return t;
  }, ie();
}
const K0 = E2;
(function(t, e) {
  const x = E2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(204)) / 1 * (-parseInt(x(211)) / 2) + -parseInt(x(199)) / 3 * (-parseInt(x(209)) / 4) + parseInt(x(207)) / 5 + -parseInt(x(197)) / 6 + -parseInt(x(203)) / 7 + -parseInt(x(202)) / 8 * (-parseInt(x(208)) / 9) + -parseInt(x(201)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(oe, 646581);
function E2(t, e) {
  return t = t - 197, oe()[t];
}
const dr = z0(D0[K0(210)]), Ki = z0(D0[K0(210)], r2[K0(200)]);
function oe() {
  const t = ["6129390RLJhPF", "24Mzfxgn", "273840avnfTu", "133iiMzec", "RIGHT_CLICK", "LEFT_DOWN", "3777700jDOlyq", "534321AVrxfn", "1015268XQlWUb", "LEFT_CLICK", "7468AdRqTp", "5358480xNsOOm", "LEFT_UP", "9YVJRWd", "CTRL"];
  return oe = function() {
    return t;
  }, oe();
}
const ex = z0(D0.LEFT_DOWN), xo = z0(D0[K0(206)], r2[K0(200)]), on = z0(D0[K0(198)]), cn = z0(D0[K0(205)]), pr = z0(D0.LEFT_DOUBLE_CLICK), fn = z0(D0.MOUSE_MOVE), m0 = Et;
(function(t, e) {
  const x = Et, n = t();
  for (; ; )
    try {
      if (-parseInt(x(506)) / 1 + parseInt(x(522)) / 2 * (parseInt(x(512)) / 3) + -parseInt(x(517)) / 4 * (parseInt(x(510)) / 5) + parseInt(x(514)) / 6 * (parseInt(x(523)) / 7) + -parseInt(x(498)) / 8 + -parseInt(x(500)) / 9 + parseInt(x(524)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ce, 213162);
const R0 = /* @__PURE__ */ new Map();
function ce() {
  const t = ["名称为", "set", "1620555ehlfBN", "canvas", "657PAHfiM", "flyTo", "894hllWaP", "container", "delete", "4VpCkUc", "cursor", "DEFAULT_VIEWER_NAME", "display", "none", "3554JHjcRA", "5180ycINJP", "4665210jnWBRa", "939632wNISFE", "get", "2684844EpUvzG", "warn", " 的视图已经存在", "style", "destroy", "has", "12901xvfevm", "请先创建Viewer"];
  return ce = function() {
    return t;
  }, ce();
}
const { viewerConfig: _r } = y0;
function hr(t, e) {
  const x = Et;
  if (R0.has(t)) return console.warn(x(508) + t + x(502)), R0[x(499)](t);
  R0[x(509)](t, new s2(t, ys({}, _r, e ?? {})));
  const n = R0[x(499)](t);
  return wr(t, n), Ir(n), n;
}
function z(t) {
  const e = Et, x = t ?? y0[e(519)];
  return M2(x) ? x : R0.get(x);
}
function L(t) {
  return t ?? y0.DEFAULT_VIEWER_NAME;
}
function br(t = y0[m0(519)]) {
  R0[m0(516)](t);
}
function mr(t = y0[m0(519)]) {
  var n;
  const e = m0, x = z(t);
  vr(t), (n = z(x)) == null || n[e(504)](), br(t);
}
function eo() {
}
function to(t = y0[m0(519)]) {
  return R0[m0(505)](t);
}
function no(t) {
  const e = m0;
  return !t || !M2(t) ? (console[e(501)](e(507)), !1) : !0;
}
function M2(t) {
  return t instanceof s2;
}
function Et(t, e) {
  return t = t - 498, ce()[t];
}
function Vx(t) {
  return function(e) {
    var x;
    return (x = z(e)) == null ? void 0 : x[t];
  };
}
function Ir(t) {
  const e = m0, x = z(t).bottomContainer;
  x[e(503)][e(520)] = e(521);
}
function ao(t, e, x) {
  const n = m0;
  z(x)[n(513)](t, e);
}
const gr = Vx(m0(515)), yr = Vx(m0(511));
function o0(t = "", e) {
  const x = m0, n = yr(e);
  n && (n[x(503)][x(518)] = t);
}
function T2(t) {
  return function(e, x) {
    z(x)[t] = e;
  };
}
function fe() {
  const t = ["set", "forEach", "53474RdWXpI", "1474bpLFiJ", "5418IGHJZW", "14526JARRNf", "7877904EgZAbw", "get", "6036niJSsr", "5UiMwfT", "1VbHvVl", "2247bVbTxP", "3641703KblXHv", "380PefTTS", "1763888LJkrWV", "has"];
  return fe = function() {
    return t;
  }, fe();
}
(function(t, e) {
  const x = un, n = t();
  for (; ; )
    try {
      if (parseInt(x(127)) / 1 * (-parseInt(x(119)) / 2) + parseInt(x(129)) / 3 + -parseInt(x(131)) / 4 * (-parseInt(x(126)) / 5) + parseInt(x(121)) / 6 * (parseInt(x(128)) / 7) + -parseInt(x(123)) / 8 + parseInt(x(122)) / 9 * (-parseInt(x(130)) / 10) + parseInt(x(120)) / 11 * (parseInt(x(125)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fe, 939331);
function un(t, e) {
  return t = t - 116, fe()[t];
}
const Sx = /* @__PURE__ */ new Map();
function vr(t = L()) {
  var n;
  const e = un, x = z(t);
  (n = Sx[e(124)](t)) == null || n[e(118)]((a) => a(x)), Sx.delete(t);
}
function Lx(t, e) {
  const x = un, n = L(e == null ? void 0 : e.viewerName);
  !Sx[x(116)](n) && Sx[x(117)](n, /* @__PURE__ */ new Set()), Sx.get(n).add(t);
}
(function(t, e) {
  const x = ln, n = t();
  for (; ; )
    try {
      if (-parseInt(x(253)) / 1 + -parseInt(x(262)) / 2 * (parseInt(x(263)) / 3) + parseInt(x(260)) / 4 + parseInt(x(261)) / 5 + -parseInt(x(266)) / 6 * (parseInt(x(258)) / 7) + parseInt(x(265)) / 8 + parseInt(x(254)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ue, 610120);
function ln(t, e) {
  return t = t - 252, ue()[t];
}
const lx = /* @__PURE__ */ new Map();
function ue() {
  const t = ["2BtVSzH", "842709VkrbFF", "forEach", "445544nSEogX", "5765460FGbeXX", "delete", "has", "179707HCmTFk", "1973862xbdAjW", "set", "add", "viewerName", "7GHYQMY", "get", "3074908MIaDKB", "4939510CGVFXQ"];
  return ue = function() {
    return t;
  }, ue();
}
function w0(t, e) {
  const x = ln, n = L(cs(e) ? e[x(257)] : e), a = z(L(n));
  if (a) return t(a);
  !lx[x(252)](n) && lx[x(255)](n, /* @__PURE__ */ new Set()), lx[x(259)](n)[x(256)](t);
}
function wr(t, e) {
  const x = ln, n = lx.get(t);
  n && n[x(264)]((a) => a(e)), lx[x(267)](t);
}
(function(t, e) {
  const x = v0, n = t();
  for (; ; )
    try {
      if (parseInt(x(254)) / 1 * (-parseInt(x(249)) / 2) + -parseInt(x(255)) / 3 * (-parseInt(x(241)) / 4) + parseInt(x(258)) / 5 * (-parseInt(x(260)) / 6) + parseInt(x(247)) / 7 * (-parseInt(x(243)) / 8) + -parseInt(x(252)) / 9 + -parseInt(x(262)) / 10 * (parseInt(x(257)) / 11) + parseInt(x(261)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(le, 562435);
function le() {
  const t = ["forEach", "add", "1313608tMpSKf", "请输入datasource 名称", "16xgwekM", "removeAll", "warn", "remove", "1847860RiaIJR", "get", "10fvQlpg", "dataSources", "entities", "8021745aVhBpo", "delete", "55709XFzBrp", "6YhbRel", "has", "1695969IppOZe", "11715LGUfyl", "values", "2412ezWgDG", "43494960tbSvKv", "70Nxnlfn", "set"];
  return le = function() {
    return t;
  }, le();
}
const T0 = /* @__PURE__ */ new Map();
function P2(t, e, x = L()) {
  const n = v0;
  !T0[n(256)](x) && (T0[n(263)](x, /* @__PURE__ */ new Map()), Lx(() => T0[n(253)](x), { viewerName: x })), T0[n(248)](x)[n(263)](t, e);
}
function v0(t, e) {
  return t = t - 240, le()[t];
}
function k2(t, e = L()) {
  var n;
  return (n = T0[v0(248)](e)) == null ? void 0 : n.has(t);
}
function C0(t, e = L()) {
  var n;
  const x = v0;
  return (n = T0.get(e)) == null ? void 0 : n[x(248)](t);
}
const ro = C0;
function Cr(t, e = L()) {
  const x = v0;
  if (!t) {
    console[x(245)](x(242));
    return;
  }
  const n = new Jt(t);
  return P2(t, n, e), n;
}
function so(t, e = L()) {
  const x = v0;
  if (!k2(t, e)) {
    const n = Cr(t, e);
    z(e)[x(250)][x(240)](n);
  }
  return C0(t, e);
}
function Sr(t, e = L()) {
  return C0(t, e);
}
function Er(t, e = L()) {
  var s;
  const x = v0, n = Sr(t, e);
  if (!n) return;
  z(e).dataSources[x(246)](n), (s = T0[x(248)](e)) == null || s[x(253)](t);
}
function io(t = L()) {
  const e = v0, x = T0[e(248)](t);
  x && Array.from(x[e(259)]())[e(264)]((n) => {
    n[e(251)].removeAll();
  });
}
function oo(t) {
  T0[v0(253)](t);
}
function dx(t, e = L()) {
  var n;
  const x = v0;
  (n = C0(t, e)) == null || n[x(251)][x(244)]();
}
function px(t, e = !1, x) {
  let n;
  C0(t) ? n = C0(t) : n = new Jt(t);
  const a = D2(t, n);
  return e && a(x), { source: n, mount: a };
}
function co(t, e = !1) {
  let x;
  C0(t) ? x = C0(t) : x = new i2(t);
  const n = D2(t, x);
  return e && n(), { source: x, mount: n };
}
function D2(t, e) {
  return function(x = L()) {
    w0((n) => {
      const a = v0;
      k2(t, x) || (n[a(250)][a(240)](e), P2(t, e, x));
    }, { viewerName: x });
  };
}
(function(t, e) {
  const x = c0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(484)) / 1 + -parseInt(x(497)) / 2 + -parseInt(x(508)) / 3 + -parseInt(x(483)) / 4 * (parseInt(x(473)) / 5) + parseInt(x(472)) / 6 + -parseInt(x(488)) / 7 + parseInt(x(506)) / 8 * (parseInt(x(502)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(de, 106607);
const Yt = /* @__PURE__ */ new Map();
function A2(t, e, x = L()) {
  var a;
  const n = c0;
  !P0(x) && (Yt[n(475)](x, /* @__PURE__ */ new Map()), Lx(() => Yt[n(480)](x), { viewerName: x })), (a = P0(x)) == null || a[n(475)](t, e);
}
function Mr(t = L()) {
  var x;
  const e = c0;
  (x = P0(t)) == null || x[e(486)]();
}
function fo(t, e = L()) {
  var n;
  const x = c0;
  (n = P0(e)) == null || n[x(480)](t);
}
function c0(t, e) {
  return t = t - 468, de()[t];
}
function P0(t = L()) {
  return Yt[c0(485)](t);
}
function Tr(t, e, x = L()) {
  const n = c0, a = z(x);
  if (dn(t, x)) return N2(t), !1;
  const s = a.scene[n(474)][n(470)](e);
  A2(t, { imagery: e, imageLayer: s });
}
function uo(t, e, x = L()) {
  const n = c0, a = z(x);
  if (dn(t, x)) return !1;
  Pr(x);
  const s = a[n(492)].imageryLayers[n(470)](e);
  A2(t, { imagery: e, imageLayer: s });
}
function Pr(t) {
  const e = c0;
  z(t)[e(492)][e(474)][e(498)](), Mr(t);
}
function lo(t) {
  const e = c0, x = { proxy: new ma("/proxy/"), parameters: { service: e(482), version: "1.3.0", transparent: !0, format: e(476) }, ...t };
  return new Ia(x);
}
function kr(t) {
  const e = c0;
  return new ga({ tileMatrixLabels: [e(503), e(504), e(489), "EPSG:4326:3", e(501), e(494), e(477), e(471), "EPSG:4326:8", e(469), e(491), "EPSG:4326:11", e(507), e(499), e(479), "EPSG:4326:15", e(500), e(505), e(478), e(509), e(490), e(496)], format: "image/png", tileMatrixSetID: e(493), ...t });
}
function dn(t, e = L()) {
  var n;
  const x = c0;
  return (n = P0(e)) == null ? void 0 : n[x(468)](t);
}
function po(t, e = L()) {
  var n;
  const x = c0;
  return (n = P0(e)) == null ? void 0 : n[x(485)](t);
}
const Dr = O2(!1), N2 = O2(!0);
function de() {
  const t = ["EPSG:4326:4", "1863189ZXduPX", "EPSG:4326:0", "EPSG:4326:1", "EPSG:4326:17", "24dvKLbY", "EPSG:4326:12", "585732iWCHpP", "EPSG:4326:19", "has", "EPSG:4326:9", "addImageryProvider", "EPSG:4326:7", "1024014kaHHjH", "50jomJTl", "imageryLayers", "set", "image/png", "EPSG:4326:6", "EPSG:4326:18", "EPSG:4326:14", "delete", "imageryProvider", "WMS", "64848hjfhru", "143707EECfUc", "get", "clear", "show", "902552stncGX", "EPSG:4326:2", "EPSG:4326:20", "EPSG:4326:10", "scene", "EPSG:4326", "EPSG:4326:5", "imageLayer", "EPSG:4326:21", "110236CuQLxM", "removeAll", "EPSG:4326:13", "EPSG:4326:16"];
  return de = function() {
    return t;
  }, de();
}
function Ar(t, e = L()) {
  var a;
  const x = c0, n = (a = P0(e)) == null ? void 0 : a[x(485)](t);
  return n == null ? void 0 : n.imageLayer[x(487)];
}
function O2(t) {
  return function(e, x = L()) {
    var s;
    const n = c0, a = (s = P0(x)) == null ? void 0 : s.get(e);
    a != null && a[n(495)] && (a[n(495)][n(487)] = t, a[n(495)][n(481)] && (a[n(495)][n(481)].show = t));
  };
}
function _o(t = L()) {
  return P0(t);
}
(function(t, e) {
  const x = Rx, n = t();
  for (; ; )
    try {
      if (parseInt(x(254)) / 1 * (-parseInt(x(247)) / 2) + -parseInt(x(260)) / 3 + -parseInt(x(267)) / 4 + -parseInt(x(248)) / 5 * (parseInt(x(261)) / 6) + -parseInt(x(264)) / 7 * (parseInt(x(262)) / 8) + parseInt(x(251)) / 9 + -parseInt(x(259)) / 10 * (-parseInt(x(246)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pe, 509077);
function Rx(t, e) {
  return t = t - 246, pe()[t];
}
async function Nr(t, e) {
  const x = Rx;
  await yn();
  const n = z(e), { url: a, ...s } = t;
  try {
    n.terrainProvider = await ya[x(250)](a, s);
  } catch (r) {
    console[x(249)](x(256), a, r);
  }
}
function ho(t) {
  const e = Rx, x = z(t);
  x[e(255)] = new o2();
}
function bo(t) {
  return !(z(t).terrainProvider instanceof o2);
}
function pe() {
  const t = ["_group", "image/png", "2hYKQgt", "terrainProvider", "[addTerrain] 地形加载失败:", "defaultTerrainUrl", "default", "20976180acWeNY", "26940ZBEene", "63354Fphydc", "112EaGgYt", "fromDegrees", "353206HbJoyk", "global_chart", "/vector/geoserver/gwc/service/wmts", "2306524noQnyU", "11TAgDBa", "239062AeydGs", "255CnVeQG", "error", "fromUrl", "4329477gIixKN"];
  return pe = function() {
    return t;
  }, pe();
}
function mo(t) {
  Nr({ url: y0[Rx(257)] }, t);
}
function Io() {
  const t = Rx, e = t(265);
  if (dn(e)) {
    if (Ar(e)) {
      Dr(e);
      return;
    }
    N2(e);
  }
  const x = [-179.9999971999999, 179.9999971999999, -61.7333333, 78.3666667], n = Px[t(263)](x[0], x[2], x[1], x[3]), a = kr({ url: t(266), layer: e + t(252), tilingScheme: new Xt(), format: t(253), rectangle: n, style: t(258) });
  Tr(e, a);
}
function pn(t, e) {
  return t = t - 336, _e()[t];
}
const Mt = pn;
(function(t, e) {
  const x = pn, n = t();
  for (; ; )
    try {
      if (parseInt(x(341)) / 1 * (parseInt(x(345)) / 2) + parseInt(x(347)) / 3 * (parseInt(x(357)) / 4) + -parseInt(x(339)) / 5 * (parseInt(x(338)) / 6) + parseInt(x(344)) / 7 + parseInt(x(340)) / 8 + -parseInt(x(349)) / 9 * (-parseInt(x(348)) / 10) + -parseInt(x(337)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_e, 433607);
const Xx = /* @__PURE__ */ new WeakMap(), go = _n(h0[Mt(355)]), yo = _n(h0[Mt(353)]), vo = _n(h0[Mt(346)]);
function _e() {
  const t = ["add", "5604438dFtIOZ", "1402514TcIPYg", "COLUMBUS_VIEW", "27921CcXaVK", "2862570lOidhC", "18hPTtdO", "set", "then", "get", "SCENE3D", "viewerName", "SCENE2D", "forEach", "184FgqaWx", "has", "18005944DFHJjn", "102SOuctc", "145070NgdPhH", "489776XNSTYf", "1uIZRjY", "mode"];
  return _e = function() {
    return t;
  }, _e();
}
function _n(t) {
  return function(e) {
    var a;
    const x = pn, n = z(e);
    n.scene[x(342)] = t, (a = Xx[x(352)](n)) == null || a[x(356)]((s) => {
      s == null || s(t);
    });
  };
}
function wo(t, e) {
  const x = Mt;
  yn()[x(351)](() => {
    var s;
    const n = x, a = z(e == null ? void 0 : e[n(354)]);
    !Xx[n(336)](a) && Xx[n(350)](a, /* @__PURE__ */ new Set()), (s = Xx.get(a)) == null || s[n(343)](t);
  });
}
function he() {
  const t = ["2016itBIVC", "has", "RHUMB", "dataSources", "add", "application/json", "4649391gbhUoo", "set", "maxFeatures", "hierarchy", " like '%", "features", "load", "cql_filter", "json", "getValue", "keys", "polyline", "polygon", "forEach", "get", "reverse", "1247900XHvzeR", "479255mtBTpF", "1603kNmPuj", "15OkGUMm", "entities", "charts", "9851528LkDucr", "GetFeature", "30HnpPqp", "then", "5JOwiGL", "7344NlolTf", "1.0.0", "reject", "positions", "removeAll", "40579xWaaju", "9582180Bsfnvs", "catch", "RED", "navigational_charts"];
  return he = function() {
    return t;
  }, he();
}
(function(t, e) {
  const x = Tt, n = t();
  for (; ; )
    try {
      if (parseInt(x(264)) / 1 * (-parseInt(x(283)) / 2) + parseInt(x(265)) / 3 * (parseInt(x(262)) / 4) + parseInt(x(272)) / 5 * (parseInt(x(279)) / 6) + -parseInt(x(263)) / 7 + -parseInt(x(268)) / 8 + parseInt(x(246)) / 9 * (-parseInt(x(270)) / 10) + -parseInt(x(278)) / 11 * (-parseInt(x(273)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(he, 949046);
function Tt(t, e) {
  return t = t - 243, he()[t];
}
const Ex = /* @__PURE__ */ new Map();
function Or(t) {
  const e = Tt, { workspace: x, layerName: n, searchField: a, searchValue: s, maxFeatures: r = 50 } = t, i = { version: e(274), request: e(269), outputFormat: e(245), typeName: x + ":" + n };
  r && (i[e(248)] = r), a && (i[e(253)] = encodeURIComponent(a + e(250) + s + "%'"));
  let o = "";
  Object[e(256)](i)[e(259)]((u) => {
    o += "&" + u + "=" + i[u];
  });
  const c = "/vector/geoserver/" + x + "/ows?service=WFS" + o;
  return fetch(c)[e(271)]((u) => u[e(254)]())[e(271)]((u) => Promise.resolve(u))[e(280)]((u) => Promise[e(275)](u));
}
async function Co(t, e = L()) {
  const x = Tt;
  if (Ex[x(284)](e)) return;
  const n = await Or({ workspace: x(267), layerName: x(282) });
  n[x(251)] = n.features[x(261)]();
  const { clampToGround: a = !0, color: s = W[x(281)], width: r = 2 } = t ?? {}, i = await va[x(252)](n, { clampToGround: a, fill: W.TRANSPARENT, stroke: s, strokeWidth: r });
  return a && i[x(266)].values.forEach((c) => {
    var l;
    const u = x;
    if (c.polygon) {
      const _ = (l = c[u(258)][u(249)]) == null ? void 0 : l[u(255)](Se()), f = _[u(276)];
      c[u(257)] = new wa({ positions: [...f, f[0]], clampToGround: a, material: s, width: r, arcType: Ca[u(285)] });
    }
  }), z(e)[x(243)][x(244)](i), Ex[x(247)](e, i), i;
}
function So(t = L()) {
  const e = Tt, x = z(t);
  if (Ex[e(284)](t)) {
    const n = Ex[e(260)](t);
    n == null || n[e(266)][e(277)](), x[e(243)].remove(n, !0), Ex.delete(t);
  }
}
function V2(t, e) {
  return t = t - 326, be()[t];
}
const Vr = V2;
function be() {
  const t = ["3743705GPsZQB", "3013212DrLKwh", "scene", "1564220AzMxhR", "57878nWRABT", "2532356ZmMRSG", "597900xHRwMb", "885198YvuoUl"];
  return be = function() {
    return t;
  }, be();
}
(function(t, e) {
  const x = V2, n = t();
  for (; ; )
    try {
      if (parseInt(x(330)) / 1 + -parseInt(x(333)) / 2 + parseInt(x(332)) / 3 + parseInt(x(331)) / 4 + -parseInt(x(326)) / 5 + parseInt(x(327)) / 6 + parseInt(x(329)) / 7 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(be, 424589);
const Pt = Vx(Vr(328)), L2 = hn;
(function(t, e) {
  const x = hn, n = t();
  for (; ; )
    try {
      if (parseInt(x(395)) / 1 * (-parseInt(x(394)) / 2) + parseInt(x(390)) / 3 + parseInt(x(378)) / 4 + -parseInt(x(380)) / 5 * (parseInt(x(376)) / 6) + parseInt(x(396)) / 7 + -parseInt(x(384)) / 8 * (parseInt(x(379)) / 9) + parseInt(x(383)) / 10 * (parseInt(x(377)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(me, 923266);
const Eo = T2(L2(398)), Mo = T2(L2(399));
let ox;
function hn(t, e) {
  return t = t - 376, me()[t];
}
function me() {
  const t = ["Math", "362922rrsmDb", "9JBCZMS", "11830063pdczFR", "camera", "selectedEntity", "trackedEntity", "fixedFrameToHeadingPitchRoll", "12mFyvmI", "13354rDCwie", "2805488YntIQf", "9NwFXOM", "3061780EpOvsn", "Matrix4", "Transforms", "17360wYYnFq", "12759392uyhavM", "getValue", "PI_OVER_TWO", "heading", "setView", "fromQuaternion", "2631498zxaYXR", "position", "Matrix3"];
  return me = function() {
    return t;
  }, me();
}
function To(t) {
  const e = z();
  ox = S2(Lr(e, t));
}
function Po() {
  ox && (ox == null || ox(), ox = void 0);
}
function Lr(t, e) {
  return function(x, n) {
    var u, l;
    const a = hn;
    if (!(e != null && e.orientation) || !e[a(391)]) return;
    const s = (u = e.orientation) == null ? void 0 : u.getValue(n), r = (l = e.position) == null ? void 0 : l[a(385)](n), i = yx[a(392)][a(389)](s), o = yx[a(381)].fromRotationTranslation(i, r), c = yx[a(382)][a(400)](o);
    c[a(387)] += yx[a(393)][a(386)], e.show = !1, t[a(397)][a(388)]({ destination: r, orientation: c });
  };
}
(function(t, e) {
  const x = R2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(445)) / 1 + parseInt(x(447)) / 2 * (-parseInt(x(449)) / 3) + -parseInt(x(446)) / 4 + -parseInt(x(442)) / 5 + parseInt(x(444)) / 6 * (-parseInt(x(438)) / 7) + parseInt(x(439)) / 8 + parseInt(x(433)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ie, 445181);
function R2(t, e) {
  return t = t - 432, Ie()[t];
}
function Ie() {
  const t = ["203xgtVUl", "2216832TKdeMC", "LEFT_DRAG", "RIGHT_DRAG", "3202015VEVOgA", "zoomEventTypes", "118926aYeGkZ", "484238sCTpaH", "2523160NUydwg", "16KebZxf", "PINCH", "100455QQhRsh", "WHEEL", "24895773tQRFQF", "rotateEventTypes", "screenSpaceCameraController", "tiltEventTypes", "scene"];
  return Ie = function() {
    return t;
  }, Ie();
}
function Rr(t) {
  const e = R2, x = t[e(437)][e(435)];
  x[e(434)] = [rx.RIGHT_DRAG, rx[e(440)]], x[e(443)] = [rx[e(432)], rx[e(448)]], x.translateEventTypes = rx[e(441)], x[e(436)] = [], x[e(436)] = [{ eventType: rx.RIGHT_DRAG }];
}
(function(t, e) {
  const x = bn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(140)) / 1 + parseInt(x(148)) / 2 + parseInt(x(145)) / 3 + parseInt(x(139)) / 4 * (-parseInt(x(143)) / 5) + -parseInt(x(149)) / 6 + parseInt(x(141)) / 7 * (parseInt(x(142)) / 8) + parseInt(x(147)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ge, 398535);
function ko(t, e) {
  const x = bn, { west: n, south: a, east: s, north: r } = t;
  yn()[x(150)](() => {
    var o;
    const i = x;
    (o = xx(e)) == null || o[i(146)]({ destination: Px[i(138)](n, a, s, r) });
  });
}
function bn(t, e) {
  return t = t - 138, ge()[t];
}
function Do(t, e) {
  xx(e).flyTo(t);
}
const xx = Vx("camera");
function G2(t) {
  return function(e) {
    return xx(e)[t];
  };
}
function ge() {
  const t = ["248vbmeNB", "1435VkDusd", "DEFAULT_VIEW_RECTANGLE", "810354WTGsGT", "flyTo", "437751AuqLtr", "146778egDCll", "169176laPvfN", "then", "fromDegrees", "396JSXfJN", "211259BUoIwe", "61929RAipRD"];
  return ge = function() {
    return t;
  }, ge();
}
function Gr(t) {
  const e = bn, { west: x, south: n, east: a, north: s } = t;
  Sa[e(144)] = Px[e(138)](x, n, a, s);
}
function ye() {
  const t = ["removeEventListener", "addEventListener", "2506392RrxfYO", "zoomIn", "positionCartographic", "67535ZnZqlY", "latitude", "184820WPKyFX", "mode", "WGS84", "changed", "4uFzhBM", "toDegrees", "451278vlcebx", "744aSiyXn", "83349HJXwid", "1052688qAqNKJ", "maximumRadius", "1013838TPePXZ", "height", "longitude", "fromDegrees"];
  return ye = function() {
    return t;
  }, ye();
}
const kt = ve;
(function(t, e) {
  const x = ve, n = t();
  for (; ; )
    try {
      if (parseInt(x(387)) / 1 + parseInt(x(374)) / 2 + parseInt(x(371)) / 3 + -parseInt(x(369)) / 4 * (-parseInt(x(385)) / 5) + parseInt(x(382)) / 6 + -parseInt(x(376)) / 7 + -parseInt(x(372)) / 8 * (parseInt(x(373)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ye, 286722);
function Ao(t, e = L()) {
  return w0(() => {
    const x = ve;
    xx(e)[x(368)][x(381)](t);
  }), () => {
    const x = ve;
    xx(e).changed[x(380)](t);
  };
}
const W2 = G2(kt(384)), No = vs(W2, kt(377));
function Oo(t, e) {
  const x = kt;
  Pt(e)[x(366)] === h0.SCENE2D && xx(e)[x(383)](t);
}
function ve(t, e) {
  return t = t - 366, ye()[t];
}
const Vo = G2("position");
function z2(t, e) {
  const x = kt, n = Jx[x(367)][x(375)] * 10 / t, a = W2(e), s = l0[x(370)](a[x(378)]), r = l0[x(370)](a[x(386)]);
  xx(e).setView({ destination: g[x(379)](s, r, n) });
}
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var F2 = { exports: {} };
(function(t, e) {
  (function(x, n) {
    t.exports = n();
  })(Wr, function() {
    var x = 1e3, n = 6e4, a = 36e5, s = "millisecond", r = "second", i = "minute", o = "hour", c = "day", u = "week", l = "month", _ = "quarter", f = "year", d = "date", p = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(w) {
      var m = ["th", "st", "nd", "rd"], h = w % 100;
      return "[" + w + (m[(h - 20) % 10] || m[h] || m[0]) + "]";
    } }, k = function(w, m, h) {
      var S = String(w);
      return !S || S.length >= m ? w : "" + Array(m + 1 - S.length).join(h) + w;
    }, G = { s: k, z: function(w) {
      var m = -w.utcOffset(), h = Math.abs(m), S = Math.floor(h / 60), y = h % 60;
      return (m <= 0 ? "+" : "-") + k(S, 2, "0") + ":" + k(y, 2, "0");
    }, m: function w(m, h) {
      if (m.date() < h.date()) return -w(h, m);
      var S = 12 * (h.year() - m.year()) + (h.month() - m.month()), y = m.clone().add(S, l), A = h - y < 0, N = m.clone().add(S + (A ? -1 : 1), l);
      return +(-(S + (h - y) / (A ? y - N : N - y)) || 0);
    }, a: function(w) {
      return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
    }, p: function(w) {
      return { M: l, y: f, w: u, d: c, D: d, h: o, m: i, s: r, ms: s, Q: _ }[w] || String(w || "").toLowerCase().replace(/s$/, "");
    }, u: function(w) {
      return w === void 0;
    } }, T = "en", O = {};
    O[T] = M;
    var F = "$isDayjsObject", B = function(w) {
      return w instanceof U || !(!w || !w[F]);
    }, D = function w(m, h, S) {
      var y;
      if (!m) return T;
      if (typeof m == "string") {
        var A = m.toLowerCase();
        O[A] && (y = A), h && (O[A] = h, y = A);
        var N = m.split("-");
        if (!y && N.length > 1) return w(N[0]);
      } else {
        var j = m.name;
        O[j] = m, y = j;
      }
      return !S && y && (T = y), y || !S && T;
    }, E = function(w, m) {
      if (B(w)) return w.clone();
      var h = typeof m == "object" ? m : {};
      return h.date = w, h.args = arguments, new U(h);
    }, C = G;
    C.l = D, C.i = B, C.w = function(w, m) {
      return E(w, { locale: m.$L, utc: m.$u, x: m.$x, $offset: m.$offset });
    };
    var U = function() {
      function w(h) {
        this.$L = D(h.locale, null, !0), this.parse(h), this.$x = this.$x || h.x || {}, this[F] = !0;
      }
      var m = w.prototype;
      return m.parse = function(h) {
        this.$d = function(S) {
          var y = S.date, A = S.utc;
          if (y === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(y)) return /* @__PURE__ */ new Date();
          if (y instanceof Date) return new Date(y);
          if (typeof y == "string" && !/Z$/i.test(y)) {
            var N = y.match(b);
            if (N) {
              var j = N[2] - 1 || 0, X = (N[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(N[1], j, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, X)) : new Date(N[1], j, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, X);
            }
          }
          return new Date(y);
        }(h), this.init();
      }, m.init = function() {
        var h = this.$d;
        this.$y = h.getFullYear(), this.$M = h.getMonth(), this.$D = h.getDate(), this.$W = h.getDay(), this.$H = h.getHours(), this.$m = h.getMinutes(), this.$s = h.getSeconds(), this.$ms = h.getMilliseconds();
      }, m.$utils = function() {
        return C;
      }, m.isValid = function() {
        return this.$d.toString() !== p;
      }, m.isSame = function(h, S) {
        var y = E(h);
        return this.startOf(S) <= y && y <= this.endOf(S);
      }, m.isAfter = function(h, S) {
        return E(h) < this.startOf(S);
      }, m.isBefore = function(h, S) {
        return this.endOf(S) < E(h);
      }, m.$g = function(h, S, y) {
        return C.u(h) ? this[S] : this.set(y, h);
      }, m.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function() {
        return this.$d.getTime();
      }, m.startOf = function(h, S) {
        var y = this, A = !!C.u(S) || S, N = C.p(h), j = function(U0, i0) {
          var N0 = C.w(y.$u ? Date.UTC(y.$y, i0, U0) : new Date(y.$y, i0, U0), y);
          return A ? N0 : N0.endOf(c);
        }, X = function(U0, i0) {
          return C.w(y.toDate()[U0].apply(y.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(i0)), y);
        }, x0 = this.$W, t0 = this.$M, d0 = this.$D, ax = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case f:
            return A ? j(1, 0) : j(31, 11);
          case l:
            return A ? j(1, t0) : j(0, t0 + 1);
          case u:
            var B0 = this.$locale().weekStart || 0, hx = (x0 < B0 ? x0 + 7 : x0) - B0;
            return j(A ? d0 - hx : d0 + (6 - hx), t0);
          case c:
          case d:
            return X(ax + "Hours", 0);
          case o:
            return X(ax + "Minutes", 1);
          case i:
            return X(ax + "Seconds", 2);
          case r:
            return X(ax + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function(h) {
        return this.startOf(h, !1);
      }, m.$set = function(h, S) {
        var y, A = C.p(h), N = "set" + (this.$u ? "UTC" : ""), j = (y = {}, y[c] = N + "Date", y[d] = N + "Date", y[l] = N + "Month", y[f] = N + "FullYear", y[o] = N + "Hours", y[i] = N + "Minutes", y[r] = N + "Seconds", y[s] = N + "Milliseconds", y)[A], X = A === c ? this.$D + (S - this.$W) : S;
        if (A === l || A === f) {
          var x0 = this.clone().set(d, 1);
          x0.$d[j](X), x0.init(), this.$d = x0.set(d, Math.min(this.$D, x0.daysInMonth())).$d;
        } else j && this.$d[j](X);
        return this.init(), this;
      }, m.set = function(h, S) {
        return this.clone().$set(h, S);
      }, m.get = function(h) {
        return this[C.p(h)]();
      }, m.add = function(h, S) {
        var y, A = this;
        h = Number(h);
        var N = C.p(S), j = function(t0) {
          var d0 = E(A);
          return C.w(d0.date(d0.date() + Math.round(t0 * h)), A);
        };
        if (N === l) return this.set(l, this.$M + h);
        if (N === f) return this.set(f, this.$y + h);
        if (N === c) return j(1);
        if (N === u) return j(7);
        var X = (y = {}, y[i] = n, y[o] = a, y[r] = x, y)[N] || 1, x0 = this.$d.getTime() + h * X;
        return C.w(x0, this);
      }, m.subtract = function(h, S) {
        return this.add(-1 * h, S);
      }, m.format = function(h) {
        var S = this, y = this.$locale();
        if (!this.isValid()) return y.invalidDate || p;
        var A = h || "YYYY-MM-DDTHH:mm:ssZ", N = C.z(this), j = this.$H, X = this.$m, x0 = this.$M, t0 = y.weekdays, d0 = y.months, ax = y.meridiem, B0 = function(i0, N0, bx, jx) {
          return i0 && (i0[N0] || i0(S, A)) || bx[N0].slice(0, jx);
        }, hx = function(i0) {
          return C.s(j % 12 || 12, i0, "0");
        }, U0 = ax || function(i0, N0, bx) {
          var jx = i0 < 12 ? "AM" : "PM";
          return bx ? jx.toLowerCase() : jx;
        };
        return A.replace(I, function(i0, N0) {
          return N0 || function(bx) {
            switch (bx) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return C.s(S.$y, 4, "0");
              case "M":
                return x0 + 1;
              case "MM":
                return C.s(x0 + 1, 2, "0");
              case "MMM":
                return B0(y.monthsShort, x0, d0, 3);
              case "MMMM":
                return B0(d0, x0);
              case "D":
                return S.$D;
              case "DD":
                return C.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return B0(y.weekdaysMin, S.$W, t0, 2);
              case "ddd":
                return B0(y.weekdaysShort, S.$W, t0, 3);
              case "dddd":
                return t0[S.$W];
              case "H":
                return String(j);
              case "HH":
                return C.s(j, 2, "0");
              case "h":
                return hx(1);
              case "hh":
                return hx(2);
              case "a":
                return U0(j, X, !0);
              case "A":
                return U0(j, X, !1);
              case "m":
                return String(X);
              case "mm":
                return C.s(X, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return C.s(S.$s, 2, "0");
              case "SSS":
                return C.s(S.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(i0) || N.replace(":", "");
        });
      }, m.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function(h, S, y) {
        var A, N = this, j = C.p(S), X = E(h), x0 = (X.utcOffset() - this.utcOffset()) * n, t0 = this - X, d0 = function() {
          return C.m(N, X);
        };
        switch (j) {
          case f:
            A = d0() / 12;
            break;
          case l:
            A = d0();
            break;
          case _:
            A = d0() / 3;
            break;
          case u:
            A = (t0 - x0) / 6048e5;
            break;
          case c:
            A = (t0 - x0) / 864e5;
            break;
          case o:
            A = t0 / a;
            break;
          case i:
            A = t0 / n;
            break;
          case r:
            A = t0 / x;
            break;
          default:
            A = t0;
        }
        return y ? A : C.a(A);
      }, m.daysInMonth = function() {
        return this.endOf(l).$D;
      }, m.$locale = function() {
        return O[this.$L];
      }, m.locale = function(h, S) {
        if (!h) return this.$L;
        var y = this.clone(), A = D(h, S, !0);
        return A && (y.$L = A), y;
      }, m.clone = function() {
        return C.w(this.$d, this);
      }, m.toDate = function() {
        return new Date(this.valueOf());
      }, m.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function() {
        return this.$d.toISOString();
      }, m.toString = function() {
        return this.$d.toUTCString();
      }, w;
    }(), Q = U.prototype;
    return E.prototype = Q, [["$ms", s], ["$s", r], ["$m", i], ["$H", o], ["$W", c], ["$M", l], ["$y", f], ["$D", d]].forEach(function(w) {
      Q[w[1]] = function(m) {
        return this.$g(m, w[0], w[1]);
      };
    }), E.extend = function(w, m) {
      return w.$i || (w(m, U, E), w.$i = !0), E;
    }, E.locale = D, E.isDayjs = B, E.unix = function(w) {
      return E(1e3 * w);
    }, E.en = O[T], E.Ls = O, E.p = {}, E;
  });
})(F2);
var Fr = F2.exports;
const B2 = /* @__PURE__ */ zr(Fr);
(function(t, e) {
  const x = Gx, n = t();
  for (; ; )
    try {
      if (parseInt(x(152)) / 1 * (-parseInt(x(181)) / 2) + -parseInt(x(164)) / 3 + -parseInt(x(154)) / 4 * (parseInt(x(157)) / 5) + parseInt(x(161)) / 6 * (parseInt(x(182)) / 7) + -parseInt(x(183)) / 8 * (parseInt(x(162)) / 9) + parseInt(x(163)) / 10 * (-parseInt(x(165)) / 11) + -parseInt(x(171)) / 12 * (-parseInt(x(155)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(we, 758760);
const { synchronizeConfig: mx } = y0;
var Br = ((t) => {
  const e = Gx;
  return t[e(176)] = e(176), t.secondStep = e(166), t[e(178)] = e(178), t;
})(Br || {});
const Mx = /* @__PURE__ */ new Map();
function Gx(t, e) {
  return t = t - 150, we()[t];
}
function Lo(t, e = L()) {
  const x = Gx;
  nextTick()[x(168)](() => {
    var a;
    const n = x;
    !Mx[n(177)](e) && Mx[n(170)](e, /* @__PURE__ */ new Set()), (a = Mx[n(173)](e)) == null || a[n(167)](t);
  });
}
function Ur(t = L()) {
  var x;
  const e = Gx;
  (x = Mx[e(173)](t)) == null || x[e(180)]((n) => n == null ? void 0 : n()), Mx.delete(t);
}
function Ro(t = L()) {
  const e = Gx;
  let x = e(176);
  const n = [], a = mx[e(174)], s = mx[e(160)];
  let r;
  const i = (f) => f[e(172)], o = () => {
    const f = e;
    if (n[f(150)] === 0) return a;
    let d = 1, p;
    if (n[f(150)] === 1) {
      p = n[f(156)]()[0];
      const M = i(p);
      return fs(M) ? d : M / 2;
    }
    p = n[f(159)](), d = i(p);
    const b = jr()[f(158)]() - B2(p[f(151)])[f(158)](), I = Math[f(175)](b / 1e3);
    return b > s * 1e3 ? (Ln(p[f(151)], t), d = a, d) : b < -s * 1e3 ? (d += I, d) : (d <= 0 && (d = a), d);
  }, c = (f) => {
    n.push(f);
  }, u = () => {
    r = window[e(179)](() => {
      Rn(o(), t);
    }, mx.interval);
  }, l = { [e(176)]: (f) => {
    const d = e;
    $r(f[d(151)], t), Ln(f[d(151)], t), qr(t), c(f), Ur(t), x = d(166);
  }, secondStep: (f) => {
    const d = e;
    if (c(f), n[d(150)] > mx[d(153)]) {
      const p = n[d(169)](0, 1)[0];
      Rn(i(p), t), Kr(!0), clearInterval(r), u(), x = d(178);
    }
  }, [e(178)]: (f) => {
    const d = e;
    c(f), !xs() && n[d(150)] > mx[d(153)] && n[d(159)]();
  } };
  return Lx(() => {
    clearInterval(r);
  }, { viewerName: t }), { run: (f) => {
    l[x](f);
  } };
}
function we() {
  const t = ["has", "thirdStep", "setInterval", "forEach", "1045298mWJPlp", "260533LnfZOA", "917368TaBPPE", "length", "logicTime", "1SaAQim", "cacheSize", "4xHoDwy", "7292948YwJPIs", "slice", "1496645MqVSTQ", "valueOf", "shift", "maxTime", "42BCEpgI", "81IPPskG", "1930dlMucy", "2722581HjJPlo", "38027OtuYNC", "secondStep", "add", "then", "splice", "set", "84NiIMCM", "actualSpeed", "get", "minSpeed", "abs", "firstStep"];
  return we = function() {
    return t;
  }, we();
}
const tx = Wx;
(function(t, e) {
  const x = Wx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(475)) / 1 + -parseInt(x(476)) / 2 + -parseInt(x(473)) / 3 + parseInt(x(477)) / 4 + parseInt(x(466)) / 5 * (parseInt(x(470)) / 6) + parseInt(x(474)) / 7 + parseInt(x(471)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ce, 815307);
function Ce() {
  const t = ["1129659AbGaPH", "832504QmwGkH", "1739768oJmhOI", "getTime", "startTime", "currentTime", "stopTime", "9999/12/31 23:59:59", "87065RHDMtY", "getObservable", "number", "toDate", "540Ocgedn", "2830952KNOshY", "fromDate", "3416802WUJGrQ", "8009197Ufdssq"];
  return Ce = function() {
    return t;
  }, Ce();
}
const Se = Fx(tx(480)), jr = mn(tx(480)), Hr = In("currentTime"), Ln = Hr, Go = Fx(tx(479)), Wo = mn(tx(479)), Yr = In("startTime"), $r = Yr, zo = Fx(tx(464)), Fo = mn("stopTime"), Zr = In(tx(464)), Xr = Zr;
function Wx(t, e) {
  return t = t - 464, Ce()[t];
}
function Jr() {
  return tx(465);
}
function qr(t) {
  Xr(Jr(), t);
}
function mn(t) {
  return function(e) {
    return B2(a0[Wx(469)](zx(e)[t]));
  };
}
function In(t) {
  return function(e, x) {
    const n = Wx;
    let a;
    typeof e == "string" || typeof e === n(468) ? a = a0[n(472)](new Date(e)) : e instanceof Date ? a = a0.fromDate(e) : a = e, zx(x)[t] = a;
  };
}
function Bo(t, e = L()) {
  w0((x) => {
    const n = Wx;
    yx.knockout[n(467)](x.clockViewModel, n(480)).subscribe((a) => {
      const s = n, r = a0[s(469)](a)[s(478)]();
      t == null || t(r, a);
    });
  }, { viewerName: e });
}
const Dt = U2;
function Ee() {
  const t = ["clock", "34sjIwDO", "1149363cBnZUI", "10xYYSlW", "multiplier", "796117JkjfKY", "670464oVmcBF", "121tFrftL", "377880VoWjkc", "1167035juiyli", "shouldAnimate", "6ykdjXh", "294930IhCDRB"];
  return Ee = function() {
    return t;
  }, Ee();
}
(function(t, e) {
  const x = U2, n = t();
  for (; ; )
    try {
      if (parseInt(x(159)) / 1 * (parseInt(x(153)) / 2) + parseInt(x(151)) / 3 + parseInt(x(147)) / 4 + -parseInt(x(148)) / 5 * (parseInt(x(150)) / 6) + parseInt(x(157)) / 7 + -parseInt(x(158)) / 8 + -parseInt(x(154)) / 9 * (-parseInt(x(155)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ee, 119060);
function U2(t, e) {
  return t = t - 147, Ee()[t];
}
const zx = Vx(Dt(152)), Rn = j2(Dt(156)), Qr = Fx(Dt(156)), Uo = Qr, Kr = j2("shouldAnimate"), xs = Fx(Dt(149));
function Fx(t) {
  return function(e) {
    return zx(e)[t];
  };
}
function j2(t, e) {
  return function(x, n) {
    zx(n)[t] = x ?? e;
  };
}
(function(t, e) {
  const x = nx, n = t();
  for (; ; )
    try {
      if (parseInt(x(211)) / 1 * (-parseInt(x(203)) / 2) + parseInt(x(200)) / 3 + parseInt(x(205)) / 4 * (parseInt(x(213)) / 5) + parseInt(x(204)) / 6 + parseInt(x(210)) / 7 + -parseInt(x(212)) / 8 + -parseInt(x(208)) / 9 * (parseInt(x(209)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Me, 762908);
function Me() {
  const t = ["828OrUzss", "20730rsXRep", "4540011TebkRZ", "43FqJyes", "4918344qQygnz", "5rAXVkm", "sourceName is Required", "metaData", "entities", "2971827zTQzyZ", "position", "getValue", "61796WqWawc", "3870144daWoFY", "2451300EHoXng", "add", "getById"];
  return Me = function() {
    return t;
  }, Me();
}
function jo(t, e) {
  return $t(e) ? w0((x) => {
    const n = nx;
    return x.entities[n(206)](t);
  }, { viewerName: L(e) }) : w0(() => e.add(t));
}
function es(t) {
  return t instanceof Jt;
}
function ts(t) {
  return t instanceof i2;
}
function Ho(t, e) {
  const x = nx;
  if (!e) return console.error(x(214)), void 0;
  if (es(e) || ts(e)) return e[x(199)].getById(t);
  const n = C0(e);
  if (n) return n[x(199)][x(207)](t);
}
function ns(t, e) {
  var n;
  const x = nx;
  return (n = t.properties) == null ? void 0 : n[x(202)](Se(e));
}
function nx(t, e) {
  return t = t - 198, Me()[t];
}
function as(t, e, x) {
  var n;
  return (n = ns(t, x)) == null ? void 0 : n[e];
}
function Yo(t, e) {
  return as(t, nx(198), e);
}
function H2(t) {
  return t[nx(201)];
}
function rs(t) {
  return H2(t);
}
function $o(t) {
  return H2(t);
}
function Zo(t, e) {
  const x = nx;
  t[x(201)] = e;
}
function ss(t, e) {
  t = t - 455;
  var x = Te(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = ss, n = t(); ; )
    try {
      var a = parseInt(x(462)) / 1 + parseInt(x(461)) / 2 + -parseInt(x(455)) / 3 + -parseInt(x(456)) / 4 + -parseInt(x(460)) / 5 + parseInt(x(458)) / 6 + -parseInt(x(457)) / 7 * (-parseInt(x(459)) / 8);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Te, 492424);
function Te() {
  var t = ["8MvweVj", "4881045TbUdSX", "1645250TsRvWc", "289931tpmvNL", "2039634nTJmBy", "592064kiQtUV", "4636310LhpdNh", "3129846lQFeWI"];
  return Te = function() {
    return t;
  }, Te();
}
function Xo() {
  console.log(R0, lx);
}
(function(t, e) {
  const x = k0, n = t();
  for (; ; )
    try {
      if (parseInt(x(384)) / 1 * (parseInt(x(407)) / 2) + -parseInt(x(375)) / 3 + -parseInt(x(401)) / 4 * (-parseInt(x(402)) / 5) + parseInt(x(408)) / 6 * (parseInt(x(387)) / 7) + parseInt(x(378)) / 8 * (-parseInt(x(391)) / 9) + parseInt(x(403)) / 10 + -parseInt(x(405)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Pe, 937632);
function k0(t, e) {
  return t = t - 375, Pe()[t];
}
var is = ((t) => {
  const e = k0;
  return t[t.circle = 0] = e(376), t[t.rectangle = 1] = "rectangle", t[t[e(411)] = 2] = e(411), t[t[e(394)] = 3] = e(394), t[t[e(410)] = 4] = e(410), t[t[e(412)] = 5] = "polyline", t;
})(is || {});
function Pe() {
  const t = ["web-drawPolylineAreaSourceName", "86504jKIdmi", "RED", "length", "web-drawAreaSourceName", "latitude", "entities", "199sZyaIU", "web-drawEllipsisAreaSourceName", "height", "12778493jDafsK", "position", "hierarchy", "stop", "1269IRVlDZ", "getValue", "positions", "ellipsis", "endPosition", "start", "map", "longitude", "fromDegrees", "crosshair", "4lJFjjj", "4138395fxgZGH", "15966180PdVPCr", "setValue", "26629284NsxxKo", "DODGERBLUE", "10126qeHApf", "6andQUD", "add", "point", "polygon", "polyline", "1122672oeoLlX", "circle"];
  return Pe = function() {
    return t;
  }, Pe();
}
function Jo() {
  const t = "web-drawPointAreaSourceName";
  let e;
  const x = (r) => {
    const i = k0, { source: o } = px(t, !0);
    o0(i(400)), e = ex(({ position: c }) => {
      const u = i, l = W0(c[u(388)]);
      if (!l) return;
      const _ = vn(c[u(388)]);
      o[u(383)].add({ position: _, point: { pixelSize: 5, color: W[u(406)] } }), r == null || r({ type: 4, degrees: [l], cartesian: [_] }), e == null || e(), o0("");
    });
  }, n = () => {
    o0(""), e == null || e();
  }, a = () => {
    dx(t);
  };
  return { start: x, stop: n, clear: a, stopAndClear: () => {
    n(), a();
  } };
}
function qo() {
  const t = k0, e = t(377);
  let x, n, a;
  const s = (c) => {
    const u = t;
    o0(u(400));
    const { source: l } = px(e, !0), _ = [];
    x = ex(({ position: f }) => {
      var M;
      const d = u, p = X2(f.position);
      if (!p) return;
      _.push(p);
      const b = g[d(399)](p[d(398)], p[d(382)], p[d(386)]);
      c({ timing: d(396), type: 5, degrees: [p], cartesian: [b] });
      const I = { position: b, point: { pixelSize: 5, color: W.RED } };
      if (a) {
        const k = (M = a.polyline) == null ? void 0 : M[d(393)], G = _[d(397)]((T) => g[d(399)](T[d(398)], T[d(382)], T[d(386)]));
        k.setValue(G), l[d(383)][d(409)](I);
        return;
      }
      a = l.entities.add({ ...I, polyline: { positions: new kx([b]), clampToGround: !0, material: W[d(379)] } });
    }), n = cn(() => {
      const f = u;
      c({ timing: f(390), type: 5, degrees: [..._], cartesian: _[f(397)]((d) => g.fromDegrees(d.longitude, d.latitude, d.height)) });
    });
  };
  Kt(() => {
    n == null || n();
  });
  const r = () => {
    a = null, o0(""), x == null || x(), n == null || n();
  }, i = () => {
    dx(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function Qo(t) {
  const e = k0, x = e(381), n = (c, u) => {
    const l = e, { longitude: _, latitude: f } = c, { longitude: d, latitude: p } = u, b = g[l(399)](d, f, 0), I = g[l(399)](_, p, 0);
    return { p3: b, p4: I };
  };
  let a;
  const s = (c) => {
    const u = e, { source: l } = px(x, !0);
    o0(u(400));
    let _ = [];
    a = ex(({ position: f }) => {
      const d = u, p = W0(f[d(388)]);
      if (!p) return;
      const { longitude: b, latitude: I, height: M } = p, k = g.fromDegrees(b, I, M);
      c == null || c({ timing: d(396), type: 1, degrees: [{ longitude: b, latitude: I, height: M }], cartesian: [k] });
      const G = new kx(new qx([k])), T = new c2(k);
      l.entities.add({ position: T, polygon: { hierarchy: G, fill: !1, outline: !0, outlineWidth: 5, outlineColor: W.DODGERBLUE } });
      const O = fn(({ position: B }) => {
        const D = d, E = W0(B[D(395)]);
        if (!E) return;
        const { p3: C, p4: U } = n(p, E), Q = g[D(399)](E[D(398)], E[D(382)], E[D(386)]);
        _ = [k, C, Q, U];
        const w = new qx(_);
        T.setValue(g.midpoint(k, Q, new g())), G[D(404)](w);
      }, { viewerName: t }), F = on(() => {
        const B = d;
        c == null || c({ timing: B(390), type: 1, degrees: _[B(397)]((D) => Z2(D)), cartesian: [..._] }), _[B(380)] = 0, O(), F();
      }, { viewerName: t });
    }, { viewerName: t });
  }, r = () => {
    o0(""), a == null || a();
  }, i = () => {
    dx(x);
  };
  return { start: s, stop: r, clear: i, stopAndClear: () => {
    r(), i();
  } };
}
function Ko() {
  const t = "web-drawPolygonAreaSourceName";
  let e, x, n;
  const a = (o) => {
    o0("crosshair");
    const { source: c } = px(t, !0), u = [];
    e = ex(({ position: l }) => {
      var b;
      const _ = k0, f = X2(l.position);
      if (!f) return;
      u.push(f);
      const d = g[_(399)](f[_(398)], f.latitude, f[_(386)]);
      o({ timing: _(396), type: 2, degrees: [f], cartesian: [d] });
      const p = { position: d, point: { pixelSize: 5, color: W[_(379)] } };
      if (n) {
        const I = (b = n.polygon) == null ? void 0 : b[_(389)], M = u[_(397)]((k) => g[_(399)](k[_(398)], k.latitude, k[_(386)]));
        I[_(404)](new qx(M)), c[_(383)][_(409)](p);
        return;
      }
      n = c[_(383)][_(409)]({ ...p, polygon: { hierarchy: new kx(new qx([d])), fill: !1, outline: !0, outlineWidth: 5, outlineColor: W.RED } });
    }), x = cn(() => {
      const l = k0;
      o({ timing: l(390), type: 2, degrees: [...u], cartesian: u[l(397)]((_) => g.fromDegrees(_.longitude, _[l(382)], _.height)) }), u[l(380)] = 0, n = null;
    });
  };
  Kt(() => {
    x == null || x();
  });
  const s = () => {
    n = null, o0(""), e == null || e(), x == null || x();
  }, r = () => {
    dx(t);
  };
  return { start: a, clear: r, stop: s, stopAndClear: () => {
    s(), r();
  } };
}
function xc() {
  const t = k0, e = t(385);
  let x;
  const n = ({ startPos: l, centerPos: _ }) => {
    const f = t, d = Vt(l, [_[f(398)], _[f(382)]]);
    return { majorAxisValue: d, minorAxisValue: d };
  }, a = ({ startPos: l, centerPos: _ }) => {
    const f = t, d = Vt(l, [_[f(398)], l[f(382)]]), p = Vt(l, [l[f(398)], _.latitude]);
    return { majorAxisValue: d, minorAxisValue: p };
  }, s = (l, { isCircle: _ = !1, source: f }) => {
    x = ex(({ position: d }) => {
      const p = k0, b = W0(d[p(388)]);
      if (!b) return;
      const { longitude: I, latitude: M, height: k } = b, G = g[p(399)](I, M, k);
      l({ timing: p(396), type: 0, degrees: [{ longitude: I, latitude: M, height: k }], cartesian: [G] });
      const T = new c2(G), O = new kx(0), F = new kx(0);
      f.entities[p(409)]({ position: T, ellipse: { semiMajorAxis: O, semiMinorAxis: F, fill: !1, outline: !0, outlineWidth: 10, outlineColor: W.DODGERBLUE } });
      const B = fn(({ position: E }) => {
        const C = p, U = W0(E[C(395)]);
        if (!U) return;
        const Q = Un([b[C(398)], b[C(382)]], [U[C(398)], U[C(382)]]), [w, m] = Zt(Q);
        T[C(404)](g[C(399)](w, m));
        const h = { startPos: b, centerPos: { longitude: w, latitude: m, height: 0 } };
        if (_) {
          const { majorAxisValue: A, minorAxisValue: N } = n(h);
          O[C(404)](A * 1e3), F[C(404)](N * 1e3);
          return;
        }
        const { majorAxisValue: S, minorAxisValue: y } = a(h);
        O[C(404)](S * 1e3), F[C(404)](y * 1e3);
      }), D = on(({ position: E }) => {
        const C = p;
        B(), D();
        const U = W0(E.position);
        if (!U) return;
        const Q = Un([b.longitude, b[C(382)]], [U.longitude, U[C(382)]]), [w, m] = Zt(Q), h = [g[C(399)](w, m, 0), g[C(399)](U[C(398)], U[C(382)], U[C(386)])];
        l({ timing: C(390), type: 0, cartesian: h, degrees: [{ longitude: w, latitude: m, height: 0 }, U], majorAxis: O[C(392)](Se()), minorAxis: F.getValue(Se()) });
      });
    });
  }, r = (l, _) => {
    s(l, { isCircle: !0, source: _ });
  }, i = (l) => {
    o0(t(400));
    const { source: f } = px(e, !0);
    r(l, f);
  }, o = () => {
    o0(""), x == null || x();
  }, c = () => {
    dx(e);
  };
  return { start: i, stop: o, clear: c, stopAndClear: () => {
    o(), c();
  } };
}
const os = gn;
(function(t, e) {
  const x = gn, n = t();
  for (; ; )
    try {
      if (parseInt(x(299)) / 1 + parseInt(x(295)) / 2 + -parseInt(x(296)) / 3 * (parseInt(x(288)) / 4) + -parseInt(x(291)) / 5 + parseInt(x(298)) / 6 + -parseInt(x(292)) / 7 + parseInt(x(294)) / 8 * (-parseInt(x(293)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ke, 436675);
function ke() {
  const t = ["337855DVdJao", "3222NpOtUk", "16576mwNouo", "1201828SyxCaT", "838275VLPQKT", "add", "3625836DcwEVo", "690626Puiiif", "BOTTOM", "webPlaceEntitySource", "4zOgPxF", "latitude", "entities", "1948525pCMCuJ"];
  return ke = function() {
    return t;
  }, ke();
}
const Ot = os(301);
function gn(t, e) {
  return t = t - 288, ke()[t];
}
function ec() {
  const t = (a, s) => {
    const r = gn, { source: i } = px(Ot, !0);
    i[r(290)][r(297)]({ position: g.fromDegrees(s.longitude, s[r(289)], 0), label: { ...sr, verticalOrigin: a2[r(300)], text: a + `
坐标:` + s.longitude + "," + s[r(289)] + ",0" }, point: { pixelSize: 4, color: W.RED } });
  }, e = () => {
    Er(Ot);
  }, x = () => {
    dx(Ot);
  }, n = pr(() => {
    e == null || e();
  }, { isEmpty: !0 });
  return Kt(() => {
    e == null || e(), n == null || n();
  }), { create: t, clear: x, destroy: e };
}
function At(t, e) {
  t = t - 387;
  var x = De(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = At, n = t(); ; )
    try {
      var a = parseInt(x(393)) / 1 + -parseInt(x(389)) / 2 * (parseInt(x(398)) / 3) + -parseInt(x(390)) / 4 + parseInt(x(401)) / 5 * (-parseInt(x(394)) / 6) + -parseInt(x(397)) / 7 + parseInt(x(396)) / 8 * (-parseInt(x(399)) / 9) + parseInt(x(388)) / 10;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(De, 190126);
function tc(t) {
  return _x(t, "Map");
}
function nc(t) {
  return _x(t, "Set");
}
function cs(t) {
  return _x(t, "Object");
}
function Gn(t) {
  var e = At;
  return _x(t, e(395));
}
function $t(t) {
  return _x(t, "String");
}
function De() {
  var t = ["Number", "15nslVZs", "call", "12029080mBMmUF", "446wWWdbH", "1031240BzcqNf", "[object ", "prototype", "228280sMcKbh", "362382vKaiWu", "Array", "8phNmgg", "2342319FOudWs", "1857xFXqmu", "2964663QEqhmh"];
  return De = function() {
    return t;
  }, De();
}
function Wn(t) {
  var e = At;
  return _x(t, e(400));
}
function fs(t) {
  return t != null;
}
function _x(t, e) {
  var x = At;
  return Object[x(392)].toString[x(387)](t) === x(391) + e + "]";
}
const Y2 = $2;
(function(t, e) {
  const x = $2, n = t();
  for (; ; )
    try {
      if (parseInt(x(231)) / 1 * (parseInt(x(226)) / 2) + -parseInt(x(229)) / 3 + -parseInt(x(230)) / 4 + -parseInt(x(228)) / 5 * (-parseInt(x(227)) / 6) + -parseInt(x(232)) / 7 + -parseInt(x(224)) / 8 + parseInt(x(234)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ae, 779882);
function Ae() {
  const t = ["resolve", "9078256iyGcWp", "call", "4866lAwqrE", "8790xvxOEG", "2690beWzPG", "180087McowPv", "3617360IzDcPN", "103rEDmrk", "1138802gfuVoQ", "then", "18026550dxHHcn"];
  return Ae = function() {
    return t;
  }, Ae();
}
function $2(t, e) {
  return t = t - 224, Ae()[t];
}
const zn = Promise[Y2(235)]();
function yn(t) {
  const e = Y2;
  return t ? zn[e(233)](() => t[e(225)](null, z())) : zn.then(() => z());
}
(function(t, e) {
  const x = A0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(234)) / 1 * (-parseInt(x(250)) / 2) + parseInt(x(222)) / 3 + -parseInt(x(268)) / 4 * (parseInt(x(259)) / 5) + -parseInt(x(221)) / 6 * (parseInt(x(235)) / 7) + -parseInt(x(261)) / 8 + -parseInt(x(252)) / 9 + parseInt(x(228)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ne, 499600);
function Ne() {
  const t = ["groundCartesian", "height", "getPickRay", "4062IAVOAD", "1094790QuXQVC", "toDegrees", "SCENE2D", "COLUMBUS_VIEW", "EPSG:4326", "pickEllipsoid", "22440290vsWhqG", "camera", "isInteger", "wgs84ToWindowCoordinates", "floor", "rayPlane", "2qJsBWW", "8568QoCStS", "surfaceDistance", "offsetX", "negate", "offsetY", "longitude", "fromElements", "unproject", "scene", "cartographicToCartesian", "cartesianToCartographic", "cross", "fromCartesian", "pickPositionSupported", "subtract", "718514VTECtg", "cartesian", "8251407xgYzWp", "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", "direction", "defs", "add", "globe", "EPSG:4610", "4281865eXMLdx", "projectVector", "1808232hqUDku", "pick", "ellipsoid", "fromDegrees", "normalize", "pickPosition", "latitude", "4pVWOiu", "toFixed", "mode", "mapProjection", "UNIT_X"];
  return Ne = function() {
    return t;
  }, Ne();
}
function Z2(t, e) {
  const x = A0, n = z(e), a = n[x(243)][x(257)][x(263)], s = a.cartesianToCartographic(t);
  let r = +l0[x(223)](s.longitude)[x(214)](6), i = +l0[x(223)](s.latitude).toFixed(6), o = +s[x(219)][x(214)](6);
  return Number[x(230)](r) && (r = +r.toFixed(1)), Number.isInteger(i) && (i = +i[x(214)](1)), Number[x(230)](o) && (o = +o[x(214)](1)), { longitude: Number(r), latitude: Number(i), height: Number(o) };
}
function ac(t, e) {
  const x = A0, n = z(e), a = n.scene[x(257)][x(263)], s = a[x(245)](t);
  let r = +l0[x(223)](s[x(240)]), i = +l0.toDegrees(s.latitude), o = +s.height;
  return Number.isInteger(r) && (r = +r), Number[x(230)](i) && (i = +i), Number[x(230)](o) && (o = +o), { longitude: Number(r), latitude: Number(i), height: Number(o) };
}
function vn(t, e) {
  const x = A0, n = z(e);
  let a = new Y(t.x, t.y);
  return t instanceof MouseEvent && (a = new Y(t[x(237)], t[x(239)])), n[x(229)][x(227)](a, n[x(243)].globe[x(263)]);
}
function W0(t, e) {
  const x = z(e), n = vn(t, x);
  if (n) return Z2(n, x);
}
const X2 = W0;
function rc(t, e, x) {
  const n = A0, { longitude: a, latitude: s, height: r } = t, { longitude: i, latitude: o, height: c } = e, u = e0[n(264)](a, s, r), l = e0.fromDegrees(i, o, c), _ = Pt(x);
  return new qt(u, l, _[n(257)][n(263)])[n(236)];
}
function A0(t, e) {
  return t = t - 214, Ne()[t];
}
function sc(t, e, x) {
  const n = A0, a = e0[n(247)](t), s = e0.fromCartesian(e), r = Pt(x), i = new qt(a, s, r[n(257)][n(263)]);
  return Math[n(232)](i[n(236)]) / 1e3;
}
function ic(t) {
  const e = A0;
  return proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs"), proj4[e(255)]("EPSG:4610", e(253)), proj4(e(226), e(258), [t[e(240)], t[e(267)]]);
}
const us = new f2();
function oc(t, e) {
  const x = A0;
  if (t[x(248)] && t[x(215)] !== h0[x(224)]) return t[x(266)](e);
  if (!t[x(257)]) return;
  const n = t.camera.getPickRay(e, us), a = t.globe[x(262)](n, t);
  return a || t[x(229)][x(227)](e, t.globe.ellipsoid);
}
const ls = new g(), ds = new Y(), Fn = new g(), ps = new f2(), Bn = new e0();
let sx = new g();
const _s = new u2(g.UNIT_X, 0), hs = new g();
function cc(t, e, x) {
  const n = A0, a = t.frameState[n(216)][n(263)], s = x[n(218)];
  let r = x[n(251)].clone(), i = _s, o = hs, c = s, u = o;
  if (t[n(215)] === h0[n(225)]) {
    u = g[n(217)];
    const f = a.cartesianToCartographic(s, Bn);
    c = t[n(216)].project(f, ls), g[n(241)](c.z, c.x, c.y, c);
  }
  let l = g[n(246)](u, t[n(229)][n(254)], Fn);
  l = g.cross(u, l, l), l = g[n(265)](l, l), i = u2.fromPointNormal(c, l, i);
  const _ = t[n(229)][n(220)](e, ps);
  if (r = Ea[n(233)](_, i, r), R(r)) {
    if (t[n(215)] === h0.COLUMBUS_VIEW) {
      r = g[n(241)](r.y, r.z, r.x, r);
      const f = t[n(216)][n(242)](r, Bn);
      r = a[n(244)](f, r);
    }
    return Ma[n(231)](t, x[n(218)], ds).y < e.y && (o = g[n(238)](o, Fn)), sx = g[n(249)](r, s, sx), sx = g[n(260)](sx, o, sx), r = g[n(256)](s, sx, r), r;
  }
}
(function(t, e) {
  const x = Bx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(491)) / 1 * (parseInt(x(497)) / 2) + -parseInt(x(499)) / 3 + parseInt(x(494)) / 4 + parseInt(x(493)) / 5 + -parseInt(x(495)) / 6 + parseInt(x(496)) / 7 + parseInt(x(500)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Oe, 947502);
function Oe() {
  const t = ["12789624VRSmle", "floor", "map", "latitude", "longitude", "746ePgNkU", "coordinates", "8236725VQqwIm", "5467904cpmnpZ", "6676242tFWhmw", "1569680AVePZX", "3578Szpacu", "isArray", "4327383bORurn"];
  return Oe = function() {
    return t;
  }, Oe();
}
function Ve(t) {
  const e = Bx;
  return Array[e(498)](t) ? Kx(t) : Kx([t[e(490)], t[e(489)]]);
}
function Un(t, e) {
  const x = Kx(t), n = Kx(e);
  return ar(x, n);
}
function fc(t) {
  return y2(t);
}
function Vt(t, e, x) {
  const n = Ve(t), a = Ve(e);
  return rr(n, a, x);
}
function uc(t) {
  const e = Bx, x = t[e(502)]((a) => Ve(a)), n = tr(x);
  return nr(n);
}
function Zt(t) {
  const e = Bx;
  return t.geometry[e(492)];
}
function Bx(t, e) {
  return t = t - 489, Oe()[t];
}
function lc(t) {
  const e = Bx, x = t[e(502)]((s) => {
    const r = e;
    return [s[r(490)], s[r(489)]];
  });
  x.push([t[0][e(490)], t[0][e(489)]]);
  const n = y2([x]);
  return Math[e(501)](xr(n)) / 1e6 ?? 0;
}
function dc(t) {
  const { origin: e, distance: x, bearing: n, options: a } = t, s = Ve(e), r = er(s, x, n, a);
  return Zt(r);
}
const n0 = J2;
(function(t, e) {
  const x = J2, n = t();
  for (; ; )
    try {
      if (parseInt(x(256)) / 1 * (-parseInt(x(249)) / 2) + parseInt(x(262)) / 3 + -parseInt(x(270)) / 4 + parseInt(x(271)) / 5 + -parseInt(x(261)) / 6 + parseInt(x(250)) / 7 * (-parseInt(x(263)) / 8) + parseInt(x(257)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Le, 404774);
function J2(t, e) {
  return t = t - 248, Le()[t];
}
function Le() {
  const t = ["_velocityVectorProperty", "getValue", "rotationMatrixFromPositionVelocity", "addEventListener", "definitionChanged", "653248KKqbLe", "2033275JVVVIP", "position", "4zJVBsJ", "350vSeTcu", "raiseEvent", "ellipsoid", "WGS84", "forwardExtrapolationType", "fromRotationMatrix", "304049nsZKYr", "9992295CEjbMG", "_forwardExtrapolationType", "isConstant", "HOLD", "3923070PlaAin", "2192757NUdFGC", "66848HtHxkc", "_ellipsoid"];
  return Le = function() {
    return t;
  }, Le();
}
new g();
const jn = new g(), Hn = new l2();
class pc {
  constructor(e, x = Jx[n0(253)]) {
    const n = n0;
    this._velocityVectorProperty = new Ta(e, !0), this[n(269)] = new Nx(), this[n(258)] = Ut[n(260)], this[n(265)][n(254)] = this[n(258)], this[n(264)] = x, this[n(265)][n(269)][n(268)](() => {
      const a = n;
      this[a(269)][a(251)](this);
    });
  }
  get isConstant() {
    const e = n0;
    return this[e(265)][e(259)];
  }
  get [n0(248)]() {
    const e = n0;
    return this[e(265)][e(248)];
  }
  set position(e) {
    const x = n0;
    this[x(265)][x(248)] = e;
  }
  get [n0(252)]() {
    return this[n0(264)];
  }
  set [n0(252)](e) {
    const x = n0;
    this[x(264)] !== e && (this._ellipsoid = e, this[x(269)][x(251)](this));
  }
  get [n0(254)]() {
    return this[n0(258)];
  }
  set [n0(254)](e) {
    const x = n0;
    this[x(258)] = e, this[x(265)][x(254)] = this[x(258)];
  }
  [n0(266)](e, x) {
    const n = n0, a = this[n(265)][n(266)](e, jn);
    if (R(a))
      return Pa[n(267)](jn, a, this[n(264)], Hn), ka[n(255)](Hn, x);
  }
}
const K = wn;
(function(t, e) {
  const x = wn, n = t();
  for (; ; )
    try {
      if (parseInt(x(195)) / 1 * (parseInt(x(180)) / 2) + parseInt(x(193)) / 3 * (-parseInt(x(200)) / 4) + parseInt(x(185)) / 5 * (-parseInt(x(208)) / 6) + parseInt(x(181)) / 7 + -parseInt(x(198)) / 8 * (-parseInt(x(205)) / 9) + parseInt(x(217)) / 10 + parseInt(x(214)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Re, 520542);
function wn(t, e) {
  return t = t - 178, Re()[t];
}
function Re() {
  const t = ["divideByScalar", "definitionChanged", "subscription", "normalize", "_normalize", "addSeconds", "clone", "276231YEHXDi", "_currentCartesian", "731drFJJm", "time is required", "_getValueInertial", "493280DXsCdH", "addEventListener", "36eXtFjo", "isConstant", "_forwardExtrapolationType", "INERTIAL", "_currentVelocity", "54uIqAsW", "position", "equals", "205962CFXTen", "HOLD", "getInertialValue", "_subscription", "raiseEvent", "warn", "2134055FeWozv", "_definitionChanged", "subtract", "7593940WjerFv", "referenceFrame", "ZERO", "84rfUsIt", "5973443HUobdi", "_position", "getValue", "getOrbitFixedValue", "125gdjOlQ"];
  return Re = function() {
    return t;
  }, Re();
}
const bs = new g(), Yn = new g(), $n = new a0();
new g();
new g();
new g();
const ms = new a0(), j0 = 1 / 60;
class q2 {
  constructor(e, x = !0) {
    const n = wn;
    this._position = e, this[n(211)] = void 0, this._definitionChanged = new Nx(), this[n(190)] = x, this[n(194)] = void 0, this[n(204)] = void 0, this[n(202)] = Ut.HOLD;
  }
  get [K(188)]() {
    return this._subscription;
  }
  set [K(188)](e) {
    const x = K;
    this[x(211)] = e;
  }
  get definitionChanged() {
    return this[K(215)];
  }
  get [K(206)]() {
    return this[K(182)];
  }
  set [K(206)](e) {
    var a;
    const x = K, n = this[x(182)];
    n !== e && (R(n) && ((a = this._subscription) == null || a.call(this)), this._position = e, R(e) && (this[x(211)] = e == null ? void 0 : e[x(187)][x(199)](() => {
      this[x(215)].raiseEvent(this);
    }, this)), this._definitionChanged[x(212)](this));
  }
  set [K(189)](e) {
    const x = K;
    this[x(190)] !== e && (this[x(190)] = e, this._definitionChanged[x(212)](this));
  }
  get normalize() {
    return this[K(190)];
  }
  get forwardExtrapolationType() {
    return this[K(202)];
  }
  set forwardExtrapolationType(e) {
    const x = K;
    this[x(202)] = e;
  }
  getValue(e, x, n) {
    const a = K, s = this[a(182)];
    if (!s) return;
    if (!R(this._forwardExtrapolationType) || this[a(202)] !== Ut[a(209)])
      return s[a(178)] === An.INERTIAL ? (this._currentVelocity = this[a(197)](e, x, n), this._currentVelocity) : (this[a(204)] = this._getValueFixed(e, x, n), this[a(204)]);
    let r;
    if (s[a(178)] === An[a(203)]) {
      const i = s[a(210)](e), o = s[a(210)](a0[a(191)](e, j0, ms));
      if (g.equals(i, this[a(194)]) || g[a(207)](i, o)) {
        const c = s[a(183)](e);
        return R(c) && R(n) && c.clone(n), this[a(204)];
      }
      this._currentCartesian = i == null ? void 0 : i[a(192)](), r = this[a(197)](e, x, n);
    } else r = this._getValueFixed(e, x, n);
    if (!r) {
      const i = s[a(183)](e);
      return R(i) && R(n) && i.clone(n), this[a(204)];
    }
    return this._currentVelocity = r, this[a(204)];
  }
  [K(197)](e, x, n) {
    const a = K;
    if (!R(e)) throw new d2("time is required");
    !R(x) && (x = new g());
    const s = this[a(182)];
    if (s.isConstant) return this._normalize ? void 0 : g[a(192)](g[a(179)], x);
    let r = s[a(183)](e, bs), i = s.getInertialValue(a0.addSeconds(e, j0, $n), Yn);
    if (i = s[a(184)](e, i), !R(r) || !R(i) && (i = r, r = s.getInertialValue(a0[a(191)](e, -j0, $n), Yn), r = s[a(184)](e, r), !R(r)))
      return;
    if (g.equals(r, i)) return this[a(190)] ? void 0 : g.clone(g[a(179)], x);
    R(n) && r[a(192)](n);
    const o = g[a(216)](i, r, x);
    return this[a(190)] ? g.normalize(o, x) : g[a(186)](o, j0, x);
  }
  _getValueFixed(e, x, n) {
    const a = K;
    if (!R(e)) {
      console[a(213)](a(196));
      return;
    }
    !R(x) && (x = new g());
    const s = this[a(182)];
    if (s != null && s[a(201)]) return this[a(190)] ? void 0 : g[a(192)](g[a(179)], x);
    let r = s[a(183)](e), i = s[a(183)](a0[a(191)](e, j0, new a0()));
    if (!R(r) || !R(i) && (i = r, r = s[a(183)](a0.addSeconds(e, -j0, new a0())), !R(r)))
      return;
    if (g.equals(r, i)) return this[a(190)] ? void 0 : g[a(192)](g[a(179)], x);
    R(n) && r.clone(n);
    const o = g[a(216)](i, r, x);
    return this._normalize ? g[a(189)](o, x) : g[a(186)](o, j0, x);
  }
  [K(207)](e) {
    var n;
    const x = K;
    return this === e || e instanceof q2 && ((n = this[x(182)]) == null ? void 0 : n[x(207)](e[x(182)]));
  }
}
const M0 = Ge;
function Ge(t, e) {
  return t = t - 165, We()[t];
}
(function(t, e) {
  const x = Ge, n = t();
  for (; ; )
    try {
      if (parseInt(x(179)) / 1 * (parseInt(x(182)) / 2) + parseInt(x(173)) / 3 + -parseInt(x(183)) / 4 * (parseInt(x(166)) / 5) + -parseInt(x(181)) / 6 * (-parseInt(x(167)) / 7) + -parseInt(x(177)) / 8 + parseInt(x(171)) / 9 * (parseInt(x(193)) / 10) + -parseInt(x(184)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(We, 225689);
const Is = new g(), Zn = new g(), Lt = new e0(), Rt = new e0(), Xn = new a0(), Jn = 1 / 60;
let qn, Yx;
function We() {
  const t = ["_currentRotation", "addSeconds", "definitionChanged", "atan", "_getValue", "latitude", "WGS84", "longitude", "2072270FvAbYg", "isConstant", "35URsEFc", "175iYXPSs", "_position", "raiseEvent", "_subscription", "9CABRNB", "position", "394893UIZIAt", "time is required", "getValue", "abs", "2484624ErYOJR", "fromCartesian", "4EoJdSd", "equals", "83004qYlblg", "2242qQBwOl", "46132UsQYoN", "794134dxUkcE"];
  return We = function() {
    return t;
  }, We();
}
class _c {
  constructor(e) {
    const x = Ge;
    this[x(168)] = e, this.definitionChanged = new Nx(), this[x(170)] = void 0, this[x(185)] = void 0;
  }
  get isConstant() {
    var x;
    const e = Ge;
    return (x = this[e(168)]) == null ? void 0 : x[e(165)];
  }
  get [M0(172)]() {
    return this[M0(168)];
  }
  set [M0(172)](e) {
    var a;
    const x = M0, n = this[x(168)];
    n !== e && (R(n) && ((a = this[x(170)]) == null || a.call(this)), this[x(168)] = e, R(e) && (this._subscription = e[x(187)].addEventListener(() => {
      const s = x;
      this[s(187)][s(169)](this);
    }, this)), this[x(187)].raiseEvent(this));
  }
  getValue(e) {
    const x = M0, n = this._getValue(e);
    return n ? (this[x(185)] = n, this[x(185)]) : this[x(185)];
  }
  [M0(180)](e) {
    const x = M0;
    return this === e || this[x(168)][x(180)](e[x(168)]);
  }
  [M0(189)](e) {
    const x = M0;
    if (!R(e)) throw new d2(x(174));
    const n = this._position;
    if (n.isConstant) return;
    let a = n[x(175)](e, Is), s = n[x(175)](a0[x(186)](e, Jn, Xn), Zn);
    if (R(a) && !(!R(s) && (s = a, a = n[x(175)](a0[x(186)](e, -Jn, Xn), Zn), !R(a))) && !g[x(180)](a, s))
      return e0[x(178)](a, Jx[x(191)], Lt), e0[x(178)](s, Jx.WGS84, Rt), Yx = Rt[x(192)] - Lt[x(192)], qn = (Rt[x(190)] - Lt[x(190)]) / Yx, Math[x(188)](qn) - Yx / Math[x(176)](Yx) * Math.PI / 2;
  }
}
const gs = Q2;
(function(t, e) {
  const x = Q2, n = t();
  for (; ; )
    try {
      if (parseInt(x(489)) / 1 * (-parseInt(x(481)) / 2) + parseInt(x(485)) / 3 + parseInt(x(488)) / 4 + parseInt(x(486)) / 5 + parseInt(x(483)) / 6 + parseInt(x(482)) / 7 * (parseInt(x(487)) / 8) + -parseInt(x(484)) / 9 * (parseInt(x(490)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ze, 431597);
function Q2(t, e) {
  return t = t - 480, ze()[t];
}
const ys = Object[gs(480)];
function vs(t, e) {
  return function(x) {
    return t(x)[e];
  };
}
function ze() {
  const t = ["16106KkdkjP", "35rrLZfF", "3110490CfmPKZ", "162NyJkOj", "191325lMPFIc", "3798470wzUtyf", "17824tdADZY", "2458228aizsQo", "50PGpORa", "629630EaXMua", "assign"];
  return ze = function() {
    return t;
  }, ze();
}
const q = Cn;
(function(t, e) {
  const x = Cn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(347)) / 1 + -parseInt(x(358)) / 2 * (parseInt(x(366)) / 3) + -parseInt(x(352)) / 4 * (-parseInt(x(351)) / 5) + -parseInt(x(331)) / 6 + -parseInt(x(336)) / 7 + parseInt(x(356)) / 8 * (parseInt(x(342)) / 9) + parseInt(x(334)) / 10 * (parseInt(x(323)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fe, 382859);
class ws {
  constructor(e) {
    const x = Cn;
    e = e ?? {};
    const { color: n = W.YELLOW, labelColor: a = W[x(348)], tileWidth: s = 256, tileHeight: r = 256 } = e;
    this._tilingScheme = new Xt(), this[x(321)] = n[x(339)](), this[x(329)] = a[x(339)](), this._errorEvent = new Nx(), this[x(345)] = s, this[x(327)] = r, this._readyPromise = Promise[x(332)](!0);
  }
  get [q(353)]() {
  }
  get [q(326)]() {
    return this._tileWidth;
  }
  get [q(340)]() {
    return this[q(327)];
  }
  get [q(354)]() {
  }
  get [q(355)]() {
  }
  get [q(341)]() {
    return this[q(343)];
  }
  get [q(337)]() {
    return this[q(343)].rectangle;
  }
  get [q(324)]() {
  }
  get [q(350)]() {
    return this[q(369)];
  }
  get [q(363)]() {
    return !0;
  }
  get [q(344)]() {
    return this._readyPromise;
  }
  get [q(346)]() {
  }
  get [q(328)]() {
    return !0;
  }
  [q(361)]() {
  }
  [q(330)]() {
  }
  requestImage(e, x, n) {
    const a = q, s = document[a(325)](a(338));
    s.width = 256, s[a(365)] = 256;
    const r = s[a(322)]("2d");
    r[a(333)] = this[a(321)], r[a(367)] = 1, r[a(364)](1, 1, 255, 255), r[a(349)] = "bold 12px Arial", r[a(357)] = a(362), r.fillStyle = this[a(329)];
    const { west: i, north: o } = this._tilingScheme[a(335)](e, x, n), c = Cs(n, i, o);
    return r[a(360)](c, c.length * 45 / 14, 15), Promise[a(332)](s);
  }
}
function Cn(t, e) {
  return t = t - 321, Fe()[t];
}
function Cs(t, e, x) {
  const n = q;
  if (t > 10) {
    const a = (t - 8) / 2, s = e.toFixed(a), r = x.toFixed(a);
    return s + "°, " + r + "°";
  }
  return e[n(368)](1) + n(359) + x[n(368)](1) + "°";
}
function Fe() {
  const t = ["154957BvpbjD", "tileDiscardPolicy", "createElement", "tileWidth", "_tileHeight", "hasAlphaChannel", "_labelColor", "pickFeatures", "1673328ghjxXG", "resolve", "strokeStyle", "320fZHcrt", "tileXYToNativeRectangle", "3304714hXLGmR", "rectangle", "canvas", "toCssColorString", "tileHeight", "tilingScheme", "603HxuzuK", "_tilingScheme", "readyPromise", "_tileWidth", "credit", "319689yTmlVc", "YELLOW", "font", "errorEvent", "696855KjFTXA", "16DxQMsj", "proxy", "maximumLevel", "minimumLevel", "69464rbuQAc", "textAlign", "272982fwkWbm", "°, ", "fillText", "getTileCredits", "center", "ready", "strokeRect", "height", "3alLFQN", "lineWidth", "toFixed", "_errorEvent", "_color", "getContext"];
  return Fe = function() {
    return t;
  }, Fe();
}
function K2(t, e) {
  return t = t - 495, Be()[t];
}
const u0 = K2;
(function(t, e) {
  const x = K2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(502)) / 1 + parseInt(x(515)) / 2 * (parseInt(x(496)) / 3) + -parseInt(x(503)) / 4 + parseInt(x(508)) / 5 * (parseInt(x(505)) / 6) + -parseInt(x(506)) / 7 + parseInt(x(520)) / 8 + parseInt(x(511)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Be, 421625);
function Be() {
  const t = ["2367800LTFkBU", "layer", "#8aaec3", "_alpha", "addImageryProvider", "_color", "63UqgOAZ", "_labelColor", "isDestroyed", "imageryLayers", "destroy", "_layer", "468124QvAsfo", "1857416NFPtYp", "fromCssColorString", "6VlNSlq", "1692712WcYcZS", "tileGrid", "3703445MjuJST", "TRANSPARENT", "_show", "1428876KoyWLs", "show", "alpha", "_viewer", "38142Eihdju", "grid", "warn", "_init", "remove"];
  return Be = function() {
    return t;
  }, Be();
}
const Ss = W[u0(504)](u0(522));
class hc {
  constructor(e) {
    const x = u0, { viewer: n, gridShow: a = !0, show: s = !1, color: r = Ss, labelColor: i = W.WHITE.withAlpha(0.5) } = e ?? {};
    if (this[x(523)] = 1, this[x(514)] = n, this[x(501)] = { tileGrid: void 0, grid: void 0 }, this[x(510)] = s, !R(this[x(514)])) {
      console[x(517)]("This Viewer is " + this[x(514)]);
      return;
    }
    this._gridShow = a, this[x(510)] = s, this[x(495)] = r, this[x(497)] = i, this[x(518)]();
  }
  _init() {
    const e = u0, x = this[e(514)][e(499)];
    this._layer[e(507)] = x[e(524)](new ws({ color: this[e(495)], labelColor: this[e(497)] })), this._gridShow && (this._layer.grid = x[e(524)](new Da({ color: this[e(495)], backgroundColor: W[e(509)], glowColor: W[e(509)], cells: 4 }))), this[e(512)] = this[e(510)];
  }
  [u0(498)]() {
    return !1;
  }
  set [u0(513)](e) {
    const x = u0;
    this[x(501)][x(516)] && (this[x(501)].grid.alpha = e, this[x(501)][x(507)][x(513)] = e), this._alpha = e;
  }
  [u0(500)]() {
    const e = u0, x = this[e(514)].imageryLayers;
    return this[e(501)][e(507)] && x.remove(this[e(501)][e(507)]), this._layer[e(516)] && x[e(519)](this[e(501)][e(516)]), Qt(this);
  }
  set [u0(512)](e) {
    const x = u0;
    this[x(501)].tileGrid && (this._layer.tileGrid.show = e), this[x(501)][x(516)] && (this[x(501)][x(516)][x(512)] = e), this[x(510)] = e;
  }
  get [u0(521)]() {
    return this[u0(501)];
  }
}
(function(t, e) {
  for (var x = xa, n = t(); ; )
    try {
      var a = parseInt(x(483)) / 1 * (parseInt(x(489)) / 2) + parseInt(x(490)) / 3 + -parseInt(x(492)) / 4 + parseInt(x(486)) / 5 + parseInt(x(484)) / 6 + parseInt(x(491)) / 7 * (parseInt(x(487)) / 8) + -parseInt(x(488)) / 9;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ue, 178497);
function xa(t, e) {
  t = t - 483;
  var x = Ue(), n = x[t];
  return n;
}
function Ue() {
  var t = ["1676OhVfwt", "769503htAGrl", "9905kuejCR", "188012OUEwNJ", "1sxZCpn", "632856RAAwAf", "addMaterial", "700190lCqGre", "72GYcGJQ", "2610792rLzgrl"];
  return Ue = function() {
    return t;
  }, Ue();
}
function Es(t, e) {
  return function() {
    var x = xa;
    V._materialCache[x(485)](t, e);
  };
}
const $ = ea;
(function(t, e) {
  const x = ea, n = t();
  for (; ; )
    try {
      if (-parseInt(x(142)) / 1 + -parseInt(x(112)) / 2 * (parseInt(x(127)) / 3) + parseInt(x(147)) / 4 + parseInt(x(122)) / 5 + -parseInt(x(107)) / 6 + parseInt(x(130)) / 7 + -parseInt(x(135)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(je, 219518);
function ea(t, e) {
  return t = t - 107, je()[t];
}
V[$(108)] = $(121);
const ta = $(138);
V[$(131)].addMaterial(V.EllipseDiffuseType, { fabric: { type: V.EllipseDiffuse, uniforms: { color: new W(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: ta }, translucent: function() {
  return !0;
} });
function je() {
  const t = ["_percent", "499792TyXxnG", "getValueOrDefault", "rotation", `
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
        }`, "_rotation", "minAngle", "percent", "127772kWrrBi", "_glowPower", "_numberSubscription", "_taperPower", "openAngle", "1640772DDLJzz", "isConstant", "_maxAngle", "_definitionChanged", "speed", "_openAngleSubscription", "defineProperties", "_color", "color", "getValue", "1901700JNVlnE", "EllipseDiffuseType", "maxAngle", "equals", "gradient", "416qbayhQ", "_speedSubscription", "_minAngleSubscription", "_percentSubscription", "_speed", "_gradientSubscription", "_gradient", "_number", "_openAngle", "EllipseDiffuse", "1458435pVzByy", "_minAngle", "_glow", "number", "getType", "5433HCVBig", "getValueOrClonedDefault", "_rotationSubscription", "2810654kTGSlo", "_materialCache", "prototype", "_maxAngleSubscription"];
  return je = function() {
    return t;
  }, je();
}
const Ms = Es(V[$(108)], { fabric: { type: V.EllipseDiffuse, uniforms: { color: new W(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: ta }, translucent: function() {
  return !0;
} }), Ts = new W(1, 0, 0, 0.7), Ps = 2, ks = 0.03, Ds = 0.2, As = 5, Ns = 180, Os = -180;
function Ix(t) {
  const e = $;
  t = t ?? {}, this[e(150)] = new Nx(), this[e(154)] = void 0, this._colorSubscription = void 0, this[e(116)] = void 0, this[e(113)] = void 0, this[e(134)] = void 0, this[e(115)] = void 0, this[e(118)] = void 0, this[e(117)] = void 0, this._number = void 0, this[e(144)] = void 0, this[e(139)] = void 0, this[e(129)] = void 0, this[e(120)] = void 0, this[e(152)] = void 0, this[e(149)] = void 0, this[e(133)] = void 0, this[e(123)] = void 0, this[e(114)] = void 0, this[e(155)] = t[e(155)], this[e(151)] = t.speed, this.percent = t[e(141)], this.gradient = t.gradient, this[e(125)] = t[e(125)], this[e(137)] = t[e(137)], this[e(146)] = t[e(146)], this[e(109)] = t[e(109)], this[e(140)] = t[e(140)];
}
Object[$(153)](Ix[$(132)], { isConstant: { get: function() {
  const t = $;
  return p0.isConstant(this[t(154)]) && p0[t(148)](this[t(124)]);
} }, definitionChanged: { get: function() {
  return this._definitionChanged;
} }, color: E0($(155)), speed: E0($(151)), percent: E0($(141)), gradient: E0("gradient"), number: E0($(125)), rotation: E0($(137)), openAngle: E0("openAngle"), maxAngle: E0($(109)), minAngle: E0("minAngle") }), Ix[$(132)][$(126)] = function(t) {
  return $(121);
}, Ix.prototype[$(156)] = function(t, e) {
  var s, r;
  const x = $;
  !R(e) && (e = {}), e.color = p0[x(128)](this._color, t, Ts, e[x(155)]), e[x(151)] = p0[x(136)](this._speed, t, Ps, e[x(151)]), e[x(141)] = p0[x(136)](this._percent, t, ks, e[x(141)]), e.gradient = p0[x(136)](this[x(118)], t, Ds, e[x(111)]), e[x(125)] = p0[x(136)](this[x(119)], t, As, e[x(125)]);
  let n = (s = this.rotation) == null ? void 0 : s.getValue();
  const a = (r = this[x(146)]) == null ? void 0 : r[x(156)]();
  if (Wn(n) && Wn(a)) {
    n %= 360;
    const i = a / 2;
    let o = -n + i + 90, c = -n - i + 90;
    n > 270 && (o += 360, c += 360), n < -90 && (o -= 360, c -= 360), e[x(109)] = o, e.minAngle = c;
  } else {
    const i = p0[x(136)](this[x(149)], t, Ns, e[x(109)]), o = p0.getValueOrDefault(this._minAngle, t, Os, e.minAngle);
    e[x(109)] = i > o ? i : o, e.minAngle = o < i ? o : i;
  }
  return e;
}, Ix.prototype[$(110)] = function(t) {
  const e = $;
  return this === t || t instanceof Ix && p0[e(110)](this[e(154)], t[e(154)]) && p0[e(110)](this[e(143)], t[e(143)]) && p0[e(110)](this[e(145)], t._taperPower);
};
const P = na;
(function(t, e) {
  const x = na, n = t();
  for (; ; )
    try {
      if (parseInt(x(384)) / 1 + -parseInt(x(399)) / 2 * (-parseInt(x(385)) / 3) + -parseInt(x(404)) / 4 * (parseInt(x(396)) / 5) + parseInt(x(377)) / 6 * (parseInt(x(374)) / 7) + parseInt(x(378)) / 8 + parseInt(x(388)) / 9 + -parseInt(x(383)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(He, 928711);
function na(t, e) {
  return t = t - 373, He()[t];
}
function He() {
  const t = ["PolylineMilitaryType", "SensorWaveType", "PolylineTrailType", `
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
      }`, "SensorWave", "PolylineFlow", "CircleDiffuseType", "13305kOlKdM", "PolylineTrail", "CommunicationFlow", "2zGsZFF", `
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
    }`, `
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
    }`, "PolylineMilitary", "addMaterial", "2612GYdqeF", `
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
    }`, `
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
 }`, "7jrkbLF", "PolylineFlowType", "CircleDiffuse", "4846470ZnFaGP", "13641368FNwgTv", `
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
        }`, "CommunicationFlowType", "_materialCache", "BombRadiation", "23857430chIWVV", "1367965qTQqmO", "1372005YPvkJe", "BombRadiationType", "DefaultImageId", "6424839yafrzp"];
  return He = function() {
    return t;
  }, He();
}
V.BombRadiationType = P(382);
const Vs = P(373);
V[P(381)][P(403)](V[P(386)], { fabric: { type: V[P(386)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 3, count: 2, gradient: 0.5 }, source: Vs }, translucent: function(t) {
  return !0;
} }), V.SensorWaveType = P(393);
const Ls = P(392);
V[P(381)][P(403)](V[P(390)], { fabric: { type: V[P(390)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 3, count: 4, gradient: 0.2 }, source: Ls }, translucent: function(t) {
  return !0;
} }), V[P(395)] = P(376);
const Rs = P(401);
V[P(381)][P(403)](V[P(395)], { fabric: { type: V[P(395)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 15 }, source: Rs }, translucent: function(t) {
  return !0;
} }), V.CommunicationFlowType = P(398);
const Gs = P(400);
V[P(381)][P(403)](V[P(380)], { fabric: { type: V[P(380)], uniforms: { color: new W(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 }, source: Gs }, translucent: function(t) {
  return !0;
} }), V[P(375)] = P(394);
const Ws = P(379);
V._materialCache[P(403)](V[P(375)], { fabric: { type: V[P(375)], uniforms: { color: new W(1, 0, 0, 0.7), speed: 45, percent: 0.03, gradient: 0.2, number: 5 }, source: Ws }, translucent: function(t) {
  return !0;
} }), V[P(391)] = P(397);
const zs = `
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
        }`;
V[P(381)].addMaterial(V[P(391)], { fabric: { type: V[P(391)], uniforms: { color: new W(1, 0, 0, 0.7), image: V[P(387)], speed: 45, repeat: new Y(1, 1) }, source: zs }, translucent: function(t) {
  return !0;
} }), V[P(389)] = P(402);
const Fs = P(405);
V[P(381)][P(403)](V[P(389)], { fabric: { type: V.PolylineMilitaryType, uniforms: { color: new W(1, 0, 0, 0.7), imageHead: V[P(387)], image: V[P(387)], repeat: new Y(1, 1) }, source: Fs }, translucent: function(t) {
  return !0;
} });
function Bs() {
  Ms();
}
const H0 = Sn;
function Sn(t, e) {
  return t = t - 489, Ye()[t];
}
(function(t, e) {
  const x = Sn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(500)) / 1 * (-parseInt(x(498)) / 2) + parseInt(x(489)) / 3 + parseInt(x(503)) / 4 + -parseInt(x(492)) / 5 + -parseInt(x(494)) / 6 * (-parseInt(x(495)) / 7) + -parseInt(x(506)) / 8 * (-parseInt(x(505)) / 9) + -parseInt(x(490)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ye, 937929);
const { sqrt: Y0, pow: v, sin: I0, cos: f0, tan: Qn, abs: Kn } = Math, Us = { BEIJING54: { a: 6378245, b: 63568630188e-4 }, XIAN80: { a: 6378137, b: 63567523142e-4 }, CGCS2000: { a: 6378137, b: 635675231414e-5 } };
function Ye() {
  const t = ["getLonLat", "50330AqQncP", "_getLonLat", "9ZMYnSs", "init", "floor", "4867332GmjfEx", "parseInt", "2618487kAIUCK", "24yJzyTm", "getXY", "4696584DcTQUI", "23942120qTWAAR", "string", "7067600veepNO", "getFloorInteger", "2591958YhlZdt", "14FjCDXp", "_getXY"];
  return Ye = function() {
    return t;
  }, Ye();
}
class aa {
  constructor(e) {
    const x = Sn;
    this.e1 = 0, this.a = 0, this.b = 0, this.f = 0, this.e = 0, this[x(501)](e);
  }
  [H0(501)](e) {
    const { a: x, b: n } = Us[e], a = (x - n) / x, s = Y0(2 * a - v(a, 2));
    this.e1 = s / Y0(1 - v(s, 2)), this.a = x, this.b = n, this.f = a, this.e = s;
  }
  getFloorInteger(e) {
    const x = H0;
    return typeof e === x(491) ? Number[x(504)](e) : Math[x(502)](e);
  }
  [H0(507)](e, x, n = 6, a = 0, s = 5e5, r = 0) {
    let o = this[H0(493)](Kn(e) / n + 1) * n - 3;
    return o = e > 0 ? o : -o, this._getXY(e, x, o, a, s, r);
  }
  [H0(497)](e, x, n, a = 6, s = 0, r = 5e5, i = 0) {
    const o = H0;
    let c = Kn(n) * a - 3;
    return c = n > 0 ? c : -c, this[o(499)](e, x, c, s, r, i);
  }
  [H0(496)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, b: o, e: c, e1: u } = this, l = s, _ = r, f = a, d = n, p = (x - f) * Math.PI / 180, b = (e - d) * Math.PI / 180, I = i / Y0(1 - v(c * I0(p), 2)), M = v(i, 2) / o, k = 1 - 3 * v(u, 2) / 4 + 45 * v(u, 4) / 64 - 175 * v(u, 6) / 256 + 11025 * v(u, 8) / 16384, G = k - 1, T = 15 / 32 * v(u, 4) - 175 / 384 * v(u, 6) + 3675 / 8192 * v(u, 8), O = 0 - 35 / 96 * v(u, 6) + 735 / 2048 * v(u, 8), F = 315 / 1024 * v(u, 8), B = M * (k * p + I0(p) * (G * f0(p) + T * v(f0(p), 3) + O * v(f0(p), 5) + F * v(f0(p), 7))), D = Qn(p), E = u * f0(p), C = B + v(b, 2) / 2 * I * I0(p) * f0(p) + v(b, 4) * I * I0(p) * v(f0(p), 3) / 24 * (5 - v(D, 2) + 9 * v(E, 2) + 4 * v(E, 4)) + v(b, 6) * I * I0(p) * v(f0(p), 5) * (61 - 58 * v(D, 2) + v(D, 4)) / 720;
    return { x: b * I * f0(p) + v(b, 3) * I / 6 * v(f0(p), 3) * (1 - v(D, 2) + v(E, 2)) + v(b, 5) * I / 120 * v(f0(p), 5) * (5 - 18 * v(D, 2) + v(D, 4) + 14 * v(E, 2) - 58 * v(E, 2) * v(D, 2)) + l, y: C + _ };
  }
  _getLonLat(e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, e: o, e1: c } = this, u = 1, l = n, _ = s, f = r, d = a, p = (1 - Y0(1 - v(o, 2))) / (1 + Y0(1 - v(o, 2))), b = (x - f) / u, I = b / (i * (1 - v(o, 2) / 4 - 3 * v(o, 4) / 64 - 5 * v(o, 6) / 256)), M = I + (3 * p / 2 - 27 * v(p, 3) / 32) * I0(2 * I) + (21 * v(p, 2) / 16 - 55 * v(p, 4) / 32) * I0(4 * I) + 151 * v(p, 3) / 96 * I0(6 * I) + 1097 / 512 * v(p, 4) * I0(8 * I), k = i * (1 - v(o, 2)) / Y0(v(1 - v(o * I0(M), 2), 3)), G = i / Y0(1 - v(o * I0(M), 2)), T = v(Qn(M), 2), O = (e - _) / (u * G), F = v(c, 2) * v(f0(M), 2), B = M - G * Math.tan(M) / k * (v(O, 2) / 2 - (5 + 3 * T + 10 * F - 9 * T * F - 4 * v(F, 2) - 9 * v(c, 2)) * v(O, 4) / 24 + (61 + 90 * T + 45 * v(T, 2) - 256 * v(c, 2) - 3 * v(F, 2)) * v(O, 6) / 720);
    return { longitude: (l * Math.PI / 180 + 1 / f0(M) * (O - (1 + 2 * T + F) * v(O, 3) / 6 + (5 - 2 * F + 28 * T - 3 * v(F, 2) + 8 * v(c, 2) + 24 * v(T, 2)) * v(O, 5) / 120)) * 180 / Math.PI, latitude: B * 180 / Math.PI + d };
  }
}
function ra(t, e) {
  return t = t - 386, Xe()[t];
}
const cx = ra;
(function(t, e) {
  const x = ra, n = t();
  for (; ; )
    try {
      if (-parseInt(x(394)) / 1 * (-parseInt(x(390)) / 2) + -parseInt(x(396)) / 3 + parseInt(x(386)) / 4 * (parseInt(x(392)) / 5) + parseInt(x(398)) / 6 + parseInt(x(391)) / 7 * (-parseInt(x(395)) / 8) + parseInt(x(393)) / 9 + -parseInt(x(388)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xe, 956904);
const Z = 2.999999, sa = { font: cx(403), fillColor: W[cx(400)], outlineColor: W.BLACK, outlineWidth: 4, style: n2[cx(399)], disableDepthTestDistance: Number[cx(387)] };
function $e(t, e) {
  const x = cx;
  return { positions: t, width: 0.5, material: V[x(389)](x(402), { color: e }) };
}
function Ze(t, e, x, n = !0) {
  const a = cx;
  return t._labels[a(401)]({ ...t._labelOptions, position: e, text: x, horizontalOrigin: n ? Bt[a(397)] : Bt.CENTER });
}
function Xe() {
  const t = ["WHITE", "add", "Color", "bold 1rem Arial", "1609164IRSTKp", "POSITIVE_INFINITY", "14159480apZfst", "fromType", "2CJKYZX", "15946iAwimf", "15gdCvqk", "3536217GzZNBt", "872675sKJYuh", "2784YIAdvP", "388059PmDAOE", "CENTER", "4934928SmkNXy", "FILL_AND_OUTLINE"];
  return Xe = function() {
    return t;
  }, Xe();
}
const ix = [1e5, 5e4, 1e4, 5e3, 1e3, 500, 100, 50, 10, 5, 1];
function ia(t, e = 0) {
  return !ix[e] || ix[e] === 1 ? 1 : t / ix[e] > 10 ? ix[e] : t / ix[e] > 3 ? ix[e + 1] : ia(t, e + 2);
}
function js(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
const s0 = En;
function Je() {
  const t = ["6738802dqyuOp", "2IwvxzZ", "8XRFrUk", "_polylines", "_labels", "_collection", "removeAll", "1930704CGmLAz", "34035MyAsME", "3313890kInanL", "show", "push", "379496uRUxhf", "10051400QDuJWG", "add", "2139921PhPBdh", "570Vwvdxu"];
  return Je = function() {
    return t;
  }, Je();
}
(function(t, e) {
  const x = En, n = t();
  for (; ; )
    try {
      if (parseInt(x(184)) / 1 + parseInt(x(190)) / 2 * (parseInt(x(187)) / 3) + -parseInt(x(179)) / 4 + parseInt(x(180)) / 5 * (parseInt(x(188)) / 6) + -parseInt(x(189)) / 7 * (-parseInt(x(174)) / 8) + -parseInt(x(181)) / 9 + -parseInt(x(185)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Je, 846128);
function En(t, e) {
  return t = t - 174, Je()[t];
}
class oa {
  constructor(e) {
    const x = En;
    this[x(177)] = new Aa(e), this[x(175)] = [];
  }
  [s0(186)](e) {
    const x = s0, n = this[x(177)].add(e);
    return this[x(175)][x(183)](n), n;
  }
  [s0(178)]() {
    const e = s0;
    this[e(177)].removeAll(), this[e(175)] = [];
  }
  get show() {
    const e = s0;
    return this[e(177)][e(182)];
  }
  set [s0(182)](e) {
    const x = s0;
    this[x(177)][x(182)] = e;
  }
}
class ca {
  constructor() {
    const e = s0;
    this._collection = new Na(), this[e(176)] = [];
  }
  [s0(186)](e) {
    const x = s0, n = this[x(177)].add(e);
    return this[x(176)][x(183)](n), n;
  }
  [s0(178)]() {
    const e = s0;
    this[e(177)].removeAll(), this[e(176)] = [];
  }
  get [s0(182)]() {
    const e = s0;
    return this._collection[e(182)];
  }
  set show(e) {
    const x = s0;
    this[x(177)].show = e;
  }
}
const J = Mn;
(function(t, e) {
  const x = Mn, n = t();
  for (; ; )
    try {
      if (parseInt(x(413)) / 1 * (parseInt(x(393)) / 2) + parseInt(x(426)) / 3 * (-parseInt(x(419)) / 4) + -parseInt(x(363)) / 5 * (-parseInt(x(407)) / 6) + -parseInt(x(421)) / 7 * (parseInt(x(390)) / 8) + parseInt(x(370)) / 9 + parseInt(x(409)) / 10 + -parseInt(x(431)) / 11 * (parseInt(x(355)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qe, 870380);
function Mn(t, e) {
  return t = t - 346, qe()[t];
}
function qe() {
  const t = ["_zoneWide", "clientHeight", "position", "_getLonLat", "_drawLines", "_lines", "remove", "color", "coordinates", "distance", "42808ZvBINx", "uniforms", "color2D", "482gairWF", "_labelOffset", "_xRange", "latitude", "update", "pickEllipsoid", "add", "clientWidth", "_color2D", "CGCS2000", "_scale", "_labels", "north", "camera", "222KnxUlN", "_gaussTransform", "7182770DqcyPr", "_getXY", "labelOffset", "_yRange", "5198QTErAu", "forEach", "viewer", "destroy", "geometry", "longitude", "12BNZwVs", "xRange", "14zbgAEd", "removeAll", "canvas", "east", "positions", "1707909HVMJWf", "isDestroyed", "_primitives", "_measuredGraticule", "length", "231kaaiWa", "changeSceneMode", "material", "changed", "_show", "X: ", "withAlpha", "GRAY", "_getExtentView", "labelOptions", "ellipsoid", "primitives", "_viewer", "fromCartesian", "993720jglyWe", "_color", "west", "_polylines", "gap", "south", "_center", "show", "178045aIolRe", "init", "_gap", "destination", "SCENE3D", "create", "push", "9355257SoUYkD", "cartesianToCanvasCoordinates", "Y: ", "addEventListener", "_rectangle", "WHITE", "_cameraListener", "scene", "scale", "_labelOptions"];
  return qe = function() {
    return t;
  }, qe();
}
const { abs: x2 } = Math;
class bc {
  constructor(e) {
    const x = Mn;
    e = e ?? {}, this[x(353)] = e[x(415)], this[x(361)] = e.center, this[x(403)] = e[x(378)] ?? 1e3, this[x(356)] = e.color ?? W[x(375)].withAlpha(0.9), this[x(401)] = e[x(392)] ?? W[x(348)][x(347)](0.8), this[x(379)] = { ...sa, ...e[x(350)] }, this[x(365)] = e[x(359)] ?? 1, this[x(395)] = e[x(420)] ?? 50, this[x(412)] = e.xRange ?? 25, this[x(394)] = e[x(411)] ?? 0, this[x(380)] = 6, this[x(408)] = new aa(x(402)), this[x(428)] = this._viewer[x(377)][x(352)][x(399)](new p2()), this[x(385)] = this._primitives[x(399)](new oa({ disableDepthTest: !0 })), this[x(404)] = this[x(428)].add(new ca()), this[x(435)] = !0, this[x(353)]._measuredGraticule = this, this[x(364)]();
  }
  get [J(362)]() {
    return this[J(435)];
  }
  set show(e) {
    const x = J;
    this[x(435)] !== e && (this[x(435)] = e, this[x(428)][x(362)] = e);
  }
  set center(e) {
    const x = J;
    R(e) && (js(this[x(361)], e) || (this[x(361)] = e, this._getExtentView(), this.create()));
  }
  set [J(378)](e) {
    const x = J;
    this[x(403)] !== e && (this[x(403)] = e, this[x(349)](), this[x(368)]());
  }
  [J(432)]() {
    const e = J, x = this[e(385)][e(358)], n = this[e(353)][e(377)].mode === h0.SCENE3D ? this[e(356)] : this._color2D;
    x.length > 0 && x[e(414)]((a) => {
      const s = e;
      a[s(433)][s(391)][s(387)] = n;
    });
  }
  init() {
    const e = J, x = this[e(353)][e(377)];
    this[e(376)] = x[e(406)][e(434)][e(373)](() => {
    });
  }
  [J(397)]() {
    const e = J, x = this[e(385)]._polylines;
    if (x[e(430)] === 0) return;
    const n = this[e(353)][e(377)], a = this[e(404)][e(404)];
    let s = n[e(371)](a[0][e(382)]), r = n.cartesianToCanvasCoordinates(a[1][e(382)]);
    R(s) && R(r) ? this[e(404)][e(362)] = Y[e(389)](s, r) >= 100 : this[e(404)][e(362)] = !0, s = n[e(371)](x[0][e(425)][0]), r = n[e(371)](x[0].positions[1]), R(s) && R(r) ? this._lines[e(362)] = Y[e(389)](s, r) >= 4 : this._lines[e(362)] = !0;
  }
  [J(368)]() {
    const e = J;
    this[e(385)][e(422)](), this[e(404)][e(422)]();
    const x = this._zoneWide, { west: n, east: a, north: s, south: r } = this[e(349)]();
    let i = parseInt(x2(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let o = parseInt(x2(a) / x + 1) * x - 3;
    switch (o = a > 0 ? o : -o, o - i) {
      case 24:
        this[e(384)](i, n, i + Z, s, r), this[e(384)](i + 6, i + 3, i + 6 + Z, s, r), this[e(384)](i + 12, i + 9, i + 12 + Z, s, r), this[e(384)](i + 18, i + 15, i + 18 + Z, s, r), this[e(384)](o, o - 3, a, s, r);
        break;
      case 18:
        this[e(384)](i, n, i + Z, s, r), this[e(384)](i + 6, i + 3, i + 6 + Z, s, r), this[e(384)](i + 12, i + 9, i + 12 + Z, s, r), this._drawLines(o, o - 3, a, s, r);
        break;
      case 12:
        this[e(384)](i, n, i + Z, s, r), this[e(384)](i + 6, i + 3, i + 6 + Z, s, r), this._drawLines(o, o - 3, a, s, r);
        break;
      case 6:
        this[e(384)](i, n, i + Z, s, r), this[e(384)](o, i + 3, a, s, r);
        break;
      case 0:
        this._drawLines(i, n, a, s, r);
        break;
    }
  }
  [J(384)](e, x, n, a, s) {
    const r = J;
    let i = e - 3;
    i = x < i ? i : x;
    let o = e + Z;
    o = n > o ? o : n;
    const { x: c, y: u } = this[r(408)][r(410)](i, s, e), { x: l, y: _ } = this[r(408)][r(410)](o, a, e), f = this[r(403)], d = (parseInt(c / f) - 1) * f, p = (parseInt(l / f) + 1) * f, b = (parseInt(u / f) - 1) * f, I = (parseInt(_ / f) + 1) * f, M = this[r(353)][r(377)].mode === h0[r(367)] ? this[r(356)] : this._color2D, k = this[r(394)];
    let G, T, O, F = 0, B = 0;
    for (let D = d; D <= p; D += f) {
      T = [], G = [];
      for (let E = b; E <= I; E += f) {
        const { longitude: C, latitude: U } = this._gaussTransform._getLonLat(D, E, e);
        T[r(369)](g.fromDegrees(C, U)), G.push([D, E]);
      }
      this[r(385)][r(399)]($e(T, M)), F % (this._gap + 1) === 0 && (O = T.length - 1 - k, G[O] && Ze(this, T[O], r(346) + G[O][0])), F++;
    }
    for (let D = b; D <= I; D += f) {
      T = [], G = [];
      for (let E = d; E <= p; E += f) {
        const { longitude: C, latitude: U } = this[r(408)][r(383)](E, D, e);
        T[r(369)](g.fromDegrees(C, U)), G[r(369)]([E, D]);
      }
      this[r(385)][r(399)]($e(T, M)), B % (this[r(365)] + 1) === 0 && (O = k + 1, G[O] && Ze(this, T[O], r(372) + G[O][1], !1)), B++;
    }
  }
  [J(349)]() {
    const e = J, [x, n] = this[e(361)], a = turf.point([x, n]), s = turf[e(366)](a, this[e(395)] * this[e(403)] / 2e3, -90), r = turf.destination(a, this[e(395)] * this[e(403)] / 2e3, 90), i = turf.destination(a, this[e(412)] * this[e(403)] / 2e3, 0), o = turf.destination(a, this._yRange * this[e(403)] / 2e3, 180);
    return this[e(374)] = { west: s.geometry[e(388)][0], north: i[e(417)][e(388)][1], east: r[e(417)][e(388)][0], south: o.geometry[e(388)][1] }, this[e(374)];
  }
  _getScreenViewRange() {
    const e = J, x = this[e(353)][e(377)][e(406)], n = this[e(353)][e(377)][e(423)], a = this[e(353)][e(377)].globe[e(351)], s = 40, r = 20, i = { north: x[e(398)](new Y(n.clientWidth / 2, r), a), south: x[e(398)](new Y(n[e(400)] / 2, n[e(381)] - r), a), west: x[e(398)](new Y(s, n.clientWidth / 2), a), east: x[e(398)](new Y(n[e(381)] - s, n[e(400)] / 2), a) };
    return { north: i.north ? e0.fromCartesian(i[e(405)])[e(396)] : void 0, south: i[e(360)] ? e0[e(354)](i.south)[e(396)] : void 0, west: i.west ? e0[e(354)](i[e(357)]).longitude : void 0, east: i[e(424)] ? e0[e(354)](i.east)[e(418)] : void 0 };
  }
  [J(427)]() {
    return !1;
  }
  [J(416)]() {
    const e = J;
    return this[e(376)](), this[e(353)].scene[e(352)][e(386)](this[e(428)]), delete this._viewer[e(429)], Qt(this);
  }
}
const H = Tn;
(function(t, e) {
  const x = Tn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(354)) / 1 * (parseInt(x(409)) / 2) + parseInt(x(345)) / 3 + -parseInt(x(379)) / 4 + parseInt(x(407)) / 5 + -parseInt(x(413)) / 6 * (parseInt(x(419)) / 7) + parseInt(x(394)) / 8 + parseInt(x(341)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qe, 919441);
function Tn(t, e) {
  return t = t - 341, Qe()[t];
}
function Qe() {
  const t = ["_yGap", "changeSceneMode", "_primitives", "_viewer", "664450ARyhHO", "screenOffsetY", "2wQmdUy", "clientHeight", "init", "globe", "829212fqwsTS", "withAlpha", "is3DMode", "fromCartographicArray", "_getXY", "viewer", "7nUcfjE", "pickEllipsoid", "10686528FggIAi", "container", "_color", "scene", "4268166qhXAHD", "addEventListener", "_drawLines", "screenOffsetX", "SCENE3D", "_screenCenterPosition", "labelOptions", "color2D", "_measuredGraticule", "272981qxVFfW", "_getLonLat", "_gaussTransform", "_labelOptions", "camera", "canvas", "latitude", "_cameraListener", "_zoneWide", "remove", "changed", "isDestroyed", "longitude", "color", "toDegrees", "clientWidth", "_color2D", "primitives", "mode", "forEach", "north", "_xGap", "xGap", "push", "south", "6360652MZhYKY", "show", "fromDegrees", "render", "_lines", "_getScreenViewRange", "resize", "_screenOffsetX", "fromCartesian", "destroy", "_getExtentView", "_canvasResizeListener", "_show", "add", "uniforms", "1422264PNUXvy", "_polylines", "round", "zoneWide", "_labelOffset", "_labels", "length", "CGCS2000", "MAX_VALUE"];
  return Qe = function() {
    return t;
  }, Qe();
}
const { abs: Gt } = Math;
class mc {
  constructor(e) {
    const x = Tn;
    e = e ?? {}, this._viewer = e[x(418)], this[x(343)] = e[x(367)] ?? W.WHITE[x(414)](0.5), this[x(370)] = e[x(352)] ?? W.GRAY[x(414)](0.8), this[x(362)] = e[x(397)] ?? 6, this[x(375)] = e[x(376)] ?? 1, this[x(403)] = e.xGap ?? 1, this[x(357)] = { ...sa, ...e[x(351)] }, this[x(386)] = e[x(348)] ?? 40, this._screenOffsetY = e[x(408)] ?? 20, this[x(398)] = e.labelOffset ?? 3, this[x(356)] = new aa(x(401)), this._primitives = this[x(406)][x(344)][x(371)][x(392)](new p2()), this._lines = this[x(405)].add(new oa({ disableDepthTest: !0 })), this[x(399)] = this[x(405)][x(392)](new ca()), this[x(391)] = !0, this._centerZone = void 0, this[x(411)](), this[x(406)][x(353)] = this;
  }
  [H(404)]() {
    const e = H, x = this[e(383)][e(395)], n = this.is3DMode() ? this[e(343)] : this[e(370)];
    x[e(400)] > 0 && x[e(373)]((a) => {
      const s = e;
      a.material[s(393)][s(367)] = n;
    });
  }
  [H(415)]() {
    const e = H;
    return this[e(406)][e(344)][e(372)] === h0[e(349)];
  }
  set color(e) {
    const x = H;
    this[x(415)]() ? this[x(343)] = e : this[x(370)] = e, this[x(404)]();
  }
  get [H(367)]() {
    const e = H;
    return this[e(415)]() ? this._color : this[e(370)];
  }
  get [H(380)]() {
    return this._show;
  }
  set [H(380)](e) {
    const x = H;
    this[x(391)] !== e && (this[x(391)] = e, this[x(405)].show = e);
  }
  [H(411)]() {
    const e = H, x = this[e(406)].scene;
    this[e(361)] = x[e(358)][e(364)].addEventListener(() => {
      this[e(391)] && this.render();
    }), this[e(390)] = this[e(406)][e(342)][e(346)](e(385), () => {
      this[e(391)] && this.render();
    });
  }
  [H(382)]() {
    const e = H;
    this[e(383)].removeAll(), this[e(399)].removeAll();
    const x = this[e(362)];
    let { west: n, north: a, east: s, south: r } = this[e(389)]();
    n = l0.toDegrees(n), s = l0[e(368)](s), a = l0[e(368)](a), r = l0[e(368)](r);
    let i = parseInt(Gt(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let o = parseInt(Gt(s) / x + 1) * x - 3;
    switch (o = s > 0 ? o : -o, o - i) {
      case 24:
        this[e(347)](i, n, i + Z, a, r, !0), this[e(347)](i + 6, i + 3, i + 6 + Z, a, r, !0), this[e(347)](i + 12, i + 9, i + 12 + Z, a, r, !0), this[e(347)](i + 18, i + 15, i + 18 + Z, a, r, !0), this[e(347)](o, o - 3, s, a, r);
        break;
      case 18:
        this[e(347)](i, n, i + Z, a, r, !0), this[e(347)](i + 6, i + 3, i + 6 + Z, a, r, !0), this._drawLines(i + 12, i + 9, i + 12 + Z, a, r, !0), this[e(347)](o, o - 3, s, a, r);
        break;
      case 12:
        this[e(347)](i, n, i + Z, a, r, !0), this[e(347)](i + 6, i + 3, i + 6 + Z, a, r, !0), this[e(347)](o, o - 3, s, a, r);
        break;
      case 6:
        this[e(347)](i, n, i + Z, a, r, !0), this._drawLines(o, i + 3, s, a, r);
        break;
      case 0:
        this[e(347)](i, n, s, a, r);
        break;
    }
  }
  [H(365)]() {
    return !1;
  }
  [H(388)]() {
    const e = H;
    return this[e(361)](), this._canvasResizeListener(), this[e(406)].scene[e(371)][e(363)](this._primitives), this[e(391)] = !1, Qt(this);
  }
  [H(347)](e, x, n, a, s, r = !1) {
    const i = H;
    let o = e - 3;
    o = x < o ? o : x;
    let c = e + Z;
    c = n > c ? c : n;
    let u = Gt(parseInt(e / 6)) + 1;
    u = e > 0 ? u : 60 - u + 1;
    const { x: l, y: _ } = this[i(356)][i(417)](o, s, e), { x: f, y: d } = this[i(356)][i(417)](c, a, e), p = ia(d - _, 0), b = (parseInt(l / p) - 1) * p, I = (parseInt(f / p) + 1) * p, M = (parseInt(_ / p) - 1) * p, k = (parseInt(d / p) + 1) * p, G = (I - b) / p, T = (k - M) / p, O = this[i(398)];
    let F, B, D, E = 0, C = 0;
    const U = this[i(406)][i(344)][i(372)] === h0.SCENE3D ? this._color : this._color2D;
    for (let Q = b; Q <= I; Q += p) {
      B = [], F = [];
      for (let w = M; w <= k; w += p) {
        const { longitude: m, latitude: h } = this[i(356)][i(355)](Q, w, e);
        B[i(377)](g.fromDegrees(m, h)), F[i(377)]([Q, w]);
      }
      !(G - E < 2 && r) && (this[i(383)][i(392)]($e(B, U)), E % (this[i(375)] + 1) === 0 && (D = B.length - 1 - O, F[D] && Ze(this, B[D], "" + u + F[D][0]))), E++;
    }
    for (let Q = M; Q <= k; Q += p) {
      B = [], F = [], E = 0;
      for (let w = b; w <= I; w += p) {
        if (!(G - E < 2 && r)) {
          const { longitude: m, latitude: h } = this[i(356)][i(355)](w, Q, e);
          B[i(377)](g[i(381)](m, h));
        }
        F.push([w, Q]), E++;
      }
      this[i(383)][i(392)]($e(B, U)), (T - C) % (this[i(403)] + 1) === 0 && (D = O, F[D] && Ze(this, B[D], "" + F[D][1], !1)), C++;
    }
  }
  [H(389)]() {
    const e = H, x = this._viewer[e(344)][e(358)], n = this[e(406)][e(344)].canvas, a = this[e(406)].scene[e(412)].ellipsoid, s = [x[e(420)](new Y(0, 0), a), x[e(420)](new Y(n[e(369)], 0), a), x[e(420)](new Y(0, n[e(410)]), a), x[e(420)](new Y(n.clientWidth, n[e(410)]), a)];
    for (let r = 0; r < 4; r++)
      if (s[r] === void 0) return Px[e(402)];
    return Px[e(416)](a.cartesianArrayToCartographicArray(s));
  }
  [H(350)]() {
    const e = H, x = this[e(406)][e(344)][e(359)], n = new Y(Math[e(396)](x.clientWidth / 2), Math[e(396)](x.clientHeight / 2)), a = this._viewer[e(344)][e(358)].pickEllipsoid(n);
    return a || g[e(381)](0, 0, 0);
  }
  [H(384)]() {
    const e = H, x = this._viewer[e(344)][e(358)], n = this[e(406)][e(344)].canvas, a = this[e(406)][e(344)][e(412)].ellipsoid, s = this[e(386)], r = this._screenOffsetY, i = { north: x[e(420)](new Y(n.clientWidth / 2, r), a), south: x[e(420)](new Y(n.clientWidth / 2, n[e(410)] - r), a), west: x.pickEllipsoid(new Y(s, n[e(410)] / 2), a), east: x.pickEllipsoid(new Y(n[e(369)] - s, n.clientHeight / 2), a) };
    return { north: i.north ? e0[e(387)](i[e(374)])[e(360)] : void 0, south: i[e(378)] ? e0.fromCartesian(i[e(378)])[e(360)] : void 0, west: i.west ? e0[e(387)](i.west)[e(366)] : void 0, east: i.east ? e0.fromCartesian(i.east)[e(366)] : void 0 };
  }
}
const r0 = fx;
function Ke() {
  const t = ["entityCache", "3307096MrCNuU", "preUpdate", "add", "set", "position", "215FKlbpT", "delete", "1767270bsEgwJ", "destroy", "removeAll", "preUpdateClose", "has", "values", "removeChild", "viewer", "bind", "viewModel", "update", "4272184tAVEwa", "isDestroyed", "scene", "forEach", "_indicators", "67848aMBEmU", "53PhmANF", "animateAppear", "map", "div", "from", "className", "3804021zcJwMc", "container", "removeById", "getValue", "isShowing", "getEntities", "cesium-viewer-selectionIndicatorContainer", "showSelection", "7102ueNrnE", "get", "updateIndicator", "size", "createIndicator", "clear", "1141948ZyMavf", "remove"];
  return Ke = function() {
    return t;
  }, Ke();
}
(function(t, e) {
  const x = fx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(478)) / 1 * (-parseInt(x(492)) / 2) + -parseInt(x(461)) / 3 + -parseInt(x(498)) / 4 + -parseInt(x(506)) / 5 * (-parseInt(x(477)) / 6) + parseInt(x(472)) / 7 + parseInt(x(501)) / 8 + -parseInt(x(484)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ke, 400900);
function fx(t, e) {
  return t = t - 461, Ke()[t];
}
class Ic {
  constructor(e) {
    const x = fx;
    this[x(468)] = e, this.entityCache = /* @__PURE__ */ new WeakSet(), this._indicators = /* @__PURE__ */ new Map(), this[x(474)] = this[x(468)].scene, this[x(464)] = this.scene[x(502)].addEventListener(this[x(502)][x(469)](this));
  }
  add(e) {
    const x = fx;
    if (!e || this[x(476)][x(465)](e.id)) return;
    this[x(500)][x(503)](e);
    const { indicate: n, container: a } = this.createIndicator();
    this[x(476)][x(504)](e.id, [e, n, a]), n[x(470)][x(479)]();
  }
  addOrRemove(e) {
    const x = fx;
    if (this.has(e)) {
      this[x(499)](e);
      return;
    }
    this[x(503)](e);
  }
  preUpdate(e, x) {
    const n = fx;
    this[n(476)][n(495)] !== 0 && this[n(476)][n(475)](([a, s]) => {
      this[n(494)](x, a, s);
    });
  }
  [r0(494)](e, x, n) {
    var i;
    const a = r0;
    if (!this.entityCache[a(465)](x)) {
      this[a(476)][a(507)](x.id);
      return;
    }
    const s = n[a(470)];
    if (!x[a(488)] || !x.isAvailable(e)) return;
    const r = (i = x[a(505)]) == null ? void 0 : i[a(487)](e);
    r && (s[a(505)] = r, s[a(491)] = !0, s[a(471)]());
  }
  [r0(496)]() {
    const e = r0, x = this[e(468)][e(485)], n = document.createElement(e(481));
    return n[e(483)] = e(490), x.appendChild(n), { indicate: new _2(n, this[e(468)][e(474)]), container: n };
  }
  [r0(499)](e) {
    this[r0(486)](e.id);
  }
  [r0(486)](e) {
    const x = r0, n = this[x(476)][x(493)](e);
    if (!n) return;
    const [a, s, r] = n;
    this.viewer[x(485)][x(467)](r), s[x(462)](), this[x(476)][x(507)](e), this.entityCache[x(507)](a);
  }
  [r0(463)]() {
    const e = r0;
    this._indicators[e(475)](([x]) => {
      this[e(499)](x);
    }), this[e(476)][e(497)]();
  }
  [r0(489)]() {
    const e = r0;
    return Array[e(482)](this[e(476)][e(466)]())[e(480)]((x) => x[0]);
  }
  has(e) {
    return this._indicators.has(e.id);
  }
  [r0(473)]() {
    return !!this[r0(464)];
  }
  destroy() {
    var x;
    const e = r0;
    return this[e(463)](), (x = this[e(464)]) == null || x.call(this), this[e(464)] = null, this._indicators[e(495)];
  }
}
function xt() {
  const t = ["3498370qcHXgb", "cesium-viewer-selectionIndicatorContainer", "bindUpdate", "109354AOtIxr", "20752zYYZbZ", "className", "remove", "addEventListener", "3459744xYkfyP", "container", "1955404naDlhj", "createIndicator", "appendChild", "showSelection", "position", "createElement", "viewModel", "viewer", "primitive", "preUpdate", "indicator", "scene", "424ZQCjus", "86MkfJtL", "destroy", "3238032ppskGR", "removeUpdate", "18GKCZiW", "3303310XfzhEW", "update"];
  return xt = function() {
    return t;
  }, xt();
}
function et(t, e) {
  return t = t - 220, xt()[t];
}
const O0 = et;
(function(t, e) {
  const x = et, n = t();
  for (; ; )
    try {
      if (-parseInt(x(245)) / 1 * (-parseInt(x(226)) / 2) + -parseInt(x(247)) / 3 + -parseInt(x(232)) / 4 + parseInt(x(220)) / 5 + parseInt(x(230)) / 6 + -parseInt(x(225)) / 7 * (-parseInt(x(244)) / 8) + -parseInt(x(249)) / 9 * (parseInt(x(222)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xt, 689719);
class gc {
  constructor(e, x) {
    const n = et;
    this[n(239)] = e, this[n(240)] = x, this[n(241)] = () => {
      var o;
      const r = n, i = this[r(242)];
      if (!this[r(240)]) {
        i[r(238)][r(235)] = !1;
        return;
      }
      this.indicator.viewModel.position = (o = this[r(240)]) == null ? void 0 : o[r(236)], this[r(242)][r(238)][r(221)]();
    }, this.scene = this[n(239)][n(243)];
    const { indicate: a, container: s } = this[n(233)]();
    a[n(238)].animateAppear(), a.viewModel[n(235)] = !0, this.indicator = a, this[n(231)] = s, this[n(224)]();
  }
  setPrimitive(e) {
    const x = et;
    if (e) {
      this[x(240)] = e, this[x(242)][x(238)].showSelection = !0;
      return;
    }
    this.indicator[x(238)][x(235)] = !1;
  }
  [O0(224)]() {
    const e = O0;
    this[e(243)][e(241)][e(229)](this.preUpdate);
  }
  [O0(248)]() {
    const e = O0;
    this[e(243)][e(241)].removeEventListener(this[e(241)]);
  }
  [O0(233)]() {
    const e = O0, x = this[e(239)][e(231)], n = document[e(237)]("div");
    return n[e(227)] = e(223), x[e(234)](n), { indicate: new _2(n, this.viewer[e(243)]), container: n };
  }
  [O0(246)]() {
    const e = O0;
    this[e(248)](), this[e(242)].destroy(), this[e(231)][e(228)]();
  }
}
(function(t, e) {
  const x = fa, n = t();
  for (; ; )
    try {
      if (parseInt(x(451)) / 1 + parseInt(x(453)) / 2 + parseInt(x(444)) / 3 + -parseInt(x(449)) / 4 * (parseInt(x(452)) / 5) + -parseInt(x(441)) / 6 + -parseInt(x(448)) / 7 * (parseInt(x(440)) / 8) + parseInt(x(446)) / 9 * (parseInt(x(456)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(tt, 462860);
function fa(t, e) {
  return t = t - 440, tt()[t];
}
function F0(t, e) {
  const x = fa, n = t;
  return x(447), n[x(454)] = (a) => {
    const s = x, r = [n];
    for (const i of r) {
      const o = i == null ? void 0 : i[s(443)];
      o && typeof o == "string" ? a[s(445)](o, i) : console[s(455)]("[withInstall] 组件缺少 name 属性，无法注册:", i);
    }
  }, n;
}
function tt() {
  const t = ["446022bWMiZN", "8930LTpxDI", "591422nEExnv", "install", "warn", "70HebqYA", "3765208iUsPDL", "591324kTfwsQ", "object", "name", "405549HCZkiD", "component", "615105mDUdsj", "string", "7cIYBrH", "724hqOmSM", "values"];
  return tt = function() {
    return t;
  }, tt();
}
const gx = ua;
(function(t, e) {
  const x = ua, n = t();
  for (; ; )
    try {
      if (-parseInt(x(515)) / 1 * (parseInt(x(512)) / 2) + -parseInt(x(496)) / 3 + parseInt(x(507)) / 4 * (-parseInt(x(490)) / 5) + parseInt(x(514)) / 6 * (parseInt(x(495)) / 7) + parseInt(x(511)) / 8 * (parseInt(x(497)) / 9) + -parseInt(x(503)) / 10 + -parseInt(x(504)) / 11 * (-parseInt(x(509)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(nt, 926846);
const Hs = ["id"];
function ua(t, e) {
  return t = t - 488, nt()[t];
}
const Ys = S0({ name: gx(492), __name: gx(493), props: { name: { type: String, default: () => y0[gx(510)] }, eventList: { type: Array, default: () => [] }, defaultViewerConfig: { type: Object, default: () => {
} }, defaultCamera: { type: Object, default: () => ({ west: 90, south: 10, east: 120, north: 40 }) } }, emits: [gx(513)], setup(t, { emit: e }) {
  const x = gx, n = e, a = t;
  a[x(505)] && Gr(a.defaultCamera);
  const s = xn();
  return za(a.name, s), h2(() => {
    var c, u;
    const r = x, i = {};
    (c = y0[r(489)]) != null && c[r(499)] && (i[r(506)] = new Oa(new Va(y0.defaultImageryUrl)));
    const o = hr(L(a[r(491)]), { ...i, ...a[r(508)] });
    s[r(494)] = o, Rr(o), (u = a[r(500)]) == null || u.forEach((l) => l(o)), n(r(513));
  }), Ox(() => {
    const r = x;
    s[r(494)] = null, mr(a[r(491)]);
  }), (r, i) => {
    const o = x;
    return _0(), G0(o(501), { id: t[o(491)], class: o(488) }, [jt(r[o(502)], o(498))], 8, Hs);
  };
} });
function nt() {
  const t = ["621JQBibs", "default", "url", "eventList", "div", "$slots", "6494560ELcYwZ", "1265haEVgG", "defaultCamera", "baseLayer", "1012pxyiQk", "defaultViewerConfig", "158172NjTlzl", "DEFAULT_VIEWER_NAME", "160424UhFtOt", "14CYXUgD", "viewer-created", "10199598lMSHWg", "259604vSzQDL", "c-viewer", "defaultImageryUrl", "14255iUiRIj", "name", "CViewer", "viewer", "value", "7jajqld", "1453716sMDtql"];
  return nt = function() {
    return t;
  }, nt();
}
const Ux = (t, e) => {
  const x = t.__vccOpts || t;
  for (const [n, a] of e)
    x[n] = a;
  return x;
}, $s = /* @__PURE__ */ Ux(Ys, [["__scopeId", "data-v-c12cb1f2"]]);
(function(t, e) {
  const x = Xs, n = t();
  for (; ; )
    try {
      if (parseInt(x(488)) / 1 + parseInt(x(495)) / 2 * (-parseInt(x(487)) / 3) + parseInt(x(490)) / 4 + parseInt(x(489)) / 5 + parseInt(x(494)) / 6 + parseInt(x(493)) / 7 + parseInt(x(491)) / 8 * (-parseInt(x(492)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(at, 365158);
function at() {
  const t = ["36759VDOfZw", "230473VuWPDB", "2602530yalaKS", "2489760yCQBNA", "272IsjvPM", "331407zhEaGN", "2894808TNTcVc", "3318624MtACEv", "118vRsZIf"];
  return at = function() {
    return t;
  }, at();
}
const Zs = F0($s);
function Xs(t, e) {
  return t = t - 487, at()[t];
}
const vx = la;
function la(t, e) {
  return t = t - 327, rt()[t];
}
(function(t, e) {
  const x = la, n = t();
  for (; ; )
    try {
      if (parseInt(x(329)) / 1 * (-parseInt(x(340)) / 2) + parseInt(x(360)) / 3 + -parseInt(x(341)) / 4 * (parseInt(x(356)) / 5) + parseInt(x(343)) / 6 * (parseInt(x(349)) / 7) + parseInt(x(357)) / 8 * (-parseInt(x(332)) / 9) + parseInt(x(354)) / 10 + parseInt(x(359)) / 11 * (-parseInt(x(351)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(rt, 680490);
const Js = { class: "c-info-popup-header" }, qs = { class: vx(344) };
function rt() {
  const t = ["95wMkhzn", "4360HlEFIn", "cartesianToCanvasCoordinates", "131681nAoHKq", "3990858XkZUgV", "data", "c-info-popup-close", "info-popup", "10467xOwUfX", "$slots", "style", "9081DvLfjI", "CInfoPopup", "span", "close", "value", "equals", "div", "setProperty", "26kScsSA", "204604mfOJqD", "position", "516MXTmhK", "c-info-popup-content", "map", "default", "getValue", "getById", "52339NFXRGY", "c-info-popup", "300dmFhbO", "reverse", "--top-pos", "6643020JgZlZS", "name"];
  return rt = function() {
    return t;
  }, rt();
}
const Qs = S0({ name: vx(333), __name: vx(328), props: { data: { type: Object, default: null } }, emits: [vx(335)], setup(t, { emit: e }) {
  const x = vx;
  Fa((l) => ({ v32f5a93c: i[x(336)] }));
  const n = e, a = t, s = () => {
    n("close");
  }, r = Q0({ label: "高", level: 1400 });
  ["低", "中低", "中", "中高", "高"][x(352)]()[x(345)]((l, _) => ({ label: l, key: l, props: { onClick() {
    const f = x;
    r[f(336)] = { label: l, level: 1e3 + 100 * _ };
  } } }));
  const i = en(() => r[x(336)].level), o = Q0();
  let c;
  const u = S2((l, _) => {
    var k, G;
    const f = x;
    if (!a[f(361)]) return;
    const { source: d, id: p } = a.data, b = C0(d), I = b == null ? void 0 : b.entities[f(348)](p);
    if (!(I != null && I[f(342)])) {
      s();
      return;
    }
    const M = l[f(358)](I[f(342)][f(347)](_));
    c && Y[f(337)](c, M) || (c = M, c != null && c.x && ((k = o[f(336)]) == null || k[f(331)][f(339)]("--left-pos", c.x + "px")), c != null && c.y && ((G = o.value) == null || G[f(331)][f(339)](f(353), c.y + "px")));
  });
  return b2(() => {
    u == null || u();
  }), (l, _) => {
    const f = x;
    return t[f(361)] ? (_0(), G0(f(338), { key: 0, ref_key: "InfoPopupRef", ref: o, class: f(350) }, [g0("div", Js, [jt(l.$slots, "header", {}, () => [g0(f(334), null, tn(t.data[f(355)]), 1), g0(f(334), null, [g0(f(334), { class: f(327), onClick: s }, "✕")])], !0)]), g0(f(338), qs, [jt(l[f(330)], f(346), {}, void 0, !0)])], 512)) : Ba("", !0);
  };
} }), Ks = /* @__PURE__ */ Ux(Qs, [["__scopeId", "data-v-7c38df2f"]]);
(function(t, e) {
  const x = xi, n = t();
  for (; ; )
    try {
      if (parseInt(x(181)) / 1 * (-parseInt(x(186)) / 2) + -parseInt(x(178)) / 3 + -parseInt(x(177)) / 4 + parseInt(x(184)) / 5 * (parseInt(x(183)) / 6) + parseInt(x(185)) / 7 * (-parseInt(x(180)) / 8) + -parseInt(x(176)) / 9 * (parseInt(x(182)) / 10) + parseInt(x(179)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(st, 892685);
function xi(t, e) {
  return t = t - 176, st()[t];
}
function st() {
  const t = ["4526544Yvilfo", "4518918ZBlhYj", "51913070MMXbLP", "4564424BwEmCc", "38422NWiBbm", "10Diiknj", "4852422NksrDy", "10KzRYEx", "7IdpqnN", "44pBYgxT", "12513420sOHpdG"];
  return st = function() {
    return t;
  }, st();
}
const ei = F0(Ks), e2 = X0;
(function(t, e) {
  const x = X0, n = t();
  for (; ; )
    try {
      if (parseInt(x(222)) / 1 + -parseInt(x(231)) / 2 + parseInt(x(223)) / 3 * (-parseInt(x(229)) / 4) + parseInt(x(230)) / 5 * (parseInt(x(238)) / 6) + parseInt(x(226)) / 7 * (-parseInt(x(220)) / 8) + parseInt(x(224)) / 9 + -parseInt(x(239)) / 10 * (-parseInt(x(219)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(it, 869040);
function it() {
  const t = ["CRightMenu", "options", "n-dropdown", "bottom-start", "position", "902376miTvev", "3898870roeayB", "getBoundingClientRect", "33NSEbiy", "24lOHPWX", "manual", "1286335YNkWZM", "732KOsACM", "6649029QLozro", "some", "2399663xVULLa", "right-menu", "value", "21176AwhPhL", "5zTnTNg", "311940yktrEw", "c-cesium-rightmenu"];
  return it = function() {
    return t;
  }, it();
}
function X0(t, e) {
  return t = t - 219, it()[t];
}
const ti = S0({ name: e2(233), __name: e2(227), setup(t) {
  const e = Ni(), { executeFilter: x } = e, { eventList: n, rightClickEvent: a, menuOptions: s, cachePosition: r, posOffset: i, isShow: o } = qa(e), c = en(() => {
    const p = X0;
    return o[p(228)] && s[p(228)][p(225)]((b) => {
      var I;
      return (I = b == null ? void 0 : b.isShow) == null ? void 0 : I.call(b, { data: b, position: r.value });
    });
  }), u = Q0(0), l = Q0(0), _ = cn(async (p) => {
    const b = X0;
    o.value = !1;
    const I = p[b(237)][b(237)], M = wx(i);
    x(I);
    const k = gr(), G = k[b(240)]();
    u[b(228)] = I.x + G.x - M.x, l[b(228)] = I.y + G.y - M.y, a.value.forEach((T) => T({ position: I })), await nn(), o[b(228)] = !0;
  }, { isEntity: !0 }), f = ex(() => {
    const p = X0;
    o[p(228)] = !1;
  }), d = (p, b) => {
    var M, k;
    const I = X0;
    (k = (M = n[I(228)])[p]) == null || k.call(M, { ...b, position: r }), o[I(228)] = !1;
  };
  return Ox(() => {
    _(), f();
  }), (p, b) => {
    const I = X0, M = Dx(I(235));
    return _0(), vt(M, { class: I(232), placement: I(236), trigger: I(221), show: c[I(228)], options: wt(s), x: u.value, y: l[I(228)], onContextmenu: b[0] || (b[0] = Ua(() => {
    }, ["prevent"])), onSelect: d }, null, 8, ["show", I(234), "x", "y"]);
  };
} });
(function(t, e) {
  const x = ni, n = t();
  for (; ; )
    try {
      if (parseInt(x(304)) / 1 * (parseInt(x(298)) / 2) + parseInt(x(295)) / 3 * (-parseInt(x(299)) / 4) + -parseInt(x(302)) / 5 + -parseInt(x(301)) / 6 * (parseInt(x(294)) / 7) + -parseInt(x(300)) / 8 * (-parseInt(x(293)) / 9) + parseInt(x(297)) / 10 + parseInt(x(296)) / 11 * (parseInt(x(303)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ot, 422907);
function ni(t, e) {
  return t = t - 293, ot()[t];
}
function ot() {
  const t = ["8035240UVnvXl", "6RCNMMQ", "1297588JFUvhf", "96IZQkwv", "4479450Sxeiho", "3695950EXREir", "323232Omziwz", "170983JFcpdh", "141993oUQYMv", "7nmlwiv", "3sESRIS", "297TiNjzR"];
  return ot = function() {
    return t;
  }, ot();
}
const ai = F0(ti), ri = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const si = Object.prototype.toString, ii = (t) => si.call(t) === "[object Object]";
function Wt(t) {
  return Array.isArray(t) ? t : [t];
}
function oi(t, e, x) {
  return Ax(t, e, {
    ...x,
    immediate: !0
  });
}
const ci = ri ? window : void 0;
function fi(t) {
  var e;
  const x = wx(t);
  return (e = x == null ? void 0 : x.$el) !== null && e !== void 0 ? e : x;
}
function ui(...t) {
  const e = (n, a, s, r) => (n.addEventListener(a, s, r), () => n.removeEventListener(a, s, r)), x = en(() => {
    const n = Wt(wx(t[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return oi(() => {
    var n, a;
    return [
      (n = (a = x.value) === null || a === void 0 ? void 0 : a.map((s) => fi(s))) !== null && n !== void 0 ? n : [ci].filter((s) => s != null),
      Wt(wx(x.value ? t[1] : t[0])),
      Wt(wt(x.value ? t[2] : t[1])),
      wx(x.value ? t[3] : t[2])
    ];
  }, ([n, a, s, r], i, o) => {
    if (!(n != null && n.length) || !(a != null && a.length) || !(s != null && s.length)) return;
    const c = ii(r) ? { ...r } : r, u = n.flatMap((l) => a.flatMap((_) => s.map((f) => e(l, _, f, c))));
    o(() => {
      u.forEach((l) => l());
    });
  }, { flush: "post" });
}
function da(t, e) {
  return t = t - 378, ct()[t];
}
const $x = da;
(function(t, e) {
  const x = da, n = t();
  for (; ; )
    try {
      if (-parseInt(x(383)) / 1 * (parseInt(x(388)) / 2) + parseInt(x(384)) / 3 * (parseInt(x(379)) / 4) + -parseInt(x(393)) / 5 + -parseInt(x(397)) / 6 + -parseInt(x(380)) / 7 + -parseInt(x(391)) / 8 + parseInt(x(387)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ct, 741657);
function ct() {
  const t = ["1:50万", "4566760HyGPkX", "label", "ratio", "show", "413802psqOaK", "1:5万", "options", "13152uozpmj", "6801004ktCHJT", "1:1万", "CDistanceSelect", "385dDwgKZ", "1023wIbJKt", "update:show", "n-dropdown", "21324816ZwaHwp", "2486ztHOIU", "1:100万", "select", "2532232WQwWoY"];
  return ct = function() {
    return t;
  }, ct();
}
const li = S0({ name: $x(382), __name: "distance-select", props: { show: { type: Boolean, default: !1 }, x: { type: Number, default: 0 }, y: { type: Number, default: 0 } }, emits: [$x(385), $x(390)], setup(t, { emit: e }) {
  const x = $x, n = e, a = [{ ratio: 1, label: "1:1400万", height: 46248.83085151955 }, { ratio: 4, label: x(389), height: 109404.75765483479 }, { ratio: 5, label: x(392) }, { ratio: 13.5, label: "1:25万" }, { ratio: 60, label: x(398) }, { ratio: 200, label: x(381) }], s = (c) => {
    n("select", c);
  }, r = a.map((c) => {
    const u = x;
    return { key: c[u(395)], label: c[u(394)], props: { onClick: () => s(c[u(395)]) } };
  }), i = () => {
    n("update:show", !1);
  }, o = ui(document.documentElement, "click", i);
  return Ox(() => {
    o();
  }), (c, u) => {
    const l = x, _ = Dx(l(386));
    return _0(), vt(_, { options: wt(r), show: t[l(396)], x: t.x, y: t.y }, null, 8, [l(378), "show", "x", "y"]);
  };
} }), t2 = Pn;
(function(t, e) {
  const x = Pn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(237)) / 1 + -parseInt(x(233)) / 2 * (parseInt(x(218)) / 3) + -parseInt(x(235)) / 4 + parseInt(x(240)) / 5 * (-parseInt(x(228)) / 6) + parseInt(x(229)) / 7 * (parseInt(x(219)) / 8) + -parseInt(x(231)) / 9 + parseInt(x(221)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ft, 302992);
function Pn(t, e) {
  return t = t - 218, ft()[t];
}
function ft() {
  const t = ["请先开启navigation 功能", "1849604HAHTfh", "width", "545930iBZkCc", "navigationViewModel", "enableCompass", "30uOOVcI", "111zJtSHw", "88nnibwM", "warn", "12660770PzAKSW", "show", "querySelector", "enableDistanceLegend", "addEventListener", "CNavigation", "getBoundingClientRect", "414744oawkZu", "380989eeQYLi", "showCompass", "15264edHGAY", "value", "7406QTBvVc"];
  return ft = function() {
    return t;
  }, ft();
}
const di = S0({ name: t2(226), props: { duration: { type: Number, default: 3 }, enableCompass: { type: Boolean, default: !0 }, enableZoomControls: { type: Boolean, default: !0 }, enableDistanceLegend: { type: Boolean, default: !1 }, enableCompassOuterRing: { type: Boolean, default: !0 }, resetTooltip: { type: String, default: "重置" }, zoomInTooltip: { type: String, default: "放大" }, zoomOutTooltip: { type: String, default: "缩小" }, defaultResetView: { type: Object, default: void 0 }, orientation: { type: Object, default: void 0 } }, setup(t) {
  const e = t2, x = xn(), n = (r) => {
    const i = Pn, o = x.value;
    if (!o) {
      console[i(220)](i(234));
      return;
    }
    o[i(238)][i(230)] = r;
  };
  Ax(() => t[e(239)], (r) => {
    n(r);
  });
  const a = (r) => {
    const i = e, o = x[i(232)];
    if (!o) {
      console.error(i(234));
      return;
    }
    o.distanceLegendViewModel.enableDistanceLegend = r;
  }, s = ja({ show: !1, x: 0, y: 0 });
  return Ax(() => t[e(224)], (r) => {
    a(r);
  }), w0((r) => {
    const i = e;
    x[i(232)] = new Qa(r, t), nn(() => {
      const o = i, c = document[o(223)](".distance-legend");
      if (!c) return;
      const u = () => {
        const l = o, _ = c[l(227)]();
        s.x = _.x + _[l(236)] / 2, s.y = _.y, s[l(222)] = !0;
      };
      c[o(225)]("mouseenter", u);
    });
  }), () => Ha(li, { show: s[e(222)], x: s.x, y: s.y, "onUpdate:show": (r) => s[e(222)] = r, onSelect: (r) => {
    const i = e;
    s[i(222)] = !1, z2(r);
  } });
} }), pi = F0(di), Tx = J0;
(function(t, e) {
  const x = J0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(164)) / 1 + -parseInt(x(181)) / 2 * (-parseInt(x(157)) / 3) + parseInt(x(163)) / 4 * (parseInt(x(176)) / 5) + -parseInt(x(170)) / 6 * (parseInt(x(159)) / 7) + -parseInt(x(178)) / 8 + parseInt(x(173)) / 9 * (-parseInt(x(168)) / 10) + parseInt(x(156)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ut, 830632);
const _i = { class: Tx(152) }, hi = { class: Tx(184) };
function ut() {
  const t = ["clientWidth", "scene", "globe", "c-scale", "getPickRay", "postUpdate", "change", "14878886OPHQrv", "962781zZWmTP", "preUpdate", "519253OEtFcY", "camera", "cartesianToCartographic", "value", "559396hgxuan", "40478oVbEzQ", "updateType", "ellipsoid", "div", "1377430FlCQnu", "setEndPoints", "6GlOURP", "clientHeight", "changed", "72qeBPsH", "scale", "length", "15omdDWw", "pick", "5501768rVtGWo", "CScale", "removeEventListener", "6CqsdaJ", "addEventListener", "label", "c-scale__label", "requestRender", "canvas"];
  return ut = function() {
    return t;
  }, ut();
}
function J0(t, e) {
  return t = t - 147, ut()[t];
}
const bi = S0({ name: Tx(179), __name: Tx(174), props: { count: { type: Number, default: 3 }, updateType: { type: String, default: Tx(155) } }, setup(t) {
  const e = t, x = [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 3e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 2e7, 3e7, 5e7], n = Q0([]), a = new qt(), s = (o) => {
    const c = J0, u = o[c(148)][c(149)], l = o[c(148)][c(171)], _ = o.camera[c(153)](new Y(u / 2 | 0, l - 1)), f = o[c(160)][c(153)](new Y(1 + u / 2 | 0, l - 1)), d = o[c(151)], p = d[c(177)](_, o), b = d.pick(f, o);
    if (!R(p) || !R(b)) {
      n.value = [];
      return;
    }
    const I = d[c(166)][c(161)](p), M = d[c(166)][c(161)](b);
    a[c(169)](I, M);
    const k = a.surfaceDistance, G = 100;
    let T;
    for (let O = x[c(175)] - 1; !R(T) && O >= 0; --O)
      if (x[O] / k < G) {
        T = x[O];
        break;
      }
    if (!R(T)) {
      n[c(162)] = [];
      return;
    }
    r(T, k);
  }, r = (o, c) => {
    const u = J0;
    let l = o, _ = " m";
    o >= 1e3 && (l = o / 1e3, _ = " km");
    const f = [];
    for (let d = 1; d <= e.count; d++)
      f.push({ label: l * d + _, barWidth: o / c | 0 });
    n[u(162)] = f;
  };
  let i;
  return w0((o) => {
    const c = J0, u = () => {
      const l = J0;
      s(o[l(150)]), n[l(162)][l(175)] ? o.scene[l(154)][l(180)](u) : o[l(150)][l(147)]();
    };
    if (o[c(150)].postUpdate[c(182)](u), e[c(165)] === c(155)) {
      i = o[c(160)][c(172)].addEventListener(() => s(o[c(150)]));
      return;
    }
    i = o.scene[c(158)].addEventListener(s);
  }), Ox(() => {
    i == null || i();
  }), (o, c) => {
    const u = J0;
    return Ya((_0(), G0(u(167), _i, [(_0(!0), G0(m2, null, I2(n.value, (l) => {
      const _ = u;
      return _0(), G0(_(167), { key: l[_(183)] }, [g0("div", hi, tn(l[_(183)]), 1), g0(_(167), { class: "c-scale__bar", style: $a({ width: l.barWidth + "px" }) }, null, 4)]);
    }), 128))], 512)), [[Za, !!n[u(162)].length]]);
  };
} }), pa = /* @__PURE__ */ Ux(bi, [["__scopeId", "data-v-8289bc1b"]]), zt = kn;
function lt() {
  const t = ["1:1万", "517256WPLJXS", "443728RSRiMg", "10194120nyErIy", "$attrs", "label", "1293120fuTaAO", "1359712xlLSnl", "div", "1:50万", "1:5万", "12NjnRbd", "795870MpriiI", "ratio", "popover", "CScaleSelect", "1:100万", "2127643KvujfL", "1:1400万", "data", "scale-select", "6wkclDn"];
  return lt = function() {
    return t;
  }, lt();
}
(function(t, e) {
  const x = kn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(503)) / 1 + -parseInt(x(492)) / 2 + -parseInt(x(491)) / 3 * (-parseInt(x(504)) / 4) + -parseInt(x(508)) / 5 + parseInt(x(501)) / 6 * (-parseInt(x(497)) / 7) + parseInt(x(509)) / 8 + parseInt(x(505)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(lt, 268608);
function kn(t, e) {
  return t = t - 489, lt()[t];
}
const mi = ["onClick"], Ii = S0({ name: zt(495), __name: zt(500), setup(t) {
  const e = zt, x = (a) => {
    const s = kn;
    z2(a[s(493)]), console.log(s(499), a);
  }, n = [{ ratio: 1, label: e(498) }, { ratio: 4, label: e(496) }, { ratio: 5, label: e(489) }, { ratio: 13.5, label: "1:25万" }, { ratio: 60, label: e(490) }, { ratio: 200, label: e(502) }];
  return (a, s) => {
    const r = e, i = Dx("el-popover");
    return _0(), vt(i, Nn(On(a[r(506)][r(494)])), { reference: Qx(() => [Ht(pa, Nn(On(a[r(506)])), null, 16)]), default: Qx(() => [g0(r(510), null, [(_0(), G0(m2, null, I2(n, (o) => {
      const c = r;
      return g0(c(510), { key: o.ratio, onClick: (u) => x(o) }, tn(o[c(507)]), 9, mi);
    }), 64))])]), _: 1 }, 16);
  };
} });
function gi(t, e) {
  return t = t - 372, dt()[t];
}
(function(t, e) {
  const x = gi, n = t();
  for (; ; )
    try {
      if (-parseInt(x(377)) / 1 + -parseInt(x(373)) / 2 * (-parseInt(x(378)) / 3) + -parseInt(x(375)) / 4 + parseInt(x(379)) / 5 * (parseInt(x(374)) / 6) + -parseInt(x(376)) / 7 + -parseInt(x(380)) / 8 + -parseInt(x(381)) / 9 * (-parseInt(x(372)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(dt, 469043);
function dt() {
  const t = ["2611140yVxyAA", "3994473wOIXIW", "854777CnybBA", "63upKAyr", "2415990YmTInn", "7177896iGxpjR", "8784Rpduym", "21220PvelSH", "84782bzHhZo", "6JvpSDf"];
  return dt = function() {
    return t;
  }, dt();
}
const yi = F0(pa), vi = F0(Ii), Ft = q0;
(function(t, e) {
  const x = q0, n = t();
  for (; ; )
    try {
      if (parseInt(x(121)) / 1 + parseInt(x(144)) / 2 * (parseInt(x(141)) / 3) + parseInt(x(156)) / 4 * (parseInt(x(135)) / 5) + parseInt(x(165)) / 6 * (parseInt(x(154)) / 7) + parseInt(x(127)) / 8 + -parseInt(x(136)) / 9 * (parseInt(x(142)) / 10) + parseInt(x(125)) / 11 * (-parseInt(x(139)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pt, 450472);
function pt() {
  const t = ["ready", "modelMatrix", "211645NGmDdP", "isRotation", "14492jaScPR", "model-view", "then", "_innerCreditContainer", "#fff", "scale", "readyEvent", "viewRef", "includes", "78jcInax", "fromCssColorString", "模型正在开发中...", "69866KiqIBv", "CModelView", "none", "lookAt", "13178TbqPKJ", "add", "6798360RrMjkX", "removeAll", "value", "scene", "display", "url", "primitives", "warning", "1110mdcjMA", "31338oxQBoI", "backgroundColor", "addEventListener", "14760mtlEUh", "style", "134673FMvWld", "1070fQMIew", "boundingSphere", "8JnhOPy", "div", "destroy", "camera", "toRadians", "fromGltfAsync", "undefined", "viewBoundingSphere"];
  return pt = function() {
    return t;
  }, pt();
}
function q0(t, e) {
  return t = t - 121, pt()[t];
}
const wi = S0({ name: Ft(122), __name: Ft(157), props: { url: { type: String, default: "" }, scale: { type: Number, default: 1 }, backgroundColor: { type: String, default: Ft(160) }, isRotation: { type: Boolean, default: !1 } }, setup(t) {
  const e = t, x = Q0(), n = xn();
  let a = null;
  const s = (o) => {
    let c = 0;
    i(), a = setInterval(() => {
      const u = q0;
      c += l0.toRadians(1);
      let l = l2.fromRotationZ(c);
      o[u(153)] = Wa.fromRotationTranslation(l);
    }, 100);
  }, r = async (o) => {
    var l, _;
    const c = q0;
    if ((l = n[c(129)]) == null || l[c(130)].primitives[c(128)](), !o || o[c(164)]("*") || o[c(164)](c(150)) || o === "static/") {
      Ka[c(134)](c(167));
      return;
    }
    const u = await Ga[c(149)]({ url: o, scale: e[c(161)] });
    (_ = n[c(129)]) == null || _.scene[c(133)][c(126)](u), await new Promise((f) => {
      const d = c;
      u[d(152)] ? f() : u[d(162)][d(138)](() => f());
    }), n[c(129)][c(147)][c(151)](u[c(143)]), e[c(155)] && s(u);
  };
  Ax(() => e.url, (o) => {
    r(o);
  }), h2(() => {
    const o = q0;
    nn()[o(158)](() => {
      const c = o, u = new La(x[c(129)], { globe: !1, skyBox: !1 });
      u.scene[c(137)] = W[c(166)](e[c(137)]);
      const l = l0[c(148)](50), _ = l0[c(148)](-20), f = 20;
      u[c(147)][c(124)](g.ZERO, new Ra(l, _, f)), u[c(159)][c(140)][c(131)] = c(123), n[c(129)] = u, r(e[c(132)]);
    });
  });
  const i = () => {
    a && (clearInterval(a), a = null);
  };
  return b2(() => {
    var c;
    const o = q0;
    i(), (c = n[o(129)]) == null || c[o(146)](), n.value = void 0;
  }), (o, c) => {
    const u = q0;
    return _0(), G0(u(145), { class: u(157), ref_key: u(163), ref: x }, null, 512);
  };
} }), Ci = /* @__PURE__ */ Ux(wi, [["__scopeId", "data-v-a5b8f375"]]);
(function(t, e) {
  const x = Ei, n = t();
  for (; ; )
    try {
      if (parseInt(x(470)) / 1 * (-parseInt(x(472)) / 2) + -parseInt(x(471)) / 3 * (parseInt(x(476)) / 4) + -parseInt(x(474)) / 5 + -parseInt(x(473)) / 6 + parseInt(x(468)) / 7 + parseInt(x(475)) / 8 + parseInt(x(467)) / 9 * (parseInt(x(469)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_t, 685457);
function _t() {
  const t = ["2CLMvYr", "3155166XTnEbb", "5093135cMlpqH", "2122080POAitm", "2313984dSQwnV", "11997nhUsCq", "4154325EIqPtr", "15270JJuBcA", "85785symxMV", "3eUBQJB"];
  return _t = function() {
    return t;
  }, _t();
}
const Si = F0(Ci);
function Ei(t, e) {
  return t = t - 467, _t()[t];
}
/*! Element Plus Icons Vue v2.3.2 */
var Mi = /* @__PURE__ */ S0({
  name: "MapLocation",
  __name: "map-location",
  setup(t) {
    return (e, x) => (_0(), G0("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      g0("path", {
        fill: "currentColor",
        d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
      }),
      g0("path", {
        fill: "currentColor",
        d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256m345.6 192L960 960H672v-64H352v64H64l102.4-256zm-68.928 0H235.328l-76.8 192h706.944z"
      })
    ]));
  }
}), Ti = Mi;
const $0 = ux;
(function(t, e) {
  const x = ux, n = t();
  for (; ; )
    try {
      if (parseInt(x(437)) / 1 + parseInt(x(436)) / 2 * (parseInt(x(446)) / 3) + parseInt(x(432)) / 4 * (-parseInt(x(431)) / 5) + -parseInt(x(444)) / 6 + parseInt(x(449)) / 7 * (-parseInt(x(453)) / 8) + parseInt(x(452)) / 9 * (-parseInt(x(427)) / 10) + parseInt(x(434)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ht, 572225);
function ux(t, e) {
  return t = t - 426, ht()[t];
}
function ht() {
  const t = ["10zZWkDT", "update:latitude", "log", "crosshair", "20BPZQqv", "687672COuURd", "suffix", "20779264kVkQFV", "el-icon", "6FqNMkk", "398209VaZSTs", "before-pickup", "split", "update:modelValue", "update:altitude", "position", "$attrs", "4069260cRQiNN", "CInputPosition", "618291URqYqN", "after-pickup", "input-position", "287MaltKv", "value", "update:longitude", "2717514CFYoUW", "129848PIrdeZ", "separate"];
  return ht = function() {
    return t;
  }, ht();
}
const Pi = S0({ name: $0(445), __name: $0(448), props: { modelValue: { type: String, default: "" }, showPick: { type: Boolean, default: !0 }, separate: { type: String, default: "," }, longitude: { type: Number, default: 0 }, latitude: { type: Number, default: 0 }, altitude: { type: Number, default: 0 } }, emits: ["update:modelValue", $0(451), $0(428), "update:altitude", $0(438), $0(447)], setup(t, { emit: e }) {
  const x = $0, n = e, a = t, s = Q0(a.modelValue ?? ""), r = (f) => {
    const d = ux;
    s[d(450)] = f, n(d(440), f);
  }, i = (f) => {
    const d = Number(f);
    return isNaN(d) ? 0 : d;
  }, o = (f) => {
    n(ux(451), i(f));
  }, c = (f) => {
    n(ux(428), i(f));
  }, u = (f) => {
    n(ux(441), i(f));
  };
  Ax(() => s[x(450)], (f) => {
    const d = x;
    if (!f) return;
    console[d(429)](d(450), f);
    const [p, b, I] = f[d(439)](a[d(426)]);
    o(p), c(b), u(I);
  }, { immediate: !0 });
  let l;
  const _ = (f) => {
    const d = x;
    n(d(438), f), o0(d(430)), l = dr(({ position: p }) => {
      const b = d, I = W0(p[b(442)]);
      if (n(b(447), I), o0(""), I) {
        const { latitude: M, longitude: k, height: G } = I, T = a[b(426)];
        r("" + k + T + M + T + G);
      }
      l();
    });
  };
  return Ox(() => {
    l == null || l(), o0("");
  }), (f, d) => {
    const p = x, b = Dx(p(435)), I = Dx("el-input");
    return _0(), vt(I, Xa(f[p(443)], { modelValue: s.value, "onUpdate:modelValue": d[0] || (d[0] = (M) => s.value = M) }), Ja({ _: 2 }, [t.showPick ? { name: p(433), fn: Qx(() => [Ht(b, { class: "pick-icon", onClick: _ }, { default: Qx(() => [Ht(wt(Ti))]), _: 1 })]), key: "0" } : void 0]), 1040, ["modelValue"]);
  };
} }), ki = /* @__PURE__ */ Ux(Pi, [["__scopeId", "data-v-286928ba"]]);
(function(t, e) {
  const x = Di, n = t();
  for (; ; )
    try {
      if (parseInt(x(412)) / 1 + -parseInt(x(408)) / 2 * (-parseInt(x(410)) / 3) + parseInt(x(406)) / 4 + parseInt(x(405)) / 5 + -parseInt(x(411)) / 6 + parseInt(x(409)) / 7 + -parseInt(x(407)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(bt, 551137);
function Di(t, e) {
  return t = t - 405, bt()[t];
}
function bt() {
  const t = ["3299488LbcCiI", "15844008ulazYa", "82604TIiKdA", "3253201XZlWje", "36XfpCNv", "1887402KVxyhL", "106070uIvdTL", "4774480IbwQUU"];
  return bt = function() {
    return t;
  }, bt();
}
const Ai = F0(ki);
(function(t, e) {
  const x = L0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(389)) / 1 + -parseInt(x(375)) / 2 + parseInt(x(381)) / 3 + parseInt(x(378)) / 4 * (-parseInt(x(387)) / 5) + -parseInt(x(377)) / 6 + -parseInt(x(376)) / 7 + parseInt(x(383)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(mt, 577658);
function L0(t, e) {
  return t = t - 375, mt()[t];
}
function mt() {
  const t = ["values", "emptyOption", "60aIPwSF", "warn", "823844RhviND", "entityOption", "364040gAhkyf", "1303071bcgwHO", "2859210lqXizO", "355708pfVEXD", "forEach", "key", "2775906iJGvqF", "rightClickCallback", "19104256yTDgqw", "clear"];
  return mt = function() {
    return t;
  }, mt();
}
const yc = g2("situationRightMenu", { state() {
  return { rightMenuSelectData: null, menuShow: !1, menuX: 0, menuY: 0, cartesian2: new Y(0, 0), entityOption: {}, emptyOption: {}, rightClickCallback: /* @__PURE__ */ new Set() };
}, getters: { getterEntityMenuOptions: (t) => Object.values(t[L0(390)]), getterEmptyMenuOptions: (t) => Object[L0(385)](t.emptyOption) }, actions: { pushEntityOption(t, e) {
  const x = L0;
  !Gn(t) && (t = [t]);
  const n = this[x(390)];
  t[x(379)]((a) => {
    const s = x;
    if (e != null && e.replace) {
      n[a[s(380)]] = a;
      return;
    }
    if (n[a.key]) {
      console[s(388)]("右键菜单的key必须是唯一值 " + a[s(380)]);
      return;
    }
    n[a[s(380)]] = a;
  });
}, removeEntityOptionByKey(t) {
  const e = L0;
  if ($t(t)) {
    delete this[e(390)][t];
    return;
  }
  t.forEach((x) => {
    delete this.entityOption[x];
  });
}, pushEmptyOption(t, e) {
  const x = L0;
  !Gn(t) && (t = [t]);
  const n = this[x(386)];
  t.forEach((a) => {
    const s = x;
    if (e != null && e.replace) {
      n[a[s(380)]] = a;
      return;
    }
    if (n[a[s(380)]]) {
      console.warn("右键菜单的key必须是唯一值 " + a.key);
      return;
    }
    n[a[s(380)]] = a;
  });
}, removeEmptyOptionByKey(t) {
  const e = L0;
  if ($t(t)) {
    delete this[e(386)][t];
    return;
  }
  t[e(379)]((x) => {
    const n = e;
    delete this[n(386)][x];
  });
}, clearOptions() {
  const t = L0;
  this[t(390)] = {}, this[t(386)] = {}, this[t(382)][t(384)]();
} } }), V0 = Dn;
(function(t, e) {
  const x = Dn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(235)) / 1 + -parseInt(x(245)) / 2 + parseInt(x(241)) / 3 + parseInt(x(231)) / 4 + -parseInt(x(239)) / 5 * (parseInt(x(225)) / 6) + parseInt(x(246)) / 7 + -parseInt(x(234)) / 8 * (-parseInt(x(248)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(It, 786926);
function Dn(t, e) {
  return t = t - 225, It()[t];
}
const Ni = g2(V0(250), { state() {
  return { isShow: !1, posOffset: { x: 0, y: 0 }, menuMap: { baseGroup: {}, otherGroup: {} }, eventList: {}, rightClickEvent: /* @__PURE__ */ new Set(), cachePosition: null };
}, getters: { menuOptions(t) {
  const e = V0, x = t[e(237)], n = [];
  return Object[e(242)](x)[e(240)]((a, s) => {
    const r = e, i = Object[r(242)](a);
    i[r(247)] && (n[r(238)](...i), s !== Object[r(242)](x)[r(247)] - 1 && n[r(238)]({ type: r(227), show: i.some((o) => o[r(228)]) }));
  }), n;
} }, actions: { setMenu(t, e) {
  const x = V0;
  !this[x(237)][t[x(249)]] && (this[x(237)][t[x(249)]] = {}), this[x(237)][t.group][t[x(243)]] = t, e && (this.eventList[t[x(243)]] = e);
}, setMenus(t) {
  t.forEach((e) => {
    const x = Dn;
    this[x(230)](e[x(232)], e[x(236)]);
  });
}, clearMenu() {
  const t = V0;
  Object[t(244)](this.menuMap)[t(240)]((e) => {
    this.menuMap[e] = {};
  }), this.eventList = {};
}, clearByGroup(t) {
  const e = V0;
  this[e(237)][t] = {};
}, executeFilter(t) {
  const e = V0;
  t && (this[e(226)] = t);
  const x = t ?? this[e(226)];
  Object.values(this.menuMap)[e(240)]((n) => {
    const a = e;
    Object[a(242)](n)[a(240)]((s) => {
      var r;
      s.show = ((r = s.isShow) == null ? void 0 : r.call(s, { data: s, position: x })) ?? !1;
    });
  });
}, setRightClick(t) {
  this[V0(233)].add(t);
}, setOffset(t, e) {
  this.posOffset = { x: t, y: e };
}, reset() {
  this.$reset();
}, closeMenu() {
  const t = V0;
  this[t(229)] = !1;
} } });
function It() {
  const t = ["menuMap", "push", "5taNixQ", "forEach", "3803391IgeJVC", "values", "key", "keys", "1243812vFShIq", "1523893hsRItr", "length", "8941572OTDfyx", "group", "cesiumRightMenu", "679452XgYfNb", "cachePosition", "divider", "show", "isShow", "setMenu", "1779084NhDsTS", "data", "rightClickEvent", "8yTGxef", "1401701YqAifM", "event"];
  return It = function() {
    return t;
  }, It();
}
(function(t, e) {
  const x = _a, n = t();
  for (; ; )
    try {
      if (parseInt(x(276)) / 1 + parseInt(x(271)) / 2 + parseInt(x(280)) / 3 * (parseInt(x(273)) / 4) + -parseInt(x(279)) / 5 + -parseInt(x(278)) / 6 * (parseInt(x(272)) / 7) + -parseInt(x(275)) / 8 + -parseInt(x(274)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(gt, 502419);
function _a(t, e) {
  return t = t - 271, gt()[t];
}
const Oi = [Zs, ei, ai, pi, yi, vi, Si, Ai], vc = { install(t) {
  const e = _a;
  for (const x of Oi)
    t[e(277)](x);
} };
function gt() {
  const t = ["1454045nlzsAl", "9oGzHsS", "1620782JNesGZ", "3506776SVoYMy", "643888PjZvDe", "1248660UjYVzH", "2442088doRZCG", "444890PdFNpF", "use", "6TyacfZ"];
  return gt = function() {
    return t;
  }, gt();
}
(function(t, e) {
  for (var x = Vi, n = t(); ; )
    try {
      var a = -parseInt(x(307)) / 1 * (-parseInt(x(308)) / 2) + -parseInt(x(303)) / 3 + parseInt(x(309)) / 4 * (-parseInt(x(305)) / 5) + -parseInt(x(301)) / 6 * (-parseInt(x(304)) / 7) + -parseInt(x(302)) / 8 + -parseInt(x(306)) / 9 + parseInt(x(310)) / 10;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(yt, 301764);
function yt() {
  var t = ["3658144BOEyHg", "165924qQzoqW", "35161SBPDyj", "96575oCYGbo", "4100319EKeXsD", "519134nwmWGo", "2XTyVeS", "4oGjtdZ", "7449970wYToCq", "30WULOxg"];
  return yt = function() {
    return t;
  }, yt();
}
function Vi(t, e) {
  t = t - 301;
  var x = yt(), n = x[t];
  return n;
}
Bs();
export {
  ei as CInfoPopup,
  Ai as CInputPosition,
  Si as CModelView,
  pi as CNavigation,
  ai as CRightMenu,
  yi as CScale,
  vi as CScaleSelect,
  Zs as CViewer,
  eo as ClearViewer,
  bc as CustomMeasuredGraticule,
  Ix as EllipseDiffuseMaterialProperty,
  is as GraphicType,
  mc as MeasuredGraticule,
  Ic as MultipleSelectViewModel,
  Br as RunStepFn,
  gc as SelectedPrimitiveModel,
  vc as SimpleCesium,
  pc as VelocityOrientationProperty,
  q2 as VelocityVectorProperty,
  _c as VelocityVectorRotationProperty,
  hc as WGS84GridLayer,
  ic as WGS84TransformToJ2000,
  Co as addConnectChart,
  mo as addDefaultTerrain,
  Tr as addImageryProvider,
  Nr as addTerrain,
  ys as assign,
  Ui as billboardDefaultConfig,
  lc as calculateAreaByPoints,
  dc as calculateDestination,
  Do as cameraFlyTo,
  Z2 as cartesian3ToDegrees,
  ac as cartesian3ToDegrees2,
  go as changeSceneMode2D,
  yo as changeSceneMode3D,
  vo as changeSceneModeColumbus,
  dx as clearEntitySourceBySourceName,
  Mr as clearImageryWeak,
  sc as computedGroundDistance,
  rc as computedGroundDistanceByDegrees,
  co as createCzmlSource,
  jo as createEntity,
  Cr as createEntityDatasource,
  px as createEntitySource,
  hr as createViewer,
  lo as createWebMapServiceImageryProvider,
  kr as createWebTileMapServiceImageryProvider,
  lx as createdEventList,
  io as dataSourceClearEntity,
  vc as default,
  y0 as defaultConfig,
  Er as deleteDatasourceByName,
  oo as deleteEntitySourceByViewer,
  br as deleteViewerFromMap,
  mr as destroyViewer,
  wr as emitViewerCreated,
  Zi as executeClearEvent,
  vr as executeDestroyed,
  Ur as executeFirstStepFn,
  Lr as firstPerspectiveEvent,
  ko as flyToRectangle,
  D2 as generateMountFn,
  _n as generateSceneModeChange,
  Xo as getAllMap,
  ji as getBillboardImage,
  xx as getCamera,
  G2 as getCameraField,
  No as getCameraHeight,
  uc as getCenterByPoints,
  zx as getClock,
  Fx as getClockField,
  Zt as getCoordinatesFromFeature,
  Vo as getCurrentCameraPosition,
  jr as getCurrentTimeDayJs,
  Se as getCurrentTimeJulian,
  ro as getCzmlSourceByName,
  Ho as getEntityById,
  Vn as getEntityByPosition,
  rs as getEntityConstantPosition,
  Sr as getEntityDatasource,
  Yo as getEntityMetaData,
  H2 as getEntityPosition,
  ns as getEntityProperties,
  as as getEntityPropertyByName,
  $o as getEntitySampledPosition,
  C0 as getEntitySource,
  vs as getFieldByInstance,
  po as getImageryProviderByCode,
  _o as getImageryProviderList,
  P0 as getImageryWeakByViewer,
  Jr as getInfinityTime,
  Uo as getMultiplier,
  so as getOrCreateEntitySource,
  Hi as getPrimitiveByPosition,
  Pt as getScene,
  xs as getShouldAnimate,
  Qr as getSpeed,
  Wo as getStartTimeDayJs,
  Go as getStartTimeJulian,
  Fo as getStopTimeDayJs,
  zo as getStopTimeJulian,
  Ve as getTurfPoint,
  fc as getTurnPolygon,
  Un as getTwoPointsCenter,
  Vt as getTwoPointsDistance,
  z as getViewer,
  yr as getViewerCanvas,
  gr as getViewerContainer,
  Vx as getViewerField,
  L as getViewerName,
  oc as getWorldPosition,
  k2 as hasEntitySource,
  dn as hasImageryProviderByViewer,
  Yi as hasPrimitiveByPosition,
  bo as hasTerrain,
  to as hasViewer,
  no as hasViewerWithWarn,
  Ir as hiddenAdvertise,
  Dr as hiddenImageryProvider,
  Ar as imageryProviderIsShow,
  Gn as isArray,
  es as isCustomDatasource,
  ts as isCzmlDatasource,
  _x as isDataType,
  fs as isDefine,
  tc as isMap,
  Wn as isNumber,
  cs as isObject,
  nc as isSet,
  $t as isString,
  M2 as isViewer,
  sr as labelDefaultConfig,
  Io as loadOceanImageryLayer,
  Or as locationFuzzyQuery,
  yn as nextTick,
  Ao as onCameraChange,
  $i as onClearEvent,
  Ki as onCtrlLeftClick,
  xo as onCtrlLeftDown,
  pr as onDoubleClick,
  Lo as onFirstStep,
  dr as onLeftClick,
  ex as onLeftDown,
  on as onLeftUp,
  fn as onMouseMove,
  Qi as onMoveEntity,
  Ji as onPostRender,
  S2 as onPreUpdate,
  cn as onRightClick,
  wo as onSceneChange,
  qi as onTick,
  w0 as onViewerCreated,
  Lx as onViewerDestroyed,
  Bs as registryMaterial,
  Xi as removeAllClearEvent,
  Pr as removeAllImageryProvider,
  So as removeConnectChart,
  Po as removeFirstPerspective,
  fo as removeImageryWeak,
  Rr as resetCameraController,
  ho as resetTerrain,
  vn as screenPosToCartesian,
  W0 as screenPosToLBH,
  X2 as screenToDegrees,
  Oo as setCameraHeight,
  z2 as setCameraScale,
  j2 as setClockValueByField,
  Ln as setCurrentTime,
  Hr as setCurrentTimeJulian,
  Gr as setDefaultCamera,
  Zo as setEntityPosition,
  To as setFirstPerspective,
  uo as setImageryProvider,
  A2 as setImageryWeak,
  Eo as setSelectedEntity,
  Kr as setShouldAnimate,
  Rn as setSpeed,
  $r as setStartTime,
  Yr as setStartTimeJulian,
  Xr as setStopTime,
  qr as setStopTimeInfinity,
  Zr as setStopTimeJulian,
  Bi as setToken,
  Mo as setTrackedEntity,
  o0 as setViewerCursor,
  T2 as setViewerValueByField,
  Ro as synchronizeTime,
  cc as translateByHeight,
  Sc as turfArea,
  Ec as turfPolygon,
  ec as useCreatePlaceEntity,
  xc as useDrawEllipsisArea,
  Jo as useDrawPointArea,
  Ko as useDrawPolygonArea,
  qo as useDrawPolylineArea,
  Qo as useDrawRectangleArea,
  Ni as useRightMenu,
  yc as useRightMenuOptionStore,
  ao as viewerFlyTo,
  R0 as viewerMap,
  N2 as visibleImageryProvider,
  Bo as watchCurrentTime
};
