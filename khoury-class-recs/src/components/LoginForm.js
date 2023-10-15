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
    console.log(form);
    setForm(DEFAULT_VALUES);
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
    </div>
  );
}
