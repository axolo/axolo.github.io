import { withBase } from 'vitepress'

export default file => withBase(file.replace(/.(md|markdown)$/i, ''))