import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Store from './store'
import Routes from './router';

function App() {
  // 获取最新 user
  Store.dispatch({type: 'getUser'});
  
  return (
    <div className="App">
        {/* 挂载 redux store */}
        <Provider store={Store}>
          {Routes}
        </Provider>
    </div>
  );
}

export default App
