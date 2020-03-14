!(function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = {
      exports: {},
      id: i,
      loaded: !1
    });
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
              l[u] ||
                (l[u] = s
                  ? {}
                  : {
                      toJSON: ve.noop
                    }),
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
          i = {
            height: e
          },
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
              {
                specialEasing: {},
                easing: ve.easing._default
              },
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
          ve.fx.timer(
            ve.extend(l, {
              elem: e,
              anim: u,
              queue: u.opts.queue
            })
          ),
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
        return {
          state: "success",
          data: t
        };
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
                      e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                      })
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
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
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
        for (_ in {
          submit: !0,
          reset: !0
        })
          T.pseudos[_] = l(_);
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
                  o.push({
                    value: i,
                    type: r[0].replace(se, " ")
                  }),
                  (s = s.slice(i.length)));
              for (a in T.filter)
                !(r = pe[a].exec(s)) ||
                  (u[a] && !(r = u[a](r))) ||
                  ((i = r.shift()),
                  o.push({
                    value: i,
                    type: a,
                    matches: r
                  }),
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
        ke = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
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
        for (e in {
          submit: !0,
          change: !0,
          focusin: !0
        })
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
                i.length &&
                  a.push({
                    elem: l,
                    handlers: i
                  });
              }
          return (
            s < t.length &&
              a.push({
                elem: this,
                handlers: t.slice(s)
              }),
            a
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
          load: {
            noBubble: !0
          },
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
          var i = ve.extend(new ve.Event(), n, {
            type: e,
            isSimulated: !0
          });
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
          ve.each(
            {
              focus: "focusin",
              blur: "focusout"
            },
            function(e, t) {
              var n = function(e) {
                ve.event.simulate(t, e.target, ve.event.fix(e));
              };
              ve.event.special[t] = {
                setup: function() {
                  var i = this.ownerDocument || this,
                    r = ve._data(i, t);
                  r || i.addEventListener(e, n, !0),
                    ve._data(i, t, (r || 0) + 1);
                },
                teardown: function() {
                  var i = this.ownerDocument || this,
                    r = ve._data(i, t) - 1;
                  r
                    ? ve._data(i, t, r)
                    : (i.removeEventListener(e, n, !0), ve._removeData(i, t));
                }
              };
            }
          ),
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
        pt = {
          HTML: "block",
          BODY: "block"
        },
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
              (r =
                "4px" ===
                (
                  c || {
                    width: "4px"
                  }
                ).width),
              (u.style.marginRight = "50%"),
              (i =
                "4px" ===
                (
                  c || {
                    marginRight: "4px"
                  }
                ).marginRight),
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
        xt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        St = {
          letterSpacing: "0",
          fontWeight: "400"
        },
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
        cssProps: {
          float: me.cssFloat ? "cssFloat" : "styleFloat"
        },
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
            return gt(
              e,
              {
                display: "inline-block"
              },
              bt,
              [e, "marginRight"]
            );
        })),
        (ve.cssHooks.marginLeft = H(me.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(bt(e, "marginLeft")) ||
                (ve.contains(e.ownerDocument, e)
                  ? e.getBoundingClientRect().left -
                    gt(
                      e,
                      {
                        marginLeft: 0
                      },
                      function() {
                        return e.getBoundingClientRect().left;
                      }
                    )
                  : 0)) + "px"
            );
        })),
        ve.each(
          {
            margin: "",
            padding: "",
            border: "Width"
          },
          function(e, t) {
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
          }
        ),
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
              .animate(
                {
                  opacity: t
                },
                e,
                n,
                i
              );
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
            fadeIn: {
              opacity: "show"
            },
            fadeOut: {
              opacity: "hide"
            },
            fadeToggle: {
              opacity: "toggle"
            }
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
        (ve.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }),
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
          propFix: {
            for: "htmlFor",
            class: "className"
          }
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
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
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
          flatOptions: {
            url: !0,
            context: !0
          }
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
          for (o in {
            success: 1,
            error: 1,
            complete: 1
          })
            T[o](f[o]);
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
                  {
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                  },
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
                      return {
                        name: t.name,
                        value: e.replace(un, "\r\n")
                      };
                    })
                  : {
                      name: t.name,
                      value: n.replace(un, "\r\n")
                    };
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
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
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
              .ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
              })
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
              i = {
                top: 0,
                left: 0
              },
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
                n = {
                  top: 0,
                  left: 0
                },
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
          {
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
          },
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
        ve.each(
          {
            Height: "height",
            Width: "width"
          },
          function(e, t) {
            ve.each(
              {
                padding: "inner" + e,
                content: t,
                "": "outer" + e
              },
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
          }
        ),
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
            _.push({
              name: e,
              fn: t,
              options: n
            });
          },
          addAsyncTest: function(e) {
            _.push({
              name: null,
              fn: e
            });
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
      var W = {
        elem: a("modernizr")
      };
      T._q.push(function() {
        delete W.elem;
      });
      var $ = {
        style: W.elem.style
      };
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
          return {
            height: m("Height", t, n, i),
            width: m("Width", t, n, i)
          };
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
            s = {
              top: 0,
              left: 0
            },
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
              top: {
                width: a.width,
                height: t.top - a.top
              },
              right: {
                width: a.right - t.right,
                height: a.height
              },
              bottom: {
                width: a.width,
                height: a.bottom - t.bottom
              },
              left: {
                width: t.left - a.left,
                height: a.height
              }
            },
            l = Object.keys(s)
              .map(function(e) {
                return be(
                  {
                    key: e
                  },
                  s[e],
                  {
                    area: C(s[e])
                  }
                );
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
            r = {
              width: e.offsetWidth + i,
              height: e.offsetHeight + n
            };
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
            r = {
              width: i.width,
              height: i.height
            },
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
          o.addEventListener(t, n, {
            passive: !0
          }),
            r || j(a(o.parentNode), t, n, i),
            i.push(o);
        }

        function F(e, t, n, i) {
          (n.updateBound = i),
            R(e).addEventListener("resize", n.updateBound, {
              passive: !0
            });
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
            V(t, {
              position: n.positionFixed ? "fixed" : "absolute"
            }),
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
            c = {
              position: r.position
            },
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
          var _ = {
            "x-placement": e.placement
          };
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
            shift: {
              order: 100,
              enabled: !0,
              fn: oe
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: ie,
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: re,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: ee
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: Y,
              element: "[x-arrow]"
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: Z,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: se
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: ae
            },
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
                    return be(
                      {
                        name: e
                      },
                      r.options.modifiers[e]
                    );
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
            u = {
              DISMISS: '[data-dismiss="alert"]'
            },
            c = {
              CLOSE: "close" + o,
              CLOSED: "closed" + o,
              CLICK_DATA_API: "click" + o + a
            },
            d = {
              ALERT: "alert",
              FADE: "fade",
              SHOW: "show"
            },
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
            l = {
              ACTIVE: "active",
              BUTTON: "btn",
              FOCUS: "focus"
            },
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
            m = {
              NEXT: "next",
              PREV: "prev",
              LEFT: "left",
              RIGHT: "right"
            },
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
            c = {
              toggle: !0,
              parent: ""
            },
            d = {
              toggle: "boolean",
              parent: "(string|element)"
            },
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
            h = {
              WIDTH: "width",
              HEIGHT: "height"
            },
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
                      var r = {
                          relatedTarget: this._element
                        },
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
                      flip: {
                        enabled: this._config.flip
                      },
                      preventOverflow: {
                        boundariesElement: this._config.boundary
                      }
                    }
                  };
                  return (
                    "static" === this._config.display &&
                      (n.modifiers.applyStyle = {
                        enabled: !1
                      }),
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
                        l = {
                          relatedTarget: n[i]
                        };
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
            d = {
              backdrop: !0,
              keyboard: !0,
              focus: !0,
              show: !0
            },
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
                    var i = e.Event(p.SHOW, {
                      relatedTarget: t
                    });
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
                  var r = e.Event(p.SHOWN, {
                      relatedTarget: t
                    }),
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
            m = {
              SHOW: "show",
              OUT: "out"
            },
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
            v = {
              FADE: "fade",
              SHOW: "show"
            },
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
                          offset: {
                            offset: this.config.offset
                          },
                          flip: {
                            behavior: this.config.fallbackPlacement
                          },
                          arrow: {
                            element: y.ARROW
                          },
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
                      (n.delay = {
                        show: n.delay,
                        hide: n.delay
                      }),
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
            f = a({}, m.DefaultType, {
              content: "(string|element|function)"
            }),
            p = {
              FADE: "fade",
              SHOW: "show"
            },
            h = {
              TITLE: ".popover-header",
              CONTENT: ".popover-body"
            },
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
            c = {
              offset: 10,
              method: "auto",
              target: ""
            },
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
            m = {
              OFFSET: "offset",
              POSITION: "position"
            },
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
                    var s = e.Event(u.HIDE, {
                        relatedTarget: this._element
                      }),
                      f = e.Event(u.SHOW, {
                        relatedTarget: i
                      });
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
                          r = e.Event(u.SHOWN, {
                            relatedTarget: i
                          });
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
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
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
                      l.push({
                        src: t.attr("src"),
                        element: t[0]
                      }),
                      e.each(u, function(e, n) {
                        var i,
                          r = t.css(n);
                        if (!r) return !0;
                        for (; (i = c.exec(r)); )
                          l.push({
                            src: i[2],
                            element: t[0]
                          });
                      });
                  })
              : s.find("img:uncached").each(function() {
                  l.push({
                    src: this.src,
                    element: this
                  });
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
        a = {
          interval: 250,
          force_process: !1
        },
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
              {
                scrollTop: e(e.attr(this, "href")).offset().top - 30
              },
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
                    .slimScroll({
                      destroy: !0
                    })
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
                    .slimScroll({
                      destroy: !0
                    })
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
        screenSizes: {
          xs: 480,
          sm: 768,
          md: 1025,
          lg: 1200
        }
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
                    A.css({
                      top: i + "px"
                    })),
                  (g =
                    parseInt(A.css("top")) /
                    (E.outerHeight() - A.outerHeight())),
                  (i = g * (E[0].scrollHeight - E.outerHeight())),
                  n)
                ) {
                  i = e;
                  var a = (i / E[0].scrollHeight) * E.outerHeight();
                  (a = Math.min(Math.max(a, 0), o)),
                    A.css({
                      top: a + "px"
                    });
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
                  A.css({
                    height: m + "px"
                  });
                var e = m == E.outerHeight() ? "none" : "block";
                A.css({
                  display: e
                });
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
                E.css({
                  overflow: "hidden",
                  width: r.width,
                  height: r.height
                });
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
                      ? {
                          right: r.distance
                        }
                      : {
                          left: r.distance
                        };
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
                    ? (A.css({
                        top: E.outerHeight() - A.outerHeight()
                      }),
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
        e.fn.extend({
          slimscroll: e.fn.slimScroll
        });
    })(jQuery);
  }
]);
var $jscomp = {
  scope: {},
  findInternal: function(a, b, f) {
    a instanceof String && (a = String(a));
    for (var h = a.length, e = 0; e < h; e++) {
      var c = a[e];
      if (b.call(f, c, e, a))
        return {
          i: e,
          v: c
        };
    }
    return {
      i: -1,
      v: void 0
    };
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
$jscomp.polyfill = function(a, b, f, h) {
  if (b) {
    f = $jscomp.global;
    a = a.split(".");
    for (h = 0; h < a.length - 1; h++) {
      var e = a[h];
      e in f || (f[e] = {});
      f = f[e];
    }
    a = a[a.length - 1];
    h = f[a];
    b = b(h);
    b != h &&
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
      : function(a, f, h) {
          var e = this.length || 0;
          0 > f && (f = Math.max(0, e + f));
          if (null == h || h > e) h = e;
          h = Number(h);
          0 > h && (h = Math.max(0, e + h));
          for (f = Number(f || 0); f < h; f++) this[f] = a;
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
          for (var h = ""; a; ) if ((a & 1 && (h += b), (a >>>= 1))) b += b;
          return h;
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
        {
          name: "Armenian Male",
          flag: "hy",
          gender: "f",
          voiceIDs: [99]
        },
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
        {
          name: "Latin Female",
          flag: "va",
          gender: "f",
          voiceIDs: [114]
        },
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
        {
          name: "Tamil Male",
          flag: "hi",
          gender: "m",
          voiceIDs: [141]
        },
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
        {
          name: "Afrikaans Male",
          flag: "af",
          gender: "m",
          voiceIDs: [93]
        },
        {
          name: "Albanian Male",
          flag: "sq",
          gender: "m",
          voiceIDs: [94]
        },
        {
          name: "Bosnian Male",
          flag: "bs",
          gender: "m",
          voiceIDs: [14]
        },
        {
          name: "Catalan Male",
          flag: "catalonia",
          gender: "m",
          voiceIDs: [68]
        },
        {
          name: "Croatian Male",
          flag: "hr",
          gender: "m",
          voiceIDs: [13]
        },
        {
          name: "Czech Male",
          flag: "cz",
          gender: "m",
          voiceIDs: [161]
        },
        {
          name: "Danish Male",
          flag: "da",
          gender: "m",
          voiceIDs: [162],
          deprecated: !0
        },
        {
          name: "Esperanto Male",
          flag: "eo",
          gender: "m",
          voiceIDs: [108]
        },
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
        {
          name: "Hungarian Male",
          flag: "hu",
          gender: "m",
          voiceIDs: [164]
        },
        {
          name: "Icelandic Male",
          flag: "is",
          gender: "m",
          voiceIDs: [110]
        },
        {
          name: "Latin Male",
          flag: "va",
          gender: "m",
          voiceIDs: [165],
          deprecated: !0
        },
        {
          name: "Latvian Male",
          flag: "lv",
          gender: "m",
          voiceIDs: [115]
        },
        {
          name: "Macedonian Male",
          flag: "mk",
          gender: "m",
          voiceIDs: [116]
        },
        {
          name: "Moldavian Male",
          flag: "md",
          gender: "m",
          voiceIDs: [117]
        },
        {
          name: "Montenegrin Male",
          flag: "me",
          gender: "m",
          voiceIDs: [118]
        },
        {
          name: "Norwegian Male",
          flag: "no",
          gender: "m",
          voiceIDs: [166]
        },
        {
          name: "Serbian Male",
          flag: "sr",
          gender: "m",
          voiceIDs: [12]
        },
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
        {
          name: "Swahili Male",
          flag: "sw",
          gender: "m",
          voiceIDs: [140]
        },
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
        {
          name: "Welsh Male",
          flag: "cy",
          gender: "m",
          voiceIDs: [147]
        },
        {
          name: "US English Male",
          flag: "us",
          gender: "m",
          voiceIDs: [0, 4, 2, 6, 7, 75, 159, 234, 236, 237]
        },
        {
          name: "Fallback UK Female",
          flag: "gb",
          gender: "f",
          voiceIDs: [8]
        }
      ];
      a.voicecollection = [
        {
          name: "Google UK English Male"
        },
        {
          name: "Agnes"
        },
        {
          name: "Daniel Compact"
        },
        {
          name: "Google UK English Female"
        },
        {
          name: "en-GB",
          rate: 0.25,
          pitch: 1
        },
        {
          name: "en-AU",
          rate: 0.25,
          pitch: 1
        },
        {
          name: "ingl\u00e9s Reino Unido"
        },
        {
          name: "English United Kingdom"
        },
        {
          name: "Fallback en-GB Female",
          lang: "en-GB",
          fallbackvoice: !0
        },
        {
          name: "Eszter Compact"
        },
        {
          name: "hu-HU",
          rate: 0.4
        },
        {
          name: "Fallback Hungarian",
          lang: "hu",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Serbian",
          lang: "sr",
          fallbackvoice: !0
        },
        {
          name: "Fallback Croatian",
          lang: "hr",
          fallbackvoice: !0
        },
        {
          name: "Fallback Bosnian",
          lang: "bs",
          fallbackvoice: !0
        },
        {
          name: "Fallback Spanish",
          lang: "es",
          fallbackvoice: !0
        },
        {
          name: "Spanish Spain"
        },
        {
          name: "espa\u00f1ol Espa\u00f1a"
        },
        {
          name: "Diego Compact",
          rate: 0.3
        },
        {
          name: "Google Espa\u00f1ol"
        },
        {
          name: "es-ES",
          rate: 0.2
        },
        {
          name: "Google Fran\u00e7ais"
        },
        {
          name: "French France"
        },
        {
          name: "franc\u00e9s Francia"
        },
        {
          name: "Virginie Compact",
          rate: 0.5
        },
        {
          name: "fr-FR",
          rate: 0.25
        },
        {
          name: "Fallback French",
          lang: "fr",
          fallbackvoice: !0
        },
        {
          name: "Google Deutsch"
        },
        {
          name: "German Germany"
        },
        {
          name: "alem\u00e1n Alemania"
        },
        {
          name: "Yannick Compact",
          rate: 0.5
        },
        {
          name: "de-DE",
          rate: 0.25
        },
        {
          name: "Fallback Deutsch",
          lang: "de",
          fallbackvoice: !0
        },
        {
          name: "Google Italiano"
        },
        {
          name: "Italian Italy"
        },
        {
          name: "italiano Italia"
        },
        {
          name: "Paolo Compact",
          rate: 0.5
        },
        {
          name: "it-IT",
          rate: 0.25
        },
        {
          name: "Fallback Italian",
          lang: "it",
          fallbackvoice: !0
        },
        {
          name: "Google US English",
          timerSpeed: 1
        },
        {
          name: "English United States"
        },
        {
          name: "ingl\u00e9s Estados Unidos"
        },
        {
          name: "Vicki"
        },
        {
          name: "en-US",
          rate: 0.2,
          pitch: 1,
          timerSpeed: 1.3
        },
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
        {
          name: "Fallback Romanian",
          lang: "ro",
          fallbackvoice: !0
        },
        {
          name: "Milena Compact"
        },
        {
          name: "ru-RU",
          rate: 0.25
        },
        {
          name: "Fallback Russian",
          lang: "ru",
          fallbackvoice: !0
        },
        {
          name: "Google \u65e5\u672c\u4eba",
          timerSpeed: 1
        },
        {
          name: "Kyoko Compact"
        },
        {
          name: "ja-JP",
          rate: 0.25
        },
        {
          name: "Fallback Japanese",
          lang: "ja",
          fallbackvoice: !0
        },
        {
          name: "Google \ud55c\uad6d\uc758",
          timerSpeed: 1
        },
        {
          name: "Narae Compact"
        },
        {
          name: "ko-KR",
          rate: 0.25
        },
        {
          name: "Fallback Korean",
          lang: "ko",
          fallbackvoice: !0
        },
        {
          name: "Google \u4e2d\u56fd\u7684",
          timerSpeed: 1
        },
        {
          name: "Ting-Ting Compact"
        },
        {
          name: "zh-CN",
          rate: 0.25
        },
        {
          name: "Fallback Chinese",
          lang: "zh-CN",
          fallbackvoice: !0
        },
        {
          name: "Alexandros Compact"
        },
        {
          name: "el-GR",
          rate: 0.25
        },
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
        {
          name: "hi-IN",
          rate: 0.25
        },
        {
          name: "Fallback Hindi",
          lang: "hi",
          fallbackvoice: !0
        },
        {
          name: "Fallback Catalan",
          lang: "ca",
          fallbackvoice: !0
        },
        {
          name: "Aylin Compact"
        },
        {
          name: "tr-TR",
          rate: 0.25
        },
        {
          name: "Fallback Turkish",
          lang: "tr",
          fallbackvoice: !0
        },
        {
          name: "Stine Compact"
        },
        {
          name: "no-NO",
          rate: 0.25
        },
        {
          name: "Fallback Norwegian",
          lang: "no",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Daniel"
        },
        {
          name: "Monica"
        },
        {
          name: "Amelie"
        },
        {
          name: "Anna"
        },
        {
          name: "Alice"
        },
        {
          name: "Melina"
        },
        {
          name: "Mariska"
        },
        {
          name: "Yelda"
        },
        {
          name: "Milena"
        },
        {
          name: "Xander"
        },
        {
          name: "Alva"
        },
        {
          name: "Lee Compact"
        },
        {
          name: "Karen"
        },
        {
          name: "Fallback Australian",
          lang: "en-AU",
          fallbackvoice: !0
        },
        {
          name: "Mikko Compact"
        },
        {
          name: "Satu"
        },
        {
          name: "fi-FI",
          rate: 0.25
        },
        {
          name: "Fallback Finnish",
          lang: "fi",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Afrikans",
          lang: "af",
          fallbackvoice: !0
        },
        {
          name: "Fallback Albanian",
          lang: "sq",
          fallbackvoice: !0
        },
        {
          name: "Maged Compact"
        },
        {
          name: "Tarik"
        },
        {
          name: "ar-SA",
          rate: 0.25
        },
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
        {
          name: "Zuzana Compact"
        },
        {
          name: "Zuzana"
        },
        {
          name: "cs-CZ",
          rate: 0.25
        },
        {
          name: "Fallback Czech",
          lang: "cs",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Ida Compact"
        },
        {
          name: "Sara"
        },
        {
          name: "da-DK",
          rate: 0.25
        },
        {
          name: "Fallback Danish",
          lang: "da",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Esperanto",
          lang: "eo",
          fallbackvoice: !0
        },
        {
          name: "Fallback Hatian Creole",
          lang: "ht",
          fallbackvoice: !0
        },
        {
          name: "Fallback Icelandic",
          lang: "is",
          fallbackvoice: !0
        },
        {
          name: "Damayanti"
        },
        {
          name: "id-ID",
          rate: 0.25
        },
        {
          name: "Fallback Indonesian",
          lang: "id",
          fallbackvoice: !0
        },
        {
          name: "Fallback Latin",
          lang: "la",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Latvian",
          lang: "lv",
          fallbackvoice: !0
        },
        {
          name: "Fallback Macedonian",
          lang: "mk",
          fallbackvoice: !0
        },
        {
          name: "Fallback Moldavian",
          lang: "mo",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Montenegrin",
          lang: "sr-ME",
          fallbackvoice: !0
        },
        {
          name: "Agata Compact"
        },
        {
          name: "Zosia"
        },
        {
          name: "pl-PL",
          rate: 0.25
        },
        {
          name: "Fallback Polish",
          lang: "pl",
          fallbackvoice: !0
        },
        {
          name: "Raquel Compact"
        },
        {
          name: "Luciana"
        },
        {
          name: "pt-BR",
          rate: 0.25
        },
        {
          name: "Fallback Brazilian Portugese",
          lang: "pt-BR",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Joana Compact"
        },
        {
          name: "Joana"
        },
        {
          name: "pt-PT",
          rate: 0.25
        },
        {
          name: "Fallback Portuguese",
          lang: "pt-PT",
          fallbackvoice: !0
        },
        {
          name: "Fallback Serbo-Croation",
          lang: "sh",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Laura Compact"
        },
        {
          name: "Laura"
        },
        {
          name: "sk-SK",
          rate: 0.25
        },
        {
          name: "Fallback Slovak",
          lang: "sk",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Javier Compact"
        },
        {
          name: "Paulina"
        },
        {
          name: "es-MX",
          rate: 0.25
        },
        {
          name: "Fallback Spanish (Latin American)",
          lang: "es-419",
          fallbackvoice: !0,
          service: "g2"
        },
        {
          name: "Fallback Swahili",
          lang: "sw",
          fallbackvoice: !0
        },
        {
          name: "Fallback Tamil",
          lang: "ta",
          fallbackvoice: !0
        },
        {
          name: "Narisa Compact"
        },
        {
          name: "Kanya"
        },
        {
          name: "th-TH",
          rate: 0.25
        },
        {
          name: "Fallback Thai",
          lang: "th",
          fallbackvoice: !0
        },
        {
          name: "Fallback Vietnamese",
          lang: "vi",
          fallbackvoice: !0
        },
        {
          name: "Fallback Welsh",
          lang: "cy",
          fallbackvoice: !0
        },
        {
          name: "Oskar Compact"
        },
        {
          name: "sv-SE",
          rate: 0.25
        },
        {
          name: "Simona Compact"
        },
        {
          name: "Ioana"
        },
        {
          name: "ro-RO",
          rate: 0.25
        },
        {
          name: "Kyoko"
        },
        {
          name: "Lekha"
        },
        {
          name: "Ting-Ting"
        },
        {
          name: "Yuna"
        },
        {
          name: "Xander Compact"
        },
        {
          name: "nl-NL",
          rate: 0.25
        },
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
        {
          name: "German Germany",
          lang: "de_DE"
        },
        {
          name: "English United Kingdom",
          lang: "en_GB"
        },
        {
          name: "English India",
          lang: "en_IN"
        },
        {
          name: "English United States",
          lang: "en_US"
        },
        {
          name: "Spanish Spain",
          lang: "es_ES"
        },
        {
          name: "Spanish Mexico",
          lang: "es_MX"
        },
        {
          name: "Spanish United States",
          lang: "es_US"
        },
        {
          name: "French Belgium",
          lang: "fr_BE"
        },
        {
          name: "French France",
          lang: "fr_FR"
        },
        {
          name: "Hindi India",
          lang: "hi_IN"
        },
        {
          name: "Indonesian Indonesia",
          lang: "in_ID"
        },
        {
          name: "Italian Italy",
          lang: "it_IT"
        },
        {
          name: "Japanese Japan",
          lang: "ja_JP"
        },
        {
          name: "Korean South Korea",
          lang: "ko_KR"
        },
        {
          name: "Dutch Netherlands",
          lang: "nl_NL"
        },
        {
          name: "Polish Poland",
          lang: "pl_PL"
        },
        {
          name: "Portuguese Brazil",
          lang: "pt_BR"
        },
        {
          name: "Portuguese Portugal",
          lang: "pt_PT"
        },
        {
          name: "Russian Russia",
          lang: "ru_RU"
        },
        {
          name: "Thai Thailand",
          lang: "th_TH"
        },
        {
          name: "Turkish Turkey",
          lang: "tr_TR"
        },
        {
          name: "Chinese China",
          lang: "zh_CN_#Hans"
        },
        {
          name: "Chinese Hong Kong",
          lang: "zh_HK_#Hans"
        },
        {
          name: "Chinese Hong Kong",
          lang: "zh_HK_#Hant"
        },
        {
          name: "Chinese Taiwan",
          lang: "zh_TW_#Hant"
        },
        {
          name: "Alex"
        },
        {
          name: "Maged",
          lang: "ar-SA"
        },
        {
          name: "Zuzana",
          lang: "cs-CZ"
        },
        {
          name: "Sara",
          lang: "da-DK"
        },
        {
          name: "Anna",
          lang: "de-DE"
        },
        {
          name: "Melina",
          lang: "el-GR"
        },
        {
          name: "Karen",
          lang: "en-AU"
        },
        {
          name: "Daniel",
          lang: "en-GB"
        },
        {
          name: "Moira",
          lang: "en-IE"
        },
        {
          name: "Samantha (Enhanced)",
          lang: "en-US"
        },
        {
          name: "Samantha",
          lang: "en-US"
        },
        {
          name: "Tessa",
          lang: "en-ZA"
        },
        {
          name: "Monica",
          lang: "es-ES"
        },
        {
          name: "Paulina",
          lang: "es-MX"
        },
        {
          name: "Satu",
          lang: "fi-FI"
        },
        {
          name: "Amelie",
          lang: "fr-CA"
        },
        {
          name: "Thomas",
          lang: "fr-FR"
        },
        {
          name: "Carmit",
          lang: "he-IL"
        },
        {
          name: "Lekha",
          lang: "hi-IN"
        },
        {
          name: "Mariska",
          lang: "hu-HU"
        },
        {
          name: "Damayanti",
          lang: "id-ID"
        },
        {
          name: "Alice",
          lang: "it-IT"
        },
        {
          name: "Kyoko",
          lang: "ja-JP"
        },
        {
          name: "Yuna",
          lang: "ko-KR"
        },
        {
          name: "Ellen",
          lang: "nl-BE"
        },
        {
          name: "Xander",
          lang: "nl-NL"
        },
        {
          name: "Nora",
          lang: "no-NO"
        },
        {
          name: "Zosia",
          lang: "pl-PL"
        },
        {
          name: "Luciana",
          lang: "pt-BR"
        },
        {
          name: "Joana",
          lang: "pt-PT"
        },
        {
          name: "Ioana",
          lang: "ro-RO"
        },
        {
          name: "Milena",
          lang: "ru-RU"
        },
        {
          name: "Laura",
          lang: "sk-SK"
        },
        {
          name: "Alva",
          lang: "sv-SE"
        },
        {
          name: "Kanya",
          lang: "th-TH"
        },
        {
          name: "Yelda",
          lang: "tr-TR"
        },
        {
          name: "Ting-Ting",
          lang: "zh-CN"
        },
        {
          name: "Sin-Ji",
          lang: "zh-HK"
        },
        {
          name: "Mei-Jia",
          lang: "zh-TW"
        },
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
        {
          name: "native",
          lang: ""
        },
        {
          name: "Google espa\u00f1ol"
        },
        {
          name: "Google espa\u00f1ol de Estados Unidos"
        },
        {
          name: "Google fran\u00e7ais"
        },
        {
          name: "Google Bahasa Indonesia"
        },
        {
          name: "Google italiano"
        },
        {
          name: "Google Nederlands"
        },
        {
          name: "Google polski"
        },
        {
          name: "Google portugu\u00eas do Brasil"
        },
        {
          name: "Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"
        },
        {
          name: 'Google \u0939\u093f\u0928\u094d\u0926\u0940"'
        },
        {
          name: "Google \u65e5\u672c\u8a9e"
        },
        {
          name: "Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"
        },
        {
          name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
        },
        {
          name: "zh-HK",
          rate: 0.25
        },
        {
          name: "Fallback Chinese (Hong Kong) Female",
          lang: "zh-HK",
          fallbackvoice: !0,
          service: "g1"
        },
        {
          name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
        },
        {
          name: "zh-TW",
          rate: 0.25
        },
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
        {
          name: "he-IL",
          voiceURI: "he-IL",
          lang: "he-IL"
        },
        {
          name: "th-TH",
          voiceURI: "th-TH",
          lang: "th-TH"
        },
        {
          name: "pt-BR",
          voiceURI: "pt-BR",
          lang: "pt-BR"
        },
        {
          name: "sk-SK",
          voiceURI: "sk-SK",
          lang: "sk-SK"
        },
        {
          name: "fr-CA",
          voiceURI: "fr-CA",
          lang: "fr-CA"
        },
        {
          name: "ro-RO",
          voiceURI: "ro-RO",
          lang: "ro-RO"
        },
        {
          name: "no-NO",
          voiceURI: "no-NO",
          lang: "no-NO"
        },
        {
          name: "fi-FI",
          voiceURI: "fi-FI",
          lang: "fi-FI"
        },
        {
          name: "pl-PL",
          voiceURI: "pl-PL",
          lang: "pl-PL"
        },
        {
          name: "de-DE",
          voiceURI: "de-DE",
          lang: "de-DE"
        },
        {
          name: "nl-NL",
          voiceURI: "nl-NL",
          lang: "nl-NL"
        },
        {
          name: "id-ID",
          voiceURI: "id-ID",
          lang: "id-ID"
        },
        {
          name: "tr-TR",
          voiceURI: "tr-TR",
          lang: "tr-TR"
        },
        {
          name: "it-IT",
          voiceURI: "it-IT",
          lang: "it-IT"
        },
        {
          name: "pt-PT",
          voiceURI: "pt-PT",
          lang: "pt-PT"
        },
        {
          name: "fr-FR",
          voiceURI: "fr-FR",
          lang: "fr-FR"
        },
        {
          name: "ru-RU",
          voiceURI: "ru-RU",
          lang: "ru-RU"
        },
        {
          name: "es-MX",
          voiceURI: "es-MX",
          lang: "es-MX"
        },
        {
          name: "zh-HK",
          voiceURI: "zh-HK",
          lang: "zh-HK"
        },
        {
          name: "sv-SE",
          voiceURI: "sv-SE",
          lang: "sv-SE"
        },
        {
          name: "hu-HU",
          voiceURI: "hu-HU",
          lang: "hu-HU"
        },
        {
          name: "zh-TW",
          voiceURI: "zh-TW",
          lang: "zh-TW"
        },
        {
          name: "es-ES",
          voiceURI: "es-ES",
          lang: "es-ES"
        },
        {
          name: "zh-CN",
          voiceURI: "zh-CN",
          lang: "zh-CN"
        },
        {
          name: "nl-BE",
          voiceURI: "nl-BE",
          lang: "nl-BE"
        },
        {
          name: "en-GB",
          voiceURI: "en-GB",
          lang: "en-GB"
        },
        {
          name: "ar-SA",
          voiceURI: "ar-SA",
          lang: "ar-SA"
        },
        {
          name: "ko-KR",
          voiceURI: "ko-KR",
          lang: "ko-KR"
        },
        {
          name: "cs-CZ",
          voiceURI: "cs-CZ",
          lang: "cs-CZ"
        },
        {
          name: "en-ZA",
          voiceURI: "en-ZA",
          lang: "en-ZA"
        },
        {
          name: "en-AU",
          voiceURI: "en-AU",
          lang: "en-AU"
        },
        {
          name: "da-DK",
          voiceURI: "da-DK",
          lang: "da-DK"
        },
        {
          name: "en-US",
          voiceURI: "en-US",
          lang: "en-US"
        },
        {
          name: "en-IE",
          voiceURI: "en-IE",
          lang: "en-IE"
        },
        {
          name: "hi-IN",
          voiceURI: "hi-IN",
          lang: "hi-IN"
        },
        {
          name: "el-GR",
          voiceURI: "el-GR",
          lang: "el-GR"
        },
        {
          name: "ja-JP",
          voiceURI: "ja-JP",
          lang: "ja-JP"
        }
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
          b.push({
            name: a.responsivevoices[f].name
          });
        return b;
      };
      a.speak = function(b, f, h) {
        if (a.iOS9 && !a.iOS9_initialized)
          console.log("Initializing ios9"),
            setTimeout(function() {
              a.speak(b, f, h);
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
          a.msgparameters = h || {};
          a.msgtext = b;
          a.msgvoicename = f;
          a.onstartFired = !1;
          var e = [];
          if (b.length > a.CHARACTER_LIMIT) {
            for (var c = b; c.length > a.CHARACTER_LIMIT; ) {
              var k = c.search(/[:!?.;]+/),
                m = "";
              if (-1 == k || k >= a.CHARACTER_LIMIT) k = c.search(/[,]+/);
              -1 == k && -1 == c.search(" ") && (k = 99);
              if (-1 == k || k >= a.CHARACTER_LIMIT)
                for (
                  var r = c.split(" "), k = 0;
                  k < r.length &&
                  !(m.length + r[k].length + 1 > a.CHARACTER_LIMIT);
                  k++
                )
                  m += (0 != k ? " " : "") + r[k];
              else m = c.substr(0, k + 1);
              c = c.substr(m.length, c.length - m.length);
              e.push(m);
            }
            0 < c.length && e.push(c);
          } else e.push(b);
          a.multipartText = e;
          k = null == f ? a.default_rv : a.getResponsiveVoice(f);
          !0 === k.deprecated &&
            console.warn(
              "ResponsiveVoice: Voice " +
                k.name +
                " is deprecated and will be removed in future releases"
            );
          c = {};
          if (null != k.mappedProfile) c = k.mappedProfile;
          else if (
            ((c.systemvoice = a.getMatchedVoice(k)),
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
          for (k = 0; k < e.length; k++)
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
                H = a.selectBest([
                  c.collectionvoice.volume,
                  c.systemvoice.volume,
                  1
                ]),
                C;
              null != h &&
                ((m *= null != h.pitch ? h.pitch : 1),
                (r *= null != h.rate ? h.rate : 1),
                (H *= null != h.volume ? h.volume : 1),
                (C = h.extraParams || null));
              m /= 2;
              r /= 2;
              H *= 2;
              m = Math.min(Math.max(m, 0), 1);
              r = Math.min(Math.max(r, 0), 1);
              H = Math.min(Math.max(H, 0), 1);
              m =
                a.fallbackServicePath +
                "?t=" +
                encodeURIComponent(e[k]) +
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
                H.toString();
              C && (m += "&extraParams=" + JSON.stringify(C));
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
                (m.text = e[k]),
                (m.lang = a.selectBest([
                  c.collectionvoice.lang,
                  c.systemvoice.lang
                ])),
                (m.rvIndex = k),
                (m.rvTotal = e.length),
                0 == k && (m.onstart = a.speech_onstart),
                (a.msgparameters.onendcalled = !1),
                null != h
                  ? (k < e.length - 1 && 1 < e.length
                      ? ((m.onend = a.onPartEnd),
                        m.hasOwnProperty("addEventListener") &&
                          m.addEventListener("end", a.onPartEnd))
                      : ((m.onend = a.speech_onend),
                        m.hasOwnProperty("addEventListener") &&
                          m.addEventListener("end", a.speech_onend)),
                    (m.onerror =
                      h.onerror ||
                      function(a) {
                        console.log("RV: Unknow Error");
                        console.log(a);
                      }),
                    (m.onpause = h.onpause),
                    (m.onresume = h.onresume),
                    (m.onmark = h.onmark),
                    (m.onboundary = h.onboundary || a.onboundary),
                    (m.pitch = null != h.pitch ? h.pitch : m.pitch),
                    (m.rate = a.iOS
                      ? (null != h.rate ? h.rate * h.rate : 1) * m.rate
                      : (null != h.rate ? h.rate : 1) * m.rate),
                    (m.volume = null != h.volume ? h.volume : m.volume))
                  : ((m.onend = a.speech_onend),
                    (m.onerror = function(a) {
                      console.log("RV: Unknow Error");
                      console.log(a);
                    })),
                a.utterances.push(m),
                0 == k && (a.currentMsg = m),
                console.log(m),
                a.tts_speak(m);
          a.fallbackMode &&
            ((a.fallback_part_index = 0), a.fallback_startPart());
        }
      };
      a.startTimeout = function(b, f) {
        var h = a.msgprofile.collectionvoice.timerSpeed;
        null == a.msgprofile.collectionvoice.timerSpeed && (h = 1);
        if (!(0 >= h)) {
          var e = b.split(/\s+/).length,
            c = (b.match(/[^ ]/gim) || b).length,
            h = (60 / a.WORDS_PER_MINUTE) * h * 1e3 * (c / e / 5.1) * e;
          3 > e && (h = 4e3);
          3e3 > h && (h = 3e3);
          a.timeoutId = setTimeout(f, h);
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
            var f = a.responsivevoices[b], h = 0;
            h < f.voiceIDs.length;
            h++
          ) {
            var e = a.voicecollection[f.voiceIDs[h]];
            if (1 != e.fallbackvoice) {
              var c = a.getSystemVoice(e.name);
              if (null != c) {
                f.mappedProfile = {
                  systemvoice: c,
                  collectionvoice: e
                };
                break;
              }
            } else {
              f.mappedProfile = {
                systemvoice: {},
                collectionvoice: e
              };
              break;
            }
          }
      };
      a.getMatchedVoice = function(b) {
        for (var f = 0; f < b.voiceIDs.length; f++) {
          var h = a.getSystemVoice(a.voicecollection[b.voiceIDs[f]].name);
          if (null != h) return h;
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
          for (var f = a[b + "_callbacks"], h = 0; h < f.length; h++) f[h]();
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
    b = a.extend(
      {
        handle: "",
        cursor: "move"
      },
      b
    );
    return ("" === b.handle ? this : this.find(b.handle))
      .css("cursor", b.cursor)
      .on("mousedown", function(f) {
        var h =
            "" === b.handle
              ? a(this).addClass("draggable")
              : a(this)
                  .addClass("active-handle")
                  .parent()
                  .addClass("draggable"),
          e = h.css("z-index"),
          c = h.outerHeight(),
          k = h.outerWidth(),
          m = h.offset().top + c - f.pageY,
          r = h.offset().left + k - f.pageX;
        h.css("z-index", 1e5)
          .parents()
          .on("mousemove", function(b) {
            a(".draggable")
              .offset({
                top: b.pageY + m - c,
                left: b.pageX + r - k
              })
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
  var b, f, h, e, c, k, m, r, H, C;
  m = function(a) {
    var c, e, b, f;
    b = !1;
    c = ["Webkit", "Moz", "ms", "O"];
    e = document.createElement("div");
    a = a.toLowerCase();
    void 0 !== e.style[a] && (b = !0);
    if (!1 === b)
      for (a = a.charAt(0).toUpperCase() + a.substr(1), f = 0; f < c.length; ) {
        if (void 0 !== e.style[c[f] + a]) {
          b = !0;
          break;
        }
        f++;
      }
    return b;
  };
  h = function(a, c) {
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
  H = function(a, c) {
    c.animate &&
      (m("animation") && m("transform")
        ? a.css("animation", c.animation_show)
        : (a.hide(), a.fadeIn(500)));
  };
  r = function(e) {
    c(a.extend({}, k, e));
  };
  c = function(c) {
    var e, b;
    b = a(c.template);
    c.theme = a.notiny.themes[c.theme];
    b.addClass(c.theme.notification_class);
    e = b.find(".notiny-text");
    e.addClass(c.theme.text_class);
    e.html(c.text);
    e = b.find(".notiny-img");
    void 0 !== c.image
      ? (b.addClass("notiny-with-img"),
        e.css("display", "block"),
        e.addClass(c.theme.image_class),
        e.attr("src", c.image))
      : (e.hide(), b.addClass("notiny-without-img"));
    -1 === c.position.indexOf("fluid") && b.css("width", c.width);
    b.data("settings", c);
    f(b, c);
    return b;
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
        h(a, c);
        return !1;
      }));
    c.autohide &&
      setTimeout(function() {
        h(a, c);
      }, c.delay + 500);
    H(a, c);
  };
  a.notiny = function(c) {
    b = a('<div class="notiny" />').appendTo(a("body"));
    k = {
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
    C = {
      container_class: "",
      notification_class: "",
      image_class: "",
      text_class: ""
    };
    e = {
      "left-top": a("<div />", {
        class: "notiny-container",
        css: {
          top: 10,
          left: 10
        }
      }).appendTo(b),
      "left-bottom": a("<div />", {
        class: "notiny-container",
        css: {
          bottom: 10,
          left: 10
        }
      }).appendTo(b),
      "right-top": a("<div />", {
        class: "notiny-container",
        css: {
          top: 10,
          right: 10
        }
      }).appendTo(b),
      "right-bottom": a("<div />", {
        class: "notiny-container",
        css: {
          bottom: 10,
          right: 10
        }
      }).appendTo(b),
      "fluid-top": a("<div />", {
        class: "notiny-container notiny-container-fluid-top",
        css: {
          top: 0,
          left: 0,
          right: 0
        }
      }).appendTo(b),
      "fluid-bottom": a("<div />", {
        class: "notiny-container notiny-container-fluid-bottom",
        css: {
          bottom: 0,
          left: 0,
          right: 0
        }
      }).appendTo(b)
    };
    r(c);
    return this;
  };
  a.notiny.addTheme = function(c, b) {
    var e;
    e = a.extend({}, C, b);
    (this.themes = this.themes || {})[c] = e;
  };
  a.notiny.close = function(a) {
    h(a, a.data("settings"));
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
            h = a[b].getElementsByTagName("ul"),
            e = 0;
          e < h.length;
          e++
        )
          if (h[e].className == kmrSimpleTabs.sbNavClass)
            for (
              var c = h[e].getElementsByTagName("a"), k = 0;
              k < c.length;
              k++
            ) {
              c[k].setAttribute("id", f + "_a_" + k);
              if (kmrSimpleTabs.readCookie("simpleTabsCookie")) {
                var m = kmrSimpleTabs.readCookie("simpleTabsCookie").split("_"),
                  r = m[1],
                  m = m[2];
                c[k].parentNode.parentNode.parentNode.getAttribute("id") ==
                kmrSimpleTabs.sbIdPrefix + r
                  ? c[k].getAttribute("id") ==
                    kmrSimpleTabs.sbIdPrefix + r + "_a_" + m
                    ? (c[k].className = kmrSimpleTabs.sbCurrentNavClass)
                    : (c[k].className = "")
                  : (c[0].className = kmrSimpleTabs.sbCurrentNavClass);
              } else c[0].className = kmrSimpleTabs.sbCurrentNavClass;
              c[k].onclick = function() {
                kmrSimpleTabs.setCurrent(this, "simpleTabsCookie");
                return !1;
              };
            }
        h = a[b].getElementsByTagName("div");
        for (c = e = 0; c < h.length; c++)
          h[c].className == kmrSimpleTabs.sbContentClass &&
            (h[c].setAttribute("id", f + "_div_" + [e]),
            kmrSimpleTabs.readCookie("simpleTabsCookie")
              ? ((m = kmrSimpleTabs.readCookie("simpleTabsCookie").split("_")),
                (r = m[1]),
                (m = m[2]),
                h[c].parentNode.getAttribute("id") ==
                kmrSimpleTabs.sbIdPrefix + r
                  ? h[c].getAttribute("id") ==
                    kmrSimpleTabs.sbIdPrefix + r + "_div_" + m
                    ? (h[c].className =
                        kmrSimpleTabs.sbContentClass +
                        " " +
                        kmrSimpleTabs.sbCurrentTabClass)
                    : (h[c].className = kmrSimpleTabs.sbContentClass)
                  : (h[0].className =
                      kmrSimpleTabs.sbContentClass +
                      " " +
                      kmrSimpleTabs.sbCurrentTabClass))
              : (h[0].className =
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
        h = f + "_a_",
        h = a.getAttribute("id").replace(h, ""),
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
        k = 0;
      k < e.length;
      k++
    )
      c.test(e[k].className) && (e[k].className = kmrSimpleTabs.sbContentClass);
    document.getElementById(f + "_div_" + h).className =
      kmrSimpleTabs.sbContentClass + " " + kmrSimpleTabs.sbCurrentTabClass;
    f = f.replace(new RegExp(kmrSimpleTabs.sbIdPrefix), "");
    this.createCookie(b, "simpleTabsCookie_" + f + "_" + h, 1);
  },
  createCookie: function(a, b, f) {
    if (f) {
      var h = new Date();
      h.setTime(h.getTime() + 864e5 * f);
      f = "; expires=" + h.toGMTString();
    } else f = "";
    document.cookie = a + "=" + b + f + "; path=/";
  },
  readCookie: function(a) {
    a += "=";
    for (var b = document.cookie.split(";"), f = 0; f < b.length; f++) {
      for (var h = b[f]; " " == h.charAt(0); ) h = h.substring(1, h.length);
      if (0 == h.indexOf(a)) return h.substring(a.length, h.length);
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
function speakTS(a, b) {
  void 0 == b && $('article[id="' + a + '"] .en').length
    ? responsiveVoice.speak(
        $('article[id="' + a + '"] .en').text(),
        "US English Female",
        {
          volume: 1,
          rate: 1
        }
      )
    : ((a = a.replace(/'/g, "\\'")),
      "uk" == b
        ? responsiveVoice.speak(a, "UK English Male", {
            volume: 1,
            rate: 1
          })
        : "us" == b
        ? responsiveVoice.speak(a, "US English Female", {
            volume: 1,
            rate: 1
          })
        : "fr" == b
        ? responsiveVoice.speak(a, "French Female", {
            volume: 1,
            rate: 1
          })
        : "jp" == b &&
          responsiveVoice.speak(a, "Japanese Female", {
            volume: 1,
            rate: 1
          }));
}
