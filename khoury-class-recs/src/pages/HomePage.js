import { React } from "react";
import Layout from "../layout/Layout";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";
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
          <Button
            variant="text"
            href="/my-recommendations"
            endIcon={<EastIcon />}
            sx={{ transform: "scale(1.7)", fontWeight: "bold" }}
          >
            see my recommendations
          </Button>
        </div>
        <div id="get-started">
          <div>
            <h1>get started</h1>
            <p>fill out your profile for better recommendations!</p>
          </div>
          <Button
            variant="outlined"
            href="/my-profile"
            endIcon={<EditNoteIcon />}
            sx={{
              transform: "scale(2)",
              fontWeight: "bold",
              border: "solid",
            }}
          >
            edit my profile
          </Button>
        </div>
      </div>
    </Layout>
  );
}
