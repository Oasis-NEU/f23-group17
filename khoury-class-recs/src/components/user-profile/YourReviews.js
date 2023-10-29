export default function YourReviews({ list }) {
  return (
    <div>
      <h3>your course reviews</h3>
      {list ? <div></div> : <div>you haven't reviewed any classes</div>}
      <button>edit</button>
    </div>
  );
}
