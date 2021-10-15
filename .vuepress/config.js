module.exports = {
  title: "个人技术",
  description: '方跃明的技术博客',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/axolo', icon: 'reco-github' }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      },
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      }
    },
    logo: '/head.png',
    authorAvatar: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '方跃明',
    // 备案
    record: '浙ICP备20010733号-1',
    recordLink: 'http://beian.miit.gov.cn/',
    startYear: '2019',
    friendLink: []
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/medium-zoom',
    [ '@vuepress/google-analytics', { 'ga': 'UA-2935054-6' }],
    'vuepress-plugin-mermaidjs'
  ],
}
