import{j as r,an as u}from"./index-CfGLtstz.js";import{C as l}from"./CodeDialog-MEd2hOPr.js";import{C as i}from"./CardBox-DyySzG8n.js";import{L as o}from"./label-BF96s-ib.js";import{R as c,a as e}from"./radio-group-DKDoJUvX.js";import{o as x,e as f,t as h}from"./types-D-fqUu_v.js";import{a as F}from"./index.esm-CeSRjsrT.js";import{B as j}from"./button-D0w4Yy34.js";import{F as N,a as v,b as n,c as s,d as m,f as b}from"./form-VC1AJhLe.js";import{B as g}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-DcfOEh4u.js";import"./index-B-YhyF13.js";import"./index-ClgtUdwt.js";import"./index-BUrhjHvi.js";import"./index-Doepw-3X.js";import"./index-BIApPCBm.js";import"./circle-DfNsaV2W.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const R=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsxs(c,{defaultValue:"comfortable",children:[r.jsxs("div",{className:"flex items-top space-x-2",children:[r.jsx(e,{value:"default",id:"r1"}),r.jsx(o,{htmlFor:"r1",className:"font-normal",children:"Default"})]}),r.jsxs("div",{className:"flex items-top space-x-2",children:[r.jsx(e,{value:"comfortable",id:"r2"}),r.jsx(o,{htmlFor:"r2",className:"font-normal",children:" Comfortable"})]}),r.jsxs("div",{className:"flex items-top space-x-2",children:[r.jsx(e,{value:"compact",id:"r3"}),r.jsx(o,{htmlFor:"r3",className:"font-normal",children:"Compact"})]}),r.jsxs("div",{className:"flex items-top space-x-2",children:[r.jsx(e,{value:"digital",id:"r4"}),r.jsx(o,{htmlFor:"r4",className:"font-normal",children:"Digital"})]}),r.jsxs("div",{className:"flex items-top space-x-2",children:[r.jsx(e,{value:"Enlarge",id:"r5"}),r.jsx(o,{htmlFor:"r5",className:"font-normal",children:"Enlarge"})]}),r.jsxs("div",{className:"flex items-top space-x-2",children:[r.jsx(e,{value:"Maximize",id:"r6"}),r.jsx(o,{htmlFor:"r6",className:"font-normal",children:"Maximize"})]})]})})}),C=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import {\r
  RadioGroup,\r
  RadioGroupItem,\r
} from "src/components/shadcn-ui/Default-Ui/radio-group";\r
\r
\r
const DefaultRadioCode = () => {\r
  return (\r
    <>\r
      <div className="mt-4">\r
        <RadioGroup defaultValue="comfortable">\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="default" id="r1" />\r
          <Label htmlFor="r1" className="font-normal">Default</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="comfortable" id="r2" />\r
          <Label htmlFor="r2" className="font-normal"> Comfortable</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="compact" id="r3" />\r
          <Label htmlFor="r3" className="font-normal">Compact</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="digital" id="r4" />\r
          <Label htmlFor="r4" className="font-normal">Digital</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="Enlarge" id="r5" />\r
          <Label htmlFor="r5" className="font-normal">Enlarge</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="Maximize" id="r6" />\r
          <Label htmlFor="r6" className="font-normal">Maximize</Label>\r
        </div>\r
      </RadioGroup>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DefaultRadioCode`,y=()=>r.jsx(i,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Default Radio Group"}),r.jsx(R,{})]}),r.jsx(l,{children:C})]})}),L=()=>{const d=x({type:f(["all","mentions","none"],{required_error:"You need to select a notification type."})}),t=F({resolver:h(d)});function p(a){u({title:"You submitted the following values:",description:r.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:r.jsx("code",{className:"text-white",children:JSON.stringify(a,null,2)})})})}return r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsx(N,{...t,children:r.jsxs("form",{onSubmit:t.handleSubmit(p),className:"space-y-6",children:[r.jsx(v,{control:t.control,name:"type",render:({field:a})=>r.jsxs(n,{className:"space-y-3",children:[r.jsx(s,{children:"Notify me about..."}),r.jsx(m,{children:r.jsxs(c,{onValueChange:a.onChange,defaultValue:a.value,className:"flex flex-col space-y-1",children:[r.jsxs(n,{className:"flex items-center space-x-3 space-y-0",children:[r.jsx(m,{children:r.jsx(e,{value:"all"})}),r.jsx(s,{className:"font-normal",children:"All new messages"})]}),r.jsxs(n,{className:"flex items-center space-x-3 space-y-0",children:[r.jsx(m,{children:r.jsx(e,{value:"mentions"})}),r.jsx(s,{className:"font-normal",children:"Direct messages and mentions"})]}),r.jsxs(n,{className:"flex items-center space-x-3 space-y-0",children:[r.jsx(m,{children:r.jsx(e,{value:"none"})}),r.jsx(s,{className:"font-normal",children:"Nothing"})]})]})}),r.jsx(b,{})]})}),r.jsx(j,{type:"submit",children:"Submit"})]})})})})},I=`import { zodResolver } from "@hookform/resolvers/zod";\r
import { useForm } from "react-hook-form";\r
import { z } from "zod";\r
\r
import { toast } from "src/hooks/use-toast";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import {\r
  Form,\r
  FormControl,\r
  FormField,\r
  FormItem,\r
  FormLabel,\r
  FormMessage,\r
} from "src/components/shadcn-ui/Default-Ui/form";\r
import {\r
  RadioGroup,\r
  RadioGroupItem,\r
} from "src/components/shadcn-ui/Default-Ui/radio-group";\r
\r
\r
const FormRadioCode = () => {\r
  const FormSchema = z.object({\r
    type: z.enum(["all", "mentions", "none"], {\r
      required_error: "You need to select a notification type.",\r
    }),\r
  });\r
  const form = useForm<z.infer<typeof FormSchema>>({\r
    resolver: zodResolver(FormSchema),\r
  });\r
   function onSubmit(data: z.infer<typeof FormSchema>) {\r
    toast({\r
      title: "You submitted the following values:",\r
      description: (\r
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">\r
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>\r
        </pre>\r
      ),\r
    });\r
  }\r
  return (\r
    <>\r
      <div>\r
        <Form {...form}>\r
        <form\r
          onSubmit={form.handleSubmit(onSubmit)}\r
          className="space-y-6"\r
        >\r
          <FormField\r
            control={form.control}\r
            name="type"\r
            render={({ field }) => (\r
              <FormItem className="space-y-3">\r
                <FormLabel>Notify me about...</FormLabel>\r
                <FormControl>\r
                  <RadioGroup\r
                    onValueChange={field.onChange}\r
                    defaultValue={field.value}\r
                    className="flex flex-col space-y-1"\r
                  >\r
                    <FormItem className="flex items-center space-x-3 space-y-0">\r
                      <FormControl>\r
                        <RadioGroupItem value="all" />\r
                      </FormControl>\r
                      <FormLabel className="font-normal">\r
                        All new messages\r
                      </FormLabel>\r
                    </FormItem>\r
                    <FormItem className="flex items-center space-x-3 space-y-0">\r
                      <FormControl>\r
                        <RadioGroupItem value="mentions" />\r
                      </FormControl>\r
                      <FormLabel className="font-normal">\r
                        Direct messages and mentions\r
                      </FormLabel>\r
                    </FormItem>\r
                    <FormItem className="flex items-center space-x-3 space-y-0">\r
                      <FormControl>\r
                        <RadioGroupItem value="none" />\r
                      </FormControl>\r
                      <FormLabel className="font-normal">Nothing</FormLabel>\r
                    </FormItem>\r
                  </RadioGroup>\r
                </FormControl>\r
                <FormMessage />\r
              </FormItem>\r
            )}\r
          />\r
          <Button type="submit">Submit</Button>\r
        </form>\r
      </Form>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default FormRadioCode`,G=()=>r.jsx(i,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Form Radio Group"}),r.jsx(L,{})]}),r.jsx(l,{children:I})]})}),D=[{to:"/",title:"Home"},{title:"Radio"}],lr=()=>r.jsxs(r.Fragment,{children:[r.jsx(g,{title:"Radio",items:D}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(y,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(G,{})})]})]});export{lr as default};
