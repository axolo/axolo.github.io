import fs from 'fs'
import { withMermaid } from "vitepress-plugin-mermaid";

const buildPages = []

export default withMermaid({
  title: '方跃明的博客',
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
    nav: [
      { text: '标签', link: '#' },
    ],
    socialLinks: [{
      link: 'https://gitee.com/axolo',
      icon: {
        svg: '<svg t="1673407639420" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2264" width="81" height="81"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#767676" p-id="2265"></path></svg>'
      }
    }, {
      link: 'https://github.com/axolo',
      icon: 'github'
    }],
  },
  async transformPageData(pageData) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    delete pageData.headers
    buildPages.push(pageData)
  },
  async buildEnd(siteConfig) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    // FIXME: 屏蔽被重复push文章
    const unique = [...new Set(buildPages.map(p => p.relativePath))]
    const uniquePages = unique.map(u => buildPages.find(p => p.relativePath === u))
    const data = uniquePages.sort((a, b) => {
      // 第一排序：置顶顺序，第二排序：时间倒序
      const sortA = (a.frontmatter.top || 0) + (a.frontmatter.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      const sortB = (b.frontmatter.top || 0) + (b.frontmatter.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      return sortB.localeCompare(sortA)
    })
    fs.writeFileSync('./.vitepress/data/pages.json', JSON.stringify(data), { encoding: 'UTF-8' })
  }
})
