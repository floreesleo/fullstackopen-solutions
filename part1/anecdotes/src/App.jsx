import { useState, useEffect } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [items, setItems] = useState([1, 3, 4, 2, 5, 2, 0, 7]);
  const [max, setMax] = useState([0, 0]);

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteAnecdote = () => {
    const copy = [...items];
    // console.log("Arreglo de la copia: ", copy);

    copy[selected] += 1;
    // console.log("Arreglo copy después de sumar: ", copy);

    setItems(copy);
  };

  const mostVotes = () => {
    const maxValue = Math.max(...items);
    const maxIndex = items.indexOf(maxValue);

    // console.log("Numero más alto: ", maxValue);
    // console.log("Indice del más alto: ", maxIndex);
    setMax([anecdotes[maxIndex], maxValue]);
  };

  useEffect(() => {
    mostVotes();
  }, [items]);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {items[selected]} votes</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={randomAnecdote}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{max[0]}</p>
      <p>has {max[1]} votes</p>
    </div>
  );
};

export default App;
