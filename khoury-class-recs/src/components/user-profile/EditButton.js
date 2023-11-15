import { React } from "react";

import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import "./user-profile-style.css";

export default function EditButton({ label, path }) {
  return (
    <Button
      variant="outlined"
      size="large"
      endIcon={<EastIcon />}
      href={path}
      sx={{ alignSelf: "center" }}
    >
      {label}
    </Button>
  );
}
