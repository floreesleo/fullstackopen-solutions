import { useState, useEffect } from "react";
import { Filter, Notification, Persons, PersonsForm } from "./components";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      alert("Please complete the form");
      return;
    }

    const personExists = persons.find((person) => {
      return person.name.toLowerCase() === newName.toLowerCase();
    });

    if (personExists) {
      if (
        personExists.number !== newNumber &&
        window.confirm(
          `${personExists.name} is already added to phonebook, replace the old number with the new one?`
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

            setNotification(`${personExists.name} updated the number`);
            setType("success");
            setTimeout(() => {
              setNotification(null);
              setType(null);
            }, 5000);
          })
          .catch((error) => {
            console.error(error);
            setNotification(
              `Information of ${personExists.name} has already been removed from the server.`
            );
            setType("error");

            setTimeout(() => {
              setNotification(null);
              setType(null);
            }, 5000);
          });
      } else {
        // Si cancela la ventana de actualización
        setNewName("");
        setNewNumber("");
      }
    } else {
      // Código para crear una nueva persona
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      personService
        .add(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");

          setNotification(`Added ${newName}`);
          setType("success");
          setTimeout(() => {
            setNotification(null);
            setType(null);
          }, 5000);
        })
        .catch((error) => {
          console.error(error);
          setNotification(error.message);
          setType("error");

          setTimeout(() => {
            setNotification(null);
            setType(null);
          }, 5000);
        });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .erase(id)
        .then((deletedID) => {
          setPersons(persons.filter((p) => p.id !== deletedID));
        })
        .catch((error) => {
          console.error(error);
          setNotification("Error deleting the person.");
          setType("error");

          setTimeout(() => {
            setNotification(null);
            setType(null);
          }, 5000);
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
      <Notification message={notification} type={type} />
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
