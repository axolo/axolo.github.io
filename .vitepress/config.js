import fs from 'fs'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { tree2array } from '@axolo/tree-array'
import icons from './data/icons'
import tag from './utils/tag'
import archive from './utils/archive'
import category from './utils/category'

const pages = []

export default withMermaid({
  title: '方跃明的博客',
  description: '目标领导计划，数据驱动算法。约定大于配置，配置大于编码。',
  lang: 'zh-CN',
  srcDir: './src', // 博客源文件目录
  // outDir: './docs', // 方便部署各种Pages
  // lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/styles/app.css' }],
    ['script', { src: '/scripts/baidu-hm.js' }]
  ],
  themeConfig: {
    lastUpdatedText: '最近更新',
    logo: 'logo.svg',
    algolia: {
      appId: '6LV0F3CFXL',
      apiKey: '91968db34805858d7e66502969a6c787',
      indexName: 'fangyueming'
    },
    nav: [
      { text: '标签', link: '/tag' },
      { text: '归档', link: '/archive' },
      { text: '分类', link: '/category' },
      { text: '备用站', link: 'https://axolo.github.io' }
    ],
    socialLinks: [{
      link: 'https://gitee.com/axolo',
      icon: { svg: icons.gitee }
    }, {
      link: 'https://github.com/axolo',
      icon: 'github'
    }],
    footer: {
      message: '© 2021 fangyueming.cn',
      copyright: '<a href="https://beian.miit.gov.cn">浙ICP备20010733号-2</a>'
    }
  },
  async transformPageData(pageData) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    if(pageData.frontmatter.unsave) return // 过滤不保存的
    const links = tree2array(pageData.headers).map(header => header.link)
    const data = { ...pageData, ...pageData.frontmatter, links }
    delete data.frontmatter
    delete data.headers
    pages.push(data)
  },
  async buildEnd(siteConfig) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    // FIXME: 屏蔽被重复push文章
    const unique = [...new Set(pages.map(p => p.relativePath))]
    const uniquePages = unique.map(u => pages.find(p => p.relativePath === u))
    const data = uniquePages.sort((a, b) => {
      // 第一排序：置顶顺序，第二排序：时间倒序
      const sortA = (a.top || 0) + (a.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      const sortB = (b.top || 0) + (b.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      return sortB.localeCompare(sortA)
    })
    const tagMarkdown = tag(data)
    const archiveMarkdown = archive(data)
    const categoryMarkdown = category(data)
    fs.writeFileSync('./.vitepress/data/docs.json', JSON.stringify(data), { encoding: 'UTF-8' })
    fs.writeFileSync('./src/tag.md', tagMarkdown, { encoding: 'UTF-8' })
    fs.writeFileSync('./src/archive.md', archiveMarkdown, { encoding: 'UTF-8' })
    fs.writeFileSync('./src/category.md', categoryMarkdown, { encoding: 'UTF-8' })
  }
})
