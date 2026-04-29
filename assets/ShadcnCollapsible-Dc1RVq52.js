import{j as e,R as o}from"./index-CfGLtstz.js";import{C as s}from"./CodeDialog-MEd2hOPr.js";import{C as r}from"./CardBox-DyySzG8n.js";import{R as d,a as p,b as m}from"./index-CNnm19JM.js";import{B as c}from"./button-D0w4Yy34.js";import{C as x}from"./chevrons-up-down-B284oNTC.js";import{B as u}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-ClgtUdwt.js";import"./index-DcfOEh4u.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const t=d,n=p,i=m,h=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(n,{className:"text-ld text-15 font-medium",children:"Can I use this in my project?"}),e.jsx(i,{className:"mt-2 text-darklink dark:text-bodytext",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})})}),C=`import {\r
  Collapsible,\r
  CollapsibleContent,\r
  CollapsibleTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/collapsible";\r
\r
const BasicCollapseCode = () => {\r
  return (\r
    <>\r
    <div>\r
      <Collapsible>\r
        <CollapsibleTrigger className="text-ld text-15 font-medium">\r
          Can I use this in my project?\r
        </CollapsibleTrigger>\r
        <CollapsibleContent className="mt-2 text-darklink dark:text-bodytext">\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry. Lorem Ipsum has been the industry's standard dummy text ever\r
          since the 1500s, when an unknown printer took a galley of type and\r
          scrambled it to make a type specimen book. It has survived not only\r
          five centuries, but also the leap into electronic typesetting,\r
          remaining essentially unchanged. It was popularised in the 1960s with\r
          the release of Letraset sheets containing Lorem Ipsum passages, and\r
          more recently with desktop publishing software like Aldus PageMaker\r
          including versions of Lorem Ipsum.\r
        </CollapsibleContent>\r
      </Collapsible>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicCollapseCode`,b=()=>e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Collapse"}),e.jsx(h,{})]}),e.jsx(s,{children:C})]})}),g=()=>{const[a,l]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{open:a,onOpenChange:l,className:"w-full space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 ",children:[e.jsx("h4",{className:"text-ld text-15 font-medium",children:"@peduarte starred 3 repositories"}),e.jsx(n,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext",children:"@radix-ui/primitives"}),e.jsxs(i,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext",children:"@stitches/react"})]})]})})})},y=`import {\r
  Collapsible,\r
  CollapsibleContent,\r
  CollapsibleTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/collapsible";\r
import { ChevronsUpDown } from "lucide-react";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import React from "react";\r
\r
const BasicCollapseCode = () => {\r
    const [isOpen, setIsOpen] = React.useState(false);\r
  return (\r
    <>\r
    <div>\r
      <Collapsible\r
        open={isOpen}\r
        onOpenChange={setIsOpen}\r
        className="w-full space-y-2"\r
      >\r
        <div className="flex items-center justify-between space-x-4 ">\r
          <h4 className="text-ld text-15 font-medium">\r
            @peduarte starred 3 repositories\r
          </h4>\r
          <CollapsibleTrigger asChild>\r
            <Button variant="ghost" size="sm" className="w-9 p-0">\r
              <ChevronsUpDown className="h-4 w-4" />\r
              <span className="sr-only">Toggle</span>\r
            </Button>\r
          </CollapsibleTrigger>\r
        </div>\r
        <div className="rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext">\r
          @radix-ui/primitives\r
        </div>\r
        <CollapsibleContent className="space-y-2">\r
          <div className="rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext">\r
            @radix-ui/colors\r
          </div>\r
          <div className="rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext">\r
            @stitches/react\r
          </div>\r
        </CollapsibleContent>\r
      </Collapsible>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicCollapseCode`,v=()=>e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Advance Collapse"}),e.jsx(g,{})]}),e.jsx(s,{children:y})]})}),f=[{to:"/",title:"Home"},{title:"Collapsible"}],K=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Collapsible",items:f}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(b,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(v,{})})]})]});export{K as default};
