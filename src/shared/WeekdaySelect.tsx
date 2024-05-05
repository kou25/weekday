import { FormControl, IconButton, InputAdornment, Select } from "@mui/material";
import { IoIosClose } from "react-icons/io";

const WeekdaySelect = ({
  label,
  minWidth,
  placeholder
}: {
  label: string;
  minWidth: number;
  placeholder: string;
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
        ></Select>
      </FormControl>
    </>
  );
};

export default WeekdaySelect;
