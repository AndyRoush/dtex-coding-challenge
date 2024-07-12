import React from "react";
import { Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface CardProps {
  Icon: SvgIconComponent;
  title: string;
  number: number;
}

const PayrollCard: React.FC<CardProps> = ({ Icon, title, number }) => {
  return (
    <Box
      sx={{
        border: "1px solid gainsboro",
        borderRadius: "5px",
        padding: "10px",
        background: "white",
      }}
    >
      <p>{title}</p>
      <Box
        sx={{ display: "flex", alignItems: "center", paddingBottom: "15px" }}
      >
        <Icon style={{ fontSize: 20 }} />
        <span>&nbsp;{number}</span>
      </Box>
    </Box>
  );
};

export default PayrollCard;
