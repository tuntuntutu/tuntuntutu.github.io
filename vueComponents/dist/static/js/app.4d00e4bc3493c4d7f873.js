webpackJsonp([2,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=n(193),s=o(a),i=n(192),c=o(i),l=n(188),r=o(l),u=n(189),p=o(u),d=s.default.extend({});s.default.use(c.default);var f=new c.default;f.map({"/index":{name:"index",component:p.default},"/components":{name:"new",component:r.default}}),f.redirect({"*":"/index"}),f.start(d,"#app")},1:function(t,e,n){var o,a,s={};n(8),o=n(6),a=n(184),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})},2:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),s=o(a),i=n(1),c=o(i),l=n(190),r=o(l),u=n(191),p=o(u);n(12);var d=[{name:"涟漪按钮",wName:"rButton",html:r.default.template,current:!0},{name:"切换开关",wName:"toggle",html:p.default.template,current:!1}];d.forEach(function(t){t.code=s.default.highlight("html",t.html).value}),e.default={data:function(){return{widgets:d}},components:{rButton:r.default,menuTop:c.default,toggle:p.default},methods:{nav:function(t,e){e.forEach(function(t){t.current=!1}),t.current=!0}}}},3:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),s=o(a);e.default={components:{headtop:s.default}}},4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{location:{x:0,y:0},isShowAnimate:!1,className:"btn btn-success"}},methods:{clickRButton:function(t){var e=this,n=this.$els.ripple;this.isShowAnimate=!1,this.location.x=parseInt(t.layerX,10)-n.offsetWidth/2,this.location.y=parseInt(t.layerY,10)-n.offsetHeight/2,setTimeout(function(){e.isShowAnimate=!0,e.$emit("click")},100)}}}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{value:!0}}}},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isTop:!0}}}},7:function(t,e){},8:function(t,e){},9:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},183:function(t,e){t.exports=' <div id=app class=m-components> <menu-top></menu-top> <div class=container> <div class=col-md-9 role=main> <div class=bs-docs-section v-for="wt in widgets"> <h1 class=page-header id={{wt.name}}>{{wt.name}}</h1> <p v-html=wt.desc></p> <component :is=wt.wName :provinces=provinces></component> <div class=u-highlight> <pre><code class=html v-html=wt.code></code></pre> </div> </div> </div> <div class=col-md-3> <div class=tt-nav> <ul class=list-group> <a v-for="wt in widgets" class=list-group-item @click=nav(wt,widgets) :class="{\'active\':wt.current}"> {{wt.name}} </a> </ul> </div> </div> </div> </div> '},184:function(t,e){t.exports=' <div class=tt-menu v-bind:class="{\'navbar-static-top\':isTop,\'navbar-fixed-top\':!isTop}"> <div class=container> <div class="navbar-header logo"> <a href=/index.html class=navbar-brand>TT-C</a> </div> <nav> <ul class="nav navbar-nav"> <li> <a v-link="{path:\'/\'}">TUNTUN</a> </li> <li> <a href=/recruit/index.html>Recruit</a> </li> <li> <a v-link="{path:\'/components\'}">Components</a> </li> <li> <a href=/2048/index.html>2048</a> </li>  <li> <a href=/transform/index.html>Animation</a> </li> </ul> </nav> </div> </div> '},185:function(t,e){t.exports=' <div id=hello class="u-rButton {{className}}" @click=clickRButton v-el:rbutton="" _v-46feb1b2=""> <span class=buttonText _v-46feb1b2="">{{text||\'请点击我\'}}</span> <span class=ripple v-el:ripple="" v-bind:class="{\'animate\':isShowAnimate}" v-bind:style="{left:location.x+\'px\',top:location.y+\'px\'}" ref=ripple _v-46feb1b2=""></span> </div> '},186:function(t,e){t.exports=' <div class="u-toggle btn" @click="value =! value" v-bind:class="{\'btn-success\':value,\'btn-default\':!value,\'off\':!value}" _v-56ee11b9=""> <div class=toggleGroup _v-56ee11b9=""> <label class="btn btn-success toggleOn" _v-56ee11b9="">On</label> <label class="btn btn-default active toggleOff" _v-56ee11b9="">Off</label> <span class="btn btn-default toggleHandle" _v-56ee11b9=""></span> </div> </div> '},187:function(t,e){t.exports=' <div _v-7d21c120=""> <headtop _v-7d21c120=""></headtop> <main class=tt-banner _v-7d21c120=""> <div class=container _v-7d21c120=""> <span class="tt-icon tt-lg" _v-7d21c120="">Tuntun&amp;Tutu</span> <p class="line describe" _v-7d21c120="">Just show some demo and breeds an product for my unborn baby Named Tuntun</p> <p class="line bookmark" _v-7d21c120=""> <a href=/bookmark/index.html class="btn btn-lg tt-inline" _v-7d21c120="">Bookmark</a> </p> <p class="line pull-right" _v-7d21c120=""><span class="glyphicon glyphicon-btc" _v-7d21c120=""></span>Tutu will be the 2rd baby</p> </div> </main> </div> '},188:function(t,e,n){var o,a,s={};n(7),o=n(2),a=n(183),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})},189:function(t,e,n){var o,a,s={};n(11),o=n(3),a=n(187),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})},190:function(t,e,n){var o,a,s={};n(9),o=n(4),a=n(185),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})},191:function(t,e,n){var o,a,s={};n(10),o=n(5),a=n(186),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})}});
//# sourceMappingURL=app.4d00e4bc3493c4d7f873.js.map