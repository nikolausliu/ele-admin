export function parseBody(body) {
  const temp = body ? body.split('&') : [];
  const res = {};
  temp.forEach(item => {
    const tmp = item.split('=');
    const [name, value] = tmp;
    if (name.length) {
      res[name] = value;
    }
  })
  return res;
}