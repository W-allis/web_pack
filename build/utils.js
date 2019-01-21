const path = require('path')
const config = require('../config')

exports.resolve = function(_path) {
  const static_path = process.env.BASE_ENV === 'prod' ? config.build.static_path : config.dev.static_path
  return path.posix.join(static_path, _path)
}