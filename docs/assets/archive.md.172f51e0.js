import{d as p}from"./chunks/dayjs.min.40a0aa38.js";import{_ as f,o as a,c as o,a as t,F as _,r as l,u as m,t as n,p as Y,b as y,w as b,d as g}from"./app.85a22bda.js";import{d as v}from"./chunks/docs.8e5f6fd1.js";const k=r=>(Y("data-v-7bd9b948"),r=r(),y(),r),S={class:"MyYear"},w={class:"MyDoc"},x={class:"container"},B={class:"aside"},I={class:"years"},D=k(()=>t("div",{class:"title"},"归档",-1)),M=["href"],N={class:"count"},P={class:"content"},j={class:"docs"},q={class:"name"},F=["href"],O=["href"],U={__name:"archive",setup(r){const h=e=>b(e.replace(/.(md|markdown)$/i,"")),d=v.map(e=>p(e.frontmatter.time).format("YYYY")).flat().sort((e,c)=>c-e),u=[...new Set(d)].map(e=>({name:e,count:d.filter(c=>c===e).length,docs:v.filter(c=>p(c.frontmatter.time).format("YYYY")===e)}));return(e,c)=>(a(),o("div",S,[t("div",w,[t("div",x,[t("div",B,[t("div",I,[D,(a(!0),o(_,null,l(m(u),s=>(a(),o("div",{key:s,class:"year"},[t("a",{class:"name",href:"#"+s.name},n(s.name),9,M),t("div",N,n(s.count),1)]))),128))])]),t("div",P,[t("div",j,[(a(!0),o(_,null,l(m(u),s=>(a(),o("div",{key:s,class:"year"},[t("div",q,[t("a",{href:"#"+s.name},n(s.name),9,F)]),(a(!0),o(_,null,l(s.docs,i=>(a(),o("div",{key:i.relativePath,class:"doc"},[t("a",{href:h(i.relativePath)},n(i.title),9,O)]))),128))]))),128))])])])])]))}},V=f(U,[["__scopeId","data-v-7bd9b948"]]),z=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","lastUpdated":false,"unsave":true},"headers":[],"relativePath":"archive.md","lastUpdated":1673850358000}'),$={name:"archive.md"},C=Object.assign($,{setup(r){return(h,d)=>(a(),o("div",null,[g(V)]))}});export{z as __pageData,C as default};
