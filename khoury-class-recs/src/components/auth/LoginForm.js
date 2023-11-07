import { React } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth-styles.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const DEFAULT_VALUES = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(DEFAULT_VALUES);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(DEFAULT_VALUES);

    // should ask backend to verify credentials are correct and sign in
    // if incorrect, signal "incorrect username or password"

    // on submit success, nagivate to home
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>log in</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label className="auth-label">
          <p>username</p>
          <input
            type="text"
            placeholder="your email"
            value={form.username || ""}
            name="username"
            onChange={handleChange}
          />
        </label>
        <label className="auth-label">
          <p>password</p>
          <input
            type="password"
            placeholder="your password"
            value={form.password || ""}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-button">
          submit
        </button>
      </form>
      <p>
        don't have an account? <Link to="/sign-up">sign up here!</Link>
      </p>
    </div>
  );
}
