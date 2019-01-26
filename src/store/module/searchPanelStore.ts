import { observable, flow, configure } from 'mobx';

import { search, SearchParamsType } from '../../api';

configure({ enforceActions: 'observed' });

export default class SearchPanelStore {

  @observable public searchList: any[];

  public setSearchList = flow(function* searchQuery(params: SearchParamsType): any {
    try {
      const data = yield search(params);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });

  constructor(public rootStore: any) {
    this.searchList = [];
  }
}
