import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { jobInterface } from "../utils/jobType";
import { findSalary } from "../utils/findSalary";
export const JobCard = ({ job }: { job: jobInterface }) => {
  const [expand, setExpand] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Paper elevation={2} className="card">
      <div className="company-info">
        <Box mr={2}>
          <img src={job.logoUrl} alt="company logo" />
        </Box>
        <Box>
          <p className="company-name">{job.companyName}</p>
          <p className="job-role">{job.jobRole}</p>
          <small>{job.location}</small>
        </Box>
      </div>
      <Box my={2}>
        <Typography variant="body2" fontWeight={300}>
          Estimated Salary: ₹
          {findSalary(job.minJdSalary ?? 0, job.salaryCurrencyCode)} -{" "}
          {findSalary(job.maxJdSalary ?? 0, job.salaryCurrencyCode)}
          {"  "}
          LPA ✅
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="body1" fontWeight={500}>
          Job description:
        </Typography>
      </Box>
      <Box mb={2} className={`desc-card ${expand ? "expanded " : ""}`}>
        {job.jobDetailsFromCompany}
      </Box>
      {job.jobDetailsFromCompany.length > 600 && (
        <div id="expand" onClick={toggleExpand}>
          <small>{expand ? "Hide" : "Show more"}</small>
        </div>
      )}
      <div className="info-container">
        <h3>Minimum Experience</h3>
        <p>{job.minExp ?? 0} years</p>
      </div>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          disableElevation={true}
          onClick={() => {
            window.open(job.jdLink, "_blank");
          }}
          sx={{
            backgroundColor: "rgb(85, 239, 196)",
            color: "rgb(0, 0, 0)",
            fontWeight: "500",
            padding: "8px 18px",
            borderRadius: "8px",
            margin: "5px 0",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "rgb(85, 239, 196)"
            }
          }}
        >
          ⚡ Easy Apply
        </Button>
      </Box>
    </Paper>
  );
};
