import * as React from 'react';

export default class My extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.goSearch = this.goSearch.bind(this);
  }
  public goSearch() {
    this.props.history.push('/search');
  }
  public render() {
    return <div onClick={this.goSearch}>my</div>;
  }
}
