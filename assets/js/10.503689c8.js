(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{311:function(r,e,t){},346:function(r,e,t){"use strict";var n=t(311);t.n(n).a},363:function(r,e,t){"use strict";t.r(e);t(68),t(97);var n=t(42),o={components:{QrcodeDropZone:t(307).b},data:function(){return{result:null,error:null,dragover:!1}},methods:{onDetect:function(r){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r;case 3:n=t.sent,o=n.content,e.result=o,e.error=null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),"DropImageFetchError"===t.t0.name?e.error="Sorry, you can't load cross-origin images :/":"DropImageDecodeError"===t.t0.name?e.error="Ok, that's not an image. That can't be decoded.":e.error="Ups, what kind of error is this?! "+t.t0.message;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},logErrors:function(r){r.catch(console.error)},onDragOver:function(r){this.dragover=r}}},a=(t(346),t(41)),s=Object(a.a)(o,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("p",{staticClass:"decode-result"},[r._v("Last result: "),t("b",[r._v(r._s(r.result))])]),r._v(" "),null!==r.error?t("p",{staticClass:"drop-error"},[r._v("\n    "+r._s(r.error)+"\n  ")]):r._e(),r._v(" "),t("qrcode-drop-zone",{on:{detect:r.onDetect,dragover:r.onDragOver,init:r.logErrors}},[t("div",{staticClass:"drop-area",class:{dragover:r.dragover}},[r._v("\n      DROP SOME IMAGES HERE\n    ")])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);