import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  // console.log("Course", course);
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
}
