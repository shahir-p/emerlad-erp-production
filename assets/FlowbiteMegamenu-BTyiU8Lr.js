import{z as V,B as c,r as o,A as B,j as r}from"./index-CfGLtstz.js";import{C as k}from"./CardBox-DyySzG8n.js";import{F as M}from"./FullLogo-CUyuWcum.js";import{u as H,g as y,r as P}from"./resolve-theme-DSwo52RB.js";import{n as I,N as q,a as w}from"./NavbarCollapse-Ccz6X0YI.js";import{d as x,D as z}from"./Dropdown-dIur1JPq.js";import{B as E}from"./Button-BBgTEsWM.js";import{N as C}from"./NavbarToggle-C94HOErI.js";import{N as e}from"./NavbarLink-Cyu6DUXC.js";import{C as W}from"./CodeDialog-MEd2hOPr.js";import{w as A,h as U}from"./index-Dg52xdS1.js";import{I as l}from"./iconify-C7ABZ5uA.js";import{B as G}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./logo-icon-CIhFJcf6.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./chevron-down-icon-Cc3DmJkO.js";import"./chevron-left-icon-CHT4Q2s1.js";import"./chevron-right-icon-zTlTfnsS.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-uzeOI1Me.js";import"./Badge-CN-1CXXU.js";const O=V({...I,dropdown:{base:"",toggle:{...x,floating:{...x.floating,base:c(x.floating.base,"mt-2 block"),content:c(x.floating.content,"text-gray-500 dark:text-gray-400"),style:{...x.floating.style,auto:c(x.floating.style.auto,"text-gray-500 dark:text-gray-400")}},inlineWrapper:c(x.inlineWrapper,"flex w-full items-center justify-between")}},dropdownToggle:{base:c(I.link.base,I.link.active.off,"flex w-full items-center justify-between")}}),u=o.forwardRef((a,n)=>{var h,d;const t=B(),i=H([O,(h=t.theme)==null?void 0:h.megaMenu,a.theme],[y(t.clearTheme,"megaMenu"),a.clearTheme],[y(t.applyTheme,"megaMenu"),a.applyTheme]),m=P(a,(d=t.props)==null?void 0:d.megaMenu);return r.jsx(q,{ref:n,theme:i,fluid:!0,...m})});u.displayName="MegaMenu";function v(a){var T,N,D;const[n,t]=o.useState(void 0),i=B(),m=H([O.dropdown,(N=(T=i.theme)==null?void 0:T.megaMenu)==null?void 0:N.dropdown,a.theme],[y(i.clearTheme,"megaMenu.dropdown"),a.clearTheme],[y(i.applyTheme,"megaMenu.dropdown"),a.applyTheme]),{children:h,className:d,toggle:f,...g}=P(a,(D=i.props)==null?void 0:D.megaMenuDropdown);if(f)return r.jsx(z,{inline:!0,label:f,placement:"bottom",theme:m.toggle,className:c(m.base,d),children:h});const R=o.useId(),L=o.useRef(null);return o.useEffect(()=>{var j,b;const p=(b=(j=L.current)==null?void 0:j.closest("nav"))==null?void 0:b.querySelector('[aria-haspopup="menu"]');t(p==null?void 0:p.id)},[]),r.jsx("div",{"aria-labelledby":n,id:R,ref:L,role:"menu",className:c(m.base,d),...g,children:h})}v.displayName="MegaMenuDropdown";function _(a){return n=>{a.forEach(t=>{if(typeof t=="function")t(n);else if(t!=null){const i=t;i.current=n}})}}const S=o.forwardRef((a,n)=>{var p,j,b;const t=o.useId(),i=o.useRef(null),[m,h]=o.useState(void 0),[d,f]=o.useState(void 0),g=B(),R=H([O.dropdownToggle,(j=(p=g.theme)==null?void 0:p.megaMenu)==null?void 0:j.dropdownToggle,a.theme],[y(g.clearTheme,"megaMenu.dropdownToggle"),a.clearTheme],[y(g.applyTheme,"megaMenu.dropdownToggle"),a.applyTheme]),{className:L,...T}=P(a,(b=g.props)==null?void 0:b.megaMenuDropdownToggle);function N(){var F;const s=(F=i.current)==null?void 0:F.closest("nav");return s==null?void 0:s.querySelector('[role="menu"]')}function D(){var s;(s=N())==null||s.classList.toggle("hidden"),f(!d)}return o.useEffect(()=>{const s=N(),F=s==null?void 0:s.classList.contains("hidden");h(s==null?void 0:s.id),f(!F)},[]),r.jsx("button",{ref:_([n,i]),"aria-controls":m,"aria-expanded":d,"aria-haspopup":"menu",id:t,onClick:D,className:c(R.base,L),...T})});S.displayName="MegaMenuDropdownToggle";const $=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsx(u,{className:"rounded-md",children:r.jsxs("div",{className:"mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8",children:[r.jsx(M,{}),r.jsxs("div",{className:"order-2 hidden items-center md:flex",children:[r.jsx("a",{href:"#",className:"mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5",children:"Login"}),r.jsx(E,{href:"#",color:"primary",children:"Sign up"})]}),r.jsx(C,{}),r.jsxs(w,{children:[r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Home"}),r.jsx(e,{children:r.jsx(v,{toggle:r.jsx("div",{className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Company"}),children:r.jsxs("ul",{className:"grid grid-cols-3",children:[r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"About Us"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Library"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Resources"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Pro Version"})})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Contact Us"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Support Center"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Terms"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Blog"})})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Newsletter"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Playground"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"License"})})]})]})})}),r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Team"}),r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Contact"})]})]})})})}),J=`import {\r
  MegaMenu,\r
  Button,\r
  NavbarCollapse,\r
  NavbarLink,\r
  NavbarToggle,\r
  MegaMenuDropdown,\r
} from 'flowbite-react';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const DefaultMegamenuCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <MegaMenu className="rounded-md">\r
          <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8">\r
            <FullLogo />\r
            <div className="order-2 hidden items-center md:flex">\r
              <a\r
                href="#"\r
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"\r
              >\r
                Login\r
              </a>\r
              <Button href="#" color="primary">\r
                Sign up\r
              </Button>\r
            </div>\r
            <NavbarToggle />\r
            <NavbarCollapse>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Home\r
              </NavbarLink>\r
              <NavbarLink>\r
                <MegaMenuDropdown\r
                  toggle={\r
                    <div className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary">\r
                      Company\r
                    </div>\r
                  }\r
                >\r
                  <ul className="grid grid-cols-3">\r
                    <div className="space-y-4 p-4">\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          About Us\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Library\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Resources\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Pro Version\r
                        </a>\r
                      </li>\r
                    </div>\r
                    <div className="space-y-4 p-4">\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Contact Us\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Support Center\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Terms\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Blog\r
                        </a>\r
                      </li>\r
                    </div>\r
                    <div className="space-y-4 p-4">\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Newsletter\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Playground\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          License\r
                        </a>\r
                      </li>\r
                    </div>\r
                  </ul>\r
                </MegaMenuDropdown>\r
              </NavbarLink>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Team\r
              </NavbarLink>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Contact\r
              </NavbarLink>\r
            </NavbarCollapse>\r
          </div>\r
        </MegaMenu>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultMegamenuCode;\r
