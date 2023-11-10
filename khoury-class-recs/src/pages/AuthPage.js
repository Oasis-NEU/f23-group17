import { React } from "react";
import "./pages-styles.css";

/**
 * component is either LoginForm or SignUpForm
 */
export default function AuthPage({ component }) {
  return (
    <div className="page-content" id="auth">
      <h1>khoury course recommendations</h1>
      <div className="auth-component-container">{component}</div>
    </div>
  );
}
