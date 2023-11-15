import Layout from "../../layout/Layout";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import "../pages-styles.css";
import EditButton from "../../components/user-profile/EditButton";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import CourseReview from "../../components/CourseReview";

export default function EditReviewsPage() {
  const [reviews, setReviews] = useState(null);

  useEffect(
    () =>
      setReviews([
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
      ]),
    []
  );

  return (
    <Layout>
      <div className="page-content edit-page">
        <ProfileBackButton />
        <h1>edit my reviews</h1>
        <EditButton
          label="add review"
          path="/courses/create-review"
        ></EditButton>
        <h2>your reviews</h2>
        {reviews ? (
          <Stack
            spacing={2}
            sx={{ width: "80%", marginRight: "10%", marginLeft: "10%" }}
          >
            {reviews.map((review) => (
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
          <div>you have not reviewed anything {":("}</div>
        )}
      </div>
    </Layout>
  );
}
