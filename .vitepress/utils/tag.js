export default docs => {
  let markdown = '---\ntitle: 归档\nlastUpdated: false\nunsave: true\n---\n# 标签\n'

  const allTags = docs.map(doc => doc.tags || []).flat()
  const uniqueTags = [...new Set(allTags)]

  const tags = uniqueTags.map(name => ({
    name,
    count: allTags.filter(a => a === name).length,
    docs: docs.filter(d => d.tags.includes(name))
  })).sort((i, j) => j.count - i.count)

  tags.forEach(tag => {
    markdown += `## ${tag.name}\n\n`
    tag.docs.forEach(doc => {
      markdown += `- [${doc.title}](./${doc.relativePath})\n`
    })
    markdown += '\n'
  })
  return markdown
}