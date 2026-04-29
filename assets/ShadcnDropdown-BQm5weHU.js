import{j as o,R as g,r as x}from"./index-CfGLtstz.js";import{C as j}from"./CodeDialog-MEd2hOPr.js";import{C as M}from"./CardBox-DyySzG8n.js";import{D as t,a as d,b as i,c as s,d as a,f as n,g as m,h as e,e as r}from"./dropdown-menu-Dv9Pgi74.js";import{B as p}from"./button-D0w4Yy34.js";import{B as C}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-BUrhjHvi.js";import"./Combination-Bax2mEof.js";import"./index-ClgtUdwt.js";import"./index-CqXTGHkZ.js";import"./index-Doepw-3X.js";import"./index-B-YhyF13.js";import"./check-Dndqap4C.js";import"./circle-DfNsaV2W.js";import"./chevron-right-Beq2EQj9.js";import"./index-DcfOEh4u.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const v=()=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{children:"Dropdown Button"})}),o.jsxs(i,{children:[o.jsx(s,{children:"My Account"}),o.jsx(a,{}),o.jsx(n,{children:"Profile"}),o.jsx(n,{children:"Billing"}),o.jsx(n,{children:"Team"}),o.jsx(n,{children:"Subscription"})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"secondary",children:"Dropdown Button"})}),o.jsxs(i,{children:[o.jsx(s,{children:"My Account"}),o.jsx(a,{}),o.jsx(n,{children:"Profile"}),o.jsx(n,{children:"Billing"}),o.jsx(n,{children:"Team"}),o.jsx(n,{children:"Subscription"})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"warning",children:"Dropdown Button"})}),o.jsxs(i,{children:[o.jsx(s,{children:"My Account"}),o.jsx(a,{}),o.jsx(n,{children:"Profile"}),o.jsx(n,{children:"Billing"}),o.jsx(n,{children:"Team"}),o.jsx(n,{children:"Subscription"})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"error",children:"Dropdown Button"})}),o.jsxs(i,{children:[o.jsx(s,{children:"My Account"}),o.jsx(a,{}),o.jsx(n,{children:"Profile"}),o.jsx(n,{children:"Billing"}),o.jsx(n,{children:"Team"}),o.jsx(n,{children:"Subscription"})]})]})]})}),B=`import {\r
    DropdownMenu,\r
    DropdownMenuContent,\r
    DropdownMenuItem,\r
    DropdownMenuLabel,\r
    DropdownMenuSeparator,\r
    DropdownMenuTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/dropdown-menu"\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
\r
\r
const BasicDropdownCode = () => {\r
  return (\r
    <>\r
     <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild><Button>Dropdown Button</Button></DropdownMenuTrigger>\r
                    <DropdownMenuContent >\r
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>\r
                        <DropdownMenuSeparator  />\r
                        <DropdownMenuItem>Profile</DropdownMenuItem>\r
                        <DropdownMenuItem>Billing</DropdownMenuItem>\r
                        <DropdownMenuItem>Team</DropdownMenuItem>\r
                        <DropdownMenuItem>Subscription</DropdownMenuItem>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild><Button variant="secondary" >Dropdown Button</Button></DropdownMenuTrigger>\r
                    <DropdownMenuContent >\r
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>\r
                        <DropdownMenuSeparator  />\r
                        <DropdownMenuItem>Profile</DropdownMenuItem>\r
                        <DropdownMenuItem>Billing</DropdownMenuItem>\r
                        <DropdownMenuItem>Team</DropdownMenuItem>\r
                        <DropdownMenuItem>Subscription</DropdownMenuItem>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild><Button variant="warning" >Dropdown Button</Button></DropdownMenuTrigger>\r
                    <DropdownMenuContent >\r
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>\r
                        <DropdownMenuSeparator  />\r
                        <DropdownMenuItem>Profile</DropdownMenuItem>\r
                        <DropdownMenuItem>Billing</DropdownMenuItem>\r
                        <DropdownMenuItem>Team</DropdownMenuItem>\r
                        <DropdownMenuItem>Subscription</DropdownMenuItem>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild><Button variant="error">Dropdown Button</Button></DropdownMenuTrigger>\r
                    <DropdownMenuContent >\r
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>\r
                        <DropdownMenuSeparator  />\r
                        <DropdownMenuItem>Profile</DropdownMenuItem>\r
                        <DropdownMenuItem>Billing</DropdownMenuItem>\r
                        <DropdownMenuItem>Team</DropdownMenuItem>\r
                        <DropdownMenuItem>Subscription</DropdownMenuItem>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
            </div>\r
    </>\r
  );\r
};\r
\r
export default BasicDropdownCode;\r
`,I=()=>o.jsx(M,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold",children:"Basic Dropdown"}),o.jsx(v,{})]}),o.jsx(j,{children:B})]})}),R=()=>{const[l,u]=g.useState("bottom");return o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"outline",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Panel Position"}),o.jsx(a,{}),o.jsxs(m,{value:l,onValueChange:u,children:[o.jsx(e,{value:"top",children:"Top"}),o.jsx(e,{value:"bottom",children:"Bottom"}),o.jsx(e,{value:"right",children:"Right"})]})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"outlinesecondary",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Panel Position"}),o.jsx(a,{}),o.jsxs(m,{value:l,onValueChange:u,children:[o.jsx(e,{value:"top",children:"Top"}),o.jsx(e,{value:"bottom",children:"Bottom"}),o.jsx(e,{value:"right",children:"Right"})]})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"outlinewarning",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Panel Position"}),o.jsx(a,{}),o.jsxs(m,{value:l,onValueChange:u,children:[o.jsx(e,{value:"top",children:"Top"}),o.jsx(e,{value:"bottom",children:"Bottom"}),o.jsx(e,{value:"right",children:"Right"})]})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"outlineerror",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Panel Position"}),o.jsx(a,{}),o.jsxs(m,{value:l,onValueChange:u,children:[o.jsx(e,{value:"top",children:"Top"}),o.jsx(e,{value:"bottom",children:"Bottom"}),o.jsx(e,{value:"right",children:"Right"})]})]})]})]})})},b=`import {\r
    DropdownMenu,\r
    DropdownMenuContent,\r
    DropdownMenuLabel,\r
    DropdownMenuRadioGroup,\r
    DropdownMenuRadioItem,\r
    DropdownMenuSeparator,\r
    DropdownMenuTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/dropdown-menu"\r
