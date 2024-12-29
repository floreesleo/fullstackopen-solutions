/* eslint-disable react/prop-types */
export default function PersonsForm({
  addPerson,
  newName,
  newNumber,
  handleName,
  handleNumber,
}) {
  const inputStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  return (
    <form onSubmit={addPerson}>
      <h3>add a new</h3>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={inputStyle}>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={handleName}
            placeholder="John Doe"
          />
        </div>
        <div style={inputStyle}>
          number:{" "}
          <input
            type="text"
            value={newNumber}
            onChange={handleNumber}
            placeholder="01-102030"
          />
        </div>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
