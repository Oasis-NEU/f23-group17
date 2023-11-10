import React from "react";
import EditButton from "./EditButton";

export default function YourReviews({ list }) {
  return (
    <div id="user-profile-reviews">
      <h2>your course reviews</h2>
      {list ? (
        <div style={{ minHeight: "50%" }}> ze reviews</div>
      ) : (
        <div style={{ minHeight: "50%" }}>
          you haven't reviewed any classes {" :("}
        </div>
      )}
      {list ? (
        <EditButton label="edit" path="/my-profile/edit-reviews" />
      ) : (
        <EditButton
          label="review some classes"
          path="/my-profile/edit-reviews"
        />
      )}
    </div>
  );
}
