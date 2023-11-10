import { React } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EastIcon from "@mui/icons-material/East";
import "./pages-styles.css";

export default function HomePage() {
  return (
    <Layout>
      <div className="page-content">
        <div id="hero">
          <h1>khoury course recommendations</h1>
          <p>
            interested in taking computer science courses at northeastern or
            looking for your next khoury elective? explore khoury classes
            reviewed by other students!
          </p>
          <Link to="/my-recommendations" className="home-page-link">
            <div>see my recommendations</div> <EastIcon sx={{ fontSize: 40 }} />
          </Link>
        </div>
        <div id="get-started">
          <div>
            <h1>get started</h1>
            <p>fill out your profile for better recommendations!</p>
          </div>
          <Link
            to="/my-profile"
            className="home-page-link"
            style={{ border: "solid", borderRadius: "10px", padding: "10px" }}
          >
            <div>edit my profile</div> <EditNoteIcon sx={{ fontSize: 40 }} />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
