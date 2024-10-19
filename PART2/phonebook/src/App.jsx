import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilter] = useState("");

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

    const newPersons = [...persons, { name: newName, number: newNumber }];
    setPersons(newPersons);
    setNewName("");
    setNewNumber("");

    console.log("After creating new person: ", newPersons);
  };

  const filteredPersons = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(filterText.toLowerCase()) ||
      person.number.includes(filterText)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          value={filterText}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {person.name} - {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
