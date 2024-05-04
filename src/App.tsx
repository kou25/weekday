/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { WeekdayTabs } from "./components/WeekdayTabs";
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";

function App() {
  const [tabSelected, setTabSelected] = useState("search");
  const [jobs, setJobs] = useState<any[]>([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: 0
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data.jdList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="jobs-container">
      <Navbar />
      <div className="jobs-main_section">
        <WeekdayTabs
          selected={tabSelected}
          onChange={(value: string) => setTabSelected(value)}
        />
        <Filters />
        <Jobs data={jobs} />
      </div>
    </section>
  );
}

export default App;
