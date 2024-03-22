import type { InitialStateInterface } from '@/util/list/typed-slice';
import { listSlice } from '@/util/list/list.slice';
import type { ListInterface } from '@/util/list/list.slice';

export const {
    setItemList: setAccessoryListItemList,
    addItem: addAccessoryListItem,
    resetItemList: resetAccessoryList,
    removeItem: removeAccessoryListItem
} = listSlice('accessory-list').actions;

export const selectAccessoryListList = (state: { accessoryList: InitialStateInterface<ListInterface> }) =>
    state.accessoryList.response.listItemList;

export const accessoryList = listSlice('accessory-list').reducer;
