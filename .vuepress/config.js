const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: '方跃明的博客',
  description: '分享软件应用开发技术',
  dest: './docs',
  head: [
    // ['script', { src: '//cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    // ['script', { src: '//cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    // ['script', { src: '//cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    // ['script', { src: '//cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  themeConfig: {
    author: '方跃明',
    hostname: 'https://blog.fangyueming.cn',
    logo: '/logo.svg',
    repo: 'https://github.com/axolo/axolo.github.io',
    nav: [
      { text: '首页', link: '/', icon: 'home' },
      { text: '码云', link: 'https://gitee.com/axolo', icon: 'gitee' },
    ],
    // sidebar: {
    //   '/': [
    //     '',
    //     'home',
    //     'slides',
    //     'layout',
    //     {
    //       title: 'Guide',
    //       icon: 'creative',
    //       prefix: 'guide/',
    //       children: ['', 'page', 'markdown', 'disable', 'encrypt'],
    //     },
    //   ],
    // },

    blog: {
      intro: '/intro/',
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
      content: '默认页脚',
    },

    comment: {
      type: 'waline',
      serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
    },

    icp: {
      beian: '浙ICP备20010733号-2',
      link: 'http://beian.miit.gov.cn/',
    },

    copyright: {
      status: 'global',
    },

    git: {
      timezone: 'Asia/Shanghai',
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard'],
      },
    },
  },
});
