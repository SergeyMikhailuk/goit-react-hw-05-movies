"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[794],{907:(e,t,a)=>{a.d(t,{Df:()=>r,IR:()=>n,M1:()=>o,TP:()=>c,tx:()=>l});var s=a(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";const i={params:{api_key:"782d86e0b2ff3bbb0b829582439018d5",language:"en-US"}},r=async()=>(await s.Z.get("trending/movie/day",i)).data.results,n=async e=>(await s.Z.get("/search/movie?query=".concat(e),i)).data.results,c=async e=>(await s.Z.get("/movie/".concat(e),i)).data,o=async e=>(await s.Z.get("movie/".concat(e,"/credits?"),i)).data.cast,l=async e=>(await s.Z.get("movie/".concat(e,"/reviews?"),i)).data.results},952:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(87),i=a(184);const r=e=>{let{movies:t,location:a}=e;return(0,i.jsx)("ol",{children:!(null===t||void 0===t||!t.length)&&t.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:a},children:e.title})},e.id)))})}},794:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(791),i=a(87),r=a(689),n=a(506),c=a(952),o=a(907),l=a(184);const d=()=>{const[e,t]=(0,s.useState)([]),[a,d]=(0,i.lr)(),u=a.get("query")||"",m=(0,r.TH)();return(0,s.useEffect)((()=>{if(!u)return;(async()=>{try{const e=await(0,o.IR)(u);console.log(e),t(e)}catch(e){console.error(e)}})().then()}),[u]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.J9,{initialValues:{query:u},onSubmit:(e,t)=>{let{query:a}=e,{setSubmitting:s,resetForm:i}=t;(e=>{d(""!==e?{query:e}:void 0)})(a),s(!1),i()},children:e=>{let{isSubmitting:t}=e;return(0,l.jsxs)(n.l0,{children:[(0,l.jsx)(n.gN,{type:"text",name:"query"}),(0,l.jsx)("button",{type:"submit",disabled:t,children:"Search"})]})}}),(0,l.jsx)(c.Z,{movies:e,location:m})]})}}}]);
//# sourceMappingURL=794.614ff1b0.chunk.js.map