import{r as C,A as w,j as e,B as x}from"./index-CfGLtstz.js";import{C as o}from"./CardBox-DyySzG8n.js";import{l as N,L as n}from"./ListGroup-BZSrkYkR.js";import{u as k,g as L,r as D}from"./resolve-theme-DSwo52RB.js";import{C as l}from"./CodeDialog-MEd2hOPr.js";import{k as H,u as P,v as y,m as B}from"./index-Dg52xdS1.js";import{B as M}from"./BreadcrumbComp-C5Rb_68r.js";import{C as A}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-uzeOI1Me.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";import"./TableRow-BV2w-xRG.js";const i=C.forwardRef((s,f)=>{var m,u,h;const r=w(),t=k([N.item,(u=(m=r.theme)==null?void 0:m.listGroup)==null?void 0:u.item,s.theme],[L(r.clearTheme,"listGroup.item"),s.clearTheme],[L(r.applyTheme,"listGroup.item"),s.applyTheme]),{active:j,children:G,className:I,href:d,icon:a,onClick:v,disabled:p,...g}=D(s,(h=r.props)==null?void 0:h.listGroupItem),c=typeof d<"u",b=c?"a":"button";return e.jsx("li",{ref:f,className:x(t.base,I),children:e.jsxs(b,{href:d,onClick:v,type:c?void 0:"button",disabled:p,className:x(t.link.active[j?"on":"off"],t.link.disabled[p?"on":"off"],t.link.base,t.link.href[c?"on":"off"]),...g,children:[a&&e.jsx(a,{"aria-hidden":!0,"data-testid":"flowbite-list-group-item-icon",className:t.link.icon}),G]})})});i.displayName="ListGroupItem";const S=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{children:"Profile"}),e.jsx(i,{children:"Settings"}),e.jsx(i,{children:"Messages"}),e.jsx(i,{disabled:!0,children:"Download"})]})}),T=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
\r
const DefaultListcode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem>Profile</ListGroupItem>\r
        <ListGroupItem>Settings</ListGroupItem>\r
        <ListGroupItem>Messages</ListGroupItem>\r
        <ListGroupItem disabled>Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default DefaultListcode;\r
`,U=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default list group"}),e.jsx(S,{})]}),e.jsx(l,{children:T})]})})}),R=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{href:"#",active:!0,children:"Profile"}),e.jsx(i,{href:"#",children:"Settings"}),e.jsx(i,{href:"#",children:"Messages"}),e.jsx(i,{href:"#",children:"Download"})]})}),O=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
\r
const LinkListCode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem href="#" active>\r
          Profile\r
        </ListGroupItem>\r
        <ListGroupItem href="#">Settings</ListGroupItem>\r
        <ListGroupItem href="#">Messages</ListGroupItem>\r
        <ListGroupItem href="#">Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default LinkListCode;\r
`,E=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"List items as links"}),e.jsx(R,{})]}),e.jsx(l,{children:O})]})})}),F=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{onClick:()=>alert("Profile clicked!"),active:!0,children:"Profile"}),e.jsx(i,{children:"Settings"}),e.jsx(i,{children:"Messages"}),e.jsx(i,{children:"Download"})]})}),q=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
\r
const ListButtonCode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem onClick={() => alert('Profile clicked!')} active>\r
          Profile\r
        </ListGroupItem>\r
        <ListGroupItem>Settings</ListGroupItem>\r
        <ListGroupItem>Messages</ListGroupItem>\r
        <ListGroupItem>Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default ListButtonCode;\r
`,z=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"List group with buttons"}),e.jsx(F,{})]}),e.jsx(l,{children:q})]})})}),J=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{icon:H,active:!0,children:"Profile"}),e.jsx(i,{icon:P,children:"Settings"}),e.jsx(i,{icon:y,children:"Messages"}),e.jsx(i,{icon:B,children:"Download"})]})}),K=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';\r
\r
const ListIconCode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem icon={HiUserCircle} active>\r
          Profile\r
        </ListGroupItem>\r
        <ListGroupItem icon={HiOutlineAdjustments}>Settings</ListGroupItem>\r
        <ListGroupItem icon={HiInbox}>Messages</ListGroupItem>\r
        <ListGroupItem icon={HiCloudDownload}>Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default ListIconCode;\r
`,Q=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"List group with icons"}),e.jsx(J,{})]}),e.jsx(l,{children:K})]})})}),V=[{to:"/",title:"Home"},{title:"List Group"}],W=[{id:"1",prop:"href",description:"The URL to link to for this list group item.",type:"'#'",default:"-"},{id:"2",prop:"active",description:"Indicates whether the list group item is active.",type:"boolean",default:"false"},{id:"3",prop:"disabled",description:"Indicates whether the list group item is disabled.",type:"boolean",default:"false"},{id:"4",prop:"onClick",description:"Callback function triggered when the list group item is clicked.",type:`'() => alert("Profile clicked!")'`,default:"-"},{id:"5",prop:"icon",description:"An optional icon to display alongside the list group item.",type:"'HiUserCircle' | 'HiInbox'",default:"-"}],Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"List Group",items:V}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(U,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(E,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Q,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(A,{allApis:W,componentName:"List Group"})})]})]});export{Ge as default};
