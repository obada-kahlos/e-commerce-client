import type { InitialStateInterface } from '@/util/list/typed-slice';
import { listSlice } from '@/util/list/list.slice';
import type { ListInterface } from '@/util/list/list.slice';

export const {
    setItemList: setSearchListItemList,
    addItem: addSearchListItem,
    resetItemList: resetSearchList,
    removeItem: removeSearchListItem
} = listSlice('search-list').actions;

export const selectSearchList = (state: { searchList: InitialStateInterface<ListInterface> }) =>
    state.searchList.response.listItemList;

export const searchList = listSlice('search-list').reducer;
