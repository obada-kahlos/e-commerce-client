import type { SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateInterface<T> {
	isLoading: boolean;
	response: T;
}

export function createTypedSlice<T, Reducers extends SliceCaseReducers<InitialStateInterface<T>>>({
	name = '',
	initialState,
	reducers,
	extraReducers
}: {
	name: string;
	initialState: InitialStateInterface<T>;
	reducers: ValidateSliceCaseReducers<InitialStateInterface<T>, Reducers>;
	extraReducers?: (builder: unknown) => void;
}) {
	return createSlice({
		name,
		initialState,
		reducers: {
			...reducers
		},
		extraReducers: extraReducers
	});
}
