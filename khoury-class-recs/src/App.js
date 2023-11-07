import { React } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import SignUpForm from "./components/auth/SignUpForm";
import LoginForm from "./components/auth/LoginForm";
import HomePage from "./pages/HomePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ProfilePage from "./pages/user-profile/ProfilePage";
import EditTakenCoursesPage from "./pages/user-profile/EditTakenCoursesPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sign-up"
          element={<AuthPage component={<SignUpForm />} />}
        />
        <Route path="/login" element={<AuthPage component={<LoginForm />} />} />
        <Route path="/my-recommendations" element={<RecommendationsPage />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        <Route path="/my-profile/edit-taken-courses" element={<EditTakenCoursesPage />} />
      </Routes>
    </div>
  );
}
