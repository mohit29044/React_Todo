import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddType {
  value: string;
  id: number | string;
  isCompleted: boolean;
}
interface TodoState {
  todo: AddType[];
}
const initialState: TodoState = {
  todo: [],
};

export const AddSlice = createSlice({
  name: "Add",
  initialState,
  reducers: {
    AddNew: (state, action: PayloadAction<string>) => {
      const id = nanoid();
      const todo: AddType = {
        id: id,
        isCompleted: false,
        value: action.payload,
      };

      state.todo.push(todo);
    },
    Delete: (state, action: PayloadAction<string | number>) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    showStatus: (state, action: PayloadAction<string | number>) => {
      const todo = state.todo.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});
export const { AddNew, Delete, showStatus } = AddSlice.actions;
export default AddSlice.reducer;
