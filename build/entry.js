const fs = require('fs')
const path = require('path')

const moduleDir = path.resolve(__dirname, '../src/views')
const entry = {
}

const html_list = fs.readdirSync(moduleDir)

html_list.forEach(file => {
  entry[file] = ['webpack-hot-middleware/client?reload=true', `./src/views/${file}`]
  // entry[file] = `./src/views/${file}`
})

module.exports = entry