import React from "react";
import CondensedCourseDescPreview from "../CondensedCourseDescPreview";
import EditButton from "./EditButton";

export default function SavedClasses({ list }) {
  return (
    <div className="user-profile-comp">
      <h2>your saved recommendations</h2>
      {list ? (
        <div style={{ minHeight: "50%" }}>
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
        <div style={{ minHeight: "50%" }}>
          <p> you haven't saved any classes {" :( "} </p>
        </div>
      )}

      {list ? (
        <EditButton label="edit" path="/my-profile/edit-saved-courses" />
      ) : (
        <EditButton
          label="explore your recommendations"
          path="/my-recommendations"
        />
      )}
    </div>
  );
}
