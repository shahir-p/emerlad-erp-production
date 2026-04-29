import{j as e,R as u,an as h}from"./index-CfGLtstz.js";import{C as l}from"./CodeDialog-MEd2hOPr.js";import{C as n}from"./CardBox-DyySzG8n.js";import{I as r}from"./input-o0xe4Dnp.js";import{L as t}from"./label-BF96s-ib.js";import{B as d}from"./button-D0w4Yy34.js";import{I as m,Q as j,a as o,b as s,c as p}from"./input-otp-CDKkz5CB.js";import{T as x}from"./textarea-DRS4Zjr5.js";import{t as f,o as b,s as v}from"./types-D-fqUu_v.js";import{a as I}from"./index.esm-CeSRjsrT.js";import{F as N,a as g,b as y,c as T,d as F,e as L,f as w}from"./form-VC1AJhLe.js";import{B as C}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-DcfOEh4u.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const S=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsx(r,{type:"text",placeholder:"Name"}),e.jsx(r,{type:"text",placeholder:"Comapny"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"})]})}),O=`import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
\r
\r
const SimpleInputcode = () => {\r
  return (\r
    <>\r
       <div className="flex flex-col gap-5 mt-4">\r
        <Input type="text" placeholder="Name" />\r
        <Input type="text" placeholder="Comapny" />\r
        <Input type="email" placeholder="Email" />\r
        <Input type="password" placeholder="Password" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default SimpleInputcode`,P=()=>e.jsx(n,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"General Input"}),e.jsx(S,{})]}),e.jsx(l,{children:O})]})}),D=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(r,{type:"text"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"email",children:"Email"}),e.jsx(r,{type:"email"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"password",children:"Password"}),e.jsx(r,{type:"password"})]})]})}),B=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
\r
const InputLabelCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-5 mt-4">\r
        <div>\r
          <Label htmlFor="name">Name</Label>\r
          <Input type="text" />\r
        </div>\r
        <div>\r
          <Label htmlFor="email">Email</Label>\r
          <Input type="email" />\r
        </div>\r
        <div>\r
          <Label htmlFor="password">Password</Label>\r
          <Input type="password" />\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default InputLabelCode`,E=()=>e.jsx(n,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Input With Label"}),e.jsx(D,{})]}),e.jsx(l,{children:B})]})}),W=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(r,{type:"text"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"email",children:"Email"}),e.jsx(r,{type:"email"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"password",children:"Password"}),e.jsx(r,{type:"password"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(d,{children:"Submit"}),e.jsx(d,{variant:"error",children:"Cancel"})]})]})}),U=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
\r
const InputWithButtonCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-5 mt-4">\r
        <div>\r
          <Label htmlFor="name">Name</Label>\r
          <Input type="text" />\r
        </div>\r
        <div>\r
          <Label htmlFor="email">Email</Label>\r
          <Input type="email" />\r
        </div>\r
        <div>\r
          <Label htmlFor="password">Password</Label>\r
          <Input type="password" />\r
        </div>\r
        <div className="flex gap-3">\r
          <Button>Submit</Button>\r
          <Button variant={"error"}>Cancel</Button>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default InputWithButtonCode`,G=()=>e.jsx(n,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Input With Button"}),e.jsx(W,{})]}),e.jsx(l,{children:U})]})}),_=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx(m,{maxLength:6,pattern:j,children:e.jsxs(o,{children:[e.jsx(s,{index:0}),e.jsx(s,{index:1}),e.jsx(s,{index:2}),e.jsx(s,{index:3}),e.jsx(s,{index:4}),e.jsx(s,{index:5})]})})})}),R=`import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";\r
import {\r
  InputOTP,\r
  InputOTPGroup,\r
  InputOTPSlot,\r
} from "src/components/shadcn-ui/Default-Ui/input-otp";\r
\r
\r
const OtpInputCode = () => {\r
  return (\r
    <>\r
      <div className='mt-4'>\r
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} >\r
        <InputOTPGroup>\r
          <InputOTPSlot index={0} />\r
          <InputOTPSlot index={1} />\r
          <InputOTPSlot index={2} />\r
          <InputOTPSlot index={3} />\r
          <InputOTPSlot index={4} />\r
          <InputOTPSlot index={5} />\r
        </InputOTPGroup>\r
      </InputOTP>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default OtpInputCode`,Y=()=>e.jsx(n,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"OTP Input"}),e.jsx(_,{})]}),e.jsx(l,{children:R})]})}),$=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(r,{disabled:!0,type:"text"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"email",children:"Email"}),e.jsx(r,{disabled:!0,type:"email"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"password",children:"Password"}),e.jsx(r,{disabled:!0,type:"password"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(d,{disabled:!0,children:"Submit"}),e.jsx(d,{disabled:!0,variant:"error",children:"Cancel"})]})]})}),A=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
\r
const DisableInputWithButtonCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-5 mt-4">\r
        <div>\r
          <Label htmlFor="name">Name</Label>\r
          <Input disabled type="text" />\r
        </div>\r
        <div>\r
          <Label htmlFor="email">Email</Label>\r
          <Input disabled type="email" />\r
        </div>\r
        <div>\r
          <Label htmlFor="password">Password</Label>\r
          <Input disabled type="password" />\r
        </div>\r
        <div className="flex gap-3">\r
          <Button disabled>Submit</Button>\r
          <Button disabled variant={"error"}>\r
            Cancel\r
          </Button>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DisableInputWithButtonCode`,H=()=>e.jsx(n,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Input"}),e.jsx($,{})]}),e.jsx(l,{children:A})]})}),z=()=>e.jsxs(n,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"OTP Input Seprator"})}),e.jsxs(m,{maxLength:6,children:[e.jsxs(o,{children:[e.jsx(s,{index:0}),e.jsx(s,{index:1})]}),e.jsx(p,{}),e.jsxs(o,{children:[e.jsx(s,{index:2}),e.jsx(s,{index:3})]}),e.jsx(p,{}),e.jsxs(o,{children:[e.jsx(s,{index:4}),e.jsx(s,{index:5})]})]})]}),M=()=>{const[a,c]=u.useState("");return e.jsxs(n,{children:[e.jsx("div",{className:"flex items-center justify-between ",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Controlled OTP Input"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(m,{maxLength:6,value:a,onChange:i=>c(i),children:e.jsxs(o,{children:[e.jsx(s,{index:0}),e.jsx(s,{index:1}),e.jsx(s,{index:2}),e.jsx(s,{index:3}),e.jsx(s,{index:4}),e.jsx(s,{index:5})]})}),e.jsx("div",{className:" text-sm text-ld",children:a===""?e.jsx(e.Fragment,{children:"Enter your one-time password."}):e.jsxs(e.Fragment,{children:["You entered: ",a]})})]})]})},Q=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(x,{placeholder:"Type your message here.",className:"h-[130px] mt-4"})})}),X=`import { Textarea } from "src/components/shadcn-ui/Default-Ui/textarea";\r
\r
\r
const DafaultTextareacode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Textarea placeholder="Type your message here." className="h-[130px] mt-4" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DafaultTextareacode`,J=()=>e.jsx(n,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Textarea"}),e.jsx(Q,{})]}),e.jsx(l,{children:X})]})}),V=()=>e.jsxs(n,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Textarea with Label"})}),e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(t,{htmlFor:"message-2",children:"Your Message"}),e.jsx(x,{placeholder:"Type your message here.",id:"message-2"}),e.jsx("p",{className:"text-sm text-bodytext",children:"Your message will be copied to the support team."})]})]}),k=b({bio:v().min(10,{message:"Bio must be at least 10 characters."}).max(160,{message:"Bio must not be longer than 30 characters."})}),q=()=>{const a=I({resolver:f(k)});function c(i){h({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(i,null,2)})})})}return e.jsxs(n,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Form Textarea"})}),e.jsx(N,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(c),className:"w-full space-y-6",children:[e.jsx(g,{control:a.control,name:"bio",render:({field:i})=>e.jsxs(y,{children:[e.jsx(T,{children:"Bio"}),e.jsx(F,{children:e.jsx(x,{placeholder:"Tell us a little bit about yourself",className:"resize-none w-full h-[150px]",...i})}),e.jsxs(L,{children:["You can ",e.jsx("span",{children:"@mention"})," other users and organizations."]}),e.jsx(w,{})]})}),e.jsx(d,{type:"submit",children:"Submit"})]})})]})},K=[{to:"/",title:"Home"},{title:"Input"}],we=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Input",items:K}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(P,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(E,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(G,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(H,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(J,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(V,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(q,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Y,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(M,{})})]})]});export{we as default};
