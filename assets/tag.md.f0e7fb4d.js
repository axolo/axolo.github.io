import{_ as f,o as a,c as o,a as e,t as i,u as c,F as u,r as p,b as h,d as b,p as g,e as y,f as S}from"./app.373b10f5.js";import{d as m}from"./chunks/docs.c9fb105a.js";const k=_=>(g("data-v-f1be60bb"),_=_(),y(),_),x={class:"MyTag"},T={class:"MyDoc"},I={class:"container"},B={class:"aside"},D={class:"aside-outline"},M={class:"label"},N=k(()=>e("div",{class:"label-name"},"标签",-1)),P={class:"label-total"},q=["href"],w={class:"count"},F={class:"content"},O=["id"],V=["href"],j={__name:"tag",setup(_){const l=m.map(t=>[...t.tags]).flat(),d=[...new Set(l)].map(t=>({name:t,count:l.filter(n=>n===t).length,docs:m.filter(n=>n.tags.includes(t))})).sort((t,n)=>n.count-t.count);return(t,n)=>(a(),o("div",x,[e("div",T,[e("div",I,[e("div",B,[e("div",D,[e("div",M,[N,e("div",P,i(c(d).length),1)]),(a(!0),o(u,null,p(c(d),s=>(a(),o("div",{key:s.name,class:"item"},[e("a",{class:"name",href:"#"+c(h)(s.name)},i(s.name),9,q),e("div",w,i(s.count),1)]))),128))])]),e("div",F,[(a(!0),o(u,null,p(c(d),s=>(a(),o("div",{key:s.name,class:"content-list"},[e("div",{id:c(h)(s.name),class:"label"},i(s.name),9,O),(a(!0),o(u,null,p(s.docs,r=>(a(),o("div",{key:r.relativePath,class:"item"},[e("a",{href:c(b)(r.relativePath)},i(r.title),9,V)]))),128))]))),128))])])])]))}},E=f(j,[["__scopeId","data-v-f1be60bb"]]),$=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","lastUpdated":false,"unsave":true},"headers":[],"relativePath":"tag.md"}'),J={name:"tag.md"},z=Object.assign(J,{setup(_){return(l,v)=>(a(),o("div",null,[S(E)]))}});export{$ as __pageData,z as default};