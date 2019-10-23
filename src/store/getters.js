const getters = {
  sidebarFold: state => state.app.sidebarFold,
  headerFixed: state => state.app.headerFixed,
  menu: state => state.user.menu,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
}

export default getters