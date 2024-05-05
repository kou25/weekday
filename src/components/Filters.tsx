import { Box } from "@mui/material";
import "./style/Filters.css";
import WeekdaySelect from "../shared/WeekdaySelect";
import WeekdaySearch from "../shared/WeekdaySearch";
import {
  experiences,
  minBasePayOptions,
  remoteOptions,
  roles,
  techStackOptions
} from "../utils/staticOptions";
import { filterType } from "../utils/filterType";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/slice/filterSlice";
const Filters = ({ data }: { data: filterType }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleFilterChange = (newFilters: Partial<filterType>) => {
    dispatch(setFilters({ ...data, ...newFilters }));
  };

  return (
    <section className="filters-container">
      <Box sx={{ mt: 1, mr: 1 }}>
        <WeekdaySelect
          minWidth={150}
          name="minExperience"
          label="Experience"
          placeholder="Experience"
          options={experiences}
          value={data.minExperience}
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ mr: 1, mt: 1 }}>
        <WeekdaySearch
          name="companyName"
          placeholder="Search Company Name"
          value={data.companyName}
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ mr: 1, mt: 1 }}>
        <WeekdaySearch
          name="location"
          placeholder="Search Location"
          value={data.location}
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ mr: 1, mt: 1 }}>
        <WeekdaySelect
          name="remote"
          label="Remote/on-site"
          minWidth={120}
          placeholder="Remote"
          options={remoteOptions}
          value={data.remote}
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ mr: 1, mt: 1 }}>
        <WeekdaySelect
          name="techStack"
          label="Tech stack"
          minWidth={120}
          placeholder="Tech"
          options={techStackOptions}
          value={data.techStack}
          multiple
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ mr: 1, mt: 1 }}>
        <WeekdaySelect
          name="roles"
          label="Roles"
          minWidth={120}
          placeholder="Roles"
          options={roles}
          value={data.roles}
          multiple
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <WeekdaySelect
          name="minBasePay"
          label="Min base pay"
          minWidth={120}
          placeholder="Min Base Pay"
          options={minBasePayOptions}
          value={data.minBasePay}
          onFilterChange={handleFilterChange}
        />
      </Box>
    </section>
  );
};

export default Filters;
