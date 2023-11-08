import React from "react";
import CourseDescPreview from "../CourseDescPreview";
import "./user-profile-style.css";
import EditButton from "./EditButton";

export default function ClassesTaken({ list }) {
  list = [{ ident: "CS2500", name: "Fundies", desc: "FUNDIESSSS" }];
  return (
    <div className="user-profile-comp">
      <h2>classes you've taken</h2>
      {list ? (
        <div>
          {list.map((course) => (
            <CourseDescPreview
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
