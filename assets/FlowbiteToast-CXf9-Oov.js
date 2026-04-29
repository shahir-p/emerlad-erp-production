import{z as X,r as o,A as k,j as e,B as C}from"./index-CfGLtstz.js";import{C as c}from"./CardBox-DyySzG8n.js";import{A as I,f as z,i as M,B as U}from"./index-Dg52xdS1.js";import{u as H,g as d,r as D}from"./resolve-theme-DSwo52RB.js";import{X as W}from"./x-icon-CTGvZklN.js";import{C as B}from"./CodeDialog-MEd2hOPr.js";import{B as p}from"./Button-BBgTEsWM.js";import{b as L}from"./index-gWcJBD5U.js";import{g as $}from"./index-BOrXBQHq.js";import{B as q}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./iconBase-uzeOI1Me.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const F=X({root:{base:"flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",closed:"opacity-0 ease-out"},toggle:{base:"-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",icon:"h-5 w-5 shrink-0"}}),R=o.createContext(void 0);function G(){const s=o.useContext(R);if(!s)throw new Error("useToastContext should be used within the ToastContext provider!");return s}const J={75:"duration-75",100:"duration-100",150:"duration-150",200:"duration-200",300:"duration-300",500:"duration-500",700:"duration-700",1e3:"duration-1000"},t=o.forwardRef((s,l)=>{var m,f;const[r,j]=o.useState(!1),[x,u]=o.useState(!1),i=k(),h=H([F,(m=i.theme)==null?void 0:m.toast,s.theme],[d(i.clearTheme,"toast"),s.clearTheme],[d(i.applyTheme,"toast"),s.applyTheme]),{className:v,duration:g=300,...n}=D(s,(f=i.props)==null?void 0:f.toast);return x?null:e.jsx(R.Provider,{value:{theme:s.theme,clearTheme:s.clearTheme,applyTheme:s.applyTheme,duration:g,isClosed:r,isRemoved:x,setIsClosed:j,setIsRemoved:u},children:e.jsx("div",{ref:l,"data-testid":"flowbite-toast",role:"alert",className:C(h.root.base,J[g],r&&h.root.closed,v),...n})})});t.displayName="Toast";const a=o.forwardRef((s,l)=>{var b,y,w;const{theme:r,clearTheme:j,applyTheme:x,duration:u,isClosed:i,isRemoved:h,setIsClosed:v,setIsRemoved:g}=G(),n=k(),m=H([F.toggle,(y=(b=n.theme)==null?void 0:b.toast)==null?void 0:y.toggle,r==null?void 0:r.toggle,s.theme],[d(n.clearTheme,"toast.toggle"),d(j,"toggle"),s.clearTheme],[d(n.applyTheme,"toast.toggle"),d(x,"toggle"),s.applyTheme]),{className:f,onClick:T,onDismiss:N,xIcon:A=W,...S}=D(s,(w=n.props)==null?void 0:w.toastToggle);function E(P){if(T&&T(P),N){N();return}v(!i),setTimeout(()=>g(!h),u)}return e.jsx("button",{ref:l,"aria-label":"Close",onClick:E,type:"button",className:C(m.base,f),...S,children:e.jsx(A,{"aria-hidden":!0,className:m.icon})})});a.displayName="ToastToggle";const K=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",children:e.jsx(I,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Set yourself free."}),e.jsx(a,{})]})})}),O=`import { Toast, ToastToggle } from 'flowbite-react';\r
import { HiFire } from 'react-icons/hi';\r
\r
const DefaultToastCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">\r
            <HiFire className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Set yourself free.</div>\r
          <ToastToggle />\r
        </Toast>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultToastCode;\r
`,Q=()=>e.jsx("div",{children:e.jsx(c,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Toast"}),e.jsx(K,{})]}),e.jsx(B,{children:O})]})})}),V=()=>{const[s,l]=o.useState(!1);return e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Dismissal Toast"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{onClick:()=>l(r=>!r),color:"primary",children:"Toggle toast"}),s&&e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",children:e.jsx(I,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Set yourself free."}),e.jsx(a,{onDismiss:()=>l(!1)})]})]})]})})},Y=()=>e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Feedback Toast"}),e.jsxs(t,{children:[e.jsx(L,{className:"h-5 w-5 text-primary dark:text-primary"}),e.jsx("div",{className:"pl-4 text-sm font-normal",children:"Message sent successfully."})]})]})}),Z=()=>e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Interactive Toast"}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300",children:e.jsx($,{className:"h-5 w-5"})}),e.jsxs("div",{className:"ml-3 text-sm font-normal",children:[e.jsx("span",{className:"mb-1 text-sm font-semibold text-gray-900 dark:text-white",children:"Update available"}),e.jsx("div",{className:"mb-2 text-sm font-normal",children:"A new software version is available for download.A new software version is available for download.A new software version is available for download.A new software version is available for"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-auto",children:e.jsx(p,{size:"xs",color:"primary",children:"Update"})}),e.jsx("div",{className:"w-auto",children:e.jsx(p,{color:"light",size:"xs",children:"Not now"})})]})]}),e.jsx(a,{})]})})]})}),_=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200",children:e.jsx(z,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item moved successfully."}),e.jsx(a,{})]}),e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",children:e.jsx(M,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item has been deleted."}),e.jsx(a,{})]}),e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200",children:e.jsx(U,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Improve password difficulty."}),e.jsx(a,{})]})]})}),ee=`import { Toast, ToastToggle } from 'flowbite-react';\r
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';\r
\r
const ToastColorsCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-4">\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">\r
            <HiCheck className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Item moved successfully.</div>\r
          <ToastToggle />\r
        </Toast>\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">\r
            <HiX className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Item has been deleted.</div>\r
          <ToastToggle />\r
        </Toast>\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">\r
            <HiExclamation className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>\r
          <ToastToggle />\r
        </Toast>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default ToastColorsCode;\r
`,se=()=>e.jsx("div",{children:e.jsx(c,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Toast Colors"}),e.jsx(_,{})]}),e.jsx(B,{children:ee})]})})}),te=()=>e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Toast With Button"}),e.jsxs(t,{children:[e.jsx("div",{className:"text-sm font-normal",children:"Conversation archived."}),e.jsxs("div",{className:"ml-auto flex items-center space-x-2",children:[e.jsx("a",{href:"#",className:"rounded-lg p-1.5 text-sm font-medium text-primary hover:bg-cyan-100 dark:text-primary dark:hover:bg-gray-700",children:"Undo"}),e.jsx(a,{})]})]})]})}),re=[{to:"/",title:"Home"},{title:"Toast"}],De=()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{title:"Toast",items:re}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Q,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(te,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(se,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Y,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(V,{})})]})]});export{De as default};
