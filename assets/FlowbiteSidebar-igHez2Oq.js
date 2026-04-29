import{r as f,A as H,j as e,B as y,t as Q}from"./index-CfGLtstz.js";import{C as h}from"./CardBox-DyySzG8n.js";import{u as K,s as O,d as X,a as b,b as m,c as t,S as r}from"./SidebarItems-BIDpPxaX.js";import{I as p,d as Z,c as u,a as w,b as N}from"./IconUserPlus-DnCoc--A.js";import{c as j}from"./createReactComponent-D4LhIROw.js";import{C as x}from"./CodeDialog-MEd2hOPr.js";import{y as _,c as ee}from"./index-Dg52xdS1.js";import{u as E,g as n,r as q}from"./resolve-theme-DSwo52RB.js";import{C as re}from"./chevron-down-icon-Cc3DmJkO.js";import{T as ie}from"./Tooltip-BIt1YLVa.js";import{I as g}from"./IconUser-D6WgNCtV.js";import{B as ae}from"./Badge-CN-1CXXU.js";import{F as oe}from"./FullLogo-CUyuWcum.js";import{B as se}from"./BreadcrumbComp-C5Rb_68r.js";import{C as ne}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./index-C1v8dAYa.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./vsc-dark-plus-CaALPQDR.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-uzeOI1Me.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./logo-icon-CIhFJcf6.js";import"./chevron-right-icon-zTlTfnsS.js";import"./TableRow-BV2w-xRG.js";const k=f.forwardRef((a,l)=>{var F,R,W;const{theme:o,clearTheme:D,applyTheme:T,isCollapsed:v}=K(),s=H(),i=E([O.collapse,(R=(F=s.theme)==null?void 0:F.sidebar)==null?void 0:R.collapse,o==null?void 0:o.collapse,a.theme],[n(s.clearTheme,"sidebar.collapse"),n(D,"collapse"),a.clearTheme],[n(s.applyTheme,"sidebar.collapse"),n(T,"collapse"),a.applyTheme]),{children:B,className:L,icon:z,label:d,chevronIcon:C=re,renderChevronIcon:S,open:P=!1,...V}=q(a,(W=s.props)==null?void 0:W.sidebarCollapse),M=f.useId(),[c,G]=f.useState(P);f.useEffect(()=>G(P),[P]);function J({children:A}){return v&&!c?e.jsx(ie,{content:d,placement:"right",children:A}):A}return e.jsx("li",{ref:l,children:e.jsxs(J,{children:[e.jsxs("button",{id:`flowbite-sidebar-collapse-${M}`,onClick:()=>G(!c),title:d,type:"button",className:y(i.button,L),...V,children:[z&&e.jsx(z,{"aria-hidden":!0,"data-testid":"flowbite-sidebar-collapse-icon",className:y(i.icon.base,i.icon.open[c?"on":"off"])}),v?e.jsx("span",{className:i.label.title,children:d}):e.jsxs(e.Fragment,{children:[e.jsx("span",{"data-testid":"flowbite-sidebar-collapse-label",className:i.label.base,children:d}),S?S(i,c):e.jsx(C,{"aria-hidden":!0,className:y(i.label.icon.base,i.label.icon.open[c?"on":"off"])})]})]}),e.jsx("ul",{"aria-labelledby":`flowbite-sidebar-collapse-${M}`,hidden:!c,className:i.list,children:e.jsx(X.Provider,{value:{isInsideCollapse:!0},children:B})})]})})});k.displayName="SidebarCollapse";const $=f.forwardRef((a,l)=>{var d,C,S;const{theme:o,clearTheme:D,applyTheme:T,isCollapsed:v}=K(),s=H(),i=E([O.cta,(C=(d=s.theme)==null?void 0:d.sidebar)==null?void 0:C.cta,o==null?void 0:o.cta,a.theme],[n(s.clearTheme,"sidebar.cta"),n(D,"cta"),a.clearTheme],[n(s.applyTheme,"sidebar.cta"),n(T,"cta"),a.applyTheme]),{color:B="info",className:L,...z}=q(a,(S=s.props)==null?void 0:S.sidebarCTA);return e.jsx("div",{ref:l,"data-testid":"sidebar-cta",hidden:v,className:y(i.base,i.color[B],L),...z})});$.displayName="SidebarCTA";var Y=j("brand-shopee","IconBrandShopee",[["path",{d:"M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z",key:"svg-0"}],["path",{d:"M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4",key:"svg-1"}],["path",{d:"M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1",key:"svg-2"}]]),U=j("brand-trello","IconBrandTrello",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M7 7h3v10h-3z",key:"svg-1"}],["path",{d:"M14 7h3v6h-3z",key:"svg-2"}]]),de=j("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),I=j("inbox","IconInbox",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M4 13h3l3 3h4l3 -3h3",key:"svg-1"}]]),te=j("world-upload","IconWorldUpload",[["path",{d:"M21 12a9 9 0 1 0 -9 9",key:"svg-0"}],["path",{d:"M3.6 9h16.8",key:"svg-1"}],["path",{d:"M3.6 15h8.4",key:"svg-2"}],["path",{d:"M11.578 3a17 17 0 0 0 0 18",key:"svg-3"}],["path",{d:"M12.5 3c1.719 2.755 2.5 5.876 2.5 9",key:"svg-4"}],["path",{d:"M18 21v-7m3 3l-3 -3l-3 3",key:"svg-5"}]]);const le=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(b,{"aria-label":"Sidebar with content separator example",children:e.jsxs(m,{children:[e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(U,{size:20}),children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(I,{size:20}),children:"Inbox"})]}),e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(te,{size:20}),children:"Upgrade to Pro"}),e.jsx(r,{href:"#",icon:()=>e.jsx(de,{size:20}),children:"Documentation"}),e.jsx(r,{href:"#",icon:()=>e.jsx(Z,{size:20}),children:"Help"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Sign Up"})]})]})})})}),ce=`import {\r
  IconLayoutDashboard,\r
  IconBrandTrello,\r
  IconInbox,\r
  IconWorldUpload,\r
  IconFileText,\r
  IconInfoSquareRounded,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';\r
\r
const ContentSeparatorCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with content separator example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconWorldUpload size={20} />}>\r
                Upgrade to Pro\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconFileText size={20} />}>\r
                Documentation\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInfoSquareRounded size={20} />}>\r
                Help\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default ContentSeparatorCode;\r
