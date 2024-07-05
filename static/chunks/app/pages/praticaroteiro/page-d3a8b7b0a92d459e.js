(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{9490:function(e,t,r){Promise.resolve().then(r.bind(r,7889)),Promise.resolve().then(r.bind(r,2495)),Promise.resolve().then(r.t.bind(r,8311,23))},7889:function(e,t,r){"use strict";r.d(t,{Pratica:function(){return d}});var s=r(7437),n=r(6903),a=r(2200),l=r(3712),i=r(7147),o=r(2314),c=r(7444);function d(e){let{roteiro:t}=e,{messages:r,input:d,handleInputChange:u,handleSubmit:f}=(0,o.RJ)();return(0,s.jsx)("div",{className:"flex min-h-screen bg-[#1E56A0] items-center justify-center max-h-[700px] rounded-md",children:(0,s.jsxs)(l.Zb,{className:"w-[800px] bg-[#1E56A0] text-white m-[100px]",children:[(0,s.jsxs)(l.Ol,{children:[(0,s.jsxs)(l.ll,{className:"justify-center",children:["Praticar: ",t.titulo]}),(0,s.jsxs)(l.SZ,{className:"text-white",children:[" ",t.resumo," "]})]}),(0,s.jsx)(l.aY,{children:(0,s.jsx)(c.x,{className:"w-full h-[400px]  pr-4",children:r.map(e=>(0,s.jsxs)("div",{className:"flex gap-3 text-slate-600 text-sm mb-4",children:["user"===e.role&&(0,s.jsxs)(n.qE,{className:"bg-[#F6F6F6]",children:[(0,s.jsx)(n.Q5,{children:"Us"}),(0,s.jsx)(n.F$,{src:""})]}),"assistant"===e.role&&(0,s.jsxs)(n.qE,{children:[(0,s.jsx)(n.Q5,{children:"CT"}),(0,s.jsx)(n.F$,{src:""})]}),(0,s.jsxs)("p",{className:"leading-relaxed",children:[(0,s.jsxs)("span",{className:"block font-bold text-white",children:["user"===e.role?"Usuario":"Chat",":"]}),e.content]})]},e.id))})}),(0,s.jsxs)(l.eW,{children:[(0,s.jsx)(a.z,{className:"bg-[#57B2FF] hover:bg-[#7bbffc] mr-2",type:"submit",children:" Microfone "}),(0,s.jsxs)("form",{className:"space-x-2 w-full flex gap-2 text-black",onSubmit:f,children:[(0,s.jsx)(i.I,{className:"bg-[#D6E4F0]",placeholder:"Mensagem",value:d,onChange:u}),(0,s.jsx)(a.z,{className:"bg-[#57B2FF] hover:bg-[#7bbffc]",type:"submit",children:" Enviar "})]})]})]})})}},2495:function(e,t,r){"use strict";r.r(t);var s=r(7437),n=r(2265),a=r(5827),l=r(7147),i=r(2084);r(7138),t.default=()=>{let[e,t]=(0,n.useState)(!1);return(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:()=>{t(!e)},children:"Pesquisar Roteiro"}),e&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start  text-gray-500",children:(0,s.jsxs)("div",{className:"bg-[#1E56A0] p-8 rounded shadow-md mt-4",style:{width:"600px",height:"400px"},children:[(0,s.jsx)("button",{onClick:()=>{t(!1)},className:"text-white float-right",children:"x"}),(0,s.jsx)("h1",{className:"text-2xl mb-4  text-white",children:"Pesquisar roteiro"}),(0,s.jsx)("label",{htmlFor:"dificuldade",className:"block text-sm font-medium leading-6  text-white",children:"T\xedtulo"}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(l.I,{placeholder:"",className:"bg-[#F6F6F6]"})}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"linguagem",className:"block text-sm font-medium leading-6 text-white",children:"Idioma"}),(0,s.jsx)("div",{className:"mt-2  text-gray-500",children:(0,s.jsx)(a.Z,{className:" text-gray-500",apiEndpoint:"/api/linguagem"})})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"dificuldade",className:"block text-sm font-medium leading-6  text-white ",children:"Dificuldade"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)(a.Z,{apiEndpoint:"/api/dificulade"})})]}),(0,s.jsx)("div",{className:"mb-4 flex w-full justify-center rounded-md bg-[#57B2FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:(0,s.jsx)(i.z,{as:"a",href:"/pages/resultadopesquisaroteiro",children:"Pesquisar"})})]})})]})}},5827:function(e,t,r){"use strict";var s=r(7437),n=r(2265),a=r(1006),l=r(9573),i=r(6057);t.Z=e=>{let{apiEndpoint:t}=e,[r,o]=(0,n.useState)(null),[c,d]=(0,n.useState)([]);return((0,n.useEffect)(()=>{(async()=>{try{let e=await fetch(t);if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let r=await e.json();d(r),r.length>0&&o(r[0])}catch(e){console.error("Failed to fetch data:",e)}})()},[t]),0===c.length)?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsx)(a.Ri,{value:r,onChange:o,children:(0,s.jsxs)("div",{className:"relative mt-1",children:[(0,s.jsxs)(a.Ri.Button,{className:"relative w-full cursor-default rounded-lg bg-[#F6F6F6] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm",children:[(0,s.jsx)("span",{className:"block truncate",children:r?r.label:"Select an option"}),(0,s.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,s.jsx)(i.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,s.jsx)(l.u,{as:n.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(a.Ri.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#F6F6F6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:c.map(e=>(0,s.jsx)(a.Ri.Option,{className:e=>{let{active:t}=e;return"relative cursor-default select-none py-2 pl-10 pr-4 ".concat(t?"bg-indigo-600 text-white":"text-gray-900")},value:e,children:t=>{let{selected:r}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:"block truncate ".concat(r?"font-medium":"font-normal"),children:e.label})})}},e.id))})})]})})}},6903:function(e,t,r){"use strict";r.d(t,{F$:function(){return o},Q5:function(){return c},qE:function(){return i}});var s=r(7437),n=r(2265),a=r(4458),l=r(8214);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.fC,{ref:t,className:(0,l.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...n})});i.displayName=a.fC.displayName;let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.Ee,{ref:t,className:(0,l.cn)("aspect-square h-full w-full",r),...n})});o.displayName=a.Ee.displayName;let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.NY,{ref:t,className:(0,l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...n})});c.displayName=a.NY.displayName},2200:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var s=r(7437),n=r(2265),a=r(1538),l=r(2218),i=r(8214);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:c=!1,...d}=e,u=c?a.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:n,size:l,className:r})),ref:t,...d})});c.displayName="Button"},3712:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var s=r(7437),n=r(2265),a=r(8214);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});l.displayName="Card";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...n})});i.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...n})});c.displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",r),...n})});d.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},7147:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var s=r(7437),n=r(2265),a=r(8214);let l=n.forwardRef((e,t)=>{let{className:r,type:n,...l}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},7444:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var s=r(7437),n=r(2265),a=r(843),l=r(8214);let i=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,s.jsxs)(a.fC,{ref:t,className:(0,l.cn)("relative overflow-hidden",r),...i,children:[(0,s.jsx)(a.l_,{className:"h-full w-full rounded-[inherit]",children:n}),(0,s.jsx)(o,{}),(0,s.jsx)(a.Ns,{})]})});i.displayName=a.fC.displayName;let o=n.forwardRef((e,t)=>{let{className:r,orientation:n="vertical",...i}=e;return(0,s.jsx)(a.gb,{ref:t,orientation:n,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===n&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===n&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...i,children:(0,s.jsx)(a.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=a.gb.displayName},8214:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var s=r(4839),n=r(6164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}},8311:function(){}},function(e){e.O(0,[230,737,321,971,23,744],function(){return e(e.s=9490)}),_N_E=e.O()}]);