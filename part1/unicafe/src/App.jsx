/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Button = ({ action, text }) => {
  return <button onClick={action}>{text}</button>;
};

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="Good" value={props.props[0]} />
      <StatisticLine text="Neutral" value={props.props[1]} />
      <StatisticLine text="Bad" value={props.props[2]} />
      <StatisticLine text="All" value={props.props[3]} />
      <StatisticLine text="Average" value={props.props[4]} />
      <StatisticLine
        text="Positive"
        value={(props.props[0] / props.props[3]).toFixed(4) + "%"}
      />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

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
      {all ? (
        <Statistics props={[good, neutral, bad, all, average]} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}
