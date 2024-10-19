import { useState } from "react";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";

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

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const filteredPersons = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(filterText.toLowerCase()) ||
      person.number.includes(filterText)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilter={handleFilter} />
      <PersonsForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
