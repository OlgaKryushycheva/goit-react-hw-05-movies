"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,o,a=e(439),i=e(791),c=e(689),u=e(629),s=e(168),h=e(444),f=h.ZP.ul(r||(r=(0,s.Z)(["\n  padding-left: 15px;\n"]))),p=h.ZP.li(o||(o=(0,s.Z)(["\n  margin-bottom: 10px;\n"]))),d=e(184),l=function(){var t=(0,c.UO)().movieId,n=(0,i.useState)(null),r=(0,a.Z)(n,2),o=r[0],s=r[1];if((0,i.useEffect)((function(){(0,u.y)(t).then((function(t){s(t.cast)})).catch((function(t){console.log(t)}))}),[t]),o)return 0===o.length?(0,d.jsx)("p",{children:"We don't have information about cast"}):(0,d.jsx)(f,{children:o.map((function(t){var n;return(0,d.jsxs)(p,{children:[(0,d.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):new URL(e(848),e.b),alt:"Name",width:"75px",height:"100px"}),(0,d.jsx)("p",{children:t.name}),(0,d.jsxs)("p",{children:["Character: ",null!==(n=t.character)&&void 0!==n?n:"unknown"," "]})]},t.id)}))})}},629:function(t,n,e){e.d(n,{Y5:function(){return i},oO:function(){return u},vw:function(){return o},xV:function(){return a},y:function(){return c}});var r="3d9b154117ba874dc2e52ba37ff08e6f";function o(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r,"&language=en-US")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function a(t){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(r,"&include_adult=false&language=en-US&page=1")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function i(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r,"&append_to_response=credits,reviews&language=en-US")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function c(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function u(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}},848:function(t,n,e){t.exports=e.p+"static/media/photo-man.48d9d607e44c9b8e1e80.webp"}}]);
//# sourceMappingURL=115.3df0d835.chunk.js.map