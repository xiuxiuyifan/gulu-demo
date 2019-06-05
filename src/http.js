const path = require('path')

const core = (method, url, option) => {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.send(option && option.data)
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      option.success(xhr.responseText)
    }
  }
}
export default {
  get: (url, option) => {
    core('get', url, option)
  },
  post: (url, option) => {
    core('post', url, option)
  },
}
