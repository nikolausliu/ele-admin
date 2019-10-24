import { parseBody } from '@/utils/index'
import menu from './data/menu'

export default [
  // 登录
  {
    url: '/api/login',
    method: 'post',
    response: options => {
      const { username, password } = parseBody(options.body)
      if (username === 'admin' && password === '123456') {
        return {
          code: 0,
          msg: 'ok',
          data: {
            token: 'TOKEN',
            menu,
            userInfo: {
              username: 'NikolausLiu',
              avatar: 'http://ww1.sinaimg.cn/large/d7f38664ly1g8853afy4yj203k03kt8k.jpg'
            }
          }
        }
      } else {
        return {
          code: 201,
          msg: '账号或密码错误!',
          data: null
        }
      }
    }
  },
  // 退出登录
  {
    url: '/api/logout',
    method: 'post',
    response: options => {
      return {
        code: 0,
        msg: 'ok',
        data: null
      }
    }
  }
];