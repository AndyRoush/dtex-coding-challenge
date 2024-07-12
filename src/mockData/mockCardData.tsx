import { SvgIconComponent } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

interface UserData {
  icon: SvgIconComponent;
  title: string;
  number: number;
  statPercent: string;
  statString: string;
}

const mockHeaderCardData: UserData[] = [
  {
    icon: PeopleAltIcon,
    title: "Total Employee",
    number: 234,
    statPercent: "+5%",
    statString: "last month",
  },
  {
    icon: PeopleAltIcon,
    title: "New Employee",
    number: 42,
    statPercent: "+5%",
    statString: "last month",
  },
  {
    icon: PeopleAltIcon,
    title: "Resigned Employee",
    number: 12,
    statPercent: "+2%",
    statString: "last month",
  },
  {
    icon: PeopleAltIcon,
    title: "Job applications",
    number: 367,
    statPercent: "+10%",
    statString: "last month",
  },
];

export default mockHeaderCardData;
