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
        <input value={newName} onChange={handleName} placeholder="John Doe" />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={handleNumber}
          placeholder="963-156-1234"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
