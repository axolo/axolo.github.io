import dayjs from 'dayjs'

export default docs => {
  let markdown = '---\ntitle: 归档\nlastUpdated: false\nunsave: true\n---\n\n# 归档\n\n'

  const allYears = docs.map(doc => dayjs(doc.time).format('YYYY')).flat().sort((a, b) => b - a)
  const uniqueYears = [...new Set(allYears)]
  const years = uniqueYears.map(name => ({
    name,
    count: allYears.filter(a => a === name).length,
    docs: docs.filter(d => dayjs(d.time).format('YYYY') === name)
  }))

  years.forEach(year => {
    markdown += `## ${year.name}\n\n`
    year.docs.forEach(doc => {
      markdown += `- [${doc.title}](./${doc.relativePath})\n`
    })
    markdown += '\n'
  })
  return markdown
}
