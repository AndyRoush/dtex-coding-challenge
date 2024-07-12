import { Box } from "@mui/material";
import PayrollCard from "./PayrollCard";

import MockData from "../../mockData/mockPayrollCardData";

export default function Payroll() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          background: "white",
          border: "1px solid gainsboro",
          borderRadius: "5px 5px 0 0",
          marginBottom: "20px",
        }}
      >
        <span>Employees payrolls</span>
        <span>...</span>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 2,
          "@media (max-width:1250px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        }}
      >
        {MockData.map((card) => (
          <PayrollCard
            Icon={card.icon}
            title={card.title}
            number={card.number}
          />
        ))}
      </Box>
    </Box>
  );
}
