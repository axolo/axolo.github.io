import{d as m}from"./chunks/dayjs.min.40a0aa38.js";import{d as p,u as Y}from"./chunks/docs.4f94348d.js";import{a as v}from"./chunks/anchor.27654a76.js";import{_ as g,o as a,c as o,a as t,t as r,u as n,F as l,r as u,p as b,b as y,d as S}from"./app.32957ec0.js";const k=i=>(b("data-v-d1c6f750"),i=i(),y(),i),x={class:"MyYear"},I={class:"MyDoc"},B={class:"container"},D={class:"aside"},M={class:"aside-outline"},N={class:"label"},P=k(()=>t("div",{class:"label-name"},"归档",-1)),j={class:"label-total"},q=["href"],w={class:"count"},F={class:"content"},O=["id"],U=["href"],V={__name:"archive",setup(i){const d=p.map(s=>m(s.frontmatter.time).format("YYYY")).flat().sort((s,c)=>c-s),h=[...new Set(d)].map(s=>({name:s,count:d.filter(c=>c===s).length,docs:p.filter(c=>m(c.frontmatter.time).format("YYYY")===s)}));return(s,c)=>(a(),o("div",x,[t("div",I,[t("div",B,[t("div",D,[t("div",M,[t("div",N,[P,t("div",j,r(n(d).length),1)]),(a(!0),o(l,null,u(n(h),e=>(a(),o("div",{key:e.name,class:"item"},[t("a",{class:"name",href:"#"+n(v)(e.name)},r(e.name),9,q),t("div",w,r(e.count),1)]))),128))])]),t("div",F,[(a(!0),o(l,null,u(n(h),e=>(a(),o("div",{key:e.name,class:"content-list"},[t("div",{id:n(v)(e.name),class:"label"},r(e.name),9,O),(a(!0),o(l,null,u(e.docs,_=>(a(),o("div",{key:_.relativePath,class:"item"},[t("a",{href:n(Y)(_.relativePath)},r(_.title),9,U)]))),128))]))),128))])])])]))}},A=g(V,[["__scopeId","data-v-d1c6f750"]]),C=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","lastUpdated":false,"unsave":true},"headers":[],"relativePath":"archive.md","lastUpdated":1673850358000}'),E={name:"archive.md"},G=Object.assign(E,{setup(i){return(d,f)=>(a(),o("div",null,[S(A)]))}});export{C as __pageData,G as default};
