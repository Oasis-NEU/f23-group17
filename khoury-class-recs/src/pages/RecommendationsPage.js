import { React } from "react";
import Layout from "../layout/Layout";
import "./pages-styles.css";
import CourseDescPreview from "../components/CourseDescPreview";

export default function RecommendationsPage({ list }) {
  list = [{ ident: "CS2500", name: "Fundies", desc: "FUNDIESSSS" }];
  return (
    <Layout>
      <div id="recommendations" className="page-content">
        <h1>my recommendations</h1>
        {list ? (
          list.map((course) => (
            <CourseDescPreview
              ident={course.ident}
              name={course.name}
              desc={course.desc}
              rating={course.rating}
              preReqs={course.preReqs}
              coReqs={course.coReqs}
            />
          ))
        ) : (
          <div>no recommendations {":("}</div>
        )}
      </div>
    </Layout>
  );
}
