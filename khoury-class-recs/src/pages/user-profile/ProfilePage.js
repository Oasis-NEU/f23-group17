import { React } from "react";
import Layout from "../../layout/Layout";
import ClassesTaken from "../../components/user-profile/ClassesTaken";
import SavedClasses from "../../components/user-profile/SavedClasses";
import YourReviews from "../../components/user-profile/YourReviews";

import "../pages-styles.css";
import { useAuth } from "../../context/AuthProvider";
import { Typography } from "@mui/material";

export default function ProfilePage() {
  const { session } = useAuth();

  const props = {};
  return (
    <Layout>
      <div id="profile" className="page-content">
        <h1>my profile</h1>
        <Typography variant="h4" sx={{ paddingBottom: 10 }}>
          Hi, {session.user.email}!
        </Typography>
        <div className="user-profile">
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