`,he=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Content Separator"}),e.jsx(le,{})]}),e.jsx(x,{children:ce})]})})}),be=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(b,{"aria-label":"Sidebar with multi-level dropdown example",children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Dashboard"}),e.jsxs(k,{icon:()=>e.jsx(Y,{size:20}),label:"E-commerce",renderChevronIcon:(a,l)=>{const o=l?_:ee;return e.jsx(o,{"aria-hidden":!0,className:Q(a.label.icon.open[l?"on":"off"])})},children:[e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Sales"}),e.jsx(r,{href:"#",children:"Refunds"}),e.jsx(r,{href:"#",children:"Shipping"}),e.jsx(r,{href:"#",children:"User"})]}),e.jsx(r,{href:"#",icon:()=>e.jsx(I,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(g,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(N,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Sign Up"})]})})})})}),me=`import {\r
  IconLayoutDashboard,\r
  IconBrandShopee,\r
  IconInbox,\r
  IconUser,\r
  IconShoppingBag,\r
  IconLogin2,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import {\r
  Sidebar,\r
  SidebarCollapse,\r
  SidebarItem,\r
  SidebarItemGroup,\r
  SidebarItems,\r
} from 'flowbite-react';\r
\r
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';\r
import { twMerge } from 'tailwind-merge';\r
\r
const CustomDropdownIconCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with multi-level dropdown example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarCollapse\r
                icon={() => <IconBrandShopee size={20} />}\r
                label="E-commerce"\r
                renderChevronIcon={(theme, open) => {\r
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;\r
\r
                  return (\r
                    <IconComponent\r
                      aria-hidden\r
                      className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}\r
                    />\r
                  );\r
                }}\r
              >\r
                <SidebarItem href="#">Products</SidebarItem>\r
                <SidebarItem href="#">Sales</SidebarItem>\r
                <SidebarItem href="#">Refunds</SidebarItem>\r
                <SidebarItem href="#">Shipping</SidebarItem>\r
                <SidebarItem href="#">User</SidebarItem>\r
              </SidebarCollapse>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default CustomDropdownIconCode;\r
`,pe=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Custom Dropdown Icon"}),e.jsx(be,{})]}),e.jsx(x,{children:me})]})})}),xe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(b,{"aria-label":"Default sidebar example",children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(U,{size:20}),label:"Pro",labelColor:"dark",children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(I,{size:20}),label:"3",children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(g,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(N,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Sign Up"})]})})})})}),Ie=`import {\r
  IconBrandTrello,\r
  IconInbox,\r
  IconLayoutDashboard,\r
  IconLogin2,\r
  IconShoppingBag,\r
  IconUser,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';\r
\r
const DefaultSidebarCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Default sidebar example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem\r
                href="#"\r
                icon={() => <IconBrandTrello size={20} />}\r
                label="Pro"\r
                labelColor="dark"\r
              >\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />} label="3">\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultSidebarCode;\r
