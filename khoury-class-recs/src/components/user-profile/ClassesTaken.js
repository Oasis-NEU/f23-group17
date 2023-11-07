import React from "react";
import { useNavigate } from "react-router-dom";
import CourseDescPreview from "../CourseDescPreview";
import "./user-profile-style.css";

export default function ClassesTaken({ list }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/my-profile/edit-taken-courses");
  }

  return (
    <div className="user-profile-comp">
      <h3>classes you've taken</h3>
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
          <p> you haven't taken any classes {" :( "} </p>
          <p>add classes here</p>
        </div>
      )}
      <button onClick={handleClick}>edit</button>
    </div>
  );
}
