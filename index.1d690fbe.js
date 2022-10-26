function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},e.parcelRequired7c6=i),i.register("9jUAk",(function(e,n){t(e.exports,"getFirestore",(function(){return i("1F6fF").getFirestore})),t(e.exports,"getDoc",(function(){return i("1F6fF").getDoc})),t(e.exports,"doc",(function(){return i("1F6fF").doc})),t(e.exports,"updateDoc",(function(){return i("1F6fF").updateDoc})),t(e.exports,"arrayRemove",(function(){return i("1F6fF").arrayRemove})),t(e.exports,"setDoc",(function(){return i("1F6fF").setDoc})),t(e.exports,"arrayUnion",(function(){return i("1F6fF").arrayUnion})),i("1F6fF")})),i.register("1F6fF",(function(e,n){t(e.exports,"getFirestore",(function(){return he})),t(e.exports,"doc",(function(){return ge})),t(e.exports,"getDoc",(function(){return Xe})),t(e.exports,"setDoc",(function(){return Ye})),t(e.exports,"updateDoc",(function(){return Je})),t(e.exports,"arrayUnion",(function(){return Ze})),t(e.exports,"arrayRemove",(function(){return Qe}));var s=i("ix4Jr"),r=i("4a6xH"),o=i("7vF8m"),a=i("ffjl9");
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
class l{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
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
let u="9.9.4";
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
 */const c=new(0,o.Logger)("@firebase/firestore");function d(t,...e){if(c.logLevel<=o.LogLevel.DEBUG){const n=e.map(f);c.debug(`Firestore (${u}): ${t}`,...n)}}function h(t,...e){if(c.logLevel<=o.LogLevel.ERROR){const n=e.map(f);c.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(c.logLevel<=o.LogLevel.WARN){const n=e.map(f);c.warn(`Firestore (${u}): ${t}`,...n)}}function f(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function m(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw h(e),new Error(e)}function g(t,e){t||m()}function y(t,e){return t}
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
 */const v="cancelled",w="unknown",b="invalid-argument",T="deadline-exceeded",E="not-found",S="permission-denied",_="unauthenticated",I="resource-exhausted",C="failed-precondition",L="aborted",k="out-of-range",x="unimplemented",N="internal",R="unavailable";class z extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class D{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(l.UNAUTHENTICATED)))}shutdown(){}}class M{getToken(){return this.auth?this.auth.getToken().then((t=>t?(g("string"==typeof t.accessToken),new D(t.accessToken,new l(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}}class V{l(){return this.u?this.u():(g(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}constructor(t,e,n,s){this.t=t,this.i=e,this.o=n,this.u=s,this.type="FirstParty",this.user=l.FIRST_PARTY,this.h=new Map}}class F{getToken(){return Promise.resolve(new V(this.t,this.i,this.o,this.u))}start(t,e){t.enqueueRetryable((()=>e(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,s){this.t=t,this.i=e,this.o=n,this.u=s}}class P{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{getToken(){return this.appCheck?this.appCheck.getToken().then((t=>t?(g("string"==typeof t.token),new P(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}constructor(t){this.m=t,this.appCheck=null,t.onInit((t=>{this.appCheck=t}))}}
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
 */class U{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class B{static empty(){return new B("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof B&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}class q{get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.len=n}}class j extends q{construct(t,e,n){return new j(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new z(b,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new j(e)}static emptyPath(){return new j([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends q{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return $.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new z(b,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new z(b,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new z(b,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new z(b,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
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
 */class G{static fromPath(t){return new G(j.fromString(t))}static fromName(t){return new G(j.fromString(t).popFirst(5))}static empty(){return new G(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===j.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return j.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new j(t.slice()))}constructor(t){this.path=t}}
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
 */function K(t,e,n){if(!n)throw new z(b,`Function ${t}() cannot be called with an empty ${e}.`)}function W(t){if(!G.isDocumentKey(t))throw new z(b,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function X(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":m()}function Y(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=X(t);throw new z(b,`Expected type '${e.name}', but it was: ${n}`)}}return t}function J(t){return 0===t&&1/t==-1/0}
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
 */const Z={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var Q,tt;function et(t){if(void 0===t)return h("RPC_ERROR","HTTP error has no status"),w;switch(t){case 200:return"ok";case 400:return C;case 401:return _;case 403:return S;case 404:return E;case 409:return L;case 416:return k;case 429:return I;case 499:return v;case 500:return w;case 501:return x;case 503:return R;case 504:return T;default:return t>=200&&t<300?"ok":t>=400&&t<500?C:t>=500&&t<600?N:w}}
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
 */(tt=Q||(Q={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";class nt extends class{v(t,e,n,s,i){const r=this.T(t,e);d("RestConnection","Sending: ",r,n);const o={};return this.I(o,s,i),this.A(t,r,o,n).then((t=>(d("RestConnection","Received: ",t),t)),(e=>{throw p("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}R(t,e,n,s,i,r){return this.v(t,e,n,s,i)}I(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}T(t,e){const n=Z[t];return`${this.p}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.p=e+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{V(t,e){throw new Error("Not supported by FetchConnection")}async A(t,e,n,s){const i=JSON.stringify(s);let r;try{r=await this.P(e,{method:"POST",headers:n,body:i})}catch(t){throw new z(et(t.status),"Request failed with error: "+t.statusText)}if(!r.ok)throw new z(et(r.status),"Request failed with error: "+r.statusText);return r.json()}constructor(t,e){super(t),this.P=e}}
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
 */function st(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class it{static N(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=st(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function rt(t,e){return t<e?-1:t>e?1:0}function ot(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
 */class at{static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new at(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(b,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(b,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new z(b,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(b,"Timestamp seconds out of range: "+t)}}
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
 */class lt{static fromTimestamp(t){return new lt(t)}static min(){return new lt(new at(0,0))}static max(){return new lt(new at(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */function ut(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ct(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
 */class dt{insert(t,e){return new dt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ht(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ht(this.root,t,this.comparator,!1)}getReverseIterator(){return new ht(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ht(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}}class ht{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class pt{copy(t,e,n,s,i){return new pt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m();if(this.right.isRed())throw m();const t=this.left.check();if(t!==this.right.check())throw m();return t+(this.isRed()?0:1)}constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:pt.RED,this.left=null!=s?s:pt.EMPTY,this.right=null!=i?i:pt.EMPTY,this.size=this.left.size+1+this.right.size}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1,pt.EMPTY=new class{get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class ft{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mt(this.data.getIterator())}getIteratorFrom(t){return new mt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ft))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new dt(this.comparator)}}class mt{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
 */class gt{static empty(){return new gt([])}unionWith(t){let e=new ft(H.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ot(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(H.comparator)}}let yt=Symbol.iterator;
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
 */class vt{static fromBase64String(t){const e=atob(t);return new vt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new vt(e)}[yt](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}vt.EMPTY_BYTE_STRING=new vt("");const wt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(t){if(g(!!t),"string"==typeof t){let e=0;const n=wt.exec(t);if(g(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Tt(t.seconds),nanos:Tt(t.nanos)}}function Tt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Et(t){return"string"==typeof t?vt.fromBase64String(t):vt.fromUint8Array(t)}
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
 */function St(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _t(t){const e=t.mapValue.fields.__previous_value__;return St(e)?_t(e):e}function It(t){const e=bt(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}
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
 */function Ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?St(t)?4:"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:m()}function Lt(t,e){if(t===e)return!0;const n=Ct(t);if(n!==Ct(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return It(t).isEqual(It(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=bt(t.timestampValue),s=bt(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Et(t.bytesValue).isEqual(Et(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Tt(t.geoPointValue.latitude)===Tt(e.geoPointValue.latitude)&&Tt(t.geoPointValue.longitude)===Tt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Tt(t.integerValue)===Tt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Tt(t.doubleValue),s=Tt(e.doubleValue);return n===s?J(n)===J(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ot(t.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ut(n)!==ut(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Lt(n[t],s[t])))return!1;return!0}(t,e);default:return m()}var s}function kt(t){return!!t&&"mapValue"in t}function xt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ct(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=xt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xt(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Nt{static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!kt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xt(e)}setAll(t){let e=H.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=xt(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());kt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];kt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ct(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Nt(xt(this.value))}constructor(t){this.value=t}}
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
 */class Rt{static newInvalidDocument(t){return new Rt(t,0,lt.min(),lt.min(),Nt.empty(),0)}static newFoundDocument(t,e,n){return new Rt(t,1,e,lt.min(),n,0)}static newNoDocument(t,e){return new Rt(t,2,e,lt.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,lt.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=lt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}}
/**
 * @license
 * Copyright 2019 Google LLC
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
class zt{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.q=null,this.O=null,this.startAt,this.endAt}}
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
function Dt(t,e){return"number"==typeof(n=e)&&Number.isInteger(n)&&!J(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.k){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(e)?"-0":e}}(t,e);var n}
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
 */class At{constructor(){this._=void 0}}class Mt extends At{}class Vt extends At{constructor(t){super(),this.elements=t}}class Ft extends At{constructor(t){super(),this.elements=t}}class Pt extends At{constructor(t,e){super(),this.C=t,this.L=e}}
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
 */class Ot{constructor(t,e){this.field=t,this.transform=e}}class Ut{static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}class Bt{}class qt extends Bt{getFieldMask(){return null}constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class jt extends Bt{getFieldMask(){return this.fieldMask}constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}class $t extends Bt{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ht extends Bt{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Gt{constructor(t,e){this.databaseId=t,this.k=e}}function Kt(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wt(t,e){return t.k?e.toBase64():e.toUint8Array()}function Xt(t,e){return Kt(t,e.toTimestamp())}function Yt(t){return g(!!t),lt.fromTimestamp(function(t){const e=bt(t);return new at(e.seconds,e.nanos)}(t))}function Jt(t,e){return(n=t,new j(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Zt(t,e){return Jt(t.databaseId,e.path)}function Qt(t,e){const n=function(t){const e=j.fromString(t);return g(se(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);var s;return new G((g((s=n).length>4&&"documents"===s.get(4)),s.popFirst(5)))}function te(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ee(t,e,n){return{name:Zt(t,e),fields:n.value.mapValue.fields}}function ne(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function se(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function ie(t){return new Gt(t,!0)}
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
class re extends class{}{et(){if(this.tt)throw new z(C,"The client has already been terminated.")}v(t,e,n){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.Z.v(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===_&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new z(w,t.toString())}))}R(t,e,n,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Z.R(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===_&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new z(w,t.toString())}))}terminate(){this.tt=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Z=n,this.C=s,this.tt=!1}}async function oe(t,e){const n=y(t),s=te(n.C)+"/documents",i={writes:e.map((t=>function(t,e){let n;if(e instanceof qt)n={update:ee(t,e.key,e.value)};else if(e instanceof $t)n={delete:Zt(t,e.key)};else if(e instanceof jt)n={update:ee(t,e.key,e.data),updateMask:ne(e.fieldMask)};else{if(!(e instanceof Ht))return m();n={verify:Zt(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Mt)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Vt)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ft)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Pt)return{fieldPath:e.field.canonicalString(),increment:n.L};throw m()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(i=e.precondition).updateTime?{updateTime:Xt(s,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:m())),n;var s,i}(n.C,t)))};await n.v("Commit",s,i)}async function ae(t,e){const n=y(t),s=te(n.C)+"/documents",i={documents:e.map((t=>Zt(n.C,t)))},r=await n.R("BatchGetDocuments",s,i,e.length),o=new Map;r.forEach((t=>{const e=(s=n.C,"found"in(i=t)?function(t,e){g(!!e.found),e.found.name,e.found.updateTime;const n=Qt(t,e.found.name),s=Yt(e.found.updateTime),i=new Nt({mapValue:{fields:e.found.fields}});return Rt.newFoundDocument(n,s,i)}(s,i):"missing"in i?function(t,e){g(!!e.missing),g(!!e.readTime);const n=Qt(t,e.missing),s=Yt(e.readTime);return Rt.newNoDocument(n,s)}(s,i):m());var s,i;o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());g(!!e),a.push(e)})),a}
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
const le=new Map;function ue(t){if(t._terminated)throw new z(C,"The client has already been terminated.");if(!le.has(t)){d("ComponentProvider","Initializing Datastore");const o=(n=t._databaseId,s=t.app.options.appId||"",i=t._persistenceKey,r=t._freezeSettings(),e=new U(n,s,i,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams),new nt(e,fetch.bind(null))),a=ie(t._databaseId),l=function(t,e,n,s){return new re(t,e,n,s)}(t._authCredentials,t._appCheckCredentials,o,a);le.set(t,l)}var e,n,s,i,r;
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
return le.get(t)}class ce{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new z(b,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new z(b,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new z(b,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}}
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
 */class de{get app(){if(!this._app)throw new z(C,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new z(C,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ce(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return new F(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new z(b,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=le.get(t);e&&(d("ComponentProvider","Removing Datastore"),le.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ce({}),this._settingsFrozen=!1}}function he(t,e){const n="object"==typeof t?t:(0,s.getApp)(),i="string"==typeof t?t:e||"(default)";return(0,s._getProvider)(n,"firestore/lite").getImmediate({identifier:i})}
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
class pe{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pe(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class fe{withConverter(t){return new fe(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class me extends fe{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pe(this.firestore,null,new G(t))}withConverter(t){return new me(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,new zt(n)),this._path=n,this.type="collection"}}function ge(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=it.N()),K("doc","path",e),t instanceof de){const s=j.fromString(e,...n);return W(s),new pe(t,null,new G(s))}{if(!(t instanceof pe||t instanceof me))throw new z(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(j.fromString(e,...n));return W(s),new pe(t.firestore,t instanceof me?t.converter:null,new G(s))}}
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
class ye{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new z(b,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}}
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
class ve{static fromBase64String(t){try{return new ve(vt.fromBase64String(t))}catch(t){throw new z(b,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ve(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class we{constructor(t){this._methodName=t}}
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
 */class be{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(b,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(b,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const Te=/^__.*__$/;class Ee{toMutation(t,e){return null!==this.fieldMask?new jt(t,this.data,this.fieldMask,e,this.fieldTransforms):new qt(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class Se{toMutation(t,e){return new jt(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function _e(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class Ie{get path(){return this.settings.path}get rt(){return this.settings.rt}st(t){return new Ie(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.st({path:n,ot:!1});return s.ut(t),s}ct(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.st({path:n,ot:!1});return s.nt(),s}at(t){return this.st({path:void 0,ot:!0})}ht(t){return qe(t,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}nt(){if(this.path)for(let t=0;t<this.path.length;t++)this.ut(this.path.get(t))}ut(t){if(0===t.length)throw this.ht("Document fields must not be empty");if(_e(this.rt)&&Te.test(t))throw this.ht('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.C=n,this.ignoreUndefinedProperties=s,void 0===i&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=r||[]}}class Ce{dt(t,e,n,s=!1){return new Ie({rt:t,methodName:e,ft:n,path:H.emptyPath(),ot:!1,lt:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.C=n||ie(t)}}function Le(t){const e=t._freezeSettings(),n=ie(t._databaseId);return new Ce(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ke(t,e,n,s,i,r={}){const o=t.dt(r.merge||r.mergeFields?2:0,e,n,i);Pe("Data must be an object, but it was:",o,s);const a=Ve(s,o);let l,u;if(r.merge)l=new gt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Oe(e,s,n);if(!o.contains(i))throw new z(b,`Field '${i}' is specified in your field mask but missing from your input data.`);je(t,i)||t.push(i)}l=new gt(t),u=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,u=o.fieldTransforms;return new Ee(new Nt(a),l,u)}class xe extends we{_toFieldTransform(t){if(2!==t.rt)throw 1===t.rt?t.ht(`${this._methodName}() can only appear at the top level of your update data`):t.ht(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xe}}function Ne(t,e,n){return new Ie({rt:3,ft:e.settings.ft,methodName:t._methodName,ot:n},e.databaseId,e.C,e.ignoreUndefinedProperties)}class Re extends we{_toFieldTransform(t){const e=Ne(this,t,!0),n=this.wt.map((t=>Me(t,e))),s=new Vt(n);return new Ot(t.path,s)}isEqual(t){return this===t}constructor(t,e){super(t),this.wt=e}}class ze extends we{_toFieldTransform(t){const e=Ne(this,t,!0),n=this.wt.map((t=>Me(t,e))),s=new Ft(n);return new Ot(t.path,s)}isEqual(t){return this===t}constructor(t,e){super(t),this.wt=e}}function De(t,e,n,s){const i=t.dt(1,e,n);Pe("Data must be an object, but it was:",i,s);const r=[],o=Nt.empty();ct(s,((t,s)=>{const l=Be(e,t,n);s=(0,a.getModularInstance)(s);const u=i.ct(l);if(s instanceof xe)r.push(l);else{const t=Me(s,u);null!=t&&(r.push(l),o.set(l,t))}}));const l=new gt(r);return new Se(o,l,i.fieldTransforms)}function Ae(t,e,n,s,i,r){const o=t.dt(1,e,n),l=[Oe(e,s,n)],u=[i];if(r.length%2!=0)throw new z(b,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)l.push(Oe(e,r[t])),u.push(r[t+1]);const c=[],d=Nt.empty();for(let t=l.length-1;t>=0;--t)if(!je(c,l[t])){const e=l[t];let n=u[t];n=(0,a.getModularInstance)(n);const s=o.ct(e);if(n instanceof xe)c.push(e);else{const t=Me(n,s);null!=t&&(c.push(e),d.set(e,t))}}const h=new gt(c);return new Se(d,h,o.fieldTransforms)}function Me(t,e){if(Fe(t=(0,a.getModularInstance)(t)))return Pe("Unsupported field value:",e,t),Ve(t,e);if(t instanceof we)return function(t,e){if(!_e(e.rt))throw e.ht(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ht(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&4!==e.rt)throw e.ht("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Me(i,e.at(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Dt(e.C,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=at.fromDate(t);return{timestampValue:Kt(e.C,n)}}if(t instanceof at){const n=new at(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Kt(e.C,n)}}if(t instanceof be)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ve)return{bytesValue:Wt(e.C,t._byteString)};if(t instanceof pe){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ht(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jt(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ht(`Unsupported field value: ${X(t)}`)}(t,e)}function Ve(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ct(t,((t,s)=>{const i=Me(s,e.it(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Fe(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof at||t instanceof be||t instanceof ve||t instanceof pe||t instanceof we)}function Pe(t,e,n){if(!Fe(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=X(n);throw"an object"===s?e.ht(t+" a custom object"):e.ht(t+" "+s)}var s}function Oe(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof ye)return e._internalPath;if("string"==typeof e)return Be(t,e);throw qe("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ue=new RegExp("[~\\*/\\[\\]]");function Be(t,e,n){if(e.search(Ue)>=0)throw qe(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ye(...e.split("."))._internalPath}catch(s){throw qe(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qe(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new z(b,a+t+l)}function je(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class $e{get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new He(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ge("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}}class He extends $e{data(){return super.data()}}function Ge(t,e){return"string"==typeof e?Be(t,e):e instanceof ye?e._internalPath:e._delegate._internalPath}
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
function Ke(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class We extends class{convertValue(t,e="none"){switch(Ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Et(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw m()}}convertObject(t,e){const n={};return ct(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new be(Tt(t.latitude),Tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_t(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(It(t));default:return null}}convertTimestamp(t){const e=bt(t);return new at(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=j.fromString(t);g(se(n));const s=new B(n.get(1),n.get(3)),i=new G(n.popFirst(5));return s.isEqual(e)||h(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{convertBytes(t){return new ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pe(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Xe(t){const e=ue((t=Y(t,pe)).firestore),n=new We(t.firestore);return ae(e,[t._key]).then((e=>{g(1===e.length);const s=e[0];return new $e(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)}))}function Ye(t,e,n){const s=Ke((t=Y(t,pe)).converter,e,n),i=ke(Le(t.firestore),"setDoc",t._key,s,null!==t.converter,n);return oe(ue(t.firestore),[i.toMutation(t._key,Ut.none())])}function Je(t,e,n,...s){const i=Le((t=Y(t,pe)).firestore);let r;return r="string"==typeof(e=(0,a.getModularInstance)(e))||e instanceof ye?Ae(i,"updateDoc",t._key,e,n,s):De(i,"updateDoc",t._key,e),oe(ue(t.firestore),[r.toMutation(t._key,Ut.exists(!0))])}function Ze(...t){return new Re("arrayUnion",t)}function Qe(...t){return new ze("arrayRemove",t)}var tn;tn=`${s.SDK_VERSION}_lite`,u=tn,(0,s._registerComponent)(new(0,r.Component)("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),i=new de(new M(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(b,'"projectId" not provided in firebase.initializeApp.');return new B(t.options.projectId,e)}(s,e),s);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)("firestore-lite","3.4.15",""),(0,s.registerVersion)("firestore-lite","3.4.15","esm2017")})),i.register("6vf3V",(function(t,n){var s;void 0!==e||(window||t.exports.window||t.exports.global),s=function(t){var e={},n="iziToast",s=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),r="undefined"!=typeof InstallTrigger,o="ontouchstart"in document.documentElement,a=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l=568,u={};e.children={};var c={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var d=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};d.prototype=window.Event.prototype,window.CustomEvent=d}var h=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(n,t[s],s,t);else if(t)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t)},p=function(t,e){var n={};return h(t,(function(e,s){n[s]=t[s]})),h(e,(function(t,s){n[s]=e[s]})),n},f=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},m={move:function(t,e,n,s){var o,a=.3,l=180;0!==s&&(t.classList.add("iziToast-dragged"),t.style.transform="translateX("+s+"px)",s>0?(o=(l-s)/l)<a&&e.hide(p(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):(o=(l+s)/l)<a&&e.hide(p(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),t.style.opacity=o,o<a&&((i||r)&&(t.style.left=s+"px"),t.parentNode.style.opacity=a,this.stopMoving(t,null)))},startMoving:function(t,e,n,s){s=s||window.event;var i=o?s.touches[0].clientX:s.clientX,r=t.style.transform.replace("px)",""),a=i-(r=r.replace("translateX(",""));n.transitionIn&&t.classList.remove(n.transitionIn),n.transitionInMobile&&t.classList.remove(n.transitionInMobile),t.style.transition="",o?document.ontouchmove=function(s){s.preventDefault();var i=(s=s||window.event).touches[0].clientX-a;m.move(t,e,n,i)}:document.onmousemove=function(s){s.preventDefault();var i=(s=s||window.event).clientX-a;m.move(t,e,n,i)}},stopMoving:function(t,e){o?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains("iziToast-dragged")&&(t.classList.remove("iziToast-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout((function(){t.style.transition=""}),400))}};return e.setSetting=function(t,n,s){e.children[t][n]=s},e.getSetting=function(t,n){return e.children[t][n]},e.destroy=function(){h(document.querySelectorAll(".iziToast-overlay"),(function(t,e){t.remove()})),h(document.querySelectorAll(".iziToast-wrapper"),(function(t,e){t.remove()})),h(document.querySelectorAll(".iziToast"),(function(t,e){t.remove()})),this.children={},document.removeEventListener("iziToast-opened",{},!1),document.removeEventListener("iziToast-opening",{},!1),document.removeEventListener("iziToast-closing",{},!1),document.removeEventListener("iziToast-closed",{},!1),document.removeEventListener("keyup",{},!1),u={}},e.settings=function(t){e.destroy(),u=t,c=p(c,t||{})},h({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},(function(t,n){e[n]=function(e){var n=p(u,e||{});n=p(t,n||{}),this.show(n)}})),e.progress=function(t,e,n){var s=this,i=e.getAttribute("data-iziToast-ref"),r=p(this.children[i],t||{}),o=e.querySelector(".iziToast-progressbar div");return{start:function(){void 0===r.time.REMAINING&&(e.classList.remove("iziToast-reseted"),null!==o&&(o.style.transition="width "+r.timeout+"ms "+r.progressBarEasing,o.style.width="0%"),r.time.START=(new Date).getTime(),r.time.END=r.time.START+r.timeout,r.time.TIMER=setTimeout((function(){clearTimeout(r.time.TIMER),e.classList.contains("iziToast-closing")||(s.hide(r,e,"timeout"),"function"==typeof n&&n.apply(s))}),r.timeout),s.setSetting(i,"time",r.time))},pause:function(){if(void 0!==r.time.START&&!e.classList.contains("iziToast-paused")&&!e.classList.contains("iziToast-reseted")){if(e.classList.add("iziToast-paused"),r.time.REMAINING=r.time.END-(new Date).getTime(),clearTimeout(r.time.TIMER),s.setSetting(i,"time",r.time),null!==o){var t=window.getComputedStyle(o).getPropertyValue("width");o.style.transition="none",o.style.width=t}"function"==typeof n&&setTimeout((function(){n.apply(s)}),10)}},resume:function(){void 0!==r.time.REMAINING?(e.classList.remove("iziToast-paused"),null!==o&&(o.style.transition="width "+r.time.REMAINING+"ms "+r.progressBarEasing,o.style.width="0%"),r.time.END=(new Date).getTime()+r.time.REMAINING,r.time.TIMER=setTimeout((function(){clearTimeout(r.time.TIMER),e.classList.contains("iziToast-closing")||(s.hide(r,e,"timeout"),"function"==typeof n&&n.apply(s))}),r.time.REMAINING),s.setSetting(i,"time",r.time)):this.start()},reset:function(){clearTimeout(r.time.TIMER),delete r.time.REMAINING,s.setSetting(i,"time",r.time),e.classList.add("iziToast-reseted"),e.classList.remove("iziToast-paused"),null!==o&&(o.style.transition="none",o.style.width="100%"),"function"==typeof n&&setTimeout((function(){n.apply(s)}),10)}}},e.hide=function(t,e,n){"object"!=typeof e&&(e=document.querySelector(e));var i=this,r=p(this.children[e.getAttribute("data-iziToast-ref")],t||{});r.closedBy=n||null,delete r.time.REMAINING,e.classList.add("iziToast-closing"),function(){var t=document.querySelector(".iziToast-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),n=(e=e.split(",")).indexOf(String(r.ref));-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout((function(){t.remove()}),700))}}(),r.transitionIn&&e.classList.remove(r.transitionIn),r.transitionInMobile&&e.classList.remove(r.transitionInMobile),s||window.innerWidth<=l?r.transitionOutMobile&&e.classList.add(r.transitionOutMobile):r.transitionOut&&e.classList.add(r.transitionOut);var o=e.parentNode.offsetHeight;e.parentNode.style.height=o+"px",e.style.pointerEvents="none",(!s||window.innerWidth>l)&&(e.parentNode.style.transitionDelay="0.2s");try{var a=new CustomEvent("iziToast-closing",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(a)}catch(t){console.warn(t)}setTimeout((function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout((function(){delete i.children[r.ref],e.parentNode.remove();try{var t=new CustomEvent("iziToast-closed",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}void 0!==r.onClosed&&r.onClosed.apply(null,[r,e,n])}),1e3)}),200),void 0!==r.onClosing&&r.onClosing.apply(null,[r,e,n])},e.show=function(t){var i,r=this,d=p(u,t||{});if((d=p(c,d)).time={},null===d.id&&(d.id=(i=d.title+d.message+d.color,btoa(encodeURIComponent(i)).replace(/=/g,""))),1===d.displayMode||"once"==d.displayMode)try{if(document.querySelectorAll(".iziToast#"+d.id).length>0)return!1}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+d.id+". Try to set an valid id.")}if(2===d.displayMode||"replace"==d.displayMode)try{h(document.querySelectorAll(".iziToast#"+d.id),(function(t,e){r.hide(d,t,"replaced")}))}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+d.id+". Try to set an valid id.")}d.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[d.ref]=d;var g,y={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:d.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};y.toast.setAttribute("data-iziToast-ref",d.ref),y.toast.appendChild(y.toastBody),y.toastCapsule.appendChild(y.toast),function(){if(y.toast.classList.add(n),y.toast.classList.add("iziToast-opening"),y.toastCapsule.classList.add("iziToast-capsule"),y.toastBody.classList.add("iziToast-body"),y.toastTexts.classList.add("iziToast-texts"),s||window.innerWidth<=l?d.transitionInMobile&&y.toast.classList.add(d.transitionInMobile):d.transitionIn&&y.toast.classList.add(d.transitionIn),d.class){var t=d.class.split(" ");h(t,(function(t,e){y.toast.classList.add(t)}))}var e;d.id&&(y.toast.id=d.id),d.rtl&&(y.toast.classList.add("iziToast-rtl"),y.toast.setAttribute("dir","rtl")),d.layout>1&&y.toast.classList.add("iziToast-layout"+d.layout),d.balloon&&y.toast.classList.add("iziToast-balloon"),d.maxWidth&&(isNaN(d.maxWidth)?y.toast.style.maxWidth=d.maxWidth:y.toast.style.maxWidth=d.maxWidth+"px"),""===d.theme&&"light"===d.theme||y.toast.classList.add("iziToast-theme-"+d.theme),d.color&&("#"==(e=d.color).substring(0,1)||"rgb"==e.substring(0,3)||"hsl"==e.substring(0,3)?y.toast.style.background=d.color:y.toast.classList.add("iziToast-color-"+d.color)),d.backgroundColor&&(y.toast.style.background=d.backgroundColor,d.balloon&&(y.toast.style.borderColor=d.backgroundColor))}(),d.image&&(y.cover.classList.add("iziToast-cover"),y.cover.style.width=d.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(d.image.replace(/ /g,""))?y.cover.style.backgroundImage="url(data:image/png;base64,"+d.image.replace(/ /g,"")+")":y.cover.style.backgroundImage="url("+d.image+")",d.rtl?y.toastBody.style.marginRight=d.imageWidth+10+"px":y.toastBody.style.marginLeft=d.imageWidth+10+"px",y.toast.appendChild(y.cover)),d.close?(y.buttonClose=document.createElement("button"),y.buttonClose.type="button",y.buttonClose.classList.add("iziToast-close"),y.buttonClose.addEventListener("click",(function(t){t.target,r.hide(d,y.toast,"button")})),y.toast.appendChild(y.buttonClose)):d.rtl?y.toast.style.paddingLeft="18px":y.toast.style.paddingRight="18px",d.progressBar&&(y.progressBar=document.createElement("div"),y.progressBarDiv=document.createElement("div"),y.progressBar.classList.add("iziToast-progressbar"),y.progressBarDiv.style.background=d.progressBarColor,y.progressBar.appendChild(y.progressBarDiv),y.toast.appendChild(y.progressBar)),d.timeout&&(d.pauseOnHover&&!d.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){r.progress(d,y.toast).pause()})),y.toast.addEventListener("mouseleave",(function(t){r.progress(d,y.toast).resume()}))),d.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){r.progress(d,y.toast).reset()})),y.toast.addEventListener("mouseleave",(function(t){r.progress(d,y.toast).start()})))),d.iconUrl?(y.icon.setAttribute("class","iziToast-icon"),y.icon.setAttribute("src",d.iconUrl)):d.icon&&(y.icon.setAttribute("class","iziToast-icon "+d.icon),d.iconText&&y.icon.appendChild(document.createTextNode(d.iconText)),d.iconColor&&(y.icon.style.color=d.iconColor)),(d.icon||d.iconUrl)&&(d.rtl?y.toastBody.style.paddingRight="33px":y.toastBody.style.paddingLeft="33px",y.toastBody.appendChild(y.icon)),d.title.length>0&&(y.strong=document.createElement("strong"),y.strong.classList.add("iziToast-title"),y.strong.appendChild(f(d.title)),y.toastTexts.appendChild(y.strong),d.titleColor&&(y.strong.style.color=d.titleColor),d.titleSize&&(isNaN(d.titleSize)?y.strong.style.fontSize=d.titleSize:y.strong.style.fontSize=d.titleSize+"px"),d.titleLineHeight&&(isNaN(d.titleSize)?y.strong.style.lineHeight=d.titleLineHeight:y.strong.style.lineHeight=d.titleLineHeight+"px")),d.message.length>0&&(y.p=document.createElement("p"),y.p.classList.add("iziToast-message"),y.p.appendChild(f(d.message)),y.toastTexts.appendChild(y.p),d.messageColor&&(y.p.style.color=d.messageColor),d.messageSize&&(isNaN(d.titleSize)?y.p.style.fontSize=d.messageSize:y.p.style.fontSize=d.messageSize+"px"),d.messageLineHeight&&(isNaN(d.titleSize)?y.p.style.lineHeight=d.messageLineHeight:y.p.style.lineHeight=d.messageLineHeight+"px")),d.title.length>0&&d.message.length>0&&(d.rtl?y.strong.style.marginLeft="10px":2===d.layout||d.rtl||(y.strong.style.marginRight="10px")),y.toastBody.appendChild(y.toastTexts),d.inputs.length>0&&(y.inputs.classList.add("iziToast-inputs"),h(d.inputs,(function(t,e){y.inputs.appendChild(f(t[0])),(g=y.inputs.childNodes)[e].classList.add("iziToast-inputs-child"),t[3]&&setTimeout((function(){g[e].focus()}),300),g[e].addEventListener(t[1],(function(e){return(0,t[2])(r,y.toast,this,e)}))})),y.toastBody.appendChild(y.inputs)),d.buttons.length>0&&(y.buttons.classList.add("iziToast-buttons"),h(d.buttons,(function(t,e){y.buttons.appendChild(f(t[0]));var n=y.buttons.childNodes;n[e].classList.add("iziToast-buttons-child"),t[2]&&setTimeout((function(){n[e].focus()}),300),n[e].addEventListener("click",(function(e){return e.preventDefault(),(0,t[1])(r,y.toast,this,e,g)}))}))),y.toastBody.appendChild(y.buttons),d.message.length>0&&(d.inputs.length>0||d.buttons.length>0)&&(y.p.style.marginBottom="0"),(d.inputs.length>0||d.buttons.length>0)&&(d.rtl?y.toastTexts.style.marginLeft="10px":y.toastTexts.style.marginRight="10px",d.inputs.length>0&&d.buttons.length>0&&(d.rtl?y.inputs.style.marginLeft="8px":y.inputs.style.marginRight="8px")),y.toastCapsule.style.visibility="hidden",setTimeout((function(){var t=y.toast.offsetHeight,e=y.toast.currentStyle||window.getComputedStyle(y.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var s=e.marginBottom;s=s.split("px"),s=parseInt(s[0]),y.toastCapsule.style.visibility="",y.toastCapsule.style.height=t+s+n+"px",setTimeout((function(){y.toastCapsule.style.height="auto",d.target&&(y.toastCapsule.style.overflow="visible")}),500),d.timeout&&r.progress(d,y.toast).start()}),100),function(){var t=d.position;if(d.target)y.wrapper=document.querySelector(d.target),y.wrapper.classList.add("iziToast-target"),d.targetFirst?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule);else{if(-1==a.indexOf(d.position))return void console.warn("[iziToast] Incorrect position.\nIt can be › "+a);t=s||window.innerWidth<=l?"bottomLeft"==d.position||"bottomRight"==d.position||"bottomCenter"==d.position?"iziToast-wrapper-bottomCenter":"topLeft"==d.position||"topRight"==d.position||"topCenter"==d.position?"iziToast-wrapper-topCenter":"iziToast-wrapper-center":"iziToast-wrapper-"+t,y.wrapper=document.querySelector(".iziToast-wrapper."+t),y.wrapper||(y.wrapper=document.createElement("div"),y.wrapper.classList.add("iziToast-wrapper"),y.wrapper.classList.add(t),document.body.appendChild(y.wrapper)),"topLeft"==d.position||"topCenter"==d.position||"topRight"==d.position?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule)}isNaN(d.zindex)?console.warn("[iziToast] Invalid zIndex."):y.wrapper.style.zIndex=d.zindex}(),d.overlay&&(null!==document.querySelector(".iziToast-overlay.fadeIn")?(y.overlay=document.querySelector(".iziToast-overlay"),y.overlay.setAttribute("data-iziToast-ref",y.overlay.getAttribute("data-iziToast-ref")+","+d.ref),isNaN(d.zindex)||null===d.zindex||(y.overlay.style.zIndex=d.zindex-1)):(y.overlay.classList.add("iziToast-overlay"),y.overlay.classList.add("fadeIn"),y.overlay.style.background=d.overlayColor,y.overlay.setAttribute("data-iziToast-ref",d.ref),isNaN(d.zindex)||null===d.zindex||(y.overlay.style.zIndex=d.zindex-1),document.querySelector("body").appendChild(y.overlay)),d.overlayClose?(y.overlay.removeEventListener("click",{}),y.overlay.addEventListener("click",(function(t){r.hide(d,y.toast,"overlay")}))):y.overlay.removeEventListener("click",{})),function(){if(d.animateInside){y.toast.classList.add("iziToast-animateInside");var t=[200,100,300];"bounceInLeft"!=d.transitionIn&&"bounceInRight"!=d.transitionIn||(t=[400,200,400]),d.title.length>0&&setTimeout((function(){y.strong.classList.add("slideIn")}),t[0]),d.message.length>0&&setTimeout((function(){y.p.classList.add("slideIn")}),t[1]),(d.icon||d.iconUrl)&&setTimeout((function(){y.icon.classList.add("revealIn")}),t[2]);var e=150;d.buttons.length>0&&y.buttons&&setTimeout((function(){h(y.buttons.childNodes,(function(t,n){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150}))}),d.inputs.length>0?150:0),d.inputs.length>0&&y.inputs&&(e=150,h(y.inputs.childNodes,(function(t,n){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150})))}}(),d.onOpening.apply(null,[d,y.toast]);try{var v=new CustomEvent("iziToast-opening",{detail:d,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(t){console.warn(t)}setTimeout((function(){y.toast.classList.remove("iziToast-opening"),y.toast.classList.add("iziToast-opened");try{var t=new CustomEvent("iziToast-opened",{detail:d,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}d.onOpened.apply(null,[d,y.toast])}),1e3),d.drag&&(o?(y.toast.addEventListener("touchstart",(function(t){m.startMoving(this,r,d,t)}),!1),y.toast.addEventListener("touchend",(function(t){m.stopMoving(this,t)}),!1)):(y.toast.addEventListener("mousedown",(function(t){t.preventDefault(),m.startMoving(this,r,d,t)}),!1),y.toast.addEventListener("mouseup",(function(t){t.preventDefault(),m.stopMoving(this,t)}),!1))),d.closeOnEscape&&document.addEventListener("keyup",(function(t){27==(t=t||window.event).keyCode&&r.hide(d,y.toast,"esc")})),d.closeOnClick&&y.toast.addEventListener("click",(function(t){r.hide(d,y.toast,"toast")})),r.toast=y.toast},e},"function"==typeof define&&define.amd?define([],s()):t.exports=s()})),i.register("hIzJZ",(function(t,e){(()=>{const t={openModalBtnDevelopers:document.querySelector("[modal-developers-open]"),closeModalBtnDevelopers:document.querySelector("[modal-developers-close]"),modalDeveloper:document.querySelector("[data-modal-developer]")};function e(){t.modalDeveloper.classList.add("is-hidden__developers")}t.openModalBtnDevelopers.addEventListener("click",(function(){t.modalDeveloper.classList.remove("is-hidden__developers")})),t.closeModalBtnDevelopers.addEventListener("click",e),t.modalDeveloper.addEventListener("click",(function(t){t.currentTarget===t.target&&e()})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&e()}))})()}));
//# sourceMappingURL=index.1d690fbe.js.map
