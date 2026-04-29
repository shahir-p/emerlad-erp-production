import{ao as r,j as t,ap as e}from"./index-CfGLtstz.js";import{C as i}from"./CodeDialog-MEd2hOPr.js";import{C as n}from"./CardBox-DyySzG8n.js";import{B as o}from"./button-D0w4Yy34.js";import{B as a}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-DcfOEh4u.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const c=()=>{const{toast:s}=r();return t.jsx(t.Fragment,{children:t.jsx("div",{children:t.jsx(o,{variant:"outline",onClick:()=>{s({title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})},children:"Show Toast"})})})},l=`import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { useToast } from 'src/hooks/use-toast';\r
const TitleToastCode = () => {\r
  const { toast } = useToast();\r
  return (\r
    <>\r
    <div>\r
      <Button\r
          variant="outline"\r
          onClick={() => {\r
            toast({\r
              title: "Uh oh! Something went wrong.",\r
              description: "There was a problem with your request.",\r
            });\r
          }}\r
        >\r
          Show Toast\r
        </Button>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default TitleToastCode`,d=()=>t.jsx("div",{children:t.jsx(n,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Toast With Title"}),t.jsx(c,{})]}),t.jsx(i,{children:l})]})})}),m=()=>{const{toast:s}=r();return t.jsx(t.Fragment,{children:t.jsx("div",{children:t.jsx(o,{variant:"outline",onClick:()=>{s({title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:t.jsx(e,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})})})},h=`import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { ToastAction } from "src/components/shadcn-ui/Default-Ui/toast";\r
import { useToast } from "src/hooks/use-toast";\r
\r
const ActionToastCode = () => {\r
  const { toast } = useToast();\r
  return (\r
    <>\r
    <div>\r
      <Button\r
          variant="outline"\r
          onClick={() => {\r
            toast({\r
              title: "Uh oh! Something went wrong.",\r
              description: "There was a problem with your request.",\r
              action: <ToastAction altText="Try again">Try again</ToastAction>,\r
            });\r
          }}\r
        >\r
          Show Toast\r
        </Button>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ActionToastCode`,p=()=>t.jsx("div",{children:t.jsx(n,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Toast With Action"}),t.jsx(m,{})]}),t.jsx(i,{children:h})]})})}),u=()=>{const{toast:s}=r();return t.jsx(t.Fragment,{children:t.jsx("div",{children:t.jsx(o,{variant:"outline",onClick:()=>{s({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:t.jsx(e,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})})})},x=`import { useToast } from "src/hooks/use-toast";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { ToastAction } from "src/components/shadcn-ui/Default-Ui/toast";\r
\r
const DestrictiveToastCode = () => {\r
  const { toast } = useToast();\r
  return (\r
    <>\r
    <div>\r
      <Button\r
          variant="outline"\r
          onClick={() => {\r
            toast({\r
              variant: "destructive",\r
              title: "Uh oh! Something went wrong.",\r
              description: "There was a problem with your request.",\r
              action: <ToastAction altText="Try again">Try again</ToastAction>,\r
            });\r
          }}\r
        >\r
          Show Toast\r
        </Button>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DestrictiveToastCode`,T=()=>t.jsx("div",{children:t.jsx(n,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Destructive Toast"}),t.jsx(u,{})]}),t.jsx(i,{children:x})]})})}),j=()=>{const{toast:s}=r();return t.jsx("div",{children:t.jsxs(n,{children:[t.jsx("div",{className:"flex items-center justify-between mb-4",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Primary Toast"})}),t.jsx(o,{onClick:()=>{s({variant:"primary",title:"This is primary toast.",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})},children:"Show Toast"})]})})},v=()=>{const{toast:s}=r();return t.jsx("div",{children:t.jsxs(n,{children:[t.jsx("div",{className:"flex items-center justify-between mb-4",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Secondary Toast"})}),t.jsx(o,{variant:"secondary",onClick:()=>{s({variant:"secondary",title:"This is secondary toast.",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})},children:"Show Toast"})]})})},g=()=>{const{toast:s}=r();return t.jsx("div",{children:t.jsxs(n,{children:[t.jsx("div",{className:"flex items-center justify-between mb-4",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Warning Toast"})}),t.jsx(o,{variant:"warning",onClick:()=>{s({variant:"warning",title:"This is warning toast.",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})},children:"Show Toast"})]})})},w=[{to:"/",title:"Home"},{title:"Toast"}],z=()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Toast",items:w}),t.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(d,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(p,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(T,{})}),t.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:t.jsx(j,{})}),t.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:t.jsx(v,{})}),t.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:t.jsx(g,{})})]})]});export{z as default};
