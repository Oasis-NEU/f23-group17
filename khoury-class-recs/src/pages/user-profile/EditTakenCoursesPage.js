import Layout from "../../layout/Layout";
import { TextField, Autocomplete, Stack } from "@mui/material";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import CourseDescPreview from "../../components/CourseDescPreview";
import ProfileCourseDescButtons from "../../components/user-profile/ProfileCourseDescButtons";
import "../pages-styles.css";

export default function EditTakenCoursesPage() {
  // grab current user's id and grab their taken courses list (list of ident)
  // grab the information from each of the courses in that list from course database

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
      <div className="page-content edit-page">
        <ProfileBackButton />
        <h1>edit my taken courses</h1>
        <Autocomplete
          disablePortal
          options={[]}
          sx={{ width: "60%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="add a course"
              placeholder="ex: CS3500"
            />
          )}
        />

        <h2>courses taken</h2>
        {courses ? (
          <Stack spacing={2} sx={{ width: "80%" }}>
            {courses.map((course) => (
              <CourseDescPreview
                ident={course.ident}
                name={course.name}
                desc={course.desc}
                rating={course.rating}
                preReqs={course.preReqs}
                coReqs={course.coReqs}
                additionalButtons={
                  <ProfileCourseDescButtons toolTipNote="saved" />
                }
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
