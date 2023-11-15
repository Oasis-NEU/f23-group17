import React from "react";
import { Stack } from "@mui/material";
import EditButton from "./EditButton";
import CourseReview from "../CourseReview";

export default function YourReviews() {
  const list = [
    {
      ident: "CS 2500",
      courseName: "Fundamentals of CS 1",
      overallRating: 1.5,
      workload: 5,
      difficulty: 7,
      comments: "",
      reviewer: "John Doe",
    },
    {
      ident: "CS 2500",
      courseName: "Fundamentals of CS 1",
      overallRating: 1.5,
      workload: 5,
      difficulty: 7,
      comments: "",
      reviewer: "John Doe",
    },
    {
      ident: "CS 2500",
      courseName: "Fundamentals of CS 1",
      overallRating: 1.5,
      workload: 5,
      difficulty: 7,
      comments: "",
      reviewer: "John Doe",
    },
  ];

  return (
    <div id="user-profile-reviews">
      <h2>your course reviews</h2>
      {list ? (
        <Stack
          spacing={1}
          sx={{
            minHeight: "60%",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          {list.map((review) => (
            <CourseReview
              showCourseName={true}
              ident={review.ident}
              courseName={review.courseName}
              reviewer={review.reviewer}
              overallRating={review.overallRating}
              difficulty={review.difficulty}
              workload={review.workload}
              comments={review.comments}
            />
          ))}
        </Stack>
      ) : (
        <div style={{ minHeight: "50%" }}>
          you haven't reviewed any classes {" :("}
        </div>
      )}
      <div className="user-profile-comp-bottom-wrapper">
        {list ? (
          <EditButton label="edit" path="/my-profile/edit-reviews" />
        ) : (
          <EditButton
            label="review some classes"
            path="/my-profile/edit-reviews"
          />
        )}
      </div>
    </div>
  );
}
