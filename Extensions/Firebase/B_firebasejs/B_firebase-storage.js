!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase)}(this,function(Rt){"use strict";try{(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=e(Rt),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function t(e,a,s,u){return new(s=s||Promise)(function(r,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?r(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(n,o)}i((u=u.apply(e,a||[])).next())})}function s(r,n){var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(r,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var n,o,i,a="FirebaseError",d=(n=Error,r(o=c,i=n),o.prototype=null===i?Object.create(i):(u.prototype=i.prototype,new u),c);function u(){this.constructor=o}function c(e,t){var r=n.call(this,t)||this;return r.code=e,r.name=a,Object.setPrototypeOf(r,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,l.prototype.create),r}var l=(h.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n,o=t[0]||{},i=this.service+"/"+e,a=this.errors[e],s=a?(n=o,a.replace(_,function(e,t){var r=n[t];return null!=r?String(r):"<"+t+"?>"})):"Error",u=this.serviceName+": "+s+" ("+i+").",c=new d(i,u),l=0,h=Object.keys(o);l<h.length;l++){var p=h[l];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=o[p])}return c},h);function h(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var _=/\{\$([^}]+)}/g,p=(g.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},g.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},g.prototype.setServiceProps=function(e){return this.serviceProps=e,this},g);function g(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var b="firebasestorage.googleapis.com",m=12e4,y=6e5,w=(R.prototype.codeProp=function(){return this.code},R.prototype.codeEquals=function(e){return T(e)===this.codeProp()},R.prototype.serverResponseProp=function(){return this.serverResponse_},R.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(R.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),R);function R(e,t){this.code_=T(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}var E={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function T(e){return"storage/"+e}function O(){return new w(E.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function k(){return new w(E.CANCELED,"User canceled the upload/download.")}function A(){return new w(E.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U(e,t,r){return new w(E.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function x(){return new w(E.APP_DELETED,"The Firebase app was deleted.")}function P(e,t){return new w(E.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new w(E.INTERNAL_ERROR,"Internal error: "+e)}var C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function N(e){switch(e){case C.RAW:case C.BASE64:case C.BASE64URL:case C.DATA_URL:return;default:throw"Expected one of the event types: ["+C.RAW+", "+C.BASE64+", "+C.BASE64URL+", "+C.DATA_URL+"]."}}var I=function(e,t){this.data=e,this.contentType=t||null};function L(e,t){switch(e){case C.RAW:return new I(D(t));case C.BASE64:case C.BASE64URL:return new I(M(e,t));case C.DATA_URL:return new I((r=new B(t)).base64?M(C.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw P(C.DATA_URL,"Malformed data URL.")}return D(t)}(r.rest),new B(t).contentType)}var r;throw O()}function D(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):55296==(64512&n)?r<e.length-1&&56320==(64512&e.charCodeAt(r+1))?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function M(t,e){switch(t){case C.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n)throw P(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case C.BASE64URL:var o=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(o||i)throw P(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(e)}catch(e){throw P(t,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var B=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw P(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r,n,o=t[1]||null;null!=o&&(this.base64=(n=";base64",(r=o).length>=n.length&&r.substring(r.length-n.length)===n),this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)};var j,q,F={STATE_CHANGED:"state_changed"},H="running",z="pausing",G="paused",X="success",V="canceling",W="canceled",K="error",Z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function J(e){switch(e){case H:case z:case V:return Z.RUNNING;case G:return Z.PAUSED;case X:return Z.SUCCESS;case W:return Z.CANCELED;case K:default:return Z.ERROR}}function $(e){return null!=e}function Q(e){return void 0!==e}function Y(e){return"function"==typeof e}function ee(e){return"object"==typeof e}function te(e){return"string"==typeof e||e instanceof String}function re(e){return"number"==typeof e||e instanceof Number}function ne(e){return oe()&&e instanceof Blob}function oe(){return"undefined"!=typeof Blob}(q=j=j||{})[q.NO_ERROR=0]="NO_ERROR",q[q.NETWORK_ERROR=1]="NETWORK_ERROR",q[q.ABORT=2]="ABORT";var ie=(ae.prototype.send=function(e,t,r,n){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),$(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return $(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},ae.prototype.getErrorCode=function(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_},ae.prototype.getStatus=function(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},ae.prototype.getResponseText=function(){if(!this.sent_)throw S("cannot .getResponseText() before sending");return this.xhr_.responseText},ae.prototype.abort=function(){this.xhr_.abort()},ae.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},ae.prototype.addUploadProgressListener=function(e){$(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},ae.prototype.removeUploadProgressListener=function(e){$(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},ae);function ae(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=j.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=j.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=j.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}var se=(ue.prototype.createXhrIo=function(){return new ie},ue);function ue(){}function ce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(oe())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}var le=(he.prototype.size=function(){return this.size_},he.prototype.type=function(){return this.type_},he.prototype.slice=function(e,t){if(ne(this.data_)){var r=this.data_,n=(i=e,a=t,(o=r).webkitSlice?o.webkitSlice(i,a):o.mozSlice?o.mozSlice(i,a):o.slice?o.slice(i,a):null);return null===n?null:new he(n)}var o,i,a;return new he(new Uint8Array(this.data_.buffer,e,t-e),!0)},he.getBlob=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(oe()){var r=e.map(function(e){return e instanceof he?e.data_:e});return new he(ce.apply(null,r))}var n=e.map(function(e){return te(e)?L(C.RAW,e).data:e.data_}),o=0;n.forEach(function(e){o+=e.byteLength});var i=new Uint8Array(o),a=0;return n.forEach(function(e){for(var t=0;t<e.length;t++)i[a++]=e[t]}),new he(i,!0)},he.prototype.uploadData=function(){return this.data_},he);function he(e,t){var r=0,n="";ne(e)?(r=(this.data_=e).size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}var pe=(Object.defineProperty(fe.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(fe.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),fe.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},fe.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},fe.makeFromBucketSpec=function(t){var e,r;try{e=fe.makeFromUrl(t)}catch(e){return new fe(t,"")}if(""===e.path)return e;throw r=t,new w(E.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")},fe.makeFromUrl=function(e){var t=null,r="([A-Za-z0-9.\\-_]+)";var n=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}for(var i,a=b.replace(/[.]/g,"\\."),s=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+a+"/v[A-Za-z0-9_]+/b/"+r+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/"+r+"/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:o}],u=0;u<s.length;u++){var c=s[u],l=c.regex.exec(e);if(l){t=new fe(l[c.indices.bucket],l[c.indices.path]||"");c.postModify(t);break}}if(null==t)throw i=e,new w(E.INVALID_URL,"Invalid URL '"+i+"'.");return t},fe);function fe(e,t){this.bucket=e,this.path_=t}function de(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return ee(r=t)&&!Array.isArray(r)?t:null}function _e(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function ve(e){return"https://"+b+"/v0"+e}function ge(e){var t,r=encodeURIComponent,n="?";for(t in e){e.hasOwnProperty(t)&&(n=n+(r(t)+"="+r(e[t]))+"&")}return n=n.slice(0,-1)}function be(e,t){return t}var me=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||be},ye=null;function we(){if(ye)return ye;var e=[];e.push(new me("bucket")),e.push(new me("generation")),e.push(new me("metageneration")),e.push(new me("name","fullPath",!0));var t=new me("name");t.xform=function(e,t){return!te(r=t)||r.length<2?r:_e(r);var r},e.push(t);var r=new me("size");return r.xform=function(e,t){return $(t)?Number(t):t},e.push(r),e.push(new me("timeCreated")),e.push(new me("updated")),e.push(new me("md5Hash",null,!0)),e.push(new me("cacheControl",null,!0)),e.push(new me("contentDisposition",null,!0)),e.push(new me("contentEncoding",null,!0)),e.push(new me("contentLanguage",null,!0)),e.push(new me("contentType",null,!0)),e.push(new me("metadata","customMetadata",!0)),ye=e}function Re(n,o){Object.defineProperty(n,"ref",{get:function(){var e=n.bucket,t=n.fullPath,r=new pe(e,t);return o.makeStorageReference(r)}})}function Ee(e,t,r){var n=de(t);if(null===n)return null;return function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Re(n,e),n}(e,n,r)}function Te(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Oe(e){if(!ee(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!ee(r))throw"Expected object for 'customMetadata' mapping."}else if(ee(n=r)&&null!==n)throw"Mapping for '"+t+"' cannot be an object."}var n}var ke="maxResults",Ae=1e3,Ue="pageToken",xe="prefixes",Pe="items";function Se(e,t,r){var n=de(r);if(null===n)return null;return function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[xe])for(var o=0,i=r[xe];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new pe(t,a));n.prefixes.push(s)}if(r[Pe])for(var u=0,c=r[Pe];u<c.length;u++){var l=c[u],s=e.makeStorageReference(new pe(t,l.name));n.items.push(s)}return n}(e,t,n)}function Ce(e){if(!ee(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===ke){if(!re(r=e[ke])||!Number.isInteger(r)||e[ke]<=0)throw"Expected maxResults to be a positive number.";if(1e3<e[ke])throw"Expected maxResults to be less than or equal to "+Ae+"."}else{if(t!==Ue)throw"Unknown option: "+t;if(e[Ue]&&!te(e[Ue]))throw"Expected pageToken to be string."}var r}var Ne=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};function Ie(e){if(!e)throw O()}function Le(n,o){return function(e,t){var r=Ee(n,t,o);return Ie(null!==r),r}}function De(n,o){return function(e,t){var r=Se(n,o,t);return Ie(null!==r),r}}function Me(n,o){return function(e,t){var r=Ee(n,t,o);return Ie(null!==r),function(n,e){var t=de(e);if(null===t)return null;if(!te(t.downloadTokens))return null;var r=t.downloadTokens;if(0===r.length)return null;var o=encodeURIComponent;return r.split(",").map(function(e){var t=n.bucket,r=n.fullPath;return ve("/b/"+o(t)+"/o/"+o(r))+ge({alt:"media",token:e})})[0]}(r,t)}}function Be(i){return function(e,t){var r,n,o=401===e.getStatus()?new w(E.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(n=i.bucket,new w(E.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(r=i.path,new w(E.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")):t;return o.setServerResponseProp(t.serverResponseProp()),o}}function je(o){var i=Be(o);return function(e,t){var r,n=i(e,t);return 404===e.getStatus()&&(r=o.path,n=new w(E.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")),n.setServerResponseProp(t.serverResponseProp()),n}}function qe(e,t,r){var n=ve(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new Ne(n,"GET",Le(e,r),o);return i.errorHandler=je(t),i}function Fe(e,t,r){var n,o,i=Object.assign({},r);return i.fullPath=e.path,i.size=t.size(),i.contentType||(i.contentType=(o=t,(n=null)&&n.contentType||o&&o.type()||"application/octet-stream")),i}function He(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=Fe(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Te(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",h=le.getBlob(c,n,l);if(null===h)throw A();var p={name:u.fullPath},f=ve(i),d=e.maxUploadRetryTime,_=new Ne(f,"POST",Le(e,r),d);return _.urlParams=p,_.headers=a,_.body=h.uploadData(),_.errorHandler=Be(t),_}var ze=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Ge(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Ie(!1)}return Ie(!!r&&-1!==(t||["active"]).indexOf(r)),r}function Xe(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Fe(t,n,o),s={name:a.fullPath},u=ve(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=Te(a,r),h=e.maxUploadRetryTime;var p=new Ne(u,"POST",function(e){var t;Ge(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Ie(!1)}return Ie(te(t)),t},h);return p.urlParams=s,p.headers=c,p.body=l,p.errorHandler=Be(t),p}function Ve(e,t,r,o){var n=e.maxUploadRetryTime,i=new Ne(r,"POST",function(e){var t=Ge(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Ie(!1)}r||Ie(!1);var n=Number(r);return Ie(!isNaN(n)),new ze(n,o.size(),"final"===t)},n);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=Be(t),i}function We(e,a,t,s,r,u,n,o){var c=new ze(0,0);if(n?(c.current=n.current,c.total=n.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw new w(E.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");var i=c.total-c.current,l=i;0<r&&(l=Math.min(l,r));var h=c.current,p=h+l,f={"X-Goog-Upload-Command":l===i?"upload, finalize":"upload","X-Goog-Upload-Offset":c.current},d=s.slice(h,p);if(null===d)throw A();var _=a.maxUploadRetryTime,v=new Ne(t,"POST",function(e,t){var r=Ge(e,["active","final"]),n=c.current+l,o=s.size(),i="final"===r?Le(a,u)(e,t):null;return new ze(n,o,"final"===r,i)},_);return v.headers=f,v.body=d.uploadData(),v.progressCallback=o||null,v.errorHandler=Be(e),v}var Ke=function(e,t,r){var n;Y(e)||$(t)||$(r)?(this.next=e,this.error=t||null,this.complete=r||null):(n=e,this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null)},Ze=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};function Je(t,e,r){for(var n,o,i,a,s,u,c=e.length,l=e.length,h=0;h<e.length;h++)if(e[h].optional){c=h;break}if(!(c<=r.length&&r.length<=l))throw n=c,o=l,i=t,a=r.length,u=n===o?1===(s=n)?"argument":"arguments":(s="between "+n+" and "+o,"arguments"),new w(E.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+i+"`: Expected "+s+" "+u+", received "+a+".");for(h=0;h<r.length;h++)try{e[h].validator(r[h])}catch(e){throw e instanceof Error?U(h,t,e.message):U(h,t,e)}}var $e=function(t,e){var r=this;this.validator=function(e){r.optional&&!Q(e)||t(e)},this.optional=!!e};function Qe(e,t){function r(e){if(!te(e))throw"Expected string."}var n,o,i=e?(n=r,o=e,function(e){n(e),o(e)}):r;return new $e(i,t)}function Ye(){return new $e(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||oe()&&e instanceof Blob))throw"Expected Blob or File."})}function et(e){return new $e(Oe,e)}function tt(){return new $e(function(e){if(!(re(e)&&0<=e))throw"Expected a number 0 or greater."})}function rt(t,e){return new $e(function(e){if(!(null===e||$(e)&&e instanceof Object))throw"Expected an Object.";null!=t&&t(e)},e)}function nt(e){return new $e(function(e){if(!(null===e||Y(e)))throw"Expected a Function."},e)}function ot(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve().then(function(){return r.apply(void 0,e)})}}var it=(at.prototype.makeProgressCallback_=function(){var t=this,r=this.transferred_;return function(e){return t.updateProgress_(r+e)}},at.prototype.shouldDoResumable_=function(e){return 262144<e.size()},at.prototype.start_=function(){this.state_===H&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},at.prototype.resolveToken_=function(t){var r=this;this.service_.getAuthToken().then(function(e){switch(r.state_){case H:t(e);break;case V:r.transition_(W);break;case z:r.transition_(G)}})},at.prototype.createResumable_=function(){var n=this;this.resolveToken_(function(e){var t=Xe(n.service_,n.location_,n.mappings_,n.blob_,n.metadata_),r=n.service_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.uploadUrl_=e,n.needToFetchStatus_=!1,n.completeTransitions_()},n.errorHandler_)})},at.prototype.fetchStatus_=function(){var n=this,o=this.uploadUrl_;this.resolveToken_(function(e){var t=Ve(n.service_,n.location_,o,n.blob_),r=n.service_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.updateProgress_(e.current),n.needToFetchStatus_=!1,e.finalized&&(n.needToFetchMetadata_=!0),n.completeTransitions_()},n.errorHandler_)})},at.prototype.continueUpload_=function(){var n=this,o=262144*this.chunkMultiplier_,i=new ze(this.transferred_,this.blob_.size()),a=this.uploadUrl_;this.resolveToken_(function(e){var t;try{t=We(n.location_,n.service_,a,n.blob_,o,n.mappings_,i,n.makeProgressCallback_())}catch(e){return n.error_=e,void n.transition_(K)}var r=n.service_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.increaseMultiplier_(),n.request_=null,n.updateProgress_(e.current),e.finalized?(n.metadata_=e.metadata,n.transition_(X)):n.completeTransitions_()},n.errorHandler_)})},at.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},at.prototype.fetchMetadata_=function(){var n=this;this.resolveToken_(function(e){var t=qe(n.service_,n.location_,n.mappings_),r=n.service_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.metadata_=e,n.transition_(X)},n.metadataErrorHandler_)})},at.prototype.oneShotUpload_=function(){var n=this;this.resolveToken_(function(e){var t=He(n.service_,n.location_,n.mappings_,n.blob_,n.metadata_),r=n.service_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.metadata_=e,n.updateProgress_(n.blob_.size()),n.transition_(X)},n.errorHandler_)})},at.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},at.prototype.transition_=function(e){if(this.state_!==e)switch(e){case V:case z:this.state_=e,null!==this.request_&&this.request_.cancel();break;case H:var t=this.state_===G;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case G:this.state_=e,this.notifyObservers_();break;case W:this.error_=k(),this.state_=e,this.notifyObservers_();break;case K:case X:this.state_=e,this.notifyObservers_()}},at.prototype.completeTransitions_=function(){switch(this.state_){case z:this.transition_(G);break;case V:this.transition_(W);break;case H:this.start_()}},Object.defineProperty(at.prototype,"snapshot",{get:function(){var e=J(this.state_);return new Ze(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),at.prototype.on=function(e,t,r,i){var n="Expected a function or an Object with one of `next`, `error`, `complete` properties.",o=nt(!0).validator,a=rt(null,!0).validator;function s(e){try{return void o(e)}catch(e){}try{if(a(e),!(Q(e.next)||Q(e.error)||Q(e.complete)))throw"";return}catch(e){throw n}}Je("on",[Qe(function(){if(e!==F.STATE_CHANGED)throw"Expected one of the event types: ["+F.STATE_CHANGED+"]."}),rt(s,!0),nt(!0),nt(!0)],arguments);var u=this;function c(o){return function(e,t,r){null!==o&&Je("on",o,arguments);var n=new Ke(e,t,i);return u.addObserver_(n),function(){u.removeObserver_(n)}}}var l=[rt(function(e){if(null===e)throw n;s(e)}),nt(!0),nt(!0)];return!(Q(t)||Q(r)||Q(i))?c(l):c(null)(t,r,i)},at.prototype.then=function(e,t){return this.promise_.then(e,t)},at.prototype.catch=function(e){return this.then(null,e)},at.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},at.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},at.prototype.notifyObservers_=function(){var t=this;this.finishPromise_(),this.observers_.slice().forEach(function(e){t.notifyObserver_(e)})},at.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(J(this.state_)){case Z.SUCCESS:ot(this.resolve_.bind(null,this.snapshot))();break;case Z.CANCELED:case Z.ERROR:ot(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},at.prototype.notifyObserver_=function(e){switch(J(this.state_)){case Z.RUNNING:case Z.PAUSED:e.next&&ot(e.next.bind(e,this.snapshot))();break;case Z.SUCCESS:e.complete&&ot(e.complete.bind(e))();break;case Z.CANCELED:case Z.ERROR:e.error&&ot(e.error.bind(e,this.error_))();break;default:e.error&&ot(e.error.bind(e,this.error_))()}},at.prototype.resume=function(){Je("resume",[],arguments);var e=this.state_===G||this.state_===z;return e&&this.transition_(H),e},at.prototype.pause=function(){Je("pause",[],arguments);var e=this.state_===H;return e&&this.transition_(z),e},at.prototype.cancel=function(){Je("cancel",[],arguments);var e=this.state_===H||this.state_===z;return e&&this.transition_(V),e},at);function at(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=H,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(E.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(K))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(E.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(K))},this.promise_=new Promise(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}var st=(ut.prototype.toString=function(){return Je("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},ut.prototype.newRef=function(e,t){return new ut(e,t)},ut.prototype.mappings=we,ut.prototype.child=function(e){Je("child",[Qe()],arguments);var t,r,n=(t=this.location.path,r=e.split("/").filter(function(e){return 0<e.length}).join("/"),0===t.length?r:t+"/"+r),o=new pe(this.location.bucket,n);return this.newRef(this.service,o)},Object.defineProperty(ut.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new pe(this.location.bucket,e);return this.newRef(this.service,t)},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"root",{get:function(){var e=new pe(this.location.bucket,"");return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"name",{get:function(){return _e(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),ut.prototype.put=function(e,t){return void 0===t&&(t=null),Je("put",[Ye(),et(!0)],arguments),this.throwIfRoot_("put"),new it(this,this.service,this.location,this.mappings(),new le(e),t)},ut.prototype.putString=function(e,t,r){void 0===t&&(t=C.RAW),Je("putString",[Qe(),Qe(N,!0),et(!0)],arguments),this.throwIfRoot_("putString");var n=L(t,e),o=Object.assign({},r);return!$(o.contentType)&&$(n.contentType)&&(o.contentType=n.contentType),new it(this,this.service,this.location,this.mappings(),new le(n.data,!0),o)},ut.prototype.delete=function(){var s=this;return Je("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then(function(e){var t,r,n,o,i,a=(t=s.service,r=s.location,n=ve(r.fullServerUrl()),o=t.maxOperationRetryTime,(i=new Ne(n,"DELETE",function(e,t){},o)).successCodes=[200,204],i.errorHandler=je(r),i);return s.service.makeRequest(a,e).getPromise()})},ut.prototype.listAll=function(){Je("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then(function(){return e})},ut.prototype.listAllHelper=function(i,a){return t(this,void 0,void 0,function(){var t,r,n,o;return s(this,function(e){switch(e.label){case 0:return t={pageToken:a},[4,this.list(t)];case 1:return r=e.sent(),(n=i.prefixes).push.apply(n,r.prefixes),(o=i.items).push.apply(o,r.items),null==r.nextPageToken?[3,3]:[4,this.listAllHelper(i,r.nextPageToken)];case 2:e.sent(),e.label=3;case 3:return[2]}})})},ut.prototype.list=function(n){Je("list",[new $e(Ce,!0)],arguments);var o=this;return this.service.getAuthToken().then(function(e){var t=n||{},r=function(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&0<r.length&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=ve(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime,u=new Ne(a,"GET",De(e,t.bucket),s);return u.urlParams=i,u.errorHandler=Be(t),u}(o.service,o.location,"/",t.pageToken,t.maxResults);return o.service.makeRequest(r,e).getPromise()})},ut.prototype.getMetadata=function(){var r=this;return Je("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then(function(e){var t=qe(r.service,r.location,r.mappings());return r.service.makeRequest(t,e).getPromise()})},ut.prototype.updateMetadata=function(l){var h=this;return Je("updateMetadata",[et()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then(function(e){var t,r,n,o,i,a,s,u,c=(t=h.service,r=h.location,n=l,o=h.mappings(),i=ve(r.fullServerUrl()),a=Te(n,o),s=t.maxOperationRetryTime,(u=new Ne(i,"PATCH",Le(t,o),s)).headers={"Content-Type":"application/json; charset=utf-8"},u.body=a,u.errorHandler=je(r),u);return h.service.makeRequest(c,e).getPromise()})},ut.prototype.getDownloadURL=function(){var u=this;return Je("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then(function(e){var t,r,n,o,i,a,s=(t=u.service,r=u.location,n=u.mappings(),o=ve(r.fullServerUrl()),i=t.maxOperationRetryTime,(a=new Ne(o,"GET",Me(t,n),i)).errorHandler=je(r),a);return u.service.makeRequest(s,e).getPromise().then(function(e){if(null===e)throw new w(E.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})})},ut.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw t=e,new w(E.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t},ut);function ut(e,t){this.service=e,this.location=t instanceof pe?t:pe.makeFromUrl(t)}var ct=(lt.prototype.getPromise=function(){return this.promise_},lt.prototype.cancel=function(e){},lt);function lt(e){this.promise_=Promise.reject(e)}var ht=(pt.prototype.start_=function(){var t,r,e,n,o,i,a,s,u,c=this;function l(e,t){var r,n=c.resolve_,o=c.reject_,i=t.xhr;if(t.wasSuccessCode)try{var a=c.callback_(i,i.getResponseText());Q(a)?n(a):n()}catch(e){o(e)}else null!==i?((r=O()).setServerResponseProp(i.getResponseText()),c.errorCallback_?o(c.errorCallback_(i,r)):o(r)):t.canceled?o(r=(c.appDelete_?x:k)()):o(r=new w(E.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}function h(){return 2===a}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s||(s=!0,r.apply(null,e))}function f(e){o=setTimeout(function(){o=null,t(d,h())},e)}function d(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];s||(e||h()||i?p.call.apply(p,v([null,e],t)):(n<64&&(n*=2),f(1===a?(a=2,0):1e3*(n+Math.random()))))}function _(e){u||(u=!0,s||(null!==o?(e||(a=2),clearTimeout(o),f(0)):e||(a=1)))}this.canceled_?l(0,new ft(!1,null,!0)):this.backoffId_=(t=function(i,e){var t;function a(e){var t=e.loaded,r=e.lengthComputable?e.total:-1;null!==c.progressCallback_&&c.progressCallback_(t,r)}e?i(!1,new ft(!1,null,!0)):(t=c.pool_.createXhrIo(),c.pendingXhr_=t,null!==c.progressCallback_&&t.addUploadProgressListener(a),t.send(c.url_,c.method_,c.body_,c.headers_).then(function(e){null!==c.progressCallback_&&e.removeUploadProgressListener(a),c.pendingXhr_=null;var t,r,n=e.getErrorCode()===j.NO_ERROR,o=e.getStatus();n&&!c.isRetryStatusCode_(o)?(t=-1!==c.successCodes_.indexOf(o),i(!0,new ft(t,e))):(r=e.getErrorCode()===j.ABORT,i(!1,new ft(!1,null,r)))}))},r=l,e=this.timeout_,o=null,u=s=i=!(n=1),f(a=0),setTimeout(function(){_(i=!0)},e),_)},pt.prototype.getPromise=function(){return this.promise_},pt.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},pt.prototype.isRetryStatusCode_=function(e){var t=500<=e&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},pt);function pt(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(e,t){h.resolve_=e,h.reject_=t,h.start_()})}var ft=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function dt(e,t,r,n){var o,i,a,s,u,c,l=ge(e.urlParams),h=e.url+l,p=Object.assign({},e.headers);return o=p,(i=t)&&(o["X-Firebase-GMPID"]=i),a=p,null!==(s=r)&&0<s.length&&(a.Authorization="Firebase "+s),u=p,c=void 0!==f.default?f.default.SDK_VERSION:"AppManager",u["X-Firebase-Storage-Version"]="webjs/"+c,new ht(h,e.method,p,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}var _t=(vt.extractBucket_=function(e){var t=null==e?void 0:e.storageBucket;return null==t?null:pe.makeFromBucketSpec(t)},vt.prototype.getAuthToken=function(){return t(this,void 0,void 0,function(){var t,r;return s(this,function(e){switch(e.label){case 0:return(t=this.authProvider_.getImmediate({optional:!0}))?[4,t.getToken()]:[3,2];case 1:if(null!==(r=e.sent()))return[2,r.accessToken];e.label=2;case 2:return[2,null]}})})},vt.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach(function(e){return e.cancel()}),this.requests_.clear()},vt.prototype.makeStorageReference=function(e){return new st(this,e)},vt.prototype.makeRequest=function(e,t){var r=this;if(this.deleted_)return new ct(x());var n=dt(e,this.appId_,t,this.pool_);return this.requests_.add(n),n.getPromise().then(function(){return r.requests_.delete(n)},function(){return r.requests_.delete(n)}),n},vt.prototype.ref=function(e){if(Je("ref",[Qe(function(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var t=new st(this,this.bucket_);return null!=e?t.child(e):t},vt.prototype.refFromURL=function(e){return Je("refFromURL",[Qe(function(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{pe.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new st(this,e)},Object.defineProperty(vt.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),vt.prototype.setMaxUploadRetryTime=function(e){Je("setMaxUploadRetryTime",[tt()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(vt.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),vt.prototype.setMaxOperationRetryTime=function(e){Je("setMaxOperationRetryTime",[tt()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(vt.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(vt.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),vt);function vt(e,t,r,n){var o;this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=e,this.authProvider_=t,this.maxOperationRetryTime_=m,this.maxUploadRetryTime_=y,this.requests_=new Set,this.pool_=r,this.bucket_=null!=n?pe.makeFromBucketSpec(n):vt.extractBucket_(null===(o=this.app_)||void 0===o?void 0:o.options),this.internals_=new gt(this)}var gt=(bt.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},bt);function bt(e){this.service_=e}var mt,yt;function wt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new _t(r,n,new se,t)}mt=f.default,yt={TaskState:Z,TaskEvent:F,StringFormat:C,Storage:_t,Reference:st},mt.INTERNAL.registerComponent(new p("storage",wt,"PUBLIC").setServiceProps(yt).setMultipleInstances(!0)),mt.registerVersion("@firebase/storage","0.3.43")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}});