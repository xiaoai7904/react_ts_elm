import * as React from 'react';

import './app.scss';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.searchFocus = this.searchFocus.bind(this);
  }
  public searchFocus() {
    this.props.history.push('/search');
  }
  public render() {
    return (
      <div className="app">
        <div className="app-search__wrap">
          <input type="text" onFocus={this.searchFocus} placeholder="请输入商家,商品名称" className="app-search__ipt" />
        </div>
      </div>
    );
  }
}

export default App;
