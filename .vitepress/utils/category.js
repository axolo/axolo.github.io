export default docs => {
  let markdown = '---\ntitle: 分类\nlastUpdated: false\nunsave: true\n---\n\n# 分类\n'

  const allTypes = docs.map(doc => doc.category).flat()
  const uniqueTypes = [...new Set(allTypes)]
  const types = uniqueTypes.map(name => ({
    name,
    count: allTypes.filter(a => a === name).length,
    docs: docs.filter(d => d.category === name)
  })).sort((i, j) => j.count - i.count)

  types.forEach(type => {
    markdown += `\n## ${type.name}\n\n`
    type.docs.forEach(doc => {
      markdown += `- [${doc.title}](./${doc.relativePath})\n`
    })
  })
  return markdown
}
