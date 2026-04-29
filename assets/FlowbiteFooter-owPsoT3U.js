import{z as S,r as F,A as g,j as e,B as y}from"./index-CfGLtstz.js";import{C}from"./CardBox-DyySzG8n.js";import{u as k,g as h,r as v}from"./resolve-theme-DSwo52RB.js";import{C as T}from"./CodeDialog-MEd2hOPr.js";import{F as M}from"./FullLogo-CUyuWcum.js";import{G as L}from"./iconBase-uzeOI1Me.js";import{B as R}from"./BreadcrumbComp-C5Rb_68r.js";import{C as z}from"./ComponentApi-CfeoLeUj.js";import"./Card-Bidl-tkB.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./logo-icon-CIhFJcf6.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";import"./TableRow-BV2w-xRG.js";const b=S({root:{base:"w-full rounded-lg bg-white shadow md:flex md:items-center md:justify-between dark:bg-gray-800",container:"w-full p-6",bgDark:"bg-gray-800"},groupLink:{base:"flex flex-wrap text-sm text-gray-500 dark:text-white",link:{base:"me-4 last:mr-0 md:mr-6",href:"hover:underline"},col:"flex-col space-y-4"},icon:{base:"text-gray-500 dark:hover:text-white",size:"h-5 w-5"},title:{base:"mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"},divider:{base:"my-6 w-full border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700"},copyright:{base:"text-sm text-gray-500 sm:text-center dark:text-gray-400",href:"ml-1 hover:underline",span:"ml-1"},brand:{base:"mb-4 flex items-center sm:mb-0",img:"mr-3 h-8",span:"self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"}}),w=F.forwardRef((r,m)=>{var n,d;const o=g(),i=k([b,(n=o.theme)==null?void 0:n.footer,r.theme],[h(o.clearTheme,"footer"),r.clearTheme],[h(o.applyTheme,"footer"),r.applyTheme]),{bgDark:c=!1,children:f,className:a,container:l=!1,...s}=v(r,(d=o.props)==null?void 0:d.footer);return e.jsx("footer",{ref:m,"data-testid":"flowbite-footer",className:y(i.root.base,c&&i.root.bgDark,l&&i.root.container,a),...s,children:f})});w.displayName="Footer";const N=F.forwardRef((r,m)=>{var n,d,u;const o=g(),i=k([b.copyright,(d=(n=o.theme)==null?void 0:n.footer)==null?void 0:d.copyright,r.theme],[h(o.clearTheme,"footer.copyright"),r.clearTheme],[h(o.applyTheme,"footer.copyright"),r.applyTheme]),{by:c,className:f,href:a,year:l,...s}=v(r,(u=o.props)==null?void 0:u.footerCopyright);return e.jsxs("div",{ref:m,"data-testid":"flowbite-footer-copyright",className:y(i.base,f),...s,children:["© ",l,a?e.jsx("a",{href:a,className:i.href,children:c}):e.jsx("span",{"data-testid":"flowbite-footer-copyright-span",className:i.span,children:c})]})});N.displayName="FooterCopyright";const B=F.forwardRef((r,m)=>{var a,l,s;const o=g(),i=k([b.divider,(l=(a=o.theme)==null?void 0:a.footer)==null?void 0:l.divider,r.theme],[h(o.clearTheme,"footer.divider"),r.clearTheme],[h(o.applyTheme,"footer.divider"),r.applyTheme]),{className:c,...f}=v(r,(s=o.props)==null?void 0:s.footerDivider);return e.jsx("hr",{ref:m,"data-testid":"footer-divider",className:y(i.base,c),...f})});B.displayName="FooterDivider";const x=F.forwardRef((r,m)=>{var n,d,u;const o=g(),i=k([b.icon,(d=(n=o.theme)==null?void 0:n.footer)==null?void 0:d.icon,r.theme],[h(o.clearTheme,"footer.icon"),r.clearTheme],[h(o.applyTheme,"footer.icon"),r.applyTheme]),{ariaLabel:c,className:f,href:a,icon:l,...s}=v(r,(u=o.props)==null?void 0:u.footerIcon);return e.jsx("div",{ref:m,children:a?e.jsx("a",{"aria-label":c,"data-testid":"flowbite-footer-icon",href:a,className:y(i.base,f),...s,children:e.jsx(l,{className:i.size})}):e.jsx(l,{"data-testid":"flowbite-footer-icon",className:i.size,...s})})});x.displayName="FooterIcon";const t=F.forwardRef((r,m)=>{var s,n,d,u;const o=g(),i=k([b.groupLink.link,(d=(n=(s=o.theme)==null?void 0:s.footer)==null?void 0:n.groupLink)==null?void 0:d.link,r.theme],[h(o.clearTheme,"footer.groupLink.link"),r.clearTheme],[h(o.applyTheme,"footer.groupLink.link"),r.applyTheme]),{as:c="a",className:f,href:a,...l}=v(r,(u=o.props)==null?void 0:u.footerLink);return e.jsx("li",{ref:m,className:y(i.base,f),children:e.jsx(c,{href:a,className:i.href,...l})})});t.displayName="FooterLink";const p=F.forwardRef((r,m)=>{var l,s,n;const o=g(),i=k([b.groupLink,(s=(l=o.theme)==null?void 0:l.footer)==null?void 0:s.groupLink,r.theme],[h(o.clearTheme,"footer.groupLink"),r.clearTheme],[h(o.applyTheme,"footer.groupLink"),r.applyTheme]),{className:c,col:f=!1,...a}=v(r,(n=o.props)==null?void 0:n.footerLinkGroup);return e.jsx("ul",{ref:m,"data-testid":"footer-groupLink",className:y(i.base,f&&i.col,c),...a})});p.displayName="FooterLinkGroup";const j=F.forwardRef((r,m)=>{var s,n,d;const o=g(),i=k([b.title,(n=(s=o.theme)==null?void 0:s.footer)==null?void 0:n.title,r.theme],[h(o.clearTheme,"footer.title"),r.clearTheme],[h(o.applyTheme,"footer.title"),r.applyTheme]),{as:c="h2",className:f,title:a,...l}=v(r,(d=o.props)==null?void 0:d.footerTitle);return e.jsx(c,{ref:m,"data-testid":"flowbite-footer-title",className:y(i.base,f),...l,children:a})});j.displayName="FooterTitle";const W=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(w,{container:!0,className:"rounded-md",children:[e.jsx(N,{href:"#",by:"MateriaIM",year:2024}),e.jsxs(p,{children:[e.jsx(t,{href:"#",children:"About"}),e.jsx(t,{href:"#",children:"Privacy Policy"}),e.jsx(t,{href:"#",children:"Licensing"}),e.jsx(t,{href:"#",children:"Contact"})]})]})})}),O=`import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';\r
\r
const DefaultFooterCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Footer container className="rounded-md">\r
          <FooterCopyright href="#" by="MateriaIM" year={2024} />\r
          <FooterLinkGroup>\r
            <FooterLink href="#">About</FooterLink>\r
            <FooterLink href="#">Privacy Policy</FooterLink>\r
            <FooterLink href="#">Licensing</FooterLink>\r
            <FooterLink href="#">Contact</FooterLink>\r
          </FooterLinkGroup>\r
        </Footer>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultFooterCode;\r
`,V=()=>e.jsx("div",{children:e.jsx(C,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Footer"}),e.jsx(W,{})]}),e.jsx(T,{children:O})]})})}),H=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(w,{container:!0,className:"rounded-md",children:e.jsxs("div",{className:"w-full text-center",children:[e.jsxs("div",{className:"w-full justify-between sm:flex sm:items-center sm:justify-between",children:[e.jsx(M,{}),e.jsxs(p,{children:[e.jsx(t,{href:"#",children:"About"}),e.jsx(t,{href:"#",children:"Privacy Policy"}),e.jsx(t,{href:"#",children:"Licensing"}),e.jsx(t,{href:"#",children:"Contact"})]})]}),e.jsx(B,{}),e.jsx(N,{href:"#",by:"MateriaIM",year:2024})]})})})}),U=`import {\r
  Footer,\r
  FooterCopyright,\r
  FooterDivider,\r
  FooterLink,\r
  FooterLinkGroup,\r
} from 'flowbite-react';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const FooterWithLogoCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Footer container className="rounded-md">\r
          <div className="w-full text-center">\r
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">\r
              <FullLogo />\r
              <FooterLinkGroup>\r
                <FooterLink href="#">About</FooterLink>\r
                <FooterLink href="#">Privacy Policy</FooterLink>\r
                <FooterLink href="#">Licensing</FooterLink>\r
                <FooterLink href="#">Contact</FooterLink>\r
              </FooterLinkGroup>\r
            </div>\r
            <FooterDivider />\r
            <FooterCopyright href="#" by="MateriaIM" year={2024} />\r
          </div>\r
        </Footer>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default FooterWithLogoCode;\r
`,E=()=>e.jsx("div",{children:e.jsxs(C,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Footer With Logo"}),e.jsx(H,{})]}),e.jsx(T,{children:U})]})});function A(r){return L({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"},child:[]}]})(r)}function D(r){return L({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"},child:[]}]})(r)}function G(r){return L({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(r)}function I(r){return L({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"},child:[]}]})(r)}function P(r){return L({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"},child:[]}]})(r)}const Y=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(w,{bgDark:!0,className:"rounded-md",children:e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4",children:[e.jsxs("div",{children:[e.jsx(j,{title:"Company"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"About"}),e.jsx(t,{href:"#",children:"Careers"}),e.jsx(t,{href:"#",children:"Brand Center"}),e.jsx(t,{href:"#",children:"Blog"})]})]}),e.jsxs("div",{children:[e.jsx(j,{title:"help center"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"Discord Server"}),e.jsx(t,{href:"#",children:"Twitter"}),e.jsx(t,{href:"#",children:"Facebook"}),e.jsx(t,{href:"#",children:"Contact Us"})]})]}),e.jsxs("div",{children:[e.jsx(j,{title:"legal"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"Privacy Policy"}),e.jsx(t,{href:"#",children:"Licensing"}),e.jsx(t,{href:"#",children:"Terms & Conditions"})]})]}),e.jsxs("div",{children:[e.jsx(j,{title:"download"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"iOS"}),e.jsx(t,{href:"#",children:"Android"}),e.jsx(t,{href:"#",children:"Windows"}),e.jsx(t,{href:"#",children:"MacOS"})]})]})]}),e.jsxs("div",{className:"w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between",children:[e.jsx(N,{href:"#",by:"MateriaIM",year:2024}),e.jsxs("div",{className:"mt-4 flex space-x-6 sm:mt-0 sm:justify-center",children:[e.jsx(x,{href:"#",icon:D}),e.jsx(x,{href:"#",icon:I}),e.jsx(x,{href:"#",icon:P}),e.jsx(x,{href:"#",icon:G}),e.jsx(x,{href:"#",icon:A})]})]})]})})})}),q=`import {\r
  Footer,\r
  FooterCopyright,\r
  FooterIcon,\r
  FooterLink,\r
  FooterLinkGroup,\r
  FooterTitle,\r
} from 'flowbite-react';\r
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';\r
\r
const SitemapLinkFooterCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Footer bgDark className="rounded-md">\r
          <div className="w-full">\r
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">\r
              <div>\r
                <FooterTitle title="Company" />\r
                <FooterLinkGroup col>\r
                  <FooterLink href="#">About</FooterLink>\r
                  <FooterLink href="#">Careers</FooterLink>\r
                  <FooterLink href="#">Brand Center</FooterLink>\r
                  <FooterLink href="#">Blog</FooterLink>\r
                </FooterLinkGroup>\r
              </div>\r
              <div>\r
                <FooterTitle title="help center" />\r
                <FooterLinkGroup col>\r
                  <FooterLink href="#">Discord Server</FooterLink>\r
                  <FooterLink href="#">Twitter</FooterLink>\r
                  <FooterLink href="#">Facebook</FooterLink>\r
                  <FooterLink href="#">Contact Us</FooterLink>\r
                </FooterLinkGroup>\r
              </div>\r
              <div>\r
                <FooterTitle title="legal" />\r
                <FooterLinkGroup col>\r
                  <FooterLink href="#">Privacy Policy</FooterLink>\r
                  <FooterLink href="#">Licensing</FooterLink>\r
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>\r
                </FooterLinkGroup>\r
              </div>\r
              <div>\r
                <FooterTitle title="download" />\r
                <FooterLinkGroup col>\r
                  <FooterLink href="#">iOS</FooterLink>\r
                  <FooterLink href="#">Android</FooterLink>\r
                  <FooterLink href="#">Windows</FooterLink>\r
                  <FooterLink href="#">MacOS</FooterLink>\r
                </FooterLinkGroup>\r
              </div>\r
            </div>\r
            <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">\r
              <FooterCopyright href="#" by="MateriaIM" year={2024} />\r
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\r
                <FooterIcon href="#" icon={BsFacebook} />\r
                <FooterIcon href="#" icon={BsInstagram} />\r
                <FooterIcon href="#" icon={BsTwitter} />\r
                <FooterIcon href="#" icon={BsGithub} />\r
                <FooterIcon href="#" icon={BsDribbble} />\r
              </div>\r
            </div>\r
          </div>\r
        </Footer>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default SitemapLinkFooterCode;\r
`,J=()=>e.jsx("div",{children:e.jsxs(C,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Sitemap links"}),e.jsx(Y,{})]}),e.jsx(T,{children:q})]})}),K=()=>e.jsx("div",{children:e.jsxs(C,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Social media icons"}),e.jsx(w,{container:!0,className:"rounded-md",children:e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1",children:[e.jsx("div",{children:e.jsx(M,{})}),e.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6",children:[e.jsxs("div",{children:[e.jsx(j,{title:"about"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"Flowbite"}),e.jsx(t,{href:"#",children:"Tailwind CSS"})]})]}),e.jsxs("div",{children:[e.jsx(j,{title:"Follow us"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"Github"}),e.jsx(t,{href:"#",children:"Discord"})]})]}),e.jsxs("div",{children:[e.jsx(j,{title:"Legal"}),e.jsxs(p,{col:!0,children:[e.jsx(t,{href:"#",children:"Privacy Policy"}),e.jsx(t,{href:"#",children:"Terms & Conditions"})]})]})]})]}),e.jsx(B,{}),e.jsxs("div",{className:"w-full sm:flex sm:items-center sm:justify-between",children:[e.jsx(N,{href:"#",by:"MateriaIM",year:2024}),e.jsxs("div",{className:"mt-4 flex space-x-6 sm:mt-0 sm:justify-center",children:[e.jsx(x,{href:"#",icon:D}),e.jsx(x,{href:"#",icon:I}),e.jsx(x,{href:"#",icon:P}),e.jsx(x,{href:"#",icon:G}),e.jsx(x,{href:"#",icon:A})]})]})]})})]})}),Q=[{to:"/",title:"Home"},{title:"Footer"}],X=[{id:"1",prop:"href",description:"URL the link should navigate to.",type:"'http://localhost:5173'",default:"-"},{id:"2",prop:"src",description:"Image source for the brand logo.",type:"'https://flowbite.com/images/logo.svg'",default:"-"},{id:"3",prop:"alt",description:"Alternative text for the logo image.",type:"'flowbite'",default:"-"},{id:"4",prop:"icon",description:"React icon component (e.g., from react-icons).",type:"'BsFacebook' | 'BsInstagram'",default:"-"},{id:"5",prop:"by",description:"Name of the entity being credited.",type:"'Flowbite'",default:"-"},{id:"6",prop:"year",description:"Year displayed in the copyright.",type:"2022",default:"new Date().getFullYear()"}],ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Footer",items:Q}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(V,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(E,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(K,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(J,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(z,{allApis:X,componentName:"Footer"})})]})]});export{ke as default};
