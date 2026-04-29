import{Z as u,j as r,R as x}from"./index-CfGLtstz.js";import{C as j}from"./CodeDialog-MEd2hOPr.js";import{C as g}from"./CardBox-DyySzG8n.js";import{C as S,a as o,b as s,c as d,d as m,e as n,f as y,g as e,h as b}from"./command-DI0vTKH6.js";import{C as f}from"./calendar-Bvl2V4SX.js";import{U as t}from"./user-Dd_LXd5w.js";import{C as i}from"./credit-card-CUa2Jkzo.js";import{S as l}from"./settings-C1uqlZvn.js";import{d as k}from"./dialog-CfX9tFNW.js";import{B as v}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-BVp8Vdb6.js";import"./index-ClgtUdwt.js";import"./Combination-Bax2mEof.js";import"./search-BlvvxFim.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],c=u("Calculator",E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],p=u("Smile",B),D=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsxs(S,{className:"rounded-lg border border-ld mt-4",children:[r.jsx(o,{placeholder:"Type a command or search..."}),r.jsxs(s,{children:[r.jsx(d,{children:"No results found."}),r.jsxs(m,{heading:"Suggestions",children:[r.jsxs(n,{children:[r.jsx(f,{}),r.jsx("span",{children:"Calendar"})]}),r.jsxs(n,{children:[r.jsx(p,{}),r.jsx("span",{children:"Search Emoji"})]}),r.jsxs(n,{disabled:!0,children:[r.jsx(c,{}),r.jsx("span",{children:"Calculator"})]})]}),r.jsx(y,{}),r.jsxs(m,{heading:"Settings",children:[r.jsxs(n,{children:[r.jsx(t,{}),r.jsx("span",{children:"Profile"}),r.jsx(e,{children:"⌘P"})]}),r.jsxs(n,{children:[r.jsx(i,{}),r.jsx("span",{children:"Billing"}),r.jsx(e,{children:"⌘B"})]}),r.jsxs(n,{children:[r.jsx(l,{}),r.jsx("span",{children:"Settings"}),r.jsx(e,{children:"⌘S"})]})]})]})]})})}),L=`import {\r
  Calculator,\r
  Calendar,\r
  CreditCard,\r
  Settings,\r
  Smile,\r
  User,\r
} from "lucide-react";\r
\r
import {\r
  Command,\r
  CommandEmpty,\r
  CommandGroup,\r
  CommandInput,\r
  CommandItem,\r
  CommandList,\r
  CommandSeparator,\r
  CommandShortcut,\r
} from "src/components/shadcn-ui/Default-Ui/command";\r
\r
const BasicCommandCode = () => {\r
  return (\r
    <>\r
    <div>\r
      <Command className="rounded-lg border border-ld mt-4">\r
          <CommandInput placeholder="Type a command or search..." />\r
          <CommandList>\r
            <CommandEmpty>No results found.</CommandEmpty>\r
            <CommandGroup heading="Suggestions">\r
              <CommandItem>\r
                <Calendar />\r
                <span>Calendar</span>\r
              </CommandItem>\r
              <CommandItem>\r
                <Smile />\r
                <span>Search Emoji</span>\r
              </CommandItem>\r
              <CommandItem disabled>\r
                <Calculator />\r
                <span>Calculator</span>\r
              </CommandItem>\r
            </CommandGroup>\r
            <CommandSeparator />\r
            <CommandGroup heading="Settings">\r
              <CommandItem>\r
                <User />\r
                <span>Profile</span>\r
                <CommandShortcut>⌘P</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <CreditCard />\r
                <span>Billing</span>\r
                <CommandShortcut>⌘B</CommandShortcut>\r
              </CommandItem>\r
              <CommandItem>\r
                <Settings />\r
                <span>Settings</span>\r
                <CommandShortcut>⌘S</CommandShortcut>\r
              </CommandItem>\r
            </CommandGroup>\r
          </CommandList>\r
        </Command>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicCommandCode`,P=()=>r.jsx("div",{children:r.jsx(g,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Basic Command"}),r.jsx(D,{})]}),r.jsx(j,{children:L})]})})}),w=()=>{const[I,C]=x.useState(!1);return x.useEffect(()=>{const h=a=>{a.key==="j"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),C(N=>!N))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[]),r.jsx(r.Fragment,{children:r.jsxs("div",{children:[r.jsxs("p",{className:"text-sm text-ld flex gap-2",children:["Press",r.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted dark:bg-darkmuted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[r.jsx("span",{className:"text-xs",children:"⌘"}),"J"]})]}),r.jsxs(S,{className:"rounded-lg border border-ld mt-4",children:[r.jsx(o,{className:"border-none",placeholder:"Type a command or search..."}),r.jsxs(s,{children:[r.jsx(d,{children:"No results found."}),r.jsxs(m,{heading:"Settings",children:[r.jsxs(n,{children:[r.jsx(p,{}),r.jsx("span",{children:"Search Emoji"})]}),r.jsxs(n,{disabled:!0,children:[r.jsx(c,{}),r.jsx("span",{children:"Calculator"})]}),r.jsxs(n,{children:[r.jsx(t,{}),r.jsx("span",{children:"Profile"}),r.jsx(e,{children:"⌘P"})]}),r.jsxs(n,{children:[r.jsx(i,{}),r.jsx("span",{children:"Billing"}),r.jsx(e,{children:"⌘B"})]}),r.jsxs(n,{children:[r.jsx(l,{}),r.jsx("span",{children:"Settings"}),r.jsx(e,{children:"⌘S"})]})]})]})]}),r.jsxs(b,{open:I,onOpenChange:C,children:[r.jsx(k,{className:"sr-only",children:"Command Dialog"})," ",r.jsx(o,{placeholder:"Type a command or search..."}),r.jsxs(s,{children:[r.jsx(d,{children:"No results found."}),r.jsxs(m,{heading:"Suggestions",children:[r.jsxs(n,{children:[r.jsx(f,{}),r.jsx("span",{children:"Calendar"})]}),r.jsxs(n,{children:[r.jsx(p,{}),r.jsx("span",{children:"Search Emoji"})]}),r.jsxs(n,{children:[r.jsx(c,{}),r.jsx("span",{children:"Calculator"})]})]}),r.jsx(y,{}),r.jsxs(m,{heading:"Settings",children:[r.jsxs(n,{children:[r.jsx(t,{}),r.jsx("span",{children:"Profile"}),r.jsx(e,{children:"⌘P"})]}),r.jsxs(n,{children:[r.jsx(i,{}),r.jsx("span",{children:"Billing"}),r.jsx(e,{children:"⌘B"})]}),r.jsxs(n,{children:[r.jsx(l,{}),r.jsx("span",{children:"Settings"}),r.jsx(e,{children:"⌘S"})]})]})]})]})]})})},G=`import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';\r
\r
import {\r
  Command,\r
  CommandDialog,\r
  CommandEmpty,\r
  CommandGroup,\r
  CommandInput,\r
  CommandItem,\r
  CommandList,\r
  CommandSeparator,\r
  CommandShortcut,\r
} from 'src/components/shadcn-ui/Default-Ui/command';\r
import { DialogTitle } from 'src/components/shadcn-ui/Default-Ui/dialog';\r
import React from 'react';\r
\r
const DialogCommandCode = () => {\r
    const [open, setOpen] = React.useState(false);\r
\r
  React.useEffect(() => {\r
    const down = (e: KeyboardEvent) => {\r
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {\r
        e.preventDefault();\r
        setOpen((open) => !open);\r
      }\r
    };\r
\r
    document.addEventListener('keydown', down);\r
    return () => document.removeEventListener('keydown', down);\r
  }, []);\r
  return (\r
    <>\r
    <div>\r
              <p className="text-sm text-ld flex gap-2">\r
        Press\r
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted dark:bg-darkmuted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">\r
          <span className="text-xs">⌘</span>J\r
        </kbd>\r
      </p>\r
      <Command className="rounded-lg border border-ld mt-4">\r
        <CommandInput className="border-none" placeholder="Type a command or search..." />\r
        <CommandList>\r
          <CommandEmpty>No results found.</CommandEmpty>\r
          <CommandGroup heading="Settings">\r
            <CommandItem>\r
              <Smile />\r
              <span>Search Emoji</span>\r
            </CommandItem>\r
            <CommandItem disabled>\r
              <Calculator />\r
              <span>Calculator</span>\r
            </CommandItem>\r
            <CommandItem>\r
              <User />\r
              <span>Profile</span>\r
              <CommandShortcut>⌘P</CommandShortcut>\r
            </CommandItem>\r
            <CommandItem>\r
              <CreditCard />\r
              <span>Billing</span>\r
              <CommandShortcut>⌘B</CommandShortcut>\r
            </CommandItem>\r
            <CommandItem>\r
              <Settings />\r
              <span>Settings</span>\r
              <CommandShortcut>⌘S</CommandShortcut>\r
            </CommandItem>\r
          </CommandGroup>\r
        </CommandList>\r
      </Command>\r
      <CommandDialog open={open} onOpenChange={setOpen}>\r
        <DialogTitle className="sr-only">Command Dialog</DialogTitle> {/* Visually hidden */}\r
        <CommandInput placeholder="Type a command or search..." />\r
        <CommandList>\r
          <CommandEmpty>No results found.</CommandEmpty>\r
          <CommandGroup heading="Suggestions">\r
            <CommandItem>\r
              <Calendar />\r
              <span>Calendar</span>\r
            </CommandItem>\r
            <CommandItem>\r
              <Smile />\r
              <span>Search Emoji</span>\r
            </CommandItem>\r
            <CommandItem>\r
              <Calculator />\r
              <span>Calculator</span>\r
            </CommandItem>\r
          </CommandGroup>\r
          <CommandSeparator />\r
          <CommandGroup heading="Settings">\r
            <CommandItem>\r
              <User />\r
              <span>Profile</span>\r
              <CommandShortcut>⌘P</CommandShortcut>\r
            </CommandItem>\r
            <CommandItem>\r
              <CreditCard />\r
              <span>Billing</span>\r
              <CommandShortcut>⌘B</CommandShortcut>\r
            </CommandItem>\r
            <CommandItem>\r
              <Settings />\r
              <span>Settings</span>\r
              <CommandShortcut>⌘S</CommandShortcut>\r
            </CommandItem>\r
          </CommandGroup>\r
        </CommandList>\r
      </CommandDialog>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DialogCommandCode`,T=()=>r.jsx(g,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"mb-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Dialog Command"}),r.jsx("p",{className:"text-darklink dark:text-bodytext",children:"Please press CTRL + J to show command dialog"})]}),r.jsx(w,{})]}),r.jsx(j,{children:G})]})}),U=[{to:"/",title:"Home"},{title:"Command"}],cr=()=>r.jsxs("div",{children:[r.jsx(v,{title:"Command",items:U}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(P,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(T,{})})]})]});export{cr as default};
