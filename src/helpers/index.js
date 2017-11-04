const md = require('markdown-it')()
const emoji = require('markdown-it-emoji')

md.use(emoji)

const markdownToHtml = rawData => {
  return md.render(rawData)
}

export default markdownToHtml
