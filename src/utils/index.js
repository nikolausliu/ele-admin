/**
 * 请求体payload解析为对象形式 eg: name=niko&age=25 -> {name: 'niko', age: 25}
 * 也可以解析location的查询参数 eg: ?name=niko&age=25 -> {name: 'niko', age: 25}
 * @param {*} body 请求体payload | location.search
 */
export function parseBody(body) {
  body = body ? body : window.location.search;
  let temp = body.startsWith('?') ? body.substring(1) : body;
  temp = temp ? temp.split('&') : [];
  const res = {};
  temp.forEach(item => {
    const tmp = item.split('=');
    const [name, value] = tmp;
    if (name.length) {
      res[decodeURIComponent(name)] = decodeURIComponent(value);
    }
  })
  return res;
}

export function parseQueryString(str) {
  str = str == null ? location.search : str;
  let reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  let result = {};
  let match;
  let key;
  let value;
  while (match = reg.exec(str)) {
    key = match[2];
    value = match[3] || '';
    result[key] = decodeURIComponent(value);
  }
  return result;
}

