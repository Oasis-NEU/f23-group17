import { React } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import SignUpForm from "./components/auth/SignUpForm";
import LoginForm from "./components/auth/LoginForm";
import HomePage from "./pages/HomePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ProfilePage from "./pages/user-profile/ProfilePage";
import EditTakenCoursesPage from "./pages/user-profile/EditTakenCoursesPage";
import EditSavedCoursesPage from "./pages/user-profile/EditSavedCoursesPage";
import EditReviewsPage from "./pages/user-profile/EditReviewsPage";
import ScrollToTop from "./ScrollToTop";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import AuthRoute from "./components/auth/AuthRoute";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<AuthRoute />}>
          <Route path="/my-recommendations" element={<RecommendationsPage />} />
          <Route path="/my-profile" element={<ProfilePage />} />
          <Route
            path="/my-profile/edit-taken-courses"
            element={<EditTakenCoursesPage />}
          />
          <Route
            path="/my-profile/edit-saved-courses"
            element={<EditSavedCoursesPage />}
          />
          <Route
            path="/my-profile/edit-reviews"
            element={<EditReviewsPage />}
          />
          <Route path="/courses/create-review" element={<CreateReviewPage />} />
          <Route path="/courses/:ident" element={<CourseDetailsPage />} />
        </Route>
        <Route
          path="/sign-up"
          element={<AuthPage component={<SignUpForm />} />}
        />
        <Route path="/login" element={<AuthPage component={<LoginForm />} />} />
      </Routes>
    </div>
  );
}
