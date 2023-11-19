import { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import { supabase } from "../../supabase";
import CourseDescPreview from "../../components/CourseDescPreview";
import ProfileCourseDescButtons from "../../components/user-profile/ProfileCourseDescButtons";
import EditButton from "../../components/user-profile/EditButton";
import { Stack } from "@mui/material";
import "../pages-styles.css";

export default function EditSavedCoursesPage() {
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
        <h1>edit my saved courses</h1>
        <EditButton label="explore more classes" path="/my-recommendations" />
        <h2>saved courses</h2>
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
                  <ProfileCourseDescButtons toolTipNote="taken" />
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
