import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FX } from '../interfaces';

interface SearchPageState {
  data: FX[];
}

const initialState: SearchPageState = { data: [] };

const seachPageSlice = createSlice({
  name: 'searchPage',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<FX[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = seachPageSlice.actions;
export default seachPageSlice.reducer;
