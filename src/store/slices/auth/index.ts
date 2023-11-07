import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  ip: null | string;
}

const initialState: CounterState = {
  ip: null,
};

export const authSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIp: (state, action) => {
      state.ip = action.payload;
    },
  },
});

export const { setIp } = authSlice.actions;

export default authSlice.reducer;
