import { Badge, Tab, Tabs } from "@mui/material";
import "./style/WeekdayTabs.css";

type Props = {
  selected: string;
  onChange: (value: string) => void;
  count: number;
};
export const WeekdayTabs = ({ selected, onChange, count }: Props) => {
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
          height: "40px",
          position: "relative"
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
        <div className="count">
          <Badge
            badgeContent={count}
            max={count}
            color="primary"
            sx={{
              "& .MuiBadge-badge": { fontSize: 10, height: 15, minWidth: 15 }
            }}
          ></Badge>
        </div>
      </Tabs>
    </section>
  );
};
