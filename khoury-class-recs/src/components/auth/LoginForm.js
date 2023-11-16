import { React, useState } from "react";
import { supabase } from "../../supabase";
import { Link, useNavigate } from "react-router-dom";
import "./auth-styles.css";
import {
  CircularProgress,
  TextField,
  Typography,
  useTheme,
  Button,
} from "@mui/material";

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
          <Typography>username</Typography>
          <TextField
            placeholder="your email"
            value={form.username || ""}
            name="username"
            onChange={handleChange}
            size="small"
          />
        </label>
        <label className="auth-label last-label">
          <Typography>password</Typography>
          <TextField
            type="password"
            placeholder="your password"
            value={form.password || ""}
            name="password"
            onChange={handleChange}
            size="small"
          />
        </label>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            className="submit-button"
            type="submit"
            size="small"
          >
            submit
          </Button>
        )}
      </form>
      {errorMsg !== "" && (
        <div style={{ color: theme.palette.primary.main }}>{errorMsg}</div>
      )}
      <Typography>
        don't have an account? <Link to="/sign-up">sign up here!</Link>
      </Typography>
    </div>
  );
}
