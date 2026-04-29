import{j as e}from"./index-CfGLtstz.js";import{C as r}from"./CardBox-DyySzG8n.js";import{D as a}from"./Datepicker-F-H9lgIt.js";import{D as i,I as n}from"./DefaultDatepCode-CotJ9DXI.js";import{C as t}from"./CodeDialog-MEd2hOPr.js";import{B as s}from"./BreadcrumbComp-C5Rb_68r.js";import{C as o}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./TextInput-BUaS7eRH.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";import"./TableRow-BV2w-xRG.js";const l=`import { IconCalendarMonth } from "@tabler/icons-react";\r
import { Datepicker } from "flowbite-react";\r
import clsx from "clsx";\r
\r
interface DefaultDatepickerProps {\r
  value?: Date | string | null;\r
  onChange?: (value: Date | null) => void;\r
  minDate?: Date;\r
  maxDate?: Date;\r
  disabled?: boolean;\r
  placeholder?: string;\r
  className?: string;\r
  containerClassName?: string;\r
}\r
\r
const DefaultDatepCode: React.FC<DefaultDatepickerProps> = ({\r
  value,\r
  onChange,\r
  minDate,\r
  maxDate,\r
  disabled = false,\r
  placeholder,\r
  className = "form-control w-full",\r
  containerClassName = "w-full",\r
}) => {\r
  const normalizeValue = () => {\r
    if (!value) {\r
      return undefined;\r
    }\r
\r
    if (value instanceof Date) {\r
      return value;\r
    }\r
\r
    const parsed = new Date(value);\r
\r
    return isNaN(parsed.getTime()) ? undefined : parsed;\r
  };\r
\r
  const handleChange = (date: Date | Date[] | null) => {\r
    if (!onChange) {\r
      return;\r
    }\r
\r
    const nextDate = Array.isArray(date) ? date[0] ?? null : date;\r
    onChange(nextDate ?? null);\r
  };\r
\r
  return (\r
    <div className={clsx("max-w-sm", containerClassName)}>\r
      <Datepicker\r
        value={normalizeValue()}\r
        minDate={minDate}\r
        maxDate={maxDate}\r
        disabled={disabled}\r
        placeholder={placeholder}\r
        className={className}\r
        icon={() => <IconCalendarMonth size={20} />}\r
        onChange={onChange ? handleChange : undefined}\r
      />\r
    </div>\r
  );\r
};\r
\r
export type { DefaultDatepickerProps };\r
export default DefaultDatepCode;\r
`,c=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Datepicker"}),e.jsx(i,{})]}),e.jsx(t,{children:l})]})})}),d=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{autoHide:!1,className:"form-control",icon:()=>e.jsx(n,{size:20})})})}),m=`import { IconCalendarMonth } from '@tabler/icons-react';\r
import { Datepicker } from 'flowbite-react';\r
\r
const AutoHideCode = () => {\r
  return (\r
    <>\r
      <div className="max-w-sm">\r
        <Datepicker\r
          autoHide={false}\r
          className="form-control"\r
          icon={() => <IconCalendarMonth size={20} />}\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default AutoHideCode;\r
`,p=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Autohide"}),e.jsx(d,{})]}),e.jsx(t,{children:m})]})})}),x=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{minDate:new Date(2023,0,1),maxDate:new Date(2023,3,30),className:"form-control",icon:()=>e.jsx(n,{size:20})})})}),h=`import { IconCalendarMonth } from '@tabler/icons-react';\r
import { Datepicker } from 'flowbite-react';\r
\r
const LimitDatepCode = () => {\r
  return (\r
    <>\r
      <div className='max-w-sm'>\r
        <Datepicker\r
          minDate={new Date(2023, 0, 1)}\r
          maxDate={new Date(2023, 3, 30)}\r
          className="form-control"\r
          icon={() => <IconCalendarMonth size={20} />}\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default LimitDatepCode;\r
`,u=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Limit The Date"}),e.jsx(x,{})]}),e.jsx(t,{children:h})]})})}),f=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{language:"pt-BR",labelTodayButton:"Hoje",labelClearButton:"Limpar",className:"form-control",icon:()=>e.jsx(n,{size:20})})})}),j=`import { IconCalendarMonth } from '@tabler/icons-react';\r
import { Datepicker } from 'flowbite-react';\r
\r
const LocalizationDatepCode = () => {\r
  return (\r
    <>\r
      <div className="max-w-sm">\r
        <Datepicker\r
          language="pt-BR"\r
          labelTodayButton="Hoje"\r
          labelClearButton="Limpar"\r
          className="form-control"\r
          icon={() => <IconCalendarMonth size={20} />}\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default LocalizationDatepCode;\r
`,D=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Localization"}),e.jsx(f,{})]}),e.jsx(t,{children:j})]})})}),C=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{title:"DatePicker Title",className:"form-control",icon:()=>e.jsx(n,{size:20})})})}),N=`import { IconCalendarMonth } from '@tabler/icons-react';\r
import { Datepicker } from 'flowbite-react';\r
\r
const TitleDatePickerCode = () => {\r
  return (\r
    <>\r
      <div className="max-w-sm">\r
        <Datepicker\r
          title="DatePicker Title"\r
          className="form-control"\r
          icon={() => <IconCalendarMonth size={20} />}\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default TitleDatePickerCode;\r
`,v=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"With Title"}),e.jsx(C,{})]}),e.jsx(t,{children:N})]})})}),b=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{weekStart:1,className:"form-control",icon:()=>e.jsx(n,{size:20})})})}),k=`import { IconCalendarMonth } from '@tabler/icons-react';\r
import { Datepicker } from 'flowbite-react';\r
\r
const WeekStartCode = () => {\r
  return (\r
    <>\r
      <div className="max-w-sm">\r
        <Datepicker\r
          weekStart={1} // Monday\r
          className="form-control"\r
          icon={() => <IconCalendarMonth size={20} />}\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default WeekStartCode;\r
`,g=()=>e.jsx("div",{children:e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Week Start"}),e.jsx(b,{})]}),e.jsx(t,{children:k})]})})}),w=[{to:"/",title:"Home"},{title:"Datepicker"}],z=[{id:"1",prop:"language",description:"Sets the language of the datepicker.",type:"'pt-BR'",default:"-"},{id:"2",prop:"labelTodayButton",description:'Label for the "Today" button.',type:"'Hoje'",default:"-"},{id:"3",prop:"labelClearButton",description:'Label for the "Clear" button.',type:"'Limpar'",default:"-"},{id:"4",prop:"minDate",description:"The minimum selectable date.",type:"Date(2023, 0, 1)",default:"-"},{id:"5",prop:"maxDate",description:"The maximum selectable date.",type:"Date(2023, 3, 30)",default:"-"},{id:"6",prop:"weekStart",description:"Sets the first day of the week.",type:"0 | 1 | 2 | 3 | 4 | 5 | 6",default:"0"},{id:"7",prop:"autoHide",description:"Automatically hides the datepicker after selecting a date.",type:"boolean",default:"true"},{id:"8",prop:"title",description:"Sets the title of the datepicker.",type:"'Flowbite Datepicker'",default:"-"}],Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Datepicker",items:w}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(c,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(D,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(u,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(g,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(v,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(o,{allApis:z,componentName:"Datepicker"})})]})]});export{Z as default};
