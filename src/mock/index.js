import Mock from 'mockjs'
import { parseBody } from '@/utils/index'

Mock.mock('/api/login', 'post', (options) => {
  const { username, password } = parseBody(options.body);
  console.log(username, password)
  if (username === 'admin' && password === '123456') {
    return {
      msg: 'ok',
      code: 0,
      data: null
    }
  } else {
    return {
      msg: '账号或密码错误!',
      code: 201,
      data: null
    }
  }
})