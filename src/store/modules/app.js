const state = {
  sidebar: {
    fold: false,  // 是否折叠
  },
  header: {
    fixed: true,  // 是否固定
  }
}

const mutations = {
  SWITCH_SIDEBAR_FOLD(state) {
    state.sidebar.fold = !state.sidebar.fold;
  },
  SWITCH_HEADER_FIXED(state) {
    state.header.fixed = !state.header.fixed;
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