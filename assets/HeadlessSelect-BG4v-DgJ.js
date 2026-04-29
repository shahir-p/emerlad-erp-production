import{j as e}from"./index-CfGLtstz.js";import{C as t}from"./CardBox-DyySzG8n.js";import{k as s}from"./select-Z6xK_abw.js";import{C as a}from"./CodeDialog-MEd2hOPr.js";import{M as n}from"./description-D8VhVtbs.js";import{W as l}from"./field-naNkeukv.js";import{Z as r}from"./label-BUMi_y51.js";import{B as o}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./useFocusRing-Dysd-fso.js";import"./use-active-press-BrBzUP4y.js";import"./owner-Dk1fjd6m.js";import"./render-CZr0IE3h.js";import"./use-slot-BBOf4H17.js";import"./disabled-u174kIKb.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./use-sync-refs-suQn1iCl.js";import"./hidden-BE5boBKY.js";import"./dom-BlW_0b_t.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const c=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control appearance-none rounded-md my-4",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})})}),d=`import { Select } from "@headlessui/react";\r
\r
const BasicSelectCode = () => {\r
  return (\r
    <>\r
      <div className="max-w-sm">\r
        <Select\r
          name="status"\r
          aria-label="Project status"\r
          className="ui-form-control appearance-none rounded-md my-4"\r
        >\r
          <option value="active">Active</option>\r
          <option value="paused">Paused</option>\r
          <option value="delayed">Delayed</option>\r
          <option value="canceled">Canceled</option>\r
        </Select>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default BasicSelectCode;\r
`,m=()=>e.jsx("div",{children:e.jsxs(t,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Basic Select"}),e.jsx(c,{})]}),e.jsx(a,{children:d})]})}),p=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{disabled:!0,children:[e.jsx(r,{className:"text-ld mb-1 block data-disabled:opacity-50",children:"Project status"}),e.jsx(n,{className:"mb-2 text-bodytext text-xs data-disabled:opacity-50",children:"This will be visible to clients on the project."}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md data-disabled:opacity-50",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})})}),x=`import { Description, Field, Label, Select } from "@headlessui/react";\r
\r
const DisabledSelectCode = () => {\r
    return (\r
        <>\r
        <div className="max-w-sm">\r
            <Field disabled>\r
          <Label className="text-ld mb-1 block data-disabled:opacity-50">\r
            Project status\r
          </Label>\r
          <Description className="mb-2 text-bodytext text-xs data-disabled:opacity-50">\r
            This will be visible to clients on the project.\r
          </Description>\r
          <Select\r
            name="status"\r
            aria-label="Project status"\r
            className="ui-form-control rounded-md data-disabled:opacity-50"\r
          >\r
            <option value="active">Active</option>\r
            <option value="paused">Paused</option>\r
            <option value="delayed">Delayed</option>\r
            <option value="canceled">Canceled</option>\r
          </Select>\r
        </Field>\r
        </div>\r
        </>\r
    )\r
}\r
\r
\r
export default DisabledSelectCode;`,u=()=>e.jsx("div",{children:e.jsx(t,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 mb-4 ",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disabeld Select"}),e.jsx(p,{})]}),e.jsx(a,{children:x})]})})}),j=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{children:[e.jsx(r,{className:"text-ld mb-1 block",children:"Project status"}),e.jsx(n,{className:"mb-2 text-bodytext text-xs",children:"This will be visible to clients on the project."}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})})}),h=`import { Description, Field, Label, Select } from "@headlessui/react";\r
const WithDescriptionSelectCode = () => {\r
    return (\r
        <>\r
        <div className="max-w-sm">\r
            <Field>\r
          <Label className="text-ld mb-1 block">Project status</Label>\r
          <Description className="mb-2 text-bodytext text-xs">This will be visible to clients on the project.</Description>\r
          <Select\r
            name="status"\r
            aria-label="Project status"\r
            className="ui-form-control rounded-md"\r
          >\r
            <option value="active">Active</option>\r
            <option value="paused">Paused</option>\r
            <option value="delayed">Delayed</option>\r
            <option value="canceled">Canceled</option>\r
          </Select>\r
        </Field>\r
        </div>\r
        </>\r
    )\r
}\r
\r
export default WithDescriptionSelectCode`,v=()=>e.jsx("div",{children:e.jsx(t,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 mb-4 ",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Descrioption Select"}),e.jsx(j,{})]}),e.jsx(a,{children:h})]})})}),b=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{children:[e.jsx(r,{className:"text-ld mb-2 block",children:"Project status"}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})})}),N=`import { Field, Label, Select } from "@headlessui/react";\r
\r
const WithLabelSelectCode = () => {\r
    return (\r
        <>\r
        <div className="max-w-sm">\r
        <Field>\r
                  <Label className="text-ld mb-2 block">Project status</Label>\r
                  <Select\r
                    name="status"\r
                    aria-label="Project status"\r
                    className="ui-form-control rounded-md"\r
                  >\r
                    <option value="active">Active</option>\r
                    <option value="paused">Paused</option>\r
                    <option value="delayed">Delayed</option>\r
                    <option value="canceled">Canceled</option>\r
                  </Select>\r
                </Field>\r
        </div>\r
        </>\r
    )\r
}\r
\r
export default WithLabelSelectCode;`,S=()=>e.jsx("div",{children:e.jsx(t,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 mb-4",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Label Select"}),e.jsx(b,{})]}),e.jsx(a,{children:N})]})})}),_=()=>{const i=[{to:"/",title:"Home"},{title:"Select"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Select",items:i}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(S,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(v,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(u,{})})]})]})};export{_ as default};
