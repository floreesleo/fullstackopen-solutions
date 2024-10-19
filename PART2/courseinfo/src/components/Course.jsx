import Header from "./Header";
import Content from "./Content";
import SumTotal from "./SumTotal";

export default function Course({ course }) {
  // console.log("Course info: ", course);
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <SumTotal parts={course.parts} />
    </div>
  );
}
