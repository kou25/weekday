import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobInterface } from "../../utils/jobType";
import { RootState } from "../store";
import { updatePagination } from "../slice/jobListSlice";

export const fetchJobs = createAsyncThunk<
  { jdList: jobInterface[]; totalCount: number },
  void,
  { rejectValue: string }
>("jobList/fetchJobs", async (_, { getState, dispatch }) => {
  const { limit, offset } = (getState() as RootState).jobList.pagination;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: limit,
    offset: offset
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
  dispatch(updatePagination(offset + limit));
  return data;
});
