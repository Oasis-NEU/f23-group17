import { React } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
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
          <Link to="/my-recommendations">see my recommendations</Link>
        </div>
        <div id="get-started">
          <h1>get started</h1>
          <p>fill out your profile for better recommendations!</p>
          <Link to="/my-recommendations">edit my profile</Link>
        </div>
      </div>
    </Layout>
  );
}
