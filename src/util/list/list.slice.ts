import type { PayloadAction } from '@reduxjs/toolkit';
// import type { ListInterface } from './data-access';
import { createTypedSlice } from './typed-slice';

export interface InitialStateInterface<T> {
	isLoading: boolean;
	response: T;
}

export interface ListInterface {
	listItemList: object[];
	selectedListItemIndex: number;
}

const initialState: InitialStateInterface<ListInterface> = {
	isLoading: false,
	response: {
		listItemList: [],
		selectedListItemIndex: -1
	}
};

export const listSlice = (section: string) =>
	createTypedSlice({
		name: `${section}-list`,
		initialState,
		reducers: {
			resetItemList: (state: InitialStateInterface<ListInterface>) => {
				state.response.listItemList = [];
			},
			setItemList: (state: InitialStateInterface<ListInterface>, action: PayloadAction<object[]>) => {
				if (action.payload) state.response.listItemList = action.payload;
			},
			addItem: (state: InitialStateInterface<ListInterface>, action) => {
				state.response.listItemList.push(action.payload);
			},
			addListToList: (state: InitialStateInterface<ListInterface>, action: PayloadAction<object[]>) => {
				if (action.payload) state.response.listItemList = state.response.listItemList.concat(action.payload);
			},
			updateItem: (
				state: InitialStateInterface<ListInterface>,
				action: PayloadAction<{ index: number; item: object }>
			) => {
				state.response.listItemList[action.payload.index] = action.payload.item;
			},
			removeItem: (state: InitialStateInterface<ListInterface>, action: PayloadAction<{ index: number }>) => {
				if (action.payload)
					state.response.listItemList = state.response.listItemList.filter(
						(element, index) => index !== action.payload.index
					);
			},
			setSelectedListItemIndex: (state: InitialStateInterface<ListInterface>, action: PayloadAction<number>) => {
				state.response.selectedListItemIndex = action.payload;
			}
		}
	});
