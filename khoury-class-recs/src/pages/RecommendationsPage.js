import { React } from "react";
import Layout from "../layout/Layout";
import "./pages-styles.css";
import CourseDescPreview from "../components/CourseDescPreview";
import RecommendationsCourseDescButtons from "../components/RecommendationsCourseDescButtons";

export default function RecommendationsPage({ list }) {
  list = [
    {
      ident: "CS2500",
      name: "Fundies",
      desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline. ",
      coReqs: "fundie lab",
      preReqs: "be alive",
    },
    {
      ident: "CS2500",
      name: "Fundies",
      desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline. ",
      coReqs: "fundie lab",
      preReqs: "be alive",
    },
    {
      ident: "CS2500",
      name: "Fundies",
      desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline. ",
      coReqs: "fundie lab",
      preReqs: "be alive",
    },
    {
      ident: "CS2500",
      name: "Fundies",
      desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline. ",
      coReqs: "fundie lab",
      preReqs: "be alive",
    },
    {
      ident: "CS2500",
      name: "Fundies",
      desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline. ",
      coReqs: "fundie lab",
      preReqs: "be alive",
    },
  ];
  return (
    <Layout>
      <div id="recommendations" className="page-content">
        <h1>my recommendations</h1>
        {list ? (
          list.map((course) => (
            <CourseDescPreview
              ident={course.ident}
              name={course.name}
              desc={course.desc}
              rating={course.rating}
              preReqs={course.preReqs}
              coReqs={course.coReqs}
              additionalButtons={<RecommendationsCourseDescButtons />}
            />
          ))
        ) : (
          <div>no recommendations {":("}</div>
        )}
      </div>
    </Layout>
  );
}
