import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "./slice/jobListSlice";
import filterReducer from "./slice/filterSlice";
export const store = configureStore({
  reducer: {
    jobList: jobListReducer,
    filters: filterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
