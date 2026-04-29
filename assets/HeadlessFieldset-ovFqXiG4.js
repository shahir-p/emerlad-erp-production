import{r as x,R as m,j as e}from"./index-CfGLtstz.js";import{C as u}from"./CardBox-DyySzG8n.js";import{M as a}from"./description-D8VhVtbs.js";import{W as l}from"./field-naNkeukv.js";import{n as S}from"./dom-BlW_0b_t.js";import{n as I}from"./use-slot-BBOf4H17.js";import{y as M}from"./use-sync-refs-suQn1iCl.js";import{a as $,l as T}from"./disabled-u174kIKb.js";import{Y as h,K as E}from"./render-CZr0IE3h.js";import{V as W,Z as i}from"./label-BUMi_y51.js";import{X as f}from"./input-KszVzeKN.js";import{k as b}from"./select-Z6xK_abw.js";import{M as N}from"./textarea-C6y2TsKk.js";import{C as j}from"./CodeDialog-MEd2hOPr.js";import{B as A}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./hidden-BE5boBKY.js";import"./useFocusRing-Dysd-fso.js";import"./use-active-press-BrBzUP4y.js";import"./owner-Dk1fjd6m.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";function B(r){let t=typeof r=="string"?r:void 0,[o,d]=x.useState(t);return[t??o,x.useCallback(s=>{t||S(s)&&d(s.tagName.toLowerCase())},[t])]}let p="fieldset";function U(r,t){var o;let d=$(),{disabled:s=d||!1,...F}=r,[v,k]=B((o=r.as)!=null?o:p),n=M(t,k),[c,D]=W(),C=I({disabled:s}),w=v==="fieldset"?{ref:n,"aria-labelledby":c,disabled:s||void 0}:{ref:n,role:"group","aria-labelledby":c,"aria-disabled":s||void 0},L=E();return m.createElement(T,{value:s},m.createElement(D,null,L({ourProps:w,theirProps:F,slot:C,defaultTag:p,name:"Fieldset"})))}let g=h(U);function R(r,t){return m.createElement(i,{as:"div",ref:t,...r})}let y=h(R);const H=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(g,{className:"space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6",disabled:!0,children:[e.jsx(y,{className:"text-base/7 font-semibold dark:text-white text-dark",children:"Shipping Details"}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Street address"}),e.jsx(f,{className:"w-full ui-form-control rounded-md py-2 px-3 mt-3"})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Country"}),e.jsx(a,{className:"text-bodytext text-xs mt-1",children:"We currently only ship to North America."}),e.jsx("div",{className:"relative",children:e.jsxs(b,{className:"ui-form-control  rounded-md mt-3",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Delivery notes"}),e.jsx(a,{className:"text-xs text-bodytext mt-1",children:"If you have a tiger, we'd like to know about it."}),e.jsx(N,{className:"ui-form-control rounded-lg mt-3",rows:3})]})]})})}),P=`import {\r
  Description,\r
  Field,\r
  Fieldset,\r
  Input,\r
  Label,\r
  Legend,\r
  Select,\r
  Textarea,\r
} from "@headlessui/react";\r
\r
\r
const DisabledFieldsetCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6" disabled>\r
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">\r
            Shipping Details\r
          </Legend>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Street address\r
            </Label>\r
            <Input className="w-full ui-form-control rounded-md py-2 px-3 mt-3" />\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">Country</Label>\r
            <Description className="text-bodytext text-xs mt-1">\r
              We currently only ship to North America.\r
            </Description>\r
\r
            <div className="relative">\r
              <Select className="ui-form-control  rounded-md mt-3">\r
                <option>Canada</option>\r
                <option>Mexico</option>\r
                <option>United States</option>\r
              </Select>\r
            </div>\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Delivery notes\r
            </Label>\r
            <Description className="text-xs text-bodytext mt-1">\r
              If you have a tiger, we'd like to know about it.\r
            </Description>\r
            <Textarea className="ui-form-control rounded-lg mt-3" rows={3} />\r
          </Field>\r
        </Fieldset>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisabledFieldsetCode\r
`,K=()=>e.jsx("div",{children:e.jsx(u,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Fieldset Form"}),e.jsx(H,{})]}),e.jsx(j,{children:P})]})})}),V=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(g,{className:"space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6",children:[e.jsx(y,{className:"text-base/7 font-semibold dark:text-white text-dark",children:"Shipping Details"}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Street address"}),e.jsx(f,{className:"w-full ui-form-control rounded-md py-2 px-3 mt-3"})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Country"}),e.jsx(a,{className:"text-bodytext text-xs mt-1",children:"We currently only ship to North America."}),e.jsx("div",{className:"relative",children:e.jsxs(b,{className:"ui-form-control  rounded-md mt-3",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Delivery notes"}),e.jsx(a,{className:"text-xs text-bodytext mt-1",children:"If you have a tiger, we'd like to know about it."}),e.jsx(N,{className:"ui-form-control rounded-lg mt-3",rows:3})]})]})})}),X=`import {\r
  Description,\r
  Field,\r
  Fieldset,\r
  Input,\r
  Label,\r
  Legend,\r
  Select,\r
  Textarea,\r
} from "@headlessui/react";\r
\r
\r
const FieldsetCode = () => {\r
  return (\r
   <>\r
   <div className="mt-4">\r
    <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6">\r
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">\r
            Shipping Details\r
          </Legend>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Street address\r
            </Label>\r
            <Input className="w-full ui-form-control rounded-md py-2 px-3 mt-3" />\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">Country</Label>\r
            <Description className="text-bodytext text-xs mt-1">\r
              We currently only ship to North America.\r
            </Description>\r
\r
            <div className="relative">\r
              <Select className="ui-form-control  rounded-md mt-3">\r
                <option>Canada</option>\r
                <option>Mexico</option>\r
                <option>United States</option>\r
              </Select>\r
            </div>\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Delivery notes\r
            </Label>\r
            <Description className="text-xs text-bodytext mt-1">\r
              If you have a tiger, we'd like to know about it.\r
            </Description>\r
            <Textarea className="ui-form-control rounded-lg mt-3" rows={3} />\r
          </Field>\r
        </Fieldset>\r
   </div>\r
   </>\r
  )\r
}\r
\r
export default FieldsetCode\r
`,Y=()=>e.jsx("div",{children:e.jsx(u,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Fieldset Form"}),e.jsx(V,{})]}),e.jsx(j,{children:X})]})})}),Z=[{to:"/",title:"Home"},{title:"Fieldset"}],we=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Fieldset",items:Z}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Y,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(K,{})})]})]});export{we as default};
