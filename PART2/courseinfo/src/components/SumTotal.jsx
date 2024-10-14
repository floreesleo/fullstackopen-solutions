export default function SumTotal({ parts }) {
  // console.log("Partes: ", parts);
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  // console.log("Total: ", total);

  return <p>Total of {total} exercises</p>;
}
