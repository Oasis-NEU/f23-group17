import { React, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CourseDescPreview from "../components/CourseDescPreview";
import RecommendationsCourseDescButtons from "../components/RecommendationsCourseDescButtons";
import "./pages-styles.css";
import { supabase } from "../supabase";
import { Stack } from "@mui/material";

export default function RecommendationsPage() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("CoursesCS").select();
      if (error) throw new Error();

      if (data) {
        setCourses(data);
      }
    };
    fetchCourses();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div id="recommendations" className="page-content">
        <h1>my recommendations</h1>
        {courses ? (
          <Stack spacing={2} sx={{ marginRight: "10%", marginLeft: "10%" }}>
            {courses.map((course) => (
              <CourseDescPreview
                ident={course.ident}
                name={course.name}
                desc={course.desc}
                rating={course.rating}
                preReqs={course.preReqs}
                coReqs={course.coReqs}
                additionalButtons={<RecommendationsCourseDescButtons />}
              />
            ))}
          </Stack>
        ) : (
          <div>no recommendations {":("}</div>
        )}
      </div>
    </Layout>
  );
}
