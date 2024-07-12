import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function SideNav() {
  return (
    <Drawer
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        borderRight: "none",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          position: "relative",
          backgroundColor: "transparent",
          borderRight: "none",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "orange", marginRight: "16px" }}>D</Avatar>
          <Box>
            <Typography variant="h6">Dean</Typography>
          </Box>
        </Box>
        <MenuOpenIcon />
      </Box>
      <List>
        <ListItem>
          <Button
            fullWidth
            sx={{
              color: "#6f6f6f",
              textAlign: "left",
              background: "white",
              border: "1px solid gainsboro",
              textTransform: "none",
              boxShadow:
                "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            }}
            startIcon={<DashboardIcon />}
          >
            <ListItemText primary="Dashboard" />
          </Button>
        </ListItem>
        <hr style={{ width: "90%" }} />
        <Typography
          variant="caption"
          sx={{
            paddingLeft: "16px",
            paddingTop: "8px",
            paddingBottom: "4px",
            color: "textSecondary",
          }}
        >
          Team management
        </Typography>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<PeopleIcon />}
          >
            <ListItemText primary="Employee" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<AssignmentIcon />}
          >
            <ListItemText primary="Onboarding" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<EventNoteIcon />}
          >
            <ListItemText primary="Leave" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<AccessTimeIcon />}
          >
            <ListItemText primary="Time tracking" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<EmojiEventsIcon />}
          >
            <ListItemText primary="Rewards" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<MonetizationOnIcon />}
          >
            <ListItemText primary="Costs" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<LocalAtmIcon />}
          >
            <ListItemText primary="Compensation" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<RequestQuoteIcon />}
          >
            <ListItemText primary="Requests" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<FeedbackIcon />}
          >
            <ListItemText primary="Feedback" />
          </Button>
        </ListItem>
        <hr style={{ width: "90%" }} />
        <Typography
          variant="caption"
          sx={{
            paddingLeft: "16px",
            paddingTop: "8px",
            paddingBottom: "4px",
            color: "textSecondary",
          }}
        >
          Finances
        </Typography>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<PaymentIcon />}
          >
            <ListItemText primary="Payroll" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<ReceiptIcon />}
          >
            <ListItemText primary="Invoices" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            sx={{ color: "#6f6f6f", textTransform: "none" }}
            startIcon={<AccountBalanceIcon />}
          >
            <ListItemText primary="Billing" />
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
}
