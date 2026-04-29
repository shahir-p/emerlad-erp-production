import{Z as o,R as n,j as r}from"./index-CfGLtstz.js";import{C as l}from"./CodeDialog-MEd2hOPr.js";import{C as c}from"./CardBox-DyySzG8n.js";import{B as e}from"./button-D0w4Yy34.js";import{D as d,a as m,b as u,c as p,d as x,e as h,f as w,g as D}from"./drawer-DafhLJT8.js";import{P as j}from"./plus-CMnHdYHe.js";import{B as f}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-DcfOEh4u.js";import"./index-BVp8Vdb6.js";import"./index-ClgtUdwt.js";import"./Combination-Bax2mEof.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M5 12h14",key:"1ays0h"}]],g=o("Minus",v),C=()=>{const[a,t]=n.useState(350);function s(i){t(Math.max(200,Math.min(400,a+i)))}return r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:r.jsxs(d,{children:[r.jsx(m,{asChild:!0,children:r.jsx(e,{children:"Open Drawer"})}),r.jsx(u,{children:r.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[r.jsxs(p,{children:[r.jsx(x,{children:"Move Goal"}),r.jsx(h,{children:"Set your daily activity goal."})]}),r.jsx("div",{className:"p-4 pb-0",children:r.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[r.jsxs(e,{variant:"outline",size:"icon",className:"h-8 w-8 shrink-0 rounded-full",onClick:()=>s(-10),disabled:a<=200,children:[r.jsx(g,{}),r.jsx("span",{className:"sr-only",children:"Decrease"})]}),r.jsxs("div",{className:"flex-1 text-center",children:[r.jsx("div",{className:"text-7xl font-bold tracking-tighter",children:a}),r.jsx("div",{className:"text-[0.70rem] uppercase text-muted-foreground",children:"Calories/day"})]}),r.jsxs(e,{variant:"outline",size:"icon",className:"h-8 w-8 shrink-0 rounded-full",onClick:()=>s(10),disabled:a>=400,children:[r.jsx(j,{}),r.jsx("span",{className:"sr-only",children:"Increase"})]})]})}),r.jsxs(w,{children:[r.jsx(e,{children:"Submit"}),r.jsx(D,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Cancel"})})]})]})})]})})})},N=`import { Minus, Plus } from "lucide-react"\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button"\r
import {\r
    Drawer,\r
    DrawerClose,\r
    DrawerContent,\r
    DrawerDescription,\r
    DrawerFooter,\r
    DrawerHeader,\r
    DrawerTitle,\r
    DrawerTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/drawer"\r
import React from 'react'\r
\r
const BasicDrawerCode = () => {\r
    const [goal, setGoal] = React.useState(350)\r
\r
    function onClick(adjustment: number) {\r
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))\r
    }\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Drawer>\r
                    <DrawerTrigger asChild>\r
                        <Button>Open Drawer</Button>\r
                    </DrawerTrigger>\r
                    <DrawerContent >\r
                        <div className="mx-auto w-full max-w-sm">\r
                            <DrawerHeader>\r
                                <DrawerTitle>Move Goal</DrawerTitle>\r
                                <DrawerDescription>Set your daily activity goal.</DrawerDescription>\r
                            </DrawerHeader>\r
                            <div className="p-4 pb-0">\r
                                <div className="flex items-center justify-center space-x-2">\r
                                    <Button\r
                                        variant="outline"\r
                                        size="icon"\r
                                        className="h-8 w-8 shrink-0 rounded-full"\r
                                        onClick={() => onClick(-10)}\r
                                        disabled={goal <= 200}\r
                                    >\r
                                        <Minus />\r
                                        <span className="sr-only">Decrease</span>\r
                                    </Button>\r
                                    <div className="flex-1 text-center">\r
                                        <div className="text-7xl font-bold tracking-tighter">\r
                                            {goal}\r
                                        </div>\r
                                        <div className="text-[0.70rem] uppercase text-muted-foreground">\r
                                            Calories/day\r
                                        </div>\r
                                    </div>\r
                                    <Button\r
                                        variant="outline"\r
                                        size="icon"\r
                                        className="h-8 w-8 shrink-0 rounded-full"\r
                                        onClick={() => onClick(10)}\r
                                        disabled={goal >= 400}\r
                                    >\r
                                        <Plus />\r
                                        <span className="sr-only">Increase</span>\r
                                    </Button>\r
                                </div>\r
                            </div>\r
                            <DrawerFooter>\r
                                <Button>Submit</Button>\r
                                <DrawerClose asChild>\r
                                    <Button variant="outline">Cancel</Button>\r
                                </DrawerClose>\r
                            </DrawerFooter>\r
                        </div>\r
                    </DrawerContent>\r
                </Drawer>\r
                \r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicDrawerCode`,B=()=>r.jsx(c,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Basic Drawer"}),r.jsx(C,{})]}),r.jsx(l,{children:N})]})}),b=[{to:"/",title:"Home"},{title:"Drawer"}],X=()=>r.jsxs(r.Fragment,{children:[r.jsx(f,{title:"Drawer",items:b}),r.jsx("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:r.jsx("div",{className:"col-span-12",children:r.jsx(B,{})})})]});export{X as default};
