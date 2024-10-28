/* eslint-disable react/prop-types */
export default function PersonsForm({
  addPerson,
  newName,
  newNumber,
  handleName,
  handleNumber,
}) {
  return (
    <form onSubmit={addPerson}>
      <h3>add a new</h3>
      <div>
        name:{" "}
        <input
          type="text"
          value={newName}
          onChange={handleName}
          placeholder="John Doe"
        />
      </div>
      <div>
        number:{" "}
        <input
          type="number"
          value={newNumber}
          onChange={handleNumber}
          placeholder="01-12345678"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
