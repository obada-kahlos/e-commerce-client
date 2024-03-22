import type { InitialStateInterface } from '@/util/list/typed-slice';
import { listSlice } from '@/util/list/list.slice';
import type { ListInterface } from '@/util/list/list.slice';

export const {
    setItemList: setLaptopListItemList,
    addItem: addLaptopListItem,
    resetItemList: resetLaptopList,
    removeItem: removeLaptopListItem
} = listSlice('laptop-list').actions;

export const selectLaptopListList = (state: { laptopList: InitialStateInterface<ListInterface> }) =>
    state.laptopList.response.listItemList;

export const laptopList = listSlice('laptop-list').reducer;
