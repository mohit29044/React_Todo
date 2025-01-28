import { configureStore } from "@reduxjs/toolkit";
import AddReducer from "./../App/Slices/CRUD.ts";

export const store = configureStore({
  reducer: {
    Add: AddReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
