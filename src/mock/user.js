import { parseBody } from '@/utils/index';
import menu from '@/menu';

export default [
  {
    url: '/api/login',
    method: 'post',
    response: options => {
      const { username, password } = parseBody(options.body);
      if (username === 'admin' && password === '123456') {
        return {
          code: 0,
          msg: 'ok',
          data: {
            token: 'TOKEN',
            menu
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
  }
];