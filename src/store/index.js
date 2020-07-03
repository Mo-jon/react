import { createStore } from 'redux'

let store = createStore(
  // action方法, 更新state
  function(state, action){
    // console.log('[Store action]', state, action)

    switch (action.type) {
      // 设置 user
      case 'setUser':
        state.user=action.value
        break;
    
      default:
        break;
    }
    return state
  },
  // state存储, 初始化
  {
  user: {
    id: 0,
    token: '123456'
  }
})

// 用dispatch触发action
// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Hello word'
// })

export default store