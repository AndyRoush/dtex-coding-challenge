import React from "react";
import { Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface CardProps {
  Icon: SvgIconComponent;
  title: string;
  number: number;
  statPercent: string;
  statString: string;
}

const Card: React.FC<CardProps> = ({
  Icon,
  title,
  number,
  statPercent,
  statString,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid gainsboro",
        borderRadius: "5px",
        padding: "10px",
        background: "white",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", paddingBottom: "15px" }}
      >
        <Icon style={{ fontSize: 20 }} />
        <span>&nbsp;{title}</span>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <b style={{fontSize: "1rem"}}>{number}</b>
        <Box sx={{ fontSize: ".8rem" }}>
          <b style={{ color: "green" }}>{statPercent}</b>
          <span> {statString}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
