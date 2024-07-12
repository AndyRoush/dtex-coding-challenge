import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid gainsboro",
        background: "white",
        borderRadius: "5px 5px 0 0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <WbSunnyIcon sx={{ color: "orange" }} /> &nbsp; Good morning, Dean!
        </span>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Quick search"
          variant="outlined"
          size="small"
        />
        <Button
          sx={{
            background: "white",
            color: "gray",
            border: "1px solid gainsboro",
          }}
        >
          <CalendarTodayIcon fontSize="small" />
        </Button>
        <Button
          sx={{
            background: "white",
            color: "gray",
            border: "1px solid gainsboro",
          }}
        >
          <NotificationsIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}
