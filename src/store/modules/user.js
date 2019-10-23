import { setStorage, getStorage, clearStorage } from '@/utils';
import * as api from '@/api';

const moduleKey = 'user';

const state = {
  token: getStorage(`${moduleKey}/token`) || '',
  menu: getStorage(`${moduleKey}/menu`) || [],
  userInfo: getStorage(`${moduleKey}/userInfo`) || {},
}

const mutations = {
  LOGIN(state, payload) {
    state.token = payload.token || '';
    state.menu = payload.menu || [];
    state.userInfo = payload.userInfo || {};
    Object.keys(payload).forEach(item => {
      const key = `${moduleKey}/${item}`;
      setStorage([key], payload[item]);
    });
  },
  LOGOUT(state) {
    state.token = '';
    state.menu = [];
    state.userInfo = {};
    clearStorage();
  }
}

const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      api.login(params).then(res => {
        const { code, msg, data } = res;
        if (code === 0) {
          commit('LOGIN', data);
          resolve(data);
        } else {
          reject(new Error(msg));
        }
      }).catch(err => {
        reject(err);
      });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      api.logout().then(res => {
        console.log(res);
        const { code, msg } = res;
        if (code === 0) {
          commit('LOGOUT');
          resolve();
        } else {
          reject(new Error(msg));
        }
      }).catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}