
// Login Page

import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";

// Page
export default function LoginForm() {

  // Holds user input
  const DEFAULT_VALUES = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(DEFAULT_VALUES);
  const [msg, setMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false)

  // Handles state changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Login functionality
  const login = async (email, password) =>
    supabase.auth.signInWithPassword({ email, password })

  const handleSubmit = async (event) => {
    event.preventDefault();

    try
    {
      setErrorMsg("")
      setLoading(true)

      const {
        data: { user, session },
        error
      } = await login(form.username.value, form.password.value);

      if (error) setErrorMsg(error.message)
      if (user && session) NavigationPreloadManager("/")

    }
    catch(err)
    {
      setErrorMsg("Email or password incorrect")
    }

    setLoading(true)
    


    // setForm(DEFAULT_VALUES);

  };

  return (
    <div>
      log in
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
        <button type="submit">submit</button>
      </form>
      {/* Need to add link to Signin */}
      <p>don't have an account? sign up here!</p>
    </div>
  );
}
