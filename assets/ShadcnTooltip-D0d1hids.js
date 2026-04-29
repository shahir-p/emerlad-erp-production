import{j as o}from"./index-CfGLtstz.js";import{C as l}from"./CodeDialog-MEd2hOPr.js";import{C as p}from"./CardBox-DyySzG8n.js";import{T as t,a as i,b as r,c as n}from"./tooltip-CJnbLyTR.js";import{B as e}from"./button-D0w4Yy34.js";import{B as s}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-ClgtUdwt.js";import"./index-CqXTGHkZ.js";import"./index-Doepw-3X.js";import"./index-DcfOEh4u.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const d=()=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex flex-wrap items-center gap-5 mt-4",children:[o.jsx(t,{children:o.jsxs(i,{children:[o.jsx(r,{asChild:!0,children:o.jsx(e,{children:"Top Tooltip"})}),o.jsx(n,{side:"top",children:"Top Tooltip"})]})}),o.jsx(t,{children:o.jsxs(i,{children:[o.jsx(r,{asChild:!0,children:o.jsx(e,{variant:"secondary",children:"Right Side Tooltip"})}),o.jsx(n,{side:"right",children:"Right Tooltip"})]})}),o.jsx(t,{children:o.jsxs(i,{children:[o.jsx(r,{asChild:!0,children:o.jsx(e,{variant:"error",children:"Bottom Side Tooltip"})}),o.jsx(n,{side:"bottom",children:"Bottom Tooltip"})]})}),o.jsx(t,{children:o.jsxs(i,{children:[o.jsx(r,{asChild:!0,children:o.jsx(e,{variant:"warning",children:"Left Side Tooltip"})}),o.jsx(n,{side:"left",children:"Left Tooltip"})]})})]})}),T=`import {\r
  Tooltip,\r
  TooltipContent,\r
  TooltipProvider,\r
  TooltipTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/tooltip";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
const BasicTooltipCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-5 mt-4">\r
        <TooltipProvider>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button>Top Tooltip</Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="top">Top Tooltip</TooltipContent>\r
          </Tooltip>\r
        </TooltipProvider>\r
        <TooltipProvider>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="secondary">Right Side Tooltip</Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="right">Right Tooltip</TooltipContent>\r
          </Tooltip>\r
        </TooltipProvider>\r
        <TooltipProvider>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="error">Bottom Side Tooltip</Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="bottom">Bottom Tooltip</TooltipContent>\r
          </Tooltip>\r
        </TooltipProvider>\r
        <TooltipProvider>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="warning">Left Side Tooltip</Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="left">Left Tooltip</TooltipContent>\r
          </Tooltip>\r
        </TooltipProvider>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default BasicTooltipCode;\r
`,a=()=>o.jsx(p,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold",children:"Basic Tooltip"}),o.jsx(d,{})]}),o.jsx(l,{children:T})]})}),m=[{to:"/",title:"Home"},{title:"Tooltip"}],q=()=>o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Tooltip",items:m}),o.jsx("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:o.jsx("div",{className:"col-span-12",children:o.jsx(a,{})})})]});export{q as default};
