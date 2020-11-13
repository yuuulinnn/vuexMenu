const state = {
  userInfo: {
    id: 0, // 用户id
    username: '', // 账号
    nickname: '', // 昵称
    email: '', // 邮箱
    phone: '', // 电话号码
    token: '' // 用户token
  },
  language: {
    lang: 'en'// 国际化默认语言
  },
  warehouseInfo: {
    id: 0, // 仓库id
    name: '' // 仓库名字
  },
  navMenu: [], // 菜单
  navMenuIndex: '', // 当前激活菜单的 index
  subMenu: [], // 子菜单
  menuTag: [] // 菜单标签--Tag
}

const getters = {
  getLanguage (state) {
    return state.language.lang
  }
}

const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  },
  setWarehouseInfo (state, data) {
    state.warehouseInfo = data
  },
  setLanguage (state, data) {
    state.language.lang = data // 好像直接赋值getters也会响应
  },
  setNavMenu (state, data) {
    state.navMenu = data
    // 子菜單内容隨著主菜單的改變而改變，主要作用于切換語言時的交互功能
    state.subMenu = state.navMenu.reduce((prev, cur) => {
      return prev.concat(cur.subM)
    }, [])
  },
  // 设置当前激活菜单的 index
  setNavMenuIndex (state, data) {
    state.navMenuIndex = data
  },
  // 选中子菜单，标签栏交互
  setMenuTag (state, data) {
    if (!data) state.menuTag = []
    // 清空当前所有高亮tag
    for (let i = 0; i < state.menuTag.length; i++) {
      if (state.menuTag[i].active) {
        state.menuTag[i].active = !state.menuTag[i].active
        break
      }
    }

    let {id} = data
    let __index = 0
    let result = state.menuTag.find((item, index) => {
      if (item.id === id) __index = index
      return item.id === id
    })
    if (result) {
      state.menuTag[__index].active = true
    } else {
      state.menuTag.push(Object.assign({}, data, {active: true}))
    }
  },
  // 激活标签
  selectMenuTag (state, data) {
    for (let i = 0; i < state.menuTag.length; i++) {
      if (state.menuTag[i].active) { state.menuTag[i].active = !state.menuTag[i].active } // 去掉前活动标签的高亮效果
      if (data.id === state.menuTag[i].id) { state.menuTag[i].active = true } // 匹配到当前活动标签，高亮显示
    }
  },
  // 关闭标签
  closeMenuTag (state, index) {
    if (state.menuTag[index].active) { // 如果需要删除的标签是活动标签
      state.menuTag.splice(index, 1)
      state.menuTag[state.menuTag.length - 1].active = true // 数组最后一个标签高亮
    } else {
      state.menuTag.splice(index, 1)
    }
  },
  // 切换语言后，重置标签语言文字
  setTagText (state, data) {
    let {index, title} = data
    state.menuTag[index].title = title
  }
}

const actions = {

}

const store = {
  state,
  getters,
  mutations,
  actions
}

export default store
