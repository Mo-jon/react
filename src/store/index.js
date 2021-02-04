import { createStore } from 'redux'

const Store = createStore(
  /**
   * action方法, 更新state
   * @param {object} state 所有状态
   * @param {object} action 通过dispatch()传入的方法参数
   */
  function (state, action) {
    // console.log('[Store action]', state, action)
    switch (action.type) {
      // 设置 user
      case 'setUser': setUser(action.value); break;

      // 获取 user
      case 'getUser': getUser(); break;

      // 清除 user
      case 'clearUser': clearUser(); break;

      default:
        return state;
    }
    return state


    // 从localStorage取出user
    function getUser() {
      let user = localStorage.getItem('user')
      state.user = JSON.parse(user)
    }

    // 添加user到localStorage
    function setUser(value) {
      let user = JSON.stringify(value)
      localStorage.setItem('user', user)
      getUser();
    }

    // 从localStorage清除user
    function clearUser(value) {
      localStorage.removeItem('user')
      getUser();
    }
  },
  /**
   * state存储, 初始化
   */
  {
    user: {
      id: "",
      token: ""
    }
  }
)

// 用dispatch调度action
// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Hello word'
// })

export default Store