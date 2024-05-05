import { Box, CircularProgress } from "@mui/material";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Loader = () => {
  const { loading } = useSelector((state: RootState) => state.jobList);
  return (
    <Box width={"full"} display={"flex"} justifyContent={"center"}>
      {loading && <CircularProgress />}
    </Box>
  );
};

export default Loader;
