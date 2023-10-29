import "./comp-style.css";

/**
 * props:
 *  name - string: name of the class
 *  desc - string: the class's description
 *  rating - string: current rating out of 5
 *  preReqs - array of strings: the prereqs for this class
 *  coReqs - array of string: the coreqs for this class
 */
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
