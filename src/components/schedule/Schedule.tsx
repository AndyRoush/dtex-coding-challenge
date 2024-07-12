import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const scheduleData = [
  {
    day: "MON 20",
    events: [
      { time: "9 AM", title: "Onboarding Session", color: "orange" },
      { time: "12 PM", title: "Lunch break", color: "purple" },
      { time: "2 PM", title: "Town Hall Meeting", color: "green" },
    ],
  },
  {
    day: "TUE 21",
    events: [
      { time: "11 AM", title: "Monthly Performance", color: "lightblue" },
      { time: "1 PM", title: "Lunch break", color: "pink" },
    ],
  },
  {
    day: "WED 22",
    events: [
      { time: "9 AM", title: "Interview with D...", color: "blue" },
      { time: "12 PM", title: "Lunch break", color: "purple" },
    ],
  },
  {
    day: "THU 23",
    events: [
      { time: "9 AM", title: "Interview for ma...", color: "blue" },
      { time: "12 PM", title: "Lunch break", color: "pink" },
      { time: "3 PM", title: "Benefits Orientation", color: "green" },
    ],
  },
  {
    day: "FRI 24",
    events: [
      { time: "9 AM", title: "Project Kickoff", color: "lightgreen" },
      { time: "12 PM", title: "Lunch break", color: "purple" },
      { time: "2 PM", title: "Performance Review", color: "green" },
    ],
  },
];

const hours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

export default function ScheduleTable() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        padding: "20px 20px 20px 10px",
        "@media (max-width:1785px)": {
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          background: "white",
          border: "1px solid gainsboro",
          borderRadius: "5px 5px 0 0",
        }}
      >
        <Typography variant="h6">Schedule</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, borderCollapse: "collapse" }}
          aria-label="schedule table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: "1px solid #e0e0e0" }}>
                TIME
              </TableCell>
              {scheduleData.map((day, index) => (
                <TableCell
                  key={index}
                  sx={{
                    borderRight:
                      index < scheduleData.length - 1
                        ? "1px solid #e0e0e0"
                        : "none",
                  }}
                >
                  {day.day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {hours.map((hour) => (
              <TableRow key={hour}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderRight: "1px solid #e0e0e0" }}
                >
                  {hour}
                </TableCell>
                {scheduleData.map((day, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      borderRight:
                        index < scheduleData.length - 1
                          ? "1px solid #e0e0e0"
                          : "none",
                    }}
                  >
                    {day.events
                      .filter((event) => event.time === hour)
                      .map((event, eventIndex) => (
                        <Box
                          key={eventIndex}
                          sx={{
                            backgroundColor: event.color,
                            padding: "4px 8px",
                            borderRadius: "4px",
                            marginBottom: "4px",
                            color: "white",
                          }}
                        >
                          {event.title}
                        </Box>
                      ))}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
