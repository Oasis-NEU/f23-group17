import { React, useState } from "react";
import { supabase } from "../../supabase";
import { Link, useNavigate } from "react-router-dom";
import "./auth-styles.css";
import { CircularProgress, useTheme } from "@mui/material";

export default function LoginForm() {
  const theme = useTheme();
  const navigate = useNavigate();

  const DEFAULT_VALUES = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(DEFAULT_VALUES);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (email, password) =>
    supabase.auth.signInWithPassword({ email, password });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMsg("");
    setLoading(true);

    const {
      data: { user, session },
      error,
    } = await login(form.username, form.password);

    if (error) {
      setErrorMsg(error.message.toLowerCase());
      setForm(DEFAULT_VALUES);
    }
    if (user && session) navigate("/");

    setLoading(false);
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
      {errorMsg !== "" && (
        <div style={{ color: theme.palette.primary.main }}>{errorMsg}</div>
      )}
      {isLoading && <CircularProgress />}
    </div>
  );
}
