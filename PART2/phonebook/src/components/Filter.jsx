/* eslint-disable react/prop-types */
export default function Filter({ filterText, handleFilter }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        maxWidth: "15%",
      }}
    >
      filter shown with:{" "}
      <input
        value={filterText}
        onChange={handleFilter}
        placeholder="name or number"
      />
    </div>
  );
}
