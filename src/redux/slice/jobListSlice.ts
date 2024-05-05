import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobInterface } from "../../utils/jobType";

interface JobListState {
  jobs: jobInterface[];
  total: number;
  loading: boolean;
  error: string | null;
}

const initialState: JobListState = {
  jobs: [],
  loading: false,
  error: null,
  total: 0
};

export const fetchJobs = createAsyncThunk<
  { jdList: jobInterface[]; totalCount: number },
  void,
  { rejectValue: string }
>("jobList/fetchJobs", async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
  };

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  const data = await response.json();
  return data;
});

const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.jobs = action.payload.jdList;
        state.total = action.payload.totalCount;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch jobs";
      });
  }
});

export default jobListSlice.reducer;
