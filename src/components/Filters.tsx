import { Box } from "@mui/material";
import "./style/Filters.css";
import WeekdaySelect from "../shared/WeekdaySelect";
import WeekdaySearch from "../shared/WeekdaySearch";
const Filters = () => {
  return (
    <section className="filters-container">
      <Box>
        <WeekdaySelect
          minWidth={150}
          label="Experience"
          placeholder="Experience"
        />
      </Box>
      <Box sx={{ mx: 1 }}>
        <WeekdaySearch name="search" placeholder="Search Company Name" />
      </Box>
      <Box sx={{ mr: 1 }}>
        <WeekdaySearch name="location" placeholder="Search Location" />
      </Box>
      <Box sx={{ mr: 1 }}>
        <WeekdaySelect
          label="Remote/on-site"
          minWidth={120}
          placeholder="Remote"
        />
      </Box>
      <Box sx={{ mr: 1 }}>
        <WeekdaySelect label="Tech stack" minWidth={120} placeholder="Tech" />
      </Box>
      <Box sx={{ mr: 1 }}>
        <WeekdaySelect label="Role" minWidth={120} placeholder="Role" />
      </Box>
      <Box>
        <WeekdaySelect
          label="Min base pay"
          minWidth={120}
          placeholder="Min Base Pay"
        />
      </Box>
    </section>
  );
};

export default Filters;
