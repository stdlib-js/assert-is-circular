"use strict";var s=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var c=s(function(y,a){
var o=require('@stdlib/utils-keys/dist');function u(r){var t=typeof r;return r!==null&&(t==="object"||t==="function")}function l(r,t){var e;for(e=0;e<r.length;e++)if(r[e]===t)return!0;return!1}function f(r,t){var e,i,n;if(t.push(r),e=o(r),e.length===0)return!1;for(n=0;n<e.length;n++)if(i=r[e[n]],u(i)&&(l(t,i)||f(i,t)))return!0;return t.pop(r),!1}function p(r){return u(r)?f(r,[]):!1}a.exports=p
});var v=c();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
