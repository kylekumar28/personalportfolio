/*! For license information please see main.586da52c.js.LICENSE.txt */
(() => {
	var e = {
			4: (e, t, n) => {
				"use strict";
				var r = n(853),
					i = n(43),
					a = n(950);
				function o(e) {
					var t = "https://react.dev/errors/" + e;
					if (1 < arguments.length) {
						t += "?args[]=" + encodeURIComponent(arguments[1]);
						for (var n = 2; n < arguments.length; n++)
							t += "&args[]=" + encodeURIComponent(arguments[n]);
					}
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				function s(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType)
					);
				}
				var l = Symbol.for("react.element"),
					c = Symbol.for("react.transitional.element"),
					u = Symbol.for("react.portal"),
					d = Symbol.for("react.fragment"),
					f = Symbol.for("react.strict_mode"),
					h = Symbol.for("react.profiler"),
					p = Symbol.for("react.provider"),
					m = Symbol.for("react.consumer"),
					g = Symbol.for("react.context"),
					y = Symbol.for("react.forward_ref"),
					v = Symbol.for("react.suspense"),
					_ = Symbol.for("react.suspense_list"),
					b = Symbol.for("react.memo"),
					w = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var k = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"),
					Symbol.for("react.tracing_marker");
				var S = Symbol.for("react.memo_cache_sentinel"),
					C = Symbol.iterator;
				function E(e) {
					return null === e || "object" !== typeof e
						? null
						: "function" ===
						  typeof (e = (C && e[C]) || e["@@iterator"])
						? e
						: null;
				}
				var x = Symbol.for("react.client.reference");
				function T(e) {
					if (null == e) return null;
					if ("function" === typeof e)
						return e.$$typeof === x
							? null
							: e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case d:
							return "Fragment";
						case u:
							return "Portal";
						case h:
							return "Profiler";
						case f:
							return "StrictMode";
						case v:
							return "Suspense";
						case _:
							return "SuspenseList";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case g:
								return (
									(e.displayName || "Context") + ".Provider"
								);
							case m:
								return (
									(e._context.displayName || "Context") +
									".Consumer"
								);
							case y:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !==
											(e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case b:
								return null !== (t = e.displayName || null)
									? t
									: T(e.type) || "Memo";
							case w:
								(t = e._payload), (e = e._init);
								try {
									return T(e(t));
								} catch (n) {}
						}
					return null;
				}
				var P,
					N,
					I =
						i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
					A = Object.assign;
				function O(e) {
					if (void 0 === P)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							(P = (t && t[1]) || ""),
								(N =
									-1 < n.stack.indexOf("\n    at")
										? " (<anonymous>)"
										: -1 < n.stack.indexOf("@")
										? "@unknown:0:0"
										: "");
						}
					return "\n" + P + e + N;
				}
				var R = !1;
				function D(e, t) {
					if (!e || R) return "";
					R = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						var r = {
							DetermineComponentFrameRoot: function () {
								try {
									if (t) {
										var n = function () {
											throw Error();
										};
										if (
											(Object.defineProperty(
												n.prototype,
												"props",
												{
													set: function () {
														throw Error();
													},
												}
											),
											"object" === typeof Reflect &&
												Reflect.construct)
										) {
											try {
												Reflect.construct(n, []);
											} catch (i) {
												var r = i;
											}
											Reflect.construct(e, [], n);
										} else {
											try {
												n.call();
											} catch (a) {
												r = a;
											}
											e.call(n.prototype);
										}
									} else {
										try {
											throw Error();
										} catch (o) {
											r = o;
										}
										(n = e()) &&
											"function" === typeof n.catch &&
											n.catch(function () {});
									}
								} catch (s) {
									if (s && r && "string" === typeof s.stack)
										return [s.stack, r.stack];
								}
								return [null, null];
							},
						};
						r.DetermineComponentFrameRoot.displayName =
							"DetermineComponentFrameRoot";
						var i = Object.getOwnPropertyDescriptor(
							r.DetermineComponentFrameRoot,
							"name"
						);
						i &&
							i.configurable &&
							Object.defineProperty(
								r.DetermineComponentFrameRoot,
								"name",
								{ value: "DetermineComponentFrameRoot" }
							);
						var a = r.DetermineComponentFrameRoot(),
							o = a[0],
							s = a[1];
						if (o && s) {
							var l = o.split("\n"),
								c = s.split("\n");
							for (
								i = r = 0;
								r < l.length &&
								!l[r].includes("DetermineComponentFrameRoot");

							)
								r++;
							for (
								;
								i < c.length &&
								!c[i].includes("DetermineComponentFrameRoot");

							)
								i++;
							if (r === l.length || i === c.length)
								for (
									r = l.length - 1, i = c.length - 1;
									1 <= r && 0 <= i && l[r] !== c[i];

								)
									i--;
							for (; 1 <= r && 0 <= i; r--, i--)
								if (l[r] !== c[i]) {
									if (1 !== r || 1 !== i)
										do {
											if (
												(r--, 0 > --i || l[r] !== c[i])
											) {
												var u =
													"\n" +
													l[r].replace(
														" at new ",
														" at "
													);
												return (
													e.displayName &&
														u.includes(
															"<anonymous>"
														) &&
														(u = u.replace(
															"<anonymous>",
															e.displayName
														)),
													u
												);
											}
										} while (1 <= r && 0 <= i);
									break;
								}
						}
					} finally {
						(R = !1), (Error.prepareStackTrace = n);
					}
					return (n = e ? e.displayName || e.name : "") ? O(n) : "";
				}
				function L(e) {
					switch (e.tag) {
						case 26:
						case 27:
						case 5:
							return O(e.type);
						case 16:
							return O("Lazy");
						case 13:
							return O("Suspense");
						case 19:
							return O("SuspenseList");
						case 0:
						case 15:
							return (e = D(e.type, !1));
						case 11:
							return (e = D(e.type.render, !1));
						case 1:
							return (e = D(e.type, !0));
						default:
							return "";
					}
				}
				function M(e) {
					try {
						var t = "";
						do {
							(t += L(e)), (e = e.return);
						} while (e);
						return t;
					} catch (n) {
						return (
							"\nError generating stack: " +
							n.message +
							"\n" +
							n.stack
						);
					}
				}
				function F(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return),
								(e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function z(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function j(e) {
					if (F(e) !== e) throw Error(o(188));
				}
				function q(e) {
					var t = e.tag;
					if (5 === t || 26 === t || 27 === t || 6 === t) return e;
					for (e = e.child; null !== e; ) {
						if (null !== (t = q(e))) return t;
						e = e.sibling;
					}
					return null;
				}
				var U = Array.isArray,
					W =
						a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
					B = { pending: !1, data: null, method: null, action: null },
					H = [],
					V = -1;
				function $(e) {
					return { current: e };
				}
				function Q(e) {
					0 > V || ((e.current = H[V]), (H[V] = null), V--);
				}
				function Y(e, t) {
					V++, (H[V] = e.current), (e.current = t);
				}
				var K = $(null),
					G = $(null),
					X = $(null),
					J = $(null);
				function Z(e, t) {
					switch ((Y(X, t), Y(G, e), Y(K, null), (e = t.nodeType))) {
						case 9:
						case 11:
							t =
								(t = t.documentElement) && (t = t.namespaceURI)
									? Gu(t)
									: 0;
							break;
						default:
							if (
								((t = (e = 8 === e ? t.parentNode : t).tagName),
								(e = e.namespaceURI))
							)
								t = Xu((e = Gu(e)), t);
							else
								switch (t) {
									case "svg":
										t = 1;
										break;
									case "math":
										t = 2;
										break;
									default:
										t = 0;
								}
					}
					Q(K), Y(K, t);
				}
				function ee() {
					Q(K), Q(G), Q(X);
				}
				function te(e) {
					null !== e.memoizedState && Y(J, e);
					var t = K.current,
						n = Xu(t, e.type);
					t !== n && (Y(G, e), Y(K, n));
				}
				function ne(e) {
					G.current === e && (Q(K), Q(G)),
						J.current === e && (Q(J), (Md._currentValue = B));
				}
				var re = Object.prototype.hasOwnProperty,
					ie = r.unstable_scheduleCallback,
					ae = r.unstable_cancelCallback,
					oe = r.unstable_shouldYield,
					se = r.unstable_requestPaint,
					le = r.unstable_now,
					ce = r.unstable_getCurrentPriorityLevel,
					ue = r.unstable_ImmediatePriority,
					de = r.unstable_UserBlockingPriority,
					fe = r.unstable_NormalPriority,
					he = r.unstable_LowPriority,
					pe = r.unstable_IdlePriority,
					me = r.log,
					ge = r.unstable_setDisableYieldValue,
					ye = null,
					ve = null;
				function _e(e) {
					if (
						("function" === typeof me && ge(e),
						ve && "function" === typeof ve.setStrictMode)
					)
						try {
							ve.setStrictMode(ye, e);
						} catch (t) {}
				}
				var be = Math.clz32
						? Math.clz32
						: function (e) {
								return 0 === (e >>>= 0)
									? 32
									: (31 - ((we(e) / ke) | 0)) | 0;
						  },
					we = Math.log,
					ke = Math.LN2;
				var Se = 128,
					Ce = 4194304;
				function Ee(e) {
					var t = 42 & e;
					if (0 !== t) return t;
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
							return 64;
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194176 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
							return 62914560 & e;
						case 67108864:
							return 67108864;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 0;
						default:
							return e;
					}
				}
				function xe(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						i = e.suspendedLanes,
						a = e.pingedLanes,
						o = e.warmLanes;
					e = 0 !== e.finishedLanes;
					var s = 134217727 & n;
					return (
						0 !== s
							? 0 !== (n = s & ~i)
								? (r = Ee(n))
								: 0 !== (a &= s)
								? (r = Ee(a))
								: e || (0 !== (o = s & ~o) && (r = Ee(o)))
							: 0 !== (s = n & ~i)
							? (r = Ee(s))
							: 0 !== a
							? (r = Ee(a))
							: e || (0 !== (o = n & ~o) && (r = Ee(o))),
						0 === r
							? 0
							: 0 !== t &&
							  t !== r &&
							  0 === (t & i) &&
							  ((i = r & -r) >= (o = t & -t) ||
									(32 === i && 0 !== (4194176 & o)))
							? t
							: r
					);
				}
				function Te(e, t) {
					return (
						0 ===
						(e.pendingLanes &
							~(e.suspendedLanes & ~e.pingedLanes) &
							t)
					);
				}
				function Pe(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
						case 8:
							return t + 250;
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function Ne() {
					var e = Se;
					return 0 === (4194176 & (Se <<= 1)) && (Se = 128), e;
				}
				function Ie() {
					var e = Ce;
					return 0 === (62914560 & (Ce <<= 1)) && (Ce = 4194304), e;
				}
				function Ae(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function Oe(e, t) {
					(e.pendingLanes |= t),
						268435456 !== t &&
							((e.suspendedLanes = 0),
							(e.pingedLanes = 0),
							(e.warmLanes = 0));
				}
				function Re(e, t, n) {
					(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
					var r = 31 - be(t);
					(e.entangledLanes |= t),
						(e.entanglements[r] =
							1073741824 | e.entanglements[r] | (4194218 & n));
				}
				function De(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - be(n),
							i = 1 << r;
						(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
					}
				}
				function Le(e) {
					return 2 < (e &= -e)
						? 8 < e
							? 0 !== (134217727 & e)
								? 32
								: 268435456
							: 8
						: 2;
				}
				function Me() {
					var e = W.p;
					return 0 !== e
						? e
						: void 0 === (e = window.event)
						? 32
						: Xd(e.type);
				}
				var Fe = Math.random().toString(36).slice(2),
					ze = "__reactFiber$" + Fe,
					je = "__reactProps$" + Fe,
					qe = "__reactContainer$" + Fe,
					Ue = "__reactEvents$" + Fe,
					We = "__reactListeners$" + Fe,
					Be = "__reactHandles$" + Fe,
					He = "__reactResources$" + Fe,
					Ve = "__reactMarker$" + Fe;
				function $e(e) {
					delete e[ze],
						delete e[je],
						delete e[Ue],
						delete e[We],
						delete e[Be];
				}
				function Qe(e) {
					var t = e[ze];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[qe] || n[ze])) {
							if (
								((n = t.alternate),
								null !== t.child ||
									(null !== n && null !== n.child))
							)
								for (e = ld(e); null !== e; ) {
									if ((n = e[ze])) return n;
									e = ld(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function Ye(e) {
					if ((e = e[ze] || e[qe])) {
						var t = e.tag;
						if (
							5 === t ||
							6 === t ||
							13 === t ||
							26 === t ||
							27 === t ||
							3 === t
						)
							return e;
					}
					return null;
				}
				function Ke(e) {
					var t = e.tag;
					if (5 === t || 26 === t || 27 === t || 6 === t)
						return e.stateNode;
					throw Error(o(33));
				}
				function Ge(e) {
					var t = e[He];
					return (
						t ||
							(t = e[He] =
								{
									hoistableStyles: new Map(),
									hoistableScripts: new Map(),
								}),
						t
					);
				}
				function Xe(e) {
					e[Ve] = !0;
				}
				var Je = new Set(),
					Ze = {};
				function et(e, t) {
					tt(e, t), tt(e + "Capture", t);
				}
				function tt(e, t) {
					for (Ze[e] = t, e = 0; e < t.length; e++) Je.add(t[e]);
				}
				var nt = !(
						"undefined" === typeof window ||
						"undefined" === typeof window.document ||
						"undefined" === typeof window.document.createElement
					),
					rt = RegExp(
						"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
					),
					it = {},
					at = {};
				function ot(e, t, n) {
					if (
						((i = t),
						re.call(at, i) ||
							(!re.call(it, i) &&
								(rt.test(i)
									? (at[i] = !0)
									: ((it[i] = !0), 0))))
					)
						if (null === n) e.removeAttribute(t);
						else {
							switch (typeof n) {
								case "undefined":
								case "function":
								case "symbol":
									return void e.removeAttribute(t);
								case "boolean":
									var r = t.toLowerCase().slice(0, 5);
									if ("data-" !== r && "aria-" !== r)
										return void e.removeAttribute(t);
							}
							e.setAttribute(t, "" + n);
						}
					var i;
				}
				function st(e, t, n) {
					if (null === n) e.removeAttribute(t);
					else {
						switch (typeof n) {
							case "undefined":
							case "function":
							case "symbol":
							case "boolean":
								return void e.removeAttribute(t);
						}
						e.setAttribute(t, "" + n);
					}
				}
				function lt(e, t, n, r) {
					if (null === r) e.removeAttribute(n);
					else {
						switch (typeof r) {
							case "undefined":
							case "function":
							case "symbol":
							case "boolean":
								return void e.removeAttribute(n);
						}
						e.setAttributeNS(t, n, "" + r);
					}
				}
				function ct(e) {
					switch (typeof e) {
						case "bigint":
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function ut(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function dt(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = ut(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(
									e.constructor.prototype,
									t
								),
								r = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								"undefined" !== typeof n &&
								"function" === typeof n.get &&
								"function" === typeof n.set
							) {
								var i = n.get,
									a = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return i.call(this);
										},
										set: function (e) {
											(r = "" + e), a.call(this, e);
										},
									}),
									Object.defineProperty(e, t, {
										enumerable: n.enumerable,
									}),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null),
												delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function ft(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return (
						e &&
							(r = ut(e)
								? e.checked
									? "true"
									: "false"
								: e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function ht(e) {
					if (
						"undefined" ===
						typeof (e =
							e ||
							("undefined" !== typeof document
								? document
								: void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				var pt = /[\n"\\]/g;
				function mt(e) {
					return e.replace(pt, function (e) {
						return "\\" + e.charCodeAt(0).toString(16) + " ";
					});
				}
				function gt(e, t, n, r, i, a, o, s) {
					(e.name = ""),
						null != o &&
						"function" !== typeof o &&
						"symbol" !== typeof o &&
						"boolean" !== typeof o
							? (e.type = o)
							: e.removeAttribute("type"),
						null != t
							? "number" === o
								? ((0 === t && "" === e.value) ||
										e.value != t) &&
								  (e.value = "" + ct(t))
								: e.value !== "" + ct(t) &&
								  (e.value = "" + ct(t))
							: ("submit" !== o && "reset" !== o) ||
							  e.removeAttribute("value"),
						null != t
							? vt(e, o, ct(t))
							: null != n
							? vt(e, o, ct(n))
							: null != r && e.removeAttribute("value"),
						null == i && null != a && (e.defaultChecked = !!a),
						null != i &&
							(e.checked =
								i &&
								"function" !== typeof i &&
								"symbol" !== typeof i),
						null != s &&
						"function" !== typeof s &&
						"symbol" !== typeof s &&
						"boolean" !== typeof s
							? (e.name = "" + ct(s))
							: e.removeAttribute("name");
				}
				function yt(e, t, n, r, i, a, o, s) {
					if (
						(null != a &&
							"function" !== typeof a &&
							"symbol" !== typeof a &&
							"boolean" !== typeof a &&
							(e.type = a),
						null != t || null != n)
					) {
						if (
							!(
								("submit" !== a && "reset" !== a) ||
								(void 0 !== t && null !== t)
							)
						)
							return;
						(n = null != n ? "" + ct(n) : ""),
							(t = null != t ? "" + ct(t) : n),
							s || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					(r =
						"function" !== typeof (r = null != r ? r : i) &&
						"symbol" !== typeof r &&
						!!r),
						(e.checked = s ? e.checked : !!r),
						(e.defaultChecked = !!r),
						null != o &&
							"function" !== typeof o &&
							"symbol" !== typeof o &&
							"boolean" !== typeof o &&
							(e.name = o);
				}
				function vt(e, t, n) {
					("number" === t && ht(e.ownerDocument) === e) ||
						e.defaultValue === "" + n ||
						(e.defaultValue = "" + n);
				}
				function _t(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
						for (n = 0; n < e.length; n++)
							(i = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== i && (e[n].selected = i),
								i && r && (e[n].defaultSelected = !0);
					} else {
						for (
							n = "" + ct(n), t = null, i = 0;
							i < e.length;
							i++
						) {
							if (e[i].value === n)
								return (
									(e[i].selected = !0),
									void (r && (e[i].defaultSelected = !0))
								);
							null !== t || e[i].disabled || (t = e[i]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function bt(e, t, n) {
					null == t ||
					((t = "" + ct(t)) !== e.value && (e.value = t), null != n)
						? (e.defaultValue = null != n ? "" + ct(n) : "")
						: e.defaultValue !== t && (e.defaultValue = t);
				}
				function wt(e, t, n, r) {
					if (null == t) {
						if (null != r) {
							if (null != n) throw Error(o(92));
							if (U(r)) {
								if (1 < r.length) throw Error(o(93));
								r = r[0];
							}
							n = r;
						}
						null == n && (n = ""), (t = n);
					}
					(n = ct(t)),
						(e.defaultValue = n),
						(r = e.textContent) === n &&
							"" !== r &&
							null !== r &&
							(e.value = r);
				}
				function kt(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var St = new Set(
					"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
						" "
					)
				);
				function Ct(e, t, n) {
					var r = 0 === t.indexOf("--");
					null == n || "boolean" === typeof n || "" === n
						? r
							? e.setProperty(t, "")
							: "float" === t
							? (e.cssFloat = "")
							: (e[t] = "")
						: r
						? e.setProperty(t, n)
						: "number" !== typeof n || 0 === n || St.has(t)
						? "float" === t
							? (e.cssFloat = n)
							: (e[t] = ("" + n).trim())
						: (e[t] = n + "px");
				}
				function Et(e, t, n) {
					if (null != t && "object" !== typeof t) throw Error(o(62));
					if (((e = e.style), null != n)) {
						for (var r in n)
							!n.hasOwnProperty(r) ||
								(null != t && t.hasOwnProperty(r)) ||
								(0 === r.indexOf("--")
									? e.setProperty(r, "")
									: "float" === r
									? (e.cssFloat = "")
									: (e[r] = ""));
						for (var i in t)
							(r = t[i]),
								t.hasOwnProperty(i) &&
									n[i] !== r &&
									Ct(e, i, r);
					} else
						for (var a in t) t.hasOwnProperty(a) && Ct(e, a, t[a]);
				}
				function xt(e) {
					if (-1 === e.indexOf("-")) return !1;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var Tt = new Map([
						["acceptCharset", "accept-charset"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
						["crossOrigin", "crossorigin"],
						["accentHeight", "accent-height"],
						["alignmentBaseline", "alignment-baseline"],
						["arabicForm", "arabic-form"],
						["baselineShift", "baseline-shift"],
						["capHeight", "cap-height"],
						["clipPath", "clip-path"],
						["clipRule", "clip-rule"],
						["colorInterpolation", "color-interpolation"],
						[
							"colorInterpolationFilters",
							"color-interpolation-filters",
						],
						["colorProfile", "color-profile"],
						["colorRendering", "color-rendering"],
						["dominantBaseline", "dominant-baseline"],
						["enableBackground", "enable-background"],
						["fillOpacity", "fill-opacity"],
						["fillRule", "fill-rule"],
						["floodColor", "flood-color"],
						["floodOpacity", "flood-opacity"],
						["fontFamily", "font-family"],
						["fontSize", "font-size"],
						["fontSizeAdjust", "font-size-adjust"],
						["fontStretch", "font-stretch"],
						["fontStyle", "font-style"],
						["fontVariant", "font-variant"],
						["fontWeight", "font-weight"],
						["glyphName", "glyph-name"],
						[
							"glyphOrientationHorizontal",
							"glyph-orientation-horizontal",
						],
						[
							"glyphOrientationVertical",
							"glyph-orientation-vertical",
						],
						["horizAdvX", "horiz-adv-x"],
						["horizOriginX", "horiz-origin-x"],
						["imageRendering", "image-rendering"],
						["letterSpacing", "letter-spacing"],
						["lightingColor", "lighting-color"],
						["markerEnd", "marker-end"],
						["markerMid", "marker-mid"],
						["markerStart", "marker-start"],
						["overlinePosition", "overline-position"],
						["overlineThickness", "overline-thickness"],
						["paintOrder", "paint-order"],
						["panose-1", "panose-1"],
						["pointerEvents", "pointer-events"],
						["renderingIntent", "rendering-intent"],
						["shapeRendering", "shape-rendering"],
						["stopColor", "stop-color"],
						["stopOpacity", "stop-opacity"],
						["strikethroughPosition", "strikethrough-position"],
						["strikethroughThickness", "strikethrough-thickness"],
						["strokeDasharray", "stroke-dasharray"],
						["strokeDashoffset", "stroke-dashoffset"],
						["strokeLinecap", "stroke-linecap"],
						["strokeLinejoin", "stroke-linejoin"],
						["strokeMiterlimit", "stroke-miterlimit"],
						["strokeOpacity", "stroke-opacity"],
						["strokeWidth", "stroke-width"],
						["textAnchor", "text-anchor"],
						["textDecoration", "text-decoration"],
						["textRendering", "text-rendering"],
						["transformOrigin", "transform-origin"],
						["underlinePosition", "underline-position"],
						["underlineThickness", "underline-thickness"],
						["unicodeBidi", "unicode-bidi"],
						["unicodeRange", "unicode-range"],
						["unitsPerEm", "units-per-em"],
						["vAlphabetic", "v-alphabetic"],
						["vHanging", "v-hanging"],
						["vIdeographic", "v-ideographic"],
						["vMathematical", "v-mathematical"],
						["vectorEffect", "vector-effect"],
						["vertAdvY", "vert-adv-y"],
						["vertOriginX", "vert-origin-x"],
						["vertOriginY", "vert-origin-y"],
						["wordSpacing", "word-spacing"],
						["writingMode", "writing-mode"],
						["xmlnsXlink", "xmlns:xlink"],
						["xHeight", "x-height"],
					]),
					Pt =
						/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
				function Nt(e) {
					return Pt.test("" + e)
						? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
						: e;
				}
				var It = null;
				function At(e) {
					return (
						(e = e.target || e.srcElement || window)
							.correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var Ot = null,
					Rt = null;
				function Dt(e) {
					var t = Ye(e);
					if (t && (e = t.stateNode)) {
						var n = e[je] || null;
						e: switch (((e = t.stateNode), t.type)) {
							case "input":
								if (
									(gt(
										e,
										n.value,
										n.defaultValue,
										n.defaultValue,
										n.checked,
										n.defaultChecked,
										n.type,
										n.name
									),
									(t = n.name),
									"radio" === n.type && null != t)
								) {
									for (n = e; n.parentNode; )
										n = n.parentNode;
									for (
										n = n.querySelectorAll(
											'input[name="' +
												mt("" + t) +
												'"][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var i = r[je] || null;
											if (!i) throw Error(o(90));
											gt(
												r,
												i.value,
												i.defaultValue,
												i.defaultValue,
												i.checked,
												i.defaultChecked,
												i.type,
												i.name
											);
										}
									}
									for (t = 0; t < n.length; t++)
										(r = n[t]).form === e.form && ft(r);
								}
								break e;
							case "textarea":
								bt(e, n.value, n.defaultValue);
								break e;
							case "select":
								null != (t = n.value) &&
									_t(e, !!n.multiple, t, !1);
						}
					}
				}
				var Lt = !1;
				function Mt(e, t, n) {
					if (Lt) return e(t, n);
					Lt = !0;
					try {
						return e(t);
					} finally {
						if (
							((Lt = !1),
							(null !== Ot || null !== Rt) &&
								(zc(),
								Ot &&
									((t = Ot),
									(e = Rt),
									(Rt = Ot = null),
									Dt(t),
									e)))
						)
							for (t = 0; t < e.length; t++) Dt(e[t]);
					}
				}
				function Ft(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = n[je] || null;
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) ||
								(r = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n)
						throw Error(o(231, t, typeof n));
					return n;
				}
				var zt = !1;
				if (nt)
					try {
						var jt = {};
						Object.defineProperty(jt, "passive", {
							get: function () {
								zt = !0;
							},
						}),
							window.addEventListener("test", jt, jt),
							window.removeEventListener("test", jt, jt);
					} catch (kf) {
						zt = !1;
					}
				var qt = null,
					Ut = null,
					Wt = null;
				function Bt() {
					if (Wt) return Wt;
					var e,
						t,
						n = Ut,
						r = n.length,
						i = "value" in qt ? qt.value : qt.textContent,
						a = i.length;
					for (e = 0; e < r && n[e] === i[e]; e++);
					var o = r - e;
					for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
					return (Wt = i.slice(e, 1 < t ? 1 - t : void 0));
				}
				function Ht(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function Vt() {
					return !0;
				}
				function $t() {
					return !1;
				}
				function Qt(e) {
					function t(t, n, r, i, a) {
						for (var o in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = i),
						(this.target = a),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(o) &&
								((t = e[o]), (this[o] = t ? t(i) : i[o]));
						return (
							(this.isDefaultPrevented = (
								null != i.defaultPrevented
									? i.defaultPrevented
									: !1 === i.returnValue
							)
								? Vt
								: $t),
							(this.isPropagationStopped = $t),
							this
						);
					}
					return (
						A(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" !== typeof e.returnValue &&
										  (e.returnValue = !1),
									(this.isDefaultPrevented = Vt));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" !== typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = Vt));
							},
							persist: function () {},
							isPersistent: Vt,
						}),
						t
					);
				}
				var Yt,
					Kt,
					Gt,
					Xt = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					Jt = Qt(Xt),
					Zt = A({}, Xt, { view: 0, detail: 0 }),
					en = Qt(Zt),
					tn = A({}, Zt, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: hn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== Gt &&
										(Gt && "mousemove" === e.type
											? ((Yt = e.screenX - Gt.screenX),
											  (Kt = e.screenY - Gt.screenY))
											: (Kt = Yt = 0),
										(Gt = e)),
								  Yt);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : Kt;
						},
					}),
					nn = Qt(tn),
					rn = Qt(A({}, tn, { dataTransfer: 0 })),
					an = Qt(A({}, Zt, { relatedTarget: 0 })),
					on = Qt(
						A({}, Xt, {
							animationName: 0,
							elapsedTime: 0,
							pseudoElement: 0,
						})
					),
					sn = Qt(
						A({}, Xt, {
							clipboardData: function (e) {
								return "clipboardData" in e
									? e.clipboardData
									: window.clipboardData;
							},
						})
					),
					ln = Qt(A({}, Xt, { data: 0 })),
					cn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					un = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					dn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function fn(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = dn[e]) && !!t[e];
				}
				function hn() {
					return fn;
				}
				var pn = Qt(
						A({}, Zt, {
							key: function (e) {
								if (e.key) {
									var t = cn[e.key] || e.key;
									if ("Unidentified" !== t) return t;
								}
								return "keypress" === e.type
									? 13 === (e = Ht(e))
										? "Enter"
										: String.fromCharCode(e)
									: "keydown" === e.type || "keyup" === e.type
									? un[e.keyCode] || "Unidentified"
									: "";
							},
							code: 0,
							location: 0,
							ctrlKey: 0,
							shiftKey: 0,
							altKey: 0,
							metaKey: 0,
							repeat: 0,
							locale: 0,
							getModifierState: hn,
							charCode: function (e) {
								return "keypress" === e.type ? Ht(e) : 0;
							},
							keyCode: function (e) {
								return "keydown" === e.type ||
									"keyup" === e.type
									? e.keyCode
									: 0;
							},
							which: function (e) {
								return "keypress" === e.type
									? Ht(e)
									: "keydown" === e.type || "keyup" === e.type
									? e.keyCode
									: 0;
							},
						})
					),
					mn = Qt(
						A({}, tn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					gn = Qt(
						A({}, Zt, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: hn,
						})
					),
					yn = Qt(
						A({}, Xt, {
							propertyName: 0,
							elapsedTime: 0,
							pseudoElement: 0,
						})
					),
					vn = Qt(
						A({}, tn, {
							deltaX: function (e) {
								return "deltaX" in e
									? e.deltaX
									: "wheelDeltaX" in e
									? -e.wheelDeltaX
									: 0;
							},
							deltaY: function (e) {
								return "deltaY" in e
									? e.deltaY
									: "wheelDeltaY" in e
									? -e.wheelDeltaY
									: "wheelDelta" in e
									? -e.wheelDelta
									: 0;
							},
							deltaZ: 0,
							deltaMode: 0,
						})
					),
					_n = Qt(A({}, Xt, { newState: 0, oldState: 0 })),
					bn = [9, 13, 27, 32],
					wn = nt && "CompositionEvent" in window,
					kn = null;
				nt &&
					"documentMode" in document &&
					(kn = document.documentMode);
				var Sn = nt && "TextEvent" in window && !kn,
					Cn = nt && (!wn || (kn && 8 < kn && 11 >= kn)),
					En = String.fromCharCode(32),
					xn = !1;
				function Tn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== bn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Pn(e) {
					return "object" === typeof (e = e.detail) && "data" in e
						? e.data
						: null;
				}
				var Nn = !1;
				var In = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function An(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!In[e.type] : "textarea" === t;
				}
				function On(e, t, n, r) {
					Ot ? (Rt ? Rt.push(r) : (Rt = [r])) : (Ot = r),
						0 < (t = Mu(t, "onChange")).length &&
							((n = new Jt("onChange", "change", null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var Rn = null,
					Dn = null;
				function Ln(e) {
					Pu(e, 0);
				}
				function Mn(e) {
					if (ft(Ke(e))) return e;
				}
				function Fn(e, t) {
					if ("change" === e) return t;
				}
				var zn = !1;
				if (nt) {
					var jn;
					if (nt) {
						var qn = "oninput" in document;
						if (!qn) {
							var Un = document.createElement("div");
							Un.setAttribute("oninput", "return;"),
								(qn = "function" === typeof Un.oninput);
						}
						jn = qn;
					} else jn = !1;
					zn =
						jn &&
						(!document.documentMode || 9 < document.documentMode);
				}
				function Wn() {
					Rn &&
						(Rn.detachEvent("onpropertychange", Bn),
						(Dn = Rn = null));
				}
				function Bn(e) {
					if ("value" === e.propertyName && Mn(Dn)) {
						var t = [];
						On(t, Dn, e, At(e)), Mt(Ln, t);
					}
				}
				function Hn(e, t, n) {
					"focusin" === e
						? (Wn(),
						  (Dn = n),
						  (Rn = t).attachEvent("onpropertychange", Bn))
						: "focusout" === e && Wn();
				}
				function Vn(e) {
					if (
						"selectionchange" === e ||
						"keyup" === e ||
						"keydown" === e
					)
						return Mn(Dn);
				}
				function $n(e, t) {
					if ("click" === e) return Mn(t);
				}
				function Qn(e, t) {
					if ("input" === e || "change" === e) return Mn(t);
				}
				var Yn =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
						  };
				function Kn(e, t) {
					if (Yn(e, t)) return !0;
					if (
						"object" !== typeof e ||
						null === e ||
						"object" !== typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var i = n[r];
						if (!re.call(t, i) || !Yn(e[i], t[i])) return !1;
					}
					return !0;
				}
				function Gn(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function Xn(e, t) {
					var n,
						r = Gn(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (
								((n = e + r.textContent.length),
								e <= t && n >= t)
							)
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = Gn(r);
					}
				}
				function Jn(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? Jn(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function Zn(e) {
					for (
						var t = ht(
							(e =
								null != e &&
								null != e.ownerDocument &&
								null != e.ownerDocument.defaultView
									? e.ownerDocument.defaultView
									: window).document
						);
						t instanceof e.HTMLIFrameElement;

					) {
						try {
							var n =
								"string" ===
								typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = ht((e = t.contentWindow).document);
					}
					return t;
				}
				function er(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				function tr(e, t) {
					var n = Zn(t);
					t = e.focusedElem;
					var r = e.selectionRange;
					if (
						n !== t &&
						t &&
						t.ownerDocument &&
						Jn(t.ownerDocument.documentElement, t)
					) {
						if (null !== r && er(t))
							if (
								((e = r.start),
								void 0 === (n = r.end) && (n = e),
								"selectionStart" in t)
							)
								(t.selectionStart = e),
									(t.selectionEnd = Math.min(
										n,
										t.value.length
									));
							else if (
								(n =
									((e = t.ownerDocument || document) &&
										e.defaultView) ||
									window).getSelection
							) {
								n = n.getSelection();
								var i = t.textContent.length,
									a = Math.min(r.start, i);
								(r = void 0 === r.end ? a : Math.min(r.end, i)),
									!n.extend &&
										a > r &&
										((i = r), (r = a), (a = i)),
									(i = Xn(t, a));
								var o = Xn(t, r);
								i &&
									o &&
									(1 !== n.rangeCount ||
										n.anchorNode !== i.node ||
										n.anchorOffset !== i.offset ||
										n.focusNode !== o.node ||
										n.focusOffset !== o.offset) &&
									((e = e.createRange()).setStart(
										i.node,
										i.offset
									),
									n.removeAllRanges(),
									a > r
										? (n.addRange(e),
										  n.extend(o.node, o.offset))
										: (e.setEnd(o.node, o.offset),
										  n.addRange(e)));
							}
						for (e = [], n = t; (n = n.parentNode); )
							1 === n.nodeType &&
								e.push({
									element: n,
									left: n.scrollLeft,
									top: n.scrollTop,
								});
						for (
							"function" === typeof t.focus && t.focus(), t = 0;
							t < e.length;
							t++
						)
							((n = e[t]).element.scrollLeft = n.left),
								(n.element.scrollTop = n.top);
					}
				}
				var nr =
						nt &&
						"documentMode" in document &&
						11 >= document.documentMode,
					rr = null,
					ir = null,
					ar = null,
					or = !1;
				function sr(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					or ||
						null == rr ||
						rr !== ht(r) ||
						("selectionStart" in (r = rr) && er(r)
							? (r = {
									start: r.selectionStart,
									end: r.selectionEnd,
							  })
							: (r = {
									anchorNode: (r = (
										(r.ownerDocument &&
											r.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
							  }),
						(ar && Kn(ar, r)) ||
							((ar = r),
							0 < (r = Mu(ir, "onSelect")).length &&
								((t = new Jt("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = rr))));
				}
				function lr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var cr = {
						animationend: lr("Animation", "AnimationEnd"),
						animationiteration: lr(
							"Animation",
							"AnimationIteration"
						),
						animationstart: lr("Animation", "AnimationStart"),
						transitionrun: lr("Transition", "TransitionRun"),
						transitionstart: lr("Transition", "TransitionStart"),
						transitioncancel: lr("Transition", "TransitionCancel"),
						transitionend: lr("Transition", "TransitionEnd"),
					},
					ur = {},
					dr = {};
				function fr(e) {
					if (ur[e]) return ur[e];
					if (!cr[e]) return e;
					var t,
						n = cr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in dr)
							return (ur[e] = n[t]);
					return e;
				}
				nt &&
					((dr = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete cr.animationend.animation,
						delete cr.animationiteration.animation,
						delete cr.animationstart.animation),
					"TransitionEvent" in window ||
						delete cr.transitionend.transition);
				var hr = fr("animationend"),
					pr = fr("animationiteration"),
					mr = fr("animationstart"),
					gr = fr("transitionrun"),
					yr = fr("transitionstart"),
					vr = fr("transitioncancel"),
					_r = fr("transitionend"),
					br = new Map(),
					wr =
						"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
							" "
						);
				function kr(e, t) {
					br.set(e, t), et(t, [e]);
				}
				var Sr = [],
					Cr = 0,
					Er = 0;
				function xr() {
					for (var e = Cr, t = (Er = Cr = 0); t < e; ) {
						var n = Sr[t];
						Sr[t++] = null;
						var r = Sr[t];
						Sr[t++] = null;
						var i = Sr[t];
						Sr[t++] = null;
						var a = Sr[t];
						if (((Sr[t++] = null), null !== r && null !== i)) {
							var o = r.pending;
							null === o
								? (i.next = i)
								: ((i.next = o.next), (o.next = i)),
								(r.pending = i);
						}
						0 !== a && Ir(n, i, a);
					}
				}
				function Tr(e, t, n, r) {
					(Sr[Cr++] = e),
						(Sr[Cr++] = t),
						(Sr[Cr++] = n),
						(Sr[Cr++] = r),
						(Er |= r),
						(e.lanes |= r),
						null !== (e = e.alternate) && (e.lanes |= r);
				}
				function Pr(e, t, n, r) {
					return Tr(e, t, n, r), Ar(e);
				}
				function Nr(e, t) {
					return Tr(e, null, null, t), Ar(e);
				}
				function Ir(e, t, n) {
					e.lanes |= n;
					var r = e.alternate;
					null !== r && (r.lanes |= n);
					for (var i = !1, a = e.return; null !== a; )
						(a.childLanes |= n),
							null !== (r = a.alternate) && (r.childLanes |= n),
							22 === a.tag &&
								(null === (e = a.stateNode) ||
									1 & e._visibility ||
									(i = !0)),
							(e = a),
							(a = a.return);
					i &&
						null !== t &&
						3 === e.tag &&
						((a = e.stateNode),
						(i = 31 - be(n)),
						null === (e = (a = a.hiddenUpdates)[i])
							? (a[i] = [t])
							: e.push(t),
						(t.lane = 536870912 | n));
				}
				function Ar(e) {
					if (50 < Pc) throw ((Pc = 0), (Nc = null), Error(o(185)));
					for (var t = e.return; null !== t; ) t = (e = t).return;
					return 3 === e.tag ? e.stateNode : null;
				}
				var Or = {},
					Rr = new WeakMap();
				function Dr(e, t) {
					if ("object" === typeof e && null !== e) {
						var n = Rr.get(e);
						return void 0 !== n
							? n
							: ((t = { value: e, source: t, stack: M(t) }),
							  Rr.set(e, t),
							  t);
					}
					return { value: e, source: t, stack: M(t) };
				}
				var Lr = [],
					Mr = 0,
					Fr = null,
					zr = 0,
					jr = [],
					qr = 0,
					Ur = null,
					Wr = 1,
					Br = "";
				function Hr(e, t) {
					(Lr[Mr++] = zr), (Lr[Mr++] = Fr), (Fr = e), (zr = t);
				}
				function Vr(e, t, n) {
					(jr[qr++] = Wr), (jr[qr++] = Br), (jr[qr++] = Ur), (Ur = e);
					var r = Wr;
					e = Br;
					var i = 32 - be(r) - 1;
					(r &= ~(1 << i)), (n += 1);
					var a = 32 - be(t) + i;
					if (30 < a) {
						var o = i - (i % 5);
						(a = (r & ((1 << o) - 1)).toString(32)),
							(r >>= o),
							(i -= o),
							(Wr = (1 << (32 - be(t) + i)) | (n << i) | r),
							(Br = a + e);
					} else (Wr = (1 << a) | (n << i) | r), (Br = e);
				}
				function $r(e) {
					null !== e.return && (Hr(e, 1), Vr(e, 1, 0));
				}
				function Qr(e) {
					for (; e === Fr; )
						(Fr = Lr[--Mr]),
							(Lr[Mr] = null),
							(zr = Lr[--Mr]),
							(Lr[Mr] = null);
					for (; e === Ur; )
						(Ur = jr[--qr]),
							(jr[qr] = null),
							(Br = jr[--qr]),
							(jr[qr] = null),
							(Wr = jr[--qr]),
							(jr[qr] = null);
				}
				var Yr = null,
					Kr = null,
					Gr = !1,
					Xr = null,
					Jr = !1,
					Zr = Error(o(519));
				function ei(e) {
					throw (ai(Dr(Error(o(418, "")), e)), Zr);
				}
				function ti(e) {
					var t = e.stateNode,
						n = e.type,
						r = e.memoizedProps;
					switch (((t[ze] = e), (t[je] = r), n)) {
						case "dialog":
							Nu("cancel", t), Nu("close", t);
							break;
						case "iframe":
						case "object":
						case "embed":
							Nu("load", t);
							break;
						case "video":
						case "audio":
							for (n = 0; n < xu.length; n++) Nu(xu[n], t);
							break;
						case "source":
							Nu("error", t);
							break;
						case "img":
						case "image":
						case "link":
							Nu("error", t), Nu("load", t);
							break;
						case "details":
							Nu("toggle", t);
							break;
						case "input":
							Nu("invalid", t),
								yt(
									t,
									r.value,
									r.defaultValue,
									r.checked,
									r.defaultChecked,
									r.type,
									r.name,
									!0
								),
								dt(t);
							break;
						case "select":
							Nu("invalid", t);
							break;
						case "textarea":
							Nu("invalid", t),
								wt(t, r.value, r.defaultValue, r.children),
								dt(t);
					}
					("string" !== typeof (n = r.children) &&
						"number" !== typeof n &&
						"bigint" !== typeof n) ||
					t.textContent === "" + n ||
					!0 === r.suppressHydrationWarning ||
					Wu(t.textContent, n)
						? (null != r.popover &&
								(Nu("beforetoggle", t), Nu("toggle", t)),
						  null != r.onScroll && Nu("scroll", t),
						  null != r.onScrollEnd && Nu("scrollend", t),
						  null != r.onClick && (t.onclick = Bu),
						  (t = !0))
						: (t = !1),
						t || ei(e);
				}
				function ni(e) {
					for (Yr = e.return; Yr; )
						switch (Yr.tag) {
							case 3:
							case 27:
								return void (Jr = !0);
							case 5:
							case 13:
								return void (Jr = !1);
							default:
								Yr = Yr.return;
						}
				}
				function ri(e) {
					if (e !== Yr) return !1;
					if (!Gr) return ni(e), (Gr = !0), !1;
					var t,
						n = !1;
					if (
						((t = 3 !== e.tag && 27 !== e.tag) &&
							((t = 5 === e.tag) &&
								(t =
									!(
										"form" !== (t = e.type) &&
										"button" !== t
									) || Ju(e.type, e.memoizedProps)),
							(t = !t)),
						t && (n = !0),
						n && Kr && ei(e),
						ni(e),
						13 === e.tag)
					) {
						if (
							!(e =
								null !== (e = e.memoizedState)
									? e.dehydrated
									: null)
						)
							throw Error(o(317));
						e: {
							for (e = e.nextSibling, n = 0; e; ) {
								if (8 === e.nodeType)
									if ("/$" === (t = e.data)) {
										if (0 === n) {
											Kr = sd(e.nextSibling);
											break e;
										}
										n--;
									} else
										("$" !== t &&
											"$!" !== t &&
											"$?" !== t) ||
											n++;
								e = e.nextSibling;
							}
							Kr = null;
						}
					} else Kr = Yr ? sd(e.stateNode.nextSibling) : null;
					return !0;
				}
				function ii() {
					(Kr = Yr = null), (Gr = !1);
				}
				function ai(e) {
					null === Xr ? (Xr = [e]) : Xr.push(e);
				}
				var oi = Error(o(460)),
					si = Error(o(474)),
					li = { then: function () {} };
				function ci(e) {
					return "fulfilled" === (e = e.status) || "rejected" === e;
				}
				function ui() {}
				function di(e, t, n) {
					switch (
						(void 0 === (n = e[n])
							? e.push(t)
							: n !== t && (t.then(ui, ui), (t = n)),
						t.status)
					) {
						case "fulfilled":
							return t.value;
						case "rejected":
							if ((e = t.reason) === oi) throw Error(o(483));
							throw e;
						default:
							if ("string" === typeof t.status) t.then(ui, ui);
							else {
								if (
									null !== (e = tc) &&
									100 < e.shellSuspendCounter
								)
									throw Error(o(482));
								((e = t).status = "pending"),
									e.then(
										function (e) {
											if ("pending" === t.status) {
												var n = t;
												(n.status = "fulfilled"),
													(n.value = e);
											}
										},
										function (e) {
											if ("pending" === t.status) {
												var n = t;
												(n.status = "rejected"),
													(n.reason = e);
											}
										}
									);
							}
							switch (t.status) {
								case "fulfilled":
									return t.value;
								case "rejected":
									if ((e = t.reason) === oi)
										throw Error(o(483));
									throw e;
							}
							throw ((fi = t), oi);
					}
				}
				var fi = null;
				function hi() {
					if (null === fi) throw Error(o(459));
					var e = fi;
					return (fi = null), e;
				}
				var pi = null,
					mi = 0;
				function gi(e) {
					var t = mi;
					return (mi += 1), null === pi && (pi = []), di(pi, e, t);
				}
				function yi(e, t) {
					(t = t.props.ref), (e.ref = void 0 !== t ? t : null);
				}
				function vi(e, t) {
					if (t.$$typeof === l) throw Error(o(525));
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							o(
								31,
								"[object Object]" === e
									? "object with keys {" +
											Object.keys(t).join(", ") +
											"}"
									: e
							)
						))
					);
				}
				function _i(e) {
					return (0, e._init)(e._payload);
				}
				function bi(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r
								? ((t.deletions = [n]), (t.flags |= 16))
								: r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e) {
						for (var t = new Map(); null !== e; )
							null !== e.key
								? t.set(e.key, e)
								: t.set(e.index, e),
								(e = e.sibling);
						return t;
					}
					function i(e, t) {
						return (
							((e = Fl(e, t)).index = 0), (e.sibling = null), e
						);
					}
					function a(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 33554434), n)
										: r
									: ((t.flags |= 33554434), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function s(t) {
						return (
							e && null === t.alternate && (t.flags |= 33554434),
							t
						);
					}
					function l(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Wl(n, e.mode, r)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function f(e, t, n, r) {
						var a = n.type;
						return a === d
							? p(e, t, n.props.children, r, n.key)
							: null !== t &&
							  (t.elementType === a ||
									("object" === typeof a &&
										null !== a &&
										a.$$typeof === w &&
										_i(a) === t.type))
							? (yi((t = i(t, n.props)), n), (t.return = e), t)
							: (yi(
									(t = jl(
										n.type,
										n.key,
										n.props,
										null,
										e.mode,
										r
									)),
									n
							  ),
							  (t.return = e),
							  t);
					}
					function h(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Bl(n, e.mode, r)).return = e), t)
							: (((t = i(t, n.children || [])).return = e), t);
					}
					function p(e, t, n, r, a) {
						return null === t || 7 !== t.tag
							? (((t = ql(n, e.mode, r, a)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function m(e, t, n) {
						if (
							("string" === typeof t && "" !== t) ||
							"number" === typeof t ||
							"bigint" === typeof t
						)
							return ((t = Wl("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case c:
									return (
										yi(
											(n = jl(
												t.type,
												t.key,
												t.props,
												null,
												e.mode,
												n
											)),
											t
										),
										(n.return = e),
										n
									);
								case u:
									return (
										((t = Bl(t, e.mode, n)).return = e), t
									);
								case w:
									return m(
										e,
										(t = (0, t._init)(t._payload)),
										n
									);
							}
							if (U(t) || E(t))
								return (
									((t = ql(t, e.mode, n, null)).return = e), t
								);
							if ("function" === typeof t.then)
								return m(e, gi(t), n);
							if (t.$$typeof === g) return m(e, xs(e, t), n);
							vi(e, t);
						}
						return null;
					}
					function y(e, t, n, r) {
						var i = null !== t ? t.key : null;
						if (
							("string" === typeof n && "" !== n) ||
							"number" === typeof n ||
							"bigint" === typeof n
						)
							return null !== i ? null : l(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case c:
									return n.key === i ? f(e, t, n, r) : null;
								case u:
									return n.key === i ? h(e, t, n, r) : null;
								case w:
									return y(
										e,
										t,
										(n = (i = n._init)(n._payload)),
										r
									);
							}
							if (U(n) || E(n))
								return null !== i ? null : p(e, t, n, r, null);
							if ("function" === typeof n.then)
								return y(e, t, gi(n), r);
							if (n.$$typeof === g) return y(e, t, xs(e, n), r);
							vi(e, n);
						}
						return null;
					}
					function v(e, t, n, r, i) {
						if (
							("string" === typeof r && "" !== r) ||
							"number" === typeof r ||
							"bigint" === typeof r
						)
							return l(t, (e = e.get(n) || null), "" + r, i);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case c:
									return f(
										t,
										(e =
											e.get(null === r.key ? n : r.key) ||
											null),
										r,
										i
									);
								case u:
									return h(
										t,
										(e =
											e.get(null === r.key ? n : r.key) ||
											null),
										r,
										i
									);
								case w:
									return v(
										e,
										t,
										n,
										(r = (0, r._init)(r._payload)),
										i
									);
							}
							if (U(r) || E(r))
								return p(t, (e = e.get(n) || null), r, i, null);
							if ("function" === typeof r.then)
								return v(e, t, n, gi(r), i);
							if (r.$$typeof === g)
								return v(e, t, n, xs(t, r), i);
							vi(t, r);
						}
						return null;
					}
					function _(l, f, h, p) {
						if (
							("object" === typeof h &&
								null !== h &&
								h.type === d &&
								null === h.key &&
								(h = h.props.children),
							"object" === typeof h && null !== h)
						) {
							switch (h.$$typeof) {
								case c:
									e: {
										for (var b = h.key; null !== f; ) {
											if (f.key === b) {
												if ((b = h.type) === d) {
													if (7 === f.tag) {
														n(l, f.sibling),
															((p = i(
																f,
																h.props.children
															)).return = l),
															(l = p);
														break e;
													}
												} else if (
													f.elementType === b ||
													("object" === typeof b &&
														null !== b &&
														b.$$typeof === w &&
														_i(b) === f.type)
												) {
													n(l, f.sibling),
														yi(
															(p = i(f, h.props)),
															h
														),
														(p.return = l),
														(l = p);
													break e;
												}
												n(l, f);
												break;
											}
											t(l, f), (f = f.sibling);
										}
										h.type === d
											? (((p = ql(
													h.props.children,
													l.mode,
													p,
													h.key
											  )).return = l),
											  (l = p))
											: (yi(
													(p = jl(
														h.type,
														h.key,
														h.props,
														null,
														l.mode,
														p
													)),
													h
											  ),
											  (p.return = l),
											  (l = p));
									}
									return s(l);
								case u:
									e: {
										for (b = h.key; null !== f; ) {
											if (f.key === b) {
												if (
													4 === f.tag &&
													f.stateNode
														.containerInfo ===
														h.containerInfo &&
													f.stateNode
														.implementation ===
														h.implementation
												) {
													n(l, f.sibling),
														((p = i(
															f,
															h.children || []
														)).return = l),
														(l = p);
													break e;
												}
												n(l, f);
												break;
											}
											t(l, f), (f = f.sibling);
										}
										((p = Bl(h, l.mode, p)).return = l),
											(l = p);
									}
									return s(l);
								case w:
									return _(
										l,
										f,
										(h = (b = h._init)(h._payload)),
										p
									);
							}
							if (U(h))
								return (function (i, o, s, l) {
									for (
										var c = null,
											u = null,
											d = o,
											f = (o = 0),
											h = null;
										null !== d && f < s.length;
										f++
									) {
										d.index > f
											? ((h = d), (d = null))
											: (h = d.sibling);
										var p = y(i, d, s[f], l);
										if (null === p) {
											null === d && (d = h);
											break;
										}
										e &&
											d &&
											null === p.alternate &&
											t(i, d),
											(o = a(p, o, f)),
											null === u
												? (c = p)
												: (u.sibling = p),
											(u = p),
											(d = h);
									}
									if (f === s.length)
										return n(i, d), Gr && Hr(i, f), c;
									if (null === d) {
										for (; f < s.length; f++)
											null !== (d = m(i, s[f], l)) &&
												((o = a(d, o, f)),
												null === u
													? (c = d)
													: (u.sibling = d),
												(u = d));
										return Gr && Hr(i, f), c;
									}
									for (d = r(d); f < s.length; f++)
										null !== (h = v(d, i, f, s[f], l)) &&
											(e &&
												null !== h.alternate &&
												d.delete(
													null === h.key ? f : h.key
												),
											(o = a(h, o, f)),
											null === u
												? (c = h)
												: (u.sibling = h),
											(u = h));
									return (
										e &&
											d.forEach(function (e) {
												return t(i, e);
											}),
										Gr && Hr(i, f),
										c
									);
								})(l, f, h, p);
							if (E(h)) {
								if ("function" !== typeof (b = E(h)))
									throw Error(o(150));
								return (function (i, s, l, c) {
									if (null == l) throw Error(o(151));
									for (
										var u = null,
											d = null,
											f = s,
											h = (s = 0),
											p = null,
											g = l.next();
										null !== f && !g.done;
										h++, g = l.next()
									) {
										f.index > h
											? ((p = f), (f = null))
											: (p = f.sibling);
										var _ = y(i, f, g.value, c);
										if (null === _) {
											null === f && (f = p);
											break;
										}
										e &&
											f &&
											null === _.alternate &&
											t(i, f),
											(s = a(_, s, h)),
											null === d
												? (u = _)
												: (d.sibling = _),
											(d = _),
											(f = p);
									}
									if (g.done)
										return n(i, f), Gr && Hr(i, h), u;
									if (null === f) {
										for (; !g.done; h++, g = l.next())
											null !== (g = m(i, g.value, c)) &&
												((s = a(g, s, h)),
												null === d
													? (u = g)
													: (d.sibling = g),
												(d = g));
										return Gr && Hr(i, h), u;
									}
									for (f = r(f); !g.done; h++, g = l.next())
										null !== (g = v(f, i, h, g.value, c)) &&
											(e &&
												null !== g.alternate &&
												f.delete(
													null === g.key ? h : g.key
												),
											(s = a(g, s, h)),
											null === d
												? (u = g)
												: (d.sibling = g),
											(d = g));
									return (
										e &&
											f.forEach(function (e) {
												return t(i, e);
											}),
										Gr && Hr(i, h),
										u
									);
								})(l, f, (h = b.call(h)), p);
							}
							if ("function" === typeof h.then)
								return _(l, f, gi(h), p);
							if (h.$$typeof === g) return _(l, f, xs(l, h), p);
							vi(l, h);
						}
						return ("string" === typeof h && "" !== h) ||
							"number" === typeof h ||
							"bigint" === typeof h
							? ((h = "" + h),
							  null !== f && 6 === f.tag
									? (n(l, f.sibling),
									  ((p = i(f, h)).return = l),
									  (l = p))
									: (n(l, f),
									  ((p = Wl(h, l.mode, p)).return = l),
									  (l = p)),
							  s(l))
							: n(l, f);
					}
					return function (e, t, n, r) {
						try {
							mi = 0;
							var i = _(e, t, n, r);
							return (pi = null), i;
						} catch (o) {
							if (o === oi) throw o;
							var a = Ll(29, o, null, e.mode);
							return (a.lanes = r), (a.return = e), a;
						}
					};
				}
				var wi = bi(!0),
					ki = bi(!1),
					Si = $(null),
					Ci = $(0);
				function Ei(e, t) {
					Y(Ci, (e = cc)), Y(Si, t), (cc = e | t.baseLanes);
				}
				function xi() {
					Y(Ci, cc), Y(Si, Si.current);
				}
				function Ti() {
					(cc = Ci.current), Q(Si), Q(Ci);
				}
				var Pi = $(null),
					Ni = null;
				function Ii(e) {
					var t = e.alternate;
					Y(Di, 1 & Di.current),
						Y(Pi, e),
						null === Ni &&
							(null === t ||
								null !== Si.current ||
								null !== t.memoizedState) &&
							(Ni = e);
				}
				function Ai(e) {
					if (22 === e.tag) {
						if ((Y(Di, Di.current), Y(Pi, e), null === Ni)) {
							var t = e.alternate;
							null !== t && null !== t.memoizedState && (Ni = e);
						}
					} else Oi();
				}
				function Oi() {
					Y(Di, Di.current), Y(Pi, Pi.current);
				}
				function Ri(e) {
					Q(Pi), Ni === e && (Ni = null), Q(Di);
				}
				var Di = $(0);
				function Li(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									"$!" === n.data)
							)
								return t;
						} else if (
							19 === t.tag &&
							void 0 !== t.memoizedProps.revealOrder
						) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e)
								return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var Mi =
						"undefined" !== typeof AbortController
							? AbortController
							: function () {
									var e = [],
										t = (this.signal = {
											aborted: !1,
											addEventListener: function (t, n) {
												e.push(n);
											},
										});
									this.abort = function () {
										(t.aborted = !0),
											e.forEach(function (e) {
												return e();
											});
									};
							  },
					Fi = r.unstable_scheduleCallback,
					zi = r.unstable_NormalPriority,
					ji = {
						$$typeof: g,
						Consumer: null,
						Provider: null,
						_currentValue: null,
						_currentValue2: null,
						_threadCount: 0,
					};
				function qi() {
					return {
						controller: new Mi(),
						data: new Map(),
						refCount: 0,
					};
				}
				function Ui(e) {
					e.refCount--,
						0 === e.refCount &&
							Fi(zi, function () {
								e.controller.abort();
							});
				}
				var Wi = null,
					Bi = 0,
					Hi = 0,
					Vi = null;
				function $i() {
					if (0 === --Bi && null !== Wi) {
						null !== Vi && (Vi.status = "fulfilled");
						var e = Wi;
						(Wi = null), (Hi = 0), (Vi = null);
						for (var t = 0; t < e.length; t++) (0, e[t])();
					}
				}
				var Qi = I.S;
				I.S = function (e, t) {
					"object" === typeof t &&
						null !== t &&
						"function" === typeof t.then &&
						(function (e, t) {
							if (null === Wi) {
								var n = (Wi = []);
								(Bi = 0),
									(Hi = wu()),
									(Vi = {
										status: "pending",
										value: void 0,
										then: function (e) {
											n.push(e);
										},
									});
							}
							Bi++, t.then($i, $i);
						})(0, t),
						null !== Qi && Qi(e, t);
				};
				var Yi = $(null);
				function Ki() {
					var e = Yi.current;
					return null !== e ? e : tc.pooledCache;
				}
				function Gi(e, t) {
					Y(Yi, null === t ? Yi.current : t.pool);
				}
				function Xi() {
					var e = Ki();
					return null === e
						? null
						: { parent: ji._currentValue, pool: e };
				}
				var Ji = 0,
					Zi = null,
					ea = null,
					ta = null,
					na = !1,
					ra = !1,
					ia = !1,
					aa = 0,
					oa = 0,
					sa = null,
					la = 0;
				function ca() {
					throw Error(o(321));
				}
				function ua(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!Yn(e[n], t[n])) return !1;
					return !0;
				}
				function da(e, t, n, r, i, a) {
					return (
						(Ji = a),
						(Zi = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(I.H =
							null === e || null === e.memoizedState ? xo : To),
						(ia = !1),
						(a = n(r, i)),
						(ia = !1),
						ra && (a = ha(t, n, r, i)),
						fa(e),
						a
					);
				}
				function fa(e) {
					I.H = Eo;
					var t = null !== ea && null !== ea.next;
					if (
						((Ji = 0),
						(ta = ea = Zi = null),
						(na = !1),
						(oa = 0),
						(sa = null),
						t)
					)
						throw Error(o(300));
					null === e ||
						Ho ||
						(null !== (e = e.dependencies) && Ss(e) && (Ho = !0));
				}
				function ha(e, t, n, r) {
					Zi = e;
					var i = 0;
					do {
						if ((ra && (sa = null), (oa = 0), (ra = !1), 25 <= i))
							throw Error(o(301));
						if (
							((i += 1), (ta = ea = null), null != e.updateQueue)
						) {
							var a = e.updateQueue;
							(a.lastEffect = null),
								(a.events = null),
								(a.stores = null),
								null != a.memoCache && (a.memoCache.index = 0);
						}
						(I.H = Po), (a = t(n, r));
					} while (ra);
					return a;
				}
				function pa() {
					var e = I.H,
						t = e.useState()[0];
					return (
						(t = "function" === typeof t.then ? ba(t) : t),
						(e = e.useState()[0]),
						(null !== ea ? ea.memoizedState : null) !== e &&
							(Zi.flags |= 1024),
						t
					);
				}
				function ma() {
					var e = 0 !== aa;
					return (aa = 0), e;
				}
				function ga(e, t, n) {
					(t.updateQueue = e.updateQueue),
						(t.flags &= -2053),
						(e.lanes &= ~n);
				}
				function ya(e) {
					if (na) {
						for (e = e.memoizedState; null !== e; ) {
							var t = e.queue;
							null !== t && (t.pending = null), (e = e.next);
						}
						na = !1;
					}
					(Ji = 0),
						(ta = ea = Zi = null),
						(ra = !1),
						(oa = aa = 0),
						(sa = null);
				}
				function va() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === ta
							? (Zi.memoizedState = ta = e)
							: (ta = ta.next = e),
						ta
					);
				}
				function _a() {
					if (null === ea) {
						var e = Zi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = ea.next;
					var t = null === ta ? Zi.memoizedState : ta.next;
					if (null !== t) (ta = t), (ea = e);
					else {
						if (null === e) {
							if (null === Zi.alternate) throw Error(o(467));
							throw Error(o(310));
						}
						(e = {
							memoizedState: (ea = e).memoizedState,
							baseState: ea.baseState,
							baseQueue: ea.baseQueue,
							queue: ea.queue,
							next: null,
						}),
							null === ta
								? (Zi.memoizedState = ta = e)
								: (ta = ta.next = e);
					}
					return ta;
				}
				function ba(e) {
					var t = oa;
					return (
						(oa += 1),
						null === sa && (sa = []),
						(e = di(sa, e, t)),
						(t = Zi),
						null === (null === ta ? t.memoizedState : ta.next) &&
							((t = t.alternate),
							(I.H =
								null === t || null === t.memoizedState
									? xo
									: To)),
						e
					);
				}
				function wa(e) {
					if (null !== e && "object" === typeof e) {
						if ("function" === typeof e.then) return ba(e);
						if (e.$$typeof === g) return Es(e);
					}
					throw Error(o(438, String(e)));
				}
				function ka(e) {
					var t = null,
						n = Zi.updateQueue;
					if ((null !== n && (t = n.memoCache), null == t)) {
						var r = Zi.alternate;
						null !== r &&
							null !== (r = r.updateQueue) &&
							null != (r = r.memoCache) &&
							(t = {
								data: r.data.map(function (e) {
									return e.slice();
								}),
								index: 0,
							});
					}
					if (
						(null == t && (t = { data: [], index: 0 }),
						null === n &&
							((n = {
								lastEffect: null,
								events: null,
								stores: null,
								memoCache: null,
							}),
							(Zi.updateQueue = n)),
						(n.memoCache = t),
						void 0 === (n = t.data[t.index]))
					)
						for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
							n[r] = S;
					return t.index++, n;
				}
				function Sa(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function Ca(e) {
					return Ea(_a(), ea, e);
				}
				function Ea(e, t, n) {
					var r = e.queue;
					if (null === r) throw Error(o(311));
					r.lastRenderedReducer = n;
					var i = e.baseQueue,
						a = r.pending;
					if (null !== a) {
						if (null !== i) {
							var s = i.next;
							(i.next = a.next), (a.next = s);
						}
						(t.baseQueue = i = a), (r.pending = null);
					}
					if (((a = e.baseState), null === i)) e.memoizedState = a;
					else {
						var l = (s = null),
							c = null,
							u = (t = i.next),
							d = !1;
						do {
							var f = -536870913 & u.lane;
							if (
								f !== u.lane ? (rc & f) === f : (Ji & f) === f
							) {
								var h = u.revertLane;
								if (0 === h)
									null !== c &&
										(c = c.next =
											{
												lane: 0,
												revertLane: 0,
												action: u.action,
												hasEagerState: u.hasEagerState,
												eagerState: u.eagerState,
												next: null,
											}),
										f === Hi && (d = !0);
								else {
									if ((Ji & h) === h) {
										(u = u.next), h === Hi && (d = !0);
										continue;
									}
									(f = {
										lane: 0,
										revertLane: u.revertLane,
										action: u.action,
										hasEagerState: u.hasEagerState,
										eagerState: u.eagerState,
										next: null,
									}),
										null === c
											? ((l = c = f), (s = a))
											: (c = c.next = f),
										(Zi.lanes |= h),
										(dc |= h);
								}
								(f = u.action),
									ia && n(a, f),
									(a = u.hasEagerState
										? u.eagerState
										: n(a, f));
							} else
								(h = {
									lane: f,
									revertLane: u.revertLane,
									action: u.action,
									hasEagerState: u.hasEagerState,
									eagerState: u.eagerState,
									next: null,
								}),
									null === c
										? ((l = c = h), (s = a))
										: (c = c.next = h),
									(Zi.lanes |= f),
									(dc |= f);
							u = u.next;
						} while (null !== u && u !== t);
						if (
							(null === c ? (s = a) : (c.next = l),
							!Yn(a, e.memoizedState) &&
								((Ho = !0), d && null !== (n = Vi)))
						)
							throw n;
						(e.memoizedState = a),
							(e.baseState = s),
							(e.baseQueue = c),
							(r.lastRenderedState = a);
					}
					return (
						null === i && (r.lanes = 0),
						[e.memoizedState, r.dispatch]
					);
				}
				function xa(e) {
					var t = _a(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						i = n.pending,
						a = t.memoizedState;
					if (null !== i) {
						n.pending = null;
						var s = (i = i.next);
						do {
							(a = e(a, s.action)), (s = s.next);
						} while (s !== i);
						Yn(a, t.memoizedState) || (Ho = !0),
							(t.memoizedState = a),
							null === t.baseQueue && (t.baseState = a),
							(n.lastRenderedState = a);
					}
					return [a, r];
				}
				function Ta(e, t, n) {
					var r = Zi,
						i = _a(),
						a = Gr;
					if (a) {
						if (void 0 === n) throw Error(o(407));
						n = n();
					} else n = t();
					var s = !Yn((ea || i).memoizedState, n);
					if (
						(s && ((i.memoizedState = n), (Ho = !0)),
						(i = i.queue),
						Ja(Ia.bind(null, r, i, e), [e]),
						i.getSnapshot !== t ||
							s ||
							(null !== ta && 1 & ta.memoizedState.tag))
					) {
						if (
							((r.flags |= 2048),
							Qa(
								9,
								Na.bind(null, r, i, n, t),
								{ destroy: void 0 },
								null
							),
							null === tc)
						)
							throw Error(o(349));
						a || 0 !== (60 & Ji) || Pa(r, t, n);
					}
					return n;
				}
				function Pa(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = Zi.updateQueue)
							? ((t = {
									lastEffect: null,
									events: null,
									stores: null,
									memoCache: null,
							  }),
							  (Zi.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function Na(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Aa(t) && Oa(e);
				}
				function Ia(e, t, n) {
					return n(function () {
						Aa(t) && Oa(e);
					});
				}
				function Aa(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !Yn(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Oa(e) {
					var t = Nr(e, 2);
					null !== t && Oc(t, e, 2);
				}
				function Ra(e) {
					var t = va();
					if ("function" === typeof e) {
						var n = e;
						if (((e = n()), ia)) {
							_e(!0);
							try {
								n();
							} finally {
								_e(!1);
							}
						}
					}
					return (
						(t.memoizedState = t.baseState = e),
						(t.queue = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Sa,
							lastRenderedState: e,
						}),
						t
					);
				}
				function Da(e, t, n, r) {
					return (
						(e.baseState = n),
						Ea(e, ea, "function" === typeof r ? r : Sa)
					);
				}
				function La(e, t, n, r, i) {
					if (ko(e)) throw Error(o(485));
					if (null !== (e = t.action)) {
						var a = {
							payload: i,
							action: e,
							next: null,
							isTransition: !0,
							status: "pending",
							value: null,
							reason: null,
							listeners: [],
							then: function (e) {
								a.listeners.push(e);
							},
						};
						null !== I.T ? n(!0) : (a.isTransition = !1),
							r(a),
							null === (n = t.pending)
								? ((a.next = t.pending = a), Ma(t, a))
								: ((a.next = n.next), (t.pending = n.next = a));
					}
				}
				function Ma(e, t) {
					var n = t.action,
						r = t.payload,
						i = e.state;
					if (t.isTransition) {
						var a = I.T,
							o = {};
						I.T = o;
						try {
							var s = n(i, r),
								l = I.S;
							null !== l && l(o, s), Fa(e, t, s);
						} catch (c) {
							ja(e, t, c);
						} finally {
							I.T = a;
						}
					} else
						try {
							Fa(e, t, (a = n(i, r)));
						} catch (u) {
							ja(e, t, u);
						}
				}
				function Fa(e, t, n) {
					null !== n &&
					"object" === typeof n &&
					"function" === typeof n.then
						? n.then(
								function (n) {
									za(e, t, n);
								},
								function (n) {
									return ja(e, t, n);
								}
						  )
						: za(e, t, n);
				}
				function za(e, t, n) {
					(t.status = "fulfilled"),
						(t.value = n),
						qa(t),
						(e.state = n),
						null !== (t = e.pending) &&
							((n = t.next) === t
								? (e.pending = null)
								: ((n = n.next), (t.next = n), Ma(e, n)));
				}
				function ja(e, t, n) {
					var r = e.pending;
					if (((e.pending = null), null !== r)) {
						r = r.next;
						do {
							(t.status = "rejected"),
								(t.reason = n),
								qa(t),
								(t = t.next);
						} while (t !== r);
					}
					e.action = null;
				}
				function qa(e) {
					e = e.listeners;
					for (var t = 0; t < e.length; t++) (0, e[t])();
				}
				function Ua(e, t) {
					return t;
				}
				function Wa(e, t) {
					if (Gr) {
						var n = tc.formState;
						if (null !== n) {
							e: {
								var r = Zi;
								if (Gr) {
									if (Kr) {
										t: {
											for (
												var i = Kr, a = Jr;
												8 !== i.nodeType;

											) {
												if (!a) {
													i = null;
													break t;
												}
												if (
													null ===
													(i = sd(i.nextSibling))
												) {
													i = null;
													break t;
												}
											}
											i =
												"F!" === (a = i.data) ||
												"F" === a
													? i
													: null;
										}
										if (i) {
											(Kr = sd(i.nextSibling)),
												(r = "F!" === i.data);
											break e;
										}
									}
									ei(r);
								}
								r = !1;
							}
							r && (t = n[0]);
						}
					}
					return (
						((n = va()).memoizedState = n.baseState = t),
						(r = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Ua,
							lastRenderedState: t,
						}),
						(n.queue = r),
						(n = _o.bind(null, Zi, r)),
						(r.dispatch = n),
						(r = Ra(!1)),
						(a = wo.bind(null, Zi, !1, r.queue)),
						(i = {
							state: t,
							dispatch: null,
							action: e,
							pending: null,
						}),
						((r = va()).queue = i),
						(n = La.bind(null, Zi, i, a, n)),
						(i.dispatch = n),
						(r.memoizedState = e),
						[t, n, !1]
					);
				}
				function Ba(e) {
					return Ha(_a(), ea, e);
				}
				function Ha(e, t, n) {
					(t = Ea(e, t, Ua)[0]),
						(e = Ca(Sa)[0]),
						(t =
							"object" === typeof t &&
							null !== t &&
							"function" === typeof t.then
								? ba(t)
								: t);
					var r = _a(),
						i = r.queue,
						a = i.dispatch;
					return (
						n !== r.memoizedState &&
							((Zi.flags |= 2048),
							Qa(
								9,
								Va.bind(null, i, n),
								{ destroy: void 0 },
								null
							)),
						[t, a, e]
					);
				}
				function Va(e, t) {
					e.action = t;
				}
				function $a(e) {
					var t = _a(),
						n = ea;
					if (null !== n) return Ha(t, n, e);
					_a(), (t = t.memoizedState);
					var r = (n = _a()).queue.dispatch;
					return (n.memoizedState = e), [t, r, !1];
				}
				function Qa(e, t, n, r) {
					return (
						(e = {
							tag: e,
							create: t,
							inst: n,
							deps: r,
							next: null,
						}),
						null === (t = Zi.updateQueue) &&
							((t = {
								lastEffect: null,
								events: null,
								stores: null,
								memoCache: null,
							}),
							(Zi.updateQueue = t)),
						null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next),
							  (n.next = e),
							  (e.next = r),
							  (t.lastEffect = e)),
						e
					);
				}
				function Ya() {
					return _a().memoizedState;
				}
				function Ka(e, t, n, r) {
					var i = va();
					(Zi.flags |= e),
						(i.memoizedState = Qa(
							1 | t,
							n,
							{ destroy: void 0 },
							void 0 === r ? null : r
						));
				}
				function Ga(e, t, n, r) {
					var i = _a();
					r = void 0 === r ? null : r;
					var a = i.memoizedState.inst;
					null !== ea && null !== r && ua(r, ea.memoizedState.deps)
						? (i.memoizedState = Qa(t, n, a, r))
						: ((Zi.flags |= e),
						  (i.memoizedState = Qa(1 | t, n, a, r)));
				}
				function Xa(e, t) {
					Ka(8390656, 8, e, t);
				}
				function Ja(e, t) {
					Ga(2048, 8, e, t);
				}
				function Za(e, t) {
					return Ga(4, 2, e, t);
				}
				function eo(e, t) {
					return Ga(4, 4, e, t);
				}
				function to(e, t) {
					if ("function" === typeof t) {
						e = e();
						var n = t(e);
						return function () {
							"function" === typeof n ? n() : t(null);
						};
					}
					if (null !== t && void 0 !== t)
						return (
							(e = e()),
							(t.current = e),
							function () {
								t.current = null;
							}
						);
				}
				function no(e, t, n) {
					(n = null !== n && void 0 !== n ? n.concat([e]) : null),
						Ga(4, 4, to.bind(null, t, e), n);
				}
				function ro() {}
				function io(e, t) {
					var n = _a();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== t && ua(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function ao(e, t) {
					var n = _a();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					if (null !== t && ua(t, r[1])) return r[0];
					if (((r = e()), ia)) {
						_e(!0);
						try {
							e();
						} finally {
							_e(!1);
						}
					}
					return (n.memoizedState = [r, t]), r;
				}
				function oo(e, t, n) {
					return void 0 === n || 0 !== (1073741824 & Ji)
						? (e.memoizedState = t)
						: ((e.memoizedState = n),
						  (e = Ac()),
						  (Zi.lanes |= e),
						  (dc |= e),
						  n);
				}
				function so(e, t, n, r) {
					return Yn(n, t)
						? n
						: null !== Si.current
						? ((e = oo(e, n, r)), Yn(e, t) || (Ho = !0), e)
						: 0 === (42 & Ji)
						? ((Ho = !0), (e.memoizedState = n))
						: ((e = Ac()), (Zi.lanes |= e), (dc |= e), t);
				}
				function lo(e, t, n, r, i) {
					var a = W.p;
					W.p = 0 !== a && 8 > a ? a : 8;
					var o = I.T,
						s = {};
					(I.T = s), wo(e, !1, t, n);
					try {
						var l = i(),
							c = I.S;
						if (
							(null !== c && c(s, l),
							null !== l &&
								"object" === typeof l &&
								"function" === typeof l.then)
						)
							bo(
								e,
								t,
								(function (e, t) {
									var n = [],
										r = {
											status: "pending",
											value: null,
											reason: null,
											then: function (e) {
												n.push(e);
											},
										};
									return (
										e.then(
											function () {
												(r.status = "fulfilled"),
													(r.value = t);
												for (
													var e = 0;
													e < n.length;
													e++
												)
													(0, n[e])(t);
											},
											function (e) {
												for (
													r.status = "rejected",
														r.reason = e,
														e = 0;
													e < n.length;
													e++
												)
													(0, n[e])(void 0);
											}
										),
										r
									);
								})(l, r),
								Ic()
							);
						else bo(e, t, r, Ic());
					} catch (u) {
						bo(
							e,
							t,
							{
								then: function () {},
								status: "rejected",
								reason: u,
							},
							Ic()
						);
					} finally {
						(W.p = a), (I.T = o);
					}
				}
				function co() {}
				function uo(e, t, n, r) {
					if (5 !== e.tag) throw Error(o(476));
					var i = fo(e).queue;
					lo(
						e,
						i,
						t,
						B,
						null === n
							? co
							: function () {
									return ho(e), n(r);
							  }
					);
				}
				function fo(e) {
					var t = e.memoizedState;
					if (null !== t) return t;
					var n = {};
					return (
						((t = {
							memoizedState: B,
							baseState: B,
							baseQueue: null,
							queue: {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: Sa,
								lastRenderedState: B,
							},
							next: null,
						}).next = {
							memoizedState: n,
							baseState: n,
							baseQueue: null,
							queue: {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: Sa,
								lastRenderedState: n,
							},
							next: null,
						}),
						(e.memoizedState = t),
						null !== (e = e.alternate) && (e.memoizedState = t),
						t
					);
				}
				function ho(e) {
					bo(e, fo(e).next.queue, {}, Ic());
				}
				function po() {
					return Es(Md);
				}
				function mo() {
					return _a().memoizedState;
				}
				function go() {
					return _a().memoizedState;
				}
				function yo(e) {
					for (var t = e.return; null !== t; ) {
						switch (t.tag) {
							case 24:
							case 3:
								var n = Ic(),
									r = Os(t, (e = As(n)), n);
								return (
									null !== r && (Oc(r, t, n), Rs(r, t, n)),
									(t = { cache: qi() }),
									void (e.payload = t)
								);
						}
						t = t.return;
					}
				}
				function vo(e, t, n) {
					var r = Ic();
					(n = {
						lane: r,
						revertLane: 0,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					}),
						ko(e)
							? So(t, n)
							: null !== (n = Pr(e, t, n, r)) &&
							  (Oc(n, e, r), Co(n, t, r));
				}
				function _o(e, t, n) {
					bo(e, t, n, Ic());
				}
				function bo(e, t, n, r) {
					var i = {
						lane: r,
						revertLane: 0,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					};
					if (ko(e)) So(t, i);
					else {
						var a = e.alternate;
						if (
							0 === e.lanes &&
							(null === a || 0 === a.lanes) &&
							null !== (a = t.lastRenderedReducer)
						)
							try {
								var o = t.lastRenderedState,
									s = a(o, n);
								if (
									((i.hasEagerState = !0),
									(i.eagerState = s),
									Yn(s, o))
								)
									return (
										Tr(e, t, i, 0), null === tc && xr(), !1
									);
							} catch (l) {}
						if (null !== (n = Pr(e, t, i, r)))
							return Oc(n, e, r), Co(n, t, r), !0;
					}
					return !1;
				}
				function wo(e, t, n, r) {
					if (
						((r = {
							lane: 2,
							revertLane: wu(),
							action: r,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						ko(e))
					) {
						if (t) throw Error(o(479));
					} else null !== (t = Pr(e, n, r, 2)) && Oc(t, e, 2);
				}
				function ko(e) {
					var t = e.alternate;
					return e === Zi || (null !== t && t === Zi);
				}
				function So(e, t) {
					ra = na = !0;
					var n = e.pending;
					null === n
						? (t.next = t)
						: ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function Co(e, t, n) {
					if (0 !== (4194176 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), De(e, n);
					}
				}
				var Eo = {
					readContext: Es,
					use: wa,
					useCallback: ca,
					useContext: ca,
					useEffect: ca,
					useImperativeHandle: ca,
					useLayoutEffect: ca,
					useInsertionEffect: ca,
					useMemo: ca,
					useReducer: ca,
					useRef: ca,
					useState: ca,
					useDebugValue: ca,
					useDeferredValue: ca,
					useTransition: ca,
					useSyncExternalStore: ca,
					useId: ca,
				};
				(Eo.useCacheRefresh = ca),
					(Eo.useMemoCache = ca),
					(Eo.useHostTransitionStatus = ca),
					(Eo.useFormState = ca),
					(Eo.useActionState = ca),
					(Eo.useOptimistic = ca);
				var xo = {
					readContext: Es,
					use: wa,
					useCallback: function (e, t) {
						return (
							(va().memoizedState = [e, void 0 === t ? null : t]),
							e
						);
					},
					useContext: Es,
					useEffect: Xa,
					useImperativeHandle: function (e, t, n) {
						(n = null !== n && void 0 !== n ? n.concat([e]) : null),
							Ka(4194308, 4, to.bind(null, t, e), n);
					},
					useLayoutEffect: function (e, t) {
						return Ka(4194308, 4, e, t);
					},
					useInsertionEffect: function (e, t) {
						Ka(4, 2, e, t);
					},
					useMemo: function (e, t) {
						var n = va();
						t = void 0 === t ? null : t;
						var r = e();
						if (ia) {
							_e(!0);
							try {
								e();
							} finally {
								_e(!1);
							}
						}
						return (n.memoizedState = [r, t]), r;
					},
					useReducer: function (e, t, n) {
						var r = va();
						if (void 0 !== n) {
							var i = n(t);
							if (ia) {
								_e(!0);
								try {
									n(t);
								} finally {
									_e(!1);
								}
							}
						} else i = t;
						return (
							(r.memoizedState = r.baseState = i),
							(e = {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: i,
							}),
							(r.queue = e),
							(e = e.dispatch = vo.bind(null, Zi, e)),
							[r.memoizedState, e]
						);
					},
					useRef: function (e) {
						return (e = { current: e }), (va().memoizedState = e);
					},
					useState: function (e) {
						var t = (e = Ra(e)).queue,
							n = _o.bind(null, Zi, t);
						return (t.dispatch = n), [e.memoizedState, n];
					},
					useDebugValue: ro,
					useDeferredValue: function (e, t) {
						return oo(va(), e, t);
					},
					useTransition: function () {
						var e = Ra(!1);
						return (
							(e = lo.bind(null, Zi, e.queue, !0, !1)),
							(va().memoizedState = e),
							[!1, e]
						);
					},
					useSyncExternalStore: function (e, t, n) {
						var r = Zi,
							i = va();
						if (Gr) {
							if (void 0 === n) throw Error(o(407));
							n = n();
						} else {
							if (((n = t()), null === tc)) throw Error(o(349));
							0 !== (60 & rc) || Pa(r, t, n);
						}
						i.memoizedState = n;
						var a = { value: n, getSnapshot: t };
						return (
							(i.queue = a),
							Xa(Ia.bind(null, r, a, e), [e]),
							(r.flags |= 2048),
							Qa(
								9,
								Na.bind(null, r, a, n, t),
								{ destroy: void 0 },
								null
							),
							n
						);
					},
					useId: function () {
						var e = va(),
							t = tc.identifierPrefix;
						if (Gr) {
							var n = Br;
							(t =
								":" +
								t +
								"R" +
								(n =
									(Wr & ~(1 << (32 - be(Wr) - 1))).toString(
										32
									) + n)),
								0 < (n = aa++) && (t += "H" + n.toString(32)),
								(t += ":");
						} else
							t = ":" + t + "r" + (n = la++).toString(32) + ":";
						return (e.memoizedState = t);
					},
					useCacheRefresh: function () {
						return (va().memoizedState = yo.bind(null, Zi));
					},
				};
				(xo.useMemoCache = ka),
					(xo.useHostTransitionStatus = po),
					(xo.useFormState = Wa),
					(xo.useActionState = Wa),
					(xo.useOptimistic = function (e) {
						var t = va();
						t.memoizedState = t.baseState = e;
						var n = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: null,
							lastRenderedState: null,
						};
						return (
							(t.queue = n),
							(t = wo.bind(null, Zi, !0, n)),
							(n.dispatch = t),
							[e, t]
						);
					});
				var To = {
					readContext: Es,
					use: wa,
					useCallback: io,
					useContext: Es,
					useEffect: Ja,
					useImperativeHandle: no,
					useInsertionEffect: Za,
					useLayoutEffect: eo,
					useMemo: ao,
					useReducer: Ca,
					useRef: Ya,
					useState: function () {
						return Ca(Sa);
					},
					useDebugValue: ro,
					useDeferredValue: function (e, t) {
						return so(_a(), ea.memoizedState, e, t);
					},
					useTransition: function () {
						var e = Ca(Sa)[0],
							t = _a().memoizedState;
						return ["boolean" === typeof e ? e : ba(e), t];
					},
					useSyncExternalStore: Ta,
					useId: mo,
				};
				(To.useCacheRefresh = go),
					(To.useMemoCache = ka),
					(To.useHostTransitionStatus = po),
					(To.useFormState = Ba),
					(To.useActionState = Ba),
					(To.useOptimistic = function (e, t) {
						return Da(_a(), 0, e, t);
					});
				var Po = {
					readContext: Es,
					use: wa,
					useCallback: io,
					useContext: Es,
					useEffect: Ja,
					useImperativeHandle: no,
					useInsertionEffect: Za,
					useLayoutEffect: eo,
					useMemo: ao,
					useReducer: xa,
					useRef: Ya,
					useState: function () {
						return xa(Sa);
					},
					useDebugValue: ro,
					useDeferredValue: function (e, t) {
						var n = _a();
						return null === ea
							? oo(n, e, t)
							: so(n, ea.memoizedState, e, t);
					},
					useTransition: function () {
						var e = xa(Sa)[0],
							t = _a().memoizedState;
						return ["boolean" === typeof e ? e : ba(e), t];
					},
					useSyncExternalStore: Ta,
					useId: mo,
				};
				function No(e, t, n, r) {
					(n =
						null === (n = n(r, (t = e.memoizedState))) ||
						void 0 === n
							? t
							: A({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				(Po.useCacheRefresh = go),
					(Po.useMemoCache = ka),
					(Po.useHostTransitionStatus = po),
					(Po.useFormState = $a),
					(Po.useActionState = $a),
					(Po.useOptimistic = function (e, t) {
						var n = _a();
						return null !== ea
							? Da(n, 0, e, t)
							: ((n.baseState = e), [e, n.queue.dispatch]);
					});
				var Io = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && F(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = Ic(),
							i = As(r);
						(i.payload = t),
							void 0 !== n && null !== n && (i.callback = n),
							null !== (t = Os(e, i, r)) &&
								(Oc(t, e, r), Rs(t, e, r));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = Ic(),
							i = As(r);
						(i.tag = 1),
							(i.payload = t),
							void 0 !== n && null !== n && (i.callback = n),
							null !== (t = Os(e, i, r)) &&
								(Oc(t, e, r), Rs(t, e, r));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = Ic(),
							r = As(n);
						(r.tag = 2),
							void 0 !== t && null !== t && (r.callback = t),
							null !== (t = Os(e, r, n)) &&
								(Oc(t, e, n), Rs(t, e, n));
					},
				};
				function Ao(e, t, n, r, i, a, o) {
					return "function" ===
						typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, a, o)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!Kn(n, r) ||
								!Kn(i, a);
				}
				function Oo(e, t, n, r) {
					(e = t.state),
						"function" === typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						"function" ===
							typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e &&
							Io.enqueueReplaceState(t, t.state, null);
				}
				function Ro(e, t) {
					var n = t;
					if ("ref" in t)
						for (var r in ((n = {}), t))
							"ref" !== r && (n[r] = t[r]);
					if ((e = e.defaultProps))
						for (var i in (n === t && (n = A({}, n)), e))
							void 0 === n[i] && (n[i] = e[i]);
					return n;
				}
				var Do =
					"function" === typeof reportError
						? reportError
						: function (e) {
								if (
									"object" === typeof window &&
									"function" === typeof window.ErrorEvent
								) {
									var t = new window.ErrorEvent("error", {
										bubbles: !0,
										cancelable: !0,
										message:
											"object" === typeof e &&
											null !== e &&
											"string" === typeof e.message
												? String(e.message)
												: String(e),
										error: e,
									});
									if (!window.dispatchEvent(t)) return;
								} else if (
									"object" === typeof process &&
									"function" === typeof process.emit
								)
									return void process.emit(
										"uncaughtException",
										e
									);
								console.error(e);
						  };
				function Lo(e) {
					Do(e);
				}
				function Mo(e) {
					console.error(e);
				}
				function Fo(e) {
					Do(e);
				}
				function zo(e, t) {
					try {
						(0, e.onUncaughtError)(t.value, {
							componentStack: t.stack,
						});
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				function jo(e, t, n) {
					try {
						(0, e.onCaughtError)(n.value, {
							componentStack: n.stack,
							errorBoundary: 1 === t.tag ? t.stateNode : null,
						});
					} catch (r) {
						setTimeout(function () {
							throw r;
						});
					}
				}
				function qo(e, t, n) {
					return (
						((n = As(n)).tag = 3),
						(n.payload = { element: null }),
						(n.callback = function () {
							zo(e, t);
						}),
						n
					);
				}
				function Uo(e) {
					return ((e = As(e)).tag = 3), e;
				}
				function Wo(e, t, n, r) {
					var i = n.type.getDerivedStateFromError;
					if ("function" === typeof i) {
						var a = r.value;
						(e.payload = function () {
							return i(a);
						}),
							(e.callback = function () {
								jo(t, n, r);
							});
					}
					var o = n.stateNode;
					null !== o &&
						"function" === typeof o.componentDidCatch &&
						(e.callback = function () {
							jo(t, n, r),
								"function" !== typeof i &&
									(null === kc
										? (kc = new Set([this]))
										: kc.add(this));
							var e = r.stack;
							this.componentDidCatch(r.value, {
								componentStack: null !== e ? e : "",
							});
						});
				}
				var Bo = Error(o(461)),
					Ho = !1;
				function Vo(e, t, n, r) {
					t.child =
						null === e ? ki(t, null, n, r) : wi(t, e.child, n, r);
				}
				function $o(e, t, n, r, i) {
					n = n.render;
					var a = t.ref;
					if ("ref" in r) {
						var o = {};
						for (var s in r) "ref" !== s && (o[s] = r[s]);
					} else o = r;
					return (
						Cs(t),
						(r = da(e, t, n, o, a, i)),
						(s = ma()),
						null === e || Ho
							? (Gr && s && $r(t),
							  (t.flags |= 1),
							  Vo(e, t, r, i),
							  t.child)
							: (ga(e, t, i), fs(e, t, i))
					);
				}
				function Qo(e, t, n, r, i) {
					if (null === e) {
						var a = n.type;
						return "function" !== typeof a ||
							Ml(a) ||
							void 0 !== a.defaultProps ||
							null !== n.compare
							? (((e = jl(n.type, null, r, t, t.mode, i)).ref =
									t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = a), Yo(e, t, a, r, i));
					}
					if (((a = e.child), !hs(e, i))) {
						var o = a.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : Kn)(o, r) &&
							e.ref === t.ref
						)
							return fs(e, t, i);
					}
					return (
						(t.flags |= 1),
						((e = Fl(a, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function Yo(e, t, n, r, i) {
					if (null !== e) {
						var a = e.memoizedProps;
						if (Kn(a, r) && e.ref === t.ref) {
							if (
								((Ho = !1), (t.pendingProps = r = a), !hs(e, i))
							)
								return (t.lanes = e.lanes), fs(e, t, i);
							0 !== (131072 & e.flags) && (Ho = !0);
						}
					}
					return Jo(e, t, n, r, i);
				}
				function Ko(e, t, n) {
					var r = t.pendingProps,
						i = r.children,
						a = 0 !== (2 & t.stateNode._pendingVisibility),
						o = null !== e ? e.memoizedState : null;
					if ((Xo(e, t), "hidden" === r.mode || a)) {
						if (0 !== (128 & t.flags)) {
							if (
								((r = null !== o ? o.baseLanes | n : n),
								null !== e)
							) {
								for (i = t.child = e.child, a = 0; null !== i; )
									(a = a | i.lanes | i.childLanes),
										(i = i.sibling);
								t.childLanes = a & ~r;
							} else (t.childLanes = 0), (t.child = null);
							return Go(e, t, r, n);
						}
						if (0 === (536870912 & n))
							return (
								(t.lanes = t.childLanes = 536870912),
								Go(e, t, null !== o ? o.baseLanes | n : n, n)
							);
						(t.memoizedState = { baseLanes: 0, cachePool: null }),
							null !== e &&
								Gi(0, null !== o ? o.cachePool : null),
							null !== o ? Ei(t, o) : xi(),
							Ai(t);
					} else
						null !== o
							? (Gi(0, o.cachePool),
							  Ei(t, o),
							  Oi(),
							  (t.memoizedState = null))
							: (null !== e && Gi(0, null), xi(), Oi());
					return Vo(e, t, i, n), t.child;
				}
				function Go(e, t, n, r) {
					var i = Ki();
					return (
						(i =
							null === i
								? null
								: { parent: ji._currentValue, pool: i }),
						(t.memoizedState = { baseLanes: n, cachePool: i }),
						null !== e && Gi(0, null),
						xi(),
						Ai(t),
						null !== e && ks(e, t, r, !0),
						null
					);
				}
				function Xo(e, t) {
					var n = t.ref;
					if (null === n)
						null !== e && null !== e.ref && (t.flags |= 2097664);
					else {
						if ("function" !== typeof n && "object" !== typeof n)
							throw Error(o(284));
						(null !== e && e.ref === n) || (t.flags |= 2097664);
					}
				}
				function Jo(e, t, n, r, i) {
					return (
						Cs(t),
						(n = da(e, t, n, r, void 0, i)),
						(r = ma()),
						null === e || Ho
							? (Gr && r && $r(t),
							  (t.flags |= 1),
							  Vo(e, t, n, i),
							  t.child)
							: (ga(e, t, i), fs(e, t, i))
					);
				}
				function Zo(e, t, n, r, i, a) {
					return (
						Cs(t),
						(t.updateQueue = null),
						(n = ha(t, r, n, i)),
						fa(e),
						(r = ma()),
						null === e || Ho
							? (Gr && r && $r(t),
							  (t.flags |= 1),
							  Vo(e, t, n, a),
							  t.child)
							: (ga(e, t, a), fs(e, t, a))
					);
				}
				function es(e, t, n, r, i) {
					if ((Cs(t), null === t.stateNode)) {
						var a = Or,
							o = n.contextType;
						"object" === typeof o && null !== o && (a = Es(o)),
							(a = new n(r, a)),
							(t.memoizedState =
								null !== a.state && void 0 !== a.state
									? a.state
									: null),
							(a.updater = Io),
							(t.stateNode = a),
							(a._reactInternals = t),
							((a = t.stateNode).props = r),
							(a.state = t.memoizedState),
							(a.refs = {}),
							Ns(t),
							(o = n.contextType),
							(a.context =
								"object" === typeof o && null !== o
									? Es(o)
									: Or),
							(a.state = t.memoizedState),
							"function" ===
								typeof (o = n.getDerivedStateFromProps) &&
								(No(t, n, o, r), (a.state = t.memoizedState)),
							"function" === typeof n.getDerivedStateFromProps ||
								"function" ===
									typeof a.getSnapshotBeforeUpdate ||
								("function" !==
									typeof a.UNSAFE_componentWillMount &&
									"function" !==
										typeof a.componentWillMount) ||
								((o = a.state),
								"function" === typeof a.componentWillMount &&
									a.componentWillMount(),
								"function" ===
									typeof a.UNSAFE_componentWillMount &&
									a.UNSAFE_componentWillMount(),
								o !== a.state &&
									Io.enqueueReplaceState(a, a.state, null),
								Fs(t, r, a, i),
								Ms(),
								(a.state = t.memoizedState)),
							"function" === typeof a.componentDidMount &&
								(t.flags |= 4194308),
							(r = !0);
					} else if (null === e) {
						a = t.stateNode;
						var s = t.memoizedProps,
							l = Ro(n, s);
						a.props = l;
						var c = a.context,
							u = n.contextType;
						(o = Or),
							"object" === typeof u && null !== u && (o = Es(u));
						var d = n.getDerivedStateFromProps;
						(u =
							"function" === typeof d ||
							"function" === typeof a.getSnapshotBeforeUpdate),
							(s = t.pendingProps !== s),
							u ||
								("function" !==
									typeof a.UNSAFE_componentWillReceiveProps &&
									"function" !==
										typeof a.componentWillReceiveProps) ||
								((s || c !== o) && Oo(t, a, r, o)),
							(Ps = !1);
						var f = t.memoizedState;
						(a.state = f),
							Fs(t, r, a, i),
							Ms(),
							(c = t.memoizedState),
							s || f !== c || Ps
								? ("function" === typeof d &&
										(No(t, n, d, r), (c = t.memoizedState)),
								  (l = Ps || Ao(t, n, l, r, f, c, o))
										? (u ||
												("function" !==
													typeof a.UNSAFE_componentWillMount &&
													"function" !==
														typeof a.componentWillMount) ||
												("function" ===
													typeof a.componentWillMount &&
													a.componentWillMount(),
												"function" ===
													typeof a.UNSAFE_componentWillMount &&
													a.UNSAFE_componentWillMount()),
										  "function" ===
												typeof a.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" ===
												typeof a.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = r),
										  (t.memoizedState = c)),
								  (a.props = r),
								  (a.state = c),
								  (a.context = o),
								  (r = l))
								: ("function" === typeof a.componentDidMount &&
										(t.flags |= 4194308),
								  (r = !1));
					} else {
						(a = t.stateNode),
							Is(e, t),
							(u = Ro(n, (o = t.memoizedProps))),
							(a.props = u),
							(d = t.pendingProps),
							(f = a.context),
							(c = n.contextType),
							(l = Or),
							"object" === typeof c && null !== c && (l = Es(c)),
							(c =
								"function" ===
									typeof (s = n.getDerivedStateFromProps) ||
								"function" ===
									typeof a.getSnapshotBeforeUpdate) ||
								("function" !==
									typeof a.UNSAFE_componentWillReceiveProps &&
									"function" !==
										typeof a.componentWillReceiveProps) ||
								((o !== d || f !== l) && Oo(t, a, r, l)),
							(Ps = !1),
							(f = t.memoizedState),
							(a.state = f),
							Fs(t, r, a, i),
							Ms();
						var h = t.memoizedState;
						o !== d ||
						f !== h ||
						Ps ||
						(null !== e &&
							null !== e.dependencies &&
							Ss(e.dependencies))
							? ("function" === typeof s &&
									(No(t, n, s, r), (h = t.memoizedState)),
							  (u =
									Ps ||
									Ao(t, n, u, r, f, h, l) ||
									(null !== e &&
										null !== e.dependencies &&
										Ss(e.dependencies)))
									? (c ||
											("function" !==
												typeof a.UNSAFE_componentWillUpdate &&
												"function" !==
													typeof a.componentWillUpdate) ||
											("function" ===
												typeof a.componentWillUpdate &&
												a.componentWillUpdate(r, h, l),
											"function" ===
												typeof a.UNSAFE_componentWillUpdate &&
												a.UNSAFE_componentWillUpdate(
													r,
													h,
													l
												)),
									  "function" ===
											typeof a.componentDidUpdate &&
											(t.flags |= 4),
									  "function" ===
											typeof a.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" !==
											typeof a.componentDidUpdate ||
											(o === e.memoizedProps &&
												f === e.memoizedState) ||
											(t.flags |= 4),
									  "function" !==
											typeof a.getSnapshotBeforeUpdate ||
											(o === e.memoizedProps &&
												f === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = r),
									  (t.memoizedState = h)),
							  (a.props = r),
							  (a.state = h),
							  (a.context = l),
							  (r = u))
							: ("function" !== typeof a.componentDidUpdate ||
									(o === e.memoizedProps &&
										f === e.memoizedState) ||
									(t.flags |= 4),
							  "function" !== typeof a.getSnapshotBeforeUpdate ||
									(o === e.memoizedProps &&
										f === e.memoizedState) ||
									(t.flags |= 1024),
							  (r = !1));
					}
					return (
						(a = r),
						Xo(e, t),
						(r = 0 !== (128 & t.flags)),
						a || r
							? ((a = t.stateNode),
							  (n =
									r &&
									"function" !==
										typeof n.getDerivedStateFromError
										? null
										: a.render()),
							  (t.flags |= 1),
							  null !== e && r
									? ((t.child = wi(t, e.child, null, i)),
									  (t.child = wi(t, null, n, i)))
									: Vo(e, t, n, i),
							  (t.memoizedState = a.state),
							  (e = t.child))
							: (e = fs(e, t, i)),
						e
					);
				}
				function ts(e, t, n, r) {
					return ii(), (t.flags |= 256), Vo(e, t, n, r), t.child;
				}
				var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
				function rs(e) {
					return { baseLanes: e, cachePool: Xi() };
				}
				function is(e, t, n) {
					return (
						(e = null !== e ? e.childLanes & ~n : 0),
						t && (e |= pc),
						e
					);
				}
				function as(e, t, n) {
					var r,
						i = t.pendingProps,
						a = !1,
						s = 0 !== (128 & t.flags);
					if (
						((r = s) ||
							(r =
								(null === e || null !== e.memoizedState) &&
								0 !== (2 & Di.current)),
						r && ((a = !0), (t.flags &= -129)),
						(r = 0 !== (32 & t.flags)),
						(t.flags &= -33),
						null === e)
					) {
						if (Gr) {
							if ((a ? Ii(t) : Oi(), Gr)) {
								var l,
									c = Kr;
								if ((l = c)) {
									e: {
										for (
											l = c, c = Jr;
											8 !== l.nodeType;

										) {
											if (!c) {
												c = null;
												break e;
											}
											if (
												null === (l = sd(l.nextSibling))
											) {
												c = null;
												break e;
											}
										}
										c = l;
									}
									null !== c
										? ((t.memoizedState = {
												dehydrated: c,
												treeContext:
													null !== Ur
														? {
																id: Wr,
																overflow: Br,
														  }
														: null,
												retryLane: 536870912,
										  }),
										  ((l = Ll(
												18,
												null,
												null,
												0
										  )).stateNode = c),
										  (l.return = t),
										  (t.child = l),
										  (Yr = t),
										  (Kr = null),
										  (l = !0))
										: (l = !1);
								}
								l || ei(t);
							}
							if (
								null !== (c = t.memoizedState) &&
								null !== (c = c.dehydrated)
							)
								return (
									"$!" === c.data
										? (t.lanes = 16)
										: (t.lanes = 536870912),
									null
								);
							Ri(t);
						}
						return (
							(c = i.children),
							(i = i.fallback),
							a
								? (Oi(),
								  (c = ss(
										{ mode: "hidden", children: c },
										(a = t.mode)
								  )),
								  (i = ql(i, a, n, null)),
								  (c.return = t),
								  (i.return = t),
								  (c.sibling = i),
								  (t.child = c),
								  ((a = t.child).memoizedState = rs(n)),
								  (a.childLanes = is(e, r, n)),
								  (t.memoizedState = ns),
								  i)
								: (Ii(t), os(t, c))
						);
					}
					if (
						null !== (l = e.memoizedState) &&
						null !== (c = l.dehydrated)
					) {
						if (s)
							256 & t.flags
								? (Ii(t), (t.flags &= -257), (t = ls(e, t, n)))
								: null !== t.memoizedState
								? (Oi(),
								  (t.child = e.child),
								  (t.flags |= 128),
								  (t = null))
								: (Oi(),
								  (a = i.fallback),
								  (c = t.mode),
								  (i = ss(
										{
											mode: "visible",
											children: i.children,
										},
										c
								  )),
								  ((a = ql(a, c, n, null)).flags |= 2),
								  (i.return = t),
								  (a.return = t),
								  (i.sibling = a),
								  (t.child = i),
								  wi(t, e.child, null, n),
								  ((i = t.child).memoizedState = rs(n)),
								  (i.childLanes = is(e, r, n)),
								  (t.memoizedState = ns),
								  (t = a));
						else if ((Ii(t), "$!" === c.data)) {
							if ((r = c.nextSibling && c.nextSibling.dataset))
								var u = r.dgst;
							(r = u),
								((i = Error(o(419))).stack = ""),
								(i.digest = r),
								ai({ value: i, source: null, stack: null }),
								(t = ls(e, t, n));
						} else if (
							(Ho || ks(e, t, n, !1),
							(r = 0 !== (n & e.childLanes)),
							Ho || r)
						) {
							if (null !== (r = tc)) {
								if (0 !== (42 & (i = n & -n))) i = 1;
								else
									switch (i) {
										case 2:
											i = 1;
											break;
										case 8:
											i = 4;
											break;
										case 32:
											i = 16;
											break;
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
											i = 64;
											break;
										case 268435456:
											i = 134217728;
											break;
										default:
											i = 0;
									}
								if (
									0 !==
										(i =
											0 !== (i & (r.suspendedLanes | n))
												? 0
												: i) &&
									i !== l.retryLane
								)
									throw (
										((l.retryLane = i),
										Nr(e, i),
										Oc(r, e, i),
										Bo)
									);
							}
							"$?" === c.data || Hc(), (t = ls(e, t, n));
						} else
							"$?" === c.data
								? ((t.flags |= 128),
								  (t.child = e.child),
								  (t = su.bind(null, e)),
								  (c._reactRetry = t),
								  (t = null))
								: ((e = l.treeContext),
								  (Kr = sd(c.nextSibling)),
								  (Yr = t),
								  (Gr = !0),
								  (Xr = null),
								  (Jr = !1),
								  null !== e &&
										((jr[qr++] = Wr),
										(jr[qr++] = Br),
										(jr[qr++] = Ur),
										(Wr = e.id),
										(Br = e.overflow),
										(Ur = t)),
								  ((t = os(t, i.children)).flags |= 4096));
						return t;
					}
					return a
						? (Oi(),
						  (a = i.fallback),
						  (c = t.mode),
						  (u = (l = e.child).sibling),
						  ((i = Fl(l, {
								mode: "hidden",
								children: i.children,
						  })).subtreeFlags = 31457280 & l.subtreeFlags),
						  null !== u
								? (a = Fl(u, a))
								: ((a = ql(a, c, n, null)).flags |= 2),
						  (a.return = t),
						  (i.return = t),
						  (i.sibling = a),
						  (t.child = i),
						  (i = a),
						  (a = t.child),
						  null === (c = e.child.memoizedState)
								? (c = rs(n))
								: (null !== (l = c.cachePool)
										? ((u = ji._currentValue),
										  (l =
												l.parent !== u
													? { parent: u, pool: u }
													: l))
										: (l = Xi()),
								  (c = {
										baseLanes: c.baseLanes | n,
										cachePool: l,
								  })),
						  (a.memoizedState = c),
						  (a.childLanes = is(e, r, n)),
						  (t.memoizedState = ns),
						  i)
						: (Ii(t),
						  (e = (n = e.child).sibling),
						  ((n = Fl(n, {
								mode: "visible",
								children: i.children,
						  })).return = t),
						  (n.sibling = null),
						  null !== e &&
								(null === (r = t.deletions)
									? ((t.deletions = [e]), (t.flags |= 16))
									: r.push(e)),
						  (t.child = n),
						  (t.memoizedState = null),
						  n);
				}
				function os(e, t) {
					return (
						((t = ss(
							{ mode: "visible", children: t },
							e.mode
						)).return = e),
						(e.child = t)
					);
				}
				function ss(e, t) {
					return Ul(e, t, 0, null);
				}
				function ls(e, t, n) {
					return (
						wi(t, e.child, null, n),
						((e = os(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function cs(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), bs(e.return, t, n);
				}
				function us(e, t, n, r, i) {
					var a = e.memoizedState;
					null === a
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: i,
						  })
						: ((a.isBackwards = t),
						  (a.rendering = null),
						  (a.renderingStartTime = 0),
						  (a.last = r),
						  (a.tail = n),
						  (a.tailMode = i));
				}
				function ds(e, t, n) {
					var r = t.pendingProps,
						i = r.revealOrder,
						a = r.tail;
					if ((Vo(e, t, r.children, n), 0 !== (2 & (r = Di.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag)
									null !== e.memoizedState && cs(e, n, t);
								else if (19 === e.tag) cs(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t)
										break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					switch ((Y(Di, r), i)) {
						case "forwards":
							for (n = t.child, i = null; null !== n; )
								null !== (e = n.alternate) &&
									null === Li(e) &&
									(i = n),
									(n = n.sibling);
							null === (n = i)
								? ((i = t.child), (t.child = null))
								: ((i = n.sibling), (n.sibling = null)),
								us(t, !1, i, n, a);
							break;
						case "backwards":
							for (
								n = null, i = t.child, t.child = null;
								null !== i;

							) {
								if (
									null !== (e = i.alternate) &&
									null === Li(e)
								) {
									t.child = i;
									break;
								}
								(e = i.sibling),
									(i.sibling = n),
									(n = i),
									(i = e);
							}
							us(t, !0, n, null, a);
							break;
						case "together":
							us(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null;
					}
					return t.child;
				}
				function fs(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(dc |= t.lanes),
						0 === (n & t.childLanes))
					) {
						if (null === e) return null;
						if ((ks(e, t, n, !1), 0 === (n & t.childLanes)))
							return null;
					}
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (
							n = Fl((e = t.child), e.pendingProps),
								t.child = n,
								n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling =
									Fl(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function hs(e, t) {
					return (
						0 !== (e.lanes & t) ||
						!(null === (e = e.dependencies) || !Ss(e))
					);
				}
				function ps(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps) Ho = !0;
						else {
							if (!hs(e, n) && 0 === (128 & t.flags))
								return (
									(Ho = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Z(t, t.stateNode.containerInfo),
													vs(
														t,
														ji,
														e.memoizedState.cache
													),
													ii();
												break;
											case 27:
											case 5:
												te(t);
												break;
											case 4:
												Z(t, t.stateNode.containerInfo);
												break;
											case 10:
												vs(
													t,
													t.type,
													t.memoizedProps.value
												);
												break;
											case 13:
												var r = t.memoizedState;
												if (null !== r)
													return null !== r.dehydrated
														? (Ii(t),
														  (t.flags |= 128),
														  null)
														: 0 !==
														  (n &
																t.child
																	.childLanes)
														? as(e, t, n)
														: (Ii(t),
														  null !==
														  (e = fs(e, t, n))
																? e.sibling
																: null);
												Ii(t);
												break;
											case 19:
												var i = 0 !== (128 & e.flags);
												if (
													((r =
														0 !==
														(n & t.childLanes)) ||
														(ks(e, t, n, !1),
														(r =
															0 !==
															(n &
																t.childLanes))),
													i)
												) {
													if (r) return ds(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !==
														(i = t.memoizedState) &&
														((i.rendering = null),
														(i.tail = null),
														(i.lastEffect = null)),
													Y(Di, Di.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (
													(t.lanes = 0), Ko(e, t, n)
												);
											case 24:
												vs(
													t,
													ji,
													e.memoizedState.cache
												);
										}
										return fs(e, t, n);
									})(e, t, n)
								);
							Ho = 0 !== (131072 & e.flags);
						}
					else
						(Ho = !1),
							Gr &&
								0 !== (1048576 & t.flags) &&
								Vr(t, zr, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 16:
							e: {
								e = t.pendingProps;
								var r = t.elementType,
									i = r._init;
								if (
									((r = i(r._payload)),
									(t.type = r),
									"function" !== typeof r)
								) {
									if (void 0 !== r && null !== r) {
										if ((i = r.$$typeof) === y) {
											(t.tag = 11),
												(t = $o(null, t, r, e, n));
											break e;
										}
										if (i === b) {
											(t.tag = 14),
												(t = Qo(null, t, r, e, n));
											break e;
										}
									}
									throw (
										((t = T(r) || r), Error(o(306, t, "")))
									);
								}
								Ml(r)
									? ((e = Ro(r, e)),
									  (t.tag = 1),
									  (t = es(null, t, r, e, n)))
									: ((t.tag = 0), (t = Jo(null, t, r, e, n)));
							}
							return t;
						case 0:
							return Jo(e, t, t.type, t.pendingProps, n);
						case 1:
							return es(
								e,
								t,
								(r = t.type),
								(i = Ro(r, t.pendingProps)),
								n
							);
						case 3:
							e: {
								if (
									(Z(t, t.stateNode.containerInfo),
									null === e)
								)
									throw Error(o(387));
								var a = t.pendingProps;
								(r = (i = t.memoizedState).element),
									Is(e, t),
									Fs(t, a, null, n);
								var s = t.memoizedState;
								if (
									((a = s.cache),
									vs(t, ji, a),
									a !== i.cache && ws(t, [ji], n, !0),
									Ms(),
									(a = s.element),
									i.isDehydrated)
								) {
									if (
										((i = {
											element: a,
											isDehydrated: !1,
											cache: s.cache,
										}),
										(t.updateQueue.baseState = i),
										(t.memoizedState = i),
										256 & t.flags)
									) {
										t = ts(e, t, a, n);
										break e;
									}
									if (a !== r) {
										ai((r = Dr(Error(o(424)), t))),
											(t = ts(e, t, a, n));
										break e;
									}
									for (
										Kr = sd(
											t.stateNode.containerInfo.firstChild
										),
											Yr = t,
											Gr = !0,
											Xr = null,
											Jr = !0,
											n = ki(t, null, a, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096),
											(n = n.sibling);
								} else {
									if ((ii(), a === r)) {
										t = fs(e, t, n);
										break e;
									}
									Vo(e, t, a, n);
								}
								t = t.child;
							}
							return t;
						case 26:
							return (
								Xo(e, t),
								null === e
									? (n = gd(
											t.type,
											null,
											t.pendingProps,
											null
									  ))
										? (t.memoizedState = n)
										: Gr ||
										  ((n = t.type),
										  (e = t.pendingProps),
										  ((r = Ku(X.current).createElement(n))[
												ze
										  ] = t),
										  (r[je] = e),
										  $u(r, n, e),
										  Xe(r),
										  (t.stateNode = r))
									: (t.memoizedState = gd(
											t.type,
											e.memoizedProps,
											t.pendingProps,
											e.memoizedState
									  )),
								null
							);
						case 27:
							return (
								te(t),
								null === e &&
									Gr &&
									((r = t.stateNode =
										cd(t.type, t.pendingProps, X.current)),
									(Yr = t),
									(Jr = !0),
									(Kr = sd(r.firstChild))),
								(r = t.pendingProps.children),
								null !== e || Gr
									? Vo(e, t, r, n)
									: (t.child = wi(t, null, r, n)),
								Xo(e, t),
								t.child
							);
						case 5:
							return (
								null === e &&
									Gr &&
									((i = r = Kr) &&
										(null !==
										(r = (function (e, t, n, r) {
											for (; 1 === e.nodeType; ) {
												var i = n;
												if (
													e.nodeName.toLowerCase() !==
													t.toLowerCase()
												) {
													if (
														!r &&
														("INPUT" !==
															e.nodeName ||
															"hidden" !== e.type)
													)
														break;
												} else if (r) {
													if (!e[Ve])
														switch (t) {
															case "meta":
																if (
																	!e.hasAttribute(
																		"itemprop"
																	)
																)
																	break;
																return e;
															case "link":
																if (
																	"stylesheet" ===
																		(a =
																			e.getAttribute(
																				"rel"
																			)) &&
																	e.hasAttribute(
																		"data-precedence"
																	)
																)
																	break;
																if (
																	a !==
																		i.rel ||
																	e.getAttribute(
																		"href"
																	) !==
																		(null ==
																		i.href
																			? null
																			: i.href) ||
																	e.getAttribute(
																		"crossorigin"
																	) !==
																		(null ==
																		i.crossOrigin
																			? null
																			: i.crossOrigin) ||
																	e.getAttribute(
																		"title"
																	) !==
																		(null ==
																		i.title
																			? null
																			: i.title)
																)
																	break;
																return e;
															case "style":
																if (
																	e.hasAttribute(
																		"data-precedence"
																	)
																)
																	break;
																return e;
															case "script":
																if (
																	((a =
																		e.getAttribute(
																			"src"
																		)) !==
																		(null ==
																		i.src
																			? null
																			: i.src) ||
																		e.getAttribute(
																			"type"
																		) !==
																			(null ==
																			i.type
																				? null
																				: i.type) ||
																		e.getAttribute(
																			"crossorigin"
																		) !==
																			(null ==
																			i.crossOrigin
																				? null
																				: i.crossOrigin)) &&
																	a &&
																	e.hasAttribute(
																		"async"
																	) &&
																	!e.hasAttribute(
																		"itemprop"
																	)
																)
																	break;
																return e;
															default:
																return e;
														}
												} else {
													if (
														"input" !== t ||
														"hidden" !== e.type
													)
														return e;
													var a =
														null == i.name
															? null
															: "" + i.name;
													if (
														"hidden" === i.type &&
														e.getAttribute(
															"name"
														) === a
													)
														return e;
												}
												if (
													null ===
													(e = sd(e.nextSibling))
												)
													break;
											}
											return null;
										})(r, t.type, t.pendingProps, Jr))
											? ((t.stateNode = r),
											  (Yr = t),
											  (Kr = sd(r.firstChild)),
											  (Jr = !1),
											  (i = !0))
											: (i = !1)),
									i || ei(t)),
								te(t),
								(i = t.type),
								(a = t.pendingProps),
								(s = null !== e ? e.memoizedProps : null),
								(r = a.children),
								Ju(i, a)
									? (r = null)
									: null !== s && Ju(i, s) && (t.flags |= 32),
								null !== t.memoizedState &&
									((i = da(e, t, pa, null, null, n)),
									(Md._currentValue = i)),
								Xo(e, t),
								Vo(e, t, r, n),
								t.child
							);
						case 6:
							return (
								null === e &&
									Gr &&
									((e = n = Kr) &&
										(null !==
										(n = (function (e, t, n) {
											if ("" === t) return null;
											for (; 3 !== e.nodeType; ) {
												if (
													(1 !== e.nodeType ||
														"INPUT" !==
															e.nodeName ||
														"hidden" !== e.type) &&
													!n
												)
													return null;
												if (
													null ===
													(e = sd(e.nextSibling))
												)
													return null;
											}
											return e;
										})(n, t.pendingProps, Jr))
											? ((t.stateNode = n),
											  (Yr = t),
											  (Kr = null),
											  (e = !0))
											: (e = !1)),
									e || ei(t)),
								null
							);
						case 13:
							return as(e, t, n);
						case 4:
							return (
								Z(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e
									? (t.child = wi(t, null, r, n))
									: Vo(e, t, r, n),
								t.child
							);
						case 11:
							return $o(e, t, t.type, t.pendingProps, n);
						case 7:
							return Vo(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return (
								Vo(e, t, t.pendingProps.children, n), t.child
							);
						case 10:
							return (
								(r = t.pendingProps),
								vs(t, t.type, r.value),
								Vo(e, t, r.children, n),
								t.child
							);
						case 9:
							return (
								(i = t.type._context),
								(r = t.pendingProps.children),
								Cs(t),
								(r = r((i = Es(i)))),
								(t.flags |= 1),
								Vo(e, t, r, n),
								t.child
							);
						case 14:
							return Qo(e, t, t.type, t.pendingProps, n);
						case 15:
							return Yo(e, t, t.type, t.pendingProps, n);
						case 19:
							return ds(e, t, n);
						case 22:
							return Ko(e, t, n);
						case 24:
							return (
								Cs(t),
								(r = Es(ji)),
								null === e
									? (null === (i = Ki()) &&
											((i = tc),
											(a = qi()),
											(i.pooledCache = a),
											a.refCount++,
											null !== a &&
												(i.pooledCacheLanes |= n),
											(i = a)),
									  (t.memoizedState = {
											parent: r,
											cache: i,
									  }),
									  Ns(t),
									  vs(t, ji, i))
									: (0 !== (e.lanes & n) &&
											(Is(e, t),
											Fs(t, null, null, n),
											Ms()),
									  (i = e.memoizedState),
									  (a = t.memoizedState),
									  i.parent !== r
											? ((i = { parent: r, cache: r }),
											  (t.memoizedState = i),
											  0 === t.lanes &&
													(t.memoizedState =
														t.updateQueue.baseState =
															i),
											  vs(t, ji, r))
											: ((r = a.cache),
											  vs(t, ji, r),
											  r !== i.cache &&
													ws(t, [ji], n, !0))),
								Vo(e, t, t.pendingProps.children, n),
								t.child
							);
						case 29:
							throw t.pendingProps;
					}
					throw Error(o(156, t.tag));
				}
				var ms = $(null),
					gs = null,
					ys = null;
				function vs(e, t, n) {
					Y(ms, t._currentValue), (t._currentValue = n);
				}
				function _s(e) {
					(e._currentValue = ms.current), Q(ms);
				}
				function bs(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t),
								  null !== r && (r.childLanes |= t))
								: null !== r &&
								  (r.childLanes & t) !== t &&
								  (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function ws(e, t, n, r) {
					var i = e.child;
					for (null !== i && (i.return = e); null !== i; ) {
						var a = i.dependencies;
						if (null !== a) {
							var s = i.child;
							a = a.firstContext;
							e: for (; null !== a; ) {
								var l = a;
								a = i;
								for (var c = 0; c < t.length; c++)
									if (l.context === t[c]) {
										(a.lanes |= n),
											null !== (l = a.alternate) &&
												(l.lanes |= n),
											bs(a.return, n, e),
											r || (s = null);
										break e;
									}
								a = l.next;
							}
						} else if (18 === i.tag) {
							if (null === (s = i.return)) throw Error(o(341));
							(s.lanes |= n),
								null !== (a = s.alternate) && (a.lanes |= n),
								bs(s, n, e),
								(s = null);
						} else s = i.child;
						if (null !== s) s.return = i;
						else
							for (s = i; null !== s; ) {
								if (s === e) {
									s = null;
									break;
								}
								if (null !== (i = s.sibling)) {
									(i.return = s.return), (s = i);
									break;
								}
								s = s.return;
							}
						i = s;
					}
				}
				function ks(e, t, n, r) {
					e = null;
					for (var i = t, a = !1; null !== i; ) {
						if (!a)
							if (0 !== (524288 & i.flags)) a = !0;
							else if (0 !== (262144 & i.flags)) break;
						if (10 === i.tag) {
							var s = i.alternate;
							if (null === s) throw Error(o(387));
							if (null !== (s = s.memoizedProps)) {
								var l = i.type;
								Yn(i.pendingProps.value, s.value) ||
									(null !== e ? e.push(l) : (e = [l]));
							}
						} else if (i === J.current) {
							if (null === (s = i.alternate)) throw Error(o(387));
							s.memoizedState.memoizedState !==
								i.memoizedState.memoizedState &&
								(null !== e ? e.push(Md) : (e = [Md]));
						}
						i = i.return;
					}
					null !== e && ws(t, e, n, r), (t.flags |= 262144);
				}
				function Ss(e) {
					for (e = e.firstContext; null !== e; ) {
						if (!Yn(e.context._currentValue, e.memoizedValue))
							return !0;
						e = e.next;
					}
					return !1;
				}
				function Cs(e) {
					(gs = e),
						(ys = null),
						null !== (e = e.dependencies) &&
							(e.firstContext = null);
				}
				function Es(e) {
					return Ts(gs, e);
				}
				function xs(e, t) {
					return null === gs && Cs(e), Ts(e, t);
				}
				function Ts(e, t) {
					var n = t._currentValue;
					if (
						((t = { context: t, memoizedValue: n, next: null }),
						null === ys)
					) {
						if (null === e) throw Error(o(308));
						(ys = t),
							(e.dependencies = { lanes: 0, firstContext: t }),
							(e.flags |= 524288);
					} else ys = ys.next = t;
					return n;
				}
				var Ps = !1;
				function Ns(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							lanes: 0,
							hiddenCallbacks: null,
						},
						callbacks: null,
					};
				}
				function Is(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								callbacks: null,
							});
				}
				function As(e) {
					return {
						lane: e,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Os(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & ec))) {
						var i = r.pending;
						return (
							null === i
								? (t.next = t)
								: ((t.next = i.next), (i.next = t)),
							(r.pending = t),
							(t = Ar(e)),
							Ir(e, null, n),
							t
						);
					}
					return Tr(e, r, t, n), Ar(e);
				}
				function Rs(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 !== (4194176 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), De(e, n);
					}
				}
				function Ds(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var i = null,
							a = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var o = {
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: null,
									next: null,
								};
								null === a ? (i = a = o) : (a = a.next = o),
									(n = n.next);
							} while (null !== n);
							null === a ? (i = a = t) : (a = a.next = t);
						} else i = a = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: i,
								lastBaseUpdate: a,
								shared: r.shared,
								callbacks: r.callbacks,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				var Ls = !1;
				function Ms() {
					if (Ls) {
						if (null !== Vi) throw Vi;
					}
				}
				function Fs(e, t, n, r) {
					Ls = !1;
					var i = e.updateQueue;
					Ps = !1;
					var a = i.firstBaseUpdate,
						o = i.lastBaseUpdate,
						s = i.shared.pending;
					if (null !== s) {
						i.shared.pending = null;
						var l = s,
							c = l.next;
						(l.next = null),
							null === o ? (a = c) : (o.next = c),
							(o = l);
						var u = e.alternate;
						null !== u &&
							(s = (u = u.updateQueue).lastBaseUpdate) !== o &&
							(null === s
								? (u.firstBaseUpdate = c)
								: (s.next = c),
							(u.lastBaseUpdate = l));
					}
					if (null !== a) {
						var d = i.baseState;
						for (o = 0, u = c = l = null, s = a; ; ) {
							var f = -536870913 & s.lane,
								h = f !== s.lane;
							if (h ? (rc & f) === f : (r & f) === f) {
								0 !== f && f === Hi && (Ls = !0),
									null !== u &&
										(u = u.next =
											{
												lane: 0,
												tag: s.tag,
												payload: s.payload,
												callback: null,
												next: null,
											});
								e: {
									var p = e,
										m = s;
									f = t;
									var g = n;
									switch (m.tag) {
										case 1:
											if (
												"function" ===
												typeof (p = m.payload)
											) {
												d = p.call(g, d, f);
												break e;
											}
											d = p;
											break e;
										case 3:
											p.flags = (-65537 & p.flags) | 128;
										case 0:
											if (
												null ===
													(f =
														"function" ===
														typeof (p = m.payload)
															? p.call(g, d, f)
															: p) ||
												void 0 === f
											)
												break e;
											d = A({}, d, f);
											break e;
										case 2:
											Ps = !0;
									}
								}
								null !== (f = s.callback) &&
									((e.flags |= 64),
									h && (e.flags |= 8192),
									null === (h = i.callbacks)
										? (i.callbacks = [f])
										: h.push(f));
							} else
								(h = {
									lane: f,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null,
								}),
									null === u
										? ((c = u = h), (l = d))
										: (u = u.next = h),
									(o |= f);
							if (null === (s = s.next)) {
								if (null === (s = i.shared.pending)) break;
								(s = (h = s).next),
									(h.next = null),
									(i.lastBaseUpdate = h),
									(i.shared.pending = null);
							}
						}
						null === u && (l = d),
							(i.baseState = l),
							(i.firstBaseUpdate = c),
							(i.lastBaseUpdate = u),
							null === a && (i.shared.lanes = 0),
							(dc |= o),
							(e.lanes = o),
							(e.memoizedState = d);
					}
				}
				function zs(e, t) {
					if ("function" !== typeof e) throw Error(o(191, e));
					e.call(t);
				}
				function js(e, t) {
					var n = e.callbacks;
					if (null !== n)
						for (e.callbacks = null, e = 0; e < n.length; e++)
							zs(n[e], t);
				}
				function qs(e, t) {
					try {
						var n = t.updateQueue,
							r = null !== n ? n.lastEffect : null;
						if (null !== r) {
							var i = r.next;
							n = i;
							do {
								if ((n.tag & e) === e) {
									r = void 0;
									var a = n.create,
										o = n.inst;
									(r = a()), (o.destroy = r);
								}
								n = n.next;
							} while (n !== i);
						}
					} catch (s) {
						ru(t, t.return, s);
					}
				}
				function Us(e, t, n) {
					try {
						var r = t.updateQueue,
							i = null !== r ? r.lastEffect : null;
						if (null !== i) {
							var a = i.next;
							r = a;
							do {
								if ((r.tag & e) === e) {
									var o = r.inst,
										s = o.destroy;
									if (void 0 !== s) {
										(o.destroy = void 0), (i = t);
										var l = n;
										try {
											s();
										} catch (c) {
											ru(i, l, c);
										}
									}
								}
								r = r.next;
							} while (r !== a);
						}
					} catch (c) {
						ru(t, t.return, c);
					}
				}
				function Ws(e) {
					var t = e.updateQueue;
					if (null !== t) {
						var n = e.stateNode;
						try {
							js(t, n);
						} catch (r) {
							ru(e, e.return, r);
						}
					}
				}
				function Bs(e, t, n) {
					(n.props = Ro(e.type, e.memoizedProps)),
						(n.state = e.memoizedState);
					try {
						n.componentWillUnmount();
					} catch (r) {
						ru(e, t, r);
					}
				}
				function Hs(e, t) {
					try {
						var n = e.ref;
						if (null !== n) {
							var r = e.stateNode;
							switch (e.tag) {
								case 26:
								case 27:
								case 5:
									var i = r;
									break;
								default:
									i = r;
							}
							"function" === typeof n
								? (e.refCleanup = n(i))
								: (n.current = i);
						}
					} catch (a) {
						ru(e, t, a);
					}
				}
				function Vs(e, t) {
					var n = e.ref,
						r = e.refCleanup;
					if (null !== n)
						if ("function" === typeof r)
							try {
								r();
							} catch (i) {
								ru(e, t, i);
							} finally {
								(e.refCleanup = null),
									null != (e = e.alternate) &&
										(e.refCleanup = null);
							}
						else if ("function" === typeof n)
							try {
								n(null);
							} catch (a) {
								ru(e, t, a);
							}
						else n.current = null;
				}
				function $s(e) {
					var t = e.type,
						n = e.memoizedProps,
						r = e.stateNode;
					try {
						e: switch (t) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								n.autoFocus && r.focus();
								break e;
							case "img":
								n.src
									? (r.src = n.src)
									: n.srcSet && (r.srcset = n.srcSet);
						}
					} catch (i) {
						ru(e, e.return, i);
					}
				}
				function Qs(e, t, n) {
					try {
						var r = e.stateNode;
						!(function (e, t, n, r) {
							switch (t) {
								case "div":
								case "span":
								case "svg":
								case "path":
								case "a":
								case "g":
								case "p":
								case "li":
									break;
								case "input":
									var i = null,
										a = null,
										s = null,
										l = null,
										c = null,
										u = null,
										d = null;
									for (p in n) {
										var f = n[p];
										if (n.hasOwnProperty(p) && null != f)
											switch (p) {
												case "checked":
												case "value":
													break;
												case "defaultValue":
													c = f;
												default:
													r.hasOwnProperty(p) ||
														Hu(e, t, p, null, r, f);
											}
									}
									for (var h in r) {
										var p = r[h];
										if (
											((f = n[h]),
											r.hasOwnProperty(h) &&
												(null != p || null != f))
										)
											switch (h) {
												case "type":
													a = p;
													break;
												case "name":
													i = p;
													break;
												case "checked":
													u = p;
													break;
												case "defaultChecked":
													d = p;
													break;
												case "value":
													s = p;
													break;
												case "defaultValue":
													l = p;
													break;
												case "children":
												case "dangerouslySetInnerHTML":
													if (null != p)
														throw Error(o(137, t));
													break;
												default:
													p !== f &&
														Hu(e, t, h, p, r, f);
											}
									}
									return void gt(e, s, l, c, u, d, a, i);
								case "select":
									for (a in ((p = s = l = h = null), n))
										if (
											((c = n[a]),
											n.hasOwnProperty(a) && null != c)
										)
											switch (a) {
												case "value":
													break;
												case "multiple":
													p = c;
												default:
													r.hasOwnProperty(a) ||
														Hu(e, t, a, null, r, c);
											}
									for (i in r)
										if (
											((a = r[i]),
											(c = n[i]),
											r.hasOwnProperty(i) &&
												(null != a || null != c))
										)
											switch (i) {
												case "value":
													h = a;
													break;
												case "defaultValue":
													l = a;
													break;
												case "multiple":
													s = a;
												default:
													a !== c &&
														Hu(e, t, i, a, r, c);
											}
									return (
										(t = l),
										(n = s),
										(r = p),
										void (null != h
											? _t(e, !!n, h, !1)
											: !!r !== !!n &&
											  (null != t
													? _t(e, !!n, t, !0)
													: _t(
															e,
															!!n,
															n ? [] : "",
															!1
													  )))
									);
								case "textarea":
									for (l in ((p = h = null), n))
										if (
											((i = n[l]),
											n.hasOwnProperty(l) &&
												null != i &&
												!r.hasOwnProperty(l))
										)
											switch (l) {
												case "value":
												case "children":
													break;
												default:
													Hu(e, t, l, null, r, i);
											}
									for (s in r)
										if (
											((i = r[s]),
											(a = n[s]),
											r.hasOwnProperty(s) &&
												(null != i || null != a))
										)
											switch (s) {
												case "value":
													h = i;
													break;
												case "defaultValue":
													p = i;
													break;
												case "children":
													break;
												case "dangerouslySetInnerHTML":
													if (null != i)
														throw Error(o(91));
													break;
												default:
													i !== a &&
														Hu(e, t, s, i, r, a);
											}
									return void bt(e, h, p);
								case "option":
									for (var m in n)
										if (
											((h = n[m]),
											n.hasOwnProperty(m) &&
												null != h &&
												!r.hasOwnProperty(m))
										)
											if ("selected" === m)
												e.selected = !1;
											else Hu(e, t, m, null, r, h);
									for (c in r)
										if (
											((h = r[c]),
											(p = n[c]),
											r.hasOwnProperty(c) &&
												h !== p &&
												(null != h || null != p))
										)
											if ("selected" === c)
												e.selected =
													h &&
													"function" !== typeof h &&
													"symbol" !== typeof h;
											else Hu(e, t, c, h, r, p);
									return;
								case "img":
								case "link":
								case "area":
								case "base":
								case "br":
								case "col":
								case "embed":
								case "hr":
								case "keygen":
								case "meta":
								case "param":
								case "source":
								case "track":
								case "wbr":
								case "menuitem":
									for (var g in n)
										(h = n[g]),
											n.hasOwnProperty(g) &&
												null != h &&
												!r.hasOwnProperty(g) &&
												Hu(e, t, g, null, r, h);
									for (u in r)
										if (
											((h = r[u]),
											(p = n[u]),
											r.hasOwnProperty(u) &&
												h !== p &&
												(null != h || null != p))
										)
											switch (u) {
												case "children":
												case "dangerouslySetInnerHTML":
													if (null != h)
														throw Error(o(137, t));
													break;
												default:
													Hu(e, t, u, h, r, p);
											}
									return;
								default:
									if (xt(t)) {
										for (var y in n)
											(h = n[y]),
												n.hasOwnProperty(y) &&
													void 0 !== h &&
													!r.hasOwnProperty(y) &&
													Vu(e, t, y, void 0, r, h);
										for (d in r)
											(h = r[d]),
												(p = n[d]),
												!r.hasOwnProperty(d) ||
													h === p ||
													(void 0 === h &&
														void 0 === p) ||
													Vu(e, t, d, h, r, p);
										return;
									}
							}
							for (var v in n)
								(h = n[v]),
									n.hasOwnProperty(v) &&
										null != h &&
										!r.hasOwnProperty(v) &&
										Hu(e, t, v, null, r, h);
							for (f in r)
								(h = r[f]),
									(p = n[f]),
									!r.hasOwnProperty(f) ||
										h === p ||
										(null == h && null == p) ||
										Hu(e, t, f, h, r, p);
						})(r, e.type, n, t),
							(r[je] = t);
					} catch (i) {
						ru(e, e.return, i);
					}
				}
				function Ys(e) {
					return (
						5 === e.tag ||
						3 === e.tag ||
						26 === e.tag ||
						27 === e.tag ||
						4 === e.tag
					);
				}
				function Ks(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || Ys(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag &&
							6 !== e.tag &&
							27 !== e.tag &&
							18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function Gs(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
								  (null !== (n = n._reactRootContainer) &&
										void 0 !== n) ||
										null !== t.onclick ||
										(t.onclick = Bu));
					else if (4 !== r && 27 !== r && null !== (e = e.child))
						for (Gs(e, t, n), e = e.sibling; null !== e; )
							Gs(e, t, n), (e = e.sibling);
				}
				function Xs(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && 27 !== r && null !== (e = e.child))
						for (Xs(e, t, n), e = e.sibling; null !== e; )
							Xs(e, t, n), (e = e.sibling);
				}
				var Js = !1,
					Zs = !1,
					el = !1,
					tl = "function" === typeof WeakSet ? WeakSet : Set,
					nl = null,
					rl = !1;
				function il(e, t, n) {
					var r = n.flags;
					switch (n.tag) {
						case 0:
						case 11:
						case 15:
							yl(e, n), 4 & r && qs(5, n);
							break;
						case 1:
							if ((yl(e, n), 4 & r))
								if (((e = n.stateNode), null === t))
									try {
										e.componentDidMount();
									} catch (s) {
										ru(n, n.return, s);
									}
								else {
									var i = Ro(n.type, t.memoizedProps);
									t = t.memoizedState;
									try {
										e.componentDidUpdate(
											i,
											t,
											e.__reactInternalSnapshotBeforeUpdate
										);
									} catch (l) {
										ru(n, n.return, l);
									}
								}
							64 & r && Ws(n), 512 & r && Hs(n, n.return);
							break;
						case 3:
							if (
								(yl(e, n),
								64 & r && null !== (r = n.updateQueue))
							) {
								if (((e = null), null !== n.child))
									switch (n.child.tag) {
										case 27:
										case 5:
										case 1:
											e = n.child.stateNode;
									}
								try {
									js(r, e);
								} catch (s) {
									ru(n, n.return, s);
								}
							}
							break;
						case 26:
							yl(e, n), 512 & r && Hs(n, n.return);
							break;
						case 27:
						case 5:
							yl(e, n),
								null === t && 4 & r && $s(n),
								512 & r && Hs(n, n.return);
							break;
						case 12:
						default:
							yl(e, n);
							break;
						case 13:
							yl(e, n), 4 & r && ul(e, n);
							break;
						case 22:
							if (!(i = null !== n.memoizedState || Js)) {
								t =
									(null !== t && null !== t.memoizedState) ||
									Zs;
								var a = Js,
									o = Zs;
								(Js = i),
									(Zs = t) && !o
										? _l(
												e,
												n,
												0 !== (8772 & n.subtreeFlags)
										  )
										: yl(e, n),
									(Js = a),
									(Zs = o);
							}
							512 & r &&
								("manual" === n.memoizedProps.mode
									? Hs(n, n.return)
									: Vs(n, n.return));
					}
				}
				function al(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), al(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag && null !== (t = e.stateNode) && $e(t),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				var ol = null,
					sl = !1;
				function ll(e, t, n) {
					for (n = n.child; null !== n; )
						cl(e, t, n), (n = n.sibling);
				}
				function cl(e, t, n) {
					if (ve && "function" === typeof ve.onCommitFiberUnmount)
						try {
							ve.onCommitFiberUnmount(ye, n);
						} catch (o) {}
					switch (n.tag) {
						case 26:
							Zs || Vs(n, t),
								ll(e, t, n),
								n.memoizedState
									? n.memoizedState.count--
									: n.stateNode &&
									  (n = n.stateNode).parentNode.removeChild(
											n
									  );
							break;
						case 27:
							Zs || Vs(n, t);
							var r = ol,
								i = sl;
							for (
								ol = n.stateNode,
									ll(e, t, n),
									t = (n = n.stateNode).attributes;
								t.length;

							)
								n.removeAttributeNode(t[0]);
							$e(n), (ol = r), (sl = i);
							break;
						case 5:
							Zs || Vs(n, t);
						case 6:
							i = ol;
							var a = sl;
							if (
								((ol = null),
								ll(e, t, n),
								(sl = a),
								null !== (ol = i))
							)
								if (sl)
									try {
										(e = ol),
											(r = n.stateNode),
											8 === e.nodeType
												? e.parentNode.removeChild(r)
												: e.removeChild(r);
									} catch (s) {
										ru(n, t, s);
									}
								else
									try {
										ol.removeChild(n.stateNode);
									} catch (s) {
										ru(n, t, s);
									}
							break;
						case 18:
							null !== ol &&
								(sl
									? ((t = ol),
									  (n = n.stateNode),
									  8 === t.nodeType
											? ad(t.parentNode, n)
											: 1 === t.nodeType && ad(t, n),
									  gf(t))
									: ad(ol, n.stateNode));
							break;
						case 4:
							(r = ol),
								(i = sl),
								(ol = n.stateNode.containerInfo),
								(sl = !0),
								ll(e, t, n),
								(ol = r),
								(sl = i);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							Zs || Us(2, n, t), Zs || Us(4, n, t), ll(e, t, n);
							break;
						case 1:
							Zs ||
								(Vs(n, t),
								"function" ===
									typeof (r = n.stateNode)
										.componentWillUnmount && Bs(n, t, r)),
								ll(e, t, n);
							break;
						case 21:
							ll(e, t, n);
							break;
						case 22:
							Zs || Vs(n, t),
								(Zs = (r = Zs) || null !== n.memoizedState),
								ll(e, t, n),
								(Zs = r);
							break;
						default:
							ll(e, t, n);
					}
				}
				function ul(e, t) {
					if (
						null === t.memoizedState &&
						null !== (e = t.alternate) &&
						null !== (e = e.memoizedState) &&
						null !== (e = e.dehydrated)
					)
						try {
							gf(e);
						} catch (n) {
							ru(t, t.return, n);
						}
				}
				function dl(e, t) {
					var n = (function (e) {
						switch (e.tag) {
							case 13:
							case 19:
								var t = e.stateNode;
								return (
									null === t && (t = e.stateNode = new tl()),
									t
								);
							case 22:
								return (
									null ===
										(t = (e = e.stateNode)._retryCache) &&
										(t = e._retryCache = new tl()),
									t
								);
							default:
								throw Error(o(435, e.tag));
						}
					})(e);
					t.forEach(function (t) {
						var r = lu.bind(null, e, t);
						n.has(t) || (n.add(t), t.then(r, r));
					});
				}
				function fl(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var i = n[r],
								a = e,
								s = t,
								l = s;
							e: for (; null !== l; ) {
								switch (l.tag) {
									case 27:
									case 5:
										(ol = l.stateNode), (sl = !1);
										break e;
									case 3:
									case 4:
										(ol = l.stateNode.containerInfo),
											(sl = !0);
										break e;
								}
								l = l.return;
							}
							if (null === ol) throw Error(o(160));
							cl(a, s, i),
								(ol = null),
								(sl = !1),
								null !== (a = i.alternate) && (a.return = null),
								(i.return = null);
						}
					if (13878 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							pl(t, e), (t = t.sibling);
				}
				var hl = null;
				function pl(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							fl(t, e),
								ml(e),
								4 & r &&
									(Us(3, e, e.return),
									qs(3, e),
									Us(5, e, e.return));
							break;
						case 1:
							fl(t, e),
								ml(e),
								512 & r &&
									(Zs || null === n || Vs(n, n.return)),
								64 & r &&
									Js &&
									null !== (e = e.updateQueue) &&
									null !== (r = e.callbacks) &&
									((n = e.shared.hiddenCallbacks),
									(e.shared.hiddenCallbacks =
										null === n ? r : n.concat(r)));
							break;
						case 26:
							var i = hl;
							if (
								(fl(t, e),
								ml(e),
								512 & r &&
									(Zs || null === n || Vs(n, n.return)),
								4 & r)
							) {
								var a = null !== n ? n.memoizedState : null;
								if (((r = e.memoizedState), null === n))
									if (null === r)
										if (null === e.stateNode) {
											e: {
												(r = e.type),
													(n = e.memoizedProps),
													(i = i.ownerDocument || i);
												t: switch (r) {
													case "title":
														(!(a =
															i.getElementsByTagName(
																"title"
															)[0]) ||
															a[Ve] ||
															a[ze] ||
															"http://www.w3.org/2000/svg" ===
																a.namespaceURI ||
															a.hasAttribute(
																"itemprop"
															)) &&
															((a =
																i.createElement(
																	r
																)),
															i.head.insertBefore(
																a,
																i.querySelector(
																	"head > title"
																)
															)),
															$u(a, r, n),
															(a[ze] = e),
															Xe(a),
															(r = a);
														break e;
													case "link":
														var s = Td(
															"link",
															"href",
															i
														).get(
															r + (n.href || "")
														);
														if (s)
															for (
																var l = 0;
																l < s.length;
																l++
															)
																if (
																	(a =
																		s[
																			l
																		]).getAttribute(
																		"href"
																	) ===
																		(null ==
																		n.href
																			? null
																			: n.href) &&
																	a.getAttribute(
																		"rel"
																	) ===
																		(null ==
																		n.rel
																			? null
																			: n.rel) &&
																	a.getAttribute(
																		"title"
																	) ===
																		(null ==
																		n.title
																			? null
																			: n.title) &&
																	a.getAttribute(
																		"crossorigin"
																	) ===
																		(null ==
																		n.crossOrigin
																			? null
																			: n.crossOrigin)
																) {
																	s.splice(
																		l,
																		1
																	);
																	break t;
																}
														$u(
															(a =
																i.createElement(
																	r
																)),
															r,
															n
														),
															i.head.appendChild(
																a
															);
														break;
													case "meta":
														if (
															(s = Td(
																"meta",
																"content",
																i
															).get(
																r +
																	(n.content ||
																		"")
															))
														)
															for (
																l = 0;
																l < s.length;
																l++
															)
																if (
																	(a =
																		s[
																			l
																		]).getAttribute(
																		"content"
																	) ===
																		(null ==
																		n.content
																			? null
																			: "" +
																			  n.content) &&
																	a.getAttribute(
																		"name"
																	) ===
																		(null ==
																		n.name
																			? null
																			: n.name) &&
																	a.getAttribute(
																		"property"
																	) ===
																		(null ==
																		n.property
																			? null
																			: n.property) &&
																	a.getAttribute(
																		"http-equiv"
																	) ===
																		(null ==
																		n.httpEquiv
																			? null
																			: n.httpEquiv) &&
																	a.getAttribute(
																		"charset"
																	) ===
																		(null ==
																		n.charSet
																			? null
																			: n.charSet)
																) {
																	s.splice(
																		l,
																		1
																	);
																	break t;
																}
														$u(
															(a =
																i.createElement(
																	r
																)),
															r,
															n
														),
															i.head.appendChild(
																a
															);
														break;
													default:
														throw Error(o(468, r));
												}
												(a[ze] = e), Xe(a), (r = a);
											}
											e.stateNode = r;
										} else Pd(i, e.type, e.stateNode);
									else
										e.stateNode = kd(i, r, e.memoizedProps);
								else
									a !== r
										? (null === a
												? null !== n.stateNode &&
												  (n =
														n.stateNode).parentNode.removeChild(
														n
												  )
												: a.count--,
										  null === r
												? Pd(i, e.type, e.stateNode)
												: kd(i, r, e.memoizedProps))
										: null === r &&
										  null !== e.stateNode &&
										  Qs(
												e,
												e.memoizedProps,
												n.memoizedProps
										  );
							}
							break;
						case 27:
							if (4 & r && null === e.alternate) {
								(i = e.stateNode), (a = e.memoizedProps);
								try {
									for (var c = i.firstChild; c; ) {
										var u = c.nextSibling,
											d = c.nodeName;
										c[Ve] ||
											"HEAD" === d ||
											"BODY" === d ||
											"SCRIPT" === d ||
											"STYLE" === d ||
											("LINK" === d &&
												"stylesheet" ===
													c.rel.toLowerCase()) ||
											i.removeChild(c),
											(c = u);
									}
									for (
										var f = e.type, h = i.attributes;
										h.length;

									)
										i.removeAttributeNode(h[0]);
									$u(i, f, a), (i[ze] = e), (i[je] = a);
								} catch (m) {
									ru(e, e.return, m);
								}
							}
						case 5:
							if (
								(fl(t, e),
								ml(e),
								512 & r &&
									(Zs || null === n || Vs(n, n.return)),
								32 & e.flags)
							) {
								i = e.stateNode;
								try {
									kt(i, "");
								} catch (m) {
									ru(e, e.return, m);
								}
							}
							4 & r &&
								null != e.stateNode &&
								Qs(
									e,
									(i = e.memoizedProps),
									null !== n ? n.memoizedProps : i
								),
								1024 & r && (el = !0);
							break;
						case 6:
							if ((fl(t, e), ml(e), 4 & r)) {
								if (null === e.stateNode) throw Error(o(162));
								(r = e.memoizedProps), (n = e.stateNode);
								try {
									n.nodeValue = r;
								} catch (m) {
									ru(e, e.return, m);
								}
							}
							break;
						case 3:
							if (
								((xd = null),
								(i = hl),
								(hl = fd(t.containerInfo)),
								fl(t, e),
								(hl = i),
								ml(e),
								4 & r &&
									null !== n &&
									n.memoizedState.isDehydrated)
							)
								try {
									gf(t.containerInfo);
								} catch (m) {
									ru(e, e.return, m);
								}
							el && ((el = !1), gl(e));
							break;
						case 4:
							(r = hl),
								(hl = fd(e.stateNode.containerInfo)),
								fl(t, e),
								ml(e),
								(hl = r);
							break;
						case 12:
							fl(t, e), ml(e);
							break;
						case 13:
							fl(t, e),
								ml(e),
								8192 & e.child.flags &&
									(null !== e.memoizedState) !==
										(null !== n &&
											null !== n.memoizedState) &&
									(_c = le()),
								4 & r &&
									null !== (r = e.updateQueue) &&
									((e.updateQueue = null), dl(e, r));
							break;
						case 22:
							if (
								(512 & r &&
									(Zs || null === n || Vs(n, n.return)),
								(c = null !== e.memoizedState),
								(u = null !== n && null !== n.memoizedState),
								(Js = (d = Js) || c),
								(Zs = (f = Zs) || u),
								fl(t, e),
								(Zs = f),
								(Js = d),
								ml(e),
								((t = e.stateNode)._current = e),
								(t._visibility &= -3),
								(t._visibility |= 2 & t._pendingVisibility),
								8192 & r &&
									((t._visibility = c
										? -2 & t._visibility
										: 1 | t._visibility),
									c &&
										((t = Js || Zs),
										null === n || u || t || vl(e)),
									null === e.memoizedProps ||
										"manual" !== e.memoizedProps.mode))
							)
								e: for (n = null, t = e; ; ) {
									if (
										5 === t.tag ||
										26 === t.tag ||
										27 === t.tag
									) {
										if (null === n) {
											u = n = t;
											try {
												if (((i = u.stateNode), c))
													"function" ===
													typeof (a = i.style)
														.setProperty
														? a.setProperty(
																"display",
																"none",
																"important"
														  )
														: (a.display = "none");
												else {
													s = u.stateNode;
													var p =
														void 0 !==
															(l =
																u.memoizedProps
																	.style) &&
														null !== l &&
														l.hasOwnProperty(
															"display"
														)
															? l.display
															: null;
													s.style.display =
														null == p ||
														"boolean" === typeof p
															? ""
															: ("" + p).trim();
												}
											} catch (m) {
												ru(u, u.return, m);
											}
										}
									} else if (6 === t.tag) {
										if (null === n) {
											u = t;
											try {
												u.stateNode.nodeValue = c
													? ""
													: u.memoizedProps;
											} catch (m) {
												ru(u, u.return, m);
											}
										}
									} else if (
										((22 !== t.tag && 23 !== t.tag) ||
											null === t.memoizedState ||
											t === e) &&
										null !== t.child
									) {
										(t.child.return = t), (t = t.child);
										continue;
									}
									if (t === e) break e;
									for (; null === t.sibling; ) {
										if (null === t.return || t.return === e)
											break e;
										n === t && (n = null), (t = t.return);
									}
									n === t && (n = null),
										(t.sibling.return = t.return),
										(t = t.sibling);
								}
							4 & r &&
								null !== (r = e.updateQueue) &&
								null !== (n = r.retryQueue) &&
								((r.retryQueue = null), dl(e, n));
							break;
						case 19:
							fl(t, e),
								ml(e),
								4 & r &&
									null !== (r = e.updateQueue) &&
									((e.updateQueue = null), dl(e, r));
							break;
						case 21:
							break;
						default:
							fl(t, e), ml(e);
					}
				}
				function ml(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							if (27 !== e.tag) {
								e: {
									for (var n = e.return; null !== n; ) {
										if (Ys(n)) {
											var r = n;
											break e;
										}
										n = n.return;
									}
									throw Error(o(160));
								}
								switch (r.tag) {
									case 27:
										var i = r.stateNode;
										Xs(e, Ks(e), i);
										break;
									case 5:
										var a = r.stateNode;
										32 & r.flags &&
											(kt(a, ""), (r.flags &= -33)),
											Xs(e, Ks(e), a);
										break;
									case 3:
									case 4:
										var s = r.stateNode.containerInfo;
										Gs(e, Ks(e), s);
										break;
									default:
										throw Error(o(161));
								}
							}
						} catch (l) {
							ru(e, e.return, l);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function gl(e) {
					if (1024 & e.subtreeFlags)
						for (e = e.child; null !== e; ) {
							var t = e;
							gl(t),
								5 === t.tag &&
									1024 & t.flags &&
									t.stateNode.reset(),
								(e = e.sibling);
						}
				}
				function yl(e, t) {
					if (8772 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							il(e, t.alternate, t), (t = t.sibling);
				}
				function vl(e) {
					for (e = e.child; null !== e; ) {
						var t = e;
						switch (t.tag) {
							case 0:
							case 11:
							case 14:
							case 15:
								Us(4, t, t.return), vl(t);
								break;
							case 1:
								Vs(t, t.return);
								var n = t.stateNode;
								"function" === typeof n.componentWillUnmount &&
									Bs(t, t.return, n),
									vl(t);
								break;
							case 26:
							case 27:
							case 5:
								Vs(t, t.return), vl(t);
								break;
							case 22:
								Vs(t, t.return),
									null === t.memoizedState && vl(t);
								break;
							default:
								vl(t);
						}
						e = e.sibling;
					}
				}
				function _l(e, t, n) {
					for (
						n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
						null !== t;

					) {
						var r = t.alternate,
							i = e,
							a = t,
							o = a.flags;
						switch (a.tag) {
							case 0:
							case 11:
							case 15:
								_l(i, a, n), qs(4, a);
								break;
							case 1:
								if (
									(_l(i, a, n),
									"function" ===
										typeof (i = (r = a).stateNode)
											.componentDidMount)
								)
									try {
										i.componentDidMount();
									} catch (c) {
										ru(r, r.return, c);
									}
								if (null !== (i = (r = a).updateQueue)) {
									var s = r.stateNode;
									try {
										var l = i.shared.hiddenCallbacks;
										if (null !== l)
											for (
												i.shared.hiddenCallbacks = null,
													i = 0;
												i < l.length;
												i++
											)
												zs(l[i], s);
									} catch (c) {
										ru(r, r.return, c);
									}
								}
								n && 64 & o && Ws(a), Hs(a, a.return);
								break;
							case 26:
							case 27:
							case 5:
								_l(i, a, n),
									n && null === r && 4 & o && $s(a),
									Hs(a, a.return);
								break;
							case 12:
							default:
								_l(i, a, n);
								break;
							case 13:
								_l(i, a, n), n && 4 & o && ul(i, a);
								break;
							case 22:
								null === a.memoizedState && _l(i, a, n),
									Hs(a, a.return);
						}
						t = t.sibling;
					}
				}
				function bl(e, t) {
					var n = null;
					null !== e &&
						null !== e.memoizedState &&
						null !== e.memoizedState.cachePool &&
						(n = e.memoizedState.cachePool.pool),
						(e = null),
						null !== t.memoizedState &&
							null !== t.memoizedState.cachePool &&
							(e = t.memoizedState.cachePool.pool),
						e !== n &&
							(null != e && e.refCount++, null != n && Ui(n));
				}
				function wl(e, t) {
					(e = null),
						null !== t.alternate &&
							(e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache) !== e &&
							(t.refCount++, null != e && Ui(e));
				}
				function kl(e, t, n, r) {
					if (10256 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							Sl(e, t, n, r), (t = t.sibling);
				}
				function Sl(e, t, n, r) {
					var i = t.flags;
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							kl(e, t, n, r), 2048 & i && qs(9, t);
							break;
						case 3:
							kl(e, t, n, r),
								2048 & i &&
									((e = null),
									null !== t.alternate &&
										(e = t.alternate.memoizedState.cache),
									(t = t.memoizedState.cache) !== e &&
										(t.refCount++, null != e && Ui(e)));
							break;
						case 12:
							if (2048 & i) {
								kl(e, t, n, r), (e = t.stateNode);
								try {
									var a = t.memoizedProps,
										o = a.id,
										s = a.onPostCommit;
									"function" === typeof s &&
										s(
											o,
											null === t.alternate
												? "mount"
												: "update",
											e.passiveEffectDuration,
											-0
										);
								} catch (l) {
									ru(t, t.return, l);
								}
							} else kl(e, t, n, r);
							break;
						case 23:
							break;
						case 22:
							(a = t.stateNode),
								null !== t.memoizedState
									? 4 & a._visibility
										? kl(e, t, n, r)
										: El(e, t)
									: 4 & a._visibility
									? kl(e, t, n, r)
									: ((a._visibility |= 4),
									  Cl(
											e,
											t,
											n,
											r,
											0 !== (10256 & t.subtreeFlags)
									  )),
								2048 & i && bl(t.alternate, t);
							break;
						case 24:
							kl(e, t, n, r), 2048 & i && wl(t.alternate, t);
							break;
						default:
							kl(e, t, n, r);
					}
				}
				function Cl(e, t, n, r, i) {
					for (
						i = i && 0 !== (10256 & t.subtreeFlags), t = t.child;
						null !== t;

					) {
						var a = e,
							o = t,
							s = n,
							l = r,
							c = o.flags;
						switch (o.tag) {
							case 0:
							case 11:
							case 15:
								Cl(a, o, s, l, i), qs(8, o);
								break;
							case 23:
								break;
							case 22:
								var u = o.stateNode;
								null !== o.memoizedState
									? 4 & u._visibility
										? Cl(a, o, s, l, i)
										: El(a, o)
									: ((u._visibility |= 4), Cl(a, o, s, l, i)),
									i && 2048 & c && bl(o.alternate, o);
								break;
							case 24:
								Cl(a, o, s, l, i),
									i && 2048 & c && wl(o.alternate, o);
								break;
							default:
								Cl(a, o, s, l, i);
						}
						t = t.sibling;
					}
				}
				function El(e, t) {
					if (10256 & t.subtreeFlags)
						for (t = t.child; null !== t; ) {
							var n = e,
								r = t,
								i = r.flags;
							switch (r.tag) {
								case 22:
									El(n, r), 2048 & i && bl(r.alternate, r);
									break;
								case 24:
									El(n, r), 2048 & i && wl(r.alternate, r);
									break;
								default:
									El(n, r);
							}
							t = t.sibling;
						}
				}
				var xl = 8192;
				function Tl(e) {
					if (e.subtreeFlags & xl)
						for (e = e.child; null !== e; ) Pl(e), (e = e.sibling);
				}
				function Pl(e) {
					switch (e.tag) {
						case 26:
							Tl(e),
								e.flags & xl &&
									null !== e.memoizedState &&
									(function (e, t, n) {
										if (null === Id) throw Error(o(475));
										var r = Id;
										if (
											"stylesheet" === t.type &&
											("string" !== typeof n.media ||
												!1 !==
													matchMedia(n.media)
														.matches) &&
											0 === (4 & t.state.loading)
										) {
											if (null === t.instance) {
												var i = yd(n.href),
													a = e.querySelector(vd(i));
												if (a)
													return (
														null !== (e = a._p) &&
															"object" ===
																typeof e &&
															"function" ===
																typeof e.then &&
															(r.count++,
															(r = Od.bind(r)),
															e.then(r, r)),
														(t.state.loading |= 4),
														(t.instance = a),
														void Xe(a)
													);
												(a = e.ownerDocument || e),
													(n = _d(n)),
													(i = ud.get(i)) && Cd(n, i),
													Xe(
														(a =
															a.createElement(
																"link"
															))
													);
												var s = a;
												(s._p = new Promise(function (
													e,
													t
												) {
													(s.onload = e),
														(s.onerror = t);
												})),
													$u(a, "link", n),
													(t.instance = a);
											}
											null === r.stylesheets &&
												(r.stylesheets = new Map()),
												r.stylesheets.set(t, e),
												(e = t.state.preload) &&
													0 ===
														(3 & t.state.loading) &&
													(r.count++,
													(t = Od.bind(r)),
													e.addEventListener(
														"load",
														t
													),
													e.addEventListener(
														"error",
														t
													));
										}
									})(hl, e.memoizedState, e.memoizedProps);
							break;
						case 5:
						default:
							Tl(e);
							break;
						case 3:
						case 4:
							var t = hl;
							(hl = fd(e.stateNode.containerInfo)),
								Tl(e),
								(hl = t);
							break;
						case 22:
							null === e.memoizedState &&
								(null !== (t = e.alternate) &&
								null !== t.memoizedState
									? ((t = xl),
									  (xl = 16777216),
									  Tl(e),
									  (xl = t))
									: Tl(e));
					}
				}
				function Nl(e) {
					var t = e.alternate;
					if (null !== t && null !== (e = t.child)) {
						t.child = null;
						do {
							(t = e.sibling), (e.sibling = null), (e = t);
						} while (null !== e);
					}
				}
				function Il(e) {
					var t = e.deletions;
					if (0 !== (16 & e.flags)) {
						if (null !== t)
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(nl = r), Rl(r, e);
							}
						Nl(e);
					}
					if (10256 & e.subtreeFlags)
						for (e = e.child; null !== e; ) Al(e), (e = e.sibling);
				}
				function Al(e) {
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							Il(e), 2048 & e.flags && Us(9, e, e.return);
							break;
						case 3:
						case 12:
						default:
							Il(e);
							break;
						case 22:
							var t = e.stateNode;
							null !== e.memoizedState &&
							4 & t._visibility &&
							(null === e.return || 13 !== e.return.tag)
								? ((t._visibility &= -5), Ol(e))
								: Il(e);
					}
				}
				function Ol(e) {
					var t = e.deletions;
					if (0 !== (16 & e.flags)) {
						if (null !== t)
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(nl = r), Rl(r, e);
							}
						Nl(e);
					}
					for (e = e.child; null !== e; ) {
						switch ((t = e).tag) {
							case 0:
							case 11:
							case 15:
								Us(8, t, t.return), Ol(t);
								break;
							case 22:
								4 & (n = t.stateNode)._visibility &&
									((n._visibility &= -5), Ol(t));
								break;
							default:
								Ol(t);
						}
						e = e.sibling;
					}
				}
				function Rl(e, t) {
					for (; null !== nl; ) {
						var n = nl;
						switch (n.tag) {
							case 0:
							case 11:
							case 15:
								Us(8, n, t);
								break;
							case 23:
							case 22:
								if (
									null !== n.memoizedState &&
									null !== n.memoizedState.cachePool
								) {
									var r = n.memoizedState.cachePool.pool;
									null != r && r.refCount++;
								}
								break;
							case 24:
								Ui(n.memoizedState.cache);
						}
						if (null !== (r = n.child)) (r.return = n), (nl = r);
						else
							e: for (n = e; null !== nl; ) {
								var i = (r = nl).sibling,
									a = r.return;
								if ((al(r), r === n)) {
									nl = null;
									break e;
								}
								if (null !== i) {
									(i.return = a), (nl = i);
									break e;
								}
								nl = a;
							}
					}
				}
				function Dl(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.refCleanup = this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Ll(e, t, n, r) {
					return new Dl(e, t, n, r);
				}
				function Ml(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Fl(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Ll(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 31457280 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: {
										lanes: t.lanes,
										firstContext: t.firstContext,
								  }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						(n.refCleanup = e.refCleanup),
						n
					);
				}
				function zl(e, t) {
					e.flags &= 31457282;
					var n = e.alternate;
					return (
						null === n
							? ((e.childLanes = 0),
							  (e.lanes = t),
							  (e.child = null),
							  (e.subtreeFlags = 0),
							  (e.memoizedProps = null),
							  (e.memoizedState = null),
							  (e.updateQueue = null),
							  (e.dependencies = null),
							  (e.stateNode = null))
							: ((e.childLanes = n.childLanes),
							  (e.lanes = n.lanes),
							  (e.child = n.child),
							  (e.subtreeFlags = 0),
							  (e.deletions = null),
							  (e.memoizedProps = n.memoizedProps),
							  (e.memoizedState = n.memoizedState),
							  (e.updateQueue = n.updateQueue),
							  (e.type = n.type),
							  (t = n.dependencies),
							  (e.dependencies =
									null === t
										? null
										: {
												lanes: t.lanes,
												firstContext: t.firstContext,
										  })),
						e
					);
				}
				function jl(e, t, n, r, i, a) {
					var s = 0;
					if (((r = e), "function" === typeof e)) Ml(e) && (s = 1);
					else if ("string" === typeof e)
						s = (function (e, t, n) {
							if (1 === n || null != t.itemProp) return !1;
							switch (e) {
								case "meta":
								case "title":
									return !0;
								case "style":
									if (
										"string" !== typeof t.precedence ||
										"string" !== typeof t.href ||
										"" === t.href
									)
										break;
									return !0;
								case "link":
									if (
										"string" !== typeof t.rel ||
										"string" !== typeof t.href ||
										"" === t.href ||
										t.onLoad ||
										t.onError
									)
										break;
									return (
										"stylesheet" !== t.rel ||
										((e = t.disabled),
										"string" === typeof t.precedence &&
											null == e)
									);
								case "script":
									if (
										t.async &&
										"function" !== typeof t.async &&
										"symbol" !== typeof t.async &&
										!t.onLoad &&
										!t.onError &&
										t.src &&
										"string" === typeof t.src
									)
										return !0;
							}
							return !1;
						})(e, n, K.current)
							? 26
							: "html" === e || "head" === e || "body" === e
							? 27
							: 5;
					else
						e: switch (e) {
							case d:
								return ql(n.children, i, a, t);
							case f:
								(s = 8), (i |= 24);
								break;
							case h:
								return (
									((e = Ll(12, n, t, 2 | i)).elementType = h),
									(e.lanes = a),
									e
								);
							case v:
								return (
									((e = Ll(13, n, t, i)).elementType = v),
									(e.lanes = a),
									e
								);
							case _:
								return (
									((e = Ll(19, n, t, i)).elementType = _),
									(e.lanes = a),
									e
								);
							case k:
								return Ul(n, i, a, t);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case p:
										case g:
											s = 10;
											break e;
										case m:
											s = 9;
											break e;
										case y:
											s = 11;
											break e;
										case b:
											s = 14;
											break e;
										case w:
											(s = 16), (r = null);
											break e;
									}
								(s = 29),
									(n = Error(
										o(
											130,
											null === e ? "null" : typeof e,
											""
										)
									)),
									(r = null);
						}
					return (
						((t = Ll(s, n, t, i)).elementType = e),
						(t.type = r),
						(t.lanes = a),
						t
					);
				}
				function ql(e, t, n, r) {
					return ((e = Ll(7, e, r, t)).lanes = n), e;
				}
				function Ul(e, t, n, r) {
					((e = Ll(22, e, r, t)).elementType = k), (e.lanes = n);
					var i = {
						_visibility: 1,
						_pendingVisibility: 1,
						_pendingMarkers: null,
						_retryCache: null,
						_transitions: null,
						_current: null,
						detach: function () {
							var e = i._current;
							if (null === e) throw Error(o(456));
							if (0 === (2 & i._pendingVisibility)) {
								var t = Nr(e, 2);
								null !== t &&
									((i._pendingVisibility |= 2), Oc(t, e, 2));
							}
						},
						attach: function () {
							var e = i._current;
							if (null === e) throw Error(o(456));
							if (0 !== (2 & i._pendingVisibility)) {
								var t = Nr(e, 2);
								null !== t &&
									((i._pendingVisibility &= -3), Oc(t, e, 2));
							}
						},
					};
					return (e.stateNode = i), e;
				}
				function Wl(e, t, n) {
					return ((e = Ll(6, e, null, t)).lanes = n), e;
				}
				function Bl(e, t, n) {
					return (
						((t = Ll(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Hl(e) {
					e.flags |= 4;
				}
				function Vl(e, t) {
					if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
						e.flags &= -16777217;
					else if (((e.flags |= 16777216), !Nd(t))) {
						if (
							null !== (t = Pi.current) &&
							((4194176 & rc) === rc
								? null !== Ni
								: ((62914560 & rc) !== rc &&
										0 === (536870912 & rc)) ||
								  t !== Ni)
						)
							throw ((fi = li), si);
						e.flags |= 8192;
					}
				}
				function $l(e, t) {
					null !== t && (e.flags |= 4),
						16384 & e.flags &&
							((t = 22 !== e.tag ? Ie() : 536870912),
							(e.lanes |= t),
							(mc |= t));
				}
				function Ql(e, t) {
					if (!Gr)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t),
										(t = t.sibling);
								null === n
									? (e.tail = null)
									: (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n),
										(n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function Yl(e) {
					var t =
							null !== e.alternate &&
							e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(r |= 31457280 & i.subtreeFlags),
								(r |= 31457280 & i.flags),
								(i.return = e),
								(i = i.sibling);
					else
						for (i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(r |= i.subtreeFlags),
								(r |= i.flags),
								(i.return = e),
								(i = i.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Kl(e, t, n) {
					var r = t.pendingProps;
					switch ((Qr(t), t.tag)) {
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
						case 1:
							return Yl(t), null;
						case 3:
							return (
								(n = t.stateNode),
								(r = null),
								null !== e && (r = e.memoizedState.cache),
								t.memoizedState.cache !== r &&
									(t.flags |= 2048),
								_s(ji),
								ee(),
								n.pendingContext &&
									((n.context = n.pendingContext),
									(n.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(ri(t)
										? Hl(t)
										: null === e ||
										  (e.memoizedState.isDehydrated &&
												0 === (256 & t.flags)) ||
										  ((t.flags |= 1024),
										  null !== Xr &&
												(Dc(Xr), (Xr = null)))),
								Yl(t),
								null
							);
						case 26:
							return (
								(n = t.memoizedState),
								null === e
									? (Hl(t),
									  null !== n
											? (Yl(t), Vl(t, n))
											: (Yl(t), (t.flags &= -16777217)))
									: n
									? n !== e.memoizedState
										? (Hl(t), Yl(t), Vl(t, n))
										: (Yl(t), (t.flags &= -16777217))
									: (e.memoizedProps !== r && Hl(t),
									  Yl(t),
									  (t.flags &= -16777217)),
								null
							);
						case 27:
							ne(t), (n = X.current);
							var i = t.type;
							if (null !== e && null != t.stateNode)
								e.memoizedProps !== r && Hl(t);
							else {
								if (!r) {
									if (null === t.stateNode)
										throw Error(o(166));
									return Yl(t), null;
								}
								(e = K.current),
									ri(t)
										? ti(t)
										: ((e = cd(i, r, n)),
										  (t.stateNode = e),
										  Hl(t));
							}
							return Yl(t), null;
						case 5:
							if (
								(ne(t),
								(n = t.type),
								null !== e && null != t.stateNode)
							)
								e.memoizedProps !== r && Hl(t);
							else {
								if (!r) {
									if (null === t.stateNode)
										throw Error(o(166));
									return Yl(t), null;
								}
								if (((e = K.current), ri(t))) ti(t);
								else {
									switch (((i = Ku(X.current)), e)) {
										case 1:
											e = i.createElementNS(
												"http://www.w3.org/2000/svg",
												n
											);
											break;
										case 2:
											e = i.createElementNS(
												"http://www.w3.org/1998/Math/MathML",
												n
											);
											break;
										default:
											switch (n) {
												case "svg":
													e = i.createElementNS(
														"http://www.w3.org/2000/svg",
														n
													);
													break;
												case "math":
													e = i.createElementNS(
														"http://www.w3.org/1998/Math/MathML",
														n
													);
													break;
												case "script":
													((e =
														i.createElement(
															"div"
														)).innerHTML =
														"<script></script>"),
														(e = e.removeChild(
															e.firstChild
														));
													break;
												case "select":
													(e =
														"string" === typeof r.is
															? i.createElement(
																	"select",
																	{ is: r.is }
															  )
															: i.createElement(
																	"select"
															  )),
														r.multiple
															? (e.multiple = !0)
															: r.size &&
															  (e.size = r.size);
													break;
												default:
													e =
														"string" === typeof r.is
															? i.createElement(
																	n,
																	{ is: r.is }
															  )
															: i.createElement(
																	n
															  );
											}
									}
									(e[ze] = t), (e[je] = r);
									e: for (i = t.child; null !== i; ) {
										if (5 === i.tag || 6 === i.tag)
											e.appendChild(i.stateNode);
										else if (
											4 !== i.tag &&
											27 !== i.tag &&
											null !== i.child
										) {
											(i.child.return = i), (i = i.child);
											continue;
										}
										if (i === t) break e;
										for (; null === i.sibling; ) {
											if (
												null === i.return ||
												i.return === t
											)
												break e;
											i = i.return;
										}
										(i.sibling.return = i.return),
											(i = i.sibling);
									}
									t.stateNode = e;
									e: switch (($u(e, n, r), n)) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											e = !!r.autoFocus;
											break e;
										case "img":
											e = !0;
											break e;
										default:
											e = !1;
									}
									e && Hl(t);
								}
							}
							return Yl(t), (t.flags &= -16777217), null;
						case 6:
							if (e && null != t.stateNode)
								e.memoizedProps !== r && Hl(t);
							else {
								if (
									"string" !== typeof r &&
									null === t.stateNode
								)
									throw Error(o(166));
								if (((e = X.current), ri(t))) {
									if (
										((e = t.stateNode),
										(n = t.memoizedProps),
										(r = null),
										null !== (i = Yr))
									)
										switch (i.tag) {
											case 27:
											case 5:
												r = i.memoizedProps;
										}
									(e[ze] = t),
										(e = !!(
											e.nodeValue === n ||
											(null !== r &&
												!0 ===
													r.suppressHydrationWarning) ||
											Wu(e.nodeValue, n)
										)) || ei(t);
								} else
									((e = Ku(e).createTextNode(r))[ze] = t),
										(t.stateNode = e);
							}
							return Yl(t), null;
						case 13:
							if (
								((r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									((i = ri(t)),
									null !== r && null !== r.dehydrated)
								) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (
											!(i =
												null !== (i = t.memoizedState)
													? i.dehydrated
													: null)
										)
											throw Error(o(317));
										i[ze] = t;
									} else
										ii(),
											0 === (128 & t.flags) &&
												(t.memoizedState = null),
											(t.flags |= 4);
									Yl(t), (i = !1);
								} else
									null !== Xr && (Dc(Xr), (Xr = null)),
										(i = !0);
								if (!i)
									return 256 & t.flags
										? (Ri(t), t)
										: (Ri(t), null);
							}
							if ((Ri(t), 0 !== (128 & t.flags)))
								return (t.lanes = n), t;
							if (
								((n = null !== r),
								(e = null !== e && null !== e.memoizedState),
								n)
							) {
								(i = null),
									null !== (r = t.child).alternate &&
										null !== r.alternate.memoizedState &&
										null !==
											r.alternate.memoizedState
												.cachePool &&
										(i =
											r.alternate.memoizedState.cachePool
												.pool);
								var a = null;
								null !== r.memoizedState &&
									null !== r.memoizedState.cachePool &&
									(a = r.memoizedState.cachePool.pool),
									a !== i && (r.flags |= 2048);
							}
							return (
								n !== e && n && (t.child.flags |= 8192),
								$l(t, t.updateQueue),
								Yl(t),
								null
							);
						case 4:
							return (
								ee(),
								null === e && Ou(t.stateNode.containerInfo),
								Yl(t),
								null
							);
						case 10:
							return _s(t.type), Yl(t), null;
						case 19:
							if ((Q(Di), null === (i = t.memoizedState)))
								return Yl(t), null;
							if (
								((r = 0 !== (128 & t.flags)),
								null === (a = i.rendering))
							)
								if (r) Ql(i, !1);
								else {
									if (
										0 !== uc ||
										(null !== e && 0 !== (128 & e.flags))
									)
										for (e = t.child; null !== e; ) {
											if (null !== (a = Li(e))) {
												for (
													t.flags |= 128,
														Ql(i, !1),
														e = a.updateQueue,
														t.updateQueue = e,
														$l(t, e),
														t.subtreeFlags = 0,
														e = n,
														n = t.child;
													null !== n;

												)
													zl(n, e), (n = n.sibling);
												return (
													Y(Di, (1 & Di.current) | 2),
													t.child
												);
											}
											e = e.sibling;
										}
									null !== i.tail &&
										le() > bc &&
										((t.flags |= 128),
										(r = !0),
										Ql(i, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = Li(a))) {
										if (
											((t.flags |= 128),
											(r = !0),
											(e = e.updateQueue),
											(t.updateQueue = e),
											$l(t, e),
											Ql(i, !0),
											null === i.tail &&
												"hidden" === i.tailMode &&
												!a.alternate &&
												!Gr)
										)
											return Yl(t), null;
									} else
										2 * le() - i.renderingStartTime > bc &&
											536870912 !== n &&
											((t.flags |= 128),
											(r = !0),
											Ql(i, !1),
											(t.lanes = 4194304));
								i.isBackwards
									? ((a.sibling = t.child), (t.child = a))
									: (null !== (e = i.last)
											? (e.sibling = a)
											: (t.child = a),
									  (i.last = a));
							}
							return null !== i.tail
								? ((t = i.tail),
								  (i.rendering = t),
								  (i.tail = t.sibling),
								  (i.renderingStartTime = le()),
								  (t.sibling = null),
								  (e = Di.current),
								  Y(Di, r ? (1 & e) | 2 : 1 & e),
								  t)
								: (Yl(t), null);
						case 22:
						case 23:
							return (
								Ri(t),
								Ti(),
								(r = null !== t.memoizedState),
								null !== e
									? (null !== e.memoizedState) !== r &&
									  (t.flags |= 8192)
									: r && (t.flags |= 8192),
								r
									? 0 !== (536870912 & n) &&
									  0 === (128 & t.flags) &&
									  (Yl(t),
									  6 & t.subtreeFlags && (t.flags |= 8192))
									: Yl(t),
								null !== (n = t.updateQueue) &&
									$l(t, n.retryQueue),
								(n = null),
								null !== e &&
									null !== e.memoizedState &&
									null !== e.memoizedState.cachePool &&
									(n = e.memoizedState.cachePool.pool),
								(r = null),
								null !== t.memoizedState &&
									null !== t.memoizedState.cachePool &&
									(r = t.memoizedState.cachePool.pool),
								r !== n && (t.flags |= 2048),
								null !== e && Q(Yi),
								null
							);
						case 24:
							return (
								(n = null),
								null !== e && (n = e.memoizedState.cache),
								t.memoizedState.cache !== n &&
									(t.flags |= 2048),
								_s(ji),
								Yl(t),
								null
							);
						case 25:
							return null;
					}
					throw Error(o(156, t.tag));
				}
				function Gl(e, t) {
					switch ((Qr(t), t.tag)) {
						case 1:
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 3:
							return (
								_s(ji),
								ee(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 26:
						case 27:
						case 5:
							return ne(t), null;
						case 13:
							if (
								(Ri(t),
								null !== (e = t.memoizedState) &&
									null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(o(340));
								ii();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return Q(Di), null;
						case 4:
							return ee(), null;
						case 10:
							return _s(t.type), null;
						case 22:
						case 23:
							return (
								Ri(t),
								Ti(),
								null !== e && Q(Yi),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 24:
							return _s(ji), null;
						default:
							return null;
					}
				}
				function Xl(e, t) {
					switch ((Qr(t), t.tag)) {
						case 3:
							_s(ji), ee();
							break;
						case 26:
						case 27:
						case 5:
							ne(t);
							break;
						case 4:
							ee();
							break;
						case 13:
							Ri(t);
							break;
						case 19:
							Q(Di);
							break;
						case 10:
							_s(t.type);
							break;
						case 22:
						case 23:
							Ri(t), Ti(), null !== e && Q(Yi);
							break;
						case 24:
							_s(ji);
					}
				}
				var Jl = {
						getCacheForType: function (e) {
							var t = Es(ji),
								n = t.data.get(e);
							return (
								void 0 === n && ((n = e()), t.data.set(e, n)), n
							);
						},
					},
					Zl = "function" === typeof WeakMap ? WeakMap : Map,
					ec = 0,
					tc = null,
					nc = null,
					rc = 0,
					ic = 0,
					ac = null,
					oc = !1,
					sc = !1,
					lc = !1,
					cc = 0,
					uc = 0,
					dc = 0,
					fc = 0,
					hc = 0,
					pc = 0,
					mc = 0,
					gc = null,
					yc = null,
					vc = !1,
					_c = 0,
					bc = 1 / 0,
					wc = null,
					kc = null,
					Sc = !1,
					Cc = null,
					Ec = 0,
					xc = 0,
					Tc = null,
					Pc = 0,
					Nc = null;
				function Ic() {
					if (0 !== (2 & ec) && 0 !== rc) return rc & -rc;
					if (null !== I.T) {
						return 0 !== Hi ? Hi : wu();
					}
					return Me();
				}
				function Ac() {
					0 === pc &&
						(pc = 0 === (536870912 & rc) || Gr ? Ne() : 536870912);
					var e = Pi.current;
					return null !== e && (e.flags |= 32), pc;
				}
				function Oc(e, t, n) {
					((e === tc && 2 === ic) ||
						null !== e.cancelPendingCommit) &&
						(qc(e, 0), Fc(e, rc, pc, !1)),
						Oe(e, n),
						(0 !== (2 & ec) && e === tc) ||
							(e === tc &&
								(0 === (2 & ec) && (fc |= n),
								4 === uc && Fc(e, rc, pc, !1)),
							mu(e));
				}
				function Rc(e, t, n) {
					if (0 !== (6 & ec)) throw Error(o(327));
					for (
						var r =
								(!n &&
									0 === (60 & t) &&
									0 === (t & e.expiredLanes)) ||
								Te(e, t),
							i = r
								? (function (e, t) {
										var n = ec;
										ec |= 2;
										var r = Wc(),
											i = Bc();
										tc !== e || rc !== t
											? ((wc = null),
											  (bc = le() + 500),
											  qc(e, t))
											: (sc = Te(e, t));
										e: for (;;)
											try {
												if (0 !== ic && null !== nc) {
													t = nc;
													var a = ac;
													t: switch (ic) {
														case 1:
															(ic = 0),
																(ac = null),
																Gc(e, t, a, 1);
															break;
														case 2:
															if (ci(a)) {
																(ic = 0),
																	(ac = null),
																	Kc(t);
																break;
															}
															(t = function () {
																2 === ic &&
																	tc === e &&
																	(ic = 7),
																	mu(e);
															}),
																a.then(t, t);
															break e;
														case 3:
															ic = 7;
															break e;
														case 4:
															ic = 5;
															break e;
														case 7:
															ci(a)
																? ((ic = 0),
																  (ac = null),
																  Kc(t))
																: ((ic = 0),
																  (ac = null),
																  Gc(
																		e,
																		t,
																		a,
																		7
																  ));
															break;
														case 5:
															var s = null;
															switch (nc.tag) {
																case 26:
																	s =
																		nc.memoizedState;
																case 5:
																case 27:
																	var l = nc;
																	if (
																		!s ||
																		Nd(s)
																	) {
																		(ic = 0),
																			(ac =
																				null);
																		var c =
																			l.sibling;
																		if (
																			null !==
																			c
																		)
																			nc =
																				c;
																		else {
																			var u =
																				l.return;
																			null !==
																			u
																				? ((nc =
																						u),
																				  Xc(
																						u
																				  ))
																				: (nc =
																						null);
																		}
																		break t;
																	}
															}
															(ic = 0),
																(ac = null),
																Gc(e, t, a, 5);
															break;
														case 6:
															(ic = 0),
																(ac = null),
																Gc(e, t, a, 6);
															break;
														case 8:
															jc(), (uc = 6);
															break e;
														default:
															throw Error(o(462));
													}
												}
												Qc();
												break;
											} catch (d) {
												Uc(e, d);
											}
										return (
											(ys = gs = null),
											(I.H = r),
											(I.A = i),
											(ec = n),
											null !== nc
												? 0
												: ((tc = null),
												  (rc = 0),
												  xr(),
												  uc)
										);
								  })(e, t)
								: Vc(e, t, !0),
							a = r;
						;

					) {
						if (0 === i) {
							sc && !r && Fc(e, t, 0, !1);
							break;
						}
						if (6 === i) Fc(e, t, 0, !oc);
						else {
							if (((n = e.current.alternate), a && !Mc(n))) {
								(i = Vc(e, t, !1)), (a = !1);
								continue;
							}
							if (2 === i) {
								if (((a = t), e.errorRecoveryDisabledLanes & a))
									var s = 0;
								else
									s =
										0 !== (s = -536870913 & e.pendingLanes)
											? s
											: 536870912 & s
											? 536870912
											: 0;
								if (0 !== s) {
									t = s;
									e: {
										var l = e;
										i = gc;
										var c =
											l.current.memoizedState
												.isDehydrated;
										if (
											(c && (qc(l, s).flags |= 256),
											2 !== (s = Vc(l, s, !1)))
										) {
											if (lc && !c) {
												(l.errorRecoveryDisabledLanes |=
													a),
													(fc |= a),
													(i = 4);
												break e;
											}
											(a = yc),
												(yc = i),
												null !== a && Dc(a);
										}
										i = s;
									}
									if (((a = !1), 2 !== i)) continue;
								}
							}
							if (1 === i) {
								qc(e, 0), Fc(e, t, 0, !0);
								break;
							}
							e: {
								switch (((r = e), i)) {
									case 0:
									case 1:
										throw Error(o(345));
									case 4:
										if ((4194176 & t) === t) {
											Fc(r, t, pc, !oc);
											break e;
										}
										break;
									case 2:
										yc = null;
										break;
									case 3:
									case 5:
										break;
									default:
										throw Error(o(329));
								}
								if (
									((r.finishedWork = n),
									(r.finishedLanes = t),
									(62914560 & t) === t &&
										10 < (a = _c + 300 - le()))
								) {
									if ((Fc(r, t, pc, !oc), 0 !== xe(r, 0)))
										break e;
									r.timeoutHandle = ed(
										Lc.bind(
											null,
											r,
											n,
											yc,
											wc,
											vc,
											t,
											pc,
											fc,
											mc,
											oc,
											2,
											-0,
											0
										),
										a
									);
								} else
									Lc(
										r,
										n,
										yc,
										wc,
										vc,
										t,
										pc,
										fc,
										mc,
										oc,
										0,
										-0,
										0
									);
							}
						}
						break;
					}
					mu(e);
				}
				function Dc(e) {
					null === yc ? (yc = e) : yc.push.apply(yc, e);
				}
				function Lc(e, t, n, r, i, a, s, l, c, u, d, f, h) {
					var p = t.subtreeFlags;
					if (
						(8192 & p || 16785408 === (16785408 & p)) &&
						((Id = { stylesheets: null, count: 0, unsuspend: Ad }),
						Pl(t),
						null !==
							(t = (function () {
								if (null === Id) throw Error(o(475));
								var e = Id;
								return (
									e.stylesheets &&
										0 === e.count &&
										Dd(e, e.stylesheets),
									0 < e.count
										? function (t) {
												var n = setTimeout(function () {
													if (
														(e.stylesheets &&
															Dd(
																e,
																e.stylesheets
															),
														e.unsuspend)
													) {
														var t = e.unsuspend;
														(e.unsuspend = null),
															t();
													}
												}, 6e4);
												return (
													(e.unsuspend = t),
													function () {
														(e.unsuspend = null),
															clearTimeout(n);
													}
												);
										  }
										: null
								);
							})()))
					)
						return (
							(e.cancelPendingCommit = t(
								Zc.bind(null, e, n, r, i, s, l, c, 1, f, h)
							)),
							void Fc(e, a, s, !u)
						);
					Zc(e, n, r, i, s, l, c, d, f, h);
				}
				function Mc(e) {
					for (var t = e; ; ) {
						var n = t.tag;
						if (
							(0 === n || 11 === n || 15 === n) &&
							16384 & t.flags &&
							null !== (n = t.updateQueue) &&
							null !== (n = n.stores)
						)
							for (var r = 0; r < n.length; r++) {
								var i = n[r],
									a = i.getSnapshot;
								i = i.value;
								try {
									if (!Yn(a(), i)) return !1;
								} catch (o) {
									return !1;
								}
							}
						if (
							((n = t.child),
							16384 & t.subtreeFlags && null !== n)
						)
							(n.return = t), (t = n);
						else {
							if (t === e) break;
							for (; null === t.sibling; ) {
								if (null === t.return || t.return === e)
									return !0;
								t = t.return;
							}
							(t.sibling.return = t.return), (t = t.sibling);
						}
					}
					return !0;
				}
				function Fc(e, t, n, r) {
					(t &= ~hc),
						(t &= ~fc),
						(e.suspendedLanes |= t),
						(e.pingedLanes &= ~t),
						r && (e.warmLanes |= t),
						(r = e.expirationTimes);
					for (var i = t; 0 < i; ) {
						var a = 31 - be(i),
							o = 1 << a;
						(r[a] = -1), (i &= ~o);
					}
					0 !== n && Re(e, n, t);
				}
				function zc() {
					return 0 !== (6 & ec) || (gu(0, !1), !1);
				}
				function jc() {
					if (null !== nc) {
						if (0 === ic) var e = nc.return;
						else
							(ys = gs = null),
								ya((e = nc)),
								(pi = null),
								(mi = 0),
								(e = nc);
						for (; null !== e; ) Xl(e.alternate, e), (e = e.return);
						nc = null;
					}
				}
				function qc(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					-1 !== n && ((e.timeoutHandle = -1), td(n)),
						null !== (n = e.cancelPendingCommit) &&
							((e.cancelPendingCommit = null), n()),
						jc(),
						(tc = e),
						(nc = n = Fl(e.current, null)),
						(rc = t),
						(ic = 0),
						(ac = null),
						(oc = !1),
						(sc = Te(e, t)),
						(lc = !1),
						(mc = pc = hc = fc = dc = uc = 0),
						(yc = gc = null),
						(vc = !1),
						0 !== (8 & t) && (t |= 32 & t);
					var r = e.entangledLanes;
					if (0 !== r)
						for (e = e.entanglements, r &= t; 0 < r; ) {
							var i = 31 - be(r),
								a = 1 << i;
							(t |= e[i]), (r &= ~a);
						}
					return (cc = t), xr(), n;
				}
				function Uc(e, t) {
					(Zi = null),
						(I.H = Eo),
						t === oi
							? ((t = hi()), (ic = 3))
							: t === si
							? ((t = hi()), (ic = 4))
							: (ic =
									t === Bo
										? 8
										: null !== t &&
										  "object" === typeof t &&
										  "function" === typeof t.then
										? 6
										: 1),
						(ac = t),
						null === nc && ((uc = 1), zo(e, Dr(t, e.current)));
				}
				function Wc() {
					var e = I.H;
					return (I.H = Eo), null === e ? Eo : e;
				}
				function Bc() {
					var e = I.A;
					return (I.A = Jl), e;
				}
				function Hc() {
					(uc = 4),
						oc ||
							((4194176 & rc) !== rc && null !== Pi.current) ||
							(sc = !0),
						(0 === (134217727 & dc) && 0 === (134217727 & fc)) ||
							null === tc ||
							Fc(tc, rc, pc, !1);
				}
				function Vc(e, t, n) {
					var r = ec;
					ec |= 2;
					var i = Wc(),
						a = Bc();
					(tc === e && rc === t) || ((wc = null), qc(e, t)), (t = !1);
					var o = uc;
					e: for (;;)
						try {
							if (0 !== ic && null !== nc) {
								var s = nc,
									l = ac;
								switch (ic) {
									case 8:
										jc(), (o = 6);
										break e;
									case 3:
									case 2:
									case 6:
										null === Pi.current && (t = !0);
										var c = ic;
										if (
											((ic = 0),
											(ac = null),
											Gc(e, s, l, c),
											n && sc)
										) {
											o = 0;
											break e;
										}
										break;
									default:
										(c = ic),
											(ic = 0),
											(ac = null),
											Gc(e, s, l, c);
								}
							}
							$c(), (o = uc);
							break;
						} catch (u) {
							Uc(e, u);
						}
					return (
						t && e.shellSuspendCounter++,
						(ys = gs = null),
						(ec = r),
						(I.H = i),
						(I.A = a),
						null === nc && ((tc = null), (rc = 0), xr()),
						o
					);
				}
				function $c() {
					for (; null !== nc; ) Yc(nc);
				}
				function Qc() {
					for (; null !== nc && !oe(); ) Yc(nc);
				}
				function Yc(e) {
					var t = ps(e.alternate, e, cc);
					(e.memoizedProps = e.pendingProps),
						null === t ? Xc(e) : (nc = t);
				}
				function Kc(e) {
					var t = e,
						n = t.alternate;
					switch (t.tag) {
						case 15:
						case 0:
							t = Zo(n, t, t.pendingProps, t.type, void 0, rc);
							break;
						case 11:
							t = Zo(
								n,
								t,
								t.pendingProps,
								t.type.render,
								t.ref,
								rc
							);
							break;
						case 5:
							ya(t);
						default:
							Xl(n, t), (t = ps(n, (t = nc = zl(t, cc)), cc));
					}
					(e.memoizedProps = e.pendingProps),
						null === t ? Xc(e) : (nc = t);
				}
				function Gc(e, t, n, r) {
					(ys = gs = null), ya(t), (pi = null), (mi = 0);
					var i = t.return;
					try {
						if (
							(function (e, t, n, r, i) {
								if (
									((n.flags |= 32768),
									null !== r &&
										"object" === typeof r &&
										"function" === typeof r.then)
								) {
									if (
										(null !== (t = n.alternate) &&
											ks(t, n, i, !0),
										null !== (n = Pi.current))
									) {
										switch (n.tag) {
											case 13:
												return (
													null === Ni
														? Hc()
														: null ===
																n.alternate &&
														  0 === uc &&
														  (uc = 3),
													(n.flags &= -257),
													(n.flags |= 65536),
													(n.lanes = i),
													r === li
														? (n.flags |= 16384)
														: (null ===
														  (t = n.updateQueue)
																? (n.updateQueue =
																		new Set(
																			[r]
																		))
																: t.add(r),
														  iu(e, r, i)),
													!1
												);
											case 22:
												return (
													(n.flags |= 65536),
													r === li
														? (n.flags |= 16384)
														: (null ===
														  (t = n.updateQueue)
																? ((t = {
																		transitions:
																			null,
																		markerInstances:
																			null,
																		retryQueue:
																			new Set(
																				[
																					r,
																				]
																			),
																  }),
																  (n.updateQueue =
																		t))
																: null ===
																  (n =
																		t.retryQueue)
																? (t.retryQueue =
																		new Set(
																			[r]
																		))
																: n.add(r),
														  iu(e, r, i)),
													!1
												);
										}
										throw Error(o(435, n.tag));
									}
									return iu(e, r, i), Hc(), !1;
								}
								if (Gr)
									return (
										null !== (t = Pi.current)
											? (0 === (65536 & t.flags) &&
													(t.flags |= 256),
											  (t.flags |= 65536),
											  (t.lanes = i),
											  r !== Zr &&
													ai(
														Dr(
															(e = Error(o(422), {
																cause: r,
															})),
															n
														)
													))
											: (r !== Zr &&
													ai(
														Dr(
															(t = Error(o(423), {
																cause: r,
															})),
															n
														)
													),
											  ((e =
													e.current
														.alternate).flags |= 65536),
											  (i &= -i),
											  (e.lanes |= i),
											  (r = Dr(r, n)),
											  Ds(
													e,
													(i = qo(e.stateNode, r, i))
											  ),
											  4 !== uc && (uc = 2)),
										!1
									);
								var a = Error(o(520), { cause: r });
								if (
									((a = Dr(a, n)),
									null === gc ? (gc = [a]) : gc.push(a),
									4 !== uc && (uc = 2),
									null === t)
								)
									return !0;
								(r = Dr(r, n)), (n = t);
								do {
									switch (n.tag) {
										case 3:
											return (
												(n.flags |= 65536),
												(e = i & -i),
												(n.lanes |= e),
												Ds(
													n,
													(e = qo(n.stateNode, r, e))
												),
												!1
											);
										case 1:
											if (
												((t = n.type),
												(a = n.stateNode),
												0 === (128 & n.flags) &&
													("function" ===
														typeof t.getDerivedStateFromError ||
														(null !== a &&
															"function" ===
																typeof a.componentDidCatch &&
															(null === kc ||
																!kc.has(a)))))
											)
												return (
													(n.flags |= 65536),
													(i &= -i),
													(n.lanes |= i),
													Wo((i = Uo(i)), e, n, r),
													Ds(n, i),
													!1
												);
									}
									n = n.return;
								} while (null !== n);
								return !1;
							})(e, i, t, n, rc)
						)
							return (
								(uc = 1),
								zo(e, Dr(n, e.current)),
								void (nc = null)
							);
					} catch (a) {
						if (null !== i) throw ((nc = i), a);
						return (
							(uc = 1), zo(e, Dr(n, e.current)), void (nc = null)
						);
					}
					32768 & t.flags
						? (Gr || 1 === r
								? (e = !0)
								: sc || 0 !== (536870912 & rc)
								? (e = !1)
								: ((oc = e = !0),
								  (2 === r || 3 === r || 6 === r) &&
										null !== (r = Pi.current) &&
										13 === r.tag &&
										(r.flags |= 16384)),
						  Jc(t, e))
						: Xc(t);
				}
				function Xc(e) {
					var t = e;
					do {
						if (0 !== (32768 & t.flags)) return void Jc(t, oc);
						e = t.return;
						var n = Kl(t.alternate, t, cc);
						if (null !== n) return void (nc = n);
						if (null !== (t = t.sibling)) return void (nc = t);
						nc = t = e;
					} while (null !== t);
					0 === uc && (uc = 5);
				}
				function Jc(e, t) {
					do {
						var n = Gl(e.alternate, e);
						if (null !== n)
							return (n.flags &= 32767), void (nc = n);
						if (
							(null !== (n = e.return) &&
								((n.flags |= 32768),
								(n.subtreeFlags = 0),
								(n.deletions = null)),
							!t && null !== (e = e.sibling))
						)
							return void (nc = e);
						nc = e = n;
					} while (null !== e);
					(uc = 6), (nc = null);
				}
				function Zc(e, t, n, r, i, a, s, l, c, u) {
					var d = I.T,
						f = W.p;
					try {
						(W.p = 2),
							(I.T = null),
							(function (e, t, n, r, i, a, s, l) {
								do {
									tu();
								} while (null !== Cc);
								if (0 !== (6 & ec)) throw Error(o(327));
								var c = e.finishedWork;
								if (((r = e.finishedLanes), null === c))
									return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									c === e.current)
								)
									throw Error(o(177));
								(e.callbackNode = null),
									(e.callbackPriority = 0),
									(e.cancelPendingCommit = null);
								var u = c.lanes | c.childLanes;
								if (
									((function (e, t, n, r, i, a) {
										var o = e.pendingLanes;
										(e.pendingLanes = n),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.warmLanes = 0),
											(e.expiredLanes &= n),
											(e.entangledLanes &= n),
											(e.errorRecoveryDisabledLanes &= n),
											(e.shellSuspendCounter = 0);
										var s = e.entanglements,
											l = e.expirationTimes,
											c = e.hiddenUpdates;
										for (n = o & ~n; 0 < n; ) {
											var u = 31 - be(n),
												d = 1 << u;
											(s[u] = 0), (l[u] = -1);
											var f = c[u];
											if (null !== f)
												for (
													c[u] = null, u = 0;
													u < f.length;
													u++
												) {
													var h = f[u];
													null !== h &&
														(h.lane &= -536870913);
												}
											n &= ~d;
										}
										0 !== r && Re(e, r, 0),
											0 !== a &&
												0 === i &&
												0 !== e.tag &&
												(e.suspendedLanes |=
													a & ~(o & ~t));
									})(e, r, (u |= Er), a, s, l),
									e === tc && ((nc = tc = null), (rc = 0)),
									(0 === (10256 & c.subtreeFlags) &&
										0 === (10256 & c.flags)) ||
										Sc ||
										((Sc = !0),
										(xc = u),
										(Tc = n),
										(function (e, t) {
											ie(e, t);
										})(fe, function () {
											return tu(), null;
										})),
									(n = 0 !== (15990 & c.flags)),
									0 !== (15990 & c.subtreeFlags) || n
										? ((n = I.T),
										  (I.T = null),
										  (a = W.p),
										  (W.p = 2),
										  (s = ec),
										  (ec |= 4),
										  (function (e, t) {
												if (
													((e = e.containerInfo),
													(Qu = Hd),
													er((e = Zn(e))))
												) {
													if ("selectionStart" in e)
														var n = {
															start: e.selectionStart,
															end: e.selectionEnd,
														};
													else
														e: {
															var r =
																(n =
																	((n =
																		e.ownerDocument) &&
																		n.defaultView) ||
																	window)
																	.getSelection &&
																n.getSelection();
															if (
																r &&
																0 !==
																	r.rangeCount
															) {
																n =
																	r.anchorNode;
																var i =
																		r.anchorOffset,
																	a =
																		r.focusNode;
																r =
																	r.focusOffset;
																try {
																	n.nodeType,
																		a.nodeType;
																} catch (g) {
																	n = null;
																	break e;
																}
																var s = 0,
																	l = -1,
																	c = -1,
																	u = 0,
																	d = 0,
																	f = e,
																	h = null;
																t: for (;;) {
																	for (
																		var p;
																		f !==
																			n ||
																			(0 !==
																				i &&
																				3 !==
																					f.nodeType) ||
																			(l =
																				s +
																				i),
																			f !==
																				a ||
																				(0 !==
																					r &&
																					3 !==
																						f.nodeType) ||
																				(c =
																					s +
																					r),
																			3 ===
																				f.nodeType &&
																				(s +=
																					f
																						.nodeValue
																						.length),
																			null !==
																				(p =
																					f.firstChild);

																	)
																		(h = f),
																			(f =
																				p);
																	for (;;) {
																		if (
																			f ===
																			e
																		)
																			break t;
																		if (
																			(h ===
																				n &&
																				++u ===
																					i &&
																				(l =
																					s),
																			h ===
																				a &&
																				++d ===
																					r &&
																				(c =
																					s),
																			null !==
																				(p =
																					f.nextSibling))
																		)
																			break;
																		h = (f =
																			h)
																			.parentNode;
																	}
																	f = p;
																}
																n =
																	-1 === l ||
																	-1 === c
																		? null
																		: {
																				start: l,
																				end: c,
																		  };
															} else n = null;
														}
													n = n || {
														start: 0,
														end: 0,
													};
												} else n = null;
												for (
													Yu = {
														focusedElem: e,
														selectionRange: n,
													},
														Hd = !1,
														nl = t;
													null !== nl;

												)
													if (
														((e = (t = nl).child),
														0 !==
															(1028 &
																t.subtreeFlags) &&
															null !== e)
													)
														(e.return = t),
															(nl = e);
													else
														for (; null !== nl; ) {
															switch (
																((a = (t = nl)
																	.alternate),
																(e = t.flags),
																t.tag)
															) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 26:
																case 27:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (
																		0 !==
																			(1024 &
																				e) &&
																		null !==
																			a
																	) {
																		(e =
																			void 0),
																			(n =
																				t),
																			(i =
																				a.memoizedProps),
																			(a =
																				a.memoizedState),
																			(r =
																				n.stateNode);
																		try {
																			var m =
																				Ro(
																					n.type,
																					i,
																					(n.elementType,
																					n.type)
																				);
																			(e =
																				r.getSnapshotBeforeUpdate(
																					m,
																					a
																				)),
																				(r.__reactInternalSnapshotBeforeUpdate =
																					e);
																		} catch (y) {
																			ru(
																				n,
																				n.return,
																				y
																			);
																		}
																	}
																	break;
																case 3:
																	if (
																		0 !==
																		(1024 &
																			e)
																	)
																		if (
																			9 ===
																			(n =
																				(e =
																					t
																						.stateNode
																						.containerInfo)
																					.nodeType)
																		)
																			od(
																				e
																			);
																		else if (
																			1 ===
																			n
																		)
																			switch (
																				e.nodeName
																			) {
																				case "HEAD":
																				case "HTML":
																				case "BODY":
																					od(
																						e
																					);
																					break;
																				default:
																					e.textContent =
																						"";
																			}
																	break;
																default:
																	if (
																		0 !==
																		(1024 &
																			e)
																	)
																		throw Error(
																			o(
																				163
																			)
																		);
															}
															if (
																null !==
																(e = t.sibling)
															) {
																(e.return =
																	t.return),
																	(nl = e);
																break;
															}
															nl = t.return;
														}
												(m = rl), (rl = !1);
										  })(e, c),
										  pl(c, e),
										  tr(Yu, e.containerInfo),
										  (Hd = !!Qu),
										  (Yu = Qu = null),
										  (e.current = c),
										  il(e, c.alternate, c),
										  se(),
										  (ec = s),
										  (W.p = a),
										  (I.T = n))
										: (e.current = c),
									Sc
										? ((Sc = !1), (Cc = e), (Ec = r))
										: eu(e, u),
									(u = e.pendingLanes),
									0 === u && (kc = null),
									(function (e) {
										if (
											ve &&
											"function" ===
												typeof ve.onCommitFiberRoot
										)
											try {
												ve.onCommitFiberRoot(
													ye,
													e,
													void 0,
													128 ===
														(128 & e.current.flags)
												);
											} catch (t) {}
									})(c.stateNode),
									mu(e),
									null !== t)
								)
									for (
										i = e.onRecoverableError, c = 0;
										c < t.length;
										c++
									)
										(u = t[c]),
											i(u.value, {
												componentStack: u.stack,
											});
								0 !== (3 & Ec) && tu(),
									(u = e.pendingLanes),
									0 !== (4194218 & r) && 0 !== (42 & u)
										? e === Nc
											? Pc++
											: ((Pc = 0), (Nc = e))
										: (Pc = 0),
									gu(0, !1);
							})(e, t, n, r, f, i, a, s);
					} finally {
						(I.T = d), (W.p = f);
					}
				}
				function eu(e, t) {
					0 === (e.pooledCacheLanes &= t) &&
						null != (t = e.pooledCache) &&
						((e.pooledCache = null), Ui(t));
				}
				function tu() {
					if (null !== Cc) {
						var e = Cc,
							t = xc;
						xc = 0;
						var n = Le(Ec),
							r = I.T,
							i = W.p;
						try {
							if (
								((W.p = 32 > n ? 32 : n),
								(I.T = null),
								null === Cc)
							)
								var a = !1;
							else {
								(n = Tc), (Tc = null);
								var s = Cc,
									l = Ec;
								if (((Cc = null), (Ec = 0), 0 !== (6 & ec)))
									throw Error(o(331));
								var c = ec;
								if (
									((ec |= 4),
									Al(s.current),
									Sl(s, s.current, l, n),
									(ec = c),
									gu(0, !1),
									ve &&
										"function" ===
											typeof ve.onPostCommitFiberRoot)
								)
									try {
										ve.onPostCommitFiberRoot(ye, s);
									} catch (u) {}
								a = !0;
							}
							return a;
						} finally {
							(W.p = i), (I.T = r), eu(e, t);
						}
					}
					return !1;
				}
				function nu(e, t, n) {
					(t = Dr(n, t)),
						null !== (e = Os(e, (t = qo(e.stateNode, t, 2)), 2)) &&
							(Oe(e, 2), mu(e));
				}
				function ru(e, t, n) {
					if (3 === e.tag) nu(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								nu(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									"function" ===
										typeof t.type
											.getDerivedStateFromError ||
									("function" ===
										typeof r.componentDidCatch &&
										(null === kc || !kc.has(r)))
								) {
									(e = Dr(n, e)),
										null !== (r = Os(t, (n = Uo(2)), 2)) &&
											(Wo(n, r, t, e), Oe(r, 2), mu(r));
									break;
								}
							}
							t = t.return;
						}
				}
				function iu(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new Zl();
						var i = new Set();
						r.set(t, i);
					} else
						void 0 === (i = r.get(t)) &&
							((i = new Set()), r.set(t, i));
					i.has(n) ||
						((lc = !0),
						i.add(n),
						(e = au.bind(null, e, t, n)),
						t.then(e, e));
				}
				function au(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(e.pingedLanes |= e.suspendedLanes & n),
						(e.warmLanes &= ~n),
						tc === e &&
							(rc & n) === n &&
							(4 === uc ||
							(3 === uc &&
								(62914560 & rc) === rc &&
								300 > le() - _c)
								? 0 === (2 & ec) && qc(e, 0)
								: (hc |= n),
							mc === rc && (mc = 0)),
						mu(e);
				}
				function ou(e, t) {
					0 === t && (t = Ie()),
						null !== (e = Nr(e, t)) && (Oe(e, t), mu(e));
				}
				function su(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), ou(e, n);
				}
				function lu(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								i = e.memoizedState;
							null !== i && (n = i.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						case 22:
							r = e.stateNode._retryCache;
							break;
						default:
							throw Error(o(314));
					}
					null !== r && r.delete(t), ou(e, n);
				}
				var cu = null,
					uu = null,
					du = !1,
					fu = !1,
					hu = !1,
					pu = 0;
				function mu(e) {
					var t;
					e !== uu &&
						null === e.next &&
						(null === uu ? (cu = uu = e) : (uu = uu.next = e)),
						(fu = !0),
						du ||
							((du = !0),
							(t = yu),
							rd(function () {
								0 !== (6 & ec) ? ie(ue, t) : t();
							}));
				}
				function gu(e, t) {
					if (!hu && fu) {
						hu = !0;
						do {
							for (var n = !1, r = cu; null !== r; ) {
								if (!t)
									if (0 !== e) {
										var i = r.pendingLanes;
										if (0 === i) var a = 0;
										else {
											var o = r.suspendedLanes,
												s = r.pingedLanes;
											(a =
												(1 << (31 - be(42 | e) + 1)) -
												1),
												(a =
													201326677 &
													(a &= i & ~(o & ~s))
														? (201326677 & a) | 1
														: a
														? 2 | a
														: 0);
										}
										0 !== a && ((n = !0), bu(r, a));
									} else
										(a = rc),
											0 ===
												(3 &
													(a = xe(
														r,
														r === tc ? a : 0
													))) ||
												Te(r, a) ||
												((n = !0), bu(r, a));
								r = r.next;
							}
						} while (n);
						hu = !1;
					}
				}
				function yu() {
					fu = du = !1;
					var e = 0;
					0 !== pu &&
						((function () {
							var e = window.event;
							if (e && "popstate" === e.type)
								return e !== Zu && ((Zu = e), !0);
							return (Zu = null), !1;
						})() && (e = pu),
						(pu = 0));
					for (var t = le(), n = null, r = cu; null !== r; ) {
						var i = r.next,
							a = vu(r, t);
						0 === a
							? ((r.next = null),
							  null === n ? (cu = i) : (n.next = i),
							  null === i && (uu = n))
							: ((n = r),
							  (0 !== e || 0 !== (3 & a)) && (fu = !0)),
							(r = i);
					}
					gu(e, !1);
				}
				function vu(e, t) {
					for (
						var n = e.suspendedLanes,
							r = e.pingedLanes,
							i = e.expirationTimes,
							a = -62914561 & e.pendingLanes;
						0 < a;

					) {
						var o = 31 - be(a),
							s = 1 << o,
							l = i[o];
						-1 === l
							? (0 !== (s & n) && 0 === (s & r)) ||
							  (i[o] = Pe(s, t))
							: l <= t && (e.expiredLanes |= s),
							(a &= ~s);
					}
					if (
						((n = rc),
						(n = xe(e, e === (t = tc) ? n : 0)),
						(r = e.callbackNode),
						0 === n ||
							(e === t && 2 === ic) ||
							null !== e.cancelPendingCommit)
					)
						return (
							null !== r && null !== r && ae(r),
							(e.callbackNode = null),
							(e.callbackPriority = 0)
						);
					if (0 === (3 & n) || Te(e, n)) {
						if ((t = n & -n) === e.callbackPriority) return t;
						switch ((null !== r && ae(r), Le(n))) {
							case 2:
							case 8:
								n = de;
								break;
							case 32:
							default:
								n = fe;
								break;
							case 268435456:
								n = pe;
						}
						return (
							(r = _u.bind(null, e)),
							(n = ie(n, r)),
							(e.callbackPriority = t),
							(e.callbackNode = n),
							t
						);
					}
					return (
						null !== r && null !== r && ae(r),
						(e.callbackPriority = 2),
						(e.callbackNode = null),
						2
					);
				}
				function _u(e, t) {
					var n = e.callbackNode;
					if (tu() && e.callbackNode !== n) return null;
					var r = rc;
					return 0 === (r = xe(e, e === tc ? r : 0))
						? null
						: (Rc(e, r, t),
						  vu(e, le()),
						  null != e.callbackNode && e.callbackNode === n
								? _u.bind(null, e)
								: null);
				}
				function bu(e, t) {
					if (tu()) return null;
					Rc(e, t, !0);
				}
				function wu() {
					return 0 === pu && (pu = Ne()), pu;
				}
				function ku(e) {
					return null == e ||
						"symbol" === typeof e ||
						"boolean" === typeof e
						? null
						: "function" === typeof e
						? e
						: Nt("" + e);
				}
				function Su(e, t) {
					var n = t.ownerDocument.createElement("input");
					return (
						(n.name = t.name),
						(n.value = t.value),
						e.id && n.setAttribute("form", e.id),
						t.parentNode.insertBefore(n, t),
						(e = new FormData(e)),
						n.parentNode.removeChild(n),
						e
					);
				}
				for (var Cu = 0; Cu < wr.length; Cu++) {
					var Eu = wr[Cu];
					kr(
						Eu.toLowerCase(),
						"on" + (Eu[0].toUpperCase() + Eu.slice(1))
					);
				}
				kr(hr, "onAnimationEnd"),
					kr(pr, "onAnimationIteration"),
					kr(mr, "onAnimationStart"),
					kr("dblclick", "onDoubleClick"),
					kr("focusin", "onFocus"),
					kr("focusout", "onBlur"),
					kr(gr, "onTransitionRun"),
					kr(yr, "onTransitionStart"),
					kr(vr, "onTransitionCancel"),
					kr(_r, "onTransitionEnd"),
					tt("onMouseEnter", ["mouseout", "mouseover"]),
					tt("onMouseLeave", ["mouseout", "mouseover"]),
					tt("onPointerEnter", ["pointerout", "pointerover"]),
					tt("onPointerLeave", ["pointerout", "pointerover"]),
					et(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					et(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					et("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					et(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					et(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					et(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var xu =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					Tu = new Set(
						"beforetoggle cancel close invalid load scroll scrollend toggle"
							.split(" ")
							.concat(xu)
					);
				function Pu(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							i = r.event;
						r = r.listeners;
						e: {
							var a = void 0;
							if (t)
								for (var o = r.length - 1; 0 <= o; o--) {
									var s = r[o],
										l = s.instance,
										c = s.currentTarget;
									if (
										((s = s.listener),
										l !== a && i.isPropagationStopped())
									)
										break e;
									(a = s), (i.currentTarget = c);
									try {
										a(i);
									} catch (u) {
										Do(u);
									}
									(i.currentTarget = null), (a = l);
								}
							else
								for (o = 0; o < r.length; o++) {
									if (
										((l = (s = r[o]).instance),
										(c = s.currentTarget),
										(s = s.listener),
										l !== a && i.isPropagationStopped())
									)
										break e;
									(a = s), (i.currentTarget = c);
									try {
										a(i);
									} catch (u) {
										Do(u);
									}
									(i.currentTarget = null), (a = l);
								}
						}
					}
				}
				function Nu(e, t) {
					var n = t[Ue];
					void 0 === n && (n = t[Ue] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Ru(t, e, 2, !1), n.add(r));
				}
				function Iu(e, t, n) {
					var r = 0;
					t && (r |= 4), Ru(n, e, r, t);
				}
				var Au =
					"_reactListening" + Math.random().toString(36).slice(2);
				function Ou(e) {
					if (!e[Au]) {
						(e[Au] = !0),
							Je.forEach(function (t) {
								"selectionchange" !== t &&
									(Tu.has(t) || Iu(t, !1, e), Iu(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t ||
							t[Au] ||
							((t[Au] = !0), Iu("selectionchange", !1, t));
					}
				}
				function Ru(e, t, n, r) {
					switch (Xd(t)) {
						case 2:
							var i = Vd;
							break;
						case 8:
							i = $d;
							break;
						default:
							i = Qd;
					}
					(n = i.bind(null, t, n, e)),
						(i = void 0),
						!zt ||
							("touchstart" !== t &&
								"touchmove" !== t &&
								"wheel" !== t) ||
							(i = !0),
						r
							? void 0 !== i
								? e.addEventListener(t, n, {
										capture: !0,
										passive: i,
								  })
								: e.addEventListener(t, n, !0)
							: void 0 !== i
							? e.addEventListener(t, n, { passive: i })
							: e.addEventListener(t, n, !1);
				}
				function Du(e, t, n, r, i) {
					var a = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var o = r.tag;
							if (3 === o || 4 === o) {
								var s = r.stateNode.containerInfo;
								if (
									s === i ||
									(8 === s.nodeType && s.parentNode === i)
								)
									break;
								if (4 === o)
									for (o = r.return; null !== o; ) {
										var l = o.tag;
										if (
											(3 === l || 4 === l) &&
											((l = o.stateNode.containerInfo) ===
												i ||
												(8 === l.nodeType &&
													l.parentNode === i))
										)
											return;
										o = o.return;
									}
								for (; null !== s; ) {
									if (null === (o = Qe(s))) return;
									if (
										5 === (l = o.tag) ||
										6 === l ||
										26 === l ||
										27 === l
									) {
										r = a = o;
										continue e;
									}
									s = s.parentNode;
								}
							}
							r = r.return;
						}
					Mt(function () {
						var r = a,
							i = At(n),
							o = [];
						e: {
							var s = br.get(e);
							if (void 0 !== s) {
								var l = Jt,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === Ht(n)) break e;
									case "keydown":
									case "keyup":
										l = pn;
										break;
									case "focusin":
										(c = "focus"), (l = an);
										break;
									case "focusout":
										(c = "blur"), (l = an);
										break;
									case "beforeblur":
									case "afterblur":
										l = an;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = nn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = rn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = gn;
										break;
									case hr:
									case pr:
									case mr:
										l = on;
										break;
									case _r:
										l = yn;
										break;
									case "scroll":
									case "scrollend":
										l = en;
										break;
									case "wheel":
										l = vn;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = sn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = mn;
										break;
									case "toggle":
									case "beforetoggle":
										l = _n;
								}
								var u = 0 !== (4 & t),
									d =
										!u &&
										("scroll" === e || "scrollend" === e),
									f = u
										? null !== s
											? s + "Capture"
											: null
										: s;
								u = [];
								for (var h, p = r; null !== p; ) {
									var m = p;
									if (
										((h = m.stateNode),
										(5 !== (m = m.tag) &&
											26 !== m &&
											27 !== m) ||
											null === h ||
											null === f ||
											(null != (m = Ft(p, f)) &&
												u.push(Lu(p, m, h))),
										d)
									)
										break;
									p = p.return;
								}
								0 < u.length &&
									((s = new l(s, c, null, n, i)),
									o.push({ event: s, listeners: u }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((l = "mouseout" === e || "pointerout" === e),
								(!(s =
									"mouseover" === e || "pointerover" === e) ||
									n === It ||
									!(c = n.relatedTarget || n.fromElement) ||
									(!Qe(c) && !c[qe])) &&
									(l || s) &&
									((s =
										i.window === i
											? i
											: (s = i.ownerDocument)
											? s.defaultView || s.parentWindow
											: window),
									l
										? ((l = r),
										  null !==
												(c = (c =
													n.relatedTarget ||
													n.toElement)
													? Qe(c)
													: null) &&
												((d = F(c)),
												(u = c.tag),
												c !== d ||
													(5 !== u &&
														27 !== u &&
														6 !== u)) &&
												(c = null))
										: ((l = null), (c = r)),
									l !== c))
							) {
								if (
									((u = nn),
									(m = "onMouseLeave"),
									(f = "onMouseEnter"),
									(p = "mouse"),
									("pointerout" !== e &&
										"pointerover" !== e) ||
										((u = mn),
										(m = "onPointerLeave"),
										(f = "onPointerEnter"),
										(p = "pointer")),
									(d = null == l ? s : Ke(l)),
									(h = null == c ? s : Ke(c)),
									((s = new u(
										m,
										p + "leave",
										l,
										n,
										i
									)).target = d),
									(s.relatedTarget = h),
									(m = null),
									Qe(i) === r &&
										(((u = new u(
											f,
											p + "enter",
											c,
											n,
											i
										)).target = h),
										(u.relatedTarget = d),
										(m = u)),
									(d = m),
									l && c)
								)
									e: {
										for (
											f = c, p = 0, h = u = l;
											h;
											h = Fu(h)
										)
											p++;
										for (h = 0, m = f; m; m = Fu(m)) h++;
										for (; 0 < p - h; ) (u = Fu(u)), p--;
										for (; 0 < h - p; ) (f = Fu(f)), h--;
										for (; p--; ) {
											if (
												u === f ||
												(null !== f &&
													u === f.alternate)
											)
												break e;
											(u = Fu(u)), (f = Fu(f));
										}
										u = null;
									}
								else u = null;
								null !== l && zu(o, s, l, u, !1),
									null !== c &&
										null !== d &&
										zu(o, d, c, u, !0);
							}
							if (
								"select" ===
									(l =
										(s = r ? Ke(r) : window).nodeName &&
										s.nodeName.toLowerCase()) ||
								("input" === l && "file" === s.type)
							)
								var g = Fn;
							else if (An(s))
								if (zn) g = Qn;
								else {
									g = Vn;
									var y = Hn;
								}
							else
								!(l = s.nodeName) ||
								"input" !== l.toLowerCase() ||
								("checkbox" !== s.type && "radio" !== s.type)
									? r && xt(r.elementType) && (g = Fn)
									: (g = $n);
							switch (
								(g && (g = g(e, r))
									? On(o, g, n, i)
									: (y && y(e, s, r),
									  "focusout" === e &&
											r &&
											"number" === s.type &&
											null != r.memoizedProps.value &&
											vt(s, "number", s.value)),
								(y = r ? Ke(r) : window),
								e)
							) {
								case "focusin":
									(An(y) || "true" === y.contentEditable) &&
										((rr = y), (ir = r), (ar = null));
									break;
								case "focusout":
									ar = ir = rr = null;
									break;
								case "mousedown":
									or = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(or = !1), sr(o, n, i);
									break;
								case "selectionchange":
									if (nr) break;
								case "keydown":
								case "keyup":
									sr(o, n, i);
							}
							var v;
							if (wn)
								e: {
									switch (e) {
										case "compositionstart":
											var _ = "onCompositionStart";
											break e;
										case "compositionend":
											_ = "onCompositionEnd";
											break e;
										case "compositionupdate":
											_ = "onCompositionUpdate";
											break e;
									}
									_ = void 0;
								}
							else
								Nn
									? Tn(e, n) && (_ = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (_ = "onCompositionStart");
							_ &&
								(Cn &&
									"ko" !== n.locale &&
									(Nn || "onCompositionStart" !== _
										? "onCompositionEnd" === _ &&
										  Nn &&
										  (v = Bt())
										: ((Ut =
												"value" in (qt = i)
													? qt.value
													: qt.textContent),
										  (Nn = !0))),
								0 < (y = Mu(r, _)).length &&
									((_ = new ln(_, e, null, n, i)),
									o.push({ event: _, listeners: y }),
									v
										? (_.data = v)
										: null !== (v = Pn(n)) &&
										  (_.data = v))),
								(v = Sn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Pn(t);
												case "keypress":
													return 32 !== t.which
														? null
														: ((xn = !0), En);
												case "textInput":
													return (e = t.data) ===
														En && xn
														? null
														: e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Nn)
												return "compositionend" === e ||
													(!wn && Tn(e, t))
													? ((e = Bt()),
													  (Wt = Ut = qt = null),
													  (Nn = !1),
													  e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(
															t.ctrlKey ||
															t.altKey ||
															t.metaKey
														) ||
														(t.ctrlKey && t.altKey)
													) {
														if (
															t.char &&
															1 < t.char.length
														)
															return t.char;
														if (t.which)
															return String.fromCharCode(
																t.which
															);
													}
													return null;
												case "compositionend":
													return Cn &&
														"ko" !== t.locale
														? null
														: t.data;
											}
									  })(e, n)) &&
									0 < (_ = Mu(r, "onBeforeInput")).length &&
									((y = new ln(
										"onBeforeInput",
										"beforeinput",
										null,
										n,
										i
									)),
									o.push({ event: y, listeners: _ }),
									(y.data = v)),
								(function (e, t, n, r, i) {
									if (
										"submit" === t &&
										n &&
										n.stateNode === i
									) {
										var a = ku((i[je] || null).action),
											o = r.submitter;
										o &&
											null !==
												(t = (t = o[je] || null)
													? ku(t.formAction)
													: o.getAttribute(
															"formAction"
													  )) &&
											((a = t), (o = null));
										var s = new Jt(
											"action",
											"action",
											null,
											r,
											i
										);
										e.push({
											event: s,
											listeners: [
												{
													instance: null,
													listener: function () {
														if (
															r.defaultPrevented
														) {
															if (0 !== pu) {
																var e = o
																	? Su(i, o)
																	: new FormData(
																			i
																	  );
																uo(
																	n,
																	{
																		pending:
																			!0,
																		data: e,
																		method: i.method,
																		action: a,
																	},
																	null,
																	e
																);
															}
														} else
															"function" ===
																typeof a &&
																(s.preventDefault(),
																(e = o
																	? Su(i, o)
																	: new FormData(
																			i
																	  )),
																uo(
																	n,
																	{
																		pending:
																			!0,
																		data: e,
																		method: i.method,
																		action: a,
																	},
																	a,
																	e
																));
													},
													currentTarget: i,
												},
											],
										});
									}
								})(o, e, r, n, i);
						}
						Pu(o, t);
					});
				}
				function Lu(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Mu(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var i = e,
							a = i.stateNode;
						(5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
							null === a ||
							(null != (i = Ft(e, n)) && r.unshift(Lu(e, i, a)),
							null != (i = Ft(e, t)) && r.push(Lu(e, i, a))),
							(e = e.return);
					}
					return r;
				}
				function Fu(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag && 27 !== e.tag);
					return e || null;
				}
				function zu(e, t, n, r, i) {
					for (
						var a = t._reactName, o = [];
						null !== n && n !== r;

					) {
						var s = n,
							l = s.alternate,
							c = s.stateNode;
						if (((s = s.tag), null !== l && l === r)) break;
						(5 !== s && 26 !== s && 27 !== s) ||
							null === c ||
							((l = c),
							i
								? null != (c = Ft(n, a)) &&
								  o.unshift(Lu(n, c, l))
								: i ||
								  (null != (c = Ft(n, a)) &&
										o.push(Lu(n, c, l)))),
							(n = n.return);
					}
					0 !== o.length && e.push({ event: t, listeners: o });
				}
				var ju = /\r\n?/g,
					qu = /\u0000|\uFFFD/g;
				function Uu(e) {
					return ("string" === typeof e ? e : "" + e)
						.replace(ju, "\n")
						.replace(qu, "");
				}
				function Wu(e, t) {
					return (t = Uu(t)), Uu(e) === t;
				}
				function Bu() {}
				function Hu(e, t, n, r, i, a) {
					switch (n) {
						case "children":
							"string" === typeof r
								? "body" === t ||
								  ("textarea" === t && "" === r) ||
								  kt(e, r)
								: ("number" === typeof r ||
										"bigint" === typeof r) &&
								  "body" !== t &&
								  kt(e, "" + r);
							break;
						case "className":
							st(e, "class", r);
							break;
						case "tabIndex":
							st(e, "tabindex", r);
							break;
						case "dir":
						case "role":
						case "viewBox":
						case "width":
						case "height":
							st(e, n, r);
							break;
						case "style":
							Et(e, r, a);
							break;
						case "data":
							if ("object" !== t) {
								st(e, "data", r);
								break;
							}
						case "src":
						case "href":
							if ("" === r && ("a" !== t || "href" !== n)) {
								e.removeAttribute(n);
								break;
							}
							if (
								null == r ||
								"function" === typeof r ||
								"symbol" === typeof r ||
								"boolean" === typeof r
							) {
								e.removeAttribute(n);
								break;
							}
							(r = Nt("" + r)), e.setAttribute(n, r);
							break;
						case "action":
						case "formAction":
							if ("function" === typeof r) {
								e.setAttribute(
									n,
									"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
								);
								break;
							}
							if (
								("function" === typeof a &&
									("formAction" === n
										? ("input" !== t &&
												Hu(
													e,
													t,
													"name",
													i.name,
													i,
													null
												),
										  Hu(
												e,
												t,
												"formEncType",
												i.formEncType,
												i,
												null
										  ),
										  Hu(
												e,
												t,
												"formMethod",
												i.formMethod,
												i,
												null
										  ),
										  Hu(
												e,
												t,
												"formTarget",
												i.formTarget,
												i,
												null
										  ))
										: (Hu(
												e,
												t,
												"encType",
												i.encType,
												i,
												null
										  ),
										  Hu(e, t, "method", i.method, i, null),
										  Hu(
												e,
												t,
												"target",
												i.target,
												i,
												null
										  ))),
								null == r ||
									"symbol" === typeof r ||
									"boolean" === typeof r)
							) {
								e.removeAttribute(n);
								break;
							}
							(r = Nt("" + r)), e.setAttribute(n, r);
							break;
						case "onClick":
							null != r && (e.onclick = Bu);
							break;
						case "onScroll":
							null != r && Nu("scroll", e);
							break;
						case "onScrollEnd":
							null != r && Nu("scrollend", e);
							break;
						case "dangerouslySetInnerHTML":
							if (null != r) {
								if ("object" !== typeof r || !("__html" in r))
									throw Error(o(61));
								if (null != (n = r.__html)) {
									if (null != i.children) throw Error(o(60));
									e.innerHTML = n;
								}
							}
							break;
						case "multiple":
							e.multiple =
								r &&
								"function" !== typeof r &&
								"symbol" !== typeof r;
							break;
						case "muted":
							e.muted =
								r &&
								"function" !== typeof r &&
								"symbol" !== typeof r;
							break;
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
						case "defaultValue":
						case "defaultChecked":
						case "innerHTML":
						case "ref":
						case "autoFocus":
							break;
						case "xlinkHref":
							if (
								null == r ||
								"function" === typeof r ||
								"boolean" === typeof r ||
								"symbol" === typeof r
							) {
								e.removeAttribute("xlink:href");
								break;
							}
							(n = Nt("" + r)),
								e.setAttributeNS(
									"http://www.w3.org/1999/xlink",
									"xlink:href",
									n
								);
							break;
						case "contentEditable":
						case "spellCheck":
						case "draggable":
						case "value":
						case "autoReverse":
						case "externalResourcesRequired":
						case "focusable":
						case "preserveAlpha":
							null != r &&
							"function" !== typeof r &&
							"symbol" !== typeof r
								? e.setAttribute(n, "" + r)
								: e.removeAttribute(n);
							break;
						case "inert":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
							r &&
							"function" !== typeof r &&
							"symbol" !== typeof r
								? e.setAttribute(n, "")
								: e.removeAttribute(n);
							break;
						case "capture":
						case "download":
							!0 === r
								? e.setAttribute(n, "")
								: !1 !== r &&
								  null != r &&
								  "function" !== typeof r &&
								  "symbol" !== typeof r
								? e.setAttribute(n, r)
								: e.removeAttribute(n);
							break;
						case "cols":
						case "rows":
						case "size":
						case "span":
							null != r &&
							"function" !== typeof r &&
							"symbol" !== typeof r &&
							!isNaN(r) &&
							1 <= r
								? e.setAttribute(n, r)
								: e.removeAttribute(n);
							break;
						case "rowSpan":
						case "start":
							null == r ||
							"function" === typeof r ||
							"symbol" === typeof r ||
							isNaN(r)
								? e.removeAttribute(n)
								: e.setAttribute(n, r);
							break;
						case "popover":
							Nu("beforetoggle", e),
								Nu("toggle", e),
								ot(e, "popover", r);
							break;
						case "xlinkActuate":
							lt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:actuate",
								r
							);
							break;
						case "xlinkArcrole":
							lt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:arcrole",
								r
							);
							break;
						case "xlinkRole":
							lt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:role",
								r
							);
							break;
						case "xlinkShow":
							lt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:show",
								r
							);
							break;
						case "xlinkTitle":
							lt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:title",
								r
							);
							break;
						case "xlinkType":
							lt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:type",
								r
							);
							break;
						case "xmlBase":
							lt(
								e,
								"http://www.w3.org/XML/1998/namespace",
								"xml:base",
								r
							);
							break;
						case "xmlLang":
							lt(
								e,
								"http://www.w3.org/XML/1998/namespace",
								"xml:lang",
								r
							);
							break;
						case "xmlSpace":
							lt(
								e,
								"http://www.w3.org/XML/1998/namespace",
								"xml:space",
								r
							);
							break;
						case "is":
							ot(e, "is", r);
							break;
						case "innerText":
						case "textContent":
							break;
						default:
							(!(2 < n.length) ||
								("o" !== n[0] && "O" !== n[0]) ||
								("n" !== n[1] && "N" !== n[1])) &&
								ot(e, (n = Tt.get(n) || n), r);
					}
				}
				function Vu(e, t, n, r, i, a) {
					switch (n) {
						case "style":
							Et(e, r, a);
							break;
						case "dangerouslySetInnerHTML":
							if (null != r) {
								if ("object" !== typeof r || !("__html" in r))
									throw Error(o(61));
								if (null != (n = r.__html)) {
									if (null != i.children) throw Error(o(60));
									e.innerHTML = n;
								}
							}
							break;
						case "children":
							"string" === typeof r
								? kt(e, r)
								: ("number" === typeof r ||
										"bigint" === typeof r) &&
								  kt(e, "" + r);
							break;
						case "onScroll":
							null != r && Nu("scroll", e);
							break;
						case "onScrollEnd":
							null != r && Nu("scrollend", e);
							break;
						case "onClick":
							null != r && (e.onclick = Bu);
							break;
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
						case "innerHTML":
						case "ref":
						case "innerText":
						case "textContent":
							break;
						default:
							Ze.hasOwnProperty(n) ||
								("o" !== n[0] ||
								"n" !== n[1] ||
								((i = n.endsWith("Capture")),
								(t = n.slice(2, i ? n.length - 7 : void 0)),
								"function" ===
									typeof (a =
										null != (a = e[je] || null)
											? a[n]
											: null) &&
									e.removeEventListener(t, a, i),
								"function" !== typeof r)
									? n in e
										? (e[n] = r)
										: !0 === r
										? e.setAttribute(n, "")
										: ot(e, n, r)
									: ("function" !== typeof a &&
											null !== a &&
											(n in e
												? (e[n] = null)
												: e.hasAttribute(n) &&
												  e.removeAttribute(n)),
									  e.addEventListener(t, r, i)));
					}
				}
				function $u(e, t, n) {
					switch (t) {
						case "div":
						case "span":
						case "svg":
						case "path":
						case "a":
						case "g":
						case "p":
						case "li":
							break;
						case "img":
							Nu("error", e), Nu("load", e);
							var r,
								i = !1,
								a = !1;
							for (r in n)
								if (n.hasOwnProperty(r)) {
									var s = n[r];
									if (null != s)
										switch (r) {
											case "src":
												i = !0;
												break;
											case "srcSet":
												a = !0;
												break;
											case "children":
											case "dangerouslySetInnerHTML":
												throw Error(o(137, t));
											default:
												Hu(e, t, r, s, n, null);
										}
								}
							return (
								a && Hu(e, t, "srcSet", n.srcSet, n, null),
								void (i && Hu(e, t, "src", n.src, n, null))
							);
						case "input":
							Nu("invalid", e);
							var l = (r = s = a = null),
								c = null,
								u = null;
							for (i in n)
								if (n.hasOwnProperty(i)) {
									var d = n[i];
									if (null != d)
										switch (i) {
											case "name":
												a = d;
												break;
											case "type":
												s = d;
												break;
											case "checked":
												c = d;
												break;
											case "defaultChecked":
												u = d;
												break;
											case "value":
												r = d;
												break;
											case "defaultValue":
												l = d;
												break;
											case "children":
											case "dangerouslySetInnerHTML":
												if (null != d)
													throw Error(o(137, t));
												break;
											default:
												Hu(e, t, i, d, n, null);
										}
								}
							return yt(e, r, l, c, u, s, a, !1), void dt(e);
						case "select":
							for (a in (Nu("invalid", e), (i = s = r = null), n))
								if (n.hasOwnProperty(a) && null != (l = n[a]))
									switch (a) {
										case "value":
											r = l;
											break;
										case "defaultValue":
											s = l;
											break;
										case "multiple":
											i = l;
										default:
											Hu(e, t, a, l, n, null);
									}
							return (
								(t = r),
								(n = s),
								(e.multiple = !!i),
								void (null != t
									? _t(e, !!i, t, !1)
									: null != n && _t(e, !!i, n, !0))
							);
						case "textarea":
							for (s in (Nu("invalid", e), (r = a = i = null), n))
								if (n.hasOwnProperty(s) && null != (l = n[s]))
									switch (s) {
										case "value":
											i = l;
											break;
										case "defaultValue":
											a = l;
											break;
										case "children":
											r = l;
											break;
										case "dangerouslySetInnerHTML":
											if (null != l) throw Error(o(91));
											break;
										default:
											Hu(e, t, s, l, n, null);
									}
							return wt(e, i, a, r), void dt(e);
						case "option":
							for (c in n)
								if (n.hasOwnProperty(c) && null != (i = n[c]))
									if ("selected" === c)
										e.selected =
											i &&
											"function" !== typeof i &&
											"symbol" !== typeof i;
									else Hu(e, t, c, i, n, null);
							return;
						case "dialog":
							Nu("cancel", e), Nu("close", e);
							break;
						case "iframe":
						case "object":
							Nu("load", e);
							break;
						case "video":
						case "audio":
							for (i = 0; i < xu.length; i++) Nu(xu[i], e);
							break;
						case "image":
							Nu("error", e), Nu("load", e);
							break;
						case "details":
							Nu("toggle", e);
							break;
						case "embed":
						case "source":
						case "link":
							Nu("error", e), Nu("load", e);
						case "area":
						case "base":
						case "br":
						case "col":
						case "hr":
						case "keygen":
						case "meta":
						case "param":
						case "track":
						case "wbr":
						case "menuitem":
							for (u in n)
								if (n.hasOwnProperty(u) && null != (i = n[u]))
									switch (u) {
										case "children":
										case "dangerouslySetInnerHTML":
											throw Error(o(137, t));
										default:
											Hu(e, t, u, i, n, null);
									}
							return;
						default:
							if (xt(t)) {
								for (d in n)
									n.hasOwnProperty(d) &&
										void 0 !== (i = n[d]) &&
										Vu(e, t, d, i, n, void 0);
								return;
							}
					}
					for (l in n)
						n.hasOwnProperty(l) &&
							null != (i = n[l]) &&
							Hu(e, t, l, i, n, null);
				}
				var Qu = null,
					Yu = null;
				function Ku(e) {
					return 9 === e.nodeType ? e : e.ownerDocument;
				}
				function Gu(e) {
					switch (e) {
						case "http://www.w3.org/2000/svg":
							return 1;
						case "http://www.w3.org/1998/Math/MathML":
							return 2;
						default:
							return 0;
					}
				}
				function Xu(e, t) {
					if (0 === e)
						switch (t) {
							case "svg":
								return 1;
							case "math":
								return 2;
							default:
								return 0;
						}
					return 1 === e && "foreignObject" === t ? 0 : e;
				}
				function Ju(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" === typeof t.children ||
						"number" === typeof t.children ||
						"bigint" === typeof t.children ||
						("object" === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var Zu = null;
				var ed = "function" === typeof setTimeout ? setTimeout : void 0,
					td =
						"function" === typeof clearTimeout
							? clearTimeout
							: void 0,
					nd = "function" === typeof Promise ? Promise : void 0,
					rd =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof nd
							? function (e) {
									return nd.resolve(null).then(e).catch(id);
							  }
							: ed;
				function id(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function ad(e, t) {
					var n = t,
						r = 0;
					do {
						var i = n.nextSibling;
						if ((e.removeChild(n), i && 8 === i.nodeType))
							if ("/$" === (n = i.data)) {
								if (0 === r)
									return e.removeChild(i), void gf(t);
								r--;
							} else
								("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = i;
					} while (n);
					gf(t);
				}
				function od(e) {
					var t = e.firstChild;
					for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
						var n = t;
						switch (((t = t.nextSibling), n.nodeName)) {
							case "HTML":
							case "HEAD":
							case "BODY":
								od(n), $e(n);
								continue;
							case "SCRIPT":
							case "STYLE":
								continue;
							case "LINK":
								if ("stylesheet" === n.rel.toLowerCase())
									continue;
						}
						e.removeChild(n);
					}
				}
				function sd(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if (
								"$" === (t = e.data) ||
								"$!" === t ||
								"$?" === t ||
								"F!" === t ||
								"F" === t
							)
								break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function ld(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				function cd(e, t, n) {
					switch (((t = Ku(n)), e)) {
						case "html":
							if (!(e = t.documentElement)) throw Error(o(452));
							return e;
						case "head":
							if (!(e = t.head)) throw Error(o(453));
							return e;
						case "body":
							if (!(e = t.body)) throw Error(o(454));
							return e;
						default:
							throw Error(o(451));
					}
				}
				var ud = new Map(),
					dd = new Set();
				function fd(e) {
					return "function" === typeof e.getRootNode
						? e.getRootNode()
						: e.ownerDocument;
				}
				var hd = W.d;
				W.d = {
					f: function () {
						var e = hd.f(),
							t = zc();
						return e || t;
					},
					r: function (e) {
						var t = Ye(e);
						null !== t && 5 === t.tag && "form" === t.type
							? ho(t)
							: hd.r(e);
					},
					D: function (e) {
						hd.D(e), md("dns-prefetch", e, null);
					},
					C: function (e, t) {
						hd.C(e, t), md("preconnect", e, t);
					},
					L: function (e, t, n) {
						hd.L(e, t, n);
						var r = pd;
						if (r && e && t) {
							var i = 'link[rel="preload"][as="' + mt(t) + '"]';
							"image" === t && n && n.imageSrcSet
								? ((i +=
										'[imagesrcset="' +
										mt(n.imageSrcSet) +
										'"]'),
								  "string" === typeof n.imageSizes &&
										(i +=
											'[imagesizes="' +
											mt(n.imageSizes) +
											'"]'))
								: (i += '[href="' + mt(e) + '"]');
							var a = i;
							switch (t) {
								case "style":
									a = yd(e);
									break;
								case "script":
									a = bd(e);
							}
							ud.has(a) ||
								((e = A(
									{
										rel: "preload",
										href:
											"image" === t && n && n.imageSrcSet
												? void 0
												: e,
										as: t,
									},
									n
								)),
								ud.set(a, e),
								null !== r.querySelector(i) ||
									("style" === t && r.querySelector(vd(a))) ||
									("script" === t &&
										r.querySelector(wd(a))) ||
									($u(
										(t = r.createElement("link")),
										"link",
										e
									),
									Xe(t),
									r.head.appendChild(t)));
						}
					},
					m: function (e, t) {
						hd.m(e, t);
						var n = pd;
						if (n && e) {
							var r =
									t && "string" === typeof t.as
										? t.as
										: "script",
								i =
									'link[rel="modulepreload"][as="' +
									mt(r) +
									'"][href="' +
									mt(e) +
									'"]',
								a = i;
							switch (r) {
								case "audioworklet":
								case "paintworklet":
								case "serviceworker":
								case "sharedworker":
								case "worker":
								case "script":
									a = bd(e);
							}
							if (
								!ud.has(a) &&
								((e = A({ rel: "modulepreload", href: e }, t)),
								ud.set(a, e),
								null === n.querySelector(i))
							) {
								switch (r) {
									case "audioworklet":
									case "paintworklet":
									case "serviceworker":
									case "sharedworker":
									case "worker":
									case "script":
										if (n.querySelector(wd(a))) return;
								}
								$u((r = n.createElement("link")), "link", e),
									Xe(r),
									n.head.appendChild(r);
							}
						}
					},
					X: function (e, t) {
						hd.X(e, t);
						var n = pd;
						if (n && e) {
							var r = Ge(n).hoistableScripts,
								i = bd(e),
								a = r.get(i);
							a ||
								((a = n.querySelector(wd(i))) ||
									((e = A({ src: e, async: !0 }, t)),
									(t = ud.get(i)) && Ed(e, t),
									Xe((a = n.createElement("script"))),
									$u(a, "link", e),
									n.head.appendChild(a)),
								(a = {
									type: "script",
									instance: a,
									count: 1,
									state: null,
								}),
								r.set(i, a));
						}
					},
					S: function (e, t, n) {
						hd.S(e, t, n);
						var r = pd;
						if (r && e) {
							var i = Ge(r).hoistableStyles,
								a = yd(e);
							t = t || "default";
							var o = i.get(a);
							if (!o) {
								var s = { loading: 0, preload: null };
								if ((o = r.querySelector(vd(a)))) s.loading = 5;
								else {
									(e = A(
										{
											rel: "stylesheet",
											href: e,
											"data-precedence": t,
										},
										n
									)),
										(n = ud.get(a)) && Cd(e, n);
									var l = (o = r.createElement("link"));
									Xe(l),
										$u(l, "link", e),
										(l._p = new Promise(function (e, t) {
											(l.onload = e), (l.onerror = t);
										})),
										l.addEventListener("load", function () {
											s.loading |= 1;
										}),
										l.addEventListener(
											"error",
											function () {
												s.loading |= 2;
											}
										),
										(s.loading |= 4),
										Sd(o, t, r);
								}
								(o = {
									type: "stylesheet",
									instance: o,
									count: 1,
									state: s,
								}),
									i.set(a, o);
							}
						}
					},
					M: function (e, t) {
						hd.M(e, t);
						var n = pd;
						if (n && e) {
							var r = Ge(n).hoistableScripts,
								i = bd(e),
								a = r.get(i);
							a ||
								((a = n.querySelector(wd(i))) ||
									((e = A(
										{ src: e, async: !0, type: "module" },
										t
									)),
									(t = ud.get(i)) && Ed(e, t),
									Xe((a = n.createElement("script"))),
									$u(a, "link", e),
									n.head.appendChild(a)),
								(a = {
									type: "script",
									instance: a,
									count: 1,
									state: null,
								}),
								r.set(i, a));
						}
					},
				};
				var pd = "undefined" === typeof document ? null : document;
				function md(e, t, n) {
					var r = pd;
					if (r && "string" === typeof t && t) {
						var i = mt(t);
						(i = 'link[rel="' + e + '"][href="' + i + '"]'),
							"string" === typeof n &&
								(i += '[crossorigin="' + n + '"]'),
							dd.has(i) ||
								(dd.add(i),
								(e = { rel: e, crossOrigin: n, href: t }),
								null === r.querySelector(i) &&
									($u(
										(t = r.createElement("link")),
										"link",
										e
									),
									Xe(t),
									r.head.appendChild(t)));
					}
				}
				function gd(e, t, n, r) {
					var i,
						a,
						s,
						l,
						c = (c = X.current) ? fd(c) : null;
					if (!c) throw Error(o(446));
					switch (e) {
						case "meta":
						case "title":
							return null;
						case "style":
							return "string" === typeof n.precedence &&
								"string" === typeof n.href
								? ((t = yd(n.href)),
								  (r = (n = Ge(c).hoistableStyles).get(t)) ||
										((r = {
											type: "style",
											instance: null,
											count: 0,
											state: null,
										}),
										n.set(t, r)),
								  r)
								: {
										type: "void",
										instance: null,
										count: 0,
										state: null,
								  };
						case "link":
							if (
								"stylesheet" === n.rel &&
								"string" === typeof n.href &&
								"string" === typeof n.precedence
							) {
								e = yd(n.href);
								var u = Ge(c).hoistableStyles,
									d = u.get(e);
								if (
									(d ||
										((c = c.ownerDocument || c),
										(d = {
											type: "stylesheet",
											instance: null,
											count: 0,
											state: {
												loading: 0,
												preload: null,
											},
										}),
										u.set(e, d),
										(u = c.querySelector(vd(e))) &&
											!u._p &&
											((d.instance = u),
											(d.state.loading = 5)),
										ud.has(e) ||
											((n = {
												rel: "preload",
												as: "style",
												href: n.href,
												crossOrigin: n.crossOrigin,
												integrity: n.integrity,
												media: n.media,
												hrefLang: n.hrefLang,
												referrerPolicy:
													n.referrerPolicy,
											}),
											ud.set(e, n),
											u ||
												((i = c),
												(a = e),
												(s = n),
												(l = d.state),
												i.querySelector(
													'link[rel="preload"][as="style"][' +
														a +
														"]"
												)
													? (l.loading = 1)
													: ((a =
															i.createElement(
																"link"
															)),
													  (l.preload = a),
													  a.addEventListener(
															"load",
															function () {
																return (l.loading |= 1);
															}
													  ),
													  a.addEventListener(
															"error",
															function () {
																return (l.loading |= 2);
															}
													  ),
													  $u(a, "link", s),
													  Xe(a),
													  i.head.appendChild(a))))),
									t && null === r)
								)
									throw Error(o(528, ""));
								return d;
							}
							if (t && null !== r) throw Error(o(529, ""));
							return null;
						case "script":
							return (
								(t = n.async),
								"string" === typeof (n = n.src) &&
								t &&
								"function" !== typeof t &&
								"symbol" !== typeof t
									? ((t = bd(n)),
									  (r = (n = Ge(c).hoistableScripts).get(
											t
									  )) ||
											((r = {
												type: "script",
												instance: null,
												count: 0,
												state: null,
											}),
											n.set(t, r)),
									  r)
									: {
											type: "void",
											instance: null,
											count: 0,
											state: null,
									  }
							);
						default:
							throw Error(o(444, e));
					}
				}
				function yd(e) {
					return 'href="' + mt(e) + '"';
				}
				function vd(e) {
					return 'link[rel="stylesheet"][' + e + "]";
				}
				function _d(e) {
					return A({}, e, {
						"data-precedence": e.precedence,
						precedence: null,
					});
				}
				function bd(e) {
					return '[src="' + mt(e) + '"]';
				}
				function wd(e) {
					return "script[async]" + e;
				}
				function kd(e, t, n) {
					if ((t.count++, null === t.instance))
						switch (t.type) {
							case "style":
								var r = e.querySelector(
									'style[data-href~="' + mt(n.href) + '"]'
								);
								if (r) return (t.instance = r), Xe(r), r;
								var i = A({}, n, {
									"data-href": n.href,
									"data-precedence": n.precedence,
									href: null,
									precedence: null,
								});
								return (
									Xe(
										(r = (
											e.ownerDocument || e
										).createElement("style"))
									),
									$u(r, "style", i),
									Sd(r, n.precedence, e),
									(t.instance = r)
								);
							case "stylesheet":
								i = yd(n.href);
								var a = e.querySelector(vd(i));
								if (a)
									return (
										(t.state.loading |= 4),
										(t.instance = a),
										Xe(a),
										a
									);
								(r = _d(n)),
									(i = ud.get(i)) && Cd(r, i),
									Xe(
										(a = (
											e.ownerDocument || e
										).createElement("link"))
									);
								var s = a;
								return (
									(s._p = new Promise(function (e, t) {
										(s.onload = e), (s.onerror = t);
									})),
									$u(a, "link", r),
									(t.state.loading |= 4),
									Sd(a, n.precedence, e),
									(t.instance = a)
								);
							case "script":
								return (
									(a = bd(n.src)),
									(i = e.querySelector(wd(a)))
										? ((t.instance = i), Xe(i), i)
										: ((r = n),
										  (i = ud.get(a)) &&
												Ed((r = A({}, n)), i),
										  Xe(
												(i = (e =
													e.ownerDocument ||
													e).createElement("script"))
										  ),
										  $u(i, "link", r),
										  e.head.appendChild(i),
										  (t.instance = i))
								);
							case "void":
								return null;
							default:
								throw Error(o(443, t.type));
						}
					else
						"stylesheet" === t.type &&
							0 === (4 & t.state.loading) &&
							((r = t.instance),
							(t.state.loading |= 4),
							Sd(r, n.precedence, e));
					return t.instance;
				}
				function Sd(e, t, n) {
					for (
						var r = n.querySelectorAll(
								'link[rel="stylesheet"][data-precedence],style[data-precedence]'
							),
							i = r.length ? r[r.length - 1] : null,
							a = i,
							o = 0;
						o < r.length;
						o++
					) {
						var s = r[o];
						if (s.dataset.precedence === t) a = s;
						else if (a !== i) break;
					}
					a
						? a.parentNode.insertBefore(e, a.nextSibling)
						: (t = 9 === n.nodeType ? n.head : n).insertBefore(
								e,
								t.firstChild
						  );
				}
				function Cd(e, t) {
					null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
						null == e.referrerPolicy &&
							(e.referrerPolicy = t.referrerPolicy),
						null == e.title && (e.title = t.title);
				}
				function Ed(e, t) {
					null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
						null == e.referrerPolicy &&
							(e.referrerPolicy = t.referrerPolicy),
						null == e.integrity && (e.integrity = t.integrity);
				}
				var xd = null;
				function Td(e, t, n) {
					if (null === xd) {
						var r = new Map(),
							i = (xd = new Map());
						i.set(n, r);
					} else
						(r = (i = xd).get(n)) || ((r = new Map()), i.set(n, r));
					if (r.has(e)) return r;
					for (
						r.set(e, null), n = n.getElementsByTagName(e), i = 0;
						i < n.length;
						i++
					) {
						var a = n[i];
						if (
							!(
								a[Ve] ||
								a[ze] ||
								("link" === e &&
									"stylesheet" === a.getAttribute("rel"))
							) &&
							"http://www.w3.org/2000/svg" !== a.namespaceURI
						) {
							var o = a.getAttribute(t) || "";
							o = e + o;
							var s = r.get(o);
							s ? s.push(a) : r.set(o, [a]);
						}
					}
					return r;
				}
				function Pd(e, t, n) {
					(e = e.ownerDocument || e).head.insertBefore(
						n,
						"title" === t ? e.querySelector("head > title") : null
					);
				}
				function Nd(e) {
					return (
						"stylesheet" !== e.type || 0 !== (3 & e.state.loading)
					);
				}
				var Id = null;
				function Ad() {}
				function Od() {
					if ((this.count--, 0 === this.count))
						if (this.stylesheets) Dd(this, this.stylesheets);
						else if (this.unsuspend) {
							var e = this.unsuspend;
							(this.unsuspend = null), e();
						}
				}
				var Rd = null;
				function Dd(e, t) {
					(e.stylesheets = null),
						null !== e.unsuspend &&
							(e.count++,
							(Rd = new Map()),
							t.forEach(Ld, e),
							(Rd = null),
							Od.call(e));
				}
				function Ld(e, t) {
					if (!(4 & t.state.loading)) {
						var n = Rd.get(e);
						if (n) var r = n.get(null);
						else {
							(n = new Map()), Rd.set(e, n);
							for (
								var i = e.querySelectorAll(
										"link[data-precedence],style[data-precedence]"
									),
									a = 0;
								a < i.length;
								a++
							) {
								var o = i[a];
								("LINK" !== o.nodeName &&
									"not all" === o.getAttribute("media")) ||
									(n.set(o.dataset.precedence, o), (r = o));
							}
							r && n.set(null, r);
						}
						(o = (i = t.instance).getAttribute("data-precedence")),
							(a = n.get(o) || r) === r && n.set(null, i),
							n.set(o, i),
							this.count++,
							(r = Od.bind(this)),
							i.addEventListener("load", r),
							i.addEventListener("error", r),
							a
								? a.parentNode.insertBefore(i, a.nextSibling)
								: (e =
										9 === e.nodeType
											? e.head
											: e).insertBefore(i, e.firstChild),
							(t.state.loading |= 4);
					}
				}
				var Md = {
					$$typeof: g,
					Provider: null,
					Consumer: null,
					_currentValue: B,
					_currentValue2: B,
					_threadCount: 0,
				};
				function Fd(e, t, n, r, i, a, o, s) {
					(this.tag = 1),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode =
							this.next =
							this.pendingContext =
							this.context =
							this.cancelPendingCommit =
								null),
						(this.callbackPriority = 0),
						(this.expirationTimes = Ae(-1)),
						(this.entangledLanes =
							this.shellSuspendCounter =
							this.errorRecoveryDisabledLanes =
							this.finishedLanes =
							this.expiredLanes =
							this.warmLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = Ae(0)),
						(this.hiddenUpdates = Ae(null)),
						(this.identifierPrefix = r),
						(this.onUncaughtError = i),
						(this.onCaughtError = a),
						(this.onRecoverableError = o),
						(this.pooledCache = null),
						(this.pooledCacheLanes = 0),
						(this.formState = s),
						(this.incompleteTransitions = new Map());
				}
				function zd(e, t, n, r, i, a, o, s, l, c, u, d) {
					return (
						(e = new Fd(e, t, n, o, s, l, c, d)),
						(t = 1),
						!0 === a && (t |= 24),
						(a = Ll(3, null, null, t)),
						(e.current = a),
						(a.stateNode = e),
						(t = qi()).refCount++,
						(e.pooledCache = t),
						t.refCount++,
						(a.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: t,
						}),
						Ns(a),
						e
					);
				}
				function jd(e) {
					return e ? (e = Or) : Or;
				}
				function qd(e, t, n, r, i, a) {
					(i = jd(i)),
						null === r.context
							? (r.context = i)
							: (r.pendingContext = i),
						((r = As(t)).payload = { element: n }),
						null !== (a = void 0 === a ? null : a) &&
							(r.callback = a),
						null !== (n = Os(e, r, t)) &&
							(Oc(n, 0, t), Rs(n, e, t));
				}
				function Ud(e, t) {
					if (
						null !== (e = e.memoizedState) &&
						null !== e.dehydrated
					) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Wd(e, t) {
					Ud(e, t), (e = e.alternate) && Ud(e, t);
				}
				function Bd(e) {
					if (13 === e.tag) {
						var t = Nr(e, 67108864);
						null !== t && Oc(t, 0, 67108864), Wd(e, 67108864);
					}
				}
				var Hd = !0;
				function Vd(e, t, n, r) {
					var i = I.T;
					I.T = null;
					var a = W.p;
					try {
						(W.p = 2), Qd(e, t, n, r);
					} finally {
						(W.p = a), (I.T = i);
					}
				}
				function $d(e, t, n, r) {
					var i = I.T;
					I.T = null;
					var a = W.p;
					try {
						(W.p = 8), Qd(e, t, n, r);
					} finally {
						(W.p = a), (I.T = i);
					}
				}
				function Qd(e, t, n, r) {
					if (Hd) {
						var i = Yd(r);
						if (null === i) Du(e, t, r, Kd, n), sf(e, r);
						else if (
							(function (e, t, n, r, i) {
								switch (t) {
									case "focusin":
										return (Zd = lf(Zd, e, t, n, r, i)), !0;
									case "dragenter":
										return (ef = lf(ef, e, t, n, r, i)), !0;
									case "mouseover":
										return (tf = lf(tf, e, t, n, r, i)), !0;
									case "pointerover":
										var a = i.pointerId;
										return (
											nf.set(
												a,
												lf(
													nf.get(a) || null,
													e,
													t,
													n,
													r,
													i
												)
											),
											!0
										);
									case "gotpointercapture":
										return (
											(a = i.pointerId),
											rf.set(
												a,
												lf(
													rf.get(a) || null,
													e,
													t,
													n,
													r,
													i
												)
											),
											!0
										);
								}
								return !1;
							})(i, e, t, n, r)
						)
							r.stopPropagation();
						else if ((sf(e, r), 4 & t && -1 < of.indexOf(e))) {
							for (; null !== i; ) {
								var a = Ye(i);
								if (null !== a)
									switch (a.tag) {
										case 3:
											if (
												(a = a.stateNode).current
													.memoizedState.isDehydrated
											) {
												var o = Ee(a.pendingLanes);
												if (0 !== o) {
													var s = a;
													for (
														s.pendingLanes |= 2,
															s.entangledLanes |= 2;
														o;

													) {
														var l =
															1 << (31 - be(o));
														(s.entanglements[1] |=
															l),
															(o &= ~l);
													}
													mu(a),
														0 === (6 & ec) &&
															((bc = le() + 500),
															gu(0, !1));
												}
											}
											break;
										case 13:
											null !== (s = Nr(a, 2)) &&
												Oc(s, 0, 2),
												zc(),
												Wd(a, 2);
									}
								if (
									(null === (a = Yd(r)) && Du(e, t, r, Kd, n),
									a === i)
								)
									break;
								i = a;
							}
							null !== i && r.stopPropagation();
						} else Du(e, t, r, null, n);
					}
				}
				function Yd(e) {
					return Gd((e = At(e)));
				}
				var Kd = null;
				function Gd(e) {
					if (((Kd = null), null !== (e = Qe(e)))) {
						var t = F(e);
						if (null === t) e = null;
						else {
							var n = t.tag;
							if (13 === n) {
								if (null !== (e = z(t))) return e;
								e = null;
							} else if (3 === n) {
								if (
									t.stateNode.current.memoizedState
										.isDehydrated
								)
									return 3 === t.tag
										? t.stateNode.containerInfo
										: null;
								e = null;
							} else t !== e && (e = null);
						}
					}
					return (Kd = e), null;
				}
				function Xd(e) {
					switch (e) {
						case "beforetoggle":
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "toggle":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 2;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 8;
						case "message":
							switch (ce()) {
								case ue:
									return 2;
								case de:
									return 8;
								case fe:
								case he:
									return 32;
								case pe:
									return 268435456;
								default:
									return 32;
							}
						default:
							return 32;
					}
				}
				var Jd = !1,
					Zd = null,
					ef = null,
					tf = null,
					nf = new Map(),
					rf = new Map(),
					af = [],
					of =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
							" "
						);
				function sf(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Zd = null;
							break;
						case "dragenter":
						case "dragleave":
							ef = null;
							break;
						case "mouseover":
						case "mouseout":
							tf = null;
							break;
						case "pointerover":
						case "pointerout":
							nf.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							rf.delete(t.pointerId);
					}
				}
				function lf(e, t, n, r, i, a) {
					return null === e || e.nativeEvent !== a
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: a,
								targetContainers: [i],
						  }),
						  null !== t && null !== (t = Ye(t)) && Bd(t),
						  e)
						: ((e.eventSystemFlags |= r),
						  (t = e.targetContainers),
						  null !== i && -1 === t.indexOf(i) && t.push(i),
						  e);
				}
				function cf(e) {
					var t = Qe(e.target);
					if (null !== t) {
						var n = F(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = z(n)))
									return (
										(e.blockedOn = t),
										void (function (e, t) {
											var n = W.p;
											try {
												return (W.p = e), t();
											} finally {
												W.p = n;
											}
										})(e.priority, function () {
											if (13 === n.tag) {
												var e = Ic(),
													t = Nr(n, e);
												null !== t && Oc(t, 0, e),
													Wd(n, e);
											}
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag
										? n.stateNode.containerInfo
										: null);
					}
					e.blockedOn = null;
				}
				function uf(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Yd(e.nativeEvent);
						if (null !== n)
							return (
								null !== (t = Ye(n)) && Bd(t),
								(e.blockedOn = n),
								!1
							);
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(It = r),
							n.target.dispatchEvent(r),
							(It = null),
							t.shift();
					}
					return !0;
				}
				function df(e, t, n) {
					uf(e) && n.delete(t);
				}
				function ff() {
					(Jd = !1),
						null !== Zd && uf(Zd) && (Zd = null),
						null !== ef && uf(ef) && (ef = null),
						null !== tf && uf(tf) && (tf = null),
						nf.forEach(df),
						rf.forEach(df);
				}
				function hf(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						Jd ||
							((Jd = !0),
							r.unstable_scheduleCallback(
								r.unstable_NormalPriority,
								ff
							)));
				}
				var pf = null;
				function mf(e) {
					pf !== e &&
						((pf = e),
						r.unstable_scheduleCallback(
							r.unstable_NormalPriority,
							function () {
								pf === e && (pf = null);
								for (var t = 0; t < e.length; t += 3) {
									var n = e[t],
										r = e[t + 1],
										i = e[t + 2];
									if ("function" !== typeof r) {
										if (null === Gd(r || n)) continue;
										break;
									}
									var a = Ye(n);
									null !== a &&
										(e.splice(t, 3),
										(t -= 3),
										uo(
											a,
											{
												pending: !0,
												data: i,
												method: n.method,
												action: r,
											},
											r,
											i
										));
								}
							}
						));
				}
				function gf(e) {
					function t(t) {
						return hf(t, e);
					}
					null !== Zd && hf(Zd, e),
						null !== ef && hf(ef, e),
						null !== tf && hf(tf, e),
						nf.forEach(t),
						rf.forEach(t);
					for (var n = 0; n < af.length; n++) {
						var r = af[n];
						r.blockedOn === e && (r.blockedOn = null);
					}
					for (; 0 < af.length && null === (n = af[0]).blockedOn; )
						cf(n), null === n.blockedOn && af.shift();
					if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
						for (r = 0; r < n.length; r += 3) {
							var i = n[r],
								a = n[r + 1],
								o = i[je] || null;
							if ("function" === typeof a) o || mf(n);
							else if (o) {
								var s = null;
								if (a && a.hasAttribute("formAction")) {
									if (((i = a), (o = a[je] || null)))
										s = o.formAction;
									else if (null !== Gd(i)) continue;
								} else s = o.action;
								"function" === typeof s
									? (n[r + 1] = s)
									: (n.splice(r, 3), (r -= 3)),
									mf(n);
							}
						}
				}
				function yf(e) {
					this._internalRoot = e;
				}
				function vf(e) {
					this._internalRoot = e;
				}
				(vf.prototype.render = yf.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(o(409));
						qd(t.current, Ic(), e, t, null, null);
					}),
					(vf.prototype.unmount = yf.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								0 === e.tag && tu(),
									qd(e.current, 2, null, e, null, null),
									zc(),
									(t[qe] = null);
							}
						}),
					(vf.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Me();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < af.length && 0 !== t && t < af[n].priority;
								n++
							);
							af.splice(n, 0, e), 0 === n && cf(e);
						}
					});
				var _f = i.version;
				if ("19.0.0" !== _f) throw Error(o(527, _f, "19.0.0"));
				W.findDOMNode = function (e) {
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" === typeof e.render) throw Error(o(188));
						throw (
							((e = Object.keys(e).join(",")), Error(o(268, e)))
						);
					}
					return (
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = F(e))) throw Error(o(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var i = n.return;
								if (null === i) break;
								var a = i.alternate;
								if (null === a) {
									if (null !== (r = i.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (i.child === a.child) {
									for (a = i.child; a; ) {
										if (a === n) return j(i), e;
										if (a === r) return j(i), t;
										a = a.sibling;
									}
									throw Error(o(188));
								}
								if (n.return !== r.return) (n = i), (r = a);
								else {
									for (var s = !1, l = i.child; l; ) {
										if (l === n) {
											(s = !0), (n = i), (r = a);
											break;
										}
										if (l === r) {
											(s = !0), (r = i), (n = a);
											break;
										}
										l = l.sibling;
									}
									if (!s) {
										for (l = a.child; l; ) {
											if (l === n) {
												(s = !0), (n = a), (r = i);
												break;
											}
											if (l === r) {
												(s = !0), (r = a), (n = i);
												break;
											}
											l = l.sibling;
										}
										if (!s) throw Error(o(189));
									}
								}
								if (n.alternate !== r) throw Error(o(190));
							}
							if (3 !== n.tag) throw Error(o(188));
							return n.stateNode.current === n ? e : t;
						})(t)),
						(e =
							null === (e = null !== e ? q(e) : null)
								? null
								: e.stateNode)
					);
				};
				var bf = {
					bundleType: 0,
					version: "19.0.0",
					rendererPackageName: "react-dom",
					currentDispatcherRef: I,
					findFiberByHostInstance: Qe,
					reconcilerVersion: "19.0.0",
				};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!wf.isDisabled && wf.supportsFiber)
						try {
							(ye = wf.inject(bf)), (ve = wf);
						} catch (Sf) {}
				}
				(t.createRoot = function (e, t) {
					if (!s(e)) throw Error(o(299));
					var n = !1,
						r = "",
						i = Lo,
						a = Mo,
						l = Fo;
					return (
						null !== t &&
							void 0 !== t &&
							(!0 === t.unstable_strictMode && (n = !0),
							void 0 !== t.identifierPrefix &&
								(r = t.identifierPrefix),
							void 0 !== t.onUncaughtError &&
								(i = t.onUncaughtError),
							void 0 !== t.onCaughtError && (a = t.onCaughtError),
							void 0 !== t.onRecoverableError &&
								(l = t.onRecoverableError),
							void 0 !== t.unstable_transitionCallbacks &&
								t.unstable_transitionCallbacks),
						(t = zd(e, 1, !1, null, 0, n, r, i, a, l, 0, null)),
						(e[qe] = t.current),
						Ou(8 === e.nodeType ? e.parentNode : e),
						new yf(t)
					);
				}),
					(t.hydrateRoot = function (e, t, n) {
						if (!s(e)) throw Error(o(299));
						var r = !1,
							i = "",
							a = Lo,
							l = Mo,
							c = Fo,
							u = null;
						return (
							null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (r = !0),
								void 0 !== n.identifierPrefix &&
									(i = n.identifierPrefix),
								void 0 !== n.onUncaughtError &&
									(a = n.onUncaughtError),
								void 0 !== n.onCaughtError &&
									(l = n.onCaughtError),
								void 0 !== n.onRecoverableError &&
									(c = n.onRecoverableError),
								void 0 !== n.unstable_transitionCallbacks &&
									n.unstable_transitionCallbacks,
								void 0 !== n.formState && (u = n.formState)),
							((t = zd(
								e,
								1,
								!0,
								t,
								0,
								r,
								i,
								a,
								l,
								c,
								0,
								u
							)).context = jd(null)),
							(n = t.current),
							((i = As((r = Ic()))).callback = null),
							Os(n, i, r),
							(t.current.lanes = r),
							Oe(t, r),
							mu(t),
							(e[qe] = t.current),
							Ou(e),
							new vf(t)
						);
					}),
					(t.version = "19.0.0");
			},
			43: (e, t, n) => {
				"use strict";
				e.exports = n(288);
			},
			173: (e, t, n) => {
				e.exports = n(497)();
			},
			218: (e) => {
				"use strict";
				e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
			},
			288: (e, t) => {
				"use strict";
				var n = Symbol.for("react.transitional.element"),
					r = Symbol.for("react.portal"),
					i = Symbol.for("react.fragment"),
					a = Symbol.for("react.strict_mode"),
					o = Symbol.for("react.profiler"),
					s = Symbol.for("react.consumer"),
					l = Symbol.for("react.context"),
					c = Symbol.for("react.forward_ref"),
					u = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					f = Symbol.for("react.lazy"),
					h = Symbol.iterator;
				var p = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					g = {};
				function y(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || p);
				}
				function v() {}
				function _(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || p);
				}
				(y.prototype.isReactComponent = {}),
					(y.prototype.setState = function (e, t) {
						if (
							"object" !== typeof e &&
							"function" !== typeof e &&
							null != e
						)
							throw Error(
								"takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(y.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(v.prototype = y.prototype);
				var b = (_.prototype = new v());
				(b.constructor = _),
					m(b, y.prototype),
					(b.isPureReactComponent = !0);
				var w = Array.isArray,
					k = { H: null, A: null, T: null, S: null },
					S = Object.prototype.hasOwnProperty;
				function C(e, t, r, i, a, o) {
					return (
						(r = o.ref),
						{
							$$typeof: n,
							type: e,
							key: t,
							ref: void 0 !== r ? r : null,
							props: o,
						}
					);
				}
				function E(e) {
					return (
						"object" === typeof e && null !== e && e.$$typeof === n
					);
				}
				var x = /\/+/g;
				function T(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function P() {}
				function N(e, t, i, a, o) {
					var s = typeof e;
					("undefined" !== s && "boolean" !== s) || (e = null);
					var l,
						c,
						u = !1;
					if (null === e) u = !0;
					else
						switch (s) {
							case "bigint":
							case "string":
							case "number":
								u = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										u = !0;
										break;
									case f:
										return N(
											(u = e._init)(e._payload),
											t,
											i,
											a,
											o
										);
								}
						}
					if (u)
						return (
							(o = o(e)),
							(u = "" === a ? "." + T(e, 0) : a),
							w(o)
								? ((i = ""),
								  null != u && (i = u.replace(x, "$&/") + "/"),
								  N(o, t, i, "", function (e) {
										return e;
								  }))
								: null != o &&
								  (E(o) &&
										((l = o),
										(c =
											i +
											(null == o.key ||
											(e && e.key === o.key)
												? ""
												: ("" + o.key).replace(
														x,
														"$&/"
												  ) + "/") +
											u),
										(o = C(
											l.type,
											c,
											void 0,
											0,
											0,
											l.props
										))),
								  t.push(o)),
							1
						);
					u = 0;
					var d,
						p = "" === a ? "." : a + ":";
					if (w(e))
						for (var m = 0; m < e.length; m++)
							u += N((a = e[m]), t, i, (s = p + T(a, m)), o);
					else if (
						"function" ===
						typeof (m =
							null === (d = e) || "object" !== typeof d
								? null
								: "function" ===
								  typeof (d = (h && d[h]) || d["@@iterator"])
								? d
								: null)
					)
						for (e = m.call(e), m = 0; !(a = e.next()).done; )
							u += N((a = a.value), t, i, (s = p + T(a, m++)), o);
					else if ("object" === s) {
						if ("function" === typeof e.then)
							return N(
								(function (e) {
									switch (e.status) {
										case "fulfilled":
											return e.value;
										case "rejected":
											throw e.reason;
										default:
											switch (
												("string" === typeof e.status
													? e.then(P, P)
													: ((e.status = "pending"),
													  e.then(
															function (t) {
																"pending" ===
																	e.status &&
																	((e.status =
																		"fulfilled"),
																	(e.value =
																		t));
															},
															function (t) {
																"pending" ===
																	e.status &&
																	((e.status =
																		"rejected"),
																	(e.reason =
																		t));
															}
													  )),
												e.status)
											) {
												case "fulfilled":
													return e.value;
												case "rejected":
													throw e.reason;
											}
									}
									throw e;
								})(e),
								t,
								i,
								a,
								o
							);
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" +
										  Object.keys(e).join(", ") +
										  "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					}
					return u;
				}
				function I(e, t, n) {
					if (null == e) return e;
					var r = [],
						i = 0;
					return (
						N(e, r, "", "", function (e) {
							return t.call(n, e, i++);
						}),
						r
					);
				}
				function A(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status &&
								((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var O =
					"function" === typeof reportError
						? reportError
						: function (e) {
								if (
									"object" === typeof window &&
									"function" === typeof window.ErrorEvent
								) {
									var t = new window.ErrorEvent("error", {
										bubbles: !0,
										cancelable: !0,
										message:
											"object" === typeof e &&
											null !== e &&
											"string" === typeof e.message
												? String(e.message)
												: String(e),
										error: e,
									});
									if (!window.dispatchEvent(t)) return;
								} else if (
									"object" === typeof process &&
									"function" === typeof process.emit
								)
									return void process.emit(
										"uncaughtException",
										e
									);
								console.error(e);
						  };
				function R() {}
				(t.Children = {
					map: I,
					forEach: function (e, t, n) {
						I(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							I(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							I(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!E(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(t.Component = y),
					(t.Fragment = i),
					(t.Profiler = o),
					(t.PureComponent = _),
					(t.StrictMode = a),
					(t.Suspense = u),
					(t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
						k),
					(t.act = function () {
						throw Error(
							"act(...) is not supported in production builds of React."
						);
					}),
					(t.cache = function (e) {
						return function () {
							return e.apply(null, arguments);
						};
					}),
					(t.cloneElement = function (e, t, n) {
						if (null === e || void 0 === e)
							throw Error(
								"The argument must be a React element, but you passed " +
									e +
									"."
							);
						var r = m({}, e.props),
							i = e.key;
						if (null != t)
							for (a in (void 0 !== t.ref && void 0,
							void 0 !== t.key && (i = "" + t.key),
							t))
								!S.call(t, a) ||
									"key" === a ||
									"__self" === a ||
									"__source" === a ||
									("ref" === a && void 0 === t.ref) ||
									(r[a] = t[a]);
						var a = arguments.length - 2;
						if (1 === a) r.children = n;
						else if (1 < a) {
							for (var o = Array(a), s = 0; s < a; s++)
								o[s] = arguments[s + 2];
							r.children = o;
						}
						return C(e.type, i, void 0, 0, 0, r);
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: l,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
							}).Provider = e),
							(e.Consumer = { $$typeof: s, _context: e }),
							e
						);
					}),
					(t.createElement = function (e, t, n) {
						var r,
							i = {},
							a = null;
						if (null != t)
							for (r in (void 0 !== t.key && (a = "" + t.key), t))
								S.call(t, r) &&
									"key" !== r &&
									"__self" !== r &&
									"__source" !== r &&
									(i[r] = t[r]);
						var o = arguments.length - 2;
						if (1 === o) i.children = n;
						else if (1 < o) {
							for (var s = Array(o), l = 0; l < o; l++)
								s[l] = arguments[l + 2];
							i.children = s;
						}
						if (e && e.defaultProps)
							for (r in (o = e.defaultProps))
								void 0 === i[r] && (i[r] = o[r]);
						return C(e, a, void 0, 0, 0, i);
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: c, render: e };
					}),
					(t.isValidElement = E),
					(t.lazy = function (e) {
						return {
							$$typeof: f,
							_payload: { _status: -1, _result: e },
							_init: A,
						};
					}),
					(t.memo = function (e, t) {
						return {
							$$typeof: d,
							type: e,
							compare: void 0 === t ? null : t,
						};
					}),
					(t.startTransition = function (e) {
						var t = k.T,
							n = {};
						k.T = n;
						try {
							var r = e(),
								i = k.S;
							null !== i && i(n, r),
								"object" === typeof r &&
									null !== r &&
									"function" === typeof r.then &&
									r.then(R, O);
						} catch (a) {
							O(a);
						} finally {
							k.T = t;
						}
					}),
					(t.unstable_useCacheRefresh = function () {
						return k.H.useCacheRefresh();
					}),
					(t.use = function (e) {
						return k.H.use(e);
					}),
					(t.useActionState = function (e, t, n) {
						return k.H.useActionState(e, t, n);
					}),
					(t.useCallback = function (e, t) {
						return k.H.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return k.H.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e, t) {
						return k.H.useDeferredValue(e, t);
					}),
					(t.useEffect = function (e, t) {
						return k.H.useEffect(e, t);
					}),
					(t.useId = function () {
						return k.H.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return k.H.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return k.H.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return k.H.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return k.H.useMemo(e, t);
					}),
					(t.useOptimistic = function (e, t) {
						return k.H.useOptimistic(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return k.H.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return k.H.useRef(e);
					}),
					(t.useState = function (e) {
						return k.H.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return k.H.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return k.H.useTransition();
					}),
					(t.version = "19.0.0");
			},
			391: (e, t, n) => {
				"use strict";
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" ===
							typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(4));
			},
			497: (e, t, n) => {
				"use strict";
				var r = n(218);
				function i() {}
				function a() {}
				(a.resetWarningCache = i),
					(e.exports = function () {
						function e(e, t, n, i, a, o) {
							if (o !== r) {
								var s = new Error(
									"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
								);
								throw ((s.name = "Invariant Violation"), s);
							}
						}
						function t() {
							return e;
						}
						e.isRequired = e;
						var n = {
							array: e,
							bigint: e,
							bool: e,
							func: e,
							number: e,
							object: e,
							string: e,
							symbol: e,
							any: e,
							arrayOf: t,
							element: e,
							elementType: e,
							instanceOf: t,
							node: e,
							objectOf: t,
							oneOf: t,
							oneOfType: t,
							shape: t,
							exact: t,
							checkPropTypes: a,
							resetWarningCache: i,
						};
						return (n.PropTypes = n), n;
					});
			},
			579: (e, t, n) => {
				"use strict";
				e.exports = n(799);
			},
			672: (e, t, n) => {
				"use strict";
				var r = n(43);
				function i(e) {
					var t = "https://react.dev/errors/" + e;
					if (1 < arguments.length) {
						t += "?args[]=" + encodeURIComponent(arguments[1]);
						for (var n = 2; n < arguments.length; n++)
							t += "&args[]=" + encodeURIComponent(arguments[n]);
					}
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				function a() {}
				var o = {
						d: {
							f: a,
							r: function () {
								throw Error(i(522));
							},
							D: a,
							C: a,
							L: a,
							m: a,
							X: a,
							S: a,
							M: a,
						},
						p: 0,
						findDOMNode: null,
					},
					s = Symbol.for("react.portal");
				var l =
					r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
				function c(e, t) {
					return "font" === e
						? ""
						: "string" === typeof t
						? "use-credentials" === t
							? t
							: ""
						: void 0;
				}
				(t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
					o),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (
							!t ||
							(1 !== t.nodeType &&
								9 !== t.nodeType &&
								11 !== t.nodeType)
						)
							throw Error(i(299));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: s,
								key: null == r ? null : "" + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.flushSync = function (e) {
						var t = l.T,
							n = o.p;
						try {
							if (((l.T = null), (o.p = 2), e)) return e();
						} finally {
							(l.T = t), (o.p = n), o.d.f();
						}
					}),
					(t.preconnect = function (e, t) {
						"string" === typeof e &&
							(t
								? (t =
										"string" === typeof (t = t.crossOrigin)
											? "use-credentials" === t
												? t
												: ""
											: void 0)
								: (t = null),
							o.d.C(e, t));
					}),
					(t.prefetchDNS = function (e) {
						"string" === typeof e && o.d.D(e);
					}),
					(t.preinit = function (e, t) {
						if (
							"string" === typeof e &&
							t &&
							"string" === typeof t.as
						) {
							var n = t.as,
								r = c(n, t.crossOrigin),
								i =
									"string" === typeof t.integrity
										? t.integrity
										: void 0,
								a =
									"string" === typeof t.fetchPriority
										? t.fetchPriority
										: void 0;
							"style" === n
								? o.d.S(
										e,
										"string" === typeof t.precedence
											? t.precedence
											: void 0,
										{
											crossOrigin: r,
											integrity: i,
											fetchPriority: a,
										}
								  )
								: "script" === n &&
								  o.d.X(e, {
										crossOrigin: r,
										integrity: i,
										fetchPriority: a,
										nonce:
											"string" === typeof t.nonce
												? t.nonce
												: void 0,
								  });
						}
					}),
					(t.preinitModule = function (e, t) {
						if ("string" === typeof e)
							if ("object" === typeof t && null !== t) {
								if (null == t.as || "script" === t.as) {
									var n = c(t.as, t.crossOrigin);
									o.d.M(e, {
										crossOrigin: n,
										integrity:
											"string" === typeof t.integrity
												? t.integrity
												: void 0,
										nonce:
											"string" === typeof t.nonce
												? t.nonce
												: void 0,
									});
								}
							} else null == t && o.d.M(e);
					}),
					(t.preload = function (e, t) {
						if (
							"string" === typeof e &&
							"object" === typeof t &&
							null !== t &&
							"string" === typeof t.as
						) {
							var n = t.as,
								r = c(n, t.crossOrigin);
							o.d.L(e, n, {
								crossOrigin: r,
								integrity:
									"string" === typeof t.integrity
										? t.integrity
										: void 0,
								nonce:
									"string" === typeof t.nonce
										? t.nonce
										: void 0,
								type:
									"string" === typeof t.type
										? t.type
										: void 0,
								fetchPriority:
									"string" === typeof t.fetchPriority
										? t.fetchPriority
										: void 0,
								referrerPolicy:
									"string" === typeof t.referrerPolicy
										? t.referrerPolicy
										: void 0,
								imageSrcSet:
									"string" === typeof t.imageSrcSet
										? t.imageSrcSet
										: void 0,
								imageSizes:
									"string" === typeof t.imageSizes
										? t.imageSizes
										: void 0,
								media:
									"string" === typeof t.media
										? t.media
										: void 0,
							});
						}
					}),
					(t.preloadModule = function (e, t) {
						if ("string" === typeof e)
							if (t) {
								var n = c(t.as, t.crossOrigin);
								o.d.m(e, {
									as:
										"string" === typeof t.as &&
										"script" !== t.as
											? t.as
											: void 0,
									crossOrigin: n,
									integrity:
										"string" === typeof t.integrity
											? t.integrity
											: void 0,
								});
							} else o.d.m(e);
					}),
					(t.requestFormReset = function (e) {
						o.d.r(e);
					}),
					(t.unstable_batchedUpdates = function (e, t) {
						return e(t);
					}),
					(t.useFormState = function (e, t, n) {
						return l.H.useFormState(e, t, n);
					}),
					(t.useFormStatus = function () {
						return l.H.useHostTransitionStatus();
					}),
					(t.version = "19.0.0");
			},
			799: (e, t) => {
				"use strict";
				var n = Symbol.for("react.transitional.element"),
					r = Symbol.for("react.fragment");
				function i(e, t, r) {
					var i = null;
					if (
						(void 0 !== r && (i = "" + r),
						void 0 !== t.key && (i = "" + t.key),
						"key" in t)
					)
						for (var a in ((r = {}), t))
							"key" !== a && (r[a] = t[a]);
					else r = t;
					return (
						(t = r.ref),
						{
							$$typeof: n,
							type: e,
							key: i,
							ref: void 0 !== t ? t : null,
							props: r,
						}
					);
				}
				(t.Fragment = r), (t.jsx = i), (t.jsxs = i);
			},
			853: (e, t, n) => {
				"use strict";
				e.exports = n(896);
			},
			896: (e, t) => {
				"use strict";
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							i = e[r];
						if (!(0 < a(i, t))) break e;
						(e[r] = t), (e[n] = i), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function i(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
							var s = 2 * (r + 1) - 1,
								l = e[s],
								c = s + 1,
								u = e[c];
							if (0 > a(l, n))
								c < i && 0 > a(u, l)
									? ((e[r] = u), (e[c] = n), (r = c))
									: ((e[r] = l), (e[s] = n), (r = s));
							else {
								if (!(c < i && 0 > a(u, n))) break e;
								(e[r] = u), (e[c] = n), (r = c);
							}
						}
					}
					return t;
				}
				function a(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					((t.unstable_now = void 0),
					"object" === typeof performance &&
						"function" === typeof performance.now)
				) {
					var o = performance;
					t.unstable_now = function () {
						return o.now();
					};
				} else {
					var s = Date,
						l = s.now();
					t.unstable_now = function () {
						return s.now() - l;
					};
				}
				var c = [],
					u = [],
					d = 1,
					f = null,
					h = 3,
					p = !1,
					m = !1,
					g = !1,
					y = "function" === typeof setTimeout ? setTimeout : null,
					v =
						"function" === typeof clearTimeout
							? clearTimeout
							: null,
					_ =
						"undefined" !== typeof setImmediate
							? setImmediate
							: null;
				function b(e) {
					for (var t = r(u); null !== t; ) {
						if (null === t.callback) i(u);
						else {
							if (!(t.startTime <= e)) break;
							i(u), (t.sortIndex = t.expirationTime), n(c, t);
						}
						t = r(u);
					}
				}
				function w(e) {
					if (((g = !1), b(e), !m))
						if (null !== r(c)) (m = !0), A();
						else {
							var t = r(u);
							null !== t && O(w, t.startTime - e);
						}
				}
				var k,
					S = !1,
					C = -1,
					E = 5,
					x = -1;
				function T() {
					return !(t.unstable_now() - x < E);
				}
				function P() {
					if (S) {
						var e = t.unstable_now();
						x = e;
						var n = !0;
						try {
							e: {
								(m = !1),
									g && ((g = !1), v(C), (C = -1)),
									(p = !0);
								var a = h;
								try {
									t: {
										for (
											b(e), f = r(c);
											null !== f &&
											!(f.expirationTime > e && T());

										) {
											var o = f.callback;
											if ("function" === typeof o) {
												(f.callback = null),
													(h = f.priorityLevel);
												var s = o(
													f.expirationTime <= e
												);
												if (
													((e = t.unstable_now()),
													"function" === typeof s)
												) {
													(f.callback = s),
														b(e),
														(n = !0);
													break t;
												}
												f === r(c) && i(c), b(e);
											} else i(c);
											f = r(c);
										}
										if (null !== f) n = !0;
										else {
											var l = r(u);
											null !== l && O(w, l.startTime - e),
												(n = !1);
										}
									}
									break e;
								} finally {
									(f = null), (h = a), (p = !1);
								}
								n = void 0;
							}
						} finally {
							n ? k() : (S = !1);
						}
					}
				}
				if ("function" === typeof _)
					k = function () {
						_(P);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var N = new MessageChannel(),
						I = N.port2;
					(N.port1.onmessage = P),
						(k = function () {
							I.postMessage(null);
						});
				} else
					k = function () {
						y(P, 0);
					};
				function A() {
					S || ((S = !0), k());
				}
				function O(e, n) {
					C = y(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						m || p || ((m = !0), A());
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (E = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return h;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(c);
					}),
					(t.unstable_next = function (e) {
						switch (h) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = h;
						}
						var n = h;
						h = t;
						try {
							return e();
						} finally {
							h = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = h;
						h = e;
						try {
							return t();
						} finally {
							h = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, i, a) {
						var o = t.unstable_now();
						switch (
							("object" === typeof a && null !== a
								? (a =
										"number" === typeof (a = a.delay) &&
										0 < a
											? o + a
											: o)
								: (a = o),
							e)
						) {
							case 1:
								var s = -1;
								break;
							case 2:
								s = 250;
								break;
							case 5:
								s = 1073741823;
								break;
							case 4:
								s = 1e4;
								break;
							default:
								s = 5e3;
						}
						return (
							(e = {
								id: d++,
								callback: i,
								priorityLevel: e,
								startTime: a,
								expirationTime: (s = a + s),
								sortIndex: -1,
							}),
							a > o
								? ((e.sortIndex = a),
								  n(u, e),
								  null === r(c) &&
										e === r(u) &&
										(g ? (v(C), (C = -1)) : (g = !0),
										O(w, a - o)))
								: ((e.sortIndex = s),
								  n(c, e),
								  m || p || ((m = !0), A())),
							e
						);
					}),
					(t.unstable_shouldYield = T),
					(t.unstable_wrapCallback = function (e) {
						var t = h;
						return function () {
							var n = h;
							h = t;
							try {
								return e.apply(this, arguments);
							} finally {
								h = n;
							}
						};
					});
			},
			950: (e, t, n) => {
				"use strict";
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" ===
							typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(672));
			},
		},
		t = {};
	function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var a = (t[r] = { exports: {} });
		return e[r](a, a.exports, n), a.exports;
	}
	(n.n = (e) => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, { a: t }), t;
	}),
		(n.d = (e, t) => {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.g = (function () {
			if ("object" === typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (e) {
				if ("object" === typeof window) return window;
			}
		})()),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(n.r = (e) => {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.p = "/kaps/"),
		(() => {
			"use strict";
			var e = {};
			n.r(e),
				n.d(e, {
					FirebaseError: () => yr,
					SDK_VERSION: () => aa,
					_DEFAULT_ENTRY_NAME: () => Wi,
					_addComponent: () => Qi,
					_addOrOverwriteComponent: () => Yi,
					_apps: () => Hi,
					_clearComponents: () => ea,
					_components: () => $i,
					_getProvider: () => Gi,
					_isFirebaseApp: () => Ji,
					_isFirebaseServerApp: () => Zi,
					_registerComponent: () => Ki,
					_removeServiceInstance: () => Xi,
					_serverApps: () => Vi,
					deleteApp: () => ua,
					getApp: () => la,
					getApps: () => ca,
					initializeApp: () => oa,
					initializeServerApp: () => sa,
					onLog: () => fa,
					registerVersion: () => da,
					setLogLevel: () => ha,
				});
			var t = n(43),
				r = n(391);
			const i = {
					prefix: "fas",
					iconName: "bars",
					icon: [
						448,
						512,
						["navicon"],
						"f0c9",
						"M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
					],
				},
				a = {
					prefix: "fas",
					iconName: "volume-high",
					icon: [
						640,
						512,
						[128266, "volume-up"],
						"f028",
						"M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z",
					],
				},
				o = a,
				s = {
					prefix: "fas",
					iconName: "volume-xmark",
					icon: [
						576,
						512,
						["volume-mute", "volume-times"],
						"f6a9",
						"M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
					],
				},
				l = s;
			function c(e, t, n) {
				return (
					(t = (function (e) {
						var t = (function (e, t) {
							if ("object" != typeof e || !e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" != typeof r) return r;
								throw new TypeError(
									"@@toPrimitive must return a primitive value."
								);
							}
							return ("string" === t ? String : Number)(e);
						})(e, "string");
						return "symbol" == typeof t ? t : t + "";
					})(t)) in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function u(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? u(Object(n), !0).forEach(function (t) {
								c(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(n)
						  )
						: u(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			const f = () => {};
			let h = {},
				p = {},
				m = null,
				g = { mark: f, measure: f };
			try {
				"undefined" !== typeof window && (h = window),
					"undefined" !== typeof document && (p = document),
					"undefined" !== typeof MutationObserver &&
						(m = MutationObserver),
					"undefined" !== typeof performance && (g = performance);
			} catch (pf) {}
			const { userAgent: y = "" } = h.navigator || {},
				v = h,
				_ = p,
				b = m,
				w = g,
				k =
					(v.document,
					!!_.documentElement &&
						!!_.head &&
						"function" === typeof _.addEventListener &&
						"function" === typeof _.createElement),
				S = ~y.indexOf("MSIE") || ~y.indexOf("Trident/");
			var C = {
					classic: {
						fa: "solid",
						fas: "solid",
						"fa-solid": "solid",
						far: "regular",
						"fa-regular": "regular",
						fal: "light",
						"fa-light": "light",
						fat: "thin",
						"fa-thin": "thin",
						fab: "brands",
						"fa-brands": "brands",
					},
					duotone: {
						fa: "solid",
						fad: "solid",
						"fa-solid": "solid",
						"fa-duotone": "solid",
						fadr: "regular",
						"fa-regular": "regular",
						fadl: "light",
						"fa-light": "light",
						fadt: "thin",
						"fa-thin": "thin",
					},
					sharp: {
						fa: "solid",
						fass: "solid",
						"fa-solid": "solid",
						fasr: "regular",
						"fa-regular": "regular",
						fasl: "light",
						"fa-light": "light",
						fast: "thin",
						"fa-thin": "thin",
					},
					"sharp-duotone": {
						fa: "solid",
						fasds: "solid",
						"fa-solid": "solid",
						fasdr: "regular",
						"fa-regular": "regular",
						fasdl: "light",
						"fa-light": "light",
						fasdt: "thin",
						"fa-thin": "thin",
					},
				},
				E = [
					"fa-classic",
					"fa-duotone",
					"fa-sharp",
					"fa-sharp-duotone",
				],
				x = "classic",
				T = "duotone",
				P = [x, T, "sharp", "sharp-duotone"],
				N = new Map([
					[
						"classic",
						{
							defaultShortPrefixId: "fas",
							defaultStyleId: "solid",
							styleIds: [
								"solid",
								"regular",
								"light",
								"thin",
								"brands",
							],
							futureStyleIds: [],
							defaultFontWeight: 900,
						},
					],
					[
						"sharp",
						{
							defaultShortPrefixId: "fass",
							defaultStyleId: "solid",
							styleIds: ["solid", "regular", "light", "thin"],
							futureStyleIds: [],
							defaultFontWeight: 900,
						},
					],
					[
						"duotone",
						{
							defaultShortPrefixId: "fad",
							defaultStyleId: "solid",
							styleIds: ["solid", "regular", "light", "thin"],
							futureStyleIds: [],
							defaultFontWeight: 900,
						},
					],
					[
						"sharp-duotone",
						{
							defaultShortPrefixId: "fasds",
							defaultStyleId: "solid",
							styleIds: ["solid", "regular", "light", "thin"],
							futureStyleIds: [],
							defaultFontWeight: 900,
						},
					],
				]),
				I = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
				A = { fak: "kit", "fa-kit": "kit" },
				O = { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
				R = ["fak", "fakd"],
				D = { kit: "fak" },
				L = { "kit-duotone": "fakd" },
				M = {
					GROUP: "duotone-group",
					SWAP_OPACITY: "swap-opacity",
					PRIMARY: "primary",
					SECONDARY: "secondary",
				},
				F = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
				z = {
					classic: {
						fab: "fa-brands",
						fad: "fa-duotone",
						fal: "fa-light",
						far: "fa-regular",
						fas: "fa-solid",
						fat: "fa-thin",
					},
					duotone: {
						fadr: "fa-regular",
						fadl: "fa-light",
						fadt: "fa-thin",
					},
					sharp: {
						fass: "fa-solid",
						fasr: "fa-regular",
						fasl: "fa-light",
						fast: "fa-thin",
					},
					"sharp-duotone": {
						fasds: "fa-solid",
						fasdr: "fa-regular",
						fasdl: "fa-light",
						fasdt: "fa-thin",
					},
				},
				j = [
					"fa",
					"fas",
					"far",
					"fal",
					"fat",
					"fad",
					"fadr",
					"fadl",
					"fadt",
					"fab",
					"fass",
					"fasr",
					"fasl",
					"fast",
					"fasds",
					"fasdr",
					"fasdl",
					"fasdt",
					"fa-classic",
					"fa-duotone",
					"fa-sharp",
					"fa-sharp-duotone",
					"fa-solid",
					"fa-regular",
					"fa-light",
					"fa-thin",
					"fa-duotone",
					"fa-brands",
				],
				q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				U = q.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
				W = [
					...Object.keys({
						classic: ["fas", "far", "fal", "fat", "fad"],
						duotone: ["fadr", "fadl", "fadt"],
						sharp: ["fass", "fasr", "fasl", "fast"],
						"sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
					}),
					"solid",
					"regular",
					"light",
					"thin",
					"duotone",
					"brands",
					"2xs",
					"xs",
					"sm",
					"lg",
					"xl",
					"2xl",
					"beat",
					"border",
					"fade",
					"beat-fade",
					"bounce",
					"flip-both",
					"flip-horizontal",
					"flip-vertical",
					"flip",
					"fw",
					"inverse",
					"layers-counter",
					"layers-text",
					"layers",
					"li",
					"pull-left",
					"pull-right",
					"pulse",
					"rotate-180",
					"rotate-270",
					"rotate-90",
					"rotate-by",
					"shake",
					"spin-pulse",
					"spin-reverse",
					"spin",
					"stack-1x",
					"stack-2x",
					"stack",
					"ul",
					M.GROUP,
					M.SWAP_OPACITY,
					M.PRIMARY,
					M.SECONDARY,
				]
					.concat(q.map((e) => "".concat(e, "x")))
					.concat(U.map((e) => "w-".concat(e)));
			const B = "___FONT_AWESOME___",
				H = 16,
				V = "svg-inline--fa",
				$ = "data-fa-i2svg",
				Q = "data-fa-pseudo-element",
				Y = "data-prefix",
				K = "data-icon",
				G = "fontawesome-i2svg",
				X = ["HTML", "HEAD", "STYLE", "SCRIPT"],
				J = (() => {
					try {
						return !0;
					} catch (e) {
						return !1;
					}
				})();
			function Z(e) {
				return new Proxy(e, { get: (e, t) => (t in e ? e[t] : e[x]) });
			}
			const ee = d({}, C);
			ee[x] = d(d(d(d({}, { "fa-duotone": "duotone" }), C[x]), A), O);
			const te = Z(ee),
				ne = d(
					{},
					{
						classic: {
							solid: "fas",
							regular: "far",
							light: "fal",
							thin: "fat",
							brands: "fab",
						},
						duotone: {
							solid: "fad",
							regular: "fadr",
							light: "fadl",
							thin: "fadt",
						},
						sharp: {
							solid: "fass",
							regular: "fasr",
							light: "fasl",
							thin: "fast",
						},
						"sharp-duotone": {
							solid: "fasds",
							regular: "fasdr",
							light: "fasdl",
							thin: "fasdt",
						},
					}
				);
			ne[x] = d(d(d(d({}, { duotone: "fad" }), ne[x]), D), L);
			const re = Z(ne),
				ie = d({}, z);
			ie[x] = d(d({}, ie[x]), { fak: "fa-kit" });
			const ae = Z(ie),
				oe = d(
					{},
					{
						classic: {
							"fa-brands": "fab",
							"fa-duotone": "fad",
							"fa-light": "fal",
							"fa-regular": "far",
							"fa-solid": "fas",
							"fa-thin": "fat",
						},
						duotone: {
							"fa-regular": "fadr",
							"fa-light": "fadl",
							"fa-thin": "fadt",
						},
						sharp: {
							"fa-solid": "fass",
							"fa-regular": "fasr",
							"fa-light": "fasl",
							"fa-thin": "fast",
						},
						"sharp-duotone": {
							"fa-solid": "fasds",
							"fa-regular": "fasdr",
							"fa-light": "fasdl",
							"fa-thin": "fasdt",
						},
					}
				);
			oe[x] = d(d({}, oe[x]), { "fa-kit": "fak" });
			Z(oe);
			const se =
					/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
				le = "fa-layers-text",
				ce =
					/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
				ue =
					(Z(
						d(
							{},
							{
								classic: {
									900: "fas",
									400: "far",
									normal: "far",
									300: "fal",
									100: "fat",
								},
								duotone: {
									900: "fad",
									400: "fadr",
									300: "fadl",
									100: "fadt",
								},
								sharp: {
									900: "fass",
									400: "fasr",
									300: "fasl",
									100: "fast",
								},
								"sharp-duotone": {
									900: "fasds",
									400: "fasdr",
									300: "fasdl",
									100: "fasdt",
								},
							}
						)
					),
					[
						"class",
						"data-prefix",
						"data-icon",
						"data-fa-transform",
						"data-fa-mask",
					]),
				de = {
					GROUP: "duotone-group",
					SWAP_OPACITY: "swap-opacity",
					PRIMARY: "primary",
					SECONDARY: "secondary",
				},
				fe = ["kit", ...W],
				he = v.FontAwesomeConfig || {};
			if (_ && "function" === typeof _.querySelector) {
				[
					["data-family-prefix", "familyPrefix"],
					["data-css-prefix", "cssPrefix"],
					["data-family-default", "familyDefault"],
					["data-style-default", "styleDefault"],
					["data-replacement-class", "replacementClass"],
					["data-auto-replace-svg", "autoReplaceSvg"],
					["data-auto-add-css", "autoAddCss"],
					["data-auto-a11y", "autoA11y"],
					["data-search-pseudo-elements", "searchPseudoElements"],
					["data-observe-mutations", "observeMutations"],
					["data-mutate-approach", "mutateApproach"],
					["data-keep-original-source", "keepOriginalSource"],
					["data-measure-performance", "measurePerformance"],
					["data-show-missing-icons", "showMissingIcons"],
				].forEach((e) => {
					let [t, n] = e;
					const r = (function (e) {
						return (
							"" === e || ("false" !== e && ("true" === e || e))
						);
					})(
						(function (e) {
							var t = _.querySelector("script[" + e + "]");
							if (t) return t.getAttribute(e);
						})(t)
					);
					void 0 !== r && null !== r && (he[n] = r);
				});
			}
			const pe = {
				styleDefault: "solid",
				familyDefault: x,
				cssPrefix: "fa",
				replacementClass: V,
				autoReplaceSvg: !0,
				autoAddCss: !0,
				autoA11y: !0,
				searchPseudoElements: !1,
				observeMutations: !0,
				mutateApproach: "async",
				keepOriginalSource: !0,
				measurePerformance: !1,
				showMissingIcons: !0,
			};
			he.familyPrefix && (he.cssPrefix = he.familyPrefix);
			const me = d(d({}, pe), he);
			me.autoReplaceSvg || (me.observeMutations = !1);
			const ge = {};
			Object.keys(pe).forEach((e) => {
				Object.defineProperty(ge, e, {
					enumerable: !0,
					set: function (t) {
						(me[e] = t), ye.forEach((e) => e(ge));
					},
					get: function () {
						return me[e];
					},
				});
			}),
				Object.defineProperty(ge, "familyPrefix", {
					enumerable: !0,
					set: function (e) {
						(me.cssPrefix = e), ye.forEach((e) => e(ge));
					},
					get: function () {
						return me.cssPrefix;
					},
				}),
				(v.FontAwesomeConfig = ge);
			const ye = [];
			const ve = H,
				_e = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
			function be() {
				let e = 12,
					t = "";
				for (; e-- > 0; )
					t +=
						"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
							(62 * Math.random()) | 0
						];
				return t;
			}
			function we(e) {
				const t = [];
				for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
				return t;
			}
			function ke(e) {
				return e.classList
					? we(e.classList)
					: (e.getAttribute("class") || "")
							.split(" ")
							.filter((e) => e);
			}
			function Se(e) {
				return ""
					.concat(e)
					.replace(/&/g, "&amp;")
					.replace(/"/g, "&quot;")
					.replace(/'/g, "&#39;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;");
			}
			function Ce(e) {
				return Object.keys(e || {}).reduce(
					(t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
					""
				);
			}
			function Ee(e) {
				return (
					e.size !== _e.size ||
					e.x !== _e.x ||
					e.y !== _e.y ||
					e.rotate !== _e.rotate ||
					e.flipX ||
					e.flipY
				);
			}
			function xe() {
				const e = "fa",
					t = V,
					n = ge.cssPrefix,
					r = ge.replacementClass;
				let i =
					':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';
				if (n !== e || r !== t) {
					const a = new RegExp("\\.".concat(e, "\\-"), "g"),
						o = new RegExp("\\--".concat(e, "\\-"), "g"),
						s = new RegExp("\\.".concat(t), "g");
					i = i
						.replace(a, ".".concat(n, "-"))
						.replace(o, "--".concat(n, "-"))
						.replace(s, ".".concat(r));
				}
				return i;
			}
			let Te = !1;
			function Pe() {
				ge.autoAddCss &&
					!Te &&
					(!(function (e) {
						if (!e || !k) return;
						const t = _.createElement("style");
						t.setAttribute("type", "text/css"), (t.innerHTML = e);
						const n = _.head.childNodes;
						let r = null;
						for (let i = n.length - 1; i > -1; i--) {
							const e = n[i],
								t = (e.tagName || "").toUpperCase();
							["STYLE", "LINK"].indexOf(t) > -1 && (r = e);
						}
						_.head.insertBefore(t, r);
					})(xe()),
					(Te = !0));
			}
			var Ne = {
				mixout: () => ({ dom: { css: xe, insertCss: Pe } }),
				hooks: () => ({
					beforeDOMElementCreation() {
						Pe();
					},
					beforeI2svg() {
						Pe();
					},
				}),
			};
			const Ie = v || {};
			Ie[B] || (Ie[B] = {}),
				Ie[B].styles || (Ie[B].styles = {}),
				Ie[B].hooks || (Ie[B].hooks = {}),
				Ie[B].shims || (Ie[B].shims = []);
			var Ae = Ie[B];
			const Oe = [],
				Re = function () {
					_.removeEventListener("DOMContentLoaded", Re),
						(De = 1),
						Oe.map((e) => e());
				};
			let De = !1;
			function Le(e) {
				const { tag: t, attributes: n = {}, children: r = [] } = e;
				return "string" === typeof e
					? Se(e)
					: "<"
							.concat(t, " ")
							.concat(
								(function (e) {
									return Object.keys(e || {})
										.reduce(
											(t, n) =>
												t +
												""
													.concat(n, '="')
													.concat(Se(e[n]), '" '),
											""
										)
										.trim();
								})(n),
								">"
							)
							.concat(r.map(Le).join(""), "</")
							.concat(t, ">");
			}
			function Me(e, t, n) {
				if (e && e[t] && e[t][n])
					return { prefix: t, iconName: n, icon: e[t][n] };
			}
			k &&
				((De = (
					_.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
				).test(_.readyState)),
				De || _.addEventListener("DOMContentLoaded", Re));
			var Fe = function (e, t, n, r) {
				var i,
					a,
					o,
					s = Object.keys(e),
					l = s.length,
					c =
						void 0 !== r
							? (function (e, t) {
									return function (n, r, i, a) {
										return e.call(t, n, r, i, a);
									};
							  })(t, r)
							: t;
				for (
					void 0 === n
						? ((i = 1), (o = e[s[0]]))
						: ((i = 0), (o = n));
					i < l;
					i++
				)
					o = c(o, e[(a = s[i])], a, e);
				return o;
			};
			function ze(e) {
				const t = (function (e) {
					const t = [];
					let n = 0;
					const r = e.length;
					for (; n < r; ) {
						const i = e.charCodeAt(n++);
						if (i >= 55296 && i <= 56319 && n < r) {
							const r = e.charCodeAt(n++);
							56320 == (64512 & r)
								? t.push(
										((1023 & i) << 10) + (1023 & r) + 65536
								  )
								: (t.push(i), n--);
						} else t.push(i);
					}
					return t;
				})(e);
				return 1 === t.length ? t[0].toString(16) : null;
			}
			function je(e) {
				return Object.keys(e).reduce((t, n) => {
					const r = e[n];
					return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
				}, {});
			}
			function qe(e, t) {
				let n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: {};
				const { skipHooks: r = !1 } = n,
					i = je(t);
				"function" !== typeof Ae.hooks.addPack || r
					? (Ae.styles[e] = d(d({}, Ae.styles[e] || {}), i))
					: Ae.hooks.addPack(e, je(t)),
					"fas" === e && qe("fa", t);
			}
			const { styles: Ue, shims: We } = Ae,
				Be = Object.keys(ae),
				He = Be.reduce((e, t) => ((e[t] = Object.keys(ae[t])), e), {});
			let Ve = null,
				$e = {},
				Qe = {},
				Ye = {},
				Ke = {},
				Ge = {};
			function Xe(e, t) {
				const n = t.split("-"),
					r = n[0],
					i = n.slice(1).join("-");
				return r !== e || "" === i || ((a = i), ~fe.indexOf(a))
					? null
					: i;
				var a;
			}
			const Je = () => {
				const e = (e) =>
					Fe(Ue, (t, n, r) => ((t[r] = Fe(n, e, {})), t), {});
				($e = e((e, t, n) => {
					if ((t[3] && (e[t[3]] = n), t[2])) {
						t[2]
							.filter((e) => "number" === typeof e)
							.forEach((t) => {
								e[t.toString(16)] = n;
							});
					}
					return e;
				})),
					(Qe = e((e, t, n) => {
						if (((e[n] = n), t[2])) {
							t[2]
								.filter((e) => "string" === typeof e)
								.forEach((t) => {
									e[t] = n;
								});
						}
						return e;
					})),
					(Ge = e((e, t, n) => {
						const r = t[2];
						return (
							(e[n] = n),
							r.forEach((t) => {
								e[t] = n;
							}),
							e
						);
					}));
				const t = "far" in Ue || ge.autoFetchSvg,
					n = Fe(
						We,
						(e, n) => {
							const r = n[0];
							let i = n[1];
							const a = n[2];
							return (
								"far" !== i || t || (i = "fas"),
								"string" === typeof r &&
									(e.names[r] = { prefix: i, iconName: a }),
								"number" === typeof r &&
									(e.unicodes[r.toString(16)] = {
										prefix: i,
										iconName: a,
									}),
								e
							);
						},
						{ names: {}, unicodes: {} }
					);
				(Ye = n.names),
					(Ke = n.unicodes),
					(Ve = it(ge.styleDefault, { family: ge.familyDefault }));
			};
			var Ze;
			function et(e, t) {
				return ($e[e] || {})[t];
			}
			function tt(e, t) {
				return (Ge[e] || {})[t];
			}
			function nt(e) {
				return Ye[e] || { prefix: null, iconName: null };
			}
			function rt() {
				return Ve;
			}
			(Ze = (e) => {
				Ve = it(e.styleDefault, { family: ge.familyDefault });
			}),
				ye.push(Ze),
				Je();
			function it(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {};
				const { family: n = x } = t,
					r = te[n][e];
				if (n === T && !e) return "fad";
				const i = re[n][e] || re[n][r],
					a = e in Ae.styles ? e : null;
				return i || a || null;
			}
			function at(e) {
				return e.sort().filter((e, t, n) => n.indexOf(e) === t);
			}
			function ot(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {};
				const { skipLookups: n = !1 } = t;
				let r = null;
				const i = j.concat(F),
					a = at(e.filter((e) => i.includes(e))),
					o = at(e.filter((e) => !j.includes(e))),
					s = a.filter((e) => ((r = e), !E.includes(e))),
					[l = null] = s,
					c = (function (e) {
						let t = x;
						const n = Be.reduce(
							(e, t) => (
								(e[t] = "".concat(ge.cssPrefix, "-").concat(t)),
								e
							),
							{}
						);
						return (
							P.forEach((r) => {
								(e.includes(n[r]) ||
									e.some((e) => He[r].includes(e))) &&
									(t = r);
							}),
							t
						);
					})(a),
					u = d(
						d(
							{},
							(function (e) {
								let t = [],
									n = null;
								return (
									e.forEach((e) => {
										const r = Xe(ge.cssPrefix, e);
										r ? (n = r) : e && t.push(e);
									}),
									{ iconName: n, rest: t }
								);
							})(o)
						),
						{},
						{ prefix: it(l, { family: c }) }
					);
				return d(
					d(
						d({}, u),
						(function (e) {
							const {
									values: t,
									family: n,
									canonical: r,
									givenPrefix: i = "",
									styles: a = {},
									config: o = {},
								} = e,
								s = n === T,
								l =
									t.includes("fa-duotone") ||
									t.includes("fad"),
								c = "duotone" === o.familyDefault,
								u =
									"fad" === r.prefix ||
									"fa-duotone" === r.prefix;
							!s && (l || c || u) && (r.prefix = "fad");
							(t.includes("fa-brands") || t.includes("fab")) &&
								(r.prefix = "fab");
							if (!r.prefix && st.includes(n)) {
								if (
									Object.keys(a).find((e) =>
										lt.includes(e)
									) ||
									o.autoFetchSvg
								) {
									const e = N.get(n).defaultShortPrefixId;
									(r.prefix = e),
										(r.iconName =
											tt(r.prefix, r.iconName) ||
											r.iconName);
								}
							}
							("fa" !== r.prefix && "fa" !== i) ||
								(r.prefix = rt() || "fas");
							return r;
						})({
							values: e,
							family: c,
							styles: Ue,
							config: ge,
							canonical: u,
							givenPrefix: r,
						})
					),
					(function (e, t, n) {
						let { prefix: r, iconName: i } = n;
						if (e || !r || !i) return { prefix: r, iconName: i };
						const a = "fa" === t ? nt(i) : {},
							o = tt(r, i);
						(i = a.iconName || o || i),
							(r = a.prefix || r),
							"far" !== r ||
								Ue.far ||
								!Ue.fas ||
								ge.autoFetchSvg ||
								(r = "fas");
						return { prefix: r, iconName: i };
					})(n, r, u)
				);
			}
			const st = P.filter((e) => e !== x || e !== T),
				lt = Object.keys(z)
					.filter((e) => e !== x)
					.map((e) => Object.keys(z[e]))
					.flat();
			let ct = [],
				ut = {};
			const dt = {},
				ft = Object.keys(dt);
			function ht(e, t) {
				for (
					var n = arguments.length,
						r = new Array(n > 2 ? n - 2 : 0),
						i = 2;
					i < n;
					i++
				)
					r[i - 2] = arguments[i];
				return (
					(ut[e] || []).forEach((e) => {
						t = e.apply(null, [t, ...r]);
					}),
					t
				);
			}
			function pt(e) {
				for (
					var t = arguments.length,
						n = new Array(t > 1 ? t - 1 : 0),
						r = 1;
					r < t;
					r++
				)
					n[r - 1] = arguments[r];
				(ut[e] || []).forEach((e) => {
					e.apply(null, n);
				});
			}
			function mt() {
				const e = arguments[0],
					t = Array.prototype.slice.call(arguments, 1);
				return dt[e] ? dt[e].apply(null, t) : void 0;
			}
			function gt(e) {
				"fa" === e.prefix && (e.prefix = "fas");
				let { iconName: t } = e;
				const n = e.prefix || rt();
				if (t)
					return (
						(t = tt(n, t) || t),
						Me(yt.definitions, n, t) || Me(Ae.styles, n, t)
					);
			}
			const yt = new (class {
					constructor() {
						this.definitions = {};
					}
					add() {
						for (
							var e = arguments.length, t = new Array(e), n = 0;
							n < e;
							n++
						)
							t[n] = arguments[n];
						const r = t.reduce(this._pullDefinitions, {});
						Object.keys(r).forEach((e) => {
							(this.definitions[e] = d(
								d({}, this.definitions[e] || {}),
								r[e]
							)),
								qe(e, r[e]);
							const t = ae[x][e];
							t && qe(t, r[e]), Je();
						});
					}
					reset() {
						this.definitions = {};
					}
					_pullDefinitions(e, t) {
						const n =
							t.prefix && t.iconName && t.icon ? { 0: t } : t;
						return (
							Object.keys(n).map((t) => {
								const {
										prefix: r,
										iconName: i,
										icon: a,
									} = n[t],
									o = a[2];
								e[r] || (e[r] = {}),
									o.length > 0 &&
										o.forEach((t) => {
											"string" === typeof t &&
												(e[r][t] = a);
										}),
									(e[r][i] = a);
							}),
							e
						);
					}
				})(),
				vt = {
					i2svg: function () {
						let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						return k
							? (pt("beforeI2svg", e),
							  mt("pseudoElements2svg", e),
							  mt("i2svg", e))
							: Promise.reject(
									new Error(
										"Operation requires a DOM of some kind."
									)
							  );
					},
					watch: function () {
						let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						const { autoReplaceSvgRoot: t } = e;
						var n;
						!1 === ge.autoReplaceSvg && (ge.autoReplaceSvg = !0),
							(ge.observeMutations = !0),
							(n = () => {
								wt({ autoReplaceSvgRoot: t }), pt("watch", e);
							}),
							k && (De ? setTimeout(n, 0) : Oe.push(n));
					},
				},
				_t = {
					icon: (e) => {
						if (null === e) return null;
						if ("object" === typeof e && e.prefix && e.iconName)
							return {
								prefix: e.prefix,
								iconName:
									tt(e.prefix, e.iconName) || e.iconName,
							};
						if (Array.isArray(e) && 2 === e.length) {
							const t =
									0 === e[1].indexOf("fa-")
										? e[1].slice(3)
										: e[1],
								n = it(e[0]);
							return { prefix: n, iconName: tt(n, t) || t };
						}
						if (
							"string" === typeof e &&
							(e.indexOf("".concat(ge.cssPrefix, "-")) > -1 ||
								e.match(se))
						) {
							const t = ot(e.split(" "), { skipLookups: !0 });
							return {
								prefix: t.prefix || rt(),
								iconName:
									tt(t.prefix, t.iconName) || t.iconName,
							};
						}
						if ("string" === typeof e) {
							const t = rt();
							return { prefix: t, iconName: tt(t, e) || e };
						}
					},
				},
				bt = {
					noAuto: () => {
						(ge.autoReplaceSvg = !1),
							(ge.observeMutations = !1),
							pt("noAuto");
					},
					config: ge,
					dom: vt,
					parse: _t,
					library: yt,
					findIconDefinition: gt,
					toHtml: Le,
				},
				wt = function () {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {};
					const { autoReplaceSvgRoot: t = _ } = e;
					(Object.keys(Ae.styles).length > 0 || ge.autoFetchSvg) &&
						k &&
						ge.autoReplaceSvg &&
						bt.dom.i2svg({ node: t });
				};
			function kt(e, t) {
				return (
					Object.defineProperty(e, "abstract", { get: t }),
					Object.defineProperty(e, "html", {
						get: function () {
							return e.abstract.map((e) => Le(e));
						},
					}),
					Object.defineProperty(e, "node", {
						get: function () {
							if (!k) return;
							const t = _.createElement("div");
							return (t.innerHTML = e.html), t.children;
						},
					}),
					e
				);
			}
			function St(e) {
				const {
						icons: { main: t, mask: n },
						prefix: r,
						iconName: i,
						transform: a,
						symbol: o,
						title: s,
						maskId: l,
						titleId: c,
						extra: u,
						watchable: f = !1,
					} = e,
					{ width: h, height: p } = n.found ? n : t,
					m = R.includes(r),
					g = [
						ge.replacementClass,
						i ? "".concat(ge.cssPrefix, "-").concat(i) : "",
					]
						.filter((e) => -1 === u.classes.indexOf(e))
						.filter((e) => "" !== e || !!e)
						.concat(u.classes)
						.join(" ");
				let y = {
					children: [],
					attributes: d(
						d({}, u.attributes),
						{},
						{
							"data-prefix": r,
							"data-icon": i,
							class: g,
							role: u.attributes.role || "img",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 ".concat(h, " ").concat(p),
						}
					),
				};
				const v =
					m && !~u.classes.indexOf("fa-fw")
						? { width: "".concat((h / p) * 16 * 0.0625, "em") }
						: {};
				f && (y.attributes[$] = ""),
					s &&
						(y.children.push({
							tag: "title",
							attributes: {
								id:
									y.attributes["aria-labelledby"] ||
									"title-".concat(c || be()),
							},
							children: [s],
						}),
						delete y.attributes.title);
				const _ = d(
						d({}, y),
						{},
						{
							prefix: r,
							iconName: i,
							main: t,
							mask: n,
							maskId: l,
							transform: a,
							symbol: o,
							styles: d(d({}, v), u.styles),
						}
					),
					{ children: b, attributes: w } =
						n.found && t.found
							? mt("generateAbstractMask", _) || {
									children: [],
									attributes: {},
							  }
							: mt("generateAbstractIcon", _) || {
									children: [],
									attributes: {},
							  };
				return (
					(_.children = b),
					(_.attributes = w),
					o
						? (function (e) {
								let {
									prefix: t,
									iconName: n,
									children: r,
									attributes: i,
									symbol: a,
								} = e;
								const o =
									!0 === a
										? ""
												.concat(t, "-")
												.concat(ge.cssPrefix, "-")
												.concat(n)
										: a;
								return [
									{
										tag: "svg",
										attributes: { style: "display: none;" },
										children: [
											{
												tag: "symbol",
												attributes: d(
													d({}, i),
													{},
													{ id: o }
												),
												children: r,
											},
										],
									},
								];
						  })(_)
						: (function (e) {
								let {
									children: t,
									main: n,
									mask: r,
									attributes: i,
									styles: a,
									transform: o,
								} = e;
								if (Ee(o) && n.found && !r.found) {
									const { width: e, height: t } = n,
										r = { x: e / t / 2, y: 0.5 };
									i.style = Ce(
										d(
											d({}, a),
											{},
											{
												"transform-origin": ""
													.concat(
														r.x + o.x / 16,
														"em "
													)
													.concat(
														r.y + o.y / 16,
														"em"
													),
											}
										)
									);
								}
								return [
									{ tag: "svg", attributes: i, children: t },
								];
						  })(_)
				);
			}
			function Ct(e) {
				const {
						content: t,
						width: n,
						height: r,
						transform: i,
						title: a,
						extra: o,
						watchable: s = !1,
					} = e,
					l = d(
						d(d({}, o.attributes), a ? { title: a } : {}),
						{},
						{ class: o.classes.join(" ") }
					);
				s && (l[$] = "");
				const c = d({}, o.styles);
				Ee(i) &&
					((c.transform = (function (e) {
						let {
								transform: t,
								width: n = H,
								height: r = H,
								startCentered: i = !1,
							} = e,
							a = "";
						return (
							(a +=
								i && S
									? "translate("
											.concat(t.x / ve - n / 2, "em, ")
											.concat(t.y / ve - r / 2, "em) ")
									: i
									? "translate(calc(-50% + "
											.concat(
												t.x / ve,
												"em), calc(-50% + "
											)
											.concat(t.y / ve, "em)) ")
									: "translate("
											.concat(t.x / ve, "em, ")
											.concat(t.y / ve, "em) ")),
							(a += "scale("
								.concat(
									(t.size / ve) * (t.flipX ? -1 : 1),
									", "
								)
								.concat(
									(t.size / ve) * (t.flipY ? -1 : 1),
									") "
								)),
							(a += "rotate(".concat(t.rotate, "deg) ")),
							a
						);
					})({
						transform: i,
						startCentered: !0,
						width: n,
						height: r,
					})),
					(c["-webkit-transform"] = c.transform));
				const u = Ce(c);
				u.length > 0 && (l.style = u);
				const f = [];
				return (
					f.push({ tag: "span", attributes: l, children: [t] }),
					a &&
						f.push({
							tag: "span",
							attributes: { class: "sr-only" },
							children: [a],
						}),
					f
				);
			}
			const { styles: Et } = Ae;
			function xt(e) {
				const t = e[0],
					n = e[1],
					[r] = e.slice(4);
				let i = null;
				return (
					(i = Array.isArray(r)
						? {
								tag: "g",
								attributes: {
									class: ""
										.concat(ge.cssPrefix, "-")
										.concat(de.GROUP),
								},
								children: [
									{
										tag: "path",
										attributes: {
											class: ""
												.concat(ge.cssPrefix, "-")
												.concat(de.SECONDARY),
											fill: "currentColor",
											d: r[0],
										},
									},
									{
										tag: "path",
										attributes: {
											class: ""
												.concat(ge.cssPrefix, "-")
												.concat(de.PRIMARY),
											fill: "currentColor",
											d: r[1],
										},
									},
								],
						  }
						: {
								tag: "path",
								attributes: { fill: "currentColor", d: r },
						  }),
					{ found: !0, width: t, height: n, icon: i }
				);
			}
			const Tt = { found: !1, width: 512, height: 512 };
			function Pt(e, t) {
				let n = t;
				return (
					"fa" === t && null !== ge.styleDefault && (t = rt()),
					new Promise((r, i) => {
						if ("fa" === n) {
							const n = nt(e) || {};
							(e = n.iconName || e), (t = n.prefix || t);
						}
						if (e && t && Et[t] && Et[t][e]) {
							return r(xt(Et[t][e]));
						}
						!(function (e, t) {
							J ||
								ge.showMissingIcons ||
								!e ||
								console.error(
									'Icon with name "'
										.concat(e, '" and prefix "')
										.concat(t, '" is missing.')
								);
						})(e, t),
							r(
								d(
									d({}, Tt),
									{},
									{
										icon:
											(ge.showMissingIcons &&
												e &&
												mt("missingIconAbstract")) ||
											{},
									}
								)
							);
					})
				);
			}
			const Nt = () => {},
				It =
					ge.measurePerformance && w && w.mark && w.measure
						? w
						: { mark: Nt, measure: Nt },
				At = 'FA "6.7.2"',
				Ot = (e) => {
					It.mark("".concat(At, " ").concat(e, " ends")),
						It.measure(
							"".concat(At, " ").concat(e),
							"".concat(At, " ").concat(e, " begins"),
							"".concat(At, " ").concat(e, " ends")
						);
				};
			var Rt = (e) => (
				It.mark("".concat(At, " ").concat(e, " begins")), () => Ot(e)
			);
			const Dt = () => {};
			function Lt(e) {
				return (
					"string" ===
					typeof (e.getAttribute ? e.getAttribute($) : null)
				);
			}
			function Mt(e) {
				return _.createElementNS("http://www.w3.org/2000/svg", e);
			}
			function Ft(e) {
				return _.createElement(e);
			}
			function zt(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {};
				const { ceFn: n = "svg" === e.tag ? Mt : Ft } = t;
				if ("string" === typeof e) return _.createTextNode(e);
				const r = n(e.tag);
				Object.keys(e.attributes || []).forEach(function (t) {
					r.setAttribute(t, e.attributes[t]);
				});
				return (
					(e.children || []).forEach(function (e) {
						r.appendChild(zt(e, { ceFn: n }));
					}),
					r
				);
			}
			const jt = {
				replace: function (e) {
					const t = e[0];
					if (t.parentNode)
						if (
							(e[1].forEach((e) => {
								t.parentNode.insertBefore(zt(e), t);
							}),
							null === t.getAttribute($) && ge.keepOriginalSource)
						) {
							let e = _.createComment(
								(function (e) {
									let t = " ".concat(e.outerHTML, " ");
									return (
										(t = "".concat(
											t,
											"Font Awesome fontawesome.com "
										)),
										t
									);
								})(t)
							);
							t.parentNode.replaceChild(e, t);
						} else t.remove();
				},
				nest: function (e) {
					const t = e[0],
						n = e[1];
					if (~ke(t).indexOf(ge.replacementClass))
						return jt.replace(e);
					const r = new RegExp("".concat(ge.cssPrefix, "-.*"));
					if ((delete n[0].attributes.id, n[0].attributes.class)) {
						const e = n[0].attributes.class
							.split(" ")
							.reduce(
								(e, t) => (
									t === ge.replacementClass || t.match(r)
										? e.toSvg.push(t)
										: e.toNode.push(t),
									e
								),
								{ toNode: [], toSvg: [] }
							);
						(n[0].attributes.class = e.toSvg.join(" ")),
							0 === e.toNode.length
								? t.removeAttribute("class")
								: t.setAttribute("class", e.toNode.join(" "));
					}
					const i = n.map((e) => Le(e)).join("\n");
					t.setAttribute($, ""), (t.innerHTML = i);
				},
			};
			function qt(e) {
				e();
			}
			function Ut(e, t) {
				const n = "function" === typeof t ? t : Dt;
				if (0 === e.length) n();
				else {
					let t = qt;
					"async" === ge.mutateApproach &&
						(t = v.requestAnimationFrame || qt),
						t(() => {
							const t =
									!0 === ge.autoReplaceSvg
										? jt.replace
										: jt[ge.autoReplaceSvg] || jt.replace,
								r = Rt("mutate");
							e.map(t), r(), n();
						});
				}
			}
			let Wt = !1;
			function Bt() {
				Wt = !0;
			}
			function Ht() {
				Wt = !1;
			}
			let Vt = null;
			function $t(e) {
				if (!b) return;
				if (!ge.observeMutations) return;
				const {
					treeCallback: t = Dt,
					nodeCallback: n = Dt,
					pseudoElementsCallback: r = Dt,
					observeMutationsRoot: i = _,
				} = e;
				(Vt = new b((e) => {
					if (Wt) return;
					const i = rt();
					we(e).forEach((e) => {
						if (
							("childList" === e.type &&
								e.addedNodes.length > 0 &&
								!Lt(e.addedNodes[0]) &&
								(ge.searchPseudoElements && r(e.target),
								t(e.target)),
							"attributes" === e.type &&
								e.target.parentNode &&
								ge.searchPseudoElements &&
								r(e.target.parentNode),
							"attributes" === e.type &&
								Lt(e.target) &&
								~ue.indexOf(e.attributeName))
						)
							if (
								"class" === e.attributeName &&
								(function (e) {
									const t = e.getAttribute
											? e.getAttribute(Y)
											: null,
										n = e.getAttribute
											? e.getAttribute(K)
											: null;
									return t && n;
								})(e.target)
							) {
								const { prefix: t, iconName: n } = ot(
									ke(e.target)
								);
								e.target.setAttribute(Y, t || i),
									n && e.target.setAttribute(K, n);
							} else
								(a = e.target) &&
									a.classList &&
									a.classList.contains &&
									a.classList.contains(ge.replacementClass) &&
									n(e.target);
						var a;
					});
				})),
					k &&
						Vt.observe(i, {
							childList: !0,
							attributes: !0,
							characterData: !0,
							subtree: !0,
						});
			}
			function Qt(e) {
				const t = e.getAttribute("data-prefix"),
					n = e.getAttribute("data-icon"),
					r = void 0 !== e.innerText ? e.innerText.trim() : "";
				let i = ot(ke(e));
				return (
					i.prefix || (i.prefix = rt()),
					t && n && ((i.prefix = t), (i.iconName = n)),
					(i.iconName && i.prefix) ||
						(i.prefix &&
							r.length > 0 &&
							(i.iconName =
								(function (e, t) {
									return (Qe[e] || {})[t];
								})(i.prefix, e.innerText) ||
								et(i.prefix, ze(e.innerText))),
						!i.iconName &&
							ge.autoFetchSvg &&
							e.firstChild &&
							e.firstChild.nodeType === Node.TEXT_NODE &&
							(i.iconName = e.firstChild.data)),
					i
				);
			}
			function Yt(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: { styleParser: !0 };
				const { iconName: n, prefix: r, rest: i } = Qt(e),
					a = (function (e) {
						const t = we(e.attributes).reduce(
								(e, t) => (
									"class" !== e.name &&
										"style" !== e.name &&
										(e[t.name] = t.value),
									e
								),
								{}
							),
							n = e.getAttribute("title"),
							r = e.getAttribute("data-fa-title-id");
						return (
							ge.autoA11y &&
								(n
									? (t["aria-labelledby"] = ""
											.concat(
												ge.replacementClass,
												"-title-"
											)
											.concat(r || be()))
									: ((t["aria-hidden"] = "true"),
									  (t.focusable = "false"))),
							t
						);
					})(e),
					o = ht("parseNodeAttributes", {}, e);
				let s = t.styleParser
					? (function (e) {
							const t = e.getAttribute("style");
							let n = [];
							return (
								t &&
									(n = t.split(";").reduce((e, t) => {
										const n = t.split(":"),
											r = n[0],
											i = n.slice(1);
										return (
											r &&
												i.length > 0 &&
												(e[r] = i.join(":").trim()),
											e
										);
									}, {})),
								n
							);
					  })(e)
					: [];
				return d(
					{
						iconName: n,
						title: e.getAttribute("title"),
						titleId: e.getAttribute("data-fa-title-id"),
						prefix: r,
						transform: _e,
						mask: { iconName: null, prefix: null, rest: [] },
						maskId: null,
						symbol: !1,
						extra: { classes: i, styles: s, attributes: a },
					},
					o
				);
			}
			const { styles: Kt } = Ae;
			function Gt(e) {
				const t =
					"nest" === ge.autoReplaceSvg
						? Yt(e, { styleParser: !1 })
						: Yt(e);
				return ~t.extra.classes.indexOf(le)
					? mt("generateLayersText", e, t)
					: mt("generateSvgReplacementMutation", e, t);
			}
			function Xt(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: null;
				if (!k) return Promise.resolve();
				const n = _.documentElement.classList,
					r = (e) => n.add("".concat(G, "-").concat(e)),
					i = (e) => n.remove("".concat(G, "-").concat(e)),
					a = ge.autoFetchSvg
						? [...I, ...j]
						: E.concat(Object.keys(Kt));
				a.includes("fa") || a.push("fa");
				const o = [".".concat(le, ":not([").concat($, "])")]
					.concat(
						a.map((e) => ".".concat(e, ":not([").concat($, "])"))
					)
					.join(", ");
				if (0 === o.length) return Promise.resolve();
				let s = [];
				try {
					s = we(e.querySelectorAll(o));
				} catch (u) {}
				if (!(s.length > 0)) return Promise.resolve();
				r("pending"), i("complete");
				const l = Rt("onTree"),
					c = s.reduce((e, t) => {
						try {
							const n = Gt(t);
							n && e.push(n);
						} catch (u) {
							J || ("MissingIcon" === u.name && console.error(u));
						}
						return e;
					}, []);
				return new Promise((e, n) => {
					Promise.all(c)
						.then((n) => {
							Ut(n, () => {
								r("active"),
									r("complete"),
									i("pending"),
									"function" === typeof t && t(),
									l(),
									e();
							});
						})
						.catch((e) => {
							l(), n(e);
						});
				});
			}
			function Jt(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: null;
				Gt(e).then((e) => {
					e && Ut([e], t);
				});
			}
			const Zt = function (e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {};
				const {
					transform: n = _e,
					symbol: r = !1,
					mask: i = null,
					maskId: a = null,
					title: o = null,
					titleId: s = null,
					classes: l = [],
					attributes: c = {},
					styles: u = {},
				} = t;
				if (!e) return;
				const { prefix: f, iconName: h, icon: p } = e;
				return kt(
					d({ type: "icon" }, e),
					() => (
						pt("beforeDOMElementCreation", {
							iconDefinition: e,
							params: t,
						}),
						ge.autoA11y &&
							(o
								? (c["aria-labelledby"] = ""
										.concat(ge.replacementClass, "-title-")
										.concat(s || be()))
								: ((c["aria-hidden"] = "true"),
								  (c.focusable = "false"))),
						St({
							icons: {
								main: xt(p),
								mask: i
									? xt(i.icon)
									: {
											found: !1,
											width: null,
											height: null,
											icon: {},
									  },
							},
							prefix: f,
							iconName: h,
							transform: d(d({}, _e), n),
							symbol: r,
							title: o,
							maskId: a,
							titleId: s,
							extra: { attributes: c, styles: u, classes: l },
						})
					)
				);
			};
			var en = {
					mixout() {
						return {
							icon:
								((e = Zt),
								function (t) {
									let n =
										arguments.length > 1 &&
										void 0 !== arguments[1]
											? arguments[1]
											: {};
									const r = (t || {}).icon ? t : gt(t || {});
									let { mask: i } = n;
									return (
										i &&
											(i = (i || {}).icon
												? i
												: gt(i || {})),
										e(r, d(d({}, n), {}, { mask: i }))
									);
								}),
						};
						var e;
					},
					hooks: () => ({
						mutationObserverCallbacks: (e) => (
							(e.treeCallback = Xt), (e.nodeCallback = Jt), e
						),
					}),
					provides(e) {
						(e.i2svg = function (e) {
							const { node: t = _, callback: n = () => {} } = e;
							return Xt(t, n);
						}),
							(e.generateSvgReplacementMutation = function (
								e,
								t
							) {
								const {
									iconName: n,
									title: r,
									titleId: i,
									prefix: a,
									transform: o,
									symbol: s,
									mask: l,
									maskId: c,
									extra: u,
								} = t;
								return new Promise((t, d) => {
									Promise.all([
										Pt(n, a),
										l.iconName
											? Pt(l.iconName, l.prefix)
											: Promise.resolve({
													found: !1,
													width: 512,
													height: 512,
													icon: {},
											  }),
									])
										.then((l) => {
											let [d, f] = l;
											t([
												e,
												St({
													icons: { main: d, mask: f },
													prefix: a,
													iconName: n,
													transform: o,
													symbol: s,
													maskId: c,
													title: r,
													titleId: i,
													extra: u,
													watchable: !0,
												}),
											]);
										})
										.catch(d);
								});
							}),
							(e.generateAbstractIcon = function (e) {
								let {
									children: t,
									attributes: n,
									main: r,
									transform: i,
									styles: a,
								} = e;
								const o = Ce(a);
								let s;
								return (
									o.length > 0 && (n.style = o),
									Ee(i) &&
										(s = mt(
											"generateAbstractTransformGrouping",
											{
												main: r,
												transform: i,
												containerWidth: r.width,
												iconWidth: r.width,
											}
										)),
									t.push(s || r.icon),
									{ children: t, attributes: n }
								);
							});
					},
				},
				tn = {
					mixout: () => ({
						layer(e) {
							let t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							const { classes: n = [] } = t;
							return kt({ type: "layer" }, () => {
								pt("beforeDOMElementCreation", {
									assembler: e,
									params: t,
								});
								let r = [];
								return (
									e((e) => {
										Array.isArray(e)
											? e.map((e) => {
													r = r.concat(e.abstract);
											  })
											: (r = r.concat(e.abstract));
									}),
									[
										{
											tag: "span",
											attributes: {
												class: [
													"".concat(
														ge.cssPrefix,
														"-layers"
													),
													...n,
												].join(" "),
											},
											children: r,
										},
									]
								);
							});
						},
					}),
				},
				nn = {
					mixout: () => ({
						counter(e) {
							let t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							const {
								title: n = null,
								classes: r = [],
								attributes: i = {},
								styles: a = {},
							} = t;
							return kt(
								{ type: "counter", content: e },
								() => (
									pt("beforeDOMElementCreation", {
										content: e,
										params: t,
									}),
									(function (e) {
										const {
												content: t,
												title: n,
												extra: r,
											} = e,
											i = d(
												d(
													d({}, r.attributes),
													n ? { title: n } : {}
												),
												{},
												{ class: r.classes.join(" ") }
											),
											a = Ce(r.styles);
										a.length > 0 && (i.style = a);
										const o = [];
										return (
											o.push({
												tag: "span",
												attributes: i,
												children: [t],
											}),
											n &&
												o.push({
													tag: "span",
													attributes: {
														class: "sr-only",
													},
													children: [n],
												}),
											o
										);
									})({
										content: e.toString(),
										title: n,
										extra: {
											attributes: i,
											styles: a,
											classes: [
												"".concat(
													ge.cssPrefix,
													"-layers-counter"
												),
												...r,
											],
										},
									})
								)
							);
						},
					}),
				},
				rn = {
					mixout: () => ({
						text(e) {
							let t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							const {
								transform: n = _e,
								title: r = null,
								classes: i = [],
								attributes: a = {},
								styles: o = {},
							} = t;
							return kt(
								{ type: "text", content: e },
								() => (
									pt("beforeDOMElementCreation", {
										content: e,
										params: t,
									}),
									Ct({
										content: e,
										transform: d(d({}, _e), n),
										title: r,
										extra: {
											attributes: a,
											styles: o,
											classes: [
												"".concat(
													ge.cssPrefix,
													"-layers-text"
												),
												...i,
											],
										},
									})
								)
							);
						},
					}),
					provides(e) {
						e.generateLayersText = function (e, t) {
							const { title: n, transform: r, extra: i } = t;
							let a = null,
								o = null;
							if (S) {
								const t = parseInt(
										getComputedStyle(e).fontSize,
										10
									),
									n = e.getBoundingClientRect();
								(a = n.width / t), (o = n.height / t);
							}
							return (
								ge.autoA11y &&
									!n &&
									(i.attributes["aria-hidden"] = "true"),
								Promise.resolve([
									e,
									Ct({
										content: e.innerHTML,
										width: a,
										height: o,
										transform: r,
										title: n,
										extra: i,
										watchable: !0,
									}),
								])
							);
						};
					},
				};
			const an = new RegExp('"', "ug"),
				on = [1105920, 1112319],
				sn = d(
					d(
						d(
							d(
								{},
								{ FontAwesome: { normal: "fas", 400: "fas" } }
							),
							{
								"Font Awesome 6 Free": {
									900: "fas",
									400: "far",
								},
								"Font Awesome 6 Pro": {
									900: "fas",
									400: "far",
									normal: "far",
									300: "fal",
									100: "fat",
								},
								"Font Awesome 6 Brands": {
									400: "fab",
									normal: "fab",
								},
								"Font Awesome 6 Duotone": {
									900: "fad",
									400: "fadr",
									normal: "fadr",
									300: "fadl",
									100: "fadt",
								},
								"Font Awesome 6 Sharp": {
									900: "fass",
									400: "fasr",
									normal: "fasr",
									300: "fasl",
									100: "fast",
								},
								"Font Awesome 6 Sharp Duotone": {
									900: "fasds",
									400: "fasdr",
									normal: "fasdr",
									300: "fasdl",
									100: "fasdt",
								},
							}
						),
						{
							"Font Awesome 5 Free": { 900: "fas", 400: "far" },
							"Font Awesome 5 Pro": {
								900: "fas",
								400: "far",
								normal: "far",
								300: "fal",
							},
							"Font Awesome 5 Brands": {
								400: "fab",
								normal: "fab",
							},
							"Font Awesome 5 Duotone": { 900: "fad" },
						}
					),
					{
						"Font Awesome Kit": { 400: "fak", normal: "fak" },
						"Font Awesome Kit Duotone": {
							400: "fakd",
							normal: "fakd",
						},
					}
				),
				ln = Object.keys(sn).reduce(
					(e, t) => ((e[t.toLowerCase()] = sn[t]), e),
					{}
				),
				cn = Object.keys(ln).reduce((e, t) => {
					const n = ln[t];
					return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
				}, {});
			function un(e, t) {
				const n = ""
					.concat("data-fa-pseudo-element-pending")
					.concat(t.replace(":", "-"));
				return new Promise((r, i) => {
					if (null !== e.getAttribute(n)) return r();
					const a = we(e.children).filter(
							(e) => e.getAttribute(Q) === t
						)[0],
						o = v.getComputedStyle(e, t),
						s = o.getPropertyValue("font-family"),
						l = s.match(ce),
						c = o.getPropertyValue("font-weight"),
						u = o.getPropertyValue("content");
					if (a && !l) return e.removeChild(a), r();
					if (l && "none" !== u && "" !== u) {
						const u = o.getPropertyValue("content");
						let f = (function (e, t) {
							const n = e
									.replace(/^['"]|['"]$/g, "")
									.toLowerCase(),
								r = parseInt(t),
								i = isNaN(r) ? "normal" : r;
							return (ln[n] || {})[i] || cn[n];
						})(s, c);
						const { value: h, isSecondary: p } = (function (e) {
								const t = e.replace(an, ""),
									n = (function (e, t) {
										const n = e.length;
										let r,
											i = e.charCodeAt(t);
										return i >= 55296 &&
											i <= 56319 &&
											n > t + 1 &&
											((r = e.charCodeAt(t + 1)),
											r >= 56320 && r <= 57343)
											? 1024 * (i - 55296) +
													r -
													56320 +
													65536
											: i;
									})(t, 0),
									r = n >= on[0] && n <= on[1],
									i = 2 === t.length && t[0] === t[1];
								return {
									value: ze(i ? t[0] : t),
									isSecondary: r || i,
								};
							})(u),
							m = l[0].startsWith("FontAwesome");
						let g = et(f, h),
							y = g;
						if (m) {
							const e = (function (e) {
								const t = Ke[e],
									n = et("fas", e);
								return (
									t ||
									(n
										? { prefix: "fas", iconName: n }
										: null) || {
										prefix: null,
										iconName: null,
									}
								);
							})(h);
							e.iconName &&
								e.prefix &&
								((g = e.iconName), (f = e.prefix));
						}
						if (
							!g ||
							p ||
							(a &&
								a.getAttribute(Y) === f &&
								a.getAttribute(K) === y)
						)
							r();
						else {
							e.setAttribute(n, y), a && e.removeChild(a);
							const o = {
									iconName: null,
									title: null,
									titleId: null,
									prefix: null,
									transform: _e,
									symbol: !1,
									mask: {
										iconName: null,
										prefix: null,
										rest: [],
									},
									maskId: null,
									extra: {
										classes: [],
										styles: {},
										attributes: {},
									},
								},
								{ extra: s } = o;
							(s.attributes[Q] = t),
								Pt(g, f)
									.then((i) => {
										const a = St(
												d(
													d({}, o),
													{},
													{
														icons: {
															main: i,
															mask: {
																prefix: null,
																iconName: null,
																rest: [],
															},
														},
														prefix: f,
														iconName: y,
														extra: s,
														watchable: !0,
													}
												)
											),
											l = _.createElementNS(
												"http://www.w3.org/2000/svg",
												"svg"
											);
										"::before" === t
											? e.insertBefore(l, e.firstChild)
											: e.appendChild(l),
											(l.outerHTML = a
												.map((e) => Le(e))
												.join("\n")),
											e.removeAttribute(n),
											r();
									})
									.catch(i);
						}
					} else r();
				});
			}
			function dn(e) {
				return Promise.all([un(e, "::before"), un(e, "::after")]);
			}
			function fn(e) {
				return (
					e.parentNode !== document.head &&
					!~X.indexOf(e.tagName.toUpperCase()) &&
					!e.getAttribute(Q) &&
					(!e.parentNode || "svg" !== e.parentNode.tagName)
				);
			}
			function hn(e) {
				if (k)
					return new Promise((t, n) => {
						const r = we(e.querySelectorAll("*"))
								.filter(fn)
								.map(dn),
							i = Rt("searchPseudoElements");
						Bt(),
							Promise.all(r)
								.then(() => {
									i(), Ht(), t();
								})
								.catch(() => {
									i(), Ht(), n();
								});
					});
			}
			var pn = {
				hooks: () => ({
					mutationObserverCallbacks: (e) => (
						(e.pseudoElementsCallback = hn), e
					),
				}),
				provides(e) {
					e.pseudoElements2svg = function (e) {
						const { node: t = _ } = e;
						ge.searchPseudoElements && hn(t);
					};
				},
			};
			let mn = !1;
			var gn = {
				mixout: () => ({
					dom: {
						unwatch() {
							Bt(), (mn = !0);
						},
					},
				}),
				hooks: () => ({
					bootstrap() {
						$t(ht("mutationObserverCallbacks", {}));
					},
					noAuto() {
						Vt && Vt.disconnect();
					},
					watch(e) {
						const { observeMutationsRoot: t } = e;
						mn
							? Ht()
							: $t(
									ht("mutationObserverCallbacks", {
										observeMutationsRoot: t,
									})
							  );
					},
				}),
			};
			const yn = (e) =>
				e
					.toLowerCase()
					.split(" ")
					.reduce(
						(e, t) => {
							const n = t.toLowerCase().split("-"),
								r = n[0];
							let i = n.slice(1).join("-");
							if (r && "h" === i) return (e.flipX = !0), e;
							if (r && "v" === i) return (e.flipY = !0), e;
							if (((i = parseFloat(i)), isNaN(i))) return e;
							switch (r) {
								case "grow":
									e.size = e.size + i;
									break;
								case "shrink":
									e.size = e.size - i;
									break;
								case "left":
									e.x = e.x - i;
									break;
								case "right":
									e.x = e.x + i;
									break;
								case "up":
									e.y = e.y - i;
									break;
								case "down":
									e.y = e.y + i;
									break;
								case "rotate":
									e.rotate = e.rotate + i;
							}
							return e;
						},
						{
							size: 16,
							x: 0,
							y: 0,
							flipX: !1,
							flipY: !1,
							rotate: 0,
						}
					);
			var vn = {
				mixout: () => ({ parse: { transform: (e) => yn(e) } }),
				hooks: () => ({
					parseNodeAttributes(e, t) {
						const n = t.getAttribute("data-fa-transform");
						return n && (e.transform = yn(n)), e;
					},
				}),
				provides(e) {
					e.generateAbstractTransformGrouping = function (e) {
						let {
							main: t,
							transform: n,
							containerWidth: r,
							iconWidth: i,
						} = e;
						const a = {
								transform: "translate(".concat(r / 2, " 256)"),
							},
							o = "translate("
								.concat(32 * n.x, ", ")
								.concat(32 * n.y, ") "),
							s = "scale("
								.concat(
									(n.size / 16) * (n.flipX ? -1 : 1),
									", "
								)
								.concat(
									(n.size / 16) * (n.flipY ? -1 : 1),
									") "
								),
							l = "rotate(".concat(n.rotate, " 0 0)"),
							c = {
								outer: a,
								inner: {
									transform: ""
										.concat(o, " ")
										.concat(s, " ")
										.concat(l),
								},
								path: {
									transform: "translate(".concat(
										(i / 2) * -1,
										" -256)"
									),
								},
							};
						return {
							tag: "g",
							attributes: d({}, c.outer),
							children: [
								{
									tag: "g",
									attributes: d({}, c.inner),
									children: [
										{
											tag: t.icon.tag,
											children: t.icon.children,
											attributes: d(
												d({}, t.icon.attributes),
												c.path
											),
										},
									],
								},
							],
						};
					};
				},
			};
			const _n = { x: 0, y: 0, width: "100%", height: "100%" };
			function bn(e) {
				let t =
					!(arguments.length > 1 && void 0 !== arguments[1]) ||
					arguments[1];
				return (
					e.attributes &&
						(e.attributes.fill || t) &&
						(e.attributes.fill = "black"),
					e
				);
			}
			var wn = {
					hooks: () => ({
						parseNodeAttributes(e, t) {
							const n = t.getAttribute("data-fa-mask"),
								r = n
									? ot(n.split(" ").map((e) => e.trim()))
									: {
											prefix: null,
											iconName: null,
											rest: [],
									  };
							return (
								r.prefix || (r.prefix = rt()),
								(e.mask = r),
								(e.maskId = t.getAttribute("data-fa-mask-id")),
								e
							);
						},
					}),
					provides(e) {
						e.generateAbstractMask = function (e) {
							let {
								children: t,
								attributes: n,
								main: r,
								mask: i,
								maskId: a,
								transform: o,
							} = e;
							const { width: s, icon: l } = r,
								{ width: c, icon: u } = i,
								f = (function (e) {
									let {
										transform: t,
										containerWidth: n,
										iconWidth: r,
									} = e;
									const i = {
											transform: "translate(".concat(
												n / 2,
												" 256)"
											),
										},
										a = "translate("
											.concat(32 * t.x, ", ")
											.concat(32 * t.y, ") "),
										o = "scale("
											.concat(
												(t.size / 16) *
													(t.flipX ? -1 : 1),
												", "
											)
											.concat(
												(t.size / 16) *
													(t.flipY ? -1 : 1),
												") "
											),
										s = "rotate(".concat(t.rotate, " 0 0)");
									return {
										outer: i,
										inner: {
											transform: ""
												.concat(a, " ")
												.concat(o, " ")
												.concat(s),
										},
										path: {
											transform: "translate(".concat(
												(r / 2) * -1,
												" -256)"
											),
										},
									};
								})({
									transform: o,
									containerWidth: c,
									iconWidth: s,
								}),
								h = {
									tag: "rect",
									attributes: d(
										d({}, _n),
										{},
										{ fill: "white" }
									),
								},
								p = l.children
									? { children: l.children.map(bn) }
									: {},
								m = {
									tag: "g",
									attributes: d({}, f.inner),
									children: [
										bn(
											d(
												{
													tag: l.tag,
													attributes: d(
														d({}, l.attributes),
														f.path
													),
												},
												p
											)
										),
									],
								},
								g = {
									tag: "g",
									attributes: d({}, f.outer),
									children: [m],
								},
								y = "mask-".concat(a || be()),
								v = "clip-".concat(a || be()),
								_ = {
									tag: "mask",
									attributes: d(
										d({}, _n),
										{},
										{
											id: y,
											maskUnits: "userSpaceOnUse",
											maskContentUnits: "userSpaceOnUse",
										}
									),
									children: [h, g],
								},
								b = {
									tag: "defs",
									children: [
										{
											tag: "clipPath",
											attributes: { id: v },
											children:
												((w = u),
												"g" === w.tag
													? w.children
													: [w]),
										},
										_,
									],
								};
							var w;
							return (
								t.push(b, {
									tag: "rect",
									attributes: d(
										{
											fill: "currentColor",
											"clip-path": "url(#".concat(v, ")"),
											mask: "url(#".concat(y, ")"),
										},
										_n
									),
								}),
								{ children: t, attributes: n }
							);
						};
					},
				},
				kn = {
					provides(e) {
						let t = !1;
						v.matchMedia &&
							(t = v.matchMedia(
								"(prefers-reduced-motion: reduce)"
							).matches),
							(e.missingIconAbstract = function () {
								const e = [],
									n = { fill: "currentColor" },
									r = {
										attributeType: "XML",
										repeatCount: "indefinite",
										dur: "2s",
									};
								e.push({
									tag: "path",
									attributes: d(
										d({}, n),
										{},
										{
											d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
										}
									),
								});
								const i = d(
										d({}, r),
										{},
										{ attributeName: "opacity" }
									),
									a = {
										tag: "circle",
										attributes: d(
											d({}, n),
											{},
											{ cx: "256", cy: "364", r: "28" }
										),
										children: [],
									};
								return (
									t ||
										a.children.push(
											{
												tag: "animate",
												attributes: d(
													d({}, r),
													{},
													{
														attributeName: "r",
														values: "28;14;28;28;14;28;",
													}
												),
											},
											{
												tag: "animate",
												attributes: d(
													d({}, i),
													{},
													{ values: "1;0;1;1;0;1;" }
												),
											}
										),
									e.push(a),
									e.push({
										tag: "path",
										attributes: d(
											d({}, n),
											{},
											{
												opacity: "1",
												d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
											}
										),
										children: t
											? []
											: [
													{
														tag: "animate",
														attributes: d(
															d({}, i),
															{},
															{
																values: "1;0;0;0;0;1;",
															}
														),
													},
											  ],
									}),
									t ||
										e.push({
											tag: "path",
											attributes: d(
												d({}, n),
												{},
												{
													opacity: "0",
													d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
												}
											),
											children: [
												{
													tag: "animate",
													attributes: d(
														d({}, i),
														{},
														{
															values: "0;0;1;1;0;0;",
														}
													),
												},
											],
										}),
									{
										tag: "g",
										attributes: { class: "missing" },
										children: e,
									}
								);
							});
					},
				};
			!(function (e, t) {
				let { mixoutsTo: n } = t;
				(ct = e),
					(ut = {}),
					Object.keys(dt).forEach((e) => {
						-1 === ft.indexOf(e) && delete dt[e];
					}),
					ct.forEach((e) => {
						const t = e.mixout ? e.mixout() : {};
						if (
							(Object.keys(t).forEach((e) => {
								"function" === typeof t[e] && (n[e] = t[e]),
									"object" === typeof t[e] &&
										Object.keys(t[e]).forEach((r) => {
											n[e] || (n[e] = {}),
												(n[e][r] = t[e][r]);
										});
							}),
							e.hooks)
						) {
							const t = e.hooks();
							Object.keys(t).forEach((e) => {
								ut[e] || (ut[e] = []), ut[e].push(t[e]);
							});
						}
						e.provides && e.provides(dt);
					});
			})(
				[
					Ne,
					en,
					tn,
					nn,
					rn,
					pn,
					gn,
					vn,
					wn,
					kn,
					{
						hooks: () => ({
							parseNodeAttributes(e, t) {
								const n = t.getAttribute("data-fa-symbol"),
									r = null !== n && ("" === n || n);
								return (e.symbol = r), e;
							},
						}),
					},
				],
				{ mixoutsTo: bt }
			);
			const Sn = bt.parse,
				Cn = bt.icon;
			var En = n(173),
				xn = n.n(En);
			function Tn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function Pn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Tn(Object(n), !0).forEach(function (t) {
								In(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(n)
						  )
						: Tn(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Nn(e) {
				return (
					(Nn =
						"function" == typeof Symbol &&
						"symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? "symbol"
										: typeof e;
							  }),
					Nn(e)
				);
			}
			function In(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function An(e, t) {
				if (null == e) return {};
				var n,
					r,
					i = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							i = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n
								) &&
									(i[n] = e[n]));
				}
				return i;
			}
			function On(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return Rn(e);
					})(e) ||
					(function (e) {
						if (
							("undefined" !== typeof Symbol &&
								null != e[Symbol.iterator]) ||
							null != e["@@iterator"]
						)
							return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (!e) return;
						if ("string" === typeof e) return Rn(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n &&
							e.constructor &&
							(n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if (
							"Arguments" === n ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						)
							return Rn(e, t);
					})(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function Rn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function Dn(e) {
				return (
					(t = e),
					(t -= 0) === t
						? e
						: (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
								return t ? t.toUpperCase() : "";
						  }))
								.substr(0, 1)
								.toLowerCase() + e.substr(1)
				);
				var t;
			}
			var Ln = ["style"];
			var Mn = !1;
			try {
				Mn = !0;
			} catch (pf) {}
			function Fn(e) {
				return e &&
					"object" === Nn(e) &&
					e.prefix &&
					e.iconName &&
					e.icon
					? e
					: Sn.icon
					? Sn.icon(e)
					: null === e
					? null
					: e && "object" === Nn(e) && e.prefix && e.iconName
					? e
					: Array.isArray(e) && 2 === e.length
					? { prefix: e[0], iconName: e[1] }
					: "string" === typeof e
					? { prefix: "fas", iconName: e }
					: void 0;
			}
			function zn(e, t) {
				return (Array.isArray(t) && t.length > 0) ||
					(!Array.isArray(t) && t)
					? In({}, e, t)
					: {};
			}
			var jn = {
					border: !1,
					className: "",
					mask: null,
					maskId: null,
					fixedWidth: !1,
					inverse: !1,
					flip: !1,
					icon: null,
					listItem: !1,
					pull: null,
					pulse: !1,
					rotation: null,
					size: null,
					spin: !1,
					spinPulse: !1,
					spinReverse: !1,
					beat: !1,
					fade: !1,
					beatFade: !1,
					bounce: !1,
					shake: !1,
					symbol: !1,
					title: "",
					titleId: null,
					transform: null,
					swapOpacity: !1,
				},
				qn = t.forwardRef(function (e, t) {
					var n = Pn(Pn({}, jn), e),
						r = n.icon,
						i = n.mask,
						a = n.symbol,
						o = n.className,
						s = n.title,
						l = n.titleId,
						c = n.maskId,
						u = Fn(r),
						d = zn(
							"classes",
							[].concat(
								On(
									(function (e) {
										var t,
											n = e.beat,
											r = e.fade,
											i = e.beatFade,
											a = e.bounce,
											o = e.shake,
											s = e.flash,
											l = e.spin,
											c = e.spinPulse,
											u = e.spinReverse,
											d = e.pulse,
											f = e.fixedWidth,
											h = e.inverse,
											p = e.border,
											m = e.listItem,
											g = e.flip,
											y = e.size,
											v = e.rotation,
											_ = e.pull,
											b =
												(In(
													(t = {
														"fa-beat": n,
														"fa-fade": r,
														"fa-beat-fade": i,
														"fa-bounce": a,
														"fa-shake": o,
														"fa-flash": s,
														"fa-spin": l,
														"fa-spin-reverse": u,
														"fa-spin-pulse": c,
														"fa-pulse": d,
														"fa-fw": f,
														"fa-inverse": h,
														"fa-border": p,
														"fa-li": m,
														"fa-flip": !0 === g,
														"fa-flip-horizontal":
															"horizontal" ===
																g ||
															"both" === g,
														"fa-flip-vertical":
															"vertical" === g ||
															"both" === g,
													}),
													"fa-".concat(y),
													"undefined" !== typeof y &&
														null !== y
												),
												In(
													t,
													"fa-rotate-".concat(v),
													"undefined" !== typeof v &&
														null !== v &&
														0 !== v
												),
												In(
													t,
													"fa-pull-".concat(_),
													"undefined" !== typeof _ &&
														null !== _
												),
												In(
													t,
													"fa-swap-opacity",
													e.swapOpacity
												),
												t);
										return Object.keys(b)
											.map(function (e) {
												return b[e] ? e : null;
											})
											.filter(function (e) {
												return e;
											});
									})(n)
								),
								On((o || "").split(" "))
							)
						),
						f = zn(
							"transform",
							"string" === typeof n.transform
								? Sn.transform(n.transform)
								: n.transform
						),
						h = zn("mask", Fn(i)),
						p = Cn(
							u,
							Pn(
								Pn(Pn(Pn({}, d), f), h),
								{},
								{ symbol: a, title: s, titleId: l, maskId: c }
							)
						);
					if (!p)
						return (
							(function () {
								var e;
								!Mn &&
									console &&
									"function" === typeof console.error &&
									(e = console).error.apply(e, arguments);
							})("Could not find icon", u),
							null
						);
					var m = p.abstract,
						g = { ref: t };
					return (
						Object.keys(n).forEach(function (e) {
							jn.hasOwnProperty(e) || (g[e] = n[e]);
						}),
						Un(m[0], g)
					);
				});
			(qn.displayName = "FontAwesomeIcon"),
				(qn.propTypes = {
					beat: xn().bool,
					border: xn().bool,
					beatFade: xn().bool,
					bounce: xn().bool,
					className: xn().string,
					fade: xn().bool,
					flash: xn().bool,
					mask: xn().oneOfType([
						xn().object,
						xn().array,
						xn().string,
					]),
					maskId: xn().string,
					fixedWidth: xn().bool,
					inverse: xn().bool,
					flip: xn().oneOf([
						!0,
						!1,
						"horizontal",
						"vertical",
						"both",
					]),
					icon: xn().oneOfType([
						xn().object,
						xn().array,
						xn().string,
					]),
					listItem: xn().bool,
					pull: xn().oneOf(["right", "left"]),
					pulse: xn().bool,
					rotation: xn().oneOf([0, 90, 180, 270]),
					shake: xn().bool,
					size: xn().oneOf([
						"2xs",
						"xs",
						"sm",
						"lg",
						"xl",
						"2xl",
						"1x",
						"2x",
						"3x",
						"4x",
						"5x",
						"6x",
						"7x",
						"8x",
						"9x",
						"10x",
					]),
					spin: xn().bool,
					spinPulse: xn().bool,
					spinReverse: xn().bool,
					symbol: xn().oneOfType([xn().bool, xn().string]),
					title: xn().string,
					titleId: xn().string,
					transform: xn().oneOfType([xn().string, xn().object]),
					swapOpacity: xn().bool,
				});
			var Un = function e(t, n) {
					var r =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {};
					if ("string" === typeof n) return n;
					var i = (n.children || []).map(function (n) {
							return e(t, n);
						}),
						a = Object.keys(n.attributes || {}).reduce(
							function (e, t) {
								var r = n.attributes[t];
								switch (t) {
									case "class":
										(e.attrs.className = r),
											delete n.attributes.class;
										break;
									case "style":
										e.attrs.style = r
											.split(";")
											.map(function (e) {
												return e.trim();
											})
											.filter(function (e) {
												return e;
											})
											.reduce(function (e, t) {
												var n,
													r = t.indexOf(":"),
													i = Dn(t.slice(0, r)),
													a = t.slice(r + 1).trim();
												return (
													i.startsWith("webkit")
														? (e[
																((n = i),
																n
																	.charAt(0)
																	.toUpperCase() +
																	n.slice(1))
														  ] = a)
														: (e[i] = a),
													e
												);
											}, {});
										break;
									default:
										0 === t.indexOf("aria-") ||
										0 === t.indexOf("data-")
											? (e.attrs[t.toLowerCase()] = r)
											: (e.attrs[Dn(t)] = r);
								}
								return e;
							},
							{ attrs: {} }
						),
						o = r.style,
						s = void 0 === o ? {} : o,
						l = An(r, Ln);
					return (
						(a.attrs.style = Pn(Pn({}, a.attrs.style), s)),
						t.apply(
							void 0,
							[n.tag, Pn(Pn({}, a.attrs), l)].concat(On(i))
						)
					);
				}.bind(null, t.createElement),
				Wn = n(579);
			const Bn = {
					isMuted: !1,
					connectionStatus: "disconnected",
					alert: null,
					allMessages: [],
					tickers: {},
					selectedTickers: new Set([
						"NQ",
						"ES",
						"RTY",
						"YM",
						"ZS",
						"CL",
						"GC",
						"ZW",
						"BTC",
						"BP",
						"NG",
						"LE",
						"PL",
						"ZC",
						"SI",
						"6E",
					]),
					isInitialLoad: !0,
					refreshTimestamp: null,
					tickerNames: {
						NQ: "Nasdaq",
						ES: "S&P 500",
						RTY: "Russell 2000",
						YM: "Dow Jones",
						ZS: "Soybeans",
						CL: "Crude Oil",
						GC: "Gold",
						ZW: "Wheat",
						BTC: "Bitcoin",
						BP: "British Pound",
						NG: "Natural Gas",
						LE: "Live Cattle",
						PL: "Platinum",
						ZC: "Corn",
						SI: "Silver",
						"6E": "Euro FX",
					},
					isMessagePanelVisible: !1,
					soundPlaying: !1,
					perCardMute: {},
				},
				Hn = (e, t) => {
					switch (t.type) {
						case "TOGGLE_MUTE":
							return { ...e, isMuted: !e.isMuted };
						case "SET_CONNECTION_STATUS":
							return { ...e, connectionStatus: t.payload };
						case "SET_ALERT":
							return { ...e, alert: t.payload };
						case "ADD_MESSAGE":
							return {
								...e,
								allMessages: [...e.allMessages, t.payload],
							};
						case "SET_REFRESH_TIMESTAMP":
							return { ...e, refreshTimestamp: t.payload };
						case "TOGGLE_MUTE":
							const n = !e.isMuted,
								r = {};
							return (
								Object.keys(e.perCardMute).forEach((e) => {
									r[e] = n;
								}),
								{ ...e, isMuted: n, perCardMute: r }
							);
						case "SET_PER_CARD_MUTE":
							return {
								...e,
								perCardMute: {
									...e.perCardMute,
									[t.payload.ticker]: t.payload.value,
								},
							};
						case "RESET_ALL_CARD_MUTES":
							const i = {};
							return (
								Object.keys(e.perCardMute).forEach(
									(e) => (i[e] = t.payload)
								),
								{ ...e, perCardMute: i }
							);
						default:
							return e;
					}
				},
				Vn = (0, t.createContext)(),
				$n = (0, t.createContext)(),
				Qn = (e) => {
					let { children: n } = e;
					const [r, i] = (0, t.useReducer)(Hn, Bn);
					return (0, Wn.jsx)(Vn.Provider, {
						value: r,
						children: (0, Wn.jsx)($n.Provider, {
							value: i,
							children: n,
						}),
					});
				},
				Yn = () => (0, t.useContext)(Vn),
				Kn = () => (0, t.useContext)($n),
				Gn = (e) => {
					var t;
					let {
						title: n = "",
						alerts: r = [],
						type: i = "STRING",
						ticker: a,
						latestMessageKey: s,
					} = e;
					const c = Kn(),
						{ isMuted: u, perCardMute: d } = Yn(),
						f = null !== (t = d[a]) && void 0 !== t && t;
					console.log("ticker:", a, "muted:", f);
					const h = "KAPS" === i,
						p = h ? "#111" : "#333",
						m = h ? "#222" : "#444";
					return (0, Wn.jsxs)("div", {
						className: "card shadow text-white",
						style: { backgroundColor: p },
						children: [
							(0, Wn.jsxs)("div", {
								className:
									"card-header d-flex justify-content-between align-items-center",
								children: [
									(0, Wn.jsx)("div", {}),
									(0, Wn.jsx)("h5", {
										className: "mb-0",
										children: n,
									}),
									(0, Wn.jsx)("button", {
										className:
											"btn btn-sm btn-outline-secondary",
										onClick: () => {
											c({
												type: "SET_PER_CARD_MUTE",
												payload: {
													ticker: a,
													value: !f,
												},
											});
										},
										disabled: u,
										children: (0, Wn.jsx)(qn, {
											icon: f ? l : o,
											style: {
												color: f ? "red" : "inherit",
											},
										}),
									}),
								],
							}),
							(0, Wn.jsx)("ul", {
								className: "list-group list-group-flush",
								children:
									r.length > 0
										? r.map((e, t) => {
												const n = e.key === s,
													r =
														"list-group-item text-center " +
														(n
															? "bg-primary text-white fw-bold latest-alert-animate"
															: "text-white"),
													i = new Date(
														e.timestamp
													).toLocaleDateString([], {
														hour: "2-digit",
														minute: "2-digit",
													});
												return (0, Wn.jsx)(
													"li",
													{
														className: r,
														style: {
															backgroundColor: n
																? void 0
																: m,
														},
														children: h
															? (0, Wn.jsxs)(
																	Wn.Fragment,
																	{
																		children:
																			[
																				(0,
																				Wn.jsx)(
																					"span",
																					{
																						children:
																							e.content,
																					}
																				),
																				" ",
																				(0,
																				Wn.jsx)(
																					"span",
																					{
																						children:
																							i,
																					}
																				),
																			],
																	}
															  )
															: (0, Wn.jsxs)(
																	Wn.Fragment,
																	{
																		children:
																			[
																				(0,
																				Wn.jsx)(
																					"span",
																					{
																						children:
																							e.action,
																					}
																				),
																				" ",
																				(0,
																				Wn.jsxs)(
																					"span",
																					{
																						children:
																							[
																								"@ ",
																								e.price,
																							],
																					}
																				),
																				(0,
																				Wn.jsxs)(
																					"span",
																					{
																						children:
																							[
																								"\ud83d\udd52 ",
																								i,
																							],
																					}
																				),
																			],
																	}
															  ),
													},
													e.key || t
												);
										  })
										: (0, Wn.jsx)("li", {
												className:
													"list-group-item text-center text-muted",
												children: "No alerts yet",
										  }),
							}),
						],
					});
				},
				Xn = !1,
				Jn = !1,
				Zn = "${JSCORE_VERSION}",
				er = function (e, t) {
					if (!e) throw tr(t);
				},
				tr = function (e) {
					return new Error(
						"Firebase Database (" +
							Zn +
							") INTERNAL ASSERT FAILED: " +
							e
					);
				},
				nr = function (e) {
					const t = [];
					let n = 0;
					for (let r = 0; r < e.length; r++) {
						let i = e.charCodeAt(r);
						i < 128
							? (t[n++] = i)
							: i < 2048
							? ((t[n++] = (i >> 6) | 192),
							  (t[n++] = (63 & i) | 128))
							: 55296 === (64512 & i) &&
							  r + 1 < e.length &&
							  56320 === (64512 & e.charCodeAt(r + 1))
							? ((i =
									65536 +
									((1023 & i) << 10) +
									(1023 & e.charCodeAt(++r))),
							  (t[n++] = (i >> 18) | 240),
							  (t[n++] = ((i >> 12) & 63) | 128),
							  (t[n++] = ((i >> 6) & 63) | 128),
							  (t[n++] = (63 & i) | 128))
							: ((t[n++] = (i >> 12) | 224),
							  (t[n++] = ((i >> 6) & 63) | 128),
							  (t[n++] = (63 & i) | 128));
					}
					return t;
				},
				rr = {
					byteToCharMap_: null,
					charToByteMap_: null,
					byteToCharMapWebSafe_: null,
					charToByteMapWebSafe_: null,
					ENCODED_VALS_BASE:
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
					get ENCODED_VALS() {
						return this.ENCODED_VALS_BASE + "+/=";
					},
					get ENCODED_VALS_WEBSAFE() {
						return this.ENCODED_VALS_BASE + "-_.";
					},
					HAS_NATIVE_SUPPORT: "function" === typeof atob,
					encodeByteArray(e, t) {
						if (!Array.isArray(e))
							throw Error(
								"encodeByteArray takes an array as a parameter"
							);
						this.init_();
						const n = t
								? this.byteToCharMapWebSafe_
								: this.byteToCharMap_,
							r = [];
						for (let i = 0; i < e.length; i += 3) {
							const t = e[i],
								a = i + 1 < e.length,
								o = a ? e[i + 1] : 0,
								s = i + 2 < e.length,
								l = s ? e[i + 2] : 0,
								c = t >> 2,
								u = ((3 & t) << 4) | (o >> 4);
							let d = ((15 & o) << 2) | (l >> 6),
								f = 63 & l;
							s || ((f = 64), a || (d = 64)),
								r.push(n[c], n[u], n[d], n[f]);
						}
						return r.join("");
					},
					encodeString(e, t) {
						return this.HAS_NATIVE_SUPPORT && !t
							? btoa(e)
							: this.encodeByteArray(nr(e), t);
					},
					decodeString(e, t) {
						return this.HAS_NATIVE_SUPPORT && !t
							? atob(e)
							: (function (e) {
									const t = [];
									let n = 0,
										r = 0;
									for (; n < e.length; ) {
										const i = e[n++];
										if (i < 128)
											t[r++] = String.fromCharCode(i);
										else if (i > 191 && i < 224) {
											const a = e[n++];
											t[r++] = String.fromCharCode(
												((31 & i) << 6) | (63 & a)
											);
										} else if (i > 239 && i < 365) {
											const a =
												(((7 & i) << 18) |
													((63 & e[n++]) << 12) |
													((63 & e[n++]) << 6) |
													(63 & e[n++])) -
												65536;
											(t[r++] = String.fromCharCode(
												55296 + (a >> 10)
											)),
												(t[r++] = String.fromCharCode(
													56320 + (1023 & a)
												));
										} else {
											const a = e[n++],
												o = e[n++];
											t[r++] = String.fromCharCode(
												((15 & i) << 12) |
													((63 & a) << 6) |
													(63 & o)
											);
										}
									}
									return t.join("");
							  })(this.decodeStringToByteArray(e, t));
					},
					decodeStringToByteArray(e, t) {
						this.init_();
						const n = t
								? this.charToByteMapWebSafe_
								: this.charToByteMap_,
							r = [];
						for (let i = 0; i < e.length; ) {
							const t = n[e.charAt(i++)],
								a = i < e.length ? n[e.charAt(i)] : 0;
							++i;
							const o = i < e.length ? n[e.charAt(i)] : 64;
							++i;
							const s = i < e.length ? n[e.charAt(i)] : 64;
							if (
								(++i,
								null == t ||
									null == a ||
									null == o ||
									null == s)
							)
								throw new ir();
							const l = (t << 2) | (a >> 4);
							if ((r.push(l), 64 !== o)) {
								const e = ((a << 4) & 240) | (o >> 2);
								if ((r.push(e), 64 !== s)) {
									const e = ((o << 6) & 192) | s;
									r.push(e);
								}
							}
						}
						return r;
					},
					init_() {
						if (!this.byteToCharMap_) {
							(this.byteToCharMap_ = {}),
								(this.charToByteMap_ = {}),
								(this.byteToCharMapWebSafe_ = {}),
								(this.charToByteMapWebSafe_ = {});
							for (let e = 0; e < this.ENCODED_VALS.length; e++)
								(this.byteToCharMap_[e] =
									this.ENCODED_VALS.charAt(e)),
									(this.charToByteMap_[
										this.byteToCharMap_[e]
									] = e),
									(this.byteToCharMapWebSafe_[e] =
										this.ENCODED_VALS_WEBSAFE.charAt(e)),
									(this.charToByteMapWebSafe_[
										this.byteToCharMapWebSafe_[e]
									] = e),
									e >= this.ENCODED_VALS_BASE.length &&
										((this.charToByteMap_[
											this.ENCODED_VALS_WEBSAFE.charAt(e)
										] = e),
										(this.charToByteMapWebSafe_[
											this.ENCODED_VALS.charAt(e)
										] = e));
						}
					},
				};
			class ir extends Error {
				constructor() {
					super(...arguments),
						(this.name = "DecodeBase64StringError");
				}
			}
			const ar = function (e) {
					const t = nr(e);
					return rr.encodeByteArray(t, !0);
				},
				or = function (e) {
					return ar(e).replace(/\./g, "");
				},
				sr = function (e) {
					try {
						return rr.decodeString(e, !0);
					} catch (pf) {
						console.error("base64Decode failed: ", pf);
					}
					return null;
				};
			function lr(e, t) {
				if (!(t instanceof Object)) return t;
				switch (t.constructor) {
					case Date:
						return new Date(t.getTime());
					case Object:
						void 0 === e && (e = {});
						break;
					case Array:
						e = [];
						break;
					default:
						return t;
				}
				for (const n in t)
					t.hasOwnProperty(n) &&
						"__proto__" !== n &&
						(e[n] = lr(e[n], t[n]));
				return e;
			}
			function cr() {
				if ("undefined" !== typeof self) return self;
				if ("undefined" !== typeof window) return window;
				if ("undefined" !== typeof n.g) return n.g;
				throw new Error("Unable to locate global object.");
			}
			const ur = () => {
					try {
						return (
							cr().__FIREBASE_DEFAULTS__ ||
							(() => {
								if ("undefined" === typeof process) return;
								const e = {
									NODE_ENV: "production",
									PUBLIC_URL: "/kaps",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.__FIREBASE_DEFAULTS__;
								return e ? JSON.parse(e) : void 0;
							})() ||
							(() => {
								if ("undefined" === typeof document) return;
								let e;
								try {
									e = document.cookie.match(
										/__FIREBASE_DEFAULTS__=([^;]+)/
									);
								} catch (pf) {
									return;
								}
								const t = e && sr(e[1]);
								return t && JSON.parse(t);
							})()
						);
					} catch (pf) {
						return void console.info(
							`Unable to get __FIREBASE_DEFAULTS__ due to: ${pf}`
						);
					}
				},
				dr = () => {
					var e;
					return null === (e = ur()) || void 0 === e
						? void 0
						: e.config;
				};
			class fr {
				constructor() {
					(this.reject = () => {}),
						(this.resolve = () => {}),
						(this.promise = new Promise((e, t) => {
							(this.resolve = e), (this.reject = t);
						}));
				}
				wrapCallback(e) {
					return (t, n) => {
						t ? this.reject(t) : this.resolve(n),
							"function" === typeof e &&
								(this.promise.catch(() => {}),
								1 === e.length ? e(t) : e(t, n));
					};
				}
			}
			function hr() {
				return "undefined" !== typeof navigator &&
					"string" === typeof navigator.userAgent
					? navigator.userAgent
					: "";
			}
			function pr() {
				return (
					"undefined" !== typeof window &&
					!!(window.cordova || window.phonegap || window.PhoneGap) &&
					/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
						hr()
					)
				);
			}
			function mr() {
				return (
					"undefined" !== typeof WorkerGlobalScope &&
					"undefined" !== typeof self &&
					self instanceof WorkerGlobalScope
				);
			}
			function gr() {
				return !0 === Xn || !0 === Jn;
			}
			class yr extends Error {
				constructor(e, t, n) {
					super(t),
						(this.code = e),
						(this.customData = n),
						(this.name = "FirebaseError"),
						Object.setPrototypeOf(this, yr.prototype),
						Error.captureStackTrace &&
							Error.captureStackTrace(this, vr.prototype.create);
				}
			}
			class vr {
				constructor(e, t, n) {
					(this.service = e),
						(this.serviceName = t),
						(this.errors = n);
				}
				create(e) {
					const t =
							(arguments.length <= 1 ? void 0 : arguments[1]) ||
							{},
						n = `${this.service}/${e}`,
						r = this.errors[e],
						i = r
							? (function (e, t) {
									return e.replace(_r, (e, n) => {
										const r = t[n];
										return null != r
											? String(r)
											: `<${n}?>`;
									});
							  })(r, t)
							: "Error",
						a = `${this.serviceName}: ${i} (${n}).`;
					return new yr(n, a, t);
				}
			}
			const _r = /\{\$([^}]+)}/g;
			function br(e) {
				return JSON.parse(e);
			}
			function wr(e) {
				return JSON.stringify(e);
			}
			const kr = function (e) {
				let t = {},
					n = {},
					r = {},
					i = "";
				try {
					const a = e.split(".");
					(t = br(sr(a[0]) || "")),
						(n = br(sr(a[1]) || "")),
						(i = a[2]),
						(r = n.d || {}),
						delete n.d;
				} catch (pf) {}
				return { header: t, claims: n, data: r, signature: i };
			};
			function Sr(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}
			function Cr(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
					? e[t]
					: void 0;
			}
			function Er(e) {
				for (const t in e)
					if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
				return !0;
			}
			function xr(e, t, n) {
				const r = {};
				for (const i in e)
					Object.prototype.hasOwnProperty.call(e, i) &&
						(r[i] = t.call(n, e[i], i, e));
				return r;
			}
			function Tr(e, t) {
				if (e === t) return !0;
				const n = Object.keys(e),
					r = Object.keys(t);
				for (const i of n) {
					if (!r.includes(i)) return !1;
					const n = e[i],
						a = t[i];
					if (Pr(n) && Pr(a)) {
						if (!Tr(n, a)) return !1;
					} else if (n !== a) return !1;
				}
				for (const i of r) if (!n.includes(i)) return !1;
				return !0;
			}
			function Pr(e) {
				return null !== e && "object" === typeof e;
			}
			class Nr {
				constructor() {
					(this.chain_ = []),
						(this.buf_ = []),
						(this.W_ = []),
						(this.pad_ = []),
						(this.inbuf_ = 0),
						(this.total_ = 0),
						(this.blockSize = 64),
						(this.pad_[0] = 128);
					for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
					this.reset();
				}
				reset() {
					(this.chain_[0] = 1732584193),
						(this.chain_[1] = 4023233417),
						(this.chain_[2] = 2562383102),
						(this.chain_[3] = 271733878),
						(this.chain_[4] = 3285377520),
						(this.inbuf_ = 0),
						(this.total_ = 0);
				}
				compress_(e, t) {
					t || (t = 0);
					const n = this.W_;
					if ("string" === typeof e)
						for (let u = 0; u < 16; u++)
							(n[u] =
								(e.charCodeAt(t) << 24) |
								(e.charCodeAt(t + 1) << 16) |
								(e.charCodeAt(t + 2) << 8) |
								e.charCodeAt(t + 3)),
								(t += 4);
					else
						for (let u = 0; u < 16; u++)
							(n[u] =
								(e[t] << 24) |
								(e[t + 1] << 16) |
								(e[t + 2] << 8) |
								e[t + 3]),
								(t += 4);
					for (let u = 16; u < 80; u++) {
						const e = n[u - 3] ^ n[u - 8] ^ n[u - 14] ^ n[u - 16];
						n[u] = 4294967295 & ((e << 1) | (e >>> 31));
					}
					let r,
						i,
						a = this.chain_[0],
						o = this.chain_[1],
						s = this.chain_[2],
						l = this.chain_[3],
						c = this.chain_[4];
					for (let u = 0; u < 80; u++) {
						u < 40
							? u < 20
								? ((r = l ^ (o & (s ^ l))), (i = 1518500249))
								: ((r = o ^ s ^ l), (i = 1859775393))
							: u < 60
							? ((r = (o & s) | (l & (o | s))), (i = 2400959708))
							: ((r = o ^ s ^ l), (i = 3395469782));
						const e =
							(((a << 5) | (a >>> 27)) + r + c + i + n[u]) &
							4294967295;
						(c = l),
							(l = s),
							(s = 4294967295 & ((o << 30) | (o >>> 2))),
							(o = a),
							(a = e);
					}
					(this.chain_[0] = (this.chain_[0] + a) & 4294967295),
						(this.chain_[1] = (this.chain_[1] + o) & 4294967295),
						(this.chain_[2] = (this.chain_[2] + s) & 4294967295),
						(this.chain_[3] = (this.chain_[3] + l) & 4294967295),
						(this.chain_[4] = (this.chain_[4] + c) & 4294967295);
				}
				update(e, t) {
					if (null == e) return;
					void 0 === t && (t = e.length);
					const n = t - this.blockSize;
					let r = 0;
					const i = this.buf_;
					let a = this.inbuf_;
					for (; r < t; ) {
						if (0 === a)
							for (; r <= n; )
								this.compress_(e, r), (r += this.blockSize);
						if ("string" === typeof e) {
							for (; r < t; )
								if (
									((i[a] = e.charCodeAt(r)),
									++a,
									++r,
									a === this.blockSize)
								) {
									this.compress_(i), (a = 0);
									break;
								}
						} else
							for (; r < t; )
								if (
									((i[a] = e[r]),
									++a,
									++r,
									a === this.blockSize)
								) {
									this.compress_(i), (a = 0);
									break;
								}
					}
					(this.inbuf_ = a), (this.total_ += t);
				}
				digest() {
					const e = [];
					let t = 8 * this.total_;
					this.inbuf_ < 56
						? this.update(this.pad_, 56 - this.inbuf_)
						: this.update(
								this.pad_,
								this.blockSize - (this.inbuf_ - 56)
						  );
					for (let r = this.blockSize - 1; r >= 56; r--)
						(this.buf_[r] = 255 & t), (t /= 256);
					this.compress_(this.buf_);
					let n = 0;
					for (let r = 0; r < 5; r++)
						for (let t = 24; t >= 0; t -= 8)
							(e[n] = (this.chain_[r] >> t) & 255), ++n;
					return e;
				}
			}
			function Ir(e, t) {
				const n = new Ar(e, t);
				return n.subscribe.bind(n);
			}
			class Ar {
				constructor(e, t) {
					(this.observers = []),
						(this.unsubscribes = []),
						(this.observerCount = 0),
						(this.task = Promise.resolve()),
						(this.finalized = !1),
						(this.onNoObservers = t),
						this.task
							.then(() => {
								e(this);
							})
							.catch((e) => {
								this.error(e);
							});
				}
				next(e) {
					this.forEachObserver((t) => {
						t.next(e);
					});
				}
				error(e) {
					this.forEachObserver((t) => {
						t.error(e);
					}),
						this.close(e);
				}
				complete() {
					this.forEachObserver((e) => {
						e.complete();
					}),
						this.close();
				}
				subscribe(e, t, n) {
					let r;
					if (void 0 === e && void 0 === t && void 0 === n)
						throw new Error("Missing Observer.");
					(r = (function (e, t) {
						if ("object" !== typeof e || null === e) return !1;
						for (const n of t)
							if (n in e && "function" === typeof e[n]) return !0;
						return !1;
					})(e, ["next", "error", "complete"])
						? e
						: { next: e, error: t, complete: n }),
						void 0 === r.next && (r.next = Or),
						void 0 === r.error && (r.error = Or),
						void 0 === r.complete && (r.complete = Or);
					const i = this.unsubscribeOne.bind(
						this,
						this.observers.length
					);
					return (
						this.finalized &&
							this.task.then(() => {
								try {
									this.finalError
										? r.error(this.finalError)
										: r.complete();
								} catch (pf) {}
							}),
						this.observers.push(r),
						i
					);
				}
				unsubscribeOne(e) {
					void 0 !== this.observers &&
						void 0 !== this.observers[e] &&
						(delete this.observers[e],
						(this.observerCount -= 1),
						0 === this.observerCount &&
							void 0 !== this.onNoObservers &&
							this.onNoObservers(this));
				}
				forEachObserver(e) {
					if (!this.finalized)
						for (let t = 0; t < this.observers.length; t++)
							this.sendOne(t, e);
				}
				sendOne(e, t) {
					this.task.then(() => {
						if (
							void 0 !== this.observers &&
							void 0 !== this.observers[e]
						)
							try {
								t(this.observers[e]);
							} catch (pf) {
								"undefined" !== typeof console &&
									console.error &&
									console.error(pf);
							}
					});
				}
				close(e) {
					this.finalized ||
						((this.finalized = !0),
						void 0 !== e && (this.finalError = e),
						this.task.then(() => {
							(this.observers = void 0),
								(this.onNoObservers = void 0);
						}));
				}
			}
			function Or() {}
			const Rr = function (e, t, n, r) {
				let i;
				if (
					(r < t
						? (i = "at least " + t)
						: r > n && (i = 0 === n ? "none" : "no more than " + n),
					i)
				) {
					throw new Error(
						e +
							" failed: Was called with " +
							r +
							(1 === r ? " argument." : " arguments.") +
							" Expects " +
							i +
							"."
					);
				}
			};
			function Dr(e, t) {
				return `${e} failed: ${t} argument `;
			}
			function Lr(e, t, n, r) {
				if ((!r || n) && "function" !== typeof n)
					throw new Error(Dr(e, t) + "must be a valid function.");
			}
			function Mr(e, t, n, r) {
				if ((!r || n) && ("object" !== typeof n || null === n))
					throw new Error(
						Dr(e, t) + "must be a valid context object."
					);
			}
			const Fr = function (e) {
				let t = 0;
				for (let n = 0; n < e.length; n++) {
					const r = e.charCodeAt(n);
					r < 128
						? t++
						: r < 2048
						? (t += 2)
						: r >= 55296 && r <= 56319
						? ((t += 4), n++)
						: (t += 3);
				}
				return t;
			};
			function zr(e) {
				return e && e._delegate ? e._delegate : e;
			}
			class jr {
				constructor(e, t, n) {
					(this.name = e),
						(this.instanceFactory = t),
						(this.type = n),
						(this.multipleInstances = !1),
						(this.serviceProps = {}),
						(this.instantiationMode = "LAZY"),
						(this.onInstanceCreated = null);
				}
				setInstantiationMode(e) {
					return (this.instantiationMode = e), this;
				}
				setMultipleInstances(e) {
					return (this.multipleInstances = e), this;
				}
				setServiceProps(e) {
					return (this.serviceProps = e), this;
				}
				setInstanceCreatedCallback(e) {
					return (this.onInstanceCreated = e), this;
				}
			}
			const qr = "[DEFAULT]";
			class Ur {
				constructor(e, t) {
					(this.name = e),
						(this.container = t),
						(this.component = null),
						(this.instances = new Map()),
						(this.instancesDeferred = new Map()),
						(this.instancesOptions = new Map()),
						(this.onInitCallbacks = new Map());
				}
				get(e) {
					const t = this.normalizeInstanceIdentifier(e);
					if (!this.instancesDeferred.has(t)) {
						const e = new fr();
						if (
							(this.instancesDeferred.set(t, e),
							this.isInitialized(t) ||
								this.shouldAutoInitialize())
						)
							try {
								const n = this.getOrInitializeService({
									instanceIdentifier: t,
								});
								n && e.resolve(n);
							} catch (pf) {}
					}
					return this.instancesDeferred.get(t).promise;
				}
				getImmediate(e) {
					var t;
					const n = this.normalizeInstanceIdentifier(
							null === e || void 0 === e ? void 0 : e.identifier
						),
						r =
							null !==
								(t =
									null === e || void 0 === e
										? void 0
										: e.optional) &&
							void 0 !== t &&
							t;
					if (
						!this.isInitialized(n) &&
						!this.shouldAutoInitialize()
					) {
						if (r) return null;
						throw Error(`Service ${this.name} is not available`);
					}
					try {
						return this.getOrInitializeService({
							instanceIdentifier: n,
						});
					} catch (pf) {
						if (r) return null;
						throw pf;
					}
				}
				getComponent() {
					return this.component;
				}
				setComponent(e) {
					if (e.name !== this.name)
						throw Error(
							`Mismatching Component ${e.name} for Provider ${this.name}.`
						);
					if (this.component)
						throw Error(
							`Component for ${this.name} has already been provided`
						);
					if (((this.component = e), this.shouldAutoInitialize())) {
						if (
							(function (e) {
								return "EAGER" === e.instantiationMode;
							})(e)
						)
							try {
								this.getOrInitializeService({
									instanceIdentifier: qr,
								});
							} catch (pf) {}
						for (const [e, t] of this.instancesDeferred.entries()) {
							const n = this.normalizeInstanceIdentifier(e);
							try {
								const e = this.getOrInitializeService({
									instanceIdentifier: n,
								});
								t.resolve(e);
							} catch (pf) {}
						}
					}
				}
				clearInstance() {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: qr;
					this.instancesDeferred.delete(e),
						this.instancesOptions.delete(e),
						this.instances.delete(e);
				}
				async delete() {
					const e = Array.from(this.instances.values());
					await Promise.all([
						...e
							.filter((e) => "INTERNAL" in e)
							.map((e) => e.INTERNAL.delete()),
						...e
							.filter((e) => "_delete" in e)
							.map((e) => e._delete()),
					]);
				}
				isComponentSet() {
					return null != this.component;
				}
				isInitialized() {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: qr;
					return this.instances.has(e);
				}
				getOptions() {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: qr;
					return this.instancesOptions.get(e) || {};
				}
				initialize() {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {};
					const { options: t = {} } = e,
						n = this.normalizeInstanceIdentifier(
							e.instanceIdentifier
						);
					if (this.isInitialized(n))
						throw Error(
							`${this.name}(${n}) has already been initialized`
						);
					if (!this.isComponentSet())
						throw Error(
							`Component ${this.name} has not been registered yet`
						);
					const r = this.getOrInitializeService({
						instanceIdentifier: n,
						options: t,
					});
					for (const [i, a] of this.instancesDeferred.entries()) {
						n === this.normalizeInstanceIdentifier(i) &&
							a.resolve(r);
					}
					return r;
				}
				onInit(e, t) {
					var n;
					const r = this.normalizeInstanceIdentifier(t),
						i =
							null !== (n = this.onInitCallbacks.get(r)) &&
							void 0 !== n
								? n
								: new Set();
					i.add(e), this.onInitCallbacks.set(r, i);
					const a = this.instances.get(r);
					return (
						a && e(a, r),
						() => {
							i.delete(e);
						}
					);
				}
				invokeOnInitCallbacks(e, t) {
					const n = this.onInitCallbacks.get(t);
					if (n)
						for (const i of n)
							try {
								i(e, t);
							} catch (r) {}
				}
				getOrInitializeService(e) {
					let { instanceIdentifier: t, options: n = {} } = e,
						r = this.instances.get(t);
					if (
						!r &&
						this.component &&
						((r = this.component.instanceFactory(this.container, {
							instanceIdentifier:
								((i = t), i === qr ? void 0 : i),
							options: n,
						})),
						this.instances.set(t, r),
						this.instancesOptions.set(t, n),
						this.invokeOnInitCallbacks(r, t),
						this.component.onInstanceCreated)
					)
						try {
							this.component.onInstanceCreated(
								this.container,
								t,
								r
							);
						} catch (a) {}
					var i;
					return r || null;
				}
				normalizeInstanceIdentifier() {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: qr;
					return this.component
						? this.component.multipleInstances
							? e
							: qr
						: e;
				}
				shouldAutoInitialize() {
					return (
						!!this.component &&
						"EXPLICIT" !== this.component.instantiationMode
					);
				}
			}
			class Wr {
				constructor(e) {
					(this.name = e), (this.providers = new Map());
				}
				addComponent(e) {
					const t = this.getProvider(e.name);
					if (t.isComponentSet())
						throw new Error(
							`Component ${e.name} has already been registered with ${this.name}`
						);
					t.setComponent(e);
				}
				addOrOverwriteComponent(e) {
					this.getProvider(e.name).isComponentSet() &&
						this.providers.delete(e.name),
						this.addComponent(e);
				}
				getProvider(e) {
					if (this.providers.has(e)) return this.providers.get(e);
					const t = new Ur(e, this);
					return this.providers.set(e, t), t;
				}
				getProviders() {
					return Array.from(this.providers.values());
				}
			}
			const Br = [];
			var Hr;
			!(function (e) {
				(e[(e.DEBUG = 0)] = "DEBUG"),
					(e[(e.VERBOSE = 1)] = "VERBOSE"),
					(e[(e.INFO = 2)] = "INFO"),
					(e[(e.WARN = 3)] = "WARN"),
					(e[(e.ERROR = 4)] = "ERROR"),
					(e[(e.SILENT = 5)] = "SILENT");
			})(Hr || (Hr = {}));
			const Vr = {
					debug: Hr.DEBUG,
					verbose: Hr.VERBOSE,
					info: Hr.INFO,
					warn: Hr.WARN,
					error: Hr.ERROR,
					silent: Hr.SILENT,
				},
				$r = Hr.INFO,
				Qr = {
					[Hr.DEBUG]: "log",
					[Hr.VERBOSE]: "log",
					[Hr.INFO]: "info",
					[Hr.WARN]: "warn",
					[Hr.ERROR]: "error",
				},
				Yr = function (e, t) {
					if (t < e.logLevel) return;
					const n = new Date().toISOString(),
						r = Qr[t];
					if (!r)
						throw new Error(
							`Attempted to log a message with an invalid logType (value: ${t})`
						);
					for (
						var i = arguments.length,
							a = new Array(i > 2 ? i - 2 : 0),
							o = 2;
						o < i;
						o++
					)
						a[o - 2] = arguments[o];
					console[r](`[${n}]  ${e.name}:`, ...a);
				};
			class Kr {
				constructor(e) {
					(this.name = e),
						(this._logLevel = $r),
						(this._logHandler = Yr),
						(this._userLogHandler = null),
						Br.push(this);
				}
				get logLevel() {
					return this._logLevel;
				}
				set logLevel(e) {
					if (!(e in Hr))
						throw new TypeError(
							`Invalid value "${e}" assigned to \`logLevel\``
						);
					this._logLevel = e;
				}
				setLogLevel(e) {
					this._logLevel = "string" === typeof e ? Vr[e] : e;
				}
				get logHandler() {
					return this._logHandler;
				}
				set logHandler(e) {
					if ("function" !== typeof e)
						throw new TypeError(
							"Value assigned to `logHandler` must be a function"
						);
					this._logHandler = e;
				}
				get userLogHandler() {
					return this._userLogHandler;
				}
				set userLogHandler(e) {
					this._userLogHandler = e;
				}
				debug() {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					this._userLogHandler &&
						this._userLogHandler(this, Hr.DEBUG, ...t),
						this._logHandler(this, Hr.DEBUG, ...t);
				}
				log() {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					this._userLogHandler &&
						this._userLogHandler(this, Hr.VERBOSE, ...t),
						this._logHandler(this, Hr.VERBOSE, ...t);
				}
				info() {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					this._userLogHandler &&
						this._userLogHandler(this, Hr.INFO, ...t),
						this._logHandler(this, Hr.INFO, ...t);
				}
				warn() {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					this._userLogHandler &&
						this._userLogHandler(this, Hr.WARN, ...t),
						this._logHandler(this, Hr.WARN, ...t);
				}
				error() {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					this._userLogHandler &&
						this._userLogHandler(this, Hr.ERROR, ...t),
						this._logHandler(this, Hr.ERROR, ...t);
				}
			}
			let Gr, Xr;
			const Jr = new WeakMap(),
				Zr = new WeakMap(),
				ei = new WeakMap(),
				ti = new WeakMap(),
				ni = new WeakMap();
			let ri = {
				get(e, t, n) {
					if (e instanceof IDBTransaction) {
						if ("done" === t) return Zr.get(e);
						if ("objectStoreNames" === t)
							return e.objectStoreNames || ei.get(e);
						if ("store" === t)
							return n.objectStoreNames[1]
								? void 0
								: n.objectStore(n.objectStoreNames[0]);
					}
					return oi(e[t]);
				},
				set: (e, t, n) => ((e[t] = n), !0),
				has: (e, t) =>
					(e instanceof IDBTransaction &&
						("done" === t || "store" === t)) ||
					t in e,
			};
			function ii(e) {
				return e !== IDBDatabase.prototype.transaction ||
					"objectStoreNames" in IDBTransaction.prototype
					? (
							Xr ||
							(Xr = [
								IDBCursor.prototype.advance,
								IDBCursor.prototype.continue,
								IDBCursor.prototype.continuePrimaryKey,
							])
					  ).includes(e)
						? function () {
								for (
									var t = arguments.length,
										n = new Array(t),
										r = 0;
									r < t;
									r++
								)
									n[r] = arguments[r];
								return e.apply(si(this), n), oi(Jr.get(this));
						  }
						: function () {
								for (
									var t = arguments.length,
										n = new Array(t),
										r = 0;
									r < t;
									r++
								)
									n[r] = arguments[r];
								return oi(e.apply(si(this), n));
						  }
					: function (t) {
							for (
								var n = arguments.length,
									r = new Array(n > 1 ? n - 1 : 0),
									i = 1;
								i < n;
								i++
							)
								r[i - 1] = arguments[i];
							const a = e.call(si(this), t, ...r);
							return ei.set(a, t.sort ? t.sort() : [t]), oi(a);
					  };
			}
			function ai(e) {
				return "function" === typeof e
					? ii(e)
					: (e instanceof IDBTransaction &&
							(function (e) {
								if (Zr.has(e)) return;
								const t = new Promise((t, n) => {
									const r = () => {
											e.removeEventListener(
												"complete",
												i
											),
												e.removeEventListener(
													"error",
													a
												),
												e.removeEventListener(
													"abort",
													a
												);
										},
										i = () => {
											t(), r();
										},
										a = () => {
											n(
												e.error ||
													new DOMException(
														"AbortError",
														"AbortError"
													)
											),
												r();
										};
									e.addEventListener("complete", i),
										e.addEventListener("error", a),
										e.addEventListener("abort", a);
								});
								Zr.set(e, t);
							})(e),
					  (t = e),
					  (
							Gr ||
							(Gr = [
								IDBDatabase,
								IDBObjectStore,
								IDBIndex,
								IDBCursor,
								IDBTransaction,
							])
					  ).some((e) => t instanceof e)
							? new Proxy(e, ri)
							: e);
				var t;
			}
			function oi(e) {
				if (e instanceof IDBRequest)
					return (function (e) {
						const t = new Promise((t, n) => {
							const r = () => {
									e.removeEventListener("success", i),
										e.removeEventListener("error", a);
								},
								i = () => {
									t(oi(e.result)), r();
								},
								a = () => {
									n(e.error), r();
								};
							e.addEventListener("success", i),
								e.addEventListener("error", a);
						});
						return (
							t
								.then((t) => {
									t instanceof IDBCursor && Jr.set(t, e);
								})
								.catch(() => {}),
							ni.set(t, e),
							t
						);
					})(e);
				if (ti.has(e)) return ti.get(e);
				const t = ai(e);
				return t !== e && (ti.set(e, t), ni.set(t, e)), t;
			}
			const si = (e) => ni.get(e);
			const li = ["get", "getKey", "getAll", "getAllKeys", "count"],
				ci = ["put", "add", "delete", "clear"],
				ui = new Map();
			function di(e, t) {
				if (
					!(e instanceof IDBDatabase) ||
					t in e ||
					"string" !== typeof t
				)
					return;
				if (ui.get(t)) return ui.get(t);
				const n = t.replace(/FromIndex$/, ""),
					r = t !== n,
					i = ci.includes(n);
				if (
					!(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
					(!i && !li.includes(n))
				)
					return;
				const a = async function (e) {
					const t = this.transaction(e, i ? "readwrite" : "readonly");
					let a = t.store;
					for (
						var o = arguments.length,
							s = new Array(o > 1 ? o - 1 : 0),
							l = 1;
						l < o;
						l++
					)
						s[l - 1] = arguments[l];
					return (
						r && (a = a.index(s.shift())),
						(await Promise.all([a[n](...s), i && t.done]))[0]
					);
				};
				return ui.set(t, a), a;
			}
			ri = ((e) => ({
				...e,
				get: (t, n, r) => di(t, n) || e.get(t, n, r),
				has: (t, n) => !!di(t, n) || e.has(t, n),
			}))(ri);
			class fi {
				constructor(e) {
					this.container = e;
				}
				getPlatformInfoString() {
					return this.container
						.getProviders()
						.map((e) => {
							if (
								(function (e) {
									const t = e.getComponent();
									return (
										"VERSION" ===
										(null === t || void 0 === t
											? void 0
											: t.type)
									);
								})(e)
							) {
								const t = e.getImmediate();
								return `${t.library}/${t.version}`;
							}
							return null;
						})
						.filter((e) => e)
						.join(" ");
				}
			}
			const hi = "@firebase/app",
				pi = "0.11.3",
				mi = new Kr("@firebase/app"),
				gi = "@firebase/app-compat",
				yi = "@firebase/analytics-compat",
				vi = "@firebase/analytics",
				_i = "@firebase/app-check-compat",
				bi = "@firebase/app-check",
				wi = "@firebase/auth",
				ki = "@firebase/auth-compat",
				Si = "@firebase/database",
				Ci = "@firebase/data-connect",
				Ei = "@firebase/database-compat",
				xi = "@firebase/functions",
				Ti = "@firebase/functions-compat",
				Pi = "@firebase/installations",
				Ni = "@firebase/installations-compat",
				Ii = "@firebase/messaging",
				Ai = "@firebase/messaging-compat",
				Oi = "@firebase/performance",
				Ri = "@firebase/performance-compat",
				Di = "@firebase/remote-config",
				Li = "@firebase/remote-config-compat",
				Mi = "@firebase/storage",
				Fi = "@firebase/storage-compat",
				zi = "@firebase/firestore",
				ji = "@firebase/vertexai",
				qi = "@firebase/firestore-compat",
				Ui = "firebase",
				Wi = "[DEFAULT]",
				Bi = {
					[hi]: "fire-core",
					[gi]: "fire-core-compat",
					[vi]: "fire-analytics",
					[yi]: "fire-analytics-compat",
					[bi]: "fire-app-check",
					[_i]: "fire-app-check-compat",
					[wi]: "fire-auth",
					[ki]: "fire-auth-compat",
					[Si]: "fire-rtdb",
					[Ci]: "fire-data-connect",
					[Ei]: "fire-rtdb-compat",
					[xi]: "fire-fn",
					[Ti]: "fire-fn-compat",
					[Pi]: "fire-iid",
					[Ni]: "fire-iid-compat",
					[Ii]: "fire-fcm",
					[Ai]: "fire-fcm-compat",
					[Oi]: "fire-perf",
					[Ri]: "fire-perf-compat",
					[Di]: "fire-rc",
					[Li]: "fire-rc-compat",
					[Mi]: "fire-gcs",
					[Fi]: "fire-gcs-compat",
					[zi]: "fire-fst",
					[qi]: "fire-fst-compat",
					[ji]: "fire-vertex",
					"fire-js": "fire-js",
					[Ui]: "fire-js-all",
				},
				Hi = new Map(),
				Vi = new Map(),
				$i = new Map();
			function Qi(e, t) {
				try {
					e.container.addComponent(t);
				} catch (pf) {
					mi.debug(
						`Component ${t.name} failed to register with FirebaseApp ${e.name}`,
						pf
					);
				}
			}
			function Yi(e, t) {
				e.container.addOrOverwriteComponent(t);
			}
			function Ki(e) {
				const t = e.name;
				if ($i.has(t))
					return (
						mi.debug(
							`There were multiple attempts to register component ${t}.`
						),
						!1
					);
				$i.set(t, e);
				for (const n of Hi.values()) Qi(n, e);
				for (const n of Vi.values()) Qi(n, e);
				return !0;
			}
			function Gi(e, t) {
				const n = e.container
					.getProvider("heartbeat")
					.getImmediate({ optional: !0 });
				return n && n.triggerHeartbeat(), e.container.getProvider(t);
			}
			function Xi(e, t) {
				let n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: Wi;
				Gi(e, t).clearInstance(n);
			}
			function Ji(e) {
				return void 0 !== e.options;
			}
			function Zi(e) {
				return null !== e && void 0 !== e && void 0 !== e.settings;
			}
			function ea() {
				$i.clear();
			}
			const ta = new vr("app", "Firebase", {
				"no-app":
					"No Firebase App '{$appName}' has been created - call initializeApp() first",
				"bad-app-name": "Illegal App name: '{$appName}'",
				"duplicate-app":
					"Firebase App named '{$appName}' already exists with different options or config",
				"app-deleted":
					"Firebase App named '{$appName}' already deleted",
				"server-app-deleted": "Firebase Server App has been deleted",
				"no-options":
					"Need to provide options, when not being deployed to hosting via source.",
				"invalid-app-argument":
					"firebase.{$appName}() takes either no argument or a Firebase App instance.",
				"invalid-log-argument":
					"First argument to `onLog` must be null or a function.",
				"idb-open":
					"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
				"idb-get":
					"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
				"idb-set":
					"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
				"idb-delete":
					"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
				"finalization-registry-not-supported":
					"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
				"invalid-server-app-environment":
					"FirebaseServerApp is not for use in browser environments.",
			});
			class na {
				constructor(e, t, n) {
					(this._isDeleted = !1),
						(this._options = Object.assign({}, e)),
						(this._config = Object.assign({}, t)),
						(this._name = t.name),
						(this._automaticDataCollectionEnabled =
							t.automaticDataCollectionEnabled),
						(this._container = n),
						this.container.addComponent(
							new jr("app", () => this, "PUBLIC")
						);
				}
				get automaticDataCollectionEnabled() {
					return (
						this.checkDestroyed(),
						this._automaticDataCollectionEnabled
					);
				}
				set automaticDataCollectionEnabled(e) {
					this.checkDestroyed(),
						(this._automaticDataCollectionEnabled = e);
				}
				get name() {
					return this.checkDestroyed(), this._name;
				}
				get options() {
					return this.checkDestroyed(), this._options;
				}
				get config() {
					return this.checkDestroyed(), this._config;
				}
				get container() {
					return this._container;
				}
				get isDeleted() {
					return this._isDeleted;
				}
				set isDeleted(e) {
					this._isDeleted = e;
				}
				checkDestroyed() {
					if (this.isDeleted)
						throw ta.create("app-deleted", { appName: this._name });
				}
			}
			function ra(e, t) {
				const n = sr(e.split(".")[1]);
				if (null === n)
					return void console.error(
						`FirebaseServerApp ${t} is invalid: second part could not be parsed.`
					);
				if (void 0 === JSON.parse(n).exp)
					return void console.error(
						`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`
					);
				1e3 * JSON.parse(n).exp - new Date().getTime() <= 0 &&
					console.error(
						`FirebaseServerApp ${t} is invalid: the token has expired.`
					);
			}
			class ia extends na {
				constructor(e, t, n, r) {
					const i =
							void 0 !== t.automaticDataCollectionEnabled &&
							t.automaticDataCollectionEnabled,
						a = { name: n, automaticDataCollectionEnabled: i };
					if (void 0 !== e.apiKey) super(e, a, r);
					else {
						super(e.options, a, r);
					}
					(this._serverConfig = Object.assign(
						{ automaticDataCollectionEnabled: i },
						t
					)),
						this._serverConfig.authIdToken &&
							ra(this._serverConfig.authIdToken, "authIdToken"),
						this._serverConfig.appCheckToken &&
							ra(
								this._serverConfig.appCheckToken,
								"appCheckToken"
							),
						(this._finalizationRegistry = null),
						"undefined" !== typeof FinalizationRegistry &&
							(this._finalizationRegistry =
								new FinalizationRegistry(() => {
									this.automaticCleanup();
								})),
						(this._refCount = 0),
						this.incRefCount(this._serverConfig.releaseOnDeref),
						(this._serverConfig.releaseOnDeref = void 0),
						(t.releaseOnDeref = void 0),
						da(hi, pi, "serverapp");
				}
				toJSON() {}
				get refCount() {
					return this._refCount;
				}
				incRefCount(e) {
					this.isDeleted ||
						(this._refCount++,
						void 0 !== e &&
							null !== this._finalizationRegistry &&
							this._finalizationRegistry.register(e, this));
				}
				decRefCount() {
					return this.isDeleted ? 0 : --this._refCount;
				}
				automaticCleanup() {
					ua(this);
				}
				get settings() {
					return this.checkDestroyed(), this._serverConfig;
				}
				checkDestroyed() {
					if (this.isDeleted) throw ta.create("server-app-deleted");
				}
			}
			const aa = "11.5.0";
			function oa(e) {
				let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {},
					n = e;
				if ("object" !== typeof t) {
					t = { name: t };
				}
				const r = Object.assign(
						{ name: Wi, automaticDataCollectionEnabled: !1 },
						t
					),
					i = r.name;
				if ("string" !== typeof i || !i)
					throw ta.create("bad-app-name", { appName: String(i) });
				if ((n || (n = dr()), !n)) throw ta.create("no-options");
				const a = Hi.get(i);
				if (a) {
					if (Tr(n, a.options) && Tr(r, a.config)) return a;
					throw ta.create("duplicate-app", { appName: i });
				}
				const o = new Wr(i);
				for (const l of $i.values()) o.addComponent(l);
				const s = new na(n, r, o);
				return Hi.set(i, s), s;
			}
			function sa(e, t) {
				if (("undefined" !== typeof window || mr()) && !mr())
					throw ta.create("invalid-server-app-environment");
				let n;
				void 0 === t.automaticDataCollectionEnabled &&
					(t.automaticDataCollectionEnabled = !1),
					(n = Ji(e) ? e.options : e);
				const r = Object.assign(Object.assign({}, t), n);
				void 0 !== r.releaseOnDeref && delete r.releaseOnDeref;
				if (
					void 0 !== t.releaseOnDeref &&
					"undefined" === typeof FinalizationRegistry
				)
					throw ta.create("finalization-registry-not-supported", {});
				const i =
						"" +
						((e) =>
							[...e].reduce(
								(e, t) =>
									(Math.imul(31, e) + t.charCodeAt(0)) | 0,
								0
							))(JSON.stringify(r)),
					a = Vi.get(i);
				if (a) return a.incRefCount(t.releaseOnDeref), a;
				const o = new Wr(i);
				for (const l of $i.values()) o.addComponent(l);
				const s = new ia(n, t, i, o);
				return Vi.set(i, s), s;
			}
			function la() {
				let e =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: Wi;
				const t = Hi.get(e);
				if (!t && e === Wi && dr()) return oa();
				if (!t) throw ta.create("no-app", { appName: e });
				return t;
			}
			function ca() {
				return Array.from(Hi.values());
			}
			async function ua(e) {
				let t = !1;
				const n = e.name;
				if (Hi.has(n)) (t = !0), Hi.delete(n);
				else if (Vi.has(n)) {
					e.decRefCount() <= 0 && (Vi.delete(n), (t = !0));
				}
				t &&
					(await Promise.all(
						e.container.getProviders().map((e) => e.delete())
					),
					(e.isDeleted = !0));
			}
			function da(e, t, n) {
				var r;
				let i = null !== (r = Bi[e]) && void 0 !== r ? r : e;
				n && (i += `-${n}`);
				const a = i.match(/\s|\//),
					o = t.match(/\s|\//);
				if (a || o) {
					const e = [
						`Unable to register library "${i}" with version "${t}":`,
					];
					return (
						a &&
							e.push(
								`library name "${i}" contains illegal characters (whitespace or "/")`
							),
						a && o && e.push("and"),
						o &&
							e.push(
								`version name "${t}" contains illegal characters (whitespace or "/")`
							),
						void mi.warn(e.join(" "))
					);
				}
				Ki(
					new jr(
						`${i}-version`,
						() => ({ library: i, version: t }),
						"VERSION"
					)
				);
			}
			function fa(e, t) {
				if (null !== e && "function" !== typeof e)
					throw ta.create("invalid-log-argument");
				!(function (e, t) {
					for (const n of Br) {
						let r = null;
						t && t.level && (r = Vr[t.level]),
							(n.userLogHandler =
								null === e
									? null
									: function (t, n) {
											for (
												var i = arguments.length,
													a = new Array(
														i > 2 ? i - 2 : 0
													),
													o = 2;
												o < i;
												o++
											)
												a[o - 2] = arguments[o];
											const s = a
												.map((e) => {
													if (null == e) return null;
													if ("string" === typeof e)
														return e;
													if (
														"number" === typeof e ||
														"boolean" === typeof e
													)
														return e.toString();
													if (e instanceof Error)
														return e.message;
													try {
														return JSON.stringify(
															e
														);
													} catch (t) {
														return null;
													}
												})
												.filter((e) => e)
												.join(" ");
											n >=
												(null !== r && void 0 !== r
													? r
													: t.logLevel) &&
												e({
													level: Hr[n].toLowerCase(),
													message: s,
													args: a,
													type: t.name,
												});
									  });
					}
				})(e, t);
			}
			function ha(e) {
				var t;
				(t = e),
					Br.forEach((e) => {
						e.setLogLevel(t);
					});
			}
			const pa = "firebase-heartbeat-store";
			let ma = null;
			function ga() {
				return (
					ma ||
						(ma = (function (e, t) {
							let {
								blocked: n,
								upgrade: r,
								blocking: i,
								terminated: a,
							} = arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: {};
							const o = indexedDB.open(e, t),
								s = oi(o);
							return (
								r &&
									o.addEventListener("upgradeneeded", (e) => {
										r(
											oi(o.result),
											e.oldVersion,
											e.newVersion,
											oi(o.transaction),
											e
										);
									}),
								n &&
									o.addEventListener("blocked", (e) =>
										n(e.oldVersion, e.newVersion, e)
									),
								s
									.then((e) => {
										a &&
											e.addEventListener("close", () =>
												a()
											),
											i &&
												e.addEventListener(
													"versionchange",
													(e) =>
														i(
															e.oldVersion,
															e.newVersion,
															e
														)
												);
									})
									.catch(() => {}),
								s
							);
						})("firebase-heartbeat-database", 1, {
							upgrade: (e, t) => {
								if (0 === t)
									try {
										e.createObjectStore(pa);
									} catch (pf) {
										console.warn(pf);
									}
							},
						}).catch((e) => {
							throw ta.create("idb-open", {
								originalErrorMessage: e.message,
							});
						})),
					ma
				);
			}
			async function ya(e, t) {
				try {
					const n = (await ga()).transaction(pa, "readwrite"),
						r = n.objectStore(pa);
					await r.put(t, va(e)), await n.done;
				} catch (pf) {
					if (pf instanceof yr) mi.warn(pf.message);
					else {
						const t = ta.create("idb-set", {
							originalErrorMessage:
								null === pf || void 0 === pf
									? void 0
									: pf.message,
						});
						mi.warn(t.message);
					}
				}
			}
			function va(e) {
				return `${e.name}!${e.options.appId}`;
			}
			class _a {
				constructor(e) {
					(this.container = e), (this._heartbeatsCache = null);
					const t = this.container.getProvider("app").getImmediate();
					(this._storage = new wa(t)),
						(this._heartbeatsCachePromise = this._storage
							.read()
							.then((e) => ((this._heartbeatsCache = e), e)));
				}
				async triggerHeartbeat() {
					var e, t;
					try {
						const n = this.container
								.getProvider("platform-logger")
								.getImmediate()
								.getPlatformInfoString(),
							r = ba();
						if (
							null ==
								(null === (e = this._heartbeatsCache) ||
								void 0 === e
									? void 0
									: e.heartbeats) &&
							((this._heartbeatsCache = await this
								._heartbeatsCachePromise),
							null ==
								(null === (t = this._heartbeatsCache) ||
								void 0 === t
									? void 0
									: t.heartbeats))
						)
							return;
						if (
							this._heartbeatsCache.lastSentHeartbeatDate === r ||
							this._heartbeatsCache.heartbeats.some(
								(e) => e.date === r
							)
						)
							return;
						if (
							(this._heartbeatsCache.heartbeats.push({
								date: r,
								agent: n,
							}),
							this._heartbeatsCache.heartbeats.length > 30)
						) {
							const e = (function (e) {
								if (0 === e.length) return -1;
								let t = 0,
									n = e[0].date;
								for (let r = 1; r < e.length; r++)
									e[r].date < n && ((n = e[r].date), (t = r));
								return t;
							})(this._heartbeatsCache.heartbeats);
							this._heartbeatsCache.heartbeats.splice(e, 1);
						}
						return this._storage.overwrite(this._heartbeatsCache);
					} catch (pf) {
						mi.warn(pf);
					}
				}
				async getHeartbeatsHeader() {
					var e;
					try {
						if (
							(null === this._heartbeatsCache &&
								(await this._heartbeatsCachePromise),
							null ==
								(null === (e = this._heartbeatsCache) ||
								void 0 === e
									? void 0
									: e.heartbeats) ||
								0 === this._heartbeatsCache.heartbeats.length)
						)
							return "";
						const t = ba(),
							{ heartbeatsToSend: n, unsentEntries: r } =
								(function (e) {
									let t =
										arguments.length > 1 &&
										void 0 !== arguments[1]
											? arguments[1]
											: 1024;
									const n = [];
									let r = e.slice();
									for (const i of e) {
										const e = n.find(
											(e) => e.agent === i.agent
										);
										if (e) {
											if (
												(e.dates.push(i.date),
												ka(n) > t)
											) {
												e.dates.pop();
												break;
											}
										} else if (
											(n.push({
												agent: i.agent,
												dates: [i.date],
											}),
											ka(n) > t)
										) {
											n.pop();
											break;
										}
										r = r.slice(1);
									}
									return {
										heartbeatsToSend: n,
										unsentEntries: r,
									};
								})(this._heartbeatsCache.heartbeats),
							i = or(
								JSON.stringify({ version: 2, heartbeats: n })
							);
						return (
							(this._heartbeatsCache.lastSentHeartbeatDate = t),
							r.length > 0
								? ((this._heartbeatsCache.heartbeats = r),
								  await this._storage.overwrite(
										this._heartbeatsCache
								  ))
								: ((this._heartbeatsCache.heartbeats = []),
								  this._storage.overwrite(
										this._heartbeatsCache
								  )),
							i
						);
					} catch (pf) {
						return mi.warn(pf), "";
					}
				}
			}
			function ba() {
				return new Date().toISOString().substring(0, 10);
			}
			class wa {
				constructor(e) {
					(this.app = e),
						(this._canUseIndexedDBPromise =
							this.runIndexedDBEnvironmentCheck());
				}
				async runIndexedDBEnvironmentCheck() {
					return (
						!!(function () {
							try {
								return "object" === typeof indexedDB;
							} catch (pf) {
								return !1;
							}
						})() &&
						new Promise((e, t) => {
							try {
								let n = !0;
								const r =
										"validate-browser-context-for-indexeddb-analytics-module",
									i = self.indexedDB.open(r);
								(i.onsuccess = () => {
									i.result.close(),
										n || self.indexedDB.deleteDatabase(r),
										e(!0);
								}),
									(i.onupgradeneeded = () => {
										n = !1;
									}),
									(i.onerror = () => {
										var e;
										t(
											(null === (e = i.error) ||
											void 0 === e
												? void 0
												: e.message) || ""
										);
									});
							} catch (Qa) {
								t(Qa);
							}
						})
							.then(() => !0)
							.catch(() => !1)
					);
				}
				async read() {
					if (await this._canUseIndexedDBPromise) {
						const e = await (async function (e) {
							try {
								const t = (await ga()).transaction(pa),
									n = await t.objectStore(pa).get(va(e));
								return await t.done, n;
							} catch (pf) {
								if (pf instanceof yr) mi.warn(pf.message);
								else {
									const t = ta.create("idb-get", {
										originalErrorMessage:
											null === pf || void 0 === pf
												? void 0
												: pf.message,
									});
									mi.warn(t.message);
								}
							}
						})(this.app);
						return (
							null === e || void 0 === e ? void 0 : e.heartbeats
						)
							? e
							: { heartbeats: [] };
					}
					return { heartbeats: [] };
				}
				async overwrite(e) {
					var t;
					if (await this._canUseIndexedDBPromise) {
						const n = await this.read();
						return ya(this.app, {
							lastSentHeartbeatDate:
								null !== (t = e.lastSentHeartbeatDate) &&
								void 0 !== t
									? t
									: n.lastSentHeartbeatDate,
							heartbeats: e.heartbeats,
						});
					}
				}
				async add(e) {
					var t;
					if (await this._canUseIndexedDBPromise) {
						const n = await this.read();
						return ya(this.app, {
							lastSentHeartbeatDate:
								null !== (t = e.lastSentHeartbeatDate) &&
								void 0 !== t
									? t
									: n.lastSentHeartbeatDate,
							heartbeats: [...n.heartbeats, ...e.heartbeats],
						});
					}
				}
			}
			function ka(e) {
				return or(JSON.stringify({ version: 2, heartbeats: e })).length;
			}
			var Sa;
			(Sa = ""),
				Ki(new jr("platform-logger", (e) => new fi(e), "PRIVATE")),
				Ki(new jr("heartbeat", (e) => new _a(e), "PRIVATE")),
				da(hi, pi, Sa),
				da(hi, pi, "esm2017"),
				da("fire-js", "");
			class Ca {
				constructor(e, t) {
					(this._delegate = e),
						(this.firebase = t),
						Qi(e, new jr("app-compat", () => this, "PUBLIC")),
						(this.container = e.container);
				}
				get automaticDataCollectionEnabled() {
					return this._delegate.automaticDataCollectionEnabled;
				}
				set automaticDataCollectionEnabled(e) {
					this._delegate.automaticDataCollectionEnabled = e;
				}
				get name() {
					return this._delegate.name;
				}
				get options() {
					return this._delegate.options;
				}
				delete() {
					return new Promise((e) => {
						this._delegate.checkDestroyed(), e();
					}).then(
						() => (
							this.firebase.INTERNAL.removeApp(this.name),
							ua(this._delegate)
						)
					);
				}
				_getService(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: Wi;
					var n;
					this._delegate.checkDestroyed();
					const r = this._delegate.container.getProvider(e);
					return (
						r.isInitialized() ||
							"EXPLICIT" !==
								(null === (n = r.getComponent()) || void 0 === n
									? void 0
									: n.instantiationMode) ||
							r.initialize(),
						r.getImmediate({ identifier: t })
					);
				}
				_removeServiceInstance(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: Wi;
					this._delegate.container.getProvider(e).clearInstance(t);
				}
				_addComponent(e) {
					Qi(this._delegate, e);
				}
				_addOrOverwriteComponent(e) {
					Yi(this._delegate, e);
				}
				toJSON() {
					return {
						name: this.name,
						automaticDataCollectionEnabled:
							this.automaticDataCollectionEnabled,
						options: this.options,
					};
				}
			}
			const Ea = new vr("app-compat", "Firebase", {
				"no-app":
					"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
				"invalid-app-argument":
					"firebase.{$appName}() takes either no argument or a Firebase App instance.",
			});
			const xa = (function t() {
					const n = (function (t) {
						const n = {},
							r = {
								__esModule: !0,
								initializeApp: function (e) {
									const i = oa(
										e,
										arguments.length > 1 &&
											void 0 !== arguments[1]
											? arguments[1]
											: {}
									);
									if (Sr(n, i.name)) return n[i.name];
									const a = new t(i, r);
									return (n[i.name] = a), a;
								},
								app: i,
								registerVersion: da,
								setLogLevel: ha,
								onLog: fa,
								apps: null,
								SDK_VERSION: aa,
								INTERNAL: {
									registerComponent: function (e) {
										const n = e.name,
											a = n.replace("-compat", "");
										if (Ki(e) && "PUBLIC" === e.type) {
											const o = function () {
												let e =
													arguments.length > 0 &&
													void 0 !== arguments[0]
														? arguments[0]
														: i();
												if ("function" !== typeof e[a])
													throw Ea.create(
														"invalid-app-argument",
														{ appName: n }
													);
												return e[a]();
											};
											void 0 !== e.serviceProps &&
												lr(o, e.serviceProps),
												(r[a] = o),
												(t.prototype[a] = function () {
													const t =
														this._getService.bind(
															this,
															n
														);
													for (
														var r =
																arguments.length,
															i = new Array(r),
															a = 0;
														a < r;
														a++
													)
														i[a] = arguments[a];
													return t.apply(
														this,
														e.multipleInstances
															? i
															: []
													);
												});
										}
										return "PUBLIC" === e.type
											? r[a]
											: null;
									},
									removeApp: function (e) {
										delete n[e];
									},
									useAsService: function (e, t) {
										return "serverAuth" === t ? null : t;
									},
									modularAPIs: e,
								},
							};
						function i(e) {
							if (!Sr(n, (e = e || Wi)))
								throw Ea.create("no-app", { appName: e });
							return n[e];
						}
						return (
							(r.default = r),
							Object.defineProperty(r, "apps", {
								get: function () {
									return Object.keys(n).map((e) => n[e]);
								},
							}),
							(i.App = t),
							r
						);
					})(Ca);
					return (
						(n.INTERNAL = Object.assign(
							Object.assign({}, n.INTERNAL),
							{
								createFirebaseNamespace: t,
								extendNamespace: function (e) {
									lr(n, e);
								},
								createSubscribe: Ir,
								ErrorFactory: vr,
								deepExtend: lr,
							}
						)),
						n
					);
				})(),
				Ta = new Kr("@firebase/app-compat");
			try {
				const e = cr();
				if (void 0 !== e.firebase) {
					Ta.warn(
						"\n      Warning: Firebase is already defined in the global scope. Please make sure\n      Firebase library is only loaded once.\n    "
					);
					const t = e.firebase.SDK_VERSION;
					t &&
						t.indexOf("LITE") >= 0 &&
						Ta.warn(
							"\n        Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n        "
						);
				}
			} catch (mf) {}
			const Pa = xa;
			!(function (e) {
				da("@firebase/app-compat", "0.2.52", e);
			})();
			Pa.registerVersion("firebase", "11.5.0", "app-compat");
			const Na = "@firebase/database",
				Ia = "1.0.14";
			let Aa = "";
			function Oa(e) {
				Aa = e;
			}
			class Ra {
				constructor(e) {
					(this.domStorage_ = e), (this.prefix_ = "firebase:");
				}
				set(e, t) {
					null == t
						? this.domStorage_.removeItem(this.prefixedName_(e))
						: this.domStorage_.setItem(
								this.prefixedName_(e),
								wr(t)
						  );
				}
				get(e) {
					const t = this.domStorage_.getItem(this.prefixedName_(e));
					return null == t ? null : br(t);
				}
				remove(e) {
					this.domStorage_.removeItem(this.prefixedName_(e));
				}
				prefixedName_(e) {
					return this.prefix_ + e;
				}
				toString() {
					return this.domStorage_.toString();
				}
			}
			class Da {
				constructor() {
					(this.cache_ = {}), (this.isInMemoryStorage = !0);
				}
				set(e, t) {
					null == t ? delete this.cache_[e] : (this.cache_[e] = t);
				}
				get(e) {
					return Sr(this.cache_, e) ? this.cache_[e] : null;
				}
				remove(e) {
					delete this.cache_[e];
				}
			}
			const La = function (e) {
					try {
						if (
							"undefined" !== typeof window &&
							"undefined" !== typeof window[e]
						) {
							const t = window[e];
							return (
								t.setItem("firebase:sentinel", "cache"),
								t.removeItem("firebase:sentinel"),
								new Ra(t)
							);
						}
					} catch (pf) {}
					return new Da();
				},
				Ma = La("localStorage"),
				Fa = La("sessionStorage"),
				za = new Kr("@firebase/database"),
				ja = (function () {
					let e = 1;
					return function () {
						return e++;
					};
				})(),
				qa = function (e) {
					const t = (function (e) {
							const t = [];
							let n = 0;
							for (let r = 0; r < e.length; r++) {
								let i = e.charCodeAt(r);
								if (i >= 55296 && i <= 56319) {
									const t = i - 55296;
									r++,
										er(
											r < e.length,
											"Surrogate pair missing trail surrogate."
										),
										(i =
											65536 +
											(t << 10) +
											(e.charCodeAt(r) - 56320));
								}
								i < 128
									? (t[n++] = i)
									: i < 2048
									? ((t[n++] = (i >> 6) | 192),
									  (t[n++] = (63 & i) | 128))
									: i < 65536
									? ((t[n++] = (i >> 12) | 224),
									  (t[n++] = ((i >> 6) & 63) | 128),
									  (t[n++] = (63 & i) | 128))
									: ((t[n++] = (i >> 18) | 240),
									  (t[n++] = ((i >> 12) & 63) | 128),
									  (t[n++] = ((i >> 6) & 63) | 128),
									  (t[n++] = (63 & i) | 128));
							}
							return t;
						})(e),
						n = new Nr();
					n.update(t);
					const r = n.digest();
					return rr.encodeByteArray(r);
				},
				Ua = function () {
					let e = "";
					for (let t = 0; t < arguments.length; t++) {
						const n =
							t < 0 || arguments.length <= t
								? void 0
								: arguments[t];
						Array.isArray(n) ||
						(n &&
							"object" === typeof n &&
							"number" === typeof n.length)
							? (e += Ua.apply(null, n))
							: (e += "object" === typeof n ? wr(n) : n),
							(e += " ");
					}
					return e;
				};
			let Wa = null,
				Ba = !0;
			const Ha = function (e, t) {
					er(
						!t || !0 === e || !1 === e,
						"Can't turn on custom loggers persistently."
					),
						!0 === e
							? ((za.logLevel = Hr.VERBOSE),
							  (Wa = za.log.bind(za)),
							  t && Fa.set("logging_enabled", !0))
							: "function" === typeof e
							? (Wa = e)
							: ((Wa = null), Fa.remove("logging_enabled"));
				},
				Va = function () {
					if (
						(!0 === Ba &&
							((Ba = !1),
							null === Wa &&
								!0 === Fa.get("logging_enabled") &&
								Ha(!0)),
						Wa)
					) {
						for (
							var e = arguments.length, t = new Array(e), n = 0;
							n < e;
							n++
						)
							t[n] = arguments[n];
						const r = Ua.apply(null, t);
						Wa(r);
					}
				},
				$a = function (e) {
					return function () {
						for (
							var t = arguments.length, n = new Array(t), r = 0;
							r < t;
							r++
						)
							n[r] = arguments[r];
						Va(e, ...n);
					};
				},
				Qa = function () {
					const e = "FIREBASE INTERNAL ERROR: " + Ua(...arguments);
					za.error(e);
				},
				Ya = function () {
					const e = `FIREBASE FATAL ERROR: ${Ua(...arguments)}`;
					throw (za.error(e), new Error(e));
				},
				Ka = function () {
					const e = "FIREBASE WARNING: " + Ua(...arguments);
					za.warn(e);
				},
				Ga = function (e) {
					return (
						"number" === typeof e &&
						(e !== e ||
							e === Number.POSITIVE_INFINITY ||
							e === Number.NEGATIVE_INFINITY)
					);
				},
				Xa = "[MIN_NAME]",
				Ja = "[MAX_NAME]",
				Za = function (e, t) {
					if (e === t) return 0;
					if (e === Xa || t === Ja) return -1;
					if (t === Xa || e === Ja) return 1;
					{
						const n = so(e),
							r = so(t);
						return null !== n
							? null !== r
								? n - r === 0
									? e.length - t.length
									: n - r
								: -1
							: null !== r
							? 1
							: e < t
							? -1
							: 1;
					}
				},
				eo = function (e, t) {
					return e === t ? 0 : e < t ? -1 : 1;
				},
				to = function (e, t) {
					if (t && e in t) return t[e];
					throw new Error(
						"Missing required key (" + e + ") in object: " + wr(t)
					);
				},
				no = function (e) {
					if ("object" !== typeof e || null === e) return wr(e);
					const t = [];
					for (const r in e) t.push(r);
					t.sort();
					let n = "{";
					for (let r = 0; r < t.length; r++)
						0 !== r && (n += ","),
							(n += wr(t[r])),
							(n += ":"),
							(n += no(e[t[r]]));
					return (n += "}"), n;
				},
				ro = function (e, t) {
					const n = e.length;
					if (n <= t) return [e];
					const r = [];
					for (let i = 0; i < n; i += t)
						i + t > n
							? r.push(e.substring(i, n))
							: r.push(e.substring(i, i + t));
					return r;
				};
			function io(e, t) {
				for (const n in e) e.hasOwnProperty(n) && t(n, e[n]);
			}
			const ao = function (e) {
				er(!Ga(e), "Invalid JSON number");
				const t = 1023;
				let n, r, i, a, o;
				0 === e
					? ((r = 0), (i = 0), (n = 1 / e === -1 / 0 ? 1 : 0))
					: ((n = e < 0),
					  (e = Math.abs(e)) >= Math.pow(2, -1022)
							? ((a = Math.min(
									Math.floor(Math.log(e) / Math.LN2),
									t
							  )),
							  (r = a + t),
							  (i = Math.round(
									e * Math.pow(2, 52 - a) - Math.pow(2, 52)
							  )))
							: ((r = 0),
							  (i = Math.round(e / Math.pow(2, -1074)))));
				const s = [];
				for (o = 52; o; o -= 1)
					s.push(i % 2 ? 1 : 0), (i = Math.floor(i / 2));
				for (o = 11; o; o -= 1)
					s.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
				s.push(n ? 1 : 0), s.reverse();
				const l = s.join("");
				let c = "";
				for (o = 0; o < 64; o += 8) {
					let e = parseInt(l.substr(o, 8), 2).toString(16);
					1 === e.length && (e = "0" + e), (c += e);
				}
				return c.toLowerCase();
			};
			const oo = new RegExp("^-?(0*)\\d{1,10}$"),
				so = function (e) {
					if (oo.test(e)) {
						const t = Number(e);
						if (t >= -2147483648 && t <= 2147483647) return t;
					}
					return null;
				},
				lo = function (e) {
					try {
						e();
					} catch (pf) {
						setTimeout(() => {
							const t = pf.stack || "";
							throw (
								(Ka(
									"Exception was thrown by user callback.",
									t
								),
								pf)
							);
						}, Math.floor(0));
					}
				},
				co = function (e, t) {
					const n = setTimeout(e, t);
					return (
						"number" === typeof n &&
						"undefined" !== typeof Deno &&
						Deno.unrefTimer
							? Deno.unrefTimer(n)
							: "object" === typeof n && n.unref && n.unref(),
						n
					);
				};
			class uo {
				constructor(e, t) {
					(this.appCheckProvider = t),
						(this.appName = e.name),
						Zi(e) &&
							e.settings.appCheckToken &&
							(this.serverAppAppCheckToken =
								e.settings.appCheckToken),
						(this.appCheck =
							null === t || void 0 === t
								? void 0
								: t.getImmediate({ optional: !0 })),
						this.appCheck ||
							null === t ||
							void 0 === t ||
							t.get().then((e) => (this.appCheck = e));
				}
				getToken(e) {
					if (this.serverAppAppCheckToken) {
						if (e)
							throw new Error(
								"Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed."
							);
						return Promise.resolve({
							token: this.serverAppAppCheckToken,
						});
					}
					return this.appCheck
						? this.appCheck.getToken(e)
						: new Promise((t, n) => {
								setTimeout(() => {
									this.appCheck
										? this.getToken(e).then(t, n)
										: t(null);
								}, 0);
						  });
				}
				addTokenChangeListener(e) {
					var t;
					null === (t = this.appCheckProvider) ||
						void 0 === t ||
						t.get().then((t) => t.addTokenListener(e));
				}
				notifyForInvalidToken() {
					Ka(
						`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`
					);
				}
			}
			class fo {
				constructor(e, t, n) {
					(this.appName_ = e),
						(this.firebaseOptions_ = t),
						(this.authProvider_ = n),
						(this.auth_ = null),
						(this.auth_ = n.getImmediate({ optional: !0 })),
						this.auth_ || n.onInit((e) => (this.auth_ = e));
				}
				getToken(e) {
					return this.auth_
						? this.auth_
								.getToken(e)
								.catch((e) =>
									e && "auth/token-not-initialized" === e.code
										? (Va(
												"Got auth/token-not-initialized error.  Treating as null token."
										  ),
										  null)
										: Promise.reject(e)
								)
						: new Promise((t, n) => {
								setTimeout(() => {
									this.auth_
										? this.getToken(e).then(t, n)
										: t(null);
								}, 0);
						  });
				}
				addTokenChangeListener(e) {
					this.auth_
						? this.auth_.addAuthTokenListener(e)
						: this.authProvider_
								.get()
								.then((t) => t.addAuthTokenListener(e));
				}
				removeTokenChangeListener(e) {
					this.authProvider_
						.get()
						.then((t) => t.removeAuthTokenListener(e));
				}
				notifyForInvalidToken() {
					let e =
						'Provided authentication credentials for the app named "' +
						this.appName_ +
						'" are invalid. This usually indicates your app was not initialized correctly. ';
					"credential" in this.firebaseOptions_
						? (e +=
								'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
						: "serviceAccount" in this.firebaseOptions_
						? (e +=
								'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
						: (e +=
								'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
						Ka(e);
				}
			}
			class ho {
				constructor(e) {
					this.accessToken = e;
				}
				getToken(e) {
					return Promise.resolve({ accessToken: this.accessToken });
				}
				addTokenChangeListener(e) {
					e(this.accessToken);
				}
				removeTokenChangeListener(e) {}
				notifyForInvalidToken() {}
			}
			ho.OWNER = "owner";
			const po = "5",
				mo =
					/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
				go = "ac",
				yo = "websocket",
				vo = "long_polling";
			class _o {
				constructor(e, t, n, r) {
					let i =
							arguments.length > 4 &&
							void 0 !== arguments[4] &&
							arguments[4],
						a =
							arguments.length > 5 && void 0 !== arguments[5]
								? arguments[5]
								: "",
						o =
							arguments.length > 6 &&
							void 0 !== arguments[6] &&
							arguments[6],
						s =
							arguments.length > 7 &&
							void 0 !== arguments[7] &&
							arguments[7],
						l =
							arguments.length > 8 && void 0 !== arguments[8]
								? arguments[8]
								: null;
					(this.secure = t),
						(this.namespace = n),
						(this.webSocketOnly = r),
						(this.nodeAdmin = i),
						(this.persistenceKey = a),
						(this.includeNamespaceInQueryParams = o),
						(this.isUsingEmulator = s),
						(this.emulatorOptions = l),
						(this._host = e.toLowerCase()),
						(this._domain = this._host.substr(
							this._host.indexOf(".") + 1
						)),
						(this.internalHost = Ma.get("host:" + e) || this._host);
				}
				isCacheableHost() {
					return "s-" === this.internalHost.substr(0, 2);
				}
				isCustomHost() {
					return (
						"firebaseio.com" !== this._domain &&
						"firebaseio-demo.com" !== this._domain
					);
				}
				get host() {
					return this._host;
				}
				set host(e) {
					e !== this.internalHost &&
						((this.internalHost = e),
						this.isCacheableHost() &&
							Ma.set("host:" + this._host, this.internalHost));
				}
				toString() {
					let e = this.toURLString();
					return (
						this.persistenceKey &&
							(e += "<" + this.persistenceKey + ">"),
						e
					);
				}
				toURLString() {
					const e = this.secure ? "https://" : "http://",
						t = this.includeNamespaceInQueryParams
							? `?ns=${this.namespace}`
							: "";
					return `${e}${this.host}/${t}`;
				}
			}
			function bo(e, t, n) {
				let r;
				if (
					(er("string" === typeof t, "typeof type must == string"),
					er("object" === typeof n, "typeof params must == object"),
					t === yo)
				)
					r =
						(e.secure ? "wss://" : "ws://") +
						e.internalHost +
						"/.ws?";
				else {
					if (t !== vo)
						throw new Error("Unknown connection type: " + t);
					r =
						(e.secure ? "https://" : "http://") +
						e.internalHost +
						"/.lp?";
				}
				(function (e) {
					return (
						e.host !== e.internalHost ||
						e.isCustomHost() ||
						e.includeNamespaceInQueryParams
					);
				})(e) && (n.ns = e.namespace);
				const i = [];
				return (
					io(n, (e, t) => {
						i.push(e + "=" + t);
					}),
					r + i.join("&")
				);
			}
			class wo {
				constructor() {
					this.counters_ = {};
				}
				incrementCounter(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: 1;
					Sr(this.counters_, e) || (this.counters_[e] = 0),
						(this.counters_[e] += t);
				}
				get() {
					return lr(void 0, this.counters_);
				}
			}
			const ko = {},
				So = {};
			function Co(e) {
				const t = e.toString();
				return ko[t] || (ko[t] = new wo()), ko[t];
			}
			class Eo {
				constructor(e) {
					(this.onMessage_ = e),
						(this.pendingResponses = []),
						(this.currentResponseNum = 0),
						(this.closeAfterResponse = -1),
						(this.onClose = null);
				}
				closeAfter(e, t) {
					(this.closeAfterResponse = e),
						(this.onClose = t),
						this.closeAfterResponse < this.currentResponseNum &&
							(this.onClose(), (this.onClose = null));
				}
				handleResponse(e, t) {
					for (
						this.pendingResponses[e] = t;
						this.pendingResponses[this.currentResponseNum];

					) {
						const e =
							this.pendingResponses[this.currentResponseNum];
						delete this.pendingResponses[this.currentResponseNum];
						for (let t = 0; t < e.length; ++t)
							e[t] &&
								lo(() => {
									this.onMessage_(e[t]);
								});
						if (
							this.currentResponseNum === this.closeAfterResponse
						) {
							this.onClose &&
								(this.onClose(), (this.onClose = null));
							break;
						}
						this.currentResponseNum++;
					}
				}
			}
			const xo = "start";
			class To {
				constructor(e, t, n, r, i, a, o) {
					(this.connId = e),
						(this.repoInfo = t),
						(this.applicationId = n),
						(this.appCheckToken = r),
						(this.authToken = i),
						(this.transportSessionId = a),
						(this.lastSessionId = o),
						(this.bytesSent = 0),
						(this.bytesReceived = 0),
						(this.everConnected_ = !1),
						(this.log_ = $a(e)),
						(this.stats_ = Co(t)),
						(this.urlFn = (e) => (
							this.appCheckToken && (e[go] = this.appCheckToken),
							bo(t, vo, e)
						));
				}
				open(e, t) {
					var n = this;
					(this.curSegmentNum = 0),
						(this.onDisconnect_ = t),
						(this.myPacketOrderer = new Eo(e)),
						(this.isClosed_ = !1),
						(this.connectTimeoutTimer_ = setTimeout(() => {
							this.log_("Timed out trying to connect."),
								this.onClosed_(),
								(this.connectTimeoutTimer_ = null);
						}, Math.floor(3e4))),
						(function (e) {
							if (gr() || "complete" === document.readyState) e();
							else {
								let t = !1;
								const n = function () {
									document.body
										? t || ((t = !0), e())
										: setTimeout(n, Math.floor(10));
								};
								document.addEventListener
									? (document.addEventListener(
											"DOMContentLoaded",
											n,
											!1
									  ),
									  window.addEventListener("load", n, !1))
									: document.attachEvent &&
									  (document.attachEvent(
											"onreadystatechange",
											() => {
												"complete" ===
													document.readyState && n();
											}
									  ),
									  window.attachEvent("onload", n));
							}
						})(() => {
							if (this.isClosed_) return;
							this.scriptTagHolder = new Po(
								function () {
									for (
										var e = arguments.length,
											t = new Array(e),
											r = 0;
										r < e;
										r++
									)
										t[r] = arguments[r];
									const [i, a, o, s, l] = t;
									if (
										(n.incrementIncomingBytes_(t),
										n.scriptTagHolder)
									)
										if (
											(n.connectTimeoutTimer_ &&
												(clearTimeout(
													n.connectTimeoutTimer_
												),
												(n.connectTimeoutTimer_ =
													null)),
											(n.everConnected_ = !0),
											i === xo)
										)
											(n.id = a), (n.password = o);
										else {
											if ("close" !== i)
												throw new Error(
													"Unrecognized command received: " +
														i
												);
											a
												? ((n.scriptTagHolder.sendNewPolls =
														!1),
												  n.myPacketOrderer.closeAfter(
														a,
														() => {
															n.onClosed_();
														}
												  ))
												: n.onClosed_();
										}
								},
								function () {
									for (
										var e = arguments.length,
											t = new Array(e),
											r = 0;
										r < e;
										r++
									)
										t[r] = arguments[r];
									const [i, a] = t;
									n.incrementIncomingBytes_(t),
										n.myPacketOrderer.handleResponse(i, a);
								},
								() => {
									this.onClosed_();
								},
								this.urlFn
							);
							const e = {};
							(e[xo] = "t"),
								(e.ser = Math.floor(1e8 * Math.random())),
								this.scriptTagHolder.uniqueCallbackIdentifier &&
									(e.cb =
										this.scriptTagHolder.uniqueCallbackIdentifier),
								(e.v = po),
								this.transportSessionId &&
									(e.s = this.transportSessionId),
								this.lastSessionId &&
									(e.ls = this.lastSessionId),
								this.applicationId &&
									(e.p = this.applicationId),
								this.appCheckToken &&
									(e[go] = this.appCheckToken),
								"undefined" !== typeof location &&
									location.hostname &&
									mo.test(location.hostname) &&
									(e.r = "f");
							const t = this.urlFn(e);
							this.log_("Connecting via long-poll to " + t),
								this.scriptTagHolder.addTag(t, () => {});
						});
				}
				start() {
					this.scriptTagHolder.startLongPoll(this.id, this.password),
						this.addDisconnectPingFrame(this.id, this.password);
				}
				static forceAllow() {
					To.forceAllow_ = !0;
				}
				static forceDisallow() {
					To.forceDisallow_ = !0;
				}
				static isAvailable() {
					return (
						!gr() &&
						(!!To.forceAllow_ ||
							(!To.forceDisallow_ &&
								"undefined" !== typeof document &&
								null != document.createElement &&
								!(
									"object" === typeof window &&
									window.chrome &&
									window.chrome.extension &&
									!/^chrome/.test(window.location.href)
								) &&
								!(
									"object" === typeof Windows &&
									"object" === typeof Windows.UI
								)))
					);
				}
				markConnectionHealthy() {}
				shutdown_() {
					(this.isClosed_ = !0),
						this.scriptTagHolder &&
							(this.scriptTagHolder.close(),
							(this.scriptTagHolder = null)),
						this.myDisconnFrame &&
							(document.body.removeChild(this.myDisconnFrame),
							(this.myDisconnFrame = null)),
						this.connectTimeoutTimer_ &&
							(clearTimeout(this.connectTimeoutTimer_),
							(this.connectTimeoutTimer_ = null));
				}
				onClosed_() {
					this.isClosed_ ||
						(this.log_("Longpoll is closing itself"),
						this.shutdown_(),
						this.onDisconnect_ &&
							(this.onDisconnect_(this.everConnected_),
							(this.onDisconnect_ = null)));
				}
				close() {
					this.isClosed_ ||
						(this.log_("Longpoll is being closed."),
						this.shutdown_());
				}
				send(e) {
					const t = wr(e);
					(this.bytesSent += t.length),
						this.stats_.incrementCounter("bytes_sent", t.length);
					const n = ar(t),
						r = ro(n, 1840);
					for (let i = 0; i < r.length; i++)
						this.scriptTagHolder.enqueueSegment(
							this.curSegmentNum,
							r.length,
							r[i]
						),
							this.curSegmentNum++;
				}
				addDisconnectPingFrame(e, t) {
					if (gr()) return;
					this.myDisconnFrame = document.createElement("iframe");
					const n = { dframe: "t" };
					(n.id = e),
						(n.pw = t),
						(this.myDisconnFrame.src = this.urlFn(n)),
						(this.myDisconnFrame.style.display = "none"),
						document.body.appendChild(this.myDisconnFrame);
				}
				incrementIncomingBytes_(e) {
					const t = wr(e).length;
					(this.bytesReceived += t),
						this.stats_.incrementCounter("bytes_received", t);
				}
			}
			class Po {
				constructor(e, t, n, r) {
					if (
						((this.onDisconnect = n),
						(this.urlFn = r),
						(this.outstandingRequests = new Set()),
						(this.pendingSegs = []),
						(this.currentSerial = Math.floor(1e8 * Math.random())),
						(this.sendNewPolls = !0),
						gr())
					)
						(this.commandCB = e), (this.onMessageCB = t);
					else {
						(this.uniqueCallbackIdentifier = ja()),
							(window[
								"pLPCommand" + this.uniqueCallbackIdentifier
							] = e),
							(window["pRTLPCB" + this.uniqueCallbackIdentifier] =
								t),
							(this.myIFrame = Po.createIFrame_());
						let n = "";
						if (
							this.myIFrame.src &&
							"javascript:" === this.myIFrame.src.substr(0, 11)
						) {
							n =
								'<script>document.domain="' +
								document.domain +
								'";</script>';
						}
						const r = "<html><body>" + n + "</body></html>";
						try {
							this.myIFrame.doc.open(),
								this.myIFrame.doc.write(r),
								this.myIFrame.doc.close();
						} catch (pf) {
							Va("frame writing exception"),
								pf.stack && Va(pf.stack),
								Va(pf);
						}
					}
				}
				static createIFrame_() {
					const e = document.createElement("iframe");
					if (((e.style.display = "none"), !document.body))
						throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
					document.body.appendChild(e);
					try {
						e.contentWindow.document ||
							Va("No IE domain setting required");
					} catch (pf) {
						const n = document.domain;
						e.src =
							"javascript:void((function(){document.open();document.domain='" +
							n +
							"';document.close();})())";
					}
					return (
						e.contentDocument
							? (e.doc = e.contentDocument)
							: e.contentWindow
							? (e.doc = e.contentWindow.document)
							: e.document && (e.doc = e.document),
						e
					);
				}
				close() {
					(this.alive = !1),
						this.myIFrame &&
							((this.myIFrame.doc.body.textContent = ""),
							setTimeout(() => {
								null !== this.myIFrame &&
									(document.body.removeChild(this.myIFrame),
									(this.myIFrame = null));
							}, Math.floor(0)));
					const e = this.onDisconnect;
					e && ((this.onDisconnect = null), e());
				}
				startLongPoll(e, t) {
					for (
						this.myID = e, this.myPW = t, this.alive = !0;
						this.newRequest_();

					);
				}
				newRequest_() {
					if (
						this.alive &&
						this.sendNewPolls &&
						this.outstandingRequests.size <
							(this.pendingSegs.length > 0 ? 2 : 1)
					) {
						this.currentSerial++;
						const e = {};
						(e.id = this.myID),
							(e.pw = this.myPW),
							(e.ser = this.currentSerial);
						let t = this.urlFn(e),
							n = "",
							r = 0;
						for (; this.pendingSegs.length > 0; ) {
							if (
								!(
									this.pendingSegs[0].d.length +
										30 +
										n.length <=
									1870
								)
							)
								break;
							{
								const e = this.pendingSegs.shift();
								(n =
									n +
									"&seg" +
									r +
									"=" +
									e.seg +
									"&ts" +
									r +
									"=" +
									e.ts +
									"&d" +
									r +
									"=" +
									e.d),
									r++;
							}
						}
						return (
							(t += n),
							this.addLongPollTag_(t, this.currentSerial),
							!0
						);
					}
					return !1;
				}
				enqueueSegment(e, t, n) {
					this.pendingSegs.push({ seg: e, ts: t, d: n }),
						this.alive && this.newRequest_();
				}
				addLongPollTag_(e, t) {
					this.outstandingRequests.add(t);
					const n = () => {
							this.outstandingRequests.delete(t),
								this.newRequest_();
						},
						r = setTimeout(n, Math.floor(25e3));
					this.addTag(e, () => {
						clearTimeout(r), n();
					});
				}
				addTag(e, t) {
					gr()
						? this.doNodeLongPoll(e, t)
						: setTimeout(() => {
								try {
									if (!this.sendNewPolls) return;
									const n =
										this.myIFrame.doc.createElement(
											"script"
										);
									(n.type = "text/javascript"),
										(n.async = !0),
										(n.src = e),
										(n.onload = n.onreadystatechange =
											function () {
												const e = n.readyState;
												(e &&
													"loaded" !== e &&
													"complete" !== e) ||
													((n.onload =
														n.onreadystatechange =
															null),
													n.parentNode &&
														n.parentNode.removeChild(
															n
														),
													t());
											}),
										(n.onerror = () => {
											Va(
												"Long-poll script failed to load: " +
													e
											),
												(this.sendNewPolls = !1),
												this.close();
										}),
										this.myIFrame.doc.body.appendChild(n);
								} catch (pf) {}
						  }, Math.floor(1));
				}
			}
			let No = null;
			"undefined" !== typeof MozWebSocket
				? (No = MozWebSocket)
				: "undefined" !== typeof WebSocket && (No = WebSocket);
			class Io {
				constructor(e, t, n, r, i, a, o) {
					(this.connId = e),
						(this.applicationId = n),
						(this.appCheckToken = r),
						(this.authToken = i),
						(this.keepaliveTimer = null),
						(this.frames = null),
						(this.totalFrames = 0),
						(this.bytesSent = 0),
						(this.bytesReceived = 0),
						(this.log_ = $a(this.connId)),
						(this.stats_ = Co(t)),
						(this.connURL = Io.connectionURL_(t, a, o, r, n)),
						(this.nodeAdmin = t.nodeAdmin);
				}
				static connectionURL_(e, t, n, r, i) {
					const a = {};
					return (
						(a.v = po),
						!gr() &&
							"undefined" !== typeof location &&
							location.hostname &&
							mo.test(location.hostname) &&
							(a.r = "f"),
						t && (a.s = t),
						n && (a.ls = n),
						r && (a[go] = r),
						i && (a.p = i),
						bo(e, yo, a)
					);
				}
				open(e, t) {
					(this.onDisconnect = t),
						(this.onMessage = e),
						this.log_("Websocket connecting to " + this.connURL),
						(this.everConnected_ = !1),
						Ma.set("previous_websocket_failure", !0);
					try {
						let e;
						if (gr()) {
							const t = this.nodeAdmin ? "AdminNode" : "Node";
							(e = {
								headers: {
									"User-Agent": `Firebase/${po}/${Aa}/${process.platform}/${t}`,
									"X-Firebase-GMPID":
										this.applicationId || "",
								},
							}),
								this.authToken &&
									(e.headers.Authorization = `Bearer ${this.authToken}`),
								this.appCheckToken &&
									(e.headers["X-Firebase-AppCheck"] =
										this.appCheckToken);
							const n = {
									NODE_ENV: "production",
									PUBLIC_URL: "/kaps",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								},
								r =
									0 === this.connURL.indexOf("wss://")
										? n.HTTPS_PROXY || n.https_proxy
										: n.HTTP_PROXY || n.http_proxy;
							r && (e.proxy = { origin: r });
						}
						this.mySock = new No(this.connURL, [], e);
					} catch (pf) {
						this.log_("Error instantiating WebSocket.");
						const t = pf.message || pf.data;
						return t && this.log_(t), void this.onClosed_();
					}
					(this.mySock.onopen = () => {
						this.log_("Websocket connected."),
							(this.everConnected_ = !0);
					}),
						(this.mySock.onclose = () => {
							this.log_("Websocket connection was disconnected."),
								(this.mySock = null),
								this.onClosed_();
						}),
						(this.mySock.onmessage = (e) => {
							this.handleIncomingFrame(e);
						}),
						(this.mySock.onerror = (e) => {
							this.log_("WebSocket error.  Closing connection.");
							const t = e.message || e.data;
							t && this.log_(t), this.onClosed_();
						});
				}
				start() {}
				static forceDisallow() {
					Io.forceDisallow_ = !0;
				}
				static isAvailable() {
					let e = !1;
					if (
						"undefined" !== typeof navigator &&
						navigator.userAgent
					) {
						const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
							n = navigator.userAgent.match(t);
						n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0);
					}
					return !e && null !== No && !Io.forceDisallow_;
				}
				static previouslyFailed() {
					return (
						Ma.isInMemoryStorage ||
						!0 === Ma.get("previous_websocket_failure")
					);
				}
				markConnectionHealthy() {
					Ma.remove("previous_websocket_failure");
				}
				appendFrame_(e) {
					if (
						(this.frames.push(e),
						this.frames.length === this.totalFrames)
					) {
						const e = this.frames.join("");
						this.frames = null;
						const t = br(e);
						this.onMessage(t);
					}
				}
				handleNewFrameCount_(e) {
					(this.totalFrames = e), (this.frames = []);
				}
				extractFrameCount_(e) {
					if (
						(er(
							null === this.frames,
							"We already have a frame buffer"
						),
						e.length <= 6)
					) {
						const t = Number(e);
						if (!isNaN(t))
							return this.handleNewFrameCount_(t), null;
					}
					return this.handleNewFrameCount_(1), e;
				}
				handleIncomingFrame(e) {
					if (null === this.mySock) return;
					const t = e.data;
					if (
						((this.bytesReceived += t.length),
						this.stats_.incrementCounter(
							"bytes_received",
							t.length
						),
						this.resetKeepAlive(),
						null !== this.frames)
					)
						this.appendFrame_(t);
					else {
						const e = this.extractFrameCount_(t);
						null !== e && this.appendFrame_(e);
					}
				}
				send(e) {
					this.resetKeepAlive();
					const t = wr(e);
					(this.bytesSent += t.length),
						this.stats_.incrementCounter("bytes_sent", t.length);
					const n = ro(t, 16384);
					n.length > 1 && this.sendString_(String(n.length));
					for (let r = 0; r < n.length; r++) this.sendString_(n[r]);
				}
				shutdown_() {
					(this.isClosed_ = !0),
						this.keepaliveTimer &&
							(clearInterval(this.keepaliveTimer),
							(this.keepaliveTimer = null)),
						this.mySock &&
							(this.mySock.close(), (this.mySock = null));
				}
				onClosed_() {
					this.isClosed_ ||
						(this.log_("WebSocket is closing itself"),
						this.shutdown_(),
						this.onDisconnect &&
							(this.onDisconnect(this.everConnected_),
							(this.onDisconnect = null)));
				}
				close() {
					this.isClosed_ ||
						(this.log_("WebSocket is being closed"),
						this.shutdown_());
				}
				resetKeepAlive() {
					clearInterval(this.keepaliveTimer),
						(this.keepaliveTimer = setInterval(() => {
							this.mySock && this.sendString_("0"),
								this.resetKeepAlive();
						}, Math.floor(45e3)));
				}
				sendString_(e) {
					try {
						this.mySock.send(e);
					} catch (pf) {
						this.log_(
							"Exception thrown from WebSocket.send():",
							pf.message || pf.data,
							"Closing connection."
						),
							setTimeout(this.onClosed_.bind(this), 0);
					}
				}
			}
			(Io.responsesRequiredToBeHealthy = 2), (Io.healthyTimeout = 3e4);
			class Ao {
				static get ALL_TRANSPORTS() {
					return [To, Io];
				}
				static get IS_TRANSPORT_INITIALIZED() {
					return this.globalTransportInitialized_;
				}
				constructor(e) {
					this.initTransports_(e);
				}
				initTransports_(e) {
					const t = Io && Io.isAvailable();
					let n = t && !Io.previouslyFailed();
					if (
						(e.webSocketOnly &&
							(t ||
								Ka(
									"wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
								),
							(n = !0)),
						n)
					)
						this.transports_ = [Io];
					else {
						const e = (this.transports_ = []);
						for (const t of Ao.ALL_TRANSPORTS)
							t && t.isAvailable() && e.push(t);
						Ao.globalTransportInitialized_ = !0;
					}
				}
				initialTransport() {
					if (this.transports_.length > 0) return this.transports_[0];
					throw new Error("No transports available");
				}
				upgradeTransport() {
					return this.transports_.length > 1
						? this.transports_[1]
						: null;
				}
			}
			Ao.globalTransportInitialized_ = !1;
			class Oo {
				constructor(e, t, n, r, i, a, o, s, l, c) {
					(this.id = e),
						(this.repoInfo_ = t),
						(this.applicationId_ = n),
						(this.appCheckToken_ = r),
						(this.authToken_ = i),
						(this.onMessage_ = a),
						(this.onReady_ = o),
						(this.onDisconnect_ = s),
						(this.onKill_ = l),
						(this.lastSessionId = c),
						(this.connectionCount = 0),
						(this.pendingDataMessages = []),
						(this.state_ = 0),
						(this.log_ = $a("c:" + this.id + ":")),
						(this.transportManager_ = new Ao(t)),
						this.log_("Connection created"),
						this.start_();
				}
				start_() {
					const e = this.transportManager_.initialTransport();
					(this.conn_ = new e(
						this.nextTransportId_(),
						this.repoInfo_,
						this.applicationId_,
						this.appCheckToken_,
						this.authToken_,
						null,
						this.lastSessionId
					)),
						(this.primaryResponsesRequired_ =
							e.responsesRequiredToBeHealthy || 0);
					const t = this.connReceiver_(this.conn_),
						n = this.disconnReceiver_(this.conn_);
					(this.tx_ = this.conn_),
						(this.rx_ = this.conn_),
						(this.secondaryConn_ = null),
						(this.isHealthy_ = !1),
						setTimeout(() => {
							this.conn_ && this.conn_.open(t, n);
						}, Math.floor(0));
					const r = e.healthyTimeout || 0;
					r > 0 &&
						(this.healthyTimeout_ = co(() => {
							(this.healthyTimeout_ = null),
								this.isHealthy_ ||
									(this.conn_ &&
									this.conn_.bytesReceived > 102400
										? (this.log_(
												"Connection exceeded healthy timeout but has received " +
													this.conn_.bytesReceived +
													" bytes.  Marking connection healthy."
										  ),
										  (this.isHealthy_ = !0),
										  this.conn_.markConnectionHealthy())
										: this.conn_ &&
										  this.conn_.bytesSent > 10240
										? this.log_(
												"Connection exceeded healthy timeout but has sent " +
													this.conn_.bytesSent +
													" bytes.  Leaving connection alive."
										  )
										: (this.log_(
												"Closing unhealthy connection after timeout."
										  ),
										  this.close()));
						}, Math.floor(r)));
				}
				nextTransportId_() {
					return "c:" + this.id + ":" + this.connectionCount++;
				}
				disconnReceiver_(e) {
					return (t) => {
						e === this.conn_
							? this.onConnectionLost_(t)
							: e === this.secondaryConn_
							? (this.log_("Secondary connection lost."),
							  this.onSecondaryConnectionLost_())
							: this.log_("closing an old connection");
					};
				}
				connReceiver_(e) {
					return (t) => {
						2 !== this.state_ &&
							(e === this.rx_
								? this.onPrimaryMessageReceived_(t)
								: e === this.secondaryConn_
								? this.onSecondaryMessageReceived_(t)
								: this.log_("message on old connection"));
					};
				}
				sendRequest(e) {
					const t = { t: "d", d: e };
					this.sendData_(t);
				}
				tryCleanupConnection() {
					this.tx_ === this.secondaryConn_ &&
						this.rx_ === this.secondaryConn_ &&
						(this.log_(
							"cleaning up and promoting a connection: " +
								this.secondaryConn_.connId
						),
						(this.conn_ = this.secondaryConn_),
						(this.secondaryConn_ = null));
				}
				onSecondaryControl_(e) {
					if ("t" in e) {
						const t = e.t;
						"a" === t
							? this.upgradeIfSecondaryHealthy_()
							: "r" === t
							? (this.log_(
									"Got a reset on secondary, closing it"
							  ),
							  this.secondaryConn_.close(),
							  (this.tx_ !== this.secondaryConn_ &&
									this.rx_ !== this.secondaryConn_) ||
									this.close())
							: "o" === t &&
							  (this.log_("got pong on secondary."),
							  this.secondaryResponsesRequired_--,
							  this.upgradeIfSecondaryHealthy_());
					}
				}
				onSecondaryMessageReceived_(e) {
					const t = to("t", e),
						n = to("d", e);
					if ("c" === t) this.onSecondaryControl_(n);
					else {
						if ("d" !== t)
							throw new Error("Unknown protocol layer: " + t);
						this.pendingDataMessages.push(n);
					}
				}
				upgradeIfSecondaryHealthy_() {
					this.secondaryResponsesRequired_ <= 0
						? (this.log_("Secondary connection is healthy."),
						  (this.isHealthy_ = !0),
						  this.secondaryConn_.markConnectionHealthy(),
						  this.proceedWithUpgrade_())
						: (this.log_("sending ping on secondary."),
						  this.secondaryConn_.send({
								t: "c",
								d: { t: "p", d: {} },
						  }));
				}
				proceedWithUpgrade_() {
					this.secondaryConn_.start(),
						this.log_("sending client ack on secondary"),
						this.secondaryConn_.send({
							t: "c",
							d: { t: "a", d: {} },
						}),
						this.log_("Ending transmission on primary"),
						this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
						(this.tx_ = this.secondaryConn_),
						this.tryCleanupConnection();
				}
				onPrimaryMessageReceived_(e) {
					const t = to("t", e),
						n = to("d", e);
					"c" === t
						? this.onControl_(n)
						: "d" === t && this.onDataMessage_(n);
				}
				onDataMessage_(e) {
					this.onPrimaryResponse_(), this.onMessage_(e);
				}
				onPrimaryResponse_() {
					this.isHealthy_ ||
						(this.primaryResponsesRequired_--,
						this.primaryResponsesRequired_ <= 0 &&
							(this.log_("Primary connection is healthy."),
							(this.isHealthy_ = !0),
							this.conn_.markConnectionHealthy()));
				}
				onControl_(e) {
					const t = to("t", e);
					if ("d" in e) {
						const n = e.d;
						if ("h" === t) {
							const e = Object.assign({}, n);
							this.repoInfo_.isUsingEmulator &&
								(e.h = this.repoInfo_.host),
								this.onHandshake_(e);
						} else if ("n" === t) {
							this.log_("recvd end transmission on primary"),
								(this.rx_ = this.secondaryConn_);
							for (
								let e = 0;
								e < this.pendingDataMessages.length;
								++e
							)
								this.onDataMessage_(
									this.pendingDataMessages[e]
								);
							(this.pendingDataMessages = []),
								this.tryCleanupConnection();
						} else
							"s" === t
								? this.onConnectionShutdown_(n)
								: "r" === t
								? this.onReset_(n)
								: "e" === t
								? Qa("Server Error: " + n)
								: "o" === t
								? (this.log_("got pong on primary."),
								  this.onPrimaryResponse_(),
								  this.sendPingOnPrimaryIfNecessary_())
								: Qa("Unknown control packet command: " + t);
					}
				}
				onHandshake_(e) {
					const t = e.ts,
						n = e.v,
						r = e.h;
					(this.sessionId = e.s),
						(this.repoInfo_.host = r),
						0 === this.state_ &&
							(this.conn_.start(),
							this.onConnectionEstablished_(this.conn_, t),
							po !== n &&
								Ka("Protocol version mismatch detected"),
							this.tryStartUpgrade_());
				}
				tryStartUpgrade_() {
					const e = this.transportManager_.upgradeTransport();
					e && this.startUpgrade_(e);
				}
				startUpgrade_(e) {
					(this.secondaryConn_ = new e(
						this.nextTransportId_(),
						this.repoInfo_,
						this.applicationId_,
						this.appCheckToken_,
						this.authToken_,
						this.sessionId
					)),
						(this.secondaryResponsesRequired_ =
							e.responsesRequiredToBeHealthy || 0);
					const t = this.connReceiver_(this.secondaryConn_),
						n = this.disconnReceiver_(this.secondaryConn_);
					this.secondaryConn_.open(t, n),
						co(() => {
							this.secondaryConn_ &&
								(this.log_("Timed out trying to upgrade."),
								this.secondaryConn_.close());
						}, Math.floor(6e4));
				}
				onReset_(e) {
					this.log_("Reset packet received.  New host: " + e),
						(this.repoInfo_.host = e),
						1 === this.state_
							? this.close()
							: (this.closeConnections_(), this.start_());
				}
				onConnectionEstablished_(e, t) {
					this.log_("Realtime connection established."),
						(this.conn_ = e),
						(this.state_ = 1),
						this.onReady_ &&
							(this.onReady_(t, this.sessionId),
							(this.onReady_ = null)),
						0 === this.primaryResponsesRequired_
							? (this.log_("Primary connection is healthy."),
							  (this.isHealthy_ = !0))
							: co(() => {
									this.sendPingOnPrimaryIfNecessary_();
							  }, Math.floor(5e3));
				}
				sendPingOnPrimaryIfNecessary_() {
					this.isHealthy_ ||
						1 !== this.state_ ||
						(this.log_("sending ping on primary."),
						this.sendData_({ t: "c", d: { t: "p", d: {} } }));
				}
				onSecondaryConnectionLost_() {
					const e = this.secondaryConn_;
					(this.secondaryConn_ = null),
						(this.tx_ !== e && this.rx_ !== e) || this.close();
				}
				onConnectionLost_(e) {
					(this.conn_ = null),
						e || 0 !== this.state_
							? 1 === this.state_ &&
							  this.log_("Realtime connection lost.")
							: (this.log_("Realtime connection failed."),
							  this.repoInfo_.isCacheableHost() &&
									(Ma.remove("host:" + this.repoInfo_.host),
									(this.repoInfo_.internalHost =
										this.repoInfo_.host))),
						this.close();
				}
				onConnectionShutdown_(e) {
					this.log_(
						"Connection shutdown command received. Shutting down..."
					),
						this.onKill_ &&
							(this.onKill_(e), (this.onKill_ = null)),
						(this.onDisconnect_ = null),
						this.close();
				}
				sendData_(e) {
					if (1 !== this.state_) throw "Connection is not connected";
					this.tx_.send(e);
				}
				close() {
					2 !== this.state_ &&
						(this.log_("Closing realtime connection."),
						(this.state_ = 2),
						this.closeConnections_(),
						this.onDisconnect_ &&
							(this.onDisconnect_(),
							(this.onDisconnect_ = null)));
				}
				closeConnections_() {
					this.log_("Shutting down all connections"),
						this.conn_ && (this.conn_.close(), (this.conn_ = null)),
						this.secondaryConn_ &&
							(this.secondaryConn_.close(),
							(this.secondaryConn_ = null)),
						this.healthyTimeout_ &&
							(clearTimeout(this.healthyTimeout_),
							(this.healthyTimeout_ = null));
				}
			}
			class Ro {
				put(e, t, n, r) {}
				merge(e, t, n, r) {}
				refreshAuthToken(e) {}
				refreshAppCheckToken(e) {}
				onDisconnectPut(e, t, n) {}
				onDisconnectMerge(e, t, n) {}
				onDisconnectCancel(e, t) {}
				reportStats(e) {}
			}
			class Do {
				constructor(e) {
					(this.allowedEvents_ = e),
						(this.listeners_ = {}),
						er(
							Array.isArray(e) && e.length > 0,
							"Requires a non-empty array"
						);
				}
				trigger(e) {
					if (Array.isArray(this.listeners_[e])) {
						const i = [...this.listeners_[e]];
						for (
							var t = arguments.length,
								n = new Array(t > 1 ? t - 1 : 0),
								r = 1;
							r < t;
							r++
						)
							n[r - 1] = arguments[r];
						for (let e = 0; e < i.length; e++)
							i[e].callback.apply(i[e].context, n);
					}
				}
				on(e, t, n) {
					this.validateEventType_(e),
						(this.listeners_[e] = this.listeners_[e] || []),
						this.listeners_[e].push({ callback: t, context: n });
					const r = this.getInitialEvent(e);
					r && t.apply(n, r);
				}
				off(e, t, n) {
					this.validateEventType_(e);
					const r = this.listeners_[e] || [];
					for (let i = 0; i < r.length; i++)
						if (r[i].callback === t && (!n || n === r[i].context))
							return void r.splice(i, 1);
				}
				validateEventType_(e) {
					er(
						this.allowedEvents_.find((t) => t === e),
						"Unknown event: " + e
					);
				}
			}
			class Lo extends Do {
				static getInstance() {
					return new Lo();
				}
				constructor() {
					super(["online"]),
						(this.online_ = !0),
						"undefined" === typeof window ||
							"undefined" === typeof window.addEventListener ||
							pr() ||
							(window.addEventListener(
								"online",
								() => {
									this.online_ ||
										((this.online_ = !0),
										this.trigger("online", !0));
								},
								!1
							),
							window.addEventListener(
								"offline",
								() => {
									this.online_ &&
										((this.online_ = !1),
										this.trigger("online", !1));
								},
								!1
							));
				}
				getInitialEvent(e) {
					return (
						er("online" === e, "Unknown event type: " + e),
						[this.online_]
					);
				}
				currentlyOnline() {
					return this.online_;
				}
			}
			class Mo {
				constructor(e, t) {
					if (void 0 === t) {
						this.pieces_ = e.split("/");
						let t = 0;
						for (let e = 0; e < this.pieces_.length; e++)
							this.pieces_[e].length > 0 &&
								((this.pieces_[t] = this.pieces_[e]), t++);
						(this.pieces_.length = t), (this.pieceNum_ = 0);
					} else (this.pieces_ = e), (this.pieceNum_ = t);
				}
				toString() {
					let e = "";
					for (let t = this.pieceNum_; t < this.pieces_.length; t++)
						"" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
					return e || "/";
				}
			}
			function Fo() {
				return new Mo("");
			}
			function zo(e) {
				return e.pieceNum_ >= e.pieces_.length
					? null
					: e.pieces_[e.pieceNum_];
			}
			function jo(e) {
				return e.pieces_.length - e.pieceNum_;
			}
			function qo(e) {
				let t = e.pieceNum_;
				return t < e.pieces_.length && t++, new Mo(e.pieces_, t);
			}
			function Uo(e) {
				return e.pieceNum_ < e.pieces_.length
					? e.pieces_[e.pieces_.length - 1]
					: null;
			}
			function Wo(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: 0;
				return e.pieces_.slice(e.pieceNum_ + t);
			}
			function Bo(e) {
				if (e.pieceNum_ >= e.pieces_.length) return null;
				const t = [];
				for (let n = e.pieceNum_; n < e.pieces_.length - 1; n++)
					t.push(e.pieces_[n]);
				return new Mo(t, 0);
			}
			function Ho(e, t) {
				const n = [];
				for (let r = e.pieceNum_; r < e.pieces_.length; r++)
					n.push(e.pieces_[r]);
				if (t instanceof Mo)
					for (let r = t.pieceNum_; r < t.pieces_.length; r++)
						n.push(t.pieces_[r]);
				else {
					const e = t.split("/");
					for (let t = 0; t < e.length; t++)
						e[t].length > 0 && n.push(e[t]);
				}
				return new Mo(n, 0);
			}
			function Vo(e) {
				return e.pieceNum_ >= e.pieces_.length;
			}
			function $o(e, t) {
				const n = zo(e),
					r = zo(t);
				if (null === n) return t;
				if (n === r) return $o(qo(e), qo(t));
				throw new Error(
					"INTERNAL ERROR: innerPath (" +
						t +
						") is not within outerPath (" +
						e +
						")"
				);
			}
			function Qo(e, t) {
				const n = Wo(e, 0),
					r = Wo(t, 0);
				for (let i = 0; i < n.length && i < r.length; i++) {
					const e = Za(n[i], r[i]);
					if (0 !== e) return e;
				}
				return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
			}
			function Yo(e, t) {
				if (jo(e) !== jo(t)) return !1;
				for (
					let n = e.pieceNum_, r = t.pieceNum_;
					n <= e.pieces_.length;
					n++, r++
				)
					if (e.pieces_[n] !== t.pieces_[r]) return !1;
				return !0;
			}
			function Ko(e, t) {
				let n = e.pieceNum_,
					r = t.pieceNum_;
				if (jo(e) > jo(t)) return !1;
				for (; n < e.pieces_.length; ) {
					if (e.pieces_[n] !== t.pieces_[r]) return !1;
					++n, ++r;
				}
				return !0;
			}
			class Go {
				constructor(e, t) {
					(this.errorPrefix_ = t),
						(this.parts_ = Wo(e, 0)),
						(this.byteLength_ = Math.max(1, this.parts_.length));
					for (let n = 0; n < this.parts_.length; n++)
						this.byteLength_ += Fr(this.parts_[n]);
					Xo(this);
				}
			}
			function Xo(e) {
				if (e.byteLength_ > 768)
					throw new Error(
						e.errorPrefix_ +
							"has a key path longer than 768 bytes (" +
							e.byteLength_ +
							")."
					);
				if (e.parts_.length > 32)
					throw new Error(
						e.errorPrefix_ +
							"path specified exceeds the maximum depth that can be written (32) or object contains a cycle " +
							Jo(e)
					);
			}
			function Jo(e) {
				return 0 === e.parts_.length
					? ""
					: "in property '" + e.parts_.join(".") + "'";
			}
			class Zo extends Do {
				static getInstance() {
					return new Zo();
				}
				constructor() {
					let e, t;
					super(["visible"]),
						"undefined" !== typeof document &&
							"undefined" !== typeof document.addEventListener &&
							("undefined" !== typeof document.hidden
								? ((t = "visibilitychange"), (e = "hidden"))
								: "undefined" !== typeof document.mozHidden
								? ((t = "mozvisibilitychange"),
								  (e = "mozHidden"))
								: "undefined" !== typeof document.msHidden
								? ((t = "msvisibilitychange"), (e = "msHidden"))
								: "undefined" !==
										typeof document.webkitHidden &&
								  ((t = "webkitvisibilitychange"),
								  (e = "webkitHidden"))),
						(this.visible_ = !0),
						t &&
							document.addEventListener(
								t,
								() => {
									const t = !document[e];
									t !== this.visible_ &&
										((this.visible_ = t),
										this.trigger("visible", t));
								},
								!1
							);
				}
				getInitialEvent(e) {
					return (
						er("visible" === e, "Unknown event type: " + e),
						[this.visible_]
					);
				}
			}
			const es = 1e3;
			class ts extends Ro {
				constructor(e, t, n, r, i, a, o, s) {
					if (
						(super(),
						(this.repoInfo_ = e),
						(this.applicationId_ = t),
						(this.onDataUpdate_ = n),
						(this.onConnectStatus_ = r),
						(this.onServerInfoUpdate_ = i),
						(this.authTokenProvider_ = a),
						(this.appCheckTokenProvider_ = o),
						(this.authOverride_ = s),
						(this.id = ts.nextPersistentConnectionId_++),
						(this.log_ = $a("p:" + this.id + ":")),
						(this.interruptReasons_ = {}),
						(this.listens = new Map()),
						(this.outstandingPuts_ = []),
						(this.outstandingGets_ = []),
						(this.outstandingPutCount_ = 0),
						(this.outstandingGetCount_ = 0),
						(this.onDisconnectRequestQueue_ = []),
						(this.connected_ = !1),
						(this.reconnectDelay_ = es),
						(this.maxReconnectDelay_ = 3e5),
						(this.securityDebugCallback_ = null),
						(this.lastSessionId = null),
						(this.establishConnectionTimer_ = null),
						(this.visible_ = !1),
						(this.requestCBHash_ = {}),
						(this.requestNumber_ = 0),
						(this.realtime_ = null),
						(this.authToken_ = null),
						(this.appCheckToken_ = null),
						(this.forceTokenRefresh_ = !1),
						(this.invalidAuthTokenCount_ = 0),
						(this.invalidAppCheckTokenCount_ = 0),
						(this.firstConnection_ = !0),
						(this.lastConnectionAttemptTime_ = null),
						(this.lastConnectionEstablishedTime_ = null),
						s && !gr())
					)
						throw new Error(
							"Auth override specified in options, but not supported on non Node.js platforms"
						);
					Zo.getInstance().on("visible", this.onVisible_, this),
						-1 === e.host.indexOf("fblocal") &&
							Lo.getInstance().on("online", this.onOnline_, this);
				}
				sendRequest(e, t, n) {
					const r = ++this.requestNumber_,
						i = { r: r, a: e, b: t };
					this.log_(wr(i)),
						er(
							this.connected_,
							"sendRequest call when we're not connected not allowed."
						),
						this.realtime_.sendRequest(i),
						n && (this.requestCBHash_[r] = n);
				}
				get(e) {
					this.initConnection_();
					const t = new fr(),
						n = {
							action: "g",
							request: {
								p: e._path.toString(),
								q: e._queryObject,
							},
							onComplete: (e) => {
								const n = e.d;
								"ok" === e.s ? t.resolve(n) : t.reject(n);
							},
						};
					this.outstandingGets_.push(n), this.outstandingGetCount_++;
					const r = this.outstandingGets_.length - 1;
					return this.connected_ && this.sendGet_(r), t.promise;
				}
				listen(e, t, n, r) {
					this.initConnection_();
					const i = e._queryIdentifier,
						a = e._path.toString();
					this.log_("Listen called for " + a + " " + i),
						this.listens.has(a) || this.listens.set(a, new Map()),
						er(
							e._queryParams.isDefault() ||
								!e._queryParams.loadsAllData(),
							"listen() called for non-default but complete query"
						),
						er(
							!this.listens.get(a).has(i),
							"listen() called twice for same path/queryId."
						);
					const o = { onComplete: r, hashFn: t, query: e, tag: n };
					this.listens.get(a).set(i, o),
						this.connected_ && this.sendListen_(o);
				}
				sendGet_(e) {
					const t = this.outstandingGets_[e];
					this.sendRequest("g", t.request, (n) => {
						delete this.outstandingGets_[e],
							this.outstandingGetCount_--,
							0 === this.outstandingGetCount_ &&
								(this.outstandingGets_ = []),
							t.onComplete && t.onComplete(n);
					});
				}
				sendListen_(e) {
					const t = e.query,
						n = t._path.toString(),
						r = t._queryIdentifier;
					this.log_("Listen on " + n + " for " + r);
					const i = { p: n };
					e.tag && ((i.q = t._queryObject), (i.t = e.tag)),
						(i.h = e.hashFn()),
						this.sendRequest("q", i, (i) => {
							const a = i.d,
								o = i.s;
							ts.warnOnListenWarnings_(a, t);
							(this.listens.get(n) &&
								this.listens.get(n).get(r)) === e &&
								(this.log_("listen response", i),
								"ok" !== o && this.removeListen_(n, r),
								e.onComplete && e.onComplete(o, a));
						});
				}
				static warnOnListenWarnings_(e, t) {
					if (e && "object" === typeof e && Sr(e, "w")) {
						const n = Cr(e, "w");
						if (Array.isArray(n) && ~n.indexOf("no_index")) {
							const e =
									'".indexOn": "' +
									t._queryParams.getIndex().toString() +
									'"',
								n = t._path.toString();
							Ka(
								`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`
							);
						}
					}
				}
				refreshAuthToken(e) {
					(this.authToken_ = e),
						this.log_("Auth token refreshed"),
						this.authToken_
							? this.tryAuth()
							: this.connected_ &&
							  this.sendRequest("unauth", {}, () => {}),
						this.reduceReconnectDelayIfAdminCredential_(e);
				}
				reduceReconnectDelayIfAdminCredential_(e) {
					((e && 40 === e.length) ||
						(function (e) {
							const t = kr(e).claims;
							return "object" === typeof t && !0 === t.admin;
						})(e)) &&
						(this.log_(
							"Admin auth credential detected.  Reducing max reconnect time."
						),
						(this.maxReconnectDelay_ = 3e4));
				}
				refreshAppCheckToken(e) {
					(this.appCheckToken_ = e),
						this.log_("App check token refreshed"),
						this.appCheckToken_
							? this.tryAppCheck()
							: this.connected_ &&
							  this.sendRequest("unappeck", {}, () => {});
				}
				tryAuth() {
					if (this.connected_ && this.authToken_) {
						const e = this.authToken_,
							t = (function (e) {
								const t = kr(e).claims;
								return (
									!!t &&
									"object" === typeof t &&
									t.hasOwnProperty("iat")
								);
							})(e)
								? "auth"
								: "gauth",
							n = { cred: e };
						null === this.authOverride_
							? (n.noauth = !0)
							: "object" === typeof this.authOverride_ &&
							  (n.authvar = this.authOverride_),
							this.sendRequest(t, n, (t) => {
								const n = t.s,
									r = t.d || "error";
								this.authToken_ === e &&
									("ok" === n
										? (this.invalidAuthTokenCount_ = 0)
										: this.onAuthRevoked_(n, r));
							});
					}
				}
				tryAppCheck() {
					this.connected_ &&
						this.appCheckToken_ &&
						this.sendRequest(
							"appcheck",
							{ token: this.appCheckToken_ },
							(e) => {
								const t = e.s,
									n = e.d || "error";
								"ok" === t
									? (this.invalidAppCheckTokenCount_ = 0)
									: this.onAppCheckRevoked_(t, n);
							}
						);
				}
				unlisten(e, t) {
					const n = e._path.toString(),
						r = e._queryIdentifier;
					this.log_("Unlisten called for " + n + " " + r),
						er(
							e._queryParams.isDefault() ||
								!e._queryParams.loadsAllData(),
							"unlisten() called for non-default but complete query"
						);
					this.removeListen_(n, r) &&
						this.connected_ &&
						this.sendUnlisten_(n, r, e._queryObject, t);
				}
				sendUnlisten_(e, t, n, r) {
					this.log_("Unlisten on " + e + " for " + t);
					const i = { p: e };
					r && ((i.q = n), (i.t = r)), this.sendRequest("n", i);
				}
				onDisconnectPut(e, t, n) {
					this.initConnection_(),
						this.connected_
							? this.sendOnDisconnect_("o", e, t, n)
							: this.onDisconnectRequestQueue_.push({
									pathString: e,
									action: "o",
									data: t,
									onComplete: n,
							  });
				}
				onDisconnectMerge(e, t, n) {
					this.initConnection_(),
						this.connected_
							? this.sendOnDisconnect_("om", e, t, n)
							: this.onDisconnectRequestQueue_.push({
									pathString: e,
									action: "om",
									data: t,
									onComplete: n,
							  });
				}
				onDisconnectCancel(e, t) {
					this.initConnection_(),
						this.connected_
							? this.sendOnDisconnect_("oc", e, null, t)
							: this.onDisconnectRequestQueue_.push({
									pathString: e,
									action: "oc",
									data: null,
									onComplete: t,
							  });
				}
				sendOnDisconnect_(e, t, n, r) {
					const i = { p: t, d: n };
					this.log_("onDisconnect " + e, i),
						this.sendRequest(e, i, (e) => {
							r &&
								setTimeout(() => {
									r(e.s, e.d);
								}, Math.floor(0));
						});
				}
				put(e, t, n, r) {
					this.putInternal("p", e, t, n, r);
				}
				merge(e, t, n, r) {
					this.putInternal("m", e, t, n, r);
				}
				putInternal(e, t, n, r, i) {
					this.initConnection_();
					const a = { p: t, d: n };
					void 0 !== i && (a.h = i),
						this.outstandingPuts_.push({
							action: e,
							request: a,
							onComplete: r,
						}),
						this.outstandingPutCount_++;
					const o = this.outstandingPuts_.length - 1;
					this.connected_
						? this.sendPut_(o)
						: this.log_("Buffering put: " + t);
				}
				sendPut_(e) {
					const t = this.outstandingPuts_[e].action,
						n = this.outstandingPuts_[e].request,
						r = this.outstandingPuts_[e].onComplete;
					(this.outstandingPuts_[e].queued = this.connected_),
						this.sendRequest(t, n, (n) => {
							this.log_(t + " response", n),
								delete this.outstandingPuts_[e],
								this.outstandingPutCount_--,
								0 === this.outstandingPutCount_ &&
									(this.outstandingPuts_ = []),
								r && r(n.s, n.d);
						});
				}
				reportStats(e) {
					if (this.connected_) {
						const t = { c: e };
						this.log_("reportStats", t),
							this.sendRequest("s", t, (e) => {
								if ("ok" !== e.s) {
									const t = e.d;
									this.log_(
										"reportStats",
										"Error sending stats: " + t
									);
								}
							});
					}
				}
				onDataMessage_(e) {
					if ("r" in e) {
						this.log_("from server: " + wr(e));
						const t = e.r,
							n = this.requestCBHash_[t];
						n && (delete this.requestCBHash_[t], n(e.b));
					} else {
						if ("error" in e)
							throw (
								"A server-side error has occurred: " + e.error
							);
						"a" in e && this.onDataPush_(e.a, e.b);
					}
				}
				onDataPush_(e, t) {
					this.log_("handleServerMessage", e, t),
						"d" === e
							? this.onDataUpdate_(t.p, t.d, !1, t.t)
							: "m" === e
							? this.onDataUpdate_(t.p, t.d, !0, t.t)
							: "c" === e
							? this.onListenRevoked_(t.p, t.q)
							: "ac" === e
							? this.onAuthRevoked_(t.s, t.d)
							: "apc" === e
							? this.onAppCheckRevoked_(t.s, t.d)
							: "sd" === e
							? this.onSecurityDebugPacket_(t)
							: Qa(
									"Unrecognized action received from server: " +
										wr(e) +
										"\nAre you using the latest client?"
							  );
				}
				onReady_(e, t) {
					this.log_("connection ready"),
						(this.connected_ = !0),
						(this.lastConnectionEstablishedTime_ =
							new Date().getTime()),
						this.handleTimestamp_(e),
						(this.lastSessionId = t),
						this.firstConnection_ && this.sendConnectStats_(),
						this.restoreState_(),
						(this.firstConnection_ = !1),
						this.onConnectStatus_(!0);
				}
				scheduleConnect_(e) {
					er(
						!this.realtime_,
						"Scheduling a connect when we're already connected/ing?"
					),
						this.establishConnectionTimer_ &&
							clearTimeout(this.establishConnectionTimer_),
						(this.establishConnectionTimer_ = setTimeout(() => {
							(this.establishConnectionTimer_ = null),
								this.establishConnection_();
						}, Math.floor(e)));
				}
				initConnection_() {
					!this.realtime_ &&
						this.firstConnection_ &&
						this.scheduleConnect_(0);
				}
				onVisible_(e) {
					e &&
						!this.visible_ &&
						this.reconnectDelay_ === this.maxReconnectDelay_ &&
						(this.log_("Window became visible.  Reducing delay."),
						(this.reconnectDelay_ = es),
						this.realtime_ || this.scheduleConnect_(0)),
						(this.visible_ = e);
				}
				onOnline_(e) {
					e
						? (this.log_("Browser went online."),
						  (this.reconnectDelay_ = es),
						  this.realtime_ || this.scheduleConnect_(0))
						: (this.log_(
								"Browser went offline.  Killing connection."
						  ),
						  this.realtime_ && this.realtime_.close());
				}
				onRealtimeDisconnect_() {
					if (
						(this.log_("data client disconnected"),
						(this.connected_ = !1),
						(this.realtime_ = null),
						this.cancelSentTransactions_(),
						(this.requestCBHash_ = {}),
						this.shouldReconnect_())
					) {
						if (this.visible_) {
							if (this.lastConnectionEstablishedTime_) {
								new Date().getTime() -
									this.lastConnectionEstablishedTime_ >
									3e4 && (this.reconnectDelay_ = es),
									(this.lastConnectionEstablishedTime_ =
										null);
							}
						} else
							this.log_(
								"Window isn't visible.  Delaying reconnect."
							),
								(this.reconnectDelay_ =
									this.maxReconnectDelay_),
								(this.lastConnectionAttemptTime_ =
									new Date().getTime());
						const e = Math.max(
							0,
							new Date().getTime() -
								this.lastConnectionAttemptTime_
						);
						let t = Math.max(0, this.reconnectDelay_ - e);
						(t = Math.random() * t),
							this.log_("Trying to reconnect in " + t + "ms"),
							this.scheduleConnect_(t),
							(this.reconnectDelay_ = Math.min(
								this.maxReconnectDelay_,
								1.3 * this.reconnectDelay_
							));
					}
					this.onConnectStatus_(!1);
				}
				async establishConnection_() {
					if (this.shouldReconnect_()) {
						this.log_("Making a connection attempt"),
							(this.lastConnectionAttemptTime_ =
								new Date().getTime()),
							(this.lastConnectionEstablishedTime_ = null);
						const e = this.onDataMessage_.bind(this),
							t = this.onReady_.bind(this),
							n = this.onRealtimeDisconnect_.bind(this),
							r = this.id + ":" + ts.nextConnectionId_++,
							i = this.lastSessionId;
						let a = !1,
							o = null;
						const s = function () {
								o ? o.close() : ((a = !0), n());
							},
							l = function (e) {
								er(
									o,
									"sendRequest call when we're not connected not allowed."
								),
									o.sendRequest(e);
							};
						this.realtime_ = { close: s, sendRequest: l };
						const c = this.forceTokenRefresh_;
						this.forceTokenRefresh_ = !1;
						try {
							const [s, l] = await Promise.all([
								this.authTokenProvider_.getToken(c),
								this.appCheckTokenProvider_.getToken(c),
							]);
							a
								? Va("getToken() completed but was canceled")
								: (Va(
										"getToken() completed. Creating connection."
								  ),
								  (this.authToken_ = s && s.accessToken),
								  (this.appCheckToken_ = l && l.token),
								  (o = new Oo(
										r,
										this.repoInfo_,
										this.applicationId_,
										this.appCheckToken_,
										this.authToken_,
										e,
										t,
										n,
										(e) => {
											Ka(
												e +
													" (" +
													this.repoInfo_.toString() +
													")"
											),
												this.interrupt("server_kill");
										},
										i
								  )));
						} catch (Qa) {
							this.log_("Failed to get token: " + Qa),
								a || (this.repoInfo_.nodeAdmin && Ka(Qa), s());
						}
					}
				}
				interrupt(e) {
					Va("Interrupting connection for reason: " + e),
						(this.interruptReasons_[e] = !0),
						this.realtime_
							? this.realtime_.close()
							: (this.establishConnectionTimer_ &&
									(clearTimeout(
										this.establishConnectionTimer_
									),
									(this.establishConnectionTimer_ = null)),
							  this.connected_ && this.onRealtimeDisconnect_());
				}
				resume(e) {
					Va("Resuming connection for reason: " + e),
						delete this.interruptReasons_[e],
						Er(this.interruptReasons_) &&
							((this.reconnectDelay_ = es),
							this.realtime_ || this.scheduleConnect_(0));
				}
				handleTimestamp_(e) {
					const t = e - new Date().getTime();
					this.onServerInfoUpdate_({ serverTimeOffset: t });
				}
				cancelSentTransactions_() {
					for (let e = 0; e < this.outstandingPuts_.length; e++) {
						const t = this.outstandingPuts_[e];
						t &&
							"h" in t.request &&
							t.queued &&
							(t.onComplete && t.onComplete("disconnect"),
							delete this.outstandingPuts_[e],
							this.outstandingPutCount_--);
					}
					0 === this.outstandingPutCount_ &&
						(this.outstandingPuts_ = []);
				}
				onListenRevoked_(e, t) {
					let n;
					n = t ? t.map((e) => no(e)).join("$") : "default";
					const r = this.removeListen_(e, n);
					r && r.onComplete && r.onComplete("permission_denied");
				}
				removeListen_(e, t) {
					const n = new Mo(e).toString();
					let r;
					if (this.listens.has(n)) {
						const e = this.listens.get(n);
						(r = e.get(t)),
							e.delete(t),
							0 === e.size && this.listens.delete(n);
					} else r = void 0;
					return r;
				}
				onAuthRevoked_(e, t) {
					Va("Auth token revoked: " + e + "/" + t),
						(this.authToken_ = null),
						(this.forceTokenRefresh_ = !0),
						this.realtime_.close(),
						("invalid_token" !== e && "permission_denied" !== e) ||
							(this.invalidAuthTokenCount_++,
							this.invalidAuthTokenCount_ >= 3 &&
								((this.reconnectDelay_ = 3e4),
								this.authTokenProvider_.notifyForInvalidToken()));
				}
				onAppCheckRevoked_(e, t) {
					Va("App check token revoked: " + e + "/" + t),
						(this.appCheckToken_ = null),
						(this.forceTokenRefresh_ = !0),
						("invalid_token" !== e && "permission_denied" !== e) ||
							(this.invalidAppCheckTokenCount_++,
							this.invalidAppCheckTokenCount_ >= 3 &&
								this.appCheckTokenProvider_.notifyForInvalidToken());
				}
				onSecurityDebugPacket_(e) {
					this.securityDebugCallback_
						? this.securityDebugCallback_(e)
						: "msg" in e &&
						  console.log(
								"FIREBASE: " +
									e.msg.replace("\n", "\nFIREBASE: ")
						  );
				}
				restoreState_() {
					this.tryAuth(), this.tryAppCheck();
					for (const e of this.listens.values())
						for (const t of e.values()) this.sendListen_(t);
					for (let e = 0; e < this.outstandingPuts_.length; e++)
						this.outstandingPuts_[e] && this.sendPut_(e);
					for (; this.onDisconnectRequestQueue_.length; ) {
						const e = this.onDisconnectRequestQueue_.shift();
						this.sendOnDisconnect_(
							e.action,
							e.pathString,
							e.data,
							e.onComplete
						);
					}
					for (let e = 0; e < this.outstandingGets_.length; e++)
						this.outstandingGets_[e] && this.sendGet_(e);
				}
				sendConnectStats_() {
					const e = {};
					let t = "js";
					gr() &&
						(t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"),
						(e["sdk." + t + "." + Aa.replace(/\./g, "-")] = 1),
						pr()
							? (e["framework.cordova"] = 1)
							: "object" === typeof navigator &&
							  "ReactNative" === navigator.product &&
							  (e["framework.reactnative"] = 1),
						this.reportStats(e);
				}
				shouldReconnect_() {
					const e = Lo.getInstance().currentlyOnline();
					return Er(this.interruptReasons_) && e;
				}
			}
			(ts.nextPersistentConnectionId_ = 0), (ts.nextConnectionId_ = 0);
			class ns {
				constructor(e, t) {
					(this.name = e), (this.node = t);
				}
				static Wrap(e, t) {
					return new ns(e, t);
				}
			}
			class rs {
				getCompare() {
					return this.compare.bind(this);
				}
				indexedValueChanged(e, t) {
					const n = new ns(Xa, e),
						r = new ns(Xa, t);
					return 0 !== this.compare(n, r);
				}
				minPost() {
					return ns.MIN;
				}
			}
			let is;
			class as extends rs {
				static get __EMPTY_NODE() {
					return is;
				}
				static set __EMPTY_NODE(e) {
					is = e;
				}
				compare(e, t) {
					return Za(e.name, t.name);
				}
				isDefinedOn(e) {
					throw tr("KeyIndex.isDefinedOn not expected to be called.");
				}
				indexedValueChanged(e, t) {
					return !1;
				}
				minPost() {
					return ns.MIN;
				}
				maxPost() {
					return new ns(Ja, is);
				}
				makePost(e, t) {
					return (
						er(
							"string" === typeof e,
							"KeyIndex indexValue must always be a string."
						),
						new ns(e, is)
					);
				}
				toString() {
					return ".key";
				}
			}
			const os = new as();
			class ss {
				constructor(e, t, n, r) {
					let i =
						arguments.length > 4 && void 0 !== arguments[4]
							? arguments[4]
							: null;
					(this.isReverse_ = r),
						(this.resultGenerator_ = i),
						(this.nodeStack_ = []);
					let a = 1;
					for (; !e.isEmpty(); )
						if (((a = t ? n(e.key, t) : 1), r && (a *= -1), a < 0))
							e = this.isReverse_ ? e.left : e.right;
						else {
							if (0 === a) {
								this.nodeStack_.push(e);
								break;
							}
							this.nodeStack_.push(e),
								(e = this.isReverse_ ? e.right : e.left);
						}
				}
				getNext() {
					if (0 === this.nodeStack_.length) return null;
					let e,
						t = this.nodeStack_.pop();
					if (
						((e = this.resultGenerator_
							? this.resultGenerator_(t.key, t.value)
							: { key: t.key, value: t.value }),
						this.isReverse_)
					)
						for (t = t.left; !t.isEmpty(); )
							this.nodeStack_.push(t), (t = t.right);
					else
						for (t = t.right; !t.isEmpty(); )
							this.nodeStack_.push(t), (t = t.left);
					return e;
				}
				hasNext() {
					return this.nodeStack_.length > 0;
				}
				peek() {
					if (0 === this.nodeStack_.length) return null;
					const e = this.nodeStack_[this.nodeStack_.length - 1];
					return this.resultGenerator_
						? this.resultGenerator_(e.key, e.value)
						: { key: e.key, value: e.value };
				}
			}
			class ls {
				constructor(e, t, n, r, i) {
					(this.key = e),
						(this.value = t),
						(this.color = null != n ? n : ls.RED),
						(this.left = null != r ? r : cs.EMPTY_NODE),
						(this.right = null != i ? i : cs.EMPTY_NODE);
				}
				copy(e, t, n, r, i) {
					return new ls(
						null != e ? e : this.key,
						null != t ? t : this.value,
						null != n ? n : this.color,
						null != r ? r : this.left,
						null != i ? i : this.right
					);
				}
				count() {
					return this.left.count() + 1 + this.right.count();
				}
				isEmpty() {
					return !1;
				}
				inorderTraversal(e) {
					return (
						this.left.inorderTraversal(e) ||
						!!e(this.key, this.value) ||
						this.right.inorderTraversal(e)
					);
				}
				reverseTraversal(e) {
					return (
						this.right.reverseTraversal(e) ||
						e(this.key, this.value) ||
						this.left.reverseTraversal(e)
					);
				}
				min_() {
					return this.left.isEmpty() ? this : this.left.min_();
				}
				minKey() {
					return this.min_().key;
				}
				maxKey() {
					return this.right.isEmpty()
						? this.key
						: this.right.maxKey();
				}
				insert(e, t, n) {
					let r = this;
					const i = n(e, r.key);
					return (
						(r =
							i < 0
								? r.copy(
										null,
										null,
										null,
										r.left.insert(e, t, n),
										null
								  )
								: 0 === i
								? r.copy(null, t, null, null, null)
								: r.copy(
										null,
										null,
										null,
										null,
										r.right.insert(e, t, n)
								  )),
						r.fixUp_()
					);
				}
				removeMin_() {
					if (this.left.isEmpty()) return cs.EMPTY_NODE;
					let e = this;
					return (
						e.left.isRed_() ||
							e.left.left.isRed_() ||
							(e = e.moveRedLeft_()),
						(e = e.copy(
							null,
							null,
							null,
							e.left.removeMin_(),
							null
						)),
						e.fixUp_()
					);
				}
				remove(e, t) {
					let n, r;
					if (((n = this), t(e, n.key) < 0))
						n.left.isEmpty() ||
							n.left.isRed_() ||
							n.left.left.isRed_() ||
							(n = n.moveRedLeft_()),
							(n = n.copy(
								null,
								null,
								null,
								n.left.remove(e, t),
								null
							));
					else {
						if (
							(n.left.isRed_() && (n = n.rotateRight_()),
							n.right.isEmpty() ||
								n.right.isRed_() ||
								n.right.left.isRed_() ||
								(n = n.moveRedRight_()),
							0 === t(e, n.key))
						) {
							if (n.right.isEmpty()) return cs.EMPTY_NODE;
							(r = n.right.min_()),
								(n = n.copy(
									r.key,
									r.value,
									null,
									null,
									n.right.removeMin_()
								));
						}
						n = n.copy(
							null,
							null,
							null,
							null,
							n.right.remove(e, t)
						);
					}
					return n.fixUp_();
				}
				isRed_() {
					return this.color;
				}
				fixUp_() {
					let e = this;
					return (
						e.right.isRed_() &&
							!e.left.isRed_() &&
							(e = e.rotateLeft_()),
						e.left.isRed_() &&
							e.left.left.isRed_() &&
							(e = e.rotateRight_()),
						e.left.isRed_() &&
							e.right.isRed_() &&
							(e = e.colorFlip_()),
						e
					);
				}
				moveRedLeft_() {
					let e = this.colorFlip_();
					return (
						e.right.left.isRed_() &&
							((e = e.copy(
								null,
								null,
								null,
								null,
								e.right.rotateRight_()
							)),
							(e = e.rotateLeft_()),
							(e = e.colorFlip_())),
						e
					);
				}
				moveRedRight_() {
					let e = this.colorFlip_();
					return (
						e.left.left.isRed_() &&
							((e = e.rotateRight_()), (e = e.colorFlip_())),
						e
					);
				}
				rotateLeft_() {
					const e = this.copy(
						null,
						null,
						ls.RED,
						null,
						this.right.left
					);
					return this.right.copy(null, null, this.color, e, null);
				}
				rotateRight_() {
					const e = this.copy(
						null,
						null,
						ls.RED,
						this.left.right,
						null
					);
					return this.left.copy(null, null, this.color, null, e);
				}
				colorFlip_() {
					const e = this.left.copy(
							null,
							null,
							!this.left.color,
							null,
							null
						),
						t = this.right.copy(
							null,
							null,
							!this.right.color,
							null,
							null
						);
					return this.copy(null, null, !this.color, e, t);
				}
				checkMaxDepth_() {
					const e = this.check_();
					return Math.pow(2, e) <= this.count() + 1;
				}
				check_() {
					if (this.isRed_() && this.left.isRed_())
						throw new Error(
							"Red node has red child(" +
								this.key +
								"," +
								this.value +
								")"
						);
					if (this.right.isRed_())
						throw new Error(
							"Right child of (" +
								this.key +
								"," +
								this.value +
								") is red"
						);
					const e = this.left.check_();
					if (e !== this.right.check_())
						throw new Error("Black depths differ");
					return e + (this.isRed_() ? 0 : 1);
				}
			}
			(ls.RED = !0), (ls.BLACK = !1);
			class cs {
				constructor(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: cs.EMPTY_NODE;
					(this.comparator_ = e), (this.root_ = t);
				}
				insert(e, t) {
					return new cs(
						this.comparator_,
						this.root_
							.insert(e, t, this.comparator_)
							.copy(null, null, ls.BLACK, null, null)
					);
				}
				remove(e) {
					return new cs(
						this.comparator_,
						this.root_
							.remove(e, this.comparator_)
							.copy(null, null, ls.BLACK, null, null)
					);
				}
				get(e) {
					let t,
						n = this.root_;
					for (; !n.isEmpty(); ) {
						if (((t = this.comparator_(e, n.key)), 0 === t))
							return n.value;
						t < 0 ? (n = n.left) : t > 0 && (n = n.right);
					}
					return null;
				}
				getPredecessorKey(e) {
					let t,
						n = this.root_,
						r = null;
					for (; !n.isEmpty(); ) {
						if (((t = this.comparator_(e, n.key)), 0 === t)) {
							if (n.left.isEmpty()) return r ? r.key : null;
							for (n = n.left; !n.right.isEmpty(); ) n = n.right;
							return n.key;
						}
						t < 0
							? (n = n.left)
							: t > 0 && ((r = n), (n = n.right));
					}
					throw new Error(
						"Attempted to find predecessor key for a nonexistent key.  What gives?"
					);
				}
				isEmpty() {
					return this.root_.isEmpty();
				}
				count() {
					return this.root_.count();
				}
				minKey() {
					return this.root_.minKey();
				}
				maxKey() {
					return this.root_.maxKey();
				}
				inorderTraversal(e) {
					return this.root_.inorderTraversal(e);
				}
				reverseTraversal(e) {
					return this.root_.reverseTraversal(e);
				}
				getIterator(e) {
					return new ss(this.root_, null, this.comparator_, !1, e);
				}
				getIteratorFrom(e, t) {
					return new ss(this.root_, e, this.comparator_, !1, t);
				}
				getReverseIteratorFrom(e, t) {
					return new ss(this.root_, e, this.comparator_, !0, t);
				}
				getReverseIterator(e) {
					return new ss(this.root_, null, this.comparator_, !0, e);
				}
			}
			function us(e, t) {
				return Za(e.name, t.name);
			}
			function ds(e, t) {
				return Za(e, t);
			}
			let fs;
			cs.EMPTY_NODE = new (class {
				copy(e, t, n, r, i) {
					return this;
				}
				insert(e, t, n) {
					return new ls(e, t, null);
				}
				remove(e, t) {
					return this;
				}
				count() {
					return 0;
				}
				isEmpty() {
					return !0;
				}
				inorderTraversal(e) {
					return !1;
				}
				reverseTraversal(e) {
					return !1;
				}
				minKey() {
					return null;
				}
				maxKey() {
					return null;
				}
				check_() {
					return 0;
				}
				isRed_() {
					return !1;
				}
			})();
			const hs = function (e) {
					return "number" === typeof e
						? "number:" + ao(e)
						: "string:" + e;
				},
				ps = function (e) {
					if (e.isLeafNode()) {
						const t = e.val();
						er(
							"string" === typeof t ||
								"number" === typeof t ||
								("object" === typeof t && Sr(t, ".sv")),
							"Priority must be a string or number."
						);
					} else
						er(
							e === fs || e.isEmpty(),
							"priority of unexpected type."
						);
					er(
						e === fs || e.getPriority().isEmpty(),
						"Priority nodes can't have a priority of their own."
					);
				};
			let ms, gs, ys;
			class vs {
				static set __childrenNodeConstructor(e) {
					ms = e;
				}
				static get __childrenNodeConstructor() {
					return ms;
				}
				constructor(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: vs.__childrenNodeConstructor.EMPTY_NODE;
					(this.value_ = e),
						(this.priorityNode_ = t),
						(this.lazyHash_ = null),
						er(
							void 0 !== this.value_ && null !== this.value_,
							"LeafNode shouldn't be created with null/undefined value."
						),
						ps(this.priorityNode_);
				}
				isLeafNode() {
					return !0;
				}
				getPriority() {
					return this.priorityNode_;
				}
				updatePriority(e) {
					return new vs(this.value_, e);
				}
				getImmediateChild(e) {
					return ".priority" === e
						? this.priorityNode_
						: vs.__childrenNodeConstructor.EMPTY_NODE;
				}
				getChild(e) {
					return Vo(e)
						? this
						: ".priority" === zo(e)
						? this.priorityNode_
						: vs.__childrenNodeConstructor.EMPTY_NODE;
				}
				hasChild() {
					return !1;
				}
				getPredecessorChildName(e, t) {
					return null;
				}
				updateImmediateChild(e, t) {
					return ".priority" === e
						? this.updatePriority(t)
						: t.isEmpty() && ".priority" !== e
						? this
						: vs.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
								e,
								t
						  ).updatePriority(this.priorityNode_);
				}
				updateChild(e, t) {
					const n = zo(e);
					return null === n
						? t
						: t.isEmpty() && ".priority" !== n
						? this
						: (er(
								".priority" !== n || 1 === jo(e),
								".priority must be the last token in a path"
						  ),
						  this.updateImmediateChild(
								n,
								vs.__childrenNodeConstructor.EMPTY_NODE.updateChild(
									qo(e),
									t
								)
						  ));
				}
				isEmpty() {
					return !1;
				}
				numChildren() {
					return 0;
				}
				forEachChild(e, t) {
					return !1;
				}
				val(e) {
					return e && !this.getPriority().isEmpty()
						? {
								".value": this.getValue(),
								".priority": this.getPriority().val(),
						  }
						: this.getValue();
				}
				hash() {
					if (null === this.lazyHash_) {
						let e = "";
						this.priorityNode_.isEmpty() ||
							(e +=
								"priority:" +
								hs(this.priorityNode_.val()) +
								":");
						const t = typeof this.value_;
						(e += t + ":"),
							(e +=
								"number" === t ? ao(this.value_) : this.value_),
							(this.lazyHash_ = qa(e));
					}
					return this.lazyHash_;
				}
				getValue() {
					return this.value_;
				}
				compareTo(e) {
					return e === vs.__childrenNodeConstructor.EMPTY_NODE
						? 1
						: e instanceof vs.__childrenNodeConstructor
						? -1
						: (er(e.isLeafNode(), "Unknown node type"),
						  this.compareToLeafNode_(e));
				}
				compareToLeafNode_(e) {
					const t = typeof e.value_,
						n = typeof this.value_,
						r = vs.VALUE_TYPE_ORDER.indexOf(t),
						i = vs.VALUE_TYPE_ORDER.indexOf(n);
					return (
						er(r >= 0, "Unknown leaf type: " + t),
						er(i >= 0, "Unknown leaf type: " + n),
						r === i
							? "object" === n
								? 0
								: this.value_ < e.value_
								? -1
								: this.value_ === e.value_
								? 0
								: 1
							: i - r
					);
				}
				withIndex() {
					return this;
				}
				isIndexed() {
					return !0;
				}
				equals(e) {
					if (e === this) return !0;
					if (e.isLeafNode()) {
						const t = e;
						return (
							this.value_ === t.value_ &&
							this.priorityNode_.equals(t.priorityNode_)
						);
					}
					return !1;
				}
			}
			vs.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
			const _s = new (class extends rs {
					compare(e, t) {
						const n = e.node.getPriority(),
							r = t.node.getPriority(),
							i = n.compareTo(r);
						return 0 === i ? Za(e.name, t.name) : i;
					}
					isDefinedOn(e) {
						return !e.getPriority().isEmpty();
					}
					indexedValueChanged(e, t) {
						return !e.getPriority().equals(t.getPriority());
					}
					minPost() {
						return ns.MIN;
					}
					maxPost() {
						return new ns(Ja, new vs("[PRIORITY-POST]", ys));
					}
					makePost(e, t) {
						const n = gs(e);
						return new ns(t, new vs("[PRIORITY-POST]", n));
					}
					toString() {
						return ".priority";
					}
				})(),
				bs = Math.log(2);
			class ws {
				constructor(e) {
					var t;
					(this.count =
						((t = e + 1), parseInt(Math.log(t) / bs, 10))),
						(this.current_ = this.count - 1);
					const n =
						((r = this.count), parseInt(Array(r + 1).join("1"), 2));
					var r;
					this.bits_ = (e + 1) & n;
				}
				nextBitIsOne() {
					const e = !(this.bits_ & (1 << this.current_));
					return this.current_--, e;
				}
			}
			const ks = function (e, t, n, r) {
				e.sort(t);
				const i = function (t, r) {
						const a = r - t;
						let o, s;
						if (0 === a) return null;
						if (1 === a)
							return (
								(o = e[t]),
								(s = n ? n(o) : o),
								new ls(s, o.node, ls.BLACK, null, null)
							);
						{
							const l = parseInt(a / 2, 10) + t,
								c = i(t, l),
								u = i(l + 1, r);
							return (
								(o = e[l]),
								(s = n ? n(o) : o),
								new ls(s, o.node, ls.BLACK, c, u)
							);
						}
					},
					a = (function (t) {
						let r = null,
							a = null,
							o = e.length;
						const s = function (t, r) {
								const a = o - t,
									s = o;
								o -= t;
								const c = i(a + 1, s),
									u = e[a],
									d = n ? n(u) : u;
								l(new ls(d, u.node, r, null, c));
							},
							l = function (e) {
								r
									? ((r.left = e), (r = e))
									: ((a = e), (r = e));
							};
						for (let e = 0; e < t.count; ++e) {
							const n = t.nextBitIsOne(),
								r = Math.pow(2, t.count - (e + 1));
							n ? s(r, ls.BLACK) : (s(r, ls.BLACK), s(r, ls.RED));
						}
						return a;
					})(new ws(e.length));
				return new cs(r || t, a);
			};
			let Ss;
			const Cs = {};
			class Es {
				static get Default() {
					return (
						er(Cs && _s, "ChildrenNode.ts has not been loaded"),
						(Ss =
							Ss ||
							new Es({ ".priority": Cs }, { ".priority": _s })),
						Ss
					);
				}
				constructor(e, t) {
					(this.indexes_ = e), (this.indexSet_ = t);
				}
				get(e) {
					const t = Cr(this.indexes_, e);
					if (!t) throw new Error("No index defined for " + e);
					return t instanceof cs ? t : null;
				}
				hasIndex(e) {
					return Sr(this.indexSet_, e.toString());
				}
				addIndex(e, t) {
					er(
						e !== os,
						"KeyIndex always exists and isn't meant to be added to the IndexMap."
					);
					const n = [];
					let r = !1;
					const i = t.getIterator(ns.Wrap);
					let a,
						o = i.getNext();
					for (; o; )
						(r = r || e.isDefinedOn(o.node)),
							n.push(o),
							(o = i.getNext());
					a = r ? ks(n, e.getCompare()) : Cs;
					const s = e.toString(),
						l = Object.assign({}, this.indexSet_);
					l[s] = e;
					const c = Object.assign({}, this.indexes_);
					return (c[s] = a), new Es(c, l);
				}
				addToIndexes(e, t) {
					const n = xr(this.indexes_, (n, r) => {
						const i = Cr(this.indexSet_, r);
						if (
							(er(i, "Missing index implementation for " + r),
							n === Cs)
						) {
							if (i.isDefinedOn(e.node)) {
								const n = [],
									r = t.getIterator(ns.Wrap);
								let a = r.getNext();
								for (; a; )
									a.name !== e.name && n.push(a),
										(a = r.getNext());
								return n.push(e), ks(n, i.getCompare());
							}
							return Cs;
						}
						{
							const r = t.get(e.name);
							let i = n;
							return (
								r && (i = i.remove(new ns(e.name, r))),
								i.insert(e, e.node)
							);
						}
					});
					return new Es(n, this.indexSet_);
				}
				removeFromIndexes(e, t) {
					const n = xr(this.indexes_, (n) => {
						if (n === Cs) return n;
						{
							const r = t.get(e.name);
							return r ? n.remove(new ns(e.name, r)) : n;
						}
					});
					return new Es(n, this.indexSet_);
				}
			}
			let xs;
			class Ts {
				static get EMPTY_NODE() {
					return xs || (xs = new Ts(new cs(ds), null, Es.Default));
				}
				constructor(e, t, n) {
					(this.children_ = e),
						(this.priorityNode_ = t),
						(this.indexMap_ = n),
						(this.lazyHash_ = null),
						this.priorityNode_ && ps(this.priorityNode_),
						this.children_.isEmpty() &&
							er(
								!this.priorityNode_ ||
									this.priorityNode_.isEmpty(),
								"An empty node cannot have a priority"
							);
				}
				isLeafNode() {
					return !1;
				}
				getPriority() {
					return this.priorityNode_ || xs;
				}
				updatePriority(e) {
					return this.children_.isEmpty()
						? this
						: new Ts(this.children_, e, this.indexMap_);
				}
				getImmediateChild(e) {
					if (".priority" === e) return this.getPriority();
					{
						const t = this.children_.get(e);
						return null === t ? xs : t;
					}
				}
				getChild(e) {
					const t = zo(e);
					return null === t
						? this
						: this.getImmediateChild(t).getChild(qo(e));
				}
				hasChild(e) {
					return null !== this.children_.get(e);
				}
				updateImmediateChild(e, t) {
					if (
						(er(t, "We should always be passing snapshot nodes"),
						".priority" === e)
					)
						return this.updatePriority(t);
					{
						const n = new ns(e, t);
						let r, i;
						t.isEmpty()
							? ((r = this.children_.remove(e)),
							  (i = this.indexMap_.removeFromIndexes(
									n,
									this.children_
							  )))
							: ((r = this.children_.insert(e, t)),
							  (i = this.indexMap_.addToIndexes(
									n,
									this.children_
							  )));
						const a = r.isEmpty() ? xs : this.priorityNode_;
						return new Ts(r, a, i);
					}
				}
				updateChild(e, t) {
					const n = zo(e);
					if (null === n) return t;
					{
						er(
							".priority" !== zo(e) || 1 === jo(e),
							".priority must be the last token in a path"
						);
						const r = this.getImmediateChild(n).updateChild(
							qo(e),
							t
						);
						return this.updateImmediateChild(n, r);
					}
				}
				isEmpty() {
					return this.children_.isEmpty();
				}
				numChildren() {
					return this.children_.count();
				}
				val(e) {
					if (this.isEmpty()) return null;
					const t = {};
					let n = 0,
						r = 0,
						i = !0;
					if (
						(this.forEachChild(_s, (a, o) => {
							(t[a] = o.val(e)),
								n++,
								i && Ts.INTEGER_REGEXP_.test(a)
									? (r = Math.max(r, Number(a)))
									: (i = !1);
						}),
						!e && i && r < 2 * n)
					) {
						const e = [];
						for (const n in t) e[n] = t[n];
						return e;
					}
					return (
						e &&
							!this.getPriority().isEmpty() &&
							(t[".priority"] = this.getPriority().val()),
						t
					);
				}
				hash() {
					if (null === this.lazyHash_) {
						let e = "";
						this.getPriority().isEmpty() ||
							(e +=
								"priority:" +
								hs(this.getPriority().val()) +
								":"),
							this.forEachChild(_s, (t, n) => {
								const r = n.hash();
								"" !== r && (e += ":" + t + ":" + r);
							}),
							(this.lazyHash_ = "" === e ? "" : qa(e));
					}
					return this.lazyHash_;
				}
				getPredecessorChildName(e, t, n) {
					const r = this.resolveIndex_(n);
					if (r) {
						const n = r.getPredecessorKey(new ns(e, t));
						return n ? n.name : null;
					}
					return this.children_.getPredecessorKey(e);
				}
				getFirstChildName(e) {
					const t = this.resolveIndex_(e);
					if (t) {
						const e = t.minKey();
						return e && e.name;
					}
					return this.children_.minKey();
				}
				getFirstChild(e) {
					const t = this.getFirstChildName(e);
					return t ? new ns(t, this.children_.get(t)) : null;
				}
				getLastChildName(e) {
					const t = this.resolveIndex_(e);
					if (t) {
						const e = t.maxKey();
						return e && e.name;
					}
					return this.children_.maxKey();
				}
				getLastChild(e) {
					const t = this.getLastChildName(e);
					return t ? new ns(t, this.children_.get(t)) : null;
				}
				forEachChild(e, t) {
					const n = this.resolveIndex_(e);
					return n
						? n.inorderTraversal((e) => t(e.name, e.node))
						: this.children_.inorderTraversal(t);
				}
				getIterator(e) {
					return this.getIteratorFrom(e.minPost(), e);
				}
				getIteratorFrom(e, t) {
					const n = this.resolveIndex_(t);
					if (n) return n.getIteratorFrom(e, (e) => e);
					{
						const n = this.children_.getIteratorFrom(
							e.name,
							ns.Wrap
						);
						let r = n.peek();
						for (; null != r && t.compare(r, e) < 0; )
							n.getNext(), (r = n.peek());
						return n;
					}
				}
				getReverseIterator(e) {
					return this.getReverseIteratorFrom(e.maxPost(), e);
				}
				getReverseIteratorFrom(e, t) {
					const n = this.resolveIndex_(t);
					if (n) return n.getReverseIteratorFrom(e, (e) => e);
					{
						const n = this.children_.getReverseIteratorFrom(
							e.name,
							ns.Wrap
						);
						let r = n.peek();
						for (; null != r && t.compare(r, e) > 0; )
							n.getNext(), (r = n.peek());
						return n;
					}
				}
				compareTo(e) {
					return this.isEmpty()
						? e.isEmpty()
							? 0
							: -1
						: e.isLeafNode() || e.isEmpty()
						? 1
						: e === Ps
						? -1
						: 0;
				}
				withIndex(e) {
					if (e === os || this.indexMap_.hasIndex(e)) return this;
					{
						const t = this.indexMap_.addIndex(e, this.children_);
						return new Ts(this.children_, this.priorityNode_, t);
					}
				}
				isIndexed(e) {
					return e === os || this.indexMap_.hasIndex(e);
				}
				equals(e) {
					if (e === this) return !0;
					if (e.isLeafNode()) return !1;
					{
						const t = e;
						if (this.getPriority().equals(t.getPriority())) {
							if (
								this.children_.count() === t.children_.count()
							) {
								const e = this.getIterator(_s),
									n = t.getIterator(_s);
								let r = e.getNext(),
									i = n.getNext();
								for (; r && i; ) {
									if (
										r.name !== i.name ||
										!r.node.equals(i.node)
									)
										return !1;
									(r = e.getNext()), (i = n.getNext());
								}
								return null === r && null === i;
							}
							return !1;
						}
						return !1;
					}
				}
				resolveIndex_(e) {
					return e === os ? null : this.indexMap_.get(e.toString());
				}
			}
			Ts.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
			const Ps = new (class extends Ts {
				constructor() {
					super(new cs(ds), Ts.EMPTY_NODE, Es.Default);
				}
				compareTo(e) {
					return e === this ? 0 : 1;
				}
				equals(e) {
					return e === this;
				}
				getPriority() {
					return this;
				}
				getImmediateChild(e) {
					return Ts.EMPTY_NODE;
				}
				isEmpty() {
					return !1;
				}
			})();
			Object.defineProperties(ns, {
				MIN: { value: new ns(Xa, Ts.EMPTY_NODE) },
				MAX: { value: new ns(Ja, Ps) },
			}),
				(as.__EMPTY_NODE = Ts.EMPTY_NODE),
				(vs.__childrenNodeConstructor = Ts),
				(fs = Ps),
				(function (e) {
					ys = e;
				})(Ps);
			function Ns(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: null;
				if (null === e) return Ts.EMPTY_NODE;
				if (
					("object" === typeof e &&
						".priority" in e &&
						(t = e[".priority"]),
					er(
						null === t ||
							"string" === typeof t ||
							"number" === typeof t ||
							("object" === typeof t && ".sv" in t),
						"Invalid priority type found: " + typeof t
					),
					"object" === typeof e &&
						".value" in e &&
						null !== e[".value"] &&
						(e = e[".value"]),
					"object" !== typeof e || ".sv" in e)
				) {
					return new vs(e, Ns(t));
				}
				if (e instanceof Array) {
					let n = Ts.EMPTY_NODE;
					return (
						io(e, (t, r) => {
							if (Sr(e, t) && "." !== t.substring(0, 1)) {
								const e = Ns(r);
								(!e.isLeafNode() && e.isEmpty()) ||
									(n = n.updateImmediateChild(t, e));
							}
						}),
						n.updatePriority(Ns(t))
					);
				}
				{
					const n = [];
					let r = !1;
					if (
						(io(e, (e, t) => {
							if ("." !== e.substring(0, 1)) {
								const i = Ns(t);
								i.isEmpty() ||
									((r = r || !i.getPriority().isEmpty()),
									n.push(new ns(e, i)));
							}
						}),
						0 === n.length)
					)
						return Ts.EMPTY_NODE;
					const i = ks(n, us, (e) => e.name, ds);
					if (r) {
						const e = ks(n, _s.getCompare());
						return new Ts(
							i,
							Ns(t),
							new Es({ ".priority": e }, { ".priority": _s })
						);
					}
					return new Ts(i, Ns(t), Es.Default);
				}
			}
			!(function (e) {
				gs = e;
			})(Ns);
			class Is extends rs {
				constructor(e) {
					super(),
						(this.indexPath_ = e),
						er(
							!Vo(e) && ".priority" !== zo(e),
							"Can't create PathIndex with empty path or .priority key"
						);
				}
				extractChild(e) {
					return e.getChild(this.indexPath_);
				}
				isDefinedOn(e) {
					return !e.getChild(this.indexPath_).isEmpty();
				}
				compare(e, t) {
					const n = this.extractChild(e.node),
						r = this.extractChild(t.node),
						i = n.compareTo(r);
					return 0 === i ? Za(e.name, t.name) : i;
				}
				makePost(e, t) {
					const n = Ns(e),
						r = Ts.EMPTY_NODE.updateChild(this.indexPath_, n);
					return new ns(t, r);
				}
				maxPost() {
					const e = Ts.EMPTY_NODE.updateChild(this.indexPath_, Ps);
					return new ns(Ja, e);
				}
				toString() {
					return Wo(this.indexPath_, 0).join("/");
				}
			}
			const As = new (class extends rs {
				compare(e, t) {
					const n = e.node.compareTo(t.node);
					return 0 === n ? Za(e.name, t.name) : n;
				}
				isDefinedOn(e) {
					return !0;
				}
				indexedValueChanged(e, t) {
					return !e.equals(t);
				}
				minPost() {
					return ns.MIN;
				}
				maxPost() {
					return ns.MAX;
				}
				makePost(e, t) {
					const n = Ns(e);
					return new ns(t, n);
				}
				toString() {
					return ".value";
				}
			})();
			function Os(e) {
				return { type: "value", snapshotNode: e };
			}
			function Rs(e, t) {
				return { type: "child_added", snapshotNode: t, childName: e };
			}
			function Ds(e, t) {
				return { type: "child_removed", snapshotNode: t, childName: e };
			}
			function Ls(e, t, n) {
				return {
					type: "child_changed",
					snapshotNode: t,
					childName: e,
					oldSnap: n,
				};
			}
			class Ms {
				constructor(e) {
					this.index_ = e;
				}
				updateChild(e, t, n, r, i, a) {
					er(
						e.isIndexed(this.index_),
						"A node must be indexed if only a child is updated"
					);
					const o = e.getImmediateChild(t);
					return o.getChild(r).equals(n.getChild(r)) &&
						o.isEmpty() === n.isEmpty()
						? e
						: (null != a &&
								(n.isEmpty()
									? e.hasChild(t)
										? a.trackChildChange(Ds(t, o))
										: er(
												e.isLeafNode(),
												"A child remove without an old child only makes sense on a leaf node"
										  )
									: o.isEmpty()
									? a.trackChildChange(Rs(t, n))
									: a.trackChildChange(Ls(t, n, o))),
						  e.isLeafNode() && n.isEmpty()
								? e
								: e
										.updateImmediateChild(t, n)
										.withIndex(this.index_));
				}
				updateFullNode(e, t, n) {
					return (
						null != n &&
							(e.isLeafNode() ||
								e.forEachChild(_s, (e, r) => {
									t.hasChild(e) ||
										n.trackChildChange(Ds(e, r));
								}),
							t.isLeafNode() ||
								t.forEachChild(_s, (t, r) => {
									if (e.hasChild(t)) {
										const i = e.getImmediateChild(t);
										i.equals(r) ||
											n.trackChildChange(Ls(t, r, i));
									} else n.trackChildChange(Rs(t, r));
								})),
						t.withIndex(this.index_)
					);
				}
				updatePriority(e, t) {
					return e.isEmpty() ? Ts.EMPTY_NODE : e.updatePriority(t);
				}
				filtersNodes() {
					return !1;
				}
				getIndexedFilter() {
					return this;
				}
				getIndex() {
					return this.index_;
				}
			}
			class Fs {
				constructor(e) {
					(this.indexedFilter_ = new Ms(e.getIndex())),
						(this.index_ = e.getIndex()),
						(this.startPost_ = Fs.getStartPost_(e)),
						(this.endPost_ = Fs.getEndPost_(e)),
						(this.startIsInclusive_ = !e.startAfterSet_),
						(this.endIsInclusive_ = !e.endBeforeSet_);
				}
				getStartPost() {
					return this.startPost_;
				}
				getEndPost() {
					return this.endPost_;
				}
				matches(e) {
					const t = this.startIsInclusive_
							? this.index_.compare(this.getStartPost(), e) <= 0
							: this.index_.compare(this.getStartPost(), e) < 0,
						n = this.endIsInclusive_
							? this.index_.compare(e, this.getEndPost()) <= 0
							: this.index_.compare(e, this.getEndPost()) < 0;
					return t && n;
				}
				updateChild(e, t, n, r, i, a) {
					return (
						this.matches(new ns(t, n)) || (n = Ts.EMPTY_NODE),
						this.indexedFilter_.updateChild(e, t, n, r, i, a)
					);
				}
				updateFullNode(e, t, n) {
					t.isLeafNode() && (t = Ts.EMPTY_NODE);
					let r = t.withIndex(this.index_);
					r = r.updatePriority(Ts.EMPTY_NODE);
					const i = this;
					return (
						t.forEachChild(_s, (e, t) => {
							i.matches(new ns(e, t)) ||
								(r = r.updateImmediateChild(e, Ts.EMPTY_NODE));
						}),
						this.indexedFilter_.updateFullNode(e, r, n)
					);
				}
				updatePriority(e, t) {
					return e;
				}
				filtersNodes() {
					return !0;
				}
				getIndexedFilter() {
					return this.indexedFilter_;
				}
				getIndex() {
					return this.index_;
				}
				static getStartPost_(e) {
					if (e.hasStart()) {
						const t = e.getIndexStartName();
						return e.getIndex().makePost(e.getIndexStartValue(), t);
					}
					return e.getIndex().minPost();
				}
				static getEndPost_(e) {
					if (e.hasEnd()) {
						const t = e.getIndexEndName();
						return e.getIndex().makePost(e.getIndexEndValue(), t);
					}
					return e.getIndex().maxPost();
				}
			}
			class zs {
				constructor(e) {
					(this.withinDirectionalStart = (e) =>
						this.reverse_
							? this.withinEndPost(e)
							: this.withinStartPost(e)),
						(this.withinDirectionalEnd = (e) =>
							this.reverse_
								? this.withinStartPost(e)
								: this.withinEndPost(e)),
						(this.withinStartPost = (e) => {
							const t = this.index_.compare(
								this.rangedFilter_.getStartPost(),
								e
							);
							return this.startIsInclusive_ ? t <= 0 : t < 0;
						}),
						(this.withinEndPost = (e) => {
							const t = this.index_.compare(
								e,
								this.rangedFilter_.getEndPost()
							);
							return this.endIsInclusive_ ? t <= 0 : t < 0;
						}),
						(this.rangedFilter_ = new Fs(e)),
						(this.index_ = e.getIndex()),
						(this.limit_ = e.getLimit()),
						(this.reverse_ = !e.isViewFromLeft()),
						(this.startIsInclusive_ = !e.startAfterSet_),
						(this.endIsInclusive_ = !e.endBeforeSet_);
				}
				updateChild(e, t, n, r, i, a) {
					return (
						this.rangedFilter_.matches(new ns(t, n)) ||
							(n = Ts.EMPTY_NODE),
						e.getImmediateChild(t).equals(n)
							? e
							: e.numChildren() < this.limit_
							? this.rangedFilter_
									.getIndexedFilter()
									.updateChild(e, t, n, r, i, a)
							: this.fullLimitUpdateChild_(e, t, n, i, a)
					);
				}
				updateFullNode(e, t, n) {
					let r;
					if (t.isLeafNode() || t.isEmpty())
						r = Ts.EMPTY_NODE.withIndex(this.index_);
					else if (
						2 * this.limit_ < t.numChildren() &&
						t.isIndexed(this.index_)
					) {
						let e;
						(r = Ts.EMPTY_NODE.withIndex(this.index_)),
							(e = this.reverse_
								? t.getReverseIteratorFrom(
										this.rangedFilter_.getEndPost(),
										this.index_
								  )
								: t.getIteratorFrom(
										this.rangedFilter_.getStartPost(),
										this.index_
								  ));
						let n = 0;
						for (; e.hasNext() && n < this.limit_; ) {
							const t = e.getNext();
							if (this.withinDirectionalStart(t)) {
								if (!this.withinDirectionalEnd(t)) break;
								(r = r.updateImmediateChild(t.name, t.node)),
									n++;
							}
						}
					} else {
						let e;
						(r = t.withIndex(this.index_)),
							(r = r.updatePriority(Ts.EMPTY_NODE)),
							(e = this.reverse_
								? r.getReverseIterator(this.index_)
								: r.getIterator(this.index_));
						let n = 0;
						for (; e.hasNext(); ) {
							const t = e.getNext();
							n < this.limit_ &&
							this.withinDirectionalStart(t) &&
							this.withinDirectionalEnd(t)
								? n++
								: (r = r.updateImmediateChild(
										t.name,
										Ts.EMPTY_NODE
								  ));
						}
					}
					return this.rangedFilter_
						.getIndexedFilter()
						.updateFullNode(e, r, n);
				}
				updatePriority(e, t) {
					return e;
				}
				filtersNodes() {
					return !0;
				}
				getIndexedFilter() {
					return this.rangedFilter_.getIndexedFilter();
				}
				getIndex() {
					return this.index_;
				}
				fullLimitUpdateChild_(e, t, n, r, i) {
					let a;
					if (this.reverse_) {
						const e = this.index_.getCompare();
						a = (t, n) => e(n, t);
					} else a = this.index_.getCompare();
					const o = e;
					er(o.numChildren() === this.limit_, "");
					const s = new ns(t, n),
						l = this.reverse_
							? o.getFirstChild(this.index_)
							: o.getLastChild(this.index_),
						c = this.rangedFilter_.matches(s);
					if (o.hasChild(t)) {
						const e = o.getImmediateChild(t);
						let u = r.getChildAfterChild(
							this.index_,
							l,
							this.reverse_
						);
						for (
							;
							null != u && (u.name === t || o.hasChild(u.name));

						)
							u = r.getChildAfterChild(
								this.index_,
								u,
								this.reverse_
							);
						const d = null == u ? 1 : a(u, s);
						if (c && !n.isEmpty() && d >= 0)
							return (
								null != i && i.trackChildChange(Ls(t, n, e)),
								o.updateImmediateChild(t, n)
							);
						{
							null != i && i.trackChildChange(Ds(t, e));
							const n = o.updateImmediateChild(t, Ts.EMPTY_NODE);
							return null != u && this.rangedFilter_.matches(u)
								? (null != i &&
										i.trackChildChange(Rs(u.name, u.node)),
								  n.updateImmediateChild(u.name, u.node))
								: n;
						}
					}
					return n.isEmpty()
						? e
						: c && a(l, s) >= 0
						? (null != i &&
								(i.trackChildChange(Ds(l.name, l.node)),
								i.trackChildChange(Rs(t, n))),
						  o
								.updateImmediateChild(t, n)
								.updateImmediateChild(l.name, Ts.EMPTY_NODE))
						: e;
				}
			}
			class js {
				constructor() {
					(this.limitSet_ = !1),
						(this.startSet_ = !1),
						(this.startNameSet_ = !1),
						(this.startAfterSet_ = !1),
						(this.endSet_ = !1),
						(this.endNameSet_ = !1),
						(this.endBeforeSet_ = !1),
						(this.limit_ = 0),
						(this.viewFrom_ = ""),
						(this.indexStartValue_ = null),
						(this.indexStartName_ = ""),
						(this.indexEndValue_ = null),
						(this.indexEndName_ = ""),
						(this.index_ = _s);
				}
				hasStart() {
					return this.startSet_;
				}
				isViewFromLeft() {
					return "" === this.viewFrom_
						? this.startSet_
						: "l" === this.viewFrom_;
				}
				getIndexStartValue() {
					return (
						er(this.startSet_, "Only valid if start has been set"),
						this.indexStartValue_
					);
				}
				getIndexStartName() {
					return (
						er(this.startSet_, "Only valid if start has been set"),
						this.startNameSet_ ? this.indexStartName_ : Xa
					);
				}
				hasEnd() {
					return this.endSet_;
				}
				getIndexEndValue() {
					return (
						er(this.endSet_, "Only valid if end has been set"),
						this.indexEndValue_
					);
				}
				getIndexEndName() {
					return (
						er(this.endSet_, "Only valid if end has been set"),
						this.endNameSet_ ? this.indexEndName_ : Ja
					);
				}
				hasLimit() {
					return this.limitSet_;
				}
				hasAnchoredLimit() {
					return this.limitSet_ && "" !== this.viewFrom_;
				}
				getLimit() {
					return (
						er(this.limitSet_, "Only valid if limit has been set"),
						this.limit_
					);
				}
				getIndex() {
					return this.index_;
				}
				loadsAllData() {
					return !(this.startSet_ || this.endSet_ || this.limitSet_);
				}
				isDefault() {
					return this.loadsAllData() && this.index_ === _s;
				}
				copy() {
					const e = new js();
					return (
						(e.limitSet_ = this.limitSet_),
						(e.limit_ = this.limit_),
						(e.startSet_ = this.startSet_),
						(e.startAfterSet_ = this.startAfterSet_),
						(e.indexStartValue_ = this.indexStartValue_),
						(e.startNameSet_ = this.startNameSet_),
						(e.indexStartName_ = this.indexStartName_),
						(e.endSet_ = this.endSet_),
						(e.endBeforeSet_ = this.endBeforeSet_),
						(e.indexEndValue_ = this.indexEndValue_),
						(e.endNameSet_ = this.endNameSet_),
						(e.indexEndName_ = this.indexEndName_),
						(e.index_ = this.index_),
						(e.viewFrom_ = this.viewFrom_),
						e
					);
				}
			}
			function qs(e, t, n) {
				const r = e.copy();
				return (
					(r.startSet_ = !0),
					void 0 === t && (t = null),
					(r.indexStartValue_ = t),
					null != n
						? ((r.startNameSet_ = !0), (r.indexStartName_ = n))
						: ((r.startNameSet_ = !1), (r.indexStartName_ = "")),
					r
				);
			}
			function Us(e, t, n) {
				const r = e.copy();
				return (
					(r.endSet_ = !0),
					void 0 === t && (t = null),
					(r.indexEndValue_ = t),
					void 0 !== n
						? ((r.endNameSet_ = !0), (r.indexEndName_ = n))
						: ((r.endNameSet_ = !1), (r.indexEndName_ = "")),
					r
				);
			}
			function Ws(e, t) {
				const n = e.copy();
				return (n.index_ = t), n;
			}
			function Bs(e) {
				const t = {};
				if (e.isDefault()) return t;
				let n;
				if (
					(e.index_ === _s
						? (n = "$priority")
						: e.index_ === As
						? (n = "$value")
						: e.index_ === os
						? (n = "$key")
						: (er(
								e.index_ instanceof Is,
								"Unrecognized index type!"
						  ),
						  (n = e.index_.toString())),
					(t.orderBy = wr(n)),
					e.startSet_)
				) {
					const n = e.startAfterSet_ ? "startAfter" : "startAt";
					(t[n] = wr(e.indexStartValue_)),
						e.startNameSet_ &&
							(t[n] += "," + wr(e.indexStartName_));
				}
				if (e.endSet_) {
					const n = e.endBeforeSet_ ? "endBefore" : "endAt";
					(t[n] = wr(e.indexEndValue_)),
						e.endNameSet_ && (t[n] += "," + wr(e.indexEndName_));
				}
				return (
					e.limitSet_ &&
						(e.isViewFromLeft()
							? (t.limitToFirst = e.limit_)
							: (t.limitToLast = e.limit_)),
					t
				);
			}
			function Hs(e) {
				const t = {};
				if (
					(e.startSet_ &&
						((t.sp = e.indexStartValue_),
						e.startNameSet_ && (t.sn = e.indexStartName_),
						(t.sin = !e.startAfterSet_)),
					e.endSet_ &&
						((t.ep = e.indexEndValue_),
						e.endNameSet_ && (t.en = e.indexEndName_),
						(t.ein = !e.endBeforeSet_)),
					e.limitSet_)
				) {
					t.l = e.limit_;
					let n = e.viewFrom_;
					"" === n && (n = e.isViewFromLeft() ? "l" : "r"),
						(t.vf = n);
				}
				return e.index_ !== _s && (t.i = e.index_.toString()), t;
			}
			class Vs extends Ro {
				reportStats(e) {
					throw new Error("Method not implemented.");
				}
				static getListenId_(e, t) {
					return void 0 !== t
						? "tag$" + t
						: (er(
								e._queryParams.isDefault(),
								"should have a tag if it's not a default query."
						  ),
						  e._path.toString());
				}
				constructor(e, t, n, r) {
					super(),
						(this.repoInfo_ = e),
						(this.onDataUpdate_ = t),
						(this.authTokenProvider_ = n),
						(this.appCheckTokenProvider_ = r),
						(this.log_ = $a("p:rest:")),
						(this.listens_ = {});
				}
				listen(e, t, n, r) {
					const i = e._path.toString();
					this.log_(
						"Listen called for " + i + " " + e._queryIdentifier
					);
					const a = Vs.getListenId_(e, n),
						o = {};
					this.listens_[a] = o;
					const s = Bs(e._queryParams);
					this.restRequest_(i + ".json", s, (e, t) => {
						let s = t;
						if (
							(404 === e && ((s = null), (e = null)),
							null === e && this.onDataUpdate_(i, s, !1, n),
							Cr(this.listens_, a) === o)
						) {
							let t;
							(t = e
								? 401 === e
									? "permission_denied"
									: "rest_error:" + e
								: "ok"),
								r(t, null);
						}
					});
				}
				unlisten(e, t) {
					const n = Vs.getListenId_(e, t);
					delete this.listens_[n];
				}
				get(e) {
					const t = Bs(e._queryParams),
						n = e._path.toString(),
						r = new fr();
					return (
						this.restRequest_(n + ".json", t, (e, t) => {
							let i = t;
							404 === e && ((i = null), (e = null)),
								null === e
									? (this.onDataUpdate_(n, i, !1, null),
									  r.resolve(i))
									: r.reject(new Error(i));
						}),
						r.promise
					);
				}
				refreshAuthToken(e) {}
				restRequest_(e) {
					let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						n = arguments.length > 2 ? arguments[2] : void 0;
					return (
						(t.format = "export"),
						Promise.all([
							this.authTokenProvider_.getToken(!1),
							this.appCheckTokenProvider_.getToken(!1),
						]).then((r) => {
							let [i, a] = r;
							i && i.accessToken && (t.auth = i.accessToken),
								a && a.token && (t.ac = a.token);
							const o =
								(this.repoInfo_.secure
									? "https://"
									: "http://") +
								this.repoInfo_.host +
								e +
								"?ns=" +
								this.repoInfo_.namespace +
								(function (e) {
									const t = [];
									for (const [n, r] of Object.entries(e))
										Array.isArray(r)
											? r.forEach((e) => {
													t.push(
														encodeURIComponent(n) +
															"=" +
															encodeURIComponent(
																e
															)
													);
											  })
											: t.push(
													encodeURIComponent(n) +
														"=" +
														encodeURIComponent(r)
											  );
									return t.length ? "&" + t.join("&") : "";
								})(t);
							this.log_("Sending REST request for " + o);
							const s = new XMLHttpRequest();
							(s.onreadystatechange = () => {
								if (n && 4 === s.readyState) {
									this.log_(
										"REST Response for " +
											o +
											" received. status:",
										s.status,
										"response:",
										s.responseText
									);
									let e = null;
									if (s.status >= 200 && s.status < 300) {
										try {
											e = br(s.responseText);
										} catch (pf) {
											Ka(
												"Failed to parse JSON response for " +
													o +
													": " +
													s.responseText
											);
										}
										n(null, e);
									} else
										401 !== s.status &&
											404 !== s.status &&
											Ka(
												"Got unsuccessful REST response for " +
													o +
													" Status: " +
													s.status
											),
											n(s.status);
									n = null;
								}
							}),
								s.open("GET", o, !0),
								s.send();
						})
					);
				}
			}
			class $s {
				constructor() {
					this.rootNode_ = Ts.EMPTY_NODE;
				}
				getNode(e) {
					return this.rootNode_.getChild(e);
				}
				updateSnapshot(e, t) {
					this.rootNode_ = this.rootNode_.updateChild(e, t);
				}
			}
			function Qs() {
				return { value: null, children: new Map() };
			}
			function Ys(e, t, n) {
				if (Vo(t)) (e.value = n), e.children.clear();
				else if (null !== e.value) e.value = e.value.updateChild(t, n);
				else {
					const r = zo(t);
					e.children.has(r) || e.children.set(r, Qs());
					Ys(e.children.get(r), (t = qo(t)), n);
				}
			}
			function Ks(e, t) {
				if (Vo(t)) return (e.value = null), e.children.clear(), !0;
				if (null !== e.value) {
					if (e.value.isLeafNode()) return !1;
					{
						const n = e.value;
						return (
							(e.value = null),
							n.forEachChild(_s, (t, n) => {
								Ys(e, new Mo(t), n);
							}),
							Ks(e, t)
						);
					}
				}
				if (e.children.size > 0) {
					const n = zo(t);
					if (((t = qo(t)), e.children.has(n))) {
						Ks(e.children.get(n), t) && e.children.delete(n);
					}
					return 0 === e.children.size;
				}
				return !0;
			}
			function Gs(e, t, n) {
				null !== e.value
					? n(t, e.value)
					: (function (e, t) {
							e.children.forEach((e, n) => {
								t(n, e);
							});
					  })(e, (e, r) => {
							Gs(r, new Mo(t.toString() + "/" + e), n);
					  });
			}
			class Xs {
				constructor(e) {
					(this.collection_ = e), (this.last_ = null);
				}
				get() {
					const e = this.collection_.get(),
						t = Object.assign({}, e);
					return (
						this.last_ &&
							io(this.last_, (e, n) => {
								t[e] = t[e] - n;
							}),
						(this.last_ = e),
						t
					);
				}
			}
			class Js {
				constructor(e, t) {
					(this.server_ = t),
						(this.statsToReport_ = {}),
						(this.statsListener_ = new Xs(e));
					const n = 1e4 + 2e4 * Math.random();
					co(this.reportStats_.bind(this), Math.floor(n));
				}
				reportStats_() {
					const e = this.statsListener_.get(),
						t = {};
					let n = !1;
					io(e, (e, r) => {
						r > 0 &&
							Sr(this.statsToReport_, e) &&
							((t[e] = r), (n = !0));
					}),
						n && this.server_.reportStats(t),
						co(
							this.reportStats_.bind(this),
							Math.floor(2 * Math.random() * 3e5)
						);
				}
			}
			var Zs;
			function el(e) {
				return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
			}
			!(function (e) {
				(e[(e.OVERWRITE = 0)] = "OVERWRITE"),
					(e[(e.MERGE = 1)] = "MERGE"),
					(e[(e.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
					(e[(e.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
			})(Zs || (Zs = {}));
			class tl {
				constructor(e, t, n) {
					(this.path = e),
						(this.affectedTree = t),
						(this.revert = n),
						(this.type = Zs.ACK_USER_WRITE),
						(this.source = {
							fromUser: !0,
							fromServer: !1,
							queryId: null,
							tagged: !1,
						});
				}
				operationForChild(e) {
					if (Vo(this.path)) {
						if (null != this.affectedTree.value)
							return (
								er(
									this.affectedTree.children.isEmpty(),
									"affectedTree should not have overlapping affected paths."
								),
								this
							);
						{
							const t = this.affectedTree.subtree(new Mo(e));
							return new tl(Fo(), t, this.revert);
						}
					}
					return (
						er(
							zo(this.path) === e,
							"operationForChild called for unrelated child."
						),
						new tl(qo(this.path), this.affectedTree, this.revert)
					);
				}
			}
			class nl {
				constructor(e, t) {
					(this.source = e),
						(this.path = t),
						(this.type = Zs.LISTEN_COMPLETE);
				}
				operationForChild(e) {
					return Vo(this.path)
						? new nl(this.source, Fo())
						: new nl(this.source, qo(this.path));
				}
			}
			class rl {
				constructor(e, t, n) {
					(this.source = e),
						(this.path = t),
						(this.snap = n),
						(this.type = Zs.OVERWRITE);
				}
				operationForChild(e) {
					return Vo(this.path)
						? new rl(
								this.source,
								Fo(),
								this.snap.getImmediateChild(e)
						  )
						: new rl(this.source, qo(this.path), this.snap);
				}
			}
			class il {
				constructor(e, t, n) {
					(this.source = e),
						(this.path = t),
						(this.children = n),
						(this.type = Zs.MERGE);
				}
				operationForChild(e) {
					if (Vo(this.path)) {
						const t = this.children.subtree(new Mo(e));
						return t.isEmpty()
							? null
							: t.value
							? new rl(this.source, Fo(), t.value)
							: new il(this.source, Fo(), t);
					}
					return (
						er(
							zo(this.path) === e,
							"Can't get a merge for a child not on the path of the operation"
						),
						new il(this.source, qo(this.path), this.children)
					);
				}
				toString() {
					return (
						"Operation(" +
						this.path +
						": " +
						this.source.toString() +
						" merge: " +
						this.children.toString() +
						")"
					);
				}
			}
			class al {
				constructor(e, t, n) {
					(this.node_ = e),
						(this.fullyInitialized_ = t),
						(this.filtered_ = n);
				}
				isFullyInitialized() {
					return this.fullyInitialized_;
				}
				isFiltered() {
					return this.filtered_;
				}
				isCompleteForPath(e) {
					if (Vo(e))
						return this.isFullyInitialized() && !this.filtered_;
					const t = zo(e);
					return this.isCompleteForChild(t);
				}
				isCompleteForChild(e) {
					return (
						(this.isFullyInitialized() && !this.filtered_) ||
						this.node_.hasChild(e)
					);
				}
				getNode() {
					return this.node_;
				}
			}
			class ol {
				constructor(e) {
					(this.query_ = e),
						(this.index_ = this.query_._queryParams.getIndex());
				}
			}
			function sl(e, t, n, r, i, a) {
				const o = r.filter((e) => e.type === n);
				o.sort((t, n) =>
					(function (e, t, n) {
						if (null == t.childName || null == n.childName)
							throw tr("Should only compare child_ events.");
						const r = new ns(t.childName, t.snapshotNode),
							i = new ns(n.childName, n.snapshotNode);
						return e.index_.compare(r, i);
					})(e, t, n)
				),
					o.forEach((n) => {
						const r = (function (e, t, n) {
							return (
								"value" === t.type ||
									"child_removed" === t.type ||
									(t.prevName = n.getPredecessorChildName(
										t.childName,
										t.snapshotNode,
										e.index_
									)),
								t
							);
						})(e, n, a);
						i.forEach((i) => {
							i.respondsTo(n.type) &&
								t.push(i.createEvent(r, e.query_));
						});
					});
			}
			function ll(e, t) {
				return { eventCache: e, serverCache: t };
			}
			function cl(e, t, n, r) {
				return ll(new al(t, n, r), e.serverCache);
			}
			function ul(e, t, n, r) {
				return ll(e.eventCache, new al(t, n, r));
			}
			function dl(e) {
				return e.eventCache.isFullyInitialized()
					? e.eventCache.getNode()
					: null;
			}
			function fl(e) {
				return e.serverCache.isFullyInitialized()
					? e.serverCache.getNode()
					: null;
			}
			let hl;
			class pl {
				static fromObject(e) {
					let t = new pl(null);
					return (
						io(e, (e, n) => {
							t = t.set(new Mo(e), n);
						}),
						t
					);
				}
				constructor(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: (hl || (hl = new cs(eo)), hl);
					(this.value = e), (this.children = t);
				}
				isEmpty() {
					return null === this.value && this.children.isEmpty();
				}
				findRootMostMatchingPathAndValue(e, t) {
					if (null != this.value && t(this.value))
						return { path: Fo(), value: this.value };
					if (Vo(e)) return null;
					{
						const n = zo(e),
							r = this.children.get(n);
						if (null !== r) {
							const i = r.findRootMostMatchingPathAndValue(
								qo(e),
								t
							);
							if (null != i) {
								return {
									path: Ho(new Mo(n), i.path),
									value: i.value,
								};
							}
							return null;
						}
						return null;
					}
				}
				findRootMostValueAndPath(e) {
					return this.findRootMostMatchingPathAndValue(e, () => !0);
				}
				subtree(e) {
					if (Vo(e)) return this;
					{
						const t = zo(e),
							n = this.children.get(t);
						return null !== n ? n.subtree(qo(e)) : new pl(null);
					}
				}
				set(e, t) {
					if (Vo(e)) return new pl(t, this.children);
					{
						const n = zo(e),
							r = (this.children.get(n) || new pl(null)).set(
								qo(e),
								t
							),
							i = this.children.insert(n, r);
						return new pl(this.value, i);
					}
				}
				remove(e) {
					if (Vo(e))
						return this.children.isEmpty()
							? new pl(null)
							: new pl(null, this.children);
					{
						const t = zo(e),
							n = this.children.get(t);
						if (n) {
							const r = n.remove(qo(e));
							let i;
							return (
								(i = r.isEmpty()
									? this.children.remove(t)
									: this.children.insert(t, r)),
								null === this.value && i.isEmpty()
									? new pl(null)
									: new pl(this.value, i)
							);
						}
						return this;
					}
				}
				get(e) {
					if (Vo(e)) return this.value;
					{
						const t = zo(e),
							n = this.children.get(t);
						return n ? n.get(qo(e)) : null;
					}
				}
				setTree(e, t) {
					if (Vo(e)) return t;
					{
						const n = zo(e),
							r = (this.children.get(n) || new pl(null)).setTree(
								qo(e),
								t
							);
						let i;
						return (
							(i = r.isEmpty()
								? this.children.remove(n)
								: this.children.insert(n, r)),
							new pl(this.value, i)
						);
					}
				}
				fold(e) {
					return this.fold_(Fo(), e);
				}
				fold_(e, t) {
					const n = {};
					return (
						this.children.inorderTraversal((r, i) => {
							n[r] = i.fold_(Ho(e, r), t);
						}),
						t(e, this.value, n)
					);
				}
				findOnPath(e, t) {
					return this.findOnPath_(e, Fo(), t);
				}
				findOnPath_(e, t, n) {
					const r = !!this.value && n(t, this.value);
					if (r) return r;
					if (Vo(e)) return null;
					{
						const r = zo(e),
							i = this.children.get(r);
						return i ? i.findOnPath_(qo(e), Ho(t, r), n) : null;
					}
				}
				foreachOnPath(e, t) {
					return this.foreachOnPath_(e, Fo(), t);
				}
				foreachOnPath_(e, t, n) {
					if (Vo(e)) return this;
					{
						this.value && n(t, this.value);
						const r = zo(e),
							i = this.children.get(r);
						return i
							? i.foreachOnPath_(qo(e), Ho(t, r), n)
							: new pl(null);
					}
				}
				foreach(e) {
					this.foreach_(Fo(), e);
				}
				foreach_(e, t) {
					this.children.inorderTraversal((n, r) => {
						r.foreach_(Ho(e, n), t);
					}),
						this.value && t(e, this.value);
				}
				foreachChild(e) {
					this.children.inorderTraversal((t, n) => {
						n.value && e(t, n.value);
					});
				}
			}
			class ml {
				constructor(e) {
					this.writeTree_ = e;
				}
				static empty() {
					return new ml(new pl(null));
				}
			}
			function gl(e, t, n) {
				if (Vo(t)) return new ml(new pl(n));
				{
					const r = e.writeTree_.findRootMostValueAndPath(t);
					if (null != r) {
						const i = r.path;
						let a = r.value;
						const o = $o(i, t);
						return (
							(a = a.updateChild(o, n)),
							new ml(e.writeTree_.set(i, a))
						);
					}
					{
						const r = new pl(n),
							i = e.writeTree_.setTree(t, r);
						return new ml(i);
					}
				}
			}
			function yl(e, t, n) {
				let r = e;
				return (
					io(n, (e, n) => {
						r = gl(r, Ho(t, e), n);
					}),
					r
				);
			}
			function vl(e, t) {
				if (Vo(t)) return ml.empty();
				{
					const n = e.writeTree_.setTree(t, new pl(null));
					return new ml(n);
				}
			}
			function _l(e, t) {
				return null != bl(e, t);
			}
			function bl(e, t) {
				const n = e.writeTree_.findRootMostValueAndPath(t);
				return null != n
					? e.writeTree_.get(n.path).getChild($o(n.path, t))
					: null;
			}
			function wl(e) {
				const t = [],
					n = e.writeTree_.value;
				return (
					null != n
						? n.isLeafNode() ||
						  n.forEachChild(_s, (e, n) => {
								t.push(new ns(e, n));
						  })
						: e.writeTree_.children.inorderTraversal((e, n) => {
								null != n.value && t.push(new ns(e, n.value));
						  }),
					t
				);
			}
			function kl(e, t) {
				if (Vo(t)) return e;
				{
					const n = bl(e, t);
					return new ml(
						null != n ? new pl(n) : e.writeTree_.subtree(t)
					);
				}
			}
			function Sl(e) {
				return e.writeTree_.isEmpty();
			}
			function Cl(e, t) {
				return El(Fo(), e.writeTree_, t);
			}
			function El(e, t, n) {
				if (null != t.value) return n.updateChild(e, t.value);
				{
					let r = null;
					return (
						t.children.inorderTraversal((t, i) => {
							".priority" === t
								? (er(
										null !== i.value,
										"Priority writes must always be leaf nodes"
								  ),
								  (r = i.value))
								: (n = El(Ho(e, t), i, n));
						}),
						n.getChild(e).isEmpty() ||
							null === r ||
							(n = n.updateChild(Ho(e, ".priority"), r)),
						n
					);
				}
			}
			function xl(e, t) {
				return jl(t, e);
			}
			function Tl(e, t) {
				const n = e.allWrites.findIndex((e) => e.writeId === t);
				er(n >= 0, "removeWrite called with nonexistent writeId.");
				const r = e.allWrites[n];
				e.allWrites.splice(n, 1);
				let i = r.visible,
					a = !1,
					o = e.allWrites.length - 1;
				for (; i && o >= 0; ) {
					const t = e.allWrites[o];
					t.visible &&
						(o >= n && Pl(t, r.path)
							? (i = !1)
							: Ko(r.path, t.path) && (a = !0)),
						o--;
				}
				if (i) {
					if (a)
						return (
							(function (e) {
								(e.visibleWrites = Il(e.allWrites, Nl, Fo())),
									e.allWrites.length > 0
										? (e.lastWriteId =
												e.allWrites[
													e.allWrites.length - 1
												].writeId)
										: (e.lastWriteId = -1);
							})(e),
							!0
						);
					if (r.snap) e.visibleWrites = vl(e.visibleWrites, r.path);
					else {
						io(r.children, (t) => {
							e.visibleWrites = vl(
								e.visibleWrites,
								Ho(r.path, t)
							);
						});
					}
					return !0;
				}
				return !1;
			}
			function Pl(e, t) {
				if (e.snap) return Ko(e.path, t);
				for (const n in e.children)
					if (e.children.hasOwnProperty(n) && Ko(Ho(e.path, n), t))
						return !0;
				return !1;
			}
			function Nl(e) {
				return e.visible;
			}
			function Il(e, t, n) {
				let r = ml.empty();
				for (let i = 0; i < e.length; ++i) {
					const a = e[i];
					if (t(a)) {
						const e = a.path;
						let t;
						if (a.snap)
							Ko(n, e)
								? ((t = $o(n, e)), (r = gl(r, t, a.snap)))
								: Ko(e, n) &&
								  ((t = $o(e, n)),
								  (r = gl(r, Fo(), a.snap.getChild(t))));
						else {
							if (!a.children)
								throw tr(
									"WriteRecord should have .snap or .children"
								);
							if (Ko(n, e))
								(t = $o(n, e)), (r = yl(r, t, a.children));
							else if (Ko(e, n))
								if (((t = $o(e, n)), Vo(t)))
									r = yl(r, Fo(), a.children);
								else {
									const e = Cr(a.children, zo(t));
									if (e) {
										const n = e.getChild(qo(t));
										r = gl(r, Fo(), n);
									}
								}
						}
					}
				}
				return r;
			}
			function Al(e, t, n, r, i) {
				if (r || i) {
					const a = kl(e.visibleWrites, t);
					if (!i && Sl(a)) return n;
					if (i || null != n || _l(a, Fo())) {
						const a = function (e) {
							return (
								(e.visible || i) &&
								(!r || !~r.indexOf(e.writeId)) &&
								(Ko(e.path, t) || Ko(t, e.path))
							);
						};
						return Cl(Il(e.allWrites, a, t), n || Ts.EMPTY_NODE);
					}
					return null;
				}
				{
					const r = bl(e.visibleWrites, t);
					if (null != r) return r;
					{
						const r = kl(e.visibleWrites, t);
						if (Sl(r)) return n;
						if (null != n || _l(r, Fo())) {
							return Cl(r, n || Ts.EMPTY_NODE);
						}
						return null;
					}
				}
			}
			function Ol(e, t, n, r) {
				return Al(e.writeTree, e.treePath, t, n, r);
			}
			function Rl(e, t) {
				return (function (e, t, n) {
					let r = Ts.EMPTY_NODE;
					const i = bl(e.visibleWrites, t);
					if (i)
						return (
							i.isLeafNode() ||
								i.forEachChild(_s, (e, t) => {
									r = r.updateImmediateChild(e, t);
								}),
							r
						);
					if (n) {
						const i = kl(e.visibleWrites, t);
						return (
							n.forEachChild(_s, (e, t) => {
								const n = Cl(kl(i, new Mo(e)), t);
								r = r.updateImmediateChild(e, n);
							}),
							wl(i).forEach((e) => {
								r = r.updateImmediateChild(e.name, e.node);
							}),
							r
						);
					}
					return (
						wl(kl(e.visibleWrites, t)).forEach((e) => {
							r = r.updateImmediateChild(e.name, e.node);
						}),
						r
					);
				})(e.writeTree, e.treePath, t);
			}
			function Dl(e, t, n, r) {
				return (function (e, t, n, r, i) {
					er(
						r || i,
						"Either existingEventSnap or existingServerSnap must exist"
					);
					const a = Ho(t, n);
					if (_l(e.visibleWrites, a)) return null;
					{
						const t = kl(e.visibleWrites, a);
						return Sl(t) ? i.getChild(n) : Cl(t, i.getChild(n));
					}
				})(e.writeTree, e.treePath, t, n, r);
			}
			function Ll(e, t) {
				return (function (e, t) {
					return bl(e.visibleWrites, t);
				})(e.writeTree, Ho(e.treePath, t));
			}
			function Ml(e, t, n, r, i, a) {
				return (function (e, t, n, r, i, a, o) {
					let s;
					const l = kl(e.visibleWrites, t),
						c = bl(l, Fo());
					if (null != c) s = c;
					else {
						if (null == n) return [];
						s = Cl(l, n);
					}
					if (((s = s.withIndex(o)), s.isEmpty() || s.isLeafNode()))
						return [];
					{
						const e = [],
							t = o.getCompare(),
							n = a
								? s.getReverseIteratorFrom(r, o)
								: s.getIteratorFrom(r, o);
						let l = n.getNext();
						for (; l && e.length < i; )
							0 !== t(l, r) && e.push(l), (l = n.getNext());
						return e;
					}
				})(e.writeTree, e.treePath, t, n, r, i, a);
			}
			function Fl(e, t, n) {
				return (function (e, t, n, r) {
					const i = Ho(t, n),
						a = bl(e.visibleWrites, i);
					if (null != a) return a;
					if (r.isCompleteForChild(n))
						return Cl(
							kl(e.visibleWrites, i),
							r.getNode().getImmediateChild(n)
						);
					return null;
				})(e.writeTree, e.treePath, t, n);
			}
			function zl(e, t) {
				return jl(Ho(e.treePath, t), e.writeTree);
			}
			function jl(e, t) {
				return { treePath: e, writeTree: t };
			}
			class ql {
				constructor() {
					this.changeMap = new Map();
				}
				trackChildChange(e) {
					const t = e.type,
						n = e.childName;
					er(
						"child_added" === t ||
							"child_changed" === t ||
							"child_removed" === t,
						"Only child changes supported for tracking"
					),
						er(
							".priority" !== n,
							"Only non-priority child changes can be tracked."
						);
					const r = this.changeMap.get(n);
					if (r) {
						const i = r.type;
						if ("child_added" === t && "child_removed" === i)
							this.changeMap.set(
								n,
								Ls(n, e.snapshotNode, r.snapshotNode)
							);
						else if ("child_removed" === t && "child_added" === i)
							this.changeMap.delete(n);
						else if ("child_removed" === t && "child_changed" === i)
							this.changeMap.set(n, Ds(n, r.oldSnap));
						else if ("child_changed" === t && "child_added" === i)
							this.changeMap.set(n, Rs(n, e.snapshotNode));
						else {
							if ("child_changed" !== t || "child_changed" !== i)
								throw tr(
									"Illegal combination of changes: " +
										e +
										" occurred after " +
										r
								);
							this.changeMap.set(
								n,
								Ls(n, e.snapshotNode, r.oldSnap)
							);
						}
					} else this.changeMap.set(n, e);
				}
				getChanges() {
					return Array.from(this.changeMap.values());
				}
			}
			const Ul = new (class {
				getCompleteChild(e) {
					return null;
				}
				getChildAfterChild(e, t, n) {
					return null;
				}
			})();
			class Wl {
				constructor(e, t) {
					let n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: null;
					(this.writes_ = e),
						(this.viewCache_ = t),
						(this.optCompleteServerCache_ = n);
				}
				getCompleteChild(e) {
					const t = this.viewCache_.eventCache;
					if (t.isCompleteForChild(e))
						return t.getNode().getImmediateChild(e);
					{
						const t =
							null != this.optCompleteServerCache_
								? new al(this.optCompleteServerCache_, !0, !1)
								: this.viewCache_.serverCache;
						return Fl(this.writes_, e, t);
					}
				}
				getChildAfterChild(e, t, n) {
					const r =
							null != this.optCompleteServerCache_
								? this.optCompleteServerCache_
								: fl(this.viewCache_),
						i = Ml(this.writes_, r, t, 1, n, e);
					return 0 === i.length ? null : i[0];
				}
			}
			function Bl(e, t, n, r, i) {
				const a = new ql();
				let o, s;
				if (n.type === Zs.OVERWRITE) {
					const l = n;
					l.source.fromUser
						? (o = $l(e, t, l.path, l.snap, r, i, a))
						: (er(l.source.fromServer, "Unknown source."),
						  (s =
								l.source.tagged ||
								(t.serverCache.isFiltered() && !Vo(l.path))),
						  (o = Vl(e, t, l.path, l.snap, r, i, s, a)));
				} else if (n.type === Zs.MERGE) {
					const l = n;
					l.source.fromUser
						? (o = (function (e, t, n, r, i, a, o) {
								let s = t;
								return (
									r.foreach((r, l) => {
										const c = Ho(n, r);
										Ql(t, zo(c)) &&
											(s = $l(e, s, c, l, i, a, o));
									}),
									r.foreach((r, l) => {
										const c = Ho(n, r);
										Ql(t, zo(c)) ||
											(s = $l(e, s, c, l, i, a, o));
									}),
									s
								);
						  })(e, t, l.path, l.children, r, i, a))
						: (er(l.source.fromServer, "Unknown source."),
						  (s = l.source.tagged || t.serverCache.isFiltered()),
						  (o = Kl(e, t, l.path, l.children, r, i, s, a)));
				} else if (n.type === Zs.ACK_USER_WRITE) {
					const s = n;
					o = s.revert
						? (function (e, t, n, r, i, a) {
								let o;
								if (null != Ll(r, n)) return t;
								{
									const s = new Wl(r, t, i),
										l = t.eventCache.getNode();
									let c;
									if (Vo(n) || ".priority" === zo(n)) {
										let n;
										if (t.serverCache.isFullyInitialized())
											n = Ol(r, fl(t));
										else {
											const e = t.serverCache.getNode();
											er(
												e instanceof Ts,
												"serverChildren would be complete if leaf node"
											),
												(n = Rl(r, e));
										}
										c = e.filter.updateFullNode(l, n, a);
									} else {
										const i = zo(n);
										let u = Fl(r, i, t.serverCache);
										null == u &&
											t.serverCache.isCompleteForChild(
												i
											) &&
											(u = l.getImmediateChild(i)),
											(c =
												null != u
													? e.filter.updateChild(
															l,
															i,
															u,
															qo(n),
															s,
															a
													  )
													: t.eventCache
															.getNode()
															.hasChild(i)
													? e.filter.updateChild(
															l,
															i,
															Ts.EMPTY_NODE,
															qo(n),
															s,
															a
													  )
													: l),
											c.isEmpty() &&
												t.serverCache.isFullyInitialized() &&
												((o = Ol(r, fl(t))),
												o.isLeafNode() &&
													(c =
														e.filter.updateFullNode(
															c,
															o,
															a
														)));
									}
									return (
										(o =
											t.serverCache.isFullyInitialized() ||
											null != Ll(r, Fo())),
										cl(t, c, o, e.filter.filtersNodes())
									);
								}
						  })(e, t, s.path, r, i, a)
						: (function (e, t, n, r, i, a, o) {
								if (null != Ll(i, n)) return t;
								const s = t.serverCache.isFiltered(),
									l = t.serverCache;
								if (null != r.value) {
									if (
										(Vo(n) && l.isFullyInitialized()) ||
										l.isCompleteForPath(n)
									)
										return Vl(
											e,
											t,
											n,
											l.getNode().getChild(n),
											i,
											a,
											s,
											o
										);
									if (Vo(n)) {
										let r = new pl(null);
										return (
											l
												.getNode()
												.forEachChild(os, (e, t) => {
													r = r.set(new Mo(e), t);
												}),
											Kl(e, t, n, r, i, a, s, o)
										);
									}
									return t;
								}
								{
									let c = new pl(null);
									return (
										r.foreach((e, t) => {
											const r = Ho(n, e);
											l.isCompleteForPath(r) &&
												(c = c.set(
													e,
													l.getNode().getChild(r)
												));
										}),
										Kl(e, t, n, c, i, a, s, o)
									);
								}
						  })(e, t, s.path, s.affectedTree, r, i, a);
				} else {
					if (n.type !== Zs.LISTEN_COMPLETE)
						throw tr("Unknown operation type: " + n.type);
					o = (function (e, t, n, r, i) {
						const a = t.serverCache,
							o = ul(
								t,
								a.getNode(),
								a.isFullyInitialized() || Vo(n),
								a.isFiltered()
							);
						return Hl(e, o, n, r, Ul, i);
					})(e, t, n.path, r, a);
				}
				const l = a.getChanges();
				return (
					(function (e, t, n) {
						const r = t.eventCache;
						if (r.isFullyInitialized()) {
							const i =
									r.getNode().isLeafNode() ||
									r.getNode().isEmpty(),
								a = dl(e);
							(n.length > 0 ||
								!e.eventCache.isFullyInitialized() ||
								(i && !r.getNode().equals(a)) ||
								!r
									.getNode()
									.getPriority()
									.equals(a.getPriority())) &&
								n.push(Os(dl(t)));
						}
					})(t, o, l),
					{ viewCache: o, changes: l }
				);
			}
			function Hl(e, t, n, r, i, a) {
				const o = t.eventCache;
				if (null != Ll(r, n)) return t;
				{
					let s, l;
					if (Vo(n))
						if (
							(er(
								t.serverCache.isFullyInitialized(),
								"If change path is empty, we must have complete server data"
							),
							t.serverCache.isFiltered())
						) {
							const n = fl(t),
								i = Rl(r, n instanceof Ts ? n : Ts.EMPTY_NODE);
							s = e.filter.updateFullNode(
								t.eventCache.getNode(),
								i,
								a
							);
						} else {
							const n = Ol(r, fl(t));
							s = e.filter.updateFullNode(
								t.eventCache.getNode(),
								n,
								a
							);
						}
					else {
						const c = zo(n);
						if (".priority" === c) {
							er(
								1 === jo(n),
								"Can't have a priority with additional path components"
							);
							const i = o.getNode();
							l = t.serverCache.getNode();
							const a = Dl(r, n, i, l);
							s =
								null != a
									? e.filter.updatePriority(i, a)
									: o.getNode();
						} else {
							const u = qo(n);
							let d;
							if (o.isCompleteForChild(c)) {
								l = t.serverCache.getNode();
								const e = Dl(r, n, o.getNode(), l);
								d =
									null != e
										? o
												.getNode()
												.getImmediateChild(c)
												.updateChild(u, e)
										: o.getNode().getImmediateChild(c);
							} else d = Fl(r, c, t.serverCache);
							s =
								null != d
									? e.filter.updateChild(
											o.getNode(),
											c,
											d,
											u,
											i,
											a
									  )
									: o.getNode();
						}
					}
					return cl(
						t,
						s,
						o.isFullyInitialized() || Vo(n),
						e.filter.filtersNodes()
					);
				}
			}
			function Vl(e, t, n, r, i, a, o, s) {
				const l = t.serverCache;
				let c;
				const u = o ? e.filter : e.filter.getIndexedFilter();
				if (Vo(n)) c = u.updateFullNode(l.getNode(), r, null);
				else if (u.filtersNodes() && !l.isFiltered()) {
					const e = l.getNode().updateChild(n, r);
					c = u.updateFullNode(l.getNode(), e, null);
				} else {
					const e = zo(n);
					if (!l.isCompleteForPath(n) && jo(n) > 1) return t;
					const i = qo(n),
						a = l.getNode().getImmediateChild(e).updateChild(i, r);
					c =
						".priority" === e
							? u.updatePriority(l.getNode(), a)
							: u.updateChild(l.getNode(), e, a, i, Ul, null);
				}
				const d = ul(
					t,
					c,
					l.isFullyInitialized() || Vo(n),
					u.filtersNodes()
				);
				return Hl(e, d, n, i, new Wl(i, d, a), s);
			}
			function $l(e, t, n, r, i, a, o) {
				const s = t.eventCache;
				let l, c;
				const u = new Wl(i, t, a);
				if (Vo(n))
					(c = e.filter.updateFullNode(t.eventCache.getNode(), r, o)),
						(l = cl(t, c, !0, e.filter.filtersNodes()));
				else {
					const i = zo(n);
					if (".priority" === i)
						(c = e.filter.updatePriority(
							t.eventCache.getNode(),
							r
						)),
							(l = cl(
								t,
								c,
								s.isFullyInitialized(),
								s.isFiltered()
							));
					else {
						const a = qo(n),
							c = s.getNode().getImmediateChild(i);
						let d;
						if (Vo(a)) d = r;
						else {
							const e = u.getCompleteChild(i);
							d =
								null != e
									? ".priority" === Uo(a) &&
									  e.getChild(Bo(a)).isEmpty()
										? e
										: e.updateChild(a, r)
									: Ts.EMPTY_NODE;
						}
						if (c.equals(d)) l = t;
						else {
							l = cl(
								t,
								e.filter.updateChild(
									s.getNode(),
									i,
									d,
									a,
									u,
									o
								),
								s.isFullyInitialized(),
								e.filter.filtersNodes()
							);
						}
					}
				}
				return l;
			}
			function Ql(e, t) {
				return e.eventCache.isCompleteForChild(t);
			}
			function Yl(e, t, n) {
				return (
					n.foreach((e, n) => {
						t = t.updateChild(e, n);
					}),
					t
				);
			}
			function Kl(e, t, n, r, i, a, o, s) {
				if (
					t.serverCache.getNode().isEmpty() &&
					!t.serverCache.isFullyInitialized()
				)
					return t;
				let l,
					c = t;
				l = Vo(n) ? r : new pl(null).setTree(n, r);
				const u = t.serverCache.getNode();
				return (
					l.children.inorderTraversal((n, r) => {
						if (u.hasChild(n)) {
							const l = Yl(
								0,
								t.serverCache.getNode().getImmediateChild(n),
								r
							);
							c = Vl(e, c, new Mo(n), l, i, a, o, s);
						}
					}),
					l.children.inorderTraversal((n, r) => {
						const l =
							!t.serverCache.isCompleteForChild(n) &&
							null === r.value;
						if (!u.hasChild(n) && !l) {
							const l = Yl(
								0,
								t.serverCache.getNode().getImmediateChild(n),
								r
							);
							c = Vl(e, c, new Mo(n), l, i, a, o, s);
						}
					}),
					c
				);
			}
			class Gl {
				constructor(e, t) {
					(this.query_ = e), (this.eventRegistrations_ = []);
					const n = this.query_._queryParams,
						r = new Ms(n.getIndex()),
						i = (a = n).loadsAllData()
							? new Ms(a.getIndex())
							: a.hasLimit()
							? new zs(a)
							: new Fs(a);
					var a;
					this.processor_ = (function (e) {
						return { filter: e };
					})(i);
					const o = t.serverCache,
						s = t.eventCache,
						l = r.updateFullNode(Ts.EMPTY_NODE, o.getNode(), null),
						c = i.updateFullNode(Ts.EMPTY_NODE, s.getNode(), null),
						u = new al(l, o.isFullyInitialized(), r.filtersNodes()),
						d = new al(c, s.isFullyInitialized(), i.filtersNodes());
					(this.viewCache_ = ll(d, u)),
						(this.eventGenerator_ = new ol(this.query_));
				}
				get query() {
					return this.query_;
				}
			}
			function Xl(e, t) {
				const n = fl(e.viewCache_);
				return n &&
					(e.query._queryParams.loadsAllData() ||
						(!Vo(t) && !n.getImmediateChild(zo(t)).isEmpty()))
					? n.getChild(t)
					: null;
			}
			function Jl(e) {
				return 0 === e.eventRegistrations_.length;
			}
			function Zl(e, t, n) {
				const r = [];
				if (n) {
					er(
						null == t,
						"A cancel should cancel all event registrations."
					);
					const i = e.query._path;
					e.eventRegistrations_.forEach((e) => {
						const t = e.createCancelEvent(n, i);
						t && r.push(t);
					});
				}
				if (t) {
					let n = [];
					for (let r = 0; r < e.eventRegistrations_.length; ++r) {
						const i = e.eventRegistrations_[r];
						if (i.matches(t)) {
							if (t.hasAnyCallback()) {
								n = n.concat(
									e.eventRegistrations_.slice(r + 1)
								);
								break;
							}
						} else n.push(i);
					}
					e.eventRegistrations_ = n;
				} else e.eventRegistrations_ = [];
				return r;
			}
			function ec(e, t, n, r) {
				t.type === Zs.MERGE &&
					null !== t.source.queryId &&
					(er(
						fl(e.viewCache_),
						"We should always have a full cache before handling merges"
					),
					er(
						dl(e.viewCache_),
						"Missing event cache, even though we have a server cache"
					));
				const i = e.viewCache_,
					a = Bl(e.processor_, i, t, n, r);
				var o, s;
				return (
					(o = e.processor_),
					(s = a.viewCache),
					er(
						s.eventCache.getNode().isIndexed(o.filter.getIndex()),
						"Event snap not indexed"
					),
					er(
						s.serverCache.getNode().isIndexed(o.filter.getIndex()),
						"Server snap not indexed"
					),
					er(
						a.viewCache.serverCache.isFullyInitialized() ||
							!i.serverCache.isFullyInitialized(),
						"Once a server snap is complete, it should never go back"
					),
					(e.viewCache_ = a.viewCache),
					tc(e, a.changes, a.viewCache.eventCache.getNode(), null)
				);
			}
			function tc(e, t, n, r) {
				const i = r ? [r] : e.eventRegistrations_;
				return (function (e, t, n, r) {
					const i = [],
						a = [];
					return (
						t.forEach((t) => {
							var n;
							"child_changed" === t.type &&
								e.index_.indexedValueChanged(
									t.oldSnap,
									t.snapshotNode
								) &&
								a.push(
									((n = t.childName),
									{
										type: "child_moved",
										snapshotNode: t.snapshotNode,
										childName: n,
									})
								);
						}),
						sl(e, i, "child_removed", t, r, n),
						sl(e, i, "child_added", t, r, n),
						sl(e, i, "child_moved", a, r, n),
						sl(e, i, "child_changed", t, r, n),
						sl(e, i, "value", t, r, n),
						i
					);
				})(e.eventGenerator_, t, n, i);
			}
			let nc, rc;
			class ic {
				constructor() {
					this.views = new Map();
				}
			}
			function ac(e, t, n, r) {
				const i = t.source.queryId;
				if (null !== i) {
					const a = e.views.get(i);
					return (
						er(
							null != a,
							"SyncTree gave us an op for an invalid query."
						),
						ec(a, t, n, r)
					);
				}
				{
					let i = [];
					for (const a of e.views.values())
						i = i.concat(ec(a, t, n, r));
					return i;
				}
			}
			function oc(e, t, n, r, i) {
				const a = t._queryIdentifier,
					o = e.views.get(a);
				if (!o) {
					let e = Ol(n, i ? r : null),
						a = !1;
					e
						? (a = !0)
						: r instanceof Ts
						? ((e = Rl(n, r)), (a = !1))
						: ((e = Ts.EMPTY_NODE), (a = !1));
					const o = ll(new al(e, a, !1), new al(r, i, !1));
					return new Gl(t, o);
				}
				return o;
			}
			function sc(e, t, n, r, i, a) {
				const o = oc(e, t, r, i, a);
				return (
					e.views.has(t._queryIdentifier) ||
						e.views.set(t._queryIdentifier, o),
					(function (e, t) {
						e.eventRegistrations_.push(t);
					})(o, n),
					(function (e, t) {
						const n = e.viewCache_.eventCache,
							r = [];
						n.getNode().isLeafNode() ||
							n.getNode().forEachChild(_s, (e, t) => {
								r.push(Rs(e, t));
							});
						return (
							n.isFullyInitialized() && r.push(Os(n.getNode())),
							tc(e, r, n.getNode(), t)
						);
					})(o, n)
				);
			}
			function lc(e, t, n, r) {
				const i = t._queryIdentifier,
					a = [];
				let o = [];
				const s = hc(e);
				if ("default" === i)
					for (const [l, c] of e.views.entries())
						(o = o.concat(Zl(c, n, r))),
							Jl(c) &&
								(e.views.delete(l),
								c.query._queryParams.loadsAllData() ||
									a.push(c.query));
				else {
					const t = e.views.get(i);
					t &&
						((o = o.concat(Zl(t, n, r))),
						Jl(t) &&
							(e.views.delete(i),
							t.query._queryParams.loadsAllData() ||
								a.push(t.query)));
				}
				return (
					s &&
						!hc(e) &&
						a.push(
							new (er(nc, "Reference.ts has not been loaded"),
							nc)(t._repo, t._path)
						),
					{ removed: a, events: o }
				);
			}
			function cc(e) {
				const t = [];
				for (const n of e.views.values())
					n.query._queryParams.loadsAllData() || t.push(n);
				return t;
			}
			function uc(e, t) {
				let n = null;
				for (const r of e.views.values()) n = n || Xl(r, t);
				return n;
			}
			function dc(e, t) {
				if (t._queryParams.loadsAllData()) return pc(e);
				{
					const n = t._queryIdentifier;
					return e.views.get(n);
				}
			}
			function fc(e, t) {
				return null != dc(e, t);
			}
			function hc(e) {
				return null != pc(e);
			}
			function pc(e) {
				for (const t of e.views.values())
					if (t.query._queryParams.loadsAllData()) return t;
				return null;
			}
			let mc = 1;
			class gc {
				constructor(e) {
					(this.listenProvider_ = e),
						(this.syncPointTree_ = new pl(null)),
						(this.pendingWriteTree_ = {
							visibleWrites: ml.empty(),
							allWrites: [],
							lastWriteId: -1,
						}),
						(this.tagToQueryMap = new Map()),
						(this.queryToTagMap = new Map());
				}
			}
			function yc(e, t, n, r, i) {
				return (
					(function (e, t, n, r, i) {
						er(
							r > e.lastWriteId,
							"Stacking an older write on top of newer ones"
						),
							void 0 === i && (i = !0),
							e.allWrites.push({
								path: t,
								snap: n,
								writeId: r,
								visible: i,
							}),
							i && (e.visibleWrites = gl(e.visibleWrites, t, n)),
							(e.lastWriteId = r);
					})(e.pendingWriteTree_, t, n, r, i),
					i
						? xc(
								e,
								new rl(
									{
										fromUser: !0,
										fromServer: !1,
										queryId: null,
										tagged: !1,
									},
									t,
									n
								)
						  )
						: []
				);
			}
			function vc(e, t, n, r) {
				!(function (e, t, n, r) {
					er(
						r > e.lastWriteId,
						"Stacking an older merge on top of newer ones"
					),
						e.allWrites.push({
							path: t,
							children: n,
							writeId: r,
							visible: !0,
						}),
						(e.visibleWrites = yl(e.visibleWrites, t, n)),
						(e.lastWriteId = r);
				})(e.pendingWriteTree_, t, n, r);
				const i = pl.fromObject(n);
				return xc(
					e,
					new il(
						{
							fromUser: !0,
							fromServer: !1,
							queryId: null,
							tagged: !1,
						},
						t,
						i
					)
				);
			}
			function _c(e, t) {
				let n =
					arguments.length > 2 &&
					void 0 !== arguments[2] &&
					arguments[2];
				const r = (function (e, t) {
					for (let n = 0; n < e.allWrites.length; n++) {
						const r = e.allWrites[n];
						if (r.writeId === t) return r;
					}
					return null;
				})(e.pendingWriteTree_, t);
				if (Tl(e.pendingWriteTree_, t)) {
					let t = new pl(null);
					return (
						null != r.snap
							? (t = t.set(Fo(), !0))
							: io(r.children, (e) => {
									t = t.set(new Mo(e), !0);
							  }),
						xc(e, new tl(r.path, t, n))
					);
				}
				return [];
			}
			function bc(e, t, n) {
				return xc(
					e,
					new rl(
						{
							fromUser: !1,
							fromServer: !0,
							queryId: null,
							tagged: !1,
						},
						t,
						n
					)
				);
			}
			function wc(e, t, n, r) {
				let i =
					arguments.length > 4 &&
					void 0 !== arguments[4] &&
					arguments[4];
				const a = t._path,
					o = e.syncPointTree_.get(a);
				let s = [];
				if (o && ("default" === t._queryIdentifier || fc(o, t))) {
					const l = lc(o, t, n, r);
					0 === o.views.size &&
						(e.syncPointTree_ = e.syncPointTree_.remove(a));
					const c = l.removed;
					if (((s = l.events), !i)) {
						const n =
								-1 !==
								c.findIndex((e) =>
									e._queryParams.loadsAllData()
								),
							i = e.syncPointTree_.findOnPath(a, (e, t) => hc(t));
						if (n && !i) {
							const t = e.syncPointTree_.subtree(a);
							if (!t.isEmpty()) {
								const n = (function (e) {
									return e.fold((e, t, n) => {
										if (t && hc(t)) {
											return [pc(t)];
										}
										{
											let e = [];
											return (
												t && (e = cc(t)),
												io(n, (t, n) => {
													e = e.concat(n);
												}),
												e
											);
										}
									});
								})(t);
								for (let t = 0; t < n.length; ++t) {
									const r = n[t],
										i = r.query,
										a = Nc(e, r);
									e.listenProvider_.startListening(
										Lc(i),
										Ic(e, i),
										a.hashFn,
										a.onComplete
									);
								}
							}
						}
						if (!i && c.length > 0 && !r)
							if (n) {
								const n = null;
								e.listenProvider_.stopListening(Lc(t), n);
							} else
								c.forEach((t) => {
									const n = e.queryToTagMap.get(Ac(t));
									e.listenProvider_.stopListening(Lc(t), n);
								});
					}
					!(function (e, t) {
						for (let n = 0; n < t.length; ++n) {
							const r = t[n];
							if (!r._queryParams.loadsAllData()) {
								const t = Ac(r),
									n = e.queryToTagMap.get(t);
								e.queryToTagMap.delete(t),
									e.tagToQueryMap.delete(n);
							}
						}
					})(e, c);
				}
				return s;
			}
			function kc(e, t, n, r) {
				const i = Oc(e, r);
				if (null != i) {
					const r = Rc(i),
						a = r.path,
						o = r.queryId,
						s = $o(a, t);
					return Dc(e, a, new rl(el(o), s, n));
				}
				return [];
			}
			function Sc(e, t, n) {
				let r =
					arguments.length > 3 &&
					void 0 !== arguments[3] &&
					arguments[3];
				const i = t._path;
				let a = null,
					o = !1;
				e.syncPointTree_.foreachOnPath(i, (e, t) => {
					const n = $o(e, i);
					(a = a || uc(t, n)), (o = o || hc(t));
				});
				let s,
					l = e.syncPointTree_.get(i);
				if (
					(l
						? ((o = o || hc(l)), (a = a || uc(l, Fo())))
						: ((l = new ic()),
						  (e.syncPointTree_ = e.syncPointTree_.set(i, l))),
					null != a)
				)
					s = !0;
				else {
					(s = !1), (a = Ts.EMPTY_NODE);
					e.syncPointTree_.subtree(i).foreachChild((e, t) => {
						const n = uc(t, Fo());
						n && (a = a.updateImmediateChild(e, n));
					});
				}
				const c = fc(l, t);
				if (!c && !t._queryParams.loadsAllData()) {
					const n = Ac(t);
					er(
						!e.queryToTagMap.has(n),
						"View does not exist, but we have a tag"
					);
					const r = mc++;
					e.queryToTagMap.set(n, r), e.tagToQueryMap.set(r, n);
				}
				let u = sc(l, t, n, xl(e.pendingWriteTree_, i), a, s);
				if (!c && !o && !r) {
					const n = dc(l, t);
					u = u.concat(
						(function (e, t, n) {
							const r = t._path,
								i = Ic(e, t),
								a = Nc(e, n),
								o = e.listenProvider_.startListening(
									Lc(t),
									i,
									a.hashFn,
									a.onComplete
								),
								s = e.syncPointTree_.subtree(r);
							if (i)
								er(
									!hc(s.value),
									"If we're adding a query, it shouldn't be shadowed"
								);
							else {
								const t = s.fold((e, t, n) => {
									if (!Vo(e) && t && hc(t))
										return [pc(t).query];
									{
										let e = [];
										return (
											t &&
												(e = e.concat(
													cc(t).map((e) => e.query)
												)),
											io(n, (t, n) => {
												e = e.concat(n);
											}),
											e
										);
									}
								});
								for (let n = 0; n < t.length; ++n) {
									const r = t[n];
									e.listenProvider_.stopListening(
										Lc(r),
										Ic(e, r)
									);
								}
							}
							return o;
						})(e, t, n)
					);
				}
				return u;
			}
			function Cc(e, t, n) {
				const r = e.pendingWriteTree_,
					i = e.syncPointTree_.findOnPath(t, (e, n) => {
						const r = uc(n, $o(e, t));
						if (r) return r;
					});
				return Al(r, t, i, n, !0);
			}
			function Ec(e, t) {
				const n = t._path;
				let r = null;
				e.syncPointTree_.foreachOnPath(n, (e, t) => {
					const i = $o(e, n);
					r = r || uc(t, i);
				});
				let i = e.syncPointTree_.get(n);
				i
					? (r = r || uc(i, Fo()))
					: ((i = new ic()),
					  (e.syncPointTree_ = e.syncPointTree_.set(n, i)));
				const a = null != r,
					o = a ? new al(r, !0, !1) : null;
				return (function (e) {
					return dl(e.viewCache_);
				})(
					oc(
						i,
						t,
						xl(e.pendingWriteTree_, t._path),
						a ? o.getNode() : Ts.EMPTY_NODE,
						a
					)
				);
			}
			function xc(e, t) {
				return Tc(
					t,
					e.syncPointTree_,
					null,
					xl(e.pendingWriteTree_, Fo())
				);
			}
			function Tc(e, t, n, r) {
				if (Vo(e.path)) return Pc(e, t, n, r);
				{
					const i = t.get(Fo());
					null == n && null != i && (n = uc(i, Fo()));
					let a = [];
					const o = zo(e.path),
						s = e.operationForChild(o),
						l = t.children.get(o);
					if (l && s) {
						const e = n ? n.getImmediateChild(o) : null,
							t = zl(r, o);
						a = a.concat(Tc(s, l, e, t));
					}
					return i && (a = a.concat(ac(i, e, r, n))), a;
				}
			}
			function Pc(e, t, n, r) {
				const i = t.get(Fo());
				null == n && null != i && (n = uc(i, Fo()));
				let a = [];
				return (
					t.children.inorderTraversal((t, i) => {
						const o = n ? n.getImmediateChild(t) : null,
							s = zl(r, t),
							l = e.operationForChild(t);
						l && (a = a.concat(Pc(l, i, o, s)));
					}),
					i && (a = a.concat(ac(i, e, r, n))),
					a
				);
			}
			function Nc(e, t) {
				const n = t.query,
					r = Ic(e, n);
				return {
					hashFn: () => {
						const e =
							(function (e) {
								return e.viewCache_.serverCache.getNode();
							})(t) || Ts.EMPTY_NODE;
						return e.hash();
					},
					onComplete: (t) => {
						if ("ok" === t)
							return r
								? (function (e, t, n) {
										const r = Oc(e, n);
										if (r) {
											const n = Rc(r),
												i = n.path,
												a = n.queryId,
												o = $o(i, t);
											return Dc(e, i, new nl(el(a), o));
										}
										return [];
								  })(e, n._path, r)
								: (function (e, t) {
										return xc(
											e,
											new nl(
												{
													fromUser: !1,
													fromServer: !0,
													queryId: null,
													tagged: !1,
												},
												t
											)
										);
								  })(e, n._path);
						{
							const r = (function (e, t) {
								let n = "Unknown Error";
								"too_big" === e
									? (n =
											"The data requested exceeds the maximum size that can be accessed with a single request.")
									: "permission_denied" === e
									? (n =
											"Client doesn't have permission to access the desired data.")
									: "unavailable" === e &&
									  (n = "The service is unavailable");
								const r = new Error(
									e + " at " + t._path.toString() + ": " + n
								);
								return (r.code = e.toUpperCase()), r;
							})(t, n);
							return wc(e, n, null, r);
						}
					},
				};
			}
			function Ic(e, t) {
				const n = Ac(t);
				return e.queryToTagMap.get(n);
			}
			function Ac(e) {
				return e._path.toString() + "$" + e._queryIdentifier;
			}
			function Oc(e, t) {
				return e.tagToQueryMap.get(t);
			}
			function Rc(e) {
				const t = e.indexOf("$");
				return (
					er(-1 !== t && t < e.length - 1, "Bad queryKey."),
					{ queryId: e.substr(t + 1), path: new Mo(e.substr(0, t)) }
				);
			}
			function Dc(e, t, n) {
				const r = e.syncPointTree_.get(t);
				er(r, "Missing sync point for query tag that we're tracking");
				return ac(r, n, xl(e.pendingWriteTree_, t), null);
			}
			function Lc(e) {
				return e._queryParams.loadsAllData() &&
					!e._queryParams.isDefault()
					? new (er(rc, "Reference.ts has not been loaded"), rc)(
							e._repo,
							e._path
					  )
					: e;
			}
			class Mc {
				constructor(e) {
					this.node_ = e;
				}
				getImmediateChild(e) {
					const t = this.node_.getImmediateChild(e);
					return new Mc(t);
				}
				node() {
					return this.node_;
				}
			}
			class Fc {
				constructor(e, t) {
					(this.syncTree_ = e), (this.path_ = t);
				}
				getImmediateChild(e) {
					const t = Ho(this.path_, e);
					return new Fc(this.syncTree_, t);
				}
				node() {
					return Cc(this.syncTree_, this.path_);
				}
			}
			const zc = function (e, t, n) {
					return e && "object" === typeof e
						? (er(
								".sv" in e,
								"Unexpected leaf node or priority contents"
						  ),
						  "string" === typeof e[".sv"]
								? jc(e[".sv"], t, n)
								: "object" === typeof e[".sv"]
								? qc(e[".sv"], t)
								: void er(
										!1,
										"Unexpected server value: " +
											JSON.stringify(e, null, 2)
								  ))
						: e;
				},
				jc = function (e, t, n) {
					if ("timestamp" === e) return n.timestamp;
					er(!1, "Unexpected server value: " + e);
				},
				qc = function (e, t, n) {
					e.hasOwnProperty("increment") ||
						er(
							!1,
							"Unexpected server value: " +
								JSON.stringify(e, null, 2)
						);
					const r = e.increment;
					"number" !== typeof r &&
						er(!1, "Unexpected increment value: " + r);
					const i = t.node();
					if (
						(er(
							null !== i && "undefined" !== typeof i,
							"Expected ChildrenNode.EMPTY_NODE for nulls"
						),
						!i.isLeafNode())
					)
						return r;
					const a = i.getValue();
					return "number" !== typeof a ? r : a + r;
				},
				Uc = function (e, t, n, r) {
					return Bc(t, new Fc(n, e), r);
				},
				Wc = function (e, t, n) {
					return Bc(e, new Mc(t), n);
				};
			function Bc(e, t, n) {
				const r = e.getPriority().val(),
					i = zc(r, t.getImmediateChild(".priority"), n);
				let a;
				if (e.isLeafNode()) {
					const r = e,
						a = zc(r.getValue(), t, n);
					return a !== r.getValue() || i !== r.getPriority().val()
						? new vs(a, Ns(i))
						: e;
				}
				{
					const r = e;
					return (
						(a = r),
						i !== r.getPriority().val() &&
							(a = a.updatePriority(new vs(i))),
						r.forEachChild(_s, (e, r) => {
							const i = Bc(r, t.getImmediateChild(e), n);
							i !== r && (a = a.updateImmediateChild(e, i));
						}),
						a
					);
				}
			}
			class Hc {
				constructor() {
					let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: "",
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: null,
						n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: { children: {}, childCount: 0 };
					(this.name = e), (this.parent = t), (this.node = n);
				}
			}
			function Vc(e, t) {
				let n = t instanceof Mo ? t : new Mo(t),
					r = e,
					i = zo(n);
				for (; null !== i; ) {
					const e = Cr(r.node.children, i) || {
						children: {},
						childCount: 0,
					};
					(r = new Hc(i, r, e)), (n = qo(n)), (i = zo(n));
				}
				return r;
			}
			function $c(e) {
				return e.node.value;
			}
			function Qc(e, t) {
				(e.node.value = t), Jc(e);
			}
			function Yc(e) {
				return e.node.childCount > 0;
			}
			function Kc(e, t) {
				io(e.node.children, (n, r) => {
					t(new Hc(n, e, r));
				});
			}
			function Gc(e, t, n, r) {
				n && !r && t(e),
					Kc(e, (e) => {
						Gc(e, t, !0, r);
					}),
					n && r && t(e);
			}
			function Xc(e) {
				return new Mo(
					null === e.parent ? e.name : Xc(e.parent) + "/" + e.name
				);
			}
			function Jc(e) {
				null !== e.parent &&
					(function (e, t, n) {
						const r = (function (e) {
								return void 0 === $c(e) && !Yc(e);
							})(n),
							i = Sr(e.node.children, t);
						r && i
							? (delete e.node.children[t],
							  e.node.childCount--,
							  Jc(e))
							: r ||
							  i ||
							  ((e.node.children[t] = n.node),
							  e.node.childCount++,
							  Jc(e));
					})(e.parent, e.name, e);
			}
			const Zc = /[\[\].#$\/\u0000-\u001F\u007F]/,
				eu = /[\[\].#$\u0000-\u001F\u007F]/,
				tu = 10485760,
				nu = function (e) {
					return (
						"string" === typeof e && 0 !== e.length && !Zc.test(e)
					);
				},
				ru = function (e) {
					return (
						"string" === typeof e && 0 !== e.length && !eu.test(e)
					);
				},
				iu = function (e) {
					return (
						null === e ||
						"string" === typeof e ||
						("number" === typeof e && !Ga(e)) ||
						(e && "object" === typeof e && Sr(e, ".sv"))
					);
				},
				au = function (e, t, n, r) {
					(r && void 0 === t) || ou(Dr(e, "value"), t, n);
				},
				ou = function (e, t, n) {
					const r = n instanceof Mo ? new Go(n, e) : n;
					if (void 0 === t)
						throw new Error(e + "contains undefined " + Jo(r));
					if ("function" === typeof t)
						throw new Error(
							e +
								"contains a function " +
								Jo(r) +
								" with contents = " +
								t.toString()
						);
					if (Ga(t))
						throw new Error(
							e + "contains " + t.toString() + " " + Jo(r)
						);
					if (
						"string" === typeof t &&
						t.length > tu / 3 &&
						Fr(t) > tu
					)
						throw new Error(
							e +
								"contains a string greater than " +
								tu +
								" utf8 bytes " +
								Jo(r) +
								" ('" +
								t.substring(0, 50) +
								"...')"
						);
					if (t && "object" === typeof t) {
						let n = !1,
							i = !1;
						if (
							(io(t, (t, a) => {
								if (".value" === t) n = !0;
								else if (
									".priority" !== t &&
									".sv" !== t &&
									((i = !0), !nu(t))
								)
									throw new Error(
										e +
											" contains an invalid key (" +
											t +
											") " +
											Jo(r) +
											'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
									);
								!(function (e, t) {
									e.parts_.length > 0 && (e.byteLength_ += 1),
										e.parts_.push(t),
										(e.byteLength_ += Fr(t)),
										Xo(e);
								})(r, t),
									ou(e, a, r),
									(function (e) {
										const t = e.parts_.pop();
										(e.byteLength_ -= Fr(t)),
											e.parts_.length > 0 &&
												(e.byteLength_ -= 1);
									})(r);
							}),
							n && i)
						)
							throw new Error(
								e +
									' contains ".value" child ' +
									Jo(r) +
									" in addition to actual children."
							);
					}
				},
				su = function (e, t, n, r) {
					if (r && void 0 === t) return;
					const i = Dr(e, "values");
					if (!t || "object" !== typeof t || Array.isArray(t))
						throw new Error(
							i +
								" must be an object containing the children to replace."
						);
					const a = [];
					io(t, (e, t) => {
						const r = new Mo(e);
						if (
							(ou(i, t, Ho(n, r)),
							".priority" === Uo(r) && !iu(t))
						)
							throw new Error(
								i +
									"contains an invalid value for '" +
									r.toString() +
									"', which must be a valid Firebase priority (a string, finite number, server value, or null)."
							);
						a.push(r);
					}),
						(function (e, t) {
							let n, r;
							for (n = 0; n < t.length; n++) {
								r = t[n];
								const i = Wo(r);
								for (let t = 0; t < i.length; t++)
									if (
										".priority" === i[t] &&
										t === i.length - 1
									);
									else if (!nu(i[t]))
										throw new Error(
											e +
												"contains an invalid key (" +
												i[t] +
												") in path " +
												r.toString() +
												'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
										);
							}
							t.sort(Qo);
							let i = null;
							for (n = 0; n < t.length; n++) {
								if (((r = t[n]), null !== i && Ko(i, r)))
									throw new Error(
										e +
											"contains a path " +
											i.toString() +
											" that is ancestor of another path " +
											r.toString()
									);
								i = r;
							}
						})(i, a);
				},
				lu = function (e, t, n) {
					if (!n || void 0 !== t) {
						if (Ga(t))
							throw new Error(
								Dr(e, "priority") +
									"is " +
									t.toString() +
									", but must be a valid Firebase priority (a string, finite number, server value, or null)."
							);
						if (!iu(t))
							throw new Error(
								Dr(e, "priority") +
									"must be a valid Firebase priority (a string, finite number, server value, or null)."
							);
					}
				},
				cu = function (e, t, n, r) {
					if ((!r || void 0 !== n) && !nu(n))
						throw new Error(
							Dr(e, t) +
								'was an invalid key = "' +
								n +
								'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
						);
				},
				uu = function (e, t, n, r) {
					if ((!r || void 0 !== n) && !ru(n))
						throw new Error(
							Dr(e, t) +
								'was an invalid path = "' +
								n +
								'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
						);
				},
				du = function (e, t) {
					if (".info" === zo(t))
						throw new Error(
							e + " failed = Can't modify data under /.info/"
						);
				},
				fu = function (e, t) {
					const n = t.path.toString();
					if (
						"string" !== typeof t.repoInfo.host ||
						0 === t.repoInfo.host.length ||
						(!nu(t.repoInfo.namespace) &&
							"localhost" !== t.repoInfo.host.split(":")[0]) ||
						(0 !== n.length &&
							!(function (e) {
								return (
									e &&
										(e = e.replace(
											/^\/*\.info(\/|$)/,
											"/"
										)),
									ru(e)
								);
							})(n))
					)
						throw new Error(
							Dr(e, "url") +
								'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
						);
				};
			class hu {
				constructor() {
					(this.eventLists_ = []), (this.recursionDepth_ = 0);
				}
			}
			function pu(e, t) {
				let n = null;
				for (let r = 0; r < t.length; r++) {
					const i = t[r],
						a = i.getPath();
					null === n ||
						Yo(a, n.path) ||
						(e.eventLists_.push(n), (n = null)),
						null === n && (n = { events: [], path: a }),
						n.events.push(i);
				}
				n && e.eventLists_.push(n);
			}
			function mu(e, t, n) {
				pu(e, n), yu(e, (e) => Yo(e, t));
			}
			function gu(e, t, n) {
				pu(e, n), yu(e, (e) => Ko(e, t) || Ko(t, e));
			}
			function yu(e, t) {
				e.recursionDepth_++;
				let n = !0;
				for (let r = 0; r < e.eventLists_.length; r++) {
					const i = e.eventLists_[r];
					if (i) {
						t(i.path)
							? (vu(e.eventLists_[r]), (e.eventLists_[r] = null))
							: (n = !1);
					}
				}
				n && (e.eventLists_ = []), e.recursionDepth_--;
			}
			function vu(e) {
				for (let t = 0; t < e.events.length; t++) {
					const n = e.events[t];
					if (null !== n) {
						e.events[t] = null;
						const r = n.getEventRunner();
						Wa && Va("event: " + n.toString()), lo(r);
					}
				}
			}
			const _u = "repo_interrupt";
			class bu {
				constructor(e, t, n, r) {
					(this.repoInfo_ = e),
						(this.forceRestClient_ = t),
						(this.authTokenProvider_ = n),
						(this.appCheckProvider_ = r),
						(this.dataUpdateCount = 0),
						(this.statsListener_ = null),
						(this.eventQueue_ = new hu()),
						(this.nextWriteId_ = 1),
						(this.interceptServerDataCallback_ = null),
						(this.onDisconnect_ = Qs()),
						(this.transactionQueueTree_ = new Hc()),
						(this.persistentConnection_ = null),
						(this.key = this.repoInfo_.toURLString());
				}
				toString() {
					return (
						(this.repoInfo_.secure ? "https://" : "http://") +
						this.repoInfo_.host
					);
				}
			}
			function wu(e, t, n) {
				if (
					((e.stats_ = Co(e.repoInfo_)),
					e.forceRestClient_ ||
						(
							("object" === typeof window &&
								window.navigator &&
								window.navigator.userAgent) ||
							""
						).search(
							/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
						) >= 0)
				)
					(e.server_ = new Vs(
						e.repoInfo_,
						(t, n, r, i) => {
							Cu(e, t, n, r, i);
						},
						e.authTokenProvider_,
						e.appCheckProvider_
					)),
						setTimeout(() => Eu(e, !0), 0);
				else {
					if ("undefined" !== typeof n && null !== n) {
						if ("object" !== typeof n)
							throw new Error(
								"Only objects are supported for option databaseAuthVariableOverride"
							);
						try {
							wr(n);
						} catch (pf) {
							throw new Error(
								"Invalid authOverride provided: " + pf
							);
						}
					}
					(e.persistentConnection_ = new ts(
						e.repoInfo_,
						t,
						(t, n, r, i) => {
							Cu(e, t, n, r, i);
						},
						(t) => {
							Eu(e, t);
						},
						(t) => {
							!(function (e, t) {
								io(t, (t, n) => {
									xu(e, t, n);
								});
							})(e, t);
						},
						e.authTokenProvider_,
						e.appCheckProvider_,
						n
					)),
						(e.server_ = e.persistentConnection_);
				}
				e.authTokenProvider_.addTokenChangeListener((t) => {
					e.server_.refreshAuthToken(t);
				}),
					e.appCheckProvider_.addTokenChangeListener((t) => {
						e.server_.refreshAppCheckToken(t.token);
					}),
					(e.statsReporter_ = (function (e, t) {
						const n = e.toString();
						return So[n] || (So[n] = t()), So[n];
					})(e.repoInfo_, () => new Js(e.stats_, e.server_))),
					(e.infoData_ = new $s()),
					(e.infoSyncTree_ = new gc({
						startListening: (t, n, r, i) => {
							let a = [];
							const o = e.infoData_.getNode(t._path);
							return (
								o.isEmpty() ||
									((a = bc(e.infoSyncTree_, t._path, o)),
									setTimeout(() => {
										i("ok");
									}, 0)),
								a
							);
						},
						stopListening: () => {},
					})),
					xu(e, "connected", !1),
					(e.serverSyncTree_ = new gc({
						startListening: (t, n, r, i) => (
							e.server_.listen(t, r, n, (n, r) => {
								const a = i(n, r);
								gu(e.eventQueue_, t._path, a);
							}),
							[]
						),
						stopListening: (t, n) => {
							e.server_.unlisten(t, n);
						},
					}));
			}
			function ku(e) {
				const t =
					e.infoData_
						.getNode(new Mo(".info/serverTimeOffset"))
						.val() || 0;
				return new Date().getTime() + t;
			}
			function Su(e) {
				return (
					((t = (t = { timestamp: ku(e) }) || {}).timestamp =
						t.timestamp || new Date().getTime()),
					t
				);
				var t;
			}
			function Cu(e, t, n, r, i) {
				e.dataUpdateCount++;
				const a = new Mo(t);
				n = e.interceptServerDataCallback_
					? e.interceptServerDataCallback_(t, n)
					: n;
				let o = [];
				if (i)
					if (r) {
						const t = xr(n, (e) => Ns(e));
						o = (function (e, t, n, r) {
							const i = Oc(e, r);
							if (i) {
								const r = Rc(i),
									a = r.path,
									o = r.queryId,
									s = $o(a, t),
									l = pl.fromObject(n);
								return Dc(e, a, new il(el(o), s, l));
							}
							return [];
						})(e.serverSyncTree_, a, t, i);
					} else {
						const t = Ns(n);
						o = kc(e.serverSyncTree_, a, t, i);
					}
				else if (r) {
					const t = xr(n, (e) => Ns(e));
					o = (function (e, t, n) {
						const r = pl.fromObject(n);
						return xc(
							e,
							new il(
								{
									fromUser: !1,
									fromServer: !0,
									queryId: null,
									tagged: !1,
								},
								t,
								r
							)
						);
					})(e.serverSyncTree_, a, t);
				} else {
					const t = Ns(n);
					o = bc(e.serverSyncTree_, a, t);
				}
				let s = a;
				o.length > 0 && (s = Fu(e, a)), gu(e.eventQueue_, s, o);
			}
			function Eu(e, t) {
				xu(e, "connected", t),
					!1 === t &&
						(function (e) {
							Ru(e, "onDisconnectEvents");
							const t = Su(e),
								n = Qs();
							Gs(e.onDisconnect_, Fo(), (r, i) => {
								const a = Uc(r, i, e.serverSyncTree_, t);
								Ys(n, r, a);
							});
							let r = [];
							Gs(n, Fo(), (t, n) => {
								r = r.concat(bc(e.serverSyncTree_, t, n));
								const i = Wu(e, t);
								Fu(e, i);
							}),
								(e.onDisconnect_ = Qs()),
								gu(e.eventQueue_, Fo(), r);
						})(e);
			}
			function xu(e, t, n) {
				const r = new Mo("/.info/" + t),
					i = Ns(n);
				e.infoData_.updateSnapshot(r, i);
				const a = bc(e.infoSyncTree_, r, i);
				gu(e.eventQueue_, r, a);
			}
			function Tu(e) {
				return e.nextWriteId_++;
			}
			function Pu(e, t, n, r, i) {
				Ru(e, "set", { path: t.toString(), value: n, priority: r });
				const a = Su(e),
					o = Ns(n, r),
					s = Cc(e.serverSyncTree_, t),
					l = Wc(o, s, a),
					c = Tu(e),
					u = yc(e.serverSyncTree_, t, l, c, !0);
				pu(e.eventQueue_, u),
					e.server_.put(t.toString(), o.val(!0), (n, r) => {
						const a = "ok" === n;
						a || Ka("set at " + t + " failed: " + n);
						const o = _c(e.serverSyncTree_, c, !a);
						gu(e.eventQueue_, t, o), Du(e, i, n, r);
					});
				const d = Wu(e, t);
				Fu(e, d), gu(e.eventQueue_, d, []);
			}
			function Nu(e, t, n) {
				e.server_.onDisconnectCancel(t.toString(), (r, i) => {
					"ok" === r && Ks(e.onDisconnect_, t), Du(e, n, r, i);
				});
			}
			function Iu(e, t, n, r) {
				const i = Ns(n);
				e.server_.onDisconnectPut(t.toString(), i.val(!0), (n, a) => {
					"ok" === n && Ys(e.onDisconnect_, t, i), Du(e, r, n, a);
				});
			}
			function Au(e, t, n) {
				let r;
				(r =
					".info" === zo(t._path)
						? wc(e.infoSyncTree_, t, n)
						: wc(e.serverSyncTree_, t, n)),
					mu(e.eventQueue_, t._path, r);
			}
			function Ou(e) {
				e.persistentConnection_ &&
					e.persistentConnection_.interrupt(_u);
			}
			function Ru(e) {
				let t = "";
				e.persistentConnection_ &&
					(t = e.persistentConnection_.id + ":");
				for (
					var n = arguments.length,
						r = new Array(n > 1 ? n - 1 : 0),
						i = 1;
					i < n;
					i++
				)
					r[i - 1] = arguments[i];
				Va(t, ...r);
			}
			function Du(e, t, n, r) {
				t &&
					lo(() => {
						if ("ok" === n) t(null);
						else {
							const e = (n || "error").toUpperCase();
							let i = e;
							r && (i += ": " + r);
							const a = new Error(i);
							(a.code = e), t(a);
						}
					});
			}
			function Lu(e, t, n) {
				return Cc(e.serverSyncTree_, t, n) || Ts.EMPTY_NODE;
			}
			function Mu(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: e.transactionQueueTree_;
				if ((t || Uu(e, t), $c(t))) {
					const n = ju(e, t);
					er(n.length > 0, "Sending zero length transaction queue");
					n.every((e) => 0 === e.status) &&
						(function (e, t, n) {
							const r = n.map((e) => e.currentWriteId),
								i = Lu(e, t, r);
							let a = i;
							const o = i.hash();
							for (let c = 0; c < n.length; c++) {
								const e = n[c];
								er(
									0 === e.status,
									"tryToSendTransactionQueue_: items in queue should all be run."
								),
									(e.status = 1),
									e.retryCount++;
								const r = $o(t, e.path);
								a = a.updateChild(
									r,
									e.currentOutputSnapshotRaw
								);
							}
							const s = a.val(!0),
								l = t;
							e.server_.put(
								l.toString(),
								s,
								(r) => {
									Ru(e, "transaction put response", {
										path: l.toString(),
										status: r,
									});
									let i = [];
									if ("ok" === r) {
										const r = [];
										for (let t = 0; t < n.length; t++)
											(n[t].status = 2),
												(i = i.concat(
													_c(
														e.serverSyncTree_,
														n[t].currentWriteId
													)
												)),
												n[t].onComplete &&
													r.push(() =>
														n[t].onComplete(
															null,
															!0,
															n[t]
																.currentOutputSnapshotResolved
														)
													),
												n[t].unwatcher();
										Uu(e, Vc(e.transactionQueueTree_, t)),
											Mu(e, e.transactionQueueTree_),
											gu(e.eventQueue_, t, i);
										for (let e = 0; e < r.length; e++)
											lo(r[e]);
									} else {
										if ("datastale" === r)
											for (let e = 0; e < n.length; e++)
												3 === n[e].status
													? (n[e].status = 4)
													: (n[e].status = 0);
										else {
											Ka(
												"transaction at " +
													l.toString() +
													" failed: " +
													r
											);
											for (let e = 0; e < n.length; e++)
												(n[e].status = 4),
													(n[e].abortReason = r);
										}
										Fu(e, t);
									}
								},
								o
							);
						})(e, Xc(t), n);
				} else
					Yc(t) &&
						Kc(t, (t) => {
							Mu(e, t);
						});
			}
			function Fu(e, t) {
				const n = zu(e, t),
					r = Xc(n);
				return (
					(function (e, t, n) {
						if (0 === t.length) return;
						const r = [];
						let i = [];
						const a = t.filter((e) => 0 === e.status),
							o = a.map((e) => e.currentWriteId);
						for (let l = 0; l < t.length; l++) {
							const a = t[l],
								c = $o(n, a.path);
							let u,
								d = !1;
							if (
								(er(
									null !== c,
									"rerunTransactionsUnderNode_: relativePath should not be null."
								),
								4 === a.status)
							)
								(d = !0),
									(u = a.abortReason),
									(i = i.concat(
										_c(
											e.serverSyncTree_,
											a.currentWriteId,
											!0
										)
									));
							else if (0 === a.status)
								if (a.retryCount >= 25)
									(d = !0),
										(u = "maxretry"),
										(i = i.concat(
											_c(
												e.serverSyncTree_,
												a.currentWriteId,
												!0
											)
										));
								else {
									const n = Lu(e, a.path, o);
									a.currentInputSnapshot = n;
									const r = t[l].update(n.val());
									if (void 0 !== r) {
										ou(
											"transaction failed: Data returned ",
											r,
											a.path
										);
										let t = Ns(r);
										("object" === typeof r &&
											null != r &&
											Sr(r, ".priority")) ||
											(t = t.updatePriority(
												n.getPriority()
											));
										const s = a.currentWriteId,
											l = Su(e),
											c = Wc(t, n, l);
										(a.currentOutputSnapshotRaw = t),
											(a.currentOutputSnapshotResolved =
												c),
											(a.currentWriteId = Tu(e)),
											o.splice(o.indexOf(s), 1),
											(i = i.concat(
												yc(
													e.serverSyncTree_,
													a.path,
													c,
													a.currentWriteId,
													a.applyLocally
												)
											)),
											(i = i.concat(
												_c(e.serverSyncTree_, s, !0)
											));
									} else
										(d = !0),
											(u = "nodata"),
											(i = i.concat(
												_c(
													e.serverSyncTree_,
													a.currentWriteId,
													!0
												)
											));
								}
							gu(e.eventQueue_, n, i),
								(i = []),
								d &&
									((t[l].status = 2),
									(s = t[l].unwatcher),
									setTimeout(s, Math.floor(0)),
									t[l].onComplete &&
										("nodata" === u
											? r.push(() =>
													t[l].onComplete(
														null,
														!1,
														t[l]
															.currentInputSnapshot
													)
											  )
											: r.push(() =>
													t[l].onComplete(
														new Error(u),
														!1,
														null
													)
											  )));
						}
						var s;
						Uu(e, e.transactionQueueTree_);
						for (let l = 0; l < r.length; l++) lo(r[l]);
						Mu(e, e.transactionQueueTree_);
					})(e, ju(e, n), r),
					r
				);
			}
			function zu(e, t) {
				let n,
					r = e.transactionQueueTree_;
				for (n = zo(t); null !== n && void 0 === $c(r); )
					(r = Vc(r, n)), (n = zo((t = qo(t))));
				return r;
			}
			function ju(e, t) {
				const n = [];
				return qu(e, t, n), n.sort((e, t) => e.order - t.order), n;
			}
			function qu(e, t, n) {
				const r = $c(t);
				if (r) for (let i = 0; i < r.length; i++) n.push(r[i]);
				Kc(t, (t) => {
					qu(e, t, n);
				});
			}
			function Uu(e, t) {
				const n = $c(t);
				if (n) {
					let e = 0;
					for (let t = 0; t < n.length; t++)
						2 !== n[t].status && ((n[e] = n[t]), e++);
					(n.length = e), Qc(t, n.length > 0 ? n : void 0);
				}
				Kc(t, (t) => {
					Uu(e, t);
				});
			}
			function Wu(e, t) {
				const n = Xc(zu(e, t)),
					r = Vc(e.transactionQueueTree_, t);
				return (
					(function (e, t, n) {
						let r = n ? e : e.parent;
						for (; null !== r; ) {
							if (t(r)) return !0;
							r = r.parent;
						}
					})(r, (t) => {
						Bu(e, t);
					}),
					Bu(e, r),
					Gc(r, (t) => {
						Bu(e, t);
					}),
					n
				);
			}
			function Bu(e, t) {
				const n = $c(t);
				if (n) {
					const r = [];
					let i = [],
						a = -1;
					for (let t = 0; t < n.length; t++)
						3 === n[t].status ||
							(1 === n[t].status
								? (er(
										a === t - 1,
										"All SENT items should be at beginning of queue."
								  ),
								  (a = t),
								  (n[t].status = 3),
								  (n[t].abortReason = "set"))
								: (er(
										0 === n[t].status,
										"Unexpected transaction status in abort"
								  ),
								  n[t].unwatcher(),
								  (i = i.concat(
										_c(
											e.serverSyncTree_,
											n[t].currentWriteId,
											!0
										)
								  )),
								  n[t].onComplete &&
										r.push(
											n[t].onComplete.bind(
												null,
												new Error("set"),
												!1,
												null
											)
										)));
					-1 === a ? Qc(t, void 0) : (n.length = a + 1),
						gu(e.eventQueue_, Xc(t), i);
					for (let e = 0; e < r.length; e++) lo(r[e]);
				}
			}
			const Hu = function (e, t) {
					const n = Vu(e),
						r = n.namespace;
					"firebase.com" === n.domain &&
						Ya(
							n.host +
								" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
						),
						(r && "undefined" !== r) ||
							"localhost" === n.domain ||
							Ya(
								"Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
							),
						n.secure ||
							("undefined" !== typeof window &&
								window.location &&
								window.location.protocol &&
								-1 !==
									window.location.protocol.indexOf(
										"https:"
									) &&
								Ka(
									"Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
								));
					const i = "ws" === n.scheme || "wss" === n.scheme;
					return {
						repoInfo: new _o(
							n.host,
							n.secure,
							r,
							i,
							t,
							"",
							r !== n.subdomain
						),
						path: new Mo(n.pathString),
					};
				},
				Vu = function (e) {
					let t = "",
						n = "",
						r = "",
						i = "",
						a = "",
						o = !0,
						s = "https",
						l = 443;
					if ("string" === typeof e) {
						let c = e.indexOf("//");
						c >= 0 &&
							((s = e.substring(0, c - 1)),
							(e = e.substring(c + 2)));
						let u = e.indexOf("/");
						-1 === u && (u = e.length);
						let d = e.indexOf("?");
						-1 === d && (d = e.length),
							(t = e.substring(0, Math.min(u, d))),
							u < d &&
								(i = (function (e) {
									let t = "";
									const n = e.split("/");
									for (let r = 0; r < n.length; r++)
										if (n[r].length > 0) {
											let e = n[r];
											try {
												e = decodeURIComponent(
													e.replace(/\+/g, " ")
												);
											} catch (pf) {}
											t += "/" + e;
										}
									return t;
								})(e.substring(u, d)));
						const f = (function (e) {
							const t = {};
							"?" === e.charAt(0) && (e = e.substring(1));
							for (const n of e.split("&")) {
								if (0 === n.length) continue;
								const r = n.split("=");
								2 === r.length
									? (t[decodeURIComponent(r[0])] =
											decodeURIComponent(r[1]))
									: Ka(
											`Invalid query segment '${n}' in query '${e}'`
									  );
							}
							return t;
						})(e.substring(Math.min(e.length, d)));
						(c = t.indexOf(":")),
							c >= 0
								? ((o = "https" === s || "wss" === s),
								  (l = parseInt(t.substring(c + 1), 10)))
								: (c = t.length);
						const h = t.slice(0, c);
						if ("localhost" === h.toLowerCase()) n = "localhost";
						else if (h.split(".").length <= 2) n = h;
						else {
							const e = t.indexOf(".");
							(r = t.substring(0, e).toLowerCase()),
								(n = t.substring(e + 1)),
								(a = r);
						}
						"ns" in f && (a = f.ns);
					}
					return {
						host: t,
						port: l,
						domain: n,
						subdomain: r,
						secure: o,
						scheme: s,
						pathString: i,
						namespace: a,
					};
				},
				$u =
					"-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
				Qu = (function () {
					let e = 0;
					const t = [];
					return function (n) {
						const r = n === e;
						let i;
						e = n;
						const a = new Array(8);
						for (i = 7; i >= 0; i--)
							(a[i] = $u.charAt(n % 64)),
								(n = Math.floor(n / 64));
						er(0 === n, "Cannot push at time == 0");
						let o = a.join("");
						if (r) {
							for (i = 11; i >= 0 && 63 === t[i]; i--) t[i] = 0;
							t[i]++;
						} else
							for (i = 0; i < 12; i++)
								t[i] = Math.floor(64 * Math.random());
						for (i = 0; i < 12; i++) o += $u.charAt(t[i]);
						return (
							er(
								20 === o.length,
								"nextPushId: Length should be 20."
							),
							o
						);
					};
				})();
			class Yu {
				constructor(e, t, n, r) {
					(this.eventType = e),
						(this.eventRegistration = t),
						(this.snapshot = n),
						(this.prevName = r);
				}
				getPath() {
					const e = this.snapshot.ref;
					return "value" === this.eventType
						? e._path
						: e.parent._path;
				}
				getEventType() {
					return this.eventType;
				}
				getEventRunner() {
					return this.eventRegistration.getEventRunner(this);
				}
				toString() {
					return (
						this.getPath().toString() +
						":" +
						this.eventType +
						":" +
						wr(this.snapshot.exportVal())
					);
				}
			}
			class Ku {
				constructor(e, t, n) {
					(this.eventRegistration = e),
						(this.error = t),
						(this.path = n);
				}
				getPath() {
					return this.path;
				}
				getEventType() {
					return "cancel";
				}
				getEventRunner() {
					return this.eventRegistration.getEventRunner(this);
				}
				toString() {
					return this.path.toString() + ":cancel";
				}
			}
			class Gu {
				constructor(e, t) {
					(this.snapshotCallback = e), (this.cancelCallback = t);
				}
				onValue(e, t) {
					this.snapshotCallback.call(null, e, t);
				}
				onCancel(e) {
					return (
						er(
							this.hasCancelCallback,
							"Raising a cancel event on a listener with no cancel callback"
						),
						this.cancelCallback.call(null, e)
					);
				}
				get hasCancelCallback() {
					return !!this.cancelCallback;
				}
				matches(e) {
					return (
						this.snapshotCallback === e.snapshotCallback ||
						(void 0 !== this.snapshotCallback.userCallback &&
							this.snapshotCallback.userCallback ===
								e.snapshotCallback.userCallback &&
							this.snapshotCallback.context ===
								e.snapshotCallback.context)
					);
				}
			}
			class Xu {
				constructor(e, t) {
					(this._repo = e), (this._path = t);
				}
				cancel() {
					const e = new fr();
					return (
						Nu(
							this._repo,
							this._path,
							e.wrapCallback(() => {})
						),
						e.promise
					);
				}
				remove() {
					du("OnDisconnect.remove", this._path);
					const e = new fr();
					return (
						Iu(
							this._repo,
							this._path,
							null,
							e.wrapCallback(() => {})
						),
						e.promise
					);
				}
				set(e) {
					du("OnDisconnect.set", this._path),
						au("OnDisconnect.set", e, this._path, !1);
					const t = new fr();
					return (
						Iu(
							this._repo,
							this._path,
							e,
							t.wrapCallback(() => {})
						),
						t.promise
					);
				}
				setWithPriority(e, t) {
					du("OnDisconnect.setWithPriority", this._path),
						au("OnDisconnect.setWithPriority", e, this._path, !1),
						lu("OnDisconnect.setWithPriority", t, !1);
					const n = new fr();
					return (
						(function (e, t, n, r, i) {
							const a = Ns(n, r);
							e.server_.onDisconnectPut(
								t.toString(),
								a.val(!0),
								(n, r) => {
									"ok" === n && Ys(e.onDisconnect_, t, a),
										Du(0, i, n, r);
								}
							);
						})(
							this._repo,
							this._path,
							e,
							t,
							n.wrapCallback(() => {})
						),
						n.promise
					);
				}
				update(e) {
					du("OnDisconnect.update", this._path),
						su("OnDisconnect.update", e, this._path, !1);
					const t = new fr();
					return (
						(function (e, t, n, r) {
							if (Er(n))
								return (
									Va(
										"onDisconnect().update() called with empty data.  Don't do anything."
									),
									void Du(0, r, "ok", void 0)
								);
							e.server_.onDisconnectMerge(
								t.toString(),
								n,
								(i, a) => {
									"ok" === i &&
										io(n, (n, r) => {
											const i = Ns(r);
											Ys(e.onDisconnect_, Ho(t, n), i);
										}),
										Du(0, r, i, a);
								}
							);
						})(
							this._repo,
							this._path,
							e,
							t.wrapCallback(() => {})
						),
						t.promise
					);
				}
			}
			class Ju {
				constructor(e, t, n, r) {
					(this._repo = e),
						(this._path = t),
						(this._queryParams = n),
						(this._orderByCalled = r);
				}
				get key() {
					return Vo(this._path) ? null : Uo(this._path);
				}
				get ref() {
					return new nd(this._repo, this._path);
				}
				get _queryIdentifier() {
					const e = Hs(this._queryParams),
						t = no(e);
					return "{}" === t ? "default" : t;
				}
				get _queryObject() {
					return Hs(this._queryParams);
				}
				isEqual(e) {
					if (!((e = zr(e)) instanceof Ju)) return !1;
					const t = this._repo === e._repo,
						n = Yo(this._path, e._path),
						r = this._queryIdentifier === e._queryIdentifier;
					return t && n && r;
				}
				toJSON() {
					return this.toString();
				}
				toString() {
					return (
						this._repo.toString() +
						(function (e) {
							let t = "";
							for (let n = e.pieceNum_; n < e.pieces_.length; n++)
								"" !== e.pieces_[n] &&
									(t +=
										"/" +
										encodeURIComponent(
											String(e.pieces_[n])
										));
							return t || "/";
						})(this._path)
					);
				}
			}
			function Zu(e, t) {
				if (!0 === e._orderByCalled)
					throw new Error(
						t + ": You can't combine multiple orderBy calls."
					);
			}
			function ed(e) {
				let t = null,
					n = null;
				if (
					(e.hasStart() && (t = e.getIndexStartValue()),
					e.hasEnd() && (n = e.getIndexEndValue()),
					e.getIndex() === os)
				) {
					const r =
							"Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
						i =
							"Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
					if (e.hasStart()) {
						if (e.getIndexStartName() !== Xa) throw new Error(r);
						if ("string" !== typeof t) throw new Error(i);
					}
					if (e.hasEnd()) {
						if (e.getIndexEndName() !== Ja) throw new Error(r);
						if ("string" !== typeof n) throw new Error(i);
					}
				} else if (e.getIndex() === _s) {
					if ((null != t && !iu(t)) || (null != n && !iu(n)))
						throw new Error(
							"Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string)."
						);
				} else if (
					(er(
						e.getIndex() instanceof Is || e.getIndex() === As,
						"unknown index type."
					),
					(null != t && "object" === typeof t) ||
						(null != n && "object" === typeof n))
				)
					throw new Error(
						"Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object."
					);
			}
			function td(e) {
				if (
					e.hasStart() &&
					e.hasEnd() &&
					e.hasLimit() &&
					!e.hasAnchoredLimit()
				)
					throw new Error(
						"Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead."
					);
			}
			class nd extends Ju {
				constructor(e, t) {
					super(e, t, new js(), !1);
				}
				get parent() {
					const e = Bo(this._path);
					return null === e ? null : new nd(this._repo, e);
				}
				get root() {
					let e = this;
					for (; null !== e.parent; ) e = e.parent;
					return e;
				}
			}
			class rd {
				constructor(e, t, n) {
					(this._node = e), (this.ref = t), (this._index = n);
				}
				get priority() {
					return this._node.getPriority().val();
				}
				get key() {
					return this.ref.key;
				}
				get size() {
					return this._node.numChildren();
				}
				child(e) {
					const t = new Mo(e),
						n = od(this.ref, e);
					return new rd(this._node.getChild(t), n, _s);
				}
				exists() {
					return !this._node.isEmpty();
				}
				exportVal() {
					return this._node.val(!0);
				}
				forEach(e) {
					if (this._node.isLeafNode()) return !1;
					return !!this._node.forEachChild(this._index, (t, n) =>
						e(new rd(n, od(this.ref, t), _s))
					);
				}
				hasChild(e) {
					const t = new Mo(e);
					return !this._node.getChild(t).isEmpty();
				}
				hasChildren() {
					return !this._node.isLeafNode() && !this._node.isEmpty();
				}
				toJSON() {
					return this.exportVal();
				}
				val() {
					return this._node.val();
				}
			}
			function id(e, t) {
				return (
					(e = zr(e))._checkNotDeleted("ref"),
					void 0 !== t ? od(e._root, t) : e._root
				);
			}
			function ad(e, t) {
				(e = zr(e))._checkNotDeleted("refFromURL");
				const n = Hu(t, e._repo.repoInfo_.nodeAdmin);
				fu("refFromURL", n);
				const r = n.repoInfo;
				return (
					e._repo.repoInfo_.isCustomHost() ||
						r.host === e._repo.repoInfo_.host ||
						Ya(
							"refFromURL: Host name does not match the current database: (found " +
								r.host +
								" but expected " +
								e._repo.repoInfo_.host +
								")"
						),
					id(e, n.path.toString())
				);
			}
			function od(e, t) {
				var n, r, i, a;
				return (
					null === zo((e = zr(e))._path)
						? ((n = "child"),
						  (r = "path"),
						  (a = !1),
						  (i = t) && (i = i.replace(/^\/*\.info(\/|$)/, "/")),
						  uu(n, r, i, a))
						: uu("child", "path", t, !1),
					new nd(e._repo, Ho(e._path, t))
				);
			}
			function sd(e, t) {
				(e = zr(e)), du("set", e._path), au("set", t, e._path, !1);
				const n = new fr();
				return (
					Pu(
						e._repo,
						e._path,
						t,
						null,
						n.wrapCallback(() => {})
					),
					n.promise
				);
			}
			function ld(e, t) {
				su("update", t, e._path, !1);
				const n = new fr();
				return (
					(function (e, t, n, r) {
						Ru(e, "update", { path: t.toString(), value: n });
						let i = !0;
						const a = Su(e),
							o = {};
						if (
							(io(n, (n, r) => {
								(i = !1),
									(o[n] = Uc(
										Ho(t, n),
										Ns(r),
										e.serverSyncTree_,
										a
									));
							}),
							i)
						)
							Va(
								"update() called with empty data.  Don't do anything."
							),
								Du(0, r, "ok", void 0);
						else {
							const i = Tu(e),
								a = vc(e.serverSyncTree_, t, o, i);
							pu(e.eventQueue_, a),
								e.server_.merge(t.toString(), n, (n, a) => {
									const o = "ok" === n;
									o || Ka("update at " + t + " failed: " + n);
									const s = _c(e.serverSyncTree_, i, !o),
										l = s.length > 0 ? Fu(e, t) : t;
									gu(e.eventQueue_, l, s), Du(0, r, n, a);
								}),
								io(n, (n) => {
									const r = Wu(e, Ho(t, n));
									Fu(e, r);
								}),
								gu(e.eventQueue_, t, []);
						}
					})(
						e._repo,
						e._path,
						t,
						n.wrapCallback(() => {})
					),
					n.promise
				);
			}
			function cd(e) {
				e = zr(e);
				const t = new Gu(() => {}),
					n = new ud(t);
				return (function (e, t, n) {
					const r = Ec(e.serverSyncTree_, t);
					return null != r
						? Promise.resolve(r)
						: e.server_.get(t).then(
								(r) => {
									const i = Ns(r).withIndex(
										t._queryParams.getIndex()
									);
									let a;
									if (
										(Sc(e.serverSyncTree_, t, n, !0),
										t._queryParams.loadsAllData())
									)
										a = bc(e.serverSyncTree_, t._path, i);
									else {
										const n = Ic(e.serverSyncTree_, t);
										a = kc(
											e.serverSyncTree_,
											t._path,
											i,
											n
										);
									}
									return (
										gu(e.eventQueue_, t._path, a),
										wc(e.serverSyncTree_, t, n, null, !0),
										i
									);
								},
								(n) => (
									Ru(
										e,
										"get for query " +
											wr(t) +
											" failed: " +
											n
									),
									Promise.reject(new Error(n))
								)
						  );
				})(e._repo, e, n).then(
					(t) =>
						new rd(
							t,
							new nd(e._repo, e._path),
							e._queryParams.getIndex()
						)
				);
			}
			class ud {
				constructor(e) {
					this.callbackContext = e;
				}
				respondsTo(e) {
					return "value" === e;
				}
				createEvent(e, t) {
					const n = t._queryParams.getIndex();
					return new Yu(
						"value",
						this,
						new rd(e.snapshotNode, new nd(t._repo, t._path), n)
					);
				}
				getEventRunner(e) {
					return "cancel" === e.getEventType()
						? () => this.callbackContext.onCancel(e.error)
						: () => this.callbackContext.onValue(e.snapshot, null);
				}
				createCancelEvent(e, t) {
					return this.callbackContext.hasCancelCallback
						? new Ku(this, e, t)
						: null;
				}
				matches(e) {
					return (
						e instanceof ud &&
						(!e.callbackContext ||
							!this.callbackContext ||
							e.callbackContext.matches(this.callbackContext))
					);
				}
				hasAnyCallback() {
					return null !== this.callbackContext;
				}
			}
			class dd {
				constructor(e, t) {
					(this.eventType = e), (this.callbackContext = t);
				}
				respondsTo(e) {
					let t = "children_added" === e ? "child_added" : e;
					return (
						(t = "children_removed" === t ? "child_removed" : t),
						this.eventType === t
					);
				}
				createCancelEvent(e, t) {
					return this.callbackContext.hasCancelCallback
						? new Ku(this, e, t)
						: null;
				}
				createEvent(e, t) {
					er(
						null != e.childName,
						"Child events should have a childName."
					);
					const n = od(new nd(t._repo, t._path), e.childName),
						r = t._queryParams.getIndex();
					return new Yu(
						e.type,
						this,
						new rd(e.snapshotNode, n, r),
						e.prevName
					);
				}
				getEventRunner(e) {
					return "cancel" === e.getEventType()
						? () => this.callbackContext.onCancel(e.error)
						: () =>
								this.callbackContext.onValue(
									e.snapshot,
									e.prevName
								);
				}
				matches(e) {
					return (
						e instanceof dd &&
						this.eventType === e.eventType &&
						(!this.callbackContext ||
							!e.callbackContext ||
							this.callbackContext.matches(e.callbackContext))
					);
				}
				hasAnyCallback() {
					return !!this.callbackContext;
				}
			}
			function fd(e, t, n, r, i) {
				let a;
				if (
					("object" === typeof r && ((a = void 0), (i = r)),
					"function" === typeof r && (a = r),
					i && i.onlyOnce)
				) {
					const t = n,
						r = (n, r) => {
							Au(e._repo, e, s), t(n, r);
						};
					(r.userCallback = n.userCallback),
						(r.context = n.context),
						(n = r);
				}
				const o = new Gu(n, a || void 0),
					s = "value" === t ? new ud(o) : new dd(t, o);
				return (
					(function (e, t, n) {
						let r;
						(r =
							".info" === zo(t._path)
								? Sc(e.infoSyncTree_, t, n)
								: Sc(e.serverSyncTree_, t, n)),
							mu(e.eventQueue_, t._path, r);
					})(e._repo, e, s),
					() => Au(e._repo, e, s)
				);
			}
			function hd(e, t, n, r) {
				return fd(e, "value", t, n, r);
			}
			function pd(e, t, n, r) {
				return fd(e, "child_added", t, n, r);
			}
			function md(e, t, n, r) {
				return fd(e, "child_changed", t, n, r);
			}
			function gd(e, t, n, r) {
				return fd(e, "child_moved", t, n, r);
			}
			function yd(e, t, n, r) {
				return fd(e, "child_removed", t, n, r);
			}
			function vd(e, t, n) {
				let r = null;
				const i = n ? new Gu(n) : null;
				"value" === t ? (r = new ud(i)) : t && (r = new dd(t, i)),
					Au(e._repo, e, r);
			}
			class _d {}
			class bd extends _d {
				constructor(e, t) {
					super(),
						(this._value = e),
						(this._key = t),
						(this.type = "endAt");
				}
				_apply(e) {
					au("endAt", this._value, e._path, !0);
					const t = Us(e._queryParams, this._value, this._key);
					if ((td(t), ed(t), e._queryParams.hasEnd()))
						throw new Error(
							"endAt: Starting point was already set (by another call to endAt, endBefore or equalTo)."
						);
					return new Ju(e._repo, e._path, t, e._orderByCalled);
				}
			}
			class wd extends _d {
				constructor(e, t) {
					super(),
						(this._value = e),
						(this._key = t),
						(this.type = "endBefore");
				}
				_apply(e) {
					au("endBefore", this._value, e._path, !1);
					const t = (function (e, t, n) {
						let r;
						return (
							(r =
								e.index_ === os || n
									? Us(e, t, n)
									: Us(e, t, Xa)),
							(r.endBeforeSet_ = !0),
							r
						);
					})(e._queryParams, this._value, this._key);
					if ((td(t), ed(t), e._queryParams.hasEnd()))
						throw new Error(
							"endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo)."
						);
					return new Ju(e._repo, e._path, t, e._orderByCalled);
				}
			}
			class kd extends _d {
				constructor(e, t) {
					super(),
						(this._value = e),
						(this._key = t),
						(this.type = "startAt");
				}
				_apply(e) {
					au("startAt", this._value, e._path, !0);
					const t = qs(e._queryParams, this._value, this._key);
					if ((td(t), ed(t), e._queryParams.hasStart()))
						throw new Error(
							"startAt: Starting point was already set (by another call to startAt, startBefore or equalTo)."
						);
					return new Ju(e._repo, e._path, t, e._orderByCalled);
				}
			}
			class Sd extends _d {
				constructor(e, t) {
					super(),
						(this._value = e),
						(this._key = t),
						(this.type = "startAfter");
				}
				_apply(e) {
					au("startAfter", this._value, e._path, !1);
					const t = (function (e, t, n) {
						let r;
						return (
							(r =
								e.index_ === os || n
									? qs(e, t, n)
									: qs(e, t, Ja)),
							(r.startAfterSet_ = !0),
							r
						);
					})(e._queryParams, this._value, this._key);
					if ((td(t), ed(t), e._queryParams.hasStart()))
						throw new Error(
							"startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo)."
						);
					return new Ju(e._repo, e._path, t, e._orderByCalled);
				}
			}
			class Cd extends _d {
				constructor(e) {
					super(), (this._limit = e), (this.type = "limitToFirst");
				}
				_apply(e) {
					if (e._queryParams.hasLimit())
						throw new Error(
							"limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast)."
						);
					return new Ju(
						e._repo,
						e._path,
						(function (e, t) {
							const n = e.copy();
							return (
								(n.limitSet_ = !0),
								(n.limit_ = t),
								(n.viewFrom_ = "l"),
								n
							);
						})(e._queryParams, this._limit),
						e._orderByCalled
					);
				}
			}
			class Ed extends _d {
				constructor(e) {
					super(), (this._limit = e), (this.type = "limitToLast");
				}
				_apply(e) {
					if (e._queryParams.hasLimit())
						throw new Error(
							"limitToLast: Limit was already set (by another call to limitToFirst or limitToLast)."
						);
					return new Ju(
						e._repo,
						e._path,
						(function (e, t) {
							const n = e.copy();
							return (
								(n.limitSet_ = !0),
								(n.limit_ = t),
								(n.viewFrom_ = "r"),
								n
							);
						})(e._queryParams, this._limit),
						e._orderByCalled
					);
				}
			}
			class xd extends _d {
				constructor(e) {
					super(), (this._path = e), (this.type = "orderByChild");
				}
				_apply(e) {
					Zu(e, "orderByChild");
					const t = new Mo(this._path);
					if (Vo(t))
						throw new Error(
							"orderByChild: cannot pass in empty path. Use orderByValue() instead."
						);
					const n = new Is(t),
						r = Ws(e._queryParams, n);
					return ed(r), new Ju(e._repo, e._path, r, !0);
				}
			}
			class Td extends _d {
				constructor() {
					super(...arguments), (this.type = "orderByKey");
				}
				_apply(e) {
					Zu(e, "orderByKey");
					const t = Ws(e._queryParams, os);
					return ed(t), new Ju(e._repo, e._path, t, !0);
				}
			}
			class Pd extends _d {
				constructor() {
					super(...arguments), (this.type = "orderByPriority");
				}
				_apply(e) {
					Zu(e, "orderByPriority");
					const t = Ws(e._queryParams, _s);
					return ed(t), new Ju(e._repo, e._path, t, !0);
				}
			}
			class Nd extends _d {
				constructor() {
					super(...arguments), (this.type = "orderByValue");
				}
				_apply(e) {
					Zu(e, "orderByValue");
					const t = Ws(e._queryParams, As);
					return ed(t), new Ju(e._repo, e._path, t, !0);
				}
			}
			class Id extends _d {
				constructor(e, t) {
					super(),
						(this._value = e),
						(this._key = t),
						(this.type = "equalTo");
				}
				_apply(e) {
					if (
						(au("equalTo", this._value, e._path, !1),
						e._queryParams.hasStart())
					)
						throw new Error(
							"equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo)."
						);
					if (e._queryParams.hasEnd())
						throw new Error(
							"equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo)."
						);
					return new bd(this._value, this._key)._apply(
						new kd(this._value, this._key)._apply(e)
					);
				}
			}
			function Ad(e) {
				let t = zr(e);
				for (
					var n = arguments.length,
						r = new Array(n > 1 ? n - 1 : 0),
						i = 1;
					i < n;
					i++
				)
					r[i - 1] = arguments[i];
				for (const a of r) t = a._apply(t);
				return t;
			}
			!(function (e) {
				er(!nc, "__referenceConstructor has already been defined"),
					(nc = e);
			})(nd),
				(function (e) {
					er(!rc, "__referenceConstructor has already been defined"),
						(rc = e);
				})(nd);
			const Od = {};
			let Rd = !1;
			function Dd(e, t, n, r, i) {
				let a = r || e.options.databaseURL;
				void 0 === a &&
					(e.options.projectId ||
						Ya(
							"Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
						),
					Va("Using default host for project ", e.options.projectId),
					(a = `${e.options.projectId}-default-rtdb.firebaseio.com`));
				let o,
					s,
					l = Hu(a, i),
					c = l.repoInfo;
				"undefined" !== typeof process &&
					(s = {
						NODE_ENV: "production",
						PUBLIC_URL: "/kaps",
						WDS_SOCKET_HOST: void 0,
						WDS_SOCKET_PATH: void 0,
						WDS_SOCKET_PORT: void 0,
						FAST_REFRESH: !0,
					}.FIREBASE_DATABASE_EMULATOR_HOST),
					s
						? ((o = !0),
						  (a = `http://${s}?ns=${c.namespace}`),
						  (l = Hu(a, i)),
						  (c = l.repoInfo))
						: (o = !l.repoInfo.secure);
				const u =
					i && o ? new ho(ho.OWNER) : new fo(e.name, e.options, t);
				fu("Invalid Firebase Database URL", l),
					Vo(l.path) ||
						Ya(
							"Database URL must point to the root of a Firebase Database (not including a child path)."
						);
				const d = (function (e, t, n, r) {
					let i = Od[t.name];
					i || ((i = {}), (Od[t.name] = i));
					let a = i[e.toURLString()];
					a &&
						Ya(
							"Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
						);
					return (
						(a = new bu(e, Rd, n, r)), (i[e.toURLString()] = a), a
					);
				})(c, e, u, new uo(e, n));
				return new Ld(d, e);
			}
			class Ld {
				constructor(e, t) {
					(this._repoInternal = e),
						(this.app = t),
						(this.type = "database"),
						(this._instanceStarted = !1);
				}
				get _repo() {
					return (
						this._instanceStarted ||
							(wu(
								this._repoInternal,
								this.app.options.appId,
								this.app.options.databaseAuthVariableOverride
							),
							(this._instanceStarted = !0)),
						this._repoInternal
					);
				}
				get _root() {
					return (
						this._rootInternal ||
							(this._rootInternal = new nd(this._repo, Fo())),
						this._rootInternal
					);
				}
				_delete() {
					return (
						null !== this._rootInternal &&
							(!(function (e, t) {
								const n = Od[t];
								(n && n[e.key] === e) ||
									Ya(
										`Database ${t}(${e.repoInfo_}) has already been deleted.`
									),
									Ou(e),
									delete n[e.key];
							})(this._repo, this.app.name),
							(this._repoInternal = null),
							(this._rootInternal = null)),
						Promise.resolve()
					);
				}
				_checkNotDeleted(e) {
					null === this._rootInternal &&
						Ya("Cannot call " + e + " on a deleted database.");
				}
			}
			function Md() {
				Ao.IS_TRANSPORT_INITIALIZED &&
					Ka(
						"Transport has already been initialized. Please call this function before calling ref or setting up a listener"
					);
			}
			function Fd() {
				Md(), To.forceDisallow();
			}
			function zd() {
				Md(), Io.forceDisallow(), To.forceAllow();
			}
			function jd(e, t, n) {
				let r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: {};
				(e = zr(e))._checkNotDeleted("useEmulator");
				const i = `${t}:${n}`,
					a = e._repoInternal;
				if (e._instanceStarted) {
					if (
						i === e._repoInternal.repoInfo_.host &&
						Tr(r, a.repoInfo_.emulatorOptions)
					)
						return;
					Ya(
						"connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started."
					);
				}
				let o;
				if (a.repoInfo_.nodeAdmin)
					r.mockUserToken &&
						Ya(
							'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
						),
						(o = new ho(ho.OWNER));
				else if (r.mockUserToken) {
					const t =
						"string" === typeof r.mockUserToken
							? r.mockUserToken
							: (function (e, t) {
									if (e.uid)
										throw new Error(
											'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
										);
									const n = t || "demo-project",
										r = e.iat || 0,
										i = e.sub || e.user_id;
									if (!i)
										throw new Error(
											"mockUserToken must contain 'sub' or 'user_id' field!"
										);
									const a = Object.assign(
										{
											iss: `https://securetoken.google.com/${n}`,
											aud: n,
											iat: r,
											exp: r + 3600,
											auth_time: r,
											sub: i,
											user_id: i,
											firebase: {
												sign_in_provider: "custom",
												identities: {},
											},
										},
										e
									);
									return [
										or(
											JSON.stringify({
												alg: "none",
												type: "JWT",
											})
										),
										or(JSON.stringify(a)),
										"",
									].join(".");
							  })(r.mockUserToken, e.app.options.projectId);
					o = new ho(t);
				}
				!(function (e, t, n, r) {
					(e.repoInfo_ = new _o(
						t,
						!1,
						e.repoInfo_.namespace,
						e.repoInfo_.webSocketOnly,
						e.repoInfo_.nodeAdmin,
						e.repoInfo_.persistenceKey,
						e.repoInfo_.includeNamespaceInQueryParams,
						!0,
						n
					)),
						r && (e.authTokenProvider_ = r);
				})(a, i, r, o);
			}
			function qd(e) {
				var t;
				(e = zr(e))._checkNotDeleted("goOnline"),
					(t = e._repo).persistentConnection_ &&
						t.persistentConnection_.resume(_u);
			}
			function Ud(e, t) {
				Ha(e, t);
			}
			const Wd = { ".sv": "timestamp" };
			class Bd {
				constructor(e, t) {
					(this.committed = e), (this.snapshot = t);
				}
				toJSON() {
					return {
						committed: this.committed,
						snapshot: this.snapshot.toJSON(),
					};
				}
			}
			function Hd(e, t, n) {
				var r;
				if (
					((e = zr(e)),
					du("Reference.transaction", e._path),
					".length" === e.key || ".keys" === e.key)
				)
					throw (
						"Reference.transaction failed: " +
						e.key +
						" is a read-only object."
					);
				const i =
						null ===
							(r =
								null === n || void 0 === n
									? void 0
									: n.applyLocally) ||
						void 0 === r ||
						r,
					a = new fr(),
					o = hd(e, () => {});
				return (
					(function (e, t, n, r, i, a) {
						Ru(e, "transaction on " + t);
						const o = {
								path: t,
								update: n,
								onComplete: r,
								status: null,
								order: ja(),
								applyLocally: a,
								retryCount: 0,
								unwatcher: i,
								abortReason: null,
								currentWriteId: null,
								currentInputSnapshot: null,
								currentOutputSnapshotRaw: null,
								currentOutputSnapshotResolved: null,
							},
							s = Lu(e, t, void 0);
						o.currentInputSnapshot = s;
						const l = o.update(s.val());
						if (void 0 === l)
							o.unwatcher(),
								(o.currentOutputSnapshotRaw = null),
								(o.currentOutputSnapshotResolved = null),
								o.onComplete &&
									o.onComplete(
										null,
										!1,
										o.currentInputSnapshot
									);
						else {
							ou("transaction failed: Data returned ", l, o.path),
								(o.status = 0);
							const n = Vc(e.transactionQueueTree_, t),
								r = $c(n) || [];
							let i;
							r.push(o),
								Qc(n, r),
								"object" === typeof l &&
								null !== l &&
								Sr(l, ".priority")
									? ((i = Cr(l, ".priority")),
									  er(
											iu(i),
											"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
									  ))
									: (i = (
											Cc(e.serverSyncTree_, t) ||
											Ts.EMPTY_NODE
									  )
											.getPriority()
											.val());
							const a = Su(e),
								c = Ns(l, i),
								u = Wc(c, s, a);
							(o.currentOutputSnapshotRaw = c),
								(o.currentOutputSnapshotResolved = u),
								(o.currentWriteId = Tu(e));
							const d = yc(
								e.serverSyncTree_,
								t,
								u,
								o.currentWriteId,
								o.applyLocally
							);
							gu(e.eventQueue_, t, d),
								Mu(e, e.transactionQueueTree_);
						}
					})(
						e._repo,
						e._path,
						t,
						(t, n, r) => {
							let i = null;
							t
								? a.reject(t)
								: ((i = new rd(
										r,
										new nd(e._repo, e._path),
										_s
								  )),
								  a.resolve(new Bd(n, i)));
						},
						o,
						i
					),
					a.promise
				);
			}
			(ts.prototype.simpleListen = function (e, t) {
				this.sendRequest("q", { p: e }, t);
			}),
				(ts.prototype.echo = function (e, t) {
					this.sendRequest("echo", { d: e }, t);
				});
			!(function (e) {
				Oa(aa),
					Ki(
						new jr(
							"database",
							(e, t) => {
								let { instanceIdentifier: n } = t;
								return Dd(
									e.getProvider("app").getImmediate(),
									e.getProvider("auth-internal"),
									e.getProvider("app-check-internal"),
									n
								);
							},
							"PUBLIC"
						).setMultipleInstances(!0)
					),
					da(Na, Ia, e),
					da(Na, Ia, "esm2017");
			})();
			const Vd = new Kr("@firebase/database-compat"),
				$d = function (e) {
					const t = "FIREBASE WARNING: " + e;
					Vd.warn(t);
				};
			class Qd {
				constructor(e) {
					this._delegate = e;
				}
				cancel(e) {
					Rr("OnDisconnect.cancel", 0, 1, arguments.length),
						Lr("OnDisconnect.cancel", "onComplete", e, !0);
					const t = this._delegate.cancel();
					return (
						e &&
							t.then(
								() => e(null),
								(t) => e(t)
							),
						t
					);
				}
				remove(e) {
					Rr("OnDisconnect.remove", 0, 1, arguments.length),
						Lr("OnDisconnect.remove", "onComplete", e, !0);
					const t = this._delegate.remove();
					return (
						e &&
							t.then(
								() => e(null),
								(t) => e(t)
							),
						t
					);
				}
				set(e, t) {
					Rr("OnDisconnect.set", 1, 2, arguments.length),
						Lr("OnDisconnect.set", "onComplete", t, !0);
					const n = this._delegate.set(e);
					return (
						t &&
							n.then(
								() => t(null),
								(e) => t(e)
							),
						n
					);
				}
				setWithPriority(e, t, n) {
					Rr("OnDisconnect.setWithPriority", 2, 3, arguments.length),
						Lr("OnDisconnect.setWithPriority", "onComplete", n, !0);
					const r = this._delegate.setWithPriority(e, t);
					return (
						n &&
							r.then(
								() => n(null),
								(e) => n(e)
							),
						r
					);
				}
				update(e, t) {
					if (
						(Rr("OnDisconnect.update", 1, 2, arguments.length),
						Array.isArray(e))
					) {
						const t = {};
						for (let n = 0; n < e.length; ++n) t["" + n] = e[n];
						(e = t),
							$d(
								"Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
							);
					}
					Lr("OnDisconnect.update", "onComplete", t, !0);
					const n = this._delegate.update(e);
					return (
						t &&
							n.then(
								() => t(null),
								(e) => t(e)
							),
						n
					);
				}
			}
			class Yd {
				constructor(e, t) {
					(this.committed = e), (this.snapshot = t);
				}
				toJSON() {
					return (
						Rr("TransactionResult.toJSON", 0, 1, arguments.length),
						{
							committed: this.committed,
							snapshot: this.snapshot.toJSON(),
						}
					);
				}
			}
			class Kd {
				constructor(e, t) {
					(this._database = e), (this._delegate = t);
				}
				val() {
					return (
						Rr("DataSnapshot.val", 0, 0, arguments.length),
						this._delegate.val()
					);
				}
				exportVal() {
					return (
						Rr("DataSnapshot.exportVal", 0, 0, arguments.length),
						this._delegate.exportVal()
					);
				}
				toJSON() {
					return (
						Rr("DataSnapshot.toJSON", 0, 1, arguments.length),
						this._delegate.toJSON()
					);
				}
				exists() {
					return (
						Rr("DataSnapshot.exists", 0, 0, arguments.length),
						this._delegate.exists()
					);
				}
				child(e) {
					return (
						Rr("DataSnapshot.child", 0, 1, arguments.length),
						(e = String(e)),
						uu("DataSnapshot.child", "path", e, !1),
						new Kd(this._database, this._delegate.child(e))
					);
				}
				hasChild(e) {
					return (
						Rr("DataSnapshot.hasChild", 1, 1, arguments.length),
						uu("DataSnapshot.hasChild", "path", e, !1),
						this._delegate.hasChild(e)
					);
				}
				getPriority() {
					return (
						Rr("DataSnapshot.getPriority", 0, 0, arguments.length),
						this._delegate.priority
					);
				}
				forEach(e) {
					return (
						Rr("DataSnapshot.forEach", 1, 1, arguments.length),
						Lr("DataSnapshot.forEach", "action", e, !1),
						this._delegate.forEach((t) =>
							e(new Kd(this._database, t))
						)
					);
				}
				hasChildren() {
					return (
						Rr("DataSnapshot.hasChildren", 0, 0, arguments.length),
						this._delegate.hasChildren()
					);
				}
				get key() {
					return this._delegate.key;
				}
				numChildren() {
					return (
						Rr("DataSnapshot.numChildren", 0, 0, arguments.length),
						this._delegate.size
					);
				}
				getRef() {
					return (
						Rr("DataSnapshot.ref", 0, 0, arguments.length),
						new Xd(this._database, this._delegate.ref)
					);
				}
				get ref() {
					return this.getRef();
				}
			}
			class Gd {
				constructor(e, t) {
					(this.database = e), (this._delegate = t);
				}
				on(e, t, n, r) {
					var i;
					Rr("Query.on", 2, 4, arguments.length),
						Lr("Query.on", "callback", t, !1);
					const a = Gd.getCancelAndContextArgs_("Query.on", n, r),
						o = (e, n) => {
							t.call(a.context, new Kd(this.database, e), n);
						};
					(o.userCallback = t), (o.context = a.context);
					const s =
						null === (i = a.cancel) || void 0 === i
							? void 0
							: i.bind(a.context);
					switch (e) {
						case "value":
							return hd(this._delegate, o, s), t;
						case "child_added":
							return pd(this._delegate, o, s), t;
						case "child_removed":
							return yd(this._delegate, o, s), t;
						case "child_changed":
							return md(this._delegate, o, s), t;
						case "child_moved":
							return gd(this._delegate, o, s), t;
						default:
							throw new Error(
								Dr("Query.on", "eventType") +
									'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
							);
					}
				}
				off(e, t, n) {
					if (
						(Rr("Query.off", 0, 3, arguments.length),
						(function (e, t, n) {
							if (!n || void 0 !== t)
								switch (t) {
									case "value":
									case "child_added":
									case "child_removed":
									case "child_changed":
									case "child_moved":
										break;
									default:
										throw new Error(
											Dr(e, "eventType") +
												'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
										);
								}
						})("Query.off", e, !0),
						Lr("Query.off", "callback", t, !0),
						Mr("Query.off", "context", n, !0),
						t)
					) {
						const r = () => {};
						(r.userCallback = t),
							(r.context = n),
							vd(this._delegate, e, r);
					} else vd(this._delegate, e);
				}
				get() {
					return cd(this._delegate).then(
						(e) => new Kd(this.database, e)
					);
				}
				once(e, t, n, r) {
					Rr("Query.once", 1, 4, arguments.length),
						Lr("Query.once", "callback", t, !0);
					const i = Gd.getCancelAndContextArgs_("Query.once", n, r),
						a = new fr(),
						o = (e, n) => {
							const r = new Kd(this.database, e);
							t && t.call(i.context, r, n), a.resolve(r);
						};
					(o.userCallback = t), (o.context = i.context);
					const s = (e) => {
						i.cancel && i.cancel.call(i.context, e), a.reject(e);
					};
					switch (e) {
						case "value":
							hd(this._delegate, o, s, { onlyOnce: !0 });
							break;
						case "child_added":
							pd(this._delegate, o, s, { onlyOnce: !0 });
							break;
						case "child_removed":
							yd(this._delegate, o, s, { onlyOnce: !0 });
							break;
						case "child_changed":
							md(this._delegate, o, s, { onlyOnce: !0 });
							break;
						case "child_moved":
							gd(this._delegate, o, s, { onlyOnce: !0 });
							break;
						default:
							throw new Error(
								Dr("Query.once", "eventType") +
									'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
							);
					}
					return a.promise;
				}
				limitToFirst(e) {
					return (
						Rr("Query.limitToFirst", 1, 1, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e) {
									if (
										"number" !== typeof e ||
										Math.floor(e) !== e ||
										e <= 0
									)
										throw new Error(
											"limitToFirst: First argument must be a positive integer."
										);
									return new Cd(e);
								})(e)
							)
						)
					);
				}
				limitToLast(e) {
					return (
						Rr("Query.limitToLast", 1, 1, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e) {
									if (
										"number" !== typeof e ||
										Math.floor(e) !== e ||
										e <= 0
									)
										throw new Error(
											"limitToLast: First argument must be a positive integer."
										);
									return new Ed(e);
								})(e)
							)
						)
					);
				}
				orderByChild(e) {
					return (
						Rr("Query.orderByChild", 1, 1, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e) {
									if ("$key" === e)
										throw new Error(
											'orderByChild: "$key" is invalid.  Use orderByKey() instead.'
										);
									if ("$priority" === e)
										throw new Error(
											'orderByChild: "$priority" is invalid.  Use orderByPriority() instead.'
										);
									if ("$value" === e)
										throw new Error(
											'orderByChild: "$value" is invalid.  Use orderByValue() instead.'
										);
									return (
										uu("orderByChild", "path", e, !1),
										new xd(e)
									);
								})(e)
							)
						)
					);
				}
				orderByKey() {
					return (
						Rr("Query.orderByKey", 0, 0, arguments.length),
						new Gd(this.database, Ad(this._delegate, new Td()))
					);
				}
				orderByPriority() {
					return (
						Rr("Query.orderByPriority", 0, 0, arguments.length),
						new Gd(this.database, Ad(this._delegate, new Pd()))
					);
				}
				orderByValue() {
					return (
						Rr("Query.orderByValue", 0, 0, arguments.length),
						new Gd(this.database, Ad(this._delegate, new Nd()))
					);
				}
				startAt() {
					let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return (
						Rr("Query.startAt", 0, 2, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function () {
									let e =
											arguments.length > 0 &&
											void 0 !== arguments[0]
												? arguments[0]
												: null,
										t =
											arguments.length > 1
												? arguments[1]
												: void 0;
									return (
										cu("startAt", "key", t, !0),
										new kd(e, t)
									);
								})(e, t)
							)
						)
					);
				}
				startAfter() {
					let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return (
						Rr("Query.startAfter", 0, 2, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e, t) {
									return (
										cu("startAfter", "key", t, !0),
										new Sd(e, t)
									);
								})(e, t)
							)
						)
					);
				}
				endAt() {
					let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return (
						Rr("Query.endAt", 0, 2, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e, t) {
									return (
										cu("endAt", "key", t, !0), new bd(e, t)
									);
								})(e, t)
							)
						)
					);
				}
				endBefore() {
					let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return (
						Rr("Query.endBefore", 0, 2, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e, t) {
									return (
										cu("endBefore", "key", t, !0),
										new wd(e, t)
									);
								})(e, t)
							)
						)
					);
				}
				equalTo(e, t) {
					return (
						Rr("Query.equalTo", 1, 2, arguments.length),
						new Gd(
							this.database,
							Ad(
								this._delegate,
								(function (e, t) {
									return (
										cu("equalTo", "key", t, !0),
										new Id(e, t)
									);
								})(e, t)
							)
						)
					);
				}
				toString() {
					return (
						Rr("Query.toString", 0, 0, arguments.length),
						this._delegate.toString()
					);
				}
				toJSON() {
					return (
						Rr("Query.toJSON", 0, 1, arguments.length),
						this._delegate.toJSON()
					);
				}
				isEqual(e) {
					if (
						(Rr("Query.isEqual", 1, 1, arguments.length),
						!(e instanceof Gd))
					) {
						throw new Error(
							"Query.isEqual failed: First argument must be an instance of firebase.database.Query."
						);
					}
					return this._delegate.isEqual(e._delegate);
				}
				static getCancelAndContextArgs_(e, t, n) {
					const r = { cancel: void 0, context: void 0 };
					if (t && n)
						(r.cancel = t),
							Lr(e, "cancel", r.cancel, !0),
							(r.context = n),
							Mr(e, "context", r.context, !0);
					else if (t)
						if ("object" === typeof t && null !== t) r.context = t;
						else {
							if ("function" !== typeof t)
								throw new Error(
									Dr(e, "cancelOrContext") +
										" must either be a cancel callback or a context object."
								);
							r.cancel = t;
						}
					return r;
				}
				get ref() {
					return new Xd(
						this.database,
						new nd(this._delegate._repo, this._delegate._path)
					);
				}
			}
			class Xd extends Gd {
				constructor(e, t) {
					super(e, new Ju(t._repo, t._path, new js(), !1)),
						(this.database = e),
						(this._delegate = t);
				}
				getKey() {
					return (
						Rr("Reference.key", 0, 0, arguments.length),
						this._delegate.key
					);
				}
				child(e) {
					return (
						Rr("Reference.child", 1, 1, arguments.length),
						"number" === typeof e && (e = String(e)),
						new Xd(this.database, od(this._delegate, e))
					);
				}
				getParent() {
					Rr("Reference.parent", 0, 0, arguments.length);
					const e = this._delegate.parent;
					return e ? new Xd(this.database, e) : null;
				}
				getRoot() {
					return (
						Rr("Reference.root", 0, 0, arguments.length),
						new Xd(this.database, this._delegate.root)
					);
				}
				set(e, t) {
					Rr("Reference.set", 1, 2, arguments.length),
						Lr("Reference.set", "onComplete", t, !0);
					const n = sd(this._delegate, e);
					return (
						t &&
							n.then(
								() => t(null),
								(e) => t(e)
							),
						n
					);
				}
				update(e, t) {
					if (
						(Rr("Reference.update", 1, 2, arguments.length),
						Array.isArray(e))
					) {
						const t = {};
						for (let n = 0; n < e.length; ++n) t["" + n] = e[n];
						(e = t),
							$d(
								"Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
							);
					}
					du("Reference.update", this._delegate._path),
						Lr("Reference.update", "onComplete", t, !0);
					const n = ld(this._delegate, e);
					return (
						t &&
							n.then(
								() => t(null),
								(e) => t(e)
							),
						n
					);
				}
				setWithPriority(e, t, n) {
					Rr("Reference.setWithPriority", 2, 3, arguments.length),
						Lr("Reference.setWithPriority", "onComplete", n, !0);
					const r = (function (e, t, n) {
						if (
							(du("setWithPriority", e._path),
							au("setWithPriority", t, e._path, !1),
							lu("setWithPriority", n, !1),
							".length" === e.key || ".keys" === e.key)
						)
							throw (
								"setWithPriority failed: " +
								e.key +
								" is a read-only object."
							);
						const r = new fr();
						return (
							Pu(
								e._repo,
								e._path,
								t,
								n,
								r.wrapCallback(() => {})
							),
							r.promise
						);
					})(this._delegate, e, t);
					return (
						n &&
							r.then(
								() => n(null),
								(e) => n(e)
							),
						r
					);
				}
				remove(e) {
					Rr("Reference.remove", 0, 1, arguments.length),
						Lr("Reference.remove", "onComplete", e, !0);
					const t = (function (e) {
						return du("remove", e._path), sd(e, null);
					})(this._delegate);
					return (
						e &&
							t.then(
								() => e(null),
								(t) => e(t)
							),
						t
					);
				}
				transaction(e, t, n) {
					Rr("Reference.transaction", 1, 3, arguments.length),
						Lr("Reference.transaction", "transactionUpdate", e, !1),
						Lr("Reference.transaction", "onComplete", t, !0),
						(function (e, t, n, r) {
							if ((!r || void 0 !== n) && "boolean" !== typeof n)
								throw new Error(
									Dr(e, t) + "must be a boolean."
								);
						})("Reference.transaction", "applyLocally", n, !0);
					const r = Hd(this._delegate, e, { applyLocally: n }).then(
						(e) =>
							new Yd(
								e.committed,
								new Kd(this.database, e.snapshot)
							)
					);
					return (
						t &&
							r.then(
								(e) => t(null, e.committed, e.snapshot),
								(e) => t(e, !1, null)
							),
						r
					);
				}
				setPriority(e, t) {
					Rr("Reference.setPriority", 1, 2, arguments.length),
						Lr("Reference.setPriority", "onComplete", t, !0);
					const n = (function (e, t) {
						(e = zr(e)),
							du("setPriority", e._path),
							lu("setPriority", t, !1);
						const n = new fr();
						return (
							Pu(
								e._repo,
								Ho(e._path, ".priority"),
								t,
								null,
								n.wrapCallback(() => {})
							),
							n.promise
						);
					})(this._delegate, e);
					return (
						t &&
							n.then(
								() => t(null),
								(e) => t(e)
							),
						n
					);
				}
				push(e, t) {
					Rr("Reference.push", 0, 2, arguments.length),
						Lr("Reference.push", "onComplete", t, !0);
					const n = (function (e, t) {
							(e = zr(e)),
								du("push", e._path),
								au("push", t, e._path, !0);
							const n = ku(e._repo),
								r = Qu(n),
								i = od(e, r),
								a = od(e, r);
							let o;
							return (
								(o =
									null != t
										? sd(a, t).then(() => a)
										: Promise.resolve(a)),
								(i.then = o.then.bind(o)),
								(i.catch = o.then.bind(o, void 0)),
								i
							);
						})(this._delegate, e),
						r = n.then((e) => new Xd(this.database, e));
					t &&
						r.then(
							() => t(null),
							(e) => t(e)
						);
					const i = new Xd(this.database, n);
					return (
						(i.then = r.then.bind(r)),
						(i.catch = r.catch.bind(r, void 0)),
						i
					);
				}
				onDisconnect() {
					return (
						du("Reference.onDisconnect", this._delegate._path),
						new Qd(
							new Xu(this._delegate._repo, this._delegate._path)
						)
					);
				}
				get key() {
					return this.getKey();
				}
				get parent() {
					return this.getParent();
				}
				get root() {
					return this.getRoot();
				}
			}
			class Jd {
				constructor(e, t) {
					(this._delegate = e),
						(this.app = t),
						(this.INTERNAL = {
							delete: () => this._delegate._delete(),
							forceWebSockets: Fd,
							forceLongPolling: zd,
						});
				}
				useEmulator(e, t) {
					let n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {};
					jd(this._delegate, e, t, n);
				}
				ref(e) {
					if (
						(Rr("database.ref", 0, 1, arguments.length),
						e instanceof Xd)
					) {
						const t = ad(this._delegate, e.toString());
						return new Xd(this, t);
					}
					{
						const t = id(this._delegate, e);
						return new Xd(this, t);
					}
				}
				refFromURL(e) {
					Rr("database.refFromURL", 1, 1, arguments.length);
					const t = ad(this._delegate, e);
					return new Xd(this, t);
				}
				goOffline() {
					return (
						Rr("database.goOffline", 0, 0, arguments.length),
						(function (e) {
							(e = zr(e))._checkNotDeleted("goOffline"),
								Ou(e._repo);
						})(this._delegate)
					);
				}
				goOnline() {
					return (
						Rr("database.goOnline", 0, 0, arguments.length),
						qd(this._delegate)
					);
				}
			}
			Jd.ServerValue = {
				TIMESTAMP: Wd,
				increment: (e) =>
					(function (e) {
						return { ".sv": { increment: e } };
					})(e),
			};
			var Zd = Object.freeze({
				__proto__: null,
				initStandalone: function (e) {
					let {
						app: t,
						url: n,
						version: r,
						customAuthImpl: i,
						customAppCheckImpl: a,
						namespace: o,
						nodeAdmin: s = !1,
					} = e;
					Oa(r);
					const l = new Wr("database-standalone"),
						c = new Ur("auth-internal", l);
					let u;
					return (
						c.setComponent(
							new jr("auth-internal", () => i, "PRIVATE")
						),
						a &&
							((u = new Ur("app-check-internal", l)),
							u.setComponent(
								new jr("app-check-internal", () => a, "PRIVATE")
							)),
						{ instance: new Jd(Dd(t, c, u, n, s), t), namespace: o }
					);
				},
			});
			const ef = Jd.ServerValue;
			var tf;
			(tf = Pa).INTERNAL.registerComponent(
				new jr(
					"database-compat",
					(e, t) => {
						let { instanceIdentifier: n } = t;
						const r = e.getProvider("app-compat").getImmediate(),
							i = e
								.getProvider("database")
								.getImmediate({ identifier: n });
						return new Jd(i, r);
					},
					"PUBLIC"
				)
					.setServiceProps({
						Reference: Xd,
						Query: Gd,
						Database: Jd,
						DataSnapshot: Kd,
						enableLogging: Ud,
						INTERNAL: Zd,
						ServerValue: ef,
					})
					.setMultipleInstances(!0)
			),
				tf.registerVersion("@firebase/database-compat", "2.0.5");
			Pa.initializeApp({
				apiKey: "AIzaSyCcrUXyy0O7ElgKsVpyR9lODhqIi3c2K1k",
				authDomain: "omnnotifier.firebaseapp.com",
				databaseURL:
					"https://omnnotifier-default-rtdb.europe-west1.firebasedatabase.app",
				projectId: "omnnotifier",
				storageBucket: "omnnotifier.firebasestorage.app",
				messagingSenderId: "456373027955",
				appId: "1:456373027955:web:1d535de3a121f69f541606",
				measurementId: "G-J71GGK70NY",
			});
			const nf = Pa.database(),
				rf = () => {
					const [e, n] = (0, t.useState)([]),
						[r, i] = (0, t.useState)(null),
						[a, o] = (0, t.useState)(!0),
						s = (0, t.useRef)(Date.now()),
						l = Kn();
					return (
						(0, t.useEffect)(() => {
							nf.ref("messages")
								.once("value")
								.then((e) => {
									const t = e.val();
									if ((console.log("current data:", t), !t))
										return;
									const r = Object.entries(t),
										a = [];
									let s = !1,
										c = null;
									for (const [n, i] of r)
										"NEW DAY" !== i.content
											? a.push({ key: n, ...i })
											: (console.log("found new day"),
											  (c = n),
											  (s = !0),
											  (a.length = 0));
									a.forEach((e) =>
										l({ type: "ADD_MESSAGE", payload: e })
									),
										n(a),
										c && i(c),
										o(!1),
										console.log("new messages", a);
								});
						}, []),
						(0, t.useEffect)(() => {
							if (!a) {
								const e = nf.ref("messages"),
									t = e.on("child_added", (e) => {
										const t = e.val(),
											a = e.key;
										if (t.timestamp < s.current) return;
										if ("NEW DAY" === t.content)
											return n([]), void i(a);
										if (r && a <= r) return;
										const o = { key: a, ...t };
										n((e) => [...e, { key: a, ...t }]),
											l({
												type: "ADD_MESSAGE",
												payload: o,
											});
									});
								return () => e.off("child_added", t);
							}
						}, [a, r]),
						{ messages: e }
					);
				},
				af = (e) => {
					let { messages: t } = e;
					console.log("messages", t);
					const n = t[t.length - 1],
						r = null === n || void 0 === n ? void 0 : n.key;
					console.log(n, r);
					const i = t.reduce((e, t) => {
						const n = "OMNI" === t.type ? "KAPS" : t.ticker;
						return e[n] || (e[n] = []), e[n].unshift(t), e;
					}, {});
					return (
						console.log("grouped", i),
						(0, Wn.jsx)("div", {
							className: "container mt-4",
							children: (0, Wn.jsx)("div", {
								className:
									"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",
								children: Object.entries(i).map((e) => {
									let [t, n] = e;
									return (0, Wn.jsx)("div", {
										children: (0, Wn.jsx)(Gn, {
											title:
												"KAPS" === t
													? "KAPS"
													: n[0].helper
													? `${t} (${n[0].helper})`
													: t,
											type:
												"KAPS" === t
													? "KAPS"
													: "STRING",
											alerts: n,
											latestMessageKey: r,
											ticker: t,
										}),
									});
								}),
							}),
						})
					);
				},
				of = () => {
					const { isMuted: e } = Yn(),
						t = Kn();
					return (0, Wn.jsx)("div", {
						children: (0, Wn.jsxs)("div", {
							className: "form-check form-switch",
							children: [
								(0, Wn.jsx)("input", {
									className: "form-check-input pointer",
									type: "checkbox",
									role: "switch",
									id: "flexSwitchCheckChecked",
									checked: !e,
									onChange: () => {
										t({ type: "TOGGLE_MUTE" });
									},
								}),
								(0, Wn.jsx)("label", {
									className:
										"form-check-label d-inline-block",
									htmlFor: "flexSwitchCheckChecked",
									style: { width: "75px", color: "#fff" },
									children: e ? "Muted" : "Unmuted",
								}),
							],
						}),
					});
				};
			const sf = () => {
					const e = (function () {
						const [e, n] = (0, t.useState)(!1);
						return (
							(0, t.useEffect)(() => {
								const e = nf.ref(".info/connected"),
									t = e.on("value", (e) => {
										n(!0 === e.val());
									});
								return () => e.off("value", t);
							}, []),
							e
						);
					})();
					return (0, Wn.jsx)("div", {
						children: (0, Wn.jsx)("a", {
							className: `btn btn-sm btn-outline ${
								e ? "btn-success" : "btn-danger"
							} disabled`,
							children: e ? "Connected" : "Disconnected",
						}),
					});
				},
				lf = () =>
					(0, Wn.jsx)("div", {
						className: "d-none",
						children: "LatestAlertBanner",
					}),
				cf = (e) => {
					let { children: t } = e;
					return (0, Wn.jsx)("div", {
						className:
							"rounded container d-flex justify-content-between p-3 align-items-center",
						style: { backgroundColor: "#333" },
						children: t,
					});
				},
				uf = n.p + "static/media/bell.41d0783ef7220df84266.wav",
				df = (e) => {
					let { shouldPlay: n, setShouldPlay: r } = e;
					const i = (0, t.useRef)(null);
					(0, t.useEffect)(() => {
						n &&
							i.current &&
							(console.log("playing audio"),
							(i.current.loop = !0),
							i.current
								.play()
								.catch((e) =>
									console.warn("Auto-play failed:", e)
								));
					}, [n]);
					return (0, Wn.jsxs)("div", {
						children: [
							(0, Wn.jsx)("audio", {
								ref: i,
								src: uf,
								loop: !0,
								preload: "auto",
							}),
							(0, Wn.jsx)("button", {
								className:
									"btn " + (n ? "btn-primary" : "btn-dark"),
								onClick: n
									? () => {
											i.current &&
												(i.current.pause(),
												(i.current.currentTime = 0)),
												r(!1);
									  }
									: void 0,
								disabled: !n,
								children: n ? "Stop Sound" : "No Alerts",
							}),
						],
					});
				},
				ff = (e) => {
					let { setShouldPlay: t } = e;
					const n = Yn(),
						{ allMessages: r } = Yn(),
						a = { ...n, allMessages: `${n.allMessages.length}` };
					return (0, Wn.jsxs)(Wn.Fragment, {
						children: [
							(0, Wn.jsx)("div", {
								className: "position-absolute left-0 m-3",
								children: (0, Wn.jsx)("button", {
									style: {
										background: "none",
										border: "none",
									},
									type: "button",
									"data-bs-toggle": "offcanvas",
									"data-bs-target": "#offcanvasNavbar",
									"aria-controls": "offcanvasNavbar",
									children: (0, Wn.jsx)(qn, {
										icon: i,
										style: {
											color: "#dce1ea",
											width: "25px",
											height: "25px",
										},
									}),
								}),
							}),
							(0, Wn.jsxs)("div", {
								className: "offcanvas offcanvas-end",
								tabIndex: "-1",
								id: "offcanvasNavbar",
								"aria-labelledby": "offcanvasNavbarDarkLabel",
								style: {
									backgroundColor: "#222",
									color: "#fff",
									width: "300px",
									boxShadow:
										"0 0 20px rgba(255, 255, 255, 0.1)",
								},
								children: [
									(0, Wn.jsxs)("div", {
										className: "offcanvas-header",
										children: [
											(0, Wn.jsx)("h5", {
												id: "offcanvasNavbarDarkLabel",
												className: "text-white",
												children: "Menu",
											}),
											(0, Wn.jsx)("button", {
												type: "button",
												className:
													"btn-close btn-close-white",
												"data-bs-dismiss": "offcanvas",
												"aria-label": "Close",
											}),
										],
									}),
									(0, Wn.jsx)("div", {
										className: "offcanvas-body",
										children: (0, Wn.jsxs)("ul", {
											className: "nav flex-column gap-3",
											children: [
												(0, Wn.jsx)("li", {
													children: (0, Wn.jsx)(
														"button",
														{
															onClick:
																async () => {
																	const e =
																			Date.now(),
																		t =
																			new Date(
																				e
																			).toLocaleString(
																				"en-gb",
																				{
																					hour: "2-digit",
																					minute: "2-digit",
																					day: "2-digit",
																					month: "2-digit",
																					year: "numeric",
																				}
																			);
																	await nf
																		.ref(
																			"messages"
																		)
																		.push({
																			content:
																				"NEW DAY",
																			timestamp:
																				e,
																			formattedTimestamp:
																				t,
																		}),
																		await nf
																			.ref(
																				"status"
																			)
																			.set(
																				{
																					event: "NEW_DAY",
																					timestamp:
																						e,
																				}
																			),
																		console.log(
																			"New day added"
																		);
																},
															className:
																"btn btn-primary w-100",
															children: "New Day",
														}
													),
												}),
												(0, Wn.jsx)("li", {
													children: (0, Wn.jsx)(
														"button",
														{
															onClick: () => {
																const e =
																	Date.now();
																nf
																	.ref(
																		"commands/refresh"
																	)
																	.set({
																		timestamp:
																			e,
																	}),
																	console.log(
																		"Refresh triggered"
																	);
															},
															className:
																"btn btn-primary w-100",
															children: "Refresh",
														}
													),
												}),
												(0, Wn.jsx)("li", {
													children: (0, Wn.jsx)(
														"button",
														{
															onClick: () => {
																t(!0),
																	console.log(
																		"Test alert triggered"
																	);
															},
															className:
																"btn btn-primary w-100",
															children: "Test",
														}
													),
												}),
												(0, Wn.jsx)("hr", {
													className: "text-secondary",
												}),
												(0, Wn.jsx)("h5", {
													id: "offcanvasNavbarDarkLabel",
													className: "text-white",
													children: "Data",
												}),
												(0, Wn.jsx)("li", {
													children: (0, Wn.jsx)(
														"pre",
														{
															style: {
																backgroundColor:
																	"#222",
																color: "#ddd",
																padding: "10px",
																borderRadius:
																	"6px",
																maxHeight:
																	"300px",
																overflowY:
																	"auto",
																fontSize:
																	"12px",
															},
															children:
																JSON.stringify(
																	a,
																	null,
																	2
																),
														}
													),
												}),
												(0, Wn.jsx)("hr", {
													className: "text-secondary",
												}),
												(0, Wn.jsx)("h5", {
													id: "offcanvasNavbarDarkLabel",
													className: "text-white",
													children: "Raw Messages",
												}),
												(0, Wn.jsx)("div", {
													style: {
														maxHeight: "200px",
														overflowY: "auto",
														fontSize: "0.8rem",
														color: "#aaa",
														whiteSpace: "pre-wrap",
													},
													children: r.map((e, t) =>
														(0, Wn.jsxs)(
															"div",
															{
																children: [
																	(0, Wn.jsx)(
																		"code",
																		{
																			children:
																				JSON.stringify(
																					e,
																					null,
																					2
																				),
																		}
																	),
																	(0, Wn.jsx)(
																		"hr",
																		{
																			style: {
																				borderColor:
																					"#444",
																			},
																		}
																	),
																],
															},
															t
														)
													),
												}),
											],
										}),
									}),
								],
							}),
						],
					});
				};
			const hf = function () {
				const { isMuted: e, perCardMute: n } = Yn(),
					[r, i] = (0, t.useState)(!1),
					{ messages: a, isInitialLoad: o } = rf(),
					s = Kn(),
					l = (0, t.useRef)(null);
				return (
					(0, t.useEffect)(() => {
						if (o || 0 === a.length) return;
						const t = a[a.length - 1],
							r = t.ticker || "KAPS";
						if (!l.current)
							return (
								(l.current = t),
								void (
									r in n ||
									s({
										type: "SET_PER_CARD_MUTE",
										payload: { ticker: r, value: !1 },
									})
								)
							);
						if (l.current.timestamp !== t.timestamp) {
							var c;
							r in n ||
								s({
									type: "SET_PER_CARD_MUTE",
									payload: { ticker: r, value: !1 },
								});
							const a = null !== (c = n[r]) && void 0 !== c && c;
							console.log("New message:", t),
								console.log("Ticker:", r),
								console.log("Global muted:", e),
								console.log("Card muted:", a),
								e || a || i(!0),
								(l.current = t);
						}
					}, [a, o, e, n, n]),
					(0, Wn.jsxs)("div", {
						className:
							"position-relative min-vm-100 min-vh-100 p-0 m-0",
						style: { backgroundColor: "#222" },
						children: [
							(0, Wn.jsx)(lf, {}),
							(0, Wn.jsx)(ff, { setShouldPlay: i }),
							(0, Wn.jsxs)(cf, {
								children: [
									(0, Wn.jsx)(sf, {}),
									(0, Wn.jsx)(df, {
										shouldPlay: r,
										setShouldPlay: i,
									}),
									(0, Wn.jsx)(of, {}),
								],
							}),
							(0, Wn.jsx)(af, { messages: a }),
						],
					})
				);
			};
			r.createRoot(document.getElementById("root")).render(
				(0, Wn.jsx)(t.StrictMode, {
					children: (0, Wn.jsx)(Qn, {
						children: (0, Wn.jsx)(hf, {}),
					}),
				})
			);
		})();
})();
//# sourceMappingURL=main.586da52c.js.map