`,Se=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Sidebar"}),e.jsx(xe,{})]}),e.jsx(x,{children:Ie})]})})}),fe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(b,{"aria-label":"Sidebar with multi-level dropdown example",children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Dashboard"}),e.jsxs(k,{icon:()=>e.jsx(Y,{size:20}),label:"E-commerce",children:[e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Sales"}),e.jsx(r,{href:"#",children:"Refunds"}),e.jsx(r,{href:"#",children:"Shipping"})]}),e.jsx(r,{href:"#",icon:()=>e.jsx(I,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(g,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(N,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Sign Up"})]})})})})}),ue=`import {\r
  IconLayoutDashboard,\r
  IconBrandShopee,\r
  IconInbox,\r
  IconUser,\r
  IconShoppingBag,\r
  IconLogin2,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import {\r
  Sidebar,\r
  SidebarCollapse,\r
  SidebarItem,\r
  SidebarItemGroup,\r
  SidebarItems,\r
} from 'flowbite-react';\r
\r
const MultilevelDropdownCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with multi-level dropdown example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarCollapse icon={() => <IconBrandShopee size={20} />} label="E-commerce">\r
                <SidebarItem href="#">Products</SidebarItem>\r
                <SidebarItem href="#">Sales</SidebarItem>\r
                <SidebarItem href="#">Refunds</SidebarItem>\r
                <SidebarItem href="#">Shipping</SidebarItem>\r
              </SidebarCollapse>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default MultilevelDropdownCode;\r
`,je=()=>e.jsx("div",{children:e.jsxs(h,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Multi-level dropdown"}),e.jsx(fe,{})]}),e.jsx(x,{children:ue})]})}),ge=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(b,{"aria-label":"Sidebar with call to action button example",children:[e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(U,{size:20}),children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(I,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(g,{size:20}),children:"Users"})]})}),e.jsxs($,{children:[e.jsxs("div",{className:"mb-3 flex items-center",children:[e.jsx(ae,{color:"warning",children:"Beta"}),e.jsx("button",{"aria-label":"Close",className:"-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",type:"button",children:e.jsx("svg",{"aria-hidden":!0,className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"mb-3 text-sm text-cyan-900 dark:text-gray-400",children:"Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile."}),e.jsx("a",{className:"text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300",href:"#",children:"Turn new navigation off"})]})]})})}),ve=`import { IconLayoutDashboard, IconBrandTrello, IconInbox, IconUser } from '@tabler/icons-react';\r
import {\r
  Sidebar,\r
  Badge,\r
  SidebarCTA,\r
  SidebarItem,\r
  SidebarItemGroup,\r
  SidebarItems,\r
} from 'flowbite-react';\r
\r
const SidebarWithButtonCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with call to action button example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
          <SidebarCTA>\r
            <div className="mb-3 flex items-center">\r
              <Badge color="warning">Beta</Badge>\r
              <button\r
                aria-label="Close"\r
                className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"\r
                type="button"\r
              >\r
                <svg\r
                  aria-hidden\r
                  className="h-4 w-4"\r
                  fill="currentColor"\r
                  viewBox="0 0 20 20"\r
                  xmlns="http://www.w3.org/2000/svg"\r
                >\r
                  <path\r
                    fillRule="evenodd"\r
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"\r
                    clipRule="evenodd"\r
                  />\r
                </svg>\r
              </button>\r
            </div>\r
            <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">\r
              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for\r
              a limited time in your profile.\r
            </div>\r
            <a\r
              className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"\r
              href="#"\r
            >\r
              Turn new navigation off\r
            </a>\r
          </SidebarCTA>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default SidebarWithButtonCode;\r
`,ze=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Sidebar with button"}),e.jsx(ge,{})]}),e.jsx(x,{children:ve})]})})}),Ce=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(b,{"aria-label":"Sidebar with logo branding example",children:[e.jsx("div",{className:"pb-5",children:e.jsx(oe,{})}),e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(U,{size:20}),children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(I,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(g,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(N,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Sign Up"})]})})]})})}),ye=`import {\r
  IconLayoutDashboard,\r
  IconBrandTrello,\r
  IconInbox,\r
  IconUser,\r
  IconShoppingBag,\r
  IconLogin2,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const SidebarWithLogoCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with logo branding example">\r
          <div className="pb-5">\r
            <FullLogo />\r
          </div>\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default SidebarWithLogoCode;\r
`,we=()=>e.jsx("div",{children:e.jsxs(h,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Sidebar with logo"}),e.jsx(Ce,{})]}),e.jsx(x,{children:ye})]})}),Ne=[{to:"/",title:"Home"},{title:"Sidebar"}],Ue=[{id:"1",prop:"href",description:"The URL to navigate to when the item is clicked.",type:"#",default:"-"},{id:"2",prop:"icon",description:"The icon to display alongside the item text.",type:'"HiChartPie" | "HiViewBoards"',default:"-"},{id:"3",prop:"label",description:"The label to display as a badge on the item.",type:'"Pro"',default:"-"},{id:"4",prop:"labelColor",description:"The background color of the label badge.",type:'"dark"',default:"default"}],or=()=>e.jsxs(e.Fragment,{children:[e.jsx(se,{title:"Sidebar",items:Ne}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Se,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(je,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(pe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(he,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ze,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(we,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ne,{allApis:Ue,componentName:"Sidebar"})})]})]});export{or as default};
