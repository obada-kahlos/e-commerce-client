import type { InitialStateInterface } from '@/util/list/typed-slice';
import { listSlice } from '@/util/list/list.slice';
import type { ListInterface } from '@/util/list/list.slice';

export const {
    setItemList: setProductsTypeListItemList,
    addItem: addProductsTypeListItem,
    resetItemList: resetProductsTypeList,
    removeItem: removeProductsTypeListItem
} = listSlice('products-type-list').actions;

export const selectProductsTypeListList = (state: { productsTypeList: InitialStateInterface<ListInterface> }) =>
    state.productsTypeList.response.listItemList;

export const productsTypeList = listSlice('products-type-list').reducer;
