import{_ as v,o as a,c as o,a as t,F as i,r as l,u as h,t as r,p as f,b as y,w as g,d as k}from"./app.077a4a1b.js";import{d as m}from"./chunks/docs.8e5f6fd1.js";const S=n=>(f("data-v-4dc49792"),n=n(),y(),n),w={class:"MyType"},x={class:"MyDoc"},B={class:"container"},I={class:"aside"},T={class:"types"},D=S(()=>t("div",{class:"title"},"分类",-1)),M=["href"],N={class:"count"},P={class:"content"},b={class:"docs"},q={class:"name"},F=["href"],O=["href"],U={__name:"category",setup(n){const u=e=>g(e.replace(/.(md|markdown)$/i,"")),_=m.map(e=>e.frontmatter.category).flat(),p=[...new Set(_)].map(e=>({name:e,count:_.filter(c=>c===e).length,docs:m.filter(c=>c.frontmatter.category===e)})).sort((e,c)=>c.count-e.count);return(e,c)=>(a(),o("div",w,[t("div",x,[t("div",B,[t("div",I,[t("div",T,[D,(a(!0),o(i,null,l(h(p),s=>(a(),o("div",{key:s,class:"type"},[t("a",{class:"name",href:"#"+s.name},r(s.name),9,M),t("div",N,r(s.count),1)]))),128))])]),t("div",P,[t("div",b,[(a(!0),o(i,null,l(h(p),s=>(a(),o("div",{key:s,class:"type"},[t("div",q,[t("a",{href:"#"+s.name},r(s.name),9,F)]),(a(!0),o(i,null,l(s.docs,d=>(a(),o("div",{key:d.relativePath,class:"doc"},[t("a",{href:u(d.relativePath)},r(d.title),9,O)]))),128))]))),128))])])])])]))}},V=v(U,[["__scopeId","data-v-4dc49792"]]),J=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","lastUpdated":false,"unsave":true},"headers":[],"relativePath":"category.md","lastUpdated":1673849720000}'),$={name:"category.md"},L=Object.assign($,{setup(n){return(u,_)=>(a(),o("div",null,[k(V)]))}});export{J as __pageData,L as default};
