import React from "react";
import CondensedCourseDescPreview from "../CondensedCourseDescPreview";
import "./user-profile-style.css";
import EditButton from "./EditButton";

export default function ClassesTaken({ list }) {
  list = [
    {
      ident: "CS2500",
      name: "Fundies",
      desc: "Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline. ",
      coReqs: "fundie lab",
      preReqs: "be alive",
    },
  ];
  return (
    <div className="user-profile-comp">
      <h2>classes you've taken</h2>
      {list ? (
        <div>
          {list.map((course) => (
            <CondensedCourseDescPreview
              ident={course.ident}
              name={course.name}
              desc={course.desc}
              rating={course.rating}
              preReqs={course.preReqs}
              coReqs={course.coReqs}
            />
          ))}
        </div>
      ) : (
        <div>
          <p> you haven't taken any classes {" :( "} </p>
        </div>
      )}
      {list ? (
        <EditButton label="edit" path="/my-profile/edit-taken-courses" />
      ) : (
        <EditButton
          label="add classes here"
          path="/my-profile/edit-taken-courses"
        />
      )}
    </div>
  );
}
