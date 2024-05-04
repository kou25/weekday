/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Paper, Typography } from "@mui/material";
import "./style/Jobs.css";
const Jobs = ({ data }: { data: any[] }) => {
  return (
    <Grid
      container
      spacing={8}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ marginTop: 2 }}
    >
      {data.map((job: any) => (
        <Grid item xs={4} key={job.jdUid}>
          <Paper elevation={2} className="card">
            <h3>{job.companyName}</h3>
            <p>{job.jobRole}</p>
            <small>{job.location}</small>
            <Typography variant="body1">Job description:</Typography>
            <p>{job.jobDetailsFromCompany}</p>

            <p>Minimum Experience</p>
            <p>{job.minExp ?? 0} years</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Jobs;
