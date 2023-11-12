import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import "../pages-styles.css";

export default function EditReviewsPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="page-content edit-page">
        <ProfileBackButton />
        <h1>edit my reviews</h1>
        <button onClick={() => navigate("/courses/create-review")}>
          add review
        </button>
      </div>
    </Layout>
  );
}
