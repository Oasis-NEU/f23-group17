import { React } from "react";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

export default function ProfileBackButton() {
  return (
    <Link
      to="/my-profile"
      style={{ color: "#2b2d42", alignSelf: "flex-start", padding: "50px" }}
    >
      <WestIcon sx={{ fontSize: 50 }} />
    </Link>
  );
}
