import{$ as h,E as W,F as x,G as v,H as R,J as z2,M as m2,N as L2,O as M2,P as C2,Q as G,R as p2,S as h2,X as d1,Y as u2,_ as n1,a as c2,b as l2,da as d2,fa as x2,g as u1,ga as N2,h as a2,i as O,ja as g2,l as s2,m as e2,n as n2,q as o2,t as P,u as i2,v as K,w as f2,x as t2,z as r2}from"./chunk-OGZBC3E4.js";function W3(c,l,a){return(l=j3(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function b2(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);l&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),a.push.apply(a,s)}return a}function i(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?b2(Object(a),!0).forEach(function(s){W3(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):b2(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function G3(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var s=a.call(c,l||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function j3(c){var l=G3(c,"string");return typeof l=="symbol"?l:l+""}var v2=()=>{},Z1={},$2={},K2=null,Q2={mark:v2,measure:v2};try{typeof window<"u"&&(Z1=window),typeof document<"u"&&($2=document),typeof MutationObserver<"u"&&(K2=MutationObserver),typeof performance<"u"&&(Q2=performance)}catch{}var{userAgent:S2=""}=Z1.navigator||{},T=Z1,C=$2,H2=K2,o1=Q2,i6=!!T.document,A=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",J2=~S2.indexOf("MSIE")||~S2.indexOf("Trident/"),Y3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,X3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,c3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},$3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],p="classic",m1="duotone",K3="sharp",Q3="sharp-duotone",a3=[p,m1,K3,Q3],J3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},c4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},l4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),a4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},s4=["fak","fa-kit","fakd","fa-kit-duotone"],y2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},e4=["kit"],n4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},o4=["fak","fakd"],i4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},k2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},i1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],t4=["fak","fa-kit","fakd","fa-kit-duotone"],r4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},z4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},m4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},S1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},L4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],H1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...f4,...L4],M4=["solid","regular","light","thin","duotone","brands"],s3=[1,2,3,4,5,6,7,8,9,10],C4=s3.concat([11,12,13,14,15,16,17,18,19,20]),p4=[...Object.keys(m4),...M4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",i1.GROUP,i1.SWAP_OPACITY,i1.PRIMARY,i1.SECONDARY].concat(s3.map(c=>"".concat(c,"x"))).concat(C4.map(c=>"w-".concat(c))),h4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},k="___FONT_AWESOME___",y1=16,e3="fa",n3="svg-inline--fa",I="data-fa-i2svg",k1="data-fa-pseudo-element",u4="data-fa-pseudo-element-pending",_1="data-prefix",U1="data-icon",w2="fontawesome-i2svg",d4="async",x4=["HTML","HEAD","STYLE","SCRIPT"],o3=(()=>{try{return!0}catch{return!1}})();function s1(c){return new Proxy(c,{get(l,a){return a in l?l[a]:l[p]}})}var i3=i({},c3);i3[p]=i(i(i(i({},{"fa-duotone":"duotone"}),c3[p]),y2.kit),y2["kit-duotone"]);var N4=s1(i3),w1=i({},a4);w1[p]=i(i(i(i({},{duotone:"fad"}),w1[p]),k2.kit),k2["kit-duotone"]);var A2=s1(w1),A1=i({},S1);A1[p]=i(i({},A1[p]),i4.kit);var W1=s1(A1),V1=i({},z4);V1[p]=i(i({},V1[p]),n4.kit);var f6=s1(V1),g4=Y3,f3="fa-layers-text",b4=X3,v4=i({},J3),t6=s1(v4),S4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x1=$3,H4=[...e4,...p4],J=T.FontAwesomeConfig||{};function y4(c){var l=C.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function k4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[a,s]=l,e=k4(y4(a));e!=null&&(J[s]=e)});var t3={styleDefault:"solid",familyDefault:p,cssPrefix:e3,replacementClass:n3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var X=i(i({},t3),J);X.autoReplaceSvg||(X.observeMutations=!1);var t={};Object.keys(t3).forEach(c=>{Object.defineProperty(t,c,{enumerable:!0,set:function(l){X[c]=l,c1.forEach(a=>a(t))},get:function(){return X[c]}})});Object.defineProperty(t,"familyPrefix",{enumerable:!0,set:function(c){X.cssPrefix=c,c1.forEach(l=>l(t))},get:function(){return X.cssPrefix}});T.FontAwesomeConfig=t;var c1=[];function w4(c){return c1.push(c),()=>{c1.splice(c1.indexOf(c),1)}}var F=y1,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function A4(c){if(!c||!A)return;let l=C.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let a=C.head.childNodes,s=null;for(let e=a.length-1;e>-1;e--){let n=a[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return C.head.insertBefore(l,s),c}var V4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function l1(){let c=12,l="";for(;c-- >0;)l+=V4[Math.random()*62|0];return l}function $(c){let l=[];for(let a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function G1(c){return c.classList?$(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function r3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P4(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,'="').concat(r3(c[a]),'" '),"").trim()}function L1(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,": ").concat(c[a].trim(),";"),"")}function j1(c){return c.size!==S.size||c.x!==S.x||c.y!==S.y||c.rotate!==S.rotate||c.flipX||c.flipY}function F4(c){let{transform:l,containerWidth:a,iconWidth:s}=c,e={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(f)},r={transform:"translate(".concat(s/2*-1," -256)")};return{outer:e,inner:z,path:r}}function T4(c){let{transform:l,width:a=y1,height:s=y1,startCentered:e=!1}=c,n="";return e&&J2?n+="translate(".concat(l.x/F-a/2,"em, ").concat(l.y/F-s/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/F,"em), calc(-50% + ").concat(l.y/F,"em)) "):n+="translate(".concat(l.x/F,"em, ").concat(l.y/F,"em) "),n+="scale(".concat(l.size/F*(l.flipX?-1:1),", ").concat(l.size/F*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var D4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function z3(){let c=e3,l=n3,a=t.cssPrefix,s=t.replacementClass,e=D4;if(a!==c||s!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(f,".".concat(s))}return e}var V2=!1;function N1(){t.autoAddCss&&!V2&&(A4(z3()),V2=!0)}var q4={mixout(){return{dom:{css:z3,insertCss:N1}}},hooks(){return{beforeDOMElementCreation(){N1()},beforeI2svg(){N1()}}}},w=T||{};w[k]||(w[k]={});w[k].styles||(w[k].styles={});w[k].hooks||(w[k].hooks={});w[k].shims||(w[k].shims=[]);var H=w[k],m3=[],L3=function(){C.removeEventListener("DOMContentLoaded",L3),r1=1,m3.map(c=>c())},r1=!1;A&&(r1=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),r1||C.addEventListener("DOMContentLoaded",L3));function B4(c){A&&(r1?setTimeout(c,0):m3.push(c))}function e1(c){let{tag:l,attributes:a={},children:s=[]}=c;return typeof c=="string"?r3(c):"<".concat(l," ").concat(P4(a),">").concat(s.map(e1).join(""),"</").concat(l,">")}function P2(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var O4=function(l,a){return function(s,e,n,o){return l.call(a,s,e,n,o)}},g1=function(l,a,s,e){var n=Object.keys(l),o=n.length,f=e!==void 0?O4(a,e):a,z,r,m;for(s===void 0?(z=1,m=l[n[0]]):(z=0,m=s);z<o;z++)r=n[z],m=f(m,l[r],r,l);return m};function R4(c){let l=[],a=0,s=c.length;for(;a<s;){let e=c.charCodeAt(a++);if(e>=55296&&e<=56319&&a<s){let n=c.charCodeAt(a++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),a--)}else l.push(e)}return l}function P1(c){let l=R4(c);return l.length===1?l[0].toString(16):null}function E4(c,l){let a=c.length,s=c.charCodeAt(l),e;return s>=55296&&s<=56319&&a>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(s-55296)*1024+e-56320+65536:s}function F2(c){return Object.keys(c).reduce((l,a)=>{let s=c[a];return!!s.icon?l[s.iconName]=s.icon:l[a]=s,l},{})}function F1(c,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=a,e=F2(l);typeof H.hooks.addPack=="function"&&!s?H.hooks.addPack(c,F2(l)):H.styles[c]=i(i({},H.styles[c]||{}),e),c==="fas"&&F1("fa",l)}var{styles:a1,shims:I4}=H,M3=Object.keys(W1),Z4=M3.reduce((c,l)=>(c[l]=Object.keys(W1[l]),c),{}),Y1=null,C3={},p3={},h3={},u3={},d3={};function _4(c){return~H4.indexOf(c)}function U4(c,l){let a=l.split("-"),s=a[0],e=a.slice(1).join("-");return s===c&&e!==""&&!_4(e)?e:null}var x3=()=>{let c=s=>g1(a1,(e,n,o)=>(e[o]=g1(n,s,{}),e),{});C3=c((s,e,n)=>(e[3]&&(s[e[3]]=n),e[2]&&e[2].filter(f=>typeof f=="number").forEach(f=>{s[f.toString(16)]=n}),s)),p3=c((s,e,n)=>(s[n]=n,e[2]&&e[2].filter(f=>typeof f=="string").forEach(f=>{s[f]=n}),s)),d3=c((s,e,n)=>{let o=e[2];return s[n]=n,o.forEach(f=>{s[f]=n}),s});let l="far"in a1||t.autoFetchSvg,a=g1(I4,(s,e)=>{let n=e[0],o=e[1],f=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:f}),s},{names:{},unicodes:{}});h3=a.names,u3=a.unicodes,Y1=M1(t.styleDefault,{family:t.familyDefault})};w4(c=>{Y1=M1(c.styleDefault,{family:t.familyDefault})});x3();function X1(c,l){return(C3[c]||{})[l]}function W4(c,l){return(p3[c]||{})[l]}function E(c,l){return(d3[c]||{})[l]}function N3(c){return h3[c]||{prefix:null,iconName:null}}function G4(c){let l=u3[c],a=X1("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function D(){return Y1}var g3=()=>({prefix:null,iconName:null,rest:[]});function j4(c){let l=p,a=M3.reduce((s,e)=>(s[e]="".concat(t.cssPrefix,"-").concat(e),s),{});return a3.forEach(s=>{(c.includes(a[s])||c.some(e=>Z4[s].includes(e)))&&(l=s)}),l}function M1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=p}=l,s=N4[a][c];if(a===m1&&!c)return"fad";let e=A2[a][c]||A2[a][s],n=c in H.styles?c:null;return e||n||null}function Y4(c){let l=[],a=null;return c.forEach(s=>{let e=U4(t.cssPrefix,s);e?a=e:s&&l.push(s)}),{iconName:a,rest:l}}function T2(c){return c.sort().filter((l,a,s)=>s.indexOf(l)===a)}function C1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=l,s=null,e=H1.concat(t4),n=T2(c.filter(M=>e.includes(M))),o=T2(c.filter(M=>!H1.includes(M))),f=n.filter(M=>(s=M,!l3.includes(M))),[z=null]=f,r=j4(n),m=i(i({},Y4(o)),{},{prefix:M1(z,{family:r})});return i(i(i({},m),Q4({values:c,family:r,styles:a1,config:t,canonical:m,givenPrefix:s})),X4(a,s,m))}function X4(c,l,a){let{prefix:s,iconName:e}=a;if(c||!s||!e)return{prefix:s,iconName:e};let n=l==="fa"?N3(e):{},o=E(s,e);return e=n.iconName||o||e,s=n.prefix||s,s==="far"&&!a1.far&&a1.fas&&!t.autoFetchSvg&&(s="fas"),{prefix:s,iconName:e}}var $4=a3.filter(c=>c!==p||c!==m1),K4=Object.keys(S1).filter(c=>c!==p).map(c=>Object.keys(S1[c])).flat();function Q4(c){let{values:l,family:a,canonical:s,givenPrefix:e="",styles:n={},config:o={}}=c,f=a===m1,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",m=s.prefix==="fad"||s.prefix==="fa-duotone";if(!f&&(z||r||m)&&(s.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(s.prefix="fab"),!s.prefix&&$4.includes(a)&&(Object.keys(n).find(L=>K4.includes(L))||o.autoFetchSvg)){let L=l4.get(a).defaultShortPrefixId;s.prefix=L,s.iconName=E(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||e==="fa")&&(s.prefix=D()||"fas"),s}var T1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];let e=a.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),F1(n,e[n]);let o=W1[p][n];o&&F1(o,e[n]),x3()})}reset(){this.definitions={}}_pullDefinitions(l,a){let s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(e=>{let{prefix:n,iconName:o,icon:f}=s[e],z=f[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=f)}),l[n][o]=f}),l}},D2=[],j={},Y={},J4=Object.keys(Y);function c0(c,l){let{mixoutsTo:a}=l;return D2=c,j={},Object.keys(Y).forEach(s=>{J4.indexOf(s)===-1&&delete Y[s]}),D2.forEach(s=>{let e=s.mixout?s.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(a[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{a[n]||(a[n]={}),a[n][o]=e[n][o]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(o=>{j[o]||(j[o]=[]),j[o].push(n[o])})}s.provides&&s.provides(Y)}),a}function D1(c,l){for(var a=arguments.length,s=new Array(a>2?a-2:0),e=2;e<a;e++)s[e-2]=arguments[e];return(j[c]||[]).forEach(o=>{l=o.apply(null,[l,...s])}),l}function Z(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),s=1;s<l;s++)a[s-1]=arguments[s];(j[c]||[]).forEach(n=>{n.apply(null,a)})}function q(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return Y[c]?Y[c].apply(null,l):void 0}function q1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,a=c.prefix||D();if(l)return l=E(a,l)||l,P2(b3.definitions,a,l)||P2(H.styles,a,l)}var b3=new T1,l0=()=>{t.autoReplaceSvg=!1,t.observeMutations=!1,Z("noAuto")},a0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(Z("beforeI2svg",c),q("pseudoElements2svg",c),q("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;t.autoReplaceSvg===!1&&(t.autoReplaceSvg=!0),t.observeMutations=!0,B4(()=>{e0({autoReplaceSvgRoot:l}),Z("watch",c)})}},s0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:E(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=M1(c[0]);return{prefix:a,iconName:E(a,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(t.cssPrefix,"-"))>-1||c.match(g4))){let l=C1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||D(),iconName:E(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=D();return{prefix:l,iconName:E(l,c)||c}}}},N={noAuto:l0,config:t,dom:a0,parse:s0,library:b3,findIconDefinition:q1,toHtml:e1},e0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=C}=c;(Object.keys(H.styles).length>0||t.autoFetchSvg)&&A&&t.autoReplaceSvg&&N.dom.i2svg({node:l})};function p1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>e1(a))}}),Object.defineProperty(c,"node",{get:function(){if(!A)return;let a=C.createElement("div");return a.innerHTML=c.html,a.children}}),c}function n0(c){let{children:l,main:a,mask:s,attributes:e,styles:n,transform:o}=c;if(j1(o)&&a.found&&!s.found){let{width:f,height:z}=a,r={x:f/z/2,y:.5};e.style=L1(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function o0(c){let{prefix:l,iconName:a,children:s,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(t.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:s}]}]}function $1(c){let{icons:{main:l,mask:a},prefix:s,iconName:e,transform:n,symbol:o,title:f,maskId:z,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:u}=a.found?a:l,V=o4.includes(s),B=[t.replacementClass,e?"".concat(t.cssPrefix,"-").concat(e):""].filter(U=>m.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(m.classes).join(" "),g={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":s,"data-icon":e,class:B,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(u)})},y=V&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/u*16*.0625,"em")}:{};M&&(g.attributes[I]=""),f&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(r||l1())},children:[f]}),delete g.attributes.title);let d=i(i({},g),{},{prefix:s,iconName:e,main:l,mask:a,maskId:z,transform:n,symbol:o,styles:i(i({},y),m.styles)}),{children:b,attributes:_}=a.found&&l.found?q("generateAbstractMask",d)||{children:[],attributes:{}}:q("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=b,d.attributes=_,o?o0(d):n0(d)}function q2(c){let{content:l,width:a,height:s,transform:e,title:n,extra:o,watchable:f=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});f&&(z[I]="");let r=i({},o.styles);j1(e)&&(r.transform=T4({transform:e,startCentered:!0,width:a,height:s}),r["-webkit-transform"]=r.transform);let m=L1(r);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function i0(c){let{content:l,title:a,extra:s}=c,e=i(i(i({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),n=L1(s.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var{styles:b1}=H;function B1(c){let l=c[0],a=c[1],[s]=c.slice(4),e=null;return Array.isArray(s)?e={tag:"g",attributes:{class:"".concat(t.cssPrefix,"-").concat(x1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(x1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(x1.PRIMARY),fill:"currentColor",d:s[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:a,icon:e}}var f0={found:!1,width:512,height:512};function t0(c,l){!o3&&!t.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function O1(c,l){let a=l;return l==="fa"&&t.styleDefault!==null&&(l=D()),new Promise((s,e)=>{if(a==="fa"){let n=N3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&b1[l]&&b1[l][c]){let n=b1[l][c];return s(B1(n))}t0(c,l),s(i(i({},f0),{},{icon:t.showMissingIcons&&c?q("missingIconAbstract")||{}:{}}))})}var B2=()=>{},R1=t.measurePerformance&&o1&&o1.mark&&o1.measure?o1:{mark:B2,measure:B2},Q='FA "6.7.2"',r0=c=>(R1.mark("".concat(Q," ").concat(c," begins")),()=>v3(c)),v3=c=>{R1.mark("".concat(Q," ").concat(c," ends")),R1.measure("".concat(Q," ").concat(c),"".concat(Q," ").concat(c," begins"),"".concat(Q," ").concat(c," ends"))},K1={begin:r0,end:v3},f1=()=>{};function O2(c){return typeof(c.getAttribute?c.getAttribute(I):null)=="string"}function z0(c){let l=c.getAttribute?c.getAttribute(_1):null,a=c.getAttribute?c.getAttribute(U1):null;return l&&a}function m0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(t.replacementClass)}function L0(){return t.autoReplaceSvg===!0?t1.replace:t1[t.autoReplaceSvg]||t1.replace}function M0(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function C0(c){return C.createElement(c)}function S3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=c.tag==="svg"?M0:C0}=l;if(typeof c=="string")return C.createTextNode(c);let s=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(S3(n,{ceFn:a}))}),s}function p0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var t1={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(a=>{l.parentNode.insertBefore(S3(a),l)}),l.getAttribute(I)===null&&t.keepOriginalSource){let a=C.createComment(p0(l));l.parentNode.replaceChild(a,l)}else l.remove()},nest:function(c){let l=c[0],a=c[1];if(~G1(l).indexOf(t.replacementClass))return t1.replace(c);let s=new RegExp("".concat(t.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let n=a[0].attributes.class.split(" ").reduce((o,f)=>(f===t.replacementClass||f.match(s)?o.toSvg.push(f):o.toNode.push(f),o),{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=a.map(n=>e1(n)).join(`
`);l.setAttribute(I,""),l.innerHTML=e}};function R2(c){c()}function H3(c,l){let a=typeof l=="function"?l:f1;if(c.length===0)a();else{let s=R2;t.mutateApproach===d4&&(s=T.requestAnimationFrame||R2),s(()=>{let e=L0(),n=K1.begin("mutate");c.map(e),n(),a()})}}var Q1=!1;function y3(){Q1=!0}function E1(){Q1=!1}var z1=null;function E2(c){if(!H2||!t.observeMutations)return;let{treeCallback:l=f1,nodeCallback:a=f1,pseudoElementsCallback:s=f1,observeMutationsRoot:e=C}=c;z1=new H2(n=>{if(Q1)return;let o=D();$(n).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!O2(f.addedNodes[0])&&(t.searchPseudoElements&&s(f.target),l(f.target)),f.type==="attributes"&&f.target.parentNode&&t.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&O2(f.target)&&~S4.indexOf(f.attributeName))if(f.attributeName==="class"&&z0(f.target)){let{prefix:z,iconName:r}=C1(G1(f.target));f.target.setAttribute(_1,z||o),r&&f.target.setAttribute(U1,r)}else m0(f.target)&&a(f.target)})}),A&&z1.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function h0(){z1&&z1.disconnect()}function u0(c){let l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce((s,e)=>{let n=e.split(":"),o=n[0],f=n.slice(1);return o&&f.length>0&&(s[o]=f.join(":").trim()),s},{})),a}function d0(c){let l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",e=C1(G1(c));return e.prefix||(e.prefix=D()),l&&a&&(e.prefix=l,e.iconName=a),e.iconName&&e.prefix||(e.prefix&&s.length>0&&(e.iconName=W4(e.prefix,c.innerText)||X1(e.prefix,P1(c.innerText))),!e.iconName&&t.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function x0(c){let l=$(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return t.autoA11y&&(a?l["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(s||l1()):(l["aria-hidden"]="true",l.focusable="false")),l}function N0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function I2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:s,rest:e}=d0(c),n=x0(c),o=D1("parseNodeAttributes",{},c),f=l.styleParser?u0(c):[];return i({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:f,attributes:n}},o)}var{styles:g0}=H;function k3(c){let l=t.autoReplaceSvg==="nest"?I2(c,{styleParser:!1}):I2(c);return~l.extra.classes.indexOf(f3)?q("generateLayersText",c,l):q("generateSvgReplacementMutation",c,l)}function b0(){return[...s4,...H1]}function Z2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();let a=C.documentElement.classList,s=m=>a.add("".concat(w2,"-").concat(m)),e=m=>a.remove("".concat(w2,"-").concat(m)),n=t.autoFetchSvg?b0():l3.concat(Object.keys(g0));n.includes("fa")||n.push("fa");let o=[".".concat(f3,":not([").concat(I,"])")].concat(n.map(m=>".".concat(m,":not([").concat(I,"])"))).join(", ");if(o.length===0)return Promise.resolve();let f=[];try{f=$(c.querySelectorAll(o))}catch{}if(f.length>0)s("pending"),e("complete");else return Promise.resolve();let z=K1.begin("onTree"),r=f.reduce((m,M)=>{try{let L=k3(M);L&&m.push(L)}catch(L){o3||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{H3(L,()=>{s("active"),s("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function v0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k3(c).then(a=>{a&&H3([a],l)})}function S0(c){return function(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(l||{}).icon?l:q1(l||{}),{mask:e}=a;return e&&(e=(e||{}).icon?e:q1(e||{})),c(s,i(i({},a),{},{mask:e}))}}var H0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=S,symbol:s=!1,mask:e=null,maskId:n=null,title:o=null,titleId:f=null,classes:z=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:u}=c;return p1(i({type:"icon"},c),()=>(Z("beforeDOMElementCreation",{iconDefinition:c,params:l}),t.autoA11y&&(o?r["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(f||l1()):(r["aria-hidden"]="true",r.focusable="false")),$1({icons:{main:B1(u),mask:e?B1(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},S),a),symbol:s,title:o,maskId:n,titleId:f,extra:{attributes:r,styles:m,classes:z}})))},y0={mixout(){return{icon:S0(H0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=Z2,c.nodeCallback=v0,c}}},provides(c){c.i2svg=function(l){let{node:a=C,callback:s=()=>{}}=l;return Z2(a,s)},c.generateSvgReplacementMutation=function(l,a){let{iconName:s,title:e,titleId:n,prefix:o,transform:f,symbol:z,mask:r,maskId:m,extra:M}=a;return new Promise((L,u)=>{Promise.all([O1(s,o),r.iconName?O1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[B,g]=V;L([l,$1({icons:{main:B,mask:g},prefix:o,iconName:s,transform:f,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:a,attributes:s,main:e,transform:n,styles:o}=l,f=L1(o);f.length>0&&(s.style=f);let z;return j1(n)&&(z=q("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),a.push(z||e.icon),{children:a,attributes:s}}}},k0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=l;return p1({type:"layer"},()=>{Z("beforeDOMElementCreation",{assembler:c,params:l});let s=[];return c(e=>{Array.isArray(e)?e.map(n=>{s=s.concat(n.abstract)}):s=s.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(t.cssPrefix,"-layers"),...a].join(" ")},children:s}]})}}}},w0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:s=[],attributes:e={},styles:n={}}=l;return p1({type:"counter",content:c},()=>(Z("beforeDOMElementCreation",{content:c,params:l}),i0({content:c.toString(),title:a,extra:{attributes:e,styles:n,classes:["".concat(t.cssPrefix,"-layers-counter"),...s]}})))}}}},A0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=S,title:s=null,classes:e=[],attributes:n={},styles:o={}}=l;return p1({type:"text",content:c},()=>(Z("beforeDOMElementCreation",{content:c,params:l}),q2({content:c,transform:i(i({},S),a),title:s,extra:{attributes:n,styles:o,classes:["".concat(t.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,a){let{title:s,transform:e,extra:n}=a,o=null,f=null;if(J2){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,f=r.height/z}return t.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,q2({content:l.innerHTML,width:o,height:f,transform:e,title:s,extra:n,watchable:!0})])}}},V0=new RegExp('"',"ug"),_2=[1105920,1112319],U2=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),c4),h4),r4),I1=Object.keys(U2).reduce((c,l)=>(c[l.toLowerCase()]=U2[l],c),{}),P0=Object.keys(I1).reduce((c,l)=>{let a=I1[l];return c[l]=a[900]||[...Object.entries(a)][0][1],c},{});function F0(c){let l=c.replace(V0,""),a=E4(l,0),s=a>=_2[0]&&a<=_2[1],e=l.length===2?l[0]===l[1]:!1;return{value:P1(e?l[0]:l),isSecondary:s||e}}function T0(c,l){let a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(l),e=isNaN(s)?"normal":s;return(I1[a]||{})[e]||P0[a]}function W2(c,l){let a="".concat(u4).concat(l.replace(":","-"));return new Promise((s,e)=>{if(c.getAttribute(a)!==null)return s();let o=$(c.children).filter(L=>L.getAttribute(k1)===l)[0],f=T.getComputedStyle(c,l),z=f.getPropertyValue("font-family"),r=z.match(b4),m=f.getPropertyValue("font-weight"),M=f.getPropertyValue("content");if(o&&!r)return c.removeChild(o),s();if(r&&M!=="none"&&M!==""){let L=f.getPropertyValue("content"),u=T0(z,m),{value:V,isSecondary:B}=F0(L),g=r[0].startsWith("FontAwesome"),y=X1(u,V),d=y;if(g){let b=G4(V);b.iconName&&b.prefix&&(y=b.iconName,u=b.prefix)}if(y&&!B&&(!o||o.getAttribute(_1)!==u||o.getAttribute(U1)!==d)){c.setAttribute(a,d),o&&c.removeChild(o);let b=N0(),{extra:_}=b;_.attributes[k1]=l,O1(y,u).then(U=>{let _3=$1(i(i({},b),{},{icons:{main:U,mask:g3()},prefix:u,iconName:d,extra:_,watchable:!0})),h1=C.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(h1,c.firstChild):c.appendChild(h1),h1.outerHTML=_3.map(U3=>e1(U3)).join(`
`),c.removeAttribute(a),s()}).catch(e)}else s()}else s()})}function D0(c){return Promise.all([W2(c,"::before"),W2(c,"::after")])}function q0(c){return c.parentNode!==document.head&&!~x4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(k1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function G2(c){if(A)return new Promise((l,a)=>{let s=$(c.querySelectorAll("*")).filter(q0).map(D0),e=K1.begin("searchPseudoElements");y3(),Promise.all(s).then(()=>{e(),E1(),l()}).catch(()=>{e(),E1(),a()})})}var B0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=G2,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:a=C}=l;t.searchPseudoElements&&G2(a)}}},j2=!1,O0={mixout(){return{dom:{unwatch(){y3(),j2=!0}}}},hooks(){return{bootstrap(){E2(D1("mutationObserverCallbacks",{}))},noAuto(){h0()},watch(c){let{observeMutationsRoot:l}=c;j2?E1():E2(D1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},Y2=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,s)=>{let e=s.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return a.flipX=!0,a;if(n&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(n){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},l)},R0={mixout(){return{parse:{transform:c=>Y2(c)}}},hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-transform");return a&&(c.transform=Y2(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:a,transform:s,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),z="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),r="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(f," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:i(i({},a.icon.attributes),L.path)}]}]}}}},v1={x:0,y:0,width:"100%",height:"100%"};function X2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function E0(c){return c.tag==="g"?c.children:[c]}var I0={hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-mask"),s=a?C1(a.split(" ").map(e=>e.trim())):g3();return s.prefix||(s.prefix=D()),c.mask=s,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:a,attributes:s,main:e,mask:n,maskId:o,transform:f}=l,{width:z,icon:r}=e,{width:m,icon:M}=n,L=F4({transform:f,containerWidth:m,iconWidth:z}),u={tag:"rect",attributes:i(i({},v1),{},{fill:"white"})},V=r.children?{children:r.children.map(X2)}:{},B={tag:"g",attributes:i({},L.inner),children:[X2(i({tag:r.tag,attributes:i(i({},r.attributes),L.path)},V))]},g={tag:"g",attributes:i({},L.outer),children:[B]},y="mask-".concat(o||l1()),d="clip-".concat(o||l1()),b={tag:"mask",attributes:i(i({},v1),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,g]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:E0(M)},b]};return a.push(_,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(y,")")},v1)}),{children:a,attributes:s}}}},Z0={provides(c){let l=!1;T.matchMedia&&(l=T.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let a=[],s={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:i(i({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:i(i({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||a.push({tag:"path",attributes:i(i({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},_0={hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-symbol"),s=a===null?!1:a===""?!0:a;return c.symbol=s,c}}}},U0=[q4,y0,k0,w0,A0,B0,O0,R0,I0,Z0,_0];c0(U0,{mixoutsTo:N});var r6=N.noAuto,w3=N.config,z6=N.library,A3=N.dom,V3=N.parse,m6=N.findIconDefinition,L6=N.toHtml,P3=N.icon,M6=N.layer,W0=N.text,G0=N.counter;var Y0=["*"],X0=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){w3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(s){return new(s||c)};static \u0275prov=u1({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),$0=(()=>{class c{definitions={};addIcons(...a){for(let s of a){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let e of s.icon[2])typeof e=="string"&&(this.definitions[s.prefix][e]=s)}}addIconPacks(...a){for(let s of a){let e=Object.keys(s).map(n=>s[n]);this.addIcons(...e)}}getIconDefinition(a,s){return a in this.definitions&&s in this.definitions[a]?this.definitions[a][s]:null}static \u0275fac=function(s){return new(s||c)};static \u0275prov=u1({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),K0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Q0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},T3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),J0=c=>{let l=T3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(s=>a[s]?s:null).filter(s=>s!=null)},J1=new WeakSet,F3="fa-auto-css";function c6(c,l){if(!l.autoAddCss||J1.has(c))return;if(c.getElementById(F3)!=null){l.autoAddCss=!1,J1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",F3),a.innerHTML=A3.css();let s=c.head.childNodes,e=null;for(let n=s.length-1;n>-1;n--){let o=s[n],f=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(e=o)}c.head.insertBefore(a,e),l.autoAddCss=!1,J1.add(c)}var l6=c=>c.prefix!==void 0&&c.iconName!==void 0,a6=(c,l)=>l6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},s6=(()=>{class c{stackItemSize=n1("1x");size=n1();_effect=u2(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(s){return new(s||c)};static \u0275dir=t2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),e6=(()=>{class c{size=n1();classes=d1(()=>{let a=this.size(),s=a?{[`fa-${a}`]:!0}:{};return l2(c2({},s),{"fa-stack":!0})});static \u0275fac=function(s){return new(s||c)};static \u0275cmp=K({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(s,e){s&2&&C2(e.classes())},inputs:{size:[1,"size"]},ngContentSelectors:Y0,decls:1,vars:0,template:function(s,e){s&1&&(m2(),L2(0))},encapsulation:2,changeDetection:0})}return c})(),D3=(()=>{class c{icon=h.required();title=h();animation=h();mask=h();flip=h();size=h();pull=h();border=h();inverse=h();symbol=h();rotate=h();fixedWidth=h();transform=h();a11yRole=h();renderedIconHTML=d1(()=>{let a=this.icon();if(a==null&&this.config.fallbackIcon==null)return Q0(),"";let s=this.findIconDefinition(a??this.config.fallbackIcon);if(!s)return"";let e=this.buildParams();c6(this.document,this.config);let n=P3(s,e);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=O(n2);sanitizer=O(d2);config=O(X0);iconLibrary=O($0);stackItem=O(s6,{optional:!0});stack=O(e6,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}findIconDefinition(a){let s=a6(a,this.config.defaultPrefix);if("icon"in s)return s;let e=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return e??(K0(s),null)}buildParams(){let a=this.fixedWidth(),s={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},e=this.transform(),n=typeof e=="string"?V3.transform(e):e,o=this.mask(),f=o!=null?this.findIconDefinition(o):null,z={},r=this.a11yRole();r!=null&&(z.role=r);let m={};return s.rotate!=null&&!T3(s.rotate)&&(m["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title(),transform:n,classes:J0(s),mask:f??void 0,symbol:this.symbol(),attributes:z,styles:m}}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=K({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,e){s&2&&(z2("innerHTML",e.renderedIconHTML(),o2),r2("title",e.title()))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(s,e){},encapsulation:2,changeDetection:0})}return c})();var q3=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=f2({type:c});static \u0275inj=a2({})}return c})();var y6={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]};var k6={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]};var w6={prefix:"fas",iconName:"money-bill-wave",icon:[576,512,[],"f53a","M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"]};var A6={prefix:"fas",iconName:"champagne-glasses",icon:[640,512,[129346,"glass-cheers"],"f79f","M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"]};var V6={prefix:"fas",iconName:"file-import",icon:[512,512,["arrow-right-to-file"],"f56f","M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z"]};var P6={prefix:"fas",iconName:"church",icon:[640,512,[9962],"f51d","M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"]};var F6={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};var T6={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]};var o6={prefix:"fas",iconName:"mobile-screen-button",icon:[384,512,["mobile-alt"],"f3cd","M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"]},D6=o6;var B3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var q6={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var B6={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]};var O3={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]};var R3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var E3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var I3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var Z3=class c{constructor(l){this.router=l;this.router.events.subscribe(()=>{this.isHome=this.router.url==="/"||this.router.url==="/home"})}email="info@opencrafts.io";year=new Date().getFullYear();isHome=!1;faGithub=I3;faInstagram=E3;faLinkedin=R3;faX=O3;faEnvelope=B3;static \u0275fac=function(a){return new(a||c)(i2(x2))};static \u0275cmp=K({type:c,selectors:[["app-footer"]],decls:34,vars:9,consts:[[1,"wave-divider"],["viewBox","0 0 1440 100","preserveAspectRatio","none"],["d","M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"],[1,"footer-content"],[1,"social-icons"],["href","https://github.com/opencrafts-io","target","_blank"],[3,"icon"],["href","https://www.instagram.com/opencrafts.io","target","_blank"],["href","https://www.linkedin.com/in/opencrafts-io-a10339368/","target","_blank"],["href","https://x.com","target","_blank"],[1,"email-contact"],["href","mailto:info@opencrafts.io"],[1,"footer-bottom"],["routerLink","/policy"]],template:function(a,s){a&1&&(x(0,"footer")(1,"div",0),s2(),x(2,"svg",1),R(3,"path",2),v()(),e2(),x(4,"div",3)(5,"ul",4)(6,"li")(7,"a",5),R(8,"fa-icon",6),v()(),x(9,"li")(10,"a",7),R(11,"fa-icon",6),v()(),x(12,"li")(13,"a",8),R(14,"fa-icon",6),v()(),x(15,"li")(16,"a",9),R(17,"fa-icon",6),v()()(),x(18,"div",10),R(19,"fa-icon",6),x(20,"span")(21,"a",11),G(22),v()()()(),x(23,"div",12)(24,"p"),G(25),v(),x(26,"div")(27,"p")(28,"a",13),G(29,"Privacy Policy"),v()(),x(30,"p"),G(31,"Terms & Conditions"),v(),x(32,"p"),G(33,"Sitemap"),v()()()()),a&2&&(M2("home",s.isHome),P(8),W("icon",s.faGithub),P(3),W("icon",s.faInstagram),P(3),W("icon",s.faLinkedin),P(3),W("icon",s.faX),P(2),W("icon",s.faEnvelope),P(3),p2(s.email),P(3),h2("\xA9Opencrafts ",s.year))},dependencies:[q3,D3,g2,N2],styles:["footer[_ngcontent-%COMP%]{background-color:#fff;color:#949292;position:relative;bottom:0;width:100%;font-family:var(--font-din)}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#949292}.wave-divider[_ngcontent-%COMP%]{width:100%;overflow:hidden;line-height:0}.wave-divider[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;width:100%;height:100px}footer.home[_ngcontent-%COMP%]{background-color:#000;color:#fff}footer.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer.home[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], footer.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer.home[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .email-contact[_ngcontent-%COMP%], footer.home[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .email-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], footer.home[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;color:#000;width:88%;margin:auto auto 50px;font-family:var(--font-fredoka);text-align:center}footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:.5rem;color:#000;font-family:var(--font-fredoka)}.footer-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:90%;margin:auto;margin-bottom:2rem;gap:1rem}.footer-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1rem;display:flex;flex-direction:column;gap:20px}.footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem}.footer-bottom[_ngcontent-%COMP%]{text-align:center;padding:.5rem 0;color:#949292;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;width:90%;margin:auto;gap:1rem}.footer-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:30px;flex-wrap:wrap;justify-content:center}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;margin:0}footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:90%;margin:20px auto 10px;border-color:#9492921f}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--font-din);text-decoration:none;color:#fff;transition:color .3s ease,border-bottom .3s ease;cursor:pointer;border-bottom:2px solid transparent}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:g;border-bottom:2px solid #ffcc00}.social-icons[_ngcontent-%COMP%]{list-style:none;display:flex;gap:1.5rem;margin:0;padding:0}.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:2.5rem;transition:color .3s ease}footer.home[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fc0}.active-link[_ngcontent-%COMP%]{font-weight:700;border-bottom:2px solid #ffcc00}.email-contact[_ngcontent-%COMP%]{display:flex;flex-direction:row!important;font-family:var(--font-din);font-size:1.5rem;margin-left:0!important;gap:.1rem!important}@media (max-width: 1024px){footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem}.footer-content[_ngcontent-%COMP%]{gap:1.5rem}}@media (max-width: 600px){footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem;margin-bottom:30px}footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem}.footer-content[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:2rem}.footer-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center;text-align:center}.footer-bottom[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;text-align:center}.footer-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{justify-content:center}footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-top:80px}.email-contact[_ngcontent-%COMP%]{justify-content:center!important}}"]})};export{D3 as a,q3 as b,y6 as c,k6 as d,w6 as e,A6 as f,V6 as g,P6 as h,F6 as i,T6 as j,D6 as k,q6 as l,B6 as m,O3 as n,R3 as o,E3 as p,I3 as q,Z3 as r};
