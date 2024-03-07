import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { loading: boolean } = {
  loading: false,
};

export const LoaderSlice = createSlice({
  name: 'LoaderSlice',
  initialState,
  reducers: {
    loading: (state, payload: PayloadAction<{ loading: boolean }>) => {
      state.loading = payload.payload.loading;
    },
  },
});

export const LoaderActions = LoaderSlice.actions;

export default LoaderSlice.reducer;