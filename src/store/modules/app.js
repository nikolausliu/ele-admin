const state = {
  sidebar: {
    fold: false,  // 是否折叠
  }
}

const mutations = {
  SWITCH_SIDEBAR_FOLD(state) {
    state.sidebar.fold = !state.sidebar.fold;
  }
}

const actions = {
  switchSidebarFold({ commit }) {
    commit('SWITCH_SIDEBAR_FOLD');
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}