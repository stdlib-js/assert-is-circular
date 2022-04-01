// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";var t=r;function n(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)}function e(r,t){var n;for(n=0;n<r.length;n++)if(r[n]===t)return!0;return!1}function u(r,f){var i,o,s;if(f.push(r),0===(i=t(r)).length)return!1;for(s=0;s<i.length;s++)if(n(o=r[i[s]])&&(e(f,o)||u(o,f)))return!0;return f.pop(r),!1}var f=function(r){return!!n(r)&&u(r,[])};export{f as default};
//# sourceMappingURL=index.mjs.map
