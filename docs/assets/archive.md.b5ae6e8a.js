import{d as p}from"./chunks/dayjs.min.6e2a4f5e.js";import{d as m,u as Y}from"./chunks/docs.ef77076b.js";import{a as v}from"./chunks/anchor.2e87a9a4.js";import{_ as g,o as a,c as o,a as e,t as d,u as n,F as l,r as u,p as b,b as y,d as S}from"./app.93924320.js";import"./chunks/commonjsHelpers.725317a4.js";const k=i=>(b("data-v-e5ddc885"),i=i(),y(),i),x={class:"MyYear"},I={class:"MyDoc"},B={class:"container"},D={class:"aside"},M={class:"aside-outline"},N={class:"label"},P=k(()=>e("div",{class:"label-name"},"归档",-1)),j={class:"label-total"},q=["href"],w={class:"count"},F={class:"content"},O=["id"],U=["href"],V={__name:"archive",setup(i){const r=m.map(s=>p(s.time).format("YYYY")).flat().sort((s,c)=>c-s),h=[...new Set(r)].map(s=>({name:s,count:r.filter(c=>c===s).length,docs:m.filter(c=>p(c.time).format("YYYY")===s)}));return(s,c)=>(a(),o("div",x,[e("div",I,[e("div",B,[e("div",D,[e("div",M,[e("div",N,[P,e("div",j,d(n(r).length),1)]),(a(!0),o(l,null,u(n(h),t=>(a(),o("div",{key:t.name,class:"item"},[e("a",{class:"name",href:"#"+n(v)(t.name)},d(t.name),9,q),e("div",w,d(t.count),1)]))),128))])]),e("div",F,[(a(!0),o(l,null,u(n(h),t=>(a(),o("div",{key:t.name,class:"content-list"},[e("div",{id:n(v)(t.name),class:"label"},d(t.name),9,O),(a(!0),o(l,null,u(t.docs,_=>(a(),o("div",{key:_.relativePath,class:"item"},[e("a",{href:n(Y)(_.relativePath)},d(_.title),9,U)]))),128))]))),128))])])])]))}},A=g(V,[["__scopeId","data-v-e5ddc885"]]),G=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","lastUpdated":false,"unsave":true},"headers":[],"relativePath":"archive.md","lastUpdated":1675329931000}'),E={name:"archive.md"},H=Object.assign(E,{setup(i){return(r,f)=>(a(),o("div",null,[S(A)]))}});export{G as __pageData,H as default};