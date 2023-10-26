import { React } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth-styles.css";

export default function SignUpForm() {
  const navigate = useNavigate();
  const DEFAULT_VALUES = {
    username: "",
    password: "",
    passwordConfirm: "",
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

    // should ask backend to verify username/email doesn't already exist
    // then create the user account in the database
    // and sign user in

    // on submit success, nagivate to home
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>sign up</h2>
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
        <label className="auth-label">
          <p>confirm password</p>
          <input
            type="password"
            placeholder="your password again"
            value={form.passwordConfirm || ""}
            name="passwordConfirm"
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <p>
        already have an account? <Link to="/login">sign in here!</Link>
      </p>
    </div>
  );
}
