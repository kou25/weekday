import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "./slice/jobListSlice";
export const store = configureStore({
  reducer: {
    jobList: jobListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
