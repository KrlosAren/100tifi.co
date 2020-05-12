<<<<<<< HEAD
!(function (n) {
  var e = {};
  function t(a) {
    if (e[a]) return e[a].exports;
    var r = (e[a] = { i: a, l: !1, exports: {} });
    return n[a].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function (n, e, a) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: a });
    }),
    (t.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (t.t = function (n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var a = Object.create(null);
      if (
        (t.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var r in n)
          t.d(
            a,
            r,
            function (e) {
              return n[e];
            }.bind(null, r)
          );
      return a;
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, "a", e), e;
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (n, e, t) {
    "use strict";
    t.r(e);
    var a = () =>
      '\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">\n            100tifi.co\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    </div>\n  ';
    const r = "https://rickandmortyapi.com/api/character/";
    var i = async (n) => {
      const e = n ? `${r}${n}` : r;
      try {
        const n = await fetch(e);
        return await n.json();
      } catch (n) {
        console.log("Fetch Error", n);
      }
    };
    var c = () =>
      location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
    var o = () =>
      '\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ';
    var s = (n) => {
      if (n.length <= 3) {
        return "/" === n ? n : "/:id";
      }
      return "/" + n;
    };
    const l = {
      "/": async () =>
        `\n    <div class="Characters">\n      ${(await i()).results
          .map(
            (n) =>
              `\n        <article class="Character-item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `
          )
          .join("")}\n    </div>\n  `,
      "/:id": async () => {
        const n = c(),
          e = await i(n);
        return `\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${e.image}" alt="${e.name}">\n        <h2>${e.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: <span>${e.episode.length}</span></h3>\n        <h3>Status: <span>${e.status}</span></h3>\n        <h3>Species: <span>${e.species}</span></h3>\n        <h3>Gender: <span>${e.gender}</span></h3>\n        <h3>Origin: <span>${e.origin.name}</span></h3>\n        <h3>Last Location: ${e.location.name}</h3>\n      </article>\n    </div>\n  `;
      },
      "/contact": "Contact",
    };
    var d = async () => {
      const n = document.getElementById("header"),
        e = document.getElementById("content");
      n.innerHTML = await a();
      let t = c(),
        r = await s(t),
        i = l[r] ? l[r] : o;
      e.innerHTML = await i();
    };
    window.addEventListener("load", d),
      window.addEventListener("hashchange", d);
  },
]);
=======
!function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var a=()=>'\n\t\t<div class="Header-main">\n\t\t\t<div class="Header-logo">\n\t\t\t\t<h1>\n\t\t\t\t\t<a href="/">\n\t\t\t\t\t\t100tifi.co\n\t\t\t\t\t</a>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t\t<div class="Header-nav">\n\t\t\t\t<a href="#/about/">\n\t\t\t\t\tAbout\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t';const r="https://rickandmortyapi.com/api/character/";var i=async t=>{const n=t?`${r}${t}`:r;try{const t=await fetch(n);return await t.json()}catch(t){console.log("Fetch Error",t)}};var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var s=()=>'\n        <div class="Error404">\n            <h2>Error404</h2>\n        </div>\n    ';var o=t=>{if(t.length<=3){return"/"===t?t:"/:id"}return"/"+t};const l={"/":async()=>`\n    <div class="Characters">\n    ${(await i()).results.map(t=>`\n        <article class="Character-item">\n            <a href="#/${t.id}">\n                <img src="${t.image}" alt="${t.name}">\n                <h2>${t.name}</h2>\n            </a>\n        </article>    \n    `).join("")}\n    </div>   \n    `,"/:id":async()=>{const t=await c(),n=await i(t);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${n.image}" alt="${n.name}">\n                <h2>${n.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${n.episode.length}</span></h3>\n                <h3>Status: <span>${n.status}</span></h3>\n                <h3>Species: <span>${n.species}</span></h3>\n                <h3>Gender: <spa>${n.gender}</span></h3>\n                <h3>Origin: <span>${n.origin.name}</spa></h3>\n                <h3>Last Location: <span>${n.location.name}</spa></h3>\n            </article>\n        </div>\n    `},"/contact":"Contact"};var d=async()=>{const t=document.getElementById("header"),n=document.getElementById("content");t.innerHTML=await a();let e=c(),r=await o(e),i=l[r]?l[r]:s;n.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);
>>>>>>> pruebas
