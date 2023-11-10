import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import "./pages-styles.css";

export default function CourseDetailsPage() {
  const { ident } = useParams();
  // if ident doesn't exist in database, return error page

  return (
    <Layout>
      <div className="page-content">{ident}</div>
    </Layout>
  );
}
