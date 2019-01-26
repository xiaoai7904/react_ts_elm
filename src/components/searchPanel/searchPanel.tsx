import * as React from 'react';
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';

import './searchPanel.scss';

import { RootStore } from '../../store';

interface PropsType {
  placeholder?: string;
  history?: any;
  rootState: RootStore;
}

@inject('rootState')
@observer
class SearchPanel extends React.Component<PropsType, any> {
  public static defaultProps = {
    placeholder: '搜索商家,商品名称'
  };
  constructor(props: PropsType) {
    super(props);
    this.state = {
      isFocus: false
    };
    this.bindThis();
  }
  public componentDidMount() {
    console.log(this);
    this.props.rootState.searchPanelStore.setSearchList({
      kw: 'k',
      latitude: '29.55537',
      longitude: '114.038918',
      cityId: '749'
    });
  }
  public bindThis() {
    ['back', 'searchFocus', 'searchBlur'].map((item: string) => {
      this[item] = this[item].bind(this);
    });
  }
  public back() {
    this.props.history.goBack();
  }
  /**
   * 搜索框获取焦点
   */
  public searchFocus() {
    this.setState({
      isFocus: true
    });
  }
  /**
   * 搜索框失去焦点
   */
  public searchBlur() {
    this.setState({
      isFocus: false
    });
  }
  public render() {
    return (
      <div className="search-panel">
        <QueueAnim animConfig={[{ opacity: [1, 0], translateY: [0, 50] }, { opacity: [1, 0], translateY: [0, -50] }]} duration={1000}>
          {this.createSearchHeaderPanel()}
          {this.createSearchResultPanel()}
        </QueueAnim>
      </div>
    );
  }
  private createSearchHeaderPanel() {
    const { placeholder } = this.props;
    const { isFocus } = this.state;
    return (
      <div className="search-panel-header__wrap" key="b">
        <div className="search-panel-header__back" onClick={this.back}>
          <i className="iconfont icon-arrowleft" />
        </div>
        <div className="search-panel-header__search">
          <input type="text" placeholder={placeholder} className={isFocus ? 'search-panel-header__search-ipt search-panel-header__search-ipt__focus' : 'search-panel-header__search-ipt'} onFocus={this.searchFocus} onBlur={this.searchBlur} />
        </div>
        <div className="search-panel-header__btn">搜索</div>
      </div>
    );
  }
  private createSearchResultPanel() {
    return (
      <div className="search-result__wrap" key="c">
        <ul className="search-result__list">
          <li className="search-result__detail" />
          <li className="search-result__item" />
        </ul>
      </div>
    );
  }
}

export default SearchPanel;
