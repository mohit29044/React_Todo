import { configureStore } from "@reduxjs/toolkit";
import AddReducer from "./../App/Slices/CRUD.ts";

export const store = configureStore({
  reducer: {
    Add: AddReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
