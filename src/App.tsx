/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import { WeekdayTabs } from "./components/WeekdayTabs";
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchJobs } from "./redux/slice/jobListSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { jobs, total } = useSelector((state: RootState) => state.jobList);
  const [tabSelected, setTabSelected] = useState<string>("search");
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Memoize the jobs array
  const memoizedJobs = useMemo(() => jobs, [jobs]);

  return (
    <section className="jobs-container">
      <Navbar />
      <div className="jobs-main_section">
        <WeekdayTabs
          selected={tabSelected}
          onChange={(value: string) => setTabSelected(value)}
          count={total}
        />
        <Filters />
        <Jobs data={memoizedJobs} />
      </div>
    </section>
  );
}

export default App;
