import * as bx from "cesium";
import { SceneMode as _0, GeographicTilingScheme as Qt, Ion as La, LabelStyle as cn, Color as F, HorizontalOrigin as Vt, VerticalOrigin as on, Cartesian2 as $, Entity as Na, ScreenSpaceEventType as L0, KeyboardEventModifier as fn, Viewer as un, CzmlDataSource as ln, CustomDataSource as Zt, DefaultProxy as Va, WebMapServiceImageryProvider as Oa, WebMapTileServiceImageryProvider as Ra, CesiumTerrainProvider as Ga, EllipsoidTerrainProvider as dn, Rectangle as Ex, GeoJsonDataSource as za, PolylineGraphics as Fa, ArcType as Wa, CameraEventType as tx, Camera as Ba, Ellipsoid as Jx, Math as o0, Cartesian3 as I, JulianDate as r0, PolygonHierarchy as Kx, ConstantProperty as Mx, ConstantPositionProperty as pn, Cartographic as t0, EllipsoidGeodesic as x2, Ray as _n, Plane as hn, IntersectionTests as ja, defined as G, SceneTransforms as Ha, VelocityVectorProperty as Ua, Event as kx, ExtrapolationType as Ot, Transforms as Ya, Matrix3 as bn, Quaternion as $a, ReferenceFrame as N2, DeveloperError as mn, GridImageryProvider as Ja, destroyObject as e2, Material as O, createPropertyDescriptor as M0, Property as l0, PolylineCollection as Ka, LabelCollection as Xa, PrimitiveCollection as In, SelectionIndicator as gn, ImageryLayer as qa, UrlTemplateImageryProvider as Qa, CesiumWidget as Za, HeadingPitchRange as xr, Model as er, Matrix4 as tr } from "cesium";
import { onScopeDispose as t2, defineComponent as E0, shallowRef as n2, provide as nr, onMounted as yn, onBeforeUnmount as Ax, openBlock as p0, createElementBlock as z0, renderSlot as Rt, useCssVars as ar, ref as K0, computed as a2, onUnmounted as vn, createElementVNode as y0, toDisplayString as r2, createCommentVNode as rr, toValue as Ix, nextTick as s2, resolveComponent as Tx, createBlock as It, withModifiers as sr, unref as gt, watch as Px, reactive as ir, h as cr, withDirectives as or, Fragment as wn, renderList as Cn, normalizeStyle as fr, vShow as ur, normalizeProps as V2, guardReactiveProps as O2, withCtx as Xx, createVNode as Gt, mergeProps as lr, createSlots as dr } from "vue";
import { storeToRefs as pr, defineStore as Sn } from "pinia";
import _r from "cesium-navigation-es6";
import { ElMessage as hr } from "element-plus";
import { polygon as En, area as br, destination as mr, featureCollection as Ir, center as gr, point as qx, midpoint as yr, distance as vr } from "@turf/turf";
import { area as Mo, polygon as To } from "@turf/turf";
function Mn(t, e) {
  return t = t - 479, Qx()[t];
}
const R2 = Mn;
(function(t, e) {
  const x = Mn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(481)) / 1 + parseInt(x(486)) / 2 * (-parseInt(x(489)) / 3) + parseInt(x(490)) / 4 + parseInt(x(484)) / 5 + -parseInt(x(491)) / 6 * (parseInt(x(487)) / 7) + -parseInt(x(482)) / 8 * (-parseInt(x(483)) / 9) + -parseInt(x(479)) / 10 * (-parseInt(x(488)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qx, 584693);
const v0 = { DEFAULT_VIEWER_NAME: "cesium-box", defaultImageryUrl: { url: "/map/globe/{z}/{x}/{y}.jpg", tilingScheme: new Qt(), minimumLevel: 0, maximumLevel: 19 }, defaultTerrainUrl: R2(480), viewerConfig: { infoBox: !1, animation: !1, homeButton: !1, geocoder: !1, shouldAnimate: !1, baseLayerPicker: !1, fullscreenButton: !1, timeline: !1, sceneMode: _0[R2(485)], selectionIndicator: !0, navigationHelpButton: !1, sceneModePicker: !1, terrain: void 0 }, synchronizeConfig: { maxTime: 5, interval: 1e3, minSpeed: 1e-3, cacheSize: 3, defaultStopTime: "9999/12/31 23:59:59" }, eventConfig: { clickAndDbClickInterval: 100, defaultLeftClick: !0, defaultRightClick: !1, defaultClearClick: !1, defaultDoubleClick: !1, defaultMouseMove: !1, defaultLeftUp: !1, defaultLeftDown: !1 }, navigation: { duration: 3, enableCompass: !0, enableDistanceLegend: !0, enableCompassOuterRing: !0, enableZoomControls: !0 } };
function Qx() {
  const t = ["/map/terrain/", "730413GKVLKw", "5176fnjHNA", "8370VHnYSN", "2199400qFEeYR", "SCENE2D", "50cFmFqy", "5199089MAWkDY", "11kswyzU", "7278zcyXTi", "3504820TowNnm", "6raJfEg", "2006880CiMioK"];
  return Qx = function() {
    return t;
  }, Qx();
}
function Tn(t, e) {
  t = t - 320;
  var x = Zx(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = Tn, n = t(); ; )
    try {
      var a = parseInt(x(323)) / 1 * (parseInt(x(328)) / 2) + -parseInt(x(325)) / 3 * (parseInt(x(321)) / 4) + -parseInt(x(331)) / 5 + parseInt(x(320)) / 6 + -parseInt(x(327)) / 7 * (-parseInt(x(322)) / 8) + -parseInt(x(326)) / 9 + parseInt(x(329)) / 10 * (parseInt(x(324)) / 11);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zx, 665676);
function Zx() {
  var t = ["5778678YuTYeO", "16xpdvgr", "8skzvSI", "1PgrnkO", "55RGCejb", "817701ifSzHL", "4511853VKsPHh", "4964267psYUNi", "705634mmVdQx", "2003970LSQZEL", "defaultAccessToken", "3849175EXVXXz"];
  return Zx = function() {
    return t;
  }, Zx();
}
function Hi(t) {
  var e = Tn;
  La[e(330)] = t;
}
const jx = Pn;
(function(t, e) {
  const x = Pn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(478)) / 1 * (-parseInt(x(480)) / 2) + -parseInt(x(483)) / 3 * (-parseInt(x(487)) / 4) + -parseInt(x(479)) / 5 + -parseInt(x(488)) / 6 + -parseInt(x(481)) / 7 + parseInt(x(486)) / 8 + -parseInt(x(484)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xe, 224797);
function Pn(t, e) {
  return t = t - 477, xe()[t];
}
function xe() {
  const t = ["WHITE", "FILL_AND_OUTLINE", "1225MOQLxI", "1580915MSgpTa", "668UtoKBw", "2501975OxquXP", "CENTER", "3jJUOlW", "1362816uyFGWB", "14px sans-serif", "3369584sDjhNt", "1477352ePPnDI", "899142VSOUeE"];
  return xe = function() {
    return t;
  }, xe();
}
const wr = { font: jx(485), pixelOffset: new $(18, 0), verticalOrigin: on[jx(482)], horizontalOrigin: Vt.LEFT, fillColor: F[jx(489)], style: cn[jx(477)] };
(function(t, e) {
  const x = Cr, n = t();
  for (; ; )
    try {
      if (parseInt(x(376)) / 1 * (-parseInt(x(382)) / 2) + parseInt(x(377)) / 3 + parseInt(x(379)) / 4 * (-parseInt(x(378)) / 5) + parseInt(x(381)) / 6 * (parseInt(x(372)) / 7) + -parseInt(x(375)) / 8 * (-parseInt(x(380)) / 9) + parseInt(x(384)) / 10 * (parseInt(x(383)) / 11) + parseInt(x(374)) / 12 * (parseInt(x(373)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ee, 845026);
function Cr(t, e) {
  return t = t - 372, ee()[t];
}
const Ui = { scale: 1 };
function ee() {
  const t = ["5413795EsKhaJ", "4HqJvNh", "5830749VOxoVL", "3967620NqkyJg", "2703122iycTcr", "11079508mSUxWN", "10LkvoZj", "7kSeMit", "57811iKQvXN", "1344VjztOO", "8EmlyHL", "1sDVWPR", "1394769KdJLzP"];
  return ee = function() {
    return t;
  }, ee();
}
async function Yi(t) {
  return t;
}
(function(t, e) {
  const x = h0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(162)) / 1 * (-parseInt(x(156)) / 2) + -parseInt(x(147)) / 3 * (-parseInt(x(145)) / 4) + -parseInt(x(138)) / 5 * (parseInt(x(164)) / 6) + parseInt(x(143)) / 7 + -parseInt(x(141)) / 8 * (parseInt(x(150)) / 9) + -parseInt(x(158)) / 10 * (-parseInt(x(161)) / 11) + -parseInt(x(140)) / 12 * (parseInt(x(167)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(te, 395914);
function h0(t, e) {
  return t = t - 138, te()[t];
}
var Sr = ((t) => {
  const e = h0;
  return t[t[e(144)] = 0] = e(144), t[t[e(157)] = 1] = "emptyArea", t[t[e(165)] = 2] = e(165), t;
})(Sr || {});
const i2 = /* @__PURE__ */ new Map();
function Er(t) {
  return t[h0(139)] ? 0 : t.isEmpty ? 1 : 2;
}
function te() {
  const t = ["add", "2737819xrfaTB", "entityArea", "1498612BiRYmp", "get", "6MCkFLx", "from", "isRegistry", "23823enjQSH", "primitive", "has", "scene", "set", "forEach", "2eBccGe", "emptyArea", "14460vBqjYK", "pick", "screenSpaceEventHandler", "5665EmHGeF", "102811Ivjpwo", "drillPick", "24KMdLYM", "globalArea", "areaEventMap", "1339GtyvGr", "delete", "viewerName", "566165mNrtpf", "isEntity", "72264NJeyCm", "1568xrzFFB"];
  return te = function() {
    return t;
  }, te();
}
function c2(t, e = R()) {
  const x = h0;
  return !t[x(152)](e) && (t.set(e, /* @__PURE__ */ new Map()), Vx(() => t.delete(e), { viewerName: e })), t[x(146)](e);
}
function o2(t, e, x) {
  const n = h0, a = x ? e + "_" + x : e;
  return !t[n(152)](a) && t[n(154)](a, { areaEventMap: /* @__PURE__ */ new Map(), isRegistry: !1 }), t[n(146)](a);
}
function gx(t, e) {
  const x = h0;
  return !t[x(152)](e) && t[x(154)](e, /* @__PURE__ */ new Set()), t[x(146)](e);
}
function Mr(t, e, x, n) {
  const a = h0, s = c2(i2, t), r = o2(s, e, n), i = r[a(166)];
  return gx(i, x);
}
function W0(t, e) {
  return function(x, n) {
    const a = Er(n ?? {});
    return C0((s) => {
      const r = h0, i = R(n == null ? void 0 : n[r(169)]), c = c2(i2, i), o = o2(c, t, e), u = o[r(166)];
      gx(u, a)[r(142)](x), !o[r(149)] && Tr(s, i, t, e);
    }, n == null ? void 0 : n.viewerName), () => {
      const s = h0;
      Mr(R(n == null ? void 0 : n[s(169)]), t, a, e)[s(168)](x);
    };
  };
}
function Tr(t, e, x, n) {
  const a = h0;
  t[a(160)].setInputAction((s) => {
    const r = a;
    e = R(e);
    const i = c2(i2, e), c = o2(i, x, n), o = c[r(166)];
    let u;
    x === L0.MOUSE_MOVE && (u = G2(s.endPosition, t)), u = G2(s.position, t), u ? gx(o, 0)[r(155)]((f) => f({ entity: u, position: s })) : gx(o, 1)[r(155)]((f) => f({ position: s })), gx(o, 2)[r(155)]((_) => _({ position: s }));
  }, x, n);
}
function G2(t, e) {
  var n;
  if (!t) return null;
  const x = (n = e == null ? void 0 : e.scene) == null ? void 0 : n.pick(t, 30, 30);
  return x && Pr(x == null ? void 0 : x.id) && x.id;
}
function $i(t, e) {
  const x = h0;
  if (!t) return null;
  const n = e[x(153)][x(159)](t);
  return n && n[x(151)];
}
function Ji(t, e) {
  const x = h0;
  if (!t) return null;
  const n = e[x(153)][x(159)](t);
  if (n != null && n[x(151)]) return n;
}
function Pr(t) {
  return t instanceof Na;
}
(function(t, e) {
  const x = Dx, n = t();
  for (; ; )
    try {
      if (parseInt(x(400)) / 1 + -parseInt(x(403)) / 2 + parseInt(x(399)) / 3 + parseInt(x(405)) / 4 + parseInt(x(394)) / 5 * (-parseInt(x(393)) / 6) + -parseInt(x(391)) / 7 * (parseInt(x(406)) / 8) + -parseInt(x(395)) / 9 * (parseInt(x(392)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ne, 905666);
const Y0 = /* @__PURE__ */ new WeakMap();
function Dx(t, e) {
  return t = t - 390, ne()[t];
}
function ne() {
  const t = ["5906108oKZuAo", "424QJvDLb", "forEach", "14658ZXKHPn", "70HBjljj", "37326TLaZzA", "610GLlCHj", "1677366uLgAtS", "get", "add", "set", "4706289XhTKqV", "577799BWMOvU", "clear", "viewerName", "1085722ApjWgd", "delete"];
  return ne = function() {
    return t;
  }, ne();
}
function Ki(t, e) {
  const x = Dx;
  return nextTick().then(() => {
    const n = Dx, { viewerName: a } = e ?? {}, s = B(a);
    !Y0.has(s) && (Y0[n(398)](s, /* @__PURE__ */ new Set()), Vx(() => Y0[n(404)](s), { viewerName: R(a) })), Y0[n(396)](s)[n(397)](t);
  }), () => {
    var n;
    return (n = Y0[x(396)](B(e == null ? void 0 : e[x(402)]))) == null ? void 0 : n.delete(t);
  };
}
function Xi(t) {
  var n;
  const e = Dx, x = B(t);
  (n = Y0[e(396)](x)) == null || n[e(390)]((a) => {
    const s = B();
    a(s);
  });
}
function qi(t) {
  var x;
  const e = Dx;
  (x = Y0.get(B(t == null ? void 0 : t[e(402)]))) == null || x[e(401)]();
}
function ae() {
  const t = ["48uLDXIF", "576ydAtcz", "166zvhsiN", "285640mEgOjp", "483862PjyqhT", "preUpdate", "4832672gJgXLs", "2466730MuRbcg", "126644bKiORN", "27465QZxFgO", "657748SpJSOX"];
  return ae = function() {
    return t;
  }, ae();
}
(function(t, e) {
  const x = Dn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(281)) / 1 + -parseInt(x(290)) / 2 * (parseInt(x(286)) / 3) + -parseInt(x(287)) / 4 + -parseInt(x(284)) / 5 + -parseInt(x(288)) / 6 * (parseInt(x(285)) / 7) + parseInt(x(283)) / 8 + parseInt(x(289)) / 9 * (parseInt(x(291)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ae, 385934);
function Dn(t, e) {
  return t = t - 281, ae()[t];
}
function kn(t, e) {
  const { viewerName: x } = e ?? {};
  let n;
  return C0((a) => {
    const s = Dn;
    n = a.scene[s(282)].addEventListener(t);
  }, { viewerName: x }), n;
}
function Qi(t, e) {
  const { viewerName: x } = e ?? {}, n = Ct(x), a = n.postRender.addEventListener(t);
  return () => a;
}
function Zi(t, e) {
  const { viewerName: x } = e ?? {};
  return Gx(x).onTick.addEventListener(t);
}
(function(t, e) {
  const x = mx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(255)) / 1 * (parseInt(x(265)) / 2) + -parseInt(x(260)) / 3 * (parseInt(x(258)) / 4) + parseInt(x(253)) / 5 * (-parseInt(x(257)) / 6) + parseInt(x(251)) / 7 + -parseInt(x(254)) / 8 + -parseInt(x(256)) / 9 * (parseInt(x(266)) / 10) + -parseInt(x(259)) / 11 * (-parseInt(x(263)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(re, 202875);
function xc(t, e) {
  const x = /* @__PURE__ */ new Set(), n = e == null ? void 0 : e.condition;
  return C0(() => {
    const a = mx, s = q0(({ entity: r }) => {
      const i = mx;
      if (!(n ? n(r) : !1)) return;
      const o = l2(({ position: l }) => {
        var d;
        const _ = mx, f = v2(l[_(262)]);
        f && ((d = vs(r)) == null || d[_(264)](f));
      });
      x[i(261)](o);
      const u = f2(({ position: l }) => {
        o(), t == null || t({ entity: r, position: l }), u();
      });
      x[i(261)](u);
    }, { isEntity: !0 });
    x[a(261)](s);
  }), () => {
    const a = mx;
    x.forEach((s) => s == null ? void 0 : s()), x[a(252)]();
  };
}
function mx(t, e) {
  return t = t - 251, re()[t];
}
function re() {
  const t = ["28581XUAaGA", "add", "endPosition", "972fzioGJ", "setValue", "226702CVyouP", "3398150JgiZET", "539952Lvgros", "clear", "4965aZuPhe", "2450408wgFgoH", "1EtuxjS", "9PlYMpE", "2154AmyntL", "152FaQRQc", "217789FTZpGc"];
  return re = function() {
    return t;
  }, re();
}
const yt = An;
(function(t, e) {
  const x = An, n = t();
  for (; ; )
    try {
      if (-parseInt(x(135)) / 1 * (parseInt(x(134)) / 2) + parseInt(x(136)) / 3 * (parseInt(x(143)) / 4) + parseInt(x(139)) / 5 * (parseInt(x(146)) / 6) + parseInt(x(147)) / 7 * (parseInt(x(138)) / 8) + -parseInt(x(144)) / 9 + parseInt(x(140)) / 10 + -parseInt(x(145)) / 11 * (parseInt(x(142)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(se, 188998);
const Dr = W0(L0[yt(149)]), ec = W0(L0.LEFT_CLICK, fn.CTRL), q0 = W0(L0.LEFT_DOWN);
function An(t, e) {
  return t = t - 134, se()[t];
}
function se() {
  const t = ["LEFT_CLICK", "12bZUHTU", "14306glJUGY", "1350sMPQZm", "LEFT_UP", "1308904QHhMXg", "9440clxLOu", "128900MUWQUR", "MOUSE_MOVE", "24ooAHKu", "1352tuXGjc", "458514ZjaNCp", "967318XTBSjK", "30FAJbNt", "14rxyZfP", "LEFT_DOWN"];
  return se = function() {
    return t;
  }, se();
}
const tc = W0(L0[yt(148)], fn.CTRL), f2 = W0(L0[yt(137)]), u2 = W0(L0.RIGHT_CLICK), kr = W0(L0.LEFT_DOUBLE_CLICK), l2 = W0(L0[yt(141)]), Q0 = Lx;
(function(t, e) {
  const x = Lx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(317)) / 1 * (-parseInt(x(307)) / 2) + parseInt(x(330)) / 3 * (-parseInt(x(311)) / 4) + -parseInt(x(323)) / 5 * (-parseInt(x(328)) / 6) + -parseInt(x(318)) / 7 * (-parseInt(x(308)) / 8) + parseInt(x(327)) / 9 + parseInt(x(313)) / 10 * (-parseInt(x(309)) / 11) + parseInt(x(319)) / 12 * (parseInt(x(320)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ie, 159340);
const G0 = /* @__PURE__ */ new Map();
function Lx(t, e) {
  return t = t - 306, ie()[t];
}
const { viewerConfig: Ar } = v0;
function Lr(t, e) {
  const x = Lx;
  if (G0[x(321)](t)) return console[x(310)]("名称为" + t + x(324)), G0.get(t);
  G0[x(306)](t, new un(t, Rs({}, Ar, e ?? {})));
  const n = G0.get(t);
  return Fr(t, n), Or(n), n;
}
function B(t) {
  const e = Lx, x = t ?? v0[e(312)];
  return Ln(x) ? x : G0[e(325)](x);
}
function R(t) {
  return t ?? v0[Lx(312)];
}
function Nr(t = v0[Q0(312)]) {
  G0.delete(t);
}
function Vr(t = v0.DEFAULT_VIEWER_NAME) {
  var x;
  const e = B(t);
  zr(t), (x = B(e)) == null || x.destroy(), Nr(t);
}
function nc() {
}
function ac(t = v0.DEFAULT_VIEWER_NAME) {
  return G0[Q0(321)](t);
}
function rc(t) {
  const e = Q0;
  return !t || !Ln(t) ? (console.warn(e(331)), !1) : !0;
}
function Ln(t) {
  return t instanceof un;
}
function Nx(t) {
  return function(e) {
    var x;
    return (x = B(e)) == null ? void 0 : x[t];
  };
}
function Or(t) {
  const e = Q0, x = B(t)[e(326)];
  x[e(316)][e(314)] = "none";
}
function ie() {
  const t = ["canvas", "style", "162FNhKNS", "9170mQVSXP", "147192GQRuNa", "104JNaDwl", "has", "cursor", "35oAkoeJ", " 的视图已经存在", "get", "bottomContainer", "1754190SXhVXg", "194346vUneAb", "container", "6YxMBUQ", "请先创建Viewer", "set", "892PNVdux", "576KCLXfq", "50281PjsxcS", "warn", "514636zkpoES", "DEFAULT_VIEWER_NAME", "590ArZrIW", "display"];
  return ie = function() {
    return t;
  }, ie();
}
function sc(t, e, x) {
  B(x).flyTo(t, e);
}
const Rr = Nx(Q0(329)), Gr = Nx(Q0(315));
function i0(t = "", e) {
  const x = Q0, n = Gr(e);
  n && (n[x(316)][x(322)] = t);
}
function Nn(t) {
  return function(e, x) {
    B(x)[t] = e;
  };
}
(function(t, e) {
  const x = d2, n = t();
  for (; ; )
    try {
      if (parseInt(x(442)) / 1 + parseInt(x(447)) / 2 * (-parseInt(x(444)) / 3) + parseInt(x(452)) / 4 * (-parseInt(x(446)) / 5) + -parseInt(x(451)) / 6 + parseInt(x(441)) / 7 * (-parseInt(x(445)) / 8) + parseInt(x(439)) / 9 * (parseInt(x(443)) / 10) + parseInt(x(448)) / 11 * (parseInt(x(449)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ce, 882874);
function d2(t, e) {
  return t = t - 436, ce()[t];
}
function ce() {
  const t = ["280629ZMUXvg", "viewerName", "538552hXzPmh", "420000LzgQiF", "440LryoXL", "232293NHrCFG", "176kcJEGm", "5INvuWL", "10PDvFuM", "5269qVqUYz", "88608qESIYg", "delete", "4002048ZCRalo", "6797084dGiusg", "add", "has", "get"];
  return ce = function() {
    return t;
  }, ce();
}
const yx = /* @__PURE__ */ new Map();
function zr(t = R()) {
  var n;
  const e = d2, x = B(t);
  (n = yx[e(438)](t)) == null || n.forEach((a) => a(x)), yx[e(450)](t);
}
function Vx(t, e) {
  const x = d2, n = R(e == null ? void 0 : e[x(440)]);
  !yx[x(437)](n) && yx.set(n, /* @__PURE__ */ new Set()), yx.get(n)[x(436)](t);
}
function oe() {
  const t = ["delete", "772400tnSwRT", "has", "4370455keKuKi", "5000308hPcHZF", "get", "4839996HXLZDS", "6GSXCDY", "12246200GTQYiz", "viewerName", "933866smvBwR", "forEach", "2051487yVxDEr", "set", "add"];
  return oe = function() {
    return t;
  }, oe();
}
function p2(t, e) {
  return t = t - 234, oe()[t];
}
(function(t, e) {
  const x = p2, n = t();
  for (; ; )
    try {
      if (parseInt(x(237)) / 1 + -parseInt(x(246)) / 2 + -parseInt(x(248)) / 3 + parseInt(x(240)) / 4 + -parseInt(x(239)) / 5 * (parseInt(x(243)) / 6) + -parseInt(x(242)) / 7 + parseInt(x(244)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(oe, 836971);
const ix = /* @__PURE__ */ new Map();
function C0(t, e) {
  const x = p2, n = R(Ss(e) ? e[x(245)] : e), a = B(R(n));
  if (a) return t(a);
  !ix[x(238)](n) && ix[x(234)](n, /* @__PURE__ */ new Set()), ix[x(241)](n)[x(235)](t);
}
function Fr(t, e) {
  const x = p2, n = ix[x(241)](t);
  n && n[x(247)]((a) => a(e)), ix[x(236)](t);
}
(function(t, e) {
  const x = w0, n = t();
  for (; ; )
    try {
      if (parseInt(x(327)) / 1 * (parseInt(x(328)) / 2) + parseInt(x(338)) / 3 * (-parseInt(x(343)) / 4) + parseInt(x(323)) / 5 + -parseInt(x(340)) / 6 + -parseInt(x(324)) / 7 * (parseInt(x(332)) / 8) + -parseInt(x(342)) / 9 * (-parseInt(x(334)) / 10) + parseInt(x(330)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fe, 849590);
const D0 = /* @__PURE__ */ new Map();
function Vn(t, e, x = R()) {
  const n = w0;
  !D0.has(x) && (D0.set(x, /* @__PURE__ */ new Map()), Vx(() => D0[n(329)](x), { viewerName: x })), D0[n(336)](x)[n(333)](t, e);
}
function On(t, e = R()) {
  var n;
  const x = w0;
  return (n = D0.get(e)) == null ? void 0 : n[x(339)](t);
}
function S0(t, e = R()) {
  var n;
  const x = w0;
  return (n = D0.get(e)) == null ? void 0 : n[x(336)](t);
}
const ic = S0;
function Wr(t, e = R()) {
  const x = w0;
  if (!t) {
    console[x(326)](x(341));
    return;
  }
  const n = new Zt(t);
  return Vn(t, n, e), n;
}
function w0(t, e) {
  return t = t - 323, fe()[t];
}
function cc(t, e = R()) {
  const x = w0;
  if (!On(t, e)) {
    const n = Wr(t, e);
    B(e)[x(337)][x(331)](n);
  }
  return S0(t, e);
}
function Br(t, e = R()) {
  return S0(t, e);
}
function jr(t, e = R()) {
  var s;
  const x = w0, n = Br(t, e);
  if (!n) return;
  B(e)[x(337)].remove(n), (s = D0[x(336)](e)) == null || s[x(329)](t);
}
function oc(t = R()) {
  const e = w0, x = D0[e(336)](t);
  x && Array.from(x.values()).forEach((n) => {
    const a = e;
    n.entities[a(335)]();
  });
}
function fc(t) {
  D0[w0(329)](t);
}
function cx(t, e = R()) {
  var n;
  const x = w0;
  (n = S0(t, e)) == null || n[x(325)].removeAll();
}
function ox(t, e = !1, x) {
  let n;
  S0(t) ? n = S0(t) : n = new Zt(t);
  const a = Rn(t, n);
  return e && a(x), { source: n, mount: a };
}
function uc(t, e = !1) {
  let x;
  S0(t) ? x = S0(t) : x = new ln(t);
  const n = Rn(t, x);
  return e && n(), { source: x, mount: n };
}
function Rn(t, e) {
  return function(x = R()) {
    C0((n) => {
      const a = w0;
      On(t, x) || (n[a(337)].add(e), Vn(t, e, x));
    }, { viewerName: x });
  };
}
function fe() {
  const t = ["323890AXUXwR", "416801hEiOTj", "entities", "warn", "95218JhjXkh", "10Tbvsma", "delete", "40216022WTNOLW", "add", "200APVdLy", "set", "9180UJSwjQ", "removeAll", "get", "dataSources", "27ehNOwO", "has", "9373794zjWmQA", "请输入datasource 名称", "10971LDUVtd", "629088nAiDIM"];
  return fe = function() {
    return t;
  }, fe();
}
(function(t, e) {
  const x = f0, n = t();
  for (; ; )
    try {
      if (parseInt(x(295)) / 1 + -parseInt(x(270)) / 2 * (-parseInt(x(289)) / 3) + parseInt(x(302)) / 4 * (-parseInt(x(277)) / 5) + parseInt(x(299)) / 6 + -parseInt(x(309)) / 7 * (parseInt(x(274)) / 8) + -parseInt(x(303)) / 9 + parseInt(x(305)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ue, 420531);
const zt = /* @__PURE__ */ new Map();
function Gn(t, e, x = R()) {
  var a;
  const n = f0;
  !k0(x) && (zt[n(293)](x, /* @__PURE__ */ new Map()), Vx(() => zt[n(276)](x), { viewerName: x })), (a = k0(x)) == null || a[n(293)](t, e);
}
function Hr(t = R()) {
  var x;
  const e = f0;
  (x = k0(t)) == null || x[e(297)]();
}
function lc(t, e = R()) {
  var n;
  const x = f0;
  (n = k0(e)) == null || n[x(276)](t);
}
function k0(t = R()) {
  return zt[f0(281)](t);
}
function f0(t, e) {
  return t = t - 268, ue()[t];
}
function Ur(t, e, x = R()) {
  const n = f0, a = B(x);
  if (_2(t, x)) return zn(t), !1;
  const s = a[n(292)][n(306)][n(278)](e);
  Gn(t, { imagery: e, imageLayer: s });
}
function dc(t, e, x = R()) {
  const n = f0, a = B(x);
  if (_2(t, x)) return !1;
  Yr(x);
  const s = a[n(292)][n(306)][n(278)](e);
  Gn(t, { imagery: e, imageLayer: s });
}
function Yr(t) {
  const e = f0;
  B(t).scene[e(306)][e(282)](), Hr(t);
}
function pc(t) {
  const e = f0, x = { proxy: new Va(e(304)), parameters: { service: e(301), version: "1.3.0", transparent: !0, format: e(307) }, ...t };
  return new Oa(x);
}
function ue() {
  const t = ["649680KHMEJE", "EPSG:4326:3", "delete", "662785ImjZMG", "addImageryProvider", "EPSG:4326:0", "EPSG:4326:10", "get", "removeAll", "EPSG:4326:11", "EPSG:4326:13", "EPSG:4326:2", "EPSG:4326", "EPSG:4326:17", "EPSG:4326:1", "3ovhXjr", "EPSG:4326:7", "EPSG:4326:8", "scene", "set", "imageryProvider", "93459BlGoUy", "show", "clear", "EPSG:4326:14", "1929420YxYgCQ", "imageLayer", "WMS", "12MydtIv", "1139607EjtxAO", "/proxy/", "8472190XPOQzr", "imageryLayers", "image/png", "EPSG:4326:21", "70ntPoNq", "EPSG:4326:15", "EPSG:4326:19", "989354TLqnfm", "EPSG:4326:5", "EPSG:4326:9", "EPSG:4326:6"];
  return ue = function() {
    return t;
  }, ue();
}
function $r(t) {
  const e = f0;
  return new Ra({ tileMatrixLabels: [e(279), e(288), e(285), e(275), "EPSG:4326:4", e(271), e(273), e(290), e(291), e(272), e(280), e(283), "EPSG:4326:12", e(284), e(298), e(268), "EPSG:4326:16", e(287), "EPSG:4326:18", e(269), "EPSG:4326:20", e(308)], format: e(307), tileMatrixSetID: e(286), ...t });
}
function _2(t, e = R()) {
  var x;
  return (x = k0(e)) == null ? void 0 : x.has(t);
}
function _c(t, e = R()) {
  var n;
  const x = f0;
  return (n = k0(e)) == null ? void 0 : n[x(281)](t);
}
const Jr = Fn(!1), zn = Fn(!0);
function Kr(t, e = R()) {
  var a;
  const x = f0, n = (a = k0(e)) == null ? void 0 : a[x(281)](t);
  return n == null ? void 0 : n.imageLayer[x(296)];
}
function Fn(t) {
  return function(e, x = R()) {
    var s;
    const n = f0, a = (s = k0(x)) == null ? void 0 : s[n(281)](e);
    a != null && a[n(300)] && (a.imageLayer.show = t, a[n(300)][n(294)] && (a[n(300)].imageryProvider[n(296)] = t));
  };
}
function hc(t = R()) {
  return k0(t);
}
(function(t, e) {
  const x = fx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(308)) / 1 * (parseInt(x(317)) / 2) + parseInt(x(305)) / 3 * (parseInt(x(314)) / 4) + parseInt(x(310)) / 5 * (parseInt(x(312)) / 6) + -parseInt(x(323)) / 7 + -parseInt(x(318)) / 8 * (parseInt(x(306)) / 9) + parseInt(x(319)) / 10 * (-parseInt(x(307)) / 11) + parseInt(x(304)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(le, 564603);
async function Xr(t, e) {
  const x = fx;
  await y2();
  const n = B(e), { url: a, ...s } = t;
  try {
    n.terrainProvider = await Ga[x(309)](a, s);
  } catch (r) {
    console[x(324)](x(315), a, r);
  }
}
function fx(t, e) {
  return t = t - 303, le()[t];
}
function bc(t) {
  const e = fx, x = B(t);
  x[e(303)] = new dn();
}
function mc(t) {
  const e = fx;
  return !(B(t)[e(303)] instanceof dn);
}
function Ic(t) {
  Xr({ url: v0[fx(313)] }, t);
}
function le() {
  const t = ["39ucmoFb", "46242scuYDR", "1067KnOlwD", "36YWpbDu", "fromUrl", "3580115jXhqTy", "_group", "6CvVEAL", "defaultTerrainUrl", "31412LwoOoF", "[addTerrain] 地形加载失败:", "image/png", "25238oMhKkL", "136KfgWUr", "109370TUvZCV", "fromDegrees", "global_chart", "/vector/geoserver/gwc/service/wmts", "3523926ADNWpL", "error", "terrainProvider", "22229136zTqncf"];
  return le = function() {
    return t;
  }, le();
}
function gc() {
  const t = fx, e = t(321);
  if (_2(e)) {
    if (Kr(e)) {
      Jr(e);
      return;
    }
    zn(e);
  }
  const x = [-179.9999971999999, 179.9999971999999, -61.7333333, 78.3666667], n = Ex[t(320)](x[0], x[2], x[1], x[3]), a = $r({ url: t(322), layer: e + t(311), tilingScheme: new Qt(), format: t(316), rectangle: n, style: "default" });
  Ur(e, a);
}
const Wn = vt;
function de() {
  const t = ["10MgLays", "add", "COLUMBUS_VIEW", "1308832UShGrs", "1293798iAKWyB", "389853bsrthf", "SCENE2D", "mode", "scene", "40hCpBbA", "forEach", "15770430vDrQZr", "set", "2206692HVRMHy", "has", "2130640JpKylk", "1777488RKSXLJ", "viewerName", "get"];
  return de = function() {
    return t;
  }, de();
}
(function(t, e) {
  const x = vt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(282)) / 1 + parseInt(x(293)) / 2 + -parseInt(x(281)) / 3 + parseInt(x(292)) / 4 + -parseInt(x(296)) / 5 * (parseInt(x(290)) / 6) + -parseInt(x(280)) / 7 * (parseInt(x(286)) / 8) + parseInt(x(288)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(de, 682111);
function vt(t, e) {
  return t = t - 280, de()[t];
}
const Yx = /* @__PURE__ */ new WeakMap(), yc = h2(_0[Wn(283)]), vc = h2(_0.SCENE3D), wc = h2(_0[Wn(298)]);
function h2(t) {
  return function(e) {
    var a;
    const x = vt, n = B(e);
    n[x(285)][x(284)] = t, (a = Yx.get(n)) == null || a[x(287)]((s) => {
      s == null || s(t);
    });
  };
}
function Cc(t, e) {
  y2().then(() => {
    var a;
    const x = vt, n = B(e == null ? void 0 : e[x(294)]);
    !Yx[x(291)](n) && Yx[x(289)](n, /* @__PURE__ */ new Set()), (a = Yx[x(295)](n)) == null || a[x(297)](t);
  });
}
(function(t, e) {
  const x = wt, n = t();
  for (; ; )
    try {
      if (-parseInt(x(458)) / 1 * (parseInt(x(441)) / 2) + -parseInt(x(439)) / 3 + -parseInt(x(449)) / 4 * (parseInt(x(461)) / 5) + parseInt(x(471)) / 6 + parseInt(x(442)) / 7 * (-parseInt(x(453)) / 8) + -parseInt(x(476)) / 9 + parseInt(x(477)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pe, 312785);
function pe() {
  const t = [" like '%", "280428yQFJDg", "json", "load", "features", "get", "2336715DQjNoS", "22636720IZMgfW", "charts", "add", "dataSources", "set", "1456050PzXdrl", "application/json", "106TmSbfW", "188657kwizze", "1.0.0", "remove", "RHUMB", "resolve", "entities", "catch", "1976796McInxT", "/ows?service=WFS", "positions", "forEach", "176VDsVMA", "maxFeatures", "has", "GetFeature", "cql_filter", "3123EGisKm", "navigational_charts", "reverse", "5DhwVQt", "TRANSPARENT", "RED", "then", "hierarchy", "polygon", "reject", "getValue", "polyline"];
  return pe = function() {
    return t;
  }, pe();
}
const vx = /* @__PURE__ */ new Map();
function qr(t) {
  const e = wt, { workspace: x, layerName: n, searchField: a, searchValue: s, maxFeatures: r = 50 } = t, i = { version: e(443), request: e(456), outputFormat: e(440), typeName: x + ":" + n };
  r && (i[e(454)] = r), a && (i[e(457)] = encodeURIComponent(a + e(470) + s + "%'"));
  let c = "";
  Object.keys(i)[e(452)]((u) => {
    c += "&" + u + "=" + i[u];
  });
  const o = "/vector/geoserver/" + x + e(450) + c;
  return fetch(o).then((u) => u[e(472)]())[e(464)]((u) => Promise[e(446)](u))[e(448)]((u) => Promise[e(467)](u));
}
async function Sc(t, e = R()) {
  const x = wt;
  if (vx[x(455)](e)) return;
  const n = await qr({ workspace: x(435), layerName: x(459) });
  n[x(474)] = n[x(474)][x(460)]();
  const { clampToGround: a = !0, color: s = F[x(463)], width: r = 2 } = t ?? {}, i = await za[x(473)](n, { clampToGround: a, fill: F[x(462)], stroke: s, strokeWidth: r });
  return a && i[x(447)].values[x(452)]((o) => {
    var l;
    const u = x;
    if (o[u(466)]) {
      const _ = (l = o[u(466)][u(465)]) == null ? void 0 : l[u(468)](ve()), f = _[u(451)];
      o[u(469)] = new Fa({ positions: [...f, f[0]], clampToGround: a, material: s, width: r, arcType: Wa[u(445)] });
    }
  }), B(e)[x(437)][x(436)](i), vx[x(438)](e, i), i;
}
function wt(t, e) {
  return t = t - 435, pe()[t];
}
function Ec(t = R()) {
  const e = wt, x = B(t);
  if (vx[e(455)](t)) {
    const n = vx[e(475)](t);
    n == null || n[e(447)].removeAll(), x[e(437)][e(444)](n, !0), vx.delete(t);
  }
}
const Qr = Bn;
(function(t, e) {
  const x = Bn, n = t();
  for (; ; )
    try {
      if (parseInt(x(388)) / 1 + parseInt(x(392)) / 2 + -parseInt(x(393)) / 3 * (parseInt(x(387)) / 4) + -parseInt(x(391)) / 5 + parseInt(x(384)) / 6 + parseInt(x(389)) / 7 + -parseInt(x(385)) / 8 * (parseInt(x(390)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_e, 393971);
function _e() {
  const t = ["3ULuXOS", "3839016oglbNf", "963912bhGAib", "scene", "1411268xgUXPY", "473145jdjOLI", "12075kQeIFs", "72yPhrIn", "678950ozhSEU", "1463568CNpjpB"];
  return _e = function() {
    return t;
  }, _e();
}
function Bn(t, e) {
  return t = t - 384, _e()[t];
}
const Ct = Nx(Qr(386)), jn = b2;
(function(t, e) {
  const x = b2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(126)) / 1 * (-parseInt(x(132)) / 2) + -parseInt(x(130)) / 3 * (-parseInt(x(121)) / 4) + parseInt(x(136)) / 5 + parseInt(x(123)) / 6 + -parseInt(x(124)) / 7 + parseInt(x(135)) / 8 + -parseInt(x(129)) / 9 * (parseInt(x(133)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(he, 708333);
const Mc = Nn(jn(134)), Tc = Nn(jn(141));
let rx;
function Pc(t) {
  const e = B();
  rx = kn(Zr(e, t));
}
function b2(t, e) {
  return t = t - 120, he()[t];
}
function Dc() {
  rx && (rx == null || rx(), rx = void 0);
}
function Zr(t, e) {
  return function(x, n) {
    var u, l;
    const a = b2;
    if (!(e != null && e[a(120)]) || !e[a(128)]) return;
    const s = (u = e[a(120)]) == null ? void 0 : u.getValue(n), r = (l = e[a(128)]) == null ? void 0 : l.getValue(n), i = bx[a(127)][a(125)](s), c = bx[a(138)][a(131)](i, r), o = bx.Transforms[a(122)](c);
    o.heading += bx[a(137)].PI_OVER_TWO, e.show = !1, t[a(140)][a(139)]({ destination: r, orientation: o });
  };
}
function he() {
  const t = ["trackedEntity", "orientation", "4kFvDHZ", "fixedFrameToHeadingPitchRoll", "4783014ZxNzPC", "9763439lxYZno", "fromQuaternion", "17038vqfbnP", "Matrix3", "position", "243pAHDPO", "2516901qDXCTm", "fromRotationTranslation", "22sNUisy", "510130xwQgBi", "selectedEntity", "10641000TKLInw", "1633910cwUDkO", "Math", "Matrix4", "setView", "camera"];
  return he = function() {
    return t;
  }, he();
}
(function(t, e) {
  const x = Hn, n = t();
  for (; ; )
    try {
      if (-parseInt(x(306)) / 1 * (-parseInt(x(311)) / 2) + parseInt(x(308)) / 3 * (-parseInt(x(317)) / 4) + -parseInt(x(304)) / 5 + parseInt(x(303)) / 6 * (parseInt(x(305)) / 7) + -parseInt(x(313)) / 8 + parseInt(x(316)) / 9 + parseInt(x(312)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(be, 403318);
function be() {
  const t = ["7dlpJkE", "558517mFJSaY", "tiltEventTypes", "3jHKKga", "PINCH", "RIGHT_DRAG", "2owDKuR", "3262130YgzbNi", "4267456TWYova", "scene", "WHEEL", "2679084FDPOIW", "2860816vSPHAU", "translateEventTypes", "rotateEventTypes", "3836310HTJGvl", "849185JsvDuj"];
  return be = function() {
    return t;
  }, be();
}
function Hn(t, e) {
  return t = t - 303, be()[t];
}
function xs(t) {
  const e = Hn, x = t[e(314)].screenSpaceCameraController;
  x[e(319)] = [tx[e(310)], tx.LEFT_DRAG], x.zoomEventTypes = [tx[e(315)], tx[e(309)]], x[e(318)] = tx[e(310)], x[e(307)] = [], x[e(307)] = [{ eventType: tx.RIGHT_DRAG }];
}
const Un = St;
(function(t, e) {
  const x = St, n = t();
  for (; ; )
    try {
      if (-parseInt(x(343)) / 1 * (parseInt(x(346)) / 2) + parseInt(x(345)) / 3 * (parseInt(x(349)) / 4) + -parseInt(x(353)) / 5 + -parseInt(x(344)) / 6 * (parseInt(x(351)) / 7) + -parseInt(x(347)) / 8 + -parseInt(x(356)) / 9 + parseInt(x(354)) / 10 * (parseInt(x(341)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(me, 733583);
function St(t, e) {
  return t = t - 341, me()[t];
}
function kc(t, e) {
  const x = St, { west: n, south: a, east: s, north: r } = t;
  y2()[x(355)](() => {
    var c;
    const i = x;
    (c = X0(e)) == null || c[i(342)]({ destination: Ex[i(348)](n, a, s, r) });
  });
}
function me() {
  const t = ["150AIIsUb", "then", "11798910nnmYJC", "2250908hXlNIi", "flyTo", "734389oAHrwr", "3606utqLtw", "393tqPcHz", "2TkBzRq", "890944cCPVTm", "fromDegrees", "22548NgZwVH", "camera", "7294mvBsZw", "DEFAULT_VIEW_RECTANGLE", "1456475SAzImE"];
  return me = function() {
    return t;
  }, me();
}
function Ac(t, e) {
  const x = St;
  X0(e)[x(342)](t);
}
const X0 = Nx(Un(350));
function Yn(t) {
  return function(e) {
    return X0(e)[t];
  };
}
function es(t) {
  const e = Un, { west: x, south: n, east: a, north: s } = t;
  Ba[e(352)] = Ex[e(348)](x, n, a, s);
}
const Ox = Ie;
(function(t, e) {
  const x = Ie, n = t();
  for (; ; )
    try {
      if (-parseInt(x(149)) / 1 * (parseInt(x(172)) / 2) + -parseInt(x(159)) / 3 * (-parseInt(x(164)) / 4) + parseInt(x(165)) / 5 * (parseInt(x(156)) / 6) + -parseInt(x(157)) / 7 + -parseInt(x(169)) / 8 * (parseInt(x(168)) / 9) + parseInt(x(171)) / 10 * (-parseInt(x(161)) / 11) + parseInt(x(146)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ge, 454537);
function Ie(t, e) {
  return t = t - 146, ge()[t];
}
function Lc(t, e = R()) {
  return C0(() => {
    const x = Ie;
    X0(e).changed[x(160)](t);
  }), () => {
    const x = Ie;
    X0(e)[x(154)][x(148)](t);
  };
}
const $n = Yn(Ox(147)), Nc = Gs($n, Ox(170));
function Vc(t, e) {
  const x = Ox;
  Ct(e).mode === _0[x(166)] && X0(e)[x(162)](t);
}
const Oc = Yn(Ox(163));
function ge() {
  const t = ["5467665EJITtw", "setView", "9kKFhgE", "addEventListener", "4032809FMcled", "zoomIn", "position", "1080708GaWBhp", "5npjaEq", "SCENE2D", "latitude", "3292479exYFIT", "8dGiFdV", "height", "10tvJcoo", "486cHDduc", "15189768BpJJoT", "positionCartographic", "removeEventListener", "3004cYriUa", "maximumRadius", "longitude", "toDegrees", "WGS84", "changed", "fromDegrees", "3730254JeQZsj"];
  return ge = function() {
    return t;
  }, ge();
}
function Jn(t, e) {
  const x = Ox, n = Jx[x(153)][x(150)] * 10 / t, a = $n(e), s = o0[x(152)](a[x(151)]), r = o0.toDegrees(a[x(167)]);
  X0(e)[x(158)]({ destination: I[x(155)](s, r, n) });
}
var ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ns(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Kn = { exports: {} };
(function(t, e) {
  (function(x, n) {
    t.exports = n();
  })(ts, function() {
    var x = 1e3, n = 6e4, a = 36e5, s = "millisecond", r = "second", i = "minute", c = "hour", o = "day", u = "week", l = "month", _ = "quarter", f = "year", d = "date", p = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, E = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(w) {
      var m = ["th", "st", "nd", "rd"], b = w % 100;
      return "[" + w + (m[(b - 20) % 10] || m[b] || m[0]) + "]";
    } }, T = function(w, m, b) {
      var S = String(w);
      return !S || S.length >= m ? w : "" + Array(m + 1 - S.length).join(b) + w;
    }, N = { s: T, z: function(w) {
      var m = -w.utcOffset(), b = Math.abs(m), S = Math.floor(b / 60), g = b % 60;
      return (m <= 0 ? "+" : "-") + T(S, 2, "0") + ":" + T(g, 2, "0");
    }, m: function w(m, b) {
      if (m.date() < b.date()) return -w(b, m);
      var S = 12 * (b.year() - m.year()) + (b.month() - m.month()), g = m.clone().add(S, l), P = b - g < 0, D = m.clone().add(S + (P ? -1 : 1), l);
      return +(-(S + (b - g) / (P ? g - D : D - g)) || 0);
    }, a: function(w) {
      return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
    }, p: function(w) {
      return { M: l, y: f, w: u, d: o, D: d, h: c, m: i, s: r, ms: s, Q: _ }[w] || String(w || "").toLowerCase().replace(/s$/, "");
    }, u: function(w) {
      return w === void 0;
    } }, k = "en", A = {};
    A[k] = E;
    var W = "$isDayjsObject", z = function(w) {
      return w instanceof j || !(!w || !w[W]);
    }, L = function w(m, b, S) {
      var g;
      if (!m) return k;
      if (typeof m == "string") {
        var P = m.toLowerCase();
        A[P] && (g = P), b && (A[P] = b, g = P);
        var D = m.split("-");
        if (!g && D.length > 1) return w(D[0]);
      } else {
        var H = m.name;
        A[H] = m, g = H;
      }
      return !S && g && (k = g), g || !S && k;
    }, M = function(w, m) {
      if (z(w)) return w.clone();
      var b = typeof m == "object" ? m : {};
      return b.date = w, b.args = arguments, new j(b);
    }, C = N;
    C.l = L, C.i = z, C.w = function(w, m) {
      return M(w, { locale: m.$L, utc: m.$u, x: m.$x, $offset: m.$offset });
    };
    var j = function() {
      function w(b) {
        this.$L = L(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[W] = !0;
      }
      var m = w.prototype;
      return m.parse = function(b) {
        this.$d = function(S) {
          var g = S.date, P = S.utc;
          if (g === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(g)) return /* @__PURE__ */ new Date();
          if (g instanceof Date) return new Date(g);
          if (typeof g == "string" && !/Z$/i.test(g)) {
            var D = g.match(h);
            if (D) {
              var H = D[2] - 1 || 0, X = (D[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(D[1], H, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, X)) : new Date(D[1], H, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, X);
            }
          }
          return new Date(g);
        }(b), this.init();
      }, m.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, m.$utils = function() {
        return C;
      }, m.isValid = function() {
        return this.$d.toString() !== p;
      }, m.isSame = function(b, S) {
        var g = M(b);
        return this.startOf(S) <= g && g <= this.endOf(S);
      }, m.isAfter = function(b, S) {
        return M(b) < this.startOf(S);
      }, m.isBefore = function(b, S) {
        return this.endOf(S) < M(b);
      }, m.$g = function(b, S, g) {
        return C.u(b) ? this[S] : this.set(g, b);
      }, m.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function() {
        return this.$d.getTime();
      }, m.startOf = function(b, S) {
        var g = this, P = !!C.u(S) || S, D = C.p(b), H = function(j0, s0) {
          var V0 = C.w(g.$u ? Date.UTC(g.$y, s0, j0) : new Date(g.$y, s0, j0), g);
          return P ? V0 : V0.endOf(o);
        }, X = function(j0, s0) {
          return C.w(g.toDate()[j0].apply(g.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(s0)), g);
        }, e0 = this.$W, n0 = this.$M, u0 = this.$D, ex = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case f:
            return P ? H(1, 0) : H(31, 11);
          case l:
            return P ? H(1, n0) : H(0, n0 + 1);
          case u:
            var B0 = this.$locale().weekStart || 0, dx = (e0 < B0 ? e0 + 7 : e0) - B0;
            return H(P ? u0 - dx : u0 + (6 - dx), n0);
          case o:
          case d:
            return X(ex + "Hours", 0);
          case c:
            return X(ex + "Minutes", 1);
          case i:
            return X(ex + "Seconds", 2);
          case r:
            return X(ex + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function(b) {
        return this.startOf(b, !1);
      }, m.$set = function(b, S) {
        var g, P = C.p(b), D = "set" + (this.$u ? "UTC" : ""), H = (g = {}, g[o] = D + "Date", g[d] = D + "Date", g[l] = D + "Month", g[f] = D + "FullYear", g[c] = D + "Hours", g[i] = D + "Minutes", g[r] = D + "Seconds", g[s] = D + "Milliseconds", g)[P], X = P === o ? this.$D + (S - this.$W) : S;
        if (P === l || P === f) {
          var e0 = this.clone().set(d, 1);
          e0.$d[H](X), e0.init(), this.$d = e0.set(d, Math.min(this.$D, e0.daysInMonth())).$d;
        } else H && this.$d[H](X);
        return this.init(), this;
      }, m.set = function(b, S) {
        return this.clone().$set(b, S);
      }, m.get = function(b) {
        return this[C.p(b)]();
      }, m.add = function(b, S) {
        var g, P = this;
        b = Number(b);
        var D = C.p(S), H = function(n0) {
          var u0 = M(P);
          return C.w(u0.date(u0.date() + Math.round(n0 * b)), P);
        };
        if (D === l) return this.set(l, this.$M + b);
        if (D === f) return this.set(f, this.$y + b);
        if (D === o) return H(1);
        if (D === u) return H(7);
        var X = (g = {}, g[i] = n, g[c] = a, g[r] = x, g)[D] || 1, e0 = this.$d.getTime() + b * X;
        return C.w(e0, this);
      }, m.subtract = function(b, S) {
        return this.add(-1 * b, S);
      }, m.format = function(b) {
        var S = this, g = this.$locale();
        if (!this.isValid()) return g.invalidDate || p;
        var P = b || "YYYY-MM-DDTHH:mm:ssZ", D = C.z(this), H = this.$H, X = this.$m, e0 = this.$M, n0 = g.weekdays, u0 = g.months, ex = g.meridiem, B0 = function(s0, V0, px, Bx) {
          return s0 && (s0[V0] || s0(S, P)) || px[V0].slice(0, Bx);
        }, dx = function(s0) {
          return C.s(H % 12 || 12, s0, "0");
        }, j0 = ex || function(s0, V0, px) {
          var Bx = s0 < 12 ? "AM" : "PM";
          return px ? Bx.toLowerCase() : Bx;
        };
        return P.replace(v, function(s0, V0) {
          return V0 || function(px) {
            switch (px) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return C.s(S.$y, 4, "0");
              case "M":
                return e0 + 1;
              case "MM":
                return C.s(e0 + 1, 2, "0");
              case "MMM":
                return B0(g.monthsShort, e0, u0, 3);
              case "MMMM":
                return B0(u0, e0);
              case "D":
                return S.$D;
              case "DD":
                return C.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return B0(g.weekdaysMin, S.$W, n0, 2);
              case "ddd":
                return B0(g.weekdaysShort, S.$W, n0, 3);
              case "dddd":
                return n0[S.$W];
              case "H":
                return String(H);
              case "HH":
                return C.s(H, 2, "0");
              case "h":
                return dx(1);
              case "hh":
                return dx(2);
              case "a":
                return j0(H, X, !0);
              case "A":
                return j0(H, X, !1);
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
                return D;
            }
            return null;
          }(s0) || D.replace(":", "");
        });
      }, m.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function(b, S, g) {
        var P, D = this, H = C.p(S), X = M(b), e0 = (X.utcOffset() - this.utcOffset()) * n, n0 = this - X, u0 = function() {
          return C.m(D, X);
        };
        switch (H) {
          case f:
            P = u0() / 12;
            break;
          case l:
            P = u0();
            break;
          case _:
            P = u0() / 3;
            break;
          case u:
            P = (n0 - e0) / 6048e5;
            break;
          case o:
            P = (n0 - e0) / 864e5;
            break;
          case c:
            P = n0 / a;
            break;
          case i:
            P = n0 / n;
            break;
          case r:
            P = n0 / x;
            break;
          default:
            P = n0;
        }
        return g ? P : C.a(P);
      }, m.daysInMonth = function() {
        return this.endOf(l).$D;
      }, m.$locale = function() {
        return A[this.$L];
      }, m.locale = function(b, S) {
        if (!b) return this.$L;
        var g = this.clone(), P = L(b, S, !0);
        return P && (g.$L = P), g;
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
    }(), x0 = j.prototype;
    return M.prototype = x0, [["$ms", s], ["$s", r], ["$m", i], ["$H", c], ["$W", o], ["$M", l], ["$y", f], ["$D", d]].forEach(function(w) {
      x0[w[1]] = function(m) {
        return this.$g(m, w[0], w[1]);
      };
    }), M.extend = function(w, m) {
      return w.$i || (w(m, j, M), w.$i = !0), M;
    }, M.locale = L, M.isDayjs = z, M.unix = function(w) {
      return M(1e3 * w);
    }, M.en = A[k], M.Ls = A, M.p = {}, M;
  });
})(Kn);
var as = Kn.exports;
const Xn = /* @__PURE__ */ ns(as);
(function(t, e) {
  const x = Rx, n = t();
  for (; ; )
    try {
      if (parseInt(x(441)) / 1 * (parseInt(x(444)) / 2) + -parseInt(x(466)) / 3 * (-parseInt(x(458)) / 4) + -parseInt(x(465)) / 5 + parseInt(x(468)) / 6 + parseInt(x(457)) / 7 + -parseInt(x(445)) / 8 + -parseInt(x(467)) / 9 * (parseInt(x(451)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ye, 453206);
function Rx(t, e) {
  return t = t - 439, ye()[t];
}
const { synchronizeConfig: _x } = v0;
var rs = ((t) => {
  const e = Rx;
  return t[e(453)] = e(453), t.secondStep = e(461), t[e(440)] = "thirdStep", t;
})(rs || {});
const wx = /* @__PURE__ */ new Map();
function Rc(t, e = R()) {
  const x = Rx;
  nextTick()[x(448)](() => {
    var a;
    const n = x;
    !wx.has(e) && wx[n(462)](e, /* @__PURE__ */ new Set()), (a = wx[n(455)](e)) == null || a[n(447)](t);
  });
}
function ye() {
  const t = ["12QLmWgt", "6658328odyLwD", "logicTime", "add", "then", "minSpeed", "forEach", "10LoMAbN", "valueOf", "firstStep", "cacheSize", "get", "shift", "1902201PuiYyO", "50428JLbjQd", "length", "interval", "secondStep", "set", "push", "splice", "365225MMHEKv", "183XVgxWd", "506241rozHPP", "216966IRKbiP", "delete", "thirdStep", "56310NkuLHb", "slice", "actualSpeed"];
  return ye = function() {
    return t;
  }, ye();
}
function ss(t = R()) {
  var x;
  const e = Rx;
  (x = wx[e(455)](t)) == null || x[e(450)]((n) => n == null ? void 0 : n()), wx[e(439)](t);
}
function Gc(t = R()) {
  const e = Rx;
  let x = e(453);
  const n = [], a = _x[e(449)], s = _x.maxTime;
  let r;
  const i = (f) => f[e(443)], c = () => {
    const f = e;
    if (n.length === 0) return a;
    let d = 1, p;
    if (n.length === 1) {
      p = n[f(442)]()[0];
      const E = i(p);
      return Es(E) ? d : E / 2;
    }
    p = n[f(456)](), d = i(p);
    const h = is()[f(452)]() - Xn(p[f(446)])[f(452)](), v = Math.abs(h / 1e3);
    return h > s * 1e3 ? (z2(p.logicTime, t), d = a, d) : h < -s * 1e3 ? (d += v, d) : (d <= 0 && (d = a), d);
  }, o = (f) => {
    n[e(463)](f);
  }, u = () => {
    const f = e;
    r = window.setInterval(() => {
      F2(c(), t);
    }, _x[f(460)]);
  }, l = { [e(453)]: (f) => {
    const d = e;
    fs(f[d(446)], t), z2(f[d(446)], t), ps(t), o(f), ss(t), x = d(461);
  }, [e(461)]: (f) => {
    const d = e;
    if (o(f), n[d(459)] > _x[d(454)]) {
      const p = n[d(464)](0, 1)[0];
      F2(i(p), t), hs(!0), clearInterval(r), u(), x = d(440);
    }
  }, [e(440)]: (f) => {
    const d = e;
    o(f), !bs() && n[d(459)] > _x[d(454)] && n[d(456)]();
  } };
  return Vx(() => {
    clearInterval(r);
  }, { viewerName: t }), { run: (f) => {
    l[x](f);
  } };
}
const Z0 = Et;
(function(t, e) {
  const x = Et, n = t();
  for (; ; )
    try {
      if (parseInt(x(240)) / 1 * (parseInt(x(249)) / 2) + parseInt(x(254)) / 3 * (-parseInt(x(245)) / 4) + -parseInt(x(252)) / 5 * (-parseInt(x(236)) / 6) + parseInt(x(244)) / 7 + parseInt(x(251)) / 8 + parseInt(x(243)) / 9 * (-parseInt(x(237)) / 10) + -parseInt(x(246)) / 11 * (parseInt(x(238)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(we, 591546);
const ve = zx(Z0(247)), is = m2("currentTime"), cs = I2(Z0(247)), z2 = cs, zc = zx("startTime");
function we() {
  const t = ["4107dCKkkf", "knockout", "subscribe", "number", "1091310YTZYof", "10jurchI", "12nvBSIY", "9999/12/31 23:59:59", "404251LeZcYf", "clockViewModel", "stopTime", "8383347AlrOru", "5299294ceMmZn", "1160uPuytM", "5496821EPGArz", "currentTime", "toDate", "4MjxPnt", "fromDate", "1013328WZajQX", "20Tpxzsg", "startTime"];
  return we = function() {
    return t;
  }, we();
}
const Fc = m2(Z0(253)), os = I2("startTime"), fs = os, Wc = zx(Z0(242)), Bc = m2(Z0(242)), us = I2(Z0(242)), ls = us;
function ds() {
  return Z0(239);
}
function ps(t) {
  ls(ds(), t);
}
function m2(t) {
  return function(e) {
    return Xn(r0.toDate(Gx(e)[t]));
  };
}
function I2(t) {
  return function(e, x) {
    const n = Et;
    let a;
    typeof e == "string" || typeof e === n(235) ? a = r0[n(250)](new Date(e)) : e instanceof Date ? a = r0.fromDate(e) : a = e, Gx(x)[t] = a;
  };
}
function Et(t, e) {
  return t = t - 233, we()[t];
}
function jc(t, e = R()) {
  C0((x) => {
    const n = Et;
    bx[n(233)].getObservable(x[n(241)], n(247))[n(234)]((a) => {
      const s = n, r = r0[s(248)](a).getTime();
      t == null || t(r, a);
    });
  }, { viewerName: e });
}
const Mt = qn;
(function(t, e) {
  const x = qn, n = t();
  for (; ; )
    try {
      if (parseInt(x(169)) / 1 * (-parseInt(x(171)) / 2) + -parseInt(x(175)) / 3 * (parseInt(x(170)) / 4) + parseInt(x(172)) / 5 + parseInt(x(183)) / 6 + -parseInt(x(181)) / 7 * (-parseInt(x(182)) / 8) + parseInt(x(179)) / 9 * (parseInt(x(174)) / 10) + parseInt(x(180)) / 11 * (-parseInt(x(177)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ce, 286303);
function qn(t, e) {
  return t = t - 169, Ce()[t];
}
const Gx = Nx(Mt(176)), F2 = Qn(Mt(178));
function Ce() {
  const t = ["3266656pIiDFO", "2953122CGmJRw", "29kvnSrN", "1791212fSDnfz", "4904fslDyK", "1560050XJUPCu", "shouldAnimate", "397690HNowEG", "3tRZgSI", "clock", "10614516mzNhOv", "multiplier", "108FLWvmU", "11rddcFx", "7YDCRsD"];
  return Ce = function() {
    return t;
  }, Ce();
}
const _s = zx("multiplier"), Hc = _s, hs = Qn(Mt(173)), bs = zx(Mt(173));
function zx(t) {
  return function(e) {
    return Gx(e)[t];
  };
}
function Qn(t, e) {
  return function(x, n) {
    Gx(n)[t] = x ?? e;
  };
}
(function(t, e) {
  const x = ux, n = t();
  for (; ; )
    try {
      if (parseInt(x(124)) / 1 * (parseInt(x(118)) / 2) + -parseInt(x(125)) / 3 * (-parseInt(x(121)) / 4) + -parseInt(x(111)) / 5 + -parseInt(x(115)) / 6 * (-parseInt(x(110)) / 7) + parseInt(x(120)) / 8 + -parseInt(x(116)) / 9 * (-parseInt(x(109)) / 10) + -parseInt(x(112)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Se, 127781);
function Uc(t, e) {
  return Ft(e) ? C0((x) => {
    const n = ux;
    return x[n(114)][n(126)](t);
  }, { viewerName: R(e) }) : C0(() => e.add(t));
}
function Se() {
  const t = ["3862jsBXcd", "error", "1031128cEzoZZ", "12UDpTVp", "metaData", "properties", "63TfZrAT", "15027nxejIC", "add", "getById", "170HJzrxd", "1603VZZoQL", "1111785HUfUkP", "638660SqSXuz", "position", "entities", "648FBHHsA", "62415hsLPtz", "sourceName is Required"];
  return Se = function() {
    return t;
  }, Se();
}
function ms(t) {
  return t instanceof Zt;
}
function Is(t) {
  return t instanceof ln;
}
function Yc(t, e) {
  const x = ux;
  if (!e) return console[x(119)](x(117)), void 0;
  if (ms(e) || Is(e)) return e[x(114)][x(127)](t);
  const n = S0(e);
  if (n) return n.entities[x(127)](t);
}
function gs(t, e) {
  var n;
  return (n = t[ux(123)]) == null ? void 0 : n.getValue(ve(e));
}
function ys(t, e, x) {
  var n;
  return (n = gs(t, x)) == null ? void 0 : n[e];
}
function $c(t, e) {
  return ys(t, ux(122), e);
}
function Zn(t) {
  return t.position;
}
function ux(t, e) {
  return t = t - 109, Se()[t];
}
function vs(t) {
  return Zn(t);
}
function Jc(t) {
  return Zn(t);
}
function Kc(t, e) {
  const x = ux;
  t[x(113)] = e;
}
(function(t, e) {
  for (var x = xa, n = t(); ; )
    try {
      var a = parseInt(x(171)) / 1 * (-parseInt(x(166)) / 2) + parseInt(x(167)) / 3 * (-parseInt(x(169)) / 4) + parseInt(x(175)) / 5 + -parseInt(x(168)) / 6 + parseInt(x(172)) / 7 + -parseInt(x(170)) / 8 + parseInt(x(176)) / 9 * (parseInt(x(173)) / 10);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ee, 228253);
function Ee() {
  var t = ["6746210IUbrHo", "log", "1592455UJASHo", "9HvlpsF", "2PDGHaJ", "3XdFYRC", "2318406uHYWaE", "1465928dVcypn", "729968bhzRlz", "256182yVjvKn", "2348164xJpQDG"];
  return Ee = function() {
    return t;
  }, Ee();
}
function xa(t, e) {
  t = t - 166;
  var x = Ee(), n = x[t];
  return n;
}
function Xc() {
  var t = xa;
  console[t(174)](G0, ix);
}
function A0(t, e) {
  return t = t - 197, Me()[t];
}
(function(t, e) {
  const x = A0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(228)) / 1 * (-parseInt(x(199)) / 2) + parseInt(x(205)) / 3 * (parseInt(x(197)) / 4) + -parseInt(x(198)) / 5 * (parseInt(x(234)) / 6) + parseInt(x(221)) / 7 * (-parseInt(x(218)) / 8) + parseInt(x(230)) / 9 * (parseInt(x(201)) / 10) + parseInt(x(210)) / 11 + -parseInt(x(220)) / 12 * (parseInt(x(217)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Me, 354743);
var ws = ((t) => {
  const e = A0;
  return t[t[e(214)] = 0] = e(214), t[t[e(219)] = 1] = e(219), t[t.polygon = 2] = e(235), t[t[e(212)] = 3] = e(212), t[t.point = 4] = "point", t[t[e(200)] = 5] = e(200), t;
})(ws || {});
function qc() {
  const t = "web-drawPointAreaSourceName";
  let e;
  const x = (r) => {
    const i = A0, { source: c } = ox(t, !0);
    i0(i(223)), e = q0(({ position: o }) => {
      const u = i, l = F0(o[u(226)]);
      if (!l) return;
      const _ = v2(o[u(226)]);
      c[u(232)][u(207)]({ position: _, point: { pixelSize: 5, color: F[u(209)] } }), r == null || r({ type: 4, degrees: [l], cartesian: [_] }), e == null || e(), i0("");
    });
  }, n = () => {
    i0(""), e == null || e();
  }, a = () => {
    cx(t);
  };
  return { start: x, stop: n, clear: a, stopAndClear: () => {
    n(), a();
  } };
}
function Qc() {
  const t = "web-drawPolylineAreaSourceName";
  let e, x, n;
  const a = (c) => {
    const o = A0;
    i0(o(223));
    const { source: u } = ox(t, !0), l = [];
    e = q0(({ position: _ }) => {
      var v;
      const f = o, d = ra(_[f(226)]);
      if (!d) return;
      l.push(d);
      const p = I[f(204)](d[f(227)], d[f(215)], d[f(203)]);
      c({ timing: f(237), type: 5, degrees: [d], cartesian: [p] });
      const h = { position: p, point: { pixelSize: 5, color: F.RED } };
      if (n) {
        const E = (v = n[f(200)]) == null ? void 0 : v[f(206)], T = l[f(211)]((N) => I[f(204)](N[f(227)], N[f(215)], N[f(203)]));
        E[f(222)](T), u.entities[f(207)](h);
        return;
      }
      n = u.entities[f(207)]({ ...h, polyline: { positions: new Mx([p]), clampToGround: !0, material: F[f(236)] } });
    }), x = u2(() => {
      const _ = o;
      c({ timing: _(231), type: 5, degrees: [...l], cartesian: l.map((f) => I[_(204)](f[_(227)], f[_(215)], f[_(203)])) });
    });
  };
  t2(() => {
    x == null || x();
  });
  const s = () => {
    n = null, i0(""), e == null || e(), x == null || x();
  }, r = () => {
    cx(t);
  };
  return { start: a, clear: r, stop: s, stopAndClear: () => {
    s(), r();
  } };
}
function Me() {
  const t = ["entities", "length", "6SSEGIH", "polygon", "RED", "start", "4MRXQrA", "217290KNvliS", "2cOUKCJ", "polyline", "79630wAKFLv", "push", "height", "fromDegrees", "1906413NbsuYO", "positions", "add", "web-drawEllipsisAreaSourceName", "DODGERBLUE", "436524ueFcWg", "map", "ellipsis", "endPosition", "circle", "latitude", "midpoint", "1580995QkJCbD", "13808VUsFfg", "rectangle", "60VLAsBZ", "2681zktoKs", "setValue", "crosshair", "hierarchy", "getValue", "position", "longitude", "379028lzNjlR", "web-drawPolygonAreaSourceName", "693tHKtwa", "stop"];
  return Me = function() {
    return t;
  }, Me();
}
function Zc(t) {
  const e = "web-drawAreaSourceName", x = (c, o) => {
    const u = A0, { longitude: l, latitude: _ } = c, { longitude: f, latitude: d } = o, p = I[u(204)](f, _, 0), h = I[u(204)](l, d, 0);
    return { p3: p, p4: h };
  };
  let n;
  const a = (c) => {
    const o = A0, { source: u } = ox(e, !0);
    i0(o(223));
    let l = [];
    n = q0(({ position: _ }) => {
      const f = o, d = F0(_[f(226)]);
      if (!d) return;
      const { longitude: p, latitude: h, height: v } = d, E = I[f(204)](p, h, v);
      c == null || c({ timing: "start", type: 1, degrees: [{ longitude: p, latitude: h, height: v }], cartesian: [E] });
      const T = new Mx(new Kx([E])), N = new pn(E);
      u[f(232)][f(207)]({ position: N, polygon: { hierarchy: T, fill: !1, outline: !0, outlineWidth: 5, outlineColor: F[f(209)] } });
      const k = l2(({ position: W }) => {
        const z = f, L = F0(W.endPosition);
        if (!L) return;
        const { p3: M, p4: C } = x(d, L), j = I.fromDegrees(L[z(227)], L[z(215)], L[z(203)]);
        l = [E, M, j, C];
        const x0 = new Kx(l);
        N[z(222)](I[z(216)](E, j, new I())), T[z(222)](x0);
      }, { viewerName: t }), A = f2(() => {
        const W = f;
        c == null || c({ timing: W(231), type: 1, degrees: l[W(211)]((z) => aa(z)), cartesian: [...l] }), l.length = 0, k(), A();
      }, { viewerName: t });
    }, { viewerName: t });
  }, s = () => {
    i0(""), n == null || n();
  }, r = () => {
    cx(e);
  };
  return { start: a, stop: s, clear: r, stopAndClear: () => {
    s(), r();
  } };
}
function xo() {
  const t = A0, e = t(229);
  let x, n, a;
  const s = (o) => {
    const u = t;
    i0(u(223));
    const { source: l } = ox(e, !0), _ = [];
    x = q0(({ position: f }) => {
      var E;
      const d = u, p = ra(f[d(226)]);
      if (!p) return;
      _[d(202)](p);
      const h = I[d(204)](p[d(227)], p[d(215)], p[d(203)]);
      o({ timing: d(237), type: 2, degrees: [p], cartesian: [h] });
      const v = { position: h, point: { pixelSize: 5, color: F[d(236)] } };
      if (a) {
        const T = (E = a[d(235)]) == null ? void 0 : E[d(224)], N = _.map((k) => I[d(204)](k[d(227)], k[d(215)], k[d(203)]));
        T[d(222)](new Kx(N)), l[d(232)].add(v);
        return;
      }
      a = l[d(232)][d(207)]({ ...v, polygon: { hierarchy: new Mx(new Kx([h])), fill: !1, outline: !0, outlineWidth: 5, outlineColor: F.RED } });
    }), n = u2(() => {
      const f = u;
      o({ timing: f(231), type: 2, degrees: [..._], cartesian: _[f(211)]((d) => I[f(204)](d[f(227)], d[f(215)], d[f(203)])) }), _[f(233)] = 0, a = null;
    });
  };
  t2(() => {
    n == null || n();
  });
  const r = () => {
    a = null, i0(""), x == null || x(), n == null || n();
  }, i = () => {
    cx(e);
  };
  return { start: s, clear: i, stop: r, stopAndClear: () => {
    r(), i();
  } };
}
function eo() {
  const t = A0, e = t(208);
  let x;
  const n = ({ startPos: l, centerPos: _ }) => {
    const f = t, d = Pt(l, [_[f(227)], _.latitude]);
    return { majorAxisValue: d, minorAxisValue: d };
  }, a = ({ startPos: l, centerPos: _ }) => {
    const f = t, d = Pt(l, [_[f(227)], l[f(215)]]), p = Pt(l, [l[f(227)], _[f(215)]]);
    return { majorAxisValue: d, minorAxisValue: p };
  }, s = (l, { isCircle: _ = !1, source: f }) => {
    x = q0(({ position: d }) => {
      const p = A0, h = F0(d[p(226)]);
      if (!h) return;
      const { longitude: v, latitude: E, height: T } = h, N = I[p(204)](v, E, T);
      l({ timing: p(237), type: 0, degrees: [{ longitude: v, latitude: E, height: T }], cartesian: [N] });
      const k = new pn(N), A = new Mx(0), W = new Mx(0);
      f[p(232)].add({ position: k, ellipse: { semiMajorAxis: A, semiMinorAxis: W, fill: !1, outline: !0, outlineWidth: 10, outlineColor: F[p(209)] } });
      const z = l2(({ position: M }) => {
        const C = p, j = F0(M[C(213)]);
        if (!j) return;
        const x0 = Y2([h[C(227)], h[C(215)]], [j.longitude, j[C(215)]]), [w, m] = Wt(x0);
        k[C(222)](I[C(204)](w, m));
        const b = { startPos: h, centerPos: { longitude: w, latitude: m, height: 0 } };
        if (_) {
          const { majorAxisValue: P, minorAxisValue: D } = n(b);
          A[C(222)](P * 1e3), W.setValue(D * 1e3);
          return;
        }
        const { majorAxisValue: S, minorAxisValue: g } = a(b);
        A[C(222)](S * 1e3), W.setValue(g * 1e3);
      }), L = f2(({ position: M }) => {
        const C = p;
        z(), L();
        const j = F0(M.position);
        if (!j) return;
        const x0 = Y2([h.longitude, h.latitude], [j[C(227)], j[C(215)]]), [w, m] = Wt(x0), b = [I[C(204)](w, m, 0), I.fromDegrees(j.longitude, j[C(215)], j[C(203)])];
        l({ timing: C(231), type: 0, cartesian: b, degrees: [{ longitude: w, latitude: m, height: 0 }, j], majorAxis: A[C(225)](ve()), minorAxis: W[C(225)](ve()) });
      });
    });
  }, r = (l, _) => {
    s(l, { isCircle: !0, source: _ });
  }, i = (l) => {
    i0(t(223));
    const { source: f } = ox(e, !0);
    r(l, f);
  }, c = () => {
    i0(""), x == null || x();
  }, o = () => {
    cx(e);
  };
  return { start: i, stop: c, clear: o, stopAndClear: () => {
    c(), o();
  } };
}
const Cs = g2;
function g2(t, e) {
  return t = t - 456, Te()[t];
}
(function(t, e) {
  const x = g2, n = t();
  for (; ; )
    try {
      if (parseInt(x(472)) / 1 * (parseInt(x(459)) / 2) + -parseInt(x(466)) / 3 + parseInt(x(470)) / 4 * (-parseInt(x(468)) / 5) + -parseInt(x(463)) / 6 + -parseInt(x(456)) / 7 * (parseInt(x(465)) / 8) + -parseInt(x(457)) / 9 + -parseInt(x(474)) / 10 * (-parseInt(x(475)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Te, 860690);
function Te() {
  const t = ["fromDegrees", "2KjhcyF", "longitude", "latitude", `
坐标:`, "8621766xymnmO", "entities", "16qKQhZv", "4711548TmWPgJ", "add", "715dYcYjm", "webPlaceEntitySource", "47172IqxrkW", "BOTTOM", "1436323IEdNIO", "RED", "340mXWYTZ", "1663079iNyUbc", "2654330iAmEId", "2374227dLryXh"];
  return Te = function() {
    return t;
  }, Te();
}
const Tt = Cs(469);
function to() {
  const t = (a, s) => {
    const r = g2, { source: i } = ox(Tt, !0);
    i[r(464)][r(467)]({ position: I[r(458)](s[r(460)], s[r(461)], 0), label: { ...wr, verticalOrigin: on[r(471)], text: a + r(462) + s[r(460)] + "," + s.latitude + ",0" }, point: { pixelSize: 4, color: F[r(473)] } });
  }, e = () => {
    jr(Tt);
  }, x = () => {
    cx(Tt);
  }, n = kr(() => {
    e == null || e();
  }, { isEmpty: !0 });
  return t2(() => {
    e == null || e(), n == null || n();
  }), { create: t, clear: x, destroy: e };
}
function xx(t, e) {
  t = t - 171;
  var x = Pe(), n = x[t];
  return n;
}
(function(t, e) {
  for (var x = xx, n = t(); ; )
    try {
      var a = -parseInt(x(177)) / 1 * (parseInt(x(174)) / 2) + -parseInt(x(175)) / 3 + -parseInt(x(188)) / 4 + parseInt(x(178)) / 5 * (-parseInt(x(179)) / 6) + -parseInt(x(189)) / 7 + parseInt(x(173)) / 8 + -parseInt(x(183)) / 9 * (-parseInt(x(186)) / 10);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Pe, 874342);
function Pe() {
  var t = ["Set", "54713VjlvOd", "390cmubdL", "52098ZVxBOp", "toString", "call", "prototype", "2526264ZqolYT", "[object ", "Number", "100yxMYVB", "String", "4724156wpIKuM", "1131347cbeTyF", "Map", "Object", "4796984VtJwim", "6LXzgvr", "1044504ZQVIjC"];
  return Pe = function() {
    return t;
  }, Pe();
}
function no(t) {
  var e = xx;
  return lx(t, e(171));
}
function ao(t) {
  var e = xx;
  return lx(t, e(176));
}
function Ss(t) {
  var e = xx;
  return lx(t, e(172));
}
function W2(t) {
  return lx(t, "Array");
}
function Ft(t) {
  var e = xx;
  return lx(t, e(187));
}
function B2(t) {
  var e = xx;
  return lx(t, e(185));
}
function Es(t) {
  return t != null;
}
function lx(t, e) {
  var x = xx;
  return Object[x(182)][x(180)][x(181)](t) === x(184) + e + "]";
}
function De() {
  const t = ["90116CmoRRP", "20TqAtMu", "resolve", "63wbxgci", "14841444RtayXh", "610956hyYChh", "4535rWSGmW", "2004yIfdXD", "call", "327784dzKVrg", "7vMBSXN", "then", "316278KBGiio", "9mbBtfm", "2404006QlPUsS"];
  return De = function() {
    return t;
  }, De();
}
const ea = ta;
(function(t, e) {
  const x = ta, n = t();
  for (; ; )
    try {
      if (parseInt(x(246)) / 1 + parseInt(x(241)) / 2 * (-parseInt(x(239)) / 3) + parseInt(x(248)) / 4 * (parseInt(x(247)) / 5) + parseInt(x(238)) / 6 * (parseInt(x(251)) / 7) + -parseInt(x(250)) / 8 * (-parseInt(x(244)) / 9) + parseInt(x(242)) / 10 * (parseInt(x(240)) / 11) + -parseInt(x(245)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(De, 470018);
const j2 = Promise[ea(243)]();
function ta(t, e) {
  return t = t - 238, De()[t];
}
function y2(t) {
  const e = ea;
  return t ? j2[e(252)](() => t[e(249)](null, B())) : j2[e(252)](() => B());
}
const na = N0;
(function(t, e) {
  const x = N0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(449)) / 1 + parseInt(x(414)) / 2 + -parseInt(x(413)) / 3 + -parseInt(x(424)) / 4 + -parseInt(x(419)) / 5 * (-parseInt(x(432)) / 6) + parseInt(x(435)) / 7 + parseInt(x(408)) / 8 * (parseInt(x(437)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ke, 826002);
function aa(t, e) {
  const x = N0, n = B(e), a = n.scene[x(451)][x(420)], s = a[x(403)](t);
  let r = +o0[x(441)](s[x(452)])[x(434)](6), i = +o0[x(441)](s[x(406)])[x(434)](6), c = +s[x(447)].toFixed(6);
  return Number.isInteger(r) && (r = +r.toFixed(1)), Number[x(425)](i) && (i = +i[x(434)](1)), Number[x(425)](c) && (c = +c.toFixed(1)), { longitude: Number(r), latitude: Number(i), height: Number(c) };
}
function ro(t, e) {
  const x = N0, n = B(e), a = n[x(436)][x(451)].ellipsoid, s = a.cartesianToCartographic(t);
  let r = +o0[x(441)](s.longitude), i = +o0[x(441)](s[x(406)]), c = +s[x(447)];
  return Number[x(425)](r) && (r = +r), Number.isInteger(i) && (i = +i), Number[x(425)](c) && (c = +c), { longitude: Number(r), latitude: Number(i), height: Number(c) };
}
function v2(t, e) {
  const x = N0, n = B(e);
  let a = new $(t.x, t.y);
  return t instanceof MouseEvent && (a = new $(t[x(446)], t[x(415)])), n[x(426)][x(407)](a, n[x(436)][x(451)][x(420)]);
}
function F0(t, e) {
  const x = B(e), n = v2(t, x);
  if (n) return aa(n, x);
}
function ke() {
  const t = ["defs", "SCENE2D", "6DkvZwj", "mode", "toFixed", "413371pszgBQ", "scene", "31041hJgzwd", "groundCartesian", "COLUMBUS_VIEW", "fromElements", "toDegrees", "EPSG:4610", "cross", "wgs84ToWindowCoordinates", "rayPlane", "offsetX", "height", "floor", "882582SvRGyF", "normalize", "globe", "longitude", "surfaceDistance", "add", "fromPointNormal", "cartesianToCartographic", "EPSG:4326", "getPickRay", "latitude", "pickEllipsoid", "3176tXIhUN", "UNIT_X", "cartesian", "frameState", "fromCartesian", "807321rtTJXI", "834538OEgUnH", "offsetY", "projectVector", "subtract", "direction", "1364515gXtwQH", "ellipsoid", "+proj=longlat +datum=WGS84 +no_defs", "negate", "mapProjection", "563148pHDGQa", "isInteger", "camera", "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs", "project", "fromDegrees"];
  return ke = function() {
    return t;
  }, ke();
}
const ra = F0;
function so(t, e, x) {
  const n = N0, { longitude: a, latitude: s, height: r } = t, { longitude: i, latitude: c, height: o } = e, u = t0[n(429)](a, s, r), l = t0.fromDegrees(i, c, o), _ = Ct(x);
  return new x2(u, l, _[n(451)][n(420)])[n(400)];
}
function io(t, e, x) {
  const n = N0, a = t0[n(412)](t), s = t0[n(412)](e), r = Ct(x), i = new x2(a, s, r[n(451)].ellipsoid);
  return Math[n(448)](i[n(400)]) / 1e3;
}
function N0(t, e) {
  return t = t - 400, ke()[t];
}
function co(t) {
  const e = N0;
  return proj4.defs(e(404), e(421)), proj4[e(430)](e(442), e(427)), proj4(e(404), "EPSG:4610", [t[e(452)], t.latitude]);
}
const Ms = new _n();
function oo(t, e) {
  const x = N0;
  if (t.pickPositionSupported && t[x(433)] !== _0[x(431)]) return t.pickPosition(e);
  if (!t[x(451)]) return;
  const n = t[x(426)][x(405)](e, Ms), a = t.globe.pick(n, t);
  return a || t[x(426)][x(407)](e, t[x(451)][x(420)]);
}
const Ts = new I(), Ps = new $(), H2 = new I(), Ds = new _n(), U2 = new t0();
let nx = new I();
const ks = new hn(I[na(409)], 0), As = new I();
function fo(t, e, x) {
  const n = na, a = t[n(411)][n(423)].ellipsoid, s = x[n(438)];
  let r = x[n(410)].clone(), i = ks, c = As, o = s, u = c;
  if (t.mode === _0[n(439)]) {
    u = I.UNIT_X;
    const f = a[n(403)](s, U2);
    o = t[n(423)][n(428)](f, Ts), I[n(440)](o.z, o.x, o.y, o);
  }
  let l = I[n(443)](u, t.camera[n(418)], H2);
  l = I[n(443)](u, l, l), l = I[n(450)](l, l), i = hn[n(402)](o, l, i);
  const _ = t[n(426)].getPickRay(e, Ds);
  if (r = ja[n(445)](_, i, r), G(r)) {
    if (t[n(433)] === _0.COLUMBUS_VIEW) {
      r = I[n(440)](r.y, r.z, r.x, r);
      const f = t[n(423)].unproject(r, U2);
      r = a.cartographicToCartesian(f, r);
    }
    return Ha[n(444)](t, x[n(438)], Ps).y < e.y && (c = I[n(422)](c, H2)), nx = I[n(417)](r, s, nx), nx = I[n(416)](nx, c, nx), r = I[n(401)](s, nx, r), r;
  }
}
(function(t, e) {
  const x = Fx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(407)) / 1 * (-parseInt(x(420)) / 2) + -parseInt(x(421)) / 3 * (parseInt(x(412)) / 4) + -parseInt(x(414)) / 5 + parseInt(x(404)) / 6 * (parseInt(x(417)) / 7) + parseInt(x(415)) / 8 + parseInt(x(408)) / 9 * (parseInt(x(416)) / 10) + -parseInt(x(409)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ae, 263375);
function Ae() {
  const t = ["46036OpaYpr", "geometry", "1907555AkKYpy", "3821376xqfZfw", "2790xTadwe", "7ocxJbd", "isArray", "push", "11078zKeNgG", "87GziQqn", "1358166YOtFwR", "latitude", "longitude", "50KmAear", "9306siWDKQ", "3199042EeCLWg", "map", "floor"];
  return Ae = function() {
    return t;
  }, Ae();
}
function Le(t) {
  const e = Fx;
  return Array[e(418)](t) ? qx(t) : qx([t[e(406)], t[e(405)]]);
}
function Y2(t, e) {
  const x = qx(t), n = qx(e);
  return yr(x, n);
}
function Fx(t, e) {
  return t = t - 404, Ae()[t];
}
function uo(t) {
  return En(t);
}
function Pt(t, e, x) {
  const n = Le(t), a = Le(e);
  return vr(n, a, x);
}
function lo(t) {
  const e = Fx, x = t[e(410)]((a) => Le(a)), n = Ir(x);
  return gr(n);
}
function Wt(t) {
  return t[Fx(413)].coordinates;
}
function po(t) {
  const e = Fx, x = t[e(410)]((s) => [s[e(406)], s.latitude]);
  x[e(419)]([t[0].longitude, t[0][e(405)]]);
  const n = En([x]);
  return Math[e(411)](br(n)) / 1e6 ?? 0;
}
function _o(t) {
  const { origin: e, distance: x, bearing: n, options: a } = t, s = Le(e), r = mr(s, x, n, a);
  return Wt(r);
}
function Ne() {
  const t = ["addEventListener", "6FqKzNQ", "WGS84", "_forwardExtrapolationType", "forwardExtrapolationType", "4EHqzCX", "5735737gdPSvq", "1116207Cxtygi", "41080bgETps", "isConstant", "definitionChanged", "position", "41JfclUV", "20WxaeLu", "8147000mfJAhY", "fromRotationMatrix", "raiseEvent", "_ellipsoid", "18979818Wsphoi", "508565kIXqpp", "ellipsoid", "getValue", "525273gPodli", "_velocityVectorProperty"];
  return Ne = function() {
    return t;
  }, Ne();
}
function sa(t, e) {
  return t = t - 426, Ne()[t];
}
const d0 = sa;
(function(t, e) {
  const x = sa, n = t();
  for (; ; )
    try {
      if (parseInt(x(442)) / 1 * (parseInt(x(438)) / 2) + parseInt(x(428)) / 3 + -parseInt(x(435)) / 4 * (-parseInt(x(449)) / 5) + parseInt(x(431)) / 6 * (-parseInt(x(436)) / 7) + -parseInt(x(444)) / 8 + -parseInt(x(437)) / 9 * (parseInt(x(443)) / 10) + parseInt(x(448)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ne, 758570);
new I();
const $2 = new I(), J2 = new bn();
class ho {
  constructor(e, x = Jx[d0(432)]) {
    const n = d0;
    this[n(429)] = new Ua(e, !0), this.definitionChanged = new kx(), this[n(433)] = Ot.HOLD, this[n(429)][n(434)] = this[n(433)], this[n(447)] = x, this[n(429)].definitionChanged[n(430)](() => {
      const a = n;
      this[a(440)][a(446)](this);
    });
  }
  get isConstant() {
    const e = d0;
    return this._velocityVectorProperty[e(439)];
  }
  get position() {
    const e = d0;
    return this[e(429)][e(441)];
  }
  set position(e) {
    const x = d0;
    this[x(429)].position = e;
  }
  get [d0(426)]() {
    return this._ellipsoid;
  }
  set [d0(426)](e) {
    const x = d0;
    this[x(447)] !== e && (this[x(447)] = e, this[x(440)].raiseEvent(this));
  }
  get [d0(434)]() {
    return this._forwardExtrapolationType;
  }
  set [d0(434)](e) {
    const x = d0;
    this[x(433)] = e, this._velocityVectorProperty.forwardExtrapolationType = this._forwardExtrapolationType;
  }
  getValue(e, x) {
    const n = d0, a = this._velocityVectorProperty[n(427)](e, $2);
    if (G(a))
      return Ya.rotationMatrixFromPositionVelocity($2, a, this[n(447)], J2), $a[n(445)](J2, x);
  }
}
const U = w2;
(function(t, e) {
  const x = w2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(425)) / 1 * (parseInt(x(422)) / 2) + parseInt(x(439)) / 3 + parseInt(x(444)) / 4 * (parseInt(x(447)) / 5) + parseInt(x(426)) / 6 + -parseInt(x(432)) / 7 + parseInt(x(451)) / 8 * (-parseInt(x(453)) / 9) + -parseInt(x(433)) / 10 * (-parseInt(x(430)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ve, 294567);
function Ve() {
  const t = ["isConstant", "2962qJJSLP", "clone", "_definitionChanged", "236yZQLYC", "2167566KinzcE", "equals", "addSeconds", "getInertialValue", "1037674DNRPjO", "_forwardExtrapolationType", "3543806QLDcsl", "50evVBmK", "_getValueFixed", "HOLD", "_subscription", "getValue", "_currentCartesian", "967662uVCNlF", "_getValueInertial", "_position", "divideByScalar", "_currentVelocity", "21244yDTcif", "position", "forwardExtrapolationType", "505mouxgE", "warn", "ZERO", "subtract", "123784qEBaLF", "_normalize", "315McqdMK", "INERTIAL", "getOrbitFixedValue", "raiseEvent", "referenceFrame", "definitionChanged", "addEventListener", "normalize", "subscription"];
  return Ve = function() {
    return t;
  }, Ve();
}
function w2(t, e) {
  return t = t - 419, Ve()[t];
}
const Ls = new I(), K2 = new I(), X2 = new r0();
new I();
new I();
new I();
const Ns = new r0(), H0 = 1 / 60;
class ia {
  constructor(e, x = !0) {
    const n = w2;
    this[n(441)] = e, this[n(436)] = void 0, this._definitionChanged = new kx(), this[n(452)] = x, this[n(438)] = void 0, this[n(443)] = void 0, this._forwardExtrapolationType = Ot[n(435)];
  }
  get [U(420)]() {
    return this[U(436)];
  }
  set [U(420)](e) {
    const x = U;
    this[x(436)] = e;
  }
  get [U(458)]() {
    return this[U(424)];
  }
  get [U(445)]() {
    return this[U(441)];
  }
  set position(e) {
    var a;
    const x = U, n = this[x(441)];
    n !== e && (G(n) && ((a = this[x(436)]) == null || a.call(this)), this[x(441)] = e, G(e) && (this[x(436)] = e == null ? void 0 : e[x(458)][x(459)](() => {
      this[x(424)].raiseEvent(this);
    }, this)), this[x(424)][x(456)](this));
  }
  set [U(419)](e) {
    const x = U;
    this[x(452)] !== e && (this[x(452)] = e, this[x(424)][x(456)](this));
  }
  get [U(419)]() {
    return this[U(452)];
  }
  get [U(446)]() {
    return this[U(431)];
  }
  set [U(446)](e) {
    const x = U;
    this[x(431)] = e;
  }
  [U(437)](e, x, n) {
    const a = U, s = this[a(441)];
    if (!s) return;
    if (!G(this._forwardExtrapolationType) || this[a(431)] !== Ot[a(435)])
      return s[a(457)] === N2.INERTIAL ? (this[a(443)] = this[a(440)](e, x, n), this[a(443)]) : (this[a(443)] = this[a(434)](e, x, n), this._currentVelocity);
    let r;
    if (s.referenceFrame === N2[a(454)]) {
      const i = s[a(429)](e), c = s[a(429)](r0.addSeconds(e, H0, Ns));
      if (I[a(427)](i, this[a(438)]) || I[a(427)](i, c)) {
        const o = s[a(437)](e);
        return G(o) && G(n) && o[a(423)](n), this._currentVelocity;
      }
      this[a(438)] = i == null ? void 0 : i[a(423)](), r = this[a(440)](e, x, n);
    } else r = this[a(434)](e, x, n);
    if (!r) {
      const i = s[a(437)](e);
      return G(i) && G(n) && i[a(423)](n), this._currentVelocity;
    }
    return this[a(443)] = r, this._currentVelocity;
  }
  [U(440)](e, x, n) {
    const a = U;
    if (!G(e)) throw new mn("time is required");
    !G(x) && (x = new I());
    const s = this._position;
    if (s[a(421)]) return this[a(452)] ? void 0 : I[a(423)](I[a(449)], x);
    let r = s[a(437)](e, Ls), i = s.getInertialValue(r0[a(428)](e, H0, X2), K2);
    if (i = s[a(455)](e, i), !G(r) || !G(i) && (i = r, r = s.getInertialValue(r0[a(428)](e, -H0, X2), K2), r = s[a(455)](e, r), !G(r)))
      return;
    if (I[a(427)](r, i)) return this[a(452)] ? void 0 : I[a(423)](I.ZERO, x);
    G(n) && r.clone(n);
    const c = I[a(450)](i, r, x);
    return this._normalize ? I[a(419)](c, x) : I[a(442)](c, H0, x);
  }
  [U(434)](e, x, n) {
    const a = U;
    if (!G(e)) {
      console[a(448)]("time is required");
      return;
    }
    !G(x) && (x = new I());
    const s = this[a(441)];
    if (s != null && s[a(421)]) return this[a(452)] ? void 0 : I[a(423)](I.ZERO, x);
    let r = s.getValue(e), i = s[a(437)](r0[a(428)](e, H0, new r0()));
    if (!G(r) || !G(i) && (i = r, r = s[a(437)](r0.addSeconds(e, -H0, new r0())), !G(r)))
      return;
    if (I.equals(r, i)) return this[a(452)] ? void 0 : I[a(423)](I.ZERO, x);
    G(n) && r[a(423)](n);
    const c = I.subtract(i, r, x);
    return this[a(452)] ? I[a(419)](c, x) : I[a(442)](c, H0, x);
  }
  [U(427)](e) {
    var n;
    const x = U;
    return this === e || e instanceof ia && ((n = this._position) == null ? void 0 : n[x(427)](e[x(441)]));
  }
}
function C2(t, e) {
  return t = t - 319, Oe()[t];
}
const b0 = C2;
(function(t, e) {
  const x = C2, n = t();
  for (; ; )
    try {
      if (parseInt(x(343)) / 1 + -parseInt(x(336)) / 2 * (parseInt(x(324)) / 3) + parseInt(x(326)) / 4 + -parseInt(x(332)) / 5 * (-parseInt(x(321)) / 6) + -parseInt(x(320)) / 7 * (parseInt(x(329)) / 8) + -parseInt(x(319)) / 9 + parseInt(x(330)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Oe, 816719);
function Oe() {
  const t = ["19221600WfPQcp", "_position", "20445GsGnEH", "equals", "getValue", "position", "21526nyPmNy", "abs", "WGS84", "_currentRotation", "addEventListener", "definitionChanged", "_getValue", "343735eRyimf", "isConstant", "fromCartesian", "10942371fUjREu", "14LyrcOW", "2148OdXpoA", "latitude", "raiseEvent", "387ZVCeLJ", "addSeconds", "1089728vRAPEu", "longitude", "_subscription", "2324896fRylaI"];
  return Oe = function() {
    return t;
  }, Oe();
}
const Vs = new I(), q2 = new I(), Dt = new t0(), kt = new t0(), Q2 = new r0(), Z2 = 1 / 60;
let xn, Hx;
class bo {
  constructor(e) {
    const x = C2;
    this._position = e, this[x(341)] = new kx(), this[x(328)] = void 0, this[x(339)] = void 0;
  }
  get [b0(344)]() {
    var x;
    return (x = this[b0(331)]) == null ? void 0 : x.isConstant;
  }
  get [b0(335)]() {
    return this[b0(331)];
  }
  set [b0(335)](e) {
    var a;
    const x = b0, n = this[x(331)];
    n !== e && (G(n) && ((a = this[x(328)]) == null || a.call(this)), this[x(331)] = e, G(e) && (this._subscription = e[x(341)][x(340)](() => {
      const s = x;
      this[s(341)][s(323)](this);
    }, this)), this.definitionChanged.raiseEvent(this));
  }
  getValue(e) {
    const x = b0, n = this[x(342)](e);
    return n ? (this[x(339)] = n, this._currentRotation) : this._currentRotation;
  }
  [b0(333)](e) {
    const x = b0;
    return this === e || this[x(331)][x(333)](e[x(331)]);
  }
  [b0(342)](e) {
    const x = b0;
    if (!G(e)) throw new mn("time is required");
    const n = this._position;
    if (n[x(344)]) return;
    let a = n[x(334)](e, Vs), s = n[x(334)](r0[x(325)](e, Z2, Q2), q2);
    if (G(a) && !(!G(s) && (s = a, a = n.getValue(r0[x(325)](e, -Z2, Q2), q2), !G(a))) && !I.equals(a, s))
      return t0[x(345)](a, Jx.WGS84, Dt), t0[x(345)](s, Jx[x(338)], kt), Hx = kt.longitude - Dt[x(327)], xn = (kt.latitude - Dt[x(322)]) / Hx, Math.atan(xn) - Hx / Math[x(337)](Hx) * Math.PI / 2;
  }
}
const Os = ca;
(function(t, e) {
  const x = ca, n = t();
  for (; ; )
    try {
      if (-parseInt(x(254)) / 1 + parseInt(x(250)) / 2 * (parseInt(x(249)) / 3) + -parseInt(x(246)) / 4 + parseInt(x(247)) / 5 * (-parseInt(x(252)) / 6) + parseInt(x(253)) / 7 * (parseInt(x(251)) / 8) + -parseInt(x(248)) / 9 + parseInt(x(244)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Re, 833553);
function ca(t, e) {
  return t = t - 244, Re()[t];
}
const Rs = Object[Os(245)];
function Re() {
  const t = ["1402EndNyt", "888dEerof", "834wEmjAH", "17416xRmeKX", "1094994Fipkoy", "14743500fLuGGH", "assign", "800296CBiqYh", "8895VVMTYd", "4699377FjBfxN", "4911gdcSQJ"];
  return Re = function() {
    return t;
  }, Re();
}
function Gs(t, e) {
  return function(x) {
    return t(x)[e];
  };
}
const Q = S2;
(function(t, e) {
  const x = S2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(179)) / 1 + parseInt(x(199)) / 2 * (parseInt(x(163)) / 3) + parseInt(x(164)) / 4 * (-parseInt(x(194)) / 5) + -parseInt(x(192)) / 6 * (parseInt(x(160)) / 7) + parseInt(x(169)) / 8 + parseInt(x(200)) / 9 * (parseInt(x(176)) / 10) + parseInt(x(204)) / 11 * (parseInt(x(206)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ge, 602334);
function S2(t, e) {
  return t = t - 160, Ge()[t];
}
function Ge() {
  const t = ["72ijCsKr", "56228GtVCEj", "ready", "rectangle", "_readyPromise", "bold 12px Arial", "7533408GOxCfL", "°, ", "lineWidth", "tileWidth", "maximumLevel", "YELLOW", "tileXYToNativeRectangle", "37570VUtwME", "getContext", "_tileWidth", "562259qPsRGc", "_color", "getTileCredits", "center", "_tileHeight", "hasAlphaChannel", "credit", "errorEvent", "toFixed", "width", "_errorEvent", "strokeStyle", "length", "91536TjxGPQ", "textAlign", "215edscbu", "_labelColor", "tileHeight", "toCssColorString", "_tilingScheme", "26848tWiWPr", "2493BwljvL", "pickFeatures", "readyPromise", "resolve", "11rQPOud", "font", "2727636ufekNd", "350Htknmg", "proxy", "tileDiscardPolicy"];
  return Ge = function() {
    return t;
  }, Ge();
}
class zs {
  constructor(e) {
    const x = S2;
    e = e ?? {};
    const { color: n = F[x(174)], labelColor: a = F[x(174)], tileWidth: s = 256, tileHeight: r = 256 } = e;
    this._tilingScheme = new Qt(), this[x(180)] = n[x(197)](), this[x(195)] = a.toCssColorString(), this[x(189)] = new kx(), this[x(178)] = s, this[x(183)] = r, this[x(167)] = Promise[x(203)](!0);
  }
  get [Q(161)]() {
  }
  get [Q(172)]() {
    return this[Q(178)];
  }
  get [Q(196)]() {
    return this[Q(183)];
  }
  get [Q(173)]() {
  }
  get minimumLevel() {
  }
  get tilingScheme() {
    return this[Q(198)];
  }
  get [Q(166)]() {
    return this[Q(198)].rectangle;
  }
  get [Q(162)]() {
  }
  get [Q(186)]() {
    return this[Q(189)];
  }
  get [Q(165)]() {
    return !0;
  }
  get [Q(202)]() {
    return this._readyPromise;
  }
  get [Q(185)]() {
  }
  get [Q(184)]() {
    return !0;
  }
  [Q(181)]() {
  }
  [Q(201)]() {
  }
  requestImage(e, x, n) {
    const a = Q, s = document.createElement("canvas");
    s[a(188)] = 256, s.height = 256;
    const r = s[a(177)]("2d");
    r[a(190)] = this[a(180)], r[a(171)] = 1, r.strokeRect(1, 1, 255, 255), r[a(205)] = a(168), r[a(193)] = a(182), r.fillStyle = this[a(195)];
    const { west: i, north: c } = this[a(198)][a(175)](e, x, n), o = Fs(n, i, c);
    return r.fillText(o, o[a(191)] * 45 / 14, 15), Promise[a(203)](s);
  }
}
function Fs(t, e, x) {
  const n = Q;
  if (t > 10) {
    const a = (t - 8) / 2, s = e[n(187)](a), r = x[n(187)](a);
    return s + n(170) + r + "°";
  }
  return e[n(187)](1) + "°, " + x[n(187)](1) + "°";
}
const g0 = oa;
(function(t, e) {
  const x = oa, n = t();
  for (; ; )
    try {
      if (parseInt(x(264)) / 1 + -parseInt(x(273)) / 2 * (-parseInt(x(248)) / 3) + parseInt(x(243)) / 4 + -parseInt(x(251)) / 5 + -parseInt(x(265)) / 6 * (-parseInt(x(246)) / 7) + parseInt(x(272)) / 8 * (parseInt(x(261)) / 9) + -parseInt(x(254)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ze, 415267);
function ze() {
  const t = ["8322GpDgsP", "addImageryProvider", "layer", "TRANSPARENT", "_viewer", "alpha", "#8aaec3", "8bTdXSw", "794714iKuOdN", "grid", "1566316ImTGFe", "This Viewer is ", "WHITE", "2261WLqCGU", "warn", "3mweuYH", "_init", "_color", "1879120hrsCNF", "_layer", "isDestroyed", "7888600CYBUuR", "tileGrid", "show", "_labelColor", "_alpha", "_gridShow", "imageryLayers", "2749959PwgYkB", "remove", "_show", "37463jeAxlf"];
  return ze = function() {
    return t;
  }, ze();
}
const Ws = F.fromCssColorString(g0(271));
function oa(t, e) {
  return t = t - 243, ze()[t];
}
class mo {
  constructor(e) {
    const x = g0, { viewer: n, gridShow: a = !0, show: s = !1, color: r = Ws, labelColor: i = F[x(245)].withAlpha(0.5) } = e ?? {};
    if (this[x(258)] = 1, this[x(269)] = n, this[x(252)] = { tileGrid: void 0, grid: void 0 }, this[x(263)] = s, !G(this._viewer)) {
      console[x(247)](x(244) + this[x(269)]);
      return;
    }
    this._gridShow = a, this[x(263)] = s, this[x(250)] = r, this[x(257)] = i, this[x(249)]();
  }
  [g0(249)]() {
    const e = g0, x = this[e(269)][e(260)];
    this[e(252)][e(255)] = x[e(266)](new zs({ color: this[e(250)], labelColor: this._labelColor })), this[e(259)] && (this[e(252)].grid = x.addImageryProvider(new Ja({ color: this[e(250)], backgroundColor: F[e(268)], glowColor: F[e(268)], cells: 4 }))), this.show = this[e(263)];
  }
  [g0(253)]() {
    return !1;
  }
  set alpha(e) {
    const x = g0;
    this[x(252)].grid && (this[x(252)][x(274)][x(270)] = e, this._layer[x(255)][x(270)] = e), this._alpha = e;
  }
  destroy() {
    const e = g0, x = this[e(269)].imageryLayers;
    return this[e(252)].tileGrid && x[e(262)](this[e(252)].tileGrid), this[e(252)][e(274)] && x[e(262)](this._layer[e(274)]), e2(this);
  }
  set [g0(256)](e) {
    const x = g0;
    this._layer[x(255)] && (this[x(252)][x(255)][x(256)] = e), this[x(252)][x(274)] && (this[x(252)][x(274)][x(256)] = e), this[x(263)] = e;
  }
  get [g0(267)]() {
    return this[g0(252)];
  }
}
(function(t, e) {
  for (var x = fa, n = t(); ; )
    try {
      var a = -parseInt(x(312)) / 1 + -parseInt(x(316)) / 2 + -parseInt(x(318)) / 3 * (parseInt(x(313)) / 4) + -parseInt(x(317)) / 5 + parseInt(x(314)) / 6 + -parseInt(x(311)) / 7 * (-parseInt(x(315)) / 8) + parseInt(x(319)) / 9;
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fe, 806252);
function Fe() {
  var t = ["3475398ZcSrwo", "955256eQolEI", "395816NipQeS", "1478555PvFXsT", "6JlISgc", "26412714xYfVwq", "addMaterial", "_materialCache", "7fMUPFg", "1323061FhKhNN", "2020908GWldtj"];
  return Fe = function() {
    return t;
  }, Fe();
}
function fa(t, e) {
  t = t - 311;
  var x = Fe(), n = x[t];
  return n;
}
function Bs(t, e) {
  return function() {
    var x = fa;
    O[x(321)][x(320)](t, e);
  };
}
const Y = ua;
(function(t, e) {
  const x = ua, n = t();
  for (; ; )
    try {
      if (parseInt(x(361)) / 1 * (parseInt(x(399)) / 2) + -parseInt(x(386)) / 3 * (parseInt(x(382)) / 4) + parseInt(x(372)) / 5 + -parseInt(x(391)) / 6 * (parseInt(x(388)) / 7) + parseInt(x(404)) / 8 * (-parseInt(x(364)) / 9) + parseInt(x(375)) / 10 * (parseInt(x(367)) / 11) + parseInt(x(390)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(We, 872322);
function ua(t, e) {
  return t = t - 358, We()[t];
}
O[Y(384)] = "EllipseDiffuse";
const la = Y(389);
O[Y(385)][Y(396)](O.EllipseDiffuseType, { fabric: { type: O[Y(359)], uniforms: { color: new F(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: la }, translucent: function() {
  return !0;
} });
const js = Bs(O[Y(384)], { fabric: { type: O[Y(359)], uniforms: { color: new F(1, 0, 0, 0.7), speed: 2, percent: 0.03, gradient: 0.2, number: 5, maxAngle: 180, minAngle: -180 }, source: la }, translucent: function() {
  return !0;
} });
function We() {
  const t = ["_definitionChanged", "957925QNtXpw", "openAngle", "_glowPower", "10OYLpym", "color", "speed", "_gradient", "_glow", "_colorSubscription", "_gradientSubscription", "1228268bXwYmV", "_color", "EllipseDiffuseType", "_materialCache", "3vbLlxi", "getType", "28MteLOv", `
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
        }`, "5618412YAVhHo", "733344eCtnTV", "_rotation", "_minAngle", "_maxAngleSubscription", "number", "addMaterial", "_maxAngle", "rotation", "22oBHLFh", "_openAngleSubscription", "_speed", "equals", "_percent", "56sBqHUt", "gradient", "getValueOrDefault", "getValue", "percent", "minAngle", "EllipseDiffuse", "_percentSubscription", "146076PyASeb", "maxAngle", "isConstant", "1129536rqtoRD", "_speedSubscription", "_rotationSubscription", "3082101nXHwXB", "prototype", "_number", "_taperPower"];
  return We = function() {
    return t;
  }, We();
}
const Hs = new F(1, 0, 0, 0.7), Us = 2, Ys = 0.03, $s = 0.2, Js = 5, Ks = 180, Xs = -180;
function hx(t) {
  const e = Y;
  t = t ?? {}, this[e(371)] = new kx(), this[e(383)] = void 0, this[e(380)] = void 0, this._speed = void 0, this[e(365)] = void 0, this[e(403)] = void 0, this[e(360)] = void 0, this[e(378)] = void 0, this[e(381)] = void 0, this[e(369)] = void 0, this._numberSubscription = void 0, this[e(392)] = void 0, this[e(366)] = void 0, this._openAngle = void 0, this[e(400)] = void 0, this[e(397)] = void 0, this[e(394)] = void 0, this[e(393)] = void 0, this._minAngleSubscription = void 0, this[e(376)] = t[e(376)], this[e(377)] = t[e(377)], this[e(408)] = t[e(408)], this[e(405)] = t[e(405)], this[e(395)] = t[e(395)], this[e(398)] = t[e(398)], this[e(373)] = t[e(373)], this[e(362)] = t[e(362)], this[e(358)] = t[e(358)];
}
Object.defineProperties(hx[Y(368)], { isConstant: { get: function() {
  const t = Y;
  return l0[t(363)](this[t(383)]) && l0.isConstant(this[t(379)]);
} }, definitionChanged: { get: function() {
  return this._definitionChanged;
} }, color: M0(Y(376)), speed: M0(Y(377)), percent: M0("percent"), gradient: M0("gradient"), number: M0(Y(395)), rotation: M0(Y(398)), openAngle: M0(Y(373)), maxAngle: M0(Y(362)), minAngle: M0(Y(358)) }), hx[Y(368)][Y(387)] = function(t) {
  return Y(359);
}, hx[Y(368)][Y(407)] = function(t, e) {
  var s, r;
  const x = Y;
  !G(e) && (e = {}), e[x(376)] = l0.getValueOrClonedDefault(this[x(383)], t, Hs, e[x(376)]), e.speed = l0[x(406)](this[x(401)], t, Us, e[x(377)]), e[x(408)] = l0[x(406)](this[x(403)], t, Ys, e.percent), e.gradient = l0[x(406)](this[x(378)], t, $s, e.gradient), e[x(395)] = l0.getValueOrDefault(this[x(369)], t, Js, e[x(395)]);
  let n = (s = this[x(398)]) == null ? void 0 : s[x(407)]();
  const a = (r = this[x(373)]) == null ? void 0 : r[x(407)]();
  if (B2(n) && B2(a)) {
    n %= 360;
    const i = a / 2;
    let c = -n + i + 90, o = -n - i + 90;
    n > 270 && (c += 360, o += 360), n < -90 && (c -= 360, o -= 360), e[x(362)] = c, e[x(358)] = o;
  } else {
    const i = l0[x(406)](this[x(397)], t, Ks, e[x(362)]), c = l0[x(406)](this._minAngle, t, Xs, e[x(358)]);
    e[x(362)] = i > c ? i : c, e[x(358)] = c < i ? c : i;
  }
  return e;
}, hx.prototype[Y(402)] = function(t) {
  const e = Y;
  return this === t || t instanceof hx && l0[e(402)](this[e(383)], t[e(383)]) && l0[e(402)](this[e(374)], t[e(374)]) && l0[e(402)](this[e(370)], t._taperPower);
};
const V = da;
(function(t, e) {
  const x = da, n = t();
  for (; ; )
    try {
      if (-parseInt(x(376)) / 1 * (-parseInt(x(405)) / 2) + -parseInt(x(377)) / 3 + -parseInt(x(403)) / 4 * (parseInt(x(393)) / 5) + -parseInt(x(384)) / 6 + parseInt(x(396)) / 7 * (-parseInt(x(394)) / 8) + parseInt(x(379)) / 9 + parseInt(x(386)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Be, 215603);
function da(t, e) {
  return t = t - 374, Be()[t];
}
O[V(389)] = V(397);
const qs = V(382);
O[V(390)].addMaterial(O[V(389)], { fabric: { type: O[V(389)], uniforms: { color: new F(1, 0, 0, 0.7), speed: 3, count: 2, gradient: 0.5 }, source: qs }, translucent: function(t) {
  return !0;
} }), O[V(395)] = V(406);
const Qs = V(381);
O._materialCache.addMaterial(O[V(395)], { fabric: { type: O[V(395)], uniforms: { color: new F(1, 0, 0, 0.7), speed: 3, count: 4, gradient: 0.2 }, source: Qs }, translucent: function(t) {
  return !0;
} }), O.CircleDiffuseType = "CircleDiffuse";
function Be() {
  const t = ["DefaultImageId", "17327Sevdxo", "916116VITNQd", `
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
    }`, "337635ilmuzm", "PolylineTrailType", `
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
 }`, "CommunicationFlowType", "1301310emzIqB", "CommunicationFlow", "12552560AgXnkx", `
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
        }`, "PolylineFlow", "BombRadiationType", "_materialCache", "PolylineMilitaryType", "addMaterial", "10AnDSfp", "7088GOnDVp", "SensorWaveType", "2737tCxJfU", "BombRadiation", `
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
    }`, "PolylineFlowType", `
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
    }`, "PolylineMilitary", "PolylineTrail", "451624tqAxNg", "CircleDiffuseType", "2hPsKNu", "SensorWave", `
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
        }`];
  return Be = function() {
    return t;
  }, Be();
}
const Zs = V(398);
O[V(390)][V(392)](O[V(404)], { fabric: { type: O[V(404)], uniforms: { color: new F(1, 0, 0, 0.7), speed: 15 }, source: Zs }, translucent: function(t) {
  return !0;
} }), O[V(383)] = V(385);
const xi = V(378);
O[V(390)][V(392)](O[V(383)], { fabric: { type: O[V(383)], uniforms: { color: new F(1, 1, 0, 0.5), repeat: 30, speed: 0.1, thickness: 0.3 }, source: xi }, translucent: function(t) {
  return !0;
} }), O[V(399)] = V(388);
const ei = V(374);
O._materialCache.addMaterial(O[V(399)], { fabric: { type: O.PolylineFlowType, uniforms: { color: new F(1, 0, 0, 0.7), speed: 45, percent: 0.03, gradient: 0.2, number: 5 }, source: ei }, translucent: function(t) {
  return !0;
} }), O.PolylineTrailType = V(402);
const ti = V(387);
O[V(390)].addMaterial(O[V(380)], { fabric: { type: O[V(380)], uniforms: { color: new F(1, 0, 0, 0.7), image: O.DefaultImageId, speed: 45, repeat: new $(1, 1) }, source: ti }, translucent: function(t) {
  return !0;
} }), O[V(391)] = V(401);
const ni = V(400);
O[V(390)][V(392)](O.PolylineMilitaryType, { fabric: { type: O.PolylineMilitaryType, uniforms: { color: new F(1, 0, 0, 0.7), imageHead: O[V(375)], image: O[V(375)], repeat: new $(1, 1) }, source: ni }, translucent: function(t) {
  return !0;
} });
function ai() {
  js();
}
const T0 = E2;
function E2(t, e) {
  return t = t - 130, je()[t];
}
(function(t, e) {
  const x = E2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(137)) / 1 + parseInt(x(144)) / 2 + -parseInt(x(139)) / 3 + -parseInt(x(130)) / 4 + -parseInt(x(135)) / 5 * (parseInt(x(131)) / 6) + parseInt(x(142)) / 7 * (parseInt(x(140)) / 8) + -parseInt(x(133)) / 9 * (-parseInt(x(134)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(je, 417191);
const { sqrt: U0, pow: y, sin: m0, cos: c0, tan: en, abs: tn } = Math, ri = { BEIJING54: { a: 6378245, b: 63568630188e-4 }, XIAN80: { a: 6378137, b: 63567523142e-4 }, CGCS2000: { a: 6378137, b: 635675231414e-5 } };
function je() {
  const t = ["26632MfISjM", "tan", "1498tLnlxf", "init", "1020634dFSRyx", "string", "_getLonLat", "_getXY", "3206172qsCSZu", "90EJjBhY", "getFloorInteger", "18uZFLtV", "5137910ngTORH", "19405uouJKj", "parseInt", "255910JgEDlE", "getXY", "2152338oUCyIS"];
  return je = function() {
    return t;
  }, je();
}
class pa {
  constructor(e) {
    const x = E2;
    this.e1 = 0, this.a = 0, this.b = 0, this.f = 0, this.e = 0, this[x(143)](e);
  }
  [T0(143)](e) {
    const { a: x, b: n } = ri[e], a = (x - n) / x, s = U0(2 * a - y(a, 2));
    this.e1 = s / U0(1 - y(s, 2)), this.a = x, this.b = n, this.f = a, this.e = s;
  }
  [T0(132)](e) {
    const x = T0;
    return typeof e === x(145) ? Number[x(136)](e) : Math.floor(e);
  }
  [T0(138)](e, x, n = 6, a = 0, s = 5e5, r = 0) {
    const i = T0;
    let c = this.getFloorInteger(tn(e) / n + 1) * n - 3;
    return c = e > 0 ? c : -c, this[i(147)](e, x, c, a, s, r);
  }
  getLonLat(e, x, n, a = 6, s = 0, r = 5e5, i = 0) {
    const c = T0;
    let o = tn(n) * a - 3;
    return o = n > 0 ? o : -o, this[c(146)](e, x, o, s, r, i);
  }
  [T0(147)](e, x, n, a = 0, s = 5e5, r = 0) {
    const { a: i, b: c, e: o, e1: u } = this, l = s, _ = r, f = a, d = n, p = (x - f) * Math.PI / 180, h = (e - d) * Math.PI / 180, v = i / U0(1 - y(o * m0(p), 2)), E = y(i, 2) / c, T = 1 - 3 * y(u, 2) / 4 + 45 * y(u, 4) / 64 - 175 * y(u, 6) / 256 + 11025 * y(u, 8) / 16384, N = T - 1, k = 15 / 32 * y(u, 4) - 175 / 384 * y(u, 6) + 3675 / 8192 * y(u, 8), A = 0 - 35 / 96 * y(u, 6) + 735 / 2048 * y(u, 8), W = 315 / 1024 * y(u, 8), z = E * (T * p + m0(p) * (N * c0(p) + k * y(c0(p), 3) + A * y(c0(p), 5) + W * y(c0(p), 7))), L = en(p), M = u * c0(p), C = z + y(h, 2) / 2 * v * m0(p) * c0(p) + y(h, 4) * v * m0(p) * y(c0(p), 3) / 24 * (5 - y(L, 2) + 9 * y(M, 2) + 4 * y(M, 4)) + y(h, 6) * v * m0(p) * y(c0(p), 5) * (61 - 58 * y(L, 2) + y(L, 4)) / 720;
    return { x: h * v * c0(p) + y(h, 3) * v / 6 * y(c0(p), 3) * (1 - y(L, 2) + y(M, 2)) + y(h, 5) * v / 120 * y(c0(p), 5) * (5 - 18 * y(L, 2) + y(L, 4) + 14 * y(M, 2) - 58 * y(M, 2) * y(L, 2)) + l, y: C + _ };
  }
  [T0(146)](e, x, n, a = 0, s = 5e5, r = 0) {
    const i = T0, { a: c, e: o, e1: u } = this, l = 1, _ = n, f = s, d = r, p = a, h = (1 - U0(1 - y(o, 2))) / (1 + U0(1 - y(o, 2))), v = (x - d) / l, E = v / (c * (1 - y(o, 2) / 4 - 3 * y(o, 4) / 64 - 5 * y(o, 6) / 256)), T = E + (3 * h / 2 - 27 * y(h, 3) / 32) * m0(2 * E) + (21 * y(h, 2) / 16 - 55 * y(h, 4) / 32) * m0(4 * E) + 151 * y(h, 3) / 96 * m0(6 * E) + 1097 / 512 * y(h, 4) * m0(8 * E), N = c * (1 - y(o, 2)) / U0(y(1 - y(o * m0(T), 2), 3)), k = c / U0(1 - y(o * m0(T), 2)), A = y(en(T), 2), W = (e - f) / (l * k), z = y(u, 2) * y(c0(T), 2), L = T - k * Math[i(141)](T) / N * (y(W, 2) / 2 - (5 + 3 * A + 10 * z - 9 * A * z - 4 * y(z, 2) - 9 * y(u, 2)) * y(W, 4) / 24 + (61 + 90 * A + 45 * y(A, 2) - 256 * y(u, 2) - 3 * y(z, 2)) * y(W, 6) / 720);
    return { longitude: (_ * Math.PI / 180 + 1 / c0(T) * (W - (1 + 2 * A + z) * y(W, 3) / 6 + (5 - 2 * z + 28 * A - 3 * y(z, 2) + 8 * y(u, 2) + 24 * y(A, 2)) * y(W, 5) / 120)) * 180 / Math.PI, latitude: L * 180 / Math.PI + p };
  }
}
const Cx = ba;
(function(t, e) {
  const x = ba, n = t();
  for (; ; )
    try {
      if (parseInt(x(357)) / 1 + -parseInt(x(347)) / 2 * (parseInt(x(359)) / 3) + -parseInt(x(360)) / 4 * (parseInt(x(352)) / 5) + -parseInt(x(349)) / 6 + parseInt(x(356)) / 7 + -parseInt(x(361)) / 8 + parseInt(x(355)) / 9 * (parseInt(x(354)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(He, 708092);
function He() {
  const t = ["6398NIrwpi", "add", "3260766JdeYcn", "POSITIVE_INFINITY", "_labels", "1870oNUvrt", "WHITE", "620iWzZrW", "406044BEmwVy", "5638500ffeyvs", "314493navCkf", "FILL_AND_OUTLINE", "1227dFvCMp", "2532bmiVFp", "8963992UiWAbH", "fromType"];
  return He = function() {
    return t;
  }, He();
}
const K = 2.999999, _a = { font: "bold 1rem Arial", fillColor: F[Cx(353)], outlineColor: F.BLACK, outlineWidth: 4, style: cn[Cx(358)], disableDepthTestDistance: Number[Cx(350)] };
function Ue(t, e) {
  return { positions: t, width: 0.5, material: O[Cx(346)]("Color", { color: e }) };
}
function Ye(t, e, x, n = !0) {
  const a = Cx;
  return t[a(351)][a(348)]({ ...t._labelOptions, position: e, text: x, horizontalOrigin: n ? Vt.CENTER : Vt.CENTER });
}
const ax = [1e5, 5e4, 1e4, 5e3, 1e3, 500, 100, 50, 10, 5, 1];
function ha(t, e = 0) {
  return !ax[e] || ax[e] === 1 ? 1 : t / ax[e] > 10 ? ax[e] : t / ax[e] > 3 ? ax[e + 1] : ha(t, e + 2);
}
function ba(t, e) {
  return t = t - 346, He()[t];
}
function si(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
const a0 = M2;
(function(t, e) {
  const x = M2, n = t();
  for (; ; )
    try {
      if (parseInt(x(493)) / 1 * (parseInt(x(505)) / 2) + -parseInt(x(491)) / 3 * (parseInt(x(503)) / 4) + parseInt(x(496)) / 5 * (-parseInt(x(507)) / 6) + parseInt(x(502)) / 7 * (-parseInt(x(504)) / 8) + parseInt(x(489)) / 9 * (parseInt(x(495)) / 10) + parseInt(x(490)) / 11 + -parseInt(x(499)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($e, 701472);
function $e() {
  const t = ["add", "2253972AKYTlh", "show", "_labels", "33369pSJEpP", "606868UBGfmv", "680IvmrgP", "2BUqiGc", "_collection", "2532738YCDnjh", "1985220TRrvHB", "8438474zVoMEY", "9uQSIkA", "_polylines", "944441EyljWr", "removeAll", "40iQBWJb", "10CgizKP", "push"];
  return $e = function() {
    return t;
  }, $e();
}
class ma {
  constructor(e) {
    const x = M2;
    this[x(506)] = new Ka(e), this._polylines = [];
  }
  [a0(498)](e) {
    const x = a0, n = this[x(506)][x(498)](e);
    return this[x(492)][x(497)](n), n;
  }
  [a0(494)]() {
    this[a0(506)].removeAll(), this._polylines = [];
  }
  get [a0(500)]() {
    return this[a0(506)].show;
  }
  set [a0(500)](e) {
    this._collection.show = e;
  }
}
function M2(t, e) {
  return t = t - 489, $e()[t];
}
class Ia {
  constructor() {
    const e = a0;
    this._collection = new Xa(), this[e(501)] = [];
  }
  [a0(498)](e) {
    const x = a0, n = this[x(506)].add(e);
    return this[x(501)][x(497)](n), n;
  }
  [a0(494)]() {
    const e = a0;
    this[e(506)].removeAll(), this[e(501)] = [];
  }
  get [a0(500)]() {
    const e = a0;
    return this[e(506)][e(500)];
  }
  set [a0(500)](e) {
    const x = a0;
    this[x(506)][x(500)] = e;
  }
}
function Je(t, e) {
  return t = t - 308, Ke()[t];
}
const q = Je;
(function(t, e) {
  const x = Je, n = t();
  for (; ; )
    try {
      if (-parseInt(x(346)) / 1 * (-parseInt(x(364)) / 2) + -parseInt(x(331)) / 3 + parseInt(x(374)) / 4 + parseInt(x(353)) / 5 + -parseInt(x(341)) / 6 * (parseInt(x(350)) / 7) + parseInt(x(373)) / 8 + -parseInt(x(332)) / 9 * (-parseInt(x(379)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ke, 382754);
function Ke() {
  const t = ["4426284vSLWJP", "_color2D", "_labelOffset", "removeAll", "Y: ", "167PiNlEM", "_labels", "coordinates", "SCENE3D", "7vovOrU", "_lines", "south", "1917210XVwfTt", "CGCS2000", "distance", "push", "longitude", "isDestroyed", "_center", "geometry", "uniforms", "changed", "point", "2954hcehJA", "_gap", "labelOffset", "_show", "primitives", "addEventListener", "withAlpha", "gap", "changeSceneMode", "39448jSvmVT", "1895928WjwbmU", "latitude", "clientWidth", "_scale", "_getXY", "262760ubumIq", "_getScreenViewRange", "_viewer", "_getLonLat", "fromDegrees", "scale", "center", "positions", "fromCartesian", "scene", "position", "viewer", "forEach", "_polylines", "_gaussTransform", "_drawLines", "xRange", "clientHeight", "cartesianToCanvasCoordinates", "west", "length", "_yRange", "_color", "camera", "_cameraListener", "_measuredGraticule", "canvas", "_primitives", "_getExtentView", "mode", "init", "east", "_rectangle", "update", "_zoneWide", "_xRange", "123294yhwKQn", "18KTssay", "show", "add", "pickEllipsoid", "X: ", "GRAY", "north", "color", "destination"];
  return Ke = function() {
    return t;
  }, Ke();
}
const { abs: nn } = Math;
class Io {
  constructor(e) {
    const x = Je;
    e = e ?? {}, this[x(381)] = e[x(390)], this[x(359)] = e[x(385)], this[x(377)] = e[x(384)] ?? 1e3, this[x(317)] = e[x(339)] ?? F.WHITE[x(370)](0.9), this[x(342)] = e.color2D ?? F[x(337)][x(370)](0.8), this._labelOptions = { ..._a, ...e.labelOptions }, this._gap = e[x(371)] ?? 1, this[x(330)] = e[x(311)] ?? 50, this[x(316)] = e[x(311)] ?? 25, this[x(343)] = e[x(366)] ?? 0, this[x(329)] = 6, this[x(309)] = new pa(x(354)), this[x(322)] = this[x(381)][x(388)][x(368)][x(334)](new In()), this[x(351)] = this[x(322)].add(new ma({ disableDepthTest: !0 })), this[x(347)] = this._primitives.add(new Ia()), this[x(367)] = !0, this[x(381)]._measuredGraticule = this, this.init();
  }
  get show() {
    return this[Je(367)];
  }
  set [q(333)](e) {
    const x = q;
    this[x(367)] !== e && (this[x(367)] = e, this[x(322)][x(333)] = e);
  }
  set [q(385)](e) {
    const x = q;
    G(e) && (si(this[x(359)], e) || (this[x(359)] = e, this[x(323)](), this.create()));
  }
  set [q(384)](e) {
    const x = q;
    this[x(377)] !== e && (this[x(377)] = e, this._getExtentView(), this.create());
  }
  [q(372)]() {
    const e = q, x = this[e(351)][e(308)], n = this[e(381)][e(388)][e(324)] === _0[e(349)] ? this[e(317)] : this[e(342)];
    x[e(315)] > 0 && x[e(391)]((a) => {
      const s = e;
      a.material[s(361)][s(339)] = n;
    });
  }
  [q(325)]() {
    const e = q, x = this[e(381)][e(388)];
    this._cameraListener = x[e(318)][e(362)][e(369)](() => {
    });
  }
  [q(328)]() {
    const e = q, x = this[e(351)][e(308)];
    if (x[e(315)] === 0) return;
    const n = this[e(381)][e(388)], a = this[e(347)][e(347)];
    let s = n.cartesianToCanvasCoordinates(a[0].position), r = n[e(313)](a[1][e(389)]);
    G(s) && G(r) ? this[e(347)][e(333)] = $.distance(s, r) >= 100 : this._labels[e(333)] = !0, s = n.cartesianToCanvasCoordinates(x[0][e(386)][0]), r = n[e(313)](x[0].positions[1]), G(s) && G(r) ? this[e(351)][e(333)] = $[e(355)](s, r) >= 4 : this[e(351)][e(333)] = !0;
  }
  create() {
    const e = q;
    this[e(351)][e(344)](), this[e(347)].removeAll();
    const x = this._zoneWide, { west: n, east: a, north: s, south: r } = this[e(323)]();
    let i = parseInt(nn(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let c = parseInt(nn(a) / x + 1) * x - 3;
    switch (c = a > 0 ? c : -c, c - i) {
      case 24:
        this._drawLines(i, n, i + K, s, r), this[e(310)](i + 6, i + 3, i + 6 + K, s, r), this._drawLines(i + 12, i + 9, i + 12 + K, s, r), this._drawLines(i + 18, i + 15, i + 18 + K, s, r), this[e(310)](c, c - 3, a, s, r);
        break;
      case 18:
        this[e(310)](i, n, i + K, s, r), this[e(310)](i + 6, i + 3, i + 6 + K, s, r), this[e(310)](i + 12, i + 9, i + 12 + K, s, r), this[e(310)](c, c - 3, a, s, r);
        break;
      case 12:
        this._drawLines(i, n, i + K, s, r), this._drawLines(i + 6, i + 3, i + 6 + K, s, r), this[e(310)](c, c - 3, a, s, r);
        break;
      case 6:
        this[e(310)](i, n, i + K, s, r), this._drawLines(c, i + 3, a, s, r);
        break;
      case 0:
        this[e(310)](i, n, a, s, r);
        break;
    }
  }
  [q(310)](e, x, n, a, s) {
    const r = q;
    let i = e - 3;
    i = x < i ? i : x;
    let c = e + K;
    c = n > c ? c : n;
    const { x: o, y: u } = this._gaussTransform[r(378)](i, s, e), { x: l, y: _ } = this[r(309)][r(378)](c, a, e), f = this._scale, d = (parseInt(o / f) - 1) * f, p = (parseInt(l / f) + 1) * f, h = (parseInt(u / f) - 1) * f, v = (parseInt(_ / f) + 1) * f, E = this._viewer[r(388)][r(324)] === _0[r(349)] ? this._color : this[r(342)], T = this._labelOffset;
    let N, k, A, W = 0, z = 0;
    for (let L = d; L <= p; L += f) {
      k = [], N = [];
      for (let M = h; M <= v; M += f) {
        const { longitude: C, latitude: j } = this[r(309)][r(382)](L, M, e);
        k.push(I.fromDegrees(C, j)), N[r(356)]([L, M]);
      }
      this._lines[r(334)](Ue(k, E)), W % (this[r(365)] + 1) === 0 && (A = k.length - 1 - T, N[A] && Ye(this, k[A], r(336) + N[A][0])), W++;
    }
    for (let L = h; L <= v; L += f) {
      k = [], N = [];
      for (let M = d; M <= p; M += f) {
        const { longitude: C, latitude: j } = this._gaussTransform[r(382)](M, L, e);
        k[r(356)](I[r(383)](C, j)), N.push([M, L]);
      }
      this[r(351)].add(Ue(k, E)), z % (this[r(365)] + 1) === 0 && (A = T + 1, N[A] && Ye(this, k[A], r(345) + N[A][1], !1)), z++;
    }
  }
  [q(323)]() {
    const e = q, [x, n] = this._center, a = turf[e(363)]([x, n]), s = turf[e(340)](a, this[e(330)] * this[e(377)] / 2e3, -90), r = turf[e(340)](a, this[e(330)] * this[e(377)] / 2e3, 90), i = turf[e(340)](a, this[e(316)] * this._scale / 2e3, 0), c = turf[e(340)](a, this._yRange * this._scale / 2e3, 180);
    return this[e(327)] = { west: s[e(360)][e(348)][0], north: i[e(360)][e(348)][1], east: r[e(360)][e(348)][0], south: c[e(360)].coordinates[1] }, this[e(327)];
  }
  [q(380)]() {
    const e = q, x = this[e(381)].scene[e(318)], n = this[e(381)][e(388)][e(321)], a = this._viewer.scene.globe.ellipsoid, s = 40, r = 20, i = { north: x[e(335)](new $(n[e(376)] / 2, r), a), south: x[e(335)](new $(n[e(376)] / 2, n[e(312)] - r), a), west: x.pickEllipsoid(new $(s, n.clientWidth / 2), a), east: x.pickEllipsoid(new $(n[e(312)] - s, n.clientWidth / 2), a) };
    return { north: i[e(338)] ? t0[e(387)](i[e(338)])[e(375)] : void 0, south: i[e(352)] ? t0[e(387)](i.south)[e(375)] : void 0, west: i.west ? t0.fromCartesian(i[e(314)]).longitude : void 0, east: i[e(326)] ? t0.fromCartesian(i[e(326)])[e(357)] : void 0 };
  }
  [q(358)]() {
    return !1;
  }
  destroy() {
    const e = q;
    return this[e(319)](), this._viewer.scene.primitives.remove(this[e(322)]), delete this[e(381)][e(320)], e2(this);
  }
}
const J = T2;
(function(t, e) {
  const x = T2, n = t();
  for (; ; )
    try {
      if (parseInt(x(542)) / 1 + parseInt(x(522)) / 2 * (-parseInt(x(532)) / 3) + parseInt(x(549)) / 4 + parseInt(x(534)) / 5 * (parseInt(x(515)) / 6) + -parseInt(x(500)) / 7 + -parseInt(x(536)) / 8 + -parseInt(x(539)) / 9 * (-parseInt(x(544)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xe, 752893);
const { abs: At } = Math;
function T2(t, e) {
  return t = t - 480, Xe()[t];
}
class go {
  constructor(e) {
    const x = T2;
    e = e ?? {}, this._viewer = e.viewer, this[x(524)] = e.color ?? F[x(527)][x(497)](0.5), this[x(537)] = e[x(511)] ?? F.GRAY.withAlpha(0.8), this._zoneWide = e.zoneWide ?? 6, this[x(546)] = e[x(551)] ?? 1, this[x(502)] = e[x(551)] ?? 1, this[x(496)] = { ..._a, ...e.labelOptions }, this[x(507)] = e[x(531)] ?? 40, this[x(485)] = e[x(519)] ?? 20, this[x(505)] = e[x(506)] ?? 3, this._gaussTransform = new pa(x(533)), this._primitives = this[x(541)][x(518)][x(504)].add(new In()), this[x(513)] = this[x(525)][x(501)](new ma({ disableDepthTest: !0 })), this._labels = this[x(525)][x(501)](new Ia()), this._show = !0, this[x(520)] = void 0, this[x(540)](), this[x(541)]._measuredGraticule = this;
  }
  [J(509)]() {
    const e = J, x = this._lines[e(481)], n = this[e(480)]() ? this[e(524)] : this[e(537)];
    x.length > 0 && x.forEach((a) => {
      const s = e;
      a[s(482)][s(510)][s(530)] = n;
    });
  }
  [J(480)]() {
    const e = J;
    return this._viewer[e(518)][e(492)] === _0[e(517)];
  }
  set [J(530)](e) {
    const x = J;
    this[x(480)]() ? this[x(524)] = e : this[x(537)] = e, this.changeSceneMode();
  }
  get color() {
    const e = J;
    return this.is3DMode() ? this[e(524)] : this[e(537)];
  }
  get [J(529)]() {
    return this[J(499)];
  }
  set [J(529)](e) {
    const x = J;
    this[x(499)] !== e && (this[x(499)] = e, this[x(525)][x(529)] = e);
  }
  init() {
    const e = J, x = this[e(541)].scene;
    this[e(548)] = x[e(545)][e(552)][e(557)](() => {
      const n = e;
      this[n(499)] && this[n(484)]();
    }), this._canvasResizeListener = this[e(541)][e(512)][e(557)](e(550), () => {
      this[e(499)] && this.render();
    });
  }
  [J(484)]() {
    const e = J;
    this._lines[e(523)](), this[e(495)][e(523)]();
    const x = this[e(521)];
    let { west: n, north: a, east: s, south: r } = this[e(528)]();
    n = o0[e(554)](n), s = o0[e(554)](s), a = o0[e(554)](a), r = o0[e(554)](r);
    let i = parseInt(At(n) / x + 1) * x - 3;
    i = n > 0 ? i : -i;
    let c = parseInt(At(s) / x + 1) * x - 3;
    switch (c = s > 0 ? c : -c, c - i) {
      case 24:
        this[e(526)](i, n, i + K, a, r, !0), this[e(526)](i + 6, i + 3, i + 6 + K, a, r, !0), this[e(526)](i + 12, i + 9, i + 12 + K, a, r, !0), this._drawLines(i + 18, i + 15, i + 18 + K, a, r, !0), this._drawLines(c, c - 3, s, a, r);
        break;
      case 18:
        this[e(526)](i, n, i + K, a, r, !0), this[e(526)](i + 6, i + 3, i + 6 + K, a, r, !0), this._drawLines(i + 12, i + 9, i + 12 + K, a, r, !0), this[e(526)](c, c - 3, s, a, r);
        break;
      case 12:
        this._drawLines(i, n, i + K, a, r, !0), this[e(526)](i + 6, i + 3, i + 6 + K, a, r, !0), this[e(526)](c, c - 3, s, a, r);
        break;
      case 6:
        this._drawLines(i, n, i + K, a, r, !0), this._drawLines(c, i + 3, s, a, r);
        break;
      case 0:
        this._drawLines(i, n, s, a, r);
        break;
    }
  }
  [J(494)]() {
    return !1;
  }
  destroy() {
    const e = J;
    return this[e(548)](), this._canvasResizeListener(), this[e(541)].scene.primitives[e(503)](this._primitives), this[e(499)] = !1, e2(this);
  }
  _drawLines(e, x, n, a, s, r = !1) {
    const i = J;
    let c = e - 3;
    c = x < c ? c : x;
    let o = e + K;
    o = n > o ? o : n;
    let u = At(parseInt(e / 6)) + 1;
    u = e > 0 ? u : 60 - u + 1;
    const { x: l, y: _ } = this[i(535)][i(493)](c, s, e), { x: f, y: d } = this[i(535)]._getXY(o, a, e), p = ha(d - _, 0), h = (parseInt(l / p) - 1) * p, v = (parseInt(f / p) + 1) * p, E = (parseInt(_ / p) - 1) * p, T = (parseInt(d / p) + 1) * p, N = (v - h) / p, k = (T - E) / p, A = this._labelOffset;
    let W, z, L, M = 0, C = 0;
    const j = this[i(541)][i(518)][i(492)] === _0[i(517)] ? this._color : this[i(537)];
    for (let x0 = h; x0 <= v; x0 += p) {
      z = [], W = [];
      for (let w = E; w <= T; w += p) {
        const { longitude: m, latitude: b } = this[i(535)]._getLonLat(x0, w, e);
        z.push(I[i(538)](m, b)), W[i(490)]([x0, w]);
      }
      !(N - M < 2 && r) && (this._lines.add(Ue(z, j)), M % (this[i(546)] + 1) === 0 && (L = z.length - 1 - A, W[L] && Ye(this, z[L], "" + u + W[L][0]))), M++;
    }
    for (let x0 = E; x0 <= T; x0 += p) {
      z = [], W = [], M = 0;
      for (let w = h; w <= v; w += p) {
        if (!(N - M < 2 && r)) {
          const { longitude: m, latitude: b } = this._gaussTransform._getLonLat(w, x0, e);
          z[i(490)](I[i(538)](m, b));
        }
        W[i(490)]([w, x0]), M++;
      }
      this._lines[i(501)](Ue(z, j)), (k - C) % (this[i(502)] + 1) === 0 && (L = A, W[L] && Ye(this, z[L], "" + W[L][1], !1)), C++;
    }
  }
  [J(528)]() {
    const e = J, x = this._viewer[e(518)][e(545)], n = this._viewer[e(518)][e(558)], a = this[e(541)][e(518)][e(489)][e(556)], s = [x[e(508)](new $(0, 0), a), x.pickEllipsoid(new $(n[e(553)], 0), a), x[e(508)](new $(0, n[e(516)]), a), x[e(508)](new $(n[e(553)], n[e(516)]), a)];
    for (let r = 0; r < 4; r++)
      if (s[r] === void 0) return Ex.MAX_VALUE;
    return Ex.fromCartographicArray(a[e(487)](s));
  }
  _screenCenterPosition() {
    const e = J, x = this[e(541)].scene[e(558)], n = new $(Math[e(486)](x[e(553)] / 2), Math[e(486)](x[e(516)] / 2)), a = this[e(541)][e(518)].camera[e(508)](n);
    return a || I[e(538)](0, 0, 0);
  }
  [J(498)]() {
    const e = J, x = this[e(541)][e(518)][e(545)], n = this[e(541)][e(518)].canvas, a = this[e(541)].scene.globe[e(556)], s = this[e(507)], r = this[e(485)], i = { north: x.pickEllipsoid(new $(n[e(553)] / 2, r), a), south: x.pickEllipsoid(new $(n[e(553)] / 2, n[e(516)] - r), a), west: x[e(508)](new $(s, n.clientHeight / 2), a), east: x[e(508)](new $(n[e(553)] - s, n[e(516)] / 2), a) };
    return { north: i.north ? t0[e(547)](i[e(483)])[e(491)] : void 0, south: i[e(488)] ? t0[e(547)](i.south).latitude : void 0, west: i.west ? t0.fromCartesian(i[e(514)])[e(555)] : void 0, east: i[e(543)] ? t0[e(547)](i[e(543)])[e(555)] : void 0 };
  }
}
function Xe() {
  const t = ["_zoneWide", "664250pANxcy", "removeAll", "_color", "_primitives", "_drawLines", "WHITE", "_getExtentView", "show", "color", "screenOffsetX", "3jxvNxg", "CGCS2000", "56190shXjAc", "_gaussTransform", "9136720UfjHAY", "_color2D", "fromDegrees", "174033dENitK", "init", "_viewer", "398839DLfPlH", "east", "610RXNOmW", "camera", "_xGap", "fromCartesian", "_cameraListener", "3746496TsbBRU", "resize", "xGap", "changed", "clientWidth", "toDegrees", "longitude", "ellipsoid", "addEventListener", "canvas", "is3DMode", "_polylines", "material", "north", "render", "_screenOffsetY", "round", "cartesianArrayToCartographicArray", "south", "globe", "push", "latitude", "mode", "_getXY", "isDestroyed", "_labels", "_labelOptions", "withAlpha", "_getScreenViewRange", "_show", "9173990MhvGJS", "add", "_yGap", "remove", "primitives", "_labelOffset", "labelOffset", "_screenOffsetX", "pickEllipsoid", "changeSceneMode", "uniforms", "color2D", "container", "_lines", "west", "546HxkMIO", "clientHeight", "SCENE3D", "scene", "screenOffsetY", "_centerZone"];
  return Xe = function() {
    return t;
  }, Xe();
}
const Z = P2;
(function(t, e) {
  const x = P2, n = t();
  for (; ; )
    try {
      if (parseInt(x(150)) / 1 * (parseInt(x(146)) / 2) + -parseInt(x(138)) / 3 + -parseInt(x(119)) / 4 * (-parseInt(x(128)) / 5) + -parseInt(x(142)) / 6 + -parseInt(x(155)) / 7 * (parseInt(x(121)) / 8) + parseInt(x(120)) / 9 + parseInt(x(151)) / 10 * (-parseInt(x(131)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qe, 626999);
class yo {
  constructor(e) {
    const x = P2;
    this[x(147)] = e, this.entityCache = /* @__PURE__ */ new WeakSet(), this[x(126)] = /* @__PURE__ */ new Map(), this.scene = this[x(147)][x(158)], this[x(156)] = this[x(158)][x(115)][x(148)](this[x(115)][x(130)](this));
  }
  [Z(122)](e) {
    const x = Z;
    if (!e || this._indicators.has(e.id)) return;
    this[x(159)][x(122)](e);
    const { indicate: n, container: a } = this[x(161)]();
    this._indicators[x(129)](e.id, [e, n, a]), n[x(145)].animateAppear();
  }
  [Z(134)](e) {
    const x = Z;
    if (this[x(114)](e)) {
      this[x(117)](e);
      return;
    }
    this[x(122)](e);
  }
  [Z(115)](e, x) {
    const n = Z;
    this[n(126)][n(127)] !== 0 && this[n(126)][n(141)](([a, s]) => {
      this[n(152)](x, a, s);
    });
  }
  [Z(152)](e, x, n) {
    var i;
    const a = Z;
    if (!this[a(159)].has(x)) {
      this[a(126)][a(135)](x.id);
      return;
    }
    const s = n.viewModel;
    if (!x[a(154)] || !x[a(116)](e)) return;
    const r = (i = x[a(132)]) == null ? void 0 : i[a(137)](e);
    r && (s[a(132)] = r, s[a(118)] = !0, s.update());
  }
  [Z(161)]() {
    const e = Z, x = this[e(147)][e(125)], n = document[e(123)](e(149));
    return n[e(160)] = "cesium-viewer-selectionIndicatorContainer", x[e(133)](n), { indicate: new gn(n, this[e(147)][e(158)]), container: n };
  }
  remove(e) {
    this[Z(136)](e.id);
  }
  [Z(136)](e) {
    const x = Z, n = this[x(126)][x(124)](e);
    if (!n) return;
    const [a, s, r] = n;
    this[x(147)][x(125)][x(157)](r), s[x(139)](), this[x(126)][x(135)](e), this[x(159)].delete(a);
  }
  removeAll() {
    const e = Z;
    this[e(126)][e(141)](([x]) => {
      this[e(117)](x);
    }), this._indicators[e(140)]();
  }
  getEntities() {
    const e = Z;
    return Array[e(143)](this[e(126)][e(144)]())[e(113)]((x) => x[0]);
  }
  has(e) {
    const x = Z;
    return this._indicators[x(114)](e.id);
  }
  [Z(153)]() {
    return !!this[Z(156)];
  }
  destroy() {
    var x;
    const e = Z;
    return this.removeAll(), (x = this[e(156)]) == null || x.call(this), this[e(156)] = null, this[e(126)][e(127)];
  }
}
function P2(t, e) {
  return t = t - 113, qe()[t];
}
function qe() {
  const t = ["11GROJhD", "position", "appendChild", "addOrRemove", "delete", "removeById", "getValue", "1899552inJcrG", "destroy", "clear", "forEach", "1692702wmBXTl", "from", "values", "viewModel", "2307514pOmaVI", "viewer", "addEventListener", "div", "1tMprMX", "323330TMdony", "updateIndicator", "isDestroyed", "isShowing", "2037UmBUkM", "preUpdateClose", "removeChild", "scene", "entityCache", "className", "createIndicator", "map", "has", "preUpdate", "isAvailable", "remove", "showSelection", "20aTkUBB", "2104092PJgxLG", "16096BsBFBU", "add", "createElement", "get", "container", "_indicators", "size", "772580OtERHh", "set", "bind"];
  return qe = function() {
    return t;
  }, qe();
}
const O0 = D2;
function Qe() {
  const t = ["preUpdate", "div", "animateAppear", "1580FIczGM", "appendChild", "removeEventListener", "setPrimitive", "893683xlHxpv", "cesium-viewer-selectionIndicatorContainer", "10ThrtyO", "3320196BMNWjf", "addEventListener", "indicator", "5432ELRHkF", "primitive", "createIndicator", "destroy", "2292072HMoIbE", "container", "update", "className", "scene", "19249110iMJgvu", "removeUpdate", "position", "bindUpdate", "774268IuotGr", "197121hJGacK", "6fUIxiK", "remove", "viewer", "showSelection", "viewModel"];
  return Qe = function() {
    return t;
  }, Qe();
}
(function(t, e) {
  const x = D2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(201)) / 1 + -parseInt(x(203)) / 2 * (-parseInt(x(202)) / 3) + parseInt(x(188)) / 4 * (-parseInt(x(211)) / 5) + -parseInt(x(185)) / 6 + parseInt(x(215)) / 7 + -parseInt(x(192)) / 8 + -parseInt(x(197)) / 9 * (-parseInt(x(217)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Qe, 420309);
function D2(t, e) {
  return t = t - 185, Qe()[t];
}
class vo {
  constructor(e, x) {
    const n = D2;
    this[n(205)] = e, this.primitive = x, this[n(208)] = () => {
      var c;
      const r = n, i = this[r(187)];
      if (!this[r(189)]) {
        i[r(207)][r(206)] = !1;
        return;
      }
      this[r(187)].viewModel[r(199)] = (c = this.primitive) == null ? void 0 : c[r(199)], this[r(187)].viewModel[r(194)]();
    }, this[n(196)] = this[n(205)][n(196)];
    const { indicate: a, container: s } = this[n(190)]();
    a.viewModel[n(210)](), a.viewModel[n(206)] = !0, this.indicator = a, this[n(193)] = s, this[n(200)]();
  }
  [O0(214)](e) {
    const x = O0;
    if (e) {
      this[x(189)] = e, this[x(187)][x(207)][x(206)] = !0;
      return;
    }
    this.indicator.viewModel[x(206)] = !1;
  }
  [O0(200)]() {
    const e = O0;
    this[e(196)].preUpdate[e(186)](this[e(208)]);
  }
  removeUpdate() {
    const e = O0;
    this[e(196)][e(208)][e(213)](this[e(208)]);
  }
  createIndicator() {
    const e = O0, x = this[e(205)][e(193)], n = document.createElement(e(209));
    return n[e(195)] = e(216), x[e(212)](n), { indicate: new gn(n, this[e(205)].scene), container: n };
  }
  [O0(191)]() {
    const e = O0;
    this[e(198)](), this[e(187)][e(191)](), this[e(193)][e(204)]();
  }
}
const Lt = ga;
function Ze() {
  const t = ["24701aZotle", "259BhNesg", "2237013jBPuVR", "value", "1168731fuHUqT", "baseLayer", "$slots", "187585YcLDtf", "8uwTukw", "DEFAULT_VIEWER_NAME", "1605530zOHXoq", "forEach", "8196FOWCgn", "eventList", "viewer-created", "url", "46ATwIFN", "default", "10838148rnxrVq", "name", "defaultImageryUrl", "defaultCamera", "11bWRTbI", "68ocHqLK", "defaultViewerConfig"];
  return Ze = function() {
    return t;
  }, Ze();
}
(function(t, e) {
  const x = ga, n = t();
  for (; ; )
    try {
      if (parseInt(x(459)) / 1 * (parseInt(x(450)) / 2) + parseInt(x(463)) / 3 + parseInt(x(457)) / 4 * (parseInt(x(466)) / 5) + parseInt(x(471)) / 6 * (parseInt(x(460)) / 7) + parseInt(x(467)) / 8 * (-parseInt(x(461)) / 9) + -parseInt(x(469)) / 10 + -parseInt(x(456)) / 11 * (parseInt(x(452)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ze, 333742);
const ii = ["id"];
function ga(t, e) {
  return t = t - 448, Ze()[t];
}
const ci = E0({ name: "CViewer", __name: "viewer", props: { name: { type: String, default: () => v0[Lt(468)] }, eventList: { type: Array, default: () => [] }, defaultViewerConfig: { type: Object, default: () => {
} }, defaultCamera: { type: Object, default: () => ({ west: 90, south: 10, east: 120, north: 40 }) } }, emits: [Lt(448)], setup(t, { emit: e }) {
  const x = Lt, n = e, a = t;
  a[x(455)] && es(a[x(455)]);
  const s = n2();
  return nr(a[x(453)], s), yn(() => {
    var o, u;
    const r = x, i = {};
    (o = v0[r(454)]) != null && o[r(449)] && (i[r(464)] = new qa(new Qa(v0[r(454)])));
    const c = Lr(R(a[r(453)]), { ...i, ...a[r(458)] });
    s[r(462)] = c, xs(c), (u = a[r(472)]) == null || u[r(470)]((l) => l(c)), n("viewer-created");
  }), Ax(() => {
    const r = x;
    s[r(462)] = null, Vr(a[r(453)]);
  }), (r, i) => {
    const c = x;
    return p0(), z0("div", { id: t[c(453)], class: "c-viewer" }, [Rt(r[c(465)], c(451))], 8, ii);
  };
} }), Wx = (t, e) => {
  const x = t.__vccOpts || t;
  for (const [n, a] of e)
    x[n] = a;
  return x;
}, oi = /* @__PURE__ */ Wx(ci, [["__scopeId", "data-v-c12cb1f2"]]);
function ya(t, e) {
  return t = t - 101, xt()[t];
}
(function(t, e) {
  const x = ya, n = t();
  for (; ; )
    try {
      if (parseInt(x(102)) / 1 * (parseInt(x(107)) / 2) + parseInt(x(111)) / 3 + -parseInt(x(108)) / 4 * (-parseInt(x(110)) / 5) + parseInt(x(105)) / 6 * (-parseInt(x(103)) / 7) + -parseInt(x(101)) / 8 + -parseInt(x(104)) / 9 * (-parseInt(x(106)) / 10) + parseInt(x(112)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xt, 171456);
function xt() {
  const t = ["73168DrYPDF", "37334WKaGcG", "161EQDOaY", "342ZfVrXC", "82086HoJctD", "48380jAJREQ", "6oYsZrf", "4vQhozL", "component", "610835NoJWYE", "216498MOGzFf", "55946lqACVg"];
  return xt = function() {
    return t;
  }, xt();
}
const Bt = oi;
Bt.install = function(t) {
  t[ya(109)]("CViewer", Bt);
};
const Sx = k2;
(function(t, e) {
  const x = k2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(113)) / 1 * (parseInt(x(114)) / 2) + parseInt(x(125)) / 3 + parseInt(x(137)) / 4 + parseInt(x(140)) / 5 * (-parseInt(x(126)) / 6) + parseInt(x(106)) / 7 * (-parseInt(x(108)) / 8) + -parseInt(x(130)) / 9 + parseInt(x(128)) / 10 * (parseInt(x(132)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(et, 284085);
const fi = { class: Sx(133) }, ui = { class: Sx(112) };
function k2(t, e) {
  return t = t - 106, et()[t];
}
function et() {
  const t = ["c-info-popup-close", "getById", "map", "default", "data", "939696QrtQMT", "2669064ZqsTkG", "style", "4509330ulsBFb", "reverse", "4365180ueEktq", "position", "33KXEDYx", "c-info-popup-header", "div", "info-popup", "equals", "1096684gUuzwS", "--left-pos", "entities", "5KPqSGf", "1702960zgmKJZ", "close", "8MHkxok", "span", "header", "level", "c-info-popup-content", "199wlnYiP", "4854qMfoER", "value", "CInfoPopup", "setProperty", "getValue", "$slots"];
  return et = function() {
    return t;
  }, et();
}
const li = E0({ name: Sx(116), __name: Sx(135), props: { data: { type: Object, default: null } }, emits: ["close"], setup(t, { emit: e }) {
  const x = Sx;
  ar((l) => ({ v32f5a93c: i.value }));
  const n = e, a = t, s = () => {
    n(k2(107));
  }, r = K0({ label: "高", level: 1400 });
  ["低", "中低", "中", "中高", "高"][x(129)]()[x(122)]((l, _) => ({ label: l, key: l, props: { onClick() {
    const f = x;
    r[f(115)] = { label: l, level: 1e3 + 100 * _ };
  } } }));
  const i = a2(() => r.value[x(111)]), c = K0();
  let o;
  const u = kn((l, _) => {
    var T, N;
    const f = x;
    if (!a.data) return;
    const { source: d, id: p } = a[f(124)], h = S0(d), v = h == null ? void 0 : h[f(139)][f(121)](p);
    if (!(v != null && v[f(131)])) {
      s();
      return;
    }
    const E = l.cartesianToCanvasCoordinates(v[f(131)][f(118)](_));
    o && $[f(136)](o, E) || (o = E, o != null && o.x && ((T = c.value) == null || T[f(127)][f(117)](f(138), o.x + "px")), o != null && o.y && ((N = c[f(115)]) == null || N[f(127)][f(117)]("--top-pos", o.y + "px")));
  });
  return vn(() => {
    u == null || u();
  }), (l, _) => {
    const f = x;
    return t[f(124)] ? (p0(), z0("div", { key: 0, ref_key: "InfoPopupRef", ref: c, class: "c-info-popup" }, [y0(f(134), fi, [Rt(l[f(119)], f(110), {}, () => [y0(f(109), null, r2(t.data.name), 1), y0(f(109), null, [y0(f(109), { class: f(120), onClick: s }, "✕")])], !0)]), y0(f(134), ui, [Rt(l[f(119)], f(123), {}, void 0, !0)])], 512)) : rr("", !0);
  };
} }), di = /* @__PURE__ */ Wx(li, [["__scopeId", "data-v-7c38df2f"]]), an = va;
(function(t, e) {
  const x = va, n = t();
  for (; ; )
    try {
      if (-parseInt(x(454)) / 1 * (parseInt(x(455)) / 2) + parseInt(x(450)) / 3 + -parseInt(x(453)) / 4 + -parseInt(x(456)) / 5 + parseInt(x(452)) / 6 + parseInt(x(457)) / 7 + -parseInt(x(458)) / 8 * (-parseInt(x(460)) / 9) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(tt, 672570);
function va(t, e) {
  return t = t - 450, tt()[t];
}
const jt = di;
jt[an(459)] = function(t) {
  const e = an;
  t[e(461)](e(451), jt);
};
function tt() {
  const t = ["25646553NSyxld", "component", "614244opMAcx", "CInfoPopup", "4117266KqVDlj", "3730140YWxWtZ", "92669YiFAaM", "18ThFMyS", "6657690ffcIQM", "210616vGKLvh", "8niMRcQ", "install"];
  return tt = function() {
    return t;
  }, tt();
}
const pi = $0;
(function(t, e) {
  const x = $0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(441)) / 1 + parseInt(x(443)) / 2 * (-parseInt(x(438)) / 3) + -parseInt(x(448)) / 4 + -parseInt(x(447)) / 5 * (parseInt(x(457)) / 6) + parseInt(x(449)) / 7 + parseInt(x(445)) / 8 + parseInt(x(458)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(nt, 287949);
function nt() {
  const t = ["getBoundingClientRect", "1010238YRHqIC", "n-dropdown", "3439560YrVnmV", "CRightMenu", "33250OMCmZC", "2234660UxbuxG", "1996946FLsNCH", "prevent", "forEach", "position", "some", "value", "manual", "options", "126AyJAVI", "9248922EPJGNd", "isShow", "3CtQoiC", "bottom-start", "show", "251498uyPxsu"];
  return nt = function() {
    return t;
  }, nt();
}
function $0(t, e) {
  return t = t - 437, nt()[t];
}
const _i = E0({ name: pi(446), __name: "right-menu", setup(t) {
  const e = Oi(), { executeFilter: x } = e, { eventList: n, rightClickEvent: a, menuOptions: s, cachePosition: r, posOffset: i, isShow: c } = pr(e), o = a2(() => {
    const p = $0;
    return c.value && s[p(454)][p(453)]((h) => {
      var v;
      return (v = h == null ? void 0 : h[p(437)]) == null ? void 0 : v.call(h, { data: h, position: r[p(454)] });
    });
  }), u = K0(0), l = K0(0), _ = u2(async (p) => {
    const h = $0;
    c.value = !1;
    const v = p[h(452)][h(452)], E = Ix(i);
    x(v);
    const T = Rr(), N = T[h(442)]();
    u[h(454)] = v.x + N.x - E.x, l[h(454)] = v.y + N.y - E.y, a[h(454)][h(451)]((k) => k({ position: v })), await s2(), c[h(454)] = !0;
  }, { isEntity: !0 }), f = q0(() => {
    const p = $0;
    c[p(454)] = !1;
  }), d = (p, h) => {
    var E, T;
    const v = $0;
    (T = (E = n[v(454)])[p]) == null || T.call(E, { ...h, position: r }), c[v(454)] = !1;
  };
  return Ax(() => {
    _(), f();
  }), (p, h) => {
    const v = $0, E = Tx(v(444));
    return p0(), It(E, { class: "c-cesium-rightmenu", placement: v(439), trigger: v(455), show: o[v(454)], options: gt(s), x: u[v(454)], y: l.value, onContextmenu: h[0] || (h[0] = sr(() => {
    }, [v(450)])), onSelect: d }, null, 8, [v(440), v(456), "x", "y"]);
  };
} });
function at() {
  const t = ["CRightMenu", "component", "2363268QNIXxh", "7ZRnYnD", "1435203cIfDdK", "2337436ynCybB", "13010GpfDbE", "5CiLvQD", "17855472fdYcVD", "6204DspLWg", "3AIilzP", "12leSZKu", "2541160xTCbjU", "51134CpysNG"];
  return at = function() {
    return t;
  }, at();
}
function wa(t, e) {
  return t = t - 385, at()[t];
}
(function(t, e) {
  const x = wa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(392)) / 1 * (-parseInt(x(390)) / 2) + parseInt(x(389)) / 3 * (parseInt(x(398)) / 4) + -parseInt(x(386)) / 5 * (-parseInt(x(395)) / 6) + -parseInt(x(396)) / 7 * (parseInt(x(391)) / 8) + parseInt(x(397)) / 9 + parseInt(x(385)) / 10 * (parseInt(x(388)) / 11) + -parseInt(x(387)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(at, 372671);
const Ht = _i;
Ht.install = function(t) {
  const e = wa;
  t[e(394)](e(393), Ht);
};
const hi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const bi = Object.prototype.toString, mi = (t) => bi.call(t) === "[object Object]";
function Nt(t) {
  return Array.isArray(t) ? t : [t];
}
function Ii(t, e, x) {
  return Px(t, e, {
    ...x,
    immediate: !0
  });
}
const gi = hi ? window : void 0;
function yi(t) {
  var e;
  const x = Ix(t);
  return (e = x == null ? void 0 : x.$el) !== null && e !== void 0 ? e : x;
}
function vi(...t) {
  const e = (n, a, s, r) => (n.addEventListener(a, s, r), () => n.removeEventListener(a, s, r)), x = a2(() => {
    const n = Nt(Ix(t[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return Ii(() => {
    var n, a;
    return [
      (n = (a = x.value) === null || a === void 0 ? void 0 : a.map((s) => yi(s))) !== null && n !== void 0 ? n : [gi].filter((s) => s != null),
      Nt(Ix(x.value ? t[1] : t[0])),
      Nt(gt(x.value ? t[2] : t[1])),
      Ix(x.value ? t[3] : t[2])
    ];
  }, ([n, a, s, r], i, c) => {
    if (!(n != null && n.length) || !(a != null && a.length) || !(s != null && s.length)) return;
    const o = mi(r) ? { ...r } : r, u = n.flatMap((l) => a.flatMap((_) => s.map((f) => e(l, _, f, o))));
    c(() => {
      u.forEach((l) => l());
    });
  }, { flush: "post" });
}
const Ux = Ca;
function Ca(t, e) {
  return t = t - 239, rt()[t];
}
(function(t, e) {
  const x = Ca, n = t();
  for (; ; )
    try {
      if (parseInt(x(255)) / 1 + -parseInt(x(248)) / 2 + -parseInt(x(241)) / 3 + -parseInt(x(245)) / 4 + -parseInt(x(250)) / 5 * (parseInt(x(251)) / 6) + parseInt(x(261)) / 7 * (parseInt(x(257)) / 8) + parseInt(x(258)) / 9 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(rt, 110334);
function rt() {
  const t = ["ratio", "15EQNalF", "185628vwUKtm", "1:1万", "map", "select", "195982uUCPwf", "1:50万", "368SEbYiw", "1655514MJVALa", "click", "1:1400万", "6692zZqKzk", "1:25万", "distance-select", "show", "1:100万", "197295BlGYfY", "label", "options", "update:show", "544552RZmTGy", "n-dropdown", "documentElement", "37706cLitlk"];
  return rt = function() {
    return t;
  }, rt();
}
const wi = E0({ name: "CDistanceSelect", __name: Ux(263), props: { show: { type: Boolean, default: !1 }, x: { type: Number, default: 0 }, y: { type: Number, default: 0 } }, emits: [Ux(244), Ux(254)], setup(t, { emit: e }) {
  const x = Ux, n = e, a = [{ ratio: 1, label: x(260), height: 46248.83085151955 }, { ratio: 4, label: x(240), height: 109404.75765483479 }, { ratio: 5, label: x(256) }, { ratio: 13.5, label: x(262) }, { ratio: 60, label: "1:5万" }, { ratio: 200, label: x(252) }], s = (o) => {
    n(x(254), o);
  }, r = a[x(253)]((o) => {
    const u = x;
    return { key: o[u(249)], label: o[u(242)], props: { onClick: () => s(o[u(249)]) } };
  }), i = () => {
    n("update:show", !1);
  }, c = vi(document[x(247)], x(259), i);
  return Ax(() => {
    c();
  }), (o, u) => {
    const l = x, _ = Tx(l(246));
    return p0(), It(_, { options: gt(r), show: t.show, x: t.x, y: t.y }, null, 8, [l(243), l(239), "x", "y"]);
  };
} }), st = A2;
(function(t, e) {
  const x = A2, n = t();
  for (; ; )
    try {
      if (-parseInt(x(269)) / 1 + -parseInt(x(274)) / 2 + parseInt(x(259)) / 3 + parseInt(x(265)) / 4 + -parseInt(x(279)) / 5 * (-parseInt(x(268)) / 6) + parseInt(x(256)) / 7 + -parseInt(x(277)) / 8 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(it, 520254);
const Ci = E0({ name: st(275), props: { duration: { type: Number, default: 3 }, enableCompass: { type: Boolean, default: !0 }, enableZoomControls: { type: Boolean, default: !0 }, enableDistanceLegend: { type: Boolean, default: !1 }, enableCompassOuterRing: { type: Boolean, default: !0 }, resetTooltip: { type: String, default: "重置" }, zoomInTooltip: { type: String, default: "放大" }, zoomOutTooltip: { type: String, default: "缩小" }, defaultResetView: { type: Object, default: void 0 }, orientation: { type: Object, default: void 0 } }, setup(t) {
  const e = st, x = n2(), n = (r) => {
    const i = A2, c = x[i(273)];
    if (!c) {
      console.warn("请先开启navigation 功能");
      return;
    }
    c[i(266)][i(272)] = r;
  };
  Px(() => t[e(276)], (r) => {
    n(r);
  });
  const a = (r) => {
    const i = e, c = x.value;
    if (!c) {
      console[i(262)](i(278));
      return;
    }
    c[i(260)][i(267)] = r;
  }, s = ir({ show: !1, x: 0, y: 0 });
  return Px(() => t[e(267)], (r) => {
    a(r);
  }), C0((r) => {
    const i = e;
    x[i(273)] = new _r(r, t), s2(() => {
      const c = i, o = document[c(270)](c(261));
      if (!o) return;
      const u = () => {
        const l = c, _ = o.getBoundingClientRect();
        s.x = _.x + _[l(271)] / 2, s.y = _.y, s[l(264)] = !0;
      };
      o[c(263)](c(257), u);
    });
  }), () => cr(wi, { show: s[e(264)], x: s.x, y: s.y, "onUpdate:show": (r) => s.show = r, onSelect: (r) => {
    const i = e;
    s[i(264)] = !1, Jn(r);
  } });
} }), Ut = Ci;
Ut[st(258)] = function(t) {
  const e = st;
  t.component(e(275), Ut);
};
function it() {
  const t = ["error", "addEventListener", "show", "67676IFMqZh", "navigationViewModel", "enableDistanceLegend", "7668TmCdMP", "254206zKoFIf", "querySelector", "width", "showCompass", "value", "2011414JLMAen", "CNavigation", "enableCompass", "4647112xOCPnA", "请先开启navigation 功能", "3765YiORTy", "5402831AOgJCK", "mouseenter", "install", "1829910GUkCQF", "distanceLegendViewModel", ".distance-legend"];
  return it = function() {
    return t;
  }, it();
}
function A2(t, e) {
  return t = t - 256, it()[t];
}
const Yt = J0;
(function(t, e) {
  const x = J0, n = t();
  for (; ; )
    try {
      if (-parseInt(x(492)) / 1 * (-parseInt(x(498)) / 2) + -parseInt(x(497)) / 3 * (-parseInt(x(508)) / 4) + parseInt(x(507)) / 5 + -parseInt(x(495)) / 6 * (-parseInt(x(478)) / 7) + -parseInt(x(499)) / 8 * (-parseInt(x(493)) / 9) + parseInt(x(487)) / 10 + -parseInt(x(482)) / 11 * (parseInt(x(477)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ct, 920899);
function J0(t, e) {
  return t = t - 477, ct()[t];
}
const Si = { class: Yt(481) }, Ei = { class: "c-scale__label" };
function ct() {
  const t = ["barWidth", "1179738DYohRv", "pick", "834siHEeX", "2802wdpaWn", "24464AtwAGS", "cartesianToCartographic", "count", "scene", "length", "getPickRay", "preUpdate", "label", "3581385jSMicy", "12940yoWNsp", "postUpdate", "scale", "div", "CScale", "240FtxsGi", "49nxdGQn", "globe", "addEventListener", "c-scale", "2194313hMNEax", "camera", "ellipsoid", "canvas", "clientWidth", "2535420uRiINr", "requestRender", "change", "value", "push", "1147HbwbuF", "171eklqYF"];
  return ct = function() {
    return t;
  }, ct();
}
const Mi = E0({ name: Yt(512), __name: Yt(510), props: { count: { type: Number, default: 3 }, updateType: { type: String, default: "change" } }, setup(t) {
  const e = t, x = [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 3e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 2e7, 3e7, 5e7], n = K0([]), a = new x2(), s = (c) => {
    const o = J0, u = c[o(485)][o(486)], l = c.canvas.clientHeight, _ = c[o(483)][o(504)](new $(u / 2 | 0, l - 1)), f = c[o(483)].getPickRay(new $(1 + u / 2 | 0, l - 1)), d = c[o(479)], p = d[o(496)](_, c), h = d[o(496)](f, c);
    if (!G(p) || !G(h)) {
      n[o(490)] = [];
      return;
    }
    const v = d[o(484)][o(500)](p), E = d[o(484)].cartesianToCartographic(h);
    a.setEndPoints(v, E);
    const T = a.surfaceDistance, N = 100;
    let k;
    for (let A = x[o(503)] - 1; !G(k) && A >= 0; --A)
      if (x[A] / T < N) {
        k = x[A];
        break;
      }
    if (!G(k)) {
      n[o(490)] = [];
      return;
    }
    r(k, T);
  }, r = (c, o) => {
    const u = J0;
    let l = c, _ = " m";
    c >= 1e3 && (l = c / 1e3, _ = " km");
    const f = [];
    for (let d = 1; d <= e[u(501)]; d++)
      f[u(491)]({ label: l * d + _, barWidth: c / o | 0 });
    n[u(490)] = f;
  };
  let i;
  return C0((c) => {
    const o = J0, u = () => {
      const l = J0;
      s(c[l(502)]), n[l(490)].length ? c[l(502)][l(509)].removeEventListener(u) : c[l(502)][l(488)]();
    };
    if (c[o(502)][o(509)].addEventListener(u), e.updateType === o(489)) {
      i = c[o(483)].changed.addEventListener(() => s(c[o(502)]));
      return;
    }
    i = c.scene[o(505)][o(480)](s);
  }), Ax(() => {
    i == null || i();
  }), (c, o) => {
    const u = J0;
    return or((p0(), z0(u(511), Si, [(p0(!0), z0(wn, null, Cn(n[u(490)], (l) => {
      const _ = u;
      return p0(), z0(_(511), { key: l[_(506)] }, [y0("div", Ei, r2(l[_(506)]), 1), y0("div", { class: "c-scale__bar", style: fr({ width: l[_(494)] + "px" }) }, null, 4)]);
    }), 128))], 512)), [[ur, !!n[u(490)][u(503)]]]);
  };
} }), Sa = /* @__PURE__ */ Wx(Mi, [["__scopeId", "data-v-8289bc1b"]]);
function L2(t, e) {
  return t = t - 467, ot()[t];
}
const $x = L2;
function ot() {
  const t = ["div", "scale-select", "10272OExOHS", "1:5万", "onClick", "el-popover", "data", "6085CkbhHw", "277962TdoJlt", "1:25万", "190iEdaIG", "$attrs", "544392KSDpKF", "popover", "474RfyRlR", "1631vrLIHx", "736HXyypf", "4KYTySH", "ratio", "1:1400万", "log", "1:50万", "CScaleSelect", "label", "3476724wUDJvN", "324YkIbnI", "208758VxvzAq"];
  return ot = function() {
    return t;
  }, ot();
}
(function(t, e) {
  const x = L2, n = t();
  for (; ; )
    try {
      if (parseInt(x(476)) / 1 * (parseInt(x(485)) / 2) + parseInt(x(482)) / 3 * (-parseInt(x(470)) / 4) + parseInt(x(475)) / 5 * (parseInt(x(493)) / 6) + -parseInt(x(483)) / 7 * (parseInt(x(484)) / 8) + parseInt(x(480)) / 9 + -parseInt(x(478)) / 10 * (-parseInt(x(467)) / 11) + -parseInt(x(492)) / 12 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ot, 325805);
const Ti = [$x(472)], Pi = E0({ name: $x(490), __name: $x(469), setup(t) {
  const e = $x, x = (a) => {
    const s = L2;
    Jn(a[s(486)]), console[s(488)](s(474), a);
  }, n = [{ ratio: 1, label: e(487) }, { ratio: 4, label: "1:100万" }, { ratio: 5, label: e(489) }, { ratio: 13.5, label: e(477) }, { ratio: 60, label: e(471) }, { ratio: 200, label: "1:1万" }];
  return (a, s) => {
    const r = e, i = Tx(r(473));
    return p0(), It(i, V2(O2(a[r(479)][r(481)])), { reference: Xx(() => [Gt(Sa, V2(O2(a[r(479)])), null, 16)]), default: Xx(() => [y0(r(468), null, [(p0(), z0(wn, null, Cn(n, (c) => {
      const o = r;
      return y0(o(468), { key: c[o(486)], onClick: (u) => x(c) }, r2(c[o(491)]), 9, Ti);
    }), 64))])]), _: 1 }, 16);
  };
} }), $t = Ea;
(function(t, e) {
  const x = Ea, n = t();
  for (; ; )
    try {
      if (-parseInt(x(460)) / 1 + parseInt(x(455)) / 2 + parseInt(x(450)) / 3 * (-parseInt(x(454)) / 4) + parseInt(x(458)) / 5 + -parseInt(x(452)) / 6 * (parseInt(x(459)) / 7) + -parseInt(x(451)) / 8 + parseInt(x(449)) / 9 * (parseInt(x(457)) / 10) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ft, 544744);
function Ea(t, e) {
  return t = t - 449, ft()[t];
}
const Jt = Sa;
Jt[$t(453)] = function(t) {
  t[$t(456)]("CScale", Jt);
};
const Kt = Pi;
Kt[$t(453)] = function(t) {
  t.component("CScaleSelect", Kt);
};
function ft() {
  const t = ["install", "8PGcsBS", "382598BlhaES", "component", "85630PPtmvM", "473875RGzUbK", "49DOgqiM", "962432dNlDdF", "3357TiopkK", "1335483uRiFNL", "3125728mkccJs", "593022CIrPIj"];
  return ft = function() {
    return t;
  }, ft();
}
(function(t, e) {
  const x = sx, n = t();
  for (; ; )
    try {
      if (-parseInt(x(340)) / 1 * (parseInt(x(335)) / 2) + parseInt(x(352)) / 3 + -parseInt(x(350)) / 4 * (parseInt(x(353)) / 5) + parseInt(x(357)) / 6 * (parseInt(x(339)) / 7) + -parseInt(x(356)) / 8 * (-parseInt(x(334)) / 9) + parseInt(x(343)) / 10 * (parseInt(x(355)) / 11) + -parseInt(x(317)) / 12 * (parseInt(x(331)) / 13) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ut, 194152);
function sx(t, e) {
  return t = t - 317, ut()[t];
}
function ut() {
  const t = ["fromCssColorString", "value", "fromRotationZ", "14pBVqYb", "45326chQcMP", "destroy", "model-view", "3470JGufhK", "viewRef", "boundingSphere", "camera", "display", "static/", "ZERO", "12212zGokoS", "then", "449121lcAkhX", "230yAhrro", "div", "2552HSfSdy", "176wlgGpB", "515328PjGTbi", "36gRIPtx", "scene", "scale", "isRotation", "addEventListener", "toRadians", "primitives", "backgroundColor", "style", "fromRotationTranslation", "removeAll", "add", "includes", "undefined", "303173BDrWee", "模型正在开发中...", "modelMatrix", "93762tRGhVm", "10GzTSZh"];
  return ut = function() {
    return t;
  }, ut();
}
const Di = E0({ name: "CModelView", __name: "model-view", props: { url: { type: String, default: "" }, scale: { type: Number, default: 1 }, backgroundColor: { type: String, default: "#fff" }, isRotation: { type: Boolean, default: !1 } }, setup(t) {
  const e = t, x = K0(), n = n2();
  let a = null;
  const s = (c) => {
    let o = 0;
    i(), a = setInterval(() => {
      const u = sx;
      o += o0[u(322)](1);
      let l = bn[u(338)](o);
      c[u(333)] = tr[u(326)](l);
    }, 100);
  }, r = async (c) => {
    var l, _;
    const o = sx;
    if ((l = n.value) == null || l[o(318)][o(323)][o(327)](), !c || c[o(329)]("*") || c[o(329)](o(330)) || c === o(348)) {
      hr.warning(o(332));
      return;
    }
    const u = await er.fromGltfAsync({ url: c, scale: e[o(319)] });
    (_ = n[o(337)]) == null || _[o(318)][o(323)][o(328)](u), await new Promise((f) => {
      const d = o;
      u.ready ? f() : u.readyEvent[d(321)](() => f());
    }), n[o(337)][o(346)].viewBoundingSphere(u[o(345)]), e[o(320)] && s(u);
  };
  Px(() => e.url, (c) => {
    r(c);
  }), yn(() => {
    const c = sx;
    s2()[c(351)](() => {
      const o = c, u = new Za(x.value, { globe: !1, skyBox: !1 });
      u[o(318)][o(324)] = F[o(336)](e.backgroundColor);
      const l = o0.toRadians(50), _ = o0.toRadians(-20), f = 20;
      u.camera.lookAt(I[o(349)], new xr(l, _, f)), u._innerCreditContainer[o(325)][o(347)] = "none", n[o(337)] = u, r(e.url);
    });
  });
  const i = () => {
    a && (clearInterval(a), a = null);
  };
  return vn(() => {
    var o;
    const c = sx;
    i(), (o = n[c(337)]) == null || o[c(341)](), n[c(337)] = void 0;
  }), (c, o) => {
    const u = sx;
    return p0(), z0(u(354), { class: u(342), ref_key: u(344), ref: x }, null, 512);
  };
} }), ki = /* @__PURE__ */ Wx(Di, [["__scopeId", "data-v-a5b8f375"]]), rn = Ma;
(function(t, e) {
  const x = Ma, n = t();
  for (; ; )
    try {
      if (parseInt(x(249)) / 1 * (-parseInt(x(253)) / 2) + parseInt(x(254)) / 3 + -parseInt(x(247)) / 4 * (-parseInt(x(250)) / 5) + -parseInt(x(246)) / 6 + -parseInt(x(245)) / 7 * (parseInt(x(248)) / 8) + parseInt(x(255)) / 9 * (-parseInt(x(251)) / 10) + -parseInt(x(257)) / 11 * (-parseInt(x(252)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(lt, 429444);
function lt() {
  const t = ["2465139olgjpp", "7322499iDfSJE", "CModelView", "11EttnMc", "install", "5793753VWdfdI", "3634914XLlecw", "605892rMhtee", "8rTCDAg", "847JmXwIC", "15ACNknH", "10JSwBCG", "18441456SVtPMS", "322eOiggM"];
  return lt = function() {
    return t;
  }, lt();
}
const Xt = ki;
Xt[rn(258)] = function(t) {
  const e = rn;
  t.component(e(256), Xt);
};
function Ma(t, e) {
  return t = t - 245, lt()[t];
}
/*! Element Plus Icons Vue v2.3.2 */
var Ai = /* @__PURE__ */ E0({
  name: "MapLocation",
  __name: "map-location",
  setup(t) {
    return (e, x) => (p0(), z0("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y0("path", {
        fill: "currentColor",
        d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
      }),
      y0("path", {
        fill: "currentColor",
        d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256m345.6 192L960 960H672v-64H352v64H64l102.4-256zm-68.928 0H235.328l-76.8 192h706.944z"
      })
    ]));
  }
}), Li = Ai;
const P0 = Ta;
(function(t, e) {
  const x = Ta, n = t();
  for (; ; )
    try {
      if (parseInt(x(278)) / 1 * (-parseInt(x(267)) / 2) + -parseInt(x(280)) / 3 * (-parseInt(x(270)) / 4) + -parseInt(x(289)) / 5 + parseInt(x(274)) / 6 + parseInt(x(284)) / 7 + parseInt(x(269)) / 8 * (-parseInt(x(287)) / 9) + parseInt(x(281)) / 10 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(dt, 869400);
function Ta(t, e) {
  return t = t - 266, dt()[t];
}
function dt() {
  const t = ["63324DvTMyu", "update:longitude", "CInputPosition", "split", "6758388sxHECo", "modelValue", "showPick", "crosshair", "165143jGqnvO", "suffix", "201WPHHaD", "15251690AlEmIZ", "position", "input-position", "9734550CPSFDW", "log", "value", "2080908okhPYy", "update:modelValue", "7295045BeIhGn", "after-pickup", "update:latitude", "separate", "pick-icon", "update:altitude", "before-pickup", "14YUpkVa", "el-input", "56vQMXTr"];
  return dt = function() {
    return t;
  }, dt();
}
const Ni = E0({ name: P0(272), __name: P0(283), props: { modelValue: { type: String, default: "" }, showPick: { type: Boolean, default: !0 }, separate: { type: String, default: "," }, longitude: { type: Number, default: 0 }, latitude: { type: Number, default: 0 }, altitude: { type: Number, default: 0 } }, emits: [P0(288), P0(271), P0(291), P0(294), P0(266), P0(290)], setup(t, { emit: e }) {
  const x = P0, n = e, a = t, s = K0(a[x(275)] ?? ""), r = (f) => {
    const d = x;
    s[d(286)] = f, n(d(288), f);
  }, i = (f) => {
    const d = Number(f);
    return isNaN(d) ? 0 : d;
  }, c = (f) => {
    n(x(271), i(f));
  }, o = (f) => {
    n(x(291), i(f));
  }, u = (f) => {
    n(x(294), i(f));
  };
  Px(() => s.value, (f) => {
    const d = x;
    if (!f) return;
    console[d(285)]("value", f);
    const [p, h, v] = f[d(273)](a[d(292)]);
    c(p), o(h), u(v);
  }, { immediate: !0 });
  let l;
  const _ = (f) => {
    const d = x;
    n(d(266), f), i0(d(277)), l = Dr(({ position: p }) => {
      const h = d, v = F0(p[h(282)]);
      if (n("after-pickup", v), i0(""), v) {
        const { latitude: E, longitude: T, height: N } = v, k = a.separate;
        r("" + T + k + E + k + N);
      }
      l();
    });
  };
  return Ax(() => {
    l == null || l(), i0("");
  }), (f, d) => {
    const p = x, h = Tx("el-icon"), v = Tx(p(268));
    return p0(), It(v, lr(f.$attrs, { modelValue: s[p(286)], "onUpdate:modelValue": d[0] || (d[0] = (E) => s[p(286)] = E) }), dr({ _: 2 }, [t[p(276)] ? { name: p(279), fn: Xx(() => [Gt(h, { class: p(293), onClick: _ }, { default: Xx(() => [Gt(gt(Li))]), _: 1 })]), key: "0" } : void 0]), 1040, ["modelValue"]);
  };
} }), Vi = /* @__PURE__ */ Wx(Ni, [["__scopeId", "data-v-286928ba"]]), sn = Pa;
(function(t, e) {
  const x = Pa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(364)) / 1 * (parseInt(x(355)) / 2) + -parseInt(x(359)) / 3 + parseInt(x(362)) / 4 + parseInt(x(356)) / 5 * (parseInt(x(367)) / 6) + -parseInt(x(366)) / 7 * (parseInt(x(360)) / 8) + parseInt(x(358)) / 9 + -parseInt(x(363)) / 10 * (-parseInt(x(365)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(pt, 696525);
const qt = Vi;
qt[sn(361)] = function(t) {
  t[sn(357)]("CInputPosition", qt);
};
function pt() {
  const t = ["2483175wJiVef", "993688xmIkKg", "install", "1592760jxXIOf", "2878010sgJYyr", "50329dDmQfe", "44tQVajG", "77lNMMRg", "663132wvJtCT", "12AsnOXq", "35xuRfaP", "component", "7825473mjQoVX"];
  return pt = function() {
    return t;
  }, pt();
}
function Pa(t, e) {
  return t = t - 355, pt()[t];
}
const R0 = Da;
(function(t, e) {
  const x = Da, n = t();
  for (; ; )
    try {
      if (parseInt(x(236)) / 1 + parseInt(x(224)) / 2 * (parseInt(x(239)) / 3) + -parseInt(x(235)) / 4 * (-parseInt(x(244)) / 5) + parseInt(x(241)) / 6 * (parseInt(x(243)) / 7) + -parseInt(x(238)) / 8 * (-parseInt(x(240)) / 9) + -parseInt(x(231)) / 10 + -parseInt(x(242)) / 11 === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_t, 314130);
function _t() {
  const t = ["emptyOption", "2QMaRBr", "replace", "entityOption", "forEach", "warn", "clear", "situationRightMenu", "2711800XcFxVi", "右键菜单的key必须是唯一值 ", "key", "rightClickCallback", "140XjxTFB", "324632Yphwqo", "values", "8goolrb", "1041366eatypx", "2354598EPgcVP", "168936ombJim", "13078406TvpFOU", "140iTCxsM", "39680SWNbJx"];
  return _t = function() {
    return t;
  }, _t();
}
function Da(t, e) {
  return t = t - 223, _t()[t];
}
const wo = Sn(R0(230), { state() {
  return { rightMenuSelectData: null, menuShow: !1, menuX: 0, menuY: 0, cartesian2: new $(0, 0), entityOption: {}, emptyOption: {}, rightClickCallback: /* @__PURE__ */ new Set() };
}, getters: { getterEntityMenuOptions: (t) => {
  const e = R0;
  return Object[e(237)](t[e(226)]);
}, getterEmptyMenuOptions: (t) => {
  const e = R0;
  return Object[e(237)](t[e(223)]);
} }, actions: { pushEntityOption(t, e) {
  const x = R0;
  !W2(t) && (t = [t]);
  const n = this[x(226)];
  t[x(227)]((a) => {
    const s = x;
    if (e != null && e[s(225)]) {
      n[a[s(233)]] = a;
      return;
    }
    if (n[a[s(233)]]) {
      console[s(228)](s(232) + a[s(233)]);
      return;
    }
    n[a[s(233)]] = a;
  });
}, removeEntityOptionByKey(t) {
  const e = R0;
  if (Ft(t)) {
    delete this[e(226)][t];
    return;
  }
  t[e(227)]((x) => {
    const n = e;
    delete this[n(226)][x];
  });
}, pushEmptyOption(t, e) {
  const x = R0;
  !W2(t) && (t = [t]);
  const n = this[x(223)];
  t.forEach((a) => {
    const s = x;
    if (e != null && e[s(225)]) {
      n[a[s(233)]] = a;
      return;
    }
    if (n[a[s(233)]]) {
      console[s(228)](s(232) + a[s(233)]);
      return;
    }
    n[a[s(233)]] = a;
  });
}, removeEmptyOptionByKey(t) {
  const e = R0;
  if (Ft(t)) {
    delete this[e(223)][t];
    return;
  }
  t.forEach((x) => {
    const n = e;
    delete this[n(223)][x];
  });
}, clearOptions() {
  const t = R0;
  this[t(226)] = {}, this[t(223)] = {}, this[t(234)][t(229)]();
} } }), I0 = ka;
function ka(t, e) {
  return t = t - 403, ht()[t];
}
(function(t, e) {
  const x = ka, n = t();
  for (; ; )
    try {
      if (-parseInt(x(408)) / 1 + parseInt(x(427)) / 2 * (-parseInt(x(432)) / 3) + -parseInt(x(425)) / 4 * (-parseInt(x(412)) / 5) + parseInt(x(429)) / 6 + parseInt(x(414)) / 7 * (parseInt(x(419)) / 8) + parseInt(x(423)) / 9 + parseInt(x(415)) / 10 * (-parseInt(x(417)) / 11) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ht, 735708);
function ht() {
  const t = ["1410CrWwKl", "group", "7AgzDKd", "3022790hhHURj", "isShow", "55xwQtpp", "forEach", "601736tfBcFg", "menuMap", "eventList", "setMenu", "12728394BrqMxO", "data", "19556ZSrwVf", "divider", "26olRxLN", "key", "731376adGaRm", "add", "values", "162141dCoQTi", "length", "show", "$reset", "cachePosition", "keys", "40363fVmFCs", "some", "cesiumRightMenu", "posOffset"];
  return ht = function() {
    return t;
  }, ht();
}
const Oi = Sn(I0(410), { state() {
  return { isShow: !1, posOffset: { x: 0, y: 0 }, menuMap: { baseGroup: {}, otherGroup: {} }, eventList: {}, rightClickEvent: /* @__PURE__ */ new Set(), cachePosition: null };
}, getters: { menuOptions(t) {
  const e = I0, x = t[e(420)], n = [];
  return Object[e(431)](x).forEach((a, s) => {
    const r = e, i = Object.values(a);
    i[r(403)] && (n.push(...i), s !== Object.values(x)[r(403)] - 1 && n.push({ type: r(426), show: i[r(409)]((c) => c[r(404)]) }));
  }), n;
} }, actions: { setMenu(t, e) {
  const x = I0;
  !this[x(420)][t[x(413)]] && (this[x(420)][t[x(413)]] = {}), this[x(420)][t[x(413)]][t[x(428)]] = t, e && (this.eventList[t[x(428)]] = e);
}, setMenus(t) {
  const e = I0;
  t[e(418)]((x) => {
    const n = e;
    this[n(422)](x[n(424)], x.event);
  });
}, clearMenu() {
  const t = I0;
  Object[t(407)](this[t(420)])[t(418)]((e) => {
    const x = t;
    this[x(420)][e] = {};
  }), this[t(421)] = {};
}, clearByGroup(t) {
  const e = I0;
  this[e(420)][t] = {};
}, executeFilter(t) {
  const e = I0;
  t && (this[e(406)] = t);
  const x = t ?? this[e(406)];
  Object[e(431)](this[e(420)])[e(418)]((n) => {
    const a = e;
    Object[a(431)](n)[a(418)]((s) => {
      var i;
      const r = a;
      s[r(404)] = ((i = s.isShow) == null ? void 0 : i.call(s, { data: s, position: x })) ?? !1;
    });
  });
}, setRightClick(t) {
  const e = I0;
  this.rightClickEvent[e(430)](t);
}, setOffset(t, e) {
  const x = I0;
  this[x(411)] = { x: t, y: e };
}, reset() {
  this[I0(405)]();
}, closeMenu() {
  const t = I0;
  this[t(416)] = !1;
} } });
(function(t, e) {
  const x = Aa, n = t();
  for (; ; )
    try {
      if (-parseInt(x(373)) / 1 * (parseInt(x(377)) / 2) + parseInt(x(368)) / 3 + parseInt(x(370)) / 4 * (parseInt(x(376)) / 5) + -parseInt(x(374)) / 6 * (parseInt(x(369)) / 7) + parseInt(x(367)) / 8 * (-parseInt(x(375)) / 9) + -parseInt(x(366)) / 10 + -parseInt(x(372)) / 11 * (-parseInt(x(365)) / 12) === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(bt, 965577);
function bt() {
  const t = ["3313785cDBidL", "10pbhCwB", "31521528eexJFm", "8265220eWXxRV", "30664huZEPk", "4870395NFEbMe", "329245Yhojsg", "8FIdPmw", "use", "11aoaNqT", "19945EvVFYC", "246QVtLLX", "4122cMmQjl"];
  return bt = function() {
    return t;
  }, bt();
}
const Co = { install(t) {
  const e = Aa;
  t[e(371)](Bt), t[e(371)](jt), t[e(371)](Ht), t[e(371)](Ut), t[e(371)](Jt), t[e(371)](Kt), t[e(371)](Xt), t[e(371)](qt);
} };
function Aa(t, e) {
  return t = t - 365, bt()[t];
}
(function(t, e) {
  for (var x = Ri, n = t(); ; )
    try {
      var a = -parseInt(x(192)) / 1 * (-parseInt(x(195)) / 2) + parseInt(x(191)) / 3 * (parseInt(x(189)) / 4) + -parseInt(x(190)) / 5 + -parseInt(x(196)) / 6 + -parseInt(x(188)) / 7 + -parseInt(x(197)) / 8 + parseInt(x(194)) / 9 * (parseInt(x(193)) / 10);
      if (a === e) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(mt, 620267);
function mt() {
  var t = ["381849PzturW", "490367pnKeJo", "10yUepAo", "12500694NAZQNP", "2xOybHq", "1279452VpEzUK", "4269408dyBIDE", "5780306mMSJRG", "16cQbTzw", "977610WxZGBz"];
  return mt = function() {
    return t;
  }, mt();
}
function Ri(t, e) {
  t = t - 188;
  var x = mt(), n = x[t];
  return n;
}
ai();
export {
  jt as CInfoPopup,
  qt as CInputPosition,
  Xt as CModelView,
  Ut as CNavigation,
  Ht as CRightMenu,
  Jt as CScale,
  Kt as CScaleSelect,
  Bt as CViewer,
  nc as ClearViewer,
  Io as CustomMeasuredGraticule,
  hx as EllipseDiffuseMaterialProperty,
  ws as GraphicType,
  go as MeasuredGraticule,
  yo as MultipleSelectViewModel,
  rs as RunStepFn,
  vo as SelectedPrimitiveModel,
  Co as SimpleCesium,
  ho as VelocityOrientationProperty,
  ia as VelocityVectorProperty,
  bo as VelocityVectorRotationProperty,
  mo as WGS84GridLayer,
  co as WGS84TransformToJ2000,
  Sc as addConnectChart,
  Ic as addDefaultTerrain,
  Ur as addImageryProvider,
  Xr as addTerrain,
  Rs as assign,
  Ui as billboardDefaultConfig,
  po as calculateAreaByPoints,
  _o as calculateDestination,
  Ac as cameraFlyTo,
  aa as cartesian3ToDegrees,
  ro as cartesian3ToDegrees2,
  yc as changeSceneMode2D,
  vc as changeSceneMode3D,
  wc as changeSceneModeColumbus,
  cx as clearEntitySourceBySourceName,
  Hr as clearImageryWeak,
  io as computedGroundDistance,
  so as computedGroundDistanceByDegrees,
  uc as createCzmlSource,
  Uc as createEntity,
  Wr as createEntityDatasource,
  ox as createEntitySource,
  Lr as createViewer,
  pc as createWebMapServiceImageryProvider,
  $r as createWebTileMapServiceImageryProvider,
  ix as createdEventList,
  oc as dataSourceClearEntity,
  v0 as defaultConfig,
  jr as deleteDatasourceByName,
  fc as deleteEntitySourceByViewer,
  Nr as deleteViewerFromMap,
  Vr as destroyViewer,
  Fr as emitViewerCreated,
  Xi as executeClearEvent,
  zr as executeDestroyed,
  ss as executeFirstStepFn,
  Zr as firstPerspectiveEvent,
  kc as flyToRectangle,
  Rn as generateMountFn,
  h2 as generateSceneModeChange,
  Xc as getAllMap,
  Yi as getBillboardImage,
  X0 as getCamera,
  Yn as getCameraField,
  Nc as getCameraHeight,
  lo as getCenterByPoints,
  Gx as getClock,
  zx as getClockField,
  Wt as getCoordinatesFromFeature,
  Oc as getCurrentCameraPosition,
  is as getCurrentTimeDayJs,
  ve as getCurrentTimeJulian,
  ic as getCzmlSourceByName,
  Yc as getEntityById,
  G2 as getEntityByPosition,
  vs as getEntityConstantPosition,
  Br as getEntityDatasource,
  $c as getEntityMetaData,
  Zn as getEntityPosition,
  gs as getEntityProperties,
  ys as getEntityPropertyByName,
  Jc as getEntitySampledPosition,
  S0 as getEntitySource,
  Gs as getFieldByInstance,
  _c as getImageryProviderByCode,
  hc as getImageryProviderList,
  k0 as getImageryWeakByViewer,
  ds as getInfinityTime,
  Hc as getMultiplier,
  cc as getOrCreateEntitySource,
  $i as getPrimitiveByPosition,
  Ct as getScene,
  bs as getShouldAnimate,
  _s as getSpeed,
  Fc as getStartTimeDayJs,
  zc as getStartTimeJulian,
  Bc as getStopTimeDayJs,
  Wc as getStopTimeJulian,
  Le as getTurfPoint,
  uo as getTurnPolygon,
  Y2 as getTwoPointsCenter,
  Pt as getTwoPointsDistance,
  B as getViewer,
  Gr as getViewerCanvas,
  Rr as getViewerContainer,
  Nx as getViewerField,
  R as getViewerName,
  oo as getWorldPosition,
  On as hasEntitySource,
  _2 as hasImageryProviderByViewer,
  Ji as hasPrimitiveByPosition,
  mc as hasTerrain,
  ac as hasViewer,
  rc as hasViewerWithWarn,
  Or as hiddenAdvertise,
  Jr as hiddenImageryProvider,
  Kr as imageryProviderIsShow,
  W2 as isArray,
  ms as isCustomDatasource,
  Is as isCzmlDatasource,
  lx as isDataType,
  Es as isDefine,
  no as isMap,
  B2 as isNumber,
  Ss as isObject,
  ao as isSet,
  Ft as isString,
  Ln as isViewer,
  wr as labelDefaultConfig,
  gc as loadOceanImageryLayer,
  qr as locationFuzzyQuery,
  y2 as nextTick,
  Lc as onCameraChange,
  Ki as onClearEvent,
  ec as onCtrlLeftClick,
  tc as onCtrlLeftDown,
  kr as onDoubleClick,
  Rc as onFirstStep,
  Dr as onLeftClick,
  q0 as onLeftDown,
  f2 as onLeftUp,
  l2 as onMouseMove,
  xc as onMoveEntity,
  Qi as onPostRender,
  kn as onPreUpdate,
  u2 as onRightClick,
  Cc as onSceneChange,
  Zi as onTick,
  C0 as onViewerCreated,
  Vx as onViewerDestroyed,
  ai as registryMaterial,
  qi as removeAllClearEvent,
  Yr as removeAllImageryProvider,
  Ec as removeConnectChart,
  Dc as removeFirstPerspective,
  lc as removeImageryWeak,
  xs as resetCameraController,
  bc as resetTerrain,
  v2 as screenPosToCartesian,
  F0 as screenPosToLBH,
  ra as screenToDegrees,
  Vc as setCameraHeight,
  Jn as setCameraScale,
  Qn as setClockValueByField,
  z2 as setCurrentTime,
  cs as setCurrentTimeJulian,
  es as setDefaultCamera,
  Kc as setEntityPosition,
  Pc as setFirstPerspective,
  dc as setImageryProvider,
  Gn as setImageryWeak,
  Mc as setSelectedEntity,
  hs as setShouldAnimate,
  F2 as setSpeed,
  fs as setStartTime,
  os as setStartTimeJulian,
  ls as setStopTime,
  ps as setStopTimeInfinity,
  us as setStopTimeJulian,
  Hi as setToken,
  Tc as setTrackedEntity,
  i0 as setViewerCursor,
  Nn as setViewerValueByField,
  Gc as synchronizeTime,
  fo as translateByHeight,
  Mo as turfArea,
  To as turfPolygon,
  to as useCreatePlaceEntity,
  eo as useDrawEllipsisArea,
  qc as useDrawPointArea,
  xo as useDrawPolygonArea,
  Qc as useDrawPolylineArea,
  Zc as useDrawRectangleArea,
  Oi as useRightMenu,
  wo as useRightMenuOptionStore,
  sc as viewerFlyTo,
  G0 as viewerMap,
  zn as visibleImageryProvider,
  jc as watchCurrentTime
};
