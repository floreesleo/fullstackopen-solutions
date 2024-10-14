import Header from "./Header";
import Content from "./Content";
import SumTotal from "./SumTotal";

export default function Course({ course }) {
  // console.log("Course", course);
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <SumTotal parts={course.parts} />
    </div>
  );
}
