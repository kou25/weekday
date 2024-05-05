import { Grid } from "@mui/material";
import "./style/Jobs.css";
import { JobCard } from "./JobCard";
import { jobInterface } from "../utils/jobType";
import NotFound from "./NotFound";
const Jobs = ({ data }: { data: jobInterface[] }) => {
  return data.length > 0 ? (
    <Grid
      container
      spacing={6}
      columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ marginTop: 1 }}
    >
      {data.map((job: jobInterface) => (
        <Grid item md={2} lg={4} xl={3} key={job.jdUid}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <NotFound />
  );
};

export default Jobs;
