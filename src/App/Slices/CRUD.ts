import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddType {
  value: string;
}
const AddTask: AddType = {
  value: "",
};

export const AddSlice = createSlice({
  name: "Add",
  initialState: [] as string[],
  reducers: {
    AddNew: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});
export const { AddNew } = AddSlice.actions;
export default AddSlice.reducer;
