import{j as r}from"./index-CfGLtstz.js";import{C as n}from"./CardBox-DyySzG8n.js";import{D as e}from"./Dropdown-dIur1JPq.js";import{D as o}from"./DropdownItem-DoX5Oosd.js";import{D as d}from"./DropdownHeader-ChlC_n8w.js";import{D as s}from"./DropdownDivider-CcBxYSeu.js";import{C as t}from"./CodeDialog-MEd2hOPr.js";import{q as i,r as l,s as p,t as a}from"./index-Dg52xdS1.js";import{B as m}from"./BreadcrumbComp-C5Rb_68r.js";import{C as c}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./chevron-down-icon-Cc3DmJkO.js";import"./chevron-left-icon-CHT4Q2s1.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Button-BBgTEsWM.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-uzeOI1Me.js";import"./Badge-CN-1CXXU.js";import"./TableRow-BV2w-xRG.js";const D=()=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[r.jsxs(e,{label:"Dropdown Button",dismissOnClick:!1,className:"flex-wrap",color:"primary",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Dropdown Button",color:"secondary",children:[r.jsxs(d,{children:[r.jsx("span",{className:"block text-sm",children:"Bonnie Green"}),r.jsx("span",{className:"block truncate text-sm font-medium",children:"bonnie@flowbite.com"})]}),r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(s,{}),r.jsx(o,{children:"Sign out"})]})]})}),w=`import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';\r
\r
const DropDownHeaderCode = () => {\r
  return (\r
    <>\r
      <div className='flex flex-wrap items-center gap-4'>\r
        <Dropdown\r
          label="Dropdown Button"\r
          dismissOnClick={false}\r
          className="flex-wrap"\r
          color="primary"\r
        >\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
\r
        <Dropdown label="Dropdown Button" color="secondary">\r
          <DropdownHeader>\r
            <span className="block text-sm">Bonnie Green</span>\r
            <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>\r
          </DropdownHeader>\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownDivider />\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DropDownHeaderCode;\r
`,h=()=>r.jsx(r.Fragment,{children:r.jsx(n,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Dropdown Header"}),r.jsx(D,{})]}),r.jsx(t,{children:w})]})})}),x=()=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsxs(e,{label:"Dropdown top",placement:"top",color:"primary",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Dropdown right",placement:"right",color:"secondary",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Dropdown bottom",placement:"bottom",color:"info",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Dropdown left",placement:"left",color:"success",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Dropdown left start",placement:"left-start",color:"error",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Dropdown right start",placement:"right-start",color:"dark",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]})]})}),g=`import { Dropdown, DropdownItem } from 'flowbite-react';\r
\r
const DropdownPlacementCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-wrap gap-4">\r
        <Dropdown label="Dropdown top" placement="top" color="primary">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
        <Dropdown label="Dropdown right" placement="right" color="secondary">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
        <Dropdown label="Dropdown bottom" placement="bottom" color="info">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
        <Dropdown label="Dropdown left" placement="left" color="success">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
        <Dropdown label="Dropdown left start" placement="left-start" color="error">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
        <Dropdown label="Dropdown right start" placement="right-start" color="dark">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DropdownPlacementCode;\r
`,j=()=>r.jsx("div",{children:r.jsx(n,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Placement Options"}),r.jsx(x,{})]}),r.jsx(t,{children:g})]})})}),I=()=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[r.jsxs(e,{label:"Small dropdown",size:"sm",color:"success",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]}),r.jsxs(e,{label:"Large dropdown",size:"lg",color:"error",children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]})]})}),b=`import { Dropdown, DropdownItem } from "flowbite-react";\r
\r
const DropdownSizesCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-wrap items-center gap-4">\r
        <Dropdown label="Small dropdown" size="sm" color="success">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
        <Dropdown label="Large dropdown" size="lg" color="error">\r
          <DropdownItem>Dashboard</DropdownItem>\r
          <DropdownItem>Settings</DropdownItem>\r
          <DropdownItem>Earnings</DropdownItem>\r
          <DropdownItem>Sign out</DropdownItem>\r
        </Dropdown>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DropdownSizesCode;\r
`,f=()=>r.jsx("div",{children:r.jsx(n,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Dropdown sizes"}),r.jsx(I,{})]}),r.jsx(t,{children:b})]})})}),u=()=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[r.jsxs(e,{label:"Dropdown",color:"info",children:[r.jsxs(d,{children:[r.jsx("span",{className:"block text-sm",children:"Bonnie Green"}),r.jsx("span",{className:"block truncate text-sm font-medium",children:"bonnie@flowbite.com"})]}),r.jsx(o,{icon:i,children:"Dashboard"}),r.jsx(o,{icon:l,children:"Settings"}),r.jsx(o,{icon:p,children:"Earnings"}),r.jsx(s,{}),r.jsx(o,{icon:a,children:"Sign out"})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Inline dropdown"}),r.jsxs(e,{label:"Dropdown",inline:!0,children:[r.jsx(o,{children:"Dashboard"}),r.jsx(o,{children:"Settings"}),r.jsx(o,{children:"Earnings"}),r.jsx(o,{children:"Sign out"})]})]})]})}),S=`import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';\r
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';\r
\r
const DropDownIconCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-wrap items-center gap-4">\r
        <Dropdown label="Dropdown" color="info">\r
          <DropdownHeader>\r
            <span className="block text-sm">Bonnie Green</span>\r
            <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>\r
          </DropdownHeader>\r
          <DropdownItem icon={HiViewGrid}>Dashboard</DropdownItem>\r
          <DropdownItem icon={HiCog}>Settings</DropdownItem>\r
          <DropdownItem icon={HiCurrencyDollar}>Earnings</DropdownItem>\r
          <DropdownDivider />\r
          <DropdownItem icon={HiLogout}>Sign out</DropdownItem>\r
        </Dropdown>\r
        <div>\r
          <h4 className="text-lg font-semibold">Inline dropdown</h4>\r
          <Dropdown label="Dropdown" inline>\r
            <DropdownItem>Dashboard</DropdownItem>\r
            <DropdownItem>Settings</DropdownItem>\r
            <DropdownItem>Earnings</DropdownItem>\r
            <DropdownItem>Sign out</DropdownItem>\r
          </Dropdown>\r
        </div>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DropDownIconCode;\r
`,N=()=>r.jsx(r.Fragment,{children:r.jsx(n,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Dropdown items with icon"}),r.jsx(u,{})]}),r.jsx(t,{children:S})]})})}),v=[{to:"/",title:"Home"},{title:"Dropdown"}],C=[{id:"1",prop:"label",description:"Sets the text label for the dropdown trigger.",type:"string",default:"-"},{id:"2",prop:"size",description:"Controls the size of the dropdown.",type:'"sm" | "md" | "lg"',default:'"md"'},{id:"3",prop:"placement",description:"Sets the placement of the dropdown relative to the trigger.",type:'"top" | "right" | "bottom" | "left"',default:'"bottom"'},{id:"4",prop:"inline",description:"Makes the dropdown appear inline with the trigger element.",type:"boolean",default:"false"}],nr=()=>r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Dropdown",items:v}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(h,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(N,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(f,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(j,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(c,{allApis:C,componentName:"Dropdown"})})]})]});export{nr as default};
