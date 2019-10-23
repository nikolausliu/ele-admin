import { setStorage, getStorage } from '@/utils';

const moduleKey = 'app';

const defaultState = {
  sidebarFold: false,
  headerFixed: true,
};

const state = {
  sidebarFold: getStorage(`${moduleKey}/sidebarFold`) || defaultState.sidebarFold,
  headerFixed: getStorage(`${moduleKey}/headerFixed`) || defaultState.headerFixed,
}

const mutations = {
  SWITCH_SIDEBAR_FOLD(state) {
    state.sidebarFold = !state.sidebarFold;
    setStorage(`${moduleKey}/sidebarFold`, state.sidebarFold);
  },
  SWITCH_HEADER_FIXED(state) {
    state.headerFixed = !state.headerFixed;
    setStorage(`${moduleKey}/headerFixed`, state.headerFixed);
  }
}

const actions = {
  switchSidebarFold({ commit }) {
    commit('SWITCH_SIDEBAR_FOLD');
  },
  switchHeaderFixed({ commit }) {
    commit('SWITCH_HEADER_FIXED');
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}