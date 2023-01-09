import fs from 'fs'

const buildPages = []

export default {
  title: '方跃明的博客',
  srcDir: './src', // 博客源文件目录
  outDir: './docs', // 方便部署各种Pages
  lastUpdated: true,
  async transformPageData(pageData) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    delete pageData.headers
    buildPages.push(pageData)
  },
  async buildEnd(siteConfig) {
    if(!process.argv.includes('--save')) return // --save = 更新数据
    const data = buildPages.sort((a, b) => {
      // 第一排序：置顶顺序，第二排序：时间倒序
      const sortA = (a.frontmatter.top || 0) + (a.frontmatter.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      const sortB = (b.frontmatter.top || 0) + (b.frontmatter.time?.toISOString() || '0000-00-00T00:00:00.000Z')
      return sortB.localeCompare(sortA)
    })
    fs.writeFileSync('./.vitepress/data/pages.json', JSON.stringify(data), { encoding: 'UTF-8' })
  }
}