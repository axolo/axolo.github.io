import{_ as c,C as r,o as n,c as E,b as p,w as s,a2 as o,Q as a,H as e,a as t}from"./chunks/framework.d5af2850.js";const y="/assets/egg-oauth.14daaab0.png",v=JSON.parse('{"title":"Egg.js 实现 OAuth2 授权码方式鉴权","description":"大量详尽代码图文并茂一步步的细述 OAuth2 授权码方式鉴权在 Egg.js 中的实现。","frontmatter":{"title":"Egg.js 实现 OAuth2 授权码方式鉴权","description":"大量详尽代码图文并茂一步步的细述 OAuth2 授权码方式鉴权在 Egg.js 中的实现。","time":"2020-01-07T00:00:00.000Z","category":"后端","tags":["OAuth2","Node.js","Egg.js"],"top":1},"headers":[],"relativePath":"egg-oauth.md","filePath":"egg-oauth.md"}'),i={name:"egg-oauth.md"},F=a("",6),u=a("",10),d=a("",54);function h(C,A,g,B,q,D){const l=r("Mermaid");return n(),E("div",null,[F,(n(),p(o,null,{default:s(()=>[e(l,{id:"mermaid-82",class:"mermaid",graph:"graph%20LR%0Aclient((%E5%AE%A2%E6%88%B7%E7%AB%AF))%0Aoauth((%E6%8E%88%E6%9D%83%E7%AB%AF))%0Aresource((%E8%B5%84%E6%BA%90%E7%AB%AF))%0Aclient%20--%3E%20%20%20%7C1.%E5%B8%A6%E5%8F%82%E8%B7%B3%E8%BD%AC%E8%AF%B7%E6%B1%82%E6%8E%88%E6%9D%83%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C2.%E8%8E%B7%E5%8F%96%E6%8E%88%E6%9D%83%E7%94%A8%E6%88%B7%7C%20resource%0Aresource%20--%3E%20%7C3.%E8%BF%94%E5%9B%9E%E6%8E%88%E6%9D%83%E7%94%A8%E6%88%B7%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C4.%E6%90%BA%E5%B8%A6%E6%8E%88%E6%9D%83%E7%A0%81%E9%87%8D%E5%AE%9A%E5%90%91%E8%87%B3%7C%20client%0Aclient%20--%3E%20%20%20%7C5.%E5%B8%A6%E6%8E%88%E6%9D%83%E7%A0%81%E5%92%8C%E5%BF%85%E8%A6%81%E5%8F%82%E6%95%B0%E8%8E%B7%E5%8F%96%E4%BB%A4%E7%89%8C%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C6.%E8%BF%94%E5%9B%9E%E4%BB%A4%E7%89%8C%7C%20client%0Aclient%20--%3E%20%20%20%7C7.%E6%90%BA%E5%B8%A6%E4%BB%A4%E7%89%8C%E8%AE%BF%E9%97%AE%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C8.%E6%A0%A1%E9%AA%8C%E4%BB%A4%E7%89%8C%7C%20resource%0Aresource%20--%3E%20%7C9.%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%7C%20client%0A"})]),fallback:s(()=>[t(" Loading... ")]),_:1})),u,(n(),p(o,null,{default:s(()=>[e(l,{id:"mermaid-229",class:"mermaid",graph:"classDiagram%0A%0Atokens%20%22n%22%20--%3E%20%221%22%20clients%0Atokens%20%22n%22%20--%3E%20%221%22%20users%0Atokens%20%220..1%22%20--%3E%20%221%22%20codes%0Acodes%20%22n%22%20--%3E%20%221%22%20clients%0Acodes%20%22n%22%20--%3E%20%221%22%20users%0A%0Aclass%20users%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20username%0A%20%20%2B%20password%0A%7D%0A%0Aclass%20clients%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20secret%0A%20%20%2B%20grants%0A%20%20%2B%20redirectUris%0A%7D%0A%0Aclass%20tokens%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20accessToken%0A%20%20%2B%20authorizationCode%0A%20%20%2B%20accessTokenExpiresAt%0A%20%20%2B%20refreshToken%0A%20%20%2B%20refreshTokenExpiresAt%0A%20%20%2B%20codeId%0A%20%20%2B%20userId%0A%20%20%2B%20clientId%0A%20%20%2B%20scope%0A%7D%0A%0Aclass%20codes%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20authorizationCode%0A%20%20%2B%20redirectUri%0A%20%20%2B%20scope%0A%20%20%2B%20state%0A%20%20%2B%20userId%0A%20%20%2B%20clientId%0A%7D%0A"})]),fallback:s(()=>[t(" Loading... ")]),_:1})),d])}const m=c(i,[["render",h]]);export{v as __pageData,m as default};