import React from 'react'\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
\r
const DropdownWithRadioCode = () => {\r
    const [position, setPosition] = React.useState("bottom")\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild>\r
                        <Button variant="outline">Open Dropdown</Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent className="w-56">\r
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>\r
                        <DropdownMenuSeparator />\r
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>\r
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>\r
                        </DropdownMenuRadioGroup>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild>\r
                        <Button variant="outlinesecondary">Open Dropdown</Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent className="w-56">\r
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>\r
                        <DropdownMenuSeparator />\r
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>\r
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>\r
                        </DropdownMenuRadioGroup>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild>\r
                        <Button variant="outlinewarning">Open Dropdown</Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent className="w-56">\r
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>\r
                        <DropdownMenuSeparator />\r
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>\r
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>\r
                        </DropdownMenuRadioGroup>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <DropdownMenu>\r
                    <DropdownMenuTrigger asChild>\r
                        <Button variant="outlineerror">Open Dropdown</Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent className="w-56">\r
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>\r
                        <DropdownMenuSeparator />\r
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>\r
                            <DropdownMenuRadioItem  value="top">Top</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="bottom">Bottom</DropdownMenuRadioItem>\r
                            <DropdownMenuRadioItem  value="right">Right</DropdownMenuRadioItem>\r
                        </DropdownMenuRadioGroup>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default DropdownWithRadioCode`,f=()=>o.jsx(M,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown With Radio Group"}),o.jsx(R,{})]}),o.jsx(j,{children:b})]})});function P(){const[l,u]=x.useState(!0),[c,h]=x.useState(!1),[w,D]=x.useState(!1);return o.jsxs(M,{children:[o.jsx("div",{className:"flex items-center justify-between",children:o.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown With Checkbox"})}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Appearance"}),o.jsx(a,{}),o.jsx(r,{checked:l,onCheckedChange:u,children:"Status Bar"}),o.jsx(r,{checked:c,onCheckedChange:h,disabled:!0,children:"Activity Bar"}),o.jsx(r,{checked:w,onCheckedChange:D,children:"Panel"})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"secondary",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Appearance"}),o.jsx(a,{}),o.jsx(r,{checked:l,onCheckedChange:u,children:"Status Bar"}),o.jsx(r,{checked:c,onCheckedChange:h,disabled:!0,children:"Activity Bar"}),o.jsx(r,{checked:w,onCheckedChange:D,children:"Panel"})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"warning",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Appearance"}),o.jsx(a,{}),o.jsx(r,{checked:l,onCheckedChange:u,children:"Status Bar"}),o.jsx(r,{checked:c,onCheckedChange:h,disabled:!0,children:"Activity Bar"}),o.jsx(r,{checked:w,onCheckedChange:D,children:"Panel"})]})]}),o.jsxs(t,{children:[o.jsx(d,{asChild:!0,children:o.jsx(p,{variant:"error",children:"Open Dropdown"})}),o.jsxs(i,{className:"w-56",children:[o.jsx(s,{children:"Appearance"}),o.jsx(a,{}),o.jsx(r,{checked:l,onCheckedChange:u,children:"Status Bar"}),o.jsx(r,{checked:c,onCheckedChange:h,disabled:!0,children:"Activity Bar"}),o.jsx(r,{checked:w,onCheckedChange:D,children:"Panel"})]})]})]})]})}const T=[{to:"/",title:"Home"},{title:"Dropdown"}],ao=()=>o.jsxs(o.Fragment,{children:[o.jsx(C,{title:"Dropdown",items:T}),o.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[o.jsx("div",{className:"col-span-12",children:o.jsx(I,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(f,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(P,{})})]})]});export{ao as default};
