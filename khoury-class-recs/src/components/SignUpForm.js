import { useState } from "react";
export default function SignUpForm() {
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
  };

  return (
    <div>
      sign up
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
      <p>already have an account? sign in here!</p>
    </div>
  );
}
