(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{307:function(e,t,r){"use strict";r.d(t,"c",(function(){return z})),r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return Q}));r(175),r(9),r(97);var n=r(42),a=r(342),i=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t()).postMessage(r,[r.data.buffer]),e.next=4,Object(a.a)(n,"message");case 4:return i=e.sent,n.terminate(),e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();r(24),r(98),r(25),r(99),r(30),r(357);var o=r(406),c=r(96),s=r(28),u=r(63),l=(r(68),r(165)),d=r(168),f=r(405),h=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this,"can't process cross-origin image")).name="DropImageFetchError",e}return r}(Object(f.a)(Error)),p=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this,"drag-and-dropped file is not of type image and can't be decoded")).name="DropImageDecodeError",e}return r}(Object(f.a)(Error)),m=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this,"this browser has no Stream API support")).name="StreamApiNotSupportedError",e}return r}(Object(f.a)(Error)),v=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this,"camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.")).name="InsecureContextError",e}return r}(Object(f.a)(Error)),g=(r(185),r(174),document.createElement("canvas")),b=g.getContext("2d");function w(e,t,r){var n=Math.min(1,g.width/t,g.height/r),a=n*t,i=n*r;return b.drawImage(e,0,0,a,i),b.getImageData(0,0,a,i)}function x(e){return w(e,e.naturalWidth,e.naturalHeight)}function k(e){return j.apply(this,arguments)}function j(){return(j=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith("http")||!1!==t.includes(location.host)){e.next=2;break}throw new h;case 2:return(r=document.createElement("img")).src=t,e.next=6,Object(a.a)(r,"load");case 6:return e.abrupt("return",x(r));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return y.apply(this,arguments)}function y(){return(y=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/image.*/.test(t.type)){e.next=10;break}return(r=new FileReader).readAsDataURL(t),e.next=5,Object(a.a)(r,"load");case 5:return n=e.sent,i=n.target.result,e.abrupt("return",k(i));case 10:throw new p;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.width=1920,g.height=1080;var R,D,F,C=r(398),I=r(399),S=r(400),L=r(401),E=r(325),T=(R=function(){switch(Object(E.c)(window).browser){case"chrome":Object(C.a)(window);break;case"firefox":Object(S.a)(window);break;case"edge":Object(I.a)(window);break;case"safari":Object(L.a)(window);break;default:throw new m}},D=!1,F=void 0,function(){return D||(F=R.apply(void 0,arguments),D=!0),F}),q=function(){function e(t,r){Object(s.a)(this,e),this.videoEl=t,this.stream=r}return Object(u.a)(e,[{key:"stop",value:function(){var e=this;this.videoEl.srcObject=null,this.stream.getTracks().forEach((function(t){e.stream.removeTrack(t),t.stop()}))}},{key:"captureFrame",value:function(){return w(e=this.videoEl,e.videoWidth,e.videoHeight);var e}},{key:"getCapabilities",value:function(){var e,t,r=this.stream.getVideoTracks(),n=Object(c.a)(r,1)[0];return null!==(e=null==n||null===(t=n.getCapabilities)||void 0===t?void 0:t.call(n))&&void 0!==e?e:{}}}]),e}(),P=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:if(!((r=e.sent.filter((function(e){return"videoinput"===e.kind}))).length>2)){e.next=15;break}n=r[0],a=r[r.length-1],e.t0=t,e.next="auto"===e.t0?9:"rear"===e.t0?10:"front"===e.t0?11:12;break;case 9:case 10:return e.abrupt("return",{deviceId:{exact:a.deviceId}});case 11:return e.abrupt("return",{deviceId:{exact:n.deviceId}});case 12:return e.abrupt("return",void 0);case 13:e.next=22;break;case 15:e.t1=t,e.next="auto"===e.t1?18:"rear"===e.t1?19:"front"===e.t1?20:21;break;case 18:return e.abrupt("return",{facingMode:{ideal:"environment"}});case 19:return e.abrupt("return",{facingMode:{exact:"environment"}});case 20:return e.abrupt("return",{facingMode:{exact:"user"}});case 21:return e.abrupt("return",void 0);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e,t){return $.apply(this,arguments)};function $(){return($=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,i,s,u,l,d,f,h,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.camera,u=r.torch,!0===window.isSecureContext){e.next=3;break}throw new v;case 3:if(void 0!==(null===(n=navigator)||void 0===n||null===(i=n.mediaDevices)||void 0===i?void 0:i.getUserMedia)){e.next=5;break}throw new m;case 5:return e.next=7,T();case 7:return e.t0=o.a,e.t1={width:{min:360,ideal:640,max:1920},height:{min:240,ideal:480,max:1080}},e.next=11,P(s);case 11:return e.t2=e.sent,e.t3=(0,e.t0)(e.t1,e.t2),l={audio:!1,video:e.t3},e.next=16,navigator.mediaDevices.getUserMedia(l);case 16:return d=e.sent,void 0!==t.srcObject?t.srcObject=d:void 0!==t.mozSrcObject?t.mozSrcObject=d:window.URL.createObjectURL?t.src=window.URL.createObjectURL(d):window.webkitURL?t.src=window.webkitURL.createObjectURL(d):t.src=d,e.next=20,Object(a.a)(t,"loadeddata");case 20:return e.next=22,Object(a.b)(500);case 22:return u&&(f=d.getVideoTracks(),h=Object(c.a)(f,1),p=h[0],p.getCapabilities().torch?p.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")),e.abrupt("return",new q(t,d));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={methods:{onDetect:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.$emit("detect",e),r.prev=1,r.next=4,e;case 4:n=r.sent,null!==(a=n.content)&&t.$emit("decode",a),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}},_=r(41),H=Object(_.a)(M,void 0,void 0,!1,null,null,null).exports,A=(r(43),r(100),r(317),r(324),function(){return e=function(){self.importScripts("https://cdn.jsdelivr.net/npm/jsqr@1.3.1/dist/jsQR.min.js"),self.addEventListener("message",(function(e){var t=e.data,r=null;try{r=jsQR(t.data,t.width,t.height)}catch(e){if(!(e instanceof RangeError))throw e}var n=null,a=null;null!==r&&(n=r.data,a=r.location);var i={content:n,location:a,imageData:t};self.postMessage(i,[t.data.buffer])}))}.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],new Worker(URL.createObjectURL(new Blob([e],{type:"text/javascript"})));var e}),W={name:"qrcode-stream",mixins:[H],props:{camera:{type:String,default:"auto",validator:function(e){return["auto","rear","front","off"].includes(e)}},torch:{type:Boolean,default:!1},track:{type:[Function,Boolean],default:!0},worker:{type:Function,default:A}},data:function(){return{cameraInstance:null,destroyed:!1,stopScanning:function(){}}},computed:{shouldStream:function(){return!1===this.destroyed&&"off"!==this.camera},shouldScan:function(){return!0===this.shouldStream&&null!==this.cameraInstance},scanInterval:function(){return!1===this.track?500:40},trackRepaintFunction:function(){return!0===this.track?(e={color:"#ff0000"}.color,function(t,r){var n=t.topLeftCorner,a=t.topRightCorner,i=t.bottomLeftCorner,o=t.bottomRightCorner;r.strokeStyle=e,r.beginPath(),r.moveTo(n.x,n.y),r.lineTo(i.x,i.y),r.lineTo(o.x,o.y),r.lineTo(a.x,a.y),r.lineTo(n.x,n.y),r.closePath(),r.stroke()}):!1===this.track?void 0:this.track;var e}},watch:{shouldStream:function(e){if(!e){var t=this.cameraInstance.captureFrame();this.paintPauseFrame(t)}},shouldScan:function(e){e?(this.clearPauseFrame(),this.clearTrackingLayer(),this.startScanning()):this.stopScanning()},torch:function(){this.init()},camera:function(){this.init()}},mounted:function(){this.init()},beforeDestroy:function(){this.beforeResetCamera(),this.stopScanning(),this.destroyed=!0},methods:{init:function(){var e=this,t=Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.beforeResetCamera(),"off"!==e.camera){t.next=6;break}return e.cameraInstance=null,t.abrupt("return",{capabilities:{}});case 6:return t.next=8,U(e.$refs.video,{camera:e.camera,torch:e.torch});case 8:return e.cameraInstance=t.sent,r=e.cameraInstance.getCapabilities(),e.destroyed&&e.cameraInstance.stop(),t.abrupt("return",{capabilities:r});case 12:case"end":return t.stop()}}),t)})))();this.$emit("init",t)},startScanning:function(){var e=this;this.stopScanning=function(e,t,r){var n=r.detectHandler,a=r.locateHandler,i=r.minDelay,o=null,c=null,s=performance.now(),u=e(),l=!1,d=!0;u.onmessage=function(e){l=!1;var t=e.data,r=t.content,i=t.location;null!==r&&r!==o&&n(e.data),i!==c&&a(i),o=r||o,c=i};return function e(r){if(d){if(window.requestAnimationFrame(e),r-s>=i&&(s=r,!1===l)){l=!0;var n=t.captureFrame();u.postMessage(n,[n.data.buffer])}}else u.terminate()}(),function(){d=!1}}(this.worker,this.cameraInstance,{detectHandler:function(t){e.onDetect(Promise.resolve(t))},locateHandler:this.onLocate,minDelay:this.scanInterval})},beforeResetCamera:function(){null!==this.cameraInstance&&(this.cameraInstance.stop(),this.cameraInstance=null)},onLocate:function(e){void 0===this.trackRepaintFunction||null===e?this.clearTrackingLayer():this.repaintTrackingLayer(e)},repaintTrackingLayer:function(e){var t=this,r=this.$refs.video,n=this.$refs.trackingLayer,a=n.getContext("2d"),i=r.offsetWidth,o=r.offsetHeight,c=r.videoWidth,s=r.videoHeight,u=Math.max(i/c,o/s),l=c*u,d=s*u,f=l/c,h=d/s,p=(i-l)/2,m=(o-d)/2,v={};for(var g in e)v[g]={x:Math.floor(e[g].x*f+p),y:Math.floor(e[g].y*h+m)};window.requestAnimationFrame((function(){n.width=i,n.height=o,t.trackRepaintFunction(v,a)}))},clearTrackingLayer:function(){var e=this.$refs.trackingLayer,t=e.getContext("2d");window.requestAnimationFrame((function(){t.clearRect(0,0,e.width,e.height)}))},paintPauseFrame:function(e){var t=this.$refs.pauseFrame,r=t.getContext("2d");window.requestAnimationFrame((function(){t.width=e.width,t.height=e.height,r.putImageData(e,0,0)}))},clearPauseFrame:function(){var e=this.$refs.pauseFrame,t=e.getContext("2d");window.requestAnimationFrame((function(){t.clearRect(0,0,e.width,e.height)}))}}},z=(r(402),Object(_.a)(W,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"qrcode-stream-wrapper"},[t("video",{directives:[{name:"show",rawName:"v-show",value:this.shouldScan,expression:"shouldScan"}],ref:"video",staticClass:"qrcode-stream-camera",attrs:{autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}}),this._v(" "),t("canvas",{directives:[{name:"show",rawName:"v-show",value:!this.shouldScan,expression:"!shouldScan"}],ref:"pauseFrame",staticClass:"qrcode-stream-camera"}),this._v(" "),t("canvas",{ref:"trackingLayer",staticClass:"qrcode-stream-overlay"}),this._v(" "),t("div",{staticClass:"qrcode-stream-overlay"},[this._t("default")],2)])}),[],!1,null,"7a81005d",null).exports),V=(r(69),r(39)),B={name:"qrcode-capture",mixins:[H],props:{worker:{type:Function,default:A}},methods:{onChangeInput:function(e){Object(V.a)(e.target.files).map(this.processFile).forEach(this.onDetect)},processFile:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O(e);case 2:return n=r.sent,r.next=5,i(t.worker,n);case 5:return a=r.sent,r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()}}},N=Object(_.a)(B,(function(){var e=this.$createElement;return(this._self._c||e)("input",{attrs:{type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},on:{change:this.onChangeInput}})}),[],!1,null,null,null).exports,J={name:"qrcode-drop-zone",mixins:[H],props:{worker:{type:Function,default:A}},methods:{onDragOver:function(e){this.$emit("dragover",e)},onDrop:function(e){var t=this,r=e.dataTransfer;this.onDragOver(!1);var n=Object(V.a)(r.files),a=r.getData("text/uri-list");n.forEach((function(e){t.onDetect(t.processFile(e))})),""!==a&&this.onDetect(this.processUrl(a))},processFile:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O(e);case 2:return n=r.sent,r.next=5,i(t.worker,n);case 5:return a=r.sent,r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()},processUrl:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k(e);case 2:return n=r.sent,r.next=5,i(t.worker,n);case 5:return a=r.sent,r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()}}},Q=Object(_.a)(J,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{on:{drop:function(t){return t.preventDefault(),t.stopPropagation(),e.onDrop(t)},dragenter:function(t){return t.preventDefault(),t.stopPropagation(),e.onDragOver(!0)},dragleave:function(t){return t.preventDefault(),t.stopPropagation(),e.onDragOver(!1)},dragover:function(e){e.preventDefault(),e.stopPropagation()}}},[e._t("default")],2)}),[],!1,null,null,null).exports;var G={install:function(e){e.component("qrcode-stream",z),e.component("qrcode-capture",N),e.component("qrcode-drop-zone",Q)}},K=null;"undefined"!=typeof window?K=window.Vue:"undefined"!=typeof global&&(K=global.Vue),K&&K.use(G)},343:function(e,t,r){},402:function(e,t,r){"use strict";var n=r(343);r.n(n).a}}]);