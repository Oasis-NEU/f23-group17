import React from "react";
import { Link } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function DetailsButton({ courseID }) {
  return (
    <Link to={"/courses/" + courseID} className="course-desc-button">
      <InfoOutlinedIcon sx={{ paddingRight: 0.5 }} /> more details
    </Link>
  );
}
