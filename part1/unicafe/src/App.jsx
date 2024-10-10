/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ action, text }) => {
  return <button onClick={action}>{text}</button>;
};

const ComnentStats = ({ name, num }) => (
  <div>
    {name}: {num}
  </div>
);

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const onClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const onClickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={onClickGood} text={"Good"} />
      <Button action={onClickNeutral} text={"Nuetral"} />
      <Button action={onClickBad} text={"Bad"} />
      <h2>Staticts</h2>
      <ComnentStats name={"Good"} num={good} />
      <ComnentStats name={"Neutral"} num={neutral} />
      <ComnentStats name={"Bad"} num={bad} />
    </div>
  );
}
