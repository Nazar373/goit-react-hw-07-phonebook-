(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(t,e,n){t.exports=n(50)},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(25),i=n.n(o),c=n(10),u=n(17),l=n(26),s=n(5),f=n(16),p=function(t){return t.contacts.items},d=function(t){return t.contacts.isLoading},h=function(t){return t.contacts.error},m=Object(f.a)([p,function(t){return t.filter.filter}],function(t,e){return t.filter(function(t){return t.name.toLowerCase().includes(e)})}),v=n(19),y=n(4),g=n(52);function b(){b=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new k(a||[]);return r(i,"_invoke",{value:j(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function p(){}function d(){}function h(){}var m={};u(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==e&&n.call(y,o)&&(m=y);var g=h.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function j(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(g),u(g,c,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}g.a.defaults.baseURL="https://637e17aecfdbfd9a63a6f865.mockapi.io";var x,w,j,O,E,L=Object(y.b)("contacts/fetchAll",function(){var t=Object(v.a)(b().mark(function t(e,n){var r,a;return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,g.a.get("/contacts");case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e,n){return t.apply(this,arguments)}}()),k=Object(y.b)("contacts/addContact",function(){var t=Object(v.a)(b().mark(function t(e,n){var r,a;return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,g.a.post("/contacts",{name:e.name,phone:e.phone});case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e,n){return t.apply(this,arguments)}}()),_=Object(y.b)("contacts/deleteContact",function(){var t=Object(v.a)(b().mark(function t(e,n){var r,a;return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,g.a.delete("/contacts/".concat(e));case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e,n){return t.apply(this,arguments)}}()),C=n(6),S=n(7),N=S.a.form(x||(x=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  "]))),A=S.a.label(w||(w=Object(C.a)(["\n  display:flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  width: 200px;"]))),F=S.a.input(j||(j=Object(C.a)(["\n  height: 25px;"]))),P={name:"",phone:""},G=function(t,e){switch(e.type){case"input text":return console.log("actionInCase",e),Object(l.a)({},t,Object(u.a)({},e.field,e.payload));default:return t}};function z(){var t=Object(s.b)(),e=Object(s.c)(p),n=Object(r.useReducer)(G,P),o=Object(c.a)(n,2),i=o[0],u=o[1],l=function(t){u({type:"input text",field:t.target.name,payload:t.target.value})};return a.a.createElement(N,{onSubmit:function(n){n.preventDefault(),e.find(function(t){return t.name===i.name})?alert("a contact with this name is already registered"):e.find(function(t){return t.phone===i.phone})?alert("".concat(i.phone," is already in contacts.")):t(k(i))}},a.a.createElement(A,null,"Name",a.a.createElement(F,{onChange:function(t){return l(t)},value:i.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})),a.a.createElement(A,null,"Number",a.a.createElement(F,{onChange:function(t){return l(t)},value:i.phone,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})),a.a.createElement("button",{type:"submit"},"Add contact"))}var I,T,M,R,q,J=S.a.ul(O||(O=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 300px;\n"]))),V=S.a.li(E||(E=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 20px;"]))),W=function(){var t=Object(s.b)(),e=Object(s.c)(m);return a.a.createElement(J,null,e.map(function(e){return a.a.createElement(V,{key:e.id},a.a.createElement("p",null,e.name," : ",e.phone),a.a.createElement("button",{onClick:function(){return t(_(e.id))}},"Delete"))}))},Z=Object(y.c)({name:"filter",initialState:{filter:""},reducers:{setFilterState:function(t,e){t.filter=e.payload}}}),B=Z.reducer,D=Z.actions.setFilterState,Y=S.a.label(I||(I=Object(C.a)(["\n  display:flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  width: 200px;"]))),U=S.a.input(T||(T=Object(C.a)(["\n  margin-top: 10px;\n  height: 25px;"]))),$=function(){var t=Object(s.b)();return a.a.createElement(Y,null,"Find contacts by name",a.a.createElement(U,{type:"text",onChange:function(e){return t(D(e.currentTarget.value))}}))},H=S.a.div(M||(M=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 80px auto;\n"]))),K=S.a.h1(R||(R=Object(C.a)(["\n  font-size: 32px;\n  font-weight: 900;\n  color: #2c2d2e;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),Q=S.a.h2(q||(q=Object(C.a)(["\n  font-size: 28px;\n  font-weight: 900;\n  color: #2c2d2e;\n  text-align: center;\n  margin-bottom: 40px;\n"])));function X(){var t=Object(s.b)(),e=Object(s.c)(d),n=Object(s.c)(h);return Object(r.useEffect)(function(){t(L())},[t]),a.a.createElement(H,null,a.a.createElement(K,null,"Phonebook"),a.a.createElement(z,null),a.a.createElement(Q,null,"Contacts"),a.a.createElement($,null),e&&!n&&a.a.createElement("b",null,"Request in progress..."),a.a.createElement(W,null))}n(49);var tt=n(12),et=[L,k,_],nt=function(t){return et.map(function(e){return e[t]})},rt=function(t,e){t.items=e.payload},at=function(t,e){t.items.push(e.payload)},ot=function(t,e){var n=t.items.findIndex(function(t){return t.id===e.payload.id});t.items.splice(n,1)},it=function(t){t.isLoading=!0},ct=function(t,e){t.isLoading=!1,t.error=e.payload},ut=function(t){t.isLoading=!1,t.error=null},lt=Object(y.c)({name:"contacts",initialState:{items:[],isLoading:!1,error:null},extraReducers:function(t){t.addCase(L.fulfilled,rt).addCase(k.fulfilled,at).addCase(_.fulfilled,ot).addMatcher(y.d.apply(void 0,Object(tt.a)(nt("pending"))),it).addMatcher(y.d.apply(void 0,Object(tt.a)(nt("rejected"))),ct).addMatcher(y.d.apply(void 0,Object(tt.a)(nt("fulfilled"))),ut)}}).reducer,st=Object(y.a)({reducer:{contacts:lt,filter:B}});i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:st},a.a.createElement(X,null))))}},[[33,1,2]]]);
//# sourceMappingURL=main.8d52eeb8.chunk.js.map