parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"n3Of":[function(require,module,exports) {
"use strict";function e(e,t,n,r,u,a,o){try{var c=e[a](o),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,u)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(u,a){var o=t.apply(n,r);function c(t){e(o,u,a,c,i,"next",t)}function i(t){e(o,u,a,c,i,"throw",t)}c(void 0)})}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.http=void 0;var a=function(){function e(){n(this,e)}return u(e,[{key:"get",value:function(){var e=t(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=t(regeneratorRuntime.mark(function e(t,n){var r,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return r=e.sent,e.next=5,r.json();case 5:return u=e.sent,e.abrupt("return",u);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=t(regeneratorRuntime.mark(function e(t,n){var r,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return r=e.sent,e.next=5,r.json();case 5:return u=e.sent,e.abrupt("return",u);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=t(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",headers:{"Content-type":"application/json"}});case 2:return e.sent,e.next=5,"Resource Deleted...";case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),o=new a;exports.http=o;
},{}],"lA8h":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ui=void 0;var o=function(){function e(){t(this,e),this.post=document.querySelector("#posts"),this.titleInput=document.querySelector("#title"),this.bodyInput=document.querySelector("#body"),this.idInput=document.querySelector("#id"),this.postsSubmit=document.querySelector(".post-submit"),this.forState="add"}return n(e,[{key:"showPosts",value:function(t){var e="";t.forEach(function(t){e+='<div class="card mb-3">\n          <div class="card-body">\n            <h4 class="card-title">'.concat(t.title,'</h4>\n            <p class="card-text">').concat(t.body,'</p>\n            <a href="#" class="edit card-link" data-id="').concat(t.id,'">\n              <i class="fa fa-pencil"></i>\n            </a>\n\n            <a href="#" class="delete card-link text-danger" data-id="').concat(t.id,'">\n            <i class="fa fa-remove"></i>\n          </a>\n          </div>\n        </div>')}),this.post.innerHTML=e}},{key:"showAlert",value:function(t,e){var n=this;this.clearAlert();var o=document.createElement("div");o.className=e,o.appendChild(document.createTextNode(t));var a=document.querySelector(".postsContainer"),i=document.querySelector("#posts");a.insertBefore(o,i),setTimeout(function(){n.clearAlert()},3e3)}},{key:"clearAlert",value:function(){var t=document.querySelector(".alert");t&&t.remove()}},{key:"clearFields",value:function(){this.titleInput.value="",this.bodyInput.value=""}},{key:"fillForm",value:function(t){this.titleInput.value=t.title,this.bodyInput.value=t.body,this.idInput.value=t.id,this.changeFormState("edit")}},{key:"clearIdInput",value:function(){this.idInput.vale=""}},{key:"changeFormState",value:function(t){if("edit"===t){this.postsSubmit.textContent="Update Post",this.postsSubmit.className="post-submit btn btn-warning";var e=document.createElement("button");e.className="post-cancel btn btn-light",e.appendChild(document.createTextNode("Cancel Edit"));var n=document.querySelector("#btn-container"),o=document.querySelector(".form-end");n.insertBefore(e,o)}else this.postsSubmit.textContent="Post It",this.postsSubmit.className="post-submit btn btn-primary",document.querySelector(".post-cancel")&&document.querySelector(".post-cancel").remove(),this.clearIdInput(),this.clearFields()}}]),e}(),a=new o;exports.ui=a;
},{}],"A2T1":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var t=require("./http"),e=require("./ui.js");function n(){t.http.get("http://localhost:3000/posts").then(function(t){return e.ui.showPosts(t)}).catch(function(t){return console.log(t)})}function o(){var o=document.querySelector("#title").value,r=document.querySelector("#body").value,l=document.querySelector("#id").value;if(""===o||""===r)e.ui.showAlert("Please enter all the fields","alert alert-danger");else{var a={title:o,body:r};""===l?t.http.post("http://localhost:3000/posts",a).then(function(t){e.ui.showAlert("Post added","alert alert-success"),e.ui.clearFields(),n()}).catch(function(t){return console.log(t)}):t.http.put("http://localhost:3000/posts/".concat(l),a).then(function(t){e.ui.showAlert("Post updated","alert alert-success"),e.ui.changeFormState("add"),n()}).catch(function(t){return console.log(t)})}}function r(o){if(o.preventDefault(),o.target.parentElement.classList.contains("delete")){var r=o.target.parentElement.dataset.id;confirm("Are you sure?")&&t.http.delete("http://localhost:3000/posts/".concat(r)).then(function(t){e.ui.showAlert("Post Removed","alert alert-success"),n()})}}function l(t){if(t.target.parentElement.classList.contains("edit")){var n=t.target.parentElement.dataset.id,o=t.target.parentElement.previousElementSibling.textContent,r={id:n,title:t.target.parentElement.previousElementSibling.previousElementSibling.textContent,body:o};e.ui.fillForm(r)}t.preventDefault()}function a(t){t.target.classList.contains("post-cancel")&&e.ui.changeFormState("add"),t.preventDefault()}document.addEventListener("DOMContentLoaded",n),document.querySelector(".post-submit").addEventListener("click",o),document.querySelector("#posts").addEventListener("click",r),document.querySelector("#posts").addEventListener("click",l),document.querySelector("#btn-container").addEventListener("click",a);
},{"regenerator-runtime/runtime":"KA2S","./http":"n3Of","./ui.js":"lA8h"}]},{},["A2T1"], null)
//# sourceMappingURL=/Microposts/app.20272f5e.js.map