/**
 * 请求体payload解析为对象形式 eg: name=niko&age=25 -> {name: 'niko', age: 25}
 * 也可以解析location的查询参数 eg: ?name=niko&age=25 -> {name: 'niko', age: 25}
 * @param {*} body 请求体payload | location.search
 */
export function parseBody(body) {
  body = body ? body : window.location.search
  let temp = body.startsWith('?') ? body.substring(1) : body
  temp = temp ? temp.split('&') : []
  const res = {}
  temp.forEach(item => {
    const tmp = item.split('=')
    const [name, value] = tmp
    if (name.length) {
      res[decodeURIComponent(name)] = decodeURIComponent(value)
    }
  })
  return res
}

export function parseQueryString(str) {
  str = str == null ? location.search : str
  let reg = /(([^?&=]+)(?:=([^?&=]*))*)/g
  let result = {}
  let match
  let key
  let value
  while ((match = reg.exec(str))) {
    key = match[2]
    value = match[3] || ''
    result[key] = decodeURIComponent(value)
  }
  return result
}

/**
 * 封装 `sessionStorage.setItem`
 * @param {*} key
 * @param {*} value
 */
export function setStorage(key, value) {
  try {
    return sessionStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    return console.warn(
      `设置 ${key} -> ${JSON.stringify(value)} 时发生错误: ${e.message}`
    )
  }
}

/**
 * 封装 `sessionStorage.getItem`
 * @param {*} key
 */
export function getStorage(key) {
  try {
    const data = sessionStorage.getItem(key)
    return JSON.parse(data)
  } catch (e) {
    return console.warn(`sessionStorage中不存在${key}`)
  }
}

export function clearStorage() {
  sessionStorage.clear()
}

/**
 *
 * @param {*} key
 * @param {*} from
 * @param {*} to
 */
export function switchCase(key, from, to) {
  /**
   * case:
   * upperCamelCase: HelloWorld
   * lowerCamelCase: helloWorld
   * upperSnakeCase: HELLO_WORLD
   * lowerSnakeCase: hello_world
   * upperKebabCase: Hello-WORLD
   * lowerKebabCase: hello-world
   * 注：不考虑命名中含有 $ 符号的情况
   */
  const patternMap = {
    upperCamelCase: /([A-Z])([a-z\d])/g, // TODO: 无法匹配 'ABc'
    lowerCamelCase: /([a-z\d])([A-Z])/g,
    upperSnakeCase: /((([A-Z\d]+)(?:_))+)([A-Z\d]+)/g,
    lowerSnakeCase: /([a-z\d]+)_/g,
    upperKebabCase: /([A-Z\d]+)-/g,
    lowerKebabCase: /([a-z\d]+)-/g,
  }
}

export function camelCase2UpperKebabCase(key) {
  function upperToHyphenLower(match) {
    return '_' + match
  }
  return key.replace(/[A-Z]/g, upperToHyphenLower).toUpperCase()
}
