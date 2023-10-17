import { useState } from "react";
export default function LoginForm() {
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