`,K=()=>r.jsx("div",{children:r.jsx(k,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Mega Menu"}),r.jsx($,{})]}),r.jsx(W,{children:J})]})})}),Q=()=>r.jsx("div",{children:r.jsxs(k,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Full Width With CTA"}),r.jsxs(u,{className:"rounded-md",children:[r.jsx(M,{}),r.jsx(C,{}),r.jsxs(w,{children:[r.jsx(e,{href:"/",children:"Home"}),r.jsxs(S,{children:["Company",r.jsx(A,{className:"ml-2"})]}),r.jsx(e,{href:"/",children:"Marketplace"}),r.jsx(e,{href:"/",children:"Resources"}),r.jsx(e,{href:"/",children:"Contact"})]}),r.jsx(v,{children:r.jsxs("div",{className:"mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6",children:[r.jsxs("ul",{className:"space-y-4 sm:mb-4 md:mb-0",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Segmentation"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Marketing CRM"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})})]}),r.jsxs("ul",{className:"mb-4 hidden space-y-4 sm:block md:mb-0",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Our Blog"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Terms & Conditions"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"License"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Resources"})})]}),r.jsxs("div",{className:"mt-4 md:mt-0",children:[r.jsx("h2",{className:"mb-2 font-semibold text-gray-900 dark:text-white",children:"Our brands"}),r.jsx("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"At Flowbite, we have a portfolio of brands that cater to a variety of preferences."}),r.jsxs("a",{href:"#",className:"inline-flex items-center text-sm font-medium text-primary hover:text-primaryemphasis dark:text-primary dark:hover:text-primaryemphasis",children:["Explore our brands",r.jsx("span",{className:"sr-only",children:"Explore our brands"}),r.jsx(U,{className:"ml-2"})]})]})]})})]})]})}),X=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsxs(u,{className:"rounded-md",children:[r.jsx(M,{}),r.jsx(C,{}),r.jsxs(w,{children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{children:r.jsxs(S,{children:["Company",r.jsx(A,{className:"ml-2"})]})}),r.jsx(e,{href:"/",children:"Marketplace"}),r.jsx(e,{href:"/",children:"Resources"}),r.jsx(e,{href:"/",children:"Contact"})]}),r.jsx(v,{children:r.jsxs("ul",{className:"mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6",children:[r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Online Stores"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Segmentation"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Marketing CRM"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Online Stores"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Segmentation"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Marketing CRM"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Audience Management"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Creative Tools"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Marketing Automation"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})})]})})]})})}),Y=`import {\r
  MegaMenu,\r
  MegaMenuDropdown,\r
  MegaMenuDropdownToggle,\r
  NavbarCollapse,\r
  NavbarLink,\r
  NavbarToggle,\r
} from 'flowbite-react';\r
import { HiChevronDown } from 'react-icons/hi';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const FullWidthMegamenuCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <MegaMenu className="rounded-md">\r
          <FullLogo />\r
          <NavbarToggle />\r
          <NavbarCollapse>\r
            <NavbarLink href="/">Home</NavbarLink>\r
            <NavbarLink>\r
              <MegaMenuDropdownToggle>\r
                Company\r
                <HiChevronDown className="ml-2" />\r
              </MegaMenuDropdownToggle>\r
            </NavbarLink>\r
            <NavbarLink href="/">Marketplace</NavbarLink>\r
            <NavbarLink href="/">Resources</NavbarLink>\r
            <NavbarLink href="/">Contact</NavbarLink>\r
          </NavbarCollapse>\r
          <MegaMenuDropdown>\r
            <ul className="mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6">\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Online Stores</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Segmentation</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Marketing CRM</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Online Stores</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Segmentation</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Marketing CRM</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Audience Management</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Creative Tools</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Marketing Automation</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
            </ul>\r
          </MegaMenuDropdown>\r
        </MegaMenu>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default FullWidthMegamenuCode;\r
