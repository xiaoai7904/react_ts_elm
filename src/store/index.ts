import SearchPanelStore from './module/searchPanelStore'
/**
 * 根节点state状态管理器
 */
class RootStore {
    public searchPanelStore: SearchPanelStore
    constructor() {
        this.searchPanelStore = new SearchPanelStore(this)
    }
}
export {RootStore}

export default new RootStore()