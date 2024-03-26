import type { InitialStateInterface } from '@/util/list/typed-slice';
import { listSlice } from '@/util/list/list.slice';
import type { ListInterface } from '@/util/list/list.slice';

export const {
    setItemList: setAllProductsListItemList,
    addItem: addAllProductsListItem,
    resetItemList: resetAllProductsList,
    removeItem: removeAllProductsListItem
} = listSlice('all-products-list').actions;

export const selectAllProductsListList = (state: { allProductsList: InitialStateInterface<ListInterface> }) =>
    state.allProductsList.response.listItemList;

export const allProductsList = listSlice('all-products-list').reducer;
