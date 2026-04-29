import{r as f,A as R,j as e,B as v}from"./index-CfGLtstz.js";import{C as i}from"./CardBox-DyySzG8n.js";import{r as u,R as t,a as s}from"./RatingStar-CoWLi19f.js";import{u as N,g as o,r as b}from"./resolve-theme-DSwo52RB.js";import{C as d}from"./CodeDialog-MEd2hOPr.js";import{B as C}from"./BreadcrumbComp-C5Rb_68r.js";import{C as y}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";import"./TableRow-BV2w-xRG.js";const r=f.forwardRef((n,j)=>{var x,m;const l=R(),a=N([u,(x=l.theme)==null?void 0:x.ratingAdvanced,n.theme],[o(l.clearTheme,"ratingAdvanced"),n.clearTheme],[o(l.applyTheme,"ratingAdvanced"),n.applyTheme]),{children:g,className:h,percentFilled:c=0,...p}=b(n,(m=l.props)==null?void 0:m.ratingAdvanced);return e.jsxs("div",{ref:j,className:v(a.base,h),...p,children:[e.jsx("span",{className:a.label,children:g}),e.jsx("div",{className:a.progress.base,children:e.jsx("div",{className:a.progress.fill,"data-testid":"flowbite-rating-fill",style:{width:`${c}%`}})}),e.jsx("span",{className:a.progress.label,children:`${c}%`})]})});r.displayName="RatingAdvanced";const A=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(t,{className:"mb-2",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1}),e.jsx("p",{className:"ml-2 text-sm font-medium text-gray-500 dark:text-gray-400",children:"4.95 out of 5"})]}),e.jsx("p",{className:"mb-4 text-sm font-medium text-gray-500 dark:text-gray-400",children:"1,745 global ratings"}),e.jsx(r,{percentFilled:70,className:"mb-2",children:"5 star"}),e.jsx(r,{percentFilled:17,className:"mb-2",children:"4 star"}),e.jsx(r,{percentFilled:8,className:"mb-2",children:"3 star"}),e.jsx(r,{percentFilled:4,className:"mb-2",children:"2 star"}),e.jsx(r,{percentFilled:1,children:"1 star"})]})}),S=`import { Rating, RatingAdvanced, RatingStar } from 'flowbite-react';\r
\r
const AdvanceRatingCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating className="mb-2">\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar filled={false} />\r
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>\r
        </Rating>\r
        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">\r
          1,745 global ratings\r
        </p>\r
        <RatingAdvanced percentFilled={70} className="mb-2">\r
          5 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={17} className="mb-2">\r
          4 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={8} className="mb-2">\r
          3 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={4} className="mb-2">\r
          2 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default AdvanceRatingCode;\r
`,w=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Advanced Rating"}),e.jsx(A,{})]}),e.jsx(d,{children:S})]})})}),F=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]})})}),T=`import { Rating, RatingStar } from 'flowbite-react';\r
\r
const DefaultRatingCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating>\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar filled={false} />\r
        </Rating>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultRatingCode;\r
`,k=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default rating"}),e.jsx(F,{})]}),e.jsx(d,{children:T})]})})}),z=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(s,{}),e.jsx("p",{className:"ml-2 text-sm font-bold text-gray-900 dark:text-white",children:"4.95"}),e.jsx("span",{className:"mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white",children:"73 reviews"})]})})}),D=`import { Rating, RatingStar } from 'flowbite-react';\r
\r
const RatingCountCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating>\r
          <RatingStar />\r
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>\r
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />\r
          <a\r
            href="#"\r
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"\r
          >\r
            73 reviews\r
          </a>\r
        </Rating>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default RatingCountCode;\r
`,W=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Rating Count"}),e.jsx(z,{})]}),e.jsx(d,{children:D})]})})}),B=()=>e.jsx("div",{children:e.jsxs(i,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Star sizing"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"md",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]})]})]})}),P=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1}),e.jsx("p",{className:"ml-2 text-sm font-medium text-gray-500 dark:text-gray-400",children:"4.95 out of 5"})]})})}),E=`import { Rating, RatingStar } from 'flowbite-react';\r
\r
const WithTextRatingsCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating>\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar filled={false} />\r
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>\r
        </Rating>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default WithTextRatingsCode;\r
`,$=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Rating With Text"}),e.jsx(P,{})]}),e.jsx(d,{children:E})]})})}),H=[{to:"/",title:"Home"},{title:"Rating"}],I=[{id:"1",prop:"size",description:"Sets the size of the stars.",type:'"sm" | "md" | "lg"',default:'"sm"'},{id:"2",prop:"filled",description:"If true, the star is filled otherwise, it is empty.",type:"boolean",default:"true"},{id:"3",prop:"percentFilled",description:"The percentage of the rating bar that is filled.",type:"1 to 100",default:"0"}],de=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Rating",items:H}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(k,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx($,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(W,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(B,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(w,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(y,{allApis:I,componentName:"Rating"})})]})]});export{de as default};
