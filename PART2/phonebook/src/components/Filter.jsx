export default function Filter({ filterText, handleFilter }) {
  return (
    <div>
      filter shown with:{" "}
      <input
        value={filterText}
        onChange={handleFilter}
        placeholder="name or number"
      />
    </div>
  );
}
