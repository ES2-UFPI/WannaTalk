(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{8719:function(e,t,s){Promise.resolve().then(s.bind(s,6329))},6329:function(e,t,s){"use strict";s.r(t);var i=s(7437),l=s(2265),a=s(2495);t.default=()=>{let[e,t]=(0,l.useState)(!1);return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsxs)("header",{className:"p-4 bg-blue-600 text-white",children:[(0,i.jsx)("h1",{className:"text-3xl",children:"My Website"}),(0,i.jsx)("button",{onClick:()=>{t(!0)},className:"mt-2 bg-white text-black p-2 rounded",children:"Search"})]}),(0,i.jsxs)("main",{className:"p-4",children:[(0,i.jsx)("h2",{className:"text-2xl mb-4",children:"Welcome to the homepage!"}),(0,i.jsx)("p",{children:"Here is some content on the main screen."})]}),(0,i.jsx)(a.default,{isVisible:e,onClose:()=>{t(!1)}})]})}},2495:function(e,t,s){"use strict";s.r(t);var i=s(7437),l=s(2265),a=s(5827),n=s(7147),r=s(2084);s(7138),t.default=()=>{let[e,t]=(0,l.useState)(!1);return(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{onClick:()=>{t(!e)},children:"Pesquisar Roteiro"}),e&&(0,i.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start  text-gray-500",children:(0,i.jsxs)("div",{className:"bg-[#1E56A0] p-8 rounded shadow-md mt-4",style:{width:"600px",height:"400px"},children:[(0,i.jsx)("button",{onClick:()=>{t(!1)},className:"text-white float-right",children:"x"}),(0,i.jsx)("h1",{className:"text-2xl mb-4  text-white",children:"Pesquisar roteiro"}),(0,i.jsx)("label",{htmlFor:"dificuldade",className:"block text-sm font-medium leading-6  text-white",children:"T\xedtulo"}),(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)(n.I,{placeholder:"",className:"bg-[#F6F6F6]"})}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{htmlFor:"linguagem",className:"block text-sm font-medium leading-6 text-white",children:"Idioma"}),(0,i.jsx)("div",{className:"mt-2  text-gray-500",children:(0,i.jsx)(a.Z,{className:" text-gray-500",apiEndpoint:"/api/linguagem"})})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{htmlFor:"dificuldade",className:"block text-sm font-medium leading-6  text-white ",children:"Dificuldade"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)(a.Z,{apiEndpoint:"/api/dificulade"})})]}),(0,i.jsx)("div",{className:"mb-4 flex w-full justify-center rounded-md bg-[#57B2FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:(0,i.jsx)(r.z,{as:"a",href:"/pages/resultadopesquisaroteiro",children:"Pesquisar"})})]})})]})}},5827:function(e,t,s){"use strict";var i=s(7437),l=s(2265),a=s(1006),n=s(9573),r=s(6057);t.Z=e=>{let{apiEndpoint:t}=e,[s,o]=(0,l.useState)(null),[c,d]=(0,l.useState)([]);return((0,l.useEffect)(()=>{(async()=>{try{let e=await fetch(t);if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let s=await e.json();d(s),s.length>0&&o(s[0])}catch(e){console.error("Failed to fetch data:",e)}})()},[t]),0===c.length)?(0,i.jsx)("div",{children:"Loading..."}):(0,i.jsx)(a.Ri,{value:s,onChange:o,children:(0,i.jsxs)("div",{className:"relative mt-1",children:[(0,i.jsxs)(a.Ri.Button,{className:"relative w-full cursor-default rounded-lg bg-[#F6F6F6] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm",children:[(0,i.jsx)("span",{className:"block truncate",children:s?s.label:"Select an option"}),(0,i.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,i.jsx)(r.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,i.jsx)(n.u,{as:l.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)(a.Ri.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#F6F6F6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:c.map(e=>(0,i.jsx)(a.Ri.Option,{className:e=>{let{active:t}=e;return"relative cursor-default select-none py-2 pl-10 pr-4 ".concat(t?"bg-indigo-600 text-white":"text-gray-900")},value:e,children:t=>{let{selected:s}=t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"block truncate ".concat(s?"font-medium":"font-normal"),children:e.label})})}},e.id))})})]})})}},7147:function(e,t,s){"use strict";s.d(t,{I:function(){return n}});var i=s(7437),l=s(2265),a=s(8214);let n=l.forwardRef((e,t)=>{let{className:s,type:l,...n}=e;return(0,i.jsx)("input",{type:l,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...n})});n.displayName="Input"},8214:function(e,t,s){"use strict";s.d(t,{cn:function(){return a}});var i=s(4839),l=s(6164);function a(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,l.m6)((0,i.W)(t))}}},function(e){e.O(0,[737,971,23,744],function(){return e(e.s=8719)}),_N_E=e.O()}]);