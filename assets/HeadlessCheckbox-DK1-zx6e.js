import{r as s,R as f,j as e,m as y}from"./index-CfGLtstz.js";import{C as h}from"./CardBox-DyySzG8n.js";import{$ as q,a as J}from"./useFocusRing-Dysd-fso.js";import{w as Q}from"./use-active-press-BrBzUP4y.js";import{l as ee,b as re}from"./use-default-value-CGeWVi8p.js";import{Y as ne,p as se,o as g,V as ae,K as te}from"./render-CZr0IE3h.js";import{n as ie}from"./use-slot-BBOf4H17.js";import{a as oe}from"./disabled-u174kIKb.js";import{g as ce,j as le,W as a}from"./field-naNkeukv.js";import{u as de,N as he,Z as t}from"./label-BUMi_y51.js";import{s as me}from"./bugs-BJ7ScNGK.js";import{w as xe,M as pe}from"./description-D8VhVtbs.js";import{o as w}from"./keyboard-C1Wiwm26.js";import{C as m}from"./CodeDialog-MEd2hOPr.js";import{B as be}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./owner-Dk1fjd6m.js";import"./hidden-BE5boBKY.js";import"./use-sync-refs-suQn1iCl.js";import"./dom-BlW_0b_t.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";let ue="span";function ke(r,n){let o=s.useId(),c=de(),x=oe(),{id:p=c||`headlessui-checkbox-${o}`,disabled:d=x||!1,autoFocus:v=!1,checked:W,defaultChecked:F,onChange:E,name:N,value:S,form:B,indeterminate:j=!1,tabIndex:M=0,...D}=r,b=ee(F),[k,u]=re(W,E,b??!1),T=he(),$=xe(),U=se(),[H,L]=s.useState(!1),C=g(()=>{L(!0),u==null||u(!k),U.nextFrame(()=>{L(!1)})}),P=g(l=>{if(me(l.currentTarget))return l.preventDefault();l.preventDefault(),C()}),R=g(l=>{l.key===w.Space?(l.preventDefault(),C()):l.key===w.Enter&&ce(l.currentTarget)}),A=g(l=>l.preventDefault()),{isFocusVisible:K,focusProps:z}=q({autoFocus:v}),{isHovered:I,hoverProps:V}=J({isDisabled:d}),{pressed:G,pressProps:O}=Q({disabled:d}),X=ae({ref:n,id:p,role:"checkbox","aria-checked":j?"mixed":k?"true":"false","aria-labelledby":T,"aria-describedby":$,"aria-disabled":d?!0:void 0,indeterminate:j?"true":void 0,tabIndex:d?void 0:M,onKeyUp:d?void 0:R,onKeyPress:d?void 0:A,onClick:d?void 0:P},z,V,O),Y=ie({checked:k,disabled:d,hover:I,focus:K,active:G,indeterminate:j,changing:H,autofocus:v}),Z=s.useCallback(()=>{if(b!==void 0)return u==null?void 0:u(b)},[u,b]),_=te();return f.createElement(f.Fragment,null,N!=null&&f.createElement(le,{disabled:d,data:{[N]:S||"on"},overrides:{type:"checkbox",checked:k},form:B,onReset:Z}),_({ourProps:X,theirProps:D,slot:Y,defaultTag:ue,name:"Checkbox"}))}let i=ne(ke);const ge=()=>{const[r,n]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{disabled:!0,className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"data-disabled:opacity-50",children:"Enable beta features"})]})}),e.jsx("div",{children:e.jsxs(a,{disabled:!0,className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"data-disabled:opacity-50",children:"Enable beta features"})]})})]})})})},je=`import { useState } from "react";\r
import { Checkbox, Field, Label } from "@headlessui/react";\r
\r
const DisableCheckCode = () => {\r
    const [enabled, setEnabled] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col gap-3">\r
          <div>\r
            <Field disabled className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="data-disabled:opacity-50">\r
                Enable beta features\r
              </Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field disabled className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="data-disabled:opacity-50">\r
                Enable beta features\r
              </Label>\r
            </Field>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisableCheckCode\r
 `,fe=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Checkbox"}),e.jsx(ge,{})]}),e.jsx(m,{children:je})]})})}),ve=()=>{const[r,n]=s.useState(!1),[o,c]=s.useState(!1),[x,p]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Render As a Div Elements"})}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{as:"div",checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{as:"div",checked:o,onChange:c,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{as:"div",checked:x,onChange:p,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})})]})]})})},Ne=()=>{const[r,n]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Render Props"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx("div",{children:e.jsxs(a,{className:"flex gap-3",children:[e.jsx(i,{checked:r,onChange:n,as:s.Fragment,children:({checked:o,disabled:c})=>e.jsx("span",{className:y("group block h-[18px] w-[18px] rounded border border-bordergray dark:border-darkborder bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary",!o&&"bg-white",o&&!c&&"bg-primary",o&&c&&"bg-gray-500",c&&"cursor-not-allowed opacity-50"),children:e.jsx("svg",{className:y("stroke-white",o?"opacity-100":"opacity-0"),viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})}),e.jsx(t,{children:"Each component also exposes information about its current state via render props that you can use to conditionally apply different styles or render different content."})]})})})]})})},Le=()=>{const[r,n]=s.useState(!1),[o,c]=s.useState(!1),[x,p]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:o,onChange:c,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:x,onChange:p,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})})]})})})},Ce=`import { Checkbox, Field, Label } from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const TransitionCheckCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  const [enabled1, setEnabled1] = useState(false);\r
  const [enabled2, setEnabled2] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col gap-3">\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 transition group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled1}\r
                onChange={setEnabled1}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 transition group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled2}\r
                onChange={setEnabled2}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 transition group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>\r
            </Field>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default TransitionCheckCode\r
