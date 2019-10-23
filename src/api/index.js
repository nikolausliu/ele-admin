import { get, post } from './request';

export const login = params => {
  return post('/api/login', params);
}

export const logout = () => {
  return post('/api/logout');
}

