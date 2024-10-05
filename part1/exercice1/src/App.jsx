/* eslint-disable react/prop-types */
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = (props) => {
  console.log("Component Content", props);
  return (
    <div>
      <Part part={props.props.part1} exercises={props.props.exercises1} />
      <Part part={props.props.part2} exercises={props.props.exercises2} />
      <Part part={props.props.part3} exercises={props.props.exercises3} />
    </div>
  );
};

const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        props={{
          part1: part1,
          exercises1: exercises1,
          part2: part2,
          exercises2: exercises2,
          part3: part3,
          exercises4: exercises3,
        }}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
