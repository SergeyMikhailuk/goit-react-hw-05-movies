"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[104],{907:(a,t,e)=>{e.d(t,{Df:()=>i,IR:()=>n,M1:()=>o,TP:()=>r,tx:()=>d});var s=e(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";const c={params:{api_key:"782d86e0b2ff3bbb0b829582439018d5",language:"en-US"}},i=async()=>(await s.Z.get("trending/movie/day",c)).data.results,n=async a=>(await s.Z.get("/search/movie?query=".concat(a),c)).data.results,r=async a=>(await s.Z.get("/movie/".concat(a),c)).data,o=async a=>(await s.Z.get("movie/".concat(a,"/credits?"),c)).data.cast,d=async a=>(await s.Z.get("movie/".concat(a,"/reviews?"),c)).data.results},104:(a,t,e)=>{e.r(t),e.d(t,{default:()=>o});var s=e(791),c=e(689),i=e(907),n=e(401),r=e(184);const o=()=>{const{movieId:a}=(0,c.UO)(),[t,e]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const t=await(0,i.M1)(a||"");e(t)}catch(t){console.error(t)}})().then()}),[a]),(0,r.jsx)(r.Fragment,{children:(null===t||void 0===t?void 0:t.length)&&(0,r.jsx)("ul",{children:t.map((a=>(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:a.profile_path?"https://image.tmdb.org/t/p/w300".concat(a.profile_path):"".concat(n),width:100,alt:a.name}),(0,r.jsx)("p",{children:a.name}),(0,r.jsxs)("p",{children:["Character: ",a.character]})]},a.id)))})})}},401:(a,t,e)=>{a.exports=e.p+"static/media/defaultIcon.641db51271e1b6aafba9.png"}}]);
//# sourceMappingURL=104.eeae98ec.chunk.js.map