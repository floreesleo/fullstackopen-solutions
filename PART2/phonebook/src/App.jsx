import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    console.log("Before creating new person: ", persons);

    if (newName === "") {
      alert("Please enter a name");
      return;
    }

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
        alert(`${newName} already exists`);
        return;
      }
    }

    const newPersons = [...persons, { name: newName }];
    setPersons(newPersons);
    setNewName("");

    console.log("After creating new person: ", newPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
