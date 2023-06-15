import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "d",
    password: null,
    rememberMe: true,
  },
  reducers: {
    login(state, action) {
      state.email = action.payload.login;
      action.payload.cb();
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
