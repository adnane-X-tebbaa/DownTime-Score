function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=t[e].claim_order,i=(o>0&&t[n[o]].claim_order<=s?o+1:m(1,o,(e=>t[n[e]].claim_order),s))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const s=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);s.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<s.length&&i[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function $(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function S(e){return document.createTextNode(e)}function x(){return S(" ")}function E(){return S("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:P(e,r,t[r])}function R(e){return Array.from(e.childNodes)}function L(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function I(e,t,n,r,o=!1){L(e);const s=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return r()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function C(e,t,n,r){return I(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r?w(t):b(t)))}function O(e,t){return I(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>S(t)),!0)}function k(e){return O(e," ")}function D(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e){const t=D(e,"HTML_TAG_START",0),n=D(e,"HTML_TAG_END",t);if(t===n)return new B;L(e);const r=e.splice(t,n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new B(o)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function j(e,t){e.value=null==t?"":t}function H(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=H();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||o&&n.contentWindow)&&o(),v(n)}}function G(e,t=document.body){return Array.from(t.querySelectorAll(e))}class B extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}}function z(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function K(e){J().$$.on_mount.push(e)}function W(e){J().$$.after_update.push(e)}function F(e){J().$$.on_destroy.push(e)}const V=[],Y=[],X=[],Q=[],Z=Promise.resolve();let ee=!1;function te(e){X.push(e)}let ne=!1;const re=new Set;function oe(){if(!ne){ne=!0;do{for(let e=0;e<V.length;e+=1){const t=V[e];z(t),se(t.$$)}for(z(null),V.length=0;Y.length;)Y.pop()();for(let e=0;e<X.length;e+=1){const t=X[e];re.has(t)||(re.add(t),t())}X.length=0}while(V.length);for(;Q.length;)Q.pop()();ee=!1,ne=!1,re.clear()}}function se(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}const ie=new Set;let ae;function ce(){ae={r:0,c:[],p:ae}}function le(){ae.r||o(ae.c),ae=ae.p}function ue(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function de(e,t,n,r){if(e&&e.o){if(ie.has(e))return;ie.add(e),ae.c.push((()=>{ie.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function fe(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function he(e){return"object"==typeof e&&null!==e?e:{}}function pe(e){e&&e.c()}function me(e,t){e&&e.l(t)}function ge(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||te((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(te)}function _e(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(V.push(e),ee||(ee=!0,Z.then(oe)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(t,n,s,i,a,c,l,u=[-1]){const d=h;z(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),m&&$e(t,e)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const e=R(n.target);f.fragment&&f.fragment.l(e),e.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&ue(t.$$.fragment),ge(t,n.target,n.anchor,n.customElement),p=!1,oe()}z(d)}class ye{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const be=[];function we(t,n=e){let r;const o=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!be.length;for(const e of o)e[1](),be.push(e,t);if(e){for(let e=0;e<be.length;e+=2)be[e][0](be[e+1]);be.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.add(c),1===o.size&&(r=n(s)||e),i(t),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const Se={};var xe={owner:"TebbaaX",repo:"DownTime-Score",sites:[{name:"DGSSI",url:"https://www.dgssi.gov.ma/"},{name:"Covid Portal",url:"http://covid19.interieur.gov.ma/Operation_ATTADAMON.aspx"},{name:"Health Portal",url:"https://www.sante.gov.ma/Pages/Accueil.aspx"},{name:"CNSS",url:"https://www.cnss.ma"},{name:"Data",url:"http://data.gov.ma"},{name:"Douanes",url:"http://www.douane.gov.ma"},{name:"Massar Website",url:"https://massar.men.gov.ma",favicon:"https://massar.men.gov.ma/favicon.ico"},{name:"Massar Login",url:"https://massarservice.men.gov.ma/moutamadris/Account"},{name:"Tax Portal",url:"https://portail.tax.gov.ma"},{name:"ADA",url:"https://www.ada.gov.ma/web"},{name:"TGR Portal",url:"https://www.tgr.gov.ma/wps/portal"},{name:"ANCFCC",url:"https://www.ancfcc.gov.ma/Publications"},{name:"Auto-E Portal",url:"https://rn.ae.gov.ma/login"}],workflowSchedule:{graphs:"*/10 * * * *",responseTime:"*/10 * * * *",staticSite:"*/10 * * * *",summary:"*/10 * * * *",updateTemplate:"*/10 * * * *",updates:"*/10 * * * *",uptime:"*/10 * * * *"},path:"https://TebbaaX.github.io/DownTime-Score",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ee(t){let n,r,o,s,i;return{c(){n=b("nav"),r=b("div"),o=x(),s=b("ul"),i=x(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=R(n);r=C(t,"DIV",{class:!0});var a=R(r);o=k(a),s=C(a,"UL",{class:!0});var c=R(s);i=k(c),c.forEach(v),a.forEach(v),t.forEach(v),this.h()},h(){P(s,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(e,t){$(e,n,t),g(n,r),g(r,o),g(r,s),g(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&v(n)}}}function Te(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Ae extends ye{constructor(e){super(),ve(this,e,Te,Ee,i,{segment:0})}}var Pe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ne(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Re(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Le(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Pe[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(d,o.index),d=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+Ne(Re(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=Le(Ne(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+Re(o[8])+'" alt="'+Re(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+Re(o[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+Le(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+Re(o[16])+"</code>":(o[17]||o[1])&&(n=f(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ie(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${xe.path}/themes/light.css`)},m(e,t){$(e,n,t)},p:e,d(e){e&&v(n)}}}function Ce(t){let n,r,o,s,i,a,c,u,d,f,h,p,m,_,y,w,S,T,A=Le(xe.i18n.footer.replace(/\$REPO/,`https://github.com/${xe.owner}/${xe.repo}`))+"";let N=Ie(t),L=xe["status-website"].css&&function(t){let n,r,o=`<style>${xe["status-website"].css}</style>`;return{c(){n=new B,r=E(),this.h()},l(e){n=M(e),r=E(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&v(r),e&&n.d()}}}(),I=xe["status-website"].js&&function(t){let n,r,o=`<script>${xe["status-website"].js}<\/script>`;return{c(){n=new B,r=E(),this.h()},l(e){n=M(e),r=E(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&v(r),e&&n.d()}}}();p=new Ae({props:{segment:t[0]}});const O=t[2].default,D=function(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}(O,t,t[1],null);return{c(){n=E(),N.c(),r=b("link"),o=b("link"),s=b("link"),i=E(),a=E(),c=E(),L&&L.c(),u=E(),I&&I.c(),d=E(),f=x(),h=x(),pe(p.$$.fragment),m=x(),_=b("main"),D&&D.c(),y=x(),w=b("footer"),S=b("p"),this.h()},l(e){const t=G('[data-svelte="svelte-ri9y7q"]',document.head);n=E(),N.l(t),r=C(t,"LINK",{rel:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),s=C(t,"LINK",{rel:!0,type:!0,href:!0}),i=E(),a=E(),c=E(),L&&L.l(t),u=E(),I&&I.l(t),d=E(),t.forEach(v),f=k(e),h=k(e),me(p.$$.fragment,e),m=k(e),_=C(e,"MAIN",{class:!0});var l=R(_);D&&D.l(l),l.forEach(v),y=k(e),w=C(e,"FOOTER",{class:!0});var g=R(w);S=C(g,"P",{}),R(S).forEach(v),g.forEach(v),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${xe.path}/global.css`),P(o,"rel","icon"),P(o,"type","image/svg"),P(o,"href","https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(s,"rel","icon"),P(s,"type","image/png"),P(s,"href","/logo-192.png"),P(_,"class","container"),P(w,"class","svelte-jbr799")},m(e,t){g(document.head,n),N.m(document.head,null),g(document.head,r),g(document.head,o),g(document.head,s),g(document.head,i),g(document.head,a),g(document.head,c),L&&L.m(document.head,null),g(document.head,u),I&&I.m(document.head,null),g(document.head,d),$(e,f,t),$(e,h,t),ge(p,e,t),$(e,m,t),$(e,_,t),D&&D.m(_,null),$(e,y,t),$(e,w,t),g(w,S),S.innerHTML=A,T=!0},p(e,[t]){N.p(e,t),xe["status-website"].css&&L.p(e,t),xe["status-website"].js&&I.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),D&&D.p&&(!T||2&t)&&function(e,t,n,r,o,s){if(o){const i=l(t,n,r,s);e.p(i,o)}}(D,O,e,e[1],T?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(O,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){T||(ue(p.$$.fragment,e),ue(D,e),T=!0)},o(e){de(p.$$.fragment,e),de(D,e),T=!1},d(e){v(n),N.d(e),v(r),v(o),v(s),v(i),v(a),v(c),L&&L.d(e),v(u),I&&I.d(e),v(d),e&&v(f),e&&v(h),_e(p,e),e&&v(m),e&&v(_),D&&D.d(e),e&&v(y),e&&v(w)}}}function Oe(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class ke extends ye{constructor(e){super(),ve(this,e,Oe,Ce,i,{segment:0})}}function De(e){let t,n,r=e[1].stack+"";return{c(){t=b("pre"),n=S(r)},l(e){t=C(e,"PRE",{});var o=R(t);n=O(o,r),o.forEach(v)},m(e,r){$(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&U(n,r)},d(e){e&&v(t)}}}function Me(t){let n,r,o,s,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&De(t);return{c(){r=x(),o=b("h1"),s=S(t[0]),i=x(),a=b("p"),c=S(d),l=x(),f&&f.c(),u=E(),this.h()},l(e){G('[data-svelte="svelte-1moakz"]',document.head).forEach(v),r=k(e),o=C(e,"H1",{class:!0});var n=R(o);s=O(n,t[0]),n.forEach(v),i=k(e),a=C(e,"P",{class:!0});var h=R(a);c=O(h,d),h.forEach(v),l=k(e),f&&f.l(e),u=E(),this.h()},h(){P(o,"class","svelte-17w3omn"),P(a,"class","svelte-17w3omn")},m(e,t){$(e,r,t),$(e,o,t),g(o,s),$(e,i,t),$(e,a,t),g(a,c),$(e,l,t),f&&f.m(e,t),$(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&U(s,e[0]),2&t&&d!==(d=e[1].message+"")&&U(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=De(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&v(r),e&&v(o),e&&v(i),e&&v(a),e&&v(l),f&&f.d(e),e&&v(u)}}}function Ue(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class je extends ye{constructor(e){super(),ve(this,e,Ue,Me,i,{status:0,error:1})}}function He(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&pe(n.$$.fragment),r=E()},l(e){n&&me(n.$$.fragment,e),r=E()},m(e,t){n&&ge(n,e,t),$(e,r,t),o=!0},p(e,t){const o=16&t?fe(s,[he(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ce();const e=n;de(e.$$.fragment,1,0,(()=>{_e(e,1)})),le()}i?(n=new i(a()),pe(n.$$.fragment),ue(n.$$.fragment,1),ge(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&ue(n.$$.fragment,e),o=!0)},o(e){n&&de(n.$$.fragment,e),o=!1},d(e){e&&v(r),n&&_e(n,e)}}}function qe(e){let t,n;return t=new je({props:{error:e[0],status:e[1]}}),{c(){pe(t.$$.fragment)},l(e){me(t.$$.fragment,e)},m(e,r){ge(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ue(t.$$.fragment,e),n=!0)},o(e){de(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function Ge(e){let t,n,r,o;const s=[qe,He],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=E()},l(e){n.l(e),r=E()},m(e,n){i[t].m(e,n),$(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(ce(),de(i[c],1,1,(()=>{i[c]=null})),le(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),ue(n,1),n.m(r.parentNode,r))},i(e){o||(ue(n),o=!0)},o(e){de(n),o=!1},d(e){i[t].d(e),e&&v(r)}}}function Be(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Ge]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new ke({props:s}),{c(){pe(n.$$.fragment)},l(e){me(n.$$.fragment,e)},m(e,t){ge(n,e,t),r=!0},p(e,[t]){const r=12&t?fe(o,[4&t&&{segment:e[2][0]},8&t&&he(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ue(n.$$.fragment,e),r=!0)},o(e){de(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function ze(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return W(l),u=Se,d=r,J().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class Je extends ye{constructor(e){super(),ve(this,e,ze,Be,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ke=[],We=[{js:()=>Promise.all([import("./index.d519892f.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.b37c2b1c.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].de7e49f2.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].485f06ae.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.e35d95af.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Fe=(Ve=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Ve(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Ve(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Ve;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ye(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function Xe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Qe,Ze=1;const et="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},tt={};let nt,rt;function ot(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function st(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(nt))return null;let t=e.pathname.slice(nt.length);if(""===t&&(t="/"),!Ke.some((e=>e.test(t))))for(let n=0;n<Fe.length;n+=1){const r=Fe[n],o=r.pattern.exec(t);if(o){const n=ot(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function it(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Xe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=st(o);if(s){lt(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),et.pushState({id:Qe},"",o.href)}}function at(){return{x:pageXOffset,y:pageYOffset}}function ct(e){if(tt[Qe]=at(),e.state){const t=st(new URL(location.href));t?lt(t,e.state.id):location.href=location.href}else!function(e){Ze=e}(Ze+1),function(e){Qe=e}(Ze),et.replaceState({id:Qe},"",location.href)}function lt(e,t,n,r){return Ye(this,void 0,void 0,(function*(){const o=!!t;if(o)Qe=t;else{const e=at();tt[Qe]=e,Qe=t=++Ze,tt[Qe]=n?e:{x:0,y:0}}if(yield rt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=tt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),tt[Qe]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ut(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let dt,ft=null;function ht(e){const t=Xe(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=st(new URL(e,ut(document)));if(t)ft&&e===ft.href||(ft={href:e,promise:Rt(t)}),ft.promise}(t.href)}function pt(e){clearTimeout(dt),dt=setTimeout((()=>{ht(e)}),20)}function mt(e,t={noscroll:!1,replaceState:!1}){const n=st(new URL(e,ut(document)));if(n){const r=lt(n,null,t.noscroll);return et[t.replaceState?"replaceState":"pushState"]({id:Qe},"",e),r}return location.href=e,new Promise((()=>{}))}const gt="undefined"!=typeof __SAPPER__&&__SAPPER__;let _t,$t,vt,yt=!1,bt=[],wt="{}";const St={page:function(e){const t=we(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:we(null),session:we(gt&&gt.session)};let xt,Et,Tt;function At(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Pt(e){return Ye(this,void 0,void 0,(function*(){_t&&St.preloading.set(!0);const t=function(e){return ft&&ft.href===e.href?ft.promise:Rt(e)}(e),n=$t={},r=yield t,{redirect:o}=r;if(n===$t)if(o)yield mt(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Nt(n,t,At(t,e.page))}}))}function Nt(e,t,n){return Ye(this,void 0,void 0,(function*(){St.page.set(n),St.preloading.set(!1),_t?_t.$set(t):(t.stores={page:{subscribe:St.page.subscribe},preloading:{subscribe:St.preloading.subscribe},session:St.session},t.level0={props:yield vt},t.notify=St.page.notify,_t=new Je({target:Tt,props:t,hydrate:!0})),bt=e,wt=JSON.stringify(n.query),yt=!0,Et=!1}))}function Rt(e){return Ye(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!vt){const e=()=>({});vt=gt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},xt)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Ye(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==wt)return!0;const o=bt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:d};const f=c++;let h;if(Et||u||!bt[a]||bt[a].part!==t.i){u=!1;const{default:r,preload:o}=yield We[t.i].js();let s;s=yt||!gt.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},xt):{}:gt.preloaded[a+1],h={component:r,props:s,segment:d,match:l,part:t.i}}else h=bt[a];return s[`level${f}`]=h})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var Lt,It,Ct;St.session.subscribe((e=>Ye(void 0,void 0,void 0,(function*(){if(xt=e,!yt)return;Et=!0;const t=st(new URL(location.href)),n=$t={},{redirect:r,props:o,branch:s}=yield Rt(t);n===$t&&(r?yield mt(r.location,{replaceState:!0}):yield Nt(s,o,At(o,t.page)))})))),Lt={target:document.querySelector("#sapper")},It=Lt.target,Tt=It,Ct=gt.baseUrl,nt=Ct,rt=Pt,"scrollRestoration"in et&&(et.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{et.scrollRestoration="auto"})),addEventListener("load",(()=>{et.scrollRestoration="manual"})),addEventListener("click",it),addEventListener("popstate",ct),addEventListener("touchstart",ht),addEventListener("mousemove",pt),gt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=gt;vt||(vt=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:vt},level1:{props:{status:s,error:i},component:je},segments:o},c=ot(n);Nt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;et.replaceState({id:Ze},"",t);const n=st(new URL(location.href));if(n)return lt(n,Ze,!0,e)}));export{_e as A,T as B,o as C,Y as D,M as E,c as F,d as G,B as H,G as I,w as J,mt as K,j as L,A as M,Le as N,t as O,N as P,fe as Q,W as R,ye as S,F as T,u as U,he as V,te as W,q as X,R as a,O as b,C as c,v as d,b as e,P as f,$ as g,g as h,ve as i,x as j,k,ce as l,de as m,e as n,le as o,ue as p,K as q,xe as r,i as s,S as t,U as u,E as v,y as w,pe as x,me as y,ge as z};

import __inject_styles from './inject_styles.803b7e80.js';