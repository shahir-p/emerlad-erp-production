import{j as r}from"./index-CfGLtstz.js";import{C as m}from"./CardBox-DyySzG8n.js";import{j as a}from"./index-Dg52xdS1.js";import{a as t,b as e,B as d}from"./BreadcrumbComp-C5Rb_68r.js";import{C as o}from"./CodeDialog-MEd2hOPr.js";import{C as s}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./iconBase-uzeOI1Me.js";import"./iconify-C7ABZ5uA.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./TableRow-BV2w-xRG.js";const i=()=>r.jsx("div",{children:r.jsxs(t,{"aria-label":"Solid background breadcrumb example",className:"bg-muted px-5 py-3 dark:bg-darkmuted rounded-md",children:[r.jsx(e,{href:"#",icon:a,children:"Home"}),r.jsx(e,{href:"#",children:"Projects"}),r.jsx(e,{children:"matdash IM"})]})}),c=`import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';\r
import { HiHome } from 'react-icons/hi';\r
\r
const BbgColor = () => {\r
  return (\r
    <div>\r
      <Breadcrumb\r
        aria-label="Solid background breadcrumb example"\r
        className="bg-muted px-5 py-3 dark:bg-darkmuted rounded-md"\r
      >\r
        <BreadcrumbItem href="#" icon={HiHome}>\r
          Home\r
        </BreadcrumbItem>\r
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\r
        <BreadcrumbItem>matdash IM</BreadcrumbItem>\r
      </Breadcrumb>\r
    </div>\r
  );\r
};\r
\r
export default BbgColor;\r
`,l=()=>r.jsx("div",{children:r.jsx(m,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Background Color"}),r.jsx(i,{})]}),r.jsx(o,{children:c})]})})}),n=()=>r.jsx("div",{children:r.jsxs(t,{"aria-label":"Default breadcrumb example",className:"justify-start! w-auto!",children:[r.jsx(e,{href:"#",icon:a,children:"Home"}),r.jsx(e,{href:"#",children:"Projects"}),r.jsx(e,{children:"matdash IM"})]})}),u=`import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';\r
import { HiHome } from 'react-icons/hi';\r
\r
const BDefaultCode = () => {\r
  return (\r
    <div>\r
      <Breadcrumb aria-label="Default breadcrumb example" className="justify-start! w-auto!">\r
        <BreadcrumbItem href="#" icon={HiHome}>\r
          Home\r
        </BreadcrumbItem>\r
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\r
        <BreadcrumbItem>matdash IM</BreadcrumbItem>\r
      </Breadcrumb>\r
    </div>\r
  );\r
};\r
\r
export default BDefaultCode;\r
`,b=()=>r.jsx("div",{children:r.jsx(m,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Breadcrumb"}),r.jsx(n,{})]}),r.jsx(o,{children:u})]})})}),p=[{to:"/",title:"Home"},{title:"Breadcrumb"}],x=[{id:"1",prop:"icon",description:"An optional icon to display alongside the breadcrumb item.",type:"'HiHome'",default:"-"}],z=()=>r.jsxs(r.Fragment,{children:[r.jsx(d,{title:"Breadcrumb",items:p}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(b,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(l,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(s,{allApis:x,componentName:"Breadcrumb"})})]})]});export{z as default};
