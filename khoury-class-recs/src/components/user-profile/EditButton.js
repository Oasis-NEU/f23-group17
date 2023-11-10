import { React } from "react";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import "./user-profile-style.css";

export default function EditButton({ label, path }) {
  return (
    <Link to={path} className="user-profile-edit-button">
      <div>{label}</div>
      <EastIcon sx={{ fontSize: 20 }} />
    </Link>
  );
}
