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
    logo: '/logo.svg',
    hostname: 'https://blog.fangyueming.cn',
    repo: 'https://github.com/axolo/axolo.github.io',
    nav: [
      { text: '首页', link: '/', icon: 'home' },
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
        Zhihu: 'https://www.zhihu.com/people/axolo',
        Github: 'https://github.com/axolo',
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

    pwa: {
      favicon: '/favicon.ico',
      cachePic: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Guide',
            short_name: 'Guide',
            url: '/guide/',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
              {
                src: '/assets/icon/guide-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
