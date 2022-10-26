!function(){function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},n.parcelRequired7c6=o),o.register("c69b4",(function(e,n){t(e.exports,"getFirestore",(function(){return o("hbbGa").getFirestore})),t(e.exports,"getDoc",(function(){return o("hbbGa").getDoc})),t(e.exports,"doc",(function(){return o("hbbGa").doc})),t(e.exports,"updateDoc",(function(){return o("hbbGa").updateDoc})),t(e.exports,"arrayRemove",(function(){return o("hbbGa").arrayRemove})),t(e.exports,"setDoc",(function(){return o("hbbGa").setDoc})),t(e.exports,"arrayUnion",(function(){return o("hbbGa").arrayUnion})),o("hbbGa")})),o.register("hbbGa",(function(n,i){t(n.exports,"getFirestore",(function(){return Le})),t(n.exports,"doc",(function(){return Re})),t(n.exports,"getDoc",(function(){return hn})),t(n.exports,"setDoc",(function(){return dn})),t(n.exports,"updateDoc",(function(){return pn})),t(n.exports,"arrayUnion",(function(){return vn})),t(n.exports,"arrayRemove",(function(){return mn}));var r=o("bpxeT"),a=o("8MBJY"),s=o("ge8co"),u=o("a2hTj"),l=o("jh8P3"),c=o("fVNic"),f=o("eYQtU"),h=o("jmhxu"),d=o("1t1Wn"),p=o("8nrFW"),v=(o("l5bVx"),o("2MbLg")),m=o("2TvXO"),y=o("MjY8E"),g=o("6ExWU"),k=o("kZfxc"),w=o("2xDiJ"),b=function(){"use strict";function t(n){e(a)(this,t),this.uid=n}return e(u)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(t){return t.uid===this.uid}}]),t}();b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var T="9.9.4",E=new(0,k.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(E.logLevel<=k.LogLevel.DEBUG){var o,a=i.map(C);(o=E).debug.apply(o,["Firestore (".concat(T,"): ").concat(t)].concat(e(p)(a)))}}function _(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(E.logLevel<=k.LogLevel.ERROR){var o,a=i.map(C);(o=E).error.apply(o,["Firestore (".concat(T,"): ").concat(t)].concat(e(p)(a)))}}function I(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(E.logLevel<=k.LogLevel.WARN){var o,a=i.map(C);(o=E).warn.apply(o,["Firestore (".concat(T,"): ").concat(t)].concat(e(p)(a)))}}function C(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",e="FIRESTORE (".concat(T,") INTERNAL ASSERTION FAILED: ")+t;throw _(e),new Error(e)}function x(t,e){t||L()}function N(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A="cancelled",R="unknown",D="invalid-argument",z="deadline-exceeded",M="not-found",V="permission-denied",P="unauthenticated",O="resource-exhausted",F="failed-precondition",U="aborted",B="out-of-range",q="unimplemented",j="internal",G="unavailable",H=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this,t,r)).code=t,o.message=r,o.toString=function(){return"".concat(o.name,": [code=").concat(o.code,"]: ").concat(o.message)},e(h)(o)}return i}(w.FirebaseError),K=function t(n,i){"use strict";e(a)(this,t),this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},W=function(){"use strict";function t(){e(a)(this,t)}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e(b.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Y=function(){"use strict";function t(n){var i=this;e(a)(this,t),this.auth=null,n.onInit((function(t){i.auth=t}))}return e(u)(t,[{key:"getToken",value:function(){var t=this;return this.auth?this.auth.getToken().then((function(e){return e?(x("string"==typeof e.accessToken),new K(e.accessToken,new b(t.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){}},{key:"shutdown",value:function(){}}]),t}(),X=function(){"use strict";function t(n,i,r,o){e(a)(this,t),this.t=n,this.i=i,this.o=r,this.u=o,this.type="FirstParty",this.user=b.FIRST_PARTY,this.h=new Map}return e(u)(t,[{key:"l",value:function(){return this.u?this.u():(x(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),t}(),J=function(){"use strict";function t(n,i,r,o){e(a)(this,t),this.t=n,this.i=i,this.o=r,this.u=o}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(new X(this.t,this.i,this.o,this.u))}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e(b.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),Z=function t(n){"use strict";e(a)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Q=function(){"use strict";function t(n){var i=this;e(a)(this,t),this.m=n,this.appCheck=null,n.onInit((function(t){i.appCheck=t}))}return e(u)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(t){return t?(x("string"==typeof t.token),new Z(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){}},{key:"shutdown",value:function(){}}]),t}(),$=function t(n,i,r,o,s,u,l,c){"use strict";e(a)(this,t),this.databaseId=n,this.appId=i,this.persistenceKey=r,this.host=o,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.useFetchStreams=c},tt=function(){"use strict";function t(n,i){e(a)(this,t),this.projectId=n,this.database=i||"(default)"}return e(u)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}(),et=function(){"use strict";function t(n,i,r){e(a)(this,t),void 0===i?i=0:i>n.length&&L(),void 0===r?r=n.length-i:r>n.length-i&&L(),this.segments=n,this.offset=i,this.len=r}return e(u)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(t){n.push(t)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(t){return this.segments[this.offset+t]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(t){if(t.length<this.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"isImmediateParentOf",value:function(t){if(this.length+1!==t.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"forEach",value:function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(t,e){for(var n=Math.min(t.length,e.length),i=0;i<n;i++){var r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}]),t}(),nt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(){return e(a)(this,i),n.apply(this,arguments)}return e(u)(i,[{key:"construct",value:function(t,e,n){return new i(t,e,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=[],a=!0,s=!1,u=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var f,h=l.value;if(h.indexOf("//")>=0)throw new H(D,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=o).push.apply(f,e(p)(h.split("/").filter((function(t){return t.length>0}))))}}catch(t){s=!0,u=t}finally{try{a||null==c.return||c.return()}finally{if(s)throw u}}return new i(o)}},{key:"emptyPath",value:function(){return new i([])}}]),i}(et),it=/^[_a-zA-Z][_a-zA-Z0-9]*$/,rt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(){return e(a)(this,i),n.apply(this,arguments)}return e(u)(i,[{key:"construct",value:function(t,e,n){return new i(t,e,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(t){return t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),i.isValidIdentifier(t)||(t="`"+t+"`"),t})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(t){return it.test(t)}},{key:"keyField",value:function(){return new i(["__name__"])}},{key:"fromServerFormat",value:function(t){for(var e=[],n="",r=0,o=function(){if(0===n.length)throw new H(D,"Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));e.push(n),n=""},a=!1;r<t.length;){var s=t[r];if("\\"===s){if(r+1===t.length)throw new H(D,"Path has trailing escape character: "+t);var u=t[r+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new H(D,"Path has invalid escape sequence: "+t);n+=u,r+=2}else"`"===s?(a=!a,r++):"."!==s||a?(n+=s,r++):(o(),r++)}if(o(),a)throw new H(D,"Unterminated ` in path: "+t);return new i(e)}},{key:"emptyPath",value:function(){return new i([])}}]),i}(et),ot=function(){"use strict";function t(n){e(a)(this,t),this.path=n}return e(u)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(t){return null!==t&&0===nt.comparator(this.path,t.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(nt.fromString(e))}},{key:"fromName",value:function(e){return new t(nt.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(nt.emptyPath())}},{key:"comparator",value:function(t,e){return nt.comparator(t.path,e.path)}},{key:"isDocumentKey",value:function(t){return t.length%2==0}},{key:"fromSegments",value:function(e){return new t(new nt(e.slice()))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(t,e,n){if(!n)throw new H(D,"Function ".concat(t,"() cannot be called with an empty ").concat(e,"."))}function st(t){if(!ot.isDocumentKey(t))throw new H(D,"Invalid document reference. Document references must have an even number of segments, but ".concat(t," has ").concat(t.length,"."))}function ut(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t="".concat(t.substring(0,20),"...")),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";var e=(n=t).constructor?n.constructor.name:null;return e?"a custom ".concat(e," object"):"an object"}var n;return"function"==typeof t?"a function":L()}function lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(D,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=ut(t);throw new H(D,"Expected type '".concat(e.name,"', but it was: ").concat(n))}return t}function ct(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,ht,dt={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){if(void 0===t)return _("RPC_ERROR","HTTP error has no status"),R;switch(t){case 200:return"ok";case 400:return F;case 401:return P;case 403:return V;case 404:return M;case 409:return U;case 416:return B;case 429:return O;case 499:return A;case 500:return R;case 501:return q;case 503:return G;case 504:return z;default:return t>=200&&t<300?"ok":t>=400&&t<500?F:t>=500&&t<600?j:R}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ht=ft||(ft={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";var vt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this,t)).P=r,e(h)(o)}return e(u)(i,[{key:"V",value:function(t,e){throw new Error("Not supported by FetchConnection")}},{key:"A",value:function(t,n,i,o){var a=this;return e(r)(e(m).mark((function t(){var r,s;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.stringify(o),t.prev=2,t.next=5,a.P(n,{method:"POST",headers:i,body:r});case 5:s=t.sent,t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(2),new H(pt(t.t0.status),"Request failed with error: "+t.t0.statusText);case 11:if(s.ok){t.next=13;break}throw new H(pt(s.status),"Request failed with error: "+s.statusText);case 13:return t.abrupt("return",s.json());case 14:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}]),i}(function(){"use strict";function t(n){e(a)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var i=n.ssl?"https":"http";this.p=i+"://"+n.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(u)(t,[{key:"v",value:function(t,e,n,i,r){var o=this.T(t,e);S("RestConnection","Sending: ",o,n);var a={};return this.I(a,i,r),this.A(t,o,a,n).then((function(t){return S("RestConnection","Received: ",t),t}),(function(e){throw I("RestConnection","".concat(t," failed with error: "),e,"url: ",o,"request:",n),e}))}},{key:"R",value:function(t,e,n,i,r,o){return this.v(t,e,n,i,r)}},{key:"I",value:function(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+T,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((function(e,n){return t[n]=e})),n&&n.headers.forEach((function(e,n){return t[n]=e}))}},{key:"T",value:function(t,e){var n=dt[t];return"".concat(this.p,"/v1/").concat(e,":").concat(n)}}]),t}());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(var i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(){"use strict";function t(){e(a)(this,t)}return e(u)(t,null,[{key:"N",value:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var i=mt(40),r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length));return n}}]),t}();function gt(t,e){return t<e?-1:t>e?1:0}function kt(t,e,n){return t.length===e.length&&t.every((function(t,i){return n(t,e[i])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt=function(){"use strict";function t(n,i){if(e(a)(this,t),this.seconds=n,this.nanoseconds=i,i<0)throw new H(D,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new H(D,"Timestamp nanoseconds out of range: "+i);if(n<-62135596800)throw new H(D,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new H(D,"Timestamp seconds out of range: "+n)}return e(u)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}},{key:"isEqual",value:function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),bt=function(){"use strict";function t(n){e(a)(this,t),this.timestamp=n}return e(u)(t,[{key:"compareTo",value:function(t){return this.timestamp._compareTo(t.timestamp)}},{key:"isEqual",value:function(t){return this.timestamp.isEqual(t.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new wt(0,0))}},{key:"max",value:function(){return new t(new wt(253402300799,999999999))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(t){var e=0;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Et(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=function(){"use strict";function t(n,i){e(a)(this,t),this.comparator=n,this.root=i||It.EMPTY}return e(u)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}},{key:"get",value:function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}},{key:"indexOf",value:function(t){for(var e=0,n=this.root;!n.isEmpty();){var i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(t){return this.root.inorderTraversal(t)}},{key:"forEach",value:function(t){this.inorderTraversal((function(e,n){return t(e,n),!1}))}},{key:"toString",value:function(){var t=[];return this.inorderTraversal((function(e,n){return t.push("".concat(e,":").concat(n)),!1})),"{".concat(t.join(", "),"}")}},{key:"reverseTraversal",value:function(t){return this.root.reverseTraversal(t)}},{key:"getIterator",value:function(){return new _t(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(t){return new _t(this.root,t,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new _t(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(t){return new _t(this.root,t,this.comparator,!0)}}]),t}(),_t=function(){"use strict";function t(n,i,r,o){e(a)(this,t),this.isReverse=o,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=i?r(n.key,i):1,i&&o&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(u)(t,[{key:"getNext",value:function(){var t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}]),t}(),It=function(){"use strict";function t(n,i,r,o,s){e(a)(this,t),this.key=n,this.value=i,this.color=null!=r?r:t.RED,this.left=null!=o?o:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(u)(t,[{key:"copy",value:function(e,n,i,r,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=o?o:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}},{key:"reverseTraversal",value:function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(t,e,n){var i=this,r=n(t,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===n(e,r.key)){if(r.right.isEmpty())return t.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}},{key:"moveRedLeft",value:function(){var t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}},{key:"moveRedRight",value:function(){var t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}},{key:"checkMaxDepth",value:function(){var t=this.check();return Math.pow(2,t)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw L();if(this.right.isRed())throw L();var t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}]),t}();It.EMPTY=null,It.RED=!0,It.BLACK=!1,It.EMPTY=new(function(){"use strict";function t(){e(a)(this,t),this.size=0}return e(u)(t,[{key:"key",get:function(){throw L()}},{key:"value",get:function(){throw L()}},{key:"color",get:function(){throw L()}},{key:"left",get:function(){throw L()}},{key:"right",get:function(){throw L()}},{key:"copy",value:function(t,e,n,i,r){return this}},{key:"insert",value:function(t,e,n){return new It(t,e)}},{key:"remove",value:function(t,e){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(t){return!1}},{key:"reverseTraversal",value:function(t){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct=function(){"use strict";function t(n){e(a)(this,t),this.comparator=n,this.data=new St(this.comparator)}return e(u)(t,[{key:"has",value:function(t){return null!==this.data.get(t)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(t){return this.data.indexOf(t)}},{key:"forEach",value:function(t){this.data.inorderTraversal((function(e,n){return t(e),!1}))}},{key:"forEachInRange",value:function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}},{key:"forEachWhile",value:function(t,e){var n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(t){var e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}},{key:"getIterator",value:function(){return new Lt(this.data.getIterator())}},{key:"getIteratorFrom",value:function(t){return new Lt(this.data.getIteratorFrom(t))}},{key:"add",value:function(t){return this.copy(this.data.remove(t).insert(t,!0))}},{key:"delete",value:function(t){return this.has(t)?this.copy(this.data.remove(t)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(t){var e=this;return e.size<t.size&&(e=t,t=this),t.forEach((function(t){e=e.add(t)})),e}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),i=e.data.getIterator();n.hasNext();){var r=n.getNext().key,o=i.getNext().key;if(0!==this.comparator(r,o))return!1}return!0}},{key:"toArray",value:function(){var t=[];return this.forEach((function(e){t.push(e)})),t}},{key:"toString",value:function(){var t=[];return this.forEach((function(e){return t.push(e)})),"SortedSet("+t.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Lt=function(){"use strict";function t(n){e(a)(this,t),this.iter=n}return e(u)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}(),xt=function(){"use strict";function t(n){e(a)(this,t),this.fields=n,n.sort(rt.comparator)}return e(u)(t,[{key:"unionWith",value:function(e){var n=new Ct(rt.comparator),i=!0,r=!1,o=void 0;try{for(var a,s=this.fields[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var u=a.value;n=n.add(u)}}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}var l=!0,c=!1,f=void 0;try{for(var h,d=e[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var p=h.value;n=n.add(p)}}catch(t){c=!0,f=t}finally{try{l||null==d.return||d.return()}finally{if(c)throw f}}return new t(n.toArray())}},{key:"covers",value:function(t){var e=!0,n=!1,i=void 0;try{for(var r,o=this.fields[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){if(r.value.isPrefixOf(t))return!0}}catch(t){n=!0,i=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}return!1}},{key:"isEqual",value:function(t){return kt(this.fields,t.fields,(function(t,e){return t.isEqual(e)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),Nt=Symbol.iterator,At=function(){"use strict";function t(n){e(a)(this,t),this.binaryString=n}return e(u)(t,[{key:Nt,value:function(){var t=this,e=0;return{next:function(){return e<t.binaryString.length?{value:t.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var t;return t=this.binaryString,btoa(t)}},{key:"toUint8Array",value:function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(t){return gt(this.binaryString,t.binaryString)}},{key:"isEqual",value:function(t){return this.binaryString===t.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(e))}}]),t}();At.EMPTY_BYTE_STRING=new At("");var Rt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(t){if(x(!!t),"string"==typeof t){var e=0,n=Rt.exec(t);if(x(!!n),n[1]){var i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}var r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:zt(t.seconds),nanos:zt(t.nanos)}}function zt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Mt(t){return"string"==typeof t?At.fromBase64String(t):At.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pt(t){var e=t.mapValue.fields.__previous_value__;return Vt(e)?Pt(e):e}function Ot(t){var e=Dt(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vt(t)?4:"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:L()}function Ut(t,e){if(t===e)return!0;var n,i=Ft(t);if(i!==Ft(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ot(t).isEqual(Ot(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;var n=Dt(t.timestampValue),i=Dt(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return n=e,Mt(t.bytesValue).isEqual(Mt(n.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return zt(t.geoPointValue.latitude)===zt(e.geoPointValue.latitude)&&zt(t.geoPointValue.longitude)===zt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return zt(t.integerValue)===zt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){var n=zt(t.doubleValue),i=zt(e.doubleValue);return n===i?ct(n)===ct(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return kt(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(t,e){var n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Tt(n)!==Tt(i))return!1;for(var r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Ut(n[r],i[r])))return!1;return!0}(t,e);default:return L()}}function Bt(t){return!!t&&"mapValue"in t}function qt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){var e={mapValue:{fields:{}}};return Et(t.mapValue.fields,(function(t,n){return e.mapValue.fields[t]=qt(n)})),e}if(t.arrayValue){for(var n={arrayValue:{values:[]}},i=0;i<(t.arrayValue.values||[]).length;++i)n.arrayValue.values[i]=qt(t.arrayValue.values[i]);return n}return Object.assign({},t)}var jt=function(){"use strict";function t(n){e(a)(this,t),this.value=n}return e(u)(t,[{key:"field",value:function(t){if(t.isEmpty())return this.value;for(var e=this.value,n=0;n<t.length-1;++n)if(!Bt(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}},{key:"set",value:function(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qt(e)}},{key:"setAll",value:function(t){var e=this,n=rt.emptyPath(),i={},r=[];t.forEach((function(t,o){if(!n.isImmediateParentOf(o)){var a=e.getFieldsMap(n);e.applyChanges(a,i,r),i={},r=[],n=o.popLast()}t?i[o.lastSegment()]=qt(t):r.push(o.lastSegment())}));var o=this.getFieldsMap(n);this.applyChanges(o,i,r)}},{key:"delete",value:function(t){var e=this.field(t.popLast());Bt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}},{key:"isEqual",value:function(t){return Ut(this.value,t.value)}},{key:"getFieldsMap",value:function(t){var e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(var n=0;n<t.length;++n){var i=e.mapValue.fields[t.get(n)];Bt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}},{key:"applyChanges",value:function(t,e,n){Et(e,(function(e,n){return t[e]=n}));var i=!0,r=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var u=a.value;delete t[u]}}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}}},{key:"clone",value:function(){return new t(qt(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}(),Gt=function(){"use strict";function t(n,i,r,o,s,u){e(a)(this,t),this.key=n,this.documentType=i,this.version=r,this.readTime=o,this.data=s,this.documentState=u}return e(u)(t,[{key:"convertToFoundDocument",value:function(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}},{key:"convertToNoDocument",value:function(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=bt.min(),this}},{key:"setReadTime",value:function(t){return this.readTime=t,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,bt.min(),bt.min(),jt.empty(),0)}},{key:"newFoundDocument",value:function(e,n,i){return new t(e,1,n,bt.min(),i,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,bt.min(),jt.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,bt.min(),jt.empty(),2)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ht=function t(n){"use strict";var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(a)(this,t),this.path=n,this.collectionGroup=i,this.explicitOrderBy=r,this.filters=o,this.limit=s,this.limitType=u,this.startAt=l,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(t,e){return"number"==typeof(n=e)&&Number.isInteger(n)&&!ct(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.k){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ct(e)?"-0":e}}(t,e);var n}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=function t(){"use strict";e(a)(this,t),this._=void 0},Yt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(){return e(a)(this,i),n.apply(this,arguments)}return i}(Wt),Xt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t){var r;return e(a)(this,i),(r=n.call(this)).elements=t,e(h)(r)}return i}(Wt),Jt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t){var r;return e(a)(this,i),(r=n.call(this)).elements=t,e(h)(r)}return i}(Wt),Zt=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this)).C=t,o.L=r,e(h)(o)}return i}(Wt),Qt=function t(n,i){"use strict";e(a)(this,t),this.field=n,this.transform=i},$t=function(){"use strict";function t(n,i){e(a)(this,t),this.updateTime=n,this.exists=i}return e(u)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}(),te=function t(){"use strict";e(a)(this,t)},ee=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r,o){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(a)(this,i),(s=n.call(this)).key=t,s.value=r,s.precondition=o,s.fieldTransforms=u,s.type=0,e(h)(s)}return e(u)(i,[{key:"getFieldMask",value:function(){return null}}]),i}(te),ne=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r,o,s){var u,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(a)(this,i),(u=n.call(this)).key=t,u.data=r,u.fieldMask=o,u.precondition=s,u.fieldTransforms=l,u.type=1,e(h)(u)}return e(u)(i,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),i}(te),ie=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this)).key=t,o.precondition=r,o.type=2,o.fieldTransforms=[],e(h)(o)}return e(u)(i,[{key:"getFieldMask",value:function(){return null}}]),i}(te),re=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this)).key=t,o.precondition=r,o.type=3,o.fieldTransforms=[],e(h)(o)}return e(u)(i,[{key:"getFieldMask",value:function(){return null}}]),i}(te),oe=function t(n,i){"use strict";e(a)(this,t),this.databaseId=n,this.k=i};function ae(t,e){return t.k?"".concat(new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+e.nanoseconds).slice(-9),"Z"):{seconds:""+e.seconds,nanos:e.nanoseconds}}function se(t,e){return t.k?e.toBase64():e.toUint8Array()}function ue(t,e){return ae(t,e.toTimestamp())}function le(t){return x(!!t),bt.fromTimestamp((e=Dt(t),new wt(e.seconds,e.nanos)));var e}function ce(t,e){return(n=t,new nt(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function fe(t,e){return ce(t.databaseId,e.path)}function he(t,e){var n,i,r,o=(n=e,x(ye(i=nt.fromString(n))),i);if(o.get(1)!==t.databaseId.projectId)throw new H(D,"Tried to deserialize key from different project: "+o.get(1)+" vs "+t.databaseId.projectId);if(o.get(3)!==t.databaseId.database)throw new H(D,"Tried to deserialize key from different database: "+o.get(3)+" vs "+t.databaseId.database);return new ot((x((r=o).length>4&&"documents"===r.get(4)),r.popFirst(5)))}function de(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pe(t,e,n){return{name:fe(t,e),fields:n.value.mapValue.fields}}function ve(t,e){return"found"in e?function(t,e){x(!!e.found),e.found.name,e.found.updateTime;var n=he(t,e.found.name),i=le(e.found.updateTime),r=new jt({mapValue:{fields:e.found.fields}});return Gt.newFoundDocument(n,i,r)}(t,e):"missing"in e?function(t,e){x(!!e.missing),x(!!e.readTime);var n=he(t,e.missing),i=le(e.readTime);return Gt.newNoDocument(n,i)}(t,e):L()}function me(t,e){var n,i,r;if(e instanceof ee)n={update:pe(t,e.key,e.value)};else if(e instanceof ie)n={delete:fe(t,e.key)};else if(e instanceof ne)n={update:pe(t,e.key,e.data),updateMask:(i=e.fieldMask,r=[],i.fields.forEach((function(t){return r.push(t.canonicalString())})),{fieldPaths:r})};else{if(!(e instanceof re))return L();n={verify:fe(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((function(t){return function(t,e){var n=e.transform;if(n instanceof Yt)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xt)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jt)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zt)return{fieldPath:e.field.canonicalString(),increment:n.L};throw L()}(0,t)}))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ue(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:L()}(t,e.precondition)),n}function ye(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return new oe(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke=function(t){"use strict";e(f)(i,(function t(){e(a)(this,t)}));var n=e(v)(i);function i(t,r,o,s){var u;return e(a)(this,i),(u=n.call(this)).authCredentials=t,u.appCheckCredentials=r,u.Z=o,u.C=s,u.tt=!1,e(h)(u)}return e(u)(i,[{key:"et",value:function(){if(this.tt)throw new H(F,"The client has already been terminated.")}},{key:"v",value:function(t,n,i){var r=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var a=e(d)(o,2),s=a[0],u=a[1];return r.Z.v(t,n,i,s,u)})).catch((function(t){throw"FirebaseError"===t.name?(t.code===P&&(r.authCredentials.invalidateToken(),r.appCheckCredentials.invalidateToken()),t):new H(R,t.toString())}))}},{key:"R",value:function(t,n,i,r){var o=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var s=e(d)(a,2),u=s[0],l=s[1];return o.Z.R(t,n,i,u,l,r)})).catch((function(t){throw"FirebaseError"===t.name?(t.code===P&&(o.authCredentials.invalidateToken(),o.appCheckCredentials.invalidateToken()),t):new H(R,t.toString())}))}},{key:"terminate",value:function(){this.tt=!0}}]),i}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){return be.apply(this,arguments)}function be(){return(be=e(r)(e(m).mark((function t(n,i){var r,o,a;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=N(n),o=de(r.C)+"/documents",a={writes:i.map((function(t){return me(r.C,t)}))},t.next=3,r.v("Commit",o,a);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Te(t,e){return Ee.apply(this,arguments)}function Ee(){return(Ee=e(r)(e(m).mark((function t(n,i){var r,o,a,s,u,l;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=N(n),o=de(r.C)+"/documents",a={documents:i.map((function(t){return fe(r.C,t)}))},t.next=5,r.R("BatchGetDocuments",o,a,i.length);case 5:return s=t.sent,u=new Map,s.forEach((function(t){var e=ve(r.C,t);u.set(e.key.toString(),e)})),l=[],t.abrupt("return",(i.forEach((function(t){var e=u.get(t.toString());x(!!e),l.push(e)})),l));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se=new Map;function _e(t){if(t._terminated)throw new H(F,"The client has already been terminated.");if(!Se.has(t)){S("ComponentProvider","Initializing Datastore");var e=(o=t._databaseId,a=t.app.options.appId||"",s=t._persistenceKey,u=t._freezeSettings(),r=new $(o,a,s,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams),new vt(r,fetch.bind(null))),n=ge(t._databaseId),i=function(t,e,n,i){return new ke(t,e,n,i)}(t._authCredentials,t._appCheckCredentials,e,n);Se.set(t,i)}var r,o,a,s,u;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return Se.get(t)}var Ie=function(){"use strict";function t(n){var i;if(e(a)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new H(D,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(i=n.ssl)||void 0===i||i;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new H(D,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new H(D,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(u)(t,[{key:"isEqual",value:function(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}]),t}(),Ce=function(){"use strict";function t(n,i,r,o){e(a)(this,t),this._authCredentials=n,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ie({}),this._settingsFrozen=!1}return e(u)(t,[{key:"app",get:function(){if(!this._app)throw new H(F,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(t){if(this._settingsFrozen)throw new H(F,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ie(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new W;switch(t.type){case"gapi":var e=t.client;return new J(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new H(D,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return t=this,(e=Se.get(t))&&(S("ComponentProvider","Removing Datastore"),Se.delete(t),e.terminate()),Promise.resolve();var t,e}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){var n="object"==typeof t?t:(0,y.getApp)(),i="string"==typeof t?t:e||"(default)";return(0,y._getProvider)(n,"firestore/lite").getImmediate({identifier:i})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xe=function(){"use strict";function t(n,i,r){e(a)(this,t),this.converter=i,this._key=r,this.type="document",this.firestore=n}return e(u)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),Ne=function(){"use strict";function t(n,i,r){e(a)(this,t),this.converter=i,this._query=r,this.type="query",this.firestore=n}return e(u)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),Ae=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r,o){var s;return e(a)(this,i),(s=n.call(this,t,r,new Ht(o)))._path=o,s.type="collection",e(h)(s)}return e(u)(i,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var t=this._path.popLast();return t.isEmpty()?null:new xe(this.firestore,null,new ot(t))}},{key:"withConverter",value:function(t){return new i(this.firestore,t,this._path)}}]),i}(Ne);function Re(t,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),o=2;o<i;o++)r[o-2]=arguments[o];if(t=(0,w.getModularInstance)(t),1===arguments.length&&(n=yt.N()),at("doc","path",n),t instanceof Ce){var a,s=(a=nt).fromString.apply(a,[n].concat(e(p)(r)));return st(s),new xe(t,null,new ot(s))}var u;if(!(t instanceof xe||t instanceof Ae))throw new H(D,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var l=t._path.child((u=nt).fromString.apply(u,[n].concat(e(p)(r))));return st(l),new xe(t.firestore,t instanceof Ae?t.converter:null,new ot(l))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var De=function(){"use strict";function t(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e(a)(this,t);for(var o=0;o<i.length;++o)if(0===i[o].length)throw new H(D,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(i)}return e(u)(t,[{key:"isEqual",value:function(t){return this._internalPath.isEqual(t._internalPath)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ze=function(){"use strict";function t(n){e(a)(this,t),this._byteString=n}return e(u)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(t){return this._byteString.isEqual(t._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(At.fromBase64String(e))}catch(t){throw new H(D,"Failed to construct data from Base64 string: "+t)}}},{key:"fromUint8Array",value:function(e){return new t(At.fromUint8Array(e))}}]),t}(),Me=function t(n){"use strict";e(a)(this,t),this._methodName=n},Ve=function(){"use strict";function t(n,i){if(e(a)(this,t),!isFinite(n)||n<-90||n>90)throw new H(D,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(i)||i<-180||i>180)throw new H(D,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=n,this._long=i}return e(u)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(t){return this._lat===t._lat&&this._long===t._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}]),t}(),Pe=/^__.*__$/,Oe=function(){"use strict";function t(n,i,r){e(a)(this,t),this.data=n,this.fieldMask=i,this.fieldTransforms=r}return e(u)(t,[{key:"toMutation",value:function(t,e){return null!==this.fieldMask?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new ee(t,this.data,e,this.fieldTransforms)}}]),t}(),Fe=function(){"use strict";function t(n,i,r){e(a)(this,t),this.data=n,this.fieldMask=i,this.fieldTransforms=r}return e(u)(t,[{key:"toMutation",value:function(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}var Be=function(){"use strict";function t(n,i,r,o,s,u){e(a)(this,t),this.settings=n,this.databaseId=i,this.C=r,this.ignoreUndefinedProperties=o,void 0===s&&this.nt(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return e(u)(t,[{key:"path",get:function(){return this.settings.path}},{key:"rt",get:function(){return this.settings.rt}},{key:"st",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"it",value:function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.st({path:n,ot:!1});return i.ut(t),i}},{key:"ct",value:function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.st({path:n,ot:!1});return i.nt(),i}},{key:"at",value:function(t){return this.st({path:void 0,ot:!0})}},{key:"ht",value:function(t){return on(t,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}},{key:"contains",value:function(t){return void 0!==this.fieldMask.find((function(e){return t.isPrefixOf(e)}))||void 0!==this.fieldTransforms.find((function(e){return t.isPrefixOf(e.field)}))}},{key:"nt",value:function(){if(this.path)for(var t=0;t<this.path.length;t++)this.ut(this.path.get(t))}},{key:"ut",value:function(t){if(0===t.length)throw this.ht("Document fields must not be empty");if(Ue(this.rt)&&Pe.test(t))throw this.ht('Document fields cannot begin and end with "__"')}}]),t}(),qe=function(){"use strict";function t(n,i,r){e(a)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=i,this.C=r||ge(n)}return e(u)(t,[{key:"dt",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Be({rt:t,methodName:e,ft:n,path:rt.emptyPath(),ot:!1,lt:i},this.databaseId,this.C,this.ignoreUndefinedProperties)}}]),t}();function je(t){var e=t._freezeSettings(),n=ge(t._databaseId);return new qe(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ge(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=t.dt(o.merge||o.mergeFields?2:0,e,n,r);tn("Data must be an object, but it was:",a,i);var s,u,l=Qe(i,a);if(o.merge)s=new xt(a.fieldMask),u=a.fieldTransforms;else if(o.mergeFields){var c=[],f=!0,h=!1,d=void 0;try{for(var p,v=o.mergeFields[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var m=p.value,y=en(e,m,n);if(!a.contains(y))throw new H(D,"Field '".concat(y,"' is specified in your field mask but missing from your input data."));an(c,y)||c.push(y)}}catch(t){h=!0,d=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}s=new xt(c),u=a.fieldTransforms.filter((function(t){return s.covers(t.field)}))}else s=null,u=a.fieldTransforms;return new Oe(new jt(l),s,u)}var He=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(){return e(a)(this,i),n.apply(this,arguments)}return e(u)(i,[{key:"_toFieldTransform",value:function(t){if(2!==t.rt)throw 1===t.rt?t.ht("".concat(this._methodName,"() can only appear at the top level of your update data")):t.ht("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return t.fieldMask.push(t.path),null}},{key:"isEqual",value:function(t){return t instanceof i}}]),i}(Me);function Ke(t,e,n){return new Be({rt:3,ft:e.settings.ft,methodName:t._methodName,ot:n},e.databaseId,e.C,e.ignoreUndefinedProperties)}var We=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this,t)).wt=r,e(h)(o)}return e(u)(i,[{key:"_toFieldTransform",value:function(t){var e=Ke(this,t,!0),n=this.wt.map((function(t){return Ze(t,e)})),i=new Xt(n);return new Qt(t.path,i)}},{key:"isEqual",value:function(t){return this===t}}]),i}(Me),Ye=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t,r){var o;return e(a)(this,i),(o=n.call(this,t)).wt=r,e(h)(o)}return e(u)(i,[{key:"_toFieldTransform",value:function(t){var e=Ke(this,t,!0),n=this.wt.map((function(t){return Ze(t,e)})),i=new Jt(n);return new Qt(t.path,i)}},{key:"isEqual",value:function(t){return this===t}}]),i}(Me);function Xe(t,e,n,i){var r=t.dt(1,e,n);tn("Data must be an object, but it was:",r,i);var o=[],a=jt.empty();Et(i,(function(t,i){var s=rn(e,t,n);i=(0,w.getModularInstance)(i);var u=r.ct(s);if(i instanceof He)o.push(s);else{var l=Ze(i,u);null!=l&&(o.push(s),a.set(s,l))}}));var s=new xt(o);return new Fe(a,s,r.fieldTransforms)}function Je(t,e,n,i,r,o){var a=t.dt(1,e,n),s=[en(e,i,n)],u=[r];if(o.length%2!=0)throw new H(D,"Function ".concat(e,"() needs to be called with an even number of arguments that alternate between field names and values."));for(var l=0;l<o.length;l+=2)s.push(en(e,o[l])),u.push(o[l+1]);for(var c=[],f=jt.empty(),h=s.length-1;h>=0;--h)if(!an(c,s[h])){var d=s[h],p=u[h];p=(0,w.getModularInstance)(p);var v=a.ct(d);if(p instanceof He)c.push(d);else{var m=Ze(p,v);null!=m&&(c.push(d),f.set(d,m))}}var y=new xt(c);return new Fe(f,y,a.fieldTransforms)}function Ze(t,e){if($e(t=(0,w.getModularInstance)(t)))return tn("Unsupported field value:",e,t),Qe(t,e);if(t instanceof Me)return function(t,e){if(!Ue(e.rt))throw e.ht("".concat(t._methodName,"() can only be used with update() and set()"));if(!e.path)throw e.ht("".concat(t._methodName,"() is not currently supported inside arrays"));var n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&4!==e.rt)throw e.ht("Nested arrays are not supported");return function(t,e){var n=[],i=0,r=!0,o=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var l=Ze(s.value,e.at(i));null==l&&(l={nullValue:"NULL_VALUE"}),n.push(l),i++}}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,w.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Kt(e.C,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){var n=wt.fromDate(t);return{timestampValue:ae(e.C,n)}}if(t instanceof wt){var i=new wt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ae(e.C,i)}}if(t instanceof Ve)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ze)return{bytesValue:se(e.C,t._byteString)};if(t instanceof xe){var r=e.databaseId,o=t.firestore._databaseId;if(!o.isEqual(r))throw e.ht("Document reference is for database ".concat(o.projectId,"/").concat(o.database," but should be for database ").concat(r.projectId,"/").concat(r.database));return{referenceValue:ce(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ht("Unsupported field value: ".concat(ut(t)))}(t,e)}function Qe(t,e){var n={};return function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Et(t,(function(t,i){var r=Ze(i,e.it(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function $e(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof Ve||t instanceof ze||t instanceof xe||t instanceof Me)}function tn(t,e,n){if(!$e(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){var i=ut(n);throw"an object"===i?e.ht(t+" a custom object"):e.ht(t+" "+i)}var r}function en(t,e,n){if((e=(0,w.getModularInstance)(e))instanceof De)return e._internalPath;if("string"==typeof e)return rn(t,e);throw on("Field path arguments must be of type string or ",t,!1,void 0,n)}var nn=new RegExp("[~\\*/\\[\\]]");function rn(t,n,i){if(n.search(nn)>=0)throw on("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,i);try{return e(s)(De,e(p)(n.split(".")))._internalPath}catch(e){throw on("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,i)}}function on(t,e,n,i,r){var o=i&&!i.isEmpty(),a=void 0!==r,s="Function ".concat(e,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(o||a)&&(u+=" (found",o&&(u+=" in field ".concat(i)),a&&(u+=" in document ".concat(r)),u+=")"),new H(D,s+t+u)}function an(t,e){return t.some((function(t){return t.isEqual(e)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn=function(){"use strict";function t(n,i,r,o,s){e(a)(this,t),this._firestore=n,this._userDataWriter=i,this._key=r,this._document=o,this._converter=s}return e(u)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new xe(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var t=new un(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(t){if(this._document){var e=this._document.data.field(ln("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}]),t}(),un=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(){return e(a)(this,i),n.apply(this,arguments)}return e(u)(i,[{key:"data",value:function(){return e(l)(e(c)(i.prototype),"data",this).call(this)}}]),i}(sn);function ln(t,e){return"string"==typeof e?rn(t,e):e instanceof De?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(t,e,n){return t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}var fn=function(t){"use strict";e(f)(i,t);var n=e(v)(i);function i(t){var r;return e(a)(this,i),(r=n.call(this)).firestore=t,e(h)(r)}return e(u)(i,[{key:"convertBytes",value:function(t){return new ze(t)}},{key:"convertReference",value:function(t){var e=this.convertDocumentKey(t,this.firestore._databaseId);return new xe(this.firestore,null,e)}}]),i}(function(){"use strict";function t(){e(a)(this,t)}return e(u)(t,[{key:"convertValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Ft(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}},{key:"convertObject",value:function(t,e){var n=this,i={};return Et(t.fields,(function(t,r){i[t]=n.convertValue(r,e)})),i}},{key:"convertGeoPoint",value:function(t){return new Ve(zt(t.latitude),zt(t.longitude))}},{key:"convertArray",value:function(t,e){var n=this;return(t.values||[]).map((function(t){return n.convertValue(t,e)}))}},{key:"convertServerTimestamp",value:function(t,e){switch(e){case"previous":var n=Pt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ot(t));default:return null}}},{key:"convertTimestamp",value:function(t){var e=Dt(t);return new wt(e.seconds,e.nanos)}},{key:"convertDocumentKey",value:function(t,e){var n=nt.fromString(t);x(ye(n));var i=new tt(n.get(1),n.get(3)),r=new ot(n.popFirst(5));return i.isEqual(e)||_("Document ".concat(r," contains a document reference within a different database (").concat(i.projectId,"/").concat(i.database,") which is not supported. It will be treated as a reference in the current database (").concat(e.projectId,"/").concat(e.database,") instead.")),r}}]),t}());function hn(t){var e=_e((t=lt(t,xe)).firestore),n=new fn(t.firestore);return Te(e,[t._key]).then((function(e){x(1===e.length);var i=e[0];return new sn(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)}))}function dn(t,e,n){var i=cn((t=lt(t,xe)).converter,e,n),r=Ge(je(t.firestore),"setDoc",t._key,i,null!==t.converter,n);return we(_e(t.firestore),[r.toMutation(t._key,$t.none())])}function pn(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a,s=je((t=lt(t,xe)).firestore);return a="string"==typeof(e=(0,w.getModularInstance)(e))||e instanceof De?Je(s,"updateDoc",t._key,e,n,r):Xe(s,"updateDoc",t._key,e),we(_e(t.firestore),[a.toMutation(t._key,$t.exists(!0))])}function vn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new We("arrayUnion",e)}function mn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new Ye("arrayRemove",e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn="".concat(y.SDK_VERSION,"_lite"),T=yn,(0,y._registerComponent)(new(0,g.Component)("firestore/lite",(function(t,e){var n=e.instanceIdentifier,i=e.options,r=t.getProvider("app").getImmediate(),o=new Ce(new Y(t.getProvider("auth-internal")),new Q(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(D,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId,e)}(r,n),r);return i&&o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,y.registerVersion)("firestore-lite","3.4.15",""),(0,y.registerVersion)("firestore-lite","3.4.15","esm2017")})),o.register("k6tlf",(function(t,e){var i;void 0!==n||(window||t.exports.window||t.exports.global),i=function(t){"use strict";var e={},n="iziToast",i=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),r=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),o="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,s=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],u=568,l={};e.children={};var c={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var f=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};f.prototype=window.Event.prototype,window.CustomEvent=f}var h=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(n,t[i],i,t);else if(t)for(var r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)},d=function(t,e){var n={};return h(t,(function(e,i){n[i]=t[i]})),h(e,(function(t,i){n[i]=e[i]})),n},p=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},v={move:function(t,e,n,i){var a,s=.3,u=180;0!==i&&(t.classList.add("iziToast-dragged"),t.style.transform="translateX("+i+"px)",i>0?(a=(u-i)/u)<s&&e.hide(d(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):(a=(u+i)/u)<s&&e.hide(d(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),t.style.opacity=a,a<s&&((r||o)&&(t.style.left=i+"px"),t.parentNode.style.opacity=s,this.stopMoving(t,null)))},startMoving:function(t,e,n,i){i=i||window.event;var r=a?i.touches[0].clientX:i.clientX,o=t.style.transform.replace("px)",""),s=r-(o=o.replace("translateX(",""));n.transitionIn&&t.classList.remove(n.transitionIn),n.transitionInMobile&&t.classList.remove(n.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(i){i.preventDefault();var r=(i=i||window.event).touches[0].clientX-s;v.move(t,e,n,r)}:document.onmousemove=function(i){i.preventDefault();var r=(i=i||window.event).clientX-s;v.move(t,e,n,r)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains("iziToast-dragged")&&(t.classList.remove("iziToast-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout((function(){t.style.transition=""}),400))}};return e.setSetting=function(t,n,i){e.children[t][n]=i},e.getSetting=function(t,n){return e.children[t][n]},e.destroy=function(){h(document.querySelectorAll(".iziToast-overlay"),(function(t,e){t.remove()})),h(document.querySelectorAll(".iziToast-wrapper"),(function(t,e){t.remove()})),h(document.querySelectorAll(".iziToast"),(function(t,e){t.remove()})),this.children={},document.removeEventListener("iziToast-opened",{},!1),document.removeEventListener("iziToast-opening",{},!1),document.removeEventListener("iziToast-closing",{},!1),document.removeEventListener("iziToast-closed",{},!1),document.removeEventListener("keyup",{},!1),l={}},e.settings=function(t){e.destroy(),l=t,c=d(c,t||{})},h({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},(function(t,n){e[n]=function(e){var n=d(l,e||{});n=d(t,n||{}),this.show(n)}})),e.progress=function(t,e,n){var i=this,r=e.getAttribute("data-iziToast-ref"),o=d(this.children[r],t||{}),a=e.querySelector(".iziToast-progressbar div");return{start:function(){void 0===o.time.REMAINING&&(e.classList.remove("iziToast-reseted"),null!==a&&(a.style.transition="width "+o.timeout+"ms "+o.progressBarEasing,a.style.width="0%"),o.time.START=(new Date).getTime(),o.time.END=o.time.START+o.timeout,o.time.TIMER=setTimeout((function(){clearTimeout(o.time.TIMER),e.classList.contains("iziToast-closing")||(i.hide(o,e,"timeout"),"function"==typeof n&&n.apply(i))}),o.timeout),i.setSetting(r,"time",o.time))},pause:function(){if(void 0!==o.time.START&&!e.classList.contains("iziToast-paused")&&!e.classList.contains("iziToast-reseted")){if(e.classList.add("iziToast-paused"),o.time.REMAINING=o.time.END-(new Date).getTime(),clearTimeout(o.time.TIMER),i.setSetting(r,"time",o.time),null!==a){var t=window.getComputedStyle(a).getPropertyValue("width");a.style.transition="none",a.style.width=t}"function"==typeof n&&setTimeout((function(){n.apply(i)}),10)}},resume:function(){void 0!==o.time.REMAINING?(e.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="width "+o.time.REMAINING+"ms "+o.progressBarEasing,a.style.width="0%"),o.time.END=(new Date).getTime()+o.time.REMAINING,o.time.TIMER=setTimeout((function(){clearTimeout(o.time.TIMER),e.classList.contains("iziToast-closing")||(i.hide(o,e,"timeout"),"function"==typeof n&&n.apply(i))}),o.time.REMAINING),i.setSetting(r,"time",o.time)):this.start()},reset:function(){clearTimeout(o.time.TIMER),delete o.time.REMAINING,i.setSetting(r,"time",o.time),e.classList.add("iziToast-reseted"),e.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof n&&setTimeout((function(){n.apply(i)}),10)}}},e.hide=function(t,e,n){"object"!=typeof e&&(e=document.querySelector(e));var r=this,o=d(this.children[e.getAttribute("data-iziToast-ref")],t||{});o.closedBy=n||null,delete o.time.REMAINING,e.classList.add("iziToast-closing"),function(){var t=document.querySelector(".iziToast-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),n=(e=e.split(",")).indexOf(String(o.ref));-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout((function(){t.remove()}),700))}}(),o.transitionIn&&e.classList.remove(o.transitionIn),o.transitionInMobile&&e.classList.remove(o.transitionInMobile),i||window.innerWidth<=u?o.transitionOutMobile&&e.classList.add(o.transitionOutMobile):o.transitionOut&&e.classList.add(o.transitionOut);var a=e.parentNode.offsetHeight;e.parentNode.style.height=a+"px",e.style.pointerEvents="none",(!i||window.innerWidth>u)&&(e.parentNode.style.transitionDelay="0.2s");try{var s=new CustomEvent("iziToast-closing",{detail:o,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(t){console.warn(t)}setTimeout((function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout((function(){delete r.children[o.ref],e.parentNode.remove();try{var t=new CustomEvent("iziToast-closed",{detail:o,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}void 0!==o.onClosed&&o.onClosed.apply(null,[o,e,n])}),1e3)}),200),void 0!==o.onClosing&&o.onClosing.apply(null,[o,e,n])},e.show=function(t){var r,o=this,f=d(l,t||{});if((f=d(c,f)).time={},null===f.id&&(f.id=(r=f.title+f.message+f.color,btoa(encodeURIComponent(r)).replace(/=/g,""))),1===f.displayMode||"once"==f.displayMode)try{if(document.querySelectorAll(".iziToast#"+f.id).length>0)return!1}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+f.id+". Try to set an valid id.")}if(2===f.displayMode||"replace"==f.displayMode)try{h(document.querySelectorAll(".iziToast#"+f.id),(function(t,e){o.hide(f,t,"replaced")}))}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+f.id+". Try to set an valid id.")}f.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[f.ref]=f;var m,y={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:f.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};y.toast.setAttribute("data-iziToast-ref",f.ref),y.toast.appendChild(y.toastBody),y.toastCapsule.appendChild(y.toast),function(){if(y.toast.classList.add(n),y.toast.classList.add("iziToast-opening"),y.toastCapsule.classList.add("iziToast-capsule"),y.toastBody.classList.add("iziToast-body"),y.toastTexts.classList.add("iziToast-texts"),i||window.innerWidth<=u?f.transitionInMobile&&y.toast.classList.add(f.transitionInMobile):f.transitionIn&&y.toast.classList.add(f.transitionIn),f.class){var t=f.class.split(" ");h(t,(function(t,e){y.toast.classList.add(t)}))}var e;f.id&&(y.toast.id=f.id),f.rtl&&(y.toast.classList.add("iziToast-rtl"),y.toast.setAttribute("dir","rtl")),f.layout>1&&y.toast.classList.add("iziToast-layout"+f.layout),f.balloon&&y.toast.classList.add("iziToast-balloon"),f.maxWidth&&(isNaN(f.maxWidth)?y.toast.style.maxWidth=f.maxWidth:y.toast.style.maxWidth=f.maxWidth+"px"),""===f.theme&&"light"===f.theme||y.toast.classList.add("iziToast-theme-"+f.theme),f.color&&("#"==(e=f.color).substring(0,1)||"rgb"==e.substring(0,3)||"hsl"==e.substring(0,3)?y.toast.style.background=f.color:y.toast.classList.add("iziToast-color-"+f.color)),f.backgroundColor&&(y.toast.style.background=f.backgroundColor,f.balloon&&(y.toast.style.borderColor=f.backgroundColor))}(),f.image&&(y.cover.classList.add("iziToast-cover"),y.cover.style.width=f.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(f.image.replace(/ /g,""))?y.cover.style.backgroundImage="url(data:image/png;base64,"+f.image.replace(/ /g,"")+")":y.cover.style.backgroundImage="url("+f.image+")",f.rtl?y.toastBody.style.marginRight=f.imageWidth+10+"px":y.toastBody.style.marginLeft=f.imageWidth+10+"px",y.toast.appendChild(y.cover)),f.close?(y.buttonClose=document.createElement("button"),y.buttonClose.type="button",y.buttonClose.classList.add("iziToast-close"),y.buttonClose.addEventListener("click",(function(t){t.target,o.hide(f,y.toast,"button")})),y.toast.appendChild(y.buttonClose)):f.rtl?y.toast.style.paddingLeft="18px":y.toast.style.paddingRight="18px",f.progressBar&&(y.progressBar=document.createElement("div"),y.progressBarDiv=document.createElement("div"),y.progressBar.classList.add("iziToast-progressbar"),y.progressBarDiv.style.background=f.progressBarColor,y.progressBar.appendChild(y.progressBarDiv),y.toast.appendChild(y.progressBar)),f.timeout&&(f.pauseOnHover&&!f.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){o.progress(f,y.toast).pause()})),y.toast.addEventListener("mouseleave",(function(t){o.progress(f,y.toast).resume()}))),f.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){o.progress(f,y.toast).reset()})),y.toast.addEventListener("mouseleave",(function(t){o.progress(f,y.toast).start()})))),f.iconUrl?(y.icon.setAttribute("class","iziToast-icon"),y.icon.setAttribute("src",f.iconUrl)):f.icon&&(y.icon.setAttribute("class","iziToast-icon "+f.icon),f.iconText&&y.icon.appendChild(document.createTextNode(f.iconText)),f.iconColor&&(y.icon.style.color=f.iconColor)),(f.icon||f.iconUrl)&&(f.rtl?y.toastBody.style.paddingRight="33px":y.toastBody.style.paddingLeft="33px",y.toastBody.appendChild(y.icon)),f.title.length>0&&(y.strong=document.createElement("strong"),y.strong.classList.add("iziToast-title"),y.strong.appendChild(p(f.title)),y.toastTexts.appendChild(y.strong),f.titleColor&&(y.strong.style.color=f.titleColor),f.titleSize&&(isNaN(f.titleSize)?y.strong.style.fontSize=f.titleSize:y.strong.style.fontSize=f.titleSize+"px"),f.titleLineHeight&&(isNaN(f.titleSize)?y.strong.style.lineHeight=f.titleLineHeight:y.strong.style.lineHeight=f.titleLineHeight+"px")),f.message.length>0&&(y.p=document.createElement("p"),y.p.classList.add("iziToast-message"),y.p.appendChild(p(f.message)),y.toastTexts.appendChild(y.p),f.messageColor&&(y.p.style.color=f.messageColor),f.messageSize&&(isNaN(f.titleSize)?y.p.style.fontSize=f.messageSize:y.p.style.fontSize=f.messageSize+"px"),f.messageLineHeight&&(isNaN(f.titleSize)?y.p.style.lineHeight=f.messageLineHeight:y.p.style.lineHeight=f.messageLineHeight+"px")),f.title.length>0&&f.message.length>0&&(f.rtl?y.strong.style.marginLeft="10px":2===f.layout||f.rtl||(y.strong.style.marginRight="10px")),y.toastBody.appendChild(y.toastTexts),f.inputs.length>0&&(y.inputs.classList.add("iziToast-inputs"),h(f.inputs,(function(t,e){y.inputs.appendChild(p(t[0])),(m=y.inputs.childNodes)[e].classList.add("iziToast-inputs-child"),t[3]&&setTimeout((function(){m[e].focus()}),300),m[e].addEventListener(t[1],(function(e){return(0,t[2])(o,y.toast,this,e)}))})),y.toastBody.appendChild(y.inputs)),f.buttons.length>0&&(y.buttons.classList.add("iziToast-buttons"),h(f.buttons,(function(t,e){y.buttons.appendChild(p(t[0]));var n=y.buttons.childNodes;n[e].classList.add("iziToast-buttons-child"),t[2]&&setTimeout((function(){n[e].focus()}),300),n[e].addEventListener("click",(function(e){return e.preventDefault(),(0,t[1])(o,y.toast,this,e,m)}))}))),y.toastBody.appendChild(y.buttons),f.message.length>0&&(f.inputs.length>0||f.buttons.length>0)&&(y.p.style.marginBottom="0"),(f.inputs.length>0||f.buttons.length>0)&&(f.rtl?y.toastTexts.style.marginLeft="10px":y.toastTexts.style.marginRight="10px",f.inputs.length>0&&f.buttons.length>0&&(f.rtl?y.inputs.style.marginLeft="8px":y.inputs.style.marginRight="8px")),y.toastCapsule.style.visibility="hidden",setTimeout((function(){var t=y.toast.offsetHeight,e=y.toast.currentStyle||window.getComputedStyle(y.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var i=e.marginBottom;i=i.split("px"),i=parseInt(i[0]),y.toastCapsule.style.visibility="",y.toastCapsule.style.height=t+i+n+"px",setTimeout((function(){y.toastCapsule.style.height="auto",f.target&&(y.toastCapsule.style.overflow="visible")}),500),f.timeout&&o.progress(f,y.toast).start()}),100),function(){var t=f.position;if(f.target)y.wrapper=document.querySelector(f.target),y.wrapper.classList.add("iziToast-target"),f.targetFirst?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule);else{if(-1==s.indexOf(f.position))return void console.warn("[iziToast] Incorrect position.\nIt can be › "+s);t=i||window.innerWidth<=u?"bottomLeft"==f.position||"bottomRight"==f.position||"bottomCenter"==f.position?"iziToast-wrapper-bottomCenter":"topLeft"==f.position||"topRight"==f.position||"topCenter"==f.position?"iziToast-wrapper-topCenter":"iziToast-wrapper-center":"iziToast-wrapper-"+t,y.wrapper=document.querySelector(".iziToast-wrapper."+t),y.wrapper||(y.wrapper=document.createElement("div"),y.wrapper.classList.add("iziToast-wrapper"),y.wrapper.classList.add(t),document.body.appendChild(y.wrapper)),"topLeft"==f.position||"topCenter"==f.position||"topRight"==f.position?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule)}isNaN(f.zindex)?console.warn("[iziToast] Invalid zIndex."):y.wrapper.style.zIndex=f.zindex}(),f.overlay&&(null!==document.querySelector(".iziToast-overlay.fadeIn")?(y.overlay=document.querySelector(".iziToast-overlay"),y.overlay.setAttribute("data-iziToast-ref",y.overlay.getAttribute("data-iziToast-ref")+","+f.ref),isNaN(f.zindex)||null===f.zindex||(y.overlay.style.zIndex=f.zindex-1)):(y.overlay.classList.add("iziToast-overlay"),y.overlay.classList.add("fadeIn"),y.overlay.style.background=f.overlayColor,y.overlay.setAttribute("data-iziToast-ref",f.ref),isNaN(f.zindex)||null===f.zindex||(y.overlay.style.zIndex=f.zindex-1),document.querySelector("body").appendChild(y.overlay)),f.overlayClose?(y.overlay.removeEventListener("click",{}),y.overlay.addEventListener("click",(function(t){o.hide(f,y.toast,"overlay")}))):y.overlay.removeEventListener("click",{})),function(){if(f.animateInside){y.toast.classList.add("iziToast-animateInside");var t=[200,100,300];"bounceInLeft"!=f.transitionIn&&"bounceInRight"!=f.transitionIn||(t=[400,200,400]),f.title.length>0&&setTimeout((function(){y.strong.classList.add("slideIn")}),t[0]),f.message.length>0&&setTimeout((function(){y.p.classList.add("slideIn")}),t[1]),(f.icon||f.iconUrl)&&setTimeout((function(){y.icon.classList.add("revealIn")}),t[2]);var e=150;f.buttons.length>0&&y.buttons&&setTimeout((function(){h(y.buttons.childNodes,(function(t,n){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150}))}),f.inputs.length>0?150:0),f.inputs.length>0&&y.inputs&&(e=150,h(y.inputs.childNodes,(function(t,n){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150})))}}(),f.onOpening.apply(null,[f,y.toast]);try{var g=new CustomEvent("iziToast-opening",{detail:f,bubbles:!0,cancelable:!0});document.dispatchEvent(g)}catch(t){console.warn(t)}setTimeout((function(){y.toast.classList.remove("iziToast-opening"),y.toast.classList.add("iziToast-opened");try{var t=new CustomEvent("iziToast-opened",{detail:f,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}f.onOpened.apply(null,[f,y.toast])}),1e3),f.drag&&(a?(y.toast.addEventListener("touchstart",(function(t){v.startMoving(this,o,f,t)}),!1),y.toast.addEventListener("touchend",(function(t){v.stopMoving(this,t)}),!1)):(y.toast.addEventListener("mousedown",(function(t){t.preventDefault(),v.startMoving(this,o,f,t)}),!1),y.toast.addEventListener("mouseup",(function(t){t.preventDefault(),v.stopMoving(this,t)}),!1))),f.closeOnEscape&&document.addEventListener("keyup",(function(t){27==(t=t||window.event).keyCode&&o.hide(f,y.toast,"esc")})),f.closeOnClick&&y.toast.addEventListener("click",(function(t){o.hide(f,y.toast,"toast")})),o.toast=y.toast},e},"function"==typeof define&&define.amd?define([],i()):t.exports=i()})),o.register("jHF6Y",(function(t,e){!function(){var t={openModalBtnDevelopers:document.querySelector("[modal-developers-open]"),closeModalBtnDevelopers:document.querySelector("[modal-developers-close]"),modalDeveloper:document.querySelector("[data-modal-developer]")};function e(){t.modalDeveloper.classList.add("is-hidden__developers")}t.openModalBtnDevelopers.addEventListener("click",(function(){t.modalDeveloper.classList.remove("is-hidden__developers")})),t.closeModalBtnDevelopers.addEventListener("click",e),t.modalDeveloper.addEventListener("click",(function(t){t.currentTarget===t.target&&e()})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&e()}))}()}))}();
//# sourceMappingURL=index.398bedef.js.map
