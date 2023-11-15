import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Rating,
  Typography,
  Button,
  Card,
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

  const handleSelectionChange = (e, value) => {
    setCourse(value);
    setForm(DEFAULT_VALUES);
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
        <h1>review a course</h1>

        <Autocomplete
          disablePortal
          options={list}
          sx={{ width: "60%" }}
          onChange={handleSelectionChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="enter a course name"
              placeholder="ex: CS3500"
            />
          )}
        />

        {selectedCourse && (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "60%",
              margin: "50px",
              paddingBottom: "20px",
            }}
          >
            <h2>review {selectedCourse}</h2>
            <form
              onSubmit={handleSubmit}
              style={{ width: "75%", display: "flex", flexDirection: "column" }}
            >
              <label className="review-form-label">
                <Typography variant="h5">overall rating</Typography>
                <p></p>
                <Rating
                  name="overallRating"
                  value={form.overallRating}
                  precision={0.5}
                  size="large"
                  onChange={handleChange}
                  required
                ></Rating>
              </label>
              <div style={{ display: "flex" }}>
                <label
                  className="review-form-label"
                  style={{ marginRight: "10%" }}
                >
                  <Typography variant="h6">difficulty</Typography>
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
                    sx={{ width: "100%" }}
                  />
                </label>
                <label className="review-form-label">
                  <Typography variant="h6">workload</Typography>
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
                    sx={{ width: "100%" }}
                    required
                  />
                </label>
              </div>

              <label className="review-form-label">
                <Typography variant="h6">
                  additional comments (optional)
                </Typography>
                <TextField
                  name="comments"
                  value={form.comments}
                  placeholder="This class taught me... I took this class with prof... I hated this class because..."
                  multiline
                  onChange={handleChange}
                  minRows={5}
                  sx={{ width: "100%" }}
                />
              </label>
              <Button
                variant="contained"
                sx={{ width: "fit-content", alignSelf: "flex-end" }}
                type="submit"
              >
                submit
              </Button>
            </form>
          </Card>
        )}
      </div>
    </Layout>
  );
}
