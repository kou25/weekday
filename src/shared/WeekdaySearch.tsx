import { TextField } from "@mui/material";
import { filterType } from "../utils/filterType";
import { debounce } from "lodash";
import { useCallback, useState } from "react";

const WeekdaySearch = ({
  name,
  placeholder,
  value,
  onFilterChange
}: {
  name: string;
  placeholder: string;
  value: string;
  onFilterChange: (newFilters: Partial<filterType>) => void;
}) => {
  const [search, setSearch] = useState(value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterChangeDebounced = useCallback(
    debounce((newValue: string) => {
      onFilterChange({ [name]: newValue });
    }, 300),
    [name, onFilterChange]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    handleFilterChangeDebounced(newValue);
  };

  return (
    <TextField
      name={name}
      value={search}
      placeholder={placeholder}
      onChange={handleChange}
      size="small"
      sx={{
        "& input::placeholder": {
          fontSize: "12px"
        }
      }}
    />
  );
};

export default WeekdaySearch;
