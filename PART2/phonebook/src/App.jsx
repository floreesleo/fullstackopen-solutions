import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    // console.log("Before creating new person: ", persons);

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

    const newPersons = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(newPersons));
    setNewName("");
    setNewNumber("");

    // console.log("After creating new person: ", newPersons);
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

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

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
