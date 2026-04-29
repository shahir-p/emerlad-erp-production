import{j as e}from"./index-CfGLtstz.js";import{C as r}from"./CardBox-DyySzG8n.js";import{M as a}from"./textarea-C6y2TsKk.js";import{C as t}from"./CodeDialog-MEd2hOPr.js";import{M as n}from"./description-D8VhVtbs.js";import{W as s}from"./field-naNkeukv.js";import{Z as i}from"./label-BUMi_y51.js";import{B as o}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./useFocusRing-Dysd-fso.js";import"./use-slot-BBOf4H17.js";import"./disabled-u174kIKb.js";import"./render-CZr0IE3h.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./use-sync-refs-suQn1iCl.js";import"./hidden-BE5boBKY.js";import"./dom-BlW_0b_t.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const l=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(a,{name:"description",className:"ui-form-control rounded-md",rows:6})})}),c=`import { Textarea } from "@headlessui/react";\r
\r
const BasicTextareacode = () => {\r
    return (\r
        <>\r
        <div>\r
            <Textarea\r
          name="description"\r
          className="ui-form-control rounded-md"\r
          rows={6}\r
        ></Textarea>\r
        </div>\r
        </>\r
    )\r
\r
}\r
export default BasicTextareacode;`,m=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Basic Textarea"}),e.jsx(l,{})]}),e.jsx(t,{children:c})]})})}),x=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(s,{disabled:!0,children:[e.jsx(i,{className:"text-ld mb-1 block font-medium data-disabled:opacity-50",children:"Type Here"}),e.jsx(n,{className:"text-bodytext text-xs mb-2 data-disabled:opacity-50",children:"Add any extra information about your event here."}),e.jsx(a,{name:"description",className:"ui-form-control rounded-md data-disabled:bg-gray-100 dark:data-disabled:bg-dark",rows:6})]})})}),p=`import { Description, Field, Label, Textarea } from '@headlessui/react';\r
\r
const DisableTextAreaCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Field disabled>\r
          <Label className="text-ld mb-1 block font-medium data-disabled:opacity-50">\r
            Type Here\r
          </Label>\r
          <Description className="text-bodytext text-xs mb-2 data-disabled:opacity-50">\r
            Add any extra information about your event here.\r
          </Description>\r
          <Textarea\r
            name="description"\r
            className="ui-form-control rounded-md data-disabled:bg-gray-100 dark:data-disabled:bg-dark"\r
            rows={6}\r
          ></Textarea>\r
        </Field>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DisableTextAreaCode;\r
`,h=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Disabled Textarea"}),e.jsx(x,{})]}),e.jsx(t,{children:p})]})})}),b=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(s,{children:[e.jsx(i,{className:"text-ld mb-1 block font-medium",children:"Type Here"}),e.jsx(n,{className:"text-bodytext text-xs mb-2",children:"Add any extra information about your event here."}),e.jsx(a,{name:"description",className:"ui-form-control rounded-md",rows:6})]})})}),j=`import { Description, Field, Label, Textarea } from "@headlessui/react";\r
\r
const WithDescriptionTextarea = () => {\r
    return (\r
        <>\r
        <div>\r
        <Field>\r
          <Label className="text-ld mb-1 block font-medium">Type Here</Label>\r
          <Description className="text-bodytext text-xs mb-2">\r
            Add any extra information about your event here.\r
          </Description>\r
          <Textarea\r
            name="description"\r
            className="ui-form-control rounded-md"\r
            rows={6}\r
          ></Textarea>\r
        </Field>\r
        </div>\r
        </>\r
    )\r
}\r
export default WithDescriptionTextarea`,u=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Discription With Textarea"}),e.jsx(b,{})]}),e.jsx(t,{children:j})]})})}),T=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(s,{children:[e.jsx(i,{className:"text-ld mb-2 block font-medium",children:"Description"}),e.jsx(a,{name:"description",className:"ui-form-control rounded-md",rows:4})]})})}),f=`import { Field, Label, Textarea } from "@headlessui/react";\r
\r
\r
const WithLabelTextarea = () => {\r
    return (\r
        <>\r
        <div>\r
            <Field>\r
          <Label className="text-ld mb-2 block font-medium">Description</Label>\r
          <Textarea\r
            name="description"\r
            className="ui-form-control rounded-md"\r
            rows={4}\r
          ></Textarea>\r
        </Field>\r
        </div>\r
        </>\r
    )\r
}\r
\r
export default WithLabelTextarea;`,N=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Label With Textarea"}),e.jsx(T,{})]}),e.jsx(t,{children:f})]})})}),X=()=>{const d=[{to:"/",title:"Home"},{title:"Textarea"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Textarea",items:d}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(u,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(h,{})})]})]})};export{X as default};
