import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type QueryParam = {
  key: string;
  value: string;
};
type InitialState = {
  [key: string]: string;
};

const initialState = {} as InitialState;

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    addQueryParam: (state, action: PayloadAction<QueryParam>) => {
      state[action.payload.key] = action.payload.value;
    },

    removeQueryParam: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});
export const { addQueryParam, removeQueryParam } = queryParamsSlice.actions;
export default queryParamsSlice.reducer;
