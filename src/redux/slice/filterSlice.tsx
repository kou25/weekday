import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterType } from "../../utils/filterType";

interface FiltersState {
  filters: filterType;
}

const initialState: FiltersState = {
  filters: {
    minExperience: "",
    companyName: "",
    location: "",
    remote: "",
    techStack: [],
    roles: [],
    minBasePay: ""
  }
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<filterType>) {
      state.filters = action.payload;
    }
  }
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
