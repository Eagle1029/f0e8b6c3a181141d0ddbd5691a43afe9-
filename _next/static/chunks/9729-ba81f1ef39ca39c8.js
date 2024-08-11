"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9729],{34329:function(t,e){/*! get-video-id v3.6.5 | @license MIT © Michael Wuergler | https://github.com/radiovisual/get-video-id */function stripParameters(t){return t.includes("?")&&(t=t.split("?")[0]),t.includes("/")&&(t=t.split("/")[0]),t.includes("&")&&(t=t.split("&")[0]),t}function _slicedToArray(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(t);!(a=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,n=t}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}e.Z=function(t){if("string"!=typeof t)throw TypeError("get-video-id expects a string");var e=t;/<iframe/gi.test(e)&&(e=function(t){if("string"!=typeof t)throw TypeError("getSrc expected a string");var e=/src="(.*?)"/gm.exec(t);if(e&&e.length>=2)return e[1]}(e)||""),e=(e=(e=e.trim()).replace("-nocookie","")).replace("/www.","/");var r={id:null,service:null};if(/\/\/google/.test(e)){var n=e.match(/url=([^&]+)&/);n&&(e=decodeURIComponent(n[1]))}return/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(e)?r={id:function(t){var e=t;e=(e=e.replace(/#t=.*$/,"")).replace(/^https?:\/\//,"");var r=/youtube:\/\/|youtu\.be\/|y2u\.be\//g;if(r.test(e))return stripParameters(e.split(r)[1]);var n=/\/shorts\//g;if(n.test(e))return stripParameters(e.split(n)[1]);var o=/v=|vi=/g;if(o.test(e))return stripParameters(e.split(o)[1].split("&")[0]);var i=/\/v\/|\/vi\/|\/watch\//g;if(i.test(e))return stripParameters(e.split(i)[1]);var a=/\/an_webp\//g;if(a.test(e))return stripParameters(e.split(a)[1]);var s=/\/e\//g;if(s.test(e))return stripParameters(e.split(s)[1]);var c=/\/embed\//g;if(c.test(e))return stripParameters(e.split(c)[1]);if(!/\/user\/([a-zA-Z\d]*)$/g.test(e)){if(/\/user\/(?!.*videos)/g.test(e))return stripParameters(e.split("/").pop());var u=/\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;if(u.test(e))return stripParameters(e.match(u)[1])}}(e),service:"youtube"}:/vimeo/.test(e)?r={id:function(t){var e,r,n=t;n.includes("#")&&(n=_slicedToArray(n.split("#"),1)[0]),n.includes("?")&&!n.includes("clip_id=")&&(n=_slicedToArray(n.split("?"),1)[0]);var o=/https?:\/\/vimeo\.com\/event\/(\d+)$/.exec(n);if(o&&o[1])return o[1];var i=/https?:\/\/vimeo\.com\/(\d+)/.exec(n);return i&&i[1]?i[1]:(RegExp("https?://player.vimeo.com/video/[0-9]+$|https?://vimeo.com/channels|groups|album","gim").test(n)?(r=n.split("/"))&&r.length>0&&(e=r.pop()):/clip_id=/gim.test(n)&&(r=n.split("clip_id="))&&r.length>0&&(e=_slicedToArray(r[1].split("&"),1)[0]),e)}(e),service:"vimeo"}:/vine/.test(e)?r={id:function(t){var e=/https:\/\/vine\.co\/v\/([a-zA-Z\d]*)\/?/.exec(t);if(e&&e.length>1)return e[1]}(e),service:"vine"}:/videopress/.test(e)?r={id:function(t){if(t.includes("embed"))return e=/embed\/(\w{8})/,t.match(e)[1];e=/\/v\/(\w{8})/;var e,r=t.match(e);if(r&&r.length>0)return r[1]}(e),service:"videopress"}:/microsoftstream/.test(e)?r={id:function(t){var e=(t.includes("embed")?/https:\/\/web\.microsoftstream\.com\/embed\/video\/([a-zA-Z\d-]*)\/?/:/https:\/\/web\.microsoftstream\.com\/video\/([a-zA-Z\d-]*)\/?/).exec(t);if(e&&e.length>1)return e[1]}(e),service:"microsoftstream"}:/tiktok\.com/.test(e)?r={id:function(t){var e=/tiktok\.com(.*)\/video\/(\d+)/gm.exec(t);if(e&&e.length>2)return e[2]}(e),service:"tiktok"}:/(dailymotion\.com|dai\.ly)/.test(e)&&(r={id:function(t){var e=/dailymotion\.com(.*)(video)\/([a-zA-Z\d]+)/gm.exec(t);if(e)return e[3];var r=/dai\.ly\/([a-zA-Z\d]+)/gm.exec(t);if(r&&r.length>1)return r[1];var n=/dailymotion\.com(.*)video=([a-zA-Z\d]+)/gm.exec(t);if(n&&n.length>2)return n[2]}(e),service:"dailymotion"}),r}},98130:function(t,e,r){var n=r(67294),o=r(45697);function _classCallCheck(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n,o=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return(r=n)&&("object"==typeof r||"function"==typeof r)?r:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function zeroPad(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===r)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),i=o?o[1]:"",a=o?o[3]:"",s=o?o[2]:n,c=s.length>=r?s:(((function(t){if(Array.isArray(t))return _arrayLikeToArray(t)})(e=Array(r))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,e)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+s).slice(-1*r);return"".concat(i).concat(c).concat(a)}var i={daysInHours:!1,zeroPadTime:2},a=function(t){_inherits(Countdown,t);var e=_createSuper(Countdown);function Countdown(){var t;return _classCallCheck(this,Countdown),t=e.apply(this,arguments),t.state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval(function(){0==t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState(function(t){return{count:t.count-1}})},1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState(function(t){return{count:t.count+e}},t.startCountdown)},t}return _createClass(Countdown,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),Countdown}(n.Component);a.propTypes={count:o.number,children:o.element,onComplete:o.func};var s=function(t){_inherits(Countdown$1,t);var e=_createSuper(Countdown$1);function Countdown$1(t){var r;if(_classCallCheck(this,Countdown$1),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,n.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},t.date){var o=r.calcTimeDelta();r.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return _createClass(Countdown$1,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date===t.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,r=t.now,n=t.precision,o=t.controlled,i=t.overtime;return function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.now,o=void 0===n?Date.now:n,i=r.precision,a=r.controlled,s=r.offsetTime,c=r.overtime;e="string"==typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,a||(e+=void 0===s?0:s);var u=a?e:e-o(),l=Math.round(1e3*parseFloat(((c?u:Math.max(0,u))/1e3).toFixed(Math.min(20,Math.max(0,void 0===i?0:i))))),p=Math.abs(l)/1e3;return{total:l,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:l<=0}}(e,{now:r,precision:n,controlled:o,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,r){var n=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,i=t.completed&&"STARTED"===e;return o&&!this.props.overtime&&this.clearTimer(),this.setState(function(r){var o=e||r.status;return t.completed&&!n.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}},function(){r&&r(n.state.timeDelta),n.props.onComplete&&(o||i)&&n.props.onComplete(t,i)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t,e,r,n,o,a,s,c,u,l,p,f=this.props,m=f.daysInHours,d=f.zeroPadTime,v=f.zeroPadDays,h=this.state.timeDelta;return Object.assign(Object.assign({},h),{api:this.getApi(),props:this.props,formatted:(t=h.days,e=h.hours,r=h.minutes,n=h.seconds,a=(o=Object.assign(Object.assign({},i),{daysInHours:m,zeroPadTime:d,zeroPadDays:v})).daysInHours,s=o.zeroPadTime,u=void 0===(c=o.zeroPadDays)?s:c,l=Math.min(2,s),p=a?zeroPad(e+24*t,s):zeroPad(e,l),{days:a?"":zeroPad(t,u),hours:p,minutes:zeroPad(r,l),seconds:zeroPad(n,l)})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,r=t.children,o=t.onComplete;return(0,n.createElement)(a,{ref:this.legacyCountdownRef,count:e,onComplete:o},r)}var i=this.props,s=i.className,c=i.overtime,u=i.children,l=i.renderer,p=this.getRenderProps();if(l)return l(p);if(u&&this.state.timeDelta.completed&&!c)return(0,n.cloneElement)(u,{countdown:p});var f=p.formatted,m=f.days,d=f.hours,v=f.minutes,h=f.seconds;return(0,n.createElement)("span",{className:s},p.total<0?"-":"",m,m?":":"",d,":",v,":",h)}}]),Countdown$1}(n.Component);s.defaultProps=Object.assign(Object.assign({},i),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),s.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.ZP=s}}]);