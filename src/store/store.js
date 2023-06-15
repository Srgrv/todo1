import { configureStore } from "@reduxjs/toolkit";

//slices
import aboutSlice from "./slices/aboutSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    about: aboutSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.cb"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export default store;
