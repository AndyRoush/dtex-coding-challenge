import { Box } from "@mui/material";
import { Button } from "@mui/material";
import SummaryHeaderCards from "./SummaryHeaderCards";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";

import MockData from "../../mockData/mockCardData";

export default function SummaryHeader() {
  return (
    <Box sx={{ padding: "20px", borderBottom: "1px solid gainsboro" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 0",
        }}
      >
        <Button
          sx={{
            color: "#6f6f6f",
            textAlign: "left",
            background: "white",
            border: "1px solid gainsboro",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
          }}
          startIcon={<CalendarTodayIcon fontSize="small" />}
        >
          Monthly
        </Button>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            startIcon={<DownloadIcon />}
            sx={{
              color: "#6f6f6f",
              textAlign: "left",
              background: "white",
              border: "1px solid gainsboro",
              boxShadow:
                "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            Export
          </Button>
          <Button
            sx={{
              color: "#fff",
              textAlign: "left",
              background: "orange",
              border: "1px solid gainsboro",
              "&:hover": {
                backgroundColor: "orange",
                color: "black",
              },
              boxShadow:
                "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            }}
            startIcon={<AddIcon />}
          >
            New entry
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          "@media (max-width:1250px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
        }}
      >
        {MockData.map((card) => (
          <SummaryHeaderCards
            Icon={card.icon}
            title={card.title}
            number={card.number}
            statPercent={card.statPercent}
            statString={card.statString}
          />
        ))}
      </Box>
    </Box>
  );
}
