import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    list: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ],
  },
  reducers: {
    addTask(state, action) {},
  },
});

export const { addTask } = aboutSlice.actions;
export default aboutSlice.reducer;
