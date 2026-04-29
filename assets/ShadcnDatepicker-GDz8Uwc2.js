import{j as r,r as c,U as d}from"./index-CfGLtstz.js";import{C as o}from"./CodeDialog-MEd2hOPr.js";import{C as s}from"./CardBox-DyySzG8n.js";import{B as p}from"./BasicDatepickerCode-2ufPo_uD.js";import{B as l}from"./button-D0w4Yy34.js";import{C as f}from"./calendar-DQRA4e2T.js";import{P as u,a as h,b as x}from"./popover-By5Orlo4.js";import{C as g}from"./calendar-Bvl2V4SX.js";import{b as D}from"./subDays-BmE-oJHo.js";import{f as a}from"./format-Dfe3mGxi.js";import{B as C}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-DcfOEh4u.js";import"./toDate-CiSa-RnC.js";import"./en-US-DL3e6NCk.js";import"./select-DitpGWTr.js";import"./index-BUrhjHvi.js";import"./Combination-Bax2mEof.js";import"./index-ClgtUdwt.js";import"./index-CqXTGHkZ.js";import"./index-Doepw-3X.js";import"./index-BIApPCBm.js";import"./use-debounce-Baw_-1K_.js";import"./chevron-down-DMrVyLls.js";import"./check-Dndqap4C.js";import"./chevron-up-tG72lBZK.js";import"./chevron-right-Beq2EQj9.js";import"./chevron-left-Cld8nl15.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const j=`import { format } from 'date-fns';\r
import { Calendar as CalendarIcon } from 'lucide-react';\r
\r
import { cn } from 'src/lib/utils';\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button';\r
import { Calendar } from 'src/components/shadcn-ui/Default-Ui/calendar';\r
import {\r
  Popover,\r
  PopoverContent,\r
  PopoverTrigger,\r
} from 'src/components/shadcn-ui/Default-Ui/popover';\r
import React from 'react';\r
\r
interface BasicDatepickerProps {\r
  date?: Date;\r
  onChange?: (date: Date | undefined) => void;\r
  placeholder?: string;\r
  className?: string;\r
}\r
\r
const BasicDatepickerCode = ({\r
  date: controlledDate,\r
  onChange,\r
  placeholder = "Pick a date",\r
  className,\r
}: BasicDatepickerProps) => {\r
  const [internalDate, setInternalDate] = React.useState<Date>();\r
  const [isOpen, setIsOpen] = React.useState(false);\r
  const [month, setMonth] = React.useState<Date | undefined>(controlledDate);\r
  \r
  const date = controlledDate !== undefined ? controlledDate : internalDate;\r
\r
  React.useEffect(() => {\r
    if (isOpen && date) {\r
      setMonth(date);\r
    }\r
  }, [isOpen, date]);\r
\r
  const setDate = (newDate: Date | undefined) => {\r
    if (onChange) {\r
      onChange(newDate);\r
    } else {\r
      setInternalDate(newDate);\r
    }\r
    setIsOpen(false);\r
  };\r
\r
  return (\r
    <>\r
      <div className={cn("flex flex-wrap items-center gap-3 w-full", className)}>\r
        <Popover open={isOpen} onOpenChange={setIsOpen}>\r
          <PopoverTrigger asChild>\r
            <Button\r
              variant={'outline'}\r
              className={cn(\r
                'w-full justify-start text-left font-normal group h-9 text-xs',\r
                !date && 'text-muted-foreground',\r
              )}\r
            >\r
              <CalendarIcon className="mr-2 h-4 w-4 text-primary group-hover:text-white" />\r
              {date ? (\r
                format(date, 'PPP')\r
              ) : (\r
                <span className="text-primary group-hover:text-white">{placeholder}</span>\r
              )}\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-auto p-0" align="start">\r
            <Calendar\r
              mode="single"\r
              selected={date}\r
              onSelect={setDate}\r
              month={month}\r
              onMonthChange={setMonth}\r
              initialFocus\r
            />\r
          </PopoverContent>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default BasicDatepickerCode;\r
\r
`,P=()=>r.jsx(s,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Basic Datepicker"}),r.jsx(p,{})]}),r.jsx(o,{children:j})]})}),v=`import { Calendar as CalendarIcon } from 'lucide-react';\r
\r
import { cn } from 'src/lib/utils';\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button';\r
import { Calendar } from 'src/components/shadcn-ui/Default-Ui/calendar';\r
import {\r
  Popover,\r
  PopoverContent,\r
  PopoverTrigger,\r
} from 'src/components/shadcn-ui/Default-Ui/popover';\r
import React from 'react';\r
import { addDays, format } from 'date-fns';\r
import { DateRange } from 'react-day-picker';\r
\r
const BasicDatepickerCode = () => {\r
  const [date, setDate] = React.useState<DateRange | undefined>({\r
    from: new Date(2022, 0, 20),\r
    to: addDays(new Date(2022, 0, 20), 20),\r
  });\r
  return (\r
    <>\r
      <div className=" flex flex-wrap items-center gap-3 max-w-sm">\r
        <Popover>\r
          <PopoverTrigger asChild>\r
            <Button\r
              id="date"\r
              variant={'outline'}\r
              className={cn(\r
                'w-full justify-start text-left font-normal',\r
                !date && 'text-muted-foreground',\r
              )}\r
            >\r
              <CalendarIcon />\r
              {date?.from ? (\r
                date.to ? (\r
                  <>\r
                    {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}\r
                  </>\r
                ) : (\r
                  format(date.from, 'LLL dd, y')\r
                )\r
              ) : (\r
                <span>Pick a date</span>\r
              )}\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-full p-0" align="start">\r
            <Calendar\r
              initialFocus\r
              mode="range"\r
              defaultMonth={date?.from}\r
              selected={date}\r
              onSelect={setDate}\r
              numberOfMonths={2}\r
            />\r
          </PopoverContent>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default BasicDatepickerCode;\r
`,N=({value:e,onChange:t,placeholder:n="Pick a date",className:i,numberOfMonths:m=2})=>r.jsxs(u,{children:[r.jsx(h,{asChild:!0,children:r.jsxs(l,{id:"date",variant:"outline",className:d("w-full justify-start text-left font-normal",!e&&"text-muted-foreground",i),children:[r.jsx(g,{className:"mr-2 h-4 w-4"}),e!=null&&e.from?e.to?r.jsxs(r.Fragment,{children:[a(e.from,"LLL dd, y")," - ",a(e.to,"LLL dd, y")]}):a(e.from,"LLL dd, y"):r.jsx("span",{children:n})]})}),r.jsx(x,{className:"w-auto p-0",align:"start",children:r.jsx(f,{initialFocus:!0,mode:"range",defaultMonth:e==null?void 0:e.from,selected:e,onSelect:t,numberOfMonths:m})})]}),B=()=>{const[e,t]=c.useState({from:new Date(2022,0,20),to:D(new Date(2022,0,20),20)});return r.jsx(s,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Date Range Picker"}),r.jsx("div",{className:"max-w-sm",children:r.jsx(N,{value:e,onChange:t})})]}),r.jsx(o,{children:v})]})})},w=[{to:"/",title:"Home"},{title:"Datepicker"}],ur=()=>r.jsxs(r.Fragment,{children:[r.jsx(C,{title:"Datepicker",items:w}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(P,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(B,{})})]})]});export{ur as default};
