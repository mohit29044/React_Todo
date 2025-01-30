import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "Filter",
  initialState: { filter: "All" },
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});
export const { filter } = FilterSlice.actions;
export default FilterSlice.reducer;
