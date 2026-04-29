import{z,A as E,r as l,j as e}from"./index-CfGLtstz.js";import{C as a}from"./CardBox-DyySzG8n.js";import{u as W}from"./user-3-4cVCK635.js";import{e as J,F as Y}from"./floating-ui.react-Bp1bm6ZA.js";import{u as G,g as f,r as U}from"./resolve-theme-DSwo52RB.js";import{u as H,a as V,g as X}from"./use-floating-WjiIIaI9.js";import{B as s}from"./Button-BBgTEsWM.js";import{C as m}from"./CodeDialog-MEd2hOPr.js";import{G as $}from"./iconBase-uzeOI1Me.js";import{L as d}from"./Label-CQ8gGTpI.js";import{T as c}from"./TextInput-BUaS7eRH.js";import{C as K}from"./Checkbox--PCHNEyQ.js";import{B as Q}from"./BreadcrumbComp-C5Rb_68r.js";import{C as Z}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";import"./TableRow-BV2w-xRG.js";const _=z({base:"absolute z-20 inline-block w-max max-w-[100vw] rounded-lg border border-gray-200 bg-white shadow-sm outline-none dark:border-gray-600 dark:bg-gray-800",inner:"relative",content:"z-10 overflow-hidden rounded-[7px]",arrow:{base:"absolute z-0 h-2 w-2 rotate-45 border border-gray-200 bg-white mix-blend-lighten dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",placement:"-4px"}});function t(r){var u,b;const o=E(),n=G([_,(u=o.theme)==null?void 0:u.popover,r.theme],[f(o.clearTheme,"popover"),r.clearTheme],[f(o.applyTheme,"popover"),r.applyTheme]),{children:i,content:j,arrow:y=!0,trigger:N="click",initialOpen:w,open:k,onOpenChange:P,placement:C="bottom",...I}=U(r,(b=o.props)==null?void 0:b.popover),[B,F]=l.useState(!!w),h=l.useRef(null),x=k??B,A=H({open:x,placement:C,arrowRef:h,setOpen:P??F}),{floatingStyles:D,context:p,placement:L,middlewareData:{arrow:{x:O,y:R}={}},refs:T}=A,{getFloatingProps:q,getReferenceProps:g}=V({context:p,role:"dialog",trigger:N}),M=i.ref,v=J([p.refs.setReference,M]);if(!l.isValidElement(i))throw Error("Invalid target element");const S=l.useMemo(()=>l.cloneElement(i,g({ref:v,"data-testid":"flowbite-popover-target",...i==null?void 0:i.props})),[i,v,g]);return e.jsxs(e.Fragment,{children:[S,x&&e.jsx(Y,{context:p,modal:!0,children:e.jsx("div",{className:n.base,ref:T.setFloating,"data-testid":"flowbite-popover",...I,style:D,...q(),children:e.jsxs("div",{className:n.inner,children:[y&&e.jsx("div",{className:n.arrow.base,"data-testid":"flowbite-popover-arrow",ref:h,style:{top:R??" ",left:O??" ",right:" ",bottom:" ",[X({placement:L})]:n.arrow.placement},children:" "}),e.jsx("div",{className:n.content,children:j})]})})})]})}t.displayName="Popover";const ee=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"profile-popover",content:e.jsxs("div",{className:"w-64 p-3 ",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("a",{href:"#",children:e.jsx("img",{className:"h-10 w-10 rounded-full",src:W,alt:"Jese Leos"})}),e.jsx("div",{children:e.jsx("button",{type:"button",className:"rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-hidden focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600 ",children:"Follow"})})]}),e.jsx("p",{id:"profile-popover",className:"text-base font-semibold leading-none text-gray-900 dark:text-white",children:e.jsx("a",{href:"#",children:"Jese Leos"})}),e.jsx("p",{className:"mb-3 text-sm font-normal",children:e.jsx("a",{href:"#",className:"hover:underline",children:"@jeseleos"})}),e.jsxs("p",{className:"mb-4 text-sm",children:["Open-source contributor. Building"," ",e.jsx("a",{href:"#",className:"text-primary hover:underline dark:text-primary",children:"matdash IM"}),"."]}),e.jsxs("ul",{className:"flex text-sm",children:[e.jsx("li",{className:"me-2",children:e.jsxs("a",{href:"#",className:"hover:underline",children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"799"}),e.jsx("span",{children:"Following"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"#",className:"hover:underline",children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"3,758"}),e.jsx("span",{children:"Followers"})]})})]})]}),children:e.jsx(s,{color:"primary",children:"Company profile"})})})}),re=`import { Popover, Button } from 'flowbite-react';\r
import user3 from '/src/assets/images/profile/user-3.jpg';\r
\r
const CompanyProfileCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="profile-popover"\r
          content={\r
            <div className="w-64 p-3 ">\r
              <div className="mb-2 flex items-center justify-between">\r
                <a href="#">\r
                  <img className="h-10 w-10 rounded-full" src={user3} alt="Jese Leos" />\r
                </a>\r
                <div>\r
                  <button\r
                    type="button"\r
                    className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-hidden focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600 "\r
                  >\r
                    Follow\r
                  </button>\r
                </div>\r
              </div>\r
              <p\r
                id="profile-popover"\r
                className="text-base font-semibold leading-none text-gray-900 dark:text-white"\r
              >\r
                <a href="#">Jese Leos</a>\r
              </p>\r
              <p className="mb-3 text-sm font-normal">\r
                <a href="#" className="hover:underline">\r
                  @jeseleos\r
                </a>\r
              </p>\r
              <p className="mb-4 text-sm">\r
                Open-source contributor. Building{' '}\r
                <a href="#" className="text-primary hover:underline dark:text-primary">\r
                  matdash IM\r
                </a>\r
                .\r
              </p>\r
              <ul className="flex text-sm">\r
                <li className="me-2">\r
                  <a href="#" className="hover:underline">\r
                    <span className="font-semibold text-gray-900 dark:text-white">799</span>\r
                    <span>Following</span>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#" className="hover:underline">\r
                    <span className="font-semibold text-gray-900 dark:text-white">3,758</span>\r
                    <span>Followers</span>\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
          }\r
        >\r
          <Button color="primary">Company profile</Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default CompanyProfileCode;\r
