import{r as d,v as re,R as q,j as r,m as Qe}from"./index-CfGLtstz.js";import{C as W}from"./CardBox-DyySzG8n.js";import{$ as lt,a as dt}from"./useFocusRing-Dysd-fso.js";import{w as gt}from"./use-active-press-BrBzUP4y.js";import{u as yt}from"./use-by-comparator-C1PEzgYf.js";import{l as wt,b as Ct}from"./use-default-value-CGeWVi8p.js";import{o as R,u as de,Y as ve,n as ae,K as ge,A as He,V as Ve,p as St,a as jt,c as kt}from"./render-CZr0IE3h.js";import{A as Ot,F as Pt,y as Nt,R as Et,T as It,w as Ue}from"./floating-9THdR4c5.js";import{p as Tt,c as fe,a as M,f as Ge,b as Rt,L as $t,S as be,s as Mt,g as Ft,u as Dt}from"./element-movement-C4pISrAp.js";import{y as At}from"./use-inert-others-BKfeoqKB.js";import{T as Lt,x as ct,b as zt,c as Kt,S as F,k as Wt,u as Xe,p as Vt,f as Bt,t as _t,n as qt}from"./portal-Dru_yKl3.js";import{l as Ye,n as Qt}from"./dom-BlW_0b_t.js";import{d as ut}from"./owner-Dk1fjd6m.js";import{E as Ht}from"./use-event-listener-BkB9I5oq.js";import{e as Ut}from"./use-resolve-button-type-DWEvW3J-.js";import{n as ye}from"./use-slot-BBOf4H17.js";import{y as je}from"./use-sync-refs-suQn1iCl.js";import{c as Gt,i as Se,u as Xt,N as Yt,x as Jt}from"./open-closed-CJbBhe81.js";import{F as Zt}from"./use-tree-walker-CsdFfqkV.js";import{m as Je,n as Ze}from"./active-element-history-Cpcool_p.js";import{a as en}from"./disabled-u174kIKb.js";import{j as tn,W as ce}from"./field-naNkeukv.js";import{u as et,s as nn}from"./frozen-CuL4r4BV.js";import{Z as ke,V as on,N as Be,u as sn}from"./label-BUMi_y51.js";import{w as rn}from"./description-D8VhVtbs.js";import{o as G}from"./keyboard-C1Wiwm26.js";import{G as an}from"./focus-management-B4LKc7xF.js";import{C as ue}from"./CodeDialog-MEd2hOPr.js";import{I as tt}from"./iconify-C7ABZ5uA.js";import{A as ln,m as dn}from"./proxy-Cm0YI1Q4.js";import{B as cn}from"./BreadcrumbComp-C5Rb_68r.js";import"./Card-Bidl-tkB.js";import"./resolve-theme-DSwo52RB.js";import"./floating-ui.react-dom-BL2SThnu.js";import"./bugs-BJ7ScNGK.js";import"./hidden-BE5boBKY.js";import"./index-Cg_7LaNP.js";import"./Tooltip-BIt1YLVa.js";import"./floating-ui.react-Bp1bm6ZA.js";import"./use-floating-WjiIIaI9.js";import"./vsc-dark-plus-CaALPQDR.js";import"./createReactComponent-D4LhIROw.js";import"./index-C1v8dAYa.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-zTlTfnsS.js";import"./Badge-CN-1CXXU.js";function le(n,a,e){let s=e.initialDeps??[],o,t=!0;function i(){var l,u,c;let h;e.key&&((l=e.debug)!=null&&l.call(e))&&(h=Date.now());const g=n();if(!(g.length!==s.length||g.some((p,x)=>s[x]!==p)))return o;s=g;let b;if(e.key&&((u=e.debug)!=null&&u.call(e))&&(b=Date.now()),o=a(...g),e.key&&((c=e.debug)!=null&&c.call(e))){const p=Math.round((Date.now()-h)*100)/100,x=Math.round((Date.now()-b)*100)/100,y=x/16,N=(E,I)=>{for(E=String(E);E.length<I;)E=" "+E;return E};console.info(`%c⏱ ${N(x,5)} /${N(p,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*y,120))}deg 100% 31%);`,e==null?void 0:e.key)}return e!=null&&e.onChange&&!(t&&e.skipInitialOnChange)&&e.onChange(o),t=!1,o}return i.updateDeps=l=>{s=l},i}function nt(n,a){if(n===void 0)throw new Error("Unexpected undefined");return n}const un=(n,a)=>Math.abs(n-a)<1.01,mn=(n,a,e)=>{let s;return function(...o){n.clearTimeout(s),s=n.setTimeout(()=>a.apply(this,o),e)}},ot=n=>{const{offsetWidth:a,offsetHeight:e}=n;return{width:a,height:e}},hn=n=>n,pn=n=>{const a=Math.max(n.startIndex-n.overscan,0),e=Math.min(n.endIndex+n.overscan,n.count-1),s=[];for(let o=a;o<=e;o++)s.push(o);return s},bn=(n,a)=>{const e=n.scrollElement;if(!e)return;const s=n.targetWindow;if(!s)return;const o=i=>{const{width:l,height:u}=i;a({width:Math.round(l),height:Math.round(u)})};if(o(ot(e)),!s.ResizeObserver)return()=>{};const t=new s.ResizeObserver(i=>{const l=()=>{const u=i[0];if(u!=null&&u.borderBoxSize){const c=u.borderBoxSize[0];if(c){o({width:c.inlineSize,height:c.blockSize});return}}o(ot(e))};n.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(l):l()});return t.observe(e,{box:"border-box"}),()=>{t.unobserve(e)}},st={passive:!0},rt=typeof window>"u"?!0:"onscrollend"in window,fn=(n,a)=>{const e=n.scrollElement;if(!e)return;const s=n.targetWindow;if(!s)return;let o=0;const t=n.options.useScrollendEvent&&rt?()=>{}:mn(s,()=>{a(o,!1)},n.options.isScrollingResetDelay),i=h=>()=>{const{horizontal:g,isRtl:m}=n.options;o=g?e.scrollLeft*(m&&-1||1):e.scrollTop,t(),a(o,h)},l=i(!0),u=i(!1);e.addEventListener("scroll",l,st);const c=n.options.useScrollendEvent&&rt;return c&&e.addEventListener("scrollend",u,st),()=>{e.removeEventListener("scroll",l),c&&e.removeEventListener("scrollend",u)}},xn=(n,a,e)=>{if(a!=null&&a.borderBoxSize){const s=a.borderBoxSize[0];if(s)return Math.round(s[e.options.horizontal?"inlineSize":"blockSize"])}return n[e.options.horizontal?"offsetWidth":"offsetHeight"]},vn=(n,{adjustments:a=0,behavior:e},s)=>{var o,t;const i=n+a;(t=(o=s.scrollElement)==null?void 0:o.scrollTo)==null||t.call(o,{[s.options.horizontal?"left":"top"]:i,behavior:e})};class gn{constructor(a){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.currentScrollToIndex=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.laneAssignments=new Map,this.pendingMeasuredCacheIndexes=[],this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null;const s=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(o=>{o.forEach(t=>{const i=()=>{this._measureElement(t.target,t)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(i):i()})}));return{disconnect:()=>{var o;(o=s())==null||o.disconnect(),e=null},observe:o=>{var t;return(t=s())==null?void 0:t.observe(o,{box:"border-box"})},unobserve:o=>{var t;return(t=s())==null?void 0:t.unobserve(o)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([s,o])=>{typeof o>"u"&&delete e[s]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:hn,rangeExtractor:pn,onChange:()=>{},measureElement:xn,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var s,o;(o=(s=this.options).onChange)==null||o.call(s,this,e)},this.maybeNotify=le(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const s=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==s){if(this.cleanup(),!s){this.maybeNotify();return}this.scrollElement=s,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((e=this.scrollElement)==null?void 0:e.window)??null,this.elementsCache.forEach(o=>{this.observer.observe(o)}),this.unsubs.push(this.options.observeElementRect(this,o=>{this.scrollRect=o,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(o,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<o?"forward":"backward":null,this.scrollOffset=o,this.isScrolling=t,this.maybeNotify()})),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,s)=>{const o=new Map,t=new Map;for(let i=s-1;i>=0;i--){const l=e[i];if(o.has(l.lane))continue;const u=t.get(l.lane);if(u==null||l.end>u.end?t.set(l.lane,l):l.end<u.end&&o.set(l.lane,!0),o.size===this.options.lanes)break}return t.size===this.options.lanes?Array.from(t.values()).sort((i,l)=>i.end===l.end?i.index-l.index:i.end-l.end)[0]:void 0},this.getMeasurementOptions=le(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes],(e,s,o,t,i,l)=>(this.prevLanes!==void 0&&this.prevLanes!==l&&(this.lanesChangedFlag=!0),this.prevLanes=l,this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:s,scrollMargin:o,getItemKey:t,enabled:i,lanes:l}),{key:!1}),this.getMeasurements=le(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:s,scrollMargin:o,getItemKey:t,enabled:i,lanes:l},u)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(const m of this.laneAssignments.keys())m>=e&&this.laneAssignments.delete(m);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMeasuredCacheIndexes=[]),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(m=>{this.itemSizeCache.set(m.key,m.size)}));const c=this.lanesSettling?0:this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[],this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1);const h=this.measurementsCache.slice(0,c),g=new Array(l).fill(void 0);for(let m=0;m<c;m++){const b=h[m];b&&(g[b.lane]=m)}for(let m=c;m<e;m++){const b=t(m),p=this.laneAssignments.get(m);let x,y;if(p!==void 0&&this.options.lanes>1){x=p;const S=g[x],z=S!==void 0?h[S]:void 0;y=z?z.end+this.options.gap:s+o}else{const S=this.options.lanes===1?h[m-1]:this.getFurthestMeasurement(h,m);y=S?S.end+this.options.gap:s+o,x=S?S.lane:m%this.options.lanes,this.options.lanes>1&&this.laneAssignments.set(m,x)}const N=u.get(b),E=typeof N=="number"?N:this.options.estimateSize(m),I=y+E;h[m]={index:m,start:y,size:E,end:I,key:b,lane:x},g[x]=m}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=le(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,s,o,t)=>this.range=e.length>0&&s>0?yn({measurements:e,outerSize:s,scrollOffset:o,lanes:t}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=le(()=>{let e=null,s=null;const o=this.calculateRange();return o&&(e=o.startIndex,s=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,s]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,s]},(e,s,o,t,i)=>t===null||i===null?[]:e({startIndex:t,endIndex:i,overscan:s,count:o}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const s=this.options.indexAttribute,o=e.getAttribute(s);return o?parseInt(o,10):(console.warn(`Missing attribute name '${s}={index}' on measured element.`),-1)},this._measureElement=(e,s)=>{const o=this.indexFromElement(e),t=this.measurementsCache[o];if(!t)return;const i=t.key,l=this.elementsCache.get(i);l!==e&&(l&&this.observer.unobserve(l),this.observer.observe(e),this.elementsCache.set(i,e)),e.isConnected&&this.resizeItem(o,this.options.measureElement(e,s,this))},this.resizeItem=(e,s)=>{const o=this.measurementsCache[e];if(!o)return;const t=this.itemSizeCache.get(o.key)??o.size,i=s-t;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(o,i,this):o.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(o.index),this.itemSizeCache=new Map(this.itemSizeCache.set(o.key,s)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((s,o)=>{s.isConnected||(this.observer.unobserve(s),this.elementsCache.delete(o))});return}this._measureElement(e,void 0)},this.getVirtualItems=le(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,s)=>{const o=[];for(let t=0,i=e.length;t<i;t++){const l=e[t],u=s[l];o.push(u)}return o},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const s=this.getMeasurements();if(s.length!==0)return nt(s[mt(0,s.length-1,o=>nt(s[o]).start,e)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{const e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getOffsetForAlignment=(e,s,o=0)=>{if(!this.scrollElement)return 0;const t=this.getSize(),i=this.getScrollOffset();s==="auto"&&(s=e>=i+t?"end":"start"),s==="center"?e+=(o-t)/2:s==="end"&&(e-=t);const l=this.getMaxScrollOffset();return Math.max(Math.min(l,e),0)},this.getOffsetForIndex=(e,s="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const o=this.measurementsCache[e];if(!o)return;const t=this.getSize(),i=this.getScrollOffset();if(s==="auto")if(o.end>=i+t-this.options.scrollPaddingEnd)s="end";else if(o.start<=i+this.options.scrollPaddingStart)s="start";else return[i,s];if(s==="end"&&e===this.options.count-1)return[this.getMaxScrollOffset(),s];const l=s==="end"?o.end+this.options.scrollPaddingEnd:o.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,s,o.size),s]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(e,{align:s="start",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,s),{adjustments:void 0,behavior:o})},this.scrollToIndex=(e,{align:s="auto",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e=Math.max(0,Math.min(e,this.options.count-1)),this.currentScrollToIndex=e;let t=0;const i=10,l=c=>{if(!this.targetWindow)return;const h=this.getOffsetForIndex(e,c);if(!h){console.warn("Failed to get offset for index:",e);return}const[g,m]=h;this._scrollToOffset(g,{adjustments:void 0,behavior:o}),this.targetWindow.requestAnimationFrame(()=>{const b=()=>{if(this.currentScrollToIndex!==e)return;const p=this.getScrollOffset(),x=this.getOffsetForIndex(e,m);if(!x){console.warn("Failed to get offset for index:",e);return}un(x[0],p)||u(m)};this.isDynamicMode()?this.targetWindow.requestAnimationFrame(b):b()})},u=c=>{this.targetWindow&&this.currentScrollToIndex===e&&(t++,t<i?this.targetWindow.requestAnimationFrame(()=>l(c)):console.warn(`Failed to scroll to index ${e} after ${i} attempts.`))};l(s)},this.scrollBy=(e,{behavior:s}={})=>{s==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:s})},this.getTotalSize=()=>{var e;const s=this.getMeasurements();let o;if(s.length===0)o=this.options.paddingStart;else if(this.options.lanes===1)o=((e=s[s.length-1])==null?void 0:e.end)??0;else{const t=Array(this.options.lanes).fill(null);let i=s.length-1;for(;i>=0&&t.some(l=>l===null);){const l=s[i];t[l.lane]===null&&(t[l.lane]=l.end),i--}o=Math.max(...t.filter(l=>l!==null))}return Math.max(o-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:s,behavior:o})=>{this.options.scrollToFn(e,{behavior:o,adjustments:s},this)},this.measure=()=>{this.itemSizeCache=new Map,this.laneAssignments=new Map,this.notify(!1)},this.setOptions(a)}}const mt=(n,a,e,s)=>{for(;n<=a;){const o=(n+a)/2|0,t=e(o);if(t<s)n=o+1;else if(t>s)a=o-1;else return o}return n>0?n-1:0};function yn({measurements:n,outerSize:a,scrollOffset:e,lanes:s}){const o=n.length-1,t=u=>n[u].start;if(n.length<=s)return{startIndex:0,endIndex:o};let i=mt(0,o,t,e),l=i;if(s===1)for(;l<o&&n[l].end<e+a;)l++;else if(s>1){const u=Array(s).fill(0);for(;l<o&&u.some(h=>h<e+a);){const h=n[l];u[h.lane]=h.end,l++}const c=Array(s).fill(e+a);for(;i>=0&&c.some(h=>h>=e);){const h=n[i];c[h.lane]=h.start,i--}i=Math.max(0,i-i%s),l=Math.min(o,l+(s-1-l%s))}return{startIndex:i,endIndex:l}}const at=typeof document<"u"?d.useLayoutEffect:d.useEffect;function wn({useFlushSync:n=!0,...a}){const e=d.useReducer(()=>({}),{})[1],s={...a,onChange:(t,i)=>{var l;n&&i?re.flushSync(e):e(),(l=a.onChange)==null||l.call(a,t,i)}},[o]=d.useState(()=>new gn(s));return o.setOptions(s),at(()=>o._didMount(),[]),at(()=>o._willUpdate()),o}function Cn(n){return wn({observeElementRect:bn,observeElementOffset:fn,scrollToFn:vn,...n})}function ht(n){let a=d.useRef({value:"",selectionStart:null,selectionEnd:null});return Ht(n,"blur",e=>{let s=e.target;Ye(s)&&(a.current={value:s.value,selectionStart:s.selectionStart,selectionEnd:s.selectionEnd})}),R(()=>{if(!ut(n)&&Ye(n)&&n.isConnected){if(n.focus({preventScroll:!0}),n.value!==a.current.value)n.setSelectionRange(n.value.length,n.value.length);else{let{selectionStart:e,selectionEnd:s}=a.current;e!==null&&s!==null&&n.setSelectionRange(e,s)}a.current={value:"",selectionStart:null,selectionEnd:null}}})}var Sn=Object.defineProperty,jn=(n,a,e)=>a in n?Sn(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,it=(n,a,e)=>(jn(n,typeof a!="symbol"?a+"":a,e),e),v=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(v||{}),Y=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(Y||{}),te=(n=>(n[n.Pointer=0]="Pointer",n[n.Focus=1]="Focus",n[n.Other=2]="Other",n))(te||{}),pt=(n=>(n[n.OpenCombobox=0]="OpenCombobox",n[n.CloseCombobox=1]="CloseCombobox",n[n.GoToOption=2]="GoToOption",n[n.SetTyping=3]="SetTyping",n[n.RegisterOption=4]="RegisterOption",n[n.UnregisterOption=5]="UnregisterOption",n[n.DefaultToFirstOption=6]="DefaultToFirstOption",n[n.SetActivationTrigger=7]="SetActivationTrigger",n[n.UpdateVirtualConfiguration=8]="UpdateVirtualConfiguration",n[n.SetInputElement=9]="SetInputElement",n[n.SetButtonElement=10]="SetButtonElement",n[n.SetOptionsElement=11]="SetOptionsElement",n[n.MarkInputAsMoved=12]="MarkInputAsMoved",n))(pt||{});function Oe(n,a=e=>e){let e=n.activeOptionIndex!==null?n.options[n.activeOptionIndex]:null,s=a(n.options.slice()),o=s.length>0&&s[0].dataRef.current.order!==null?s.sort((i,l)=>i.dataRef.current.order-l.dataRef.current.order):an(s,i=>i.dataRef.current.domRef.current),t=e?o.indexOf(e):null;return t===-1&&(t=null),{options:o,activeOptionIndex:t}}let kn={1(n){var a;if((a=n.dataRef.current)!=null&&a.disabled||n.comboboxState===1)return n;let e=n.inputElement?fe.Tracked(Rt(n.inputElement)):n.inputPositionState;return{...n,activeOptionIndex:null,comboboxState:1,isTyping:!1,activationTrigger:2,inputPositionState:e,__demoMode:!1}},0(n){var a,e;if((a=n.dataRef.current)!=null&&a.disabled||n.comboboxState===0)return n;if((e=n.dataRef.current)!=null&&e.value){let s=n.dataRef.current.calculateIndex(n.dataRef.current.value);if(s!==-1)return{...n,activeOptionIndex:s,comboboxState:0,__demoMode:!1,inputPositionState:fe.Idle}}return{...n,comboboxState:0,inputPositionState:fe.Idle,__demoMode:!1}},3(n,a){return n.isTyping===a.isTyping?n:{...n,isTyping:a.isTyping}},2(n,a){var e,s,o,t;if((e=n.dataRef.current)!=null&&e.disabled||n.optionsElement&&!((s=n.dataRef.current)!=null&&s.optionsPropsRef.current.static)&&n.comboboxState===1)return n;if(n.virtual){let{options:c,disabled:h}=n.virtual,g=a.focus===M.Specific?a.idx:Ge(a,{resolveItems:()=>c,resolveActiveIndex:()=>{var b,p;return(p=(b=n.activeOptionIndex)!=null?b:c.findIndex(x=>!h(x)))!=null?p:null},resolveDisabled:h,resolveId(){throw new Error("Function not implemented.")}}),m=(o=a.trigger)!=null?o:2;return n.activeOptionIndex===g&&n.activationTrigger===m?n:{...n,activeOptionIndex:g,activationTrigger:m,isTyping:!1,__demoMode:!1}}let i=Oe(n);if(i.activeOptionIndex===null){let c=i.options.findIndex(h=>!h.dataRef.current.disabled);c!==-1&&(i.activeOptionIndex=c)}let l=a.focus===M.Specific?a.idx:Ge(a,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled}),u=(t=a.trigger)!=null?t:2;return n.activeOptionIndex===l&&n.activationTrigger===u?n:{...n,...i,isTyping:!1,activeOptionIndex:l,activationTrigger:u,__demoMode:!1}},4:(n,a)=>{var e,s,o,t;if((e=n.dataRef.current)!=null&&e.virtual)return{...n,options:[...n.options,a.payload]};let i=a.payload,l=Oe(n,c=>(c.push(i),c));n.activeOptionIndex===null&&(o=(s=n.dataRef.current).isSelected)!=null&&o.call(s,a.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(i));let u={...n,...l,activationTrigger:2};return(t=n.dataRef.current)!=null&&t.__demoMode&&n.dataRef.current.value===void 0&&(u.activeOptionIndex=0),u},5:(n,a)=>{var e;if((e=n.dataRef.current)!=null&&e.virtual)return{...n,options:n.options.filter(o=>o.id!==a.id)};let s=Oe(n,o=>{let t=o.findIndex(i=>i.id===a.id);return t!==-1&&o.splice(t,1),o});return{...n,...s,activationTrigger:2}},6:(n,a)=>n.defaultToFirstOption===a.value?n:{...n,defaultToFirstOption:a.value},7:(n,a)=>n.activationTrigger===a.trigger?n:{...n,activationTrigger:a.trigger},8:(n,a)=>{var e,s;if(n.virtual===null)return{...n,virtual:{options:a.options,disabled:(e=a.disabled)!=null?e:()=>!1}};if(n.virtual.options===a.options&&n.virtual.disabled===a.disabled)return n;let o=n.activeOptionIndex;if(n.activeOptionIndex!==null){let t=a.options.indexOf(n.virtual.options[n.activeOptionIndex]);t!==-1?o=t:o=null}return{...n,activeOptionIndex:o,virtual:{options:a.options,disabled:(s=a.disabled)!=null?s:()=>!1}}},9:(n,a)=>n.inputElement===a.element?n:{...n,inputElement:a.element},10:(n,a)=>n.buttonElement===a.element?n:{...n,buttonElement:a.element},11:(n,a)=>n.optionsElement===a.element?n:{...n,optionsElement:a.element},12(n){return n.inputPositionState.kind!=="Tracked"?n:{...n,inputPositionState:fe.Moved}}};class _e extends Lt{constructor(a){super(a),it(this,"actions",{onChange:e=>{let{onChange:s,compare:o,mode:t,value:i}=this.state.dataRef.current;return de(t,{0:()=>s==null?void 0:s(e),1:()=>{let l=i.slice(),u=l.findIndex(c=>o(c,e));return u===-1?l.push(e):l.splice(u,1),s==null?void 0:s(l)}})},registerOption:(e,s)=>(this.send({type:4,payload:{id:e,dataRef:s}}),()=>{this.state.activeOptionIndex===this.state.dataRef.current.calculateIndex(s.current.value)&&this.send({type:6,value:!0}),this.send({type:5,id:e})}),goToOption:(e,s)=>(this.send({type:6,value:!1}),this.send({type:2,...e,trigger:s})),setIsTyping:e=>{this.send({type:3,isTyping:e})},closeCombobox:()=>{var e,s;this.send({type:1}),this.send({type:6,value:!1}),(s=(e=this.state.dataRef.current).onClose)==null||s.call(e)},openCombobox:()=>{this.send({type:0}),this.send({type:6,value:!0})},setActivationTrigger:e=>{this.send({type:7,trigger:e})},selectActiveOption:()=>{let e=this.selectors.activeOptionIndex(this.state);if(e!==null){if(this.actions.setIsTyping(!1),this.state.virtual)this.actions.onChange(this.state.virtual.options[e]);else{let{dataRef:s}=this.state.options[e];this.actions.onChange(s.current.value)}this.actions.goToOption({focus:M.Specific,idx:e})}},setInputElement:e=>{this.send({type:9,element:e})},setButtonElement:e=>{this.send({type:10,element:e})},setOptionsElement:e=>{this.send({type:11,element:e})}}),it(this,"selectors",{activeDescendantId:e=>{var s,o;let t=this.selectors.activeOptionIndex(e);if(t!==null)return e.virtual?(o=e.options.find(i=>!i.dataRef.current.disabled&&e.dataRef.current.compare(i.dataRef.current.value,e.virtual.options[t])))==null?void 0:o.id:(s=e.options[t])==null?void 0:s.id},activeOptionIndex:e=>{if(e.defaultToFirstOption&&e.activeOptionIndex===null&&(e.virtual?e.virtual.options.length>0:e.options.length>0)){if(e.virtual){let{options:o,disabled:t}=e.virtual,i=o.findIndex(l=>{var u;return!((u=t==null?void 0:t(l))!=null&&u)});if(i!==-1)return i}let s=e.options.findIndex(o=>!o.dataRef.current.disabled);if(s!==-1)return s}return e.activeOptionIndex},activeOption:e=>{var s,o;let t=this.selectors.activeOptionIndex(e);return t===null?null:e.virtual?e.virtual.options[t??0]:(o=(s=e.options[t])==null?void 0:s.dataRef.current.value)!=null?o:null},isActive:(e,s,o)=>{var t;let i=this.selectors.activeOptionIndex(e);return i===null?!1:e.virtual?i===e.dataRef.current.calculateIndex(s):((t=e.options[i])==null?void 0:t.id)===o},shouldScrollIntoView:(e,s,o)=>!(e.virtual||e.__demoMode||e.comboboxState!==0||e.activationTrigger===0||!this.selectors.isActive(e,s,o)),didInputMove(e){return e.inputPositionState.kind==="Moved"}});{let e=this.state.id,s=ct.get(null);this.disposables.add(s.on(zt.Push,o=>{!s.selectors.isTop(o,e)&&this.state.comboboxState===0&&this.actions.closeCombobox()})),this.on(0,()=>s.actions.push(e)),this.on(1,()=>s.actions.pop(e))}this.disposables.group(e=>{this.on(1,s=>{s.inputElement&&(e.dispose(),e.add(Tt(s.inputElement,s.inputPositionState,()=>{this.send({type:12})})))})})}static new({id:a,virtual:e=null,__demoMode:s=!1}){var o;return new _e({id:a,dataRef:{current:{}},comboboxState:s?0:1,isTyping:!1,options:[],virtual:e?{options:e.options,disabled:(o=e.disabled)!=null?o:()=>!1}:null,activeOptionIndex:null,activationTrigger:2,inputElement:null,buttonElement:null,optionsElement:null,__demoMode:s,inputPositionState:fe.Idle})}reduce(a,e){return de(e.type,kn,a,e)}}const bt=d.createContext(null);function we(n){let a=d.useContext(bt);if(a===null){let e=new Error(`<${n} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,ft),e}return a}function ft({id:n,virtual:a=null,__demoMode:e=!1}){let s=d.useMemo(()=>_e.new({id:n,virtual:a,__demoMode:e}),[]);return Kt(()=>s.dispose()),s}let xe=d.createContext(null);xe.displayName="ComboboxDataContext";function me(n){let a=d.useContext(xe);if(a===null){let e=new Error(`<${n} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,me),e}return a}let xt=d.createContext(null);function On(n){let a=we("VirtualProvider"),e=me("VirtualProvider"),{options:s}=e.virtual,o=F(a,b=>b.optionsElement),[t,i]=d.useMemo(()=>{let b=o;if(!b)return[0,0];let p=window.getComputedStyle(b);return[parseFloat(p.paddingBlockStart||p.paddingTop),parseFloat(p.paddingBlockEnd||p.paddingBottom)]},[o]),l=Cn({enabled:s.length!==0,scrollPaddingStart:t,scrollPaddingEnd:i,count:s.length,estimateSize(){return 40},getScrollElement(){return a.state.optionsElement},overscan:12}),[u,c]=d.useState(0);ae(()=>{c(b=>b+1)},[s]);let h=l.getVirtualItems(),g=F(a,b=>b.activationTrigger===te.Pointer),m=F(a,a.selectors.activeOptionIndex);return h.length===0?null:q.createElement(xt.Provider,{value:l},q.createElement("div",{style:{position:"relative",width:"100%",height:`${l.getTotalSize()}px`},ref:b=>{b&&(g||m!==null&&s.length>m&&l.scrollToIndex(m))}},h.map(b=>{var p;return q.createElement(d.Fragment,{key:b.key},q.cloneElement((p=n.children)==null?void 0:p.call(n,{...n.slot,option:s[b.index]}),{key:`${u}-${b.key}`,"data-index":b.index,"aria-setsize":s.length,"aria-posinset":b.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${b.start}px)`,overflowAnchor:"none"}}))})))}let Pn=d.Fragment;function Nn(n,a){let e=d.useId(),s=en(),{value:o,defaultValue:t,onChange:i,form:l,name:u,by:c,invalid:h=!1,disabled:g=s||!1,onClose:m,__demoMode:b=!1,multiple:p=!1,immediate:x=!1,virtual:y=null,nullable:N,...E}=n,I=wt(t),[S=p?[]:void 0,z]=Ct(o,i,I),C=ft({id:e,virtual:y,__demoMode:b}),Q=d.useRef({static:!1,hold:!1}),T=yt(c),B=R(k=>y?c===null?y.options.indexOf(k):y.options.findIndex(se=>T(se,k)):C.state.options.findIndex(se=>T(se.dataRef.current.value,k))),Z=d.useCallback(k=>de(H.mode,{[Y.Multi]:()=>S.some(se=>T(se,k)),[Y.Single]:()=>T(S,k)}),[S]),ee=F(C,k=>k.virtual),w=R(()=>m==null?void 0:m()),H=d.useMemo(()=>({__demoMode:b,immediate:x,optionsPropsRef:Q,value:S,defaultValue:I,disabled:g,invalid:h,mode:p?Y.Multi:Y.Single,virtual:y?ee:null,onChange:z,isSelected:Z,calculateIndex:B,compare:T,onClose:w}),[b,x,Q,S,I,g,h,p,y,ee,z,Z,B,T,w]);ae(()=>{var k;y&&C.send({type:pt.UpdateVirtualConfiguration,options:y.options,disabled:(k=y.disabled)!=null?k:null})},[y,y==null?void 0:y.options,y==null?void 0:y.disabled]),ae(()=>{C.state.dataRef.current=H},[H]);let[U,j,J,he]=F(C,k=>[k.comboboxState,k.buttonElement,k.inputElement,k.optionsElement]),ne=ct.get(null),ie=F(ne,d.useCallback(k=>ne.selectors.isTop(k,e),[ne,e]));Wt(ie,[j,J,he],()=>C.actions.closeCombobox());let oe=F(C,C.selectors.activeOptionIndex),pe=F(C,C.selectors.activeOption),f=ye({open:U===v.Open,disabled:g,invalid:h,activeIndex:oe,activeOption:pe,value:S}),[X,P]=on(),K=a===null?{}:{ref:a},O=d.useCallback(()=>{if(I!==void 0)return z==null?void 0:z(I)},[z,I]),_=ge();return q.createElement(P,{value:X,props:{htmlFor:J==null?void 0:J.id},slot:{open:U===v.Open,disabled:g}},q.createElement(Ot,null,q.createElement(xe.Provider,{value:H},q.createElement(bt.Provider,{value:C},q.createElement(Gt,{value:de(U,{[v.Open]:Se.Open,[v.Closed]:Se.Closed})},u!=null&&q.createElement(tn,{disabled:g,data:S!=null?{[u]:S}:{},form:l,onReset:O}),_({ourProps:K,theirProps:E,slot:f,defaultTag:Pn,name:"Combobox"}))))))}let En="input";function In(n,a){var e,s;let o=we("Combobox.Input"),t=me("Combobox.Input"),i=d.useId(),l=sn(),{id:u=l||`headlessui-combobox-input-${i}`,onChange:c,displayValue:h,disabled:g=t.disabled||!1,autoFocus:m=!1,type:b="text",...p}=n,x=d.useRef(null),y=je(x,a,Pt(),o.actions.setInputElement),[N,E]=F(o,f=>[f.comboboxState,f.isTyping]),I=St(),S=R(()=>{o.actions.onChange(null),o.state.optionsElement&&(o.state.optionsElement.scrollTop=0),o.actions.goToOption({focus:M.Nothing})}),z=d.useMemo(()=>{var f;return typeof h=="function"&&t.value!==void 0?(f=h(t.value))!=null?f:"":typeof t.value=="string"?t.value:""},[t.value,h]);Je(([f,X],[P,K])=>{if(o.state.isTyping)return;let O=x.current;O&&((K===v.Open&&X===v.Closed||f!==P)&&(O.value=f),requestAnimationFrame(()=>{if(o.state.isTyping||!O||ut(O))return;let{selectionStart:_,selectionEnd:k}=O;Math.abs((k??0)-(_??0))===0&&_===0&&O.setSelectionRange(O.value.length,O.value.length)}))},[z,N,E]),Je(([f],[X])=>{if(f===v.Open&&X===v.Closed){if(o.state.isTyping)return;let P=x.current;if(!P)return;let K=P.value,{selectionStart:O,selectionEnd:_,selectionDirection:k}=P;P.value="",P.value=K,k!==null?P.setSelectionRange(O,_,k):P.setSelectionRange(O,_)}},[N]);let C=d.useRef(!1),Q=R(()=>{C.current=!0}),T=R(()=>{I.nextFrame(()=>{C.current=!1})}),B=R(f=>{switch(o.actions.setIsTyping(!0),f.key){case G.Enter:if(o.state.comboboxState!==v.Open||C.current)return;if(f.preventDefault(),f.stopPropagation(),o.selectors.activeOptionIndex(o.state)===null){o.actions.closeCombobox();return}o.actions.selectActiveOption(),t.mode===Y.Single&&o.actions.closeCombobox();break;case G.ArrowDown:return f.preventDefault(),f.stopPropagation(),de(o.state.comboboxState,{[v.Open]:()=>o.actions.goToOption({focus:M.Next}),[v.Closed]:()=>o.actions.openCombobox()});case G.ArrowUp:return f.preventDefault(),f.stopPropagation(),de(o.state.comboboxState,{[v.Open]:()=>o.actions.goToOption({focus:M.Previous}),[v.Closed]:()=>{re.flushSync(()=>o.actions.openCombobox()),t.value||o.actions.goToOption({focus:M.Last})}});case G.Home:if(o.state.comboboxState===v.Closed||f.shiftKey)break;return f.preventDefault(),f.stopPropagation(),o.actions.goToOption({focus:M.First});case G.PageUp:return f.preventDefault(),f.stopPropagation(),o.actions.goToOption({focus:M.First});case G.End:if(o.state.comboboxState===v.Closed||f.shiftKey)break;return f.preventDefault(),f.stopPropagation(),o.actions.goToOption({focus:M.Last});case G.PageDown:return f.preventDefault(),f.stopPropagation(),o.actions.goToOption({focus:M.Last});case G.Escape:return o.state.comboboxState!==v.Open?void 0:(f.preventDefault(),o.state.optionsElement&&!t.optionsPropsRef.current.static&&f.stopPropagation(),t.mode===Y.Single&&t.value===null&&S(),o.actions.closeCombobox());case G.Tab:if(o.actions.setIsTyping(!1),o.state.comboboxState!==v.Open)return;t.mode===Y.Single&&o.state.activationTrigger!==te.Focus&&o.actions.selectActiveOption(),o.actions.closeCombobox();break}}),Z=R(f=>{c==null||c(f),t.mode===Y.Single&&f.target.value===""&&S(),o.actions.openCombobox()}),ee=R(f=>{var X,P,K;let O=(X=f.relatedTarget)!=null?X:Ze.find(_=>_!==f.currentTarget);if(!((P=o.state.optionsElement)!=null&&P.contains(O))&&!((K=o.state.buttonElement)!=null&&K.contains(O))&&o.state.comboboxState===v.Open)return f.preventDefault(),t.mode===Y.Single&&t.value===null&&S(),o.actions.closeCombobox()}),w=R(f=>{var X,P,K;let O=(X=f.relatedTarget)!=null?X:Ze.find(_=>_!==f.currentTarget);(P=o.state.buttonElement)!=null&&P.contains(O)||(K=o.state.optionsElement)!=null&&K.contains(O)||t.disabled||t.immediate&&o.state.comboboxState!==v.Open&&I.microTask(()=>{re.flushSync(()=>o.actions.openCombobox()),o.actions.setActivationTrigger(te.Focus)})}),H=Be(),U=rn(),{isFocused:j,focusProps:J}=lt({autoFocus:m}),{isHovered:he,hoverProps:ne}=dt({isDisabled:g}),ie=F(o,f=>f.optionsElement),oe=ye({open:N===v.Open,disabled:g,invalid:t.invalid,hover:he,focus:j,autofocus:m}),pe=Ve({ref:y,id:u,role:"combobox",type:b,"aria-controls":ie==null?void 0:ie.id,"aria-expanded":N===v.Open,"aria-activedescendant":F(o,o.selectors.activeDescendantId),"aria-labelledby":H,"aria-describedby":U,"aria-autocomplete":"list",defaultValue:(s=(e=n.defaultValue)!=null?e:t.defaultValue!==void 0?h==null?void 0:h(t.defaultValue):null)!=null?s:t.defaultValue,disabled:g||void 0,autoFocus:m,onCompositionStart:Q,onCompositionEnd:T,onKeyDown:B,onChange:Z,onFocus:w,onBlur:ee},J,ne);return ge()({ourProps:pe,theirProps:p,slot:oe,defaultTag:En,name:"Combobox.Input"})}let Tn="button";function Rn(n,a){let e=we("Combobox.Button"),s=me("Combobox.Button"),[o,t]=d.useState(null),i=je(a,t,e.actions.setButtonElement),l=d.useId(),{id:u=`headlessui-combobox-button-${l}`,disabled:c=s.disabled||!1,autoFocus:h=!1,...g}=n,[m,b,p]=F(e,w=>[w.comboboxState,w.inputElement,w.optionsElement]),x=ht(b),y=m===v.Open;$t(y,{trigger:o,action:d.useCallback(w=>{if(o!=null&&o.contains(w.target))return be.Ignore;if(b!=null&&b.contains(w.target))return be.Ignore;let H=w.target.closest('[role="option"]:not([data-disabled])');return Qt(H)?be.Select(H):p!=null&&p.contains(w.target)?be.Ignore:be.Close},[o,b,p]),close:e.actions.closeCombobox,select:e.actions.selectActiveOption});let N=R(w=>{switch(w.key){case G.Space:case G.Enter:w.preventDefault(),w.stopPropagation(),e.state.comboboxState===v.Closed&&re.flushSync(()=>e.actions.openCombobox()),x();return;case G.ArrowDown:w.preventDefault(),w.stopPropagation(),e.state.comboboxState===v.Closed&&(re.flushSync(()=>e.actions.openCombobox()),e.state.dataRef.current.value||e.actions.goToOption({focus:M.First})),x();return;case G.ArrowUp:w.preventDefault(),w.stopPropagation(),e.state.comboboxState===v.Closed&&(re.flushSync(()=>e.actions.openCombobox()),e.state.dataRef.current.value||e.actions.goToOption({focus:M.Last})),x();return;case G.Escape:if(e.state.comboboxState!==v.Open)return;w.preventDefault(),e.state.optionsElement&&!s.optionsPropsRef.current.static&&w.stopPropagation(),re.flushSync(()=>e.actions.closeCombobox()),x();return;default:return}}),E=Mt(()=>{e.state.comboboxState===v.Open?e.actions.closeCombobox():e.actions.openCombobox(),x()}),I=Be([u]),{isFocusVisible:S,focusProps:z}=lt({autoFocus:h}),{isHovered:C,hoverProps:Q}=dt({isDisabled:c}),{pressed:T,pressProps:B}=gt({disabled:c}),Z=ye({open:m===v.Open,active:T||m===v.Open,disabled:c,invalid:s.invalid,value:s.value,hover:C,focus:S}),ee=Ve({ref:i,id:u,type:Ut(n,o),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":p==null?void 0:p.id,"aria-expanded":m===v.Open,"aria-labelledby":I,disabled:c||void 0,autoFocus:h,onKeyDown:N},E,z,Q,B);return ge()({ourProps:ee,theirProps:g,slot:Z,defaultTag:Tn,name:"Combobox.Button"})}let $n="div",Mn=He.RenderStrategy|He.Static;function Fn(n,a){var e,s,o;let t=d.useId(),{id:i=`headlessui-combobox-options-${t}`,hold:l=!1,anchor:u,portal:c=!1,modal:h=!0,transition:g=!1,...m}=n,b=we("Combobox.Options"),p=me("Combobox.Options"),x=Nt(u);x&&(c=!0);let[y,N]=Et(x),[E,I]=d.useState(null),S=It(),z=je(a,x?y:null,b.actions.setOptionsElement,I),[C,Q,T,B,Z]=F(b,$=>[$.comboboxState,$.inputElement,$.buttonElement,$.optionsElement,$.activationTrigger]),ee=Xe(Q||T),w=Xe(B),H=Xt(),[U,j]=Yt(g,E,H!==null?(H&Se.Open)===Se.Open:C===v.Open);Vt(U,Q,b.actions.closeCombobox);let J=p.__demoMode?!1:h&&C===v.Open;Bt(J,w);let he=p.__demoMode?!1:h&&C===v.Open;At(he,{allowed:d.useCallback(()=>[Q,T,B],[Q,T,B])});let ne=F(b,b.selectors.didInputMove)?!1:U;ae(()=>{var $;p.optionsPropsRef.current.static=($=n.static)!=null?$:!1},[p.optionsPropsRef,n.static]),ae(()=>{p.optionsPropsRef.current.hold=l},[p.optionsPropsRef,l]),Zt(C===v.Open,{container:B,accept($){return $.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:$.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk($){$.setAttribute("role","none")}});let ie=Be([T==null?void 0:T.id]),oe=ye({open:C===v.Open,option:void 0}),pe=R(()=>{b.actions.setActivationTrigger(te.Pointer)}),f=R($=>{$.preventDefault(),b.actions.setActivationTrigger(te.Pointer)}),X=Ve(x?S():{},{"aria-labelledby":ie,role:"listbox","aria-multiselectable":p.mode===Y.Multi?!0:void 0,id:i,ref:z,style:{...m.style,...N,"--input-width":Ue(U,Q,!0).width,"--button-width":Ue(U,T,!0).width},onWheel:Z===te.Pointer?void 0:pe,onMouseDown:f,...Jt(j)}),P=U&&C===v.Closed&&!n.static,K=et(P,(e=p.virtual)==null?void 0:e.options),O=et(P,p.value),_=d.useCallback($=>p.compare(O,$),[p.compare,O]),k=d.useMemo(()=>{if(!p.virtual)return p;if(K===void 0)throw new Error("Missing `options` in virtual mode");return K!==p.virtual.options?{...p,virtual:{...p.virtual,options:K}}:p},[p,K,(s=p.virtual)==null?void 0:s.options]);p.virtual&&Object.assign(m,{children:q.createElement(xe.Provider,{value:k},q.createElement(On,{slot:oe},m.children))});let se=ge(),vt=d.useMemo(()=>p.mode===Y.Multi?p:{...p,isSelected:_},[p,_]);return q.createElement(_t,{enabled:c?n.static||U:!1,ownerDocument:ee},q.createElement(xe.Provider,{value:vt},se({ourProps:X,theirProps:{...m,children:q.createElement(nn,{freeze:P},typeof m.children=="function"?(o=m.children)==null?void 0:o.call(m,oe):m.children)},slot:oe,defaultTag:$n,features:Mn,visible:ne,name:"Combobox.Options"})))}let Dn="div";function An(n,a){var e,s,o;let t=me("Combobox.Option"),i=we("Combobox.Option"),l=d.useId(),{id:u=`headlessui-combobox-option-${l}`,value:c,disabled:h=(o=(s=(e=t.virtual)==null?void 0:e.disabled)==null?void 0:s.call(e,c))!=null?o:!1,order:g=null,...m}=n,[b]=F(i,j=>[j.inputElement]),p=ht(b),x=F(i,d.useCallback(j=>i.selectors.isActive(j,c,u),[c,u])),y=t.isSelected(c),N=d.useRef(null),E=jt({disabled:h,value:c,domRef:N,order:g}),I=d.useContext(xt),S=je(a,N,I?I.measureElement:null),z=R(()=>{i.actions.setIsTyping(!1),i.actions.onChange(c)});ae(()=>i.actions.registerOption(u,E),[E,u]);let C=F(i,d.useCallback(j=>i.selectors.shouldScrollIntoView(j,c,u),[c,u]));ae(()=>{if(C)return kt().requestAnimationFrame(()=>{var j,J;(J=(j=N.current)==null?void 0:j.scrollIntoView)==null||J.call(j,{block:"nearest"})})},[C,N]);let Q=R(j=>{j.preventDefault(),j.button===Ft.Left&&(h||(z(),qt()||requestAnimationFrame(()=>p()),t.mode===Y.Single&&i.actions.closeCombobox()))}),T=R(()=>{if(h)return i.actions.goToOption({focus:M.Nothing});let j=t.calculateIndex(c);i.actions.goToOption({focus:M.Specific,idx:j})}),B=Dt(),Z=R(j=>B.update(j)),ee=R(j=>{if(!B.wasMoved(j)||h||x&&i.state.activationTrigger===te.Pointer)return;let J=t.calculateIndex(c);i.actions.goToOption({focus:M.Specific,idx:J},te.Pointer)}),w=R(j=>{B.wasMoved(j)&&(h||x&&(t.optionsPropsRef.current.hold||i.state.activationTrigger===te.Pointer&&i.actions.goToOption({focus:M.Nothing})))}),H=ye({active:x,focus:x,selected:y,disabled:h}),U={id:u,ref:S,role:"option",tabIndex:h===!0?void 0:-1,"aria-disabled":h===!0?!0:void 0,"aria-selected":y,disabled:void 0,onMouseDown:Q,onFocus:T,onPointerEnter:Z,onMouseEnter:Z,onPointerMove:ee,onMouseMove:ee,onPointerLeave:w,onMouseLeave:w};return ge()({ourProps:U,theirProps:m,slot:H,defaultTag:Dn,name:"Combobox.Option"})}let Ln=ve(Nn),qe=ve(Rn),D=ve(In),zn=ke,A=ve(Fn),L=ve(An),V=Object.assign(Ln,{Input:D,Button:qe,Label:zn,Options:A,Option:L});const Pe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Kn=()=>{const[n,a]=d.useState(Pe[0]),[e,s]=d.useState(""),o=e===""?Pe:Pe.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsxs(W,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Rendering Active Option Details"}),r.jsx("div",{className:"max-w-sm",children:r.jsx(V,{value:n,onChange:()=>a,onClose:()=>s(""),children:({activeOption:t})=>r.jsxs(r.Fragment,{children:[r.jsx(D,{"aria-label":"Assignee",displayValue:i=>i==null?void 0:i.name,onChange:i=>s(i.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"top",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(i=>r.jsx(L,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:i.name},i.id))}),t&&r.jsxs("p",{className:"text-ld",children:["The currently focused user is: ",r.jsx("b",{children:t.name})]})]})})})]})})},Ne=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Wn=()=>{const[n,a]=d.useState(Ne[0].name),[e,s]=d.useState(""),o=e===""?Ne:Ne.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsxs("form",{action:"/projects/1/assignee",method:"post",className:"flex gap-3",children:[r.jsxs(V,{name:"assignee",value:n,onChange:t=>a(t),onClose:()=>s(""),children:[r.jsx(D,{"aria-label":"Assignee",displayValue:()=>n,onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t.name,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]}),r.jsx("button",{type:"submit",className:"ui-button bg-primary",children:"Submit"})]})})})},Vn=`import {\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOption,\r
  ComboboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
\r
const people = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const HtmlFormsCodes = () => {\r
  const [selectedPerson, setSelectedPerson] = useState<string>(people[0].name);\r
  const [query, setQuery] = useState("");\r
\r
  const filteredPeople =\r
    query === ""\r
      ? people\r
      : people.filter((person) =>\r
          person.name.toLowerCase().includes(query.toLowerCase())\r
        );\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form\r
          action="/projects/1/assignee"\r
          method="post"\r
          className="flex gap-3"\r
        >\r
          <Combobox\r
            name="assignee"\r
            value={selectedPerson}\r
            onChange={(value) => setSelectedPerson(value as string)}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              aria-label="Assignee"\r
              displayValue={() => selectedPerson}\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions\r
              anchor="bottom"\r
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible"\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person.name}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
          <button type="submit" className="ui-button bg-primary">\r
            Submit\r
          </button>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default HtmlFormsCodes\r
`,Bn=()=>r.jsx("div",{children:r.jsx(W,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6 max-w-sm",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"HTML Forms"}),r.jsx(Wn,{})]}),r.jsx(ue,{children:Vn})]})})}),Ee=[{id:1,name:"Tom Cook"},{id:2,name:"Wade Cooper"},{id:3,name:"Tanya Fox"},{id:4,name:"Arlene Mccoy"},{id:5,name:"Devon Webb"}],_n=()=>{const[n,a]=d.useState(""),[e,s]=d.useState(Ee[1]),o=n===""?Ee:Ee.filter(t=>t.name.toLowerCase().includes(n.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsx("div",{className:"",children:r.jsxs(V,{value:e,onChange:t=>{t&&s(t)},onClose:()=>a(""),children:[r.jsxs("div",{className:"relative",children:[r.jsx(D,{className:Qe("w-full ui-form-control rounded-md","focus:outline-hidden dark:focus:ring-2 dark:focus:ring-white/25"),displayValue:t=>t==null?void 0:t.name,onChange:t=>a(t.target.value)}),r.jsx(qe,{className:"group absolute inset-y-0 right-0 px-2.5",children:r.jsx(tt,{icon:"solar:alt-arrow-down-outline",height:20})})]}),r.jsx(A,{anchor:"bottom",transition:!0,className:Qe("absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm","transition duration-100 ease-in data-leave:data-closed:opacity-0"),children:o.map(t=>r.jsxs(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover hover:text-primary text-primary dark:text-primary data-focus:bg-hover data-focus:text-primary",children:[r.jsx(tt,{icon:"solar:check-read-linear",className:"invisible  group-data-selected:visible",height:20}),r.jsx("div",{className:"text-sm text-ld hover:text-primary data-focus:text-primary",children:t.name})]},t.id))})]})})})})},qn=`import {\r
  Combobox,\r
  ComboboxButton,\r
  ComboboxInput,\r
  ComboboxOption,\r
  ComboboxOptions,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
import clsx from "clsx";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Tom Cook" },\r
  { id: 2, name: "Wade Cooper" },\r
  { id: 3, name: "Tanya Fox" },\r
  { id: 4, name: "Arlene Mccoy" },\r
  { id: 5, name: "Devon Webb" },\r
];\r
\r
const BasicComboCode = () => {\r
  const [query, setQuery] = useState<string>("");\r
  const [selected, setSelected] = useState<Person>(people[1]);\r
\r
  const filteredPeople =\r
    query === ""\r
      ? people\r
      : people.filter((person) => {\r
          return person.name.toLowerCase().includes(query.toLowerCase());\r
        });\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="">\r
          <Combobox\r
            value={selected}\r
            onChange={(value: Person | null) => {\r
              if (value) setSelected(value);\r
            }}\r
            onClose={() => setQuery("")}\r
          >\r
            <div className="relative">\r
              <ComboboxInput\r
                className={clsx(\r
                  "w-full ui-form-control rounded-md",\r
                  "focus:outline-hidden dark:focus:ring-2 dark:focus:ring-white/25"\r
                )}\r
                displayValue={(person: Person) => person?.name}\r
                onChange={(event) => setQuery(event.target.value)}\r
              />\r
              <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">\r
                <Icon icon="solar:alt-arrow-down-outline" height={20} />\r
              </ComboboxButton>\r
            </div>\r
\r
            <ComboboxOptions\r
              anchor="bottom"\r
              transition\r
              className={clsx(\r
                "absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm",\r
                "transition duration-100 ease-in data-leave:data-closed:opacity-0"\r
              )}\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover hover:text-primary text-primary dark:text-primary data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  <Icon\r
                    icon="solar:check-read-linear"\r
                    className="invisible  group-data-selected:visible"\r
                    height={20}\r
                  />\r
                  <div className="text-sm text-ld hover:text-primary data-focus:text-primary">\r
                    {person.name}\r
                  </div>\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicComboCode\r
`,Qn=()=>r.jsx("div",{children:r.jsx(W,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6 max-w-sm",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Basic"}),r.jsx(_n,{})]}),r.jsx(ue,{children:qn})]})})}),Ie=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],Hn=()=>{const[n,a]=d.useState(Ie[0]),[e,s]=d.useState(""),o=e===""?Ie:Ie.filter(i=>i.toLowerCase().includes(e.toLowerCase())),t=i=>{a(i),s("")};return r.jsx("div",{children:r.jsxs(W,{children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("h4",{className:"text-lg font-semibold",children:"Binding Values"})}),r.jsx("div",{className:"max-w-sm",children:r.jsxs(V,{value:n,onChange:t,children:[r.jsx(D,{"aria-label":"Assignee",onChange:i=>s(i.target.value),value:e,className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(i=>r.jsx(L,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:i},i))})]})})]})})},Te=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Un=()=>{const[n,a]=d.useState(Te[0]),[e,s]=d.useState(""),o=e===""?Te:Te.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsxs(W,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Binding Objects as Values"}),r.jsx("div",{className:"max-w-sm",children:r.jsxs(V,{value:n,onChange:()=>a,onClose:()=>s(""),children:[r.jsx(D,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})})},Re=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Gn=()=>{const[n,a]=d.useState(Re[0]),[e,s]=d.useState(""),o=e===""?Re:Re.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx("div",{children:r.jsxs(W,{children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("h4",{className:"text-lg font-semibold",children:"Open On Focus"})}),r.jsx("div",{className:"max-w-sm",children:r.jsxs(V,{immediate:!0,value:n,onChange:()=>a,onClose:()=>s(""),children:[r.jsx(D,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})})},$e=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Xn=()=>{const[n,a]=d.useState($e[0]),[e,s]=d.useState(""),o=e===""?$e:$e.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsx(ce,{children:r.jsxs(V,{value:n,onChange:a,onClose:()=>s(""),children:[r.jsx(D,{displayValue:t=>t?t.name:"",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"top start",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})})})},Yn=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const ComboPositionCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
        people[0]\r
      );\r
      const [query, setQuery] = useState("");\r
    \r
      const filteredPeople =\r
        query === ""\r
          ? people\r
          : people.filter((person) => {\r
              return person.name.toLowerCase().includes(query.toLowerCase());\r
            });\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Field>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions anchor="top start" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible">\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ComboPositionCode;\r
`,Jn=()=>r.jsx("div",{children:r.jsx(W,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6 max-w-sm",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Position"}),r.jsx(Xn,{})]}),r.jsx(ue,{children:Yn})]})})}),Me=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Zn=()=>{const[n,a]=d.useState(Me[0]),[e,s]=d.useState(""),o=e===""?Me:Me.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx("div",{children:r.jsxs(W,{children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Width"})}),r.jsx("div",{className:"max-w-sm",children:r.jsx(ce,{children:r.jsxs(V,{value:n,onChange:a,onClose:()=>s(""),children:[r.jsx(D,{displayValue:t=>t?t.name:"",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})})]})})},Fe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],eo=()=>{const[n,a]=d.useState(Fe[0]),[e,s]=d.useState(""),o=e===""?Fe:Fe.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsxs(ce,{className:"flex gap-3  items-center",disabled:!0,children:[r.jsx(ke,{className:"text-ld",children:"Select:"}),r.jsxs(V,{value:n,onChange:a,onClose:()=>s(""),children:[r.jsx(D,{displayValue:t=>t?t.name:"",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})]})})})},to=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
  Label,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const DisabledCode = () => {\r
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
    people[0]\r
  );\r
  const [query, setQuery] = useState("");\r
\r
  const filteredPeople =\r
    query === ""\r
      ? people\r
      : people.filter((person) => {\r
          return person.name.toLowerCase().includes(query.toLowerCase());\r
        });\r
  return (\r
 <>\r
 <div className="mt-4">\r
    <Field className="flex gap-3  items-center" disabled>\r
          <Label className="text-ld">Select:</Label>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions\r
              anchor="bottom"\r
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible"\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
 </div>\r
 </>\r
  )\r
}\r
\r
export default DisabledCode\r
`,no=()=>r.jsx("div",{children:r.jsx(W,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6 max-w-sm",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Disabled"}),r.jsx(eo,{})]}),r.jsx(ue,{children:to})]})})}),De=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!0},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],oo=()=>{const[n,a]=d.useState(De[0]),[e,s]=d.useState(""),o=e===""?De:De.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsxs(ce,{className:"flex gap-3  items-center",children:[r.jsx(ke,{className:"text-ld",children:"Assignee:"}),r.jsxs(V,{value:n,onChange:a,onClose:()=>s(""),children:[r.jsx(D,{displayValue:t=>t?t.name:"",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,disabled:!t.available,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary  data-disabled:opacity-50 data-disabled:hover:text-bodytext",children:t.name},t.id))})]})]})})})},so=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
  Label,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
  available: boolean;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds", available: true },\r
  { id: 2, name: "Kenton Towne", available: true },\r
  { id: 3, name: "Therese Wunsch", available: true },\r
  { id: 4, name: "Benedict Kessler", available: false },\r
  { id: 5, name: "Katelyn Rohan", available: true },\r
];\r
\r
const DisableComboOptCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
      people[0]\r
    );\r
    const [query, setQuery] = useState("");\r
  \r
    const filteredPeople =\r
      query === ""\r
        ? people\r
        : people.filter((person) => {\r
            return person.name.toLowerCase().includes(query.toLowerCase());\r
          });\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Field className="flex gap-3  items-center">\r
          <Label className="text-ld">Assignee:</Label>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions\r
              anchor="bottom"\r
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible"\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  disabled={!person.available}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary  data-disabled:opacity-50 data-disabled:hover:text-bodytext"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisableComboOptCode\r
`,ro=()=>r.jsx("div",{children:r.jsx(W,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6 max-w-sm",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Combo Option"}),r.jsx(oo,{})]}),r.jsx(ue,{children:so})]})})}),Ce=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],ao=()=>{const[n,a]=d.useState([Ce[0],Ce[1]]),[e,s]=d.useState(""),o=e===""?Ce:Ce.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx("div",{children:r.jsxs(W,{children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("h4",{className:"text-lg font-semibold",children:"Selecting Multiple Values"})}),r.jsx("div",{className:"max-w-sm",children:r.jsxs(V,{multiple:!0,value:n,onChange:a,onClose:()=>s(""),children:[n.length>0&&r.jsx("ul",{children:n.map(t=>r.jsx("li",{children:t.name},t.id))}),r.jsx(D,{"aria-label":"Assignees",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})})},Ae=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],io=d.forwardRef((n,a)=>r.jsx("button",{ref:a,...n})),lo=()=>{const[n,a]=d.useState(Ae[0]),[e,s]=d.useState(""),o=e===""?Ae:Ae.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsxs(W,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Rendering As Different Elements"}),r.jsx("div",{className:"max-w-sm",children:r.jsxs(V,{value:n,onChange:()=>a,onClose:()=>s(""),children:[r.jsxs("span",{className:"flex gap-3",children:[r.jsx(D,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(qe,{as:io,className:"ui-button bg-primary text-white",children:"Open"})]}),r.jsx(A,{as:"ul",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{as:"li",value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})},Le=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],co=()=>{const[n,a]=d.useState(Le[0]),[e,s]=d.useState(""),o=e===""?Le:Le.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsxs(W,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Virtual Scrolling"}),r.jsx("div",{className:"max-w-sm",children:r.jsxs(V,{value:n,virtual:{options:o},onChange:()=>a,onClose:()=>s(""),children:[r.jsx(D,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm",children:({option:t})=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name})})]})})]})})},ze=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],uo=()=>{const[n,a]=d.useState(ze[0]),[e,s]=d.useState(""),o=e===""?ze:ze.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx("div",{children:r.jsxs(W,{children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("h4",{className:"text-lg font-semibold",children:"With FramerMotion"})}),r.jsx(V,{value:n,onChange:a,onClose:()=>s(""),children:({open:t})=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"max-w-sm",children:[r.jsx(D,{displayValue:i=>i?i.name:"",onChange:i=>s(i.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(ln,{children:t&&r.jsx(A,{static:!0,as:dn.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",onAnimationComplete:()=>s(""),children:o.map(i=>r.jsx(L,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:i.name},i.id))})})]})})})]})})},Ke=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],mo=()=>{const[n,a]=d.useState(Ke[0]),[e,s]=d.useState(""),o=e===""?Ke:Ke.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx(r.Fragment,{children:r.jsx("div",{className:"mt-4",children:r.jsxs(ce,{className:"flex gap-3  items-center",children:[r.jsx(ke,{className:"text-ld",children:"Assignee:"}),r.jsxs(V,{value:n,onChange:a,onClose:()=>s(""),children:[r.jsx(D,{displayValue:t=>t?t.name:"",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})]})})})},ho=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
  Label,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const ComboWithLableCode = () => {\r
     const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
        people[0]\r
      );\r
      const [query, setQuery] = useState("");\r
    \r
      const filteredPeople =\r
        query === ""\r
          ? people\r
          : people.filter((person) => {\r
              return person.name.toLowerCase().includes(query.toLowerCase());\r
            });\r
  return (\r
   <>\r
   <div className="mt-4">\r
    <Field className="flex gap-3  items-center">\r
          <Label className="text-ld">Assignee:</Label>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions anchor="bottom" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible">\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
   </div>\r
   </>\r
  )\r
}\r
\r
export default ComboWithLableCode\r
`,po=()=>r.jsx("div",{children:r.jsx(W,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6 max-w-sm",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"With Label"}),r.jsx(mo,{})]}),r.jsx(ue,{children:ho})]})})}),We=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],bo=()=>{const[n,a]=d.useState(We[0]),[e,s]=d.useState(""),o=e===""?We:We.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r.jsx("div",{children:r.jsxs(W,{children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("h4",{className:"text-lg font-semibold",children:"With Transitions"})}),r.jsx("div",{className:"max-w-sm",children:r.jsx(ce,{children:r.jsxs(V,{value:n,onChange:a,onClose:()=>s(""),children:[r.jsx(D,{displayValue:t=>t?t.name:"",onChange:t=>s(t.target.value),className:"w-full ui-form-control rounded-md"}),r.jsx(A,{transition:!0,anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>r.jsx(L,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})})]})})},ds=()=>{const n=[{to:"/",title:"Home"},{title:"Combobox"}];return r.jsxs(r.Fragment,{children:[r.jsx(cn,{title:"Combobox",items:n}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-30",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(Qn,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(po,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(no,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(ro,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(Bn,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(Jn,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(Zn,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(bo,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(uo,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(Hn,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(Gn,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(lo,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(Un,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(Kn,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(co,{})}),r.jsx("div",{className:"lg:col-span-6 col-span-12",children:r.jsx(ao,{})})]})]})};export{ds as default};
