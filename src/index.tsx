import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import rootState from './store';
import Tab from './components/tabNav';
import SearchPanel from './components/searchPanel';
import FastClick from 'fastclick';
import 'lib-flexible';

import './index.css';

// 解决click 300ms延迟问题
FastClick.attach(document.body);

import registerServiceWorker from './registerServiceWorker';

class Router extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      tabList: [
        {
          path: '/home/main',
          text: '首页',
          icon: 'iconfont icon-home',
          selectIcon: 'iconfont icon-home-fill'
        },
        {
          path: '/home/find',
          text: '发现',
          icon: 'iconfont icon-compass',
          selectIcon: 'iconfont icon-compass-fill'
        },
        {
          path: '/home/order',
          text: '订单',
          icon: 'iconfont icon-file-text',
          selectIcon: 'iconfont icon-file-text-fill'
        },
        {
          path: '/home/my',
          text: '我的',
          icon: 'iconfont icon-user',
          selectIcon: 'iconfont icon-user'
        }
      ]
    };
  }
  public render() {
    const { tabList } = this.state;
    return <Tab list={tabList} />;
  }
}

ReactDOM.render(
  <Provider rootState={rootState}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Router} />
        <Route path="/search" component={SearchPanel} />
        <Redirect path="/" to="/home/main" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
