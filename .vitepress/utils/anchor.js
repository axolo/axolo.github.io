export default id => {
  if ([undefined, null, ''].includes(id)) return id
  const s = isNaN(parseFloat(id)) ? id : ('_' + id)
  return s.replace(/[\s+|.]/g, '_')
}