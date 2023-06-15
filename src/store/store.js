import { configureStore } from "@reduxjs/toolkit";

//slices
import aboutSlice from "./slices/aboutSlice";
import loginSlice from "./slices/loginSlice";
import postsSlice from "./slices/postsSlice";
import postSlice from "./slices/postSlice";

const store = configureStore({
  reducer: {
    about: aboutSlice,
    login: loginSlice,
    posts: postsSlice,
    post: postSlice,
  },
  middleware: (
    getDefaultMiddleware // нужно добавлять для того чтобы в action передавать значения помимо строк, а также к примеру функции
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.hello", "payload.cb"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export default store;
