export default function Persons({ filteredPersons }) {
  return (
    <div>
      <h3>Numbers</h3>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {person.name} - {person.number}
        </div>
      ))}
    </div>
  );
}
