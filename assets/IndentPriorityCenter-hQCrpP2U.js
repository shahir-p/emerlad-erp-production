import{R as j,r as u,j as e}from"./index-CfGLtstz.js";import{P as R}from"./PageTitle-BJHgJjhZ.js";import{B as T}from"./Breadcrumbs-BTIFEsoM.js";import{T as M}from"./TitleIconCard-BWvk0rXO.js";import{I as p}from"./iconify-C7ABZ5uA.js";import{u as E,f as b,c as Y,a as z,g as H}from"./index-CLSM1k9N.js";import{u as B,a as g,D as A,c as F,S as q,v as L,K as U,T as V,M as $,d as K,b as O,C as X}from"./sortable.esm-CsAbqs1p.js";import"./useSidebar-DWKU__XO.js";import"./useQuery-CB4_rBB6.js";import"./apiService-Cm6WsE_Q.js";import"./axiosConfig-DTy01EnB.js";import"./breadcrumb-D0rXdgBl.js";import"./index-DcfOEh4u.js";import"./chevron-right-Beq2EQj9.js";import"./ellipsis-AhaWuyAr.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";const Z=[{id:"1",dealerName:"ABC Trading Company",indentNumber:"IND-001",priority:"High",status:"Pending",requestDate:"2024-01-15",expectedDate:"2024-02-15",products:[{product:"Plywood 18mm",totalQuantity:50,rate:1200},{product:"MDF Board",totalQuantity:30,rate:800},{product:"Plywood 12mm",totalQuantity:40,rate:900}]},{id:"2",dealerName:"XYZ Suppliers",indentNumber:"IND-002",priority:"Medium",status:"In Progress",requestDate:"2024-01-16",expectedDate:"2024-02-20",products:[{product:"Plywood 18mm",totalQuantity:75,rate:1200},{product:"MDF Board",totalQuantity:45,rate:800}]},{id:"3",dealerName:"PQR Enterprises",indentNumber:"IND-003",priority:"Low",status:"Completed",requestDate:"2024-01-14",expectedDate:"2024-02-10",products:[{product:"Plywood 12mm",totalQuantity:60,rate:900},{product:"Plywood 18mm",totalQuantity:25,rate:1200},{product:"MDF Board",totalQuantity:35,rate:800}]},{id:"4",dealerName:"LMN Traders",indentNumber:"IND-004",priority:"High",status:"Pending",requestDate:"2024-01-17",expectedDate:"2024-02-25",products:[{product:"Plywood 18mm",totalQuantity:100,rate:1200},{product:"MDF Board",totalQuantity:80,rate:800}]},{id:"5",dealerName:"STU Corporation",indentNumber:"IND-005",priority:"Medium",status:"In Progress",requestDate:"2024-01-18",expectedDate:"2024-02-28",products:[{product:"Plywood 12mm",totalQuantity:90,rate:900},{product:"Plywood 18mm",totalQuantity:55,rate:1200},{product:"MDF Board",totalQuantity:40,rate:800}]}],m=Y(),ue=()=>{const[c,w]=j.useState(Z),[y,h]=u.useState(!1),[f,v]=u.useState(!1);u.useEffect(()=>{if(!f){const t=setTimeout(()=>{h(!0),v(!0);const r=setTimeout(()=>{h(!1)},3e3);return()=>clearTimeout(r)},1e3);return()=>clearTimeout(t)}},[f]);const D=t=>{const{active:r,over:o}=t;r.id!==(o==null?void 0:o.id)&&w(n=>{const l=n.findIndex(a=>a.id===r.id),s=n.findIndex(a=>a.id===(o==null?void 0:o.id));return K(n,l,s)})},k=[m.display({id:"dragHandle",cell:()=>e.jsx("span",{className:"cursor-move text-gray-400 hover:text-gray-600",children:"🟰"}),header:()=>e.jsx("span",{})}),m.accessor("dealerName",{cell:t=>e.jsx("div",{className:"truncate line-clamp-2 max-w-56",children:e.jsx("h6",{className:"text-xs font-normal text-ld dark:text-gray-400",children:t.getValue()})}),header:()=>e.jsx("span",{className:"text-sm font-medium text-ld dark:text-gray-400",children:"Dealer Name"})}),m.accessor("indentNumber",{cell:t=>e.jsx("p",{className:"text-darklink dark:text-bodytext text-xs font-mono text-center",children:t.getValue()}),header:()=>e.jsx("span",{className:"text-sm font-medium text-ld dark:text-gray-400 text-center",children:"Indent Number"})}),m.display({id:"actions",cell:({row:t})=>e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("span",{className:"h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer",onClick:()=>t.toggleExpanded(),children:t.getIsExpanded()?e.jsx(p,{icon:"solar:alt-arrow-up-line-duotone"}):e.jsx(p,{icon:"solar:alt-arrow-down-line-duotone"})})}),header:()=>e.jsx("span",{className:"text-sm font-medium text-ld dark:text-gray-400 text-center",children:"Actions"})})],N=E({data:c,columns:k,getCoreRowModel:H(),getExpandedRowModel:z()}),C=({row:t})=>{const{attributes:r,listeners:o,setNodeRef:n,transform:l,transition:s}=O({id:t.original.id}),a={transform:X.Translate.toString(l),transition:s},x=t.index===0,I=t.index===1,Q=x&&y?"animate-drag-hint":I&&y?"animate-push-up":"";return e.jsxs(j.Fragment,{children:[e.jsx("tr",{ref:n,style:a,className:`border-b border-ld dark:border-darkborder transition-colors ${Q} ${t.getIsExpanded()?"bg-blue-100 dark:bg-darkmuted":"hover:bg-muted dark:hover:bg-darkmuted"}`,children:t.getVisibleCells().map(d=>e.jsx("td",{className:"whitespace-nowrap py-3 px-4 text-sm text-ld dark:text-white",children:d.column.id==="dragHandle"?e.jsx("div",{...r,...o,className:"cursor-move",children:b(d.column.columnDef.cell,d.getContext())}):b(d.column.columnDef.cell,d.getContext())},d.id))}),t.getIsExpanded()&&e.jsx("tr",{children:e.jsx("td",{colSpan:k.length,className:"p-4",children:e.jsxs("div",{className:"flex flex-col gap-4 p-6 border border-ld dark:border-darkborder rounded-md bg-lightgray dark:bg-dark",children:[e.jsx("h6",{className:"text-base text-center font-semibold text-ld dark:text-white",children:"Indents"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs border border-gray-200 dark:border-gray-700",children:[e.jsx("thead",{className:"bg-blue-50 dark:bg-blue-900/20",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center font-semibold text-gray-900 dark:text-white",children:"Products"}),e.jsx("th",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center font-semibold text-gray-900 dark:text-white",children:"Total Quantity (Sheets)"}),e.jsx("th",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center font-semibold text-gray-900 dark:text-white",children:"National Area"})]})}),e.jsx("tbody",{children:t.original.products.map((d,i)=>e.jsxs("tr",{className:i%2===0?"bg-white dark:bg-gray-900":"bg-gray-50 dark:bg-gray-800",children:[e.jsx("td",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center text-gray-900 dark:text-white",children:d.product}),e.jsx("td",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center text-gray-900 dark:text-white",children:d.totalQuantity}),e.jsx("td",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center text-gray-900 dark:text-white",children:"North"})]},i))}),e.jsx("tfoot",{className:"bg-blue-50 dark:bg-blue-900/20",children:e.jsxs("tr",{className:"border-t-2 border-gray-200 dark:border-gray-700 font-semibold",children:[e.jsx("td",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center text-gray-900 dark:text-white",children:"Total"}),e.jsx("td",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center text-gray-900 dark:text-white",children:t.original.products.reduce((d,i)=>d+i.totalQuantity,0)}),e.jsxs("td",{className:"border border-gray-200 dark:border-gray-700 px-2 py-2 text-center text-gray-900 dark:text-white",children:["₹",t.original.products.reduce((d,i)=>d+i.totalQuantity*i.rate,0)]})]})})]})})]})})})]})},P=B(g($),g(V),g(U)),S=()=>{const t=["Dealer Name","Indent Number","Priority","Status","Products"],r=c.map(a=>[a.dealerName,a.indentNumber,a.priority,a.status,a.products.map(x=>x.product).join(", ")]),o=[t.join(","),...r.map(a=>a.join(","))].join(`
`),n=new Blob([o],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(n),s=document.createElement("a");s.href=l,s.setAttribute("download","indent-priority-data.csv"),document.body.appendChild(s),s.click(),document.body.removeChild(s)};return e.jsxs("div",{className:"space-y-8",children:[e.jsx(R,{title:"Indent Priority Center",description:"Manage indent priorities and order for efficient inventory management",keywords:"indent, priority, management, inventory, ERP, order"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Indent Priority Center"}),e.jsx(T,{})]}),e.jsx(M,{title:"Priority Indents",onDownload:S,children:e.jsxs(A,{onDragEnd:D,sensors:P,collisionDetection:F,children:[e.jsx("div",{className:"border rounded-md border-ld dark:border-darkborder overflow-hidden bg-white dark:bg-dark",children:e.jsx("div",{className:"overflow-x-auto overflow-y-auto max-h-[70vh] scrollbar-hidden",children:e.jsxs("table",{className:"min-w-full",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-darkmuted",children:N.getHeaderGroups().map(t=>e.jsx("tr",{className:"border-b border-ld dark:border-darkborder",children:t.headers.map(r=>e.jsx("th",{className:`text-base text-ld dark:text-white font-semibold py-3 border-b border-ld dark:border-darkborder px-4 ${r.id==="actions"||r.id==="indentNumber"?"text-center":"text-left"}`,children:r.isPlaceholder?null:b(r.column.columnDef.header,r.getContext())},r.id))},t.id))}),e.jsx("tbody",{className:"divide-y divide-border dark:divide-darkborder bg-white dark:bg-dark",children:e.jsx(q,{items:c.map(t=>t.id),strategy:L,children:N.getRowModel().rows.map(t=>e.jsx(C,{row:t},t.id))})})]})})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-ld dark:border-darkborder",children:e.jsxs("button",{onClick:()=>{console.log("Set priority order clicked",c)},className:"inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200",children:[e.jsx(p,{icon:"solar:check-circle-line-duotone",className:"w-4 h-4 mr-2"}),"Set Order"]})})]})}),e.jsx("style",{children:`
        @keyframes dragHint {
          0% {
            transform: translateY(0);
            z-index: 1;
            box-shadow: none;
          }
          20% {
            transform: translateY(0);
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          40% {
            transform: translateY(60px);
            z-index: 10;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          60% {
            transform: translateY(60px);
            z-index: 10;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          80% {
            transform: translateY(0);
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          100% {
            transform: translateY(0);
            z-index: 1;
            box-shadow: none;
          }
        }
        
        .animate-drag-hint {
          animation: dragHint 3s ease-in-out 1;
          position: relative;
        }
        
        .animate-push-up {
          animation: pushUp 3s ease-in-out 1;
          position: relative;
        }
        
        @keyframes pushUp {
          0% {
            transform: translateY(0);
            z-index: 1;
          }
          20% {
            transform: translateY(-60px);
            z-index: 10;
          }
          40% {
            transform: translateY(-60px);
            z-index: 10;
          }
          60% {
            transform: translateY(-60px);
            z-index: 10;
          }
          80% {
            transform: translateY(0);
            z-index: 10;
          }
          100% {
            transform: translateY(0);
            z-index: 1;
          }
        }
      `})]})};export{ue as default};
