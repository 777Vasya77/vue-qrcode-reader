(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{360:function(e,t,n){"use strict";n.r(t);n(98),n(182),n(99);var r={components:{QrcodeStream:n(307).c},data:function(){var e=[{text:"None",value:!1},{text:"Red square (default)",value:!0},{text:"Green text",value:this.paintGreenText},{text:"Blue dots",value:this.paintBlueDots}];return{selected:e[2],options:e,result:null}},methods:{paintBlueDots:function(e,t){var n=[e.topLeftFinderPattern,e.topRightFinderPattern,e.bottomLeftFinderPattern];t.fillStyle="#007bff",n.forEach((function(e){var n=e.x,r=e.y;t.fillRect(n-5,r-5,10,10)}))},paintGreenText:function(e,t){var n=[e.topLeftCorner,e.topRightCorner,e.bottomLeftCorner,e.bottomRightCorner],r=n.reduce((function(e,t){return t.x+e}),0)/4,o=n.reduce((function(e,t){return t.y+e}),0)/4;t.font="bold 24px sans-serif",t.textAlign="center",t.lineWidth=3,t.strokeStyle="#35495e",t.strokeText(this.result,r,o),t.fillStyle="#5cb984",t.fillText(this.result,r,o)},onDecode:function(e){this.result=e},logErrors:function(e){e.catch(console.error)}}},o=n(41),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("\n    Track function:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.options,(function(t){return n("option",{domProps:{value:t}},[e._v("\n        "+e._s(t.text)+"\n      ")])})),0)]),e._v(" "),n("p",{staticClass:"decode-result"},[e._v("\n    Last result: "),n("b",[e._v(e._s(e.result))])]),e._v(" "),n("qrcode-stream",{key:e._uid,attrs:{track:e.selected.value},on:{decode:e.onDecode,init:e.logErrors}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);