`,ye=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Checkbox"}),e.jsx(Le,{})]}),e.jsx(m,{children:Ce})]})})}),we=()=>{const[r,n]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("form",{action:"/accounts",method:"post",children:[e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,name:"terms-of-service",className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Agree to terms and conditions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary justify-center",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error justify-center",children:"Cancel"})]})]})})})},We=`import { Checkbox, Field, Label } from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const UsingHtmlFormCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form action="/accounts" method="post">\r
          <Field className="flex items-center gap-3">\r
            <Checkbox\r
              checked={enabled}\r
              onChange={setEnabled}\r
              name="terms-of-service"\r
              className="group block ui-checkbox"\r
            >\r
              <svg\r
                className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                viewBox="0 0 14 14"\r
                fill="none"\r
                height={15}\r
              >\r
                <path\r
                  d="M3 8L6 11L11 3.5"\r
                  strokeWidth={2}\r
                  strokeLinecap="round"\r
                  strokeLinejoin="round"\r
                />\r
              </svg>\r
            </Checkbox>\r
            <Label className="cursor-pointer">Agree to terms and conditions</Label>\r
          </Field>\r
          <div className="flex gap-3 mt-4">\r
          <button className="ui-button bg-primary justify-center">Submit</button>\r
          <button className="ui-button bg-error justify-center">Cancel</button>\r
          </div>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default UsingHtmlFormCode\r
`,Fe=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With HTML Forms"}),e.jsx(we,{})]}),e.jsx(m,{children:We})]})})}),Ee=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("form",{action:"/accounts",method:"post",children:[e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{defaultChecked:!0,name:"terms-of-service",className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Agree to terms and conditions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary justify-center",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error justify-center",children:"Cancel"})]})]})})}),Se=`import { Checkbox, Field, Label } from "@headlessui/react";\r
\r
\r
const UsingUncontrolledCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form action="/accounts" method="post">\r
          <Field className="flex items-center gap-3">\r
            <Checkbox\r
              defaultChecked={true}\r
              name="terms-of-service"\r
              className="group block ui-checkbox"\r
            >\r
              <svg\r
                className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                viewBox="0 0 14 14"\r
                fill="none"\r
              >\r
                <path\r
                  d="M3 8L6 11L11 3.5"\r
                  strokeWidth={2}\r
                  strokeLinecap="round"\r
                  strokeLinejoin="round"\r
                />\r
              </svg>\r
            </Checkbox>\r
            <Label className="cursor-pointer">\r
              Agree to terms and conditions\r
            </Label>\r
          </Field>\r
          <div className="flex gap-3 mt-4">\r
            <button className="ui-button bg-primary justify-center">\r
              Submit\r
            </button>\r
            <button className="ui-button bg-error justify-center">\r
              Cancel\r
            </button>\r
          </div>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default UsingUncontrolledCode\r
`,Be=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Using as Uncontrolled "}),e.jsx(Ee,{})]}),e.jsx(m,{children:Se})]})})}),Me=()=>{const[r,n]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(a,{className:"flex gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("div",{children:[e.jsx(t,{children:"Enable beta features"}),e.jsx(pe,{children:"This will give you early access to new features we're developing."})]})]})})})},De=`import { Checkbox, Description, Field, Label } from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const WithDescriptionCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Field className="flex gap-3">\r
          <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
            <div>\r
              <Label>Enable beta features</Label>\r
              <Description>\r
                This will give you early access to new features we're\r
                developing.\r
              </Description>\r
            </div>\r
          </Field>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default WithDescriptionCode\r
`,Te=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Discription"}),e.jsx(Me,{})]}),e.jsx("div",{children:e.jsx(m,{children:De})})]})})}),$e=()=>{const[r,n]=s.useState(!1),[o,c]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Label"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:o,onChange:c,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Label"})]})})]})})})},Ue=`import  { useState } from "react";\r
import { Checkbox, Field, Label } from "@headlessui/react";\r
\r
\r
const WithLabelCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  const [enabled1, setEnabled1] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col gap-3">\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Label</Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled1}\r
                onChange={setEnabled1}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Label</Label>\r
            </Field>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default WithLabelCode;\r
`,He=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Checkbox Label"}),e.jsx($e,{})]}),e.jsx(m,{children:Ue})]})})}),Pe=[{to:"/",title:"Home"},{title:"Checkbox"}],jr=()=>e.jsxs("div",{children:[e.jsx(be,{title:"Checkbox",items:Pe}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(He,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Te,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Be,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ye,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(ve,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(Ne,{})})]})]});export{jr as default};
