import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout-styles.css";

export default function Layout({ children }) {
  return (
    <div id="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
