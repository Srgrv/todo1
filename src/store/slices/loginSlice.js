import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: null,
    password: null,
    rememberMe: true,
  },
  reducers: {
    addTask(state, action) {
      state.email = action.payload.login;
      action.payload.cb();
    },
  },
});

export const { addTask } = loginSlice.actions;
export default loginSlice.reducer;
