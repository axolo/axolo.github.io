import{_ as l,o as p,c as o,f as a,g as s,h as t}from"./app.5dd13a44.js";const e="/assets/egg-oauth.14daaab0.png",g=JSON.parse('{"title":"Egg.js 实现 OAuth2 授权码方式鉴权","description":"大量详尽代码图文并茂一步步的细述 OAuth2 授权码方式鉴权在 Egg.js 中的实现。","frontmatter":{"title":"Egg.js 实现 OAuth2 授权码方式鉴权","description":"大量详尽代码图文并茂一步步的细述 OAuth2 授权码方式鉴权在 Egg.js 中的实现。","time":"2020-01-07T00:00:00.000Z","category":"后端","tags":["OAuth2","Node.js","Egg.js"],"top":1},"headers":[{"level":2,"title":"数据","slug":"数据","link":"#数据","children":[{"level":3,"title":"服务","slug":"服务","link":"#服务","children":[]},{"level":3,"title":"模型","slug":"模型","link":"#模型","children":[]}]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[{"level":3,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[{"level":3,"title":"配置","slug":"配置-1","link":"#配置-1","children":[]},{"level":3,"title":"OAuth2 Server Model Specification","slug":"oauth2-server-model-specification","link":"#oauth2-server-model-specification","children":[]},{"level":3,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":3,"title":"鉴权中间件","slug":"鉴权中间件","link":"#鉴权中间件","children":[]},{"level":3,"title":"授权码控制器","slug":"授权码控制器","link":"#授权码控制器","children":[]},{"level":3,"title":"令牌控制器","slug":"令牌控制器","link":"#令牌控制器","children":[]},{"level":3,"title":"授权详情控制器","slug":"授权详情控制器","link":"#授权详情控制器","children":[]}]},{"level":2,"title":"客户端","slug":"客户端","link":"#客户端","children":[{"level":3,"title":"请求授权码","slug":"请求授权码","link":"#请求授权码","children":[]},{"level":3,"title":"请求令牌","slug":"请求令牌","link":"#请求令牌","children":[]},{"level":3,"title":"访问接口","slug":"访问接口","link":"#访问接口","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"egg-oauth.md"}'),c={name:"egg-oauth.md"},r=s("",6),F=s("",10),D=s("",54);function y(C,A,i,d,u,h){const n=t("Mermaid");return p(),o("div",null,[r,a(n,{id:"mermaid_382ee220",graph:"graph%20LR%0Aclient((%E5%AE%A2%E6%88%B7%E7%AB%AF))%0Aoauth((%E6%8E%88%E6%9D%83%E7%AB%AF))%0Aresource((%E8%B5%84%E6%BA%90%E7%AB%AF))%0Aclient%20--%3E%20%20%20%7C1.%E5%B8%A6%E5%8F%82%E8%B7%B3%E8%BD%AC%E8%AF%B7%E6%B1%82%E6%8E%88%E6%9D%83%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C2.%E8%8E%B7%E5%8F%96%E6%8E%88%E6%9D%83%E7%94%A8%E6%88%B7%7C%20resource%0Aresource%20--%3E%20%7C3.%E8%BF%94%E5%9B%9E%E6%8E%88%E6%9D%83%E7%94%A8%E6%88%B7%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C4.%E6%90%BA%E5%B8%A6%E6%8E%88%E6%9D%83%E7%A0%81%E9%87%8D%E5%AE%9A%E5%90%91%E8%87%B3%7C%20client%0Aclient%20--%3E%20%20%20%7C5.%E5%B8%A6%E6%8E%88%E6%9D%83%E7%A0%81%E5%92%8C%E5%BF%85%E8%A6%81%E5%8F%82%E6%95%B0%E8%8E%B7%E5%8F%96%E4%BB%A4%E7%89%8C%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C6.%E8%BF%94%E5%9B%9E%E4%BB%A4%E7%89%8C%7C%20client%0Aclient%20--%3E%20%20%20%7C7.%E6%90%BA%E5%B8%A6%E4%BB%A4%E7%89%8C%E8%AE%BF%E9%97%AE%7C%20oauth%0Aoauth%20--%3E%20%20%20%20%7C8.%E6%A0%A1%E9%AA%8C%E4%BB%A4%E7%89%8C%7C%20resource%0Aresource%20--%3E%20%7C9.%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%7C%20client"}),F,a(n,{id:"mermaid_64a568da",graph:"classDiagram%0A%0Atokens%20%22n%22%20--%3E%20%221%22%20clients%0Atokens%20%22n%22%20--%3E%20%221%22%20users%0Atokens%20%220..1%22%20--%3E%20%221%22%20codes%0Acodes%20%22n%22%20--%3E%20%221%22%20clients%0Acodes%20%22n%22%20--%3E%20%221%22%20users%0A%0Aclass%20users%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20username%0A%20%20%2B%20password%0A%7D%0A%0Aclass%20clients%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20secret%0A%20%20%2B%20grants%0A%20%20%2B%20redirectUris%0A%7D%0A%0Aclass%20tokens%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20accessToken%0A%20%20%2B%20authorizationCode%0A%20%20%2B%20accessTokenExpiresAt%0A%20%20%2B%20refreshToken%0A%20%20%2B%20refreshTokenExpiresAt%0A%20%20%2B%20codeId%0A%20%20%2B%20userId%0A%20%20%2B%20clientId%0A%20%20%2B%20scope%0A%7D%0A%0Aclass%20codes%20%7B%0A%20%20%2B%20id%0A%20%20%2B%20authorizationCode%0A%20%20%2B%20redirectUri%0A%20%20%2B%20scope%0A%20%20%2B%20state%0A%20%20%2B%20userId%0A%20%20%2B%20clientId%0A%7D"}),D])}const f=l(c,[["render",y]]);export{g as __pageData,f as default};
