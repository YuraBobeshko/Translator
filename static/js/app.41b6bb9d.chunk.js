(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{78:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(0),i=n.n(r),a=n(18),o=n.n(a),c=n(33),u=n.n(c),l=n(79),s=n(2),p=n(14),f=function(e){var t=e.volum,n=e.sensitivityMicrophone,r=e.setSensitivityMicrophone;return i.a.createElement(s.a,null,i.a.createElement(p.a,null,t),i.a.createElement("input",{readOnly:!0,value:t,type:"range",min:"1",max:"255"}),i.a.createElement("input",{onChange:function(e){var t=e.target;return r(+t.value)},value:n,type:"range",min:"1",max:"255"}),i.a.createElement(p.a,null,n))},g=n(25),y=n(73),b=n(3),m=b.a.create({wrapperField:{width:500,height:700,backgroundColor:"yellow"},block:{width:100,height:100,right:"50%",transform:" translate(50%)",backgroundColor:"#911E42",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"},line:{width:500,height:10,backgroundColor:"#000",position:"absolute",zIndex:-1},text:{color:"#FFF44F",fontSize:22}}),v=function(e){var t=e.height,n=e.onLose,a=e.isPlaying;console.log(a);var o=Object(r.useRef)(new g.a.Value(0)).current;Object(r.useEffect)((function(){g.a.loop(g.a.timing(o,{toValue:1,duration:2e3,easing:y.a.linear,usenativedriver:!0}),{usenativedriver:!0}).start()}),[o]);var c=Object(r.useRef)(),u=Object(r.useRef)(),l=Object(r.useRef)();return Object(r.useEffect)((function(){c.current&&u.current&&l.current&&a&&(u.current.getBoundingClientRect().bottom>c.current.getBoundingClientRect().top||c.current.getBoundingClientRect().bottom>l.current.getBoundingClientRect().top)&&(n(),alert("\u043b\u0443\u0437\u0435\u0440"))}),[t]),i.a.createElement(s.a,{style:m.wrapperField},i.a.createElement(g.a.View,{ref:u,style:[m.line,{top:o.interpolate({inputRange:[0,1],outputRange:[1,3]}).interpolate({inputRange:[1,2,3],outputRange:[50,200,50]})}]}),i.a.createElement(s.a,{ref:c,style:[m.block,{top:1.5*t}]},i.a.createElement(p.a,{style:m.text},t)),i.a.createElement(g.a.View,{ref:l,style:[m.line,{top:o.interpolate({inputRange:[0,1],outputRange:[1,3]}).interpolate({inputRange:[1,2,3],outputRange:[450,600,450]})}]}))},h=b.a.create({wrapperField:{display:"flex",flexDirection:"row"}}),O=n(52),d=n.n(O);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t){var n,i,a,o,c,l=Object(r.useState)(null),s=u()(l,2),p=s[0],f=s[1],g=function e(){a.getByteFrequencyData(o),t((function(e){var t=function(e,t){var n=e.reduce((function(e,t){return e+t}),0)/e.length;return{value:n>t?-1:1,volum:n}}(o,e.sensitivityMicrophone),n=t.value,r=t.volum,i=e.isPlaying?e.height+n:e.height;return P(P({},e),{},{height:i,volum:r})})),n=requestAnimationFrame(e)};return Object(r.useEffect)((function(){p&&(i=new(window.AudioContext||window.webkitAudioContext),(a=i.createAnalyser()).fftSize=32,o=new Uint8Array(a.frequencyBinCount),(c=i.createMediaStreamSource(p)).connect(a),n=requestAnimationFrame(g))}),[p]),Object(r.useEffect)((function(){return function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(navigator.mediaDevices.getUserMedia({audio:!0,video:!1}));case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),null,null,null,Promise)}(),function(){cancelAnimationFrame(n),a.disconnect(),c.disconnect()}}),[]),e};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=Object(r.useState)({height:200,volum:1,isPlaying:!1,sensitivityMicrophone:40}),t=u()(e,2),n=t[0],a=t[1],o=E(n,a),c=o.height,p=o.volum,g=o.sensitivityMicrophone,y=o.isPlaying,b=Object(r.useCallback)((function(){a((function(e){return x(x({},e),{},{height:200,isPlaying:!1})}))}));return i.a.createElement(i.a.Fragment,null,!y&&i.a.createElement(l.a,{onPress:function(){return a((function(e){return x(x({},e),{},{isPlaying:!e.isPlaying})}))},title:y?"pause":"start"}),i.a.createElement(s.a,{style:h.wrapperField},i.a.createElement(v,{isPlaying:y,height:c,onLose:b}),i.a.createElement(f,{volum:p.toFixed(),sensitivityMicrophone:g,setSensitivityMicrophone:function(e){a((function(t){return x(x({},t),{},{volum:e})})),w}})))};function C(){return i.a.createElement(F,null)}},80:function(e,t,n){e.exports=n(104)}},[[80,1,2]]]);
//# sourceMappingURL=app.41b6bb9d.chunk.js.map