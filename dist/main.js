!(function (t) {
  var n = {};
  function e(a) {
    if (n[a]) return n[a].exports;
    var r = (n[a] = { i: a, l: !1, exports: {} });
    return t[a].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, a) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: a });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (e.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var r in t)
          e.d(
            a,
            r,
            function (n) {
              return t[n];
            }.bind(null, r)
          );
      return a;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (t, n, e) {
    "use strict";
    e.r(n);
    var a = () =>
      '\n\t\t<div class="Header-main">\n\t\t\t<div class="Header-logo">\n\t\t\t\t<h1>\n\t\t\t\t\t<a href="/">\n\t\t\t\t\t\t100tifi.co\n\t\t\t\t\t</a>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t\t<div class="Header-nav">\n\t\t\t\t<a href="#/about/">\n\t\t\t\t\tAbout\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t';
    const r = "https://rickandmortyapi.com/api/character/";
    var i = async (t) => {
      const n = t ? `${r}${t}` : r;
      try {
        const t = await fetch(n);
        return await t.json();
      } catch (t) {
        console.log("Fetch Error", t);
      }
    };
    var c = () =>
      location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
    var s = () =>
      '\n        <div class="Error404">\n            <h2>Error404</h2>\n        </div>\n    ';
    var o = (t) => {
      if (t.length <= 3) {
        return "/" === t ? t : "/:id";
      }
      return "/" + t;
    };
    const l = {
      "/": async () =>
        `\n    <div class="Characters">\n    ${(await i()).results
          .map(
            (t) =>
              `\n        <article class="Character-item">\n            <a href="#/${t.id}">\n                <img src="${t.image}" alt="${t.name}">\n                <h2>${t.name}</h2>\n            </a>\n        </article>    \n    `
          )
          .join("")}\n    </div>   \n    `,
      "/:id": async () => {
        const t = await c(),
          n = await i(t);
        return `\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${n.image}" alt="${n.name}">\n                <h2>${n.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${n.episode.length}</span></h3>\n                <h3>Status: <span>${n.status}</span></h3>\n                <h3>Species: <span>${n.species}</span></h3>\n                <h3>Gender: <spa>${n.gender}</span></h3>\n                <h3>Origin: <span>${n.origin.name}</spa></h3>\n                <h3>Last Location: <span>${n.location.name}</spa></h3>\n            </article>\n        </div>\n    `;
      },
      "/contact": "Contact",
    };
    var d = async () => {
      const t = document.getElementById("header"),
        n = document.getElementById("content");
      t.innerHTML = await a();
      let e = c(),
        r = await o(e),
        i = l[r] ? l[r] : s;
      n.innerHTML = await i();
    };
    window.addEventListener("load", d),
      window.addEventListener("hashchange", d);
  },
]);
