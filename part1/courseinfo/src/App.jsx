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

const Content = ({ content1, content2, content3 }) => {
  return (
    <div>
      <Part part={content1.name} exercises={content1.exercises} />
      <Part part={content2.name} exercises={content2.exercises} />
      <Part part={content3.name} exercises={content3.exercises} />
    </div>
  );
};

const Total = ({ exercices }) => {
  return <p>Number of exercises: {exercices}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      {/* <Content
        props={{
          part1: part1,
          exercises1: exercises1,
          part2: part2,
          exercises2: exercises2,
          part3: part3,
          exercises4: exercises3,
        }}
      /> */}
      <Content content1={part1} content2={part2} content3={part3} />
      <Total exercices={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
