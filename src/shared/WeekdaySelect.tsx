import {
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select
} from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { drowdownInterface } from "../utils/staticOptions";

const WeekdaySelect = ({
  label,
  minWidth,
  placeholder,
  options,
  value: selectedValue,
  multiple = false
}: {
  label: string;
  minWidth: number;
  placeholder: string;
  options: drowdownInterface[];
  value: string | string[];
  multiple?: boolean;
}) => {
  return (
    <>
      {(multiple ? selectedValue.length > 0 : selectedValue) && <p>{label}</p>}
      <FormControl sx={{ minWidth: minWidth }} size="small">
        <Select
          labelId="exp-label"
          id="exp"
          value={selectedValue}
          multiple={multiple}
          // onChange={handleChange}
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
                <IconButton>
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
