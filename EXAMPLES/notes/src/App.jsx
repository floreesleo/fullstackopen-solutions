import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);

  const hook = () => {
    console.log("Effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fullfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);
  console.log("render", notes.length, "notes");

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.content}
            {note.important && <span> (important)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
