import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddType {
  value: string;
  id: number | string;
  isCompleted: boolean;
}
interface TodoState {
  todo: AddType[];
  searchResult: string;
  edit: AddType | null;
}
const initialState: TodoState = {
  todo: [],
  searchResult: "",
  edit: {
    id: 1,
    isCompleted: false,
    value: "",
  },
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
    searchTodo: (state, action: PayloadAction<string>) => {
      state.searchResult = action.payload;
    },
    editValue: (state, action: PayloadAction<AddType>) => {
      state.edit = action.payload;
    },
    submitUpdate: (state, action: PayloadAction<string>) => {
      const todo = state.todo.find((todo) => todo.id === state.edit?.id);
      if (todo) {
        todo.value = action.payload;
      }
      state.edit = null;
    },
  },
});
export const {
  AddNew,
  Delete,
  showStatus,
  searchTodo,
  editValue,
  submitUpdate,
} = AddSlice.actions;
export default AddSlice.reducer;
