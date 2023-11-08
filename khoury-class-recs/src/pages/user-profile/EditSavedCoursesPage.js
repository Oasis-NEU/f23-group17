import Layout from "../../layout/Layout";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import "../pages-styles.css";

export default function EditSavedCoursesPage() {
  return (
    <Layout>
      <div className="page-content">
        <div className="user-prof-edit-header">
          <ProfileBackButton />
          <h1>edit my saved courses</h1>
        </div>
      </div>
    </Layout>
  );
}
