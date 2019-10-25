import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

// http://0.0.0.0:7300/mock/5d9ff076f9dfff3d6c15402e/manage
axios.defaults.baseURL = ''

axios.interceptors.request.use(
  config => {
    const token = ''
    config.headers['Authorization'] = 'Bearer ' + token
    return config
  },
  error => {
    console.dir(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    /**
     * response结构
     * {
     *   data: {},          服务器提供的响应（一般后端返回的数据中也会包含 状态码 和 状态信息，这和服务器响应的 状态码 和 状态信息是不同的，注意区分）
     *   status: 200,       来自服务器响应的 HTTP 状态码
     *   statusText: 'OK',  来自服务器响应的 HTTP 状态信息
     *   headers: {},       服务器响应的头
     *   config: {},        是为请求提供的配置信息
     *   request: {}        产生这个相应的请求，在浏览器里是XMLHttpRequest的实例，在node.js里是http.ClientRequest的实例
     * }
     */

    // 1. 如果在拦截器里做了细粒度的判断，业务代码可以少写一些重复代码，但一些边缘情况的处理会比较麻烦
    // const { data, code, msg } = response.data;  // 后端返回的数据结构是 { data, code, msg }
    // if (code === 0) {
    //   // 业务代码可以直接then(data => {})，但是一些边缘情况就比较麻烦
    //   return data;
    // } else {
    //   // code不为0的情况也会reject,但是reject的是后端返回数据中的msg，而拦截器的error回调reject的是Error对象，表现不一致。
    //   return Promise.reject(msg);
    // }

    // 2. 如果在拦截器里直接 return response.data，业务代码里会多一些重复代码（判断data.code），但自由度较高
    return response.data
  },
  error => {
    /**
     * error结构
     * {
     *   response: {},  同上面的response结构
     *   request: {},   同上面的response.request
     *   config: {},    同上面的response.config
     *   message: '',   错误信息
     *   stack: '',     错误堆栈信息
     * }
     */
    // 错误有多种可能,但是错误结构还是一致的
    if (error.response) {
      // 做出了请求，并且服务器响应了，但是服务器响应的状态码超出了 2xx 的范围，eg: 404
    } else if (error.request) {
      // 做出了请求，但没收到服务器的相应，此时response是undefined，eg:请求跨域
    } else {
      // 可能是axios的设置出错触发的错误
    }
    console.dir('error', error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export const $axios = axios

export function get(url, params = {}, options = {}) {
  return axios.get(url, Object.assign({}, { params }, options))
}

export function post(url, data = {}, options = {}) {
  return axios.post(
    url,
    qs.stringify(data),
    Object.assign(
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      options
    )
  )
}
