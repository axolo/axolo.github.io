const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: '方跃明的博客',
  description: 'WEB应用开发技术笔记',
  dest: 'docs',
  head: [
    ['script', { src: '//cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: '//cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: '//cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: '//cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-RKKX4QJ4PJ', async: true }],
    ['script', { src: '/scripts/gtag.js' }],
    ['script', {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      'data-ad-client': 'ca-pub-4521521675997745',
      async: true,
    }],
  ],
  locales: {
    '/': { lang: 'zh-CN' },
  },
  // comment: {
  //   type: 'waline',
  //   serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
  // },
  themeConfig: {
    author: '方跃明',
    hostname: 'https://blog.fangyueming.cn',
    logo: '/logo.svg',
    repo: 'https://github.com/axolo/axolo.github.io',
    nav: [
      { text: '首页', link: '/', icon: 'home' },
      { text: '国内镜像', link: 'https://fangyueming.gitee.io', icon: 'link' },
      { text: 'LeoVue', link: 'https://axolo.github.io/leovue', icon: 'vue' },
    ],
    prevLinks: true,
    nextLinks: true,
    blog: {
      // intro: '/intro/',
      sidebarDisplay: 'mobile',
      links: {
        Github: 'https://github.com/axolo',
        Gitee: 'https://gitee.com/axolo',
        Zhihu: 'https://www.zhihu.com/people/axolo',
        Weibo: 'https://weibo.com/u/2129355705',
      },
    },
    footer: {
      display: true,
      content: '<a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备20010733号-2</a>',
    },
    copyright: {
      status: 'global',
    },
    git: {
      timezone: 'Asia/Shanghai',
      contributor: false,
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard'],
      },
    },
    custom: {
      contentTop: './components/ad.vue',
    }
  },
});
