import React from "react";
import { Rating } from "@mui/material";
import "./comp-style.css";

/**
 * props:
 *  name - string: name of the class
 *  desc - string: the class's description
 *  rating - string: current rating out of 5
 *  preReqs - array of strings: the prereqs for this class
 *  coReqs - array of string: the coreqs for this class
 */
export default function CourseDescPreview(props) {
  return (
    <div className="course-desc-wrapper">
      <h3 style={{ marginBottom: -15 }}>{props.ident + " - " + props.name}</h3>
      <p style={{ marginBottom: -5 }}>{props.desc}</p>
      {props.preReqs && (
        <p style={{ marginBottom: -5, fontSize: 14 }}>
          prerequisite(s): {props.preReqs}
        </p>
      )}
      {props.coReqs && (
        <p style={{ fontSize: 14 }}>corequisite(s): {props.coReqs}</p>
      )}

      <p style={{ display: "flex", alignItems: "center" }}>
        <b>overall rating: </b>
        <Rating precision={0.5} value={props.rating} readOnly size="large" />
      </p>

      {/** Needs link*/}
      <button className="course-desc-button">see more details</button>
    </div>
  );
}
