/* eslint-disable react/prop-types */
export default function Persons({ filteredPersons, onDelete }) {
  const tableStyle = {
    width: "50%",
  };
  return (
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Number</td>
          <td>Action</td>
        </tr>
        {filteredPersons.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
              <button onClick={() => onDelete(person.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
