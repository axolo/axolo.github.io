import{_ as g,c as h,o as e,j as n,a6 as d,F as c,B as y,a7 as u,t as r,a8 as F,K as m,a4 as E,G as b}from"./chunks/framework.Drrtq2Mk.js";const C={inheritAttrs:!1,props:{modelValue:{type:String}},emits:["update:modelValue","change"],data(){return{modes:[{id:"pc_slide",name:"侧栏",method:"pcSide"},{id:"dd_tab",name:"工作台",method:"ddTab"}],mode:"pc_slide",url:null,link:null}},watch:{mode(i){this.change()}},created(){this.url=this.modelValue},methods:{pcSide(i){return"taurus://taurusclient/page/link?pc_slide=true&url="+encodeURIComponent(i)},ddTab(i){const s=i.includes("?")?"&ddtab=true":"?ddtab=true";return"taurus://taurusclient/page/link?url="+encodeURIComponent(i+s)},change(){if(!this.url){this.link=null;return}const i=this.modes.find(s=>s.id===this.mode);this.link=this[i.method](this.url),this.$emit("change",this.link),this.$emit("update:modelValue",this.url)}}},A={class:"gdt-link"},D={class:"modes"},_=["id","value"],v=["for"],B={class:"link"},f=["href"];function q(i,s,t,p,l,k){return e(),h("div",A,[n("div",D,[(e(!0),h(c,null,y(l.modes,a=>(e(),h("div",{key:a,class:"mode"},[d(n("input",{id:a.id,type:"radio",value:a.id,"onUpdate:modelValue":s[0]||(s[0]=o=>l.mode=o)},null,8,_),[[u,l.mode]]),n("label",{for:a.id},r(a.name),9,v)]))),128))]),d(n("textarea",m({"onUpdate:modelValue":s[1]||(s[1]=a=>l.url=a),class:"text",placeholder:"请输需转换的地址，如：http://localhost:5173"},i.$attrs,{onInput:s[2]||(s[2]=(...a)=>k.change&&k.change(...a))}),null,16),[[F,l.url]]),n("div",B,[n("a",{href:l.link,target:"_blank"},r(l.link),9,f)])])}const T=g(C,[["render",q],["__scopeId","data-v-66d8c979"]]),P=JSON.parse('{"title":"专有钉调试","description":"没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。","frontmatter":{"title":"专有钉调试","description":"没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。","time":"2023-09-06T00:00:00.000Z","category":"前端","tags":["钉钉","专有钉","浙政钉"]},"headers":[],"relativePath":"gdt-debug.md","filePath":"gdt-debug.md"}'),x={name:"gdt-debug.md"},V=Object.assign(x,{setup(i){return(s,t)=>(e(),h("div",null,[t[1]||(t[1]=E("",16)),b(T,{onChange:t[0]||(t[0]=p=>s.link=p)}),t[2]||(t[2]=E("",12))]))}});export{P as __pageData,V as default};
