!(function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { exports: {}, id: i, loaded: !1 });
    return e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function(e, t, n) {
    e.exports = n(1);
  },
  function(e, t, n) {
    n(2),
      (window.$ = window.jQuery = n(3)),
      n(4),
      n(5),
      (window.Popper = n(6)),
      n(7),
      n(8),
      n(9),
      n(10),
      n(12),
      n(13);
  },
  function(e, t) {},
  function(e, t, n) {
    var i, r;
    !(function(t, n) {
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function(n, o) {
      function a(e) {
        var t = !!e && "length" in e && e.length,
          n = ve.type(e);
        return (
          "function" !== n &&
          !ve.isWindow(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      function s(e, t, n) {
        if (ve.isFunction(t))
          return ve.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
          });
        if (t.nodeType)
          return ve.grep(e, function(e) {
            return (e === t) !== n;
          });
        if ("string" == typeof t) {
          if (Ae.test(t)) return ve.filter(t, e, n);
          t = ve.filter(t, e);
        }
        return ve.grep(e, function(e) {
          return ve.inArray(e, t) > -1 !== n;
        });
      }
      function l(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e;
      }
      function u(e) {
        var t = {};
        return (
          ve.each(e.match(Le) || [], function(e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function c() {
        se.addEventListener
          ? (se.removeEventListener("DOMContentLoaded", d),
            n.removeEventListener("load", d))
          : (se.detachEvent("onreadystatechange", d),
            n.detachEvent("onload", d));
      }
      function d() {
        (se.addEventListener ||
          "load" === n.event.type ||
          "complete" === se.readyState) &&
          (c(), ve.ready());
      }
      function f(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
          var i = "data-" + t.replace(je, "-$1").toLowerCase();
          if (((n = e.getAttribute(i)), "string" == typeof n)) {
            try {
              n =
                "true" === n ||
                ("false" !== n &&
                  ("null" === n
                    ? null
                    : +n + "" === n
                    ? +n
                    : Re.test(n)
                    ? ve.parseJSON(n)
                    : n));
            } catch (r) {}
            ve.data(e, t, n);
          } else n = void 0;
        }
        return n;
      }
      function p(e) {
        var t;
        for (t in e)
          if (("data" !== t || !ve.isEmptyObject(e[t])) && "toJSON" !== t)
            return !1;
        return !0;
      }
      function h(e, t, n, i) {
        if (Me(e)) {
          var r,
            o,
            a = ve.expando,
            s = e.nodeType,
            l = s ? ve.cache : e,
            u = s ? e[a] : e[a] && a;
          if (
            (u && l[u] && (i || l[u].data)) ||
            void 0 !== n ||
            "string" != typeof t
          )
            return (
              u || (u = s ? (e[a] = ae.pop() || ve.guid++) : a),
              l[u] || (l[u] = s ? {} : { toJSON: ve.noop }),
              ("object" != typeof t && "function" != typeof t) ||
                (i
                  ? (l[u] = ve.extend(l[u], t))
                  : (l[u].data = ve.extend(l[u].data, t))),
              (o = l[u]),
              i || (o.data || (o.data = {}), (o = o.data)),
              void 0 !== n && (o[ve.camelCase(t)] = n),
              "string" == typeof t
                ? ((r = o[t]), null == r && (r = o[ve.camelCase(t)]))
                : (r = o),
              r
            );
        }
      }
      function m(e, t, n) {
        if (Me(e)) {
          var i,
            r,
            o = e.nodeType,
            a = o ? ve.cache : e,
            s = o ? e[ve.expando] : ve.expando;
          if (a[s]) {
            if (t && (i = n ? a[s] : a[s].data)) {
              ve.isArray(t)
                ? (t = t.concat(ve.map(t, ve.camelCase)))
                : t in i
                ? (t = [t])
                : ((t = ve.camelCase(t)), (t = t in i ? [t] : t.split(" "))),
                (r = t.length);
              for (; r--; ) delete i[t[r]];
              if (n ? !p(i) : !ve.isEmptyObject(i)) return;
            }
            (n || (delete a[s].data, p(a[s]))) &&
              (o
                ? ve.cleanData([e], !0)
                : me.deleteExpando || a != a.window
                ? delete a[s]
                : (a[s] = void 0));
          }
        }
      }
      function g(e, t, n, i) {
        var r,
          o = 1,
          a = 20,
          s = i
            ? function() {
                return i.cur();
              }
            : function() {
                return ve.css(e, t, "");
              },
          l = s(),
          u = (n && n[3]) || (ve.cssNumber[t] ? "" : "px"),
          c = (ve.cssNumber[t] || ("px" !== u && +l)) && We.exec(ve.css(e, t));
        if (c && c[3] !== u) {
          (u = u || c[3]), (n = n || []), (c = +l || 1);
          do (o = o || ".5"), (c /= o), ve.style(e, t, c + u);
          while (o !== (o = s() / l) && 1 !== o && --a);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = c), (i.end = r))),
          r
        );
      }
      function v(e) {
        var t = Ke.split("|"),
          n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
      }
      function y(e, t) {
        var n,
          i,
          r = 0,
          o =
            "undefined" != typeof e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : "undefined" != typeof e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : void 0;
        if (!o)
          for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)
            !t || ve.nodeName(i, t) ? o.push(i) : ve.merge(o, y(i, t));
        return void 0 === t || (t && ve.nodeName(e, t)) ? ve.merge([e], o) : o;
      }
      function b(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
          ve._data(n, "globalEval", !t || ve._data(t[i], "globalEval"));
      }
      function _(e) {
        Ve.test(e.type) && (e.defaultChecked = e.checked);
      }
      function E(e, t, n, i, r) {
        for (
          var o, a, s, l, u, c, d, f = e.length, p = v(t), h = [], m = 0;
          m < f;
          m++
        )
          if (((a = e[m]), a || 0 === a))
            if ("object" === ve.type(a)) ve.merge(h, a.nodeType ? [a] : a);
            else if (Ye.test(a)) {
              for (
                l = l || p.appendChild(t.createElement("div")),
                  u = (Ue.exec(a) || ["", ""])[1].toLowerCase(),
                  d = Qe[u] || Qe._default,
                  l.innerHTML = d[1] + ve.htmlPrefilter(a) + d[2],
                  o = d[0];
                o--;

              )
                l = l.lastChild;
              if (
                (!me.leadingWhitespace &&
                  Ge.test(a) &&
                  h.push(t.createTextNode(Ge.exec(a)[0])),
                !me.tbody)
              )
                for (
                  a =
                    "table" !== u || Xe.test(a)
                      ? "<table>" !== d[1] || Xe.test(a)
                        ? 0
                        : l
                      : l.firstChild,
                    o = a && a.childNodes.length;
                  o--;

                )
                  ve.nodeName((c = a.childNodes[o]), "tbody") &&
                    !c.childNodes.length &&
                    a.removeChild(c);
              for (
                ve.merge(h, l.childNodes), l.textContent = "";
                l.firstChild;

              )
                l.removeChild(l.firstChild);
              l = p.lastChild;
            } else h.push(t.createTextNode(a));
        for (
          l && p.removeChild(l),
            me.appendChecked || ve.grep(y(h, "input"), _),
            m = 0;
          (a = h[m++]);

        )
          if (i && ve.inArray(a, i) > -1) r && r.push(a);
          else if (
            ((s = ve.contains(a.ownerDocument, a)),
            (l = y(p.appendChild(a), "script")),
            s && b(l),
            n)
          )
            for (o = 0; (a = l[o++]); ) ze.test(a.type || "") && n.push(a);
        return (l = null), p;
      }
      function T() {
        return !0;
      }
      function w() {
        return !1;
      }
      function C() {
        try {
          return se.activeElement;
        } catch (e) {}
      }
      function x(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
          "string" != typeof n && ((i = i || n), (n = void 0));
          for (s in t) x(e, s, n, i, t[s], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          r === !1)
        )
          r = w;
        else if (!r) return e;
        return (
          1 === o &&
            ((a = r),
            (r = function(e) {
              return ve().off(e), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = ve.guid++))),
          e.each(function() {
            ve.event.add(this, t, r, i, n);
          })
        );
      }
      function S(e, t) {
        return ve.nodeName(e, "table") &&
          ve.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
          ? e.getElementsByTagName("tbody")[0] ||
              e.appendChild(e.ownerDocument.createElement("tbody"))
          : e;
      }
      function A(e) {
        return (e.type = (null !== ve.find.attr(e, "type")) + "/" + e.type), e;
      }
      function D(e) {
        var t = lt.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
      }
      function O(e, t) {
        if (1 === t.nodeType && ve.hasData(e)) {
          var n,
            i,
            r,
            o = ve._data(e),
            a = ve._data(t, o),
            s = o.events;
          if (s) {
            delete a.handle, (a.events = {});
            for (n in s)
              for (i = 0, r = s[n].length; i < r; i++)
                ve.event.add(t, n, s[n][i]);
          }
          a.data && (a.data = ve.extend({}, a.data));
        }
      }
      function N(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
          if (
            ((n = t.nodeName.toLowerCase()), !me.noCloneEvent && t[ve.expando])
          ) {
            r = ve._data(t);
            for (i in r.events) ve.removeEvent(t, i, r.handle);
            t.removeAttribute(ve.expando);
          }
          "script" === n && t.text !== e.text
            ? ((A(t).text = e.text), D(t))
            : "object" === n
            ? (t.parentNode && (t.outerHTML = e.outerHTML),
              me.html5Clone &&
                e.innerHTML &&
                !ve.trim(t.innerHTML) &&
                (t.innerHTML = e.innerHTML))
            : "input" === n && Ve.test(e.type)
            ? ((t.defaultChecked = t.checked = e.checked),
              t.value !== e.value && (t.value = e.value))
            : "option" === n
            ? (t.defaultSelected = t.selected = e.defaultSelected)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
      }
      function I(e, t, n, i) {
        t = ue.apply([], t);
        var r,
          o,
          a,
          s,
          l,
          u,
          c = 0,
          d = e.length,
          f = d - 1,
          p = t[0],
          h = ve.isFunction(p);
        if (
          h ||
          (d > 1 && "string" == typeof p && !me.checkClone && st.test(p))
        )
          return e.each(function(r) {
            var o = e.eq(r);
            h && (t[0] = p.call(this, r, o.html())), I(o, t, n, i);
          });
        if (
          d &&
          ((u = E(t, e[0].ownerDocument, !1, e, i)),
          (r = u.firstChild),
          1 === u.childNodes.length && (u = r),
          r || i)
        ) {
          for (s = ve.map(y(u, "script"), A), a = s.length; c < d; c++)
            (o = u),
              c !== f &&
                ((o = ve.clone(o, !0, !0)), a && ve.merge(s, y(o, "script"))),
              n.call(e[c], o, c);
          if (a)
            for (
              l = s[s.length - 1].ownerDocument, ve.map(s, D), c = 0;
              c < a;
              c++
            )
              (o = s[c]),
                ze.test(o.type || "") &&
                  !ve._data(o, "globalEval") &&
                  ve.contains(l, o) &&
                  (o.src
                    ? ve._evalUrl && ve._evalUrl(o.src)
                    : ve.globalEval(
                        (o.text || o.textContent || o.innerHTML || "").replace(
                          ut,
                          ""
                        )
                      ));
          u = r = null;
        }
        return e;
      }
      function k(e, t, n) {
        for (var i, r = t ? ve.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || ve.cleanData(y(i)),
            i.parentNode &&
              (n && ve.contains(i.ownerDocument, i) && b(y(i, "script")),
              i.parentNode.removeChild(i));
        return e;
      }
      function L(e, t) {
        var n = ve(t.createElement(e)).appendTo(t.body),
          i = ve.css(n[0], "display");
        return n.detach(), i;
      }
      function P(e) {
        var t = se,
          n = pt[e];
        return (
          n ||
            ((n = L(e, t)),
            ("none" !== n && n) ||
              ((ft = (
                ft || ve("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(t.documentElement)),
              (t = (ft[0].contentWindow || ft[0].contentDocument).document),
              t.write(),
              t.close(),
              (n = L(e, t)),
              ft.detach()),
            (pt[e] = n)),
          n
        );
      }
      function H(e, t) {
        return {
          get: function() {
            return e()
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
          }
        };
      }
      function M(e) {
        if (e in Dt) return e;
        for (
          var t = e.charAt(0).toUpperCase() + e.slice(1), n = At.length;
          n--;

        )
          if (((e = At[n] + t), e in Dt)) return e;
      }
      function R(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
          (i = e[a]),
            i.style &&
              ((o[a] = ve._data(i, "olddisplay")),
              (n = i.style.display),
              t
                ? (o[a] || "none" !== n || (i.style.display = ""),
                  "" === i.style.display &&
                    qe(i) &&
                    (o[a] = ve._data(i, "olddisplay", P(i.nodeName))))
                : ((r = qe(i)),
                  ((n && "none" !== n) || !r) &&
                    ve._data(i, "olddisplay", r ? n : ve.css(i, "display"))));
        for (a = 0; a < s; a++)
          (i = e[a]),
            i.style &&
              ((t && "none" !== i.style.display && "" !== i.style.display) ||
                (i.style.display = t ? o[a] || "" : "none"));
        return e;
      }
      function j(e, t, n) {
        var i = Ct.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
      }
      function F(e, t, n, i, r) {
        for (
          var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
          o < 4;
          o += 2
        )
          "margin" === n && (a += ve.css(e, n + $e[o], !0, r)),
            i
              ? ("content" === n && (a -= ve.css(e, "padding" + $e[o], !0, r)),
                "margin" !== n &&
                  (a -= ve.css(e, "border" + $e[o] + "Width", !0, r)))
              : ((a += ve.css(e, "padding" + $e[o], !0, r)),
                "padding" !== n &&
                  (a += ve.css(e, "border" + $e[o] + "Width", !0, r)));
        return a;
      }
      function W(e, t, n) {
        var i = !0,
          r = "width" === t ? e.offsetWidth : e.offsetHeight,
          o = yt(e),
          a = me.boxSizing && "border-box" === ve.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
          if (
            ((r = bt(e, t, o)),
            (r < 0 || null == r) && (r = e.style[t]),
            mt.test(r))
          )
            return r;
          (i = a && (me.boxSizingReliable() || r === e.style[t])),
            (r = parseFloat(r) || 0);
        }
        return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px";
      }
      function $(e, t, n, i, r) {
        return new $.prototype.init(e, t, n, i, r);
      }
      function q() {
        return (
          n.setTimeout(function() {
            Ot = void 0;
          }),
          (Ot = ve.now())
        );
      }
      function B(e, t) {
        var n,
          i = { height: e },
          r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          (n = $e[r]), (i["margin" + n] = i["padding" + n] = e);
        return t && (i.opacity = i.width = e), i;
      }
      function V(e, t, n) {
        for (
          var i,
            r = (G.tweeners[t] || []).concat(G.tweeners["*"]),
            o = 0,
            a = r.length;
          o < a;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function U(e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          d = this,
          f = {},
          p = e.style,
          h = e.nodeType && qe(e),
          m = ve._data(e, "fxshow");
        n.queue ||
          ((s = ve._queueHooks(e, "fx")),
          null == s.unqueued &&
            ((s.unqueued = 0),
            (l = s.empty.fire),
            (s.empty.fire = function() {
              s.unqueued || l();
            })),
          s.unqueued++,
          d.always(function() {
            d.always(function() {
              s.unqueued--, ve.queue(e, "fx").length || s.empty.fire();
            });
          })),
          1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            (u = ve.css(e, "display")),
            (c = "none" === u ? ve._data(e, "olddisplay") || P(e.nodeName) : u),
            "inline" === c &&
              "none" === ve.css(e, "float") &&
              (me.inlineBlockNeedsLayout && "inline" !== P(e.nodeName)
                ? (p.zoom = 1)
                : (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            me.shrinkWrapBlocks() ||
              d.always(function() {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              }));
        for (i in t)
          if (((r = t[i]), It.exec(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (h ? "hide" : "show"))
            ) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              h = !0;
            }
            f[i] = (m && m[i]) || ve.style(e, i);
          } else u = void 0;
        if (ve.isEmptyObject(f))
          "inline" === ("none" === u ? P(e.nodeName) : u) && (p.display = u);
        else {
          m ? "hidden" in m && (h = m.hidden) : (m = ve._data(e, "fxshow", {})),
            o && (m.hidden = !h),
            h
              ? ve(e).show()
              : d.done(function() {
                  ve(e).hide();
                }),
            d.done(function() {
              var t;
              ve._removeData(e, "fxshow");
              for (t in f) ve.style(e, t, f[t]);
            });
          for (i in f)
            (a = V(h ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = a.start),
                h &&
                  ((a.end = a.start),
                  (a.start = "width" === i || "height" === i ? 1 : 0)));
        }
      }
      function z(e, t) {
        var n, i, r, o, a;
        for (n in e)
          if (
            ((i = ve.camelCase(n)),
            (r = t[i]),
            (o = e[n]),
            ve.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (a = ve.cssHooks[i]),
            a && "expand" in a)
          ) {
            (o = a.expand(o)), delete e[i];
            for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
          } else t[i] = r;
      }
      function G(e, t, n) {
        var i,
          r,
          o = 0,
          a = G.prefilters.length,
          s = ve.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (r) return !1;
            for (
              var t = Ot || q(),
                n = Math.max(0, u.startTime + u.duration - t),
                i = n / u.duration || 0,
                o = 1 - i,
                a = 0,
                l = u.tweens.length;
              a < l;
              a++
            )
              u.tweens[a].run(o);
            return (
              s.notifyWith(e, [u, o, n]),
              o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            );
          },
          u = s.promise({
            elem: e,
            props: ve.extend({}, t),
            opts: ve.extend(
              !0,
              { specialEasing: {}, easing: ve.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: Ot || q(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var i = ve.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function(t) {
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                  : s.rejectWith(e, [u, t]),
                this
              );
            }
          }),
          c = u.props;
        for (z(c, u.opts.specialEasing); o < a; o++)
          if ((i = G.prefilters[o].call(u, e, c, u.opts)))
            return (
              ve.isFunction(i.stop) &&
                (ve._queueHooks(u.elem, u.opts.queue).stop = ve.proxy(
                  i.stop,
                  i
                )),
              i
            );
        return (
          ve.map(c, V, u),
          ve.isFunction(u.opts.start) && u.opts.start.call(e, u),
          ve.fx.timer(ve.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always)
        );
      }
      function K(e) {
        return ve.attr(e, "class") || "";
      }
      function Q(e) {
        return function(t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match(Le) || [];
          if (ve.isFunction(n))
            for (; (i = o[r++]); )
              "+" === i.charAt(0)
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Y(e, t, n, i) {
        function r(s) {
          var l;
          return (
            (o[s] = !0),
            ve.each(e[s] || [], function(e, s) {
              var u = s(t, n, i);
              return "string" != typeof u || a || o[u]
                ? a
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), r(u), !1);
            }),
            l
          );
        }
        var o = {},
          a = e === nn;
        return r(t.dataTypes[0]) || (!o["*"] && r("*"));
      }
      function X(e, t) {
        var n,
          i,
          r = ve.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ve.extend(!0, e, n), e;
      }
      function J(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
            void 0 === r &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
          for (a in s)
            if (s[a] && s[a].test(r)) {
              l.unshift(a);
              break;
            }
        if (l[0] in n) o = l[0];
        else {
          for (a in n) {
            if (!l[0] || e.converters[a + " " + l[0]]) {
              o = a;
              break;
            }
            i || (i = a);
          }
          o = o || i;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
      }
      function Z(e, t, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u = {},
          c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (l = o),
            (o = c.shift()))
          )
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
              if (((a = u[l + " " + o] || u["* " + o]), !a))
                for (r in u)
                  if (
                    ((s = r.split(" ")),
                    s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]]))
                  ) {
                    a === !0
                      ? (a = u[r])
                      : u[r] !== !0 && ((o = s[0]), c.unshift(s[1]));
                    break;
                  }
              if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (d) {
                    return {
                      state: "parsererror",
                      error: a ? d : "No conversion from " + l + " to " + o
                    };
                  }
            }
        return { state: "success", data: t };
      }
      function ee(e) {
        return (e.style && e.style.display) || ve.css(e, "display");
      }
      function te(e) {
        if (!ve.contains(e.ownerDocument || se, e)) return !0;
        for (; e && 1 === e.nodeType; ) {
          if ("none" === ee(e) || "hidden" === e.type) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function ne(e, t, n, i) {
        var r;
        if (ve.isArray(t))
          ve.each(t, function(t, r) {
            n || ln.test(e)
              ? i(e, r)
              : ne(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== ve.type(t)) i(e, t);
        else for (r in t) ne(e + "[" + r + "]", t[r], n, i);
      }
      function ie() {
        try {
          return new n.XMLHttpRequest();
        } catch (e) {}
      }
      function re() {
        try {
          return new n.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
      function oe(e) {
        return ve.isWindow(e)
          ? e
          : 9 === e.nodeType && (e.defaultView || e.parentWindow);
      }
      var ae = [],
        se = n.document,
        le = ae.slice,
        ue = ae.concat,
        ce = ae.push,
        de = ae.indexOf,
        fe = {},
        pe = fe.toString,
        he = fe.hasOwnProperty,
        me = {},
        ge = "1.12.4",
        ve = function(e, t) {
          return new ve.fn.init(e, t);
        },
        ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        be = /^-ms-/,
        _e = /-([\da-z])/gi,
        Ee = function(e, t) {
          return t.toUpperCase();
        };
      (ve.fn = ve.prototype = {
        jquery: ge,
        constructor: ve,
        selector: "",
        length: 0,
        toArray: function() {
          return le.call(this);
        },
        get: function(e) {
          return null != e
            ? e < 0
              ? this[e + this.length]
              : this[e]
            : le.call(this);
        },
        pushStack: function(e) {
          var t = ve.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function(e) {
          return ve.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            ve.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(le.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: ce,
        sort: ae.sort,
        splice: ae.splice
      }),
        (ve.extend = ve.fn.extend = function() {
          var e,
            t,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || ve.isFunction(a) || (a = {}),
              s === l && ((a = this), s--);
            s < l;
            s++
          )
            if (null != (r = arguments[s]))
              for (i in r)
                (e = a[i]),
                  (n = r[i]),
                  a !== n &&
                    (u && n && (ve.isPlainObject(n) || (t = ve.isArray(n)))
                      ? (t
                          ? ((t = !1), (o = e && ve.isArray(e) ? e : []))
                          : (o = e && ve.isPlainObject(e) ? e : {}),
                        (a[i] = ve.extend(u, o, n)))
                      : void 0 !== n && (a[i] = n));
          return a;
        }),
        ve.extend({
          expando: "jQuery" + (ge + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isFunction: function(e) {
            return "function" === ve.type(e);
          },
          isArray:
            Array.isArray ||
            function(e) {
              return "array" === ve.type(e);
            },
          isWindow: function(e) {
            return null != e && e == e.window;
          },
          isNumeric: function(e) {
            var t = e && e.toString();
            return !ve.isArray(e) && t - parseFloat(t) + 1 >= 0;
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ve.type(e) || e.nodeType || ve.isWindow(e))
              return !1;
            try {
              if (
                e.constructor &&
                !he.call(e, "constructor") &&
                !he.call(e.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (n) {
              return !1;
            }
            if (!me.ownFirst) for (t in e) return he.call(e, t);
            for (t in e);
            return void 0 === t || he.call(e, t);
          },
          type: function(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? fe[pe.call(e)] || "object"
              : typeof e;
          },
          globalEval: function(e) {
            e &&
              ve.trim(e) &&
              (
                n.execScript ||
                function(e) {
                  n.eval.call(n, e);
                }
              )(e);
          },
          camelCase: function(e) {
            return e.replace(be, "ms-").replace(_e, Ee);
          },
          nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          each: function(e, t) {
            var n,
              i = 0;
            if (a(e))
              for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
            else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e;
          },
          trim: function(e) {
            return null == e ? "" : (e + "").replace(ye, "");
          },
          makeArray: function(e, t) {
            var n = t || [];
            return (
              null != e &&
                (a(Object(e))
                  ? ve.merge(n, "string" == typeof e ? [e] : e)
                  : ce.call(n, e)),
              n
            );
          },
          inArray: function(e, t, n) {
            var i;
            if (t) {
              if (de) return de.call(t, e, n);
              for (
                i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
                n < i;
                n++
              )
                if (n in t && t[n] === e) return n;
            }
            return -1;
          },
          merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; )
              e[r++] = t[i++];
            if (n !== n) for (; void 0 !== t[i]; ) e[r++] = t[i++];
            return (e.length = r), e;
          },
          grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++)
              (i = !t(e[o], o)), i !== s && r.push(e[o]);
            return r;
          },
          map: function(e, t, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (a(e))
              for (i = e.length; o < i; o++)
                (r = t(e[o], o, n)), null != r && s.push(r);
            else for (o in e) (r = t(e[o], o, n)), null != r && s.push(r);
            return ue.apply([], s);
          },
          guid: 1,
          proxy: function(e, t) {
            var n, i, r;
            if (
              ("string" == typeof t && ((r = e[t]), (t = e), (e = r)),
              ve.isFunction(e))
            )
              return (
                (n = le.call(arguments, 2)),
                (i = function() {
                  return e.apply(t || this, n.concat(le.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || ve.guid++),
                i
              );
          },
          now: function() {
            return +new Date();
          },
          support: me
        }),
        "function" == typeof Symbol &&
          (ve.fn[Symbol.iterator] = ae[Symbol.iterator]),
        ve.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(e, t) {
            fe["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var Te = (function(e) {
        function t(e, t, n, i) {
          var r,
            o,
            a,
            s,
            l,
            u,
            d,
            p,
            h = t && t.ownerDocument,
            m = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
          )
            return n;
          if (
            !i &&
            ((t ? t.ownerDocument || t : W) !== k && I(t), (t = t || k), P)
          ) {
            if (11 !== m && (u = ve.exec(e)))
              if ((r = u[1])) {
                if (9 === m) {
                  if (!(a = t.getElementById(r))) return n;
                  if (a.id === r) return n.push(a), n;
                } else if (
                  h &&
                  (a = h.getElementById(r)) &&
                  j(t, a) &&
                  a.id === r
                )
                  return n.push(a), n;
              } else {
                if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (r = u[3]) &&
                  E.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return J.apply(n, t.getElementsByClassName(r)), n;
              }
            if (E.qsa && !U[e + " "] && (!H || !H.test(e))) {
              if (1 !== m) (h = t), (p = e);
              else if ("object" !== t.nodeName.toLowerCase()) {
                for (
                  (s = t.getAttribute("id"))
                    ? (s = s.replace(be, "\\$&"))
                    : t.setAttribute("id", (s = F)),
                    d = x(e),
                    o = d.length,
                    l = fe.test(s) ? "#" + s : "[id='" + s + "']";
                  o--;

                )
                  d[o] = l + " " + f(d[o]);
                (p = d.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
              }
              if (p)
                try {
                  return J.apply(n, h.querySelectorAll(p)), n;
                } catch (g) {
                } finally {
                  s === F && t.removeAttribute("id");
                }
            }
          }
          return A(e.replace(se, "$1"), t, n, i);
        }
        function n() {
          function e(n, i) {
            return (
              t.push(n + " ") > T.cacheLength && delete e[t.shift()],
              (e[n + " "] = i)
            );
          }
          var t = [];
          return e;
        }
        function i(e) {
          return (e[F] = !0), e;
        }
        function r(e) {
          var t = k.createElement("div");
          try {
            return !!e(t);
          } catch (n) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function o(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            T.attrHandle[n[i]] = t;
        }
        function a(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              (~t.sourceIndex || G) - (~e.sourceIndex || G);
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function s(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return "input" === n && t.type === e;
          };
        }
        function l(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function u(e) {
          return i(function(t) {
            return (
              (t = +t),
              i(function(n, i) {
                for (var r, o = e([], n.length, t), a = o.length; a--; )
                  n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function c(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function d() {}
        function f(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function p(e, t, n) {
          var i = t.dir,
            r = n && "parentNode" === i,
            o = q++;
          return t.first
            ? function(t, n, o) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || r) return e(t, n, o);
              }
            : function(t, n, a) {
                var s,
                  l,
                  u,
                  c = [$, o];
                if (a) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || r) && e(t, n, a)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || r) {
                      if (
                        ((u = t[F] || (t[F] = {})),
                        (l = u[t.uniqueID] || (u[t.uniqueID] = {})),
                        (s = l[i]) && s[0] === $ && s[1] === o)
                      )
                        return (c[2] = s[2]);
                      if (((l[i] = c), (c[2] = e(t, n, a)))) return !0;
                    }
              };
        }
        function h(e) {
          return e.length > 1
            ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function m(e, n, i) {
          for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
          return i;
        }
        function g(e, t, n, i, r) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
            (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
          return a;
        }
        function v(e, t, n, r, o, a) {
          return (
            r && !r[F] && (r = v(r)),
            o && !o[F] && (o = v(o, a)),
            i(function(i, a, s, l) {
              var u,
                c,
                d,
                f = [],
                p = [],
                h = a.length,
                v = i || m(t || "*", s.nodeType ? [s] : s, []),
                y = !e || (!i && t) ? v : g(v, f, e, s, l),
                b = n ? (o || (i ? e : h || r) ? [] : a) : y;
              if ((n && n(y, b, s, l), r))
                for (u = g(b, p), r(u, [], s, l), c = u.length; c--; )
                  (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
              if (i) {
                if (o || e) {
                  if (o) {
                    for (u = [], c = b.length; c--; )
                      (d = b[c]) && u.push((y[c] = d));
                    o(null, (b = []), u, l);
                  }
                  for (c = b.length; c--; )
                    (d = b[c]) &&
                      (u = o ? ee(i, d) : f[c]) > -1 &&
                      (i[u] = !(a[u] = d));
                }
              } else (b = g(b === a ? b.splice(h, b.length) : b)), o ? o(null, a, b, l) : J.apply(a, b);
            })
          );
        }
        function y(e) {
          for (
            var t,
              n,
              i,
              r = e.length,
              o = T.relative[e[0].type],
              a = o || T.relative[" "],
              s = o ? 1 : 0,
              l = p(
                function(e) {
                  return e === t;
                },
                a,
                !0
              ),
              u = p(
                function(e) {
                  return ee(t, e) > -1;
                },
                a,
                !0
              ),
              c = [
                function(e, n, i) {
                  var r =
                    (!o && (i || n !== D)) ||
                    ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                  return (t = null), r;
                }
              ];
            s < r;
            s++
          )
            if ((n = T.relative[e[s].type])) c = [p(h(c), n)];
            else {
              if (((n = T.filter[e[s].type].apply(null, e[s].matches)), n[F])) {
                for (i = ++s; i < r && !T.relative[e[i].type]; i++);
                return v(
                  s > 1 && h(c),
                  s > 1 &&
                    f(
                      e
                        .slice(0, s - 1)
                        .concat({ value: " " === e[s - 2].type ? "*" : "" })
                    ).replace(se, "$1"),
                  n,
                  s < i && y(e.slice(s, i)),
                  i < r && y((e = e.slice(i))),
                  i < r && f(e)
                );
              }
              c.push(n);
            }
          return h(c);
        }
        function b(e, n) {
          var r = n.length > 0,
            o = e.length > 0,
            a = function(i, a, s, l, u) {
              var c,
                d,
                f,
                p = 0,
                h = "0",
                m = i && [],
                v = [],
                y = D,
                b = i || (o && T.find.TAG("*", u)),
                _ = ($ += null == y ? 1 : Math.random() || 0.1),
                E = b.length;
              for (
                u && (D = a === k || a || u);
                h !== E && null != (c = b[h]);
                h++
              ) {
                if (o && c) {
                  for (
                    d = 0, a || c.ownerDocument === k || (I(c), (s = !P));
                    (f = e[d++]);

                  )
                    if (f(c, a || k, s)) {
                      l.push(c);
                      break;
                    }
                  u && ($ = _);
                }
                r && ((c = !f && c) && p--, i && m.push(c));
              }
              if (((p += h), r && h !== p)) {
                for (d = 0; (f = n[d++]); ) f(m, v, a, s);
                if (i) {
                  if (p > 0) for (; h--; ) m[h] || v[h] || (v[h] = Y.call(l));
                  v = g(v);
                }
                J.apply(l, v),
                  u &&
                    !i &&
                    v.length > 0 &&
                    p + n.length > 1 &&
                    t.uniqueSort(l);
              }
              return u && (($ = _), (D = y)), m;
            };
          return r ? i(a) : a;
        }
        var _,
          E,
          T,
          w,
          C,
          x,
          S,
          A,
          D,
          O,
          N,
          I,
          k,
          L,
          P,
          H,
          M,
          R,
          j,
          F = "sizzle" + 1 * new Date(),
          W = e.document,
          $ = 0,
          q = 0,
          B = n(),
          V = n(),
          U = n(),
          z = function(e, t) {
            return e === t && (N = !0), 0;
          },
          G = 1 << 31,
          K = {}.hasOwnProperty,
          Q = [],
          Y = Q.pop,
          X = Q.push,
          J = Q.push,
          Z = Q.slice,
          ee = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          te =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ne = "[\\x20\\t\\r\\n\\f]",
          ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          re =
            "\\[" +
            ne +
            "*(" +
            ie +
            ")(?:" +
            ne +
            "*([*^$|!~]?=)" +
            ne +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            ie +
            "))|)" +
            ne +
            "*\\]",
          oe =
            ":(" +
            ie +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            re +
            ")*)|.*)\\)|)",
          ae = new RegExp(ne + "+", "g"),
          se = new RegExp(
            "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
            "g"
          ),
          le = new RegExp("^" + ne + "*," + ne + "*"),
          ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
          ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
          de = new RegExp(oe),
          fe = new RegExp("^" + ie + "$"),
          pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                ne +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                ne +
                "*(?:([+-]|)" +
                ne +
                "*(\\d+)|))" +
                ne +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                ne +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                ne +
                "*((?:-\\d)?\\d*)" +
                ne +
                "*\\)|)(?=[^-]|$)",
              "i"
            )
          },
          he = /^(?:input|select|textarea|button)$/i,
          me = /^h\d$/i,
          ge = /^[^{]+\{\s*\[native \w/,
          ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ye = /[+~]/,
          be = /'|\\/g,
          _e = new RegExp(
            "\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)",
            "ig"
          ),
          Ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n
              ? t
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          Te = function() {
            I();
          };
        try {
          J.apply((Q = Z.call(W.childNodes)), W.childNodes),
            Q[W.childNodes.length].nodeType;
        } catch (we) {
          J = {
            apply: Q.length
              ? function(e, t) {
                  X.apply(e, Z.call(t));
                }
              : function(e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                }
          };
        }
        (E = t.support = {}),
          (C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (I = t.setDocument = function(e) {
            var t,
              n,
              i = e ? e.ownerDocument || e : W;
            return i !== k && 9 === i.nodeType && i.documentElement
              ? ((k = i),
                (L = k.documentElement),
                (P = !C(k)),
                (n = k.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener("unload", Te, !1)
                    : n.attachEvent && n.attachEvent("onunload", Te)),
                (E.attributes = r(function(e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (E.getElementsByTagName = r(function(e) {
                  return (
                    e.appendChild(k.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (E.getElementsByClassName = ge.test(k.getElementsByClassName)),
                (E.getById = r(function(e) {
                  return (
                    (L.appendChild(e).id = F),
                    !k.getElementsByName || !k.getElementsByName(F).length
                  );
                })),
                E.getById
                  ? ((T.find.ID = function(e, t) {
                      if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }),
                    (T.filter.ID = function(e) {
                      var t = e.replace(_e, Ee);
                      return function(e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete T.find.ID,
                    (T.filter.ID = function(e) {
                      var t = e.replace(_e, Ee);
                      return function(e) {
                        var n =
                          "undefined" != typeof e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    })),
                (T.find.TAG = E.getElementsByTagName
                  ? function(e, t) {
                      return "undefined" != typeof t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : E.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function(e, t) {
                      var n,
                        i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (T.find.CLASS =
                  E.getElementsByClassName &&
                  function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && P)
                      return t.getElementsByClassName(e);
                  }),
                (M = []),
                (H = []),
                (E.qsa = ge.test(k.querySelectorAll)) &&
                  (r(function(e) {
                    (L.appendChild(e).innerHTML =
                      "<a id='" +
                      F +
                      "'></a><select id='" +
                      F +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        H.push("\\[" + ne + "*(?:value|" + te + ")"),
                      e.querySelectorAll("[id~=" + F + "-]").length ||
                        H.push("~="),
                      e.querySelectorAll(":checked").length ||
                        H.push(":checked"),
                      e.querySelectorAll("a#" + F + "+*").length ||
                        H.push(".#.+[+~]");
                  }),
                  r(function(e) {
                    var t = k.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        H.push("name" + ne + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        H.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      H.push(",.*:");
                  })),
                (E.matchesSelector = ge.test(
                  (R =
                    L.matches ||
                    L.webkitMatchesSelector ||
                    L.mozMatchesSelector ||
                    L.oMatchesSelector ||
                    L.msMatchesSelector)
                )) &&
                  r(function(e) {
                    (E.disconnectedMatch = R.call(e, "div")),
                      R.call(e, "[s!='']:x"),
                      M.push("!=", oe);
                  }),
                (H = H.length && new RegExp(H.join("|"))),
                (M = M.length && new RegExp(M.join("|"))),
                (t = ge.test(L.compareDocumentPosition)),
                (j =
                  t || ge.test(L.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (z = t
                  ? function(e, t) {
                      if (e === t) return (N = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return n
                        ? n
                        : ((n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & n ||
                          (!E.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e === k || (e.ownerDocument === W && j(W, e))
                              ? -1
                              : t === k || (t.ownerDocument === W && j(W, t))
                              ? 1
                              : O
                              ? ee(O, e) - ee(O, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                    }
                  : function(e, t) {
                      if (e === t) return (N = !0), 0;
                      var n,
                        i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        l = [t];
                      if (!r || !o)
                        return e === k
                          ? -1
                          : t === k
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : O
                          ? ee(O, e) - ee(O, t)
                          : 0;
                      if (r === o) return a(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (; s[i] === l[i]; ) i++;
                      return i
                        ? a(s[i], l[i])
                        : s[i] === W
                        ? -1
                        : l[i] === W
                        ? 1
                        : 0;
                    }),
                k)
              : k;
          }),
          (t.matches = function(e, n) {
            return t(e, null, null, n);
          }),
          (t.matchesSelector = function(e, n) {
            if (
              ((e.ownerDocument || e) !== k && I(e),
              (n = n.replace(ce, "='$1']")),
              E.matchesSelector &&
                P &&
                !U[n + " "] &&
                (!M || !M.test(n)) &&
                (!H || !H.test(n)))
            )
              try {
                var i = R.call(e, n);
                if (
                  i ||
                  E.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (r) {}
            return t(n, k, null, [e]).length > 0;
          }),
          (t.contains = function(e, t) {
            return (e.ownerDocument || e) !== k && I(e), j(e, t);
          }),
          (t.attr = function(e, t) {
            (e.ownerDocument || e) !== k && I(e);
            var n = T.attrHandle[t.toLowerCase()],
              i =
                n && K.call(T.attrHandle, t.toLowerCase())
                  ? n(e, t, !P)
                  : void 0;
            return void 0 !== i
              ? i
              : E.attributes || !P
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (t.uniqueSort = function(e) {
            var t,
              n = [],
              i = 0,
              r = 0;
            if (
              ((N = !E.detectDuplicates),
              (O = !E.sortStable && e.slice(0)),
              e.sort(z),
              N)
            ) {
              for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
              for (; i--; ) e.splice(n[i], 1);
            }
            return (O = null), e;
          }),
          (w = t.getText = function(e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += w(t);
            return n;
          }),
          (T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(_e, Ee)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(_e, Ee)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return pe.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        de.test(n) &&
                        (t = x(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(_e, Ee).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = B[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                    B(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          ("undefined" != typeof e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, n, i) {
                return function(r) {
                  var o = t.attr(r, e);
                  return null == o
                    ? "!=" === n
                    : !n ||
                        ((o += ""),
                        "=" === n
                          ? o === i
                          : "!=" === n
                          ? o !== i
                          : "^=" === n
                          ? i && 0 === o.indexOf(i)
                          : "*=" === n
                          ? i && o.indexOf(i) > -1
                          : "$=" === n
                          ? i && o.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1
                          : "|=" === n &&
                            (o === i || o.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function(e, t, n, i, r) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === i && 0 === r
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, l) {
                      var u,
                        c,
                        d,
                        f,
                        p,
                        h,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !l && !s,
                        b = !1;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (f = t; (f = f[m]); )
                              if (
                                s
                                  ? f.nodeName.toLowerCase() === v
                                  : 1 === f.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                          for (
                            f = g,
                              d = f[F] || (f[F] = {}),
                              c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                              u = c[e] || [],
                              p = u[0] === $ && u[1],
                              b = p && u[2],
                              f = p && g.childNodes[p];
                            (f = (++p && f && f[m]) || (b = p = 0) || h.pop());

                          )
                            if (1 === f.nodeType && ++b && f === t) {
                              c[e] = [$, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            ((f = t),
                            (d = f[F] || (f[F] = {})),
                            (c = d[f.uniqueID] || (d[f.uniqueID] = {})),
                            (u = c[e] || []),
                            (p = u[0] === $ && u[1]),
                            (b = p)),
                          b === !1)
                        )
                          for (
                            ;
                            (f =
                              (++p && f && f[m]) || (b = p = 0) || h.pop()) &&
                            ((s
                              ? f.nodeName.toLowerCase() !== v
                              : 1 !== f.nodeType) ||
                              !++b ||
                              (y &&
                                ((d = f[F] || (f[F] = {})),
                                (c = d[f.uniqueID] || (d[f.uniqueID] = {})),
                                (c[e] = [$, b])),
                              f !== t));

                          );
                        return (b -= r), b === i || (b % i === 0 && b / i >= 0);
                      }
                    };
              },
              PSEUDO: function(e, n) {
                var r,
                  o =
                    T.pseudos[e] ||
                    T.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return o[F]
                  ? o(n)
                  : o.length > 1
                  ? ((r = [e, e, "", n]),
                    T.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function(e, t) {
                          for (var i, r = o(e, n), a = r.length; a--; )
                            (i = ee(e, r[a])), (e[i] = !(t[i] = r[a]));
                        })
                      : function(e) {
                          return o(e, 0, r);
                        })
                  : o;
              }
            },
            pseudos: {
              not: i(function(e) {
                var t = [],
                  n = [],
                  r = S(e.replace(se, "$1"));
                return r[F]
                  ? i(function(e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function(e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function(e) {
                return function(n) {
                  return t(e, n).length > 0;
                };
              }),
              contains: i(function(e) {
                return (
                  (e = e.replace(_e, Ee)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: i(function(e) {
                return (
                  fe.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(_e, Ee).toLowerCase()),
                  function(t) {
                    var n;
                    do
                      if (
                        (n = P
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || 0 === n.indexOf(e + "-")
                        );
                    while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function(e) {
                return e === L;
              },
              focus: function(e) {
                return (
                  e === k.activeElement &&
                  (!k.hasFocus || k.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function(e) {
                return e.disabled === !1;
              },
              disabled: function(e) {
                return e.disabled === !0;
              },
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !T.pseudos.empty(e);
              },
              header: function(e) {
                return me.test(e.nodeName);
              },
              input: function(e) {
                return he.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: u(function() {
                return [0];
              }),
              last: u(function(e, t) {
                return [t - 1];
              }),
              eq: u(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: u(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: u(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: u(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: u(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              })
            }
          }),
          (T.pseudos.nth = T.pseudos.eq);
        for (_ in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        })
          T.pseudos[_] = s(_);
        for (_ in { submit: !0, reset: !0 }) T.pseudos[_] = l(_);
        return (
          (d.prototype = T.filters = T.pseudos),
          (T.setFilters = new d()),
          (x = t.tokenize = function(e, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              u,
              c = V[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s; ) {
              (i && !(r = le.exec(s))) ||
                (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                (i = !1),
                (r = ue.exec(s)) &&
                  ((i = r.shift()),
                  o.push({ value: i, type: r[0].replace(se, " ") }),
                  (s = s.slice(i.length)));
              for (a in T.filter)
                !(r = pe[a].exec(s)) ||
                  (u[a] && !(r = u[a](r))) ||
                  ((i = r.shift()),
                  o.push({ value: i, type: a, matches: r }),
                  (s = s.slice(i.length)));
              if (!i) break;
            }
            return n ? s.length : s ? t.error(e) : V(e, l).slice(0);
          }),
          (S = t.compile = function(e, t) {
            var n,
              i = [],
              r = [],
              o = U[e + " "];
            if (!o) {
              for (t || (t = x(e)), n = t.length; n--; )
                (o = y(t[n])), o[F] ? i.push(o) : r.push(o);
              (o = U(e, b(r, i))), (o.selector = e);
            }
            return o;
          }),
          (A = t.select = function(e, t, n, i) {
            var r,
              o,
              a,
              s,
              l,
              u = "function" == typeof e && e,
              d = !i && x((e = u.selector || e));
            if (((n = n || []), 1 === d.length)) {
              if (
                ((o = d[0] = d[0].slice(0)),
                o.length > 2 &&
                  "ID" === (a = o[0]).type &&
                  E.getById &&
                  9 === t.nodeType &&
                  P &&
                  T.relative[o[1].type])
              ) {
                if (
                  ((t = (T.find.ID(a.matches[0].replace(_e, Ee), t) || [])[0]),
                  !t)
                )
                  return n;
                u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              for (
                r = pe.needsContext.test(e) ? 0 : o.length;
                r-- && ((a = o[r]), !T.relative[(s = a.type)]);

              )
                if (
                  (l = T.find[s]) &&
                  (i = l(
                    a.matches[0].replace(_e, Ee),
                    (ye.test(o[0].type) && c(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(r, 1), (e = i.length && f(o)), !e))
                    return J.apply(n, i), n;
                  break;
                }
            }
            return (
              (u || S(e, d))(
                i,
                t,
                !P,
                n,
                !t || (ye.test(e) && c(t.parentNode)) || t
              ),
              n
            );
          }),
          (E.sortStable =
            F.split("")
              .sort(z)
              .join("") === F),
          (E.detectDuplicates = !!N),
          I(),
          (E.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(k.createElement("div"));
          })),
          r(function(e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            o("type|href|height|width", function(e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (E.attributes &&
            r(function(e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            o("value", function(e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          r(function(e) {
            return null == e.getAttribute("disabled");
          }) ||
            o(te, function(e, t, n) {
              var i;
              if (!n)
                return e[t] === !0
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
            }),
          t
        );
      })(n);
      (ve.find = Te),
        (ve.expr = Te.selectors),
        (ve.expr[":"] = ve.expr.pseudos),
        (ve.uniqueSort = ve.unique = Te.uniqueSort),
        (ve.text = Te.getText),
        (ve.isXMLDoc = Te.isXML),
        (ve.contains = Te.contains);
      var we = function(e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && ve(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        Ce = function(e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        xe = ve.expr.match.needsContext,
        Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ae = /^.[^:#\[\.,]*$/;
      (ve.filter = function(e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? ve.find.matchesSelector(i, e)
              ? [i]
              : []
            : ve.find.matches(
                e,
                ve.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        ve.fn.extend({
          find: function(e) {
            var t,
              n = [],
              i = this,
              r = i.length;
            if ("string" != typeof e)
              return this.pushStack(
                ve(e).filter(function() {
                  for (t = 0; t < r; t++)
                    if (ve.contains(i[t], this)) return !0;
                })
              );
            for (t = 0; t < r; t++) ve.find(e, i[t], n);
            return (
              (n = this.pushStack(r > 1 ? ve.unique(n) : n)),
              (n.selector = this.selector ? this.selector + " " + e : e),
              n
            );
          },
          filter: function(e) {
            return this.pushStack(s(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(s(this, e || [], !0));
          },
          is: function(e) {
            return !!s(
              this,
              "string" == typeof e && xe.test(e) ? ve(e) : e || [],
              !1
            ).length;
          }
        });
      var De,
        Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ne = (ve.fn.init = function(e, t, n) {
          var i, r;
          if (!e) return this;
          if (((n = n || De), "string" == typeof e)) {
            if (
              ((i =
                "<" === e.charAt(0) &&
                ">" === e.charAt(e.length - 1) &&
                e.length >= 3
                  ? [null, e, null]
                  : Oe.exec(e)),
              !i || (!i[1] && t))
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (i[1]) {
              if (
                ((t = t instanceof ve ? t[0] : t),
                ve.merge(
                  this,
                  ve.parseHTML(
                    i[1],
                    t && t.nodeType ? t.ownerDocument || t : se,
                    !0
                  )
                ),
                Se.test(i[1]) && ve.isPlainObject(t))
              )
                for (i in t)
                  ve.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            if (((r = se.getElementById(i[2])), r && r.parentNode)) {
              if (r.id !== i[2]) return De.find(e);
              (this.length = 1), (this[0] = r);
            }
            return (this.context = se), (this.selector = e), this;
          }
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : ve.isFunction(e)
            ? "undefined" != typeof n.ready
              ? n.ready(e)
              : e(ve)
            : (void 0 !== e.selector &&
                ((this.selector = e.selector), (this.context = e.context)),
              ve.makeArray(e, this));
        });
      (Ne.prototype = ve.fn), (De = ve(se));
      var Ie = /^(?:parents|prev(?:Until|All))/,
        ke = { children: !0, contents: !0, next: !0, prev: !0 };
      ve.fn.extend({
        has: function(e) {
          var t,
            n = ve(e, this),
            i = n.length;
          return this.filter(function() {
            for (t = 0; t < i; t++) if (ve.contains(this, n[t])) return !0;
          });
        },
        closest: function(e, t) {
          for (
            var n,
              i = 0,
              r = this.length,
              o = [],
              a =
                xe.test(e) || "string" != typeof e
                  ? ve(e, t || this.context)
                  : 0;
            i < r;
            i++
          )
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : 1 === n.nodeType && ve.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
          return this.pushStack(o.length > 1 ? ve.uniqueSort(o) : o);
        },
        index: function(e) {
          return e
            ? "string" == typeof e
              ? ve.inArray(this[0], ve(e))
              : ve.inArray(e.jquery ? e[0] : e, this)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(e, t) {
          return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))));
        },
        addBack: function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        ve.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return we(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
              return we(e, "parentNode", n);
            },
            next: function(e) {
              return l(e, "nextSibling");
            },
            prev: function(e) {
              return l(e, "previousSibling");
            },
            nextAll: function(e) {
              return we(e, "nextSibling");
            },
            prevAll: function(e) {
              return we(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
              return we(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
              return we(e, "previousSibling", n);
            },
            siblings: function(e) {
              return Ce((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return Ce(e.firstChild);
            },
            contents: function(e) {
              return ve.nodeName(e, "iframe")
                ? e.contentDocument || e.contentWindow.document
                : ve.merge([], e.childNodes);
            }
          },
          function(e, t) {
            ve.fn[e] = function(n, i) {
              var r = ve.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = ve.filter(i, r)),
                this.length > 1 &&
                  (ke[e] || (r = ve.uniqueSort(r)),
                  Ie.test(e) && (r = r.reverse())),
                this.pushStack(r)
              );
            };
          }
        );
      var Le = /\S+/g;
      (ve.Callbacks = function(e) {
        e = "string" == typeof e ? u(e) : ve.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          a = [],
          s = -1,
          l = function() {
            for (r = e.once, i = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                o[s].apply(n[0], n[1]) === !1 &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          c = {
            add: function() {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function i(t) {
                    ve.each(t, function(t, n) {
                      ve.isFunction(n)
                        ? (e.unique && c.has(n)) || o.push(n)
                        : n && n.length && "string" !== ve.type(n) && i(n);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function() {
              return (
                ve.each(arguments, function(e, t) {
                  for (var n; (n = ve.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? ve.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (r = a = []), (o = n = ""), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (r = !0), n || c.disable(), this;
            },
            locked: function() {
              return !!r;
            },
            fireWith: function(e, n) {
              return (
                r ||
                  ((n = n || []),
                  (n = [e, n.slice ? n.slice() : n]),
                  a.push(n),
                  t || l()),
                this
              );
            },
            fire: function() {
              return c.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!i;
            }
          };
        return c;
      }),
        ve.extend({
          Deferred: function(e) {
            var t = [
                ["resolve", "done", ve.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ve.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ve.Callbacks("memory")]
              ],
              n = "pending",
              i = {
                state: function() {
                  return n;
                },
                always: function() {
                  return r.done(arguments).fail(arguments), this;
                },
                then: function() {
                  var e = arguments;
                  return ve
                    .Deferred(function(n) {
                      ve.each(t, function(t, o) {
                        var a = ve.isFunction(e[t]) && e[t];
                        r[o[1]](function() {
                          var e = a && a.apply(this, arguments);
                          e && ve.isFunction(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[o[0] + "With"](
                                this === i ? n.promise() : this,
                                a ? [e] : arguments
                              );
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                promise: function(e) {
                  return null != e ? ve.extend(e, i) : i;
                }
              },
              r = {};
            return (
              (i.pipe = i.then),
              ve.each(t, function(e, o) {
                var a = o[2],
                  s = o[3];
                (i[o[1]] = a.add),
                  s &&
                    a.add(
                      function() {
                        n = s;
                      },
                      t[1 ^ e][2].disable,
                      t[2][2].lock
                    ),
                  (r[o[0]] = function() {
                    return (
                      r[o[0] + "With"](this === r ? i : this, arguments), this
                    );
                  }),
                  (r[o[0] + "With"] = a.fireWith);
              }),
              i.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function(e) {
            var t,
              n,
              i,
              r = 0,
              o = le.call(arguments),
              a = o.length,
              s = 1 !== a || (e && ve.isFunction(e.promise)) ? a : 0,
              l = 1 === s ? e : ve.Deferred(),
              u = function(e, n, i) {
                return function(r) {
                  (n[e] = this),
                    (i[e] = arguments.length > 1 ? le.call(arguments) : r),
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
                };
              };
            if (a > 1)
              for (
                t = new Array(a), n = new Array(a), i = new Array(a);
                r < a;
                r++
              )
                o[r] && ve.isFunction(o[r].promise)
                  ? o[r]
                      .promise()
                      .progress(u(r, n, t))
                      .done(u(r, i, o))
                      .fail(l.reject)
                  : --s;
            return s || l.resolveWith(i, o), l.promise();
          }
        });
      var Pe;
      (ve.fn.ready = function(e) {
        return ve.ready.promise().done(e), this;
      }),
        ve.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function(e) {
            e ? ve.readyWait++ : ve.ready(!0);
          },
          ready: function(e) {
            (e === !0 ? --ve.readyWait : ve.isReady) ||
              ((ve.isReady = !0),
              (e !== !0 && --ve.readyWait > 0) ||
                (Pe.resolveWith(se, [ve]),
                ve.fn.triggerHandler &&
                  (ve(se).triggerHandler("ready"), ve(se).off("ready"))));
          }
        }),
        (ve.ready.promise = function(e) {
          if (!Pe)
            if (
              ((Pe = ve.Deferred()),
              "complete" === se.readyState ||
                ("loading" !== se.readyState && !se.documentElement.doScroll))
            )
              n.setTimeout(ve.ready);
            else if (se.addEventListener)
              se.addEventListener("DOMContentLoaded", d),
                n.addEventListener("load", d);
            else {
              se.attachEvent("onreadystatechange", d),
                n.attachEvent("onload", d);
              var t = !1;
              try {
                t = null == n.frameElement && se.documentElement;
              } catch (i) {}
              t &&
                t.doScroll &&
                !(function r() {
                  if (!ve.isReady) {
                    try {
                      t.doScroll("left");
                    } catch (e) {
                      return n.setTimeout(r, 50);
                    }
                    c(), ve.ready();
                  }
                })();
            }
          return Pe.promise(e);
        }),
        ve.ready.promise();
      var He;
      for (He in ve(me)) break;
      (me.ownFirst = "0" === He),
        (me.inlineBlockNeedsLayout = !1),
        ve(function() {
          var e, t, n, i;
          (n = se.getElementsByTagName("body")[0]),
            n &&
              n.style &&
              ((t = se.createElement("div")),
              (i = se.createElement("div")),
              (i.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              n.appendChild(i).appendChild(t),
              "undefined" != typeof t.style.zoom &&
                ((t.style.cssText =
                  "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
                e && (n.style.zoom = 1)),
              n.removeChild(i));
        }),
        (function() {
          var e = se.createElement("div");
          me.deleteExpando = !0;
          try {
            delete e.test;
          } catch (t) {
            me.deleteExpando = !1;
          }
          e = null;
        })();
      var Me = function(e) {
          var t = ve.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
          return (
            (1 === n || 9 === n) &&
            (!t || (t !== !0 && e.getAttribute("classid") === t))
          );
        },
        Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /([A-Z])/g;
      ve.extend({
        cache: {},
        noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
          return (
            (e = e.nodeType ? ve.cache[e[ve.expando]] : e[ve.expando]),
            !!e && !p(e)
          );
        },
        data: function(e, t, n) {
          return h(e, t, n);
        },
        removeData: function(e, t) {
          return m(e, t);
        },
        _data: function(e, t, n) {
          return h(e, t, n, !0);
        },
        _removeData: function(e, t) {
          return m(e, t, !0);
        }
      }),
        ve.fn.extend({
          data: function(e, t) {
            var n,
              i,
              r,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = ve.data(o)),
                1 === o.nodeType && !ve._data(o, "parsedAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((i = a[n].name),
                    0 === i.indexOf("data-") &&
                      ((i = ve.camelCase(i.slice(5))), f(o, i, r[i])));
                ve._data(o, "parsedAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function() {
                  ve.data(this, e);
                })
              : arguments.length > 1
              ? this.each(function() {
                  ve.data(this, e, t);
                })
              : o
              ? f(o, e, ve.data(o, e))
              : void 0;
          },
          removeData: function(e) {
            return this.each(function() {
              ve.removeData(this, e);
            });
          }
        }),
        ve.extend({
          queue: function(e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = ve._data(e, t)),
                n &&
                  (!i || ve.isArray(n)
                    ? (i = ve._data(e, t, ve.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function(e, t) {
            t = t || "fx";
            var n = ve.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = ve._queueHooks(e, t),
              a = function() {
                ve.dequeue(e, t);
              };
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(e, a, o)),
              !i && o && o.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return (
              ve._data(e, n) ||
              ve._data(e, n, {
                empty: ve.Callbacks("once memory").add(function() {
                  ve._removeData(e, t + "queue"), ve._removeData(e, n);
                })
              })
            );
          }
        }),
        ve.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? ve.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function() {
                    var n = ve.queue(this, e, t);
                    ve._queueHooks(this, e),
                      "fx" === e &&
                        "inprogress" !== n[0] &&
                        ve.dequeue(this, e);
                  })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              ve.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || "fx", []);
          },
          promise: function(e, t) {
            var n,
              i = 1,
              r = ve.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = ve._data(o[a], e + "queueHooks")),
                n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t);
          }
        }),
        (function() {
          var e;
          me.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return (
              (n = se.getElementsByTagName("body")[0]),
              n && n.style
                ? ((t = se.createElement("div")),
                  (i = se.createElement("div")),
                  (i.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                  n.appendChild(i).appendChild(t),
                  "undefined" != typeof t.style.zoom &&
                    ((t.style.cssText =
                      "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                    (t.appendChild(se.createElement("div")).style.width =
                      "5px"),
                    (e = 3 !== t.offsetWidth)),
                  n.removeChild(i),
                  e)
                : void 0
            );
          };
        })();
      var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        We = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        $e = ["Top", "Right", "Bottom", "Left"],
        qe = function(e, t) {
          return (
            (e = t || e),
            "none" === ve.css(e, "display") || !ve.contains(e.ownerDocument, e)
          );
        },
        Be = function(e, t, n, i, r, o, a) {
          var s = 0,
            l = e.length,
            u = null == n;
          if ("object" === ve.type(n)) {
            r = !0;
            for (s in n) Be(e, t, s, n[s], !0, o, a);
          } else if (
            void 0 !== i &&
            ((r = !0),
            ve.isFunction(i) || (a = !0),
            u &&
              (a
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function(e, t, n) {
                    return u.call(ve(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        Ve = /^(?:checkbox|radio)$/i,
        Ue = /<([\w:-]+)/,
        ze = /^$|\/(?:java|ecma)script/i,
        Ge = /^\s+/,
        Ke =
          "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
      !(function() {
        var e = se.createElement("div"),
          t = se.createDocumentFragment(),
          n = se.createElement("input");
        (e.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (me.leadingWhitespace = 3 === e.firstChild.nodeType),
          (me.tbody = !e.getElementsByTagName("tbody").length),
          (me.htmlSerialize = !!e.getElementsByTagName("link").length),
          (me.html5Clone =
            "<:nav></:nav>" !==
            se.createElement("nav").cloneNode(!0).outerHTML),
          (n.type = "checkbox"),
          (n.checked = !0),
          t.appendChild(n),
          (me.appendChecked = n.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
          t.appendChild(e),
          (n = se.createElement("input")),
          n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          e.appendChild(n),
          (me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (me.noCloneEvent = !!e.addEventListener),
          (e[ve.expando] = 1),
          (me.attributes = !e.getAttribute(ve.expando));
      })();
      var Qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      };
      (Qe.optgroup = Qe.option),
        (Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead),
        (Qe.th = Qe.td);
      var Ye = /<|&#?\w+;/,
        Xe = /<tbody/i;
      !(function() {
        var e,
          t,
          i = se.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 })
          (t = "on" + e),
            (me[e] = t in n) ||
              (i.setAttribute(t, "t"),
              (me[e] = i.attributes[t].expando === !1));
        i = null;
      })();
      var Je = /^(?:input|select|textarea)$/i,
        Ze = /^key/,
        et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        tt = /^(?:focusinfocus|focusoutblur)$/,
        nt = /^([^.]*)(?:\.(.+)|)/;
      (ve.event = {
        global: {},
        add: function(e, t, n, i, r) {
          var o,
            a,
            s,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            m,
            g = ve._data(e);
          if (g) {
            for (
              n.handler && ((l = n), (n = l.handler), (r = l.selector)),
                n.guid || (n.guid = ve.guid++),
                (a = g.events) || (a = g.events = {}),
                (c = g.handle) ||
                  ((c = g.handle = function(e) {
                    return "undefined" == typeof ve ||
                      (e && ve.event.triggered === e.type)
                      ? void 0
                      : ve.event.dispatch.apply(c.elem, arguments);
                  }),
                  (c.elem = e)),
                t = (t || "").match(Le) || [""],
                s = t.length;
              s--;

            )
              (o = nt.exec(t[s]) || []),
                (p = m = o[1]),
                (h = (o[2] || "").split(".").sort()),
                p &&
                  ((u = ve.event.special[p] || {}),
                  (p = (r ? u.delegateType : u.bindType) || p),
                  (u = ve.event.special[p] || {}),
                  (d = ve.extend(
                    {
                      type: p,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && ve.expr.match.needsContext.test(r),
                      namespace: h.join(".")
                    },
                    l
                  )),
                  (f = a[p]) ||
                    ((f = a[p] = []),
                    (f.delegateCount = 0),
                    (u.setup && u.setup.call(e, i, h, c) !== !1) ||
                      (e.addEventListener
                        ? e.addEventListener(p, c, !1)
                        : e.attachEvent && e.attachEvent("on" + p, c))),
                  u.add &&
                    (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                  r ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                  (ve.event.global[p] = !0));
            e = null;
          }
        },
        remove: function(e, t, n, i, r) {
          var o,
            a,
            s,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            m,
            g = ve.hasData(e) && ve._data(e);
          if (g && (c = g.events)) {
            for (t = (t || "").match(Le) || [""], u = t.length; u--; )
              if (
                ((s = nt.exec(t[u]) || []),
                (p = m = s[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  d = ve.event.special[p] || {},
                    p = (i ? d.delegateType : d.bindType) || p,
                    f = c[p] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    l = o = f.length;
                  o--;

                )
                  (a = f[o]),
                    (!r && m !== a.origType) ||
                      (n && n.guid !== a.guid) ||
                      (s && !s.test(a.namespace)) ||
                      (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                      (f.splice(o, 1),
                      a.selector && f.delegateCount--,
                      d.remove && d.remove.call(e, a));
                l &&
                  !f.length &&
                  ((d.teardown && d.teardown.call(e, h, g.handle) !== !1) ||
                    ve.removeEvent(e, p, g.handle),
                  delete c[p]);
              } else for (p in c) ve.event.remove(e, p + t[u], n, i, !0);
            ve.isEmptyObject(c) &&
              (delete g.handle, ve._removeData(e, "events"));
          }
        },
        trigger: function(e, t, i, r) {
          var o,
            a,
            s,
            l,
            u,
            c,
            d,
            f = [i || se],
            p = he.call(e, "type") ? e.type : e,
            h = he.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = c = i = i || se),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !tt.test(p + ve.event.triggered) &&
              (p.indexOf(".") > -1 &&
                ((h = p.split(".")), (p = h.shift()), h.sort()),
              (a = p.indexOf(":") < 0 && "on" + p),
              (e = e[ve.expando]
                ? e
                : new ve.Event(p, "object" == typeof e && e)),
              (e.isTrigger = r ? 2 : 3),
              (e.namespace = h.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : ve.makeArray(t, [e])),
              (u = ve.event.special[p] || {}),
              r || !u.trigger || u.trigger.apply(i, t) !== !1))
          ) {
            if (!r && !u.noBubble && !ve.isWindow(i)) {
              for (
                l = u.delegateType || p, tt.test(l + p) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                f.push(s), (c = s);
              c === (i.ownerDocument || se) &&
                f.push(c.defaultView || c.parentWindow || n);
            }
            for (d = 0; (s = f[d++]) && !e.isPropagationStopped(); )
              (e.type = d > 1 ? l : u.bindType || p),
                (o =
                  (ve._data(s, "events") || {})[e.type] &&
                  ve._data(s, "handle")),
                o && o.apply(s, t),
                (o = a && s[a]),
                o &&
                  o.apply &&
                  Me(s) &&
                  ((e.result = o.apply(s, t)),
                  e.result === !1 && e.preventDefault());
            if (
              ((e.type = p),
              !r &&
                !e.isDefaultPrevented() &&
                (!u._default || u._default.apply(f.pop(), t) === !1) &&
                Me(i) &&
                a &&
                i[p] &&
                !ve.isWindow(i))
            ) {
              (c = i[a]), c && (i[a] = null), (ve.event.triggered = p);
              try {
                i[p]();
              } catch (m) {}
              (ve.event.triggered = void 0), c && (i[a] = c);
            }
            return e.result;
          }
        },
        dispatch: function(e) {
          e = ve.event.fix(e);
          var t,
            n,
            i,
            r,
            o,
            a = [],
            s = le.call(arguments),
            l = (ve._data(this, "events") || {})[e.type] || [],
            u = ve.event.special[e.type] || {};
          if (
            ((s[0] = e),
            (e.delegateTarget = this),
            !u.preDispatch || u.preDispatch.call(this, e) !== !1)
          ) {
            for (
              a = ve.event.handlers.call(this, e, l), t = 0;
              (r = a[t++]) && !e.isPropagationStopped();

            )
              for (
                e.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();

              )
                (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
                  ((e.handleObj = o),
                  (e.data = o.data),
                  (i = (
                    (ve.event.special[o.origType] || {}).handle || o.handler
                  ).apply(r.elem, s)),
                  void 0 !== i &&
                    (e.result = i) === !1 &&
                    (e.preventDefault(), e.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, e), e.result;
          }
        },
        handlers: function(e, t) {
          var n,
            i,
            r,
            o,
            a = [],
            s = t.delegateCount,
            l = e.target;
          if (
            s &&
            l.nodeType &&
            ("click" !== e.type || isNaN(e.button) || e.button < 1)
          )
            for (; l != this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                (l.disabled !== !0 || "click" !== e.type)
              ) {
                for (i = [], n = 0; n < s; n++)
                  (o = t[n]),
                    (r = o.selector + " "),
                    void 0 === i[r] &&
                      (i[r] = o.needsContext
                        ? ve(r, this).index(l) > -1
                        : ve.find(r, this, null, [l]).length),
                    i[r] && i.push(o);
                i.length && a.push({ elem: l, handlers: i });
              }
          return (
            s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
          );
        },
        fix: function(e) {
          if (e[ve.expando]) return e;
          var t,
            n,
            i,
            r = e.type,
            o = e,
            a = this.fixHooks[r];
          for (
            a ||
              (this.fixHooks[r] = a = et.test(r)
                ? this.mouseHooks
                : Ze.test(r)
                ? this.keyHooks
                : {}),
              i = a.props ? this.props.concat(a.props) : this.props,
              e = new ve.Event(o),
              t = i.length;
            t--;

          )
            (n = i[t]), (e[n] = o[n]);
          return (
            e.target || (e.target = o.srcElement || se),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            (e.metaKey = !!e.metaKey),
            a.filter ? a.filter(e, o) : e
          );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
        fixHooks: {},
        keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
            return (
              null == e.which &&
                (e.which = null != t.charCode ? t.charCode : t.keyCode),
              e
            );
          }
        },
        mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
          filter: function(e, t) {
            var n,
              i,
              r,
              o = t.button,
              a = t.fromElement;
            return (
              null == e.pageX &&
                null != t.clientX &&
                ((i = e.target.ownerDocument || se),
                (r = i.documentElement),
                (n = i.body),
                (e.pageX =
                  t.clientX +
                  ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
                  ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
                (e.pageY =
                  t.clientY +
                  ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
                  ((r && r.clientTop) || (n && n.clientTop) || 0))),
              !e.relatedTarget &&
                a &&
                (e.relatedTarget = a === e.target ? t.toElement : a),
              e.which ||
                void 0 === o ||
                (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
              e
            );
          }
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== C() && this.focus)
                try {
                  return this.focus(), !1;
                } catch (e) {}
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === C() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              if (
                ve.nodeName(this, "input") &&
                "checkbox" === this.type &&
                this.click
              )
                return this.click(), !1;
            },
            _default: function(e) {
              return ve.nodeName(e.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        },
        simulate: function(e, t, n) {
          var i = ve.extend(new ve.Event(), n, { type: e, isSimulated: !0 });
          ve.event.trigger(i, null, t),
            i.isDefaultPrevented() && n.preventDefault();
        }
      }),
        (ve.removeEvent = se.removeEventListener
          ? function(e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }
          : function(e, t, n) {
              var i = "on" + t;
              e.detachEvent &&
                ("undefined" == typeof e[i] && (e[i] = null),
                e.detachEvent(i, n));
            }),
        (ve.Event = function(e, t) {
          return this instanceof ve.Event
            ? (e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && e.returnValue === !1)
                      ? T
                      : w))
                : (this.type = e),
              t && ve.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || ve.now()),
              void (this[ve.expando] = !0))
            : new ve.Event(e, t);
        }),
        (ve.Event.prototype = {
          constructor: ve.Event,
          isDefaultPrevented: w,
          isPropagationStopped: w,
          isImmediatePropagationStopped: w,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = T),
              e &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = T),
              e &&
                !this.isSimulated &&
                (e.stopPropagation && e.stopPropagation(),
                (e.cancelBubble = !0));
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = T),
              e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        ve.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(e, t) {
            ve.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  i = this,
                  r = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (r && (r === i || ve.contains(i, r))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        me.submit ||
          (ve.event.special.submit = {
            setup: function() {
              return (
                !ve.nodeName(this, "form") &&
                void ve.event.add(
                  this,
                  "click._submit keypress._submit",
                  function(e) {
                    var t = e.target,
                      n =
                        ve.nodeName(t, "input") || ve.nodeName(t, "button")
                          ? ve.prop(t, "form")
                          : void 0;
                    n &&
                      !ve._data(n, "submit") &&
                      (ve.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0;
                      }),
                      ve._data(n, "submit", !0));
                  }
                )
              );
            },
            postDispatch: function(e) {
              e._submitBubble &&
                (delete e._submitBubble,
                this.parentNode &&
                  !e.isTrigger &&
                  ve.event.simulate("submit", this.parentNode, e));
            },
            teardown: function() {
              return (
                !ve.nodeName(this, "form") &&
                void ve.event.remove(this, "._submit")
              );
            }
          }),
        me.change ||
          (ve.event.special.change = {
            setup: function() {
              return Je.test(this.nodeName)
                ? (("checkbox" !== this.type && "radio" !== this.type) ||
                    (ve.event.add(this, "propertychange._change", function(e) {
                      "checked" === e.originalEvent.propertyName &&
                        (this._justChanged = !0);
                    }),
                    ve.event.add(this, "click._change", function(e) {
                      this._justChanged &&
                        !e.isTrigger &&
                        (this._justChanged = !1),
                        ve.event.simulate("change", this, e);
                    })),
                  !1)
                : void ve.event.add(this, "beforeactivate._change", function(
                    e
                  ) {
                    var t = e.target;
                    Je.test(t.nodeName) &&
                      !ve._data(t, "change") &&
                      (ve.event.add(t, "change._change", function(e) {
                        !this.parentNode ||
                          e.isSimulated ||
                          e.isTrigger ||
                          ve.event.simulate("change", this.parentNode, e);
                      }),
                      ve._data(t, "change", !0));
                  });
            },
            handle: function(e) {
              var t = e.target;
              if (
                this !== t ||
                e.isSimulated ||
                e.isTrigger ||
                ("radio" !== t.type && "checkbox" !== t.type)
              )
                return e.handleObj.handler.apply(this, arguments);
            },
            teardown: function() {
              return ve.event.remove(this, "._change"), !Je.test(this.nodeName);
            }
          }),
        me.focusin ||
          ve.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) {
              ve.event.simulate(t, e.target, ve.event.fix(e));
            };
            ve.event.special[t] = {
              setup: function() {
                var i = this.ownerDocument || this,
                  r = ve._data(i, t);
                r || i.addEventListener(e, n, !0), ve._data(i, t, (r || 0) + 1);
              },
              teardown: function() {
                var i = this.ownerDocument || this,
                  r = ve._data(i, t) - 1;
                r
                  ? ve._data(i, t, r)
                  : (i.removeEventListener(e, n, !0), ve._removeData(i, t));
              }
            };
          }),
        ve.fn.extend({
          on: function(e, t, n, i) {
            return x(this, e, t, n, i);
          },
          one: function(e, t, n, i) {
            return x(this, e, t, n, i, 1);
          },
          off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                ve(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
              n === !1 && (n = w),
              this.each(function() {
                ve.event.remove(this, e, n, t);
              })
            );
          },
          trigger: function(e, t) {
            return this.each(function() {
              ve.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ve.event.trigger(e, t, n, !0);
          }
        });
      var it = / jQuery\d+="(?:null|\d+)"/g,
        rt = new RegExp("<(?:" + Ke + ")[\\s/>]", "i"),
        ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        at = /<script|<style|<link/i,
        st = /checked\s*(?:[^=]|=\s*.checked.)/i,
        lt = /^true\/(.*)/,
        ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ct = v(se),
        dt = ct.appendChild(se.createElement("div"));
      ve.extend({
        htmlPrefilter: function(e) {
          return e.replace(ot, "<$1></$2>");
        },
        clone: function(e, t, n) {
          var i,
            r,
            o,
            a,
            s,
            l = ve.contains(e.ownerDocument, e);
          if (
            (me.html5Clone || ve.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">")
              ? (o = e.cloneNode(!0))
              : ((dt.innerHTML = e.outerHTML),
                dt.removeChild((o = dt.firstChild))),
            !(
              (me.noCloneEvent && me.noCloneChecked) ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              ve.isXMLDoc(e)
            ))
          )
            for (i = y(o), s = y(e), a = 0; null != (r = s[a]); ++a)
              i[a] && N(r, i[a]);
          if (t)
            if (n)
              for (s = s || y(e), i = i || y(o), a = 0; null != (r = s[a]); a++)
                O(r, i[a]);
            else O(e, o);
          return (
            (i = y(o, "script")),
            i.length > 0 && b(i, !l && y(e, "script")),
            (i = s = r = null),
            o
          );
        },
        cleanData: function(e, t) {
          for (
            var n,
              i,
              r,
              o,
              a = 0,
              s = ve.expando,
              l = ve.cache,
              u = me.attributes,
              c = ve.event.special;
            null != (n = e[a]);
            a++
          )
            if ((t || Me(n)) && ((r = n[s]), (o = r && l[r]))) {
              if (o.events)
                for (i in o.events)
                  c[i] ? ve.event.remove(n, i) : ve.removeEvent(n, i, o.handle);
              l[r] &&
                (delete l[r],
                u || "undefined" == typeof n.removeAttribute
                  ? (n[s] = void 0)
                  : n.removeAttribute(s),
                ae.push(r));
            }
        }
      }),
        ve.fn.extend({
          domManip: I,
          detach: function(e) {
            return k(this, e, !0);
          },
          remove: function(e) {
            return k(this, e);
          },
          text: function(e) {
            return Be(
              this,
              function(e) {
                return void 0 === e
                  ? ve.text(this)
                  : this.empty().append(
                      ((this[0] && this[0].ownerDocument) || se).createTextNode(
                        e
                      )
                    );
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return I(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = S(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function() {
            return I(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = S(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return I(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return I(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
              for (1 === e.nodeType && ve.cleanData(y(e, !1)); e.firstChild; )
                e.removeChild(e.firstChild);
              e.options && ve.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return ve.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return Be(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e)
                  return 1 === t.nodeType
                    ? t.innerHTML.replace(it, "")
                    : void 0;
                if (
                  "string" == typeof e &&
                  !at.test(e) &&
                  (me.htmlSerialize || !rt.test(e)) &&
                  (me.leadingWhitespace || !Ge.test(e)) &&
                  !Qe[(Ue.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = ve.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (ve.cleanData(y(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (r) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return I(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                ve.inArray(this, e) < 0 &&
                  (ve.cleanData(y(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        ve.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(e, t) {
            ve.fn[e] = function(e) {
              for (
                var n, i = 0, r = [], o = ve(e), a = o.length - 1;
                i <= a;
                i++
              )
                (n = i === a ? this : this.clone(!0)),
                  ve(o[i])[t](n),
                  ce.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var ft,
        pt = { HTML: "block", BODY: "block" },
        ht = /^margin/,
        mt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        gt = function(e, t, n, i) {
          var r,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          r = n.apply(e, i || []);
          for (o in t) e.style[o] = a[o];
          return r;
        },
        vt = se.documentElement;
      !(function() {
        function e() {
          var e,
            c,
            d = se.documentElement;
          d.appendChild(l),
            (u.style.cssText =
              "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (t = r = s = !1),
            (i = a = !0),
            n.getComputedStyle &&
              ((c = n.getComputedStyle(u)),
              (t = "1%" !== (c || {}).top),
              (s = "2px" === (c || {}).marginLeft),
              (r = "4px" === (c || { width: "4px" }).width),
              (u.style.marginRight = "50%"),
              (i = "4px" === (c || { marginRight: "4px" }).marginRight),
              (e = u.appendChild(se.createElement("div"))),
              (e.style.cssText = u.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (e.style.marginRight = e.style.width = "0"),
              (u.style.width = "1px"),
              (a = !parseFloat((n.getComputedStyle(e) || {}).marginRight)),
              u.removeChild(e)),
            (u.style.display = "none"),
            (o = 0 === u.getClientRects().length),
            o &&
              ((u.style.display = ""),
              (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (u.childNodes[0].style.borderCollapse = "separate"),
              (e = u.getElementsByTagName("td")),
              (e[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
              (o = 0 === e[0].offsetHeight),
              o &&
                ((e[0].style.display = ""),
                (e[1].style.display = "none"),
                (o = 0 === e[0].offsetHeight))),
            d.removeChild(l);
        }
        var t,
          i,
          r,
          o,
          a,
          s,
          l = se.createElement("div"),
          u = se.createElement("div");
        u.style &&
          ((u.style.cssText = "float:left;opacity:.5"),
          (me.opacity = "0.5" === u.style.opacity),
          (me.cssFloat = !!u.style.cssFloat),
          (u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (me.clearCloneStyle = "content-box" === u.style.backgroundClip),
          (l = se.createElement("div")),
          (l.style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          (u.innerHTML = ""),
          l.appendChild(u),
          (me.boxSizing =
            "" === u.style.boxSizing ||
            "" === u.style.MozBoxSizing ||
            "" === u.style.WebkitBoxSizing),
          ve.extend(me, {
            reliableHiddenOffsets: function() {
              return null == t && e(), o;
            },
            boxSizingReliable: function() {
              return null == t && e(), r;
            },
            pixelMarginRight: function() {
              return null == t && e(), i;
            },
            pixelPosition: function() {
              return null == t && e(), t;
            },
            reliableMarginRight: function() {
              return null == t && e(), a;
            },
            reliableMarginLeft: function() {
              return null == t && e(), s;
            }
          }));
      })();
      var yt,
        bt,
        _t = /^(top|right|bottom|left)$/;
      n.getComputedStyle
        ? ((yt = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          }),
          (bt = function(e, t, n) {
            var i,
              r,
              o,
              a,
              s = e.style;
            return (
              (n = n || yt(e)),
              (a = n ? n.getPropertyValue(t) || n[t] : void 0),
              ("" !== a && void 0 !== a) ||
                ve.contains(e.ownerDocument, e) ||
                (a = ve.style(e, t)),
              n &&
                !me.pixelMarginRight() &&
                mt.test(a) &&
                ht.test(t) &&
                ((i = s.width),
                (r = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = i),
                (s.minWidth = r),
                (s.maxWidth = o)),
              void 0 === a ? a : a + ""
            );
          }))
        : vt.currentStyle &&
          ((yt = function(e) {
            return e.currentStyle;
          }),
          (bt = function(e, t, n) {
            var i,
              r,
              o,
              a,
              s = e.style;
            return (
              (n = n || yt(e)),
              (a = n ? n[t] : void 0),
              null == a && s && s[t] && (a = s[t]),
              mt.test(a) &&
                !_t.test(t) &&
                ((i = s.left),
                (r = e.runtimeStyle),
                (o = r && r.left),
                o && (r.left = e.currentStyle.left),
                (s.left = "fontSize" === t ? "1em" : a),
                (a = s.pixelLeft + "px"),
                (s.left = i),
                o && (r.left = o)),
              void 0 === a ? a : a + "" || "auto"
            );
          }));
      var Et = /alpha\([^)]*\)/i,
        Tt = /opacity\s*=\s*([^)]*)/i,
        wt = /^(none|table(?!-c[ea]).+)/,
        Ct = new RegExp("^(" + Fe + ")(.*)$", "i"),
        xt = { position: "absolute", visibility: "hidden", display: "block" },
        St = { letterSpacing: "0", fontWeight: "400" },
        At = ["Webkit", "O", "Moz", "ms"],
        Dt = se.createElement("div").style;
      ve.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = bt(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: { float: me.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              a,
              s = ve.camelCase(t),
              l = e.style;
            if (
              ((t = ve.cssProps[s] || (ve.cssProps[s] = M(s) || s)),
              (a = ve.cssHooks[t] || ve.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                ? r
                : l[t];
            if (
              ((o = typeof n),
              "string" === o &&
                (r = We.exec(n)) &&
                r[1] &&
                ((n = g(e, t, r)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (r && r[3]) || (ve.cssNumber[s] ? "" : "px")),
                me.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                !(a && "set" in a && void 0 === (n = a.set(e, n, i)))))
            )
              try {
                l[t] = n;
              } catch (u) {}
          }
        },
        css: function(e, t, n, i) {
          var r,
            o,
            a,
            s = ve.camelCase(t);
          return (
            (t = ve.cssProps[s] || (ve.cssProps[s] = M(s) || s)),
            (a = ve.cssHooks[t] || ve.cssHooks[s]),
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = bt(e, t, i)),
            "normal" === o && t in St && (o = St[t]),
            "" === n || n
              ? ((r = parseFloat(o)), n === !0 || isFinite(r) ? r || 0 : o)
              : o
          );
        }
      }),
        ve.each(["height", "width"], function(e, t) {
          ve.cssHooks[t] = {
            get: function(e, n, i) {
              if (n)
                return wt.test(ve.css(e, "display")) && 0 === e.offsetWidth
                  ? gt(e, xt, function() {
                      return W(e, t, i);
                    })
                  : W(e, t, i);
            },
            set: function(e, n, i) {
              var r = i && yt(e);
              return j(
                e,
                n,
                i
                  ? F(
                      e,
                      t,
                      i,
                      me.boxSizing &&
                        "border-box" === ve.css(e, "boxSizing", !1, r),
                      r
                    )
                  : 0
              );
            }
          };
        }),
        me.opacity ||
          (ve.cssHooks.opacity = {
            get: function(e, t) {
              return Tt.test(
                (t && e.currentStyle
                  ? e.currentStyle.filter
                  : e.style.filter) || ""
              )
                ? 0.01 * parseFloat(RegExp.$1) + ""
                : t
                ? "1"
                : "";
            },
            set: function(e, t) {
              var n = e.style,
                i = e.currentStyle,
                r = ve.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = (i && i.filter) || n.filter || "";
              (n.zoom = 1),
                ((t >= 1 || "" === t) &&
                  "" === ve.trim(o.replace(Et, "")) &&
                  n.removeAttribute &&
                  (n.removeAttribute("filter"),
                  "" === t || (i && !i.filter))) ||
                  (n.filter = Et.test(o) ? o.replace(Et, r) : o + " " + r);
            }
          }),
        (ve.cssHooks.marginRight = H(me.reliableMarginRight, function(e, t) {
          if (t)
            return gt(e, { display: "inline-block" }, bt, [e, "marginRight"]);
        })),
        (ve.cssHooks.marginLeft = H(me.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(bt(e, "marginLeft")) ||
                (ve.contains(e.ownerDocument, e)
                  ? e.getBoundingClientRect().left -
                    gt(e, { marginLeft: 0 }, function() {
                      return e.getBoundingClientRect().left;
                    })
                  : 0)) + "px"
            );
        })),
        ve.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
          (ve.cssHooks[e + t] = {
            expand: function(n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + $e[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            }
          }),
            ht.test(e) || (ve.cssHooks[e + t].set = j);
        }),
        ve.fn.extend({
          css: function(e, t) {
            return Be(
              this,
              function(e, t, n) {
                var i,
                  r,
                  o = {},
                  a = 0;
                if (ve.isArray(t)) {
                  for (i = yt(e), r = t.length; a < r; a++)
                    o[t[a]] = ve.css(e, t[a], !1, i);
                  return o;
                }
                return void 0 !== n ? ve.style(e, t, n) : ve.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
          show: function() {
            return R(this, !0);
          },
          hide: function() {
            return R(this);
          },
          toggle: function(e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function() {
                  qe(this) ? ve(this).show() : ve(this).hide();
                });
          }
        }),
        (ve.Tween = $),
        ($.prototype = {
          constructor: $,
          init: function(e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || ve.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (ve.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = $.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = ve.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : $.propHooks._default.set(this),
              this
            );
          }
        }),
        ($.prototype.init.prototype = $.prototype),
        ($.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : ((t = ve.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
            },
            set: function(e) {
              ve.fx.step[e.prop]
                ? ve.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[ve.cssProps[e.prop]] &&
                    !ve.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : ve.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        ($.propHooks.scrollTop = $.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (ve.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (ve.fx = $.prototype.init),
        (ve.fx.step = {});
      var Ot,
        Nt,
        It = /^(?:toggle|show|hide)$/,
        kt = /queueHooks$/;
      (ve.Animation = ve.extend(G, {
        tweeners: {
          "*": [
            function(e, t) {
              var n = this.createTween(e, t);
              return g(n.elem, e, We.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          ve.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Le));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (G.tweeners[n] = G.tweeners[n] || []),
              G.tweeners[n].unshift(t);
        },
        prefilters: [U],
        prefilter: function(e, t) {
          t ? G.prefilters.unshift(e) : G.prefilters.push(e);
        }
      })),
        (ve.speed = function(e, t, n) {
          var i =
            e && "object" == typeof e
              ? ve.extend({}, e)
              : {
                  complete: n || (!n && t) || (ve.isFunction(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !ve.isFunction(t) && t)
                };
          return (
            (i.duration = ve.fx.off
              ? 0
              : "number" == typeof i.duration
              ? i.duration
              : i.duration in ve.fx.speeds
              ? ve.fx.speeds[i.duration]
              : ve.fx.speeds._default),
            (null != i.queue && i.queue !== !0) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function() {
              ve.isFunction(i.old) && i.old.call(this),
                i.queue && ve.dequeue(this, i.queue);
            }),
            i
          );
        }),
        ve.fn.extend({
          fadeTo: function(e, t, n, i) {
            return this.filter(qe)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function(e, t, n, i) {
            var r = ve.isEmptyObject(e),
              o = ve.speed(t, n, i),
              a = function() {
                var t = G(this, ve.extend({}, e), o);
                (r || ve._data(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function(e, t, n) {
            var i = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && e !== !1 && this.queue(e || "fx", []),
              this.each(function() {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = ve.timers,
                  a = ve._data(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else for (r in a) a[r] && a[r].stop && kt.test(r) && i(a[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || ve.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              e !== !1 && (e = e || "fx"),
              this.each(function() {
                var t,
                  n = ve._data(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = ve.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    ve.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        ve.each(["toggle", "show", "hide"], function(e, t) {
          var n = ve.fn[t];
          ve.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(B(t, !0), e, i, r);
          };
        }),
        ve.each(
          {
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(e, t) {
            ve.fn[e] = function(e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (ve.timers = []),
        (ve.fx.tick = function() {
          var e,
            t = ve.timers,
            n = 0;
          for (Ot = ve.now(); n < t.length; n++)
            (e = t[n]), e() || t[n] !== e || t.splice(n--, 1);
          t.length || ve.fx.stop(), (Ot = void 0);
        }),
        (ve.fx.timer = function(e) {
          ve.timers.push(e), e() ? ve.fx.start() : ve.timers.pop();
        }),
        (ve.fx.interval = 13),
        (ve.fx.start = function() {
          Nt || (Nt = n.setInterval(ve.fx.tick, ve.fx.interval));
        }),
        (ve.fx.stop = function() {
          n.clearInterval(Nt), (Nt = null);
        }),
        (ve.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (ve.fn.delay = function(e, t) {
          return (
            (e = ve.fx ? ve.fx.speeds[e] || e : e),
            (t = t || "fx"),
            this.queue(t, function(t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function() {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function() {
          var e,
            t = se.createElement("input"),
            n = se.createElement("div"),
            i = se.createElement("select"),
            r = i.appendChild(se.createElement("option"));
          (n = se.createElement("div")),
            n.setAttribute("className", "t"),
            (n.innerHTML =
              "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (e = n.getElementsByTagName("a")[0]),
            t.setAttribute("type", "checkbox"),
            n.appendChild(t),
            (e = n.getElementsByTagName("a")[0]),
            (e.style.cssText = "top:1px"),
            (me.getSetAttribute = "t" !== n.className),
            (me.style = /top/.test(e.getAttribute("style"))),
            (me.hrefNormalized = "/a" === e.getAttribute("href")),
            (me.checkOn = !!t.value),
            (me.optSelected = r.selected),
            (me.enctype = !!se.createElement("form").enctype),
            (i.disabled = !0),
            (me.optDisabled = !r.disabled),
            (t = se.createElement("input")),
            t.setAttribute("value", ""),
            (me.input = "" === t.getAttribute("value")),
            (t.value = "t"),
            t.setAttribute("type", "radio"),
            (me.radioValue = "t" === t.value);
        })();
      var Lt = /\r/g,
        Pt = /[\x20\t\r\n\f]+/g;
      ve.fn.extend({
        val: function(e) {
          var t,
            n,
            i,
            r = this[0];
          {
            if (arguments.length)
              return (
                (i = ve.isFunction(e)),
                this.each(function(n) {
                  var r;
                  1 === this.nodeType &&
                    ((r = i ? e.call(this, n, ve(this).val()) : e),
                    null == r
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : ve.isArray(r) &&
                        (r = ve.map(r, function(e) {
                          return null == e ? "" : e + "";
                        })),
                    (t =
                      ve.valHooks[this.type] ||
                      ve.valHooks[this.nodeName.toLowerCase()]),
                    (t && "set" in t && void 0 !== t.set(this, r, "value")) ||
                      (this.value = r));
                })
              );
            if (r)
              return (
                (t =
                  ve.valHooks[r.type] || ve.valHooks[r.nodeName.toLowerCase()]),
                t && "get" in t && void 0 !== (n = t.get(r, "value"))
                  ? n
                  : ((n = r.value),
                    "string" == typeof n
                      ? n.replace(Lt, "")
                      : null == n
                      ? ""
                      : n)
              );
          }
        }
      }),
        ve.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = ve.find.attr(e, "value");
                return null != t ? t : ve.trim(ve.text(e)).replace(Pt, " ");
              }
            },
            select: {
              get: function(e) {
                for (
                  var t,
                    n,
                    i = e.options,
                    r = e.selectedIndex,
                    o = "select-one" === e.type || r < 0,
                    a = o ? null : [],
                    s = o ? r + 1 : i.length,
                    l = r < 0 ? s : o ? r : 0;
                  l < s;
                  l++
                )
                  if (
                    ((n = i[l]),
                    (n.selected || l === r) &&
                      (me.optDisabled
                        ? !n.disabled
                        : null === n.getAttribute("disabled")) &&
                      (!n.parentNode.disabled ||
                        !ve.nodeName(n.parentNode, "optgroup")))
                  ) {
                    if (((t = ve(n).val()), o)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function(e, t) {
                for (
                  var n, i, r = e.options, o = ve.makeArray(t), a = r.length;
                  a--;

                )
                  if (
                    ((i = r[a]), ve.inArray(ve.valHooks.option.get(i), o) > -1)
                  )
                    try {
                      i.selected = n = !0;
                    } catch (s) {
                      i.scrollHeight;
                    }
                  else i.selected = !1;
                return n || (e.selectedIndex = -1), r;
              }
            }
          }
        }),
        ve.each(["radio", "checkbox"], function() {
          (ve.valHooks[this] = {
            set: function(e, t) {
              if (ve.isArray(t))
                return (e.checked = ve.inArray(ve(e).val(), t) > -1);
            }
          }),
            me.checkOn ||
              (ve.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        });
      var Ht,
        Mt,
        Rt = ve.expr.attrHandle,
        jt = /^(?:checked|selected)$/i,
        Ft = me.getSetAttribute,
        Wt = me.input;
      ve.fn.extend({
        attr: function(e, t) {
          return Be(this, ve.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            ve.removeAttr(this, e);
          });
        }
      }),
        ve.extend({
          attr: function(e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" == typeof e.getAttribute
                ? ve.prop(e, t, n)
                : ((1 === o && ve.isXMLDoc(e)) ||
                    ((t = t.toLowerCase()),
                    (r =
                      ve.attrHooks[t] ||
                      (ve.expr.match.bool.test(t) ? Mt : Ht))),
                  void 0 !== n
                    ? null === n
                      ? void ve.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : ((i = ve.find.attr(e, t)), null == i ? void 0 : i));
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (
                  !me.radioValue &&
                  "radio" === t &&
                  ve.nodeName(e, "input")
                ) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              i,
              r = 0,
              o = t && t.match(Le);
            if (o && 1 === e.nodeType)
              for (; (n = o[r++]); )
                (i = ve.propFix[n] || n),
                  ve.expr.match.bool.test(n)
                    ? (Wt && Ft) || !jt.test(n)
                      ? (e[i] = !1)
                      : (e[ve.camelCase("default-" + n)] = e[i] = !1)
                    : ve.attr(e, n, ""),
                  e.removeAttribute(Ft ? n : i);
          }
        }),
        (Mt = {
          set: function(e, t, n) {
            return (
              t === !1
                ? ve.removeAttr(e, n)
                : (Wt && Ft) || !jt.test(n)
                ? e.setAttribute((!Ft && ve.propFix[n]) || n, n)
                : (e[ve.camelCase("default-" + n)] = e[n] = !0),
              n
            );
          }
        }),
        ve.each(ve.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = Rt[t] || ve.find.attr;
          (Wt && Ft) || !jt.test(t)
            ? (Rt[t] = function(e, t, i) {
                var r, o;
                return (
                  i ||
                    ((o = Rt[t]),
                    (Rt[t] = r),
                    (r = null != n(e, t, i) ? t.toLowerCase() : null),
                    (Rt[t] = o)),
                  r
                );
              })
            : (Rt[t] = function(e, t, n) {
                if (!n)
                  return e[ve.camelCase("default-" + t)]
                    ? t.toLowerCase()
                    : null;
              });
        }),
        (Wt && Ft) ||
          (ve.attrHooks.value = {
            set: function(e, t, n) {
              return ve.nodeName(e, "input")
                ? void (e.defaultValue = t)
                : Ht && Ht.set(e, t, n);
            }
          }),
        Ft ||
          ((Ht = {
            set: function(e, t, n) {
              var i = e.getAttributeNode(n);
              if (
                (i ||
                  e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
                (i.value = t += ""),
                "value" === n || t === e.getAttribute(n))
              )
                return t;
            }
          }),
          (Rt.id = Rt.name = Rt.coords = function(e, t, n) {
            var i;
            if (!n)
              return (i = e.getAttributeNode(t)) && "" !== i.value
                ? i.value
                : null;
          }),
          (ve.valHooks.button = {
            get: function(e, t) {
              var n = e.getAttributeNode(t);
              if (n && n.specified) return n.value;
            },
            set: Ht.set
          }),
          (ve.attrHooks.contenteditable = {
            set: function(e, t, n) {
              Ht.set(e, "" !== t && t, n);
            }
          }),
          ve.each(["width", "height"], function(e, t) {
            ve.attrHooks[t] = {
              set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n;
              }
            };
          })),
        me.style ||
          (ve.attrHooks.style = {
            get: function(e) {
              return e.style.cssText || void 0;
            },
            set: function(e, t) {
              return (e.style.cssText = t + "");
            }
          });
      var $t = /^(?:input|select|textarea|button|object)$/i,
        qt = /^(?:a|area)$/i;
      ve.fn.extend({
        prop: function(e, t) {
          return Be(this, ve.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return (
            (e = ve.propFix[e] || e),
            this.each(function() {
              try {
                (this[e] = void 0), delete this[e];
              } catch (t) {}
            })
          );
        }
      }),
        ve.extend({
          prop: function(e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && ve.isXMLDoc(e)) ||
                  ((t = ve.propFix[t] || t), (r = ve.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = ve.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : $t.test(e.nodeName) || (qt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        me.hrefNormalized ||
          ve.each(["href", "src"], function(e, t) {
            ve.propHooks[t] = {
              get: function(e) {
                return e.getAttribute(t, 4);
              }
            };
          }),
        me.optSelected ||
          (ve.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return (
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
              );
            },
            set: function(e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        ve.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function() {
            ve.propFix[this.toLowerCase()] = this;
          }
        ),
        me.enctype || (ve.propFix.enctype = "encoding");
      var Bt = /[\t\r\n\f]/g;
      ve.fn.extend({
        addClass: function(e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
          if (ve.isFunction(e))
            return this.each(function(t) {
              ve(this).addClass(e.call(this, t, K(this)));
            });
          if ("string" == typeof e && e)
            for (t = e.match(Le) || []; (n = this[l++]); )
              if (
                ((r = K(n)),
                (i = 1 === n.nodeType && (" " + r + " ").replace(Bt, " ")))
              ) {
                for (a = 0; (o = t[a++]); )
                  i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                (s = ve.trim(i)), r !== s && ve.attr(n, "class", s);
              }
          return this;
        },
        removeClass: function(e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
          if (ve.isFunction(e))
            return this.each(function(t) {
              ve(this).removeClass(e.call(this, t, K(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof e && e)
            for (t = e.match(Le) || []; (n = this[l++]); )
              if (
                ((r = K(n)),
                (i = 1 === n.nodeType && (" " + r + " ").replace(Bt, " ")))
              ) {
                for (a = 0; (o = t[a++]); )
                  for (; i.indexOf(" " + o + " ") > -1; )
                    i = i.replace(" " + o + " ", " ");
                (s = ve.trim(i)), r !== s && ve.attr(n, "class", s);
              }
          return this;
        },
        toggleClass: function(e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ve.isFunction(e)
            ? this.each(function(n) {
                ve(this).toggleClass(e.call(this, n, K(this), t), t);
              })
            : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                  for (
                    i = 0, r = ve(this), o = e.match(Le) || [];
                    (t = o[i++]);

                  )
                    r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                  (void 0 !== e && "boolean" !== n) ||
                    ((t = K(this)),
                    t && ve._data(this, "__className__", t),
                    ve.attr(
                      this,
                      "class",
                      t || e === !1 ? "" : ve._data(this, "__className__") || ""
                    ));
              });
        },
        hasClass: function(e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (
              1 === n.nodeType &&
              (" " + K(n) + " ").replace(Bt, " ").indexOf(t) > -1
            )
              return !0;
          return !1;
        }
      }),
        ve.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
          ),
          function(e, t) {
            ve.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        ve.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        });
      var Vt = n.location,
        Ut = ve.now(),
        zt = /\?/,
        Gt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
      (ve.parseJSON = function(e) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
        var t,
          i = null,
          r = ve.trim(e + "");
        return r &&
          !ve.trim(
            r.replace(Gt, function(e, n, r, o) {
              return (
                t && n && (i = 0),
                0 === i ? e : ((t = r || n), (i += !o - !r), "")
              );
            })
          )
          ? Function("return " + r)()
          : ve.error("Invalid JSON: " + e);
      }),
        (ve.parseXML = function(e) {
          var t, i;
          if (!e || "string" != typeof e) return null;
          try {
            n.DOMParser
              ? ((i = new n.DOMParser()),
                (t = i.parseFromString(e, "text/xml")))
              : ((t = new n.ActiveXObject("Microsoft.XMLDOM")),
                (t.async = "false"),
                t.loadXML(e));
          } catch (r) {
            t = void 0;
          }
          return (
            (t &&
              t.documentElement &&
              !t.getElementsByTagName("parsererror").length) ||
              ve.error("Invalid XML: " + e),
            t
          );
        });
      var Kt = /#.*$/,
        Qt = /([?&])_=[^&]*/,
        Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Jt = /^(?:GET|HEAD)$/,
        Zt = /^\/\//,
        en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        tn = {},
        nn = {},
        rn = "*/".concat("*"),
        on = Vt.href,
        an = en.exec(on.toLowerCase()) || [];
      ve.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: on,
          type: "GET",
          isLocal: Xt.test(an[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": rn,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": ve.parseJSON,
            "text xml": ve.parseXML
          },
          flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function(e, t) {
          return t ? X(X(e, ve.ajaxSettings), t) : X(ve.ajaxSettings, e);
        },
        ajaxPrefilter: Q(tn),
        ajaxTransport: Q(nn),
        ajax: function(e, t) {
          function i(e, t, i, r) {
            var o,
              d,
              y,
              b,
              E,
              w = t;
            2 !== _ &&
              ((_ = 2),
              l && n.clearTimeout(l),
              (c = void 0),
              (s = r || ""),
              (T.readyState = e > 0 ? 4 : 0),
              (o = (e >= 200 && e < 300) || 304 === e),
              i && (b = J(f, T, i)),
              (b = Z(f, b, T, o)),
              o
                ? (f.ifModified &&
                    ((E = T.getResponseHeader("Last-Modified")),
                    E && (ve.lastModified[a] = E),
                    (E = T.getResponseHeader("etag")),
                    E && (ve.etag[a] = E)),
                  204 === e || "HEAD" === f.type
                    ? (w = "nocontent")
                    : 304 === e
                    ? (w = "notmodified")
                    : ((w = b.state), (d = b.data), (y = b.error), (o = !y)))
                : ((y = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || w) + ""),
              o ? m.resolveWith(p, [d, w, T]) : m.rejectWith(p, [T, w, y]),
              T.statusCode(v),
              (v = void 0),
              u &&
                h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]),
              g.fireWith(p, [T, w]),
              u &&
                (h.trigger("ajaxComplete", [T, f]),
                --ve.active || ve.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var r,
            o,
            a,
            s,
            l,
            u,
            c,
            d,
            f = ve.ajaxSetup({}, t),
            p = f.context || f,
            h = f.context && (p.nodeType || p.jquery) ? ve(p) : ve.event,
            m = ve.Deferred(),
            g = ve.Callbacks("once memory"),
            v = f.statusCode || {},
            y = {},
            b = {},
            _ = 0,
            E = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function(e) {
                var t;
                if (2 === _) {
                  if (!d)
                    for (d = {}; (t = Yt.exec(s)); )
                      d[t[1].toLowerCase()] = t[2];
                  t = d[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function() {
                return 2 === _ ? s : null;
              },
              setRequestHeader: function(e, t) {
                var n = e.toLowerCase();
                return _ || ((e = b[n] = b[n] || e), (y[e] = t)), this;
              },
              overrideMimeType: function(e) {
                return _ || (f.mimeType = e), this;
              },
              statusCode: function(e) {
                var t;
                if (e)
                  if (_ < 2) for (t in e) v[t] = [v[t], e[t]];
                  else T.always(e[T.status]);
                return this;
              },
              abort: function(e) {
                var t = e || E;
                return c && c.abort(t), i(0, t), this;
              }
            };
          if (
            ((m.promise(T).complete = g.add),
            (T.success = T.done),
            (T.error = T.fail),
            (f.url = ((e || f.url || on) + "")
              .replace(Kt, "")
              .replace(Zt, an[1] + "//")),
            (f.type = t.method || t.type || f.method || f.type),
            (f.dataTypes = ve
              .trim(f.dataType || "*")
              .toLowerCase()
              .match(Le) || [""]),
            null == f.crossDomain &&
              ((r = en.exec(f.url.toLowerCase())),
              (f.crossDomain = !(
                !r ||
                (r[1] === an[1] &&
                  r[2] === an[2] &&
                  (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                    (an[3] || ("http:" === an[1] ? "80" : "443")))
              ))),
            f.data &&
              f.processData &&
              "string" != typeof f.data &&
              (f.data = ve.param(f.data, f.traditional)),
            Y(tn, f, t, T),
            2 === _)
          )
            return T;
          (u = ve.event && f.global),
            u && 0 === ve.active++ && ve.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Jt.test(f.type)),
            (a = f.url),
            f.hasContent ||
              (f.data &&
                ((a = f.url += (zt.test(a) ? "&" : "?") + f.data),
                delete f.data),
              f.cache === !1 &&
                (f.url = Qt.test(a)
                  ? a.replace(Qt, "$1_=" + Ut++)
                  : a + (zt.test(a) ? "&" : "?") + "_=" + Ut++)),
            f.ifModified &&
              (ve.lastModified[a] &&
                T.setRequestHeader("If-Modified-Since", ve.lastModified[a]),
              ve.etag[a] && T.setRequestHeader("If-None-Match", ve.etag[a])),
            ((f.data && f.hasContent && f.contentType !== !1) ||
              t.contentType) &&
              T.setRequestHeader("Content-Type", f.contentType),
            T.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + rn + "; q=0.01" : "")
                : f.accepts["*"]
            );
          for (o in f.headers) T.setRequestHeader(o, f.headers[o]);
          if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === _))
            return T.abort();
          E = "abort";
          for (o in { success: 1, error: 1, complete: 1 }) T[o](f[o]);
          if ((c = Y(nn, f, t, T))) {
            if (
              ((T.readyState = 1), u && h.trigger("ajaxSend", [T, f]), 2 === _)
            )
              return T;
            f.async &&
              f.timeout > 0 &&
              (l = n.setTimeout(function() {
                T.abort("timeout");
              }, f.timeout));
            try {
              (_ = 1), c.send(y, i);
            } catch (w) {
              if (!(_ < 2)) throw w;
              i(-1, w);
            }
          } else i(-1, "No Transport");
          return T;
        },
        getJSON: function(e, t, n) {
          return ve.get(e, t, n, "json");
        },
        getScript: function(e, t) {
          return ve.get(e, void 0, t, "script");
        }
      }),
        ve.each(["get", "post"], function(e, t) {
          ve[t] = function(e, n, i, r) {
            return (
              ve.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
              ve.ajax(
                ve.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  ve.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (ve._evalUrl = function(e) {
          return ve.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          });
        }),
        ve.fn.extend({
          wrapAll: function(e) {
            if (ve.isFunction(e))
              return this.each(function(t) {
                ve(this).wrapAll(e.call(this, t));
              });
            if (this[0]) {
              var t = ve(e, this[0].ownerDocument)
                .eq(0)
                .clone(!0);
              this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (
                      var e = this;
                      e.firstChild && 1 === e.firstChild.nodeType;

                    )
                      e = e.firstChild;
                    return e;
                  })
                  .append(this);
            }
            return this;
          },
          wrapInner: function(e) {
            return ve.isFunction(e)
              ? this.each(function(t) {
                  ve(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = ve(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = ve.isFunction(e);
            return this.each(function(n) {
              ve(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function() {
            return this.parent()
              .each(function() {
                ve.nodeName(this, "body") ||
                  ve(this).replaceWith(this.childNodes);
              })
              .end();
          }
        }),
        (ve.expr.filters.hidden = function(e) {
          return me.reliableHiddenOffsets()
            ? e.offsetWidth <= 0 &&
                e.offsetHeight <= 0 &&
                !e.getClientRects().length
            : te(e);
        }),
        (ve.expr.filters.visible = function(e) {
          return !ve.expr.filters.hidden(e);
        });
      var sn = /%20/g,
        ln = /\[\]$/,
        un = /\r?\n/g,
        cn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
      (ve.param = function(e, t) {
        var n,
          i = [],
          r = function(e, t) {
            (t = ve.isFunction(t) ? t() : null == t ? "" : t),
              (i[i.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        if (
          (void 0 === t && (t = ve.ajaxSettings && ve.ajaxSettings.traditional),
          ve.isArray(e) || (e.jquery && !ve.isPlainObject(e)))
        )
          ve.each(e, function() {
            r(this.name, this.value);
          });
        else for (n in e) ne(n, e[n], t, r);
        return i.join("&").replace(sn, "+");
      }),
        ve.fn.extend({
          serialize: function() {
            return ve.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = ve.prop(this, "elements");
              return e ? ve.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !ve(this).is(":disabled") &&
                  dn.test(this.nodeName) &&
                  !cn.test(e) &&
                  (this.checked || !Ve.test(e))
                );
              })
              .map(function(e, t) {
                var n = ve(this).val();
                return null == n
                  ? null
                  : ve.isArray(n)
                  ? ve.map(n, function(e) {
                      return { name: t.name, value: e.replace(un, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(un, "\r\n") };
              })
              .get();
          }
        }),
        (ve.ajaxSettings.xhr =
          void 0 !== n.ActiveXObject
            ? function() {
                return this.isLocal
                  ? re()
                  : se.documentMode > 8
                  ? ie()
                  : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                      ie()) ||
                    re();
              }
            : ie);
      var fn = 0,
        pn = {},
        hn = ve.ajaxSettings.xhr();
      n.attachEvent &&
        n.attachEvent("onunload", function() {
          for (var e in pn) pn[e](void 0, !0);
        }),
        (me.cors = !!hn && "withCredentials" in hn),
        (hn = me.ajax = !!hn),
        hn &&
          ve.ajaxTransport(function(e) {
            if (!e.crossDomain || me.cors) {
              var t;
              return {
                send: function(i, r) {
                  var o,
                    a = e.xhr(),
                    s = ++fn;
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                  e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest");
                  for (o in i)
                    void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                  a.send((e.hasContent && e.data) || null),
                    (t = function(n, i) {
                      var o, l, u;
                      if (t && (i || 4 === a.readyState))
                        if (
                          (delete pn[s],
                          (t = void 0),
                          (a.onreadystatechange = ve.noop),
                          i)
                        )
                          4 !== a.readyState && a.abort();
                        else {
                          (u = {}),
                            (o = a.status),
                            "string" == typeof a.responseText &&
                              (u.text = a.responseText);
                          try {
                            l = a.statusText;
                          } catch (c) {
                            l = "";
                          }
                          o || !e.isLocal || e.crossDomain
                            ? 1223 === o && (o = 204)
                            : (o = u.text ? 200 : 404);
                        }
                      u && r(o, l, u, a.getAllResponseHeaders());
                    }),
                    e.async
                      ? 4 === a.readyState
                        ? n.setTimeout(t)
                        : (a.onreadystatechange = pn[s] = t)
                      : t();
                },
                abort: function() {
                  t && t(void 0, !0);
                }
              };
            }
          }),
        ve.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(e) {
              return ve.globalEval(e), e;
            }
          }
        }),
        ve.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        ve.ajaxTransport("script", function(e) {
          if (e.crossDomain) {
            var t,
              n = se.head || ve("head")[0] || se.documentElement;
            return {
              send: function(i, r) {
                (t = se.createElement("script")),
                  (t.async = !0),
                  e.scriptCharset && (t.charset = e.scriptCharset),
                  (t.src = e.url),
                  (t.onload = t.onreadystatechange = function(e, n) {
                    (n ||
                      !t.readyState ||
                      /loaded|complete/.test(t.readyState)) &&
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      (t = null),
                      n || r(200, "success"));
                  }),
                  n.insertBefore(t, n.firstChild);
              },
              abort: function() {
                t && t.onload(void 0, !0);
              }
            };
          }
        });
      var mn = [],
        gn = /(=)\?(?=&|$)|\?\?/;
      ve.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = mn.pop() || ve.expando + "_" + Ut++;
          return (this[e] = !0), e;
        }
      }),
        ve.ajaxPrefilter("json jsonp", function(e, t, i) {
          var r,
            o,
            a,
            s =
              e.jsonp !== !1 &&
              (gn.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  gn.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = ve.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(gn, "$1" + r))
                : e.jsonp !== !1 &&
                  (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function() {
                return a || ve.error(r + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function() {
                a = arguments;
              }),
              i.always(function() {
                void 0 === o ? ve(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), mn.push(r)),
                  a && ve.isFunction(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (ve.parseHTML = function(e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && ((n = t), (t = !1)), (t = t || se);
          var i = Se.exec(e),
            r = !n && [];
          return i
            ? [t.createElement(i[1])]
            : ((i = E([e], t, r)),
              r && r.length && ve(r).remove(),
              ve.merge([], i.childNodes));
        });
      var vn = ve.fn.load;
      (ve.fn.load = function(e, t, n) {
        if ("string" != typeof e && vn) return vn.apply(this, arguments);
        var i,
          r,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          s > -1 && ((i = ve.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
          ve.isFunction(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (r = "POST"),
          a.length > 0 &&
            ve
              .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
              .done(function(e) {
                (o = arguments),
                  a.html(
                    i
                      ? ve("<div>")
                          .append(ve.parseHTML(e))
                          .find(i)
                      : e
                  );
              })
              .always(
                n &&
                  function(e, t) {
                    a.each(function() {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
        ve.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(e, t) {
            ve.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (ve.expr.filters.animated = function(e) {
          return ve.grep(ve.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (ve.offset = {
          setOffset: function(e, t, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              u,
              c = ve.css(e, "position"),
              d = ve(e),
              f = {};
            "static" === c && (e.style.position = "relative"),
              (s = d.offset()),
              (o = ve.css(e, "top")),
              (l = ve.css(e, "left")),
              (u =
                ("absolute" === c || "fixed" === c) &&
                ve.inArray("auto", [o, l]) > -1),
              u
                ? ((i = d.position()), (a = i.top), (r = i.left))
                : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              ve.isFunction(t) && (t = t.call(e, n, ve.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + r),
              "using" in t ? t.using.call(e, f) : d.css(f);
          }
        }),
        ve.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    ve.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = { top: 0, left: 0 },
              r = this[0],
              o = r && r.ownerDocument;
            if (o)
              return (
                (t = o.documentElement),
                ve.contains(t, r)
                  ? ("undefined" != typeof r.getBoundingClientRect &&
                      (i = r.getBoundingClientRect()),
                    (n = oe(o)),
                    {
                      top:
                        i.top +
                        (n.pageYOffset || t.scrollTop) -
                        (t.clientTop || 0),
                      left:
                        i.left +
                        (n.pageXOffset || t.scrollLeft) -
                        (t.clientLeft || 0)
                    })
                  : i
              );
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n = { top: 0, left: 0 },
                i = this[0];
              return (
                "fixed" === ve.css(i, "position")
                  ? (t = i.getBoundingClientRect())
                  : ((e = this.offsetParent()),
                    (t = this.offset()),
                    ve.nodeName(e[0], "html") || (n = e.offset()),
                    (n.top += ve.css(e[0], "borderTopWidth", !0)),
                    (n.left += ve.css(e[0], "borderLeftWidth", !0))),
                {
                  top: t.top - n.top - ve.css(i, "marginTop", !0),
                  left: t.left - n.left - ve.css(i, "marginLeft", !0)
                }
              );
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e &&
                !ve.nodeName(e, "html") &&
                "static" === ve.css(e, "position");

              )
                e = e.offsetParent;
              return e || vt;
            });
          }
        }),
        ve.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(e, t) {
            var n = /Y/.test(t);
            ve.fn[e] = function(i) {
              return Be(
                this,
                function(e, i, r) {
                  var o = oe(e);
                  return void 0 === r
                    ? o
                      ? t in o
                        ? o[t]
                        : o.document.documentElement[i]
                      : e[i]
                    : void (o
                        ? o.scrollTo(
                            n ? ve(o).scrollLeft() : r,
                            n ? r : ve(o).scrollTop()
                          )
                        : (e[i] = r));
                },
                e,
                i,
                arguments.length,
                null
              );
            };
          }
        ),
        ve.each(["top", "left"], function(e, t) {
          ve.cssHooks[t] = H(me.pixelPosition, function(e, n) {
            if (n)
              return (
                (n = bt(e, t)), mt.test(n) ? ve(e).position()[t] + "px" : n
              );
          });
        }),
        ve.each({ Height: "height", Width: "width" }, function(e, t) {
          ve.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function(n, i) {
              ve.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                  a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Be(
                  this,
                  function(t, n, i) {
                    var r;
                    return ve.isWindow(t)
                      ? t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === i
                      ? ve.css(t, n, a)
                      : ve.style(t, n, i, a);
                  },
                  t,
                  o ? i : void 0,
                  o,
                  null
                );
              };
            }
          );
        }),
        ve.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          }
        }),
        (ve.fn.size = function() {
          return this.length;
        }),
        (ve.fn.andSelf = ve.fn.addBack),
        (i = []),
        (r = function() {
          return ve;
        }.apply(t, i)),
        !(void 0 !== r && (e.exports = r));
      var yn = n.jQuery,
        bn = n.$;
      return (
        (ve.noConflict = function(e) {
          return (
            n.$ === ve && (n.$ = bn),
            e && n.jQuery === ve && (n.jQuery = yn),
            ve
          );
        }),
        o || (n.jQuery = n.$ = ve),
        ve
      );
    });
  },
  function(e, t) {
    !(function(e, t, n) {
      function i(e) {
        var t = C.className,
          n = T._config.classPrefix || "";
        if ((x && (t = t.baseVal), T._config.enableJSClass)) {
          var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
          t = t.replace(i, "$1" + n + "js$2");
        }
        T._config.enableClasses &&
          ((t += " " + n + e.join(" " + n)),
          x ? (C.className.baseVal = t) : (C.className = t));
      }
      function r(e, t) {
        return typeof e === t;
      }
      function o() {
        var e, t, n, i, o, a, s;
        for (var l in _)
          if (_.hasOwnProperty(l)) {
            if (
              ((e = []),
              (t = _[l]),
              t.name &&
                (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
            )
              for (n = 0; n < t.options.aliases.length; n++)
                e.push(t.options.aliases[n].toLowerCase());
            for (
              i = r(t.fn, "function") ? t.fn() : t.fn, o = 0;
              o < e.length;
              o++
            )
              (a = e[o]),
                (s = a.split(".")),
                1 === s.length
                  ? (T[s[0]] = i)
                  : (!T[s[0]] ||
                      T[s[0]] instanceof Boolean ||
                      (T[s[0]] = new Boolean(T[s[0]])),
                    (T[s[0]][s[1]] = i)),
                b.push((i ? "" : "no-") + s.join("-"));
          }
      }
      function a() {
        return "function" != typeof t.createElement
          ? t.createElement(arguments[0])
          : x
          ? t.createElementNS.call(
              t,
              "http://www.w3.org/2000/svg",
              arguments[0]
            )
          : t.createElement.apply(t, arguments);
      }
      function s(e) {
        return e
          .replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase();
          })
          .replace(/^-/, "");
      }
      function l(e, t) {
        return !!~("" + e).indexOf(t);
      }
      function u() {
        var e = t.body;
        return e || ((e = a(x ? "svg" : "body")), (e.fake = !0)), e;
      }
      function c(e, n, i, r) {
        var o,
          s,
          l,
          c,
          d = "modernizr",
          f = a("div"),
          p = u();
        if (parseInt(i, 10))
          for (; i--; )
            (l = a("div")), (l.id = r ? r[i] : d + (i + 1)), f.appendChild(l);
        return (
          (o = a("style")),
          (o.type = "text/css"),
          (o.id = "s" + d),
          (p.fake ? p : f).appendChild(o),
          p.appendChild(f),
          o.styleSheet
            ? (o.styleSheet.cssText = e)
            : o.appendChild(t.createTextNode(e)),
          (f.id = d),
          p.fake &&
            ((p.style.background = ""),
            (p.style.overflow = "hidden"),
            (c = C.style.overflow),
            (C.style.overflow = "hidden"),
            C.appendChild(p)),
          (s = n(f, e)),
          p.fake
            ? (p.parentNode.removeChild(p),
              (C.style.overflow = c),
              C.offsetHeight)
            : f.parentNode.removeChild(f),
          !!s
        );
      }
      function d(e, t) {
        return function() {
          return e.apply(t, arguments);
        };
      }
      function f(e, t, n) {
        var i;
        for (var o in e)
          if (e[o] in t)
            return n === !1
              ? e[o]
              : ((i = t[e[o]]), r(i, "function") ? d(i, n || t) : i);
        return !1;
      }
      function p(t, n, i) {
        var r;
        if ("getComputedStyle" in e) {
          r = getComputedStyle.call(e, t, n);
          var o = e.console;
          if (null !== r) i && (r = r.getPropertyValue(i));
          else if (o) {
            var a = o.error ? "error" : "log";
            o[a].call(
              o,
              "getComputedStyle returning null, its possible modernizr test results are inaccurate"
            );
          }
        } else r = !n && t.currentStyle && t.currentStyle[i];
        return r;
      }
      function h(e) {
        return e
          .replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase();
          })
          .replace(/^ms-/, "-ms-");
      }
      function m(t, i) {
        var r = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
          for (; r--; ) if (e.CSS.supports(h(t[r]), i)) return !0;
          return !1;
        }
        if ("CSSSupportsRule" in e) {
          for (var o = []; r--; ) o.push("(" + h(t[r]) + ":" + i + ")");
          return (
            (o = o.join(" or ")),
            c(
              "@supports (" + o + ") { #modernizr { position: absolute; } }",
              function(e) {
                return "absolute" == p(e, null, "position");
              }
            )
          );
        }
        return n;
      }
      function g(e, t, i, o) {
        function u() {
          d && (delete $.style, delete $.modElem);
        }
        if (((o = !r(o, "undefined") && o), !r(i, "undefined"))) {
          var c = m(e, i);
          if (!r(c, "undefined")) return c;
        }
        for (
          var d, f, p, h, g, v = ["modernizr", "tspan", "samp"];
          !$.style && v.length;

        )
          (d = !0), ($.modElem = a(v.shift())), ($.style = $.modElem.style);
        for (p = e.length, f = 0; p > f; f++)
          if (
            ((h = e[f]),
            (g = $.style[h]),
            l(h, "-") && (h = s(h)),
            $.style[h] !== n)
          ) {
            if (o || r(i, "undefined")) return u(), "pfx" != t || h;
            try {
              $.style[h] = i;
            } catch (y) {}
            if ($.style[h] != g) return u(), "pfx" != t || h;
          }
        return u(), !1;
      }
      function v(e, t, n, i, o) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
          s = (e + " " + M.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined")
          ? g(s, t, i, o)
          : ((s = (e + " " + A.join(a + " ") + a).split(" ")), f(s, t, n));
      }
      function y(e, t, i) {
        return v(e, n, n, t, i);
      }
      var b = [],
        _ = [],
        E = {
          _version: "3.5.0",
          _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
          },
          _q: [],
          on: function(e, t) {
            var n = this;
            setTimeout(function() {
              t(n[e]);
            }, 0);
          },
          addTest: function(e, t, n) {
            _.push({ name: e, fn: t, options: n });
          },
          addAsyncTest: function(e) {
            _.push({ name: null, fn: e });
          }
        },
        T = function() {};
      (T.prototype = E),
        (T = new T()),
        T.addTest("applicationcache", "applicationCache" in e),
        T.addTest(
          "cors",
          "XMLHttpRequest" in e && "withCredentials" in new XMLHttpRequest()
        ),
        T.addTest(
          "ie8compat",
          !e.addEventListener && !!t.documentMode && 7 === t.documentMode
        ),
        T.addTest("history", function() {
          var t = navigator.userAgent;
          return (
            ((-1 === t.indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone") ||
              "file:" === location.protocol) &&
            e.history && "pushState" in e.history
          );
        }),
        T.addTest(
          "json",
          "JSON" in e && "parse" in JSON && "stringify" in JSON
        ),
        T.addTest("postmessage", "postMessage" in e),
        T.addTest(
          "strictmode",
          (function() {
            "use strict";
            return !this;
          })()
        ),
        T.addTest("devicemotion", "DeviceMotionEvent" in e),
        T.addTest("deviceorientation", "DeviceOrientationEvent" in e),
        T.addTest("filereader", !!(e.File && e.FileList && e.FileReader)),
        T.addTest("localstorage", function() {
          var e = "modernizr";
          try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
          } catch (t) {
            return !1;
          }
        }),
        T.addTest("sessionstorage", function() {
          var e = "modernizr";
          try {
            return (
              sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
            );
          } catch (t) {
            return !1;
          }
        });
      var w = E._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
      E._prefixes = w;
      var C = t.documentElement,
        x = "svg" === C.nodeName.toLowerCase(),
        S = "Moz O ms Webkit",
        A = E._config.usePrefixes ? S.toLowerCase().split(" ") : [];
      E._domPrefixes = A;
      var D = (function() {
        function e(e, t) {
          var r;
          return (
            !!e &&
            ((t && "string" != typeof t) || (t = a(t || "div")),
            (e = "on" + e),
            (r = e in t),
            !r &&
              i &&
              (t.setAttribute || (t = a("div")),
              t.setAttribute(e, ""),
              (r = "function" == typeof t[e]),
              t[e] !== n && (t[e] = n),
              t.removeAttribute(e)),
            r)
          );
        }
        var i = !("onblur" in t.documentElement);
        return e;
      })();
      (E.hasEvent = D),
        T.addTest("hashchange", function() {
          return (
            D("hashchange", e) !== !1 &&
            (t.documentMode === n || t.documentMode > 7)
          );
        }),
        T.addTest("cssgradients", function() {
          for (
            var e,
              t = "background-image:",
              n =
                "gradient(linear,left top,right bottom,from(#9f9),to(white));",
              i = "",
              r = 0,
              o = w.length - 1;
            o > r;
            r++
          )
            (e = 0 === r ? "to " : ""),
              (i +=
                t + w[r] + "linear-gradient(" + e + "left top, #9f9, white);");
          T._config.usePrefixes && (i += t + "-webkit-" + n);
          var s = a("a"),
            l = s.style;
          return (
            (l.cssText = i), ("" + l.backgroundImage).indexOf("gradient") > -1
          );
        }),
        T.addTest("multiplebgs", function() {
          var e = a("a").style;
          return (
            (e.cssText =
              "background:url(https://),url(https://),red url(https://)"),
            /(url\s*\(.*?){3}/.test(e.background)
          );
        }),
        T.addTest("opacity", function() {
          var e = a("a").style;
          return (e.cssText = w.join("opacity:.55;")), /^0.55$/.test(e.opacity);
        }),
        T.addTest("cssremunit", function() {
          var e = a("a").style;
          try {
            e.fontSize = "3rem";
          } catch (t) {}
          return /rem/.test(e.fontSize);
        }),
        T.addTest("rgba", function() {
          var e = a("a").style;
          return (
            (e.cssText = "background-color:rgba(150,255,150,.5)"),
            ("" + e.backgroundColor).indexOf("rgba") > -1
          );
        }),
        T.addTest("fileinput", function() {
          if (
            navigator.userAgent.match(
              /(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/
            )
          )
            return !1;
          var e = a("input");
          return (e.type = "file"), !e.disabled;
        }),
        T.addTest("formattribute", function() {
          var e,
            n = a("form"),
            i = a("input"),
            r = a("div"),
            o = "formtest" + new Date().getTime(),
            s = !1;
          n.id = o;
          try {
            i.setAttribute("form", o);
          } catch (l) {
            t.createAttribute &&
              ((e = t.createAttribute("form")),
              (e.nodeValue = o),
              i.setAttributeNode(e));
          }
          return (
            r.appendChild(n),
            r.appendChild(i),
            C.appendChild(r),
            (s = n.elements && 1 === n.elements.length && i.form == n),
            r.parentNode.removeChild(r),
            s
          );
        }),
        T.addTest(
          "placeholder",
          "placeholder" in a("input") && "placeholder" in a("textarea")
        );
      var O = a("input"),
        N = "autocomplete autofocus list placeholder max min multiple pattern required step".split(
          " "
        ),
        I = {};
      T.input = (function(t) {
        for (var n = 0, i = t.length; i > n; n++) I[t[n]] = !!(t[n] in O);
        return (
          I.list && (I.list = !(!a("datalist") || !e.HTMLDataListElement)), I
        );
      })(N);
      var k = "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        ),
        L = {};
      (T.inputtypes = (function(e) {
        for (var i, r, o, a = e.length, s = "1)", l = 0; a > l; l++)
          O.setAttribute("type", (i = e[l])),
            (o = "text" !== O.type && "style" in O),
            o &&
              ((O.value = s),
              (O.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(i) && O.style.WebkitAppearance !== n
                ? (C.appendChild(O),
                  (r = t.defaultView),
                  (o =
                    r.getComputedStyle &&
                    "textfield" !==
                      r.getComputedStyle(O, null).WebkitAppearance &&
                    0 !== O.offsetHeight),
                  C.removeChild(O))
                : /^(search|tel)$/.test(i) ||
                  (o = /^(url|email)$/.test(i)
                    ? O.checkValidity && O.checkValidity() === !1
                    : O.value != s)),
            (L[e[l]] = !!o);
        return L;
      })(k)),
        T.addTest("hsla", function() {
          var e = a("a").style;
          return (
            (e.cssText = "background-color:hsla(120,40%,100%,.5)"),
            l(e.backgroundColor, "rgba") || l(e.backgroundColor, "hsla")
          );
        });
      var P = "CSS" in e && "supports" in e.CSS,
        H = "supportsCSS" in e;
      T.addTest("supports", P || H);
      var M = E._config.usePrefixes ? S.split(" ") : [];
      E._cssomPrefixes = M;
      var R = function(t) {
        var i,
          r = w.length,
          o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (
          ((t = t.replace(/^@/, "")),
          (i = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
          i in o)
        )
          return "@" + t;
        for (var a = 0; r > a; a++) {
          var s = w[a],
            l = s.toUpperCase() + "_" + i;
          if (l in o) return "@-" + s.toLowerCase() + "-" + t;
        }
        return !1;
      };
      E.atRule = R;
      var j = (E.testStyles = c),
        F = (function() {
          var e = navigator.userAgent,
            t = e.match(/w(eb)?osbrowser/gi),
            n =
              e.match(/windows phone/gi) &&
              e.match(/iemobile\/([0-9])+/gi) &&
              parseFloat(RegExp.$1) >= 9;
          return t || n;
        })();
      F
        ? T.addTest("fontface", !1)
        : j('@font-face {font-family:"font";src:url("https://")}', function(
            e,
            n
          ) {
            var i = t.getElementById("smodernizr"),
              r = i.sheet || i.styleSheet,
              o = r
                ? r.cssRules && r.cssRules[0]
                  ? r.cssRules[0].cssText
                  : r.cssText || ""
                : "",
              a = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
            T.addTest("fontface", a);
          }),
        j(
          '#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',
          function(e) {
            T.addTest("generatedcontent", e.offsetHeight >= 6);
          }
        ),
        j(
          "#modernizr{overflow: scroll; width: 40px; height: 40px; }#" +
            w
              .join("scrollbar{width:10px} #modernizr::")
              .split("#")
              .slice(1)
              .join("#") +
            "scrollbar{width:10px}",
          function(e) {
            T.addTest(
              "cssscrollbar",
              "scrollWidth" in e && 30 == e.scrollWidth
            );
          }
        ),
        T.addTest("formvalidation", function() {
          var t = a("form");
          if (!("checkValidity" in t && "addEventListener" in t)) return !1;
          if ("reportValidity" in t) return !0;
          var n,
            i = !1;
          return (
            (T.formvalidationapi = !0),
            t.addEventListener(
              "submit",
              function(t) {
                (!e.opera || e.operamini) && t.preventDefault(),
                  t.stopPropagation();
              },
              !1
            ),
            (t.innerHTML =
              '<input name="modTest" required="required" /><button></button>'),
            j("#modernizr form{position:absolute;top:-99999em}", function(e) {
              e.appendChild(t),
                (n = t.getElementsByTagName("input")[0]),
                n.addEventListener(
                  "invalid",
                  function(e) {
                    (i = !0), e.preventDefault(), e.stopPropagation();
                  },
                  !1
                ),
                (T.formvalidationmessage = !!n.validationMessage),
                t.getElementsByTagName("button")[0].click();
            }),
            i
          );
        });
      var W = { elem: a("modernizr") };
      T._q.push(function() {
        delete W.elem;
      });
      var $ = { style: W.elem.style };
      T._q.unshift(function() {
        delete $.style;
      });
      var q = (E.testProp = function(e, t, i) {
        return g([e], n, t, i);
      });
      T.addTest("textshadow", q("textShadow", "1px 1px")), (E.testAllProps = v);
      var B = (E.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@")
          ? R(e)
          : (-1 != e.indexOf("-") && (e = s(e)), t ? v(e, t, n) : v(e, "pfx"));
      });
      T.addTest(
        "fullscreen",
        !(!B("exitFullscreen", t, !1) && !B("cancelFullScreen", t, !1))
      ),
        T.addTest("filesystem", !!B("requestFileSystem", e)),
        (E.testAllProps = y),
        T.addTest("cssanimations", y("animationName", "a", !0)),
        T.addTest("backgroundsize", y("backgroundSize", "100%", !0)),
        T.addTest("borderradius", y("borderRadius", "0px", !0)),
        T.addTest("borderimage", y("borderImage", "url() 1", !0)),
        T.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
        (function() {
          T.addTest("csscolumns", function() {
            var e = !1,
              t = y("columnCount");
            try {
              (e = !!t), e && (e = new Boolean(e));
            } catch (n) {}
            return e;
          });
          for (
            var e,
              t,
              n = [
                "Width",
                "Span",
                "Fill",
                "Gap",
                "Rule",
                "RuleColor",
                "RuleStyle",
                "RuleWidth",
                "BreakBefore",
                "BreakAfter",
                "BreakInside"
              ],
              i = 0;
            i < n.length;
            i++
          )
            (e = n[i].toLowerCase()),
              (t = y("column" + n[i])),
              ("breakbefore" === e ||
                "breakafter" === e ||
                "breakinside" == e) &&
                (t = t || y(n[i])),
              T.addTest("csscolumns." + e, t);
        })(),
        T.addTest("flexbox", y("flexBasis", "1px", !0)),
        T.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)),
        T.addTest("overflowscrolling", y("overflowScrolling", "touch", !0)),
        T.addTest("cssreflections", y("boxReflect", "above", !0)),
        T.addTest("csstransforms", function() {
          return (
            -1 === navigator.userAgent.indexOf("Android 2.") &&
            y("transform", "scale(1)", !0)
          );
        }),
        T.addTest("csstransforms3d", function() {
          var e = !!y("perspective", "1px", !0),
            t = T._config.usePrefixes;
          if (e && (!t || "webkitPerspective" in C.style)) {
            var n,
              i = "#modernizr{width:0;height:0}";
            T.supports
              ? (n = "@supports (perspective: 1px)")
              : ((n = "@media (transform-3d)"),
                t && (n += ",(-webkit-transform-3d)")),
              (n +=
                "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
              j(i + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight;
              });
          }
          return e;
        }),
        T.addTest("csstransitions", y("transition", "all", !0)),
        o(),
        i(b),
        delete E.addTest,
        delete E.addAsyncTest;
      for (var V = 0; V < T._q.length; V++) T._q[V]();
      e.Modernizr = T;
    })(window, document);
  },
  function(e, t, n) {
    var i, r;
    !(function(o) {
      (i = [n(3)]),
        (r = function(e) {
          return o(e);
        }.apply(t, i)),
        !(void 0 !== r && (e.exports = r));
    })(function(e) {
      function t(e) {
        var t = 7.5625,
          n = 2.75;
        return e < 1 / n
          ? t * e * e
          : e < 2 / n
          ? t * (e -= 1.5 / n) * e + 0.75
          : e < 2.5 / n
          ? t * (e -= 2.25 / n) * e + 0.9375
          : t * (e -= 2.625 / n) * e + 0.984375;
      }
      e.easing.jswing = e.easing.swing;
      var n = Math.pow,
        i = Math.sqrt,
        r = Math.sin,
        o = Math.cos,
        a = Math.PI,
        s = 1.70158,
        l = 1.525 * s,
        u = s + 1,
        c = (2 * a) / 3,
        d = (2 * a) / 4.5;
      e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t) {
          return e.easing[e.easing.def](t);
        },
        easeInQuad: function(e) {
          return e * e;
        },
        easeOutQuad: function(e) {
          return 1 - (1 - e) * (1 - e);
        },
        easeInOutQuad: function(e) {
          return e < 0.5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2;
        },
        easeInCubic: function(e) {
          return e * e * e;
        },
        easeOutCubic: function(e) {
          return 1 - n(1 - e, 3);
        },
        easeInOutCubic: function(e) {
          return e < 0.5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2;
        },
        easeInQuart: function(e) {
          return e * e * e * e;
        },
        easeOutQuart: function(e) {
          return 1 - n(1 - e, 4);
        },
        easeInOutQuart: function(e) {
          return e < 0.5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2;
        },
        easeInQuint: function(e) {
          return e * e * e * e * e;
        },
        easeOutQuint: function(e) {
          return 1 - n(1 - e, 5);
        },
        easeInOutQuint: function(e) {
          return e < 0.5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2;
        },
        easeInSine: function(e) {
          return 1 - o((e * a) / 2);
        },
        easeOutSine: function(e) {
          return r((e * a) / 2);
        },
        easeInOutSine: function(e) {
          return -(o(a * e) - 1) / 2;
        },
        easeInExpo: function(e) {
          return 0 === e ? 0 : n(2, 10 * e - 10);
        },
        easeOutExpo: function(e) {
          return 1 === e ? 1 : 1 - n(2, -10 * e);
        },
        easeInOutExpo: function(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : e < 0.5
            ? n(2, 20 * e - 10) / 2
            : (2 - n(2, -20 * e + 10)) / 2;
        },
        easeInCirc: function(e) {
          return 1 - i(1 - n(e, 2));
        },
        easeOutCirc: function(e) {
          return i(1 - n(e - 1, 2));
        },
        easeInOutCirc: function(e) {
          return e < 0.5
            ? (1 - i(1 - n(2 * e, 2))) / 2
            : (i(1 - n(-2 * e + 2, 2)) + 1) / 2;
        },
        easeInElastic: function(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : -n(2, 10 * e - 10) * r((10 * e - 10.75) * c);
        },
        easeOutElastic: function(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : n(2, -10 * e) * r((10 * e - 0.75) * c) + 1;
        },
        easeInOutElastic: function(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : e < 0.5
            ? -(n(2, 20 * e - 10) * r((20 * e - 11.125) * d)) / 2
            : (n(2, -20 * e + 10) * r((20 * e - 11.125) * d)) / 2 + 1;
        },
        easeInBack: function(e) {
          return u * e * e * e - s * e * e;
        },
        easeOutBack: function(e) {
          return 1 + u * n(e - 1, 3) + s * n(e - 1, 2);
        },
        easeInOutBack: function(e) {
          return e < 0.5
            ? (n(2 * e, 2) * (2 * (l + 1) * e - l)) / 2
            : (n(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2;
        },
        easeInBounce: function(e) {
          return 1 - t(1 - e);
        },
        easeOutBounce: t,
        easeInOutBounce: function(e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
        }
      });
    });
  },
  function(e, t, n) {
    (function(t) {
      !(function(t, n) {
        e.exports = n();
      })(this, function() {
        "use strict";
        function e(e) {
          var t = !1;
          return function() {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function() {
                (t = !1), e();
              }));
          };
        }
        function n(e) {
          var t = !1;
          return function() {
            t ||
              ((t = !0),
              setTimeout(function() {
                (t = !1), e();
              }, ce));
          };
        }
        function i(e) {
          var t = {};
          return e && "[object Function]" === t.toString.call(e);
        }
        function r(e, t) {
          if (1 !== e.nodeType) return [];
          var n = getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function o(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function a(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = r(e),
            n = t.overflow,
            i = t.overflowX,
            s = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + s + i) ? e : a(o(e));
        }
        function s(e) {
          return 11 === e ? he : 10 === e ? me : he || me;
        }
        function l(e) {
          if (!e) return document.documentElement;
          for (
            var t = s(10) ? document.body : null, n = e.offsetParent;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i
            ? ["TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
              "static" === r(n, "position")
              ? l(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function u(e) {
          var t = e.nodeName;
          return "BODY" !== t && ("HTML" === t || l(e.firstElementChild) === e);
        }
        function c(e) {
          return null !== e.parentNode ? c(e.parentNode) : e;
        }
        function d(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var a = o.commonAncestorContainer;
          if ((e !== a && t !== a) || i.contains(r)) return u(a) ? a : l(a);
          var s = c(e);
          return s.host ? d(s.host, t) : d(e, c(t).host);
        }
        function f(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var r = e.ownerDocument.documentElement,
              o = e.ownerDocument.scrollingElement || r;
            return o[n];
          }
          return e[n];
        }
        function p(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = f(t, "top"),
            r = f(t, "left"),
            o = n ? -1 : 1;
          return (
            (e.top += i * o),
            (e.bottom += i * o),
            (e.left += r * o),
            (e.right += r * o),
            e
          );
        }
        function h(e, t) {
          var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"], 10) +
            parseFloat(e["border" + i + "Width"], 10)
          );
        }
        function m(e, t, n, i) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            s(10)
              ? parseInt(n["offset" + e]) +
                  parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
              : 0
          );
        }
        function g(e) {
          var t = e.body,
            n = e.documentElement,
            i = s(10) && getComputedStyle(n);
          return { height: m("Height", t, n, i), width: m("Width", t, n, i) };
        }
        function v(e) {
          return be({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
          });
        }
        function y(e) {
          var t = {};
          try {
            if (s(10)) {
              t = e.getBoundingClientRect();
              var n = f(e, "top"),
                i = f(e, "left");
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (o) {}
          var a = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top
            },
            l = "HTML" === e.nodeName ? g(e.ownerDocument) : {},
            u = l.width || e.clientWidth || a.right - a.left,
            c = l.height || e.clientHeight || a.bottom - a.top,
            d = e.offsetWidth - u,
            p = e.offsetHeight - c;
          if (d || p) {
            var m = r(e);
            (d -= h(m, "x")), (p -= h(m, "y")), (a.width -= d), (a.height -= p);
          }
          return v(a);
        }
        function b(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = s(10),
            o = "HTML" === t.nodeName,
            l = y(e),
            u = y(t),
            c = a(e),
            d = r(t),
            f = parseFloat(d.borderTopWidth, 10),
            h = parseFloat(d.borderLeftWidth, 10);
          n &&
            o &&
            ((u.top = Math.max(u.top, 0)), (u.left = Math.max(u.left, 0)));
          var m = v({
            top: l.top - u.top - f,
            left: l.left - u.left - h,
            width: l.width,
            height: l.height
          });
          if (((m.marginTop = 0), (m.marginLeft = 0), !i && o)) {
            var g = parseFloat(d.marginTop, 10),
              b = parseFloat(d.marginLeft, 10);
            (m.top -= f - g),
              (m.bottom -= f - g),
              (m.left -= h - b),
              (m.right -= h - b),
              (m.marginTop = g),
              (m.marginLeft = b);
          }
          return (
            (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) &&
              (m = p(m, t)),
            m
          );
        }
        function _(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = b(e, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : f(n),
            s = t ? 0 : f(n, "left"),
            l = {
              top: a - i.top + i.marginTop,
              left: s - i.left + i.marginLeft,
              width: r,
              height: o
            };
          return v(l);
        }
        function E(e) {
          var t = e.nodeName;
          return (
            "BODY" !== t &&
            "HTML" !== t &&
            ("fixed" === r(e, "position") || E(o(e)))
          );
        }
        function T(e) {
          if (!e || !e.parentElement || s()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === r(t, "transform"); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function w(e, t, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            l = r ? T(e) : d(e, t);
          if ("viewport" === i) s = _(l, r);
          else {
            var u = void 0;
            "scrollParent" === i
              ? ((u = a(o(t))),
                "BODY" === u.nodeName && (u = e.ownerDocument.documentElement))
              : (u = "window" === i ? e.ownerDocument.documentElement : i);
            var c = b(u, l, r);
            if ("HTML" !== u.nodeName || E(l)) s = c;
            else {
              var f = g(e.ownerDocument),
                p = f.height,
                h = f.width;
              (s.top += c.top - c.marginTop),
                (s.bottom = p + c.top),
                (s.left += c.left - c.marginLeft),
                (s.right = h + c.left);
            }
          }
          n = n || 0;
          var m = "number" == typeof n;
          return (
            (s.left += m ? n : n.left || 0),
            (s.top += m ? n : n.top || 0),
            (s.right -= m ? n : n.right || 0),
            (s.bottom -= m ? n : n.bottom || 0),
            s
          );
        }
        function C(e) {
          var t = e.width,
            n = e.height;
          return t * n;
        }
        function x(e, t, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (e.indexOf("auto") === -1) return e;
          var a = w(n, i, o, r),
            s = {
              top: { width: a.width, height: t.top - a.top },
              right: { width: a.right - t.right, height: a.height },
              bottom: { width: a.width, height: a.bottom - t.bottom },
              left: { width: t.left - a.left, height: a.height }
            },
            l = Object.keys(s)
              .map(function(e) {
                return be({ key: e }, s[e], { area: C(s[e]) });
              })
              .sort(function(e, t) {
                return t.area - e.area;
              }),
            u = l.filter(function(e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            c = u.length > 0 ? u[0].key : l[0].key,
            d = e.split("-")[1];
          return c + (d ? "-" + d : "");
        }
        function S(e, t, n) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            r = i ? T(t) : d(t, n);
          return b(n, r, i);
        }
        function A(e) {
          var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
          return r;
        }
        function D(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
          };
          return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
          });
        }
        function O(e, t, n) {
          n = n.split("-")[0];
          var i = A(e),
            r = { width: i.width, height: i.height },
            o = ["right", "left"].indexOf(n) !== -1,
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
          return (
            (r[a] = t[a] + t[l] / 2 - i[l] / 2),
            n === s ? (r[s] = t[s] - i[u]) : (r[s] = t[D(s)]),
            r
          );
        }
        function N(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function I(e, t, n) {
          if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
              return e[t] === n;
            });
          var i = N(e, function(e) {
            return e[t] === n;
          });
          return e.indexOf(i);
        }
        function k(e, t, n) {
          var r = void 0 === n ? e : e.slice(0, I(e, "name", n));
          return (
            r.forEach(function(e) {
              e["function"] &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e["function"] || e.fn;
              e.enabled &&
                i(n) &&
                ((t.offsets.popper = v(t.offsets.popper)),
                (t.offsets.reference = v(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function L() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            (e.offsets.reference = S(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )),
              (e.placement = x(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = O(
                this.popper,
                e.offsets.reference,
                e.placement
              )),
              (e.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (e = k(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function P(e, t) {
          return e.some(function(e) {
            var n = e.name,
              i = e.enabled;
            return i && n === t;
          });
        }
        function H(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              i = 0;
            i < t.length;
            i++
          ) {
            var r = t[i],
              o = r ? "" + r + n : e;
            if ("undefined" != typeof document.body.style[o]) return o;
          }
          return null;
        }
        function M() {
          return (
            (this.state.isDestroyed = !0),
            P(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[H("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function R(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function j(e, t, n, i) {
          var r = "BODY" === e.nodeName,
            o = r ? e.ownerDocument.defaultView : e;
          o.addEventListener(t, n, { passive: !0 }),
            r || j(a(o.parentNode), t, n, i),
            i.push(o);
        }
        function F(e, t, n, i) {
          (n.updateBound = i),
            R(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var r = a(e);
          return (
            j(r, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function W() {
          this.state.eventsEnabled ||
            (this.state = F(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function $(e, t) {
          return (
            R(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
          );
        }
        function q() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = $(this.reference, this.state)));
        }
        function B(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function V(e, t) {
          Object.keys(t).forEach(function(n) {
            var i = "";
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !==
              -1 &&
              B(t[n]) &&
              (i = "px"),
              (e.style[n] = t[n] + i);
          });
        }
        function U(e, t) {
          Object.keys(t).forEach(function(n) {
            var i = t[n];
            i !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
          });
        }
        function z(e) {
          return (
            V(e.instance.popper, e.styles),
            U(e.instance.popper, e.attributes),
            e.arrowElement &&
              Object.keys(e.arrowStyles).length &&
              V(e.arrowElement, e.arrowStyles),
            e
          );
        }
        function G(e, t, n, i, r) {
          var o = S(r, t, e, n.positionFixed),
            a = x(
              n.placement,
              o,
              t,
              e,
              n.modifiers.flip.boundariesElement,
              n.modifiers.flip.padding
            );
          return (
            t.setAttribute("x-placement", a),
            V(t, { position: n.positionFixed ? "fixed" : "absolute" }),
            n
          );
        }
        function K(e, t) {
          var n = t.x,
            i = t.y,
            r = e.offsets.popper,
            o = N(e.instance.modifiers, function(e) {
              return "applyStyle" === e.name;
            }).gpuAcceleration;
          void 0 !== o &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
            );
          var a = void 0 !== o ? o : t.gpuAcceleration,
            s = l(e.instance.popper),
            u = y(s),
            c = { position: r.position },
            d = {
              left: Math.floor(r.left),
              top: Math.round(r.top),
              bottom: Math.round(r.bottom),
              right: Math.floor(r.right)
            },
            f = "bottom" === n ? "top" : "bottom",
            p = "right" === i ? "left" : "right",
            h = H("transform"),
            m = void 0,
            g = void 0;
          if (
            ((g =
              "bottom" === f
                ? "HTML" === s.nodeName
                  ? -s.clientHeight + d.bottom
                  : -u.height + d.bottom
                : d.top),
            (m =
              "right" === p
                ? "HTML" === s.nodeName
                  ? -s.clientWidth + d.right
                  : -u.width + d.right
                : d.left),
            a && h)
          )
            (c[h] = "translate3d(" + m + "px, " + g + "px, 0)"),
              (c[f] = 0),
              (c[p] = 0),
              (c.willChange = "transform");
          else {
            var v = "bottom" === f ? -1 : 1,
              b = "right" === p ? -1 : 1;
            (c[f] = g * v), (c[p] = m * b), (c.willChange = f + ", " + p);
          }
          var _ = { "x-placement": e.placement };
          return (
            (e.attributes = be({}, _, e.attributes)),
            (e.styles = be({}, c, e.styles)),
            (e.arrowStyles = be({}, e.offsets.arrow, e.arrowStyles)),
            e
          );
        }
        function Q(e, t, n) {
          var i = N(e, function(e) {
              var n = e.name;
              return n === t;
            }),
            r =
              !!i &&
              e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!r) {
            var o = "`" + t + "`",
              a = "`" + n + "`";
            console.warn(
              a +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return r;
        }
        function Y(e, t) {
          var n;
          if (!Q(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;
          if ("string" == typeof i) {
            if (((i = e.instance.popper.querySelector(i)), !i)) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
          var o = e.placement.split("-")[0],
            a = e.offsets,
            s = a.popper,
            l = a.reference,
            u = ["left", "right"].indexOf(o) !== -1,
            c = u ? "height" : "width",
            d = u ? "Top" : "Left",
            f = d.toLowerCase(),
            p = u ? "left" : "top",
            h = u ? "bottom" : "right",
            m = A(i)[c];
          l[h] - m < s[f] && (e.offsets.popper[f] -= s[f] - (l[h] - m)),
            l[f] + m > s[h] && (e.offsets.popper[f] += l[f] + m - s[h]),
            (e.offsets.popper = v(e.offsets.popper));
          var g = l[f] + l[c] / 2 - m / 2,
            y = r(e.instance.popper),
            b = parseFloat(y["margin" + d], 10),
            _ = parseFloat(y["border" + d + "Width"], 10),
            E = g - e.offsets.popper[f] - b - _;
          return (
            (E = Math.max(Math.min(s[c] - m, E), 0)),
            (e.arrowElement = i),
            (e.offsets.arrow =
              ((n = {}), ye(n, f, Math.round(E)), ye(n, p, ""), n)),
            e
          );
        }
        function X(e) {
          return "end" === e ? "start" : "start" === e ? "end" : e;
        }
        function J(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Ee.indexOf(e),
            i = Ee.slice(n + 1).concat(Ee.slice(0, n));
          return t ? i.reverse() : i;
        }
        function Z(e, t) {
          if (P(e.instance.modifiers, "inner")) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var n = w(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              t.boundariesElement,
              e.positionFixed
            ),
            i = e.placement.split("-")[0],
            r = D(i),
            o = e.placement.split("-")[1] || "",
            a = [];
          switch (t.behavior) {
            case Te.FLIP:
              a = [i, r];
              break;
            case Te.CLOCKWISE:
              a = J(i);
              break;
            case Te.COUNTERCLOCKWISE:
              a = J(i, !0);
              break;
            default:
              a = t.behavior;
          }
          return (
            a.forEach(function(s, l) {
              if (i !== s || a.length === l + 1) return e;
              (i = e.placement.split("-")[0]), (r = D(i));
              var u = e.offsets.popper,
                c = e.offsets.reference,
                d = Math.floor,
                f =
                  ("left" === i && d(u.right) > d(c.left)) ||
                  ("right" === i && d(u.left) < d(c.right)) ||
                  ("top" === i && d(u.bottom) > d(c.top)) ||
                  ("bottom" === i && d(u.top) < d(c.bottom)),
                p = d(u.left) < d(n.left),
                h = d(u.right) > d(n.right),
                m = d(u.top) < d(n.top),
                g = d(u.bottom) > d(n.bottom),
                v =
                  ("left" === i && p) ||
                  ("right" === i && h) ||
                  ("top" === i && m) ||
                  ("bottom" === i && g),
                y = ["top", "bottom"].indexOf(i) !== -1,
                b =
                  !!t.flipVariations &&
                  ((y && "start" === o && p) ||
                    (y && "end" === o && h) ||
                    (!y && "start" === o && m) ||
                    (!y && "end" === o && g));
              (f || v || b) &&
                ((e.flipped = !0),
                (f || v) && (i = a[l + 1]),
                b && (o = X(o)),
                (e.placement = i + (o ? "-" + o : "")),
                (e.offsets.popper = be(
                  {},
                  e.offsets.popper,
                  O(e.instance.popper, e.offsets.reference, e.placement)
                )),
                (e = k(e.instance.modifiers, e, "flip")));
            }),
            e
          );
        }
        function ee(e) {
          var t = e.offsets,
            n = t.popper,
            i = t.reference,
            r = e.placement.split("-")[0],
            o = Math.floor,
            a = ["top", "bottom"].indexOf(r) !== -1,
            s = a ? "right" : "bottom",
            l = a ? "left" : "top",
            u = a ? "width" : "height";
          return (
            n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
            n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])),
            e
          );
        }
        function te(e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            a = r[2];
          if (!o) return e;
          if (0 === a.indexOf("%")) {
            var s = void 0;
            switch (a) {
              case "%p":
                s = n;
                break;
              case "%":
              case "%r":
              default:
                s = i;
            }
            var l = v(s);
            return (l[t] / 100) * o;
          }
          if ("vh" === a || "vw" === a) {
            var u = void 0;
            return (
              (u =
                "vh" === a
                  ? Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    )
                  : Math.max(
                      document.documentElement.clientWidth,
                      window.innerWidth || 0
                    )),
              (u / 100) * o
            );
          }
          return o;
        }
        function ne(e, t, n, i) {
          var r = [0, 0],
            o = ["right", "left"].indexOf(i) !== -1,
            a = e.split(/(\+|\-)/).map(function(e) {
              return e.trim();
            }),
            s = a.indexOf(
              N(a, function(e) {
                return e.search(/,|\s/) !== -1;
              })
            );
          a[s] &&
            a[s].indexOf(",") === -1 &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            u =
              s !== -1
                ? [
                    a.slice(0, s).concat([a[s].split(l)[0]]),
                    [a[s].split(l)[1]].concat(a.slice(s + 1))
                  ]
                : [a];
          return (
            (u = u.map(function(e, i) {
              var r = (1 === i ? !o : o) ? "height" : "width",
                a = !1;
              return e
                .reduce(function(e, t) {
                  return "" === e[e.length - 1] && ["+", "-"].indexOf(t) !== -1
                    ? ((e[e.length - 1] = t), (a = !0), e)
                    : a
                    ? ((e[e.length - 1] += t), (a = !1), e)
                    : e.concat(t);
                }, [])
                .map(function(e) {
                  return te(e, r, t, n);
                });
            })),
            u.forEach(function(e, t) {
              e.forEach(function(n, i) {
                B(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        function ie(e, t) {
          var n = t.offset,
            i = e.placement,
            r = e.offsets,
            o = r.popper,
            a = r.reference,
            s = i.split("-")[0],
            l = void 0;
          return (
            (l = B(+n) ? [+n, 0] : ne(n, o, a, s)),
            "left" === s
              ? ((o.top += l[0]), (o.left -= l[1]))
              : "right" === s
              ? ((o.top += l[0]), (o.left += l[1]))
              : "top" === s
              ? ((o.left += l[0]), (o.top -= l[1]))
              : "bottom" === s && ((o.left += l[0]), (o.top += l[1])),
            (e.popper = o),
            e
          );
        }
        function re(e, t) {
          var n = t.boundariesElement || l(e.instance.popper);
          e.instance.reference === n && (n = l(n));
          var i = H("transform"),
            r = e.instance.popper.style,
            o = r.top,
            a = r.left,
            s = r[i];
          (r.top = ""), (r.left = ""), (r[i] = "");
          var u = w(
            e.instance.popper,
            e.instance.reference,
            t.padding,
            n,
            e.positionFixed
          );
          (r.top = o), (r.left = a), (r[i] = s), (t.boundaries = u);
          var c = t.priority,
            d = e.offsets.popper,
            f = {
              primary: function(e) {
                var n = d[e];
                return (
                  d[e] < u[e] &&
                    !t.escapeWithReference &&
                    (n = Math.max(d[e], u[e])),
                  ye({}, e, n)
                );
              },
              secondary: function(e) {
                var n = "right" === e ? "left" : "top",
                  i = d[n];
                return (
                  d[e] > u[e] &&
                    !t.escapeWithReference &&
                    (i = Math.min(
                      d[n],
                      u[e] - ("right" === e ? d.width : d.height)
                    )),
                  ye({}, n, i)
                );
              }
            };
          return (
            c.forEach(function(e) {
              var t =
                ["left", "top"].indexOf(e) !== -1 ? "primary" : "secondary";
              d = be({}, d, f[t](e));
            }),
            (e.offsets.popper = d),
            e
          );
        }
        function oe(e) {
          var t = e.placement,
            n = t.split("-")[0],
            i = t.split("-")[1];
          if (i) {
            var r = e.offsets,
              o = r.reference,
              a = r.popper,
              s = ["bottom", "top"].indexOf(n) !== -1,
              l = s ? "left" : "top",
              u = s ? "width" : "height",
              c = {
                start: ye({}, l, o[l]),
                end: ye({}, l, o[l] + o[u] - a[u])
              };
            e.offsets.popper = be({}, a, c[i]);
          }
          return e;
        }
        function ae(e) {
          if (!Q(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
            n = N(e.instance.modifiers, function(e) {
              return "preventOverflow" === e.name;
            }).boundaries;
          if (
            t.bottom < n.top ||
            t.left > n.right ||
            t.top > n.bottom ||
            t.right < n.left
          ) {
            if (e.hide === !0) return e;
            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
          } else {
            if (e.hide === !1) return e;
            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
          }
          return e;
        }
        function se(e) {
          var t = e.placement,
            n = t.split("-")[0],
            i = e.offsets,
            r = i.popper,
            o = i.reference,
            a = ["left", "right"].indexOf(n) !== -1,
            s = ["top", "left"].indexOf(n) === -1;
          return (
            (r[a ? "left" : "top"] =
              o[n] - (s ? r[a ? "width" : "height"] : 0)),
            (e.placement = D(t)),
            (e.offsets.popper = v(r)),
            e
          );
        }
        for (
          var le =
              "undefined" != typeof window && "undefined" != typeof document,
            ue = ["Edge", "Trident", "Firefox"],
            ce = 0,
            de = 0;
          de < ue.length;
          de += 1
        )
          if (le && navigator.userAgent.indexOf(ue[de]) >= 0) {
            ce = 1;
            break;
          }
        var fe = le && window.Promise,
          pe = fe ? e : n,
          he = le && !(!window.MSInputMethodContext || !document.documentMode),
          me = le && /MSIE 10/.test(navigator.userAgent),
          ge = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          ve = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          ye = function(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = n),
              e
            );
          },
          be =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          _e = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start"
          ],
          Ee = _e.slice(3),
          Te = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
          },
          we = {
            shift: { order: 100, enabled: !0, fn: oe },
            offset: { order: 200, enabled: !0, fn: ie, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: re,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: { order: 400, enabled: !0, fn: ee },
            arrow: { order: 500, enabled: !0, fn: Y, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: Z,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
            },
            inner: { order: 700, enabled: !1, fn: se },
            hide: { order: 800, enabled: !0, fn: ae },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: K,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: z,
              onLoad: G,
              gpuAcceleration: void 0
            }
          },
          Ce = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: we
          },
          xe = (function() {
            function e(t, n) {
              var r = this,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              ge(this, e),
                (this.scheduleUpdate = function() {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = pe(this.update.bind(this))),
                (this.options = be({}, e.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(be({}, e.Defaults.modifiers, o.modifiers)).forEach(
                  function(t) {
                    r.options.modifiers[t] = be(
                      {},
                      e.Defaults.modifiers[t] || {},
                      o.modifiers ? o.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function(e) {
                    return be({ name: e }, r.options.modifiers[e]);
                  })
                  .sort(function(e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function(e) {
                  e.enabled &&
                    i(e.onLoad) &&
                    e.onLoad(r.reference, r.popper, r.options, e, r.state);
                }),
                this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
              ve(e, [
                {
                  key: "update",
                  value: function() {
                    return L.call(this);
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    return M.call(this);
                  }
                },
                {
                  key: "enableEventListeners",
                  value: function() {
                    return W.call(this);
                  }
                },
                {
                  key: "disableEventListeners",
                  value: function() {
                    return q.call(this);
                  }
                }
              ]),
              e
            );
          })();
        return (
          (xe.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
          (xe.placements = _e),
          (xe.Defaults = Ce),
          xe
        );
      });
    }.call(
      t,
      (function() {
        return this;
      })()
    ));
  },
  function(e, t, n) {
    !(function(e, i) {
      i(t, n(3), n(6));
    })(this, function(e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function(t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      function s(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      (t = t && t.hasOwnProperty("default") ? t["default"] : t),
        (n = n && n.hasOwnProperty("default") ? n["default"] : n);
      var l = (function(e) {
          function t(e) {
            return {}.toString
              .call(e)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase();
          }
          function n() {
            return {
              bindType: o,
              delegateType: o,
              handle: function(t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              }
            };
          }
          function i(t) {
            var n = this,
              i = !1;
            return (
              e(this).one(l.TRANSITION_END, function() {
                i = !0;
              }),
              setTimeout(function() {
                i || l.triggerTransitionEnd(n);
              }, t),
              this
            );
          }
          function r() {
            (e.fn.emulateTransitionEnd = i),
              (e.event.special[l.TRANSITION_END] = n());
          }
          var o = "transitionend",
            a = 1e6,
            s = 1e3,
            l = {
              TRANSITION_END: "bsTransitionEnd",
              getUID: function(e) {
                do e += ~~(Math.random() * a);
                while (document.getElementById(e));
                return e;
              },
              getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                (t && "#" !== t) || (t = e.getAttribute("href") || "");
                try {
                  return document.querySelector(t) ? t : null;
                } catch (n) {
                  return null;
                }
              },
              getTransitionDurationFromElement: function(t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration"),
                  i = parseFloat(n);
                return i ? ((n = n.split(",")[0]), parseFloat(n) * s) : 0;
              },
              reflow: function(e) {
                return e.offsetHeight;
              },
              triggerTransitionEnd: function(t) {
                e(t).trigger(o);
              },
              supportsTransitionEnd: function() {
                return Boolean(o);
              },
              isElement: function(e) {
                return (e[0] || e).nodeType;
              },
              typeCheckConfig: function(e, n, i) {
                for (var r in i)
                  if (Object.prototype.hasOwnProperty.call(i, r)) {
                    var o = i[r],
                      a = n[r],
                      s = a && l.isElement(a) ? "element" : t(a);
                    if (!new RegExp(o).test(s))
                      throw new Error(
                        e.toUpperCase() +
                          ": " +
                          ('Option "' + r + '" provided type "' + s + '" ') +
                          ('but expected type "' + o + '".')
                      );
                  }
              }
            };
          return r(), l;
        })(t),
        u = (function(e) {
          var t = "alert",
            n = "4.1.3",
            i = "bs.alert",
            o = "." + i,
            a = ".data-api",
            s = e.fn[t],
            u = { DISMISS: '[data-dismiss="alert"]' },
            c = {
              CLOSE: "close" + o,
              CLOSED: "closed" + o,
              CLICK_DATA_API: "click" + o + a
            },
            d = { ALERT: "alert", FADE: "fade", SHOW: "show" },
            f = (function() {
              function t(e) {
                this._element = e;
              }
              var o = t.prototype;
              return (
                (o.close = function(e) {
                  var t = this._element;
                  e && (t = this._getRootElement(e));
                  var n = this._triggerCloseEvent(t);
                  n.isDefaultPrevented() || this._removeElement(t);
                }),
                (o.dispose = function() {
                  e.removeData(this._element, i), (this._element = null);
                }),
                (o._getRootElement = function(t) {
                  var n = l.getSelectorFromElement(t),
                    i = !1;
                  return (
                    n && (i = document.querySelector(n)),
                    i || (i = e(t).closest("." + d.ALERT)[0]),
                    i
                  );
                }),
                (o._triggerCloseEvent = function(t) {
                  var n = e.Event(c.CLOSE);
                  return e(t).trigger(n), n;
                }),
                (o._removeElement = function(t) {
                  var n = this;
                  if ((e(t).removeClass(d.SHOW), !e(t).hasClass(d.FADE)))
                    return void this._destroyElement(t);
                  var i = l.getTransitionDurationFromElement(t);
                  e(t)
                    .one(l.TRANSITION_END, function(e) {
                      return n._destroyElement(t, e);
                    })
                    .emulateTransitionEnd(i);
                }),
                (o._destroyElement = function(t) {
                  e(t)
                    .detach()
                    .trigger(c.CLOSED)
                    .remove();
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var r = e(this),
                      o = r.data(i);
                    o || ((o = new t(this)), r.data(i, o)),
                      "close" === n && o[n](this);
                  });
                }),
                (t._handleDismiss = function(e) {
                  return function(t) {
                    t && t.preventDefault(), e.close(this);
                  };
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(
              c.CLICK_DATA_API,
              u.DISMISS,
              f._handleDismiss(new f())
            ),
            (e.fn[t] = f._jQueryInterface),
            (e.fn[t].Constructor = f),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = s), f._jQueryInterface;
            }),
            f
          );
        })(t),
        c = (function(e) {
          var t = "button",
            n = "4.1.3",
            i = "bs.button",
            o = "." + i,
            a = ".data-api",
            s = e.fn[t],
            l = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            u = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: "input",
              ACTIVE: ".active",
              BUTTON: ".btn"
            },
            c = {
              CLICK_DATA_API: "click" + o + a,
              FOCUS_BLUR_DATA_API: "focus" + o + a + " " + ("blur" + o + a)
            },
            d = (function() {
              function t(e) {
                this._element = e;
              }
              var o = t.prototype;
              return (
                (o.toggle = function() {
                  var t = !0,
                    n = !0,
                    i = e(this._element).closest(u.DATA_TOGGLE)[0];
                  if (i) {
                    var r = this._element.querySelector(u.INPUT);
                    if (r) {
                      if ("radio" === r.type)
                        if (
                          r.checked &&
                          this._element.classList.contains(l.ACTIVE)
                        )
                          t = !1;
                        else {
                          var o = i.querySelector(u.ACTIVE);
                          o && e(o).removeClass(l.ACTIVE);
                        }
                      if (t) {
                        if (
                          r.hasAttribute("disabled") ||
                          i.hasAttribute("disabled") ||
                          r.classList.contains("disabled") ||
                          i.classList.contains("disabled")
                        )
                          return;
                        (r.checked = !this._element.classList.contains(
                          l.ACTIVE
                        )),
                          e(r).trigger("change");
                      }
                      r.focus(), (n = !1);
                    }
                  }
                  n &&
                    this._element.setAttribute(
                      "aria-pressed",
                      !this._element.classList.contains(l.ACTIVE)
                    ),
                    t && e(this._element).toggleClass(l.ACTIVE);
                }),
                (o.dispose = function() {
                  e.removeData(this._element, i), (this._element = null);
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var r = e(this).data(i);
                    r || ((r = new t(this)), e(this).data(i, r)),
                      "toggle" === n && r[n]();
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document)
              .on(c.CLICK_DATA_API, u.DATA_TOGGLE_CARROT, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(l.BUTTON) || (n = e(n).closest(u.BUTTON)),
                  d._jQueryInterface.call(e(n), "toggle");
              })
              .on(c.FOCUS_BLUR_DATA_API, u.DATA_TOGGLE_CARROT, function(t) {
                var n = e(t.target).closest(u.BUTTON)[0];
                e(n).toggleClass(l.FOCUS, /^focus(in)?$/.test(t.type));
              }),
            (e.fn[t] = d._jQueryInterface),
            (e.fn[t].Constructor = d),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = s), d._jQueryInterface;
            }),
            d
          );
        })(t),
        d = (function(e) {
          var t = "carousel",
            n = "4.1.3",
            i = "bs.carousel",
            o = "." + i,
            s = ".data-api",
            u = e.fn[t],
            c = 37,
            d = 39,
            f = 500,
            p = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0
            },
            h = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean"
            },
            m = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
            g = {
              SLIDE: "slide" + o,
              SLID: "slid" + o,
              KEYDOWN: "keydown" + o,
              MOUSEENTER: "mouseenter" + o,
              MOUSELEAVE: "mouseleave" + o,
              TOUCHEND: "touchend" + o,
              LOAD_DATA_API: "load" + o + s,
              CLICK_DATA_API: "click" + o + s
            },
            v = {
              CAROUSEL: "carousel",
              ACTIVE: "active",
              SLIDE: "slide",
              RIGHT: "carousel-item-right",
              LEFT: "carousel-item-left",
              NEXT: "carousel-item-next",
              PREV: "carousel-item-prev",
              ITEM: "carousel-item"
            },
            y = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]'
            },
            b = (function() {
              function s(t, n) {
                (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this._config = this._getConfig(n)),
                  (this._element = e(t)[0]),
                  (this._indicatorsElement = this._element.querySelector(
                    y.INDICATORS
                  )),
                  this._addEventListeners();
              }
              var u = s.prototype;
              return (
                (u.next = function() {
                  this._isSliding || this._slide(m.NEXT);
                }),
                (u.nextWhenVisible = function() {
                  !document.hidden &&
                    e(this._element).is(":visible") &&
                    "hidden" !== e(this._element).css("visibility") &&
                    this.next();
                }),
                (u.prev = function() {
                  this._isSliding || this._slide(m.PREV);
                }),
                (u.pause = function(e) {
                  e || (this._isPaused = !0),
                    this._element.querySelector(y.NEXT_PREV) &&
                      (l.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (u.cycle = function(e) {
                  e || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval
                      ));
                }),
                (u.to = function(t) {
                  var n = this;
                  this._activeElement = this._element.querySelector(
                    y.ACTIVE_ITEM
                  );
                  var i = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0)) {
                    if (this._isSliding)
                      return void e(this._element).one(g.SLID, function() {
                        return n.to(t);
                      });
                    if (i === t) return this.pause(), void this.cycle();
                    var r = t > i ? m.NEXT : m.PREV;
                    this._slide(r, this._items[t]);
                  }
                }),
                (u.dispose = function() {
                  e(this._element).off(o),
                    e.removeData(this._element, i),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (u._getConfig = function(e) {
                  return (e = a({}, p, e)), l.typeCheckConfig(t, e, h), e;
                }),
                (u._addEventListeners = function() {
                  var t = this;
                  this._config.keyboard &&
                    e(this._element).on(g.KEYDOWN, function(e) {
                      return t._keydown(e);
                    }),
                    "hover" === this._config.pause &&
                      (e(this._element)
                        .on(g.MOUSEENTER, function(e) {
                          return t.pause(e);
                        })
                        .on(g.MOUSELEAVE, function(e) {
                          return t.cycle(e);
                        }),
                      "ontouchstart" in document.documentElement &&
                        e(this._element).on(g.TOUCHEND, function() {
                          t.pause(),
                            t.touchTimeout && clearTimeout(t.touchTimeout),
                            (t.touchTimeout = setTimeout(function(e) {
                              return t.cycle(e);
                            }, f + t._config.interval));
                        }));
                }),
                (u._keydown = function(e) {
                  if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                      case c:
                        e.preventDefault(), this.prev();
                        break;
                      case d:
                        e.preventDefault(), this.next();
                    }
                }),
                (u._getItemIndex = function(e) {
                  return (
                    (this._items =
                      e && e.parentNode
                        ? [].slice.call(e.parentNode.querySelectorAll(y.ITEM))
                        : []),
                    this._items.indexOf(e)
                  );
                }),
                (u._getItemByDirection = function(e, t) {
                  var n = e === m.NEXT,
                    i = e === m.PREV,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1,
                    a = (i && 0 === r) || (n && r === o);
                  if (a && !this._config.wrap) return t;
                  var s = e === m.PREV ? -1 : 1,
                    l = (r + s) % this._items.length;
                  return l === -1
                    ? this._items[this._items.length - 1]
                    : this._items[l];
                }),
                (u._triggerSlideEvent = function(t, n) {
                  var i = this._getItemIndex(t),
                    r = this._getItemIndex(
                      this._element.querySelector(y.ACTIVE_ITEM)
                    ),
                    o = e.Event(g.SLIDE, {
                      relatedTarget: t,
                      direction: n,
                      from: r,
                      to: i
                    });
                  return e(this._element).trigger(o), o;
                }),
                (u._setActiveIndicatorElement = function(t) {
                  if (this._indicatorsElement) {
                    var n = [].slice.call(
                      this._indicatorsElement.querySelectorAll(y.ACTIVE)
                    );
                    e(n).removeClass(v.ACTIVE);
                    var i = this._indicatorsElement.children[
                      this._getItemIndex(t)
                    ];
                    i && e(i).addClass(v.ACTIVE);
                  }
                }),
                (u._slide = function(t, n) {
                  var i,
                    r,
                    o,
                    a = this,
                    s = this._element.querySelector(y.ACTIVE_ITEM),
                    u = this._getItemIndex(s),
                    c = n || (s && this._getItemByDirection(t, s)),
                    d = this._getItemIndex(c),
                    f = Boolean(this._interval);
                  if (
                    (t === m.NEXT
                      ? ((i = v.LEFT), (r = v.NEXT), (o = m.LEFT))
                      : ((i = v.RIGHT), (r = v.PREV), (o = m.RIGHT)),
                    c && e(c).hasClass(v.ACTIVE))
                  )
                    return void (this._isSliding = !1);
                  var p = this._triggerSlideEvent(c, o);
                  if (!p.isDefaultPrevented() && s && c) {
                    (this._isSliding = !0),
                      f && this.pause(),
                      this._setActiveIndicatorElement(c);
                    var h = e.Event(g.SLID, {
                      relatedTarget: c,
                      direction: o,
                      from: u,
                      to: d
                    });
                    if (e(this._element).hasClass(v.SLIDE)) {
                      e(c).addClass(r),
                        l.reflow(c),
                        e(s).addClass(i),
                        e(c).addClass(i);
                      var b = l.getTransitionDurationFromElement(s);
                      e(s)
                        .one(l.TRANSITION_END, function() {
                          e(c)
                            .removeClass(i + " " + r)
                            .addClass(v.ACTIVE),
                            e(s).removeClass(v.ACTIVE + " " + r + " " + i),
                            (a._isSliding = !1),
                            setTimeout(function() {
                              return e(a._element).trigger(h);
                            }, 0);
                        })
                        .emulateTransitionEnd(b);
                    } else
                      e(s).removeClass(v.ACTIVE),
                        e(c).addClass(v.ACTIVE),
                        (this._isSliding = !1),
                        e(this._element).trigger(h);
                    f && this.cycle();
                  }
                }),
                (s._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(i),
                      r = a({}, p, e(this).data());
                    "object" == typeof t && (r = a({}, r, t));
                    var o = "string" == typeof t ? t : r.slide;
                    if (
                      (n || ((n = new s(this, r)), e(this).data(i, n)),
                      "number" == typeof t)
                    )
                      n.to(t);
                    else if ("string" == typeof o) {
                      if ("undefined" == typeof n[o])
                        throw new TypeError('No method named "' + o + '"');
                      n[o]();
                    } else r.interval && (n.pause(), n.cycle());
                  });
                }),
                (s._dataApiClickHandler = function(t) {
                  var n = l.getSelectorFromElement(this);
                  if (n) {
                    var r = e(n)[0];
                    if (r && e(r).hasClass(v.CAROUSEL)) {
                      var o = a({}, e(r).data(), e(this).data()),
                        u = this.getAttribute("data-slide-to");
                      u && (o.interval = !1),
                        s._jQueryInterface.call(e(r), o),
                        u &&
                          e(r)
                            .data(i)
                            .to(u),
                        t.preventDefault();
                    }
                  }
                }),
                r(s, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return p;
                    }
                  }
                ]),
                s
              );
            })();
          return (
            e(document).on(
              g.CLICK_DATA_API,
              y.DATA_SLIDE,
              b._dataApiClickHandler
            ),
            e(window).on(g.LOAD_DATA_API, function() {
              for (
                var t = [].slice.call(document.querySelectorAll(y.DATA_RIDE)),
                  n = 0,
                  i = t.length;
                n < i;
                n++
              ) {
                var r = e(t[n]);
                b._jQueryInterface.call(r, r.data());
              }
            }),
            (e.fn[t] = b._jQueryInterface),
            (e.fn[t].Constructor = b),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = u), b._jQueryInterface;
            }),
            b
          );
        })(t),
        f = (function(e) {
          var t = "collapse",
            n = "4.1.3",
            i = "bs.collapse",
            o = "." + i,
            s = ".data-api",
            u = e.fn[t],
            c = { toggle: !0, parent: "" },
            d = { toggle: "boolean", parent: "(string|element)" },
            f = {
              SHOW: "show" + o,
              SHOWN: "shown" + o,
              HIDE: "hide" + o,
              HIDDEN: "hidden" + o,
              CLICK_DATA_API: "click" + o + s
            },
            p = {
              SHOW: "show",
              COLLAPSE: "collapse",
              COLLAPSING: "collapsing",
              COLLAPSED: "collapsed"
            },
            h = { WIDTH: "width", HEIGHT: "height" },
            m = {
              ACTIVES: ".show, .collapsing",
              DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            g = (function() {
              function o(t, n) {
                (this._isTransitioning = !1),
                  (this._element = t),
                  (this._config = this._getConfig(n)),
                  (this._triggerArray = e.makeArray(
                    document.querySelectorAll(
                      '[data-toggle="collapse"][href="#' +
                        t.id +
                        '"],' +
                        ('[data-toggle="collapse"][data-target="#' +
                          t.id +
                          '"]')
                    )
                  ));
                for (
                  var i = [].slice.call(
                      document.querySelectorAll(m.DATA_TOGGLE)
                    ),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                ) {
                  var a = i[r],
                    s = l.getSelectorFromElement(a),
                    u = [].slice
                      .call(document.querySelectorAll(s))
                      .filter(function(e) {
                        return e === t;
                      });
                  null !== s &&
                    u.length > 0 &&
                    ((this._selector = s), this._triggerArray.push(a));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              var s = o.prototype;
              return (
                (s.toggle = function() {
                  e(this._element).hasClass(p.SHOW) ? this.hide() : this.show();
                }),
                (s.show = function() {
                  var t = this;
                  if (
                    !this._isTransitioning &&
                    !e(this._element).hasClass(p.SHOW)
                  ) {
                    var n, r;
                    if (
                      (this._parent &&
                        ((n = [].slice
                          .call(this._parent.querySelectorAll(m.ACTIVES))
                          .filter(function(e) {
                            return (
                              e.getAttribute("data-parent") === t._config.parent
                            );
                          })),
                        0 === n.length && (n = null)),
                      !(
                        n &&
                        ((r = e(n)
                          .not(this._selector)
                          .data(i)),
                        r && r._isTransitioning)
                      ))
                    ) {
                      var a = e.Event(f.SHOW);
                      if (
                        (e(this._element).trigger(a), !a.isDefaultPrevented())
                      ) {
                        n &&
                          (o._jQueryInterface.call(
                            e(n).not(this._selector),
                            "hide"
                          ),
                          r || e(n).data(i, null));
                        var s = this._getDimension();
                        e(this._element)
                          .removeClass(p.COLLAPSE)
                          .addClass(p.COLLAPSING),
                          (this._element.style[s] = 0),
                          this._triggerArray.length &&
                            e(this._triggerArray)
                              .removeClass(p.COLLAPSED)
                              .attr("aria-expanded", !0),
                          this.setTransitioning(!0);
                        var u = function() {
                            e(t._element)
                              .removeClass(p.COLLAPSING)
                              .addClass(p.COLLAPSE)
                              .addClass(p.SHOW),
                              (t._element.style[s] = ""),
                              t.setTransitioning(!1),
                              e(t._element).trigger(f.SHOWN);
                          },
                          c = s[0].toUpperCase() + s.slice(1),
                          d = "scroll" + c,
                          h = l.getTransitionDurationFromElement(this._element);
                        e(this._element)
                          .one(l.TRANSITION_END, u)
                          .emulateTransitionEnd(h),
                          (this._element.style[s] = this._element[d] + "px");
                      }
                    }
                  }
                }),
                (s.hide = function() {
                  var t = this;
                  if (
                    !this._isTransitioning &&
                    e(this._element).hasClass(p.SHOW)
                  ) {
                    var n = e.Event(f.HIDE);
                    if (
                      (e(this._element).trigger(n), !n.isDefaultPrevented())
                    ) {
                      var i = this._getDimension();
                      (this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                        l.reflow(this._element),
                        e(this._element)
                          .addClass(p.COLLAPSING)
                          .removeClass(p.COLLAPSE)
                          .removeClass(p.SHOW);
                      var r = this._triggerArray.length;
                      if (r > 0)
                        for (var o = 0; o < r; o++) {
                          var a = this._triggerArray[o],
                            s = l.getSelectorFromElement(a);
                          if (null !== s) {
                            var u = e(
                              [].slice.call(document.querySelectorAll(s))
                            );
                            u.hasClass(p.SHOW) ||
                              e(a)
                                .addClass(p.COLLAPSED)
                                .attr("aria-expanded", !1);
                          }
                        }
                      this.setTransitioning(!0);
                      var c = function() {
                        t.setTransitioning(!1),
                          e(t._element)
                            .removeClass(p.COLLAPSING)
                            .addClass(p.COLLAPSE)
                            .trigger(f.HIDDEN);
                      };
                      this._element.style[i] = "";
                      var d = l.getTransitionDurationFromElement(this._element);
                      e(this._element)
                        .one(l.TRANSITION_END, c)
                        .emulateTransitionEnd(d);
                    }
                  }
                }),
                (s.setTransitioning = function(e) {
                  this._isTransitioning = e;
                }),
                (s.dispose = function() {
                  e.removeData(this._element, i),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (s._getConfig = function(e) {
                  return (
                    (e = a({}, c, e)),
                    (e.toggle = Boolean(e.toggle)),
                    l.typeCheckConfig(t, e, d),
                    e
                  );
                }),
                (s._getDimension = function() {
                  var t = e(this._element).hasClass(h.WIDTH);
                  return t ? h.WIDTH : h.HEIGHT;
                }),
                (s._getParent = function() {
                  var t = this,
                    n = null;
                  l.isElement(this._config.parent)
                    ? ((n = this._config.parent),
                      "undefined" != typeof this._config.parent.jquery &&
                        (n = this._config.parent[0]))
                    : (n = document.querySelector(this._config.parent));
                  var i =
                      '[data-toggle="collapse"][data-parent="' +
                      this._config.parent +
                      '"]',
                    r = [].slice.call(n.querySelectorAll(i));
                  return (
                    e(r).each(function(e, n) {
                      t._addAriaAndCollapsedClass(o._getTargetFromElement(n), [
                        n
                      ]);
                    }),
                    n
                  );
                }),
                (s._addAriaAndCollapsedClass = function(t, n) {
                  if (t) {
                    var i = e(t).hasClass(p.SHOW);
                    n.length &&
                      e(n)
                        .toggleClass(p.COLLAPSED, !i)
                        .attr("aria-expanded", i);
                  }
                }),
                (o._getTargetFromElement = function(e) {
                  var t = l.getSelectorFromElement(e);
                  return t ? document.querySelector(t) : null;
                }),
                (o._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this),
                      r = n.data(i),
                      s = a(
                        {},
                        c,
                        n.data(),
                        "object" == typeof t && t ? t : {}
                      );
                    if (
                      (!r && s.toggle && /show|hide/.test(t) && (s.toggle = !1),
                      r || ((r = new o(this, s)), n.data(i, r)),
                      "string" == typeof t)
                    ) {
                      if ("undefined" == typeof r[t])
                        throw new TypeError('No method named "' + t + '"');
                      r[t]();
                    }
                  });
                }),
                r(o, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return c;
                    }
                  }
                ]),
                o
              );
            })();
          return (
            e(document).on(f.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
              "A" === t.currentTarget.tagName && t.preventDefault();
              var n = e(this),
                r = l.getSelectorFromElement(this),
                o = [].slice.call(document.querySelectorAll(r));
              e(o).each(function() {
                var t = e(this),
                  r = t.data(i),
                  o = r ? "toggle" : n.data();
                g._jQueryInterface.call(t, o);
              });
            }),
            (e.fn[t] = g._jQueryInterface),
            (e.fn[t].Constructor = g),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = u), g._jQueryInterface;
            }),
            g
          );
        })(t),
        p = (function(e) {
          var t = "dropdown",
            i = "4.1.3",
            o = "bs.dropdown",
            s = "." + o,
            u = ".data-api",
            c = e.fn[t],
            d = 27,
            f = 32,
            p = 9,
            h = 38,
            m = 40,
            g = 3,
            v = new RegExp(h + "|" + m + "|" + d),
            y = {
              HIDE: "hide" + s,
              HIDDEN: "hidden" + s,
              SHOW: "show" + s,
              SHOWN: "shown" + s,
              CLICK: "click" + s,
              CLICK_DATA_API: "click" + s + u,
              KEYDOWN_DATA_API: "keydown" + s + u,
              KEYUP_DATA_API: "keyup" + s + u
            },
            b = {
              DISABLED: "disabled",
              SHOW: "show",
              DROPUP: "dropup",
              DROPRIGHT: "dropright",
              DROPLEFT: "dropleft",
              MENURIGHT: "dropdown-menu-right",
              MENULEFT: "dropdown-menu-left",
              POSITION_STATIC: "position-static"
            },
            _ = {
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: ".dropdown form",
              MENU: ".dropdown-menu",
              NAVBAR_NAV: ".navbar-nav",
              VISIBLE_ITEMS:
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            },
            E = {
              TOP: "top-start",
              TOPEND: "top-end",
              BOTTOM: "bottom-start",
              BOTTOMEND: "bottom-end",
              RIGHT: "right-start",
              RIGHTEND: "right-end",
              LEFT: "left-start",
              LEFTEND: "left-end"
            },
            T = {
              offset: 0,
              flip: !0,
              boundary: "scrollParent",
              reference: "toggle",
              display: "dynamic"
            },
            w = {
              offset: "(number|string|function)",
              flip: "boolean",
              boundary: "(string|element)",
              reference: "(string|element)",
              display: "string"
            },
            C = (function() {
              function u(e, t) {
                (this._element = e),
                  (this._popper = null),
                  (this._config = this._getConfig(t)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              var c = u.prototype;
              return (
                (c.toggle = function() {
                  if (
                    !this._element.disabled &&
                    !e(this._element).hasClass(b.DISABLED)
                  ) {
                    var t = u._getParentFromElement(this._element),
                      i = e(this._menu).hasClass(b.SHOW);
                    if ((u._clearMenus(), !i)) {
                      var r = { relatedTarget: this._element },
                        o = e.Event(y.SHOW, r);
                      if ((e(t).trigger(o), !o.isDefaultPrevented())) {
                        if (!this._inNavbar) {
                          if ("undefined" == typeof n)
                            throw new TypeError(
                              "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                            );
                          var a = this._element;
                          "parent" === this._config.reference
                            ? (a = t)
                            : l.isElement(this._config.reference) &&
                              ((a = this._config.reference),
                              "undefined" !=
                                typeof this._config.reference.jquery &&
                                (a = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary &&
                              e(t).addClass(b.POSITION_STATIC),
                            (this._popper = new n(
                              a,
                              this._menu,
                              this._getPopperConfig()
                            ));
                        }
                        "ontouchstart" in document.documentElement &&
                          0 === e(t).closest(_.NAVBAR_NAV).length &&
                          e(document.body)
                            .children()
                            .on("mouseover", null, e.noop),
                          this._element.focus(),
                          this._element.setAttribute("aria-expanded", !0),
                          e(this._menu).toggleClass(b.SHOW),
                          e(t)
                            .toggleClass(b.SHOW)
                            .trigger(e.Event(y.SHOWN, r));
                      }
                    }
                  }
                }),
                (c.dispose = function() {
                  e.removeData(this._element, o),
                    e(this._element).off(s),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper &&
                      (this._popper.destroy(), (this._popper = null));
                }),
                (c.update = function() {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (c._addEventListeners = function() {
                  var t = this;
                  e(this._element).on(y.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle();
                  });
                }),
                (c._getConfig = function(n) {
                  return (
                    (n = a(
                      {},
                      this.constructor.Default,
                      e(this._element).data(),
                      n
                    )),
                    l.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (c._getMenuElement = function() {
                  if (!this._menu) {
                    var e = u._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(_.MENU));
                  }
                  return this._menu;
                }),
                (c._getPlacement = function() {
                  var t = e(this._element.parentNode),
                    n = E.BOTTOM;
                  return (
                    t.hasClass(b.DROPUP)
                      ? ((n = E.TOP),
                        e(this._menu).hasClass(b.MENURIGHT) && (n = E.TOPEND))
                      : t.hasClass(b.DROPRIGHT)
                      ? (n = E.RIGHT)
                      : t.hasClass(b.DROPLEFT)
                      ? (n = E.LEFT)
                      : e(this._menu).hasClass(b.MENURIGHT) &&
                        (n = E.BOTTOMEND),
                    n
                  );
                }),
                (c._detectNavbar = function() {
                  return e(this._element).closest(".navbar").length > 0;
                }),
                (c._getPopperConfig = function() {
                  var e = this,
                    t = {};
                  "function" == typeof this._config.offset
                    ? (t.fn = function(t) {
                        return (
                          (t.offsets = a(
                            {},
                            t.offsets,
                            e._config.offset(t.offsets) || {}
                          )),
                          t
                        );
                      })
                    : (t.offset = this._config.offset);
                  var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: t,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary
                      }
                    }
                  };
                  return (
                    "static" === this._config.display &&
                      (n.modifiers.applyStyle = { enabled: !1 }),
                    n
                  );
                }),
                (u._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(o),
                      i = "object" == typeof t ? t : null;
                    if (
                      (n || ((n = new u(this, i)), e(this).data(o, n)),
                      "string" == typeof t)
                    ) {
                      if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                (u._clearMenus = function(t) {
                  if (
                    !t ||
                    (t.which !== g && ("keyup" !== t.type || t.which === p))
                  )
                    for (
                      var n = [].slice.call(
                          document.querySelectorAll(_.DATA_TOGGLE)
                        ),
                        i = 0,
                        r = n.length;
                      i < r;
                      i++
                    ) {
                      var a = u._getParentFromElement(n[i]),
                        s = e(n[i]).data(o),
                        l = { relatedTarget: n[i] };
                      if ((t && "click" === t.type && (l.clickEvent = t), s)) {
                        var c = s._menu;
                        if (
                          e(a).hasClass(b.SHOW) &&
                          !(
                            t &&
                            (("click" === t.type &&
                              /input|textarea/i.test(t.target.tagName)) ||
                              ("keyup" === t.type && t.which === p)) &&
                            e.contains(a, t.target)
                          )
                        ) {
                          var d = e.Event(y.HIDE, l);
                          e(a).trigger(d),
                            d.isDefaultPrevented() ||
                              ("ontouchstart" in document.documentElement &&
                                e(document.body)
                                  .children()
                                  .off("mouseover", null, e.noop),
                              n[i].setAttribute("aria-expanded", "false"),
                              e(c).removeClass(b.SHOW),
                              e(a)
                                .removeClass(b.SHOW)
                                .trigger(e.Event(y.HIDDEN, l)));
                        }
                      }
                    }
                }),
                (u._getParentFromElement = function(e) {
                  var t,
                    n = l.getSelectorFromElement(e);
                  return (
                    n && (t = document.querySelector(n)), t || e.parentNode
                  );
                }),
                (u._dataApiKeydownHandler = function(t) {
                  if (
                    (/input|textarea/i.test(t.target.tagName)
                      ? !(
                          t.which === f ||
                          (t.which !== d &&
                            ((t.which !== m && t.which !== h) ||
                              e(t.target).closest(_.MENU).length))
                        )
                      : v.test(t.which)) &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    !this.disabled && !e(this).hasClass(b.DISABLED))
                  ) {
                    var n = u._getParentFromElement(this),
                      i = e(n).hasClass(b.SHOW);
                    if (
                      (!i && (t.which !== d || t.which !== f)) ||
                      (i && (t.which === d || t.which === f))
                    ) {
                      if (t.which === d) {
                        var r = n.querySelector(_.DATA_TOGGLE);
                        e(r).trigger("focus");
                      }
                      return void e(this).trigger("click");
                    }
                    var o = [].slice.call(n.querySelectorAll(_.VISIBLE_ITEMS));
                    if (0 !== o.length) {
                      var a = o.indexOf(t.target);
                      t.which === h && a > 0 && a--,
                        t.which === m && a < o.length - 1 && a++,
                        a < 0 && (a = 0),
                        o[a].focus();
                    }
                  }
                }),
                r(u, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return i;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return T;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return w;
                    }
                  }
                ]),
                u
              );
            })();
          return (
            e(document)
              .on(y.KEYDOWN_DATA_API, _.DATA_TOGGLE, C._dataApiKeydownHandler)
              .on(y.KEYDOWN_DATA_API, _.MENU, C._dataApiKeydownHandler)
              .on(y.CLICK_DATA_API + " " + y.KEYUP_DATA_API, C._clearMenus)
              .on(y.CLICK_DATA_API, _.DATA_TOGGLE, function(t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  C._jQueryInterface.call(e(this), "toggle");
              })
              .on(y.CLICK_DATA_API, _.FORM_CHILD, function(e) {
                e.stopPropagation();
              }),
            (e.fn[t] = C._jQueryInterface),
            (e.fn[t].Constructor = C),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = c), C._jQueryInterface;
            }),
            C
          );
        })(t, n),
        h = (function(e) {
          var t = "modal",
            n = "4.1.3",
            i = "bs.modal",
            o = "." + i,
            s = ".data-api",
            u = e.fn[t],
            c = 27,
            d = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            f = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean"
            },
            p = {
              HIDE: "hide" + o,
              HIDDEN: "hidden" + o,
              SHOW: "show" + o,
              SHOWN: "shown" + o,
              FOCUSIN: "focusin" + o,
              RESIZE: "resize" + o,
              CLICK_DISMISS: "click.dismiss" + o,
              KEYDOWN_DISMISS: "keydown.dismiss" + o,
              MOUSEUP_DISMISS: "mouseup.dismiss" + o,
              MOUSEDOWN_DISMISS: "mousedown.dismiss" + o,
              CLICK_DATA_API: "click" + o + s
            },
            h = {
              SCROLLBAR_MEASURER: "modal-scrollbar-measure",
              BACKDROP: "modal-backdrop",
              OPEN: "modal-open",
              FADE: "fade",
              SHOW: "show"
            },
            m = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              STICKY_CONTENT: ".sticky-top"
            },
            g = (function() {
              function s(e, t) {
                (this._config = this._getConfig(t)),
                  (this._element = e),
                  (this._dialog = e.querySelector(m.DIALOG)),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._scrollbarWidth = 0);
              }
              var u = s.prototype;
              return (
                (u.toggle = function(e) {
                  return this._isShown ? this.hide() : this.show(e);
                }),
                (u.show = function(t) {
                  var n = this;
                  if (!this._isTransitioning && !this._isShown) {
                    e(this._element).hasClass(h.FADE) &&
                      (this._isTransitioning = !0);
                    var i = e.Event(p.SHOW, { relatedTarget: t });
                    e(this._element).trigger(i),
                      this._isShown ||
                        i.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        this._adjustDialog(),
                        e(document.body).addClass(h.OPEN),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(this._element).on(
                          p.CLICK_DISMISS,
                          m.DATA_DISMISS,
                          function(e) {
                            return n.hide(e);
                          }
                        ),
                        e(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                          e(n._element).one(p.MOUSEUP_DISMISS, function(t) {
                            e(t.target).is(n._element) &&
                              (n._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function() {
                          return n._showElement(t);
                        }));
                  }
                }),
                (u.hide = function(t) {
                  var n = this;
                  if (
                    (t && t.preventDefault(),
                    !this._isTransitioning && this._isShown)
                  ) {
                    var i = e.Event(p.HIDE);
                    if (
                      (e(this._element).trigger(i),
                      this._isShown && !i.isDefaultPrevented())
                    ) {
                      this._isShown = !1;
                      var r = e(this._element).hasClass(h.FADE);
                      if (
                        (r && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(document).off(p.FOCUSIN),
                        e(this._element).removeClass(h.SHOW),
                        e(this._element).off(p.CLICK_DISMISS),
                        e(this._dialog).off(p.MOUSEDOWN_DISMISS),
                        r)
                      ) {
                        var o = l.getTransitionDurationFromElement(
                          this._element
                        );
                        e(this._element)
                          .one(l.TRANSITION_END, function(e) {
                            return n._hideModal(e);
                          })
                          .emulateTransitionEnd(o);
                      } else this._hideModal();
                    }
                  }
                }),
                (u.dispose = function() {
                  e.removeData(this._element, i),
                    e(window, document, this._element, this._backdrop).off(o),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._scrollbarWidth = null);
                }),
                (u.handleUpdate = function() {
                  this._adjustDialog();
                }),
                (u._getConfig = function(e) {
                  return (e = a({}, d, e)), l.typeCheckConfig(t, e, f), e;
                }),
                (u._showElement = function(t) {
                  var n = this,
                    i = e(this._element).hasClass(h.FADE);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    (this._element.scrollTop = 0),
                    i && l.reflow(this._element),
                    e(this._element).addClass(h.SHOW),
                    this._config.focus && this._enforceFocus();
                  var r = e.Event(p.SHOWN, { relatedTarget: t }),
                    o = function() {
                      n._config.focus && n._element.focus(),
                        (n._isTransitioning = !1),
                        e(n._element).trigger(r);
                    };
                  if (i) {
                    var a = l.getTransitionDurationFromElement(this._element);
                    e(this._dialog)
                      .one(l.TRANSITION_END, o)
                      .emulateTransitionEnd(a);
                  } else o();
                }),
                (u._enforceFocus = function() {
                  var t = this;
                  e(document)
                    .off(p.FOCUSIN)
                    .on(p.FOCUSIN, function(n) {
                      document !== n.target &&
                        t._element !== n.target &&
                        0 === e(t._element).has(n.target).length &&
                        t._element.focus();
                    });
                }),
                (u._setEscapeEvent = function() {
                  var t = this;
                  this._isShown && this._config.keyboard
                    ? e(this._element).on(p.KEYDOWN_DISMISS, function(e) {
                        e.which === c && (e.preventDefault(), t.hide());
                      })
                    : this._isShown || e(this._element).off(p.KEYDOWN_DISMISS);
                }),
                (u._setResizeEvent = function() {
                  var t = this;
                  this._isShown
                    ? e(window).on(p.RESIZE, function(e) {
                        return t.handleUpdate(e);
                      })
                    : e(window).off(p.RESIZE);
                }),
                (u._hideModal = function() {
                  var t = this;
                  (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function() {
                      e(document.body).removeClass(h.OPEN),
                        t._resetAdjustments(),
                        t._resetScrollbar(),
                        e(t._element).trigger(p.HIDDEN);
                    });
                }),
                (u._removeBackdrop = function() {
                  this._backdrop &&
                    (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (u._showBackdrop = function(t) {
                  var n = this,
                    i = e(this._element).hasClass(h.FADE) ? h.FADE : "";
                  if (this._isShown && this._config.backdrop) {
                    if (
                      ((this._backdrop = document.createElement("div")),
                      (this._backdrop.className = h.BACKDROP),
                      i && this._backdrop.classList.add(i),
                      e(this._backdrop).appendTo(document.body),
                      e(this._element).on(p.CLICK_DISMISS, function(e) {
                        return n._ignoreBackdropClick
                          ? void (n._ignoreBackdropClick = !1)
                          : void (
                              e.target === e.currentTarget &&
                              ("static" === n._config.backdrop
                                ? n._element.focus()
                                : n.hide())
                            );
                      }),
                      i && l.reflow(this._backdrop),
                      e(this._backdrop).addClass(h.SHOW),
                      !t)
                    )
                      return;
                    if (!i) return void t();
                    var r = l.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop)
                      .one(l.TRANSITION_END, t)
                      .emulateTransitionEnd(r);
                  } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(h.SHOW);
                    var o = function() {
                      n._removeBackdrop(), t && t();
                    };
                    if (e(this._element).hasClass(h.FADE)) {
                      var a = l.getTransitionDurationFromElement(
                        this._backdrop
                      );
                      e(this._backdrop)
                        .one(l.TRANSITION_END, o)
                        .emulateTransitionEnd(a);
                    } else o();
                  } else t && t();
                }),
                (u._adjustDialog = function() {
                  var e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    e &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + "px"),
                    this._isBodyOverflowing &&
                      !e &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + "px");
                }),
                (u._resetAdjustments = function() {
                  (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
                }),
                (u._checkScrollbar = function() {
                  var e = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing =
                    e.left + e.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (u._setScrollbar = function() {
                  var t = this;
                  if (this._isBodyOverflowing) {
                    var n = [].slice.call(
                        document.querySelectorAll(m.FIXED_CONTENT)
                      ),
                      i = [].slice.call(
                        document.querySelectorAll(m.STICKY_CONTENT)
                      );
                    e(n).each(function(n, i) {
                      var r = i.style.paddingRight,
                        o = e(i).css("padding-right");
                      e(i)
                        .data("padding-right", r)
                        .css(
                          "padding-right",
                          parseFloat(o) + t._scrollbarWidth + "px"
                        );
                    }),
                      e(i).each(function(n, i) {
                        var r = i.style.marginRight,
                          o = e(i).css("margin-right");
                        e(i)
                          .data("margin-right", r)
                          .css(
                            "margin-right",
                            parseFloat(o) - t._scrollbarWidth + "px"
                          );
                      });
                    var r = document.body.style.paddingRight,
                      o = e(document.body).css("padding-right");
                    e(document.body)
                      .data("padding-right", r)
                      .css(
                        "padding-right",
                        parseFloat(o) + this._scrollbarWidth + "px"
                      );
                  }
                }),
                (u._resetScrollbar = function() {
                  var t = [].slice.call(
                    document.querySelectorAll(m.FIXED_CONTENT)
                  );
                  e(t).each(function(t, n) {
                    var i = e(n).data("padding-right");
                    e(n).removeData("padding-right"),
                      (n.style.paddingRight = i ? i : "");
                  });
                  var n = [].slice.call(
                    document.querySelectorAll("" + m.STICKY_CONTENT)
                  );
                  e(n).each(function(t, n) {
                    var i = e(n).data("margin-right");
                    "undefined" != typeof i &&
                      e(n)
                        .css("margin-right", i)
                        .removeData("margin-right");
                  });
                  var i = e(document.body).data("padding-right");
                  e(document.body).removeData("padding-right"),
                    (document.body.style.paddingRight = i ? i : "");
                }),
                (u._getScrollbarWidth = function() {
                  var e = document.createElement("div");
                  (e.className = h.SCROLLBAR_MEASURER),
                    document.body.appendChild(e);
                  var t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                }),
                (s._jQueryInterface = function(t, n) {
                  return this.each(function() {
                    var r = e(this).data(i),
                      o = a(
                        {},
                        d,
                        e(this).data(),
                        "object" == typeof t && t ? t : {}
                      );
                    if (
                      (r || ((r = new s(this, o)), e(this).data(i, r)),
                      "string" == typeof t)
                    ) {
                      if ("undefined" == typeof r[t])
                        throw new TypeError('No method named "' + t + '"');
                      r[t](n);
                    } else o.show && r.show(n);
                  });
                }),
                r(s, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return d;
                    }
                  }
                ]),
                s
              );
            })();
          return (
            e(document).on(p.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
              var n,
                r = this,
                o = l.getSelectorFromElement(this);
              o && (n = document.querySelector(o));
              var s = e(n).data(i)
                ? "toggle"
                : a({}, e(n).data(), e(this).data());
              ("A" !== this.tagName && "AREA" !== this.tagName) ||
                t.preventDefault();
              var u = e(n).one(p.SHOW, function(t) {
                t.isDefaultPrevented() ||
                  u.one(p.HIDDEN, function() {
                    e(r).is(":visible") && r.focus();
                  });
              });
              g._jQueryInterface.call(e(n), s, this);
            }),
            (e.fn[t] = g._jQueryInterface),
            (e.fn[t].Constructor = g),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = u), g._jQueryInterface;
            }),
            g
          );
        })(t),
        m = (function(e) {
          var t = "tooltip",
            i = "4.1.3",
            o = "bs.tooltip",
            s = "." + o,
            u = e.fn[t],
            c = "bs-tooltip",
            d = new RegExp("(^|\\s)" + c + "\\S+", "g"),
            f = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)"
            },
            p = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left"
            },
            h = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent"
            },
            m = { SHOW: "show", OUT: "out" },
            g = {
              HIDE: "hide" + s,
              HIDDEN: "hidden" + s,
              SHOW: "show" + s,
              SHOWN: "shown" + s,
              INSERTED: "inserted" + s,
              CLICK: "click" + s,
              FOCUSIN: "focusin" + s,
              FOCUSOUT: "focusout" + s,
              MOUSEENTER: "mouseenter" + s,
              MOUSELEAVE: "mouseleave" + s
            },
            v = { FADE: "fade", SHOW: "show" },
            y = {
              TOOLTIP: ".tooltip",
              TOOLTIP_INNER: ".tooltip-inner",
              ARROW: ".arrow"
            },
            b = {
              HOVER: "hover",
              FOCUS: "focus",
              CLICK: "click",
              MANUAL: "manual"
            },
            _ = (function() {
              function u(e, t) {
                if ("undefined" == typeof n)
                  throw new TypeError(
                    "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                  );
                (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = e),
                  (this.config = this._getConfig(t)),
                  (this.tip = null),
                  this._setListeners();
              }
              var _ = u.prototype;
              return (
                (_.enable = function() {
                  this._isEnabled = !0;
                }),
                (_.disable = function() {
                  this._isEnabled = !1;
                }),
                (_.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled;
                }),
                (_.toggle = function(t) {
                  if (this._isEnabled)
                    if (t) {
                      var n = this.constructor.DATA_KEY,
                        i = e(t.currentTarget).data(n);
                      i ||
                        ((i = new this.constructor(
                          t.currentTarget,
                          this._getDelegateConfig()
                        )),
                        e(t.currentTarget).data(n, i)),
                        (i._activeTrigger.click = !i._activeTrigger.click),
                        i._isWithActiveTrigger()
                          ? i._enter(null, i)
                          : i._leave(null, i);
                    } else {
                      if (e(this.getTipElement()).hasClass(v.SHOW))
                        return void this._leave(null, this);
                      this._enter(null, this);
                    }
                }),
                (_.dispose = function() {
                  clearTimeout(this._timeout),
                    e.removeData(this.element, this.constructor.DATA_KEY),
                    e(this.element).off(this.constructor.EVENT_KEY),
                    e(this.element)
                      .closest(".modal")
                      .off("hide.bs.modal"),
                    this.tip && e(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (_.show = function() {
                  var t = this;
                  if ("none" === e(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                  var i = e.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var r = e.contains(
                      this.element.ownerDocument.documentElement,
                      this.element
                    );
                    if (i.isDefaultPrevented() || !r) return;
                    var o = this.getTipElement(),
                      a = l.getUID(this.constructor.NAME);
                    o.setAttribute("id", a),
                      this.element.setAttribute("aria-describedby", a),
                      this.setContent(),
                      this.config.animation && e(o).addClass(v.FADE);
                    var s =
                        "function" == typeof this.config.placement
                          ? this.config.placement.call(this, o, this.element)
                          : this.config.placement,
                      u = this._getAttachment(s);
                    this.addAttachmentClass(u);
                    var c =
                      this.config.container === !1
                        ? document.body
                        : e(document).find(this.config.container);
                    e(o).data(this.constructor.DATA_KEY, this),
                      e.contains(
                        this.element.ownerDocument.documentElement,
                        this.tip
                      ) || e(o).appendTo(c),
                      e(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new n(this.element, o, {
                        placement: u,
                        modifiers: {
                          offset: { offset: this.config.offset },
                          flip: { behavior: this.config.fallbackPlacement },
                          arrow: { element: y.ARROW },
                          preventOverflow: {
                            boundariesElement: this.config.boundary
                          }
                        },
                        onCreate: function(e) {
                          e.originalPlacement !== e.placement &&
                            t._handlePopperPlacementChange(e);
                        },
                        onUpdate: function(e) {
                          t._handlePopperPlacementChange(e);
                        }
                      })),
                      e(o).addClass(v.SHOW),
                      "ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .on("mouseover", null, e.noop);
                    var d = function() {
                      t.config.animation && t._fixTransition();
                      var n = t._hoverState;
                      (t._hoverState = null),
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        n === m.OUT && t._leave(null, t);
                    };
                    if (e(this.tip).hasClass(v.FADE)) {
                      var f = l.getTransitionDurationFromElement(this.tip);
                      e(this.tip)
                        .one(l.TRANSITION_END, d)
                        .emulateTransitionEnd(f);
                    } else d();
                  }
                }),
                (_.hide = function(t) {
                  var n = this,
                    i = this.getTipElement(),
                    r = e.Event(this.constructor.Event.HIDE),
                    o = function() {
                      n._hoverState !== m.SHOW &&
                        i.parentNode &&
                        i.parentNode.removeChild(i),
                        n._cleanTipClass(),
                        n.element.removeAttribute("aria-describedby"),
                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                        null !== n._popper && n._popper.destroy(),
                        t && t();
                    };
                  if ((e(this.element).trigger(r), !r.isDefaultPrevented())) {
                    if (
                      (e(i).removeClass(v.SHOW),
                      "ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .off("mouseover", null, e.noop),
                      (this._activeTrigger[b.CLICK] = !1),
                      (this._activeTrigger[b.FOCUS] = !1),
                      (this._activeTrigger[b.HOVER] = !1),
                      e(this.tip).hasClass(v.FADE))
                    ) {
                      var a = l.getTransitionDurationFromElement(i);
                      e(i)
                        .one(l.TRANSITION_END, o)
                        .emulateTransitionEnd(a);
                    } else o();
                    this._hoverState = "";
                  }
                }),
                (_.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (_.isWithContent = function() {
                  return Boolean(this.getTitle());
                }),
                (_.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass(c + "-" + t);
                }),
                (_.getTipElement = function() {
                  return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                  );
                }),
                (_.setContent = function() {
                  var t = this.getTipElement();
                  this.setElementContent(
                    e(t.querySelectorAll(y.TOOLTIP_INNER)),
                    this.getTitle()
                  ),
                    e(t).removeClass(v.FADE + " " + v.SHOW);
                }),
                (_.setElementContent = function(t, n) {
                  var i = this.config.html;
                  "object" == typeof n && (n.nodeType || n.jquery)
                    ? i
                      ? e(n)
                          .parent()
                          .is(t) || t.empty().append(n)
                      : t.text(e(n).text())
                    : t[i ? "html" : "text"](n);
                }),
                (_.getTitle = function() {
                  var e = this.element.getAttribute("data-original-title");
                  return (
                    e ||
                      (e =
                        "function" == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    e
                  );
                }),
                (_._getAttachment = function(e) {
                  return p[e.toUpperCase()];
                }),
                (_._setListeners = function() {
                  var t = this,
                    n = this.config.trigger.split(" ");
                  n.forEach(function(n) {
                    if ("click" === n)
                      e(t.element).on(
                        t.constructor.Event.CLICK,
                        t.config.selector,
                        function(e) {
                          return t.toggle(e);
                        }
                      );
                    else if (n !== b.MANUAL) {
                      var i =
                          n === b.HOVER
                            ? t.constructor.Event.MOUSEENTER
                            : t.constructor.Event.FOCUSIN,
                        r =
                          n === b.HOVER
                            ? t.constructor.Event.MOUSELEAVE
                            : t.constructor.Event.FOCUSOUT;
                      e(t.element)
                        .on(i, t.config.selector, function(e) {
                          return t._enter(e);
                        })
                        .on(r, t.config.selector, function(e) {
                          return t._leave(e);
                        });
                    }
                    e(t.element)
                      .closest(".modal")
                      .on("hide.bs.modal", function() {
                        return t.hide();
                      });
                  }),
                    this.config.selector
                      ? (this.config = a({}, this.config, {
                          trigger: "manual",
                          selector: ""
                        }))
                      : this._fixTitle();
                }),
                (_._fixTitle = function() {
                  var e = typeof this.element.getAttribute(
                    "data-original-title"
                  );
                  (this.element.getAttribute("title") || "string" !== e) &&
                    (this.element.setAttribute(
                      "data-original-title",
                      this.element.getAttribute("title") || ""
                    ),
                    this.element.setAttribute("title", ""));
                }),
                (_._enter = function(t, n) {
                  var i = this.constructor.DATA_KEY;
                  return (
                    (n = n || e(t.currentTarget).data(i)),
                    n ||
                      ((n = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      e(t.currentTarget).data(i, n)),
                    t &&
                      (n._activeTrigger[
                        "focusin" === t.type ? b.FOCUS : b.HOVER
                      ] = !0),
                    e(n.getTipElement()).hasClass(v.SHOW) ||
                    n._hoverState === m.SHOW
                      ? void (n._hoverState = m.SHOW)
                      : (clearTimeout(n._timeout),
                        (n._hoverState = m.SHOW),
                        n.config.delay && n.config.delay.show
                          ? void (n._timeout = setTimeout(function() {
                              n._hoverState === m.SHOW && n.show();
                            }, n.config.delay.show))
                          : void n.show())
                  );
                }),
                (_._leave = function(t, n) {
                  var i = this.constructor.DATA_KEY;
                  if (
                    ((n = n || e(t.currentTarget).data(i)),
                    n ||
                      ((n = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      e(t.currentTarget).data(i, n)),
                    t &&
                      (n._activeTrigger[
                        "focusout" === t.type ? b.FOCUS : b.HOVER
                      ] = !1),
                    !n._isWithActiveTrigger())
                  )
                    return (
                      clearTimeout(n._timeout),
                      (n._hoverState = m.OUT),
                      n.config.delay && n.config.delay.hide
                        ? void (n._timeout = setTimeout(function() {
                            n._hoverState === m.OUT && n.hide();
                          }, n.config.delay.hide))
                        : void n.hide()
                    );
                }),
                (_._isWithActiveTrigger = function() {
                  for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                  return !1;
                }),
                (_._getConfig = function(n) {
                  return (
                    (n = a(
                      {},
                      this.constructor.Default,
                      e(this.element).data(),
                      "object" == typeof n && n ? n : {}
                    )),
                    "number" == typeof n.delay &&
                      (n.delay = { show: n.delay, hide: n.delay }),
                    "number" == typeof n.title &&
                      (n.title = n.title.toString()),
                    "number" == typeof n.content &&
                      (n.content = n.content.toString()),
                    l.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (_._getDelegateConfig = function() {
                  var e = {};
                  if (this.config)
                    for (var t in this.config)
                      this.constructor.Default[t] !== this.config[t] &&
                        (e[t] = this.config[t]);
                  return e;
                }),
                (_._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                    n = t.attr("class").match(d);
                  null !== n && n.length && t.removeClass(n.join(""));
                }),
                (_._handlePopperPlacementChange = function(e) {
                  var t = e.instance;
                  (this.tip = t.popper),
                    this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(e.placement));
                }),
                (_._fixTransition = function() {
                  var t = this.getTipElement(),
                    n = this.config.animation;
                  null === t.getAttribute("x-placement") &&
                    (e(t).removeClass(v.FADE),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = n));
                }),
                (u._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(o),
                      i = "object" == typeof t && t;
                    if (
                      (n || !/dispose|hide/.test(t)) &&
                      (n || ((n = new u(this, i)), e(this).data(o, n)),
                      "string" == typeof t)
                    ) {
                      if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(u, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return i;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return h;
                    }
                  },
                  {
                    key: "NAME",
                    get: function() {
                      return t;
                    }
                  },
                  {
                    key: "DATA_KEY",
                    get: function() {
                      return o;
                    }
                  },
                  {
                    key: "Event",
                    get: function() {
                      return g;
                    }
                  },
                  {
                    key: "EVENT_KEY",
                    get: function() {
                      return s;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return f;
                    }
                  }
                ]),
                u
              );
            })();
          return (
            (e.fn[t] = _._jQueryInterface),
            (e.fn[t].Constructor = _),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = u), _._jQueryInterface;
            }),
            _
          );
        })(t, n),
        g = (function(e) {
          var t = "popover",
            n = "4.1.3",
            i = "bs.popover",
            o = "." + i,
            l = e.fn[t],
            u = "bs-popover",
            c = new RegExp("(^|\\s)" + u + "\\S+", "g"),
            d = a({}, m.Default, {
              placement: "right",
              trigger: "click",
              content: "",
              template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            f = a({}, m.DefaultType, { content: "(string|element|function)" }),
            p = { FADE: "fade", SHOW: "show" },
            h = { TITLE: ".popover-header", CONTENT: ".popover-body" },
            g = {
              HIDE: "hide" + o,
              HIDDEN: "hidden" + o,
              SHOW: "show" + o,
              SHOWN: "shown" + o,
              INSERTED: "inserted" + o,
              CLICK: "click" + o,
              FOCUSIN: "focusin" + o,
              FOCUSOUT: "focusout" + o,
              MOUSEENTER: "mouseenter" + o,
              MOUSELEAVE: "mouseleave" + o
            },
            v = (function(a) {
              function l() {
                return a.apply(this, arguments) || this;
              }
              s(l, a);
              var m = l.prototype;
              return (
                (m.isWithContent = function() {
                  return this.getTitle() || this._getContent();
                }),
                (m.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass(u + "-" + t);
                }),
                (m.getTipElement = function() {
                  return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                  );
                }),
                (m.setContent = function() {
                  var t = e(this.getTipElement());
                  this.setElementContent(t.find(h.TITLE), this.getTitle());
                  var n = this._getContent();
                  "function" == typeof n && (n = n.call(this.element)),
                    this.setElementContent(t.find(h.CONTENT), n),
                    t.removeClass(p.FADE + " " + p.SHOW);
                }),
                (m._getContent = function() {
                  return (
                    this.element.getAttribute("data-content") ||
                    this.config.content
                  );
                }),
                (m._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                    n = t.attr("class").match(c);
                  null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (l._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(i),
                      r = "object" == typeof t ? t : null;
                    if (
                      (n || !/destroy|hide/.test(t)) &&
                      (n || ((n = new l(this, r)), e(this).data(i, n)),
                      "string" == typeof t)
                    ) {
                      if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(l, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return d;
                    }
                  },
                  {
                    key: "NAME",
                    get: function() {
                      return t;
                    }
                  },
                  {
                    key: "DATA_KEY",
                    get: function() {
                      return i;
                    }
                  },
                  {
                    key: "Event",
                    get: function() {
                      return g;
                    }
                  },
                  {
                    key: "EVENT_KEY",
                    get: function() {
                      return o;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return f;
                    }
                  }
                ]),
                l
              );
            })(m);
          return (
            (e.fn[t] = v._jQueryInterface),
            (e.fn[t].Constructor = v),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = l), v._jQueryInterface;
            }),
            v
          );
        })(t),
        v = (function(e) {
          var t = "scrollspy",
            n = "4.1.3",
            i = "bs.scrollspy",
            o = "." + i,
            s = ".data-api",
            u = e.fn[t],
            c = { offset: 10, method: "auto", target: "" },
            d = {
              offset: "number",
              method: "string",
              target: "(string|element)"
            },
            f = {
              ACTIVATE: "activate" + o,
              SCROLL: "scroll" + o,
              LOAD_DATA_API: "load" + o + s
            },
            p = {
              DROPDOWN_ITEM: "dropdown-item",
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active"
            },
            h = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              NAV_LIST_GROUP: ".nav, .list-group",
              NAV_LINKS: ".nav-link",
              NAV_ITEMS: ".nav-item",
              LIST_ITEMS: ".list-group-item",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            m = { OFFSET: "offset", POSITION: "position" },
            g = (function() {
              function s(t, n) {
                var i = this;
                (this._element = t),
                  (this._scrollElement = "BODY" === t.tagName ? window : t),
                  (this._config = this._getConfig(n)),
                  (this._selector =
                    this._config.target +
                    " " +
                    h.NAV_LINKS +
                    "," +
                    (this._config.target + " " + h.LIST_ITEMS + ",") +
                    (this._config.target + " " + h.DROPDOWN_ITEMS)),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  e(this._scrollElement).on(f.SCROLL, function(e) {
                    return i._process(e);
                  }),
                  this.refresh(),
                  this._process();
              }
              var u = s.prototype;
              return (
                (u.refresh = function() {
                  var t = this,
                    n =
                      this._scrollElement === this._scrollElement.window
                        ? m.OFFSET
                        : m.POSITION,
                    i =
                      "auto" === this._config.method ? n : this._config.method,
                    r = i === m.POSITION ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight());
                  var o = [].slice.call(
                    document.querySelectorAll(this._selector)
                  );
                  o.map(function(t) {
                    var n,
                      o = l.getSelectorFromElement(t);
                    if ((o && (n = document.querySelector(o)), n)) {
                      var a = n.getBoundingClientRect();
                      if (a.width || a.height) return [e(n)[i]().top + r, o];
                    }
                    return null;
                  })
                    .filter(function(e) {
                      return e;
                    })
                    .sort(function(e, t) {
                      return e[0] - t[0];
                    })
                    .forEach(function(e) {
                      t._offsets.push(e[0]), t._targets.push(e[1]);
                    });
                }),
                (u.dispose = function() {
                  e.removeData(this._element, i),
                    e(this._scrollElement).off(o),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (u._getConfig = function(n) {
                  if (
                    ((n = a({}, c, "object" == typeof n && n ? n : {})),
                    "string" != typeof n.target)
                  ) {
                    var i = e(n.target).attr("id");
                    i || ((i = l.getUID(t)), e(n.target).attr("id", i)),
                      (n.target = "#" + i);
                  }
                  return l.typeCheckConfig(t, n, d), n;
                }),
                (u._getScrollTop = function() {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (u._getScrollHeight = function() {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    )
                  );
                }),
                (u._getOffsetHeight = function() {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (u._process = function() {
                  var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                  if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                    var i = this._targets[this._targets.length - 1];
                    return void (this._activeTarget !== i && this._activate(i));
                  }
                  if (
                    this._activeTarget &&
                    e < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var r = this._offsets.length, o = r; o--; ) {
                    var a =
                      this._activeTarget !== this._targets[o] &&
                      e >= this._offsets[o] &&
                      ("undefined" == typeof this._offsets[o + 1] ||
                        e < this._offsets[o + 1]);
                    a && this._activate(this._targets[o]);
                  }
                }),
                (u._activate = function(t) {
                  (this._activeTarget = t), this._clear();
                  var n = this._selector.split(",");
                  n = n.map(function(e) {
                    return (
                      e +
                      '[data-target="' +
                      t +
                      '"],' +
                      (e + '[href="' + t + '"]')
                    );
                  });
                  var i = e(
                    [].slice.call(document.querySelectorAll(n.join(",")))
                  );
                  i.hasClass(p.DROPDOWN_ITEM)
                    ? (i
                        .closest(h.DROPDOWN)
                        .find(h.DROPDOWN_TOGGLE)
                        .addClass(p.ACTIVE),
                      i.addClass(p.ACTIVE))
                    : (i.addClass(p.ACTIVE),
                      i
                        .parents(h.NAV_LIST_GROUP)
                        .prev(h.NAV_LINKS + ", " + h.LIST_ITEMS)
                        .addClass(p.ACTIVE),
                      i
                        .parents(h.NAV_LIST_GROUP)
                        .prev(h.NAV_ITEMS)
                        .children(h.NAV_LINKS)
                        .addClass(p.ACTIVE)),
                    e(this._scrollElement).trigger(f.ACTIVATE, {
                      relatedTarget: t
                    });
                }),
                (u._clear = function() {
                  var t = [].slice.call(
                    document.querySelectorAll(this._selector)
                  );
                  e(t)
                    .filter(h.ACTIVE)
                    .removeClass(p.ACTIVE);
                }),
                (s._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(i),
                      r = "object" == typeof t && t;
                    if (
                      (n || ((n = new s(this, r)), e(this).data(i, n)),
                      "string" == typeof t)
                    ) {
                      if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(s, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return c;
                    }
                  }
                ]),
                s
              );
            })();
          return (
            e(window).on(f.LOAD_DATA_API, function() {
              for (
                var t = [].slice.call(document.querySelectorAll(h.DATA_SPY)),
                  n = t.length,
                  i = n;
                i--;

              ) {
                var r = e(t[i]);
                g._jQueryInterface.call(r, r.data());
              }
            }),
            (e.fn[t] = g._jQueryInterface),
            (e.fn[t].Constructor = g),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = u), g._jQueryInterface;
            }),
            g
          );
        })(t),
        y = (function(e) {
          var t = "tab",
            n = "4.1.3",
            i = "bs.tab",
            o = "." + i,
            a = ".data-api",
            s = e.fn[t],
            u = {
              HIDE: "hide" + o,
              HIDDEN: "hidden" + o,
              SHOW: "show" + o,
              SHOWN: "shown" + o,
              CLICK_DATA_API: "click" + o + a
            },
            c = {
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
              DISABLED: "disabled",
              FADE: "fade",
              SHOW: "show"
            },
            d = {
              DROPDOWN: ".dropdown",
              NAV_LIST_GROUP: ".nav, .list-group",
              ACTIVE: ".active",
              ACTIVE_UL: "> li > .active",
              DATA_TOGGLE:
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              DROPDOWN_TOGGLE: ".dropdown-toggle",
              DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            },
            f = (function() {
              function t(e) {
                this._element = e;
              }
              var o = t.prototype;
              return (
                (o.show = function() {
                  var t = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE &&
                        e(this._element).hasClass(c.ACTIVE)) ||
                      e(this._element).hasClass(c.DISABLED)
                    )
                  ) {
                    var n,
                      i,
                      r = e(this._element).closest(d.NAV_LIST_GROUP)[0],
                      o = l.getSelectorFromElement(this._element);
                    if (r) {
                      var a = "UL" === r.nodeName ? d.ACTIVE_UL : d.ACTIVE;
                      (i = e.makeArray(e(r).find(a))), (i = i[i.length - 1]);
                    }
                    var s = e.Event(u.HIDE, { relatedTarget: this._element }),
                      f = e.Event(u.SHOW, { relatedTarget: i });
                    if (
                      (i && e(i).trigger(s),
                      e(this._element).trigger(f),
                      !f.isDefaultPrevented() && !s.isDefaultPrevented())
                    ) {
                      o && (n = document.querySelector(o)),
                        this._activate(this._element, r);
                      var p = function() {
                        var n = e.Event(u.HIDDEN, {
                            relatedTarget: t._element
                          }),
                          r = e.Event(u.SHOWN, { relatedTarget: i });
                        e(i).trigger(n), e(t._element).trigger(r);
                      };
                      n ? this._activate(n, n.parentNode, p) : p();
                    }
                  }
                }),
                (o.dispose = function() {
                  e.removeData(this._element, i), (this._element = null);
                }),
                (o._activate = function(t, n, i) {
                  var r,
                    o = this;
                  r =
                    "UL" === n.nodeName
                      ? e(n).find(d.ACTIVE_UL)
                      : e(n).children(d.ACTIVE);
                  var a = r[0],
                    s = i && a && e(a).hasClass(c.FADE),
                    u = function() {
                      return o._transitionComplete(t, a, i);
                    };
                  if (a && s) {
                    var f = l.getTransitionDurationFromElement(a);
                    e(a)
                      .one(l.TRANSITION_END, u)
                      .emulateTransitionEnd(f);
                  } else u();
                }),
                (o._transitionComplete = function(t, n, i) {
                  if (n) {
                    e(n).removeClass(c.SHOW + " " + c.ACTIVE);
                    var r = e(n.parentNode).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                    r && e(r).removeClass(c.ACTIVE),
                      "tab" === n.getAttribute("role") &&
                        n.setAttribute("aria-selected", !1);
                  }
                  if (
                    (e(t).addClass(c.ACTIVE),
                    "tab" === t.getAttribute("role") &&
                      t.setAttribute("aria-selected", !0),
                    l.reflow(t),
                    e(t).addClass(c.SHOW),
                    t.parentNode && e(t.parentNode).hasClass(c.DROPDOWN_MENU))
                  ) {
                    var o = e(t).closest(d.DROPDOWN)[0];
                    if (o) {
                      var a = [].slice.call(
                        o.querySelectorAll(d.DROPDOWN_TOGGLE)
                      );
                      e(a).addClass(c.ACTIVE);
                    }
                    t.setAttribute("aria-expanded", !0);
                  }
                  i && i();
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var r = e(this),
                      o = r.data(i);
                    if (
                      (o || ((o = new t(this)), r.data(i, o)),
                      "string" == typeof n)
                    ) {
                      if ("undefined" == typeof o[n])
                        throw new TypeError('No method named "' + n + '"');
                      o[n]();
                    }
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return n;
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function(t) {
              t.preventDefault(), f._jQueryInterface.call(e(this), "show");
            }),
            (e.fn[t] = f._jQueryInterface),
            (e.fn[t].Constructor = f),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = s), f._jQueryInterface;
            }),
            f
          );
        })(t);
      !(function(e) {
        if ("undefined" == typeof e)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = e.fn.jquery.split(" ")[0].split("."),
          n = 1,
          i = 2,
          r = 9,
          o = 1,
          a = 4;
        if (
          (t[0] < i && t[1] < r) ||
          (t[0] === n && t[1] === r && t[2] < o) ||
          t[0] >= a
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      })(t),
        (e.Util = l),
        (e.Alert = u),
        (e.Button = c),
        (e.Carousel = d),
        (e.Collapse = f),
        (e.Dropdown = p),
        (e.Modal = h),
        (e.Popover = g),
        (e.Scrollspy = v),
        (e.Tab = y),
        (e.Tooltip = m),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  },
  function(e, t) {
    !(function(e) {
      var t = "waitForImages";
      (e.waitForImages = {
        hasImageProperties: [
          "backgroundImage",
          "listStyleImage",
          "borderImage",
          "borderCornerImage",
          "cursor"
        ]
      }),
        (e.expr[":"].uncached = function(t) {
          if (!e(t).is('img[src!=""]')) return !1;
          var n = new Image();
          return (n.src = t.src), !n.complete;
        }),
        (e.fn.waitForImages = function(n, i, r) {
          var o = 0,
            a = 0;
          if (
            (e.isPlainObject(arguments[0]) &&
              ((r = arguments[0].waitForAll),
              (i = arguments[0].each),
              (n = arguments[0].finished)),
            (n = n || e.noop),
            (i = i || e.noop),
            (r = !!r),
            !e.isFunction(n) || !e.isFunction(i))
          )
            throw new TypeError("An invalid callback was supplied.");
          return this.each(function() {
            var s = e(this),
              l = [],
              u = e.waitForImages.hasImageProperties || [],
              c = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            r
              ? s
                  .find("*")
                  .addBack()
                  .each(function() {
                    var t = e(this);
                    t.is("img:uncached") &&
                      l.push({ src: t.attr("src"), element: t[0] }),
                      e.each(u, function(e, n) {
                        var i,
                          r = t.css(n);
                        if (!r) return !0;
                        for (; (i = c.exec(r)); )
                          l.push({ src: i[2], element: t[0] });
                      });
                  })
              : s.find("img:uncached").each(function() {
                  l.push({ src: this.src, element: this });
                }),
              (o = l.length),
              (a = 0),
              0 === o && n.call(s[0]),
              e.each(l, function(r, l) {
                var u = new Image();
                e(u).on("load." + t + " error." + t, function(e) {
                  return (
                    a++,
                    i.call(l.element, a, o, "load" == e.type),
                    a == o ? (n.call(s[0]), !1) : void 0
                  );
                }),
                  (u.src = l.src);
              });
          });
        });
    })(jQuery);
  },
  function(e, t) {
    !(function(e) {
      function t() {
        o = !1;
        for (var t = 0; t < i.length; t++) {
          var r = e(i[t]).filter(function() {
            return e(this).is(":appeared");
          });
          if ((r.trigger("appear", [r]), n)) {
            var a = n.not(r);
            a.trigger("disappear", [a]);
          }
          n = r;
        }
      }
      var n,
        i = [],
        r = !1,
        o = !1,
        a = { interval: 250, force_process: !1 },
        s = e(window);
      (e.expr[":"].appeared = function(t) {
        var n = e(t);
        if (!n.is(":visible")) return !1;
        var i = s.scrollLeft(),
          r = s.scrollTop(),
          o = n.offset(),
          a = o.left,
          l = o.top;
        return (
          l + n.height() >= r &&
          l - (n.data("appear-top-offset") || 0) <= r + s.height() &&
          a + n.width() >= i &&
          a - (n.data("appear-left-offset") || 0) <= i + s.width()
        );
      }),
        e.fn.extend({
          appear: function(n) {
            var s = e.extend({}, a, n || {}),
              l = this.selector || this;
            if (!r) {
              var u = function() {
                o || ((o = !0), setTimeout(t, s.interval));
              };
              e(window)
                .scroll(u)
                .resize(u),
                (r = !0);
            }
            return (
              s.force_process && setTimeout(t, s.interval), i.push(l), e(l)
            );
          }
        }),
        e.extend({
          force_appear: function() {
            return !!r && (t(), !0);
          }
        });
    })(jQuery),
      (function(e) {
        "$:nomunge";
        function t(t) {
          function i() {
            t ? a.removeData(t) : f && delete n[f];
          }
          function o() {
            l.id = setTimeout(function() {
              l.fn();
            }, p);
          }
          var a,
            s = this,
            l = {},
            u = t ? e.fn : e,
            c = arguments,
            d = 4,
            f = c[1],
            p = c[2],
            h = c[3];
          if (
            ("string" != typeof f && (d--, (f = t = 0), (p = c[1]), (h = c[2])),
            t
              ? ((a = s.eq(0)), a.data(t, (l = a.data(t) || {})))
              : f && (l = n[f] || (n[f] = {})),
            l.id && clearTimeout(l.id),
            delete l.id,
            h)
          )
            (l.fn = function(e) {
              "string" == typeof h && (h = u[h]),
                h.apply(s, r.call(c, d)) !== !0 || e ? i() : o();
            }),
              o();
          else {
            if (l.fn) return void 0 === p ? i() : l.fn(p === !1), !0;
            i();
          }
        }
        var n = {},
          i = "doTimeout",
          r = Array.prototype.slice;
        (e[i] = function() {
          return t.apply(window, [0].concat(r.call(arguments)));
        }),
          (e.fn[i] = function() {
            var e = r.call(arguments),
              n = t.apply(this, [i + e[0]].concat(e));
            return "number" == typeof e[0] || "number" == typeof e[1]
              ? this
              : n;
          });
      })(jQuery),
      $(".animatedParent").appear(),
      $(".animatedClick").click(function() {
        var e = $(this).attr("data-target");
        if (void 0 != $(this).attr("data-sequence")) {
          var t = $("." + e + ":first").attr("data-id"),
            n = $("." + e + ":last").attr("data-id"),
            i = t;
          $("." + e + "[data-id=" + i + "]").hasClass("go")
            ? ($("." + e + "[data-id=" + i + "]").addClass("goAway"),
              $("." + e + "[data-id=" + i + "]").removeClass("go"))
            : ($("." + e + "[data-id=" + i + "]").addClass("go"),
              $("." + e + "[data-id=" + i + "]").removeClass("goAway")),
            i++,
            (delay = Number($(this).attr("data-sequence"))),
            $.doTimeout(delay, function() {
              if (
                (console.log(n),
                $("." + e + "[data-id=" + i + "]").hasClass("go")
                  ? ($("." + e + "[data-id=" + i + "]").addClass("goAway"),
                    $("." + e + "[data-id=" + i + "]").removeClass("go"))
                  : ($("." + e + "[data-id=" + i + "]").addClass("go"),
                    $("." + e + "[data-id=" + i + "]").removeClass("goAway")),
                ++i,
                i <= n)
              )
                return !0;
            });
        } else
          $("." + e).hasClass("go")
            ? ($("." + e).addClass("goAway"), $("." + e).removeClass("go"))
            : ($("." + e).addClass("go"), $("." + e).removeClass("goAway"));
      }),
      $(document.body).on("appear", ".animatedParent", function(e, t) {
        var n = $(this).find(".animated"),
          i = $(this);
        if (void 0 != i.attr("data-sequence")) {
          var r = $(this)
              .find(".animated:first")
              .attr("data-id"),
            o = r,
            a = $(this)
              .find(".animated:last")
              .attr("data-id");
          $(i)
            .find(".animated[data-id=" + o + "]")
            .addClass("go"),
            o++,
            (delay = Number(i.attr("data-sequence"))),
            $.doTimeout(delay, function() {
              if (
                ($(i)
                  .find(".animated[data-id=" + o + "]")
                  .addClass("go"),
                ++o,
                o <= a)
              )
                return !0;
            });
        } else n.addClass("go");
      }),
      $(document.body).on("disappear", ".animatedParent", function(e, t) {
        $(this).hasClass("animateOnce") ||
          $(this)
            .find(".animated")
            .removeClass("go");
      }),
      $(window).on("load", function() {
        $.force_appear();
      });
  },
  function(e, t, n) {
    n(11),
      jQuery(function(e) {
        "use strict";
        function t() {
          (n = e(window).width()),
            e(".nav-offcanvas").length &&
              e(".paper-nav-toggle").removeClass("dl-trigger"),
            (e(".nav-offcanvas").length && n <= 1023) ||
            e(".nav-offcanvas-desktop").length
              ? (e("body").addClass("sidebar-collapse"),
                e(".dl-menu").addClass("dl-menuopen"),
                e(".paper-nav-toggle").removeClass("dl-trigger"),
                e(".nav-offcanvas .paper_menu").addClass(
                  "main-sidebar shadow1 fixed offcanvas"
                ))
              : e(".nav-offcanvas .paper_menu").removeClass(
                  "main-sidebar shadow1 fixed offcanvas"
                ),
            n <= 1023 || e(".mini-nav").length
              ? (e(".responsive-menu")
                  .removeClass("xv-menuwrapper")
                  .addClass("dl-menuwrapper"),
                e(".user-avatar").removeClass("pull-right"),
                e(".lg-submenu").addClass("dl-submenu"))
              : (e(".responsive-menu")
                  .removeClass("dl-menuwrapper")
                  .addClass("xv-menuwrapper"),
                e(".lg-submenu").removeClass("dl-submenu"),
                e(".user-avatar").addClass("pull-right"));
        }
        var n = e(window).width();
        t(),
          e(window).on("load resize", function() {
            t();
          }),
          e("#dl-menu").dlmenu({
            animationClasses: {
              classin: "dl-animate-in-2",
              classout: "dl-animate-out-2"
            }
          });
      });
  },
  function(e, t) {
    !(function(e, t, n) {
      "use strict";
      var i = t.Modernizr,
        r = e("body");
      (e.DLMenu = function(t, n) {
        (this.$el = e(n)), this._init(t);
      }),
        (e.DLMenu.defaults = {
          animationClasses: {
            classin: "dl-animate-in-1",
            classout: "dl-animate-out-1"
          },
          onLevelClick: function(e, t) {
            return !1;
          },
          onLinkClick: function(e, t) {
            return !1;
          }
        }),
        (e.DLMenu.prototype = {
          _init: function(t) {
            (this.options = e.extend(!0, {}, e.DLMenu.defaults, t)),
              this._config();
            var n = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd",
                msAnimation: "MSAnimationEnd",
                animation: "animationend"
              },
              r = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
              };
            (this.animEndEventName = n[i.prefixed("animation")] + ".dlmenu"),
              (this.transEndEventName =
                r[i.prefixed("transition")] + ".dlmenu"),
              (this.supportAnimations = i.cssanimations),
              (this.supportTransitions = i.csstransitions),
              this._initEvents();
          },
          _config: function() {
            (this.open = !1),
              (this.$trigger = e(".dl-trigger")),
              (this.$menu = this.$el.children("ul.dl-menu")),
              (this.$menuitems = this.$menu.find("li:not(.dl-back)")),
              this.$el
                .find("ul.dl-submenu,ul.lg-submenu")
                .prepend('<li class="dl-back"><a href="#">back</a></li>'),
              (this.$back = this.$menu.find("li.dl-back"));
          },
          _initEvents: function() {
            var t = this;
            this.$trigger.on("click.dlmenu", function() {
              return t.open ? t._closeMenu() : t._openMenu(), !1;
            }),
              this.$menuitems.on("click.dlmenu", function(n) {
                e(this)
                  .find("a")
                  .slice(0, 1)
                  .data("toggle") || n.stopPropagation();
                var i = e(this),
                  r = i.children("ul.dl-submenu");
                if (r.length > 0) {
                  var o = r
                      .clone()
                      .css("opacity", 0)
                      .insertAfter(t.$menu),
                    a = function() {
                      t.$menu
                        .off(t.animEndEventName)
                        .removeClass(t.options.animationClasses.classout)
                        .addClass("dl-subview"),
                        i
                          .addClass("dl-subviewopen")
                          .parents(".dl-subviewopen:first")
                          .removeClass("dl-subviewopen")
                          .addClass("dl-subview"),
                        o.remove();
                    };
                  return (
                    setTimeout(function() {
                      o.addClass(t.options.animationClasses.classin),
                        t.$menu.addClass(t.options.animationClasses.classout),
                        t.supportAnimations
                          ? t.$menu.on(t.animEndEventName, a)
                          : a.call(),
                        t.options.onLevelClick(i, i.children("a:first").text());
                    }),
                    !1
                  );
                }
                t.options.onLinkClick(i, n);
              }),
              this.$back.on("click.dlmenu", function(n) {
                var i = e(this),
                  r = i.parents("ul.dl-submenu:first"),
                  o = r.parent(),
                  a = r.clone().insertAfter(t.$menu),
                  s = function() {
                    t.$menu
                      .off(t.animEndEventName)
                      .removeClass(t.options.animationClasses.classin),
                      a.remove();
                  };
                return (
                  setTimeout(function() {
                    a.addClass(t.options.animationClasses.classout),
                      t.$menu.addClass(t.options.animationClasses.classin),
                      t.supportAnimations
                        ? t.$menu.on(t.animEndEventName, s)
                        : s.call(),
                      o.removeClass("dl-subviewopen");
                    var e = i.parents(".dl-subview:first");
                    e.is("li") && e.addClass("dl-subviewopen"),
                      e.removeClass("dl-subview");
                  }),
                  !1
                );
              });
          },
          closeMenu: function() {
            this.open && this._closeMenu();
          },
          _closeMenu: function() {
            var e = this,
              t = function() {
                e.$menu.off(e.transEndEventName), e._resetMenu();
              };
            this.$menu.removeClass("dl-menuopen"),
              this.$menu.addClass("dl-menu-toggle"),
              this.$trigger.removeClass("dl-active"),
              this.supportTransitions
                ? this.$menu.on(this.transEndEventName, t)
                : t.call(),
              (this.open = !1);
          },
          openMenu: function() {
            this.open || this._openMenu();
          },
          _openMenu: function() {
            var t = this;
            r.off("click").on("click.dlmenu", function() {
              t._closeMenu();
            }),
              this.$menu
                .addClass("dl-menuopen dl-menu-toggle")
                .on(this.transEndEventName, function() {
                  e(this).removeClass("dl-menu-toggle");
                }),
              this.$trigger.addClass("dl-active"),
              (this.open = !0);
          },
          _resetMenu: function() {
            this.$menu.removeClass("dl-subview"),
              this.$menuitems.removeClass("dl-subview dl-subviewopen");
          }
        });
      var o = function(e) {
        t.console && t.console.error(e);
      };
      e.fn.dlmenu = function(t) {
        if ("string" == typeof t) {
          var n = Array.prototype.slice.call(arguments, 1);
          this.each(function() {
            var i = e.data(this, "dlmenu");
            return i
              ? e.isFunction(i[t]) && "_" !== t.charAt(0)
                ? void i[t].apply(i, n)
                : void o("no such method '" + t + "' for dlmenu instance")
              : void o(
                  "cannot call methods on dlmenu prior to initialization; attempted to call method '" +
                    t +
                    "'"
                );
          });
        } else
          this.each(function() {
            var n = e.data(this, "dlmenu");
            n ? n._init() : (n = e.data(this, "dlmenu", new e.DLMenu(t, this)));
          });
        return this;
      };
    })(jQuery, window);
  },
  function(e, t) {
    jQuery(function(e) {
      "use strict";
      e(window).width(),
        e(window).height(),
        e(window).scrollTop(),
        e("html"),
        e("body");
      (e(".scroll").length > 0 || e(".scroll a[href^='#']").length > 0) &&
        e('.scroll, .scroll a[href^="#"]').on("click", function() {
          return (
            e("html, body").animate(
              { scrollTop: e(e.attr(this, "href")).offset().top - 30 },
              1500,
              function() {}
            ),
            !1
          );
        });
    });
  },
  function(e, t, n) {
    function i() {
      "use strict";
      var e = $(".slimScroll");
      e.length &&
        e.each(function() {
          var e = $(this),
            t = e.data();
          e.slimscroll({
            height: t.height ? t.height + "px" : $(window).height() + "px",
            color: t.color ? t.color : "rgba(0,0,0,0.95)",
            size: t.size ? t.size + "px" : "5px"
          });
        }),
        ($.PaperPanel.layout = {
          activate: function() {
            var e = this;
            e.fix(),
              e.fixSidebar(),
              $(window, ".wrapper").resize(function() {
                e.fix(), e.fixSidebar();
              });
          },
          fix: function() {
            var e =
                $(".main-header").outerHeight() +
                $(".main-footer").outerHeight(),
              t = $(window).height(),
              n = $(".sidebar").height();
            if ($("body").hasClass("fixed"))
              $(".content-wrapper, .right-side").css(
                "min-height",
                t - $(".main-footer").outerHeight()
              );
            else {
              var i;
              t >= n
                ? ($(".content-wrapper, .right-side").css("min-height", t - e),
                  (i = t - e))
                : ($(".content-wrapper, .right-side").css("min-height", n),
                  (i = n));
              var r = $($.PaperPanel.options.controlSidebarOptions.selector);
              "undefined" != typeof r &&
                r.height() > i &&
                $(".content-wrapper, .right-side").css(
                  "min-height",
                  r.height()
                );
            }
          },
          fixSidebar: function() {
            return $(".main-sidebar").hasClass("fixed")
              ? ("undefined" == typeof $.fn.slimScroll &&
                  window.console &&
                  window.console.error(
                    "Error: the fixed layout requires the slimscroll plugin!"
                  ),
                void (
                  $.PaperPanel.options.sidebarSlimScroll &&
                  "undefined" != typeof $.fn.slimScroll &&
                  ($(".sidebar")
                    .slimScroll({ destroy: !0 })
                    .height("auto"),
                  $(".sidebar").slimscroll({
                    height: $(window).height() + "px",
                    color: "rgba(0,0,0,0.3)",
                    size: "5px"
                  }))
                ))
              : void (
                  "undefined" != typeof $.fn.slimScroll &&
                  $(".sidebar")
                    .slimScroll({ destroy: !0 })
                    .height("auto")
                );
          }
        }),
        ($.PaperPanel.pushMenu = {
          activate: function(e) {
            var t = $.PaperPanel.options.screenSizes;
            $(document).on("click", e, function(e) {
              e.preventDefault(),
                e.stopPropagation(),
                $(window).width() > t.md - 1
                  ? $("body").hasClass("sidebar-collapse")
                    ? ($("body")
                        .removeClass("sidebar-collapse")
                        .trigger("expanded.pushMenu"),
                      $(".nav-offcanvas-desktop").length &&
                        $("body")
                          .addClass("sidebar-open")
                          .trigger("expanded.pushMenu"))
                    : $("body")
                        .addClass("sidebar-collapse")
                        .trigger("collapsed.pushMenu")
                  : $("body").hasClass("sidebar-open")
                  ? $("body")
                      .removeClass("sidebar-open")
                      .removeClass("sidebar-collapse")
                      .trigger("collapsed.pushMenu")
                  : $("body")
                      .addClass("sidebar-open")
                      .trigger("expanded.pushMenu");
            }),
              $(".content-wrapper").click(function() {
                $(window).width() <= t.md - 1 &&
                  $("body").hasClass("sidebar-open") &&
                  $("body").removeClass("sidebar-open");
              });
          },
          expandOnHover: function() {
            var e = this,
              t = $.PaperPanel.options.screenSizes.sm - 1;
            $(".main-sidebar").hover(
              function() {
                $("body").hasClass("sidebar-mini") &&
                  $("body").hasClass("sidebar-collapse") &&
                  $(window).width() > t &&
                  e.expand();
              },
              function() {
                $("body").hasClass("sidebar-mini") &&
                  $("body").hasClass("sidebar-expanded-on-hover") &&
                  $(window).width() > t &&
                  e.collapse();
              }
            );
          },
          expand: function() {
            $("body")
              .removeClass("sidebar-collapse")
              .addClass("sidebar-expanded-on-hover");
          },
          collapse: function() {
            $("body").hasClass("sidebar-expanded-on-hover") &&
              $("body")
                .removeClass("sidebar-expanded-on-hover")
                .addClass("sidebar-collapse");
          }
        }),
        ($.PaperPanel.tree = function(e) {
          var t = this,
            n = $.PaperPanel.options.animationSpeed;
          $(document).on("click", e + " li a", function(e) {
            var i = $(this),
              r = i.next();
            if (
              r.is(".treeview-menu") &&
              r.is(":visible") &&
              !$("body").hasClass("sidebar-collapse")
            )
              r.slideUp(n, function() {
                r.removeClass("menu-open");
              }),
                r.parent("li").removeClass("active");
            else if (r.is(".treeview-menu") && !r.is(":visible")) {
              var o = i.parents("ul").first(),
                a = o.find("ul:visible").slideUp(n);
              a.removeClass("menu-open");
              var s = i.parent("li");
              r.slideDown(n, function() {
                r.addClass("menu-open"),
                  o.find("li.active").removeClass("active"),
                  s.addClass("active"),
                  t.layout.fix();
              });
            }
            r.is(".treeview-menu") && e.preventDefault();
          });
        });
    }
    n(14),
      ($.PaperPanel = {}),
      ($.PaperPanel.options = {
        animationSpeed: 500,
        sidebarToggleSelector: "[data-toggle='offcanvas']",
        sidebarPushMenu: !0,
        navbarMenuSlimscrollWidth: "3px",
        sidebarSlimScroll: !0,
        controlSidebarOptions: {
          toggleBtnSelector: "[data-toggle='control-sidebar']",
          selector: ".control-sidebar",
          slide: !0
        },
        screenSizes: { xs: 480, sm: 768, md: 1025, lg: 1200 }
      }),
      $(function() {
        "use strict";
        $("body").removeClass("hold-transition"),
          "undefined" != typeof PaperPanelOptions &&
            $.extend(!0, $.PaperPanel.options, PaperPanelOptions);
        var e = $.PaperPanel.options;
        i(),
          $.PaperPanel.layout.activate(),
          $.PaperPanel.tree(".sidebar"),
          e.enableControlSidebar && $.PaperPanel.controlSidebar.activate(),
          e.sidebarPushMenu &&
            $.PaperPanel.pushMenu.activate(e.sidebarToggleSelector),
          $('.btn-group[data-toggle="btn-toggle"]').each(function() {
            var e = $(this);
            $(this)
              .find(".btn")
              .on("click", function(t) {
                e.find(".btn.active").removeClass("active"),
                  $(this).addClass("active"),
                  t.preventDefault();
              });
          });
      });
  },
  function(e, n) {
    !(function(e) {
      e.fn.extend({
        slimScroll: function(n) {
          var i = {
              width: "auto",
              height: "250px",
              size: "7px",
              color: "#000",
              position: "right",
              distance: "1px",
              start: "top",
              opacity: 0.4,
              alwaysVisible: !1,
              disableFadeOut: !1,
              railVisible: !1,
              railColor: "#333",
              railOpacity: 0.2,
              railDraggable: !0,
              railClass: "slimScrollRail",
              barClass: "slimScrollBar",
              wrapperClass: "slimScrollDiv",
              allowPageScroll: !1,
              wheelStep: 20,
              touchScrollStep: 200,
              borderRadius: "7px",
              railBorderRadius: "7px"
            },
            r = e.extend(i, n);
          return (
            this.each(function() {
              function i(t) {
                if (c) {
                  var t = t || window.event,
                    n = 0;
                  t.wheelDelta && (n = -t.wheelDelta / 120),
                    t.detail && (n = t.detail / 3);
                  var i = t.target || t.srcTarget || t.srcElement;
                  e(i)
                    .closest("." + r.wrapperClass)
                    .is(E.parent()) && o(n, !0),
                    t.preventDefault && !_ && t.preventDefault(),
                    _ || (t.returnValue = !1);
                }
              }
              function o(e, t, n) {
                _ = !1;
                var i = e,
                  o = E.outerHeight() - A.outerHeight();
                if (
                  (t &&
                    ((i =
                      parseInt(A.css("top")) +
                      ((e * parseInt(r.wheelStep)) / 100) * A.outerHeight()),
                    (i = Math.min(Math.max(i, 0), o)),
                    (i = e > 0 ? Math.ceil(i) : Math.floor(i)),
                    A.css({ top: i + "px" })),
                  (g =
                    parseInt(A.css("top")) /
                    (E.outerHeight() - A.outerHeight())),
                  (i = g * (E[0].scrollHeight - E.outerHeight())),
                  n)
                ) {
                  i = e;
                  var a = (i / E[0].scrollHeight) * E.outerHeight();
                  (a = Math.min(Math.max(a, 0), o)), A.css({ top: a + "px" });
                }
                E.scrollTop(i), E.trigger("slimscrolling", ~~i), l(), u();
              }
              function a(e) {
                window.addEventListener
                  ? (e.addEventListener("DOMMouseScroll", i, !1),
                    e.addEventListener("mousewheel", i, !1))
                  : document.attachEvent("onmousewheel", i);
              }
              function s() {
                (m = Math.max(
                  (E.outerHeight() / E[0].scrollHeight) * E.outerHeight(),
                  b
                )),
                  A.css({ height: m + "px" });
                var e = m == E.outerHeight() ? "none" : "block";
                A.css({ display: e });
              }
              function l() {
                if ((s(), clearTimeout(p), g == ~~g)) {
                  if (((_ = r.allowPageScroll), v != g)) {
                    var e = 0 == ~~g ? "top" : "bottom";
                    E.trigger("slimscroll", e);
                  }
                } else _ = !1;
                return (
                  (v = g),
                  m >= E.outerHeight()
                    ? void (_ = !0)
                    : (A.stop(!0, !0).fadeIn("fast"),
                      void (r.railVisible && S.stop(!0, !0).fadeIn("fast")))
                );
              }
              function u() {
                r.alwaysVisible ||
                  (p = setTimeout(function() {
                    (r.disableFadeOut && c) ||
                      d ||
                      f ||
                      (A.fadeOut("slow"), S.fadeOut("slow"));
                  }, 1e3));
              }
              var c,
                d,
                f,
                p,
                h,
                m,
                g,
                v,
                y = "<div></div>",
                b = 30,
                _ = !1,
                E = e(this);
              if (E.parent().hasClass(r.wrapperClass)) {
                var T = E.scrollTop();
                if (
                  ((A = E.siblings("." + r.barClass)),
                  (S = E.siblings("." + r.railClass)),
                  s(),
                  e.isPlainObject(n))
                ) {
                  if ("height" in n && "auto" == n.height) {
                    E.parent().css("height", "auto"), E.css("height", "auto");
                    var w = E.parent()
                      .parent()
                      .height();
                    E.parent().css("height", w), E.css("height", w);
                  } else if ("height" in n) {
                    var C = n.height;
                    E.parent().css("height", C), E.css("height", C);
                  }
                  if ("scrollTo" in n) T = parseInt(r.scrollTo);
                  else if ("scrollBy" in n) T += parseInt(r.scrollBy);
                  else if ("destroy" in n)
                    return A.remove(), S.remove(), void E.unwrap();
                  o(T, !1, !0);
                }
              } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                r.height = "auto" == r.height ? E.parent().height() : r.height;
                var x = e(y)
                  .addClass(r.wrapperClass)
                  .css({
                    position: "relative",
                    overflow: "hidden",
                    width: r.width,
                    height: r.height
                  });
                E.css({ overflow: "hidden", width: r.width, height: r.height });
                var S = e(y)
                    .addClass(r.railClass)
                    .css({
                      width: r.size,
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      display:
                        r.alwaysVisible && r.railVisible ? "block" : "none",
                      "border-radius": r.railBorderRadius,
                      background: r.railColor,
                      opacity: r.railOpacity,
                      zIndex: 90
                    }),
                  A = e(y)
                    .addClass(r.barClass)
                    .css({
                      background: r.color,
                      width: r.size,
                      position: "absolute",
                      top: 0,
                      opacity: r.opacity,
                      display: r.alwaysVisible ? "block" : "none",
                      "border-radius": r.borderRadius,
                      BorderRadius: r.borderRadius,
                      MozBorderRadius: r.borderRadius,
                      WebkitBorderRadius: r.borderRadius,
                      zIndex: 99
                    }),
                  D =
                    "right" == r.position
                      ? { right: r.distance }
                      : { left: r.distance };
                S.css(D),
                  A.css(D),
                  E.wrap(x),
                  E.parent().append(A),
                  E.parent().append(S),
                  r.railDraggable &&
                    A.bind("mousedown", function(n) {
                      var i = e(document);
                      return (
                        (f = !0),
                        (t = parseFloat(A.css("top"))),
                        (pageY = n.pageY),
                        i.bind("mousemove.slimscroll", function(e) {
                          (currTop = t + e.pageY - pageY),
                            A.css("top", currTop),
                            o(0, A.position().top, !1);
                        }),
                        i.bind("mouseup.slimscroll", function(e) {
                          (f = !1), u(), i.unbind(".slimscroll");
                        }),
                        !1
                      );
                    }).bind("selectstart.slimscroll", function(e) {
                      return e.stopPropagation(), e.preventDefault(), !1;
                    }),
                  S.hover(
                    function() {
                      l();
                    },
                    function() {
                      u();
                    }
                  ),
                  A.hover(
                    function() {
                      d = !0;
                    },
                    function() {
                      d = !1;
                    }
                  ),
                  E.hover(
                    function() {
                      (c = !0), l(), u();
                    },
                    function() {
                      (c = !1), u();
                    }
                  ),
                  E.bind("touchstart", function(e, t) {
                    e.originalEvent.touches.length &&
                      (h = e.originalEvent.touches[0].pageY);
                  }),
                  E.bind("touchmove", function(e) {
                    if (
                      (_ || e.originalEvent.preventDefault(),
                      e.originalEvent.touches.length)
                    ) {
                      var t =
                        (h - e.originalEvent.touches[0].pageY) /
                        r.touchScrollStep;
                      o(t, !0), (h = e.originalEvent.touches[0].pageY);
                    }
                  }),
                  s(),
                  "bottom" === r.start
                    ? (A.css({ top: E.outerHeight() - A.outerHeight() }),
                      o(0, !0))
                    : "top" !== r.start &&
                      (o(e(r.start).position().top, null, !0),
                      r.alwaysVisible || A.hide()),
                  a(this);
              }
            }),
            this
          );
        }
      }),
        e.fn.extend({ slimscroll: e.fn.slimScroll });
    })(jQuery);
  }
]);
var $jscomp = {
  scope: {},
  findInternal: function(a, b, f) {
    a instanceof String && (a = String(a));
    for (var g = a.length, e = 0; e < g; e++) {
      var c = a[e];
      if (b.call(f, c, e, a)) return { i: e, v: c };
    }
    return { i: -1, v: void 0 };
  }
};
$jscomp.defineProperty =
  "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function(a, b, f) {
        if (f.get || f.set)
          throw new TypeError("ES3 does not support getters and setters.");
        a != Array.prototype && a != Object.prototype && (a[b] = f.value);
      };
$jscomp.getGlobal = function(a) {
  return "undefined" != typeof window && window === a
    ? a
    : "undefined" != typeof global
    ? global
    : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, b, f, g) {
  if (b) {
    f = $jscomp.global;
    a = a.split(".");
    for (g = 0; g < a.length - 1; g++) {
      var e = a[g];
      e in f || (f[e] = {});
      f = f[e];
    }
    a = a[a.length - 1];
    g = f[a];
    b = b(g);
    b != g &&
      null != b &&
      $jscomp.defineProperty(f, a, {
        configurable: !0,
        writable: !0,
        value: b
      });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function(a) {
    return a
      ? a
      : function(a, f) {
          return $jscomp.findInternal(this, a, f).v;
        };
  },
  "es6-impl",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.fill",
  function(a) {
    return a
      ? a
      : function(a, f, g) {
          var b = this.length || 0;
          0 > f && (f = Math.max(0, b + f));
          if (null == g || g > b) g = b;
          g = Number(g);
          0 > g && (g = Math.max(0, b + g));
          for (f = Number(f || 0); f < g; f++) this[f] = a;
          return this;
        };
  },
  "es6-impl",
  "es3"
);
$jscomp.checkStringArgs = function(a, b, f) {
  if (null == a)
    throw new TypeError(
      "The 'this' value for String.prototype." +
        f +
        " must not be null or undefined"
    );
  if (b instanceof RegExp)
    throw new TypeError(
      "First argument to String.prototype." +
        f +
        " must not be a regular expression"
    );
  return a + "";
};
$jscomp.polyfill(
  "String.prototype.repeat",
  function(a) {
    return a
      ? a
      : function(a) {
          var b = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > a || 1342177279 < a)
            throw new RangeError("Invalid count value");
          a |= 0;
          for (var g = ""; a; ) if ((a & 1 && (g += b), (a >>>= 1))) b += b;
          return g;
        };
  },
  "es6-impl",
  "es3"
);
$jscomp.owns = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.polyfill(
  "Object.assign",
  function(a) {
    return a
      ? a
      : function(a, f) {
          for (var b = 1; b < arguments.length; b++) {
            var e = arguments[b];
            if (e) for (var c in e) $jscomp.owns(e, c) && (a[c] = e[c]);
          }
          return a;
        };
  },
  "es6-impl",
  "es3"
);
if ("undefined" != typeof responsiveVoice)
  console.log("ResponsiveVoice already loaded"), console.log(responsiveVoice);
else
  var ResponsiveVoice = function() {
      var a = this;
      a.version = "1.4.9";
      console.log("ResponsiveVoice r" + a.version);
      a.responsivevoices = [
        {
          name: "UK English Female",
          flag: "gb",
          gender: "f",
          voiceIDs: [3, 5, 1, 6, 7, 171, 201, 8]
        },
        {
          name: "UK English Male",
          flag: "gb",
          gender: "m",
          voiceIDs: [0, 4, 2, 75, 202, 159, 6, 7]
        },
        {
          name: "US English Female",
          flag: "us",
          gender: "f",
          voiceIDs: [39, 40, 41, 42, 43, 173, 205, 204, 235, 44]
        },
        {
          name: "Arabic Male",
          flag: "ar",
          gender: "m",
          voiceIDs: [96, 95, 97, 196, 98],
          deprecated: !0
        },
        {
          name: "Arabic Female",
          flag: "ar",
          gender: "f",
          voiceIDs: [96, 95, 97, 196, 98]
        },
        { name: "Armenian Male", flag: "hy", gender: "f", voiceIDs: [99] },
        {
          name: "Australian Female",
          flag: "au",
          gender: "f",
          voiceIDs: [87, 86, 5, 201, 88]
        },
        {
          name: "Brazilian Portuguese Female",
          flag: "br",
          gender: "f",
          voiceIDs: [245, 124, 123, 125, 186, 223, 126]
        },
        {
          name: "Chinese Female",
          flag: "cn",
          gender: "f",
          voiceIDs: [249, 58, 59, 60, 155, 191, 231, 61]
        },
        {
          name: "Chinese (Hong Kong) Female",
          flag: "hk",
          gender: "f",
          voiceIDs: [192, 193, 232, 250, 251, 252]
        },
        {
          name: "Chinese Taiwan Female",
          flag: "tw",
          gender: "f",
          voiceIDs: [252, 194, 233, 253, 254, 255]
        },
        {
          name: "Czech Female",
          flag: "cz",
          gender: "f",
          voiceIDs: [101, 100, 102, 197, 103]
        },
        {
          name: "Danish Female",
          flag: "dk",
          gender: "f",
          voiceIDs: [105, 104, 106, 198, 107]
        },
        {
          name: "Deutsch Female",
          flag: "de",
          gender: "f",
          voiceIDs: [27, 28, 29, 30, 31, 78, 170, 199, 32]
        },
        {
          name: "Dutch Female",
          flag: "nl",
          gender: "f",
          voiceIDs: [243, 219, 84, 157, 158, 184, 45]
        },
        {
          name: "Finnish Female",
          flag: "fi",
          gender: "f",
          voiceIDs: [90, 89, 91, 209, 92]
        },
        {
          name: "French Female",
          flag: "fr",
          gender: "f",
          voiceIDs: [240, 21, 22, 23, 77, 178, 210, 26]
        },
        {
          name: "Greek Female",
          flag: "gr",
          gender: "f",
          voiceIDs: [62, 63, 80, 200, 64]
        },
        {
          name: "Hatian Creole Female",
          flag: "ht",
          gender: "f",
          voiceIDs: [109]
        },
        {
          name: "Hindi Female",
          flag: "hi",
          gender: "f",
          voiceIDs: [247, 66, 154, 179, 213, 67]
        },
        {
          name: "Hungarian Female",
          flag: "hu",
          gender: "f",
          voiceIDs: [9, 10, 81, 214, 11]
        },
        {
          name: "Indonesian Female",
          flag: "id",
          gender: "f",
          voiceIDs: [241, 111, 112, 180, 215, 113]
        },
        {
          name: "Italian Female",
          flag: "it",
          gender: "f",
          voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 38]
        },
        {
          name: "Japanese Female",
          flag: "jp",
          gender: "f",
          voiceIDs: [248, 50, 51, 52, 153, 182, 217, 53]
        },
        {
          name: "Korean Female",
          flag: "kr",
          gender: "f",
          voiceIDs: [54, 55, 56, 156, 183, 218, 57]
        },
        { name: "Latin Female", flag: "va", gender: "f", voiceIDs: [114] },
        {
          name: "Norwegian Female",
          flag: "no",
          gender: "f",
          voiceIDs: [72, 73, 221, 74]
        },
        {
          name: "Polish Female",
          flag: "pl",
          gender: "f",
          voiceIDs: [244, 120, 119, 121, 185, 222, 122]
        },
        {
          name: "Portuguese Female",
          flag: "br",
          gender: "f",
          voiceIDs: [128, 127, 129, 187, 224, 130]
        },
        {
          name: "Romanian Male",
          flag: "ro",
          gender: "m",
          voiceIDs: [151, 150, 152, 225, 46]
        },
        {
          name: "Russian Female",
          flag: "ru",
          gender: "f",
          voiceIDs: [246, 47, 48, 83, 188, 226, 49]
        },
        {
          name: "Slovak Female",
          flag: "sk",
          gender: "f",
          voiceIDs: [133, 132, 134, 227, 135]
        },
        {
          name: "Spanish Female",
          flag: "es",
          gender: "f",
          voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 15]
        },
        {
          name: "Spanish Latin American Female",
          flag: "es",
          gender: "f",
          voiceIDs: [239, 137, 136, 138, 175, 208, 139]
        },
        {
          name: "Swedish Female",
          flag: "sv",
          gender: "f",
          voiceIDs: [85, 148, 149, 228, 65]
        },
        { name: "Tamil Male", flag: "hi", gender: "m", voiceIDs: [141] },
        {
          name: "Thai Female",
          flag: "th",
          gender: "f",
          voiceIDs: [143, 142, 144, 189, 229, 145]
        },
        {
          name: "Turkish Female",
          flag: "tr",
          gender: "f",
          voiceIDs: [69, 70, 82, 190, 230, 71]
        },
        { name: "Afrikaans Male", flag: "af", gender: "m", voiceIDs: [93] },
        { name: "Albanian Male", flag: "sq", gender: "m", voiceIDs: [94] },
        { name: "Bosnian Male", flag: "bs", gender: "m", voiceIDs: [14] },
        {
          name: "Catalan Male",
          flag: "catalonia",
          gender: "m",
          voiceIDs: [68]
        },
        { name: "Croatian Male", flag: "hr", gender: "m", voiceIDs: [13] },
        { name: "Czech Male", flag: "cz", gender: "m", voiceIDs: [161] },
        {
          name: "Danish Male",
          flag: "da",
          gender: "m",
          voiceIDs: [162],
          deprecated: !0
        },
        { name: "Esperanto Male", flag: "eo", gender: "m", voiceIDs: [108] },
        {
          name: "Finnish Male",
          flag: "fi",
          gender: "m",
          voiceIDs: [160],
          deprecated: !0
        },
        {
          name: "Greek Male",
          flag: "gr",
          gender: "m",
          voiceIDs: [163],
          deprecated: !0
        },
        { name: "Hungarian Male", flag: "hu", gender: "m", voiceIDs: [164] },
        { name: "Icelandic Male", flag: "is", gender: "m", voiceIDs: [110] },
        {
          name: "Latin Male",
          flag: "va",
          gender: "m",
          voiceIDs: [165],
          deprecated: !0
        },
        { name: "Latvian Male", flag: "lv", gender: "m", voiceIDs: [115] },
        { name: "Macedonian Male", flag: "mk", gender: "m", voiceIDs: [116] },
        { name: "Moldavian Male", flag: "md", gender: "m", voiceIDs: [117] },
        { name: "Montenegrin Male", flag: "me", gender: "m", voiceIDs: [118] },
        { name: "Norwegian Male", flag: "no", gender: "m", voiceIDs: [166] },
        { name: "Serbian Male", flag: "sr", gender: "m", voiceIDs: [12] },
        {
          name: "Serbo-Croatian Male",
          flag: "hr",
          gender: "m",
          voiceIDs: [131]
        },
        {
          name: "Slovak Male",
          flag: "sk",
          gender: "m",
          voiceIDs: [167],
          deprecated: !0
        },
        { name: "Swahili Male", flag: "sw", gender: "m", voiceIDs: [140] },
        {
          name: "Swedish Male",
          flag: "sv",
          gender: "m",
          voiceIDs: [168],
          deprecated: !0
        },
        {
          name: "Vietnamese Male",
          flag: "vi",
          gender: "m",
          voiceIDs: [146],
          deprecated: !0
        },
        { name: "Welsh Male", flag: "cy", gender: "m", voiceIDs: [147] },
        {
          name: "US English Male",
          flag: "us",
          gender: "m",
          voiceIDs: [0, 4, 2, 6, 7, 75, 159, 234, 236, 237]
        },
        { name: "Fallback UK Female", flag: "gb", gender: "f", voiceIDs: [8] }
      ];
      a.voicecollection = [
        { name: "Google UK English Male" },
        { name: "Agnes" },
        { name: "Daniel Compact" },
        { name: "Google UK English Female" },
        { name: "en-GB", rate: 0.25, pitch: 1 },
        { name: "en-AU", rate: 0.25, pitch: 1 },
        { name: "ingl\u00e9s Reino Unido" },
        { name: "English United Kingdom" },
        { name: "Fallback en-GB Female", lang: "en-GB", fallbackvoice: !0 },
        { name: "Eszter Compact" },
        { name: "hu-HU", rate: 0.4 },
        {
          name: "Fallback Hungarian",
          lang: "hu",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Fallback Serbian", lang: "sr", fallbackvoice: !0 },
        { name: "Fallback Croatian", lang: "hr", fallbackvoice: !0 },
        { name: "Fallback Bosnian", lang: "bs", fallbackvoice: !0 },
        { name: "Fallback Spanish", lang: "es", fallbackvoice: !0 },
        { name: "Spanish Spain" },
        { name: "espa\u00f1ol Espa\u00f1a" },
        { name: "Diego Compact", rate: 0.3 },
        { name: "Google Espa\u00f1ol" },
        { name: "es-ES", rate: 0.2 },
        { name: "Google Fran\u00e7ais" },
        { name: "French France" },
        { name: "franc\u00e9s Francia" },
        { name: "Virginie Compact", rate: 0.5 },
        { name: "fr-FR", rate: 0.25 },
        { name: "Fallback French", lang: "fr", fallbackvoice: !0 },
        { name: "Google Deutsch" },
        { name: "German Germany" },
        { name: "alem\u00e1n Alemania" },
        { name: "Yannick Compact", rate: 0.5 },
        { name: "de-DE", rate: 0.25 },
        { name: "Fallback Deutsch", lang: "de", fallbackvoice: !0 },
        { name: "Google Italiano" },
        { name: "Italian Italy" },
        { name: "italiano Italia" },
        { name: "Paolo Compact", rate: 0.5 },
        { name: "it-IT", rate: 0.25 },
        { name: "Fallback Italian", lang: "it", fallbackvoice: !0 },
        { name: "Google US English", timerSpeed: 1 },
        { name: "English United States" },
        { name: "ingl\u00e9s Estados Unidos" },
        { name: "Vicki" },
        { name: "en-US", rate: 0.2, pitch: 1, timerSpeed: 1.3 },
        {
          name: "Fallback English",
          lang: "en-US",
          fallbackvoice: !0,
          timerSpeed: 0
        },
        {
          name: "Fallback Dutch",
          lang: "nl",
          fallbackvoice: !0,
          timerSpeed: 0
        },
        { name: "Fallback Romanian", lang: "ro", fallbackvoice: !0 },
        { name: "Milena Compact" },
        { name: "ru-RU", rate: 0.25 },
        { name: "Fallback Russian", lang: "ru", fallbackvoice: !0 },
        { name: "Google \u65e5\u672c\u4eba", timerSpeed: 1 },
        { name: "Kyoko Compact" },
        { name: "ja-JP", rate: 0.25 },
        { name: "Fallback Japanese", lang: "ja", fallbackvoice: !0 },
        { name: "Google \ud55c\uad6d\uc758", timerSpeed: 1 },
        { name: "Narae Compact" },
        { name: "ko-KR", rate: 0.25 },
        { name: "Fallback Korean", lang: "ko", fallbackvoice: !0 },
        { name: "Google \u4e2d\u56fd\u7684", timerSpeed: 1 },
        { name: "Ting-Ting Compact" },
        { name: "zh-CN", rate: 0.25 },
        { name: "Fallback Chinese", lang: "zh-CN", fallbackvoice: !0 },
        { name: "Alexandros Compact" },
        { name: "el-GR", rate: 0.25 },
        {
          name: "Fallback Greek",
          lang: "el",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Swedish",
          lang: "sv",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "hi-IN", rate: 0.25 },
        { name: "Fallback Hindi", lang: "hi", fallbackvoice: !0 },
        { name: "Fallback Catalan", lang: "ca", fallbackvoice: !0 },
        { name: "Aylin Compact" },
        { name: "tr-TR", rate: 0.25 },
        { name: "Fallback Turkish", lang: "tr", fallbackvoice: !0 },
        { name: "Stine Compact" },
        { name: "no-NO", rate: 0.25 },
        {
          name: "Fallback Norwegian",
          lang: "no",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Daniel" },
        { name: "Monica" },
        { name: "Amelie" },
        { name: "Anna" },
        { name: "Alice" },
        { name: "Melina" },
        { name: "Mariska" },
        { name: "Yelda" },
        { name: "Milena" },
        { name: "Xander" },
        { name: "Alva" },
        { name: "Lee Compact" },
        { name: "Karen" },
        { name: "Fallback Australian", lang: "en-AU", fallbackvoice: !0 },
        { name: "Mikko Compact" },
        { name: "Satu" },
        { name: "fi-FI", rate: 0.25 },
        {
          name: "Fallback Finnish",
          lang: "fi",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Fallback Afrikans", lang: "af", fallbackvoice: !0 },
        { name: "Fallback Albanian", lang: "sq", fallbackvoice: !0 },
        { name: "Maged Compact" },
        { name: "Tarik" },
        { name: "ar-SA", rate: 0.25 },
        {
          name: "Fallback Arabic",
          lang: "ar",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Armenian",
          lang: "hy",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Zuzana Compact" },
        { name: "Zuzana" },
        { name: "cs-CZ", rate: 0.25 },
        {
          name: "Fallback Czech",
          lang: "cs",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Ida Compact" },
        { name: "Sara" },
        { name: "da-DK", rate: 0.25 },
        {
          name: "Fallback Danish",
          lang: "da",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Fallback Esperanto", lang: "eo", fallbackvoice: !0 },
        { name: "Fallback Hatian Creole", lang: "ht", fallbackvoice: !0 },
        { name: "Fallback Icelandic", lang: "is", fallbackvoice: !0 },
        { name: "Damayanti" },
        { name: "id-ID", rate: 0.25 },
        { name: "Fallback Indonesian", lang: "id", fallbackvoice: !0 },
        {
          name: "Fallback Latin",
          lang: "la",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Fallback Latvian", lang: "lv", fallbackvoice: !0 },
        { name: "Fallback Macedonian", lang: "mk", fallbackvoice: !0 },
        {
          name: "Fallback Moldavian",
          lang: "mo",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Fallback Montenegrin", lang: "sr-ME", fallbackvoice: !0 },
        { name: "Agata Compact" },
        { name: "Zosia" },
        { name: "pl-PL", rate: 0.25 },
        { name: "Fallback Polish", lang: "pl", fallbackvoice: !0 },
        { name: "Raquel Compact" },
        { name: "Luciana" },
        { name: "pt-BR", rate: 0.25 },
        {
          name: "Fallback Brazilian Portugese",
          lang: "pt-BR",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Joana Compact" },
        { name: "Joana" },
        { name: "pt-PT", rate: 0.25 },
        { name: "Fallback Portuguese", lang: "pt-PT", fallbackvoice: !0 },
        {
          name: "Fallback Serbo-Croation",
          lang: "sh",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Laura Compact" },
        { name: "Laura" },
        { name: "sk-SK", rate: 0.25 },
        {
          name: "Fallback Slovak",
          lang: "sk",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Javier Compact" },
        { name: "Paulina" },
        { name: "es-MX", rate: 0.25 },
        {
          name: "Fallback Spanish (Latin American)",
          lang: "es-419",
          fallbackvoice: !0,
          service: "g2"
        },
        { name: "Fallback Swahili", lang: "sw", fallbackvoice: !0 },
        { name: "Fallback Tamil", lang: "ta", fallbackvoice: !0 },
        { name: "Narisa Compact" },
        { name: "Kanya" },
        { name: "th-TH", rate: 0.25 },
        { name: "Fallback Thai", lang: "th", fallbackvoice: !0 },
        { name: "Fallback Vietnamese", lang: "vi", fallbackvoice: !0 },
        { name: "Fallback Welsh", lang: "cy", fallbackvoice: !0 },
        { name: "Oskar Compact" },
        { name: "sv-SE", rate: 0.25 },
        { name: "Simona Compact" },
        { name: "Ioana" },
        { name: "ro-RO", rate: 0.25 },
        { name: "Kyoko" },
        { name: "Lekha" },
        { name: "Ting-Ting" },
        { name: "Yuna" },
        { name: "Xander Compact" },
        { name: "nl-NL", rate: 0.25 },
        {
          name: "Fallback UK English Male",
          lang: "en-GB",
          fallbackvoice: !0,
          service: "g1",
          voicename: "rjs"
        },
        {
          name: "Finnish Male",
          lang: "fi",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Czech Male",
          lang: "cs",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Danish Male",
          lang: "da",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Greek Male",
          lang: "el",
          fallbackvoice: !0,
          service: "g1",
          voicename: "",
          rate: 0.25
        },
        {
          name: "Hungarian Male",
          lang: "hu",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Latin Male",
          lang: "la",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Norwegian Male",
          lang: "no",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Slovak Male",
          lang: "sk",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Swedish Male",
          lang: "sv",
          fallbackvoice: !0,
          service: "g1",
          voicename: ""
        },
        {
          name: "Fallback US English Male",
          lang: "en",
          fallbackvoice: !0,
          service: "tts-api",
          voicename: ""
        },
        { name: "German Germany", lang: "de_DE" },
        { name: "English United Kingdom", lang: "en_GB" },
        { name: "English India", lang: "en_IN" },
        { name: "English United States", lang: "en_US" },
        { name: "Spanish Spain", lang: "es_ES" },
        { name: "Spanish Mexico", lang: "es_MX" },
        { name: "Spanish United States", lang: "es_US" },
        { name: "French Belgium", lang: "fr_BE" },
        { name: "French France", lang: "fr_FR" },
        { name: "Hindi India", lang: "hi_IN" },
        { name: "Indonesian Indonesia", lang: "in_ID" },
        { name: "Italian Italy", lang: "it_IT" },
        { name: "Japanese Japan", lang: "ja_JP" },
        { name: "Korean South Korea", lang: "ko_KR" },
        { name: "Dutch Netherlands", lang: "nl_NL" },
        { name: "Polish Poland", lang: "pl_PL" },
        { name: "Portuguese Brazil", lang: "pt_BR" },
        { name: "Portuguese Portugal", lang: "pt_PT" },
        { name: "Russian Russia", lang: "ru_RU" },
        { name: "Thai Thailand", lang: "th_TH" },
        { name: "Turkish Turkey", lang: "tr_TR" },
        { name: "Chinese China", lang: "zh_CN_#Hans" },
        { name: "Chinese Hong Kong", lang: "zh_HK_#Hans" },
        { name: "Chinese Hong Kong", lang: "zh_HK_#Hant" },
        { name: "Chinese Taiwan", lang: "zh_TW_#Hant" },
        { name: "Alex" },
        { name: "Maged", lang: "ar-SA" },
        { name: "Zuzana", lang: "cs-CZ" },
        { name: "Sara", lang: "da-DK" },
        { name: "Anna", lang: "de-DE" },
        { name: "Melina", lang: "el-GR" },
        { name: "Karen", lang: "en-AU" },
        { name: "Daniel", lang: "en-GB" },
        { name: "Moira", lang: "en-IE" },
        { name: "Samantha (Enhanced)", lang: "en-US" },
        { name: "Samantha", lang: "en-US" },
        { name: "Tessa", lang: "en-ZA" },
        { name: "Monica", lang: "es-ES" },
        { name: "Paulina", lang: "es-MX" },
        { name: "Satu", lang: "fi-FI" },
        { name: "Amelie", lang: "fr-CA" },
        { name: "Thomas", lang: "fr-FR" },
        { name: "Carmit", lang: "he-IL" },
        { name: "Lekha", lang: "hi-IN" },
        { name: "Mariska", lang: "hu-HU" },
        { name: "Damayanti", lang: "id-ID" },
        { name: "Alice", lang: "it-IT" },
        { name: "Kyoko", lang: "ja-JP" },
        { name: "Yuna", lang: "ko-KR" },
        { name: "Ellen", lang: "nl-BE" },
        { name: "Xander", lang: "nl-NL" },
        { name: "Nora", lang: "no-NO" },
        { name: "Zosia", lang: "pl-PL" },
        { name: "Luciana", lang: "pt-BR" },
        { name: "Joana", lang: "pt-PT" },
        { name: "Ioana", lang: "ro-RO" },
        { name: "Milena", lang: "ru-RU" },
        { name: "Laura", lang: "sk-SK" },
        { name: "Alva", lang: "sv-SE" },
        { name: "Kanya", lang: "th-TH" },
        { name: "Yelda", lang: "tr-TR" },
        { name: "Ting-Ting", lang: "zh-CN" },
        { name: "Sin-Ji", lang: "zh-HK" },
        { name: "Mei-Jia", lang: "zh-TW" },
        {
          name: "Microsoft David Mobile - English (United States)",
          lang: "en-US"
        },
        {
          name: "Microsoft Zira Mobile - English (United States)",
          lang: "en-US"
        },
        {
          name: "Microsoft Mark Mobile - English (United States)",
          lang: "en-US"
        },
        { name: "native", lang: "" },
        { name: "Google espa\u00f1ol" },
        { name: "Google espa\u00f1ol de Estados Unidos" },
        { name: "Google fran\u00e7ais" },
        { name: "Google Bahasa Indonesia" },
        { name: "Google italiano" },
        { name: "Google Nederlands" },
        { name: "Google polski" },
        { name: "Google portugu\u00eas do Brasil" },
        { name: "Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439" },
        { name: 'Google \u0939\u093f\u0928\u094d\u0926\u0940"' },
        { name: "Google \u65e5\u672c\u8a9e" },
        {
          name: "Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"
        },
        { name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09" },
        { name: "zh-HK", rate: 0.25 },
        {
          name: "Fallback Chinese (Hong Kong) Female",
          lang: "zh-HK",
          fallbackvoice: !0,
          service: "g1"
        },
        { name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09" },
        { name: "zh-TW", rate: 0.25 },
        {
          name: "Fallback Chinese (Taiwan) Female",
          lang: "zh-TW",
          fallbackvoice: !0,
          service: "g1"
        }
      ];
      a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
      a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(
        navigator.userAgent.toLowerCase()
      );
      a.is_chrome = -1 < navigator.userAgent.indexOf("Chrome");
      a.is_safari = -1 < navigator.userAgent.indexOf("Safari");
      a.is_chrome && a.is_safari && (a.is_safari = !1);
      a.is_opera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
      a.is_android = -1 < navigator.userAgent.toLowerCase().indexOf("android");
      a.iOS_initialized = !1;
      a.iOS9_initialized = !1;
      a.cache_ios_voices = [
        { name: "he-IL", voiceURI: "he-IL", lang: "he-IL" },
        { name: "th-TH", voiceURI: "th-TH", lang: "th-TH" },
        { name: "pt-BR", voiceURI: "pt-BR", lang: "pt-BR" },
        { name: "sk-SK", voiceURI: "sk-SK", lang: "sk-SK" },
        { name: "fr-CA", voiceURI: "fr-CA", lang: "fr-CA" },
        { name: "ro-RO", voiceURI: "ro-RO", lang: "ro-RO" },
        { name: "no-NO", voiceURI: "no-NO", lang: "no-NO" },
        { name: "fi-FI", voiceURI: "fi-FI", lang: "fi-FI" },
        { name: "pl-PL", voiceURI: "pl-PL", lang: "pl-PL" },
        { name: "de-DE", voiceURI: "de-DE", lang: "de-DE" },
        { name: "nl-NL", voiceURI: "nl-NL", lang: "nl-NL" },
        { name: "id-ID", voiceURI: "id-ID", lang: "id-ID" },
        { name: "tr-TR", voiceURI: "tr-TR", lang: "tr-TR" },
        { name: "it-IT", voiceURI: "it-IT", lang: "it-IT" },
        { name: "pt-PT", voiceURI: "pt-PT", lang: "pt-PT" },
        { name: "fr-FR", voiceURI: "fr-FR", lang: "fr-FR" },
        { name: "ru-RU", voiceURI: "ru-RU", lang: "ru-RU" },
        { name: "es-MX", voiceURI: "es-MX", lang: "es-MX" },
        { name: "zh-HK", voiceURI: "zh-HK", lang: "zh-HK" },
        { name: "sv-SE", voiceURI: "sv-SE", lang: "sv-SE" },
        { name: "hu-HU", voiceURI: "hu-HU", lang: "hu-HU" },
        { name: "zh-TW", voiceURI: "zh-TW", lang: "zh-TW" },
        { name: "es-ES", voiceURI: "es-ES", lang: "es-ES" },
        { name: "zh-CN", voiceURI: "zh-CN", lang: "zh-CN" },
        { name: "nl-BE", voiceURI: "nl-BE", lang: "nl-BE" },
        { name: "en-GB", voiceURI: "en-GB", lang: "en-GB" },
        { name: "ar-SA", voiceURI: "ar-SA", lang: "ar-SA" },
        { name: "ko-KR", voiceURI: "ko-KR", lang: "ko-KR" },
        { name: "cs-CZ", voiceURI: "cs-CZ", lang: "cs-CZ" },
        { name: "en-ZA", voiceURI: "en-ZA", lang: "en-ZA" },
        { name: "en-AU", voiceURI: "en-AU", lang: "en-AU" },
        { name: "da-DK", voiceURI: "da-DK", lang: "da-DK" },
        { name: "en-US", voiceURI: "en-US", lang: "en-US" },
        { name: "en-IE", voiceURI: "en-IE", lang: "en-IE" },
        { name: "hi-IN", voiceURI: "hi-IN", lang: "hi-IN" },
        { name: "el-GR", voiceURI: "el-GR", lang: "el-GR" },
        { name: "ja-JP", voiceURI: "ja-JP", lang: "ja-JP" }
      ];
      a.cache_ios9_voices = [
        {
          name: "Maged",
          voiceURI: "com.apple.ttsbundle.Maged-compact",
          lang: "ar-SA",
          localService: !0,
          default: !0
        },
        {
          name: "Zuzana",
          voiceURI: "com.apple.ttsbundle.Zuzana-compact",
          lang: "cs-CZ",
          localService: !0,
          default: !0
        },
        {
          name: "Sara",
          voiceURI: "com.apple.ttsbundle.Sara-compact",
          lang: "da-DK",
          localService: !0,
          default: !0
        },
        {
          name: "Anna",
          voiceURI: "com.apple.ttsbundle.Anna-compact",
          lang: "de-DE",
          localService: !0,
          default: !0
        },
        {
          name: "Melina",
          voiceURI: "com.apple.ttsbundle.Melina-compact",
          lang: "el-GR",
          localService: !0,
          default: !0
        },
        {
          name: "Karen",
          voiceURI: "com.apple.ttsbundle.Karen-compact",
          lang: "en-AU",
          localService: !0,
          default: !0
        },
        {
          name: "Daniel",
          voiceURI: "com.apple.ttsbundle.Daniel-compact",
          lang: "en-GB",
          localService: !0,
          default: !0
        },
        {
          name: "Moira",
          voiceURI: "com.apple.ttsbundle.Moira-compact",
          lang: "en-IE",
          localService: !0,
          default: !0
        },
        {
          name: "Samantha (Enhanced)",
          voiceURI: "com.apple.ttsbundle.Samantha-premium",
          lang: "en-US",
          localService: !0,
          default: !0
        },
        {
          name: "Samantha",
          voiceURI: "com.apple.ttsbundle.Samantha-compact",
          lang: "en-US",
          localService: !0,
          default: !0
        },
        {
          name: "Tessa",
          voiceURI: "com.apple.ttsbundle.Tessa-compact",
          lang: "en-ZA",
          localService: !0,
          default: !0
        },
        {
          name: "Monica",
          voiceURI: "com.apple.ttsbundle.Monica-compact",
          lang: "es-ES",
          localService: !0,
          default: !0
        },
        {
          name: "Paulina",
          voiceURI: "com.apple.ttsbundle.Paulina-compact",
          lang: "es-MX",
          localService: !0,
          default: !0
        },
        {
          name: "Satu",
          voiceURI: "com.apple.ttsbundle.Satu-compact",
          lang: "fi-FI",
          localService: !0,
          default: !0
        },
        {
          name: "Amelie",
          voiceURI: "com.apple.ttsbundle.Amelie-compact",
          lang: "fr-CA",
          localService: !0,
          default: !0
        },
        {
          name: "Thomas",
          voiceURI: "com.apple.ttsbundle.Thomas-compact",
          lang: "fr-FR",
          localService: !0,
          default: !0
        },
        {
          name: "Carmit",
          voiceURI: "com.apple.ttsbundle.Carmit-compact",
          lang: "he-IL",
          localService: !0,
          default: !0
        },
        {
          name: "Lekha",
          voiceURI: "com.apple.ttsbundle.Lekha-compact",
          lang: "hi-IN",
          localService: !0,
          default: !0
        },
        {
          name: "Mariska",
          voiceURI: "com.apple.ttsbundle.Mariska-compact",
          lang: "hu-HU",
          localService: !0,
          default: !0
        },
        {
          name: "Damayanti",
          voiceURI: "com.apple.ttsbundle.Damayanti-compact",
          lang: "id-ID",
          localService: !0,
          default: !0
        },
        {
          name: "Alice",
          voiceURI: "com.apple.ttsbundle.Alice-compact",
          lang: "it-IT",
          localService: !0,
          default: !0
        },
        {
          name: "Kyoko",
          voiceURI: "com.apple.ttsbundle.Kyoko-compact",
          lang: "ja-JP",
          localService: !0,
          default: !0
        },
        {
          name: "Yuna",
          voiceURI: "com.apple.ttsbundle.Yuna-compact",
          lang: "ko-KR",
          localService: !0,
          default: !0
        },
        {
          name: "Ellen",
          voiceURI: "com.apple.ttsbundle.Ellen-compact",
          lang: "nl-BE",
          localService: !0,
          default: !0
        },
        {
          name: "Xander",
          voiceURI: "com.apple.ttsbundle.Xander-compact",
          lang: "nl-NL",
          localService: !0,
          default: !0
        },
        {
          name: "Nora",
          voiceURI: "com.apple.ttsbundle.Nora-compact",
          lang: "no-NO",
          localService: !0,
          default: !0
        },
        {
          name: "Zosia",
          voiceURI: "com.apple.ttsbundle.Zosia-compact",
          lang: "pl-PL",
          localService: !0,
          default: !0
        },
        {
          name: "Luciana",
          voiceURI: "com.apple.ttsbundle.Luciana-compact",
          lang: "pt-BR",
          localService: !0,
          default: !0
        },
        {
          name: "Joana",
          voiceURI: "com.apple.ttsbundle.Joana-compact",
          lang: "pt-PT",
          localService: !0,
          default: !0
        },
        {
          name: "Ioana",
          voiceURI: "com.apple.ttsbundle.Ioana-compact",
          lang: "ro-RO",
          localService: !0,
          default: !0
        },
        {
          name: "Milena",
          voiceURI: "com.apple.ttsbundle.Milena-compact",
          lang: "ru-RU",
          localService: !0,
          default: !0
        },
        {
          name: "Laura",
          voiceURI: "com.apple.ttsbundle.Laura-compact",
          lang: "sk-SK",
          localService: !0,
          default: !0
        },
        {
          name: "Alva",
          voiceURI: "com.apple.ttsbundle.Alva-compact",
          lang: "sv-SE",
          localService: !0,
          default: !0
        },
        {
          name: "Kanya",
          voiceURI: "com.apple.ttsbundle.Kanya-compact",
          lang: "th-TH",
          localService: !0,
          default: !0
        },
        {
          name: "Yelda",
          voiceURI: "com.apple.ttsbundle.Yelda-compact",
          lang: "tr-TR",
          localService: !0,
          default: !0
        },
        {
          name: "Ting-Ting",
          voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
          lang: "zh-CN",
          localService: !0,
          default: !0
        },
        {
          name: "Sin-Ji",
          voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
          lang: "zh-HK",
          localService: !0,
          default: !0
        },
        {
          name: "Mei-Jia",
          voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
          lang: "zh-TW",
          localService: !0,
          default: !0
        }
      ];
      a.systemvoices = null;
      a.CHARACTER_LIMIT = 100;
      a.VOICESUPPORT_ATTEMPTLIMIT = 5;
      a.voicesupport_attempts = 0;
      a.fallbackMode = !1;
      a.WORDS_PER_MINUTE = 130;
      a.fallback_parts = null;
      a.fallback_part_index = 0;
      a.fallback_audio = null;
      a.fallback_playbackrate = 1;
      a.def_fallback_playbackrate = a.fallback_playbackrate;
      a.fallback_audiopool = [];
      a.msgparameters = null;
      a.timeoutId = null;
      a.OnLoad_callbacks = [];
      a.useTimer = !1;
      a.utterances = [];
      a.tstCompiled = function(a) {
        return eval("typeof xy === 'undefined'");
      };
      a.fallbackServicePath =
        "https://code.responsivevoice.org/" +
        (a.tstCompiled() ? "" : "develop/") +
        "getvoice.php";
      a.default_rv = a.responsivevoices[0];
      a.init = function() {
        a.is_android && (a.useTimer = !0);
        a.is_opera || "undefined" === typeof speechSynthesis
          ? (console.log("RV: Voice synthesis not supported"),
            a.enableFallbackMode())
          : setTimeout(function() {
              var b = setInterval(function() {
                var f = window.speechSynthesis.getVoices();
                0 != f.length ||
                (null != a.systemvoices && 0 != a.systemvoices.length)
                  ? (console.log("RV: Voice support ready"),
                    a.systemVoicesReady(f),
                    clearInterval(b))
                  : (console.log("Voice support NOT ready"),
                    a.voicesupport_attempts++,
                    a.voicesupport_attempts > a.VOICESUPPORT_ATTEMPTLIMIT &&
                      (clearInterval(b),
                      null != window.speechSynthesis
                        ? a.iOS
                          ? (a.iOS9
                              ? a.systemVoicesReady(a.cache_ios9_voices)
                              : a.systemVoicesReady(a.cache_ios_voices),
                            console.log("RV: Voice support ready (cached)"))
                          : (console.log(
                              "RV: speechSynthesis present but no system voices found"
                            ),
                            a.enableFallbackMode())
                        : a.enableFallbackMode()));
              }, 100);
            }, 100);
        a.Dispatch("OnLoad");
      };
      a.systemVoicesReady = function(b) {
        a.systemvoices = b;
        a.mapRVs();
        null != a.OnVoiceReady && a.OnVoiceReady.call();
        a.Dispatch("OnReady");
        window.hasOwnProperty("dispatchEvent") &&
          window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));
      };
      a.enableFallbackMode = function() {
        a.fallbackMode = !0;
        console.log("RV: Enabling fallback mode");
        a.mapRVs();
        null != a.OnVoiceReady && a.OnVoiceReady.call();
        a.Dispatch("OnReady");
        window.hasOwnProperty("dispatchEvent") &&
          window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));
      };
      a.getVoices = function() {
        for (var b = [], f = 0; f < a.responsivevoices.length; f++)
          b.push({ name: a.responsivevoices[f].name });
        return b;
      };
      a.speak = function(b, f, g) {
        if (a.iOS9 && !a.iOS9_initialized)
          console.log("Initializing ios9"),
            setTimeout(function() {
              a.speak(b, f, g);
            }, 100),
            a.clickEvent(),
            (a.iOS9_initialized = !0);
        else {
          a.isPlaying() &&
            (console.log("Cancelling previous speech"), a.cancel());
          a.fallbackMode &&
            0 < a.fallback_audiopool.length &&
            a.clearFallbackPool();
          b = b.replace(/[\"\`]/gm, "'");
          a.msgparameters = g || {};
          a.msgtext = b;
          a.msgvoicename = f;
          a.onstartFired = !1;
          var e = [];
          if (b.length > a.CHARACTER_LIMIT) {
            for (var c = b; c.length > a.CHARACTER_LIMIT; ) {
              var h = c.search(/[:!?.;]+/),
                m = "";
              if (-1 == h || h >= a.CHARACTER_LIMIT) h = c.search(/[,]+/);
              -1 == h && -1 == c.search(" ") && (h = 99);
              if (-1 == h || h >= a.CHARACTER_LIMIT)
                for (
                  var r = c.split(" "), h = 0;
                  h < r.length &&
                  !(m.length + r[h].length + 1 > a.CHARACTER_LIMIT);
                  h++
                )
                  m += (0 != h ? " " : "") + r[h];
              else m = c.substr(0, h + 1);
              c = c.substr(m.length, c.length - m.length);
              e.push(m);
            }
            0 < c.length && e.push(c);
          } else e.push(b);
          a.multipartText = e;
          h = null == f ? a.default_rv : a.getResponsiveVoice(f);
          !0 === h.deprecated &&
            console.warn(
              "ResponsiveVoice: Voice " +
                h.name +
                " is deprecated and will be removed in future releases"
            );
          c = {};
          if (null != h.mappedProfile) c = h.mappedProfile;
          else if (
            ((c.systemvoice = a.getMatchedVoice(h)),
            (c.collectionvoice = {}),
            null == c.systemvoice)
          ) {
            console.log("RV: ERROR: No voice found for: " + f);
            return;
          }
          1 == c.collectionvoice.fallbackvoice
            ? ((a.fallbackMode = !0), (a.fallback_parts = []))
            : (a.fallbackMode = !1);
          a.msgprofile = c;
          a.utterances = [];
          for (h = 0; h < e.length; h++)
            if (a.fallbackMode) {
              a.fallback_playbackrate = a.def_fallback_playbackrate;
              var m = a.selectBest([
                  c.collectionvoice.pitch,
                  c.systemvoice.pitch,
                  1
                ]),
                r = a.selectBest([
                  a.iOS9 ? 1 : null,
                  c.collectionvoice.rate,
                  c.systemvoice.rate,
                  1
                ]),
                F = a.selectBest([
                  c.collectionvoice.volume,
                  c.systemvoice.volume,
                  1
                ]),
                I;
              null != g &&
                ((m *= null != g.pitch ? g.pitch : 1),
                (r *= null != g.rate ? g.rate : 1),
                (F *= null != g.volume ? g.volume : 1),
                (I = g.extraParams || null));
              m /= 2;
              r /= 2;
              F *= 2;
              m = Math.min(Math.max(m, 0), 1);
              r = Math.min(Math.max(r, 0), 1);
              F = Math.min(Math.max(F, 0), 1);
              m =
                a.fallbackServicePath +
                "?t=" +
                encodeURIComponent(e[h]) +
                "&tl=" +
                (c.collectionvoice.lang || c.systemvoice.lang || "en-US") +
                "&sv=" +
                (c.collectionvoice.service || c.systemvoice.service || "") +
                "&vn=" +
                (c.collectionvoice.voicename || c.systemvoice.voicename || "") +
                "&pitch=" +
                m.toString() +
                "&rate=" +
                r.toString() +
                "&vol=" +
                F.toString();
              I && (m += "&extraParams=" + JSON.stringify(I));
              r = document.createElement("AUDIO");
              r.src = m;
              r.playbackRate = a.fallback_playbackrate;
              r.preload = "auto";
              r.load();
              a.fallback_parts.push(r);
            } else
              (m = new SpeechSynthesisUtterance()),
                (m.voice = c.systemvoice),
                (m.voiceURI = c.systemvoice.voiceURI),
                (m.volume = a.selectBest([
                  c.collectionvoice.volume,
                  c.systemvoice.volume,
                  1
                ])),
                (m.rate = a.selectBest([
                  a.iOS9 ? 1 : null,
                  c.collectionvoice.rate,
                  c.systemvoice.rate,
                  1
                ])),
                (m.pitch = a.selectBest([
                  c.collectionvoice.pitch,
                  c.systemvoice.pitch,
                  1
                ])),
                (m.text = e[h]),
                (m.lang = a.selectBest([
                  c.collectionvoice.lang,
                  c.systemvoice.lang
                ])),
                (m.rvIndex = h),
                (m.rvTotal = e.length),
                0 == h && (m.onstart = a.speech_onstart),
                (a.msgparameters.onendcalled = !1),
                null != g
                  ? (h < e.length - 1 && 1 < e.length
                      ? ((m.onend = a.onPartEnd),
                        m.hasOwnProperty("addEventListener") &&
                          m.addEventListener("end", a.onPartEnd))
                      : ((m.onend = a.speech_onend),
                        m.hasOwnProperty("addEventListener") &&
                          m.addEventListener("end", a.speech_onend)),
                    (m.onerror =
                      g.onerror ||
                      function(a) {
                        console.log("RV: Unknow Error");
                        console.log(a);
                      }),
                    (m.onpause = g.onpause),
                    (m.onresume = g.onresume),
                    (m.onmark = g.onmark),
                    (m.onboundary = g.onboundary || a.onboundary),
                    (m.pitch = null != g.pitch ? g.pitch : m.pitch),
                    (m.rate = a.iOS
                      ? (null != g.rate ? g.rate * g.rate : 1) * m.rate
                      : (null != g.rate ? g.rate : 1) * m.rate),
                    (m.volume = null != g.volume ? g.volume : m.volume))
                  : ((m.onend = a.speech_onend),
                    (m.onerror = function(a) {
                      console.log("RV: Unknow Error");
                      console.log(a);
                    })),
                a.utterances.push(m),
                0 == h && (a.currentMsg = m),
                console.log(m),
                a.tts_speak(m);
          a.fallbackMode &&
            ((a.fallback_part_index = 0), a.fallback_startPart());
        }
      };
      a.startTimeout = function(b, f) {
        var g = a.msgprofile.collectionvoice.timerSpeed;
        null == a.msgprofile.collectionvoice.timerSpeed && (g = 1);
        if (!(0 >= g)) {
          var e = b.split(/\s+/).length,
            c = (b.match(/[^ ]/gim) || b).length,
            g = (60 / a.WORDS_PER_MINUTE) * g * 1e3 * (c / e / 5.1) * e;
          3 > e && (g = 4e3);
          3e3 > g && (g = 3e3);
          a.timeoutId = setTimeout(f, g);
        }
      };
      a.checkAndCancelTimeout = function() {
        null != a.timeoutId &&
          (clearTimeout(a.timeoutId), (a.timeoutId = null));
      };
      a.speech_timedout = function() {
        a.cancel();
        a.cancelled = !1;
        a.speech_onend();
      };
      a.speech_onend = function() {
        a.checkAndCancelTimeout();
        !0 === a.cancelled
          ? (a.cancelled = !1)
          : null != a.msgparameters &&
            null != a.msgparameters.onend &&
            1 != a.msgparameters.onendcalled &&
            ((a.msgparameters.onendcalled = !0), a.msgparameters.onend());
      };
      a.speech_onstart = function() {
        if (!a.onstartFired) {
          a.onstartFired = !0;
          if (a.iOS || a.is_safari || a.useTimer)
            a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout);
          a.msgparameters.onendcalled = !1;
          if (null != a.msgparameters && null != a.msgparameters.onstart)
            a.msgparameters.onstart();
        }
      };
      a.fallback_startPart = function() {
        0 == a.fallback_part_index && a.speech_onstart();
        a.fallback_audio = a.fallback_parts[a.fallback_part_index];
        if (null == a.fallback_audio)
          console.log("RV: Fallback Audio is not available");
        else {
          var b = a.fallback_audio;
          a.fallback_audiopool.push(b);
          setTimeout(function() {
            b.playbackRate = a.fallback_playbackrate;
          }, 50);
          b.onloadedmetadata = function() {
            b.play();
            b.playbackRate = a.fallback_playbackrate;
          };
          a.fallback_errors &&
            (console.log("RV: Speech cancelled due to errors"),
            a.speech_onend());
          a.fallback_audio.play();
          a.fallback_audio.addEventListener("ended", a.fallback_finishPart);
          a.useTimer &&
            a.startTimeout(
              a.multipartText[a.fallback_part_index],
              a.fallback_finishPart
            );
        }
      };
      a.fallback_finishPart = function(b) {
        a.checkAndCancelTimeout();
        a.fallback_part_index < a.fallback_parts.length - 1
          ? (a.fallback_part_index++, a.fallback_startPart())
          : a.speech_onend();
      };
      a.cancel = function() {
        a.checkAndCancelTimeout();
        a.fallbackMode
          ? (null != a.fallback_audio && a.fallback_audio.pause(),
            a.clearFallbackPool())
          : ((a.cancelled = !0), speechSynthesis.cancel());
      };
      a.voiceSupport = function() {
        return "speechSynthesis" in window;
      };
      a.OnFinishedPlaying = function(b) {
        if (null != a.msgparameters && null != a.msgparameters.onend)
          a.msgparameters.onend();
      };
      a.setDefaultVoice = function(b) {
        b = a.getResponsiveVoice(b);
        null != b && (a.default_rv = b);
      };
      a.mapRVs = function() {
        for (var b = 0; b < a.responsivevoices.length; b++)
          for (
            var f = a.responsivevoices[b], g = 0;
            g < f.voiceIDs.length;
            g++
          ) {
            var e = a.voicecollection[f.voiceIDs[g]];
            if (1 != e.fallbackvoice) {
              var c = a.getSystemVoice(e.name);
              if (null != c) {
                f.mappedProfile = { systemvoice: c, collectionvoice: e };
                break;
              }
            } else {
              f.mappedProfile = { systemvoice: {}, collectionvoice: e };
              break;
            }
          }
      };
      a.getMatchedVoice = function(b) {
        for (var f = 0; f < b.voiceIDs.length; f++) {
          var g = a.getSystemVoice(a.voicecollection[b.voiceIDs[f]].name);
          if (null != g) return g;
        }
        return null;
      };
      a.getSystemVoice = function(b) {
        if ("undefined" === typeof a.systemvoices || null === a.systemvoices)
          return null;
        for (var f = 0; f < a.systemvoices.length; f++)
          if (0 == a.systemvoices[f].name.localeCompare(b))
            return a.systemvoices[f];
        return null;
      };
      a.getResponsiveVoice = function(b) {
        for (var f = 0; f < a.responsivevoices.length; f++)
          if (a.responsivevoices[f].name == b) return a.responsivevoices[f];
        return null;
      };
      a.Dispatch = function(b) {
        if (
          a.hasOwnProperty(b + "_callbacks") &&
          null != a[b + "_callbacks"] &&
          0 < a[b + "_callbacks"].length
        ) {
          for (var f = a[b + "_callbacks"], g = 0; g < f.length; g++) f[g]();
          return !0;
        }
        var e = b + "_callbacks_timeout",
          c = b + "_callbacks_timeoutCount";
        a.hasOwnProperty(e) ||
          ((a[c] = 10),
          (a[e] = setInterval(function() {
            --a[c];
            (a.Dispatch(b) || 0 > a[c]) && clearTimeout(a[e]);
          }, 50)));
        return !1;
      };
      a.AddEventListener = function(b, f) {
        a.hasOwnProperty(b + "_callbacks") || (a[b + "_callbacks"] = []);
        a[b + "_callbacks"].push(f);
      };
      a.addEventListener = a.AddEventListener;
      a.clickEvent = function() {
        if (a.iOS && !a.iOS_initialized) {
          console.log("Initializing iOS click event");
          var b = new SpeechSynthesisUtterance(" ");
          speechSynthesis.speak(b);
          a.iOS_initialized = !0;
        }
      };
      a.isPlaying = function() {
        return a.fallbackMode
          ? null != a.fallback_audio &&
              !a.fallback_audio.ended &&
              !a.fallback_audio.paused
          : speechSynthesis.speaking;
      };
      a.clearFallbackPool = function() {
        for (var b = 0; b < a.fallback_audiopool.length; b++)
          null != a.fallback_audiopool[b] &&
            (a.fallback_audiopool[b].pause(),
            (a.fallback_audiopool[b].src = ""));
        a.fallback_audiopool = [];
      };
      "complete" === document.readyState
        ? a.init()
        : document.addEventListener("DOMContentLoaded", function() {
            a.init();
          });
      a.selectBest = function(a) {
        for (var b = 0; b < a.length; b++) if (null != a[b]) return a[b];
        return null;
      };
      a.pause = function() {
        a.fallbackMode
          ? null != a.fallback_audio && a.fallback_audio.pause()
          : speechSynthesis.pause();
      };
      a.resume = function() {
        a.fallbackMode
          ? null != a.fallback_audio && a.fallback_audio.play()
          : speechSynthesis.resume();
      };
      a.tts_speak = function(b) {
        setTimeout(function() {
          a.cancelled = !1;
          speechSynthesis.speak(b);
        }, 0.01);
      };
      a.setVolume = function(b) {
        if (a.isPlaying())
          if (a.fallbackMode) {
            for (var f = 0; f < a.fallback_parts.length; f++)
              a.fallback_parts[f].volume = b;
            for (f = 0; f < a.fallback_audiopool.length; f++)
              a.fallback_audiopool[f].volume = b;
            a.fallback_audio.volume = b;
          } else
            for (f = 0; f < a.utterances.length; f++)
              a.utterances[f].volume = b;
      };
      a.onPartEnd = function(b) {
        if (null != a.msgparameters && null != a.msgparameters.onchuckend)
          a.msgparameters.onchuckend();
        a.Dispatch("OnPartEnd");
        b = a.utterances.indexOf(b.utterance);
        a.currentMsg = a.utterances[b + 1];
      };
      a.onboundary = function(b) {
        console.log("On Boundary");
        a.iOS && !a.onstartFired && a.speech_onstart();
      };
    },
    responsiveVoice = new ResponsiveVoice();
(function(a) {
  a.fn.drags = function(b) {
    b = a.extend({ handle: "", cursor: "move" }, b);
    return ("" === b.handle ? this : this.find(b.handle))
      .css("cursor", b.cursor)
      .on("mousedown", function(f) {
        var g =
            "" === b.handle
              ? a(this).addClass("draggable")
              : a(this)
                  .addClass("active-handle")
                  .parent()
                  .addClass("draggable"),
          e = g.css("z-index"),
          c = g.outerHeight(),
          h = g.outerWidth(),
          m = g.offset().top + c - f.pageY,
          r = g.offset().left + h - f.pageX;
        g.css("z-index", 1e5)
          .parents()
          .on("mousemove", function(b) {
            a(".draggable")
              .offset({ top: b.pageY + m - c, left: b.pageX + r - h })
              .on("mouseup", function() {
                a(this)
                  .removeClass("draggable")
                  .css("z-index", e);
              });
          });
        f.preventDefault();
      })
      .on("mouseup", function() {
        "" === b.handle
          ? a(this).removeClass("draggable")
          : a(this)
              .removeClass("active-handle")
              .parent()
              .removeClass("draggable");
      });
  };
})(jQuery);
(function(a) {
  var b, f, g, e, c, h, m, r, F, I;
  m = function(a) {
    var c, b, e, f;
    e = !1;
    c = ["Webkit", "Moz", "ms", "O"];
    b = document.createElement("div");
    a = a.toLowerCase();
    void 0 !== b.style[a] && (e = !0);
    if (!1 === e)
      for (a = a.charAt(0).toUpperCase() + a.substr(1), f = 0; f < c.length; ) {
        if (void 0 !== b.style[c[f] + a]) {
          e = !0;
          break;
        }
        f++;
      }
    return e;
  };
  g = function(a, c) {
    c.animate
      ? c._state_closing ||
        ((c._state_closing = !0),
        m("animation") && m("transform")
          ? (a.css("animation", c.animation_hide),
            setTimeout(function() {
              a.remove();
            }, 550))
          : a.fadeOut(400, function() {
              a.remove();
            }))
      : a.remove();
  };
  F = function(a, c) {
    c.animate &&
      (m("animation") && m("transform")
        ? a.css("animation", c.animation_show)
        : (a.hide(), a.fadeIn(500)));
  };
  r = function(b) {
    c(a.extend({}, h, b));
  };
  c = function(c) {
    var b, e;
    e = a(c.template);
    c.theme = a.notiny.themes[c.theme];
    e.addClass(c.theme.notification_class);
    b = e.find(".notiny-text");
    b.addClass(c.theme.text_class);
    b.html(c.text);
    b = e.find(".notiny-img");
    void 0 !== c.image
      ? (e.addClass("notiny-with-img"),
        b.css("display", "block"),
        b.addClass(c.theme.image_class),
        b.attr("src", c.image))
      : (b.hide(), e.addClass("notiny-without-img"));
    -1 === c.position.indexOf("fluid") && e.css("width", c.width);
    e.data("settings", c);
    f(e, c);
    return e;
  };
  f = function(a, c) {
    var b;
    b = e[c.position];
    b.addClass(c.theme.container_class);
    "top" === c.position.slice(-3) ? b.prepend(a) : b.append(a);
    b = c.position.split("-")[0];
    a.css("float", b);
    a.css("clear", b);
    c._state_closing = !1;
    c.clickhide &&
      (a.css("cursor", "pointer"),
      a.on("click", function() {
        g(a, c);
        return !1;
      }));
    c.autohide &&
      setTimeout(function() {
        g(a, c);
      }, c.delay + 500);
    F(a, c);
  };
  a.notiny = function(c) {
    b = a('<div class="notiny" />').appendTo(a("body"));
    h = {
      image: void 0,
      position: "right-bottom",
      theme: "dark",
      template:
        '<div class="notiny-base"><img class="notiny-img" /><div class="notiny-text"></div></div>',
      width: "300",
      text: "",
      background: !0,
      autohide: !0,
      clickhide: !0,
      delay: 3e3,
      animate: !0,
      animation_show: "notiny-animation-show 0.4s forwards",
      animation_hide: "notiny-animation-hide 0.5s forwards"
    };
    I = {
      container_class: "",
      notification_class: "",
      image_class: "",
      text_class: ""
    };
    e = {
      "left-top": a("<div />", {
        class: "notiny-container",
        css: { top: 10, left: 10 }
      }).appendTo(b),
      "left-bottom": a("<div />", {
        class: "notiny-container",
        css: { bottom: 10, left: 10 }
      }).appendTo(b),
      "right-top": a("<div />", {
        class: "notiny-container",
        css: { top: 10, right: 10 }
      }).appendTo(b),
      "right-bottom": a("<div />", {
        class: "notiny-container",
        css: { bottom: 10, right: 10 }
      }).appendTo(b),
      "fluid-top": a("<div />", {
        class: "notiny-container notiny-container-fluid-top",
        css: { top: 0, left: 0, right: 0 }
      }).appendTo(b),
      "fluid-bottom": a("<div />", {
        class: "notiny-container notiny-container-fluid-bottom",
        css: { bottom: 0, left: 0, right: 0 }
      }).appendTo(b)
    };
    r(c);
    return this;
  };
  a.notiny.addTheme = function(c, b) {
    var e;
    e = a.extend({}, I, b);
    (this.themes = this.themes || {})[c] = e;
  };
  a.notiny.close = function(a) {
    g(a, a.data("settings"));
  };
  a.notiny.addTheme("dark", {
    notification_class: "notiny-theme-dark notiny-default-vars"
  });
  a.notiny.addTheme("light", {
    notification_class: "notiny-theme-light notiny-default-vars"
  });
})(jQuery);
var kmrSimpleTabs = {
  sbContainerClass: "simpleTabs",
  sbNavClass: "stn",
  sbContentClass: "stc",
  sbCurrentNavClass: "current",
  sbCurrentTabClass: "currentTab",
  sbIdPrefix: "tabber",
  init: function() {
    if (!document.getElementsByTagName || !document.getElementById) return !1;
    for (var a = document.getElementsByTagName("div"), b = 0; b < a.length; b++)
      if (
        a[b].className == kmrSimpleTabs.sbContainerClass &&
        "true" !== a[b].getAttribute("init")
      ) {
        a[b].setAttribute("id", kmrSimpleTabs.sbIdPrefix + [b]);
        a[b].setAttribute("init", "true");
        for (
          var f = a[b].getAttribute("id"),
            g = a[b].getElementsByTagName("ul"),
            e = 0;
          e < g.length;
          e++
        )
          if (g[e].className == kmrSimpleTabs.sbNavClass)
            for (
              var c = g[e].getElementsByTagName("a"), h = 0;
              h < c.length;
              h++
            ) {
              c[h].setAttribute("id", f + "_a_" + h);
              if (kmrSimpleTabs.readCookie("simpleTabsCookie")) {
                var m = kmrSimpleTabs.readCookie("simpleTabsCookie").split("_"),
                  r = m[1],
                  m = m[2];
                c[h].parentNode.parentNode.parentNode.getAttribute("id") ==
                kmrSimpleTabs.sbIdPrefix + r
                  ? c[h].getAttribute("id") ==
                    kmrSimpleTabs.sbIdPrefix + r + "_a_" + m
                    ? (c[h].className = kmrSimpleTabs.sbCurrentNavClass)
                    : (c[h].className = "")
                  : (c[0].className = kmrSimpleTabs.sbCurrentNavClass);
              } else c[0].className = kmrSimpleTabs.sbCurrentNavClass;
              c[h].onclick = function() {
                kmrSimpleTabs.setCurrent(this, "simpleTabsCookie");
                return !1;
              };
            }
        g = a[b].getElementsByTagName("div");
        for (c = e = 0; c < g.length; c++)
          g[c].className == kmrSimpleTabs.sbContentClass &&
            (g[c].setAttribute("id", f + "_div_" + [e]),
            kmrSimpleTabs.readCookie("simpleTabsCookie")
              ? ((m = kmrSimpleTabs.readCookie("simpleTabsCookie").split("_")),
                (r = m[1]),
                (m = m[2]),
                g[c].parentNode.getAttribute("id") ==
                kmrSimpleTabs.sbIdPrefix + r
                  ? g[c].getAttribute("id") ==
                    kmrSimpleTabs.sbIdPrefix + r + "_div_" + m
                    ? (g[c].className =
                        kmrSimpleTabs.sbContentClass +
                        " " +
                        kmrSimpleTabs.sbCurrentTabClass)
                    : (g[c].className = kmrSimpleTabs.sbContentClass)
                  : (g[0].className =
                      kmrSimpleTabs.sbContentClass +
                      " " +
                      kmrSimpleTabs.sbCurrentTabClass))
              : (g[0].className =
                  kmrSimpleTabs.sbContentClass +
                  " " +
                  kmrSimpleTabs.sbCurrentTabClass),
            e++);
      }
  },
  setCurrent: function(a, b) {
    this.eraseCookie(b);
    for (
      var f = a.parentNode.parentNode.parentNode.getAttribute("id"),
        g = f + "_a_",
        g = a.getAttribute("id").replace(g, ""),
        e = a.parentNode.parentNode.getElementsByTagName("a"),
        c = 0;
      c < e.length;
      c++
    )
      e[c].className = "";
    a.className = kmrSimpleTabs.sbCurrentNavClass;
    for (
      var e = document.getElementById(f).getElementsByTagName("div"),
        c = new RegExp(kmrSimpleTabs.sbContentClass),
        h = 0;
      h < e.length;
      h++
    )
      c.test(e[h].className) && (e[h].className = kmrSimpleTabs.sbContentClass);
    document.getElementById(f + "_div_" + g).className =
      kmrSimpleTabs.sbContentClass + " " + kmrSimpleTabs.sbCurrentTabClass;
    f = f.replace(new RegExp(kmrSimpleTabs.sbIdPrefix), "");
    this.createCookie(b, "simpleTabsCookie_" + f + "_" + g, 1);
  },
  createCookie: function(a, b, f) {
    if (f) {
      var g = new Date();
      g.setTime(g.getTime() + 864e5 * f);
      f = "; expires=" + g.toGMTString();
    } else f = "";
    document.cookie = a + "=" + b + f + "; path=/";
  },
  readCookie: function(a) {
    a += "=";
    for (var b = document.cookie.split(";"), f = 0; f < b.length; f++) {
      for (var g = b[f]; " " == g.charAt(0); ) g = g.substring(1, g.length);
      if (0 == g.indexOf(a)) return g.substring(a.length, g.length);
    }
    return null;
  },
  eraseCookie: function(a) {
    this.createCookie(a, "", -1);
  },
  addLoadEvent: function(a) {
    var b = window.onload;
    window.onload =
      "function" != typeof window.onload
        ? a
        : function() {
            b && b();
            a();
          };
  }
};
kmrSimpleTabs.addLoadEvent(kmrSimpleTabs.init);
!(function(a, b) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define([], b)
    : "object" == typeof exports
    ? (exports.Raphael = b())
    : (a.Raphael = b());
})(window, function() {
  return (function(a) {
    function b(g) {
      if (f[g]) return f[g].exports;
      var e = (f[g] = { i: g, l: !1, exports: {} });
      return a[g].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
    }
    var f = {};
    return (
      (b.m = a),
      (b.c = f),
      (b.d = function(a, e, c) {
        b.o(a, e) ||
          Object.defineProperty(a, e, {
            configurable: !1,
            enumerable: !0,
            get: c
          });
      }),
      (b.r = function(a) {
        Object.defineProperty(a, "__esModule", { value: !0 });
      }),
      (b.n = function(a) {
        var e =
          a && a.__esModule
            ? function() {
                return a["default"];
              }
            : function() {
                return a;
              };
        return b.d(e, "a", e), e;
      }),
      (b.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }),
      (b.p = ""),
      b((b.s = 4))
    );
  })([
    function(a, b, f) {
      var g;
      f = [f(3)];
      void 0 ===
        (g = function(a) {
          function c(k) {
            if (c.is(k, "function"))
              return ba ? k() : a.on("raphael.DOMload", k);
            if (c.is(k, Q))
              return c._engine.create[z](c, k.splice(0, 3 + c.is(k[0], U))).add(
                k
              );
            var y = Array.prototype.slice.call(arguments, 0);
            if (c.is(y[y.length - 1], "function")) {
              var d = y.pop();
              return ba
                ? d.call(c._engine.create[z](c, y))
                : a.on("raphael.DOMload", function() {
                    d.call(c._engine.create[z](c, y));
                  });
            }
            return c._engine.create[z](c, arguments);
          }
          function b(k) {
            if ("function" == typeof k || Object(k) !== k) return k;
            var a = new k.constructor(),
              d;
            for (d in k) k.hasOwnProperty(d) && (a[d] = b(k[d]));
            return a;
          }
          function e(k, a, d) {
            return function J() {
              var y = Array.prototype.slice.call(arguments, 0),
                D = y.join("\u2400"),
                c = (J.cache = J.cache || {}),
                b = (J.count = J.count || []);
              if (c.hasOwnProperty(D)) {
                a: for (var y = b, b = D, e = 0, l = y.length; e < l; e++)
                  if (y[e] === b) {
                    y.push(y.splice(e, 1)[0]);
                    break a;
                  }
                D = d ? d(c[D]) : c[D];
              } else
                D =
                  (1e3 <= b.length && delete c[b.shift()],
                  b.push(D),
                  (c[D] = k[z](a, y)),
                  d ? d(c[D]) : c[D]);
              return D;
            };
          }
          function f() {
            return this.hex;
          }
          function g(k, a) {
            for (var y = [], d = 0, c = k.length; c - 2 * !a > d; d += 2) {
              var b = [
                { x: +k[d - 2], y: +k[d - 1] },
                { x: +k[d], y: +k[d + 1] },
                { x: +k[d + 2], y: +k[d + 3] },
                { x: +k[d + 4], y: +k[d + 5] }
              ];
              a
                ? d
                  ? c - 4 == d
                    ? (b[3] = { x: +k[0], y: +k[1] })
                    : c - 2 == d &&
                      ((b[2] = { x: +k[0], y: +k[1] }),
                      (b[3] = { x: +k[2], y: +k[3] }))
                  : (b[0] = { x: +k[c - 2], y: +k[c - 1] })
                : c - 4 == d
                ? (b[3] = b[2])
                : d || (b[0] = { x: +k[d], y: +k[d + 1] });
              y.push([
                "C",
                (-b[0].x + 6 * b[1].x + b[2].x) / 6,
                (-b[0].y + 6 * b[1].y + b[2].y) / 6,
                (b[1].x + 6 * b[2].x - b[3].x) / 6,
                (b[1].y + 6 * b[2].y - b[3].y) / 6,
                b[2].x,
                b[2].y
              ]);
            }
            return y;
          }
          function I(k, a, d, c, b, e, l, p, f) {
            null == f && (f = 1);
            f = (1 < f ? 1 : 0 > f ? 0 : f) / 2;
            for (
              var y = [
                  -0.1252,
                  0.1252,
                  -0.3678,
                  0.3678,
                  -0.5873,
                  0.5873,
                  -0.7699,
                  0.7699,
                  -0.9041,
                  0.9041,
                  -0.9816,
                  0.9816
                ],
                D = [
                  0.2491,
                  0.2491,
                  0.2335,
                  0.2335,
                  0.2032,
                  0.2032,
                  0.1601,
                  0.1601,
                  0.1069,
                  0.1069,
                  0.0472,
                  0.0472
                ],
                E = 0,
                J = 0;
              12 > J;
              J++
            )
              var h = f * y[J] + f,
                g =
                  h *
                    (h * (-3 * k + 9 * d - 9 * b + 3 * l) +
                      6 * k -
                      12 * d +
                      6 * b) -
                  3 * k +
                  3 * d,
                h =
                  h *
                    (h * (-3 * a + 9 * c - 9 * e + 3 * p) +
                      6 * a -
                      12 * c +
                      6 * e) -
                  3 * a +
                  3 * c,
                E = E + D[J] * t.sqrt(g * g + h * h);
            return f * E;
          }
          function A(k, a, d) {
            k = c._path2curve(k);
            a = c._path2curve(a);
            for (
              var y,
                D,
                b,
                e,
                l,
                p,
                f,
                h,
                t,
                g,
                m = d ? 0 : [],
                u = 0,
                B = k.length;
              u < B;
              u++
            ) {
              var n = k[u];
              if ("M" == n[0]) (y = l = n[1]), (D = p = n[2]);
              else {
                "C" == n[0]
                  ? ((y = (t = [y, D].concat(n.slice(1)))[6]), (D = t[7]))
                  : ((t = [y, D, y, D, l, p, l, p]), (y = l), (D = p));
                for (var n = 0, L = a.length; n < L; n++) {
                  var r = a[n];
                  if ("M" == r[0]) (b = f = r[1]), (e = h = r[2]);
                  else {
                    "C" == r[0]
                      ? ((b = (g = [b, e].concat(r.slice(1)))[6]), (e = g[7]))
                      : ((g = [b, e, b, e, f, h, f, h]), (b = f), (e = h));
                    var H = t,
                      A = g,
                      r = d,
                      v = c.bezierBBox(H),
                      Z = c.bezierBBox(A);
                    if (c.isBBoxIntersect(v, Z)) {
                      for (
                        var v = I.apply(0, H),
                          Z = I.apply(0, A),
                          v = w(~~(v / 5), 1),
                          Z = w(~~(Z / 5), 1),
                          F = [],
                          O = [],
                          z = {},
                          ba = r ? 0 : [],
                          W = 0;
                        W < v + 1;
                        W++
                      ) {
                        var U = c.findDotsAtSegment.apply(c, H.concat(W / v));
                        F.push({ x: U.x, y: U.y, t: W / v });
                      }
                      for (W = 0; W < Z + 1; W++)
                        (U = c.findDotsAtSegment.apply(c, A.concat(W / Z))),
                          O.push({ x: U.x, y: U.y, t: W / Z });
                      for (W = 0; W < v; W++)
                        for (H = 0; H < Z; H++) {
                          var V = F[W],
                            M = F[W + 1],
                            A = O[H],
                            U = O[H + 1],
                            T = 0.001 > q(M.x - V.x) ? "y" : "x",
                            G = 0.001 > q(U.x - A.x) ? "y" : "x",
                            Q;
                          b: {
                            Q = V.x;
                            var aa = V.y,
                              X = M.x,
                              R = M.y,
                              ha = A.x,
                              K = A.y,
                              P = U.x,
                              Y = U.y;
                            if (
                              !(
                                w(Q, X) < C(ha, P) ||
                                C(Q, X) > w(ha, P) ||
                                w(aa, R) < C(K, Y) ||
                                C(aa, R) > w(K, Y)
                              )
                            ) {
                              var ia = (Q - X) * (K - Y) - (aa - R) * (ha - P);
                              if (ia) {
                                var S =
                                    ((Q * R - aa * X) * (ha - P) -
                                      (Q - X) * (ha * Y - K * P)) /
                                    ia,
                                  ia =
                                    ((Q * R - aa * X) * (K - Y) -
                                      (aa - R) * (ha * Y - K * P)) /
                                    ia,
                                  ma = +S.toFixed(2),
                                  da = +ia.toFixed(2);
                                if (
                                  !(
                                    ma < +C(Q, X).toFixed(2) ||
                                    ma > +w(Q, X).toFixed(2) ||
                                    ma < +C(ha, P).toFixed(2) ||
                                    ma > +w(ha, P).toFixed(2) ||
                                    da < +C(aa, R).toFixed(2) ||
                                    da > +w(aa, R).toFixed(2) ||
                                    da < +C(K, Y).toFixed(2) ||
                                    da > +w(K, Y).toFixed(2)
                                  )
                                ) {
                                  Q = { x: S, y: ia };
                                  break b;
                                }
                              }
                            }
                            Q = void 0;
                          }
                          Q &&
                            z[Q.x.toFixed(4)] != Q.y.toFixed(4) &&
                            ((z[Q.x.toFixed(4)] = Q.y.toFixed(4)),
                            (V =
                              V.t +
                              q((Q[T] - V[T]) / (M[T] - V[T])) * (M.t - V.t)),
                            (A =
                              A.t +
                              q((Q[G] - A[G]) / (U[G] - A[G])) * (U.t - A.t)),
                            0 <= V &&
                              1.001 >= V &&
                              0 <= A &&
                              1.001 >= A &&
                              (r
                                ? ba++
                                : ba.push({
                                    x: Q.x,
                                    y: Q.y,
                                    t1: C(V, 1),
                                    t2: C(A, 1)
                                  })));
                        }
                      r = ba;
                    } else r = r ? 0 : [];
                    if (d) m += r;
                    else {
                      v = 0;
                      for (Z = r.length; v < Z; v++)
                        (r[v].segment1 = u),
                          (r[v].segment2 = n),
                          (r[v].bez1 = t),
                          (r[v].bez2 = g);
                      m = m.concat(r);
                    }
                  }
                }
              }
            }
            return m;
          }
          function v(k, a, d, c, b, e) {
            null != k
              ? ((this.a = +k),
                (this.b = +a),
                (this.c = +d),
                (this.d = +c),
                (this.e = +b),
                (this.f = +e))
              : ((this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.e = 0),
                (this.f = 0));
          }
          function T() {
            return (
              this.x +
              " " +
              this.y +
              " " +
              this.width +
              " \u00d7 " +
              this.height
            );
          }
          function X(k, a, d, c, b, e) {
            var y = 3 * a,
              D = 3 * (c - a) - y,
              E = 1 - y - D,
              l = 3 * d,
              p = 3 * (b - d) - l,
              J = 1 - l - p;
            return (function(k, a) {
              var d = (function(k, a) {
                var d, c, b, e;
                b = k;
                for (c = 0; 8 > c; c++) {
                  if (((e = ((E * b + D) * b + y) * b - k), q(e) < a)) return b;
                  if (1e-6 > q((d = (3 * E * b + 2 * D) * b + y))) break;
                  b -= e / d;
                }
                if (((c = 1), (b = k) < (d = 0))) return d;
                if (b > c) return c;
                for (
                  ;
                  d < c && !((e = ((E * b + D) * b + y) * b), q(e - k) < a);

                )
                  k > e ? (d = b) : (c = b), (b = (c - d) / 2 + d);
                return b;
              })(k, a);
              return ((J * d + p) * d + l) * d;
            })(k, 1 / (200 * e));
          }
          function G(k, a) {
            var d = [],
              y = {};
            if (((this.ms = a), (this.times = 1), k)) {
              for (var c in k)
                k.hasOwnProperty(c) && ((y[R(c)] = k[c]), d.push(R(c)));
              d.sort(gb);
            }
            this.anim = y;
            this.top = d[d.length - 1];
            this.percents = d;
          }
          function u(k, d, b, E, e, l) {
            b = R(b);
            var y,
              D,
              p,
              f,
              J,
              h,
              t = k.ms,
              g = {},
              N = {},
              w = {};
            if (E)
              for (q = 0, C = K.length; q < C; q++) {
                var m = K[q];
                if (m.el.id == d.id && m.anim == k) {
                  m.percent != b ? (K.splice(q, 1), (p = 1)) : (D = m);
                  d.attr(m.totalOrigin);
                  break;
                }
              }
            else E = +N;
            for (var q = 0, C = k.percents.length; q < C; q++) {
              if (k.percents[q] == b || k.percents[q] > E * k.top) {
                b = k.percents[q];
                J = k.percents[q - 1] || 0;
                t = (t / k.top) * (b - J);
                f = k.percents[q + 1];
                y = k.anim[b];
                break;
              }
              E && d.attr(k.anim[k.percents[q]]);
            }
            if (y) {
              if (D) (D.initstatus = E), (D.start = new Date() - D.ms * E);
              else {
                for (var n in y)
                  if (
                    y.hasOwnProperty(n) &&
                    (ya.hasOwnProperty(n) ||
                      d.paper.customAttributes.hasOwnProperty(n))
                  )
                    switch (
                      ((g[n] = d.attr(n)),
                      null == g[n] && (g[n] = hb[n]),
                      (N[n] = y[n]),
                      ya[n])
                    ) {
                      case U:
                        w[n] = (N[n] - g[n]) / t;
                        break;
                      case "colour":
                        g[n] = c.getRGB(g[n]);
                        q = c.getRGB(N[n]);
                        w[n] = {
                          r: (q.r - g[n].r) / t,
                          g: (q.g - g[n].g) / t,
                          b: (q.b - g[n].b) / t
                        };
                        break;
                      case "path":
                        var q = pa(g[n], N[n]),
                          r = q[1];
                        g[n] = q[0];
                        w[n] = [];
                        q = 0;
                        for (C = g[n].length; q < C; q++) {
                          w[n][q] = [0];
                          for (var u = 1, B = g[n][q].length; u < B; u++)
                            w[n][q][u] = (r[q][u] - g[n][q][u]) / t;
                        }
                        break;
                      case "transform":
                        q = d._;
                        if ((r = ib(q[n], N[n])))
                          for (
                            g[n] = r.from,
                              N[n] = r.to,
                              w[n] = [],
                              w[n].real = !0,
                              q = 0,
                              C = g[n].length;
                            q < C;
                            q++
                          )
                            for (
                              w[n][q] = [g[n][q][0]], u = 1, B = g[n][q].length;
                              u < B;
                              u++
                            )
                              w[n][q][u] = (N[n][q][u] - g[n][q][u]) / t;
                        else
                          (r = d.matrix || new v()),
                            (q = {
                              _: { transform: q.transform },
                              getBBox: function() {
                                return d.getBBox(1);
                              }
                            }),
                            (g[n] = [r.a, r.b, r.c, r.d, r.e, r.f]),
                            Ma(q, N[n]),
                            (N[n] = q._.transform),
                            (w[n] = [
                              (q.matrix.a - r.a) / t,
                              (q.matrix.b - r.b) / t,
                              (q.matrix.c - r.c) / t,
                              (q.matrix.d - r.d) / t,
                              (q.matrix.e - r.e) / t,
                              (q.matrix.f - r.f) / t
                            ]);
                        break;
                      case "csv":
                        r = P(y[n]).split(L);
                        C = P(g[n]).split(L);
                        if ("clip-rect" == n)
                          for (g[n] = C, w[n] = [], q = C.length; q--; )
                            w[n][q] = (r[q] - g[n][q]) / t;
                        N[n] = r;
                        break;
                      default:
                        for (
                          r = [].concat(y[n]),
                            C = [].concat(g[n]),
                            w[n] = [],
                            q = d.paper.customAttributes[n].length;
                          q--;

                        )
                          w[n][q] = ((r[q] || 0) - (C[q] || 0)) / t;
                    }
                n = y.easing;
                q = c.easing_formulas[n];
                if (!q)
                  if ((q = P(n).match(ma)) && 5 == q.length)
                    var H = q,
                      q = function(k) {
                        return X(k, +H[1], +H[2], +H[3], +H[4], t);
                      };
                  else q = jb;
                if (
                  ((m = {
                    anim: k,
                    percent: b,
                    timestamp: (h = y.start || k.start || +new Date()),
                    start: h + (k.del || 0),
                    status: 0,
                    initstatus: E || 0,
                    stop: !1,
                    ms: t,
                    easing: q,
                    from: g,
                    diff: w,
                    to: N,
                    el: d,
                    callback: y.callback,
                    prev: J,
                    next: f,
                    repeat: l || k.times,
                    origin: d.attr(),
                    totalOrigin: e
                  }),
                  K.push(m),
                  E &&
                    !D &&
                    !p &&
                    ((m.stop = !0),
                    (m.start = new Date() - t * E),
                    1 == K.length))
                )
                  return za();
                p && (m.start = new Date() - m.ms * E);
                1 == K.length && Na(za);
              }
              a("raphael.anim.start." + d.id, d, k);
            }
          }
          function V(k) {
            for (var a = 0; a < K.length; a++)
              K[a].el.paper == k && K.splice(a--, 1);
          }
          c.version = "2.2.0";
          c.eve = a;
          var ba,
            M,
            L = /[, ]+/,
            H = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
            O = /\{(\d+)\}/g,
            n = { doc: document, win: window },
            W = Object.prototype.hasOwnProperty.call(n.win, "Raphael"),
            aa = n.win.Raphael,
            Y = function() {
              this.ca = this.customAttributes = {};
            },
            z = "apply",
            da =
              "ontouchstart" in n.win ||
              (n.win.DocumentTouch && n.doc instanceof DocumentTouch),
            P = String,
            d = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel".split(
              " "
            ),
            l = {
              mousedown: "touchstart",
              mousemove: "touchmove",
              mouseup: "touchend"
            },
            p = P.prototype.toLowerCase,
            t = Math,
            w = t.max,
            C = t.min,
            q = t.abs,
            B = t.pow,
            Z = t.PI,
            U = "number",
            Q = "array",
            ia = Object.prototype.toString,
            ha =
              ((c._ISURL = /^url\(['"]?(.+?)['"]?\)$/i),
              /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
            kb = { NaN: 1, Infinity: 1, "-Infinity": 1 },
            ma = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            Aa = t.round,
            R = parseFloat,
            ja = parseInt,
            Oa = P.prototype.toUpperCase,
            hb = (c._availableAttrs = {
              "arrow-end": "none",
              "arrow-start": "none",
              blur: 0,
              "clip-rect": "0 0 1e9 1e9",
              cursor: "default",
              cx: 0,
              cy: 0,
              fill: "#fff",
              "fill-opacity": 1,
              font: '10px "Arial"',
              "font-family": '"Arial"',
              "font-size": "10",
              "font-style": "normal",
              "font-weight": 400,
              gradient: 0,
              height: 0,
              href: "http://raphaeljs.com/",
              "letter-spacing": 0,
              opacity: 1,
              path: "M0,0",
              r: 0,
              rx: 0,
              ry: 0,
              src: "",
              stroke: "#000",
              "stroke-dasharray": "",
              "stroke-linecap": "butt",
              "stroke-linejoin": "butt",
              "stroke-miterlimit": 0,
              "stroke-opacity": 1,
              "stroke-width": 1,
              target: "_blank",
              "text-anchor": "middle",
              title: "Raphael",
              transform: "",
              width: 0,
              x: 0,
              y: 0,
              class: ""
            }),
            ya = (c._availableAnimAttrs = {
              blur: U,
              "clip-rect": "csv",
              cx: U,
              cy: U,
              fill: "colour",
              "fill-opacity": U,
              "font-size": U,
              height: U,
              opacity: U,
              path: "path",
              r: U,
              rx: U,
              ry: U,
              stroke: "colour",
              "stroke-opacity": U,
              "stroke-width": U,
              transform: "transform",
              width: U,
              x: U,
              y: U
            }),
            Ba = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
            lb = { hs: 1, rg: 1 },
            mb = /,?([achlmqrstvxz]),?/gi,
            nb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            ob = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            Pa = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
            na =
              ((c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
              {}),
            gb = function(k, a) {
              return R(k) - R(a);
            },
            jb = function(k) {
              return k;
            },
            ra = (c._rectPath = function(k, a, d, c, b) {
              return b
                ? [
                    ["M", k + b, a],
                    ["l", d - 2 * b, 0],
                    ["a", b, b, 0, 0, 1, b, b],
                    ["l", 0, c - 2 * b],
                    ["a", b, b, 0, 0, 1, -b, b],
                    ["l", 2 * b - d, 0],
                    ["a", b, b, 0, 0, 1, -b, -b],
                    ["l", 0, 2 * b - c],
                    ["a", b, b, 0, 0, 1, b, -b],
                    ["z"]
                  ]
                : [["M", k, a], ["l", d, 0], ["l", 0, c], ["l", -d, 0], ["z"]];
            }),
            Qa = function(k, a, d, b) {
              return (
                null == b && (b = d),
                [
                  ["M", k, a],
                  ["m", 0, -b],
                  ["a", d, b, 0, 1, 1, 0, 2 * b],
                  ["a", d, b, 0, 1, 1, 0, -2 * b],
                  ["z"]
                ]
              );
            },
            sa = (c._getPath = {
              path: function(k) {
                return k.attr("path");
              },
              circle: function(k) {
                k = k.attrs;
                return Qa(k.cx, k.cy, k.r);
              },
              ellipse: function(k) {
                k = k.attrs;
                return Qa(k.cx, k.cy, k.rx, k.ry);
              },
              rect: function(k) {
                k = k.attrs;
                return ra(k.x, k.y, k.width, k.height, k.r);
              },
              image: function(k) {
                k = k.attrs;
                return ra(k.x, k.y, k.width, k.height);
              },
              text: function(k) {
                k = k._getBBox();
                return ra(k.x, k.y, k.width, k.height);
              },
              set: function(k) {
                k = k._getBBox();
                return ra(k.x, k.y, k.width, k.height);
              }
            }),
            Ca = (c.mapPath = function(k, a) {
              if (!a) return k;
              var d, b, y, c, e, l, p;
              y = 0;
              for (e = (k = pa(k)).length; y < e; y++)
                for (c = 1, l = (p = k[y]).length; c < l; c += 2)
                  (d = a.x(p[c], p[c + 1])),
                    (b = a.y(p[c], p[c + 1])),
                    (p[c] = d),
                    (p[c + 1] = b);
              return k;
            });
          if (
            ((c._g = n),
            (c.type =
              n.win.SVGAngle ||
              n.doc.implementation.hasFeature(
                "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                "1.1"
              )
                ? "SVG"
                : "VML"),
            "VML" == c.type)
          ) {
            var Da,
              Ea = n.doc.createElement("div");
            if (
              ((Ea.innerHTML = '<v:shape adj="1"/>'),
              ((Da = Ea.firstChild).style.behavior = "url(#default#VML)"),
              !Da || "object" != typeof Da.adj)
            )
              return (c.type = "");
            Ea = null;
          }
          c.svg = !(c.vml = "VML" == c.type);
          c._Paper = Y;
          c.fn = M = Y.prototype = c.prototype;
          c._id = 0;
          c.is = function(k, a) {
            return "finite" == (a = p.call(a))
              ? !kb.hasOwnProperty(+k)
              : "array" == a
              ? k instanceof Array
              : ("null" == a && null === k) ||
                (a == typeof k && null !== k) ||
                ("object" == a && k === Object(k)) ||
                ("array" == a && Array.isArray && Array.isArray(k)) ||
                ia
                  .call(k)
                  .slice(8, -1)
                  .toLowerCase() == a;
          };
          c.angle = function(k, a, d, b, e, l) {
            return null == e
              ? ((k -= d),
                (a -= b),
                k || a ? ((180 * t.atan2(-a, -k)) / Z + 540) % 360 : 0)
              : c.angle(k, a, e, l) - c.angle(d, b, e, l);
          };
          c.rad = function(k) {
            return ((k % 360) * Z) / 180;
          };
          c.deg = function(k) {
            return Math.round((((180 * k) / Z) % 360) * 1e3) / 1e3;
          };
          c.snapTo = function(k, a, d) {
            if (((d = c.is(d, "finite") ? d : 10), c.is(k, Q)))
              for (var b = k.length; b--; ) {
                if (q(k[b] - a) <= d) return k[b];
              }
            else {
              b = a % (k = +k);
              if (b < d) return a - b;
              if (b > k - d) return a - b + k;
            }
            return a;
          };
          var Ra, Sa;
          c.createUUID =
            ((Ra = /[xy]/g),
            (Sa = function(k) {
              var a = (16 * t.random()) | 0;
              return ("x" == k ? a : (3 & a) | 8).toString(16);
            }),
            function() {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
                .replace(Ra, Sa)
                .toUpperCase();
            });
          c.setWindow = function(k) {
            a("raphael.setWindow", c, n.win, k);
            n.win = k;
            n.doc = n.win.document;
            c._engine.initWin && c._engine.initWin(n.win);
          };
          var ta = function(k) {
              if (c.vml) {
                var a,
                  d = /^\s+|\s+$/g;
                try {
                  var b = new ActiveXObject("htmlfile");
                  b.write("<body>");
                  b.close();
                  a = b.body;
                } catch (yb) {
                  a = createPopup().document.body;
                }
                var l = a.createTextRange();
                ta = e(function(k) {
                  try {
                    a.style.color = P(k).replace(d, "");
                    var b = l.queryCommandValue("ForeColor");
                    return (
                      "#" +
                      (
                        "000000" +
                        (
                          ((255 & b) << 16) |
                          (65280 & b) |
                          ((16711680 & b) >>> 16)
                        ).toString(16)
                      ).slice(-6)
                    );
                  } catch (zb) {
                    return "none";
                  }
                });
              } else {
                var p = n.doc.createElement("i");
                p.title = "Rapha\u00ebl Colour Picker";
                p.style.display = "none";
                n.doc.body.appendChild(p);
                ta = e(function(k) {
                  return (
                    (p.style.color = k),
                    n.doc.defaultView
                      .getComputedStyle(p, "")
                      .getPropertyValue("color")
                  );
                });
              }
              return ta(k);
            },
            pb = function() {
              return "hsb(" + [this.h, this.s, this.b] + ")";
            },
            qb = function() {
              return "hsl(" + [this.h, this.s, this.l] + ")";
            },
            Ta = function() {
              return this.hex;
            },
            Ua = function(k, a, d) {
              if (
                (null == a &&
                  c.is(k, "object") &&
                  "r" in k &&
                  "g" in k &&
                  "b" in k &&
                  ((d = k.b), (a = k.g), (k = k.r)),
                null == a && c.is(k, "string"))
              )
                (d = c.getRGB(k)), (k = d.r), (a = d.g), (d = d.b);
              return (
                (1 < k || 1 < a || 1 < d) &&
                  ((k /= 255), (a /= 255), (d /= 255)),
                [k, a, d]
              );
            },
            Va = function(a, d, b, e) {
              var k = {
                r: (a *= 255),
                g: (d *= 255),
                b: (b *= 255),
                hex: c.rgb(a, d, b),
                toString: Ta
              };
              return c.is(e, "finite") && (k.opacity = e), k;
            };
          c.color = function(a) {
            var k;
            return (
              c.is(a, "object") && "h" in a && "s" in a && "b" in a
                ? ((k = c.hsb2rgb(a)),
                  (a.r = k.r),
                  (a.g = k.g),
                  (a.b = k.b),
                  (a.hex = k.hex))
                : c.is(a, "object") && "h" in a && "s" in a && "l" in a
                ? ((k = c.hsl2rgb(a)),
                  (a.r = k.r),
                  (a.g = k.g),
                  (a.b = k.b),
                  (a.hex = k.hex))
                : (c.is(a, "string") && (a = c.getRGB(a)),
                  c.is(a, "object") && "r" in a && "g" in a && "b" in a
                    ? ((k = c.rgb2hsl(a)),
                      (a.h = k.h),
                      (a.s = k.s),
                      (a.l = k.l),
                      (k = c.rgb2hsb(a)),
                      (a.v = k.b))
                    : ((a = {
                        hex: "none"
                      }).r = a.g = a.b = a.h = a.s = a.v = a.l = -1)),
              (a.toString = Ta),
              a
            );
          };
          c.hsb2rgb = function(a, d, b, c) {
            var k, y, D, e, E;
            return (
              this.is(a, "object") &&
                "h" in a &&
                "s" in a &&
                "b" in a &&
                ((b = a.b), (d = a.s), (c = a.o), (a = a.h)),
              (e =
                (E = b * d) * (1 - q(((a = ((a *= 360) % 360) / 60) % 2) - 1))),
              (k = y = D = b - E),
              Va(
                k + [E, e, 0, 0, e, E][(a = ~~a)],
                y + [e, E, E, e, 0, 0][a],
                D + [0, 0, e, E, E, e][a],
                c
              )
            );
          };
          c.hsl2rgb = function(a, d, b, c) {
            var k, y, D, e, E;
            return (
              this.is(a, "object") &&
                "h" in a &&
                "s" in a &&
                "l" in a &&
                ((b = a.l), (d = a.s), (a = a.h)),
              (1 < a || 1 < d || 1 < b) && ((a /= 360), (d /= 100), (b /= 100)),
              (a = ((a *= 360) % 360) / 60),
              (e = (E = 2 * d * (0.5 > b ? b : 1 - b)) * (1 - q((a % 2) - 1))),
              (k = y = D = b - E / 2),
              Va(
                k + [E, e, 0, 0, e, E][(a = ~~a)],
                y + [e, E, E, e, 0, 0][a],
                D + [0, 0, e, E, E, e][a],
                c
              )
            );
          };
          c.rgb2hsb = function(a, d, b) {
            var k, c;
            return (
              (a = (b = Ua(a, d, b))[0]),
              (d = b[1]),
              (b = b[2]),
              {
                h:
                  ((((0 == (c = (k = w(a, d, b)) - C(a, d, b))
                    ? null
                    : k == a
                    ? (d - b) / c
                    : k == d
                    ? (b - a) / c + 2
                    : (a - d) / c + 4) +
                    360) %
                    6) *
                    60) /
                  360,
                s: 0 == c ? 0 : c / k,
                b: k,
                toString: pb
              }
            );
          };
          c.rgb2hsl = function(a, d, b) {
            var k, c, y, e;
            return (
              (a = (b = Ua(a, d, b))[0]),
              (d = b[1]),
              (b = b[2]),
              (k = ((c = w(a, d, b)) + (y = C(a, d, b))) / 2),
              {
                h:
                  ((((0 == (e = c - y)
                    ? null
                    : c == a
                    ? (d - b) / e
                    : c == d
                    ? (b - a) / e + 2
                    : (a - d) / e + 4) +
                    360) %
                    6) *
                    60) /
                  360,
                s: 0 == e ? 0 : 0.5 > k ? e / (2 * k) : e / (2 - 2 * k),
                l: k,
                toString: qb
              }
            );
          };
          c._path2string = function() {
            return this.join(",").replace(mb, "$1");
          };
          c._preload = function(a, d) {
            var k = n.doc.createElement("img");
            k.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            k.onload = function() {
              d.call(this);
              this.onload = null;
              n.doc.body.removeChild(this);
            };
            k.onerror = function() {
              n.doc.body.removeChild(this);
            };
            n.doc.body.appendChild(k);
            k.src = a;
          };
          c.getRGB = e(function(a) {
            if (!a || (a = P(a)).indexOf("-") + 1)
              return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: f
              };
            if ("none" == a)
              return { r: -1, g: -1, b: -1, hex: "none", toString: f };
            !lb.hasOwnProperty(a.toLowerCase().substring(0, 2)) &&
              "#" != a.charAt() &&
              (a = ta(a));
            var k, d, b, e, l, p;
            return (a = a.match(ha))
              ? (a[2] &&
                  ((b = ja(a[2].substring(5), 16)),
                  (d = ja(a[2].substring(3, 5), 16)),
                  (k = ja(a[2].substring(1, 3), 16))),
                a[3] &&
                  ((b = ja((l = a[3].charAt(3)) + l, 16)),
                  (d = ja((l = a[3].charAt(2)) + l, 16)),
                  (k = ja((l = a[3].charAt(1)) + l, 16))),
                a[4] &&
                  ((p = a[4].split(Ba)),
                  (k = R(p[0])),
                  "%" == p[0].slice(-1) && (k *= 2.55),
                  (d = R(p[1])),
                  "%" == p[1].slice(-1) && (d *= 2.55),
                  (b = R(p[2])),
                  "%" == p[2].slice(-1) && (b *= 2.55),
                  "rgba" == a[1].toLowerCase().slice(0, 4) && (e = R(p[3])),
                  p[3] && "%" == p[3].slice(-1) && (e /= 100)),
                a[5]
                  ? ((p = a[5].split(Ba)),
                    (k = R(p[0])),
                    "%" == p[0].slice(-1) && (k *= 2.55),
                    (d = R(p[1])),
                    "%" == p[1].slice(-1) && (d *= 2.55),
                    (b = R(p[2])),
                    "%" == p[2].slice(-1) && (b *= 2.55),
                    ("deg" == p[0].slice(-3) || "\u00b0" == p[0].slice(-1)) &&
                      (k /= 360),
                    "hsba" == a[1].toLowerCase().slice(0, 4) && (e = R(p[3])),
                    p[3] && "%" == p[3].slice(-1) && (e /= 100),
                    c.hsb2rgb(k, d, b, e))
                  : a[6]
                  ? ((p = a[6].split(Ba)),
                    (k = R(p[0])),
                    "%" == p[0].slice(-1) && (k *= 2.55),
                    (d = R(p[1])),
                    "%" == p[1].slice(-1) && (d *= 2.55),
                    (b = R(p[2])),
                    "%" == p[2].slice(-1) && (b *= 2.55),
                    ("deg" == p[0].slice(-3) || "\u00b0" == p[0].slice(-1)) &&
                      (k /= 360),
                    "hsla" == a[1].toLowerCase().slice(0, 4) && (e = R(p[3])),
                    p[3] && "%" == p[3].slice(-1) && (e /= 100),
                    c.hsl2rgb(k, d, b, e))
                  : (((a = { r: k, g: d, b: b, toString: f }).hex =
                      "#" +
                      (16777216 | b | (d << 8) | (k << 16))
                        .toString(16)
                        .slice(1)),
                    c.is(e, "finite") && (a.opacity = e),
                    a))
              : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: f };
          }, c);
          c.hsb = e(function(a, d, b) {
            return c.hsb2rgb(a, d, b).hex;
          });
          c.hsl = e(function(a, d, b) {
            return c.hsl2rgb(a, d, b).hex;
          });
          c.rgb = e(function(a, d, b) {
            return (
              "#" +
              (
                (b + 0.5) |
                16777216 |
                (((d + 0.5) | 0) << 8) |
                (((a + 0.5) | 0) << 16)
              )
                .toString(16)
                .slice(1)
            );
          });
          c.getColor = function(a) {
            a = this.getColor.start = this.getColor.start || {
              h: 0,
              s: 1,
              b: a || 0.75
            };
            var k = this.hsb2rgb(a.h, a.s, a.b);
            return (
              (a.h += 0.075),
              1 < a.h &&
                ((a.h = 0),
                (a.s -= 0.2),
                0 >= a.s && (this.getColor.start = { h: 0, s: 1, b: a.b })),
              k.hex
            );
          };
          c.getColor.reset = function() {
            delete this.start;
          };
          c.parsePathString = function(a) {
            if (!a) return null;
            var k = la(a);
            if (k.arr) return fa(k.arr);
            var d = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
              },
              b = [];
            return (
              c.is(a, Q) && c.is(a[0], Q) && (b = fa(a)),
              b.length ||
                P(a).replace(nb, function(a, k, c) {
                  var e = [];
                  a = k.toLowerCase();
                  if (
                    (c.replace(Pa, function(a, k) {
                      k && e.push(+k);
                    }),
                    "m" == a &&
                      2 < e.length &&
                      (b.push([k].concat(e.splice(0, 2))),
                      (a = "l"),
                      (k = "m" == k ? "l" : "L")),
                    "r" == a)
                  )
                    b.push([k].concat(e));
                  else
                    for (
                      ;
                      e.length >= d[a] &&
                      (b.push([k].concat(e.splice(0, d[a]))), d[a]);

                    );
                }),
              (b.toString = c._path2string),
              (k.arr = fa(b)),
              b
            );
          };
          c.parseTransformString = e(function(a) {
            if (!a) return null;
            var k = [];
            return (
              c.is(a, Q) && c.is(a[0], Q) && (k = fa(a)),
              k.length ||
                P(a).replace(ob, function(a, d, b) {
                  var c = [];
                  p.call(d);
                  b.replace(Pa, function(a, k) {
                    k && c.push(+k);
                  });
                  k.push([d].concat(c));
                }),
              (k.toString = c._path2string),
              k
            );
          });
          var la = function(a) {
            var k = (la.ps = la.ps || {});
            return (
              k[a] ? (k[a].sleep = 100) : (k[a] = { sleep: 100 }),
              setTimeout(function() {
                for (var d in k)
                  k.hasOwnProperty(d) &&
                    d != a &&
                    (k[d].sleep--, !k[d].sleep && delete k[d]);
              }),
              k[a]
            );
          };
          c.findDotsAtSegment = function(a, d, b, c, e, l, p, f, g) {
            var k = 1 - g,
              y = B(k, 3),
              D = B(k, 2),
              E = g * g,
              h = E * g,
              J = y * a + 3 * D * g * b + 3 * k * g * g * e + h * p,
              y = y * d + 3 * D * g * c + 3 * k * g * g * l + h * f,
              D = a + 2 * g * (b - a) + E * (e - 2 * b + a),
              h = d + 2 * g * (c - d) + E * (l - 2 * c + d),
              w = b + 2 * g * (e - b) + E * (p - 2 * e + b),
              E = c + 2 * g * (l - c) + E * (f - 2 * l + c);
            a = k * a + g * b;
            d = k * d + g * c;
            e = k * e + g * p;
            l = k * l + g * f;
            f = 90 - (180 * t.atan2(D - w, h - E)) / Z;
            return (
              (D > w || h < E) && (f += 180),
              {
                x: J,
                y: y,
                m: { x: D, y: h },
                n: { x: w, y: E },
                start: { x: a, y: d },
                end: { x: e, y: l },
                alpha: f
              }
            );
          };
          c.bezierBBox = function(a, d, b, e, l, p, g, f) {
            c.is(a, "array") || (a = [a, d, b, e, l, p, g, f]);
            a = Wa.apply(null, a);
            return {
              x: a.min.x,
              y: a.min.y,
              x2: a.max.x,
              y2: a.max.y,
              width: a.max.x - a.min.x,
              height: a.max.y - a.min.y
            };
          };
          c.isPointInsideBBox = function(a, d, b) {
            return d >= a.x && d <= a.x2 && b >= a.y && b <= a.y2;
          };
          c.isBBoxIntersect = function(a, d) {
            var k = c.isPointInsideBBox;
            return (
              k(d, a.x, a.y) ||
              k(d, a.x2, a.y) ||
              k(d, a.x, a.y2) ||
              k(d, a.x2, a.y2) ||
              k(a, d.x, d.y) ||
              k(a, d.x2, d.y) ||
              k(a, d.x, d.y2) ||
              k(a, d.x2, d.y2) ||
              (((a.x < d.x2 && a.x > d.x) || (d.x < a.x2 && d.x > a.x)) &&
                ((a.y < d.y2 && a.y > d.y) || (d.y < a.y2 && d.y > a.y)))
            );
          };
          c.pathIntersection = function(a, d) {
            return A(a, d);
          };
          c.pathIntersectionNumber = function(a, d) {
            return A(a, d, 1);
          };
          c.isPointInsidePath = function(a, d, b) {
            var k = c.pathBBox(a);
            return (
              c.isPointInsideBBox(k, d, b) &&
              1 ==
                A(
                  a,
                  [
                    ["M", d, b],
                    ["H", k.x2 + 10]
                  ],
                  1
                ) %
                  2
            );
          };
          c._removedFactory = function(k) {
            return function() {
              a(
                "raphael.log",
                null,
                "Rapha\u00ebl: you are calling to method \u201c" +
                  k +
                  "\u201d of removed object",
                k
              );
            };
          };
          var Fa = (c.pathBBox = function(a) {
              var k = la(a);
              if (k.bbox) return b(k.bbox);
              if (!a) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
              for (
                var d,
                  c = 0,
                  e = 0,
                  l = [],
                  p = [],
                  g = 0,
                  f = (a = pa(a)).length;
                g < f;
                g++
              )
                "M" == (d = a[g])[0]
                  ? ((c = d[1]), (e = d[2]), l.push(c), p.push(e))
                  : ((c = Wa(c, e, d[1], d[2], d[3], d[4], d[5], d[6])),
                    (l = l.concat(c.min.x, c.max.x)),
                    (p = p.concat(c.min.y, c.max.y)),
                    (c = d[5]),
                    (e = d[6]));
              a = C[z](0, l);
              d = C[z](0, p);
              l = w[z](0, l);
              p = w[z](0, p);
              g = l - a;
              f = p - d;
              p = {
                x: a,
                y: d,
                x2: l,
                y2: p,
                width: g,
                height: f,
                cx: a + g / 2,
                cy: d + f / 2
              };
              return (k.bbox = b(p)), p;
            }),
            fa = function(a) {
              a = b(a);
              return (a.toString = c._path2string), a;
            },
            rb = (c._pathToRelative = function(a) {
              var k = la(a);
              if (k.rel) return fa(k.rel);
              (c.is(a, Q) && c.is(a && a[0], Q)) || (a = c.parsePathString(a));
              var d = [],
                b = 0,
                e = 0,
                l = 0,
                g = 0,
                f = 0;
              "M" == a[0][0] &&
                ((l = b = a[0][1]),
                (g = e = a[0][2]),
                f++,
                d.push(["M", b, e]));
              for (var t = a.length; f < t; f++) {
                var h = (d[f] = []),
                  w = a[f];
                if (w[0] != p.call(w[0]))
                  switch (((h[0] = p.call(w[0])), h[0])) {
                    case "a":
                      h[1] = w[1];
                      h[2] = w[2];
                      h[3] = w[3];
                      h[4] = w[4];
                      h[5] = w[5];
                      h[6] = +(w[6] - b).toFixed(3);
                      h[7] = +(w[7] - e).toFixed(3);
                      break;
                    case "v":
                      h[1] = +(w[1] - e).toFixed(3);
                      break;
                    case "m":
                      (l = w[1]), (g = w[2]);
                    default:
                      for (var q = 1, m = w.length; q < m; q++)
                        h[q] = +(w[q] - (q % 2 ? b : e)).toFixed(3);
                  }
                else
                  for (
                    d[f] = [],
                      "m" == w[0] && ((l = w[1] + b), (g = w[2] + e)),
                      h = 0,
                      q = w.length;
                    h < q;
                    h++
                  )
                    d[f][h] = w[h];
                w = d[f].length;
                switch (d[f][0]) {
                  case "z":
                    b = l;
                    e = g;
                    break;
                  case "h":
                    b += +d[f][w - 1];
                    break;
                  case "v":
                    e += +d[f][w - 1];
                    break;
                  default:
                    (b += +d[f][w - 2]), (e += +d[f][w - 1]);
                }
              }
              return (d.toString = c._path2string), (k.rel = fa(d)), d;
            }),
            Xa = (c._pathToAbsolute = function(a) {
              var d = la(a);
              if (d.abs) return fa(d.abs);
              if (
                ((c.is(a, Q) && c.is(a && a[0], Q)) ||
                  (a = c.parsePathString(a)),
                !a || !a.length)
              )
                return [["M", 0, 0]];
              var k = [],
                b = 0,
                e = 0,
                l = 0,
                p = 0,
                f = 0;
              "M" == a[0][0] &&
                ((l = b = +a[0][1]),
                (p = e = +a[0][2]),
                f++,
                (k[0] = ["M", b, e]));
              for (
                var h,
                  t =
                    3 == a.length &&
                    "M" == a[0][0] &&
                    "R" == a[1][0].toUpperCase() &&
                    "Z" == a[2][0].toUpperCase(),
                  w = f,
                  q = a.length;
                w < q;
                w++
              ) {
                if ((k.push((f = [])), (h = a[w])[0] != Oa.call(h[0])))
                  switch (((f[0] = Oa.call(h[0])), f[0])) {
                    case "A":
                      f[1] = h[1];
                      f[2] = h[2];
                      f[3] = h[3];
                      f[4] = h[4];
                      f[5] = h[5];
                      f[6] = +(h[6] + b);
                      f[7] = +(h[7] + e);
                      break;
                    case "V":
                      f[1] = +h[1] + e;
                      break;
                    case "H":
                      f[1] = +h[1] + b;
                      break;
                    case "R":
                      for (
                        var m = [b, e].concat(h.slice(1)), n = 2, C = m.length;
                        n < C;
                        n++
                      )
                        (m[n] = +m[n] + b), (m[++n] = +m[n] + e);
                      k.pop();
                      k = k.concat(g(m, t));
                      break;
                    case "M":
                      (l = +h[1] + b), (p = +h[2] + e);
                    default:
                      for (n = 1, C = h.length; n < C; n++)
                        f[n] = +h[n] + (n % 2 ? b : e);
                  }
                else if ("R" == h[0])
                  (m = [b, e].concat(h.slice(1))),
                    k.pop(),
                    (k = k.concat(g(m, t))),
                    (f = ["R"].concat(h.slice(-2)));
                else for (m = 0, n = h.length; m < n; m++) f[m] = h[m];
                switch (f[0]) {
                  case "Z":
                    b = l;
                    e = p;
                    break;
                  case "H":
                    b = f[1];
                    break;
                  case "V":
                    e = f[1];
                    break;
                  case "M":
                    (l = f[f.length - 2]), (p = f[f.length - 1]);
                  default:
                    (b = f[f.length - 2]), (e = f[f.length - 1]);
                }
              }
              return (k.toString = c._path2string), (d.abs = fa(k)), k;
            }),
            ua = function(a, d, b, c) {
              return [a, d, b, c, b, c];
            },
            Ya = function(a, d, b, c, e, l) {
              return [
                (1 / 3) * a + (2 / 3) * b,
                (1 / 3) * d + (2 / 3) * c,
                (1 / 3) * e + (2 / 3) * b,
                (1 / 3) * l + (2 / 3) * c,
                e,
                l
              ];
            },
            Za = function(a, d, b, c, l, p, f, g, h, w) {
              var k,
                y = (120 * Z) / 180,
                E = (Z / 180) * (+l || 0),
                D = [],
                m = e(function(a, k, d) {
                  return {
                    x: a * t.cos(d) - k * t.sin(d),
                    y: a * t.sin(d) + k * t.cos(d)
                  };
                });
              if (w) (N = w[0]), (k = w[1]), (p = w[2]), (J = w[3]);
              else {
                a = (k = m(a, d, -E)).x;
                d = k.y;
                g = (k = m(g, h, -E)).x;
                h = k.y;
                t.cos((Z / 180) * l);
                t.sin((Z / 180) * l);
                k = (a - g) / 2;
                N = (d - h) / 2;
                J = (k * k) / (b * b) + (N * N) / (c * c);
                1 < J && ((b *= J = t.sqrt(J)), (c *= J));
                var J = b * b,
                  n = c * c,
                  J =
                    (p == f ? -1 : 1) *
                    t.sqrt(
                      q(
                        (J * n - J * N * N - n * k * k) /
                          (J * N * N + n * k * k)
                      )
                    );
                p = (J * b * N) / c + (a + g) / 2;
                var J = (J * -c * k) / b + (d + h) / 2,
                  N = t.asin(((d - J) / c).toFixed(9));
                k = t.asin(((h - J) / c).toFixed(9));
                N = a < p ? Z - N : N;
                k = g < p ? Z - k : k;
                0 > N && (N = 2 * Z + N);
                0 > k && (k = 2 * Z + k);
                f && N > k && (N -= 2 * Z);
                !f && k > N && (k -= 2 * Z);
              }
              if (q(k - N) > y) {
                var D = k,
                  n = g,
                  C = h;
                k = N + y * (f && k > N ? 1 : -1);
                g = p + b * t.cos(k);
                h = J + c * t.sin(k);
                D = Za(g, h, b, c, l, 0, f, n, C, [k, D, p, J]);
              }
              p = k - N;
              l = t.cos(N);
              y = t.sin(N);
              f = t.cos(k);
              k = t.sin(k);
              p = t.tan(p / 4);
              b = (4 / 3) * b * p;
              p *= (4 / 3) * c;
              c = [a, d];
              a = [a + b * y, d - p * l];
              d = [g + b * k, h - p * f];
              g = [g, h];
              if (((a[0] = 2 * c[0] - a[0]), (a[1] = 2 * c[1] - a[1]), w))
                return [a, d, g].concat(D);
              w = [];
              h = 0;
              for (
                g = (D = [a, d, g]
                  .concat(D)
                  .join()
                  .split(",")).length;
                h < g;
                h++
              )
                w[h] = h % 2 ? m(D[h - 1], D[h], E).y : m(D[h], D[h + 1], E).x;
              return w;
            },
            va = function(a, d, b, c, e, l, p, f, h) {
              var k = 1 - h;
              return {
                x:
                  B(k, 3) * a +
                  3 * B(k, 2) * h * b +
                  3 * k * h * h * e +
                  B(h, 3) * p,
                y:
                  B(k, 3) * d +
                  3 * B(k, 2) * h * c +
                  3 * k * h * h * l +
                  B(h, 3) * f
              };
            },
            Wa = e(function(a, d, b, c, e, l, p, f) {
              var k,
                h = e - 2 * b + a - (p - 2 * e + b),
                y = 2 * (b - a) - 2 * (e - b),
                g = a - b,
                E = (-y + t.sqrt(y * y - 4 * h * g)) / 2 / h,
                D = (-y - t.sqrt(y * y - 4 * h * g)) / 2 / h,
                m = [d, f],
                J = [a, p];
              return (
                "1e12" < q(E) && (E = 0.5),
                "1e12" < q(D) && (D = 0.5),
                0 < E &&
                  1 > E &&
                  ((k = va(a, d, b, c, e, l, p, f, E)),
                  J.push(k.x),
                  m.push(k.y)),
                0 < D &&
                  1 > D &&
                  ((k = va(a, d, b, c, e, l, p, f, D)),
                  J.push(k.x),
                  m.push(k.y)),
                (h = l - 2 * c + d - (f - 2 * l + c)),
                (g = d - c),
                (E =
                  (-(y = 2 * (c - d) - 2 * (l - c)) +
                    t.sqrt(y * y - 4 * h * g)) /
                  2 /
                  h),
                (D = (-y - t.sqrt(y * y - 4 * h * g)) / 2 / h),
                "1e12" < q(E) && (E = 0.5),
                "1e12" < q(D) && (D = 0.5),
                0 < E &&
                  1 > E &&
                  ((k = va(a, d, b, c, e, l, p, f, E)),
                  J.push(k.x),
                  m.push(k.y)),
                0 < D &&
                  1 > D &&
                  ((k = va(a, d, b, c, e, l, p, f, D)),
                  J.push(k.x),
                  m.push(k.y)),
                {
                  min: { x: C[z](0, J), y: C[z](0, m) },
                  max: { x: w[z](0, J), y: w[z](0, m) }
                }
              );
            }),
            pa = (c._path2curve = e(
              function(a, d) {
                var k = !d && la(a);
                if (!d && k.curve) return fa(k.curve);
                var b = Xa(a),
                  c = d && Xa(d),
                  e = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                  },
                  l = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                  },
                  p = function(a, d, k) {
                    var b, c;
                    if (!a) return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                    switch (
                      (!(a[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null), a[0])
                    ) {
                      case "M":
                        d.X = a[1];
                        d.Y = a[2];
                        break;
                      case "A":
                        a = ["C"].concat(
                          Za[z](0, [d.x, d.y].concat(a.slice(1)))
                        );
                        break;
                      case "S":
                        "C" == k || "S" == k
                          ? ((b = 2 * d.x - d.bx), (c = 2 * d.y - d.by))
                          : ((b = d.x), (c = d.y));
                        a = ["C", b, c].concat(a.slice(1));
                        break;
                      case "T":
                        "Q" == k || "T" == k
                          ? ((d.qx = 2 * d.x - d.qx), (d.qy = 2 * d.y - d.qy))
                          : ((d.qx = d.x), (d.qy = d.y));
                        a = ["C"].concat(Ya(d.x, d.y, d.qx, d.qy, a[1], a[2]));
                        break;
                      case "Q":
                        d.qx = a[1];
                        d.qy = a[2];
                        a = ["C"].concat(Ya(d.x, d.y, a[1], a[2], a[3], a[4]));
                        break;
                      case "L":
                        a = ["C"].concat(ua(d.x, d.y, a[1], a[2]));
                        break;
                      case "H":
                        a = ["C"].concat(ua(d.x, d.y, a[1], d.y));
                        break;
                      case "V":
                        a = ["C"].concat(ua(d.x, d.y, d.x, a[1]));
                        break;
                      case "Z":
                        a = ["C"].concat(ua(d.x, d.y, d.X, d.Y));
                    }
                    return a;
                  },
                  f = function(a, d) {
                    if (7 < a[d].length) {
                      a[d].shift();
                      for (var k = a[d]; k.length; )
                        (y[d] = "A"),
                          c && (g[d] = "A"),
                          a.splice(d++, 0, ["C"].concat(k.splice(0, 6)));
                      a.splice(d, 1);
                      n = w(b.length, (c && c.length) || 0);
                    }
                  },
                  h = function(a, d, k, e, l) {
                    a &&
                      d &&
                      "M" == a[l][0] &&
                      "M" != d[l][0] &&
                      (d.splice(l, 0, ["M", e.x, e.y]),
                      (k.bx = 0),
                      (k.by = 0),
                      (k.x = a[l][1]),
                      (k.y = a[l][2]),
                      (n = w(b.length, (c && c.length) || 0)));
                  },
                  y = [],
                  g = [],
                  t = "",
                  m = "",
                  q = 0,
                  n = w(b.length, (c && c.length) || 0);
                for (; q < n; q++) {
                  b[q] && (t = b[q][0]);
                  "C" != t && ((y[q] = t), q && (m = y[q - 1]));
                  b[q] = p(b[q], e, m);
                  "A" != y[q] && "C" == t && (y[q] = "C");
                  f(b, q);
                  c &&
                    (c[q] && (t = c[q][0]),
                    "C" != t && ((g[q] = t), q && (m = g[q - 1])),
                    (c[q] = p(c[q], l, m)),
                    "A" != g[q] && "C" == t && (g[q] = "C"),
                    f(c, q));
                  h(b, c, e, l, q);
                  h(c, b, l, e, q);
                  var C = b[q],
                    r = c && c[q],
                    u = C.length,
                    B = c && r.length;
                  e.x = C[u - 2];
                  e.y = C[u - 1];
                  e.bx = R(C[u - 4]) || e.x;
                  e.by = R(C[u - 3]) || e.y;
                  l.bx = c && (R(r[B - 4]) || l.x);
                  l.by = c && (R(r[B - 3]) || l.y);
                  l.x = c && r[B - 2];
                  l.y = c && r[B - 1];
                }
                return c || (k.curve = fa(b)), c ? [b, c] : b;
              },
              null,
              fa
            )),
            wa =
              ((c._parseDots = e(function(a) {
                for (var d = [], k = 0, b = a.length; k < b; k++) {
                  var e = {},
                    l = a[k].match(/^([^:]*):?([\d\.]*)/);
                  if (((e.color = c.getRGB(l[1])), e.color.error)) return null;
                  e.opacity = e.color.opacity;
                  e.color = e.color.hex;
                  l[2] && (e.offset = l[2] + "%");
                  d.push(e);
                }
                k = 1;
                for (b = d.length - 1; k < b; k++)
                  if (!d[k].offset) {
                    a = R(d[k - 1].offset || 0);
                    l = 0;
                    for (e = k + 1; e < b; e++)
                      if (d[e].offset) {
                        l = d[e].offset;
                        break;
                      }
                    l || ((l = 100), (e = b));
                    for (l = (R(l) - a) / (e - k + 1); k < e; k++)
                      (a += l), (d[k].offset = a + "%");
                  }
                return d;
              })),
              (c._tear = function(a, d) {
                a == d.top && (d.top = a.prev);
                a == d.bottom && (d.bottom = a.next);
                a.next && (a.next.prev = a.prev);
                a.prev && (a.prev.next = a.next);
              })),
            sb =
              ((c._tofront = function(a, d) {
                d.top !== a &&
                  (wa(a, d),
                  (a.next = null),
                  (a.prev = d.top),
                  (d.top.next = a),
                  (d.top = a));
              }),
              (c._toback = function(a, d) {
                d.bottom !== a &&
                  (wa(a, d),
                  (a.next = d.bottom),
                  (a.prev = null),
                  (d.bottom.prev = a),
                  (d.bottom = a));
              }),
              (c._insertafter = function(a, d, b) {
                wa(a, b);
                d == b.top && (b.top = a);
                d.next && (d.next.prev = a);
                a.next = d.next;
                a.prev = d;
                d.next = a;
              }),
              (c._insertbefore = function(a, d, b) {
                wa(a, b);
                d == b.bottom && (b.bottom = a);
                d.prev && (d.prev.next = a);
                a.prev = d.prev;
                d.prev = a;
                a.next = d;
              }),
              (c.toMatrix = function(a, d) {
                var k = Fa(a),
                  b = {
                    _: { transform: "" },
                    getBBox: function() {
                      return k;
                    }
                  };
                return Ma(b, d), b.matrix;
              })),
            Ma =
              ((c.transformPath = function(a, d) {
                return Ca(a, sb(a, d));
              }),
              (c._extractTransform = function(a, d) {
                if (null == d) return a._.transform;
                d = P(d).replace(/\.{3}|\u2026/g, a._.transform || "");
                var k, b;
                k = c.parseTransformString(d);
                var e = 0,
                  l = 1,
                  p = 1,
                  f = a._;
                b = new v();
                if (((f.transform = k || []), k))
                  for (var h = 0, g = k.length; h < g; h++) {
                    var y,
                      t,
                      w,
                      q,
                      m,
                      n = k[h],
                      C = n.length,
                      r = P(n[0]).toLowerCase(),
                      u = n[0] != r,
                      B = u ? b.invert() : 0;
                    "t" == r && 3 == C
                      ? u
                        ? ((y = B.x(0, 0)),
                          (t = B.y(0, 0)),
                          (w = B.x(n[1], n[2])),
                          (q = B.y(n[1], n[2])),
                          b.translate(w - y, q - t))
                        : b.translate(n[1], n[2])
                      : "r" == r
                      ? 2 == C
                        ? ((m = m || a.getBBox(1)),
                          b.rotate(n[1], m.x + m.width / 2, m.y + m.height / 2),
                          (e += n[1]))
                        : 4 == C &&
                          (u
                            ? ((w = B.x(n[2], n[3])),
                              (q = B.y(n[2], n[3])),
                              b.rotate(n[1], w, q))
                            : b.rotate(n[1], n[2], n[3]),
                          (e += n[1]))
                      : "s" == r
                      ? 2 == C || 3 == C
                        ? ((m = m || a.getBBox(1)),
                          b.scale(
                            n[1],
                            n[C - 1],
                            m.x + m.width / 2,
                            m.y + m.height / 2
                          ),
                          (l *= n[1]),
                          (p *= n[C - 1]))
                        : 5 == C &&
                          (u
                            ? ((w = B.x(n[3], n[4])),
                              (q = B.y(n[3], n[4])),
                              b.scale(n[1], n[2], w, q))
                            : b.scale(n[1], n[2], n[3], n[4]),
                          (l *= n[1]),
                          (p *= n[2]))
                      : "m" == r &&
                        7 == C &&
                        b.add(n[1], n[2], n[3], n[4], n[5], n[6]);
                    f.dirtyT = 1;
                    a.matrix = b;
                  }
                a.matrix = b;
                f.sx = l;
                f.sy = p;
                f.deg = e;
                f.dx = k = b.e;
                f.dy = b = b.f;
                1 == l && 1 == p && !e && f.bbox
                  ? ((f.bbox.x += +k), (f.bbox.y += +b))
                  : (f.dirtyT = 1);
              })),
            $a = function(a) {
              var d = a[0];
              switch (d.toLowerCase()) {
                case "t":
                  return [d, 0, 0];
                case "m":
                  return [d, 1, 0, 0, 1, 0, 0];
                case "r":
                  return 4 == a.length ? [d, 0, a[2], a[3]] : [d, 0];
                case "s":
                  return 5 == a.length
                    ? [d, 1, 1, a[3], a[4]]
                    : 3 == a.length
                    ? [d, 1, 1]
                    : [d, 1];
              }
            },
            ib = (c._equaliseTransform = function(a, d) {
              d = P(d).replace(/\.{3}|\u2026/g, a);
              a = c.parseTransformString(a) || [];
              d = c.parseTransformString(d) || [];
              for (
                var k,
                  b,
                  e,
                  l,
                  p = w(a.length, d.length),
                  f = [],
                  h = [],
                  g = 0;
                g < p;
                g++
              ) {
                if (
                  ((e = a[g] || $a(d[g])),
                  (l = d[g] || $a(e)),
                  e[0] != l[0] ||
                    ("r" == e[0].toLowerCase() &&
                      (e[2] != l[2] || e[3] != l[3])) ||
                    ("s" == e[0].toLowerCase() &&
                      (e[3] != l[3] || e[4] != l[4])))
                )
                  return;
                f[g] = [];
                h[g] = [];
                k = 0;
                for (b = w(e.length, l.length); k < b; k++)
                  k in e && (f[g][k] = e[k]), k in l && (h[g][k] = l[k]);
              }
              return { from: f, to: h };
            });
          c._getContainer = function(a, d, b, e) {
            var k;
            if (
              null !=
              (k = null != e || c.is(a, "object") ? a : n.doc.getElementById(a))
            )
              return k.tagName
                ? null == d
                  ? {
                      container: k,
                      width: k.style.pixelWidth || k.offsetWidth,
                      height: k.style.pixelHeight || k.offsetHeight
                    }
                  : { container: k, width: d, height: b }
                : { container: 1, x: a, y: d, width: b, height: e };
          };
          c.pathToRelative = rb;
          c._engine = {};
          c.path2curve = pa;
          c.matrix = function(a, d, b, c, e, l) {
            return new v(a, d, b, c, e, l);
          };
          (function(a) {
            function d(a) {
              return a[0] * a[0] + a[1] * a[1];
            }
            function k(a) {
              var k = t.sqrt(d(a));
              a[0] && (a[0] /= k);
              a[1] && (a[1] /= k);
            }
            a.add = function(a, d, k, b, c, e) {
              var l = [[], [], []],
                p = [
                  [this.a, this.c, this.e],
                  [this.b, this.d, this.f],
                  [0, 0, 1]
                ];
              d = [
                [a, k, c],
                [d, b, e],
                [0, 0, 1]
              ];
              a &&
                a instanceof v &&
                (d = [
                  [a.a, a.c, a.e],
                  [a.b, a.d, a.f],
                  [0, 0, 1]
                ]);
              for (a = 0; 3 > a; a++)
                for (k = 0; 3 > k; k++) {
                  for (b = c = 0; 3 > b; b++) c += p[a][b] * d[b][k];
                  l[a][k] = c;
                }
              this.a = l[0][0];
              this.b = l[1][0];
              this.c = l[0][1];
              this.d = l[1][1];
              this.e = l[0][2];
              this.f = l[1][2];
            };
            a.invert = function() {
              var a = this.a * this.d - this.b * this.c;
              return new v(
                this.d / a,
                -this.b / a,
                -this.c / a,
                this.a / a,
                (this.c * this.f - this.d * this.e) / a,
                (this.b * this.e - this.a * this.f) / a
              );
            };
            a.clone = function() {
              return new v(this.a, this.b, this.c, this.d, this.e, this.f);
            };
            a.translate = function(a, d) {
              this.add(1, 0, 0, 1, a, d);
            };
            a.scale = function(a, d, k, b) {
              null == d && (d = a);
              (k || b) && this.add(1, 0, 0, 1, k, b);
              this.add(a, 0, 0, d, 0, 0);
              (k || b) && this.add(1, 0, 0, 1, -k, -b);
            };
            a.rotate = function(a, d, k) {
              a = c.rad(a);
              d = d || 0;
              k = k || 0;
              var b = +t.cos(a).toFixed(9);
              a = +t.sin(a).toFixed(9);
              this.add(b, a, -a, b, d, k);
              this.add(1, 0, 0, 1, -d, -k);
            };
            a.x = function(a, d) {
              return a * this.a + d * this.c + this.e;
            };
            a.y = function(a, d) {
              return a * this.b + d * this.d + this.f;
            };
            a.get = function(a) {
              return +this[P.fromCharCode(97 + a)].toFixed(4);
            };
            a.toString = function() {
              return c.svg
                ? "matrix(" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5)
                    ].join() +
                    ")"
                : [
                    this.get(0),
                    this.get(2),
                    this.get(1),
                    this.get(3),
                    0,
                    0
                  ].join();
            };
            a.toFilter = function() {
              return (
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                this.get(0) +
                ", M12=" +
                this.get(2) +
                ", M21=" +
                this.get(1) +
                ", M22=" +
                this.get(3) +
                ", Dx=" +
                this.get(4) +
                ", Dy=" +
                this.get(5) +
                ", sizingmethod='auto expand')"
              );
            };
            a.offset = function() {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            };
            a.split = function() {
              var a = {};
              a.dx = this.e;
              a.dy = this.f;
              var b = [
                [this.a, this.c],
                [this.b, this.d]
              ];
              a.scalex = t.sqrt(d(b[0]));
              k(b[0]);
              a.shear = b[0][0] * b[1][0] + b[0][1] * b[1][1];
              b[1] = [b[1][0] - b[0][0] * a.shear, b[1][1] - b[0][1] * a.shear];
              a.scaley = t.sqrt(d(b[1]));
              k(b[1]);
              a.shear /= a.scaley;
              var e = -b[0][1],
                b = b[1][1];
              return (
                0 > b
                  ? ((a.rotate = c.deg(t.acos(b))),
                    0 > e && (a.rotate = 360 - a.rotate))
                  : (a.rotate = c.deg(t.asin(e))),
                (a.isSimple = !(
                  +a.shear.toFixed(9) ||
                  (a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate)
                )),
                (a.isSuperSimple =
                  !+a.shear.toFixed(9) &&
                  a.scalex.toFixed(9) == a.scaley.toFixed(9) &&
                  !a.rotate),
                (a.noRotation = !+a.shear.toFixed(9) && !a.rotate),
                a
              );
            };
            a.toTransformString = function(a) {
              a = a || this.split();
              return a.isSimple
                ? ((a.scalex = +a.scalex.toFixed(4)),
                  (a.scaley = +a.scaley.toFixed(4)),
                  (a.rotate = +a.rotate.toFixed(4)),
                  (a.dx || a.dy ? "t" + [a.dx, a.dy] : "") +
                    (1 != a.scalex || 1 != a.scaley
                      ? "s" + [a.scalex, a.scaley, 0, 0]
                      : "") +
                    (a.rotate ? "r" + [a.rotate, 0, 0] : ""))
                : "m" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5)
                    ];
            };
          })(v.prototype);
          for (
            var tb = function() {
                this.returnValue = !1;
              },
              ub = function() {
                return this.originalEvent.preventDefault();
              },
              vb = function() {
                this.cancelBubble = !0;
              },
              wb = function() {
                return this.originalEvent.stopPropagation();
              },
              ab = function(a) {
                return {
                  x:
                    a.clientX +
                    (n.doc.documentElement.scrollLeft || n.doc.body.scrollLeft),
                  y:
                    a.clientY +
                    (n.doc.documentElement.scrollTop || n.doc.body.scrollTop)
                };
              },
              xb = n.doc.addEventListener
                ? function(a, d, b, c) {
                    var k = function(a) {
                      var d = ab(a);
                      return b.call(c, a, d.x, d.y);
                    };
                    if ((a.addEventListener(d, k, !1), da && l[d])) {
                      var e = function(d) {
                        for (
                          var k = ab(d),
                            e = d,
                            l = 0,
                            p = d.targetTouches && d.targetTouches.length;
                          l < p;
                          l++
                        )
                          if (d.targetTouches[l].target == a) {
                            (d = d.targetTouches[l]).originalEvent = e;
                            d.preventDefault = ub;
                            d.stopPropagation = wb;
                            break;
                          }
                        return b.call(c, d, k.x, k.y);
                      };
                      a.addEventListener(l[d], e, !1);
                    }
                    return function() {
                      return (
                        a.removeEventListener(d, k, !1),
                        da && l[d] && a.removeEventListener(l[d], e, !1),
                        !0
                      );
                    };
                  }
                : n.doc.attachEvent
                ? function(a, d, b, c) {
                    var k = function(a) {
                      a = a || n.win.event;
                      var d =
                          a.clientX +
                          (n.doc.documentElement.scrollLeft ||
                            n.doc.body.scrollLeft),
                        k =
                          a.clientY +
                          (n.doc.documentElement.scrollTop ||
                            n.doc.body.scrollTop);
                      return (
                        (a.preventDefault = a.preventDefault || tb),
                        (a.stopPropagation = a.stopPropagation || vb),
                        b.call(c, a, d, k)
                      );
                    };
                    return (
                      a.attachEvent("on" + d, k),
                      function() {
                        return a.detachEvent("on" + d, k), !0;
                      }
                    );
                  }
                : void 0,
              ka = [],
              Ga = function(d) {
                for (
                  var b,
                    k = d.clientX,
                    c = d.clientY,
                    e = n.doc.documentElement.scrollTop || n.doc.body.scrollTop,
                    l =
                      n.doc.documentElement.scrollLeft || n.doc.body.scrollLeft,
                    p = ka.length;
                  p--;

                ) {
                  if (((b = ka[p]), da && d.touches))
                    for (var f, h = d.touches.length; h--; ) {
                      if ((f = d.touches[h]).identifier == b.el._drag.id) {
                        k = f.clientX;
                        c = f.clientY;
                        (d.originalEvent
                          ? d.originalEvent
                          : d
                        ).preventDefault();
                        break;
                      }
                    }
                  else d.preventDefault();
                  var h = b.el.node,
                    g = h.nextSibling,
                    t = h.parentNode,
                    w = h.style.display;
                  n.win.opera && t.removeChild(h);
                  h.style.display = "none";
                  f = b.el.paper.getElementByPoint(k, c);
                  h.style.display = w;
                  n.win.opera && (g ? t.insertBefore(h, g) : t.appendChild(h));
                  f && a("raphael.drag.over." + b.el.id, b.el, f);
                  k += l;
                  c += e;
                  a(
                    "raphael.drag.move." + b.el.id,
                    b.move_scope || b.el,
                    k - b.el._drag.x,
                    c - b.el._drag.y,
                    k,
                    c,
                    d
                  );
                }
              },
              Ha = function(d) {
                c.unmousemove(Ga).unmouseup(Ha);
                for (var b, k = ka.length; k--; )
                  ((b = ka[k]).el._drag = {}),
                    a(
                      "raphael.drag.end." + b.el.id,
                      b.end_scope || b.start_scope || b.move_scope || b.el,
                      d
                    );
                ka = [];
              },
              S = (c.el = {}),
              bb = d.length;
            bb--;

          )
            !(function(a) {
              c[a] = S[a] = function(d, b) {
                return (
                  c.is(d, "function") &&
                    ((this.events = this.events || []),
                    this.events.push({
                      name: a,
                      f: d,
                      unbind: xb(
                        this.shape || this.node || n.doc,
                        a,
                        d,
                        b || this
                      )
                    })),
                  this
                );
              };
              c["un" + a] = S["un" + a] = function(d) {
                for (var b = this.events || [], k = b.length; k--; )
                  b[k].name != a ||
                    (!c.is(d, "undefined") && b[k].f != d) ||
                    (b[k].unbind(),
                    b.splice(k, 1),
                    !b.length && delete this.events);
                return this;
              };
            })(d[bb]);
          S.data = function(d, b) {
            var k = (na[this.id] = na[this.id] || {});
            if (0 == arguments.length) return k;
            if (1 == arguments.length) {
              if (c.is(d, "object")) {
                for (var e in d) d.hasOwnProperty(e) && this.data(e, d[e]);
                return this;
              }
              return a("raphael.data.get." + this.id, this, k[d], d), k[d];
            }
            return (
              (k[d] = b), a("raphael.data.set." + this.id, this, b, d), this
            );
          };
          S.removeData = function(a) {
            return (
              null == a
                ? (na[this.id] = {})
                : na[this.id] && delete na[this.id][a],
              this
            );
          };
          S.getData = function() {
            return b(na[this.id] || {});
          };
          S.hover = function(a, d, b, c) {
            return this.mouseover(a, b).mouseout(d, c || b);
          };
          S.unhover = function(a, d) {
            return this.unmouseover(a).unmouseout(d);
          };
          var oa = [];
          S.drag = function(d, b, e, l, p, f) {
            function k(k) {
              (k.originalEvent || k).preventDefault();
              var h = k.clientX,
                g = k.clientY,
                t = n.doc.documentElement.scrollTop || n.doc.body.scrollTop,
                w = n.doc.documentElement.scrollLeft || n.doc.body.scrollLeft;
              if (((this._drag.id = k.identifier), da && k.touches))
                for (var y, q = k.touches.length; q--; )
                  if (
                    ((y = k.touches[q]),
                    (this._drag.id = y.identifier),
                    y.identifier == this._drag.id)
                  ) {
                    h = y.clientX;
                    g = y.clientY;
                    break;
                  }
              this._drag.x = h + w;
              this._drag.y = g + t;
              !ka.length && c.mousemove(Ga).mouseup(Ha);
              ka.push({
                el: this,
                move_scope: l,
                start_scope: p,
                end_scope: f
              });
              b && a.on("raphael.drag.start." + this.id, b);
              d && a.on("raphael.drag.move." + this.id, d);
              e && a.on("raphael.drag.end." + this.id, e);
              a(
                "raphael.drag.start." + this.id,
                p || l || this,
                k.clientX + w,
                k.clientY + t,
                k
              );
            }
            return (
              (this._drag = {}),
              oa.push({ el: this, start: k }),
              this.mousedown(k),
              this
            );
          };
          S.onDragOver = function(d) {
            d
              ? a.on("raphael.drag.over." + this.id, d)
              : a.unbind("raphael.drag.over." + this.id);
          };
          S.undrag = function() {
            for (var d = oa.length; d--; )
              oa[d].el == this &&
                (this.unmousedown(oa[d].start),
                oa.splice(d, 1),
                a.unbind("raphael.drag.*." + this.id));
            !oa.length && c.unmousemove(Ga).unmouseup(Ha);
            ka = [];
          };
          M.circle = function(a, d, b) {
            a = c._engine.circle(this, a || 0, d || 0, b || 0);
            return this.__set__ && this.__set__.push(a), a;
          };
          M.rect = function(a, d, b, e, l) {
            a = c._engine.rect(this, a || 0, d || 0, b || 0, e || 0, l || 0);
            return this.__set__ && this.__set__.push(a), a;
          };
          M.ellipse = function(a, d, b, e) {
            a = c._engine.ellipse(this, a || 0, d || 0, b || 0, e || 0);
            return this.__set__ && this.__set__.push(a), a;
          };
          M.path = function(a) {
            a && !c.is(a, "string") && !c.is(a[0], Q) && (a += "");
            var d = c._engine.path(c.format[z](c, arguments), this);
            return this.__set__ && this.__set__.push(d), d;
          };
          M.image = function(a, d, b, e, l) {
            a = c._engine.image(
              this,
              a || "about:blank",
              d || 0,
              b || 0,
              e || 0,
              l || 0
            );
            return this.__set__ && this.__set__.push(a), a;
          };
          M.text = function(a, d, b) {
            a = c._engine.text(this, a || 0, d || 0, P(b));
            return this.__set__ && this.__set__.push(a), a;
          };
          M.set = function(a) {
            !c.is(a, "array") &&
              (a = Array.prototype.splice.call(arguments, 0, arguments.length));
            var d = new qa(a);
            return (
              this.__set__ && this.__set__.push(d),
              (d.paper = this),
              (d.type = "set"),
              d
            );
          };
          M.setStart = function(a) {
            this.__set__ = a || this.set();
          };
          M.setFinish = function(a) {
            a = this.__set__;
            return delete this.__set__, a;
          };
          M.getSize = function() {
            var a = this.canvas.parentNode;
            return { width: a.offsetWidth, height: a.offsetHeight };
          };
          M.setSize = function(a, d) {
            return c._engine.setSize.call(this, a, d);
          };
          M.setViewBox = function(a, d, b, e, l) {
            return c._engine.setViewBox.call(this, a, d, b, e, l);
          };
          M.top = M.bottom = null;
          M.raphael = c;
          M.getElementByPoint = function(a, d) {
            var b,
              k,
              c,
              e,
              l,
              p,
              f = this.canvas,
              h = n.doc.elementFromPoint(a, d);
            if (n.win.opera && "svg" == h.tagName) {
              var g =
                ((b = f.getBoundingClientRect()),
                (k = f.ownerDocument),
                (c = k.body),
                (e = k.documentElement),
                (l = e.clientTop || c.clientTop || 0),
                (p = e.clientLeft || c.clientLeft || 0),
                {
                  y:
                    b.top +
                    (n.win.pageYOffset || e.scrollTop || c.scrollTop) -
                    l,
                  x:
                    b.left +
                    (n.win.pageXOffset || e.scrollLeft || c.scrollLeft) -
                    p
                });
              b = f.createSVGRect();
              b.x = a - g.x;
              b.y = d - g.y;
              b.width = b.height = 1;
              g = f.getIntersectionList(b, null);
              g.length && (h = g[g.length - 1]);
            }
            if (!h) return null;
            for (; h.parentNode && h != f.parentNode && !h.raphael; )
              h = h.parentNode;
            return (
              h == this.canvas.parentNode && (h = f),
              h && h.raphael ? this.getById(h.raphaelid) : null
            );
          };
          M.getElementsByBBox = function(a) {
            var d = this.set();
            return (
              this.forEach(function(b) {
                c.isBBoxIntersect(b.getBBox(), a) && d.push(b);
              }),
              d
            );
          };
          M.getById = function(a) {
            for (var d = this.bottom; d; ) {
              if (d.id == a) return d;
              d = d.next;
            }
            return null;
          };
          M.forEach = function(a, d) {
            for (var b = this.bottom; b && !1 !== a.call(d, b); ) b = b.next;
            return this;
          };
          M.getElementsByPoint = function(a, d) {
            var b = this.set();
            return (
              this.forEach(function(k) {
                k.isPointInside(a, d) && b.push(k);
              }),
              b
            );
          };
          S.isPointInside = function(a, d) {
            var b = (this.realPath = sa[this.type](this));
            return (
              this.attr("transform") &&
                this.attr("transform").length &&
                (b = c.transformPath(b, this.attr("transform"))),
              c.isPointInsidePath(b, a, d)
            );
          };
          S.getBBox = function(a) {
            if (this.removed) return {};
            var d = this._;
            return a
              ? ((!d.dirty && d.bboxwt) ||
                  ((this.realPath = sa[this.type](this)),
                  (d.bboxwt = Fa(this.realPath)),
                  (d.bboxwt.toString = T),
                  (d.dirty = 0)),
                d.bboxwt)
              : ((d.dirty || d.dirtyT || !d.bbox) &&
                  ((!d.dirty && this.realPath) ||
                    ((d.bboxwt = 0), (this.realPath = sa[this.type](this))),
                  (d.bbox = Fa(Ca(this.realPath, this.matrix))),
                  (d.bbox.toString = T),
                  (d.dirty = d.dirtyT = 0)),
                d.bbox);
          };
          S.clone = function() {
            if (this.removed) return null;
            var a = this.paper[this.type]().attr(this.attr());
            return this.__set__ && this.__set__.push(a), a;
          };
          S.glow = function(a) {
            if ("text" == this.type) return null;
            var d =
                ((a = a || {}).width || 10) + (+this.attr("stroke-width") || 1),
              b = a.fill || !1,
              k = null == a.opacity ? 0.5 : a.opacity,
              c = a.offsetx || 0,
              e = a.offsety || 0;
            a = a.color || "#000";
            for (
              var l = d / 2,
                p = this.paper,
                f = p.set(),
                h = this.realPath || sa[this.type](this),
                h = this.matrix ? Ca(h, this.matrix) : h,
                g = 1;
              g < l + 1;
              g++
            )
              f.push(
                p
                  .path(h)
                  .attr({
                    stroke: a,
                    fill: b ? a : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +((d / l) * g).toFixed(3),
                    opacity: +(k / l).toFixed(3)
                  })
              );
            return f.insertBefore(this).translate(c, e);
          };
          var Ia = function(a, d, b, e, l, p, f, h, g) {
              return null == g
                ? I(a, d, b, e, l, p, f, h)
                : c.findDotsAtSegment(
                    a,
                    d,
                    b,
                    e,
                    l,
                    p,
                    f,
                    h,
                    (function(a, d, b, k, c, e, l, p, f) {
                      if (!(0 > f || I(a, d, b, k, c, e, l, p) < f)) {
                        var h,
                          g = 0.5,
                          t = 1 - g;
                        for (
                          h = I(a, d, b, k, c, e, l, p, t);
                          0.01 < q(h - f);

                        )
                          (g /= 2),
                            (h = I(
                              a,
                              d,
                              b,
                              k,
                              c,
                              e,
                              l,
                              p,
                              (t += (h < f ? 1 : -1) * g)
                            ));
                        return t;
                      }
                    })(a, d, b, e, l, p, f, h, g)
                  );
            },
            Ja = function(a, d) {
              return function(b, k, e) {
                for (
                  var l,
                    p,
                    f,
                    h,
                    g,
                    t = "",
                    w = {},
                    q = 0,
                    n = 0,
                    m = (b = pa(b)).length;
                  n < m;
                  n++
                ) {
                  if ("M" == (f = b[n])[0]) (l = +f[1]), (p = +f[2]);
                  else {
                    if (
                      q + (h = Ia(l, p, f[1], f[2], f[3], f[4], f[5], f[6])) >
                      k
                    ) {
                      if (d && !w.start) {
                        if (
                          ((t += [
                            "C" +
                              (g = Ia(
                                l,
                                p,
                                f[1],
                                f[2],
                                f[3],
                                f[4],
                                f[5],
                                f[6],
                                k - q
                              )).start.x,
                            g.start.y,
                            g.m.x,
                            g.m.y,
                            g.x,
                            g.y
                          ]),
                          e)
                        )
                          return t;
                        w.start = t;
                        t = [
                          "M" + g.x,
                          g.y + "C" + g.n.x,
                          g.n.y,
                          g.end.x,
                          g.end.y,
                          f[5],
                          f[6]
                        ].join();
                        q += h;
                        l = +f[5];
                        p = +f[6];
                        continue;
                      }
                      if (!a && !d)
                        return {
                          x: (g = Ia(
                            l,
                            p,
                            f[1],
                            f[2],
                            f[3],
                            f[4],
                            f[5],
                            f[6],
                            k - q
                          )).x,
                          y: g.y,
                          alpha: g.alpha
                        };
                    }
                    q += h;
                    l = +f[5];
                    p = +f[6];
                  }
                  t += f.shift() + f;
                }
                return (
                  (w.end = t),
                  (g = a
                    ? q
                    : d
                    ? w
                    : c.findDotsAtSegment(
                        l,
                        p,
                        f[0],
                        f[1],
                        f[2],
                        f[3],
                        f[4],
                        f[5],
                        1
                      )).alpha && (g = { x: g.x, y: g.y, alpha: g.alpha }),
                  g
                );
              };
            },
            cb = Ja(1),
            db = Ja(),
            Ka = Ja(0, 1);
          c.getTotalLength = cb;
          c.getPointAtLength = db;
          c.getSubpath = function(a, d, b) {
            if (1e-6 > this.getTotalLength(a) - b) return Ka(a, d).end;
            a = Ka(a, b, 1);
            return d ? Ka(a, d).end : a;
          };
          S.getTotalLength = function() {
            var a = this.getPath();
            if (a)
              return this.node.getTotalLength
                ? this.node.getTotalLength()
                : cb(a);
          };
          S.getPointAtLength = function(a) {
            var d = this.getPath();
            if (d) return db(d, a);
          };
          S.getPath = function() {
            var a,
              d = c._getPath[this.type];
            if ("text" != this.type && "set" != this.type)
              return d && (a = d(this)), a;
          };
          S.getSubpath = function(a, d) {
            var b = this.getPath();
            if (b) return c.getSubpath(b, a, d);
          };
          var ea = (c.easing_formulas = {
            linear: function(a) {
              return a;
            },
            "<": function(a) {
              return B(a, 1.7);
            },
            ">": function(a) {
              return B(a, 0.48);
            },
            "<>": function(a) {
              var d = 0.48 - a / 1.04,
                b = t.sqrt(0.1734 + d * d);
              a = b - d;
              d = -b - d;
              a =
                B(q(a), 1 / 3) * (0 > a ? -1 : 1) +
                B(q(d), 1 / 3) * (0 > d ? -1 : 1) +
                0.5;
              return 3 * (1 - a) * a * a + a * a * a;
            },
            backIn: function(a) {
              return a * a * (2.70158 * a - 1.70158);
            },
            backOut: function(a) {
              return --a * a * (2.70158 * a + 1.70158) + 1;
            },
            elastic: function(a) {
              return a == !!a
                ? a
                : B(2, -10 * a) * t.sin((2 * Z * (a - 0.075)) / 0.3) + 1;
            },
            bounce: function(a) {
              return a < 1 / 2.75
                ? 7.5625 * a * a
                : a < 2 / 2.75
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : a < 2.5 / 2.75
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }
          });
          ea.easeIn = ea["ease-in"] = ea["<"];
          ea.easeOut = ea["ease-out"] = ea[">"];
          ea.easeInOut = ea["ease-in-out"] = ea["<>"];
          ea["back-in"] = ea.backIn;
          ea["back-out"] = ea.backOut;
          var K = [],
            Na =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function(a) {
                setTimeout(a, 16);
              },
            za = function() {
              for (var d = +new Date(), b = 0; b < K.length; b++) {
                var e = K[b];
                if (!e.el.removed && !e.paused) {
                  var l,
                    p,
                    f = d - e.start,
                    h = e.ms,
                    g = e.easing,
                    t = e.from,
                    w = e.diff,
                    q = e.to,
                    n = (e.t, e.el),
                    m = {},
                    C = {};
                  if (
                    (e.initstatus
                      ? ((f =
                          ((e.initstatus * e.anim.top - e.prev) /
                            (e.percent - e.prev)) *
                          h),
                        (e.status = e.initstatus),
                        delete e.initstatus,
                        e.stop && K.splice(b--, 1))
                      : (e.status =
                          (e.prev + (f / h) * (e.percent - e.prev)) /
                          e.anim.top),
                    !(0 > f))
                  )
                    if (f < h) {
                      var r = g(f / h),
                        B;
                      for (B in t)
                        if (t.hasOwnProperty(B)) {
                          switch (ya[B]) {
                            case U:
                              l = +t[B] + r * h * w[B];
                              break;
                            case "colour":
                              l =
                                "rgb(" +
                                [
                                  La(Aa(t[B].r + r * h * w[B].r)),
                                  La(Aa(t[B].g + r * h * w[B].g)),
                                  La(Aa(t[B].b + r * h * w[B].b))
                                ].join() +
                                ")";
                              break;
                            case "path":
                              l = [];
                              f = 0;
                              for (g = t[B].length; f < g; f++) {
                                l[f] = [t[B][f][0]];
                                q = 1;
                                for (C = t[B][f].length; q < C; q++)
                                  l[f][q] = +t[B][f][q] + r * h * w[B][f][q];
                                l[f] = l[f].join(" ");
                              }
                              l = l.join(" ");
                              break;
                            case "transform":
                              if (w[B].real)
                                for (l = [], f = 0, g = t[B].length; f < g; f++)
                                  for (
                                    l[f] = [t[B][f][0]],
                                      q = 1,
                                      C = t[B][f].length;
                                    q < C;
                                    q++
                                  )
                                    l[f][q] = t[B][f][q] + r * h * w[B][f][q];
                              else
                                (l = function(a) {
                                  return +t[B][a] + r * h * w[B][a];
                                }),
                                  (l = [
                                    ["m", l(0), l(1), l(2), l(3), l(4), l(5)]
                                  ]);
                              break;
                            case "csv":
                              if ("clip-rect" == B)
                                for (l = [], f = 4; f--; )
                                  l[f] = +t[B][f] + r * h * w[B][f];
                              break;
                            default:
                              for (
                                g = [].concat(t[B]),
                                  l = [],
                                  f = n.paper.customAttributes[B].length;
                                f--;

                              )
                                l[f] = +g[f] + r * h * w[B][f];
                          }
                          m[B] = l;
                        }
                      n.attr(m);
                      (function(d, b, e) {
                        setTimeout(function() {
                          a("raphael.anim.frame." + d, b, e);
                        });
                      })(n.id, n, e.anim);
                    } else {
                      if (
                        ((function(d, b, e) {
                          setTimeout(function() {
                            a("raphael.anim.frame." + b.id, b, e);
                            a("raphael.anim.finish." + b.id, b, e);
                            c.is(d, "function") && d.call(b);
                          });
                        })(e.callback, n, e.anim),
                        n.attr(q),
                        K.splice(b--, 1),
                        1 < e.repeat && !e.next)
                      ) {
                        for (p in q)
                          q.hasOwnProperty(p) && (C[p] = e.totalOrigin[p]);
                        e.el.attr(C);
                        u(
                          e.anim,
                          e.el,
                          e.anim.percents[0],
                          null,
                          e.totalOrigin,
                          e.repeat - 1
                        );
                      }
                      e.next &&
                        !e.stop &&
                        u(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
                    }
                }
              }
              K.length && Na(za);
            },
            La = function(a) {
              return 255 < a ? 255 : 0 > a ? 0 : a;
            };
          S.animateWith = function(a, d, b, e, l, f) {
            if (this.removed) return f && f.call(this), this;
            b = b instanceof G ? b : c.animation(b, e, l, f);
            u(b, this, b.percents[0], null, this.attr());
            b = 0;
            for (e = K.length; b < e; b++)
              if (K[b].anim == d && K[b].el == a) {
                K[e - 1].start = K[b].start;
                break;
              }
            return this;
          };
          S.onAnimation = function(d) {
            return (
              d
                ? a.on("raphael.anim.frame." + this.id, d)
                : a.unbind("raphael.anim.frame." + this.id),
              this
            );
          };
          G.prototype.delay = function(a) {
            var d = new G(this.anim, this.ms);
            return (d.times = this.times), (d.del = +a || 0), d;
          };
          G.prototype.repeat = function(a) {
            var d = new G(this.anim, this.ms);
            return (d.del = this.del), (d.times = t.floor(w(a, 0)) || 1), d;
          };
          c.animation = function(a, d, b, e) {
            if (a instanceof G) return a;
            (!c.is(b, "function") && b) || ((e = e || b || null), (b = null));
            a = Object(a);
            d = +d || 0;
            var k,
              l,
              f = {};
            for (l in a)
              a.hasOwnProperty(l) &&
                R(l) != l &&
                R(l) + "%" != l &&
                ((k = !0), (f[l] = a[l]));
            if (k)
              return (
                b && (f.easing = b), e && (f.callback = e), new G({ 100: f }, d)
              );
            if (e) {
              b = 0;
              for (var p in a)
                (k = ja(p)), a.hasOwnProperty(p) && k > b && (b = k);
              !a[(b += "%")].callback && (a[b].callback = e);
            }
            return new G(a, d);
          };
          S.animate = function(a, d, b, e) {
            if (this.removed) return e && e.call(this), this;
            a = a instanceof G ? a : c.animation(a, d, b, e);
            return u(a, this, a.percents[0], null, this.attr()), this;
          };
          S.setTime = function(a, d) {
            return a && null != d && this.status(a, C(d, a.ms) / a.ms), this;
          };
          S.status = function(a, d) {
            var b,
              e,
              c = [],
              k = 0;
            if (null != d) return u(a, this, -1, C(d, 1)), this;
            for (b = K.length; k < b; k++)
              if ((e = K[k]).el.id == this.id && (!a || e.anim == a)) {
                if (a) return e.status;
                c.push({ anim: e.anim, status: e.status });
              }
            return a ? 0 : c;
          };
          S.pause = function(d) {
            for (var b = 0; b < K.length; b++)
              K[b].el.id != this.id ||
                (d && K[b].anim != d) ||
                (!1 !== a("raphael.anim.pause." + this.id, this, K[b].anim) &&
                  (K[b].paused = !0));
            return this;
          };
          S.resume = function(d) {
            for (var b = 0; b < K.length; b++)
              if (K[b].el.id == this.id && (!d || K[b].anim == d)) {
                var e = K[b];
                !1 !== a("raphael.anim.resume." + this.id, this, e.anim) &&
                  (delete e.paused, this.status(e.anim, e.status));
              }
            return this;
          };
          S.stop = function(d) {
            for (var b = 0; b < K.length; b++)
              K[b].el.id != this.id ||
                (d && K[b].anim != d) ||
                (!1 !== a("raphael.anim.stop." + this.id, this, K[b].anim) &&
                  K.splice(b--, 1));
            return this;
          };
          a.on("raphael.remove", V);
          a.on("raphael.clear", V);
          S.toString = function() {
            return "Rapha\u00ebl\u2019s object";
          };
          var eb,
            fb,
            qa = function(a) {
              if (
                ((this.items = []), (this.length = 0), (this.type = "set"), a)
              )
                for (var d = 0, b = a.length; d < b; d++)
                  !a[d] ||
                    (a[d].constructor != S.constructor &&
                      a[d].constructor != qa) ||
                    ((this[this.items.length] = this.items[this.items.length] =
                      a[d]),
                    this.length++);
            },
            ca = qa.prototype,
            xa;
          for (xa in ((ca.push = function() {
            for (var a, d, b = 0, e = arguments.length; b < e; b++)
              !(a = arguments[b]) ||
                (a.constructor != S.constructor && a.constructor != qa) ||
                ((this[(d = this.items.length)] = this.items[d] = a),
                this.length++);
            return this;
          }),
          (ca.pop = function() {
            return this.length && delete this[this.length--], this.items.pop();
          }),
          (ca.forEach = function(a, d) {
            for (
              var b = 0, e = this.items.length;
              b < e && !1 !== a.call(d, this.items[b], b);
              b++
            );
            return this;
          }),
          S))
            S.hasOwnProperty(xa) &&
              (ca[xa] = (function(a) {
                return function() {
                  var d = arguments;
                  return this.forEach(function(b) {
                    b[a][z](b, d);
                  });
                };
              })(xa));
          return (
            (ca.attr = function(a, d) {
              if (a && c.is(a, Q) && c.is(a[0], "object"))
                for (var b = 0, e = a.length; b < e; b++)
                  this.items[b].attr(a[b]);
              else
                for (b = 0, e = this.items.length; b < e; b++)
                  this.items[b].attr(a, d);
              return this;
            }),
            (ca.clear = function() {
              for (; this.length; ) this.pop();
            }),
            (ca.splice = function(a, d, b) {
              a = 0 > a ? w(this.length + a, 0) : a;
              d = w(0, C(this.length - a, d));
              var e,
                c = [],
                l = [],
                k = [];
              for (e = 2; e < arguments.length; e++) k.push(arguments[e]);
              for (e = 0; e < d; e++) l.push(this[a + e]);
              for (; e < this.length - a; e++) c.push(this[a + e]);
              var f = k.length;
              for (e = 0; e < f + c.length; e++)
                this.items[a + e] = this[a + e] = e < f ? k[e] : c[e - f];
              for (e = this.items.length = this.length -= d - f; this[e]; )
                delete this[e++];
              return new qa(l);
            }),
            (ca.exclude = function(a) {
              for (var d = 0, b = this.length; d < b; d++)
                if (this[d] == a) return this.splice(d, 1), !0;
            }),
            (ca.animate = function(a, d, b, e) {
              (!c.is(b, "function") && b) || (e = b || null);
              var l,
                k = this.items.length,
                f = k,
                p = this;
              if (!k) return this;
              e &&
                (l = function() {
                  !--k && e.call(p);
                });
              b = c.is(b, "string") ? b : l;
              d = c.animation(a, d, b, l);
              for (a = this.items[--f].animate(d); f--; )
                this.items[f] &&
                  !this.items[f].removed &&
                  this.items[f].animateWith(a, d, d),
                  (this.items[f] && !this.items[f].removed) || k--;
              return this;
            }),
            (ca.insertAfter = function(a) {
              for (var d = this.items.length; d--; )
                this.items[d].insertAfter(a);
              return this;
            }),
            (ca.getBBox = function() {
              for (
                var a = [], d = [], b = [], e = [], c = this.items.length;
                c--;

              )
                if (!this.items[c].removed) {
                  var l = this.items[c].getBBox();
                  a.push(l.x);
                  d.push(l.y);
                  b.push(l.x + l.width);
                  e.push(l.y + l.height);
                }
              return {
                x: (a = C[z](0, a)),
                y: (d = C[z](0, d)),
                x2: (b = w[z](0, b)),
                y2: (e = w[z](0, e)),
                width: b - a,
                height: e - d
              };
            }),
            (ca.clone = function(a) {
              a = this.paper.set();
              for (var d = 0, b = this.items.length; d < b; d++)
                a.push(this.items[d].clone());
              return a;
            }),
            (ca.toString = function() {
              return "Rapha\u00ebl\u2018s set";
            }),
            (ca.glow = function(a) {
              var d = this.paper.set();
              return (
                this.forEach(function(b, e) {
                  var c = b.glow(a);
                  null != c &&
                    c.forEach(function(a, b) {
                      d.push(a);
                    });
                }),
                d
              );
            }),
            (ca.isPointInside = function(a, d) {
              var b = !1;
              return (
                this.forEach(function(e) {
                  if (e.isPointInside(a, d)) return (b = !0), !1;
                }),
                b
              );
            }),
            (c.registerFont = function(a) {
              if (!a.face) return a;
              this.fonts = this.fonts || {};
              var d = { w: a.w, face: {}, glyphs: {} },
                b = a.face["font-family"],
                e;
              for (e in a.face)
                a.face.hasOwnProperty(e) && (d.face[e] = a.face[e]);
              if (
                (this.fonts[b] ? this.fonts[b].push(d) : (this.fonts[b] = [d]),
                !a.svg)
              )
                for (var c in ((d.face["units-per-em"] = ja(
                  a.face["units-per-em"],
                  10
                )),
                a.glyphs))
                  if (
                    a.glyphs.hasOwnProperty(c) &&
                    ((b = a.glyphs[c]),
                    (d.glyphs[c] = {
                      w: b.w,
                      k: {},
                      d:
                        b.d &&
                        "M" +
                          b.d.replace(/[mlcxtrv]/g, function(a) {
                            return (
                              {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                              }[a] || "M"
                            );
                          }) +
                          "z"
                    }),
                    b.k)
                  )
                    for (var l in b.k)
                      b.hasOwnProperty(l) && (d.glyphs[c].k[l] = b.k[l]);
              return a;
            }),
            (M.getFont = function(a, d, b, e) {
              if (
                ((e = e || "normal"),
                (b = b || "normal"),
                (d =
                  +d ||
                  { normal: 400, bold: 700, lighter: 300, bolder: 800 }[d] ||
                  400),
                c.fonts)
              ) {
                var l,
                  k = c.fonts[a];
                if (!k) {
                  a = new RegExp(
                    "(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)",
                    "i"
                  );
                  for (var f in c.fonts)
                    if (c.fonts.hasOwnProperty(f) && a.test(f)) {
                      k = c.fonts[f];
                      break;
                    }
                }
                if (k)
                  for (
                    f = 0, a = k.length;
                    f < a &&
                    ((l = k[f]).face["font-weight"] != d ||
                      (l.face["font-style"] != b && l.face["font-style"]) ||
                      l.face["font-stretch"] != e);
                    f++
                  );
                return l;
              }
            }),
            (M.print = function(a, d, b, e, l, f, p, h) {
              f = f || "middle";
              p = w(C(p || 0, 1), -1);
              h = w(C(h || 1, 3), 1);
              b = P(b).split("");
              var k = 0,
                g = 0,
                t = "";
              if ((c.is(e, "string") && (e = this.getFont(e)), e)) {
                l = (l || 16) / e.face["units-per-em"];
                var q = e.face.bbox.split(L),
                  n = +q[0],
                  m = q[3] - q[1],
                  B = 0;
                f = +q[1] + ("baseline" == f ? m + +e.face.descent : m / 2);
                for (var q = 0, r = b.length; q < r; q++) {
                  if ("\n" == b[q]) (g = H = k = 0), (B += m * h);
                  else
                    var u = (g && e.glyphs[b[q - 1]]) || {},
                      H = e.glyphs[b[q]],
                      k =
                        k +
                        (g
                          ? (u.w || e.w) + ((u.k && u.k[b[q]]) || 0) + e.w * p
                          : 0),
                      g = 1;
                  H &&
                    H.d &&
                    (t += c.transformPath(H.d, [
                      "t",
                      k * l,
                      B * l,
                      "s",
                      l,
                      l,
                      n,
                      f,
                      "t",
                      (a - n) / l,
                      (d - f) / l
                    ]));
                }
              }
              return this.path(t).attr({ fill: "#000", stroke: "none" });
            }),
            (M.add = function(a) {
              if (c.is(a, "array"))
                for (var d, b = this.set(), e = 0, l = a.length; e < l; e++)
                  (d = a[e] || {}),
                    H.hasOwnProperty(d.type) && b.push(this[d.type]().attr(d));
              return b;
            }),
            (c.format = function(a, d) {
              var b = c.is(d, Q) ? [0].concat(d) : arguments;
              return (
                a &&
                  c.is(a, "string") &&
                  b.length - 1 &&
                  (a = a.replace(O, function(a, d) {
                    return null == b[++d] ? "" : b[d];
                  })),
                a || ""
              );
            }),
            (c.fullfill =
              ((eb = /\{([^\}]+)\}/g),
              (fb = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
              function(a, d) {
                return String(a).replace(eb, function(a, b) {
                  return (function(a, d, b) {
                    var e = b;
                    return (
                      d.replace(fb, function(a, d, b, c, l) {
                        d = d || c;
                        e &&
                          (d in e && (e = e[d]),
                          "function" == typeof e && l && (e = e()));
                      }),
                      (e = (null == e || e == b ? a : e) + "")
                    );
                  })(a, b, d);
                });
              })),
            (c.ninja = function() {
              if (W) n.win.Raphael = aa;
              else {
                window.Raphael = void 0;
                try {
                  delete window.Raphael;
                } catch (k) {}
              }
              return c;
            }),
            (c.st = ca),
            a.on("raphael.DOMload", function() {
              ba = !0;
            }),
            (function(a, d, b) {
              null == a.readyState &&
                a.addEventListener &&
                (a.addEventListener(
                  "DOMContentLoaded",
                  (b = function() {
                    a.removeEventListener("DOMContentLoaded", b, !1);
                    a.readyState = "complete";
                  }),
                  !1
                ),
                (a.readyState = "loading"));
              (function J() {
                /in/.test(a.readyState)
                  ? setTimeout(J, 9)
                  : c.eve("raphael.DOMload");
              })();
            })(document),
            c
          );
        }.apply(b, f)) || (a.exports = g);
    },
    function(a, b, f) {
      var g;
      f = [f(0)];
      void 0 ===
        (g = function(a) {
          if (!a || a.vml) {
            var b = String,
              e = parseFloat,
              f = Math,
              g = f.round,
              F = f.max,
              I = f.min,
              A = f.abs,
              v = /[, ]+/,
              T = a.eve,
              X = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x"
              },
              G = /([clmz]),?([^clmz]*)/gi,
              u = / progid:\S+Blur\([^\)]+\)/g,
              V = /-?[^,\s-]+/g,
              ba = { path: 1, rect: 1, image: 1 },
              M = { circle: 1, ellipse: 1 },
              L = function(d, b, e) {
                var c = a.matrix();
                return c.rotate(-d, 0.5, 0.5), { dx: c.x(b, e), dy: c.y(b, e) };
              },
              H = function(a, b, e, c, f, g) {
                var d = a._,
                  l = a.matrix,
                  p = d.fillpos;
                a = a.node;
                var h = a.style,
                  t = 1,
                  w = "",
                  n = 21600 / b,
                  m = 21600 / e;
                if (((h.visibility = "hidden"), b && e)) {
                  if (
                    ((a.coordsize = A(n) + " " + A(m)),
                    (h.rotation = g * (0 > b * e ? -1 : 1)),
                    g)
                  ) {
                    var C = L(g, c, f);
                    c = C.dx;
                    f = C.dy;
                  }
                  if (
                    (0 > b && (w += "x"),
                    0 > e && (w += " y") && (t = -1),
                    (h.flip = w),
                    (a.coordorigin = c * -n + " " + f * -m),
                    p || d.fillsize)
                  )
                    (c = (c = a.getElementsByTagName("fill")) && c[0]),
                      a.removeChild(c),
                      p &&
                        ((C = L(g, l.x(p[0], p[1]), l.y(p[0], p[1]))),
                        (c.position = C.dx * t + " " + C.dy * t)),
                      d.fillsize &&
                        (c.size =
                          d.fillsize[0] * A(b) + " " + d.fillsize[1] * A(e)),
                      a.appendChild(c);
                  h.visibility = "visible";
                }
              };
            a.toString = function() {
              return (
                "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl " +
                this.version
              );
            };
            var O,
              n = function(a, e, c) {
                e = b(e)
                  .toLowerCase()
                  .split("-");
                c = c ? "end" : "start";
                for (
                  var d = e.length, l = "classic", f = "medium", p = "medium";
                  d--;

                )
                  switch (e[d]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      l = e[d];
                      break;
                    case "wide":
                    case "narrow":
                      p = e[d];
                      break;
                    case "long":
                    case "short":
                      f = e[d];
                  }
                a = a.node.getElementsByTagName("stroke")[0];
                a[c + "arrow"] = l;
                a[c + "arrowlength"] = f;
                a[c + "arrowwidth"] = p;
              },
              W = function(d, c) {
                d.attrs = d.attrs || {};
                var f = d.node,
                  l = d.attrs,
                  h = f.style,
                  m =
                    ba[d.type] &&
                    (c.x != l.x ||
                      c.y != l.y ||
                      c.width != l.width ||
                      c.height != l.height ||
                      c.cx != l.cx ||
                      c.cy != l.cy ||
                      c.rx != l.rx ||
                      c.ry != l.ry ||
                      c.r != l.r),
                  q =
                    M[d.type] &&
                    (l.cx != c.cx ||
                      l.cy != c.cy ||
                      l.r != c.r ||
                      l.rx != c.rx ||
                      l.ry != c.ry),
                  B;
                for (B in c) c.hasOwnProperty(B) && (l[B] = c[B]);
                if (
                  (m && ((l.path = a._getPath[d.type](d)), (d._.dirty = 1)),
                  c.href && (f.href = c.href),
                  c.title && (f.title = c.title),
                  c.target && (f.target = c.target),
                  c.cursor && (h.cursor = c.cursor),
                  "blur" in c && d.blur(c.blur),
                  ((c.path && "path" == d.type) || m) &&
                    ((f.path = (function(d) {
                      var c = /[ahqstv]/gi,
                        e = a._pathToAbsolute;
                      if (
                        (b(d).match(c) && (e = a._path2curve),
                        (c = /[clmz]/g),
                        e == a._pathToAbsolute && !b(d).match(c))
                      )
                        return (d = b(d).replace(G, function(a, d, b) {
                          var c = [],
                            e = "m" == d.toLowerCase(),
                            f = X[d];
                          return (
                            b.replace(V, function(a) {
                              e &&
                                2 == c.length &&
                                ((f += c + X["m" == d ? "l" : "L"]), (c = []));
                              c.push(g(21600 * a));
                            }),
                            f + c
                          );
                        }));
                      var f = e(d);
                      d = [];
                      for (var l = 0, h = f.length; l < h; l++) {
                        c = f[l];
                        "z" == (e = f[l][0].toLowerCase()) && (e = "x");
                        for (var p = 1, t = c.length; p < t; p++)
                          e += g(21600 * c[p]) + (p != t - 1 ? "," : "");
                        d.push(e);
                      }
                      return d.join(" ");
                    })(
                      ~b(l.path)
                        .toLowerCase()
                        .indexOf("r")
                        ? a._pathToAbsolute(l.path)
                        : l.path
                    )),
                    (d._.dirty = 1),
                    "image" == d.type &&
                      ((d._.fillpos = [l.x, l.y]),
                      (d._.fillsize = [l.width, l.height]),
                      H(d, 1, 1, 0, 0, 0))),
                  "transform" in c && d.transform(c.transform),
                  q)
                )
                  (h = +l.cx),
                    (m = +l.cy),
                    (q = +l.rx || +l.r || 0),
                    (B = +l.ry || +l.r || 0),
                    (f.path = a.format(
                      "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                      g(21600 * (h - q)),
                      g(21600 * (m - B)),
                      g(21600 * (h + q)),
                      g(21600 * (m + B)),
                      g(21600 * h)
                    )),
                    (d._.dirty = 1);
                "clip-rect" in c &&
                  ((h = b(c["clip-rect"]).split(v)),
                  4 == h.length &&
                    ((h[2] = +h[2] + +h[0]),
                    (h[3] = +h[3] + +h[1]),
                    (m = f.clipRect || a._g.doc.createElement("div")),
                    (q = m.style),
                    (q.clip = a.format("rect({1}px {2}px {3}px {0}px)", h)),
                    f.clipRect ||
                      ((q.position = "absolute"),
                      (q.top = 0),
                      (q.left = 0),
                      (q.width = d.paper.width + "px"),
                      (q.height = d.paper.height + "px"),
                      f.parentNode.insertBefore(m, f),
                      m.appendChild(f),
                      (f.clipRect = m))),
                  c["clip-rect"] ||
                    (f.clipRect && (f.clipRect.style.clip = "auto")));
                d.textpath &&
                  ((h = d.textpath.style),
                  c.font && (h.font = c.font),
                  c["font-family"] &&
                    (h.fontFamily =
                      '"' +
                      c["font-family"]
                        .split(",")[0]
                        .replace(/^['"]+|['"]+$/g, "") +
                      '"'),
                  c["font-size"] && (h.fontSize = c["font-size"]),
                  c["font-weight"] && (h.fontWeight = c["font-weight"]),
                  c["font-style"] && (h.fontStyle = c["font-style"]));
                if (
                  ("arrow-start" in c && n(d, c["arrow-start"]),
                  "arrow-end" in c && n(d, c["arrow-end"], 1),
                  null != c.opacity ||
                    null != c.fill ||
                    null != c.src ||
                    null != c.stroke ||
                    null != c["stroke-width"] ||
                    null != c["stroke-opacity"] ||
                    null != c["fill-opacity"] ||
                    null != c["stroke-dasharray"] ||
                    null != c["stroke-miterlimit"] ||
                    null != c["stroke-linejoin"] ||
                    null != c["stroke-linecap"])
                ) {
                  h = f.getElementsByTagName("fill");
                  if (
                    (!(h = h && h[0]) && (h = O("fill")),
                    "image" == d.type && c.src && (h.src = c.src),
                    c.fill && (h.on = !0),
                    (null != h.on && "none" != c.fill && null !== c.fill) ||
                      (h.on = !1),
                    h.on && c.fill)
                  )
                    (m = b(c.fill).match(a._ISURL))
                      ? (h.parentNode == f && f.removeChild(h),
                        (h.rotate = !0),
                        (h.src = m[1]),
                        (h.type = "tile"),
                        (q = d.getBBox(1)),
                        (h.position = q.x + " " + q.y),
                        (d._.fillpos = [q.x, q.y]),
                        a._preload(m[1], function() {
                          d._.fillsize = [this.offsetWidth, this.offsetHeight];
                        }))
                      : ((h.color = a.getRGB(c.fill).hex),
                        (h.src = ""),
                        (h.type = "solid"),
                        a.getRGB(c.fill).error &&
                          (d.type in { circle: 1, ellipse: 1 } ||
                            "r" != b(c.fill).charAt()) &&
                          aa(d, c.fill, h) &&
                          ((l.fill = "none"),
                          (l.gradient = c.fill),
                          (h.rotate = !1)));
                  if ("fill-opacity" in c || "opacity" in c)
                    (q =
                      ((+l["fill-opacity"] + 1 || 2) - 1) *
                      ((+l.opacity + 1 || 2) - 1) *
                      ((+a.getRGB(c.fill).o + 1 || 2) - 1)),
                      (q = I(F(q, 0), 1)),
                      (h.opacity = q),
                      h.src && (h.color = "none");
                  f.appendChild(h);
                  h =
                    f.getElementsByTagName("stroke") &&
                    f.getElementsByTagName("stroke")[0];
                  m = !1;
                  !h && (m = h = O("stroke"));
                  ((c.stroke && "none" != c.stroke) ||
                    c["stroke-width"] ||
                    null != c["stroke-opacity"] ||
                    c["stroke-dasharray"] ||
                    c["stroke-miterlimit"] ||
                    c["stroke-linejoin"] ||
                    c["stroke-linecap"]) &&
                    (h.on = !0);
                  ("none" != c.stroke &&
                    null !== c.stroke &&
                    null != h.on &&
                    0 != c.stroke &&
                    0 != c["stroke-width"]) ||
                    (h.on = !1);
                  q = a.getRGB(c.stroke);
                  h.on && c.stroke && (h.color = q.hex);
                  q =
                    ((+l["stroke-opacity"] + 1 || 2) - 1) *
                    ((+l.opacity + 1 || 2) - 1) *
                    ((+q.o + 1 || 2) - 1);
                  B = 0.75 * (e(c["stroke-width"]) || 1);
                  if (
                    ((q = I(F(q, 0), 1)),
                    null == c["stroke-width"] && (B = l["stroke-width"]),
                    c["stroke-width"] && (h.weight = B),
                    B && 1 > B && (q *= B) && (h.weight = 1),
                    (h.opacity = q),
                    c["stroke-linejoin"] &&
                      (h.joinstyle = c["stroke-linejoin"] || "miter"),
                    (h.miterlimit = c["stroke-miterlimit"] || 8),
                    c["stroke-linecap"] &&
                      (h.endcap =
                        "butt" == c["stroke-linecap"]
                          ? "flat"
                          : "square" == c["stroke-linecap"]
                          ? "square"
                          : "round"),
                    "stroke-dasharray" in c)
                  )
                    (q = {
                      "-": "shortdash",
                      ".": "shortdot",
                      "-.": "shortdashdot",
                      "-..": "shortdashdotdot",
                      ". ": "dot",
                      "- ": "dash",
                      "--": "longdash",
                      "- .": "dashdot",
                      "--.": "longdashdot",
                      "--..": "longdashdotdot"
                    }),
                      (h.dashstyle = q.hasOwnProperty(c["stroke-dasharray"])
                        ? q[c["stroke-dasharray"]]
                        : "");
                  m && f.appendChild(h);
                }
                if ("text" == d.type) {
                  d.paper.canvas.style.display = "";
                  f = d.paper.span;
                  m = l.font && l.font.match(/\d+(?:\.\d*)?(?=px)/);
                  h = f.style;
                  l.font && (h.font = l.font);
                  l["font-family"] && (h.fontFamily = l["font-family"]);
                  l["font-weight"] && (h.fontWeight = l["font-weight"]);
                  l["font-style"] && (h.fontStyle = l["font-style"]);
                  m = e(l["font-size"] || (m && m[0])) || 10;
                  h.fontSize = 100 * m + "px";
                  d.textpath.string &&
                    (f.innerHTML = b(d.textpath.string)
                      .replace(/</g, "&#60;")
                      .replace(/&/g, "&#38;")
                      .replace(/\n/g, "<br>"));
                  f = f.getBoundingClientRect();
                  d.W = l.w = (f.right - f.left) / 100;
                  d.H = l.h = (f.bottom - f.top) / 100;
                  d.X = l.x;
                  d.Y = l.y + d.H / 2;
                  ("x" in c || "y" in c) &&
                    (d.path.v = a.format(
                      "m{0},{1}l{2},{1}",
                      g(21600 * l.x),
                      g(21600 * l.y),
                      g(21600 * l.x) + 1
                    ));
                  f = "x y text font font-family font-weight font-style font-size".split(
                    " "
                  );
                  h = 0;
                  for (m = f.length; h < m; h++)
                    if (f[h] in c) {
                      d._.dirty = 1;
                      break;
                    }
                  switch (l["text-anchor"]) {
                    case "start":
                      d.textpath.style["v-text-align"] = "left";
                      d.bbx = d.W / 2;
                      break;
                    case "end":
                      d.textpath.style["v-text-align"] = "right";
                      d.bbx = -d.W / 2;
                      break;
                    default:
                      (d.textpath.style["v-text-align"] = "center"),
                        (d.bbx = 0);
                  }
                  d.textpath.style["v-text-kern"] = !0;
                }
              },
              aa = function(d, c, h) {
                d.attrs = d.attrs || {};
                d.attrs;
                var l = Math.pow,
                  g = "linear",
                  p = ".5 .5";
                if (
                  ((d.attrs.gradient = c),
                  (c = (c = b(c).replace(a._radial_gradient, function(a, d, b) {
                    return (
                      (g = "radial"),
                      d &&
                        b &&
                        ((d = e(d)),
                        (b = e(b)),
                        0.25 < l(d - 0.5, 2) + l(b - 0.5, 2) &&
                          (b =
                            f.sqrt(0.25 - l(d - 0.5, 2)) * (2 * (0.5 < b) - 1) +
                            0.5),
                        (p = d + " " + b)),
                      ""
                    );
                  })).split(/\s*\-\s*/)),
                  "linear" == g)
                ) {
                  var q = c.shift();
                  if (((q = -e(q)), isNaN(q))) return null;
                }
                c = a._parseDots(c);
                if (!c) return null;
                if (((d = d.shape || d.node), c.length)) {
                  d.removeChild(h);
                  h.on = !0;
                  h.method = "none";
                  h.color = c[0].color;
                  h.color2 = c[c.length - 1].color;
                  for (var m = [], n = 0, r = c.length; n < r; n++)
                    c[n].offset && m.push(c[n].offset + " " + c[n].color);
                  h.colors = m.length ? m.join() : "0% " + h.color;
                  "radial" == g
                    ? ((h.type = "gradientTitle"),
                      (h.focus = "100%"),
                      (h.focussize = "0 0"),
                      (h.focusposition = p),
                      (h.angle = 0))
                    : ((h.type = "gradient"), (h.angle = (270 - q) % 360));
                  d.appendChild(h);
                }
                return 1;
              },
              Y = function(d, b) {
                this[0] = this.node = d;
                d.raphael = !0;
                this.id = a._oid++;
                d.raphaelid = this.id;
                this.Y = this.X = 0;
                this.attrs = {};
                this.paper = b;
                this.matrix = a.matrix();
                this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  dx: 0,
                  dy: 0,
                  deg: 0,
                  dirty: 1,
                  dirtyT: 1
                };
                !b.bottom && (b.bottom = this);
                (this.prev = b.top) && (b.top.next = this);
                b.top = this;
                this.next = null;
              },
              z = a.el;
            Y.prototype = z;
            z.constructor = Y;
            z.transform = function(d) {
              if (null == d) return this._.transform;
              var c,
                e = this.paper._viewBoxShift,
                f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : "";
              e &&
                (c = d = b(d).replace(/\.{3}|\u2026/g, this._.transform || ""));
              a._extractTransform(this, f + d);
              var h,
                e = this.matrix.clone(),
                f = this.skew;
              d = this.node;
              var g = ~b(this.attrs.fill).indexOf("-"),
                q = !b(this.attrs.fill).indexOf("url(");
              (e.translate(1, 1), q || g || "image" == this.type)
                ? ((f.matrix = "1 0 0 1"),
                  (f.offset = "0 0"),
                  (h = e.split()),
                  (g && h.noRotation) || !h.isSimple)
                  ? ((d.style.filter = e.toFilter()),
                    (e = this.getBBox()),
                    (f = this.getBBox(1)),
                    (h = e.x - f.x),
                    (e = e.y - f.y),
                    (d.coordorigin = -21600 * h + " " + -21600 * e),
                    H(this, 1, 1, h, e, 0))
                  : ((d.style.filter = ""),
                    H(this, h.scalex, h.scaley, h.dx, h.dy, h.rotate))
                : ((d.style.filter = ""),
                  (f.matrix = b(e)),
                  (f.offset = e.offset()));
              return (
                null !== c &&
                  ((this._.transform = c), a._extractTransform(this, c)),
                this
              );
            };
            z.rotate = function(a, c, f) {
              if (this.removed) return this;
              if (null != a) {
                if (
                  ((a = b(a).split(v)).length - 1 &&
                    ((c = e(a[1])), (f = e(a[2]))),
                  (a = e(a[0])),
                  null == f && (c = f),
                  null == c || null == f)
                )
                  (f = this.getBBox(1)),
                    (c = f.x + f.width / 2),
                    (f = f.y + f.height / 2);
                return (
                  (this._.dirtyT = 1),
                  this.transform(this._.transform.concat([["r", a, c, f]])),
                  this
                );
              }
            };
            z.translate = function(a, c) {
              return this.removed
                ? this
                : ((a = b(a).split(v)).length - 1 && (c = e(a[1])),
                  (a = e(a[0]) || 0),
                  (c = +c || 0),
                  this._.bbox && ((this._.bbox.x += a), (this._.bbox.y += c)),
                  this.transform(this._.transform.concat([["t", a, c]])),
                  this);
            };
            z.scale = function(a, c, f, h) {
              if (this.removed) return this;
              if (
                ((a = b(a).split(v)).length - 1 &&
                  ((c = e(a[1])),
                  (f = e(a[2])),
                  (h = e(a[3])),
                  isNaN(f) && (f = null),
                  isNaN(h) && (h = null)),
                (a = e(a[0])),
                null == c && (c = a),
                null == h && (f = h),
                null == f || null == h)
              )
                var d = this.getBBox(1);
              return (
                (f = null == f ? d.x + d.width / 2 : f),
                (h = null == h ? d.y + d.height / 2 : h),
                this.transform(this._.transform.concat([["s", a, c, f, h]])),
                (this._.dirtyT = 1),
                this
              );
            };
            z.hide = function() {
              return !this.removed && (this.node.style.display = "none"), this;
            };
            z.show = function() {
              return !this.removed && (this.node.style.display = ""), this;
            };
            z.auxGetBBox = a.el.getBBox;
            z.getBBox = function() {
              var a = this.auxGetBBox();
              if (this.paper && this.paper._viewBoxShift) {
                var b = {},
                  c = 1 / this.paper._viewBoxShift.scale;
                return (
                  (b.x = a.x - this.paper._viewBoxShift.dx),
                  (b.x *= c),
                  (b.y = a.y - this.paper._viewBoxShift.dy),
                  (b.y *= c),
                  (b.width = a.width * c),
                  (b.height = a.height * c),
                  (b.x2 = b.x + b.width),
                  (b.y2 = b.y + b.height),
                  b
                );
              }
              return a;
            };
            z._getBBox = function() {
              return this.removed
                ? {}
                : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                  };
            };
            z.remove = function() {
              if (!this.removed && this.node.parentNode) {
                for (var d in (this.paper.__set__ &&
                  this.paper.__set__.exclude(this),
                a.eve.unbind("raphael.*.*." + this.id),
                a._tear(this, this.paper),
                this.node.parentNode.removeChild(this.node),
                this.shape && this.shape.parentNode.removeChild(this.shape),
                this))
                  this[d] =
                    "function" == typeof this[d] ? a._removedFactory(d) : null;
                this.removed = !0;
              }
            };
            z.attr = function(d, b) {
              if (this.removed) return this;
              if (null == d) {
                var c = {},
                  e;
                for (e in this.attrs)
                  this.attrs.hasOwnProperty(e) && (c[e] = this.attrs[e]);
                return (
                  c.gradient &&
                    "none" == c.fill &&
                    (c.fill = c.gradient) &&
                    delete c.gradient,
                  (c.transform = this._.transform),
                  c
                );
              }
              if (null == b && a.is(d, "string")) {
                if (
                  "fill" == d &&
                  "none" == this.attrs.fill &&
                  this.attrs.gradient
                )
                  return this.attrs.gradient;
                e = d.split(v);
                for (var c = {}, f = 0, h = e.length; f < h; f++)
                  (d = e[f]) in this.attrs
                    ? (c[d] = this.attrs[d])
                    : a.is(this.paper.customAttributes[d], "function")
                    ? (c[d] = this.paper.customAttributes[d].def)
                    : (c[d] = a._availableAttrs[d]);
                return h - 1 ? c : c[e[0]];
              }
              if (this.attrs && null == b && a.is(d, "array")) {
                c = {};
                f = 0;
                for (h = d.length; f < h; f++) c[d[f]] = this.attr(d[f]);
                return c;
              }
              for (f in (null != b && ((c = {})[d] = b),
              null == b && a.is(d, "object") && (c = d),
              c))
                T("raphael.attr." + f + "." + this.id, this, c[f]);
              if (c) {
                for (f in this.paper.customAttributes)
                  if (
                    this.paper.customAttributes.hasOwnProperty(f) &&
                    c.hasOwnProperty(f) &&
                    a.is(this.paper.customAttributes[f], "function")
                  )
                    for (h in ((e = this.paper.customAttributes[f].apply(
                      this,
                      [].concat(c[f])
                    )),
                    (this.attrs[f] = c[f]),
                    e))
                      e.hasOwnProperty(h) && (c[h] = e[h]);
                c.text &&
                  "text" == this.type &&
                  (this.textpath.string = c.text);
                W(this, c);
              }
              return this;
            };
            z.toFront = function() {
              return (
                !this.removed && this.node.parentNode.appendChild(this.node),
                this.paper &&
                  this.paper.top != this &&
                  a._tofront(this, this.paper),
                this
              );
            };
            z.toBack = function() {
              return this.removed
                ? this
                : (this.node.parentNode.firstChild != this.node &&
                    (this.node.parentNode.insertBefore(
                      this.node,
                      this.node.parentNode.firstChild
                    ),
                    a._toback(this, this.paper)),
                  this);
            };
            z.insertAfter = function(d) {
              return this.removed
                ? this
                : (d.constructor == a.st.constructor && (d = d[d.length - 1]),
                  d.node.nextSibling
                    ? d.node.parentNode.insertBefore(
                        this.node,
                        d.node.nextSibling
                      )
                    : d.node.parentNode.appendChild(this.node),
                  a._insertafter(this, d, this.paper),
                  this);
            };
            z.insertBefore = function(d) {
              return this.removed
                ? this
                : (d.constructor == a.st.constructor && (d = d[0]),
                  d.node.parentNode.insertBefore(this.node, d.node),
                  a._insertbefore(this, d, this.paper),
                  this);
            };
            z.blur = function(d) {
              var b = this.node.runtimeStyle,
                c = b.filter;
              return (
                (c = c.replace(u, "")),
                0 != +d
                  ? ((this.attrs.blur = d),
                    (b.filter =
                      c +
                      "  progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                      (+d || 1.5) +
                      ")"),
                    (b.margin = a.format("-{0}px 0 0 -{0}px", g(+d || 1.5))))
                  : ((b.filter = c), (b.margin = 0), delete this.attrs.blur),
                this
              );
            };
            a._engine.path = function(a, b) {
              var d = O("shape");
              d.style.cssText =
                "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)";
              d.coordsize = "21600 21600";
              d.coordorigin = b.coordorigin;
              var c = new Y(d, b),
                e = { fill: "none", stroke: "#000" };
              a && (e.path = a);
              c.type = "path";
              c.path = [];
              c.Path = "";
              W(c, e);
              b.canvas && b.canvas.appendChild(d);
              e = O("skew");
              return (
                (e.on = !0), d.appendChild(e), (c.skew = e), c.transform(""), c
              );
            };
            a._engine.rect = function(d, b, c, e, f, h) {
              var l = a._rectPath(b, c, e, f, h);
              d = d.path(l);
              var g = d.attrs;
              return (
                (d.X = g.x = b),
                (d.Y = g.y = c),
                (d.W = g.width = e),
                (d.H = g.height = f),
                (g.r = h),
                (g.path = l),
                (d.type = "rect"),
                d
              );
            };
            a._engine.ellipse = function(a, b, c, e, f) {
              a = a.path();
              a.attrs;
              return (
                (a.X = b - e),
                (a.Y = c - f),
                (a.W = 2 * e),
                (a.H = 2 * f),
                (a.type = "ellipse"),
                W(a, { cx: b, cy: c, rx: e, ry: f }),
                a
              );
            };
            a._engine.circle = function(a, b, c, e) {
              a = a.path();
              a.attrs;
              return (
                (a.X = b - e),
                (a.Y = c - e),
                (a.W = a.H = 2 * e),
                (a.type = "circle"),
                W(a, { cx: b, cy: c, r: e }),
                a
              );
            };
            a._engine.image = function(d, b, c, e, f, h) {
              var l = a._rectPath(c, e, f, h);
              d = d.path(l).attr({ stroke: "none" });
              var g = d.attrs,
                p = d.node,
                m = p.getElementsByTagName("fill")[0];
              return (
                (g.src = b),
                (d.X = g.x = c),
                (d.Y = g.y = e),
                (d.W = g.width = f),
                (d.H = g.height = h),
                (g.path = l),
                (d.type = "image"),
                m.parentNode == p && p.removeChild(m),
                (m.rotate = !0),
                (m.src = b),
                (m.type = "tile"),
                (d._.fillpos = [c, e]),
                (d._.fillsize = [f, h]),
                p.appendChild(m),
                H(d, 1, 1, 0, 0, 0),
                d
              );
            };
            a._engine.text = function(d, c, e, f) {
              var h = O("shape"),
                l = O("path"),
                p = O("textpath");
              c = c || 0;
              e = e || 0;
              f = f || "";
              l.v = a.format(
                "m{0},{1}l{2},{1}",
                g(21600 * c),
                g(21600 * e),
                g(21600 * c) + 1
              );
              l.textpathok = !0;
              p.string = b(f);
              p.on = !0;
              h.style.cssText =
                "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)";
              h.coordsize = "21600 21600";
              h.coordorigin = "0 0";
              var m = new Y(h, d),
                n = {
                  fill: "#000",
                  stroke: "none",
                  font: a._availableAttrs.font,
                  text: f
                };
              m.shape = h;
              m.path = l;
              m.textpath = p;
              m.type = "text";
              m.attrs.text = b(f);
              m.attrs.x = c;
              m.attrs.y = e;
              m.attrs.w = 1;
              m.attrs.h = 1;
              W(m, n);
              h.appendChild(p);
              h.appendChild(l);
              d.canvas.appendChild(h);
              d = O("skew");
              return (
                (d.on = !0), h.appendChild(d), (m.skew = d), m.transform(""), m
              );
            };
            a._engine.setSize = function(d, b) {
              var c = this.canvas.style;
              return (
                (this.width = d),
                (this.height = b),
                d == +d && (d += "px"),
                b == +b && (b += "px"),
                (c.width = d),
                (c.height = b),
                (c.clip = "rect(0 " + d + " " + b + " 0)"),
                this._viewBox &&
                  a._engine.setViewBox.apply(this, this._viewBox),
                this
              );
            };
            a._engine.setViewBox = function(d, b, c, e, f) {
              a.eve("raphael.setViewBox", this, this._viewBox, [d, b, c, e, f]);
              var h,
                g,
                l = this.getSize(),
                p = l.width,
                m = l.height;
              return (
                f &&
                  ((g = p / c),
                  c * (h = m / e) < p && (d -= (p - c * h) / 2 / h),
                  e * g < m && (b -= (m - e * g) / 2 / g)),
                (this._viewBox = [d, b, c, e, !!f]),
                (this._viewBoxShift = { dx: -d, dy: -b, scale: l }),
                this.forEach(function(a) {
                  a.transform("...");
                }),
                this
              );
            };
            a._engine.initWin = function(a) {
              var d = a.document;
              31 > d.styleSheets.length
                ? d
                    .createStyleSheet()
                    .addRule(".rvml", "behavior:url(#default#VML)")
                : d.styleSheets[0].addRule(
                    ".rvml",
                    "behavior:url(#default#VML)"
                  );
              try {
                !d.namespaces.rvml &&
                  d.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                  (O = function(a) {
                    return d.createElement("<rvml:" + a + ' class="rvml">');
                  });
              } catch (p) {
                O = function(a) {
                  return d.createElement(
                    "<" +
                      a +
                      ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                  );
                };
              }
            };
            a._engine.initWin(a._g.win);
            a._engine.create = function() {
              var d = a._getContainer.apply(0, arguments),
                b = d.container,
                c = d.height,
                e = d.width,
                f = d.x,
                d = d.y;
              if (!b) throw Error("VML container not found.");
              var h = new a._Paper(),
                g = (h.canvas = a._g.doc.createElement("div")),
                m = g.style;
              return (
                (f = f || 0),
                (d = d || 0),
                (e = e || 512),
                (c = c || 342),
                (h.width = e),
                (h.height = c),
                e == +e && (e += "px"),
                c == +c && (c += "px"),
                (h.coordsize = "21600000 21600000"),
                (h.coordorigin = "0 0"),
                (h.span = a._g.doc.createElement("span")),
                (h.span.style.cssText =
                  "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                g.appendChild(h.span),
                (m.cssText = a.format(
                  "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                  e,
                  c
                )),
                1 == b
                  ? (a._g.doc.body.appendChild(g),
                    (m.left = f + "px"),
                    (m.top = d + "px"),
                    (m.position = "absolute"))
                  : b.firstChild
                  ? b.insertBefore(g, b.firstChild)
                  : b.appendChild(g),
                (h.renderfix = function() {}),
                h
              );
            };
            a.prototype.clear = function() {
              a.eve("raphael.clear", this);
              this.canvas.innerHTML = "";
              this.span = a._g.doc.createElement("span");
              this.span.style.cssText =
                "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
              this.canvas.appendChild(this.span);
              this.bottom = this.top = null;
            };
            a.prototype.remove = function() {
              for (var d in (a.eve("raphael.remove", this),
              this.canvas.parentNode.removeChild(this.canvas),
              this))
                this[d] =
                  "function" == typeof this[d] ? a._removedFactory(d) : null;
              return !0;
            };
            var da = a.st,
              P;
            for (P in z)
              z.hasOwnProperty(P) &&
                !da.hasOwnProperty(P) &&
                (da[P] = (function(a) {
                  return function() {
                    var d = arguments;
                    return this.forEach(function(b) {
                      b[a].apply(b, d);
                    });
                  };
                })(P));
          }
        }.apply(b, f)) || (a.exports = g);
    },
    function(a, b, f) {
      var g;
      f = [f(0)];
      void 0 ===
        (g = function(a) {
          if (!a || a.svg) {
            var b = String,
              e = parseFloat,
              f = parseInt,
              g = Math,
              F = g.max,
              I = g.abs,
              A = g.pow,
              v = /[, ]+/,
              T = a.eve,
              X = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
              },
              G = {};
            a.toString = function() {
              return (
                "Your browser supports SVG.\nYou are running Rapha\u00ebl " +
                this.version
              );
            };
            var u = function(d, c) {
                if (c)
                  for (var e in ("string" == typeof d && (d = u(d)), c))
                    c.hasOwnProperty(e) &&
                      ("xlink:" == e.substring(0, 6)
                        ? d.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            e.substring(6),
                            b(c[e])
                          )
                        : d.setAttribute(e, b(c[e])));
                else
                  (d = a._g.doc.createElementNS(
                    "http://www.w3.org/2000/svg",
                    d
                  )).style &&
                    (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return d;
              },
              V = function(d, c) {
                var f = "linear",
                  h = d.id + c,
                  l = 0.5,
                  m = 0.5,
                  n = d.node,
                  r = d.paper,
                  H = n.style,
                  L = a._g.doc.getElementById(h);
                if (!L) {
                  if (
                    ((c = (c = b(c).replace(a._radial_gradient, function(
                      a,
                      d,
                      b
                    ) {
                      if (((f = "radial"), d && b))
                        (l = e(d)),
                          (a = 2 * (0.5 < (m = e(b))) - 1),
                          0.25 < A(l - 0.5, 2) + A(m - 0.5, 2) &&
                            (m = g.sqrt(0.25 - A(l - 0.5, 2)) * a + 0.5) &&
                            0.5 != m &&
                            (m = m.toFixed(5) - 1e-5 * a);
                      return "";
                    })).split(/\s*\-\s*/)),
                    "linear" == f)
                  ) {
                    L = c.shift();
                    if (((L = -e(L)), isNaN(L))) return null;
                    var v = [0, 0, g.cos(a.rad(L)), g.sin(a.rad(L))],
                      L = 1 / (F(I(v[2]), I(v[3])) || 1);
                    v[2] *= L;
                    v[3] *= L;
                    0 > v[2] && ((v[0] = -v[2]), (v[2] = 0));
                    0 > v[3] && ((v[1] = -v[3]), (v[3] = 0));
                  }
                  var O = a._parseDots(c);
                  if (!O) return null;
                  if (
                    ((h = h.replace(/[\(\)\s,\xb0#]/g, "_")),
                    d.gradient &&
                      h != d.gradient.id &&
                      (r.defs.removeChild(d.gradient), delete d.gradient),
                    !d.gradient)
                  )
                    for (
                      L = u(f + "Gradient", { id: h }),
                        d.gradient = L,
                        u(
                          L,
                          "radial" == f
                            ? { fx: l, fy: m }
                            : {
                                x1: v[0],
                                y1: v[1],
                                x2: v[2],
                                y2: v[3],
                                gradientTransform: d.matrix.invert()
                              }
                        ),
                        r.defs.appendChild(L),
                        r = 0,
                        v = O.length;
                      r < v;
                      r++
                    )
                      L.appendChild(
                        u("stop", {
                          offset: O[r].offset ? O[r].offset : r ? "100%" : "0%",
                          "stop-color": O[r].color || "#fff",
                          "stop-opacity": isFinite(O[r].opacity)
                            ? O[r].opacity
                            : 1
                        })
                      );
                }
                return (
                  u(n, { fill: ba(h), opacity: 1, "fill-opacity": 1 }),
                  (H.fill = ""),
                  (H.opacity = 1),
                  (H.fillOpacity = 1),
                  1
                );
              },
              ba = function(a) {
                if ((d = document.documentMode) && (9 === d || 10 === d))
                  return "url('#" + a + "')";
                var d;
                d = document.location;
                return (
                  "url('" +
                  (d.protocol + "//" + d.host + d.pathname + d.search) +
                  "#" +
                  a +
                  "')"
                );
              },
              M = function(a) {
                var d = a.getBBox(1);
                u(a.pattern, {
                  patternTransform:
                    a.matrix.invert() + " translate(" + d.x + "," + d.y + ")"
                });
              },
              L = function(d, c, e) {
                if ("path" == d.type) {
                  for (
                    var f,
                      h,
                      g,
                      l,
                      p,
                      m = b(c)
                        .toLowerCase()
                        .split("-"),
                      n = d.paper,
                      r = e ? "end" : "start",
                      L = d.node,
                      H = d.attrs,
                      A = H["stroke-width"],
                      v = m.length,
                      O = "classic",
                      F = 3,
                      I = 3,
                      z = 5;
                    v--;

                  )
                    switch (m[v]) {
                      case "block":
                      case "classic":
                      case "oval":
                      case "diamond":
                      case "open":
                      case "none":
                        O = m[v];
                        break;
                      case "wide":
                        I = 5;
                        break;
                      case "narrow":
                        I = 2;
                        break;
                      case "long":
                        F = 5;
                        break;
                      case "short":
                        F = 2;
                    }
                  if (
                    ("open" == O
                      ? ((F += 2),
                        (I += 2),
                        (z += 2),
                        (g = 1),
                        (l = e ? 4 : 1),
                        (p = { fill: "none", stroke: H.stroke }))
                      : ((l = g = F / 2),
                        (p = { fill: H.stroke, stroke: "none" })),
                    d._.arrows
                      ? e
                        ? (d._.arrows.endPath && G[d._.arrows.endPath]--,
                          d._.arrows.endMarker && G[d._.arrows.endMarker]--)
                        : (d._.arrows.startPath && G[d._.arrows.startPath]--,
                          d._.arrows.startMarker && G[d._.arrows.startMarker]--)
                      : (d._.arrows = {}),
                    "none" != O)
                  ) {
                    m = "raphael-marker-" + O;
                    v = "raphael-marker-" + r + O + F + I + "-obj" + d.id;
                    a._g.doc.getElementById(m)
                      ? G[m]++
                      : (n.defs.appendChild(
                          u(u("path"), {
                            "stroke-linecap": "round",
                            d: X[O],
                            id: m
                          })
                        ),
                        (G[m] = 1));
                    var W,
                      V = a._g.doc.getElementById(v);
                    V
                      ? (G[v]++, (W = V.getElementsByTagName("use")[0]))
                      : ((V = u(u("marker"), {
                          id: v,
                          markerHeight: I,
                          markerWidth: F,
                          orient: "auto",
                          refX: l,
                          refY: I / 2
                        })),
                        (W = u(u("use"), {
                          "xlink:href": "#" + m,
                          transform:
                            (e
                              ? "rotate(180 " + F / 2 + " " + I / 2 + ") "
                              : "") +
                            "scale(" +
                            F / z +
                            "," +
                            I / z +
                            ")",
                          "stroke-width": (1 / ((F / z + I / z) / 2)).toFixed(4)
                        })),
                        V.appendChild(W),
                        n.defs.appendChild(V),
                        (G[v] = 1));
                    u(W, p);
                    g *= "diamond" != O && "oval" != O;
                    e
                      ? ((f = d._.arrows.startdx * A || 0),
                        (h = a.getTotalLength(H.path) - g * A))
                      : ((f = g * A),
                        (h =
                          a.getTotalLength(H.path) -
                          (d._.arrows.enddx * A || 0)));
                    (p = {})["marker-" + r] = "url(#" + v + ")";
                    (h || f) && (p.d = a.getSubpath(H.path, f, h));
                    u(L, p);
                    d._.arrows[r + "Path"] = m;
                    d._.arrows[r + "Marker"] = v;
                    d._.arrows[r + "dx"] = g;
                    d._.arrows[r + "Type"] = O;
                    d._.arrows[r + "String"] = c;
                  } else
                    e
                      ? ((f = d._.arrows.startdx * A || 0),
                        (h = a.getTotalLength(H.path) - f))
                      : ((f = 0),
                        (h =
                          a.getTotalLength(H.path) -
                          (d._.arrows.enddx * A || 0))),
                      d._.arrows[r + "Path"] &&
                        u(L, { d: a.getSubpath(H.path, f, h) }),
                      delete d._.arrows[r + "Path"],
                      delete d._.arrows[r + "Marker"],
                      delete d._.arrows[r + "dx"],
                      delete d._.arrows[r + "Type"],
                      delete d._.arrows[r + "String"];
                  for (p in G)
                    G.hasOwnProperty(p) &&
                      !G[p] &&
                      (d = a._g.doc.getElementById(p)) &&
                      d.parentNode.removeChild(d);
                }
              },
              H = {
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3]
              },
              O = function(a, c, e) {
                if ((c = H[b(c).toLowerCase()])) {
                  var d = a.attrs["stroke-width"] || "1";
                  e =
                    { round: d, square: d, butt: 0 }[
                      a.attrs["stroke-linecap"] || e["stroke-linecap"]
                    ] || 0;
                  for (var f = [], h = c.length; h--; )
                    f[h] = c[h] * d + (h % 2 ? 1 : -1) * e;
                  u(a.node, { "stroke-dasharray": f.join(",") });
                } else u(a.node, { "stroke-dasharray": "none" });
              },
              n = function(d, c) {
                var e = d.node,
                  h = d.attrs,
                  g = e.style.visibility,
                  l;
                for (l in ((e.style.visibility = "hidden"), c))
                  if (
                    c.hasOwnProperty(l) &&
                    a._availableAttrs.hasOwnProperty(l)
                  ) {
                    var m = c[l];
                    switch (((h[l] = m), l)) {
                      case "blur":
                        d.blur(m);
                        break;
                      case "title":
                        var n = e.getElementsByTagName("title");
                        n.length && (n = n[0])
                          ? (n.firstChild.nodeValue = m)
                          : ((n = u("title")),
                            (m = a._g.doc.createTextNode(m)),
                            n.appendChild(m),
                            e.appendChild(n));
                        break;
                      case "href":
                      case "target":
                        n = e.parentNode;
                        if ("a" != n.tagName.toLowerCase()) {
                          var r = u("a");
                          n.insertBefore(r, e);
                          r.appendChild(e);
                          n = r;
                        }
                        "target" == l
                          ? n.setAttributeNS(
                              "http://www.w3.org/1999/xlink",
                              "show",
                              "blank" == m ? "new" : m
                            )
                          : n.setAttributeNS(
                              "http://www.w3.org/1999/xlink",
                              l,
                              m
                            );
                        break;
                      case "cursor":
                        e.style.cursor = m;
                        break;
                      case "transform":
                        d.transform(m);
                        break;
                      case "arrow-start":
                        L(d, m);
                        break;
                      case "arrow-end":
                        L(d, m, 1);
                        break;
                      case "clip-rect":
                        n = b(m).split(v);
                        if (4 == n.length) {
                          d.clip &&
                            d.clip.parentNode.parentNode.removeChild(
                              d.clip.parentNode
                            );
                          var r = u("clipPath"),
                            H = u("rect");
                          r.id = a.createUUID();
                          u(H, { x: n[0], y: n[1], width: n[2], height: n[3] });
                          r.appendChild(H);
                          d.paper.defs.appendChild(r);
                          u(e, { "clip-path": "url(#" + r.id + ")" });
                          d.clip = H;
                        }
                        !m &&
                          (m = e.getAttribute("clip-path")) &&
                          ((m = a._g.doc.getElementById(
                            m.replace(/(^url\(#|\)$)/g, "")
                          )) && m.parentNode.removeChild(m),
                          u(e, { "clip-path": "" }),
                          delete d.clip);
                        break;
                      case "path":
                        "path" == d.type &&
                          (u(e, {
                            d: m ? (h.path = a._pathToAbsolute(m)) : "M0,0"
                          }),
                          (d._.dirty = 1),
                          d._.arrows &&
                            ("startString" in d._.arrows &&
                              L(d, d._.arrows.startString),
                            "endString" in d._.arrows &&
                              L(d, d._.arrows.endString, 1)));
                        break;
                      case "width":
                        if ((e.setAttribute(l, m), (d._.dirty = 1), !h.fx))
                          break;
                        l = "x";
                        m = h.x;
                      case "x":
                        h.fx && (m = -h.x - (h.width || 0));
                      case "rx":
                        if ("rx" == l && "rect" == d.type) break;
                      case "cx":
                        e.setAttribute(l, m);
                        d.pattern && M(d);
                        d._.dirty = 1;
                        break;
                      case "height":
                        if ((e.setAttribute(l, m), (d._.dirty = 1), !h.fy))
                          break;
                        l = "y";
                        m = h.y;
                      case "y":
                        h.fy && (m = -h.y - (h.height || 0));
                      case "ry":
                        if ("ry" == l && "rect" == d.type) break;
                      case "cy":
                        e.setAttribute(l, m);
                        d.pattern && M(d);
                        d._.dirty = 1;
                        break;
                      case "r":
                        "rect" == d.type
                          ? u(e, { rx: m, ry: m })
                          : e.setAttribute(l, m);
                        d._.dirty = 1;
                        break;
                      case "src":
                        "image" == d.type &&
                          e.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            "href",
                            m
                          );
                        break;
                      case "stroke-width":
                        (1 == d._.sx && 1 == d._.sy) ||
                          (m /= F(I(d._.sx), I(d._.sy)) || 1);
                        e.setAttribute(l, m);
                        h["stroke-dasharray"] && O(d, h["stroke-dasharray"], c);
                        d._.arrows &&
                          ("startString" in d._.arrows &&
                            L(d, d._.arrows.startString),
                          "endString" in d._.arrows &&
                            L(d, d._.arrows.endString, 1));
                        break;
                      case "stroke-dasharray":
                        O(d, m, c);
                        break;
                      case "fill":
                        var A = b(m).match(a._ISURL);
                        if (A) {
                          var r = u("pattern"),
                            z = u("image");
                          r.id = a.createUUID();
                          u(r, {
                            x: 0,
                            y: 0,
                            patternUnits: "userSpaceOnUse",
                            height: 1,
                            width: 1
                          });
                          u(z, { x: 0, y: 0, "xlink:href": A[1] });
                          r.appendChild(z);
                          (function(d) {
                            a._preload(A[1], function() {
                              var a = this.offsetWidth,
                                b = this.offsetHeight;
                              u(d, { width: a, height: b });
                              u(z, { width: a, height: b });
                            });
                          })(r);
                          d.paper.defs.appendChild(r);
                          u(e, { fill: "url(#" + r.id + ")" });
                          d.pattern = r;
                          d.pattern && M(d);
                          break;
                        }
                        n = a.getRGB(m);
                        if (n.error) {
                          if (
                            ("circle" == d.type ||
                              "ellipse" == d.type ||
                              "r" != b(m).charAt()) &&
                            V(d, m)
                          ) {
                            if ("opacity" in h || "fill-opacity" in h) {
                              var ba = a._g.doc.getElementById(
                                e
                                  .getAttribute("fill")
                                  .replace(/^url\(#|\)$/g, "")
                              );
                              if (ba) {
                                var T = ba.getElementsByTagName("stop");
                                u(T[T.length - 1], {
                                  "stop-opacity":
                                    ("opacity" in h ? h.opacity : 1) *
                                    ("fill-opacity" in h
                                      ? h["fill-opacity"]
                                      : 1)
                                });
                              }
                            }
                            h.gradient = m;
                            h.fill = "none";
                            break;
                          }
                        } else
                          delete c.gradient,
                            delete h.gradient,
                            !a.is(h.opacity, "undefined") &&
                              a.is(c.opacity, "undefined") &&
                              u(e, { opacity: h.opacity }),
                            !a.is(h["fill-opacity"], "undefined") &&
                              a.is(c["fill-opacity"], "undefined") &&
                              u(e, { "fill-opacity": h["fill-opacity"] });
                        n.hasOwnProperty("opacity") &&
                          u(e, {
                            "fill-opacity":
                              1 < n.opacity ? n.opacity / 100 : n.opacity
                          });
                      case "stroke":
                        n = a.getRGB(m);
                        e.setAttribute(l, n.hex);
                        "stroke" == l &&
                          n.hasOwnProperty("opacity") &&
                          u(e, {
                            "stroke-opacity":
                              1 < n.opacity ? n.opacity / 100 : n.opacity
                          });
                        "stroke" == l &&
                          d._.arrows &&
                          ("startString" in d._.arrows &&
                            L(d, d._.arrows.startString),
                          "endString" in d._.arrows &&
                            L(d, d._.arrows.endString, 1));
                        break;
                      case "gradient":
                        ("circle" != d.type &&
                          "ellipse" != d.type &&
                          "r" == b(m).charAt()) ||
                          V(d, m);
                        break;
                      case "opacity":
                        h.gradient &&
                          !h.hasOwnProperty("stroke-opacity") &&
                          u(e, { "stroke-opacity": 1 < m ? m / 100 : m });
                      case "fill-opacity":
                        if (h.gradient) {
                          (ba = a._g.doc.getElementById(
                            e.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                          )) &&
                            ((T = ba.getElementsByTagName("stop")),
                            u(T[T.length - 1], { "stop-opacity": m }));
                          break;
                        }
                      default:
                        "font-size" == l && (m = f(m, 10) + "px"),
                          (n = l.replace(/(\-.)/g, function(a) {
                            return a.substring(1).toUpperCase();
                          })),
                          (e.style[n] = m),
                          (d._.dirty = 1),
                          e.setAttribute(l, m);
                    }
                  }
                W(d, c);
                e.style.visibility = g;
              },
              W = function(d, c) {
                if (
                  "text" == d.type &&
                  (c.hasOwnProperty("text") ||
                    c.hasOwnProperty("font") ||
                    c.hasOwnProperty("font-size") ||
                    c.hasOwnProperty("x") ||
                    c.hasOwnProperty("y"))
                ) {
                  var e = d.attrs,
                    h = d.node,
                    g = h.firstChild
                      ? f(
                          a._g.doc.defaultView
                            .getComputedStyle(h.firstChild, "")
                            .getPropertyValue("font-size"),
                          10
                        )
                      : 10;
                  if (c.hasOwnProperty("text")) {
                    for (e.text = c.text; h.firstChild; )
                      h.removeChild(h.firstChild);
                    for (
                      var l,
                        m = b(c.text).split("\n"),
                        n = [],
                        r = 0,
                        H = m.length;
                      r < H;
                      r++
                    )
                      (l = u("tspan")),
                        r && u(l, { dy: 1.2 * g, x: e.x }),
                        l.appendChild(a._g.doc.createTextNode(m[r])),
                        h.appendChild(l),
                        (n[r] = l);
                  } else
                    for (
                      r = 0, H = (n = h.getElementsByTagName("tspan")).length;
                      r < H;
                      r++
                    )
                      r ? u(n[r], { dy: 1.2 * g, x: e.x }) : u(n[0], { dy: 0 });
                  u(h, { x: e.x, y: e.y });
                  d._.dirty = 1;
                  h = d._getBBox();
                  (e = e.y - (h.y + h.height / 2)) &&
                    a.is(e, "finite") &&
                    u(n[0], { dy: e });
                }
              },
              aa = function(a) {
                return a.parentNode &&
                  "a" === a.parentNode.tagName.toLowerCase()
                  ? a.parentNode
                  : a;
              },
              Y = function(d, b) {
                this[0] = this.node = d;
                d.raphael = !0;
                this.id = (
                  "0000" + ((Math.random() * Math.pow(36, 5)) << 0).toString(36)
                ).slice(-5);
                d.raphaelid = this.id;
                this.matrix = a.matrix();
                this.realPath = null;
                this.paper = b;
                this.attrs = this.attrs || {};
                this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  deg: 0,
                  dx: 0,
                  dy: 0,
                  dirty: 1
                };
                !b.bottom && (b.bottom = this);
                (this.prev = b.top) && (b.top.next = this);
                b.top = this;
                this.next = null;
              },
              z = a.el;
            Y.prototype = z;
            z.constructor = Y;
            a._engine.path = function(a, b) {
              var d = u("path");
              b.canvas && b.canvas.appendChild(d);
              d = new Y(d, b);
              return (
                (d.type = "path"),
                n(d, { fill: "none", stroke: "#000", path: a }),
                d
              );
            };
            z.rotate = function(a, c, f) {
              if (this.removed) return this;
              if (
                ((a = b(a).split(v)).length - 1 &&
                  ((c = e(a[1])), (f = e(a[2]))),
                (a = e(a[0])),
                null == f && (c = f),
                null == c || null == f)
              )
                (f = this.getBBox(1)),
                  (c = f.x + f.width / 2),
                  (f = f.y + f.height / 2);
              return (
                this.transform(this._.transform.concat([["r", a, c, f]])), this
              );
            };
            z.scale = function(a, c, f, h) {
              if (this.removed) return this;
              if (
                ((a = b(a).split(v)).length - 1 &&
                  ((c = e(a[1])), (f = e(a[2])), (h = e(a[3]))),
                (a = e(a[0])),
                null == c && (c = a),
                null == h && (f = h),
                null == f || null == h)
              )
                var d = this.getBBox(1);
              return (
                (f = null == f ? d.x + d.width / 2 : f),
                (h = null == h ? d.y + d.height / 2 : h),
                this.transform(this._.transform.concat([["s", a, c, f, h]])),
                this
              );
            };
            z.translate = function(a, c) {
              return this.removed
                ? this
                : ((a = b(a).split(v)).length - 1 && (c = e(a[1])),
                  (a = e(a[0]) || 0),
                  (c = +c || 0),
                  this.transform(this._.transform.concat([["t", a, c]])),
                  this);
            };
            z.transform = function(d) {
              var b = this._;
              if (null == d) return b.transform;
              if (
                (a._extractTransform(this, d),
                this.clip && u(this.clip, { transform: this.matrix.invert() }),
                this.pattern && M(this),
                this.node && u(this.node, { transform: this.matrix }),
                1 != b.sx || 1 != b.sy)
              )
                (d = this.attrs.hasOwnProperty("stroke-width")
                  ? this.attrs["stroke-width"]
                  : 1),
                  this.attr({ "stroke-width": d });
              return this;
            };
            z.hide = function() {
              return this.removed || (this.node.style.display = "none"), this;
            };
            z.show = function() {
              return this.removed || (this.node.style.display = ""), this;
            };
            z.remove = function() {
              var d = aa(this.node);
              if (!this.removed && d.parentNode) {
                var b = this.paper,
                  c;
                for (c in (b.__set__ && b.__set__.exclude(this),
                T.unbind("raphael.*.*." + this.id),
                this.gradient && b.defs.removeChild(this.gradient),
                a._tear(this, b),
                d.parentNode.removeChild(d),
                this.removeData(),
                this))
                  this[c] =
                    "function" == typeof this[c] ? a._removedFactory(c) : null;
                this.removed = !0;
              }
            };
            z._getBBox = function() {
              if ("none" == this.node.style.display) {
                this.show();
                var a = !0;
              }
              var b,
                c = !1;
              this.paper.canvas.parentElement
                ? (b = this.paper.canvas.parentElement.style)
                : this.paper.canvas.parentNode &&
                  (b = this.paper.canvas.parentNode.style);
              b && "none" == b.display && ((c = !0), (b.display = ""));
              var e = {};
              try {
                e = this.node.getBBox();
              } catch (w) {
                e = {
                  x: this.node.clientLeft,
                  y: this.node.clientTop,
                  width: this.node.clientWidth,
                  height: this.node.clientHeight
                };
              } finally {
                (e = e || {}), c && (b.display = "none");
              }
              return a && this.hide(), e;
            };
            z.attr = function(d, b) {
              if (this.removed) return this;
              if (null == d) {
                var c = {},
                  e;
                for (e in this.attrs)
                  this.attrs.hasOwnProperty(e) && (c[e] = this.attrs[e]);
                return (
                  c.gradient &&
                    "none" == c.fill &&
                    (c.fill = c.gradient) &&
                    delete c.gradient,
                  (c.transform = this._.transform),
                  c
                );
              }
              if (null == b && a.is(d, "string")) {
                if (
                  "fill" == d &&
                  "none" == this.attrs.fill &&
                  this.attrs.gradient
                )
                  return this.attrs.gradient;
                if ("transform" == d) return this._.transform;
                e = d.split(v);
                for (var c = {}, f = 0, h = e.length; f < h; f++)
                  (d = e[f]) in this.attrs
                    ? (c[d] = this.attrs[d])
                    : a.is(this.paper.customAttributes[d], "function")
                    ? (c[d] = this.paper.customAttributes[d].def)
                    : (c[d] = a._availableAttrs[d]);
                return h - 1 ? c : c[e[0]];
              }
              if (null == b && a.is(d, "array")) {
                c = {};
                f = 0;
                for (h = d.length; f < h; f++) c[d[f]] = this.attr(d[f]);
                return c;
              }
              null != b
                ? ((c = {}), (c[d] = b))
                : null != d && a.is(d, "object") && (c = d);
              for (f in c) T("raphael.attr." + f + "." + this.id, this, c[f]);
              for (f in this.paper.customAttributes)
                if (
                  this.paper.customAttributes.hasOwnProperty(f) &&
                  c.hasOwnProperty(f) &&
                  a.is(this.paper.customAttributes[f], "function")
                )
                  for (h in ((e = this.paper.customAttributes[f].apply(
                    this,
                    [].concat(c[f])
                  )),
                  (this.attrs[f] = c[f]),
                  e))
                    e.hasOwnProperty(h) && (c[h] = e[h]);
              return n(this, c), this;
            };
            z.toFront = function() {
              if (this.removed) return this;
              var d = aa(this.node);
              d.parentNode.appendChild(d);
              d = this.paper;
              return d.top != this && a._tofront(this, d), this;
            };
            z.toBack = function() {
              if (this.removed) return this;
              var d = aa(this.node),
                b = d.parentNode;
              b.insertBefore(d, b.firstChild);
              a._toback(this, this.paper);
              this.paper;
              return this;
            };
            z.insertAfter = function(d) {
              if (this.removed || !d) return this;
              var b = aa(this.node),
                c = aa(d.node || d[d.length - 1].node);
              return (
                c.nextSibling
                  ? c.parentNode.insertBefore(b, c.nextSibling)
                  : c.parentNode.appendChild(b),
                a._insertafter(this, d, this.paper),
                this
              );
            };
            z.insertBefore = function(d) {
              if (this.removed || !d) return this;
              var b = aa(this.node),
                c = aa(d.node || d[0].node);
              return (
                c.parentNode.insertBefore(b, c),
                a._insertbefore(this, d, this.paper),
                this
              );
            };
            z.blur = function(d) {
              if (0 != +d) {
                var b = u("filter"),
                  c = u("feGaussianBlur");
                this.attrs.blur = d;
                b.id = a.createUUID();
                u(c, { stdDeviation: +d || 1.5 });
                b.appendChild(c);
                this.paper.defs.appendChild(b);
                this._blur = b;
                u(this.node, { filter: "url(#" + b.id + ")" });
              } else
                this._blur &&
                  (this._blur.parentNode.removeChild(this._blur),
                  delete this._blur,
                  delete this.attrs.blur),
                  this.node.removeAttribute("filter");
              return this;
            };
            a._engine.circle = function(a, b, c, e) {
              var d = u("circle");
              a.canvas && a.canvas.appendChild(d);
              a = new Y(d, a);
              return (
                (a.attrs = {
                  cx: b,
                  cy: c,
                  r: e,
                  fill: "none",
                  stroke: "#000"
                }),
                (a.type = "circle"),
                u(d, a.attrs),
                a
              );
            };
            a._engine.rect = function(a, b, c, e, f, h) {
              var d = u("rect");
              a.canvas && a.canvas.appendChild(d);
              a = new Y(d, a);
              return (
                (a.attrs = {
                  x: b,
                  y: c,
                  width: e,
                  height: f,
                  rx: h || 0,
                  ry: h || 0,
                  fill: "none",
                  stroke: "#000"
                }),
                (a.type = "rect"),
                u(d, a.attrs),
                a
              );
            };
            a._engine.ellipse = function(a, b, c, e, f) {
              var d = u("ellipse");
              a.canvas && a.canvas.appendChild(d);
              a = new Y(d, a);
              return (
                (a.attrs = {
                  cx: b,
                  cy: c,
                  rx: e,
                  ry: f,
                  fill: "none",
                  stroke: "#000"
                }),
                (a.type = "ellipse"),
                u(d, a.attrs),
                a
              );
            };
            a._engine.image = function(a, b, c, e, f, h) {
              var d = u("image");
              u(d, {
                x: c,
                y: e,
                width: f,
                height: h,
                preserveAspectRatio: "none"
              });
              d.setAttributeNS("http://www.w3.org/1999/xlink", "href", b);
              a.canvas && a.canvas.appendChild(d);
              a = new Y(d, a);
              return (
                (a.attrs = { x: c, y: e, width: f, height: h, src: b }),
                (a.type = "image"),
                a
              );
            };
            a._engine.text = function(b, c, e, f) {
              var d = u("text");
              b.canvas && b.canvas.appendChild(d);
              b = new Y(d, b);
              return (
                (b.attrs = {
                  x: c,
                  y: e,
                  "text-anchor": "middle",
                  text: f,
                  "font-family": a._availableAttrs["font-family"],
                  "font-size": a._availableAttrs["font-size"],
                  stroke: "none",
                  fill: "#000"
                }),
                (b.type = "text"),
                n(b, b.attrs),
                b
              );
            };
            a._engine.setSize = function(a, b) {
              return (
                (this.width = a || this.width),
                (this.height = b || this.height),
                this.canvas.setAttribute("width", this.width),
                this.canvas.setAttribute("height", this.height),
                this._viewBox && this.setViewBox.apply(this, this._viewBox),
                this
              );
            };
            a._engine.create = function() {
              var b = a._getContainer.apply(0, arguments),
                c = b && b.container,
                e = b.x,
                f = b.y,
                h = b.width,
                b = b.height;
              if (!c) throw Error("SVG container not found.");
              var g,
                m = u("svg");
              return (
                (e = e || 0),
                (f = f || 0),
                (h = h || 512),
                u(m, {
                  height: (b = b || 342),
                  version: 1.1,
                  width: h,
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }),
                1 == c
                  ? ((m.style.cssText =
                      "overflow:hidden;position:absolute;left:" +
                      e +
                      "px;top:" +
                      f +
                      "px"),
                    a._g.doc.body.appendChild(m),
                    (g = 1))
                  : ((m.style.cssText = "overflow:hidden;position:relative"),
                    c.firstChild
                      ? c.insertBefore(m, c.firstChild)
                      : c.appendChild(m)),
                ((c = new a._Paper()).width = h),
                (c.height = b),
                (c.canvas = m),
                c.clear(),
                (c._left = c._top = 0),
                g && (c.renderfix = function() {}),
                c.renderfix(),
                c
              );
            };
            a._engine.setViewBox = function(a, b, c, e, f) {
              T("raphael.setViewBox", this, this._viewBox, [a, b, c, e, f]);
              var d,
                h = this.getSize(),
                h = F(c / h.width, e / h.height),
                g = this.top,
                m = f ? "xMidYMid meet" : "xMinYMin";
              null == a
                ? (this._vbSize && (h = 1),
                  delete this._vbSize,
                  (d = "0 0 " + this.width + " " + this.height))
                : ((this._vbSize = h), (d = a + " " + b + " " + c + " " + e));
              for (
                u(this.canvas, { viewBox: d, preserveAspectRatio: m });
                h && g;

              )
                (d = "stroke-width" in g.attrs ? g.attrs["stroke-width"] : 1),
                  g.attr({ "stroke-width": d }),
                  (g._.dirty = 1),
                  (g._.dirtyT = 1),
                  (g = g.prev);
              return (this._viewBox = [a, b, c, e, !!f]), this;
            };
            a.prototype.renderfix = function() {
              var a,
                b = this.canvas,
                c = b.style;
              try {
                a = b.getScreenCTM() || b.createSVGMatrix();
              } catch (t) {
                a = b.createSVGMatrix();
              }
              b = -a.e % 1;
              a = -a.f % 1;
              (b || a) &&
                (b &&
                  ((this._left = (this._left + b) % 1),
                  (c.left = this._left + "px")),
                a &&
                  ((this._top = (this._top + a) % 1),
                  (c.top = this._top + "px")));
            };
            a.prototype.clear = function() {
              a.eve("raphael.clear", this);
              for (var b = this.canvas; b.firstChild; )
                b.removeChild(b.firstChild);
              this.bottom = this.top = null;
              (this.desc = u("desc")).appendChild(
                a._g.doc.createTextNode(
                  "Created with Rapha\u00ebl " + a.version
                )
              );
              b.appendChild(this.desc);
              b.appendChild((this.defs = u("defs")));
            };
            a.prototype.remove = function() {
              for (var b in (T("raphael.remove", this),
              this.canvas.parentNode &&
                this.canvas.parentNode.removeChild(this.canvas),
              this))
                this[b] =
                  "function" == typeof this[b] ? a._removedFactory(b) : null;
            };
            var da = a.st,
              P;
            for (P in z)
              z.hasOwnProperty(P) &&
                !da.hasOwnProperty(P) &&
                (da[P] = (function(a) {
                  return function() {
                    var b = arguments;
                    return this.forEach(function(d) {
                      d[a].apply(d, b);
                    });
                  };
                })(P));
          }
        }.apply(b, f)) || (a.exports = g);
    },
    function(a, b, f) {
      var g, e, c, h, m, r, F, I, A, v, T, X, G;
      h = /[\.\/]/;
      m = /\s*,\s*/;
      r = function(a, b) {
        return a - b;
      };
      F = { n: {} };
      I = function() {
        for (var a = 0, b = this.length; a < b; a++)
          if (void 0 !== this[a]) return this[a];
      };
      A = function() {
        for (var a = this.length; --a; ) if (void 0 !== this[a]) return this[a];
      };
      v = Object.prototype.toString;
      T = String;
      X =
        Array.isArray ||
        function(a) {
          return a instanceof Array || "[object Array]" == v.call(a);
        };
      (G = function(a, b) {
        var f,
          h = c,
          g = Array.prototype.slice.call(arguments, 2),
          m = G.listeners(a),
          u = 0,
          n = [],
          v = {},
          F = [],
          T = e;
        F.firstDefined = I;
        F.lastDefined = A;
        e = a;
        for (var z = (c = 0), V = m.length; z < V; z++)
          "zIndex" in m[z] &&
            (n.push(m[z].zIndex), 0 > m[z].zIndex && (v[m[z].zIndex] = m[z]));
        for (n.sort(r); 0 > n[u]; )
          if (((f = v[n[u++]]), F.push(f.apply(b, g)), c)) return (c = h), F;
        for (z = 0; z < V; z++)
          if ("zIndex" in (f = m[z]))
            if (f.zIndex == n[u]) {
              if ((F.push(f.apply(b, g)), c)) break;
              do if (((f = v[n[++u]]) && F.push(f.apply(b, g)), c)) break;
              while (f);
            } else v[f.zIndex] = f;
          else if ((F.push(f.apply(b, g)), c)) break;
        return (c = h), (e = T), F;
      })._events = F;
      G.listeners = function(a) {
        var b,
          c,
          e,
          f,
          g,
          m,
          n,
          r = X(a) ? a : a.split(h),
          u = F,
          A = [u],
          v = [];
        e = 0;
        for (f = r.length; e < f; e++) {
          n = [];
          g = 0;
          for (m = A.length; g < m; g++)
            for (a = [(u = A[g].n)[r[e]], u["*"]], c = 2; c--; )
              (b = a[c]) && (n.push(b), (v = v.concat(b.f || [])));
          A = n;
        }
        return v;
      };
      G.separator = function(a) {
        a
          ? ((a = "[" + (a = T(a).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]"),
            (h = new RegExp(a)))
          : (h = /[\.\/]/);
      };
      G.on = function(a, b) {
        if ("function" != typeof b) return function() {};
        for (
          var c = X(a) ? (X(a[0]) ? a : [a]) : T(a).split(m),
            e = 0,
            f = c.length;
          e < f;
          e++
        )
          !(function(a) {
            var c;
            a = X(a) ? a : T(a).split(h);
            for (var e = F, f = 0, g = a.length; f < g; f++)
              e =
                ((e = e.n).hasOwnProperty(a[f]) && e[a[f]]) ||
                (e[a[f]] = { n: {} });
            e.f = e.f || [];
            f = 0;
            for (g = e.f.length; f < g; f++)
              if (e.f[f] == b) {
                c = !0;
                break;
              }
            !c && e.f.push(b);
          })(c[e]);
        return function(a) {
          +a == +a && (b.zIndex = +a);
        };
      };
      G.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
          G.apply(
            null,
            [a, null].concat(b).concat([].slice.call(arguments, 0))
          );
        };
      };
      G.stop = function() {
        c = 1;
      };
      G.nt = function(a) {
        var b = X(e) ? e.join(".") : e;
        return a
          ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b)
          : b;
      };
      G.nts = function() {
        return X(e) ? e : e.split(h);
      };
      G.off = G.unbind = function(a, b) {
        if (a) {
          var c = X(a) ? (X(a[0]) ? a : [a]) : T(a).split(m);
          if (1 < c.length)
            for (var e = 0, f = c.length; e < f; e++) G.off(c[e], b);
          else {
            for (
              var c = X(a) ? a : T(a).split(h),
                g,
                r,
                n,
                A,
                v = [F],
                e = 0,
                f = c.length;
              e < f;
              e++
            )
              for (A = 0; A < v.length; A += n.length - 2) {
                if (((n = [A, 1]), (g = v[A].n), "*" != c[e]))
                  g[c[e]] && n.push(g[c[e]]);
                else for (r in g) g.hasOwnProperty(r) && n.push(g[r]);
                v.splice.apply(v, n);
              }
            e = 0;
            for (f = v.length; e < f; e++)
              for (g = v[e]; g.n; ) {
                if (b) {
                  if (g.f) {
                    A = 0;
                    for (c = g.f.length; A < c; A++)
                      if (g.f[A] == b) {
                        g.f.splice(A, 1);
                        break;
                      }
                    !g.f.length && delete g.f;
                  }
                  for (r in g.n)
                    if (g.n.hasOwnProperty(r) && g.n[r].f) {
                      n = g.n[r].f;
                      A = 0;
                      for (c = n.length; A < c; A++)
                        if (n[A] == b) {
                          n.splice(A, 1);
                          break;
                        }
                      !n.length && delete g.n[r].f;
                    }
                } else
                  for (r in (delete g.f, g.n))
                    g.n.hasOwnProperty(r) && g.n[r].f && delete g.n[r].f;
                g = g.n;
              }
          }
        } else G._events = F = { n: {} };
      };
      G.once = function(a, b) {
        var c = function() {
          return G.off(a, c), b.apply(this, arguments);
        };
        return G.on(a, c);
      };
      G.version = "0.5.0";
      G.toString = function() {
        return "You are running Eve 0.5.0";
      };
      void 0 !== a && a.exports
        ? (a.exports = G)
        : void 0 ===
            (g = function() {
              return G;
            }.apply(b, [])) || (a.exports = g);
    },
    function(a, b, f) {
      var g;
      f = [f(0), f(2), f(1)];
      void 0 ===
        (g = function(a) {
          return a;
        }.apply(b, f)) || (a.exports = g);
    }
  ]);
});
(function() {
  function a(a, b) {
    null !== a.object.text && a.object.text.remove();
    var e = function() {
      a.object.path.remove();
      a.object = { path: null, text: null };
      b.shift();
    };
    c.options.stroke.animated.erasing && null != a.object.path
      ? ((a.object.path.node.style.stroke = c.options.stroke.attr.active),
        b.push(g(a, -1, e)))
      : e();
  }
  function b(a, b, e) {
    var h = function() {
      if (null !== b.object.path) {
        var a = c.options.stroke.attr.stroke;
        "random" === c.options.stroke.attr.stroke && (a = Raphael.getColor());
        b.object.path.node.style.stroke = a;
        b.object.path.node.style.transition = b.object.path.node.style.WebkitTransition =
          "stroke 400ms ease";
        e.shift();
      }
    };
    b.object.path = a.path(b.path);
    b.object.path.attr(c.options.stroke.attr);
    c.options.stroke.order.visible && f(a, b);
    c.options.stroke.animated.drawing ? g(b, 1, h) : h();
  }
  function f(a, b) {
    b.object.text = a.text(b.text.x, b.text.y, b.text.value);
    b.object.text.attr(c.options.stroke.order.attr);
  }
  function g(a, b, e) {
    a.object.path.attr({ stroke: c.options.stroke.attr.active });
    a.object.path.node.style.transition = a.object.path.node.style.WebkitTransition =
      "none";
    a.object.path.node.style.strokeDasharray = a.length + " " + a.length;
    a.object.path.node.style.strokeDashoffset = 0 < b ? a.length : 0;
    a.object.path.node.getBoundingClientRect();
    a.object.path.node.style.transition = a.object.path.node.style.WebkitTransition =
      "stroke-dashoffset " + a.duration + "ms ease";
    a.object.path.node.style.strokeDashoffset = 0 < b ? "0" : a.length;
    return setTimeout(e, a.duration);
  }
  function e(a, b) {
    var c;
    if (2 !== arguments.length)
      throw Error("Missing arguments in extend function");
    for (c in b)
      "object" === typeof a[c]
        ? (a[c] = e(a[c], b[c]))
        : a.hasOwnProperty(c) && (a[c] = b[c]);
    return a;
  }
  var c = function(a, b) {
    this.text = a;
    this.options = e(c.options, b);
    this.strokes = [];
    this.papers = [];
    this.pointer = 0;
    this.timeouts = { play: [], erasing: [], drawing: [] };
    if (!this.options.skipLoad) {
      var f = this;
      new DmakLoader(this.options.uri).load(a, function(a) {
        f.prepare(a);
        f.options.loaded(f.kanjis);
        f.options.autoplay && f.render();
      });
    }
  };
  c.VERSION = "0.2.0";
  c.options = {
    uri: "",
    svg: "",
    skipLoad: !1,
    autoplay: !0,
    height: 109,
    width: 109,
    viewBox: { x: 0, y: 0, w: 109, h: 109 },
    step: 0.015,
    element: "draw",
    stroke: {
      animated: { drawing: !0, erasing: !0 },
      order: { visible: !1, attr: { "font-size": "8", fill: "#999999" } },
      attr: {
        active: "#BF0000",
        stroke: "#2C2C2C",
        "stroke-width": 4,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    },
    grid: {
      show: !0,
      attr: { stroke: "#CCCCCC", "stroke-width": 0.5, "stroke-dasharray": "--" }
    },
    loaded: function() {},
    erased: function() {},
    drew: function() {}
  };
  c.fn = c.prototype = {
    prepare: function(a) {
      var b = [],
        e,
        f,
        h;
      for (f = 0; f < a.length; f++)
        for (h = 0; h < a[f].length; h++)
          (e = Raphael.getTotalLength(a[f][h].path)),
            (e = {
              char: f,
              length: e,
              duration: e * c.options.step * 1e3,
              path: a[f][h].path,
              groups: a[f][h].groups,
              text: a[f][h].text,
              object: { path: null, text: null }
            }),
            b.push(e);
      this.kanjis = b;
      a = a.length;
      b = [];
      for (h = 0; h < a; h++)
        (f = new Raphael(
          c.options.element,
          c.options.width + "px",
          c.options.height + "px"
        )),
          f.setViewBox(
            c.options.viewBox.x,
            c.options.viewBox.y,
            c.options.viewBox.w,
            c.options.viewBox.h
          ),
          f.canvas.setAttribute("class", "dmak-svg"),
          b.push(f);
      this.papers = b.reverse();
      if (this.options.grid.show)
        for (a = this.papers, b = 0; b < a.length; b++)
          a[b]
            .path(
              "M" +
                c.options.viewBox.w / 2 +
                ",0 L" +
                c.options.viewBox.w / 2 +
                "," +
                c.options.viewBox.h
            )
            .attr(c.options.grid.attr),
            a[b]
              .path(
                "M0," +
                  c.options.viewBox.h / 2 +
                  " L" +
                  c.options.viewBox.w +
                  "," +
                  c.options.viewBox.h / 2
              )
              .attr(c.options.grid.attr);
    },
    erase: function(b) {
      if (this.timeouts.play.length || 0 >= this.pointer) return !1;
      "undefined" === typeof b && (b = 0);
      do
        this.pointer--,
          a(this.kanjis[this.pointer], this.timeouts.erasing),
          this.options.erased(this.pointer);
      while (this.pointer > b);
    },
    render: function(a) {
      if (this.timeouts.play.length) return !1;
      if ("undefined" === typeof a) a = this.kanjis.length;
      else if (a > this.kanjis.length) return !1;
      var e = function(a) {
          b(
            a.papers[a.kanjis[a.pointer]["char"]],
            a.kanjis[a.pointer],
            a.timeouts.drawing
          );
          a.options.drew(a.pointer);
          a.pointer++;
          a.timeouts.play.shift();
        },
        f = 0,
        h;
      for (h = 0; h < this.timeouts.erasing.length; h++)
        window.clearTimeout(this.timeouts.erasing[h]),
          (this.timeouts.erasing = []);
      for (h = this.pointer; h < a; h++)
        !c.options.stroke.animated.drawing || 0 >= f
          ? e(this)
          : this.timeouts.play.push(setTimeout(e, f, this)),
          (f += this.kanjis[h].duration);
    },
    pause: function() {
      for (var a = 0; a < this.timeouts.play.length; a++)
        window.clearTimeout(this.timeouts.play[a]);
      this.timeouts.play = [];
    },
    eraseLastStrokes: function(a) {
      this.erase(this.pointer - a);
    },
    renderNextStrokes: function(a) {
      this.render(this.pointer + a);
    }
  };
  window.Dmak = c;
})();
(function() {
  function a(a, e, c, f) {
    a = ("00000" + c).slice(-5);
    "00020" === a || "03000" === a
      ? f.done(e, { paths: [], texts: [] })
      : f.done(e, b(Dmak.options.svg, a));
  }
  function b(a, b) {
    function c(a) {
      a = a.childNodes;
      var b;
      for (b = 0; b < a.length; b++)
        "g" === a[b].tagName
          ? (F.push(a[b].getAttribute("id")),
            c(a[b]),
            F.splice(F.indexOf(a[b].getAttribute("id")), 1))
          : "path" === a[b].tagName &&
            e.push({ path: a[b].getAttribute("d"), groups: F.slice(0) });
    }
    var e = [],
      f = new DOMParser().parseFromString(a, "application/xml"),
      g = f.querySelectorAll("text"),
      F = [];
    c(f.getElementById("kvg:" + b));
    for (f = 0; f < g.length; f++)
      e[f].text = {
        value: g[f].textContent,
        x: g[f].getAttribute("transform").split(" ")[4],
        y: g[f]
          .getAttribute("transform")
          .split(" ")[5]
          .replace(")", "")
      };
    return e;
  }
  var f = function(a) {
    this.uri = a;
  };
  f.prototype.load = function(b, e) {
    var c = [],
      f = b.length,
      g = 0,
      r,
      F = {
        done: function(a, b) {
          c[a] = b;
          g++;
          g === f && e(c);
        },
        error: function(a) {
          console.log("Error", a);
        }
      };
    for (r = 0; r < f; r++) a(this.uri, r, b.charCodeAt(r).toString(16), F);
  };
  window.DmakLoader = f;
})();
(function(a) {
  a.fn.popr = function(b) {
    var f = a.extend({ speed: 200, mouseX: -1, mouseY: -1 }, b);
    return this.each(function() {
      a(".popr_container_bottom").remove();
      if (0 < f.mouseX && 0 < mouseY) {
        var b =
          '<div class="popr_container_bottom"><div class="popr_point_bottom"><div class="popr_content">' +
          a("#popup--data").html() +
          "</div></div></div>";
        a(this).append(b);
        var b = a(".popr_container_bottom").outerWidth(),
          e = mouseX,
          c = mouseY;
        a(".popr_container_bottom").css("top", c + 15 + "px");
        a(".popr_container_bottom").css("left", e - b / 2 + "px");
        a(this).removeAttr("title alt");
        a(".popr_container_bottom").fadeIn(f.speed);
      }
    });
  };
})(jQuery);
(function(a, b, f, g) {
  function e(b, e) {
    this.settings = a.extend({}, c, e);
    this.current = this.settings.defSlide - 1;
    this.$context = a(b);
    this.$nav = g;
    this.$slidesContainer = this.$context.find(".tcTab--slidesContainer");
    this.$slides = this.$slidesContainer.find(".tcTab--slide");
    this.init();
  }
  var c = {
    id: "",
    width: 500,
    height: 500,
    minheight: 400,
    responsive: !0,
    defSlide: 1,
    defTabText: "Tab",
    accordionView: !1,
    accordionDefWidth: g,
    mobile: !1,
    jsMode: !0
  };
  e.prototype = {
    init: function() {
      this.settings.jsMode
        ? (this.appendTabs(),
          this.applyClasses(),
          this.handleEvents(),
          this.activateSlide(),
          this.resizeContainer(),
          this.accordion())
        : this.resizeContainer();
    },
    handleEvents: function() {
      var c = this;
      if (!0 !== c.settings.accordionView)
        c.$nav.on("click", "li", function() {
          c.clickOnTab(a(this));
          return !1;
        });
      c.$nav.find("li").bind("touchstart", function() {
        c.clickOnTab(a(this));
        return !1;
      });
      a(b).resize(function() {
        c.resizeContainer();
        c.accordion();
      });
    },
    clickOnTab: function(a) {
      this.current = a.index();
      this.activateSlide();
      this.resizeContainer();
    },
    applyClasses: function() {
      a("html").addClass("js");
      this.settings.responsive && this.$context.addClass("responsive");
      this.settings.accordionView && this.$context.addClass("accordion");
    },
    resizeContainer: function() {
      var a, b;
      this.settings.responsive
        ? ((a = this.$slides.eq(this.current).outerHeight()), (b = "100%"))
        : ((b = this.settings.width),
          (a = this.settings.height),
          this.$slides.css({ height: a }));
      this.$slidesContainer.css({ width: b, height: a });
    },
    activateSlide: function() {
      var a = this.current,
        b = this.$slides,
        c = this.$nav.find("li");
      c.removeClass("active");
      c.eq(a).addClass("active");
      b.removeClass("active");
      b.eq(a).addClass("active");
      tabOnActivated(c.eq(a));
    },
    appendTabs: function() {
      var b = this,
        c = "",
        e = a(
          "<div class='tcTab--nav'><button id='" +
            b.settings.id +
            "--prev' class='prev'><i class='icon-left-open'></i></button><ul></ul><button id='" +
            b.settings.id +
            "--next' class='next'><i class='icon-right-open'></i></button></div>"
        ).prependTo(b.$context),
        f,
        g = 0;
      b.$nav = e;
      var A = b.$slides.length,
        v = "";
      a.each(b.$slides, function() {
        g++;
        f = a(this).data("tab-name") || b.settings.defTabText + " " + g;
        if (!b.settings.mobile)
          switch (A) {
            case 9:
              v = "class='tabsize9'";
              break;
            case 8:
              v = "class='tabsize8'";
              break;
            default:
              v = "";
          }
        c += "<li " + v + ">" + f + "</li>";
      });
      b.$nav.children("ul").append(c);
      b.$nav = e.children("ul");
      a("#" + b.settings.id + "--prev:not(.hidden)").addClass("hidden");
      a("#" + b.settings.id + "--next:not(.hidden)").addClass("hidden");
    },
    accordion: function() {
      var b = this;
      if ("always" !== b.settings.accordionView || b.settings.mobile)
        b.settings.accordionDefWidth ||
          (b.settings.accordionDefWidth = b.$nav.outerWidth()),
          b.$context.outerWidth() <= b.settings.accordionDefWidth &&
          0 < b.$context.outerWidth()
            ? (b.settings.accordionView = !0)
            : (b.settings.accordionView = !1),
          !0 === b.settings.accordionView &&
            ((b.main_width = a("#" + b.settings.parent).width()),
            (b.plugin_class = "#" + b.settings.parent + " .tcTab--nav ul"),
            (b.ul = a(b.plugin_class)),
            (b.ul_width = b.ul.width()),
            (b.btn_width = a("#" + b.settings.id + "--prev").width()),
            (b.step = 100),
            a("#" + b.settings.id + "--next").css(
              "left",
              b.main_width - b.btn_width + "px"
            ),
            a("#" + b.settings.id + "--next.hidden").removeClass("hidden"),
            a("#" + b.settings.id + "--next").on(
              "touchstart click",
              function() {
                ul_margin_left = parseInt(b.ul.css("margin-left"));
                if (ul_margin_left + b.ul_width > b.main_width) {
                  var c = ul_margin_left - b.step;
                  c + b.ul_width < b.main_width &&
                    (c = b.main_width - b.ul_width - b.btn_width);
                  b.ul.css("margin-left", c + "px");
                }
                a("#" + b.settings.id + "--prev.hidden").removeClass("hidden");
              }
            ),
            a("#" + b.settings.id + "--prev").on(
              "touchstart click",
              function() {
                ul_margin_left = parseInt(b.ul.css("margin-left"));
                if (0 >= ul_margin_left) {
                  var c = ul_margin_left + b.step;
                  0 < c && (c = 0);
                  b.ul.css("margin-left", c + "px");
                  0 == c &&
                    a("#" + b.settings.id + "--prev:not(.hidden)").addClass(
                      "hidden"
                    );
                }
              }
            ));
    }
  };
  a.fn.tcTab = function(a) {
    return this.each(function() {
      new e(this, a);
    });
  };
})(jQuery, window, document);
function ById(a) {
  return document.getElementById(a);
}
function VisualWords(a) {
  function b(a, c) {
    this.x = a;
    this.y = c;
    this.len = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    this.sub = function(a) {
      return new b(this.x - a.x, this.y - a.y);
    };
    this.add = function(a) {
      return new b(this.x + a.x, this.y + a.y);
    };
    this.rotate = function(a) {
      return new b(
        this.x * Math.cos(a) - this.y * Math.sin(a),
        this.x * Math.sin(a) + this.y * Math.cos(a)
      );
    };
    this.mult = function(a) {
      return new b(this.x * a, this.y * a);
    };
    this.norm = function() {
      var a = this.len();
      return new b(this.x / a, this.y / a);
    };
    this.a = function() {
      return Math.atan2(c, a);
    };
  }
  function f(a) {
    return a - 2 * Math.PI * Math.floor((a + Math.PI) / Math.PI / 2);
  }
  function g(a, c, e, g, h) {
    this.name = a;
    this.children = [];
    this.parent = c;
    this.p0 = c.p1;
    c.children.push(this);
    F.push(this);
    c = this.el = m.createEl(c.el, "g");
    var A = a;
    15 < A.length && (A = A.substr(0, 13).trim() + "...");
    this.tx = m.createText(c, A, h ? "vw-link" : "", a);
    h &&
      (m.attr(this.tx, "data-name", a),
      (this.tx.onclick = function(a) {
        a = a.target.getAttribute("data-name");
        location.href = "//tracau.vn/?s=" + encodeURIComponent(a);
      }));
    h = this.tx.getBBox();
    this.txSize = new b(h.width, h.height);
    3 == g
      ? (this.circ = m.createRect(c, "vw-node3", 10, 10))
      : 1 == g
      ? ((this.txPaddingX = 5),
        (this.circSize = new b(h.width + 2 * this.txPaddingX, 26)),
        (this.circ = m.createRect(
          c,
          "vw-node1",
          this.circSize.x,
          this.circSize.y,
          4
        )))
      : (this.circ = m.createCirc(c, "vw-node" + g, 5));
    m.attr(this.circ, "data-name", a);
    this.ln = m.createEl(c, "line", "vw-node" + g);
    this.gType = g;
    this.p1 = this.p0.add(e);
    this.a = this.v = 0;
    this.len = function() {
      return this.vec().len();
    };
    this.refr = function() {
      m.setPosLn(this.ln, this.p0, this.p1);
      var a = this.p1;
      if (
        (3 == g
          ? (a = this.p1.sub(new b(5, 5)))
          : 1 == g && (a = this.p1.sub(this.circSize.mult(0.5))),
        m.setPos(this.circ, a),
        this.tx)
      )
        1 == this.gType
          ? m.setPosXY(this.tx, a.x + this.txPaddingX, a.y + 17)
          : ((a = 0 < f(this.angle() + Math.PI / 2) ? 10 : -10 - this.txSize.x),
            m.setPosXY(this.tx, this.p1.x + a, this.p1.y + 5));
    };
    this.vec = function() {
      return this.p1.sub(this.p0);
    };
    this.nvec = function() {
      return this.vec().norm();
    };
    this.moveP0 = function(a) {
      a = a.sub(this.p0);
      this.p0 = this.p0.add(a);
      this.p1 = this.p1.add(a);
    };
    this.rotate = function(a) {
      this.p1 = this.vec()
        .rotate(a)
        .add(this.p0);
      for (a = 0; a < this.children.length; a++)
        this.children[a].moveP0(this.p1);
    };
    this.angle = function() {
      return this.vec().a();
    };
    this.update = function(a) {
      for (var b = (v.a = 0); b < F.length; b++) {
        var c = F[b];
        if (c != v && c.parent != v && v.parent != c) {
          var e = c.p1.sub(v.p0).len(),
            g = v.len(),
            h = c.p1.sub(v.p1).len();
          1 > h && (h = 1);
          e = (g * g + h * h - e * e) / (2 * g * h);
          1 < e && (e = 1);
          -1 > e && (e = -1);
          e = Math.acos(e);
          isNaN(e);
          h = (1 / h) * Math.sin(e);
          c = 0 < f(v.angle() - c.p1.sub(v.p0).a()) ? h : -h;
          v.a += c;
        }
      }
      v.v += v.a;
      v.v *= r.slowK;
      v.v > (10 / 360) * 3.14 && (v.v = (10 / 360) * 3.14);
      v.v < (-10 / 360) * 3.14 && (v.v = (-10 / 360) * 3.14);
      "a" == v.name && (v.v = 0);
      this.rotate(this.v);
      a && this.refr();
      for (b = 0; b < this.children.length; b++) this.children[b].update(a);
    };
    this.refrAll = function() {
      this.refr();
      for (var a = 0; a < this.children.length; a++) this.children[a].refrAll();
    };
    this.refr();
    var v = this;
  }
  function e(a, c, f) {
    var h = 120 - 30 * f;
    if ((40 > h && (h = 40), a.children))
      for (var m = 0; m < a.children.length; m++) {
        var r = a.children[m],
          v;
        v = 0 == f ? (m * Math.PI) / 4 : c.angle();
        e(r, new g(r.name, c, b.fromLA(h, v), r.type, !r.end), f + 1);
      }
  }
  var c = ById("vwSVG"),
    h = new b(300, 250);
  b.fromLA = function(a, c) {
    return new b(a * Math.cos(c), a * Math.sin(c));
  };
  var m = {
      createEl: function(a, b, c) {
        b = document.createElementNS("http://www.w3.org/2000/svg", b);
        return (
          a.insertBefore(b, a.firstChild),
          c && b.setAttributeNS(null, "class", c),
          b
        );
      },
      createRect: function(a, b, c, e, f) {
        a = this.createEl(a, "rect", b || "vw-node");
        return (
          c && e && this.rectSize(a, c, e),
          f && (this.attr(a, "rx", f), this.attr(a, "ry", f)),
          a
        );
      },
      createCirc: function(a, b, c) {
        a = this.createEl(a, "circle", b || "vw-node");
        return this.attr(a, "r", c || 5), a;
      },
      setTooltip: function(a, b) {
        this.createEl(a, "title").appendChild(document.createTextNode(b));
      },
      createText: function(a, b, c, e) {
        a = this.createEl(a, "text", c);
        return (
          a.appendChild(document.createTextNode(b)),
          e && this.setTooltip(a, e),
          a
        );
      },
      rectSize: function(a, b, c) {
        this.attr(a, "width", b);
        this.attr(a, "height", c);
      },
      setPosLn: function(a, b, c) {
        this.attr(a, "x1", b.x);
        this.attr(a, "y1", b.y);
        this.attr(a, "x2", c.x);
        this.attr(a, "y2", c.y);
      },
      setPos: function(a, b) {
        this.setPosXY(a, b.x, b.y);
      },
      setPosXY: function(a, b, c) {
        "circle" == a.tagName
          ? (this.attr(a, "cx", b), this.attr(a, "cy", c))
          : (this.attr(a, "x", b), this.attr(a, "y", c));
      },
      attr: function(a, b, c, e) {
        a.setAttributeNS(e || null, b, c);
      }
    },
    r = {
      p1: h,
      el: c,
      children: [],
      name: "",
      init: function(a) {
        this.name = a;
        12 < a.length && (a = a.substr(0, 10).trim() + "...");
        this.tx = m.createText(this.el, a, null, this.name);
        this.circ = m.createRect(this.el, 0, 0, 0, 4);
        a = this.tx.getBBox();
        var b = -a.width / 2;
        m.setPosXY(this.tx, this.p1.x + b, this.p1.y + 5);
        m.rectSize(this.circ, a.width + 10, 26);
        m.setPosXY(this.circ, this.p1.x + b - 5, this.p1.y + 3 - a.height);
      },
      cnt: 0,
      slowK: 1,
      refrAll: function() {
        for (var a = 0; a < this.children.length; a++)
          this.children[a].refrAll();
      },
      iter: function(a) {
        if (
          (this.cnt++,
          (this.slowK = Math.max(0, 1 - (5 * this.cnt) / 1e3)),
          0 == this.slowK)
        )
          return !1;
        for (var b = 0; b < this.children.length; b++)
          this.children[b].update(a);
        return !0;
      }
    },
    F = [],
    I = !1;
  (function() {
    I ||
      ((I = !0),
      r.init(a.name),
      e(a, r, 0),
      (function() {
        var a = setInterval(function() {
          if (!r.iter(1)) return clearInterval(a), void 0;
        }, 50);
      })());
  })();
}
var autoCompleteTimeout;
(function(a) {
  a.fn.autoComplete = function(b) {
    var f = a.extend({}, a.fn.autoComplete.defaults, b);
    return "string" == typeof b
      ? (this.each(function() {
          var f = a(this);
          "destroy" == b &&
            (a(window).off("resize.autocomplete", f.updateSC),
            f.off(
              "blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"
            ),
            f.data("autocomplete")
              ? f.attr("autocomplete", f.data("autocomplete"))
              : f.removeAttr("autocomplete"),
            a(f.data("sc")).remove(),
            f.removeData("sc").removeData("autocomplete"));
        }),
        this)
      : this.each(function() {
          function b(a) {
            var b = e.val();
            e.cache[b] = a;
            if (a.length && b.length >= f.minChars) {
              for (var c = "", g = 0; g < a.length; g++)
                c += f.renderItem(a[g], b);
              e.sc.html(c);
              e.updateSC(0);
            } else e.sc.hide();
          }
          var e = a(this);
          e.sc = a(
            '<div class="autocomplete-suggestions ' + f.menuClass + '"></div>'
          );
          e.data("sc", e.sc).data("autocomplete", e.attr("autocomplete"));
          e.attr("autocomplete", "off");
          e.cache = {};
          e.last_val = "";
          e.updateSC = function(b, f) {
            e.sc.css({
              top: e.offset().top + e.outerHeight() + 2,
              left: e.offset().left,
              width: e.outerWidth()
            });
            if (
              !b &&
              (e.sc.show(),
              e.sc.maxHeight ||
                (e.sc.maxHeight = parseInt(e.sc.css("max-height"))),
              e.sc.suggestionHeight ||
                (e.sc.suggestionHeight = a(".autocomplete-suggestion", e.sc)
                  .first()
                  .outerHeight()),
              e.sc.suggestionHeight)
            )
              if (f) {
                var c = e.sc.scrollTop(),
                  h = f.offset().top - e.sc.offset().top;
                0 < h + e.sc.suggestionHeight - e.sc.maxHeight
                  ? e.sc.scrollTop(
                      h + e.sc.suggestionHeight + c - e.sc.maxHeight
                    )
                  : 0 > h && e.sc.scrollTop(h + c);
              } else e.sc.scrollTop(0);
          };
          a(window).on("resize.autocomplete", e.updateSC);
          e.sc.appendTo("body");
          e.sc.on("mouseleave", ".autocomplete-suggestion", function() {
            a(".autocomplete-suggestion.selected").removeClass("selected");
          });
          e.sc.on("mouseenter", ".autocomplete-suggestion", function() {
            a(".autocomplete-suggestion.selected").removeClass("selected");
            a(this).addClass("selected");
          });
          e.sc.on("mousedown click", ".autocomplete-suggestion", function(b) {
            var c = a(this),
              g = c.data("val");
            if (g || c.hasClass("autocomplete-suggestion"))
              e.val(g), f.onSelect(b, g, c), e.sc.hide();
            return !1;
          });
          e.on("blur.autocomplete", function() {
            try {
              over_sb = a(".autocomplete-suggestions:hover").length;
            } catch (c) {
              over_sb = 0;
            }
            over_sb
              ? e.is(":focus") ||
                setTimeout(function() {
                  e.focus();
                }, 20)
              : ((e.last_val = e.val()),
                e.sc.hide(),
                setTimeout(function() {
                  e.sc.hide();
                }, 350));
          });
          if (!f.minChars)
            e.on("focus.autocomplete", function() {
              e.last_val = "\n";
              e.trigger("keyup.autocomplete");
            });
          e.on("keydown.autocomplete", function(b) {
            if ((40 == b.which || 38 == b.which) && e.sc.html()) {
              var c = a(".autocomplete-suggestion.selected", e.sc);
              c.length
                ? ((b =
                    40 == b.which
                      ? c.next(".autocomplete-suggestion")
                      : c.prev(".autocomplete-suggestion")),
                  b.length
                    ? (c.removeClass("selected"),
                      e.val(b.addClass("selected").data("val")))
                    : (c.removeClass("selected"), e.val(e.last_val), (b = 0)))
                : ((b =
                    40 == b.which
                      ? a(".autocomplete-suggestion", e.sc).first()
                      : a(".autocomplete-suggestion", e.sc).last()),
                  e.val(b.addClass("selected").data("val")));
              e.updateSC(0, b);
              return !1;
            }
            if (27 == b.which) e.val(e.last_val).sc.hide();
            else if (13 == b.which || 9 == b.which)
              (c = a(".autocomplete-suggestion.selected", e.sc)),
                c.length &&
                  e.sc.is(":visible") &&
                  (f.onSelect(b, c.data("val"), c),
                  setTimeout(function() {
                    e.sc.hide();
                  }, 20));
          });
          e.on("keyup.autocomplete", function(c) {
            if (!~a.inArray(c.which, [13, 27, 35, 36, 37, 38, 39, 40])) {
              var g = e.val();
              if (g.length >= f.minChars) {
                if (g != e.last_val) {
                  e.last_val = g;
                  clearTimeout(e.timer);
                  if (f.cache) {
                    if (g in e.cache) {
                      b(e.cache[g]);
                      return;
                    }
                    for (c = 1; c < g.length - f.minChars; c++) {
                      var m = g.slice(0, g.length - c);
                      if (m in e.cache && !e.cache[m].length) {
                        b([]);
                        return;
                      }
                    }
                  }
                  e.timer = setTimeout(function() {
                    f.source(g, b);
                  }, f.delay);
                  autoCompleteTimeout = e.timer;
                }
              } else (e.last_val = g), e.sc.hide();
            }
          });
        });
  };
  a.fn.autoComplete.defaults = {
    source: 0,
    minChars: 3,
    delay: 150,
    cache: 1,
    menuClass: "",
    renderItem: function(a, f) {
      f = f.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      var b = new RegExp("(" + f.split(" ").join("|") + ")", "gi");
      return (
        '<div class="autocomplete-suggestion" data-val="' +
        a +
        '">' +
        a.replace(b, "<b>$1</b>") +
        "</div>"
      );
    },
    onSelect: function(a, f, g) {}
  };
})(jQuery);
var quotes = [
  ["Even death is not to be feared by one who has lived wisely.", "Buddha"],
  ["Action is the foundational key to all success.", "Pablo Picasso"],
  ["Argue with idiots, and you become an idiot.", "Paul Graham"],
  ["The faster you go, the shorter you are.", "Albert Einstein"],
  [
    "You will not be punished for your anger, you will be punished by your anger.",
    "Buddha"
  ],
  ["You can't blame gravity for falling in love.", "Albert Einstein"],
  ["Eighty percent of success is showing up.", "Woody Allen"],
  ["Winning isn't everything, it's the only thing.", "Vince Lombardi"],
  ["People with passion can change the world for the better", "Steve Jobs"],
  [
    "Life is really simple, but we insist on making it complicated.",
    "Confucius"
  ],
  ["The purpose of our lives is to be happy.", "Dalai Lama"],
  ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
  [
    "The greatest happiness is to know the source of unhappiness.",
    "Fyodor Dostoevsky"
  ],
  [
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "Mahatma Gandhi"
  ],
  [
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "Amelia Earhart"
  ],
  ["What we think, we become.", "Buddha"],
  [
    "There is only one happiness in this life, to love and be loved.",
    "George Sand"
  ],
  ["You can do anything, but not everything.", "David Allen"],
  ["Peace comes from within. Do not seek it without.", "Buddha"],
  ["Compassion is a verb.", "Thich Nhat Hanh"],
  ["Happiness can exist only in acceptance.", "George Orwell"],
  [
    "It is easier to fight for one\u2019s principles than to live up to them.",
    "Alfred Adler"
  ],
  [
    "The tooth fairy teaches children that they can sell body parts for money.",
    "David Richerby"
  ],
  ["The trouble is, you think you have time.", "Buddha"],
  ["You must be the change you wish to see in the world.", "Gandhi"],
  ["Do not look where you fell, but where you slipped.", "African proverb"],
  ["Sleep is the best meditation.", "Dalai Lama"],
  ["Imagination is more important than knowledge.", "Albert Einstein"],
  [
    "Every breath we take, every step we make, can be filled with peace, joy and serenity.",
    "Thich Nhat Hanh"
  ],
  ["Careful. We don\u2019t want to learn from this.", "Bill Watterson"],
  [
    "It is not how much we have, but how much we enjoy, that makes happiness.",
    "Charles Spurgeon"
  ],
  [
    "Happiness is not something ready made. It comes from your own actions.",
    "Dalai Lama"
  ],
  ["Be happy for this moment. This moment is your life.", "Omar Khayyam"],
  ["The best way to pay for a lovely moment is to enjoy it.", "Richard Bach"],
  ["If you want to be happy, be.", "Leo Tolstoy"],
  ["Happiness depends upon ourselves.", "Aristotle"],
  ["Every gift from a friend is a wish for your happiness.", "Richard Bach"],
  ["There is no path to happiness: happiness is the path.", "Buddha"],
  [
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "Samuel Beckett"
  ]
];
function quote() {
  var a = quotes.sort(function() {
      return 0.5 - Math.random();
    })[0],
    a = "<blockquote>" + a[0] + "<cite>" + a[1] + "</cite></blockquote>";
  $("#tc-quote").html(a);
}
String.prototype.replaceArray = function(a, b) {
  for (var f = this, g, e = 0; e < a.length; e++)
    (g = new RegExp(a[e], "ig")), (f = f.replace(g, b[e]));
  return f;
};
function switchDarkMode(a) {
  !0 === a
    ? (localStorage.setItem("night_mode", "1"),
      $("body").removeClass("dark"),
      $("body").addClass("dark"))
    : (localStorage.setItem("night_mode", "0"), $("body").removeClass("dark"));
}
function styleDark(a) {
  return a.replaceArray(
    "#1371BB #1a76bf #282828 #595959 #7E7E7E #005ba1 #3673a2 #005e00 #333399 #543729".split(
      " "
    ),
    "#1e85dd #1e85dd #a9a9a9 #a9a9a9 #afafaf #1e85dd #1e85dd #8bc34a #4646d8 #885a45".split(
      " "
    )
  );
}
function heartsFly() {
  var a = Math.floor(100 * Math.random() + 1),
    b = (Math.random() * (1.3 - 1) + 1).toFixed(1);
  $(".particle-box").css("z-index", 999999);
  $(
    '<div class="particle part-' +
      a +
      " " +
      "like-1 like-2 like-3 like-4 like-5 like-6".split(" ")[
        Math.floor(6 * Math.random())
      ] +
      '" style="font-size:' +
      Math.floor(18 * Math.random() + 22) +
      'px;"><i class="icon icon-heart"></i></div>'
  )
    .appendTo(".particle-box")
    .css({
      animation:
        "" +
        ["flowOne", "flowTwo", "flowThree"][Math.floor(3 * Math.random())] +
        " " +
        b +
        "s linear"
    });
  $(".part-" + a).show();
  setTimeout(function() {
    $(".part-" + a).remove();
    $(".particle-box").css("z-index", -1);
  }, 1e3 * b - 100);
}
function tlite(a) {
  document.addEventListener("mouseover", function(b) {
    b = b.target;
    var f = a(b);
    f || (f = (b = b.parentElement) && a(b));
    f && tlite.show(b, f, !0);
  });
}
tlite.show = function(a, b, f) {
  function g(a, b) {
    function c() {
      tlite.hide(a, !0);
    }
    function g() {
      h || (h = e(a, A, b));
    }
    var h, I, A;
    void 0 !== a &&
      (a.addEventListener("mousedown", c), a.addEventListener("mouseleave", c));
    return (a.tooltip = {
      show: function() {
        A = b.text || a.title || a.getAttribute("data-tlite") || A;
        a.title = "";
        a.setAttribute("data-tlite", "");
        A && !I && (I = setTimeout(g, f ? 5 : 1));
      },
      hide: function(a) {
        f === a &&
          ((I = clearTimeout(I)),
          (a = h && h.parentNode) && a.removeChild(h),
          (h = void 0));
      }
    });
  }
  function e(a, b, e) {
    function c() {
      f.className = "tlite tlite-" + g + h;
      var b = a.offsetTop,
        c = a.offsetLeft;
      f.offsetParent === a && (b = c = 0);
      var e = a.offsetWidth,
        m = a.offsetHeight,
        r = f.offsetHeight,
        A = f.offsetWidth;
      f.style.top =
        ("s" === g
          ? b - r - 10 + 10
          : "n" === g
          ? b + m + 10 - 10
          : b + m / 2 - r / 2) + "px";
      f.style.left =
        ("w" === h
          ? c
          : "e" === h
          ? c + e - A
          : "w" === g
          ? c + e + 10
          : "e" === g
          ? c - A - 10
          : c + e / 2 - A / 2) + "px";
    }
    var f = document.createElement("span");
    e = e.grav || a.getAttribute("data-tlite") || "n";
    f.innerHTML = b;
    a.appendChild(f);
    var g = e[0] || "",
      h = e[1] || "";
    c();
    b = f.getBoundingClientRect();
    "s" === g && 0 > b.top
      ? ((g = "n"), c())
      : "n" === g && b.bottom > window.innerHeight
      ? ((g = "s"), c())
      : "e" === g && 0 > b.left
      ? ((g = "w"), c())
      : "w" === g && b.right > window.innerWidth && ((g = "e"), c());
    f.className += " tlite-visible";
    return f;
  }
  b = b || {};
  (a.tooltip || g(a, b)).show();
};
tlite.hide = function(a, b) {
  a.tooltip && a.tooltip.hide(b);
};
"undefined" !== typeof module && module.exports && (module.exports = tlite);
var _extends =
    Object.assign ||
    function(a) {
      for (var b = 1; b < arguments.length; b++) {
        var f = arguments[b],
          g;
        for (g in f)
          Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
      }
      return a;
    },
  _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(a) {
          return typeof a;
        }
      : function(a) {
          return a &&
            "function" == typeof Symbol &&
            a.constructor === Symbol &&
            a !== Symbol.prototype
            ? "symbol"
            : typeof a;
        };
!(function(a, b) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : (a.LazyLoad = b());
})(this, function() {
  var a = function(a, b) {
      return a.getAttribute("data-" + b);
    },
    b = function(b) {
      return b.filter(function(b) {
        return "true" !== a(b, "was-processed");
      });
    },
    f = function(a, b) {
      return a.filter(function(a) {
        return a !== b;
      });
    },
    g = function(a) {
      return (
        a.getBoundingClientRect().top +
        window.pageYOffset -
        a.ownerDocument.documentElement.clientTop
      );
    },
    e = function(a) {
      return (
        a.getBoundingClientRect().left +
        window.pageXOffset -
        a.ownerDocument.documentElement.clientLeft
      );
    },
    c = function(a, b) {
      var c,
        e = new a(b);
      try {
        c = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: e }
        });
      } catch (W) {
        (c = document.createEvent(
          "CustomEvent"
        )).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: e });
      }
      window.dispatchEvent(c);
    },
    h = function(a, b) {
      return b ? a.replace(/\.(jpe?g|png)/gi, ".webp") : a;
    },
    m = "undefined" != typeof window,
    r =
      (m && !("onscroll" in window)) ||
      /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    F = m && "classList" in document.createElement("p"),
    I =
      m &&
      (function() {
        var a = document.createElement("canvas");
        return (
          !(!a.getContext || !a.getContext("2d")) &&
          0 === a.toDataURL("image/webp").indexOf("data:image/webp")
        );
      })(),
    A = function(a, b) {
      F ? a.classList.add(b) : (a.className += (a.className ? " " : "") + b);
    },
    v = function(b, c, e, f) {
      for (var g, m = 0; (g = b.children[m]); m += 1)
        if ("SOURCE" === g.tagName) {
          var n = a(g, e);
          n && g.setAttribute(c, h(n, f));
        }
    },
    T = {
      IMG: function(b, c) {
        var e = I && c.to_webp,
          f = c.data_srcset,
          g = b.parentNode;
        g && "PICTURE" === g.tagName && v(g, "srcset", f, e);
        (g = a(b, c.data_sizes)) && b.setAttribute("sizes", h(g, void 0));
        (f = a(b, f)) && b.setAttribute("srcset", h(f, e));
        (f = a(b, c.data_src)) && b.setAttribute("src", h(f, e));
      },
      IFRAME: function(b, c) {
        var e = a(b, c.data_src);
        e && b.setAttribute("src", h(e, void 0));
      },
      VIDEO: function(b, c) {
        var e = c.data_src,
          f = a(b, e);
        v(b, "src", e);
        f && b.setAttribute("src", h(f, void 0));
        b.load();
      }
    },
    X = function(a, b, c) {
      a.addEventListener("load", b);
      a.addEventListener("loadeddata", b);
      a.addEventListener("error", c);
    },
    G = function(a, b, c) {
      a.removeEventListener("load", b);
      a.removeEventListener("loadeddata", b);
      a.removeEventListener("error", c);
    },
    u = function(a, b, c) {
      var e = c._settings,
        f = b ? e.class_loaded : e.class_error;
      b = b ? e.callback_load : e.callback_error;
      a = a.target;
      e = e.class_loading;
      F
        ? a.classList.remove(e)
        : (a.className = a.className
            .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
      A(a, f);
      b && b(a);
      c._updateLoadingCount(-1);
    },
    V = function(a, b) {
      var c = function aa(c) {
          u(c, !0, b);
          G(a, aa, e);
        },
        e = function Y(e) {
          u(e, !1, b);
          G(a, c, Y);
        };
      X(a, c, e);
    },
    ba = ["IMG", "IFRAME", "VIDEO"],
    M = function(a) {
      this._settings = _extends(
        {},
        {
          elements_selector: "img",
          container: window,
          threshold: 300,
          throttle: 150,
          data_src: "src",
          data_srcset: "srcset",
          data_sizes: "sizes",
          data_bg: "bg",
          class_loading: "loading",
          class_loaded: "loaded",
          class_error: "error",
          class_initial: "initial",
          skip_invisible: !0,
          callback_load: null,
          callback_error: null,
          callback_set: null,
          callback_enter: null,
          callback_finish: null,
          to_webp: !1
        },
        a
      );
      this._loadingCount = 0;
      this._queryOriginNode =
        this._settings.container === window
          ? document
          : this._settings.container;
      this._previousLoopTime = 0;
      this._loopTimeout = null;
      this._boundHandleScroll = this.handleScroll.bind(this);
      this._isFirstLoop = !0;
      window.addEventListener("resize", this._boundHandleScroll);
      this.update();
    };
  return (
    (M.prototype = {
      _loopThroughElements: function(a) {
        var b = this._settings,
          c = this._elements,
          f = c ? c.length : 0,
          h,
          m = [],
          r = this._isFirstLoop;
        if ((r && (this._isFirstLoop = !1), 0 !== f)) {
          for (h = 0; h < f; h++) {
            var v = c[h];
            if (!b.skip_invisible || null !== v.offsetParent) {
              var u;
              if (!(u = a)) {
                var L = v;
                u = b.container;
                var d = b.threshold,
                  l = L,
                  p = u,
                  t = d;
                (l =
                  (p === window
                    ? window.innerHeight + window.pageYOffset
                    : g(p) + p.offsetHeight) <=
                  g(l) - t) ||
                  ((l = L),
                  (p = d),
                  (l =
                    (u === window ? window.pageYOffset : g(u)) >=
                    g(l) + p + l.offsetHeight));
                l ||
                  ((l = L),
                  (p = d),
                  (t = window.innerWidth),
                  (l =
                    (u === window ? t + window.pageXOffset : e(u) + t) <=
                    e(l) - p));
                l ||
                  (l =
                    (u === window ? window.pageXOffset : e(u)) >=
                    e(L) + d + L.offsetWidth);
                u = !l;
              }
              u && (r && A(v, b.class_initial), this.load(v), m.push(h));
            }
          }
          for (; m.length; ) c.splice(m.pop(), 1);
        } else this._stopScrollHandler();
      },
      _startScrollHandler: function() {
        this._isHandlingScroll ||
          ((this._isHandlingScroll = !0),
          this._settings.container.addEventListener(
            "scroll",
            this._boundHandleScroll
          ));
      },
      _stopScrollHandler: function() {
        this._isHandlingScroll &&
          ((this._isHandlingScroll = !1),
          this._settings.container.removeEventListener(
            "scroll",
            this._boundHandleScroll
          ));
      },
      _updateLoadingCount: function(a) {
        this._loadingCount += a;
        0 === this._elements.length &&
          0 === this._loadingCount &&
          (a = this._settings.callback_finish) &&
          a(void 0);
      },
      handleScroll: function() {
        var a = this._settings.throttle;
        if (0 !== a) {
          var b = Date.now(),
            c = a - (b - this._previousLoopTime);
          0 >= c || c > a
            ? (this._loopTimeout &&
                (clearTimeout(this._loopTimeout), (this._loopTimeout = null)),
              (this._previousLoopTime = b),
              this._loopThroughElements())
            : this._loopTimeout ||
              (this._loopTimeout = setTimeout(
                function() {
                  this._previousLoopTime = Date.now();
                  this._loopTimeout = null;
                  this._loopThroughElements();
                }.bind(this),
                c
              ));
        } else this._loopThroughElements();
      },
      loadAll: function() {
        this._loopThroughElements(!0);
      },
      update: function(a) {
        var c = this._settings;
        a = a || this._queryOriginNode.querySelectorAll(c.elements_selector);
        this._elements = b(Array.prototype.slice.call(a));
        r
          ? this.loadAll()
          : (this._loopThroughElements(), this._startScrollHandler());
      },
      destroy: function() {
        window.removeEventListener("resize", this._boundHandleScroll);
        this._loopTimeout &&
          (clearTimeout(this._loopTimeout), (this._loopTimeout = null));
        this._stopScrollHandler();
        this._settings = this._queryOriginNode = this._elements = null;
      },
      load: function(b, c) {
        var e = this._settings;
        if (c || "true" !== a(b, "was-processed")) {
          var g = e.callback_enter;
          g && g(b);
          -1 < ba.indexOf(b.tagName) && (V(b, this), A(b, e.class_loading));
          var m = this._settings;
          if ((g = T[b.tagName]))
            g(b, m),
              this._updateLoadingCount(1),
              (this._elements = f(this._elements, b));
          else {
            var g = I && m.to_webp,
              r = a(b, m.data_src),
              m = a(b, m.data_bg);
            r &&
              ((r = h(r, g)), (b.style.backgroundImage = 'url("' + r + '")'));
            m && ((g = h(m, g)), (b.style.backgroundImage = g));
          }
          b.setAttribute("data-was-processed", "true");
          (e = e.callback_set) && e(b);
        }
      }
    }),
    m &&
      (function(a, b) {
        if (b)
          if (b.length) for (var e, f = 0; (e = b[f]); f += 1) c(a, e);
          else c(a, b);
      })(M, window.lazyLoadOptions),
    M
  );
});
function creditTC() {
  console.log(
    '%c\n    * If you\u2019re interested in integrating with our API,                                        \n    please check out the link below to request access to our \u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588       \n    API documentation and credentials:                       \u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2593\u2592\u2592\u2593\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2591\u2588     \n                                                             \u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2591\u2592\u2592\u2593\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2584\u2584\u2592\u2593\u2592\u2592\u2591\u2588\u2591\u2584\u2584  \n    Link: atob("aHR0cHM6Ly90cmFjYXUudm4vYXBpLmh0bWw")        \u2592\u2592\u2584\u2580\u2580\u2584\u2584\u2588\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2593\u2592\u2592\u2592\u2592\u2588\u2591\u2591\u2580\u2584\u2584\u2584\u2584\u2584\u2580\u2591\u2591\u2588 \n                                                             \u2592\u2592\u2588\u2591\u2591\u2591\u2591\u2588\u2591\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588 \n    * If you simply want to get a better understand of our   \u2592\u2592\u2592\u2580\u2580\u2584\u2584\u2588\u2591\u2592\u2592\u2592\u2592\u2593\u2592\u2592\u2592\u2593\u2592\u2588\u2591\u2591\u2591\u2588\u2592\u2591\u2591\u2591\u2591\u2588\u2592\u2591\u2591\u2588\n    tech stack, please send an email to:                     \u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2591\u2592\u2593\u2592\u2592\u2592\u2592\u2593\u2592\u2592\u2592\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2591\u2591\u2591\u2591\u2591\u2588\n                                                             \u2592\u2592\u2592\u2592\u2592\u2584\u2584\u2588\u2591\u2592\u2592\u2592\u2593\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2588\u2591\u2591\u2588\u2584\u2584\u2588\u2584\u2584\u2588\u2591\u2591\u2588 \n    Email: atob("ZmVlZGJhY2tAdHJhY2F1LnZu");                 \u2592\u2592\u2592\u2592\u2588\u2591\u2591\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2591\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588  \n                                                             \u2592\u2592\u2592\u2592\u2588\u2584\u2584\u2588\u2591\u2591\u2588\u2584\u2584\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2584\u2584\u2588\u2591\u2591\u2588\u2584\u2584\u2588    \n    I\u2019d love to hear what you think!                                                           \n                                                                                               \n    \u2014 @tracau.vn                                                                               ',
    "font-family:monospace"
  );
}
(function(a) {
  a.adsPopup = function(b) {
    function f() {
      this.animate(
        { bottom: -1 * this.outerHeight() },
        "fast",
        "swing",
        function() {
          a(this).remove();
        }
      );
    }
    b = a.extend(
      {
        icon: "assets/img/dummy/speakup_ads.gif",
        text: "",
        link: "#",
        timeout: 5e3
      },
      b
    );
    var g = a(
      '<div class="popup_ads"><a href="" target="_blank"><img src=""></a><span></span><div class="close"></div></div>'
    );
    g.find("img").attr("src", b.icon);
    g.find("a").attr("href", b.link);
    g.find("span").text(b.text);
    g.appendTo(a("body"));
    (function(a) {
      a.css({ bottom: -1 * a.outerHeight(), display: "block" });
      a.animate({ bottom: 10 }, "fast");
    })(g);
    g.find(".close").on("click", function() {
      f.call(a(this).parent());
      localStorage.setItem("closed_ads", "true");
    });
    setTimeout(function() {
      f.call(g);
    }, b.timeout);
  };
})(jQuery);
var tip = void 0,
  tcBrowser = "",
  current_search_text = "",
  locationProtocol = location.protocol,
  hostName = window.location.hostname,
  wwwURL = locationProtocol + "//" + hostName,
  apiURL = locationProtocol + "//api.tracau.vn/WBBcwnwQpV89",
  resourceURL = wwwURL + "/resources",
  current_db = "en",
  embeded_widget,
  popup_widget,
  isMovieQuotesLoaded = !1,
  isBingIFrameLoaded = !1,
  tooltip = { share: 0 },
  isDarkMode = !1,
  adsTimeout,
  sentencesCount = 0,
  isBlockingAds = !0,
  currentTabTitle = "",
  isScrollToBottomAndCreatedAds = !1,
  singleWords = "ac ach ai ang anh ao ap au ay ba bac bach bai bam ban bang banh bao bap bat bau bay ben benh beo bep bet beu bi bia bich biem bien bieng biet bieu bim binh bip bit biu bo boc boi bom bon bong bop bot bu bua buat buc bui bun bung buoc buoi buom buon buong buot buou bup buu ca cac cach cai cam cang canh cao cap cau cay cha chac chai cham chan chang chanh chao chap chat chau chay che chech chem chen chenh cheo chep chet chi chia chich chiec chiem chien chieng chiet chieu chim chinh chit chiu cho choa choai choang choc choi chom chon chong chop chot chu chua chuan chuc chuenh chui chum chun chung chuoc chuoi chuon chuong chuot chup chut chuyen co coc coi com con cong cop cot cu cua cuc cui cum cun cung cuoc cuoi cuom cuon cuong cuop cup cut cuu da dac dai dam dan dang danh dao dap dat dau de dem den denh deo dep det deu di dia dich diec diem dien dieng diep diet dieu dinh diu doa doai doan doanh doat doc doi dom don dong dop dot du dua duc duenh dui dum dun dung duoc duoi duom duong dut duy duyen duyet ec ech em eng enh eo ep ga gac gach gai gam gan gang ganh gao gap gat gau gay ghe ghen ghenh gheo ghep ghet ghi ghien ghim gho gi gia giac giai giam gian giang gianh giao giap giat giau giay gie giem gieng gieo giep giet gieu gin gio gioi gion giong giot giu giua giuc giui giun giuong giup giut goa goc goi gom gon gong gop got gra gu guc gui guoc guom guong ha hac hach hai ham han hang hanh hao hap hat hau hay he hec hech hem hen henh heo hep het hi hiem hien hiep hieu him hinh hiu ho hoa hoac hoach hoai hoam hoan hoang hoanh hoat hoc hoe hoen hoi hom hon hong hop hot hu hua huan huc hue huech huenh hui hum hun hung huo huong huou hup hut huu huy huych huyen huyet huynh huyt hy ia ich im in inh it iu ka ke kech kem ken keng kenh keo kep ket keu kha khac khach khai kham khan khang khanh khao khap khat khau khay khe khen khenh kheo khep khet kheu khi khia khich khiem khien khieng khiep khieu khin khinh khit kho khoa khoac khoai khoam khoan khoang khoanh khoat khoc khoe khoen khoeo khoi khom khon khong khop khu khua khuan khuat khuay khuc khue khuech khueu khum khung khuo khuoc khuon khuong khut khuu khuy khuya khuyen khuyet khuynh khuyu ki kia kich kiem kien kieng kiep kiet kieu kim kin kinh kip kiu kon ky la lac lach lai lam lan lang lanh lao lap lat lau lay le lech lem len leng lenh leo lep let leu li lia lich liec liem lien lieng liep liet lieu lim linh lit liu lo loa loac loai loan loang loanh loat loay loc loe loet loi lom lon lop lot lu lua luan luat luc lui lum lun lung luoc luoi luom luon luong luot lup lut luu luy luyen luynh ly ma mac mach mai mam man mang manh mao map mat mau may me mec mech mem men menh meo met meu mi mia mien mieng miet mieu mim min minh mit mo moc moi mom mon mong mop mot mu mua muc mui mum mun mung muoi muon muong muop muot mup mut muu my na nac nai nam nan nang nanh nao nap nat nau nay ne nem nen neo nep net neu nga ngac ngach ngai ngam ngan ngang nganh ngao ngap ngat ngau ngay nghe nghech nghen nghenh ngheo nghet ngheu nghi nghia nghich nghiem nghien nghieng nghiep nghiet nghieu nghin nghinh ngo ngoa ngoac ngoach ngoai ngoan ngoanh ngoao ngoat ngoay ngoc ngoe ngoem ngoen ngoeo ngoi ngom ngon ngong ngot ngu ngua nguay nguc nguech ngui ngun ngung nguoc nguoi nguon nguong ngup ngut nguu nguy nguyen nguyet nha nhac nhai nham nhan nhang nhanh nhao nhap nhat nhau nhay nhe nhech nhem nhen nhenh nheo nheu nhi nhiec nhiem nhien nhiep nhiet nhieu nhin nhip nho nhoang nhoay nhoc nhoe nhoen nhoi nhom nhon nhong nhop nhot nhu nhua nhuan nhuc nhue nhun nhung nhuoc nhuom nhuong nhut nhuyen ni nich niem nien nieng niet nieu nin ninh nit niu noan noc noi nom non nong nop nu nua nuc nui num nung nuoc nuoi nuom nuong nuot nuou nup nut oa oac oai oan oang oanh oat oc oe oi om on ong op ot pa pe pha phac phach phai pham phan phang phanh phao phap phat phau phay phe phen pheng phep phet pheu phi phia phich phiem phien phieu phim phinh pho phoi phom phon phong phop phot phu phua phuc phui phun phung phuong phut pic pin pinh pit pom puoc qua quac quai quam quan quang quanh quap quat quau quay que quech quen quenh queo quet queu qui quo quoc quy quyen quyet quynh ra rac rach rai ram ran rang ranh rao rap rat rau ray re rech ren renh reo rep ret reu ri ria rieng riet rieu rin rinh rit riu ro roc roi rom ron rong rop rot ru rua ruc rui rum run rung ruoc ruoi ruom ruong ruot ruou rut ruy sa sac sach sai sam san sang sanh sao sap sat sau say se sen senh sep set seu si siem sieng siet sieu sin sinh sit so soan soat soc soi som son song sop sot su sua suat suc sui sum sun sung suoi suon suong suot sup sut suu suy suyt ta tac tach tai tam tan tang tanh tao tap tat tau tay te tech tem ten teng tenh teo tep tet tha thac thach thai tham than thang thanh thao thap that thau thay thenh theo thep thet theu thi thia thich thiec thiem thien thieng thiep thiet thieu thin thinh thit thiu tho thoa thoai thoan thoang thoat thoc thoi thom thon thong thot thu thua thuan thuat thuc thue thui thum thun thung thuo thuoc thuon thuong thuot thut thuy thuyen thuyet ti tia tich tiec tiem tien tieng tiep tiet tieu tim tin tinh tit tiu to toa toac toai toan toang toat toc toe toen toi tom ton tong top tot tra trac trach trai tram tran trang tranh trao trap trat trau tray tre tren treo treu tri trich trien triet trieu trinh triu tro troc troi trom tron trong trot tru trua truan truat truc trui trum trung truoc truong truot trut truu truy truyen tu tua tuan tuc tue tuech tui tum tun tung tuoc tuoi tuom tuon tuong tuot tut tuu tuy tuyen tuyet ty ua uan uat uc ue um un ung uoc uom uon uong uop uot ut uu uy uyen uynh va vac vach vai vam van vang vanh vao vap vay ve vec ven venh veo vet veu vi via viec viem vien vieng viet vinh vit vo voc voi vom von vong vop vot vu vua vuc vui vun vung vuon vuong vuot vut vuu xa xac xach xai xam xan xang xanh xao xap xau xay xe xec xech xem xen xenh xeo xep xet xeu xi xia xich xiem xien xieng xiet xieu xin xinh xiu xo xoa xoai xoan xoang xoanh xoay xoc xoen xoi xom xon xong xop xot xu xua xuan xuat xuc xue xui xum xun xung xuoi xuong xup xut xuyen xuyt yem yen yeu".split(
    " "
  ),
  transcriptSources = [],
  currentTranscriptIdx = -1,
  yPlayer = null,
  yMarkers = [],
  current_youtube_time = -1,
  current_youtube_phrase = "",
  updateMarkerInterval,
  youtubeOrigin = encodeURI(
    location.protocol + "//" + window.location.hostname
  ),
  langArray = [
    { value: "en", text: "Ti\u1ebfng Anh", shorttext: "\u00a0Anh" },
    { value: "fr", text: "Ti\u1ebfng Ph\u00e1p", shorttext: "Ph\u00e1p" },
    { value: "jp", text: "Ti\u1ebfng Nh\u1eadt", shorttext: "Nh\u1eadt" }
  ];
null != localStorage.getItem("night_mode") &&
  "1" === localStorage.getItem("night_mode") &&
  (switchDarkMode(!0), (isDarkMode = !0));
function speakTS(a, b) {
  void 0 == b && $('article[id="' + a + '"] .en').length
    ? responsiveVoice.speak(
        $('article[id="' + a + '"] .en').text(),
        "US English Female",
        { volume: 1, rate: 1 }
      )
    : ((a = a.replace(/'/g, "\\'")),
      "uk" == b
        ? responsiveVoice.speak(a, "UK English Male", { volume: 1, rate: 1 })
        : "us" == b
        ? responsiveVoice.speak(a, "US English Female", { volume: 1, rate: 1 })
        : "fr" == b
        ? responsiveVoice.speak(a, "French Female", { volume: 1, rate: 1 })
        : "jp" == b &&
          responsiveVoice.speak(a, "Japanese Female", { volume: 1, rate: 1 }));
}
function stickyFooter() {
  var a = $(".tc-sitefooter").outerHeight();
  $(".tc-sitewrapper").css({ "margin-bottom": -a });
  $(".tc-sitewrapper__after").css({ height: a });
}
function binarySearch(a, b) {
  var f;
  a: {
    f = b.length - 1;
    for (var g = 0; g <= f; )
      if (((mid = parseInt((g + f) / 2)), (element = b[mid]), element > a))
        f = mid - 1;
      else if (element < a) g = mid + 1;
      else {
        f = mid;
        break a;
      }
    f = -1;
  }
  return f;
}
function detectLanguage(a) {
  if (RegExp("^[ -\u007f]*$").test(a)) {
    a = a.split(" ");
    var b = -1;
    for (i = 0; i < a.length; i++)
      if (4 >= i) 0 <= binarySearch(a[i], singleWords) && b++;
      else break;
    return 0 < b ? "vi_ascii" : "en";
  }
  return "vi";
}
function displayLoadingSpinner(a) {
  $(".tc-loader").addClass("hidden");
  a && $(".tc-loader").removeClass("hidden");
}
function focusAfterLoading() {
  "" == tcBrowser &&
    ($("#tc-s").focus(function() {
      this.select();
    }),
    $("#tc-s").select());
  setTimeout(function() {
    displayLoadingSpinner(!1);
  }, 200);
}
function highligtedSnippet(a, b) {
  var f = a.vi.replace(/<em>/gi, "").replace(/<\/em>/gi, ""),
    g = a.en.replace(/<em>/gi, "").replace(/<\/em>/gi, "");
  return b.replace(f, a.vi).replace(g, a.en);
}
function parseJsonMovieQuotes(a) {
  movieQuotesCount = a.subtitles.length;
  if (0 < movieQuotesCount) {
    var b = '<ul class="tc-articlelist">',
      f = !1;
    responsiveVoice.voiceSupport() && (f = !0);
    for (var g = 0; g < movieQuotesCount; g++)
      (b +=
        '<li class="movie-quote"><article id=' +
        a.subtitles[g]._id +
        ' class="tc-row tc-row-content">'),
        (b += '<table><tr><td valign="top" style="width: 75px">'),
        (b +=
          '<img class="lazy" data-src="' +
          resourceURL +
          "/posters/thumbnails/" +
          a.subtitles[g].fields.thumbnail +
          '.jpg" width="68px" height="101px" >'),
        (b += "</td>"),
        (b += '<td valign="top">'),
        (b += "<table><tr><td>"),
        (b += '<div class="mq-sentences">'),
        (b += '<p class="tc-row--text vi">'),
        (b += a.subtitles[g].fields.vi),
        (b += "</p>"),
        (b += '<p class="tc-row--text en">'),
        (b += a.subtitles[g].fields.en),
        f &&
          (b +=
            '<a href="javascript:speakTS(' +
            a.subtitles[g]._id +
            ');" class="v"></a>'),
        (b += "</p>"),
        (b += '<small class="tc-row--text movie-title"> - '),
        (b += a.subtitles[g].fields.movie_title),
        (b += "</small>"),
        (b += "</td></tr>"),
        (b += "<tr><td>"),
        (b +=
          '<button class="btn btn-default" onclick="snippet(' +
          a.subtitles[g]._id +
          ');">Xem tr\u00edch d\u1eabn</button>'),
        (b += "</div>"),
        (b += "</td></tr></table>"),
        (b += "</td></tr>"),
        (b +=
          '<tr style="display:none" id="snippet-' +
          a.subtitles[g]._id +
          '"><td></td><td>'),
        (b += '<div class="snippet">'),
        (b += highligtedSnippet(
          a.subtitles[g].fields,
          a.subtitles[g].fields.snippet
        )),
        (b += "</div></td></tr>"),
        (b += "</table>"),
        (b += "</article></li>");
    return b + "</ul></div></article>";
  }
  return "";
}
function snippet(a) {
  $("#snippet-" + a).toggle();
  $("#main--content").trigger("resize");
}
function parseJsonTracau(a) {
  sentencesCount = a.sentences.length;
  if (0 < sentencesCount) {
    var b =
        '<article id="tc" data-tab-name="Tra c\u00e2u" class="tcTab--slide"><div class="tc-page__container"><ul class="tc-row-list">',
      f = !1;
    responsiveVoice.voiceSupport() && (f = !0);
    for (var g = 0; g < sentencesCount; g++)
      (b +=
        "<li><article id=" +
        a.sentences[g]._id +
        ' class="tc-row tc-row-content">'),
        (b += '<p class="tc-row--text vi">'),
        (b += a.sentences[g].fields.vi),
        (b += "</p>"),
        (b += '<p class="tc-row--text en">'),
        (b += a.sentences[g].fields.en),
        f &&
          (b +=
            '<a href="javascript:speakTS(' +
            a.sentences[g]._id +
            ');" class="v"></a>'),
        (b += "</p>"),
        (b += "</article></li>");
    return b + "</ul></div></article>";
  }
  return "";
}
function parseJsonTratu(a) {
  var b = "";
  0 < a.tratu.length
    ? (b = a.tratu[0].fields.fulltext)
    : a.suggestions &&
      0 < a.suggestions.length &&
      ((b =
        '<article id="sg" data-tab-name="Tra t\u1eeb" class="tcTab--slide"><div class="dict--title">C\u00e1c t\u1eeb v\u1ef1ng li\u00ean quan</div><div class="dict--content">' +
        parseJsonSuggestions(a)),
      (b += "</div></article>"));
  return b;
}
function parseJsonSuggestions(a) {
  for (
    var b = '<div class="tc-page__container"><ul>', f, g = 0;
    g < a.suggestions.length;
    g++
  )
    (f = a.suggestions[g].fields.word),
      (b += "<li>"),
      (b +=
        '<p><a href="' +
        window.location.href.match(/^[^\#\?]+/)[0] +
        "?s=" +
        f +
        "&k=" +
        a.suggestions[g].fields.kinds +
        '">'),
      (b += f),
      (b += "</a></p>"),
      (b += "</li>");
  return b + "</ul></div>";
}
function updateTitle(a, b) {
  var f =
    "Ngh\u0129a c\u1ee7a " +
    a +
    " trong T\u1eeb \u0111i\u1ec3n tr\u1ef1c tuy\u1ebfn ";
  "en" == b &&
    (f +=
      " v\u00e0 tra c\u1ee9u m\u1eabu c\u00e2u Anh - Vi\u1ec7t, Vi\u1ec7t - Anh");
  "fr" == b && (f += " Vi\u1ec7t - Ph\u00e1p - Anh");
  "jp" == b && (f += " Vi\u1ec7t - Nh\u1eadt - Anh");
  document.title = f;
}
function animateQuote(a) {
  a
    ? 0 < document.getElementById("tc-quote").offsetHeight &&
      ($(".tc-header-title blockquote,.tc-header-title cite").css({
        color: "#fafafa"
      }),
      $(".tc-header-title").animate(
        { opacity: 0, height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0 },
        5,
        function() {}
      ))
    : (document.getElementsByClassName("tc-header-title")[0].style.display =
        "none");
}
function removeUnwantedCharacters(a) {
  a = a
    .split(/\s+/)
    .slice(0, 20)
    .join(" ");
  return (a = a.replace(/[`~#^&*_|+\-="<>:\?\{\}\[\]\\\/]/gi, ""));
}
function rememberLastQuery(a, b) {
  "" != b
    ? window.history.pushState("", "", "?s=" + a + "&k=" + b.replace("/", ""))
    : window.history.pushState("", "", "?s=" + a);
}
function insertSpeakers(a, b, f) {
  if (responsiveVoice.voiceSupport() && void 0 !== a) {
    a = a.replace(/'/g, "\\'");
    var g = "ev ox ee aa ef ej".split(" ");
    for (b = 0; b < g.length; b++)
      document.getElementById("dict_" + g[b]) &&
        $(
          (void 0 === f ? "" : f + " ") + "#dict_" + g[b] + " .dict--title"
        ).append(
          $(
            "<a href=\"javascript:speakTS('" +
              a +
              "', 'us');\" class=\"us\"></a><a href=\"javascript:speakTS('" +
              a +
              "', 'uk');\" class=\"uk\"></a>"
          )
        );
    g = ["fv", "fe"];
    for (b = 0; b < g.length; b++)
      document.getElementById("dict_" + g[b]) &&
        $(
          (void 0 === f ? "" : f + " ") + "#dict_" + g[b] + " .dict--title"
        ).append(
          $(
            "<a href=\"javascript:speakTS('" +
              a +
              "', 'fr');\" class=\"spk\"></a>"
          )
        );
    g = ["jv", "je"];
    for (b = 0; b < g.length; b++)
      document.getElementById("dict_" + g[b]) &&
        $(
          (void 0 === f ? "" : f + " ") + "#dict_" + g[b] + " .dict--title"
        ).append(
          $(
            "<a href=\"javascript:speakTS('" +
              a +
              "', 'jp');\" class=\"spk\"></a>"
          )
        );
  }
}
function getBingImageIframe() {
  return "" === tcBrowser
    ? '<article id="dict_bing" data-tab-name="H\u00ecnh \u1ea3nh" class="tcTab--slide"><div class="tc-page__container"><div class="dict--title">[' +
        langArray.filter(function(a) {
          return a.value === current_db;
        })[0].text +
        '] H\u00ecnh \u1ea3nh li\u00ean quan \u0111\u1ebfn "' +
        current_search_text +
        '"</div><i class="loading-icon icon-spinner animate-spin"></i><div class="dict--content"></div></article>'
    : "";
}
function displayContent(a, b) {
  popup_widget = embeded_widget = null;
  delete embeded_widget;
  delete popup_widget;
  var f = "";
  sentencesCount = 0;
  if (void 0 === b || null === b || "en" === b) f = parseJsonTracau(a);
  for (
    var g = parseJsonTratu(a).trim(),
      e = getBingImageIframe(),
      c = "",
      h = "",
      m = "ev ox ee aa ef ej".split(" "),
      r = 0;
    r < m.length;
    r++
  ) {
    var F = detectLanguage(current_search_text);
    ((0 < f.length && "vi" !== F && "vi_ascii" !== F) ||
      0 <= g.indexOf('article id="dict_' + m[r]) ||
      0 <= g.indexOf('article id="sg"')) &&
      0 === c.length &&
      (langArray.filter(function(a) {
        return a.value === current_db;
      }),
      (c =
        '<article id="dict_yg" data-tab-name="Video" class="tcTab--slide"><div class="tc-page__container"><div class="dict--content"><div id="youtube-tab"><i class="loading-icon icon-spinner animate-spin"></i></div></div></article>'));
    0 < f.length &&
      0 == h.length &&
      (h =
        '<article id="dict_movie_quotes" data-tab-name="Ph\u1ee5 \u0111\u1ec1 phim" class="tcTab--slide"><div class="tc-page__container"><i class="loading-icon icon-spinner animate-spin"></i></div></article>');
  }
  f = f + g + h + c + e;
  "" === f
    ? $("#main--content").html(
        '<div class="no-result">Kh\u00f4ng t\u00ecm th\u1ea5y k\u1ebft qu\u1ea3 ph\u00f9 h\u1ee3p.</div>'
      )
    : (isDarkMode && (f = styleDark(f)),
      (f =
        "<div class='tcTab' id='main--tab'><div class='tcTab--slidesContainer'>" +
        f +
        "</div></div>"),
      $("#main--content").html(f),
      (f = "100%"),
      "" != tcBrowser && (f = "90%"),
      (f =
        '<div class="fb-comments" width="' +
        f +
        '" data-mobile="Auto-detected" data-numposts="10" data-href="https://tracau.vn/?s=' +
        current_search_text +
        '"></div>'),
      (document.getElementById("main--content").innerHTML += f),
      "undefined" != typeof FB && null != FB
        ? FB.XFBML.parse()
        : loadFBSDK(document, "script", "facebook-jssdk"),
      (void 0 !== b && null !== b && "jp" !== b) || kmrSimpleTabs.init());
}
function alignTabs(a, b) {
  var f = !1;
  "" != tcBrowser && (f = !0);
  var g = $(".tcTab--slidesContainer article.tcTab--slide").size(),
    e = 1;
  a && "en" === current_db && 1 < g && 0 < b.tratu.length && (e = 2);
  3 < g
    ? $("#main--tab").tcTab({
        id: "main--tab",
        parent: "main--content",
        mobile: f,
        defSlide: e
      })
    : $("#main--tab").tcTab({
        id: "main--tab",
        parent: "main--content",
        accordionDefWidth: void 0,
        mobile: f,
        defSlide: e
      });
}
function sendGa() {
  try {
    ga("send", {
      hitType: "event",
      eventCategory: "website",
      eventAction: "search",
      eventLabel: current_search_text
    });
  } catch (a) {}
}
function setupSwitchDB() {
  var a = !1;
  "" != tcBrowser && (a = !0);
  var b = document.getElementById("tc-db"),
    f,
    g = 0,
    e = langArray.length;
  if (null != b) {
    for (; g < e; g += 1)
      (f = document.createElement("option")),
        f.setAttribute("value", langArray[g].value),
        f.appendChild(
          document.createTextNode(
            a ? langArray[g].shorttext : langArray[g].text
          )
        ),
        b.appendChild(f);
    null == localStorage.getItem("dict")
      ? localStorage.setItem("dict", "en")
      : (current_db = localStorage.getItem("dict"));
    $("#tc-db").val(current_db);
    $("#tc-db").change(function() {
      current_db != $(this).val() &&
        ((current_db = $(this).val()),
        localStorage.setItem("dict", current_db),
        (current_search_text = ""));
    });
  }
}
function tracau(a, b, f, g, e) {
  destroyYPlayer();
  isBingIFrameLoaded = isMovieQuotesLoaded = !1;
  clearTimeout(autoCompleteTimeout);
  setTimeout(function() {
    $(".autocomplete-suggestions").fadeOut(400, null);
  }, 600);
  if (
    void 0 === f &&
    ((f = document.forms["tc-search-form"]["tc-s"].value),
    (f = f.trim()),
    0 >= f.length || current_search_text == f)
  ) {
    focusAfterLoading();
    return;
  }
  if (void 0 === e || null === e) e = current_db;
  updateTitle(f, e);
  displayLoadingSpinner(!0);
  current_search_text = f;
  animateQuote(b);
  b = detectLanguage(removeUnwantedCharacters(f));
  g = void 0 === g || null === g || "" === g ? "" : "/" + encodeURIComponent(g);
  var c = "";
  if (void 0 === e || null === e || "en" === e)
    c = apiURL + "/s/" + encodeURIComponent(f) + g + "/" + b;
  else if (void 0 === e || null === e || "fr" === e)
    c = apiURL + "/df/" + encodeURIComponent(f);
  else if (void 0 === e || null === e || "jp" === e)
    c = apiURL + "/dj/" + encodeURIComponent(f);
  var h = new XMLHttpRequest();
  h.open("GET", c);
  h.setRequestHeader("Content-Type", "application/json");
  h.onload = function() {
    if (200 === h.status) {
      var b = h.responseText;
      if ("string" == typeof b || b instanceof String)
        (b = JSON.parse(b)),
          displayContent(b, current_db),
          alignTabs(a, b),
          insertSpeakers(f, current_db),
          loadVisualWords();
      rememberLastQuery(current_search_text, g);
      $(".autocomplete-suggestions").fadeOut(400, null);
      sendGa();
    } else
      displayLoadingSpinner(!1),
        $(".autocomplete-suggestions").fadeOut(400, null);
    focusAfterLoading();
  };
  h.onerror = function(a) {
    displayLoadingSpinner(!1);
  };
  h.send(null);
}
function getParameterByName(a, b) {
  b || (b = window.location.href);
  a = a.replace(/[\[\]]/g, "\\$&");
  var f = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(b);
  if (!f) return null;
  if (!f[2]) return "";
  f = f[2].replace(/\+/g, " ");
  try {
    return decodeURIComponent(f);
  } catch (g) {
    return f;
  }
}
function parse_url_params(a) {
  var b = getParameterByName("s", a),
    f = getParameterByName("k", a);
  a = getParameterByName("l", a);
  null == a && (a = current_db);
  void 0 != b
    ? 0 < b.length
      ? ((document.getElementById("tc-s").value = b), tracau(!0, !1, b, f, a))
      : quote()
    : quote();
}
function setupTCTab() {
  $("#main--tab").tcTab({
    id: "main--tab",
    parent: "main--content",
    responsive: !0,
    defSlide: 1,
    cssTransition: "fade",
    defTabText: "Tab",
    accordionView: !1,
    accordionDefWidth: void 0,
    jsMode: !0
  });
}
function setupSuggestionBox() {
  0 < $("#tc-s").length &&
    $("#tc-s").autoComplete({
      minChars: 1,
      delay: 500,
      source: function(a, b) {
        var f = "";
        if (void 0 === current_db || "en" == current_db)
          f = apiURL + "/a/" + encodeURIComponent(a);
        else if (void 0 === current_db || "fr" == current_db)
          f = apiURL + "/af/" + encodeURIComponent(a);
        else if (void 0 === current_db || "jp" == current_db)
          f = apiURL + "/aj/" + encodeURIComponent(a);
        $.getJSON(f, null, function(a) {
          b(a.tratu);
        }).error(function() {});
      },
      renderItem: function(a, b) {
        return a.fields.shorttext.replace(
          /data-dict="([^"]+)"/,
          'data-dict="' + a.fields.kinds + '"'
        );
      },
      onSelect: function(a, b, f) {
        console.log(f);
        tracau(!0, !1, f.data("val"), f.data("dict"), current_db);
      }
    });
}
function setupNotification(a, b) {
  today = new Date();
  var f = today.getDate(),
    g = today.getMonth() + 1,
    e = today.getFullYear();
  10 > f && (f = "0" + f);
  10 > g && (g = "0" + g);
  g + "/" + f + "/" + e == a &&
    $.notiny({ text: b, position: "fluid-bottom", delay: 1e4 });
}
function showShareTooltip() {
  if ("" === tcBrowser) {
    var a = JSON.parse(localStorage.getItem("tooltip")),
      b = 2e3;
    a && 1 === a.share && (b = 25e3 * Math.random() + 5e3);
    wait_FB_iframe = setInterval(function() {
      0 < $(".share-menu-item .fb-share-button iframe").length &&
        (tlite.show(
          document.getElementsByClassName("share-menu-item")[0],
          {
            grav: "se",
            text:
              '<i class="icon icon-heart"></i> N\u1ebfu b\u1ea1n c\u1ea3m th\u1ea5y website n\u00e0y h\u1eefu \u00edch, h\u00e3y gi\u00fap ch\u00fang t\u00f4i chia s\u1ebb \u0111\u1ebfn nh\u1eefng ng\u01b0\u1eddi xung quanh nh\u00e9!'
          },
          !0
        ),
        setTimeout(function() {
          tooltip.share = 1;
          localStorage.setItem("tooltip", JSON.stringify(tooltip));
          tlite.hide(document.getElementsByClassName("share-menu-item")[0], !0);
        }, 1e4),
        clearInterval(wait_FB_iframe));
    }, b);
    $(".share-menu-item .heart").mouseover(function() {
      heartsFly();
    });
  }
}
function loadVisualWords() {
  document.getElementById("vwSVG") &&
    $("#vwSVG:empty").length &&
    $("#vwSVG").load();
}
function loadFBSDK(a, b, f) {
  var g = a.getElementsByTagName(b)[0];
  a.getElementById(f) ||
    ((a = a.createElement(b)),
    (a.async = !0),
    (a.id = f),
    (a.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=272842896385019&autoLogAppEvents=1"),
    g.parentNode.insertBefore(a, g));
}
function removeSpecialChars(a) {
  return a.replace(/[`~!@#$%^&*()_|+=?;:",<>\{\}\[\]]/gi, "");
}
function getSelectionPosition(a) {
  a = a || window;
  var b = a.document,
    f = b.selection,
    g,
    e = 0,
    c = 0,
    h = 0,
    m = 0;
  if (f)
    "Control" != f.type &&
      ((a = f.createRange()),
      a.collapse(!0),
      (e = a.boundingLeft),
      (c = a.boundingTop),
      (h = a.boundingWidth),
      (m = a.boundingHeight));
  else if (a.getSelection)
    try {
      (g = window
        .getSelection()
        .getRangeAt(0)
        .getBoundingClientRect()),
        (e = g.left),
        (c = g.top),
        (h = Math.abs(g.right - e)),
        (m = Math.abs(g.bottom - c));
    } catch (r) {}
  else
    b.getSelection &&
      ((g = b
        .getSelection()
        .getRangeAt(0)
        .getBoundingClientRect()),
      (e = g.left),
      (c = g.top),
      (h = Math.abs(g.right - e)),
      (m = Math.abs(g.bottom - c)));
  return { x: e, y: c, w: h, h: m };
}
var tcTexSelection = new (function() {
    this.selectedText = "";
    this.callback = null;
    var a = function() {
      var a = "";
      return (
        window.getSelection
          ? (a = window.getSelection())
          : document.getSelection
          ? (a = document.getSelection())
          : document.selection && (a = document.selection.createRange().text),
        a
      );
    };
    this.mouseup = function() {
      var b = $("<div/>")
        .html("" + a())
        .text()
        .trim();
      tcTexSelection.selectedText =
        null !== b && "" !== b && 0 < b.length && 50 > b.length ? b : "";
      null !== tcTexSelection.callback &&
        tcTexSelection.callback instanceof Function &&
        tcTexSelection.callback();
    };
    this.init = function(a, f) {
      $(a).bind("mouseup", tcTexSelection.mouseup);
      tcTexSelection.callback = f;
    };
  })(),
  tcMousePosition = new (function() {
    this.posY = this.posX = 0;
    this.getMouseX = function() {
      return tcMousePosition.posX;
    };
    this.getMouseY = function() {
      return tcMousePosition.posY;
    };
    this.init = function() {
      $(document).mousemove(function(a) {
        tcMousePosition.posX = a.pageX;
        tcMousePosition.posY = a.pageY;
      });
    };
  })(),
  last_selText_cache = "",
  popupData_cache = "",
  tcTexSelectionTimeout = null,
  getPopupDataTimeout,
  do_not_send_click_event = !1;
tcTexSelection.init("#main--content", function() {
  tcTexSelectionTimeout = setTimeout(function() {
    if (
      "" !== tcTexSelection.selectedText &&
      50 > tcTexSelection.selectedText.length &&
      !do_not_send_click_event
    ) {
      selText = tcTexSelection.selectedText;
      selText = removeSpecialChars(selText).trim();
      if ("" == selText || 1 > selText.length || 50 < selText.length) return !1;
      getPopupDataTimeout = setTimeout(function() {
        var a = getSelectionPosition();
        mouseX = a.x + a.w / 2 + $(document).scrollLeft();
        mouseY = a.y + $(document).scrollTop();
        $(".loading-icon").css("left", mouseX + "px");
        $(".loading-icon").css("top", mouseY - 20 + "px");
        $(".notfound-icon").css("left", mouseX + 5 + "px");
        $(".notfound-icon").css("top", mouseY - 80 + "px");
        $(".loading-icon.hidden").removeClass("hidden");
        selText == last_selText_cache
          ? ($(".loading-icon:not(.hidden)").addClass("hidden"),
            0 < popupData_cache.length &&
              $("#popup--data").html(popupData_cache),
            $("body").popr({ speed: 100, mouseX: mouseX, mouseY: mouseY }))
          : ((a = ""),
            void 0 === current_db || null === current_db || "en" === current_db
              ? (a = apiURL + "/q/" + selText)
              : "fr" === current_db
              ? (a = apiURL + "/qf/" + selText)
              : "jp" === current_db && (a = apiURL + "/qj/" + selText),
            $.getJSON(a, null, function(a) {
              for (var b = "", g, e = 0; e < a.tratu.length; e++)
                (g = a.tratu[e].fields.word),
                  (b +=
                    '<a href="javascript:void(0);" onmousedown="javascript:show_popup(\'' +
                    a.tratu[e].fields.kinds +
                    "','" +
                    g.replace(/\'/g, "\\'") +
                    '\');return false;"><div class="popr-item">' +
                    g +
                    "</div></a>");
              $(".loading-icon:not(.hidden)").addClass("hidden");
              0 < b.length
                ? $("#popup--data").html(b)
                : $("#popup--data").html('<i class="icon-emo-tongue"></i>');
              $("body").popr({ speed: 100, mouseX: mouseX, mouseY: mouseY });
              last_selText_cache = selText;
              popupData_cache = b;
            }).error(function() {}));
        $("#ask_popup").css("left", calculatePopupLeft(mouseX + 30) + "px");
        $("#ask_popup").css("top", calculatePopupTop(mouseY - 200) + "px");
        $("#ask_popup").css("transform", "none");
      }, 400);
    } else $(".popr_container_bottom").remove();
    do_not_send_click_event = !1;
  }, 400);
});
function show_popup(a, b) {
  $("#ask_popup .maximize_popup").show();
  $("#ask_popup").removeClass("hidden");
  $(".loading-icon.hidden").removeClass("hidden");
  var f = new XMLHttpRequest(),
    g = "";
  if (void 0 === current_db || null === current_db || "en" === current_db)
    g = apiURL + "/d/" + encodeURIComponent(b);
  else if (void 0 === current_db || null === current_db || "fr" === current_db)
    g = apiURL + "/df/" + encodeURIComponent(b);
  else if (void 0 === current_db || null === current_db || "jp" === current_db)
    g = apiURL + "/dj/" + encodeURIComponent(b);
  f.open("GET", g);
  f.setRequestHeader("Content-Type", "application/json");
  f.onload = function() {
    if (200 === f.status) {
      var a = f.responseText;
      if ("string" == typeof a || a instanceof String) a = JSON.parse(a);
      a =
        "<div class='tcTab' id='minor--tab'><div class='tcTab--slidesContainer'>" +
        parseJsonTratu(a);
      "jp" === current_db &&
        (a = a.replace(
          /\<article\ \id\=\"dict_kj\"(?!\<\/article\>)(.)*\<\/article\>/g,
          ""
        ));
      a += "</div></div>";
      $("#ask_popup .popup_title").html(b);
      $("#ask_popup .popup_details").html(a);
      $("#minor--tab").tcTab({
        id: "minor--tab",
        parent: "ask_popup",
        mobile: !0
      });
      insertSpeakers(b, current_db, ".popup_details");
    }
    $(".loading-icon:not(.hidden)").addClass("hidden");
  };
  f.send();
  do_not_send_click_event = !0;
}
function maximize_popup() {
  window.location =
    window.location.href.match(/^[^\#\?]+/)[0] +
    "?s=" +
    tcTexSelection.selectedText;
}
function close_popup() {
  $("#ask_popup:not(.hidden)").addClass("hidden");
  embeded_widget && embeded_widget.pause();
  popup_widget && popup_widget.close();
}
$(document).mousedown(function(a) {
  clearTimeout(tcTexSelectionTimeout);
  clearTimeout(getPopupDataTimeout);
  $(".popr_container_bottom").remove();
  $(".loading-icon:not(.hidden)").addClass("hidden");
  if (!$("#ask_popup").hasClass("hidden") && !do_not_send_click_event) {
    var b = a.pageX;
    a = a.pageY;
    var f = $("#ask_popup").offset().top,
      g = $("#ask_popup").offset().left,
      e = f + $("#ask_popup").height(),
      c = g + $("#ask_popup").width();
    if (b < g || b > c || a < f || a > e)
      $("#ask_popup:not(.hidden)").addClass("hidden"),
        $("#ask_popup.hidden .popup_details").html(
          '<div class="cssload-loading icon-spinner animate-spin"></div>'
        );
  }
});
function calculatePopupLeft(a) {
  var b = $(window).width() + $(document).scrollLeft();
  return a + 252 > b ? a - 252 : a;
}
function calculatePopupTop(a) {
  var b = $(window).height() + $(document).scrollTop();
  return a + 302 > b ? a - 302 : a;
}
function loadBingImages() {
  if (
    "H\u00ecnh \u1ea3nh" === currentTabTitle &&
    "" === tcBrowser &&
    !1 === isBingIFrameLoaded
  ) {
    var a =
      '<iframe src="https://www.bing.com/images/search?q=' +
      current_search_text +
      '" scrolling="yes" id="bing_iframe" width="100%" height="900" frameborder="0" noresize="noresize"></iframe>';
    $("#dict_bing .dict--content").html(a);
    displayLoadingSpinner(!0);
    $("#dict_bing .loading-icon.hidden").removeClass("hidden");
    $("#bing_iframe").unbind("load");
    $("#bing_iframe").load(function() {
      $(window).trigger("resize");
      isBingIFrameLoaded = !0;
      $("#dict_bing .loading-icon").addClass("hidden");
      displayLoadingSpinner(!1);
    });
  } else
    "" !== tcBrowser &&
      ($("#bing_iframe").unbind("load"),
      $("#dict_bing .dict--content").html(a),
      (isBingIFrameLoaded = !1));
}
function loadMovieQuotes() {
  if (
    "Ph\u1ee5 \u0111\u1ec1 phim" === currentTabTitle &&
    !1 === isMovieQuotesLoaded
  ) {
    displayLoadingSpinner(!0);
    $(".tc-page__container .loading-icon.hidden").removeClass("hidden");
    var a = "";
    isMovieQuotesLoaded = !0;
    if (void 0 === current_db || null === current_db || "en" === current_db)
      a =
        apiURL +
        "/sub/" +
        encodeURIComponent(current_search_text) +
        "/" +
        detectLanguage(current_search_text);
    var b = new XMLHttpRequest();
    b.open("GET", a);
    b.setRequestHeader("Content-Type", "application/json");
    b.onload = function() {
      if (200 === b.status) {
        var a = b.responseText;
        if ("string" == typeof a || a instanceof String)
          (a = JSON.parse(a)),
            (movieQuotesContent = parseJsonMovieQuotes(a)),
            0 < movieQuotesContent.length &&
              ($("#dict_movie_quotes .tc-page__container").html(
                movieQuotesContent
              ),
              new LazyLoad({ elements_selector: ".lazy" }),
              $(window).trigger("resize"));
      }
      displayLoadingSpinner(!1);
    };
    b.onerror = function(a) {
      displayLoadingSpinner(!1);
    };
    b.send();
  }
}
function onYouTubeIframeAPIReady() {
  yPlayer = new YT.Player("YTplayer", {
    events: { onStateChange: onPlayerStateChange }
  });
  current_youtube_time = -1;
}
function onPlayerStateChange(a) {
  a.data == YT.PlayerState.PLAYING
    ? ($(".youtube-controls .play").removeClass("icon-play-circled"),
      $(".youtube-controls .play").addClass("icon-pause-circled"),
      (updateMarkerInterval = setInterval(function() {
        updateMarkers();
      }, 300)))
    : ($(".youtube-controls .play").addClass("icon-play-circled"),
      $(".youtube-controls .play").removeClass("icon-pause-circled"),
      clearInterval(updateMarkerInterval));
}
function updateMarkers() {
  if (isYPlayerLoaded()) {
    var a = yPlayer.getCurrentTime();
    for (i = 0; i < yMarkers.length; i++) {
      var b = yMarkers[i],
        f = b.dom.textContent;
      if (current_youtube_time != b.time_start && f != current_youtube_phrase)
        if (a >= b.time_start && a <= b.time_end) {
          b.dom.classList.add("youtube-marker-current");
          var g = current_search_text.split(" ");
          current_youtube_phrase = f;
          g.forEach(function(a) {
            f = f.replace(new RegExp("\\b(" + a + ")\\b", "ig"), "<em>$1</em>");
          });
          $("#youtube-tab .youtube-caption .text").html(f);
          current_youtube_time = b.time_start;
          document.getElementsByClassName("youtube-transcript")[0].scrollTop =
            b.dom.offsetTop - 40;
          setTimeout(function() {
            $(window).trigger("resize");
          }, 200);
        } else b.dom.classList.remove("youtube-marker-current");
      current_youtube_time = b.time_start;
    }
  }
}
function htmlToElement(a, b) {
  var f = document.createElement(b);
  f.innerHTML = a;
  return f;
}
function toggleTranscript() {
  $("#youtube-tab .youtube-transcript").toggle();
  $(window).trigger("resize");
  $([document.documentElement, document.body]).animate(
    { scrollTop: $("#youtube-tab .toggle-transcript").offset().top },
    500
  );
}
function destroyYPlayer() {
  yPlayer &&
    (clearInterval(updateMarkerInterval),
    isYPlayerLoaded() && yPlayer.getIframe() && yPlayer.destroy(),
    (yPlayer = null),
    delete yPlayer);
}
function buildVideoWidget(a, b, f) {
  destroyYPlayer();
  b =
    "https://www.youtube.com/embed/" +
    a.id +
    "?enablejsapi=1&playsinline=1&autoplay=1&rel=0&showinfo=0&origin=" +
    youtubeOrigin;
  $("#youtube-tab .youtube-caption .text").html("");
  yMarkers = [];
  b = htmlToElement(
    '<iframe id="YTplayer" src="' +
      b +
      '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>',
    "div"
  );
  b.className = "iframe-wrapper";
  f = htmlToElement("", "div");
  f.className = "youtube-transcript";
  for (i = 0; i < a.transcript.length; i++) {
    var g = parseFloat(a.transcript[i].start),
      e = g + parseFloat(a.transcript[i].duration),
      c = a.transcript[i].en;
    marker = {};
    marker.time_start = g;
    marker.time_end = e;
    c = htmlToElement(c, "div");
    c.classList.add("youtube-marker");
    c.setAttribute("data-start", g);
    c.setAttribute("data-end", e);
    c.onclick = function() {
      yPlayer && yPlayer.seekTo(this.dataset.start);
    };
    marker.dom = c;
    yMarkers.push(marker);
    f.appendChild(marker.dom);
  }
  parent_widget = document.getElementById("youtube-tab");
  parent_widget.innerHTML = "";
  a = htmlToElement("", "div");
  a.className = "youtube-container";
  g = htmlToElement(
    '<i class="icon icon-backward-circled player-button large" onclick="playPrevYTPhrase()"></i><i class="icon icon-replay-5-second player-button large" onclick="rewindYTPhrase(5);"></i><i class="icon icon-play-circled player-button play xlarge" onclick="playYTPhrase();"></i><i class="icon icon-cw-circled player-button" onclick="replayYTPhrase();"></i><i class="icon icon-forward-circled player-button large" onclick="playNextYTPhrase()"></i><div class="toggle-transcript" onclick="toggleTranscript();"><i class="icon icon-transcript"></i></div>',
    "div"
  );
  g.className = "youtube-controls";
  a.appendChild(b);
  a.appendChild(g);
  parent_widget.appendChild(a);
  parent_widget.appendChild(f);
  a = htmlToElement('<div class="text">&nbsp;</div>', "div");
  a.className = "youtube-caption";
  parent_widget.appendChild(a);
  onYouTubeIframeAPIReady();
  $("#youtube-tab .youtube-caption .text").html(
    transcriptSources[currentTranscriptIdx].fields.en
  );
  waitToPlay = setInterval(function() {
    isYPlayerLoaded() &&
      (yPlayer.pauseVideo(),
      yPlayer.seekTo(transcriptSources[currentTranscriptIdx].fields.start),
      yPlayer.playVideo(),
      $(window).trigger("resize"),
      clearInterval(waitToPlay));
  }, 300);
}
function isYPlayerLoaded() {
  return yPlayer && "function" === typeof yPlayer.playVideo ? !0 : !1;
}
function loadYoutubeVideo() {
  if ("Video" === currentTabTitle)
    if (isYPlayerLoaded() && 0 <= yPlayer.getPlayerState()) yPlayer.playVideo();
    else {
      displayLoadingSpinner(!0);
      $(".tc-page__container .loading-icon.hidden").removeClass("hidden");
      var a = apiURL + "/trans/" + encodeURIComponent(current_search_text);
      $.getJSON(a, function(a) {
        transcriptSources = a.transcripts;
        0 < transcriptSources.length && playYoutube(0);
      });
    }
  else isYPlayerLoaded() && yPlayer.getIframe() && yPlayer.pauseVideo();
}
function playYoutube(a) {
  displayLoadingSpinner(!0);
  $.ajax({
    url:
      resourceURL +
      "/transcripts/" +
      transcriptSources[a].fields.youtube_id +
      ".json",
    beforeSend: function(a) {
      a.overrideMimeType && a.overrideMimeType("application/json");
    },
    dataType: "json",
    data: null,
    success: function(b, f, g) {
      currentTranscriptIdx = a;
      f = transcriptSources[a].fields;
      buildVideoWidget(b, f.start, f.duration);
      displayLoadingSpinner(!1);
    }
  });
}
function playYTPhrase() {
  isYPlayerLoaded() &&
    (yPlayer.getPlayerState() != YT.PlayerState.PLAYING
      ? yPlayer.playVideo()
      : yPlayer.pauseVideo());
}
function rewindYTPhrase(a) {
  a && isYPlayerLoaded() && yPlayer.seekTo(yPlayer.getCurrentTime() - 5);
}
function replayYTPhrase() {
  if (isYPlayerLoaded()) {
    var a = transcriptSources[currentTranscriptIdx].fields;
    $("#youtube-tab .youtube-caption .text").html(a.en);
    yPlayer.seekTo(a.start - 0.5);
  }
}
function playPrevYTPhrase() {
  isYPlayerLoaded() &&
    transcriptSources[currentTranscriptIdx - 1] &&
    (yPlayer.pauseVideo(),
    --currentTranscriptIdx,
    playYoutube(currentTranscriptIdx));
}
function playNextYTPhrase() {
  isYPlayerLoaded() &&
    transcriptSources[currentTranscriptIdx + 1] &&
    (yPlayer.pauseVideo(),
    (currentTranscriptIdx += 1),
    playYoutube(currentTranscriptIdx));
}
function clickOnTab(a) {
  a = $(".tcTab--nav ul").find("li:contains('" + a + "')");
  0 < a.length && a.trigger("click");
}
function tabOnActivated(a) {
  currentTabTitle = a.text();
  loadYoutubeVideo();
  loadMovieQuotes();
  loadBingImages();
  $(".ads-in-dict").remove();
  $(".dict--content").removeClass("ad");
  setTimeout(function() {
    isBlockingAds ||
      ((isScrollToBottomAndCreatedAds = !1),
      $(window).unbind("scroll"),
      "" === tcBrowser || 1024 <= screen.width
        ? displayDesktopAds(a)
        : displayMobileAds(a));
    $(window).trigger("resize");
  }, 500);
}
function runAdsScript() {
  $.ajax({
    url: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    dataType: "script",
    cache: !0
  });
  $.ajax({
    url:
      "https://get.optad360.io/sf/9d72a45e-a45e-11e8-98c9-06048607e8f8/plugin.min.js",
    dataType: "script",
    cache: !0
  });
}
function displayMobileAds(a) {
  currentTabTitle = a.text();
  if (
    0 < $(".tcTab--slide.active").length &&
    (0 == $(".ads-in-dict .adslot_Sx").length &&
      ("Video" === currentTabTitle &&
      void 0 !== $(".tcTab--slide.active .dict--content")[0]
        ? $(
            '<div class="ads-in-dict" style="float:none;margin-left: 0;"><ins class="adsbygoogle adslot_Mx" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/6129876885"></ins></div>'
          ).appendTo($($(".tcTab--slide.active .dict--content")[0]))
        : "H\u00ecnh \u1ea3nh" === currentTabTitle &&
          void 0 !== $(".tcTab--slide.active .dict--content")[0]
        ? $(
            '<div class="ads-in-dict" style="float:none;margin-left: 0;"><ins class="adsbygoogle adslot_Mx" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/6129876885"></ins></div>'
          ).prependTo($($(".tcTab--slide.active .dict--content")[0]))
        : "Tra c\u00e2u" === currentTabTitle &&
          0 < sentencesCount &&
          ($(".tc-row.tc-row-content.ad")
            .closest("li")
            .remove(),
          (a = $(".tc-row.tc-row-content")[2]),
          3 > sentencesCount && (a = $(".tc-row.tc-row-content:last")),
          $(
            '<article class="tc-row tc-row-content ad"><div class="ads-in-dict"><ins class="adsbygoogle adslot_M1" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/6129876885"></ins></div></article>'
          ).appendTo($(a)))),
    "Tra c\u00e2u" !== currentTabTitle &&
      "Video" !== currentTabTitle &&
      "H\u00ecnh \u1ea3nh" !== currentTabTitle)
  )
    for (
      var b = ["tr", "> blockquote", "> br"],
        f = ["table", "> blockquote", "> br"],
        g = 0;
      1 >= g;
      g++
    ) {
      var e = !1;
      for (a = 0; a < b.length; a++)
        if (
          0 == $(".ads-in-dict .adslot_M" + g).length &&
          void 0 !== $(".tcTab--slide.active .dict--content " + f[a])[g]
        ) {
          var c = $($(".tcTab--slide.active .dict--content")[g]).find(b[a])
            .length;
          if (0 < c) {
            e = 9 >= c ? c : 9;
            c =
              '<div class="ads-in-dict" style="float: none;"><ins class="adsbygoogle adslot_M' +
              g +
              '" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/3588237730"></ins></div>';
            "tr" === b[a] && (c = '<tr><td colspan="10">' + c + "</td><tr>");
            $(c).insertAfter(
              $(
                $($(".tcTab--slide.active .dict--content")[g]).find(b[a])[e - 1]
              )
            );
            e = !0;
            break;
          }
        }
      if (!e) break;
    }
  b = $(".adsbygoogle:not(:has(iframe))");
  for (a = 0; a < b.length; a += 1)
    (adsbygoogle = window.adsbygoogle || []).push({});
}
function displayDesktopAds(a) {
  currentTabTitle = a.text();
  if (0 < $(".tcTab--slide.active").length) {
    0 == $(".ads-in-dict .adslot_Sx").length &&
      ("Video" === currentTabTitle &&
      void 0 !== $(".tcTab--slide.active .dict--content")[0]
        ? $(
            '<div class="ads-in-dict" style="float:none;"><ins class="adsbygoogle adslot_Sx" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/6129876885"></ins></div>'
          ).appendTo($($(".tcTab--slide.active .dict--content")[0]))
        : "H\u00ecnh \u1ea3nh" === currentTabTitle &&
          void 0 !== $(".tcTab--slide.active .dict--content")[0]
        ? $(
            '<div class="ads-in-dict" style="float:none;"><ins class="adsbygoogle adslot_Sx" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/6129876885"></ins></div>'
          ).prependTo($($(".tcTab--slide.active .dict--content")[0]))
        : "Tra c\u00e2u" === currentTabTitle &&
          0 < sentencesCount &&
          ($(".tc-row.tc-row-content.ad")
            .closest("li")
            .remove(),
          (a = $(".tc-row.tc-row-content")[2]),
          3 > sentencesCount && (a = $(".tc-row.tc-row-content:last")),
          $(
            '<article class="tc-row tc-row-content ad"><div class="ads-in-dict"><ins class="adsbygoogle adslot_Sx" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/6129876885"></ins></div></article>'
          ).appendTo($(a)),
          !1 === isScrollToBottomAndCreatedAds &&
            $(window).scroll(function() {
              if (
                !isScrollToBottomAndCreatedAds &&
                $(window).scrollTop() + $(window).height() >
                  $(document).height() - 300
              ) {
                isScrollToBottomAndCreatedAds = !0;
                $("ul.tc-row-list").append(
                  '<li><article class="tc-row tc-row-content ad"></article></li>'
                );
                for (x = 0; 1 >= x; x++)
                  0 == $("tc .ads-in-dict .adslot_S" + x).length &&
                    $(
                      '<div class="ads-in-dict" style="display:inline-block; margin: 5px;"><ins class="adsbygoogle adslot_S' +
                        x +
                        '" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/3588237730"></ins></div>'
                    ).appendTo($(".tc-row.tc-row-content:last"));
                updateAds();
                $(window).trigger("resize");
              }
            })));
    if (
      "Tra c\u00e2u" !== currentTabTitle &&
      "Video" !== currentTabTitle &&
      "H\u00ecnh \u1ea3nh" !== currentTabTitle
    )
      for (x = 0; 1 >= x; x++)
        0 == $(".ads-in-dict .adslot_S" + x).length &&
          void 0 !== $(".tcTab--slide.active .dict--content")[x] &&
          $(
            '<div class="ads-in-dict"><ins class="adsbygoogle adslot_S' +
              x +
              '" data-ad-client="ca-pub-5512390705137507" data-ad-slot="7611717497/3588237730"></ins></div>'
          ).prependTo($($(".tcTab--slide.active .dict--content")[x]));
    $(".dict--content").addClass("ad");
  }
  updateAds();
}
function updateAds() {
  for (var a = $(".adsbygoogle:not(:has(iframe))"), b = 0; b < a.length; b += 1)
    (adsbygoogle = window.adsbygoogle || []).push({});
}
function setSidebarsStiky(a) {
  var b = document.querySelector(a),
    f = b.getBoundingClientRect().top;
  window.addEventListener("scroll", function() {
    b.style.position = window.pageYOffset >= f ? "fixed" : "absolute";
  });
}
function loadYoutubeScript() {
  var a = document.createElement("script");
  a.src = "https://www.youtube.com/iframe_api";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
}
function detectAdsBlock() {
  var a = new XMLHttpRequest();
  a.open("GET", url);
  a.setRequestHeader("Content-Type", "text/javascript");
  a.onload = function() {
    "function" !== typeof adsBlockDetector
      ? (isBlockingAds = !0)
      : runAdsScript();
  };
  a.onerror = function(a) {
    isBlockingAds = !0;
  };
  a.send();
}
function initSearchAction() {
  0 < $("#tc-s").length &&
    ("" != tcBrowser
      ? ($("#tc-x").show(),
        setTimeout(function() {
          $("#" + tcBrowser).trigger("mouseenter");
        }, 1e3),
        $("#tc-x").on("touchstart", function() {
          $("#tc-s").val("");
          focusAfterLoading();
          return !1;
        }),
        $("#tc-b")
          .on("touchstart", function() {
            tracau(!1, !0);
          })
          .bind("touchend", function() {
            $("#tc-s").blur();
          }))
      : (0 < $("#tc-s").length && focusAfterLoading(),
        $("#tc-b").on("click", function() {
          tracau(!1, !0);
          return !1;
        })));
}
function setupSearchPage() {
  setupSwitchDB();
  initSearchAction();
  setupSuggestionBox();
  setupTCTab();
  loadYoutubeScript();
}
$(document).ready(function(a) {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  )
    (tcBrowser = "ios"), a(".icon-apple").addClass("highlight");
  else if (
    navigator.userAgent.match(/Windows Phone/i) ||
    navigator.userAgent.match(/iemobile/i) ||
    navigator.userAgent.match(/WPDesktop/i)
  )
    (tcBrowser = "wp"), a(".icon-windows").addClass("highlight");
  else if (navigator.userAgent.match(/Android/i))
    (tcBrowser = "android"), a(".icon-android").addClass("highlight");
  else if (
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/BB10/i) ||
    navigator.userAgent.match(/PlayBook/i)
  )
    (tcBrowser = "bb"), a(".icon-blackberry").addClass("highlight");
  setupSearchPage();
  parse_url_params(window.location.href);
  a(window).on("popstate", function(a) {
    parse_url_params(window.location.href);
  });
  a("#ask_popup").drags({ handle: ".drag_control" });
  loadFBSDK(document, "script", "facebook-jssdk");
  "" === tcBrowser && showShareTooltip();
  creditTC();
});
