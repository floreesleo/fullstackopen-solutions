export default function Part({ part }) {
  // console.log("Part", part);
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
