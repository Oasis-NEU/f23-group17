import { React } from "react";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

export default function ProfileBackButton() {
  return (
    <Link to="/my-profile" style={{ color: "#2b2d42", padding: 50 }}>
      <WestIcon sx={{ fontSize: 50 }} />
    </Link>
  );
}
