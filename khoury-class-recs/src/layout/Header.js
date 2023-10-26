import { React } from "react";
import { Link } from "react-router-dom";
import DvrSharpIcon from "@mui/icons-material/DvrSharp";
import "./layout-styles.css";

export default function Header() {
  return (
    <header id="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <Link to="/" className="header-nav-link">
          <DvrSharpIcon sx={{ fontSize: "50px" }} />
        </Link>
        <div id="header-nav-links">
          <Link to="/" className="header-nav-link">
            home
          </Link>
          <Link to="/my-recommendations" className="header-nav-link">
            recs
          </Link>
          <Link to="/my-profile" className="header-nav-link">
            profile
          </Link>{" "}
        </div>
      </div>
    </header>
  );
}
