import { useState } from "react";
import Navbar from "./components/Navbar";
import { WeekdayTabs } from "./components/WeekdayTabs";

function App() {
  const [tabSelected, setTabSelected] = useState("search");
  return (
    <section className="jobs-container">
      <Navbar />
      <div className="jobs-main_section">
        <WeekdayTabs
          selected={tabSelected}
          onChange={(value: string) => setTabSelected(value)}
        />
      </div>
    </section>
  );
}

export default App;
