import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import LinearProgress from "@mui/material/LinearProgress";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const rows = [
  {
    id: 1,
    task: "Create branded collateral",
    due: "Oct 30, 2023",
    members: ["A", "B", "C"],
    progress: 25,
    priority: 3,
  },
  {
    id: 2,
    task: "Develop brand guidelines document",
    due: "Nov 04, 2023",
    members: ["A", "B", "C"],
    progress: 25,
    priority: 2,
  },
  {
    id: 3,
    task: "Refine UX/UI for product pages",
    due: "Nov 10, 2023",
    members: ["A", "B", "C"],
    progress: 10,
    priority: 6,
  },
  {
    id: 4,
    task: "Collaborate on website redesign",
    due: "Oct 23, 2023",
    members: ["A", "B", "C"],
    progress: 100,
    priority: 6,
  },
  {
    id: 5,
    task: "Conduct A/B testing on homepage",
    due: "Oct 23, 2023",
    members: ["A", "B", "C"],
    progress: 100,
    priority: 2,
  },
  {
    id: 6,
    task: "Develop social media graphics",
    due: "Oct 30, 2023",
    members: ["A", "B", "C"],
    progress: 100,
    priority: 5,
  },
  {
    id: 7,
    task: "Finalize logo variations",
    due: "Nov 04, 2023",
    members: ["A", "B", "C"],
    progress: 100,
    priority: 3,
  },
];

export default function TaskTable() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        padding: "20px 10px 20px 20px",
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
        <Typography variant="h6">Today's Task</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TASK</TableCell>
              <TableCell>DUE</TableCell>
              <TableCell>MEMBER</TableCell>
              <TableCell>PROGRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <span>{row.task}</span>
                    <Box sx={{ marginLeft: "auto", marginRight: 1 }}>
                      <span>{row.priority}</span>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.due}</TableCell>
                <TableCell>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    {row.members.map((member, index) => (
                      <Avatar key={index}>{member}</Avatar>
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      sx={{ width: "100%", marginRight: 1 }}
                      color="warning"
                    />
                    <span>{row.progress}%</span>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
