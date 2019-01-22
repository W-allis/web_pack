import $ from 'jquery'

function Request() {
  this.headers = {}
}

Request.prototype.setHeaders = function(callback) {
  callback(this.headers)
}

const request = new Request()

request.setHeaders(config => {
  config['token'] = '123456'
})

request.getJson = (url, headers = {}) => {
  return $.ajax({
    url: url,
    type: 'get',
    headers: Object.assign(request.headers, headers)
  })
  .then(extractBody)
  .catch(handleError)
}

request.postJson = (url, data, headers = {}) => {
  return $.ajax({
    url: url,
    type: 'post',
    data: JSON.stringify(data),
    headers: Object.assign(request.headers, headers)
  })
  .then(extractBody)
  .catch(handleError)
}

function extractBody(res) {
  return res
}

function handleError(error) {
  return new Error('我是错误信息')
}
// debugger
export default request