(function() {
    var l = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ia = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            for (var d in b)
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, d);
                    e && Object.defineProperty(a, d, e)
                } else
                    a[d] = b[d]
        },
        p = this,
        aa = function(a) {
            return "number" == typeof a
        },
        ba = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array)
                        return "array";
                    if (a instanceof Object)
                        return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c)
                        return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                        return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                        return "function"
                } else
                    return "null";
            else if ("function" == b && "undefined" == typeof a.call)
                return "object";
            return b
        },
        ca = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        da = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ea = function(a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        r = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = da : r = ea;
            return r.apply(null, arguments)
        },
        fa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        u = function(a) {
            var b = ha;
            function c() {}
            c.prototype = b.prototype;
            a.ia = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ja = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                    d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var ia = (new Date).getTime();
    var w = document,
        x = window;
    var ja = function(a, b) {
            a = parseInt(a, 10);
            return isNaN(a) ? b : a
        },
        ka = function(a, b) {
            return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
        },
        la = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
        ma = function(a, b) {
            return a ? (a = a.match(la)) ? a[0] : b : b
        };
    var na = ja("90", 0),
        oa = ja("468", 0);
    var pa = function() {
            return "r20170626"
        },
        qa = ka("false", !1),
        ra = ka("false", !1),
        sa = ka("false", !1),
        ta = sa || !ra;
    var ua = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        Ca = function(a) {
            if (!va.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(wa, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(xa, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(ya, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(za, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Aa, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Ba, "&#0;"));
            return a
        },
        wa = /&/g,
        xa = /</g,
        ya = />/g,
        za = /"/g,
        Aa = /'/g,
        Ba = /\x00/g,
        va = /[\x00&<>"']/,
        Da = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        Ea = {
            "'": "\\'"
        },
        Fa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ga = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        };
    var Ha = function(a, b, c) {
            for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a)
        },
        Ia = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" == typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Ja = function(a) {
            return Array.prototype.concat.apply([], arguments)
        };
    var Ka;
    a:
    {
        var La = p.navigator;
        if (La) {
            var Ma = La.userAgent;
            if (Ma) {
                Ka = Ma;
                break a
            }
        }
        Ka = ""
    }var A = function(a) {
        return -1 != Ka.indexOf(a)
    };
    var Na = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return c
    };
    var Oa = function(a) {
        Oa[" "](a);
        return a
    };
    Oa[" "] = function() {};
    var Pa = A("Opera"),
        Qa = A("Trident") || A("MSIE"),
        Ra = A("Edge"),
        Sa = A("Gecko") && !(-1 != Ka.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        Ta = -1 != Ka.toLowerCase().indexOf("webkit") && !A("Edge"),
        Ua = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        Va;
    a:
    {
        var Wa = "",
            Xa = function() {
                var a = Ka;
                if (Sa)
                    return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Ra)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (Qa)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ta)
                    return /WebKit\/(\S+)/.exec(a);
                if (Pa)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Xa && (Wa = Xa ? Xa[1] : "");
        if (Qa) {
            var Ya = Ua();
            if (null != Ya && Ya > parseFloat(Wa)) {
                Va = String(Ya);
                break a
            }
        }
        Va = Wa
    }var Za = Va,
        $a = {},
        ab;
    var bb = p.document;
    ab = bb && Qa ? Ua() || ("CSS1Compat" == bb.compatMode ? parseInt(Za, 10) : 5) : void 0;
    var cb;
    if (!(cb = !Sa && !Qa)) {
        var db;
        if (db = Qa)
            db = 9 <= Number(ab);
        cb = db
    }
    var eb;
    if (!(eb = cb)) {
        var fb;
        if (fb = Sa) {
            var gb;
            if (Object.prototype.hasOwnProperty.call($a, "1.9.1"))
                gb = $a["1.9.1"];
            else {
                for (var hb = 0, ib = ua(String(Za)).split("."), jb = ua("1.9.1").split("."), kb = Math.max(ib.length, jb.length), lb = 0; !hb && lb < kb; lb++) {
                    var mb = ib[lb] || "",
                        nb = jb[lb] || "";
                    do {
                        var ob = /(\d*)(\D*)(.*)/.exec(mb) || ["", "", "", ""],
                            pb = /(\d*)(\D*)(.*)/.exec(nb) || ["", "", "", ""];
                        if (0 == ob[0].length && 0 == pb[0].length)
                            break;
                        hb = Fa(0 == ob[1].length ? 0 : parseInt(ob[1], 10), 0 == pb[1].length ? 0 : parseInt(pb[1], 10)) || Fa(0 == ob[2].length, 0 == pb[2].length) || Fa(ob[2], pb[2]);
                        mb = ob[3];
                        nb = pb[3]
                    } while (!hb)
                }
                gb = $a["1.9.1"] = 0 <= hb
            }
            fb = gb
        }
        eb = fb
    }
    var qb = eb;
    var rb = function(a) {
        return qb && a.children ? a.children : Ia(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    var B = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href)
                    a:
                    {
                        try {
                            Oa(a.foo);
                            b = !0;
                            break a
                        } catch (c) {}
                        b = !1
                    }return b
            } catch (c) {
                return !1
            }
        },
        sb = function(a, b) {
            var c = a.createElement("script");
            c.src = b;
            (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
        },
        C = function(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        },
        tb = function(a) {
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        },
        ub = function(a, b) {
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        vb = function(a) {
            var b = a.length;
            if (!b)
                return 0;
            for (var c = 305419896, d = 0; d < b; d++)
                c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        wb = /^([0-9.]+)px$/,
        xb = /^(-?[0-9.]{1,30})$/,
        yb = function(a) {
            return xb.test(a) && (a = Number(a), !isNaN(a)) ? a : null
        },
        zb = function(a) {
            return (a = wb.exec(a)) ? +a[1] : null
        };
    var Ab = function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                p.addEventListener("test", null, b)
            } catch (c) {}
            return a
        }(),
        Bb = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, Ab ? void 0 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Cb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, Ab ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var Db = function(a) {
            a = a || p;
            var b = a.context;
            if (!b)
                try {
                    b = a.parent.context
                } catch (c) {}
            try {
                if (b && "pageViewId" in b && "canonicalUrl" in b)
                    return b
            } catch (c) {}
            return null
        },
        Eb = function(a) {
            a = a || Db();
            if (!a)
                return null;
            a = a.master;
            return B(a) ? a : null
        };
    var Fb = function(a, b) {
        p.google_image_requests || (p.google_image_requests = []);
        var c = p.document.createElement("img");
        if (b) {
            var d = function(a) {
                b(a);
                Cb(c, "load", d);
                Cb(c, "error", d)
            };
            Bb(c, "load", d);
            Bb(c, "error", d)
        }
        c.src = a;
        p.google_image_requests.push(c)
    };
    var Gb = Object.prototype.hasOwnProperty,
        Hb = function(a, b) {
            for (var c in a)
                Gb.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Ib = function(a) {
            return !(!a || !a.call) && "function" === typeof a
        },
        Jb = function(a, b) {
            for (var c = 1, d = arguments.length; c < d; ++c)
                a.push(arguments[c])
        },
        Kb = function(a, b) {
            if (a.indexOf)
                return a = a.indexOf(b), 0 < a || !a;
            for (var c = 0; c < a.length; c++)
                if (a[c] === b)
                    return !0;
            return !1
        },
        Lb = function(a) {
            a = Eb(Db(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
        },
        Mb = function(a) {
            a = Eb(Db(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        Nb = !!window.google_async_iframe_id,
        Ob = Nb && window.parent || window,
        Pb = /(^| )adsbygoogle($| )/,
        Qb = function(a) {
            a = qa && a.google_top_window || a.top;
            return B(a) ? a : null
        };
    var D = function(a, b) {
            a = a.google_ad_modifications;
            return Kb(a ? a.eids || [] : [], b)
        },
        E = function(a, b) {
            a = a.google_ad_modifications;
            return Kb(a ? a.loeids || [] : [], b)
        },
        Rb = function(a, b, c) {
            if (!a)
                return null;
            for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
                    return a[d];
            return null
        };
    var Sb = function(a, b, c) {
        c = c ? c : {};
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Tb = function(a, b) {
            this.j = a;
            this.l = b
        },
        Ub = function(a, b, c) {
            this.url = a;
            this.j = b;
            this.Y = !!c;
            this.depth = aa(void 0) ? void 0 : null
        };
    var Vb = function(a, b, c, d, e) {
            this.w = c || 4E3;
            this.m = a || "&";
            this.B = b || ",$";
            this.s = void 0 !== d ? d : "trn";
            this.M = e || null;
            this.v = !1;
            this.l = {};
            this.C = 0;
            this.j = []
        },
        Wb = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Yb = function(a, b, c, d, e) {
            var f = [];
            ub(a, function(a, h) {
                (a = Xb(a, b, c, d, e)) && f.push(h + "=" + a)
            });
            return f.join(b)
        },
        Xb = function(a, b, c, d, e) {
            if (null == a)
                return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++)
                        f.push(Xb(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a)
                return e = e || 0, 2 > e ? encodeURIComponent(Yb(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Zb = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = Wb(c, d)
        },
        ac = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = $b(a) - d.length - 0;
            if (0 > e)
                return "";
            a.j.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var m = Yb(h[k], a.m, a.B);
                    if (m) {
                        m = c + m;
                        if (e >= m.length) {
                            e -= m.length;
                            b += m;
                            c = a.m;
                            break
                        } else
                            a.v && (c = e, m[c - 1] == a.m && --c, b += m.substr(0, c), c = a.m, e = 0);
                        d = null == d ? g : d
                    }
                }
            f = "";
            a.s && null != d && (f = c + a.s + "=" + (a.M || d));
            return b + f + ""
        },
        $b = function(a) {
            if (!a.s)
                return a.w;
            var b = 1,
                c;
            for (c in a.l)
                b = c.length > b ? c.length : b;
            return a.w - a.s.length - b - a.m.length - 1
        };
    var bc = function(a, b, c, d, e, f) {
        if ((d ? a.v : Math.random()) < (e || a.j))
            try {
                if (c instanceof Vb)
                    var g = c;
                else
                    g = new Vb, ub(c, function(a, b) {
                        var c = g,
                            d = c.C++;
                        a = Wb(b, a);
                        c.j.push(d);
                        c.l[d] = a
                    });
                var h = ac(g, a.s, a.l, a.m + b + "&");
                h && ("undefined" === typeof f ? Fb(h) : Fb(h, f))
            } catch (k) {}
    };
    var cc = function(a, b) {
        this.start = a < b ? a : b;
        this.j = a < b ? b : a
    };
    var dc = function(a, b) {
            this.j = b >= a ? new cc(a, b) : null
        },
        ec = function() {
            try {
                var a = parseInt(x.localStorage.getItem("google_experiment_mod"), 10)
            } catch (b) {
                return null
            }
            if (0 <= a && 1E3 > a)
                return a;
            a = Math.floor(1E3 * tb(x));
            try {
                return x.localStorage.setItem("google_experiment_mod", "" + a), a
            } catch (b) {
                return null
            }
        };
    var fc = !1,
        gc = function(a) {
            try {
                var b = (a || p).top.location.hash;
                if (b) {
                    var c = b.match(/\bdeid=([\d,]+)/);
                    return c && c[1] || ""
                }
            } catch (d) {}
            return ""
        },
        hc = function(a, b) {
            var c;
            if (c = (c = gc().match(new RegExp("\\b(" + a.join("|") + ")\\b"))) && c[0] || null)
                a = c;
            else if (fc)
                a = null;
            else
                a:
                {
                    if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
                        c = tb(p);
                        a = a[Math.floor(c * a.length)];
                        break a
                    }
                    a = null
                }return a
        };
    var jc = function(a, b) {
        var c = ic();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var kc = function(a, b) {
        this.events = [];
        this.l = b || p;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        b = gc(this.l);
        b = b.indexOf && 0 <= b.indexOf("1337");
        this.j = (this.j = null != c ? c : Math.random() < a) || b;
        a = this.l.performance;
        this.m = !!(a && a.mark && a.clearMarks && b)
    };
    kc.prototype.s = function(a) {
        if (a && this.m) {
            var b = this.l.performance;
            b.clearMarks("goog_" + a.uniqueId + "_start");
            b.clearMarks("goog_" + a.uniqueId + "_end")
        }
    };
    kc.prototype.start = function(a, b) {
        if (!this.j)
            return null;
        a = new jc(a, b);
        this.m && this.l.performance.mark("goog_" + a.uniqueId + "_start");
        return a
    };
    var ic = function() {
        var a = p.performance;
        return a && a.now ? a.now() : +new Date
    };
    var lc = function(a, b, c, d) {
            this.w = a;
            this.C = b;
            this.s = c;
            this.m = null;
            this.B = this.j;
            this.l = void 0 === d ? null : d;
            this.v = !1
        },
        oc = function(a, b, c, d, e) {
            try {
                if (a.l && a.l.j) {
                    var f = a.l.start(b.toString(), 3);
                    var g = c();
                    var h = a.l;
                    c = f;
                    h.j && aa(c.value) && (c.duration = ic() - c.value, h.m && h.l.performance.mark("goog_" + c.uniqueId + "_end"), h.j && h.events.push(c))
                } else
                    g = c()
            } catch (k) {
                h = a.s;
                try {
                    a.l && f && a.l.s(f), h = (e || a.B).call(a, b, new mc(nc(k), k.fileName, k.lineNumber), void 0, d)
                } catch (m) {
                    a.j(217, m)
                }
                if (!h)
                    throw k;
            }
            return g
        },
        pc = function(a, b) {
            var c = F;
            return function(d) {
                for (var e = [], f = 0; f < arguments.length; ++f)
                    e[f - 0] = arguments[f];
                return oc(c, a, function() {
                    return b.apply(void 0, e)
                }, void 0, void 0)
            }
        };
    lc.prototype.j = function(a, b, c, d, e) {
        e = e || this.C;
        try {
            var f = new Vb;
            f.v = !0;
            Zb(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new mc(nc(b), b.fileName, b.lineNumber));
            b.msg && Zb(f, 2, "msg", b.msg.substring(0, 512));
            b.file && Zb(f, 3, "file", b.file);
            0 < b.line && Zb(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.m)
                try {
                    this.m(g)
                } catch (H) {}
            if (d)
                try {
                    d(g)
                } catch (H) {}
            b = [g];
            f.j.push(5);
            f.l[5] = b;
            d = p;
            b = [];
            var g = null;
            do {
                var h = d;
                if (B(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else
                    k = g, g = null;
                b.push(new Ub(k || "", h));
                try {
                    d = h.parent
                } catch (H) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var m = b.length - 1; k <= m; ++k)
                b[k].depth = m - k;
            h = p;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (k = 1; k < b.length; ++k) {
                    var q = b[k];
                    q.url || (q.url = h.location.ancestorOrigins[k - 1] || "", q.Y = !0)
                }
            var t = new Ub(p.location.href, p, !1),
                n = b.length - 1;
            for (h = n; 0 <= h; --h) {
                var y = b[h];
                if (y.url && !y.Y) {
                    t = y;
                    break
                }
            }
            var y = null,
                v = b.length && b[n].url;
            0 != t.depth && v && (y = b[n]);
            var z = new Tb(t, y);
            z.l && Zb(f, 6, "top", z.l.url || "");
            Zb(f, 7, "url", z.j.url || "");
            bc(this.w, e, f, this.v, c)
        } catch (H) {
            try {
                bc(this.w, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: nc(H),
                    url: z.j.url
                }, this.v, c)
            } catch (ye) {}
        }
        return this.s
    };
    var nc = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;)
                        d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        mc = function(a, b, c) {
            Sb.call(this, Error(a), {
                message: a,
                file: void 0 === b ? "" : b,
                line: void 0 === c ? -1 : c
            })
        };
    l(mc, Sb);
    var qc,
        F;
    if (Nb && !B(Ob)) {
        var rc = "." + w.domain;
        try {
            for (; 2 < rc.split(".").length && !B(Ob);)
                w.domain = rc = rc.substr(rc.indexOf(".") + 1), Ob = window.parent
        } catch (a) {}
        B(Ob) || (Ob = window)
    }
    var sc = Ob,
        G = new kc(1, sc),
        tc = function(a) {
            null != a && (sc.google_measure_js_timing = a);
            sc.google_measure_js_timing || (G.events != G.l.google_js_reporting_queue && (G.events.length = 0, G.m && Ha(G.events, G.s, G)), G.j = !1)
        };
    qc = new function() {
        var a = a ? a : x;
        this.s = "http:" === a.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.m = "/pagead/gen_204?id=";
        this.j = .01;
        this.v = Math.random()
    };
    F = new lc(qc, "jserror", !0, G);
    "complete" == sc.document.readyState ? tc() : G.j && Bb(sc, "load", function() {
        tc()
    });
    var wc = function() {
            var a = [uc, vc];
            F.m = function(b) {
                Ha(a, function(a) {
                    a(b)
                })
            }
        },
        xc = function(a, b, c, d) {
            return oc(F, a, c, d, b)
        },
        yc = function(a, b) {
            return pc(a, b)
        },
        zc = F.j;
    var Ac = function(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        bc(qc, "ama", b, !0, .01, void 0)
    };
    var Bc = function(a, b, c) {
        c || (c = ta ? "https" : "http");
        x.location && "https:" == x.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    };
    var Cc = new function() {
        this.j = "google-auto-placed";
        this.l = {
            google_tag_origin: "qs"
        }
    };
    var Dc = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return b
    };
    var Ec = A("Safari") && !((A("Chrome") || A("CriOS")) && !A("Edge") || A("Coast") || A("Opera") || A("Edge") || A("Silk") || A("Android")) && !(A("iPhone") && !A("iPod") && !A("iPad") || A("iPad") || A("iPod"));
    var Fc = null,
        Gc = null,
        Hc = Sa || Ta && !Ec || Pa || "function" == typeof p.btoa,
        Ic = function(a, b) {
            if (!Fc) {
                Fc = {};
                Gc = {};
                for (var c = 0; 65 > c; c++)
                    Fc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Gc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
            }
            b = b ? Gc : Fc;
            for (var c = [], d = 0; d < a.length; d += 3) {
                var e = a[d],
                    f = d + 1 < a.length,
                    g = f ? a[d + 1] : 0,
                    h = d + 2 < a.length,
                    k = h ? a[d + 2] : 0,
                    m = e >> 2,
                    e = (e & 3) << 4 | g >> 4,
                    g = (g & 15) << 2 | k >> 6,
                    k = k & 63;
                h || (k = 64, f || (g = 64));
                c.push(b[m], b[e], b[g], b[k])
            }
            return c.join("")
        };
    var ha = function() {},
        Jc = "function" == typeof Uint8Array,
        J = function(a, b, c) {
            a.j = null;
            b || (b = []);
            a.B = void 0;
            a.s = -1;
            a.l = b;
            a:
            {
                if (a.l.length) {
                    b = a.l.length - 1;
                    var d = a.l[b];
                    if (d && "object" == typeof d && "array" != ba(d) && !(Jc && d instanceof Uint8Array)) {
                        a.v = b - a.s;
                        a.m = d;
                        break a
                    }
                }
                a.v = Number.MAX_VALUE
            }a.w = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    d = c[b], d < a.v ? (d += a.s, a.l[d] = a.l[d] || I) : a.m[d] = a.m[d] || I
        },
        I = [],
        K = function(a, b) {
            if (b < a.v) {
                b += a.s;
                var c = a.l[b];
                return c === I ? a.l[b] = [] : c
            }
            c = a.m[b];
            return c === I ? a.m[b] = [] : c
        },
        Kc = function(a, b) {
            if (b < a.v) {
                b += a.s;
                var c = a.l[b];
                return c === I ? a.l[b] = [] : c
            }
            c = a.m[b];
            return c === I ? a.m[b] = [] : c
        },
        Lc = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var d = K(a, c);
                d && (a.j[c] = new b(d))
            }
            return a.j[c]
        },
        Mc = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = Kc(a, c), e = [], f = 0; f < d.length; f++)
                    e[f] = new b(d[f]);
                a.j[c] = e
            }
            b = a.j[c];
            b == I && (b = a.j[c] = []);
            return b
        },
        Nc = function(a) {
            if (a.j)
                for (var b in a.j) {
                    var c = a.j[b];
                    if ("array" == ba(c))
                        for (var d = 0; d < c.length; d++)
                            c[d] && Nc(c[d]);
                    else
                        c && Nc(c)
                }
        };
    ha.prototype.toString = function() {
        Nc(this);
        return this.l.toString()
    };
    var Oc = function(a) {
        J(this, a, null)
    };
    u(Oc);
    var Qc = function(a) {
        J(this, a, Pc)
    };
    u(Qc);
    var Pc = [4],
        Rc = function(a) {
            J(this, a, null)
        };
    u(Rc);
    var Sc = function(a) {
        J(this, a, null)
    };
    u(Sc);
    var Uc = function(a) {
        J(this, a, Tc)
    };
    u(Uc);
    var Tc = [6, 7, 9];
    var Wc = function(a) {
        J(this, a, Vc)
    };
    u(Wc);
    var Vc = [1, 2, 5, 7],
        Xc = function(a) {
            J(this, a, null)
        };
    u(Xc);
    var Zc = function(a) {
        J(this, a, Yc)
    };
    u(Zc);
    var Yc = [2];
    var $c = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6
    };
    var ad = null,
        bd = function() {
            if (!ad) {
                for (var a = p, b = a, c = 0; a && a != a.parent;)
                    if (a = a.parent, c++, B(a))
                        b = a;
                    else
                        break;
                ad = b
            }
            return ad
        };
    var cd = {
            D: "368226004",
            A: "368226005"
        },
        dd = {
            D: "368226014",
            A: "368226015"
        },
        ed = {
            o: "10583695",
            u: "10583696"
        },
        fd = {
            o: "10573695",
            u: "10573696"
        },
        gd = {
            o: "10593695",
            u: "10593696"
        },
        hd = {
            o: "4089037",
            u: "4089038"
        },
        L = {
            o: "4089040",
            O: "4089041",
            P: "4089042",
            R: "4089043"
        },
        id = {
            o: "4089045",
            u: "4089046"
        },
        jd = {
            K: "20040067",
            o: "20040068",
            V: "1337"
        },
        kd = {
            o: "21060548",
            K: "21060549"
        },
        M = {
            o: "62710010",
            VIEWPORT: "62710011",
            L: "62710012"
        },
        ld = {
            o: "62710013",
            VIEWPORT: "62710014",
            L: "62710015"
        },
        md = {
            o: "201222021",
            I: "201222023"
        },
        nd = {
            o: "201222031",
            I: "201222033"
        },
        od = {
            o: "20040000",
            u: "20040001"
        },
        N = {
            N: "21060497",
            U: "21060498",
            T: "21060499",
            J: "21060500"
        },
        pd = {
            o: "21060538",
            u: "21060539"
        },
        qd = {
            o: "191880400",
            u: "191880401"
        },
        rd = {
            o: "191880410",
            u: "191880411"
        },
        sd = {
            o: "156549041",
            G: "156549042",
            H: "156549043",
            F: "156549044"
        },
        td = {
            o: "156549051",
            G: "156549052",
            H: "156549053",
            F: "156549054"
        },
        ud = {
            o: "21060518",
            u: "21060519"
        },
        fc = !1;
    var O = function(a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    };
    var vd = function(a, b) {
        Array.prototype.slice.call(a).forEach(b, void 0)
    };
    var wd = function(a) {
        var b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d)
            c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
            if (!c[b[d]])
                return !1;
        return !0
    };
    var xd = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Ga(d.ka);
            a[e] = d.value
        }
    };
    var yd = function(a, b, c, d) {
        this.s = a;
        this.l = b;
        this.m = c;
        this.j = d
    };
    yd.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.s,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    };
    var zd = function(a, b) {
            if (null == a.j)
                return b;
            switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
            }
        },
        Bd = function(a) {
            var b = [];
            vd(a.getElementsByTagName("p"), function(a) {
                100 <= Ad(a) && b.push(a)
            });
            return b
        },
        Ad = function(a) {
            if (3 == a.nodeType)
                return a.length;
            if (1 != a.nodeType || "SCRIPT" == a.tagName)
                return 0;
            var b = 0;
            vd(a.childNodes, function(a) {
                b += Ad(a)
            });
            return b
        },
        Cd = function(a) {
            return !a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
        };
    var Dd = {
            1: 1,
            2: 2,
            3: 3,
            0: 0
        },
        Ed = function(a) {
            return null != a ? Dd[a] : a
        },
        Fd = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        };
    var Gd = function(a, b) {
            if (!a)
                return !1;
            a = C(a, b);
            if (!a)
                return !1;
            a = a.cssFloat || a.styleFloat;
            return "left" == a || "right" == a
        },
        Hd = function(a) {
            for (a = a.previousSibling; a && 1 != a.nodeType;)
                a = a.previousSibling;
            return a ? a : null
        },
        Id = function(a) {
            return !!a.nextSibling || !!a.parentNode && Id(a.parentNode)
        };
    var Kd = function() {
            this.l = new Jd(this);
            this.j = 0
        },
        Ld = function(a) {
            if (0 != a.j)
                throw Error("Already resolved/rejected.");
        },
        Jd = function(a) {
            this.j = a
        };
    Jd.prototype.then = function(a, b) {
        if (this.l)
            throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        Md(this)
    };
    var Md = function(a) {
        switch (a.j.j) {
        case 0:
            break;
        case 1:
            a.l && a.l(a.j.s);
            break;
        case 2:
            a.m && a.m(a.j.m);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    };
    var Nd = function(a) {
            this.exception = a
        },
        Od = function(a, b, c, d) {
            this.l = a;
            this.m = b;
            this.v = c;
            this.j = d
        };
    Od.prototype.start = function() {
        this.s()
    };
    Od.prototype.s = function() {
        try {
            switch (this.l.document.readyState) {
            case "complete":
            case "interactive":
                Pd(this.m, !0);
                Qd(this);
                break;
            default:
                Pd(this.m, !1) ? Qd(this) : this.l.setTimeout(r(this.s, this), this.v)
            }
        } catch (a) {
            Qd(this, a)
        }
    };
    var Qd = function(a, b) {
        try {
            var c = a.j,
                d = new Nd(b);
            Ld(c);
            c.j = 1;
            c.s = d;
            Md(c.l)
        } catch (e) {
            a = a.j, b = e, Ld(a), a.j = 2, a.m = b, Md(a.l)
        }
    };
    var Rd = function(a, b) {
            this.j = p;
            this.v = a;
            this.s = b;
            this.m = Cc || null;
            this.l = !1
        },
        Pd = function(a, b) {
            if (a.l)
                return !0;
            try {
                var c = a.j.localStorage.getItem("google_ama_settings");
                var d = c ? new Oc(c ? JSON.parse(c) : null) : null
            } catch (g) {
                d = null
            }
            if (c = null !== d)
                d = K(d, 2), c = null == d ? !1 : d;
            if (c)
                return a = a.j.google_ama_state = a.j.google_ama_state || {}, a.eatf = !0;
            c = Mc(a.s, Uc, 1);
            for (d = 0; d < c.length; d++) {
                var e = c[d];
                if (1 == K(e, 8)) {
                    var f = Lc(e, Sc, 4);
                    if (f && 2 == K(f, 1) && Sd(a, e, b))
                        return a.l = !0, a = a.j.google_ama_state = a.j.google_ama_state || {}, a.placement = d, !0
                }
            }
            return !1
        },
        Sd = function(a, b, c) {
            if (1 != K(b, 8))
                return !1;
            var d = Lc(b, Qc, 1);
            if (!d)
                return !1;
            var e = K(d, 7);
            if (K(d, 1) || K(d, 3) || 0 < Kc(d, 4).length) {
                var f = K(d, 3),
                    g = K(d, 1);
                var h = Kc(d, 4);
                e = K(d, 2);
                var k = K(d, 5);
                d = Ed(K(d, 6));
                var m = "";
                g && (m += g);
                f && (m += "#" + Cd(f));
                if (h)
                    for (f = 0; f < h.length; f++)
                        m += "." + Cd(h[f]);
                e = (h = m) ? new yd(h, e, k, d) : null
            } else
                e = e ? new yd(e, K(d, 2), K(d, 5), Ed(K(d, 6))) : null;
            if (!e)
                return !1;
            k = [];
            try {
                k = a.j.document.querySelectorAll(e.s)
            } catch (y) {}
            if (k.length) {
                h = k.length;
                if (0 < h) {
                    d = Array(h);
                    for (f = 0; f < h; f++)
                        d[f] = k[f];
                    k = d
                } else
                    k = [];
                k = zd(e, k);
                aa(e.l) && (h = e.l, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []);
                if (aa(e.m)) {
                    h = [];
                    for (d = 0; d < k.length; d++)
                        f = Bd(k[d]), g = e.m, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
                    k = h
                }
                e = k
            } else
                e = [];
            if (!e.length)
                return !1;
            e = e[0];
            k = K(b, 2);
            k = Fd[k];
            k = void 0 !== k ? k : null;
            if (!(h = null == k)) {
                a:
                {
                    h = a.j;
                    switch (k) {
                    case 0:
                        h = Gd(Hd(e), h);
                        break a;
                    case 3:
                        h = Gd(e, h);
                        break a;
                    case 2:
                        d = e.lastChild;
                        h = Gd(d ? 1 == d.nodeType ? d : Hd(d) : null, h);
                        break a
                    }
                    h = !1
                }if (c = !h && !(!c && 2 == k && !Id(e)))
                    c = 1 == k || 2 == k ? e : e.parentNode, c = !(c && (1 != c.nodeType || "INS" != c.tagName || !wd(c)) && 0 >= c.offsetWidth);
                h = !c
            }
            if (h)
                return !1;
            b = Lc(b, Rc, 3);
            h = {};
            b && (h.$ = K(b, 1), h.X = K(b, 2), h.fa = !!K(b, 3));
            b = a.j;
            c = a.m;
            a = a.v;
            f = b.document;
            d = f.createElement("div");
            g = d.style;
            g.textAlign = "center";
            g.width = "100%";
            g.height = "auto";
            g.clear = h.fa ? "both" : "none";
            h.ga && xd(g, h.ga);
            f = f.createElement("ins");
            g = f.style;
            g.display = "block";
            g.margin = "auto";
            g.backgroundColor = "transparent";
            h.$ && (g.marginTop = h.$);
            h.X && (g.marginBottom = h.X);
            h.ea && xd(g, h.ea);
            d.appendChild(f);
            h = d;
            d = f;
            d.setAttribute("data-ad-format", "auto");
            f = [];
            if (g = c && c.j)
                h.className = g;
            g = d;
            g.className = "adsbygoogle";
            g.setAttribute("data-ad-client", a);
            f.length && g.setAttribute("data-ad-channel", f.join("+"));
            var q;
            a:
            {
                try {
                    a = h;
                    switch (k) {
                    case 0:
                        e.parentNode && e.parentNode.insertBefore(a, e);
                        break;
                    case 3:
                        var t = e.parentNode;
                        if (t) {
                            var n = e.nextSibling;
                            if (n && n.parentNode != t)
                                for (; n && 8 == n.nodeType;)
                                    n = n.nextSibling;
                            t.insertBefore(a, n)
                        }
                        break;
                    case 1:
                        e.insertBefore(a, e.firstChild);
                        break;
                    case 2:
                        e.appendChild(a)
                    }
                    if (1 != e.nodeType ? 0 : "INS" == e.tagName && wd(e))
                        e.style.display = "block";
                    t = d;
                    t.setAttribute("data-adsbygoogle-status", "reserved");
                    t = {
                        element: t
                    };
                    (q = c && c.l) && (t.params = q);
                    (b.adsbygoogle = b.adsbygoogle || []).push(t)
                } catch (y) {
                    (q = h) && q.parentNode && q.parentNode.removeChild(q);
                    q = !1;
                    break a
                }
                q = !0
            }return q ? !0 : !1
        };
    var Td = function(a) {
            Ac(a, {
                atf: 1
            })
        },
        Ud = function(a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Ac(a, {
                atf: 0
            })
        };
    var Vd = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledByReactiveTag = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.debugCard = null;
        this.messageValidationEnabled = this.debugCardRequested = !1;
        this.adRegion = this.floatingAdsFillMessage = this.grappleTagStatusService = null
    };
    var Wd = function(a) {
        if (!a)
            return !1;
        a = rb(a);
        if (!a)
            return !1;
        for (var b = 0; b < a.length; b++)
            if (a[b].hasAttribute("data-google-ad-template"))
                return !0;
        return !1
    };
    var Xd = {
            "120x90": !0,
            "160x90": !0,
            "180x90": !0,
            "200x90": !0,
            "468x15": !0,
            "728x15": !0
        },
        Yd = function(a, b) {
            if (15 == b) {
                if (728 <= a)
                    return 728;
                if (468 <= a)
                    return 468
            } else if (90 == b) {
                if (200 <= a)
                    return 200;
                if (180 <= a)
                    return 180;
                if (160 <= a)
                    return 160;
                if (120 <= a)
                    return 120
            }
            return null
        };
    var vc = function(a) {
            try {
                var b = p.google_ad_modifications;
                if (null != b) {
                    var c = Ja(b.eids, b.loeids);
                    c && 0 < c.length && (a.eid = c.join(","))
                }
            } catch (d) {}
        },
        uc = function(a) {
            a.shv = pa()
        };
    F.s = !qa;
    var P = function(a, b) {
        this.s = a;
        this.m = b
    };
    P.prototype.minWidth = function() {
        return this.s
    };
    P.prototype.height = function() {
        return this.m
    };
    P.prototype.j = function(a) {
        return 300 < a && 300 < this.m ? this.s : Math.min(1200, Math.round(a))
    };
    P.prototype.l = function(a) {
        return this.j(a) + "x" + this.height()
    };
    var Zd = {
            rectangle: 1,
            horizontal: 2,
            vertical: 4
        },
        Q = function(a, b, c) {
            P.call(this, a, b);
            this.ha = c
        };
    l(Q, P);
    var $d = function(a) {
            return function(b) {
                return !!(b.ha & a)
            }
        },
        ae = function(a, b) {
            P.call(this, a, b)
        };
    l(ae, P);
    ae.prototype.j = function() {
        return this.minWidth()
    };
    var R = [new Q(970, 90, 2), new Q(728, 90, 2), new Q(468, 60, 2), new Q(336, 280, 1), new Q(320, 100, 2), new Q(320, 50, 2), new Q(300, 600, 4), new Q(300, 250, 1), new Q(250, 250, 1), new Q(234, 60, 2), new Q(200, 200, 1), new Q(180, 150, 1), new Q(160, 600, 4), new Q(125, 125, 1), new Q(120, 600, 4), new Q(120, 240, 4)],
        be = [R[6], R[12], R[3], R[0], R[7], R[14], R[1], R[8], R[10], R[4], R[15], R[2], R[11], R[5], R[13], R[9]],
        ce = new Q(120, 120, 1),
        de = new Q(120, 50, 2);
    function ee(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = zb(a[c[d]]),
                    f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }
    var fe = function(a, b) {
            do {
                var c = C(a, b);
                if (c && "fixed" == c.position)
                    return !1
            } while (a = a.parentElement);
            return !0
        },
        ge = function(a) {
            var b = 0,
                c;
            for (c in Zd)
                -1 != a.indexOf(c) && (b |= Zd[c]);
            return b
        };
    var he = function(a, b, c) {
            if (a.style) {
                var d = zb(a.style[c]);
                if (d)
                    return d
            }
            if (a = C(a, b))
                if (c = zb(a[c]))
                    return c;
            return null
        },
        ie = function(a) {
            return function(b) {
                return b.minWidth() <= a
            }
        },
        le = function(a, b, c) {
            var d = a && je(c, b),
                e = ke(b);
            return function(a) {
                return !(d && a.height() >= e)
            }
        },
        je = function(a, b) {
            try {
                var c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                var e = {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (f) {
                e = null
            }
            a = e;
            return (a ? a.y : 0) < O(b).clientHeight - 100
        },
        me = function(a, b) {
            var c = Infinity;
            do {
                var d = he(b, a, "height");
                d && (c = Math.min(c, d));
                (d = he(b, a, "maxHeight")) && (c = Math.min(c, d))
            } while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        },
        ke = function(a) {
            var b = !Mb(a);
            return E(a, nd.I) && b ? 2 * O(a).clientHeight / 3 : 250
        };
    var ne = function(a) {
            return function(b) {
                for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b))
                        return !1;
                return !0
            }
        },
        oe = function(a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
                var g = a[f];
                if (b(g)) {
                    if (!c || c(g))
                        return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var S = function(a, b) {
        this.l = a;
        this.j = b
    };
    var T = function(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
    };
    l(T, Error);
    var pe = function(a) {
        return !(a.error && a.meta && a.id ? a.msg || nc(a.error) : nc(a)).indexOf("TagError")
    };
    var qe = function(a, b, c, d, e) {
            if (!E(c, dd.A) && !E(c, dd.D))
                return a;
            e.google_full_width_responsive_allowed = !1;
            if ("true" == e.google_full_width_responsive_optout || !("auto" == b && 488 > O(c).clientWidth && c.innerHeight >= c.innerWidth))
                return a;
            b = O(c).clientWidth;
            var f = b - a;
            if (!(f = !b || 5 > f || .3 < f / b || (qa && c.google_top_window || c.top) != c || !(e.google_safe_for_responsive_override = fe(d, c))))
                a:
                {
                    for (var f = O(c).clientWidth, g = d.parentElement, h = 0; 100 > h && g; h++) {
                        var k = C(g, c);
                        if ("hidden" == k.overflow && (k = zb(k.width)) && k < f) {
                            f = !0;
                            break a
                        }
                        g = g.parentElement
                    }
                    f = !1
                }if (f)
                return a;
            f = d.parentElement;
            if (!f)
                return a;
            e.google_full_width_responsive_allowed = !0;
            if (!E(c, dd.A))
                return a;
            e = C(f, c);
            e = zb(e.paddingLeft) || 0;
            for (h = g = 0; 100 > h && f; h++)
                g += f.offsetLeft + f.clientLeft - f.scrollLeft, f = f.offsetParent;
            e = g + e;
            "rtl" == C(d, c).direction ? d.style.marginRight = -1 * (b - a - e) + "px" : d.style.marginLeft = -1 * e + "px";
            d.style.width = b + "px";
            d.style.zIndex = 30;
            return b
        },
        ue = function(a, b, c, d, e) {
            var f = a;
            a = xc(247, zc, function() {
                return qe(a, b, c, d, e)
            });
            var g = f != a,
                f = "auto" == b ? .25 >= a / Math.min(1200, O(c).clientWidth) ? 4 : 3 : ge(b);
            e.google_responsive_formats = f;
            var h = !(A("iPad") || A("Android") && !A("Mobile") || A("Silk")) && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")) && !je(d, c) && (e.google_safe_for_responsive_override = fe(d, c)),
                k = (h ? be : R).slice(0),
                k = Ja(k, re(c)),
                m = 488 > O(c).clientWidth,
                m = [ie(a), se(m), le(m, c, d), $d(f)],
                q = [];
            if (h) {
                var t = me(c, d);
                q.push(function(a) {
                    return a.height() <= t
                })
            }
            var n = oe(k, ne(m), ne(q));
            if (!n)
                throw new T("No slot size for availableWidth=" + a);
            n = xc(248, zc, function() {
                var b = a;
                var e = n;
                if (g)
                    if (E(c, dd.A))
                        if (je(d, c))
                            b = new ae(b, e.height());
                        else {
                            var e = b / 1.2,
                                f = me(c, d),
                                f = Math.min(e, f);
                            if (f < .5 * e || 100 > f)
                                f = e;
                            b = new ae(b, Math.floor(f))
                        }
                    else
                        throw Error("Slot was expanded without experiment");
                else
                    b = e;
                return b
            });
            return new S(te(b, f), n)
        };
    function te(a, b) {
        if ("auto" == a)
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8
        }
        throw Error("bad mask");
    }
    function se(a) {
        return function(b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    }
    function re(a) {
        var b = [],
            c = E(a, td.F);
        (E(a, td.G) || c) && b.push(ce);
        (E(a, td.H) || c) && b.push(de);
        return b
    }
    ;
    var ve = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
        we = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            image_card_stacked: 1 / 1.91,
            image_card_sidebyside: 1 / 3.74,
            text: 0
        },
        xe = {
            image_sidebyside: .2667
        },
        ze = {
            image_stacked: 80,
            image_sidebyside: 0,
            image_card_stacked: 85,
            image_card_sidebyside: 0,
            text: 80
        },
        U = function(a, b) {
            P.call(this, a, b)
        };
    l(U, P);
    U.prototype.j = function(a) {
        return Math.min(1200, Math.round(a))
    };
    var Ae = function(a) {
            var b = 0;
            Hb(ve, function(c) {
                null != a[c] && ++b
            });
            if (!b)
                return !1;
            if (b == ve.length)
                return !0;
            throw new T("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
        },
        Ce = function(a, b) {
            a < oa ? (b.google_content_recommendation_ui_type = "image_sidebyside", b.google_content_recommendation_columns_num = 1, b.google_content_recommendation_rows_num = 13) : (b.google_content_recommendation_ui_type = "image_stacked", b.google_content_recommendation_columns_num = 4, b.google_content_recommendation_rows_num = 2);
            return new S(9, Be(a))
        };
    function Be(a) {
        return 1200 <= a ? new U(1200, 600) : 850 <= a ? new U(a, Math.floor(.5 * a)) : 550 <= a ? new U(a, Math.floor(.6 * a)) : 468 <= a ? new U(a, Math.floor(.7 * a)) : new U(a, Math.floor(3.44 * a))
    }
    var De = function(a, b, c, d) {
        c = c ? c : {};
        d = d ? d : {};
        var e = b.google_content_recommendation_ui_type.split(","),
            f = b.google_content_recommendation_columns_num.split(","),
            g = b.google_content_recommendation_rows_num.split(",");
        a:
        {
            if (e.length == f.length && f.length == g.length) {
                if (1 == e.length) {
                    var h = 0;
                    break a
                }
                if (2 == e.length) {
                    h = a < oa ? 0 : 1;
                    break a
                }
                throw new T("The size of element (" + e.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num, data-matched-content-rows-num is wrong.");
            }
            throw new T("The size of element (" + e.length + "," + f.length + "," + g.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num does not match.");
        }e = ua(e[h]);
        f = +f[h];
        g = +g[h];
        b.google_content_recommendation_ui_type = e;
        b.google_content_recommendation_columns_num = f;
        b.google_content_recommendation_rows_num = g;
        b = c;
        if (isNaN(f) || !f)
            throw new T("Wrong value for data-matched-content-columns-num");
        if (isNaN(g) || !g)
            throw new T("Wrong value for data-matched-content-rows-num");
        d = Math.floor(((a - 8 * f - 8) / f * (b[e] || we[e]) + (d[e] || ze[e])) * g + 8 * g + 8);
        if (1500 < a)
            throw new T("Calculated slot width is too large: " + a);
        if (1500 < d)
            throw new T("Calculated slot height is too large: " + d);
        return new S(9, new U(a, d))
    };
    var Ee = {
            "image-top": function(a) {
                return 600 >= a ? 284 + .414 * (a - 250) : 429
            },
            "image-middle": function(a) {
                return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
            },
            "image-side": function(a) {
                return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
            },
            "text-only": function(a) {
                return 500 >= a ? 187 - .228 * (a - 250) : 130
            },
            "in-article": function(a) {
                return 420 >= a ? a / 1.2 : a / 1.91 + 130
            },
            "in-article-desktop": function(a) {
                return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
            }
        },
        Fe = function(a, b) {
            if (50 > b)
                throw new T("Fluid responsive ads must be at least 50px tall: height=" + b);
            return new S(11, new P(a, b))
        },
        Ge = function(a, b) {
            var c = Ee[b];
            if (!c)
                throw new T("Invalid data-ad-layout value: " + b);
            b = Math.ceil(c(a));
            return new S(11, new P(a, b))
        };
    var V = function(a, b) {
        P.call(this, a, b)
    };
    l(V, P);
    V.prototype.j = function() {
        return this.minWidth()
    };
    V.prototype.l = function(a) {
        return P.prototype.l.call(this, a) + "_0ads_al"
    };
    var He = [new V(728, 15), new V(468, 15), new V(200, 90), new V(180, 90), new V(160, 90), new V(120, 90)],
        Ie = function(a) {
            var b = oe(He, ie(a));
            if (!b)
                throw new T("No link unit size for width=" + a + "px");
            return b
        },
        Je = function(a, b, c, d) {
            c = void 0 === c ? 130 : c;
            d = void 0 === d ? 30 : d;
            var e = Ie(a);
            a = Math.min(a, 1200);
            e = e.height();
            b = Math.max(e, b);
            return new S(10, new V(a, Math.min(b, 15 == e ? d : c)))
        };
    var Ke = function(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c)
            return D(a, ed.u) ? 6 : D(a, fd.u) ? 7 : D(a, gd.u) ? 14 : Ae(b) ? 9 : 5;
        if ("auto" == c || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(c))
            return 1;
        if ("link" == c)
            return D(a, L.O) || D(a, L.P) || D(a, L.R) ? 15 : 13;
        if ("fluid" == c)
            return 8
    };
    function Le(a, b, c, d, e) {
        var f = d.google_ad_format,
            g = d.google_ad_height || he(c, e, "height");
        switch (a) {
        default:
        case 1:
            return ue(b, f, e, c, d);
        case 5:
            return Ce(b, d);
        case 6:
            return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? b = De(b, d) : (d.google_content_recommendation_ui_type = "image_sidebyside,image_stacked", d.google_content_recommendation_columns_num = "1,4", d.google_content_recommendation_rows_num = "13,2", g = {
                image_stacked: na
            }, e = Be(b), d.google_orig_ad_width = e.j(e.minWidth()), d.google_orig_ad_height = e.height(), d.google_orig_ad_format = e.l(e.minWidth()), b = De(b, d, xe, g)), b;
        case 7:
            return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? b = De(b, d) : b < oa ? (d.google_content_recommendation_ui_type = "image_sidebyside", d.google_content_recommendation_columns_num = 1, d.google_content_recommendation_rows_num = 13, g = +d.google_content_recommendation_columns_num, g = (b - 8 * g - 8) / g, e = d.google_content_recommendation_ui_type, d = d.google_content_recommendation_rows_num - 1, b = new S(9, new U(b, Math.floor(g / 1.91 + 70) + Math.floor((g * ({}[e] || we[e]) + ({}[e] || ze[e])) * d + 8 * d + 8)))) : (d.google_content_recommendation_ui_type = "image_stacked", d.google_content_recommendation_columns_num = 4, d.google_content_recommendation_rows_num = 2, b = new S(9, Be(b))), b;
        case 14:
            return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? De(b, d) : Ce(b, d);
        case 9:
            return De(b, d);
        case 4:
            return new S(10, Ie(b));
        case 10:
            return g = Ie(b), new S(10, new V(Math.min(b, 1200), g.height()));
        case 12:
            return Je(b, Me(c, e));
        case 13:
            return d = Me(c, e), d = Je(b, d, 130, 30).j, b = d.minWidth(), d = d.height(), 15 <= g && (d = g), new S(10, new V(b, d));
        case 15:
            return d = Me(c, e), d = Je(b, d, D(e, L.O) ? 190 : D(e, L.P) ? 250 : 130, D(e, L.R) ? 90 : 30).j, b = d.minWidth(), d = d.height(), 15 <= g && (d = g), new S(10, new V(b, d));
        case 8:
            if (250 > b)
                throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" + b);
            a = "" + (d.google_ad_layout || "image-top");
            if ("in-article" == a)
                b = Math.min(E(e, qd.u) ? 1200 : 700, Math.floor(b)), b = g ? Fe(b, g) : Ge(b, E(e, qd.u) ? "in-article-desktop" : "in-article");
            else if (b = Math.min(1200, Math.floor(b)), g)
                b = Fe(b, Math.ceil(g));
            else if (g = d.google_ad_layout_key) {
                g = "" + g;
                d = Math.pow(10, 3);
                if (a = (e = g.match(/([+-][0-9a-z]+)/g)) && e.length) {
                    c = [];
                    for (f = 0; f < a; f++)
                        c.push(parseInt(e[f], 36) / d);
                    d = c
                } else
                    d = null;
                if (!d)
                    throw new T("Invalid data-ad-layout-key value: " + g);
                g = (b + -725) / 1E3;
                e = 0;
                a = 1;
                c = d.length;
                for (f = 0; f < c; f++)
                    e += d[f] * a, a *= g;
                g = Math.ceil(1E3 * e - -725 + 10);
                if (isNaN(g))
                    throw new T("Invalid height: height=" + g);
                if (50 > g)
                    throw new T("Fluid responsive ads must be at least 50px tall: height=" + g);
                if (1200 < g)
                    throw new T("Fluid responsive ads must be at most 1200px tall: height=" + g);
                b = new S(11, new P(b, g))
            } else
                b = Ge(b, a);
            return b
        }
    }
    function Me(a, b) {
        if (D(b, id.u)) {
            var c = he(a, b, "height");
            if (!c) {
                var d = a.style.height;
                a.style.height = "inherit";
                c = he(a, b, "height");
                a.style.height = d;
                if (!c) {
                    c = Infinity;
                    do (d = a.style && zb(a.style.height)) && (c = Math.min(c, d)), (d = he(a, b, "maxHeight")) && (c = Math.min(c, d));
                    while ((a = a.parentElement) && "HTML" != a.tagName)
                }
            }
            b = c
        } else
            b = me(b, a);
        return b
    }
    ;
    var Ne = {
        1: "0.1",
        3: "100",
        4: "200",
        5: "0",
        6: "0.05",
        7: "0",
        8: "0.0",
        9: "400",
        10: "200",
        11: "0.003",
        12: "0.01",
        13: "0.001",
        14: "320",
        15: "20",
        16: "600",
        17: "20",
        19: "0.01",
        20: "0",
        22: "0.01",
        23: "0.2",
        24: "0.05",
        26: "0.05",
        27: "0.001",
        28: "0.001",
        29: "0.01",
        31: "0.01",
        32: "0.02",
        33: "0.001",
        34: "0.001",
        35: "0.01",
        36: "0.95",
        37: "0.0",
        38: "0.04",
        39: "0.15",
        40: "0.15",
        41: "0.006",
        42: "0.001",
        43: "0.1",
        44: "0.0",
        45: "0.0",
        46: "0.0",
        47: "0.01",
        48: "0.2",
        49: "0.2",
        50: "0.08",
        51: "0.05",
        52: "0.5",
        53: "1.0",
        54: "800",
        55: "40",
        56: "0.0",
        57: "0.001",
        58: "0.05",
        59: "0",
        60: "0.001",
        61: "0.05"
    };
    var Oe = null,
        Pe = function() {
            this.j = Ne
        },
        W = function(a, b) {
            a = parseFloat(a.j[b]);
            return isNaN(a) ? 0 : a
        };
    var Qe = new dc(100, 299),
        Re = new dc(300, 399),
        Se = new dc(400, 599),
        Te = new dc(600, 699),
        Ue = new dc(800, 899);
    var We = function() {
            var a = x.google_ad_modifications = x.google_ad_modifications || {};
            if (!a.plle) {
                a.plle = !0;
                var b = a.eids = a.eids || [],
                    a = a.loeids = a.loeids || [],
                    c;
                Oe || (Oe = new Pe);
                var d = Oe;
                var e = dd;
                var f = Ve(Qe, W(d, 3), W(d, 4), [e.D, e.A]);
                X(a, f);
                var g = cd;
                f == e.D ? c = g.D : f == e.A ? c = g.A : c = "";
                X(b, c);
                e = ed;
                X(b, Y(W(d, 5), [e.o, e.u]));
                e = fd;
                X(b, Y(W(d, 6), [e.o, e.u]));
                e = gd;
                X(b, Y(W(d, 7), [e.o, e.u]));
                e = hd;
                X(b, Y(W(d, 8), [e.o, e.u]));
                e = L;
                X(b, Ve(Se, W(d, 9), W(d, 10), [e.o, e.O, e.P, e.R]));
                e = id;
                X(b, Ve(Te, W(d, 16), W(d, 17), [e.o, e.u]));
                w.body || (e = od, X(a, Y(W(d, 1), [e.o, e.u])));
                ua("") && X(a, "");
                e = M;
                f = Y(W(d, 11), [e.o, e.VIEWPORT, e.L]);
                e = Na(e, function(a) {
                    return a == f
                });
                e = ld[e];
                X(b, f);
                X(b, e);
                e = N;
                e = Y(W(d, 12), [e.N, e.U, e.T, e.J]);
                X(a, e);
                e || (e = pd, e = Y(W(d, 58), [e.o, e.u]), X(a, e));
                e || (e = ud, f = Y(W(d, 56), [e.o, e.u]), X(a, f));
                e = jd;
                f = Y(W(d, 13), [e.K, e.o]);
                X(b, f);
                X(b, hc([e.V], 0));
                e = kd;
                f = Y(W(d, 60), [e.K, e.o]);
                X(b, f);
                e = nd;
                f = Ve(Re, W(d, 14), W(d, 15), [e.o, e.I]);
                X(a, f);
                g = md;
                f == e.o ? c = g.o : f == e.I ? c = g.I : c = "";
                X(b, c);
                e = qd;
                f = Y(W(d, 53), [e.u]);
                X(a, f);
                g = rd;
                f == e.o ? c = g.o : f == e.u ? c = g.u : c = "";
                X(b, c);
                e = td;
                f = Ve(Ue, W(d, 54), W(d, 55), [e.o, e.G, e.H, e.F]);
                X(a, f);
                g = sd;
                f == e.o ? c = g.o : f == e.G ? c = g.G : f == e.H ? c = g.H : f == e.F ? c = g.F : c = "";
                X(b, c)
            }
        },
        X = function(a, b) {
            b && a.push(b)
        },
        Xe = function(a) {
            var b = x.location && x.location.hash,
                b = (b = b && b.match(/google_plle=([\d,]+)/)) && b[1];
            return !!b && -1 != b.indexOf(a)
        },
        Y = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (Xe(b[c]))
                    return b[c];
            return hc(b, a)
        },
        Ve = function(a, b, c, d) {
            for (var e = 0; e < d.length; e++)
                if (Xe(d[e]))
                    return d[e];
            e = new cc(b, b + c - 1);
            (c = 0 >= c || c % d.length) || (a = a.j, c = !(a.start <= e.start && a.j >= e.j));
            c ? b = null : (a = ec(), b = null !== a && e.start <= a && e.j >= a ? d[(a - b) % d.length] : null);
            return b
        };
    var Ye = function(a) {
        if (!a)
            return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Ze = function(a, b, c) {
        var d = ["<iframe"],
            e;
        for (e in a)
            a.hasOwnProperty(e) && Jb(d, e + "=" + a[e]);
        d.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
        d.push("></iframe>");
        a = a.id;
        b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
        return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
    };
    var $e = null;
    var Z = function(a) {
            this.s = [];
            this.l = a || window;
            this.j = 0;
            this.m = null;
            this.C = 0
        },
        af;
    Z.prototype.M = function(a, b) {
        0 != this.j || this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.B(new bf(a, window)))
    };
    Z.prototype.v = function(a, b) {
        this.s.push(new bf(a, b || this.l));
        cf(this)
    };
    Z.prototype.ba = function(a) {
        this.j = 1;
        if (a) {
            var b = yc(188, r(this.w, this, !0));
            this.m = this.l.setTimeout(b, a)
        }
    };
    Z.prototype.w = function(a) {
        a && ++this.C;
        1 == this.j && (null != this.m && (this.l.clearTimeout(this.m), this.m = null), this.j = 0);
        cf(this)
    };
    Z.prototype.ca = function() {
        return !(!window || !Array)
    };
    Z.prototype.aa = function() {
        return this.C
    };
    var cf = function(a) {
        var b = yc(189, r(a.da, a));
        a.l.setTimeout(b, 0)
    };
    Z.prototype.da = function() {
        if (0 == this.j && this.s.length) {
            var a = this.s.shift();
            this.j = 2;
            var b = yc(190, r(this.B, this, a));
            a.j.setTimeout(b, 0);
            cf(this)
        }
    };
    Z.prototype.B = function(a) {
        this.j = 0;
        a.l()
    };
    var df = function(a) {
            try {
                return a.sz()
            } catch (b) {
                return !1
            }
        },
        ef = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a) && df(a) && Ib(a.nq) && Ib(a.nqa) && Ib(a.al) && Ib(a.rl)
        },
        ff = function() {
            if (af && df(af))
                return af;
            var a = bd(),
                b = a.google_jobrunner;
            return ef(b) ? af = b : a.google_jobrunner = af = new Z(a)
        },
        gf = function(a, b) {
            ff().nq(a, b)
        },
        hf = function(a, b) {
            ff().nqa(a, b)
        };
    Z.prototype.nq = Z.prototype.M;
    Z.prototype.nqa = Z.prototype.v;
    Z.prototype.al = Z.prototype.ba;
    Z.prototype.rl = Z.prototype.w;
    Z.prototype.sz = Z.prototype.ca;
    Z.prototype.tc = Z.prototype.aa;
    var bf = function(a, b) {
        this.l = a;
        this.j = b
    };
    var kf = function(a) {
        var b = this;
        this.j = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(a, d) {
                var c = jf("rx", a);
                a:
                {
                    if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                        a = a[1];
                        break a
                    }
                    a = ""
                }a = (new Date).getTime() - a;
                c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= a ? "M" : 0 <= a ? a : "-M"));
                b.set(d, c);
                return c
            }
        });
        this.l = a.google_iframe_oncopy
    };
    kf.prototype.set = function(a, b) {
        var c = this;
        this.l.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", function() {
            var b = c.j.document.getElementById(a);
            try {
                var e = b.contentWindow.document;
                if (b.onload && e && (!e.body || !e.body.firstChild))
                    b.onload()
            } catch (f) {}
        }, !1)
    };
    var jf = function(a, b) {
            var c = new RegExp("\\b" + a + "=(\\d+)"),
                d = c.exec(b);
            d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
            return b
        },
        lf = Ca("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    var mf = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        nf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        of = function() {},
        qf = function(a, b, c) {
            switch (typeof b) {
            case "string":
                pf(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (b instanceof Array || void 0 != b.length && b.splice) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)
                        c.push(e), qf(a, b[f], c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (e in b)
                    b.hasOwnProperty(e) && (f = b[e], "function" != typeof f && (c.push(d), pf(e, c), c.push(":"), qf(a, f, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        },
        pf = function(a, b) {
            b.push('"');
            b.push(a.replace(nf, function(a) {
                if (a in mf)
                    return mf[a];
                var b = a.charCodeAt(0),
                    c = "\\u";
                16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
                return mf[a] = c + b.toString(16)
            }));
            b.push('"')
        };
    var rf = {},
        sf = (rf.google_ad_modifications = !0, rf.google_analytics_domain_name = !0, rf.google_analytics_uacct = !0, rf),
        tf = function(a) {
            try {
                if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                    var b = function() {
                        return this
                    };
                    if (Object.prototype.hasOwnProperty("toJSON")) {
                        var c = Object.prototype.toJSON;
                        Object.prototype.toJSON = b
                    }
                    if (Array.prototype.hasOwnProperty("toJSON")) {
                        var d = Array.prototype.toJSON;
                        Array.prototype.toJSON = b
                    }
                    var e = window.encodeURIComponent(window.JSON.stringify(a));
                    try {
                        var f = Hc ? p.btoa(e) : Ic(Dc(e), void 0)
                    } catch (g) {
                        f = "#" + Ic(Dc(e), !0)
                    }
                    c && (Object.prototype.toJSON = c);
                    d && (Array.prototype.toJSON = d);
                    return f
                }
            } catch (g) {
                F.j(237, g, void 0, void 0)
            }
            return ""
        },
        uf = function(a) {
            a.google_page_url && (a.google_page_url = String(a.google_page_url));
            var b = [];
            Hb(a, function(a, d) {
                if (null != a) {
                    try {
                        var c = [];
                        qf(new of, a, c);
                        var f = c.join("")
                    } catch (g) {}
                    f && (f = f.replace(/\//g, "\\$&"), Jb(b, d, "=", f, ";"))
                }
            });
            return b.join("")
        };
    var vf = Oa("script");
    Mb(x);
    var wf = yc(215, function(a) {
            var b = a.google_sa_queue,
                c = b.shift();
            "function" == ba(c) && xc(216, zc, c);
            b.length && a.setTimeout(fa(wf, a), 0)
        }),
        yf = function(a) {
            return ["<", vf, ' src="', xf(void 0 === a ? "/show_ads_impl.js" : a), '"></', vf, ">"].join("")
        },
        xf = function(a) {
            a = void 0 === a ? "/show_ads_impl.js" : a;
            var b = sa ? "https" : "http";
            a:
            {
                if (qa)
                    try {
                        var c = x.google_cafe_host || x.top.google_cafe_host;
                        if (c) {
                            var d = c;
                            break a
                        }
                    } catch (e) {}
                d = ma("", "pagead2.googlesyndication.com")
            }return Bc(d, ["/pagead/js/", pa(), "/r20170110", a, ""].join(""), b)
        },
        zf = function(a, b, c, d) {
            return function() {
                var e = !1;
                d && ff().al(3E4);
                try {
                    var f = a.document.getElementById(b).contentWindow;
                    if (B(f)) {
                        var g = a.document.getElementById(b).contentWindow,
                            h = g.document;
                        h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(), g.google_async_iframe_close = !0, h.write(c))
                    } else {
                        for (var k = a.document.getElementById(b).contentWindow, f = c, f = String(f), g = ['"'], h = 0; h < f.length; h++) {
                            var m = f.charAt(h),
                                q = m.charCodeAt(0),
                                t = h + 1,
                                n;
                            if (!(n = Da[m])) {
                                if (31 < q && 127 > q)
                                    var y = m;
                                else {
                                    var v = void 0,
                                        z = m;
                                    if (z in Ea)
                                        y = Ea[z];
                                    else if (z in Da)
                                        y = Ea[z] = Da[z];
                                    else {
                                        var H = z.charCodeAt(0);
                                        if (31 < H && 127 > H)
                                            v = z;
                                        else {
                                            if (256 > H) {
                                                if (v = "\\x", 16 > H || 256 < H)
                                                    v += "0"
                                            } else
                                                v = "\\u", 4096 > H && (v += "0");
                                            v += H.toString(16).toUpperCase()
                                        }
                                        y = Ea[z] = v
                                    }
                                }
                                n = y
                            }
                            g[t] = n
                        }
                        g.push('"');
                        k.location.replace("javascript:" + g.join(""))
                    }
                    e = !0
                } catch (ye) {
                    k = bd().google_jobrunner, ef(k) && k.rl()
                }
                e && (e = jf("google_async_rrc", c), (new kf(a)).set(b, zf(a, b, e, !1)))
            }
        },
        Af = function(a) {
            var b = ["<iframe"];
            Hb(a, function(a, d) {
                null != a && b.push(" " + d + '="' + Ca(a) + '"')
            });
            b.push("></iframe>");
            return b.join("")
        },
        Cf = function(a, b, c) {
            Bf(a, b, c, function(a, b, f) {
                a = a.document;
                for (var d = b.id, e = 0; !d || a.getElementById(d);)
                    d = "aswift_" + e++;
                b.id = d;
                b.name = d;
                d = Number(f.google_ad_width);
                e = Number(f.google_ad_height);
                16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = Ze(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = Ze(b, d, e), c.innerHTML = f);
                return b.id
            })
        },
        Df = function(a) {
            var b = "<" + vf + ">window.google_sl_win.google_sa_impl.call(this, window, document, location);</" + vf + ">";
            E(a, N.T) ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl || (b = yf("/show_ads_impl_single_load.js") + b, a.google_sa_impl = function(b) {
                a.google_sa_queue.push(b)
            }, a.google_process_slots = function() {
                Ha(a.google_sa_queue, function(b) {
                    a.google_sa_impl.call(b, b, b.document, b.location)
                });
                a.google_sa_queue.length = 0
            })) : E(a, N.U) || E(a, pd.u) ? b = yf("/show_ads_impl_single_load.js") : E(a, N.N) || E(a, pd.o) ? b = yf("/show_ads_impl.js?" + N.N) : E(a, N.J) || (b = E(a, ud.u) ? yf("/show_ads_impl_le.js") : E(a, ud.o) ? yf("/show_ads_impl_le_c.js") : yf());
            return b
        },
        Bf = function(a, b, c, d) {
            var e = {},
                f = b.google_ad_height;
            e.width = '"' + b.google_ad_width + '"';
            e.height = '"' + f + '"';
            e.frameborder = '"0"';
            e.marginwidth = '"0"';
            e.marginheight = '"0"';
            e.vspace = '"0"';
            e.hspace = '"0"';
            e.allowtransparency = '"true"';
            e.scrolling = '"no"';
            e.allowfullscreen = '"true"';
            e.onload = '"' + lf + '"';
            d = d(a, e, b);
            f = b.google_ad_output;
            (e = b.google_ad_format) || "html" != f && null != f || (e = b.google_ad_width + "x" + b.google_ad_height);
            f = !b.google_ad_slot || b.google_override_format || !Xd[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
            e && f ? e = e.toLowerCase() : e = "";
            b.google_ad_format = e;
            if (!aa(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
                for (var e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height], f = [], g = 0, h = c; h && 25 > g; h = h.parentNode, ++g)
                    f.push(9 !== h.nodeType && h.id || "");
                (f = f.join()) && e.push(f);
                b.google_ad_unit_key = vb(e.join(":")).toString();
                e = [];
                for (f = 0; c && 25 > f; ++f) {
                    g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "";
                    a:
                    {
                        if (c && c.nodeName && c.parentElement)
                            for (var h = c.nodeName.toString().toLowerCase(), k = c.parentElement.childNodes, m = 0, q = 0; q < k.length; ++q) {
                                var t = k[q];
                                if (t.nodeName && t.nodeName.toString().toLowerCase() === h) {
                                    if (c === t) {
                                        h = "." + m;
                                        break a
                                    }
                                    ++m
                                }
                            }
                        h = ""
                    }e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
                    c = c.parentElement
                }
                c = e.join() + ":";
                e = a;
                f = [];
                if (e)
                    try {
                        for (var n = e.parent, g = 0; n && n !== e && 25 > g; ++g) {
                            for (var y = n.frames, h = 0; h < y.length; ++h)
                                if (e === y[h]) {
                                    f.push(h);
                                    break
                                }
                            e = n;
                            n = e.parent
                        }
                    } catch (H) {}
                b.google_ad_dom_fingerprint = vb(c + f.join()).toString()
            }
            var n = uf(b),
                y = tf(b),
                v;
            b = b.google_ad_client;
            if (!$e)
                b:
                {
                    e = [p.top];
                    c = [];
                    for (f = 0; g = e[f++];) {
                        c.push(g);
                        try {
                            if (g.frames)
                                for (var z = g.frames.length, h = 0; h < z && 1024 > e.length; ++h)
                                    e.push(g.frames[h])
                        } catch (H) {}
                    }
                    for (z = 0; z < c.length; z++)
                        try {
                            if (v = c[z].frames.google_esf) {
                                $e = v;
                                break b
                            }
                        } catch (H) {}
                    $e = null
                }$e ? v = "" : (v = {
                style: "display:none"
            }, /[^a-z0-9-]/.test(b) ? v = "" : (v["data-ad-client"] = Ye(b), v.id = "google_esf", v.name = "google_esf", v.src = Bc(ma("", "googleads.g.doubleclick.net"), ["/pagead/html/", pa(), "/r20170110/zrt_lookup.html#"].join("")), v = Af(v)));
            z = E(a, N.T) || E(a, N.J);
            b = ia;
            c = (new Date).getTime();
            a.google_t12n_vars = Ne;
            z = ["<!doctype html><html><body>", v, "<" + vf + ">", n, "google_show_ads_impl=true;", z ? "google_sl_win=window.parent;" : "", "google_unique_id=" + Mb(a) + ";", 'google_async_iframe_id="' + d + '";', "google_start_time=" + b + ";", y ? 'google_pub_vars="' + y + '";' : "", "google_bpp=" + (c > b ? c - b : 1) + ";", "google_async_rrc=0;google_iframe_start_time=new Date().getTime();", "</" + vf + ">", Df(a), "</body></html>"].join("");
            v = a.document.getElementById(d) ? gf : hf;
            d = zf(a, d, z, !0);
            E(a, N.J) ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? d() : a.google_sa_queue.push(d)) : v(d)
        },
        Ef = function(a, b) {
            var c = navigator;
            a && b && c && (a = a.document, b = Ye(b), /[^a-z0-9-]/.test(b) || ((c = ua("r20160913")) && (c += "/"), sb(a, Bc("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
        };
    var Ff = !1,
        Gf = 0,
        Hf = !1,
        If = !1,
        Jf = function(a) {
            return Pb.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
        },
        Lf = function(a, b) {
            var c = window;
            a.setAttribute("data-adsbygoogle-status", "done");
            Kf(a, b, c)
        },
        Kf = function(a, b, c) {
            Mf(a, b, c);
            if (!Nf(a, b, c)) {
                if (Wd(a)) {
                    b.enable_native_ads = !0;
                    var d = document.createElement("ins");
                    d.style.display = "none";
                    a.appendChild(d);
                    a = d
                }
                Of(b);
                if (b.google_reactive_ads_config) {
                    if (Ff)
                        throw new T("Only one 'enable_page_level_ads' allowed per page.");
                    Ff = !0
                } else
                    b.google_ama || Lb(c);
                Hf || (Hf = !0, Ef(c, b.google_ad_client));
                Hb(sf, function(a, d) {
                    b[d] = b[d] || c[d]
                });
                b.google_loader_used = "aa";
                b.google_reactive_tag_first = 1 === Gf;
                if ((d = b.google_ad_output) && "html" != d && "js" != d)
                    throw new T("No support for google_ad_output=" + d);
                xc(164, zc, function() {
                    Cf(c, b, a)
                })
            }
        },
        Of = function(a) {
            if (a.enable_native_ads || a.google_native_ad_template)
                a.google_ad_type = "text", a.google_max_num_ads = 1, a.hasOwnProperty("google_ad_format") || (a.google_ad_format = "300x250")
        },
        Nf = function(a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) {
                var e = d.page_level_pubvars;
                var f = (ca(e) ? e : {}).google_tag_origin
            }
            if (b.google_ama || "js" === b.google_ad_output)
                return !1;
            var g = b.google_ad_slot,
                e = c.google_ad_modifications;
            !e || Rb(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = Rb(e.ad_blacklist, g)) ? {
                W: !0,
                Z: g.space_collapsing || f
            } : e.remove_ads_by_default ? {
                W: !0,
                Z: f
            } : null);
            if (e && e.W && "on" != b.google_adtest)
                return "slot" == e.Z && (null !== yb(a.getAttribute("width")) && a.setAttribute("width", 0), null !== yb(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
            if ((e = C(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d))
                return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
            return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
        },
        Mf = function(a, b, c) {
            for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (/data-/.test(g.name)) {
                    var h = ua(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                    if (!b.hasOwnProperty(h)) {
                        var g = g.value,
                            k = {},
                            k = (k.google_reactive_ad_format = ja, k.google_allow_expandable_ads = ka, k),
                            g = k.hasOwnProperty(h) ? k[h](g, null) : g;
                        null === g || (b[h] = g)
                    }
                }
            }
            if (D(c, M.o) || D(c, M.VIEWPORT) || D(c, M.L) && a.style && c.document && c.document.body) {
                d = parseInt(a.style.width, 10);
                b:
                {
                    if (e = Qb(c)) {
                        e = O(e).clientWidth;
                        f = c.document.body.currentStyle ? c.document.body.currentStyle.direction : c.getComputedStyle ? c.getComputedStyle(c.document.body).getPropertyValue("direction") : "";
                        if ("ltr" === f && e) {
                            e = Math.floor(Math.min(1200, e - a.getBoundingClientRect().left));
                            break b
                        }
                        if ("rtl" === f && e) {
                            f = c.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right;
                            e = Math.floor(Math.min(1200, e - f - Math.floor((e - c.document.body.clientWidth) / 2)));
                            break b
                        }
                    }
                    e = -1
                }if (0 < e && d > e)
                    if (f = parseInt(a.style.height, 10), d = !!Xd[d + "x" + f], D(c, M.VIEWPORT)) {
                        if (d)
                            if (d = Yd(e, f))
                                e = d;
                            else
                                throw new T("No slot size for availableWidth=" + e);
                        b.google_ad_width = e;
                        a.style.width = e + "px";
                        b.google_ad_format = null;
                        b.google_override_format = !0;
                        b.google_ad_resize = 1
                    } else
                        D(c, M.L) ? (a.style.width = e + "px", b.google_ad_format = d ? "link" : "auto", b.google_ad_resize = 2) : D(c, M.o) && (b.google_ad_resize = 0)
            }
            d = b.google_reactive_ad_format;
            !b.google_enable_content_recommendations || 1 != d && 2 != d ? (e = Ke(c, b)) ? (b.google_auto_format = b.google_ad_format, d = a.offsetWidth || (b.google_ad_resize ? parseInt(a.style.width, 10) : 0), c = Le(e, d, a, b, c), e = c.j, b.google_ad_width = e.j(d), f = b.google_ad_height = e.height(), a.style.height = f + "px", b.google_ad_resizable = !0, b.google_ad_format = e.l(d), b.google_override_format = 1, b.google_responsive_auto_format = c.l, b.google_loader_features_used = 128) : !xb.test(b.google_ad_width) && !wb.test(a.style.width) || !xb.test(b.google_ad_height) && !wb.test(a.style.height) ? (c = C(a, c), a.style.width = c.width, a.style.height = c.height, ee(c, b), b.google_ad_width || (b.google_ad_width = a.offsetWidth), b.google_ad_height || (b.google_ad_height = a.offsetHeight), b.google_loader_features_used = 256) : (ee(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width, a.style.width = "100%", d = a.offsetWidth, a.style.width = c, b.google_available_width = d)) : (b.google_ad_width = O(c).clientWidth, b.google_ad_height = 50, a.style.display = "none")
        },
        Pf = function(a) {
            for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
                var e = d;
                if (Jf(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a))
                    return d
            }
            return null
        },
        Rf = function(a) {
            if (!If) {
                If = !0;
                try {
                    var b = p.localStorage.getItem("google_ama_config")
                } catch (y) {
                    b = null
                }
                try {
                    var c = b ? new Wc(b ? JSON.parse(b) : null) : null
                } catch (y) {
                    c = null
                }
                if (b = c)
                    if (c = Lc(b, Xc, 3), !c || K(c, 1) <= +new Date)
                        try {
                            p.localStorage.removeItem("google_ama_config")
                        } catch (y) {
                            Ac(p, {
                                lserr: 1
                            })
                        }
                    else {
                        try {
                            a:
                            {
                                var d = Kc(b, 5);
                                if (0 < d.length)
                                    var e = d;
                                else {
                                    c:
                                    {
                                        var f = p.location.pathname,
                                            g = Mc(b, Zc, 7),
                                            d = {};
                                        for (c = 0; c < g.length; ++c) {
                                            var h = K(g[c], 1);
                                            aa(h) && !d[h] && (d[h] = g[c])
                                        }
                                        for (var k = f.replace(/(^\/)|(\/$)/g, "");;) {
                                            var m = vb(k);
                                            if (d[m]) {
                                                var q = d[m];
                                                break c
                                            }
                                            if (!k) {
                                                q = null;
                                                break c
                                            }
                                            k = k.substring(0, k.lastIndexOf("/"))
                                        }
                                    }e = q ? Kc(q, 2) : []
                                }
                                for (q = 0; q < e.length; q++)
                                    if (1 == e[q]) {
                                        var t = !0;
                                        break a
                                    }
                                t = !1
                            }if (t) {
                                var n = new Kd;
                                (new Od(p, new Rd(a, b), 100, n)).start();
                                n.l.then(fa(Td, p), fa(Ud, p))
                            }
                        } catch (y) {
                            Ac(p, {
                                atf: -1
                            })
                        }
                        t = Qf();
                        p.document.documentElement.appendChild(t);
                        n = {};
                        a = (n.google_ama = !0, n.google_ad_client = a, n);
                        Lf(t, a)
                    }
            }
        },
        Qf = function() {
            var a = document.createElement("ins");
            a.className = "adsbygoogle";
            a.style.display = "none";
            return a
        },
        Sf = function(a, b) {
            var c = {};
            Hb($c, function(b, d) {
                !1 === a.enable_page_level_ads ? c[d] = !1 : a.hasOwnProperty(d) && (c[d] = a[d])
            });
            ca(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
            var d = Qf();
            b ? w.body.appendChild(d) : w.documentElement.appendChild(d);
            b = {};
            b = (b.google_reactive_ads_config = c, b.google_ad_client = a.google_ad_client, b);
            Lf(d, b)
        },
        Tf = function(a) {
            var b = Qb(window);
            if (!b)
                throw new T("Page-level tag does not work inside iframes.");
            b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new Vd);
            b.google_reactive_ads_global_state.wasPlaTagProcessed = !0;
            var b = E(x, od.u),
                c = !b;
            w.body || b ? Sf(a, c) : Bb(w, "DOMContentLoaded", yc(191, function() {
                Sf(a, c)
            }))
        },
        Uf = function(a, b, c, d) {
            return pe(b) ? (F.v = !0, F.j(a, b, .1, d, "puberror"), !1) : F.j(a, b, c, d)
        },
        Vf = function(a, b, c, d) {
            return pe(b) ? !1 : F.j(a, b, c, d)
        },
        Xf = function(a) {
            var b = {};
            xc(165, Uf, function() {
                Wf(a, b)
            }, function(c) {
                c.client = c.client || b.google_ad_client || a.google_ad_client;
                c.slotname = c.slotname || b.google_ad_slot;
                c.tag_origin = c.tag_origin || b.google_tag_origin
            })
        },
        Wf = function(a, b) {
            ia = (new Date).getTime();
            a:
            {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" == typeof a.google_ad_client) {
                        var c = !0;
                        break a
                    }
                    throw new T("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }if (c)
                0 === Gf && (Gf = 1), Rf(a.google_ad_client), Tf(a);
            else {
                0 === Gf && (Gf = 2);
                c = a.element;
                (a = a.params) && Hb(a, function(a, c) {
                    b[c] = a
                });
                if ("js" === b.google_ad_output) {
                    p.google_ad_request_done_fns = p.google_ad_request_done_fns || [];
                    p.google_radlink_request_done_fns = p.google_radlink_request_done_fns || [];
                    if (b.google_ad_request_done) {
                        if ("function" != ba(b.google_ad_request_done))
                            throw new T("google_ad_request_done parameter must be a function.");
                        p.google_ad_request_done_fns.push(b.google_ad_request_done);
                        delete b.google_ad_request_done;
                        b.google_ad_request_done_index = p.google_ad_request_done_fns.length - 1
                    } else
                        throw new T("google_ad_request_done parameter must be specified.");
                    if (b.google_radlink_request_done) {
                        if ("function" != ba(b.google_radlink_request_done))
                            throw new T("google_radlink_request_done parameter must be a function.");
                        p.google_radlink_request_done_fns.push(b.google_radlink_request_done);
                        delete b.google_radlink_request_done;
                        b.google_radlink_request_done_index = p.google_radlink_request_done_fns.length - 1
                    }
                    a = Qf();
                    p.document.documentElement.appendChild(a);
                    c = a
                }
                if (c) {
                    if (!Jf(c) && (c.id ? c = Pf(c.id) : c = null, !c))
                        throw new T("'element' has already been filled.");
                    if (!("innerHTML" in c))
                        throw new T("'element' is not a good DOM element.");
                } else if (c = Pf(), !c)
                    throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
                Lf(c, b)
            }
        },
        Zf = function() {
            wc();
            xc(166, Vf, Yf)
        },
        Yf = function() {
            We();
            tc(D(x, jd.K) || D(x, jd.V));
            E(x, N.J) && !x.google_sa_queue && (x.google_sa_queue = [], x.google_sl_win = x, x.google_process_slots = fa(wf, x), sb(x.document, xf("/show_ads_impl_single_load.js")));
            var a = window.adsbygoogle;
            if (a && a.shift)
                try {
                    for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;)
                        Xf(b), --c
                } catch (d) {
                    throw window.setTimeout(Zf, 0), d;
                }
            if (!a || !a.loaded) {
                window.adsbygoogle = {
                    push: Xf,
                    loaded: !0
                };
                a && $f(a.onload);
                try {
                    Object.defineProperty(window.adsbygoogle, "onload", {
                        set: $f
                    })
                } catch (d) {}
            }
        },
        $f = function(a) {
            Ib(a) && window.setTimeout(a, 0)
        };
    Zf();
}).call(this);

