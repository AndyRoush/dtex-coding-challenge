import "./App.css";
import { Box } from "@mui/material";
import SideNav from "./components/sidenav/SideNav";
import Header from "./components/header/Header";
import SummaryHeader from "./components/summaryHeader/SummaryHeader";
import TaskTable from "./components/taskTable/TaskTable";
import ScheduleTable from "./components/schedule/Schedule";
import Employees from "./components/employees/Employees";
import Payroll from "./components/payroll/Payroll";

function App() {
  return (
    <section className="main-layout">
      <SideNav />
      <section className="main-content">
        <Header />
        <SummaryHeader />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media (max-width:1785px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <TaskTable />
          <ScheduleTable />
        </Box>
        <Employees />
        <Payroll />
      </section>
    </section>
  );
}

export default App;
