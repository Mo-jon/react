import { createStore } from 'redux'

/**
 * state存储, 初始化
 * 获取state，例：Store.getState().user
 * Store.subscribe()订阅state更新
 */
const states = {
  user: {
    id: "",
    token: ""
  }
};

/**
 * action方法
 * Store.dispatch()调度action，更新state
 */
const actions = {
  // 设置user到localStorage
  setUser: (state, value) => {
    let user = JSON.stringify(value)
    localStorage.setItem('user', user)
    state.user = JSON.parse(user)
  },
  // 从localStorage清除user
  clearUser: (state) => {
    localStorage.removeItem('user')
    state.user = {}
  }
};

/**
 * 构建Store实列,
 * @param {object} callback 注册actions
 * @param {object} states 所有状态
 * 注意：callback(state, action) 返回 newState
 */
const Store = createStore(
  (state, action) => {
    // action.type是action名, state所有状态
    actions[action.type] && actions[action.type](state, action.value);
    // 返回 newState
    return state
  },
  states
);

// 自动登录
(function () {
  let user = localStorage.getItem('user')
  console.log("自动登录从localStorage取出user", user);

  // 用dispatch调度action,更新 user
  Store.dispatch({ type: 'setUser', value: JSON.parse(user) });
})();
export default Store