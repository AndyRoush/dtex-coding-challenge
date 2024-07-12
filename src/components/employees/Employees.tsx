import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const rows = [
  {
    id: 1,
    employeeName: "Darrel Steward",
    employmentId: "#E3041",
    email: "darrelste@mail.com",
    role: "Sr.Project Manager",
    status: "Active",
  },
  {
    id: 2,
    employeeName: "Wade Warren",
    employmentId: "#E3042",
    email: "wadewarr@mail.com",
    role: "Jr.Developer",
    status: "Active",
  },
  {
    id: 3,
    employeeName: "Jerome Bell",
    employmentId: "#E3043",
    email: "jeromebell@mail.com",
    role: "Sr.Human Resources",
    status: "Active",
  },
  {
    id: 4,
    employeeName: "Marvin McKinney",
    employmentId: "#E3043",
    email: "marvinmck@mail.com",
    role: "Sr. Developer",
    status: "Active",
  },
  {
    id: 5,
    employeeName: "Brooklyn Simmons",
    employmentId: "#E3044",
    email: "brooklynsimm@mail.com",
    role: "Sr. Product Designer",
    status: "Active",
  },
];

export default function EmployeeTable() {
  return (
    <Box sx={{ overflowX: "auto", padding: "20px" }}>
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
        <span>Employees</span>
        <span>...</span>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell>EMPLOYEE NAME</TableCell>
              <TableCell>EMPLOYMENT ID</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ROLE</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell><Box sx={{display: "flex", alignItems: "center", gap: 1}}><Avatar />{row.employeeName}</Box></TableCell>
                <TableCell>{row.employmentId}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell><Box sx={{display: "flex", alignItems: "center", gap: 1}}><CheckCircleOutlineIcon sx={{color: "green"}} />{row.status}</Box></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
