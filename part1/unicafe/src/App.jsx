/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Button = ({ action, text }) => {
  return <button onClick={action}>{text}</button>;
};

const CommentStats = ({ name, num }) => (
  <div>
    {name}: {num}
  </div>
);

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const calcAverage = ((good + neutral + bad) / 3).toFixed(4);
    setAverage(calcAverage);
  }, [all]);

  const onClickGood = () => {
    const updatedGood = good + 1;
    const updatedAll = all + 1;
    setGood(updatedGood);
    setAll(updatedAll);
  };

  const onClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedAll = all + 1;
    setNeutral(updatedNeutral);
    setAll(updatedAll);
  };

  const onClickBad = () => {
    const updatedBad = bad + 1;
    const updatedAll = all + 1;
    setBad(updatedBad);
    setAll(updatedAll);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={onClickGood} text={"Good"} />
      <Button action={onClickNeutral} text={"Nuetral"} />
      <Button action={onClickBad} text={"Bad"} />
      <h2>Statistics</h2>
      <CommentStats name={"Good"} num={good} />
      <CommentStats name={"Neutral"} num={neutral} />
      <CommentStats name={"Bad"} num={bad} />
      <CommentStats name={"All"} num={all} />
      <CommentStats name={"Average"} num={average} />
      <CommentStats
        name={"Positive"}
        num={((good / all) * 100).toFixed(2) + "%"}
      />
    </div>
  );
}
