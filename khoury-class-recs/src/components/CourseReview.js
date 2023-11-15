import React from "react";
import { Rating, Paper, List, ListItem, Typography } from "@mui/material";
import "./comp-style.css";

/**
 * One course review description
 */
export default function CourseReview(props) {
  return (
    <Paper className="course-desc-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: "70%" }}
        >
          <h3 style={{ textAlign: "left" }}>
            {props.showCourseName
              ? props.ident + " - " + props.courseName
              : "Review from: " + props.reviewer}
          </h3>
          <Typography variant="h6" align="left">
            Comments:
          </Typography>
          <Typography variant="p" align="left">
            {props.comments === "" ? "no comments" : props.comments}
          </Typography>
        </div>

        <div style={{ display: "flex", alignItems: "center", width: "30%" }}>
          <b>ratings: </b>
          <List>
            <ListItem>
              overall:
              <Rating
                precision={0.5}
                value={props.overallRating}
                readOnly
                size="large"
              />
            </ListItem>
            <ListItem>difficulty: {props.difficulty} / 10</ListItem>
            <ListItem>workload: {props.workload} / 10</ListItem>
          </List>
        </div>
      </div>
    </Paper>
  );
}
