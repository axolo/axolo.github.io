import{_ as a,o as l,c as p,d as e,b as s,r as o}from"./app.6f0396ad.js";const h=JSON.parse('{"title":"CentOS安装配置OpenVPN","description":"","frontmatter":{"title":"CentOS安装配置OpenVPN","time":"2020-01-29T00:00:00.000Z","categories":"CentOS","tags":["CentOS","Linux","OpenVPN"]},"headers":[{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"配置easy-rsa","slug":"配置easy-rsa","link":"#配置easy-rsa","children":[]},{"level":2,"title":"服务端","slug":"服务端","link":"#服务端","children":[{"level":3,"title":"创建PKI、CA、证书、密钥","slug":"创建pki、ca、证书、密钥","link":"#创建pki、ca、证书、密钥","children":[]},{"level":3,"title":"整理密钥和证书","slug":"整理密钥和证书","link":"#整理密钥和证书","children":[]},{"level":3,"title":"配置服务器","slug":"配置服务器","link":"#配置服务器","children":[]},{"level":3,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]}]},{"level":2,"title":"证书客户端","slug":"证书客户端","link":"#证书客户端","children":[{"level":3,"title":"创建证书和密钥","slug":"创建证书和密钥","link":"#创建证书和密钥","children":[]},{"level":3,"title":"整理证书和密钥","slug":"整理证书和密钥","link":"#整理证书和密钥","children":[]},{"level":3,"title":"证书客户端配置ovpn文件","slug":"证书客户端配置ovpn文件","link":"#证书客户端配置ovpn文件","children":[]}]},{"level":2,"title":"密码客户端","slug":"密码客户端","link":"#密码客户端","children":[{"level":3,"title":"用户认证脚本","slug":"用户认证脚本","link":"#用户认证脚本","children":[]},{"level":3,"title":"用户密码文件","slug":"用户密码文件","link":"#用户密码文件","children":[]},{"level":3,"title":"用户固定IP配置","slug":"用户固定ip配置","link":"#用户固定ip配置","children":[]},{"level":3,"title":"修改服务器配置支持用户密码登录","slug":"修改服务器配置支持用户密码登录","link":"#修改服务器配置支持用户密码登录","children":[]},{"level":3,"title":"密码客户端配置文件ovpn","slug":"密码客户端配置文件ovpn","link":"#密码客户端配置文件ovpn","children":[]}]},{"level":2,"title":"OpenVPN客户端","slug":"openvpn客户端","link":"#openvpn客户端","children":[]},{"level":2,"title":"提醒","slug":"提醒","link":"#提醒","children":[]}],"relativePath":"centos-openvpn.md","lastUpdated":1673246413000}'),t={name:"centos-openvpn.md"},c=s("",4),r=s("",46);function i(y,C,A,D,d,F){const n=o("Mermaid");return l(),p("div",null,[c,e(n,{id:"mermaid_382ee1e3",graph:"graph%20TB%0AA(%E5%AE%89%E8%A3%85OpenVPN%E5%92%8C%E8%AF%81%E4%B9%A6%E7%94%9F%E6%88%90%E7%9B%B8%E5%85%B3%E4%BE%9D%E8%B5%96)%0AA%20--%3E%20B(%E7%94%9F%E6%88%90CA%E5%92%8C%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AF%81%E4%B9%A6)%0AB%20--%3E%20C(%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AEserver.conf)%0AC%20--%3E%20D(%E6%B7%BB%E5%8A%A0%E9%98%B2%E7%81%AB%E5%A2%99%E8%A7%84%E5%88%99)%0AD%20--%3E%20E(%E5%90%AF%E5%8A%A8OpenVPN%E6%9C%8D%E5%8A%A1)%0AE%20--%3E%20F(%E7%94%9F%E6%88%90%E5%AE%A2%E6%88%B7%E7%AB%AFCA%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6)%0AF%20--%3E%20G(%E6%89%93%E5%8C%85%E7%9B%B8%E5%85%B3%E6%96%87%E4%BB%B6%E6%88%90.ovpn%E4%BE%9B%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BD%BF%E7%94%A8)%0AG%20--%3E%20H(%E5%AE%89%E8%A3%85OpenVPN%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5VPN)"}),r])}const u=a(t,[["render",i]]);export{h as __pageData,u as default};
