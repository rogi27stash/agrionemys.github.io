(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(t,e,r){var content=r(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("46cd35a2",content,!0,{sourceMap:!1})},373:function(t,e,r){"use strict";r(363)},374:function(t,e,r){var l=r(40)((function(i){return i[1]}));l.push([t.i,".gallery[data-v-42f1278c]{margin-left:auto;margin-right:auto;margin-bottom:3rem;max-width:1536px;padding:1.5rem}.gallery .gallery__title h1[data-v-42f1278c]{margin-top:3rem;margin-bottom:3rem;text-align:center;font-size:3rem;line-height:1;font-weight:600;--tw-text-opacity:1;color:rgba(9, 107, 241, var(--tw-text-opacity))}.gallery .gallery__images[data-v-42f1278c]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;gap:1.5rem}@media (min-width: 1280px){.gallery .gallery__images[data-v-42f1278c]{flex-direction:row}}.gallery .gallery__images .gallery__image[data-v-42f1278c]{flex:0 0 25vw;position:relative;--tw-transform:translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:pointer;overflow:hidden;border-radius:1rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:100ms}.gallery .gallery__images .gallery__image[data-v-42f1278c]:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:var(--tw-transform)}.gallery .gallery__images .gallery__image img[data-v-42f1278c]{width:100%}@media (min-width: 768px){.gallery .gallery__images .gallery__image img[data-v-42f1278c]{height:100%}}.gallery .gallery__images .gallery__image .gallery__author[data-v-42f1278c]{bottom:0;left:0;position:absolute;margin:0.5rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(0, 4, 10, var(--tw-bg-opacity));--tw-bg-opacity:0.4;padding-left:3rem;padding-right:3rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:500;--tw-text-opacity:1;color:rgba(238, 245, 254, var(--tw-text-opacity));--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-filter);backdrop-filter:var(--tw-backdrop-filter);backdrop-filter:var(--tw-backdrop-filter)}.overlay[data-v-42f1278c]{position:fixed;top:0px;right:0px;bottom:0px;left:0px;z-index:40;display:flex;--tw-bg-opacity:1;background-color:rgba(1, 11, 24, var(--tw-bg-opacity));--tw-bg-opacity:0.6;--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-filter);backdrop-filter:var(--tw-backdrop-filter);backdrop-filter:var(--tw-backdrop-filter)}.overlay img[data-v-42f1278c]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%;margin:auto}.overlay .overlay__author[data-v-42f1278c]{position:absolute;left:0px;bottom:0px;margin:1.5rem;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(238, 245, 254, var(--tw-text-opacity))}.overlay .overlay__exit[data-v-42f1278c]{position:absolute;right:0px;top:0px;margin:1.5rem;font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(238, 245, 254, var(--tw-text-opacity))}.overlay .overlay__exit p[data-v-42f1278c]{cursor:pointer}",""]),l.locals={},t.exports=l},385:function(t,e,r){"use strict";r.r(e);var l=r(21),o=r(1).a.extend({name:"Gallery",components:{XIcon:l.l},data:function(){return{currentImage:null,images:["editid","FluffyPets","Guardian","H3153N","Hauntedpasta1","jauchland","Jayce","kinzuu_music","llrluis","Ultra","Islanzi","Skyy"]}}}),n=(r(373),r(18)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"pageChange"}},[null!==t.currentImage?r("div",{staticClass:"overlay"},[r("img",{attrs:{src:"/img/gallery/"+t.currentImage+".png"}}),t._v(" "),r("div",{staticClass:"overlay__author"},[r("p",[t._v("\n          "+t._s(t.$t("pages.gallery.photo_copyright"))+" "),r("b",[t._v(t._s(t.currentImage))])])]),t._v(" "),r("div",{staticClass:"overlay__exit"},[r("p",{on:{click:function(e){t.currentImage=null}}},[r("XIcon",{attrs:{size:"2x"}})],1)])]):t._e()]),t._v(" "),r("div",{staticClass:"gallery"},[r("div",{staticClass:"gallery__title"},[r("h1",[t._v(t._s(t.$t("pages.gallery.title")))])]),t._v(" "),r("div",{staticClass:"gallery__images"},t._l(t.images,(function(e){return r("div",{key:e,staticClass:"gallery__image",on:{click:function(r){t.currentImage=e}}},[r("img",{attrs:{src:"/img/gallery/"+e+".png"}}),t._v(" "),r("div",{staticClass:"gallery__author"},[r("p",[t._v("\n            "+t._s(t.$t("pages.gallery.photo_copyright"))+" "),r("b",[t._v(t._s(e))])])])])})),0)])],1)}),[],!1,null,"42f1278c",null);e.default=component.exports}}]);