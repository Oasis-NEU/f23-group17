import Layout from "../../layout/Layout";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import "../pages-styles.css";

export default function EditReviewsPage() {
  return (
    <Layout>
      <div className="page-content edit-page">
        <ProfileBackButton />
        <h1>edit my reviews</h1>
      </div>
    </Layout>
  );
}
