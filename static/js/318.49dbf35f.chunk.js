"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[318],{907:(e,t,a)=>{a.d(t,{Df:()=>c,IR:()=>i,M1:()=>o,TP:()=>r,tx:()=>d});var s=a(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";const n={params:{api_key:"782d86e0b2ff3bbb0b829582439018d5",language:"en-US"}},c=async()=>(await s.Z.get("trending/movie/day",n)).data.results,i=async e=>(await s.Z.get("/search/movie?query=".concat(e),n)).data.results,r=async e=>(await s.Z.get("/movie/".concat(e),n)).data,o=async e=>(await s.Z.get("movie/".concat(e,"/credits?"),n)).data.cast,d=async e=>(await s.Z.get("movie/".concat(e,"/reviews?"),n)).data.results},318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(791),n=a(689),c=a(907),i=a(184);const r=()=>{const{movieId:e}=(0,n.UO)(),[t,a]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const t=await(0,c.tx)(e||"");a(t)}catch(t){console.error(t)}})().then()}),[e]),(0,i.jsx)(i.Fragment,{children:null!==t&&void 0!==t&&t.length?(0,i.jsx)("ul",{children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",e.author]}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content}})]},e.id)))}):(0,i.jsx)("p",{children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=318.49dbf35f.chunk.js.map