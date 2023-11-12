import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Rating,
  TextareaAutosize,
} from "@mui/material";
import Layout from "../layout/Layout";
import "./pages-styles.css";

export default function CreateReviewPage() {
  const list = ["CS 2500", "CS 1000"];
  const DEFAULT_VALUES = {
    difficulty: 0,
    workload: 0,
    overallRating: 0,
    comments: "",
  };

  const [form, setForm] = useState(DEFAULT_VALUES);
  const [selectedCourse, setCourse] = useState(undefined);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(DEFAULT_VALUES);

    // these printed values can be sent to the backend to create an entry in the database
    console.log(form);
    console.log(selectedCourse);
  };

  return (
    <Layout>
      <div className="page-content" id="create-review">
        <Autocomplete
          disablePortal
          options={list}
          sx={{ width: "60%" }}
          onChange={(event, value) => setCourse(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="enter a course name"
              placeholder="ex: CS3500"
            />
          )}
        />

        {selectedCourse && (
          <div>
            <h2>review {selectedCourse}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
              <label>
                <p>difficulty</p>
                <TextField
                  type="number"
                  name="difficulty"
                  value={form.difficulty}
                  onChange={handleChange}
                  InputProps={{
                    inputProps: {
                      max: 10,
                      min: 0,
                    },
                  }}
                  required
                />
              </label>
              <label>
                <p>workload</p>
                <TextField
                  type="number"
                  name="workload"
                  value={form.workload}
                  onChange={handleChange}
                  InputProps={{
                    inputProps: {
                      max: 10,
                      min: 0,
                    },
                  }}
                  required
                />
              </label>
              <label>
                <p>overall rating</p>
                <Rating
                  name="overallRating"
                  value={form.overallRating}
                  precision={0.5}
                  onChange={handleChange}
                  required
                ></Rating>
              </label>
              <label>
                <p>additional comments (optional)</p>
                <TextareaAutosize
                  name="comments"
                  value={form.comments}
                  placeholder="This class was my favorite! ..."
                  onChange={handleChange}
                />
              </label>
              <button type="submit">submit</button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}
