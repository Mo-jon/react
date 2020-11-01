import React, { Suspense, lazy } from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';

// 配置路由
const routes = [
  { path: "/home", component: lazy(() => import('../pages/home')) },
  { path: "/login", component: lazy(() => import('../pages/login')) },
  // 测试页
  { path: "/demo", component: lazy(() => import('../Demo')) },
  // 404页,必须使用Switch,且放在最后 (以上所有路由未找到,执行这里
  { path: "**", component: lazy(() => import('../pages/404')) },
]

/**
 * 构建导出 router DOM
 * Routes 支持懒加载 lazy(() => import('path')), 需要包裹<Suspense fallback={null}>{Routes}</Suspense>
 * 挂载 Routes, Suspense 支持 lazy(() => import('path'))
 * 使用Hash模式<HashRouter>、<BrowserRouter>
 * 重载<Redirect from="path" to={'path'} exact/>
 */
export default (
  <Suspense fallback={null}>
    <HashRouter>
      <Switch>
        <Redirect from='/' to={'/home'} exact/>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component = {route.component}
          />
        ))}
      </Switch>
    </HashRouter>
  </Suspense>
)