import ClassesTaken from "../components/user-profile/ClassesTaken";
import SavedClasses from "../components/user-profile/SavedClasses";
import YourReviews from "../components/user-profile/YourReviews";
import "./pages-style.css";

/**
 * props:
 *  currentUser - string: the current user
 *  classesTaken - array of courseInfo: the classes the user have indicated that they've taken
 *  savedClasses - array of courseInfo: the classes the user haven't been taken but are interested in
 *  reviews - array of reviewInfo: the classes the user has reviewed
 */
export default function UserProfile(props) {
  return (
    <div className="user-profile">
      <h2>hi, {props.currentUser}</h2>
      <div className="user-profile-content">
        <ClassesTaken list={props.classesTaken} />
        <SavedClasses list={props.savedClasses} />
      </div>
      <YourReviews list={props.reviews} />
    </div>
  );
}
