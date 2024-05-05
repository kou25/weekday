import { Grid } from "@mui/material";
import "./style/Jobs.css";
import { JobCard } from "./JobCard";
import { jobInterface } from "../shared/jobType";
const Jobs = ({ data }: { data: jobInterface[] }) => {
  return (
    <Grid
      container
      spacing={6}
      columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ marginTop: 2 }}
    >
      {data.map((job: jobInterface) => (
        <Grid item xs={4} key={job.jdUid}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Jobs;
