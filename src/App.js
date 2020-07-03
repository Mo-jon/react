import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Store from './store'
import Routes from './router';

function App() {
  return (
    <div className="App">
        {/* 挂载 redux store */}
        <Provider store={Store}>
          {/* 挂载 Routes */}
          {Routes}
        </Provider>
    </div>
  );
}

export default App
