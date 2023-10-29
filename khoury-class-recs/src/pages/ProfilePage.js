import { React } from "react";
import Layout from "../layout/Layout";
import ClassesTaken from "../components/user-profile/ClassesTaken";
import SavedClasses from "../components/user-profile/SavedClasses";
import YourReviews from "../components/user-profile/YourReviews";

import "./pages-styles.css";

export default function ProfilePage() {
  const props = {};
  return (
    <Layout>
      <div id="profile" className="page-content">
        <h1>my profile</h1>
        <div className="user-profile">
          <h2>hi, {props.currentUser}</h2>
          <div className="user-profile-content">
            <ClassesTaken list={props.classesTaken} />
            <SavedClasses list={props.savedClasses} />
          </div>
          <YourReviews list={props.reviews} />
        </div>
      </div>
    </Layout>
  );
}
