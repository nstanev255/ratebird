import { configureStore } from '@reduxjs/toolkit';
import queryParams from '@/redux/queryParams';

type InitialState = {
  queryParams: {
    [key: string]: string;
  };
};

const store = configureStore({
  reducer: { queryParams },
});

export const selectQueryParams = (state: InitialState) => state.queryParams;

export default store;