`,Z=()=>r.jsx("div",{children:r.jsx(k,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Full width dropdown"}),r.jsx(X,{})]}),r.jsx(W,{children:Y})]})})}),rr=()=>r.jsx("div",{children:r.jsxs(k,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Full width with image"}),r.jsxs(u,{className:"rounded-md",children:[r.jsx(M,{}),r.jsx(C,{}),r.jsxs(w,{children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{href:"/",children:"Company"}),r.jsxs(S,{children:["Marketplace",r.jsx(A,{className:"ml-2"})]}),r.jsx(e,{href:"/",children:"Resources"}),r.jsx(e,{href:"/",children:"Contact"})]}),r.jsx(v,{children:r.jsx("div",{className:"mt-6 border-y border-border dark:border-darkborder bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800",children:r.jsxs("div",{className:"mx-auto grid max-w-(--breakpoint-xl) px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6",children:[r.jsxs("ul",{className:"mb-4 hidden space-y-4 md:mb-0 md:block","aria-labelledby":"mega-menu-full-image-button",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Segmentation"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Marketing CRM"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})})]}),r.jsxs("ul",{className:"mb-4 space-y-4 md:mb-0",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Our Blog"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Terms & Conditions"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"License"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Resources"})})]}),r.jsx("a",{href:"#",className:"rounded-lg  p-8 text-left bg-cover bg-center bg-[url('/src/assets/images/backgrounds/login-bg.svg')]",children:r.jsxs("div",{className:"backdrop-blur-xs text-dark",children:[r.jsx("p",{className:"mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white",children:"Preview the new Flowbite dashboard navigation."}),r.jsxs("button",{type:"button",className:"inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-hidden focus:ring-4 focus:ring-gray-700",children:["Get started",r.jsx(U,{className:"ml-2"})]})]})})]})})})]})]})}),er=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsx(u,{className:"rounded-md",children:r.jsxs("div",{className:"mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8",children:[r.jsx(M,{}),r.jsxs("div",{className:"order-2 hidden items-center md:flex",children:[r.jsx("a",{href:"#",className:"mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5",children:"Login"}),r.jsx(E,{href:"#",color:"primary",children:"Sign up"})]}),r.jsx(C,{}),r.jsxs(w,{children:[r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Home"}),r.jsx(v,{toggle:r.jsx("div",{className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Company"}),children:r.jsxs("ul",{className:"grid grid-cols-3",children:[r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"cuida:alert-outline",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"About Us"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"mdi:blog",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Library"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"lucide:contact-round",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Resources"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"ri:stack-fill",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Pro Version"})]})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"map:post-box",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Contact Us"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"lets-icons:setting-line",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Support Center"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"solar:box-linear",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Terms"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"solar:widget-2-broken",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Blog"})]})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"lucide:file-spreadsheet",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Newsletter"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"tdesign:rocket-filled",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Playground"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(l,{icon:"carbon:license",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"License"})]})]})]})}),r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Team"})]})]})})})}),ar=`import {\r
  MegaMenu,\r
  Button,\r
  MegaMenuDropdown,\r
  NavbarCollapse,\r
  NavbarLink,\r
  NavbarToggle,\r
} from 'flowbite-react';\r
\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
import { Icon } from '@iconify/react/dist/iconify.js';\r
\r
const MegamenuIconCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <MegaMenu className="rounded-md">\r
          <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8">\r
            <FullLogo />\r
            <div className="order-2 hidden items-center md:flex">\r
              <a\r
                href="#"\r
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"\r
              >\r
                Login\r
              </a>\r
              <Button href="#" color="primary">\r
                Sign up\r
              </Button>\r
            </div>\r
            <NavbarToggle />\r
            <NavbarCollapse>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Home\r
              </NavbarLink>\r
              <MegaMenuDropdown\r
                toggle={\r
                  <div className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary">\r
                    Company\r
                  </div>\r
                }\r
              >\r
                <ul className="grid grid-cols-3">\r
                  <div className="space-y-4 p-4">\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="cuida:alert-outline" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        About Us\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="mdi:blog" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Library\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="lucide:contact-round" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Resources\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="ri:stack-fill" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Pro Version\r
                      </a>\r
                    </li>\r
                  </div>\r
                  <div className="space-y-4 p-4">\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="map:post-box" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Contact Us\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="lets-icons:setting-line" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Support Center\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="solar:box-linear" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Terms\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="solar:widget-2-broken" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Blog\r
                      </a>\r
                    </li>\r
                  </div>\r
                  <div className="space-y-4 p-4">\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="lucide:file-spreadsheet" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Newsletter\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="tdesign:rocket-filled" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Playground\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="carbon:license" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        License\r
                      </a>\r
                    </li>\r
                  </div>\r
                </ul>\r
              </MegaMenuDropdown>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Team\r
              </NavbarLink>\r
            </NavbarCollapse>\r
          </div>\r
        </MegaMenu>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default MegamenuIconCode;\r
`,tr=()=>r.jsx("div",{children:r.jsx(k,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Mega Menu With Icons"}),r.jsx(er,{})]}),r.jsx(W,{children:ar})]})})}),sr=[{to:"/",title:"Home"},{title:"Mega Menu"}],Hr=()=>r.jsxs(r.Fragment,{children:[r.jsx(G,{title:"Mega Menu",items:sr}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(K,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(tr,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(Z,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(Q,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(rr,{})})]})]});export{Hr as default};
