import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  data: any[];
}

const initialState: HomeState = {
  data: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
});

export const { setData, clearData } = homeSlice.actions;
export default homeSlice.reducer; 