import {
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { drowdownInterface } from "../utils/staticOptions";
import { filterType } from "../utils/filterType";

const WeekdaySelect = ({
  name,
  label,
  minWidth,
  placeholder,
  options,
  value: selectedValue,
  multiple = false,
  onFilterChange
}: {
  name: string;
  label: string;
  minWidth: number;
  placeholder: string;
  options: drowdownInterface[];
  value: string | string[];
  multiple?: boolean;
  onFilterChange: (newFilters: Partial<filterType>) => void;
}) => {
  const handleChange = (e: SelectChangeEvent<string | string[]>) => {
    const newValue = e.target.value;
    if (multiple) {
      const newArrayValue = Array.isArray(newValue) ? newValue : [newValue];
      onFilterChange({ [name]: newArrayValue });
    } else {
      onFilterChange({ [name]: newValue as string });
    }
  };

  const clearValue = () => {
    onFilterChange({ [name]: multiple ? [] : "" });
  };

  return (
    <>
      {(multiple ? selectedValue.length > 0 : selectedValue) && <p>{label}</p>}
      <FormControl sx={{ minWidth: minWidth }} size="small">
        <Select
          labelId="exp-label"
          id="exp"
          value={selectedValue}
          multiple={multiple}
          onChange={handleChange}
          displayEmpty={true}
          renderValue={(value: string | string[]) =>
            multiple ? (
              Array.isArray(value) && value.length > 0 ? (
                <div>{value.join(", ")}</div>
              ) : (
                <span style={{ color: "#A2A2A2" }}>{placeholder}</span>
              )
            ) : value !== "" ? (
              value
            ) : (
              <span style={{ color: "#A2A2A2" }}>{placeholder}</span>
            )
          }
          sx={{
            fontSize: "12px"
          }}
          endAdornment={
            (multiple ? selectedValue.length > 0 : selectedValue) && (
              <InputAdornment
                position="end"
                sx={{
                  marginRight: 2
                }}
              >
                <IconButton onClick={clearValue}>
                  <IoIosClose />
                </IconButton>
              </InputAdornment>
            )
          }
          MenuProps={{ sx: { height: "400px" } }}
          style={{ height: 40 }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.value}
              sx={{
                fontSize: "12px",
                textTransform: option?.disabled ? "uppercase" : "capitalize"
              }}
              disabled={option?.disabled}
            >
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default WeekdaySelect;
