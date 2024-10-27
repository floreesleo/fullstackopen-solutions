import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      alert("Please complete the form");
      return;
    }

    const idString = (persons.length + 1).toString();

    const personObject = {
      name: newName,
      number: newNumber,
      id: idString,
    };

    const personExists = persons.find((person) => {
      return (
        person.name.toLowerCase() === newName.toLowerCase() &&
        person.number !== newNumber
      );
    });

    if (
      personExists &&
      window.confirm(
        `${personExists.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const changedPerson = { ...personExists, number: newNumber };
      personService
        .update(personExists.id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== personExists.id ? person : returnedPerson
            )
          );
          setNewName("");
          setNewNumber("");

          setMessage(`${personExists.name} updated the number`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    } else if (personExists) {
      alert(`The new number was not added to ${personExists.name}`);
      setNewName("");
      setNewNumber("");
      return;
    }

    personService.add(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");

      setMessage(`Added ${returnedPerson.name}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .erase(id)
        .then((deletedID) => {
          setPersons(persons.filter((p) => p.id !== deletedID));
        })
        .catch((error) => {
          alert("Error deleting the person.");
          console.error(error);
        });
    }
  };

  const filteredPersons = Array.isArray(persons)
    ? persons.filter(
        (person) =>
          person.name.toLowerCase().includes(filterText.toLowerCase()) ||
          (person.number && person.number.includes(filterText))
      )
    : [];

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filterText={filterText} handleFilter={handleFilter} />
      <PersonsForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} onDelete={deletePerson} />
    </div>
  );
};

export default App;
