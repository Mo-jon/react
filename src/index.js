import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import Routes from './router';

// 全局样式
import './index.css';

// 获取最新 user
Store.dispatch({ type: 'getUser' });

ReactDOM.render(
  // 挂载 redux store
  <Provider store={Store}>
    {Routes}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();