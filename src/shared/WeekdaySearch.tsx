import { TextField } from "@mui/material";

const WeekdaySearch = ({
  name,
  placeholder
}: {
  name: string;
  placeholder: string;
}) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
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
