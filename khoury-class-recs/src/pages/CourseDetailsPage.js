import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { Rating, Typography, Stack } from "@mui/material";
import CourseReview from "../components/CourseReview";
import "./pages-styles.css";

export default function CourseDetailsPage() {
  const { ident } = useParams();
  console.log(ident);
  // if ident doesn't exist in database, return error page

  // placeholder data
  const course = {
    ident: "CS2500",
    name: "Fundamentals of CS 1",
    desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline.",
    difficulty: 8,
    workload: 7,
    overallRating: 3,
    reviews: [
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
    ],
  };
  return (
    <Layout>
      <div className="page-content">
        <h1>{course.ident + " - " + course.name}</h1>
        <div style={{ paddingLeft: 200, paddingRight: 200 }}>
          <Typography align="left">{course.desc}</Typography>
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <b>overall rating: </b>
            <Rating
              precision={0.5}
              value={course.overallRating}
              readOnly
              size="large"
            />
          </Typography>
          <Typography variant="h5" align="left">
            <b>difficulty: </b> {course.difficulty} / 10
          </Typography>
          <Typography variant="h5" align="left">
            <b>workload: </b>
            {course.workload} / 10
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <Typography variant="h4" align="left">
              comments on {course.ident}
            </Typography>
            {course.reviews.length > 0 ? (
              <Stack spacing={2}>
                {course.reviews.map((review) => (
                  <CourseReview
                    showCourseName={false}
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
              <div>no comments yet {":("}</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
