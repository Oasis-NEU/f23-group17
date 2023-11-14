import Layout from "../../layout/Layout";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import "../pages-styles.css";
import EditButton from "../../components/user-profile/EditButton";

export default function EditReviewsPage() {
  return (
    <Layout>
      <div className="page-content edit-page">
        <ProfileBackButton />
        <h1>edit my reviews</h1>
        <EditButton
          label="add review"
          path="/courses/create-review"
        ></EditButton>
      </div>
    </Layout>
  );
}
