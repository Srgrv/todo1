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
    addTask(state, action) {
      state.list.push({
        id: new Date().toISOString(),
        userId: 1,
        title: action.payload,
        completed: false,
      });
    },
    deleteTask(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTask(state, action) {
      const change = state.list.find((todo) => todo.id === action.payload.id);
      change.completed = !change.completed;
    },
  },
});

export const { addTask, deleteTask, toggleTask } = aboutSlice.actions;
export default aboutSlice.reducer;
