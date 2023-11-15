import { React } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./layout-styles.css";

export default function Footer() {
  return (
    <footer id="footer">
      <p id="footer-text">© 2023 Oasis</p>
      <a
        href="https://github.com/Oasis-NEU/f23-group17"
        target="_blank"
        rel="noopener noreferrer"
        id="footer-link"
      >
        <GitHubIcon />
      </a>
    </footer>
  );
}
