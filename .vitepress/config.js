import fs from 'fs'
import { withMermaid } from 'vitepress-plugin-mermaid'
import icons from './data/icons'

const pages = []

export default withMermaid({
  title: '方跃明的博客',
  description: '方跃明的博客',
  srcDir: './src', // 博客源文件目录
  outDir: './docs', // 方便部署各种Pages
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }],
    ['link', { rel: 'stylesheet', href: 'style.css' }]
  ],
  themeConfig: {
    lastUpdatedText: '最近更新',
    logo: 'logo.svg',
    algolia: {
      appId: 'EAT6H38LZF',
      apiKey: '5a9b06592d7bca3ef746063ea210ad34',
      indexName: 'blog'
    },
    nav: [
      { text: '标签', link: '/tag' },
      { text: '分类', link: '/category' },
      { text: '归档', link: '/archive' }
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
    delete pageData.headers
    pages.push(pageData)
  },
  async buildEnd(siteConfig) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    // FIXME: 屏蔽被重复push文章
    const unique = [...new Set(pages.map(p => p.relativePath))]
    const uniquePages = unique.map(u => pages.find(p => p.relativePath === u))
    const docs = uniquePages.filter(p => !p.frontmatter.unsave) // 过滤不保存的
    const data = docs.sort((a, b) => {
      // 第一排序：置顶顺序，第二排序：时间倒序
      const sortA = (a.frontmatter.top || 0) + (a.frontmatter.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      const sortB = (b.frontmatter.top || 0) + (b.frontmatter.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      return sortB.localeCompare(sortA)
    })
    fs.writeFileSync('./.vitepress/data/docs.json', JSON.stringify(data), { encoding: 'UTF-8' })
  }
})
