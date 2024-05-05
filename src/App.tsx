import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import { WeekdayTabs } from "./components/WeekdayTabs";
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchJobs } from "./redux/action/jobsAction";
import Loader from "./components/Loader";
import { findSalary } from "./utils/findSalary";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { jobs, total, loading } = useSelector(
    (state: RootState) => state.jobList
  );
  const currentFilters = useSelector(
    (state: RootState) => state.filters.filters
  );

  const [tabSelected, setTabSelected] = useState<string>("search");

  // Callback to check if filters are empty
  const areFiltersEmpty = useCallback(() => {
    return Object.values(currentFilters).every(
      (value) => value === "" || value.length === 0
    );
  }, [currentFilters]);

  // Effect for fetching jobs on component mount
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Callback for infinite scrolling
  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      dispatch(fetchJobs());
    }
  }, [dispatch, loading]);

  // Effect for adding and removing scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Memoized computation of filtered jobs
  const memoizedJobs = useMemo(() => {
    const isEmpty = areFiltersEmpty();
    if (isEmpty) {
      return jobs;
    } else {
      let results = jobs;
      //company name filter
      if (currentFilters.companyName.length > 0) {
        results = results.filter((job) =>
          job.companyName
            .toLowerCase()
            .includes(currentFilters.companyName.toLowerCase())
        );
      }
      //company location filter
      if (currentFilters.location.length > 0) {
        results = results.filter((job) =>
          job.location
            .toLowerCase()
            .includes(currentFilters.location.toLowerCase())
        );
      }
      //company minExperience filter
      if (currentFilters.minExperience.length > 0) {
        results = results.filter(
          (job) => Number(job.minExp) >= Number(currentFilters.minExperience)
        );
      }
      //company is remote job filter
      if (currentFilters.remote.length > 0) {
        if (currentFilters.remote === "Remote") {
          results = results.filter((job) =>
            job.location.toLowerCase().includes("remote")
          );
        } else {
          results = results.filter(
            (job) => !job.location.toLowerCase().includes("remote")
          );
        }
        results = results.filter(
          (job) =>
            Number(job.minExp ?? 0) >= Number(currentFilters.minExperience)
        );
      }
      //company min salary filter
      if (currentFilters.minBasePay.length > 0) {
        const basePay = currentFilters.minBasePay.split("L")[0];
        results = results.filter(
          (job) =>
            findSalary(job.minJdSalary ?? 0, job.salaryCurrencyCode) >=
            Number(basePay)
        );
      }

      //company roles filter
      if (currentFilters.roles.length > 0) {
        results = results.filter((job) =>
          currentFilters.roles
            .map((item) => item.toLowerCase())
            .includes(job.jobRole.toLowerCase())
        );
      }

      //company tech stack filter
      if (currentFilters.techStack.length > 0) {
        results = results.filter((job) => {
          return currentFilters.techStack.some((item) => {
            if (
              ["react", "javascript", "typescript"].includes(item.toLowerCase())
            ) {
              return job.jobRole.toLowerCase() === "frontend";
            } else if (item.toLowerCase() === "c#") {
              return job.jobRole.toLowerCase() === "ios";
            } else if (item.toLowerCase() === "kotlin") {
              return job.jobRole.toLowerCase() === "android";
            } else {
              return job.jobRole.toLowerCase() === "backend";
            }
          });
        });
      }

      return results;
    }
  }, [areFiltersEmpty, currentFilters, jobs]);

  return (
    <section className="jobs-container">
      <Navbar />
      <div className="jobs-main_section">
        <WeekdayTabs
          selected={tabSelected}
          onChange={(value: string) => setTabSelected(value)}
          count={areFiltersEmpty() ? total : memoizedJobs.length}
        />
        <Filters data={currentFilters} />
        <Jobs data={memoizedJobs} />
        <Loader />
      </div>
    </section>
  );
}

export default App;
