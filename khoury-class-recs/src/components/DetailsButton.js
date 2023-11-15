import React from "react";
import { Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function DetailsButton({ courseID }) {
  return (
    <Button
      variant="contained"
      startIcon={<InfoOutlinedIcon />}
      href={"/courses/" + courseID}
    >
      more details
    </Button>
  );
}
