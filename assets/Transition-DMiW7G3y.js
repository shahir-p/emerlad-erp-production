import{r as s,j as n,m as d,D as c}from"./index-CfGLtstz.js";import{C as a}from"./CardBox-DyySzG8n.js";import{K as o}from"./transition-_nSOAj-c.js";import{C as i}from"./CodeDialog-MEd2hOPr.js";import{I as m}from"./iconify-C7ABZ5uA.js";import{L as l}from"./button-C_qrZTwP.js";import{B as u}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./render-CZr0IE3h.js";import"./use-is-mounted-D3Kyezo4.js";import"./use-sync-refs-suQn1iCl.js";import"./open-closed-CJbBhe81.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./useFocusRing-Dysd-fso.js";import"./use-active-press-BrBzUP4y.js";import"./owner-Dk1fjd6m.js";import"./use-slot-BBOf4H17.js";import"./disabled-u174kIKb.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const p=()=>{const[r,e]=s.useState(!1);return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"mt-4",children:[n.jsx("button",{onClick:()=>e(t=>!t),className:"ui-button bg-primary justify-center",children:"Toggle Transition"}),n.jsx(o,{show:r,children:n.jsx("div",{className:"transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 ",children:"I will fade in and out"})})]})})},h=`import { useState } from "react";\r
import { Transition } from '@headlessui/react'\r
\r
const BasicTransactionCode = () => {\r
  const [open, setOpen] = useState(false)\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button onClick={() => setOpen((open) => !open)} className="ui-button bg-primary justify-center">Toggle Transition</button>\r
        <Transition show={open}>\r
            <div className="transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 ">I will fade in and out</div>\r
        </Transition>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicTransactionCode\r
`,x=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Basic Transition"}),n.jsx(p,{})]}),n.jsx(i,{children:h})]})})}),j=()=>{let[r,e]=s.useState(!0);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"size-[6.25rem]",children:n.jsx(o,{show:r,children:n.jsx("div",{className:d("size-full rounded-xl bg-primary shadow-lg transition duration-400","data-closed:scale-50 data-closed:rotate-[-120deg] data-closed:opacity-0","data-leave:duration-200 data-leave:ease-in-out","data-leave:data-closed:scale-95 data-leave:data-closed:rotate-[0deg]")})})}),n.jsxs(l,{onClick:()=>{e(!1),setTimeout(()=>e(!0),500)},className:" transition data-hover:scale-105 ui-button justify-center bg-secondary gap-3 mt-4",children:[n.jsx(m,{icon:"solar:refresh-bold",height:20}),n.jsx("span",{children:"Click to transition"})]})]})})})},v=`import  { useState } from "react";\r
import { Button, Transition } from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
import clsx from "clsx";\r
\r
\r
const ClickTransitionCode = () => {\r
   let [isShowing, setIsShowing] = useState(true);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col items-center">\r
          <div className="size-[6.25rem]">\r
            <Transition show={isShowing}>\r
              <div\r
                className={clsx(\r
                  "size-full rounded-xl bg-primary shadow-lg transition duration-400",\r
                  "data-closed:scale-50 data-closed:rotate-[-120deg] data-closed:opacity-0",\r
                  "data-leave:duration-200 data-leave:ease-in-out",\r
                  "data-leave:data-closed:scale-95 data-leave:data-closed:rotate-[0deg]"\r
                )}\r
              />\r
            </Transition>\r
          </div>\r
\r
          <Button\r
            onClick={() => {\r
              setIsShowing(false);\r
              setTimeout(() => setIsShowing(true), 500);\r
            }}\r
            className=" transition data-hover:scale-105 ui-button justify-center bg-secondary gap-3 mt-4"\r
          >\r
            <Icon icon="solar:refresh-bold" height={20} />\r
            <span>Click to transition</span>\r
          </Button>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ClickTransitionCode;\r
`,g=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Click To Transition"}),n.jsx(j,{})]}),n.jsx(i,{children:v})]})})}),f=()=>{const{setIsSidebarOpen:r}=s.useContext(c);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsx("button",{onClick:()=>r(!0),className:"ui-button bg-success justify-center",children:"Coordinating Transition"})})})},b=`import  { useContext,  } from "react";\r
import { DashboardContext } from "src/context/DashboardContext/DashboardContext";\r
\r
\r
const CoordinationCode = () => {\r
  const {setIsSidebarOpen} = useContext(DashboardContext);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button\r
          onClick={() => setIsSidebarOpen(true)}\r
          className="ui-button bg-success justify-center"\r
        >\r
          Coordinating Transition\r
        </button>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default CoordinationCode;\r
`,C=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Coordinating Transition"}),n.jsx(f,{})]}),n.jsx(i,{children:b})]})})}),N=()=>{const[r,e]=s.useState(!1);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsxs("div",{className:"relative",children:[n.jsx("button",{onClick:()=>e(t=>!t),className:"ui-button bg-secondary justify-center",children:"Enter Leave Transition"}),n.jsx(o,{show:r,children:n.jsx("div",{className:d(["absolute z-50 transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1","data-closed:opacity-0 ","data-enter:duration-100 data-enter:data-closed:-translate-x-full","data-leave:duration-300 data-leave:data-closed:translate-x-full"]),children:"I will enter from the left and leave to the right"})})]})})})},T=`import { Transition } from "@headlessui/react";\r
import clsx from "clsx";\r
import  { useState } from "react";\r
\r
\r
const EnterLeaveTransitionCode = () => {\r
  const [open, setOpen] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
       <div className="relative">\r
          <button onClick={() => setOpen((open) => !open)} className="ui-button bg-secondary justify-center">Enter Leave Transition</button>\r
          <Transition show={open}>\r
            <div\r
              className={clsx([\r
                // Base styles\r
                "absolute z-50 transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1",\r
                // Shared closed styles\r
                "data-closed:opacity-0 ",\r
                // Entering styles\r
                "data-enter:duration-100 data-enter:data-closed:-translate-x-full",\r
                // Leaving styles\r
                "data-leave:duration-300 data-leave:data-closed:translate-x-full",\r
              ])}\r
            >\r
              I will enter from the left and leave to the right\r
            </div>\r
          </Transition>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default EnterLeaveTransitionCode\r
`,w=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Different Transition"}),n.jsx(N,{})]}),n.jsx(i,{children:T})]})})}),y=()=>{const[r,e]=s.useState(!0);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx(o,{show:r,appear:!0,children:n.jsx("div",{className:"transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72",children:"I will fade in on initial render Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),n.jsx(l,{onClick:()=>e(t=>!t),className:"transition data-hover:scale-105 ui-button justify-center bg-info gap-3 mt-5  ",children:"On Intial Transition"})]})})})},k=`import { useState } from "react";\r
import { Transition, Button } from "@headlessui/react";\r
\r
\r
const IntialTransitionCode = () => {\r
  const [open, setOpen] = useState(true);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col items-center">\r
          <Transition show={open} appear={true}>\r
            <div className="transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72">\r
              I will fade in on initial render\r
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r
            </div>\r
          </Transition>\r
          <Button\r
            onClick={() => setOpen((open) => !open)}\r
            className="transition data-hover:scale-105 ui-button justify-center bg-info gap-3 mt-5  "\r
          >\r
           On Intial Transition\r
          </Button>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default IntialTransitionCode\r
`,I=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Transitioning On Initial Mount"}),n.jsx(y,{})]}),n.jsx(i,{children:k})]})})}),S=[{to:"/",title:"Home"},{title:"Transition"}],an=()=>n.jsxs(n.Fragment,{children:[n.jsx(u,{title:"Transition",items:S}),n.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[n.jsx("div",{className:"col-span-12",children:n.jsx(x,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(w,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(C,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(g,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(I,{})})]})]});export{an as default};
