/* eslint-disable react/prop-types */
export default function Notification({ message }) {
  if (message === null) return null;

  const style = {
    color: "green",
    background: "lightgray",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  };

  return <div style={style}>{message}</div>;
}
