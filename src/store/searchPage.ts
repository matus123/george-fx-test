import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SearchPageState {
  data: any[];
}

const initialState: SearchPageState = { data: [] };

const seachPageSlice = createSlice({
  name: 'searchPage',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = seachPageSlice.actions;
export default seachPageSlice.reducer;
