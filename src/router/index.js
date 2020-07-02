import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';

// 导入页面
import Home from '../pages/home'
import About from '../pages/about'
import Message from '../pages/message'
// const Message = React.lazy(() => import('../pages/message'));

export default (
  /**BrowserRouter、HashRouter */
  <HashRouter>
    <Redirect from="/" to={'/home'} exact/>
    <Route path={'/home'} component={Home}/>
    <Route path={'/about'} component={About}/>
    <Route path={'/message'}  component={Message}/>
  </HashRouter>
)