import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "./Features/UserSlice";
import PostReducer from "./Features/PostSlice";

export const store = configureStore({
  reducer: {
    users: UseReducer,
    posts: PostReducer,
  },
});
