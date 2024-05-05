import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import { WeekdayTabs } from "./components/WeekdayTabs";
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchJobs } from "./redux/action/jobsAction";
import Loader from "./components/Loader";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { jobs, total, loading } = useSelector(
    (state: RootState) => state.jobList
  );
  const [tabSelected, setTabSelected] = useState<string>("search");

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      dispatch(fetchJobs());
    }
  }, [dispatch, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        <Loader />
      </div>
    </section>
  );
}

export default App;
