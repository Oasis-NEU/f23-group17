import React from "react";
import { Rating } from "@mui/material";
import DetailsButton from "./DetailsButton";
import "./comp-style.css";

/**
 * Used when the width of the description can span the entire page.
 */
export default function CourseDescPreview(props) {
  return (
    <div className="course-desc-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <h3 style={{ marginBottom: -10 }}>
          {props.ident + " - " + props.name}
        </h3>
        {props.additionalButtons}
      </div>

      <p style={{ marginBottom: -5, textAlign: "start" }}>{props.desc}</p>
      {props.preReqs && (
        <p style={{ marginBottom: -5, fontSize: 14 }}>
          prerequisite(s): {props.preReqs}
        </p>
      )}
      {props.coReqs && (
        <p style={{ fontSize: 14 }}>corequisite(s): {props.coReqs}</p>
      )}
      <div className="course-desc-bottom-wrapper">
        <p style={{ display: "flex", alignItems: "center" }}>
          <b>overall rating: </b>
          <Rating precision={0.5} value={props.rating} readOnly size="large" />
        </p>
        <DetailsButton courseID={props.ident} />
      </div>
    </div>
  );
}
