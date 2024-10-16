/* eslint-disable react/prop-types */

export default function Note({ note }) {
  console.log(note);
  return <li>{note.content}</li>;
}
