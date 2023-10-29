import React from "react";
import CourseDescPreview from "../CourseDescPreview";

export default function SavedClasses({ list }) {
  return (
    <div className="user-profile-comp">
      <h3>your saved recommendations</h3>
      {list ? (
        <div>
          {list.map((course) => (
            <CourseDescPreview
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
          <p> you haven't saved any classes {" :( "} </p>
          <p> explore your recommendations </p>
        </div>
      )}

      <button>edit</button>
    </div>
  );
}
