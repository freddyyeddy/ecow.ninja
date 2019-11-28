(function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            exports: {},
            id: n,
            loaded: false
        };
        e[n].call(a.exports, a, a.exports, r);
        a.loaded = true;
        return a.exports
    }
    r.m = e;
    r.c = t;
    r.p = "";
    return r(0)
})({
    0: function(e, t, r) {
        r(1);
        r(3);
        e.exports = r(948)
    },
    1: function(e, t, r) {
        e.exports = r(2)(587)
    },
    2: function(e, t) {
        e.exports = vendor_84f4b31cdc756748de32
    },
    3: function(e, t, r) {
        e.exports = r(2)(845)
    },
    5: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.start = q;
        var n = r(6);
        var a = x(n);
        var o = r(7);
        var i = x(o);
        var u = r(8);
        var s = x(u);
        var l = r(9);
        var c = x(l);
        var f = r(10);
        var d = x(f);
        var p = r(11);
        var v = x(p);
        var m = r(22);
        var h = r(24);
        var y = r(28);
        var g = x(y);
        var b = r(29);
        var _ = x(b);
        var w = r(30);
        var P = x(w);
        var C = r(31);
        var k = x(C);
        var T = r(35);
        var E = r(44);
        var O = x(E);
        var N = r(45);
        var S = x(N);
        var M = r(40);
        var j = x(M);
        var D = r(48);
        var R = x(D);

        function x(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        a.default.use((0, i.default)(window.Promise));
        (0, R.default)();

        function I(e) {
            var t = "pv8-app-version";
            if (d.default.enabled) {
                var r = e.appVersion;
                var n = d.default.get(t);
                if (r !== n) {
                    d.default.clear();
                    d.default.set(t, r)
                }
            }
        }

        function q(e) {
            (0, h.handleGlobalErrors)(window);
            I(window);
            window.focus();
            window.Perf = v.default;
            if (!console.table) {
                console.table = console.log
            }(0, c.default)(document).ajaxError(function(e, t) {
                if (t.status === 401) {
                    var r = document.getElementsByTagName("base")[0].href;
                    var n = window.location.href.substr(window.location.origin.length);
                    window.location = "" + r + window.pathToRoot + "login?return_url=" + n
                }
                if (t.status === 412) {
                    _.default.render()
                }
                if (t.status === 405) {
                    P.default.render()
                }
            });
            var t = g.default.getSetting("defaultHttpHeaders");
            if (t) {
                c.default.ajaxSetup({
                    headers: t
                })
            }
            s.default.setKeyTransformer(function(e) {
                return e.toLowerCase()
            });
            var r = [];
            r.push((0, m.getResourcesFor)("en").then(function(e) {
                s.default.registerTranslations("en", {
                    permitvision: e
                });
                s.default.setFallbackLocale("en")
            }));
            var n = localStorage.getItem("language");
            j.default.locale(n);
            if (n && n !== "en") {
                r.push((0, m.getResourcesFor)(n).then(function(e) {
                    s.default.registerTranslations(n, {
                        permitvision: e
                    });
                    s.default.setLocale(n)
                }))
            }
            r.push(S.default.Queries.getCurrentUser().then(function(e) {
                O.default.setCurrentUser(e);
                k.default.setCurrentUser(e)
            }));
            r.push((0, T.getAvailableSites)().then(function(e) {
                return k.default.setSites(e)
            }));
            Promise.all(r).then(function() {
                try {
                    e();
                    (0, c.default)("#app-preloader-styles, .appPreloaderContainer").remove()
                } catch (e) {
                    (0, h.addGlobalError)(e, true)
                }
            })
        }
    },
    6: function(e, t, r) {
        e.exports = r(2)(1203)
    },
    7: function(e, t, r) {
        e.exports = r(2)(1200)
    },
    8: function(e, t, r) {
        e.exports = r(2)(822)
    },
    9: function(e, t) {
        e.exports = jQuery
    },
    10: function(e, t, r) {
        var n, a, o;
        (function(r) {
            "use strict";
            (function(r, i) {
                if (true) {
                    !(a = [], n = i, o = typeof n === "function" ? n.apply(t, a) : n, o !== undefined && (e.exports = o))
                } else if (typeof t === "object") {
                    e.exports = i()
                } else {
                    r.store = i()
                }
            })(this, function() {
                var e = {},
                    t = typeof window != "undefined" ? window : r,
                    n = t.document,
                    a = "localStorage",
                    o = "script",
                    i;
                e.disabled = false;
                e.version = "1.3.20";
                e.set = function(e, t) {};
                e.get = function(e, t) {};
                e.has = function(t) {
                    return e.get(t) !== undefined
                };
                e.remove = function(e) {};
                e.clear = function() {};
                e.transact = function(t, r, n) {
                    if (n == null) {
                        n = r;
                        r = null
                    }
                    if (r == null) {
                        r = {}
                    }
                    var a = e.get(t, r);
                    n(a);
                    e.set(t, a)
                };
                e.getAll = function() {};
                e.forEach = function() {};
                e.serialize = function(e) {
                    return JSON.stringify(e)
                };
                e.deserialize = function(e) {
                    if (typeof e != "string") {
                        return undefined
                    }
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e || undefined
                    }
                };

                function u() {
                    try {
                        return a in t && t[a]
                    } catch (e) {
                        return false
                    }
                }
                if (u()) {
                    i = t[a];
                    e.set = function(t, r) {
                        if (r === undefined) {
                            return e.remove(t)
                        }
                        i.setItem(t, e.serialize(r));
                        return r
                    };
                    e.get = function(t, r) {
                        var n = e.deserialize(i.getItem(t));
                        return n === undefined ? r : n
                    };
                    e.remove = function(e) {
                        i.removeItem(e)
                    };
                    e.clear = function() {
                        i.clear()
                    };
                    e.getAll = function() {
                        var t = {};
                        e.forEach(function(e, r) {
                            t[e] = r
                        });
                        return t
                    };
                    e.forEach = function(t) {
                        for (var r = 0; r < i.length; r++) {
                            var n = i.key(r);
                            t(n, e.get(n))
                        }
                    }
                } else if (n && n.documentElement.addBehavior) {
                    var s, l;
                    try {
                        l = new ActiveXObject("htmlfile");
                        l.open();
                        l.write("<" + o + ">document.w=window</" + o + '><iframe src="/favicon.ico"></iframe>');
                        l.close();
                        s = l.w.frames[0].document;
                        i = s.createElement("div")
                    } catch (e) {
                        i = n.createElement("div");
                        s = n.body
                    }
                    var c = function(t) {
                        return function() {
                            var r = Array.prototype.slice.call(arguments, 0);
                            r.unshift(i);
                            s.appendChild(i);
                            i.addBehavior("#default#userData");
                            i.load(a);
                            var n = t.apply(e, r);
                            s.removeChild(i);
                            return n
                        }
                    };
                    var f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
                    var d = function(e) {
                        return e.replace(/^d/, "___$&").replace(f, "___")
                    };
                    e.set = c(function(t, r, n) {
                        r = d(r);
                        if (n === undefined) {
                            return e.remove(r)
                        }
                        t.setAttribute(r, e.serialize(n));
                        t.save(a);
                        return n
                    });
                    e.get = c(function(t, r, n) {
                        r = d(r);
                        var a = e.deserialize(t.getAttribute(r));
                        return a === undefined ? n : a
                    });
                    e.remove = c(function(e, t) {
                        t = d(t);
                        e.removeAttribute(t);
                        e.save(a)
                    });
                    e.clear = c(function(e) {
                        var t = e.XMLDocument.documentElement.attributes;
                        e.load(a);
                        for (var r = t.length - 1; r >= 0; r--) {
                            e.removeAttribute(t[r].name)
                        }
                        e.save(a)
                    });
                    e.getAll = function(t) {
                        var r = {};
                        e.forEach(function(e, t) {
                            r[e] = t
                        });
                        return r
                    };
                    e.forEach = c(function(t, r) {
                        var n = t.XMLDocument.documentElement.attributes;
                        for (var a = 0, o; o = n[a]; ++a) {
                            r(o.name, e.deserialize(t.getAttribute(o.name)))
                        }
                    })
                }
                try {
                    var p = "__storejs__";
                    e.set(p, p);
                    if (e.get(p) != p) {
                        e.disabled = true
                    }
                    e.remove(p)
                } catch (t) {
                    e.disabled = true
                }
                e.enabled = !e.disabled;
                return e
            })
        }).call(t, function() {
            return this
        }())
    },
    11: function(e, t, r) {
        e.exports = r(12)
    },
    12: function(e, t, r) {
        "use strict";
        var n = r(13);
        var a = n || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var o = r(14);
        var i = r(16);
        var u = false;

        function s(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            var r = Math.pow(10, t);
            return Math.floor(e * r) / r
        }

        function l(e) {
            console.table(e)
        }

        function c() {
            if (u) {
                return
            }
            u = true;
            if (typeof console !== "undefined") {
                console.error("ReactPerf is not supported in the production builds of React. " + "To collect measurements, please use the development build of React instead.")
            }
        }

        function f() {
            if (true) {
                c();
                return []
            }
            return o.getFlushHistory()
        }

        function d() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f();
            if (true) {
                c();
                return []
            }
            var t = {};
            var r = {};

            function n(e, n, a, o) {
                var i = e[n].displayName;
                var u = i;
                var s = t[u];
                if (!s) {
                    r[u] = {};
                    s = t[u] = {
                        key: u,
                        instanceCount: 0,
                        counts: {},
                        durations: {},
                        totalDuration: 0
                    }
                }
                if (!s.durations[a]) {
                    s.durations[a] = 0
                }
                if (!s.counts[a]) {
                    s.counts[a] = 0
                }
                r[u][n] = true;
                o(s)
            }
            e.forEach(function(e) {
                var t = e.measurements,
                    r = e.treeSnapshot;
                t.forEach(function(e) {
                    var t = e.duration,
                        a = e.instanceID,
                        o = e.timerType;
                    n(r, a, o, function(e) {
                        e.totalDuration += t;
                        e.durations[o] += t;
                        e.counts[o]++
                    })
                })
            });
            return Object.keys(t).map(function(e) {
                return a({}, t[e], {
                    instanceCount: Object.keys(r[e]).length
                })
            }).sort(function(e, t) {
                return t.totalDuration - e.totalDuration
            })
        }

        function p() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f();
            if (true) {
                c();
                return []
            }
            var t = {};
            var r = {};

            function n(e, n, a) {
                var o = e[n],
                    i = o.displayName,
                    u = o.ownerID;
                var s = e[u];
                var l = (s ? s.displayName + " > " : "") + i;
                var c = t[l];
                if (!c) {
                    r[l] = {};
                    c = t[l] = {
                        key: l,
                        instanceCount: 0,
                        inclusiveRenderDuration: 0,
                        renderCount: 0
                    }
                }
                r[l][n] = true;
                a(c)
            }
            var o = {};
            e.forEach(function(e) {
                var t = e.measurements;
                t.forEach(function(e) {
                    var t = e.instanceID,
                        r = e.timerType;
                    if (r !== "render") {
                        return
                    }
                    o[t] = true
                })
            });
            e.forEach(function(e) {
                var t = e.measurements,
                    r = e.treeSnapshot;
                t.forEach(function(e) {
                    var t = e.duration,
                        a = e.instanceID,
                        i = e.timerType;
                    if (i !== "render") {
                        return
                    }
                    n(r, a, function(e) {
                        e.renderCount++
                    });
                    var u = a;
                    while (u) {
                        if (o[u]) {
                            n(r, u, function(e) {
                                e.inclusiveRenderDuration += t
                            })
                        }
                        u = r[u].parentID
                    }
                })
            });
            return Object.keys(t).map(function(e) {
                return a({}, t[e], {
                    instanceCount: Object.keys(r[e]).length
                })
            }).sort(function(e, t) {
                return t.inclusiveRenderDuration - e.inclusiveRenderDuration
            })
        }

        function v() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f();
            if (true) {
                c();
                return []
            }
            var t = {};
            var r = {};

            function n(e, n, a) {
                var o = e[n],
                    i = o.displayName,
                    u = o.ownerID;
                var s = e[u];
                var l = (s ? s.displayName + " > " : "") + i;
                var c = t[l];
                if (!c) {
                    r[l] = {};
                    c = t[l] = {
                        key: l,
                        instanceCount: 0,
                        inclusiveRenderDuration: 0,
                        renderCount: 0
                    }
                }
                r[l][n] = true;
                a(c)
            }
            e.forEach(function(e) {
                var t = e.measurements,
                    r = e.treeSnapshot,
                    a = e.operations;
                var o = {};
                a.forEach(function(e) {
                    var t = e.instanceID;
                    var n = t;
                    while (n) {
                        o[n] = true;
                        n = r[n].parentID
                    }
                });
                var i = {};
                t.forEach(function(e) {
                    var t = e.instanceID,
                        r = e.timerType;
                    if (r !== "render") {
                        return
                    }
                    i[t] = true
                });
                t.forEach(function(e) {
                    var t = e.duration,
                        a = e.instanceID,
                        u = e.timerType;
                    if (u !== "render") {
                        return
                    }
                    var s = r[a].updateCount;
                    if (o[a] || s === 0) {
                        return
                    }
                    n(r, a, function(e) {
                        e.renderCount++
                    });
                    var l = a;
                    while (l) {
                        var c = i[l] && !o[l];
                        if (c) {
                            n(r, l, function(e) {
                                e.inclusiveRenderDuration += t
                            })
                        }
                        l = r[l].parentID
                    }
                })
            });
            return Object.keys(t).map(function(e) {
                return a({}, t[e], {
                    instanceCount: Object.keys(r[e]).length
                })
            }).sort(function(e, t) {
                return t.inclusiveRenderDuration - e.inclusiveRenderDuration
            })
        }

        function m() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f();
            if (true) {
                c();
                return []
            }
            var t = [];
            e.forEach(function(e, r) {
                var n = e.operations,
                    a = e.treeSnapshot;
                n.forEach(function(e) {
                    var n = e.instanceID,
                        o = e.type,
                        i = e.payload;
                    var u = a[n],
                        s = u.displayName,
                        l = u.ownerID;
                    var c = a[l];
                    var f = (c ? c.displayName + " > " : "") + s;
                    t.push({
                        flushIndex: r,
                        instanceID: n,
                        key: f,
                        type: o,
                        ownerID: l,
                        payload: i
                    })
                })
            });
            return t
        }

        function h(e) {
            if (true) {
                c();
                return
            }
            var t = d(e);
            var r = t.map(function(e) {
                var t = e.key,
                    r = e.instanceCount,
                    n = e.totalDuration;
                var a = e.counts.render || 0;
                var o = e.durations.render || 0;
                return {
                    Component: t,
                    "Total time (ms)": s(n),
                    "Instance count": r,
                    "Total render time (ms)": s(o),
                    "Average render time (ms)": a ? s(o / a) : undefined,
                    "Render count": a,
                    "Total lifecycle time (ms)": s(n - o)
                }
            });
            l(r)
        }

        function y(e) {
            if (true) {
                c();
                return
            }
            var t = p(e);
            var r = t.map(function(e) {
                var t = e.key,
                    r = e.instanceCount,
                    n = e.inclusiveRenderDuration,
                    a = e.renderCount;
                return {
                    "Owner > Component": t,
                    "Inclusive render time (ms)": s(n),
                    "Instance count": r,
                    "Render count": a
                }
            });
            l(r)
        }

        function g(e) {
            if (true) {
                c();
                return
            }
            var t = v(e);
            var r = t.map(function(e) {
                var t = e.key,
                    r = e.instanceCount,
                    n = e.inclusiveRenderDuration,
                    a = e.renderCount;
                return {
                    "Owner > Component": t,
                    "Inclusive wasted time (ms)": s(n),
                    "Instance count": r,
                    "Render count": a
                }
            });
            l(r)
        }

        function b(e) {
            if (true) {
                c();
                return
            }
            var t = m(e);
            var r = t.map(function(e) {
                return {
                    "Owner > Node": e.key,
                    Operation: e.type,
                    Payload: typeof e.payload === "object" ? JSON.stringify(e.payload) : e.payload,
                    "Flush index": e.flushIndex,
                    "Owner Component ID": e.ownerID,
                    "DOM Component ID": e.instanceID
                }
            });
            l(r)
        }
        var _ = false;

        function w(e) {
            false ? i(_, "`ReactPerf.printDOM(...)` is deprecated. Use " + "`ReactPerf.printOperations(...)` instead.") : void 0;
            _ = true;
            return b(e)
        }
        var P = false;

        function C(e) {
            false ? i(P, "`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use " + "`ReactPerf.getWasted(...)` instead.") : void 0;
            P = true;
            return v(e)
        }

        function k() {
            if (true) {
                c();
                return
            }
            o.beginProfiling()
        }

        function T() {
            if (true) {
                c();
                return
            }
            o.endProfiling()
        }

        function E() {
            if (true) {
                c();
                return false
            }
            return o.isProfiling()
        }
        var O = {
            getLastMeasurements: f,
            getExclusive: d,
            getInclusive: p,
            getWasted: v,
            getOperations: m,
            printExclusive: h,
            printInclusive: y,
            printWasted: g,
            printOperations: b,
            start: k,
            stop: T,
            isRunning: E,
            printDOM: w,
            getMeasurementsSummaryMap: C
        };
        e.exports = O
    },
    13: function(e, t, r) {
        e.exports = r(2)(21)
    },
    14: function(e, t, r) {
        "use strict";
        var n = r(15);
        var a = r(17);
        var o = r(18);
        var i = r(19);
        var u = r(20);
        var s = r(16);
        var l = [];
        var c = {};

        function f(e, t, r, n, a, o, i, u) {
            try {
                t.call(r, n, a, o, i, u)
            } catch (t) {
                false ? s(c[e], "Exception thrown by hook while handling %s: %s", e, t + "\n" + t.stack) : void 0;
                c[e] = true
            }
        }

        function d(e, t, r, n, a, o) {
            for (var i = 0; i < l.length; i++) {
                var u = l[i];
                var s = u[e];
                if (s) {
                    f(e, s, u, t, r, n, a, o)
                }
            }
        }
        var p = false;
        var v = [];
        var m = [];
        var h = 0;
        var y = [];
        var g = 0;
        var b = null;
        var _ = 0;
        var w = 0;
        var P = null;
        var C = false;

        function k() {
            o.purgeUnmountedComponents();
            a.clearHistory()
        }

        function T(e) {
            return e.reduce(function(e, t) {
                var r = o.getOwnerID(t);
                var n = o.getParentID(t);
                e[t] = {
                    displayName: o.getDisplayName(t),
                    text: o.getText(t),
                    updateCount: o.getUpdateCount(t),
                    childIDs: o.getChildIDs(t),
                    ownerID: r || n && o.getOwnerID(n) || 0,
                    parentID: n
                };
                return e
            }, {})
        }

        function E() {
            var e = g;
            var t = y;
            var r = a.getHistory();
            if (h === 0) {
                g = 0;
                y = [];
                k();
                return
            }
            if (t.length || r.length) {
                var n = o.getRegisteredIDs();
                v.push({
                    duration: u() - e,
                    measurements: t || [],
                    operations: r || [],
                    treeSnapshot: T(n)
                })
            }
            k();
            g = u();
            y = []
        }

        function O(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (t && e === 0) {
                return
            }
            if (!e) {
                false ? s(false, "ReactDebugTool: debugID may not be empty.") : void 0
            }
        }

        function N(e, t) {
            if (h === 0) {
                return
            }
            if (P && !C) {
                false ? s(false, "There is an internal error in the React performance measurement code. " + "Did not expect %s timer to start while %s timer is still in " + "progress for %s instance.", t, P || "no", e === b ? "the same" : "another") : void 0;
                C = true
            }
            _ = u();
            w = 0;
            b = e;
            P = t
        }

        function S(e, t) {
            if (h === 0) {
                return
            }
            if (P !== t && !C) {
                false ? s(false, "There is an internal error in the React performance measurement code. " + "We did not expect %s timer to stop while %s timer is still in " + "progress for %s instance. Please report this as a bug in React.", t, P || "no", e === b ? "the same" : "another") : void 0;
                C = true
            }
            if (p) {
                y.push({
                    timerType: t,
                    instanceID: e,
                    duration: u() - _ - w
                })
            }
            _ = 0;
            w = 0;
            b = null;
            P = null
        }

        function M() {
            var e = {
                startTime: _,
                nestedFlushStartTime: u(),
                debugID: b,
                timerType: P
            };
            m.push(e);
            _ = 0;
            w = 0;
            b = null;
            P = null
        }

        function j() {
            var e = m.pop(),
                t = e.startTime,
                r = e.nestedFlushStartTime,
                n = e.debugID,
                a = e.timerType;
            var o = u() - r;
            _ = t;
            w += o;
            b = n;
            P = a
        }
        var D = 0;
        var R = typeof performance !== "undefined" && typeof performance.mark === "function" && typeof performance.clearMarks === "function" && typeof performance.measure === "function" && typeof performance.clearMeasures === "function";

        function x(e) {
            if (!p || !R) {
                return false
            }
            var t = o.getElement(e);
            if (t == null || typeof t !== "object") {
                return false
            }
            var r = typeof t.type === "string";
            if (r) {
                return false
            }
            return true
        }

        function I(e, t) {
            if (!x(e)) {
                return
            }
            var r = e + "::" + t;
            D = u();
            performance.mark(r)
        }

        function q(e, t) {
            if (!x(e)) {
                return
            }
            var r = e + "::" + t;
            var n = o.getDisplayName(e) || "Unknown";
            var a = u();
            if (a - D > .1) {
                var i = n + " [" + t + "]";
                performance.measure(i, r)
            }
            performance.clearMarks(r);
            performance.clearMeasures(i)
        }
        var L = {
            addHook: function(e) {
                l.push(e)
            },
            removeHook: function(e) {
                for (var t = 0; t < l.length; t++) {
                    if (l[t] === e) {
                        l.splice(t, 1);
                        t--
                    }
                }
            },
            isProfiling: function() {
                return p
            },
            beginProfiling: function() {
                if (p) {
                    return
                }
                p = true;
                v.length = 0;
                E();
                L.addHook(a)
            },
            endProfiling: function() {
                if (!p) {
                    return
                }
                p = false;
                E();
                L.removeHook(a)
            },
            getFlushHistory: function() {
                return v
            },
            onBeginFlush: function() {
                h++;
                E();
                M();
                d("onBeginFlush")
            },
            onEndFlush: function() {
                E();
                h--;
                j();
                d("onEndFlush")
            },
            onBeginLifeCycleTimer: function(e, t) {
                O(e);
                d("onBeginLifeCycleTimer", e, t);
                I(e, t);
                N(e, t)
            },
            onEndLifeCycleTimer: function(e, t) {
                O(e);
                S(e, t);
                q(e, t);
                d("onEndLifeCycleTimer", e, t)
            },
            onBeginProcessingChildContext: function() {
                d("onBeginProcessingChildContext")
            },
            onEndProcessingChildContext: function() {
                d("onEndProcessingChildContext")
            },
            onHostOperation: function(e) {
                O(e.instanceID);
                d("onHostOperation", e)
            },
            onSetState: function() {
                d("onSetState")
            },
            onSetChildren: function(e, t) {
                O(e);
                t.forEach(O);
                d("onSetChildren", e, t)
            },
            onBeforeMountComponent: function(e, t, r) {
                O(e);
                O(r, true);
                d("onBeforeMountComponent", e, t, r);
                I(e, "mount")
            },
            onMountComponent: function(e) {
                O(e);
                q(e, "mount");
                d("onMountComponent", e)
            },
            onBeforeUpdateComponent: function(e, t) {
                O(e);
                d("onBeforeUpdateComponent", e, t);
                I(e, "update")
            },
            onUpdateComponent: function(e) {
                O(e);
                q(e, "update");
                d("onUpdateComponent", e)
            },
            onBeforeUnmountComponent: function(e) {
                O(e);
                d("onBeforeUnmountComponent", e);
                I(e, "unmount")
            },
            onUnmountComponent: function(e) {
                O(e);
                q(e, "unmount");
                d("onUnmountComponent", e)
            },
            onTestEvent: function() {
                d("onTestEvent")
            }
        };
        L.addDevtool = L.addHook;
        L.removeDevtool = L.removeHook;
        L.addHook(n);
        L.addHook(o);
        var A = i.canUseDOM && window.location.href || "";
        if (/[?&]react_perf\b/.test(A)) {
            L.beginProfiling()
        }
        e.exports = L
    },
    15: function(e, t, r) {
        "use strict";
        var n = r(16);
        if (false) {
            var a = false;
            var o = function() {
                process.env.NODE_ENV !== "production" ? n(!a, "setState(...): Cannot call setState() inside getChildContext()") : void 0
            }
        }
        var i = {
            onBeginProcessingChildContext: function() {
                a = true
            },
            onEndProcessingChildContext: function() {
                a = false
            },
            onSetState: function() {
                o()
            }
        };
        e.exports = i
    },
    16: function(e, t, r) {
        e.exports = r(2)(13)
    },
    17: function(e, t) {
        "use strict";
        var r = [];
        var n = {
            onHostOperation: function(e) {
                r.push(e)
            },
            clearHistory: function() {
                if (n._preventClearing) {
                    return
                }
                r = []
            },
            getHistory: function() {
                return r
            }
        };
        e.exports = n
    },
    18: function(e, t, r) {
        e.exports = r(2)(294)
    },
    19: function(e, t, r) {
        e.exports = r(2)(35)
    },
    20: function(e, t, r) {
        "use strict";
        var n = r(21);
        var a;
        if (n.now) {
            a = function e() {
                return n.now()
            }
        } else {
            a = function e() {
                return Date.now()
            }
        }
        e.exports = a
    },
    21: function(e, t, r) {
        "use strict";
        var n = r(19);
        var a;
        if (n.canUseDOM) {
            a = window.performance || window.msPerformance || window.webkitPerformance
        }
        e.exports = a || {}
    },
    22: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getResourcesFor = a;
        var n = r(23);

        function a(e) {
            return (0, n.query)("api/resources/" + e)
        }
    },
    23: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.downloadFile = y;
        t.post = g;
        t.query = b;
        t.uploadBinary = _;
        t.uploadBinaryWithStream = w;
        var o = r(9);
        var i = p(o);
        var u = r(24);
        var s = r(25);
        var l = p(s);
        var c = r(26);
        var f = r(27);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var v = [408, 429, 502, 503, 504];

        function m(e) {
            return (0, d.default)({
                retryInterval: [50, 100, 200],
                createRequest: function t() {
                    return (0, c.getJSON)(e).then(function(e) {
                        var t = e.data,
                            r = e.xhr;
                        if (t && (typeof t === "undefined" ? "undefined" : a(t)) === "object") {
                            t.__etag = r.getResponseHeader("etag")
                        }
                        return t
                    }, function(e) {
                        return Promise.reject({
                            xhr: e,
                            retry: v.indexOf(e.status) !== -1
                        })
                    })
                }
            })
        }

        function h(e) {
            return (0, d.default)({
                retryInterval: [50, 100, 300, 500, 1e3],
                createRequest: function t() {
                    return (0, c.getJSON)(e, {
                        ifModified: true
                    }).then(function(e) {
                        var t = e.xhr,
                            r = e.status,
                            n = e.data;
                        if (r === "notmodified") {
                            return Promise.reject({
                                xhr: t,
                                retry: true
                            })
                        }
                        if (n && (typeof n === "undefined" ? "undefined" : a(n)) === "object") {
                            n.__etag = t.getResponseHeader("etag")
                        }
                        return n
                    }, function(e) {
                        return Promise.reject({
                            xhr: e,
                            retry: v.indexOf(e.status) !== -1
                        })
                    })
                }
            })
        }

        function y(e, t, r, n, a, o) {
            var i = (new Error).stack;
            var s = new XMLHttpRequest;
            s.open(r, e);
            if (o) {
                s.setRequestHeader("Accept", o)
            }
            if (a) {
                s.setRequestHeader("content-type", a)
            }
            s.responseType = "blob";
            s.onload = function() {
                if (this.status >= 400) {
                    var t = new l.default(e, s, "post", i);
                    (0, u.addGlobalError)(t)
                } else if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(s.response, n)
                } else {
                    var r = URL.createObjectURL(s.response);
                    window.location.href = r
                }
            };
            s.send(t)
        }

        function g(e, t, r) {
            r = n({
                rejectAllRequestErrors: false
            }, r);
            if (e.indexOf("#") !== -1) {
                console.error("Requesting a resource with a non encoded URL:", e)
            }
            var o = (new Error).stack;
            return new Promise(function(n, i) {
                (0, d.default)({
                    retryInterval: [50, 100, 200],
                    createRequest: function r() {
                        return (0, c.ajax)({
                            method: "POST",
                            url: e,
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            dataType: "json"
                        }, function(e) {
                            return Promise.reject({
                                xhr: e,
                                retry: v.indexOf(e.status) !== -1
                            })
                        })
                    }
                }).then(function(e) {
                    var t = e.data,
                        r = e.xhr;
                    if (t && (typeof t === "undefined" ? "undefined" : a(t)) === "object") {
                        t.__etag = r.getResponseHeader("etag")
                    }
                    n(t)
                }).catch(function(t) {
                    var n = new l.default(e, t, "post", o);
                    if (!r.rejectAllRequestErrors && (!t || t.status >= 500)) {
                        (0, u.addGlobalError)(n)
                    } else {
                        i(n)
                    }
                })
            })
        }

        function b(e, t) {
            t = n({
                waitForNewVersion: false,
                rejectAllRequestErrors: false
            }, t);
            if (e.indexOf("#") !== -1) {
                console.error("Requesting a resource with a non encoded URL:", e)
            }
            var r = t.waitForNewVersion ? h(e) : m(e);
            var a = (new Error).stack;
            return new Promise(function(n, o) {
                r.then(n).catch(function(r) {
                    var n = new l.default(e, r, "json", a);
                    if (!t.rejectAllRequestErrors && (!r || r.status >= 500)) {
                        (0, u.addGlobalError)(n)
                    } else {
                        o(n)
                    }
                })
            })
        }

        function _(e, t, r, n) {
            r = r || "api/blobs";
            var a = new FormData;
            a.append(e, t);
            if (n) {
                a.append("metaData", JSON.stringify(n))
            }
            return i.default.ajax({
                url: r,
                type: "POST",
                data: a,
                async: true,
                cache: false,
                processData: false,
                contentType: false
            })
        }

        function w(e, t, r, n) {
            var a = new FormData;
            a.append("file", t);
            return (0, c.ajax)({
                method: "POST",
                url: r,
                data: a,
                async: true,
                cache: false,
                processData: false,
                contentType: false,
                xhrFields: {
                    onprogress: n
                }
            })
        }
        t.default = {
            downloadFile: y,
            post: g,
            query: b,
            uploadBinary: _,
            uploadBinaryWithStream: w
        }
    },
    24: function(e, t, r) {
        e.exports = r(2)(302)
    },
    25: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });

        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function n(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function a(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var o = function(e) {
            a(t, e);

            function t(e) {
                var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    o = a.status,
                    i = o === undefined ? "" : o,
                    u = a.statusText,
                    s = u === undefined ? "" : u;
                var l = arguments[2];
                var c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                r(this, t);
                var f = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, ""));
                if (c) {
                    f.stack = c
                }
                f.message = i + " '" + s + "' on '" + e + "' type " + l;
                f.name = f.constructor.name;
                f.status = i;
                f.url = e;
                f.type = l;
                return f
            }
            return t
        }(Error);
        t.default = o
    },
    26: function(e, t, r) {
        e.exports = r(2)(586)
    },
    27: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.default = function(e) {
            var t = e.retryInterval,
                r = e.createRequest;
            var n = t;
            return new Promise(function(e, t) {
                function a() {
                    var o = r();
                    o.then(e, function(e) {
                        var r = e.xhr,
                            o = e.retry;
                        if (!n.length || !o) {
                            t(r);
                            return
                        }
                        setTimeout(a, n.shift())
                    })
                }
                a()
            })
        }
    },
    28: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = {
            loginDomains: function e() {
                return window.PV.settings.loginDomains || []
            },
            deploymentCode: function e() {
                return window.PV.settings.deploymentCode || ""
            },
            deploymentDescription: function e() {
                return window.PV.settings.deploymentDescription || ""
            },
            getSetting: function e(t) {
                return window.PV.settings[t] || ""
            },
            getPathToRoot: function e() {
                return window.pathToRoot
            }
        };
        t.default = r
    },
    29: function(e, t) {
        "use strict";
        var r = function(e) {
            var t = false;
            var r = {};
            var n = e;

            function a(e) {
                if (e) {
                    n = e
                }
                if (!t) {
                    var r = i();
                    document.body.appendChild(r);
                    o();
                    t = true
                }
            }

            function o() {
                var e = r;
                e.container = document.getElementById("outdatedVersionHandler");
                e.reloadBtn = document.getElementById("error-alert-reload");
                e.reloadBtn.addEventListener("click", u)
            }

            function i() {
                var e = '\n            <div class="alert alert-danger error-alert">\n                <span class="glyphicon glyphicon-exclamation-sign"></span>\n                <div class="alert-content">\n                    <strong>New version is here!</strong>\n                    <p>This version is out of date. Please refresh your browser to use the new version.</p>\n                    <p>Clicking <strong>reload</strong> will refresh the page.</p>\n                </div>\n                <div class="error-alert-buttons">\n                    <button id="error-alert-reload" type="button" class="btn pull-right">Reload</button>\n                </div>\n            </div>';
                var t = document.createElement("div");
                t.id = "outdatedVersionHandler";
                t.className = "error-alert-container";
                t.innerHTML = e;
                return t
            }

            function u() {
                n.location.reload()
            }

            function s() {
                var e = r;
                e.reloadBtn.removeEventListener("click", u);
                document.body.removeChild(e.container);
                r = {};
                t = false
            }
            return {
                render: a,
                reset: s
            }
        }(window, undefined);
        e.exports = r
    },
    30: function(e, t) {
        "use strict";
        var r = function(e) {
            var t = false;
            var r = {};
            var n = e;

            function a(e) {
                if (e) {
                    n = e
                }
                if (!t) {
                    var r = i();
                    document.body.appendChild(r);
                    o();
                    t = true
                }
            }

            function o() {
                var e = r;
                e.continueBtn = document.getElementById("error-alert-continue");
                e.container = document.getElementById("serverInReadOnlyHandler");
                e.continueBtn.addEventListener("click", u)
            }

            function i() {
                var e = '\n            <div class="alert alert-danger error-alert">\n                <span class="glyphicon glyphicon-exclamation-sign"></span>\n                <div class="alert-content">\n                    <strong>Server is in <u>read-only</u> mode</strong>\n                    <p>At this moment the server is in read-only mode and cannot accept any changes</p>\n                </div>\n                <div class="error-alert-buttons">\n                    <button id="error-alert-continue" type="button" class="btn btn-error-alert-continue pull-right">Continue</button>\n                </div>\n            </div>';
                var t = document.createElement("div");
                t.id = "serverInReadOnlyHandler";
                t.className = "error-alert-container";
                t.innerHTML = e;
                return t
            }

            function u() {
                var e = r;
                e.continueBtn.removeEventListener("click", u);
                document.body.removeChild(e.container);
                r = {};
                t = false
            }
            return {
                render: a,
                reset: u
            }
        }(window, undefined);
        e.exports = r
    },
    31: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(6);
        var a = f(n);
        var o = r(32);
        var i = f(o);
        var u = r(33);
        var s = f(u);
        var l = r(34);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = "selected-sites";
        var p = a.default.createStore({
            listenables: [s.default],
            _defaultSiteCode: null,
            _user: null,
            setSites: function e(t) {
                this._state.sites = t;
                this._updateStore()
            },
            init: function e() {
                this._state = {
                    sites: []
                }
            },
            _storageKey: function e() {
                if (this._user) {
                    return "pv8-" + this._user.userName + "-" + d
                }
                return "pv8-" + d
            },
            _saveSelectedSiteCodes: function e() {
                var t = this._state.sites.filter(function(e) {
                    return e.selected
                }).map(function(e) {
                    return e.code
                });
                try {
                    c.default.setValue(d, t, this._user);
                    sessionStorage.setItem(this._storageKey(), JSON.stringify(t))
                } catch (e) {
                    console.warn(e)
                }
            },
            getInitialState: function e() {
                return this._state.sites
            },
            getSelected: function e() {
                return this._state.sites.filter(function(e) {
                    return e.selected
                })
            },
            findByCode: function e(t) {
                return i.default.find(this._state.sites, function(e) {
                    return e.code === t
                })
            },
            findByName: function e(t) {
                return i.default.find(this._state.sites, function(e) {
                    return e.name.toLowerCase() === t.toLowerCase()
                })
            },
            reset: function e() {
                this._state.sites = [];
                try {
                    c.default.remove("selected-sites", this._user);
                    sessionStorage.removeItem(this._storageKey())
                } catch (e) {
                    console.warn(e)
                }
            },
            _updateStore: function e() {
                var t = this;
                if (this._user && this._state.sites.length) {
                    var r = void 0;
                    try {
                        r = JSON.parse(sessionStorage.getItem(this._storageKey()))
                    } catch (e) {
                        console.warn(e)
                    }
                    if (!r) {
                        r = c.default.getValue(d, [], this._user)
                    }
                    var n = r.filter(function(e) {
                        return t._state.sites.some(function(t) {
                            return t.code === e
                        })
                    });
                    if (!n.length && this._defaultSiteCode) {
                        n = [this._defaultSiteCode]
                    }
                    this._state.sites.forEach(function(e) {
                        e.selected = !n.length || n.indexOf(e.code) !== -1
                    })
                }
            },
            setCurrentUser: function e(t) {
                this._user = t;
                this._defaultSiteCode = t.defaultSiteCode;
                this._updateStore()
            },
            onToggleAllSitesSelected: function e() {
                if (i.default.every(this._state.sites, function(e) {
                        return e.selected
                    })) {
                    this._state.sites.forEach(function(e) {
                        e.selected = false
                    })
                } else {
                    this._state.sites.forEach(function(e) {
                        e.selected = true
                    })
                }
                this._saveSelectedSiteCodes();
                this.trigger(this._state.sites)
            },
            onToggleSiteSelected: function e(t) {
                this._state.sites.forEach(function(e) {
                    if (e.code === t.code) {
                        e.selected = !e.selected
                    }
                });
                this._saveSelectedSiteCodes();
                this.trigger(this._state.sites)
            },
            isSiteFeatureEnabled: function e(t, r) {
                var n = false;
                this._state.sites.forEach(function(e) {
                    if (e.code === t && e.enabledFeatures.indexOf(r) !== -1) {
                        n = true
                    }
                });
                return n
            }
        });
        t.default = p
    },
    32: function(e, t, r) {
        e.exports = r(2)(976)
    },
    33: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(6);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = a.default.createActions({
            toggleAllSitesSelected: {},
            toggleSiteSelected: {}
        });
        t.default = i
    },
    34: function(e, t, r) {
        "use strict";
        var n = r(10);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            return JSON.stringify(a.default.getAll()).length
        }

        function u() {}

        function s(e) {
            var t = false;
            if (e && e.code) {
                switch (e.code) {
                    case 22:
                        t = true;
                        break;
                    case 1014:
                        if (e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                            t = true
                        }
                        break;
                    default:
                        t = false
                }
            } else if (e && e.number === -2147024882) {
                t = true
            }
            return t
        }

        function l() {
            var e = 1e3 * 60 * 60 * 24 * 30;
            var t = Date.now();
            if (a.default.enabled) {
                var r = a.default.getAll();
                for (var n in r) {
                    if (r.hasOwnProperty(n)) {
                        if (n.startsWith("pv8-")) {
                            var o = a.default.get(n);
                            if (o.value && typeof o.ts === "number") {
                                if (t - o.ts > e) {
                                    a.default.remove(n)
                                }
                            }
                        }
                    }
                }
            }
        }

        function c(e, t) {
            if (t) {
                return "pv8-" + t.userName + "-" + e
            }
            return "pv8-" + e
        }

        function f(e, t, r) {
            if (a.default.enabled) {
                var n = c(e, r);
                var o = a.default.get(n);
                if (o && o.value) {
                    return o.value
                }
                return o || t
            }
            return t
        }

        function d(e, t, r) {
            if (a.default.enabled) {
                var n = c(e, r);
                var o = {
                    value: t,
                    ts: Date.now()
                };
                try {
                    a.default.set(n, o)
                } catch (e) {
                    console.error(e);
                    if (s(e)) {
                        setTimeout(l)
                    }
                }
            }
        }

        function p(e, t) {
            if (a.default.enabled) {
                var r = c(e, t);
                a.default.remove(r)
            }
        }
        u();
        if (i() > 1024 * 1024 * 4) {
            setTimeout(l)
        }
        e.exports = {
            getValue: f,
            setValue: d,
            remove: p,
            cleanupLocalStore: l
        }
    },
    35: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getAvailableSites = c;
        var n = r(36);
        var a = l(n);
        var o = r(32);
        var i = l(o);
        var u = r(43);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c() {
            return a.default.Queries.getSites().then(function(e) {
                var t = i.default.sortBy(e, function(e) {
                    return e.description
                });
                return t.map(function(e) {
                    return s.default.fromJSON(e)
                })
            })
        }
    },
    36: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getOtherDeploymentsWithActiveCertificates: function e(t, r) {
                    var n = new s.default("api/sites/{SiteCode}/otherdeploymentswithactivecertificates", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getSites: function e(t) {
                    var r = "api/sites";
                    return a.default.query(r, t)
                }
            }
        };
        t.default = d
    },
    37: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        t.execute = d;
        var a = r(27);
        var o = c(a);
        var i = r(26);
        var u = r(24);
        var s = r(25);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = [408, 429, 502, 503, 504];

        function d(e, t) {
            t = n({
                baseUrl: ""
            }, t);
            var r = e.version ? ".v" + e.version : "";
            var a = t.baseUrl + "commands/" + e.commandId;
            var s = (new Error).stack;
            return new Promise(function(t, n) {
                (0, o.default)({
                    retryInterval: [50, 100, 200],
                    createRequest: function t() {
                        return (0, i.ajax)(a, {
                            type: "PUT",
                            headers: {
                                Accept: "application/problem+json; charset=utf-8",
                                "Content-Type": "application/vnd." + e.commandName + r + "+json"
                            },
                            data: JSON.stringify(e)
                        }).catch(function(e) {
                            return Promise.reject({
                                xhr: e,
                                retry: f.indexOf(e.status) !== -1
                            })
                        })
                    }
                }).then(t).catch(function(e) {
                    try {
                        if (e && e.responseText) {
                            n(JSON.parse(e.responseText))
                        } else {
                            var t = new l.default(a, e, "put", s);
                            (0, u.addGlobalError)(t)
                        }
                    } catch (e) {
                        (0, u.addGlobalError)(e)
                    }
                })
            })
        }
        t.default = {
            execute: d
        }
    },
    38: function(e, t, r) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(9);
        var i = f(o);
        var u = r(39);
        var s = f(u);
        var l = r(41);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var p = function() {
            function e(t, r, n) {
                d(this, e);
                this.url = t.toLowerCase();
                this.query = null;
                this.method = n || "get";
                for (var a in r) {
                    if (r.hasOwnProperty(a)) {
                        var o = a.toLowerCase();
                        var i = "{" + o + "}";
                        if (this.url.indexOf(i) > -1) {
                            this.url = this.url.replace(i, this.formatparam(r[a]))
                        } else {
                            var u = r[a];
                            if (u) {
                                if (!this.query) {
                                    this.query = {}
                                }
                                if (s.default.usesSiteTime(u)) {
                                    u = s.default.toStringSite(u);
                                }
                                this.query[o] = u
                            }
                        }
                    }
                }
            }
            a(e, [{
                key: "formatparam",
                value: function e(t) {
                    var r = this;
                    if (s.default.usesSiteTime(t)) {
                        return s.default.toStringSite(t)
                    }
                    if (s.default.usesUtc(t)) {
                        return s.default.toStringUtc(t)
                    }
                    if (typeof t === "string") {
                        return encodeURIComponent(t)
                    }
                    if (t.constructor === Array) {
                        return t.map(function(e) {
                            return r.formatparam(e)
                        }).join(",")
                    }
                    if ((typeof t === "undefined" ? "undefined" : n(t)) === "object") {
                        var a = JSON.stringify(t);
                        return a.substr(1, a.length - 2)
                    }
                    return t.toString()
                }
            }, {
                key: "buildUrl",
                value: function e() {
                    if (!this.query) {
                        return this.url
                    }
                    if (this.method === "post") {
                        return this.url
                    } else {
                        return this.url + (0, c.default)(this.query)
                    }
                }
            }]);
            return e
        }();
        e.exports = p
    },
    39: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.Clock = undefined;
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(40);
        var o = i(a);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var s = t.Clock = function() {
            function e() {
                u(this, e)
            }
            n(e, null, [{
                key: "today",
                value: function t(r) {
                    var n = e.utc(r);
                    return {
                        year: n.year(),
                        month: n.month() + 1,
                        day: n.date()
                    }
                }
            }, {
                key: "todayAt",
                value: function t(r, n) {
                    if (!r) {
                        throw new Error("timezone is required")
                    }
                    var a = e.utc(n).tz(r);
                    return {
                        siteYear: a.year(),
                        siteMonth: a.month() + 1,
                        siteDay: a.date()
                    }
                }
            }, {
                key: "utcNow",
                value: function t(r) {
                    var n = e.utc(r);
                    return e.utcDateTimeFromMoment(n)
                }
            }, {
                key: "utcToday",
                value: function t(r) {
                    var n = e.utcNow(r);
                    n.hours = 0;
                    n.minutes = 0;
                    n.seconds = 0;
                    return n
                }
            }, {
                key: "utcNowMoment",
                value: function t(r) {
                    return e.utc(r)
                }
            }, {
                key: "utcDateTimeFromMoment",
                value: function e(t) {
                    return {
                        year: t.year(),
                        month: t.month() + 1,
                        day: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds()
                    }
                }
            }, {
                key: "jsDateFromSiteDateTime",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    return new Date(t.siteYear, t.siteMonth - 1, t.siteDay, t.hours || 0, t.minutes || 0, t.seconds || 0)
                }
            }, {
                key: "jsDateFromUtcDateTime",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    var r = new Date(t.year, t.month - 1, t.day, 0, 0, 0);
                    return r
                }
            }, {
                key: "siteDateFromJsDate",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    return {
                        siteYear: t.getFullYear(),
                        siteMonth: t.getMonth() + 1,
                        siteDay: t.getDate()
                    }
                }
            }, {
                key: "utcDateFromJsDate",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    return {
                        year: t.getFullYear(),
                        month: t.getMonth() + 1,
                        day: t.getDate()
                    }
                }
            }, {
                key: "utcDateTimeFromJsDateTime",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    return {
                        year: t.getFullYear(),
                        month: t.getMonth() + 1,
                        day: t.getDate(),
                        hours: t.getHours(),
                        minutes: t.getMinutes(),
                        seconds: t.getSeconds()
                    }
                }
            }, {
                key: "siteDateTimeFromJsDate",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    return {
                        siteYear: t.getFullYear(),
                        siteMonth: t.getMonth() + 1,
                        siteDay: t.getDate(),
                        hours: t.getHours(),
                        minutes: t.getMinutes(),
                        seconds: t.getSeconds()
                    }
                }
            }, {
                key: "nowAt",
                value: function t(r, n) {
                    if (!r) {
                        throw new Error("timezone is required")
                    }
                    var a = e.utc(n).tz(r);
                    return {
                        siteYear: a.year(),
                        siteMonth: a.month() + 1,
                        siteDay: a.date(),
                        hours: a.hours(),
                        minutes: a.minutes(),
                        seconds: a.seconds()
                    }
                }
            }, {
                key: "timeNow",
                value: function t(r) {
                    var n = e.utc(r);
                    return {
                        hours: n.hours(),
                        minutes: n.minutes(),
                        seconds: n.seconds()
                    }
                }
            }, {
                key: "timeNowAt",
                value: function t(r, n) {
                    if (!r) {
                        throw new Error("timezone is required")
                    }
                    var a = e.utc(n).tz(r);
                    return {
                        hours: a.hours(),
                        minutes: a.minutes(),
                        seconds: a.seconds()
                    }
                }
            }, {
                key: "formatTime",
                value: function t(r, n) {
                    if (!r || r.hours === undefined || r.minutes === undefined) {
                        return ""
                    }
                    var a = e.pad(r.hours, 2);
                    var o = e.pad(r.minutes, 2);
                    var i = "";
                    if (n) {
                        i = ":" + e.pad(r.seconds, 2)
                    }
                    return a + ":" + o + i
                }
            }, {
                key: "formatSiteTime",
                value: function t(r) {
                    if (!r || r.hours === undefined || r.minutes === undefined) {
                        return ""
                    }
                    var n = e.pad(r.hours, 2);
                    var a = e.pad(r.minutes, 2);
                    return n + ":" + a
                }
            }, {
                key: "formatSiteDate",
                value: function e(t, r) {
                    if (!t || t.siteYear === undefined || t.siteMonth === undefined || t.siteDay === undefined) {
                        return ""
                    }
                    var n = new Date(t.siteYear, t.siteMonth - 1, t.siteDay);
                    return (0, o.default)(n).format(r || "DD MMM YYYY")
                }
            }, {
                key: "formatUtcDateTime",
                value: function t(r) {
                    return e.formatUtcDate(r) + " " + e.formatTime(r)
                }
            }, {
                key: "formatUtcDate",
                value: function e(t, r) {
                    if (!t || t.year === undefined || t.month === undefined || t.day === undefined) {
                        return ""
                    }
                    var n = new Date(t.year, t.month - 1, t.day);
                    return (0, o.default)(n).format(r || "DD MMM YYYY")
                }
            }, {
                key: "formatSiteDateTime",
                value: function t(r) {
                    if (!r) {
                        return ""
                    }
                    return e.formatSiteDate(r) + " " + e.formatSiteTime(r)
                }
            }, {
                key: "toStringSite",
                value: function t(r) {
                    if (!r) {
                        return ""
                    }
                    var n = e.pad(r.siteYear, 4);
                    var a = e.pad(r.siteMonth, 2);
                    var o = e.pad(r.siteDay, 2);
                    var i = e.pad(r.hours, 2);
                    var u = e.pad(r.minutes, 2);
                    var s = e.pad(r.seconds, 2);
                    return n + "-" + a + "-" + o + "T" + i + ":" + u + ":" + s + ".000"
                }
            }, {
                key: "toStringUtc",
                value: function t(r) {
                    if (!r) {
                        return ""
                    }
                    var n = e.pad(r.year, 4);
                    var a = e.pad(r.month, 2);
                    var o = e.pad(r.day, 2);
                    var i = e.pad(r.hours, 2);
                    var u = e.pad(r.minutes, 2);
                    var s = e.pad(r.seconds, 2);
                    return n + "-" + a + "-" + o + "T" + i + ":" + u + ":" + s + ".000Z"
                }
            }, {
                key: "toUtc",
                value: function t(r, n) {
                    if (!n) {
                        throw new Error("timezone is required")
                    }
                    var a = e.siteDateTimeToUtcMoment(r, n);
                    return {
                        year: a.year(),
                        month: a.month() + 1,
                        day: a.date(),
                        hours: a.hour(),
                        minutes: a.minutes(),
                        seconds: a.seconds()
                    }
                }
            }, {
                key: "siteDateTimeToUtcMoment",
                value: function t(r, n) {
                    if (!n) {
                        throw new Error("timezone is required")
                    }
                    var a = e.toStringSite(r);
                    return o.default.tz(a, n).utc()
                }
            }, {
                key: "utcDateTimeToUtcMoment",
                value: function t(r) {
                    var n = e.toStringUtc(r);
                    return (0, o.default)(n).utc()
                }
            }, {
                key: "toSite",
                value: function t(r, n) {
                    if (!n) {
                        throw new Error("timezone is required")
                    }
                    var a = e.toStringUtc(r);
                    var i = (0, o.default)(a).tz(n);
                    return {
                        siteYear: i.year(),
                        siteMonth: i.month() + 1,
                        siteDay: i.date(),
                        hours: i.hour(),
                        minutes: i.minutes(),
                        seconds: i.seconds()
                    }
                }
            }, {
                key: "usesUtc",
                value: function e(t) {
                    if (!t) {
                        return false
                    }
                    if (t.year) {
                        return true
                    }
                    return false
                }
            }, {
                key: "usesSiteTime",
                value: function e(t) {
                    if (!t) {
                        return false
                    }
                    if (t.siteYear) {
                        return true
                    }
                    return false
                }
            }, {
                key: "TimeEquals",
                value: function e(t, r) {
                    if (t === null && r === null) {
                        return true
                    }
                    if (t === null) {
                        return false
                    }
                    if (r === null) {
                        return false
                    }
                    return t.hours === r.hours && t.minutes === r.minutes && t.seconds === r.seconds
                }
            }, {
                key: "siteDateTimeEquals",
                value: function t(r, n) {
                    if (r === null && n === null) {
                        return true
                    }
                    if (r === null) {
                        return false
                    }
                    if (n === null) {
                        return false
                    }
                    return r.siteYear === n.siteYear && r.siteMonth === n.siteMonth && r.siteDay === n.siteDay && e.TimeEquals(r, n)
                }
            }, {
                key: "sitePeriodEquals",
                value: function t(r, n) {
                    if (r === null && n === null) {
                        return true
                    }
                    if (r === null) {
                        return false
                    }
                    if (n === null) {
                        return false
                    }
                    return e.siteDateTimeEquals(r.siteFrom, n.siteFrom) && e.siteDateTimeEquals(r.siteTo, n.siteTo)
                }
            }, {
                key: "buildUtcDateTime",
                value: function t(r, n) {
                    if (e.usesSiteTime(r)) {
                        throw new Error("you cannot use this method on a site based date object")
                    }
                    r = r || {
                        year: null,
                        month: null,
                        day: null
                    };
                    n = n || {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                    return {
                        year: r.year,
                        month: r.month,
                        day: r.day,
                        hours: n.hours,
                        minutes: n.minutes,
                        seconds: n.seconds
                    }
                }
            }, {
                key: "buildSiteDateTime",
                value: function t(r, n) {
                    if (e.usesUtc(r)) {
                        throw new Error("you cannot use this method on an utc based date object")
                    }
                    r = r || {
                        siteYear: null,
                        siteMonth: null,
                        siteDay: null
                    };
                    n = n || {
                        hours: null,
                        minutes: null,
                        seconds: null
                    };
                    return {
                        siteYear: r.siteYear,
                        siteMonth: r.siteMonth,
                        siteDay: r.siteDay,
                        hours: n.hours,
                        minutes: n.minutes,
                        seconds: n.seconds
                    }
                }
            }, {
                key: "compareTime",
                value: function t(r, n) {
                    var a = e.compareComponent(r.hours, n.hours);
                    if (a !== 0) {
                        return a
                    }
                    a = e.compareComponent(r.minutes, n.minutes);
                    if (a !== 0) {
                        return a
                    }
                    a = e.compareComponent(r.seconds, n.seconds);
                    if (a !== 0) {
                        return a
                    }
                }
            }, {
                key: "compareUtcDates",
                value: function t(r, n) {
                    var a = e.compareComponent(r.year, n.year);
                    if (a !== 0) {
                        return a
                    }
                    a = e.compareComponent(r.month, n.month);
                    if (a !== 0) {
                        return a
                    }
                    a = e.compareComponent(r.day, n.day);
                    if (a !== 0) {
                        return a
                    }
                    return e.compareTime(r, n)
                }
            }, {
                key: "addToUtcDate",
                value: function t(r, n, a) {
                    var o = e.utcDateTimeToUtcMoment(r);
                    o.add(n, a);
                    return e.utcDateTimeFromMoment(o)
                }
            }, {
                key: "parseTime",
                value: function e(t) {
                    var r = t.split(":");
                    if (r.length < 2) {
                        throw new Error("input string should have at least hours:minutes")
                    }
                    var n = r[0];
                    var a = r[1];
                    var o = 0;
                    if (r.length > 2) {
                        o = +r[2]
                    }
                    return {
                        hours: +n,
                        minutes: +a,
                        seconds: o
                    }
                }
            }, {
                key: "differenceInUtc",
                value: function t(r, n, a) {
                    var o = e.utcDateTimeToUtcMoment(r);
                    var i = e.utcDateTimeToUtcMoment(n);
                    return o.diff(i, a)
                }
            }, {
                key: "newUtcDateTime",
                value: function e(t, r, n, a, o, i) {
                    return {
                        year: t,
                        month: r,
                        day: n,
                        hours: a || 0,
                        minutes: o || 0,
                        seconds: i || 0
                    }
                }
            }, {
                key: "newSiteDateTime",
                value: function e(t, r, n, a, o, i) {
                    return {
                        siteYear: t,
                        siteMonth: r,
                        siteDay: n,
                        hours: a || 0,
                        minutes: o || 0,
                        seconds: i || 0
                    }
                }
            }, {
                key: "add",
                value: function e(t, r, n) {
                    var a = o.default.utc(t);
                    a = a.add(r, n);
                    return {
                        year: a.year(),
                        month: a.month() + 1,
                        day: a.date(),
                        hours: a.hours(),
                        minutes: a.minutes(),
                        seconds: a.seconds()
                    }
                }
            }, {
                key: "pad",
                value: function e(t, r) {
                    t = t || 0;
                    var n = t + "";
                    while (n.length < r) {
                        n = "0" + n
                    }
                    return n
                }
            }, {
                key: "compareComponent",
                value: function e(t, r) {
                    t = t || 0;
                    r = r || 0;
                    if (t < r) {
                        return -1
                    }
                    if (t > r) {
                        return 1
                    }
                    return 0
                }
            }, {
                key: "utc",
                value: function e(t) {
                    return t ? o.default.utc(t) : o.default.utc()
                }
            }]);
            return e
        }();
        t.default = s
    },
    40: function(e, t, r) {
        e.exports = r(2)(983)
    },
    41: function(e, t, r) {
        "use strict";
        var n = r(9);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (e) {
                return "?" + a.default.param(e)
            }
            return ""
        }
        e.exports = i
    },
    42: function(e, t, r) {
        e.exports = r(2)(986)
    },
    43: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            r(e, null, [{
                key: "fromJSON",
                value: function t(r) {
                    var n = new e(r.code, r.name, r.description, r.timeZone, r.windowsTimeZone);
                    n.shifts = r.shifts || [];
                    n.enabledFeatures = r.enabledFeatures || [];
                    n.areas = r.areas || [];
                    return n
                }
            }]);

            function e(t, r, a) {
                var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                n(this, e);
                this.code = t;
                this.name = r;
                this.description = a;
                this.timeZone = o || "Etc/GMT";
                this.windowsTimeZone = i;
                this.shifts = [{
                    from: {
                        hours: 7,
                        minutes: 0,
                        seconds: 0
                    },
                    to: {
                        hours: 19,
                        minutes: 0,
                        seconds: 0
                    }
                }];
                this.enabledFeatures = [];
                this.areas = []
            }
            return e
        }();
        t.default = a
    },
    44: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            function e() {
                n(this, e)
            }
            r(e, [{
                key: "getCurrentUser",
                value: function e() {
                    return this._currentUser
                }
            }, {
                key: "setCurrentUser",
                value: function e(t) {
                    this._currentUser = t
                }
            }]);
            return e
        }();
        t.default = new a
    },
    45: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = h(n);
        var o = r(37);
        var i = m(o);
        var u = r(38);
        var s = h(u);
        var l = r(42);
        var c = h(l);
        var f = r(46);
        var d = h(f);
        var p = r(47);
        var v = h(p);

        function m(e) {
            if (e && e.__esModule) {
                return e
            } else {
                var t = {};
                if (e != null) {
                    for (var r in e) {
                        if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
                    }
                }
                t.default = e;
                return t
            }
        }

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var y = {
            Commands: {
                changePassword: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.changepassword",
                        request: t.request
                    };
                    return i.execute(r, {
                        baseUrl: (0, d.default)() + "skeletor/"
                    })
                }
            },
            Queries: {
                getUsers: function e(t) {
                    var r = new s.default((0, d.default)() + "api/users", t, "get").buildUrl();
                    return a.default.query(r)
                },
                getCurrentUser: function e() {
                    var t = (0, d.default)() + "api/user";
                    return a.default.query(t).then(function(e) {
                        return v.default.fromJSON(e)
                    })
                },
                getUserFullNameByToken: function e(t) {
                    var r = (0, d.default)() + ("api/user/fullname/" + t);
                    return a.default.query(r)
                }
            }
        };
        t.default = y
    },
    46: function(e, t, r) {
        e.exports = r(2)(585)
    },
    47: function(e, t) {
        "use strict";
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            function e(t, r, a, o, i, u, s) {
                n(this, e);
                this._identity = t;
                this._fullName = r;
                this._userName = a;
                this._roles = o;
                this._defaultSiteCode = i;
                this._authorizationAreas = u || [];
                this.passwordChangeRequired = s
            }
            r(e, [{
                key: "hasAccessOnAnySite",
                value: function e(t) {
                    var r = this;
                    return t.some(function(e) {
                        return r._roles.some(function(t) {
                            return t.appliesToSiteCode === e
                        })
                    })
                }
            }, {
                key: "identity",
                get: function e() {
                    return this._identity
                }
            }, {
                key: "userName",
                get: function e() {
                    return this._userName
                }
            }, {
                key: "domain",
                get: function e() {
                    var t = (this._userName || "").split("\\");
                    return t.length > 0 ? t[0] : ""
                }
            }, {
                key: "userNameWithoutDomain",
                get: function e() {
                    var t = (this._userName || "").split("\\");
                    return t.length > 1 ? t[1] : ""
                }
            }, {
                key: "fullName",
                get: function e() {
                    return this._fullName
                }
            }, {
                key: "roles",
                get: function e() {
                    return this._roles
                }
            }, {
                key: "defaultSiteCode",
                get: function e() {
                    return this._defaultSiteCode
                }
            }, {
                key: "authorizationAreas",
                get: function e() {
                    return this._authorizationAreas
                }
            }], [{
                key: "fromJSON",
                value: function t(r) {
                    return new e(r.identity, r.fullName, r.userName, r.roles, r.defaultSiteCode, r.authorizationAreas, r.passwordChangeRequired)
                }
            }]);
            return e
        }();
        e.exports = a
    },
    48: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(49);
        var a = u(n);
        var o = r(50);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = r(51);
        var l = function e() {
            var t = s.keys().reduce(function(e, t) {
                var r = t.substr(2).split(".")[0];
                e[r] = {
                    Queries: s(t).default.Queries,
                    Commands: s(t).default.Commands
                };
                return e
            }, {});
            window.PV.Api = t;
            window.PV.workflowConfig = i.default;
            window.PV.browserUtils = a.default
        };
        t.default = l
    },
    49: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        t.openNewFromTemplatePopout = s;
        t.openNewPopout = l;
        t.openPopout = c;
        t.isElementPartiallyInViewport = f;
        t.openWindowOnDone = d;
        var a = r(41);
        var o = i(a);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = 900;
            var n = 1280;
            var a = 25;
            var o = (window.screen.availWidth - n) / 2;
            var i = window.location.hash;
            var u = i.substring(i.lastIndexOf("/") + 1, i.lastIndexOf("?"));
            var s = t ? "PopoutWindow_" + t : "_blank";
            var l = e.indexOf("?") === -1 ? "?" : "&";
            var c = window.open("" + e + l + "openerRegistrationNumber=" + u, s, "height=" + r + ",width=" + n + ",titlebar=no,toolbar=no," + ("location=no,status=no,menubar=no,resizable=yes,top=" + a + ",left=" + o));
            if (c) {
                c.focus()
            }
        }

        function s(e, t, r) {
            e = encodeURIComponent(e);
            var n = "permitvision/editor/#/certificate/" + e + "/templateAsNew" + (0, o.default)({
                attachTo: t,
                state: r
            });
            u(n, "template_" + e)
        }

        function l(e, t, r, a) {
            var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var s = n({}, i, {
                siteCode: r,
                attachTo: a
            });
            var l = "permitvision/editor/#/" + e + "/" + t + "/new/" + (0, o.default)(s);
            u(l)
        }

        function c(e) {
            e = encodeURIComponent(e);
            var t = "permitvision/editor/#/certificate/" + e;
            u(t, e)
        }

        function f(e) {
            var t = e.getBoundingClientRect();
            return t.bottom >= 0 && t.right >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth)
        }

        function d(e, t) {
            var r = window.open("about:blank");
            var n = function t() {
                r.location = document.getElementsByTagName("base")[0].href + e
            };
            if (t) {
                t.then(n)
            } else {
                n()
            }
        }
        t.default = {
            openWindow: u,
            openNewPopout: l,
            openPopout: c,
            openNewFromTemplatePopout: s,
            isElementPartiallyInViewport: f,
            openWindowOnDone: d
        }
    },
    50: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getLolcInspectionDeviceTypes = V;
        var n = r(32);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            return window.flowVisionConfig
        }

        function u() {
            return "Requesting"
        }

        function s(e) {
            var t = a.default.find(i().workitemKinds, function(t) {
                return t.name === e
            });
            return t
        }

        function l(e, t) {
            if (t.toLowerCase() === "closed") {
                return {
                    name: "Closed",
                    states: ["Closed"]
                }
            }
            var r = s(e).workspace;
            var n = void 0;
            r.workflowSteps.forEach(function(e) {
                e.states.forEach(function(r) {
                    if (r === t) {
                        n = e
                    }
                })
            });
            return n
        }

        function c(e) {
            var t = u(e);
            var r = l(e, t);
            if (!r) {
                return null
            }
            return r.name
        }

        function f(e) {
            var t = a.default.find(i().workitemKinds, function(t) {
                return t.name === e
            });
            return t.states.map(function(e) {
                return e.name
            })
        }

        function d(e, t) {
            return a.default.find(s(e).risks, function(e) {
                return e.name === t
            })
        }

        function p(e, t) {
            var r = s(e);
            return a.default.find(r.workspace.attachmentTypes, function(e) {
                return e.kind === t
            })
        }

        function v(e) {
            var t = s(e);
            return t.type
        }

        function m(e, t) {
            var r = s(e);
            return r.workspace.printProfiles ? a.default.filter(r.workspace.printProfiles, function(e) {
                return !e.onlyForVariant || e.onlyForVariant === t
            }).map(function(e) {
                return e.name
            }) : []
        }

        function h(e) {
            var t = s(e);
            return t.workspace.defaultPrintProfile
        }

        function y() {
            return i().workitemKinds
        }

        function g(e) {
            var t = e.toLowerCase() + "template";
            return y().some(function(e) {
                return e.name.toLowerCase() === t
            })
        }

        function b(e, t) {
            var r = e + "Template";
            var n = s(r);
            if (!n) {
                return false
            }
            return n.variants.some(function(e) {
                return e.name.toLowerCase() === t.toLowerCase()
            })
        }

        function _() {
            return y().filter(function(e) {
                return e.workspace.displayInMenu && e.workspace.certificatesSearchPageFields.length > 0
            })
        }

        function w(e, t) {
            var r = s(e);
            if (!r) {
                return null
            }
            var n = r.workspace;
            return a.default.find(n.workflowSteps, function(e) {
                return e.name === t
            })
        }

        function P() {
            return i().modules
        }

        function C(e) {
            var t = null;
            i().modules.forEach(function(r) {
                r.workspaces.forEach(function(n) {
                    if (n.kind === e) {
                        t = r
                    }
                })
            });
            return t
        }

        function k(e, t) {
            return a.default.filter(s(e).workspace.wizardSteps, function(e) {
                return a.default.includes(e.showInStates, t)
            })
        }

        function T() {
            return i().siteGraphics
        }

        function E(e, t, r) {
            return a.default.find(s(e).reverseTransitions, function(e) {
                return e.from === t && (!r || e.to === r)
            })
        }

        function O(e, t) {
            var r = a.default.chain(i().fileAttachmentTypes).filter(function(t) {
                return t.kind === e
            }).filter(function(e) {
                return typeof e.originatingFrom !== "string" || a.default.includes(t, e.originatingFrom)
            }).filter(function(e) {
                return typeof e.notOriginatingFrom !== "string" || !a.default.includes(t, e.notOriginatingFrom)
            }).map(function(e) {
                return e.types
            }).flatten().value();
            return r
        }

        function N(e) {
            return s(e).workspace.actions
        }

        function S(e) {
            return a.default.filter(i().isolationTypes.items, function(t) {
                return a.default.some(t.kinds, function(t) {
                    return t.type === e
                })
            })
        }

        function M(e) {
            var t = a.default.find(i().isolationTypes.items, function(t) {
                return t.name === e
            });
            return t.methods
        }

        function j(e) {
            var t = a.default.find(i().isolationTypes.defaultTypes, function(t) {
                return t.kind === e
            });
            if (t) {
                return t.isolationTypes
            }
            return []
        }

        function D() {
            return i().isolationTypes.methods || []
        }

        function R(e) {
            var t = s(e).workspace;
            var r = t.wizardSteps.map(function(e) {
                return e.fields.map(function(e) {
                    return {
                        name: e.name,
                        fieldName: e.authorityPropertyName || e.key || e.name,
                        copyParticipation: e.copyParticipation
                    }
                })
            });
            r = a.default.flatten(r);
            return r.filter(function(e) {
                return !!e.copyParticipation
            })
        }

        function x(e) {
            var t = R(e);
            return t.filter(function(e) {
                return e.copyParticipation === "Clone" || e.copyParticipation === "CloneAndTemplate"
            })
        }

        function I(e) {
            var t = R(e);
            return t.filter(function(e) {
                return e.copyParticipation === "Template" || e.copyParticipation === "CloneAndTemplate"
            })
        }

        function q(e) {
            var t = {
                workItemVariant: ["variant"],
                workObjects: ["selectedWorkObjects"],
                markForSanctionToTest: ["isForSanctionToTest"],
                riskAssessmentTeam: ["approvingTeamMembers", "contractedTeamMembers"],
                isolationCertificateRequirement: ["Interlocked", "isolationCertificateRequirement"],
                requiredAreaAuthorization: ["area"],
                gasMeasurementRequirements: ["measurementRequirements"]
            };
            return t[e] || [e]
        }

        function L(e) {
            return a.default.find(i().auditing, {
                auditVariant: e
            })
        }

        function A(e) {
            return a.default.find(i().workitemKinds, {
                type: e
            })
        }

        function V() {
            return (i().lolcInspection || []).map(function(e) {
                return e.deviceType
            })
        }

        function F(e) {
            return i().lifetimes.filter(function(t) {
                return t.kinds.length === 0 || t.kinds.indexOf(e.kind) !== -1
            }).filter(function(t) {
                return !!t.forTemplateBased === e.isTemplateBased
            }).filter(function(t) {
                return t.risks.length === 0 || t.risks.indexOf(e.riskOfWork) !== -1
            }).filter(function(t) {
                return t.variants.length === 0 || t.variants.indexOf(e.variant) !== -1
            })
        }

        function U(e) {
            var t = i().miscellaneous;
            if (t && t.notificationRoles && t.notificationRoles.length) {
                if (t.notificationRoles.length === 1 && t.notificationRoles[0] === "*") {
                    return true
                }
                var r = e.roles.map(function(e) {
                    return e.roleCode
                });
                return r.some(function(e) {
                    return t.notificationRoles.includes(e)
                })
            }
            return true
        }
        t.default = {
            getLifeTimes: F,
            getFlowVisionJson: i,
            getCreationStateForKind: u,
            getWorkItemKind: s,
            getWorkflowBasedOnState: l,
            getCreationStepForKind: c,
            getWorkItemKindStates: f,
            getRiskOfWorkForKind: d,
            getAttachmentType: p,
            getTypeForKind: v,
            getPrintProfilesFor: m,
            getDefaultPrintProfileForKind: h,
            getAllWorkItemKinds: y,
            hasTemplateKind: g,
            hasTemplateFor: b,
            getActiveSearchKinds: _,
            getWorkflowStep: w,
            getModules: P,
            getModuleFor: C,
            getWizardStepsFor: k,
            getSiteGraphicsSettings: T,
            findReverseTransition: E,
            findFileAttachmentTypes: O,
            getActionsForKind: N,
            getIsolationTypesForKind: S,
            getIsolationMethodsForType: M,
            getDefaultIsolationTypesforKind: j,
            getLolcMethods: D,
            getCopyParticipationsFields: R,
            getCopyParticipationsForCopy: x,
            getCopyParticipationsForTemplate: I,
            mapConfigField2PropertyNames: q,
            getAuditingRequirements: L,
            findKind: A,
            getLolcInspectionDeviceTypes: V,
            shouldShowNotificationIcon: U
        }
    },
    51: function(e, t, r) {
        var n = {
            "./activeTemplatesApi.generated.js": 52,
            "./auditApi.generated.js": 53,
            "./auditQuestionnairesApi.generated.js": 54,
            "./blobApi.generated.js": 55,
            "./certificateApi.generated.js": 56,
            "./certificateImageApi.generated.js": 57,
            "./certificateListApi.generated.js": 58,
            "./certificateQuestionnaireApi.generated.js": 59,
            "./companiesApi.generated.js": 60,
            "./controlMeasureApi.generated.js": 61,
            "./deploymentApi.generated.js": 62,
            "./descriptorApi.generated.js": 63,
            "./equipmentApi.generated.js": 64,
            "./equipmentInspectionApi.generated.js": 65,
            "./hazardsApi.generated.js": 66,
            "./isolationsApi.generated.js": 67,
            "./lastSynchronizedApi.generated.js": 68,
            "./lessonsApi.generated.js": 69,
            "./locationGraphicsApi.generated.js": 70,
            "./lolcApi.generated.js": 71,
            "./monitoringApi.generated.js": 72,
            "./nearbyActivitiesApi.generated.js": 73,
            "./permitApi.generated.js": 74,
            "./printingApi.generated.js": 75,
            "./resourcesApi.generated.js": 76,
            "./searchApi.generated.js": 77,
            "./signing.generated.js": 78,
            "./siteApi.generated.js": 36,
            "./synchronizationApi.generated.js": 79,
            "./workingLocationsApi.generated.js": 80
        };

        function a(e) {
            return r(o(e))
        }

        function o(e) {
            return n[e] || function() {
                throw new Error("Cannot find module '" + e + "'.")
            }()
        }
        a.keys = function e() {
            return Object.keys(n)
        };
        a.resolve = o;
        e.exports = a;
        a.id = 51
    },
    52: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                findActiveTemplates: function e(t, r) {
                    var n = new s.default("api/templates/{Kind}/active", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                }
            }
        };
        t.default = d
    },
    53: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                startAudit: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.startaudit",
                        registrationNumber: t.registrationNumber,
                        kind: t.kind,
                        variant: t.variant,
                        siteCode: t.siteCode,
                        state: t.state,
                        auditDate: t.auditDate,
                        workItemRegistrationNumbers: t.workItemRegistrationNumbers
                    };
                    return i.default.execute(r)
                },
                proposeAuditTask: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.proposeaudittask",
                        registrationNumber: t.registrationNumber,
                        title: t.title,
                        description: t.description,
                        siteCode: t.siteCode,
                        dueAt: t.dueAt,
                        fromAudit: t.fromAudit,
                        auditQuestionNumber: t.auditQuestionNumber,
                        auditQuestionOrder: t.auditQuestionOrder,
                        owner: t.owner,
                        taskVersion: t.taskVersion
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {}
        };
        t.default = d
    },
    54: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getAuditQuestionnaire: function e(t, r) {
                    var n = new s.default("api/auditQuestionnaire/{variant}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    55: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {}
        };
        t.default = d
    },
    56: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                deleteFileAttachment: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.deletefileattachment",
                        code: t.code,
                        registrationNumber: t.registrationNumber
                    };
                    return i.default.execute(r)
                },
                deleteCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.deletecertificate",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                },
                attachCertificateToCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.attachcertificatetocertificate",
                        attachRegistrationNumber: t.attachRegistrationNumber,
                        attachToRegistrationNumber: t.attachToRegistrationNumber,
                        isRequired: t.isRequired
                    };
                    return i.default.execute(r)
                },
                attachFileLinkToCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.attachfilelinktocertificate",
                        registrationNumber: t.registrationNumber,
                        link: t.link,
                        fileName: t.fileName,
                        fileAttachmentType: t.fileAttachmentType,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                },
                attachUploadedFileToCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.attachuploadedfiletocertificate",
                        registrationNumber: t.registrationNumber,
                        blobCode: t.blobCode,
                        mediaType: t.mediaType,
                        fileName: t.fileName,
                        extension: t.extension,
                        fileAttachmentType: t.fileAttachmentType,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                },
                copyCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.copycertificate",
                        certificate: t.certificate,
                        sourceRegistrationNumber: t.sourceRegistrationNumber
                    };
                    return i.default.execute(r)
                },
                createCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.createcertificate",
                        certificate: t.certificate,
                        completedQuestionnaire: t.completedQuestionnaire,
                        templateRegistrationNumber: t.templateRegistrationNumber,
                        workOrderNumber: t.workOrderNumber
                    };
                    return i.default.execute(r)
                },
                createTemplateFromCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.createtemplatefromcertificate",
                        sourceRegistrationNumber: t.sourceRegistrationNumber,
                        targetRegistrationNumber: t.targetRegistrationNumber,
                        creationState: t.creationState
                    };
                    return i.default.execute(r)
                },
                deleteAndUnlinkAttachedCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.deleteandunlinkattachedcertificate",
                        parentRegistrationNumber: t.parentRegistrationNumber,
                        attachedRegistrationNumber: t.attachedRegistrationNumber
                    };
                    return i.default.execute(r)
                },
                revertState: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.revertstate",
                        registrationNumber: t.registrationNumber,
                        toState: t.toState,
                        reason: t.reason,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                },
                saveCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.savecertificate",
                        certificate: t.certificate
                    };
                    return i.default.execute(r)
                },
                transferPermitOwnership: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.transferpermitownership",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        targetDeployment: t.targetDeployment
                    };
                    return i.default.execute(r)
                },
                unlinkAttachedCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.unlinkattachedcertificate",
                        parentRegistrationNumber: t.parentRegistrationNumber,
                        attachedRegistrationNumber: t.attachedRegistrationNumber
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {
                listCertificates: function e(t, r) {
                    var n = new s.default("api/certificates/List/{Kind}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getCertificateAuditTrail: function e(t, r) {
                    var n = new s.default("api/certificates/{RegistrationNumber}/audittrail", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getCertificatesByWorkOrderNumber: function e(t, r) {
                    var n = new s.default("api/workorder/{WorkOrderNumber}/certificates", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getRegistrationNumber: function e(t, r) {
                    var n = new s.default("api/registrationnumbers/{kind}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getCertificate: function e(t, r) {
                    var n = new s.default("api/certificates/{RegistrationNumber}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getAllAffectedByTransferOfOwnership: function e(t, r) {
                    var n = new s.default("api/certificates/{RegistrationNumber}/affectedByTransfer", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getCompletedCertificateQuestionnaire: function e(t, r) {
                    var n = new s.default("api/certificates/{RegistrationNumber}/completedquestionnaire", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    57: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getCertificateImage: function e(t, r) {
                    var n = new s.default("api/certificateimage", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    58: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getCertificateCountsByWorkflowStep: function e(t, r) {
                    var n = new s.default("api/certificates/counts/{Kind}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                }
            }
        };
        t.default = d
    },
    59: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getCertificateQuestionnaire: function e(t, r) {
                    var n = new s.default("api/certificatequestionnaire/{kind}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    60: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getCompanies: function e(t) {
                    var r = "api/companies";
                    return a.default.query(r, t)
                }
            }
        };
        t.default = d
    },
    61: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getMeasures: function e(t, r) {
                    var n = new s.default("api/controlMeasures/{category}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    62: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getDeployments: function e(t, r) {
                    var n = new s.default("api/sites/{Site}/deployments", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    63: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getDescriptors: function e(t, r) {
                    var n = new s.default("api/descriptors/{category}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getSubstances: function e(t) {
                    var r = "api/substances";
                    return a.default.query(r, t)
                }
            }
        };
        t.default = d
    },
    64: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getEquipmentHierarchy: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/{Site}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getEquipmentHierarchyChildren: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/{Site}/{Code}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                searchEquipmentHierarchy: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/search/{Site}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getLolcValveHierarchy: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/LolcValves/{Site}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getLolcValveHierarchyChildren: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/LolcValves/{Site}/{Code}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                searchLolcValvesHierarchy: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/LolcValves/search/{Site}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getLessonsLearned: function e(t, r) {
                    var n = new s.default("api/EquipmentHierarchy/LessonsLearned/{Site}/{Code}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    65: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                completeLolcOperationalInspectionDesign: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.completelolcoperationalinspectiondesign",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        remarks: t.remarks
                    };
                    return i.default.execute(r)
                },
                confirmInspectionInstructions: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.confirminspectioninstructions",
                        registrationNumber: t.registrationNumber,
                        signatureType: t.signatureType,
                        certificateVersion: t.certificateVersion,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        remarks: t.remarks
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {}
        };
        t.default = d
    },
    66: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getAllGroupedHazards: function e(t) {
                    var r = "api/groupedhazards";
                    return a.default.query(r, t)
                },
                getGroupedHazards: function e(t, r) {
                    var n = new s.default("api/groupedhazards/{category}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getHazardTypes: function e(t) {
                    var r = "api/hazardtypes";
                    return a.default.query(r, t)
                },
                getControlMeasureTypes: function e(t) {
                    var r = "api/controlmeasuretypes";
                    return a.default.query(r, t)
                }
            }
        };
        t.default = d
    },
    67: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                saveIsolationInstructionPlan: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.saveisolationinstructionplan",
                        registrationNumber: t.registrationNumber,
                        plan: t.plan,
                        pnIDData: t.pnIDData
                    };
                    return i.default.execute(r)
                },
                cancelRequestedIsolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.cancelrequestedisolations",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        signatureType: t.signatureType,
                        remarks: t.remarks,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                confirmIsolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.confirmisolations",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        remarks: t.remarks,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                confirmDeisolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.confirmdeisolations",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        userName: t.userName,
                        password: t.password,
                        remarks: t.remarks,
                        authenticationToken: t.authenticationToken,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                confirmDeisolationsForTest: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.confirmdeisolationsfortest",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        userName: t.userName,
                        password: t.password,
                        remarks: t.remarks,
                        authenticationToken: t.authenticationToken,
                        isolationPoints: t.isolationPoints
                    };
                    return i.default.execute(r)
                },
                confirmReisolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.confirmreisolations",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        remarks: t.remarks,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                requestDeisolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.requestdeisolations",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                cancelRequestedDeisolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.cancelrequesteddeisolations",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        signatureType: t.signatureType,
                        remarks: t.remarks,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                requestDeisolationsForTest: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.requestdeisolationsfortest",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                requestIsolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.requestisolations",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                requestReisolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.requestreisolations",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                verifyDeisolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.verifydeisolations",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                verifyIsolations: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.verifyisolations",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                },
                requestToMoveLolcBackToNormal: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.requesttomovelolcbacktonormal",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion,
                        instructions: t.instructions
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {
                getIsolationInstructions: function e(t, r) {
                    var n = new s.default("api/certificates/{registrationNumber}/isolationInstructions", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getConflictsForEquipment: function e(t, r) {
                    var n = new s.default("api/isolationInstructions/conflictsForEquipment", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    68: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getLastSynchronized: function e(t) {
                    var r = "api/lastsynchronized";
                    return a.default.query(r, t)
                }
            }
        };
        t.default = d
    },
    69: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                removeLesson: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.removelesson",
                        code: t.code,
                        lessonVersion: t.lessonVersion
                    };
                    return i.default.execute(r)
                },
                learnLesson: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.learnlesson",
                        lesson: t.lesson
                    };
                    return i.default.execute(r)
                },
                signAndApproveLessonsLearned: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.signandapprovelessonslearned",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {
                getLessons: function e(t, r) {
                    var n = new s.default("api/lesson", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    70: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getLocationGraphics: function e(t, r) {
                    var n = new s.default("api/LocationGraphics/{SiteCode}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getLocationGraphicShapes: function e(t, r) {
                    var n = new s.default("api/LocationGraphics/{SiteCode}/{ImageId}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    71: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                removeValve: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.removevalve",
                        valveCode: t.valveCode,
                        siteCode: t.siteCode
                    };
                    return i.default.execute(r)
                },
                saveValve: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.savevalve",
                        valve: t.valve
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {
                getLolcRegistry: function e(t, r) {
                    var n = new s.default("api/lolcregistry", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                searchLolcRegistry: function e(t, r) {
                    var n = new s.default("api/lolcregistry/search", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getInspectionGroups: function e(t) {
                    var r = "api/lolcregistry/filter/inspectiongroups";
                    return a.default.query(r, t)
                },
                getClassifications: function e(t) {
                    var r = "api/lolcregistry/classifications";
                    return a.default.query(r, t)
                },
                getAuditTrail: function e(t, r) {
                    var n = new s.default("api/lolcregistry/auditTrail/{SiteCode}/{ValveCode}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    72: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                addPressureMeasurement: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.addpressuremeasurement",
                        registrationNumber: t.registrationNumber,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        remarks: t.remarks,
                        isolationCode: t.isolationCode,
                        measuredAt: t.measuredAt,
                        value: t.value
                    };
                    return i.default.execute(r)
                },
                commentTaskMonitor: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.commenttaskmonitor",
                        registrationNumber: t.registrationNumber,
                        taskMonitorNumber: t.taskMonitorNumber,
                        comment: t.comment,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {
                getPressureBuildupPoints: function e(t, r) {
                    var n = new s.default("api/pbu", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getPressureBuildupMeasurements: function e(t, r) {
                    var n = new s.default("api/pbu/measurements/{RegistrationNumber}/{IsolationCode}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getNotifications: function e(t, r) {
                    var n = new s.default("api/Notifications", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getTaskMonitorComments: function e(t, r) {
                    var n = new s.default("api/TaskMonitoring/Comments/{registrationNumber}/{TaskMonitorNumber}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getTaskMonitoring: function e(t, r) {
                    var n = new s.default("api/TaskMonitoring", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getGasMeasurementRequirements: function e(t, r) {
                    var n = new s.default("api/gasmeasurements/requirements", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getGasMeasurements: function e(t, r) {
                    var n = new s.default("api/gasmeasurements/measurements/{RegistrationNumber}/{Substance}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    73: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getNearbyActivitiesAtSystem: function e(t, r) {
                    var n = new s.default("api/activitiesAtSystem/{SystemCode}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                getNearbyActivitiesAtLocation: function e(t, r) {
                    var n = new s.default("api/activitiesAtLocation/{LocationCode}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                }
            }
        };
        t.default = d
    },
    74: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                suspendAllActivePermits: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.suspendallactivepermits",
                        kind: t.kind,
                        site: t.site,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        remarks: t.remarks
                    };
                    return i.default.execute(r)
                },
                addPermitDependency: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.addpermitdependency",
                        registrationNumber: t.registrationNumber,
                        dependencyRegistrationNumber: t.dependencyRegistrationNumber,
                        type: t.type,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                },
                removePermitDependency: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.removepermitdependency",
                        registrationNumber: t.registrationNumber,
                        dependencyRegistrationNumber: t.dependencyRegistrationNumber,
                        certificateVersion: t.certificateVersion
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {
                getDependencies: function e(t, r) {
                    var n = new s.default("api/certificates/{registrationNumber}/dependencies", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    75: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getGasMeasurementsPrintout: function e(t, r) {
                    var n = new s.default("api/print/gasmeasurements/{culture}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    76: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getResources: function e(t, r) {
                    var n = new s.default("api/resources/{Culture}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    77: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                searchCertificates: function e(t, r) {
                    var n = new s.default("api/search/certificates", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                }
            }
        };
        t.default = d
    },
    78: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {
                signCertificate: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.signcertificate",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        signAsGuestUser: t.signAsGuestUser,
                        guest: t.guest,
                        certificateVersion: t.certificateVersion,
                        period: t.period,
                        fieldData: t.fieldData
                    };
                    return i.default.execute(r)
                },
                suspendPermit: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.suspendpermit",
                        registrationNumber: t.registrationNumber,
                        remarks: t.remarks,
                        signatureType: t.signatureType,
                        userName: t.userName,
                        password: t.password,
                        authenticationToken: t.authenticationToken,
                        signAsGuestUser: t.signAsGuestUser,
                        certificateVersion: t.certificateVersion,
                        period: t.period,
                        fieldData: t.fieldData,
                        reason: t.reason
                    };
                    return i.default.execute(r)
                },
                verifySignature: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.verifysignature",
                        registrationNumber: t.registrationNumber,
                        certificateVersion: t.certificateVersion,
                        signatureType: t.signatureType,
                        periodStartAt: t.periodStartAt,
                        periodEndAt: t.periodEndAt
                    };
                    return i.default.execute(r)
                },
                verifyCredentials: function e(t) {
                    var r = {
                        commandId: c.default.v4().toString(),
                        commandName: "evision.permitvision.client.verifycredentials",
                        userName: t.userName,
                        password: t.password
                    };
                    return i.default.execute(r)
                }
            },
            Queries: {}
        };
        t.default = d
    },
    79: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getVersion: function e(t) {
                    var r = "api/sync/version";
                    return a.default.query(r, t)
                },
                getDeployment: function e(t) {
                    var r = "api/sync/deployment";
                    return a.default.query(r, t)
                },
                getSequenceNumber: function e(t, r) {
                    var n = new s.default("api/sync/deployment/{DeploymentCode}/sequence/{SequenceType}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                submitSequenceNumber: function e(t, r) {
                    var n = new s.default("api/sync/deployment/{DeploymentCode}/sequence/{SequenceType}/number/{SequenceNumber}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getMaxCheckpoint: function e(t) {
                    var r = "api/sync/deployment/checkpoint";
                    return a.default.query(r, t)
                },
                getLastProcessedCheckpointNumber: function e(t, r) {
                    var n = new s.default("api/sync/deployment/{DeploymentCode}/checkpoint", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                updateSynchronizationState: function e(t, r) {
                    var n = new s.default("api/sync/deployment/{DeploymentCode}/syncstate", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                countCommitsForSite: function e(t, r) {
                    var n = new s.default("api/sync/commits/site/count", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                downloadCommits: function e(t, r) {
                    var n = new s.default("api/sync/commits/download", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                uploadCommits: function e(t, r) {
                    var n = new s.default("api/sync/deployment/{DeploymentCode}/commits/upload", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getFilesToDownload: function e(t, r) {
                    var n = new s.default("api/sync/files/", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                downloadSystemFile: function e(t, r) {
                    var n = new s.default("api/sync/files/{FileType}/{FileName}", t, "get").buildUrl();
                    return a.default.query(n, r)
                },
                downloadFlocFile: function e(t, r) {
                    var n = new s.default("api/sync/flocs/{SiteCode}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getLocationGraphicImages: function e(t, r) {
                    var n = new s.default("api/sync/LocationGraphicImages/{SiteCode}", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                downloadLocationGraphicImage: function e(t, r) {
                    var n = new s.default("api/sync/LocationGraphicImage/{Id}", t, "get").buildUrl();
                    return a.default.query(n, r)
                }
            }
        };
        t.default = d
    },
    80: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(23);
        var a = f(n);
        var o = r(37);
        var i = f(o);
        var u = r(38);
        var s = f(u);
        var l = r(42);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = {
            Commands: {},
            Queries: {
                getWorkLocations: function e(t, r) {
                    var n = new s.default("api/worklocations", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                },
                getWorkLocationGroups: function e(t, r) {
                    var n = new s.default("api/worklocations/group", t, "post").buildUrl();
                    return a.default.post(n, t, r)
                }
            }
        };
        t.default = d
    },
    81: function(e, t, r) {
        e.exports = r(2)(583)
    },
    82: function(e, t, r) {
        e.exports = r(2)(34)
    },
    83: function(e, t, r) {
        e.exports = r(2)(1166)
    },
    84: function(e, t, r) {
        e.exports = r(2)(364)
    },
    86: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(6);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = a.default.createActions({
            loadForKind: {
                asyncResult: false
            },
            loadForModule: {
                asyncResult: false
            }
        });
        t.default = i
    },
    87: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(6);
        var a = f(n);
        var o = r(50);
        var i = f(o);
        var u = r(88);
        var s = f(u);
        var l = r(86);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = a.default.createStore({
            listenables: [c.default],
            init: function e() {
                this._state = {
                    primaryMenuButtons: [],
                    secondaryMenuButtons: [],
                    tertiaryMenuButtons: []
                }
            },
            onLoadForModule: function e(t) {
                this._state.primaryMenuButtons = i.default.getModuleFor(t).workspaces.filter(function(e) {
                    return e.displayInMenu
                }).map(function(e) {
                    var t = "PermitVision.Label_MenuButton_" + e.kind + "_Text";
                    var r = "icon-kinds-" + e.kind;
                    var n = "./permitvision/workspace/#/" + e.kind + "/" + e.workflowSteps[0].name;
                    return new s.default(t, r, n)
                });
                this._state.secondaryMenuButtons = i.default.getWorkItemKind(t).workspace.commandBarButtons.map(function(e) {
                    var r = "PermitVision.CommandDefinition_" + e.id;
                    var n = "icon-buttons-" + e.command;
                    var a = e.command.toLowerCase() === "showsignaturebox" ? "permitvision/" + e.command + "/#/" + t + "/" + e.id : "permitvision/" + e.command + "/#/" + t;
                    return new s.default(r, n, a)
                });
                this._setTertiaryItems(t);
                this.trigger(this._state)
            },
            _setTertiaryItems: function e(t) {
                var r = i.default.getActiveSearchKinds().map(function(e) {
                    var r = e.workspace.kind === t;
                    var n = "PermitVision.Label_MenuButton_" + e.workspace.kind + "_Text";
                    var a = "./permitvision/SearchCertificates/#/" + e.workspace.kind;
                    return new s.default(n, "", a, r)
                });
                this._state.tertiaryMenuButtons = r
            },
            onLoadForKind: function e(t) {
                this._state.primaryMenuButtons = i.default.getWorkItemKind(t).workspace.workflowSteps.map(function(e) {
                    var r = "PermitVision.CommandDefinition_" + t + "_" + e.name;
                    var n = "icon-buttons-" + t + "_" + e.name;
                    var a = "permitvision/workspace/#/" + t + "/" + e.name;
                    return new s.default(r, n, a)
                });
                this._state.secondaryMenuButtons = i.default.getWorkItemKind(t).workspace.commandBarButtons.map(function(e) {
                    var r = "PermitVision.CommandDefinition_" + e.id;
                    var n = "icon-buttons-" + e.command;
                    var a = e.command.toLowerCase() === "showsignaturebox" ? "permitvision/" + e.command + "/#/" + t + "/" + e.id : "permitvision/" + e.command + "/#/" + t;
                    return new s.default(r, n, a)
                });
                this._setTertiaryItems(t);
                this.trigger(this._state)
            },
            getInitialState: function e() {
                return this._state
            },
            reset: function e() {
                this.init()
            }
        });
        t.default = d
    },
    88: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });

        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var n = function e(t, n, a, o, i) {
            r(this, e);
            this.resourceKey = t;
            this.cssClass = n;
            this.href = a;
            this.isActive = o || false;
            this.onClick = i
        };
        t.default = n
    },
    89: function(e, t, r) {
        "use strict";
        var n = r(81);
        var a = p(n);
        var o = r(90);
        var i = p(o);
        var u = r(92);
        var s = p(u);
        var l = r(95);
        var c = p(l);
        var f = r(99);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var v = a.default.createClass({
            displayName: "Header",
            propTypes: {
                titleResoucekey: a.default.PropTypes.string,
                showQuickMenu: a.default.PropTypes.bool,
                onMenuButtonClicked: a.default.PropTypes.func,
                primaryMenuButtons: a.default.PropTypes.array,
                secondaryMenuButtons: a.default.PropTypes.array,
                tertiaryMenuButtons: a.default.PropTypes.array,
                children: a.default.PropTypes.oneOfType([a.default.PropTypes.node, a.default.PropTypes.array]),
                resourceComponentName: a.default.PropTypes.string.isRequired
            },
            getDefaultProps: function e() {
                return {
                    primaryMenuButtons: [],
                    secondaryMenuButtons: [],
                    tertiaryMenuButtons: [],
                    hideHomeButton: false
                }
            },
            getInitialState: function e() {
                return {
                    quickMenuExpanded: false
                }
            },
            _onQuickMenuOpenButtonClicked: function e() {
                this.setState({
                    quickMenuExpanded: true
                })
            },
            _onQuickMenuButtonClicked: function e(t) {
                this.props.onMenuButtonClicked(t);
                this.setState({
                    quickMenuExpanded: false
                })
            },
            _onQuickMenuClosed: function e() {
                this.setState({
                    quickMenuExpanded: false
                })
            },
            onHomeClicked: function e() {
                (0, i.default)()
            },
            render: function e() {
                var t;
                var r;
                var n = this.props.primaryMenuButtons.length + this.props.secondaryMenuButtons.length;
                if (n) {
                    t = a.default.createElement(c.default, {
                        isExpanded: this.state.quickMenuExpanded,
                        primaryButtons: this.props.primaryMenuButtons,
                        secondaryButtons: this.props.secondaryMenuButtons,
                        tertiaryButtons: this.props.tertiaryMenuButtons,
                        onClose: this._onQuickMenuClosed
                    });
                    r = a.default.createElement(s.default, {
                        component: "button",
                        type: "button",
                        className: "btn-quickmenu",
                        onClick: this._onQuickMenuOpenButtonClicked,
                        attributes: {
                            title: this.props.resourceComponentName + ".Label_QuickMenuBtnTitle"
                        }
                    }, a.default.createElement("span", {
                        className: "glyphicon glyphicon-menu-hamburger"
                    }), a.default.createElement(s.default, {
                        className: "page-title",
                        content: this.props.titleResoucekey
                    }))
                }
                if (!r && !this.props.hideHomeButton) {
                    r = a.default.createElement(s.default, {
                        component: "button",
                        className: "btn-quickmenu",
                        onClick: this.onHomeClicked,
                        attributes: {
                            title: this.props.resourceComponentName + ".Label_QuickMenuBtnTitle"
                        }
                    }, a.default.createElement("span", {
                        className: "glyphicon glyphicon-home"
                    }), a.default.createElement(s.default, {
                        className: "page-title",
                        content: this.props.titleResoucekey
                    }))
                }
                return a.default.createElement("header", {
                    id: "header",
                    className: "page-header"
                }, t, r, a.default.createElement("div", {
                    className: "page-header-right"
                }, this.props.children, a.default.createElement(d.default, {
                    resourceComponentName: this.props.resourceComponentName
                })))
            }
        });
        e.exports = v
    },
    90: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.mockWindow = l;
        t.default = c;
        var n = r(46);
        var a = u(n);
        var o = r(91);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = window;

        function l(e) {
            s = e
        }

        function c() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var t = s.document.querySelector("head base");
            var r = t ? t.href : "";
            var n = i.default.getRegionUrl(e);
            var o = "" + r + (0, a.default)() + n;
            if (o[o.length - 1] !== "/") {
                o += "/"
            }
            s.location.href = o
        }
    },
    91: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = window;
        var n = /region\/([\w-]+)\//;

        function a(e) {
            if (!e || e === "/") {
                return null
            }
            var t = n.exec(e);
            return t ? t[1] : null
        }
        t.default = {
            mockWindow: function e(t) {
                r = t
            },
            getAvailableRegions: function e() {
                return (r.availableRegions || []).filter(function(e) {
                    return e && e.toLocaleLowerCase() !== "global"
                })
            },
            regionSupportEnabled: function e() {
                return this.getAvailableRegions().length > 0
            },
            getRegionUrl: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                t = t || this.tryGetCurrentRegion();
                return t ? "region/" + t : ""
            },
            tryGetCurrentRegion: function e() {
                return a(r.location.pathname) || r.defaultRegion || null
            }
        }
    },
    92: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(93);
        var u = c(i);
        var s = r(94);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            var r = {};
            for (var n in e) {
                if (t.indexOf(n) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
                r[n] = e[n]
            }
            return r
        }

        function d(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function p(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function v(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var m = function(e) {
            v(t, e);

            function t() {
                d(this, t);
                return p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            n(t, [{
                key: "shouldComponentUpdate",
                value: function e(t) {
                    return !(0, l.default)(this.props, t)
                }
            }, {
                key: "_searchResource",
                value: function e(t, r, n) {
                    var a = u.default.translate(t, r);
                    if (n && a.indexOf("missing translation:") !== -1) {
                        if (n[0] === ":") {
                            a = u.default.translate(n.substring(1, n.length))
                        } else {
                            a = n
                        }
                    }
                    return a
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props,
                        r = t.with,
                        n = t.fallback,
                        a = t.content,
                        i = t.component,
                        s = t.attributes,
                        l = f(t, ["with", "fallback", "content", "component", "attributes"]);
                    if (s) {
                        Object.keys(s).forEach(function(e) {
                            l[e] = u.default.translate(s[e])
                        })
                    }
                    if (!a) {
                        return o.default.createElement(i, l, this.props.children)
                    }
                    var c = this._searchResource(a, r, n);
                    return o.default.createElement(i, l, c)
                }
            }]);
            return t
        }(o.default.Component);
        m.propTypes = {
            content: o.default.PropTypes.string,
            component: o.default.PropTypes.oneOfType([o.default.PropTypes.string, o.default.PropTypes.func]),
            with: o.default.PropTypes.object,
            attributes: o.default.PropTypes.object,
            fallback: o.default.PropTypes.string,
            children: o.default.PropTypes.node
        };
        m.defaultProps = {
            component: "span",
            with: {}
        };
        t.default = m
    },
    93: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(8);
        var a = i(n);
        var o = r(24);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        if (!a.default.translateOrig) {
            a.default.translateOrig = a.default.translate.bind(a.default);
            a.default.translate = function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
                    r[n - 1] = arguments[n]
                }
                try {
                    return a.default.translateOrig.apply(a.default, [e].concat(r))
                } catch (t) {
                    var i = "translation failed: " + e + " " + t.message;
                    (0, o.addGlobalError)(i, false);
                    return i
                }
            }
        }
        t.default = a.default
    },
    94: function(e, t, r) {
        e.exports = r(2)(392)
    },
    95: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = y(o);
        var u = r(96);
        var s = y(u);
        var l = r(97);
        var c = y(l);
        var f = r(98);
        var d = y(f);
        var p = r(90);
        var v = y(p);
        var m = r(92);
        var h = y(m);

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function g(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function b(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function _(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var w = function(e) {
            _(t, e);

            function t() {
                var e;
                var r, n, a;
                g(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = b(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onOverlayClicked = function() {
                    n.props.onClose()
                }, n._onCloseButtonClicked = function() {
                    n.props.onClose()
                }, r), b(n, a)
            }
            a(t, [{
                key: "_navigateToMainMenu",
                value: function e() {
                    (0, v.default)()
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var r = this.props,
                        a = r.primaryButtons,
                        o = r.secondaryButtons,
                        u = r.tertiaryButtons,
                        l = r.isExpanded;
                    var f = (0, s.default)("quick-navigation", {
                        "is-active": this.props.isExpanded
                    });
                    var p = l ? i.default.createElement("div", {
                        className: "quick-menu-overlay",
                        onClick: this._onOverlayClicked
                    }) : null;
                    var v = a.map(function(e) {
                        return i.default.createElement(c.default, n({}, e, {
                            key: e.resourceKey,
                            onClick: t.props.onClose
                        }))
                    });
                    var m = o.map(function(e) {
                        return i.default.createElement(c.default, n({}, e, {
                            key: e.resourceKey,
                            onClick: t.props.onClose
                        }))
                    });
                    var y = u.map(function(e) {
                        return i.default.createElement(d.default, n({}, e, {
                            key: e.resourceKey,
                            isActive: e.isActive,
                            onClick: t.props.onClose
                        }))
                    });
                    return i.default.createElement("div", {
                        className: "quick-menu"
                    }, i.default.createElement("nav", {
                        className: f
                    }, i.default.createElement("div", {
                        className: "top-menu"
                    }, i.default.createElement("a", {
                        onClick: this._navigateToMainMenu
                    }, i.default.createElement("i", {
                        className: "glyphicon glyphicon-circle-arrow-left"
                    }), i.default.createElement(h.default, {
                        content: "PermitVision.Label_BackToMainMenu"
                    }))), i.default.createElement("button", {
                        className: "quick-menu-close-btn glyphicon glyphicon-remove",
                        onClick: this._onCloseButtonClicked
                    }), v.length ? i.default.createElement("ul", {
                        className: "quick-menu-list quick-menu-shortcuts primary"
                    }, v) : null, m.length ? i.default.createElement("ul", {
                        className: "quick-menu-list quick-menu-shortcuts secondary"
                    }, m) : null, y.length ? i.default.createElement("ul", {
                        className: "quick-menu-list quick-menu-shortcuts search"
                    }, y) : null), p)
                }
            }]);
            return t
        }(i.default.PureComponent);
        w.propTypes = {
            isExpanded: i.default.PropTypes.bool,
            onClose: i.default.PropTypes.func.isRequired,
            primaryButtons: i.default.PropTypes.array,
            secondaryButtons: i.default.PropTypes.array,
            tertiaryButtons: i.default.PropTypes.array
        };
        w.defaultProps = {
            isExpanded: false,
            primaryButtons: [],
            secondaryButtons: [],
            tertiaryButtons: []
        };
        t.default = w
    },
    96: function(e, t, r) {
        e.exports = r(2)(9)
    },
    97: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(92);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "ShortcutItem",
            propTypes: {
                onClick: a.default.PropTypes.func,
                resourceKey: a.default.PropTypes.string.isRequired,
                cssClass: a.default.PropTypes.string.isRequired,
                href: a.default.PropTypes.string
            },
            render: function e() {
                var t = this.props.href || "#";
                var r;
                var n = a.default.createElement("div", {
                    className: "menu-btn menu-btn-alt"
                }, a.default.createElement("div", {
                    className: "menu-btn-icon " + this.props.cssClass
                }), a.default.createElement(i.default, {
                    content: this.props.resourceKey,
                    className: "menu-btn-title"
                }));
                if (t && t !== "#") {
                    r = a.default.createElement("a", {
                        onClick: this.props.onClick,
                        href: t
                    }, n)
                } else {
                    r = a.default.createElement("a", {
                        onClick: this.props.onClick
                    }, n)
                }
                return a.default.createElement("li", {
                    className: "shortcut-item",
                    "data-shortcut-key": this.props.resourceKey.split(".")[1]
                }, r)
            }
        });
        t.default = s
    },
    98: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(92);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "MiniShortcutItem",
            propTypes: {
                onClick: a.default.PropTypes.func,
                resourceKey: a.default.PropTypes.string.isRequired,
                href: a.default.PropTypes.string.isRequired,
                isActive: a.default.PropTypes.bool.isRequired
            },
            render: function e() {
                var t = this.props.href || "#";
                var r;
                var n = a.default.createElement("div", {
                    className: "media"
                }, a.default.createElement("div", {
                    className: "media-left"
                }, a.default.createElement("div", {
                    className: "search-icon-small icon-buttons-SearchCertificates_Small"
                })), a.default.createElement(i.default, {
                    content: this.props.resourceKey,
                    className: "media-body mini-shortcut-title"
                }));
                if (t && t !== "#") {
                    r = a.default.createElement("a", {
                        className: "mini-shortcut-link",
                        onClick: this.props.onClick,
                        href: t
                    }, n)
                } else {
                    r = a.default.createElement("a", {
                        className: "mini-shortcut-link",
                        onClick: this.props.onClick
                    }, n)
                }
                var o = "mini-shortcut-item";
                o += this.props.isActive ? " is-active" : "";
                return a.default.createElement("li", {
                    className: o,
                    "data-shortcut-key": this.props.resourceKey.split(".")[1]
                }, r)
            }
        });
        t.default = s
    },
    99: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = y(a);
        var i = r(92);
        var u = y(i);
        var s = r(93);
        var l = y(s);
        var c = r(100);
        var f = h(c);
        var d = r(44);
        var p = y(d);
        var v = r(101);
        var m = y(v);

        function h(e) {
            if (e && e.__esModule) {
                return e
            } else {
                var t = {};
                if (e != null) {
                    for (var r in e) {
                        if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
                    }
                }
                t.default = e;
                return t
            }
        }

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function g(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function b(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function _(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var w = function(e) {
            _(t, e);

            function t(e) {
                g(this, t);
                var r = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    showChangePassword: false
                };
                r._onChangePassword = r._onChangePassword.bind(r);
                r._closeChangePasswordModal = r._closeChangePasswordModal.bind(r);
                r._onLogOut = r._onLogOut.bind(r);
                return r
            }
            n(t, [{
                key: "_onChangePassword",
                value: function e() {
                    this.setState({
                        showChangePassword: true
                    })
                }
            }, {
                key: "_closeChangePasswordModal",
                value: function e() {
                    this.setState({
                        showChangePassword: false
                    })
                }
            }, {
                key: "_onLogOut",
                value: function e() {
                    f.logOut().then(function() {
                        window.location = document.getElementsByTagName("base")[0].href
                    })
                }
            }, {
                key: "render",
                value: function e() {
                    var t = void 0,
                        r = void 0,
                        n = void 0;
                    var a = p.default.getCurrentUser();
                    if (a) {
                        r = a.fullName;
                        n = a.userName && a.userName.lastIndexOf("VisionControl\\") === 0
                    }
                    if (n) {
                        t = o.default.createElement(u.default, {
                            component: "button",
                            className: "btn-username btn btn-link header-btn",
                            "data-role": "currentloggedinuser",
                            attributes: {
                                title: this.props.resourceComponentName + ".label_changepassword"
                            },
                            onClick: this._onChangePassword
                        }, o.default.createElement("span", {
                            className: "header-btn-icon user-avatar glyphicon glyphicon-user"
                        }), o.default.createElement("p", {
                            className: "text-truncate fullname"
                        }, r))
                    } else {
                        t = o.default.createElement("button", {
                            "data-role": "currentloggedinuser",
                            className: "btn-no-interaction btn btn-link header-btn"
                        }, o.default.createElement("span", {
                            className: "header-btn-icon user-avatar glyphicon glyphicon-user"
                        }), o.default.createElement("p", {
                            className: "text-truncate fullname"
                        }, r))
                    }
                    return o.default.createElement("div", {
                        className: "user-status"
                    }, t, o.default.createElement("button", {
                        type: "button",
                        className: "btn-logout btn btn-link header-btn",
                        title: l.default.translate(this.props.resourceComponentName + ".Label_logout"),
                        onClick: this._onLogOut
                    }, o.default.createElement("span", {
                        className: "glyphicon glyphicon-log-out header-btn-icon"
                    }), l.default.translate(this.props.resourceComponentName + ".Label_logout")), n ? o.default.createElement(m.default, {
                        resourceComponentName: this.props.resourceComponentName,
                        canCancel: !a.passwordChangeRequired,
                        show: this.state.showChangePassword || a.passwordChangeRequired,
                        onHide: this._closeChangePasswordModal
                    }) : null)
                }
            }]);
            return t
        }(o.default.Component);
        w.propTypes = {
            resourceComponentName: o.default.PropTypes.string.isRequired
        };
        t.default = w
    },
    100: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.isInRoleForSite = f;
        t.isInRoleForAnySite = d;
        t.logOut = p;
        t.logIn = v;
        var n = r(23);
        var a = r(9);
        var o = c(a);
        var i = r(32);
        var u = c(i);
        var s = r(46);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t, r) {
            if (!r) {
                return false
            }
            if (!e.roles) {
                return false
            }
            var n = t.length === 1 && t[0] === "*";
            var a = e.roles.filter(function(e) {
                return (n || u.default.includes(t, e.roleCode)) && e.appliesToSiteCode === r.code
            });
            return a.length > 0
        }

        function d(e, t) {
            if (!e) {
                return false
            }
            return e.roles.filter(function(e) {
                return u.default.includes(t, e.roleCode)
            }).length > 0
        }

        function p() {
            return (0, n.query)((0, l.default)() + "logout")
        }

        function v(e, t, r) {
            return o.default.post("login", {
                userName: r + "\\" + e,
                password: t
            })
        }
        t.default = {
            isInRoleForSite: f,
            isInRoleForAnySite: d,
            logOut: p,
            logIn: v
        }
    },
    101: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = k(o);
        var u = r(102);
        var s = r(93);
        var l = k(s);
        var c = r(92);
        var f = k(c);
        var d = r(103);
        var p = k(d);
        var v = r(104);
        var m = k(v);
        var h = r(105);
        var y = k(h);
        var g = r(106);
        var b = k(g);
        var _ = r(45);
        var w = k(_);
        var P = r(44);
        var C = k(P);

        function k(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function T(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function E(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function O(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var N = function(e) {
            O(t, e);

            function t(e) {
                T(this, t);
                var r = E(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    validationErrors: [],
                    savingInProgress: false,
                    model: {
                        isValid: false,
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                    }
                };
                r._onModalDismiss = r._onModalDismiss.bind(r);
                r._onChangePasswordClick = r._onChangePasswordClick.bind(r);
                r._notEmptyValidation = r._notEmptyValidation.bind(r);
                r._onFieldChange = r._onFieldChange.bind(r);
                r._onKeyPress = r._onKeyPress.bind(r);
                return r
            }
            a(t, [{
                key: "componentWillReceiveProps",
                value: function e(t) {
                    if (!this.props.show && t.show) {
                        this.setState({
                            validationErrors: [],
                            savingInProgress: false,
                            model: {
                                isValid: false,
                                currentPassword: "",
                                newPassword: "",
                                confirmPassword: ""
                            }
                        })
                    }
                }
            }, {
                key: "shouldComponentUpdate",
                value: function e(t) {
                    return t.show || this.props.show
                }
            }, {
                key: "_onModalDismiss",
                value: function e() {
                    this.props.onHide()
                }
            }, {
                key: "_onChangePasswordClick",
                value: function e() {
                    var t = this;
                    var r = [];
                    !this.state.model.currentPassword && r.push({
                        code: "Label_CurrentPasswordFieldRequiredValidation"
                    });
                    !this.state.model.newPassword && r.push({
                        code: "Label_NewPasswordFieldRequiredValidation"
                    });
                    !this.state.model.confirmPassword && r.push({
                        code: "Label_ConfirmNewPasswordFieldRequiredValidation"
                    });
                    this.state.model.newPassword !== this.state.model.confirmPassword && r.push({
                        code: "Label_ConfirmNewPasswordValidation"
                    });
                    this.state.model.currentPassword === this.state.model.newPassword && this.state.model.currentPassword === this.state.model.confirmPassword && r.push({
                        code: "Label_ConfirmNewIsNotSameAsCurrentPasswordValidation"
                    });
                    if (!r.length) {
                        this.setState({
                            validationErrors: r,
                            savingInProgress: true
                        });
                        var n = {
                            currentPassword: this.state.model.currentPassword,
                            newPassword: this.state.model.newPassword
                        };
                        w.default.Commands.changePassword({
                            request: n
                        }).then(function() {
                            w.default.Queries.getCurrentUser().then(function(e) {
                                C.default.setCurrentUser(e);
                                t.props.onHide()
                            })
                        }, function(e) {
                            if (e.validationErrors && e.validationErrors.length) {
                                t.setState({
                                    validationErrors: e.validationErrors,
                                    savingInProgress: false
                                })
                            }
                        })
                    } else {
                        this.setState({
                            validationErrors: r
                        })
                    }
                }
            }, {
                key: "_notEmptyValidation",
                value: function e(t) {
                    return t.currentPassword && t.newPassword && t.confirmPassword
                }
            }, {
                key: "_onFieldChange",
                value: function e(t, r) {
                    var a = n({}, this.state.model);
                    a[t] = r;
                    a.isValid = this._notEmptyValidation(a);
                    this.setState({
                        model: a
                    })
                }
            }, {
                key: "_onKeyPress",
                value: function e(t) {
                    var r = 13;
                    if (t.charCode === r) {
                        this._onChangePasswordClick()
                    }
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.state.model;
                    var r = i.default.createElement("div", null, i.default.createElement("i", {
                        className: "glyphicon glyphicon-refresh animation-spinning"
                    }), " ", i.default.createElement(f.default, {
                        content: this.props.resourceComponentName + ".Label_Saving"
                    }));
                    if (!this.state.savingInProgress) {
                        r = i.default.createElement(f.default, {
                            content: this.props.resourceComponentName + ".Label_SaveButton"
                        })
                    }
                    return i.default.createElement(u.Modal, {
                        onHide: this.props.onHide,
                        keyboard: this.props.canCancel,
                        show: this.props.show,
                        className: "changepassword-modal"
                    }, i.default.createElement(u.Modal.Header, {
                        closeButton: this.props.canCancel
                    }, i.default.createElement(u.Modal.Title, null, i.default.createElement(f.default, {
                        content: this.props.resourceComponentName + ".Label_ChangeOwnPasswordTitle"
                    }))), i.default.createElement(u.Modal.Body, {
                        className: "form-horizontal"
                    }, i.default.createElement(p.default, {
                        validationErrors: this.state.validationErrors,
                        resourceComponentName: this.props.resourceComponentName
                    }), this.props.canCancel ? null : i.default.createElement(u.AlertBox, {
                        message: l.default.translate("PermitVision.Label_EnforcePasswordChange"),
                        type: "info"
                    }), i.default.createElement(m.default, {
                        onChange: this._onFieldChange,
                        resourceComponentName: this.props.resourceComponentName,
                        value: t.currentPassword
                    }), i.default.createElement(y.default, {
                        onChange: this._onFieldChange,
                        resourceComponentName: this.props.resourceComponentName,
                        value: t.newPassword
                    }), i.default.createElement(b.default, {
                        onChange: this._onFieldChange,
                        resourceComponentName: this.props.resourceComponentName,
                        value: t.confirmPassword,
                        onKeyPress: this._onKeyPress
                    })), i.default.createElement(u.Modal.Footer, null, i.default.createElement("button", {
                        className: "btn btn-primary changepassword",
                        disabled: !t.isValid || this.state.savingInProgress,
                        onClick: this._onChangePasswordClick
                    }, r), this.props.canCancel ? i.default.createElement("button", {
                        className: "btn btn-default btnModalDismiss",
                        onClick: this._onModalDismiss
                    }, i.default.createElement(f.default, {
                        content: this.props.resourceComponentName + ".Label_CancelButton"
                    })) : null))
                }
            }]);
            return t
        }(i.default.Component);
        N.propTypes = {
            onHide: i.default.PropTypes.func.isRequired,
            show: i.default.PropTypes.bool.isRequired,
            resourceComponentName: i.default.PropTypes.string.isRequired,
            canCancel: i.default.PropTypes.bool
        };
        N.defaultProps = {
            canCancel: true
        };
        t.default = N
    },
    102: function(e, t, r) {
        e.exports = r(2)(582)
    },
    103: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = p(n);
        var o = r(92);
        var i = p(o);
        var u = r(93);
        var s = p(u);
        var l = r(96);
        var c = p(l);
        var f = r(32);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var v = a.default.createClass({
            displayName: "ValidationSummary",
            propTypes: {
                validationErrors: a.default.PropTypes.array,
                resourceComponentName: a.default.PropTypes.string.isRequired
            },
            _renderValidationError: function e(t, r) {
                var n = this;
                var o = {};
                var u = function e(t) {
                    return s.default.translate(n.props.resourceComponentName + "." + t, {
                        fallback: t
                    })
                };
                var l = t.code;
                if (t.formatParameters) {
                    for (var c in t.formatParameters) {
                        if ({}.hasOwnProperty.call(t.formatParameters, c)) {
                            var f = t.formatParameters[c];
                            var d = " ";
                            if (f.values && f.values.length) {
                                d = f.values.map(u).join(", ")
                            } else if (f.value) {
                                d = u((f.value + "").replace("%", "%%"))
                            }
                            o[f.key] = d
                        }
                    }
                }
                return a.default.createElement("li", {
                    key: r,
                    className: "validation-error"
                }, a.default.createElement(i.default, {
                    content: this.props.resourceComponentName + "." + l,
                    fallback: t.code,
                    with: o
                }))
            },
            render: function e() {
                var t = this.props.validationErrors || [];
                if (!t.length) {
                    return a.default.createElement("span", null)
                }
                return a.default.createElement("div", {
                    className: "alert alert-warning"
                }, a.default.createElement("span", {
                    className: "glyphicon glyphicon-exclamation-sign"
                }), a.default.createElement("ul", {
                    className: (0, c.default)("alert-content", "alert-content-list", "alert-count-" + t.length)
                }, d.default.uniqBy(t, JSON.stringify).map(this._renderValidationError)))
            }
        });
        t.default = v
    },
    104: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(92);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "CurrentPassword",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                resourceComponentName: a.default.PropTypes.string.isRequired,
                value: a.default.PropTypes.string.isRequired
            },
            shouldComponentUpdate: function e(t) {
                return t.value !== this.props.value
            },
            _onChange: function e(t) {
                this.props.onChange("currentPassword", t.target.value)
            },
            render: function e() {
                return a.default.createElement("div", {
                    className: "form-group"
                }, a.default.createElement("div", {
                    className: "col-4 control-label is-required"
                }, a.default.createElement(i.default, {
                    content: this.props.resourceComponentName + ".Label_CurrentPassword",
                    component: "label"
                })), a.default.createElement("div", {
                    className: "col-8"
                }, a.default.createElement("input", {
                    "data-role": "currentpassword",
                    required: true,
                    value: this.props.value,
                    maxLength: "255",
                    type: "password",
                    autoComplete: "off",
                    className: "form-control",
                    onInput: this._onChange,
                    onChange: function e() {}
                })))
            }
        });
        t.default = s
    },
    105: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(92);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "NewPassword",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                resourceComponentName: a.default.PropTypes.string.isRequired,
                value: a.default.PropTypes.string.isRequired
            },
            shouldComponentUpdate: function e(t) {
                return t.value !== this.props.value
            },
            _onChange: function e(t) {
                this.props.onChange("newPassword", t.target.value)
            },
            render: function e() {
                return a.default.createElement("div", {
                    className: "form-group"
                }, a.default.createElement("div", {
                    className: "col-4 control-label is-required"
                }, a.default.createElement(i.default, {
                    content: this.props.resourceComponentName + ".Label_NewPassword",
                    component: "label"
                })), a.default.createElement("div", {
                    className: "col-8"
                }, a.default.createElement("input", {
                    value: this.props.value,
                    required: true,
                    "data-role": "newpassword",
                    maxLength: "255",
                    type: "password",
                    autoComplete: "off",
                    className: "form-control",
                    onInput: this._onChange,
                    onChange: function e() {}
                })))
            }
        });
        t.default = s
    },
    106: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = s(a);
        var i = r(92);
        var u = s(i);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var d = function(e) {
            f(t, e);

            function t(e) {
                l(this, t);
                var r = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("confirmPassword", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", {
                        className: "form-group"
                    }, o.default.createElement("div", {
                        className: "col-4 control-label is-required"
                    }, o.default.createElement(u.default, {
                        content: this.props.resourceComponentName + ".Label_ConfirmNewPassword",
                        component: "label"
                    })), o.default.createElement("div", {
                        className: "col-8"
                    }, o.default.createElement("input", {
                        type: "password",
                        autoComplete: "off",
                        className: "form-control",
                        "data-role": "confirmpassword",
                        maxLength: "255",
                        required: true,
                        value: this.props.value,
                        onInput: this._onChange,
                        onKeyPress: this.props.onKeyPress,
                        onChange: function e() {}
                    })))
                }
            }]);
            return t
        }(o.default.PureComponent);
        d.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            resourceComponentName: o.default.PropTypes.string.isRequired,
            value: o.default.PropTypes.string.isRequired,
            onKeyPress: o.default.PropTypes.func
        };
        d.defaultProps = {
            onKeyPress: function e() {}
        };
        t.default = d
    },
    109: function(e, t, r) {
        "use strict";
        var n = r(81);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = a.default.createClass({
            displayName: "SelectDropdown",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string,
                children: a.default.PropTypes.node.isRequired,
                id: a.default.PropTypes.string,
                className: a.default.PropTypes.string,
                wrapperClassName: a.default.PropTypes.string,
                name: a.default.PropTypes.string,
                required: a.default.PropTypes.bool,
                title: a.default.PropTypes.string,
                disabled: a.default.PropTypes.bool,
                onClick: a.default.PropTypes.func,
                isInvalid: a.default.PropTypes.bool
            },
            getDefaultProps: function e() {
                return {
                    id: "",
                    className: "",
                    wrapperClassName: "",
                    name: "",
                    required: false,
                    value: ""
                }
            },
            render: function e() {
                var t = "form-control " + this.props.className;
                var r = "select-dropdown " + (this.props.isInvalid ? "has-feedback" : "") + " " + this.props.wrapperClassName;
                var n = {
                    id: "" + this.props.id,
                    name: "" + this.props.name,
                    onChange: this.props.onChange,
                    className: t,
                    required: this.props.required,
                    title: this.props.title,
                    disabled: this.props.disabled,
                    onClick: this.props.onClick
                };
                if (this.props.value !== null) {
                    n.value = this.props.value
                }
                return a.default.createElement("div", {
                    className: r
                }, a.default.createElement("select", n, this.props.children), this.props.isInvalid ? a.default.createElement("span", {
                    className: "glyphicon glyphicon-exclamation-sign form-control-feedback"
                }) : null)
            }
        });
        e.exports = i
    },
    113: function(e, t, r) {
        var n = r(114);
        var a = r(115);
        e.exports = {
            init: function() {
                this._state = {
                    status: a.INITIAL
                }
            },
            pending: function(e) {
                this._updateState(e);
                this._triggerOnStatus(a.PENDING)
            },
            ready: function(e) {
                this._updateState(e);
                this._triggerOnStatus(a.READY)
            },
            failed: function(e) {
                this._updateState(e);
                this._triggerOnStatus(a.FAILED)
            },
            setStatus: function(e) {
                this._triggerOnStatus(e)
            },
            _triggerOnStatus: function(e) {
                this._state.status = e;
                this.trigger(this._state)
            },
            _updateState: function(e) {
                if (e) {
                    n(this._state, e)
                }
            },
            resetToInitialStatus: function() {
                this._state.status = a.INITIAL
            },
            statusCodes: a
        }
    },
    114: function(e, t) {
        "use strict";
        var r = Object.prototype.propertyIsEnumerable;

        function n(e) {
            if (e == null) {
                throw new TypeError("Object.assign cannot be called with null or undefined")
            }
            return Object(e)
        }

        function a(e) {
            var t = Object.getOwnPropertyNames(e);
            if (Object.getOwnPropertySymbols) {
                t = t.concat(Object.getOwnPropertySymbols(e))
            }
            return t.filter(function(t) {
                return r.call(e, t)
            })
        }
        e.exports = Object.assign || function(e, t) {
            var r;
            var o;
            var i = n(e);
            for (var u = 1; u < arguments.length; u++) {
                r = arguments[u];
                o = a(Object(r));
                for (var s = 0; s < o.length; s++) {
                    i[o[s]] = r[o[s]]
                }
            }
            return i
        }
    },
    115: function(e, t) {
        e.exports = {
            INITIAL: "INITIAL",
            READY: "READY",
            PENDING: "PENDING",
            FAILED: "FAILED"
        }
    },
    122: function(e, t, r) {
        e.exports = r(2)(1)
    },
    141: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(6);
        var a = c(n);
        var o = r(72);
        var i = c(o);
        var u = r(24);
        var s = r(142);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = a.default.createActions({
            getNotifications: {
                asyncResult: true
            }
        });
        f.getNotifications.listen(function(e) {
            var t = this;
            i.default.Queries.getNotifications({
                siteCodes: e
            }, {
                rejectAllRequestErrors: true
            }).then(function(e) {
                return t.completed(e.map(function(e) {
                    return l.default.fromJson(e)
                }))
            }, function(e) {
                return (0, u.addGlobalError)(e, false)
            })
        });
        t.default = f
    },
    142: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            r(e, null, [{
                key: "fromJson",
                value: function t(r) {
                    if (r.key === "TaskMonitoring") {
                        return new e(r.key, "permitvision/showtaskmonitoringoverview/#/")
                    }
                    if (r.key === "PressureBuildUp") {
                        return new e(r.key, "permitvision/showpbuoverview/#/")
                    }
                    if (r.key === "GasMeasurement") {
                        return new e(r.key, "permitvision/showgasmeasurementsoverview/#/")
                    }
                    return undefined
                }
            }]);

            function e(t, r) {
                n(this, e);
                this.sites = [];
                this.key = t;
                this.url = r
            }
            return e
        }();
        t.default = a
    },
    144: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = h(a);
        var i = r(32);
        var u = h(i);
        var s = r(9);
        var l = h(s);
        var c = r(8);
        var f = h(c);
        var d = r(102);
        var p = r(113);
        var v = r(145);
        var m = h(v);

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function y(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) {
                    r[t] = e[t]
                }
                return r
            } else {
                return Array.from(e)
            }
        }
        var g = o.default.createClass({
            displayName: "KendoGrid",
            propTypes: {
                extraKendoConfig: a.PropTypes.object,
                columns: a.PropTypes.arrayOf(a.PropTypes.shape({
                    field: a.PropTypes.string.isRequired,
                    title: a.PropTypes.string,
                    className: a.PropTypes.string,
                    width: a.PropTypes.oneOfType([a.PropTypes.string, a.PropTypes.number]),
                    groupable: a.PropTypes.bool,
                    template: a.PropTypes.string,
                    onClick: a.PropTypes.func,
                    onHeaderClick: a.PropTypes.func
                })),
                groupable: a.PropTypes.bool,
                reorderableColumns: a.PropTypes.bool,
                resizable: a.PropTypes.bool,
                rowClick: a.PropTypes.func,
                results: a.PropTypes.array,
                messages: a.PropTypes.array,
                status: a.PropTypes.string,
                className: a.PropTypes.string,
                sortDataSet: a.PropTypes.shape({
                    field: a.PropTypes.string,
                    reverse: a.PropTypes.bool
                }),
                resizableColumns: a.PropTypes.bool,
                selectable: a.PropTypes.bool
            },
            getDefaultProps: function e() {
                return {
                    resizableColumns: false,
                    reorderableColumns: false,
                    messages: [],
                    className: "",
                    extraKendoConfig: {},
                    selectable: false
                }
            },
            componentDidMount: function e() {
                this._initializeGrid(this.props);
                this._processProps(this.props)
            },
            componentWillReceiveProps: function e(t) {
                this._processProps(t)
            },
            getGridWidget: function e() {
                return this._getjQueryGridPlaceholder().data("kendoGrid")
            },
            getGridPlaceholder: function e() {
                return this._kendoPlaceHolder
            },
            _getjQueryGridPlaceholder: function e() {
                return (0, l.default)(this._kendoPlaceHolder)
            },
            _initializeGrid: function e(t) {
                var r = this._enrichedColumns(t);
                var a = {
                    columns: m.default.mapToKendoColumns(r),
                    resizable: t.resizableColumns,
                    reorderable: t.reorderableColumns,
                    pageable: {
                        input: false,
                        numeric: false,
                        previousNext: false,
                        pageSizes: false,
                        enabled: true,
                        messages: {
                            display: f.default.translate("PermitVision.Label_TotalRecordsResource").replace("[2]", "{2}"),
                            empty: f.default.translate("PermitVision.Label_NoRecordsFound")
                        }
                    },
                    groupable: t.groupable ? {
                        messages: {
                            empty: f.default.translate("PermitVision.Label_GroupingEmptyMessage")
                        }
                    } : null,
                    selectable: t.rowClick ? "cell" : false,
                    change: function e(r) {
                        if (!t.rowClick) {
                            return
                        }
                        var n = r.sender.select();
                        var a = n[0].cellIndex;
                        var o = r.sender.columns[a];
                        if (o.field !== "isSelected") {
                            var i = r.sender.dataItem(n.closest("tr"));
                            t.rowClick(i)
                        }
                    }
                };
                a = n({}, a, t.extraKendoConfig);
                var o = this._getjQueryGridPlaceholder();
                o.kendoGrid(a);
                var i = this.getGridWidget();
                if (t.sortDataSet) {
                    i.dataSource.sort([{
                        field: t.sortDataSet.field,
                        dir: !t.sortDataSet.reverse ? "asc" : "desc"
                    }])
                }
                m.default.showOrHideColumns(r, i)
            },
            _enrichedColumns: function e(t) {
                var r = this;
                var n = [].concat(y(t.columns));
                if (!t.selectable) return n;
                n.unshift({
                    field: "isSelected",
                    width: 30,
                    headerTemplate: "<input type='checkbox' class='select-all' />",
                    onHeaderClick: function e(t, a) {
                        a._data.forEach(function(e) {
                            e.isSelected = t.target.checked
                        });
                        a.refresh();
                        m.default.attachColumnHandlers(n, r._getjQueryGridPlaceholder(), a)
                    },
                    template: "<input type='checkbox' class='selectRow'  #= data.isSelected ? 'checked=\"checked\"' : \"\" # />",
                    className: "checkbox-column",
                    onClick: function e(t, r, n) {
                        t.isSelected = r.context.checked;
                        var a = n._data.some(function(e) {
                            return !e.isSelected
                        });
                        (0, l.default)("input.select-all")[0].checked = !a
                    }
                });
                return n
            },
            _processProps: function e(t) {
                var r = this._getjQueryGridPlaceholder();
                var n = this.getGridWidget();
                var a = this.props.columns.map(function(e) {
                    return e.field
                });
                var o = t.columns.map(function(e) {
                    return e.field
                });
                if (u.default.isEqual(a, o)) {
                    m.default.showOrHideColumns(t.columns, n)
                } else {
                    n.destroy();
                    r.empty();
                    this._initializeGrid(t)
                }
                if (t.status === "READY") {
                    if (t.selectable) {
                        t.results.forEach(function(e) {
                            e.isSelected = false
                        });
                        (0, l.default)("input.select-all")[0].checked = false
                    }
                    n.dataSource.data(t.results);
                    m.default.attachColumnHandlers(this._enrichedColumns(t), r, n)
                }
            },
            getSelectedRows: function e() {
                var t = this.getGridWidget();
                return t._data.filter(function(e) {
                    return e.isSelected
                })
            },
            render: function e() {
                var t = this;
                var r = this.props.messages.length > 0 ? o.default.createElement("div", {
                    className: "alert alert-warning"
                }, o.default.createElement("span", {
                    className: "glyphicon glyphicon-exclamation-sign"
                }), this.props.messages.map(function(e, t) {
                    return o.default.createElement("p", {
                        className: "alert-content",
                        key: t
                    }, e)
                })) : null;
                var n = this.props.status === p.statusCodes.PENDING ? o.default.createElement(d.ProgressIndicator, {
                    color: "white"
                }) : null;
                return o.default.createElement("div", {
                    className: "kendoGrid-wrapper"
                }, r, o.default.createElement("div", {
                    className: "kendoGrid " + this.props.className
                }, o.default.createElement("div", {
                    className: "kendoPlaceHolder",
                    ref: function e(r) {
                        t._kendoPlaceHolder = r
                    }
                }), n))
            }
        });
        t.default = g
    },
    145: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(9);
        var o = i(a);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var s = function e(t) {
            var r = {
                field: t.field,
                title: t.title,
                encoded: false,
                headerAttributes: {
                    class: t.className
                },
                attributes: {
                    "data-type": t.field,
                    class: t.className
                },
                width: t.width ? t.width + "px" : "auto",
                groupable: !t.disableGrouping
            };
            if (!t.title) {
                r.headerTemplate = "<span></span>"
            }
            if (t.headerTemplate) {
                r.headerTemplate = t.headerTemplate
            }
            if (t.template) {
                r.template = t.template
            }
            if (t.groupHeaderTemplate) {
                r.groupHeaderTemplate = t.groupHeaderTemplate
            }
            return r
        };
        var l = function() {
            function e() {
                u(this, e)
            }
            n(e, null, [{
                key: "mapToKendoColumns",
                value: function e(t) {
                    return t.map(s)
                }
            }, {
                key: "showOrHideColumns",
                value: function e(t, r) {
                    t.forEach(function(e) {
                        if (e.hide) {
                            r.hideColumn(e.field)
                        } else {
                            r.showColumn(e.field)
                        }
                    })
                }
            }, {
                key: "attachColumnHandlers",
                value: function e(t, r, n) {
                    t.forEach(function(e) {
                        if (e.onClick) {
                            r.find("[data-type=" + e.field + "]").each(function(t, r) {
                                var a = r.firstElementChild;
                                if (a && !a.hasClickEvent) {
                                    a.addEventListener("click", function(t) {
                                        var r = (0, o.default)(t.target).closest("tr");
                                        var a = n.dataItem(r);
                                        e.onClick(a, r, n)
                                    });
                                    a.hasClickEvent = true
                                }
                            })
                        }
                        if (e.onHeaderClick) {
                            r.find("[data-field=" + e.field + "]").each(function(t, r) {
                                var a = r.firstElementChild;
                                if (a && !a.hasClickEvent) {
                                    a.addEventListener("click", function(t) {
                                        e.onHeaderClick(t, n)
                                    });
                                    a.hasClickEvent = true
                                }
                            })
                        }
                    })
                }
            }]);
            return e
        }();
        t.default = l
    },
    146: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.fromMinutes = i;
        t.format = u;
        var n = r(8);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = 60;
            var r = t * 24;
            var n = r * 7;
            var a = Math.floor(e / n);
            var o = e % n;
            var i = Math.floor(o / r);
            o %= r;
            var u = Math.floor(o / t);
            var s = o % t;
            return {
                weeks: a,
                days: i,
                hours: u,
                minutes: s
            }
        }

        function u(e) {
            var t = e.weeks,
                r = e.hours,
                n = e.days,
                o = e.minutes;
            var i = "";
            if (t) {
                i += (i.length > 0 ? " " : "") + a.default.translate("permitvision.weeks", {
                    p0: t
                })
            }
            if (n) {
                i += (i.length > 0 ? " " : "") + a.default.translate("permitvision.days", {
                    p0: n
                })
            }
            if (r) {
                i += (i.length > 0 ? " " : "") + a.default.translate("permitvision.hours", {
                    p0: r
                })
            }
            if (o) {
                i += (i.length > 0 ? " " : "") + a.default.translate("permitvision.minutes", {
                    p0: o
                })
            }
            if (i.length === 0) {
                i = a.default.translate("permitvision.less_than_a_minute")
            }
            return i
        }
    },
    148: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(149);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            componentWillMount: function e() {
                this._promiseManager = new a.default
            },
            componentWillUnmount: function e() {
                this._promiseManager.cancelAll()
            },
            createCancelablePromise: function e(t) {
                return this._promiseManager.create(t)
            }
        };
        t.default = i
    },
    149: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            function e() {
                n(this, e);
                this._activePromises = []
            }
            r(e, [{
                key: "create",
                value: function e(t) {
                    var r = this;
                    var n = this._createCancelablePromise(t);
                    this._activePromises.push(n);
                    return n.promise.then(function(e) {
                        r._unlistPromise(n);
                        return e
                    }, function(e) {
                        r._unlistPromise(n);
                        return Promise.reject(e)
                    })
                }
            }, {
                key: "cancelAll",
                value: function e() {
                    this._activePromises.forEach(function(e) {
                        return e.cancel()
                    })
                }
            }, {
                key: "_createCancelablePromise",
                value: function e(t) {
                    var r = false;
                    return {
                        promise: new Promise(function(e, n) {
                            return t.then(function(t) {
                                if (!r) {
                                    e(t)
                                }
                            }, function(e) {
                                return n(e)
                            })
                        }),
                        cancel: function e() {
                            r = true
                        }
                    }
                }
            }, {
                key: "_unlistPromise",
                value: function e(t) {
                    this._activePromises.splice(this._activePromises.indexOf(t), 1)
                }
            }]);
            return e
        }();
        t.default = a
    },
    153: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = l(a);
        var i = r(24);
        var u = r(154);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            var r = {};
            for (var n in e) {
                if (t.indexOf(n) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
                r[n] = e[n]
            }
            return r
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                f(this, t);
                return d(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            n(t, [{
                key: "unstable_handleError",
                value: function e(t) {
                    console.log(t.stack);
                    (0, i.addGlobalError)(t, true)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props,
                        r = t.name,
                        n = c(t, ["name"]);
                    var a = s.default.loadComponent(r, this.props.defaultComponent, n);
                    if (a) {
                        return a
                    }
                    if (!this.props.defaultComponent) {
                        var i = "No (customer) component found for " + r;
                        console.error(i);
                        return o.default.createElement("div", null, i)
                    }
                    return o.default.createElement(this.props.defaultComponent, n)
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            name: o.default.PropTypes.string.isRequired,
            defaultComponent: o.default.PropTypes.func
        };
        t.default = v
    },
    154: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = window.customerComponents || {};
        var n = function e(t, n, a) {
            if (r.loadComponent) {
                return r.loadComponent(t, n, a)
            }
            return null
        };
        t.default = {
            loadComponent: n
        }
    },
    156: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = h(a);
        var i = r(92);
        var u = h(i);
        var s = r(91);
        var l = h(s);
        var c = r(8);
        var f = h(c);
        var d = r(96);
        var p = h(d);
        var v = r(32);
        var m = h(v);

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function y(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function g(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function b(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var _ = function(e) {
            b(t, e);

            function t(e) {
                y(this, t);
                var r = g(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._renderValidationError = r._renderValidationError.bind(r);
                return r
            }
            n(t, [{
                key: "_renderValidationError",
                value: function e(t, r) {
                    var n = this;
                    var a = {};
                    var i = function e(t) {
                        var r = l.default.tryGetCurrentRegion();
                        var a = r ? f.default.translate("permitvision." + r + "_" + t, {
                            fallback: t
                        }).replace(/%/g, "%%") : t;
                        t = String(t).replace("{Kind}", n.props.kind);
                        return f.default.translate("permitvision." + t, {
                            fallback: a
                        })
                    };
                    var s = t.code;
                    if (this.props.kind) {
                        s = s.replace("{Kind}", this.props.kind)
                    }
                    if (t.formatParameters) {
                        Object.keys(t.formatParameters).forEach(function(e) {
                            var r = t.formatParameters[e];
                            var n = " ";
                            if (r.values && r.values.length) {
                                n = r.values.map(i).join(", ")
                            } else if (r.value) {
                                n = i(("" + r.value).replace(/%/g, "%%"))
                            }
                            a[r.key] = n
                        })
                    } else if (t.params) {
                        a = t.params
                    }
                    var c = "validation-error-" + String(t.code).replace("{Kind}", this.props.kind);
                    return o.default.createElement("li", {
                        key: r,
                        className: "validation-error " + c
                    }, o.default.createElement(u.default, {
                        content: "PermitVision." + s,
                        fallback: t.code,
                        with: a
                    }))
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props.validationErrors;
                    if (!t || !t.length) return null;
                    return o.default.createElement("div", {
                        className: "alert alert-warning " + this.props.className
                    }, o.default.createElement("span", {
                        className: "glyphicon glyphicon-exclamation-sign"
                    }), o.default.createElement("ul", {
                        className: (0, p.default)("alert-content", "alert-content-list", "alert-count-" + t.length)
                    }, m.default.uniqBy(t, JSON.stringify).map(this._renderValidationError)))
                }
            }]);
            return t
        }(o.default.Component);
        _.propTypes = {
            validationErrors: o.default.PropTypes.array,
            kind: o.default.PropTypes.string,
            className: o.default.PropTypes.string
        };
        _.defaultProps = {
            validationErrors: [],
            kind: "",
            className: ""
        };
        t.default = _
    },
    160: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = d(a);
        var i = r(96);
        var u = d(i);
        var s = r(9);
        var l = d(s);
        r(161);
        var c = r(39);
        var f = d(c);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function v(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function m(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var h = function(e) {
            m(t, e);

            function t(e) {
                p(this, t);
                var r = v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onDateChanged = r._onDateChanged.bind(r);
                r._onChange = r._onChange.bind(r);
                r._updateFromProps = r._updateFromProps.bind(r);
                r._onBeforeShowDay = r._onBeforeShowDay.bind(r);
                return r
            }
            n(t, [{
                key: "componentDidMount",
                value: function e() {
                    var t = {
                        format: this.props.format,
                        autoclose: true,
                        beforeShowDay: this._onBeforeShowDay,
                        startDate: this.props.startDate,
                        showOnFocus: this.props.showOnFocus
                    };
                    this._datePickerInstance = (0, l.default)(this._datePickerRef).datepicker(t).on("changeDate", this._onDateChanged).on("clearDate", this._onDateChanged);
                    this._updateFromProps(this.props)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function e(t) {
                    this._updateFromProps(t)
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    if (this._datePickerInstance) {
                        this._datePickerInstance.datepicker("remove")
                    }
                }
            }, {
                key: "_onDateChanged",
                value: function e(t) {
                    if (this.props.onDateChanged) {
                        if (!t.date || t.date.getFullYear() > 1e3) {
                            this.props.onDateChanged(t)
                        }
                    }
                }
            }, {
                key: "_onChange",
                value: function e(t) {
                    if (!t.target.value) {
                        this.props.onDateChanged(t)
                    }
                }
            }, {
                key: "_forceDateToBeOnMidnight",
                value: function e(t) {
                    var r = new Date(t);
                    r.setHours(0);
                    r.setMinutes(0);
                    r.setSeconds(0);
                    return r
                }
            }, {
                key: "_datesEqual",
                value: function e(t, r) {
                    var n = void 0,
                        a = void 0;
                    if (t) {
                        n = t.getTime()
                    }
                    if (r) {
                        a = r.getTime()
                    }
                    return n === a
                }
            }, {
                key: "_updateFromProps",
                value: function e(t) {
                    if (this._datePickerInstance) {
                        if (t.date) {
                            var r = void 0;
                            if (t.date instanceof Date) {
                                r = t.date
                            } else if (f.default.usesUtc(t.date)) {
                                r = f.default.jsDateFromUtcDateTime(t.date)
                            } else {
                                r = f.default.jsDateFromSiteDateTime(t.date)
                            }
                            r = this._forceDateToBeOnMidnight(r);
                            var n = this._datePickerInstance.datepicker("getDate");
                            if (!this._datesEqual(n, r)) {
                                this._datePickerInstance.datepicker("update", r)
                            }
                        } else {
                            this._datePickerInstance.datepicker("update", null)
                        }
                    }
                }
            }, {
                key: "_onBeforeShowDay",
                value: function e(t) {
                    if (!t) {
                        return {}
                    }
                    var r = this.props.today;
                    if (t.getMonth() === r.getMonth() && t.getDate() === r.getDate() && t.getFullYear() === r.getFullYear()) {
                        return {
                            classes: "today"
                        }
                    }
                    return undefined
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    return o.default.createElement("div", {
                        className: "input-group date",
                        ref: function e(r) {
                            t._datePickerRef = r
                        }
                    }, o.default.createElement("input", {
                        type: "text",
                        className: (0, u.default)("form-control", {
                            invalid: this.props.invalid
                        }),
                        onInput: this._onChange
                    }), o.default.createElement("span", {
                        className: "input-group-addon"
                    }, o.default.createElement("span", {
                        className: "glyphicon glyphicon-calendar"
                    })))
                }
            }]);
            return t
        }(o.default.Component);
        h.propTypes = {
            date: o.default.PropTypes.oneOfType([o.default.PropTypes.object, o.default.PropTypes.string]),
            startDate: o.default.PropTypes.oneOfType([o.default.PropTypes.object, o.default.PropTypes.string]),
            today: o.default.PropTypes.object,
            onDateChanged: o.default.PropTypes.func.isRequired,
            showOnFocus: o.default.PropTypes.bool,
            invalid: o.default.PropTypes.bool,
            format: o.default.PropTypes.string
        };
        h.defaultProps = {
            date: null,
            startDate: null,
            today: new Date,
            showOnFocus: true,
            invalid: false,
            format: "dd M yyyy"
        };
        t.default = h
    },
    161: function(e, t, r) {
        e.exports = r(2)(818)
    },
    164: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(82);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            getInitialState: function e() {
                return {
                    dropdownIsOpen: false
                }
            },
            componentWillUnmount: function e() {
                document.body.removeEventListener("click", this._hideDropdownWhenLosingFocus);
                document.body.removeEventListener("keyup", this._hideDropdownWhenLosingFocus)
            },
            _onToggleDropdown: function e() {
                if (!this.state.dropdownIsOpen) {
                    document.body.addEventListener("click", this._hideDropdownWhenLosingFocus);
                    document.body.addEventListener("keyup", this._hideDropdownWhenLosingFocus)
                } else {
                    document.body.removeEventListener("click", this._hideDropdownWhenLosingFocus);
                    document.body.removeEventListener("keyup", this._hideDropdownWhenLosingFocus)
                }
                this.setState({
                    dropdownIsOpen: !this.state.dropdownIsOpen
                })
            },
            _hideDropdownWhenLosingFocus: function e(t) {
                var r = a.default.findDOMNode(this);
                var n = t.target;
                while (n) {
                    if (r === n) {
                        return
                    }
                    n = n.parentNode
                }
                this._onToggleDropdown()
            }
        };
        t.default = i
    },
    168: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = c(a);
        var i = r(32);
        var u = c(i);
        var s = r(169);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = o.default.createClass({
            displayName: "DebounceInput",
            _debouncer: null,
            _busyBouncing: false,
            propTypes: {
                onChange: o.default.PropTypes.func.isRequired,
                value: o.default.PropTypes.any,
                debounceTimeout: o.default.PropTypes.number,
                component: o.default.PropTypes.oneOfType([o.default.PropTypes.string, o.default.PropTypes.node]).isRequired
            },
            getDefaultProps: function e() {
                return {
                    debounceTimeout: 400,
                    value: ""
                }
            },
            componentWillMount: function e() {
                this._debounceChange = u.default.debounce(this._onBounce, this.props.debounceTimeout)
            },
            componentDidMount: function e() {
                if (this._usesResizableTextArea(this.props)) {
                    this._input.getTextarea().value = this.props.value || ""
                } else {
                    this._input.value = this.props.value || ""
                }
            },
            componentWillReceiveProps: function e(t) {
                if (!this._busyBouncing && this._input.value !== t.value) {
                    if (this._usesResizableTextArea(t)) {
                        this._input.getTextarea().value = t.value || ""
                    } else {
                        this._input.value = t.value || ""
                    }
                }
            },
            _onBounce: function e(t) {
                this.props.onChange(t);
                this._busyBouncing = false
            },
            _onChange: function e(t) {
                this._busyBouncing = true;
                this._debounceChange(this._getValue(t))
            },
            _onBlur: function e() {
                this._debounceChange.flush()
            },
            _getValue: function e(t) {
                return t.target ? t.target.value : t
            },
            _usesResizableTextArea: function e(t) {
                return t.component === "textarea"
            },
            render: function e() {
                var t = this;
                var r = n({}, this.props);
                var a = this._usesResizableTextArea(r);
                delete r.onChange;
                delete r.value;
                delete r.debounceTimeout;
                delete r.component;
                r.ref = function(e) {
                    t._input = e
                };
                r.onInput = this._onChange;
                r.onChange = function() {};
                r.onBlur = this._onBlur;
                if (a) {
                    return o.default.createElement(l.default, r)
                }
                return o.default.createElement(this.props.component, r)
            }
        });
        t.default = f
    },
    169: function(e, t, r) {
        ! function(n, a) {
            true ? e.exports = a(r(122)) : "function" == typeof define && define.amd ? define(["react"], a) : "object" == typeof t ? t.ReactResizableTextarea = a(require("react")) : n.ReactResizableTextarea = a(n.react)
        }(this, function(e) {
            return function(e) {
                function t(n) {
                    if (r[n]) return r[n].exports;
                    var a = r[n] = {
                        exports: {},
                        id: n,
                        loaded: !1
                    };
                    return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
                }
                var r = {};
                return t.m = e, t.c = r, t.p = "", t(0)
            }([function(e, t, r) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function i(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u = function() {
                        function e(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(t, r, n) {
                            return r && e(t.prototype, r), n && e(t, n), t
                        }
                    }(),
                    s = r(1),
                    l = n(s),
                    c = function(e) {
                        function t(e) {
                            a(this, t);
                            var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return r._lastY = 0, r._lastX = 0, r._textAreaHeight = 0, r._textAreaWidth = 0, r._onEnableDrag = r._onEnableDrag.bind(r), r._onDisableDrag = r._onDisableDrag.bind(r), r._onMouseMove = r._onMouseMove.bind(r), r._autoSizeTextarea = r._autoSizeTextarea.bind(r), r
                        }
                        return i(t, e), u(t, [{
                            key: "componentDidMount",
                            value: function() {
                                this.props.fitOnMount && this._autoSizeTextarea(), this._dragger.addEventListener("mousedown", this._onEnableDrag)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this._dragger.removeEventListener("mousedown", this._onEnableDrag), this._removeEventListeners()
                            }
                        }, {
                            key: "getTextarea",
                            value: function() {
                                return this._textArea
                            }
                        }, {
                            key: "_autoSizeTextarea",
                            value: function() {
                                var e = this._textArea.style.overflowY,
                                    t = Math.max(this._textArea.offsetWidth, this.props.minWidth);
                                this._textArea.style.width = t + "px", this._textArea.style.overflowY = "hidden";
                                var r = window.getComputedStyle(this._textArea),
                                    n = parseInt(r.getPropertyValue("border-top-width"), 10),
                                    a = parseInt(r.getPropertyValue("border-bottom-width"), 10),
                                    o = n + a + this._textArea.scrollHeight;
                                o = Math.max(o, this.props.minHeight), this._textArea.style.height = o + "px", this._textArea.style.overflowY = e
                            }
                        }, {
                            key: "_onEnableDrag",
                            value: function(e) {
                                document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onDisableDrag), this._lastY = e.clientY, this._lastX = e.clientX, this._textAreaHeight = this._textArea.offsetHeight, this._textAreaWidth = this._textArea.offsetWidth, e.preventDefault()
                            }
                        }, {
                            key: "_onDisableDrag",
                            value: function() {
                                this._removeEventListeners(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "_removeEventListeners",
                            value: function() {
                                document.removeEventListener("mousemove", this._onMouseMove), document.removeEventListener("mouseup", this._onDisableDrag), this._scrollableContainer && this._scrollableContainer.removeEventListener("mousedown", this._onPreventMouseDownOnScrollableParent)
                            }
                        }, {
                            key: "_onMouseMove",
                            value: function(e) {
                                if (this.props.directions.indexOf("y") !== -1) {
                                    var t = e.clientY - this._lastY;
                                    this._textAreaHeight = Math.max(this._textAreaHeight + t, this.props.minHeight), this._textArea.style.height = this._textAreaHeight + "px"
                                }
                                if (this.props.directions.indexOf("x") !== -1) {
                                    var r = e.clientX - this._lastX;
                                    this._textAreaWidth = Math.max(this._textAreaWidth + r, this.props.minWidth), this._textArea.style.width = this._textAreaWidth + "px"
                                }
                                this._lastX = e.clientX, this._lastY = e.clientY
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = {};
                                Object.keys(this.props).forEach(function(r) {
                                    t[r] = e.props[r]
                                }), t.className = "resizable-textarea " + this.props.className, t.ref = function(t) {
                                    return e._textArea = t
                                }, t.style ? (t.style.minWidth = t.minWidth, t.style.minHeight = t.minHeight) : t.style = {
                                    minWidth: t.minWidth,
                                    minHeight: t.minHeight
                                }, delete t.directions, delete t.minWidth, delete t.minHeight, delete t.fitOnMount;
                                var r = "resizable-textarea-dragger direction-" + this.props.directions;
                                return l.default.createElement("div", {
                                    className: "resizable-textarea-container",
                                    ref: function(t) {
                                        return e._container = t
                                    }
                                }, l.default.createElement("textarea", t), l.default.createElement("div", {
                                    className: r,
                                    ref: function(t) {
                                        return e._dragger = t
                                    }
                                }))
                            }
                        }]), t
                    }(s.Component);
                c.propTypes = {
                    directions: s.PropTypes.string,
                    className: s.PropTypes.string,
                    minWidth: s.PropTypes.number,
                    minHeight: s.PropTypes.number,
                    fitOnMount: s.PropTypes.bool
                }, c.defaultProps = {
                    directions: "y",
                    className: "",
                    minWidth: 100,
                    minHeight: 30,
                    fitOnMount: !1
                }, t.default = c
            }, function(t, r) {
                t.exports = e
            }])
        })
    },
    195: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getDescriptors = c;
        t.getSubstances = f;
        var n = r(63);
        var a = l(n);
        var o = r(196);
        var i = l(o);
        var u = r(197);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e) {
            return a.default.Queries.getDescriptors({
                category: e
            }).then(function(t) {
                return i.default.fromJSON(e, t)
            })
        }

        function f() {
            return a.default.Queries.getSubstances().then(function(e) {
                return s.default.fromJSON(e)
            })
        }
    },
    196: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            r(e, null, [{
                key: "fromJSON",
                value: function t(r, n) {
                    if (n && n.length && typeof n !== "string") {
                        return n.map(function(t) {
                            return e.fromJSON(r, t)
                        })
                    } else if (n && n.length === 0) {
                        return []
                    }
                    return new e(r, n)
                }
            }]);

            function e(t, r) {
                n(this, e);
                this._category = t;
                this._code = r
            }
            r(e, [{
                key: "code",
                get: function e() {
                    return this._code
                }
            }, {
                key: "resourceKey",
                get: function e() {
                    return "PermitVision." + this._category + "_" + this._code
                }
            }]);
            return e
        }();
        t.default = a
    },
    197: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            r(e, null, [{
                key: "fromJSON",
                value: function t(r) {
                    if (r && r.length) {
                        return r.map(function(t) {
                            return e.fromJSON(t)
                        })
                    } else if (r && r.length === 0) {
                        return []
                    }
                    return new e(r.code, r.minValue, r.maxValue)
                }
            }]);

            function e(t, r, a) {
                n(this, e);
                this.code = t;
                this.minValue = r;
                this.maxValue = a
            }
            r(e, [{
                key: "isOutsideRange",
                value: function e(t) {
                    return (t || t === 0) && this.minValue !== null && t < this.minValue || (t || t === 0) && this.maxValue !== null && t > this.maxValue
                }
            }, {
                key: "hasRange",
                get: function e() {
                    return this.minValue !== null && this.maxValue !== null
                }
            }]);
            return e
        }();
        t.default = a
    },
    226: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });

        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var n = function e() {
            r(this, e)
        };
        n.enter = 13;
        n.upArrow = 38;
        n.downArrow = 40;
        t.default = n
    },
    234: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = _(a);
        var i = r(235);
        var u = _(i);
        var s = r(141);
        var l = _(s);
        var c = r(236);
        var f = _(c);
        var d = r(31);
        var p = _(d);
        var v = r(237);
        var m = _(v);
        var h = r(50);
        var y = _(h);
        var g = r(44);
        var b = _(g);

        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function w(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function P(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function C(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var k = function(e) {
            C(t, e);

            function t(e) {
                w(this, t);
                var r = P(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._getNotifications = function() {
                    var e = p.default.getSelected().map(function(e) {
                        return e.code
                    });
                    l.default.getNotifications(e)
                };
                var n = b.default.getCurrentUser();
                r._shouldShow = y.default.shouldShowNotificationIcon(n);
                return r
            }
            n(t, [{
                key: "componentDidMount",
                value: function e() {
                    if (this._shouldShow) {
                        this._getNotifications();
                        this._interval = setInterval(this._getNotifications, 6e4)
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    if (this._interval) {
                        clearInterval(this._interval)
                    }
                }
            }, {
                key: "render",
                value: function e() {
                    if (!this._shouldShow) {
                        return null
                    }
                    return o.default.createElement(f.default, {
                        notifications: this.props.store.notifications
                    })
                }
            }]);
            return t
        }(o.default.Component);
        k.propTypes = {
            store: o.default.PropTypes.shape({
                notifications: o.default.PropTypes.array
            }).isRequired
        };
        t.default = (0, m.default)(k, [{
            instance: u.default,
            name: "store"
        }])
    },
    235: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(6);
        var a = u(n);
        var o = r(141);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createStore({
            listenables: [i.default],
            init: function e() {
                this._state = {
                    notifications: []
                }
            },
            getInitialState: function e() {
                return this._state
            },
            onGetNotifications: function e() {
                this.trigger(this._state)
            },
            onGetNotificationsCompleted: function e(t) {
                this._state.notifications = t;
                this.trigger(this._state)
            },
            onGetNotificationsFailed: function e() {
                this.trigger(this._state)
            }
        });
        t.default = s
    },
    236: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = f(n);
        var o = r(96);
        var i = f(o);
        var u = r(164);
        var s = f(u);
        var l = r(92);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = a.default.createClass({
            displayName: "NotificationsView",
            mixins: [s.default],
            propTypes: {
                notifications: a.default.PropTypes.array.isRequired
            },
            getInitialState: function e() {
                return {
                    enableAnimation: false
                }
            },
            componentWillReceiveProps: function e(t) {
                if (!this.state.enableAnimation && t.notifications.length) {
                    this._startAnimation()
                }
            },
            componentDidMount: function e() {
                this.animationCanceled = false
            },
            componentWillUnmount: function e() {
                this.animationCanceled = true;
                if (this.animationTimeoutId) {
                    clearTimeout(this.animationTimeoutId)
                }
            },
            _startAnimation: function e() {
                var t = this;
                this.animationTimeoutId = setTimeout(function() {
                    if (!t.animationCanceled) {
                        t.setState({
                            enableAnimation: true
                        })
                    }
                }, 500)
            },
            render: function e() {
                var t = this;
                var r = void 0,
                    n = void 0,
                    o = void 0;
                var u = this.props.notifications;
                if (u.length) {
                    var s = (0, i.default)("header-btn-icon glyphicon glyphicon-bell", {
                        "animation-shake-n-pulse": this.state.enableAnimation
                    });
                    r = a.default.createElement(c.default, {
                        component: "button",
                        className: s,
                        "data-toggle": "dropdown",
                        type: "button",
                        onClick: this._onToggleDropdown,
                        attributes: {
                            title: "PermitVision.header_notifications_title"
                        }
                    })
                }
                if (this.state.dropdownIsOpen) {
                    o = this.props.notifications.map(function(e, r) {
                        return a.default.createElement("tr", {
                            key: r,
                            className: (0, i.default)({
                                "table-row-alt": r % 2 === 0
                            })
                        }, a.default.createElement("td", null, a.default.createElement(c.default, {
                            component: "a",
                            href: e.url,
                            onClick: t._onToggleDropdown,
                            content: "PermitVision.label_notification_" + e.key
                        })))
                    });
                    n = a.default.createElement("div", {
                        className: "dropdown-menu dropdown-menu-right"
                    }, a.default.createElement("div", {
                        className: "dropdown-header"
                    }, a.default.createElement("h4", {
                        className: "dropdown-title"
                    }, a.default.createElement(c.default, {
                        content: "PermitVision.Header_Notifications_Dropdown_Header"
                    })), a.default.createElement("div", {
                        className: "dropdown-actions"
                    }, a.default.createElement("button", {
                        className: "btn btn-sm",
                        onClick: this._onToggleDropdown
                    }, a.default.createElement(c.default, {
                        content: "PermitVision.Label_Close"
                    })))), a.default.createElement("table", {
                        className: "table table-bordered"
                    }, a.default.createElement("thead", null, a.default.createElement("tr", null, a.default.createElement("th", null, a.default.createElement(c.default, {
                        content: "PermitVision.Header_Notifications_Dropdown_Table_Header_Message"
                    })))), a.default.createElement("tbody", null, o)))
                }
                var l = (0, i.default)("header-btn dropdown", {
                    open: this.state.dropdownIsOpen,
                    hidden: !u.length
                });
                return a.default.createElement("div", {
                    className: l
                }, r, n)
            }
        });
        t.default = d
    },
    237: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        t.default = function(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            return function(r) {
                p(o, r);

                function o(e) {
                    f(this, o);
                    var r = d(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
                    r._updateState = function(e, t) {
                        return r.setState(c({}, e, t))
                    };
                    r._listenToAction = function(e, t) {
                        return r._listenerManager.listenTo(e, t)
                    };
                    r.state = {};
                    r._listenerManager = n({}, s.default.ListenerMethods);
                    t.forEach(function(e) {
                        r._listenerManager.listenTo(e.instance, r._updateState.bind(r, e.name));
                        if (e.instance.getInitialState) {
                            r.state[e.name] = e.instance.getInitialState()
                        }
                    });
                    return r
                }
                a(o, [{
                    key: "componentWillUnmount",
                    value: function e() {
                        this._listenerManager.stopListeningToAll()
                    }
                }, {
                    key: "render",
                    value: function t() {
                        return i.default.createElement(e, n({}, this.props, this.state, {
                            listenToAction: this._listenToAction
                        }))
                    }
                }]);
                return o
            }(i.default.Component)
        };
        var o = r(81);
        var i = l(o);
        var u = r(6);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t, r) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                })
            } else {
                e[t] = r
            }
            return e
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
    },
    238: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = c(n);
        var o = r(92);
        var i = c(o);
        var u = r(239);
        var s = c(u);
        var l = r(49);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = a.default.createClass({
            displayName: "BarcodeScanner",
            getInitialState: function e() {
                return {
                    showBarcodeModal: false
                }
            },
            _onOpenBarcodeScanModal: function e() {
                this.setState({
                    showBarcodeModal: true
                })
            },
            _onHideBarcodeScanModal: function e() {
                this.setState({
                    showBarcodeModal: false
                })
            },
            _onBarcodeScanned: function e(t) {
                (0, l.openPopout)(t);
                this._onHideBarcodeScanModal()
            },
            render: function e() {
                return a.default.createElement("div", {
                    className: "header-btn"
                }, a.default.createElement(i.default, {
                    component: "button",
                    className: "header-btn-icon barcode-icon-btn glyphicon glyphicon-barcode",
                    type: "button",
                    onClick: this._onOpenBarcodeScanModal,
                    attributes: {
                        title: "PermitVision.header_scan_icon_title"
                    }
                }), a.default.createElement(s.default, {
                    show: this.state.showBarcodeModal,
                    onHide: this._onHideBarcodeScanModal,
                    onBarcodeScanned: this._onBarcodeScanned
                }))
            }
        });
        t.default = f
    },
    239: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = s(n);
        var o = r(92);
        var i = s(o);
        var u = r(102);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = a.default.createClass({
            displayName: "BarcodeScannerModal",
            _registrationNumberPatternRegex: new RegExp(/\d{5}$/),
            propTypes: {
                onHide: a.default.PropTypes.func,
                onBarcodeScanned: a.default.PropTypes.func,
                show: a.default.PropTypes.bool.isRequired
            },
            getInitialState: function e() {
                return {
                    registrationNumberInvalid: null
                }
            },
            componentWillReceiveProps: function e(t) {
                if (!this.props.show && t.show) {
                    window.document.body.addEventListener("keypress", this._keyPressed)
                } else if (this.props.show && !t.show) {
                    window.document.body.removeEventListener("keypress", this._keyPressed)
                }
                this.setState({
                    registrationNumberInvalid: null
                });
                this._registrationNumber = ""
            },
            componentDidMount: function e() {
                this._registrationNumber = ""
            },
            _keyPressed: function e(t) {
                clearTimeout(this._scanTimeout);
                var r = t.which || t.keyCode;
                if (r === 27) {
                    this.props.onHide();
                    return
                }
                this._registrationNumber += String.fromCharCode(r);
                this._scanTimeout = setTimeout(this._onBarcodeInputReceived, 100)
            },
            _onBarcodeInputReceived: function e() {
                if (this._registrationNumberPatternRegex.test(this._registrationNumber)) {
                    this.props.onBarcodeScanned(this._registrationNumber)
                } else {
                    this.setState({
                        registrationNumberInvalid: this._registrationNumber
                    })
                }
                this._registrationNumber = ""
            },
            shouldComponentUpdate: function e(t, r) {
                return t.show !== this.props.show || r.registrationNumberInvalid
            },
            render: function e() {
                var t = this.state.registrationNumberInvalid ? a.default.createElement("div", {
                    className: "alert alert-warning"
                }, a.default.createElement("span", {
                    className: "glyphicon glyphicon-exclamation-sign"
                }), a.default.createElement(i.default, {
                    content: "permitvision.label_scan_registrationnumber_invalid",
                    with: {
                        p0: this.state.registrationNumberInvalid
                    },
                    className: "alert-content"
                })) : null;
                return a.default.createElement(u.Modal, {
                    show: this.props.show,
                    className: "barcode-scanner-modal",
                    onHide: this.props.onHide
                }, a.default.createElement(u.Modal.Header, null, a.default.createElement(u.Modal.Title, null, a.default.createElement(i.default, {
                    content: "PermitVision.Label_ScanPopupTitle"
                }))), a.default.createElement(u.Modal.Body, null, a.default.createElement("span", {
                    className: "barcode-scanner-modal-icon glyphicon glyphicon-barcode"
                }), a.default.createElement(i.default, {
                    component: "p",
                    className: "barcode-scanner-modal-text text-center",
                    content: "PermitVision.Label_ScanRegistrationNumber"
                }), t))
            }
        });
        t.default = l
    },
    240: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(28);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function e() {
            return a.default.createElement("div", {
                className: "runtime-info"
            }, "8.1.8.4922 (", i.default.deploymentDescription(), ")")
        };
        t.default = s
    },
    267: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.history = undefined;
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        t.getCurrentLocation = m;
        t.goToCopyCertificateAsNew = h;
        t.goToNewCertificateBasedOnTemplate = y;
        t.gotoNewCertificate = g;
        t.goToLocation = b;
        t.gotoCertificate = _;
        t.gotoWorkspace = w;
        var a = r(41);
        var o = d(a);
        var i = r(268);
        var u = d(i);
        var s = r(84);
        var l = d(s);
        var c = r(269);
        var f = d(c);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = t.history = (0, u.default)((0, f.default)(l.default))({
            basename: ""
        });
        var v = null;

        function m() {
            return v
        }
        p.listen(function(e) {
            v = e
        });

        function h(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = "/certificate/" + encodeURIComponent(e) + "/copyAsNew";
            p.push(r + (0, o.default)(t || {}))
        }

        function y(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = "/certificate/" + encodeURIComponent(e) + "/templateAsNew";
            p.push(r + (0, o.default)(t || {}))
        }

        function g(e, t, r) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var i = "/" + e + "/" + t + "/new";
            p.push(i + (0, o.default)(n({}, a, {
                siteCode: r
            })))
        }

        function b(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            p.push(e + (0, o.default)(t))
        }

        function _(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = "/certificate/" + encodeURIComponent(e);
            p.push(r + (0, o.default)(t))
        }

        function w(e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var n = "/" + e + "/" + t;
            p.push(n + (0, o.default)(r))
        }
        t.default = {
            gotoNewCertificate: g,
            gotoCertificate: _,
            gotoWorkspace: w,
            goToCopyCertificateAsNew: h,
            goToLocation: b,
            getCurrentLocation: m
        }
    },
    268: function(e, t, r) {
        e.exports = r(2)(565)
    },
    269: function(e, t, r) {
        e.exports = r(2)(169)
    },
    279: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = d(n);
        var o = r(92);
        var i = d(o);
        var u = r(96);
        var s = d(u);
        var l = r(164);
        var c = d(l);
        var f = r(102);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = a.default.createClass({
            displayName: "DropDownCheckListField",
            propTypes: {
                onChange: a.default.PropTypes.func,
                onDropdownToggle: a.default.PropTypes.func,
                isLoading: a.default.PropTypes.bool,
                nothingSelectedTextResource: a.default.PropTypes.string,
                allSelectedTextResource: a.default.PropTypes.string,
                multiSelectedTextResource: a.default.PropTypes.string,
                availableItems: a.default.PropTypes.array.isRequired,
                resourceId: a.default.PropTypes.string.isRequired
            },
            mixins: [c.default],
            getInitialState: function e() {
                return {
                    availableItems: this.props.availableItems
                }
            },
            componentWillReceiveProps: function e(t) {
                if (this.props.availableItems !== t.availableItems) {
                    this.setState({
                        availableItems: t.availableItems
                    })
                }
            },
            _onThisToggleDropdown: function e(t) {
                t.preventDefault();
                this._onToggleDropdown(t);
                if (this.props.onDropdownToggle) {
                    this.props.onDropdownToggle()
                }
            },
            _onItemChanged: function e(t, r) {
                var n = void 0;
                var a = this.state.availableItems.map(function(e) {
                    if (r.value === e.value) {
                        n = {
                            value: e.value,
                            description: e.description,
                            selected: t.target.checked
                        };
                        return n
                    }
                    return e
                });
                this.props.onChange({
                    item: n,
                    allItems: a,
                    event: t
                });
                this.setState({
                    availableItems: a
                })
            },
            _onSelectAllChange: function e(t) {
                var r = this.state.availableItems.map(function(e) {
                    return {
                        value: e.value,
                        description: e.description,
                        selected: t.target.checked
                    }
                });
                this.setState({
                    availableItems: r
                });
                this.props.onChange({
                    allItems: r
                })
            },
            _getDropDownMarkup: function e() {
                var t = this;
                var r = this.state.availableItems.map(function(e) {
                    var r = (0, s.default)("dropdown-item", {
                        "is-selected": e.selected
                    });
                    return a.default.createElement("li", {
                        className: "checkbox",
                        key: e.value
                    }, a.default.createElement("label", {
                        className: r
                    }, a.default.createElement("input", {
                        type: "checkbox",
                        onChange: function r(n) {
                            t._onItemChanged(n, e)
                        },
                        checked: e.selected || false,
                        value: e.value
                    }), a.default.createElement("span", null, e.description)))
                });
                var n = null;
                if (this.props.allSelectedTextResource) {
                    var o = this.state.availableItems.every(function(e) {
                        return e.selected
                    });
                    var u = (0, s.default)("dropdown-item", {
                        "is-selected": o
                    });
                    n = a.default.createElement("li", {
                        className: "checkbox",
                        key: "selectAll"
                    }, a.default.createElement("label", {
                        className: u
                    }, a.default.createElement("input", {
                        type: "checkbox",
                        onChange: this._onSelectAllChange,
                        checked: o
                    }), a.default.createElement(i.default, {
                        component: "span",
                        content: this.props.allSelectedTextResource
                    })))
                }
                var l = null;
                if (n) {
                    l = a.default.createElement("li", {
                        className: "dropdown-divider"
                    })
                }
                return a.default.createElement("ul", {
                    className: "dropdown-menu selectable"
                }, n, l, r)
            },
            _getButtonText: function e() {
                var t = this.state.availableItems;
                var r = t.filter(function(e) {
                    return e.selected
                }).map(function(e) {
                    return e.description
                });
                if (!r.length) {
                    return this.props.nothingSelectedTextResource ? a.default.createElement(i.default, {
                        content: this.props.nothingSelectedTextResource
                    }) : null
                }
                if (r.length === t.length && this.props.allSelectedTextResource) {
                    return a.default.createElement(i.default, {
                        content: this.props.allSelectedTextResource
                    })
                }
                var n = r.join(",");
                if (n.length > 35 && r.length > 1) {
                    var o = this.props.multiSelectedTextResource || "PermitVision.Label_MultiSelectDropdownItemsChecked";
                    return a.default.createElement("span", null, r.length, " ", a.default.createElement(i.default, {
                        content: o,
                        with: {
                            count: r.length
                        }
                    }))
                }
                return a.default.createElement("span", null, n)
            },
            render: function e() {
                var t = this.state.availableItems;
                var r = (0, s.default)("dropdown-toggle btn form-control", {
                    active: !!this.state.dropdownIsOpen
                });
                var n = (0, s.default)("checklist-selector dropdown dropdown-fluid", {
                    open: !!this.state.dropdownIsOpen
                });
                var o = this.state.dropdownIsOpen && !this.props.isLoading && !!t && t.length;
                var u = null;
                if (o) {
                    u = this._getDropDownMarkup()
                }
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: this.props.resourceId
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement("div", {
                    className: n
                }, a.default.createElement("button", {
                    className: r,
                    onClick: this._onThisToggleDropdown,
                    type: "button"
                }, this.props.isLoading ? a.default.createElement(f.ProgressIndicator, {
                    color: "black"
                }) : a.default.createElement("span", null, this._getButtonText())), u)))
            }
        });
        t.default = p
    },
    311: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "RegistrationNumberSearchField",
            propTypes: {
                giveFocus: a.default.PropTypes.bool,
                value: a.default.PropTypes.string,
                onChange: a.default.PropTypes.func.isRequired,
                kind: a.default.PropTypes.string.isRequired,
                onQuery: a.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "registrationNumber"
            },
            _onChange: function e(t) {
                this.props.onChange("registrationNumber", t)
            },
            _onQuery: function e() {
                this.props.onQuery()
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.Label_RegistrationNumber_Search_" + this.props.kind,
                    value: this.props.value,
                    onChange: this._onChange,
                    onQuery: this.props.onQuery,
                    giveFocus: this.props.giveFocus
                })
            }
        });
        t.default = s
    },
    312: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(168);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                var e;
                var r, n, a;
                f(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onChange = function(e) {
                    n.props.onChange(e)
                }, n._onKeyPress = function(e) {
                    if (e.which === 13 || e.keyCode === 13) {
                        e.preventDefault();
                        n.props.onChange(e.target.value);
                        n.props.onQuery(e.target.value)
                    }
                }, r), d(n, a)
            }
            n(t, [{
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: this.props.resourceId
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        component: "input",
                        value: this.props.value,
                        autoFocus: this.props.giveFocus,
                        className: "form-control filter-input",
                        onChange: this._onChange,
                        onKeyPress: this._onKeyPress
                    })))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            resourceId: o.default.PropTypes.string.isRequired,
            giveFocus: o.default.PropTypes.bool,
            onChange: o.default.PropTypes.func.isRequired,
            onQuery: o.default.PropTypes.func.isRequired,
            value: o.default.PropTypes.string
        };
        v.defaultProps = {
            giveFocus: false,
            value: ""
        };
        t.default = v
    },
    313: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = v(a);
        var i = r(279);
        var u = v(i);
        var s = r(50);
        var l = v(s);
        var c = r(8);
        var f = v(c);
        var d = r(32);
        var p = v(d);

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = o.default.createClass({
            displayName: "WorkItemVariantSearchField",
            propTypes: {
                kind: o.default.PropTypes.string.isRequired,
                onChange: o.default.PropTypes.func.isRequired,
                value: o.default.PropTypes.array
            },
            statics: {
                propertyName: "variants"
            },
            getInitialState: function e() {
                return {
                    variants: []
                }
            },
            _onVariantChanged: function e(t) {
                var r = t.allItems.filter(function(e) {
                    return e.selected
                }).map(function(e) {
                    return e.value
                });
                this.props.onChange("variants", r)
            },
            _initVariants: function e(t) {
                var r = l.default.getWorkItemKind(t).variants.map(function(e) {
                    return {
                        value: e.name,
                        description: f.default.translate("PermitVision.WorkItemVariant_" + e.name)
                    }
                });
                this.setState({
                    variants: p.default.orderBy(r, function(e) {
                        return e.description
                    })
                })
            },
            componentDidMount: function e() {
                this._initVariants(this.props.kind)
            },
            componentWillReceiveProps: function e(t) {
                if (this.props.kind !== t.kind) {
                    this._initVariants(t.kind)
                }
            },
            render: function e() {
                var t = this;
                var r = this.state.variants.map(function(e) {
                    return n({}, e, {
                        selected: p.default.find(t.props.value, function(t) {
                            return t === e.value
                        })
                    })
                });
                return o.default.createElement(u.default, {
                    availableItems: r,
                    onChange: this._onVariantChanged,
                    resourceId: "PermitVision.Label_WorkItemVariant"
                })
            }
        });
        t.default = m
    },
    314: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "TitleSearchField",
            propTypes: {
                giveFocus: a.default.PropTypes.bool,
                value: a.default.PropTypes.string,
                onChange: a.default.PropTypes.func.isRequired,
                onQuery: a.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "title"
            },
            _onChange: function e(t) {
                this.props.onChange("title", t)
            },
            _onQuery: function e() {
                this.props.onQuery()
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.Label_TitleSearch",
                    value: this.props.value,
                    onChange: this._onChange,
                    onQuery: this.props.onQuery,
                    giveFocus: this.props.giveFocus
                })
            }
        });
        t.default = s
    },
    315: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = p(o);
        var u = r(279);
        var s = p(u);
        var l = r(32);
        var c = p(l);
        var f = r(31);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function m(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function h(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var y = function(e) {
            h(t, e);

            function t(e) {
                v(this, t);
                var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onSiteChanged = r._onSiteChanged.bind(r);
                return r
            }
            a(t, [{
                key: "_onSiteChanged",
                value: function e(t) {
                    var r = t.allItems.filter(function(e) {
                        return e.selected
                    }).map(function(e) {
                        return e.value
                    });
                    this.props.onChange("sites", r)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var r = d.default.getInitialState().map(function(e) {
                        return {
                            value: e.code,
                            description: e.description
                        }
                    });
                    r = c.default.sortBy(r, function(e) {
                        return e.description
                    });
                    var a = r.map(function(e) {
                        return n({}, e, {
                            selected: c.default.find(t.props.value, function(t) {
                                return t === e.value
                            })
                        })
                    });
                    return i.default.createElement(s.default, {
                        availableItems: a,
                        onChange: this._onSiteChanged,
                        resourceId: "PermitVision.Site",
                        allSelectedTextResource: "PermitVision.Label_SelectAllSites",
                        nothingSelectedTextResource: "PermitVision.Label_SelectAllSites"
                    })
                }
            }]);
            return t
        }(i.default.Component);
        y.propTypes = {
            value: i.default.PropTypes.array,
            onChange: i.default.PropTypes.func.isRequired
        };
        y.propertyName = "sites";
        t.default = y
    },
    316: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "WorkingLocationSearchField",
            propTypes: {
                value: a.default.PropTypes.string,
                giveFocus: a.default.PropTypes.bool,
                onChange: a.default.PropTypes.func.isRequired,
                onQuery: a.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "workingLocation"
            },
            _onChange: function e(t) {
                this.props.onChange("workingLocation", t)
            },
            _onQuery: function e() {
                this.props.onQuery()
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.Label_WorkingLocationsSearch",
                    value: this.props.value,
                    onChange: this._onChange,
                    onQuery: this.props.onQuery,
                    giveFocus: this.props.giveFocus
                })
            }
        });
        t.default = s
    },
    317: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "SystemOrEquipmentDescriptionField",
            propTypes: {
                value: a.default.PropTypes.string,
                giveFocus: a.default.PropTypes.bool,
                onChange: a.default.PropTypes.func.isRequired,
                onQuery: a.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "systemOrEquipmentDescription"
            },
            _onChange: function e(t) {
                this.props.onChange("systemOrEquipmentDescription", t)
            },
            _onQuery: function e() {
                this.props.onQuery()
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.SystemAndEquipment",
                    value: this.props.value,
                    onChange: this._onChange,
                    onQuery: this.props.onQuery,
                    giveFocus: this.props.giveFocus
                })
            }
        });
        t.default = s
    },
    318: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = g(a);
        var i = r(148);
        var u = g(i);
        var s = r(195);
        var l = r(279);
        var c = g(l);
        var f = r(24);
        var d = r(8);
        var p = g(d);
        var v = r(91);
        var m = g(v);
        var h = r(32);
        var y = g(h);

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var b = [];
        var _ = o.default.createClass({
            displayName: "DisciplineSearchField",
            mixins: [u.default],
            propTypes: {
                onChange: o.default.PropTypes.func.isRequired,
                value: o.default.PropTypes.array
            },
            statics: {
                propertyName: "disciplines"
            },
            getInitialState: function e() {
                return {
                    isLoading: true
                }
            },
            _onDisciplineChanged: function e(t) {
                var r = t.allItems.filter(function(e) {
                    return e.selected
                }).map(function(e) {
                    return e.value
                });
                this.props.onChange("disciplines", r)
            },
            componentDidMount: function e() {
                var t = this;
                var r = m.default.tryGetCurrentRegion();
                this.createCancelablePromise((0, s.getDescriptors)("Discipline")).then(function(e) {
                    var n = e.map(function(e) {
                        return {
                            value: e.code,
                            description: p.default.translate("PermitVision." + r + "_Discipline_" + e.code, {
                                fallback: ":PermitVision.Discipline_" + e.code
                            })
                        }
                    });
                    b = y.default.sortBy(n, function(e) {
                        return e.description
                    });
                    t.setState({
                        isLoading: false
                    })
                }).catch(f.catchActionError)
            },
            render: function e() {
                var t = this;
                var r = b.map(function(e) {
                    return n({}, e, {
                        selected: y.default.find(t.props.value, function(t) {
                            return t === e.value
                        })
                    })
                });
                return o.default.createElement(c.default, {
                    availableItems: r,
                    isLoading: this.state.isLoading,
                    onChange: this._onDisciplineChanged,
                    resourceId: "PermitVision.Label_LeadDisciplineSearch"
                })
            }
        });
        t.default = _
    },
    575: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = _(a);
        var i = r(82);
        var u = _(i);
        var s = r(42);
        var l = _(s);
        var c = r(92);
        var f = _(c);
        var d = r(45);
        var p = _(d);
        var v = r(96);
        var m = _(v);
        var h = r(32);
        var y = _(h);
        var g = r(226);
        var b = _(g);

        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function w(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function P(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function C(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var k = function(e) {
            C(t, e);

            function t(e) {
                w(this, t);
                var r = P(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    value: r.props.selectedUser || "",
                    users: [],
                    highlightedIndex: undefined,
                    dropdownIsOpen: false
                };
                r._requestId = 0;
                r._onChange = r._onChange.bind(r);
                r._searchUsers = r._searchUsers.bind(r);
                r._userChanged = r._userChanged.bind(r);
                r._handleArrowKey = r._handleArrowKey.bind(r);
                r._handleEnterKey = r._handleEnterKey.bind(r);
                r._onKeyDown = r._onKeyDown.bind(r);
                r._renderDropdown = r._renderDropdown.bind(r);
                r._hideDropdownWhenLosingFocus = r._hideDropdownWhenLosingFocus.bind(r);
                return r
            }
            n(t, [{
                key: "componentDidMount",
                value: function e() {
                    this._debounceSearch = y.default.debounce(this._searchUsers, 400)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function e(t) {
                    if (t.selectedUser !== this.state.value) {
                        this.setState({
                            value: t.selectedUser || ""
                        })
                    }
                }
            }, {
                key: "componentWillUpdate",
                value: function e(t, r) {
                    var n = this.state;
                    if (!n.dropdownIsOpen && r.dropdownIsOpen) {
                        document.body.addEventListener("click", this._hideDropdownWhenLosingFocus)
                    } else if (n.dropdownIsOpen && !r.dropdownIsOpen) {
                        this._removeOnClickListener()
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    this._removeOnClickListener()
                }
            }, {
                key: "_removeOnClickListener",
                value: function e() {
                    document.body.removeEventListener("click", this._hideDropdownWhenLosingFocus)
                }
            }, {
                key: "_hideDropdownWhenLosingFocus",
                value: function e(t) {
                    var r = t.target;
                    while (r) {
                        if (this._component === r) {
                            return
                        }
                        r = r.parentNode
                    }
                    this.setState({
                        dropdownIsOpen: false
                    })
                }
            }, {
                key: "_createUnlistedUser",
                value: function e(t) {
                    return {
                        id: l.default.v4(),
                        fullName: t || "",
                        company: "",
                        isUnlisted: true
                    }
                }
            }, {
                key: "_onChange",
                value: function e(t) {
                    var r = t.target.value || "";
                    var n = !!r.trim().length;
                    this.setState({
                        value: r,
                        loading: n,
                        dropdownIsOpen: n
                    });
                    this._userChanged(this._createUnlistedUser(r));
                    if (n) {
                        this._debounceSearch(r)
                    }
                }
            }, {
                key: "_searchUsers",
                value: function e(t) {
                    var r = this;
                    this._requestId += 1;
                    var n = this._requestId;
                    p.default.Queries.getUsers({
                        site: this.props.siteCode,
                        userName: t.trim(),
                        roles: this.props.roles
                    }).then(function(e) {
                        if (n === r._requestId) {
                            r.setState({
                                users: e,
                                loading: false,
                                highlightedIndex: undefined
                            })
                        }
                    }, function() {
                        r.setState({
                            loading: false
                        })
                    })
                }
            }, {
                key: "_userChanged",
                value: function e(t, r) {
                    this.props.onChange({
                        add: r,
                        user: t
                    });
                    this.setState({
                        highlightedIndex: undefined,
                        dropdownIsOpen: !r
                    })
                }
            }, {
                key: "_handleArrowKey",
                value: function e(t) {
                    t.preventDefault();
                    if (this.state.users.length > 0) {
                        var r = this.state.highlightedIndex;
                        var n = r;
                        var a = this.state.users.length - 1;
                        var o = b.default.upArrow,
                            i = b.default.downArrow;
                        if (r === undefined) {
                            n = 0
                        } else if (t.which === o && r > 0) {
                            n -= 1
                        } else if (t.which === i && r < a) {
                            n += 1
                        }
                        this.setState({
                            highlightedIndex: n
                        });
                        this._scrollDropdownIfNeeded(n)
                    }
                }
            }, {
                key: "_scrollDropdownIfNeeded",
                value: function e(t) {
                    var r = u.default.findDOMNode(this._dropdown);
                    if (r) {
                        var n = r.children[t];
                        var a = r.scrollTop > n.offsetTop;
                        var o = r.scrollTop + r.clientHeight < n.offsetTop + n.clientHeight;
                        if (o) {
                            r.scrollTop = n.offsetTop + n.clientHeight - r.clientHeight
                        } else if (a) {
                            r.scrollTop = n.offsetTop
                        }
                    }
                }
            }, {
                key: "_handleEnterKey",
                value: function e(t) {
                    if (this.state.highlightedIndex === undefined) {
                        this._userChanged(this._createUnlistedUser(t.target.value), true)
                    } else if (this.state.users.length) {
                        var r = this.state.users[this.state.highlightedIndex];
                        this._userChanged(r, true)
                    }
                }
            }, {
                key: "_onKeyDown",
                value: function e(t) {
                    var r = b.default.upArrow,
                        n = b.default.downArrow,
                        a = b.default.enter;
                    if (t.which === a) {
                        this._handleEnterKey(t)
                    } else if (t.which === n || t.which === r) {
                        this._handleArrowKey(t)
                    }
                }
            }, {
                key: "_renderDropdown",
                value: function e() {
                    var t = this;
                    if (!this.state.dropdownIsOpen || !this.state.value.trim().length) {
                        return null
                    }
                    var r = this.state.users.map(function(e, r) {
                        var n = (0, m.default)("dropdown-item", {
                            "is-selected": r === t.state.highlightedIndex
                        });
                        return o.default.createElement("li", {
                            key: e.id,
                            className: n,
                            onClick: t._userChanged.bind(null, e, true)
                        }, e.fullName)
                    });
                    if (this.state.loading) {
                        r.unshift(o.default.createElement("li", {
                            key: "0",
                            className: "dropdown-item"
                        }, o.default.createElement(f.default, {
                            className: "text-center label-searching",
                            component: "div",
                            content: "permitvision.label_searching"
                        })))
                    } else if (!this.state.users.length) {
                        r.unshift(o.default.createElement("li", {
                            key: "0",
                            className: "dropdown-item"
                        }, o.default.createElement(f.default, {
                            className: "text-center label-no-users-found",
                            component: "div",
                            content: "permitvision.label_no_users_found"
                        })))
                    }
                    return o.default.createElement("ul", {
                        className: "dropdown-menu",
                        ref: function e(r) {
                            t._dropdown = r
                        }
                    }, r)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var r = (0, m.default)("form-control", {
                        invalid: this.props.invalid
                    });
                    return o.default.createElement("div", {
                        ref: function e(r) {
                            t._component = r
                        },
                        className: "user-selector dropdown dropdown-fluid open"
                    }, o.default.createElement("input", {
                        type: "text",
                        maxLength: "255",
                        className: r,
                        value: this.state.value,
                        onInput: this._onChange,
                        onChange: function e() {},
                        onKeyDown: this._onKeyDown
                    }), o.default.createElement("span", {
                        className: "glyphicon glyphicon-search user-selector-icon"
                    }), this._renderDropdown())
                }
            }]);
            return t
        }(o.default.Component);
        k.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            selectedUser: o.default.PropTypes.string,
            siteCode: o.default.PropTypes.string,
            roles: o.default.PropTypes.arrayOf(o.default.PropTypes.string),
            invalid: o.default.PropTypes.bool
        };
        k.defaultProps = {
            onAddUser: null,
            selectedUser: "",
            siteCode: "",
            roles: [],
            invalid: false
        };
        t.default = k
    },
    887: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.getQueryStringFromState = s;
        t.getStateFromQueryString = l;
        var o = r(39);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e) {
            var t = i.default.utcToday();
            var r = Object.keys(e).reduce(function(r, o) {
                var u = e[o];
                if ((typeof u === "undefined" ? "undefined" : a(u)) === "object") {
                    var s = false;
                    var l = Object.keys(u);
                    var c = l.reduce(function(e, a) {
                        var l = u[a];
                        if (i.default.usesUtc(l)) {
                            s = true;
                            var c = n({}, u, r[o]);
                            c[a] = {
                                type: "date",
                                day: i.default.differenceInUtc(l, t, "days")
                            };
                            r[o] = c
                        }
                        return e
                    }, u);
                    if (!s) {
                        r[o] = c
                    }
                } else {
                    r[o] = u
                }
                return r
            }, {});
            return r
        }

        function l(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var r = i.default.utcToday();
            var n = {};
            var a = Object.keys(t);
            if (a.length) {
                n = a.reduce(function(e, n) {
                    if (!/\[/.test(n)) {
                        e[n] = t[n]
                    } else if (/\[]$/.test(n)) {
                        e[n.replace(/\[]$/, "")] = [].concat(t[n])
                    } else if (/(.*)\[(.*)\]\[(.*)\]$/.test(n)) {
                        var a = /(.*)\[(.*)\]\[(.*)\]$/.exec(n);
                        var o = e[a[1]] = e[a[1]] || {};
                        var u = o[a[2]] = o[a[2]] || {};
                        u[a[3]] = t[n];
                        if (u.type === "date" && typeof + u.day === "number" && !isNaN(+u.day)) {
                            o[a[2]] = i.default.addToUtcDate(r, u.day, "days")
                        }
                    } else if (/(.*)\[(.*)\]$/.test(n)) {
                        var s = /(.*)\[(.*)\]$/.exec(n);
                        var l = e[s[1]] = e[s[1]] || {};
                        l[s[2]] = t[n]
                    } else {
                        console.warn('Unsupported key "%s" in setFilterFromQuery', n)
                    }
                    return e
                }, {
                    kind: e
                })
            } else {
                n = {
                    isDeleted: "false",
                    kind: e
                }
            }
            return n
        }
    },
    948: function(e, t, r) {
        "use strict";
        var n = r(5);
        var a = r(81);
        var o = m(a);
        var i = r(82);
        var u = m(i);
        var s = r(83);
        var l = r(949);
        var c = m(l);
        var f = r(268);
        var d = m(f);
        var p = r(84);
        var v = m(p);

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = (0, d.default)(v.default)({
            basename: ""
        });
        (0, n.start)(function() {
            u.default.render(o.default.createElement(s.Router, {
                history: h
            }, o.default.createElement(s.Route, {
                component: c.default,
                path: "/:kind"
            })), document.getElementById("reactContainer"))
        })
    },
    949: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = w(n);
        var o = r(6);
        var i = w(o);
        var u = r(86);
        var s = w(u);
        var l = r(87);
        var c = w(l);
        var f = r(89);
        var d = w(f);
        var p = r(234);
        var v = w(p);
        var m = r(238);
        var h = w(m);
        var y = r(240);
        var g = w(y);
        var b = r(950);
        var _ = w(b);

        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var P = a.default.createClass({
            displayName: "Main",
            propTypes: {
                params: a.default.PropTypes.object.isRequired,
                location: a.default.PropTypes.object.isRequired
            },
            mixins: [i.default.connect(c.default, "store")],
            componentWillMount: function e() {
                s.default.loadForKind(this.props.params.kind)
            },
            componentWillReceiveProps: function e(t) {
                if (this.props.params.kind !== t.params.kind) {
                    s.default.loadForKind(t.params.kind)
                }
            },
            render: function e() {
                return a.default.createElement("div", {
                    className: "search-certificates-container"
                }, a.default.createElement(d.default, {
                    titleResoucekey: "PermitVision.Label_CertificateKind_" + this.props.params.kind + "_Title",
                    resourceComponentName: "PermitVision",
                    primaryMenuButtons: this.state.store.primaryMenuButtons,
                    secondaryMenuButtons: this.state.store.secondaryMenuButtons,
                    tertiaryMenuButtons: this.state.store.tertiaryMenuButtons
                }, a.default.createElement(v.default, null), a.default.createElement(h.default, null)), a.default.createElement(_.default, {
                    kind: this.props.params.kind,
                    query: this.props.location.query
                }), a.default.createElement(g.default, null))
            }
        });
        t.default = P
    },
    950: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = _(o);
        var u = r(24);
        var s = r(113);
        var l = r(267);
        var c = r(77);
        var f = _(c);
        var d = r(149);
        var p = _(d);
        var v = r(951);
        var m = _(v);
        var h = r(995);
        var y = _(h);
        var g = r(997);
        var b = _(g);

        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function w(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function P(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function C(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var k = function(e) {
            C(t, e);

            function t(e) {
                w(this, t);
                var r = P(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onQuery = function() {
                    (0, l.goToLocation)(r.props.kind, r.state.filter.toQuery());
                    r._doSearch()
                };
                r._doSearch = function() {
                    r.setState({
                        status: s.statusCodes.PENDING
                    });
                    r._promiseManager.create(f.default.Queries.searchCertificates(r.state.filter.getValues())).then(function(e) {
                        return r.setState({
                            status: s.statusCodes.READY,
                            results: e
                        })
                    }).catch(u.catchActionError)
                };
                r._onFilterChanged = function(e, t) {
                    r.state.filter.updateProp(e, t);
                    r.setState({
                        filter: r.state.filter
                    })
                };
                r._promiseManager = new p.default;
                r.state = n({}, r._getInitialState(e.kind), {
                    filter: y.default.fromQuery(e.kind, e.query)
                });
                return r
            }
            a(t, [{
                key: "componentDidMount",
                value: function e() {
                    if (Object.keys(this.props.query).length > 0) {
                        this._doSearch()
                    }
                }
            }, {
                key: "componentWillReceiveProps",
                value: function e(t) {
                    if (t.kind !== this.props.kind) {
                        this.setState(this._getInitialState(t.kind))
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    this._promiseManager.cancelAll()
                }
            }, {
                key: "_getInitialState",
                value: function e(t) {
                    return {
                        status: s.statusCodes.INITIAL,
                        filter: new y.default({
                            kind: t
                        }),
                        results: {
                            columns: [],
                            data: []
                        }
                    }
                }
            }, {
                key: "render",
                value: function e() {
                    return i.default.createElement("div", {
                        className: "search-certificates-content"
                    }, i.default.createElement(m.default, {
                        kind: this.props.kind,
                        onFilterChanged: this._onFilterChanged,
                        onQuery: this._onQuery,
                        filter: this.state.filter
                    }), i.default.createElement(b.default, {
                        kind: this.props.kind,
                        status: this.state.status,
                        results: this.state.results,
                        triggerSearch: this._onQuery
                    }))
                }
            }]);
            return t
        }(i.default.Component);
        k.propTypes = {
            kind: i.default.PropTypes.string.isRequired,
            query: i.default.PropTypes.object
        };
        k.defaultProps = {
            query: {}
        };
        t.default = k
    },
    951: function(e, t, r) {
        "use strict";
        var n = r(81);
        var a = N(n);
        var o = r(8);
        var i = N(o);
        var u = r(92);
        var s = N(u);
        var l = r(50);
        var c = N(l);
        var f = r(952);
        var d = O(f);
        var p = r(994);
        var v = N(p);
        var m = r(995);
        var h = N(m);
        var y = r(96);
        var g = N(y);
        var b = r(32);
        var _ = N(b);
        var w = r(23);
        var P = N(w);
        var C = r(153);
        var k = N(C);
        var T = r(996);
        var E = N(T);

        function O(e) {
            if (e && e.__esModule) {
                return e
            } else {
                var t = {};
                if (e != null) {
                    for (var r in e) {
                        if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
                    }
                }
                t.default = e;
                return t
            }
        }

        function N(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var S = a.default.createClass({
            displayName: "Filter",
            propTypes: {
                kind: a.default.PropTypes.string.isRequired,
                filter: a.default.PropTypes.instanceOf(h.default).isRequired,
                onFilterChanged: a.default.PropTypes.func.isRequired,
                onQuery: a.default.PropTypes.func.isRequired
            },
            getInitialState: function e() {
                return {
                    expanded: true
                }
            },
            _onChange: function e(t, r) {
                this.props.onFilterChanged(t, r)
            },
            _onSearchButtonClicked: function e(t) {
                t.preventDefault();
                this.props.onQuery()
            },
            _onExportButtonClicked: function e(t) {
                t.preventDefault();
                var r = "api/search/certificates";
                var n = _.default.assign({
                    culture: i.default.getLocale(),
                    take: 2147483647,
                    kind: this.props.kind
                }, this.props.filter.getValues());
                P.default.downloadFile(r, JSON.stringify(n), "post", "search.xlsx", "application/json", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            },
            onToggleButtonClicked: function e() {
                this.setState({
                    expanded: !this.state.expanded
                })
            },
            _getFields: function e() {
                var t = this;
                var r = c.default.getWorkItemKind(this.props.kind).workspace.certificatesSearchPageFields;
                return r.map(function(e, r) {
                    var n = d[e.name];
                    var o = e.kind || t.props.kind;
                    if (e.key.split("_")[1] === "genericText") {
                        return a.default.createElement("div", {
                            className: "col-4 search-cell",
                            key: e.key,
                            "data-field-key": e.name
                        }, a.default.createElement(v.default, {
                            giveFocus: r === 0,
                            onChange: t._onChange,
                            onQuery: t.props.onQuery,
                            field: e,
                            value: (t.props.filter.getValue("textProperties") || {})[e.name]
                        }))
                    }
                    if (!n) {
                        return a.default.createElement("div", {
                            className: "col-4 search-cell",
                            key: e.key
                        }, a.default.createElement("div", {
                            className: "filter-label"
                        }, e.name), a.default.createElement("div", {
                            className: "filter-value"
                        }, a.default.createElement("input", {
                            type: "text",
                            className: "form-control filter-input",
                            style: {
                                backgroundColor: "gray"
                            }
                        })))
                    }
                    n = n.default || n;
                    var i = n.propertyName === "textPropertyYesNo" ? t.props.filter.getValue("textProperties", e.key) : t.props.filter.getValue(n.propertyName || e.name);
                    return a.default.createElement("div", {
                        className: "col-4 search-cell",
                        key: e.key,
                        "data-field-key": e.name
                    }, a.default.createElement(n, {
                        giveFocus: r === 0,
                        onChange: t._onChange,
                        onQuery: t.props.onQuery,
                        field: e,
                        kind: o,
                        filter: t.props.filter,
                        value: i
                    }))
                })
            },
            render: function e() {
                var t = (0, g.default)("glyphicon", {
                    "glyphicon-chevron-up": this.state.expanded,
                    "glyphicon-chevron-down": !this.state.expanded,
                    "btn-icon": !this.state.expanded
                });
                var r = !this.state.expanded ? a.default.createElement(s.default, {
                    content: "PermitVision.label_search_filters_expand"
                }) : a.default.createElement("span", null);
                var n = (0, g.default)("filter", {
                    "is-hidden": !this.state.expanded
                });
                return a.default.createElement("div", {
                    className: "search-certificates-filters"
                }, a.default.createElement("div", {
                    className: n
                }, a.default.createElement("form", {
                    className: "filter-form",
                    onSubmit: this._onSearchButtonClicked
                }, a.default.createElement("div", {
                    className: "form-group"
                }, this._getFields(), a.default.createElement(k.default, {
                    name: "search-certificates-filterActions",
                    defaultComponent: E.default,
                    kind: this.props.kind,
                    filter: this.props.filter,
                    onExportButtonClicked: this._onExportButtonClicked,
                    onSearchButtonClicked: this._onSearchButtonClicked
                }))), a.default.createElement("div", {
                    className: "toggle-button"
                }, a.default.createElement("button", {
                    type: "button",
                    className: "btn btn-sm btn-primary",
                    onClick: this.onToggleButtonClicked
                }, a.default.createElement("span", {
                    className: t
                }), r))))
            }
        });
        e.exports = S
    },
    952: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(315);
        Object.defineProperty(t, "site", {
            enumerable: true,
            get: function e() {
                return o(n).default
            }
        });
        var a = r(953);
        Object.defineProperty(t, "lastContentChangeDateRange", {
            enumerable: true,
            get: function e() {
                return o(a).default
            }
        });

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports.registrationNumber = r(311);
        e.exports.systemOrEquipmentDescription = r(317);
        e.exports.workOrderNumber = r(954);
        e.exports.workOrderDisplay = r(955);
        e.exports.title = r(314);
        e.exports.riskOfWork = r(956);
        e.exports.workDescription = r(957);
        e.exports.workingLocation = r(316);
        e.exports.state = r(958);
        e.exports.workItemVariant = r(313);
        e.exports.riskArea = r(959);
        e.exports.isDeleted = r(960);
        e.exports.isAudited = r(961);
        e.exports.hasAttachment = r(963);
        e.exports.isPlannedInShutdown = r(964);
        e.exports.discipline = r(318);
        e.exports.dateRange = r(965);
        e.exports.signedByUsername = r(966);
        e.exports.signedByUsernameForSignature = r(967);
        e.exports.hasPressureBuildUpIsolation = r(968);
        e.exports.hasUti = r(969);
        e.exports.longTermIsolation = r(970);
        e.exports.isCopied = r(971);
        e.exports.attachedWorkItemRegistrationNumber = r(972);
        e.exports.workItemAuditDateRange = r(973);
        e.exports.taskDueDateRange = r(974);
        e.exports.owner = r(975);
        e.exports.isCopyable = r(976);
        e.exports.jobCompleteIncomplete = r(977);
        e.exports.signedByCompanyName = r(978);
        e.exports.hasResultingLessons = r(979);
        e.exports.isTemplateBased = r(980);
        e.exports.hasAuditTasks = r(981);
        e.exports.compliesWithIsolationStandard = r(982);
        e.exports.compliesWithIsolationStandardAndLtiPositive = r(983);
        e.exports.multiValue = r(984);
        e.exports.riskAssessmentLevel = r(985);
        e.exports.areas = r(986);
        e.exports.textPropertyYesNo = r(987);
        e.exports.isPositive = r(989);
        e.exports.signedDateRange = r(990);
        e.exports.textPropertyBoolean = r(991);
        e.exports.timeLeft = r(992);
        e.exports.isAuditCompliant = r(993)
    },
    953: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = p(o);
        var u = r(92);
        var s = p(u);
        var l = r(160);
        var c = p(l);
        var f = r(39);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function m(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function h(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var y = function(e) {
            h(t, e);

            function t(e) {
                v(this, t);
                var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onFromDateChanged = r._onFromDateChanged.bind(r);
                r._onToDateChanged = r._onToDateChanged.bind(r);
                return r
            }
            a(t, [{
                key: "_onFromDateChanged",
                value: function e(t) {
                    var r = t.date ? d.default.utcDateFromJsDate(t.date) : null;
                    var a = n({}, this.props.value, {
                        from: r
                    });
                    this.props.onChange("lastContentChangeDateRange", a)
                }
            }, {
                key: "_onToDateChanged",
                value: function e(t) {
                    var r = t.date ? d.default.utcDateFromJsDate(t.date) : null;
                    var a = n({}, this.props.value, {
                        to: r
                    });
                    this.props.onChange("lastContentChangeDateRange", a)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props.value;
                    return i.default.createElement("div", null, i.default.createElement("div", {
                        className: "filter-label"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Label_ContentChangedDateRange"
                    })), i.default.createElement("div", {
                        className: "filter-value"
                    }, i.default.createElement("div", {
                        className: "col-6 startdate-selector"
                    }, i.default.createElement(c.default, {
                        onDateChanged: this._onFromDateChanged,
                        showOnFocus: false,
                        date: t.from,
                        format: "dd M 'yy"
                    })), i.default.createElement("div", {
                        className: "col-6 enddate-selector"
                    }, i.default.createElement(c.default, {
                        onDateChanged: this._onToDateChanged,
                        showOnFocus: false,
                        date: t.to,
                        format: "dd M 'yy"
                    }))))
                }
            }]);
            return t
        }(i.default.Component);
        y.propTypes = {
            value: i.default.PropTypes.object,
            onChange: i.default.PropTypes.func.isRequired
        };
        y.defaultProps = {
            value: {
                from: null,
                to: null
            }
        };
        y.propertyName = "lastContentChangeDateRange";
        t.default = y
    },
    954: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "WorkOrderNumberSearchField",
            propTypes: {
                giveFocus: a.default.PropTypes.bool,
                onChange: a.default.PropTypes.func.isRequired,
                kind: a.default.PropTypes.string.isRequired,
                value: a.default.PropTypes.string,
                onQuery: a.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "workOrderNumber"
            },
            _onChange: function e(t) {
                this.props.onChange("workOrderNumber", t)
            },
            _onQuery: function e() {
                this.props.onQuery()
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.Label_" + this.props.kind + "WorkOrderNumber",
                    giveFocus: this.props.giveFocus,
                    onChange: this._onChange,
                    onQuery: this.props.onQuery,
                    value: this.props.value
                })
            }
        });
        t.default = s
    },
    955: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = s(a);
        var i = r(312);
        var u = s(i);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var d = function(e) {
            f(t, e);

            function t() {
                l(this, t);
                return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            n(t, [{
                key: "render",
                value: function e() {
                    var t = this;
                    return o.default.createElement(u.default, {
                        resourceId: "PermitVision.Label_" + this.props.kind + "WorkOrderDisplay",
                        giveFocus: this.props.giveFocus,
                        onChange: function e(r) {
                            return t.props.onChange("workOrderDisplay", r)
                        },
                        onQuery: this.props.onQuery,
                        value: this.props.value
                    })
                }
            }]);
            return t
        }(o.default.Component);
        d.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            kind: o.default.PropTypes.string.isRequired,
            onQuery: o.default.PropTypes.func.isRequired,
            value: o.default.PropTypes.string,
            giveFocus: o.default.PropTypes.bool
        };
        d.defaultProps = {
            giveFocus: false,
            value: null
        };
        d.propertyName = "workOrderDisplay";
        t.default = d
    },
    956: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = p(a);
        var i = r(92);
        var u = p(i);
        var s = r(102);
        var l = r(50);
        var c = p(l);
        var f = r(32);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function m(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function h(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var y = function(e) {
            h(t, e);

            function t(e) {
                v(this, t);
                var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    risks: c.default.getWorkItemKind(r.props.kind).risks
                };
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("riskOfWork", t)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var r = this.state.risks.map(function(e) {
                        return {
                            value: e.name,
                            control: o.default.createElement("div", null, o.default.createElement("span", {
                                className: "riskofwork-colorbox",
                                style: {
                                    backgroundColor: e.color
                                }
                            }), o.default.createElement(u.default, {
                                content: "PermitVision.RiskOfWork_" + e.name
                            }))
                        }
                    });
                    r.unshift({
                        value: null,
                        control: o.default.createElement("div", {
                            className: "riskofwork-clear-element"
                        })
                    });
                    var n = null;
                    var a = null;
                    if (this.props.value) {
                        var i = d.default.find(this.state.risks, function(e) {
                            return e.name === t.props.value
                        }).color;
                        n = o.default.createElement("span", {
                            className: "riskofwork-colorbox",
                            style: {
                                backgroundColor: i
                            }
                        });
                        a = o.default.createElement("div", null, n, o.default.createElement(u.default, {
                            content: "PermitVision.RiskOfWork_" + this.props.value
                        }))
                    }
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_RiskOfWorkSearch"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(s.DropDown, {
                        items: r,
                        className: "dropdown-fluid",
                        customClassNames: {
                            button: "btn-sm"
                        },
                        selectedContent: a,
                        onSelectItem: this._onChange
                    })))
                }
            }]);
            return t
        }(o.default.Component);
        y.propTypes = {
            giveFocus: o.default.PropTypes.bool,
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired,
            onQuery: o.default.PropTypes.func.isRequired,
            kind: o.default.PropTypes.string.isRequired
        };
        y.defaultProps = {
            value: ""
        };
        y.propertyName = "riskOfWork";
        t.default = y
    },
    957: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "WorkDescriptionSearchField",
            propTypes: {
                giveFocus: a.default.PropTypes.bool,
                value: a.default.PropTypes.string,
                onChange: a.default.PropTypes.func.isRequired,
                kind: a.default.PropTypes.string.isRequired,
                onQuery: a.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "workDescription"
            },
            _onChange: function e(t) {
                this.props.onChange("workDescription", t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.Label_WorkDescription_Search_" + this.props.kind,
                    value: this.props.value,
                    onChange: this._onChange,
                    onQuery: this.props.onQuery,
                    giveFocus: this.props.giveFocus
                })
            }
        });
        t.default = s
    },
    958: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = v(a);
        var i = r(50);
        var u = v(i);
        var s = r(8);
        var l = v(s);
        var c = r(32);
        var f = v(c);
        var d = r(279);
        var p = v(d);

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = o.default.createClass({
            displayName: "StateSearchField",
            propTypes: {
                kind: o.default.PropTypes.string.isRequired,
                value: o.default.PropTypes.array,
                onChange: o.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: "states"
            },
            getDefaultProps: function e() {
                return {
                    value: []
                }
            },
            getInitialState: function e() {
                return {
                    states: []
                }
            },
            componentWillMount: function e() {
                this._initStates(this.props.kind, this.props.value)
            },
            componentWillReceiveProps: function e(t) {
                if (this.props.kind !== t.kind || this.props.value !== t.value) {
                    this._initStates(t.kind, t.value)
                }
            },
            _getNewSelectedStates: function e(t, r) {
                return t.map(function(e) {
                    return {
                        value: e.value,
                        description: e.description,
                        selected: r(e)
                    }
                })
            },
            _notifyStatesChanged: function e(t) {
                var r = t.filter(function(e) {
                    return e.selected
                }).map(function(e) {
                    return e.value
                });
                this.props.onChange("states", r)
            },
            _onStateChanged: function e(t) {
                var r = t.item,
                    a = r.value,
                    o = r.selected;
                var i = [];
                if (a === "Closed") {
                    i = this._getNewSelectedStates(this.state.states, function(e) {
                        return e.value === "Closed" && o || e.value !== "Closed" && !o
                    })
                } else if (a === "nonClosed") {
                    i = this._getNewSelectedStates(this.state.states, function(e) {
                        return e.value !== "Closed" && o || e.value === "Closed" && !o
                    })
                } else {
                    i = this.state.states.map(function(e) {
                        var t = n({}, e);
                        if (e.value === a) {
                            t.selected = o
                        }
                        if (e.value === "nonClosed" || e.value === "Closed") {
                            t.selected = false
                        }
                        return t
                    })
                }
                this.setState({
                    states: i
                });
                this._notifyStatesChanged(i)
            },
            _initStates: function e(t) {
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var n = u.default.getWorkItemKind(t).states;
                var a = n.map(function(e) {
                    return {
                        value: e.name,
                        description: l.default.translate("PermitVision.CertificateState_" + t + "_" + e.name),
                        selected: false
                    }
                });
                a.push({
                    value: "nonClosed",
                    description: l.default.translate("PermitVision.Label_NonClosedText")
                });
                a = f.default.sortBy(a, function(e) {
                    return e.description
                });
                a = this._getNewSelectedStates(a, function(e) {
                    return e.selected = r.indexOf(e.value) !== -1
                });
                this.setState({
                    states: a
                });
                if (!r || !r.length) {
                    var o = n.map(function(e) {
                        return e.name
                    }).filter(function(e) {
                        return e !== "Closed"
                    }).concat("nonClosed");
                    this.props.onChange("states", o)
                }
            },
            render: function e() {
                return o.default.createElement(p.default, {
                    availableItems: this.state.states,
                    onChange: this._onStateChanged,
                    resourceId: "PermitVision.Status"
                })
            }
        });
        t.default = m
    },
    959: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(109);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = "riskAreas";
        var f = a.default.createClass({
            displayName: "RiskAreaSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: c
            },
            _onRiskAreaChanged: function e(t) {
                this.props.onChange(c, [t.target.value])
            },
            render: function e() {
                var t = this.props.value && this.props.value.length ? this.props.value[0] : "";
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.Label_RiskArea"
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    className: "filter-input",
                    value: t || "",
                    onChange: this._onRiskAreaChanged
                }, a.default.createElement("option", {
                    value: ""
                }), a.default.createElement("option", {
                    value: "1"
                }, "1"), a.default.createElement("option", {
                    value: "2"
                }, "2"), a.default.createElement("option", {
                    value: "3"
                }, "3"), a.default.createElement("option", {
                    value: "4"
                }, "4"), a.default.createElement("option", {
                    value: "5"
                }, "5"))))
            }
        });
        t.default = f
    },
    960: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(92);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = "isDeleted";
        var l = a.default.createClass({
            displayName: "DeletedSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string,
                kind: a.default.PropTypes.string.isRequired
            },
            statics: {
                propertyName: s
            },
            _onChange: function e(t) {
                this.props.onChange(s, t.target.checked ? "true" : "false")
            },
            render: function e() {
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.Label_IsDeleted"
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement("input", {
                    type: "checkbox",
                    className: "filter-input",
                    checked: this.props.value === "true",
                    onChange: this._onChange
                })))
            }
        });
        t.default = l
    },
    961: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(962);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = "isAudited";
        var l = a.default.createClass({
            displayName: "IsAuditedSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: s
            },
            _onChange: function e(t) {
                this.props.onChange(s, t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    onChange: this._onChange,
                    value: this.props.value,
                    filterLabel: "PermitVision.Label_IsAudited"
                })
            }
        });
        t.default = l
    },
    962: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                var e;
                var r, n, a;
                f(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onChange = function(e) {
                    n.props.onChange(e.target.value)
                }, r), d(n, a)
            }
            n(t, [{
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: this.props.filterLabel
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        className: "filter-input",
                        onChange: this._onChange,
                        value: this.props.value
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            filterLabel: o.default.PropTypes.string.isRequired,
            value: o.default.PropTypes.string
        };
        v.defaultProps = {
            value: ""
        };
        t.default = v
    },
    963: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = f(n);
        var o = r(92);
        var i = f(o);
        var u = r(8);
        var s = f(u);
        var l = r(109);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = "hasAttachment";
        var p = a.default.createClass({
            displayName: "HasAttachmentSearchField",
            propTypes: {
                kind: a.default.PropTypes.string.isRequired,
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.object
            },
            statics: {
                propertyName: d
            },
            _onChange: function e(t) {
                var r = this.props.value || {};
                if (t.target.value) {
                    r[this.props.kind] = t.target.value
                } else {
                    delete r[this.props.kind]
                }
                this.props.onChange(d, r)
            },
            render: function e() {
                var t = "";
                if (this.props.value && this.props.value.hasOwnProperty(this.props.kind)) {
                    t = this.props.value[this.props.kind]
                }
                var r = s.default.translate("PermitVision.Label_" + this.props.kind);
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.Label_HasAttachment",
                    with: {
                        p0: r
                    }
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(c.default, {
                    value: t || "",
                    className: "filter-input",
                    onChange: this._onChange
                }, a.default.createElement("option", {
                    value: ""
                }), a.default.createElement(i.default, {
                    component: "option",
                    value: "true",
                    content: "PermitVision.Attached"
                }), a.default.createElement(i.default, {
                    component: "option",
                    value: "false",
                    content: "PermitVision.NotAttached"
                }))))
            }
        });
        t.default = p
    },
    964: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = f(o);
        var u = r(92);
        var s = f(u);
        var l = r(109);
        var c = f(l);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function p(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function v(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var m = function(e) {
            v(t, e);

            function t(e) {
                d(this, t);
                var r = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onPlannedInShudDownChanged = r._onPlannedInShudDownChanged.bind(r);
                r._onProjectNameChanged = r._onProjectNameChanged.bind(r);
                r._onKeyPress = r._onKeyPress.bind(r);
                return r
            }
            a(t, [{
                key: "_onPlannedInShudDownChanged",
                value: function e(r) {
                    var a = this.props.value.shutdownProjectName;
                    if (r.target.value !== "true") {
                        a = ""
                    }
                    var o = n({}, this.props.value, {
                        shutdownProjectName: a,
                        isPlannedInShutdown: r.target.value
                    });
                    this.props.onChange(t.propertyName, o)
                }
            }, {
                key: "_onProjectNameChanged",
                value: function e(r) {
                    if (this.props.value.isPlannedInShutdown === "true") {
                        var a = n({}, this.props.value, {
                            shutdownProjectName: r.target.value
                        });
                        this.props.onChange(t.propertyName, a)
                    }
                }
            }, {
                key: "_onKeyPress",
                value: function e(t) {
                    if (t.which === 13 || t.keyCode === 13) {
                        t.preventDefault();
                        this._onProjectNameChanged(t);
                        this.props.onQuery(t.target.value)
                    }
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props,
                        r = t.value,
                        n = t.field;
                    var a = n.showProjectName ? i.default.createElement("div", {
                        className: "col-8"
                    }, i.default.createElement("input", {
                        disabled: r.isPlannedInShutdown !== "true",
                        type: "text",
                        className: "form-control",
                        value: r.shutdownProjectName || "",
                        onInput: this._onProjectNameChanged,
                        onChange: function e() {},
                        onKeyPress: this._onKeyPress
                    })) : null;
                    return i.default.createElement("div", null, i.default.createElement("div", {
                        className: "filter-label"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Label_IsPlannedInShutdown_" + this.props.kind
                    })), i.default.createElement("div", {
                        className: "filter-value"
                    }, i.default.createElement("div", {
                        className: a ? "col-4" : "col-12"
                    }, i.default.createElement(c.default, {
                        value: r.isPlannedInShutdown || "",
                        onChange: this._onPlannedInShudDownChanged
                    }, i.default.createElement("option", {
                        value: ""
                    }), i.default.createElement(s.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), i.default.createElement(s.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))), a))
                }
            }]);
            return t
        }(i.default.Component);
        m.propTypes = {
            value: i.default.PropTypes.object,
            field: i.default.PropTypes.object.isRequired,
            onChange: i.default.PropTypes.func.isRequired,
            kind: i.default.PropTypes.string.isRequired,
            onQuery: i.default.PropTypes.func.isRequired
        };
        m.defaultProps = {
            value: {
                isPlannedInShutdown: "",
                shutdownProjectName: ""
            }
        };
        m.propertyName = "project";
        t.default = m
    },
    965: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = d(a);
        var i = r(92);
        var u = d(i);
        var s = r(160);
        var l = d(s);
        var c = r(39);
        var f = d(c);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = "dateRange";
        var v = o.default.createClass({
            displayName: "DateRangeSearchField",
            propTypes: {
                value: o.default.PropTypes.object,
                onChange: o.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: p
            },
            _startValue: null,
            _endValue: null,
            _onStartDateChanged: function e(t) {
                var r = t.date ? f.default.utcDateFromJsDate(t.date) : null;
                var a = n({}, this.props.value, {
                    endingAfter: r
                });
                this.props.onChange(p, a)
            },
            _onEndDateChanged: function e(t) {
                var r = t.date ? f.default.utcDateFromJsDate(t.date) : null;
                var a = n({}, this.props.value, {
                    startingBefore: r
                });
                this.props.onChange(p, a)
            },
            getDefaultProps: function e() {
                return {
                    value: {
                        endingAfter: null,
                        startingBefore: null
                    }
                }
            },
            render: function e() {
                var t = this.props.value;
                return o.default.createElement("div", null, o.default.createElement("div", {
                    className: "filter-label"
                }, o.default.createElement(u.default, {
                    content: "PermitVision.Label_DateRange"
                })), o.default.createElement("div", {
                    className: "filter-value"
                }, o.default.createElement("div", {
                    className: "col-6 startdate-selector"
                }, o.default.createElement(l.default, {
                    onDateChanged: this._onStartDateChanged,
                    showOnFocus: false,
                    date: t.endingAfter,
                    format: "dd M yyyy"
                })), o.default.createElement("div", {
                    className: "col-6 enddate-selector"
                }, o.default.createElement(l.default, {
                    onDateChanged: this._onEndDateChanged,
                    showOnFocus: false,
                    date: t.startingBefore,
                    format: "dd M yyyy"
                }))))
            }
        });
        t.default = v
    },
    966: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(575);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = a.default.createClass({
            displayName: "UserSelector",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: "signedByUsername"
            },
            _onUserChanged: function e(t) {
                this.props.onChange("signedByUsername", t.user.fullName)
            },
            render: function e() {
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.SignedBy"
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    onChange: this._onUserChanged,
                    selectedUser: this.props.value
                })))
            }
        });
        t.default = c
    },
    967: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(575);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = a.default.createClass({
            displayName: "SignedByUsernameForSignature",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string,
                field: a.default.PropTypes.object.isRequired
            },
            statics: {
                propertyName: "signedByUsernameForSignature"
            },
            _onUserChanged: function e(t) {
                var r = this.props.value || {};
                if (t.user.fullName) {
                    r[this.props.field.signatureType] = t.user.fullName
                } else {
                    delete r[this.props.field.signatureType]
                }
                this.props.onChange("signedByUsernameForSignature", r)
            },
            render: function e() {
                var t = (this.props.value || {})[this.props.field.signatureType];
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.SearchField_SignedBy_" + this.props.field.signatureType
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    onChange: this._onUserChanged,
                    selectedUser: t
                })))
            }
        });
        t.default = c
    },
    968: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(962);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "HasPressureBuildUpIsolationSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: "hasPressureBuildUpIsolation"
            },
            _onChange: function e(t) {
                this.props.onChange("hasPressureBuildUpIsolation", t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    onChange: this._onChange,
                    value: this.props.value,
                    filterLabel: "PermitVision.Label_HasPressureBuildUpIsolation"
                })
            }
        });
        t.default = s
    },
    969: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(962);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "HasUtiSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: "hasUti"
            },
            _onChange: function e(t) {
                this.props.onChange("hasUti", t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    onChange: this._onChange,
                    value: this.props.value,
                    filterLabel: "PermitVision.Label_HasUnableToIsolate"
                })
            }
        });
        t.default = s
    },
    970: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(109);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = a.default.createClass({
            displayName: "LongTermIsolationSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                field: a.default.PropTypes.object.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: "longTermIsolation"
            },
            _onChange: function e(t) {
                this.props.onChange("longTermIsolation", t.target.value)
            },
            _getOptions: function e() {
                if (this.props.field.options) {
                    return this.props.field.options.split(",")
                }
                return ["LtiOnly", "LtiUpForAudit", "LtiUpForReview"]
            },
            render: function e() {
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.Label_LongTermIsolation"
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    className: "filter-input",
                    value: this.props.value || "All",
                    onChange: this._onChange
                }, a.default.createElement("option", {
                    value: "All"
                }), this._getOptions().map(function(e) {
                    return a.default.createElement(i.default, {
                        key: e,
                        component: "option",
                        value: e,
                        content: "PermitVision.Label_" + e
                    })
                }))))
            }
        });
        t.default = c
    },
    971: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(962);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "IsCopiedSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: "isCopied"
            },
            _onChange: function e(t) {
                this.props.onChange("isCopied", t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    onChange: this._onChange,
                    value: this.props.value,
                    filterLabel: "PermitVision.Label_IsCopied"
                })
            }
        });
        t.default = s
    },
    972: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(312);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.default.createClass({
            displayName: "AttachedWorkItemRegistrationNumber",
            propTypes: {
                giveFocus: a.default.PropTypes.bool,
                onChange: a.default.PropTypes.func.isRequired,
                onQuery: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: "attachedRegistrationNumber"
            },
            _onChange: function e(t) {
                this.props.onChange("attachedRegistrationNumber", t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    resourceId: "PermitVision.Label_AttachedWorkItemRegistrationNumber",
                    giveFocus: this.props.giveFocus,
                    onChange: this._onChange,
                    value: this.props.value,
                    onQuery: this.props.onQuery
                })
            }
        });
        t.default = s
    },
    973: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = d(a);
        var i = r(92);
        var u = d(i);
        var s = r(160);
        var l = d(s);
        var c = r(39);
        var f = d(c);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = "auditDate";
        var v = o.default.createClass({
            displayName: "AuditDateRangeSearchField",
            propTypes: {
                kind: o.default.PropTypes.string.isRequired,
                value: o.default.PropTypes.object,
                onChange: o.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: p
            },
            _onStartDateChanged: function e(t) {
                var r = t.date ? f.default.utcDateFromJsDate(t.date) : null;
                var a = n({}, this.props.value, {
                    from: r
                });
                this.props.onChange(p, a)
            },
            _onEndDateChanged: function e(t) {
                var r = t.date ? f.default.utcDateFromJsDate(t.date) : null;
                var a = n({}, this.props.value, {
                    to: r
                });
                this.props.onChange(p, a)
            },
            getDefaultProps: function e() {
                return {
                    value: {
                        from: null,
                        to: null
                    }
                }
            },
            render: function e() {
                var t = this.props.value;
                return o.default.createElement("div", null, o.default.createElement("div", {
                    className: "filter-label"
                }, o.default.createElement(u.default, {
                    content: "PermitVision.Label_" + this.props.kind + "_DateRange",
                    fallback: ":PermitVision.Label_DateRange"
                })), o.default.createElement("div", {
                    className: "filter-value"
                }, o.default.createElement("div", {
                    className: "col-6 startdate-selector"
                }, o.default.createElement(l.default, {
                    onDateChanged: this._onStartDateChanged,
                    showOnFocus: false,
                    date: t.from
                })), o.default.createElement("div", {
                    className: "col-6 enddate-selector"
                }, o.default.createElement(l.default, {
                    onDateChanged: this._onEndDateChanged,
                    showOnFocus: false,
                    date: t.to
                }))))
            }
        });
        t.default = v
    },
    974: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = r(81);
        var o = d(a);
        var i = r(92);
        var u = d(i);
        var s = r(160);
        var l = d(s);
        var c = r(39);
        var f = d(c);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = "taskDueDate";
        var v = o.default.createClass({
            displayName: "TaskDueDateRangeSearchField",
            propTypes: {
                value: o.default.PropTypes.object,
                onChange: o.default.PropTypes.func.isRequired
            },
            statics: {
                propertyName: p
            },
            _onStartDateChanged: function e(t) {
                var r = t.date ? f.default.utcDateFromJsDate(t.date) : null;
                var a = n({}, this.props.value, {
                    from: r
                });
                this.props.onChange(p, a)
            },
            _onEndDateChanged: function e(t) {
                var r = t.date ? f.default.utcDateFromJsDate(t.date) : null;
                var a = n({}, this.props.value, {
                    to: r
                });
                this.props.onChange(p, a)
            },
            getDefaultProps: function e() {
                return {
                    value: {
                        from: null,
                        to: null
                    }
                }
            },
            render: function e() {
                var t = this.props.value;
                return o.default.createElement("div", null, o.default.createElement("div", {
                    className: "filter-label"
                }, o.default.createElement(u.default, {
                    content: "PermitVision.Label_DueDateRange"
                })), o.default.createElement("div", {
                    className: "filter-value"
                }, o.default.createElement("div", {
                    className: "col-6 startdate-selector"
                }, o.default.createElement(l.default, {
                    onDateChanged: this._onStartDateChanged,
                    showOnFocus: false,
                    date: t.from
                })), o.default.createElement("div", {
                    className: "col-6 enddate-selector"
                }, o.default.createElement(l.default, {
                    onDateChanged: this._onEndDateChanged,
                    showOnFocus: false,
                    date: t.to
                }))))
            }
        });
        t.default = v
    },
    975: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(575);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = "owner";
        var f = a.default.createClass({
            displayName: "UserSelector",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.object
            },
            statics: {
                propertyName: c
            },
            _onUserChanged: function e(t) {
                var r = t.user;
                if (!r.fullName) {
                    this.props.onChange(c, null)
                } else {
                    this.props.onChange(c, {
                        owner: r.id,
                        fullName: r.fullName
                    })
                }
            },
            getDefaultProps: function e() {
                return {
                    value: {
                        owner: null,
                        fullName: ""
                    }
                }
            },
            render: function e() {
                var t = this.props.value;
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.Label_Owner"
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    selectedUser: t.fullName,
                    onChange: this._onUserChanged
                })))
            }
        });
        t.default = f
    },
    976: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("isCopyable", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_IsCopyable"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        v.propertyName = "isCopyable";
        t.default = v
    },
    977: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("workStatusCompleted", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_JobCompleteIncomplete"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.WorkStatus_Complete"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.WorkStatus_Incomplete"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        v.propertyName = "workStatusCompleted";
        t.default = v
    },
    978: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = m(a);
        var i = r(92);
        var u = m(i);
        var s = r(109);
        var l = m(s);
        var c = r(60);
        var f = m(c);
        var d = r(149);
        var p = m(d);
        var v = r(24);

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function h(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function y(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function g(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var b = function(e) {
            g(t, e);

            function t(e) {
                h(this, t);
                var r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._promiseManager = null;
                r._promiseManager = new p.default;
                r._onChange = r._onChange.bind(r);
                r.state = {
                    companies: []
                };
                return r
            }
            n(t, [{
                key: "componentDidMount",
                value: function e() {
                    var t = this;
                    this._promiseManager.create(f.default.Queries.getCompanies()).then(function(e) {
                        return t.setState({
                            companies: e
                        })
                    }).catch(v.addGlobalError)
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    this._promiseManager.cancelAll()
                }
            }, {
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("signedByCompanyCode", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.state.companies.map(function(e) {
                        return o.default.createElement("option", {
                            key: e.code,
                            value: e.code
                        }, e.description)
                    });
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_SignedByCompany"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), t)))
                }
            }]);
            return t
        }(o.default.Component);
        b.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        b.propertyName = "signedByCompanyCode";
        t.default = b
    },
    979: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("hasResultingLessons", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_HasResultingLessons"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        v.propertyName = "hasResultingLessons";
        t.default = v
    },
    980: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("isTemplateBased", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_IsTemplateBased"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        v.propertyName = "isTemplateBased";
        t.default = v
    },
    981: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(962);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = "hasAuditTasks";
        var l = a.default.createClass({
            displayName: "HasAuditTasksSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: s
            },
            _onChange: function e(t) {
                this.props.onChange(s, t)
            },
            render: function e() {
                return a.default.createElement(i.default, {
                    onChange: this._onChange,
                    value: this.props.value,
                    filterLabel: "PermitVision.Label_HasAuditTasks"
                })
            }
        });
        t.default = l
    },
    982: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("compliesWithIsolationStandard", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_CompliesWithIsolationStandard"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        v.propertyName = "compliesWithIsolationStandard";
        t.default = v
    },
    983: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("compliesWithIsolationStandardAndLtiPositive", t.target.value)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: "PermitVision.Label_CompliesWithIsolationStandard"
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        value: this.props.value,
                        onChange: this._onChange
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "true",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "false",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            value: o.default.PropTypes.string,
            onChange: o.default.PropTypes.func.isRequired
        };
        v.propertyName = "compliesWithIsolationStandardAndLtiPositive";
        t.default = v
    },
    984: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(109);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = "multiValue";
        var f = a.default.createClass({
            displayName: "HasAttachmentSearchField",
            propTypes: {
                field: a.default.PropTypes.object.isRequired,
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.object
            },
            statics: {
                propertyName: c
            },
            _onChange: function e(t) {
                var r = this.props.value || {};
                if (t.target.value) {
                    r[this.props.field.propertyKey] = t.target.value
                } else {
                    delete r[this.props.field.propertyKey]
                }
                this.props.onChange(c, r)
            },
            render: function e() {
                var t = this;
                var r = "";
                if (this.props.value && this.props.value.hasOwnProperty(this.props.field.propertyKey)) {
                    r = this.props.value[this.props.field.propertyKey]
                }
                var n = this.props.field.allowedValues.map(function(e) {
                    return a.default.createElement(i.default, {
                        component: "option",
                        content: "PermitVision.Label_" + t.props.field.propertyKey + "_" + e,
                        value: e,
                        key: e
                    })
                });
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.MultiValueSearchField_" + this.props.field.propertyKey,
                    fallback: ":PermitVision.Label_" + this.props.field.propertyKey
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    value: r || "",
                    className: "filter-input",
                    onChange: this._onChange
                }, a.default.createElement("option", {
                    value: ""
                }), n)))
            }
        });
        t.default = f
    },
    985: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(109);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = "riskAssessmentLevel";
        var f = a.default.createClass({
            displayName: "RiskAssessmentLevelSearchField",
            propTypes: {
                onChange: a.default.PropTypes.func.isRequired,
                value: a.default.PropTypes.string
            },
            statics: {
                propertyName: c
            },
            _onRiskAssessmentLevelChange: function e(t) {
                this.props.onChange(c, t.target.value)
            },
            render: function e() {
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "filter-label"
                }, a.default.createElement(i.default, {
                    content: "PermitVision.Label_RiskAssessmentLevelSearch"
                })), a.default.createElement("div", {
                    className: "filter-value"
                }, a.default.createElement(s.default, {
                    className: "filter-input",
                    onChange: this._onRiskAssessmentLevelChange,
                    value: this.props.value || ""
                }, a.default.createElement("option", {
                    value: ""
                }), a.default.createElement(i.default, {
                    component: "option",
                    value: "Level1",
                    content: "PermitVision.RiskAssessmentLevel_Level1"
                }), a.default.createElement(i.default, {
                    component: "option",
                    value: "Level2",
                    content: "PermitVision.RiskAssessmentLevel_Level2"
                }))))
            }
        });
        t.default = f
    },
    986: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = p(o);
        var u = r(31);
        var s = p(u);
        var l = r(44);
        var c = p(l);
        var f = r(279);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function m(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function h(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var y = function(e) {
            h(t, e);

            function t(e) {
                v(this, t);
                var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            a(t, [{
                key: "componentWillMount",
                value: function e() {
                    if (!this.props.value) {
                        this.props.onChange("areas", this._accessibleAreasForUser())
                    }
                }
            }, {
                key: "componentWillReceiveProps",
                value: function e(t) {
                    if (this.props.value !== t.value && !t.value) {
                        this.props.onChange("areas", this._accessibleAreasForUser())
                    }
                }
            }, {
                key: "_accessibleAreasForUser",
                value: function e() {
                    var t = c.default.getCurrentUser().authorizationAreas;
                    var r = this._getAreasForSelectedSites();
                    var n = t.length ? r.filter(function(e) {
                        return t.indexOf(e.value) !== -1
                    }) : r;
                    return n.map(function(e) {
                        return e.value
                    })
                }
            }, {
                key: "_getAreasForSelectedSites",
                value: function e() {
                    var t = this.props.filter.getValue("sites");
                    return s.default.getInitialState().filter(function(e) {
                        return t.length === 0 || t.indexOf(e.code) !== -1
                    }).reduce(function(e, t) {
                        return e.concat(t.areas)
                    }, []).map(function(e) {
                        return {
                            value: e.code,
                            description: e.name
                        }
                    })
                }
            }, {
                key: "_onChange",
                value: function e(t) {
                    var r = (t.allItems || []).filter(function(e) {
                        return e.selected
                    }).map(function(e) {
                        return e.value
                    });
                    this.props.onChange("areas", r)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props.value || [];
                    var r = this._getAreasForSelectedSites().map(function(e) {
                        return n({}, e, {
                            selected: t.indexOf(e.value) !== -1
                        })
                    });
                    return i.default.createElement(d.default, {
                        availableItems: r,
                        onChange: this._onChange,
                        resourceId: "PermitVision.Label_AreasSearch"
                    })
                }
            }]);
            return t
        }(i.default.Component);
        y.propTypes = {
            value: i.default.PropTypes.array,
            onChange: i.default.PropTypes.func.isRequired,
            filter: i.default.PropTypes.object.isRequired
        };
        y.defaultProps = {
            value: null
        };
        y.propertyName = "areas";
        t.default = y
    },
    987: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(8);
        var u = c(i);
        var s = r(988);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                var e;
                var r, n, a;
                f(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onChange = function(e) {
                    n.props.onChange({
                        textProperties: n.props.field.key
                    }, e)
                }, r), d(n, a)
            }
            n(t, [{
                key: "render",
                value: function e() {
                    var t = u.default.translate("PermitVision.Label_" + this.props.field.key + "_" + this.props.kind, {
                        fallback: "PermitVision.Label_" + this.props.field.key
                    });
                    return o.default.createElement(l.default, {
                        onChange: this._onChange,
                        value: this.props.value.InitialGasTest || "",
                        filterLabel: t
                    })
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            value: o.default.PropTypes.object,
            field: o.default.PropTypes.object.isRequired,
            kind: o.default.PropTypes.string.isRequired
        };
        v.defaultProps = {
            value: {
                InitialGasTest: ""
            }
        };
        v.propertyName = "textProperties";
        t.default = v
    },
    988: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(109);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                var e;
                var r, n, a;
                f(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onChange = function(e) {
                    n.props.onChange(e.target.value)
                }, r), d(n, a)
            }
            n(t, [{
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "filter-label"
                    }, o.default.createElement(u.default, {
                        content: this.props.filterLabel
                    })), o.default.createElement("div", {
                        className: "filter-value"
                    }, o.default.createElement(l.default, {
                        className: "filter-input",
                        onChange: this._onChange,
                        value: this.props.value
                    }, o.default.createElement("option", {
                        value: ""
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "YES",
                        content: "PermitVision.Label_Yes"
                    }), o.default.createElement(u.default, {
                        component: "option",
                        value: "NO",
                        content: "PermitVision.Label_No"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            filterLabel: o.default.PropTypes.string.isRequired,
            value: o.default.PropTypes.string
        };
        v.defaultProps = {
            value: ""
        };
        t.default = v
    },
    989: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = s(a);
        var i = r(962);
        var u = s(i);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var d = function(e) {
            f(t, e);

            function t(e) {
                l(this, t);
                var r = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onChange = r._onChange.bind(r);
                return r
            }
            n(t, [{
                key: "_onChange",
                value: function e(t) {
                    this.props.onChange("isPositive", t)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement(u.default, {
                        onChange: this._onChange,
                        value: this.props.value,
                        filterLabel: "PermitVision.IsPositive"
                    })
                }
            }]);
            return t
        }(o.default.Component);
        d.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            value: o.default.PropTypes.string
        };
        d.defaultProps = {
            value: ""
        };
        d.propertyName = "isPositive";
        t.default = d
    },
    990: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = p(o);
        var u = r(92);
        var s = p(u);
        var l = r(160);
        var c = p(l);
        var f = r(39);
        var d = p(f);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function m(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function h(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var y = "signedDateRange";
        var g = function(e) {
            h(t, e);

            function t(e) {
                v(this, t);
                var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.props.value.signatureType = r.props.field.signatureType;
                r._onStartDateChanged = r._onStartDateChanged.bind(r);
                r._onEndDateChanged = r._onEndDateChanged.bind(r);
                return r
            }
            a(t, [{
                key: "_onStartDateChanged",
                value: function e(t) {
                    var r = t.date ? d.default.utcDateFromJsDate(t.date) : null;
                    var a = n({}, this.props.value, {
                        from: r
                    });
                    this.props.onChange(y, a)
                }
            }, {
                key: "_onEndDateChanged",
                value: function e(t) {
                    var r = t.date ? d.default.utcDateFromJsDate(t.date) : null;
                    var a = n({}, this.props.value, {
                        to: r
                    });
                    this.props.onChange(y, a)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.props.value || {};
                    return i.default.createElement("div", null, i.default.createElement("div", {
                        className: "filter-label"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Label_SignedDateRange_" + this.props.field.signatureType
                    })), i.default.createElement("div", {
                        className: "filter-value"
                    }, i.default.createElement("div", {
                        className: "col-6 startdate-selector"
                    }, i.default.createElement(c.default, {
                        onDateChanged: this._onStartDateChanged,
                        showOnFocus: false,
                        date: t.from,
                        format: "dd M yyyy"
                    })), i.default.createElement("div", {
                        className: "col-6 enddate-selector"
                    }, i.default.createElement(c.default, {
                        onDateChanged: this._onEndDateChanged,
                        showOnFocus: false,
                        date: t.to,
                        format: "dd M yyyy"
                    }))))
                }
            }]);
            return t
        }(i.default.PureComponent);
        g.propTypes = {
            value: i.default.PropTypes.object,
            field: i.default.PropTypes.object.isRequired,
            onChange: i.default.PropTypes.func.isRequired
        };
        g.propertyName = y;
        g.defaultProps = {
            value: {
                from: null,
                to: null
            }
        };
        t.default = g
    },
    991: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(8);
        var u = c(i);
        var s = r(962);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t() {
                var e;
                var r, n, a;
                f(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onChange = function(e) {
                    n.props.onChange({
                        textProperties: n.props.field.key
                    }, e)
                }, r), d(n, a)
            }
            n(t, [{
                key: "render",
                value: function e() {
                    var t = u.default.translate("PermitVision.Label_" + this.props.field.key + "_" + this.props.kind, {
                        fallback: "PermitVision.Label_" + this.props.field.key
                    });
                    return o.default.createElement(l.default, {
                        onChange: this._onChange,
                        value: this.props.value,
                        filterLabel: t
                    })
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            onChange: o.default.PropTypes.func.isRequired,
            value: o.default.PropTypes.string,
            field: o.default.PropTypes.object.isRequired,
            kind: o.default.PropTypes.string.isRequired
        };
        v.propertyName = "textPropertyYesNo";
        t.default = v
    },
    992: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(109);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function e(t) {
            var r = t.value,
                n = t.onChange;
            var o = function t(r) {
                n(e.propertyName, r.target.value)
            };
            var u = "" + 24 * 60;
            return a.default.createElement("div", null, a.default.createElement("div", {
                className: "filter-label"
            }, a.default.createElement(i.default, {
                content: "PermitVision.Label_TimeLeftSearch"
            })), a.default.createElement("div", {
                className: "filter-value"
            }, a.default.createElement(s.default, {
                className: "filter-input",
                onChange: o,
                value: r || ""
            }, a.default.createElement("option", {
                value: null
            }), a.default.createElement(i.default, {
                component: "option",
                value: u,
                content: "PermitVision.TimeLeft_LessThan24Hours"
            }))))
        };
        c.propTypes = {
            onChange: a.default.PropTypes.func.isRequired,
            value: a.default.PropTypes.string
        };
        c.defaultProps = {
            value: null
        };
        c.propertyName = "timeLeft";
        t.default = c
    },
    993: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = l(n);
        var o = r(92);
        var i = l(o);
        var u = r(109);
        var s = l(u);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function e(t) {
            var r = t.onChange,
                n = t.value;
            return a.default.createElement("div", null, a.default.createElement("div", {
                className: "filter-label"
            }, a.default.createElement(i.default, {
                content: "PermitVision.Label_Search_AuditCompliantPercentage"
            })), a.default.createElement("div", {
                className: "filter-value"
            }, a.default.createElement(s.default, {
                className: "filter-input",
                onChange: function e(t) {
                    return r("isAuditCompliant", t.target.value)
                },
                value: n
            }, a.default.createElement("option", {
                value: ""
            }), a.default.createElement(i.default, {
                component: "option",
                value: "true",
                content: "PermitVision.Label_Search_AuditCompliant"
            }), a.default.createElement(i.default, {
                component: "option",
                value: "false",
                content: "PermitVision.Label_Search_AuditNotCompliant"
            }))))
        };
        c.propTypes = {
            onChange: a.default.PropTypes.func.isRequired,
            value: a.default.PropTypes.string
        };
        t.default = c
    },
    994: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = s(a);
        var i = r(312);
        var u = s(i);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var d = function(e) {
            f(t, e);

            function t() {
                var e;
                var r, n, a;
                l(this, t);
                for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) {
                    i[u] = arguments[u]
                }
                return a = (r = (n = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n), n._onChange = function(e) {
                    n.props.onChange({
                        textProperties: n.props.field.name
                    }, e)
                }, r), c(n, a)
            }
            n(t, [{
                key: "render",
                value: function e() {
                    return o.default.createElement(u.default, {
                        resourceId: "PermitVision.Label_GenericTextSearchField_" + this.props.field.name,
                        value: this.props.value,
                        onChange: this._onChange,
                        onQuery: this.props.onQuery,
                        giveFocus: this.props.giveFocus
                    })
                }
            }]);
            return t
        }(o.default.Component);
        d.propTypes = {
            giveFocus: o.default.PropTypes.bool,
            onChange: o.default.PropTypes.func.isRequired,
            onQuery: o.default.PropTypes.func.isRequired,
            field: o.default.PropTypes.object.isRequired,
            value: o.default.PropTypes.string
        };
        d.defaultProps = {
            value: "",
            giveFocus: false
        };
        t.default = d
    },
    995: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var i = r(887);

        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var s = function() {
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                u(this, e);
                this._internalState = {};
                this._internalState = a({
                    isDeleted: "false",
                    sites: [],
                    textProperties: {}
                }, t)
            }
            o(e, [{
                key: "getValues",
                value: function e() {
                    return this._internalState
                }
            }, {
                key: "getValue",
                value: function e(t, r) {
                    var n = this._internalState[t];
                    return r && n ? this._internalState[t][r] : n
                }
            }, {
                key: "updateProp",
                value: function e(t, r) {
                    if ((typeof t === "undefined" ? "undefined" : n(t)) === "object") {
                        var a = Object.keys(t);
                        if (a.length !== 1) {
                            console.error("Invalid Key. Should have exactly one Key: ", typeof t === "undefined" ? "undefined" : n(t), t, r);
                            throw new Error("Invalid Key. Number of keys should be 1. Found " + a.length)
                        }
                        var o = a[0];
                        var i = t[o];
                        if (r) {
                            this._internalState[o] = this._internalState[o] || {};
                            this._internalState[o][i] = r
                        } else if (this._internalState[o] && this._internalState[o].hasOwnProperty(i)) {
                            delete this._internalState[o][i];
                            if (Object.keys(this._internalState[o]).length === 0) {
                                delete this._internalState[o]
                            }
                        }
                    } else if (!r) {
                        delete this._internalState[t]
                    } else {
                        this._internalState[t] = r
                    }
                }
            }, {
                key: "toQuery",
                value: function e() {
                    var t = a({}, this._internalState);
                    if (t.sites.length > 5) {
                        delete t.sites
                    }
                    return (0, i.getQueryStringFromState)(t)
                }
            }], [{
                key: "fromQuery",
                value: function t(r, n) {
                    return new e((0, i.getStateFromQueryString)(r, n))
                }
            }]);
            return e
        }();
        t.default = s
    },
    996: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = s(a);
        var i = r(92);
        var u = s(i);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var d = function(e) {
            f(t, e);

            function t() {
                l(this, t);
                return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            n(t, [{
                key: "render",
                value: function e() {
                    return o.default.createElement("div", {
                        className: "col-12 button-row"
                    }, o.default.createElement("button", {
                        className: "btn btn-primary pull-right search-button",
                        onClick: this.props.onSearchButtonClicked
                    }, o.default.createElement("span", {
                        className: "glyphicon glyphicon-search"
                    }), o.default.createElement(u.default, {
                        content: "PermitVision.Search"
                    })), o.default.createElement("button", {
                        className: "btn btn-primary pull-right export-button",
                        onClick: this.props.onExportButtonClicked,
                        type: "button"
                    }, o.default.createElement("span", {
                        className: "glyphicon glyphicon-cloud-download"
                    }), o.default.createElement(u.default, {
                        content: "PermitVision.ExcelExport"
                    })))
                }
            }]);
            return t
        }(o.default.Component);
        d.propTypes = {
            kind: o.default.PropTypes.string.isRequired,
            onSearchButtonClicked: o.default.PropTypes.func,
            onExportButtonClicked: o.default.PropTypes.func,
            filter: o.default.PropTypes.object
        };
        t.default = d
    },
    997: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(81);
        var a = u(n);
        var o = r(998);
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function e(t) {
            return a.default.createElement("div", {
                className: "search-certificates-results"
            }, a.default.createElement(i.default, {
                kind: t.kind,
                results: t.results,
                status: t.status,
                triggerSearch: t.triggerSearch
            }))
        };
        s.propTypes = {
            kind: a.default.PropTypes.string.isRequired,
            results: a.default.PropTypes.object.isRequired,
            status: a.default.PropTypes.string.isRequired,
            triggerSearch: a.default.PropTypes.func.isRequired
        };
        t.default = s
    },
    998: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = S(a);
        var i = r(50);
        var u = S(i);
        var s = r(49);
        var l = r(39);
        var c = S(l);
        var f = r(92);
        var d = S(f);
        var p = r(144);
        var v = S(p);
        var m = r(999);
        var h = S(m);
        var y = r(8);
        var g = S(y);
        var b = r(32);
        var _ = S(b);
        var w = r(44);
        var P = S(w);
        var C = r(100);
        var k = r(146);
        var T = N(k);
        var E = r(1e3);
        var O = S(E);

        function N(e) {
            if (e && e.__esModule) {
                return e
            } else {
                var t = {};
                if (e != null) {
                    for (var r in e) {
                        if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
                    }
                }
                t.default = e;
                return t
            }
        }

        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function M(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function j(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function D(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var R = function(e) {
            D(t, e);

            function t(e) {
                M(this, t);
                var r = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onCertificateClicked = r._onCertificateClicked.bind(r);
                r._getColumns = r._getColumns.bind(r);
                r._mapResults = r._mapResults.bind(r);
                r._getSelectedRows = r._getSelectedRows.bind(r);
                r._hasPermissionsForMassSigning = r._hasPermissionsForMassSigning.bind(r);
                return r
            }
            n(t, [{
                key: "componentWillMount",
                value: function e() {
                    var t = this;
                    this._columnFormatDefinition = [{
                        columns: ["hasPrerequisites", "hasResultingLessons", "hasIccAttached", "isAudited", "isShutdownTurnAround", "anyIsolationSchemeDoesNotMeetStandard", "allIsolationSchemesMeetStandard", "isPositive", "hasRiskAssessmentLevel2", "compliesWithIsolationStandardAndLtiPositive"],
                        formatter: h.default.boolean
                    }, {
                        columns: ["plannedStartDateTime", "createdAt", "auditDate", "nextReviewAt", "initialPeriodStartDate", "lastRevalidationPeriodStartDate", "taskDueDate"],
                        formatter: h.default.shortDate,
                        template: "#=data.%field_name% ? kendo.toString(new Date(%field_name%),'dd MMM yyyy') : ''#",
                        groupHeaderTemplate: "#=value ? kendo.toString(new Date(value),'dd MMM yyyy') : '%field_display_name%:'#"
                    }, {
                        columns: ["occurredtAt", "handoverStartDate", "initialPeriodStartDateTime", "lastRevalidationPeriodStartDateTime", "contentChangedAt", "isolationInPlaceDateTime"],
                        formatter: h.default.shortDateTime,
                        template: "#=data.%field_name% ? kendo.toString(new Date(%field_name%),'dd MMM yyyy HH:mm') : ''#",
                        groupHeaderTemplate: "#=value ? kendo.toString(new Date(value),'dd MMM yyyy HH:mm') : '%field_display_name%:'#"
                    }, {
                        columns: ["occurredtTime", "startTime", "endTime"],
                        formatter: h.default.shortTime
                    }, {
                        columns: ["status"],
                        formatter: function e(r) {
                            return g.default.translate("PermitVision.CertificateState_" + t.props.kind + "_" + r)
                        }
                    }, {
                        columns: ["workItemVariant"],
                        formatter: function e(t) {
                            return g.default.translate("PermitVision.WorkItemVariant_" + t)
                        }
                    }, {
                        columns: ["riskAssessmentLevel"],
                        formatter: function e(t) {
                            return t ? g.default.translate("PermitVision.RiskAssessmentLevel_" + t) : ""
                        }
                    }, {
                        columns: ["workItemImage"],
                        formatter: function e(t, r, n) {
                            return '<img src="api/certificateimage' + ("?kind=" + n("kind")) + ("&state=" + n("status")) + ("&variant=" + n("workItemVariant")) + ("&riskOfWork=" + n("riskOfWork")) + ("&isTemplateBased=" + n("isTemplateBased")) + ("&riskAssessmentLevel=" + n("riskAssessmentLevel")) + '&imageType=Small" width="25" height="25" />'
                        }
                    }, {
                        columns: ["expiresIn"],
                        formatter: function e(t) {
                            return !t || t > 0 ? t : g.default.translate("PermitVision.Label_Expired")
                        }
                    }, {
                        columns: ["expiresAtUtcDateTime"],
                        formatter: function e(r) {
                            return t._formatTimeLeft(r)
                        }
                    }, {
                        columns: ["auditCompliantPercentage"],
                        formatter: h.default.percentage
                    }]
                }
            }, {
                key: "_formatTimeLeft",
                value: function e(t) {
                    if (!t) {
                        return ""
                    }
                    var r = c.default.differenceInUtc(c.default.utcDateTimeFromJsDateTime(new Date(t)), c.default.utcNow(), "minutes");
                    if (r < 0) {
                        return g.default.translate("PermitVision.Label_Expired")
                    }
                    return T.format(T.fromMinutes(r))
                }
            }, {
                key: "_onCertificateClicked",
                value: function e(t) {
                    var r = u.default.getWorkflowBasedOnState(this.props.kind, t.status);
                    (0, s.openPopout)(t.registrationNumber, this.props.kind, r)
                }
            }, {
                key: "_getColumns",
                value: function e() {
                    var t = this;
                    var r = u.default.getWorkItemKind(this.props.kind).workspace.certificatesSearchPageColumns;
                    return r.map(function(e) {
                        if (e.textPropertyKey) {
                            return {
                                field: _.default.camelCase(e.name + "_" + e.textPropertyKey),
                                title: e.titleResource ? g.default.translate("PermitVision." + e.titleResource) : g.default.translate("PermitVision.ColumnLabel_" + e.textPropertyKey),
                                width: e.width
                            }
                        }
                        var r = e.name.toLowerCase();
                        var n = _.default.camelCase(e.name);
                        var a = e.titleResource ? g.default.translate("PermitVision." + e.titleResource) : g.default.translate("PermitVision.ColumnLabel_" + e.name);
                        var o = {
                            field: n,
                            title: a,
                            width: e.width
                        };
                        var i = _.default.find(t._columnFormatDefinition, function(e) {
                            return e.columns.indexOf(n) > -1
                        });
                        if (i && i.template) {
                            if (i.template) {
                                o.template = i.template.replace(/%field_name%/g, n)
                            }
                            if (i.groupHeaderTemplate) {
                                o.groupHeaderTemplate = i.groupHeaderTemplate.replace(/%field_display_name%/g, a)
                            }
                            return o
                        }
                        if (r === "workitemimage") {
                            return {
                                field: n,
                                disableGrouping: true,
                                title: null,
                                className: "image-column",
                                width: 40
                            }
                        }
                        return o
                    })
                }
            }, {
                key: "_mapResults",
                value: function e(t) {
                    var r = this;
                    var n = this.props.results;
                    var a = n.columns.map(function(e) {
                        return _.default.camelCase(e)
                    });
                    var o = n.data.map(function(e) {
                        var t = {};
                        a.forEach(function(n, o) {
                            var i = _.default.find(r._columnFormatDefinition, function(e) {
                                return e.columns.indexOf(n) > -1
                            });
                            var u = function t(r) {
                                var n = e[a.indexOf(r)];
                                return n || ""
                            };
                            var s = i && !i.template;
                            t[n] = s ? i.formatter(e[o], e, u) : e[o]
                        });
                        return t
                    });
                    return _.default.take(o, t || 1e3)
                }
            }, {
                key: "_getSelectedRows",
                value: function e() {
                    return this._kendoGrid && this._kendoGrid.getSelectedRows() || []
                }
            }, {
                key: "_hasPermissionsForMassSigning",
                value: function e() {
                    return (0, C.isInRoleForAnySite)(P.default.getCurrentUser(), ["MassApprover"])
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var r = 1e3;
                    var n = this.props,
                        a = n.results,
                        i = n.status;
                    var s = a.data.length >= r + 1 ? [o.default.createElement(d.default, {
                        content: "PermitVision.Label_TooManyRecordsReturnedResource",
                        with: {
                            p0: r
                        }
                    })] : [];
                    var l = u.default.getWorkItemKind(this.props.kind).workspace.bulkOperations.length > 0 && this._hasPermissionsForMassSigning();
                    var c = u.default.getWorkItemKind(this.props.kind).workspace.bulkOperations.map(function(e) {
                        var r = O.default[e.name] || o.default.createElement("span", null, "Bulk operation not supported: ", e.name);
                        return o.default.createElement(r, {
                            key: e.name,
                            fieldConfig: e,
                            retrieveSelectedRows: t._getSelectedRows,
                            triggerSearch: t.props.triggerSearch
                        })
                    });
                    return o.default.createElement("div", {
                        className: "search-certificates-results-inner"
                    }, o.default.createElement(v.default, {
                        ref: function e(r) {
                            t._kendoGrid = r
                        },
                        className: "kendoGrid-pv7",
                        groupable: true,
                        resizableColumns: true,
                        reorderableColumns: true,
                        selectable: l,
                        results: this._mapResults(r),
                        status: i,
                        rowClick: this._onCertificateClicked,
                        messages: s,
                        columns: this._getColumns()
                    }), l ? o.default.createElement("div", {
                        className: "bulk-operations"
                    }, c) : null)
                }
            }]);
            return t
        }(o.default.PureComponent);
        R.propTypes = {
            kind: o.default.PropTypes.string.isRequired,
            results: o.default.PropTypes.object.isRequired,
            status: o.default.PropTypes.string.isRequired,
            triggerSearch: o.default.PropTypes.func.isRequired
        };
        t.default = R
    },
    999: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(8);
        var o = c(a);
        var i = r(39);
        var u = c(i);
        var s = r(40);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var d = function() {
            function e() {
                f(this, e)
            }
            n(e, null, [{
                key: "shortDate",
                value: function e(t) {
                    return t ? (0, l.default)(new Date(t)).format("DD MMM YYYY") : ""
                }
            }, {
                key: "shortDateTime",
                value: function e(t) {
                    return t ? (0, l.default)(new Date(t)).format("DD MMM YYYY HH:mm") : ""
                }
            }, {
                key: "shortTime",
                value: function e(t) {
                    return t ? (0, l.default)(new Date(t)).format("HH:mm") : ""
                }
            }, {
                key: "boolean",
                value: function e(t) {
                    if (t === false || t === true) {
                        return o.default.translate(t ? "PermitVision.Label_Yes" : "PermitVision.Label_No")
                    }
                    return ""
                }
            }, {
                key: "shortSiteDate",
                value: function e(t) {
                    return t ? u.default.formatSiteDate(t) : ""
                }
            }, {
                key: "shortSiteDateTime",
                value: function e(t) {
                    return t ? u.default.formatSiteDateTime(t) : ""
                }
            }, {
                key: "shortSiteTime",
                value: function e(t) {
                    return t ? u.default.formatTime(t) : ""
                }
            }]);
            return e
        }();
        d.percentage = function(e) {
            return e ? e + "%" : ""
        };
        t.default = d
    },
    1e3: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(1001);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            massSigning: a.default
        }
    },
    1001: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = c(a);
        var i = r(92);
        var u = c(i);
        var s = r(1002);
        var l = c(s);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function p(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var v = function(e) {
            p(t, e);

            function t(e) {
                f(this, t);
                var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    show: false
                };
                r._onMassSignClicked = r._onMassSignClicked.bind(r);
                r._onModalHide = r._onModalHide.bind(r);
                return r
            }
            n(t, [{
                key: "_onModalHide",
                value: function e() {
                    this.setState({
                        show: false
                    })
                }
            }, {
                key: "_onMassSignClicked",
                value: function e() {
                    this.props.retrieveSelectedRows().length && this.setState({
                        show: true
                    })
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("div", null, o.default.createElement(u.default, {
                        component: "button",
                        className: "btn btn-primary",
                        content: "PermitVision.Label_MassEditing",
                        onClick: this._onMassSignClicked
                    }), o.default.createElement(l.default, {
                        certificates: this.props.retrieveSelectedRows(),
                        signatureTypes: this.props.fieldConfig.signatureTypes.split(","),
                        show: this.state.show,
                        onHide: this._onModalHide,
                        triggerSearch: this.props.triggerSearch
                    }))
                }
            }]);
            return t
        }(o.default.Component);
        v.propTypes = {
            retrieveSelectedRows: o.default.PropTypes.func.isRequired,
            fieldConfig: o.default.PropTypes.object.isRequired,
            triggerSearch: o.default.PropTypes.func.isRequired
        };
        t.default = v
    },
    1002: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = w(a);
        var i = r(102);
        var u = r(92);
        var s = w(u);
        var l = r(78);
        var c = w(l);
        var f = r(28);
        var d = w(f);
        var p = r(149);
        var v = w(p);
        var m = r(1003);
        var h = w(m);
        var y = r(1004);
        var g = w(y);
        var b = r(1005);
        var _ = w(b);

        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function P(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) {
                    r[t] = e[t]
                }
                return r
            } else {
                return Array.from(e)
            }
        }

        function C(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function k(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function T(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var E = {
            SignatureInput: "SignatureInput",
            MassSign: "MassSign"
        };
        var O = 10;
        var N = function(e) {
            T(t, e);

            function t(e) {
                C(this, t);
                var r = k(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onSignatureChanged = r._onSignatureChanged.bind(r);
                r._onSignButtonClicked = r._onSignButtonClicked.bind(r);
                r._onModalHide = r._onModalHide.bind(r);
                r._onRetryClicked = r._onRetryClicked.bind(r);
                r._promiseManager = new v.default;
                r.state = {
                    signOptions: {},
                    certificates: r.props.certificates,
                    formMode: E.SignatureInput,
                    progress: 0,
                    massSigningErrors: [],
                    signatureVerificationErrors: []
                };
                return r
            }
            n(t, [{
                key: "componentWillReceiveProps",
                value: function e(t) {
                    if (!this.props.show && t.show) {
                        this._triggerSearchWhenClose = false;
                        this.setState({
                            certificates: t.certificates,
                            signOptions: {
                                domain: d.default.loginDomains()[0]
                            },
                            formMode: E.SignatureInput,
                            progress: 0,
                            massSigningErrors: [],
                            signatureVerificationErrors: []
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function e() {
                    this._promiseManager.cancelAll();
                    h.default.Cancel()
                }
            }, {
                key: "_onSignatureChanged",
                value: function e(t) {
                    this.setState({
                        signOptions: t,
                        signatureVerificationErrors: []
                    })
                }
            }, {
                key: "_onSignButtonClicked",
                value: function e() {
                    var t = this;
                    if (!this.state.signOptions.type || !this.state.signOptions.userName || !this.state.signOptions.password) {
                        return
                    }
                    var r = this._promiseManager.create(c.default.Commands.verifyCredentials({
                        userName: this.state.signOptions.domain + "\\" + this.state.signOptions.userName,
                        password: this.state.signOptions.password
                    }));
                    r.then(function() {
                        t._massSign(t.props.certificates)
                    }).catch(function(e) {
                        t.setState({
                            signatureVerificationErrors: e.validationErrors
                        })
                    })
                }
            }, {
                key: "_onRetryClicked",
                value: function e() {
                    var t = this.state.massSigningErrors.map(function(e) {
                        return e.certificate
                    });
                    this._massSign(t)
                }
            }, {
                key: "_massSign",
                value: function e(t) {
                    var r = this;
                    this.setState({
                        formMode: E.MassSign,
                        certificates: t,
                        progress: 0,
                        massSigningErrors: []
                    });
                    h.default.Sign({
                        certificates: t,
                        signatureType: this.state.signOptions.type,
                        userName: this.state.signOptions.domain + "\\" + this.state.signOptions.userName,
                        password: this.state.signOptions.password,
                        onAllDone: function e() {
                            r._triggerSearchWhenClose = true
                        },
                        onSignFailed: function e(t, n) {
                            var a = [].concat(P(r.state.massSigningErrors), [{
                                error: t,
                                certificate: n
                            }]);
                            r.setState({
                                massSigningErrors: a
                            })
                        },
                        onProcessedCountChanged: function e(t) {
                            r.setState({
                                progress: t
                            })
                        }
                    })
                }
            }, {
                key: "_onModalHide",
                value: function e() {
                    h.default.Cancel();
                    this._triggerSearchWhenClose && this.props.triggerSearch();
                    this.props.onHide()
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this.state.certificates.length === this.state.progress;
                    return o.default.createElement(i.Modal, {
                        show: this.props.show,
                        container: this.props.container,
                        onHide: this._onModalHide,
                        keyboard: this.state.formMode === E.SignatureInput,
                        className: "masssigning-modal-wrapper modal-full-height"
                    }, o.default.createElement(i.Modal.Header, null, o.default.createElement(i.Modal.Title, null, o.default.createElement(s.default, {
                        content: "PermitVision.Label_MassEditing"
                    }))), o.default.createElement(i.Modal.Body, null, this.state.formMode === E.SignatureInput ? o.default.createElement(g.default, {
                        signatureTypes: this.props.signatureTypes,
                        onSubmit: this._onSignButtonClicked,
                        onChanged: this._onSignatureChanged,
                        signOptions: this.state.signOptions,
                        validationErrors: this.state.signatureVerificationErrors
                    }) : o.default.createElement(_.default, {
                        certificates: this.state.certificates,
                        massSigningErrors: this.state.massSigningErrors,
                        progress: this.state.progress,
                        pageSize: O
                    })), o.default.createElement(i.Modal.Footer, null, t && this.state.massSigningErrors.length > 0 ? o.default.createElement("button", {
                        className: "btn retry-button",
                        onClick: this._onRetryClicked
                    }, o.default.createElement(s.default, {
                        content: "PermitVision.Label_MassSignRetry"
                    })) : null, this.state.formMode === E.SignatureInput ? o.default.createElement("button", {
                        type: "submit",
                        className: "btn btn-primary sign-button",
                        onClick: this._onSignButtonClicked,
                        disabled: !(this.state.signOptions.type && this.state.signOptions.userName && this.state.signOptions.password)
                    }, o.default.createElement(s.default, {
                        content: "PermitVision.SignButton"
                    })) : null, o.default.createElement("button", {
                        type: "button",
                        className: "btn",
                        onClick: this._onModalHide
                    }, o.default.createElement(s.default, {
                        content: "permitvision.Label_Close"
                    }))))
                }
            }]);
            return t
        }(o.default.Component);
        N.propTypes = {
            certificates: o.default.PropTypes.array.isRequired,
            signatureTypes: o.default.PropTypes.arrayOf(o.default.PropTypes.string).isRequired,
            show: o.default.PropTypes.bool.isRequired,
            onHide: o.default.PropTypes.func.isRequired,
            triggerSearch: o.default.PropTypes.func.isRequired,
            container: o.default.PropTypes.object
        };
        t.default = N
    },
    1003: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(78);
        var a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) {
                    r[t] = e[t]
                }
                return r
            } else {
                return Array.from(e)
            }
        }
        var u = {
            Sign: function e(t) {
                var r = this;
                var n = t.certificates,
                    o = t.onAllDone,
                    u = t.onProcessedCountChanged,
                    s = t.onSignFailed,
                    l = t.signatureType,
                    c = t.userName,
                    f = t.password;
                var d = false;
                this._canceled = false;
                var p = [].concat(i(n));
                var v = 0;
                var m = function e() {
                    v += 1;
                    u(v);
                    d = false
                };
                this._worker = setInterval(function() {
                    if (d) return;
                    d = true;
                    var e = p.shift();
                    if (!e) {
                        clearInterval(r._worker);
                        o();
                        return
                    }
                    var t = {
                        registrationNumber: e.registrationNumber,
                        certificateVersion: -1,
                        signatureType: l,
                        userName: c,
                        password: f
                    };
                    a.default.Commands.signCertificate(t).then(function() {
                        if (!r._canceled) {
                            m()
                        }
                    }).catch(function(t) {
                        if (!r._canceled) {
                            s(t, e);
                            m()
                        }
                    })
                }, 25)
            },
            Cancel: function e() {
                this._canceled = true;
                clearInterval(this._worker)
            }
        };
        t.default = u
    },
    1004: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n]
                    }
                }
            }
            return e
        };
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var o = r(81);
        var i = g(o);
        var u = r(92);
        var s = g(u);
        var l = r(102);
        var c = r(28);
        var f = g(c);
        var d = r(109);
        var p = g(d);
        var v = r(32);
        var m = g(v);
        var h = r(156);
        var y = g(h);

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function b(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function _(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function w(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var P = function(e) {
            w(t, e);

            function t(e) {
                b(this, t);
                var r = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onSignatureTypeSelected = r._onSignatureTypeSelected.bind(r);
                r._onUserNameChange = r._onUserNameChange.bind(r);
                r._onPasswordChange = r._onPasswordChange.bind(r);
                r._onInputKeyDown = r._onInputKeyDown.bind(r);
                return r
            }
            a(t, [{
                key: "_onSignatureTypeSelected",
                value: function e(t) {
                    this.props.onChanged(n({}, this.props.signOptions, {
                        type: t
                    }))
                }
            }, {
                key: "_onUserNameChange",
                value: function e(t) {
                    this.props.onChanged(n({}, this.props.signOptions, {
                        userName: t.target.value
                    }))
                }
            }, {
                key: "_onPasswordChange",
                value: function e(t) {
                    this.props.onChanged(n({}, this.props.signOptions, {
                        password: t.target.value
                    }))
                }
            }, {
                key: "_onInputKeyDown",
                value: function e(t) {
                    t.which === 13 && this.props.onSubmit()
                }
            }, {
                key: "_onDomainChange",
                value: function e(t) {
                    this.props.onChanged(n({}, this.props.signOptions, {
                        domain: t.target.value
                    }))
                }
            }, {
                key: "render",
                value: function e() {
                    var t = this;
                    var r = this.props.signatureTypes.map(function(e) {
                        return {
                            value: e,
                            control: i.default.createElement(s.default, {
                                content: "PermitVision.SignatureType_" + e
                            })
                        }
                    });
                    var n = (m.default.find(r, function(e) {
                        return e.value === t.props.signOptions.type
                    }) || {}).control;
                    return i.default.createElement("div", {
                        className: "form-horizontal"
                    }, this.props.validationErrors.length ? i.default.createElement(y.default, {
                        validationErrors: this.props.validationErrors
                    }) : null, i.default.createElement("div", {
                        className: "form-group"
                    }, i.default.createElement("label", {
                        className: "control-label col-3 is-required"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Label_SignatureType"
                    })), i.default.createElement("div", {
                        className: "col-9"
                    }, i.default.createElement(l.DropDown, {
                        items: r,
                        onSelectItem: this._onSignatureTypeSelected,
                        selectedContent: n
                    }))), i.default.createElement("div", {
                        className: "form-group"
                    }, i.default.createElement("label", {
                        htmlFor: "usernamefield",
                        className: "control-label col-3 is-required"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Username"
                    })), i.default.createElement("div", {
                        className: "col-9"
                    }, i.default.createElement(s.default, {
                        component: "input",
                        value: this.props.signOptions.userName || "",
                        onInput: this._onUserNameChange,
                        onKeyDown: this._onInputKeyDown,
                        onChange: function e() {},
                        type: "text",
                        className: "form-control username-input",
                        name: "username",
                        maxLength: "230",
                        attributes: {
                            placeholder: "PermitVision.Username"
                        }
                    }))), i.default.createElement("div", {
                        className: "form-group"
                    }, i.default.createElement("label", {
                        htmlFor: "passwordfield",
                        className: "control-label col-3 is-required"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Password"
                    })), i.default.createElement("div", {
                        className: "col-9"
                    }, i.default.createElement(s.default, {
                        component: "input",
                        value: this.props.signOptions.password || "",
                        onInput: this._onPasswordChange,
                        onKeyDown: this._onInputKeyDown,
                        onChange: function e() {},
                        type: "password",
                        autoComplete: "off",
                        className: "form-control password-input",
                        name: "password",
                        maxLength: "250",
                        attributes: {
                            placeholder: "PermitVision.Password"
                        }
                    }))), i.default.createElement("div", {
                        className: "form-group"
                    }, i.default.createElement("label", {
                        htmlFor: "domainField",
                        className: "control-label col-3"
                    }, i.default.createElement(s.default, {
                        content: "PermitVision.Label_Domain"
                    })), i.default.createElement("div", {
                        className: "col-9"
                    }, i.default.createElement(p.default, {
                        name: "domain",
                        onChange: this._onDomainChange,
                        value: this.props.signOptions.domain,
                        id: "domainField"
                    }, f.default.loginDomains().map(function(e) {
                        return i.default.createElement("option", {
                            key: e,
                            value: e
                        }, e)
                    })))))
                }
            }]);
            return t
        }(i.default.PureComponent);
        P.propTypes = {
            signatureTypes: i.default.PropTypes.arrayOf(i.default.PropTypes.string).isRequired,
            onSubmit: i.default.PropTypes.func.isRequired,
            onChanged: i.default.PropTypes.func.isRequired,
            signOptions: i.default.PropTypes.shape({
                type: i.default.PropTypes.string,
                userName: i.default.PropTypes.string,
                password: i.default.PropTypes.string,
                domain: i.default.PropTypes.string
            }).isRequired,
            validationErrors: i.default.PropTypes.array
        };
        P.defaultProps = {
            validationErrors: []
        };
        t.default = P
    },
    1005: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();
        var a = r(81);
        var o = m(a);
        var i = r(8);
        var u = m(i);
        var s = r(102);
        var l = r(92);
        var c = m(l);
        var f = r(49);
        var d = m(f);
        var p = r(32);
        var v = m(p);

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function h(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function y(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function g(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var b = function(e) {
            g(t, e);

            function t(e) {
                h(this, t);
                var r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._onCertificateReferenceClicked = r._onCertificateReferenceClicked.bind(r);
                return r
            }
            n(t, [{
                key: "_onCertificateReferenceClicked",
                value: function e() {
                    d.default.openPopout(this.props.certificate.registrationNumber)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.default.createElement("a", {
                        onClick: this._onCertificateReferenceClicked,
                        className: "certificate-popout"
                    }, o.default.createElement("span", {
                        className: "btn-icon glyphicon glyphicon-new-window"
                    }), this.props.certificate.registrationNumber)
                }
            }]);
            return t
        }(o.default.PureComponent);
        b.propTypes = {
            certificate: o.default.PropTypes.object.isRequired
        };
        var _ = function(e) {
            g(t, e);

            function t(e) {
                h(this, t);
                var r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r._renderCertificateErrorsList = function(e, t) {
                    var r = v.default.uniqBy(t, function(e) {
                        return e.code
                    });
                    return r.map(function(t) {
                        var r = {};
                        var n = function t(r) {
                            r = String(r).replace("{Kind}", e.kind);
                            return u.default.translate("permitvision." + r, {
                                fallback: r
                            })
                        };
                        var a = t.code;
                        if (e.kind) {
                            a = a.replace("{Kind}", e.kind)
                        }
                        if (t.formatParameters) {
                            Object.keys(t.formatParameters).forEach(function(e) {
                                var a = t.formatParameters[e];
                                var o = " ";
                                if (a.values && a.values.length) {
                                    o = a.values.map(n).join(", ")
                                } else if (a.value) {
                                    o = n(("" + a.value).replace("%", "%%"))
                                }
                                r[a.key] = o
                            })
                        }
                        return o.default.createElement("li", {
                            key: e.registrationNumber + "_" + t.code
                        }, o.default.createElement(c.default, {
                            content: "PermitVision." + a,
                            fallback: t.code,
                            with: r
                        }))
                    })
                };
                r._onPageChange = r._onPageChange.bind(r);
                r._getMassSigningErrorMessages = r._getMassSigningErrorMessages.bind(r);
                r.state = {
                    currentPage: 1
                };
                return r
            }
            n(t, [{
                key: "_onPageChange",
                value: function e(t) {
                    this.setState({
                        currentPage: t
                    })
                }
            }, {
                key: "_getMassSigningErrorMessages",
                value: function e() {
                    var t = this;
                    var r = (this.state.currentPage - 1) * this.props.pageSize;
                    var n = this.props.massSigningErrors.slice(r, r + this.props.pageSize).map(function(e) {
                        return o.default.createElement("li", {
                            key: e.certificate.registrationNumber,
                            className: "masssigning-error-list-item"
                        }, o.default.createElement(b, {
                            certificate: e.certificate
                        }), o.default.createElement("ul", null, t._renderCertificateErrorsList(e.certificate, e.error.validationErrors)))
                    });
                    return o.default.createElement("ul", {
                        className: "masssigning-error-list"
                    }, n)
                }
            }, {
                key: "render",
                value: function e() {
                    var t = Math.ceil(this.props.massSigningErrors.length / this.props.pageSize);
                    var r = this.props.progress !== this.props.certificates.length;
                    var n = null;
                    if (!r) {
                        var a = this.props.massSigningErrors.length > 0;
                        n = a ? o.default.createElement(s.AlertBox, {
                            type: "danger",
                            message: u.default.translate("PermitVision.Label_mass_signing_completed_with_errors", {
                                p0: this.props.massSigningErrors.length
                            })
                        }) : o.default.createElement("div", {
                            className: "alert alert-success"
                        }, o.default.createElement("span", {
                            className: "glyphicon glyphicon-ok"
                        }), o.default.createElement("p", {
                            className: "alert-content"
                        }, o.default.createElement(c.default, {
                            content: "PermitVision.Label_mass_signing_completed_successfully"
                        })))
                    } else {
                        n = o.default.createElement(s.AlertBox, {
                            type: "warning",
                            message: u.default.translate("PermitVision.Label_Mass_signing_warning_sync_stop_leaving_page")
                        })
                    }
                    return o.default.createElement("div", {
                        className: "signing-in-progress"
                    }, n, r ? o.default.createElement(s.ProgressBar, {
                        hasError: this.props.massSigningErrors.length > 0,
                        max: this.props.certificates.length,
                        text: this.props.progress + "/" + this.props.certificates.length,
                        value: this.props.progress
                    }) : null, this.props.massSigningErrors.length ? o.default.createElement(c.default, {
                        content: "PermitVision.Label_mass_signing_unable_to_sign_following",
                        component: "strong"
                    }) : null, this._getMassSigningErrorMessages(), t > 1 ? o.default.createElement(s.Pager, {
                        className: "pager-alt",
                        page: this.state.currentPage,
                        onPageChange: this._onPageChange,
                        pageSize: this.props.pageSize,
                        total: this.props.massSigningErrors.length
                    }) : null)
                }
            }]);
            return t
        }(o.default.Component);
        _.propTypes = {
            certificates: o.default.PropTypes.array.isRequired,
            pageSize: o.default.PropTypes.number.isRequired,
            massSigningErrors: o.default.PropTypes.array.isRequired,
            progress: o.default.PropTypes.number.isRequired
        };
        t.default = _
    }
});