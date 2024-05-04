import { Tab, Tabs } from "@mui/material";
import "./style/WeekdayTabs.css";

type Props = {
  selected: string;
  onChange: (value: string) => void;
};
export const WeekdayTabs = ({ selected, onChange }: Props) => {
  return (
    <section className="weekdayTabs-container">
      <Tabs
        value={selected}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#3522e2",
            height: "1px"
          }
        }}
        sx={{
          minHeight: "0px !important",
          height: "40px"
        }}
        onChange={(_: React.SyntheticEvent, newValue: string) =>
          onChange(newValue)
        }
      >
        <Tab
          value="applied"
          label="Applied jobs"
          disabled
          sx={{
            textTransform: "Capitalize"
          }}
        />
        <Tab
          value="search"
          label="Search jobs"
          sx={{
            textTransform: "Capitalize",
            color: "black !important"
          }}
        />
      </Tabs>
    </section>
  );
};
