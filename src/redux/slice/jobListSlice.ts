import { createSlice } from "@reduxjs/toolkit";
import { jobInterface } from "../../utils/jobType";
import { fetchJobs } from "../action/jobsAction";

interface JobListState {
  jobs: jobInterface[];
  total: number;
  loading: boolean;
  error: string | null;
  pagination: {
    limit: number;
    offset: number;
  };
}

const initialState: JobListState = {
  jobs: [],
  loading: false,
  error: null,
  total: 0,
  pagination: {
    limit: 10,
    offset: 0
  }
};

const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {
    updatePagination(state, action) {
      state.pagination.offset = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.jobs = state.jobs.concat(action.payload.jdList);
        state.total = action.payload.totalCount;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch jobs";
      });
  }
});

export const { updatePagination } = jobListSlice.actions;

export default jobListSlice.reducer;
