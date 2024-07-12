import { SvgIconComponent } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

interface UserData {
  icon: SvgIconComponent;
  title: string;
  number: number;
}

const mockPayrollCardData: UserData[] = [
  {
    icon: PeopleAltIcon,
    title: "Total Payrolls",
    number: 268
  },
  {
    icon: PeopleAltIcon,
    title: "Draft",
    number: 13
  },
  {
    icon: PeopleAltIcon,
    title: "Overdue",
    number: 7
  },
  {
    icon: PeopleAltIcon,
    title: "Failed",
    number: 5
  },
  {
    icon: PeopleAltIcon,
    title: "Scheduled",
    number: 24
  },
  {
    icon: PeopleAltIcon,
    title: "Paid",
    number: 312
  },
];

export default mockPayrollCardData;
