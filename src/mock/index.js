import Mock from 'mockjs'
import user from './user'

const mockList = [...user]

mockList.forEach(item => {
  Mock.mock(item.url, item.method, item.response)
})
