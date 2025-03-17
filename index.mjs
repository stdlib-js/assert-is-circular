// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";function n(t){var n=typeof t;return null!==t&&("object"===n||"function"===n)}function r(t,n){var r;for(r=0;r<t.length;r++)if(t[r]===n)return!0;return!1}function e(u,f){var i,o,s;if(f.push(u),0===(i=t(u)).length)return!1;for(s=0;s<i.length;s++)if(n(o=u[i[s]])&&(r(f,o)||e(o,f)))return!0;return f.pop(u),!1}function u(t){return!!n(t)&&e(t,[])}export{u as default};
//# sourceMappingURL=index.mjs.map
