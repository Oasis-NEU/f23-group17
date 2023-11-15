import { React } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress, useTheme } from "@mui/material";
import { supabase } from "../../supabase";
import "./auth-styles.css";

export default function SignUpForm() {
  const theme = useTheme();
  const navigate = useNavigate();

  const DEFAULT_VALUES = {
    username: "",
    password: "",
    passwordConfirm: "",
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

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg("");
    setLoading(true);

    if (form.password !== form.passwordConfirm) {
      setErrorMsg("passwords do not match!");
      setLoading(false);
      return;
    }

    const {
      data: { user, session },
      error,
    } = await register(form.username.value, form.password.value);

    if (error) {
      setErrorMsg(error.message);
      setForm(DEFAULT_VALUES);
    }
    if (user && session) navigate("/");

    setLoading(false);
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
        <button type="submit" className="submit-button">
          submit
        </button>
      </form>
      <p>
        already have an account? <Link to="/login">sign in here!</Link>
      </p>
      {errorMsg !== "" && (
        <div style={{ color: theme.palette.primary.main }}>{errorMsg}</div>
      )}
      {isLoading && <CircularProgress />}
    </div>
  );
}
