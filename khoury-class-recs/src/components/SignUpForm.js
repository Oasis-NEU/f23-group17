// Registration page

import { useRef, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

// Page
export default function SignUpForm() {

  // Holds user input
  const DEFAULT_VALUES = {
    username: "",
    password: "",
    passwordConfirm: "",
  };

  // State handlers
  const [form, setForm] = useState(DEFAULT_VALUES);

  const [msg, setMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Registration form functionality
  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.value != form.password.value) {
      setErrorMsg("Passwords do not match")
      return
    }

    // Registers user
    try
    {
      setErrorMsg("");
      setMsg("")
      setLoading(true);

      const { data, error } = await register(
        form.username.value, 
        form.password.value
      );

      if (data && !error) {
        setMsg("Registration successful! Check your email to confirm your account")
      }

    }
    catch (err)
    {
      setErrorMsg("ERROR: Unable to register account")
    }

    setLoading(false);
    setForm(DEFAULT_VALUES);

  };

  return (
    <div>

      Sign up
      <form onSubmit={handleSubmit}>
        <label>
          <p>username</p>
          <input
            type="text"
            placeholder="your email"
            value={form.username || ""}
            name="username"
            onChange={handleChange}
          />
        </label>
        <label>
          <p>password</p>
          <input
            type="password"
            placeholder="your password"
            value={form.password || ""}
            name="password"
            onChange={handleChange}
          />
        </label>
        <label>
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

      {/* Need to add link to Login */}
      <p>Already have an account? Sign in here!</p>

    </div>
  );
}