`,se=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Company Profile"}),e.jsx(ee,{})]}),e.jsx(m,{children:re})]})})});function te(r){return $({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m11.998 17 7-8h-14z"},child:[]}]})(r)}const ae=()=>{const[r,o]=l.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"area-popover",open:r,onOpenChange:o,content:e.jsxs("div",{className:"flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400 ",children:[e.jsxs("div",{children:[e.jsx("h2",{id:"area-popover",className:"text-base text-gray-500",children:"Area (sqft)"}),e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"minsqft",children:"Minimum sqft"})}),e.jsx(c,{id:"minsqft",type:"number"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"maxsqft",children:"Maximum sqft"})}),e.jsx(c,{id:"maxsqft",type:"number"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{color:"gray",children:"Reset"}),e.jsx(s,{color:"primary",onClick:()=>o(!1),children:"Save"})]})]}),children:e.jsxs(s,{color:"primary",children:["Area ",e.jsx(te,{className:"ml-2"})]})})})})},oe=`import { useState } from 'react';\r
import { Popover, Label, TextInput, Button } from 'flowbite-react';\r
import { BiCaretDown } from 'react-icons/bi';\r
\r
const ControlledPopoverCode = () => {\r
  const [open, setOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="area-popover"\r
          open={open}\r
          onOpenChange={setOpen}\r
          content={\r
            <div className="flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400 ">\r
              <div>\r
                <h2 id="area-popover" className="text-base text-gray-500">\r
                  Area (sqft)\r
                </h2>\r
                <div className="mb-2 block">\r
                  <Label htmlFor="minsqft">Minimum sqft</Label>\r
                </div>\r
                <TextInput id="minsqft" type="number" />\r
              </div>\r
              <div>\r
                <div className="mb-2 block">\r
                  <Label htmlFor="maxsqft">Maximum sqft</Label>\r
                </div>\r
                <TextInput id="maxsqft" type="number" />\r
              </div>\r
              <div className="flex gap-2">\r
                <Button color="gray">Reset</Button>\r
                <Button color="primary" onClick={() => setOpen(false)}>\r
                  Save\r
                </Button>\r
              </div>\r
            </div>\r
          }\r
        >\r
          <Button color="primary">\r
            Area <BiCaretDown className="ml-2" />\r
          </Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default ControlledPopoverCode;\r
`,ie=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Controlled"}),e.jsx(ae,{})]}),e.jsx(m,{children:oe})]})})}),le=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"default-popover",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"default-popover",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]}),children:e.jsx(s,{color:"primary",children:"Default popover"})})})}),ne=`import { Popover, Button } from 'flowbite-react';\r
\r
const DefaultPopoverCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="default-popover"\r
          content={\r
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">\r
              <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">\r
                <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">\r
                  Popover title\r
                </h3>\r
              </div>\r
              <div className="px-3 py-2">\r
                <p>And here's some amazing content. It's very engaging. Right?</p>\r
              </div>\r
            </div>\r
          }\r
        >\r
          <Button color="primary">Default popover</Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultPopoverCode;\r
`,de=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default popover"}),e.jsx(le,{})]}),e.jsx(m,{children:ne})]})})}),ce=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"default-popover",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400 ",children:[e.jsx("div",{className:"border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"default-popover",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]}),arrow:!1,children:e.jsx(s,{color:"primary",children:"No Arrow Popover"})})})}),me=`import { Popover, Button } from 'flowbite-react';\r
\r
const DisableArrowCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="default-popover"\r
          content={\r
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400 ">\r
              <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">\r
                <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">\r
                  Popover title\r
                </h3>\r
              </div>\r
              <div className="px-3 py-2">\r
                <p>And here's some amazing content. It's very engaging. Right?</p>\r
              </div>\r
            </div>\r
          }\r
          arrow={false}\r
        >\r
          <Button color="primary">No Arrow Popover</Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DisableArrowCode;\r
`,pe=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Disable arrow"}),e.jsx(ce,{})]}),e.jsx(m,{children:me})]})})}),he=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Image popover"}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:["Due to its central geographic location in Southern Europe,"," ",e.jsx(t,{trigger:"hover",content:e.jsx("div",{className:"w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",children:e.jsxs("div",{className:"grid grid-cols-5",children:[e.jsx("div",{className:"col-span-3 p-3",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"About Italy"}),e.jsx("p",{children:"Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city."}),e.jsxs("a",{href:"#",className:"flex items-center font-medium text-primary hover:text-primary hover:underline dark:text-primary dark:hover:text-primary",children:["Read more"," ",e.jsx("svg",{className:"ms-1.5 h-2 w-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})})]})]})}),e.jsx("img",{src:"https://flowbite.com/docs/images/popovers/italy.png",className:"col-span-2 h-full",alt:"Italy map"})]})}),children:e.jsx("a",{href:"#",className:"text-primary underline hover:no-underline dark:text-primary",children:"Italy"})})," ","has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy Phoenicians and Carthaginians founded colonies mostly in insular Italy"]})]})}),xe=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Password Strength"}),e.jsxs("form",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"email1",children:"Your email"})}),e.jsx(c,{id:"email1",type:"email",placeholder:"info@matdash.com",className:"form-control",required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"password1",children:"Your password"})}),e.jsx(t,{trigger:"hover",content:e.jsxs("div",{className:"space-y-2 p-3",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Must have at least 6 characters"}),e.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"h-1 bg-orange-300 dark:bg-orange-400"}),e.jsx("div",{className:"h-1 bg-orange-300 dark:bg-orange-400"}),e.jsx("div",{className:"h-1 bg-gray-200 dark:bg-gray-600"}),e.jsx("div",{className:"h-1 bg-gray-200 dark:bg-gray-600"})]}),e.jsx("p",{children:"It’s better to have:"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"mb-1 flex items-center",children:[e.jsx("svg",{className:"me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})}),"Upper & lower case letters"]}),e.jsxs("li",{className:"mb-1 flex items-center",children:[e.jsx("svg",{className:"me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),"A symbol (#$&)"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),"A longer password (min. 12 chars.)"]})]})]}),children:e.jsx(c,{id:"password1",type:"password",required:!0,className:"form-control"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(K,{id:"remember",className:"checkbox"}),e.jsx(d,{htmlFor:"remember",children:"Remember me"})]}),e.jsx(s,{type:"submit",color:"primary",children:"Submit"})]})]})}),ge=()=>{const r=e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]});return e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Placement"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{content:r,placement:"top",children:e.jsx(s,{color:"primary",children:"Popover top"})}),e.jsx(t,{content:r,placement:"right",children:e.jsx(s,{color:"primary",children:"Popover right"})}),e.jsx(t,{content:r,placement:"bottom",children:e.jsx(s,{color:"primary",children:"Popover bottom"})}),e.jsx(t,{content:r,placement:"left",children:e.jsx(s,{color:"primary",children:"Popover left"})})]})]})})},ve=()=>{const r=e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]});return e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Trigger Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{content:r,trigger:"hover",children:e.jsx(s,{color:"primary",children:"Popover hover"})}),e.jsx(t,{content:r,trigger:"click",children:e.jsx(s,{color:"primary",children:"Popover click"})})]})]})})},ue=[{to:"/",title:"Home"},{title:"Popover"}],be=[{id:"1",prop:"content",description:"The content to display inside the popover.",type:'"<h3>PopOver Title</h3>"',default:"-"},{id:"2",prop:"trigger",description:"Specifies how the popover is triggered.",type:'"hover" | "click"',default:'"hover"'},{id:"3",prop:"placement",description:"Determines the position of the popover relative to the trigger element.",type:'"top" | "right" | "bottom" | "left"',default:'"bottom"'},{id:"4",prop:"arrow",description:"If true, displays an arrow pointing to the trigger element.",type:"boolean",default:"true"},{id:"5",prop:"open",description:"Controls the visibility of the popover. When true, the popover is visible.",type:"boolean",default:"false"},{id:"6",prop:"onOpenChange",description:"Callback function that is called when the popover visibility changes.",type:"setOpen",default:"-"}],Ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(Q,{title:"Popover",items:ue}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(de,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(se,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ie,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(pe,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(he,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(xe,{})}),e.jsx("div",{className:"lg:col-span-8 col-span-12",children:e.jsx(ge,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(ve,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Z,{allApis:be,componentName:"Popover"})})]})]});export{Ve as default};
