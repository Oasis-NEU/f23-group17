import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { Rating } from "@mui/material";
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
    comments: [{ commenter: "John Doe", comment: "pain" }],
  };
  return (
    <Layout>
      <div className="page-content">
        <h1>{course.ident + " - " + course.name}</h1>
        <div style={{ paddingLeft: 200, paddingRight: 200 }}>
          <p>{course.desc}</p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <b>overall rating: </b>
            <Rating
              precision={0.5}
              value={course.overallRating}
              readOnly
              size="large"
            />
          </p>
          <p>difficulty: {course.difficulty} / 10</p>
          <p>workload: {course.workload} / 10</p>
          <div>
            <h2>comments on {course.ident}</h2>
            {course.comments.length > 0 ? (
              <div>
                {course.comments.map((comment) => (
                  <div>
                    {comment.commenter} says... "{comment.comment}"
                  </div>
                ))}
              </div>
            ) : (
              <div>no comments yet {":("}</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
