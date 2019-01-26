import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import App from '../../view/app';
import Find from '../../view/find';
import Order from '../../view/order';
import My from '../../view/my';

import './tabNav.scss';

interface ListItem {
  path?: string;
  text?: string;
  icon?: string;
  selectIcon?: string;
}
interface PropsType {
  list: ListItem[];
}
interface StateType {
  tabbar: any[];
  currentPath: string;
}

/**
 * tabNav组件
 */
class Tab extends React.Component<PropsType, StateType> {
  constructor(props: PropsType, context: any) {
    super(props, context);
    const { list } = this.props;
    // Tips: 这个获取不到router的match对象？现在不知道是什么原因
    this.state = {
      tabbar: list.map((item: ListItem) => {
        return { text: item.text, icon: item.icon, selectIcon: item.selectIcon, path: item.path };
      }),
      currentPath: window.location.pathname // 获取当前路由地址
    };
  }
  /**
   * 更新当前路由信息
   * @param event 
   * @param path 
   */
  public changeRouter(event: React.MouseEvent<HTMLElement>, path: string) {
    this.setState({
      currentPath: path
    });
  }
  public render():JSX.Element {
    const { tabbar, currentPath } = this.state;
    return (
      <div className="tab">
        <div className="tab__panel">
          <div className="tab__view-item">
            <Route path="/home/main" component={App} />
            <Route path="/home/find" component={Find} />
            <Route path="/home/order" component={Order} />
            <Route path="/home/my" component={My} />
          </div>
        </div>
        <div className="tab__tabbar">
          {tabbar.map((item: any, index: number) => {
            return (
              <Link to={item.path} key={index} className={currentPath === item.path ? 'tab__tabbar-item actived' : 'tab__tabbar-item'} onClick={this.changeRouter.bind(this, event, item.path)}>
                <div>
                  {currentPath === item.path && <i className={item.selectIcon} />}
                  {currentPath !== item.path && <i className={item.icon} />}
                </div>
                <p>{item.text}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tab;
