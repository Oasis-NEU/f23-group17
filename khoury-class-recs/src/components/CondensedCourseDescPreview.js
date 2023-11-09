import React from "react";
import { Rating } from "@mui/material";
import "./comp-style.css";
import DetailsButton from "./DetailsButton";

/**
 * Used primarily for the user profile page.
 */
export default function CondensedCourseDescPreview(props) {
  return (
    <div className="course-desc-wrapper">
      <h3 style={{ marginBottom: -10 }}>{props.ident + " - " + props.name}</h3>
      <div className="course-desc-bottom-wrapper">
        <p style={{ display: "flex", alignItems: "center", fontSize: 18 }}>
          <b>overall rating: </b>
          <Rating precision={0.5} value={props.rating} readOnly size="large" />
        </p>
        <DetailsButton courseID={props.ident} />
      </div>
    </div>
  );
}
