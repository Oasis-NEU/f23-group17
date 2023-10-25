import "./comp-style.css";

export default function CourseDescPreview(props) {
  return (
    <div className="course-desc-wrapper">
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <p>
        <b>rating: </b>
        {props.rating}
      </p>
      {props.preReqs && (
        <p>
          <b>prerequisites: </b>
          {props.preReqs}
        </p>
      )}
      {props.coReqs && (
        <p>
          <b>corequisites: </b>
          {props.coReqs}
        </p>
      )}

      {/** Needs link*/}
      <button className="course-desc-button">see more details</button>
    </div>
  );
}
