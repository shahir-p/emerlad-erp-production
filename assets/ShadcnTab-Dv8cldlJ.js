import{j as r}from"./index-CfGLtstz.js";import{C as p}from"./CodeDialog-MEd2hOPr.js";import{C as u}from"./CardBox-DyySzG8n.js";import{B as s}from"./button-D0w4Yy34.js";import{C as t,b as i,c as o,d,a as c,e as n}from"./card-CB9p9-OW.js";import{I as a}from"./input-o0xe4Dnp.js";import{L as e}from"./label-BF96s-ib.js";import{T as h,a as C,b as l,c as m}from"./tabs-CgXxEuop.js";import{B as x}from"./BreadcrumbComp-C5Rb_68r.js";import"./iconify-C7ABZ5uA.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./Card-Bidl-tkB.js";import"./index-DcfOEh4u.js";import"./index-B-YhyF13.js";import"./index-ClgtUdwt.js";import"./index-BUrhjHvi.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";const b=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex items-center gap-3 mt-4",children:r.jsxs(h,{defaultValue:"account",className:"w-[400px]",children:[r.jsxs(C,{className:"grid w-full grid-cols-2 bg-card h-12",children:[r.jsx(l,{value:"account",className:"data-[state=active]:bg-primary data-[state=active]:text-white py-2",children:"Account"}),r.jsx(l,{value:"password",className:"data-[state=active]:bg-primary data-[state=active]:text-white py-2",children:"Password"})]}),r.jsx(m,{value:"account",children:r.jsxs(t,{className:"px-3",children:[r.jsxs(i,{children:[r.jsx(o,{children:"Account"}),r.jsx(d,{children:"Make changes to your account here. Click save when you're done."})]}),r.jsxs(c,{className:"space-y-2",children:[r.jsxs("div",{className:"space-y-1",children:[r.jsx(e,{htmlFor:"name",children:"Name"}),r.jsx(a,{id:"name",defaultValue:"Pedro Duarte"})]}),r.jsxs("div",{className:"space-y-1",children:[r.jsx(e,{htmlFor:"username",children:"Username"}),r.jsx(a,{id:"username",defaultValue:"@peduarte"})]})]}),r.jsx(n,{children:r.jsx(s,{children:"Save changes"})})]})}),r.jsx(m,{value:"password",children:r.jsxs(t,{className:"px-3",children:[r.jsxs(i,{children:[r.jsx(o,{children:"Password"}),r.jsx(d,{children:"Change your password here. After saving, you'll be logged out."})]}),r.jsxs(c,{className:"space-y-2",children:[r.jsxs("div",{className:"space-y-1",children:[r.jsx(e,{htmlFor:"current",children:"Current password"}),r.jsx(a,{id:"current",type:"password"})]}),r.jsxs("div",{className:"space-y-1",children:[r.jsx(e,{htmlFor:"new",children:"New password"}),r.jsx(a,{id:"new",type:"password"})]})]}),r.jsx(n,{children:r.jsx(s,{children:"Save password"})})]})})]})})}),j=`import { Button } from "src/components/shadcn-ui/Default-Ui/button"\r
import {\r
    Card,\r
    CardContent,\r
    CardDescription,\r
    CardFooter,\r
    CardHeader,\r
    CardTitle,\r
} from "src/components/shadcn-ui/Default-Ui/card"\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input"\r
import { Label } from "src/components/shadcn-ui/Default-Ui/label"\r
import {\r
    Tabs,\r
    TabsContent,\r
    TabsList,\r
    TabsTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/tabs"\r
\r
const BasicTabCode = () => {\r
  return (\r
    <>\r
     <div className="flex items-center gap-3 mt-4">\r
                <Tabs defaultValue="account" className="w-[400px]">\r
                    <TabsList className="grid w-full grid-cols-2 bg-card h-12">\r
                        <TabsTrigger value="account" className='data-[state=active]:bg-primary data-[state=active]:text-white py-2'>Account</TabsTrigger>\r
                        <TabsTrigger value="password" className='data-[state=active]:bg-primary data-[state=active]:text-white py-2'>Password</TabsTrigger>\r
                    </TabsList>\r
                    <TabsContent value="account"  >\r
                        <Card className='px-3'>\r
                            <CardHeader>\r
                                <CardTitle>Account</CardTitle>\r
                                <CardDescription>\r
                                    Make changes to your account here. Click save when you're done.\r
                                </CardDescription>\r
                            </CardHeader>\r
                            <CardContent className="space-y-2">\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="name">Name</Label>\r
                                    <Input id="name" defaultValue="Pedro Duarte" />\r
                                </div>\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="username">Username</Label>\r
                                    <Input id="username" defaultValue="@peduarte" />\r
                                </div>\r
                            </CardContent>\r
                            <CardFooter>\r
                                <Button>Save changes</Button>\r
                            </CardFooter>\r
                        </Card>\r
                    </TabsContent>\r
                    <TabsContent value="password" >\r
                        <Card className='px-3' >\r
                            <CardHeader>\r
                                <CardTitle >Password</CardTitle>\r
                                <CardDescription>\r
                                    Change your password here. After saving, you'll be logged out.\r
                                </CardDescription>\r
                            </CardHeader>\r
                            <CardContent className="space-y-2">\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="current">Current password</Label>\r
                                    <Input id="current" type="password" />\r
                                </div>\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="new">New password</Label>\r
                                    <Input id="new" type="password" />\r
                                </div>\r
                            </CardContent>\r
                            <CardFooter>\r
                                <Button>Save password</Button>\r
                            </CardFooter>\r
                        </Card>\r
                    </TabsContent>\r
                </Tabs>\r
\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicTabCode`,g=()=>r.jsx(u,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Tab With Form"}),r.jsx(b,{})]}),r.jsx(p,{children:j})]})}),v=[{to:"/",title:"Home"},{title:"Tab"}],Q=()=>r.jsxs(r.Fragment,{children:[r.jsx(x,{title:"Tab",items:v}),r.jsx("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:r.jsx("div",{className:"col-span-12",children:r.jsx(g,{})})})]});export{Q as default};
