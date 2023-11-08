import Layout from "../../layout/Layout";
import { TextField, Autocomplete } from "@mui/material";
import ProfileBackButton from "../../components/user-profile/ProfileBackButton";
import "../pages-styles.css";

export default function EditTakenCoursesPage() {
  return (
    <Layout>
      <div className="page-content">
        <div className="user-prof-edit-header">
          <ProfileBackButton />
          <h1>edit my taken courses</h1>
        </div>
        <Autocomplete
          disablePortal
          options={[]}
          sx={{ width: "60%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="enter a course name"
              placeholder="ex: CS3500"
            />
          )}
        />
      </div>
    </Layout>
  );
}
