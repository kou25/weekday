import { Box, Typography } from "@mui/material";
import NotFoundImage from "../assets/nothing.png";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      mt={2}
    >
      <Box>
        <img src={NotFoundImage} alt="not-found" width={"100px"} />
        <Typography sx={{ marginTop: 2 }} variant="h5">
          No jobs found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
