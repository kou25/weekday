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
  options
}: {
  label: string;
  minWidth: number;
  placeholder: string;
  options: drowdownInterface[];
}) => {
  return (
    <>
      <p>{label}</p>
      <FormControl sx={{ minWidth: minWidth }} size="small">
        <Select
          labelId="exp-label"
          id="exp"
          value={""}
          // onChange={handleChange}
          displayEmpty={true}
          renderValue={(value: string) =>
            value !== "" ? (
              value
            ) : (
              <span style={{ color: "#A2A2A2" }}>{placeholder}</span>
            )
          }
          sx={{
            fontSize: "12px"
          }}
          endAdornment={
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
          }
          MenuProps={{ sx: { height: "300px" } }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.value}
              sx={{ fontSize: "12px" }}
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
