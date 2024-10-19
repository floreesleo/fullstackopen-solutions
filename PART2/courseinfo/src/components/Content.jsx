import Part from "./Part";

export default function Content({ parts }) {
  // console.log("Parts: ", parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}
